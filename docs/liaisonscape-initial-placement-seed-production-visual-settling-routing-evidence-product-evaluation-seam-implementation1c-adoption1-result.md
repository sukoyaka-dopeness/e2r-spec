# LiaisonScape Product Evaluation Seam Implementation1C Adoption1 Result

Date: 2026-09-03 (Asia/Tokyo)

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1C-ADOPTION1`

Status: `ADOPTED`

## Outcome and boundary

This checkpoint is `CASE 1 / Decision A`:

> EXPLICIT-SEED PRODUCT/EVALUATION SEAM ADOPTED; DEFAULT PRODUCT v2 BEHAVIOR PRESERVED EXACTLY; VSR-SEED-ADAPTER-v1 FROZEN; NO CANDIDATE EXECUTION OCCURRED; PROCEED ONLY TO THE NEXT SEPARATELY AUTHORIZED PRODUCT-EVALUATION-SEAM PREREQUISITE.

The prior Implementation1C result was CASE 1 / Decision A, `REFACTOR
CANDIDATE`, recorded by e2r-spec commit
`f69504a219c089360bcee1bbc1c84567d288a64e`. This Adoption1 checkpoint was
limited to authority verification, exact T-A transfer, adapter and default
behavior validation, and local adoption commits. No TA0/TA2/TA3, FP1,
materializer, candidate, V0-V3, screenshot, browser, routing, label, App,
persistence, Dataset, baseline, or publication work was performed.

The exact next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1D`.
Implementation1D was not started.

## Authorities and protected pre-state

The live Production pre-adoption HEAD was exactly
`3b5fb4d2b8d6360cc630e7e910182927e1d8459a`, subject
`refactor: extract layout settling kernel`. `src/auto-layout.ts` had no
unrelated local modification. The existing live dirty state consisted only
of the protected sample files:

- `public/lighthouse-restoration-demo.en.e2r.json` — SHA-256
  `19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1`
- `public/lighthouse-restoration-demo.ja.e2r.json` — SHA-256
  `C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA`

The 1C candidate was verified at
`bb4f603c5e47a9bf890e834f7abd86acbbbb5cef`, subject
`feat: expose LiaisonScape explicit-seed settling seam`, with exact parent
`3b5fb4d2b8d6360cc630e7e910182927e1d8459a`. The candidate clone was clean.

The complete candidate path inventory was:

- `src/auto-layout.ts`
- `experimental/product-evaluation-seam/explicit-seed-adapter1/adapter.ts`
- `experimental/product-evaluation-seam/explicit-seed-adapter1/adapter.test.ts`
- `experimental/product-evaluation-seam/characterization2/app-orchestration-characterization.ts`
- `experimental/product-evaluation-seam/characterization2/artifacts/artifact-index.json`
- `experimental/product-evaluation-seam/characterization2/artifacts/auto-layout-baseline.json`
- `experimental/product-evaluation-seam/characterization2/artifacts/characterization-manifest.json`
- `experimental/product-evaluation-seam/characterization2/artifacts/label-baseline.json`
- `experimental/product-evaluation-seam/characterization2/artifacts/routing-baseline.json`
- `experimental/product-evaluation-seam/characterization2/characterization-lib.ts`
- `experimental/product-evaluation-seam/characterization2/characterization.test.ts`
- `experimental/product-evaluation-seam/characterization2/generate-characterization.ts`
- `experimental/product-evaluation-seam/characterization2/replay-auto-layout.ts`

## Transfer policy and provenance

Policy `T-A` was selected. The adopted paths were only
`src/auto-layout.ts` and every file under
`experimental/product-evaluation-seam/explicit-seed-adapter1/`. The copied
`characterization2` evidence was not adopted into live Production because
authoritative baseline2 evidence already exists at
`324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`.

Transfer used exact inspectable paths from the clean 1C candidate clone. No
cherry-pick, broad checkout, whole-worktree copy, manual cleanup, or
opportunistic refactor was used. The selected path byte checks were:

| Path | Candidate SHA-256 | Live SHA-256 | Match |
| --- | --- | --- | --- |
| `src/auto-layout.ts` | `2F53394607E169D377723215A92171F5B4A82212D8F6352A7C96EFA73FC9C6D8` | same | YES |
| `experimental/product-evaluation-seam/explicit-seed-adapter1/adapter.ts` | `A9C200C4BF5D038EA27D9192EE6AC72AF16A514412456DFE8EAF5462B0AD026B` | same | YES |
| `experimental/product-evaluation-seam/explicit-seed-adapter1/adapter.test.ts` | `DE171F771D51167B27D423B247974DF2264143A858616C8CF9A42CE810943B74` | same | YES |

Live contained no `experimental/product-evaluation-seam/characterization2/`
path before or after adoption. No additional Product source changes were
made: `App.tsx`, `viewport.ts`, `dataset.ts`, routing, relation-label,
styles, and interaction source remained outside the adoption diff.

## Adopted seam contract

`src/auto-layout.ts` now provides the validated generic Product composition:

- `settleNormalizedLayout(...)` owns per-component sequential composition,
  shared settling invocation, settled `maxX` propagation, component-gap state,
  and output assembly.
- `solveAutoLayout(...)` uses Product normalization, the existing automatic
  seed provider, and the same shared composition.
- `settleNormalizedLayoutFromInitialPositions(...)` uses Product
  normalization, caller-provided complete initial positions, and that same
  composition. It does not generate fallback automatic positions.

Normalization, endpoint handling, canonical Unicode code-point ordering,
canonical neighbor construction, component discovery, degree semantics,
settling arithmetic, clamp behavior, and P3 packing remain Product-owned.
There is one Product implementation of P3 composition; the adapter does not
copy packing, `maxX` propagation, `componentGap` arithmetic, output assembly,
normalization, or settling arithmetic.

The adopted adapter is `VSR-SEED-ADAPTER-v1` at
`experimental/product-evaluation-seam/explicit-seed-adapter1/`. It accepts a
pure layout input and explicit position map, requires exact normalized Node-ID
coverage, requires finite numeric `x`/`y`, and returns deterministic failure
codes. The failure codes are:

- `INVALID_POSITION_SHAPE`
- `MISSING_NODE_POSITION`
- `EXTRA_NODE_POSITION`
- `NON_FINITE_POSITION`
- `PRODUCT_LAYOUT_FAILURE`

Missing, extra, malformed, and non-finite inputs reject without silent
fallback. Automatic seed recovery is `NO`; explicit seed A/B values remain
observably distinct at iterations 0, 1, and 3. Iteration 0 preserves the
explicit values exactly for the tested single-component path, subject to the
Product-owned composition contract. The adapter is pure Node code, does not
mutate input, has no App/persistence/browser dependency, and has no
materializer or candidate-family awareness.

Product-to-experimental dependency direction is clean: the adapter imports
only Product auto-layout APIs; Product source imports no experimental,
materializer, candidate, manifest, PR-3, or evaluation module. Materializer
import is `NO`; materializer execution is `NO`.

## Validation

The exact default behavioral authority remains
`characterization-v2-post-order-resolution`. A temporary disposable replay
harness loaded the adopted live source while the characterization2 files
remained excluded from live. Results were:

| Check | Result |
| --- | --- |
| Explicit-seed adapter suite in live | 10/10 PASS |
| Default Product v2 characterization | 4/4 PASS |
| Fresh-process auto-layout replay | 38/38 exact |
| Exact v2 SHA | `F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B` |
| Relation reversal, solve | 16/16 |
| Relation reversal, settle | 16/16 |
| Node reversal, solve | 16/16 |
| Node reversal, settle | 16/16 |
| Focused permutations | PASS |
| Non-ASCII comparator | PASS |
| No mutation | PASS |
| Pure routing | 9/9 exact to v2 |
| App routing | 16/16 exact to v2 |
| Pure labels | 8/8 exact to v2 |
| App labels | 16/16 exact to v2 |
| Full Product tests | 287/287 PASS |
| Lint | PASS |
| Build | PASS |
| `git diff --check` | PASS |

The adapter focused suite covered complete coverage, missing and extra
rejection, malformed/non-finite rejection, explicit seed non-discard at
iterations 0/1/3, multi-component Product-owned P3 behavior, self/parallel
normalization, non-ASCII IDs, and no input mutation. The default v2 baseline
was not modified, regenerated, rounded, tolerated, or replaced; baseline-v3
was not created.

The interaction hard boundary is unchanged. Node moves continue to cause
automatic routes to recompute from current Node positions; frozen curves
during drag remain `NOT CORRECT`. Direct Relation drag, manual route state,
Relation-label drag/follow, and application orchestration remain unchanged.
No browser review or visual-feel acceptance was claimed.

## Adoption commit and final state

The local live Production adoption commit is:

- Hash: `681ef0a90d06e4c88f3e77289c165b7a5bfbc647`
- Subject: `feat: expose explicit-seed settling seam`
- Parent: `3b5fb4d2b8d6360cc630e7e910182927e1d8459a`

This commit is the `CURRENT ACCEPTED PRODUCT / EVALUATION-SEAM SOURCE
AUTHORITY`. The default Product baseline remains v2 unchanged; the adapter
has its separate `VSR-SEED-ADAPTER-v1` focused contract. Baseline2 remains an
evidence authority only and must not be described as generated from the new
commit.

The protected sample post-state hashes exactly match pre-state:

- EN: `19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1`
- JA: `C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA`

Only the two protected sample files remain dirty in live Production. The
adoption commit staged exactly the three selected paths and did not stage the
protected samples or characterization2. No candidate execution, V0/V1/V2/V3,
candidate selection, Product candidate integration, persistence, coordinate
save, materializer update, screenshot, browser review, or PR-3 claim occurred.

The authority chain remains distinct:

- `fd563340...`: historical pre-order-correction Product authority
- `0937d776...`: post-order-correction pre-settling-refactor authority
- `3b5fb4d...`: pre-adoption 1C Product authority
- `681ef0a...`: current accepted Product/evaluation-seam authority
- `d7271f5...`: W-C order-correction provenance
- `a5bc4b5...`: 1B refactor validation provenance
- `bb4f603...`: 1C explicit-seed validation provenance
- `324193e...`: baseline2 default-behavior evidence authority

Repository states after adoption:

- live Production: clean except protected EN/JA samples; HEAD
  `681ef0a...`
- 1C candidate: clean and unchanged at `bb4f603...`
- baseline2: clean and unchanged at `324193e...`
- 1B provenance: clean and unchanged at `a5bc4b5...`
- W-C: clean/detached and unchanged at `d7271f5...`
- retained materializer: detached at `fd563340...`; existing `experimental/`
  preserved and unmodified
- `ai-knowledge`: pre-existing dirty
  `playbooks/e2r-edge-cdp-browser-diagnostic.md` preserved
- `sessions/E2R-Session-0052.md`: unchanged

Implementation1D is technically eligible (`YES`) because the explicit-seed
path is adopted, default v2 is exact, and the adapter is isolated. It remains
`NOT STARTED`; no sequence choice beyond the accepted Design1/Harness Design1
handoff is made here. PR-3 remains `NO`, V0/V1/V2/V3 are `NONE`, no candidate
was selected, and the sample integer-coordinate follow-up is unchanged.

No new workspace-wide Knowledge Candidate was created. The accepted
responsibility-based incremental-extraction decision remains sufficient for
this repository-scoped adoption evidence.

No push, tag, release, deploy, or publication occurred.
