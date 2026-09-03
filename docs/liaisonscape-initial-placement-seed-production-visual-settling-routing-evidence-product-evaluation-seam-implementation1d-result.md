# LiaisonScape Product Evaluation Seam Implementation1D Result

Date: 2026-09-03 (Asia/Tokyo)

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1D`

Status: `ROUTING REFACTOR CANDIDATE`

## Outcome

This checkpoint is `CASE 1 / Decision A`:

> AUTOMATIC ROUTING DERIVATION REFACTOR CANDIDATE VALIDATED; CURRENT ROUTING BEHAVIOR PRESERVED EXACTLY; DYNAMIC ROUTE RECOMPUTATION PRESERVED; DO NOT START IMPLEMENTATION1E; PROCEED ONLY TO A SEPARATELY AUTHORIZED IMPLEMENTATION1D ADOPTION1 CHECKPOINT.

The current accepted Product/evaluation-seam authority before this checkpoint
was `681ef0a90d06e4c88f3e77289c165b7a5bfbc647`, subject
`feat: expose explicit-seed settling seam`. The default behavioral baseline
remains `characterization-v2-post-order-resolution`, with baseline2 evidence
authority `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8` and exact auto-layout SHA
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.

The work was performed in the new clean disposable clone:

`C:\Users\extra\E2R\e2r-liaison-scape-product-evaluation-seam-implementation1d`

No live Production files were modified. No candidate execution, materializer
execution, V0/V1/V2/V3 evidence, screenshot, browser review, selection, or
PR-3 claim occurred.

The exact next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1D-ADOPTION1`.

## Clone and pre-edit baseline

The clone was created from committed Git history, not from live working-tree
bytes. Initial HEAD was exactly
`681ef0a90d06e4c88f3e77289c165b7a5bfbc647`; tracked worktree was clean; the
committed sample bytes were the only sample bytes present; and there was no
duplicate `characterization2` or unrelated experimental work. The adopted
1C `explicit-seed-adapter1` is part of the current Product authority.

For reproducibility, the immutable baseline2 `characterization2` surface was
copied temporarily into the disposable 1D clone, used only for replay, and
removed before the candidate commit. It was not modified, transferred to live,
or included in the 1D candidate commit.

The pre-edit clean-clone gate passed:

| Check | Result |
| --- | --- |
| Auto-layout | 38/38 exact |
| Pure routing | 9/9 exact |
| App routing | 16/16 exact |
| Pure labels | 8/8 exact |
| App labels | 16/16 exact |
| Fresh-process replay | PASS |
| Auto-layout SHA | `F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B` |

## Pre-edit App routing orchestration map

The old `src/App.tsx:routedEdges` `useMemo` owned the following complete
derivation:

- Graph input was `graph.nodes` and `graph.edges`; current coordinates came
  from `positions`, falling back to each graph Node's source coordinates.
- `nodeMap` supplied source and target Node lookup. `relationMap` supplied the
  Relation name used to attach `label` to each routed edge.
- App derived provisional Node-label rectangles with `placeNodeLabel`, then
  applied App-owned `manualNodeLabelOffsets.current` values. These rectangles
  were route obstacles.
- App-owned `edgeCurveOffsets` and `selfLoopOverrides` were passed as generic
  route inputs; their ownership remained React state/ref state.
- Fixed edges were those with a curve offset, self-Relations, or coincident
  endpoint positions. Automatic ordinary edges were the complement.
- Both groups were sorted by the existing
  `sourceId.localeCompare`, `targetId.localeCompare`, `id.localeCompare`
  comparator. This routing comparator was preserved and not replaced by the
  auto-layout Unicode comparator.
- Overlapping non-self endpoint pairs used an index keyed by
  `${source.x}\u0000${source.y}`. The index incremented in processing order.
- Node obstacles were all graph Nodes except the current edge endpoints, with
  current `positions` applied where present.
- `occupiedPaths` accumulated each selected route's samples in processing
  order.
- The primary `routeGraphEdge` call preserved source/target, parallel index and
  count, Node obstacles, occupied paths, self-loop flag, overlap index, curve
  offset, self-loop override, provisional Node-label rectangles, and canonical
  physical-side sign.
- For eligible parallel non-overlap edges, App also called
  `routeGraphEdge` once without Node/label obstacles but with occupied paths,
  and once without either obstacles or occupied paths.
- App called `compareRouteGeometry` for obstacle and occupied-path diagnostics.
- `parallelSolverEligible` remained true only for parallel, non-self,
  non-overlap edges whose two exact diagnostic comparisons were equivalent.
- Routes were stored by Relation ID and reconstructed in original
  `graph.edges` order. Relation label attachment remained outside route
  geometry derivation.
- The old `useMemo` dependencies were
  `[edgeCurveOffsets, graph, nodeMap, positions, relationMap, selfLoopOverrides]`.

The old recomputation inputs were therefore graph changes, current Node
positions, edge curve offsets, self-loop overrides, provisional Node-label
geometry including current manual offsets, and Relation label attachment.

## Extracted Product routing seam

The selected module is `src/graph-presentation.ts`. Its pure Product function
is:

`deriveAutomaticRoutes(input: AutomaticRoutingInput): DerivedAutomaticRoute[]`

The input contract is a plain snapshot containing:

- graph Nodes and graph Edges with Relation labels attached by App;
- current Node positions;
- current generic curve-offset values;
- current generic self-loop override values; and
- provisional Node-label rectangles supplied by App.

The output contract contains every graph edge in original `graph.edges` order,
with the existing edge fields plus `path`, `samples`, `labelPoint`,
`controlPoint`, `label`, and `parallelSolverEligible`.

The module owns route derivation, fixed/automatic partitioning, existing
priority ordering, overlap indexing, obstacle collection, occupied-path
accumulation, all three route primitive call forms, diagnostics, eligibility,
and output reconstruction. `routeGraphEdge` and `compareRouteGeometry` remain
single-owned pure primitives in `src/viewport.ts`; their algorithms and
argument ordering were not changed.

App now only derives provisional Node-label geometry and attaches Relation
labels, then calls `deriveAutomaticRoutes` with current snapshots. The
`useMemo` dependency list remains
`[edgeCurveOffsets, graph, nodeMap, positions, relationMap, selfLoopOverrides]`.
The seam has no module-level cache, does not capture initial positions, and
recomputes from every invocation's current positions and overrides.

State ownership and geometry ownership remain separate. App continues to own
React state, refs, `edgeCurveOffsets`, `selfLoopOverrides`, manual Node-label
offsets, manual Relation-label anchors, drag state, selection, persistence,
Dataset state, and interaction. The Product seam receives immutable/plain
geometry snapshots only. Provisional Node-label rectangles remain App-derived
input; Node-label placement, manual offset application, Relation-label
placement, label collision resolution, and manual label reconstruction are not
extracted. All label work is explicitly deferred to Implementation1E.

The dependency direction is:

```text
App -> graph-presentation routing seam -> viewport pure routing primitives
```

`graph-presentation.ts` imports only Product graph types and pure viewport
geometry. It imports no React, App, DatasetService, persistence, drag refs,
manual state containers, explicit-seed adapter, materializer, candidate,
manifest, or PR-3 module. Candidate awareness is `NO`.

## Dynamic and exact behavior proof

Focused pure routing tests passed 10/10. They establish deterministic replay,
Node-position recomputation, curve-offset recomputation, self-loop override
recomputation, fixed-first priority independent of graph edge order,
occupied-path sequencing and parallel eligibility, supplied provisional
Node-label obstacle consumption, overlap indexing, no mutation, and original
graph-edge output order.

The anti-frozen-route proofs are explicit: the same graph with moved Node
positions produces distinct route paths and samples; curve offset values
`0` and `54` produce distinct paths and control points; and distinct
self-loop orientation/radius overrides produce distinct paths and control
points. The App call path passes the current `positions`, offsets, overrides,
and provisional label rectangles on every memo recomputation. No stale internal
cache exists. `FROZEN-CURVE-WHILE-DRAGGING` remains `NOT CORRECT`.

The extracted code preserves fixed-edge classification, automatic-edge
classification, the existing localeCompare routing comparator, fixed-first
processing, overlap index order, occupiedPaths append order, every
`routeGraphEdge` argument, both route diagnostics, `parallelSolverEligible`,
and final graph-edge order. No route curvature, obstacle clearance, candidate
search, parallel behavior, self-loop policy, or drag response algorithm was
changed.

## Validation

Post-switch characterization and fresh replay remained exact:

| Check | Result |
| --- | --- |
| Pure routing | 9/9 exact to v2 |
| App routing | 16/16 exact to v2 |
| Pure labels | 8/8 exact to v2 |
| App labels | 16/16 exact to v2 |
| Auto-layout | 38/38 exact |
| Auto-layout SHA | `F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B` |
| Relation reversal solve/settle | 16/16 each |
| Node reversal solve/settle | 16/16 each |
| Focused permutations | PASS |
| No mutation | PASS |
| Fresh process | PASS |
| Focused routing seam tests | 10/10 |
| Full Product tests | 297/297 PASS |
| Lint | PASS |
| Build | PASS |
| `git diff --check` | PASS |

The 297 Product tests comprise the prior 287 tests plus the 10 focused pure
routing-seam tests. The characterization2 artifacts and baseline-v2 were not
modified or rebaselined.

The App diff-hunk audit classified all changed hunks as
`ROUTING-ORCHESTRATION EXTRACTION`; unrelated hunks count is zero. The
interaction source semantics, Dataset/persistence behavior, viewport
algorithm, direct Relation drag, Node drag, self-loop interaction, manual
route state, and label state remain unchanged. Browser “feels good” acceptance
was not claimed.

## Candidate commit and repository state

The 1D candidate commit is:

- Hash: `63753950e4f1b004ba22d7bdc39e4732b218d53f`
- Subject: `refactor: extract LiaisonScape automatic routing derivation`
- Parent: `681ef0a90d06e4c88f3e77289c165b7a5bfbc647`

Candidate Product source paths are exactly:

- `src/graph-presentation.ts`
- `src/App.tsx`

The focused test path is exactly:

- `tests/graph-presentation.test.ts`

No evidence-only path remains in the candidate commit. The candidate clone is
clean and local/unpushed. Live Production remains unchanged at
`681ef0a...` with only the pre-existing protected EN/JA sample files dirty.

Protected sample hashes remained unchanged:

- EN: `19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1`
- JA: `C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA`

Baseline2 remains clean at `324193e...`; the 1C provenance clone remains
clean at `bb4f603...`; 1B remains clean at `a5bc4b5...`; W-C remains
clean/detached at `d7271f5...`; and the retained materializer remains detached
at `fd563340...` with its pre-existing untracked `experimental/` preserved.
The materializer was not executed or modified. `ai-knowledge` retains its
pre-existing dirty browser-diagnostic playbook, and
`sessions/E2R-Session-0052.md` was not modified.

Implementation1E is `NOT STARTED`. It is not authorized here, and no Relation
label derivation, Node-label derivation, manual label reconstruction, or label
App switch was performed. PR-3 remains `NO`; V0/V1/V2/V3 are `NONE`; no
candidate was selected; no Product candidate integration occurred; and the
sample integer-coordinate follow-up is unchanged.

No new workspace-wide Knowledge Candidate was created. The accepted
responsibility-based incremental-extraction decision remains sufficient for
this repository-scoped routing extraction evidence.

No push, tag, release, deploy, or publication occurred.
