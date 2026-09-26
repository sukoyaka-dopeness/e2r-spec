# NarrativeLine Modernization NL-D1 Acceptance

Date: 2026-08-21

Status: ACCEPTED

This document records the bounded acceptance result for NarrativeLine's
Dataset Modification Baseline. It follows the accepted NL-0 navigation
foundation and does not accept pending-work modeling, candidate staging,
replacement confirmation, `beforeunload`, Dataset Handoff v0, or general
documentation synchronization.

## Purpose

NL-D1 determines whether the active Dataset differs from the Dataset content
that was accepted or last explicitly exported. `datasetModified` is derived
from Dataset content equality; it is not a mutable sticky flag.

## Accepted baseline model

NarrativeLine stores an accepted baseline representation for the active
Dataset. The current Dataset is serialized as JSON and compared with that
baseline.

The comparison includes Dataset content, including supported and preserved
unknown Dataset fields and Extensions. It excludes application state:

- current screen;
- Event or Entity selection;
- return context;
- dialog state;
- local form drafts;
- Coordinate Space selection;
- focus and scroll position;
- browser history state; and
- localStorage state.

The baseline uses the in-memory Dataset content. Export-only preparation, such
as adding a Specification Extension declaration to the serialized output,
does not become an in-memory Dataset modification.

## Dataset acceptance

The following operations establish a clean baseline immediately after their
Dataset becomes active:

- New Dataset;
- Local Open;
- Sample Dataset; and
- Resume Dataset.

Their resulting state is:

```text
datasetModified = false
```

## Dataset edits and revert-to-clean

Dataset content changes make the derived state modified. Covered mutation
boundaries include:

- Dataset title;
- Event save, creation, and deletion;
- Entity creation, save, and deletion;
- Relation creation and removal; and
- saved Coordinate updates.

If the Dataset content is subsequently returned to the accepted baseline,
`datasetModified` becomes `false` again. For example:

```text
title: "" -> "Test" -> ""
false       true       false
```

This equality-derived behavior is accepted instead of a permanently sticky
dirty flag.

## Export semantics

When explicit Export succeeds, the current in-memory Dataset becomes the new
accepted baseline and `datasetModified` becomes `false`.

Validation failure and serialization failure do not update the baseline. A
successful export preparation may add output-only specification declarations,
but the baseline remains based on the current in-memory Dataset.

After a successful Export, a subsequent Dataset edit makes
`datasetModified = true` again.

## New Event boundary

`Add Event` inserts the new Event object into the Dataset, so it makes
`datasetModified = true`. The existing `draftEventId` behavior remains an
application draft boundary, but NL-D1 does not define pending-user-work
semantics.

If the draft Event is canceled and the Dataset returns exactly to its accepted
baseline, `datasetModified` returns to `false`.

Pending work represented by local Event Detail fields is deferred to NL-D2.

## localStorage and reload

`narrativeline.lastDataset` remains recoverable Dataset content, not a
persistent modification baseline.

On startup, the recovered Dataset becomes the newly initialized active
Dataset and its current content becomes the new session baseline. Therefore
the accepted NL-D1 behavior is:

- edited Dataset content survives reload through localStorage;
- dirty-state persistence across reload is not provided; and
- the recovered Dataset starts with `datasetModified = false`.

This does not mean recovery eliminates loss risk. The relationship between
recovery and dirty-state persistence is deferred to Dataset Replacement Safety
design.

## Browser History boundary

The accepted NL-0 Browser Back / Forward implementation does not replace the
Dataset, update the baseline, or clear `datasetModified`. Screen and context
navigation remain separate from Dataset modification tracking.

## Manual acceptance

The following cases were accepted:

1. New, Sample, existing Open, and Resume acceptance produce `false`.
2. Dataset title edit produces `true`.
3. Reverting the title to its baseline produces `false`.
4. Event edit/save produces `true`.
5. Successful Export produces `false`.
6. Editing again after Export produces `true`.
7. Add Event followed by draft discard returns to the baseline and produces
   `false`.
8. Home navigation and Browser Back / Forward preserve the modified state.
9. Reload preserves edited Dataset content through localStorage.
10. Reload initializes the recovered Dataset as a new clean baseline.

## Automated verification

The accepted implementation passed:

- 50 tests;
- lint;
- production build; and
- `git diff --check`.

## Implementation checkpoint

- NarrativeLine: `e389ba6` — `feat: add NarrativeLine Dataset modification baseline`.

The checkpoint remains local and unpushed. NarrativeLine was clean at
acceptance.

## Documentation boundary

The known mismatch where `docs/MVP.md` describes Hour / Minute / Second as
Deferred while the current implementation supports them remains open. This
NL-D1 acceptance record does not correct that drift or synchronize general
NarrativeLine documentation.

## Next stage

The next modernization stage is:

`NL-D2 Pending Work Model`

NL-D2 has not been implemented or accepted by this document.
