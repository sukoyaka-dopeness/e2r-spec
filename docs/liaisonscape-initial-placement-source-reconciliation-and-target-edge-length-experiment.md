# LiaisonScape Initial Placement Source Reconciliation and Target Edge Length Experiment

## E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SOURCE-RECONCILIATION-AND-TARGET-EDGE-LENGTH-EXPERIMENT1

Date: 2026-08-30

### Exact result

`SUPPORTED BY EQUATIONS - CURRENT ATTRACTION EXPLAINS CONTINUED COMPRESSION; TARGET EDGE LENGTH IS NOT YET A PRODUCTION CANDIDATE`

The live source corrects the previous call-graph description. The current
Coordinate-less path does not settle the `placeInitialEntities` fallback seed.
It calls `settleInitialPlacement`, which invokes `solveAutoLayout` and creates
its own deterministic degree-ranked ring seed. The attraction equation then
always pulls connected Nodes together, while repulsion acts only below the
96-unit clearance. This explains why additional iterations compact connected
geometry, but it does not select a safe natural Edge length.

### Reconciled call graph

`Dataset open -> getStoredCoordinates -> buildEntityGraph -> placeInitialEntities`
produces `seededPositions`. If no stored Coordinates exist, App selects
`settleInitialPlacement(graph topology)` instead; the previously computed
`seededPositions` is not passed to that helper. `settleInitialPlacement` calls
`solveAutoLayout(..., { iterations: 3 })`, whose internal seed ranks by distinct
neighbor degree, then lexical ID, places the first Node at the component center,
and places remaining Nodes on deterministic rings.

With stored Coordinates, App uses the seeded result and stored positions win.
With mixed Coordinates, stored positions remain authoritative and missing Nodes
use the existing deterministic placement path. Explicit Auto Layout calls
`solveAutoLayout` separately and remains unchanged. `positions` is view state;
opening clears `coordinatesDirty`, and no Dataset persistence occurs.

Therefore `seededPositions` is not dead code globally, but it is redundant on
the fully Coordinate-less branch. Cleanup is a separate checkpoint and was not
performed here.

### Exact force equations

For each Node and every other Node in its component, if
`distance < clearance`, the solver adds:

```text
push = (clearance - distance) / distance
repulsion += delta * push * 0.25
```

The resulting per-axis displacement is clamped to `[-18, 18]`. Beyond the
96-unit activation distance, this repulsion term contributes zero.

For each connected neighbor, the solver adds:

```text
attraction += (neighborPoint - point) * 0.018
```

This is always attractive for a nonzero separation. It has no target/natural
Edge length and does not change sign when Nodes are too close. The source has
no separate centering force, damping term, timestep, or route/label force;
component seed placement and post-solve component packing provide the broader
placement structure.

This source model supports the compression explanation: connected Nodes keep
moving inward until repulsion or the movement clamp/other geometry limits the
net displacement. The prior 3/6/12 measurements are consistent with this
equation-level explanation.

### Target-length counterfactual boundary

A conceptual spring would replace always-attractive attraction with:

```text
unit = delta / distance
extension = distance - desiredEdgeLength
spring = unit * extension * 0.018
```

The current source provides candidate evidence, not a product value. The
Lighthouse connected-Node distances at 3, 6, and 12 iterations range from
`100.41..309.18`, `86.59..280.72`, and `81.12..248.06` respectively. The
96-unit repulsion activation distance and these distributions can motivate
temporary comparisons, but choosing 120, 140, or 160 would still be an
experimental parameter rather than an established natural length. No target
spring was implemented or numerically promoted in this checkpoint.

A valid next experiment must isolate the spring formula, preserve the current
repulsion and coefficient, compare the same seed at 3 iterations, and then
check 6/12 stability, route/label ground truth, compactness, synthetic chain /
star / cycle / disconnected controls, and the shared explicit-Auto-Layout
responsibility. A production change would affect both initial placement and
explicit Auto Layout unless a separate API boundary is designed.

### Production and sample boundary

- Production Runtime changed: no
- Production constants changed: no
- Production iteration count changed: no
- Routing or label algorithms changed: no
- Lighthouse sample changed: no
- Existing uncommitted three-iteration sample candidate: preserved
- Cleanup of redundant `seededPositions`: deferred
- Runtime commit: none

Verification: runtime baseline remains 280/280 tests, lint, and build passed;
`e2r-spec` validation and `git diff --check` passed.
