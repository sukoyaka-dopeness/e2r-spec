# LiaisonScape Product Evaluation Seam Implementation1B Result

Date: 2026-09-03 (Asia/Tokyo)

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1B`

Status: `REFACTOR CANDIDATE`

## Outcome

This checkpoint is `CASE 1 / Decision A`:

> SETTLING-KERNEL REFACTOR CANDIDATE VALIDATED; DEFAULT PRODUCT BEHAVIOR EXACTLY PRESERVED; DO NOT START IMPLEMENTATION1C; PROCEED ONLY TO A SEPARATELY AUTHORIZED REFACTOR ADOPTION / AUTHORITY CHECKPOINT.

The exact next prerequisite is `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1B-ADOPTION1`, `NOT STARTED`.

The work was performed in the new disposable clone:

`C:\Users\extra\E2R\e2r-liaison-scape-product-evaluation-seam-implementation1b`

The clone started at Product authority `0937d7768136ff63e74924480551d370b2935c2e`, subject `fix: canonicalize layout neighbor order`, and was clean before editing. Baseline-v2 authority was `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`; historical authority was `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`; W-C provenance was `d7271f5bc2c56d6ae7d46992140dc9cc165ecfee`.

## Boundary and implementation

Before refactoring, `solveAutoLayout` owned graph normalization, relation-pair deduplication, canonical neighbors, component discovery, degree ranking, automatic ring seeds, relaxation, and sequential component packing. `settleInitialPlacement` delegated to that complete solver with three iterations.

The refactor is limited to `src/auto-layout.ts` and separates these Product responsibilities:

- `NormalizedLayoutGraph` contains sorted unique IDs, one canonical neighbor map, sorted connected components, and degree data.
- `buildNormalizedLayoutGraph(input)` owns endpoint validation, self exclusion, unique undirected pair normalization, canonical code-point ordering, component membership/order, and degree derivation.
- Internal `createAutoLayoutInitialPositions(layoutGraph, component, componentLeft, clearance)` owns automatic degree-ranked center/ring seed generation.
- `settleLayoutPositions(layoutGraph, component, initialPositions, options)` is the exported candidate-agnostic settling kernel. It receives the Product normalized graph, one component, explicit initial position values, and generic `nodeClearance`/`iterations` options. It copies input points and owns the existing repulsion, attraction, canonical-neighbor traversal, clamp, and iteration arithmetic.

The kernel is component-scoped because the current source computes the next component's seed center from the prior component's settled `maxX`. `solveAutoLayout` remains the readable Product composition: normalize once, generate each automatic seed, call the shared settling kernel, copy settled points, and advance the existing sequential packing state. `settleInitialPlacement` still calls that same composition with exactly `INITIAL_PLACEMENT_SETTLING_ITERATIONS = 3`.

Packing ownership is the source-supported `P3`: sequential component packing remains in the Product composition immediately after each component's shared settling kernel, rather than being changed into a mathematically equivalent post-pass. A future explicit-seed path can enter at `settleLayoutPositions` while retaining the same composition and packing semantics.

Canonical neighbor construction has one Product owner. Settling does not iterate raw adjacency Sets, introduce a second comparator, normalize Relations again, or independently sort neighbors. There is one relaxation loop in `src/auto-layout.ts`. Product API visibility is limited to generic layout infrastructure; no candidate, V0, TA, FP1, PR-3, or manifest awareness is present.

The seed formulas, temporary values, traversal order, force arithmetic, coordinate update sequencing, clamp evaluation, settled `maxX`, and packing update order were preserved. No rounding, tolerance, or expectation update was used.

## Evidence and validation

The baseline-v2 test-owned characterization surface was copied into the 1B clone without modifying the baseline2 clone. It is included in the candidate commit solely to make the exact replay reproducible from the disposable clone.

Pre-edit v2 replay passed 4/4 characterization tests. After the source refactor, the same suite passed 4/4. The direct fresh-process replay reported 38 cases and the exact auto-layout SHA:

`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`

The post-refactor exact checks were:

| Check | Result |
| --- | --- |
| Auto-layout v2 | 38/38 exact |
| Relation reversal, solve | 16/16 |
| Relation reversal, settle | 16/16 |
| Node reversal, solve | 16/16 |
| Node reversal, settle | 16/16 |
| Focused Relation permutations | 4/4 exact for solve and settle |
| Non-ASCII comparator | PASS |
| No mutation | 16/16 fixture checks; focused graph/position check PASS |
| Fresh-process replay | PASS |
| Pure routing | 9/9 exact to v2 |
| App routing | 16/16 exact to v2 |
| Pure labels | 8/8 exact to v2 |
| App automatic labels | 16/16 exact to v2 |

Focused Product auto-layout tests passed 10/10. Existing self, parallel, duplicate, invalid-endpoint, and Unicode cases remain in that file and cover B-T1, B-T6, and B-T7; added tests cover B-T2 through B-T5. The full Product suite passed 287/287. `npm.cmd run lint` passed, `npm.cmd run build` passed, and `git diff --check` passed.

The characterization runner also recorded in-process and fresh-process replay as `PASS`. No browser-feel or visual acceptance claim was made.

## Scope and repository state

The Product candidate commit is `a5bc4b5f13731a6e29acab9cd941e014d7a603c0`, subject `refactor: extract LiaisonScape layout settling kernel`. The candidate clone is clean after the commit, is one commit ahead of its remote tracking branch, and remains unpushed.

Changed Product paths are only `src/auto-layout.ts` and `tests/auto-layout.test.ts`, plus the planned test-owned `experimental/product-evaluation-seam/characterization2/` replay/evidence surface. `src/App.tsx`, `src/viewport.ts`, `src/dataset.ts`, styles, routing, relation-label, and interaction source were not modified and remain byte-identical to `0937d776...` where applicable. Automatic routes still recompute from current Node positions; frozen-edge-during-drag behavior was not adopted.

Live Production was not modified. Its final read-only state is HEAD `0937d7768136ff63e74924480551d370b2935c2e` with only the pre-existing dirty paths `public/lighthouse-restoration-demo.en.e2r.json` and `public/lighthouse-restoration-demo.ja.e2r.json`. Current accepted Product authority remains `0937d776...` until a separately authorized adoption checkpoint.

Baseline-v2 remains unchanged and clean at `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`. W-C remains unchanged and clean at `d7271f5bc2c56d6ae7d46992140dc9cc165ecfee`. The retained materializer remains unchanged at detached historical `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`; its pre-existing `experimental/` work remains preserved. No materializer source drift was introduced.

Reconciliation1 final-state reconciliation: the historical result contains a pre-finalization sentence that documentation validation/commit was pending. Actual final state was e2r-spec validation PASS, commit `7850b42115423911c560b9cd8e8b89811a1f1090`, subject `docs: reconcile LiaisonScape product seam authority`, clean worktree, no push. This does not alter Reconciliation1 CASE 1 / Decision A.

Implementation1C was not started. PR-3 is `NO`. Candidate materialization was not performed. V0/V1/V2/V3 are `NONE`; no candidate was selected; no Product candidate integration occurred. The sample integer-coordinate follow-up is unchanged. The frozen interaction boundary and manual route/label ownership are unchanged.

No new workspace-wide Knowledge Candidate was created: the applicable responsibility-based incremental-extraction decision was already accepted and this checkpoint produced no broader reusable rule beyond its repository-scoped evidence. `ai-knowledge` was not modified by this checkpoint; its pre-existing dirty browser-diagnostic playbook remains untouched.

No push, tag, release, deploy, or publication occurred.
