# Dataset Walkthrough

This walkthrough introduces the structure of an E2R Dataset. It is informative:
the [Core specification](../spec/core.md), [History Extension](../extensions/history-extension.md),
and [Metadata Extension](../extensions/metadata-extension.md) define the
requirements. The complete reference files are the [empty Dataset](../examples/empty-dataset.json),
[single Event](../examples/single-event.json), and [Event, Entity, and Relation](../examples/event-with-entity.json)
examples.

## 1. Start with a minimal Dataset

Every Dataset has a Core version and three arrays. The arrays exist even when
there are no Core Objects yet.

```json
{
  "version": "1.0",
  "entities": [],
  "events": [],
  "relations": []
}
```

An empty Dataset is valid. The three arrays are required because they give all
applications the same basic container shape.

## 2. Add an Event

An Event represents something that happened. The Core requires an `id`, while
`name` is an optional human-readable label. An Event does not require temporal
information in the Core.

```json
{
  "id": "event-1",
  "name": "Lunar landing"
}
```

Place this Object in the Dataset's `events` array. Its `id` must be unique
across the Dataset, including the Entity and Relation arrays.

## 3. Add an Entity

An Entity represents something that exists, such as a person, organization,
place, object, document, software system, or concept.

```json
{
  "id": "entity-1",
  "name": "Apollo 11"
}
```

Place this Object in the `entities` array. Simply placing an Event and an
Entity in one Dataset does not connect them.

## 4. Add a Relation

A Relation connects two Core Objects in the same Dataset. Here, it connects
the Event to the Entity.

```json
{
  "id": "relation-1",
  "sourceId": "event-1",
  "targetId": "entity-1"
}
```

Place it in the `relations` array. The endpoints may be Events or Entities,
but never Relations. The direction is structural: the Core does not say that
this connection means participant, parent, member, cause, or any other
domain-specific meaning. Self-relations are valid.

## 5. Add History information

The History Extension records temporal information separately from the Core.
Add it to the Event's `extensions` object, not to the Dataset-level
`extensions` object.

```json
{
  "id": "event-1",
  "name": "Lunar landing",
  "extensions": {
    "history": {
      "time": {
        "year": 1969,
        "month": 7,
        "day": 20
      }
    }
  }
}
```

The fields present in `time` express the recorded precision. Omitted fields
are unknown and must not be invented. History Extension v1 uses the proleptic
Gregorian calendar; do not add a second application-defined calendar field.

## 6. Add Dataset Metadata

Metadata describes the Dataset rather than an individual Event, Entity, or
Relation. It belongs at the Dataset level.

```json
{
  "extensions": {
    "metadata": {
      "datasetId": "example-lunar-landing",
      "title": "Lunar Landing Example"
    }
  }
}
```

Both fields are optional. When a `datasetId` exists, ordinary editing,
importing, and exporting should preserve it. A title is not an identifier.

## 7. Validate the Dataset

Use the Validator to check Core and supported Extension structure. Its
diagnostics can identify errors, warnings, and their locations in the JSON.
The Validator is read-only: it does not repair or rewrite the Dataset.

Validation confirms structural and supported-specification conformance. It
does not confirm that historical claims or other content are true.

## 8. Reuse the Dataset

The resulting Dataset can be opened again by an application that understands
it, exchanged as JSON, or supplied to another workflow as structured input.
For example, NarrativeLine can present Event-focused timeline information.
Linkscape is designed as an Entity-first relationship-graph application, but
its design is not a claim of current implementation availability. An AI or
another application can use the Dataset to propose an analysis or output; that
workflow remains responsible for its result.
