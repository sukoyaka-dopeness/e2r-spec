# LiaisonScape Initial Node Placement Gridness Counterfactual

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-GRIDNESS-COUNTERFACTUAL1`
- Scope: measurement and temporary counterfactual only

## Exact result

`DIRECTION SUPPORTED - GRID-ALIGNED INITIAL NODE PLACEMENT DEGRADES GLOBAL GRAPH COMPOSITION`

The coordinate-less initial-placement fallback is visibly and numerically
grid-like: it uses a deterministic four-column anchor pattern for unpositioned
Entities. The existing explicit Auto Layout counterfactual produces a
topology-seeded, non-grid arrangement with no exact X/Y alignments. This
supports a future non-grid initial-placement experiment, but does not authorize
changing production startup behavior in this checkpoint.

The current Lighthouse stored geometry is a separate authored/stored baseline.
Its moderate alignment is not proof that the stored sample was produced by the
fallback or that it is presentation-optimal. No sample provenance was found
that establishes such a claim.

## Responsibility separation

1. Stored sample Coordinates are read by `getStoredCoordinates` and applied by
   `placeInitialEntities` during Dataset acceptance.
2. Coordinate-less opening uses `placeInitialEntities` for missing Entities;
   missing nodes use positioned-neighbor anchors or deterministic grid anchors.
3. New Entity placement uses `placeInitialEntity` and is user-facing working
   placement.
4. Explicit Auto Layout uses `solveAutoLayout`, is invoked only by the
   explicit workflow, and is adopted as working Coordinate state.

Auto Layout is not interchangeable with passive Dataset-open placement. Its
startup cost, user expectation, persistence/adoption semantics, and possible
routing changes remain separate design concerns.

## Stored Lighthouse coordinates

The canonical English sample contains 10 Entities and 28 Relations (including
self-Relations), with 10 stored coordinates in the
`draft.github.sukoyaka-dopeness.coordinate` namespace.

| Entity | x | y | Same-X peers | Same-Y peers |
|---|---:|---:|---|---|
| `lighthouse` | 500 | 320 | — | — |
| `clara` | 350 | 180 | — | `elias` |
| `elias` | 150 | 180 | — | `clara` |
| `maya` | 470 | 480 | — | `thomas` |
| `thomas` | 300 | 480 | — | `maya` |
| `sofia` | 150 | 340 | `elias`, `archive` | — |
| `daniel` | 600 | 250 | — | — |
| `beacon` | 620 | 520 | — | `archive` |
| `archive` | 150 | 520 | `sofia` | `beacon` |
| `authority` | 650 | 380 | — | — |

Stored metrics: unique X=8, unique Y=7, exact same-X pairs=3, exact
same-Y pairs=3, axis-aligned ordinary Relations=4, bounding box
`500 x 340`, nearest-neighbor mean 151.2, variance 448.9.

Provenance is `UNKNOWN`: repository history confirms these are stored sample
Coordinates, but does not establish whether they came from manual placement,
an earlier placement export, or Auto Layout. They must not be treated as a
runtime placement trace.

## A/B/C counterfactual comparison

The same 10-Entity/28-Relation graph was evaluated in memory as:

- A: current stored coordinates;
- B: current coordinate-less `placeInitialEntities` fallback with no stored
  coordinates;
- C: existing `solveAutoLayout` output.

| Geometry | Unique X/Y | Same-X pairs | Same-Y pairs | Axis-aligned ordinary Relations | Bounding box | NN mean / variance |
|---|---|---:|---:|---:|---|---|
| A stored | 8 / 7 | 3 | 3 | 4 | 500 x 340 | 151.2 / 448.9 |
| B fallback | 9 / 4 | 1 | 13 | 3 | 796 x 190 | 112.8 / 2378.9 |
| C Auto Layout | 10 / 10 | 0 | 0 | 0 | 419.8 x 286.8 | 96.1 / 470.6 |

B is strongly horizontal and top-heavy, confirming the known fallback grid
behavior. C removes exact grid alignments and has a more regular nearest-
neighbor distribution than B. A is wider and intentionally organized around
the authored sample, but is not an all-grid layout: only 3 same-axis pairs
exist among 10 nodes.

The same production routing and label helpers were retained for the
counterfactual framing. No true ordinary crossing, foreign-node clearance
failure, or shared-endpoint fan-out failure was newly established. Existing
parallel, label, obstacle, self-loop, and ownership results therefore remain
unchanged. A visual screenshot was not committed; the numeric comparison is
the reproducible evidence for this checkpoint.

## Causal conclusion and next step

Root cause classification: `CASE 7 - CURRENT INITIAL PLACEMENT IS GRID-BASED
BY DESIGN, AND A NON-GRID INITIAL PLACEMENT NEEDS A NEW PLACEMENT OBJECTIVE`.
The direction is supported for the coordinate-less fallback, not proven for
the stored Lighthouse sample. Organicity must mean deterministic,
topology-aware, stable, readable, and non-overlapping—not random jitter.

Next bounded experiment: `E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-NON-GRID-EXPERIMENT1`.
It should compare a deterministic topology-aware passive fallback with the
current fallback and explicit Auto Layout, while preserving stored/user-owned
Coordinates and measuring routing, labels, clearance, crossings, and spacing.

No production initial-placement algorithm, Auto Layout integration, sample,
Coordinate, Presentation payload, route, label, schema, Core, Extension,
Validator, or release metadata was changed.

## Verification and boundaries

- LiaisonScape baseline: 279/279 tests passed.
- Lint: PASS.
- Build: PASS.
- `git diff --check`: PASS.
- No runtime commit was created.
- Temporary counterfactuals were command-line/in-memory only and left no
  repository artifact.
- Protected dirty `sessions/E2R-Session-0052.md` was preserved.
- Previous routing and label fixes remain NOT REGRESSED.
- NarrativeLine Display-Order: NOT STARTED.
- No push, tag, release, deploy, or publication was performed.
