# LiaisonScape Shared-Endpoint Fan-Out / Congestion Audit

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-SHARED-ENDPOINT-FANOUT-CONGESTION-FIX1`
- Scope: audit / diagnostic only

## Exact result

`NOT REPRODUCED - CURRENT STORED GEOMETRY HAS NO MATERIAL SHARED-ENDPOINT BUNDLING`

The current Lighthouse stored coordinates were grouped by incident ordinary
non-self Relations. The largest group is `clara` with six incident Relations;
`thomas` and `maya` each have three, and `elias`, `sofia`, `beacon`, and
`lighthouse` have two or three. After excluding the common endpoint itself,
the routes diverge immediately at the first post-boundary sample. No
avoidable shared-endpoint fan-out failure was reproduced, so no runtime fix
was made.

## Inventory

| Node | Incident ordinary Relations | Directions |
|---|---:|---|
| `clara` | 6 | supervises out, mentors out, works with out, advises in, coordinates with in, leads restoration of out |
| `thomas` | 3 | supervises in, mentors in, friends out |
| `maya` | 3 | works with in, maintains out, friends in |
| `elias` | 2 | advises out, interviews in |
| `sofia` | 2 | interviews out, works with out |
| `beacon` | 2 | maintains in, is installed in out |
| `lighthouse` | 3 | leads restoration of in, authority in, is installed in in |

The Clara/Thomas pair `clara-thomas-supervises` and
`clara-thomas-mentors` is a parallel group and remains governed by the
accepted reverse-endpoint and obstacle side-preservation fixes. It was not
reclassified as general fan-out. Self-loops were excluded.

## Geometry and pipeline

`App.tsx` orders fixed and automatic Relations, excludes the source and target
Nodes from each Relation's obstacle list, passes earlier selected samples as
`occupiedPaths`, and calls `routeGraphEdge`. The helper derives endpoint
attachments, applies parallel base offsets where applicable, generates
deterministic candidates, scores Node/obstacle pressure and occupied-path
proximity, then clips and samples the selected route.

For the largest `clara` group, every pair was compared after the shared Node
boundary. The closest non-parallel local pair was `clara-maya` against
`clara-lighthouse`, with a sampled separation of 28.5 units; both had already
diverged at the first post-boundary sample. This is not a product threshold;
it is diagnostic evidence that the current geometry does not bundle these
routes into a false single edge. Other shared-endpoint pairs separated more
widely. Common endpoint distance was intentionally not counted as congestion.

No route used a manual route in the inspected sample. Label placement is a
separate later stage and was not changed.

## Causal classification

`CASE 6 - OBSERVED FAN-OUT CONGESTION NO LONGER REPRODUCES` is applicable.
There is no failing production-helper test showing a safer existing fan-out
candidate that loses current ordering. Therefore a new fan-out angle
threshold, separation weight, Node-port design, group optimizer, or
occupied-path redesign is not justified. Shared-endpoint fan-out remains a
future concern if a dataset reproduces material post-boundary bundling.

The accepted priority remains Node/obstacle safety over visual fan-out. A
future reproduction must distinguish necessary local closeness, parallel
Relations, shared-endpoint fan-out, label density, and true non-endpoint
crossing before implementation.

## Scope and verification

No LiaisonScape runtime file, test, sample, CSS, Coordinate/Presentation
payload, schema, Core, Extension, Validator, or release metadata was changed.
Reverse-endpoint normalization, parallel obstacle side preservation,
foreign-node clearance, label recovery/ownership, and ordinary true crossing
remain CLOSED / NOT REGRESSED. Self-loop interaction and NarrativeLine
Display-Order remain separate.

- LiaisonScape baseline: 279/279 tests passed.
- Lint: PASS.
- Build: PASS.
- `git diff --check`: PASS.
- No runtime commit was created.
- Temporary diagnostics were command-line only and left no repository files.
- Protected dirty `sessions/E2R-Session-0052.md` was preserved.
- No push, tag, release, deploy, or publication was performed.
