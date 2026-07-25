# Relationship Graph App

## Purpose

The Relationship Graph App is a reference application for exploring and editing relationships between Core Objects.

Its primary purpose is to demonstrate practical use of the E2R Relation model while remaining independent of application-specific semantics.

The application focuses on graph visualization rather than timeline presentation.

---

# Design Goals

The Relationship Graph App should:

- Visualize relationships between Core Objects.
- Support editing of Relations.
- Remain interoperable with other E2R applications.
- Preserve unknown Extensions during loading and saving.
- Avoid embedding application-specific semantics into the Core.

---

# Scope

The application may visualize relationships between:

- Entity ↔ Entity
- Event ↔ Entity
- Event ↔ Event
- Relation ↔ Relation (future)

The graph is generated entirely from Core Objects and supported Extensions.

---

# MVP

The MVP should support:

- Opening an E2R dataset.
- Displaying Core Objects as graph nodes.
- Displaying Relations as graph edges.
- Selecting nodes.
- Selecting edges.
- Editing basic Relation information.
- Creating Relations.
- Deleting Relations.
- Saving datasets without modifying unrelated data.

Layout algorithms are implementation details and are outside the scope of the specification.

---

# Relation Semantics

The Core Relation model intentionally remains minimal.

Graph behavior should be derived from supported Relation Extensions rather than additional Core fields.

Applications that do not recognize a Relation Extension should continue to display the graph using only Core information.

---

# Editing Principles

The Relationship Graph App is a graph editor rather than a generic JSON editor.

Applications edit only the information they understand.

Unknown Extensions must be preserved.

Applications should avoid modifying unrelated portions of the dataset whenever possible.

---

# Future Features

Possible future capabilities include:

- Relation categories
- Relation direction indicators
- Multiple graph layouts
- Graph filtering
- Graph search
- Graph clustering
- Automatic grouping
- Hierarchical layouts
- Semantic coloring
- Extension-specific visualization

These capabilities are intentionally excluded from the MVP.

---

# Reference Implementation

The Relationship Graph App serves as a reference implementation for Relation-related Extensions.

Its purpose is to validate that the E2R Relation model remains sufficiently generic for diverse graph-based applications while preserving interoperability with other E2R applications.
