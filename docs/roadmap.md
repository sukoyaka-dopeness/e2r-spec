# E2R Medium- and Long-term Roadmap

Date: 2026-08-17

Status: Current planning document; non-normative

## Purpose

This roadmap is the current priority summary for the E2R specification,
Validator, NarrativeLine, and LiaisonScape. Session logs remain historical records
and must not override this document merely because they contain older
future-work lists.

The architecture baseline comes from:

- `research/exploratory/extension-architecture-agenda-audit.md`;
- `research/extension-architecture/decisions/extension-identity-and-payload-key-decision.md`;
- `research/coordinate/decisions/coordinate-maturity-and-identifier-decision.md`;
- `research/coordinate/decisions/coordinate-space-component-compatibility-decision.md`;
- `research/coordinate/decisions/coordinate-external-reference-decision.md`;
- `research/coordinate/decisions/coordinate-version-and-space-evolution-decision.md`;
- `research/exploratory/linkscape-layout-and-view-state.md`;
- `research/exploratory/deterministic-generation.md`; and
- `research/exploratory/view-generation.md`.

## Operating principles

- Keep the Core minimal and stable.
- Make one responsibility change at a time.
- Preserve unknown Extensions whenever practical.
- Keep Extension identifier, display name, and specification version separate.
- Do not combine Coordinate and Layout into one universal Extension.
- Keep Perspective, Coordinate, Layout, Presentation, and Application View
  State distinct.
- Treat generated results as Derived until an intentional workflow adopts them
  under the responsible Core or Extension model.
- Require executable interoperability evidence before registering a candidate
  Extension as Stable.
- Keep ordinary Dataset use and Core validation independent of network access
  or an external registry.

## Current baseline

### Roadmap/status synchronization — 2026-08-17

- Research Physical Reorganization is completed. Its closure record is
  `sessions/E2R-Session-0028.md`.
- Names P1 and its Validator release workstream are completed. Names P1 may be
  consumed read-only by applications; no production writer, migration, repair,
  or Core `name` synchronization is authorized.
- Names Grouping remains deferred. Representation selection is not reopened.
- Coordinate remains at its frozen Prototype/Draft evidence boundary; the
  current specification-repository Validator evidence is the active support
  track.
- History vNext, Relative Time, Source/Citation, and Target Reference remain
  research or pending responsibilities; their older session “next task” lists
  do not supersede this roadmap.
- NarrativeLine remains at `0.1.0`. LiaisonScape `0.1.0` has completed its
  First Distribution.
- LiaisonScape now includes Entity and Relation creation and deletion,
  Entity/Relation detail editing, direct graph authoring, persistence,
  round-trip preservation, UI modularization, Home/entry UX, and bounded
  English/Japanese localization.
- Direct Graph Authoring MVP is complete. This includes direct Entity creation,
  Relation creation including self and parallel Relations, selected-Relation
  curvature manipulation, relation hit-area and discoverability improvements,
  and touch/pen gesture handling.
- Completion of these application workstreams does not change Core or Extension
  semantics and does not authorize Names writers, Relative Time semantics,
  Source/Citation product integration, or other deferred research work.

### Cross-repository software licensing direction

The current software-release direction is MIT, with copyright-holder direction
`sukoyaka-dopeness`, for E2R Hub, NarrativeLine, LiaisonScape, E2R Validator,
and reusable E2R software utilities, including the planned
`e2r-dom-test-environment` package. This is a project policy/direction, not
itself a license grant; each software repository must receive its own
`LICENSE` and package metadata synchronization in a separate bounded phase.

`e2r-spec` is deliberately excluded. Its standards/document licensing requires
a separate decision, to be resolved before the final public-release audit and
preferably before Push/deployment readiness.

### Standards licensing policy decision — 2026-08-25

S2 accepted the role-based policy in
`research/standards-licensing/decisions/e2r-standards-license-decision.md`:
CC BY 4.0 for project-authored specification/documentation prose, MIT for
standalone schema/code-like specification artifacts, and CC0 1.0 for eligible
project-created example, research fixture, and machine-readable dogfood data.
The existing MIT direction for E2R software repositories is reaffirmed. This
is a policy decision, not license-file or package-metadata implementation.

S3 remains required for the formal repository license application and
provenance audit. Hub publication of the Self-Description Dataset remains
blocked until that formalization and the ordinary public URL/redistribution
readiness checks are complete.

S2.1 now records a Metadata 1.1.0 candidate for optional
`extensions.metadata.license` as an SPDX License Expression. The field is a
Dataset-level descriptive declaration, not proof of rights or compliance;
implementation and Stable promotion remain separate follow-ups.

### Stable specification foundation

- Core defines Dataset, Entity, Event, and Relation.
- Relations connect Entity or Event endpoints; Relation-to-Relation endpoints
  are prohibited.
- Metadata and History are registered Stable Extensions.
- `metadata` and `history` remain immutable Extension identifiers and payload
  keys.
- History separates recorded chronology and `temporalOrder` from non-temporal
  authorial ordering.
- Extension identifiers are resolution-independent; exact Extension
  specification versions remain separate.

### Architecture work completed

- Agendas 1 through 9 have been consolidated and audited against the repository
  and current applications.
- Coordinate, Layout, provisional Perspective, Presentation, and Application
  View State responsibilities have been separated.
- Owned and Derived application data have been distinguished.
- Timeline, Graph, Tree, Table, Calendar, Map, and Spiral are now described as
  Application Visualizations rather than persisted Views.
- Determinism, reproducibility, and incremental stability have been separated
  around a versioned Engine research model.
- The Extension identifier remains the payload key. A second canonical
  identifier is not currently introduced.

### Agenda 1--9 reflection status

The repository-level reflection of the nine architecture agendas is
substantially complete. The accepted responsibility boundaries, terminology,
identifier model, exact-version model, deterministic-generation boundary, and
Coordinate evidence process are represented in current specification,
research, application, and Validator documents.

The remaining work is not mainly transcription from the agenda handoffs. It is
evidence-dependent follow-through:

- decide final Stable names and registration only after draft evidence gates
  pass;
- review and implement the separately identified Coordinate draft without
  changing the frozen prototype;
- implement and assess Layout, Semantic, Media, Presentation, and Perspective
  experiments independently; and
- repeat the formal cross-document audit before any Stable registrations.

For planning purposes, agenda-conclusion reflection is approximately 97%
complete. The larger implementation and candidate-formalization roadmap is
much less complete and must not be represented by that percentage.

### Application and tooling evidence

- Published Validator `0.3.0` includes the completed bounded Names P1
  validation release.
- Read-only Coordinate draft `0.1.0` Validator support is complete at the
  current evidence boundary. Applications do not write the Draft, and this
  support does not authorize migration or Stable registration.
- NarrativeLine `0.1.0` edits supported Metadata and History data, reads
  Coordinate prototype `0.1.0` in Entity/Event Detail, and provides a bounded
  second writer for existing Entity `x`/`y` values in LiaisonScape's exact shared
  Space while preserving unknown fields and Extensions.
- LiaisonScape `0.1.0` implements the Entity-first MVP, including graph
  interaction, deterministic fallback behavior, explicit Entity-coordinate
  save/restore, Relation editing, route and label interaction, and unknown-data
  preservation.
- `examples/cross-application-demo.json` exercises reusable Core, Metadata,
  History, parallel Relations, multiple self-Relations, Dataset Spaces,
  partial Event Coordinates, and multiple-Space Entity Coordinates across the
  applications.

LiaisonScape now migrates its legacy `coordinate` payload into the
authority-qualified Coordinate prototype `0.1.0`. The prototype remains an
application experiment, not an official Stable Coordinate Extension.

### Dataset Replacement Safety implementation checkpoint — 2026-08-20

- LiaisonScape Dataset Replacement Safety D1-D7 is implemented and manually
  accepted through commit `79451ca43758a14195cf9f549d8785cb9415482a`.
- The accepted implementation covers Dataset baseline and pending-work safety,
  D6 replacement confirmation, and D7 browser-native exit protection without
  changing Core, Extension, Coordinate, routing, label geometry, or Layout
  persistence semantics.
- Dataset Handoff v0 is implemented and manually accepted for LiaisonScape;
  its accepted implementation checkpoints and evidence are recorded in
  `docs/dataset-handoff-v0-liaison-scape-implementation-result.md`.
- Direct Hub handoff remains a later workstream.
- NarrativeLine Replacement Safety and Dataset Handoff v0 parity remain
  deferred. The current accepted bounded implementation evidence is for
  LiaisonScape; NarrativeLine acceptance documents and Formal Completion
  Acceptance are a later workstream, not current evidence.

### NarrativeLine Focus Phase 2 closure — 2026-08-23

- Focus Phase 2 is COMPLETE / CLOSED for the bounded NarrativeLine scope.
- Fresh Entity Create entered through explicit `Create New Entity` intent
  focuses Name once; `Resume Draft` and Browser history restoration do not
  force a focus target.
- Existing Event Detail and Existing Entity Detail retain no generic
  autofocus because the intended editing field is not unambiguous at entry.
- Safe Enter/form semantics and Timeline title autofocus remain deferred
  follow-up experiments, not current release blockers.
- This closure does not authorize autofocus changes in other screens or in
  LiaisonScape. The accepted runtime checkpoint is NarrativeLine commit
  `1d6d609`; related reusable evidence remains a Hypothesis in Knowledge.

## Completed design milestone 1: Specification Extension redesign

Draft version `0.1.0` is now defined in
`extensions/specification-extension.md` as one coherent responsibility. It is
a design draft, not a registered Stable Extension.

### Accepted inputs

- The Extension identifier is also its Dataset payload key.
- `metadata` and `history` are not renamed.
- Core `version` remains separate from Extension specification versions.
- An exact used Extension version may be declared centrally at Dataset level.
- A payload without such a declaration means the Extension is present with its
  specification version unspecified.
- Unknown or unsupported declarations and payloads remain preservable.
- Specification interpretation and validation must work offline when the
  required implementation is locally available.
- The Specification Extension needs a finite one-level bootstrap for its own
  exact version.

### Design scope

The redesign should define conceptual records for:

1. Extension identifier and exact used specification version;
2. required dependencies and optional uses;
3. optional Features used by the Dataset;
4. compatibility statements distinct from dependencies;
5. immutable specification identity/version information;
6. mutable lifecycle and evolution metadata; and
7. the Specification Extension's own bootstrap.

### Deferred during the first pass

- a general online registry or discovery protocol;
- automatic schema downloads;
- publisher authentication;
- migration algorithms for every split or merge;
- a universal capability manifest for applications;
- changes to the Core schema; and
- registration of Coordinate, Layout, Perspective, Presentation, Semantic, or
  Media Extensions.

### Completion result

The draft now:

- declares exact versions for the Extensions actually used by a Dataset;
- distinguishes missing declaration, unsupported version, unavailable local
  specification, and invalid declared payload;
- expresses required and optional dependencies without invalidating unrelated
  Core data;
- supports partial Feature understanding without fragmenting every field into a
  Feature;
- resolves its own version with one finite bootstrap layer;
- retains older published specification versions as identifiable definitions;
  and
- includes representative valid, legacy, unsupported, and conflicting
  examples.

The remaining implementation evidence belongs to the Validator milestone
below. Stable naming, publisher authentication, and migration remain deferred.

## Completed implementation milestone 2: Validator interoperability model

Validator design now follows Specification Extension draft `0.1.0`.
Implementation must keep the draft replaceable and must not promote the
candidate to Stable by implication.

Planned diagnostics and fixtures should distinguish:

- Core validation failure;
- known Extension with version unspecified;
- exact declared version supported locally;
- declared version unsupported locally;
- specification unavailable locally;
- missing required dependency data;
- unsupported required dependency implementation;
- declaration referring to an absent payload;
- payload/declaration inconsistency; and
- unknown data that remains safely preservable.

Warnings and unsupported states must not be reported as Core structural errors.
Offline validation remains the baseline; network retrieval may only be an
optional future convenience.

The Validator now implements this model across Dataset, Entity, Event, and
Relation Extension containers. Specification fixtures cover exact support,
version unspecified, unsupported versions, unavailable specifications,
dependency absence, unsupported dependency implementations, declaration
conflicts, and invalid declared payloads. Exact declarations at unsupported
versions are not validated using a different version's rules.

## Application evidence track

This track may prepare fixtures and experiments while the Specification
Extension is designed, but it must not pre-empt its schema decisions.

### Completed evidence milestone 3: Coordinate prototype

Replace or explicitly migrate LiaisonScape's experimental
`{spaceId, x, y}`-style data through an unregistered prototype that tests:

- Dataset-level Coordinate Space definitions;
- stable Space and Component identifiers;
- component-keyed finite numeric values;
- partial coordinates;
- multiple Spaces;
- the same candidate structure for Entity and Event;
- relevant external coordinate standards; and
- a second application that interprets, rather than merely preserves, the
  coordinates.

Prototype `0.1.0` now implements all eight listed experiments in
`extensions/coordinate-extension.md` and
`examples/cross-application-demo.json`. LiaisonScape interprets and explicitly
saves Entity positions, including controlled migration from its legacy
payload. NarrativeLine independently resolves the same Dataset Spaces,
Components, units, partial values, and multiple-Space values in Entity/Event
Detail, with bounded editing only for compatible existing Entity `x`/`y`.
It also proves preservation through a supported Event edit and round trip. The
unreleased Validator now interprets exact
prototype `0.1.0`, reports `coordinate_*` conformance diagnostics separately
from Core diagnostics, and treats unsupported prototype versions as warnings.

The executable evidence milestone is complete. An external-reference fixture
is interpreted and round-tripped offline. Duplicate Space and per-object
Coordinate claims exercise the conflict baseline, and LiaisonScape refuses
incompatible definitions instead of overwriting them. NarrativeLine explicitly
updates only existing Entity `x`/`y` values in the same compatible
`liaisonscape-graph` Space. The tested sequential round trip through both
applications and the Coordinate-aware Validator preserves other Spaces and
unknown data.

The maturity review chose **revise**, not direct Stable promotion or indefinite
deferral. Experimental prototype `0.1.0` is frozen as the compatibility and
migration baseline. The separately identified normative candidate is now
assembled under `draft.github.sukoyaka-dopeness.coordinate` as draft `0.1.0`;
no Stable identifier has been selected or registered.

### Completed design milestone 4: Coordinate draft `0.1.0`

Accepted draft-design input now defines exact lexical matching for Space and
Component IDs and opaque semantic descriptors. Human-readable names never
authorize a write. A processor may write only through an explicit capability
profile matching the required `kind`, Component IDs, units, directions, and
period behavior. Coordinate itself does not infer aliases or perform unit
conversion. See
`research/coordinate/decisions/coordinate-space-component-compatibility-decision.md`.

Accepted external-reference input keeps Dataset-local definitions as the
offline operational source of truth. The draft uses explicit
Component-level external bindings; unresolved or conflicting bindings prevent
external-aware writes but do not invalidate or replace locally valid data. See
`research/coordinate/decisions/coordinate-external-reference-decision.md`.

Accepted bootstrap and evolution input makes the draft's required
Dataset-level `specVersion` authoritative and treats a supported Specification
declaration as a consistency assertion. Display names and bounds that preserve
all existing values may retain a Space ID; Component or semantic-definition
changes require a new Space ID and explicit migration. See
`research/coordinate/decisions/coordinate-version-and-space-evolution-decision.md`.

The normative contract is assembled in
`extensions/coordinate-extension-draft.md`, with a complete-Dataset JSON
Schema, five valid fixtures, eighteen invalid fixtures, semantic fixture
validation, and atomic migration and refusal fixtures. Repository review found
and resolved ambiguity around context-only external writes, unsupported
Specification data, unknown Prototype fields, existing Draft collisions,
duplicate declarations, and opaque-ID diagnostic paths. See
`research/coordinate/decisions/coordinate-draft-0.1.0-review.md`.

### Completed implementation milestone 5: read-only Validator support

Validator independently recognizes the Draft and Prototype identities,
bootstraps before schema selection, reports schema and semantic diagnostics,
distinguishes unsupported versions from malformed supported data, and
integrates Specification agreement. It remains read-only and does not migrate
application data.

The accepted decision and its alternatives are recorded in
`research/coordinate/decisions/coordinate-maturity-and-identifier-decision.md`.

### Layout persistence experiment

The responsibility and persistence boundary checkpoint is documented in
`docs/layout-persistence-responsibility-decision.md`. It records the current
non-normative design direction without selecting an identifier, schema, or
implementation.

The Automatic Layout experiment order and interoperability evidence ladder are
documented in `docs/automatic-layout-experiment-plan.md`. This remains an
experiment plan and does not establish a Layout identifier, schema, algorithm,
or maturity model.

Experiment 1 Label Stability is complete as bounded evidence. The
previous-placement approach showed partial improvement without changing
Dataset or Layout persistence. The next bounded experiment is graph density /
spacing, recorded in
`docs/automatic-layout-experiment-1-label-stability-result.md`.

Experiment 1B Density/Framing is now recorded as inconclusive evidence. Its
temporary spacing and initial-framing implementation was not adopted, and
current evidence does not support viewport framing as the primary cause of
label jumps. The next bounded experiment is Experiment 1C Angular Freedom.
Layout schema and identifier work remain not started.

The Experiment 1B follow-up found that expanding uniform Derived spacing from
`240 x 180` to the temporary `360 x 270` comparison did not materially
increase screen-space breathing room because automatic fit reduced the display
scale as graph bounds grew. Graph-space collision conditions may still change.
Node-based fit bounds, fixed 16-direction Node-label candidates, collision
penalties, and Relation-path effects remain separate unresolved factors. No
new spacing value or fit behavior was accepted, and Experiment 1B remains
`INCONCLUSIVE`.

Experiment 1C Angular Freedom is now recorded as bounded evidence with a
`CLEAR IMPROVEMENT / DIRECTION SUPPORTED` result. Increasing Node-label
candidate resolution from 16 to the temporary 32-direction comparison
exposed useful intermediate directions and improved some collision-triggered
placements. The comparison did not select 32 as a final constant or change
label distance, collision scoring, geometry, fit behavior, routing, or
persistence. The next bounded experiment is Experiment 1D Owning-Node
Proximity.

Experiment 1D Owning-Node Proximity is now recorded as
`MIXED / BOUNDED IMPROVEMENT`. The temporary axis-separated distance formula
showed some near-vertical improvement, but no clear diagonal or
long-description improvement. The exact formula was not adopted and the
baseline distance calculation was restored. Owning-Node proximity remains
unresolved; Angular Freedom remains the stronger supported direction. The next
bounded experiment is Experiment 1E Node-Label Recovery.

Experiment 1E Node-Label Recovery is now recorded as
`INCONCLUSIVE / DENSITY-LIMITED`. Recovery could return labels closer when
nearby preferred candidates became genuinely free after substantial Node
separation, but ordinary initial density often kept those candidates blocked.
The exact recovery gate was not adopted; previous-placement hysteresis and
the 32-direction baseline remain. Graph geometry density has stronger evidence
as an upstream factor. The next bounded experiment is Experiment 1F
Anisotropic Derived Spacing.

Experiment 1F Anisotropic Derived Spacing is recorded as
`INCONCLUSIVE / LIMITED APPLICABILITY`. The `360 x 180` fallback comparison
did not adequately exercise the main manual targets because stored Coordinates
and temporary direct-creation positions bypass the fallback grid. The
temporary spacing was not adopted and the `240 x 180` baseline was restored.
Future work should provide an intentional Coordinate-free automatic-layout
demonstration Dataset. Relation-label midpoint recovery and normal-distance
recovery remain separate future experiments.

Experiment 1G Node-Label Cardinal Preference is recorded as
`BOUNDED IMPROVEMENT / DIRECTION SUPPORTED`. A temporary `0.5` penalty per
11.25-degree step from the nearest cardinal axis made sparse placements more
orderly while retaining all 32 legal directions for dense-graph escape. The
weight is not final, cardinal-only placement is not accepted, and proximity
and density remain separate concerns. Future work now includes Node-label
drag-follow responsiveness during active Node movement and bounded
multi-line description wrapping; wrapping was not implemented. The next
temporary experiment is Experiment 1H Node-Label Drag-Follow Responsiveness.

Experiment 1H Node-Label Drag-Follow Responsiveness is recorded as
`CLEAR IMPROVEMENT / DIRECTION SUPPORTED`. Bypassing previous-placement
hysteresis only for the actively dragged Node's own label removed the observed
fast-drag trailing while preserving hysteresis for other labels. The exact
rule remains experimental. Future routing evidence should distinguish label
readability and ownership from edge overlap/crossing, and self-loop
orientation versus Node-label clearance remains a separate candidate.

Experiment 1I Bounded Description Wrapping is recorded as
`CLEAR IMPROVEMENT / DIRECTION SUPPORTED`. Preserving the 28-character visible
content limit while wrapping to a temporary maximum of two lines at width 20
reduced wide description footprints and improved dense readability and
automatic placement in English and Japanese. The geometry audit found an
8-unit Node-boundary-to-LabelRect-edge gap in both pure vertical and horizontal
placement; optical glyph inset remains separate. The temporary global +3
vertical shift was rejected. The next experiment is 1J Node-Facing Optical
Inset.

Experiment 1J Node-Facing Optical Inset is recorded as
`MIXED / DIRECTIONAL OPTICAL ASYMMETRY CONFIRMED`. A uniform 3px radial
text-only nudge produced little improvement above Nodes and over-corrected
below Nodes, so it was not adopted. LabelRect clearance remains unchanged;
future work should inspect visual geometry before another optical adjustment.
Qualitatively, 32 directions plus cardinal preference also appear to reduce
manual Node-label repositioning, though this is not yet a measured metric. The
next audit is Experiment 1K Directional Optical Geometry.

Experiment 1K Directional Optical Geometry is recorded as
`AUDIT COMPLETE / GEOMETRY CLARIFIED`. The audit confirmed an 8-unit
Node-boundary-to-LabelRect-edge clearance for pure horizontal and vertical
placements, a transparent hit rectangle, and TRUE GEOMETRIC TERMINATION at
the invisible LabelRect boundary. Directional optical asymmetry remains a
rendered-glyph question; adaptive connector visibility is recorded only as
future presentation research. No production geometry change was adopted.
The next temporary experiment is 1L Relation-label Drag-Follow
Responsiveness.

Experiment 1L Relation-label Drag-Follow Responsiveness is recorded as
`CLEAR IMPROVEMENT / DIRECTION SUPPORTED`. Bypassing previous-placement
hysteresis only for Relations incident to the actively dragged Node reduced
horizontal, vertical, and diagonal trailing while preserving stability for
unrelated Relations. Self-loops were included by the same endpoint condition.
Some labels still remain too far from their edge after movement; normal-
distance recovery and along-edge / midpoint recovery remain independent,
separate experiments. The next temporary experiment is 1M Relation-label
Normal-Distance Recovery.

Use a clearly authority-qualified, LiaisonScape-owned experimental payload to
test selected persistence of:

- ordinary and self-Relation routes;
- label placement;
- relative layer ordering;
- behavior after endpoint Coordinate changes;
- explicit adoption and return-to-automatic workflows; and
- partial support and preservation through NarrativeLine.

Automatic routes and label placement remain Derived. Only explicitly adopted
values become Owned experimental Layout data. Zoom, pan, selection, modal, and
scroll state remain outside the Dataset.

### Cross-application checkpoint

The current neutral sample now supports the tested workflow:

```text
NarrativeLine import/edit/export
    -> Validator
    -> LiaisonScape import/use/explicit save/export
    -> NarrativeLine re-import
```

The checkpoint verifies preservation of Core IDs, unknown fields, unsupported
Extensions, exact-version declarations, untouched experimental payloads, and
the shared Coordinate after sequential writes by NarrativeLine and LiaisonScape.
It is repeatable from the specification repository with
`npm run validate:coordinate-interoperability`; the ordinary `npm run validate`
remains independent of sibling application repositories.

## Initial Public Release critical path

The first public release should establish a complete user journey:

`learn E2R -> discover samples in the Hub -> open a Dataset in NarrativeLine
or LiaisonScape -> edit safely -> export -> return to documentation`.

The Hub / Portal public entry point is complete for the accepted Hub Public
Entry Point Information Architecture (Milestone 1) and the manually accepted
Static E2R Landing Page Implementation (Milestone 2). The current evidence
covers E2R introduction, application purposes, capability and maturity status,
sample cards, documentation, user guides, and application entry points.
Direct Hub Handoff and Initial Public Release remain incomplete.

The critical path is:

1. **NarrativeLine modernization** — COMPLETE for the accepted bounded
   Dataset Replacement Safety and Dataset Handoff v0 scope after auditing NarrativeLine's
   existing temporal editing and pending-work model. The accepted work includes
   safe Open, New, and Sample
   replacement, loss-risk tracking, pending-work protection, browser-native
   exit warning, explicit handoff failure, no silent fallback, startup-only
   handoff, and the distinction between acquisition URL and Dataset identity.
   Acceptance evidence is recorded in the NarrativeLine NL-D4, NL-D5A, NL-D5B,
   NL-H1A, NL-H1B, and Formal Completion documents.
2. **NarrativeLine navigation ownership** — audit Browser Back/Forward,
   `history.state`, `popstate`, Home/editor navigation, fragment ownership,
   runtime fragment changes, and the separation of screen navigation from
   Dataset replacement. Foreign history state must not be misinterpreted.
3. **Hub / Portal public entry point** — provide E2R introduction, application
   purposes, capability and maturity status, sample gallery, documentation,
   user guides, and application entry points.
4. **Public interoperability evidence** — continue Validator, canonical and
   sample Dataset, public handoff fixture, cross-application fixture, and
   unknown-Extension preservation checks.
5. **Release documentation synchronization** — align each repository's README,
   user guide, roadmap, implementation status, deployment state, and sample
   links. Use `implemented`, `manually accepted`, `research / experimental`,
   and `deferred / on hold` consistently.

Direct Hub handoff can be evaluated as a later workstream. NarrativeLine Handoff
v0 completion does not claim Hub direct handoff, public release completion,
private/authenticated Handoff support, or any future multi-Dataset workflow, and
this section does not promote Direct Hub handoff to a release blocker.

## Research / post-release growth

The following are valuable future workstreams and do not block the initial
public release:

- NarrativeLine <-> LiaisonScape cross-application handoff, distinguishing a
  public source Dataset from current unexported edits and pending work;
- Entity grouping / Group Entity, using evidence from both applications before
  deciding whether grouping belongs to Core, an Extension, or presentation;
- multiple Dataset comparison, lineage, merge, provenance, and cross-Dataset
  references;
- advanced layout and presentation, including larger-graph readability,
  automatic placement, colors, icons, and reproducible results;
- Perspective experiments for bounded grouping, ordering, targeting,
  relevance, or ranking;
- richer time semantics, including Relative Time, intervals, durations,
  alternative calendars, temporal constraints, and History vNext;
- Source, Citation, external identifiers, Wikidata import, provenance,
  confidence, Dictionary evolution, and external vocabularies; and
- AI-assisted analysis, validation, repair, and authoring support, subject to
  ordinary E2R validation and safety boundaries.

### Grouping evidence and feedback direction

Entity grouping is not an accepted Dataset semantic or implementation plan.
LiaisonScape has evidence that large graphs benefit from meaningful grouping,
and NarrativeLine has a corresponding need to organize long Entity lists and
Timeline participants. NarrativeLine modernization should collect evidence
about grouping, collapse/expand, Entity versus Event grouping, hierarchy, and
membership before a bounded LiaisonScape grouping experiment is considered.
Neither application alone should decide the Dataset semantics. Any initial
experiment must remain bounded; arbitrary nesting, multiple membership, Group
relations, persistence, and Core-versus-Extension ownership remain open.

Cross-application current-edit handoff, Group Entity, multiple-Dataset merge,
advanced semantics, and AI assistance are future directions rather than
conditions that indefinitely delay the first public release.

## Research priority

### 1. Semantic responsibility and vocabulary architecture

Relation `name` is a human-readable Core label, not an interoperable semantic
type. Research should define how vocabulary identity, Relation typing, external
mapping, and application support interact without placing domain meaning in
Presentation.

### 2. Media responsibility

Use selectable LiaisonScape icons as the first concrete experiment. Media should
own reusable resources; Presentation may own their use as icons. Research must
cover identity, portability, supported formats, security, and preservation.

### 3. Presentation

Research reusable appearance only after the Media boundary is clearer. Label
placement and Relation routes remain Layout. Semantic meaning must not exist
only as color, icon, or line style.

### 4. Perspective

`Perspective` remains provisional. Begin with one real persisted grouping or
non-temporal ordering workflow rather than attempting the full Targeting,
Grouping, Ordering, Relevance, Ranking, and Coordinate Selection family at
once.

### 5. Deterministic Engine experiments

Prototype one purpose-specific, versioned Engine with explicit normalized
inputs, a validated delta, failure containment, Owned-value protection, and a
second adapter. Dataset ID is not a mandatory seed, and no universal Generation
Extension is planned.

### Cross-cutting research

Reference integrity and object lifecycle apply to Specification declarations,
Perspective, Coordinate, Layout, Presentation, Semantic, and Media data.
Deletion, replacement, split, merge, and dangling references require explicit
rules before affected Extensions become Stable.

Other continuing topics include:

- relative time, intervals, alternative calendars, and temporal constraints;
- multiple Datasets, lineage, merge, provenance, and cross-Dataset references;
- external identifiers, sources, and Wikidata import;
- Dictionary evolution and external vocabularies;
- AI-assisted analysis, validation, repair, and content generation; and
- visual comparison across Datasets.

## Application maintenance

- Keep Validator release automation, fixtures, package inspection, and
  tag/version checks healthy for the next published version.
- Keep NarrativeLine at `0.1.0` until an explicit release or version decision.
- LiaisonScape's First Distribution remains `0.1.0`; change its version only
  through an explicit follow-up version decision.
- Keep Japanese and English guides aligned when behavior changes.
- Preserve the LiaisonScape MVP boundary while architecture work continues.
- Long-form Core Object Content / body applicability remains a research
  follow-up; responsibility between `description`, a Content/Text Extension,
  and a future Core field is UNDECIDED.
- Treat major desktop/mobile UI divergence as later application design work,
  not a Core or Extension requirement.
- Add NarrativeLine time-of-day controls through progressive disclosure when
  that application task is prioritized; the History model already supports the
  relevant fields.

## E2R ecosystem hub / portal track

The E2R Studio idea recorded in `sessions/E2R-Session-0010.md` is retained as
an active application-planning direction: create a top-level hub or portal
that introduces E2R, presents the available applications, links to their
individual top pages, offers samples and documentation, and helps users move
between compatible application workflows. The hub is an application and
distribution surface, not a new Core object or a requirement that all E2R
applications share one UI.

The following ten milestones are ordered as a planning proposal. They balance
implementation difficulty, likely user need, and the amount of foundation they
provide for later E2R applications and distributable packs.

Milestone 1, **Hub scope and information architecture**, is COMPLETE / ACCEPTED
DESIGN. Milestone 2, **Static E2R landing page**, is COMPLETE / MANUALLY
ACCEPTED. Their acceptance is recorded in
`docs/e2r-hub-public-entry-point-information-architecture.md` and
`docs/e2r-hub-public-entry-point-milestone-2-acceptance.md`. The remaining
items below are future planning context; they do not reopen either accepted
checkpoint.

1. **Hub scope and information architecture** — define the audiences, first
   actions, application categories, links, sample flow, and the boundary
   between the portal and each application's own Home page.
2. **Static E2R landing page** — publish a small, fast top page explaining E2R,
   linking the four current repositories/apps, and providing a clear starting
   path for new users.
3. **Application catalog and status cards** — turn the application catalog into
   discoverable entries with purpose, maturity, supported capabilities, links,
   and explicit experimental/deferred labels.
4. **Shared sample gallery** — provide a small set of canonical datasets with
   previews and “open in application” links, while keeping samples versioned
   and self-contained.
5. **Onboarding and documentation paths** — add short guided paths for a first
   Dataset, timeline workflow, relationship workflow, validation, and
   cross-application preservation.
6. **Cross-application handoff links** — make the portal demonstrate import,
   export, validation, and preservation between NarrativeLine, LiaisonScape,
   and Validator without requiring a monolithic application.
7. **Capability and compatibility metadata** — define a lightweight,
   versioned description of application capabilities and supported Extension
   profiles so the hub can explain compatibility without guessing from names.
8. **Pack distribution foundation** — prototype discovery and manifest display
   for future Calendar, Locale, Dictionary, Orthography, and Style Packs;
   keep pack resources and Dataset declarations as separate responsibilities.
9. **User workspace and project entry model** — research a safe way to retain
   recent Datasets, selected applications, and project links without silently
   turning local application state into interoperable Dataset content.
10. **E2R ecosystem release surface** — establish a maintainable portal release
    process for applications, samples, documentation, compatibility metadata,
    and packs, including provenance, version selection, and offline/failure
    behavior.

The next practical step is a bounded follow-up after Milestones 1 and 2. The
current Hub already provides application links, sample cards, and a
Documentation section, so the next workstream should be selected from the
remaining gap rather than inferred from the historical milestone order.
Candidates include Application Catalog and Maturity Clarity, Shared Sample
Gallery refinement, Onboarding and documentation path refinement, Hub direct
Dataset Handoff, or public interoperability evidence / sample workflow. No
single candidate is selected here without its own bounded scope and evidence
gate. None of these milestones authorizes a Core change, a universal
application UI, or automatic interpretation of unknown application and pack
metadata.

### Shared browser preference and workspace direction

The Hub should investigate a browser-local sharing layer for the E2R
ecosystem. A user who selects Japanese in NarrativeLine should be able to open
LiaisonScape with Japanese selected as well when the applications share an
origin. This is a user preference, not Dataset content: a future shared key
such as `e2r.preference.locale` may be stored in `localStorage`, with each
application reading it at startup. Optional live synchronization through
`BroadcastChannel` may be considered later, but next-startup sharing is the
initially sufficient behavior.

Dataset retention and application handoff belong to a separate browser
workspace layer. Small preferences may fit `localStorage`; retained Datasets,
recent projects, and application handoff records should be evaluated against
IndexedDB. A Hub could pass an opaque workspace key between applications
instead of placing a large Dataset in a URL. Neither layer should alter the
Dataset or become an implicit E2R Extension.

This direction depends on deployment topology. `localStorage`, IndexedDB, and
`BroadcastChannel` are origin-scoped, so two applications under the same
scheme, host, and port but different paths can share them, whereas different
localhost ports or future separate subdomains cannot. The Hub roadmap must
therefore research an explicit bridge or server-backed workspace before
assuming cross-origin sharing. This is a future architecture question, not a
current application or Core implementation requirement.

## Canonical sample follow-up

The canonical cross-application sample baseline now includes the Apollo 11
Mission English/Japanese wrapper-free Datasets under `examples/`. They are
intended for Timeline, relationship-graph, Validator, and future Hub workflows;
application Home samples remain application-specific and are not changed by
this addition.

The Apollo consumer evidence is recorded in
`research/exploratory/cross-application-canonical-sample-consumer-evidence.md`.
It documents the accepted Coordinate-only adoption boundary, the current
Layout persistence gap, and future Hub, rendering, multilingual, and temporal
research prompts. It is non-normative evidence and does not authorize a Core,
Extension, or application implementation change.

## Sample and external vocabulary follow-up

Two application/ecosystem tasks are explicitly recorded for future planning:

- Revise the NarrativeLine public sample Dataset so that opening the same
  Dataset in LiaisonScape produces an interesting, legible relationship graph.
  The sample should remain useful as a Timeline in NarrativeLine while adding
  meaningful Entity-to-Entity structure, selected Event connections, and
  compatible Coordinate data. This is sample and application work, not a reason
  to weaken NarrativeLine's Timeline identity or change the Core.
- Research on-demand vocabulary retrieval from thesauri, Wikidata, and other
  external sources for use with Dictionary and future Semantic capabilities.
  Retrieved data must be treated as external/derived input until deliberately
  adopted, with source identity, retrieval time, version or revision, license,
  language, and failure/offline behavior preserved. Network retrieval must not
  be required to open or validate an otherwise valid Dataset, and a lookup must
  not silently create identities, meanings, Relations, or Semantic assertions.

This external-vocabulary idea is related to the existing roadmap topics of
external identifiers, Wikidata import, Dictionary evolution, and AI-assisted
analysis, but is a distinct research task concerning on-demand retrieval,
provenance, caching, deterministic selection, and adoption boundaries.

## Application UX maintenance follow-up

The following bounded application-maintenance items are recorded for both
NarrativeLine and LiaisonScape. They do not change E2R Core or Extension
semantics:

- review the visual scale of operation buttons on desktop and narrow mobile
  layouts; the current controls feel oversized relative to both the desktop
  composition and the phone viewport. The review must preserve touch-target,
  keyboard, and contrast requirements while reducing visual disproportion;
- align NarrativeLine's browser Back/Forward behavior with LiaisonScape's
  Home/workspace model, including Dataset retention and direct-entry or
  refresh behavior;
- align the Home navigation control in NarrativeLine view headers with
  LiaisonScape's current header treatment, while keeping navigation semantics
  explicit and preserving the active Dataset;
- audit modal and confirmation-dialog focus behavior in both applications.
- **NarrativeLine Event Detail responsive action layout audit** — review the
  intermediate-width wrapping and grouping of the primary Save action,
  secondary Save / Add Related Entity action, and destructive / Return action.
  Compare grouping, wrap order, alignment, spacing, narrow and intermediate
  widths, EN/JA labels including long localized labels, keyboard focus order,
  touch targets, and destructive-action hierarchy. This is an audit item, not
  a decision to force one column, prohibit wrapping, move the destructive
  action, or introduce a fixed `712px` or `600px` breakpoint. LiaisonScape
  Detail/Dialog action grouping may be used as a later reference candidate,
  but this item does not establish identical cross-application layout.

The proposed modal keyboard policy is deliberately action-sensitive. Ordinary
forms and non-destructive confirmations may initially focus their primary
decision so Enter can complete the common action. Destructive confirmations,
especially deletion, should initially focus Cancel or another non-destructive
choice. Enter activates only the currently focused control; it must not be a
global shortcut that bypasses the visible focus. Escape, focus containment,
return focus to the opener, and an always-visible focus indicator remain
required. This keeps keyboard use efficient without making an accidental
Enter press delete data.

These items are future application work, not authorization for a broad visual
rewrite. Each application should receive focused interaction tests for
browser history, Dataset continuity, responsive button sizing, modal focus,
Enter/Escape behavior, and destructive-action safety before release.

### Cross-App Relation Deletion Ownership / Visibility Safety

This follow-up audits Relations outside an application's presentation or
management scope. Current evidence records that LiaisonScape manages
Entity-to-Entity Relations in its graph while Event-related Relations are not
graph-visible, and blocks Entity deletion while connected Relations exist.
NarrativeLine is Event-centered and currently allows Entity deletion with
cascade removal of connected Relations, while Entity-to-Entity Relations are
outside its direct surface.

This is a follow-up / audit item, not an accepted rule. Prefer inspectable
dependencies and avoid silently deleting out-of-scope Relations as a side
effect of deleting another Object. Sequence it after LS-M2D Relation
awareness, then LS-DETAIL-RR1 Related Relation Endpoint Readability, followed
by a dedicated cross-app ownership audit. No current Delete semantics,
cascade behavior, schema, or Core/Extension decision changes are authorized by
this entry.

### Future application surface concepts

The following remain future application concepts only, with naming and
implementation deferred:

- a multi-visualization application that can present the same E2R Dataset
  through quadrant/four-quadrant, radar, and future chart forms;
- a Notebook/document surface for diary, gamebook, outline, and long-form
  Object authoring use cases.

Long-form Object content is a working research candidate only. A possible
`body` field may represent primary long-form content alongside short `name`
and `description`, but this entry does not adopt a Core field, Extension,
schema, media model, or exact content format.

### LS-M2D Hidden Event-related Relation awareness — ACCEPTED / CLOSED

LS-M2D is accepted and closed as an application-specific Relation-awareness
checkpoint. LiaisonScape's Entity-only graph keeps valid Entity-to-Entity
Relations graph-visible, classifies valid Event-related Relations as hidden
from that graph, and separates missing or invalid endpoint Relations as other
unsupported cases. The Dataset, serialization, round-trip preservation,
validation, deletion semantics, and Core/Extension responsibilities are
unchanged.

The workspace count remains the graph-visible count. The passive notice counts
only `eventRelatedHiddenEdges`; it is ordinary non-actionable text and is not
a button, link, disclosure, alert, or focus target. Final copy is accepted in
English and Japanese, including the Japanese graph-scoped wording. Wide and
320px English/Japanese manual evidence, accessibility checks, 189 tests,
lint, build, and diff checks passed.

LS-DETAIL-RR1 Related Relation Endpoint Readability and Cross-App Relation
Deletion Ownership / Visibility Safety remain separate deferred follow-ups.
They are not accepted or implemented by this roadmap entry.

## Proposed E2R-wide milestones

The following ten milestones provide a cross-repository sequence using three
selection criteria: low implementation risk, clear user need, and value as a
foundation for future E2R applications and Extensions.

1. **E2R ecosystem information architecture** — define the relationship among
   the specification, Validator, NarrativeLine, LiaisonScape, future apps, and
   the E2R hub.
2. **First-use hub and application directory** — publish a lightweight entry
   page with application purposes, maturity, supported capabilities, samples,
   and documentation links.
3. **Canonical cross-application samples** — maintain Dataset fixtures that
   are useful in both Timeline and Graph applications, including the revised
   NarrativeLine sample and explicit preservation expectations.
4. **Interoperability verification baseline** — make import, export, Validator
   checks, unknown-data preservation, and cross-application round trips a
   repeatable release gate.
5. **Validator compatibility matrix** — publish which Core and Extension
   versions, Features, dependencies, and application profiles each tool
   supports.
6. **History and chronology completion** — resolve dated/undated ordering,
   Relative Time, intervals, and advanced History responsibilities before
   product integration.
7. **Application capability and pack manifest research** — define how apps,
   Calendar, Locale, Dictionary, Orthography, and Style Packs declare identity,
   version, dependency, compatibility, provenance, and licensing.
8. **Dictionary and Semantic foundation** — establish vocabulary identity,
   semantic assertions, external mappings, and preservation boundaries without
   putting domain meaning into the Core.
9. **On-demand external vocabulary experiment** — prototype read-only lookup
   from a thesaurus or Wikidata with explicit provenance, cache/version policy,
   offline fallback, rate/error handling, and intentional adoption into a
   Dataset or Extension.
10. **Evidence-gated ecosystem releases** — coordinate application releases,
    Validator releases, Extension evidence, sample revisions, and pack
    publication without requiring network access or silently changing stored
    Dataset meaning.

The recommended immediate sequence is milestones 1 through 4, with the sample
revision as a bounded parallel task. External vocabulary retrieval should begin
only after the Dictionary/Semantic responsibility boundary is written down;
otherwise a convenient lookup can accidentally become an unreviewed identity
or meaning system.

## Evidence gates for candidate Extensions

| Candidate | Current evidence | Missing before formalization |
| --- | --- | --- |
| Specification | Draft `0.1.0`, architecture audit, accepted identifier model, bootstrap, dependencies, Features, Validator implementation and fixtures | Multi-application evidence, Stable identifier decision |
| Coordinate | Frozen prototype `0.1.0`; reviewed draft candidate `0.1.0` with normative contract, schema, 5 valid/18 invalid fixtures, semantic validation, explicit atomic migration/refusal fixtures, and read-only Validator support | Application Draft writer/migration evidence, draft cross-application evidence, later Stable identifier review |
| Layout | LiaisonScape routes, loops, labels, and layer requirements | Explicit experimental persistence, endpoint-change rules, round trips, partial support, second renderer |
| Perspective | Nine-agenda conceptual model | Final naming review, concrete workflows for at least two capabilities, reference lifecycle, partial support |
| Presentation | LiaisonScape appearance requirements | Media boundary, reusable vocabulary, semantic independence, unknown-property preservation, second renderer |
| Semantic | Relation labels demonstrate unmet semantic typing need | Vocabulary identity, typing model, external mapping, two consuming applications |
| Media | Future selectable icon requirement | Resource identity, format/security rules, two application uses, Presentation dependency test |

Each candidate passes independently. Evidence for Layout does not register
Coordinate or Presentation, and a useful visualization does not justify a
universal View Extension.

## Explicitly deferred

Unless new evidence changes the decision, do not currently:

- expand the Core for presentation or application behavior;
- rename `metadata` or `history`;
- combine Coordinate and Presentation into Layout;
- serialize ordinary Application View State into the E2R Dataset;
- standardize LiaisonScape's current experimental Coordinate payload;
- create a universal Generation Extension;
- register Perspective before its name and workflows are proven;
- treat arbitrary Relation direction as semantic hierarchy; or
- make external registry or network access mandatory.

## Current public-release execution priority (2026-08-22)

The current bounded execution order is:

1. Cross-App Locale Recipient-Preference closure / production readiness;
2. NarrativeLine locale consumer implementation (blocked until Priority 1
   closure is accepted);
3. LiaisonScape locale consumer implementation;
4. Hub startup locale producer completion;
5. Hub Direct Handoff and localized Sample Gallery local acceptance;
6. Hub residual quality audit and Formal Completion;
7. E2R common favicon design and application to Hub, NarrativeLine, and
   LiaisonScape (Validator remains excluded unless deployment evidence changes);
8. LiaisonScape selectable SVG icons;
9. NarrativeLine display-order reordering;
10. push and deployment readiness;
11. Public Handoff/interoperability evidence; and
12. final pre-public-release audit.

This current priority supersedes the earlier recommendation to make Public
Interoperability Evidence / Sample Workflow the immediate next workstream. That
workstream remains planned and is intentionally deferred until the public-facing
product state is closer to final. The ordering does not make Dataset language
metadata, localized-counterpart architecture, Dictionary, or Semantic research
an Initial Public Release blocker.

## Cross-App Shell follow-up record (2026-08-23)

Cross-App Shell Alignment identified two bounded NarrativeLine follow-ups. The
Timeline item is now closed by the accepted runtime checkpoint below. The
remaining Credits item is already closed by the locale-consumer checkpoint.
These records do not reopen the accepted F2-NL1 locale Header
placement, F2-NL1b Footer geometry, or F2-NL1c extreme-narrow Header geometry:

1. **NarrativeLine Timeline shell navigation** — **CLOSED / ACCEPTED** at
   runtime commit `4868111b02aa850bb0c652ab3b3470dcd92595a0`. The explicit
   localized `Home` action is in the Timeline Header beside the NarrativeLine
   brand and locale control; the lower sticky area retains Add Event only.
   Existing contextual `Back` behavior for nested surfaces remains separate.
2. **NarrativeLine Credits dismissal** — **CLOSED / ACCEPTED** through the
   NarrativeLine locale-consumer checkpoint: explicit Close, Escape, and
   backdrop click, with focus and state behavior preserved.

These are application-shell checkpoints, not changes to `#locale`, recipient
preference semantics, Dataset Handoff, Dataset language, Dataset state, or graph
state. LiaisonScape's Credits backdrop dismissal is already implemented and is
not part of this record. The work should be evaluated before Cross-App Shell
Alignment is marked formally complete and before the final pre-public-release
audit; it is not by itself a claim that public release is blocked.

The Timeline Header change must include bounded browser and human-acceptance
checks for EN/JA, desktop, 601px/600px, representative narrow widths, roughly
270px and 240px boundaries, locale-button wrapping, brand/Home/locale overlap,
keyboard Tab order, and preservation of nested-surface Back semantics. No
workspace-wide minimum width is implied by the existing narrow-viewport
acceptance boundary.

## LiaisonScape residual UX / quality follow-up (2026-08-23)

Manual review during F2-LS1 identified the following bounded LiaisonScape
follow-ups. They are implementation and acceptance work, not Core or Extension
changes, and they do not change the current execution priority of F2-LS1,
Cross-App Locale consumer implementation, or Hub locale producer completion:

1. **Detail metadata / ID presentation audit** — review Entity Detail and
   Relation Detail ID placement and information hierarchy. Evaluate long UUID-
   sized values, wrapping, overflow, ellipsis, full-ID verification, copy
   affordance, keyboard/touch accessibility, and the distinction between empty
   or identical Entity/Relation names. Do not assume that moving ID directly
   below a title is the final design; confirm the placement through a bounded
   audit without reducing Dataset JSON or diagnostic traceability.
2. **Dataset title editing** — evaluate application authoring for
   `extensions.metadata.title`. Preserve unknown Metadata fields, Dataset-level
   unknown fields and Extensions, declarations and version information, and
   Dataset Replacement Safety / `datasetModified` behavior through export and
   reload. Define empty/removal semantics and the New Dataset workflow before
   implementation. This is application capability work, not a Core schema
   change, and should remain aligned with NarrativeLine's Dataset-level
   responsibility.
3. **Viewport toolbar compactness / breakpoint audit** — verify the desktop
   viewport toolbar and mobile viewport menu at the 600px boundary and nearby
   widths. The intended question is whether desktop controls should compact or
   hand off to the mobile UI at the breakpoint while preserving zoom controls,
   percentage visibility, drag-handle usability, graph visibility,
   discoverability, and touch-target requirements. Do not change the breakpoint
   or declare a universal minimum width from this observation alone.
4. **Graph information hierarchy** — audit the ordering and visual emphasis of
   Dataset load status, Dataset metadata/title, graph summary, unsupported
   Event-Relation caveat, graph content, and selection status. Keep the graph
   summary as the primary graph statistic and the unsupported-content notice as
   explanatory secondary information; defer exact DOM placement until the
   bounded audit.

### F2-LS1 acceptance checkpoint

LiaisonScape F2-LS1 Home / Workspace Header Locale Placement is
**Accepted / Closed** at the recorded evidence boundary. Acceptance evidence
and the runtime checkpoint are recorded in
`docs/liaisonscape-cross-app-shell-alignment-f2-ls1-acceptance.md`.

The accepted checkpoint includes the Workspace Header blank-area hit-area fix,
stable vertical editor-shell geometry at the 600px breakpoint, Credits opener
focus restoration, and the accepted Home / Workspace / Footer shell hierarchy.
It does not close the unrelated residual UX follow-ups below or authorize
runtime work outside the checkpoint.

### Minimum-width observation boundary

The review did not establish a LiaisonScape CSS minimum-width defect. A normal
Windows Chrome window did not reproduce a fixed minimum width, while DevTools
responsive testing showed that both LiaisonScape and NarrativeLine can be
inspected at narrower widths. This remains an observation boundary for future
responsive acceptance, not a new workspace-wide minimum-width requirement.

### Additional manual-review follow-ups

The same F2-LS1 manual acceptance added two cross-application UX questions:

- **Viewport toolbar interaction semantics** — extend the existing viewport
  toolbar compactness / 600px breakpoint audit to cover the focusable drag
  handle. Confirm whether a drag-only affordance belongs in sequential Tab
  order, whether keyboard repositioning is required, whether Enter / Space
  should have meaningful behavior, and whether a non-button accessible
  representation is more appropriate. Preserve pointer drag discoverability,
  keyboard and touch accessibility, and toolbar compactness. Do not prescribe
  `tabIndex`, arrow-key, or Enter-to-drag behavior before this audit.
- **Cross-App Dataset Replacement destructive styling parity** — compare
  NarrativeLine and LiaisonScape for modified-only, pending-only, and
  modified-and-pending states, including Cancel, Discard and Continue, Discard
  work and Continue, Export and Continue, and Export Dataset. Evaluate color,
  background, border, text emphasis, action hierarchy, safe-side initial focus,
  disabled state, hover, focus-visible, narrow layout, EN/JA, and danger
  semantics. The target is equivalent visual hierarchy for equivalent semantic
  risk, not identical CSS or DOM.

The following observations are recorded as non-issues and are not additional
roadmap items: extreme-narrow Footer wrap/clip differences caused by available
text width, and a changed initial Tab location after pointer interaction when
the browser's sequential-focus behavior remains correct. The accepted
approximately 240px boundary remains bounded and is not a universal minimum
width requirement.

F2-LS1 is no longer an open blocker. Previously accepted checks include
Workspace Header blank-area regression correction, brand and explicit Home
navigation, Dataset/selection preservation through locale switching, Credits
backdrop/Escape dismissal, opener focus restoration, representative Dataset
Replacement Dialog focus and dismissal behavior, toolbar breakpoint behavior,
and extreme-narrow brand behavior.

### Cross-App shell action hover parity

Record a future bounded audit for Home and locale controls that share a Header
action role. Semantic behavior and keyboard accessibility are accepted, but
their hover / focus-visible visual hierarchy is not currently identical. The
audit should compare the controls across EN/JA and narrow layouts without
assuming identical DOM or CSS.

### Home-first Dataset acquisition hierarchy

Record the adopted direction that primary Dataset acquisition is Home-first:
Home New / Open / Sample actions are the canonical primary entry. If Workspace
Open / Import remains available, it is secondary access rather than a competing
primary path. The exact secondary location (for example, a More menu) remains a
bounded UX decision. Future secondary access should be considered for both
NarrativeLine and LiaisonScape to preserve Cross-App symmetry, while leaving
multi-Dataset workflows open for later evaluation.

The bounded follow-up decision is now recorded: conceptual workspace secondary
access remains a future parity direction, but implementation is deferred until
a second genuinely useful workspace secondary action is accepted. NarrativeLine
does not introduce a one-item More menu for Open Dataset alone. Add Event and
Export remain visible; LiaisonScape's current Workspace Open / Import remains
unchanged for now. When actionable, the intended sequence is a NarrativeLine
prototype, real/manual acceptance, and then LiaisonScape parity. The future
trigger is a text `More` / `その他` control, not an icon-only trigger, and
Dataset acquisition is not assigned to right-click context menus.

### NarrativeLine Workspace More acceptance — 2026-08-25

The C2 deferral above is historical and remains accurate for the point at
which only Open Dataset was considered. During the subsequent NarrativeLine
C3/C4 work, Export was accepted as a second meaningful secondary action. The
current accepted result is a text `More` / `その他` menu containing `Open E2R
Dataset` and `Export E2R JSON`.

Add Event remains visible as the Timeline's primary editing action. Home
New / Open / Sample remains the canonical primary Dataset acquisition and
replacement path; workspace Open is secondary convenience access. LiaisonScape
keeps its current Workspace Open / Import presentation, with conceptual parity
deferred to a later separately scoped follow-up.

TimelineScreen owns surface-local file acquisition through the local picker,
file read, same-file reset, and local loading/error presentation. App owns
Dataset parsing, validation, candidate staging, replacement safety, and final
acceptance. The accepted C4 modal contract includes backdrop dismissal and
opener focus restoration; native OS file selection, picker Cancel focus, and
real touch remain explicit manual boundaries.

The accepted NarrativeLine evidence is 181/181 automated tests passing, zero
React `act(...)` warnings, and passing lint, build, and diff checks. A Home
replacement-Cancel observation that ended on `body` remains non-blocking and
was not silently fixed.

### NarrativeLine Timeline Back-to-Top acceptance — 2026-08-25

The accepted NarrativeLine Timeline Back-to-Top follow-up adds a conditional
text action to the sticky Timeline toolbar. The action is hidden while the
Timeline top sentinel is visible and appears after meaningful scroll, using
`IntersectionObserver`. Its accepted labels are `↑ Top` and `↑ 上へ`.

The accepted visible action order is `[Add Event] [↑ Top] [More]`; at the page
top it remains `[Add Event] [More]`. Add Event remains the visible primary
editing action, Back-to-Top is a transient navigation affordance, and More
remains the terminal secondary workspace-action container with its existing
panel alignment and behavior.

Activation focuses the Timeline heading and then uses the document-level native
scroll target `window.scrollTo({ top: 0, left: 0, behavior: "auto" })`. Smooth
scrolling is not adopted. Manual acceptance passed for EN/JA, long Timeline
top/middle/bottom states, sticky behavior, keyboard and pointer activation,
heading focus handoff, desktop and 701/700/601/600px layouts, approximately
320px layout, More alignment/stacking, and absence of horizontal overflow.
The approximately 320px Japanese wrap of More is accepted. Automated evidence
remains 181/181 tests passing with no React `act(...)` warnings and passing
lint, build, and diff checks. No Dataset, navigation, modal, locale, Core, or
Extension semantics changed, and no push was performed.

## Active follow-up ledger — 2026-08-25

### LiaisonScape LS-M2A acceptance — 2026-08-25

LS-M2A Workspace More / Action Hierarchy is **ACCEPTED / COMPLETE**. This
acceptance supersedes the earlier deferred LS-M2 wording in this roadmap. The
durable acceptance record is
`research/exploratory/liaisonscape-workspace-modernization-audit.md`.

The final contract is: above the Workspace-specific `720px` breakpoint, the
current graph-visible Entity / Relation count is at the toolbar inline start
and `Add Entity`, `Add Relation`, `Save node coordinates`, and `More` form one
inline-end action group. At `720px` and below, the count has its own readable
row, `Add Entity`, `Add Relation`, and `More` remain visible, and Save
Coordinates is inside More. The shell's global `600px` breakpoint is unchanged.

The accepted checkpoint also records the More keyboard contract, preserved
Dataset Replacement Safety for `datasetModified` and `pendingUserWork`, the
removal of persistent successful-load status and the unselected placeholder,
and the unchanged semantics of the Event-related capability notice now shown
below the graph. The next bounded application checkpoint is **LS-M2B —
Dataset title editing**; LS-M2D remains responsible for final capability-notice
presentation.

Retained follow-ups from acceptance: viewport toolbar drag-handle
keyboard/focus audit, LiaisonScape Credits descriptive-copy localization,
common E2R favicon, and Long-form Object Content / Media responsibility
research. No new knowledge candidate was added.

Small follow-ups must not be lost when development focus moves between
repositories or workstreams. Record a bounded UX, consistency, safety, or
visual follow-up when a concrete observation is discovered, even when it is
intentionally deferred. Recording an item does not raise its implementation
priority or authorize implementation; this ledger is not an unbounded wishlist.

### Current execution order

1. **P0 — ledger synchronization** — this checkpoint; complete.
2. **LS-M1 — LiaisonScape Workspace Modernization Audit** — next phase;
   implementation deferred until the audit is accepted.
3. **LS-M2 — bounded LiaisonScape workspace UX implementation** — deferred;
   depends on LS-M1.
4. **LS-M3 — Initial Node Placement Objective Audit** — major follow-up;
   deferred until workspace modernization is complete.
5. Placement experiments — deferred until LS-M3 justifies them.
6. **S3 — Standards License Formalization & Provenance Audit** — ready but
   intentionally deferred during the bounded LiaisonScape sequence.
7. Metadata 1.1.0 Draft and implementation evidence — deferred after S3.
8. Hub machine-readable dogfood publication readiness — deferred until
   licensing formalization and public redistribution checks.
9. NarrativeLine display-order reordering — explicitly deferred for now.
10. Public interoperability, deployment, and final release audit — later.

S3 remains **READY**; this ordering is temporary, not a permanent
architectural priority. History vNext, Relative Time, Target Reference,
Source/Citation, Semantic/Dictionary, and Layout/Presentation remain
independently gated research or design tracks.

### Planned visual follow-ups before public release

The following two visual follow-ups are intentionally separate. Recording them
does not authorize runtime, CSS, or experiment work.

1. **LiaisonScape Dataset metadata Edit / divider spacing — bounded visual
   fix, relatively early:** review the apparent near-contact between the
   Dataset metadata-row `Edit` button and the preceding horizontal divider.
   The bounded scope is vertical separation between the toolbar divider and
   the metadata/Edit control, while preserving the current visual language.
   This is a spacing defect, not a redesign: button radius, global control
   density, hover styling, and the known approximately 600/601px responsive
   follow-up remain separate. Implementation acceptance should check both
   narrow and wide layouts for spacing regression. Do not defer this item
   until the Cross-App Flatness Experiment.
2. **NarrativeLine / LiaisonScape Cross-App Visual Style / Flatness
   Experiment — public-release design experiment:** after the principal
   feature, UX, and known visual-defect work has substantially converged,
   compare the two applications as one cross-app visual language. Evaluate
   restrained-flat alternatives for border radius, control height and
   padding, border contrast, hover, selected, focus-visible, disabled, and
   destructive states; toolbar density; dialog/popover/menu elevation; and
   the depth difference between ordinary and floating surfaces. The aim is
   quieter ordinary surfaces that keep Dataset, Timeline, and Graph content
   primary while retaining only necessary floating-surface depth. This is not
   a mandate for Pure Flat Design, a blanket CSS rewrite, or simultaneous Hub
   redesign. Preserve focus-visible strength, non-hover state information,
   accessibility, semantic risk distinctions, and application parity. Graph
   routing, node/Relation geometry, Timeline semantics, and Dataset semantics
   are out of scope. Conduct the experiment with time for manual visual
   acceptance and adjustment before Push/deployment readiness and the final
   pre-public-release audit; if adopted, its accepted result becomes that
   audit's visual baseline.

### Cross-application object identity direction

**Accepted direction / implementation deferred.** Core Object ID is technical
metadata, not primary user content. NarrativeLine Event Detail and Entity
Detail, plus LiaisonScape Entity Detail and Relation Detail, should use the
same hierarchy: a collapsed-by-default `Technical details / 技術情報` section;
full read-only IDs; long-ID wrapping; and an appropriate copy affordance.
Object ID is not editable. NarrativeLine does not gain Relation Detail solely
to expose a Relation ID. Dataset ID is not duplicated inside Object Detail and
is reserved for a future Dataset-level information/inspection surface.

### LiaisonScape modernization ledger

- **Workspace action hierarchy — audit needed / Cross-app:** evaluate Open
  Dataset and Export E2R JSON under visible `More / その他`; Home-first
  acquisition remains canonical and workspace access remains secondary.
- **Dataset title editing — LS follow-up:** evaluate prominent top-level
  Workspace title editing. NarrativeLine retains top-level title editing;
  title is primary Dataset identity/presentation, not a More action.
- **Hidden Event-Relation notice — audit needed:** review placement, visual
  priority, persistence/visibility, and graph information hierarchy. It is
  explanatory content, not automatically an error or destructive warning.
- **Ownership tooltip/popover sizing — bounded re-audit:** distinguish Entity
  body, Node label, Relation path, and Relation label before changing accepted
  geometry.
- **Cross-app safety parity — retained:** Entity deletion differences and
  Dataset Replacement destructive styling parity remain open; do not solve
  them in LS-M1.
- **Initial Node Placement Objective Audit — major follow-up:** evaluate edge
  crossings, node/label overlap, edge length, graph bounds, component
  separation, layout stability, and incremental stability. Initial placement
  remains Derived presentation/layout behavior and must not silently write
  Dataset Coordinate/Layout data.

- **Public Sample Dataset Refresh — before Hub publication modernization:**
  inventory public samples, preserve intended roles, update accepted
  representations where appropriate, validate with production Validator,
  smoke/round-trip through NarrativeLine and LiaisonScape, verify Hub Handoff
  and license/redistribution eligibility, and distinguish Stable-oriented from
  Experimental samples. No sample or Hub change is authorized by this entry.

### Metadata and NarrativeLine follow-ups

Metadata 1.0.0 defines `datasetId` and `title`; `license` remains an accepted
Metadata 1.1.0 SPDX License Expression candidate. Description, author,
language, and generating application remain separate future evaluations;
`createdAt`, `updatedAt`, and `tags` are not accepted candidates here. Dataset
content language remains distinct from application UI locale.

Future user-created Dataset licensing UX must not choose a license
automatically: default is no interoperable declaration; a user may later
choose an SPDX preset or advanced expression. Applications do not determine
ownership or compliance. A future Dataset details/settings surface may host
richer metadata; P0 does not design it.

NarrativeLine display-order reordering is **DEFER FOR NOW**. Safe Enter,
Timeline title autofocus, richer Dataset Metadata UX, deletion-safety
consistency, and destructive styling parity remain deferred. Accepted items —
Timeline sticky toolbar, More menu, Header Home / nested Back, Back-to-Top,
locale shell, Credits, CoordinatePanel 600/601 geometry, Dataset Replacement
Safety, and Dataset Handoff v0 — are not reopened.

## Immediate sequence

The ledger above is the current short execution sequence. Existing locale,
shell, and application checkpoints below remain historical evidence and
independently scoped follow-ups; they are not silently promoted by this ledger.

The ordering above does not select the next product feature. A later handoff or
explicit planning decision may choose one bounded follow-up without reopening
unrelated workstreams.

At every step, prefer the smallest change that increases executable evidence
and keeps Core and Extension responsibilities distinct.

## Cross-App Locale consumer readiness checkpoint (2026-08-23)

The latest read-only NarrativeLine Locale Consumer Readiness Audit records the
current production-migration status as **NOT READY**. The existing
recipient-preference implementation is a bounded experimental checkpoint, not
production Cross-App Locale consumer parity. NarrativeLine's runtime worktree
is clean and the relevant experiment implementation is recorded at commit
`bfe88f6`.

Priority 1 is therefore **Cross-App Locale Recipient-Preference closure /
production readiness**. The following bounded closure items must be accepted
before production locale consumer migration begins:

1. Confirm the browser fallback contract and its NarrativeLine implementation
   direction while preserving the requested / persisted / browser / default
   distinction.
2. Complete manual startup evidence for locale-only, invalid, duplicate,
   malformed, and unsupported locale requests; effective-locale Handoff
   errors; temporary-choice reload; and repeated Conflict Dialog behavior.
3. Record the Experiment 2C applicability audit: current startup Locale
   Conflict cannot coexist with pre-existing modified or pending work, so no
   combined implementation case is active until a future entry permits that
   coexistence; Dataset Replacement Safety remains independently accepted.
4. Add and accept selector URL synchronization: immediate UI update,
   explicit persistence, `locale`-only `replaceState`, no new history entry,
   and preservation of `datasetUrl` and unknown fragment parameters.
5. Close the locale URL lifecycle evidence for Back / Forward, startup-only
   semantics, ignored runtime hash mutation, and Dataset Handoff fragment
   preservation.
6. Close NarrativeLine Timeline Header locale-control acceptance for EN and
   JA at desktop, narrow, and touch conditions.

The existing NarrativeLine experiment acceptance documents remain valid within
their bounded scopes. Experiment 1 does not close the manual/lifecycle items
above, and Experiment 2B does not accept startup Handoff with pre-existing
dirty work. These exclusions must not be treated as production-readiness
evidence.

The production implementation sequence remains deferred until this checkpoint
is accepted. Once ready, the smallest sequence is: locale fragment parser and
updater; requested / persisted / browser / effective state model; Conflict
Dialog and startup orchestration; Handoff ordering and StrictMode regression;
AppFrame selector persistence and fragment synchronization; Dataset,
selection, draft, and Replacement Safety regression; then browser acceptance.

This checkpoint does not reopen accepted F2-NL1/NL1b/NL1c or F2-LS1. Existing
Cross-App shell follow-ups, Dataset acquisition hierarchy, Header action parity,
and Dataset Replacement styling remain separate follow-up lanes. The accepted
LiaisonScape F2-LS1 checkpoint remains closed; its brand hit-area,
Credits-focus, and stable vertical shell fixes are not locale-readiness gaps.

No runtime, design-authority, or `ai-knowledge` files are changed by this
roadmap synchronization. The existing untracked files
`research/exploratory/anonymous-dataset-sharing.md` and
`sessions/E2R-Session-0048.md` remain preserved and outside this checkpoint.

## Deferred Cross-App safety and test-infrastructure follow-ups (2026-08-24)

Recent locale production-readiness work surfaced two future follow-ups. They
do not reorder the current locale priority and do not reopen completed locale
checkpoints.

### Audit and align Cross-App Entity deletion semantics

LiaisonScape currently blocks deletion of an Entity when incident Relations
remain, while NarrativeLine can cascade-delete Relations connected through the
Entity's `sourceId` / `targetId`. This creates a Cross-App interoperability and
destructive-safety asymmetry: a Dataset authored in LiaisonScape may lose
incident Relations when opened and edited in NarrativeLine.

Record this as a future audit, not an implementation decision. The audit should
compare Relation-preservation and deletion-blocking behavior, confirmation and
cascade options, Event–Entity versus ordinary Entity–Entity Relations, self and
parallel Relations, Event endpoints, and LiaisonScape/NarrativeLine round-trip
safety. The Core Relation model must remain application-neutral; this item does
not authorize changing either application's deletion behavior.

### Reusable UI integration test harness research

NarrativeLine's bounded checkpoints `d5749cc` and `5013089` demonstrate a
useful pattern combining the Node built-in test runner, jsdom, React 19,
Vite SSR loading, production components, storage, History API, and fetch
observations. Record a research seed for whether that pattern can be reused by
another E2R application and, only after a second-app validation, whether a
shared helper repository or package is justified.

This remains research, not a shared-package commitment. Manual browser
acceptance remains necessary for responsive geometry, visual focus, touch,
hover, drag quality, and real browser Back/Forward UX. The proposed research
seed is `research/exploratory/reusable-ui-integration-test-harness.md`.

## Cross-App Locale execution update (2026-08-24)

NarrativeLine Locale Consumer is now **COMPLETE / DOCUMENTED**, based on
runtime checkpoint `ded44d6ca093431cc829d0aa47f6524ea789750a`, final automated
evidence, and EN/JA manual acceptance. This records recipient-consumer
readiness, not completion of Cross-App Locale or application release readiness.
See [NarrativeLine Locale Consumer Acceptance](narrativeline-locale-consumer-acceptance.md).

The next active implementation target is **LiaisonScape locale consumer
implementation/alignment**, followed by **Hub startup locale producer
completion / final cross-app closure**.

### Non-blocking NarrativeLine follow-ups

- The 600/601px Header/Footer vertical geometry follow-up is CLOSED / ACCEPTED
  at runtime commit `b9ad92f055df64b0a1960f22b95d3c2a25fecd05`.
- The CoordinatePanel 600/601 geometry and Space placement follow-up is CLOSED /
  ACCEPTED at runtime commit `ef0026b0a43affa227ce4c10969a231d6c92f2f4`.
- Audit nested Event Detail / Entity Detail / Entity Picker / Entity Create Header Back alignment.
- Keep Detail lower editing action areas as-is unless later evidence changes that decision.
- Polish the Detail Back Confirmation Dialog visual hierarchy, widths, and
  alignment. Current behavior, accessibility, focus, and discard semantics are
  accepted; this is visual polish only.
- Evaluate long-Timeline Add Event reachability, including sticky or persistent
  viewport-level affordances. Do not prescribe a FAB or implement this without
  a bounded design and accessibility audit.
- Evaluate NarrativeLine Detail metadata / Object ID presentation for parity
  with the LiaisonScape information-hierarchy audit, including long-ID wrapping,
  verification, and copy/accessibility affordances. Do not change runtime
  behavior or Dataset identity semantics as part of this follow-up.
- Remove the old translated-feedback ternary comment as P3 cleanup.
- Perform a remaining brittle Header selector audit only if worthwhile.

The Timeline Home placement is closed and must not be reopened as a follow-up.
These remaining items are UI consistency work after the locale-consumer
checkpoint; they are not locale-consumer blockers.

These do not reopen the accepted locale consumer checkpoint.

### Cross-app Credits alignment follow-up

During LiaisonScape locale-consumer work, localize Credits application chrome
while retaining creator/product/repository/version metadata unchanged, and
verify Close, Escape, and backdrop dismissal parity. Check Hub against the same
boundary. This is a follow-up, not a claim that either application is already
aligned.

### Version and queued research note

Review the application `0.2.0` milestone only after Cross-App Locale closes
across NarrativeLine, LiaisonScape, and Hub. Application versioning remains
separate from Dataset/schema versioning. Research shelf inventory and the Hub
concept-page update remain queued after Cross-App Locale closure.

### LS-DETAIL-RR1 Related Relation readability — ACCEPTED / CLOSED

LiaisonScape Related Relations now use structured human-readable Relation name,
Source, and Target fields. Names are trimmed for presentation; blank,
whitespace-only, and unresolved values fall back to Object ID. Event endpoint
names may be shown without making Events graph nodes or editing targets.
Duplicate names receive a conditional short Object ID hint in parentheses;
unique names remain uncluttered.

The complete Dataset incident Relation set and exact `relation.id` interaction
are preserved. Dataset identity, schema, graph visibility, technical Object
ID details, and Delete semantics are unchanged. Wide and 320px acceptance,
duplicate-name presentation, Event endpoint presentation, interaction, 191
tests, lint, build, and diff checks passed.

Remaining follow-ups are `LS-REL-ENDPOINT-ID1`, `LS-DIALOG-DRAFT1`,
`LS-CTX-R1`, and `LS-GRAPH-DRAG1`; none is accepted or implemented by RR1.

## Roadmap reconstruction checkpoint — current canonical summary

Date: 2026-08-27

This roadmap is a non-normative planning and status document. Dated planning
and historical checkpoint sections are retained as historical evidence. The
following current summary takes precedence when older sections use stale
"next", "audit needed", or "untracked" wording.

### Completed / synchronized

- LS-M2A, LS-M2B, LS-M2D, LS-DETAIL-RR1, LS-REL-ENDPOINT-ID1, and
  LS-REL-ENDPOINT-ID2 are
  **ACCEPTED / CLOSED**. The endpoint identity closure is recorded in
  [LiaisonScape Relation Endpoint Identity Acceptance](liaisonscape-relation-endpoint-identity-acceptance.md).
- Object ID / Technical details and F2-LS1 locale/shell are accepted/closed.
- LS-GRAPH-DRAG1 / D1R6R2 is accepted/closed and verified committed/pushed.
- Session 0048 publication, Anonymous Dataset Sharing research, Temporal /
  Epistemic / Names research, and the LiaisonScape modernization audit are
  committed checkpoints.

### Open / deferred

Cross-App Relation Deletion Ownership / Visibility Safety, destructive styling
parity, viewport drag-handle keyboard/focus review, `LS-CTX-R1`,
`LS-DIALOG-DRAFT1`, Edit/divider spacing, the
Cross-App Visual Style / Flatness Experiment, Initial Node Placement / LS-M3,
selectable SVG icons, the common favicon, Public Sample Dataset Refresh, and
licensing/release follow-ups remain open or deferred. None is accepted by this
checkpoint.

The Edit/divider item remains a relatively early bounded LiaisonScape spacing
fix. The Cross-App Flatness item remains a separate pre-public-release design
experiment. Neither authorizes implementation here.

### Current execution order

The active sequence is Cross-App Locale production readiness, NarrativeLine and
LiaisonScape locale consumers, Hub locale/Handoff closure, residual quality and
bounded visual/safety follow-ups, release assets and placement/display-order
audits, S3 licensing/provenance and sample redistribution checks, then
push/deployment readiness, public interoperability evidence, and the final
pre-public-release audit. This records execution shape without selecting a new
priority among the open follow-ups.

When a completed item appears in an older ledger as current-open, that wording
is historical. When the same follow-up appears in multiple sections, the
status above is the current cross-reference rather than a second authority.
No Core, Extension, schema, deletion-policy, graph-layout, visual-style,
sharing-provider, or release-version decision is made by this checkpoint.
No new ai-knowledge entry is warranted.

### NL-EVENT-ID1 — Event Human-readable Identity Disambiguation

**FOLLOW-UP / AUDIT NEEDED.** NarrativeLine should audit Event identity
presentation where Event names alone are insufficient to distinguish objects.
Candidate semantic disambiguators are visible date/time, History precision,
and History `order`, followed by a short Object ID only when ambiguity remains.
This is display-only: full Object IDs remain canonical operation identity.

Candidate surfaces include Event Picker, Related Events, Event selection,
display-order UI, search/reference pickers, and Timeline presentation. The
follow-up must not alter Event identity, History `order`, precision semantics,
Core or History schema, or Dataset behavior. No global UUID display rule is
adopted. NarrativeLine implementation and acceptance evidence are still
required.
