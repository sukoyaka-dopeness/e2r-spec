# LiaisonScape Product Evaluation Seam Implementation1B Adoption1 Result

Date: 2026-09-03 (Asia/Tokyo)

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1B-ADOPTION1`

Status: `ADOPTED`

## Decision

This checkpoint is `CASE 1 / Decision A`:

> SETTLING-KERNEL REFACTOR ADOPTED; NEW PRODUCT SOURCE AUTHORITY FROZEN; EXISTING CHARACTERIZATION-v2 REMAINS THE EXACT BEHAVIORAL BASELINE; IMPLEMENTATION1C MAY BECOME THE NEXT SEPARATELY AUTHORIZED CHECKPOINT.

The exact next prerequisite is `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1C`, `NOT STARTED`.

The preceding Implementation1B result was CASE 1 / Decision A with candidate commit `a5bc4b5f13731a6e29acab9cd941e014d7a603c0`, recorded by e2r-spec commit `4114cece1edb57b928547f1921d50b71a30b865d`.

## Authority and transfer policy

The pre-adoption live Product authority was `0937d7768136ff63e74924480551d370b2935c2e`. The 1B candidate was `a5bc4b5f13731a6e29acab9cd941e014d7a603c0`, whose parent was verified as `0937d776...`. The candidate workspace was `C:\Users\extra\E2R\e2r-liaison-scape-product-evaluation-seam-implementation1b`.

The selected evidence-transfer policy was `E-A`: adopt only `src/auto-layout.ts` and `tests/auto-layout.test.ts` into live Production. The candidate's copied `experimental/product-evaluation-seam/characterization2/` runner and artifacts remain in the disposable 1B clone and were not copied into live. This keeps Product source/test authority separate from the immutable baseline2 evidence authority at commit `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`.

The candidate commit inventory was:

- Product source: `src/auto-layout.ts`
- Product focused test: `tests/auto-layout.test.ts`
- Test-owned evidence: `experimental/product-evaluation-seam/characterization2/` containing the runner, characterization library/test, App orchestration characterization, and v2 artifacts

The inspected Product patch was transferred by exact path. A first patch application encountered only the live checkout's LF/CRLF difference; the same two inspected Product paths were then transferred as exact candidate bytes. No manual cleanup, broad checkout, cherry-pick, or wholesale tree copy was used.

Post-transfer byte equality was exact:

| Path | Candidate SHA-256 | Live SHA-256 |
| --- | --- | --- |
| `src/auto-layout.ts` | `8D1A271D142E3F970A53533A1B7705B33C0CF820470450F3A05B8BDBBDC9C585` | identical |
| `tests/auto-layout.test.ts` | `50253BADC411ECB82F651E48659CC2C1D73C4404F8E0C1C7433190E3AA992EF8` | identical |

## Protected state

Before adoption, live HEAD was exactly `0937d776...`; `src/auto-layout.ts` and `tests/auto-layout.test.ts` were clean. The protected sample pre-state was captured as:

- `public/lighthouse-restoration-demo.en.e2r.json`: `19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1`
- `public/lighthouse-restoration-demo.ja.e2r.json`: `C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA`

After all validation and commit, both hashes remained identical. Neither sample was staged, restored, normalized, or used as authority. Live contained no experimental characterization2 directory.

## Adopted architecture and behavior

The adopted architecture is exactly the validated 1B architecture. `NormalizedLayoutGraph` owns canonical sorted IDs, canonical neighbors, components, and degree data. `buildNormalizedLayoutGraph(...)` owns endpoint validation, self exclusion, unique undirected pair normalization, canonical code-point ordering, component membership/order, and degree derivation. `createAutoLayoutInitialPositions(...)` owns automatic degree-ranked center/ring seed generation. `settleLayoutPositions(...)` owns generic Product settling from explicit positions, repulsion, canonical-neighbor attraction, clamp, and iteration arithmetic without candidate semantics.

`solveAutoLayout(...)` composes normalization, automatic seed generation, shared settling, and P3 sequential composition-owned packing. `settleInitialPlacement(...)` flows through the same composition with `INITIAL_PLACEMENT_SETTLING_ITERATIONS = 3`. Canonical neighbors have one owner and the relaxation implementation remains singular. Product behavior change from `0937d776...` is `NONE`; no rounding or tolerance was introduced.

The exact behavioral authority remains `characterization-v2-post-order-resolution`. Baseline-v2 was not regenerated or rewritten, and baseline-v3 was not created. The adopted refactor has been proven exactly equivalent to the existing v2 authority; baseline2 must not be described as generated from the refactor commit.

## Validation

The exact v2 auto-layout replay after transfer passed 38/38 with unchanged SHA:

`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`

Additional exact results were:

| Check | Result |
| --- | --- |
| Relation reversal, solve | 16/16 |
| Relation reversal, settle | 16/16 |
| Node reversal, solve | 16/16 |
| Node reversal, settle | 16/16 |
| Focused permutations | 4/4 |
| Non-ASCII comparator | PASS |
| No mutation | PASS |
| Fresh-process replay | PASS |
| Pure routing | 9/9 exact to v2 |
| App routing | 16/16 exact to v2 |
| Pure labels | 8/8 exact to v2 |
| App labels | 16/16 exact to v2 |
| Focused Product tests | 10/10 |
| Full Product tests | 287/287 |
| Lint | PASS |
| Build | PASS |
| Diff-check | PASS |

`App.tsx`, `viewport.ts`, routing modules, Relation-label modules, and interaction code were not modified. The accepted interaction boundary remains: Node moves cause automatic routes to recompute from current positions; frozen curves during drag remain not correct behavior. Direct Relation drag, Relation-label drag/follow, manual route state, and application composition remain unchanged. No browser review or visual-feel claim was made.

## Commit and repository state

The live Product adoption commit is `3b5fb4d2b8d6360cc630e7e910182927e1d8459a`, subject `refactor: extract layout settling kernel`, parent `0937d7768136ff63e74924480551d370b2935c2e`. It is the `CURRENT ACCEPTED PRODUCT SOURCE AUTHORITY` for subsequent Product Evaluation Seam work. The live worktree is ahead 7 and unpushed, with only the two protected sample paths dirty.

Historical authority roles remain distinct:

- `fd563340...`: historical pre-order-correction Product authority
- `0937d776...`: post-order-correction, pre-settling-refactor authority
- `3b5fb4d...`: current accepted Product source authority
- `d7271f5...`: W-C order-correction provenance
- `a5bc4b5...`: 1B settling-refactor validation provenance
- `324193e...`: baseline2 exact behavioral evidence authority

The 1B candidate clone remains clean at `a5bc4b5f13731a6e29acab9cd941e014d7a603c0` and was not modified after candidate creation. Baseline2 remains clean and unchanged at `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`. W-C remains detached/clean and unchanged at `d7271f5bc2c56d6ae7d46992140dc9cc165ecfee`. The retained materializer remains detached at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, with its existing `experimental/` preserved; `MATERIALIZER-SOURCE-DRIFT = UNAFFECTED` and no M-C revalidation or materializer update occurred.

Implementation1C is now eligible (`YES`) because the normalized graph and shared settling kernel exist, default behavior is exact v2, Product remains candidate-blind, and materializer drift is unaffected. Implementation1C itself is `NOT STARTED`; no evaluation adapter, explicit-seed injection, candidate V0 execution, candidate materialization, ranking, selection, persistence, normal App entry, or Product candidate integration occurred. PR-3 is `NO`. V0/V1/V2/V3 are `NONE`. No candidate was selected. The sample integer-coordinate follow-up is unchanged.

The 1C handoff is frozen but not implemented: a separately authorized evaluation-only adapter may accept validated materialized positions, map them to the Product normalized graph, verify complete coverage, call `settleLayoutPositions` with authorized three-iteration settings, preserve Product packing/composition semantics, avoid Dataset mutation/persistence/normal App entry, and remain outside Product candidate awareness and selection.

The stale pre-finalization repository-state sentence in the Implementation1B result is not rewritten. This Adoption1 result records the final correction additively: the candidate remained clean at `a5bc4b5...`, live adopted `3b5fb4d...`, samples remained unchanged, baseline2/W-C/materializer remained unchanged, and the 1B evidence surface was not adopted into live.

No new workspace-wide Knowledge Candidate was created. The accepted incremental-extraction decision already covers the reusable responsibility boundary; this adoption adds repository-scoped evidence only. `ai-knowledge` remains unchanged except for its pre-existing dirty browser-diagnostic playbook.

No push, tag, release, deploy, or publication occurred.
