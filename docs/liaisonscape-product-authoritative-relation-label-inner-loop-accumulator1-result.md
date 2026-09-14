# LiaisonScape Product-authoritative Relation-label Inner-loop Accumulator / Interruptibility 1

Date: 2026-09-14
Status: `RELATION-LABEL ACCUMULATOR EQUIVALENT / DIAGNOSTIC CEILING MET / PREFERRED SLICE NOT UNIFORM`

## Scope and preserved boundaries

This checkpoint investigated execution granularity only. The current
Product-authoritative Relation-label algorithm, candidate ordering, collision
semantics, route authority, Parallel/Incident authority, endpoint-plan
authority, Node placement, Self-loop behavior, Dataset, persistence, dirty
state, manual curvature, and manual label semantics were not redesigned.

The production synchronous API remains `deriveAutomaticRelationLabels`. It now
drains the same extracted accumulator that the diagnostic resumable path uses.
No Product caller, `App.tsx`, Product default, production provider, Worker,
quality solver, or visual candidate was adopted.

## 1. Current processing order and source dependencies

The source-faithful processing order is the input `routedEdges` order. The
Relation-label pass does not sort or otherwise canonicalize this list; the
upstream route pass supplies the order. Every routed edge consumes one
processing index, including an edge with an empty label. Empty labels do not
produce an accepted label, but they remain a deterministic no-op work unit.

Before the ordered pass, the current source constructs:

1. a copied Node point list;
2. one `pointBounds(samples)` result for every routed edge; and
3. the associated path-bounds profiling counters.

For each current edge, the source then:

1. builds `otherEdgePaths` from every other routed edge;
2. maps the immutable route-bounds cache to the same other-edge order;
3. determines whether the current edge is incident to the dragged Node;
4. captures the already accepted `occupiedLabels` prefix for diagnostics;
5. invokes `placeEdgeLabel` with the current path, label, occupied prefix,
   Node points, every other path, the previous placement when allowed, and the
   cached other-path bounds;
6. reconstructs a manual anchor target after automatic candidate selection
   when a manual anchor exists;
7. emits the existing item trace; and
8. appends the final current placement to the occupied prefix and result map.

`placeEdgeLabel` evaluates the current fixed candidate family, checks occupied
label overlap, Node influence, broad-phase path bounds, and path points, then
applies the existing score and recovery selection. The current item depends
on earlier accepted Relation-label placements, but not on future Relation-label
results. Future route geometry is required for `otherEdgePaths` and their
global bounds, so it is retained as immutable precomputed input rather than
recomputed or discarded at a step boundary.

## 2. Accumulator contract

The extracted production state is:

- immutable: copied routed-edge order, Node point snapshot, all route/path
  bounds, route samples and label geometry input;
- mutable: current routed-edge index, occupied Relation-label prefix,
  accepted placement map, and diagnostic/profile state;
- work unit: one ordered routed-edge Relation-label decision, including the
  empty-label no-op;
- completion: a new complete map is returned only after every routed edge has
  been processed;
- partial Product commit, Dataset mutation, and authority migration: false.

The accumulator shape is intentionally not a mechanical copy of the route
accumulator. Its global cache is path-bounds-oriented, its prefix is
`occupiedLabels`, and its item state has no route arbitration or occupied-path
state.

The diagnostic contract is exposed by
`experimental/relation-label-accumulator1/prototype.mjs`. The production
extraction is in `src/graph-presentation.ts`:
`initializeAutomaticRelationLabelPlacement`,
`stepAutomaticRelationLabelPlacement`, and
`completeAutomaticRelationLabelPlacement`.

## 3. Exact-equivalence evidence

The focused comparison uses the current synchronous implementation as the
reference. It compares Relation ID order and complete `LabelRect` geometry,
including x/y, width/height, direction, manual-anchor reconstruction, empty
label handling, occupied-prefix effects, and diagnostic item trace identity.

The focused fixture contains ordinary labels, an empty-label edge, a previous
placement, and a manual anchor. The result was exact-equivalent and trace-
equivalent. The incomplete-state test rejects finalization after a prefix
step, and a one-step budget exhaustion returns no label map.

The real-browser harness compared both `first` and `feedback` Relation-label
passes for five controls. All ten pass comparisons were semantically and
trace-equivalent:

| control | first max unit | feedback max unit | first total | feedback total |
| --- | ---: | ---: | ---: | ---: |
| canonical Lighthouse | 6.1 ms | 2.9 ms | 19.8 ms | 6.4 ms |
| dense k7-7 | 7.2 ms | 21.0 ms | 128.3 ms | 79.3 ms |
| parallel pressure | 2.2 ms | 2.0 ms | 10.2 ms | 8.8 ms |
| long-label pressure | 2.2 ms | 3.0 ms | 5.2 ms | 3.5 ms |
| self-loop pressure | 3.1 ms | 2.3 ms | 8.9 ms | 7.8 ms |

The fixed browser artifact also records candidate evaluations, occupied-label
checks, path-point checks, broad-phase rejects, and path-bounds visits. Dense
first-pass evidence included `2,205` candidate evaluations, `52,920`
occupied-label checks, and `1,424,750` path-point checks; the unit remained
small because that work is distributed across 49 ordered items.

## 4. Initialization and boundedness

Initialization, including whole-route bounds construction, measured between
`0.3ms` and `1.0ms` across the measured controls. It was not itself a hidden
whole-pass browser blocker in this run. The complete route-bounds cache is
constructed once and reused by every Relation-label item.

Every observed Relation-label unit stayed below the diagnostic `50ms` ceiling.
The dense feedback maximum was `21.0ms`, so the preferred approximately
`16ms` interactive slice is not uniformly met. This is therefore a resumable
and diagnostically bounded seam under the selected controls, but not a
production runtime SLA or an arbitrary-graph complexity bound. The dominant
cost signal remains path-point checking, and its count grows with the number
and sampling density of other routes.

The natural unit is still one routed edge. Splitting candidate evaluation or
collision checks further would add state and replay complexity without being
required by the observed 50ms diagnostic ceiling. Larger or more highly
sampled graphs would need a new measurement before that conclusion could be
extended.

## 5. Manual authority and failure semantics

Manual Relation-label anchors remain Product authority. The accumulator first
executes the same automatic placement call, then applies the unchanged
`reconstructManualRelationLabelTarget` result to the current route samples.
The focused exact-equivalence fixture verified one manual reconstruction and
kept its geometry equal to the synchronous reference.

Cancellation is safe between item boundaries. The browser cooperative probe
cancelled all five controls without exposing a partial Product result; observed
delivery was `4.8--15.3ms` after the scheduled request, including browser
scheduler delay. The computation-side latency is at most the current bounded
item plus scheduler/message delay; this run shows that dense work can approach
the preferred slice even though it remained below the diagnostic ceiling.

Step-count exhaustion and incomplete completion are fail-closed. Generation
identity, newer-operation precedence, stale-result rejection, and non-finite
candidate rejection remain owned by the already-closed quality-operation
lifecycle and its Product orchestration boundary. In addition, accumulator
completion rejects any non-finite `LabelRect` and never returns that map. The
caller must still reject an incomplete, stale, cancelled, budget-exhausted, or
invalid operation before Product acceptance.

## 6. Worker compatibility and Product relation

Classification: `A. PURE WORKER-COMPATIBLE DATA SEAM`, with transport still
unadopted. The accumulator state consists of arrays, maps, plain geometry,
labels, and numeric counters. A future Worker transport would need explicit
serialization for Maps and immutable snapshots, but the computation itself has
no DOM or React dependency. This is an execution observation only; it does not
adopt a Worker/provider or move Product authority.

The current synchronous API remains compatible because it drains the same core
and returns the same map. Existing callers and `App.tsx` remain unchanged.
Relation-label final placement remains the existing Product authority; the
new seam only makes its ordered evaluation resumable.

## 7. Node-label and Product-wide status

The Relation-label result suggests a reusable pattern of global path-bounds
precomputation plus an occupied-label prefix, but Node-label is not assumed to
be equivalent. Node-label additionally consumes Node geometry, Relation-label
occupancy, other Node positions, edge paths, and yielding-route paths, and has
its own candidate and dependency surface. It remains a separate checkpoint.

Product-wide verification budget remains `NOT ESTABLISHED` because Node-label
inner-loop interruptibility is unresolved and dense whole-pass verification
still exceeds the preferred budget. Quality solver readiness remains `HOLD /
NOT ESTABLISHED`; Product integration/default remains `HOLD`; production
provider remains `NOT ESTABLISHED`; Adaptive Initial Placement Cascade remains
`INACTIVE`; and the Initial Layout Release blocker remains `OPEN`.

No Actual Product visual smoke check or Human Review was performed. This
checkpoint changed no visible Product behavior and produced no visual
candidate. Human Review remains `NOT READY`.

## Disposition and reproduction

The Relation-label inner loop is `ESTABLISHED` as an exact resumable ordered
accumulator under the observed diagnostic ceiling, with the explicit caveat
that the preferred 16ms slice is not uniform in dense feedback. Continue to
the independent Node-label inner-loop checkpoint only; do not interpret this
as permission to change label quality semantics, routing, Parallel,
Self-loop, Product integration, or provider adoption.

Reproduction artifacts:

- prototype and contract: `e2r-liaison-scape/experimental/relation-label-accumulator1/prototype.mjs`
- browser harness extension: `e2r-liaison-scape/experimental/verification-interruptibility1/browser-main.ts`
- fixed browser evidence: `e2r-liaison-scape/experimental/relation-label-accumulator1/browser-result-summary.json`
- audit: `e2r-liaison-scape/tools/relation-label-accumulator-audit.mjs`
- focused test: `e2r-liaison-scape/tests/relation-label-accumulator.test.ts`

No cross-repository knowledge candidate was promoted; the evidence is
repository-local and execution-specific.
