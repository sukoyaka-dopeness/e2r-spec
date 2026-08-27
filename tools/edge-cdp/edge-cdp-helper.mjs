const DEFAULT_JSON_ENDPOINT = "http://127.0.0.1:9223/json";
const DEFAULT_TIMEOUT_MS = 5000;

function timeoutError(message) {
  const error = new Error(message);
  error.code = "CDP_TIMEOUT";
  return error;
}

function protocolError(message, response) {
  const error = new Error(message);
  error.code = "CDP_PROTOCOL_ERROR";
  error.response = response;
  return error;
}

function asText(data) {
  if (typeof data === "string") return Promise.resolve(data);
  if (data instanceof ArrayBuffer) return Promise.resolve(new TextDecoder().decode(data));
  if (ArrayBuffer.isView(data)) return Promise.resolve(new TextDecoder().decode(data));
  if (data && typeof data.text === "function") return data.text();
  return Promise.reject(new TypeError("Unsupported WebSocket message data"));
}

function once(target, event, handler) {
  target.addEventListener(event, handler, { once: true });
}

function withTimeout(promise, timeoutMs, message) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(timeoutError(message)), timeoutMs);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

function isNoDialogError(error) {
  return /no (javascript )?dialog/i.test(String(error?.message ?? error));
}

/**
 * Discover raw DevTools targets from a loopback Edge endpoint.
 * This function does not select a target or open a browser connection.
 */
export async function discoverTargets({
  endpoint = DEFAULT_JSON_ENDPOINT,
  fetchImpl = globalThis.fetch,
} = {}) {
  if (typeof fetchImpl !== "function") throw new Error("A fetch implementation is required");
  const response = await fetchImpl(endpoint);
  if (!response.ok) throw new Error(`CDP target discovery failed with HTTP ${response.status}`);
  const targets = await response.json();
  if (!Array.isArray(targets)) throw new Error("CDP target discovery returned a non-array response");
  return targets;
}

/**
 * Select exactly one usable page target. Ambiguous selection is an error so a
 * browser acceptance caller cannot silently attach to the wrong application.
 */
export function selectPageTarget(targets, { urlIncludes, titleIncludes } = {}) {
  const pages = targets.filter((target) => (
    target?.type === "page"
    && typeof target.webSocketDebuggerUrl === "string"
    && target.webSocketDebuggerUrl.length > 0
    && (urlIncludes === undefined || String(target.url ?? "").includes(urlIncludes))
    && (titleIncludes === undefined || String(target.title ?? "").includes(titleIncludes))
  ));
  if (pages.length === 0) {
    const error = new Error("No matching page target with a WebSocket debugger URL was found");
    error.code = "CDP_TARGET_NOT_FOUND";
    throw error;
  }
  if (pages.length > 1) {
    const error = new Error(`Target selection is ambiguous: ${pages.length} page targets matched`);
    error.code = "CDP_TARGET_AMBIGUOUS";
    error.targets = pages.map(({ id, title, url }) => ({ id, title, url }));
    throw error;
  }
  return pages[0];
}

export class EdgeCdpConnection {
  #socket;
  #target;
  #nextId = 1;
  #pending = new Map();
  #closed = false;
  #nativeDialog = { state: "unknown", type: null, messagePresent: false };
  #nativeDialogWaiters = new Set();

  constructor(target, { webSocketFactory = (url) => new WebSocket(url), timeoutMs = DEFAULT_TIMEOUT_MS } = {}) {
    this.#target = target;
    this.timeoutMs = timeoutMs;
    this.#socket = webSocketFactory(target.webSocketDebuggerUrl);
    this.#socket.addEventListener("message", (event) => { void this.#handleMessage(event.data); });
    this.#socket.addEventListener("close", () => this.#handleClose(new Error("CDP WebSocket closed")));
    this.#socket.addEventListener("error", (event) => this.#handleClose(new Error(`CDP WebSocket error${event?.message ? `: ${event.message}` : ""}`)));
  }

  async open({ enablePage = true } = {}) {
    if (this.#socket.readyState !== 1) {
      await withTimeout(new Promise((resolve, reject) => {
        once(this.#socket, "open", resolve);
        once(this.#socket, "error", () => reject(new Error("CDP WebSocket failed to open")));
      }), this.timeoutMs, "Timed out opening the CDP WebSocket");
    }
    if (enablePage) await this.sendCommand("Page.enable");
    return this;
  }

  get target() {
    return this.#target;
  }

  get connected() {
    return !this.#closed && this.#socket.readyState === 1;
  }

  async sendCommand(method, params = {}) {
    if (!this.connected) throw new Error("CDP WebSocket is not connected");
    const id = this.#nextId++;
    const response = new Promise((resolve, reject) => this.#pending.set(id, { resolve, reject }));
    try {
      this.#socket.send(JSON.stringify({ id, method, params }));
    } catch (error) {
      this.#pending.delete(id);
      throw error;
    }
    return withTimeout(response, this.timeoutMs, `Timed out waiting for CDP response ${id} (${method})`);
  }

  async evaluate(expression, { returnByValue = true, awaitPromise = true } = {}) {
    const response = await this.sendCommand("Runtime.evaluate", { expression, returnByValue, awaitPromise });
    if (response.exceptionDetails) throw protocolError("Runtime.evaluate raised an exception", response);
    return response.result?.result?.value;
  }

  async getFocusInfo() {
    return this.evaluate(`(() => {
      const element = document.activeElement;
      return element ? {
        tagName: element.tagName,
        id: element.id || null,
        role: element.getAttribute("role"),
        ariaLabel: element.getAttribute("aria-label"),
        text: element.textContent?.trim().slice(0, 160) || null,
      } : null;
    })()`);
  }

  getNativeDialogState() {
    return { ...this.#nativeDialog };
  }

  getAcceptanceState() {
    const nativeDialog = this.getNativeDialogState();
    return {
      target: { id: this.#target.id, title: this.#target.title, url: this.#target.url },
      connected: this.connected,
      nativeDialog,
      visualManualAllowed: nativeDialog.state === "closed",
    };
  }

  async recoverNativeDialog({ accept = false, waitForClosed = true } = {}) {
    try {
      await this.sendCommand("Page.handleJavaScriptDialog", { accept });
    } catch (error) {
      if (!isNoDialogError(error)) throw error;
      this.#setNativeDialog({ state: "closed", type: null, messagePresent: false });
      return this.getNativeDialogState();
    }
    if (waitForClosed && this.#nativeDialog.state !== "closed") {
      await withTimeout(new Promise((resolve) => this.#nativeDialogWaiters.add(resolve)), this.timeoutMs, "Timed out waiting for the native dialog to close");
    }
    return this.getNativeDialogState();
  }

  close() {
    if (this.#closed) return;
    this.#handleClose(new Error("CDP connection closed by caller"), false);
    this.#socket.close();
  }

  async #handleMessage(data) {
    let message;
    try {
      message = JSON.parse(await asText(data));
    } catch {
      this.#handleClose(new Error("CDP WebSocket delivered invalid JSON"));
      return;
    }
    if (message.method === "Page.javascriptDialogOpening") {
      this.#setNativeDialog({ state: "open", type: message.params?.type ?? null, messagePresent: typeof message.params?.message === "string" });
      return;
    }
    if (message.method === "Page.javascriptDialogClosed") {
      this.#setNativeDialog({ state: "closed", type: null, messagePresent: false });
      return;
    }
    if (typeof message.id !== "number") return;
    const pending = this.#pending.get(message.id);
    if (!pending) return;
    this.#pending.delete(message.id);
    if (message.error) pending.reject(protocolError(`CDP command failed: ${message.error.message ?? "unknown error"}`, message));
    else pending.resolve(message);
  }

  #setNativeDialog(state) {
    this.#nativeDialog = state;
    if (state.state === "closed") {
      for (const resolve of this.#nativeDialogWaiters) resolve();
      this.#nativeDialogWaiters.clear();
    }
  }

  #handleClose(error, rejectSocket = true) {
    if (this.#closed) return;
    this.#closed = true;
    for (const { reject } of this.#pending.values()) reject(error);
    this.#pending.clear();
    if (this.#nativeDialogWaiters.size > 0) {
      for (const resolve of this.#nativeDialogWaiters) resolve();
      this.#nativeDialogWaiters.clear();
    }
  }
}

export async function connectCdp(target, options = {}) {
  return new EdgeCdpConnection(target, options).open(options);
}
