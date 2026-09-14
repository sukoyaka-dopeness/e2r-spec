# LiaisonScape Product-authoritative Node-label Inner-loop Accumulator / Interruptibility 1

Date: 2026-09-14
Status: `NODE-LABEL INNER-LOOP INTERRUPTIBILITY ESTABLISHED / DIAGNOSTIC CEILING AND PREFERRED SLICE MET IN OBSERVED CONTROLS`

## Scope and preserved boundaries

This checkpoint examined only execution granularity of the current
Product-authoritative Node-label placement pass. It did not change Node-label
heuristics, candidate families, spacing, routing, Parallel/Incident behavior,
Self-loop behavior, Node placement, quality solving, Dataset, persistence,
dirty-state, manual Node placement, manual curvature, manual Relation-label
authority, manual Node-label authority, endpoint-plan authority, viewport
authority, Product defaults, or provider adoption.

The existing synchronous `deriveAutomaticNodeLabels` API remains unchanged to
callers. It now drains the same extracted accumulator used by the diagnostic
resumable path. `App.tsx` and Product orchestration were not changed.

## Source dependency and exact processing order

The source processes `nodes` in input order. It does not sort Node IDs. The
initial occupied sequence is `Array.from(occupiedRelationLabels.values())`,
preserving Relation-label Map iteration order. Each processed Node appends its
final placement to that sequence, so the effective order is:

`initial Relation-label occupancy -> accepted Node-label 0 -> accepted Node-label 1 -> ...`

Before the Node loop, the source constructs:

1. a Node-order snapshot and current-position lookup;
2. `edgePaths`, consisting of non-empty routed-edge sample arrays;
3. one bounds result for every edge path; and
4. one bounds result for every yielding route.

For each Node, the source then:

1. resolves the current position;
2. derives all other Node positions in original input order;
3. passes the combined Relation-label plus accepted Node-label occupancy;
4. passes all edge paths and all yielding routes with their precomputed bounds;
5. passes the previous Node-label placement unless this Node is actively
   dragged;
6. runs the existing `placeNodeLabel` candidate scoring;
7. applies the manual Node-label offset after automatic placement;
8. emits the existing diagnostic trace; and
9. appends the final placement to the occupied sequence and result map.

The current Node does not depend on future Node-label results. It does depend
on the earlier occupied prefix. Other Node geometry, complete route paths,
yielding routes, previous placement, active-drag identity, and manual offset
are immutable inputs for the item decision.

## Accumulator state

The production accumulator separates:

- immutable/precomputed state: input-order Node list, copied current
  positions, initial Relation-label occupancy, complete edge-path set, edge
  path bounds, complete yielding-route set, and yielding-route bounds;
- mutable state: current Node index, combined occupied sequence, accepted
  Node-label prefix, accepted Node-label map, and diagnostic/profile state.

`initialRelationLabels` remains separately represented from
`acceptedNodeLabels`, while `occupiedLabels` preserves the exact combined
sequence consumed by the current placement authority. This is the important
distinction from an empty-prefix algorithm.

The work unit is one input-order Node placement. Candidate-batch or path-scan
subdivision was not required by the observed browser cost.

## Exact-equivalence evidence

The focused fixture includes:

- input-order Nodes;
- an initial Relation-label occupancy;
- previous Node-label placements;
- an actively dragged Node;
- a manual Node-label offset; and
- a yielding route.

The accumulator output exactly matched the synchronous reference by Node ID
and complete `LabelRect` geometry. Existing diagnostic Node traces also matched
exactly, including processing index, combined occupied-label prefix, complete
route/yielding fingerprints, previous-placement suppression, candidate
fingerprint, and selected placement fingerprint.

The real-browser harness compared both first and feedback passes for five
controls. All ten pass comparisons were semantic- and trace-equivalent:

| control | first max unit | feedback max unit | first total | feedback total |
| --- | ---: | ---: | ---: | ---: |
| canonical Lighthouse | 5.8 ms | 2.0 ms | 38.1 ms | 10.2 ms |
| dense k7-7 | 3.9 ms | 0.8 ms | 51.8 ms | 8.4 ms |
| parallel pressure | 0.6 ms | 0.5 ms | 3.0 ms | 2.7 ms |
| long-label pressure | 0.3 ms | 0.3 ms | 1.7 ms | 1.2 ms |
| self-loop pressure | 0.4 ms | 0.8 ms | 2.2 ms | 2.3 ms |

## Initialization and boundedness

Initialization, including edge-path and yielding-route bounds, measured
`0--0.4ms` in the Edge 152 run. It was not a hidden whole-pass blocker.

Every observed Node-label unit stayed below both the preferred approximately
`16ms` research reference and the diagnostic `50ms` ceiling. Dense first-pass
evidence included 448 candidate evaluations, 24,864 occupied-label checks,
5,824 other-Node checks, 132,717 edge-path point checks, and 13,120
yielding-route point checks, while the maximum single Node unit was 3.9ms.
This is bounded evidence for the selected controls, not an arbitrary-graph
complexity bound or production SLA.

The existing whole-pass dense first Node-label stage remained about 51.8ms.
The accumulator demonstrates that this cost can be divided at Node boundaries;
it does not make the total stage less work.

## Active drag, manual authority, and yielding routes

When `activelyDraggedNodeId` equals the current Node, previous placement reuse
is suppressed exactly as before. Other Nodes retain their previous-placement
input. Manual offset is applied after automatic candidate selection and the
manual result is what enters the occupied prefix. The focused test verifies
both behaviors.

Yielding routes are retained as a complete immutable set. Their bounds are
precomputed once, and each Node scans the same yielding-route collection and
the same route order as the synchronous reference. First/feedback browser
cases measured yielding-route counts from `0` to `7`; no yielding-route
dependency was dropped.

## Cancellation and failure semantics

The browser cooperative probe cancelled all five controls between Node units
without exposing a partial Product result. Observed cancellation delivery was
`0--18.9ms`, including scheduler delay. The computation-side bound is one
Node-label unit plus scheduler/message delivery; the largest observed unit was
5.8ms.

Step-count exhaustion returns no completed map, incomplete completion throws,
and completion rejects non-finite `LabelRect` geometry. Stale generation,
newer-operation precedence, and Product acceptance remain owned by the closed
quality-operation lifecycle; cancellation, stale, invalid, or budget-exhausted
work cannot replace the current accepted Product presentation.

## Worker compatibility

Classification: `A. PURE WORKER-COMPATIBLE DATA SEAM`, with a serialization
qualification. The algorithm itself uses plain geometry, arrays, maps,
strings, and numbers and has no DOM or React dependency. Maps and diagnostic
callback sinks would need a transport adapter or omission for structured
clone. No Worker/provider was adopted.

## Product-wide outlook and disposition

The Node-label inner loop is `ESTABLISHED` as an exact resumable ordered
accumulator under the observed controls. Relation-label dense feedback remains
the previous `21ms` evidence: within the 50ms diagnostic ceiling but not
uniformly within the preferred 16ms reference. That evidence is unchanged.

The Product-wide quality-complete verification budget remains `NOT
ESTABLISHED`. The remaining gate is not another isolated ordered-loop
extraction; it is an accumulator-based full verification orchestration study
covering route, Relation-label, Node-label, feedback, stale/cancel races, and
end-to-end browser max-slice behavior. Worker/main-thread transport remains a
separate decision.

Quality solver readiness remains `HOLD / NOT ESTABLISHED`, Product
integration/default remains `HOLD`, production provider remains `NOT
ESTABLISHED`, Adaptive Initial Placement Cascade remains `INACTIVE`, Initial
Layout Release blocker remains `OPEN`, and Human Review remains `NOT READY`.
No Actual Product visual smoke check was needed because no visible Product
behavior or candidate changed.

## Reproduction

- production extraction: `e2r-liaison-scape/src/graph-presentation.ts`
- diagnostic prototype: `e2r-liaison-scape/experimental/node-label-accumulator1/prototype.mjs`
- browser harness: `e2r-liaison-scape/experimental/verification-interruptibility1/browser-main.ts`
- fixed browser evidence: `e2r-liaison-scape/experimental/node-label-accumulator1/browser-result-summary.json`
- audit: `e2r-liaison-scape/tools/node-label-accumulator-audit.mjs`
- focused test: `e2r-liaison-scape/tests/node-label-accumulator.test.ts`

No cross-repository knowledge candidate was promoted; this remains
repository-local execution evidence.
