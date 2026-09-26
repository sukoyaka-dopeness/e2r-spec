# LiaisonScape Initial Node Placement Non-Grid Experiment

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-NON-GRID-EXPERIMENT1`
- Scope: temporary comparison; no production implementation

## Exact result

`PARTIAL - NON-GRID SETTLING IMPROVES COMPOSITION BUT NEEDS A DISTINCT INITIAL-PLACEMENT BOUNDARY`

The existing deterministic Auto Layout mechanics provide a credible
non-grid candidate for coordinate-less opening. A small bounded settling run
already removes the fallback's repeated-row composition on the Lighthouse
graph and approaches the full solver's non-grid structure. However, this
experiment does not establish that full Auto Layout should run during Dataset
open, nor does it settle mixed-coordinate, routing/label, viewport, or user
expectation semantics. Production initial placement remains unchanged.

## Source responsibilities

The passive open path calls `placeInitialEntities` after reading stored
Coordinates. It preserves stored positions and places only missing Entities;
the fallback uses positioned-neighbor anchors and a deterministic four-column
grid for otherwise unanchored nodes. New Entity placement is handled by
`placeInitialEntity`. Explicit Auto Layout calls `solveAutoLayout` only after
the user invokes that separate workflow and adopts its result as working
Coordinate state.

`solveAutoLayout` is deterministic: it sorts IDs, deduplicates unordered
Relation pairs, seeds each connected component from the highest distinct-
neighbor degree, applies bounded repulsion and neighbor attraction for a
configured iteration count, and packs disconnected components. It uses no
random source and no input Coordinates.

## Candidates and datasets

- Candidate A: current coordinate-less grid fallback (`placeInitialEntities`).
- Candidate B: full existing `solveAutoLayout` with 12 iterations.
- Candidate C: existing Auto Layout mechanics with 0, 3, and 6 iterations as
  bounded-settling counterfactuals.
- Candidate D: no separate seed-only implementation was added; introducing a
  new initializer would be a new algorithm and was out of scope.

The comparison used the 10-Entity/28-Relation Lighthouse graph plus small
chain, star, branching tree, cycle, disconnected, single-Entity, and
two-Entity fixtures. All comparisons were in memory. Canonical sample files
were not modified.

## Lighthouse measurements

| Candidate | Same-X pairs | Same-Y pairs | Axis-aligned ordinary Relations | Bounding box | NN mean / variance | Deterministic |
|---|---:|---:|---:|---|---|---|
| A fallback | 1 | 13 | 3 | 796 x 190 | 112.8 / 2378.9 | yes |
| C, 0 iterations | 2 | 4 | 2 | 518.4 x 345.6 | 140.4 / 263.0 | yes |
| C, 3 iterations | 0 | 0 | 0 | 489.3 x 324.6 | 120.3 / 392.4 | yes |
| C, 6 iterations | 0 | 0 | 0 | 463.2 x 306.6 | 106.9 / 560.3 | yes |
| B, 12 iterations | 0 | 0 | 0 | 419.8 x 286.8 | 96.1 / 470.6 | yes |

The earlier stored baseline remains separate: 3 same-X pairs, 3 same-Y
pairs, 4 axis-aligned ordinary Relations, and a `500 x 340` bounding box.
The fallback is strongly horizontal and top-heavy. Three iterations remove
exact alignment without the full solver's additional settling; six and
twelve iterations compact the graph further. This supports the direction but
does not prove a product-optimal iteration count.

Small fixtures preserved topology-aware behavior: chains and cycles formed
compact non-grid layouts, stars retained a central high-degree seed, trees
remained connected, disconnected components were packed separately, and
single/two-Entity inputs remained finite and deterministic. A one-Entity
nearest-neighbor statistic is undefined by construction.

## Performance and quality saturation

On the Lighthouse graph, observed solve times in one local run were about
0.51ms (0 iterations), 0.25ms (3), 0.60ms (6), and 0.78ms (12); these are
diagnostic measurements, not a benchmark contract. Every repeated solve was
exactly deterministic. Three iterations removed grid alignment; further
iterations changed compactness and nearest-neighbor statistics, so quality
had not fully saturated at three iterations. No random jitter or new graph
algorithm was introduced.

The production routing and label helpers were not modified or adopted for
startup. Existing routing, obstacle, parallel, self-loop, label, and
ownership gates therefore remain the relevant non-regression evidence; this
experiment does not claim that a new initial geometry has equal visual route
quality without a future same-viewport routing/label comparison.

## Architecture decision

Full Auto Layout is not yet suitable as the passive startup solver: it has a
distinct explicit-workflow meaning, and this run did not validate startup
cost, mixed stored/unstored Coordinates, or adoption semantics. Bounded
settling is suitable as a future candidate for coordinate-less placement,
but only behind a distinct initial-placement boundary and with a dedicated
objective covering topology, spacing, routing, labels, and viewport fit.

Result classification: `PARTIAL`. Next production checkpoint if pursued:
`E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-BOUNDED-SETTLING-IMPLEMENTATION1`.
Sample Coordinate refresh remains a separate decision.

## Boundaries and verification

No LiaisonScape runtime source, tests, sample, Coordinate, Presentation,
CSS, Core, Extension, Validator, or release metadata was changed. Temporary
comparisons were command-line/in-memory only and left no repository files.

- LiaisonScape baseline: 279/279 tests passed.
- Lint: PASS.
- Build: PASS.
- `git diff --check`: PASS.
- Previous routing and label fixes: NOT REGRESSED.
- Protected dirty `sessions/E2R-Session-0052.md` was preserved.
- No push, tag, release, deploy, or publication was performed.
