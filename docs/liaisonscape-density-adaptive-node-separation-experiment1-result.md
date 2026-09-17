# LiaisonScape Density-Adaptive Node Separation Experiment 1

Date: 2026-09-17
Contract: `E2R-LIAISONSCAPE-DENSITY-ADAPTIVE-NODE-SEPARATION-EXPERIMENT1`
Classification: **C. MIXED / SPACING HELPS SOME PRESENTATION PRESSURE BUT DOES NOT CLOSE THE MAIN QUALITY GAP**

## Scope and boundary

This was a diagnostic-only Graph-space experiment for the Explicit Auto
Layout quality gap. It did not change production Auto Layout, Initial
Automatic Display, Frontier-12, Pin persistence, Dataset/Coordinate schema,
viewport policy, routing, Relation-label, Node-label, Self-loop, dirty-state,
or Human Review.

Graph-space separation and viewport framing were measured separately. Larger
Graph bounds are not treated as a defect by themselves, and `fitGraphView`,
zoom, pan, and initial framing were not changed or used as hard quality gates.

## Policies

All policies used the same current shared Frontier representative candidates
and the same current Product presentation evaluator. They differed only in
Graph-space Node separation:

- `current-fixed`: current Frontier geometry with the existing diagnostic
  `.88 / 1.12` anisotropic spacing;
- `larger-fixed`: bounded 1.18 radial Graph-space expansion control;
- `density-adaptive`: per-Node pressure-derived target gaps followed by
  bounded local repulsion iterations.

The density signal is explicit and reproducible:

```text
graphDensity = E / (N * (N - 1) / 2)
pressure = 0.55 normalized non-self degree
          + 0.45 normalized nearby-Node count within 260 Graph-space units
targetGap = 150 + 150 * pressure
```

For every policy, anchors were installed before the policy computation and
held fixed. Movable Nodes alone could change. No later global translation or
scale was applied to recover pin coordinates. Connected Edge geometry was not
treated as pinned; it remained Product-owned and was re-derived by the
existing presentation stage.

## Fixture matrix

| Fixture | Graph density | Topology/control | Pin cases |
| --- | ---: | --- | --- |
| Lighthouse EN | 0.311 | ordinary public sample | no pins, one saved, few mixed, many mixed, one movable, all pinned |
| Apollo 11 EN | 0.306 | ordinary public sample | same six cases |
| label-heavy JA-10 | 0.444 | long Japanese labels | same six cases |
| dense-k7-7 | 0.538 | dense bipartite stress control | same six cases |
| parallel-self-loop-control | 0.393 | parallel Relations and Self-loop | same six cases |

The Product input was the non-empty plain-data snapshot established by the
preceding pinned feasibility checkpoint: route curve offset, Self-loop
override, previous Node/Relation label placements, manual label state, and
previous automatic routes. The same candidates were also evaluated with an
empty snapshot as a diagnostic control so spacing effects were not attributed
to previous-state feedback alone.

## Results

Across 25 non-all-pinned comparisons, the adaptive policy improved the
snapshot-view score in 14 cases and worsened it in 11. In the clean Product
control it improved score in 12 cases and worsened it in 12. Adaptive crossing
count decreased in 3 snapshot-view cases and increased in 4; in the clean
Product control it decreased in 2 and increased in 4. Label-nearness signals
also moved in both directions.

The important control result is `dense-k7-7`: the adaptive policy produced
zero crossing-free cases among all non-all-pinned cases. It improved crossing
count only in some many-pin/one-movable configurations and increased crossing
pressure for no-pin, one-pin, and few-pin cases. This does not support a
density-adaptive policy as a general dense-quality solution.

The ordinary and label-heavy fixtures show useful local signals. Lighthouse
and Apollo have several lower-score adaptive cases, particularly with one or
few anchors; label-heavy JA also improves in some one/few-pin cases. The
parallel/Self-loop control improves in some anchored cases but shows a
trade-off when many anchors constrain the remaining geometry. These are
bounded directions, not an adoption result.

For the representative few-mixed case, candidate generation was approximately
0.09--0.18 ms for the fixed policy and 0.96--2.53 ms for the adaptive policy.
Product evaluation dominated at approximately 376--3,852 ms per policy in
the five fixtures because each policy evaluated the representative set with
both Product snapshot views. The timings exclude fixture loading and artifact
writing. They are diagnostic evidence only and do not select main-thread,
cooperative, or Worker architecture.

Graph extents increased for many adaptive cases and `fitScale` consequently
decreased. This is expected camera information-density behavior, not a
spacing failure. The experiment does not claim that automatic fit can preserve
screen-space size while Graph-space bounds grow.

## Provenance and reproduction

The executable implementation is:

- `e2r-liaison-scape/experimental/density-adaptive-node-separation-experiment1/core.ts`
- `e2r-liaison-scape/tools/density-adaptive-node-separation-experiment1.mjs`
- `e2r-liaison-scape/experimental/density-adaptive-node-separation-experiment1/result-summary.json`

The source revision was
`3c383c67c8e3c599be9de7f99d6785261e147479` plus the diagnostic working-tree
additions. Reproduce with:

```text
cd e2r-liaison-scape
node --experimental-strip-types tools/density-adaptive-node-separation-experiment1.mjs
node --experimental-strip-types --test tests/density-adaptive-node-separation-experiment1.test.ts
```

The replay chain is:

```text
fixture Dataset
→ current shared Frontier representatives
→ density measurement / separation policy
→ anchored candidate geometry
→ current Product presentation snapshot evaluation
→ Product comparator / metrics
→ result-summary.json
```

## Decision

The experiment supports a **mixed** classification. Density-aware Graph-space
separation can relieve some local label or route pressure in ordinary,
label-heavy, and selected pinned cases. It does not close the principal
dense-graph crossing/congestion gap, and larger Graph bounds can reduce
overview fit scale without constituting a layout defect.

No spacing policy is promoted to production or shared production source.
Current Frontier, Product authority, Pin hard-constraint semantics, and
Initial Automatic Display remain unchanged. A future Explicit Auto Layout
checkpoint may use this diagnostic boundary, but must retain Product-owned
evaluation, test moderate cases and dense graceful degradation, and keep
viewport framing as a separate acceptance dimension.
