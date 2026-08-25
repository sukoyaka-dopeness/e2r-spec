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

## L1.5 — Lineage reference and evidence boundary resolution

Status: Boundary checkpoint; candidate identifier `lineage` and version
`0.1.0` remain exploratory, unregistered, and non-normative.

### Reference inventory

- A parent Dataset needs its conceptual `datasetId`. A retrieval URL, mirror,
  handoff URL, or acquisition location is not identity.
- A semantic-change reference may point to a local Event, but Lineage should
  reuse the future general Target Reference shape rather than invent a
  Lineage-specific local-reference syntax.
- Evidence for a compatibility claim may point to Source/Citation material,
  a Validator report, or another record. Lineage does not need to own the
  evidence lifecycle for the minimal parent relationship.

### Dataset identity and location

`datasetId` alone is sufficient for the minimum parent identity contract,
subject to its known limits: it is opaque, need not be globally unique under
Metadata 1.0, and requires a future resolution scope for cross-Dataset use.
Adding `url` would conflate identity with acquisition and would break the
meaning when a Dataset is copied, mirrored, moved, or handed off. Parent
locations belong to retrieval/source responsibilities and are optional future
metadata, not Lineage identity.

The selected minimum target is therefore:

```json
{"datasetId": "e2r-core-2"}
```

The generic Target Reference model remains the future owner of scope, target
kind, external resolution, and `malformed`/`unknown`/`missing`/`resolved` /
`ambiguous` diagnostics. It is not required to block L2's Dataset-level case.

### Local and external references

L1's `{targetKind, localId}` example is not frozen. For L2, a parent uses the
Dataset identity above; an internal change reference is deferred and may later
reuse Target Reference. Cross-Dataset object references are **NOT REQUIRED FOR
LINEAGE v0**. They would add scope and resolution complexity without helping
the minimum ancestry contract.

### Source, evidence, and compatibility boundary

These facts remain distinct:

```text
Dataset B forkedFrom Dataset A       = Lineage
Dataset B used Article X             = Source/Citation
Validator report Y supports a claim  = evidence/claim responsibility
Dataset A was acquired from URL Z    = retrieval/location responsibility
who published A                      = publisher/metadata responsibility
```

Evidence can become stale as Validators, versions, or derived Datasets change.
That lifecycle belongs to the claim/evidence responsibility. Lineage may
reference such a claim later, but does not own verification, freshness,
authentication, or cryptographic trust. Compatibility ownership is **C3:
Lineage may reference claims but does not own claim semantics**.

### Translation, profile, and revision

`translationOf` records ancestry only. Translator identity, official or
unofficial status, fidelity, and stale-source status belong to metadata,
publisher, or separate claim responsibilities; none is implied by the kind.

`profileOf` is **DEFERRED — SPECIFICATION BOUNDARY**. A profile that only
restricts or configures a specification is closer to Specification Extension
than to Dataset ancestry. It should not be retained in Lineage v0 merely
because L1 listed it.

`revisionOf` is not a second version field. A version identifies an artifact;
`revisionOf` relates two independently identifiable artifacts. Without a
parent identity, the relation carries no useful meaning.

### Parents and lifecycle safety

Lineage v0 may contain multiple parent records. Parent order has no semantics;
duplicate identical parents should be warnable or invalid in a later validator,
while the same parent with different explicit kinds remains a future semantic
question. Merge behavior is not defined.

Self-reference is **INVALID** for a local Dataset-level parent record. Global
multi-Dataset cycles are deferred because external resolution may be
unavailable. An unresolved parent does not invalidate the Dataset: its identity
assertion survives, resolution may fail, and no network is required for
reading. If the original URL disappears, the lineage remains meaningful.

Hash/content addressing is **DEFERRED**. Exact bytes, canonical JSON,
signatures, and integrity are separate release/security concerns and are not
needed for Lineage v0.

### Simplified Lineage v0 candidate

The strongest current candidate is intentionally reduced to parents only:

```json
{
  "extensions": {
    "lineage": {
      "version": "0.1.0",
      "parents": [
        {"kind": "fork", "target": {"datasetId": "e2r-core-2"}}
      ]
    }
  }
}
```

Ownership of this candidate is:

- Lineage: `parents`, `kind`, and the provenance meaning of the relationship.
- Target Reference: target scope, target kind, resolution, and lifecycle
  diagnostics when that model is available.
- Metadata: Dataset identity and title.
- Source/Citation/claim responsibility: evidence, claimant, publisher,
  retrieval location, fidelity, and compatibility semantics.

Deferred from v0: `changes`, compatibility claims, evidence, publisher,
translation status, `profileOf`, URLs, hashes, cross-Dataset object targets,
merge semantics, and cryptographic identity.

### Machine kind vocabulary

Use noun values in the payload context: `derived`, `revision`, `fork`, and
`translation`. The surrounding `parents` field supplies the relationship
direction, so noun values are shorter and avoid inverse-verb ambiguity. This
is a candidate convention, not a registered vocabulary.

### Updated dogfood cases

Specification lineage:

```text
E2R Core Dataset B
  parents: [{kind: revision, target: {datasetId: E2R Core Dataset A}}]

OpenE2R Dataset C
  parents: [{kind: fork, target: {datasetId: E2R Core Dataset B}}]

Unofficial Japanese Translation Dataset D
  parents: [{kind: translation, target: {datasetId: E2R Core Dataset B}}]
```

Ordinary Dataset lineage:

```text
Japanese Dataset B
  parents: [{kind: translation, target: {datasetId: English Dataset A}}]

Research Fork C
  parents: [{kind: fork, target: {datasetId: English Dataset A}}]
```

No claim fields are needed for these ancestry examples.

### L1.5 decisions and next phase

Target Reference decision: **MINIMAL DATASET-ID REFERENCE SUFFICIENT FOR L2;
TARGET REFERENCE CAN EVOLVE LATER**.

Source/Citation decision: **SOURCE/CITATION NOT REQUIRED FOR MINIMAL L2;
EVIDENCE CLAIMS DEFERRED**.

The next bounded phase is **L2 — Minimal Dataset Lineage Candidate v0**:
parents only, bounded kinds, Dataset-ID targets, self-reference rule,
unresolved-parent behavior, multiple parents, forward compatibility, two
ordinary Dataset cases, and one E2R self-dogfood case. L2 should not design
compatibility claims, merge behavior, or a universal reference system.

For S1 licensing research, persistent Dataset identity means forks and
translations can retain machine-readable origin even when source URLs vanish
or the parent becomes inactive. Lineage cannot prevent misleading branding,
false claims, trademark misuse, or official endorsement; machine provenance
and legal attribution remain separate.

## L2 — Minimal Dataset Lineage Candidate v0

Status: **candidate / non-normative research only**. This section does not
register an Extension, change Core, or define Validator behavior.

### Scope and dependency decisions

The smallest useful responsibility is: **record declared parent relationships
for the current independently identified E2R Dataset**. It answers which
Dataset(s) the current Dataset claims ancestry from and what kind of ancestry
is claimed. It does not establish authenticity, compatibility, publication,
translation fidelity, changes, supersession, merging, evidence, or a download
location.

The current Dataset's `extensions.metadata.datasetId` is a **REQUIRED
DEPENDENCY** for this candidate. Lineage describes an independently identified
Dataset, so a child without a Dataset identity cannot be checked for
self-reference or unambiguously described as the subject of the claim. The
candidate reuses Metadata's existing Dataset-ID identity semantics and invents
no second identifier grammar. A parent target is an object containing a
non-empty string `datasetId`.

Self-reference is a local semantic error: a child with Dataset ID `A` MUST NOT
declare `A` as a parent. This is not a requirement for global cycle detection.
An identical `(kind, target.datasetId)` parent record is a duplicate and is
invalid for the candidate. The same target MAY occur once with different kinds
when the Dataset makes distinct direct claims; the candidate does not infer
that those claims are contradictory. Parent array order has no semantics and
MUST NOT imply priority, chronology, authority, or merge precedence. An empty
`parents` array is unnecessary and is treated as invalid; omit `lineage` when
no parent is declared.

The v0 machine vocabulary is closed to `derived`, `revision`, `fork`, and
`translation`. Unknown kinds are not v0-valid; a future candidate version can
add kinds without requiring a custom-kind mechanism now. `derived` is the
least-specific fallback. Direct parent declarations are distinct from
transitive ancestors: consumers MAY traverse a chain, but v0 does not require
flattening or graph inference.

### Kind semantics and boundary cases

* `derived`: created from or substantially based on the parent; it does not
  imply replacement, compatibility, language equality, or semantic equivalence.
* `revision`: a later revision in the same intended artifact lineage; it does
  not by itself imply supersession, full preservation, or compatibility.
* `fork`: intentionally begins or continues a divergent lineage; divergence
  does not itself imply incompatibility.
* `translation`: an intended natural-language translation derivative; it does
  not imply fidelity, approval, freshness, or identical structure.

Revision chains retain direct edges (`A2 revision A1`, `A3 revision A2`). A
translation followed by a revision may declare only the direct parent; adding
both direct claims is also representable, but neither creates hidden
inheritance. Multiple-source derivation is representable and is not called a
merge. A missing, unreachable, deleted, or unavailable parent does not
invalidate the child: the declaration is an identity assertion, not a network
resolution requirement. Dataset-ID collisions, authenticity, URLs, hashes,
and the meaning of a disappeared publication location remain outside v0.

`version: "0.1.0"` is retained only as a temporary exploratory payload marker
because the candidate is unregistered. It is not a Core, Dataset, parent, or
Metadata version. A future official Extension should resolve version
ownership through the Specification Extension declaration rather than freeze
two competing version mechanisms. Until then, current Validator behavior is
unknown-Extension preservation, not Lineage validation.

### Selected candidate payload

```json
{
  "extensions": {
    "lineage": {
      "version": "0.1.0",
      "parents": [
        { "kind": "fork", "target": { "datasetId": "parent-dataset-id" } }
      ]
    }
  }
}
```

There is no `relationshipId` and no per-parent metadata (`note`, `createdAt`,
`author`, `confidence`, `status`, `source`, or evidence). `translation` and
`revision` remain in Lineage because both are direct ancestry claims; their
content, quality, and artifact-version semantics are deferred elsewhere.

### Focused dogfood fixtures

The four bounded fixtures are:

1. `lineage-v0-derived.json`: an ordinary recipe Dataset derived from two
   ordinary source Datasets, demonstrating multiple parents without merge
   semantics.
2. `lineage-v0-revision.json`: an ordinary field-guide revision chain edge.
3. `lineage-extension-candidate.json`: the E2R fork case retained from L1.5.
4. `lineage-v0-translation.json`: an ordinary English-to-Japanese translation
   claim.

Thus three of four cases are ordinary Dataset examples. The E2R conceptual
   dogfood chain is `e2r-core-2` → fork → `open-e2r-2`; a separate ordinary
   translation case avoids claiming that any current E2R sample is a real
   translation.

Candidate invalid-case matrix: self-reference; missing, empty, or non-string
parent `datasetId`; unknown kind; duplicate identical parent; and empty
`parents`. Structural candidate checks cover object/array shapes and the four
known kinds. Local semantic checks cover self-reference, duplicate records,
and empty parents. Parent existence, global cycles, authenticity,
compatibility, translation fidelity, and URL availability are deliberately
non-local and not validated in v0.

The current Validator accepts these fixtures as Core datasets and emits an
`unknown_extension` warning for `extensions.lineage`; that result demonstrates
preservation/forward compatibility only and must not be reported as Lineage
semantic validation. Existing application round-trip evidence is not a
dedicated Lineage preservation test, so **ROUND-TRIP APP EVIDENCE STILL
REQUIRED BEFORE PROMOTION**.

### Candidate language and readiness

The following is a design exercise, not normative specification text:

* A Lineage parent MUST identify another Dataset by `datasetId`.
* The current Dataset MUST NOT reference itself as a parent.
* Parent order MUST NOT carry semantic meaning.
* An unavailable parent MUST NOT by itself invalidate the child Dataset.

The candidate is **READY FOR EXPLORATORY EXTENSION DRAFT**. The next bounded
phase may be L3, an explicitly Draft/non-Stable Extension document; L3 is not
started here. For S1, Lineage can identify derivative, translation, and fork
origin even after a location disappears, but it does not enforce attribution,
license compliance, E2R naming, or legal canonicality. No new Knowledge
Candidate is warranted: the durable rules remain identity distinct from
location, provenance distinct from supremacy, and compatibility as scoped
claims.

### L3 handoff — Draft Extension 0.1.0

L2 has now been expressed as the non-Stable Draft at
[`extensions/lineage-extension-draft.md`](../../extensions/lineage-extension-draft.md).
The Draft resolves the temporary fixture marker `lineage.version` into the
repository convention `specVersion` under the exact placeholder identifier
`draft.github.sukoyaka-dopeness.lineage`. The four exploratory fixtures were
updated to that Draft shape; they remain under `research/exploratory/fixtures/`
and are not canonical public examples.

This is a documentation and candidate-shape checkpoint only. The Validator,
Core, applications, and ai-knowledge remain unchanged. Current Validator runs
still demonstrate Core validity and unknown-Extension preservation, not
Lineage semantic validation. L4 would need dedicated opaque round-trip
evidence from NarrativeLine and LiaisonScape before any promotion decision.

## L5 — Validator / diagnostic design

Status: **design only**. No production Validator, application, Core, or
Stable Extension code is changed by L5.

### Architecture findings

The current Validator's smallest future seam is `src/extension-validator.js`
in `e2r-validator`: recognized Extension identifiers are collected first,
unknown identifiers receive `unknown_extension`, and recognized payloads are
dispatched to Extension-specific validators. `src/diagnostics.js` defines the
diagnostic shape `{ severity, code, path, relatedIds? }`, with only `error` and
`warning` severities. Paths are JSON Pointer-like strings and duplicate/object
diagnostics are emitted in deterministic Dataset container and array order.
Metadata is currently validated in `validateMetadata`; exact local Extension
support and declaration behavior is centralized in
`src/specification-validator.js`. Coordinate Draft demonstrates the existing
pattern of version dispatch plus hand-written structural and semantic checks.

The selected L6 strategy is **C: structural validation plus hand-written local
semantic checks**. A future `src/lineage-draft-validator.js` should be
dispatched from `validateExtensions` after the identifier is recognized. A
separate e2r-spec schema is not created: schemas are not the current
Validator's Extension source-of-truth seam, and JSON Schema alone cannot
express self-reference or duplicate `(kind, target.datasetId)` rules cleanly.

### Recognition and version behavior

The exact recognized identifier is `draft.github.sukoyaka-dopeness.lineage`.
With a valid `specVersion: "0.1.0"`, a future Lineage-aware Validator should
stop emitting `unknown_extension` for that occurrence and emit no additional
maturity warning; Draft maturity is documented, not an invalidity. An
unsupported top-level identifier such as `vendor.example` remains an opaque
`unknown_extension` warning.

For the recognized payload, the proposed errors are:

| Condition | Proposed code | Path |
| --- | --- | --- |
| Payload is not an object | `lineage_payload_invalid` | Lineage payload |
| `specVersion` missing | `lineage_spec_version_missing` | `/specVersion` |
| `specVersion` not a string or malformed | `lineage_spec_version_invalid` | `/specVersion` |
| `specVersion` is not `0.1.0` | `lineage_spec_version_unsupported` | `/specVersion` |

Recognized but unsupported versions are distinct from unknown Extensions.
They are errors for the recognized Draft dispatch; no generic
`extension_version_unspecified` warning should be emitted for the Lineage
payload. The inline `specVersion` is sufficient for the first L6 recognition
experiment. Specification Extension declaration interaction remains a
separate resolution: exact declaration may confirm the same version, but its
absence does not prevent local Lineage shape validation in L6.

### Metadata dependency and payload structure

Metadata `extensions.metadata.datasetId` is a required Lineage dependency,
using the existing non-empty-string Dataset-ID semantics. A missing or
malformed Metadata identity produces one
`lineage_metadata_dataset_id_missing` error at
`/extensions/metadata/datasetId`; Metadata's own structural error remains the
upstream explanation when applicable, and self-reference checking is skipped
when the child identity is unavailable. Exact Metadata version resolution is
not duplicated by Lineage; Specification Extension declarations remain the
common version authority.

Structural candidate codes are intentionally small:

* `lineage_parents_missing`, `lineage_parents_invalid`,
  `lineage_parents_empty`;
* `lineage_parent_invalid`;
* `lineage_kind_missing`, `lineage_kind_invalid`;
* `lineage_target_invalid`, `lineage_target_dataset_id_invalid`.

`parents` is required, an array, and non-empty. Each parent is an object with
`kind` and `target`; target is an object with a non-empty string
`datasetId`. Unknown fields at payload, parent, and target levels are
preserved and produce no unknown-field diagnostic. The known kind enum remains
closed: `derived`, `revision`, `fork`, `translation`.

### Local semantic diagnostics

The child Dataset ID equal to a parent target produces one
`lineage_self_reference` error per offending parent, located at that parent's
`target/datasetId`. This is local only; global cycles, parent lookup, and
cross-file graph traversal are not designed.

An identical `(kind, target.datasetId)` pair produces one
`lineage_duplicate_parent` error on the second and each later occurrence,
located at the duplicate parent object. The first occurrence need not be
reported and no `relatedIds` metadata is needed. Same target with different
kinds is valid and must not be diagnosed as duplicate. Parent order receives
no diagnostic and is neither sorted nor rewritten.

An unresolved parent is locally valid. No filesystem, registry, network, URL,
hash, authenticity, compatibility, translation-fidelity, authority, license,
or merge diagnostic belongs to Lineage v0. Unknown kind is invalid and must
not fall back to `derived`.

Diagnostic order should be deterministic: common Core/Extension parsing first;
Lineage `specVersion`; Metadata dependency; payload/parents structural checks;
per-parent structural checks in array order; then self-reference and duplicate
checks in array order. If a container has the wrong type, nested diagnostics
are suppressed. A missing target suppresses target child diagnostics; an
invalid child Dataset ID suppresses self-reference for that parent. This keeps
invalid payloads actionable without cascading duplicates.

Invalid-case matrix for L6: missing/wrong `specVersion`; missing Metadata or
`datasetId`; Lineage payload wrong type; missing/wrong/empty parents; parent
wrong type; missing/unknown kind; missing/wrong target; missing/empty/non-string
target Dataset ID; self-reference; and duplicate identical parent. Valid-case
matrix includes all four Draft fixtures, multiple derived parents, same target
under different kinds, unknown nested fields, and an unresolved external
parent.

### Research harness and implementation boundary

The non-production harnesses
[`lineage-draft-diagnostic-harness.mjs`](../tools/lineage-draft-diagnostic-harness.mjs)
and
[`lineage-draft-diagnostic-harness.test.mjs`](../tools/lineage-draft-diagnostic-harness.test.mjs)
encode this candidate behavior without duplicating Core or Extension
validation. Six tests cover valid kinds, unresolved parents, unknown fields,
multiple parents, different kinds, version/Metadata/structure ordering,
self-reference, duplicate policy, invalid kind, empty parents, immutability,
and absent Lineage.

L6 should add the smallest production dispatch and validator module in
`e2r-validator`, extend recognized Draft version support, and add production
fixtures/tests for the matrix above. It must preserve the L4 opaque round-trip
property: recognition may inspect known fields but must not strip unknown
fields, reorder parents, normalize kinds, or mutate payloads.

This design does not implement Lineage validation, does not promote the Draft,
and does not create a Knowledge Candidate. The next bounded phase is **L6 —
Lineage Draft Validator 0.1.0 Implementation**.

## L6 — Lineage Draft Validator 0.1.0 implementation evidence

Status: **implemented in e2r-validator; Draft remains Experimental / non-Stable**.

Validator commit: `49b2751 feat: validate Lineage Draft 0.1.0`.

The implementation uses the L5 seam: `src/extension-validator.js` recognizes
the exact Draft identifier and dispatches to the self-contained
`src/lineage-draft-validator.js`. It validates the exact `specVersion`, the
Metadata `datasetId` dependency, parent structure, the four closed kinds,
self-reference, and duplicate `(kind, target.datasetId)` pairs. It preserves
unknown payload/parent/target fields, parent order, spelling, and input
immutability. It does not resolve parents or validate global cycles, URLs,
hashes, authenticity, compatibility, fidelity, authority, licensing, or merge
behavior.

Valid recognized Lineage no longer emits `unknown_extension`. The four L3
fixtures all return `valid: true`; their only diagnostic is the pre-existing
Metadata `extension_version_unspecified` warning. Invalid recognized Lineage
returns `error` diagnostics from the L6 code set without an additional
`unknown_extension`. Local validation works without a Specification Extension
payload; existing Specification diagnostics remain independently responsible
for declaration behavior.

Production evidence includes the four valid kinds, multiple parents, same
target under different kinds, unknown nested fields, unresolved parents,
absent Lineage, all L5 invalid structural/local cases, deterministic ordering,
cascading suppression, and non-mutation. e2r-validator gates passed: 102 full
tests, 3 fixture tests, lint, and diff check. NarrativeLine and LiaisonScape
were not changed; their L4 opaque round-trip evidence remains valid historical
evidence because they do not consume this local Validator checkout.

This does not promote the Draft to Stable and does not create a self-description
Dataset. The next phase should address remaining promotion gates such as
broader invalid-case review and final Specification/version governance before
any Stable decision.

## L7 — Machine-Readable Dogfood / Self-Description Dataset

Status: **MACHINE-READABLE DOGFOOD READY — HUB PUBLICATION DEFERRED**.

Artifact: [`examples/e2r-self-description.json`](../../examples/e2r-self-description.json)

Documentation: [`docs/e2r-self-description.md`](../../docs/e2r-self-description.md)

The artifact is a bounded current-ecosystem Dataset with Core version `1.0`,
Metadata `datasetId` `e2r-self-description-0.1.0`, 12 Entities, 4 Events, and
17 Relations. It covers E2R/Core, the two registered Stable Extensions,
Coordinate/Specification/Lineage Draft candidates, NarrativeLine,
LiaisonScape, e2r-validator, and E2R Hub. It intentionally omits exhaustive
history, hypothetical OpenE2R content, Source/Citation claims, and a new
status or Relation semantics Extension.

The artifact uses ordinary content self-description: `self-description`
describes `e2r`. It also uses Lineage Draft `0.1.0` with one distinct parent,
`l0-e2r-lineage-self-description`, and therefore exercises the Validator's
Lineage path without self-reference. `lineage_self_reference` is absent.

Production e2r-validator result:

```text
valid: true
warning: extension_version_unspecified at /extensions/metadata
```

Lineage produces no error. The remaining Metadata warning is recorded rather
than hidden; Specification Extension was not added merely to silence it.

Read-only application smoke results against the same artifact:

- NarrativeLine accepted the Dataset with 12 Entities, 4 Events, and 17
  Relations available through its production import path; its installed
  Validator reports the unsupported Lineage payload as an `unknown_extension`
  warning, without rejection.
- LiaisonScape accepted the Dataset with the same object counts through its
  production load path, and a production serialization preserved the Lineage
  payload; its installed Validator likewise reports `unknown_extension` while
  remaining non-Lineage-aware.

These application observations are compatibility/usefulness smoke evidence,
not application Lineage support. The artifact is intentionally model-first;
any graph or timeline presentation limitations are application concerns.

## L7.1 — Self-Description chronology enrichment

Status: **dated dogfood chronology accepted; Hub publication remains deferred**.

The chronology snapshot covers committed Session `E2R-Session-0001` through
`E2R-Session-0047` and inspected the still-untracked `E2R-Session-0048` only as
local context. All 48 available session files were inventoried; 47 committed
session logs were suitable for published historical claims. Dated result and
decision documents, the History Extension, the current self-description
artifact, and relevant Git history were also inspected.

Evidence priority was: explicit session Date or dated Progress section;
explicitly dated result/decision document; Git commit timestamp as a secondary
cross-check; and no inference when the date was not supported. The candidate
table contained 14 bounded candidates before duplicate and low-value review.
Ten Events were selected, retaining all four existing Lineage Events and
adding five ecosystem milestones: History Extension established, NarrativeLine
MVP completed, E2R Validator MVP integrated, LiaisonScape first distribution
completed, E2R Hub first distribution completed, plus the self-description
creation milestone. The final artifact count is ten Events.

The final artifact contains ten Events, from 2026-08-05 through 2026-08-25.
It uses exact day precision only. No partial-precision dates, fabricated dates,
clock times, time zones, or legacy top-level `date` fields were added. Same-day
ordering uses History `temporalOrder` for the documented same-day phase or
completion sequence; it does not turn presentation order into temporal truth.
Each added milestone has one ordinary `milestone` Relation to its primary
Entity. No new machine-semantic Relation vocabulary was introduced, and no
additional `self-description uses History Extension` Relation was added because
the Event-level History payload already makes the Dataset's History dogfood
truthful without a redundant graph edge.

The S1 standards-licensing research checkpoint was **DEFERRED** from the
Timeline: it is relevant governance research but is not needed to explain the
technical development chronology of this bounded artifact. The cutoff is
explicitly the L7/S1 snapshot on 2026-08-25 and is not an automatic ongoing
synchronization.

Production e2r-validator result after enrichment:

```text
valid: true
warning: extension_version_unspecified at /extensions/metadata
warning: extension_version_unspecified at /events/0/extensions/history
```

The History warning is a diagnostic about omitted version metadata on the
Event-level History payload; it does not reject the valid Stable History shape.
Lineage diagnostics remained error-free. The artifact identity remains
`e2r-self-description-0.1.0`: this is content refinement of the existing
informative dogfood Dataset, not a new Dataset identity or a Lineage revision.

Read-only NarrativeLine import and existing History-aware ordering checks
accepted the Dataset and produced the expected chronological order: History
Extension (2026-08-05), NarrativeLine MVP then Validator MVP (2026-08-08),
LiaisonScape distribution (2026-08-16), Hub distribution (2026-08-18), then the
five ordered 2026-08-25 milestones. This was a source-level smoke, not a
browser screenshot/manual visual inspection; the existing formatter and
timeline tests provide the no-legacy-date-fallback boundary. LiaisonScape
read-only load/serialize smoke accepted the Dataset, preserved Event History,
and left a coherent but denser graph caused by five additional milestone
edges. No application source was changed.

The enriched artifact now meaningfully exercises History while remaining
clearly non-normative. It does not establish complete project archaeology,
change the Core, change Lineage semantics, select a license, or publish
through Hub. No new reusable Knowledge Candidate was identified; the evidence
is artifact-specific. The next phase remains S2 — E2R Standards License
Decision / Policy Record.

Normative authority remains the Markdown specification and registered
specification artifacts. Local creation is not blocked by S1, but Hub
redistribution remains deferred pending standards/document licensing,
artifact redistribution status, stable public path/URL, Hub handoff URLs, and
final user-facing wording. No Hub, application, Validator, or ai-knowledge
changes were made in L7. No new Knowledge Candidate is warranted.

Dogfood quality result: the artifact uses current repository facts, provides
meaningful Events and Relations, exercises recognized Lineage, distinguishes
ordinary self-description from Lineage self-reference, and remains small
enough for manual inspection. The recommended next phase is **S1 — E2R
Standards Licensing Research** before Hub publication.

## L4 — Cross-application opaque round-trip evidence

Status: **round-trip gate satisfied; Lineage remains Draft / Experimental / non-Stable**.

The same committed specimen, `research/exploratory/fixtures/lineage-extension-candidate.json`,
was used by both applications. Its payload identifier was
`draft.github.sukoyaka-dopeness.lineage` and its Draft version was
`specVersion: "0.1.0"`. Each application test added the same application-test-only
future sentinel:

```json
"futureSentinel": { "token": "preserve-me" }
```

The sentinel is not present in the Draft document or canonical fixtures.

### NarrativeLine

- Commit: `8b0dd76 test: preserve Lineage Draft through NarrativeLine`
- Test: `tests/sourceCitationPreservation.test.js`
- Workflow: `importDatasetJson` loaded the specimen, an Entity name was edited,
  and `exportDatasetJson` produced the output.
- Result: the complete unsupported Lineage object, including `specVersion`,
  `parents`, `kind`, `target.datasetId`, and `futureSentinel`, was deep-equal
  before and after the unrelated edit/export.
- Checks: focused preservation test passed; full test suite passed (182);
  lint, build, and `git diff --check` passed.

### LiaisonScape

- Commit: `b0c2057 test: preserve Lineage Draft through LiaisonScape`
- Test: `tests/dataset.test.ts`
- Workflow: `loadDataset` loaded the specimen, `updateEntityDetails` changed
  an unrelated Entity name, and `serializeDataset` produced the output.
- Result: the complete unsupported Lineage object, including `specVersion`,
  `parents`, `kind`, `target.datasetId`, and `futureSentinel`, was deep-equal
  before and after the unrelated edit/export.
- Checks: focused test passed; full test suite passed (182); lint, build, and
  `git diff --check` passed.

This is evidence that both applications preserve the unsupported Draft payload
through representative load/edit/export workflows. Neither application
interprets Lineage semantics, validates parent relationships, exposes Lineage
UI, or claims Lineage support. The evidence does not cover every acquisition,
storage/session, or browser-download route, and does not replace future
Lineage-aware Validator tests.
