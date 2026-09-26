# Wave 3A App-Owned Bounded Evidence Path Migration Result 1

- Date: 2026-09-26
- Status: COMPLETE — PATH-ONLY MIGRATION
- Scope: The Human-approved 10-document manifest from [Primary-Responsibility Residual Documentation Classification Audit 1](documentation-ia-primary-responsibility-residual-classification-audit1.md), manifests A, B, and D only.
- Authority: Human-approved Wave 3A scope; the [Documentation Plan](documentation-plan.md) governs placement. Each moved record remains its own checkpoint evidence authority. `docs/roadmap.md` remains the sole current-planning authority.
- Related records: [Documentation Hub](../README.md), [Wave 2 preparation](documentation-ia-application-workstream-foldering-wave2-preparation1.md).

## Migration manifest

The following seven NarrativeLine modernization records moved to `docs/narrativeline/` without content or status edits:

- `docs/narrativeline-modernization-nl-0-acceptance.md` → `docs/narrativeline/narrativeline-modernization-nl-0-acceptance.md`
- `docs/narrativeline-modernization-nl-d1-acceptance.md` → `docs/narrativeline/narrativeline-modernization-nl-d1-acceptance.md`
- `docs/narrativeline-modernization-nl-d2-acceptance.md` → `docs/narrativeline/narrativeline-modernization-nl-d2-acceptance.md`
- `docs/narrativeline-modernization-nl-d3-acceptance.md` → `docs/narrativeline/narrativeline-modernization-nl-d3-acceptance.md`
- `docs/narrativeline-modernization-nl-d4-acceptance.md` → `docs/narrativeline/narrativeline-modernization-nl-d4-acceptance.md`
- `docs/narrativeline-modernization-nl-d5a-beforeunload-acceptance.md` → `docs/narrativeline/narrativeline-modernization-nl-d5a-beforeunload-acceptance.md`
- `docs/narrativeline-modernization-nl-d5b-internal-navigation-loss-audit-acceptance.md` → `docs/narrativeline/narrativeline-modernization-nl-d5b-internal-navigation-loss-audit-acceptance.md`

The two NarrativeLine Entity-deletion records moved to `docs/narrativeline/` and remain distinct from the shared Cross-App Relation Deletion authority:

- `docs/narrativeline-entity-deletion-resolution-acceptance.md` → `docs/narrativeline/narrativeline-entity-deletion-resolution-acceptance.md`
- `docs/narrativeline-final-entity-deletion-cross-app-fix.md` → `docs/narrativeline/narrativeline-final-entity-deletion-cross-app-fix.md`

The Validator-owned Presentation-support result moved to `docs/validator/`:

- `docs/production-validator-presentation-specification-support-fix-result.md` → `docs/validator/production-validator-presentation-specification-support-fix-result.md`

## Reference repair and preserved boundaries

A fresh exact-filename and plain-path scan across the canonical E2R workspace found the known inbound references in E2R-SPEC documentation/session records. No direct path references to these ten documents were found in sibling repositories or `ai-knowledge`; no sibling repository was changed. The scan does not make any claim about external deep links.

Updated references include the NarrativeLine records' links to the shared Cross-App deletion capability/acceptance, Cross-App deletion records' links to NarrativeLine application evidence, the destructive-action audit, the NL-0/NL-D3/NL-D5B path mentions, and the Validator Presentation-support reference from the Lighthouse semantic decision. The changes repair navigation only.

The three authority lanes remain separate:

- NL-0 through NL-D5B retain their individual acceptance/audit scopes and exclusions; their grouping does not accept NarrativeLine modernization as a whole or absorb adjacent follow-up.
- Entity-deletion application implementation/acceptance remains NarrativeLine-owned. It does not replace or broaden the separate Cross-App Relation Deletion capability authority or imply formal Cross-App acceptance from the application fix record.
- The Presentation-support result remains Validator implementation evidence and does not change normative Presentation Extension/schema status.

No status, maturity, acceptance, Roadmap priority, specification authority, runtime behavior, or release boundary was changed. No additional manifest, landing zone, or document was included. This was not Roadmap slimming or authority reconciliation.

## Validation

- Confirmed all ten approved sources existed before movement and all ten destinations exist after movement; no unapproved document was moved.
- Re-scanned canonical workspace references and repaired the known in-repository path dependencies.
- `npm run validate` passed. Relative Markdown links in all 22 affected/navigation records resolved. A broader repository scan reported unrelated pre-existing missing targets in an old session record and LiaisonScape diagnostic artifacts; those are outside this migration and were not changed.
- `git diff --cached --check` passed for the exact migration checkpoint.
