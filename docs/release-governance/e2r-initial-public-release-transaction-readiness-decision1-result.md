# E2R-INITIAL-PUBLIC-RELEASE-TRANSACTION-READINESS-DECISION1

- Date: 2026-09-17
- Classification: **A. TRANSACTION READINESS DECISIONS PREPARED / HUMAN APPROVAL REQUIRED**
- Predecessor: `E2R-INITIAL-PUBLIC-RELEASE-REMAINING-GATES-RECONCILIATION1`

This is a read-only decision record. It does not select a release set, grant
licensing rights, authorize public publication, or perform any release write.

## Candidate revisions

| Repository | Candidate revision | Current relation | Decision status |
|---|---|---|---|
| e2r-spec | `ecf321673d8bff173881234469351ebbc447f1ed` | `main`, 221 ahead of local `origin/main`; docs/session/work dirty | **Human selection required** |
| e2r-validator | `40c820a6345ef98e256984ad5246aae9c73338e8` | `main`, clean; published `0.4.0` | Candidate for already-published validator baseline |
| e2r-hub | `9de639990396c95e48d6cad37f027c21c4de1962` | `main`, clean; private `0.0.0` | **Human release/version decision required** |
| e2r-narrative-line | `a525d2ec3d25c2ab3c1e2d286ca37bd6529784e5` | `main`, existing dirty `AGENTS.md` and documentation work; private `0.1.0` | **Human selection/exclusion decision required** |
| e2r-liaison-scape | `e6a66dfecc3187e2be895c960eb3ff7804f1bb69` | `main`, existing research artifacts dirty; private `0.2.0` | **Human selection/exclusion decision required** |

Release-set options for e2r-spec are intentionally left open: release current
HEAD after an exact review, select an accepted committed subset, or create a
separate release-bookkeeping boundary. Codex does not choose among them.
Dirty files and local-only commits must not be silently included or discarded.

## Software licensing decision packet

| Repository | Current artifact evidence | Decision needed |
|---|---|---|
| e2r-spec | role-based `LICENSE.md`; CC BY/MIT/CC0 roles documented | Confirm this role-based policy is the public repository policy |
| e2r-validator | no root `LICENSE` artifact found; package is published `0.4.0` | Confirm MIT direction and whether a repository license artifact is required before release |
| e2r-hub | no root `LICENSE` artifact found; package is private `0.0.0` | Confirm MIT direction and artifact requirement |
| NarrativeLine | README says MIT; no root `LICENSE` artifact found; package private `0.1.0` | Confirm MIT direction and artifact requirement |
| LiaisonScape | `package.json` MIT, root `LICENSE`, README MIT | Existing evidence is aligned; confirm release authority |

Human decision choices are: approve the existing artifact/policy as sufficient,
require a repository-specific license artifact before release, or exclude the
repository from the initial release set. No license file or package metadata
was changed here.

## Public sample and translation packet

| Sample | Current evidence | Human decision |
|---|---|---|
| Berlin Wall | NarrativeLine EN/JA sample; factual project-authored dataset; provenance notes translation method not recoverable | Confirm stewardship/rights, include, or temporarily exclude |
| Titanic | e2r-spec EN/JA sample; factual project-authored dataset; dedicated source record still needed | Confirm stewardship/rights, include, or temporarily exclude |
| Apollo 11 | e2r-spec canonical EN/JA sample; NASA factual basis recorded | Confirm release authority and bounded redistribution scope |
| Lighthouse Restoration | fictional project-created EN/JA sample; LiaisonScape public mirror | Confirm project authority and mirror inclusion |
| Ashen Crown | fictional project-created EN/JA sample | Confirm project authority and inclusion |

The existing provenance record is evidence, not a substitute for the final
steward/rights decision. Samples and translations were not changed.

## Public URL and deployment readiness

Expected URLs from current Hub/application documentation:

- Hub: `https://sukoyaka-dopeness.github.io/e2r-hub/`
- NarrativeLine: `https://sukoyaka-dopeness.github.io/e2r-narrative-line/`
- LiaisonScape: `https://sukoyaka-dopeness.github.io/e2r-liaison-scape/`

GitHub Pages workflow files exist for all three web applications and expected
base paths are documented. Current deployed revisions and actual public URL
behavior could not be verified through the available read-only web access in
this checkpoint. Therefore public acceptance remains a later gate:
application links, sample URLs, EN/JA loading, and Handoff must be checked at
the deployed URLs after deployment.

## Human decisions required

1. Approve the software licensing posture per repository.
2. Approve or exclude each factual/adopted-translation sample candidate.
3. Select the exact revision set, including treatment of dirty work and local
   commits.
4. After those decisions, separately authorize any commit, push, tag, npm
   publication, deployment, or GitHub Release action.

No technical cleanup decision is substituted for these governance decisions.

## Next bounded checkpoint

`BLOCKED ON HUMAN DECISION` for any release-set or public transaction action.
The next bounded checkpoint is a human-decision response/reconciliation of
this packet. Once approved, a separate exact release-set preparation audit may
inspect selected revisions and run release gates; it must not broaden into
runtime implementation.

## Validation and safety

- e2r-validator test: **106/106 PASS**; fixture validation: **3/3 PASS**.
- e2r-hub test: **1/1 PASS**, lint/build PASS.
- NarrativeLine test: **222/222 PASS**, natural completion; lint/build PASS.
- LiaisonScape test: **636/636 PASS**, natural completion; lint/build PASS.
- e2r-spec `npm.cmd run validate`: **PASS**.
- No source, runtime, test, schema, sample, license, package metadata, or
  release artifact was changed.
- No Knowledge entry was added.
- No commit, push, tag, deploy, npm publication, GitHub Release, or public
  release was performed.

`TRANSACTION READINESS DECISIONS PREPARED - HUMAN APPROVAL REQUIRED`
