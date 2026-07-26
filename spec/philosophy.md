# Core Philosophy

## Core Principles

The Core is minimal.

Meaning belongs to Semantic Extensions.

Presentation belongs to Presentation Extensions.

Temporal representation belongs to the History Extension.

The Core can interpret every valid Core dataset without understanding any Extension.

Unknown Extensions MUST be safely ignored.

The Core remains the Single Source of Truth for structural interoperability.

---

## Structure over Semantics

The Core standardizes structure rather than domain meaning.

The three Core Objects have distinct structural responsibilities:

- Entity represents existence.
- Event represents occurrence or change.
- Relation represents connection.

The Core intentionally avoids assigning domain-specific semantics to these objects.

The meaning of an Entity, the interpretation of an Event, and the semantics of a Relation belong to Extensions.

This separation keeps the Core stable while allowing specialized domains to evolve independently.

---

## Separation of Responsibilities

E2R separates structure, meaning, temporal representation, and presentation into independent layers.

### Core

The Core defines the minimum interoperable data model.

It defines only:

- Core Objects
- Identifiers
- Connections
- Structural consistency

The Core understands only structure.

It does not attempt to interpret domain meaning, application behavior, or presentation.

### Semantic Extensions

Semantic Extensions define domain-specific meaning.

Examples include:

- Family relationships
- Organizational structures
- Narrative roles
- Music history
- Biological taxonomy

Multiple Semantic Extensions may coexist within the same dataset.

### History Extension

The History Extension standardizes temporal representation.

It defines how temporal information is represented and exchanged.

Higher-level concepts such as narrative order, causality, historical interpretation, or application-specific ordering belong outside the Core and may be defined by future Extensions or Applications.

### Presentation Extensions

Presentation Extensions define how information is displayed.

Examples include:

- Labels
- Colors
- Icons
- Layout
- Timeline rendering
- Graph visualization

Applications may ignore Presentation Extensions without affecting the underlying data.

---

## Extensibility

Extensions expand capabilities without modifying the Core.

Applications that understand an Extension may interpret and edit it.

Applications that do not understand an Extension should preserve it whenever possible while continuing to process the Core dataset.

Independent Extensions should not require modifications to the Core specification.

---

## Forward Compatibility

Future versions of E2R should favor additive change.

Existing Core datasets should remain valid whenever possible.

Extensions should evolve independently without forcing changes to the Core.

This minimizes ecosystem fragmentation and improves long-term interoperability.

---

## Application Independence

The Core is not designed for a specific application.

The same dataset may be interpreted by many different applications, including:

- Timeline applications
- Family tree applications
- Worldbuilding tools
- Investigation systems
- Knowledge bases
- Scenario generators
- Music history applications
- Taxonomy browsers

Each application is responsible for interpreting and editing only the Extensions it supports.

---

## Design Goal

The primary goal of E2R is to maximize interoperability through a minimal structural Core.

By separating structure, meaning, temporal representation, and presentation into independent layers, E2R enables datasets to remain reusable across diverse applications while allowing each domain to define its own semantics through Extensions.
