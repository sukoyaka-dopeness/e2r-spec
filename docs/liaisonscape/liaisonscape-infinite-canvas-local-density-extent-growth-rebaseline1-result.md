# LiaisonScape Infinite-Canvas Local-Density / Extent-Growth Re-baseline 1

Date: 2026-09-15

## Disposition

`C. SINGLE-CONNECTED CAPACITY IMPROVES WHEN EXTENT MAY GROW / PRODUCT ROUTE-LABEL RESIDUAL REMAINS OPEN`

Secondary evidence supports `B. INFINITE-CANVAS GEOMETRY IMPROVES DENSITY /
RELATION OWNERSHIP REMAINS OPEN` and identifies an intrinsic dense-complexity
boundary for whole-graph overview. The infinite-canvas model is a useful
forward hypothesis, but it is not established as a production provider or
Product adoption decision.

Quality solver remains `HOLD / NOT ESTABLISHED`, production provider remains
`NOT ESTABLISHED`, Product integration/default remains `HOLD`, Human Review
remains `NOT READY`, and the Initial Layout Release blocker remains `OPEN`.
Adaptive Initial Placement Cascade remains inactive.

## Question and source/evidence re-baseline

The previous bounded screen-scale / ownership refinement treated an `800 x
500` fit, baseline-relative `fitBudget`, `rawFit`, and `extentScale` as part of
candidate feasibility. The Product-level canvas model is different: the graph
may grow beyond the current viewport and the camera owns overview, reset-to-fit,
zoom, pan, and initial framing. Readable local geometry, Node overlap avoidance,
actual label geometry, cluster separation, route corridor demand, and topology
remain layout concerns.

This is a forward-only correction. Historical experiments and result documents
remain unchanged. In this checkpoint, `fitGraphView(..., 800, 500)` is retained
as a camera/information-density diagnostic; a low `fitScale` is not treated as a
layout failure. The diagnostic candidate deliberately removes the old fit clamp
and permits extent growth from label and Relation demand. The current
Product-authoritative metric and source authorities were not changed.

Source audit confirmed:

- `src/viewport.ts` owns `fitGraphView`, zoom scale, pan transform, and reset
  framing.
- `src/automatic-layout-quality.ts` still includes the historical extent term
  in its research score. This checkpoint reports an extent-unconstrained
  diagnostic ranking beside, rather than replacing, that score.
- `src/automatic-layout-visual-risk.ts` still reports fit scale and screen
  occupancy. Those values are reported as camera diagnostics, not hard layout
  gates.
- Product ordinary routing, Parallel / Incident, endpoint-plan, Relation-label,
  Node-label, Self-loop, and viewport/camera authorities remain in place.

## Bounded experiment

Fixtures were canonical/ordinary, dense multi-component, Japanese
label-heavy, single-connected dense-label, Parallel / Incident, and Self-loop.
For every fixture the comparison retained three roles:

1. current HQ candidate selected by the existing diagnostic pool;
2. the previous fit-bounded refinement `probeBest` candidate;
3. two bounded infinite-canvas candidates using deterministic local grouping,
   label-demand expansion, topology-preserving internal scaling, and 2D packing
   without a viewport fit clamp.

The new local-density audit records actual Node-label bounds overlap,
nearest-neighbor separation, label-relative local neighbor count, component
extent, Relation-label overlap, foreign-route pressure, and owner/foreign-route
margin. It intentionally does not collapse them into a new production scalar.

Artifact: `experimental/infinite-canvas-local-density-extent-growth-rebaseline1/result-summary.json`.

## Results

The selected infinite-canvas candidate was the corridor-weighted variant in all
six fixtures. Values below are diagnostic counts; fit is overview `fitScale`
only.

| Fixture | Previous extent | Infinite extent | Previous label overlap | Infinite label overlap | Infinite foreign-route hits | Infinite overview fit |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| canonical | 161 x 317 | 269 x 493 | 0 | 0 | 0 | 0.553 |
| dense | 491 x 421 | 706 x 516 | 6 | 4 | 45 | 0.531 |
| Japanese | 526 x 448 | 780 x 586 | 3 | 1 | 13 | 0.474 |
| single-connected | 420 x 466 | 765 x 739 | 56 | 12 | 225 | 0.383 |
| Parallel | 455 x 430 | 636 x 514 | 0 | 0 | 0 | 0.533 |
| Self-loop | 160 x 317 | 269 x 497 | 1 | 0 | 0 | 0.549 |

The single-connected control is the decisive new evidence. Allowing extent to
grow removes the old fit-driven compression and reduces Product presentation
label overlap from `56` to `12`; actual Node-label bounds overlap is `0` for
the new candidate. This is evidence that the previous single-component limit
was partly caused by the fit/extent clamp and that local capacity can be
expressed by growth.

It is not a complete solution. The same candidate retains `225`
foreign-route/Relation-label hits and zero positive owner/foreign-route margin
in the connected control. The Actual Product surface remains crowded at
normal zoom. More canvas therefore improves geometry capacity without making
route ownership or final Relation-label association authoritative or readable.

Dense and Japanese multi-component cases also improve label-overlap counts,
and Parallel and Self-loop controls do not regress in the diagnostic counts.
Their nonzero foreign-route values, where present, remain Product
route/label-presentation evidence rather than a reason to move those
authorities into Structural Placement.

## Actual Product inspection

The development-only operation-local preview was inspected through the actual
LiaisonScape App surface, not only the diagnostic renderer.

- Connected overview after Product `Reset view` was `38%`: the whole graph was
  visible, while all Relation labels were appropriately not expected to be
  readable simultaneously at that density.
- The Product-native zoom control was used to reach `82%`. Nodes remained
  separated, but long Relation labels and route association were still visibly
  crowded. This is not a formal acceptance result and is not suitable for
  Human Review.
- Canonical was clean at `55%` overview and `81%` normal zoom.
- Parallel retained visibly distinct lanes/fanout in the smoke view.
- Self-loop remained visible and associated with its owner Node after reset.

The smoke record is
`experimental/infinite-canvas-local-density-extent-growth-rebaseline1/actual-product-smoke-summary.json`.
The smoke check is diagnostic only. It exposed a real residual and therefore
stopped before formal visual evidence or Human Review.

## Responsibility attribution

- Structural Placement: responsible for the avoidable compression removed by
  extent growth, local Node/label geometry, component extent, and topology-
  preserving spacing demand. It is not responsible for final route or label
  ownership.
- Ordinary routing: remains responsible for route shape and route-to-label
  interaction after geometry is supplied.
- Parallel / Incident: remains responsible for bundle lanes, physical-side
  ordering, and incident allocation. No architecture transfer occurred.
- Endpoint-plan / capacity: remains responsible for endpoint capacity and
  shared endpoint allocation. The probe only consumes coarse geometry demand.
- Relation-label placement/presentation: remains responsible for final label
  placement, ownership, clearance, and association. The connected residual is
  strongest here and in its coupling with ordinary routing.
- Node-label placement: remains Product-authoritative; the probe measures its
  actual bounds but does not move its authority into Structural Placement.
- Self-loop: only a smoke control here; its local angle/radius track remains
  separate.
- Viewport/camera: remains responsible for reset-to-fit, zoom, pan, overview,
  and framing. Whole-graph fit is not a Structural Placement hard constraint.

## Readiness and next position

The checkpoint establishes a bounded, reproducible extent-growth diagnostic and
confirms that single-connected capacity can improve when the canvas is allowed
to grow. It does not establish a full infinite-canvas layout model, a new HQ
metric, a production provider, or Product default/adoption.

The next roadmap position should remain a bounded Product-authoritative
route/label presentation and ownership investigation, with this extent-growth
evidence as the geometry baseline. Do not start Adaptive Initial Placement
Cascade, transfer routing/labels to Structural Placement, or advance Human
Review from this result.

No reusable cross-repository knowledge candidate is added: the result is still
a LiaisonScape-specific hypothesis and its route/label residual is unresolved.
