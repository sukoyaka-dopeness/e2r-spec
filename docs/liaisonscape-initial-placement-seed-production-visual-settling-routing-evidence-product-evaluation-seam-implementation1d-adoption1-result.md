# LiaisonScape Product Evaluation Seam Implementation1D Adoption1 Result

Date: 2026-09-03 (Asia/Tokyo)

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1D-ADOPTION1`

Status: `ADOPTED`

## Outcome

This checkpoint is `CASE 1 / Decision A`:

> AUTOMATIC ROUTING DERIVATION SEAM ADOPTED; DYNAMIC ROUTE RECOMPUTATION PRESERVED; DEFAULT PRODUCT v2 BEHAVIOR REMAINS EXACT; NEW PRODUCT/EVALUATION/PRESENTATION-SEAM AUTHORITY FROZEN; PROCEED ONLY TO THE NEXT SEPARATELY AUTHORIZED CHECKPOINT.

Implementation1D was previously validated as a behavior-preserving routing
refactor candidate in commit `63753950e4f1b004ba22d7bdc39e4732b218d53f`,
whose parent was the accepted authority
`681ef0a90d06e4c88f3e77289c165b7a5bfbc647`. This checkpoint adopted only that
three-file candidate into live Production. No label extraction or routing
algorithm change was performed.

The exact default behavioral baseline remains
`characterization-v2-post-order-resolution`. Baseline-v2 remains unchanged at
`324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`, with exact auto-layout SHA
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.

## Boundary and authorities

Allowed work was limited to live authority verification, exact candidate
inspection and transfer, byte equality, routing/downstream replay, dynamic
recomputation proof, Product validation, one local live adoption commit, and
e2r-spec documentation.

The authority chain remains distinct:

- `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`: historical pre-order-correction Product authority;
- `0937d7768136ff63e74924480551d370b2935c2e`: post-order-correction pre-settling-refactor authority;
- `3b5fb4d2b8d6360cc630e7e910182927e1d8459a`: post-settling-refactor pre-explicit-seed authority;
- `681ef0a90d06e4c88f3e77289c165b7a5bfbc647`: pre-routing-extraction explicit-seed authority;
- `63753950e4f1b004ba22d7bdc39e4732b218d53f`: Implementation1D validation provenance;
- `bb4f603c5e47a9bf890e834f7abd86acbbbb5cef`: Implementation1C validation provenance;
- `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`: baseline2 default-behavior evidence authority;
- `e2ede7f27fca86af1b2bb28f5a954d9bfba8cbfc`: new current Product/evaluation/presentation-seam authority.

## Pre-adoption state and transfer

Live pre-adoption HEAD was exactly
`681ef0a90d06e4c88f3e77289c165b7a5bfbc647`. The only pre-existing live dirty
files were the protected samples:

- `public/lighthouse-restoration-demo.en.e2r.json`:
  `19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1`;
- `public/lighthouse-restoration-demo.ja.e2r.json`:
  `C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA`.

The 1D candidate parent and exact path inventory were verified. Transfer policy
`R-A` was used with an inspectable exact-path transfer. Adopted paths were
exactly `src/graph-presentation.ts`, `src/App.tsx`, and
`tests/graph-presentation.test.ts`. No additional Product source path was
transferred; no evidence-only path remains in the adoption commit.

Candidate/live byte equality was exact:

| Path | Candidate SHA-256 | Live SHA-256 | Match |
| --- | --- | --- | --- |
| `src/App.tsx` | `C72CADAAB24067E569998A9D90B3C80D8EAAFEAB971B169A34CB9E9DD5F606B3` | same | YES |
| `src/graph-presentation.ts` | `3F482FC965899003F4356D21F01D02A0E8CF6D6958A3DAE485DDE2C8658524E8` | same | YES |
| `tests/graph-presentation.test.ts` | `598349938A068B25A8D0BFCC76E0C0689C990A9403688AD418A69AD69536D7FB` | same | YES |

## Adopted seam and ownership

Live now adopts the pure Product function
`deriveAutomaticRoutes(input: AutomaticRoutingInput): DerivedAutomaticRoute[]`.
Its plain snapshot input contains graph Nodes/Edges, current positions,
`edgeCurveOffsets`, `selfLoopOverrides`, and provisional Node-label
rectangles. Its output preserves original edge fields and adds path, samples,
labelPoint, controlPoint, label, and `parallelSolverEligible`, reconstructed
in original `graph.edges` order.

The seam owns fixed/automatic partitioning, the existing
`sourceId.localeCompare` / `targetId.localeCompare` / `id.localeCompare`
priority, fixed-first processing, overlap indexing, obstacle collection,
`occupiedPaths` accumulation, primary and diagnostic `routeGraphEdge` calls,
`compareRouteGeometry` diagnostics, eligibility, and output reconstruction.
The routing algorithm, comparator, curvature policy, self-loop policy,
parallel policy, and route primitive were not changed.

`src/viewport.ts` and `src/auto-layout.ts` are unchanged against the
pre-adoption authority. `routeGraphEdge(...)`, `compareRouteGeometry(...)`,
clearance, self-loop, parallel, and drag-related geometry are unchanged.

App remains the owner of React state, refs, current positions,
`edgeCurveOffsets`, `selfLoopOverrides`, manual Node-label offsets, manual
Relation-label state, drag, selection, Dataset, persistence, coordinate save,
context menu, and interaction lifecycle. The seam receives snapshots only and
has no mutable Product-side route state or internal cache.

App continues to derive provisional Node-label geometry with the exact prior
`placeNodeLabel` and `manualNodeLabelOffsets.current` logic and passes those
rectangles as geometry. Node-label placement, manual offset orchestration,
Relation-label placement, and collision resolution remain outside the seam.
Label derivation was not extracted.

The dependency direction is `App -> graph-presentation -> viewport` pure
routing primitives. `graph-presentation.ts` imports no React, DatasetService,
persistence, localStorage, drag refs, explicit-seed adapter, materializer,
candidate, manifest, or PR-3 module. Candidate awareness is `NO`.

The App routing `useMemo` dependencies remain exactly
`[edgeCurveOffsets, graph, nodeMap, positions, relationMap, selfLoopOverrides]`.

## Dynamic and exact-equivalence evidence

The focused seam suite passed `10/10`, covering deterministic replay,
Node-position, curve-offset, self-loop-override, fixed-first, occupied-path,
parallel eligibility, provisional label geometry, overlap indexing,
non-mutation, and original edge order.

Direct live-source anti-frozen proof passed for all required changes:

| Input change | Result |
| --- | --- |
| Node position P1 -> P2 | route path and samples changed |
| curve offset O1 -> O2 | route path and controlPoint changed |
| self-loop override S1 -> S2 | route path and controlPoint changed |
| provisional label geometry G1 -> G2 | route path changed |

`FROZEN-CURVE-WHILE-DRAGGING` remains `NOT CORRECT`.

| Check | Result |
| --- | --- |
| pure routing | 9/9 exact |
| App routing | 16/16 exact |
| pure labels | 8/8 exact |
| App labels | 16/16 exact |
| auto-layout | 38/38 exact |
| exact v2 SHA | `F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B` |
| Relation reversal solve / settle | 16/16 / 16/16 |
| Node reversal solve / settle | 16/16 / 16/16 |
| fresh-process replay | PASS |
| no mutation | PASS |

No expected output was updated, rounded, tolerated, or regenerated as a new
baseline. Baseline-v2 was not modified and baseline-v3 was not created.

## Interaction, validation, and commit

The live App diff against `681ef0a...` contains only
`ROUTING-ORCHESTRATION EXTRACTION` hunks; unrelated hunks are `0`. Node drag,
direct Relation drag, manual route state, self-loop interaction, label drag,
selection, persistence, Dataset behavior, and viewport behavior were not
changed. Browser “feels good” was not claimed; no screenshot or browser review
occurred.

Candidate execution: `NO`. Materializer execution: `NO`. V0/V1/V2/V3:
`NONE`. Candidate selected: `NO`. Product candidate integration: `NO`.
Sample integer-coordinate follow-up: unchanged. PR-3: `NO`.

The live adoption commit is:

- Hash: `e2ede7f27fca86af1b2bb28f5a954d9bfba8cbfc`;
- Subject: `refactor: extract automatic routing derivation`;
- Parent: `681ef0a90d06e4c88f3e77289c165b7a5bfbc647`.

It is the `CURRENT ACCEPTED PRODUCT / EVALUATION / PRESENTATION-SEAM SOURCE
AUTHORITY`. Exactly the three adopted paths were staged; protected samples
were not staged.

Live validation passed after transfer and before commit:

- focused routing seam tests: `10/10 PASS`;
- baseline characterization: `4/4 PASS`;
- direct fresh replay: `38/38`, exact SHA above;
- `npm.cmd test`: `297/297 PASS`;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS;
- `git diff --check`: PASS.

Protected post-state hashes are exactly unchanged:

- EN: `19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1`;
- JA: `C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA`.

## Follow-up and final repository state

Implementation1E is technically eligible: `YES`, because routing derivation is
Product-owned and pure, App remains the label/state owner, exact v2 and
downstream behavior remain intact, and dynamic recomputation is preserved.
Implementation1E itself is `NOT STARTED`; no label extraction was started.
The exact next prerequisite is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1E`

Final states:

- live Product: HEAD `e2ede7f...`; only protected EN/JA samples dirty;
- 1D candidate: clean and unchanged at `63753950...`;
- baseline2: clean and unchanged at `324193e...`;
- 1C: clean and unchanged at `bb4f603...`;
- 1B: clean and unchanged at `a5bc4b5...`;
- W-C: clean/detached and unchanged at `d7271f5...`;
- retained materializer: detached at `fd563340...`; existing `experimental/` preserved;
- `ai-knowledge`: pre-existing dirty browser diagnostic playbook preserved;
- `sessions/E2R-Session-0052.md`: unchanged.

No new Knowledge Candidate was created. No push, tag, release, deploy, or
publication occurred. Stop after this checkpoint; do not start
Implementation1E automatically.
