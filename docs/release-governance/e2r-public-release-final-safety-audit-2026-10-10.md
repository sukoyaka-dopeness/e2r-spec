# E2R Public Release Final Safety Audit — 2026-10-10

## Disposition

**NO-GO for publishing the current ParameterPlotter Startup Handoff implementation.** A reproducible cross-tab data-loss case was observed in an isolated real browser. The audit found no other critical issue in the bounded checks below, but this failure is sufficient to block the coordinated public release proposal until a safe behavior is selected, implemented, and verified. This finding does not change any previous bounded Human Acceptance record.

This is a pre-publication audit only. No push, tag, release, deployment, publication, Pages setting, or production Actions variable was changed. Candidate Dimension Assessment 0.2.0 remains non-Stable. A future GO recommendation will not itself authorize publication.

## Audited source and exact push ranges

The local `origin/main` tracking refs were compared with the live remote `main` refs using read-only `git ls-remote`. At audit time, each remote ref matched its local tracking ref; each listed range is the commits that a fast-forward push of the current local `main` would add. These ranges are evidence snapshots, not authorization to push.

| Repository | Remote base | Local `main` tip | Commits | Files changed in range | Audit scope |
|---|---|---|---:|---:|---|
| e2r-spec | `5239004330214c731edd6e96f17e9fd8bf514881` | `592df62d4b3adfdd03c05510caa3e807dab16e45` | 28 | 32 | Candidate 0.2.0 specification/validation support, canonical Ashen Crown and Lighthouse datasets, provenance and supporting records |
| e2r-narrative-line | `eb583720df89797a1acf682b5cea747bc25e0cc6` | `f495810244a2f33d06d46fe984d15c1f74a7917f` | 5 | 17 | Cedar EN/JA sample and related accepted application/documentation changes |
| e2r-liaison-scape | `b93e9762ca2baa7e29d0dac4b99bb27970f4b618` | `02003efac11a4476c013d6c86adf7c8dacb6e6ce` | 4 | 6 | Accepted More-menu alignment and Lighthouse EN/JA distribution mirrors |
| e2r-parameter-plotter | `785e70177975d682ce0e97bb97636f978d6362f2` | `d4a054ea5cfeda1374b97b1a38fb339a3be7f9d1` | 66 | 116 | Application, Candidate 0.2.0 support, startup Handoff, user guides, and Pages deployment preparation |
| e2r-hub | `a588cb9342064ec21d1de21cab466bcaac97beab` | `157968cdf7709052007c08d5380dc1f0fa4da7c1` | 6 | 14 | Three-application Hub, sample links, Handoff links, guide links, and production configuration |
| ai-knowledge | `b060bbaeb0d9a49341663d45c56af23227ef8842` | `6837a4d9585524058a91371150de8ffd6a9ffcac` | 15 | 20 | Shared process/research knowledge; not a direct runtime or deployment dependency |

The five product repositories had no `git diff --check` errors across their proposed ranges. The Knowledge range had one trailing blank line at EOF in a committed file; it is not part of the product deployment and is not recommended for the coordinated application publication. No history rewrite or repair is recommended. Recheck remote refs and the exact ranges immediately before any separately authorized push.

## Secret, fixture, licensing, and Dataset review

A bounded pattern scan of the proposed application/specification commit ranges found no private-key markers, common GitHub/AWS credential patterns, credential assignments, suspicious credential files, or unexpected secret-like paths. The only URL-credentials match is an intentional Hub test fixture (`https://user:secret@example.test/plotter`) used to verify rejection of embedded URL credentials. No `gitleaks` or `trufflehog` executable was available; this is not a security certification.

The ParameterPlotter `.github/FUNDING.yml` is untracked and is **not** in the proposed commit range. Development/test fixtures inspected in the ranges were intentional, including the Hub’s local-only Ashen fixture server; it is not configured as a production data source. No unexpected fixture or experimental path was found in the listed committed ranges during this bounded review.

Dataset ownership and distribution remained consistent with existing records:

- Lighthouse EN/JA canonical source: E2R-SPEC; LiaisonScape `public/` copies are distribution mirrors.
- Cedar EN/JA source: NarrativeLine.
- The Ashen Crown EN/JA canonical source: E2R-SPEC; ParameterPlotter’s English bundled sample matches its canonical source per the existing synchronization record.
- Lighthouse: 10 Entities, 11 Events, 28 Relations, 5 Dimensions, 31 Assessments.
- Cedar: 6 Entities, 12 Events, 28 Relations, 4 Dimensions, 15 Assessments.
- The Ashen Crown: 10 Entities, 12 Events, 57 Relations, 7 Dimensions, 70 Assessments.

Existing provenance records identify the qualitative assessments as AI-authored fictional interpretation adopted by a Human on 2026-10-09, not values mechanically derived from Core facts or external factual evaluations. EN/JA identity and score parity are maintained. Candidate 0.2.0 remains non-Stable. The bounded source/provenance review found no concrete rights conflict or newly introduced long copied prose/assets. This is not legal advice or a grant of rights beyond the existing E2R sample policy; third-party material remains subject to the existing provenance/license boundaries.

The Production Validator 0.7.0 API reported all eight current sample/mirror files valid with zero diagnostics. E2R-SPEC validation also passed, including Candidate and JA-string checks.

## Replacement safety: release-blocking finding

### Reproduction

An isolated Chrome 154 profile and disposable localhost workspace were used; no Human browser profile or existing workspace was touched.

1. In one ParameterPlotter tab, create an empty disposable Dataset and open the Dimension Pool form.
2. Type `Disposable unsaved draft` into the new Dimension form without saving or cancelling it.
3. In a second tab, open a valid Startup Handoff URL for the bundled Ashen Crown EN sample.
4. Observe that the second tab loads Ashen Crown (10 entities) without a replacement dialog, while the shared browser-local workspace is replaced. The unsaved form text remains only in the first tab’s transient memory and is not represented in the newly persisted workspace.

The separate invalid-fetch case (`/not-a-dataset.json`) showed an error without a replacement prompt and preserved the existing persisted sample. This confirms that fetch failure handling worked in that tested path; it does not mitigate the cross-tab overwrite.

### Source-level explanation

ParameterPlotter’s `serializableWorkspace(s)` persists UI state such as `datasetModified`, but omits `pendingDraft`. `hydrate()` initializes `pendingDraft` to false. The loss-sensitive replacement guard checks the current tab’s in-memory pending draft and dataset state. A newly opened tab therefore cannot see an unsaved form draft in another tab. Hub’s Handoff opens a new tab, while same-origin tabs share `localStorage`; successful acquisition then writes over the shared workspace without asking the user in the first tab.

The existing same-tab tests and review evidence for saved Dataset changes, same-tab form drafts, Cancel, and failed fetches do not cover this cross-tab sequence. The earlier Human acceptance of direct Handoff display does not include it.

### Required decision before release

The current behavior conflicts with the stated replacement-safety goal. Do not publish the current Handoff implementation until this is resolved. A conservative option is to fail closed when another ParameterPlotter tab has loss-sensitive work, directing the user to save or cancel there before retrying. A cross-tab discard-confirmation protocol is more complex and must also prevent stale-tab saves from restoring overwritten state. Treating replacement protection as tab-local would leave the reproduced loss risk and is not recommended.

This is a meaningful cross-tab safety/architecture choice. No runtime change was made in this audit. Human direction is required on the intended policy; after that, implement and test it, then obtain the appropriate Human Browser Review. Required cases include pending form drafts, saved-but-modified work, cancellation, stale-tab behavior, failed fetch/validation, and reload/history behavior.

## Build and automated validation evidence

| Repository | Result |
|---|---|
| e2r-spec | `npm.cmd run validate` PASS |
| e2r-validator | `npm.cmd run validate` PASS; 143 tests and 3 fixture tests PASS |
| e2r-parameter-plotter | `npm.cmd run check` PASS (35 application modules, 145/145 tests); `npm.cmd run build` PASS (57 static Pages files) |
| e2r-hub | `npm.cmd run lint` PASS; `npm.cmd run build` PASS |
| e2r-narrative-line | `npm.cmd run test` PASS (350/350); lint and build PASS |
| e2r-liaison-scape | lint/build PASS; first full test run had one transient 1 ms timing failure; focused rerun passed 3/3 and full rerun passed 658/658 |

The LiaisonScape test logs included non-failing React/jsdom `attachEvent`/`detachEvent` diagnostics. The transient timing failure was resolved on immediate rerun and is reported rather than hidden.

## Browser evidence and remaining Human review

Codex’s real-browser evidence is the isolated Chrome reproduction above and the invalid-fetch preservation check. The CUA computer-use initialization failed in this environment; this was an automation-environment limitation, not an application result. No Human Browser Acceptance is claimed for the cross-tab case.

Prior Human evidence remains bounded: direct Handoff display for Lighthouse EN/JA and Cedar EN/JA; prior bounded sample/UI acceptances; and locale Recipient-Preference audit. It does not cover the new cross-tab loss scenario, production Pages URLs, or production CORS. Human review is required after remediation, not as a substitute for resolving the known loss path.

## Pages, Hub configuration, and push-triggered effects

- E2R-SPEC has no Pages deployment workflow; pushing updates canonical Raw-file revisions.
- ParameterPlotter’s `deploy-pages.yml` runs on `main` push or manual dispatch, runs `npm run check && npm run build`, and deploys Pages. Expected URL: `https://sukoyaka-dopeness.github.io/e2r-parameter-plotter/`. Pages source/environment settings were not readable in this audit.
- Hub’s Pages workflow runs on `main` push or manual dispatch and runs install, lint, build, and Pages deployment. Its ParameterPlotter URL is configured in source. Ashen EN/JA URLs use `vars.E2R_ASHEN_CROWN_DATASET_EN_URL` and `vars.E2R_ASHEN_CROWN_DATASET_JA_URL`; production Actions variables could not be inspected here and were not changed.
- NarrativeLine and LiaisonScape each have `main`-push Pages workflows. Their E2R-SPEC checkout pins are test/source fixtures in the audited ranges and were not changed.
- Consequently, pushing `main` in ParameterPlotter, Hub, NarrativeLine, or LiaisonScape automatically starts that repository’s Pages workflow. E2R-SPEC does not deploy Pages. The Knowledge repository is not a direct app deployment dependency.
- Public HTTPS/CORS, current Raw revision content, Pages settings, post-deploy URL behavior, and the Hub Ashen variables can only be verified against GitHub configuration/live deployments. They were not claimed as verified and no settings were modified.

The expected publication sequence, if later separately approved, is to publish owner/source repositories first, verify the resulting public Raw URLs, then deploy ParameterPlotter, then configure/verify the approved Hub data URLs and deploy Hub. This sequence is operational guidance only, not authorization to act.

## Guides, Knowledge, and worktree state

ParameterPlotter EN/JA guide links point to repository Markdown paths and will be usable publicly once the corresponding source is pushed. The repository contains both guide files.

Applied Knowledge:

- `decisions/dataset-acquisition-entry-point-alignment.md` — used as bounded context for distinguishing startup acquisition from in-app replacement, without changing the product contract.
- `playbooks/e2r-public-sample-rights-and-provenance-review.md` — checked owner, source/mirror, locale, rights/provenance, and post-publication URL boundaries; it does not certify rights.
- `playbooks/e2r-user-guide-writing.md` — treated guides as descriptions of the current implementation.
- `playbooks/e2r-edge-cdp-browser-diagnostic.md` and its confirmation notes — informed the isolated real-browser diagnostic. The CUA failure was kept separate from application results.

No general Knowledge Decision was added. This report is the only file added by the audit; no runtime, Dataset, schema, workflow, Pages configuration, production variable, or Knowledge file was changed. Existing worktrees remain otherwise as found: E2R-SPEC has pre-existing staged/unstaged/untracked documentation and research work, including a large encoding-sensitive `docs/roadmap.md` diff; ParameterPlotter has untracked `.github/FUNDING.yml`; LiaisonScape and Knowledge have unrelated untracked/modified work; Hub and NarrativeLine were clean. No `.git/index.lock` was present in the checked repositories at the final status check. Do not fold these changes into a coordinated publication.

The current Roadmap was not modified because it has a substantial pre-existing dirty diff with visible encoding artifacts. Update its status/link only after that existing change is reviewed and safely separable. This report is the audit record; it does not silently overwrite or reinterpret the pending Roadmap work.

## Decision summary

- **Current coordinated public release: NO-GO.** The demonstrated cross-tab unsaved-draft overwrite is a concrete data-loss risk in ParameterPlotter Startup Handoff.
- **Required before reconsidering GO:** Human selects the cross-tab safety policy; the selected behavior is implemented and automatically verified; Human Browser Review confirms the formerly failing scenario and relevant recovery cases.
- **Post-publication checks:** Pages availability/settings, current public owner-file revisions, HTTPS/CORS, Handoff against live datasets, Hub Ashen EN/JA Actions variables, and deployed user-guide links.
- **Separate approval boundary:** Even a future GO recommendation is not authorization to push, deploy, publish, alter GitHub settings, or change production Actions variables.
