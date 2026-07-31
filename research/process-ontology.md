# Process Ontology

This document explores the ontological assumptions behind E2R.

Unlike the Core Specification, this document is not normative.
It is a research document that investigates possible philosophical interpretations of the E2R model.

---

# Purpose

The E2R Core distinguishes three concepts:

- Entity
- Event
- Relation

This distinction is useful for application development.

However, it raises a deeper question.

Are these categories fundamental, or are they merely practical abstractions?

This document explores that question.

---

# Entity and Event

One possible interpretation is that an Entity and an Event are not fundamentally different.

Instead,

> An Entity is a slowly changing Event.

Likewise,

> An Event is a rapidly changing Entity.

Under this interpretation, permanence and change are not different kinds of existence.
They differ only in temporal scale.

---

# Why the Core separates them

Even if Entity and Event are philosophically unified, the Core deliberately distinguishes them.

The separation simplifies application development.

For example:

- Timeline applications primarily manipulate Events.
- Knowledge bases primarily manipulate Entities.
- Relationship graph applications primarily manipulate Entities and Relations.

The distinction therefore serves implementation rather than ontology.

---

# Relation

Relation may also be interpreted as a process.

Instead of representing a static connection, a Relation may be viewed as an ongoing interaction between two objects.

Whether Relation should remain an independent Core concept is an open research question.

---

# Possible Unified Model

One possible future model is:

Node
↓
Entity
Event
Relation

In this interpretation, Entity, Event, and Relation become specialized views of a more fundamental concept.

This document does not propose changing the current Core specification.

Instead, it investigates whether such a model could explain why the current Core is structured as it is.

---

# Research Questions

- Is change more fundamental than existence?
- Can Relation be interpreted as a process?
- Is there a single primitive concept beneath Entity, Event, and Relation?
- How would such a model affect future E2R implementations?

These questions are intentionally left open.
They are subjects for future research rather than conclusions.

# Core Object Hypothesis

## Motivation

The current E2R Core defines three primary object types:

* Entity
* Event
* Relation

This model is intentionally minimal and practical.

However, a more fundamental abstraction may exist beneath these concepts.

---

## Core Object

One possible future direction is to introduce a single abstract object at the Core level.

Every object in a dataset would initially be represented as a Core Object.

The semantics of that object would then be defined by extensions.

For example:

* Entity Extension
* Event Extension
* Relation Extension

Under this model, Entity, Event, and Relation become interpretations rather than primitive object types.

---

## Advantages

Such an architecture could provide several benefits.

* A smaller and more uniform Core.
* Greater flexibility for future object models.
* Easier experimentation with alternative ontologies.
* Domain-specific object systems without changing the Core specification.

Applications could support additional object categories simply by defining new extensions.

---

## Challenges

This approach would significantly change the architecture of E2R.

Open questions include:

* How should references between Core Objects be represented?
* Can existing datasets remain compatible?
* Should Entity, Event, and Relation remain standardized extensions?
* How much abstraction is beneficial before practical usability is reduced?

These questions remain unresolved.

---

## Research Status

This idea is exploratory.

The current E2R specification continues to define Entity, Event, and Relation as the Core object types.

The Core Object hypothesis is intended as a possible long-term research direction rather than a proposal for the current specification.
