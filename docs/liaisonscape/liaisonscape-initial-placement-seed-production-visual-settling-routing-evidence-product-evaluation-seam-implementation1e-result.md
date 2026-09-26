# LiaisonScape Product Evaluation Seam Implementation1E Result

Date: 2026-09-03 (Asia/Tokyo)

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1E`

Status: `LABEL REFACTOR CANDIDATE`

## Outcome

This checkpoint is `CASE 1 / Decision A`:

> AUTOMATIC LABEL DERIVATION REFACTOR CANDIDATE VALIDATED; CURRENT LABEL BEHAVIOR PRESERVED EXACTLY; DYNAMIC NODE/RELATION LABEL FOLLOW SEMANTICS PRESERVED; DO NOT START IMPLEMENTATION1F; PROCEED ONLY TO A SEPARATELY AUTHORIZED IMPLEMENTATION1E ADOPTION1 CHECKPOINT.

The current accepted Product/evaluation/presentation authority before this
checkpoint was `e2ede7f27fca86af1b2bb28f5a954d9bfba8cbfc`, subject
`refactor: extract automatic routing derivation`. The default behavioral
baseline remains `characterization-v2-post-order-resolution`, with immutable
baseline2 authority `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8` and exact
auto-layout SHA
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.

Only automatic Node-label and Relation-label derivation orchestration was
extracted in a new clean disposable clone. Live Production was not modified.
No rendering, SVG, CSS, browser, candidate, materializer, V0-V3, or
Implementation1F work occurred.

## Boundary and authorities

The allowed scope was authority verification, current App orchestration audit,
one pure Product presentation extraction, focused pure tests, a minimal App
call-site switch, exact replay, Product validation, one local candidate commit,
and e2r-spec documentation.

The routing seam `deriveAutomaticRoutes(...)` remained the adopted authority.
`routeGraphEdge(...)`, `compareRouteGeometry(...)`, routing order, occupied
paths, and route output were not changed.

The source authority chain remains separate: `e2ede7f...` is the current
Product/evaluation/presentation authority, `63753950...` is 1D validation
provenance, `324193e...` is baseline2 evidence, and the earlier 1C/1B/W-C and
historical authorities retain their prior roles. No authority was collapsed.

## 1E clone and pre-edit baseline

New clean disposable clone:

`C:\Users\extra\E2R\e2r-liaison-scape-product-evaluation-seam-implementation1e`

The clone was created from committed Git history, not from live working-tree
bytes. Initial HEAD was exactly
`e2ede7f27fca86af1b2bb28f5a954d9bfba8cbfc`; tracked worktree state was clean;
committed sample bytes only were present; no characterization2 surface was
initially present; and no unrelated experimental work was introduced.

Before editing, immutable baseline2 characterization tooling was copied only
temporarily into the clone, used for replay, and removed before the candidate
commit. Baseline2 was not modified and no duplicate evidence surface remains
in the candidate.

The pre-edit baseline passed exactly:

| Check | Result |
| --- | --- |
| auto-layout | 38/38 exact |
| pure routing | 9/9 exact |
| App routing | 16/16 exact |
| pure labels | 8/8 exact |
| App labels | 16/16 exact |
| fresh-process replay | PASS |
| auto-layout SHA | `F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B` |

## Pre-edit Node-label orchestration map

The old `src/App.tsx:nodeLabelPlacements` `useMemo` was mapped completely:

- Graph/node input: `graph.nodes` supplies Node IDs, labels, descriptions, and
  source coordinates.
- Current positions: `positions[node.id] ?? node` is used for each Node and
  for every other-node obstacle.
- Routed geometry: `routedEdges.map(({ samples }) => samples)` supplies all
  non-empty edge paths as Node-label route-halo/path obstacles.
- Primitive call: `placeNodeLabel(position, node.label, node.description,
  occupiedLabels, otherNodes, edgePaths, previousPlacement)`.
- Candidate rectangle generation, scoring, direction enumeration, dimensions,
  and connector-relevant direction fields remain inside `placeNodeLabel`.
- Node processing order is the existing `graph.nodes` array order.
- `occupiedLabels` starts as `Array.from(edgeLabelPlacements.values())`, then
  appends each final Node-label rectangle in Node order.
- Other-node obstacles are `graph.nodes` excluding the current Node, with
  current positions applied.
- Relation-label rectangles are therefore considered before Node labels, in
  the existing Relation-label Map insertion order.
- `manualNodeLabelOffsets.current` is read after automatic placement. A manual
  offset changes only the resulting x/y, and that final rectangle is appended.
- Automatic placement is Product geometry; the manual offset Map, React ref,
  drag lifecycle, reset command, persistence, and ownership remain App-owned.
- The result is a Map keyed by Node ID, consumed by SVG render for label
  position, dimensions, direction, and connector geometry.
- Provisional Node-label geometry is a distinct earlier stage: the routing
  `useMemo` still derives it with the prior empty-label/empty-path call and
  passes it to `deriveAutomaticRoutes`. It was not moved by this checkpoint.
- Final Node-label geometry differs from provisional geometry because it uses
  current routed paths, Relation-label rectangles, previous placement, and
  manual Node-label offsets.
- The old dependency list is preserved exactly:
  `[edgeLabelPlacements, graph.nodes, positions, routedEdges, manualLabelRevision]`.
- During an active Node drag the current Node omits previous-placement input,
  exactly as before.

## Pre-edit Relation-label orchestration map

The old `src/App.tsx:edgeLabelPlacements` `useMemo` was mapped completely:

- Routed edge input: `routedEdges`, in the current route output order.
- Route geometry: `edge.samples` is passed to `placeEdgeLabel`; other edge
  sample paths are supplied as context. `edge.labelPoint` is only a downstream
  render fallback and is not used by the automatic placement call.
- Relation text: `edge.label`, attached by the routing seam from the Relation
  map.
- Primitive call: `placeEdgeLabel(edge.samples, edge.label, occupiedLabels,
  nodes, otherEdgePaths, previousPlacement)`.
- Relation processing order is the existing `routedEdges` array order.
- `occupiedLabels` starts empty and appends each resolved Relation-label
  rectangle in that same order.
- Node obstacles are `graph.nodes.map(node => positions[node.id] ?? node)`.
- Earlier Relation-label rectangles are collision obstacles through the same
  accumulating `occupiedLabels` array.
- A Relation connected to the actively dragged Node omits previous placement;
  otherwise `previousEdgeLabelPlacements.current.get(edge.id)` is supplied.
- A manual Relation-label anchor is applied after automatic placement through
  `reconstructManualRelationLabelTarget(edge.samples, manualAnchor)`, while
  retaining the automatic rectangle dimensions/directions.
- Manual anchor refs, manual label revision, drag state, reset semantics,
  visual-state reconciliation, and ownership remain App-owned.
- The result Map is consumed by `displayedEdgeLabelPlacements`, which keeps the
  existing visual-state ref and then by SVG render.
- No Relation-label connector geometry is part of this loop; Node connector
  geometry remains render-side and unchanged.
- The old dependency list is preserved exactly:
  `[graph.nodes, positions, routedEdges, manualLabelRevision]`.

## Selected Product seam and contracts

The existing `src/graph-presentation.ts` was extended with two layered pure
functions rather than adding another tiny module:

- `deriveAutomaticRelationLabels(input: AutomaticRelationLabelInput)`;
- `deriveAutomaticNodeLabels(input: AutomaticNodeLabelInput)`.

The Relation-label input is a plain snapshot containing `routedEdges`, current
Node points, previous placement rectangles, plain manual anchor values, and
the currently dragged Node ID. It returns `Map<string, LabelRect>` in the
existing routed-edge processing order.

The Node-label input is a plain snapshot containing graph Nodes, current
positions, routed edges, Relation-label rectangles, previous Node-label
placements, plain manual offset values, and the actively dragged Node ID. It
returns `Map<string, LabelRect>` in the existing graph Node order.

The functions own only automatic derivation orchestration: primitive calls,
obstacle inputs, occupied rectangle accumulation, existing order, and plain
override application where the old semantic order requires it. They do not
own React state, refs, persistence, Dataset state, drag lifecycle, reset
commands, selection, or manual ownership decisions.

`placeNodeLabel` and `placeEdgeLabel` remain single-owned in `src/viewport.ts`.
Their algorithms, arguments, constants, candidate ordering, scoring, recovery,
and collision behavior were not changed. `src/viewport.ts` is unchanged.

The dependency direction is:

```text
App -> graph-presentation automatic label derivation -> viewport pure label/route primitives
```

The Product module imports only Product graph/types and pure presentation
helpers. It imports no React, DatasetService, persistence, localStorage, drag
refs/state objects, candidates, materializer, manifest, or PR-3 harness.
Candidate awareness is `NO`.

## Ownership and dynamic behavior

App remains the owner of React state, refs, `manualNodeLabelOffsets`, manual
Relation-label anchors, selection, drag lifecycle, label drag state, reset
commands, persistence, Dataset state, coordinate/manual-placement save
semantics, and SVG rendering/events.

Manual Node-label offsets and manual Relation-label anchors are copied into
plain Maps before calling the pure functions. The functions never mutate those
Maps, persist them, reset them, or decide their ownership. This preserves the
existing automatic-before-manual or automatic-then-manual order exactly.

Dynamic proofs passed:

| Change | Result |
| --- | --- |
| Node position P1 -> P2 | Node-label geometry changed |
| route R1 -> R2 | automatic Relation-label geometry changed |
| curve offset change | route and Relation-label geometry changed |
| self-loop override change | route and Relation-label geometry changed |
| manual Node offset input | offset relationship preserved; input unchanged |
| manual Relation anchor input | anchor input unchanged |

`RELATION-LABEL-FOLLOW-MUST-NOT-BE-FROZEN` is satisfied. No module-level
cache, initial-geometry capture, stale route, or stale label geometry exists.
`FROZEN-CURVE-WHILE-DRAGGING` remains `NOT CORRECT`.

## Exact-equivalence and validation

Focused presentation tests passed `22/22` (10 existing routing-seam tests plus
12 label-seam tests). The new tests cover deterministic Node and Relation
labels, Node movement, route/curve/self-loop follow, occupied-label order,
Node-vs-Relation obstacle order, manual input-only semantics, non-mutation,
and output order.

The baseline2 characterization suite passed `4/4`; fresh auto-layout replay
passed `38/38` with the exact v2 SHA shown above. Exact downstream results
remained:

| Check | Result |
| --- | --- |
| pure routing | 9/9 exact |
| App routing | 16/16 exact |
| pure labels | 8/8 exact |
| App labels | 16/16 exact |
| auto-layout | 38/38 exact |
| Relation reversal solve / settle | 16/16 / 16/16 |
| Node reversal solve / settle | 16/16 / 16/16 |
| fresh-process replay | PASS |
| no mutation | PASS |
| existing manual label regression tests | PASS within full suite |

The full Product test count is `309/309 PASS`: the pre-1E 297 tests plus 12
focused label-seam tests. `npm.cmd run lint`, `npm.cmd run build`, and
`git diff --check` passed. Build transformed 62 modules. Existing non-fatal
WebSocket port-in-use warnings did not affect test results.

## Diff and prohibited-work audit

Every `App.tsx` hunk is classified as one of:

- `IMPORT / PURE CALL-SITE CHANGE`;
- `AUTOMATIC-RELATION-LABEL-ORCHESTRATION EXTRACTION`;
- `AUTOMATIC-NODE-LABEL-ORCHESTRATION EXTRACTION`.

Unrelated hunks: `0`. Manual label drag/anchor/reset source is unchanged;
Node drag, Relation drag, routing, Dataset, persistence, selection, viewport,
CSS, and SVG markup are unchanged. `graph-presentation` routing semantics are
unchanged; only pure label imports/types/functions were added.

Candidate execution: `NO`. Materializer execution: `NO`. V0/V1/V2/V3:
`NONE`. Browser “feels good” claimed: `NO`. Screenshot/browser review:
`NO`. Baseline-v2 was not modified and baseline-v3 was not created. PR-3 is
`NO`. Candidate selection and Product candidate integration are `NO`.

## Candidate commit and final status

The bounded 1E candidate commit is:

- Hash: `dd8ea0c917eae78399411b10ad3beeec705f706d`;
- Subject: `refactor: extract LiaisonScape automatic label derivation`;
- Parent: `e2ede7f27fca86af1b2bb28f5a954d9bfba8cbfc`;
- Status: `IMPLEMENTATION1E CANDIDATE`, local and unpushed.

The candidate contains exactly:

- `src/graph-presentation.ts`;
- `src/App.tsx`;
- `tests/graph-presentation.test.ts`.

Live Production remains unchanged at
`e2ede7f27fca86af1b2bb28f5a954d9bfba8`, with only its protected EN/JA sample
files dirty. The protected sample hashes remain:

- EN: `19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1`;
- JA: `C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA`.

Implementation1F is `NOT STARTED`. No render wrapper, SVG extraction, CSS
change, browser harness, screenshot, or real-browser review was started.
The exact next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1E-ADOPTION1`.

Repository preservation checks:

- 1E clone: clean at `dd8ea0c...`;
- live Product: unchanged at `e2ede7f...`, protected samples only dirty;
- baseline2: clean and unchanged at `324193e...`;
- 1D provenance: clean and unchanged at `63753950...`;
- 1C: clean and unchanged at `bb4f603...`;
- 1B: clean and unchanged at `a5bc4b5...`;
- W-C: clean/detached and unchanged at `d7271f5...`;
- retained materializer: detached at `fd563340...`, existing `experimental/`
  preserved;
- ai-knowledge: pre-existing dirty browser diagnostic playbook preserved;
- `sessions/E2R-Session-0052.md`: unchanged;
- sample integer-coordinate follow-up: unchanged.

No new Knowledge Candidate was created; this remains repository-scoped
checkpoint evidence under the accepted responsibility-based incremental
extraction decision. No push, tag, release, deploy, or publication occurred.
