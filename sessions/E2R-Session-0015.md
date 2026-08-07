# E2R Session 0015

## Date

2026-08-05

## Summary

This session continued NarrativeLine development after completion of the
History Extension specification work.

The session implemented Entity Picker, automatic Event-to-Entity Relation
creation, shared UUID v7 generation, new Dataset creation, and persistent
Dataset identity. It also recorded application decisions concerning Relation
direction, duplicate Relations, same-name Entities, multi-Dataset identity,
dialogs, localized terminology, and future control placement.

No normative E2R Core or Extension requirements were changed in this session.

---

# Entity Picker

NarrativeLine now provides Entity Picker as a dedicated screen opened from
Event Detail.

Entity Picker allows a user to:

- select an existing Entity from the current Dataset
- create a new Entity explicitly
- return to Event Detail after selection or creation
- cancel without changing the Dataset

A dedicated screen was chosen instead of a dialog because the workflow combines
a collection, selection, creation, and likely future search or filtering. A
dialog remains more appropriate for brief subordinate tasks such as confirmation,
warning, or limited input.

The reusable UI criterion recorded for NarrativeLine is:

- use a screen for expandable workflows that benefit from the full viewport
- use a dialog for a brief task subordinate to the current screen
- when dialogs are introduced, provide focus management, keyboard dismissal,
  focus restoration, and protection from unintended background interaction

---

# Same-name Entities

Entity names are not identifiers.

NarrativeLine permits multiple Entities with the same name. It does not merge or
reject Entities automatically based on name equality. This is required for
historical datasets that may contain different people, organizations, places,
or other subjects with identical names.

Entity Picker displays the Core ID and available description to help distinguish
same-name candidates.

---

# Automatic Relation Creation

When a user associates an Entity with an Event, NarrativeLine automatically
creates a structural Relation.

Relations written by NarrativeLine use:

```text
sourceId = Event ID
targetId = Entity ID
```

This is an application writing convention, not a semantic interpretation of
the Relation direction. E2R Core Relations remain directed, while their exact
meaning belongs outside the Core.

NarrativeLine reads Event-to-Entity associations in either direction. Event
Detail, Entity Detail, and Entity Picker recognize both:

```text
Event -> Entity
Entity -> Event
```

If any direct Relation already connects the selected Event and Entity in either
direction, NarrativeLine does not create another structural Relation.

Existing multiple Relations are preserved. NarrativeLine does not delete,
merge, reverse, or rewrite Relations imported from other applications. When
multiple Relations connect the same Event and Entity, the related Entity or
Event is displayed once in the relevant list.

NarrativeLine does not assign an inferred semantic type or Extension to an
automatically generated Relation.

---

# Identifier Generation

UUID v7 generation was moved into a shared IdentifierService.

NarrativeLine now uses UUID v7 for newly created:

- Datasets
- Events
- Entities
- Relations

Before using a new Core Object ID, NarrativeLine checks Event, Entity, and
Relation IDs across the current Dataset. Existing and imported identifiers are
preserved.

Dataset identity is independent from Core Object identity. A Dataset ID and a
Core Object ID do not share a namespace.

---

# Dataset Creation and Identity

Home now distinguishes two operations:

- create a new empty Dataset
- open the onboarding sample Dataset

Neither operation requires initial input, so no creation dialog is used. Both
operations navigate directly to Timeline View and clear Event and Entity
selection.

A Dataset created by NarrativeLine has the following initial structure:

```json
{
  "metadata": {
    "specVersion": "1.0",
    "datasetId": "UUID-v7"
  },
  "events": [],
  "entities": [],
  "relations": []
}
```

The Dataset ID remains stable during ordinary editing. Creating another Dataset
generates another Dataset ID. The onboarding sample has a fixed Dataset ID.

The application model permits `metadata.datasetId` to be absent so that a future
import path can represent external Datasets without a persistent Dataset ID.
NarrativeLine-created Datasets always receive one.

An empty Dataset uses no Extension. NarrativeLine therefore does not write a
History Extension version or any other Extension version during Dataset
creation. `metadata.specVersion` and an Extension version declaration are
different concepts.

---

# Multiple Dataset Identity

Future simultaneous multi-Dataset handling should identify an open Core Object
using an application-qualified reference such as:

```text
(datasetKey, objectId)
```

Equal three-digit or otherwise local Core Object IDs in different Datasets are
not collisions. Applications should not rewrite those IDs merely because both
Datasets are open.

Core Relations resolve only within their owning Dataset. Entity Picker should
therefore select Entities only from the Dataset containing the edited Event.
Cross-Dataset references remain outside the E2R Core.

Combining Datasets is a separate merge operation. During a merge, lineage may
help distinguish an Object inherited from a common ancestor from two different
Objects created independently with the same local ID.

The existing Dataset Identity, Dataset Lineage, and Branch Evolution research
remains relevant to future merge and provenance work. A future Dataset
Provenance Extension may record direct parent versions, while a separate E2R
Dataset may describe a complete ecosystem-level lineage graph.

---

# UI Terminology and Localization

The preferred Japanese UI term for Entity is:

```text
関連対象
```

The intended explanation is:

```text
関連対象とは、できごとに関係する人物、組織、場所、物、文書、概念などです。
```

The English UI should retain `Entity` or `Entities`, with explanatory help for
non-technical users.

Japanese and English UI switching is deferred until after the MVP editing flow
is stable. Internal code and E2R specification terminology remain English.

The preferred future action labels are:

```text
変更を反映
JSONを書き出す
JSONを読み込む
変更せず戻る
```

Suggested English equivalents are:

```text
Apply changes
Export JSON
Import JSON
Cancel
```

These wording changes were discussed but not implemented in this session.

---

# Future Control Placement

NarrativeLine should eventually use consistent action placement across views.

The current direction is:

- place Back near the upper-left or consistent leading navigation position
- place the primary apply action consistently at the lower-right
- visually separate destructive actions from routine navigation and apply
  controls
- use the same location and wording for operations with the same meaning

The final control layout remains deferred. The eventual rule should be recorded
in `docs/ui-spec.md` as the application source of truth, with the deciding
session retaining its rationale.

---

# Current History Extension Boundary

NarrativeLine still stores Event dates in a temporary application field.

This field is not the interoperable History Extension representation. Before
JSON import and export are implemented, NarrativeLine should migrate date-only
editing and Timeline ordering to `extensions.history`.

The initial application step may support only:

- year
- month
- day
- omission of unknown finer fields

Clock, Time Zone, offset, UTC preview, reinterpretation, conversion, and
daylight-saving diagnostics may follow in later application stages.

---

# Documentation Synchronization

NarrativeLine `docs/MVP.md` was updated to distinguish the current implemented
scope from the target MVP and later work.

The current implementation now includes:

- new empty Dataset creation
- UUID v7 Dataset identity
- onboarding sample selection
- Event creation, editing, and deletion
- Entity editing
- Entity Picker
- existing and new Entity association
- automatic structural Relation generation
- bidirectional association lookup
- in-memory Dataset editing

Still deferred are:

- direct Relation editing
- removing an Entity association
- Entity deletion UI
- History Extension editing
- Core Dataset validation
- JSON import and export
- multiple simultaneous Datasets
- Japanese and English UI switching

---

# Files Added or Updated

NarrativeLine implementation and documentation work affected:

- `src/App.tsx`
- `src/models/Dataset.ts`
- `src/sample/sampleDataset.ts`
- `src/screens/EntityDetailScreen.tsx`
- `src/screens/EntityPickerScreen.tsx`
- `src/screens/EventDetailScreen.tsx`
- `src/screens/HomeScreen.tsx`
- `src/services/DatasetService.ts`
- `src/services/EntityService.ts`
- `src/services/EventService.ts`
- `src/services/IdentifierService.ts`
- `src/state/AppState.ts`
- `docs/architecture.md`
- `docs/editing-model.md`
- `docs/MVP.md`
- `docs/services.md`
- `docs/state-machine.md`
- `docs/state.md`
- `docs/ui-spec.md`

This E2R-SPEC session record was added as:

- `sessions/E2R-Session-0015.md`

---

# Validation

NarrativeLine validation completed successfully after the implementation work:

```text
npm.cmd run build
npm.cmd run lint
```

Direct UUID generation checks confirmed that generated Dataset IDs:

- match UUID v7 syntax
- differ across consecutive generations

---

# Outcome

Entity Picker, automatic structural Relation generation, and new Dataset
creation with persistent UUID v7 identity are complete for the current
NarrativeLine scope.

The next high-priority implementation task is to replace the temporary Event
date field with a History Extension-compatible date-only representation before
introducing JSON import and export.
