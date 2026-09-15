# E2R Session 0088

Objective: Product Node-label Relation-presentation-first Angular Escape
Experiment 1.

Checkpoint: Determine whether fixed Product Relation/Relation-label
presentation can provide a useful bounded angular occupancy signal for
automatic Node-label placement.

Started: 2026-09-16.

Status: `E PRIMARY / C QUALIFIED: ANGULAR ESCAPE NOT ESTABLISHED`.

Continuation file: This is a new objective after Session 0087 under the
workspace rule that one continuous purpose uses one session file and a
materially different checkpoint uses a new file.

## Scope

Hold Structural Placement, Node geometry, Product ordinary routing, final
Relation-label placement, endpoint-plan authority, Parallel/Incident closure,
and the independent Self-loop track unchanged. Compare current automatic
Node-label placement with an opt-in angular occupancy diagnostic that gives
Relation-label sectors priority. Do not change Dataset or authored/stored
Coordinate semantics, persistence, dirty-state, Save Coordinates, manual
placement, Product defaults, provider status, or Human Review status.

## Work performed

- inspected the current 32-angle `placeNodeLabel` scorer and its existing route,
  Relation-label, occupied-label, Node, and previous-placement terms;
- added opt-in angular occupancy inputs and full candidate score diagnostics;
- routed the diagnostic through the existing graph-presentation seam without
  changing ordinary Product callers;
- created horizontal, vertical, diagonal, high-degree, dense, Self-loop, and
  Lighthouse EN/JA controls;
- held the current routes and Relation-label rectangles fixed for every arm;
- compared current-fresh, current-previous, angular-fresh, and
  angular-previous arms;
- added an Actual Product preview seam with fixed Relation feedback disabled;
- completed a small Actual Product smoke before formal review.

## Result

Fresh angular escape did not change selected Node-label directions on any of the
eight fixtures. The measured fresh arms had no Relation-label overlap,
Node-label overlap, or foreign-route collision. Previous placement changed
directions and incurred movement cost across every fixture family; angular
pressure did not overcome that continuity term.

The result is `E PRIMARY / C QUALIFIED`: current route-distance/collision
scoring is sufficient in this tested envelope, while previous-placement
hysteresis is the larger residual signal. Angular escape is not established.

## Validation record

- diagnostic artifact regenerated;
- focused checkpoint test passed 4/4;
- LiaisonScape lint and build passed;
- Actual Product smoke completed for primary, high-degree, Lighthouse EN, and
  Lighthouse JA;
- fresh browser console reported no warnings/errors;
- Human Review remains `NOT READY`.
