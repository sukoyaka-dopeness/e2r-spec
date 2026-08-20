# Dataset Replacement Safety Design

Date: 2026-08-18

Status: Design checkpoint; non-normative application editing-model guidance

## Scope

This document records the cross-application Dataset Replacement Safety policy
for NarrativeLine and LiaisonScape. It does not change the E2R Core, Extension
schemas, Dataset identity, or Dataset Handoff v0 transport semantics.

Dataset Replacement Safety is an application editing-model concern. It must
protect meaningful user work without treating screen navigation, application
session persistence, or browser download initiation as Dataset durability.

## D1. Independent design concepts

The policy uses three independent conceptual states:

```text
datasetModified
pendingUserWork
recoverableSessionState
```

Applications do not need to implement these as three literal booleans.
Detection remains application-specific.

`datasetModified` means that current in-memory Dataset content differs from the
current clean Dataset baseline. It concerns Dataset content only.

`pendingUserWork` means meaningful user-authored work not yet committed into
the current Dataset that would be lost by replacement or application exit.
Automatically derived state is not pending user work merely because it exists.

`recoverableSessionState` means session state that may allow some work to be
restored after interruption. It is independent of the other two concepts.

## D2. Dataset baseline lifecycle

A clean Dataset baseline is established when an application successfully
accepts a Dataset as the active editable Dataset, after its normal loading,
validation, migration, and open pipeline.

This includes:

- successful local file open;
- successful sample open;
- successful `datasetUrl` open;
- new Dataset creation.

The baseline is the accepted in-memory Dataset state, not the original raw
JSON bytes.

A successful explicit Export also refreshes the clean Dataset baseline to the
current in-memory Dataset state.

## D3. Export affects Dataset cleanliness only

On successful explicit Export:

```text
Dataset baseline = current in-memory Dataset
datasetModified = false
```

Export does not clear `pendingUserWork`. Pending work is resolved only when it
is committed into the Dataset or intentionally discarded. Export does not
change `recoverableSessionState`; a browser download is not proof of durable
filesystem storage.

## D4. Dataset replacement guard

The Dataset replacement guard is:

```text
datasetModified || pendingUserWork
```

When both values are false, replacement does not require loss protection. When
either is true, replacement may destroy meaningful user work and the safety
policy applies.

Dataset replacement operations are:

- Open local Dataset;
- Open Sample;
- New Dataset;
- future `datasetUrl` handoff;
- future Open URL.

Internal screen navigation—Home, Timeline, Event Detail, Entity Detail, and
Workspace—is not Dataset replacement. Selection, dialog visibility, zoom, pan,
and similar Application View State are also not Dataset replacement.

## D5. Recoverability does not bypass the guard

`recoverableSessionState` does not suppress Dataset replacement protection.
NarrativeLine's single `narrativeline.lastDataset` slot is partial session
recovery only; it is not a durable save, backup, history, or guaranteed
recovery mechanism. Replacement may overwrite it, and component-local drafts
are not stored there.

## Application-specific constraints

### LiaisonScape

`coordinatesDirty` is a valid but limited pending-work signal. It represents
user-dragged node positions not yet written into Dataset Coordinate data. It
must not become the complete Dataset dirty flag.

Automatic fallback placement is Derived application state and is not pending
user work by itself. The explicit Save Coordinates boundary remains important:
it distinguishes temporary graph geometry from intentionally adopted Dataset
Coordinate content. Other Dataset mutations and local dialog/numeric drafts
need separate detection.

### NarrativeLine

NarrativeLine writes the current Dataset to the single
`narrativeline.lastDataset` localStorage key. This is partial recoverable
session state only. It does not preserve component-local drafts and does not
establish durable export or revision history.

Startup localStorage resume is startup-state selection, not an ordinary
user-triggered Dataset replacement operation.

## D6. Replacement Confirmation UX

When the Dataset replacement guard is false, replacement proceeds without loss
protection. When it is true, confirmation occurs immediately before replacement.

### Case A: Dataset modified only

When `datasetModified = true` and `pendingUserWork = false`, the confirmation
offers Cancel, Discard and Continue, and Export and Continue. Export must
succeed before the baseline is refreshed and replacement proceeds. If Export
fails, replacement does not proceed.

### Case B: Pending user work only

When `datasetModified = false` and `pendingUserWork = true`, the confirmation
offers Cancel and Discard pending work and Continue. Export and Continue is not
offered because pending work has not been committed into the Dataset.

### Case C: Dataset modified and pending user work

When both values are true, the basic actions are Cancel and Discard work and
Continue. An additional Export Dataset action may be offered, but it must not
continue replacement. After successful Export, `datasetModified` is false,
`pendingUserWork` remains true, and the current Dataset remains active.

### General confirmation rules

- destructive actions name their consequence, such as Discard and Continue;
- confirmation occurs before replacement;
- the current Dataset is not replaced before the decision;
- replacement confirmation is separate from a Save dialog;
- the confirmation does not invent a pending-work commit mechanism;
- the scope is Open Dataset, Open Sample, New Dataset, future `datasetUrl`
  replacement, and future remote Dataset open;
- internal screen navigation is outside this confirmation scope.

## D7. Application Exit Protection

Application-exit loss risk is:

```text
exitLossRisk = datasetModified || pendingUserWork
```

Internal screen navigation—Home, Timeline, Event Detail, Entity Detail, and
Workspace—is neither Dataset replacement nor application exit and does not use
an exit guard merely because the screen changes.

Actual application exit includes reload, tab/window close, external navigation,
and Browser Back when it leaves the application document.

When `exitLossRisk` is true, conditional browser-native `beforeunload`
protection is applicable. It is not installed when false and is not used as a
custom replacement confirmation.

`recoverableSessionState` does not suppress exit protection. `beforeunload` is
only a loss-warning safety net; it is not autosave, durable save, recovery
persistence, or Dataset Export.

## Boundaries and non-goals

Application exit protection is related but distinct from Dataset replacement.
The exact policies are documented in D6 and D7 above.

This design document does not implement confirmation UI, button handlers, dirty
tracking, pending-work detectors, `beforeunload`, autosave, recovery history,
cloud persistence, accounts, content hashes, Provenance, lineage, merge,
composition, undo/redo, Coordinate autosave, a runtime library, or any Dataset
Handoff behavior.

## Consistency audit

The Core, philosophy, rationale, History Extension, Specification Extension,
application design principles, application recommendations, and Handoff v0
documents were reviewed.

No contradiction was found with Core or Extension responsibility boundaries.
The policy remains application guidance and does not add Dataset fields or
Extension semantics. It is consistent with the existing separation of Dataset
content, reusable Coordinates, Derived application state, and transient View
State.

The Handoff v0 document's earlier statement that Replacement Safety was still
an undecided design blocker is superseded by this D1-D7 checkpoint. Confirmation
UX and application-exit policy are documented here. LiaisonScape's accepted
implementation evidence is recorded separately in
`docs/dataset-replacement-safety-liaison-scape-implementation-result.md`;
NarrativeLine parity remains deferred.

## Checkpoint status

```text
Dataset Handoff v0 design: DOCUMENTED
Dataset Replacement Safety state audit: COMPLETE
Dataset Replacement Safety D1-D7: DOCUMENTED
Replacement Confirmation UX: DOCUMENTED
Application-exit policy: DOCUMENTED
Dataset Replacement Safety implementation: LiaisonScape D1-D7 ACCEPTED; NarrativeLine parity DEFERRED
Dataset Handoff v0 implementation: NOT STARTED
```
