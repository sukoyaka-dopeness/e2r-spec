# Reference Architecture

This document proposes a reference architecture for applications built on the E2R ecosystem.

The purpose of this architecture is not to prescribe implementation details, but to provide a common vocabulary and set of design principles for E2R applications.

The concepts described here are exploratory and are not part of the official E2R specification.

---

# Goals

The reference architecture aims to:

- Separate responsibilities
- Encourage reusable components
- Simplify application design
- Improve interoperability
- Support AI-assisted development

Applications are free to adopt only the parts they require.

---

# Architectural Layers

A typical E2R application may be organized as:

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

Each layer has a single responsibility.

---

# Dataset

The dataset is the application's single source of truth.

It contains:

- Entity
- Event
- Relation
- Extensions

The dataset should not contain user interface state.

---

# Application State

Application state stores information required while the application is running.

Typical examples include:

- currentDataset
- currentScreen
- currentDialog
- selectedEvent
- selectedEntity

State should remain minimal.

---

# Services

Services perform business logic.

Typical responsibilities include:

- Creating objects
- Updating objects
- Deleting objects
- Importing datasets
- Exporting datasets
- Navigation
- Dialog management
- Selection management

Each Service should have a clearly defined responsibility.

---

# Views

Views display the current state.

Examples include:

- Timeline View
- Graph View
- Event Detail View
- Entity Detail View
- Settings Dialog

Views should avoid implementing business logic.

Instead, they request Services to perform operations.

---

# Rendering Flow

A typical operation follows this sequence:

```
User
    ↓
View
    ↓
Service
    ↓
Application State Updated
    ↓
View Re-rendered
```

This creates a predictable execution model.

---

# Single Responsibility

Each layer should focus on one responsibility.

Examples:

View

- Displays information.

Service

- Performs operations.

State

- Remembers information.

Dataset

- Stores persistent data.

Keeping these responsibilities separate improves maintainability.

---

# Single Source of Truth

Every piece of information should have one authoritative location.

Examples:

```
Historical data
    ↓
Dataset
```

```
Current selection
    ↓
Application State
```

```
Business logic
    ↓
Services
```

Duplicating information should be avoided whenever practical.

---

# Extensibility

Additional components may be introduced without changing the overall architecture.

Possible examples include:

- HistoryService
- CoordinateService
- LayoutService
- SearchService
- ValidationService
- PluginService

Applications may adopt these components incrementally.

---

# AI-assisted Architecture

Future AI systems may assist in constructing applications based on this architecture.

Possible capabilities include:

- Extracting application state
- Suggesting Services
- Identifying Views
- Detecting duplicated responsibilities
- Generating documentation
- Visualizing dependencies

The resulting architecture remains editable by human designers.

---

# Example

A Timeline application might operate as follows:

```
Timeline View
    ↓
EventService.addEvent()
    ↓
currentDataset updated
    ↓
SelectionService.selectEvent()
    ↓
selectedEvent updated
    ↓
NavigationService.eventDetail()
    ↓
currentScreen updated
    ↓
View re-rendered
```

Each component performs one clearly defined task.

---

# Future Directions

Possible future research includes:

- Automatic architecture generation
- Visual architecture editors
- Architecture validation
- AI-assisted refactoring
- Shared architectural patterns
- Reference implementations

The long-term vision is a reusable architectural model that enables E2R applications to remain understandable, maintainable, and interoperable regardless of their domain.
