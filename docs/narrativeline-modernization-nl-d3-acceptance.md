# NarrativeLine Modernization NL-D3 Acceptance

Date: 2026-08-22

Status: ACCEPTED

This document records the formal acceptance of NarrativeLine's bounded NL-D3
Candidate Staging checkpoint. It follows the accepted NL-0 navigation
foundation, NL-D1 Dataset Modification Baseline, and NL-D2 Pending Work Model.

NL-D3 separates Dataset acquisition from active Dataset acceptance. It does
not accept Replacement Confirmation UI, `beforeunload`, pending-work
navigation protection, Dataset Handoff, or a Dataset identity/history
snapshot mechanism.

## Scope and boundary

NL-D3 introduces a short-lived application-level candidate boundary for a
Dataset that may replace the active Dataset. Staging a candidate does not by
itself replace the active Dataset, change its accepted baseline, or clear
pending user work.

The candidate is not stored in Browser History, localStorage recovery state,
or the E2R Dataset. It is an application replacement-staging object, not a
Dataset identity and not a second source of truth.

## Accepted model

The implementation represents a candidate as:

```ts
type DatasetCandidateSource = "new" | "local" | "sample" | "resume";

interface DatasetCandidate {
  dataset: Dataset;
  source: DatasetCandidateSource;
}
```

The accepted lifecycle is:

```text
acquire
  -> parse / migrate / validate
  -> stage candidate
  -> accept candidate
  -> replace active Dataset and baseline
  -> clear candidate
```

For the current immediate-accept UX, valid New, Local Open, and Sample
acquisitions pass through this lifecycle in one user action. The staging
boundary remains explicit and independently testable for later replacement
safety work.

Same-session Resume is intentionally different: it navigates from Home back
to the already active Dataset without re-accepting it or changing its
baseline. A reload is a new session and follows the accepted NL-D1 recovery
semantics instead.

## Active Dataset and candidate ownership

The active Dataset remains the Dataset being edited in Timeline and Event
Detail. It is the only Dataset used for ordinary editing and baseline
comparison.

While a candidate is staged:

- the active Dataset is unchanged;
- the accepted baseline is unchanged;
- `datasetModified` is unchanged;
- `pendingUserWork` is unchanged; and
- the candidate is not persisted as Dataset content or recovery state.

On successful acceptance:

- the candidate becomes the active Dataset;
- the accepted baseline is set to the accepted Dataset content;
- `datasetModified` becomes `false`; and
- the candidate is cleared.

Clearing a candidate leaves both the active Dataset and its baseline
unchanged. Invalid acquisition results do not create a candidate.

## Acquisition and failure safety

The following acquisition sources are covered by the candidate boundary:

- New Dataset;
- Local JSON Open;
- Sample Dataset; and
- same-session Resume navigation as a baseline-neutral return to the active
  Dataset.

Successful local acquisition performs parsing, migration, validation, and
then candidate acceptance. Invalid JSON, schema-invalid JSON, and migration
or validation failures do not accept a replacement. They preserve the
current active Dataset, its accepted baseline, its `datasetModified` state,
its pending-work state, and its current content.

Error presentation is separate from Dataset acceptance. Showing an import
error does not re-accept the current Dataset and does not reset its baseline.

## Baseline lifecycle

The NL-D1 baseline changes only at an accepted Dataset boundary or after a
successful explicit Export.

It does not change for:

- Home navigation;
- Timeline navigation;
- same-session Resume;
- file-picker opening or cancellation;
- parse failure;
- schema validation failure;
- migration or validation failure;
- candidate staging; or
- candidate clearing.

The distinction between Resume and reload is accepted:

| Operation | Dataset content | Baseline result |
| --- | --- | --- |
| Home -> Resume | Same active Dataset | unchanged; dirty state preserved |
| Ctrl+R / reload | Recovered Dataset content | new session baseline; `datasetModified = false` |
| Valid replacement acceptance | Candidate becomes active | baseline becomes candidate; `datasetModified = false` |
| Invalid acquisition | Active Dataset unchanged | baseline unchanged |
| Successful Export | Active Dataset unchanged | current content becomes baseline |

## Browser History compatibility

NL-D3 does not store Dataset content or Dataset identity in Browser History.
The accepted NL-0 screen/context ownership remains in place.

After Dataset replacement, an old History entry may contain an Event or
Entity ID that is not present in the current Dataset. Restored selection IDs
are now checked against the current Dataset. A stale Event Detail, Entity
Detail, Entity Picker, or Entity Create state falls back to a safe Timeline
state instead of displaying a misleading missing-object detail or restoring
old Dataset content.

Ordinary Timeline / Event Detail Back and Forward behavior remains unchanged.
History restoration does not roll the active Dataset back.

## Timeline action bar follow-up

The Timeline action bar remains part of `TimelineScreen` and is rendered
independently of import warnings, Resume navigation, or Dataset state.

The visual follow-up corrected the layout boundary introduced when the bar
changed from viewport-fixed to flow-contained sticky positioning:

- the action bar remains sticky and visible in the flow;
- obsolete fixed-bar `padding-bottom: 88px` was removed from desktop and
  narrow layouts;
- Home and Add Event actions retain natural button padding;
- the action bar does not rely on the shared AppFrame footer; and
- Dataset, candidate, baseline, pending-work, and History behavior are not
  involved in the CSS fix.

## Manual acceptance

The following user-provided manual results were accepted:

1. Clean Dataset -> Sample opens a normal Timeline with
   `datasetModified = false`.
2. Dataset title edit and Apply produce `datasetModified = true`.
3. Valid replacement through Sample, New, or Local Open remains functional
   and establishes a clean accepted baseline.
4. Invalid JSON displays an error while preserving the active Dataset,
   changed title, and `datasetModified = true` through Home -> Resume.
5. Schema-invalid JSON displays a validation error while preserving the
   active Dataset, changed title, and `datasetModified = true` through Home
   -> Resume.
6. Ordinary Timeline -> Event Detail -> Browser Back / Forward restores one
   screen per navigation step.
7. Dataset replacement does not restore stale Event Detail content from the
   old Dataset; safe Timeline / Home navigation remains available.
8. Browser History does not roll the active Dataset back.
9. Reload recovers Dataset content and starts a new clean session baseline.
10. Same-session Resume is baseline-neutral and preserves dirty state.
11. Timeline action bar is visible in normal and narrow-height viewports, at
    the bottom of a long Timeline, after Resume, and after schema-invalid
    error recovery.
12. Timeline action bar has natural compact height, no obsolete large bottom
    space, and no content overlap.

## Automated verification

At the final implementation checkpoint:

- `npm test`: 57 tests passed;
- `npm run lint`: passed;
- `npm run build`: passed; and
- `git diff --check`: passed.

The e2r-spec validation gate for this acceptance document is run separately
before its documentation commit.

## Implementation checkpoints

- `03fb641` — `feat: stage NarrativeLine Dataset replacement candidates`;
- `904fe9f` — `fix: preserve Dataset safety across invalid imports and history`;
- `7f852e2` — `fix: keep resume navigation baseline-neutral`;
- `4f2f4de` — `fix: keep NarrativeLine home navigation and actions in flow`; and
- `70fa21d` — `fix: remove obsolete Timeline action bar spacing`.

These implementation commits remain local and unpushed. The acceptance
document is a separate e2r-spec checkpoint and does not amend them.

## Deferred safety layers

The following remain outside NL-D3 and are not accepted by this document:

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

## Knowledge Candidate Check

The central `ai-knowledge/INDEX.md` routing was checked for Dataset safety,
Browser navigation, recovery, and application-state guidance.

NL-D3 confirms the following within NarrativeLine: acquisition and acceptance
are separate boundaries; invalid acquisition is a baseline no-op; same-session
Resume differs from reload recovery; and restored object references must be
validated against the current Dataset.

These observations are implementation and acceptance evidence for one
application. Existing scoped Dataset Safety and navigation knowledge remains
the appropriate reference. No new workspace-wide knowledge entry or
Decision is created.

## Final acceptance status

NL-D3 Candidate Staging is formally ACCEPTED for the bounded scope described
above. The next workstream may address replacement confirmation and broader
Dataset Safety protection, but those layers are not part of this checkpoint.
