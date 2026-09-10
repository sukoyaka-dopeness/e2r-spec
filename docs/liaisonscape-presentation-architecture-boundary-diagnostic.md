# LiaisonScape Presentation Architecture Boundary Diagnostic

## Scope

This checkpoint audits the current LiaisonScape presentation pipeline after
the exact candidate-cache, path-bounds broad-phase, and pass-local bounds
optimizations. It identifies responsibility and dependency boundaries without
changing Product-visible routing, label, or feedback semantics.

No Fresh10/Fresh11/Fresh12 historical evidence or Fresh12 canonical Human
Review result was read as writable or modified. No Product adoption or
governed Fresh execution was performed.

## Current authority model

The current implementation in `src/graph-presentation.ts` and
`src/viewport.ts` has the following layers:

| Layer | Inputs | Authority or result | Dependency character |
|---|---|---|---|
| Semantic snapshot | graph Nodes/Relations, current positions, manual route/label state, drag/continuity state | immutable inputs for one presentation request | semantic input; not derived |
| Route candidate generation | one edge, endpoint geometry, obstacles, provisional labels, occupied paths, route options | candidate geometries and diagnostics | derived per edge, but invalidated by its route context |
| Route selection | candidate set plus ordered `occupiedPaths`, overlap state, continuity/recovery rules | selected routed Edge geometry | sequential authority; later edges depend on earlier selected paths |
| Relation-label placement | selected routes, Node points, occupied Relation-label prefix, manual anchors | ordered Relation-label map | sequential occupancy; later labels depend on earlier placements |
| Node-label placement | selected routes, Relation-label map, Node positions, yielding routes, occupied Node-label prefix, manual offsets | ordered Node-label map | sequential occupancy and route/label narrow phase |
| Feedback preparation | label-free routes and first-pass routes/Node labels | yielding-route descriptors and final route-label input | derived comparison; sensitive to route geometry and label movement |
| Feedback pass | final Node-label bounds plus the same route/label authorities | bounded final presentation | explicit second pass; may invalidate route, Relation-label, and Node-label outputs |

The semantic authority is the input snapshot plus manual state and the
accepted rules in the route and label functions. Candidate geometry, path
bounds, yielding-route descriptors, and profiler data are derived state. A
selected route is not merely a cache entry: it becomes part of the ordered
occupied-path state and therefore is an authority for subsequent decisions in
the same pass.

## Dependency evidence

The existing opt-in trace and profiler show the following dependency chain:

```text
Node geometry / manual state
  -> route candidate inputs
  -> selected route
  -> occupiedPaths and route order
  -> Relation-label prefix occupancy
  -> Node-label input and prefix occupancy
  -> yielding-route descriptors
  -> bounded feedback route input
```

In the existing Apollo 11 and Regional Care diagnostics, the first and
feedback passes recompute route, Relation-label, and Node-label decisions when
the relevant upstream fingerprints change. The trace did not establish a
stable reusable prefix/suffix for the current authority. Regional Care also
showed that a local route or label change can alter remote occupied-path or
feedback outputs. This is evidence against treating selected routes or final
labels as independently reusable items under the current semantics.

The feedback boundary is intentionally bounded rather than a fixed-point
solver: `deriveBoundedAutomaticPresentation()` establishes a label-free
counterfactual, runs the first pass, derives final Node labels, and runs one
feedback pass only when the final Node-label input moved. This is a clear
orchestration boundary, but it is not an independent invalidation boundary
until the dependencies that can change its route inputs are represented
explicitly.

## Boundaries considered

### Route candidate generation versus route selection

This is the strongest existing seam. Candidate generation can be cached or
precomputed from its immutable geometric inputs. The selected result must stay
inside the sequential route authority because `occupiedPaths`, edge order,
parallel handling, continuity, and recovery rules affect arbitration.

The existing candidate-generation cache validates this split: it reuses only
candidate geometry/diagnostic data while leaving arbitration authoritative.

### Route geometry versus downstream labels

Selected route geometry is a real input/output boundary for label placement,
but it is not a freely parallel stage. Relation labels consume an ordered
route set and build occupied-label state. Node labels consume both the
selected route set and the completed Relation-label map. This boundary is
useful for explicit data contracts and profiling, not for unsound per-item
reuse.

The exact path-bounds sharing optimization belongs inside this boundary: bounds
are immutable summaries of a pass-local route set and do not make a placement
decision authoritative.

### Relation labels versus Node labels

These are separate responsibilities and should remain separate derived
stages. However, Node-label placement is semantically downstream of the
Relation-label map because Relation labels are occupied inputs. Independently
invalidating Node labels while retaining an old Relation-label map is safe only
when the complete route and Relation-label inputs are proven unchanged.

### First pass versus feedback pass

This is the clearest architecture-level orchestration boundary. The first pass
output should be treated as an immutable snapshot, and the feedback input
should be explicit. That improves maintainability and makes future invalidation
work measurable. It does not, by itself, reduce recomputation: the feedback
pass can change selected routes, occupied paths, Relation labels, and Node
labels.

### Reusable derived geometry summaries

Path bounds, route lengths, and other read-only summaries are safe candidates
when they are derived from the exact route snapshot and do not influence
candidate ordering or scoring. They should remain summaries, not alternative
authorities. The pass-local path-bounds sharing checkpoint demonstrated this
boundary with exact output preservation.

## Cost evidence after primitive optimization

Regional Care remains the dense stress case with 3 hard hits, 10 near routes,
1 crossing, route median/max `281.6 / 645.4`, extent `1093.9 x 691.0`, and fit
`0.4079`. A representative optimized feedback profile measured approximately:

- route candidate generation: `48.9 ms`;
- Relation-label placement: `13.6 ms`;
- Node-label placement: `25.7 ms`.

The exact values vary by process state, but the stage ordering and dependency
trace are stable enough for architectural conclusions. After shared bounds,
the remaining work is not one obvious duplicated primitive. It is a mixture
of route candidate generation, sequential arbitration context, and genuine
Node-label narrow-phase evaluation. Feedback can cause all three downstream
stages to be evaluated again.

Apollo 11 remains a smaller clean case with no hard or near defects. The
existing diagnostic runs preserved exact route, Relation-label, Node-label,
feedback, extent, and fit outputs for Apollo 11 and Regional Care. The full
Product test suite passed without changing Product semantics.

## Decision

**PROVEN**

- The semantic input snapshot and manual state are distinct from derived
  candidate geometry, path summaries, labels, and feedback descriptors.
- Selected routes and ordered label placements are sequential authorities
  because they update occupied state consumed by later decisions.
- Candidate generation and pass-local geometry summaries are the safest
  independently derived responsibilities.
- The first-to-feedback transition is a clear orchestration boundary, but the
  current dependency graph does not provide a safe item-level invalidation
  boundary.

**STRONGLY SUPPORTED**

- Further performance work should first improve explicit stage contracts and
  dependency observability, not parallelize or reuse selected route/label
  items speculatively.
- A future architecture could expose immutable stage snapshots such as
  `routeCandidateInput -> routeCandidateSet -> selectedRouteSnapshot ->
  relationLabelSnapshot -> nodeLabelSnapshot -> feedbackInput`, while keeping
  selection and occupancy sequential inside their authority.
- Such an extraction should be behavior-preserving and incremental, consistent
  with the workspace modularization decision; a wholesale rewrite is not
  justified by the current evidence.
- The remaining route-generation and Node-label costs are coupled to quality
  decisions. Architecture-level work has better expected value than another
  unproven primitive optimization, but it requires a separate bounded design
  checkpoint.

**UNRESOLVED**

- Whether explicit immutable snapshots alone enable useful invalidation in a
  larger fixture, or only improve maintainability and profiling.
- Whether route candidate generation can be moved behind a stronger pure
  interface without duplicating continuity and occupied-path context.
- Whether feedback dependencies can be represented as a bounded invalidation
  graph without changing accepted output or making the authority more complex
  than the saved work justifies.

## Behavior-preserving contract prototype

A small implementation prototype was completed to test whether the proposed
boundary can be represented without moving authority. The new
`src/presentation-stage-contracts.ts` defines read-only contracts for:

- route-selection snapshots;
- Relation-label snapshots;
- Node-label snapshots, including yielding-route descriptors;
- complete per-pass snapshots; and
- explicit feedback-stage input.

`deriveBoundedAutomaticPresentation()` now passes these snapshots between its
existing stages. The route-selection loop, Relation-label loop, Node-label
loop, candidate scoring, occupancy order, and feedback decision remain in the
same authority functions. Snapshot containers and arrays are copied/frozen at
the boundary; maps are exposed only through `ReadonlyMap` contracts. The
ordinary Product result is reconstructed into the existing return shape, so
callers and Product-visible behavior remain unchanged.

The prototype makes dependency ownership and future invalidation inputs
inspectable, but it does not claim a recomputation reduction. The existing
trace still shows that current route and label outputs have no safe reusable
prefix/suffix in the tested fixtures. This is therefore a maintainability and
future-invalidation seam, not an optimization result by itself.

## Checkpoint outcome

The behavior-preserving stage-contract prototype is suitable for continued
diagnostic use. The current primitive-optimization branch remains closed, and
no parallel or incremental recomputation was enabled. The next architecture
experiment should measure snapshot construction and explicit dependency
invalidation before attempting any recomputation or parallel execution.

Validation for the associated implementation checkpoint:

- LiaisonScape tests: `335/335 PASS`;
- lint: PASS;
- build: PASS;
- E2R-SPEC validation: PASS;
- `git diff --check`: PASS.

The implementation checkpoint is `d3f7f75`; its diagnostic consumers were
adapted in `45243c7`. The preceding implementation/result records are
`8771853` and `477a979`. All remain local and unpushed. Fresh10/Fresh11/Fresh12
historical evidence, the Fresh12 canonical Human Review result, Product
adoption state, and unrelated dirty work are unchanged. No push, tag, release,
deploy, or publication was performed.
