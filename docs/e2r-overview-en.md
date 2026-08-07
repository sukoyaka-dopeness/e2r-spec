# E2R Overview

E2R is a specification for exchanging datasets that contain events, entities, and the relationships connecting them.

## The three Core Objects

- **Event**: something that happens, such as an occurrence, action, or change.
- **Entity**: something that exists, such as a person, organization, place, object, or concept.
- **Relation**: a connection between two Events or Entities.

The E2R Core defines these structures and their identifiers. The meaning of a Relation, the interpretation of dates, and presentation behavior belong to Extensions or applications.

## Dataset

A Dataset is a JSON document containing a Core version and arrays of Events, Entities, and Relations. The Core requires all three arrays, even when they are empty.

```json
{
  "version": "1.0",
  "entities": [],
  "events": [],
  "relations": []
}
```

Information outside the Core, such as titles or dates, can be added through Extensions. Applications should preserve unknown Extensions so that a Dataset can move safely between tools.

## Learn more

See the [E2R Core specification](../spec/core.md) and the specifications for individual Extensions for detailed rules.
