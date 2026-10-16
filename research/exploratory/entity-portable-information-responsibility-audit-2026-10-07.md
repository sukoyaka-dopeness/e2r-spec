# Entity-Linked Portable Information Responsibility Audit

Date: 2026-10-07

Status: **BOUNDED RESEARCH AUDIT / HUMAN DECISION PREPARATION / NO NEW
PORTABLE RESPONSIBILITY ADOPTED**

## Purpose and boundary

This audit compares the currently documented E2R responsibilities against two
consumer requirements: ParameterPlotter's adopted Dimension Assessment
Candidate and its Human-stated need to compare absolute quantities, and a
future Character Sheet consumer that may aggregate numeric and non-numeric
information about one Entity. The Character Sheet requirement is supplied by
the current Human request; no Character Sheet implementation or finalized
portable-data requirement was found in this repository.

This is not a Core or Extension proposal. It adopts no generic Attribute,
Property, Quantity, Measurement, Classification, Provenance, or saved-View
model. It does not modify the Dimension Assessment Candidate `0.1.0`, infer
facts from The Ashen Crown, or select sample values or vocabulary.

## Evidence and current authority

- [E2R Core](../../spec/core.md) defines Entity as an identifiable subject,
  does not define Entity categories, and provides only optional human-readable
  `name` and `description` plus opaque Extensions. It does not define a
  general attribute/value system.
- The [Dimension Assessment Candidate
  `0.1.0`](../../extensions/dimension-assessment-extension-candidate.md) is
  Human-adopted and remains non-Stable. It owns Dataset-level Dimension
  definitions and explicitly authored numeric Assessments of Entities against
  those Dimensions. It explicitly excludes arbitrary numeric Entity
  properties, physical quantities, measurement models, observations, time,
  evidence, provenance, assessor, and multiple observations. Its `unit` is
  descriptive free text, with no parser or conversion semantics. Its values
  are not a generic numeric carrier.
- The [Dictionary Extension document](../../extensions/dictionary-extension.md)
  discusses reusable entries for Entity/Event/Relation categories, tags,
  roles, states, and application-defined concepts. The Extension index does
  not register it as Stable, and the document leaves multiple-dictionary and
  external-dictionary reference rules unspecified. It is evidence for a
  vocabulary responsibility, not a final Classification contract.
- [Semantic Vocabulary Architecture](semantic-vocabulary-architecture.md)
  and [Semantic Layers](semantic-layers.md) are exploratory. They distinguish
  meaning from presentation, but do not settle a portable Classification
  representation or a universal attribute carrier.
- The [minimal Source/Citation research](../source-citation/decisions/minimal-source-citation-workflow.md)
  selects only a non-normative conceptual baseline for citing a Source in
  connection with an Event. It explicitly does not imply Evidence,
  Provenance, authorship, truth, reliability, or confidence. Field-slot and
  value-level targets remain open. The [target and record lifecycle
  research](../target-reference/decisions/target-reference-and-record-lifecycle.md)
  distinguishes Core Objects, Extension-owned records, stable field slots,
  and Dataset-level targets conceptually; it does not adopt a universal
  serialized target-reference contract.
- [History `1.0.0`](../../extensions/history-extension.md) owns temporal
  information for Core Objects and separates recorded civil time from derived
  instants. It does not define when a mutable Entity fact holds or when a
  quantity was measured. Those are not interchangeable timestamps.
- The [The Ashen Crown English sample](../../examples/ashen-crown.en.e2r.json)
  has Core Entity names/descriptions, Events with History data, and named
  Relations. Its Entities carry no formal Classification, Quantity,
  Dimension Assessment, or Source/Citation payload. Narrative descriptions
  are not structured classification or measurement evidence. It is therefore
  a useful probe of responsibility gaps, not evidence for inferred values.
- The ParameterPlotter repository README and current readiness documents were
  read from the adjacent checkout. They describe the adopted Candidate
  `0.1.0` and its accepted local consumer integration; they do not identify a
  separate portable Quantity responsibility. Git status reported an
  untracked `.github/FUNDING.yml`, which is outside this audit and was not
  changed. The current request explicitly selects **ParameterPlotter** as the
  formal Product name; older references to a “working name” or an unselected
  name describe earlier decision snapshots.

## Responsibility boundaries under test

| Information kind | Candidate owner indicated by current evidence | Boundary and unresolved point |
| --- | --- | --- |
| Core existence and human labels | Core Entity (`id`, optional `name` / `description`) | A description can narrate details but does not create field-level typed meaning, units, temporal validity, or semantic identity. No character-specific Core fields are indicated. |
| Classification / concept assignment | A future semantic or dictionary-backed responsibility | Dictionary research has category/role/tag examples, but no adopted multi-classification payload, classification kind taxonomy, vocabulary scoping, or mapping contract. Multiple concepts per Entity are a Human-stated direction, not a schema. |
| Explicit comparative score | Dimension Assessment Candidate `0.1.0` | It is an explicitly authored value against an Entity/Dataset Dimension with bounds. It is not a physical quantity or observation. The Candidate is not expanded by this audit. |
| Absolute amount | No adopted owner identified | Age, height, weight, distance, money, fictional resource amounts, and inventory amounts need their actual quantity/unit/reference meaning. A number plus a free-text label may preserve display but does not ensure cross-consumer comparability. Whether and how this is separate from Measurement/Observation is unresolved. |
| Measurement / observation | No adopted general owner identified | A measured result may need method, observer, measurement time, uncertainty, or repeated observations. Those are absent from Candidate `0.1.0`; whether a Quantity record can be measured or Observation owns the assertion lifecycle is a Product/specification decision. |
| Relationship between subjects | Core Relation, with meaning delegated | Affiliation, possession of a particular sword, birthplace as a particular place, or membership may be Relations when the other subject is an identified object. A count/amount of fungible goods or a literal location may have a different responsibility. The name alone does not decide. |
| Temporal validity | Not settled for Entity-owned facts | “Holds during” is distinct from when a user recorded, assessed, or measured a value. History `1.0.0` does not automatically provide validity intervals for Extension records. A future owner/target model must not conflate the times. |
| Source / citation / evidence / provenance / confidence | Separate future epistemic/source responsibilities | Existing research rejects treating a weak Citation as proof or Provenance. General targeting of a Classification, Quantity, Assessment, field slot, or value record is not adopted. Confidence is not interchangeable with a Source or citation. |
| Parameter applicability / comparison template | Application configuration or a separately chosen portable responsibility | A Classification must not itself imply that a Dimension is mandatory. A reusable template/recommendation may relate classes to useful parameters, but its ownership, portability, and applicability semantics remain unselected. |
| Active View / axes / chart geometry | ParameterPlotter application view state or a future presentation responsibility | Candidate `0.1.0` explicitly excludes selection, axis/display order, normalized values, and chart geometry. A portable saved comparison template is a separate decision. |

## Concrete probe, without assigning sample facts

These are responsibility probes from the request, not assertions about The
Ashen Crown's Entities and not an adopted vocabulary.

| Probe | Plausible responsibility to test | Why one generic “attribute” label is insufficient to decide it |
| --- | --- | --- |
| Person / Character / Human / Knight; Sword / Artifact / Character | Multiple Classification or concept assignments | The words may denote overlapping class, role, species, or narrative concept. Exact category semantics, hierarchy, identity, and vocabulary mapping are open. |
| Age | Quantity, a dated observation, or a value derived from other temporal facts | It changes with a reference time; “age when recorded” and “age at an in-story time” can differ. Neither is specified by Candidate `0.1.0`. |
| Height / weight / distance | Absolute Quantity, possibly supported by Measurement/Observation | Units and comparability matter. Candidate `unit` is opaque free text and cannot supply conversion or dimensional analysis. |
| Money | Quantity with currency context or an application-specific value | Currency identity, denomination, exchange time, and conversion are unresolved. A bare number loses meaning. |
| Resolve / Court Influence / Arcane Aptitude | Dimension Assessment if explicitly authored as scores against defined Dimensions | The labels do not establish whether a value is a rating, capacity, quantity, probability, or derived score. Human-authored semantics are required. |
| Magical reserve | Quantity or Assessment depending on what is recorded | A resource amount with units differs from an authored score on a scale; story text alone cannot choose which. |
| Occupation / species / title | Classification, a typed value, a Core label, or a Relation depending on the intended claim | The concepts mix roles, kinds, and literal text. A value bag does not settle identity or vocabulary. |
| Affiliation / birthplace | Relation to an identified Organization/Place, or a literal value if no such Entity exists | Target identity and relation semantics can matter more than the surface label. |
| Source / confidence / temporal validity | Source/Citation/Evidence/Provenance/Assessment and a separate validity-time responsibility | These are different epistemic claims and target granularities; embedding the same ad hoc fields in every value record blocks reuse and consistent targeting. |

The Ashen Crown's current Entity descriptions and Relations can help a Human
choose which of these probes is useful in a later fixture. No score, quantity,
classification, source, or temporal validity is generated from those
descriptions by this audit.

## Candidate architecture comparison

| Candidate | Ownership and interoperability | Benefits | Costs / risk | Fit for the two consumers and future provenance |
| --- | --- | --- | --- | --- |
| Specialist responsibilities only; no generic Attribute | Each Extension owns its semantic records and references. Consumers compose the responsibilities they understand. | Keeps Assessment distinct from Quantity, Classification, Relation, temporal validity, and epistemic claims; preserves semantic validation and unknown-data boundaries. | Cross-Extension composition and common reference/target conventions need deliberate design; a Character Sheet must aggregate heterogeneous owners. | ParameterPlotter can consume Assessment plus a future Quantity owner; Character Sheet can aggregate them. Provenance can target owner-qualified records if a later common target contract supports it. |
| Generic Attribute / Property Extension | One general Entity property/value collection owns heterogeneous fields. | A simple discovery surface and broad flexibility for a sheet-like consumer. | Risks an untyped property bag, semantic leakage into keys/labels, unit/time ambiguity, inconsistent validation, and accidental duplicative owners. Specialist meaning and applicability still need separate conventions. | Easy to display but weakly interoperable unless every property carries stable semantics. Provenance/Classification references become unclear if values lack stable record identity. |
| Common value carrier plus specialist semantic owner | Shared structural records carry values/targets; specialist owners supply Assessment, Quantity, Classification, or epistemic meaning. | Could reuse identity, target, lifecycle, and provenance hooks without treating all values as semantically alike. | Adds a shared abstraction and dependency surface before current research proves which fields/lifecycle are common; risk that the carrier becomes a shadow owner or forces every extension into one shape. | Potentially flexible for both consumers, but provenance and opaque preservation depend on exact target identity and versioning contracts not yet adopted. |
| Limited Entity Attribute owner plus specialist owners | A constrained owner covers only a named subset such as simple literal facts; Assessment, Quantity, Relation, History, and Semantic retain specialist ownership. | Avoids a fully universal bag while supporting non-numeric sheet fields. | The allowed field classes and boundary between a literal attribute and Classification/Relation remain contested; can duplicate Core `name`/`description` or specialized data. | Could help Character Sheet, but ParameterPlotter would still need explicit ownership for absolute quantities. Provenance targeting needs to say whether it targets the attribute record or its value. |
| Separate Assessment and Quantity, composed by applications | Assessment remains the adopted Candidate; a future Quantity responsibility is independent. ParameterPlotter and Character Sheet combine them in their UI. | Closest to current evidence; protects the adopted Candidate and keeps scale-based evaluation distinct from physical/absolute amounts. | Quantity semantics still need specification; repeated history/uncertainty/source conventions may fragment unless cross-cutting target/evidence design is planned. | Direct fit for ParameterPlotter's stated need and a Character Sheet aggregator, without making the Character Sheet a data owner. Provenance remains a separate, unresolved cross-cutting design. |

The candidates are not mutually exclusive in every detail. In particular, a
common reference or provenance mechanism could coexist with specialist value
owners without a universal Entity property bag. That possibility itself needs
Human-selected scope and must not be mistaken for an already adopted generic
carrier.

## Interoperability and preservation findings

1. **The adopted Assessment contract is deliberately narrow.** Treating it as
   the home for height, age, weight, currency, or resource quantity would
   contradict Candidate `0.1.0` unless a separate Human decision changed or
   replaced that contract.
2. **A generic carrier does not by itself create semantic interoperability.**
   Consumers still need stable meaning, unit/context, time, ownership,
   reference, and validation rules. A consumer that understands the envelope
   but not the meaning must preserve the opaque content rather than flatten,
   normalize, or drop it.
3. **Classification and applicability are separate.** Multi-classification
   does not make every related Dimension mandatory. Templates or
   recommendations can be a separate layer with explicit scope, rather than
   hidden rules in a class assignment.
4. **Relation and literal value are not interchangeable.** A reference to an
   identified Place or Organization may preserve identity and relationships;
   a free-text value may be all the author has. A generic field name cannot
   decide which is intended.
5. **Time has at least two questions.** When a fact applies and when it was
   recorded/measured/assessed may be different. An extension record's creation
   or measurement time must not be inferred from a Core Event time or conflated
   with temporal validity.
6. **Provenance targetability is a cross-cutting dependency, not a reason to
   duplicate ad hoc `source` or `confidence` members.** Existing research
   supports conceptual distinctions among owner-qualified records, stable
   field slots, and value-level assertions, but not their final common payload.
7. **Views and portable facts remain separate.** ParameterPlotter axes,
   selected Dimensions, chart geometry, and active view are not Assessment
   facts. A reusable comparison template requires separate evidence and
   adoption; application configuration may be sufficient for an initial
   consumer.

## Human decision gates

The smallest useful first gate is the ownership boundary for a generic
cross-domain carrier:

> Should E2R introduce a generic Entity Attribute/Property or common value
> carrier at all? If yes, is it only a neutral identity/reference envelope
> around specialist semantics, or does it own a defined class of Entity facts?

This is the foundational choice because the latter alternatives create
different validation, target identity, extension-composition, and preservation
responsibilities. **Recommendation:** do not adopt a universal property bag
from the current evidence. Keep the existing Assessment Candidate unchanged,
and require an explicit specialist owner for new portable meanings unless a
bounded cross-consumer case demonstrates a minimal shared carrier. This is a
recommendation only, not a decision.

Further Human gates, in dependency order, are:

1. Define the boundary among Assessment, Quantity, Measurement, and
   Observation, including whether quantity values can be asserted without a
   measurement event and how absolute quantities retain units/context.
2. Select whether Classification is a first-class portable responsibility,
   what category/type/role/state/tag/concept terms mean, how multiple
   assignments work, and how Dataset-local dictionaries and external
   vocabulary mappings participate. The current Dictionary document is not a
   final answer.
3. Decide whether field/value-level Source, Citation, Evidence, Provenance,
   and Confidence references need a shared target contract, and which target
   classes are in initial scope. Preserve the existing weak Citation and
   Candidate boundaries until then.
4. Decide whether Parameter applicability, comparison templates, or saved
   Views need portable representation or remain application configuration.
5. Decide whether the Character Sheet only aggregates existing/specialist
   Extensions or needs a distinct portable owner for otherwise unrepresented
   non-numeric facts. This must be informed by concrete Human-authored tasks,
   not invented sample values.

The gates may be sequenced as one or two bounded decisions at a time. No gate
here authorizes implementation, schema, Validator, or Candidate changes. If a
future direction conflicts with Candidate `0.1.0`, it must explicitly return
to Human rather than silently broadening that Candidate.

## Current disposition

- Core remains minimal; no Entity-specific fields are proposed.
- Dimension Assessment Candidate `0.1.0` remains Human-adopted, unchanged,
  and non-Stable.
- ParameterPlotter is the formal Product name by the Human decision supplied
  for this audit. Product/release version, release identity, and deployment
  remain separate decisions.
- The future Character Sheet is a consumer requirement, not an adopted owner
  or schema.
- No sample values, classes, or provenance facts were inferred.
- Runtime, Core, Extensions, schemas, Validator, tests, and applications were
  not changed.
