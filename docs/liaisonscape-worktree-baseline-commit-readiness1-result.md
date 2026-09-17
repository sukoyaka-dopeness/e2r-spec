# LiaisonScape Worktree Baseline Commit Readiness 1

Date: 2026-09-17  
Checkpoint: `E2R-LIAISONSCAPE-WORKTREE-BASELINE-COMMIT-READINESS1`  
Classification: **B. COMMIT MANIFEST ESTABLISHED / SMALL HUMAN DECISION SET REMAINS**

## Scope

Auto Layout quality research remains frozen for post-release follow-up. This
checkpoint converts the previous worktree audit into exact path manifests. It
makes no runtime, solver, schema, UI, or research change and does not create a
commit.

The manifest is a path-level commit plan, not a claim that old checkpoint
hunks should be reconstructed. Cumulative source files remain grouped as the
current accepted state.

## Current evidence

Read-only status at completion (the new readiness result itself accounts for
one additional untracked spec path):

| repository | HEAD | status paths | modified tracked | untracked status paths | untracked files |
| --- | --- | ---: | ---: | ---: | ---: |
| `e2r-liaison-scape` | `3c383c67c8e3c599be9de7f99d6785261e147479` | 57 | 21 | 36 | 50 |
| `e2r-spec` | `391da6d9d9184823570366962f9e417a04898b36` | 40 | 3 | 37 | 43 |

At the start of the audit, e2r-spec was 39 status paths / 36 untracked status
paths / 42 untracked files; the added readiness document accounts for the
current +1. There are no staged changes in either index. Untracked-file counts
expand untracked directory entries reported by `git status --short`.

## Candidate 1 — accepted LiaisonScape runtime plus direct tests

Purpose: preserve the current accepted Initial Automatic Display and Explicit
Auto Layout / Pin lifecycle state. These files contain cumulative changes and
should not be split by historical checkpoint.

Tracked paths:

```text
src/App.tsx
src/actual-product-initial-layout.ts
src/auto-layout.ts
src/components/EntityDetailDialog.tsx
src/dataset-replacement-safety.ts
src/dataset.ts
src/i18n.ts
src/operation-local-product-preview.ts
src/placement-ownership.ts
src/styles.css
tests/actual-product-initial-layout.test.ts
tests/appUiIntegration.test.ts
tests/arrow-display-graph.test.ts
tests/auto-layout.test.ts
tests/detail-deletion-workflow.test.ts
tests/entity-placement.test.ts
tests/frontier-product-worker-execution-proof.test.ts
tests/graph-presentation.test.ts
tests/graph.test.ts
```

Untracked paths:

```text
src/explicit-auto-layout-browser-adapter.ts
src/explicit-auto-layout-failure-diagnostic.ts
src/explicit-auto-layout-operation.ts
src/explicit-auto-layout-pin.ts
src/explicit-auto-layout-worker.ts
src/pin-persistence.ts
src/pinned-frontier-candidate-generator.ts
tests/explicit-auto-layout-operation.test.ts
tests/pin-app-working-state.test.ts
tests/pin-persistence.test.ts
```

Impact: production runtime and direct regression coverage. These tests depend
on the source paths above, so source-only staging would not be a meaningful
accepted repository state.

Readiness: **conditionally safe as one bounded source baseline**, after normal
runtime gates are rerun. It is not safe to split cumulative source files
without source reconstruction.

## Candidate 2 — Layout / Pin specification extension and validator

Purpose: keep the accepted draft extension contract and schema validation
together. These paths do not change application runtime.

Tracked paths:

```text
extensions/README.md
package.json
```

Untracked paths:

```text
extensions/liaisonscape-layout-extension-draft.md
schemas/extensions/liaisonscape-layout-draft.schema.json
scripts/validate-liaisonscape-layout-draft-schema.mjs
```

Impact: specification tooling and draft extension documentation only. The
package script depends on the validator path. Readiness: **safe as a separate
spec-extension commit**, with `npm run validate` and cached diff checks.

## Candidate 3 — DEV acceptance seam and controlled reference fixture

Purpose: preserve the reproducible DEV-only surface used for the controlled
reference-versus-Preview Human Check. It is not required by the normal
production path.

Tracked paths:

```text
src/acceptance-fixture-access.ts
vite.config.ts
```

Untracked paths:

```text
experimental/explicit-auto-layout-reference-placement-regression-fixture1/actual-product-evidence.md
experimental/explicit-auto-layout-reference-placement-regression-fixture1/fixtures/reference-layout-regression.no-coordinates.en.e2r.json
experimental/explicit-auto-layout-reference-placement-regression-fixture1/fixtures/reference-layout-regression.no-coordinates.ja.e2r.json
experimental/explicit-auto-layout-reference-placement-regression-fixture1/fixtures/reference-layout-regression.reference.en.e2r.json
experimental/explicit-auto-layout-reference-placement-regression-fixture1/fixtures/reference-layout-regression.reference.ja.e2r.json
experimental/explicit-auto-layout-reference-placement-regression-fixture1/result-summary.json
tests/explicit-auto-layout-reference-placement-regression-fixture1.test.ts
tools/explicit-auto-layout-reference-placement-regression-fixture1.mjs
```

Impact: DEV/research only. The fixture result is the evidence for “Preview
improves the controlled fixture” in both locales. Readiness: **safe as a
DEV/evidence commit after Candidate 1**, provided the seam is intentionally
retained.

## Candidate 4 — reproducible research experiments and evidence

Purpose: retain named diagnostic experiments and replay tools as historical
evidence. None is a production provider or quality promotion.

Exact paths:

```text
experimental/density-adaptive-node-separation-experiment1/core.ts
experimental/density-adaptive-node-separation-experiment1/result-summary.json
experimental/explicit-auto-layout-catastrophic-preview-boundary1/index.html
experimental/explicit-auto-layout-catastrophic-preview-boundary1/main.tsx
experimental/explicit-auto-layout-catastrophic-preview-boundary1/result-summary.json
experimental/explicit-auto-layout-preview-admissibility-visual-gate1/result-summary.json
experimental/explicit-auto-layout-product-eligibility-semantics1/result-summary.json
experimental/pinned-cross-family-product-portfolio-experiment1/core.ts
experimental/pinned-cross-family-product-portfolio-experiment1/result-summary.json
experimental/pinned-frontier-feasibility1/core.ts
experimental/pinned-frontier-feasibility1/result-summary.json
experimental/pinned-frontier-feasibility1/worker.mjs
tests/density-adaptive-node-separation-experiment1.test.ts
tests/explicit-auto-layout-catastrophic-preview-boundary1.test.ts
tests/explicit-auto-layout-dev-failure-diagnostic1.test.ts
tests/explicit-auto-layout-preview-admissibility-visual-gate1.test.ts
tests/explicit-auto-layout-product-eligibility-semantics1.test.ts
tests/explicit-auto-layout-safe-preview-failure-diagnosis1.test.ts
tests/pinned-cross-family-product-portfolio-experiment1.test.ts
tests/pinned-frontier-feasibility.test.ts
tools/density-adaptive-node-separation-experiment1.mjs
tools/explicit-auto-layout-catastrophic-preview-boundary1.mjs
tools/explicit-auto-layout-preview-admissibility-visual-gate1.mjs
tools/explicit-auto-layout-product-eligibility-semantics1.mjs
tools/pinned-cross-family-product-portfolio-experiment1.mjs
tools/pinned-frontier-feasibility1.mjs
```

Impact: no production runtime impact. These tests are diagnostic or
experiment-specific, not all permanent regression gates. Readiness:
**evidence-backed but requiring a human retention decision** because the
historical experiments have different statuses.

## Candidate 5 — e2r-spec result records and roadmap

Purpose: retain current specification status and historical checkpoint
results, including the Auto Layout quality freeze. Historical result text is
not rewritten to erase earlier classifications.

Tracked paths:

```text
docs/roadmap.md
```

Untracked paths:

```text
docs/liaisonscape-auto-layout-quality-freeze-and-worktree-baseline-audit1-result.md
docs/liaisonscape-worktree-baseline-commit-readiness1-result.md
docs/liaisonscape-density-adaptive-node-separation-experiment1-result.md
docs/liaisonscape-explicit-auto-layout-app-lifecycle-integration1-result.md
docs/liaisonscape-explicit-auto-layout-catastrophic-preview-boundary1-result.md
docs/liaisonscape-explicit-auto-layout-dev-failure-diagnostic1-result.md
docs/liaisonscape-explicit-auto-layout-human-check-b-closure-gate1-result.md
docs/liaisonscape-explicit-auto-layout-human-check-b-qualified-closure1-result.md
docs/liaisonscape-explicit-auto-layout-human-check-b-resume1-result.md
docs/liaisonscape-explicit-auto-layout-human-check-b-retest1-result.md
docs/liaisonscape-explicit-auto-layout-operation-boundary1-result.md
docs/liaisonscape-explicit-auto-layout-pin-runtime-integration1-result.md
docs/liaisonscape-explicit-auto-layout-preview-admissibility-visual-gate1-result.md
docs/liaisonscape-explicit-auto-layout-preview-adoption-contract-reconciliation1-result.md
docs/liaisonscape-explicit-auto-layout-preview-pin-contract1-result.md
docs/liaisonscape-explicit-auto-layout-preview-surface-refinement1-result.md
docs/liaisonscape-explicit-auto-layout-product-eligibility-semantics1-result.md
docs/liaisonscape-explicit-auto-layout-production-operation-staging1-result.md
docs/liaisonscape-explicit-auto-layout-reference-placement-regression-fixture1-result.md
docs/liaisonscape-explicit-auto-layout-safe-preview-failure-diagnosis1-result.md
docs/liaisonscape-general-complex-dataset-practicality-reassessment1-result.md
docs/liaisonscape-initial-automatic-display-integer-canonicalization-human-check-pass-closure1-result.md
docs/liaisonscape-initial-automatic-display-integer-canonicalization-human-check1-result.md
docs/liaisonscape-initial-automatic-display-integer-canonicalization1-result.md
docs/liaisonscape-pin-app-working-state-save-integration1-result.md
docs/liaisonscape-pin-persistence-authority-contract2-result.md
docs/liaisonscape-pin-ui-human-check-a-popover-iteration2-result.md
docs/liaisonscape-pin-ui-human-check-a-visual-iteration1-result.md
docs/liaisonscape-pin-ui1-result.md
docs/liaisonscape-pin-working-anchor-consistency1-result.md
docs/liaisonscape-pin-writer-atomic-save1-result.md
docs/liaisonscape-pinned-cross-family-product-portfolio-experiment1-result.md
docs/liaisonscape-pinned-frontier-feasibility1-result.md
```

Impact: specification/history only. The new readiness and freeze documents
are current records; the other documents are historical checkpoint records.
Readiness: **safe as a docs/result commit**, subject to the human decision
about which historical research records are canonical.

## Explicitly outside the baseline

These paths are preserved in place and excluded from every candidate:

```text
e2r-liaison-scape/.tmp-normal-offset-output.json
e2r-liaison-scape/.tmp-reference-layout-regression1.json
e2r-liaison-scape/experimental/product-evaluation-seam/spacing-inspection2/candidate-data.ts
e2r-liaison-scape/experimental/product-evaluation-seam/spacing-inspection2/index.html
e2r-liaison-scape/experimental/product-evaluation-seam/spacing-inspection2/main.css
e2r-liaison-scape/experimental/product-evaluation-seam/spacing-inspection2/main.tsx
e2r-spec/work/actual-product-apollo11-inspection.png
e2r-spec/work/actual-product-apollo11-spacing120.png
e2r-spec/work/actual-product-apollo11-spacing220-dom.txt
e2r-spec/work/actual-product-apollo11-spacing220.png
e2r-spec/work/apollo-routing-inspection.html
e2r-spec/work/apollo-spacing-inspection.html
e2r-spec/work/apollo-wide-routing-label-diagnostic-220.png
```

The two `.tmp-*` files are scratch/generated material. `spacing-inspection2`
is useful local diagnostic material, but its current canonical/accepted status
is not established. `e2r-spec/work/` contains useful browser/diagnostic output,
but not every generated file is proven to belong in a canonical result commit.
No item is deleted, moved, reset, restored, or stashed.

## Dependency and commit order

Recommended order for a later explicitly authorized commit checkpoint:

1. Candidate 1: runtime plus inseparable direct tests.
2. Candidate 2: spec extension and validator.
3. Candidate 3: DEV seam and controlled fixture.
4. Candidate 4: research experiments and evidence.
5. Candidate 5: result documents and roadmap, recording actual revisions after
   preceding commits if they are created.

Candidate 1 should be one commit because its direct tests depend on the
current source. Candidates 2–5 can be separate. Candidate 4 and the
outside-baseline material require the only remaining human retention decisions;
historical hunk splitting is not required.

## Validation plan for a later commit

- Candidate 1: focused regressions, full `npm test`, `npm run lint`, and
  `npm run build`; verify natural termination and complete summary.
- Candidate 2: `npm run validate` and cached diff checks.
- Candidate 3: the fixture/reproduction focused test, lint/build if the seam is
  included with source, and cached diff checks.
- Candidate 4: relevant experiment tests/tools and cached diff checks; do not
  infer a full runtime gate from research artifacts.
- Candidate 5: `npm run validate` and cached diff checks; no application suite
  is required for docs-only changes.

The prior `636/636 PASS` is historical accepted evidence, not a test executed
by this checkpoint.

## Safety result

No application source, test, experiment, diagnostic, index, or Git history was
changed by this checkpoint. The only checkpoint-owned edits are this result
document and the appended roadmap entry. No commit was created; push, deploy,
and release remain unauthorized.

## Later execution linkage

The subsequent baseline execution used this manifest and created these bounded
local commits:

```text
e2r-liaison-scape 17be25a  accepted runtime plus direct tests
e2r-spec          e4f6856  Layout/Pin extension plus validator
e2r-liaison-scape c692cdf  DEV seam plus controlled reference fixture
e2r-liaison-scape e6a66df  canonical historical research evidence
```

Candidate 5 is the result-record/roadmap commit that records this linkage.
The baseline-excluded scratch and diagnostic paths remain outside those
commits.
