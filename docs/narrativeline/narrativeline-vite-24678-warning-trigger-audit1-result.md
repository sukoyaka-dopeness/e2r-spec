# NarrativeLine Vite 24678 Warning Trigger Audit 1

Status: **TRIGGER IDENTIFIED / TEST-ONLY OPERATIONAL WARNING / ACCEPTED / CLOSED**  
Date: 2026-09-23

## Scope

This is a bounded follow-up to [Warning Diagnostic 1](narrativeline-vite-24678-warning-diagnostic1-result.md). It does not reopen the accepted product-defect disposition and makes no product, test, configuration, shared-infrastructure, or dependency changes.

## Trigger and port purpose

Current NarrativeLine uses Vite 8.1.5. Its integration tests create independent `createServer()` instances with `server.middlewareMode: true` and `hmr: false` in Node's parallel test workers. Vite's `vite.config.ts` is separate and contains only the app base path and React plugin.

Installed Vite source (`node_modules/vite/dist/node/chunks/node.js`) establishes the relevant path:

- `createWebSocketServer()` returns a no-op only when `config.server.ws === false`; otherwise it creates the WebSocket transport/server.
- Middleware-mode client config defaults the WebSocket port to `24678` when no WS server is specified.
- The WS transport `listen()` calls `wsHttpServer.listen(port)`; on `EADDRINUSE`, Vite logs `WebSocket server error: Port 24678 is already in use`.
- The WS transport is part of Vite's development HMR/WebSocket endpoint. It is not NarrativeLine's product HTTP server or data/runtime service.

Thus `hmr: false` does not mean “do not construct/listen on the Vite WS endpoint”; `server.ws: false` is the separate setting that disables this listener in the installed version.

## Bounded reproduction

With one middleware-mode Vite server and port 24678 already occupied, Vite created its WS listener path but the minimal setup did not emit the conflict warning. With eight middleware-mode Vite servers initialized in parallel under `hmr: false`, the minimal reproduction emitted **7** `EADDRINUSE` warnings: one listener obtained the fixed port and the other seven lost the bind race. All servers closed; no listener remained. This reproduces the concrete trigger without relying on product behavior or test assertions.

The preceding full NarrativeLine runs reproduced the warning (89 occurrences in one instrumented run and again in a second run), completed naturally with 259/259 passing tests, and left no 24678 listener or test worker after exit. This is consistent with Node test workers concurrently initializing independent middleware-mode Vite servers that use the same fixed default port.

## Assessment

NarrativeLine's test setup contributes the parallel-server condition, but no cleanup leak, failing assertion, abnormal shutdown, or product/Public impact was evidenced. The message accurately reports `EADDRINUSE` for Vite's optional test-time WS/HMR endpoint, not a failed test server or product listener. The test-only `server.ws: false` option could avoid opening this unused test transport, but changing all or selected test call sites is unnecessary for the accepted operational-warning closure and is not done here. No console filtering/suppression was used.

**Trigger audit: ACCEPTED / CLOSED.** Residual uncertainty is limited to other Vite versions/environments and OS handles beyond the observed port/process checks; no evidence currently justifies broader investigation or a change.
