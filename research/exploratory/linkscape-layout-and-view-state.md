# Linkscape Coordinate, Layout, Presentation, and View-State Requirements

Date: 2026-08-12

Status: Exploratory and non-normative

Coordinate maturity outcome: the experimental prototype is frozen and draft
candidate `0.1.0` is assembled under
`draft.github.sukoyaka-dopeness.coordinate`; no Stable registration follows
automatically.

## Purpose

This note records requirements observed while implementing Linkscape. It does
not define an E2R Core field, register an Extension, or standardize Linkscape's
current experimental payload.

The purpose is to preserve implementation evidence while keeping five
responsibilities distinct:

1. Coordinate;
2. Layout;
3. Presentation;
4. Application View State; and
5. deterministic generation performed by the application.

Coordinate and Layout must not be combined into one universal Layout
Extension. Layout and Presentation must not be combined merely because both
affect a graph rendering. Application View State remains outside the
interoperable Dataset.

## Two independent classification axes

Linkscape data must be classified along two axes.

### Responsibility axis

This axis asks what a value means:

- **Coordinate**: reusable object position in a defined Coordinate Space;
- **Layout**: authored spatial composition or geometric override;
- **Presentation**: visual appearance;
- **Application View State**: current interaction or viewport state; or
- **Core or another Extension**: facts and labels that do not belong to graph
  presentation.

### Persistence axis

This axis asks how a value became Dataset content:

- **Derived**: calculated or temporary information that the Dataset has not
  intentionally adopted;
- **Owned**: information intentionally authored, imported, or adopted under the
  responsible Core or Extension schema; or
- **Application-only**: state that remains outside the interoperable Dataset by
  responsibility, even if a local workspace remembers it.

Responsibility and persistence are not interchangeable. For example, an
automatically calculated Relation route and a manually adjusted Relation route
are both Layout information. The first is Derived. The second remains an
unadopted temporary adjustment until an explicit Layout save operation exists.

## Current implementation evidence

| Linkscape value | Responsibility | Current state | Current export behavior |
| --- | --- | --- | --- |
| Automatically generated Entity position | Coordinate candidate | Derived | Not saved automatically |
| Dragged Entity position before `Save node coordinates` | Coordinate candidate | Temporary user adjustment | Not yet saved |
| Explicitly saved Entity position | Coordinate candidate | Owned experimental data | Exported |
| Automatically routed Relation path | Layout | Derived | Not exported |
| Manual Relation curvature | Layout | Temporary user adjustment | Not exported |
| Manual self-Relation orientation and radius | Layout | Temporary user adjustment | Not exported |
| Automatic or manual Entity-label placement | Layout | Derived or temporary adjustment | Not exported |
| Automatic or manual Relation-label placement | Layout | Derived or temporary adjustment | Not exported |
| Node, Relation, and label layer order | Layout | Temporary interaction result | Not exported |
| Node icon choice | Presentation | Future requirement | Not implemented as Dataset data |
| Colors, line appearance, typography, and selection emphasis | Presentation or current UI feedback | Application defaults | Not exported |
| Core `name` and `description` used as labels | Core | Owned Core data | Exported |
| Relation direction from `sourceId` to `targetId` | Core | Owned Core data | Exported |
| Zoom, pan, fit-to-view result, selection, hover, and open modal | Application View State | Application-only | Not exported |
| Pointer, pinch, drag, scroll, diagnostics, and status messages | Application View State | Application-only | Not exported |

This table describes Linkscape's current behavior, not a proposed Extension
schema.

## Coordinate prototype implementation evidence

Earlier Linkscape builds wrote this unregistered legacy payload:

```text
extensions.coordinate.positions[]
  { spaceId: "linkscape", x: number, y: number }
```

Linkscape now reads and writes experimental prototype `0.1.0` under the
authority-qualified identifier:

```text
experimental.github.sukoyaka-dopeness.coordinate
```

The prototype defines `linkscape-graph` at Dataset level with stable `x` and
`y` Component IDs and stores Entity values as:

```text
coordinates[]
  { spaceId: "linkscape-graph", values: { x: number, y: number } }
```

The explicit `Save node coordinates` operation migrates only the legacy
`linkscape` position and preserves unrelated legacy positions and fields.
Opening, arranging, and export without explicit coordinate save do not
migrate data.

`examples/cross-application-demo.json` exercises two Dataset-level Spaces,
multiple-Space values on one Entity, and a partial Event Coordinate using the
same object structure. Linkscape interprets its Entity positions.
NarrativeLine independently resolves the Dataset Spaces, Components, units,
recorded values, and missing Components in Entity/Event Detail. Its bounded
writer changes only compatible existing Entity `x`/`y`; Event values and other
Spaces remain read-only. An Entity with multiple Coordinates provides a
temporary Space selector. NarrativeLine also preserves all Coordinate and
Specification
payloads through a supported Event edit, export, and re-import.

This remains an application experiment, not a registered Coordinate
Extension. The second-consumer evidence gate is now satisfied, but the other
gates remain independent.

The experimental Validator now checks Dataset Space definitions, Component
metadata, Entity/Event scope, partial values, references, duplicates, and
`formatVersion` agreement. An external-reference fixture is processed offline
and round-tripped through NarrativeLine. Duplicate Space and per-object
Coordinate fixtures represent competing writer claims. Linkscape refuses to
overwrite an incompatible `linkscape-graph` definition and preserves supported
unknown fields when updating `x` and `y`.

## Coordinate responsibility

Coordinate describes where an identified Entity or Event is in a reusable
Coordinate Space. It does not describe the viewport, Relation routing, labels,
icons, or application controls.

The current research baseline requires:

- Dataset-level Space definitions as the local source of truth;
- stable Dataset-local Space identifiers;
- stable Space-local Component identifiers;
- values keyed by Component identifier rather than positional arrays;
- finite numeric values;
- partial coordinates when some Components are unknown;
- at most one Coordinate for one object in one Space;
- the same candidate structure for Entity and Event; and
- no Relation coordinate until a concrete use case demonstrates one.

Units, axis directions, ranges, periodicity, metrics, transforms, and external
coordinate-reference identifiers are conditional metadata. A Space must define
the interpretation needed by its Components, but every Space is not required to
invent Cartesian axes or physical units.

A Space may refer to a mature external standard where appropriate. Dataset use
and offline validation must not require resolving that reference over a
network.

### External-standard comparison

The prototype has been compared with these primary specifications:

- [SVG 2 Coordinate Systems](https://www.w3.org/TR/SVG/coords.html) separates
  viewport and user coordinate systems and defines the initial display-axis
  orientation. Linkscape therefore saves logical user-space values but not
  zoom, pan, or viewport dimensions.
- [OGC WKT CRS 2](https://docs.ogc.org/is/18-010r7/18-010r7.html) and
  [OGC Abstract Specification Topic 2](https://docs.ogc.org/as/18-005r4/18-005r4.html)
  make axes, units, direction, dimension, and sequence explicit. The E2R
  prototype records conditional Component metadata and uses Component-keyed
  values rather than positional tuples.
- [OGC API Features Core](https://docs.ogc.org/is/17-069r4/17-069r4.html)
  demonstrates an authority-defined CRS identifier such as OGC CRS84. The
  prototype permits an opaque external reference without requiring network
  resolution.
- [RFC 7946](https://www.rfc-editor.org/rfc/rfc7946) defines GeoJSON's narrower
  geographic position representation. It is not reused as the general graph,
  tree, timeline, or conceptual Coordinate model.

The comparison supports the current experiment but does not establish E2R
conformance with SVG, OGC, or GeoJSON.

## Layout responsibility

Layout describes intentional spatial composition without duplicating
Coordinate values.

Linkscape provides evidence for at least these Layout roles:

- Relation route geometry;
- self-Relation orientation and radius;
- Entity-label placement;
- Relation-label placement;
- optional label connectors; and
- relative layer ordering among object, route, label, and container roles.

Layout remains partial. Missing values are generated automatically and do not
invalidate the Layout.

### Relation routes

A useful route model must cover:

- straight Relations;
- curved Relations;
- parallel Relations between the same endpoints;
- self-Relations;
- endpoint attachment points; and
- user-controlled overrides that survive later node movement predictably.

The current research direction uses geometry relative to the represented
objects rather than raw viewport pixels:

- an ordinary Relation may use a source-to-target frame with along-route and
  normal-offset information; and
- a self-Relation may use an object-relative orientation and distance or radius.

The Relation itself remains the anchor. Layout must not duplicate `sourceId` or
`targetId` as alternative semantic endpoints, and it must never create a
Relation-to-Relation Core connection.

The exact curve vocabulary, anchor representation, obstacle behavior, and
response to endpoint-coordinate changes remain experimental.

### Labels and layer ordering

Core `name` and `description` remain the text source. Layout may place the
rendered label but must not duplicate the label text.

Label placement may be relative to an object, a Relation route, or another
defined Layout frame. Linkscape's current absolute drag offsets are
implementation evidence, not the final model.

Relative ordering constraints are a better research direction than a universal
absolute `z-index`. Linkscape's current "most recently selected is in front"
behavior is temporary UI behavior and is not persisted.

## Presentation responsibility

Presentation controls appearance after objects and geometry have been chosen.

Possible Linkscape Presentation requirements include:

- node shape, size, fill, and stroke;
- Relation line and arrow appearance;
- label typography, color, background, and visibility;
- selection-independent visual emphasis; and
- use of a reusable Media resource as a node icon.

Presentation does not own:

- Core `name` or `description` text;
- Relation semantic meaning;
- Core direction from `sourceId` to `targetId`;
- Coordinate values;
- route or label geometry;
- Perspective selection or ordering; or
- current hover and selection feedback.

A future Media responsibility should own the reusable resource. Presentation
may own the instruction to use that resource as an icon. Linkscape does not yet
provide enough evidence to define either schema.

## Application View State

The following values remain Application View State and are not saved to the E2R
Dataset by ordinary save or export:

- zoom and pan;
- automatic fit-to-view results;
- current selection and hover;
- open Entity or Relation Detail modal;
- pointer, pinch, and drag gesture state;
- temporary filters;
- scroll position; and
- diagnostics and status messages.

A future local session or workspace format may remember these values. That does
not make them Coordinate, Layout, Perspective, or Presentation data.

## Deterministic generation

Linkscape automatically calculates missing positions, Relation routes, label
positions, and collision avoidance.

These calculations are Derived. Opening a Dataset must not persist their
results. A deterministic result is not Owned merely because it can be
reproduced.

Stored Owned values take priority over later generation for the same
responsibility. Manual but unsaved adjustments remain temporary until an
explicit adoption workflow exists.

Determinism should be evaluated from explicit inputs and the exact engine or
application version. A Dataset ID is not a mandatory seed. The generation
algorithm itself is not Dataset content.

## Persistence requirements

Any Linkscape persistence experiment should satisfy these requirements:

1. Opening, viewing, sorting, or automatically arranging a Dataset must not
   create persisted Coordinate, Layout, or Presentation data.
2. Adoption must be intentional and scoped by responsibility. Saving node
   coordinates must not silently save Relation routes, labels, layer order, or
   appearance.
3. Owned values must refer to stable Core object IDs and must not redefine Core
   identities or Relation endpoints.
4. Partial data must remain valid. Missing values use Derived fallback without
   overwriting Owned values.
5. A manual Layout override must take priority over automatic generation until
   an intentional action returns it to automatic behavior.
6. An application must edit only fields it supports and preserve unknown Core
   fields and Extensions whenever practical.
7. Application View State must remain separate even if Coordinate or Layout
   data is saved.
8. A consumer that ignores all Coordinate, Layout, and Presentation data must
   retain the same Core Entity, Event, and Relation meaning.
9. An application-specific experiment must use a collision-resistant,
   authority-qualified Extension identifier and an explicit format version.
10. Persisting an application cache or arbitrary object does not make it an
    interoperable E2R value.

## Candidate experiments and evidence gates

### Coordinate experiment

Implemented evidence:

- define a Dataset-level Space with stable Component identifiers;
- migrate the current Linkscape `{spaceId, x, y}` fixture explicitly;
- demonstrate partial and multiple-Space coordinates;
- include at least one Event coordinate example;
- compare relevant external coordinate standards; and
- preserve the prototype through a NarrativeLine Event edit and round trip;
- interpret Dataset Spaces, partial values, and multiple-Space values in
  NarrativeLine Entity/Event Detail;
- validate the exact prototype offline with Coordinate-specific diagnostics;
- refuse duplicate and incompatible claims instead of silently merging them;
  and
- update the same compatible `linkscape-graph` Space from NarrativeLine, pass
  the result through Validator and Linkscape, write it again in Linkscape, and
  read it back in NarrativeLine while preserving other Spaces and unknown data.

Maturity decision:

- revise the frozen experimental prototype into a separate normative draft
  under working identifier `draft.github.sukoyaka-dopeness.coordinate`;
- use the accepted exact, capability-profile-driven compatibility model;
- keep local Space definitions operationally authoritative and use explicit,
  fail-closed external Component bindings in that draft;
- use the Coordinate-owned exact version bootstrap and require new Space IDs
  for semantic-definition changes;
- review the assembled normative schema, fixtures, and atomic migration before
  applications write the draft; and
- leave the Stable identifier undecided.

Completing the evidence does not automatically register Coordinate.

### Layout experiment

Next evidence:

- add a clearly application-owned, authority-qualified experimental payload;
- provide separate explicit save/reset controls for selected route, loop,
  label, and layer values;
- distinguish Derived automatic results from Owned adopted overrides;
- define predictable behavior when endpoint coordinates change;
- round-trip untouched data through NarrativeLine;
- test partial support and unknown-field preservation; and
- have another renderer interpret the same Layout intent.

Current Linkscape geometry must not be copied directly into a candidate standard
without this experiment.

### Presentation and Media experiment

Next evidence:

- let a user select at least one reusable icon resource;
- separate ownership of the Media resource from its Presentation use;
- show that visual styling does not carry the only copy of semantic meaning;
- preserve unknown Presentation properties; and
- render the same appearance intent in a second application or renderer.

Presentation standardization should follow the Media boundary experiment.

## Linkscape implementation guidance

Until the evidence gates are met, Linkscape should:

- keep the current `Save node coordinates` action narrowly scoped;
- continue treating automatic generation as Derived;
- keep manual Relation geometry and label placement temporary;
- expose ways to return manual adjustments to automatic behavior;
- preserve unknown fields and Extensions during import and export;
- keep Application View State out of the Dataset; and
- describe the current `coordinate` payload as experimental rather than an
  official E2R Extension.

If Layout persistence is needed before standardization, use a clearly
Linkscape-owned, authority-qualified, versioned experiment. Do not place all
Coordinate, Layout, Presentation, and Application View State into one payload.

## Decision checkpoint

Formal Extension work begins only when a concrete interoperability workflow
cannot be served by Core data plus safely preserved experimental state.

At that checkpoint, the repository should contain:

- representative Datasets;
- explicit Owned/Derived transitions;
- Validator behavior and fixtures;
- migration behavior for Linkscape's current Coordinate experiment;
- NarrativeLine round-trip preservation; and
- a second consumer that interprets the candidate responsibility.

Coordinate, Layout, and Presentation should pass their evidence gates
independently. Success in one responsibility does not justify standardizing the
others.
