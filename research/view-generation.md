# View Generation

This document explores methods for generating multiple visual representations from a single E2R dataset.

The concepts described here are exploratory and are not part of the official E2R specification.

---

# Motivation

An E2R dataset describes information, not presentation.

Different applications may visualize the same dataset in completely different ways.

Examples include:

- Timelines
- Graphs
- Trees
- Tables
- Maps
- Calendars

Each visualization is simply another view of the same underlying data.

---

# Single Source of Truth

An E2R dataset should remain the single source of truth.

Views should never duplicate information.

Instead, each view derives its presentation from the dataset.

```
Dataset
    ↓
Timeline
```

```
Dataset
    ↓
Relationship Graph
```

```
Dataset
    ↓
Table
```

The dataset remains unchanged regardless of the chosen visualization.

---

# View Independence

Views should remain independent of one another.

For example:

- Editing an Event in Timeline View should immediately appear in Graph View.
- Renaming an Entity should update every view.
- Importing a dataset should not depend on a particular visualization.

This separation simplifies application design.

---

# View Types

Possible views include:

## Timeline

Displays Events ordered by historical time.

---

## Relationship Graph

Displays Entities and Relations as a network.

---

## Tree

Displays hierarchical structures.

Examples include:

- Family trees
- Taxonomies
- Organization charts

---

## Table

Displays structured information in rows and columns.

Useful for searching, filtering, and bulk editing.

---

## Calendar

Displays Events according to calendar dates.

Different calendar systems may be supported through Extensions.

---

## Map

Displays objects according to geographical coordinates.

Coordinate systems are defined by the Coordinate Extension.

---

## Spiral

Displays Events along a spiral coordinate system.

This may be useful for cyclic phenomena, recurring events, or narrative structures.

The Coordinate Extension may define spiral coordinates independently of any particular visualization.

---

## Custom Views

Applications are free to define additional views.

Unknown view types should not affect dataset compatibility.

---

# Automatic View Generation

Future AI systems may automatically recommend useful views.

Possible inputs include:

- Dataset size
- Object types
- Relation density
- Time information
- Coordinate information

The generated views remain derived representations of the same dataset.

---

# Layout Independence

Visual layout should remain independent of the underlying data.

Layout information belongs in the Layout Extension.

This allows multiple layouts to coexist for the same dataset.

---

# Coordinate Independence

Coordinates should describe positions without assuming a particular visualization.

The Coordinate Extension may support:

- Cartesian coordinates
- Polar coordinates
- Geographic coordinates
- Spiral coordinates
- Custom coordinate systems

Different applications may interpret these coordinates differently.

---

# Multiple Views

Future applications may display several synchronized views simultaneously.

Example:

```
Timeline
      │
      │
      ▼
Relationship Graph
```

Selecting an object in one view may automatically highlight the same object in another view.

The dataset remains unchanged.

---

# AI-assisted Visualization

Future AI systems may assist in choosing appropriate visualizations.

Examples include:

- Detecting temporal structures
- Detecting hierarchical structures
- Detecting geographic data
- Detecting clusters
- Suggesting layouts
- Switching between complementary views

The final choice remains under user control.

---

# Future Directions

Possible future research includes:

- Automatic view generation
- Adaptive visualization
- Multi-view synchronization
- AI-assisted layout generation
- Interactive view switching
- Semantic visualization
- View recommendation systems
- Visual comparison between multiple datasets

The long-term vision is an ecosystem in which many applications provide different perspectives on the same E2R dataset while preserving a single source of truth.
