# MotifMosaic, Vocabulary, and Cross-App Dataset Workflow — Research Checkpoint

Date: 2026-11-04 JST

Status: **HUMAN-SUPPORTED DIRECTION / DESIGN CANDIDATES AND EVIDENCE GATES OPEN / NO IMPLEMENTATION OR PORTABLE CONTRACT**

## Authority and relationship to prior work

This records the 2026-11-04 Human design session after the [2026-10-31 MotifMosaic and Vocabulary checkpoint](motifmosaic-and-vocabulary-architecture-checkpoint-2026-10-31.md). The earlier checkpoint's combined general Entity editing and creative support direction remains in force. This session narrows its emphasis: start from a simple, common Entity Editor, keep templates optional, and treat AI dialogue as the prospective creative workflow rather than building a large mechanical suggestion system. Earlier story-method interfaces and structural diagnostics remain research candidates, not a committed MVP or a required form for every Entity.

The [Roadmap](../../docs/roadmap.md) remains the sole current planning authority. [Core](../../spec/core.md), existing Extensions, and application implementations retain their respective authority. The [Entity-linked responsibility audit](entity-portable-information-responsibility-audit-2026-10-07.md) and [Semantic Vocabulary research](semantic-vocabulary-architecture.md) leave portable Classification and field ownership open. This checkpoint adopts no schema, product release, cross-app edit responsibility, or revised execution priority.

## Simple Entity editing and optional templates

**Human-supported direction:** a common Entity Editor should allow useful entry without selecting a detailed Classification or template. Classification organizes an Entity's kinds or meaning; a template is an optional way to set up a group of entry fields. Frequently used field names may become reusable Vocabulary, while a user can add arbitrary fields without automatically registering them in common Vocabulary. Even a seemingly minor field may matter to the Human's story, so the application should not pre-filter its importance.

The Human wants changes to a customized template to be naturally available when creating another Entity, without routine Save/Load operations. A change to one Entity's own fields must be distinguishable from a change to the reusable template. **Open design questions:** template storage scope, update and propagation behavior, whether reuse spans Datasets or devices, field identity and vocabulary mapping, conflict handling, and the portable storage owner. This preference does not select automatic mutation of other Entities, a field schema, or a formal Template Extension. The earlier possibility of multiple Classifications or templates per Entity remains a research question; it is not imposed on the initial editor.

## AI dialogue and authored facts

**Human-supported future workflow:** give an AI selected context about people, goals, relationships, countries, cities, organizations, Events, and other world details, then discuss narrative possibilities. Examples include a missing Event that improves consistency, an additional person that clarifies conflict, a past Event that makes a motive credible, or an overlooked possibility in existing settings. Human authorship and selection remain central. An AI suggestion or conversation does not become an established Core Entity, Event, Relation, or other Dataset fact without a deliberate Human adoption step.

Mechanical suggestions may still expose clear structural relationships and source-backed questions, but should avoid speculative literary judgments and excessive interruption. The earlier structural-diagnostic candidates remain optional research. AI provider choice, context selection and transfer, privacy and rights handling, response provenance, and any incorporation workflow are unselected. The application must not require a particular AI service for basic editing.

## Vocabulary questions

Keep Classification, reusable Field names, semantic Relations, and templates distinct. Vocabulary may aid search, field reuse, clearer meaning, and AI context quality as well as possible suggestions. External vocabulary fetch, concept links, facets, ontologies, embeddings, and graph embeddings were considered as research options; none is adopted. Free entry remains available without external fetch. External data needs rights, source, privacy, cache, and provenance review before any experiment or use. The independent common Vocabulary repository direction in the earlier checkpoint remains a repository responsibility direction, not a portable identity or distribution contract.

## World setting and application responsibilities

People, cities, nations, religions, political systems, groups, eras, civilizations, technologies, social institutions, and cultures may be expressible through existing Entities, Relations, Events, and freely entered information. Whether any needs a dedicated feature is open. NarrativeLine's Event and time work, LiaisonScape's Relation graph work, and ParameterPlotter's Dimension assessment work remain distinct. MotifMosaic may present related information without assuming duplicate editors or transferring their ownership. The accepted [incremental modularization decision](https://github.com/sukoyaka-dopeness/e2r-ai-knowledge/blob/main/decisions/application-modularization-and-incremental-extraction.md) applies to any later implementation, without prescribing modules here.

## Cross-app Classification and Dataset import

An Entity created in an existing application may have no MotifMosaic Classification. A prospective MotifMosaic import should still make useful Core Entity information available and, where supported, present related Events, Relations, and ParameterPlotter assessment information. Interpretation of each Extension, reference resolution, and display quality require implementation evidence; no such MotifMosaic consumer is established by this checkpoint.

**Interoperability goal for later investigation:** if a Human assigns Classification in MotifMosaic, other applications should carry that information safely through their workflows and may display it where useful. This does not require Classification editing in every application. Core intentionally defines no Entity categories; the exact Classification owner, identifier, Extension payload, and application support matrix remain open. Core and application guidance require unknown Extensions to be ignored on read and recommend preservation where practical; that is not a verified guarantee for every current import/edit/export path. Round-trip tests with real application versions and representative unknown payloads are needed before claiming preservation.

## Hub explanation of one Dataset across applications

**New UX research item:** the Hub could explain and illustrate how one E2R Dataset can be carried among applications and enriched through their different capabilities. Its entry points could distinguish creating a new Dataset from continuing with an existing one, and explain the risk of making separate work lines when a later merge is unavailable. Current Hub source provides sample Dataset Handoff links; this session does not establish a general user-Dataset continuation flow or exhaustive cross-app round-trip support. The Roadmap already lists multi-Dataset lineage and merge as research topics, not an implemented merge capability.

The diagram, wording, and route design were open at the time of this session. Any future copy must reflect actual export/import and Handoff behavior and avoid suggesting real-time synchronization, shared storage, automatic merge, or guaranteed lossless exchange. This was a planning and UX candidate, not authorization to modify the Hub or reprioritize its work.

**Later status (2026-11-12):** the Hub Dataset Workflow visualization was
subsequently accepted and published; see the [Hub publication record](https://github.com/sukoyaka-dopeness/e2r-hub/blob/main/docs/dataset-workflow-visualization-2026-11-04.md).
That later UI result does not settle the other research questions or establish
automatic synchronization, shared storage, merge, or universal round-trip support.
Its separate Publication Closure remains a Human decision.

## Decisions and evidence needed before implementation

1. Human selection of a bounded first editor and template-reuse behavior, including what is Entity-local versus reusable.
2. Formal Classification and Field Vocabulary responsibility, identity, storage, and compatibility design, if portability is required.
3. Evidence for each existing application's unknown-Extension preservation and Dataset round trip; a MotifMosaic import/display support matrix.
4. AI context, privacy, provenance, and explicit adoption behavior before integrating any provider.
5. Human decision on Hub UX scope and priority, after examining its current create/continue routes and actual Dataset transfer paths.

No Core or Extension contract, Runtime, Dataset, implementation, publication, or existing Human acceptance changes here.
