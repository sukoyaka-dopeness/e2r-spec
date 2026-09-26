# Wave 3C LiaisonScape Presentation / Explicit Auto Layout Evidence Path Migration Result 1

- Date: 2026-09-26
- Status: COMPLETE — PATH-ONLY MIGRATION
- Scope: Human-approved manifests H and I from [Primary-Responsibility Residual Documentation Classification Audit 1](documentation-ia-primary-responsibility-residual-classification-audit1.md): two LiaisonScape-local presentation audits and 21 Explicit Auto Layout / Pin records.
- Authority: Human-approved Wave 3C scope; [Documentation Plan](documentation-plan.md) governs placement. Each moved record remains its own evidence authority. `docs/roadmap.md` remains the sole current-planning authority.
- Related records: [Documentation Hub](README.md), [Wave 3A result](documentation-ia-wave3a-app-owned-evidence-path-migration1-result.md), [Wave 3B result](documentation-ia-wave3b-cross-app-evidence-path-migration1-result.md), and the existing broad [LiaisonScape Layout and Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md).

## Migration manifest

The two LiaisonScape-local presentation audits moved to `docs/liaisonscape/`:

- `docs/cross-app-confirmation-dialog-spacing-audit.md` → `docs/liaisonscape/cross-app-confirmation-dialog-spacing-audit.md`
- `docs/cross-app-destructive-action-hierarchy-audit.md` → `docs/liaisonscape/cross-app-destructive-action-hierarchy-audit.md`

The 21 Explicit Auto Layout / Pin records moved to `docs/liaisonscape/`:

- `docs/liaisonscape-explicit-auto-layout-app-lifecycle-integration1-result.md`
- `docs/liaisonscape-explicit-auto-layout-catastrophic-preview-boundary1-result.md`
- `docs/liaisonscape-explicit-auto-layout-completion-readiness-current-state-gap-audit1-result.md`
- `docs/liaisonscape-explicit-auto-layout-dev-failure-diagnostic1-result.md`
- `docs/liaisonscape-explicit-auto-layout-experiment-1a-result.md`
- `docs/liaisonscape-explicit-auto-layout-human-check-b-closure-gate1-result.md`
- `docs/liaisonscape-explicit-auto-layout-human-check-b-qualified-closure1-result.md`
- `docs/liaisonscape-explicit-auto-layout-human-check-b-resume1-result.md`
- `docs/liaisonscape-explicit-auto-layout-human-check-b-retest1-result.md`
- `docs/liaisonscape-explicit-auto-layout-operation-boundary1-result.md`
- `docs/liaisonscape-explicit-auto-layout-pin-runtime-integration1-result.md`
- `docs/liaisonscape-explicit-auto-layout-preview-admissibility-visual-gate1-result.md`
- `docs/liaisonscape-explicit-auto-layout-preview-adoption-contract-reconciliation1-result.md`
- `docs/liaisonscape-explicit-auto-layout-preview-pin-contract1-result.md`
- `docs/liaisonscape-explicit-auto-layout-preview-surface-refinement1-result.md`
- `docs/liaisonscape-explicit-auto-layout-product-eligibility-semantics1-result.md`
- `docs/liaisonscape-explicit-auto-layout-production-integration-result.md`
- `docs/liaisonscape-explicit-auto-layout-production-operation-staging1-result.md`
- `docs/liaisonscape-explicit-auto-layout-reference-placement-regression-fixture1-result.md`
- `docs/liaisonscape-explicit-auto-layout-safe-preview-failure-diagnosis1-result.md`
- `docs/liaisonscape-explicit-auto-layout-semantic-decision.md`

Each basename above now resides under `docs/liaisonscape/`; no other residual cohort or application repository file was moved.

## Reference repair and preserved boundaries

The current canonical-workspace scan found and repaired references in the Roadmap, existing broad Roadmap History, E2R-SPEC result/preparation/session records, and the two explicitly authorized `ai-knowledge` hypothesis entries. The Knowledge edits only replace the moved result paths. No direct reference requiring a write was found in the LiaisonScape sibling repository, which remained read-only. The scan makes no claim about external deep links.

The two local dialog/action audits remain LiaisonScape-owned evidence despite their former `cross-app-` filename prefix. The Explicit Auto Layout records retain their individual checkpoint scope and status. In particular, accepted Explicit Auto Layout integration, Draft/non-Stable Pin authority, Human Check B `QUALIFIED`, unresolved earlier hard-failure attribution, and frozen/non-blocking quality follow-up remain distinct. DEV diagnostics do not establish the cause of the earlier failure. This placement does not establish universal visual-quality acceptance, quality closure, Pin Stable/Core/Coordinate status, or release/rollout authorization.

No Initial Placement Seed material, other residual cohort, sibling source, `work/` content, or Roadmap planning text was changed. This migration changes physical navigation only; it is not Roadmap slimming, status reconciliation, or a runtime/specification change.

## Validation

- `npm.cmd run validate` passed all E2R-SPEC schema, Extension-profile, and example gates.
- Markdown link scan passed for links targeting files in `docs/liaisonscape/` across 818 Markdown documents in E2R-SPEC `docs/` and `sessions/`; the moved-document local-link check also passed.
- The two authorized AI-Knowledge references resolve to their new E2R-SPEC paths. The unrelated pre-existing dirty Knowledge playbook was left untouched.
- `git diff --check` passed for E2R-SPEC and AI-Knowledge changes before staging; staged-diff checks and separate local commits are recorded at handoff.
