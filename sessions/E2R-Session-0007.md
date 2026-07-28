# E2R Session 0007

**Date**

2026-07-28

---

# Theme

Architecture Design, State Management, Extension Expansion, and Research Framework

---

# Summary

This session marked the transition from designing the NarrativeLine MVP toward establishing a reusable architecture for future E2R applications.

The discussion introduced a common architecture based on application state, services, and state transitions.

In parallel, several future Extensions were formalized, and a new `research/` directory was introduced to preserve exploratory ideas separately from the stable specification.

---

# Decisions

## NarrativeLine Architecture

The application architecture will be documented independently of the MVP specification.

The architecture is based on:

- Views
- Services
- Application State
- Dataset

Business logic belongs to Services rather than Views.

Views display state and invoke Services.

---

## Application State

The application currently manages five primary state variables.

- currentDataset
- currentScreen
- currentDialog
- selectedEvent
- selectedEntity

These represent the minimum information required while the application is running.

---

## Services

The application responsibilities were separated into reusable Services.

Current Services:

- EventService
- EntityService
- DatasetService
- NavigationService
- DialogService
- SelectionService

Each Service owns a single responsibility.

---

## State Machine

User interaction is modeled as explicit state transitions.

Typical flow:

```
User
    ↓
View
    ↓
Service
    ↓
State Updated
    ↓
React Re-render
```

This model improves maintainability and enables future architecture generation.

---

## Reference Architecture

The NarrativeLine architecture is intended to become a reusable reference architecture for future E2R applications.

The architectural layers are:

```
User
    ↓
View
    ↓
Service
    ↓
Application State
    ↓
Dataset
```

This architecture is intentionally independent of any particular UI framework.

---

# New Extension Ideas

The following Extension concepts were documented.

## Coordinate Extension

Defines reusable coordinate systems independent of visualization.

Possible coordinate systems include:

- Cartesian
- Polar
- Geographic
- Spiral
- Custom

The spiral coordinate system was specifically introduced to support cyclic and narrative visualizations.

---

## Layout Extension

Separates visual layout from semantic information.

Applications may provide multiple layouts for the same dataset.

---

## Dictionary Extension

Separates controlled vocabularies from datasets.

Possible contents include:

- Entity types
- Relation types
- Event categories
- Controlled vocabularies

Datasets reference dictionary definitions instead of embedding semantic definitions.

---

## Specification Extension

Provides machine-readable information describing how a dataset should be interpreted.

Possible responsibilities include:

- Validation rules
- Required Extensions
- Object constraints
- Compatibility information

---

# Research Directory

A new `research/` directory was introduced.

Its purpose is to preserve experimental ideas separately from stable specifications.

Current documents include:

- README
- research-topics
- computational-world
- specification-evolution
- ai-specification-design
- model-transformation
- view-generation
- semantic-layers
- reference-architecture
- ai-workflow
- knowledge-compression

Research documents are intentionally non-normative.

---

# Major Research Themes

This session introduced several long-term research directions.

Examples include:

- AI-assisted specification design
- Architecture generation
- Model transformation
- Automatic view generation
- Semantic layering
- Knowledge compression
- Computational world models
- Evolutionary specification design

These ideas remain independent of the Core specification.

---

# Documentation Added

NarrativeLine documentation expanded significantly.

New documents include:

- docs/architecture.md
- docs/state.md
- docs/services.md
- docs/state-machine.md

These documents describe the architecture independently from implementation details.

---

# Design Insight

One important observation emerged during this session.

Application architecture can be described using the same principles as E2R itself.

For example:

- Views
- Services
- State variables
- Operations
- Dependencies

may all become E2R objects.

This opens the possibility of designing software architecture using E2R datasets.

---

# Future Work

Possible next topics include:

- NarrativeLine implementation
- Reference implementation of Services
- Undo / Redo architecture
- Plugin architecture
- Extension loading
- Coordinate-based visualizations
- Dictionary repository
- Specification validation
- AI-assisted architecture editor

---

# Outcome

This session established the architectural foundation for NarrativeLine and expanded E2R from a data specification into a broader research platform covering software architecture, AI-assisted design, and future knowledge representation.
