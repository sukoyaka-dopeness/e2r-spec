# E2R-PUBLIC-SAMPLE-RIGHTS-PROVENANCE-AND-RELEASE-DECISION-RECONCILIATION1

- Date: 2026-09-17
- Classification: **PUBLIC SAMPLE RIGHTS/PROVENANCE REVIEW COMPLETE / HUMAN REVIEW ITEMS REMAIN**
- Predecessor: `E2R-INITIAL-PUBLIC-RELEASE-TRANSACTION-READINESS-DECISION1`

This is a documentation and decision reconciliation only. It does not certify
legal rights, change samples, or authorize release.

## Sample inventory and findings

| Candidate | Classification | Current EN/JA evidence | Copy/provenance status | Human decision |
|---|---|---|---|---|
| Apollo 11 | factual, project-authored | e2r-spec canonical pair; matching structure | NASA factual basis recorded; no concrete copied-prose indication found; translation method not fully recoverable | Confirm authority and bounded redistribution |
| Berlin Wall | factual, project-authored | NarrativeLine `src/sample` pair | factual references and adopted translation recorded; method not recoverable; no concrete copied-prose indication found | Confirm stewardship/rights or exclude temporarily |
| Titanic | factual, project-authored | e2r-spec canonical pair; matching structure | factual basis recorded but source record remains limited; no concrete copied-prose indication found | Confirm stewardship/rights or exclude temporarily |
| Lighthouse Restoration | fictional, project-created | e2r-spec canonical pair; LiaisonScape public mirror | project-created/adopted localization; no concrete copied-prose indication found | Confirm authority and mirror inclusion |
| Ashen Crown | fictional, project-created | e2r-spec canonical pair | project-created/adopted localization; no concrete copied-prose indication found | Confirm authority and inclusion |

The human policy is to treat all five as public sample candidates. That is an
inclusion-candidate policy, not final clearance. No sample text, translation,
provenance assertion, or Dataset schema was changed.

The bounded inspection found no concrete repository evidence of copied
third-party text, images, fonts, audio, or code in the reviewed sample paths.
This is not a comprehensive legal, plagiarism, or rights investigation. AI or
LLM use and training data were intentionally outside scope.

## Licensing and release impact

The accepted current direction is MIT for LiaisonScape and NarrativeLine.
LiaisonScape has MIT metadata, README statement, and root `LICENSE`.
NarrativeLine has an MIT README statement but no confirmed root `LICENSE`; the
human decision remains whether to require that artifact before release. No
license artifact was added. Validator and Hub were not expanded into this
decision. e2r-spec retains its role-based `LICENSE.md` and existing provenance
boundary.

All five sample families remain candidates, but none is cleared by Codex for
final publication. NarrativeLine's final public revision remains unselected;
accepted application workstreams remain closed. Exact release commits,
licensing policy, and steward confirmation remain human decisions.

## Reusable Knowledge

The repeatable process is recorded in
`ai-knowledge/playbooks/e2r-public-sample-rights-and-provenance-review.md` and
indexed from `ai-knowledge/INDEX.md`. It does not grant rights or certify
legal compliance.

## Next checkpoint

`BLOCKED ON HUMAN DECISION` for sample stewardship/rights, software licensing
artifact policy, and exact release revision selection. After approval, the
next bounded technical checkpoint is exact release-set preparation; it must
not broaden into sample editing, implementation, or public transaction.

## Validation and safety

- e2r-spec `npm.cmd run validate`: **PASS**.
- e2r-spec `git diff --check`: **PASS**; existing line-ending warning only.
- Exact sample inventory and current provenance/source comparison completed.
- No application source, runtime, test, schema, sample, translation, license
  artifact, package metadata, or release artifact changed.
- No existing dirty work was discarded or staged.
- No commit, push, tag, deploy, npm publication, GitHub Release, or public
  release was performed.

`PUBLIC SAMPLE RIGHTS/PROVENANCE REVIEW COMPLETE - HUMAN REVIEW ITEMS REMAIN`
