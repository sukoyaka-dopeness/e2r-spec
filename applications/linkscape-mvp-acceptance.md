# Linkscape MVP Acceptance Criteria

This document defines application-level acceptance criteria for the future
Linkscape MVP. It is not part of the E2R Core or any Extension specification.
The criteria can be implemented as automated tests after the `e2r-linkscape`
repository is created.

## MVP boundary

Linkscape is Entity-first. The MVP is a graph viewer and light editor for
Entity relationships. NarrativeLine remains the primary application for Event
editing and timeline presentation.

The MVP includes:

- Dataset import;
- Entity node display;
- Relation edge display;
- zoom and pan;
- Entity selection;
- Entity Detail opening;
- dragging Entity nodes; and
- intentional saving of user coordinates.

The MVP does not require Event editing, timeline presentation, semantic
Relation labels, graph clustering, or a standardized Layout Extension.

## Import acceptance criteria

### A1. Valid minimal Dataset

Given a valid Dataset with empty `entities`, `events`, and `relations` arrays,
Linkscape opens it without creating Core objects or coordinates in the Dataset.

### A2. Entity and Relation graph

Given a Dataset containing Entities and Relations with resolvable endpoints,
Linkscape displays each supported Entity as a node and each Relation as an
edge. A Relation is not displayed as a node.

### A3. Event endpoints

If a Relation has an Event endpoint, Linkscape must not treat that endpoint as
an Entity. The MVP may omit Event nodes from the graph or show them as an
explicitly unsupported object, but it must not silently convert them into
Entities.

### A4. Invalid input

Linkscape should distinguish a Core validation error from an unsupported
application feature. It should explain that a Dataset is invalid when Core
rules fail and should preserve the original input when it cannot open it.

### A5. Unknown Extensions

Unknown Extensions must not prevent a Core-valid Dataset from opening. When
the Dataset is saved, unknown Extension data should be preserved unchanged
whenever practical.

## Graph interaction acceptance criteria

### A6. Navigation

The user can zoom and pan without changing the Dataset JSON.

### A7. Entity selection

Selecting a node identifies the corresponding Entity by its Core `id` and can
open Entity Detail. Selection state is application state and is not serialized
into the Dataset.

### A8. Relation direction

When direction is shown, the visual direction follows `sourceId` to
`targetId`. The UI must not claim a semantic interpretation such as causality,
ownership, or chronology unless a supported Extension provides it.

### A9. Self-relations and multiple edges

The UI must not assume that self-relations or multiple Relations between the
same endpoints are impossible. If the MVP cannot edit or display one of these
cases clearly, it must report the limitation without rewriting the Dataset.

### A10. No Relation-to-Relation graph

The UI must never create or display a Relation-to-Relation connection as a
valid Core graph edge. The Core permits only Entity or Event endpoints.

## Coordinate and layout acceptance criteria

### A11. Stored coordinate priority

If a supported coordinate value exists for an object, Linkscape uses it as the
initial position and does not replace it with an automatic layout.

### A12. Missing coordinate fallback

If a coordinate is missing, Linkscape may generate an automatic position for
display. This generated position is temporary until the user intentionally
saves it.

### A13. No automatic Dataset mutation

Opening a Dataset or merely viewing an automatic layout must not change the
Dataset, its identifiers, or its Extensions.

### A14. Intentional save

When the user explicitly saves moved nodes, only the coordinate data owned by
Linkscape may be added or changed. Unrelated Core and Extension data must be
preserved.

### A15. Deterministic fallback

If deterministic automatic layout is implemented, opening the same Dataset in
the same application version should produce the same initial positions when
the relevant graph data has not changed. This is an implementation goal, not
an E2R interoperability requirement.

## Save and round-trip acceptance criteria

### A16. Core preservation

Importing and saving a Dataset must preserve Core object IDs, names, unknown
Core fields, and Relations that Linkscape does not edit.

### A17. Extension preservation

Recognized Extensions may be edited only when Linkscape explicitly supports
them. Unknown Extensions should survive an import-save-export round trip.

### A18. No view-state serialization

Zoom, pan, selection, open panels, temporary filters, and scroll position must
not be serialized as Core data. If a future application state format is added,
it must remain distinct from the interoperable Dataset.

### A19. Validator integration

Before export, Linkscape should be able to invoke the shared Validator or a
compatible validation layer. Validation errors should be shown separately from
unsupported Linkscape features. Validation does not repair the Dataset or
guarantee the truth of its content.

## Suggested fixture matrix

The first implementation can use these existing specification fixtures and a
small set of application fixtures:

| Fixture | Expected result |
| --- | --- |
| `examples/empty-dataset.json` | Opens with an empty graph |
| `examples/single-event.json` | Opens without inventing an Entity node |
| `examples/event-with-entity.json` | Shows the Entity and the supported Event relation according to the MVP policy |
| Dataset with two Entities and one Relation | Shows two nodes and one directed edge |
| Dataset with an unknown Extension | Opens and preserves the Extension on save |
| Dataset with stored coordinates | Restores stored positions |
| Dataset without coordinates | Displays an automatic, unsaved layout |
| Dataset with a self-relation | Does not reject it solely because it is self-referential |
| Dataset with a Relation endpoint that is another Relation | Rejects or reports the Core validation error; never displays it as valid |
| Dataset with duplicate IDs or unresolved endpoints | Reports Core validation failure and does not silently repair it |

The fixture describing an Event relation is intentionally left to the MVP
implementation: Linkscape may show supported Event endpoints later, but it
must preserve the Event and Relation data even when the initial Entity-first
view does not render them as nodes.

## Out of scope for acceptance

The following require separate design decisions and should not block the MVP:

- Coordinate Extension standardization;
- Layout Extension standardization;
- Dictionary or semantic Relation vocabularies;
- force-directed algorithm quality;
- media attachments;
- AI-generated layouts or descriptions; and
- cross-application synchronization of view state.
