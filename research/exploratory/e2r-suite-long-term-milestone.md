# E2R Suite - Long-term Multi-application Ecosystem

Status: **EXPLORATORY / DISTANT MILESTONE**
Roadmap state: **LONG-TERM / NOT ACTIVE / NOT SCHEDULED**
Target version: none
Target date: none

This record explores a possible long-term E2R ecosystem milestone. It is not
an accepted architecture, implementation-ready design, active roadmap item,
committed product plan, release blocker, or authorization to build a Suite
shell or another application.

## Research question and core idea

Could E2R eventually operate as a shared Entity/Event/Relation information
model plus multiple specialized interoperable applications, rather than as one
large application containing every analysis and editing capability?

The central hypothesis is:

```text
shared E2R information model
        +
specialized interoperable applications
```

Each application could own a focused analysis, editing, or presentation
responsibility while exchanging accepted E2R contracts. This is a design-space
hypothesis only. It does not adopt a normative architecture or require any
particular packaging, repository, process, deployment, or storage model.

## Existing applications as early evidence

The current applications are useful early examples of focused E2R clients:

- NarrativeLine is a temporal and Event-oriented surface.
- LiaisonScape is an Entity/Relation graph-oriented surface.
- Hub is the current public entry and discovery surface.

These descriptions do not redefine their current responsibilities, change the
Hub roadmap, or imply that any application must expose every E2R object type.
They only provide evidence that more than one focused client can operate over
related E2R information.

## Suite does not mean monolith

"E2R Suite" means coordinated interoperability, not necessarily one
executable. It does not require:

- one repository;
- one UI;
- one process;
- one deployment;
- one storage backend; or
- one mandatory installation for every user.

Possible participants include browser applications, VS Code workbench
surfaces, future standalone Desktop clients, local tools, and third-party
E2R-compatible applications. These are possible forms, not product
commitments.

## Illustrative future application categories

The following categories explain the breadth of the design space only. They do
not establish product names or promise that each surface will exist:

1. Timeline and narrative analysis;
2. graph and relationship analysis;
3. evidence, source, and provenance investigation;
4. geographic and map analysis;
5. search and query;
6. reporting and publication;
7. multidimensional analytical projection;
8. large-workspace management;
9. AI/agent assistance; and
10. specialized domain applications.

## Multidimensional analysis example

A future analysis surface might generalize a two-axis quadrant model into
three independent analytical axes and eight octants when a use case genuinely
has three meaningful dimensions. This illustrates why a specialized analysis
surface might be useful; it is not an accepted E2R visualization model.

This record does not define axis semantics, coordinates, a schema, a 3D
implementation, WebGL, or a product name.

## Document and PDF integration example

Human-readable documents and machine-readable E2R structures might eventually
travel together. Future research could examine PDF metadata, embedded
attachments, E2R Dataset attachments or exports, and provenance references
from E2R objects to document locations.

No PDF interoperability standard, Dataset-format change, or PDF mutation
behavior is selected here. Signed or original evidence documents must not be
silently modified. Document packaging, evidence integrity, and provenance
remain separate research responsibilities.

## Portable Dataset model

For portable and smaller workflows, the Suite may continue to use self-
contained E2R Dataset artifacts:

```text
Dataset
  -> NarrativeLine
  -> Handoff
  -> LiaisonScape
  -> Handoff
  -> another E2R-compatible application
```

This does not change the Core. Entity represents existence, Event represents
occurrence, Relation represents a directed connection, and Relations do not
target Relations. Presentation, application behavior, and transient view
state remain outside the Core. Applications may use extensions and local
state according to their current responsibilities.

## Large Workspace possibility

For large investigations, a future workspace could conceptually contain
sources, notes, indexes, background jobs, and query services while exposing
bounded materializations to specialized surfaces:

```text
Large E2R Workspace
        -> storage / indexes / sources / jobs / queries
        -> Timeline, Graph, Map, Evidence, and other surfaces
```

This is explicitly separate from the portable Dataset artifact. A large
workspace might have a different physical representation while still
producing self-contained Dataset exports. No database, local engine, service
architecture, RPC, workspace schema, or synchronization protocol is selected.

The accepted workspace modularization decision applies if implementation is
ever considered: use responsibility-based, incremental extraction and change
isolation, without prescribing a fixed file layout or forcing premature common
abstractions. Existing applications must not be rewritten wholesale for this
milestone.

## Data ownership question

In a large-workspace Suite, having each specialized application own a complete
independent copy of the same huge state may be impractical. One conceptual
alternative is:

```text
shared workspace authority
        -> bounded query / materialization
        -> specialized application surface
```

This is a hypothesis, not a decision. Current browser applications may keep
their existing in-memory Dataset behavior. Workspace authority, caching,
concurrency, revisions, recovery, and write ownership require independent
research.

## Future context handoff and cross-app selection

Current Handoff is a useful foundation. A richer future context transfer might
carry, conceptually:

```text
Dataset or workspace reference
+ selected Entity/Event/Relation
+ requested surface
+ optional filter, time range, graph subset, or context
```

Examples include opening a selected Entity's evidence in an Evidence surface,
or opening a selected Event from LiaisonScape in NarrativeLine's temporal
context. This is recorded as a **FUTURE HANDOFF / CONTEXT INTEROP QUESTION**.

Open design alternatives include explicit one-shot Handoff versus live shared
state, stable IDs, session ownership, back/forward behavior, stale selections,
capability negotiation, and user-visible recovery. The current Handoff
contract is not changed.

The same question applies to cross-app selections such as selected objects,
time ranges, graph subsets, evidence sources, and filters. No solution is
selected; hidden shared state is not assumed safe.

## Capability-based application model

A future Suite shell or Hub-like surface might inspect declared capabilities,
conceptually such as:

```text
can-view-events
can-edit-events
can-view-relations
can-edit-relations
can-view-evidence
can-query-workspace
```

Capability discovery could help a launcher route a user intent to an
appropriate application. This record does not define a capability schema,
discovery protocol, application manifest, or Hub redesign.

## Third-party applications

An E2R ecosystem might eventually include official applications and external
E2R-compatible applications. This could allow domain-specific tools to
participate without being merged into one official monolith. Maritime
analysis, genealogy, academic history, incident analysis, investigative
journalism, and specialized network analysis are examples only.

This does not claim an extension marketplace, certification program, or
compatibility guarantee. External participation would require later evidence
about stable contracts, versioning, provenance, licensing, security, and
support boundaries.

## Suite shell question

It remains open whether E2R eventually needs a Suite shell. Possible hosts
include future Hub evolution, a VS Code Workbench, a standalone Desktop shell,
or no unified shell at all. Current Hub remains its current product and is not
relabeled as a Suite Launcher.

## Browser, VS Code, and Desktop roles

Browser applications remain first-class participants because they are
portable, accessible, shareable, focused, and low-friction. A Suite milestone
must not imply browser deprecation.

The existing [VS Code OSINT Workbench research](e2r-vscode-osint-workbench.md)
describes VS Code as one possible power-user, research, or OSINT environment.
It may eventually host several specialized E2R editors or views, but E2R
Suite is broader than a VS Code extension and VS Code is not selected as the
universal shell.

A standalone Desktop environment is another possible future host for shared or
overlapping workspace services and specialized surfaces. Electron, Tauri,
Rust, a Node backend, and a shared engine architecture are not selected.

## AI and agent role

A possible Suite-wide pattern is:

```text
AI / Agent
    -> bounded E2R capabilities and tools
    -> specialized apps and workspace services
```

Potential bounded operations include querying a Timeline or graph neighborhood,
locating evidence, proposing an Entity/Event/Relation, requesting another
surface, and assembling report context. Human review and provenance remain
important when AI proposes structured facts. AI must not silently become the
ground truth.

No AI schema, API, provider, agent protocol, or runtime integration is
selected.

## Conceptual interoperability layers

The following is a non-normative decomposition of responsibilities:

| Layer | Conceptual responsibility |
|---|---|
| L0 | E2R Core data model |
| L1 | Extensions |
| L2 | Portable Dataset |
| L3 | Handoff and application context |
| L4 | Future workspace/query layer |
| L5 | Specialized application capabilities |
| L6 | Possible Suite shell/orchestration |

These layers do not assign specification status, schemas, ownership, or
implementation boundaries.

## Separation of responsibilities

The long-term value of the Suite idea depends on keeping distinct:

```text
data model
    / storage
    / analysis application
    / presentation
    / orchestration
```

NarrativeLine should not need LiaisonScape graph code merely to interoperate,
and LiaisonScape should not need a future Evidence viewer implementation.
Shared contracts should be explicit. Application modularization should remain
incremental and responsibility-based rather than becoming a forced universal
runtime.

## Possible milestone characteristics

The milestone describes an eventual capability state, not a single deliverable
or implementation checklist. Non-binding characteristics could include:

1. multiple specialized E2R applications exist;
2. applications share stable E2R object identity and semantics;
3. users can move meaningful working context between applications;
4. portable Dataset interoperability remains intact;
5. large-workspace use, if introduced, does not destroy portable export;
6. applications do not need to become one monolith;
7. compatible analysis surfaces can be added without redesigning Core for each
   application;
8. provenance and user intent survive cross-surface workflows where required;
9. Browser clients remain valid participants; and
10. desktop-class clients may participate without becoming mandatory.

Possible summary wording, still exploratory:

> E2R can operate as an interoperable suite of specialized applications over
> shared portable Datasets and, where appropriate, larger workspace contexts,
> allowing users to move structured Entity/Event/Relation analysis between
> focused temporal, relational, evidentiary, spatial, reporting, and other
> analysis surfaces without forcing all capabilities into one monolithic app.

This wording does not promise that all listed surfaces will exist.

## Relation to current work

Current work continues independently. The live roadmap remains authoritative;
the current selected LiaisonScape Initial Placement checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-EQUIVARIANCE-FOLLOWUP1`.
The supplied research request referred to the already-completed Seam 1
checkpoint, so this record intentionally does not replace, precede, or
resequence the live checkpoint. The Suite milestone does not affect release
priority, Initial Placement sequencing, or LiaisonScape implementation.

## Relation to VS Code OSINT research

VS Code OSINT Workbench is one possible future environment inside the broader
Suite design space. The relationship is complementary:

- VS Code research asks how a power-user/local investigation workbench might
  operate on files, indexes, evidence, and derived work.
- Suite research asks how multiple specialized clients and workspaces might
  interoperate around E2R information.

E2R Suite is not a VS Code extension, and the VS Code record remains
exploratory. No edit to that record is required here.

## Relation to Personal Storage

The existing [E2R-managed Personal Storage research](e2r-managed-personal-storage.md)
asks where and how user-owned E2R resources persist, including private
working copies, publication, identity, and provider boundaries. Suite research
asks how multiple specialized applications may interoperate around E2R
information. They may intersect, but neither determines the other.

## Relation to Federated E2R Constellation

The existing [Federated E2R Constellation research](federated-e2r-constellation.md)
primarily studies independently owned published fragments, External Relations,
discovery, manifest hopping, and distributed presentation. Suite research
primarily studies application/client interoperability and responsibility
composition. A Personal E2R Space or Suite launcher may connect the two later,
but neither concept is a substitute for the other.

No terminology conflict was found after reviewing the live constellation
record. The terms describe adjacent but distinct scopes; their relationship
remains exploratory.

## Non-goals and explicit non-decisions

This record does not authorize or select:

- new E2R repositories;
- Suite shell implementation;
- Hub redesign or relabeling;
- a VS Code extension;
- a Desktop application;
- an Octant/3D or Map application;
- an Evidence application;
- PDF integration;
- a database or local engine;
- shared live runtime state;
- live cross-app synchronization;
- a new Handoff schema;
- a capability schema;
- an AI API or provider;
- a plugin marketplace;
- Core or Extension changes;
- Dataset format changes; or
- a release milestone, target version, or schedule.

## Risks

1. Scope explosion could turn a distant idea into many unbounded projects.
2. A monolith could emerge accidentally through a universal shell or runtime.
3. Too many applications could create inconsistent user experience.
4. A premature common abstraction could freeze responsibilities before they
   are understood.
5. Handoff and context semantics could become unnecessarily complex.
6. Shared-state synchronization could create stale, conflicting, or unsafe
   edits.
7. Large-workspace architecture could become incompatible with portable,
   self-contained Dataset semantics.
8. Desktop and Browser behavior could diverge in ways users cannot predict.
9. Extension proliferation could fragment interoperability.
10. Individual applications could drive unjustified Core/schema growth.
11. Suite branding could imply products that do not exist.
12. Multiple clients could create an unsustainable maintenance burden.

## Exploratory principles to preserve

1. Specialized applications should remain focused.
2. Core should not absorb application-specific presentation concepts merely to
   make Suite integration easier.
3. Portable E2R Dataset interoperability should remain first-class.
4. A future large Workspace and a portable Dataset may have different physical
   representations.
5. Cross-app context should use explicit contracts rather than hidden shared
   assumptions.
6. Suite integration should not require every user to install every app.
7. Browser apps remain first-class participants.
8. Desktop or VS Code clients should extend capability rather than redefine
   the interchange model.
9. Third-party compatibility should remain possible where specification
   support permits it.
10. Functionality should not be centralized prematurely before responsibilities
    are understood.

These are exploratory principles, not accepted architecture or knowledge
rules.

## Open questions

1. What exactly qualifies an application as E2R Suite-compatible?
2. Must compatibility include full Dataset editing, or can read-only viewers
   participate?
3. How much working context should Handoff carry?
4. Should selected Entity/Event/Relation context be portable between apps?
5. Is workspace context represented inside E2R, beside E2R, or through a
   separate protocol?
6. How should capability discovery work?
7. Does E2R need a unified Suite shell at all?
8. Could Hub evolve into one, or should it remain separate?
9. Can VS Code host several E2R surfaces without becoming canonical?
10. What belongs in Core, Extension, workspace, application, or transient
    client state?
11. How are very large workspaces reconciled with self-contained interchange?
12. How are document and evidence provenance references transported?
13. What is the boundary between cross-app selection context and persistent
    Dataset data?
14. Can external developers build compatible apps without internal details?
15. What versioning and compatibility guarantees would an ecosystem need?
16. How can Suite-level UX consistency avoid forcing identical application UI?
17. Would a Desktop client contain multiple surfaces or interoperate with
    independent clients?
18. What evidence would justify moving this milestone from exploratory to
    planned?

## Knowledge Candidate Check

Candidate: **YES - EXPLORATORY HYPOTHESIS**.

Potential reusable hypotheses are that a suite can be defined by
interoperability rather than a monolithic executable; focused applications can
share a domain model while owning different analytical responsibilities;
portable interchange and large-workspace storage can remain separate; and
cross-application context should be explicit rather than hidden shared state.
These remain unpromoted because this record is exploratory and has no
independent implementation evidence or explicit project decision.

`ai-knowledge` was not modified.

## Final boundary

This is a long-term, distant, exploratory milestone only. It does not start
Suite implementation, a new application, a new repository, a Handoff change,
VS Code work, Desktop work, PDF integration, Octant/3D work, or any
LiaisonScape checkpoint.
