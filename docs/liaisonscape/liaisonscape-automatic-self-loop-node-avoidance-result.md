# LiaisonScape Automatic Self-Loop Node Avoidance Result

Status: accepted application result
Application checkpoint: `e2r-liaison-scape` commit `483479e`
Recorded: 2026-08-20

This document records LiaisonScape application behavior. It does not add
automatic layout behavior to the E2R Core specification.

## Baseline problem

Automatic ordinary Relations already considered nearby Node geometry, while
automatic self Relations retained their preferred orientation regardless of
nearby Nodes.

## Accepted model

Automatic self Relations select an orientation candidate using nearby other
Nodes and a soft preferred-orientation cost. The owning Entity is excluded
from the obstacle set. Manual self Relations remain authoritative and bypass
automatic candidate selection.

The accepted experiment uses:

- 10-degree angular step;
- 36 candidates over the full circle;
- Node influence radius 60;
- normalized squared penetration pressure averaged over 41 route samples;
- preferred-orientation weight 0.05;
- existing automatic radius rule unchanged;
- no occupied-path pressure in self-loop candidate scoring;
- no hysteresis or pointer-state branch.

The 10-degree granularity was accepted after comparison with the earlier
15-degree, 24-candidate experiment because movement was more similar to
ordinary Relation movement without problematic fine popping.

## Radius and parallel loops

Automatic radius remains:

```text
38 + floor(parallelIndex / 3) * 14
```

The existing preferred 120-degree distribution and radius hierarchy remain.
Some overlap or similar escape directions between multiple self-loops are
allowed; hard angular exclusivity is not imposed.

## Occupied paths

Occupied-path pressure is intentionally excluded from self-loop candidate
scoring because the existing pressure is Relation-order-dependent and strong,
while self-loop overlap is allowed for this workstream. The chosen route is
still appended to the normal `occupiedPaths` collection for downstream
existing behavior.

## Manual evidence

Manual acceptance confirmed:

- nearby Nodes cause natural automatic self-loop orientation escape;
- 10-degree movement is smoother than the 15-degree prototype;
- no unstable fine popping was observed;
- removing pressure returns the loop toward preferred orientation;
- 36 candidates caused no noticeable interaction-performance regression;
- manual self-loops remain fixed when unrelated Nodes move;
- reset removes the manual override and resumes automatic avoidance;
- parallel preferred distribution and radius hierarchy remain intact.

## Responsibility boundary

```text
other Node geometry
    -> automatic self-loop orientation choice

route
    -> Relation-label and Node-label placement

labels
    -/-> self-loop route choice
```

Node labels, Relation labels, connection handles, Context Menu state, and
pointer state are not routing obstacles or candidate inputs.

## Deferred work

- Node-owned label route-clearance refinement;
- radius adaptation;
- soft occupied-path pressure for self-loop candidates;
- hysteresis or candidate stabilization;
- connection-handle visibility and exclusion;
- direct unselected Relation drag;
- future Entity shapes.
