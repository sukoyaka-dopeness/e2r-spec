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

E2R separates structure, meaning, temporal representation, reusable
coordinates, authored layout, persisted authorial context, appearance, and
transient application state into independent responsibilities.

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

### Coordinate and Layout Responsibilities

Coordinates and layout are separate responsibilities.

Coordinates describe reusable positions in defined coordinate spaces. Layout
describes authored spatial composition, such as routes, placement, and relative
layering, without redefining those coordinates.

These are candidate Extension responsibilities. This document does not
register a Coordinate or Layout Extension or define their schemas.

Coordinate and Layout information does not become Presentation information
merely because an application uses it while rendering.

### Persisted Authorial Context

A persisted authorial context may describe which information is considered,
how it is grouped, or a non-temporal order in which it is treated.

This responsibility is distinct from semantic facts, History chronology,
Coordinate, Layout, Presentation, and current application state. Current
research provisionally calls this responsibility Perspective. This document
does not register a Perspective Extension or define its schema.

### Presentation Extensions

Presentation Extensions define the appearance of information that an
application has selected and arranged.

Examples include:

- Colors
- Icons
- Shapes and line appearance
- Label appearance and visibility

Applications may ignore Presentation Extensions without affecting the underlying data.

Presentation does not own semantic meaning, reusable coordinates, spatial
layout, persisted authorial selection or ordering, or current application
interaction state.

### Application View State

Zoom, pan, current selection, open panels or modals, scrolling, hover, and
gesture state are transient application concerns. They do not belong in the
E2R Dataset merely because an application may restore them in a local session
or workspace.

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
