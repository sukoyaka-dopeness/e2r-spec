# E2R Hub Public Entry Point — Milestone 1 Information Architecture

Status: accepted design checkpoint; non-normative application guidance
Date: 2026-08-22

## Purpose

This document defines the scope and information architecture for E2R Hub /
Portal Public Entry Point Milestone 1. It establishes what the Hub is for,
which audiences and first-use paths it serves, and where applications,
samples, documentation, and Dataset Handoff belong.

Milestone 1 is a design checkpoint. It does not implement or authorize a Hub
UI change, Dataset Handoff implementation, Dataset hosting, account system,
analytics, or public-release completion.

## Current ecosystem baseline

The accepted baseline for this checkpoint is:

- NarrativeLine Dataset Replacement Safety is accepted.
- NarrativeLine Dataset Handoff v0 is COMPLETE.
- LiaisonScape Dataset Replacement Safety is accepted.
- LiaisonScape Dataset Handoff v0 is COMPLETE / manually accepted.
- NarrativeLine and LiaisonScape User Guides describe the current Handoff
  semantics in English and Japanese.
- Home is the canonical primary Dataset acquisition and replacement entry
  point inside an application.
- Timeline, Graph, and Workspace are the primary viewing and editing locations
  for the current Dataset.
- Direct Hub handoff remains a future workstream.
- Public release as a whole remains incomplete.

The current Handoff v0 source of truth is:

```text
#datasetUrl=<percent-encoded absolute HTTPS URL>
```

Older `?sample=` or `?dataset=` concepts are not current Handoff v0 syntax and
must not be used as current Hub behavior.

## Current Hub implementation audit

The current `e2r-hub` implementation is a lightweight React/Vite landing
surface. Its repository README identifies the expected GitHub Pages URL as:

```text
https://sukoyaka-dopeness.github.io/e2r-hub/
```

The current source provides:

- a landing hero introducing the E2R application ecosystem;
- English and Japanese locale switching in the page header;
- application choice cards for NarrativeLine and LiaisonScape;
- links to the current NarrativeLine and LiaisonScape GitHub Pages sites;
- a sample section with Berlin Wall, Apollo 11, Lighthouse Restoration, Ashen
  Crown, and Titanic sample cards;
- direct JSON-source links for the samples;
- an E2R explanation section;
- an E2R Specification repository link;
- an E2R Validator repository link and a statement that Validator is currently
  a CLI and JavaScript library rather than a Hub browser tool;
- a credits dialog; and
- responsive layout rules that collapse the application and sample grids for
  narrow screens.

The current source does not provide:

- direct User Guide links from application cards;
- generated Dataset Handoff links;
- a Hub-owned Dataset hosting service;
- a sample registry or sample identity system;
- a browser Validator tool;
- account, login, or required identity flows; or
- visible analytics or tracking integration.

Deployment is prepared through a GitHub Pages workflow that runs lint and
build, uploads `dist`, and deploys on pushes to `main`. Deployment preparation
does not by itself establish that a public release is complete.

## Hub responsibility

The Hub is the E2R ecosystem's public discovery and distribution surface. Its
Milestone 1 responsibilities are:

- introduce E2R to people who do not know it yet;
- help users choose an application by goal rather than by implementation
  details;
- explain each application's purpose and current maturity;
- provide entry points to specification and application documentation;
- make compatible sample Datasets discoverable;
- help users move from discovery to a compatible application; and
- define the future role of the Hub as a Dataset Handoff producer without
  claiming that Handoff generation is implemented now.

The Hub is not:

- the owner of E2R Core semantics;
- a replacement for `e2r-spec`;
- a mandatory Dataset registry;
- a Dataset identity service;
- a Dataset hosting requirement;
- a merge or composition engine;
- a cloud workspace;
- a shared application shell;
- a persistence layer for current unexported application state; or
- an account system required to use E2R.

The Hub is an application and distribution surface, not a Core object or an
E2R Extension.

## Primary audiences

### People discovering E2R

They need to understand what E2R is, what it can do, and which application is
the best first step.

### People exploring a Dataset

They need a short path to a Timeline application, a relationship-map
application, or Dataset validation.

### Dataset authors and editors

They need to try a sample, open a compatible application, and understand how
to use their own Dataset without assuming that the Hub stores it for them.

### Developers and specification readers

They need direct access to the E2R Specification, Validator, repositories,
implementation status, and explicit maturity boundaries.

Milestone 1 keeps these audiences within one public entry surface. It does not
introduce separate portals, accounts, or audience-specific products.

## First-use journey

The recommended first-use journey is:

```text
learn what E2R is
    -> choose what to do
    -> select an application or try a sample
    -> open the Dataset in a compatible application
    -> edit or inspect it there
    -> export from the application
    -> return to documentation or another application
```

The first decision should be user-goal-oriented:

- view and edit a timeline -> NarrativeLine;
- view and edit a relationship diagram -> LiaisonScape;
- validate Dataset structure and compatibility -> Validator;
- understand the interoperable model -> E2R Specification.

Milestone 1 defines this journey only. It does not implement sample opening,
application routing, or cross-application transfer.

## Application positioning

| Surface | User value | Current role |
| --- | --- | --- |
| NarrativeLine | View and edit Events over time | Timeline editor; Event-focused |
| LiaisonScape | View and edit connections between Entities | Relationship explorer/editor; Entity-first |
| Validator | Check Dataset structure and compatibility | Validation tool; not an editor |
| E2R Specification | Understand the interoperable data model | Specification and documentation |
| E2R Hub | Discover applications, samples, and documentation | Public entry point and distribution surface |

The Hub must not describe NarrativeLine as a graph editor or LiaisonScape as a
timeline editor merely because both applications can consume compatible E2R
Datasets.

## Dataset acquisition and Handoff placement

The accepted division of responsibility is:

```text
Application Home
    = primary Dataset acquisition and replacement entry point

Hub
    = Dataset discovery and future Handoff-link producer
```

Dataset Handoff v0 remains an application startup instruction. Its current
semantics are public absolute HTTPS acquisition, credentials omission,
startup-only behavior, explicit failure, and reuse of the receiving
application's parse, validation, and replacement-safety pipeline.

The Hub may eventually produce a link that targets an application with:

```text
#datasetUrl=<percent-encoded absolute HTTPS URL>
```

That future capability does not make the Hub a Dataset host, does not create a
central registry requirement, and does not move replacement confirmation out
of the receiving application. Milestone 1 does not claim that Handoff-link
generation or direct Hub handoff is implemented.

The Hub must not use `datasetUrl` as Dataset identity, revision, provenance,
current edit state, or view state. It must not silently transfer unexported
application work between applications.

## Sample strategy

Samples are discovery and onboarding material, not a new Dataset identity
system. Milestone 1 should make the purpose of each sample clear and should
prefer samples that demonstrate the shared E2R model across applications.

The sample strategy is:

- keep sample Datasets self-contained and versioned at their source;
- distinguish a sample description from the Dataset JSON source;
- identify whether a sample is useful primarily in a Timeline, a relationship
  diagram, or both;
- prefer at least one cross-application sample for interoperability discovery;
- link to the compatible application and documentation where those paths are
  available; and
- avoid silently creating Hub-specific Dataset identity or registry semantics.

The current Hub sample set includes the Berlin Wall, Apollo 11, Lighthouse
Restoration, Ashen Crown, and Titanic examples. Their current links are source
or application links, not generated Handoff links.

Milestone 1 leaves open:

- whether a dedicated sample gallery is needed beyond the current landing
  section;
- the first-use ordering of cross-application and application-specific
  samples;
- whether a sample should expose one or more application entry links; and
- how a future public Handoff fixture should be hosted and tested.

## Minimal information architecture

The smallest useful Milestone 1 information architecture is:

```text
E2R Hub
├── Hero / E2R introduction
├── What do you want to do?
│   ├── NarrativeLine
│   └── LiaisonScape
├── Try a sample
│   └── Sample Dataset cards
├── What is E2R?
├── Tools and resources
│   ├── E2R Validator
│   └── E2R Specification
└── Credits / project links
```

The primary action is choosing an application or trying a sample. The
introduction should appear before technical specification detail. A separate
large catalog, registry, login, dashboard, or Hub workspace is outside
Milestone 1.

Application cards should expose, when available:

- application name;
- one-line user value;
- primary task;
- current maturity wording;
- Open Application action;
- User Guide action;
- repository action; and
- supported Dataset role.

Adding User Guide links is an information-architecture requirement for future
Hub implementation, not a claim about the current source.

## Maturity wording

Hub copy must distinguish capability from project-wide completion. The
recommended vocabulary is:

- **Available now** — the linked capability is currently usable;
- **Experimental** — a bounded implementation or evidence checkpoint exists;
- **Research** — a non-normative question or future direction;
- **Planned / Future** — an accepted direction not yet implemented; and
- **Accepted** — a bounded checkpoint has been manually or formally accepted.

The Hub must not describe the whole E2R ecosystem as complete merely because
Dataset Handoff v0 is complete. It must not describe Direct Hub handoff,
private Handoff, multi-Dataset support, or public release as available unless
separate evidence accepts those capabilities.

## Japanese and English information architecture

Milestone 1 supports English and Japanese entry paths. The information
hierarchy should remain equivalent across locales even when sentence structure
differs.

Use established user-facing vocabulary:

| English | Japanese |
| --- | --- |
| Dataset | データセット |
| Event | できごと |
| Entity | エンティティ |
| Relation | つながり |
| Timeline | 年表 |
| Relationship diagram | 相関図 |

Product names such as NarrativeLine, LiaisonScape, E2R Hub, and E2R Validator
remain proper names. Actual application UI labels should be represented as
they exist in the linked application.

## Privacy, hosting, and mobile boundary

The first public Hub scope is identity-light:

- no account is required;
- no login is required;
- the Hub should not collect personal information merely to provide entry;
- the Hub does not need to host Datasets;
- public Dataset Handoff may target a separately hosted public HTTPS Dataset;
- private or authenticated Handoff remains outside v0; and
- analytics or tracking must not be assumed without explicit implementation
  evidence and a separate privacy decision.

The Hub should be usable on mobile for discovering, reading, choosing an
application, and opening a sample or application. This does not imply that
NarrativeLine or LiaisonScape editing workflows are equally optimized for
mobile. Their application-specific guidance remains authoritative.

## Milestone 2 boundary

Milestone 2 is the Static E2R Landing Page implementation checkpoint. Its
minimum scope may include:

- aligning the current landing structure with this IA;
- E2R introduction copy;
- application catalog cards;
- documentation links;
- basic responsive behavior; and
- equivalent EN/JA structure.

Milestone 2 must not silently expand into:

- Hub direct Handoff implementation;
- Dataset hosting;
- a sample registry or identity service;
- account or login flows;
- a browser Validator implementation;
- multi-Dataset merge or workspace behavior; or
- application runtime changes.

## Explicit non-goals

This checkpoint does not authorize or claim:

- E2R Core or Extension changes;
- Dataset schema changes;
- Dataset identity, revision, content hash, provenance, or lineage;
- private or authenticated Dataset Handoff;
- runtime fragment live-switching;
- Hub direct Handoff completion;
- Dataset hosting by the Hub;
- SNS auto-posting;
- account, login, or required user identity;
- analytics or tracking;
- multi-Dataset viewing, merge, or comparison;
- transfer of current unexported application edits;
- a shared application UI shell;
- a browser Validator tool; or
- public-release completion.

## Cross-document contradiction audit

This design is consistent with:

- `docs/dataset-handoff-v0-design.md`;
- `docs/dataset-acquisition-entry-point-alignment.md`;
- `docs/narrativeline-dataset-handoff-v0-formal-completion-acceptance.md`;
- `docs/dataset-handoff-v0-liaison-scape-implementation-result.md`;
- the current NarrativeLine and LiaisonScape User Guides; and
- the current Hub implementation and Pages deployment workflow.

In particular, it does not promote Direct Hub handoff to complete, change the
current `#datasetUrl=` syntax, remove the Home primary acquisition model,
introduce private Dataset support, or assign Core / Extension ownership to the
Hub.

## Decision status

E2R Hub / Portal Public Entry Point Milestone 1 — Scope & Information
Architecture is COMPLETE as a bounded, non-normative application design
checkpoint.

Milestone 2 implementation remains a separate checkpoint. The current Hub
repository implementation is evidence for the audit above, not a source of
authorization to modify the Hub in this task.

## Knowledge Candidate Check

Knowledge Candidate: NONE.

The responsibility boundary and information-architecture guidance reuse the
accepted roadmap, application-boundary guidance, Dataset Handoff design, and
existing User Guide writing guidance. No new reusable workspace rule is
needed for this design checkpoint.
