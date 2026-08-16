# Application Visualization Generation

Date: 2026-08-13

Status: Exploratory and non-normative

## Purpose

This document explores how applications can generate multiple visualizations
from one E2R Dataset. It does not define a View Extension, register a
Perspective Extension, or require a particular visualization.

Earlier versions used `View` for both a rendered visualization and potentially
persisted authorial data. That term now conflicts with:

- **Application View**, the UI layer in application architecture;
- **Application View State**, such as zoom, pan, and current selection; and
- the persisted authorial-context responsibility provisionally called
  **Perspective**.

This document therefore uses **Application Visualization** for Timeline,
Relationship Graph, Tree, Table, Calendar, Map, Spiral, and similar rendered or
interactive forms.

## Terminology boundary

| Term | Meaning | Dataset responsibility |
| --- | --- | --- |
| Application Visualization | A rendered or interactive form such as Timeline or Graph | Application behavior, not an Extension identity |
| Application View | UI layer that presents state and invokes application services | Application architecture |
| Application View State | Zoom, pan, selection, hover, open panels, scrolling, and synchronization state | Normally outside the E2R Dataset |
| Perspective | Provisional name for persisted authorial context such as targeting, grouping, or non-temporal ordering | Candidate Extension responsibility; not registered |
| Coordinate | Reusable position in a defined Coordinate Space | Candidate Extension responsibility |
| Layout | Authored spatial composition and geometric overrides | Candidate Extension responsibility |
| Presentation | Appearance and styling | Candidate Extension responsibility |

An Application Visualization may consume all of these responsibilities without
owning them.

## Motivation

An E2R Dataset describes reusable information rather than one mandatory user
interface. Different applications may render the same Core and Extension data
as:

- Timelines;
- Relationship Graphs;
- Trees;
- Tables;
- Calendars;
- Maps;
- Spirals; or
- other purpose-specific visualizations.

The visualization is an application interpretation. Its existence does not add
a new object, fact, coordinate, layout, Perspective, or style to the Dataset.

## Single source of truth

A visualization should reference or derive from the responsible Dataset data
rather than duplicate it as visualization-owned facts.

For example:

- an Event label comes from Core `name`, not a second Timeline-only name;
- chronology comes from History, not the vertical order of rendered cards;
- Relation direction comes from Core `sourceId` and `targetId`, not arrow
  styling;
- reusable position comes from Coordinate when present;
- authored geometry comes from Layout when present; and
- appearance comes from Presentation when present.

This does not mean that every generated value must remain outside the Dataset.
A Derived coordinate, layout, Perspective suggestion, or Presentation value may
become Owned through an intentional adoption workflow under its responsible
Extension. It must not be stored as an opaque property of the visualization.

## Independence and synchronization

Application Visualizations should remain independently replaceable. Editing an
Event through a Timeline and renaming an Entity through a Relationship Graph
should update the same underlying Core objects.

Importing a Dataset must not depend on one visualization being available.
Failure to render a Map or Tree does not invalidate otherwise valid Core data.

Several visualizations may be displayed simultaneously. Selecting an object in
one visualization may highlight the same Core object in another by its stable
ID. The current selection and cross-highlighting are Application View State and
do not modify the Dataset.

A persisted Perspective may be shared by several visualizations, but the
visualizations are not thereby the Perspective. Conversely, multiple
Perspectives may be rendered using the same visualization type.

## Visualization types and prerequisites

### Timeline

A Timeline renders Events using History information and an explicit application
ordering mode.

History `temporalOrder` represents limited relative chronology; it does not
represent narrative reveal order or arbitrary display order. Temporary custom
sorting is Application View State. Intentionally persisted non-temporal
authorial ordering is a possible Perspective responsibility.

Timeline lanes, card placement, connectors, and collision avoidance are Layout
or Derived application geometry, depending on whether they have been
intentionally adopted.

### Relationship Graph

A Relationship Graph renders Core objects and Relations as a network.

The Core determines valid endpoints and structural direction. Relation routes,
self-Relation geometry, labels, and relative layering are Layout concerns.
Colors, line appearance, icons, and typography are Presentation concerns.
Automatic positions and routes remain Derived until intentionally adopted.

### Tree

A Tree renders a hierarchy only when the Dataset or a supported Extension
provides a hierarchy that the application can justify.

The existence of Relations alone does not establish parent/child meaning. An
application must not silently reinterpret arbitrary Relation direction as a
semantic hierarchy. Temporary grouping inferred for exploration remains
Derived; an intentionally persisted authorial grouping may be a Perspective
concern rather than a semantic fact.

### Table

A Table renders selected fields as rows and columns and may support searching,
sorting, filtering, and bulk editing.

Column order, widths, current filters, and sorting usually remain Application
View State. A persisted authorial selection or non-temporal order may instead
belong to Perspective. Table headings must not replace Core or Extension field
meaning.

### Calendar

A Calendar renders Events according to History data and a supported calendar
interpretation.

History v1 uses its specified Civil Time model. Alternative calendars require
an appropriate future Extension and must not be invented from display
preferences. Month navigation and the currently visible date range remain
Application View State.

### Map

A Map renders objects using a Coordinate Space whose Components and
interpretation support the mapping operation.

Not every two-dimensional coordinate is geographic, and the presence of
numeric `x` and `y` values does not prove a map coordinate-reference system.
Applications should use mature external coordinate standards where applicable
rather than inventing incompatible geographic semantics.

Coordinate remains a candidate responsibility; this document does not define
or register its schema.

### Spiral

A Spiral may render cyclic phenomena, recurring Events, or a narrative
composition.

Several models are possible and must not be conflated:

- reusable polar or cyclic coordinates in a Coordinate Space;
- authored spiral geometry in Layout;
- a Derived application arrangement; or
- a persisted authorial order in Perspective.

The visualization shape alone does not decide which responsibility owns the
underlying information.

### Other application visualizations

Applications may implement additional visualization types without changing
Dataset conformance. An unknown visualization type is application behavior, not
an unknown E2R Extension, unless the application separately stores data under a
defined experimental or registered Extension.

## Responsibility composition

An application may conceptually compose a visualization from:

```text
Core and Semantic data
    + History or other factual Extensions
    + optional Perspective
    + optional Coordinate
    + optional Layout
    + optional Presentation
    + Derived application results for missing values
    + Application View State
    -> Application Visualization
```

This is not a required processing pipeline. It shows ownership boundaries.

Precedence applies within one responsibility, not across unrelated
responsibilities. An Owned Coordinate can take priority over an automatically
generated Coordinate, but it does not override a Layout route or Presentation
color. Presentation cannot override semantic facts. Application View State does
not become authoritative Dataset content.

## Automatic visualization recommendation

An application or AI system may recommend useful visualization types from
supported evidence such as:

- presence and precision of History data;
- supported Coordinate Spaces;
- Relation density and supported semantic vocabularies;
- object counts;
- an active Perspective; or
- available Layout and Presentation data.

A recommendation is Derived application behavior. Merely recommending or
opening a visualization must not modify the Dataset.

The recommendation should explain its prerequisites. For example, a Tree
recommendation should identify the hierarchy it intends to render, and a Map
recommendation should identify the Coordinate Space it can interpret.

AI output must not invent semantic meaning solely to make a visualization
available. Any proposed persisted Perspective, Coordinate, Layout, or
Presentation values require an intentional, responsibility-specific adoption
workflow.

## Automatic generation within a visualization

An application may generate missing positions, routes, lanes, labels, or
styles. These results are Derived and follow the versioned Engine principles in
`research/exploratory/deterministic-generation.md` when repeatability is claimed.

Owned values take priority over later generation for the same responsibility.
A Dataset ID is not a mandatory seed. Generation should use explicit relevant
inputs, should not mutate the Dataset directly, and should expose a validated
delta before adoption when shared Engine behavior is developed.

## Coordinate independence

Coordinates describe positions without requiring a particular visualization.
One Coordinate Space may support more than one application visualization, and
one visualization may support several Coordinate Spaces.

Cartesian, polar, geographic, cyclic, or application-specific Components are
possible, but this document does not define their schemas. Component identity
and interpretation must be explicit enough for the consuming application;
physical units or axis directions are required only when that Space's meaning
needs them.

## Layout independence

Layout describes authored spatial composition without owning factual meaning,
Coordinate values, appearance, or current interaction state.

Multiple Layouts may coexist for the same Dataset. An application chooses a
compatible Layout through its workflow, configuration, or a future composition
mechanism. A Layout is not automatically bound to one Perspective or one
visualization type merely because one application created it.

Generated layout remains Derived. Only intentionally adopted Layout data is
Owned.

## Presentation independence

Presentation describes appearance without selecting semantic truth or owning
geometry.

The same Presentation may be useful across more than one compatible
visualization, and one visualization may use different Presentations. Visual
conventions must not carry the only copy of interoperable meaning.

## Perspective independence

Perspective is the provisional research term for persisted authorial context,
not a synonym for visualization.

A Perspective may express targeting, grouping, ordering, relevance, ranking,
or Coordinate selection without owning the underlying facts, coordinates,
geometry, or styling. Its exact name, capabilities, packaging, and schema remain
unsettled.

Applications should first demonstrate a concrete Perspective workflow before
attempting to standardize the complete capability family.

## Application View State independence

Zoom, pan, selection, hover, open panels, current tab, scroll position, visible
date range, and cross-visualization highlighting remain Application View State.

A local workspace or session format may remember them. Such persistence does
not make them interoperable Dataset data and must remain separate from
Perspective, Coordinate, Layout, and Presentation.

## Research experiments

### Shared Core editing

Edit one Core object from Timeline and Relationship Graph interfaces. Confirm
that both render the same object and do not maintain duplicate factual values.

### Synchronized selection

Select an object in one visualization and highlight it in another through the
Core object ID. Confirm that export does not serialize the selection.

### Perspective reuse

Use one experimental authorial grouping or ordering in two different
visualization types. Confirm that neither visualization-specific geometry nor
appearance is stored in the Perspective payload.

### Coordinate reuse

Interpret one candidate Coordinate Space in two applications or visualization
types. Confirm that viewport size and pan/zoom are not embedded in Coordinate
values.

### Layout substitution

Render the same facts and coordinates with two Layouts. Confirm that switching
Layout does not modify Core meaning, Coordinate values, or Presentation.

### Presentation substitution

Render the same content and geometry with two Presentations. Confirm that
semantic distinctions remain available without relying solely on styling.

### Unsupported responsibility

Ignore an unknown Perspective, Coordinate, Layout, or Presentation payload.
Confirm that Core data remains usable and the untouched payload survives a
round trip whenever practical.

### Recommendation without mutation

Generate Timeline, Graph, Tree, or Map recommendations and reject them. Confirm
that no Dataset value was added merely by analysis or preview.

## Open questions

- Is `Perspective` the best final name for persisted authorial context?
- Which concrete Perspective capability should be implemented first?
- How should an application determine that a Layout is compatible with a
  visualization?
- Which Presentation properties can be shared without defining graph-specific
  universal terms?
- When can a Tree safely infer a hierarchy, and when must it require explicit
  semantics?
- How should applications explain a visualization recommendation and its
  prerequisites?
- Which synchronization state belongs in a local workspace rather than a
  Dataset?
- What is the smallest experiment demonstrating reuse across two applications?

## Decision checkpoint

This terminology can guide application and research documents immediately, but
it does not justify registering new Extensions.

Formal work on Perspective, Coordinate, Layout, or Presentation should proceed
only when its own evidence gate is met. The existence of several useful
Application Visualizations is not by itself evidence that their data belongs in
one View or Visualization Extension.
