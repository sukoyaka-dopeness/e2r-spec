# Target Reference and Record Lifecycle Research

Date: 2026-08-14

Status: Research candidate; non-normative

## Purpose

Future E2R responsibilities may need to refer to Core Objects, Extension-
owned records, stable fields, or the Dataset itself. Relative Time, History
vNext, Names, Epistemic Claim, Evidence, Assessment, Provenance, and
Perspective all depend on such references, but the E2R Core does not yet need
to define a universal target-reference payload.

This document explores the smallest common contract that could make those
references resolvable and safely preservable. It deliberately does not define
JSON property names, JSON Schema, an Extension identifier, an ID generation
algorithm, or a new Core Object type.

## Authority and non-goals

This is a research document. The current Core and registered Extensions remain
authoritative. Nothing here changes Core validity, current History `1.0.0`, or
the meaning of an existing Dataset.

The research does not attempt to:

- create one Dataset-wide ID namespace for every Extension record;
- make every JSON value a semantic target;
- extend Core Relation endpoints to Extension records;
- define cross-Dataset references;
- require tombstones, replacement links, or cascade deletion everywhere; or
- select UUID, ULID, UUID v7, or another concrete ID algorithm.

## Problem statement

A reference is useful only when a consumer can determine, without guessing:

1. which Dataset-local responsibility owns the target;
2. which target kind is intended;
3. which stable identity identifies the target;
4. whether the target is currently present, unsupported, or malformed; and
5. what lifecycle event explains a target that is no longer present.

Array positions and unrestricted JSON Pointers are locations in a current JSON
representation. They are not, by themselves, semantic identity. Inserting,
deleting, or moving an array item can make a location resolve successfully to a
different record. Schema evolution or moving a collection can also invalidate
the location while leaving the logical record unchanged.

## Candidate target classes

These classes are conceptual. They do not prescribe a shared serialized
shape.

### Core Object

Entity and Event already have Dataset-local Core identifiers, and Relation
identifiers are also Core identifiers even though Relations cannot be targets
of other Core Relations. An Extension reference to a Core Object should use the
existing Core identity rules rather than creating an Extension-owned duplicate.

### Extension-owned record

An Extension-owned record needs an identity whose scope is declared by its
owning responsibility. The leading candidate is an ownership namespace plus a
local record identity, resolved within the Dataset. This does not imply that
all Extensions share one global record-ID space.

The target kind and the ownership namespace should remain conceptually
separate. A Name record and an Assessment may both be Extension records, but
their kinds, ownership, identity rules, and lifecycle semantics need not be
the same.

### Stable field slot

A stable field reference identifies an owner and a field identity, such as the
`name` slot of an identified Core Object. It identifies the slot, not every
value ever stored there.

This distinction is essential. If a Claim refers only to `Entity E1.name`,
editing `Alice` to `Alicia` changes the current value at that slot. That does
not establish whether the Claim was about Alice, Alicia, or the slot as an
editable property. A historical value assertion therefore needs an
identifiable record, snapshot, or other explicit value semantics owned by the
relevant responsibility.

### Dataset-level target

The Dataset itself may be a target for future Provenance or similar records,
for example to describe how a Dataset was created or transformed. The common
contract must either support this class explicitly or state a deliberate
exclusion. It must not be added accidentally as a side effect of a Core
schema change.

## Candidate resolution principles

- References are Dataset-local unless a future specification explicitly
  defines another scope.
- The owner declares which records or field identities are referenceable.
  Arbitrary scalar values are not semantic targets merely because a JSON
  Pointer can reach them.
- Namespace/ownership resolution and target-kind validation are separate
  conceptual checks.
- A reference to a known owner and kind whose target is absent is a missing
  target, not an unknown target.
- An unsupported owner or kind is unknown and must remain preservable by an
  application that cannot resolve it.
- An invalid reference structure is malformed, even when its apparent target
  would otherwise exist.
- Diagnostic location may use JSON Pointer, but diagnostic location is not
  semantic identity.
- An identity that may be persistently referenced should not be reused for an
  unrelated record after deletion. Whether this becomes a normative rule is
  still open.

## Lifecycle cases

### Ordinary edit

An owner may change the content of a record while retaining its identity. The
owning responsibility must define which edits preserve identity. The common
contract should not decide that every content change creates a new record.

### Replacement

Replacing a record with a new identity is different from editing the existing
record. A replacement relationship may be useful, but it must not be treated
as automatic redirection for every old reference. Some Claims, Assessments,
or Provenance records may intentionally remain about the old record.

### Deletion

Deletion must not silently delete or rewrite references. A remaining reference
may be diagnosed as pointing to a missing target, while preserving the
reference for round-trip and historical interpretation.

### Merge

Merging two records into one does not prove that every assertion about either
source record applies to the merged record. Merge metadata and semantic
equivalence are separate concerns.

### Split

Splitting one record into several cannot generally determine which new record
an old reference should target. Automatic selection is unsafe unless the
owning responsibility defines an exact operation-specific rule.

### Cascade deletion

Deleting a Source, Name, Claim, or other record must not imply universal
cascade deletion of Evidence, Assessment, or Provenance. Research history
may depend on preserving those records as unresolved or historical references.

## Diagnostic distinctions

At minimum, later validation and application behavior should distinguish:

| State | Meaning | Preservation expectation |
| --- | --- | --- |
| Malformed | The reference structure cannot be interpreted | Report structural invalidity; preserve raw data where possible |
| Unknown | The owner namespace or target kind is unsupported | Preserve without treating it as deleted |
| Missing | The owner and kind are known, but the identity is absent | Preserve and report a dangling/missing target |
| Resolved | The target is known and present | Permit responsibility-specific interpretation |
| Ambiguous | More than one target could satisfy the reference | Do not choose silently; report ambiguity |

These states are reference diagnostics. They do not by themselves establish
that the referenced assertion is true, applicable, adopted, or credible.

## Open design questions

1. Should each Extension declare its own record-ID scope, and how is that
   declaration discovered offline?
2. Is Dataset-level targeting needed by Provenance, or should it remain a
   separate profile-specific capability?
3. Which field identities are stable enough to be referenceable, and how are
   field slots distinguished from historical field values?
4. What minimum metadata is needed to represent replacement, merge, or split
   without automatic redirection?
5. How can a Dataset communicate that an identity is retired without making
   tombstones mandatory for every responsibility?
6. Which lifecycle rules belong to the common contract, and which must remain
   owned by the Extension that defines the record?
7. Can two applications preserve and diagnose unknown references without
   requiring a shared runtime registry?

## Evidence required before specification work

Before defining a shared payload or a writer, demonstrate at least:

- round-trip preservation by an application that does not understand one
  target namespace;
- safe diagnostics for malformed, unknown, missing, resolved, and ambiguous
  references;
- no silent redirection after array movement, schema relocation, or deletion;
- a concrete example where a field slot and a historical field value must be
  distinguished; and
- at least two applications using the same conceptual contract with
  responsibility-specific records.

## Current conclusion

A common target-reference and lifecycle contract is justified as a research
dependency, but a new Reference Extension or Core change is not yet justified.
The safest next review is to compare two or three conceptual reference models,
including Dataset-local namespace ownership, field-slot semantics, and
retirement behavior, while keeping all payload and identifier choices open.
