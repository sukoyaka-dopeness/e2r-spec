# E2R Overview

E2R is a specification for exchanging datasets that contain events, entities, and the relationships connecting them. Because E2R is represented as JSON, the same data can be exchanged with programs and AI systems as well as with people.

## The three Core Objects

- **Event**: something that happens, such as an occurrence, action, or change.
- **Entity**: something that exists, such as a person, organization, place, object, document, software system, or concept.
- **Relation**: a directed connection between two Events or Entities.

A **Dataset** is the JSON document that contains these objects and any Extension data. Dataset is the container for the Core objects; it is not another kind of Core object alongside Event, Entity, and Relation.

The E2R Core defines these structures and their identifiers. The meaning of a Relation, the interpretation of dates, and presentation behavior belong to Extensions or applications.

## Dataset and minimal JSON

A Dataset is a JSON document containing the top-level Core version and arrays of Events, Entities, and Relations. The Core requires all three arrays, even when they are empty.

```json
{
  "version": "1.0",
  "entities": [],
  "events": [],
  "relations": []
}
```

For example, an Event and an Entity can be connected by a Relation:

```json
{
  "version": "1.0",
  "events": [{"id": "event-1", "name": "Lunar landing"}],
  "entities": [{"id": "entity-1", "name": "Apollo 11"}],
  "relations": [{"id": "relation-1", "sourceId": "event-1", "targetId": "entity-1"}]
}
```

## Core and Extensions

The **Core** is the smallest set of shared rules needed for applications to exchange datasets. An **Extension** adds information that does not belong in the Core, such as dates, titles, coordinates, domain meaning, or presentation data.

For example, the History Extension records temporal information for Events, while a Metadata Extension can record a Dataset title. Applications can ignore Extensions they do not understand and should preserve them whenever practical.

## E2R and AI

An E2R JSON Dataset is a structured intermediate representation shared by people, applications, and AI systems. Instead of converting a natural-language request directly into an application-specific format, a workflow can first organize the information as a common Dataset and reuse it across multiple tasks.

A user might ask:

> Turn this timeline into a print-ready PDF.

An application can save the timeline as an E2R Dataset, send the JSON to an LLM, and use the result to generate print-oriented layout and text. The same Dataset could also be used to:

- summarize important Events in chronological order;
- extract Entities and Relations and draft an explanation of a relationship graph;
- find Events without dates or isolated Entities and list them for review;
- create a child-friendly explanation, exhibition captions, or lecture material; and
- generate a PDF, presentation, website, booklet, timeline, or relationship graph.

In this sense, E2R can function like an intermediate language between people and AI. An AI system can receive natural-language instructions, read or write an E2R Dataset, and hand the same Dataset to another application for a different view or output. Keeping the information as JSON prevents it from being trapped in one application's screen state and makes the workflow easier to reuse and automate.

After an AI system generates or edits a Dataset, a Validator can check the Core and any supported Extension structures. A workflow can return validation errors to the AI or the user, repair the Dataset, and validate it again. The Validator checks structural and specification conformance; it does not automatically guarantee that AI-generated historical facts or prose are true.

This does not make any particular AI system or PDF format part of E2R. E2R defines the data structure and exchange rules; the application or workflow decides how an AI interprets the data and which output format it creates.

## Beginner glossary

| Term | Meaning |
| --- | --- |
| Dataset | The complete document containing Events, Entities, and Relations |
| Event | Something that happens |
| Entity | Something that exists, such as a person, organization, place, object, document, software system, or concept |
| Relation | A directed connection between an Event or Entity and another Event or Entity |
| Core | The smallest shared specification needed for exchange |
| Extension | Independent information or rules added to the Core |
| ID | A string that identifies an object within a Dataset |

## Relationship to NarrativeLine

NarrativeLine is one application that edits and presents E2R Datasets. Its Timeline and form views are application presentations; they are not themselves part of the E2R Core.

## Learn more

See the [empty Dataset](../examples/empty-dataset.json), [Event example](../examples/single-event.json), and [Event, Entity, and Relation example](../examples/event-with-entity.json) for complete JSON files.

See the [E2R Core specification](../spec/core.md) and the specifications for individual Extensions for detailed rules. Datasets used by applications can be checked with the Validator when appropriate.
