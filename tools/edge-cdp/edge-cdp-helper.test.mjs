import test from "node:test";
import assert from "node:assert/strict";
import { connectCdp, discoverTargets, selectPageTarget } from "./edge-cdp-helper.mjs";

const target = {
  id: "page-1",
  type: "page",
  title: "E2R test page",
  url: "http://localhost:5175/e2r-liaison-scape/",
  webSocketDebuggerUrl: "ws://127.0.0.1:9223/devtools/page/page-1",
};

class FakeWebSocket {
  static OPEN = 1;

  constructor() {
    this.readyState = 0;
    this.listeners = new Map();
    this.sent = [];
    queueMicrotask(() => {
      this.readyState = FakeWebSocket.OPEN;
      this.emit("open", {});
    });
  }

  addEventListener(event, listener, options = {}) {
    const listeners = this.listeners.get(event) ?? new Set();
    listeners.add(options.once ? { listener, once: true } : { listener, once: false });
    this.listeners.set(event, listeners);
  }

  send(payload) {
    const command = JSON.parse(payload);
    this.sent.push(command);
    if (command.method === "Page.enable") this.respond(command.id, { result: {} });
    if (command.method === "Runtime.evaluate") {
      const value = command.params.expression.includes("document.activeElement")
        ? { tagName: "BUTTON", id: "keep", role: null, ariaLabel: "Keep Entity", text: "Keep Entity" }
        : "E2R test page";
      this.respond(command.id, { result: { result: { type: typeof value === "string" ? "string" : "object", value } } });
    }
    if (command.method === "Page.handleJavaScriptDialog") this.respond(command.id, { result: {} });
  }

  respond(id, body) {
    queueMicrotask(() => this.emit("message", { data: JSON.stringify({ id, ...body }) }));
  }

  emit(event, value) {
    for (const entry of [...(this.listeners.get(event) ?? [])]) {
      entry.listener(value);
      if (entry.once) this.listeners.get(event).delete(entry);
    }
  }

  close() {
    this.readyState = 3;
    this.emit("close", {});
  }
}

test("discoverTargets uses the supplied endpoint and returns raw targets", async () => {
  const calls = [];
  const targets = await discoverTargets({
    endpoint: "http://127.0.0.1:9223/json",
    fetchImpl: async (endpoint) => {
      calls.push(endpoint);
      return { ok: true, json: async () => [target] };
    },
  });
  assert.deepEqual(calls, ["http://127.0.0.1:9223/json"]);
  assert.deepEqual(targets, [target]);
});

test("selectPageTarget rejects no match and ambiguity", () => {
  assert.throws(() => selectPageTarget([]), { code: "CDP_TARGET_NOT_FOUND" });
  assert.throws(() => selectPageTarget([target, { ...target, id: "page-2" }]), { code: "CDP_TARGET_AMBIGUOUS" });
  assert.equal(selectPageTarget([target], { urlIncludes: "5175" }), target);
});

test("connection correlates command responses and distinguishes CDP events", async () => {
  let socket;
  const connection = await connectCdp(target, {
    webSocketFactory: () => {
      socket = new FakeWebSocket();
      return socket;
    },
  });
  assert.equal(socket.sent[0].method, "Page.enable");
  assert.equal(connection.connected, true);
  assert.equal(await connection.evaluate("document.title"), "E2R test page");
  assert.deepEqual(await connection.getFocusInfo(), { tagName: "BUTTON", id: "keep", role: null, ariaLabel: "Keep Entity", text: "Keep Entity" });
  assert.deepEqual(connection.getNativeDialogState(), { state: "unknown", type: null, messagePresent: false });
  assert.equal(connection.getAcceptanceState().visualManualAllowed, false);

  socket.emit("message", { data: JSON.stringify({ method: "Page.javascriptDialogOpening", params: { type: "beforeunload", message: "unsaved work" } }) });
  await new Promise((resolve) => setImmediate(resolve));
  assert.deepEqual(connection.getNativeDialogState(), { state: "open", type: "beforeunload", messagePresent: true });
  assert.equal(connection.getAcceptanceState().visualManualAllowed, false);
  socket.emit("message", { data: JSON.stringify({ method: "Page.javascriptDialogClosed", params: { result: true } }) });
  await new Promise((resolve) => setImmediate(resolve));
  assert.deepEqual(connection.getNativeDialogState(), { state: "closed", type: null, messagePresent: false });
  assert.equal(connection.getAcceptanceState().visualManualAllowed, true);
  connection.close();
});

test("explicit native-dialog recovery sends accept false and waits for closed", async () => {
  let socket;
  const connection = await connectCdp(target, {
    webSocketFactory: () => {
      socket = new FakeWebSocket();
      return socket;
    },
  });
  socket.emit("message", { data: JSON.stringify({ method: "Page.javascriptDialogOpening", params: { type: "beforeunload", message: "unsaved work" } }) });
  await new Promise((resolve) => setImmediate(resolve));
  const recovery = connection.recoverNativeDialog();
  await new Promise((resolve) => setImmediate(resolve));
  const command = socket.sent.at(-1);
  assert.deepEqual(command, { id: 2, method: "Page.handleJavaScriptDialog", params: { accept: false } });
  socket.emit("message", { data: JSON.stringify({ method: "Page.javascriptDialogClosed", params: { result: false } }) });
  assert.deepEqual(await recovery, { state: "closed", type: null, messagePresent: false });
  connection.close();
});
