# E2R Session 0108 — Cross-app diagnostics and warning UX audit

Date: 2026-10-26 JST

Repositories inspected: `e2r-hub`, `e2r-narrative-line`, `e2r-liaison-scape`, `e2r-parameter-plotter`, `e2r-validator`, `e2r-spec`, and scoped `ai-knowledge` guidance.

## Session identity and authority

Objective: audit user-facing error, warning, Diagnostics, refusal, recovery, and display-lifetime behavior in the four E2R applications; assess the feasibility of a separate Repair and Export feature; prepare a cross-app UX proposal for Human decision. This record is a historical checkpoint. The [Roadmap](../../docs/roadmap.md) remains the current planning authority, and the [dedicated audit](../../docs/cross-app/cross-app-diagnostics-warning-ux-audit-2026-10-26.md) carries the detailed ledger, source references, limitations, proposals, and Human gates.

Status at this checkpoint: **LOCAL AUDIT DOCUMENTED / FOCUSED AUTOMATED TESTS PASS / HUMAN DESIGN DECISIONS PENDING / NO IMPLEMENTATION OR PUBLICATION**. The proposed common UX principles and Repair and Export study are not adopted decisions.

## Evidence examined

The inspected local HEADs were Hub `15176dc9`, NarrativeLine `bb38fa90`, LiaisonScape `2cce17d4`, ParameterPlotter `0f54693c`, Validator `655954d3`, and E2R-SPEC `e7b40cc7`. The audit read the message and state-transition paths, related tests, Validator diagnostic contract and source, Core unknown-data rules, Dataset Replacement and cross-context safety records, LiaisonScape Dimension Assessment recognition decision, and scoped workspace knowledge. It distinguished technical Validator diagnostics from ordinary user notices and did not infer a repair from a warning's disappearance.

Focused existing tests passed: Hub UI/Handoff `6/6`; NarrativeLine validation/acquisition/localization/cross-tab `58/58`; LiaisonScape UI/replacement/export `73/73`; ParameterPlotter notification/save/safety/Handoff `20/20`. All four test processes exited successfully. The LiaisonScape DOM run also printed React/jsdom `attachEvent`/`detachEvent` exceptions; this output was not treated as a real-browser observation or a proven production defect. E2R-SPEC `npm.cmd run validate` passed. The audit document passed strict UTF-8 reading, local-link existence and whitespace checks. No real browser, live network-failure scenario, user Dataset, or exhaustive Validator-code matrix was tested in this session.

## Bounded findings

- NarrativeLine assigns an imported candidate's warnings before replacement acceptance and does not clear them on Cancel. The Timeline renders `importWarnings` without a candidate/current distinction. This is a source-confirmed warning-ownership path; an isolated browser/DOM reproduction remains to be done before selecting a fix. Separate import-context and failed-Export message lifetime risks also need reproduction.
- LiaisonScape's Current Dataset Diagnostics re-evaluation after committed changes remains within the existing bounded D2 Closure. Operation-specific Diagnostics lifetime and candidate-dialog code/path readability remain separate OPEN matters. The latter was previously Human-observed. Validator `0.7.0` and Lighthouse JA's two technical warnings remain unchanged.
- ParameterPlotter keeps persistence degradation separate from transient operation notices, but notices can clear on a later interaction; whether important recovery guidance disappears too early needs browser review. Its diagnostic-read-only and unsupported-Candidate states cannot be given a generic in-app repair instruction.
- Hub creates recipient Handoff/navigation URLs but does not parse or validate Datasets. Recipient retrieval and validation failures are owned by the destination application; Hub cannot claim Handoff success.
- Across the applications, raw Validator code/path often provides technical specificity without an actionable user explanation. Suggested actions must be tied to a verified cause and actual application capability.

The Validator returns diagnostics, not a repaired Dataset. No generally safe automatic correction for an invalid Dataset was established. The audit classifies Human-choice repairs, missing-information cases, data to preserve, and transformations that risk loss or meaning change. An independent Repair and Export design remains only a proposal; the original, active Workspace, and ordinary Export semantics must not be silently changed.

## Decision handoff and local state

The Human gates are: **A** adoption or revision of cross-app warning UX principles; **B** classification and lifetime ownership of current-Dataset, candidate, operation, draft, and persistence messages; **C** first bounded app/problem to repair; **D** whether to begin a separate Repair and Export design study; and **E** whether to Commit or Push the audit Documentation. The audit recommends first reproducing NarrativeLine's candidate-warning ownership path, then choosing its correction; the LiaisonScape OPEN items remain independent follow-ups.

The only new E2R-SPEC artifact owned by this Session is this log. The detailed audit document is also local and untracked from the preceding audit turn. The pre-existing untracked `docs/release-governance/parameterplotter-first-public-release-readiness-audit-2026-10-20.md` and `sessions/0100-0199/E2R-Session-0106.md` were preserved. LiaisonScape's three pre-existing untracked items were preserved. No application Runtime, test, Dataset, Validator, schema, Roadmap, or other repository file was changed. Nothing was staged or committed; no Push, release, or deployment occurred. Existing Human Acceptances and published release closures were not reopened or expanded.
