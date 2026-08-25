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

## L1 — Candidate Lineage Extension design

Status: Candidate design only; not a registered Extension or normative schema.

### Actual gap and vocabulary classification

`derivedFrom`, `revisionOf`, `forkedFrom`, `translationOf`, and `profileOf`
are candidate machine-readable Lineage kinds. `changes` and `affects` are
better represented by references to Events or bounded change claims than by
free-form Extension fields. `publishedBy` belongs to publisher/source or
metadata responsibility. `compatibleWith` is too broad as a boolean;
`claimsCompatibilityWith` and `supportedByEvidence` describe a claim/evidence
relationship whose ownership remains bounded and unresolved.

Core Relation can carry any of these as domain vocabulary, but only a future
Lineage Extension could make selected kinds interoperable.

### Subject scope decision

Three models were compared:

| Model | Finding |
| --- | --- |
| Generic artifact claims | Expressive for specifications, but too close to a universal ontology and dependent on unresolved Target Reference. |
| Dataset lineage plus bounded claims | Preserves a small Dataset responsibility while leaving room for explicitly referenced claims. |
| One specification artifact per Dataset | Removes much generic artifact identity pressure and allows specification lineage to use Dataset lineage, but needs a registry/index Dataset for family presentation. |

Selected classification: **DATASET-LINEAGE FIRST**. The current Dataset is the
implicit subject; parent references may identify another Dataset. A registry or
self-description Dataset can describe specification artifacts as ordinary Core
Entities and Events. A future bounded claim record may be added only after
Target Reference and Source/Citation boundaries are stable.

This is smaller and more general than making every Entity a universal lineage
subject. It still permits a specification artifact to be represented as one
Dataset, while not requiring that choice for ordinary Dataset derivation.

### Candidate v0 payload alternatives

Alternative A — Dataset-scoped parents and referenced change records:

```json
{
  "extensions": {
    "lineage": {
      "version": "0.1.0",
      "parents": [
        {"kind": "fork", "target": {"datasetId": "e2r-core-2.0"}}
      ],
      "changes": [
        {"reference": {"targetKind": "event", "localId": "relation-rule-change"}}
      ]
    }
  }
}
```

Alternative B — claim-oriented artifact records:

```json
{
  "extensions": {
    "lineage": {
      "version": "0.1.0",
      "claims": [
        {
          "subject": {"datasetId": "open-e2r-2.0"},
          "kind": "forkedFrom",
          "target": {"datasetId": "e2r-core-2.0"},
          "claimant": {"datasetId": "open-e2r-registry"},
          "evidence": [{"reference": "source-citation-or-target-reference"}]
        }
      ]
    }
  }
}
```

Alternative A is selected as the candidate direction because it is readable,
small, supports multiple parents, and does not create a universal claim graph.
Its `target` and `reference` shapes remain abstract until Target Reference is
resolved. Alternative B is retained as a comparison, not a schema proposal;
it risks duplicating Core Relation and Source/Citation responsibilities.

### Candidate lineage kinds

- `derivedFrom` expresses ancestry without proving semantic preservation.
- `revisionOf` expresses a later member of a conceptual lineage; it does not
  automatically mean replacement or full compatibility.
- `forkedFrom` expresses intentional divergent ancestry; it does not imply
  incompatibility or permanent authority of the parent.
- `translationOf` identifies intended translation ancestry; it does not prove
  fidelity, official approval, or freshness.
- `profileOf` identifies a constrained/configured derivative; it does not prove
  conformance and may ultimately belong partly to Specification Extension.

These kinds carry provenance only. None automatically implies compatibility,
conformance, authority, or semantic equivalence.

### Semantic divergence and compatibility

The smallest useful design is to reference an existing Event or a future
bounded change/claim record rather than duplicate an arbitrary natural-language
rule change inside Lineage. For example, a hypothetical OpenE2R Dataset can
refer to an Event stating that Relation-to-Relation endpoints are permitted.
The actual rule and its evidence remain outside this candidate payload.

Compatibility is separated from provenance. A future bounded claim may need
`subject`, `target`, `scope`, `kind`, `result`, `claimant`, and evidence
reference, but L1 does not freeze that vocabulary. A claimant's statement is
not independent Validator verification, and Lineage does not provide
cryptographic authentication.

### Translation, forks, parents, and cycles

The candidate permits multiple parent records so a future merge or multi-source
derivation is not blocked, but it does not define merge conflict semantics.
Cycles are **deferred**: local readers may warn about an obvious cycle, but
global cycle prohibition is unsafe when references are external or unresolved.

Fork survival is supported even when the original becomes inactive. Current
activity and publication authority remain separate from origin. Translation
status, translator identity, stale source revision, and fidelity claim are
not silently inferred from `translationOf`.

### Version and reference boundary

The candidate distinguishes Lineage schema version, Dataset/Core serialization
version, artifact version, and Extension version. `datasetId`, URI, local
record ID, specification identifier, and Extension/version references are
possible target forms, but no universal identifier system is selected.
Target Reference is therefore a dependency for a stable payload shape, not a
reason to abandon this candidate design.

### Candidate responsibility and exclusions

Candidate responsibility: record bounded machine-readable provenance
relationships between independently identifiable Datasets/artifacts and
optionally reference bounded change or compatibility claims.

Explicit exclusions: generic Relation vocabulary, Metadata identity/title,
History, Source/Citation semantics, Target Reference resolution rules,
authorship/publisher metadata, authority or canonical supremacy, licensing,
trademark policy, application presentation, and merge/conflict algorithms.

### Dogfood results

For E2R itself, the one-artifact-per-Dataset interpretation makes Core 1.0,
Core 1.1, a hypothetical OpenE2R fork, and an unofficial translation
referenceable without treating Entity labels as a universal ontology. For an
ordinary Dataset, the same candidate describes a translated or research-forked
Dataset. The candidate is therefore **HYBRID in applicability but
DATASET-LINEAGE FIRST in responsibility**.

### Promotion gates

Before creating `extensions/lineage-extension.md`, require a stable boundary,
an adequate Target Reference model, a Source/Citation decision, at least two
non-spec Dataset examples, round-trip preservation, a candidate Validator
strategy, an Extension declaration/version approach, and no Core conflict.

The candidate fixture
`research/exploratory/fixtures/lineage-extension-candidate.json` is an
unknown, non-normative Extension payload. It demonstrates preservation and
does not mean the Validator implements Lineage.

### L1 conclusion

Result: **DATASET-LINEAGE FIRST / CONTINUE TO BOUNDED LINEAGE DESIGN**.

Lineage should remain named Lineage rather than Provenance or Derivation: its
future responsibility includes ancestry kinds while explicitly excluding
generic source, claim, temporal, and authority semantics. The candidate is
coherent enough for further design, but Target Reference and Source/Citation
boundaries must be resolved before field names or a stable Extension identifier
are finalized.

Knowledge Candidate: **NO Knowledge Candidate**. The design cases strengthen
the hypotheses that canonicality is provenance rather than supremacy and that
compatibility is a scoped claim, but neither rule is ready for workspace
promotion in this checkpoint.
