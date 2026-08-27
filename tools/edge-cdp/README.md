# E2R Edge CDP helper

This is a non-normative, cross-application browser-acceptance helper for a
dedicated Microsoft Edge session. It is owned by `e2r-spec` because it covers
transport and browser-state evidence shared by E2R applications; it does not
belong to NarrativeLine or LiaisonScape and is not a production dependency.

## Scope

The helper provides:

- `/json` page-target discovery and exact target selection;
- Node.js 24 built-in `WebSocket` CDP connection;
- command-ID correlation and CDP event separation;
- `Runtime.evaluate` and focus inspection;
- native JavaScript dialog state as `open`, `closed`, or `unknown`;
- explicit `Page.handleJavaScriptDialog` recovery; and
- acceptance state that blocks visual/manual PASS unless native dialog state
  is known to be `closed`.

It deliberately does not contain application selectors, fixtures, viewport
assumptions, screenshots, pointer coordinates, deletion scenarios, or DOM
assertions. Those remain in checkpoint-specific callers.

## Minimal usage

```js
import { connectCdp, discoverTargets, selectPageTarget } from "./edge-cdp-helper.mjs";

const targets = await discoverTargets({ endpoint: "http://127.0.0.1:9223/json" });
const target = selectPageTarget(targets, { urlIncludes: "5175" });
const cdp = await connectCdp(target);

console.log(await cdp.evaluate("document.title"));
console.log(cdp.getAcceptanceState());
console.log(await cdp.getFocusInfo());

// Call only when the caller explicitly intends to recover an unwanted dialog.
await cdp.recoverNativeDialog({ accept: false });
cdp.close();
```

The target ID, WebSocket URL, and complete target listing are ephemeral local
diagnostic data. Do not commit or publish them.

Run the helper's pure tests with:

```text
npm run test:cdp
```
