# LiaisonScape Occupied-Geometry Feasibility-First Extent Growth 1

Date: 2026-09-15

## Disposition

`B. GEOMETRY CAPACITY FURTHER IMPROVES / RELATION OWNERSHIP RESIDUAL CONFIRMED`

The checkpoint also leaves an explicit `E` boundary for the current bounded
feedback formulation: single-connected hard occupied-geometry feasibility is
not closed after eight bounded sweeps. This does not justify moving routing or
Relation-label authority into Structural Placement; it identifies the next
formulation boundary.

Quality solver remains `HOLD / NOT ESTABLISHED`, production provider remains
`NOT ESTABLISHED`, Product integration/default remains `HOLD`, Human Review
remains `NOT READY`, and the Initial Layout Release blocker remains `OPEN`.
Adaptive Initial Placement Cascade remains inactive.

## Question and authority boundary

The previous Infinite-Canvas Local-Density / Extent-Growth Re-baseline showed
that allowing extent growth reduced the single-connected label-overlap signal
from `56` to `12`, but retained `225` foreign-route hits. The Product surface
made a further distinction visible: occupied geometry remained strong even
where global extent was available. This checkpoint therefore tests whether a
bounded Node-geometry feedback loop can remove avoidable occupied collisions
before route/label ownership is judged.

No fixed expansion multiplier is the primary formulation. The candidate uses
the current Product presentation to derive actual collision penetration and
applies deterministic displacement from that penetration. It runs at most
2, 4, or 8 feedback sweeps. Extent grows only as a consequence of those
derived displacements; `fitGraphView`, `fitBudget`, and overview `fitScale`
are not feasibility gates.

The Product authorities remain unchanged: ordinary routing, Parallel /
Incident, endpoint-plan, Relation-label placement, Node-label placement,
Self-loop, and viewport/camera. Product presentation is observed as feedback;
its implementation and final ownership are not transferred.

## Occupied-geometry definition

The diagnostic uses the following current Product geometry:

- Node body bounds from `ENTITY_ATTACHMENT_SHAPE` (`64 x 64` conservative
  bounds for the rounded rectangle body);
- final Product Node-label `LabelRect` bounds;
- final Product Relation-label `LabelRect` bounds.

The first hard feasibility test is conservative AABB non-overlap with zero
additional UX margin. The measured categories are:

- Node body to Node body;
- Node-label to foreign Node body;
- Relation-label to Node body;
- Node-label to Node-label;
- Node-label to Relation-label;
- Relation-label to Relation-label.

The zero margin is deliberate. Existing source provides collision footprints
and route-specific hard/halo constants, but it does not establish a universal
Product readability margin for every label pair. A nonzero visual margin is a
Product decision point, not an invented solver constant in this checkpoint.
Route corridor reservation is reported separately and is not promoted to a
Structural Placement hard constraint.

Artifact: `experimental/occupied-geometry-feasibility-first-extent-growth1/result-summary.json`.

## Bounded formulation and diagnostics

For each sweep, the diagnostic:

1. derives the current Product presentation from the candidate Node positions;
2. measures the six occupied-geometry collision categories;
3. converts each overlap penetration into a deterministic displacement for the
   owning Node or Relation endpoints;
4. applies the accumulated displacement once with bounded damping;
5. stops early on zero occupied overlap or after the requested sweep bound.

This is a feasibility-first diagnostic, not a production solver. The
selection order is lexicographic on total occupied overlap, then Product
visual label overlap, then the existing research score. A separate diagnostic
compares current HQ score ranking with occupied-feasibility-first ordering;
neither changes the current HQ metric or Product selection authority.

## Results

The selected occupied candidate is the best of the bounded 2/4/8-sweep probes.
Extent is shown to demonstrate derived growth, not as a failure criterion.

| Fixture | Prior occupied overlap | Selected occupied overlap | Prior visual label overlap | Selected visual label overlap | Foreign-route hits | Selected extent |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| canonical | 0 | 0 | 0 | 0 | 0 | 269 x 493 |
| dense | 5 | 2 | 4 | 2 | 31 | 711 x 533 |
| Japanese | 1 | 0 | 1 | 0 | 16 | 792 x 586 |
| single-connected | 28 | 10 | 12 | 3 | 160 | 897 x 784 |
| Parallel | 0 | 0 | 0 | 0 | 0 | 636 x 514 |
| Self-loop | 0 | 0 | 0 | 0 | 0 | 269 x 497 |

The single-connected candidate has zero Node-body/Node-body overlap, but is not
hard-feasible: one Node-label/Node-body collision, six Relation-label/Node-body
collisions, one Node-label/Relation-label collision, and two
Relation-label/Relation-label collisions remain. The visual-risk label-overlap
signal falls to `3`, and foreign-route hits improve from `225` to `160`, but
route/label association is still not resolved.

Dense reaches two Relation-label/Relation-label occupied collisions after the
bounded feedback. Japanese reaches zero occupied collisions, although its
foreign-route count rises from `13` to `16`; this confirms that occupied
geometry and route ownership are related but not interchangeable objectives.
Canonical, Parallel, and Self-loop remain occupied-feasible controls without
new expansion.

Current HQ ranking and feasibility-first diagnostic ordering differ on the
difficult fixtures (for example, dense HQ selects a candidate with `29`
occupied overlaps while the feasibility-first diagnostic selects one with
`19`). This is evidence that the current research scalar is not an occupied
feasibility gate. It is not evidence to retune or replace the production HQ
metric in this checkpoint.

## Actual Product smoke

The candidate was opened in a fresh development server through the actual
LiaisonScape App surface. After Product `Reset view`, the connected whole-graph
overview was `36%`; at Product-native `78%` zoom the Node bodies remained
separated, but the long Relation labels and route association remained visibly
crowded. The attempted canvas pan timed out in browser automation and its
result was not used as evidence.

The smoke record is
`experimental/occupied-geometry-feasibility-first-extent-growth1/actual-product-smoke-summary.json`.
This was a smoke check only. The visible residual stopped the work before
formal visual evidence or Human Review. Existing canonical, Parallel/Incident,
and Self-loop control evidence remains non-regressed by the diagnostic audit;
no Product acceptance is claimed.

## Attribution

- Structural Placement: can remove Node-body overlap, some label/body overlap,
  and avoidable label packing by supplying more usable extent and geometry
  derived from occupied bounds.
- Node-label placement: remains responsible for final Node-label placement;
  its actual bounds are an input to feedback, not moved into Structural
  Placement.
- Relation-label placement: remains responsible for final Relation-label
  placement and ownership. The remaining Relation-label/Node and
  Relation-label/Relation-label collisions keep this authority open.
- Ordinary routing: remains responsible for route shape and foreign-route
  interaction. The residual `160` foreign-route hits remains a route/label
  coupling signal.
- Parallel / Incident and endpoint-plan: remain unchanged; controls show no
  occupied-geometry regression.
- Self-loop: remains a smoke control and independent later track.
- Viewport/camera: remains responsible for framing, reset-to-fit, zoom, and
  pan. The observed low overview scale is not a layout failure by itself.

## Readiness and next position

Occupied geometry is now represented reproducibly and can drive bounded extent
growth. The evidence supports continuing a narrow feasibility-first study, but
does not establish a stable fixed point for the single-connected case. The
next investigation should decide whether a better owner-aware geometry
feedback representation can close the remaining label/body collisions without
making route ownership a Structural Placement responsibility. If that cannot
be bounded, the route/label residual should be treated as an explicit Product
presentation boundary rather than hidden in a larger placement solver.

No knowledge candidate is added: the principle is still LiaisonScape-specific,
and the single-connected hard-feasibility boundary is unresolved.
