# Core

This document defines the E2R Core.

The Core specifies the minimum interoperable data model shared by all E2R applications.

It intentionally avoids domain-specific semantics, presentation rules, and application behavior.

Those concerns are delegated to Extensions and Applications.

---

# Core Objects

The Core consists of three object types.

## Event

An Event represents something that happens.

Events describe occurrences, actions, transitions, or changes.

An Event may reference any number of Entities through Relations.

Events are the primary source of temporal information.

---

## Entity

An Entity represents something that exists.

Entities may represent people, organizations, places, concepts, objects, documents, software, or any other identifiable subject.

The Core intentionally does not define Entity categories.

---

## Relation

A Relation connects two Core Objects.

Relations describe that two objects are related without prescribing the exact meaning of the relationship.

The interpretation of a Relation is delegated to Extensions or Applications.

---

# Dataset

An E2R Dataset is a collection of Core Objects.

A Dataset has the following required fields:

- `version`
- `entities`
- `events`
- `relations`

The `entities`, `events`, and `relations` fields are arrays. They are required
even when they are empty.

The Core does not require any particular ordering of these collections.

A Dataset may also have an optional `extensions` field for Dataset-level
Extensions.

```json
{
  "version": "1.0",
  "entities": [],
  "events": [],
  "relations": [],
  "extensions": {
    "metadata": {
      "datasetId": "019c0000-0000-7000-8000-000000000000"
    }
  }
}
```

Metadata such as a Dataset identifier, title, author, license, or generating
application is not part of the Core. Such information may be represented by a
Dataset-level Extension.

## version

Required.

A non-empty string identifying the E2R Core version used by the Dataset.

The Dataset-level `version` identifies the Core version. It does not identify
the version of any Extension.

## entities

Required.

An array of Entity objects.

## events

Required.

An array of Event objects.

## relations

Required.

An array of Relation objects.

## Dataset-level Extensions

Optional.

An object whose property names identify Extensions and whose values contain
Extension-specific data.

Dataset-level Extension data uses the same placement convention as Core Object
Extension data:

```text
extensions.<extension-name>.<extension-specific-data>
```

The Core does not add a common `data` or Extension `version` wrapper. An
Extension specification defines the structure of its own value.

---

# Common Fields

Every Core Object has the following fields.

## id

Required.

A non-empty string that uniquely identifies the Core Object within the
Dataset.

Identifiers are unique across all Entity, Event, and Relation objects in the
Dataset, not only within each object type.

The Core does not require globally unique identifiers.

---

## name

Optional.

A short human-readable label.

Applications may display this value.

---

## description

Optional.

A longer human-readable description.

Applications may support Markdown or other formatting, but the Core assigns no semantics to the content.

---

## extensions

Optional.

Extensions provide additional information outside the Core.

Applications that do not recognize an Extension SHOULD preserve it whenever
practical.

---

# Relation Fields

In addition to the Common Fields, every Relation has the following fields.

## sourceId

Required.

A non-empty string containing the `id` of an Entity or Event in the same
Dataset.

## targetId

Required.

A non-empty string containing the `id` of an Entity or Event in the same
Dataset.

Relations must not use another Relation as their source or target. Because Core
Object identifiers are unique across the Dataset, each endpoint resolves to at
most one Core Object.

The source and target may identify the same Core Object. Self-relations are
valid. Cycles involving multiple Relations are also valid.

Relation direction is structural. The Core does not assign semantic meaning to
the direction, and it does not define a Relation `type` field. Relation meaning
belongs to Extensions or Applications.

---

# Core Principles

## Minimal Core

The Core contains only the information necessary for interoperability.

Domain-specific information belongs in Extensions.

---

## Single Source of Truth

Each piece of information should have a single authoritative representation.

Applications may generate derived or cached values, but these must not become independent sources of truth.

---

## Unknown Fields

Applications MUST ignore unknown Core fields when reading a Dataset.

Applications SHOULD preserve unknown Core fields whenever practical.

A validator may report an unknown Core field as a warning, but its presence
alone does not make a Dataset invalid. A similarly named unknown field does not
satisfy a missing required field and must not be treated as that field without
explicit user action.

---

## Unknown Extensions

Applications MUST ignore Extensions they do not recognize when reading a
Dataset.

Applications SHOULD preserve unknown Extensions whenever practical.

Applications SHOULD modify only the Extensions they understand.

---

## Separation of Responsibilities

The Core defines interoperable data.

Extensions define additional semantics.

Applications define editing behavior, presentation, and user experience.
