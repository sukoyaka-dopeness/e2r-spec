# LiaisonScape Auto Layout Quality Freeze and Worktree Baseline Audit 1

Date: 2026-09-17  
Checkpoint: `E2R-LIAISONSCAPE-AUTO-LAYOUT-QUALITY-FREEZE-AND-WORKTREE-BASELINE-AUDIT1`

## Current decision

Additional Explicit / Initial Auto Layout quality research is frozen for the
post-release follow-up track. This is a research-scope freeze, not an approval
to deploy, publish, or change the production default.

The current accepted boundaries remain:

- Initial Automatic Display is accepted for practical coordinate-less opening;
- Explicit Auto Layout lifecycle / Preview / Pin / Save is Human Review
  `QUALIFIED`;
- the controlled reference-placement fixture was judged by the user as
  **Preview improves the controlled fixture** for both JA and EN;
- a separate real Dataset observation (`天の葬列20260710a`) showed a readable
  saved layout becoming more compact with increased Relation / Relation-label
  congestion in Preview; that private Dataset is not copied into this
  repository and is not promoted to a release blocker;
- provider selection and the accepted lifecycle contracts are not reopened.

The controlled fixture therefore supersedes the prior *interpretation* of a
quality regression with the more precise record:

`REFERENCE-TO-PREVIEW DIFFERENCE REPRODUCED / HUMAN REVIEW: PREVIEW IMPROVES CONTROLLED FIXTURE`

The earlier diagnostic result remains unchanged as historical evidence. It
recorded a reproducible visual difference and intentionally left attribution
open; it did not record a user verdict.

## Frozen quality follow-ups

The following remain non-blocking research items for after release. No
complexity threshold is attributed to Node count alone:

- complexity threshold across graph size, Relation density, label pressure,
  and topology;
- circular-order selection behavior and possible large-graph selection bias;
- Graph-space scaling / separation;
- Relation-label congestion;
- broader Node-label quality;
- Presentation-aware local relaxation;
- Pinned global recovery.

The present evidence is a boundary, not a threshold study: the controlled
12-Entity / 19-Relation fixture improved under Preview, while an approximately
40-Node real-world-like Dataset could degrade visibly. The cause between those
cases is unresolved and is intentionally not explored in this checkpoint.

## Worktree audit

The audit used `git status --short`, `git diff --stat`, current `HEAD`, path
content, existing result documents, and the current test / diagnostic
references. No reset, restore, stash, clean, delete, or commit was performed.

At the audit point:

| repository | HEAD | status entries | modified tracked | untracked status paths | tracked diff stat |
| --- | --- | ---: | ---: | ---: | --- |
| `e2r-liaison-scape` | `3c383c67c8e3c599be9de7f99d6785261e147479` | 57 | 21 | 36 | 472 insertions / 51 deletions |
| `e2r-spec` | `391da6d9d9184823570366962f9e417a04898b36` | 38 | 3 | 35 | 825 insertions / 1 deletion |

The status counts are porcelain status-path counts; untracked directories may
contain more files than one displayed directory entry.

### LiaisonScape categories

| category | paths / path families | status and dependency |
| --- | --- | --- |
| A/C accepted Product and lifecycle implementation | modified `src/App.tsx`, `src/actual-product-initial-layout.ts`, `src/auto-layout.ts`, `src/components/EntityDetailDialog.tsx`, `src/dataset-replacement-safety.ts`, `src/dataset.ts`, `src/i18n.ts`, `src/operation-local-product-preview.ts`, `src/placement-ownership.ts`, `src/styles.css`; new `src/explicit-auto-layout-browser-adapter.ts`, `src/explicit-auto-layout-failure-diagnostic.ts`, `src/explicit-auto-layout-operation.ts`, `src/explicit-auto-layout-pin.ts`, `src/explicit-auto-layout-worker.ts`, `src/pin-persistence.ts`, `src/pinned-frontier-candidate-generator.ts` | Current result documents and focused/full evidence identify these as the accumulated accepted runtime/lifecycle state. They are mutually dependent and contain cumulative changes, so they are a future source baseline group rather than a safe historical checkpoint split. |
| B accepted tests / regression coverage | modified `tests/actual-product-initial-layout.test.ts`, `tests/appUiIntegration.test.ts`, `tests/arrow-display-graph.test.ts`, `tests/auto-layout.test.ts`, `tests/detail-deletion-workflow.test.ts`, `tests/entity-placement.test.ts`, `tests/frontier-product-worker-execution-proof.test.ts`, `tests/graph.test.ts`; new `tests/density-adaptive-node-separation-experiment1.test.ts`, `tests/explicit-auto-layout-*.test.ts`, `tests/pin-*.test.ts`, `tests/pinned-*.test.ts` | Evidence-backed production and checkpoint coverage. Depends on the implementation group; safe as a separate logical group only after a human confirms all accumulated tests are wanted in the baseline. |
| D/E/F research, DEV seam, and reproducible evidence | modified `src/acceptance-fixture-access.ts`, `vite.config.ts`; new `experimental/explicit-auto-layout-reference-placement-regression-fixture1/`, `experimental/explicit-auto-layout-catastrophic-preview-boundary1/`, `experimental/explicit-auto-layout-preview-admissibility-visual-gate1/`, `experimental/explicit-auto-layout-product-eligibility-semantics1/`, `experimental/density-adaptive-node-separation-experiment1/`, `experimental/pinned-cross-family-product-portfolio-experiment1/`, `experimental/pinned-frontier-feasibility1/`, plus matching `tools/*` and result artifacts | The named fixture and diagnostics are referenced by current result documents. They are not production runtime, but some are historical experiments with different acceptance status; keep as an evidence group and do not fold into production source. |
| H/I retained outside the proposed baseline | `.tmp-normal-offset-output.json`, `.tmp-reference-layout-regression1.json`, `experimental/product-evaluation-seam/spacing-inspection2/` | Retain in place. The temporary JSON is scratch-shaped; `spacing-inspection2` is an older diagnostic surface whose current adoption status is not established by this checkpoint. Neither is deleted or staged. |

### e2r-spec categories

| category | paths / path families | status and dependency |
| --- | --- | --- |
| G current specification record | modified `docs/roadmap.md`; all new `docs/liaisonscape-*-result.md` records | Current roadmap and checkpoint results are the formal historical/current record. Historical classifications remain intact; the new freeze record is a superseding current-status entry. |
| G accepted draft extension / validation | modified `extensions/README.md`, `package.json`; new `extensions/liaisonscape-layout-extension-draft.md`, `schemas/extensions/liaisonscape-layout-draft.schema.json`, `scripts/validate-liaisonscape-layout-draft-schema.mjs` | These are the accumulated Pin/Layout draft and its validator, not an Auto Layout quality implementation. They are logically separable from the freeze record but should be reviewed as one spec-extension group. |
| H/I retained outside the proposed baseline | `work/` diagnostic screenshots, HTML, and related inspection material | Preserve without modification. Current evidence shows diagnostic value, but this checkpoint does not establish that every generated item belongs in a canonical documentation commit. |

## Recommended future commit groups

No commit is made by this checkpoint. The following are planning boundaries,
not staging actions:

1. **Accepted LiaisonScape runtime baseline** — the accumulated implementation
   and its directly required focused tests; source-level accepted state, with
   full runtime gates appropriate at commit time.
2. **Spec extension and validator baseline** — the Layout draft, schema,
   validator, README registration, and package script.
3. **DEV acceptance and research evidence** — the named acceptance fixtures,
   diagnostic tools, result artifacts, and the matching spec result records.
4. **Current roadmap / session records** — current documentation updates only,
   kept separate from runtime baseline when practical.

The two scratch/ambiguous areas above remain outside these groups until a human
confirms their canonical status. A single cumulative source file may contain
several accepted checkpoints; preserving current behavior is more important
than reconstructing old commit boundaries.

## Validation and boundary

This checkpoint changed only this result document and the current roadmap
entry. It did not change Product source, solver behavior, Dataset/schema
semantics, UI, or any diagnostic material. Existing evidence remains distinct
from validation executed here:

- existing accepted evidence: full suite `636/636 PASS`, lint/build/spec
  validation, and prior focused campaigns as recorded in the repository;
- this checkpoint: documentation validation and `git diff --check` are the
  applicable gates; no new full application campaign is required for this
  documentation-only audit.

Public rollout, deploy, release, and baseline commit remain separate decisions.

