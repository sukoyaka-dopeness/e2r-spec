# History vNext Target Scope and Responsibility Continuity

Date: 2026-08-14

Status: Research gate; non-normative

## Purpose

This document performs the bounded Gate 2 comparison identified by
`temporal-epistemic-names-architecture-audit.md`.

The motivating case is an Object-specific Name record whose applicability is
temporal, for example a Name expression used by an Entity during one historical
period. The question is not how to encode a final interval or Name payload. The
question is which responsibility may eventually express that applicability
without silently changing the responsibility of Stable History `1.0.0`.

This review does not change Core, History `1.0.0`, Names, target-reference
payloads, Extension identifiers, or Validator behavior.

## Existing boundaries

History Extension `1.0.0` defines temporal information for Core Objects. Its
stable `history.time` location represents the primary temporal position of a
Core Object, and its `temporalOrder` field is limited to relative comparison
when recorded temporal values cannot distinguish those Objects.

History `1.0.0` explicitly excludes:

- time intervals and durations;
- approximate temporal expressions;
- relative relationships among Events;
- competing temporal hypotheses; and
- temporal applicability of arbitrary Extension-owned records.

Names research treats an Object-specific Name as an independently identifiable
record when it may be targeted by History, Claim, Evidence, Assessment,
Provenance, or Perspective information. A Name record is not a Core Object and
does not become one merely because it has a temporal applicability assertion.

The Target Reference baseline supplies a reusable way to identify such a record
and keeps resolver state separate from lifecycle, field-slot identity, and
value-level information.

## The motivating distinction

These statements have different subjects and must not be collapsed:

```text
Entity E existed or occurred at time T.
Name record N applies to Entity E during interval I.
Source S supports Claim C that N applied during interval I.
```

The first is temporal information about a Core Object. The second is temporal
applicability of an Extension-owned record. The third is an epistemic relation
that may cite evidence for the second. A future model may relate them, but it
must not make one record silently own all three meanings.

## Candidate responsibility models

### Model A — History vNext with a generic target model

History vNext would retain the History name and directly target Core Objects and
arbitrary identifiable Dataset records through the common target-reference
pattern.

**Advantages**

- One temporal responsibility and one family of temporal representations.
- Direct continuity from History `1.0.0` to future temporal assertions.
- A common reader could apply one temporal diagnostic vocabulary to Core and
  Extension-owned records.

**Risks**

- It changes History's current domain from Core Objects to arbitrary records.
- Existing History readers may recognize the name but misunderstand the new
  target domain, especially if they only support `history.time`.
- The boundary between temporal applicability, temporal extent, and general
  assertions may become a catch-all.
- Stable `history` responsibility continuity becomes a governance question,
  not merely an additive Schema change.

**Compatibility consequence**

Unknown future records remain preservable, but a History-aware application must
distinguish supported target kinds from unknown or missing targets. A reader
must not treat an unsupported Name target as a missing Core Object.

**Assessment**

Plausible, but too broad to select before a formal History naming, identity,
and target audit. Do not assume that the `history` identifier automatically
authorizes this expansion.

### Model B — Names plus an optional History dependency or profile

Names owns Name records and the domain meaning that a Name record is a Name of,
or an applicable Name for, its Object. A Names profile may optionally use a
future temporal capability for the temporal representation of that meaning or
require an exact temporal capability when a Name-applicability feature is
present. The profile or dependency declaration does not itself own the meaning
of applicability.

**Advantages**

- Names remains responsible for Object-specific names and their identity.
- A Names-aware application can preserve Name records even when it does not
  support temporal applicability.
- The dependency can be explicit and versioned rather than inferred from a
  shared field name.
- A profile can limit applicability to Name records instead of making History
  a universal registry.

**Risks**

- It may duplicate or blur the boundary between History temporal assertions
  and Names applicability semantics.
- A Names-only reader and a History-aware reader may disagree about whether
  an undated Name is incomplete or intentionally timeless.
- The final dependency and Feature rules require implementation evidence.

**Compatibility consequence**

Missing History data limits support for the dependent Names profile, not Core
validity or unrelated Names data. Unknown profile data must remain opaque.

**Assessment**

This is the smallest current boundary for the motivating Name-specific case,
provided Names owns the applicability semantics and the temporal responsibility
owns only temporal representation. It does not establish a general
cross-domain applicability model. The profile and dependency form remain
subject to later implementation evidence.

### Model C — Separate temporal-applicability responsibility

A dedicated responsibility owns assertions that an identifiable record applies
to a target, field slot, or context during a temporal extent. History remains
responsible for temporal representations and Core-Object temporal information;
Names remains responsible for Name records.

**Advantages**

- Separates temporal value representation from the assertion that a record
  applies during an interval.
- Preserves the current History responsibility domain and Stable `history`
  continuity.
- Can later serve Names, semantic records, Claims, or other Extension-owned
  records without making History a universal record registry.
- Aligns with the Core principle that responsibilities should remain minimal
  and independently extensible.

**Risks**

- Adds a new responsibility whose target and applicability vocabulary require
  independent design.
- It may need explicit dependencies on History, Names, and the target-reference
  pattern.
- A generic applicability record could become another catch-all unless its
  subject, interval, and adoption semantics remain constrained.

**Compatibility consequence**

Applications may preserve applicability records while supporting only Core
History or Names. Each target reference is diagnosed independently, and unknown
owner namespaces remain `unknown`, not `missing`.

**Assessment**

Cross-domain candidate requiring evidence that the same applicability semantics
and useful partial-support boundary recur outside Names. The examples of
semantic records, Claims, or other owners are reuse hypotheses, not evidence
for selecting this responsibility. It is not a registered Extension or final
payload decision.

### Model D — General assertion model with Core-focused History

History remains focused on temporal information for Core Objects. A general
assertion responsibility owns propositions such as “Name N applied to Entity E
during interval I,” with temporal values supplied by History or another time
responsibility.

**Advantages**

- Keeps History's current domain narrow.
- Represents applicability, evidence, competing assertions, and adoption in a
  common proposition model.
- Can express uncertainty and disagreement without treating all assertions as
  hard temporal facts.

**Risks**

- It may force ordinary temporal applicability into Claim-like machinery even
  when no epistemic dispute exists.
- Assertion ownership, adoption, and applicability can become conflated.
- It is larger than the motivating Names use case and depends on unresolved
  Epistemic design gates.

**Compatibility consequence**

Readers need to distinguish an unadopted assertion from an ordinary temporal
value. Mere coexistence of competing assertions must not become a structural
error without applicability or adoption context.

**Assessment**

Valid for richer epistemic workflows, but premature as the default owner for
ordinary Name applicability.

## Comparison matrix

| Model | Owns Name record | Owns temporal value | Owns applicability relation | Stable History continuity | Main unresolved risk |
| --- | --- | --- | --- | --- | --- |
| A. History vNext generic targets | Names | History | History | Conditional; domain expands | History becomes universal record registry |
| B. Names + optional History profile | Names | Temporal responsibility | Names; profile/dependency owns no new semantics | Preserved if profile is additive | Reusable temporal capability and dependency remain to be designed |
| C. Separate applicability responsibility | Names | History | Applicability responsibility | Preserved | New responsibility must stay narrow |
| D. General assertion model | Names | History or assertion model | Assertion responsibility | Preserved | Epistemic machinery may be over-applied |

## Provisional disposition

The Gate 2 research baseline is:

1. Stable History `1.0.0` remains Core-Object-focused.
2. A Name record may eventually receive temporal applicability without making
   the Name itself a Core Object.
3. For Name-specific temporal applicability, Model B is the provisional
   smallest responsibility boundary: Names owns domain applicability semantics
   and a future temporal responsibility supplies temporal representation.
4. Model C remains a separate cross-domain candidate and must not be selected
   until reuse and partial-support evidence justify it.
5. History vNext generic targeting (Model A) and a general assertion model
   (Model D) remain comparison candidates, not selected owners.

This disposition is intentionally weaker than selecting a new Extension. It
preserves the option to revise the boundary if implementation evidence shows
that a narrow applicability responsibility cannot support useful partial
interoperability.

## Resolver, lifecycle, and value-level consequences

Any future model must retain the Gate 1 separations:

- Source/target resolver state remains one of `malformed`, `unknown`,
  `missing`, `resolved`, or `ambiguous`.
- Resolver state does not encode retired, replaced, merged, or split lifecycle
  meaning.
- Generic readers do not invent redirect, merge propagation, split selection,
  or cascade deletion.
- A field slot is not the current value stored in that slot.
- A temporal applicability assertion about a Name record must not automatically
  snapshot or rewrite the current Name text. Record identity alone preserves
  historical expression meaning only if the Names lifecycle contract treats a
  substantive expression replacement as a new identity; otherwise exact
  historical value meaning may require explicit value-level information.
- Evidence or Claim records may refer to the applicability assertion later;
  they do not arise automatically from temporal applicability alone.

## Required evidence before payload work

Before defining a draft payload or registering a Feature, compare at least two
support profiles or application workflows that need the responsibility. The
evidence should show:

- a Name record with one applicability interval;
- two non-overlapping Name records for the same Entity;
- overlapping or competing applicability assertions without automatic merge;
- an unknown Name target preserved by a History-unaware reader;
- a missing or retired target distinguished from an unknown target;
- an edited current Name value remaining distinct from historical applicability;
- optional History dependency behavior; and
- later Claim/Evidence enrichment without automatic Claim wrapping.

The first experiment should be read-only and conceptual. It must not write an
application-defined temporal field into Core Objects or Stable History.

## Deferred questions

- the exact meaning of “applies,” including validity, usage, attestation, and
  preference;
- interval, point, open-ended, approximate, and competing temporal forms;
- whether applicability targets a Name record, a field slot, a value snapshot,
  or a context;
- how a substantive Name expression edit affects historical applicability;
- the formal relationship between applicability and History vNext Temporal
  Extent;
- adoption and co-applicability of competing assertions;
- owner-specific lifecycle of Name records;
- dependency and Feature packaging;
- final Extension identifiers, payloads, and schemas; and
- Validator severity and partial-support rules.

Name lifecycle and historical value ownership are examined separately in
`name-lifecycle-and-historical-value-ownership.md`. That review is a guardrail,
not a final Names identity or snapshot rule.

## Next step

Prepare a bounded Model B versus Model C conceptual fixture review. Test a
Names-plus-temporal-capability reader, a Names-only reader, and a candidate
applicability-only reader. Include Name-specific `used-during` and another
domain's `valid-during` to determine whether they share a semantic contract,
and include an Alice-to-Bob substantive Name edit to test historical value
preservation conditions.
