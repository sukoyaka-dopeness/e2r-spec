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

A Dataset contains:

- metadata
- events
- entities
- relations

The Core does not require any particular ordering of these collections.

---

# Common Fields

Every Core Object has the following fields.

## id

Required.

A unique identifier within the dataset.

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

Applications that do not recognize an Extension should preserve it whenever possible.

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

Applications should ignore unknown Core fields.

---

## Unknown Extensions

Applications should preserve unknown Extensions whenever possible.

Applications should modify only the Extensions they understand.

---

## Separation of Responsibilities

The Core defines interoperable data.

Extensions define additional semantics.

Applications define editing behavior, presentation, and user experience.
