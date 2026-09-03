# Character Generator Application

This document describes ideas for a character generator application built on the E2R Core Specification.

This document is informational and is not part of the E2R Core Specification.

## Purpose

The Character Generator Application assists users in creating believable fictional characters by modeling relationships between Entities, Events, and their consequences.

Rather than storing isolated character profiles, the application treats characters as the result of experiences, relationships, and life events.

## Design Philosophy

Characters are generated from structured data rather than predefined templates.

A character's personality, beliefs, motivations, and behavior may be inferred from Events and Relations.

Likewise, existing character traits may be used to suggest plausible past experiences or future actions.

## Generation Directions

Possible generation workflows include:

### Event → Character

Infer character traits from life events.

Examples:

- Childhood experiences
- Family environment
- Education
- Trauma
- Successes
- Failures
- Relationships

### Character → Event

Generate plausible life histories that explain an existing character.

Examples:

- Childhood
- Career
- Family history
- Important turning points

### Character → Future

Predict likely future actions.

Examples:

- Decision making
- Personal growth
- Conflict
- Relationships
- Career paths

### World → Character

Generate characters appropriate for an existing world.

Examples:

- Culture
- Era
- Technology
- Religion
- Political system

### Character → World

Suggest organizations, locations, events, or supporting characters implied by an existing character.

## Consistency Analysis

Applications may analyze datasets for narrative consistency.

Examples include:

- Contradictory personality traits
- Missing motivations
- Unexplained relationships
- Missing life events
- Implausible timelines

## LLM-assisted Workflow

Applications may generate prompts containing subsets of an E2R dataset for manual use with an external Large Language Model.

Returned JSON may be validated and merged into the original dataset.

The application does not require direct API integration.

## Benchmark Dataset Generation

The application may be used to generate benchmark datasets for E2R.

Examples include:

- Large fictional family trees
- Character networks
- Historical timelines
- Story worlds
- Investigation scenarios
- Organization structures

Generated datasets may be used for validation, performance testing, interoperability testing, and application benchmarking.

## Relationship to the Core

The application operates entirely on standard E2R Entities, Events, and Relations.

Character modeling, inference, generation, and analysis are application-level behaviors and are not defined by the E2R Core Specification.

## Research direction: external vocabulary and large character graphs

Added by checkpoint `E2R-CHARACTER-GENERATOR-EXTERNAL-VOCABULARY-AND-LARGE-GRAPH-RESEARCH-NOTE1` on 2026-09-03.

This section records a future research direction only. It does not create a
new application plan, reopen Names P1, define a Generation Extension, select
an external source, or authorize implementation.

### Large-graph hypothesis

`CHARACTER-GENERATOR-LARGE-GRAPH-HYPOTHESIS-v1` is **RECORDED / UNPROVEN**.

A future Character Generator could produce a representative large fictional
relationship graph that LiaisonScape can display with little manual repair.
An illustrative scenario is approximately 100 character Entities and
potentially hundreds of Relations. The number 100 is a research scenario, not
a Core limit, application limit, or requirement.

The scenario may include families, factions, organizations, workplaces,
friendships, rivalries, alliances, mentorship, romance, secrets, debts,
conflicts, cross-group bridge characters, high-degree central characters,
sparse and dense subgraphs, parallel Relations, and semantically appropriate
self Relations. These are controlled research dimensions, not a prescribed
Dataset vocabulary or generation policy.

The intended workflow is a hypothesis:

```text
Character Generator
  -> E2R Dataset with many Entities and Relations
  -> LiaisonScape automatic placement / settling / routing / labels
  -> relationship diagram for research evaluation
```

Passing a Dataset between applications would not by itself prove that a
large graph is readable. Initial placement, settling, routing, labels,
viewport usability, performance, generation quality, and manual-correction
burden require separate evidence. The current LiaisonScape Initial Placement
research remains the active engineering thread and is not closed or reordered
by this hypothesis.

### External vocabulary prerequisite

`EXTERNAL-VOCABULARY-ACQUISITION-PREREQUISITE-v1` is **RECORDED**. Serious
generator research should first examine how external vocabulary and source
data can be acquired, normalized, attributed, and reviewed.

Candidate source categories include:

- personal names: surnames, given names, Japanese and English names, and
  later language/script domains where separately justified;
- Relation vocabulary: family, professional, social, organizational, and
  other relationship terms;
- thesaurus or semantic vocabulary: preferred terms, synonyms, broader,
  narrower, and related concepts when a source defines them; and
- later descriptive vocabularies such as organizations, occupations, places,
  titles, roles, and personality descriptors.

No source is selected here. A future bounded source or fetch study must record
source identity and publisher, dataset/version/revision, license and
redistribution terms, provenance, reproducibility, availability and drift,
format and encoding, language/script/transliteration, privacy, and cultural
or demographic bias. Text equality must not be treated as semantic identity;
an external concept identifier, label, alias, and normalized value are
separate research concerns. E2R internal identifiers must not be silently
replaced by external identifiers.

### Normalization and generation boundary

The conceptual research pipeline is:

```text
external source
  -> raw source snapshot
  -> parse / normalize
  -> normalized generator vocabulary
  -> deterministic or bounded generation
  -> proposed E2R Dataset
  -> Validator and human review
  -> intentional adoption, if appropriate
```

Raw source data, normalized vocabulary, generated proposals, and intentionally
adopted Dataset data are different layers. Generated output is a proposal or
Derived result by default; deterministic generation does not make it Owned
Dataset truth. Validator structural validity does not establish factual or
content correctness, and human review remains relevant. Deterministic
non-AI generation remains allowed as a future research direction; this is not
an AI-only application.

`EXTERNAL-VOCABULARY-WEB-FETCH-EXPERIMENT1` is **FUTURE / NOT STARTED**. It may
later test a bounded, reproducible, provenance-preserving acquisition path,
but this checkpoint performs no network fetch, API call, scraper, crawler,
Wikidata import, Dictionary import, or source-selection decision.

### Grouping connection

Large character graphs may make grouping useful, but grouping remains a
separate unresolved research responsibility. The following must not be
conflated:

- an explicit semantic Group expressing user or Dataset intent;
- a derived graph cluster computed for analysis; and
- a visual layout cluster created for presentation.

No Group schema, Group Entity, membership or hierarchy rule, Group Relation,
collapse/expand behavior, persistence rule, or Core-versus-Extension decision
is authorized. A generated motif or cluster must not silently become a
semantic Group.

### Non-binding future research sequence

The following is a conceptual dependency sequence, not an active roadmap or
execution priority:

1. external vocabulary source survey;
2. licensing, provenance, privacy, and bias audit;
3. bounded Web-fetch experiment;
4. normalization experiment;
5. name-generation experiment;
6. Relation vocabulary and thesaurus experiment;
7. small deterministic character-graph generation;
8. larger generated-graph experiment; and
9. separate LiaisonScape readability and stress evaluation.

Generation quality and layout quality must remain separate evidence surfaces;
neither should be collapsed into one score. Approximately 100 Entities and
hundreds of Relations are illustrative stress dimensions only. No generated
Dataset enters the current LiaisonScape PR-3 fixture corpus.

### Related research and authority boundary

This existing application document remains the canonical Character Generator
concept because it is the only current entry covering the application as a
whole. Narrower research seeds are linked rather than duplicated:

- [Perceived Name Impression Database and Character Name Generation](../research/exploratory/name-impression-database-and-character-name-generation.md)
  covers name-impression, source, privacy, bias, and deterministic-name
  questions;
- [On-Demand External Data, Vocabulary Fetch, and Human Name Generation](../research/exploratory/on-demand-external-data-and-name-generation.md)
  covers provider-facing and candidate-pool research;
- [Semantic Vocabulary Architecture](../research/exploratory/semantic-vocabulary-architecture.md)
  remains a broad, non-normative vocabulary research lead;
- [LiaisonScape User-defined Graph Groups](../research/exploratory/liaisonscape-user-defined-graph-groups.md)
  keeps explicit Groups separate from derived clusters;
- [LiaisonScape One-button High-quality Automatic Coordinate Generation](../research/exploratory/liaisonscape-one-button-automatic-coordinate-generation.md)
  records the separate automatic-layout hypothesis; and
- [AI Workflow Research Backlog](../docs/ai-workflow-research.md) preserves
  proposal, validation, provenance, human-review, and internal-ID boundaries.

The linked records remain authoritative for their narrower subjects. This
addition does not supersede, rewrite, or activate them.

### Current status and boundary

```text
CHARACTER-GENERATOR-LARGE-GRAPH-HYPOTHESIS-v1 = RECORDED / UNPROVEN
EXTERNAL-VOCABULARY-ACQUISITION-PREREQUISITE-v1 = RECORDED
EXTERNAL-VOCABULARY-WEB-FETCH-EXPERIMENT1 = FUTURE / NOT STARTED
GROUPING DEPENDENCY = POSSIBLE FUTURE NEED / NOT AUTHORIZED
CHARACTER GENERATOR IMPLEMENTATION = NOT STARTED
100-ENTITY GENERATION = NOT EXECUTED
WEB FETCH = NOT EXECUTED
```

This remains research/post-release growth only. It is not a release blocker,
does not change current research priority, and authorizes no Character
Generator, importer, schema, Core, Extension, LiaisonScape, NarrativeLine, or
sample Dataset change.

## Research direction: portable Character Trait Vocabulary source policy

Added by checkpoint
`E2R-CHARACTER-GENERATOR-PORTABLE-TRAIT-VOCABULARY-SOURCE-POLICY-RESEARCH-NOTE2`
on 2026-09-03.

This is a research direction and source-selection preference. It is not an E2R
Core rule, an Extension specification, a schema freeze, an implementation
authorization, or a source approval.

### Portable vocabulary policy

`PORTABLE-VOCABULARY-NO-ATTRIBUTION-PREFERENCE-v1` is **RECORDED**.
Character Generator's initial portable vocabulary should prefer sources that
are Public Domain or CC0, or that can be shown by source-specific evidence to
permit the same relevant uses without mandatory downstream attribution,
notice, or ShareAlike propagation. This preference exists because generated
values may enter a self-contained E2R Dataset and move through LiaisonScape,
NarrativeLine, and other applications.

The policy does not declare any named source eligible. For every source,
rights remain **TO VERIFY** until authoritative source-specific evidence
establishes identity, commercial use, modification, redistribution,
derived-data redistribution, attribution, notice propagation, ShareAlike, and
research-only/noncommercial restrictions.

The preferred research class is:

`SOURCE-RIGHTS-A = PREFERRED SOURCE CLASS`

It describes a source that is freely usable for the intended purpose, permits
commercial use, modification, redistribution, and derived-data redistribution,
does not legally require attribution or mandatory notice propagation for the
portable Dataset, and has no ShareAlike/copyleft or research-only restriction.
The phrase "legally equivalent" must never be asserted without verifying the
particular source's authoritative terms.

For research accounting, `SOURCE-RIGHTS-B` means attribution or notice is
required and is a lead only by default; `SOURCE-RIGHTS-C` means ShareAlike or
copyleft terms and is not preferred for the initial portable vocabulary; and
`SOURCE-RIGHTS-D` means restricted, research-only, noncommercial, no-
redistribution, unclear derived-data rights, or unclear provenance and is
ineligible until separately resolved.

Attribution-bearing sources are not automatically rejected from all future
research, but they are not to enter the initial distributable Character Trait
Dictionary without an explicit later licensing decision. Previously mentioned
leads such as IPIP, Wikidata, OBA, WordNet, Japanese WordNet, PATO,
ConceptNet, DBnary, and NRC remain research leads or **RIGHTS TO VERIFY**;
none is automatically approved here.

### Credits, provenance, and portability

Application Credits and Dataset provenance are separate responsibilities.
Application Credits cover the Character Generator's own bundled libraries,
icons, assets, and dictionaries. Provenance may preserve source identity,
version, URL, external concept ID, normalization derivation, retrieval date,
and source hash for reproducibility, audit, debugging, trust, and refresh. That
informational provenance is not automatically a legal credit.

If the initial dictionary is built solely from verified `SOURCE-RIGHTS-A`
resources, Character Generator should not force vocabulary-source legal credits
into every generated Dataset, and receiving applications should not need to
display third-party legal credits solely because they consumed those generated
values. Optional acknowledgement may still be useful. This conclusion does
not apply to unverified or future attribution-bearing sources.

No general `Dataset.licenses`, `Dataset.attributions`,
`Dataset.thirdPartyNotices`, or `Dataset.creditRequirements` schema is created
by this research note. If attribution-bearing ingestion is later selected, it
requires separate Dataset-carried provenance/attribution research.

### Character Trait Vocabulary target

`CHARACTER-TRAIT-VOCABULARY = FIRST LIKELY EXTERNAL-VOCABULARY RESEARCH TARGET`.
The first likely vocabulary target is a trait dictionary rather than names
alone, with illustrative areas of Mental, Physical, and Social traits. Mental
traits are the strongest first research candidate; no psychological model is
adopted.

The research must distinguish:

- a trait dimension or axis, such as Extraversion or Emotional Stability;
- a trait concept, such as "sociable";
- a preferred display label chosen for a language and UI; and
- aliases, related terms, opposite terms, and stronger or weaker expressions.

`preferredLabel`, aliases, axis authority, concept identity, intensity, and
multilingual labels are different responsibilities. The source with the best
concept identity need not supply the best consumer-facing headword. The first
lemma in a synonym set, a Wikidata label, or an ontology `rdfs:label` is not
automatically the preferred display label. `PREFERRED-LABEL-SOURCE = OPEN`.
No ranking algorithm or Trait Dictionary schema is frozen.

The vocabulary may later support four-quadrant presentation from two axes or
a radar chart from several dimensions. These are presentation hypotheses, not
adopted psychological semantics. A multi-source architecture remains possible:
an axis source, lexical/concept source, presentation dictionary, generator, and
E2R Dataset may have separate responsibilities. Only verified `SOURCE-RIGHTS-A`
resources are preferred for the initial portable path.

### Provenance question and future source survey

`DATASET-VOCABULARY-PROVENANCE-QUESTION-v1 = OPEN`. Even when legal
attribution is unnecessary, a future generated Dataset may preserve vocabulary
provenance for reproducibility and audit. This does not authorize a provenance
schema now.

The future source survey should first investigate sources likely to satisfy
`SOURCE-RIGHTS-A`, including Public Domain/CC0 personality-scale resources,
structured lexical/concept resources, and biological or attribute ontologies.
This is a priority concept, not a final source selection. Before any future
fetch, the source-rights preflight should establish: known source identity;
authoritative rights text; commercial use; modification; redistribution;
derived-data redistribution; no legally required attribution; no mandatory
notice propagation; no ShareAlike; no research-only/noncommercial restriction;
and obtainable version/provenance metadata. All eleven gates must pass before
`SOURCE-RIGHTS-A-ELIGIBLE` can be recorded.

`EXTERNAL-VOCABULARY-WEB-FETCH-EXPERIMENT1 = FUTURE / NOT STARTED` is refined
to ask whether a verified source can be retrieved, normalized, provenance-
recorded, and converted into a small deterministic Character Trait Vocabulary
snapshot without downstream legal obligations. This checkpoint performs no
fetch, API call, scraper, crawler, download, ingestion, or source approval.

WordNet-like, Wikidata-like, and ontology-like resources remain useful research
leads for synsets, stable identifiers, primary labels, aliases, definitions,
and multilingual data, but source fitness and source rights remain separate
evaluations. No named resource is approved here.

### Cross-application and future-generation boundary

The portable Dataset hypothesis is:

`PORTABLE-DATASET-LICENSE-SIMPLICITY-HYPOTHESIS-v1`

When generated data is intended to move between E2R applications and be
redistributed as self-contained Datasets, input resources with no downstream
attribution or license propagation substantially simplify interoperability.
This is a research hypothesis, not Core law, and may later apply to names,
metadata, templates, identifiers, or media metadata.

Character Generator may eventually generate approximately 100 interconnected
characters with life Events as well as traits, relationships, and other
attributes. The 100-Entity value is illustrative, not a Core or application
limit. LiaisonScape may present the relationship graph while NarrativeLine may
present multi-person life histories and timelines. Relation/Event consistency
(for example, a marriage Event and spouse Relation) remains a future hypothesis;
no temporal Relation semantics or Core change is introduced.

The existing name-impression, on-demand external-data/name-generation,
semantic-vocabulary, Group, and AI-workflow research remains authoritative for
its narrower questions. This addition cross-references those records and does
not duplicate or supersede them. Legal attribution remains distinct from
provenance, and generated proposals remain distinct from intentionally adopted
Dataset data.

### Status and boundary

```text
PORTABLE-VOCABULARY-NO-ATTRIBUTION-PREFERENCE-v1 = RECORDED
SOURCE-RIGHTS-A = PREFERRED SOURCE CLASS
CHARACTER-TRAIT-VOCABULARY = FIRST LIKELY EXTERNAL-VOCABULARY RESEARCH TARGET
PREFERRED-LABEL-SOURCE = OPEN
DATASET-VOCABULARY-PROVENANCE-QUESTION-v1 = OPEN
EXTERNAL-VOCABULARY-WEB-FETCH-EXPERIMENT1 = FUTURE / NOT STARTED
CHARACTER TRAIT DICTIONARY = NOT IMPLEMENTED
CHARACTER GENERATOR = NOT IMPLEMENTED
LIFE EVENT GENERATION = NOT IMPLEMENTED
```

This remains research/post-release growth only and is not a release blocker or
active/NEXT engineering work. No Web fetch, source survey execution,
vocabulary ingestion, dictionary build, trait scoring, quadrant or radar UI,
name/Relation/Event generation, 100-Entity Dataset generation, Dataset
provenance schema, Credits UI, Core, Extension, NarrativeLine, LiaisonScape,
Group, sample, or implementation change is authorized.

## Research direction: deterministic Dataset tendency and generation seeds

Added by checkpoint
`E2R-CHARACTER-GENERATOR-DETERMINISTIC-DATASET-TENDENCY-SEED-RESEARCH-NOTE3`
on 2026-09-03.

This section records a research hypothesis for reproducible generation. It is
not a Core rule, Extension specification, Dataset metadata schema, algorithm
selection, implementation authorization, or source approval. It updates this
existing Character Generator authority; it does not create a duplicate
Character Generator concept.

### Dataset-level tendency hypothesis

`DETERMINISTIC-DATASET-TENDENCY-SEED-HYPOTHESIS-v1` is **RECORDED / UNPROVEN**.

The research hypothesis is that a Character Generator may first derive a
Dataset-level generation tendency and then generate individual Characters,
Relations, and Events under that tendency. A conceptual flow is:

```text
opaque generation root seed
  -> Dataset Generation Profile
  -> domain-specific derivation
  -> Traits / Characters / Relations / Events
  -> proposed E2R Dataset
```

This could let two Datasets produced by the same generator family exhibit
recognizable aggregate differences—such as sociability, family size, faction
conflict, bridge-character frequency, or Event volatility—without making every
individual value identical or stereotyped. Dataset A/B/C examples remain
illustrative examples, not a parameter set or required vocabulary.

The tendency belongs to the generated fictional Dataset distribution. It must
not be treated as a model of the real user's personality, behavior,
demographics, preferences, or psychology. Generated output remains a proposal
or Derived result until an intentional application operation adopts selected
content as Dataset data.

### Opaque seed boundaries

`GENERATION-ROOT-SEED-v1` is a **RESEARCH CONCEPT ONLY**. A future generator
may use a random or opaque identifier dedicated to generation. It should be
replaceable, resettable, and independent from account identity, GitHub
identity, repository identity, VSCode machine identity, and Dataset semantic
IDs unless a future explicit composition rule is chosen.

Actual account user ID, email, GitHub username, repository ID, and other
personally identifying or provider-specific values are **NOT PREFERRED** as
generation seeds. Direct use would create privacy, portability, tracking, and
cross-Dataset linkability risks. This research does not access or derive any
such value.

A private local or workspace-scoped tendency seed may eventually allow the
same user or workspace to recognize a generation style without publishing an
identity. That is a future capability, not a claim that the user has a
particular personality. `privateGenerationProfileSeed` remains an OPEN
research concept and need not be stored in a portable Dataset.

Dataset-specific derivation is also open:

```text
datasetGenerationSeed = derive(generationRootSeed, datasetGenerationIdentity)
```

`datasetGenerationIdentity` is not automatically the Core Dataset ID. The
current Core does not supply a Dataset ID contract for this purpose, so this
research does not invent one. Possible future inputs include a generator-owned
opaque Dataset seed, an explicit generation-lineage identifier, a caller seed,
or a Dataset metadata Extension identifier; no choice is made here.

### Domain-separated deterministic derivation

The preferred research direction is hierarchical/domain-separated derivation,
not one global pseudo-random stream whose call order silently becomes
semantics:

```text
dataset seed
  -> generation-profile seed
  -> character seed
  -> relation seed
  -> event seed
  -> trait seed
  -> name seed
```

Character, Relation, Event, Trait, and name sub-seeds are recorded as
conceptual research directions only. A future groups sub-seed is possible but
is not authorized. Stable generated identities and domain-separated inputs
could reduce unrelated regeneration when one generator domain changes, but
these benefits remain unproven. Array position or random-call order must not
silently become an E2R semantic contract.

No hash, PRNG, KDF, UUID, bit width, serialization, or seed encoding is
selected. `DETERMINISTIC-GENERATION-PRIMITIVE-DESIGN = FUTURE / NOT STARTED`.

### Dataset Generation Profile

`DATASET-GENERATION-PROFILE-v1` is a **RESEARCH CONCEPT ONLY**. It is a
conceptual intermediate object describing fictional-world distributions, not
real-user profiling and not a frozen vocabulary or schema.

Illustrative parameter families are:

- Mental distribution: sociability, assertiveness, emotional stability, and
  curiosity tendencies;
- Physical distribution: strength, endurance, age, and health tendencies;
- Social structure: family density, faction count, organization size,
  hierarchy depth, and bridge-character frequency;
- Relation structure: Relation density, conflict, friendship, mentorship, and
  cross-group probabilities; and
- Life history: Event frequency, lifespan, mobility, conflict periods, and
  Event volatility.

The research preference is distribution → individual variation, rather than a
Dataset seed directly assigning the same stereotyped Traits to every
Character. A profile may eventually be inspectable or editable, while raw
seed material may remain an implementation or reproduction control. No
psychology model, equation, parameter vocabulary, or Trait Dictionary is
adopted.

### Reproduction modes and provenance

Two capabilities must remain distinct:

1. **Exact reproduction**: the same generator version, generation
   configuration, and complete seed lineage reproduce the same generated
   proposal.
2. **Same-tendency regeneration**: the Dataset tendency/profile is retained,
   while lower-level instance seeds change to produce different Characters and
   Events with a similar aggregate style.

The latter is the future direction behind a possible “new Dataset, similar
style” operation; it must not silently rewrite already Owned author data.
`SEED-ONLY-REPRODUCIBILITY = INSUFFICIENT`: exact reproduction also needs
conceptual generator algorithm/version, configuration/profile version, seed
lineage, vocabulary snapshot/version, and possibly source-data versions.

Vocabulary enumeration order must not be an accidental seed input. A stable
concept identity plus an identified vocabulary snapshot may be needed before
deterministic lexical selection is reproducible. The existing portable
vocabulary source policy remains authoritative for source-rights research.

`GENERATED-OBJECT-IDENTITY-RESEARCH = OPEN`. Future identity work may need to
support exact Character regeneration, Event-stream regeneration, Relation
reference preservation, generator-version comparison, and partial regeneration
without deciding UUID or Core ID semantics here.

`PORTABLE-GENERATION-METADATA-POLICY = OPEN`. It remains undecided whether a
portable Dataset should carry no generation information, generator/version
provenance, reproduction seed, Dataset Generation Profile, or complete
generation lineage. Privacy, portability, file size, reproducibility, and
accidental linkability remain trade-offs. No Dataset generation metadata
schema is created.

### Cross-domain consistency and regeneration safety

Trait, Relation, and Event generation should be studied as semantically
coherent domains rather than independently random outputs. For example, a
marriage Event may be expected to align with a spouse Relation, a mentor Event
with a mentor Relation, and an organization-join Event with a membership
Relation. These are future consistency questions, not dependency equations.

Partial regeneration also remains open. Regenerating Traits, names,
Relations, Events, or one Character after manual edits could overwrite Owned
data, leave stale references, or break cross-domain consistency. A future
workflow should preserve the boundary:

```text
seed + configuration
  -> generated proposal
  -> validation
  -> human review / explicit acceptance
  -> Owned Dataset data
```

### Cross-application value and privacy inventory

The existing large-graph direction remains illustrative: approximately 100
Character Entities, hundreds of Relations, multiple families or factions,
bridge Characters, and conflict/cooperation patterns may later provide a
LiaisonScape stress scenario. One hundred is not a limit. NarrativeLine may
later expose the generated life Events as multi-person timelines. Generation
quality and LiaisonScape readability remain separate evidence surfaces.

The bounded privacy and portability risks are:

- P1: actual account ID embedded in a Dataset;
- P2: stable global seed linking unrelated public Datasets to one author;
- P3: GitHub username or repository identity used as hidden generation
  identity;
- P4: seed material revealing or encoding personal information;
- P5: generated patterns mistaken for user profiling; and
- P6: a private root seed accidentally published in a portable Dataset.

A future design may separate a private root/profile seed from a portable
reproduction seed or exported Dataset-level tendency seed. GitHub, Web, local,
VSCode, and Git-backed workflows should remain portable; storage providers and
machine identities must not become required generation semantics.

Research levels D0 through D4 remain useful distinctions: nondeterministic,
session-deterministic, Dataset-deterministic, cross-environment deterministic,
and cross-version reproducible. The required level is not selected here and D4
is not automatically imposed.

Future scenarios G1–G7 remain unexecuted: exact same seed/config/version,
same tendency with new instances, different Dataset seed, same root with
different Dataset identity, cross-provider reproduction, isolated Event
sub-seed changes, and vocabulary-snapshot changes. No experiment is authorized
by this note.

### Status and boundary

```text
DETERMINISTIC-DATASET-TENDENCY-SEED-HYPOTHESIS-v1 = RECORDED / UNPROVEN
GENERATION-ROOT-SEED-v1 = RESEARCH CONCEPT ONLY
DATASET-GENERATION-PROFILE-v1 = RESEARCH CONCEPT ONLY
ACTUAL USER ID AS SEED = NOT PREFERRED / PRIVACY RISK
EXACT REPRODUCTION = FUTURE RESEARCH MODE
SAME-TENDENCY REGENERATION = FUTURE RESEARCH MODE
SEED-ONLY-REPRODUCIBILITY = INSUFFICIENT
GENERATED-OBJECT-IDENTITY-RESEARCH = OPEN
PORTABLE-GENERATION-METADATA-POLICY = OPEN
DETERMINISTIC-GENERATION-PRIMITIVE-DESIGN = FUTURE / NOT STARTED
CHARACTER GENERATOR IMPLEMENTATION = NOT STARTED
```

This remains research/post-release growth only. It is not an active or NEXT
engineering priority and is not a release blocker. No generator, seed code,
hash/PRNG/KDF implementation, user/account access, Dataset ID schema,
Generation Extension, Trait/Relation/Event generation, 100-Entity Dataset,
Web fetch, VSCode extension, GitHub integration, NarrativeLine change,
LiaisonScape change, Core change, or sample Dataset change is authorized.
