# Coordinate Extension Prototype

Status: Experimental interoperability prototype

Experimental Extension identifier:
`experimental.github.sukoyaka-dopeness.coordinate`

Prototype format version: `0.1.0`

This document defines an unregistered prototype for exchanging reusable
Entity and Event positions. It is not a registered Stable Extension and must
not be treated as one merely because applications implement it.

The prototype exists to collect executable interoperability evidence before a
normative draft is proposed. Its identifier, fields, and migration rules may
change incompatibly.

## Maturity decision

The 2026-08-13 maturity review found the executable evidence sufficient to
continue, but rejected direct Stable promotion. Prototype `0.1.0` is now frozen
as an interoperability and migration baseline. New design work belongs to a
separate normative candidate under the working identifier:

```text
draft.github.sukoyaka-dopeness.coordinate
```

That draft is defined separately in
[`coordinate-extension-draft.md`](coordinate-extension-draft.md). It is not
defined by this prototype document. In particular, applications
must not infer that replacing `experimental` with `draft` creates an alias, and
must not migrate merely by opening a Dataset. The first draft must incorporate
the accepted compatibility, external-reference, version-bootstrap, and Space
evolution decisions, then define a normative schema and explicit one-way
migration.

No Stable identifier is registered. See
`../research/coordinate-maturity-and-identifier-decision.md` for the accepted
non-normative decision record. The first draft-design input is recorded in
`../research/coordinate-space-component-compatibility-decision.md`: IDs and
semantic descriptors use exact matching, names remain display-only, and safe
writes require an explicit processor capability profile. The second design
input is recorded in
`../research/coordinate-external-reference-decision.md`: local definitions
remain self-contained and operationally authoritative, while future external
Component bindings are explicit and fail closed when unresolved or
conflicting. The third design input is recorded in
`../research/coordinate-version-and-space-evolution-decision.md`: the draft
owns its exact `specVersion`, Specification declarations must agree, and
semantic Space changes require a new Space ID and explicit migration.

---

## Responsibility

Coordinate represents where an Entity or Event is in a Dataset-defined
Coordinate Space.

Coordinate may carry:

- Dataset-local Space definitions;
- stable Component identifiers within each Space; and
- partial numeric Coordinate values for an Entity or Event.

Coordinate does not carry:

- Relation paths, curvature, or attachment points;
- label positions or layer order;
- icons, colors, line styles, or typography;
- zoom, pan, selection, modal, scroll, or other Application View State;
- a layout-generation algorithm or random seed; or
- semantic membership of an object in a group.

Those responsibilities remain with Layout, Presentation, application state,
deterministic generation, or another appropriate model. A Coordinate Space is
an interpretation context for values, not a container to which an object
belongs.

## Placement and prototype bootstrap

The exact experimental identifier is the payload key wherever the prototype
occurs:

```text
extensions["experimental.github.sukoyaka-dopeness.coordinate"]
```

The Dataset-level payload defines the Spaces and contains the prototype's
`formatVersion`:

```json
{
  "extensions": {
    "experimental.github.sukoyaka-dopeness.coordinate": {
      "formatVersion": "0.1.0",
      "spaces": []
    }
  }
}
```

`formatVersion` is an experimental bootstrap owned only by this prototype. It
does not establish a common Extension wrapper or version field.

When the Specification Extension draft is also present, its exact Coordinate
declaration must agree with `formatVersion`. An application that saves
Coordinate data must not create a Specification Extension declaration unless
it can declare every other Extension payload in the Dataset completely and at
its exact version. It may update a supported, already complete declaration.
If an existing Coordinate version or Specification declaration cannot be
maintained safely, the application must leave the existing Dataset data
unchanged and report that the requested adoption did not occur.

## Space definitions

`spaces` is an array of Dataset-local Space definitions. Each definition has:

| Field | Requirement | Meaning |
| --- | --- | --- |
| `id` | REQUIRED | Stable Dataset-local Space identifier |
| `components` | REQUIRED | Component definitions keyed by stable Space-local Component ID |
| `kind` | OPTIONAL | Informational coordinate-system family |
| `name` | OPTIONAL | Human-readable Space name; never identity |
| `externalReference` | OPTIONAL | Identifier for an external coordinate reference definition |

Space IDs must be non-empty strings and unique within `spaces`.
`components` must be a non-empty object. Each Component value is an object and
may contain:

| Field | Requirement | Meaning |
| --- | --- | --- |
| `name` | OPTIONAL | Human-readable Component name |
| `unit` | OPTIONAL | Unit identifier or Dataset-defined unit name |
| `positiveDirection` | OPTIONAL | Direction in which values increase |
| `minimum` | OPTIONAL | Inclusive numeric lower bound |
| `maximum` | OPTIONAL | Inclusive numeric upper bound |
| `period` | OPTIONAL | Positive numeric period for a cyclic Component |

Component IDs must be non-empty strings and unique because they are object
keys. Bounds, when present, must be finite numbers and `minimum` must not
exceed `maximum`. `period`, when present, must be finite and greater than zero.

The prototype intentionally uses Component-keyed values rather than ordered
position arrays. Axis order is therefore not inferred from JSON member order.

Example of the Linkscape experiment's two-dimensional logical Space:

```json
{
  "id": "linkscape-graph",
  "name": "Linkscape graph coordinates",
  "kind": "cartesian-2d",
  "components": {
    "x": {
      "unit": "linkscape-user-unit",
      "positiveDirection": "display-right"
    },
    "y": {
      "unit": "linkscape-user-unit",
      "positiveDirection": "display-down"
    }
  }
}
```

The values are reusable logical graph positions. They are not CSS pixels,
device pixels, a viewport size, or a promise that every renderer will use the
same scale.

### External references

`externalReference`, when present, has required non-empty `authority` and
`identifier` strings. It identifies a mature external coordinate reference
definition; it does not replace the local Component IDs used by Coordinates.

Applications must be able to compare and preserve the reference without
network access. Resolving it may be an optional application feature, but
ordinary Dataset use and Core validation must not depend on resolution.

Example:

```json
{
  "id": "harbor-geographic",
  "kind": "geographic-2d",
  "externalReference": {
    "authority": "OGC",
    "identifier": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
  },
  "components": {
    "longitude": {
      "unit": "degree",
      "positiveDirection": "east"
    },
    "latitude": {
      "unit": "degree",
      "positiveDirection": "north"
    }
  }
}
```

This example records an identifier; it does not claim that this prototype is
an OGC CRS encoding.

## Object Coordinates

An Entity or Event may contain an object-level payload with a `coordinates`
array:

```json
{
  "id": "entity-lighthouse",
  "extensions": {
    "experimental.github.sukoyaka-dopeness.coordinate": {
      "coordinates": [
        {
          "spaceId": "linkscape-graph",
          "values": {
            "x": 80,
            "y": 140
          }
        }
      ]
    }
  }
}
```

Each Coordinate has:

| Field | Requirement | Meaning |
| --- | --- | --- |
| `spaceId` | REQUIRED | ID of one Dataset-level Space |
| `values` | REQUIRED | Finite numeric values keyed by Component ID |

The following prototype constraints apply:

- an object may have at most one Coordinate for one Space;
- every `spaceId` must resolve to a Dataset-level Space;
- every key in `values` must identify a Component of that Space;
- every value must be a finite JSON number;
- every value must satisfy its Component's inclusive `minimum` and `maximum`
  when those bounds are present;
- `values` must contain at least one Component;
- missing Components are unknown and must not be filled with zero; and
- Entity and Event use exactly the same structure.

Coordinates are partial by design. For example, an Event whose vertical lane
is known but whose horizontal position is not may carry only `y`.

```json
{
  "id": "event-restoration-start",
  "extensions": {
    "experimental.github.sukoyaka-dopeness.coordinate": {
      "coordinates": [
        {
          "spaceId": "linkscape-graph",
          "values": {
            "y": 320
          }
        }
      ]
    }
  }
}
```

An object may have Coordinates in multiple Spaces. Applications may interpret
supported Spaces and must preserve unsupported Spaces and values whenever
practical. Space selection for a particular visualization is not encoded by
Coordinate; a future Perspective model may address intentional reusable
selection.

Relations do not receive Coordinates in this prototype. Linkscape Relation
geometry is Layout evidence rather than a position of the Relation as a Core
object.

## Multiple writers and conflicts

Prototype `0.1.0` does not record a writer, owner, timestamp, or last-writer
priority. Adding provenance merely to resolve application writes would mix a
new responsibility into Coordinate without sufficient evidence.

The current conflict baseline is structural:

- one Dataset contains at most one Space definition for one Space ID;
- one Entity or Event contains at most one Coordinate for one Space ID; and
- a Specification declaration, when present, agrees with `formatVersion`.

An application must not silently merge duplicate claims. A writer that wants
to update an existing Space must first support that Space's Component IDs and
the interpretation relevant to the values it changes. If the existing Space
uses incompatible Components, units, directions, or kind, the application
must leave it unchanged and either use a different Dataset-local Space ID or
report that adoption did not occur.

A writer may change only the Component values it understands and should
preserve other Components and unknown fields. This allows two applications to
coexist when they agree on one Space without treating "last application to
save" as authority.

Linkscape applies this rule to `linkscape-graph`: it updates `x` and `y` only
when the existing Space has its expected Cartesian kind, units, and positive
directions and the Entity has no duplicate Coordinate claim. Otherwise it
keeps the requested position temporary.

NarrativeLine provides the second writer for the same Space. Entity Detail may
explicitly update only already-recorded `x` and `y` values when the Space ID,
Cartesian kind, units, and positive directions exactly match Linkscape's
definition. It does not create Spaces, Components, Coordinates, or missing
values. Event Coordinates, other Spaces, and additional Components remain
read-only, and unknown fields and Coordinate array positions are preserved.

The executable round trip demonstrates a sequential update model: an explicit
NarrativeLine edit becomes the current Dataset value, Linkscape reads and may
later explicitly replace its supported values, and NarrativeLine reads that
result. Neither application gains permanent ownership. Prototype `0.1.0` does
not attempt concurrent merge or infer priority from application identity.

## Reading and preservation

A prototype-aware processor should:

1. recognize the exact experimental identifier;
2. require the Dataset payload and supported `formatVersion` before claiming
   interpretation;
3. resolve Coordinates only through locally defined Spaces and Components;
4. use only the Components it supports;
5. leave missing Components unknown;
6. ignore unsupported Spaces without rejecting unrelated Core data; and
7. preserve unknown fields, Spaces, Components, and Coordinates whenever
   practical.

The experimental Validator implements these rules offline. Coordinate-layer
diagnostics use `coordinate_*` codes so they remain distinguishable from Core
structural errors. Unsupported prototype versions produce a warning rather
than being validated against `0.1.0` rules.

Opening or displaying a Dataset must not generate Owned Coordinates. An
automatically calculated position remains Derived until an explicit workflow
adopts it. Stored Owned values take priority over later generation for the
same object and Space.

## Linkscape legacy migration

Earlier Linkscape builds used the unregistered payload:

```json
{
  "extensions": {
    "coordinate": {
      "positions": [
        {
          "spaceId": "linkscape",
          "x": 80,
          "y": 140
        }
      ]
    }
  }
}
```

This payload is not an alias for the prototype and must not be silently
reinterpreted as a Stable Extension.

During the experiment, Linkscape may read finite legacy `x` and `y` values as
a compatibility fallback. Its explicit `Save node coordinates` operation
then:

1. creates or reuses Dataset Space `linkscape-graph`;
2. writes the Entity Coordinate under the authority-qualified prototype;
3. removes only the migrated legacy position whose `spaceId` is `linkscape`;
4. preserves other legacy positions and unknown legacy fields; and
5. leaves Event Coordinates and all Layout, Presentation, and Application View
   State untouched.

Merely opening, arranging, or exporting without that explicit operation must
not migrate the legacy payload.

## Relationship to external standards

The prototype borrows requirements rather than claiming conformance:

- SVG distinguishes viewport coordinates from user coordinate systems and
  defines an initial display-oriented user space. This supports keeping
  logical values separate from zoom and pan.
- OGC coordinate-reference models make axes, units, directions, and coordinate
  order explicit. This prototype records conditional Component metadata but
  avoids positional axis-order ambiguity by keying values by Component ID.
- OGC CRS identifiers can identify a mature geographic reference definition.
  The local Dataset still defines the Component IDs used in its values.
- GeoJSON is intentionally narrower: it standardizes geographic positions in
  ordered arrays. It is useful for geographic interchange but is not a general
  model for graph, tree, timeline, or conceptual Spaces.

Further comparison is required before geographic transformation, accuracy,
datum, metric, or axis-order rules are standardized by E2R.

## Evidence gates and deferred decisions

This prototype must remain unregistered until there is evidence for:

- migration from Linkscape's legacy payload;
- partial and multiple-Space Coordinates;
- at least one Event Coordinate;
- preservation through an application that does not interpret Coordinate;
- a second application that interprets the same Coordinate intent;
- predictable ownership when multiple applications save the same Space;
- external-reference and offline-validation behavior; and
- Validator diagnostics that remain separate from Core validity.

Current prototype evidence satisfies legacy migration, partial and
multiple-Space values, an Event Coordinate, unknown-data preservation, a
second independent interpretation, offline external-reference handling, and
prototype-specific Validator diagnostics. Linkscape resolves
`linkscape-graph` into Entity graph positions. NarrativeLine independently
resolves Dataset Spaces, Components, units, recorded values, and missing
Components for Entity/Event Detail display, including user selection among an
object's multiple Spaces. That selection remains temporary UI state.

Duplicate-definition fixtures and Linkscape's refusal behavior establish a
minimum multi-writer conflict baseline. NarrativeLine now supplies a bounded
second writer for Linkscape's existing `x` and `y` values. The tested
NarrativeLine -> Validator -> Linkscape -> Validator -> NarrativeLine sequence
preserves the other Space and validates after both writes. This satisfies the
prototype's executable multi-writer evidence gate. Passing that gate does not
by itself justify Stable registration; maturity, identifier, and final
cross-document review remain explicit decisions.

Deferred prototype questions and later draft evidence include:

- final Stable Extension identifier and registration;
- implementation and review of the normative draft migration;
- the final vocabulary for Space kinds, units, and directions;
- transforms and relationships among Spaces;
- Coordinate selection by Perspective;
- multidimensional and non-numeric Component values;
- geographic accuracy and uncertainty;
- ownership and conflict resolution among multiple writers; and
- application migration from prototype `0.1.0` to draft `0.1.0`.

Coordinate, Layout, Presentation, and Application View State must pass their
evidence gates independently.
