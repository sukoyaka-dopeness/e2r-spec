# LiaisonScape Browser Capture1 Restart1 B1 Entry Readiness Diagnostic1

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART1-B1-ENTRY-READINESS-DIAGNOSTIC1`
- Date: 2026-09-04 (JST)
- Result: **CASE 1 / DECISION A — `B1-ENTRY-SEAM-IDENTIFIED`**
- Primary classification: **`ENTRY-B / URL-ROUTE-MISMATCH`**
- Subordinate classification: **`PAGE-BOOTSTRAP-FAILURE`**

## Scope and authority

The preceding checkpoint was `B1-EXECUTION1`, recorded as
`CASE 2 / DECISION B — B1-BROWSER-GATE-FAIL`. The e2r-spec starting HEAD was
`7530fda3aa526a3d5af44ac6ebc086b0a80c602a`. The retained Restart1 authority was
`C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-browser-capture-restart1`
at blocked commit `6b3e9f16424de283248298cb03e0f42c8a9eb9e7`. The semantic run was
`pr3r1-6560dd8187ddaa1ff002034ab99ffe91a3336b430f449cc1f1c7da85e26659d9` and
the phase-local run was `browser-capture-restart1-2026-09-04`.

The blocking item was `apollo-11 / en`. Its retained record has three attempts,
all failing with `isolated browser entry did not become ready`; B1 success is
`0`, terminal failure is `1`, and pending is `15`. The Restart1 artifact root was
not overwritten or regenerated. This diagnostic used the fresh clone
`C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-b1-entry-readiness-diagnostic1`,
based exactly on the blocked commit above.

The current Edge authority was `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`,
version `152.0.4191.62`; browser-authority drift was **NO**. The diagnostic host
snapshot recorded Windows 11 Home 25H2 build `26200.9168`, Intel Graphics driver
`32.0.101.7088` dated 2026-06-17, and KB5120998 **not installed**. GPU-fatal and
cache-lock reproduction was `NO` / `NO`.

## Diagnostic observations

### Q1–Q11

**Q1.** Yes. The local Vite server started, remained reachable, and served both
the base URL and the exact B1 target with HTTP `200`. The command was

```text
node node_modules/vite/bin/vite.js experimental/product-evaluation-seam/browser-capture1 --host 127.0.0.1 --port 4173
```

from the diagnostic clone root. Server startup is **PASS**, host is
`127.0.0.1`, and the selected port is `4173`.

**Q2.** The exact B1 URL for `apollo-11/en` was:

```text
http://127.0.0.1:4173/e2r-liaison-scape/?cell=apollo_11__en&attempt=1
```

The pathname is `/e2r-liaison-scape/`; query parameters are
`cell=apollo_11__en` and `attempt=1`; there is no hash. The fixture identifier
is `apollo-11`, and the locale is `en`.

**Q3.** Yes. Edge navigated to the target; `DOMContentLoaded` and `loadEvent`
were both observed, and the final document URL was the target URL. The retained
B1 failure records do not emit a numeric first-CDP timing, so none is inferred.

**Q4.** The target document returned HTTP `200` with `text/html`, and the
document reached `readyState: complete`. This is Vite HTML fallback behavior,
not proof that the evaluation entry bootstrapped.

**Q5.** Yes. `#evaluation-root` existed from the first recorded poll (about
19 ms), but it remained empty.

**Q6.** No. No expected SVG mounted during any of the 100 polls.

**Q7.** No. `globalThis.__E2R_BROWSER_READY__ === true` never became true.

**Q8.** There were no `Network.loadingFailed` events and no failed module
requests. There was one nonblocking `/favicon.ico` 404. The blocking resource
problem was semantic: `capture-input.json` returned HTTP `200` with
`text/html`, so the page raised:

```text
Uncaught SyntaxError: Unexpected token '<', "<!doctype "... is not valid JSON
```

The exception prevented the `createRoot(...).render(...)` and ready-marker path.

**Q9.** No. The successful readiness smoke used the static
`experimental/product-evaluation-seam/browser1/index.html` entry at
`/e2r-liaison-scape/experimental/product-evaluation-seam/browser1/index.html`,
with `npm.cmd run dev` from the separate readiness-requalification clone. It
used a neutral static fixture, a DOM/SVG/viewBox predicate, and no injected
`capture-input.json`. B1 used the `browser-capture1` entry, the direct-Vite
startup path, the `/e2r-liaison-scape/?cell=...&attempt=...` route, an injected
fixture/locale input, and a global ready marker. The entries, routes, startup
paths, bootstrap state, navigation sequences, predicates, and timeouts do not
match.

**Q10.** The server itself is not the cause. The first meaningful failure is an
**URL/route/static-asset resolution mismatch**, which becomes a page bootstrap
failure: `./capture-input.json` resolves from the B1 page to
`/e2r-liaison-scape/capture-input.json?cacheBust=...`, where Vite returns the
HTML fallback. The frozen fixture and locale identifiers resolve, but the JSON
payload is not delivered as JSON. This is not a readiness-timeout-only issue,
not a module-load failure, not a Product downstream failure, and not a browser
runtime failure.

**Q11.** No. Windows Update is not relevant to this failure. The diagnostic
reached the page, observed stable document lifecycle events, recorded zero GPU
fatal/cache-lock signals, and found a deterministic entry/bootstrap exception.
KB5120998 remains deferred.

## Exact readiness trace

The B1 executor predicate was exactly:

```js
globalThis.__E2R_BROWSER_READY__ === true
```

It polled every `100 ms` for `100` polls (a 10-second readiness window). The
root was present from the first poll; `readyState` progressed to `complete`; SVG
and viewBox stayed absent/null; and the ready marker stayed false. The first
unmet conditions were SVG, viewBox, and ready marker at poll 1. No timing is
invented for the retained failure records because their `firstCdpMs` values are
`null`; the diagnostic browser did reach and instrument the target after its
CDP navigation.

Fixture resolution was **YES** from the frozen `apollo-11` record; locale
resolution was **YES** for `en`; fixture injection was **attempted**, but
delivery as parseable JSON was **NO**. No unsupported schema/version error was
observed. The evaluation root was present, but no evaluation graph rendered.

## Smoke/B1 comparison

| Dimension | Successful readiness smoke | Blocked B1 path | Match |
|---|---|---|---|
| Server | `npm.cmd run dev` | direct Vite child process | NO |
| Server cwd | readiness-requalification clone | B1 diagnostic clone / Restart1 root | NO |
| Entry | `browser1/index.html` | `browser-capture1` page via `/e2r-liaison-scape/` fallback | NO |
| Route | `/e2r-liaison-scape/experimental/product-evaluation-seam/browser1/index.html` | `/e2r-liaison-scape/?cell=apollo_11__en&attempt=1` | NO |
| Fixture | neutral static smoke fixture | `capture-input.json` for `apollo-11/en` | NO |
| Locale | none | `en` in capture input | NO |
| Bootstrap | static import and graph mount | fetch JSON, render, then marker | NO |
| Ready predicate | root + SVG + viewBox | `globalThis.__E2R_BROWSER_READY__ === true` | NO |
| Timeout | 10 × 300 ms DOM loop | 100 × 100 ms marker loop | NO |
| Navigation | smoke target launch / DOM probe | B1 executor launches with target argv, then CDP `Page.navigate` to the same target | NO |

The first meaningful divergence is therefore the non-equivalent entry/route and
bootstrap contract. The observed asset-resolution divergence is decisive:
expected `/capture-input.json` became
`/e2r-liaison-scape/capture-input.json?cacheBust=...`, status `200`, content type
`text/html`, followed by the JSON parse exception. No one-variable control was
executed because this first divergence was conclusive; the control result is
`NOT RUN / NOT NEEDED`.

## Boundary result

- Root classification: **`ENTRY-B / URL-ROUTE-MISMATCH`** with subordinate
  **`PAGE-BOOTSTRAP-FAILURE`**.
- Harness/entry seam demonstrated: **YES**.
- Product downstream defect demonstrated: **NO**.
- Browser runtime defect demonstrated: **NO**.
- Windows Update relevant next: **NO**.
- Restart1 semantic identity changed: **NO**.
- B1 resumed: **NO**.
- Exact next prerequisite: **bounded Restart1 B1 entry-seam correction checkpoint**.
- Next checkpoint: **NOT STARTED**.

This checkpoint diagnoses but does not repair the seam. No route, timeout,
predicate, fixture, locale, server startup, Product semantics, Harness contract,
GPU setting, browser authority, or Windows Update state was changed.

## Downstream state

B1 remains success `0`, failure `1`, pending `15`; V3 executed `0`; screenshots
are `0`; Browser Evidence B is `NONE / INCOMPLETE`; Human Review is `NO`;
Review1 is **NOT ELIGIBLE**; E-VISUAL is `NO`; ranking and selection are `NO`;
Product integration is `NO`; and PR-3 is `NO`. V3 remains prohibited until a
separate bounded correction checkpoint establishes the prerequisite.

## Evidence, validation, and repository state

Diagnostic artifacts are non-evidence artifacts under
`C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-b1-entry-readiness-diagnostic1\diagnostics\b1-entry-readiness-diagnostic1\`.
They include the static comparison, server startup logs, target response,
navigation lifecycle, DOM snapshots, readiness poll trace, console/runtime
events, network observations, root classification, and cleanup audit.

The diagnostic clone has final HEAD
`a9fa2d7890a1a9db65178b38e5434fa8c1de5477` and is clean. Its local commits are:

1. `ff406149ee0e24b6951d04768cad1838061f76c6` —
   `diagnostic: isolate B1 browser entry readiness failure`
2. `a9fa2d7890a1a9db65178b38e5434fa8c1de5477` —
   `diagnostic: record B1 entry route divergence`

The focused diagnostic tests passed `3/3`; both diagnostic scripts passed
`node --check`. `npm.cmd run validate` and `git diff --check` are required for
the e2r-spec checkpoint and are recorded with the final commit below.

Roadmap was changed additively. The reusable observation remains **Knowledge
Candidate only / no new entry**; `ai-knowledge` was unchanged, including its
pre-existing dirty playbook state. Live Product is unchanged; protected samples
are preserved; Machine Evidence and the original Harness are unchanged; the
retained materializer and Baseline2 are unchanged. No push, tag, release,
deploy, or publication occurred.
