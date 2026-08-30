# LiaisonScape Initial Node Placement Presentation-Pressure Objective Decomposition

## E2R-LIAISONSCAPE-NODE-LAYOUT-PRESENTATION-PRESSURE-OBJECTIVE-DECOMPOSITION1

Date: 2026-08-30

### Exact result

`RESEARCH REQUIRED - A COARSE PRESENTATION-AWARE INITIAL-PLACEMENT PROXY IS NEEDED`

The current evidence does not justify adding Edge or label pressure directly
to the production Node solver. The existing solver is intentionally Node-only,
while production routing and label placement are downstream geometry transforms.
Directly evaluating them inside each Node movement step would create a
Node -> route -> label -> pressure -> Node feedback loop without a bounded
objective or convergence contract.

### Existing helper and responsibility audit

The relevant production path is `solveAutoLayout` for derived Node placement,
then `routeGraphEdge` for visible Relation geometry, then `placeEdgeLabel` for
Relation-label placement. These helpers are deterministic and can be reused
for read-only diagnostics after a candidate layout. They are not currently a
single presentation-aware optimization API.

Current `solveAutoLayout` terms:

- Node-Node repulsion: yes
- connected-Node attraction: yes
- movement clamp: yes
- deterministic component seed and packing: yes
- route generation during solving: no
- Edge crossing penalty: no
- Edge-to-Node route clearance: no
- label rectangle pressure: no
- label-to-Node or label-to-Edge pressure: no
- self-Relation force: no; self-relations are excluded from adjacency

### Objective decomposition

The candidate responsibilities are kept separate:

- E1: true non-shared-endpoint Edge crossings
- E2: route corridor / route-route clearance pressure
- L1: actual label-label rectangle intersections
- L2: actual label-Node rectangle intersections

No combined weighted score was selected. Existing numeric thresholds and
weights were not repurposed, and no new production threshold was introduced.
The corridor concept in particular needs a declared metric before it can be a
safe objective; inventing a diagnostic margin would turn an observation into
an unreviewed product rule.

### Counterfactual decision

Candidate A (current Node-only, three iterations) remains the control. Edge-only
(B), corridor-only (C), label-only (D), and combined (E) are not materialized
as production or sample changes. A valid next experiment must use the current
router and label helpers read-only, compare a bounded candidate move, and
accept only lexicographically demonstrable improvements while preserving Node
safety and compactness. This checkpoint does not define that proxy.

The prior Lighthouse settling-depth evidence shows that deeper Node-only runs
compact the graph, but it does not distinguish Edge, route-corridor, or label
pressure. The manual central-congestion concern therefore remains
`MANUAL CONCERN NOT CAPTURED BY EXISTING GEOMETRY METRICS` rather than proof
for any one objective.

### Production and sample boundary

- Production Runtime changed: no
- Production iteration count changed: no
- Routing or label algorithm changed: no
- Lighthouse sample semantic content changed: no
- Existing uncommitted three-iteration Lighthouse Coordinate candidate: preserved
- Hand tuning: no
- Runtime commit: none

The next bounded checkpoint should select one coarse proxy (Edge-corridor,
label-pressure, or combined) and define its safety/compactness comparison
before any implementation. A new presentation-aware production objective is
not justified by this audit.

### Verification

The accepted runtime baseline remains 280/280 tests, lint, and build. The
e2r-spec validation gate passed for this documentation-only checkpoint.
