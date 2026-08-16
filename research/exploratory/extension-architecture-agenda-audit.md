# E2R Extension Architecture Agenda Audit

Date: 2026-08-12

Implementation status updated: 2026-08-13

Status: Research audit; non-normative

Subsequent Coordinate maturity decision:
`coordinate-maturity-and-identifier-decision.md` freezes experimental
prototype `0.1.0` and chooses revision under a separate working draft
identifier without Stable registration.

Subsequent Coordinate draft-design inputs:
`coordinate-space-component-compatibility-decision.md` defines exact,
profile-driven compatibility, and
`coordinate-external-reference-decision.md` keeps local definitions
self-contained while making external Component bindings explicit and
fail-closed. `coordinate-version-and-space-evolution-decision.md` makes the
Coordinate-owned version bootstrap authoritative and separates same-ID edits
from new-Space migration.

Coordinate draft implementation status: those inputs are now assembled in
`../extensions/coordinate-extension-draft.md`, its complete-Dataset schema,
valid/invalid fixtures, semantic fixture validator, and atomic prototype
migration contract. `coordinate-draft-0.1.0-review.md` records the passed
repository review and the remaining implementation risks. Application and
published Validator adoption have not yet begun.

## Purpose

This document audits the conclusions of Architecture Agendas 1 through 9
against the current E2R specification, research documents, application design
documents, and implementation evidence.

It is a consolidation and correction plan. It does not register a new
Extension, rename an existing Extension, or change Dataset conformance.
Normative documents remain authoritative when this audit disagrees with them.

The audit has five goals:

1. preserve the architectural distinctions established across the nine
   agendas;
2. identify conclusions that are mature enough to guide experiments;
3. identify contradictions with current documents;
4. separate naming decisions from schema decisions; and
5. define an evidence-based order for the next specification work.

## Sources reviewed

The audit uses the nine agenda handoffs as design input and checks them against:

- `spec/core.md`;
- `spec/philosophy.md`;
- `spec/rationale.md`;
- `spec/extension-naming.md`;
- `extensions/history-extension.md`;
- `extensions/metadata-extension.md`;
- `extensions/specification-extension.md`;
- `docs/application-design-principles.md`;
- `docs/application-recommendations.md`;
- `docs/roadmap.md`;
- `applications/relationship-graph-app.md`;
- `applications/linkscape-mvp-acceptance.md`;
- `research/exploratory/linkscape-layout-and-view-state.md`;
- `research/exploratory/deterministic-generation.md`;
- `research/exploratory/view-generation.md`;
- the current Linkscape, NarrativeLine, and Validator implementations; and
- `examples/cross-application-demo.json`.

`sessions/E2R-Session-0024.md` was also checked as historical context. Its
Linkscape milestone instructions predate the implementation and architecture
work summarized here and must not be treated as the current task list.

## Audit result

The nine agendas produce a coherent candidate architecture when the persisted
authorial concept formerly called a View is provisionally called a
Perspective:

| Responsibility | Owns | Does not own |
| --- | --- | --- |
| Semantic data | facts and interoperable meaning | placement or appearance |
| Coordinate | reusable positions in a defined coordinate space | edge routing or viewport state |
| Layout | authored spatial composition and geometric overrides | facts, colors, or current interaction |
| Perspective | persisted authorial context about what is considered and how it is organized | geometry or appearance |
| Presentation | appearance and styling | semantic selection, geometry, or current interaction |
| Application View State | zoom, pan, selection, modal state, scrolling, and similar transient interaction | interoperable Dataset state |

This separation is the strongest result of the work. In particular, Coordinate
and Layout must not be recombined into one universal Layout Extension, and
Presentation must not absorb Layout or Perspective ordering.

The architecture is suitable as a research baseline, but it is not yet a set of
Extension specifications. Coordinate has completed its prototype evidence and
has an accepted **revise into a separate draft** disposition. Layout has
substantial Linkscape requirements
but lacks a persisted cross-application experiment. Perspective and
Presentation remain conceptual and must not be standardized from diagrams
alone.

The major naming question raised by Agenda 9 has since been resolved by
`research/extension-architecture/decisions/extension-identity-and-payload-key-decision.md`. The Extension
identifier remains the payload key; `metadata` and `history` remain registered
identities; independently published names use authority qualification; and
exact specification versions remain separate. The decision is reflected in
`spec/extension-naming.md`.

## Consolidated decision register

The following entries are accepted as the current research baseline. They are
not normative requirements until promoted through the ordinary specification
process.

### Core boundary

- No Agenda 1--9 conclusion requires a Core schema change.
- A Core Dataset remains self-contained at the Core level.
- Unknown Extensions remain ignorable and should be preserved whenever
  practical.
- Presentation and application behavior must not be moved into the Core.

### Coordinate and coordinate spaces

- A Coordinate describes where an Entity or Event is in a Coordinate Space.
- A Coordinate Space defines stable Component identifiers and how component
  values are interpreted; it is not limited to Cartesian axes.
- Dataset-local Space definitions are the source of truth. An external
  identifier may be added where an external standard applies.
- Space identifiers are Dataset-local. Component identifiers are Space-local.
- Coordinate values should be keyed by Component identifier rather than stored
  as a positional number array.
- Partial coordinates are allowed. Values must be finite numbers; `null` and
  empty value sets are not coordinates.
- An object has at most one Coordinate per Space.
- Entity and Event use the same candidate Coordinate structure. No current use
  case justifies Relation coordinates.
- The exact schema for units, ranges, periodicity, metrics, transforms, and
  external coordinate-reference systems remains deferred.

### Layout

- Layout describes authored spatial composition and intentional geometric
  overrides. It does not duplicate Coordinate data.
- Partial Layout data is normal. A generated complete graph snapshot is not
  automatically authored Layout data.
- Multiple Layouts may exist and need Dataset-local identities.
- A Layout may reference objects and geometric roles without being permanently
  bound to one Perspective or one Coordinate Space.
- Relation routes, self-Relation geometry, label placement, and relative layer
  ordering are Layout concerns.
- Label text remains on the represented object or in an appropriate semantic
  source. Layout owns placement, not the text.
- Relative ordering constraints are preferred to a universal absolute
  `z-index`, although the exact constraint schema and cycle behavior remain
  open.
- Linkscape-generated values remain Derived until a user explicitly adopts
  them. Explicitly saved values become Owned and must not be silently replaced
  by later generation.

### Perspective

- The persisted authorial context must not be called simply `View` because
  application architecture already uses View for the UI layer and visualization
  research uses View for Timeline, Graph, Tree, and Map renderings.
- `Perspective` is the current working name, not a registered Extension name.
- A Perspective may express focal context, targeting, grouping, ordering,
  relevance, ranking, or coordinate selection without owning the referenced
  facts, coordinates, geometry, or styling.
- The minimal concept is identity-centric. Targeting and the other capabilities
  are optional siblings, not fields every Perspective must contain.
- Perspective ordering is distinct from History `temporalOrder`.
- Relevance is contextual and is distinct from a global importance score.
- Perspective selection may combine explicit references with derived rules,
  but E2R should not invent a universal query language for this purpose.
- Object existence, Perspective targeting, Presentation suppression, and UI
  visibility are separate states.

### Presentation

- Presentation owns appearance only.
- Candidate properties include color, shape, size, icon use, line appearance,
  and label appearance or visibility.
- Presentation may refer to objects but must not become the semantic selection
  or query mechanism.
- Semantic meaning must not exist only as a color, icon, line style, or other
  visual convention.
- Label placement belongs to Layout; label appearance belongs to Presentation.
- A Media responsibility owns reusable resources. Presentation may own the use
  of a Media resource as an icon.
- Application default, type default, and object override form a useful
  experimental precedence order. General cascading is not yet justified.
- Arrow appearance must not redefine the Core direction from `sourceId` to
  `targetId`.

### Application View State

- Zoom, pan, current selection, open modal, hover, scroll position, gesture
  state, and similar interaction state are not saved to the Dataset by default.
- A future application session or workspace format may store such state without
  making it an interoperable E2R Extension.

### Deterministic generation

- Determinism, reproducibility, and incremental stability are distinct.
- The practical target is shared behavior for an explicitly versioned Engine,
  not universal reproduction by every E2R application.
- A seed is optional and a Dataset ID is not a mandatory seed.
- Engines should be external to the Dataset model, versioned, purpose-specific,
  side-effect-free, and invoked through application adapters.
- An Engine should return a validated delta with target identifiers, outcome
  status, diagnostics, and runtime engine metadata rather than returning a
  replacement Dataset.
- Failure must remain contained. Fallback behavior belongs to the application
  or the purpose-specific contract.
- Derived caches are non-authoritative and should be invalidated from their
  dependencies.
- There is no present justification for a universal Generation Extension.

### Extension interoperability

- Core support, lossless preservation, partial Extension support, and full
  contextual support are different claims.
- Full support depends on the features and dependencies actually used by a
  Dataset, not every feature an Extension could theoretically define.
- Extension is the responsibility unit, Feature is an optional independently
  supportable capability, and Field is a representation unit.
- Features should be introduced only when partial support has demonstrated
  value. A Feature does not need its own independent version.
- Required dependencies and optional uses must be distinct. Compatibility is a
  separate statement.
- A missing required dependency affects the dependent scope, not Core validity
  or unrelated data.
- Applications should save intentional edits to supported data and preserve
  unsupported untouched data.
- Exact dependency identifiers, version-range grammar, cycle rules, and a
  capability-manifest format remain deferred.

### Identity, versioning, and evolution

- Identity, version, and display name are separate.
- Responsibility continuity is the primary test for specification identity.
  Similar schema shape or compatibility alone does not establish identity.
- Published specification versions should be immutable and retained.
- Semantic Versioning is the current versioning candidate; a Dataset should be
  able to declare the exact specification version it used.
- Dependencies may eventually use exact versions or ranges, but range syntax is
  not selected.
- Feature identity is local to its Extension and does not have an independent
  version.
- Immutable specification identity/version data must be separated from mutable
  lifecycle information such as deprecation.
- `supersedes`, `deprecatedBy`, `splitInto`, and `mergedFrom` are candidate
  evolution relationships, not migration algorithms.
- A dedicated Specification Extension design pass is required; the agenda
  conclusions must not be patched field-by-field into its current exploratory
  schema.

## Superseded or corrected design statements

The following earlier statements should no longer guide new work:

- "Layout is part of Presentation." Layout and Presentation have separate
  responsibilities.
- "A Presentation Extension owns arbitrary event display order." Persisted
  authorial ordering is a Perspective concern; current sorting can be UI state.
- "Every Coordinate Space must always declare units and axis orientation."
  Space metadata is conditional on the Space's Components and interpretation.
  Stable Space and Component identities are the universal requirement.
- "Deterministic generation is principally a seed stored in the Dataset."
  The engine contract and explicit inputs define determinism; a seed is only one
  possible input.
- "Dataset ID is the default universal generation seed." No such requirement is
  justified.
- "All graph appearance, route geometry, coordinates, and viewport state form
  one Layout/View/Presentation payload." The responsibilities remain separate.
- "All derived application data must remain outside the Dataset." Derived
  runtime data remains outside by default, but explicitly adopted results can
  become Owned Extension data.

## Contradiction and drift matrix

| Priority | Current source | Problem | Required correction |
| --- | --- | --- | --- |
| Resolved | `spec/extension-naming.md` versus Agenda 9 | Registered simple names were identity values, while the agenda proposed separate qualified canonical identifiers | Design B retains one Extension identifier as the payload key, preserves `metadata` and `history`, and uses authority-qualified names for independently published Extensions |
| Resolved | `spec/philosophy.md` | Listed Layout, Timeline rendering, and Graph visualization under Presentation Extensions | Presentation now owns appearance; Coordinate, Layout, persisted authorial context, and Application View State are distinct responsibilities |
| Resolved | `spec/rationale.md` | Assigned View-owned event order to a future Presentation Extension | Non-temporal persisted ordering is now assigned to an authorial-context responsibility, provisionally called Perspective |
| Resolved | `extensions/history-extension.md` | Correctly excluded display order from `temporalOrder` but assigned future `eventOrder` to Presentation | The `temporalOrder` rules remain unchanged and the future-owner explanation now uses persisted authorial context |
| Resolved | `research/exploratory/linkscape-layout-and-view-state.md` | Combined route geometry, label placement, layer order, and icons under a View/Presentation candidate and made coordinate metadata universally mandatory | The document now separates Coordinate, Layout, Presentation, Application View State, and Owned/Derived status; Space metadata is conditional on interpretation |
| Resolved | `research/exploratory/deterministic-generation.md` | Was seed-centric and treated Dataset ID as a likely generation basis | The document now separates determinism, reproducibility, and incremental stability around versioned Engines, explicit inputs, deltas, failure containment, and Owned/Derived state |
| Resolved | `research/exploratory/view-generation.md` | Used View for Timeline/Graph/Tree/Map without distinguishing it from the persisted authorial concept | The document now uses Application Visualization and separates Application View, Application View State, Perspective, Coordinate, Layout, and Presentation |
| Resolved | `docs/application-design-principles.md` | Treated derived graph layouts only as implementation detail | Derived results now remain local by default while intentionally adopted values may become Owned data under an appropriate Extension |
| Resolved | `docs/application-recommendations.md` | Used `view-specific` for custom presentation order and treated all generated layouts as external data | Temporary sorting, persisted authorial ordering, Derived data, and intentionally adopted Owned data are now distinguished |
| Resolved | `extensions/specification-extension.md` | The earlier exploratory model did not express the Agenda 8--9 distinctions | Draft `0.1.0` now separates identity, exact used version, dependencies, Features, lifecycle, evolution, and bootstrap |
| Resolved | `docs/roadmap.md` | Earlier planning presented Coordinate/Layout and View/Presentation too broadly | The current roadmap records separate responsibilities and independent evidence gates |
| Prototype implemented | Linkscape `extensions.coordinate.positions` | Application-specific `{spaceId, x, y}` records had no Dataset-level Space definition and did not use component-keyed values | Explicit save now migrates the legacy `linkscape` position into an authority-qualified, unregistered Dataset-Space prototype |

These corrections should be made as separate logical changes. The normative
History rules themselves are not invalid: the defect is the future ownership
example, not the meaning of `temporalOrder`.

## Formal name audit

| Name | Current status | Audit conclusion |
| --- | --- | --- |
| `Dataset`, `Entity`, `Event`, `Relation` | Core terms | Keep unchanged |
| `metadata` / Metadata Extension | Registered Stable Extension | No current evidence justifies renaming it; Agenda 5's rejection of a universal metadata wrapper does not invalidate this Dataset-description responsibility |
| `history` / History Extension | Registered Stable Extension | Keep unchanged unless a future responsibility audit demonstrates an actual identity change |
| Specification Extension | Candidate document and unregistered name | Keep the working name for its redesign; do not register it until identity, version, dependency, and bootstrap rules are coherent |
| Coordinate Extension | Candidate with completed prototype evidence | Keep the display name; freeze the experimental identifier and revise under `draft.github.sukoyaka-dopeness.coordinate`; do not select a Stable identifier yet |
| Coordinate Space | Candidate model term | Keep; a Space defines Components and interpretation |
| Layout Extension | Candidate | Strong responsibility name; formalization awaits persisted and cross-application evidence |
| Perspective Extension | Provisional candidate | Prefer over persisted `View` for now; run a naming review against viewpoint, context, lens, scene, and workspace before registration |
| Presentation Extension | Candidate | Use specifically for appearance; `Styling` may be a profile or user-facing synonym, not yet a separate responsibility |
| Application View | Application architecture term | Retain for the UI layer and current rendered state; never use it unqualified for persisted authorial data |
| Visualization View | Existing research vocabulary | Qualify it as application visualization when referring to Timeline, Graph, Tree, or Map |
| Semantic Extension | Research candidate | High-value topic, but the responsibility may require vocabulary-specific Extensions rather than one universal payload |
| Media Extension | Research candidate | Plausible owner of reusable resources; needs at least icon/resource reuse across Linkscape and NarrativeLine before formalization |
| Feature | Interoperability model term | Retain provisionally as an optional support boundary within an Extension; exact identifier form is deferred |
| Linkscape | Application name | Outside Extension naming; review separately for product-name collision risk before a public release |

### Resolved identifier decision

The current rules make the Dataset payload key an Extension identity:

```text
extensions.<extension-name>
```

They register `metadata` and `history`, recommend qualified names mainly for
draft, experimental, and vendor Extensions, and say Stable names should be
immutable. Agenda 9 instead recommends a stable qualified canonical identifier.
Four coherent designs were evaluated:

1. retain simple registered identities and use qualified names only where the
   current naming rules require them;
2. grandfather `metadata` and `history`, but require qualified identities for
   future Stable Extensions;
3. distinguish the payload key from a qualified canonical specification
   identifier declared by the Specification Extension; or
4. create new qualified Extension identities and define explicit migration from
   existing identities.

Option 2, Design B, was selected. It preserves the current single identity,
keeps `metadata` and `history` unchanged, and uses qualified identifiers where
independent authority collision avoidance is needed. Option 3 was not selected
because the payload key must remain an interoperability identity for existing
and declaration-free Datasets; a second immutable identifier would add a
binding and conflict source without demonstrated use. The decision is recorded
in `research/extension-architecture/decisions/extension-identity-and-payload-key-decision.md` and
`spec/extension-naming.md`.

## Implementation evidence

### Linkscape

Linkscape currently provides the primary concrete Coordinate/Layout evidence:

- Entity positions can be explicitly saved and restored.
- The Coordinate prototype uses
  `experimental.github.sukoyaka-dopeness.coordinate` at format `0.1.0`.
- `linkscape-graph` is defined at Dataset level with stable `x` and `y`
  Components and component-keyed finite values.
- Explicit save migrates only the older `extensions.coordinate.positions[]`
  entry whose `spaceId` is `linkscape`; unrelated legacy data is preserved.
- Unsupported prototype versions and Specification declaration conflicts are
  not overwritten.
- Manual edge curvature, self-Relation orientation/radius, node-label offsets,
  edge-label offsets, and display layer order remain application state.
- Zoom, pan, selection, modal state, and scrolling are not exported.
- Opening a Dataset or generating a fallback layout does not silently persist
  generated values.
- Unknown fields and Extensions are preserved whenever practical.

This implements the first Coordinate migration experiment and supports a later
Layout persistence experiment. NarrativeLine and Validator now provide the
independent evidence needed to assess it; formalization remains a separate
decision.

### NarrativeLine

NarrativeLine interprets Metadata and History data and preserves unknown fields
and Extensions through its typed models and immutable updates. It provides an
independent interpreter for Coordinate prototype `0.1.0`: Entity/Event Detail
resolves Dataset Spaces, Component IDs, units, partial values, and
multiple-Space values. Entity Detail is also the bounded second writer for
already-recorded `x`/`y` values in the exact `linkscape-graph` definition. It
does not create missing Coordinate structures and preserves other Components,
Spaces, unknown fields, and array positions. The Space selector and draft
values are temporary UI state. NarrativeLine still does not interpret Layout,
Perspective, or Presentation semantics.

### Validator

Validator recognizes `metadata`, `history`, Specification draft `0.1.0`, and
exact Coordinate prototype `0.1.0`. It distinguishes Core and Coordinate
diagnostics, checks Spaces, Components, references, bounds, scope, duplicate
claims, and declaration agreement, and leaves unsupported Coordinate versions
as warnings rather than applying the wrong version's rules.

### Cross-application sample

`examples/cross-application-demo.json` exercises Entity/Event/Relation reuse,
History, Metadata, parallel Relations, multiple self-Relations, two
Dataset-level Coordinate Spaces, multiple-Space Entity values, and a partial
Event Coordinate. Coordinate remains explicitly experimental. The fixture does
not yet contain Layout, Perspective, Presentation, Semantic, or Media data.

## Evidence gates by candidate

| Candidate | Current evidence | Missing before a formal Extension |
| --- | --- | --- |
| Coordinate | Frozen prototype `0.1.0`; reviewed draft candidate `0.1.0` with normative contract, schema, 5 valid/18 invalid fixtures, semantic validation, and explicit atomic migration/refusal fixtures | Read-only Validator support, application migration, draft cross-application evidence, later Stable identifier review |
| Layout | Rich Linkscape route, loop, label, and layer requirements | Explicit persistence UI, Owned/Derived behavior, node-move interaction rules, round-trip tests, another application or renderer using the same layout intent |
| Perspective | Nine-agenda conceptual model | Concrete application workflow for at least two capabilities, reference lifecycle behavior, partial-feature preservation, terminology validation |
| Presentation | Linkscape has unsaved appearance behavior | Reusable style vocabulary, Media interaction, semantic non-dependence tests, second renderer, unknown-property preservation |
| Specification | Draft `0.1.0`, executable Validator diagnostics, declaration/dependency fixtures, lifecycle/evolution structure checks, and one-level bootstrap | Older-definition retention, multi-application evidence, independent schema comparison, Stable identifier decision |
| Semantic | Human-readable Relation names reveal a need | Vocabulary identity model, Relation typing use case, at least two consuming applications, interaction with Perspective and Presentation |
| Media | Future selectable icons reveal a need | Resource identity and representation experiment, security/portability constraints, use from at least two applications, Presentation dependency test |

## Prioritized work after this audit

### Specification and documentation track

1. Test preservation and version selection with current and legacy Extension
   payloads across applications.
2. Retain an older exact definition when the first Specification Extension
   revision creates one.

### Application evidence track

1. Add read-only Coordinate draft `0.1.0` support to Validator while retaining
   independent Prototype support.
2. Add explicit application migration and draft cross-application evidence
   only after Validator behavior passes.
3. Add explicit Linkscape persistence for selected Layout-owned values while
   preserving the distinction between generated and user-adopted values.
4. Round-trip those unknown candidate payloads through NarrativeLine and verify
   byte-equivalent or structurally equivalent preservation of untouched data.
5. Keep zoom, pan, selection, modal, and scroll state outside the Dataset.

### Research backlog priority

1. Semantic responsibility and vocabulary architecture, because Relation
   meaning affects cross-application use and must remain independent of visual
   conventions.
2. Media resource identity and safe portable representation, using selectable
   node icons as the first concrete experiment.
3. Presentation vocabulary after Media boundaries are understood.
4. Perspective application experiments, beginning with one real ordering or
   grouping workflow rather than the entire capability family.
5. Deterministic Engine experiments for stable fallback layout, delta output,
   failure containment, and protection of Owned coordinates/layout.

Reference integrity and object lifecycle apply across all five items. Rules for
deleting or replacing referenced objects must be researched before a
Perspective, Layout, or Presentation Extension is made Stable.

## Recommended document-change sequence

Each item below should be a separate, reviewable logical change:

1. Implement read-only Validator support for the reviewed Coordinate draft
   without registering a Stable identifier.

No current Stable Extension should be renamed during this sequence.

## Handoff strategy for the next ChatGPT review

A new ChatGPT conversation should not be asked to reconstruct the architecture
by rereading all nine handoffs without a synthesis. The preferred package is:

1. this audit;
2. `spec/core.md`;
3. `spec/extension-naming.md`;
4. `extensions/specification-extension.md`;
5. `spec/philosophy.md` and `spec/rationale.md`;
6. `extensions/history-extension.md` only for the `temporalOrder` and Timeline
   Display and Authorial Ordering sections;
7. the specific next decision memo or draft under review; and
8. one or two original agenda handoffs only when exact reasoning provenance is
   disputed.

Codex should continue to perform repository and implementation audits because
it can check the source of truth and current code. ChatGPT is best used after
that audit to challenge a bounded design question, explore alternatives, or
edit a draft. The synthesized audit, not nine independent summaries, should be
the default handoff boundary.

## Immediate next architecture task

Implement read-only Validator support for Coordinate draft `0.1.0`. Bootstrap
before applying the exact schema, retain independent Prototype diagnostics,
integrate Coordinate/Specification agreement, and preserve unsupported versions
without applying `0.1.0` rules. No application migration or Stable registration
occurs during that step.
