# LiaisonScape Canonical Routing Priority Result

## Status

Accepted application result.

Application checkpoint: `e2r-liaison-scape` commit `e581c99`.
Recorded: 2026-08-20.

This document records LiaisonScape application behavior. It does not add
routing or layout behavior to the E2R Core or an E2R Extension.

## Problem

Before Experiment 2D-1, automatic ordinary routing consumed `occupiedPaths`
sequentially in Dataset/graph-edge order. Consequently, `relations[]`
serialization order could determine which automatic ordinary Relation became
the first route and which later Relation curved around it. Parallel slot
assignment likewise depended on Relation-array order within a directed endpoint
group.

Automatic geometry was therefore deterministic for one ordered Dataset, but
not invariant under a permutation of the same Relations.

## Accepted design

Calculation order is now separate from public/render order.

Canonical parallel assignment uses lexical stable Relation identity inside each
directed `(sourceId, targetId)` group. It assigns `parallelIndex` and retains
`parallelCount`, without reordering the public `graph.edges` sequence.

Canonical routing priority uses the lexical tuple:

```text
sourceId, targetId, relationId
```

Routing occurs in three stages:

1. Fixed, occupied-path-independent routes: manual ordinary Relations,
   automatic or manual self-loops, and applicable distinct-endpoint
   overlapping-Node fallback routes.
2. Automatic ordinary Relations in canonical identity order; each completed
   route can contribute to `occupiedPaths` for later automatic ordinary routes.
3. Routed results are returned and rendered in original `graph.edges` / Dataset
   order.

## Accepted semantics

For the same Relation identities, endpoints, Node positions, and manual
overrides, permuting `Dataset.relations[]` does not determine automatic
ordinary routing priority or parallel slot assignment.

Stable Relation identity may determine which automatic Relation receives the
first-route role. The routing algorithm remains intentionally asymmetric and
sequential; this is not a global or symmetric route solver.

## Manual-route authority

Manual ordinary routes remain authoritative and are not automatically rerouted.
Their completed path can act as an obstacle for later automatic ordinary
Relations. Manual self-loop orientation and radius remain authoritative.

## Self-loop boundary

Experiment 2B automatic self-loop behavior is unchanged. Its orientation
avoidance remains Node-driven, does not read `occupiedPaths`, does not use Node
labels as obstacles, and retains the accepted candidate, radius, and
preferred-orientation behavior.

Self-loop paths can be part of the fixed baseline seen by later automatic
ordinary routing. Experiment 2D-1 does not claim that ordinary Relations
visibly or strongly avoid self-loops; that depends on the unchanged
occupied-path metric.

## Manual acceptance

Manual acceptance passed:

- overall graph appearance remained reasonable;
- parallel Relations did not visibly swap sides after hard reload;
- manual ordinary routes remained manual;
- automatic and manual self-loop behavior remained intact; and
- Node dragging showed no unnatural route jitter.

## Automated evidence

At the recorded application checkpoint:

- tests: 158 passed;
- lint: passed;
- build: passed;
- `git diff --check`: passed.

The focused tests cover canonical parallel assignment, self-loop/ordinary
permutation invariance, ordinary/ordinary first-route ownership, manual-route
baseline behavior, and preservation of public graph-edge order.

## Explicit non-goals

Experiment 2D-1 does not provide:

- globally optimal routing;
- symmetric route separation;
- iterative or global route solving;
- hysteresis, previous-route memory, or pointer-state-dependent routing;
- stronger ordinary-to-self-loop avoidance;
- occupied-path proximity tuning;
- invariance when Relation identities change; or
- serialization-order changes to the Dataset.

## Follow-up

A possible separate Experiment 2D-2, Occupied-Path Clearance Metric Audit,
could examine the difference between continuous Node proximity pressure and
the current more binary occupied-path response. It is outside this checkpoint.
