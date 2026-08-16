# Minimal Source/Citation Workflow

Date: 2026-08-14

Status: Research decision; non-normative

## Purpose

This document closes the bounded Gate 3 comparison identified by
`temporal-epistemic-names-architecture-audit.md`. It considers one ordinary
NarrativeLine action:

```text
Record this source for this Event.
```

The comparison selects the smallest reusable cross-application conceptual
baseline for that action. It is not the absolute minimum record count: an
isolated Citation could own an inline source description. The selected
baseline additionally preserves Source reuse and identity independently from
display text. It does not define a JSON payload, Schema, Extension identifier,
final Extension partition, or NarrativeLine writer.

## Meaning of the user action

In the selected reusable baseline, the action establishes only that identified
source material is cited in connection with an identified Event. This is a
stored weak association, not merely UI wording: the association exists without
implying support, derivation, authorship, truth, reliability, or confidence. It
does not by itself assert:

- that the source caused the Event record to be created;
- that every field on the Event is supported by the source;
- a proposition represented by the Event;
- that the source is Evidence for a Claim;
- the strength, relevance, or reliability of any Evidence; or
- an assessor's confidence in the Event or a proposition.

The UI may use the familiar label **Source**, but the stored association must
not acquire stronger epistemic meaning from that label.

## Responsibility boundary

The minimal workflow needs two separable concepts:

1. **Source description** is a human-readable description of identified cited
   material so it can be displayed and, when appropriate, reused by more than
   one citation. The description is not Source identity.
2. **Citation association** records that a Source is cited in connection with
   a target.

For this bounded action, the target is the whole Event. The Citation
association is deliberately weak: it records contextual citation, not support,
derivation, authorship, or confidence.

Conceptual Source identity is required by this reusable baseline. It permits
one Source to be cited for more than one target and permits Sources with equal
display text to remain distinct. This does not decide that a Source must use
any particular Extension record shape.

A Citation association needs stable Dataset-local identity when it becomes
independently referenceable or distinguishable, for example when another
record assesses it or when multiple independent Citations connect the same
Source and target. Identity is not proven to be mandatory for every minimal
Citation association.

Conceptually, a Citation has two independent references: one to the cited
Source and one to the citation target. Both follow the provisional owner-
namespace plus local-identity baseline. This statement selects conceptual
identity and reference needs, not payload keys or Extension ownership.

## Alternatives compared

| Model | Records created by the action | Meaning preserved | Main problem | Decision |
| --- | --- | --- | --- | --- |
| Provenance of the Event | Source plus Provenance record | The Event record came from the Source | Incorrect when the user merely cites relevant material; origin and justification are different | Do not use as the default |
| Direct Citation association | Source plus Citation association targeting the Event | The Source is cited in connection with the Event | Intentionally does not say what proposition is supported | Selected reusable baseline |
| Minimal Claim plus Evidence | Source, Claim, and Evidence records, possibly with a Citation or locator | Source material bears on an explicit proposition | Creates proposition identity and lifecycle that the user did not request; an invisible Claim would be surprising | Use only after an explicit claim/evidence action |
| Source only | Source record only | The material exists in the Dataset | Does not preserve which Event the user selected or why the Source was recorded | Insufficient |
| Citation with inline source description | One Citation association targeting the Event and owning a source description | One isolated citation | Does not preserve reusable Source identity or distinguish same-text Sources | Absolute minimum record count, but insufficient for the selected reusable baseline |

### Why Provenance is not the default

Provenance answers how an identifiable record came to exist or change. A user
may cite a book after creating an Event from memory, or may create the Event
from one source and later cite another. Those are different facts. An explicit
workflow such as "created this Event from this import" may create Provenance,
but the ordinary Source action must not silently do so.

### Why an implicit Claim is not the default

An Event is an occurrence, not automatically a proposition. Turning the whole
Event into an implicit Claim leaves unclear whether the Claim concerns the
Event's existence, its name, its description, its time, or all current and
future fields. It also makes ordinary Event edits capable of changing the
meaning of a hidden Claim.

When a user explicitly identifies a proposition, a future Epistemic Claim may
refer to an existing Owned field slot and, when value-level meaning requires
it, separate companion value information. Evidence may then relate Source
material or a Source portion to that Claim. The Citation association is not
silently promoted or reinterpreted as Evidence.

### Why Source alone is insufficient

A reusable bibliography without an association cannot reproduce the user's
operation in another application. The selected Event and the contextual reason
for retaining the Source would be lost.

## User-visible workflow

The smallest NarrativeLine interaction can be presented as one visible
operation even though it adopts two conceptual records:

1. The user selects an Event and chooses to add a Source.
2. The user enters a human-readable source description and, if supported,
   identifies an existing Source instead of creating a duplicate.
3. NarrativeLine previews that the Source will be associated with the selected
   Event.
4. One intentional save adopts the Source, when new, and the Citation
   association as Owned Dataset content.

No hidden Claim, Evidence, Assessment, or Provenance record is created. The UI
should describe the saved result as a citation or associated source, not as
proof, verification, or confidence.

An application must not automatically merge Sources merely because their
display text, title, URL, or external identifier matches. Source identity is
not textual equality.

## Later enrichment

The minimal model remains useful without blocking richer workflows:

- A Citation may later gain a Source locator or excerpt while remaining a
  citation. Quoted text remains distinct from Claim text.
- An explicit Claim may later target the Event, one of its supported field
  slots, or another identifiable record.
- Evidence may later connect the Source or an identified Source portion to
  that Claim.
- Assessment may evaluate the Source, Evidence, Claim, method, or another
  supported target in a stated context.
- Provenance may separately record that an import, person, application, or
  Source caused a record to be created or changed.

Later enrichment adds records or explicit relationships. It does not change
the original Citation association into Evidence or Provenance, and it does not
copy the current field value into a Citation.

A future Citation-local locator, excerpt, or snapshot must not become a second
authoritative copy of the Source's canonical description. If reusable Source
information and Citation-local information coexist, their different
responsibilities must remain explicit.

## Editing and deletion behavior

The conceptual records have independent lifecycles. Common target-reference
safety establishes that:

- Removing a Citation removes only that association. It does not remove the
  Event or Source.
- Editing a Source description preserves Source identity when the represented
  source material remains the same. Replacing it with different material is a
  new identity decision, not an ordinary label edit.
- A Source shared by other Citations must not be cascade-deleted when one
  Citation is removed.
- Removing an apparently unreferenced Source should be an explicit operation;
  unknown Extensions may still contain references that the application cannot
  inspect.
- Removing the Event or Source does not authorize a generic reader to retarget
  or cascade-delete its Citation. The operation name alone does not determine
  resolver state; an absent target may be `missing`, while an identity-bearing
  retained or retired target may remain `resolved`.
- Missing and unknown references remain preservable and diagnostically
  distinct under the five-state target-reference baseline.

A future Citation owner specification may define explicit cleanup choices for
an aware editor. That owner-specific lifecycle policy remains separate from
the common generic rule and is not selected by this Gate.

## Target granularity

This Gate selects an Event-level Citation only for the stated ordinary action.
It does not establish that a citation supports every current or future Event
field.

More precise actions require different explicit targets and possibly stronger
responsibilities:

- "cite this source for the Event name" may target a stable field slot but is
  still only a Citation unless support is asserted;
- "this passage supports the recorded year 2020" requires an explicit Claim
  and Evidence model, including separate value-level information when the
  proposition must survive later field edits; and
- "this Event was created by importing this source" is Provenance.

These operations must not be collapsed merely because one application could
display them in the same panel.

## Validation and preservation

A future aware implementation should classify the Citation's Source reference
and citation-target reference independently. Each may be:

- `malformed` when the reference structure is invalid;
- `unknown` when its owner namespace, target kind, or capability is unsupported;
- `missing` when its understood target identity is absent;
- `resolved` when exactly one target matches; or
- `ambiguous` when more than one target matches.

For example, an application that understands the Citation owner but not the
Source owner reports the Source reference as `unknown`, not `missing`, while
resolving the Event target separately. An application may also resolve the
Source while the Event target is `missing`.

Unknown epistemic or citation data must not invalidate unrelated Core data.
Applications that cannot interpret the future representation should preserve
it whenever practical. A generic Validator may check supported structure and
reference integrity, but it cannot infer factual support, source reliability,
or confidence from the presence or number of Citations.

## Application and specification gate

The responsibility decision is:

```text
record this source for this Event
    = identified Source + weak Citation association to the identified Event
    != automatic Claim, Evidence, Assessment, or Provenance
```

This is sufficient to guide a bounded cross-application prototype, but not an
interoperable writer. Before NarrativeLine writes the model, the following are
still required:

1. a provisional representation that does not claim a final Extension ID;
2. conceptual fixtures covering Source reuse, duplicate descriptions, missing
   targets, unknown owners, later Claim/Evidence enrichment, and deletion;
3. preservation and partial-support evidence in at least two applications;
4. evidence that Source and Citation are useful independent support boundaries
   before declaring Specification Extension Features; and
5. a later decision on whether Source and Citation share one Extension or are
   separate responsibilities with an explicit dependency.

NarrativeLine may design a non-writing UI prototype against in-memory research
fixtures. It must not add application-defined citation fields to Core Objects
or emit an undeclared interoperable payload from this decision alone.

## Deferred questions

This review intentionally leaves open:

- final Source, Citation, Claim, Evidence, Assessment, and Provenance payloads;
- Extension names, identifiers, versions, and partitioning;
- bibliographic fields and external resource identifiers;
- embedded resources, excerpts, locators, and offline portability;
- Source deduplication and equivalence rules;
- Citation authorship, creation time, and change history;
- whether and how multiple independent Citations may connect the same Source
  and target;
- field-slot and value-level payload representation;
- Claim proposition representation; and
- Assessment scales, aggregation, and adoption context.

None of these questions requires a Core change.
