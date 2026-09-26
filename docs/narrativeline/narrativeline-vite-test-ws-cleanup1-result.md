# NarrativeLine Vite Test WebSocket Cleanup 1

Status: **IMPLEMENTED / ACCEPTED / CLOSED**  
Date: 2026-09-23

## Decision and change

The current test suite creates 18 Vite middleware-mode servers for SSR module loading/transform and DOM integration. A source/test search found no test use of a WebSocket client, WebSocket server, Vite HMR send/listen API, or hot-channel events. Installed Vite 8.1.5 provides `server.ws: false` as a no-op WS transport while retaining the middleware server, SSR module loader, and ordinary close lifecycle.

Added `ws: false` to the local `server` options at all 18 test `createServer()` call sites. Kept existing `hmr`, middleware, port, strictPort, and appType options intact. No product code, test assertions/semantics, dependency, shared infrastructure, or other repository changed. This disables the unnecessary listener itself; no warning filtering/suppression is involved.

## Validation

- Full `npm.cmd test`: **259/259 pass, 0 fail**, natural exit code 0; test duration 16646 ms.
- Captured output: **0** `Port 24678 is already in use` warnings.
- During-run 250ms listener sampling: **0** port 24678 listener observations; post-run: **0** listeners and **0** remaining test workers.
- `npm.cmd run lint`: PASS.
- `npm.cmd run build`: PASS.
- `git diff --check`: PASS (existing line-ending warnings only).

## Boundary

The WebSocket transport was unnecessary for the current SSR/DOM test harnesses. Local cleanup is **ACCEPTED / CLOSED**. Residual risk is limited to future tests adding an explicit Vite WebSocket/HMR interaction; such a test must opt back into the transport for its own server. Product runtime and Public artifacts are unchanged.
