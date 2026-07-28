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
