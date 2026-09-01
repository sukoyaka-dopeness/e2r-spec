# E2R for VS Code — OSINT Workbench Exploration

Status: **Exploratory / Future Direction**
Date: 2026-09-02

This document records a research direction only. It is not an accepted
implementation plan, product commitment, platform decision, schema proposal,
or authorization to build a VS Code extension or a desktop application.

## Research question

Could a future **E2R for VS Code** serve as a practical power-user, research,
or OSINT workspace between lightweight browser applications and a possible
standalone E2R Desktop application?

The motivation is not to replace browser clients. Browser applications remain
valuable for portable Dataset opening, focused editing and viewing, sharing,
Handoff, and low-friction accountless/local use. A useful stratification
hypothesis is:

```text
E2R Browser Apps
  = portable / shareable / focused analysis surfaces

E2R for VS Code
  = power-user / research / OSINT workspace

Future E2R Desktop
  = possible standalone desktop-class environment
```

The third line is only a design-space possibility; it is not a roadmap promise.

## Why a workbench is worth exploring

Large investigations may involve many Entities, Events, and Relations;
substantial PDF, HTML, CSV, image, and note corpora; full-text indexing;
cross-Dataset comparison; graph-neighborhood and timeline queries; long-running
analysis; and offline or private source material. A browser shell alone does
not solve those scaling problems.

VS Code is a plausible host because its extension model can contribute commands,
Tree Views, custom editors, WebViews, workspace/file access, and integration
with local processes. VS Code's Extension Host configurations include local,
web, and remote hosts, so the eventual execution boundary would need to be
chosen deliberately rather than assumed. These are capability observations,
not adoption decisions. See the [VS Code Extension API](https://code.visualstudio.com/api),
[Extension Host](https://code.visualstudio.com/api/advanced-topics/extension-host),
[Workbench extension points](https://code.visualstudio.com/api/extension-capabilities/extending-workbench),
and [Tree View API](https://code.visualstudio.com/api/extension-guides/tree-view).

## Possible workspace shape

An investigation might conceptually contain a local source corpus, working
notes, evidence, and derived indexes alongside an eventual portable export:

```text
investigation/
├─ .e2r/
│  ├─ workspace.db
│  └─ config
├─ sources/
├─ evidence/
├─ notes/
└─ exports/
   └─ result.e2r.json
```

This is a design-space example only. `.e2r/`, SQLite, these names, and this
directory layout are not adopted. In particular, a large internal OSINT
workspace need not be one monolithic portable `.e2r.json` file:

```text
large local investigation workspace
        ↓ select / curate / publish
portable self-contained E2R Dataset
        ↓
NarrativeLine / LiaisonScape / other clients
```

The existing rule that an E2R Dataset is self-contained remains unchanged. An
open architectural question is whether a future workspace may contain storage,
indexes, and source resources that are not identical to the exported Dataset,
while still producing standards-conforming self-contained Dataset artifacts.

## Conceptual responsibility model

```text
VS Code
│
├─ E2R Extension UI
│   ├─ Tree Views
│   ├─ Commands
│   ├─ Custom Editor / WebView
│   ├─ Timeline
│   ├─ Graph
│   └─ Evidence
│
├─ Extension Host
│   └─ E2R workspace service
│
└─ Local E2R Engine
    ├─ storage
    ├─ indexing
    ├─ search
    ├─ graph queries
    ├─ extraction
    └─ analysis jobs
```

This is conceptual decomposition, not a selected process model, RPC boundary,
database, language, or extension API. A custom editor could eventually be a
natural place to render a Dataset-oriented surface, and a Tree View could
expose workspace objects or query results. WebViews communicate with the
extension through messages and should be used only where native workbench APIs
are insufficient; the [Custom Editor API](https://code.visualstudio.com/api/extension-guides/custom-editors)
and [Webview guidance](https://code.visualstudio.com/api/ux-guidelines/webviews)
make that boundary explicit.

Current NarrativeLine and LiaisonScape React/Vite work might later provide
conceptual or selectively reusable presentation material for WebView surfaces,
shared UI packages, or interaction references. Direct drop-in compatibility is
not assumed. NarrativeLine and LiaisonScape remain independent browser
applications and are not converted into extension-only products.

## Large-data strategy

Wrapping the current browser applications in Electron, a WebView, or another
desktop shell would not by itself solve the large-Dataset problem. A pattern
such as “load huge JSON → put everything in React state → render/process
everything” remains a bottleneck regardless of the outer shell.

A future local engine may instead need indexed or local storage, paged and
windowed queries, graph-neighborhood queries, timeline ranges, background
workers or processes, and partial materialization into UI surfaces. No storage
engine, query language, process model, or database is selected.

The same separation may later help the Initial Placement work: candidate
generation, assignment, settling, routing, or other heavy graph analysis could
run outside the presentation thread/process. This note does not alter the
current Initial Placement semantics, priority, or selected checkpoint.

## AI and agent opportunity

An OSINT workbench is also a possible boundary for AI-assisted investigation:

```text
AI / Agent
    ↓
bounded E2R tool surface
    ↓
deterministic workspace operations
    ↓
E2R structured data and evidence references
```

Possible bounded operations include searching Entities, querying Events,
inspecting Relations, retrieving source evidence, comparing objects, proposing
new objects, and opening a Timeline or Graph neighborhood. These are examples;
no AI API, model, provider, agent protocol, or extension integration is
selected.

The likely safety boundary is:

```text
source material
    ↓
AI extraction / analysis proposal
    ↓
human review
    ↓
accepted E2R structure
```

Terms such as `proposed`, `reviewed`, `accepted`, `rejected`, and
`source-backed` may be useful workflow concepts, but they are not added to the
Core or schema by this research. AI must not silently become the ground truth.

For large workspaces, the AI should not need the entire corpus in model
context. A possible pattern is request → tool-selected bounded query → local
engine retrieval → reasoning over the returned evidence. This could reduce
data movement and keep queries reproducible, but provider and disclosure
behavior remain open.

## Provenance and evidence

Traceability is a central OSINT requirement. A structured assertion such as
`Relation A → B` should ideally remain connected to evidence such as a PDF
page, HTML article, interview note, fragment, or source revision.

Open questions include whether provenance belongs in Core, an Extension, or
workspace-only metadata; how fine-grained citations should be; whether page,
range, or fragment addressing is needed; how source integrity or hashes are
handled; and how evidence revisions affect derived assertions. This checkpoint
does not answer those questions and does not adopt a provenance schema.

## Local and private OSINT boundary

A local workbench could be useful for confidential source corpora, offline
investigation, files that cannot be uploaded, local-only indexing, and
controlled disclosure boundaries. This is a potential workflow benefit, not a
privacy guarantee. VS Code, extensions, local processes, and AI providers may
have different permissions and data paths. The [extension runtime security
guidance](https://code.visualstudio.com/docs/configure/extensions/extension-runtime-security)
notes that an extension host can have the same permissions as VS Code itself,
including file access, network requests, external processes, and workspace
settings. [Workspace Trust](https://code.visualstudio.com/docs/editing/workspaces/workspace-trust)
helps control execution in untrusted folders, but it does not by itself
prevent a malicious extension from acting. Permission scope, network policy,
extension trust, and AI disclosure boundaries therefore remain open design
work.

## Relation to Personal Storage and federation

The existing [E2R-managed Personal Storage](e2r-managed-personal-storage.md)
research asks where and how a user's E2R resources may persist. This workbench
research asks how a desktop-class local investigation environment might operate
on files, indexes, evidence, and derived work. They may intersect later, but
neither determines the other.

Federated E2R research likewise remains separate. A local workbench may consume
or prepare publishable artifacts, but it does not imply a federation protocol,
cloud backend, authentication requirement, or cross-Dataset Core relation.

## Possible later Desktop relationship

VS Code could be an architecture/prototyping path for responsibilities that a
future standalone Desktop client might share:

```text
E2R Local Engine
      ↑       ↑
VS Code       Desktop
```

Possible shared responsibilities include local storage, indexing, query
execution, extraction, provenance handling, background jobs, and graph/timeline
services. This does not pre-adopt a shared package architecture. Standalone
native shells, Electron, Tauri, and other local clients remain broader design
space only; no framework comparison or selection is made here.

## Limitations and risks

- VS Code requires installation and is primarily developer-oriented.
- It may be unsuitable for general users or simple viewing/sharing workflows.
- WebViews remain browser-like presentation surfaces and add message/lifecycle
  boundaries; custom editors also need careful document and dirty-state handling.
- Extension-host constraints and VS Code API coupling can limit portability.
- Workspace trust and publisher trust reduce some risk but are not complete
  privacy or security guarantees.
- Performance still depends on the local engine and query architecture.
- AI availability, behavior, and data boundaries vary by user, setup, and
  provider.
- Extension distribution and marketplace review are separate concerns.
- A local-first design still needs explicit controls for filesystem scope,
  network access, subprocesses, sensitive exports, and evidence disclosure.

## Open questions

1. Is VS Code an end-user product or only a power-user/research client?
2. What is the boundary between a portable E2R Dataset and a large local
   investigation workspace?
3. What storage engine or model is appropriate?
4. How are huge graphs and time ranges queried incrementally?
5. What provenance model is needed for OSINT?
6. How are AI proposals reviewed and committed?
7. What tools or API may an AI agent invoke?
8. How are filesystem permissions and scope controlled?
9. How is sensitive data prevented from leaving local boundaries unintentionally?
10. Can one local engine later support both a VS Code extension and a
    standalone Desktop client?
11. Which portions of NarrativeLine and LiaisonScape UI can be reused?
12. What belongs in the E2R specification versus one client implementation?
13. How are workspace revisions and history handled?
14. How are evidence files packaged or referenced when exporting a portable
    Dataset?
15. What performance scale actually requires leaving the current browser-only
    architecture?

## Non-goals and preserved contracts

This research does not authorize a VS Code extension, E2R Desktop, Electron or
Tauri selection, database or AI provider selection, VS Code AI API selection,
schema or provenance adoption, massive Dataset-format changes, browser-app
replacement, authentication, cloud backend, release, deployment, or
publication.

The E2R Core, Extension model, Handoff, Dataset semantics, and accountless/local
workflow remain unchanged. Managed Personal Storage remains separate. No cloud
backend or authentication requirement is introduced. The current LiaisonScape
Initial Placement sequence and selected checkpoint remain unchanged.

## Research status and candidate principles

Status remains **EXPLORATORY / FUTURE DIRECTION**, not Accepted Architecture or
Implementation Ready.

Knowledge Candidate: **YES — EXPLORATORY HYPOTHESIS**. Potential reusable
principles are:

- a large investigative workspace and a portable interchange artifact can be
  separate responsibilities;
- AI can operate through bounded deterministic tools rather than requiring an
  entire large workspace in context;
- AI extraction should remain proposal- and evidence-driven rather than become
  authoritative structured data silently; and
- a desktop-class client can reuse a web presentation layer while moving
  storage, indexing, and analysis into a local engine.

These principles are not promoted to `ai-knowledge` by this checkpoint.
