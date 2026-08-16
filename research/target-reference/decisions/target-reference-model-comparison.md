# Target Reference Model Comparison

Date: 2026-08-14

Status: Research comparison; non-normative

Related research: `target-reference-and-record-lifecycle.md`

## Purpose

The Target Reference and Record Lifecycle research identified a shared
dependency for Relative Time, History vNext, Names, Epistemic Claim,
Evidence, Assessment, Provenance, and Perspective. This document compares
three conceptual models for that dependency.

The comparison is intentionally prior to payload design. It does not select
JSON property names, an Extension identifier, an ID-generation algorithm, a
Core change, or a universal lifecycle operation.

## Evaluation criteria

Each model is evaluated against the following requirements:

- preserve the minimal Core and existing Core Object identity rules;
- allow Extensions to define and evolve their own records;
- resolve targets without guessing or live registry access;
- preserve unknown Extension data and references;
- distinguish a record identity, a field slot, and a field value;
- prevent silent redirection after array movement or ID reuse;
- diagnose missing, unknown, malformed, and ambiguous targets;
- avoid automatic redirection and cascade deletion during lifecycle changes;
- remain self-contained within a Dataset; and
- support partial implementations in more than one application.

## Model A — owner namespace plus local record identity

### Concept

Each reference identifies a Dataset-local owner namespace, a target kind, and
an owner-defined local record identity. Core Objects continue using their
existing Core identity rules. An Extension-owned record is resolved within its
declared responsibility rather than a Dataset-wide Extension-record registry.

A field-slot reference identifies an owner reference plus a stable field
identity. It does not automatically identify the value currently stored in
that field.

### Strengths

- Preserves Extension independence and the Minimal Core.
- Does not require every Extension to coordinate one global record-ID space.
- Makes ownership responsibility explicit for resolution and lifecycle rules.
- Fits unknown-Extension preservation and offline interpretation.
- Allows an owner to define whether a content edit preserves identity.
- Supports Dataset-level targets as an explicit target class without changing
  Core Objects.

### Risks and unresolved points

- Namespace declarations and target-kind vocabulary need an offline discovery
  and preservation mechanism.
- Consumers need a clear distinction between an unsupported namespace and a
  known namespace with a missing record.
- A common rule for persistent-ID reuse is still required.
- Field-slot references need explicit value/snapshot semantics for historical
  Claims and Assessments.

## Model B — Dataset-wide target registry

### Concept

Every referenceable record receives a Dataset-wide identity. A registry maps
that identity to the owning responsibility, target kind, and current record
location. Extensions may still own the meaning of their records, but all
reference resolution goes through the common registry.

### Strengths

- A reference can be short and uniform after registry resolution.
- Cross-responsibility references do not need to carry an owner namespace for
  every lookup.
- A registry could centralize lifecycle diagnostics and retirement metadata.

### Risks

- Introduces a broad shared mechanism that may become a de facto Core layer.
- Requires coordination among independent Extensions and applications when
  assigning identities.
- Makes unknown Extension preservation harder if registry entries are required
  for records an application cannot understand.
- Creates pressure to make every record referenceable, even where no
  interoperability evidence exists.
- A registry update could become an implicit migration requirement whenever a
  record moves or an Extension changes representation.
- Does not by itself solve field-slot versus field-value semantics, merge,
  split, or identity retirement.

### Assessment

This model is useful as a possible implementation index inside an application,
but there is not yet evidence that it should be a Dataset-level interoperability
contract. It should not be the default architecture at this stage.

## Model C — owner reference plus structured location

### Concept

The reference first identifies an owner responsibility or record, then uses a
structured location relative to that owner to reach a nested record or field.
The location may identify a record key, field slot, or a bounded path class,
while the owner remains responsible for declaring which locations are
semantically stable.

This model is a hybrid: it avoids one global registry but uses more location
information than Model A.

### Strengths

- Can describe records nested inside an identified owner without requiring
  every nested item to become globally registered.
- Makes owner-relative containment explicit.
- Could support field slots naturally when the owner declares stable field
  identities.
- May help applications preserve references during representation changes if
  the owner supplies a migration rule.

### Risks

- Structured locations can silently become JSON Pointer in disguise.
- Array positions, mutable field names, and schema relocation can still cause
  redirection unless the owner defines stable identity separately.
- Different Extensions may define incompatible location semantics.
- Reference resolution becomes dependent on Extension-specific path rules.
- A migration rule supplied by one version may not be available offline to an
  older application.

### Assessment

This model may be useful as an owner-internal technique, especially for
record-local fields, but it is unsafe as a general semantic identity unless
the stable identity portion is governed by Model A principles.

## Comparative matrix

| Criterion | Model A: owner + local ID | Model B: Dataset registry | Model C: owner + location |
| --- | --- | --- | --- |
| Core minimality | Strong | Weak to moderate | Moderate |
| Extension independence | Strong | Weak | Moderate |
| Offline resolution | Strong if namespace is preserved | Moderate; registry must be present | Moderate; owner rules must be known |
| Unknown-target preservation | Strong | Moderate to weak | Moderate |
| Array-movement safety | Strong if IDs are stable | Strong if registry IDs are stable | Weak unless location has stable identity |
| ID-reuse safety | Requires explicit lifecycle rule | Requires explicit lifecycle rule | Requires explicit lifecycle rule |
| Field-slot/value distinction | Explicitly possible | Not solved by registry | Explicitly possible but easy to blur |
| Merge/split semantics | Owner-specific and preservable | Central registry may tempt auto-redirect | Path changes can obscure meaning |
| Application partial support | Strong | Moderate | Moderate to weak |
| Need for new Core machinery | None apparent | High pressure | None apparent, but risk of hidden common path rules |

## Cross-model conclusions

The following conclusions hold regardless of the selected model:

1. A semantic reference must identify an intended target, not merely a current
   JSON location.
2. Target kind and ownership namespace must remain distinct concepts.
3. A record identity must be distinguished from a field slot and from a value
   snapshot.
4. Unknown, missing, malformed, resolved, and ambiguous states must be
   diagnosable without deleting or rewriting the raw reference.
5. Identity reuse after deletion must not silently redirect persistent
   references.
6. Replacement, merge, split, and cascade behavior belongs to the owning
   responsibility or explicit operation, not to an automatic universal rule.
7. Cross-Dataset references are outside this comparison.

## Provisional recommendation

Use Model A as the conceptual baseline for further research:

- retain existing Core Object identities;
- let each responsibility own and declare its record-ID scope;
- carry ownership/namespace information when resolving Extension records;
- treat stable field slots as a separate, limited target class; and
- define lifecycle diagnostics without automatic redirection or cascade
  deletion.

Borrow only the useful owner-relative containment ideas from Model C where an
Extension can demonstrate that they do not reduce to mutable location paths.
Keep Model B as an application-internal index possibility, not as a Dataset
interoperability requirement.

This recommendation is not a payload decision. It is a research ordering
decision: subsequent fixtures and design questions should first test whether
Model A can cover the required target classes without introducing a registry.

## Next evidence step

Create conceptual fixtures, without final JSON syntax, for:

1. a Core Object referenced by a Claim;
2. an Extension-owned Name record referenced by an Assessment;
3. a stable Core field slot versus a historical field value;
4. an unknown namespace preserved by an unaware application;
5. deletion and non-reuse of a persistent record identity;
6. replacement, merge, and split without automatic redirection; and
7. an optional Dataset-level Provenance target.

The fixtures should be round-tripped by at least two applications before any
shared payload or Stable Extension is proposed.
