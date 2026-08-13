# Linkscape

Repository: e2r-linkscape

## Purpose

Linkscape is a reference application for exploring and editing Entity
relationships in E2R Datasets. It demonstrates practical use of the E2R
Relation model while remaining independent of application-specific semantics.
NarrativeLine remains the primary application for Event editing and timeline
presentation.

## Design goals

Linkscape should:

- visualize Entity nodes and Relations;
- support a small, understandable graph-editing workflow;
- remain interoperable with other E2R applications;
- preserve unknown Extensions during loading and saving; and
- avoid embedding application-specific semantics into the Core.

## Scope

The initial MVP is Entity-first. It imports a Dataset, displays Entity nodes
and Relation edges, and provides basic navigation and Entity inspection.
Event nodes and Event editing may be considered later, but are outside the
initial MVP so that Linkscape does not duplicate NarrativeLine.

Relation endpoints remain subject to the Core rule: they may reference an
Entity or Event, but never another Relation. Linkscape must not present
Relation-to-Relation connections as a Core capability.

## MVP

The MVP should support:

- importing an E2R Dataset;
- displaying Entity nodes and Relation edges;
- zooming and panning;
- selecting an Entity and opening Entity Detail;
- dragging Entity nodes; and
- saving user coordinates when the user intentionally saves them.

The application should preserve unrelated data and unknown Extensions when
saving. Automatically generated layout remains Derived application data. A
user coordinate becomes Owned Dataset data only when the user intentionally
saves it under the supported coordinate responsibility. The layout algorithm
itself remains an implementation detail outside the E2R specification.

Automatic layout fills only missing coordinates. Stored Owned coordinates take
priority, and opening a Dataset must not modify it merely because automatic
layout was used.

## Relation presentation

Linkscape may show Relation direction from `sourceId` to `targetId`. The Core
does not define the semantic meaning of that direction, so arrows or labels
must not imply meanings such as causality or ownership unless a supported
Extension provides them.

Applications that do not recognize a Relation Extension should continue to
display the graph using Core information only.

## Editing principles

Linkscape is a graph editor rather than a generic JSON editor. It edits only
the information it understands and should avoid modifying unrelated portions
of a Dataset. Unknown Extensions must be preserved whenever practical.

## Future features

Possible future capabilities include:

- Event nodes and Event-related views;
- creating, editing, and deleting Relations;
- Relation categories and semantic labels;
- richer direction indicators and edge routing;
- multiple graph layouts;
- graph filtering, search, and clustering;
- hierarchical layouts;
- semantic coloring; and
- Extension-specific visualization.

Coordinate and Layout Extensions remain candidates for future
standardization. Until Linkscape provides concrete interoperability
requirements, application layout state and stored logical coordinates should
remain conceptually separate.

## Reference role

Linkscape can serve as a reference application for Relation-related
Extensions. Its purpose is to test whether the minimal Relation model remains
sufficiently generic for graph-based applications while preserving
interoperability with NarrativeLine and other E2R tools.
