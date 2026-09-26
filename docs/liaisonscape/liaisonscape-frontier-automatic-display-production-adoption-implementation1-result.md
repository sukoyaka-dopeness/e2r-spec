# LiaisonScape Frontier Automatic Display Production Adoption Implementation 1

Date: 2026-09-16

## Final classification

PRODUCTION NORMAL-PATH WIRED / BOUNDED FALLBACK PROVEN / PRODUCTION ACCEPTANCE PENDING

The normal coordinate-less Dataset-open path now starts the already-proven
Frontier/Product Worker flow without requiring a DEV query parameter. The
existing `settleInitialPlacement` output is still prepared and published first
as the usable fallback. This checkpoint wires the normal path only; formal
Production Acceptance / Closure remains separate.

## Implemented boundary

`App.tsx` enables the existing Frontier async policy for normal coordinate-less
opens. The explicit DEV `initial-layout=frontier-12-worker` URL remains a
reproducible diagnostic alias, but it is no longer required for the operation.
No Frontier or Product computation was copied or retuned.

The operation remains:

```text
normalized coordinate-less Dataset
-> settleInitialPlacement fallback publication
-> immutable graph/config snapshot
-> existing Worker Frontier/Product computation
-> main-thread operation/snapshot/result validation
-> current complete finite render-only position adoption
```

Stored and mixed/partial Coordinates bypass Frontier and retain existing
Product authority. Frontier does not own routing, Relation-label, Node-label,
Self-loop, viewport, manual placement, Dataset, persistence, or dirty-state
semantics.

The adapter now also converts Worker construction exceptions into the same
bounded fallback outcome as Worker errors. Invalid, incomplete, non-finite,
cancelled, or stale results are not adopted. Invalidation clears stale terminal
UX state before a replacement or another operation.

## Evidence

The reproducible artifact is
`../e2r-liaison-scape/experimental/frontier-automatic-display-production-adoption-implementation1/result.json`.

Actual Product smoke on the normal URL, with no `initial-layout` parameter,
observed Lighthouse EN entering `started`, showing pending status, Cancel, and
graph-only provisional treatment, then reaching `completed` with status removed
and graph opacity restored. The graph rendered without console errors. A
second normal URL smoke also rendered successfully. Existing focused tests
cover stored/mixed bypass, success adoption, cancellation, stale delivery,
Worker failure, Worker construction failure, and Dataset safety. The prior
browser matrix remains the evidence for EN/JA pending UX and the corrected
status/viewport-toolbar separation.

## Production boundary and remaining gate

The production normal-path provider/default is now the Frontier async operation
with `settleInitialPlacement` fallback. This is a source integration change,
not a final release decision. Formal Production Acceptance / Closure must still
exercise the existing acceptance matrix on the normal path and record the
rollout/default disposition.

Human Review remains `QUALIFIED`; provider reselection is not reopened. The
accepted ordinary crossing residual, dense runtime/congestion boundary, and
all routing/label/Self-loop follow-ups remain unchanged.
