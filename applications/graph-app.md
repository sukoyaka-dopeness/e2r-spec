# Relationship Graph Application

This document describes ideas for a relationship graph application built on the E2R Core Specification.

This document is informational and is not part of the E2R Core Specification.

## Purpose

The Relationship Graph Application visualizes Entities, Events, and Relations as an interactive graph.

The application is intended to help users explore complex structures that are difficult to understand from chronological views alone.

## Core Concepts

- Entities are displayed as nodes.
- Events may also be displayed as nodes.
- Relations are displayed as directed edges.

Applications may provide different visual representations for different Core Object types.

## Graph Navigation

Users may:

- Select a node.
- Follow outgoing relations.
- Follow incoming relations.
- Expand neighboring nodes.
- Collapse parts of the graph.
- Focus on a selected subgraph.

## Layout

Applications may support multiple layouts, including:

- Force-directed layout
- Hierarchical layout
- Circular layout
- Grid layout
- Manual layout

The Core Specification does not define graph layout algorithms.

## Node Presentation

Applications may visualize nodes using:

- Labels
- Icons
- Colors
- Shapes
- Size
- Images

Presentation is application-specific.

## Relation Presentation

Applications may visualize relations using:

- Arrowheads
- Labels
- Colors
- Line styles
- Thickness

Applications may choose different visual styles for different relation types.

## Filtering

Possible filters include:

- Selected entities
- Selected events
- Relation type
- Connected component
- Graph distance
- Extension-defined fields

## Large Graphs

Applications may support:

- Progressive loading
- Incremental expansion
- Graph clustering
- Automatic grouping
- Search-first navigation

## Typical Use Cases

Examples include:

- Character relationship graph
- Organization chart
- Social network
- Knowledge graph
- Concept graph
- Investigation board
- Dependency graph
- Worldbuilding
- Software architecture

## Relationship to the Core

The graph is a visualization of Core Objects.

The Core Specification does not define:

- Layout algorithms
- Colors
- Icons
- Node shapes
- Edge routing
- Animation
- Interaction

These behaviors are application-specific.
