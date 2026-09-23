# NarrativeLine Vite 24678 Warning Diagnostic 1

Status: **REPRODUCED TWICE / TEST-ONLY OPERATIONAL WARNING / ACCEPTED NON-BLOCKING / CLOSED**  
Date: 2026-09-23

## Current-source findings

The current NarrativeLine full-test command is `node --experimental-strip-types --experimental-specifier-resolution=node --test tests/*.test.js` (from `package.json`). Its integration tests create Vite middleware-mode servers directly. The test call sites set `hmr: false`, but do not set `server.ws: false`; the development `vite.config.ts` has only the normal base path and React plugin and no port 24678 override. The warning is therefore from test-created Vite middleware servers, not the application runtime/dev-server configuration.

## Reproduction and lifecycle observations

Before the instrumented run, no process was listening on TCP 24678. It reproduced the exact warning **89 times**. The test command exited naturally in about 17 seconds with exit code 0 and a complete summary: **259 tests, 259 pass, 0 fail** (reported test duration 15049 ms).

During the instrumented run, transient TCP 24678 listeners were owned by Node test-worker processes running individual `tests/*.test.js` files. The listeners were observed while workers executed and disappeared as workers completed. Immediately after the parent test command exited, there was no TCP 24678 listener and no remaining test worker process matching the test files. A second ordinary `npm.cmd test` run on 2026-09-23 independently reproduced the warning and completed with **259/259 pass, 0 fail**, exit code 0, and reported duration 14165 ms. Immediate post-run inspection again found no 24678 listener and no test-file Node worker. This second run confirms repeatability; its console output was not separately counted for total warning occurrences.

The warning is consistent with parallel middleware-mode Vite servers attempting to open the same default HMR WebSocket port even though `hmr: false` is set. Vite's middleware test-server configuration defaults—not `vite.config.ts`'s application dev-server configuration—are implicated. A prior E2R-SPEC roadmap diagnostic records that `server.ws: false` suppresses this allocation in three LiaisonScape middleware test harnesses. No NarrativeLine setting was changed or comparison run performed here; applying that option solely to silence the warning is unnecessary for closure and is not claimed as revalidated in this checkpoint.

## Impact and disposition

No test assertion failed, no abnormal/hanging shutdown occurred, no listener/process remained after completion, and no product/runtime or Public behavior impact was found. This is a bounded local process/listener check; it does not trace every ephemeral OS handle or socket, but test workers naturally exit and the observed TCP listener is gone. The warning is noisy and reproducible, but operationally non-blocking in the current harness boundary. This checkpoint made no code, test, configuration, or cross-repository changes. The existing warning is **ACCEPTED / CLOSED as a non-blocking test-tooling warning**; suppressing it with a harness option may be considered separately if warning-free output becomes a requirement. No product or test architecture change is required by this evidence.
