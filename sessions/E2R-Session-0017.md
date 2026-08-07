# E2R Session 0017

## Date

2026-08-05

## Summary

This session completed the first synchronization pass for the canonical Core
Dataset shape and the minimal Metadata Extension, then performed a read-only
cross-repository search across E2R-SPEC and NarrativeLine.

The remaining Coordinate, Layout, and Dictionary Extensions were not changed.
They were prepared as a separate design-review task for future work, with
explicit boundaries between logical coordinates, presentation layouts,
semantic dictionaries, Core structure, and application state.

---

# Canonical Core Dataset

The current canonical Dataset form is:

```json
{
  "version": "1.0",
  "entities": [],
  "events": [],
  "relations": [],
  "extensions": {}
}
```

The top-level `version` identifies the Core version. `entities`, `events`, and
`relations` are required arrays and may be empty. Dataset-level Extensions are
stored under `extensions.<name>`.

Core Object IDs are non-empty strings and must be unique across the Dataset.
Relations use required `sourceId` and `targetId` fields, resolve to an Entity
or Event in the same Dataset, and must not target another Relation. Self-
relations and cycles remain permitted by the Core.

The Core does not require a `type` field and does not assign domain meaning to
Entity, Event, or Relation fields beyond the minimum structural model.

---

# Metadata Extension

The Metadata Extension is outside the Core and is placed at
`extensions.metadata`.

Its minimal v1 fields are:

- optional `datasetId`
- optional `title`

No common `data` or `version` envelope was introduced. Unknown metadata fields
are ignored and preserved where practical. A missing `datasetId` is valid for
an imported Dataset; applications may assign one when creating a new Dataset.
The title is optional and is not Dataset identity.

Export filenames remain application state. Applications should prefer neutral
`.e2r.json` names and should not automatically append application or view terms
such as `NarrativeLine` or `Timeline`.

Synchronized documents include:

- `spec/core.md`
- `spec/rationale.md`
- `extensions/metadata-extension.md`
- `extensions/specification-extension.md`
- `extensions/README.md`
- `docs/application-recommendations.md`
- `docs/identifier.md`
- `schemas/README.md`
- the four complete Dataset examples in `examples/`

---

# NarrativeLine Synchronization

NarrativeLine was migrated to the canonical Dataset model:

- `Dataset` uses top-level `version`, required Core arrays, and optional
  `extensions.metadata`
- `CoreObject` is the shared structural base for Entity, Event, and Relation
- Relations use `sourceId` and `targetId`
- Dataset creation generates a UUID v7 `extensions.metadata.datasetId`
- imported Dataset identity is not silently regenerated
- application Dataset state is separate from navigation and selection state
- unknown fields and Extensions are preserved through supported updates where
  practical

NarrativeLine source and design documents were synchronized, including the
Dataset, state, service, architecture, editing-model, MVP, and state-machine
documents. `npm.cmd run build` and `npm.cmd run lint` passed after the source
changes.

---

# Cross-Repository Verification

The read-only search found no remaining structural use of:

- `metadata.specVersion`
- `DatasetMetadata`, `LegacyDataset`, or `CanonicalDataset`
- Relation `from` / `to` fields
- the old top-level Event `date` field in NarrativeLine code

The remaining historical terms are intentional documentation or session-log
references explaining migration behavior. `currentDataset` occurs only as a
local React callback parameter, and `currentDatasetList` is a future-state
example rather than an active state field.

The only stale normative documentation reference found was
`docs/identifier.md`, which was synchronized from `metadata.datasetId` to
`extensions.metadata.datasetId`.

No commits or pushes were performed. Existing user changes remain uncommitted.

---

# Next Design Task

Coordinate, Layout, and Dictionary Extensions should be reviewed separately
before editing their specification files.

Recommended order:

1. define the Coordinate/Layout boundary
2. decide the Coordinate Extension minimum model
3. decide the Layout Extension minimum model
4. decide the Dictionary Extension reference model
5. update one Extension document at a time
6. perform a final Core/History/Metadata cross-check

The intended boundaries are:

- Coordinate: logical position in a conceptual space
- Layout: interpretation and presentation rules
- Dictionary: reusable semantic meaning
- Application state: selection, zoom, scroll, panels, and temporary UI state
- Core: minimal self-contained Dataset structure

Linkscape-specific ideas should remain clearly marked as application
requirements or future proposals until they are proven to be interoperable
Extension requirements.

