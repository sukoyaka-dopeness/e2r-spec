# LiaisonScape Initial Node Placement Congestion / Settling Depth Experiment

## E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-CONGESTION-SETTLING-DEPTH-EXPERIMENT1

Date: 2026-08-30

### Exact result

`RESEARCH REQUIRED - EXISTING NODE SOLVER SATURATES WITHOUT ACCOUNTING FOR EDGE / LABEL PRESENTATION PRESSURE`

The experiment does not justify changing the production three-iteration
initial-placement bound. Deeper runs change Node geometry, but the existing
solver has no route, crossing, foreign-node, or label objective, so a measured
geometry delta cannot establish a presentation-congestion improvement.

### Method and boundary

The same Lighthouse graph and the same deterministic production solver were
evaluated at 0, 3, 6, and 12 iterations. `FULL` is equivalent to the existing
12-iteration explicit solver depth for this comparison. No random jitter,
hand tuning, new weight, threshold, objective, runtime change, or sample
Coordinate change was made. The existing uncommitted 3-iteration Lighthouse
sample candidate was preserved as evidence.

### Solver objective inventory

`solveAutoLayout` is Node-geometry-aware through bounded Node-Node repulsion,
connected-Node attraction, a clearance target, per-step movement clamping,
deterministic component seeding, and disconnected-component packing.

- Edge-crossing-aware: **NO**
- Edge-route-clearance-aware: **NO**
- Label-geometry-aware: **NO**
- Centering/damping term: **NO distinct term**; deterministic seeds and packing
  establish component placement.
- Self-Relation force: **NO**; self-relations are excluded from adjacency.

### Lighthouse Node metrics

| depth | same-X | same-Y | width | height | aspect | area | min Node distance | NN mean | NN variance |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 0 | 2 | 4 | 518.40 | 345.60 | 1.500 | 179159.04 | 132.26 | 140.36 | 263.02 |
| 3 | 0 | 0 | 489.30 | 324.60 | 1.507 | 158825.78 | 100.41 | 120.30 | 392.38 |
| 6 | 0 | 0 | 463.25 | 306.55 | 1.511 | 142009.88 | 86.59 | 106.86 | 560.32 |
| 12 / FULL | 0 | 0 | 419.78 | 286.78 | 1.464 | 120383.11 | 81.12 | 96.05 | 470.63 |

The deeper runs remove the remaining exact alignments already removed at 3,
then progressively compact the graph and reduce nearest-neighbor distance.
That is not equivalent to lower Edge or label congestion. In particular, the
solver does not inspect routes, labels, or obstacles while moving Nodes.

### Structural controls and acceptance

The existing chain, star, tree, cycle, and disconnected fixtures remain
covered by the deterministic Auto Layout tests. The full current LiaisonScape
suite passed unchanged. Candidate 3 remains the only materialized sample
candidate; candidates 6, 12, and FULL remain counterfactual measurements only.

No automated route/label regression was introduced because runtime and sample
files were not changed. Manual visual acceptance of the existing candidate is
still separate and required before any sample commit.

### Verification

- LiaisonScape `npm.cmd test`: 280/280
- LiaisonScape `npm.cmd run lint`: pass
- LiaisonScape `npm.cmd run build`: pass
- LiaisonScape `git diff --check`: pass
- Runtime changed: no
- Production iteration count changed: no
- New numeric weight/threshold: no
- Sample semantic content changed: no
- Existing 3-iteration sample candidate preserved: yes

The next research boundary is an explicitly scoped Edge/label-aware layout
objective or a route/label post-layout optimizer. Neither is authorized by
this checkpoint.
