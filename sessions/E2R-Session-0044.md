# E2R Session 0044 - NarrativeLine Modernization through NL-D3 Acceptance

Date: 2026-08-22

## Scope

This session recorded the completed NarrativeLine modernization checkpoints
from the accepted navigation foundation through NL-D3 Candidate Staging. It
also recorded the bounded LiaisonScape Header Home Link Parity checkpoint and
the foreign graph interoperability experiment. Application implementation was
performed only in the relevant application repositories; E2R Core and
Extension semantics were not changed.

## NarrativeLine navigation and state foundations

NL-0 Navigation / State Ownership Foundation was implemented and accepted:

- `6d5963e` — establish NarrativeLine navigation ownership;
- `749ebcd` — deduplicate NarrativeLine history entries; and
- e2r-spec acceptance `ca47d86`.

The accepted boundary keeps NarrativeLine-owned screen and context state in
Browser History while never storing or restoring Dataset content through
History. Same-screen selection uses replacement semantics, and foreign or
unknown History state is ignored.

NL-D1 Dataset Modification Baseline was implemented and accepted:

- `e389ba6` — add the Dataset modification baseline; and
- e2r-spec acceptance `6e76f21`.

`datasetModified` is derived from current Dataset content versus the accepted
or successful-export baseline. It is not a sticky flag. Reload recovers
Dataset content from localStorage but starts a new session baseline, so the
recovered Dataset is clean for the new session.

NL-D2 Pending Work Model was implemented and accepted:

- `6ae5479` — track NarrativeLine pending user work;
- `113720a` — stabilize Event Detail pending tracking;
- `ece57d8` — preserve the Coordinate Dataset modification baseline;
- `5ef26ea` — return Coordinate save status synchronously; and
- e2r-spec acceptance `360e53c`.

`pendingUserWork` is an independent aggregate of local pending sources. It
supports clean reversion and does not replace `datasetModified`. Browser Back
can still discard local form drafts when a screen unmounts; protection for
that loss path remains deferred.

## LiaisonScape Header Home Link Parity

The bounded LiaisonScape parity checkpoint was implemented as:

- `fa1bba4` — align Header Home navigation semantics.

The Workspace Header Home controls use native link semantics while preserving
the accepted LiaisonScape navigation and Dataset Replacement Safety behavior.
Repeated Home activation does not create redundant History entries. No
NarrativeLine or E2R specification change was required for this checkpoint.

## Foreign graph interoperability experiment

The bounded foreign graph experiment was recorded in e2r-spec commit
`4c3a77a` and
`docs/foreign-graph-coordinate-interop-experiment-result.md`.

A practical foreign graph JSON was converted to E2R Core objects and
`liaisonscape-graph` Coordinates. The experiment confirmed useful Core graph
interoperability and preservation of macro-level spatial clustering, while
intentionally leaving groups, presentation fields, manual routes, and
free-form writings unconverted.

The experiment remains an observation, not an Importer commitment or an
accepted generic Coordinate compatibility rule. The direct PDF experiment
was separately identified as a renderer limitation, not a LiaisonScape
routing failure.

## NL-D3 Candidate Staging

NL-D3 Candidate Staging was implemented through the following bounded
NarrativeLine commits:

- `03fb641` — stage NarrativeLine Dataset replacement candidates;
- `904fe9f` — preserve Dataset safety across invalid imports and History;
- `7f852e2` — keep Resume navigation baseline-neutral;
- `4f2f4de` — keep NarrativeLine Home navigation and actions in flow; and
- `70fa21d` — remove obsolete Timeline action bar spacing.

The formal acceptance record is e2r-spec commit `6f63a8d`:

`docs/narrativeline-modernization-nl-d3-acceptance.md`

The accepted NL-D3 architecture separates Dataset acquisition from active
Dataset acceptance using a short-lived application-level candidate:

```text
acquire -> parse / migrate / validate -> stage -> accept -> clear
```

Staging does not replace the active Dataset, update its baseline, change
`datasetModified`, or clear `pendingUserWork`. Acceptance replaces the active
Dataset and establishes its baseline. Invalid JSON, schema-invalid input, and
migration or validation failures do not create or accept a candidate.

Same-session Resume is baseline-neutral navigation back to the already active
Dataset. It is not a second acceptance operation. Ctrl+R / reload remains a
new-session recovery boundary under NL-D1.

## NL-D3 follow-up findings and resolutions

Manual acceptance found and resolved these bounded issues:

### Stale History Detail after Dataset replacement

Old History entries could restore an Event or Entity ID that was absent from
the current Dataset. `904fe9f` validates restored selection IDs against the
current Dataset and falls back stale Event Detail, Entity Detail, Entity
Picker, or Entity Create state to a safe Timeline state. Old Dataset content
is never restored.

### Invalid acquisition baseline reset

Invalid import handling could proceed based on the presence of a returned
Dataset instead of its validity. The import path now requires `isValid` before
candidate creation and acceptance. Invalid acquisition is a no-op for the
active Dataset and baseline.

### Resume baseline reset

Resume previously called the Dataset acceptance path and reset the baseline to
the current content. `7f852e2` made Resume a baseline-neutral Home-to-Timeline
navigation operation.

### Header Home full reload

The NarrativeLine Header Home link could perform a full reload. Recovery then
correctly followed the new-session baseline rule, but that was wrong for
same-session Home navigation. `4f2f4de` connects Header Home to App navigation
while preserving active Dataset content and baseline state.

### Timeline action bar layout

The Timeline action bar was moved from viewport-fixed placement to flow-level
sticky placement. The fixed-bar `padding-bottom: 88px` remained and caused
excessive bottom space. `70fa21d` removed the obsolete desktop and narrow
layout padding. Manual visual acceptance then passed for normal, narrow,
long-Timeline, Resume, and validation-error recovery paths.

## Final manual acceptance

The final user-provided NL-D3 manual results were PASS for:

- clean Dataset -> Sample;
- Dataset title edit and `datasetModified = true`;
- valid Dataset replacement;
- invalid JSON error with active Dataset, changed title, and dirty state
  preserved;
- schema-invalid Dataset error with the same preservation behavior;
- ordinary Timeline / Event Detail Back and Forward;
- stale History fallback after Dataset replacement;
- no Dataset rollback through Browser History;
- reload recovery with a new clean session baseline;
- same-session Resume with baseline-neutral behavior; and
- Timeline action bar visibility, natural height, no large bottom spacing, and
  no content overlap across the accepted visual cases.

## Verification

Final NarrativeLine verification at the NL-D3 checkpoint:

- `npm test`: 57 tests passed;
- `npm run lint`: PASS;
- `npm run build`: PASS; and
- `git diff --check`: PASS.

Final e2r-spec verification for the acceptance documentation:

- `npm run validate`: PASS; and
- `git diff --check`: PASS.

## Deferred work

The following work was explicitly not started or accepted by NL-D3:

- Replacement Confirmation Dialog;
- Cancel / Discard and Continue;
- Export and Continue;
- Export action matrix;
- `beforeunload`;
- Browser Back pending-work guard;
- Dataset Handoff `#datasetUrl=`;
- runtime fragment handling;
- generic importer behavior;
- Dataset identity/history snapshots; and
- localStorage redesign or pending-draft persistence.

NL-D3 is the candidate staging boundary only. It does not itself implement
replacement safety confirmation or destructive-navigation protection.

## Knowledge Candidate Check

The central `ai-knowledge/INDEX.md` was consulted for Browser navigation,
Dataset safety, recovery, application state, and export boundaries.

The results remain scoped to the NarrativeLine implementation and its
acceptance records. Existing scoped knowledge is sufficient; no new workspace
Decision, Hypothesis, or Playbook entry was created. The foreign graph
experiment remains a bounded e2r-spec research record, not a generic importer
decision.

## Repository and publication state

The NarrativeLine implementation checkpoints and the LiaisonScape parity
checkpoint remain local and unpushed. The e2r-spec acceptance commits also
remain local and unpushed. Existing untracked research and session files in
e2r-spec were preserved and were not included in these checkpoints.
