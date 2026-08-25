# E2R Lineage and Self-Description

Status: Exploratory / Research Seed

This document explores whether E2R can describe the lineage of E2R
specifications and related artifacts without adding lineage semantics to the
Core. It is non-normative. It does not register a Lineage Extension, change
the Core, or authorize an application writer.

## Research questions

1. Can E2R describe the lineage of its own specifications?
2. Is specification lineage a special case of more general Dataset lineage?
3. Which facts are already ordinary Core modeling, and which require candidate
   Lineage semantics?

## Existing responsibility inventory

| Need | Current classification | Boundary |
| --- | --- | --- |
| Dataset identity and title | Existing Extension | Metadata owns `datasetId` and `title`; it explicitly excludes lineage. |
| Objects and occurrences | Core | Entity, Event, and Relation can describe artifacts, people, applications, and milestones. |
| Generic relationship vocabulary | Domain vocabulary only | Core Relation has structural endpoints but no semantic `type`. |
| Temporal revision history | Existing Extension | History owns recorded temporal information, not derivation semantics. |
| Extension declarations and exact versions | Existing draft Extension | Specification Extension describes used specifications and specification relationships, not general artifact lineage. |
| Cited material | Existing research responsibility | Source/Citation records a weak citation association, not origin, derivation, or compatibility. |
| Cross-record resolution | Existing research responsibility | Target Reference explores references and lifecycle states without assigning lineage meaning. |
| Origin, fork, translation, profile, semantic divergence | Candidate Lineage semantics | These require interpretation beyond Core endpoints and labels. |
| Compatibility assertions | Candidate claim semantics | Compatibility is contextual and asserted, not a boolean fact. |

## Three layers

The experiment keeps these layers separate:

1. **Artifact identity** — for example `E2R Core 1.1`, `OpenE2R 1.0`, or an
   unofficial Japanese translation.
2. **Lineage relation** — for example derived-from, fork-of, translation-of,
   revision-of, or profile-of.
3. **Compatibility claim** — a scoped assertion about read, write, preserve,
   validation, round-trip, syntax, semantics, or a specific Extension.

An artifact relation must not be collapsed into `compatible: true`. A useful
future compatibility claim likely needs subject, target, scope, kind, result,
claimant, and evidence/reference, but this is not a proposed final schema.

## Self-description model

The bounded self-description fixture at
`research/exploratory/fixtures/e2r-lineage-self-description.json` uses only
Core objects and the existing Metadata Extension. It describes E2R, Core,
Extensions, applications, Validator, and representative milestones as
Entities and Events. Relation descriptions use research vocabulary such as
`extends`, `implements`, `validates`, and `revisionOf`; Core does not interpret
those descriptions as machine-readable relationship types.

This demonstrates that E2R can describe its own components and milestones as
ordinary data. It does not demonstrate interoperable lineage semantics.

## Hypothetical lineage cases

### Fork survival

```text
E2R 2.0 -> forkedFrom -> OpenE2R 2.0 -> revisionOf -> OpenE2R 3.0
```

If E2R later becomes inactive, the model still permits OpenE2R to remain
active. Origin lineage, current activity, publication authority, compatibility,
and semantic divergence are separate facts. No permanent supremacy of the
original artifact is implied.

### Translation

```text
Unofficial Japanese Translation -> translationOf -> E2R Core 1.1
```

The source exact version, translator when known, translation status, and later
translation revisions must remain distinguishable. The relation does not imply
that sukoyaka-dopeness guarantees translation accuracy.

### Semantic divergence

```text
OpenE2R 2.0 -> forkedFrom -> E2R Core 2.0
OpenE2R 2.0 -> changes -> Relation endpoint rule
```

The hypothetical example permits E2R Core 2.0 to prohibit Relation-to-Relation
targets while OpenE2R 2.0 permits them. The divergence and its compatibility
consequences are claims requiring candidate semantics; actual E2R Core is not
changed by this example.

### Profile versus fork

`E2R Core + Medical Profile` may be an ordinary profile or Extension
relationship when Core semantics remain unchanged. `Medical-E2R` becomes a
fork/revision candidate only when it changes the meaning or constraints of Core
objects. The distinction is semantic and cannot be inferred from a product
name alone.

## Candidate Lineage responsibility

If the gap proves real, a future Lineage Extension could own references and
claims describing derivation among Datasets or specification artifacts,
including fork, revision, translation, profile, publisher, semantic change,
and compatibility evidence. It should prefer identifiers/references over
embedded duplicate artifacts.

It should not own:

- generic Relation vocabulary;
- generic Source/Citation semantics;
- temporal History;
- ordinary names or translations of labels;
- arbitrary Metadata;
- authority, moral status, or a magical `official` flag;
- trademark or licensing policy; or
- application presentation and workflow.

The future responsibility may refer to Dataset, specification artifact,
Extension artifact, translation, profile, or fork, but their identity and
reference scopes must be settled before a normative payload is designed.

## Dataset-general applicability

The same conceptual pattern can describe ordinary Dataset derivation:

```text
Dataset B -> derivedFrom -> Dataset A
Dataset C -> translatedFrom -> Dataset B
Dataset D -> forkedFrom -> Dataset A
```

This is **PARTIALLY GENERALIZABLE**. Specification lineage is not necessarily
special, but Dataset identity, cross-Dataset references, merge semantics, and
evidence lifecycle remain unresolved. This phase does not design merge
semantics.

## Boundary with existing research

- Metadata owns Dataset identity/title, not lineage.
- Source/Citation owns weak citation context, not derivation or compatibility.
- Target Reference may supply safe cross-record reference concepts, but does
  not decide lineage meaning or merge/fork lifecycle.
- History owns temporal representation, not `derivedFrom` or semantic change.
- Specification Extension owns exact Extension declarations and dependencies,
  not general provenance or publisher authentication.
- Core Entity/Event/Relation can carry descriptive self-model data, but cannot
  make lineage labels interoperable.

## Application usefulness

The same Dataset could support a NarrativeLine view of specification evolution,
fork creation, semantic-change Events, and translation revisions. It could
support a LiaisonScape view of version lineage, Extension relationships, fork
graphs, implementation relationships, and affected concepts. Those views would
remain application interpretations because the fixture has no Lineage schema.

## Licensing relevance

Lineage potentially allows forks, translations, and derived specifications to
retain origin without treating canonicality as permanent supremacy. Unofficial
translation status and compatibility evidence could be machine-described.
This is input to **S1 — E2R Standards Licensing Research: Adoption,
Implementability & Canonicality**. This document does not choose the e2r-spec
license.

## Self-description stress test

| Question | Result |
| --- | --- |
| Describe E2R components? | Yes, with Core Entities and Relations. |
| Describe milestones? | Yes, with Core Events and History when needed. |
| Describe a fork? | Conceptually yes; interoperable semantics require a candidate Extension. |
| Describe an unofficial translation? | Conceptually yes; status and fidelity claims remain unresolved. |
| Identify semantic divergence? | Requires candidate change/claim semantics. |
| Express compatibility? | Requires scoped claim semantics, not a boolean. |
| Attach evidence? | References may be possible, but Source/Citation and Target Reference boundaries remain relevant. |
| Justify an official Extension now? | No. |

## Conclusion

Result: **PROMISING — CONTINUE TO LINEAGE EXTENSION DESIGN**.

E2R can describe a useful self-model today using Core objects and existing
responsibilities, but machine-interpretable lineage and compatibility claims
are a genuine gap. The evidence supports a small future Lineage Extension
design phase, not an official Extension or Core change.

Knowledge Candidate: **NO Knowledge Candidate yet**. The observations about
provenance-based canonicality and scoped compatibility claims are promising but
come from one exploratory model and should be tested against additional
datasets and boundaries before promotion.

Next bounded phase: Lineage Extension design, with Source/Citation and Target
Reference boundary review before selecting payload fields. Do not start that
phase automatically.

