# Wave 3B Shared Cross-App Evidence Path Migration Result 1

- Date: 2026-09-26
- Status: COMPLETE — PATH-ONLY MIGRATION
- Scope: Human-approved manifests E, F, and G from [Primary-Responsibility Residual Documentation Classification Audit 1](documentation-ia-primary-responsibility-residual-classification-audit1.md): 12 records moved to `docs/cross-app/`.
- Authority: Human-approved Wave 3B manifest; the [Documentation Plan](documentation-plan.md) governs placement. Each record remains its own decision/evidence authority. `docs/roadmap.md` remains the sole current-planning authority.
- Related records: [Documentation Hub](README.md), [Wave 3A result](documentation-ia-wave3a-app-owned-evidence-path-migration1-result.md), [Roadmap History](roadmap-history/README.md).

## Migration manifest

### Relation Deletion capability and closure

- `docs/cross-app-relation-deletion-capability.md` → `docs/cross-app/cross-app-relation-deletion-capability.md`
- `docs/cross-app-relation-deletion-bidirectional-acceptance.md` → `docs/cross-app/cross-app-relation-deletion-bidirectional-acceptance.md`
- `docs/cross-app-relation-deletion-bidirectional-reacceptance.md` → `docs/cross-app/cross-app-relation-deletion-bidirectional-reacceptance.md`
- `docs/cross-app-relation-deletion-capability-closure.md` → `docs/cross-app/cross-app-relation-deletion-capability-closure.md`

### Locale shared design

- `docs/cross-app-locale-startup-v0-design.md` → `docs/cross-app/cross-app-locale-startup-v0-design.md`
- `docs/cross-app-locale-startup-v0-recipient-preference-design.md` → `docs/cross-app/cross-app-locale-startup-v0-recipient-preference-design.md`

### Shared shell / visual parity

- `docs/cross-app-editor-shell-geometry-v0-design.md` → `docs/cross-app/cross-app-editor-shell-geometry-v0-design.md`
- `docs/cross-app-shell-action-hover-focus-parity-audit1-result.md` → `docs/cross-app/cross-app-shell-action-hover-focus-parity-audit1-result.md`
- `docs/cross-app-dataset-replacement-destructive-styling-parity-audit1-result.md` → `docs/cross-app/cross-app-dataset-replacement-destructive-styling-parity-audit1-result.md`
- `docs/e2r-cross-app-visual-consistency-audit1-result.md` → `docs/cross-app/e2r-cross-app-visual-consistency-audit1-result.md`
- `docs/e2r-cross-app-visual-hierarchy-form-geometry-audit1-result.md` → `docs/cross-app/e2r-cross-app-visual-hierarchy-form-geometry-audit1-result.md`
- `docs/liaisonscape-cross-app-shell-alignment-f2-ls1-acceptance.md` → `docs/cross-app/liaisonscape-cross-app-shell-alignment-f2-ls1-acceptance.md`

The three packets share a physical destination only. Their internal responsibilities, document identities, and recorded statuses were not merged or rewritten.

## Reference repair and preserved boundaries

The canonical-workspace scan covered exact filenames and plain paths across E2R-SPEC, `ai-knowledge`, and sibling repositories. Known E2R-SPEC references were repaired in the Roadmap, broad Roadmap History, Cross-App Handoff records, NarrativeLine/LiaisonScape application evidence, Locale consumer acceptance, session records, and prior audit/preparation prose where it named the current path. No sibling application repository required a write.

The explicitly authorized `ai-knowledge/hypotheses/cross-app-action-hierarchy-and-destructive-controls.md` repair changed only its link to the Locale recipient-preference design's new path. That file was clean before the edit. The pre-existing unrelated dirty Knowledge file `playbooks/e2r-edge-cdp-browser-diagnostic.md` was not modified, staged, or committed.

The three responsibility groups remain distinct:

- Relation Deletion retains the original bidirectional `FAIL`, later reacceptance, and bounded closure as separate checkpoints. Shared capability evidence remains distinct from NarrativeLine and LiaisonScape implementation/acceptance records.
- Locale records remain shared startup-contract and recipient-preference designs. Cross-App Locale closure remains unestablished; NarrativeLine consumer evidence does not establish other-consumer parity.
- Shell/parity records retain their individual design, audit, and bounded acceptance scopes. Their placement does not establish general visual acceptance or universal application parity.

This was physical navigation only. It changed no status, maturity, acceptance, authorization, Roadmap priority, specification/runtime semantics, release state, or public capability. Wave 3C and all other residual cohorts remain untouched. No push, deploy, tag, release, publication, or Banked Reset operation occurred.

## Validation

- Confirmed the exact 12 approved sources before migration and their 12 destinations after migration; no other document was moved.
- Rescanned E2R-SPEC, Knowledge, and sibling repository references; repaired the known references and the one Human-approved Knowledge path.
- `npm run validate` passed in E2R-SPEC.
- Relative Markdown links in all affected/navigation records resolved after the move.
- `git diff --cached --check` passed in each repository before its local commit.
- E2R-SPEC and `ai-knowledge` were committed separately. Both commits remain local and unpushed.
