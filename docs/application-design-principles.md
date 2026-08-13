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

# Derived and Owned Data

Applications may calculate information from a Dataset without making that
information part of the Dataset.

For this guidance:

- **Derived data** is a recomputable result that the Dataset has not
  intentionally adopted as stored content.
- **Owned data** is content that has been intentionally authored, imported, or
  adopted into the Dataset under the Core or an appropriate Extension.

Owned refers to responsibility for stored Dataset content, not legal ownership
or the publisher of an Extension.

Examples of Derived data include:

- search indexes;
- automatically generated graph positions or routes;
- temporary timeline sorting;
- rendering caches; and
- preview conversions.

Derived data SHOULD NOT:

- be written merely because a Dataset was opened or displayed;
- be required to interpret the Dataset itself;
- silently replace an existing Owned value; or
- be treated as authoritative after its dependencies change.

A generated result becomes Owned only through an intentional application
operation that adopts it as Dataset content. The adopted value must use the
Core or an Extension whose responsibility matches the information. Saving a
cache in an arbitrary field does not make it interoperable or Owned.

Once adopted, an Owned value takes priority over later automatic generation for
the same responsibility until an intentional edit, deletion, or regeneration
operation replaces it.

Temporary zoom, pan, selection, modal, scroll, and similar Application View
State remain outside the Dataset even when an application stores them in a
local session or workspace.

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

## Automatic Core Object Creation

Applications MAY automatically create Core Objects.

Examples include:

- generating Entities during import
- generating Events from external sources
- AI-assisted dataset generation
- creating placeholder objects during editing

Automatically generated objects MUST remain valid Core Objects.

---

## Automatic Relation Creation

Applications MAY automatically create Relations when a user establishes an association between Core Objects.

Automatically created Relations SHOULD represent only structural connections.

Applications SHOULD NOT infer or introduce additional semantics unless explicitly requested.

---

## Applying the Derived and Owned Boundary

Search indexes, rendering caches, and temporary sorting normally remain
Derived implementation details.

Automatically generated graph geometry is also Derived by default. If a user
explicitly adopts selected coordinates or layout decisions and an appropriate
Extension represents them, those selected values may become Owned Dataset
content. The generation algorithm and unadopted alternatives remain
application details.

Persistence alone does not make data interoperable. Applications should keep
local caches and session state separate from intentionally adopted E2R data.

## Interoperability over Workflow

E2R standardizes datasets rather than editing workflows.

Different applications may provide completely different user experiences while producing interoperable datasets.

Applications are encouraged to innovate in editing workflows without requiring changes to the Core Specification.
