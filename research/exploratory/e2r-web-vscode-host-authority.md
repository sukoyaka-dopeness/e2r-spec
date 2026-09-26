# E2R Web / VS Code Host Authority Research

Checkpoint: `E2R-WEB-VSCODE-HOST-AUTHORITY-RESEARCH1`

Date: 2026-09-10

Status: **EXPLORATORY / FUTURE DIRECTION**

This record studies a possible future relationship between the public Web
surfaces and VS Code surfaces for NarrativeLine and LiaisonScape. It is not an
accepted architecture, implementation plan, extension specification,
deployment commitment, or release authorization.

## Result

The most coherent current direction is:

```text
E2R-SPEC
  = Dataset and interoperability specification authority

Shared NarrativeLine / LiaisonScape application source
  = Product semantics, editing behavior, and presentation implementation authority

Web host
  = public, portable, low-friction Product/reference surface

VS Code host
  = possible future workspace-integrated and advanced-authoring surface
```

The Web surface should remain first-class. A future VS Code surface should
extend access to the same Dataset and Product responsibilities, not replace
the Web surface or make a deployed Web URL the implementation authority.

Product semantics that can remain host-independent should be kept that way.
Browser lifecycle, workspace/document lifecycle, and native host integration
should remain separate responsibilities. The exact package, extension,
Webview, Custom Editor, and process boundaries remain unresolved.

## Why this is a distinct research record

The existing [E2R for VS Code - OSINT Workbench research](e2r-vscode-osint-workbench.md)
examines a broad power-user/local investigation environment, including local
indexes, evidence, AI tools, and large-data processing. The existing [Gamebook
VS Code research note](e2r-gamebook-vscode-extension-research-note1.md)
examines a focused interactive-narrative extension idea.

This record addresses the narrower cross-application question of **hosting and
authority for the existing NarrativeLine and LiaisonScape Products**. It does
not select either adjacent research direction's features or architecture.

## Current repository boundary

The scoped current Product repositories are browser-oriented React/Vite
applications:

- `e2r-narrative-line` exposes `dev`, `build`, `lint`, `test`, and `preview`
  scripts through its Vite application package;
- `e2r-liaison-scape` exposes the same browser-oriented development surface;
- no VS Code extension repository, Custom Editor implementation, or host
  adapter for either Product was found in the current workspace;
- no current `.openai/hosting.json` project surface was found for these
  repositories.

The current code therefore provides evidence for a Web application boundary,
not for an already-existing VS Code integration. Future claims about feature
parity, reuse, or hosting must be tested against the source at that time.

## Authority model

"Official" or "primary" must not be collapsed into one label. The following
authority distinctions are retained for future work:

| Responsibility | Current or proposed authority | Meaning |
|---|---|---|
| E2R Core and Extensions | `e2r-spec` | Interoperable Dataset structure and Extension contracts |
| NarrativeLine / LiaisonScape behavior | shared application source | Editing semantics, validation-facing behavior, presentation, and interaction implementation |
| Public Web delivery | Web build and its hosting/deployment surface | A user-accessible reference/Product instance, not source truth |
| VS Code integration | future extension/host adapter | Workspace/document lifecycle and native workbench integration |
| User Dataset content | the intentionally saved E2R Dataset | Owned content, independent of which host displays it |

The Web build and a VS Code Webview may both be products of the same shared
application implementation authority. Neither rendered surface should become
the semantic source of truth merely because it is easier to inspect or deploy.

The E2R Core remains minimal: Dataset, Entity, Event, and Relation semantics
stay independent of Web UI, VS Code UI, routing, timeline presentation, and
host lifecycle. Existing Core, Extension, Dataset, Handoff, and application
modularization boundaries remain unchanged.

## Responsibility separation

### Shared application responsibilities

Subject to future characterization, the following are good candidates for
host-independent responsibility:

- E2R Dataset interpretation and serialization-facing operations;
- Entity, Event, and Relation editing semantics;
- application validation and diagnostics that are not host-specific;
- NarrativeLine timeline/narrative presentation logic;
- LiaisonScape graph presentation, routing, placement, and selection logic;
- locale semantics and user-facing Product behavior where browser APIs are not
  required;
- derived-versus-owned boundaries and explicit adoption/save semantics.

These responsibilities should be reused or extracted by responsibility, not
by an arbitrary file split or a line-count target. The accepted application
modularization guidance remains the applicable boundary.

### Web host responsibilities

The existing browser Product may own concerns such as:

- local file selection and browser file access;
- download/export and browser save flows;
- `beforeunload` and browser dirty-document warnings;
- URL and `datasetUrl` handoff;
- browser history, navigation, and URL fragments;
- browser-specific focus, pointer, and viewport behavior where required.

These are host services or adapters in the future conceptual model. They are
not reasons to put browser lifecycle semantics into E2R Core or to make a
GitHub Pages deployment the implementation authority.

### VS Code host responsibilities

A future VS Code integration would likely need to own or coordinate:

- workspace file open and resource identity;
- `TextDocument` or `CustomDocument` lifecycle;
- Save and Save As behavior;
- dirty state and close/revert decisions;
- workspace-relative resources and extension configuration;
- Undo/Redo integration with the existing application transaction model;
- native commands, menus, Tree Views, and Problems-panel integration where
  selected later;
- message and lifecycle bridging for a Webview or Custom Editor.

The VS Code extension host may have broad filesystem, network, and process
permissions. Workspace Trust and publisher trust are useful controls but are
not complete privacy or security guarantees. A future integration therefore
needs an explicit permission and disclosure boundary rather than assuming
that a WebView is equivalent to a normal public browser tab.

## Possible hosting forms

Two broad forms are retained as research alternatives.

### Remote Web surface inside VS Code

```text
VS Code
  -> browser-like embedding
  -> hosted Web build
```

This could be a lightweight way to expose an existing public surface. It has
low initial integration cost, but weak workspace file integration, unclear
offline behavior, possible version drift, and a poor Save/dirty lifecycle for
local files. It must not be treated as full VS Code integration without
testing those boundaries.

### Bundled Webview or Custom Editor

```text
VS Code Extension
  -> bundled Webview / Custom Editor
  -> shared NarrativeLine or LiaisonScape UI
  -> extension-host bridge
  -> workspace/document lifecycle
```

This is the stronger candidate for real workspace integration. It adds CSP,
resource URI, message protocol, lifecycle, version coordination, and
extension security work. A Custom Editor may provide a more natural document
boundary than a generic Webview, but this is not selected here.

The two forms are not merely deployment variants: they imply different
authority, persistence, dirty-state, offline, and security contracts.

## Reuse direction

The preferred research direction is **shared application behavior with
host-specific adapters**, rather than two independent reimplementations:

```text
NarrativeLine shared application
  -> Web host adapter
  -> future VS Code host adapter

LiaisonScape shared application
  -> Web host adapter
  -> future VS Code host adapter
```

This is a responsibility hypothesis, not a fixed package layout. Direct
drop-in reuse is not assumed because the current Apps include browser-specific
file, navigation, beforeunload, pointer, and viewport behavior. The first
future implementation step should be characterization of the host-coupled
writers and invariants, not preemptive extraction of all App code.

The existing modularization decision is especially relevant to Coordinate,
Dataset Replacement Safety, and graph pointer/capture state. A future VS Code
host must not split one transaction across the application and extension host
in a way that loses dirty-state, save, pointer, or undo invariants.

## Dataset and interoperability implications

The same `.e2r.json` Dataset may be opened by NarrativeLine, LiaisonScape,
Validator, a future VS Code extension, or another client. That does not imply
identical workflows or identical presentation.

The following boundaries remain:

- the Dataset remains self-contained at the E2R Core level;
- local workspace indexes, caches, source corpora, and analysis jobs are not
  automatically part of the portable Dataset;
- generated graph positions, routes, timeline ordering, and rendering caches
  remain Derived until an explicit operation adopts a suitable Owned value;
- browser URL state and VS Code workspace state remain application/host state;
- unknown Extensions remain subject to existing preservation/ignore guidance;
- a VS Code workspace may curate or export a portable Dataset, but that does
  not create a new Core or silently redefine Dataset identity.

If a future workspace contains a database, indexes, source files, or evidence
outside the exported Dataset, it must define the export and provenance
boundary separately. A workspace is not automatically an E2R Dataset, and a
Dataset is not automatically a workspace database.

## Feature parity and acceptance

Web and VS Code surfaces should not be judged by superficial pixel or feature
parity. The important parity questions are semantic and workflow-oriented:

- do both surfaces interpret the same Dataset and Extensions consistently;
- are save, dirty, revert, and replacement decisions explicit and safe;
- are derived values kept distinct from Owned Dataset content;
- do routing, placement, selection, and editing transactions preserve their
  current invariants;
- can a Dataset move between hosts without host-specific state being silently
  serialized into it;
- are accessibility, keyboard, focus, pointer, and error behaviors adequate
  for each host's users?

The Web surface remains the lower-friction baseline for public reference and
ordinary browser use. A future VS Code surface would need to demonstrate its
additional workspace value rather than become a required dependency for Web
users.

## Open questions

1. Is VS Code intended for power users only, or also for general E2R authors?
2. Should a VS Code integration begin with a command-driven open/view surface,
   a Custom Editor, or a broader workspace model?
3. Which application responsibilities can be shared without importing browser
   lifecycle assumptions into the extension host?
4. How should `datasetUrl`/Handoff semantics map to workspace resources?
5. How should browser dirty state map to `TextDocument` or `CustomDocument`
   dirty state and Save/Save As?
6. How should Undo/Redo map to the current application transaction model?
7. What offline and version-pinning guarantees are required for a bundled
   Webview compared with a remote Web build?
8. Which source, evidence, and workspace paths may the extension access?
9. How are sensitive local sources prevented from entering remote Web content
   or AI/tool calls unintentionally?
10. Which portions of NarrativeLine and LiaisonScape should be extracted only
    when an actual change reason justifies the boundary?
11. What is the minimum useful VS Code value that warrants a separate
    extension repository and release process?

## Recommended next research sequence

No implementation is started by this record. If the direction is later
reopened, the bounded order should be:

1. characterize current Web behavior and host-coupled state writers in each
   Product;
2. define a narrow host-service interface for one workflow, preferably a
   read/open or save boundary rather than graph pointer state;
3. compare a remote WebView experiment with a bundled Webview/Custom Editor
   only for that bounded workflow;
4. test Dataset identity, dirty/save, Handoff, error, and offline/version
   behavior;
5. decide whether a VS Code-specific Product commitment is warranted.

Graph gestures, pointer capture, manual route/label ownership, and broad
workspace storage should not be the first extraction or prototype boundary.

## Non-goals and preserved state

This checkpoint does not:

- create a VS Code extension or repository;
- select Webview, Custom Editor, Electron, Tauri, or another desktop framework;
- select a database, local engine, AI provider, or extension API contract;
- change E2R Core, an Extension schema, Dataset identity, Handoff, or storage
  semantics;
- replace or deprecate the NarrativeLine or LiaisonScape Web surfaces;
- change Product source, tests, build configuration, or deployment;
- start Browser Evidence, Human Review, a governed Fresh lineage, or a release.

The current Web Product and shared application source remain the implementation
reference. This note is research, not a new authority layer.

## Research disposition

```text
Web public Product surface            = PRESERVE / FIRST-CLASS
Shared Product semantics              = HOST-INDEPENDENT WHERE PRACTICAL
VS Code integration                   = EXPLORATORY / NOT STARTED
Remote Web embedding                  = OPEN ALTERNATIVE
Bundled Webview / Custom Editor       = OPEN ALTERNATIVE
Accepted architecture                 = NOT ADOPTED
Implementation                        = NOT STARTED
Release / deployment / publication    = NOT PERFORMED
ai-knowledge promotion                = NOT PERFORMED
```

The reusable principle remains repository-scoped exploratory research:
different hosts may provide different workflows over the same interoperable
Dataset, while Product semantics and Owned-versus-Derived boundaries remain
explicit. Promotion to workspace-wide Accepted knowledge requires independent
confirmation or an explicit project decision.
