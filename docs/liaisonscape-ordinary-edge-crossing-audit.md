# LiaisonScape Ordinary-Edge Crossing / Congestion Audit

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-ORDINARY-EDGE-CROSSING-CONGESTION-FIX1`
- Scope: audit / diagnostic only

## Exact result

`NOT REPRODUCED - OBSERVED CROSSING IS NOT PRESENT IN CURRENT STORED GEOMETRY`

The current Lighthouse stored coordinates and production routing helper were
checked for ordinary non-self Relation interactions. After excluding pairs
with a shared endpoint, there were zero true interior path intersections and
zero sampled near-crossing pairs below 20 graph units. No crossing-free
candidate comparison or runtime fix was justified.

## Inventory and classification

The current sample contains 12 ordinary non-self Relations, including the
parallel pair `clara-thomas-supervises` / `clara-thomas-mentors`. The parallel
pair is covered by the accepted physical-side normalization and obstacle
side-preservation fixes and was not treated as a general crossing case.
The remaining ordinary paths also produced no true non-endpoint crossing.

Shared-endpoint fan-out is not a semantic Relation junction and was excluded
from the true-crossing count. Self-loops were excluded from this checkpoint.
No Relation uses an explicit manual route in the inspected sample.

## Live routing pipeline

`App.tsx` orders fixed and automatic Relations, excludes source/target Nodes
from each Relation's obstacle list, passes prior route samples through
`occupiedPaths`, and calls `routeGraphEdge`. The helper evaluates node
influence, occupied-path proximity, label pressure, and deterministic offset
ordering. It does not perform a global crossing count optimizer. Label
placement is a later, separate `placeEdgeLabel` concern and was not changed.

The diagnostic compared the selected 41-sample routes pairwise, ignored
shared endpoints, tested segment interior intersections, and measured the
minimum sampled path-to-path distance. It found no true crossing and no
near-crossing below the 20-unit diagnostic band. This is evidence about the
current stored geometry, not a new product threshold.

## Causal classification

`CASE 6 - OBSERVED CROSSING NO LONGER REPRODUCES` is the applicable result.
Because no selected crossing exists, there is no failing production-helper
regression test and no evidence that a safer existing candidate loses current
ordering. A future reproduction must first distinguish true crossing from
shared-endpoint fan-out and local congestion, then compare candidate routes
with identical existing safety conditions.

No crossing weight, arbitrary threshold, route-length trade-off, global
optimizer, two-pass reroute, or whole-graph mutation was introduced. The
current occupied-path behavior remains unchanged. Parallel routing,
obstacle safety, label normal/along-edge recovery, foreign-edge ownership,
manual/Owned Presentation, and self-loop behavior remain separate.

## Lighthouse result and boundaries

All ordinary routes used the current stored coordinates from
`public/lighthouse-restoration-demo.en.e2r.json`. Sample data and coordinates
were not modified. Since no true crossing was observed, there is no evidence-
backed before/after intersection coordinate, crossing count reduction, or
route-length trade-off to report. Congestion optimization is also not
justified from this run.

No LiaisonScape runtime file, test, sample, CSS, Coordinate/Presentation
payload, schema, Core, Extension, Validator, or release metadata was changed.
Reverse-endpoint normalization, parallel obstacle side preservation,
foreign-node clearance, and label recovery/ownership remain CLOSED /
NOT REGRESSED. Self-loop and NarrativeLine Display-Order work remain
separate.

## Verification

- LiaisonScape baseline: 279/279 tests passed.
- Lint: PASS.
- Build: PASS.
- `git diff --check`: PASS.
- No runtime commit was created.
- Temporary diagnostics were command-line only and left no repository files.
- Protected dirty `sessions/E2R-Session-0052.md` was preserved.
- No push, tag, release, deploy, or publication was performed.
