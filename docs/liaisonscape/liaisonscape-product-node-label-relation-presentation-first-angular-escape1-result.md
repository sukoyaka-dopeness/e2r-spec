# LiaisonScape Product Node-label Relation-presentation-first Angular Escape 1

Date: 2026-09-16

Status: `E PRIMARY / C QUALIFIED: CURRENT ROUTE-DISTANCE SUFFICIENT IN THE TESTED ENVELOPE; PREVIOUS-PLACEMENT HYSTERESIS IS THE LARGER SIGNAL; ANGULAR ESCAPE NOT ESTABLISHED`

## Question

This bounded checkpoint tested whether the existing Product Relation/Relation-
label presentation could be held fixed while automatic Node-label placement
escaped toward a less occupied angular sector. The checkpoint was intentionally
not a new Initial Placement, Structural Placement, routing, Self-loop, endpoint
plan, or Relation-label solver.

The tested arms were:

- `current-fresh`: current 32-angle Node-label placement with no previous placement;
- `current-previous`: current placement with a deterministic prior placement in an incident sector;
- `angular-fresh`: current placement plus fixed Relation-label/incident-route angular occupancy pressure;
- `angular-previous`: the same angular pressure plus the prior-placement movement term.

Relation routes and Relation-label rectangles were derived once from the current
Product pipeline with feedback disabled, then supplied as fixed inputs to all
Node-label arms. The angular policy was diagnostic-only: 32 existing angles,
half-angle `pi/5`, incident weight `12`, and Relation-label weight `20`.
Relation-label angular occupancy had the larger diagnostic weight, but no
Relation-label placement or route authority moved into the experiment.

## Source and instrumentation

The current `placeNodeLabel` implementation already evaluates 32 angles,
occupied Relation-label rectangles, other Nodes, routed paths, yielding routes,
cardinal preference, and previous-placement movement. The source changes add:

- optional per-Node `NodeLabelAngularEscapeInput`;
- candidate-level diagnostic rows containing all existing score components plus
  incident and Relation-label angular pressure;
- a diagnostic candidate trace through the existing graph-presentation seam;
- an App-only development seam that can keep the Relation feedback pass fixed
  during Actual Product inspection.

When the angular input is omitted, the added score terms are zero and the
existing candidate output remains exact-equivalent. No Dataset, stored/authored
Coordinate, persistence, dirty-state, Save Coordinates, manual placement,
Structural Placement, routing, endpoint-plan, Parallel/Incident, or Self-loop
authority changed.

## Fixtures and evidence

The reproducible artifact is:

`e2r-liaison-scape/experimental/product-node-label-relation-presentation-first-angular-escape1/result-summary.json`

It covers:

- the horizontal long-label primary control;
- vertical and diagonal orientation controls;
- high-degree and dense synthetic controls;
- the existing Parallel/Self-loop control;
- Lighthouse English and Japanese samples.

The artifact records all 32 candidate rows for every Node and arm, the fixed
Relation presentation, the per-Node policy, previous placements, selected
score components, relation overlap, Node-label overlap, and foreign-route
collision signals.

### Result summary

Across all eight fixtures:

- every arm retained 32 candidates per Node;
- `current-fresh` and `angular-fresh` selected the same Node-label direction
  for every recorded Node;
- both fresh arms recorded zero Relation-label overlap, zero Node-label overlap,
  and zero foreign-route collision in the measured diagnostic rows;
- `current-previous` changed selected direction on 3/3/4/8/5/8/8/10 Nodes
  respectively across the fixture order, with positive movement cost;
- `angular-previous` produced the same direction-change counts and the same
  maximum movement-cost values as `current-previous`; it added non-zero angular
  pressure in the occupied sectors but did not overcome the previous-placement
  continuity term;
- routes and Relation-label rectangles are identical by construction across
  arms, and the source-level fixed-input test confirms that Node-label
  derivation does not mutate them.

The high-degree control therefore did not demonstrate a new global bottleneck
that this local angular signal could resolve. The dense and orientation controls
also did not produce a fresh-arm improvement. Increasing the angular weight
until geometry changes would be a score retune, not evidence that this
responsibility split is correct, so it was not promoted as a result.

## Responsibility attribution

| Observation | Attribution |
| --- | --- |
| Relation routes and Relation-label rectangles remained fixed | Product ordinary routing and Product final Relation-label placement remain authoritative |
| Fresh Node-label choice already avoided the measured Relation-label and foreign-route sectors | Current Node-label route-distance / collision scoring is sufficient for these controls; angular hypothesis not established |
| Previous-sector inputs changed Node-label choices and incurred large movement costs | Node-label placement continuity/hysteresis is the dominant tested residual |
| Relation-label ownership, bundle lanes, reverse-side behavior, endpoint plan, and Self-loop geometry did not change | Outside this Node-label experiment; existing Product authorities remain responsible |
| Lighthouse bottom framing approached the Actual Product viewport edge | Existing fixture/viewport framing risk, not an angular-escape regression; no formal visual acceptance opened |

This does not show that all Node-label residuals are solved. It shows only that
the proposed Relation-presentation-first angular escape was not the limiting
factor in this tested envelope. A future unresolved case with an actual
Relation-label/Node-label collision may still need a stronger bounded capacity
contract, but this checkpoint did not produce evidence requiring structural
capacity propagation.

## Actual Product smoke check

A small Actual Product smoke was performed using the diagnostic preview surface,
not a diagnostic renderer alone, for:

- horizontal primary `current-fresh` versus `angular-fresh`;
- high-degree synthetic `current-fresh` versus `angular-fresh`;
- Lighthouse English `angular-fresh`;
- Lighthouse Japanese `angular-fresh`.

The current and angular horizontal surfaces were visually equivalent. The
high-degree surface preserved the same routes, association, and framing; the
Lighthouse surfaces rendered English and Japanese Node/Relation labels without
a new angular-specific clipping or interaction failure. The larger Lighthouse
graph approached the existing viewport bottom in both controls, so this was
recorded as framing risk and not treated as acceptance. A fresh browser console
check for the angular surface reported no warning or error.

This smoke check is diagnostic only. It does not create a Human Review
candidate, a visual acceptance record, or a Product adoption decision.

## Classification and next position

The checkpoint is classified:

`E PRIMARY / C QUALIFIED`

The evidence supports retaining the current Product Node-label route-distance
placement as the tested baseline and treating previous-placement hysteresis as
the more plausible next Node-label diagnostic target. The
Relation-presentation-first angular escape is not established as a general
improvement. No new solver family, automatic cascade, global layout, route
retune, Relation-label retune, endpoint-plan change, or Self-loop track change
follows.

Self-loop remains an independent later track. Fast Initial Placement plus
explicit High-quality Auto Layout remains a previously discussed architecture
hypothesis, not a decision made by this checkpoint.

Standing status remains:

- Product default/adoption: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Human Review: `NOT READY`;
- Initial Layout Release blocker: `OPEN`;
- Parallel/Incident architecture: `CLOSED`;
- Adaptive Initial Placement Cascade: not entered.

## Validation

- angular escape diagnostic tool regenerated the artifact;
- angular checkpoint test: 4/4 passed;
- LiaisonScape lint: passed;
- LiaisonScape production build: passed;
- Actual Product smoke: completed for the representative controls above;
- fresh browser console smoke: no warnings/errors;
- formal Human Review: not started.

## Changed files

LiaisonScape:

- `src/viewport.ts`
- `src/graph-presentation.ts`
- `src/App.tsx`
- `tools/product-node-label-relation-presentation-first-angular-escape1.ts`
- `tests/product-node-label-relation-presentation-first-angular-escape1.test.ts`
- `experimental/product-node-label-relation-presentation-first-angular-escape1/fixtures.mjs`
- `experimental/product-node-label-relation-presentation-first-angular-escape1/result-summary.json`
- `experimental/product-evaluation-seam/product-node-label-relation-presentation-first-angular-escape1/index.html`
- `experimental/product-evaluation-seam/product-node-label-relation-presentation-first-angular-escape1/main.tsx`
- `experimental/product-evaluation-seam/product-node-label-relation-presentation-first-angular-escape1/visual-evidence-index.md`

E2R specification:

- this checkpoint result document;
- `docs/roadmap.md`;
- `sessions/E2R-Session-0088.md`.

No reusable knowledge-base entry was added: this is repository-scoped
checkpoint evidence and does not independently justify a workspace decision.
