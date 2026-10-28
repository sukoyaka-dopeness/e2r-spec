# Future E2R Applications and Semantic Vocabulary — Research Checkpoint

Date: 2026-10-28

Status: **HUMAN-STATED FUTURE DIRECTION / EXPLORATORY RESEARCH / NO PRODUCT, PORTABLE CONTRACT, OR ROADMAP PRIORITY ADOPTED**

## Purpose and authority

This checkpoint records additional Human-stated direction from the 2026-10-28 discussion about possible E2R applications and Semantic Vocabulary. It complements, rather than replaces, the [Entity-linked portable information future direction](entity-linked-portable-information-future-direction-2026-10-07.md), the [Entity-linked portable information responsibility audit](entity-portable-information-responsibility-audit-2026-10-07.md), and the existing [Semantic Vocabulary Architecture](semantic-vocabulary-architecture.md). Those records remain the sources for their detailed earlier analysis.

This is non-normative Research. It does not change the E2R Core, Extensions, schemas, Validators, application behavior, Human Acceptance, or the current Roadmap priorities. Existing application concepts and examples cited below are contextual research, not evidence that a product, data contract, or implementation has been adopted.

## Character Sheet / Entity Profile direction

**Character Sheet** and **Entity Profile** are provisional labels. No formal application name or development priority is selected. The Human-stated concept is an application that presents information about one or more people using existing E2R concepts where they fit:

- people are represented as Core Entities;
- relationships are represented as Core Relations;
- life events are represented as Core Events;
- multiple people and their information may be accumulated in one E2R Dataset;
- LiaisonScape may present relationships, NarrativeLine may present life Events, and ParameterPlotter's Dimension Assessment may be useful for some explicitly authored assessments.

This direction favors composing existing E2R information over creating a dedicated Character Sheet format without first demonstrating a gap. It does not establish that every desired field fits an existing Extension, or that a new portable owner is unnecessary. The 2026-10-07 responsibility audit's questions about generic attributes, Classification, Quantity, Measurement, Assessment, provenance, and aggregation remain open.

## User-configurable sheet structure

The Human-stated preference is for users to configure a sheet for each world or project instead of being constrained to fixed genre forms. Candidate capabilities include editing field labels; adding, removing, and reordering fields; optionally grouping them; supporting user-defined fields; and linking selected fields to Semantic Vocabulary concepts.

For ordinary Character Sheet use, the Human prefers that field configuration and world-specific vocabulary live with the Dataset. This is a storage preference, not a Portable Data Contract or an Extension design. Possible owners, serialization, migration, sharing between Datasets, unknown-data preservation, and offline behavior remain undecided. Earlier candidate field sets such as Identity, Appearance, Personality, Motivation, Abilities, Relations, Faction, and life Events are research examples; none is adopted as a complete or mandatory form.

## Semantic Vocabulary direction

The Human values machine-readable identification of a concept's meaning in addition to spelling suggestions. Possible consumers include recognizing Relation meanings and directions in LiaisonScape, classifying Event kinds in NarrativeLine, associating configurable sheet fields with concepts, and identifying concepts used by ParameterPlotter Dimensions. Multilingual labels and alternate display names could allow applications to find or analyze related concepts across languages.

Concept identification must remain distinct from inference. A vocabulary match would not by itself authorize an application to infer facts, rewrite a Dataset, or treat related terms as identical. Likewise, two uses of the same Dimension concept do not necessarily use comparable scales or give the same meaning to their numeric values. Semantic recognition, inference rules, and measurement comparability are separate research questions.

## Shared Vocabulary Utility as a possible capability

Vocabulary lookup and management are being considered as capabilities that could serve multiple E2R applications, rather than as a Character Sheet-only feature. Candidate functions include searching external vocabularies; retrieving synonyms, aliases, related and hierarchical concepts, identifiers, multilingual labels, and definitions; presenting suggestions while a user enters a term; and managing small pools or caches to reduce network traffic. Source attribution, licensing, versioning, updates, and behavior when external services are unavailable are part of the research space.

For example, entering “bravery” might offer “boldness” as a related suggestion. Such a suggestion would not automatically assert that the terms identify the same concept or mutate the Dataset before the user chooses it. Wikidata, WordNet, SPARQL, and other sources are examples for evaluation only; no provider, source policy, or retrieval design is selected here. The earlier Semantic Vocabulary Architecture contains proposals that must be evaluated against this checkpoint and later Human decisions, not treated as settled requirements merely because they appear in that document.

## Vocabulary storage possibilities

Three possible storage locations remain in consideration and need not be mutually exclusive:

1. Dataset-local vocabulary for a world's own terms and meanings;
2. a reusable shared Vocabulary repository for use across Datasets; and
3. a separately managed user Vocabulary file.

Dataset-local storage is the current Human preference for ordinary, world-specific Character Sheet work. Shared reuse may make a repository or separate file useful for vocabulary used by multiple Datasets. Identity, references, versioning, licensing, provenance, synchronization, offline portability, and retention of unknown vocabulary information are unresolved.

## Creative writing and OSINT

The future information model should not be fixed to fictional character attributes alone. Human wants to explore whether Entity, Relation, Event, and Semantic Vocabulary can support both creative work and investigative / OSINT uses. This is a possible reuse direction, not a decision to build one shared application or to apply a common workflow to every app.

For OSINT, research should keep distinct recorded information and confirmed facts; Source and Citation; Claim and Evidence; provenance; confidence and verification state; the time a fact is valid and the time it was acquired or recorded; identity and entity resolution; and privacy and appropriate use. Source/Citation is viewed as a potentially cross-application responsibility, but this checkpoint does not unify its contract or require every application to implement it. Existing Source/Citation and OSINT research remains the authority for its current bounded conclusions.

## Character Generator and application landscape

A Character Generator is a possible future capability that could compose Entities, Relations, Events, and semantically identified vocabulary to propose character details, relationships, or life events. Generated material would remain a suggestion until a Human adopts it; it is not established Dataset information merely because it was generated. This does not select an application architecture, a model, or a generation policy.

The existing Application Catalog and application research also cover Worldbuilding, Knowledge Base, Investigation / OSINT, and related concepts. This checkpoint records how they may relate to the Character Sheet and Semantic Vocabulary directions; it does not choose product names, define their boundaries, or rank them for development.

## Open questions and decision gates

Before any portable representation or implementation is proposed for adoption, research and Human decisions are needed for at least the following:

- whether existing Core and Extension owners can represent each required field, or a new portable responsibility is justified;
- how configurable fields, groups, and world-specific terms are stored and referenced without introducing an unbounded generic property bag;
- how concept identifiers, labels, aliases, language, source, license, and vocabulary version are represented and retained;
- what a semantic match means, how ambiguity is presented, and where any inference or validation rules would belong;
- how Dataset-local and shared vocabularies interact, and what remains available offline;
- how OSINT provenance, claims, evidence, confidence, identity, time, and privacy concerns relate to existing bounded research;
- what responsibility is shared by a Vocabulary Utility versus implemented locally by each application;
- whether and when a Character Sheet or Character Generator should be named, prioritized, or prototyped.

No Core or Extension contract, vocabulary provider, storage scheme, app name, implementation, acceptance, or Roadmap priority is adopted by this checkpoint. Any future prototype should keep its temporary or Dataset-write boundary explicit and should not promote application-local observations into portable semantics without a separate review and Human decision.

## Related records

- [Entity-linked portable information responsibility audit](entity-portable-information-responsibility-audit-2026-10-07.md)
- [Entity-linked portable information future direction](entity-linked-portable-information-future-direction-2026-10-07.md)
- [Semantic Vocabulary Architecture](semantic-vocabulary-architecture.md)
- [Semantic Layers](semantic-layers.md)
- [Character Generator Application](../../applications/character-generator-app.md)
- [Application Catalog](../../applications/application-catalog.md)
- [Worldbuilding Application](../../applications/worldbuilding-app.md)
- [Knowledge Base Application](../../applications/knowledge-base-app.md)
- [OSINT Application](../../applications/osint-app.md)
- [E2R for VS Code — OSINT Workbench exploration](e2r-vscode-osint-workbench.md)
- [E2R OSINT External Dataset Acquisition, Trust, and Provenance](e2r-osint-external-dataset-acquisition-and-trust.md)
- [Minimal Source/Citation workflow research](../source-citation/decisions/minimal-source-citation-workflow.md)
