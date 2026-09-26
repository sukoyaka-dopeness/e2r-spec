# LiaisonScape Initial Placement Multi-Hop Topology Seed Experiment

## E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MULTI-HOP-TOPOLOGY-SEED-EXPERIMENT1

Date: 2026-08-30

### Exact result

`NOT SUPPORTED - MULTI-HOP TOPOLOGY SEEDING DOES NOT MATERIALLY IMPROVE PRESENTATION`

This checkpoint reconciles the proposed multi-hop hypothesis with the live
seed implementation. The current seed is degree-ranked but topology-agnostic
after ranking; it does not use graph distance or parent/branch structure. A
multi-hop BFS seed is therefore a distinct future experiment, but this audit
does not provide evidence sufficient to materialize it or replace the current
Lighthouse candidate.

### Current internal seed

`settleInitialPlacement` delegates to `solveAutoLayout`. For each connected
component, the solver:

1. builds undirected adjacency from unique non-self endpoint pairs;
2. ranks Nodes by distinct-neighbor degree, then lexical ID;
3. places the first ranked Node at `(componentLeft + 160, 160)`;
4. places all remaining Nodes in lexical/degree-ranked eight-direction rings;
5. applies the existing three-iteration repulsion/attraction settling; and
6. packs disconnected components by the current component-gap rule.

The ring index is not graph hop distance. Adjacency is used to compute degree
and connected components, but not to assign one-hop, two-hop, or parent sectors.
The current seed is therefore **SEED C1: degree-ranked but topology-agnostic
after ranking**.

### Lighthouse hop inventory

Using undirected ordinary non-self topology and the live center rule, `clara`
is selected because it has five unique neighbors and six ordinary incident
Relations. The graph-distance inventory is:

| Entity | Degree | Hop from `clara` | Component |
|---|---:|---:|---|
| clara | 5 | 0 | main |
| daniel | 1 | 1 | main |
| elias | 2 | 1 | main |
| lighthouse | 3 | 1 | main |
| maya | 3 | 1 | main |
| thomas | 2 | 1 | main |
| authority | 1 | 2 | main |
| beacon | 2 | 2 | main |
| sofia | 2 | 2 | main |
| archive | 1 | 3 | main |

All Lighthouse Nodes are in one component. No disconnected-component packing
question changes the primary result.

### Multi-hop counterfactual boundary

A future B candidate would retain the current center rule, assign BFS hop rings,
and use existing seed spacing before the same three-iteration settler. A future
C candidate would additionally preserve parent/branch sectors, while retaining
all Relations—including cycles and multiple shortest parents—as Dataset data.
BFS parent assignment would be a temporary geometric construction only, never a
semantic tree conversion.

This checkpoint did not invent absolute ring radii, angle thresholds, label
footprints, force weights, target Edge lengths, or a new solver. It also did
not claim that a single-root BFS is safe for cycles, two-hub graphs, dense
meshes, or disconnected components. Those controls are required before a
constructive seed can be considered a general direction.

### Evidence decision

The earlier central-hub result supports testing a different initial seed, but
the live production seed already provides the center and deterministic ring
composition. Because the proposed multi-hop PRE/POST geometry was not
materialized with an external-seed boundary, no claim is made that it improves
Lighthouse, survives settling, preserves branches, or improves routing/labels.
The existing solver remains Node-only and the earlier route/label audits do not
provide a multi-hop acceptance signal.

### Production and sample boundary

- Production Runtime changed: no
- Force/constants/iteration changed: no
- Routing or label algorithms changed: no
- Lighthouse sample changed: no
- Existing uncommitted three-iteration sample candidate: preserved
- `seededPositions` cleanup: separate
- Runtime commit: none

The multi-hop direction is closed for now pending a bounded external-seed
implementation experiment with chain, star, branching, cycle, two-hub, dense,
and disconnected controls. No production implementation is justified by this
source reconciliation alone.

Verification: runtime baseline remains 280/280 tests, lint, and build passed;
`e2r-spec` validation and `git diff --check` passed.
