# Philosophy

## Core Philosophy

E2R is designed around a minimal interoperable Core.

The Core should contain only the information necessary for every compliant implementation to understand the structure of a dataset.

Additional meaning, visualization, and application-specific behavior belong outside the Core.

The design principles are:

- The Core is minimal.
- Semantics belong to Extensions.
- Presentation belongs to Views.
- Behavior belongs to Applications.
- The Core alone is sufficient to interpret an E2R Dataset.
- Unknown Extensions must be safely ignored.
- A Single Source of Truth should be maintained whenever possible.

## Layered Architecture

E2R separates responsibilities into independent layers.

```
Workflow
↑
View
↑
Application
↑
Extension
↑
Core
```

Each layer has a clearly defined purpose and should evolve independently.

### Core

The Core defines the minimum interoperable data model shared by every E2R implementation.

The Core is intentionally small and stable.

### Extensions

Extensions add optional information without changing the meaning of the Core.

Extensions may define additional data models for specific domains such as history, semantics, embeddings, or character generation.

Extensions should remain independently usable.

An Extension must not require another Extension in order to remain valid.

Applications may optionally make use of additional Extensions when available.

### Applications

Applications implement behavior.

Applications create, edit, analyze, transform, import, and export E2R Datasets according to the Extension specifications they support.

Applications are not owners of Extensions.

Multiple applications may create or edit the same Extension as long as they understand its specification.

Applications should preserve unknown Extensions whenever possible.

### Views

Views define how information is presented to users.

The same dataset may be visualized in many different ways without changing its underlying data.

Examples include:

- Timeline
- Relationship Diagram
- Calendar
- List
- Feature Space

Views are not part of the Core data model.

## Workflows

Applications are intended to be combined into user-defined workflows.

An E2R Dataset may pass through multiple applications during its lifetime.

For example:

```
Character Generator
        ↓
Worldbuilding
        ↓
Timeline
        ↓
Relationship Diagram
        ↓
Feature Space Editor
```

Applications may also exchange datasets with external systems such as LLMs, search engines, databases, or knowledge bases.

The E2R Dataset functions as a common Intermediate Representation (IR) throughout these workflows.

## Architectural Principles

E2R distinguishes clearly between data, behavior, presentation, and workflows.

- Core defines interoperable data.
- Extensions add optional data.
- Applications implement behavior.
- Views present information.
- Workflows connect independent applications.

This separation allows the Core specification, Extensions, Applications, and Views to evolve independently while remaining interoperable.

As a result, new applications and Extensions can be introduced without requiring changes to existing datasets or the Core specification.
