# Future Application Ecosystem — Session Ideas Checkpoint

Date: 2026-10-30

Status: **HUMAN-STATED DIRECTION AND COMPARATIVE DESIGN CANDIDATES / EXPLORATORY / NO APPLICATION, PORTABLE CONTRACT, HOST, SYNC, FEDERATION, OR ROADMAP ADOPTION**

## Purpose and authority

This checkpoint preserves the Human's session summary of future E2R application ideas. It extends the [2026-10-28 Future Applications checkpoint](future-e2r-applications-and-semantic-vocabulary-checkpoint-2026-10-28.md), which focused on people, configurable sheets, and Semantic Vocabulary. Earlier research retains its own status and detail. The summary mixes Human preferences with design comparisons and recommendations; where it does not identify the speaker of a particular option, this record labels it a **candidate**, not a Human-adopted decision.

This is non-normative Research. It changes no Core or Extension meaning, application behavior, accepted decision, Roadmap priority, milestone, publication plan, or implementation authority. The current [Roadmap](../../docs/roadmap.md) remains the planning authority. In particular, the [Perspective Candidate](../../extensions/perspective-extension-candidate.md) currently owns only Human-authored, non-temporal Event ordering; “perspective” below does not expand that Candidate to claims or subjective Entity state.

## EntityPool / Entity Profile

**Human-stated direction:** broaden the earlier Character Sheet idea into a general surface for any Entity: people, cities, organizations, buildings, objects, concepts, and sources/documents. “EntityPool” and “Entity Profile” are working labels, not selected product names. Candidate capabilities include editing attributes, classifications, state, images, and related Entities; user-defined fields; composable templates; and links to Semantic Vocabulary concepts. A sheet is a view over information with potentially different owners, not an adopted portable sheet structure.

Semantically defined reference slots could offer selection of an existing Entity or propose creation of a new one: spouse, organization, birthplace, rival, cited source, and similar examples. The user should control adoption. Matching text alone must not establish identity or cause bulk Entity creation. Dataset-local Entity IDs and display names remain distinct. If several applications edit an affiliation or relationship, a second screen must not become an independent authority for the same fact. Exact field, image/asset, template, reference, classification, and lifecycle ownership remains open; see the [Entity-linked responsibility audit](entity-portable-information-responsibility-audit-2026-10-07.md), [future direction](entity-linked-portable-information-future-direction-2026-10-07.md), and [Semantic Vocabulary research](semantic-vocabulary-architecture.md).

## Perspective, state, and claim

**Human-stated direction:** an Entity may be described differently by a person, organization, document, or investigator. For example, “Leon's evaluation of Ellis” could appear from either profile without two authoritative records. Basic description, another person's view, a source's claim, an investigative estimate, and established information should remain distinguishable. Not every ordinary entry should require perspective, source, or confidence input. Missing information, unknown information, and low confidence have different meanings.

**Unselected design comparison:** a future view could resolve one identified statement from several Entity screens; the portable owner, targets, identifiers, edit authority, and conflict/lifecycle behavior are not chosen. A second presentation must not copy the statement into a competing owner. Perspective, Claim, Source, Evidence, Citation, Confidence, Provenance, and state/temporal validity are separate responsibilities to investigate. Differing records alone do not prove an actual state transition, Event, or causal link. The [minimal Source/Citation workflow](../source-citation/decisions/minimal-source-citation-workflow.md) already distinguishes citation from evidence and provenance; [temporal perspectives research](e2r-multidimensional-history-temporal-perspectives.md) explores related time and assertion questions. This checkpoint adds no mandatory epistemic metadata or general Claim schema.

## NarrativeLine and shared Event information

**Human-stated direction:** NarrativeLine could remain the specialized place to inspect and edit Events concerning an Entity. “Which Entities participate in or are related to this Event?” and “whose viewpoint or record is this?” are distinct possible filters. One Event may relate to several Entities under existing Core Relations. Event participation, a claim about an Event, an interpretation of it, and a claimed cause of a state change must not be silently equated. EntityPool and other applications could present the same identified information without establishing separate authoritative Event copies. The exact query, editing, reference, and ownership contracts remain open.

## Creative Writing / Story Workshop

**Human-stated direction:** explore a creative-writing workspace that asks questions and proposes Entity, Relation, and Event material using more than one compatible methodology. Candidate lenses include Character Arc, Want/Need, conflict and opposition, Scene/Sequel, setup and payoff, information asymmetry, and larger story structure. The workflow could reason in both directions: initial/final character state toward turning Events, Events toward character change, and relationships toward conflict. These are methods of assistance, not imposed Dataset semantics or mutually exclusive theories.

**Unselected design comparison:** this may be an application, a specialist view, templates, or capabilities shared with existing [Character Generator](../../applications/character-generator-app.md), [Scenario Generator](../../applications/scenario-generator-app.md), and [Worldbuilding](../../applications/worldbuilding-app.md) research. Generated or suggested records remain proposals until Human adoption. No automatic Dataset mutation, generator architecture, or product boundary is selected.

## OSINT / Investigation Workbench

**Human-stated direction:** investigation has sufficiently different workflows that a separate specialist application is a strong candidate. Possible work includes clipping web articles, collecting PDFs/images, retaining originals, extracting information, linking Claims and Evidence, assessing sources, comparing contradictions, and tracking hypotheses. Large source collections, search indexes, local files, privacy, and offline work make a VS Code or other local host attractive. VS Code is not selected as the sole host. Historical research can support creative writing, but advanced source-verification UI need not appear in every creative application.

The existing [VS Code OSINT Workbench](e2r-vscode-osint-workbench.md) and [external Dataset trust](e2r-osint-external-dataset-acquisition-and-trust.md) records cover the deeper source, trust, privacy, and architecture questions. This checkpoint records the relationship to creative applications without adopting ingestion, extraction, identity resolution, evidence, or privacy contracts.

## Web, VS Code, Desktop, and portable information

**Human-stated direction:** keep Web applications first class for convenient use, reading, sharing, and publication; investigate local hosts such as VS Code for large collections, advanced editing, Git/files, investigation, and developer workflows; retain standalone Desktop as an option. Different hosts might work with the same E2R information. A local workspace and a portable E2R Dataset can have different responsibilities. Shared access across clients does not imply real-time collaboration or synchronization.

The [Web / VS Code host authority research](e2r-web-vscode-host-authority.md) and [Suite research](e2r-suite-long-term-milestone.md) already frame these host options. This checkpoint selects no common package layout, storage authority, sync method, merge rule, or host hierarchy. Existing JSON Handoff and Core contracts remain unchanged. Application architecture guidance, if later needed, follows the accepted responsibility-based, incremental [workspace modularization decision](https://github.com/sukoyaka-dopeness/e2r-ai-knowledge/blob/main/decisions/application-modularization-and-incremental-extraction.md); this research prescribes no file structure.

## Wiki + Blog + Journal publication

**Human-stated direction:** explore a combined Wiki and Blog site, evoking the relationship between Hatena Keyword and Hatena Diary. Entity pages could be stock-style reference entries; journal or blog writing could provide a flow of entries about Events. People, places, shops, and books mentioned in entries could be identified and revisited, and a reader could follow earlier entries involving the same Entity. Links should rely on stable identifiers rather than display text. An Event and a blog article need not be one-to-one. Event occurrence time, writing time, and publication time must remain separate.

Static site generation is a strong **candidate** for publication, not an adopted pipeline. Publication must account for private local information and assets so that an export does not inadvertently expose them. Article body ownership, selective publication, link lifecycle, and how one article refers to several Events remain open. The existing [Wiki/hosted Dataset](e2r-wiki-portable-hosted-dataset-application.md) and [Personal Journal](personal-journal-planner-and-multi-dataset-workspaces.md) research cover related but distinct hosting, content, diary, and cross-diary questions. This checkpoint records their combined publishing concept; it does not merge the two research tracks or select a content format.

## Mobile and federation

**Human-stated direction:** Journal/Wiki should be usable on a phone for input and reading, making Web or PWA plausible candidates alongside local hosts. Mobile/PC synchronization is a separate design problem from publishing a static site. Linking another person's E2R Wiki is also a desired future direction: discovery, cross-site references, navigation, and federation should preserve each publisher's ownership instead of merging independently owned Entities.

The [Federated E2R Constellation](federated-e2r-constellation.md) and [cross-diary Entity threading](personal-journal-planner-and-multi-dataset-workspaces.md#cross-diary-entity-threading) already explore external references and unresolved identity. This checkpoint does not extend Core Relation across Datasets or adopt an external-reference protocol. Public/private boundaries, identity evidence, permissions, privacy, spam, publication consent, and link staleness remain open. The [PWA/offline result](../../docs/application-suite/e2r-pwa-and-offline-capability-roadmap1-result.md) treats offline capability as application and capability specific; it supplies no mobile sync contract.

## Application landscape and decision gates

The [Application Catalog](../../applications/application-catalog.md) and existing research also include Worldbuilding, Knowledge Base, Family Tree, Citation Graph, Music History, Taxonomy, Gamebook, Dataset Browser, and Dataset Generator. Their suitability for Web, VS Code, or Desktop is an open comparison, as is whether each belongs in a separate application, a specialist view, a template, or a shared capability. Existing Deferred and Idea Hold statuses remain in force. This checkpoint schedules none of them.

Before any architecture, portable contract, or implementation is adopted, Human decisions and bounded evidence are needed for:

- Entity Profile field/template/reference ownership and preservation, including media assets and identity confirmation;
- statement identity and ownership when one view presents another's state, claim, or evaluation;
- the boundary among Perspective ordering, viewpoint, Claim, Source, Evidence, Confidence, Provenance, and actual state change;
- Story Workshop versus generator and Worldbuilding responsibilities, with explicit Human adoption of suggestions;
- OSINT source/evidence workflow and host suitability without assuming VS Code exclusivity;
- article/Event links, content ownership, temporal distinctions, privacy filtering, and publication authority;
- phone editing, offline behavior, storage, multi-client synchronization, and conflict resolution;
- independent Wiki ownership, external references, identity, discovery, permissions, and federation safety; and
- which concepts warrant an application, specialist view, template, or shared capability, and whether any should enter active planning.

These are decision questions, not a proposed sequence of work. No formal application name, priority, host, persistence or synchronization design, federation contract, release, or implementation is authorized here.
