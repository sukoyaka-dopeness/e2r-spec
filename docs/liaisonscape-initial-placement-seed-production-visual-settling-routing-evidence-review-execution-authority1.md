# E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-REVIEW-EXECUTION-AUTHORITY1

Date: 2026-09-08

Status: `REVIEW EXECUTION AUTHORITY ESTABLISHED / FRESH12 REVIEW NOT STARTED`

## 1. Case and decision

`CASE 1 / DECISION A`: this checkpoint establishes the bounded authority to
perform a future Human Review over an already-generated Browser Evidence B
lineage. It does not perform Human Review, ranking, selection, formal PR-3
acceptance, publication, or any new Browser execution.

```text
REVIEW EXECUTION AUTHORITY = ESTABLISHED
CANONICAL REVIEW RESULT CONTRACT = VSR-REVIEW-RESULT-v1
CANONICAL REVIEW RESULT OWNER = e2r-spec
CANONICAL REVIEW RESULT PATH = docs/evidence/reviews/<review-result-id>.json
FRESH12 REVIEW = READY FOR A SEPARATE HUMAN-REVIEW CHECKPOINT
HUMAN REVIEW = NOT STARTED
RANKING = NOT STARTED
SELECTION = NONE
FORMAL PR-3 ACCEPTANCE = NOT PERFORMED
PUBLICATION = NOT PERFORMED
```

This is an application-evidence and acceptance-process contract. It does not
modify the E2R Core, an E2R Extension, Dataset semantics, or the immutable
fixture-role manifest. Earlier design and acquisition documents remain
historical records of checkpoints in which review was not authorized or was
not performed; they are not rewritten.

## 2. Authority reconciliation

The authority is additive to, and consistent with, the following existing
contracts:

| Contract | Existing authority | Use here |
| --- | --- | --- |
| `VSR-FIXTURE-v1` / `VSR-FIXTURE-AUTHORITY-v1` | `docs/evidence/visual-fixture-role-manifest-v1.json` | Resolve the committed fixture, structural fixture, role, locale, and raw hash. |
| `VSR-VISUAL-v1` | Visual settling/routing evidence design1 result, section 14 | Supply the eight observable criteria V-A through V-H and PASS/FAIL/INDETERMINATE semantics. |
| `VSR-REVIEW-v1` | Visual settling/routing evidence design1 result, section 26 | Supply the bounded reviewer form, evidence notes, severe-failure flag, and preference separation. |
| `VSR-PR3-v1` | Visual settling/routing evidence design1 result, section 31 | Remain a later completion decision; Human Review does not issue PR-3. |
| `PR3-V3-PARENT-REFERENCE-v1` | Browser Evidence B generated V3 results | Bind each review unit to the actual V3 evidence ID, V2 parent, packet, and screenshot. |
| `PR3-BROWSER-AUDIT-v1` | Fresh12 `audit-results.json` | Establish machine preflight eligibility only; it is not a Human Review judgment. |

The earlier documents' `NO VISUAL ACCEPTANCE EXECUTION`, `NO CANDIDATE
RANKING`, and `NO CANDIDATE SELECTION` boundaries applied to those earlier
design/acquisition checkpoints. This document supplies the missing future
execution authority without retroactively changing those results.

## 3. Scope boundary

This checkpoint establishes only the following:

1. a start gate for Human Review;
2. a canonical evidence identity binding;
3. a fixed review unit and grouping model;
4. the review-result schema, owner, path, and write-once semantics; and
5. separate boundaries for Human Review, ranking, selection, formal PR-3
   acceptance, and publication.

The following remain explicitly unauthorized in this checkpoint:

```text
PNG inspection for acceptance
candidate scoring
Human Review execution
ranking
selection
B1 or V3 rerun/resume/recapture
new Fresh lineage creation
evidence repair, re-render, re-index, or manifest mutation
formal PR-3 acceptance
publication, push, tag, release, deploy
```

## 4. Human Review start gate

Human Review may start only in a separately bounded checkpoint when all of the
following are true:

1. The review authority document and
   `schemas/evidence/visual-review-result-v1.schema.json` are present at the
   reviewed e2r-spec commit.
2. The target lineage is identified from its artifacts, not from a filename
   guess, and all target identity fields in section 5 are recorded.
3. The target's B1 and V3 terminal records, post-integrity audits, artifact
   index, packet/result/PNG cardinalities, and parent references pass their
   existing machine checks.
4. Every review unit has a successful V3 result, a matching packet, a matching
   screenshot, and a committed fixture-manifest binding.
5. A trustworthy visual inspection surface is available. Metadata, hashes,
   DOM values, and automated metrics cannot substitute for visual inspection.
6. The reviewer is instructed to use only `VSR-VISUAL-v1` criteria V-A..V-H,
   with candidate identity anonymized where practical.
7. No review result for the same target and review-result identity already
   exists. A partial or superseded result is not overwritten.

If any gate fails, the checkpoint records `Human Review = BLOCKED` and stops.
It must not repair or recapture the evidence.

## 5. Canonical Fresh12 target binding

The review result records all of the following under `evidenceTarget`:

```text
sourceRepository
sourceRepositoryCommit
artifactRoot
phaseRunId
finalPr3RunId
identityInputSha256
artifactIndex.path + sha256
protocolA.path + sha256
eligibleV2Set.path + sha256
runManifest.path + sha256
auditResults.path + sha256
v3ExecutionState.path + sha256
```

The paths are repository-relative references. Their bytes and hashes are
checked when the review starts. The review result is derived from those bytes;
it never changes them.

The authoritative per-unit identity is the tuple:

```text
candidate kind + candidateId + fixture manifest entry + presentationVariant
+ stage V3 + v3EvidenceId + V3 result/packet/screenshot references
```

The packet's fixture identity and the fixture-role manifest are authoritative
for fixture binding. The V3 result's `structuralFixtureId` is not used alone
to infer a fixture. This is required because the current baseline records use
`TA0/REP-0` and `REP_0` while their packet and parent references identify the
actual fixture.

No `replicate` axis is invented: the current Browser Evidence contract does
not define replicates. If a future run introduces replicates, that requires a
separate additive contract change.

## 6. Review unit and grouping

The review unit is one row for:

```text
candidate kind
candidateId
fixture manifest entry / structuralFixtureId
presentationVariant (en or ja)
stage = V3
criterion (V-A through V-H)
```

The review result stores one unit object per candidate/fixture/locale V3 cell,
containing the eight criterion rows. It must preserve actual `v3EvidenceId`
and hashed references to the V3 result, packet, and PNG.

Fresh12's current V3 set is interpreted as:

| Group | Cells | Review/ranking treatment |
| --- | ---: | --- |
| Research candidates (`TA2-DEG-W1-OP-v1`, `TA2-MOTIF-W1-OP-v1`, `TA3-FWD-W1-OP-v1`, `TA3-REV-W1-OP-v1`) | 64 | Primary Human Review scope; possible later ranking input. |
| `TA0/REP-0` current Product baseline | 16 | Separately labeled reference only; never a research candidate and never a ranking input. |

The 80-cell count is therefore a machine eligibility count, not a claim that
the baseline is a fifth research candidate. The 16 EN/JA fixture entries in
the frozen manifest represent eight structural fixtures; locale variants are
preserved as separate review cells. Human Review must not collapse locales or
declare all cells PASS from a subset unless a future authority explicitly
defines representative sampling.

## 7. Rubric and judgment semantics

The rubric identity is fixed as:

```text
visualContract = VSR-VISUAL-v1
reviewContract = VSR-REVIEW-v1
stage = V3
criteria = V-A, V-B, V-C, V-D, V-E, V-F, V-G, V-H
```

Each criterion row records exactly one of:

```text
PASS
FAIL
INDETERMINATE
```

It also records a short evidence note, an explicit severe-failure flag, and
references to the inspected artifacts. `INDETERMINATE` is not a pass. A
blocking severe failure or unresolved indeterminate condition blocks the
affected review unit and prevents a complete review result.

Preference is optional and separate from acceptance judgment. Only the
existing preference vocabulary is allowed:

```text
PREF-A
PREF-B
PREF-EQUIVALENT
PREF-INCOMPARABLE
```

There is no prettier/open-ended question, weighted score, majority selector,
fixture-win sum, or cross-fixture scalar score.

## 8. Review-result contract and ownership

The canonical structural schema is:

```text
schemas/evidence/visual-review-result-v1.schema.json
```

The canonical result path is:

```text
docs/evidence/reviews/<review-result-id>.json
```

The owner is `e2r-spec`, because the record is a specification-side derived
review and acceptance authority. It is not placed inside the Browser artifact
root and it does not alter `run-manifest.json`, `artifact-index.json`, PNGs,
packets, or results.

The contract identifier is `VSR-REVIEW-RESULT-v1`. A result is write-once:

- a completed or blocked result is never edited in place;
- a correction or new review creates a new result ID referencing the prior
  result as superseded;
- supersession does not mutate the referenced Browser Evidence; and
- a partial review is not presented as complete.

The JSON Schema provides structural validation. A future review checkpoint
must additionally perform semantic checks for duplicate units, complete
coverage against the authoritative eligible set, artifact hashes, fixture
role binding, status consistency, and the separation of baseline from
research candidates.

## 9. Ranking and selection boundaries

Human Review and ranking are separate checkpoints. This authority does not
authorize ranking. Ranking may begin only after a `COMPLETE` Human Review
result exists with no blocking or indeterminate required unit and after a
separate ranking authority defines its input and comparison semantics.

The current VSR contract forbids weighted scores, majority-vote selection,
cross-fixture scalar scores, and treating the baseline as a candidate. Thus
the review result fixes:

```text
ranking.status = NOT-STARTED
```

Selection is a further separate checkpoint after any authorized ranking. A
selection result, if ever authorized, must explicitly record selected
candidate(s), rationale, non-selected candidates, and material caveats. It
must also permit `NONE / NO ACCEPTABLE CANDIDATE`. No selection is produced by
this authority, and the review result fixes:

```text
selection.status = NONE
```

Formal PR-3 acceptance remains a later explicit checkpoint after the required
visual/settling/routing/label evidence matrix and any authorized review,
ranking, and selection prerequisites are satisfied. This document does not
grant PR-3 or release acceptance.

## 10. Fresh12 readiness result

Fresh12 was not changed by this checkpoint. The existing read-only evidence
state remains:

```text
B1 = 16/16 terminal success; B1 gate PASS
V3 = 80/80 terminal success; failures 0
reviewEligible = 80
V3 parent mismatches = 0
packet/result/PNG = 80/80/80
artifact index mismatches = 0
Human Review = NOT STARTED
ranking = NOT STARTED
selection = NONE
formal PR-3 acceptance = NOT PERFORMED
publication = NOT PERFORMED
```

These machine results establish eligibility for a future Human Review start
gate; they are not visual judgments. Fresh10 and Fresh11 remain preserved and
immutable. No review result instance is created for Fresh12 by this
checkpoint.

## 11. Validation and repository state

The schema is validated by
`scripts/validate-visual-review-result-schema.mjs`, which uses synthetic
structural cases only; those cases are not Fresh12 review results. The package
script is `npm run validate:visual-review-result`.

This checkpoint changes only e2r-spec authority documentation, the standalone
application-evidence schema, its focused schema validator, and the additive
Roadmap entry. Browser source and all generated or historical Browser
artifacts remain untouched. No `ai-knowledge` entry is promoted because this
is a repository-scoped process contract, not reusable debugging knowledge.

No push, tag, release, deploy, or publication is performed.
