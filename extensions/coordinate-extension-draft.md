# Coordinate Extension Draft

Status: Draft candidate

Draft Extension identifier: `draft.github.sukoyaka-dopeness.coordinate`

Draft specification version: `0.1.0`

This document defines a candidate Extension for exchanging reusable Entity and
Event positions in Dataset-defined Coordinate Spaces.

The draft is not a registered Stable Extension. This working definition may
change during repository review. Once exact version `0.1.0` is published, its
meaning must remain immutable and an incompatible revision must use a new exact
version. The experimental prototype remains separately identified and
documented in [`coordinate-extension.md`](coordinate-extension.md).

The key words MUST, MUST NOT, REQUIRED, SHOULD, SHOULD NOT, and MAY in this
document are to be interpreted as normative requirements of this draft only.

---

## Responsibility

Coordinate represents where an Entity or Event is in a defined Coordinate
Space.

Coordinate may carry:

- Dataset-local Space definitions;
- stable Component identifiers within each Space;
- optional bindings to an external coordinate reference definition; and
- partial numeric Coordinate values for an Entity or Event.

Coordinate does not carry Relation routes, label placement, layer order,
icons, styling, zoom, pan, selection, grouping, ordering, or a generation
algorithm. Those responsibilities belong to Layout, Presentation,
Application View State, Perspective, application behavior, or another
appropriate model.

A Coordinate Space is an interpretation context for values. It is not an
Entity group or container.

---

## Placement and exact-version bootstrap

The exact draft identifier is the payload key wherever Coordinate occurs:

```text
extensions["draft.github.sukoyaka-dopeness.coordinate"]
```

The Dataset-level payload is REQUIRED whenever any Entity or Event contains a
Coordinate payload. It owns the Space definitions and exact bootstrap version:

```json
{
  "extensions": {
    "draft.github.sukoyaka-dopeness.coordinate": {
      "specVersion": "0.1.0",
      "spaces": []
    }
  }
}
```

`specVersion` is REQUIRED and MUST be the exact Coordinate specification
version governing the payload. Version `0.1.0` uses the release form
`MAJOR.MINOR.PATCH`, with non-negative decimal integers and no leading zeroes
except zero itself. Pre-release identifiers and build metadata are not used by
this draft.

The Dataset-level bootstrap governs every Dataset, Entity, and Event occurrence
of this exact Extension identifier. Entity and Event payloads MUST NOT repeat
`specVersion`. Draft payloads MUST NOT contain the prototype-only
`formatVersion` field.

A processor MUST read `specVersion` before interpreting the remaining
Coordinate fields. If it is missing or malformed, the Coordinate payload is
structurally invalid. If the exact version is unsupported, the processor MUST
NOT validate or interpret the payload using another version's rules and SHOULD
preserve every occurrence whenever practical.

Coordinate `specVersion` is not the Dataset's Core `version`, a Dataset
revision, a Space revision, or a common Core wrapper for Extensions.

### Relationship to the Specification Extension

The Specification Extension is optional. Coordinate remains exactly versioned
and offline-interpretable when Specification is absent or unsupported.

When a supported Specification Extension payload is present, its complete
`uses` array MUST contain exactly one declaration for this Coordinate
identifier, and the declaration's `version` MUST equal Coordinate
`specVersion`.

The Coordinate-owned field selects the Coordinate rules. The Specification
declaration is a consistency assertion and MUST NOT override it. A disagreement
is a Specification declaration conflict. A reader MAY continue exact
Coordinate validation from the supported internal version while reporting the
conflict separately. A writer MUST NOT change Coordinate or the declaration
until an explicit operation produces one consistent result.

A Coordinate writer MAY create Coordinate without creating Specification. If
Specification is already present, the writer MUST preserve its completeness
and exact-version consistency. It MUST NOT create an incomplete Specification
payload merely to declare Coordinate.

---

## Dataset-level structure

The Dataset-level Coordinate payload has:

| Field | Requirement | Meaning |
| --- | --- | --- |
| `specVersion` | REQUIRED | Exact Coordinate specification version |
| `spaces` | REQUIRED | Dataset-local Coordinate Space definitions |

`spaces` is an array and MAY be empty. Space IDs MUST be unique within the
array. Unknown fields MUST be ignored when reading and SHOULD be preserved
whenever practical.

---

## Space definitions

Each Space definition has:

| Field | Requirement | Meaning |
| --- | --- | --- |
| `id` | REQUIRED | Stable Dataset-local Space identifier |
| `components` | REQUIRED | Component definitions keyed by Space-local Component ID |
| `kind` | OPTIONAL | Opaque semantic descriptor for the Space family |
| `name` | OPTIONAL | Human-readable display name; never identity |
| `externalReference` | OPTIONAL | Exact external coordinate-reference identity |

### Space ID format and scope

A Space `id` MUST be a string containing at least one non-whitespace character.
It is compared exactly and case-sensitively. A processor MUST NOT trim,
case-fold, normalize, localize, or infer aliases for it.

The draft does not require a UUID, URI, reverse-domain name, or other global
identifier syntax. Producers SHOULD avoid leading or trailing whitespace and
SHOULD choose short, stable, human-auditable IDs such as `linkscape-graph` or
`harbor-geographic`.

A Space ID is unique only within one Dataset Coordinate payload. The same
string in another Dataset does not establish shared identity, equivalence, or
a transformation.

### Display and semantic metadata

`name`, when present, MUST contain at least one non-whitespace character. It is
display metadata and MUST NOT resolve a reference, establish compatibility,
infer a unit, or authorize a write.

`kind`, when present, MUST contain at least one non-whitespace character. It is
an opaque semantic descriptor compared exactly and case-sensitively. Absence
and presence are distinct. This draft does not define a global registry of
`kind` values.

---

## Component definitions

`components` MUST be a non-empty object. Each property name is a Component ID
and MUST contain at least one non-whitespace character. Component IDs are
compared exactly and case-sensitively and are scoped to their Space. JSON member
order is not identity or axis order.

Each Component definition is an object with these fields:

| Field | Requirement | Meaning |
| --- | --- | --- |
| `name` | OPTIONAL | Human-readable display name |
| `unit` | OPTIONAL | Opaque unit semantic descriptor |
| `positiveDirection` | OPTIONAL | Opaque increasing-direction descriptor |
| `externalComponent` | OPTIONAL | Component or axis ID in the Space's external reference |
| `minimum` | OPTIONAL | Inclusive numeric lower bound |
| `maximum` | OPTIONAL | Inclusive numeric upper bound |
| `period` | OPTIONAL | Positive numeric period for cyclic interpretation |

Optional string fields MUST contain at least one non-whitespace character.
`unit`, `positiveDirection`, and `externalComponent` are semantic descriptors,
not display labels. They are compared exactly. This draft does not infer that
two spellings identify equivalent or convertible units or directions.

`minimum` and `maximum`, when present, MUST be finite JSON numbers and
`minimum` MUST NOT exceed `maximum`. `period`, when present, MUST be a finite
JSON number greater than zero.

Bounds constrain stored and future values. `period` changes interpretation; a
writer that does not implement the exact recorded period MUST leave that
Component unchanged.

Unknown Component fields MUST be ignored when reading and SHOULD be preserved
whenever practical.

---

## External references

`externalReference`, when present, is an object with required non-whitespace
strings `authority` and `identifier`:

```json
{
  "authority": "OGC",
  "identifier": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
}
```

The ordered pair is compared exactly and case-sensitively. The identifier MAY
be URI-shaped, but Coordinate does not require dereferencing, network access,
or registry resolution. Processors MUST NOT trim, normalize, redirect, or
reduce either string to guess an equivalent identity.

An external-aware writer MUST support one exact, immutable external definition.
If the referenced definition is mutable or version-ambiguous and the processor
cannot establish the exact semantics it implemented, the Space is read-only
for that writer.

Dataset-local definitions remain the operational source of truth for E2R
serialization, structural validation, raw inspection, and preservation. An
external definition supplements them and MUST NOT silently replace local IDs,
descriptors, bounds, periods, or values.

### External Component bindings

`externalComponent` is permitted only when the enclosing Space has an
`externalReference`. Its identity is scoped by the complete external-reference
pair. Within one Space, two local Components MUST NOT claim the same
`externalComponent`.

A processor MUST NOT infer an external binding from a local Component ID,
`name`, direction, object-member order, or likely geographic convention. A
Space-level reference without Component bindings supplies context but does not
establish a generic external axis mapping.

### Resolution states

An external binding is absent, unresolved, verified, or conflicting.

- **Absent**: ordinary local compatibility rules apply.
- **Unresolved**: local data may be validated, inspected, and preserved, but
  external interpretation or conversion MUST NOT be claimed.
- **Verified**: an explicit local capability profile recognizes the exact
  reference, binding, and required descriptors.
- **Conflicting**: local data remains available, but the external binding MUST
  NOT authorize interpretation, conversion, or writing.

Network failure is an unresolved state, not Core invalidity. A malformed local
reference is a Coordinate structural error.

Every Component in a Space carrying `externalReference` is externally
referenced for write-safety purposes. It may be written only when it has an
explicit `externalComponent` and all ordinary write conditions, the exact
external reference, and that Component binding are verified. A context-only
reference therefore leaves the Space locally readable and preservable but
read-only. Coordinate performs no implicit unit conversion or coordinate
transformation.

---

## Entity and Event Coordinates

An Entity or Event MAY contain this object-level payload:

```json
{
  "extensions": {
    "draft.github.sukoyaka-dopeness.coordinate": {
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

The object-level payload has one REQUIRED `coordinates` array. If the payload
is present, the array MUST contain at least one Coordinate.

Each Coordinate has:

| Field | Requirement | Meaning |
| --- | --- | --- |
| `spaceId` | REQUIRED | Exact ID of one Dataset-level Space |
| `values` | REQUIRED | Numeric values keyed by that Space's Component IDs |

`spaceId` MUST contain at least one non-whitespace character and MUST resolve
to exactly one Space. One Entity or Event MUST NOT contain more than one
Coordinate for the same Space.

`values` MUST be a non-empty object. Every property name MUST resolve to one
Component in the referenced Space. Every value MUST be a finite JSON number
and MUST satisfy the Component's recorded inclusive bounds.

Coordinates are partial. A missing Component is unknown and MUST NOT be filled
with zero, a bound, a generated value, or a value from another Space merely to
complete a tuple.

Entity and Event use the same structure. Relation payloads under this
Coordinate identifier are prohibited; Relation paths and label positions are
Layout rather than Coordinates of the Relation object.

An object MAY have Coordinates in multiple Spaces. Coordinate does not select
which Space a visualization should use.

Unknown fields MUST be ignored when reading and SHOULD be preserved whenever
practical.

---

## Compatibility and writing

Structural conformance, read compatibility, and write compatibility are
separate claims.

A processor may inspect a structurally valid raw number and its descriptors
without claiming to understand its coordinate meaning.

A processor has read compatibility for a Component only when it supports the
exact Coordinate version, resolves the unique Space and Coordinate, recognizes
the exact Component ID, and understands the descriptors required by the read
operation.

A processor may write a Component only when:

1. it supports the exact Coordinate specification version;
2. Coordinate bootstrap is valid and, when Specification occurs, the writer
   supports its exact version and verifies its complete, consistent
   declarations;
3. the Space, Coordinate, and Component references are unique and exact;
4. its explicit capability profile accepts `kind`, including absence;
5. it accepts `unit` and `positiveDirection`, including absence;
6. it implements the exact recorded `period`, if present;
7. when the Space has `externalReference`, the exact reference and the
   Component's explicit `externalComponent` binding are verified;
8. the proposed finite value satisfies current bounds; and
9. all unknown and unsupported data remains unchanged.

Failure of any condition leaves the requested value unchanged. A processor MAY
continue reading, preserving, or exporting unrelated data.

Applications MUST NOT authorize a write from display names, similar strings,
matching Component counts, object-member order, or inferred unit conversion.

---

## Space evolution and reference integrity

A Space ID denotes one continuing definition within the Dataset's editing
lineage. It MUST NOT be recycled for a different meaning.

The same ID MAY be retained for:

- Space or Component `name` changes; and
- `minimum` or `maximum` changes when the result is structurally valid, every
  recorded value remains within the bounds, and any verified external profile
  continues to accept them.

The following require a new Space ID and MUST NOT replace a definition in
place:

- adding, removing, or renaming a Component ID;
- adding, removing, or changing `kind`;
- adding, removing, or changing `unit`, `positiveDirection`, or `period`;
- adding, removing, or changing `externalReference` or an
  `externalComponent` binding; or
- changing Component meaning while retaining the same strings.

An incompatible change MUST use an explicit create-and-migrate operation:

1. create the complete new Space under a new unique ID;
2. preserve the old Space and Coordinates;
3. create target Coordinates through a supported mapping or transformation;
4. update other supported references explicitly; and
5. remove old Coordinates and then the old Space only when applicable
   references have been handled.

Old and new Coordinates MAY coexist because their `spaceId` values differ.
They MUST NOT be maintained as automatically synchronized aliases.

A Space MUST NOT be deleted while an Entity or Event Coordinate refers to it.
A Component MUST NOT be removed while values use its key. A saved Dataset MUST
NOT expose an unresolved intermediate result from a multi-step migration.

An unreferenced Space MAY be deleted explicitly. Another Extension that refers
to Space IDs owns its additional reference-lifecycle rules; Coordinate does not
guess references in unknown Extension data.

This draft defines no `spaceVersion`, alias table, transform registry,
last-writer priority, or concurrent merge algorithm. Duplicate Space IDs and
duplicate per-object Coordinates are errors rather than merge instructions.

---

## Reading, preservation, and diagnostics

A draft-aware processor MUST distinguish Coordinate diagnostics from Core
validity. Malformed Coordinate data does not by itself invalidate unrelated
Core information.

A processor SHOULD report at least these states where applicable:

| State | Meaning |
| --- | --- |
| Supported | Exact draft version and required semantics are locally supported |
| Unsupported version | Bootstrap is exact but not locally supported |
| Structurally invalid | Known draft fields or references violate the exact draft |
| Declaration conflict | Supported Specification declaration disagrees or is incomplete |
| External unresolved | Local data is usable but external semantics are unavailable |
| External conflicting | External definition disagrees with its local binding |
| Read-only Component | Structural data is preservable but the write profile is incomplete |

Unknown fields and unsupported Components, Spaces, Coordinates, and exact
versions SHOULD be preserved whenever practical. A processor MUST NOT claim
exact conformance after validating a payload against a different version.

Opening or displaying a Dataset MUST NOT generate Owned Coordinates. Generated
positions remain Derived until an explicit workflow adopts them under this
Extension.

---

## Explicit migration from experimental prototype `0.1.0`

The source and target identities are distinct:

```text
experimental.github.sukoyaka-dopeness.coordinate + formatVersion 0.1.0
draft.github.sukoyaka-dopeness.coordinate        + specVersion 0.1.0
```

Replacing the payload key or renaming `formatVersion` is not migration.
Migration MUST be an explicit user or import operation and MUST NOT run merely
because a Dataset is opened, displayed, arranged, or exported.

Before migration, a processor MUST:

1. validate the complete prototype Coordinate layer at exact
   `formatVersion: "0.1.0"`;
2. support every Space, Component descriptor, Coordinate, and known field that
   it will migrate;
3. refuse the operation if any prototype Coordinate object contains an unknown
   field, because copying it under the distinct draft identifier could assign
   unverified draft meaning;
4. refuse the operation if the draft Coordinate identifier already occurs
   anywhere in the Dataset, rather than merging, overwriting, or synchronizing
   the two identities;
5. resolve any existing Specification declaration conflict; and
6. build and validate the complete target Dataset before saving it.

For a supported migration, the processor:

- writes draft `specVersion: "0.1.0"`;
- copies exact Space and Component IDs rather than normalizing them;
- copies display names and understood local descriptors explicitly;
- copies valid bounds, periods, and partial numeric values;
- preserves an exact prototype `externalReference` as context-only unless
  verified `externalComponent` bindings are added explicitly;
- does not infer external bindings, missing Components, transforms, or aliases;
- creates or updates the draft Specification declaration only when the whole
  `uses` array remains complete and exact; and
- removes the migrated prototype payloads only after the target passes Core,
  Coordinate, and applicable Specification validation.

Because prototype `kind` was informational and draft `kind` is semantic, a
processor MUST NOT migrate a Space carrying `kind` unless an explicit
capability profile accepts that exact value and its absence/presence semantics.

This first migration contract is complete and atomic rather than partial. If
any source Coordinate information cannot be migrated safely, the processor
leaves the entire prototype Coordinate layer unchanged and does not create a
parallel draft copy. Source and target payloads MUST NOT become synchronized
aliases.

---

## Schema and examples

The machine-readable schema is
[`schemas/extensions/coordinate-draft.schema.json`](../schemas/extensions/coordinate-draft.schema.json).
It validates a complete Dataset's Coordinate placements and local field shapes
for exact draft version `0.1.0`.

A processor selects this version-specific schema only after reading a supported
`specVersion`. It MUST NOT apply this schema to another exact version and
describe the result as that version's conformance.

Uniqueness, cross-reference resolution, bound ordering, value ranges, external
binding uniqueness, and Specification declaration agreement require semantic
validation in addition to JSON Schema.

Valid fixtures are under [`examples/coordinate-draft/`](../examples/coordinate-draft/).
Invalid fixtures are under
[`examples/invalid/extensions/coordinate-draft/`](../examples/invalid/extensions/coordinate-draft/).

Written requirements in this document remain authoritative when the schema or
an implementation disagrees.

---

## Deferred work

Draft `0.1.0` does not define:

- a Stable Extension identifier;
- cross-Dataset Space identity;
- a global vocabulary for `kind`, unit, or direction descriptors;
- unit conversion or transforms among Spaces;
- geographic datum, accuracy, or uncertainty;
- non-numeric Components;
- Coordinate selection by Perspective;
- provenance or concurrent merge policy; or
- Layout, Presentation, or Application View State.

Repository status: applications and the published Validator do not yet write
this draft. The repository review in
[`research/coordinate/decisions/coordinate-draft-0.1.0-review.md`](../research/coordinate/decisions/coordinate-draft-0.1.0-review.md)
passed it to read-only Validator implementation evidence. Application adoption
and writing remain deferred.
