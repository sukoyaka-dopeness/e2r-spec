# Relation Direction and Arrow Appearance — Post-MVP Research Memo

## Status

Exploratory post-MVP memo. This document does not register an Extension, change
the Core Specification, or select a final representation.

## Motivation

After the LiaisonScape MVP, users are expected to want more control over how
Relations are interpreted and displayed:

- reverse an existing Relation;
- create the opposite Relation to express a two-way structure;
- represent or display a relation without directional emphasis;
- choose arrowheads at the source, target, both ends, or neither end.

These requests look like one arrow-setting feature in the UI, but they combine
Core structure, relation semantics, and visualization appearance. They should be
designed as separate responsibilities before application implementation begins.

## Current Core boundary

The Core Relation has `sourceId` and `targetId`. Relation direction is structural,
but the Core does not assign semantic meaning to that direction and does not
define a Relation type. A Relation may be self-referential, and multiple
Relations may connect the same endpoints.

Therefore, the following are distinct operations:

### Reverse the existing Relation

Change `A → B` to `B → A` by exchanging the Core endpoints. This is within the
current Core model and can be an early LiaisonScape editing feature.

### Create a two-way structure

Create two Core Relations, `A → B` and `B → A`. This represents two assertions
or two directed facts. It must not be silently treated as one symmetric
Relation.

### Express semantic symmetry

A single Core Relation may have a semantic definition that says its predicate
is symmetric, such as “sibling of” or “communicates with”. The Core Relation
still has structural source and target endpoints; semantic symmetry belongs to
a semantic Extension or dictionary definition.

### Hide directional appearance

Removing arrowheads is a presentation choice. It must not convert a directed
Core Relation into an undirected semantic relation.

## Responsibility split

### Semantic directionality

The semantic layer may eventually describe properties of a reusable Relation
meaning, for example:

```text
parent of
  symmetric: false
  inverse: child of

sibling of
  symmetric: true
```

This is a candidate for the Dictionary/Semantic workstream. The exact property
names, validation rules, inverse-meaning model, identity, versioning, and
applicability remain open.

An inverse definition is not the same as automatically creating the inverse
Core Relation. A symmetric definition is not the same as storing two Core
Relations. Applications must not infer new assertions without an explicit
authoring operation.

### Arrow appearance

Arrowhead choice belongs to Presentation, or to a narrowly scoped future
presentation-related Extension. A candidate conceptual vocabulary is:

```text
source | target | both | none
```

This describes rendering only. It must not be used as the sole source of
interoperable semantic meaning. The same Relation may be rendered with no
arrowheads in one view and with a target arrowhead in another view while its
Core endpoints remain unchanged.

### Layout and geometry

Relation routing, curvature, label position, and relative layering remain
Layout concerns. Arrowhead choice should not be used to encode routing or
coordinate data.

### LiaisonScape application

LiaisonScape may later provide separate actions and controls:

- “Reverse direction”: exchange Core endpoints;
- “Add opposite Relation”: explicitly create the reverse Core Relation;
- semantic information: inspect or edit supported dictionary meaning;
- arrow appearance: choose a supported presentation setting.

The UI should not present “no arrow” as “undirected” or “both arrows” as proof
that two semantic assertions exist.

## Proposed staged workstream

1. **Core-safe editor operation** — add an explicit action to reverse the
   existing Relation, with endpoint-editing and round-trip tests.
2. **Explicit opposite assertion** — add a separate action to create the
   reverse Relation, with clear handling of IDs, names, parallel Relations, and
   self-Relations.
3. **Semantic research** — evaluate whether the existing Dictionary Extension
   can responsibly host symmetric and inverse properties, or whether a more
   focused semantic Extension is required.
4. **Presentation research** — define arrow appearance independently of Core
   direction, Layout, Coordinate, and application view state.
5. **Consumer integration** — implement only the supported semantic and
   presentation profiles in LiaisonScape and preserve unknown data elsewhere.

## Open questions

- Is `symmetric` a property of a dictionary entry, a relation assertion, or
  both?
- Does `inverse` identify another dictionary entry, a relation meaning, or a
  versioned semantic definition?
- How should conflicting or incomplete semantic definitions be diagnosed?
- Should arrow appearance be stored per Relation, per Layout, per Presentation,
  or in application-local view state?
- How should a consumer distinguish an authored arrow setting from a generated
  default?
- How should editing behave when a symmetric or inverse definition is unknown?
- What interoperability evidence is required before registering either
  semantic directionality or arrow appearance as a stable Extension?

## Related documents

- `spec/core.md` — Core `sourceId`, `targetId`, and structural Relation direction
- `extensions/dictionary-extension.md` — reusable Relation meanings
- `extensions/layout-extension.md` — routing and arrangement responsibilities
- `research/exploratory/view-generation.md` — separation of Core, Layout, and
  Presentation
- `docs/application-design-principles.md` — Core/Extension/application
  responsibility boundaries

## Non-goals

This memo does not:

- modify the Core Relation model;
- define a final semantic schema;
- define a final Presentation schema;
- make arrow styling carry semantic truth;
- require changes to LiaisonScape or NarrativeLine now.
