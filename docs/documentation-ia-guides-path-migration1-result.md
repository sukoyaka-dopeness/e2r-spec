# Documentation IA Guides Path Migration 1 — Result

- Date: 2026-09-25
- Status: Completed bounded path migration
- Scope: Move the six bilingual reader guides into the Human-approved
  `docs/guides/` landing zone and repair known workspace navigation.
- Authority: Human-approved narrow-hybrid foldering decision; `docs/README.md`
  remains the documentation navigation hub.
- Related records: [Documentation Plan](documentation-plan.md),
  [Documentation Hub](README.md),
  [Docs-wide organization audit](documentation-ia-docs-wide-organization-audit1.md)

## Migration manifest

| Previous path | Current path |
| --- | --- |
| `docs/e2r-overview-en.md` | `docs/guides/e2r-overview-en.md` |
| `docs/e2r-overview-ja.md` | `docs/guides/e2r-overview-ja.md` |
| `docs/what-can-e2r-do-en.md` | `docs/guides/what-can-e2r-do-en.md` |
| `docs/what-can-e2r-do-ja.md` | `docs/guides/what-can-e2r-do-ja.md` |
| `docs/dataset-walkthrough-en.md` | `docs/guides/dataset-walkthrough-en.md` |
| `docs/dataset-walkthrough-ja.md` | `docs/guides/dataset-walkthrough-ja.md` |

The English/Japanese pairs and their content were preserved. The Documentation
Hub now links to all six new paths; the two guide-to-walkthrough links remain
valid because those documents share the same directory.

## Reference and policy sync

- Updated the known NarrativeLine English and Japanese user-guide links to the
  new GitHub paths. Those were the only direct sibling-repository references
  found to the moved guide paths; the target guide paths were cleanly repaired.
- Recorded the adopted landing-zone names in the Documentation Plan:
  `guides`, `liaisonscape`, `narrativeline`, `hub`, `validator`, and `cross-app`.
  Only the six-guide cohort moved in this checkpoint; the other zones do not
  authorize bulk or filename-prefix-based moves.
- Kept `roadmap-history/` and `evidence/` responsibilities unchanged. No
  document-type taxonomy, `docs/research/`, redirect, duplicate compatibility
  file, or additional landing-zone directory was introduced.
- Session records still mention the old paths in the context of their original
  historical snapshots. Those are historical references, not live navigation,
  and were left intact. The earlier docs-wide audit likewise retains its
  original pre-decision assessment.

## Authority and scope

This is a physical navigation change only. It does not change guide meaning,
status, or authority; the guides remain informative. The Roadmap, normative
Core/Extension/schema documents, evidence ownership, and Roadmap History policy
are unchanged. No files outside this six-guide cohort were migrated.

## Validation

The migration checkpoint was checked for repository-local link integrity,
old-path references, and the standard E2R-SPEC validation gate. Exact command
results are recorded in the associated commit and handoff.
