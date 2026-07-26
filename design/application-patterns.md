# Application Patterns

## Purpose

This document records recurring design patterns observed when building applications on top of E2R.

These patterns are descriptive rather than normative.

Applications are free to adopt different designs when appropriate.

---

# Primary Editing Unit

Most E2R applications naturally have one Core Object that serves as the primary focus of editing.

The application presents this object as the central editing experience.

Other Core Objects are often created, modified, or maintained automatically.

Choosing a Primary Editing Unit simplifies both the user experience and the internal editing model.

---

## Event-Centric Applications

Event-centric applications focus on changes over time.

Users primarily create and edit Events.

Entities and Relations are generated or maintained as supporting structures.

Examples include:

- NarrativeLine
- Timeline applications
- Scenario generators

Typical characteristics:

- Timeline-oriented workflows
- Chronological navigation
- Event Detail as the primary editor
- Automatic Event–Entity Relation generation

---

## Entity-Centric Applications

Entity-centric applications focus on persistent objects.

Users primarily create and edit Entities.

Relations are managed as connections between Entities.

Events may exist as supporting information.

Examples include:

- Relationship Graph
- Family tree applications
- Knowledge bases
- Taxonomy browsers

Typical characteristics:

- Graph-oriented workflows
- Entity Detail as the primary editor
- Relation editing
- Flexible graph layouts

---

## Relation-Centric Applications

Some applications primarily edit Relations.

The relationship itself becomes the object of interest.

Examples include:

- Citation graphs
- Dependency graphs
- Network analysis tools

Typical characteristics:

- Edge-focused editing
- Relation properties
- Connection analysis
- Path exploration

---

## Mixed Editing Models

Some applications treat multiple Core Objects as first-class editing targets.

Examples include:

- Investigation systems
- Worldbuilding tools
- AI-assisted editors

These applications may provide dedicated editors for Events, Entities, and Relations.

---

# Automatic Structure Generation

Applications should generate derived structures automatically whenever practical.

Examples include:

- Creating Relations when associating an Entity with an Event.
- Maintaining timeline ordering.
- Removing orphaned Relations.

Automation reduces repetitive user operations while preserving the integrity of the dataset.

---

# Editing Only What Is Understood

Applications should edit only the Core and Extensions they understand.

Unsupported Extensions should:

- remain attached to their original Core Objects whenever possible
- be preserved during loading and saving
- be ignored during editing

This allows independent applications to share datasets without damaging information they do not understand.

---

# Separation of Editing and Presentation

Editing models and presentation models should remain independent.

Applications may provide different visualizations of the same dataset without changing its underlying structure.

Examples include:

- Timeline
- Relationship graph
- Tree
- Table
- Map

Presentation should not become part of the Core.

---

# Reference Applications

Reference applications validate the practical usability of the specification.

Implementation experience provides continuous feedback to E2R by revealing:

- missing abstractions
- unnecessary complexity
- useful Extension patterns
- opportunities to simplify the Core

Reference applications evolve together with the specification while remaining independent implementations.

---

# Evolution

Application patterns are expected to evolve as new applications are developed.

The purpose of this document is to capture common architectural ideas rather than prescribe a single application architecture.
