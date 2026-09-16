# LiaisonScape Frontier Automatic Display Pending UX / Production-Integration Lifecycle Acceptance 1

Date: 2026-09-16

## Final classification

PENDING UX STAGED / LIFECYCLE ACCEPTANCE BOUNDED / PRODUCTION DEFAULT HOLD

This checkpoint prepares and smoke-validates the DEV-only Frontier Worker
staging seam for a visible pending experience. It does not change the normal
automatic-display provider or record a Human Review visual disposition.

## Source-backed boundary

The seam is enabled only by the DEV query condition
`initial-layout=frontier-12-worker`. Dataset acceptance first publishes the
existing `settleInitialPlacement` result. A coordinate-less, non-empty Dataset
then starts the existing Frontier/Product Worker operation through
`FrontierAutomaticDisplayAdapter`.

While the operation is pending, the fallback graph remains usable. The graph
surface alone receives provisional opacity/saturation styling, and a live
status exposes the pending state with a Cancel action. Application chrome is
not globally disabled and the existing focus-visible rules remain in force.
The pending, Cancel, cancelled, and bounded-fallback strings are available in
English and Japanese.

The adapter continues to own operation identity, generation, snapshot
validation, Worker termination, and complete-finite-result validation. Only a
current successful result updates render-only positions and viewport fit.
Cancellation, failure, invalid output, Dataset replacement, mutation,
workspace exit, unmount, and stale delivery cannot publish partial or late
positions. Stored and mixed Coordinates remain on existing Product authority;
Dataset, persistence, dirty-state, routing, Relation-label, Node-label, and
Self-loop semantics are unchanged.

## Acceptance evidence

The reproducible app artifact is
`../e2r-liaison-scape/experimental/frontier-automatic-display-pending-ux-production-integration-lifecycle-acceptance1/result.json`.

Focused adapter tests passed for coordinate authority gating, complete finite
success, invalidation and late-result rejection, cancellation before
completion, structured failure fallback, and the DEV-only App seam including
pending/cancel/provisional styling.

Actual Product browser smoke checks observed:

- Apollo EN staging: `started`, visible `Calculating automatic placement…`,
  visible Cancel, provisional graph class, and zero console errors.
- Titanic JA staging: `started`, visible Japanese pending text, visible
  Japanese Cancel, provisional graph class, and zero console errors.
- Lighthouse EN normal URL: no Frontier staging state attribute and no
  provisional graph class, with zero console errors.

The Worker completes quickly in this browser. Therefore the focused
deterministic adapter test is the authoritative evidence that cancellation
terminates the operation and publishes no result; a browser click that races
completion is not counted as cancellation proof.

## Boundaries and next gate

No fixed timeout, generic job framework, solver change, Product presentation
change, Dataset mutation, persistence change, production default switch, or
Human Review decision was made. This staging seam is ready for a separate
production adoption/integration checkpoint, which must still decide the
user-facing pending policy and review the lifecycle evidence. Frontier quality,
dense runtime/congestion limits, and visual acceptance remain their existing
separate boundaries.

Production behavior is unchanged outside the explicit DEV staging seam.
