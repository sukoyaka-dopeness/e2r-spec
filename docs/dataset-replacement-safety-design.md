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

## Boundaries and non-goals

Application exit protection is related but distinct. Reload, tab close,
navigation away, and browser history leaving the application are informed by
the same loss-risk concepts, but confirmation UX and the `beforeunload` policy
are not decided here.

This checkpoint does not define confirmation UI, button choices, autosave,
recovery history, cloud persistence, accounts, content hashes, Provenance,
lineage, merge, composition, undo/redo, Coordinate autosave, a runtime library,
or any implementation.

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
an undecided design blocker is superseded by this D1-D5 checkpoint. Confirmation
UX, application-exit policy, and implementation remain undecided or not
started.

## Checkpoint status

```text
Dataset Handoff v0 design: DOCUMENTED
Dataset Replacement Safety state audit: COMPLETE
Dataset Replacement Safety D1-D5: DOCUMENTED
Confirmation UX: NOT YET DECIDED
Application-exit policy: NOT YET DECIDED
Dataset Replacement Safety implementation: NOT STARTED
Dataset Handoff v0 implementation: NOT STARTED
```
