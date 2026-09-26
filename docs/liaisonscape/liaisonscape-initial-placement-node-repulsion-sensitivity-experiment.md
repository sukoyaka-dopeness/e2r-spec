# LiaisonScape Initial Placement Node-Repulsion Sensitivity Experiment

## E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-NODE-REPULSION-SENSITIVITY-EXPERIMENT1

Date: 2026-08-30

### Exact result

`NOT SUPPORTED - REPULSION STRENGTH DOES NOT MATERIALLY IMPROVE PRESENTATION`

The current three-iteration candidate already keeps its minimum Node distance
above the solver's 96-unit repulsion activation distance. Changing only the
repulsion multiplier therefore does not provide evidence that force strength
explains the Lighthouse presentation concern. No production value was selected.

### Force balance audit

In `solveAutoLayout`, Node-Node repulsion is applied only when distance is below
`nodeClearance` (96 by default), with displacement contribution
`delta * ((clearance - distance) / distance) * 0.25`, then a per-axis movement
clamp of 18. Connected-node attraction is an independent `0.018` proportional
term. There is no separate centering force, damping term, target-edge-length
constant, route term, or label term. Components are deterministically seeded
and packed after settling.

The repulsion term is shared by both derived initial placement and the explicit
Auto Layout workflow because both use `solveAutoLayout`; changing its
production constant would affect both responsibilities.

### Temporary sweep boundary

The same Lighthouse topology, fallback seed, three iterations, attraction,
clearance, clamp, component packing, and all other parameters were held fixed.
Only the repulsion multiplier was considered at `0.5x`, `1.0x` baseline,
`1.5x`, `2x`, and `4x`. These are diagnostic values, not proposed product
settings. No source or test file was modified for the sweep, and no sample
Coordinate was replaced.

The baseline three-iteration geometry has width 489.30, height 324.60, no
same-X or same-Y pairs, and minimum Node distance 100.41. The relevant
settling-depth evidence remains non-grid at 3 iterations; deeper 6/12 runs
compress the graph but do not establish that repulsion tuning improves routes
or labels.

### Interpretation

Increasing repulsion can improve local spacing in a graph that enters the
clearance zone, but it also risks counteracting connected-node attraction and
increasing spread. The Lighthouse candidate does not reproduce a clear
repulsion-deficit condition, and the solver has no Edge crossing, route
clearance, or label geometry objective. Stronger repulsion therefore cannot be
credited with presentation improvement. The central-hub seed remains a
separate, more explanatory constructive hypothesis.

Structural controls remain required for any future implementation: single/two
node, chain, star, branching, cycle, two-hub, and disconnected graphs. No
instability, NaN/Infinity, locale dependence, or production regression was
introduced by this documentation-only experiment.

### Boundary and next step

- Production Runtime changed: no
- Production repulsion constant changed: no
- Production iteration count changed: no
- Routing or label algorithms changed: no
- Lighthouse sample changed: no
- Existing uncommitted three-iteration candidate: preserved
- Runtime commit: none

The next justified direction is the separate central-hub initial-seed
implementation experiment, with an external-seed boundary before reuse of the
shared solver. A repulsion production change is not justified.

Verification: runtime baseline remains 280/280 tests, lint, and build passed;
`e2r-spec` validation and `git diff --check` passed.
