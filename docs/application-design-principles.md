# Application Design Principles

This document describes the recommended design principles for applications built on top of the E2R Specification.

These principles are recommendations rather than normative requirements.
The E2R Core Specification defines data interoperability.
Applications remain free to choose their own user interface, workflows, and implementation details.

---

# Goals

Applications should:

- Keep the Core Specification small and stable.
- Treat Extensions as application-specific features.
- Preserve unknown Extensions whenever possible.
- Separate data representation from editing behavior.
- Prioritize interoperability over identical user experiences.

---

# Separation of Responsibilities

## Core Specification

The Core Specification defines:

- Entity
- Event
- Relation

It does not define:

- User interface
- Editing workflow
- View layout
- Navigation
- Automatic generation
- AI behavior

These responsibilities belong to applications.

---

## Applications

Applications are responsible for:

- User interaction
- Editing workflow
- Navigation
- Validation
- Visualization
- Automatic generation
- Import and export behavior

Applications may provide very different editing experiences while producing compatible datasets.

---

# Editing Model

Applications should separate:

- data
- state
- views
- editing logic

A recommended architecture is:

```
View
    │
    ▼
Service
    │
    ▼
Dataset
```

Views should not modify datasets directly.

Editing operations should be performed through services.

This makes behavior predictable and reusable.

---

# Automatic Object Creation

Applications MAY automatically create Core Objects.

Examples include:

- creating Relations after a user associates an Entity with an Event
- generating placeholder Entities
- importing external data
- AI-assisted dataset generation

Automatically generated objects SHOULD remain valid Core Objects.

Applications SHOULD NOT introduce additional semantics into automatically generated Core structures unless explicitly requested.

---

# Derived Structures

Applications may maintain derived or cached structures.

Examples include:

- search indexes
- graph layouts
- timeline ordering
- rendering caches

Such structures should not be required to interpret the dataset itself.

---

# Unknown Extensions

Applications SHOULD preserve unknown Extensions whenever practical.

Applications MAY ignore Extensions they do not understand.

Ignoring an Extension must not invalidate the rest of the dataset.

---

# Extension Ownership

Each application owns the semantics of its own Extensions.

Other applications are encouraged to preserve those Extensions without attempting to interpret them.

---

# Validation

Applications may perform additional validation.

However, application-specific validation should not be confused with Core validation.

A dataset may be valid according to the Core Specification while violating application-specific expectations.

---

# Application Independence

Different applications may expose different editing models for the same dataset.

For example:

- a timeline editor
- a relationship graph
- a worldbuilding tool
- an AI-assisted editor

All should be able to exchange datasets through the same Core Specification.

---

# Recommended Architecture

A typical application architecture consists of:

- Dataset
- Services
- Views
- Navigation
- Dialogs

Example:

```
Dataset
    │
    ├── Entity Service
    ├── Event Service
    ├── Relation Service
    ├── Dataset Service
    │
    ▼
Navigation
    │
    ▼
Views
```

This is only one possible architecture.

Applications are free to adopt different designs.

---

# Philosophy

The E2R Specification standardizes data.

Applications standardize experiences.

Different applications should feel different while remaining able to exchange the same datasets.
