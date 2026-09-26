# LiaisonScape Product Evaluation Seam Implementation1C Result

Date: 2026-09-03 (Asia/Tokyo)

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1C`

Status: `REFACTOR CANDIDATE`

## Outcome

This checkpoint is `CASE 1 / Decision A`:

> EXPLICIT-SEED EVALUATION SEAM CANDIDATE VALIDATED; DEFAULT PRODUCT BEHAVIOR REMAINS EXACTLY PRESERVED; PROCEED ONLY TO A SEPARATELY AUTHORIZED IMPLEMENTATION1C ADOPTION1 CHECKPOINT.

The exact next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1C-ADOPTION1`.

The work was performed in the new disposable clone:

`C:\Users\extra\E2R\e2r-liaison-scape-product-evaluation-seam-implementation1c`

The clone started clean at current accepted Product authority
`3b5fb4d2b8d6360cc630e7e910182927e1d8459a`, subject
`refactor: extract layout settling kernel`, with parent
`0937d7768136ff63e74924480551d370b2935c2e`.

## Seam decision and implementation

The 1C pre-edit replay passed before any source edit: characterization2
passed 4/4, and fresh-process auto-layout replay reported 38 cases with the
unchanged v2 SHA
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.

The existing Product seam was audited as insufficient for the requested
evaluation path because sequential multi-component P3 packing still lived in
the `solveAutoLayout` composition. Decision `P-B` was therefore selected.
The smallest generic Product seam was added only to `src/auto-layout.ts`:

- Internal `settleNormalizedLayout(...)` now owns the shared sequential
  component composition, explicit settling calls, `maxX` propagation, and
  component gap state.
- `solveAutoLayout(...)` supplies the existing automatic seed source to that
  composition, preserving the default path and arithmetic order.
- Exported `settleNormalizedLayoutFromInitialPositions(...)` supplies a
  caller-provided complete seed map to the same Product composition. It does
  not add fallback seed generation or evaluation-specific policy.

The evaluation-only adapter is confined to
`experimental/product-evaluation-seam/explicit-seed-adapter1/`. It validates
the Product layout input, exact Node-ID coverage, point shape, and finite
coordinates; calls the Product normalized graph and explicit-seed seam; and
returns explicit failure codes without fallback. It does not import or know
about candidates, materialization, V0-V3, TA, manifests, persistence, normal
App entry, or browser/rendering behavior. The adapter and its tests are pure
Node evaluation code and do not mutate their inputs.

The test-owned `characterization2` runner and v2 artifacts were copied into
the disposable candidate for reproducibility only. Baseline2 was not
modified or regenerated.

## Validation

| Check | Result |
| --- | --- |
| Pre-edit v2 characterization | 4/4 |
| Post-seam v2 characterization | 4/4 |
| Fresh-process auto-layout replay | 38/38 exact; SHA unchanged |
| Explicit-seed adapter tests | 10/10 |
| Full Product tests | 287/287 |
| Lint | PASS |
| Build | PASS |
| Diff-check | PASS |
| Forbidden Product/evaluation dependency audit | PASS |

The adapter tests cover complete exact coverage, missing and extra IDs,
malformed and non-finite positions, distinct explicit seeds at zero/one/three
iterations, multi-component Product-owned packing composition, self and
parallel Relation normalization, non-ASCII IDs, input immutability, and the
pure Node boundary. No browser review, visual-feel claim, candidate
materialization, V0-V3 execution, ranking, selection, or PR-3 claim was made.

## Scope and repository state

The candidate commit is `bb4f603`, subject
`feat: expose LiaisonScape explicit-seed settling seam`. It contains only:

- `src/auto-layout.ts`
- `experimental/product-evaluation-seam/explicit-seed-adapter1/`
- the copied test-owned `experimental/product-evaluation-seam/characterization2/`
  replay and artifacts

The candidate clone is clean after commit and remains local and unpushed.
The live Production repository was not modified: it remains at accepted
authority `3b5fb4d...` with only the two pre-existing protected EN/JA sample
files dirty. Baseline2 remains clean at `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`.
The retained materializer remains detached at
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, with its existing `experimental/`
work preserved. The 1B candidate remains unchanged.

Implementation1C is a validated local Product/evaluation seam candidate, not
an adoption. Implementation1C Adoption1 is the only next step; do not start
Implementation1D. PR-3 remains `NO`; V0/V1/V2/V3 are `NONE`; no candidate was
selected; no Production integration or publication occurred.

No new workspace-wide Knowledge Candidate was created. The accepted
responsibility-based incremental-extraction decision remains sufficient for
this repository-scoped seam evidence, and `ai-knowledge` was not modified.

No push, tag, release, deploy, or publication occurred.
