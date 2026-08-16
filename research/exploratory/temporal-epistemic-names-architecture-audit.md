# Temporal, Epistemic, and Names Architecture Audit

Date: 2026-08-14

Status: Research audit; non-normative

Input sequence: Agenda 1 → Agenda 4 → Agenda 2 → Agenda 3

## Purpose

This document audits four architecture handoffs against the current E2R
specification and related research. The handoffs cover:

- Relative Time and relative chronology;
- History vNext temporal expressions and Temporal Extent;
- Epistemic Claim, Source, Evidence, Assessment, Confidence, and Provenance;
- Object-specific Names and their relationship with Core `name`; and
- the application boundary for NarrativeLine and future specialized tools.

The audit has five goals:

1. identify conclusions that form a coherent research baseline;
2. distinguish those conclusions from final Extension or Schema decisions;
3. identify drift or tension with current repository documents;
4. identify questions that require a bounded design review before
   implementation; and
5. define a safe document-change sequence.

This audit does not register an Extension, select an Extension identifier,
change Core or Extension conformance, define a JSON payload, or authorize an
application writer. Normative specifications remain authoritative when a
handoff or this audit disagrees with them.

## Sources reviewed

### Architecture handoffs

- Agenda 1 — Relative Chronology / Relative Time;
- Agenda 4 — Temporal Extent / Broad and Approximate Absolute Temporal
  Expressions;
- Agenda 2 — Provenance / Evidence / Confidence / Assessment; and
- Agenda 3 — Names.

The earlier incorrectly supplied Agenda 4 file is not an audit source. Only
the replacement Agenda 4 handoff named above is used.

### Current repository sources

- `spec/core.md`;
- `spec/philosophy.md`;
- `spec/rationale.md`;
- `spec/extension-naming.md`;
- `extensions/history-extension.md`;
- `extensions/metadata-extension.md`;
- `extensions/dictionary-extension.md`;
- `extensions/specification-extension.md`;
- `extensions/README.md`;
- `docs/application-design-principles.md`;
- `docs/application-recommendations.md`;
- `docs/roadmap.md`;
- `docs/ai-workflow-research.md`;
- `research/exploratory/extension-architecture-agenda-audit.md`;
- `research/exploratory/human-readable-reference-code.md`;
- `research/exploratory/historical-ecosystem.md`;
- `research/exploratory/semantic-vocabulary-architecture.md`;
- `research/exploratory/dataset-lineage.md`;
- `applications/future-ideas.md`;
- `applications/investigation-app.md`; and
- NarrativeLine's `docs/priority-feature-backlog.md` and its original ChatGPT
  design handoff.

## Authority and interpretation

The four handoffs describe conceptually closed discussions, but they are
architecture inputs rather than specifications. In this audit:

- **accepted research baseline** means the conclusion is coherent enough to
  guide later design;
- **safe clarification** means wording can be aligned without selecting a new
  payload or changing Dataset semantics;
- **design gate** means the conclusion must be made more precise before a
  Schema, Validator rule, or interoperable writer is created;
- **deferred** means the question is real but does not block present document
  alignment; and
- **superseded research** means an older non-normative statement should remain
  available as history but should no longer guide new work.

“Conceptually closed” therefore does not mean “ready for Stable registration”
or “all stated Features and Extension boundaries are final.”

## Executive result

The four agendas form a substantially coherent architecture. Their strongest
shared conclusions are:

- no Core schema change is required;
- richer temporal, epistemic, and naming information remains optional;
- unknown Extensions and unsupported records must remain preservable;
- Derived results do not become Owned Dataset information without an
  intentional adoption operation;
- independently referenceable assertions and records require stable
  Dataset-local identity;
- structural invalidity, temporal conflict, epistemic disagreement, and valid
  uncertainty are different diagnostic states;
- application rendering fallback has no temporal or epistemic meaning; and
- NarrativeLine remains a general-purpose Timeline application rather than a
  universal historical-research workstation.

No handoff justifies changing `Dataset`, `Entity`, `Event`, `Relation`, Core
identifier rules, or Relation endpoint rules.

The handoffs are not yet sufficient to define interoperable payloads. Four
cross-cutting design gates must be resolved before specification work can
proceed safely:

1. a stable target-reference and reference-lifecycle model;
2. the scope and responsibility continuity of History vNext;
3. the minimal Claim/Source/Evidence workflow, especially for lightweight
   citations; and
4. the adoption/applicability context used for consistency diagnostics among
   competing assertions.

These gates call for bounded follow-up questions, not a wholesale reopening of
all four agendas.

## Consolidated responsibility baseline

| Responsibility | Candidate ownership | Explicitly does not own |
| --- | --- | --- |
| Core | structural Objects, local IDs, directed connections, fallback labels | chronology, evidence, confidence, rich naming, presentation |
| History `1.0.0` | current primary contiguous Civil Time and limited `temporalOrder` | intervals, approximation, candidates, general Relative Time |
| History vNext candidate | Object-specific absolute temporal assertions such as Temporal Extent, Approximation, Bounded Point, candidates, Duration, and Calendar-based constraints | Object-to-Object temporal relations, Calendar rules, evidence, generic quantities |
| Relative Time candidate | temporal relations and relative temporal positions among supported targets | absolute Civil Time, display order, hypothesis adoption |
| Calendar candidate | calendar systems, calendar values, rules, and formally defined subdivisions | the assertion that one Object occupies a value |
| Quantity candidate | reusable quantitative representation such as Significant Figures | the domain meaning of a temporal assertion |
| Epistemic Claim candidate | an independently referenceable proposition under epistemic consideration | the original History, Semantic, Names, or Core value it refers to |
| Source candidate | reusable source material or a citation-level source description | evidential judgment or confidence |
| Evidence candidate | use of a Source or Source portion in relation to an Epistemic Claim | support strength, contradiction, reliability, final confidence |
| Assessment candidate | an identified assessor's evaluation of an identified target | universal truth or automatic aggregation |
| Provenance candidate | how an identifiable Dataset record came to exist or change | why its content should be believed |
| Names candidate | stable Object-specific name-expression records, including expression language/script | naming-kind vocabulary, identity equivalence, historical applicability, source credibility |
| Semantic/Dictionary candidate | reusable meanings, predicates, categories, and naming-kind concepts | Object-specific Name records |
| Perspective candidate | persisted context-dependent selection or preference, where later justified | ownership of the selected name, temporal assertion, or evidence |
| Application | editing workflow, partial support, display, deterministic fallback, Derived reasoning | silently converting UI state or inference into Dataset fact |

The rows above are responsibility candidates, not a commitment that every row
becomes exactly one Extension. In particular, Agenda 2's five responsibility
families still need implementation evidence before their exact Extension
partition is selected.

## Conclusions accepted as the research baseline

### Core and compatibility

- Core `name` remains optional and remains a short human-readable label.
- No temporal assertion, Source, confidence score, provenance record, or Name
  classification is added directly to Core.
- Core Object IDs and new Extension-local record IDs remain Dataset-local.
- Matching local IDs or matching names across Datasets do not establish
  identity.
- Relations continue to target only Entity or Event Core Objects. Extension
  records use Extension-defined references rather than Core Relations to
  become pseudo-Core Objects.

### Relative and absolute time

- History `temporalOrder` remains numeric and limited. It is not converted to
  an Event-reference graph and must not represent arbitrary display order.
- A future Relative Time responsibility is justified for explicit relative
  temporal assertions such as `A before B` and relative positions such as
  Day 0 / Day 3.
- Civil Time, `temporalOrder`, applicable History assertions, and applicable
  Relative Time assertions are inputs to Derived chronology rather than a
  winner-takes-all priority stack.
- Partial chronology is valid. A total visible list may use deterministic
  application fallback, but fallback has no temporal meaning and is not
  persisted as a temporal assertion.
- Calendar-based and elapsed-time quantities remain different. A calendar day
  is not silently replaced with 24 elapsed hours.
- Derived absolute dates, weekdays, durations, and relative displacements do
  not automatically become Owned History values.
- Civil Time Granularity, Temporal Extent, Approximation, Explicit
  Uncertainty, Bounded Point, Candidate Positions, competing assertions,
  Broad Absolute Temporal Expressions, and Duration remain distinct.
- A year-only Civil Time identifies a value at year granularity; it does not
  assert that the Object continued throughout the year.
- Temporal Extent describes continuation of the Object itself. It does not
  require separate boundary Events, although separately meaningful boundary
  Events may coexist.
- A point occurrence somewhere within bounds is not a Temporal Extent.
- Approximation does not imply an arbitrary numeric range.
- One disjunctive assertion is not automatically several independent
  competing assertions.
- Historically attested presence is not automatically actual existence
  extent.

### Epistemic information

- Ordinary Dataset information does not require automatic Claim wrapping.
- When epistemic discussion is required, an Epistemic Claim may refer to an
  existing Owned value without copying that value.
- An Epistemic Claim may also own a proposition that has not been adopted as
  ordinary Dataset information.
- Claim text and a quoted Source excerpt remain distinct.
- Source, Evidence, Assessment, Confidence, and Provenance remain conceptually
  distinct even if a future UI presents them together.
- Confidence is an Assessment result in a stated context, not an Object's
  intrinsic truth value.
- Source reliability, Evidence relevance/strength, Claim confidence, and
  methodological quality are different Assessment subjects.
- Multiple Assessments may disagree without making the Dataset structurally
  invalid.
- Aggregate confidence is Derived application or engine behavior by default.
- Provenance does not infer trust from whether a human, organization,
  application, or AI created a record.

### Names

- **Names**, rather than **Aliases**, is the correct umbrella responsibility
  candidate for Object-specific name expressions.
- Names may apply to Entity, Event, and genuinely named Relation instances.
- A label for a reusable Relation predicate belongs to Semantic/Dictionary,
  not to the individual Relation's Names data.
- Core `name` is a context-neutral Core-compatible fallback label, not an
  official, legal, true, birth, or universally preferred name.
- Name records require stable Dataset-local identity when they can be targets
  of History, Semantic, Claim, Evidence, Assessment, Provenance, or
  Perspective information.
- Name text is not identity and need not be unique.
- Name equality does not establish Core Object identity.
- Language and script describe the name expression and plausibly belong to
  Names; naming-kind semantics remain an open Semantic/Dictionary vocabulary.
- A Reference Code and an external identifier are not Names.
- Context-specific display-name selection does not silently rewrite Core
  `name`.

### Application boundary

- The accepted NarrativeLine MVP is not retroactively made incomplete by
  post-MVP architecture targets.
- NarrativeLine may initially implement a narrower subset than the full E2R
  responsibility, provided unsupported information is preserved.
- A lightweight Source/Citation UI is more appropriate for NarrativeLine than
  full evidence criticism or confidence aggregation.
- Specialized historical-research or investigation applications remain valid
  future consumers of richer Claim, Evidence, Assessment, Provenance, and
  competing-hypothesis data.

## Formal Feature status correction

Agenda 1 calls Ordering Constraint, Temporal Displacement, and Relative
Temporal Axis/Position separate Relative Time Features. This is useful as a
conceptual capability decomposition, but it is not yet a final Specification
Extension Feature declaration.

The current Specification Extension draft says Features should exist only
when partial support has practical interoperability value. Therefore the
three items are retained as **candidate Feature boundaries** until at least
two useful support profiles or application workflows demonstrate that value.

The same rule applies to History vNext and the Agenda 2 responsibility
families. A concept, field, or responsibility is not automatically a Feature.

## Cross-agenda dependency map

```text
History / Relative Time / Names / Core or Semantic information
                         |
                         v
             stable target-reference model
                         |
                         v
                 Epistemic Claim
                         |
              +----------+----------+
              |                     |
              v                     v
           Evidence             Assessment
              ^                     ^
              |                     |
            Source          assessor / method

Provenance may target identifiable records across these responsibilities.
Perspective may later select among already-owned records but does not own them.
```

Stable reference identity is the principal shared dependency. It affects
Relative Time assertions, History vNext assertions, Name records, Claims,
Evidence, Assessments, Provenance, and later Perspective selection. It must be
designed as a reusable pattern without adding new Core object types or using
mutable array positions as identity.

## Alignment with current normative documents

### Core

Result: aligned.

Core already keeps temporal, epistemic, and rich naming semantics outside the
minimal structure. Its optional `name` definition is compatible with the
fallback-label interpretation. A later wording clarification may say what
Core `name` does not imply, but no Core schema change is required.

### Core philosophy

Result: aligned with one future clarification.

The separation of Core, History, Semantic, Perspective, Presentation, and
Application View State supports the agenda conclusions. If Relative Time and
History vNext advance, the broad statement that temporal representation
belongs to History should be qualified so that absolute Object-specific time
and cross-Object relative temporal relationships remain visibly distinct.

### History Extension `1.0.0`

Result: current conformance remains intact.

The agendas do not change existing History `1.0.0` data. Its exclusions remain
true for version `1.0.0`. The following terminology-only correction is mature:

```text
Temporal Precision / Time Precision -> Civil Time Granularity
```

This rename must be applied consistently to the History document, rationale,
and application recommendations without changing fields or validation rules.

History vNext is a separate design phase. Current History applies temporal
information to Core Objects. Agenda 3's proposal that History vNext also
target Name records is a material scope expansion and remains a design gate.

### Design rationale

Result: aligned for History `1.0.0`, but future wording has drift.

The rationale currently lists approximate dates among higher-level temporal
semantics that may use separate Extensions. Agenda 4 instead assigns
Object-specific Approximation and related absolute temporal assertions to the
History vNext responsibility. This does not invalidate History `1.0.0`, but the
broad future-ownership wording cannot remain unchanged if History vNext adopts
Agenda 4. Update it only as part of a deliberate History vNext responsibility
decision, not as a casual terminology edit.

### Specification Extension

Result: aligned.

The exact-version, Feature, dependency, and preservation model can describe
future candidates. It does not decide their payloads or their responsibility
boundaries. Candidate Features and dependencies must not be declared before
support profiles are demonstrated.

### Application principles and recommendations

Result: aligned with terminology and future chronology updates.

Derived/Owned rules directly support anchor derivation, fallback ordering,
confidence aggregation, and display-name selection. The current recommendation
to show known dates before unknown dates remains a valid default for
applications that do not support Relative Time. A future Relative Time-aware
recommendation must state that applicable explicit temporal constraints may
interleave dated and undated Events without inventing dates.

## Drift and contradiction matrix

| Priority | Current source | Finding | Disposition |
| --- | --- | --- | --- |
| Safe clarification | `extensions/history-extension.md`, `spec/rationale.md`, `docs/application-recommendations.md` | `Temporal Precision` describes field granularity, not numeric/scientific precision | Rename consistently to Civil Time Granularity in one terminology-only change |
| Design gate | `spec/rationale.md` versus Agenda 4 | Current broad rationale places approximation outside History; Agenda 4 assigns Object-specific approximation to History vNext | Resolve during History vNext responsibility/schema work; keep History `1.0.0` exclusions unchanged |
| Research drift | `extensions/README.md` | Separate future Temporal Relation and Temporal Constraint Extensions do not reflect the candidate single Relative Time responsibility | Replace with a qualified Relative Time candidate only after its first focused research document; do not register it |
| Research drift | `extensions/README.md` | Citation and Evidence candidates omit Claim, Assessment, and Provenance boundaries | Update candidate wording after the minimal epistemic workflow and Extension partition are reviewed |
| Superseded research | `research/exploratory/historical-ecosystem.md` | Assigns confidence directly to Core Objects and treats `aliasAs` as semantic identity | Add a supersession note; future work uses contextual Assessment and explicit identity Claims without automatic merge |
| Partial supersession | `research/exploratory/human-readable-reference-code.md` | Treats Core `name` as primary and alias as subordinate | Keep Reference Code separation, but update naming language to Core fallback plus peer Name records |
| Clarification | `research/exploratory/semantic-vocabulary-architecture.md` | Vocabulary aliases/synonyms can be mistaken for Object-specific Names | State that concept aliases remain vocabulary data while Object-specific names belong to Names |
| Candidate immaturity | `extensions/dictionary-extension.md` | Useful semantic boundary exists, but identity/version/package/resolution rules are not mature | Do not use the current candidate as the storage model for Object Names or register it as Stable |
| Alignment completed | NarrativeLine `docs/priority-feature-backlog.md` | Gate 3 Source/Citation and Provenance boundary was previously an unresolved umbrella request | Gate 3 baseline is now recorded as weak Citation plus identified Source; final payload and writer remain gated |
| Backlog drift | NarrativeLine `docs/priority-feature-backlog.md` | Treats Agenda 1 and 4 questions as unresolved from before the handoffs | Record that responsibility semantics are conceptually resolved while Schema and writer work remain gated |
| Roadmap drift | `docs/roadmap.md` and the earlier extension-architecture audit | Implementation/evidence status predates Validator `0.2.0` and Linkscape's explicit Coordinate Draft migration | Update in a separate maintenance change; unrelated to the four agenda semantics |

Older research should normally receive a dated supersession or clarification
note instead of being rewritten as though the newer model had always existed.

## Design gates and cautious points

### Gate 1: target references and record lifecycle

All four agendas depend on stable references beyond Core Objects. The current
architecture establishes the need but not the representation.

Before any affected candidate becomes a writer, define at least:

- how a target identifies a Core Object, an Extension-owned record, or a
  stable field of an identified owner;
- how target kind/responsibility is disambiguated;
- how Dataset-local namespaces interact;
- how missing, deleted, replaced, merged, and split targets are diagnosed;
- whether tombstones or replacement links are needed;
- how unknown target kinds are preserved; and
- why raw array indexes and unrestricted JSON Pointer are insufficient as the
  sole semantic identity.

This design should remain outside Core unless interoperability evidence proves
that Core cannot remain minimal.

#### Gate 1 review disposition

The first bounded external review confirms that Gate 1 is an appropriate
independent design gate and does not require reopening the four agendas. It
also identifies four points that must be made explicit before a target-
reference research document can be treated as a design basis:

1. **Target kind and ownership namespace are different concepts.** Entity,
   Name record, and Assessment describe what is being targeted; the owning
   responsibility and its declared ID scope describe how that target is
   resolved. A common contract must not silently merge these concepts or
   require one Dataset-wide Extension-record ID space.
2. **A field slot is not the value currently stored in that slot.** An
   `Entity` plus a stable `name` field identity can identify a mutable slot,
   but it does not preserve the historical value that was present when a
   Claim or Assessment was made. Value-level assertions require their own
   identifiable record or snapshot semantics.
3. **Persistent references must not silently retarget after ID reuse.** The
   candidate lifecycle rule is that an identity that may be persistently
   referenced is not reused for an unrelated record after deletion. This is a
   reference-contract invariant under investigation, not yet a Core validity
   rule.
4. **Unknown, missing, and malformed targets are separate states.** A known
   namespace with an absent target is different from an unsupported target
   kind or namespace, and both differ from an invalid reference structure.
   Applications must preserve unknown references rather than treating them as
   deletions.

The review also confirms that Dataset-level targets must be considered
explicitly, or be explicitly excluded, because Provenance may eventually need
to describe how a Dataset itself was created or changed. Cross-Dataset
references remain outside the present contract. Merge, split, replacement,
tombstone, and cascade-delete behavior remain ownership- and operation-
specific; the common contract must not invent automatic redirection or
cascade deletion.

The next bounded artifact is therefore a separate, non-normative research
document on Target Reference and Record Lifecycle. It should compare a small
number of conceptual reference classes and lifecycle cases without selecting
JSON property names, a Reference Extension, an ID algorithm, or a Core change.

### Gate 2: History vNext responsibility continuity

Agenda 4's Object-specific absolute temporal assertions are a plausible
evolution of History. Agenda 3 goes further by asking History to target a Name
record rather than a Core Object. That changes the domain of History from:

```text
temporal information for Core Objects
```

to potentially:

```text
temporal assertions about arbitrary identifiable Dataset records
```

Before choosing the latter, compare at least:

1. History vNext with a generic target model;
2. Names plus an optional History dependency/profile;
3. a separate temporal-applicability responsibility; and
4. a general assertion model in which History remains Core-Object-focused.

The choice affects whether Stable `history` retains responsibility continuity.
Run the promised formal History naming/identity audit after this boundary and
the vNext Schema are concrete enough to compare.

This bounded comparison is recorded in
`history-vnext-target-scope.md`, with the review disposition in
`history-vnext-target-scope-review-disposition.md`. The review rejected Model C
as the current provisional owner because its generic `applies` meaning lacks
cross-domain evidence. For the Name-specific case, Names plus an optional
future temporal capability is the provisional smallest boundary: Names owns
the domain applicability meaning and the temporal responsibility supplies only
temporal representation. Stable History `1.0.0` remains Core-Object-focused;
History vNext generic targeting and a general assertion model remain open
alternatives. No payload, Extension identifier, or History schema change
follows from this disposition.

### Gate 3: lightweight citation versus symmetric Claim mediation

Agenda 2 prefers Evidence to connect Source material to an Epistemic Claim.
It also says ordinary data is not automatically Claim-wrapped. NarrativeLine,
however, needs a lightweight operation resembling:

```text
Source: 山田太郎『○○史』2020
```

The architecture does not yet determine whether that operation means:

- Provenance of a whole Object or record;
- a Citation attached directly to an identified record;
- creation of a minimal Epistemic Claim plus Evidence;
- Source-only information awaiting later linkage; or
- another intentionally small profile.

Automatically creating invisible Claim records may surprise users and create
identity/lifecycle burdens. Direct Evidence-to-field links would weaken the
symmetric Claim model. This is the most important bounded Agenda 2 follow-up
before NarrativeLine implements interoperable Source writing.

Gate 3 was reviewed on 2026-08-14 in
`minimal-source-citation-workflow.md`, with the bounded review recorded in
`minimal-source-citation-chatgpt-review-disposition.md`. The selected research
baseline for the ordinary action is an identified Source plus a weak Citation
association to the identified Event. It is the smallest reusable
cross-application baseline considered, not the absolute minimum record count.
It does not automatically create Claim, Evidence, Assessment, or Provenance
records. This closes the responsibility comparison but does not authorize a
payload, Extension identifier, or NarrativeLine writer.

### Gate 4: competing assertions, adoption, and diagnostics

Agenda 1 and Agenda 4 correctly allow competing assertions. They also say
temporal conflicts depend on which assertions are applicable or adopted
together. The responsibility that selects an adopted hypothesis set remains
unassigned.

Consequently, a generic Validator cannot yet treat every stored assertion as a
simultaneous hard constraint. Until adoption/applicability semantics exist:

- structural reference and field errors may be validated normally;
- local contradictions inside one assertion may be reported;
- obvious conflicts among explicitly co-applicable records may be reported
  only when co-applicability is defined; and
- mere coexistence of competing Claims or temporal assertions is not an error.

Do not assign historical-hypothesis adoption to Perspective merely because a
Perspective selects display context. Epistemic adoption can affect Derived
reasoning and is not necessarily presentation.

### Gate 5: primary values versus hypothesis selection

Agenda 4 describes `history.time` as the ordinary primary Civil Time adopted
by the Dataset while allowing competing temporal assertions elsewhere. This is
compatible with current History, but it must not be mistaken for a complete
hypothesis-set mechanism.

A future design must explain:

- whether a primary value is always applicable to default chronology;
- how it relates to competing additional assertions;
- whether a Perspective or research context may choose another assertion
  without rewriting the primary value; and
- which conflicts a context-free Validator can report.

### Gate 6: repeated propositions and record identity

Agenda 1 allows multiple Relative Time assertion records for the same logical
proposition because sources and assessments may differ. Agenda 2 can also
attach multiple Evidence and Assessment records to one Claim or assertion.

These are not necessarily contradictory, but the later Schema must distinguish:

- two independently authored assertions with distinct provenance;
- one assertion supported by several Evidence records;
- two Claims that happen to normalize to the same logical constraint; and
- duplicate records created accidentally.

Reasoning engines may deduplicate logical constraints for evaluation while
preserving record and Claim identities.

### Gate 7: Core `name` compatibility projection

The Names handoff deliberately permits duplication between a Name record and
Core `name`. This is a narrow, justified compatibility exception to Single
Source of Truth, but its exact contract remains unproven.

Before a Names writer is created, determine:

- whether the projected Name record is referenced explicitly or inferred by
  value;
- what happens when several Name records have the same text;
- which operation updates Core `name`, the Name record, or both;
- how a Names-unaware Core edit is reconciled without silent overwrite;
- whether a Dataset may have Names records but no projection; and
- whether projection inconsistency is warning, unsupported state, or
  Names-conformance error.

Do not generalize this exception to other Extension/Core duplication.

### Gate 8: terminology and product-version ambiguity

`Civil Time Granule` is a useful candidate term but was not explicitly
ratified by the user. Use `Civil Time Granularity` now; retain `Civil Time
Granule` as a research candidate until separately accepted.

The handoffs use “NarrativeLine 1.0” for a future post-MVP target while the
application currently has its own release versioning. Roadmap documents should
use “post-MVP target” until a product release plan deliberately assigns the
`1.0` milestone.

## Evaluation

### Strong points worth preserving

1. **Minimal Core discipline.** Every agenda resists adding optional domain
   machinery to Core.
2. **Meaning preservation.** Approximation, uncertainty, ranges, extents,
   candidates, and disagreement are not flattened for UI convenience.
3. **Derived/Owned separation.** Chronology, anchor calculations, aggregate
   confidence, and display-name choice remain Derived until intentionally
   adopted under a matching responsibility.
4. **Stable assertion identity.** Evidence, provenance, assessment, temporal
   assertions, and Names can remain independently referenceable without becoming
   Core Objects.
5. **Diagnostic separation.** Malformed data is not confused with disagreement
   or underdetermination.
6. **Application specialization.** A common Dataset can support a simple
   Timeline and a richer research application without forcing identical UIs.
7. **Open semantic vocabularies.** Naming kinds and predicates are not frozen
   into closed enums.
8. **Offline durability requirement.** Vocabulary discovery is separated from
   long-term interpretability and archival needs.

### Points requiring restraint

1. Conceptual responsibilities must not be converted mechanically into one
   Extension each.
2. Candidate capability groups must not be declared as formal Features before
   partial-support evidence exists.
3. A universal target-reference grammar must not be improvised separately in
   every Extension.
4. History must not silently expand from Core Objects to arbitrary records
   without a responsibility-continuity audit.
5. Confidence must not become a scalar property of a Core Object or Source.
6. Evidence must not silently absorb evaluative meaning such as supports,
   contradicts, or reliable.
7. Provenance must not become a proxy for credibility.
8. Hypothesis adoption must not be assigned to Perspective solely because it
   changes a view.
9. Names must not absorb external identity, Reference Codes, temporal
   applicability, or a closed naming-kind vocabulary.
10. Live vocabulary resolution must not become a validity dependency for an
    archived Dataset.
11. Current History `1.0.0` must not be retroactively interpreted using an
    undeclared vNext model.
12. NarrativeLine should not write speculative payloads merely because its UI
    requirement is urgent.

## Bounded questions for a future ChatGPT review

A broad return of all four agendas is not required. After repository review,
ChatGPT is most useful for challenging one bounded question at a time.

### Review A — target-reference contract

Compare a small number of stable reference shapes across Core Objects,
Extension-owned records, and stable fields. Include deletion, unknown target
kinds, namespace collisions, and round-trip preservation. Do not add the
result to Core without evidence.

### Review B — History target scope

Decide whether temporal applicability of a Name record is History vNext,
another temporal-applicability responsibility, or a profile combining Names
and History. Test responsibility continuity of registered `history`.

### Review C — minimal citation workflow

Map one ordinary NarrativeLine action, “record this source for this Event,” to
the smallest honest combination of Source, Citation/Evidence, Claim, and
Provenance. Compare user-visible and hidden record creation, later enrichment,
and deletion behavior.

### Review D — applicability/adoption context

Define the minimum semantics needed to evaluate chronology when competing
temporal assertions coexist. Determine what a context-free Validator can say
without selecting a historical hypothesis.

### Review E — Names/Core projection

Test explicit projection references against duplicate name values,
Names-unaware Core edits, missing Core `name`, and context-dependent display
selection.

These reviews should receive this audit plus only the specific normative and
research sources needed for that question. They should not be asked to reopen
resolved Core boundaries or invent all final Schemas at once.

## Recommended document-change sequence

Each step should be a separate reviewable change.

### Phase 1 — alignment without new payloads

1. Apply the terminology-only `Civil Time Granularity` change consistently to
   History, rationale, and application recommendations.
2. Update NarrativeLine's priority backlog to reflect Relative Time, History
   vNext, lightweight Source/Citation, contextual Assessment, and Names
   responsibility decisions while keeping writer implementation gated.
3. Add dated supersession notes to `research/exploratory/historical-ecosystem.md` and the
   affected naming sections of `research/exploratory/human-readable-reference-code.md`.
4. Clarify in semantic-vocabulary research that concept aliases are not
   Object-specific Names.
5. Update future-candidate wording in the Extension Index without registering
   any new identifier.
6. Update implementation/evidence status in the roadmap and the earlier
   architecture audit as a separate maintenance task.

### Phase 2 — focused research decisions

1. Design the shared target-reference and lifecycle pattern.
2. Resolve History vNext responsibility continuity and target scope.
3. Write a focused Relative Time research document with candidate capability
   groups, partial-order semantics, extent-aware questions, and no premature
   Feature declarations.
4. Resolve the minimal epistemic/citation workflow and then select candidate
   Extension partitioning.
5. Write a focused Names research document and test the Core projection
   contract.
6. Research Calendar and generic Quantity dependencies only where the temporal
   models require them.

### Phase 3 — evidence and specification work

1. Create experimental or draft identifiers under the naming rules only after
   a responsibility and migration review.
2. Define one bounded Schema/profile at a time.
3. Add valid, invalid, disagreement, uncertainty, and unknown-data fixtures.
4. Implement read-only Validator support before general writers where
   practical.
5. Demonstrate preservation and partial support in at least two applications.
6. Add explicit migration only when a source identity and target identity both
   have exact, validated contracts.
7. Review Feature boundaries from demonstrated partial-support behavior.
8. Consider Stable registration only after evidence gates pass.

## File-by-file disposition

| File | Recommended treatment |
| --- | --- |
| `spec/core.md` | No schema change; later clarify only that Core `name` is a human-readable fallback and carries no official/legal/preferred semantics |
| `spec/philosophy.md` | Later qualify absolute History time versus Relative Time if those candidates advance |
| `spec/rationale.md` | Rename granularity terminology now; revise future ownership of approximation only during History vNext work |
| `extensions/history-extension.md` | Apply terminology-only rename; keep `1.0.0` exclusions and structure unchanged |
| `extensions/specification-extension.md` | No immediate change; use its Feature and dependency rules as gates |
| `extensions/README.md` | Later align candidate names/responsibilities without registration |
| `extensions/dictionary-extension.md` | Keep candidate; do not use it as Object Names storage; future maturity review required |
| `docs/application-design-principles.md` | No immediate semantic change; Derived/Owned guidance already supports the agendas |
| `docs/application-recommendations.md` | Rename granularity terminology; later add Relative Time-aware interleaving guidance |
| `docs/roadmap.md` | Update agenda and implementation evidence status separately |
| `docs/ai-workflow-research.md` | Later adopt the Claim/Evidence/Assessment/Provenance terminology and preserve human review boundary |
| `research/exploratory/historical-ecosystem.md` | Mark Node-level Confidence and `aliasAs` identity statements as superseded research |
| `research/exploratory/human-readable-reference-code.md` | Preserve Reference Code work; replace primary/alias hierarchy with Core fallback plus Names distinction |
| `research/exploratory/semantic-vocabulary-architecture.md` | Clarify concept aliases versus Object Names and carry offline durability requirements |
| `research/exploratory/dataset-lineage.md` | Replace generic Semantic Confidence backlog language with contextual Assessment when that research is revised |
| `applications/future-ideas.md` | Retain Evidence Networks; add or link the specialized historical-research application in a later application-catalog pass |
| `applications/investigation-app.md` | Suitable future evidence consumer; later align its evidence and hypothesis language with the candidate responsibilities |
| NarrativeLine `docs/priority-feature-backlog.md` | Update first after the specification audit; do not add speculative payloads |
| NarrativeLine architecture/code | No writer implementation until the relevant target, identity, and payload contracts exist |

## Immediate recommendation

Accept the four handoffs as a coherent non-normative research baseline subject
to the design gates in this audit. Do not send the entire package back for a
general reconsideration.

The first bounded review has now confirmed Gate 1 and identified the four
clarifications recorded above. The companion research comparison in
`research/target-reference/decisions/target-reference-model-comparison.md` provisionally uses an
owner-namespace plus local-record-identity model as the baseline. This remains
an ordering recommendation, not a payload decision; conceptual fixtures and
two-application preservation evidence are still required.

The self-contained terminology update from `Temporal Precision` /
`Time Precision` to `Civil Time Granularity` has now been applied consistently
to the History Extension, rationale, and application recommendations. It did
not change the History `1.0.0` fields or validation rules. Do not begin
History vNext, Relative Time, Epistemic, or Names payload design until the
applicable gates are explicitly selected and recorded.

The Names Grouping responsibility comparison is closed on Option B at the
research level: P1 expression identity plus optional explicit grouping. The
representation candidate comparison and selection criteria are accepted, but
representation selection is deferred because no candidate has demonstrated
comparative superiority. See
`research/names/grouping/decisions/name-grouping-representation-selection-readiness-disposition.md` and
`research/names/grouping/deferred/name-grouping-selection-reopen-criteria.md`. Do not introduce a
Grouping payload, Group identity, cardinality, Extension ID, or application
writer until qualifying comparative evidence reopens selection.
For future handoffs, use the canonical transfer path in
`research/names/grouping/current/name-grouping-current-handoff-index.md`; do not use older candidate
comparison handoffs as the primary instruction.
