# Coordinate Space and Component Compatibility Decision

Date: 2026-08-13

Status: Accepted non-normative design record; incorporated into Coordinate
draft `0.1.0`

## Purpose

This memo resolves the first design task after the Coordinate maturity review:

> How does an application decide that it understands a Coordinate Space and
> may safely update selected Component values?

It defines compatibility semantics for the future
`draft.github.sukoyaka-dopeness.coordinate` candidate. It does not alter the
frozen experimental prototype, create the draft payload, migrate a Dataset, or
register a Stable Extension.

## Decision summary

The draft will use three distinct classes of metadata:

1. **identity**: Space ID and Component ID;
2. **semantic descriptors**: Space kind, Component unit, and positive
   direction; and
3. **display metadata**: names and other human-readable labels.

Identity and semantic descriptors are compared exactly. Display metadata never
determines compatibility.

An application may read a supported subset without understanding every
Component. It may write a Component only through an explicit local capability
profile whose required identity and semantic descriptors match the Dataset.
Unknown, missing, or mismatched semantic descriptors cause that Component to
remain read-only.

## D1. Exact lexical comparison

Space IDs, Component IDs, and semantic descriptor strings are opaque values.
Processors compare the parsed strings exactly and case-sensitively. They must
not:

- case-fold;
- trim;
- apply Unicode normalization;
- translate a display word;
- infer singular/plural equivalence; or
- replace one spelling or abbreviation with another.

Producers should avoid leading or trailing whitespace, but a processor must not
silently repair an existing identifier. This follows JSON's interoperable
code-unit comparison model rather than introducing E2R-specific normalization.
The draft schema will require every identity and semantic descriptor string to
contain at least one non-whitespace character.

Exact equality proves only lexical agreement. It does not prove that two
independent publishers intended the same concept. Semantic descriptor tokens
are not globally self-defining; safe interpretation also requires a known
draft vocabulary or application capability profile.

## D2. Identity scopes

### Space ID

A Space ID is unique only within one Dataset Coordinate payload. It identifies
one Space definition and is the target of object-level `spaceId` references.

The same Space ID in two Datasets does not establish shared identity,
equivalence, or a transform. Dataset merge and cross-Dataset Space identity are
outside this decision.

### Component ID

A Component ID is the exact key within one Space's `components` object. Its
scope is that Space. The same Component ID in another Space does not by itself
identify the same axis or quantity.

Object Coordinate values use these exact Component keys. JSON member order is
not Component identity and must not be treated as axis order.

## D3. Display metadata is never compatibility metadata

Space and Component `name` values are human-readable display text. A processor
may localize, truncate, or omit them without changing identity.

Applications must not use a name to:

- resolve a Space or Component reference;
- decide that two Components are equivalent;
- infer a unit or direction; or
- authorize a write.

Changing only a name does not require a new Space ID.

## D4. `kind` becomes a semantic descriptor

The prototype called Space `kind` informational, but both demonstrated writers
use it as a safety condition. In the draft, `kind` will be an optional opaque
semantic descriptor string, not a display label.

Absence and presence are distinct states. An application capability profile
must explicitly state whether it supports:

- one exact `kind` value; or
- an absent `kind` for a workflow that does not require a declared family.

An application must not treat an unknown `kind` as a familiar one based on its
spelling. This decision does not yet create a global registry of kind values.
Unqualified values such as `cartesian-2d` are safe only when their meaning is
defined by the draft or by an explicit application/profile agreement.

## D5. `unit` and `positiveDirection` are semantic descriptors

Component `unit` and `positiveDirection` will remain optional strings in the
first draft design, but their role changes from loosely descriptive text to
opaque semantic descriptor identifiers.

A human-readable unit label or localized direction label belongs in display
metadata, not in these fields.

The Coordinate draft itself does not assert that:

- `m`, `metre`, and `meter` are equivalent;
- differently written UCUM expressions are convertible;
- `east` is equivalent to `display-right`; or
- two arbitrary units with the same label have the same scale.

A profile may adopt an external vocabulary such as UCUM, but it must identify
and implement that vocabulary explicitly. Coordinate does not require UCUM,
does not perform unit conversion, and does not treat a bare unit string as a
network address.

When a writer profile requires a unit or positive direction, a missing or
different descriptor is incompatible. When the Dataset contains a descriptor
that the profile does not understand, the Component remains read-only.

Authority-qualified descriptor values are recommended for independently
defined vocabularies. This memo does not impose one universal descriptor
namespace syntax; that question can be revisited with Semantic and Dictionary
research without blocking the first Coordinate draft.

## D6. Numeric constraints have separate roles

`minimum` and `maximum` constrain which values may be stored. They do not
rename a Component or define its unit. A generic writer may accept different
bounds if it understands and enforces the recorded bounds before writing.

`period` changes how values may be interpreted cyclically. A writer that does
not implement the recorded period must treat the Component as read-only. A
writer that does implement periodic values may accept the recorded period as
part of its capability check.

Finite-number validation remains mandatory independently of compatibility.

## D7. Three compatibility levels

### Structural conformance

A Dataset is structurally conforming when its payload, references, uniqueness,
Component keys, numeric values, and constraints satisfy the exact draft
version. Structural conformance does not mean an application understands a
particular Space.

A generic application may present the raw recorded number together with its
IDs and descriptors after structural validation. That is inspection and
preservation, not a claim that the application understands the coordinate
semantics. A Validator checks the draft structure and registered draft
vocabulary rules, if any; it does not reject an otherwise conforming Dataset
merely because one application lacks a matching capability profile.

### Read compatibility

An application has read compatibility for a Component when it:

1. supports the exact Coordinate specification version;
2. resolves one unique Space definition and one unique object Coordinate;
3. recognizes the exact Component ID; and
4. understands enough of the Component's semantic descriptors for the read
   operation it claims to perform.

An application may read one Component while preserving unsupported Components.
It must not invent missing values.

### Write compatibility

An application has write compatibility for a Component only when all of the
following are true:

1. the exact Coordinate specification version is supported;
2. the Space and object Coordinate references are unique and valid;
3. the selected Space ID and Component ID match exactly;
4. the application's capability profile accepts the exact `kind`, including
   its presence or absence;
5. the Component's `unit` and `positiveDirection`, including absence, match
   what the profile understands;
6. any recorded `period` is supported;
7. the proposed finite value satisfies recorded bounds; and
8. unknown fields and all values outside the requested write are preserved.

Failure of any condition leaves the requested value unchanged. A processor may
still preserve, display, or export the rest of the Dataset.

## D8. Capability profiles are application knowledge

A capability profile is the processor's explicit rule for one workflow. It may
be implemented in code or configuration. It is not automatically persisted in
the Dataset and is not a new E2R Extension.

For the current evidence, the Linkscape/NarrativeLine profile requires:

```text
Space ID:             linkscape-graph
kind:                 cartesian-2d
Component IDs:        x, y
x unit:               linkscape-user-unit
x positiveDirection:  display-right
y unit:               linkscape-user-unit
y positiveDirection:  display-down
period:               absent
```

These descriptor values establish compatibility only because both applications
implement the same explicit profile. This memo does not register them as
universal E2R vocabulary terms.

## D9. Exact matching is not transformation

Two compatible Components may be read and written without conversion. Two
incompatible Components might still be mathematically transformable, but
transformation requires an explicit operation with known source and target
semantics.

The draft must not infer a transform from:

- matching names;
- matching Component count;
- similar kind strings;
- unit spelling;
- axis order; or
- numeric ranges.

Transforms among Spaces remain a later Coordinate design topic.

## D10. External references fail closed

The subsequent
`coordinate-external-reference-decision.md` resolves how local Component
descriptors interact with `externalReference`. Dataset-local definitions remain
the operational source of truth, while an external definition is an optional,
explicitly mapped binding that never silently overrides local data.

A generic writer must not claim external compatibility merely from local
strings. External-aware writing requires the exact reference and explicit
Component binding to be verified through a supported capability profile.
Ordinary reading, preservation, and Core validity remain offline.

## D11. Unknown fields and version boundaries

At an exact supported draft version, unknown fields must not redefine the
normative meaning of known fields. Applications preserve them whenever
practical and may update a known compatible Component without deleting them.

A future meaning-changing constraint requires a new specification version or
an explicitly declared Feature. A processor must not apply the rules of one
version to an unsupported later version merely because familiar fields are
present.

## Impact on the frozen prototype

No experimental payload changes in this step. The existing Linkscape and
NarrativeLine write checks already implement the ID, kind, unit, direction,
finite-value, and preservation parts of the accepted profile model. Their
current prototype payload has no `period`; draft implementations must add the
explicit period capability check before writing a draft Component.

The prototype's statement that `kind` is informational remains a historical
description of prototype `0.1.0`; it will not be copied into the draft. Draft
migration must preserve the prototype until an explicit operation creates a
separately identified draft payload.

## Informative standards comparison

- [RFC 8259](https://www.rfc-editor.org/rfc/rfc8259.html#section-8.3)
  describes interoperable JSON string comparison using numerical code-unit
  comparison. E2R adds no normalization layer.
- [OGC SWE Common 3.0](https://docs.ogc.org/is/24-014/24-014.html)
  demonstrates that an axis identifier is interpreted with its reference frame
  and that unit information may belong to the data Component. Coordinate uses
  this only as design evidence and does not claim SWE conformance.
- [UCUM 2.2](https://ucum.org/ucum) provides a machine-oriented unit code system
  with its own lexical and semantic equivalence rules. Coordinate permits a
  profile to adopt UCUM but does not reproduce or silently approximate those
  rules.

## Subsequent implementation status

External-reference precedence, exact-version bootstrap, and Space-definition
evolution were resolved by the subsequent Coordinate decision memos. Their
combined rules are now incorporated into
`../extensions/coordinate-extension-draft.md`, its schema, fixtures, and
explicit prototype migration contract.
