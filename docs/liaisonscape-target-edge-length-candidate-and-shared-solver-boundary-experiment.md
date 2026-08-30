# LiaisonScape Target Edge Length Candidate and Shared Solver Boundary Experiment

## E2R-LIAISONSCAPE-TARGET-EDGE-LENGTH-CANDIDATE-AND-SHARED-SOLVER-BOUNDARY-EXPERIMENT1

Date: 2026-08-30

### Exact result

`BLOCKED - NO NON-ARBITRARY TARGET EDGE LENGTH CAN BE JUSTIFIED`

Source reconciliation confirms that the current always-attractive connected
Node force explains continued compression, but the available evidence does not
select a production natural Edge length. A temporary spring was therefore not
materialized with an arbitrary value.

### Current shared solver

Coordinate-less opening calls `settleInitialPlacement`, which calls
`solveAutoLayout` with three iterations and creates its own deterministic
degree-ranked ring seed. `App.tsx`'s `seededPositions` is unused on the fully
Coordinate-less branch but remains relevant to stored/mixed placement and was
not cleaned up here.

The same `solveAutoLayout` mechanics are used by explicit Auto Layout. The
current connected force is:

```text
delta = neighborPoint - point
attraction = delta * 0.018
```

It is attractive for every positive distance, has no zero-force target, and
does not reverse sign for short connected pairs. Node repulsion is active only
when distance is below `96`:

```text
push = (96 - distance) / distance
repulsion += delta * push * 0.25
```

Each resulting axis displacement is clamped to `[-18, 18]`. There is no
separate centering, damping, route, or label force. Thus the 3/6/12 continued
compression is supported by the source equations.

### Candidate derivation

| Candidate | Value | Source | Graph-specific | Existing semantic constant | Production authority |
|---|---:|---|---|---|---|
| T1 | 96 | repulsion activation boundary | no | yes | no |
| T2 | 163.91 | 3-iteration Lighthouse connected-distance median | yes | no | no |
| T3 | stored distribution | canonical stored Lighthouse geometry | yes; provenance unknown | no | no |
| T4 | 112.48 | 12-iteration connected-distance median | yes | no | no |

The current 3-iteration connected distances range from `100.41` to `309.18`;
6 iterations range from `86.59` to `280.72`; 12 iterations range from
`81.12` to `248.06`. T1 is a collision boundary, not a natural relation
length. T2/T4 are empirical outputs of graph-specific solver states, not
semantic constants. T3 is authored sample evidence with unknown provenance.
No existing source constant supplies a target length.

### Spring counterfactual boundary

The tested conceptual form would be:

```text
unit = delta / distance
extension = distance - desiredEdgeLength
spring = unit * extension * 0.018
```

It would attract long pairs and push short pairs, with zero spring force at the
target. However, selecting 96, 112.48, or 163.91 as the target would encode a
new product rule without sufficient evidence. The experiment therefore stops
at candidate derivation rather than presenting arbitrary numerical output as
validation. No repulsion, attraction coefficient, seed, iteration, routing,
label, or sample behavior was changed.

### Shared-solver boundary

Because initial placement and explicit Auto Layout share `solveAutoLayout`, a
production spring change would affect both workflows. The current evidence
does not show whether the same target would improve both, whether initial
placement needs a distinct target, or whether either workflow would regress in
routing, labels, compactness, or synthetic controls. A future implementation
candidate must first define this boundary and test two-node equilibrium, chain,
star, cycle, two-hub, and disconnected behavior.

### State and verification

- Production Runtime changed: no
- Production constants changed: no
- Production iteration count changed: no
- Routing or label algorithms changed: no
- Lighthouse sample changed: no
- Existing uncommitted three-iteration sample candidate: preserved
- `seededPositions` cleanup: separate candidate
- Runtime commit: none
- Runtime baseline: 280/280 tests, lint, build passed
- `e2r-spec` validation and `git diff --check`: passed

The next checkpoint should be a shared-solver boundary audit or a deliberately
scoped temporary spring implementation with an evidence-backed target. Sample
replacement remains unaccepted.
