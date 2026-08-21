# Dataset Replacement Safety — LiaisonScape Implementation Result

## Status

LiaisonScape D1–D7 implementation is complete and manually accepted.

Application checkpoint: `e2r-liaison-scape` commit
`79451ca43758a14195cf9f549d8785cb9415482a` (`feat: protect unsaved work on
page exit`).

Recorded: 2026-08-20.

This document records LiaisonScape application behavior. It does not add
behavior to the E2R Core or an E2R Extension.

```text
Foundation:          6264b99d57f4876bf3f3d4b1f0886e6153f7a262
Candidate Staging:   b95b8bfa749e800bdf8ea27dbacd9f13f6d74338
D6 Confirmation UI:  5a5123eaaf60638b49f2840b0c517c262089fb40
D7 beforeunload:     79451ca43758a14195cf9f549d8785cb9415482a
```

LiaisonScape verification at the D7 checkpoint:

- 174 tests passed;
- lint passed;
- build passed; and
- `git diff --check` passed.

## Ecosystem status

```text
LiaisonScape:       D1–D7 implemented and manually accepted
NarrativeLine:      implementation and parity deferred
Dataset Handoff:    prerequisite satisfied for LiaisonScape
```

Dataset Handoff v0 remains a design document. Its LiaisonScape implementation
is the next separate workstream; `datasetUrl` and Hub handoff are not included
in this checkpoint.

## Accepted conceptual model

The implementation preserves three independent concepts:

- `datasetModified`: current in-memory Dataset content differs from the clean
  accepted baseline;
- `pendingUserWork`: meaningful user-authored work is not yet represented in
  the current Dataset; and
- `recoverableSessionState`: possible session recovery state, independent of
  replacement and exit guards.

The replacement and document-exit loss risk is:

```text
datasetModified || pendingUserWork
```

`recoverableSessionState` does not suppress either guard.

## Dataset baseline and modification

LiaisonScape determines `datasetModified` by content equality between the
current in-memory Dataset and the clean accepted baseline. It does not use a
mutation-history flag.

The baseline is refreshed after:

- successful Dataset acceptance; and
- successful explicit Export.

Candidate staging, ordinary Dataset mutation, and Coordinate/Space migration
do not refresh the baseline merely because they occurred. Reverting Dataset
content to the accepted baseline therefore returns `datasetModified` to false.

## Pending user work

The accepted LiaisonScape pending-work sources are:

- unsaved Entity coordinates;
- explicit new-Entity placement not yet saved as Coordinate data;
- manual Relation routes;
- manual Relation labels;
- manual Node labels;
- meaningful Creation drafts;
- meaningful Entity Detail drafts; and
- meaningful Relation Detail drafts.

The following remain Derived or transient and are not pending user work by
themselves:

- automatic routing;
- automatic label placement;
- selection;
- hover and popover state;
- zoom and pan;
- transient Relation creation preview; and
- other derived presentation state.

`coordinatesDirty` remains the Coordinate pending-work signal. It is not the
Dataset-wide dirty flag.

## Silent-discard boundaries fixed before D6

Two existing loss paths were explicitly covered by the implementation and
tests:

1. Coordinate Draft and Linkscape-to-LiaisonScape Space migration preserves
   unsaved positions and their pending state instead of reloading stored
   coordinates over them.
2. View reset no longer acts as an implicit manual Relation-route reset.
   Returning a route to automatic placement remains an explicit Context Menu
   action.

These changes do not alter Coordinate schema, migration semantics, routing
algorithms, or label geometry.

## Candidate staging

Open local Dataset, Open Sample, and New Dataset converge on the same
replacement request path:

```text
candidate acquisition
    -> parse and validate
    -> valid candidate
    -> replacement safety decision
    -> clean: accept immediately
    -> unsafe: stage candidate
```

Invalid JSON and schema-invalid Dataset input does not create a replacement
candidate, does not accept a Dataset, and preserves the active Dataset,
pending work, and baseline. Only diagnostics or the error message change.

While a candidate is staged, a later Open, Sample, or New request is ignored.
The staged candidate is not silently overwritten, and the active Dataset and
pending work remain protected. A later refinement of the re-request UX is a
separate follow-up.

## D6 replacement action policy

### Clean

Replacement is accepted immediately without a confirmation dialog.

### Modified-only

The dialog offers:

- Cancel;
- Discard and Continue; and
- Export and Continue.

Export must succeed before the staged candidate is accepted. Export failure
does not accept the candidate.

### Pending-only

The dialog offers:

- Cancel; and
- Discard work and Continue.

Export and Continue is not offered because Export does not commit pending user
work into the Dataset.

### Modified-and-pending

The dialog offers:

- Cancel;
- Discard work and Continue; and
- Export Dataset.

Export Dataset exports the current Dataset, keeps the current Dataset active,
keeps the staged candidate, and keeps pending user work. Successful Export
clears `datasetModified`, so this state becomes pending-only.

Successful explicit Export never clears `pendingUserWork`.

## Replacement dialog evidence

The dedicated accessible dialog and its shared Home/Workspace rendering were
manually accepted for:

- modified-only, pending-only, and modified-and-pending action matrices;
- modified-and-pending → Export Dataset → pending-only;
- invalid JSON preservation;
- backdrop click as Cancel;
- Home-triggered replacement dialog display;
- staged Open/Sample/New protection;
- default export filename `e2r-dataset.json`;
- responsive replacement action layout;
- visible keyboard focus on the Home Open Dataset control;
- New Dataset → dialog → Cancel/Escape → initiating-trigger focus restoration;
- Open Dataset → file picker → dialog → Cancel → initiating-trigger focus
  restoration; and
- keyboard initial focus and focus containment behavior.

The action matrix, button meaning, order, and colors are unchanged by the
focus and layout follow-ups.

## D7 document-exit protection

LiaisonScape conditionally registers a browser-native `beforeunload` listener
only while:

```text
datasetModified || pendingUserWork
```

The listener uses the browser-native minimum behavior:

```text
event.preventDefault()
event.returnValue = ""
```

It is removed when the loss risk becomes false and during component cleanup.
It is not a custom replacement dialog, autosave, durable save, or recovery
mechanism.

Accepted browser evidence:

- clean Dataset → reload → no browser-native warning;
- modified-only → reload → warning;
- pending-only → reload → warning;
- modified-and-pending → successful Export with pending work remaining →
  warning remains;
- complete Dataset revert to the clean baseline → no warning;
- Workspace → Home internal navigation → no warning; and
- Home → Open → D6 replacement dialog rather than a beforeunload warning.

The exact native warning text and button labels remain browser-dependent.

## Design and responsibility boundary

The authoritative policy remains
[`dataset-replacement-safety-design.md`](dataset-replacement-safety-design.md).
This result document records implementation evidence and does not turn the
design document into an implementation log.

The implementation changes no Core or Extension schema, Dataset identity,
Coordinate schema, migration semantics, routing algorithm, label geometry, or
Layout persistence model.

## Dataset Handoff and roadmap consequence

Dataset Replacement Safety is now implemented and accepted for LiaisonScape,
so the LiaisonScape prerequisite in Dataset Handoff v0 is satisfied. The
LiaisonScape Dataset Handoff v0 implementation is now complete and manually
accepted, reusing the accepted replacement/open pipeline. Its implementation
result is recorded in
`docs/dataset-handoff-v0-liaison-scape-implementation-result.md`.

NarrativeLine has no D1–D7 parity checkpoint in this result and remains
deferred.

## Known follow-up and explicit non-goals

The following are outside this checkpoint:

- `datasetUrl`;
- Hub handoff;
- NarrativeLine parity;
- invalid Dataset error-message visibility improvements;
- Layout persistence;
- routing or label-geometry changes;
- Core or Extension schema changes; and
- production changes in NarrativeLine, Hub, or Validator.

Invalid Dataset error-message visibility remains a known UX follow-up and does
not change the accepted safety semantics.
