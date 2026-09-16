# LiaisonScape Frontier Automatic Display App Async Adapter / Lifecycle Staging 1

Date: 2026-09-16

## Final classification

STAGED / LIFECYCLE CONTRACT PROVEN / PRODUCTION DEFAULT HOLD

This checkpoint adds a production-shaped DEV staging seam. It does not switch
the normal automatic-display provider, and the current normal coordinate-less
path remains settleInitialPlacement.

## Implemented boundary

src/frontier-automatic-display-adapter.ts owns the bounded async operation
boundary:

current Dataset/session -> coordinate authority gate -> immutable semantic snapshot -> Worker operation -> identity/validity check -> success | stale | cancel | failure

The adapter reuses the existing actual Worker proof entry point and the single
Frontier/Product computation source. It does not copy the solver or move Product
presentation authority. The Worker still performs Frontier candidate generation
and the current pure Product proposal evaluation/selection. The main thread
retains operation identity, generation and snapshot validation, render-only
derived-position adoption, viewport fit, and Dataset/session authority.

The App connection is intentionally DEV-only and opt-in through:

?acceptance-fixture=lighthouse&acceptance-locale=en&initial-layout=frontier-12-worker

Dataset acceptance first publishes the existing settleInitialPlacement result.
Only a coordinate-less, non-empty Dataset starts the staged Worker operation.
Stored Coordinates and mixed/partial Coordinates remain with
placeInitialEntities/the existing Product authority and do not start Frontier.
Successful output updates only in-memory render positions and fit; it does not
write Dataset coordinates, mark dirty, persist, or alter manual placement
semantics. Invalid, incomplete, non-finite, failed, cancelled, or stale output
is never adopted, leaving the bounded fallback visible.

Relevant Dataset mutation, coordinate save, manual Node/route/label mutation,
workspace exit, replacement, and unmount invalidate or cancel the active
operation. A monotonic generation and immutable semantic Dataset/graph
identity prevent a late result from an older session from overwriting newer
state. Viewport-only navigation is not treated as Dataset mutation.

## Evidence

The replay artifact is
../e2r-liaison-scape/experimental/frontier-automatic-display-app-async-adapter-lifecycle-staging1/result.json.

Focused tests in
tests/frontier-automatic-display-adapter.test.ts passed for:

- stored and mixed coordinate authority gating;
- complete finite success and render-only adoption data;
- invalidation termination with a late completion that cannot settle the
  operation;
- cancellation before completion with no published result;
- structured Worker failure with no partial output.

The Actual Product DEV seam was opened with the Lighthouse EN URL above. The
browser observed the 10-node/14-relation graph, reached
data-frontier-async-state=completed, and reported no console errors. Dataset
open timing showed the current Product fallback was prepared and published
before the asynchronous operation completed.

This is one browser smoke result, not a full lifecycle campaign or a quality
acceptance. Stored/mixed gate behavior and race behavior are covered by the
focused adapter tests; broader UI lifecycle coverage remains a later
production-integration gate.

## Deliberately deferred

The normal provider, production default, visible Cancel UI, transient preview,
timeout policy, solver quality, routing, labels, Self-loop presentation,
Dataset/persistence/dirty-state semantics, and execution-architecture
reselection remain unchanged. Human Review and provider selection are not
reopened.

The next decision is whether this staged operation can be promoted through a
separate production-integration checkpoint with an explicit acceptance matrix.
That decision must still cover real Dataset replacement/repeated-open behavior,
failure fallback observability, and the product policy for exposing or hiding
the operation while it is pending.
