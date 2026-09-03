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

### Multidimensional History / Temporal Perspectives

The exploratory [E2R Multidimensional History and Temporal Perspectives](../research/exploratory/e2r-multidimensional-history-temporal-perspectives.md)
research examines multiple scoped temporal values and orderings over the same
Event set, including recorded chronology, experience/recollection order,
publication/acquisition chronology, partial order, and 1D/2D/3D projections.
It preserves current `temporalOrder` semantics, keeps semantic dimensions
separate from visual projection, and remains `EXPLORATORY / NOT ACTIVE`.
No schema, Core, Extension, NarrativeLine, LiaisonScape, or implementation
change follows from this research.

### Causal order, Relative Time, and undated Event placement

The exploratory [E2R Causal Order, Relative Time, and Undated Event Placement](../research/exploratory/e2r-causal-relative-order-and-undated-event-placement.md)
research refines the existing History/chronology direction. It keeps causal
Event-to-Event Relations distinct from explicit temporal precedence, rejects
current temporalOrder as a general partial-order representation, and records a
possible early NarrativeLine capability for relative placement without date
inference.

The capability remains conditional on a minimal relative-precedence contract,
conflict/cycle and dated-anchor semantics, and derived-display boundaries.
Human-readable Relation names do not provide causal typing. This is exploratory
research only; no schema, Relation type, History change, NarrativeLine,
LiaisonScape, or implementation change follows, and the active Initial
Placement priority remains unchanged.

### Perceived name impression and character-name generation research

The research seed [Perceived Name Impression Database and Character Name
Generation](../research/exploratory/name-impression-database-and-character-name-generation.md)
records a future study of Japanese and English surname/given-name sources,
human-perceived name impressions, quadrant or radar profiles, and a possible
character-name generator. It explicitly separates perceived impression from
demographic or historical fact and remains non-normative.

This is research/post-release growth only. It does not reopen Names P1, change
the Core `name` contract, authorize source fetching, define a Names or
Generation Extension, change priority, or create a release blocker. Any future
generator must address source licensing, privacy, bias, deterministic
reproducibility, and intentional adoption before implementation.

### Character Generator external vocabulary and large-graph research

The existing [Character Generator Application](../applications/character-generator-app.md)
entry was updated additively by
`E2R-CHARACTER-GENERATOR-EXTERNAL-VOCABULARY-AND-LARGE-GRAPH-RESEARCH-NOTE1`.
It records `CHARACTER-GENERATOR-LARGE-GRAPH-HYPOTHESIS-v1` as
`RECORDED / UNPROVEN`: an illustrative scenario of approximately 100
character Entities and potentially hundreds of Relations may later be used
to examine LiaisonScape readability, settling, routing, labels, viewport
usability, performance, and manual-correction burden. The 100-Entity value is
not a limit or requirement, and no generated Dataset enters the current PR-3
fixture corpus.

The same entry records
`EXTERNAL-VOCABULARY-ACQUISITION-PREREQUISITE-v1`, covering personal names,
Relation vocabulary, thesauri, and later organization/occupation/place
vocabularies. Any future source work must address identity, licensing,
provenance, reproducibility, drift, language/script, privacy, bias, and the
distinction between text equality and semantic identity. The bounded
`EXTERNAL-VOCABULARY-WEB-FETCH-EXPERIMENT1` remains `FUTURE / NOT STARTED`;
no source is selected and no fetch or importer is authorized.

The addition keeps raw sources, normalized vocabulary, generated proposals,
and intentionally adopted E2R data separate. Validator structural validity is
not factual/content correctness, human review remains relevant, and
deterministic non-AI generation remains possible. Explicit semantic Groups,
derived graph clusters, and visual layout clusters remain separate; Group
schema and implementation are not authorized. This direction is
research/post-release growth only, does not promote to ACTIVE or NEXT, does
not change the current Initial Placement priority, and is not a release
blocker.

### Character Generator portable vocabulary source policy

The existing [Character Generator Application](../applications/character-generator-app.md)
entry was updated additively by
`E2R-CHARACTER-GENERATOR-PORTABLE-TRAIT-VOCABULARY-SOURCE-POLICY-RESEARCH-NOTE2`.
This Research direction records `PORTABLE-VOCABULARY-NO-ATTRIBUTION-PREFERENCE-v1`:
the initial portable Character Trait Vocabulary should prefer verified Public
Domain, CC0, or equivalent no-attribution sources. Attribution-bearing,
mandatory-notice, ShareAlike/copyleft, restricted, research-only, and unclear
sources are deprioritized until source-specific rights evidence and a separate
licensing decision exist. No named source is approved.

The note separates legal attribution from informational Dataset provenance,
and distinguishes axis, concept, preferred label, aliases, related/opposite
terms, and generator output. `CHARACTER-TRAIT-VOCABULARY` is the first likely
external-vocabulary research target; `PREFERRED-LABEL-SOURCE` and
`DATASET-VOCABULARY-PROVENANCE-QUESTION-v1` remain OPEN. Future Web fetch must
pass a source-rights preflight covering identity, authoritative rights,
commercial use, modification, redistribution, derived-data redistribution,
attribution, notice, ShareAlike, restrictions, and provenance/version.

No fetch, source approval, vocabulary ingestion, dictionary, schema, Credits
UI, Character Generator, Event generation, 100-Entity Dataset, NarrativeLine,
LiaisonScape, Core, or Extension implementation occurred. The approximate
100-character multi-person Event direction remains future research, with 100
illustrative rather than a limit. Active LiaisonScape engineering priority is
unchanged and this is not a release blocker or ACTIVE/NEXT engineering work.
`EXTERNAL-VOCABULARY-WEB-FETCH-EXPERIMENT1` remains FUTURE / NOT STARTED.

### Character Generator deterministic Dataset tendency and seed research

The existing [Character Generator Application](../applications/character-generator-app.md)
entry was updated additively by
`E2R-CHARACTER-GENERATOR-DETERMINISTIC-DATASET-TENDENCY-SEED-RESEARCH-NOTE3`.
It records `DETERMINISTIC-DATASET-TENDENCY-SEED-HYPOTHESIS-v1` as
`RECORDED / UNPROVEN`: a future generator may derive a Dataset-level tendency
before generating individual Characters, Relations, and Events. Generation
should use opaque generation-specific seed material rather than actual user,
email, GitHub, repository, or machine identity. Root, private/profile,
Dataset, and domain-specific seeds remain conceptual and open; no schema,
algorithm, hash, PRNG, KDF, UUID, or bit width is selected.

The direction distinguishes exact reproduction from same-tendency regeneration,
records `SEED-ONLY-REPRODUCIBILITY = INSUFFICIENT`, and identifies generator
version, configuration/profile version, seed lineage, and vocabulary
snapshot/version as future reproducibility inputs. `DATASET-GENERATION-PROFILE-v1`
describes fictional-world distributions rather than real-user profiling.
Privacy/linkability risks, private-root versus portable-reproduction material,
cross-provider portability, generated-object identity, partial regeneration,
Relation/Event/Trait consistency, and D0–D4 determinism levels remain research
questions. The illustrative approximately-100-character graph remains a
scenario, not a limit.

The note preserves the distinction between generated proposals and Owned
Dataset data, and between Character Generator generation quality and
LiaisonScape/NarrativeLine presentation. Future G1–G7 scenarios are recorded
but were not run. Character Generator implementation, generation execution,
user/account access, Core/Extension changes, Dataset generation metadata,
VSCode/GitHub integration, LiaisonScape, and NarrativeLine changes remain NO.
This is future research only, not ACTIVE/NEXT work, not a release blocker, and
the current LiaisonScape priority is unchanged.

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

### User-defined graph Groups

The future capability note [LiaisonScape User-defined Graph
Groups](../research/exploratory/liaisonscape-user-defined-graph-groups.md)
records a user-facing goal for meaningful visible grouping and Group-aware
positioning. It keeps explicit user-defined Groups separate from derived
motif-overlap clusters: the latter remain topology-based layout/research
scopes and are not semantic Groups. Multiple membership must remain possible
in the design space. Group ownership, Entity/Event eligibility, hierarchy,
Group relations, collapse/expand, persistence, serialization, deletion,
bounds, internal layout, boundary routing, and interoperability remain open.

This is research/post-release growth only. It is not an accepted Dataset
semantic, implementation authorization, priority change, or release blocker.

### One-button high-quality automatic coordinate generation

The future capability note [LiaisonScape One-button High-quality Automatic
Coordinate Generation](../research/exploratory/liaisonscape-one-button-automatic-coordinate-generation.md)
records a long-term user-facing goal: one clear action should be able to
request a practical, high-quality Derived coordinate set with low manual
correction. "One-button" describes the workflow, not one force, one pass, or
one universal objective. A future bounded pipeline may combine global
placement, graph/motif analysis, cluster quality handling, local
regularization, route and label evaluation, and feedback.

The goal does not promise mathematical or global optimality. Generated
coordinates remain Derived until an explicit adoption/save workflow exists;
Coordinate persistence and Layout persistence remain separate. Current motif
and cluster research may contribute a local geometry stage, while explicit
user-defined Groups remain a distinct future concept. Reuse beyond
LiaisonScape is a hypothesis only.

This is research/post-release growth only. It does not change the current
research order, selected checkpoint, implementation status, or release
blocker status.

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

### Hub self-history Dataset access follow-up

The existing [E2R Self-Description Dataset](../examples/e2r-self-description.json)
is an informative, experimental dogfooding artifact that represents E2R's own
project history in E2R form. When Hub is next modified, provide an appropriate
Hub entry point for users to access this Dataset. The exact Hub placement,
presentation, public URL or Handoff behavior, and relationship to the shared
sample gallery are implementation-checkpoint decisions; this roadmap entry
does not select them. The Dataset remains owned by its current specification
repository location, and this follow-up does not authorize changing or
duplicating the Dataset.

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

The cross-app design direction is now recorded as **ACCEPTED / IMPLEMENTATION
NOT YET ALIGNED** in [Cross-App Relation Deletion Capability](cross-app-relation-deletion-capability.md): Relation is a Dataset Object;
provenance is distinct from deletion authority; capabilities are distinct; and
endpoint deletion should wait until incident Relations are explicitly
resolved. The earlier NarrativeLine count/details-with-cascade direction is
held and superseded as the preferred final model. NarrativeLine currently
cascades while LiaisonScape blocks, so this entry does not close the runtime
follow-up or authorize implementation. Capability-based handoff and
application-specific inspect/delete UX remain future bounded work.

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

### E2R Suite - long-term milestone (EXPLORATORY / DISTANT / NOT ACTIVE)

The exploratory [E2R Suite - Long-term Multi-application
Ecosystem](../research/exploratory/e2r-suite-long-term-milestone.md) record
explores a possible future ecosystem of focused interoperable E2R
applications over portable Datasets and, where appropriate, larger workspace
contexts. NarrativeLine, LiaisonScape, and Hub are treated only as early
examples of focused responsibilities; possible Evidence, Map, Search,
Reporting, multidimensional, AI-assisted, VS Code, Desktop, and third-party
surfaces remain illustrative possibilities.

This is a long-term, distant milestone with no target version, target date,
release assignment, or implementation order. It does not select a Suite shell,
relabel Hub, choose VS Code or Desktop, change Handoff, define capabilities,
change Core/Extensions/Dataset semantics, or authorize a new application or
repository. Browser apps remain first-class. The current active LiaisonScape
Initial Placement checkpoint remains unchanged and authoritative; this Suite
record does not become active or scheduled.

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
3. **Viewport toolbar collapse follow-up** — the CSS-only compactness candidate
   remains **REJECTED / reverted**. The follow-up audit is
   **DESIGN ACCEPTED / READY FOR BOUNDED IMPLEMENTATION**: the handle may own
   both pointer drag and click/keyboard disclosure, with explicit drag-versus-
   click classification and current-dimension reclamping after collapse,
   expansion, resize, and locale changes. The accepted `720px` desktop/mobile
   boundary remains unchanged; no runtime change was made. See [LiaisonScape
   Viewport Toolbar Collapse Follow-up](liaisonscape-viewport-toolbar-collapse-follow-up.md).
   - **Viewport handle tooltip visibility** — real-browser follow-up recorded:
     pointer-acquired focus can keep the tooltip visible after pointer leave.
     Do not blur the button; retain keyboard guidance and investigate a bounded
     hover-or-keyboard-focus-visible visibility refinement.
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

- **Viewport toolbar interaction semantics** — the existing drag-handle
  keyboard/focus follow-up is resolved by the [LiaisonScape Viewport Toolbar
  Collapse Follow-up](liaisonscape-viewport-toolbar-collapse-follow-up.md) as
  a **DESIGN ACCEPTED / READY FOR BOUNDED IMPLEMENTATION** combined
  drag-handle plus disclosure-trigger contract. Runtime implementation remains
  a separate checkpoint; the `720px` handoff and no-keyboard-repositioning
  boundary remain unchanged.
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

Retained follow-ups from acceptance: the bounded viewport toolbar
drag-handle/disclosure implementation following
`docs/liaisonscape-viewport-toolbar-collapse-follow-up.md`, LiaisonScape
Credits descriptive-copy localization, common E2R favicon, and Long-form
Object Content / Media responsibility research. No new knowledge candidate was
added.

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

The current status of the Dataset metadata Edit / divider spacing item is
**FIXED / ACCEPTED** at LiaisonScape runtime `72685dc fix: separate Dataset
metadata from toolbar`. The accepted change is `.dataset-metadata`;
`margin-top: 12px` was changed to `16px`. Wide and narrow browser matrices,
EN/JA, Edit mode, keyboard/focus, and no-overflow checks passed, as did
225/225 tests, lint, build, and diff-check. No Dataset behavior changed.
The original near-contact wording in item 1 remains historical; the remaining
Cross-App Flatness Experiment is separate.

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

### LS-METADATA-ALIGN1 — LiaisonScape Dataset metadata label/value alignment

**FIXED / ACCEPTED / COMPLETE / CLOSED** at LiaisonScape runtime
`ce446e5 fix: align Dataset metadata text`.

The completed bounded follow-up is supported by [LiaisonScape Dataset metadata
alignment audit](liaisonscape-dataset-metadata-alignment-audit.md), whose design
result was **READY — BASELINE ALIGNMENT ONLY**. The accepted contract is local to
the Dataset metadata label/value text pair: baseline alignment applies across
the covered responsive metadata-row regimes (wide, 721px, 720px, 601px, 600px,
and approximately 360px); Edit remains a separately aligned control inside the
nested value group; nested `dd` centering remains unchanged; horizontal spacing
remains unchanged; and the accepted `margin-top: 16px` divider spacing remains
unchanged.

This is a local LiaisonScape presentation result. It does not establish a global
baseline rule for `dt` / `dd` layouts or flex rows, a shared text baseline for
buttons, NarrativeLine layout parity, or identical metadata geometry across
applications. The earlier pre-implementation observations below remain
historical evidence; they do not represent an open defect after `ce446e5`.

Historical pre-implementation observation (before `ce446e5`): in the
post-spacing-fix browser view, the Dataset metadata label and title value were
one logical row but did not appear vertically aligned. The
label appears slightly higher than the value, weakening the perception that
they form one metadata pair. The observed Japanese example was label
`タイトル`
`灯台修復プロジェクト`. The adjacent `邱ｨ髮・` / Edit button has
its own control geometry and must be evaluated separately from the
label/value text baseline.

Possible causes are recorded for audit only and are not confirmed: different
line-height, element or default inline metrics, row `align-items`, font
metrics, grid/flex alignment, and label/value wrapper geometry.

The horizontal label-to-value distance was investigated by the completed audit
and classified **H1 / ACCEPTABLE / INTENTIONAL**. No horizontal-gap change was
required by this workstream; the earlier observation is historical and is not
an unresolved implementation defect.

The completed audit compared EN and JA; short and long Dataset titles; wide
desktop; approximately 720px; 601/600px; approximately 360px; read-only and
Edit states; keyboard focus-visible; label/value baseline; label/value
horizontal relationship; the text pair's relationship to Edit; and
overflow/wrapping. Its accepted implementation result is recorded above.

`LS-METADATA-ALIGN1` must not reopen the accepted divider-spacing fix. The
current baseline remains `.dataset-metadata { margin-top: 16px; }` from
`72685dc`. This local metadata-row alignment follow-up is separate from the
Cross-App Visual Style / Flatness Experiment, the general 600/601 responsive
topic, and any NarrativeLine parity requirement. Dataset title semantics,
`extensions.metadata.title`, modified/pending state, Save/Cancel,
Replacement Safety, and unknown-field preservation remain unchanged.

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
  When official samples eventually receive authored Stored Coordinates, prefer
  integer values where sufficient; this is an authoring convention, not a
  runtime solver or persistence rounding rule.

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

The LiaisonScape next application release decision is now accepted as
`0.2.0`, while the current metadata remains `0.1.0` until bounded release
preparation. Application versioning remains separate from Dataset/schema
versioning. Cross-App Locale, research shelf inventory, and the Hub
concept-page update remain separate cross-app or future work and do not reopen
the LiaisonScape version decision by themselves.

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

- LS-M2A, LS-M2B, LS-M2D, LS-DETAIL-RR1, LS-REL-ENDPOINT-ID1,
  LS-REL-ENDPOINT-ID2, LS-DIALOG-DRAFT1-S1, LS-DIALOG-DRAFT1-C3,
  LS-DIALOG-DRAFT1-F1, LS-DIALOG-DRAFT1-F2-E1, and the overall
  LS-DIALOG-DRAFT1 workstream are
  **ACCEPTED / CLOSED**. The endpoint identity closure is recorded in
  [LiaisonScape Relation Endpoint Identity Acceptance](liaisonscape-relation-endpoint-identity-acceptance.md).
- Object ID / Technical details and F2-LS1 locale/shell are accepted/closed.
- LS-GRAPH-DRAG1 / D1R6R2 is accepted/closed and verified committed/pushed.
- Session 0048 publication, Anonymous Dataset Sharing research, Temporal /
  Epistemic / Names research, and the LiaisonScape modernization audit are
  committed checkpoints.

### Current cross-app deletion status

Cross-App Relation Deletion Ownership / Visibility Safety has an **ACCEPTED
design direction** through `XAPP-REL-DELETE2-DESIGN1` and is now **FORMALLY
ACCEPTED / CROSS-APP IMPLEMENTATION ALIGNED / COMPLETE** through
`XAPP-REL-DELETE6-CAPABILITY-CLOSURE`. A Relation is a Dataset Object rather
than an application-owned object. An endpoint Object must not be deleted while
incident Relations remain, Entity deletion must not silently cascade-delete
those Relations, and Relation deletion must be explicit. A self Relation is
one blocker; parallel Relations remain distinct blockers, one per Relation
Object. The staged implementation paragraphs below preserve their historical
checkpoint boundaries; the [capability closure record](cross-app-relation-deletion-capability-closure.md)
is the current canonical status.

NarrativeLine has completed `NL-ENTITY-DELETE2-READINESS1` with implementation
boundary E (**atomic multi-surface alignment required**),
`NL-ENTITY-DELETE2-DESIGN2` (**READY FOR ATOMIC IMPLEMENTATION**), and
`NL-ENTITY-DELETE2-ACCEPT1` (**FORMALLY ACCEPTED / COMPLETE**). The bounded
implementation is accepted at commit `6b9e714` and is recorded in
[NarrativeLine Entity Deletion Resolution Acceptance](narrativeline-entity-deletion-resolution-acceptance.md).
It includes no-cascade Entity deletion, blocker detection, a
blocked-resolution dialog, human-readable Relation presentation, exact
per-Relation deletion, inline confirmation, safe focus and dismissal,
zero-blocker Entity deletion, EN/JA copy, responsive behavior, and tests.
This acceptance is limited to NarrativeLine and does not claim that
LiaisonScape or the cross-app implementation has reached final alignment. The
first NarrativeLine implementation excludes a general Relation editor, bulk
Delete all, targeted Handoff, provenance or directionality schema, and all
Core, Extension, or schema changes.

LiaisonScape has now completed the bounded automated implementation of
`LS-CROSS-APP-RELATION-DELETION1-BLOCKER-RESOLUTION` at commit `33d0427`,
recorded in [LiaisonScape Relation Deletion Resolution Implementation](liaisonscape-relation-deletion-resolution-implementation.md).
The implementation preserves no-cascade Entity deletion, resolves each
incident Relation through the existing Relation Detail/deletion capability,
keeps self and parallel Relations distinct, includes hidden/non-normal
Dataset Relations, and requires explicit final Entity deletion. This is not
Formal Real Edge acceptance and does not close bidirectional Cross-App
interoperability or the overall capability status.

`LS-CROSS-APP-RELATION-DELETION3-FOCUS-FIX` is **IMPLEMENTED / ACCEPTED** at
LiaisonScape commit `0a3c446` (`fix: contain deletion resolution focus`). The
fresh 2026-08-28 Real Edge rerun of
`LS-CROSS-APP-RELATION-DELETION2-REAL-EDGE-ACCEPTANCE` passed Matrix D, J, and
M: Relation confirmation Cancel restores a Resolution control, final Entity
confirmation Cancel restores `Keep Entity`, and forward/reverse Tab remains
inside the Resolution dialog. The evidence is recorded in
[LiaisonScape Relation Deletion Resolution Real Edge Acceptance](liaisonscape-relation-deletion-resolution-acceptance.md).
Bidirectional Cross-App acceptance and overall capability closure remain
pending.

### LS-CROSS-APP-RELATION-DELETION4-PRESENTATION-FOLLOWUP

**RECORDED / IMPLEMENTATION NOT STARTED** — 2026-08-28.

The Formal Real Edge acceptance for LiaisonScape Entity deletion resolution is
accepted for behavior and focus. A separate manual visual review recorded the
following presentation and copy follow-ups. They are presentation polish, not
acceptance blockers, and this record does not reopen the accepted deletion
semantics or focus contract.

1. **Human-facing blocker copy:** the Japanese `ブロッカー` wording is useful
   as internal workflow terminology but is a candidate for clearer user-facing
   copy describing the connected Relations that must be removed before the
   Entity can be deleted. The candidate copy must be aligned in English and
   Japanese before implementation; no runtime copy change is made here.
2. **Zero-blocker action spacing:** the `Keep Entity` and `Delete Entity`
   footer actions appear visually close in the resolved state. Review spacing
   and grouping using the existing action-layout conventions across desktop,
   narrow, EN, JA, and keyboard focus-visible states; do not prescribe a fixed
   margin value in this record.
3. **Keep Entity duplication:** the safe `Keep Entity` action is currently
   available in both the dialog header and footer. Review whether the same
   semantic action should remain in both locations or be consolidated, while
   preserving the existing cancellation behavior and safe focus target.
4. **Safe/destructive placement convention:** audit the placement of safe and
   destructive actions across NarrativeLine Entity/Event Detail, deletion
   resolution and confirmation, LiaisonScape Entity/Relation Detail, existing
   confirmations, and the current Entity deletion resolution dialog. Compare
   safe action position, destructive action position, Danger Zone placement,
   footer grouping, gap, wrap order, narrow-width order, Tab order, and EN/JA
   label width. This is an evidence-gathering follow-up, not a universal
   Cross-App left/right rule.

The follow-up remains separate from bidirectional Cross-App acceptance and
overall capability closure. Any implementation should be a bounded
presentation/copy checkpoint with its own desktop/narrow, EN/JA, and keyboard
acceptance evidence. It must not change Entity/Relation deletion semantics,
Relation visibility or identity, Dataset ownership, routing, viewport or
pointer behavior, Handoff, Core/Extension/schema behavior, or the accepted
focus-management fix.

### LS-CROSS-APP-RELATION-DELETION5-ACTION-HIERARCHY-AUDIT

**AUDIT COMPLETE / DESIGN DIRECTION RECORDED / IMPLEMENTATION NOT STARTED** —
2026-08-28.

The bounded action-hierarchy audit is recorded in
[Cross-App Destructive Action Hierarchy Audit](cross-app-destructive-action-hierarchy-audit.md).
NarrativeLine and LiaisonScape evidence does not establish a universal
safe-left / destructive-right rule. The reusable principle is one clearly
identified safe choice before the destructive choice in DOM and keyboard order,
with visual separation selected according to the host surface. For the current
LiaisonScape Entity deletion resolution dialog, the recommended bounded
direction is one footer `Keep Entity` followed by zero-blocker-only `Delete
Entity`, with the duplicate header `Keep Entity` removed. Narrow stacking,
final EN/JA copy, and exact spacing remain implementation work.

This is a design/source audit only. Runtime, CSS, i18n, tests, deletion
semantics, and the accepted focus fix are unchanged. Bidirectional Cross-App
acceptance and overall capability closure remain pending.

### LS-CROSS-APP-RELATION-DELETION6-PRESENTATION-IMPLEMENTATION

**AUTOMATED IMPLEMENTATION COMPLETE / FORMAL BOUNDED REAL EDGE PRESENTATION
ACCEPTANCE PENDING** — 2026-08-28.

The bounded LiaisonScape presentation implementation is complete at commit
`34d8164` (`fix: refine Entity deletion resolution presentation`) and is
recorded in [LiaisonScape Relation Deletion Resolution Presentation
Implementation](liaisonscape-relation-deletion-resolution-presentation-implementation.md).
The duplicate header `Keep Entity` was removed; the footer now keeps one safe
action before zero-blocker-only `Delete Entity`, with a bounded desktop gap and
safe-before-danger full-width narrow stacking. Human-facing EN/JA copy now
describes connected Relations without exposing `blocker` terminology.

Automated tests, lint, build, and diff checks passed. This checkpoint does not
claim formal browser visual acceptance, bidirectional Cross-App acceptance, or
capability closure. The next checkpoint is bounded Real Edge presentation
acceptance; deletion semantics and the accepted focus fix remain unchanged.

### LS-CROSS-APP-RELATION-DELETION7-PRESENTATION-REAL-EDGE-ACCEPTANCE

**FORMALLY ACCEPTED / COMPLETE** — 2026-08-28.

The bounded LiaisonScape presentation refinement passed dedicated Microsoft
Edge visual/interaction acceptance at runtime commit `34d8164`. Evidence is
recorded in [LiaisonScape Relation Deletion Resolution Presentation
Acceptance](liaisonscape-relation-deletion-resolution-presentation-acceptance.md).
P1/P2 copy, P3 duplicate-action removal, P4/P5 zero-blocker EN/JA layout, P6
desktop spacing, P7 narrow safe-before-danger stacking, and P10 focus
regression all passed. P8/P9/P11/P12 passed as bounded regression evidence.

The acceptance confirms one footer `Keep Entity`, zero-blocker-only `Delete
Entity`, visible desktop separation, full-width narrow stacking, connected
Relation wording, and preserved deletion/focus semantics. Bidirectional
Cross-App acceptance and overall capability closure remain pending.

### Application modularization readiness policy

The workspace now has an [Accepted Decision for moderate application
modularization and incremental extraction](../../ai-knowledge/decisions/application-modularization-and-incremental-extraction.md).
New application work should begin
with clear responsibility boundaries and should avoid concentrating domain
mutation, workflow orchestration, UI surfaces, interaction state,
presentation, navigation/lifecycle, and destructive-action workflow in one
root component when their independent change is already evident.

Existing applications are not subject to wholesale rewrite. Before adding
further workflow to an already large root or controller, the affected
application should perform a readiness review and identify the smallest useful
bounded extraction, or explicitly record why extraction is deferred. For
LiaisonScape's readiness review is recorded in [LiaisonScape Detail / Deletion
Modularization Readiness](liaisonscape-detail-deletion-modularization-readiness.md).
The recommended next checkpoint is a bounded Detail/deletion state-controller
extraction around `src/App.tsx`. This policy does not change the Cross-App
Relation Deletion status, accepted Dataset/Core/Extension semantics, or the
current execution order.

The following remain **Accepted implementation — visual/presentation
follow-up**, not acceptance blockers: Entity Delete button position across
blocked/resolved/zero-blocker presentation; clearer Entity/Relation line
separation in blocker identity presentation; and consistent Japanese
`つながりを削除` button wrapping across rows. They are recorded in the
acceptance document and are not implemented by this checkpoint.

The preceding visual/presentation follow-up statement is retained as
historical wording only and is superseded by this current status:
`NL-ENTITY-DELETE3-PRESENTATION1` is **IMPLEMENTED / MANUALLY ACCEPTED** at
NarrativeLine commit `f01bb88` (`fix: refine Entity deletion dialog
presentation`). Entity Delete action placement is consistent across blocked,
resolved, and zero-blocker states; blocker identity keeps endpoint context
primary and Relation ID hints on a separate secondary line when needed;
localized Remove Relation actions retain stable width and wrapping; and the
blocker dialog keeps its title, explanation, and footer visible while only the
Relation list scrolls. Browser H1-H8 and the six-part hard gate passed. DELETE2
accepted semantics remain unchanged, and this checkpoint does not claim that
LiaisonScape or the cross-app implementation has reached final alignment.

### Next Cross-App deletion follow-up sequence

The following is the near-term sequence within the Cross-App Relation
deletion workstream. It does not reorder the broader roadmap or reopen the
accepted DELETE2/DELETE3 semantics.

1. `NL-ENTITY-DELETE4-CARD-PRESENTATION1` — refine the narrow Relation
   blocker card into semantic blocks, place the Relation action at the card
   bottom, and verify normal and narrow browser presentation. The preferred
   information order is Relation name, endpoint/direction, endpoint identity
   hint when needed, Relation identity hint when needed, then the Remove
   Relation action. Exact left/right/full-width button geometry remains an
   implementation decision to be made from existing card/action conventions
   and browser evidence.
2. `E2R-CDP-STABILIZATION1` is implemented and accepted as a separate
   operational track; its helper and evidence boundary are recorded below.
3. `LS-DETAIL-DELETION-MODULARIZATION1-READINESS` and
   `LS-DETAIL-DELETION-MODULARIZATION2A-STATE-CONTROLLER` are complete. 2A is
   accepted at LiaisonScape commit `98f7751`
   (`refactor: extract detail deletion workflow state`) as a
   behavior-preserving bounded extraction. Its hook owns Detail/deletion
   workflow state and transitions; App retains Dataset, clean-baseline,
   graph-selection, graph-interaction, placement, and creation ownership.
   Do not copy NarrativeLine UI or alter its accepted semantics.
4. `LS-CROSS-APP-RELATION-DELETION1-BLOCKER-RESOLUTION` is implemented at
   LiaisonScape commit `33d0427` with automated verification, and its
   `LS-CROSS-APP-RELATION-DELETION2-REAL-EDGE-ACCEPTANCE` rerun is accepted
   after `LS-CROSS-APP-RELATION-DELETION3-FOCUS-FIX` at commit `0a3c446`.
5. Run final Cross-App interoperability acceptance in both directions,
   including self Relations, parallel Relations, hidden/non-normal
   presentation, and ambiguous endpoint/Relation identity.
6. Close the capability status from `design accepted / implementation not yet
   aligned` after the preceding evidence is complete.

### XAPP-REL-DELETE3 bidirectional acceptance (2026-08-28)

`XAPP-REL-DELETE3-BIDIRECTIONAL-ACCEPTANCE` was executed as an acceptance-only
checkpoint and is recorded in
[Cross-App Relation Deletion Bidirectional Acceptance](cross-app-relation-deletion-bidirectional-acceptance.md).
The result is **FORMAL BIDIRECTIONAL ACCEPTANCE: FAIL**. NarrativeLine at
`3b2078f` and LiaisonScape at `34d8164` passed the automated gates and the
bounded Relation, self, parallel, hidden/Event, ambiguity, cancellation, and
extension-preservation checks. LiaisonScape final Entity deletion passed, but
NarrativeLine retained `entity-nl-final` after its two incident Relations were
resolved and final Entity deletion was confirmed. No runtime source was
changed; no runtime commit was created.

The final Cross-App acceptance remains pending, and capability closure remains
deferred. X11 must be resolved and the full bidirectional matrix, including
locale parity, must be re-accepted before item 6 can advance. No targeted
Handoff closure is claimed.

### XAPP-REL-DELETE4 — NarrativeLine final Entity deletion fix (2026-08-28)

**IMPLEMENTED / AUTOMATED GREEN / EXPLORATORY REAL EDGE PASS** at NarrativeLine
commit `7a695b3` (`fix: complete final Entity deletion`). The X11 stale-state
overwrite risk was corrected with a functional Dataset updater, and a focused
real-App regression test now covers explicit resolution of both incident
Relations, cancellation and reopening of final Entity confirmation, and
confirmed target deletion with preservation of unrelated Entity/Event data.
The full 187-test suite, lint, build, and diff checks passed; a fresh Edge
smoke also passed the export assertions.

The prior `XAPP-REL-DELETE3-BIDIRECTIONAL-ACCEPTANCE` FAIL record is preserved.
Formal bidirectional acceptance must be rerun in both directions, including
the full X1-X14 matrix and locale parity; capability closure remains deferred.
The separately recorded NarrativeLine endpoint-separator mojibake and
LiaisonScape generic-dialog button-spacing findings remain presentation
follow-ups and were not fixed in this checkpoint. LiaisonScape runtime source
and the pre-existing dirty CDP diagnostic playbook were unchanged.

### XAPP-REL-DELETE5 bidirectional reacceptance (2026-08-28)

`XAPP-REL-DELETE5-BIDIRECTIONAL-REACCEPTANCE` is **FORMALLY ACCEPTED / COMPLETE**
at NarrativeLine `7a695b3` and LiaisonScape `34d8164`. The full X1-X14
Cross-App matrix passed in both directions, including the repaired
NarrativeLine final Entity deletion, LiaisonScape final Entity deletion,
self/parallel/hidden Relations, duplicate identity, Cancel safety, unknown
Extension preservation, Dataset export/open transfer, and EN/JA semantic
parity. NarrativeLine (187), LiaisonScape (216), CDP helper (4), and e2r-spec
validation gates were green; dedicated Edge evidence confirmed native dialog
state `closed`.

The original `XAPP-REL-DELETE3-BIDIRECTIONAL-ACCEPTANCE` FAIL record remains
historical and unchanged. Bidirectional acceptance is now closed for this
bounded workstream, but capability closure, targeted Handoff discovery, and
the deferred NarrativeLine endpoint-separator mojibake and cross-app generic
confirmation button-spacing findings remain separate follow-ups. No runtime
source or ai-knowledge change was made in this acceptance-only checkpoint.

### XAPP-REL-DELETE6 capability closure (2026-08-28)

`XAPP-REL-DELETE6-CAPABILITY-CLOSURE` is **FORMALLY ACCEPTED / CROSS-APP
IMPLEMENTATION ALIGNED / COMPLETE**. The closure is recorded in [Cross-App
Relation Deletion Capability Closure](cross-app-relation-deletion-capability-closure.md).
The canonical status is now:

- Cross-App Relation deletion design: **ACCEPTED**;
- NarrativeLine implementation: **ACCEPTED / COMPLETE**;
- LiaisonScape implementation: **ACCEPTED / COMPLETE**;
- bidirectional Dataset interoperability: **FORMALLY ACCEPTED / COMPLETE**;
- bounded Cross-App Relation deletion capability: **COMPLETE / CLOSED**.

The closure covers the accepted semantic contract, explicit Relation deletion,
no silent cascade, hidden and Event-related Relation handling, self and
parallel Relation identity, final explicit Entity deletion, unrelated Dataset
preservation, and the successful X1-X14 matrix in both directions. The prior
XAPP-REL-DELETE3 FAIL record remains historical and unchanged; its X11 defect
was corrected by NarrativeLine commit `7a695b3` and passed in the XAPP-REL-DELETE5
reacceptance.

Targeted capability-based Handoff, capability discovery/manifest, target-app
discovery, Handoff URL syntax, provenance, generalized Relation editing, and
bulk deletion remain separate future work. The deferred NarrativeLine endpoint
separator mojibake and generic Cross-App confirmation button-spacing findings
also remain separate presentation follow-ups. No Core, Extension, schema,
runtime, or ai-knowledge change was made by this documentation-only closure.

### XAPP-CAPABILITY-HANDOFF1 discovery audit (2026-08-28)

`XAPP-CAPABILITY-HANDOFF1-DISCOVERY-AUDIT` is **AUDIT COMPLETE / DESIGN
DIRECTION RECORDED / IMPLEMENTATION NOT AUTHORIZED**. The audit is recorded in
[Cross-App Capability Handoff Discovery Audit](cross-app-capability-handoff-discovery-audit.md).

The source audit confirms that NarrativeLine and LiaisonScape implement the
accepted Dataset Handoff v0 `datasetUrl` startup flow, while Hub currently
generates explicit sample links to those applications. None of the three
currently publishes or consumes a target Object plus required-capability
declaration for runtime routing. Existing Cross-App Relation deletion remains
**FORMALLY ACCEPTED / CROSS-APP IMPLEMENTATION ALIGNED / COMPLETE** and is not
reopened by this audit.

The recorded first bounded direction is a reviewed static table of first-party
known applications with operation-level capabilities such as `inspect Relation`
and `delete Relation`, canonical full target Object IDs, explicit user action,
recipient-side verification, no network dependency, no automatic third-party
discovery, and a safe no-recipient fallback. Hub may later publish or explain
the table but is not a required registry authority.

The next bounded step is target contract design covering Dataset state,
canonical target identity, required capability, recipient selection,
URL/history ownership, stale target and stale metadata behavior, trust,
privacy, and user confirmation. No manifest schema, URL syntax, runtime
discovery, automatic redirect, registry, Core, Extension, schema, or
application-source change is authorized by this audit.

### XAPP-CAPABILITY-HANDOFF2 target contract design (2026-08-28)

`XAPP-CAPABILITY-HANDOFF2-TARGET-CONTRACT-DESIGN` is **DESIGN ACCEPTED / URL
CONTRACT NOT YET DESIGNED / IMPLEMENTATION NOT AUTHORIZED**. The accepted
transport-independent contract is recorded in [Cross-App Capability Handoff
Target Contract](cross-app-capability-handoff-target-contract.md).

The minimum semantic tuple is a transferable Dataset context, the canonical
full target Object ID, and one primary required capability. `targetObjectType`
is an optional consistency hint and never replaces the canonical ID. The first
capability identifiers are application-neutral `relation.inspect` and
`relation.delete`; deletion requires inspection as a safety prerequisite and
never means immediate mutation. Source application identity is optional
diagnostic context, recipient identity is resolved separately, locale is
orthogonal, and a separate Target Contract version must not be confused with
Core, Extension, Dataset, or application version.

Missing target, type mismatch, stale capability metadata, and unsupported
capability all fail non-destructively. Inspect-only support is not a silent
downgrade from delete. Existing Dataset Handoff v0 `datasetUrl` semantics and
Hub sample links remain unchanged. The Cross-App Relation deletion capability
remains **FORMALLY ACCEPTED / CROSS-APP IMPLEMENTATION ALIGNED / COMPLETE**.

The next bounded step is recorded below as URL/transport contract design. No
Core, Extension, schema, application source, capability manifest, runtime
discovery, automatic redirect, or registry change is authorized by this
checkpoint.

### XAPP-CAPABILITY-HANDOFF3 URL/transport contract design (2026-08-28)

`XAPP-CAPABILITY-HANDOFF3-URL-TRANSPORT-CONTRACT-DESIGN` is **DESIGN ACCEPTED /
TRANSPORT CONTRACT DEFINED / IMPLEMENTATION NOT AUTHORIZED**. The accepted
transport is recorded in [Cross-App Capability Handoff URL/Transport
Contract](cross-app-capability-handoff-url-transport-contract.md).

The first direction extends Dataset Handoff v0's flat URL fragment. It carries
the existing retrievable absolute HTTPS `datasetUrl`, the canonical full
`targetObjectId`, optional exact-case `targetObjectType`,
`requiredCapability`, and `targetContractVersion=1`. Targeted requests are
startup-only, validate duplicates and malformed values, preserve the existing
locale contract, and never turn Handoff into an automatic deletion command.
`relation.delete` still requires safe inspection/presentation and explicit user
action; unknown, stale, mismatched, or unsupported input fails
non-destructively.

The first transport does not carry inline or current-edited Dataset state,
pending drafts, recipient identity, source ownership, or capability
negotiation. Existing v0 links remain unchanged, and an old recipient may
open the Dataset but cannot claim that targeted intent was fulfilled. Cross-App
Relation deletion remains **FORMALLY ACCEPTED / CROSS-APP IMPLEMENTATION
ALIGNED / COMPLETE**. Endpoint-separator and dialog-spacing findings remain
deferred.

The next bounded step is the current Dataset transfer design below, followed by
an implementation-readiness audit. Runtime implementation requires explicit
authorization from a later checkpoint.

### XAPP-CAPABILITY-HANDOFF4 current Dataset transfer design (2026-08-28)

`XAPP-CAPABILITY-HANDOFF4-CURRENT-DATASET-TRANSFER-DESIGN` is **DESIGN
ACCEPTED / FIRST CURRENT-DATASET TRANSFER BOUNDARY DEFINED / IMPLEMENTATION
NOT AUTHORIZED**. The design is recorded in [Cross-App Capability Handoff
Current Dataset Transfer Design](cross-app-capability-handoff-current-dataset-transfer-design.md).

The accepted first direction has two lanes. A clean Dataset with a known
retrievable URL may use the existing targeted URL Handoff. A modified committed
Dataset or a local Dataset without a source URL uses explicit Export followed by
explicit Open in the recipient; target metadata is not embedded in Core or an
Extension, so the user re-selects the target. Pending work blocks current-state
Handoff until explicitly committed or discarded. Modified plus pending work
requires both boundaries to be resolved.

The transfer is a committed snapshot at export time, using the existing
validated export/serialization path and preserving unknown valid fields and
Extensions. It does not introduce revision fields, fingerprints, hosted
uploads, transfer tokens, live synchronization, or a new URL parameter. No
silent public sharing, stale URL fallback, draft transfer, automatic target
action, or destructive mutation is authorized. Discovery, Target Contract,
URL/Transport Contract, and Cross-App Relation deletion remain accepted; the
endpoint-separator and dialog-spacing findings remain deferred.

The next bounded step is implementation-readiness review for this two-lane
boundary: exact Export/Open ownership, round-trip preservation, dirty/pending
transitions, failure states, and manual target re-selection. Runtime work
requires explicit authorization from that checkpoint.

### XAPP-CAPABILITY-HANDOFF5 implementation readiness (2026-08-28)

`XAPP-CAPABILITY-HANDOFF5-IMPLEMENTATION-READINESS` is **READINESS AUDIT
COMPLETE / READY FOR A BOUNDED IMPLEMENTATION CHECKPOINT / IMPLEMENTATION NOT
AUTHORIZED**. The audit is recorded in [Cross-App Capability Handoff
Implementation Readiness](cross-app-capability-handoff-implementation-readiness.md).

The audit confirms that the accepted contracts can be implemented with
responsibility-based application modularization. e2r-spec owns contract
semantics; each recipient owns its supported capability and safe landing
surface; the sender owns a small reviewed first-party catalog and current
Dataset availability gate; and Hub remains an optional human-facing
publication surface. No shared runtime package is introduced at this stage.

The first bounded implementation target is LiaisonScape as the recipient:
targeted parsing, exact Relation resolution, and safe `relation.inspect`
landing on the existing Relation Detail surface. The first meaningful sender
direction is then NarrativeLine's existing Entity deletion-resolution Relation
row to LiaisonScape. It is inspect-only, does not open deletion confirmation,
and does not authorize mutation. The current Dataset transfer two-lane safety
boundary remains in force: clean known HTTPS source URLs may use targeted
Handoff; modified/local or pending state uses explicit Export then Open.

The next sequence is recipient implementation and acceptance, followed by
targeted delete-intent compatibility, NarrativeLine source URL tracking and
availability gating, the contextual sender trigger, and cross-app Real Edge
acceptance. No runtime, Core, Extension, schema, Validator, Hub routing, or
ai-knowledge change is authorized by this readiness audit. Endpoint-separator
and dialog-spacing findings remain deferred, and Cross-App Relation deletion
remains closed.

### XAPP-CAPABILITY-HANDOFF6 LiaisonScape recipient inspect (2026-08-28)

`XAPP-CAPABILITY-HANDOFF6-LS-RECIPIENT-INSPECT1` is **IMPLEMENTED / AUTOMATED
GREEN / BOUNDED BROWSER SMOKE PASS** at LiaisonScape commit `0f7fe1c`. The
implementation record is [LiaisonScape Capability Handoff Relation Inspect
Implementation](liaisonscape-capability-handoff-relation-inspect-implementation.md).

LiaisonScape now parses the accepted targeted flat fragment while preserving
ordinary Dataset Handoff v0 behavior, reuses the existing HTTPS Dataset
acquisition and validation path, resolves the exact canonical Relation ID,
checks the optional exact `Relation` type hint, and lands on the existing
Relation Detail surface for `relation.inspect`. Missing targets, type
mismatches, malformed targeted metadata, and unsupported capabilities fail
non-destructively. `relation.delete` is not implemented here; it cannot open
Delete Confirmation or mutate the Dataset.

The runtime gate passed with 223 tests, lint, build, and diff checks. A bounded
Edge/CDP smoke against the public Lighthouse Dataset opened
`clara-thomas-supervises` in Relation Detail with no confirmation dialog; the
helper's native-dialog state was verified `closed` after its explicit probe.
The targeted and locale fragment remained inspectable. No NarrativeLine,
Hub, capability table, Core, Extension, schema, or Validator change was made.
The next bounded step is the separate `relation.delete` intent compatibility
checkpoint. Cross-App Relation deletion remains closed; endpoint-separator and
dialog-spacing findings remain deferred.

### XAPP-CAPABILITY-HANDOFF7 LiaisonScape recipient Relation delete intent (2026-08-28)

`XAPP-CAPABILITY-HANDOFF7-LS-RECIPIENT-DELETE-INTENT1` is **IMPLEMENTED /
AUTOMATED GREEN / BOUNDED BROWSER SMOKE PASS** at LiaisonScape commit
`95a8c56`. The implementation record is [LiaisonScape Capability Handoff
Relation Delete Intent Implementation](liaisonscape-capability-handoff-relation-delete-intent-implementation.md).

LiaisonScape now treats accepted `relation.delete` as a non-destructive intent:
it reuses Dataset Handoff v0 acquisition, resolves the exact canonical Relation,
checks the optional `Relation` type hint and the bounded recipient capability,
and lands on the existing Relation Detail surface. The existing explicit Delete
action remains available, but Handoff receipt does not open Confirmation, focus
the destructive control, inject input, or mutate the Dataset. `relation.inspect`
and ordinary v0 behavior remain green; missing, mismatched, malformed, and
unknown targeted requests fail safely.

The LiaisonScape gate passed with 225 tests, lint, build, and diff checks. A
dedicated Edge/CDP smoke confirmed the exact `clara-thomas-supervises` landing,
closed native-dialog state, no initial destructive focus, explicit Delete then
Cancel safety, locale coexistence, reload, and Back/Forward behavior. The
closed Cross-App Relation deletion capability remains closed. NarrativeLine
sender implementation is the next bounded step; capability table publication,
Hub changes, Core/Extension/schema changes, endpoint-separator mojibake, and
dialog-spacing findings remain deferred.

### XAPP-CAPABILITY-HANDOFF8-NL-SENDER1 (2026-08-28)

`XAPP-CAPABILITY-HANDOFF8-NL-SENDER1` is **BLOCKED / NO RUNTIME CHANGE**. The
requested NarrativeLine sender slice was stopped at the pre-implementation
gate and is recorded in [NarrativeLine Capability Handoff
Sender Implementation](narrativeline-capability-handoff-sender-implementation.md).

At that checkpoint, the readiness document still stated **IMPLEMENTATION NOT
AUTHORIZED** and did not record whether targeted recipient navigation was
same-tab or new-tab/window. No sender button, URL builder, source URL state,
recipient config, or navigation handler was added. Modified/local/pending
Dataset safety boundaries and the explicit Export/Open fallback remain
unchanged. Generic capability-table publication, Hub changes, endpoint-
separator work, and dialog-spacing work remain deferred.

The next bounded step is to update the readiness authority with explicit
sender authorization and navigation behavior, then retry the sender
implementation.

### XAPP-CAPABILITY-HANDOFF8A-SENDER-NAVIGATION-AUTHORIZATION (2026-08-28)

`XAPP-CAPABILITY-HANDOFF8A-SENDER-NAVIGATION-AUTHORIZATION` is **DESIGN
COMPLETE / BOUNDED NARRATIVELINE SENDER AUTHORIZED / NO RUNTIME CHANGE**. The
design record is [Cross-App Capability Handoff Sender Navigation
Authorization](cross-app-capability-handoff-sender-navigation-authorization.md).

The two Handoff8 blockers are resolved. The next bounded NarrativeLine sender
implementation is authorized for the existing Entity deletion-resolution
Relation row and `relation.inspect` only. Navigation is **same-tab by default**
using a native anchor and a pure targeted URL builder; ordinary browser
modifier behavior may open another context. This avoids popup-blocker and
opener-security concerns without forcing focus or a new window. The sender
must use a reviewed, environment-aware LiaisonScape configuration, and the
existing clean/no-pending/known-HTTPS-source gate and explicit Export/Open
fallback remain mandatory.

The Handoff8 blocked attempt remains historical evidence. Discovery, Target
Contract, Transport Contract, Current Dataset Transfer, Relation deletion
closure, and both LiaisonScape recipient capabilities remain accepted or
implemented. Generic capability-table publication, Hub targeted Handoff,
endpoint-separator work, dialog-spacing work, and formal cross-app acceptance
remain deferred. The next checkpoint is the bounded NarrativeLine sender
implementation; this authorization does not begin it automatically.

### XAPP-CAPABILITY-HANDOFF8B-NL-SENDER-IMPLEMENTATION1 (2026-08-28)

`XAPP-CAPABILITY-HANDOFF8B-NL-SENDER-IMPLEMENTATION1` is **IMPLEMENTED /
AUTOMATED GREEN / BOUNDED CROSS-APP SMOKE PARTIAL**. The implementation record
is [NarrativeLine Capability Handoff Sender Runtime Implementation](narrativeline-capability-handoff-sender-runtime-implementation.md).

NarrativeLine now exposes the authorized Entity deletion-resolution Relation
row sender surface for `relation.inspect`. It uses a pure targeted URL builder,
the accepted flat-fragment fields, the canonical full Relation ID, an
environment-aware LiaisonScape configuration, and a native same-tab `<a
href>` with no imperative navigation. Clean/no-pending/known-HTTPS-source
eligibility gates targeted navigation. Modified, local, source-less, invalid,
and pending state retain the existing safe explicit Export/Open boundary; no
Dataset or deletion mutation was added.

NarrativeLine verification is green: 194 tests passed, lint passed, build
passed, and diff checking passed. A dedicated Edge smoke confirmed the sender
surface, exact URL fields, same-tab navigation to the public LiaisonScape
origin, same Dataset acquisition, and absence of browser/delete confirmation.
The current public deployment did not expose the targeted Relation Detail
after fragment loading, so exact public recipient landing remains unclaimed
and should be reconciled in a later compatibility/acceptance checkpoint.

The historical Handoff8 BLOCKED record and Handoff8A authorization remain
unchanged. Cross-App Relation deletion remains closed; discovery, target and
transport contracts, current-Dataset transfer design, readiness, and both
LiaisonScape recipient implementations remain accepted or implemented. No
generic capability table, Hub targeted Handoff, Core/Extension/schema change,
endpoint-separator correction, dialog-spacing correction, or ai-knowledge
change was made.

The next bounded step is a fresh recipient deployment/real-edge compatibility
check for exact Relation Detail landing. Formal Cross-App Capability Handoff
acceptance, generic discovery, modified-Dataset automatic transfer, and other
deferred work remain separate.

### XAPP-CAPABILITY-HANDOFF9-NL-LS-REAL-EDGE-ACCEPTANCE1 (2026-08-28)

`XAPP-CAPABILITY-HANDOFF9-NL-LS-REAL-EDGE-ACCEPTANCE1` is **FORMALLY ACCEPTED /
CURRENT SOURCE REVISIONS**. The acceptance record is [Cross-App Capability
Handoff NL-LS Real Edge Acceptance](cross-app-capability-handoff-nl-ls-real-edge-acceptance.md).

Current-source revisions `158adec` (NarrativeLine), `95a8c56` (LiaisonScape),
and `39d6e08` (e2r-spec record) passed the fresh automated gates and bounded
Edge acceptance. Ordinary Dataset Handoff v0, the authorized NL native-anchor
sender, exact `relation.inspect` targeting, local LS Detail landing, hidden /
self / parallel / same-name identity checks, modified/local/pending safety,
locale coexistence, delete-intent safety, and Back/Forward behavior are
accepted at the current source revisions. Cross-App Relation deletion remains
closed.

The public deployment state is deliberately separate:
**PUBLIC DEPLOYMENT PARITY NOT YET ACCEPTED**. Prior public observation
established Dataset acquisition but not targeted Relation Detail landing, and
a fresh public probe encountered a CDP navigation timeout. This does not
authorize a runtime fix, deployment, or push; the next bounded step is public
revision/parity verification.

Handoff8 BLOCKED history and Handoff8A authorization remain unchanged.
Generic capability-table publication, dynamic discovery, Hub targeted Handoff,
modified-Dataset automatic transfer, endpoint-separator work, dialog-spacing
work, third-party interoperability, and ai-knowledge changes remain deferred.

### XAPP-CAPABILITY-HANDOFF10-PUBLIC-DEPLOYMENT-PARITY-READINESS1 (2026-08-28)

`XAPP-CAPABILITY-HANDOFF10-PUBLIC-DEPLOYMENT-PARITY-READINESS1` is
**DIAGNOSIS COMPLETE / PUSH-DEPLOY NOT PERFORMED**. The readiness record is
[Cross-App Capability Handoff Public Deployment Parity Readiness](cross-app-capability-handoff-public-deployment-parity-readiness.md).

Current-source acceptance remains green at NarrativeLine `158adec`,
LiaisonScape `95a8c56`, and the e2r-spec acceptance record `fb05042`.
Read-only remote checks confirmed that both required runtime commits remain
local-only on their remote `main` branches. Public NL and LS Pages URLs are
reachable, but the deployed bundles do not expose the current targeted
Handoff terms; public Relation Detail landing and deployed commit identity
therefore remain unaccepted. The formal classification is **A — REQUIRED
RUNTIME COMMITS NOT PUSHED**, with **C — DEPLOYED REVISION UNKNOWN** also
confirmed. No config mismatch or confirmed service-worker cache was found.

The documented decision is **READY TO AUTHORIZE PUSH/DEPLOY**, without taking
that action in this checkpoint. If authorized later, deploy LiaisonScape first,
verify its public targeted recipient and ordinary v0 paths, then deploy
NarrativeLine and verify the sender-to-public-recipient path. Presentation
issues, runtime fixes, generic discovery, Hub targeted Handoff, and
ai-knowledge changes remain deferred.

### XAPP-CAPABILITY-HANDOFF11-LS-RECIPIENT-PUBLIC-DEPLOYMENT1 (2026-08-28)

`XAPP-CAPABILITY-HANDOFF11-LS-RECIPIENT-PUBLIC-DEPLOYMENT1` is **PUBLIC
LIAISONSCAPE RECIPIENT PARITY ACCEPTED**. The deployment record is
[LiaisonScape Capability Handoff Public Recipient Deployment](liaisonscape-capability-handoff-public-recipient-deployment.md).

With explicit recipient-first authorization, LiaisonScape `95a8c56` was pushed
to `main` and deployed by the existing GitHub Pages workflow. Actions run
`33144996627` completed successfully for that exact head. Fresh dedicated Edge
verification passed ordinary Dataset Handoff v0, direct `relation.inspect`
targeting of `clara-thomas-supervises`, canonical self-Relation targeting,
non-destructive `relation.delete` intent, malformed/unsupported safe failure,
locale, reload, Back/Forward, and native-dialog closure. Public recipient
parity is accepted.

NarrativeLine public sender parity remains **NOT YET ACCEPTED** and full public
NL-to-LS E2E remains separate. Cross-App Relation deletion remains CLOSED.
Handoff8 historical BLOCKED evidence, generic capability-table/discovery,
Hub targeted Handoff, `Remove connection` presentation, endpoint separator,
dialog spacing, runtime fixes, and ai-knowledge changes remain deferred.

### XAPP-CAPABILITY-HANDOFF12-NL-SENDER-PUBLIC-DEPLOYMENT1 (2026-08-28)

`XAPP-CAPABILITY-HANDOFF12-NL-SENDER-PUBLIC-DEPLOYMENT1` is **PUBLIC
NARRATIVELINE SENDER AND PUBLIC NL-to-LS E2E ACCEPTED**. The deployment and
browser evidence is recorded in [Public NarrativeLine to LiaisonScape
Capability Handoff Acceptance](cross-app-capability-handoff-public-nl-ls-acceptance.md).

With explicit authorization, NarrativeLine `158adec` was pushed to `main` and
deployed through the existing GitHub Pages workflow. Actions run `33146076558`
completed successfully for the exact head. Fresh public Edge verification
passed ordinary Dataset Handoff v0, the Entity deletion blocker sender,
`relation.inspect` URL generation, exact canonical `clara-lighthouse` landing,
hidden Event-related `lead-clara` landing, modified/pending safety, English and
Japanese locale transport, reload, Back/Forward, no Dataset mutation, and
native-dialog closure.

LiaisonScape `95a8c56` was unchanged and was not redeployed; its public
recipient parity remains accepted by Handoff11. Hub and ai-knowledge were
untouched. Cross-App Relation deletion remains CLOSED. Generic capability
discovery, `relation.delete` emission from NarrativeLine, presentation work,
and future capability expansion remain separate and deferred.

### E2R-CDP-STABILIZATION1 — CDP/browser acceptance workflow

**IMPLEMENTED / ACCEPTED** in the cross-application verification-tooling
checkpoint. The reusable helper is located at
[`tools/edge-cdp/`](../tools/edge-cdp/) and is owned by e2r-spec. It uses the
Node.js 24 built-in WebSocket implementation and does not add a production
dependency or change application runtime source.

The recent browser evidence showed that a native reload/discard/cancel dialog
can stop a scenario while remaining visible, and background CDP/DOM
evaluation can otherwise continue against an unclear browser state. Native
dialog state is therefore an acceptance precondition. If a native dialog is
open, it must be explicitly handled through the known page target and
`Page.handleJavaScriptDialog`, then its closed state must be verified before
the scenario continues. If it remains open, the run is not visual/manual
PASS; any background DOM result is **programmatic evidence only** and must be
reported as such. Browser-native dialog state, application `ModalDialog`, and
background DOM state must not be conflated.

Checkpoint-specific fixtures and selectors remain temporary evidence rather
than generic helper behavior. Reusable helper scope is limited to target
discovery, WebSocket connection, `Runtime.evaluate`, focus inspection, native
dialog handling, acceptance-state reporting, and target/URL reporting.
Automated helper tests cover target selection, command/event separation,
focus inspection, dialog state transitions, acceptance blocking, and explicit
recovery. The existing dirty playbook is preserved unchanged; the clean helper
documentation and implementation live in e2r-spec.

Real Edge smoke evidence on 2026-08-27 used a dedicated loopback CDP profile
against LiaisonScape. Target discovery, WebSocket connection,
`Runtime.evaluate("document.title")`, focus inspection, and explicit
native-dialog recovery passed. The helper reported initial native-dialog state
as `unknown` and blocked visual/manual acceptance; after an explicit no-dialog
probe it reported `closed` and allowed acceptance. A real `alert` reproduced
the `open` state, blocked visual/manual PASS, and returned to `closed` after
explicit `accept: false` recovery. Machine-specific target IDs and WebSocket
URLs are intentionally not recorded here.

### LS-DETAIL-DELETION-MODULARIZATION1-READINESS

**READINESS AUDIT COMPLETE / READY FOR A BOUNDED EXTRACTION.** The audit is
recorded in [LiaisonScape Detail / Deletion Modularization
Readiness](liaisonscape-detail-deletion-modularization-readiness.md). It
recommends Option A: one narrow Detail/deletion application workflow
coordinator, while App retains Dataset and clean-baseline ownership, and graph
selection and graph-interaction state remain outside the first boundary.

The follow-up `LS-DETAIL-DELETION-MODULARIZATION2A-STATE-CONTROLLER` is now
**IMPLEMENTED / ACCEPTED** at LiaisonScape commit `98f7751`. It extracts the
bounded Detail/deletion state and transition controller into
`src/hooks/useDetailDeletionWorkflow.ts`; Dataset mutation remains behind
App's existing `updateDataset` boundary, and graph selection/placement remain
App-owned. LiaisonScape passed 209 tests, lint, build, and diff check.

The LiaisonScape-native Cross-App blocker-resolution implementation is recorded
at commit `33d0427` with automated verification. Its modal focus remediation is
accepted at commit `0a3c446`, with the 2026-08-28 fresh Real Edge rerun
recorded in [LiaisonScape Relation Deletion Resolution Real Edge Acceptance](liaisonscape-relation-deletion-resolution-acceptance.md).
Final Cross-App interoperability and Dataset/Core/Extension/schema changes
remain separate follow-up work.

### Open / deferred

destructive styling
parity, viewport toolbar drag-handle / disclosure implementation, `LS-CTX-R1`, the
Cross-App Visual Style / Flatness Experiment, Initial Node Placement / LS-M3,
selectable SVG icons, the common favicon, Public Sample Dataset Refresh, and
licensing/release follow-ups remain open or deferred. None is accepted by this
checkpoint.

The Cross-App Flatness item remains a separate pre-public-release design
experiment. It is not authorized by this checkpoint. Delete Confirmation safe
initial focus is closed separately as `LS-DIALOG-DRAFT1-F1`; general dialog
initial-focus policy remains outside those bounded closures. Create Entity Name
autofocus is closed as `LS-DIALOG-DRAFT1-F2-E1`; Create Relation initial focus
and Credits initial focus remain separate open decisions.

The overall `LS-DIALOG-DRAFT1` closure is recorded in the canonical
[LiaisonScape Relation Endpoint Identity Acceptance](liaisonscape-relation-endpoint-identity-acceptance.md)
record. Its outside-dialog Creation click contract is no-dismissal with draft
retention; this does not convert Creation to Credits-style backdrop dismissal.
Action grouping and the two visual follow-ups remain separate and do not block
the behavioral closure.

### REL-DIRECTIONALITY1 / PRE-RELEASE-FEATURE-RECONSIDERATION1

The full planning record is [Pre-public-release Feature Reconsideration](pre-public-release-feature-reconsideration.md).
The detailed Relation directionality supersession is already recorded
separately and complete in [Relation Endpoint UI / Directionality
Follow-up](relation-endpoint-ui-directionality-follow-up.md). The remaining
endpoint vocabulary work is a later all-surface Cross-App audit covering
terminology, arrows, and separators across LiaisonScape and NarrativeLine.

The [Relation Direction and Arrow Appearance](../research/exploratory/relation-direction-and-arrow-appearance.md)
decision reconciles the prior Outcome B Bidirectional question:
**RESEARCH RECONCILED / PRESENTATION-ONLY DIRECTIONALITY MODEL ACCEPTED**.
Normal, Reverse, Undirected, and Bidirectional are accepted as presentation-only
concepts for one canonical Relation. Display changes never infer or mutate
canonical semantics, and Bidirectional does not automatically create reciprocal
Relations. Implementation, final labels/artwork, persistence, and endpoint
vocabulary remain separate follow-ups; no runtime/Core/schema change occurred.

The [Relation Endpoint Vocabulary Audit](../research/exploratory/relation-endpoint-vocabulary-audit.md)
now records **VOCABULARY MODEL ACCEPTED / RUNTIME SURFACE ADOPTION REMAINS**.
The preferred/default English generic endpoint term is `Connected objects`,
while technical `Endpoints` remains available as specification vocabulary and
surface-specific grammar may use alternatives such as `Connected to`. The
Japanese generic endpoint UI term `つながり先` remains accepted as
direction-neutral and Entity/Event-capable, without replacing canonical
Source/Target roles. Runtime adoption and surface-specific copy remain
separate bounded follow-ups. Visual directionality remains separate, and no
implementation or copy change is authorized.

The [Relation Endpoint Vocabulary Surface Adoption Audit](../research/exploratory/relation-endpoint-vocabulary-surface-adoption-audit.md)
finds no current surface where adding `Connected objects` / `つながり先`
improves clarity enough to justify runtime copy adoption. Source/Target remains
intentional in Create/Edit, technical Detail, and destructive-review identity;
type-specific Entity/Event lists also remain unchanged. A separate bounded
LiaisonScape accuracy follow-up is recorded for mixed Event endpoints currently
shown under `Source Entity` / `Target Entity`; cross-app deletion-review parity
is only a future review candidate. **VOCABULARY ACCEPTED / NO CURRENT GENERIC
RUNTIME CHANGE REQUIRED**.

The subsequent bounded LiaisonScape deletion-blocker decision supersedes only
the prior deletion-blocker classification. Its implementation candidate is
**LIAISONSCAPE DELETION-BLOCKER GENERIC ENDPOINT PRESENTATION ACCEPTED /
RUNTIME IMPLEMENTATION READY**: the blocker Relation identity becomes a
multi-row presentation with `Name` plus two direction-neutral `Connected
object` / `つながり先` rows. It does not display Source/Target roles, mutate
Relation semantics, or change deletion behavior. Relation Detail remains
canonical, and NarrativeLine parity remains a separate future review. The
decision is recorded in the [Relation Endpoint Vocabulary Surface Adoption
Audit](../research/exploratory/relation-endpoint-vocabulary-surface-adoption-audit.md);
runtime implementation is not yet complete.

The record keeps Relative Chronology as a serious pre-release design
candidate. A minimal canonical `before` relation is a Research candidate, not
a selected schema; its editing may use Earlier/Later controls and later
drag-and-drop. `temporalOrder` editing and authorial display order remain
separate. Search/Filter, granularity-aware Timeline folding, and `↑ 最初 /
↓ 最後` are useful pre-release candidates. NarrativeLine time-of-day editing
is already present and is not a missing feature.

Entity Group design must support possible multiple membership from the
beginning; Group collapse is not required. Ownership tooltip/popover sizing,
the bounded viewport toolbar drag-handle / disclosure implementation, and
Initial Node Placement remain open follow-ups. Undo/Redo is desirable but
non-blocking. Public Sample Dataset Refresh is required before release, after
format-affecting decisions stabilize.

Semantic/Dictionary work, including Wikidata and thesaurus research, remains
later work. Existing release-quality items retain their current statuses. The
larger Research audit follows completion of the current small-fix sequence;
this record does not silently reorder the roadmap or promote every candidate
to mandatory implementation.

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
No new ai-knowledge entry was warranted by that earlier roadmap
reconstruction checkpoint.

### NL-EVENT-ID1 — Event Human-readable Identity Disambiguation

The historical audit wording below is preserved as the state at that
checkpoint. The current superseding status is:

**FORMALLY ACCEPTED / COMPLETE / CLOSED.**

Accepted runtime: NarrativeLine `4f066d5`. Acceptance evidence is recorded in
[NarrativeLine Event Identity Formal Acceptance](narrativeline-event-identity-formal-acceptance.md),
with acceptance documentation commit `e7c7dd1`.

The accepted implementation scope is limited to the Timeline Event list and
Entity Detail Related Events. Event name remains primary; ambiguity is
candidate-set-local; chronology is the conditional human-readable
discriminator; Timeline does not duplicate chronology already visible in its
normal presentation; Related Events conditionally shows chronology; and
unresolved same-name/same-chronology ambiguity uses a presentation-only
short-ID fallback. The full exact `event.id` remains canonical operation
identity. Raw History precision is not exposed, `temporalOrder` remains valid
Timeline sorting data but is intentionally excluded from human-facing Event
identity, and EN/JA share the ambiguity semantics while visible chronology
remains the responsibility of existing locale/date presentation.

Accepted evidence is 221/221 automated tests, lint/build/diff-check PASS,
Microsoft Edge Formal Acceptance PASS, ordinary and approximately 360px
presentation PASS, long-name presentation PASS, canonical Event navigation
PASS, Relation blocker regression PASS, and no visible mojibake.

This closure does not claim completion for every current or future Event
surface. Dedicated Event Picker, Event search, generic reference picker,
global Event identity component, Event Detail identity redesign,
delete/association dialog redesign, and full-ID-by-default presentation were
not added by NL-EVENT-ID1. They are not opened as automatic follow-ups by this
closure; further Event identity work requires new concrete evidence.

Historical audit checkpoint state (preserved):

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

### NarrativeLine Relation blocker-card presentation follow-up (2026-08-28)

The earlier public Handoff12 observation and its exploratory evidence remain
recorded in [NarrativeLine Relation Blocker-Card Presentation Follow-up](narrativeline-relation-blocker-card-presentation-follow-up.md).
That presentation workstream is now **FORMALLY ACCEPTED / COMPLETE / CLOSED**
at accepted NarrativeLine runtime `4591f3a`. Formal evidence is recorded in
[NarrativeLine Relation Blocker Presentation Formal Acceptance](narrativeline-relation-blocker-presentation-formal-acceptance.md),
accepted by e2r-spec commit `2b52f15`.

The accepted result includes labeled Relation Name / Source / Target identity,
the Japanese `縺､縺ｪ縺後ｊ縺ｮ蜷榊燕` / `蟋狗せ` / `邨らせ` labels, independently
wrappable endpoints, Candidate B compact action geometry with narrow fallback,
matched button/Handoff internal label alignment, long-name robustness, EN/JA
real-browser verification, and no visible mojibake. Automated evidence was
197/197 tests PASS with lint/build/diff-check PASS; Edge real-browser
acceptance also passed.

The earlier endpoint-separator encoding observation was resolved by
NarrativeLine commit `0eae8df fix: correct Relation endpoint separator`, which
changed the separator to the intended/current `→` before the final combined
blocker acceptance. It is included in accepted runtime `4591f3a` and is no
longer an open Presentation follow-up. The later Japanese Relation-label
mojibake was a separate incident introduced by `529f209` and corrected by
`da54d55`; the two incidents remain distinct. The `Keep Entity` footer
placement remains a separate responsibility and no global safe-left/
danger-right rule was introduced.

This closure resolves the earlier Candidate B geometry uncertainty, Candidate C
identity uncertainty, Japanese Relation-label mojibake, and matched blocker
action-label alignment findings within this workstream. Those findings remain
valid historical intermediate evidence and are not rewritten. Entity/Relation
deletion semantics, the Capability Handoff contract, Dataset Handoff,
Core/Extension/schema, Hub, LiaisonScape, and ai-knowledge remain unchanged.
Capability Handoff acceptance stays CLOSED / ACCEPTED. This closure does not
alter unrelated NarrativeLine, cross-application, or deployment work.

### LS-MODAL-DIALOG-CONSISTENCY-AUDIT1 (2026-08-29)

The complete live LiaisonScape modal/dialog inventory and responsibility audit
is recorded in [LiaisonScape Modal / Dialog Consistency Audit](../research/exploratory/liaisonscape-modal-dialog-consistency-audit.md).
**MODAL AUDIT COMPLETE / NO MATERIAL CONSISTENCY FIX REQUIRED.** Canonical
Source/Target presentation remains appropriate for Relation Create/Edit, Detail,
and the Entity Detail related-Relation inspection list; generic Connected object
rows remain appropriate for Entity deletion blocker resolution. Destructive
safe-first ordering, shared focus trapping, dismissal, and narrow scrolling
remain accepted responsibility-specific behavior. Only an optional P3
representative browser-fixture coverage candidate was recorded; no runtime,
vocabulary, deletion, or cross-app parity fix is opened by this checkpoint.

### LS-RELATION-DETAIL-PRESENTATION-DIRECTIONALITY-DECISION1 (2026-08-29)

The Relation Detail presentation decision is recorded in the reconciled
[Relation Endpoint Vocabulary Surface Adoption Audit](../research/exploratory/relation-endpoint-vocabulary-surface-adoption-audit.md)
and the bounded [Relation Direction and Arrow Appearance](../research/exploratory/relation-direction-and-arrow-appearance.md)
UI consequence. Ordinary Relation Detail is now conceptually inspection plus
future presentation configuration: `Name`, two singular `Connected object`
rows in stable canonical source/target order, and a visual control between
them. The Japanese control concept is `つながりの表示`; Normal, Reverse,
Undirected, and Bidirectional remain presentation-only choices.

Canonical `sourceId` / `targetId`, Relation name/description, Create/Edit,
Entity Detail, and the accepted deletion-blocker presentation remain unchanged.
The English control label and persistence ownership are unresolved, so runtime
implementation is not ready. No arrow control, rendering, persistence, Core,
Extension, schema, or application change is authorized by this decision.

### LS-RELATION-DETAIL-DISPLAY-CONTROL-EN1 (2026-08-29)

The English visible label for the future Relation Detail presentation control
is now accepted as **`Relation display`**. It matches the established `Relation`
UI term and describes presentation rather than canonical direction. The
Japanese label remains `つながりの表示`; Normal, Reverse, Undirected, and
Bidirectional remain presentation-only choices, with endpoint names shown once
outside the control.

Persistence ownership remains the sole named prerequisite before runtime
implementation. No ARIA wording, arrow control, rendering, persistence, Core,
Extension, schema, or application change is authorized by this vocabulary
decision.

### LS-RELATION-DISPLAY-PERSISTENCE-OWNERSHIP1 (2026-08-29)

The [Relation Direction and Arrow Appearance](../research/exploratory/relation-direction-and-arrow-appearance.md)
authority now records **RELATION DISPLAY PERSISTENCE OWNER ACCEPTED /
SERIALIZATION DETAIL REMAINS**. An explicitly adopted Relation display choice
is Presentation-owned, Dataset-contained LiaisonScape state under a future
bounded Presentation mechanism. It is not Core, Coordinate, Layout geometry,
Application View State, or the provisional Perspective responsibility.

An absent choice defaults to canonical Normal (`sourceId -> targetId`); an
adopted choice is expected to travel through Dataset export/import and may
contribute to `datasetModified` and future undo/redo. Unsupported presentation
data must not block Core Relation use and should be preserved where applicable
Extension rules require it. Exact Extension identifier/version, serialized
tokens, payload shape, Relation-ID addressing, and orphan-record rules remain
the next bounded schema-contract decision. Relation display runtime work is
therefore not yet ready, and no Core, schema, Extension, Validator, or
application change is authorized by this checkpoint.

### LS-RELATION-DETAIL-ARROW-DISPLAY-ORDER-DECISION1 (2026-08-29)

The [Relation Direction and Arrow Appearance](../research/exploratory/relation-direction-and-arrow-appearance.md)
authority now records **RELATION DETAIL ARROW-DISPLAY PRESENTATION ACCEPTED**.
The four-mode control is narrowed from the previously accepted broader
`Relation display` concept to the accepted English label `Arrow display` and
Japanese label `遏｢蜊ｰ縺ｮ陦ｨ遉ｺ`. `Relation display` remains valid historical
wording for a possible broader presentation section; future line/stroke style
is separate.

Relation Detail's accepted future ordinary order is `Name`, `Connected object`,
`Arrow display`, `Connected object`, `Description`, with the control between
the endpoint rows. The current live endpoint-first order is a redesign target,
not a data defect. Normal, Reverse, Undirected, and Bidirectional semantics,
canonical `sourceId` / `targetId`, Create/Edit, Entity Detail, and deletion
blocker boundaries remain unchanged. The persistence owner remains the future
LiaisonScape-owned Dataset-contained Presentation mechanism; serialization and
runtime implementation remain deferred.

### LS-RELATION-PRESENTATION-SERIALIZATION-DESIGN1 (2026-08-29)

The [LiaisonScape Presentation Extension Draft](../extensions/presentation-extension-draft.md)
now defines the Dataset-contained serialization contract as draft candidate
`draft.github.sukoyaka-dopeness.liaisonscape-presentation`, version `0.1.0`.
It uses one Relation-ID-scoped `relations` map and the `arrowDisplay` tokens
`normal`, `reverse`, `undirected`, and `bidirectional`; absence means Normal.
The contract preserves canonical Core endpoints, omits redundant defaults, and
supports future independently named Presentation properties in the same
Relation record without defining line-style data here.

Schema/reader-writer implementation remains a separate next phase, followed by
Arrow display runtime, line-style design/implementation, and Lighthouse
Restoration sample refresh. No schema, runtime, Validator, or sample change is
authorized by this checkpoint.

### E2R-LS-PRESENTATION-EXTENSION-SCHEMA1 (2026-08-29)

The accepted LiaisonScape Presentation Extension Draft `0.1.0` now has a
machine-readable structural schema at
[`schemas/extensions/presentation-draft.schema.json`](../schemas/extensions/presentation-draft.schema.json)
and a targeted validator registered as `npm run validate:presentation-draft`.
The schema validates the payload's exact `specVersion`, optional Relation-ID
map, current `arrowDisplay` string shape, and unknown-field preservation
boundary. Known values remain `normal`, `reverse`, `undirected`, and
`bidirectional`; unknown strings remain structurally preservable for the
reader's Normal fallback.

Relation-ID resolution, orphan diagnostics, canonical default/empty-state
omission, and application interpretation remain outside JSON Schema. The
Presentation Extension remains a Draft candidate and does not change Core,
Coordinate, Layout, Validator semantics, Dataset samples, or application
runtime. The next checkpoint may implement a bounded LiaisonScape
Presentation reader/writer responsibility, following the accepted incremental
application modularization policy; it must not begin as arbitrary Extension
traversal distributed through `App.tsx`.

### LS-RELATION-LINE-STYLE-DESIGN1 (2026-08-29)

The [LiaisonScape Presentation Extension Draft](../extensions/presentation-extension-draft.md)
and [Relation Direction and Arrow Appearance research](../research/exploratory/relation-direction-and-arrow-appearance.md)
now record **RELATION LINE-STYLE PRESENTATION MODEL ACCEPTED / SCHEMA UPDATE
READY**. Relation line appearance is an independent Presentation responsibility
from `arrowDisplay`: the exact property is `lineStyle`, with `solid`, `dashed`,
and `dotted` tokens. Absence means `solid`, and canonical writing omits
explicit Solid while preserving unknown fields and unknown non-empty tokens
until an explicit line-style edit.

The selected future Relation Detail vocabulary is `Line style` / `線のスタイル`,
with a native textual select using `Solid` / `実線`, `Dashed` / `破線`, and
`Dotted` / `点線`. The accepted ordinary order is `Name`, `Connected object`,
`Arrow display`, `Line style`, `Connected object`, `Description`. The control
is initially Relation Detail-only; Relation Creation uses the default Solid.
All line styles combine independently with all four accepted arrow-display
modes, and none changes Core endpoints, Relation identity/text, or semantic
data. Self-Relations retain their routed loop geometry, and parallel Relations
are independently addressed by Relation ID. Hidden or Event-related Relations
remain eligible for Relation-ID-scoped Presentation storage regardless of
current graph visibility.

The Presentation Extension remains Draft candidate `0.1.0`; this additive
optional field does not warrant a version bump because the existing contract
reserved separately named Presentation properties and requires unknown-field
preservation. A later schema checkpoint must document and validate the
standardized field/tokens; schema work remains separate. Runtime reader/writer,
graph rendering, and Relation Detail integration also remain separate and are
not authorized by this documentation checkpoint.

The rendering boundary is limited to the visible Relation line path. Halo,
hit-area, selection target, route/self-loop geometry, labels, arrowhead shape,
and the Relation-creation preview remain separate responsibilities. Existing
Layout research remains authoritative for route, curvature, self-loop
orientation/radius, label placement, and spatial layering. Node automatic
placement remains an independent Layout/placement work item, and the likely
LiaisonScape `0.2.0` application release decision is recorded separately;
actual version preparation remains release-time. No application version,
schema, runtime, Validator, sample, or other repository change follows from
this historical design checkpoint.

### LS-RELATION-LINE-STYLE-SCHEMA1 (2026-08-29)

The Presentation Draft schema now formally standardizes the optional
Relation-record `lineStyle` property as a non-empty string. The known tokens
are `solid`, `dashed`, and `dotted`; unknown non-empty tokens remain structurally
valid for forward-compatible runtime fallback and preservation. The existing
`arrowDisplay` behavior, `additionalProperties` policy, empty-record rule,
Relation-ID map, and `specVersion: "0.1.0"` are unchanged.

The coherent `validate:presentation-draft` fixture matrix now covers the three
known line-style tokens, Arrow + lineStyle combinations, unknown lineStyle and
sibling fields, and invalid empty/non-string lineStyle values. Schema behavior
remains structural: effective Solid fallback, canonical omission, UI labels,
CSS/SVG rendering, orphan resolution, and graph interpretation remain outside
the schema. The schema checkpoint is complete and LiaisonScape line-style
reader/writer work is ready as a separate follow-up; this checkpoint does not
authorize runtime implementation, application version changes, or node
automatic placement.

### LS-PRESENTATION-RELATION-DELETION-CLEANUP1 (2026-08-30)

The previously remaining Presentation lifecycle cleanup item is closed. The
existing LiaisonScape implementation removes only the Presentation record
keyed by an explicitly deleted Relation ID, preserves siblings and unrelated
orphan records, and applies the accepted empty-container canonicalization.
Malformed or unsupported Presentation payloads remain fail-closed. This
closure is recorded in
`docs/liaisonscape-presentation-relation-deletion-cleanup-result.md`; it does
not introduce global orphan repair or change Validator/schema semantics.

### PRE-RELEASE-VALIDATOR-AND-SEQUENCING-ROADMAP-SYNC1 (2026-08-29)

The remaining pre-release path is now synchronized around a mandatory
production Validator checkpoint. This is a roadmap record only; it does not
implement Validator behavior, node placement, sample refresh, application
version changes, or deployment.

Before Public Sample Dataset Refresh can be accepted, production Validator
integration and acceptance MUST cover the Presentation Extension Draft
`draft.github.sukoyaka-dopeness.liaisonscape-presentation`, version `0.1.0`:

* `arrowDisplay`: known `normal`, `reverse`, `undirected`, and
  `bidirectional` values.
* `lineStyle`: known `solid`, `dashed`, and `dotted` values.
* Unknown non-empty future tokens for both properties remain forward
  compatible: they must not make an otherwise valid payload fail solely for
  being unknown, and must remain preservable at the accepted boundary.
* Malformed payloads, including invalid types, empty tokens, and invalid
  structural shapes, must be rejected or reported at the appropriate
  Validator boundary without weakening Core validation.
* Core-only datasets remain unaffected, and unknown unrelated Extensions
  remain safely ignorable/preservable according to the Extension rules.
* Orphan Relation-ID Presentation records require an explicit semantic
  validation decision about diagnostic severity and boundary. That question
  remains open here; this sync does not decide orphan behavior.

Node automatic placement remains a separate Layout/placement responsibility.
Before the Validator checkpoint is complete, the project must determine
whether placement uses the existing Coordinate/Layout serialization or
introduces or changes a serialized contract. This sync assumes neither
outcome and chooses no placement algorithm or serialization. If placement
does introduce or change serialized data, its schema and Validator coverage
must be included before Public Sample Dataset Refresh; if it remains entirely
within existing valid serialization, the Presentation Validator scope stays
independent.

The remaining release sequence is:

1. Design, implement, and accept node automatic placement.
2. Resolve any resulting Coordinate/Layout serialization and schema
   implications. **CLOSED 2026-08-30:** the accepted automatic placement
   implementation introduces no new serialized contract, schema, or Validator
   work; see [Automatic Placement Serialization Impact](liaisonscape-automatic-placement-serialization-impact-result.md).
3. Complete the separate Presentation lifecycle cleanup, including removal
   of a deleted Relation ID's Presentation record where appropriate.
4. Integrate and accept production Validator coverage for the release-
   relevant Extensions, including any newly serialized placement contract.
5. Refresh and accept the Public Sample Dataset only after the Validator
   checkpoint passes. Eventual acceptance also requires LiaisonScape
   open/render/edit smoke coverage, NarrativeLine open/round-trip coverage,
   Extension preservation, Hub/Handoff evidence, and license, credits, and
   sample-metadata checks.
6. Run the cross-application and release integration audit.
7. The LiaisonScape application version decision is now recorded as
   `0.2.0`. The current metadata remains `0.1.0`; the actual bump is deferred
   to bounded release preparation. See
   `docs/liaisonscape-application-version-decision.md`.
8. Run the final pre-public-release audit.
9. Obtain explicit authorization before any push or deployment.
10. Perform public deployment acceptance only after that authorization.

Lighthouse Restoration remains a later Public Sample Dataset workstream. It
does not authorize adding Relations or inferring Relations between mojibake
sample names. The completed Relation Arrow display work, Relation Line style
work, and LiaisonScape Credits locale-parity work remain closed and are not
reopened by this sequencing record. The existing application modularization
and repository boundaries remain in force.

### E2R-LIAISONSCAPE-0.2.0-RELEASE-PREPARATION1 (2026-08-30)

The bounded LiaisonScape application release preparation is complete locally.
Application metadata and Credits now identify `0.2.0`; the First Distribution
provenance date `2026-08-16` remains preserved, and the update metadata date is
`2026-08-30`. The README now reflects Validator `0.4.0` and the `0.2.0`
release-candidate state.

This preparation changes no Dataset, Core, Extension, schema, Handoff,
Validator, Coordinate, Presentation, DOM-package, or dependency version. The
application remains `private: true`. Tagging, GitHub Release, deployment, and
public acceptance remain separate later actions requiring explicit
authorization.

### E2R-PRE-RELEASE-ROADMAP-PLACEMENT-ORDER-LICENSE-RECORD1 (2026-08-30)

The current pre-public-release authority now supersedes the sequencing details
above while retaining them as historical records. LiaisonScape 0.2.0 remains
blocked on repository-owned `LICENSE`/`LICENSE.md` remediation; this checkpoint
does not add that file. The bounded audits and active sequence are recorded in
[Pre-Public-Release Placement, Display-Order, and License Sequencing](pre-public-release-placement-order-license-sequencing.md).

The active order is license remediation, Initial Node Placement Objective Audit,
NarrativeLine Display-Order Reordering Audit, result-driven samples and release
evidence, Final Pre-Public-Release Audit, and—only if READY and explicitly
authorized—public sync, tag, GitHub Release, deployment, and public acceptance.
Neither audit authorizes Core, History, schema, or runtime implementation;
Research shelf inventory and the Hub concept page remain separate workstreams.

### E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-OBJECTIVE-AUDIT1 (2026-08-30)

The Initial Node Placement Objective Audit is recorded in [LiaisonScape Initial Node Placement Objective Audit](liaisonscape-initial-node-placement-objective-audit.md).
The result is `SAMPLE REFRESH REQUIRED - INITIAL PLACEMENT ALGORITHM
ACCEPTABLE`: both Lighthouse Restoration samples contain stored coordinates
for all 10 Entities, so Dataset open does not exercise the missing-coordinate
placement path. The observation therefore does not establish that the
placement algorithm is the primary cause.

The next bounded activity is a stored-versus-derived diagnostic comparison and
sample-coordinate refresh decision. No runtime, schema, Coordinate, Core,
Extension, sample, or release operation was authorized by this audit. The
NarrativeLine Display-Order audit remains next in the pre-release sequence.

### E2R-LIAISONSCAPE-LICENSE-REMEDIATION1 (2026-08-30)

The LiaisonScape repository-owned MIT license blocker is now remediated. The
root `LICENSE` uses `Copyright (c) 2026 sukoyaka-dopeness`; `package.json`,
`package-lock.json`, and README are synchronized. The evidence is recorded in
[LiaisonScape License Remediation Result](liaisonscape-license-remediation-result.md).

This closes only the license checkpoint. LiaisonScape remains `0.2.0` and
`private: true`; runtime, Dataset, sample, Core, Extension, and specification
licensing boundaries are unchanged. Initial Node Placement Objective Audit is
now next, followed by the NarrativeLine Display-Order Reordering Audit. The
Final Pre-Public-Release Audit has not been rerun, and public release remains
unauthorized.

### E2R-LIAISONSCAPE-COORDINATELESS-PLACEMENT-COMPARISON-AUDIT1 (2026-08-30)

The stored-versus-derived-versus-explicit-Auto-Layout comparison is recorded in
[LiaisonScape Coordinate-less Placement Comparison Audit](liaisonscape-coordinate-less-placement-comparison-audit.md).
The result is `ACCEPTED - CURRENT STORED SAMPLE COORDINATES REMAIN PREFERRED`.
Both Lighthouse samples have identical 10-Entity / 28-Relation topology and
stored coordinates for all 10 Entities. Coordinate-less derived placement is
deterministic but elongated and is not a suitable automatic refresh basis for
this curated sample; explicit Auto Layout remains a separate user workflow.

No tracked sample or runtime implementation was changed. If the original
visual concern remains release-relevant, the next bounded choice is manual
sample-coordinate curation or a separate routing/presentation audit. The
NarrativeLine Display-Order audit remains pending.

### E2R-LIAISONSCAPE-RELATION-ROUTING-PRESENTATION-QUALITY-AUDIT1 (2026-08-30)

The Relation routing / presentation quality audit is recorded in [LiaisonScape Relation Routing / Presentation Quality Audit](liaisonscape-relation-routing-presentation-quality-audit.md).
The result is `ROUTING / PRESENTATION FOLLOW-UP REQUIRED - INITIAL PLACEMENT IS
NOT PRIMARY CAUSE`. Current stored coordinates remain the comparison basis;
crossing, foreign-node clearance, Relation-label ownership, and parallel-set
readability cannot be attributed to placement alone.

Existing focused routing and label tests remain valid, but Lighthouse-scale
quality evidence is incomplete. A future bounded comparison must separate
straight conceptual edges, current routed edges, parallel offsets, and manual
or stored Presentation. No runtime, sample, schema, or release operation was
changed.

### E2R-LIAISONSCAPE-SELF-LOOP-SAME-GEOMETRY-COUNTERFACTUAL1 (2026-08-30)

The self-loop same-geometry counterfactual is recorded in [LiaisonScape Self-Loop Same-Geometry Counterfactual](liaisonscape-self-loop-same-geometry-counterfactual.md).
The result is `NOT JUSTIFIED - SAME-GEOMETRY COUNTERFACTUAL SHOWS NO CLEARLY
BETTER SELF-LOOP ROUTE`. Ordinary-first routing produced identical self-loop
geometry because current self-loop candidate selection does not consume
`occupiedPaths`. `beacon-self-calibrate` remains near an ordinary route, but
causality and an order-only fix are unproven.

No runtime, sample, test, schema, or release operation was changed.

### E2R-LIAISONSCAPE-REVERSE-ENDPOINT-PARALLEL-PHYSICAL-SIDE-FIX1 (2026-08-30)

The reverse-endpoint parallel physical-side fix is recorded in [LiaisonScape Reverse-Endpoint Parallel Physical-Side Fix](liaisonscape-reverse-endpoint-parallel-physical-side-fix.md).
Automatic non-self parallel base offsets now use a canonical unordered
endpoint frame, so A->B and B->A retain opposite physical sides while their
semantic directions and arrows remain unchanged. The correction applies only
to parallel groups; single ordinary Relations, manual offsets, self-loops,
and obstacle solver behavior remain bounded as before.

LiaisonScape commit `96da8dd` passed 278/278 tests, lint, and build. The
obstacle-induced collapse remains a separate follow-up. No sample, schema, or
release operation was changed.

### E2R-LIAISONSCAPE-PARALLEL-OBSTACLE-SIDE-COLLAPSE-AUDIT1 (2026-08-30)

The obstacle side-collapse audit is recorded in [LiaisonScape Parallel Obstacle Side-Collapse Audit](liaisonscape-parallel-obstacle-side-collapse-audit.md).
The result is `CAUSALITY CONFIRMED - OBSTACLE ROUTING INDEPENDENTLY COLLAPSES
PARALLEL SIDES`: a one-sided obstacle can make individually scored routes
choose the same escape side even after clean base normalization. The tested
geometry also retained legal side-preserving candidates that lost under the
current clearance/detour score, so the smallest next candidate is a bounded
side-preservation preference in obstacle scoring.

LiaisonScape commit `96da8dd` passed 278/278 tests, lint, and build. No runtime
change was made by this audit; self-loop, foreign-node, label, crossing, and
occupied-path/order follow-ups remain separate.

### E2R-LIAISONSCAPE-PARALLEL-OBSTACLE-SIDE-PRESERVATION-FIX1 (2026-08-30)

The bounded obstacle side-preservation fix is recorded in [LiaisonScape Parallel Obstacle Side-Preservation Fix](liaisonscape-parallel-obstacle-side-preservation-fix.md).
Safe candidates that preserve the existing parallel physical side are now
preferred lexicographically, while the existing best-candidate fallback
allows side switching when no such candidate is safe. No new numeric weight
or clearance threshold was introduced.

LiaisonScape commit `22f61a8` passed 279/279 tests, lint, and build. The
change is limited to automatic ordinary parallel obstacle routing; group
optimization, foreign-node, label, crossing, self-loop, and occupied-path
redesign remain separate.

### E2R-LIAISONSCAPE-FOREIGN-NODE-CLEARANCE-FIX1 (2026-08-30)

The foreign-node clearance audit is recorded in [LiaisonScape Foreign-Node Clearance Audit](liaisonscape-foreign-node-clearance-audit.md).
The result is `NOT REPRODUCED`: current Lighthouse stored coordinates keep
all ordinary Relation routes outside the existing 60-unit node-influence
region. The closest measured case, `clara-maya` near `lighthouse`, remains
87.3 units from the foreign Node center and 55.3 units beyond the existing
32-unit Node body radius.

No runtime change was justified or made. New clearance thresholds, score
weights, candidate redesign, label recovery, and crossing minimization remain
separate follow-ups.

### E2R-LIAISONSCAPE-RELATION-LABEL-NORMAL-DISTANCE-RECOVERY-FIX1 (2026-08-30)

The Relation-label normal-distance audit is recorded in [LiaisonScape Relation-Label Normal-Distance Recovery Audit](liaisonscape-relation-label-normal-distance-recovery-audit.md).
The result is `NOT JUSTIFIED`: the existing label helper already returns an
automatic label toward its owner Edge when pressure disappears, while keeping
the along-edge anchor stable and retaining necessary displacement when
collisions remain.

No runtime change was made. New normal-distance thresholds or score weights,
along-edge recovery, global label layout, foreign-edge routing, and manual
label semantics remain separate follow-ups.

### E2R-LIAISONSCAPE-RELATION-LABEL-ALONG-EDGE-MIDPOINT-RECOVERY-FIX1 (2026-08-30)

The along-edge / midpoint recovery audit is recorded in [LiaisonScape Relation-Label Along-Edge Recovery Audit](liaisonscape-relation-label-along-edge-recovery-audit.md).
The result is `NOT JUSTIFIED`: existing candidate selection returns labels
toward the preferred midpoint when pressure disappears, while preserving
along-edge displacement whenever the preferred position remains blocked.

No runtime change was made. Normal-distance, foreign-edge ownership,
crossing, global label layout, and manual placement remain separate concerns.

### E2R-LIAISONSCAPE-RELATION-LABEL-FOREIGN-EDGE-OWNERSHIP-FIX1 (2026-08-30)

The foreign-edge ownership audit is recorded in [LiaisonScape Relation-Label Foreign-Edge Ownership Audit](liaisonscape-relation-label-foreign-edge-ownership-audit.md).
The result is `NOT JUSTIFIED`: current automatic label candidates already
place representative Lighthouse labels nearer to their owning Relation than
to the nearest foreign Relation. A new foreign-distance score, ratio, margin,
or threshold is therefore not justified.

No runtime change was made. Foreign-edge congestion caused by route crossing,
manual/Owned labels, and global label coordination remain separate follow-ups.

### E2R-LIAISONSCAPE-ORDINARY-EDGE-CROSSING-CONGESTION-FIX1 (2026-08-30)

The ordinary-edge crossing audit is recorded in [LiaisonScape Ordinary-Edge Crossing Audit](liaisonscape-ordinary-edge-crossing-audit.md).
The result is `NOT REPRODUCED`: the current Lighthouse stored geometry has
zero true non-endpoint ordinary-edge crossings and no sampled near-crossing
pair below the diagnostic 20-unit band. No crossing score, threshold, or
global rerouting change was justified.

No runtime change was made. Shared-endpoint fan-out, local congestion,
self-loop interactions, and future route-order evidence remain separate.

### E2R-LIAISONSCAPE-SHARED-ENDPOINT-FANOUT-CONGESTION-FIX1 (2026-08-30)

The shared-endpoint fan-out audit is recorded in [LiaisonScape Shared-Endpoint Fan-Out Audit](liaisonscape-shared-endpoint-fanout-audit.md).
The result is `NOT REPRODUCED`: the current Lighthouse geometry has no
material post-boundary bundling. The largest incident group, `clara`, has six
ordinary Relations, and all routes diverge from the shared Node at the first
post-boundary sample.

No fan-out angle threshold, separation weight, Node-port design, group
optimizer, or runtime routing change was justified. Parallel, label, crossing,
and self-loop concerns remain separately bounded.

### E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-GRIDNESS-COUNTERFACTUAL1 (2026-08-30)

The gridness counterfactual is recorded in [LiaisonScape Initial Node Placement Gridness Counterfactual](liaisonscape-initial-node-placement-gridness-counterfactual.md).
The result is `DIRECTION SUPPORTED`: the coordinate-less fallback exhibits
strong repeated-row gridness, while the existing Auto Layout counterfactual
removes exact X/Y alignments. The stored Lighthouse geometry remains a
separate authored baseline with unknown provenance.

No production initial-placement or sample change was made. A bounded
non-grid initial-placement experiment is the next separate checkpoint.

### E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-NON-GRID-EXPERIMENT1 (2026-08-30)

The non-grid experiment is recorded in [LiaisonScape Initial Node Placement Non-Grid Experiment](liaisonscape-initial-node-placement-non-grid-experiment.md).
The result is `PARTIAL`: bounded runs of the existing Auto Layout mechanics
remove the coordinate-less fallback's repeated-row gridness deterministically,
but full startup reuse remains unproven for mixed Coordinates, routing/label
quality, performance, and ownership semantics.

No production runtime, sample, or Coordinate change was made. The next
candidate checkpoint is bounded-settling implementation with a distinct
initial-placement boundary.

### E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-BOUNDED-SETTLING-IMPLEMENTATION1 (2026-08-30)

The bounded settling implementation is recorded in [LiaisonScape Initial Node
Placement Bounded Settling Implementation](liaisonscape-initial-node-placement-bounded-settling-implementation.md).
The result is `IMPLEMENTED`: Coordinate-less Dataset opening now uses a
deterministic three-iteration derived placement helper based on the existing
Auto Layout mechanics. Stored Coordinates remain authoritative, and mixed
Coordinate opening retains the existing deterministic missing-node path pending
a separate pinned-node ownership decision.

LiaisonScape passed 280/280 tests, lint, and build. No explicit Auto Layout
workflow, Dataset mutation, dirty/adoption state, sample, schema, or release
operation changed.

### E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-CONGESTION-SETTLING-DEPTH-EXPERIMENT1 (2026-08-30)

The settling-depth experiment is recorded in [LiaisonScape Initial Node
Placement Congestion / Settling Depth Experiment](liaisonscape-initial-node-placement-congestion-settling-depth-experiment.md).
The result is `RESEARCH REQUIRED`: 6/12-iteration counterfactuals compact the
Node geometry beyond the accepted 3-iteration candidate, but the existing
solver is not Edge-crossing-, route-clearance-, or label-aware. No production
iteration change or sample refresh was accepted; the uncommitted 3-iteration
candidate remains available for manual review.

### E2R-LIAISONSCAPE-NODE-LAYOUT-PRESENTATION-PRESSURE-OBJECTIVE-DECOMPOSITION1 (2026-08-30)

The presentation-pressure decomposition is recorded in [LiaisonScape Initial
Node Placement Presentation-Pressure Objective Decomposition](liaisonscape-initial-node-placement-presentation-pressure-objective-decomposition.md).
The result is `RESEARCH REQUIRED`: the existing Node-only solver does not
account for Edge, route-corridor, or label pressure, but direct integration of
production routing and labels would create an unbounded feedback loop. No
runtime, production iteration, routing, label, or sample change was made. The
next checkpoint must define one coarse, lexicographic presentation proxy.

### E2R-LIAISONSCAPE-PARALLEL-SYNTHETIC-PHYSICAL-SIDE-COUNTERFACTUAL1 (2026-08-30)

The synthetic physical-side counterfactual is recorded in [LiaisonScape Parallel Synthetic Physical-Side Counterfactual](liaisonscape-parallel-synthetic-physical-side-counterfactual.md).
The result is `CAUSALITY CONFIRMED - REVERSE-ENDPOINT PHYSICAL-SIDE
NORMALIZATION FIX REQUIRED`. Same-direction pairs separate at the base slot
stage, while an A->B plus B->A pair collapses to the same canonical physical
side because the directed normal reverses while the slot sign does not.

An obstacle can also switch one side and collapse a two-Relation pair. The
smallest next implementation candidate is reverse-endpoint physical-side
normalization, with obstacle-side preservation kept separate. No runtime,
sample, test, or release operation was changed.

### E2R-LIAISONSCAPE-REVERSE-ENDPOINT-PARALLEL-PHYSICAL-SIDE-FIX1 (2026-08-30)

The reverse-endpoint parallel physical-side fix is recorded in [LiaisonScape Reverse-Endpoint Parallel Physical-Side Fix](liaisonscape-reverse-endpoint-parallel-physical-side-fix.md).
Automatic non-self parallel base offsets now use a canonical unordered
endpoint frame, so A->B and B->A retain opposite physical sides while their
semantic directions and arrows remain unchanged. The correction applies only
to parallel groups; single ordinary Relations, manual offsets, self-loops,
and obstacle solver behavior remain bounded as before.

LiaisonScape commit `96da8dd` passed 278/278 tests, lint, and build. The
obstacle-induced collapse remains a separate follow-up. No sample, schema, or
release operation was changed.

### E2R-LIAISONSCAPE-PARALLEL-PHYSICAL-SIDE-DECOMPOSITION-AUDIT1 (2026-08-30)

The parallel physical-side decomposition is recorded in [LiaisonScape Parallel Physical-Side Decomposition Audit](liaisonscape-parallel-physical-side-decomposition-audit.md).
The result is `INSUFFICIENT EVIDENCE - PARALLEL PHYSICAL-SIDE CAUSE NOT
ISOLATED`. The Lighthouse sample has only one ordinary parallel group,
`clara-thomas-mentors` / `clara-thomas-supervises`, both `clara -> thomas`;
there is no reverse-direction ordinary parallel pair to establish a
normalization defect.

Existing deterministic slot, reversal, obstacle, occupied-path, and manual
offset tests remain valid. A frozen stage-by-stage comparison with synthetic
same-direction and reverse-direction groups is required before any parallel
runtime change. No runtime, sample, schema, or release operation was changed.

### E2R-LIAISONSCAPE-ROUTING-DECOMPOSITION-SELF-LOOP-AUDIT1 (2026-08-30)

The routing decomposition and self-loop audit is recorded in [LiaisonScape Routing Decomposition / Self-Loop Audit](liaisonscape-routing-decomposition-self-loop-audit.md).
The result is `SELF-LOOP ROUTING FIX NOT YET JUSTIFIED - INSUFFICIENT CAUSAL
EVIDENCE`. The two Lighthouse `beacon` self-Relations and the fixed-before-
ordinary `occupiedPaths` order create a plausible asymmetry, but do not prove
the observed defect. A same-geometry counterfactual comparison is required.

No runtime, sample, test, schema, or release operation was changed.
### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-EDGE-CORRIDOR-PROXY-EXPERIMENT1 (2026-08-30)

The Edge-corridor proxy experiment is recorded in [LiaisonScape Initial
Placement Edge-Corridor Proxy Experiment](liaisonscape-initial-placement-edge-corridor-proxy-experiment.md).
The result is `PARTIAL`: straight topological chord crossing (P1) and
separation (P2) detect controlled synthetic cases, but Lighthouse ranking does
not explain production routing or the manual congestion concern. No runtime,
solver, routing, label, iteration, or sample change was made. The next bounded
checkpoint is the label-pressure proxy experiment.
### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LABEL-PRESSURE-PROXY-EXPERIMENT1 (2026-08-30)

The Label-pressure proxy experiment is recorded in [LiaisonScape Initial
Placement Label-Pressure Proxy Experiment](liaisonscape-initial-placement-label-pressure-proxy-experiment.md).
The result is `RESEARCH REQUIRED`: actual label pressure depends on production
route samples, candidate anchors, occupied paths, and localized text footprint,
so a straight-chord proxy does not explain Lighthouse reliably. No runtime,
solver, routing, label, iteration, or sample change was made. A combined proxy
is not justified by the current evidence.
### E2R-LIAISONSCAPE-DEGREE-CENTERED-OUTWARD-PLACEMENT-EXPERIMENT1 (2026-08-30)

The degree-centered outward experiment is recorded in [LiaisonScape
Degree-Centered Outward Placement Experiment](liaisonscape-degree-centered-outward-placement-experiment.md).
The result is `PARTIAL`: Lighthouse centrality selects `clara` consistently,
supporting a future central-hub seed experiment, but label-aware sectoring and
the post-settle effect were not established. No runtime, iteration, routing,
label, sample, or release change was made; the existing uncommitted sample
candidate remains preserved.
### E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-NODE-REPULSION-SENSITIVITY-EXPERIMENT1 (2026-08-30)

The Node-repulsion sensitivity experiment is recorded in [LiaisonScape
Initial Placement Node-Repulsion Sensitivity Experiment](liaisonscape-initial-placement-node-repulsion-sensitivity-experiment.md).
The result is `NOT SUPPORTED`: the current three-iteration candidate's minimum
Node distance is already beyond the 96-unit repulsion activation distance, and
repulsion tuning does not explain the presentation concern. No production
constant, iteration count, routing, label, or sample change was made. The
central-hub seed remains the stronger separate direction.
### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SOURCE-RECONCILIATION-AND-TARGET-EDGE-LENGTH-EXPERIMENT1 (2026-08-30)

The source reconciliation and target-edge-length experiment is recorded in
[LiaisonScape Initial Placement Source Reconciliation and Target Edge Length
Experiment](liaisonscape-initial-placement-source-reconciliation-and-target-edge-length-experiment.md).
The result is `SUPPORTED BY EQUATIONS`: live source confirms that
Coordinate-less opening uses the solver's own degree-ranked seed, not the
previously described fallback seed, and that always-attractive connected-node
force explains continued compression. A target Edge length was not selected or
implemented; redundant `seededPositions` cleanup remains separate. No runtime,
constant, iteration, routing, label, or sample change was made.
### E2R-LIAISONSCAPE-TARGET-EDGE-LENGTH-CANDIDATE-AND-SHARED-SOLVER-BOUNDARY-EXPERIMENT1 (2026-08-30)

The target-edge-length and shared-solver boundary experiment is recorded in
[LiaisonScape Target Edge Length Candidate and Shared Solver Boundary
Experiment](liaisonscape-target-edge-length-candidate-and-shared-solver-boundary-experiment.md).
The result is `BLOCKED`: current source equations explain continued
compression, but no non-arbitrary target Edge length is justified by existing
semantic or geometric evidence. No spring, solver, iteration, routing, label,
or sample change was made; the existing uncommitted sample candidate remains
preserved.
### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MULTI-HOP-TOPOLOGY-SEED-EXPERIMENT1 (2026-08-30)

The multi-hop topology seed experiment is recorded in [LiaisonScape Initial
Placement Multi-Hop Topology Seed Experiment](liaisonscape-initial-placement-multi-hop-topology-seed-experiment.md).
The result is `NOT SUPPORTED`: live source shows a degree-ranked but
topology-agnostic ring seed, while no bounded external-seed comparison
established material multi-hop presentation benefit. No runtime, force,
iteration, routing, label, or sample change was made; the existing uncommitted
Lighthouse candidate remains preserved.

### E2R-LIAISONSCAPE-EXTERNAL-SEED-INJECTION-AND-MULTI-HOP-COUNTERFACTUAL1 (2026-08-30)

The causal external-seed experiment is recorded in [LiaisonScape External-Seed
Injection and Multi-Hop Counterfactual](liaisonscape-external-seed-injection-and-multi-hop-counterfactual.md).
The result is `PARTIAL`: round-trip injection was bit-identical, BFS hop rings
improved Lighthouse spacing but mixed branches, and parent sectors materially
improved Lighthouse routing and labels. Cycle, multi-hub, chain, and dense
controls prevent a general production implementation. The preceding
`NOT SUPPORTED` record did not perform this causal injection and remains as
history; this result supplies its missing reconciliation. All temporary runtime
instrumentation was removed, the existing sample candidate remains untouched
and uncommitted, and no runtime, force, iteration, routing, label, release, or
publication change was made.

### E2R-LIAISONSCAPE-BRANCH-PRESERVING-SEED-TOPOLOGY-GUARD-EXPERIMENT1 (2026-08-30)

The topology-guard experiment is recorded in [LiaisonScape Branch-Preserving
Seed Topology Guard Experiment](liaisonscape-branch-preserving-seed-topology-guard-experiment.md).
The result is `PARTIAL`: categorical true branching plus a unique maximum root
selects C for Lighthouse and protects chain, cycle, dense, and equal-two-hub
controls, but it accepts unsafe unequal-two-hub and cross-linked-branch cases.
No threshold-free sufficient production guard was established. All temporary
runtime instrumentation was removed; the unaccepted Lighthouse candidate and
protected session state remain untouched. No runtime, seed, force, iteration,
routing, label, release, or publication change was made.

### E2R-LIAISONSCAPE-PRESENTATION-AWARE-LOCAL-EXPANSION-COUNTERFACTUAL1 (2026-08-30)

The bounded post-presentation experiment is recorded in [LiaisonScape
Presentation-Aware Local Expansion Counterfactual](liaisonscape-presentation-aware-local-expansion-counterfactual.md).
The result is `PARTIAL`: one `clara`-centered 1-hop pass reduced actual
Lighthouse Relation-label/Node conflicts but did not reduce any ordinary
crossing, and one label conflict migrated. Cycle, chain, star, and unequal
two-hub controls remained safe no-ops; cross-linked branches exposed a new
label conflict at the Lighthouse diagnostic point, and dense 1-hop locality
degenerated to nine of ten Nodes. The extra fresh presentation pass roughly
doubled current initial-presentation cost.

No Production displacement or applicability rule was selected. No runtime,
solver, routing, label, iteration, schema, sample, release, or publication
change was made. Single-root guard research remains deferred. The next bounded
research candidate is local-expansion routing-signal decomposition with a
genuinely multi-region pressure fixture, not Production implementation.

### E2R-LIAISONSCAPE-LOCAL-EXPANSION-ROUTING-SIGNAL-DECOMPOSITION1 (2026-08-30)

The bounded causal diagnosis is recorded in [LiaisonScape Local-Expansion
Routing-Signal Decomposition](liaisonscape-local-expansion-routing-signal-decomposition.md).
The result is `MIXED`: two of seven Lighthouse H2 crossings have a safe bounded
single-endpoint signal, while route-pair swaps, full route-order reversal, and
occupied-path removal retain all seven identities. Foreign-Node and
provisional-label avoidance are material, but removing them trades crossings
for Node clearance loss or crossing migration because proper transverse
crossings are not a current candidate-score term.

No Production route, order, penalty, Node movement, label, sample, schema,
release, or publication change was made. The selected next bounded checkpoint
is `E2R-LIAISONSCAPE-ROUTING-CROSSING-MIXED-CAUSE-PRIORITIZATION1`; it is not
started by this record.

### E2R-LIAISONSCAPE-ROUTING-CROSSING-MIXED-CAUSE-PRIORITIZATION1 (2026-08-31)

The bounded candidate-space experiment is recorded in [LiaisonScape Routing-
Crossing Mixed-Cause Prioritization](liaisonscape-routing-crossing-mixed-cause-prioritization.md).
Its result is `DIRECTION SUPPORTED`: current candidates can safely resolve five
of seven English Lighthouse true crossings through two one-Relation
replacements, and both benefits survive fresh routing and labels. No straight
or lower-curvature candidate is safe. A bounded beacon trajectory also exposes
a large route-sweep discontinuity when automatic offset selection flips side,
but straight-following introduces foreign-Node penetration.

This selects P1, router objective first. Candidate existence does not establish
a Production selector because true crossings are not scored and sequential
routing hides future routes. No runtime, route score, candidate set, Node
placement, label, sample, schema, release, or publication change was made. The
next bounded candidate is
`E2R-LIAISONSCAPE-ORDINARY-ROUTE-TRUE-CROSSING-OBJECTIVE-EXPERIMENT1`; it is not
started by this record.

### E2R-LIAISONSCAPE-ORDINARY-ROUTE-TRUE-CROSSING-OBJECTIVE-EXPERIMENT1 (2026-08-31)

The bounded objective experiment is recorded in [LiaisonScape Ordinary-Route
True-Crossing Objective Experiment](liaisonscape-ordinary-route-true-crossing-objective-experiment.md).
Its result is `TRADE-OFF`: threshold-free X1 preserves hard Node and
provisional-label safety but cannot select the previously proven Lighthouse
crossing reductions because those candidates fail its provisional-label gate.
Sequential and full-context Lighthouse results are identical, so future-route
visibility is not the target-fixture blocker. Dense control reduces crossings
but causes migration, more than 20% route churn, clearance regression, and
high diagnostic cost.

No runtime, routing, placement, label, candidate-set, sample, schema, release,
or publication change was made. The selected next bounded checkpoint is
`E2R-LIAISONSCAPE-ORDINARY-ROUTE-NODE-LABEL-CROSSING-PRIORITY-SEMANTICS-EXPERIMENT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-NEAR-CENTER-WINNER-DISCONTINUITY-EXPERIMENT1 (2026-09-01)

The live frontier experiment is recorded in [LiaisonScape Near-Center Winner
Discontinuity Experiment](liaisonscape-automatic-route-near-center-winner-discontinuity-experiment.md).
It is `F7 / MIXED`: near-center candidates exist, but different Relations lose
them to Node-label pressure, occupied paths, or combined safety cliffs.

No runtime, score, candidate-set, label, sample, parallel, self-loop, schema,
release, or publication change was made. The selected next checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-NEAR-CENTER-LABEL-PRESSURE-CONTINUITY-EXPERIMENT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-THREE-LABEL-CORRIDOR-FEASIBILITY-AUDIT1 (2026-09-01)

The feasibility audit is recorded in [LiaisonScape Three-Label Corridor
Feasibility Audit](liaisonscape-automatic-route-three-label-corridor-feasibility-audit.md).
It is `BLOCKED / F6`: pressure omission is established, but the current label
placement API does not expose the full candidate inventory and exact safety
semantics needed for a joint feasibility oracle. No second solver or copied
safety logic was introduced.

No runtime, routing, score, label, candidate-set, sample, parallel, self-loop,
schema, release, or publication change was made. The selected next checkpoint
is `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-NEAR-CENTER-WINNER-DISCONTINUITY-EXPERIMENT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-MULTI-LABEL-CORRIDOR-ISOLATION1 (2026-09-01)

The canonical App-pipeline isolation is recorded in [LiaisonScape Multi-Label
Corridor Isolation](liaisonscape-automatic-route-multi-label-corridor-isolation.md).
It is `DIRECTION SUPPORTED`: both Clara/Thomas Relations require all three
observed owners under live omission, while Sofia/Archive has alternative
single-owner sets and Authority/Lighthouse is a foreign-label control.

No runtime, routing, score, label, candidate-set, sample, parallel, self-loop,
schema, release, or publication change was made. The selected next bounded
checkpoint is `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-THREE-LABEL-CORRIDOR-FEASIBILITY-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-LIGHTHOUSE-LOCAL-CURVATURE-BLOCKER-INVENTORY1 (2026-09-01)

The Japanese Lighthouse inventory is recorded in [LiaisonScape Lighthouse Local
Curvature Blocker Inventory](liaisonscape-lighthouse-local-curvature-blocker-inventory.md).
It is `MIXED`: Clara/Thomas and Sofia/Archive are multiple-label cases, while
Authority/Lighthouse is a single foreign-label case; no single endpoint-label
qualifying case was found.

No runtime, routing, scoring, label placement, candidate-set, sample, parallel,
self-loop, schema, release, or publication change was made. The selected next
checkpoint is `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-MULTI-LABEL-CORRIDOR-ISOLATION1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-ENDPOINT-LABEL-CORRIDOR-RELAXATION-EXPERIMENT1 (2026-09-01)

The controlled experiment is recorded in [LiaisonScape Endpoint Label Corridor
Relaxation Experiment](liaisonscape-automatic-route-endpoint-label-corridor-relaxation-experiment.md).
It is `PARTIAL`: existing candidates plus target-owner-only previous-placement
preference removal reopened a single endpoint corridor through chord 160, but a
second endpoint blocker remained decisive and no Lighthouse case was shown.

No runtime, routing, scoring, candidate-set, label, sample, parallel, self-loop,
schema, release, or publication change was made. The selected next bounded
checkpoint is `E2R-LIAISONSCAPE-LIGHTHOUSE-LOCAL-CURVATURE-BLOCKER-INVENTORY1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-SHORT-EDGE-NORMALIZED-CURVATURE-AUDIT1 (2026-08-31)

The controlled source audit is recorded in [LiaisonScape Automatic-Route
Short-Edge / Normalized-Curvature Audit](liaisonscape-automatic-route-short-edge-normalized-curvature-audit.md).
It is `MIXED`: absolute offsets amplify normalized curvature on short chords,
while ordinary automatic endpoint labels alone did not curve the minimal
fixture; endpoint labels occupying the corridor did select nonzero live routes.

No runtime, routing, score, candidate-set, label, sample, parallel, self-loop,
schema, release, or publication change was made. The selected next checkpoint
is `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-ENDPOINT-LABEL-CORRIDOR-RELAXATION-EXPERIMENT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-ORDINARY-ROUTE-NODE-LABEL-CROSSING-PRIORITY-SEMANTICS-EXPERIMENT1 (2026-08-31)

The bounded semantics experiment is recorded in [LiaisonScape Ordinary-Route
Node-Label-Crossing Priority Semantics Experiment](liaisonscape-ordinary-route-node-label-crossing-priority-semantics-experiment.md).
Its result is `MIXED`: provisional route/Node-label intersections are only
partially predictive of final presentation safety. In the English Lighthouse
inventory, 13 of 21 provisional intersections persist and eight resolve, but
all 14 label-blocked crossing-improvement candidates also migrate another
measured label-conflict identity. Cross-linked and Japanese controls include
cleanly resolving examples, while a final-presentation oracle reduces English
H2 from seven to two with label-identity migration and one-step route/label
feedback.

No runtime, routing, label, placement, candidate-set, sample, schema, release,
or publication change was made. The selected next bounded checkpoint is
`E2R-LIAISONSCAPE-PROVISIONAL-LABEL-GATE-PREDICTIVENESS-SUBSET1`; it is
selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-HISTORICAL-REPLAY-AUDIT1 (2026-08-31)

The historical detached-worktree replay is recorded in [LiaisonScape
Automatic-Route Historical Replay Audit](liaisonscape-automatic-route-historical-replay-audit.md).
Its result is `TRADE-OFF — EARLIER ROUTING IS TEMPORALLY SMOOTHER BUT
REINTRODUCES ACCEPTED COLLISION REGRESSIONS`: G3/G4 have a stable beacon
trajectory, while those generations predate accepted physical-side protections
and omit current provisional-label behavior; G5 also fails the foreign-Node
clearance control. The current beacon discontinuity begins at the provisional
label-pressure change in `d0c885d`.

No runtime, routing, placement, label, candidate-set, sample, schema, release,
or publication change was made. The selected next bounded checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-HISTORICAL-SAFETY-DELTA-ISOLATION1`; it is
selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-HISTORICAL-SAFETY-DELTA-ISOLATION1 (2026-08-31)

The property-level replay is recorded in [LiaisonScape Automatic-Route
Historical Safety-Delta Isolation](liaisonscape-automatic-route-historical-safety-delta-isolation.md).
Its result is `MIXED — PROVISIONAL-LABEL PRESSURE IS CAUSAL BUT NO GLOBAL
RELAXATION IS SAFE`: the hard provisional-label boundary alone causes the
beacon flip, while full removal recovers continuity but changes route and label
identities across both locales.

No runtime, routing, label, candidate-set, sample, schema, release, or
publication change was made. The selected next bounded checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-LABEL-PRESSURE-TEMPORAL-SEMANTICS-EXPERIMENT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-LABEL-PRESSURE-TEMPORAL-SEMANTICS-EXPERIMENT1 (2026-08-31)

The active-drag and release comparison is recorded in [LiaisonScape Automatic-
Route Label-Pressure Temporal Semantics Experiment](liaisonscape-automatic-route-label-pressure-temporal-semantics-experiment.md).
Its result is `TRADE-OFF — DRAG-TIME LABEL DEFER REMOVES THE MID-DRAG FLIP BUT
MOVES THE SAME DISCONTINUITY TO RELEASE`: snapshot, defer, and offset hold make
the beacon drag smooth, but each restores the current 216-unit discontinuity
when released, and defer has the largest temporary label-conflict inventory.

No runtime, routing, drag, label, candidate-set, sample, schema, release, or
publication change was made. The selected next bounded checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-RELEASE-TRANSITION-SEMANTICS-EXPERIMENT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FINITE-REVALIDATION-EXPERIMENT1 (2026-08-31)

The bounded two-stage experiment is recorded in [LiaisonScape Automatic-Route
Final-Label Finite Revalidation Experiment](liaisonscape-automatic-route-final-label-finite-revalidation-experiment.md).
Its result is `MIXED — FINAL-LABEL REVALIDATION IS INFORMATIVE BUT NOT YET A
STABLE SELECTION SEMANTIC`: using Pass-1 final Node-label rectangles for one
otherwise-current arbitration pass changes six English and two Japanese
ordinary routes. A hypothetical next feed is stable in English but changes four
Japanese routes, so the method cannot yet be a locale-independent Production
selection boundary.

No runtime, routing, drag/release behavior, label placement, candidate set,
sample, schema, release, or publication change was made. The selected next
bounded checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-STABILITY-EXPERIMENT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-STABILITY-EXPERIMENT1 (2026-08-31)

The bounded feedback probe is recorded in [LiaisonScape Automatic-Route
Final-Label Feedback Stability Experiment](liaisonscape-automatic-route-final-label-feedback-stability-experiment.md).
Its result is `PARTIAL — JA REQUIRES ADDITIONAL FINAL-LABEL FEEDBACK PASSES
BEFORE STABILIZING`: EN is fixed after Pass 2; JA changes two routes at Pass 2,
four further routes at Pass 3, and is fixed at Pass 4. No cycle was observed.

This does not authorize iterative Production routing: the cascade remains
locale-dependent and its precise label/occupied-path cause, independent safety,
and presentation effect are unverified. The selected next bounded checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-CASCADE-CAUSE-ISOLATION1`; it is
selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-CASCADE-CAUSE-ISOLATION1 (2026-08-31)

The bounded cause isolation is recorded in [LiaisonScape Automatic-Route
Final-Label Cascade Cause Isolation](liaisonscape-automatic-route-final-label-cascade-cause-isolation.md).
Its result is `DIRECTION SUPPORTED`: reverting only the Pass-2 Clara final
Node-label rectangle to its Pass-1 geometry removes all four Japanese Pass-3
Clara-centred route changes. The first-stage source of Clara's movement and the
hard-versus-halo score signal remain unisolated.

No runtime, routing, order, label placement, candidate-set, sample, schema,
release, or publication change was made. The selected next bounded checkpoint
is `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-HARD-BOUNDARY-SEMANTICS-EXPERIMENT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-HARD-BOUNDARY-SEMANTICS-EXPERIMENT1 (2026-08-31)

The score-boundary attribution attempt is recorded in [LiaisonScape
Automatic-Route Final-Label Score-Boundary Semantics Experiment](liaisonscape-automatic-route-final-label-hard-boundary-semantics-experiment.md).
It is `BLOCKED`: a partial score reconstruction did not reproduce all four live
Japanese Pass-3 winners, so attributing them to hard, halo, occupied-path, or
tie semantics would be unreliable.

No runtime, routing, order, label placement, candidate-set, sample, schema,
release, or publication change was made. The selected next bounded checkpoint
is `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-SCORE-TRACE-REPRODUCTION1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-SCORE-TRACE-REPRODUCTION1 (2026-08-31)

The live-score trace reproduction attempt is recorded in [LiaisonScape
Automatic-Route Final-Label Score-Trace Reproduction](liaisonscape-automatic-route-final-label-score-trace-reproduction.md).
It is `BLOCKED`: a read-only observer can compile inside the live candidate
loop, but an App-pipeline L0/L1 harness has not yet attached it and reproduced
the eight required target winners.

No runtime, routing, scoring, order, label placement, candidate-set, sample,
schema, release, or publication change was made. The selected next bounded
checkpoint is `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-APP-PIPELINE-TRACE-HARNESS1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-LABEL-HALO-CONTINUITY-SEMANTICS-EXPERIMENT1 (2026-09-01)

The bounded halo-semantics experiment is recorded in [LiaisonScape
Automatic-Route Label-Halo Continuity Semantics Experiment](liaisonscape-automatic-route-label-halo-continuity-semantics-experiment.md).
Its result is `PARTIAL`: a hard-preserving magnitude-first diagnostic recovers
the `authority-lighthouse` straight candidate, but its minimum label distance
falls from `20.087` to `5.809`, and the direction does not recover the main
Clara/Thomas hard-label frontier. Halo-first reproduces the current JA
selection; occupied-path and Node-safety controls remain intact.

No runtime, routing, score, candidate-set, label placement, sample, parallel,
self-loop, schema, release, or publication change was made. The selected next
bounded checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-LABEL-HALO-MINIMUM-CLEARANCE-BOUNDARY-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-NEAR-CENTER-LABEL-PRESSURE-CONTINUITY-EXPERIMENT1 (2026-09-01)

The canonical App-pipeline label-pressure experiment is recorded in
[LiaisonScape Automatic-Route Near-Center Label-Pressure Continuity Experiment](liaisonscape-automatic-route-near-center-label-pressure-continuity-experiment.md).
Its result is `MIXED`: label pressure is causal, but its boundary is
Relation-specific. Mentors has a multi-owner hard-plus-halo boundary, while
the Authority/Lighthouse straight candidate loses to foreign-label halo
pressure alone. Removing only halo pressure recovers straight offset `0` for
Authority/Lighthouse but leaves mentors at `-52`; occupied-path and Node-safety
negative controls remain intact.

No runtime, routing, score, candidate-set, label placement, sample, parallel,
self-loop, schema, release, or publication change was made. The selected next
bounded checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-LABEL-HALO-CONTINUITY-SEMANTICS-EXPERIMENT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-LABEL-HALO-MINIMUM-CLEARANCE-BOUNDARY-AUDIT1 (2026-09-01)

The bounded minimum-clearance audit is recorded in [LiaisonScape
Automatic-Route Label-Halo Minimum-Clearance Boundary Audit](liaisonscape-automatic-route-label-halo-minimum-clearance-boundary-audit.md).
Its result is `PARTIAL`: JA authority/lighthouse has reproducible hard-safe
breakpoints at approximately `5.809`, `12.840`, and `20.087`, but the broader
graph has dense Relation-specific breakpoints and EN has no shared boundary
with the same effect. Symbolic `Cmin = 0` recovers one JA straight route but
does not reduce H2 crossings or resolve the Clara/Thomas hard-label frontier.

No runtime, routing, score, candidate-set, label placement, sample, parallel,
self-loop, schema, release, or publication change was made. The selected next
bounded checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-HARD-LABEL-CORRIDOR-BOUNDARY-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-HARD-LABEL-CORRIDOR-BOUNDARY-AUDIT1 (2026-09-01)

The bounded hard-label corridor audit is recorded in [LiaisonScape
Automatic-Route Hard-Label Corridor Boundary Audit](liaisonscape-automatic-route-hard-label-corridor-boundary-audit.md).
Its result is `MIXED`: in JA, the `clara + archive` hard corridor excludes
the `+40/+52` near-center `mentors` candidates and `-52` is the first
hard-safe opposite-side candidate. EN has a different Clara-only topology,
and halo/occupied/Node signals still affect final winners across locales.

The supplied `Experimental — Final-label feedback` clean-layout observation is
recorded as manual context only. No runtime, routing, score, candidate-set,
label placement, sample, parallel, self-loop, initial-placement, schema,
release, or publication change was made. The selected next bounded checkpoint
is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-HARD-CORRIDOR-RELIEF-AUDIT1`;
it is selected only and is not started by this record.

### LiaisonScape Node-label collision geometry follow-ups (2026-09-01)

The hard-label corridor audit established that current automatic-route hard
collision uses the full axis-aligned Node-label background rectangle and the
41 sampled route points. The rectangle is a conservative collision obstacle;
it is not the rendered glyph ink itself. The following two future checkpoints
are registered to investigate that distinction without changing the current
runtime contract.

#### E2R-LIAISONSCAPE-NODE-LABEL-INK-GEOMETRY-COLLISION-AUDIT1

Audit whether Node-label collision geometry should be tighter than the full
background rectangle. Compare, in a bounded read-only experiment:

- the current full background rectangle;
- deterministic per-line tight text bounds;
- rendered text/ink bounds where browser measurement is reliable;
- true glyph-outline geometry only if its cross-browser cost is acceptable;
- a simpler deterministic text-bound approximation.

The audit must measure whether empty corners, whitespace, and multiline label
space are unnecessarily forcing Edge curvature, especially in the
Clara/Thomas hard corridor. It must preserve deterministic and cross-browser
routing behavior and must not assume that glyph outlines are automatically the
correct answer. Paint/background geometry and collision geometry remain
separate concepts; registering this audit does not authorize ink-based
Production collision semantics.

#### E2R-LIAISONSCAPE-NODE-LABEL-CONNECTOR-VISIBILITY-AUDIT1

Audit Node-label connector visibility, attachment, and occlusion separately
from collision geometry. The current background rectangle may visually cover
part of a connector even when the connector is logically attached correctly.
The audit should measure the visible connector endpoint, background occlusion,
ownership legibility, text/ink clearance, and multiline JA/EN behavior. It must
determine whether connector geometry should use a separate contract or remain
coupled to the background rectangle; it must not automatically couple
connector changes to route-collision changes.

These are presentation follow-ups only. They do not authorize final-label
feedback adoption, initial-placement changes, parallel-edge bundle changes,
self-loop changes, temporal drag changes, hard-collision relaxation, halo
retuning, candidate-set changes, or a multi-label solver.

The execution order remains:

1. `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-HARD-CORRIDOR-RELIEF-AUDIT1`
2. `E2R-LIAISONSCAPE-NODE-LABEL-INK-GEOMETRY-COLLISION-AUDIT1`
3. `E2R-LIAISONSCAPE-NODE-LABEL-CONNECTOR-VISIBILITY-AUDIT1`

The first checkpoint remains the immediate next checkpoint. The two new
checkpoints are future registrations only, and no production or preview change
was made by this roadmap update.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-HARD-CORRIDOR-RELIEF-AUDIT1 (2026-09-01)

The read-only Current-to-feedback audit is recorded in [LiaisonScape
Automatic-Route Final-Label Feedback Hard-Corridor Relief Audit](liaisonscape-automatic-route-final-label-feedback-hard-corridor-relief-audit.md).
Its result is `CASE10 / MIXED`: JA moves only the Clara final label and keeps
the `mentors` winner at `-52`, while EN changes `mentors` from `-64` to `+40`
and makes that route clear against feedback rectangles but hard-unsafe against
the original provisional Clara rectangle. Feedback therefore provides local
corridor relief without establishing a locale-independent safe selection
semantic; route and crossing regressions remain.

No runtime, routing, score, candidate-set, label placement, sample, preview,
parallel, self-loop, initial-placement, schema, release, or publication change
was made. The existing preview text `Feedback: fixed at pass 2` was confirmed
to describe a single feedback replay, not a fixed-point solver. The selected
next bounded checkpoint is
`E2R-LIAISONSCAPE-NODE-LABEL-INK-GEOMETRY-COLLISION-AUDIT1`; it is selected
only and is not started by this record.

### E2R-LIAISONSCAPE-NODE-LABEL-INK-GEOMETRY-COLLISION-AUDIT1 (2026-09-01)

The bounded collision-geometry audit is recorded in [LiaisonScape Node-label
Ink Geometry Collision Audit](liaisonscape-node-label-ink-geometry-collision-audit.md).
Its result is `G2 / EXACT RESULT 2`: deterministic tight-content and per-line
regions relieve some route pressure, but the JA and EN `mentors` primary hard
owners remain in the estimated text region. JA keeps `mentors=-52`; EN changes
`-64→-52` without straightening the route. The result is locale- and
Relation-dependent, and no Production collision replacement is justified.

No runtime, routing, collision, label rendering, sample, preview, parallel,
self-loop, connector, initial-placement, schema, release, or publication
change was made. Modes D (rendered ink) and E (true glyph outline) were not
measured. The selected next bounded checkpoint is
`E2R-LIAISONSCAPE-PARALLEL-EDGE-BUNDLE-SPACING-AUDIT1`; it is selected only
and is not started by this record.

### E2R-LIAISONSCAPE-PARALLEL-EDGE-BUNDLE-SPACING-AUDIT1 (2026-09-01)

The bounded parallel ordinary-edge audit is recorded in [LiaisonScape
Parallel Edge Bundle Spacing Audit](liaisonscape-parallel-edge-bundle-spacing-audit.md).
Its result is `CASE 3 / EXACT RESULT 3 / DECISION C`: label pressure shifts an
otherwise balanced `clara-thomas-mentors` / `clara-thomas-supervises` bundle.
Without label pressure, JA and EN both return to the nominal `+40/-40`
opposite-sided bundle. The sibling-only occupied ablation changes only the
later edge's outward offset and collapses the bundle when removed; it is not a
justification for changing occupied-path semantics.

The current replay also shows a CASE 6 same-side symptom, but the label-only
ablation restores the accepted physical-side arrangement. This does not
demonstrate a reverse-endpoint or slot-normalization regression, and it does
not justify Production changes to slot spacing, physical-side policy, score
weights, or curvature. H2 identities remain unchanged; the lower diagnostic
route totals are not an acceptance improvement, and JA incurs one additional
provisional label conflict under the label ablation.

No LiaisonScape runtime, test, sample, preview, coordinate, initial-placement,
Final-label feedback, self-loop, connector, schema, release, or publication
change was made. The selected next bounded checkpoint is exactly
`E2R-LIAISONSCAPE-PARALLEL-EDGE-LABEL-PRESSURE-ISOLATION-EXPERIMENT1`.

### E2R-LIAISONSCAPE-PARALLEL-EDGE-LABEL-PRESSURE-ISOLATION-EXPERIMENT1 (2026-09-01)

The bounded label-pressure experiment is recorded in [LiaisonScape Parallel
Edge Label-pressure Isolation Experiment](liaisonscape-parallel-edge-label-pressure-isolation-experiment.md).
Its result is `CASE 3 / EXACT RESULT 3 / DECISION C`: hard label collision
starts the first parallel side switch, while soft halo and sibling
occupied-path pressure amplify the final one-sided bundle. Current JA/EN
replays are `mentors=-52/-64` and `supervises=-76/-88`; hard-only does not
restore opposite sides, halo-only restores them only with hard-unsafe geometry,
and no-label returns to `+40/-40` only as an unsafe diagnostic.

JA has a Clara-plus-Archive hard blocker; EN is materially controlled by the
Clara endpoint label. The hard-only full-graph comparison changes unrelated
routes and increases JA H2, so it is not a Production candidate. No hard
collision relaxation, halo change, label-geometry change, slot change,
physical-side change, occupied-path change, runtime, sample, preview, or
release change was made. The selected next bounded checkpoint is exactly
`E2R-LIAISONSCAPE-PARALLEL-EDGE-HARD-SIDE-SWITCH-CASCADE-AUDIT1`.

### E2R-LIAISONSCAPE-PARALLEL-EDGE-HARD-SIDE-SWITCH-CASCADE-AUDIT1 (2026-09-01)

The bounded cascade audit is recorded in [LiaisonScape Parallel Edge
Hard-Side-Switch Cascade Audit](liaisonscape-parallel-edge-hard-side-switch-cascade-audit.md).
Its result is `CASE 4 / EXACT RESULT 4 / DECISION E`: the current label
geometry leaves no hard-safe opposite-side pair for the Clara/Thomas parallel
group. JA and EN each have 256 swapped-side candidate pairs; all are mutually
occupied-safe, but zero are hard-safe. The first `mentors` side switch is
therefore hard-label-driven, while the later `supervises` outward movement is
the occupied-path/halo cascade after that switch. Reversing the bounded route
order does not open a balanced safe pair.

No runtime, routing, score, candidate-set, label placement, label geometry,
parallel slot, occupied-path, self-loop, initial-placement, Final-label
feedback, sample, preview, schema, release, or publication change was made.
The favorable Initial Placement plus Experimental Final-label feedback image
remains manual context only. The selected next bounded checkpoint is exactly
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-INITIAL-PLACEMENT-INTERACTION-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-INITIAL-PLACEMENT-INTERACTION-AUDIT1 (2026-09-01)

The bounded Final-label feedback / Initial Placement interaction audit is
recorded in [LiaisonScape Automatic-Route Final-Label Feedback / Initial-Placement Interaction Audit](liaisonscape-automatic-route-final-label-feedback-initial-placement-interaction-audit.md).
Its result is `CASE 5 / EXACT RESULT 5 / DECISION F`: feedback opens the
balanced parallel corridor on the favorable clean HEAD geometry in both
locales, but its effect changes with starting geometry and locale. Current
Production coordinate-less placement reproduces the dirty stored geometry in
this sample; the JA feedback result remains blocked, while the EN diagnostic
opens only 24 safe candidate pairs and its selected `mentors=+40` route is
hard-unsafe against the original provisional label.

Initial Placement alone opens no hard-safe opposite-side pair in any measured
start. R0 is zero in all six locale/start conditions; R1 is `91` for JA/EN
S0, `0` for JA S1/S2, and `24` for EN S1/S2. The S0 improvement is therefore
an interaction result, not evidence for universal feedback adoption or an
Initial Placement objective change. The supplied clean screenshot remains
manual evidence only because its exact coordinates are unavailable.

No LiaisonScape runtime, routing, score, label, collision, parallel,
Initial-placement, sample, preview, schema, release, or publication change
was made. The selected next bounded checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-LOCALE-START-REGRESSION-ISOLATION1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-S0-S1-FOCAL-COORDINATE-ATTRIBUTION-EXPERIMENT1 (2026-09-01)

The narrower S0/S1 focal coordinate attribution experiment is recorded in
[LiaisonScape S0/S1 Focal Coordinate Attribution Experiment](liaisonscape-automatic-route-s0-s1-focal-coordinate-attribution-experiment.md).
It replaced the broader locale/start regression audit for immediate
execution; that broader checkpoint remains deferred, not completed or deleted.

The experiment evaluated all 16 JA masks while restoring only the focal Nodes
`Clara`, `Thomas`, `Archive`, and `Lighthouse` from S1 to exact S0 coordinates.
Two inclusion-minimal V0 masks opened diagnostic R1 corridor pairs: `0011`
(`Archive + Lighthouse`) with `12`, and `1001` (`Clara + Lighthouse`) with
`16`. Only `0011` was conservative against its original R0 provisional labels.

The critical control was `H1111` versus full S0: H1111 produced `0` safe pairs,
while full S0 produced `91` and selected `+40/-40`. Therefore the result is
`CASE 7 / EXACT RESULT 7 / DECISION E`: the four focal-node neighborhood is
insufficient, and at least one non-focal coordinate difference or broader
global topology interaction must be identified before changing placement
parameters. EN bounded replay showed partial locale portability (`0000=24`,
`1001=16`, full S0=`91`) but did not alter the primary decision.

No LiaisonScape runtime, Initial Placement, routing, feedback, label,
collision, parallel, sample, preview, schema, release, or publication change
was made. The selected next bounded checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-GLOBAL-TOPOLOGY-ATTRIBUTION-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-GLOBAL-TOPOLOGY-ATTRIBUTION-AUDIT1 (2026-09-01)

The exhaustive non-focal attribution audit is recorded in [LiaisonScape
Initial-placement Global-topology Attribution Audit](liaisonscape-initial-placement-global-topology-attribution-audit.md).
Its result is `CASE 1 / EXACT RESULT 1 / DECISION A`: the single outside-focal
Node `maya` is an inclusion-minimal V0 sufficient set in JA (`000010`), opening
the H1111 feedback corridor from `0` to `63` safe pairs. Maya is a direct
neighbor of both focal endpoints, while the final-label replay changes two
Node labels and nine ordinary routes, so label-placement and route propagation
are material.

The result does not reproduce Full S0 presentation: Maya alone selects
`+40/-100`, while JA strong-reproduction masks are `111011` and `111111`.
The JA minimal mask does not open EN, so the attribution is locale-dependent
and EN requires a different or broader non-focal coordinate set. No numeric
placement rule, Production Initial Placement change, feedback adoption, or
other runtime change is justified. The selected next checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-NONFOCAL-NODE-GEOMETRY-CRITERIA-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-QUALITY-CRITERIA-VALIDATION1 (2026-09-01)

The cross-neighborhood and cross-sample validation is recorded in [LiaisonScape
Initial-placement Local-neighborhood Quality Criteria Validation](liaisonscape-initial-placement-local-neighborhood-quality-criteria-validation.md).
Its result is `CASE 2 / EXACT RESULT 2 / DECISION A`: the shared-neighbor
spacing criterion is supported by an ordinary Class O neighborhood in Ashen
Crown JA/EN, without using labels, routes, locale, or rendered text as
placement inputs and without a selected hard-safety counterexample.

The inventory found four Class P and 50 Class O eligible instances across the
available samples; seven bounded detail instances were replayed. The result
is partial across locale presentation magnitude, and samples without a
stored/auto pair remain uninformative, but the criterion is sufficiently
supported for one bounded diagnostic implementation experiment. No Production
Initial Placement, routing, feedback, label, collision, sample, preview,
schema, release, or publication change was made. The selected next checkpoint
is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-SPACING-EXPERIMENT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-NONFOCAL-NODE-GEOMETRY-CRITERIA-AUDIT1 (2026-09-01)

The bounded non-focal geometry audit is recorded in [LiaisonScape
Initial-placement Non-focal Node Geometry Criteria Audit](liaisonscape-initial-placement-nonfocal-node-geometry-criteria-audit.md).
Its result is `CASE 11 / EXACT RESULT 5 / DECISION B`: Maya's coordinate
change combines direct corridor clearance with Node-label and route
propagation. The dominant measurable component selected for follow-up is the
shared-endpoint neighbor arrangement around Maya, Clara, Thomas, and Beacon.

JA's coarse sweep changes from `0` safe pairs at `t=.75` to `49` at `.875`
and `63` at S0, but midpoint refinement observes closed/open alternation in
the bracket. PX opens while PY does not, so the result supports a local
neighborhood criterion rather than an axis rule or numeric distance threshold.
The first open point changes three final Node labels and nine ordinary routes;
held-label controls show that direct and propagated effects are both material.
The identical EN sweep remains closed on the main path, giving locale class
L3 and preventing locale-independent adoption.

No Production Initial Placement, routing, feedback, label, collision,
parallel, self-loop, sample, preview, schema, release, or publication change
was made. The selected next checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-QUALITY-CRITERIA-VALIDATION1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-SPACING-EXPERIMENT1 (2026-09-01)

The bounded implementation experiment is recorded in [LiaisonScape
Initial-placement Local-neighborhood Spacing Experiment](liaisonscape-initial-placement-local-neighborhood-spacing-experiment.md).
Its result is `CASE 6 / EXACT RESULT 6 / DECISION D`: the topology-only
shared-neighbor adjustment opened the selected local angle in Lighthouse and
Ashen Crown, but its displacement semantics introduced new R0 hard
route/Node-label conflicts in Lighthouse and replaced the hard-conflict set in
Ashen. The candidate had no new Node-body overlap, was deterministic,
locale-independent, and exact no-op on the no-shared-neighbor controls, but it
failed the primary safety gate.

No Production Initial Placement, routing, feedback, label, collision,
parallel, self-loop, sample, preview, schema, or release change was made. No
LiaisonScape commit or candidate adoption occurred. The selected next
checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-DISPLACEMENT-BOUNDARY-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-DISPLACEMENT-BOUNDARY-AUDIT1 (2026-09-01)

The rejected-candidate displacement boundary audit is recorded in [LiaisonScape
Initial-placement Local-neighborhood Displacement Boundary Audit](liaisonscape-initial-placement-local-neighborhood-displacement-boundary-audit.md).
Its result is `CASE 4 / EXACT RESULT 2 / DECISION B`: a safe partial forward
displacement region exists in both Lighthouse and Ashen before the first new
final-label conflict, but the rejected minimum-line-distance selector chooses
an endpoint as W rather than the validated shared neighbor in both topologies.
The target-role mismatch is therefore the primary failure boundary; mirror
direction is only partially safer and does not restore the intended local
spacing semantics.

No Production Initial Placement, routing, feedback, label, collision,
parallel, self-loop, sample, preview, schema, or release change was made. No
coefficient tuning or candidate resurrection occurred. The selected next
checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-TARGET-SELECTION-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-TARGET-SELECTION-AUDIT1 (2026-09-01)

The shared-neighbor target-selection audit is recorded in [LiaisonScape
Initial-placement Shared-neighbor Target Selection Audit](liaisonscape-initial-placement-shared-neighbor-target-selection-audit.md).
Its result is `CASE 6 / EXACT RESULT 5 / DECISION G`: Lighthouse has a
topology-distinguishable shared-neighbor role because the Clara-Thomas pair
has relation multiplicity two, but Ashen's 21-role overlap cluster leaves the
validated Kael role non-unique. The generic minimum-line-distance selector
still chooses Clara and Elara as W respectively, so geometry ranking is not a
semantic target contract. Target role and adjustment scope remain
under-specified, with a sample-split result.

The exhaustive role inventory preserved directed Relation evidence without
weighting it, excluded self-relations, compared stored and auto support
triangles, and found identical topology/geometry in the JA/EN pairs. No
Node movement, candidate placement rule, routing, feedback, label, sample,
preview, schema, release, or publication change was made. The selected next
bounded checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-ROLE-SYMMETRY-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-ROLE-SYMMETRY-AUDIT1 (2026-09-01)

The shared-neighbor role-symmetry and motif-level identifiability audit is
recorded in [LiaisonScape Initial-placement Shared-neighbor Role Symmetry
Audit](liaisonscape-initial-placement-shared-neighbor-role-symmetry-audit.md).
Its result is `CASE 10 / EXACT RESULT 5 / DECISION G`: Lighthouse has one
unordered triangle whose Clara-Thomas multiplicity identifies the diagnostic
ordered role `(Clara, Thomas; Maya)`, while Ashen's support triangle has
structurally distinguishable Darius, Elara, and Kael but no source-grounded
reason to designate Kael as W. The full inventory contains 19 unordered
motifs and 57 ordered roles; literal local symmetry is `SYM0=15` and
`SYM4=4`, but semantic-W ambiguity remains common among the 15 O motifs.

The audit reinterprets the Maya result as motif presentation evidence and the
Kael result as a support reference only. It records motif-level geometry and
overlap scope without introducing a score, threshold, target movement, or
placement rule. No Production Initial Placement, routing, feedback, label,
sample, preview, schema, release, or publication change was made. The
selected next bounded checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-ADJUSTMENT-SCOPE-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-ADJUSTMENT-SCOPE-AUDIT1 (2026-09-01)

The shared-neighbor adjustment-scope audit is recorded in [LiaisonScape
Initial-placement Shared-neighbor Adjustment Scope Audit](liaisonscape-initial-placement-shared-neighbor-adjustment-scope-audit.md).
Its result is `CASE 2 / EXACT RESULT 2 / DECISION A`: an overlap-cluster
scope provides one structural model for isolated motifs and overlapping
motifs. Lighthouse is one isolated motif, while Ashen has seven motifs in
one nine-Node overlap cluster within a ten-Node component; five of seven
motifs compress in the stored-to-auto comparison, so one-motif processing is
too narrow and whole-component scope is too broad.

The scope result does not define a quality threshold or movement rule. The
node-packing result is partial, attraction is not identified as causal, and
the available samples contain no component with multiple separate motif
clusters. The overlap-cluster concept is retained as a reusable hypothesis
only; no `ai-knowledge` entry was changed. No Node movement, placement
candidate, force, routing, feedback, label, sample, preview, schema, release,
or publication change was made. The selected next bounded checkpoint is
exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-QUALITY-CRITERIA-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-QUALITY-CRITERIA-AUDIT1 (2026-09-01)

The motif-cluster quality-criteria audit is recorded in [LiaisonScape
Initial-placement Motif-cluster Quality Criteria Audit](liaisonscape-initial-placement-motif-cluster-quality-criteria-audit.md).
Its result is `CASE 6 / EXACT RESULT 2 / DECISION D`: the evidence supports a
two-layer descriptive bottleneck profile. Layer 1 describes per-motif shape
and Node-to-chord bottlenecks, with absolute packing as context. Layer 2
describes shared-Node fan-out, cluster aggregation, and boundary context.
Lighthouse has an isolated motif with scale-and-shape collapse; Ashen has
seven overlapping motifs, three clear shared-Node fan-out bottlenecks, and
multiple chord bottlenecks. A single scalar score, dominance ordering, or
numeric threshold is not supported.

The full inventory reproduced 19 unordered motifs and 57 ordered roles across
15 files. The clean Lighthouse and Ashen JA/EN pairs were topology- and
geometry-identical within each pair. The geometry transform check preserved
normalized shape and overlap topology while scaling raw distances, supporting
separate absolute-packing and normalized-shape descriptors. The packing
hypothesis remains partial; no causal force attribution was made. The profile
is a reusable hypothesis only and no `ai-knowledge` entry was changed.

No Production Initial Placement, routing, feedback, label, collision,
parallel, self-loop, sample, preview, schema, release, or publication change
was made. The selected next bounded checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-QUALITY-CRITERIA-VALIDATION1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-QUALITY-CRITERIA-VALIDATION1 (2026-09-01)

The two-layer motif/overlap-cluster quality validation is recorded in
[LiaisonScape Initial-placement Motif-cluster Quality Criteria
Validation](liaisonscape-initial-placement-motif-cluster-quality-criteria-validation.md).
Its result is `CASE 2 / EXACT RESULT 2 / DECISION B`: the two-layer profile is
validated after collapsing redundant descriptors. P4 is the same geometric
quantity as the P2 vertex-to-opposite-side altitude, and P1 motif-adjacent
distances are the P2 side lengths. P1 cluster-wide absolute packing remains
context; P3 shared-Node fan-out and P5 boundary context remain distinct
cluster-layer information.

The validation reproduced 19 unordered motifs and 57 ordered roles, passed
zero-motif and two-disconnected-cluster controls, and confirmed translation,
rotation, scale, Entity-order, Relation-order, locale, and deterministic
invariance boundaries. A controlled shared-Node state changed fan-out from
`60` to `25` degrees while preserving motif shape, confirming that the
overlap layer adds information unavailable from one motif alone. Packing is
supported as one context dimension but is only partial as a complete quality
explanation; attraction was not assigned causality.

No Node movement, force, scalar score, numeric threshold, route/label input,
Production placement, sample, preview, schema, release, or publication change
was made. The strengthened reusable result remains a hypothesis only and no
`ai-knowledge` entry was changed. The selected next bounded checkpoint is
exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-REGULARIZATION-SEMANTICS-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-REGULARIZATION-SEMANTICS-AUDIT1 (2026-09-01)

The motif-cluster regularization semantics audit is recorded in [LiaisonScape
Initial-placement Motif-cluster Regularization Semantics
Audit](liaisonscape-initial-placement-motif-cluster-regularization-semantics-audit.md).
Its result is `CASE 5 / EXACT RESULT 4 / DECISION D`: source-independent
improvement directions are definable, but source-independent activation remains
unspecified. An isolated motif supports a symmetric centroid-preserving opening
family; a shared Node supports symmetric angular fan-out with radial distances
preserved; and an overlap cluster requires constraint inventory and composition
because shared Nodes receive multiple motif and fan-out constraints.

A single-vertex push was rejected as asymmetric, and always-on regularization
was rejected as an implicit ideal-shape or spreading policy. The audit does not
introduce a scalar score, numeric threshold, force, displacement amount, target
shape, route/label input, or Production placement rule. No Node movement,
routing, feedback, label, collision, parallel, self-loop, sample, preview,
schema, release, publication, or `ai-knowledge` change was made. The selected
next bounded checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-REGULARIZATION-ACTIVATION-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-REGULARIZATION-ACTIVATION-AUDIT1 (2026-09-01)

The source-independent regularization activation audit is recorded in
[LiaisonScape Initial-placement Motif-cluster Regularization Activation
Audit](liaisonscape-initial-placement-motif-cluster-regularization-activation-audit.md).
Its result is `CASE 5 / EXACT RESULT 3 / DECISION E`: transition history can
detect and help prevent solver-induced deterioration after a comparable Derived
geometry exists, but it cannot repair bottlenecks already present in the
initial seed. Lighthouse is seed-born (`ORIGIN-L1`); Ashen combines seed-present
geometry with mixed settling changes (`ORIGIN-L3/L4`).

Per-constraint deterioration is detectable but too sensitive as a complete
activation policy, while cluster Pareto activation remains underdetermined in
mixed improvement/worsening states. Exact degeneracy is retained only as a
safety floor, proposal-relative non-worsening is retained only as a guard, and
workflow-bounded participation is supported. No threshold, ranking, reference,
ideal shape, scalar score, force, Node movement, Production placement,
routing, feedback, label, sample, preview, schema, release, publication, or
`ai-knowledge` change was made. The selected next bounded checkpoint is
exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-BOTTLENECK-ORIGIN-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-BOTTLENECK-ORIGIN-AUDIT1 (2026-09-01)

The seed-versus-settling bottleneck-origin audit is recorded in [LiaisonScape
Initial-placement Motif-cluster Bottleneck Origin
Audit](liaisonscape-initial-placement-motif-cluster-bottleneck-origin-audit.md).
Its result is `CASE 7 / EXACT RESULT 5 / DECISION F`: the current seed is
deterministic but sensitive to topology-tie and lexical ID assignment. An
isomorphic ID rename changes the Node-to-slot assignment and removes
Lighthouse's exact motif collinearity and Ashen's exact zero-gap fan-out,
whereas reversing Entity or Relation arrays does not change them.

Settling remains a distinct secondary boundary: it partially recovers the
Lighthouse seed-born collapse and creates mixed motif/fan-out changes in Ashen.
Component packing does not materially create the observed one-component
bottlenecks. No seed, slot, radius, phase, settling, coefficient, force,
threshold, Production placement, routing, feedback, label, sample, preview,
schema, release, publication, or `ai-knowledge` change was made. The selected
next bounded checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-STABILITY-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-STABILITY-AUDIT1 (2026-09-01)

The seed-assignment stability audit is recorded in [LiaisonScape
Initial-placement Seed-assignment Stability Audit](liaisonscape-initial-placement-seed-assignment-stability-audit.md).
Its result is `CASE 7 / EXACT RESULT 5 / DECISION D`: higher-order topology
distinguishes all Nodes in the tested Lighthouse and Ashen samples, but K3,
star, path, symmetric-motif, and ring controls confirm that automorphic Nodes
cannot receive a unique topology-only order. Structural partitioning and
orbit-aware semantics are supported as assignment boundaries; current ID
choices are not shown to be quality-neutral, and seed geometry quality remains
a separate motif-aware question.

The audit reproduced the current lexical seed's ID-rename-sensitive
collinearity and zero-gap behavior, while Entity/Relation array reversal
remained stable. It used only a temporary diagnostic signature/orbit observer;
no Production seed, lexical tie-break, slot, radius, phase, settling,
routing, feedback, label, sample, preview, schema, release, or
`ai-knowledge` change was made. The selected next bounded checkpoint is
exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-AWARE-SEED-GEOMETRY-SEMANTICS-AUDIT1`;
it is selected only and is not started by this record.

### E2R-PERSONAL-STORAGE-RESEARCH1 (2026-09-01)

The E2R-managed Personal Storage research is recorded in [E2R-managed
Personal Storage](../research/exploratory/e2r-managed-personal-storage.md).
It records an exploratory E2R Personal Storage / Personal E2R Space direction:
authenticated durable private storage, candidate Google sign-in UX without a
Google protocol dependency, provider abstraction, managed/BYO/hybrid models,
resource responsibility separation, Save/Publish/Share semantics, portability,
revision and security questions, and the distinction from Anonymous Dataset
Sharing and Federated E2R.

The preferred hybrid model is a research hypothesis only. Basic local and
accountless use remains supported; no provider, backend, account, auth flow,
manifest, Handoff, Core, Extension, schema, UI, deployment, or publication
was selected or implemented. This research does not reorder the active
LiaisonScape Initial Placement sequence; its current completed and selected
checkpoints remain unchanged.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-AWARE-SEED-GEOMETRY-SEMANTICS-AUDIT1 (2026-09-01)

The motif-aware seed-geometry semantics audit is recorded in [LiaisonScape
Initial-placement Motif-aware Seed-geometry Semantics
Audit](liaisonscape-initial-placement-motif-aware-seed-geometry-semantics-audit.md).
Its result is `CASE 5 / EXACT RESULT 5 / DECISION D`: exact motif
non-degeneracy and shared-Node same-ray distinctness form a coherent,
threshold-free seed admissibility floor, compatible with automorphic Nodes
when expressed as symmetry-compatible geometry. The floor does not define
near-collapse quality, an ideal shape, a scalar objective, or a semantic
movement target.

The current finite center/ring/slot vocabulary contains an admissible
assignment for the tested Lighthouse and Ashen instances and the small
controls, but the G7 slot-capacity control shows that it cannot represent the
hard profile generally: 16 incident motif neighbors cannot occupy 16 distinct
directions in the current eight-direction rings. Continuous feasibility
remains available in that control. No Production seed, assignment, slot,
radius, phase, settling, routing, feedback, label, sample, preview, schema,
Core, Extension, Handoff, or Storage Research change was made. The selected
next bounded checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-SPACE-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-SPACE-AUDIT1 (2026-09-01)

The seed candidate-space audit is recorded in [LiaisonScape Initial-placement
Seed Candidate-space Audit](liaisonscape-initial-placement-seed-candidate-space-audit.md).
Its result is `CASE 6 / EXACT RESULT 6 / DECISION E`: the current finite
center/ring vocabulary grows position count without generally growing
directional capacity, because later rings repeat the same eight directions.
The G7 control has 16 incident motif neighbors but only 8 distinct center
directions, while diagnostic staggered and topology-derived directional
families can express the hard witness. This supports scalable candidate-space
capacity as a requirement, but does not select a Production generator,
direction count, radius, phase, or assignment algorithm.

`F-CURRENT`, `F-ROLE`, and `F-SET` were kept separate. Lighthouse and Ashen
remain existentially representable by the current point set despite their
current-assignment failures; G7 is not representable in that finite set. The
audit remains an existence boundary only: near-collapse, labels, routes,
settling, crossings, and global quality objectives remain separate. No
Production seed, slot, radius, phase, settling, routing, feedback, label,
sample, preview, schema, Core, Extension, Handoff, Storage Research, or
`ai-knowledge` change was made. The selected next bounded checkpoint is
exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-SEMANTICS-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-SEMANTICS-AUDIT1 (2026-09-01)

The seed candidate-generation semantics audit is recorded in [LiaisonScape
Initial-placement Seed Candidate-generation Semantics
Audit](liaisonscape-initial-placement-seed-candidate-generation-semantics-audit.md).
Its result is `CASE 7 / EXACT RESULT 3 / DECISION A`: source-independent,
ID-neutral candidate generation can be described semantically without choosing
exact coordinates. Geometric freedom must scale with topology-derived hard
constraint demand, not Node count alone; both position capacity and usable
directional capacity must avoid fixed-direction saturation.

The current fixed-phase family remains only a baseline: its position count
grows while the center direction set remains eight, so G7 (`R(s)=16`) is not
representable. Diagnostic phase-diverse, graph-relative, and general-position
families remove the observed boundary, but no exact generator, phase, radius,
slot count, assignment algorithm, solver, or Production rule was selected.
Global simultaneous hard feasibility remains a validation oracle, and
capability distribution, practical symmetry-compatible construction, and
cluster allocation remain partial/open boundaries. No Production seed,
candidate vocabulary, settling, routing, feedback, label, sample, preview,
schema, Core, Extension, Handoff, Storage Research, or `ai-knowledge` change
was made. The selected next bounded checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-SEMANTICS-VALIDATION1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-SEMANTICS-VALIDATION1 (2026-09-01)

The seed candidate-generation semantics validation is recorded in
[LiaisonScape Initial-placement Seed Candidate-generation Semantics
Validation](liaisonscape-initial-placement-seed-candidate-generation-semantics-validation.md).
Its result is `CASE 2 / EXACT RESULT 2 / DECISION B`: representational
sufficiency for topology-derived exact hard constraints remains required, but
topology need not be a direct generator input. Same-Node-count controls and
the high-R series falsified Node-count-only sufficiency for the current
fixed-direction family, while an N-only general-position diagnostic family
provided hard-feasible witnesses for all tested controls and real samples.

The result refines, rather than discards, the prior semantic: topology-derived
demand remains the validation target, while a sufficiently rich topology-
agnostic family may satisfy that target. Phase-diverse, graph-relative, and
general-position families remain diagnostics only. Capability distribution,
global simultaneous feasibility, practical symmetry-compatible construction,
and downstream presentation remain separate boundaries. No Production
generator, candidate vocabulary, slot count, radius, phase, assignment,
settling, routing, feedback, label, sample, preview, schema, Core, Extension,
Handoff, Storage Research, or `ai-knowledge` change was made. The selected
next bounded checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-INPUT-BOUNDARY-AUDIT1`;
it is selected only and is not started by this record.

### GitHub Sponsors follow-up (2026-09-02)

- GitHub Sponsors account approval is complete.
- Account-level default funding is configured through
  `sukoyaka-dopeness/.github/.github/FUNDING.yml`.
- Repository-level Sponsorships enablement is an administrative GitHub setting
  and remains separate from application runtime.
- NarrativeLine and LiaisonScape should expose GitHub Sponsors only as a
  low-prominence secondary/support affordance near the bottom of Home, not as a
  primary CTA or Header action.
- Hub placement should be evaluated separately for cross-app consistency rather
  than assumed from the application placement.
- No runtime Sponsor link/button implementation is authorized by this roadmap
  update.

This status-only update does not reorder the active LiaisonScape Initial
Placement sequence and does not authorize changes to application source,
runtime behavior, or repository-local funding files.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-INPUT-BOUNDARY-AUDIT1 (2026-09-02)

The seed candidate-generation input boundary audit is recorded in
[LiaisonScape Initial-placement Seed Candidate-generation Input Boundary Audit](liaisonscape-initial-placement-seed-candidate-generation-input-boundary-audit.md).
Its result is `CASE 2 / EXACT RESULT 1+2+3 / DECISION B+C`: Node count is the
minimum required graph-derived capacity parameter for a finite, ID-neutral
candidate family; topology may optionally adapt generation, while topology-
derived motif and shared-ray constraints remain validation targets. Generator
input and validation input can therefore be separated without losing the exact
safety floor.

Current source-stage coupling, ID/order use, and the separate frame/scale
context are recorded as boundaries, not implementation instructions. No
Production generator, assignment, settling, routing, label, sample, preview,
or `ai-knowledge` change was made. The selected next bounded checkpoint is
exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-DESIGN-BOUNDARY-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-DESIGN-BOUNDARY-AUDIT1 (2026-09-02)

The seed candidate-generation design boundary audit is recorded in
[LiaisonScape Initial-placement Seed Candidate-generation Design Boundary Audit](liaisonscape-initial-placement-seed-candidate-generation-design-boundary-audit.md).
Its result is `CASE 11 / EXACT RESULT 1+2+3+4+5 / DECISION E`: a finite,
deterministic, ID-neutral capacity contract is sufficiently bounded for an
offline family experiment design, while a generic N-only base and optional
topology adaptation remain equally permitted. General-position-like families
are diagnostic only; no exact coordinates or Production design was selected.

The current runtime's discovery, ranking, candidate creation, assignment,
settling, and packing coupling is recorded as a causal limitation. No
Production source, assignment, settling, routing, label, sample, preview, or
`ai-knowledge` change was made. The selected next bounded checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-FAMILY-OFFLINE-EXPERIMENT1-DESIGN1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-FAMILY-OFFLINE-EXPERIMENT1-DESIGN1 (2026-09-02)

The offline candidate-family Experiment 1 design is recorded in
[LiaisonScape Initial-placement Seed Candidate-family Offline Experiment 1 Design](liaisonscape-initial-placement-seed-candidate-family-offline-experiment1-design.md).
The design is ready with `F0` (the current fixed eight-direction family) and
`F1-ALG` (an exact N-only algebraic general-position-like diagnostic family).
`F2` structured geometry is deferred because a distinct exact/provable
comparator is not yet selected. `F-SET` is the primary level and F-MAP-CURRENT
is secondary only.

The future run will use exact GEO-0/GEO-3 predicates, no thresholds or scores,
and will remain offline in a disposable worktree. No Production generator,
assignment, settling, packing, routing, label, sample, preview, or
`ai-knowledge` change was made. The selected next bounded checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-FAMILY-OFFLINE-EXPERIMENT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-FAMILY-OFFLINE-EXPERIMENT1 (2026-09-02)

The offline candidate-family Experiment 1 result is recorded in
[LiaisonScape Initial-placement Seed Candidate-family Offline Experiment 1 Result](liaisonscape-initial-placement-seed-candidate-family-offline-experiment1-result.md).
The result is `CASE 1 / EXACT RESULT 1+2+3 / DECISION A`: exact F1-ALG
(`P_i=(i,i²)`) removed the bounded candidate-space GEO-0/GEO-3 capacity
failure in the required offline corpus, while current-mapping failures remain
a separate assignment problem. F0 reproduced the expected fixed-direction
contrast, including the G7/high-R capacity boundary.

This validates the exact safety-floor diagnostic only. F1-ALG is not a
Production layout design; no visual-quality or runtime conclusion was made.
The selected next checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-GENERATION-ASSIGNMENT-RESPONSIBILITY-AUDIT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-GENERATION-ASSIGNMENT-RESPONSIBILITY-AUDIT1 (2026-09-02)

The seed generation/assignment responsibility audit is recorded in
[LiaisonScape Initial-placement Seed Generation / Assignment Responsibility Audit](liaisonscape-initial-placement-seed-generation-assignment-responsibility-audit.md).
Its result is `CASE 11 / EXACT RESULT 1+2+3+4+5+6+7+8 / DECISION A`: for a
mapping-sensitive candidate family, assignment must preserve available
GEO-0/GEO-3 feasibility and must not use ID spelling or input order to choose
non-equivalent geometry roles. F1-ALG demonstrates the conditional escape
hatch in which every injective mapping is hard-safe; G7/K6 remain family-
infeasible and cannot be repaired by assignment.

Current degree-plus-lexical mapping is recorded as A0-CURRENT, not as a
semantic rule. True automorphism orbits prevent a unique topology-only named
order, and visual-quality-neutral tie handling remains open. No Production or
preview change was made. The selected next checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-SEMANTICS-DESIGN1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-SEMANTICS-DESIGN1 (2026-09-02)

The seed-assignment semantics design is recorded in [LiaisonScape
Initial-placement Seed-assignment Semantics Design](liaisonscape-initial-placement-seed-assignment-semantics-design.md).
Its result is `CASE 11 / EXACT RESULT 1+2+3+4+5+6+7+8 / DECISION A`: the exact
assignment semantic is the set-valued hard-valid mapping relation, with a
separate materialization responsibility. Assignment must be sound and
conditionally complete for mapping-sensitive families when `HardValid` is
non-empty; family infeasibility remains a separate result. True automorphism
orbits do not justify a unique named topology-only role, and hard-valid
non-equivalent mappings remain outside the deferred visual-quality selector.

No Production, candidate-family, runtime-seam, preview, sample, or
`ai-knowledge` change was made. The selected next checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FAMILY-ASSIGNMENT-EXPERIMENT-SEAM-DESIGN1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FAMILY-ASSIGNMENT-EXPERIMENT-SEAM-DESIGN1 (2026-09-02)

The family/assignment experiment seam design is recorded in [LiaisonScape
Initial-placement Seed Family / Assignment Experiment Seam Design](liaisonscape-initial-placement-seed-family-assignment-experiment-seam-design.md).
Its result is `CASE 11 / EXACT RESULT 1+2+3+4+5+6 / DECISION A`: a disposable
pre-settling seam can independently expose candidate family and assignment
policy while preserving the existing downstream stages. `F0+A0` baseline
transparency is mandatory; `F0+A1` isolates assignment loss; `F1-ALG` remains a
diagnostic control. Headless execution is sufficient, and post-settling output
is smoke evidence only.

No LiaisonScape source, temporary seam, runtime switch, preview, sample, or
`ai-knowledge` change was made. The selected next checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FAMILY-ASSIGNMENT-EXPERIMENT-SEAM1`;
it is selected only and is not started by this record.

### E2R-VSCODE-OSINT-WORKBENCH-RESEARCH1 (2026-09-02)

The exploratory [E2R for VS Code — OSINT Workbench](../research/exploratory/e2r-vscode-osint-workbench.md)
record examines VS Code as a possible power-user/research client between the
existing browser applications and a possible future Desktop client. It covers
large local investigation workspaces, bounded local storage/index/query
responsibilities, AI/agent tool boundaries, human review and provenance, and
local/private OSINT risks. It does not select an extension, desktop framework,
database, AI provider, schema, cloud backend, or authentication model.

This is exploratory research only. The current LiaisonScape Initial Placement
priority and selected checkpoint remain unchanged. The GitHub Sponsors and
Personal Storage roadmap sections remain separate and unchanged; no
`ai-knowledge` promotion was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FAMILY-ASSIGNMENT-EXPERIMENT-SEAM1 (2026-09-02)

The disposable [LiaisonScape Initial-placement Seed Family / Assignment
Experiment Seam 1](liaisonscape-initial-placement-seed-family-assignment-experiment-seam1-result.md)
result is `CASE 11 / EXACT RESULT 1+2+3+4 / DECISION E`. The experiment
validated that F0 candidate-family capacity and current A0 assignment loss
are separable at the exact pre-settling hard-safety stage: Lighthouse and
Ashen Crown retain F0 hard-valid mappings that A0 can lose, while proof-
infeasible F0 G7/K6 remain infeasible and diagnostic F1-ALG is hard-valid
under both assignments.

The result also found that a deterministic ID rename changes Lighthouse's
F0+A0 hard-validity classification. Identity/equivariance therefore remains
an explicit follow-up boundary. No Production source, candidate family,
assignment, settling, routing, label, sample, preview, or `ai-knowledge`
change was made. The selected next checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-EQUIVARIANCE-FOLLOWUP1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-EQUIVARIANCE-FOLLOWUP1 (2026-09-02)

The [LiaisonScape Initial-placement Seed Assignment Equivariance Follow-up](liaisonscape-initial-placement-seed-assignment-equivariance-followup.md)
is recorded as `CASE 6 / EXACT RESULT 1+2+3+4+5+6+7 / DECISION A`. The audit
found that the Lighthouse rename failure belongs to the current A0 selector,
while the underlying GEO-0/GEO-3 `HardValid` relation is representation-
neutral. Identifier spelling may remain an operational order, but must not
control hard-safety classification.

For mapping-sensitive candidate families, hard-safe assignment remains a
required contract. An assignment-insensitive family can remove that burden at
the hard-safety level, without proving visual-quality invariance. The current
finite-graph hard-safe direction is qualified to the exact GEO-0/GEO-3 floor;
no Production family or assignment was selected. The selected next checkpoint
is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-CANDIDATE-FAMILY-EXPERIMENT-DESIGN1`;
it is selected only and is not started by this record.

### E2R-OSINT-EXTERNAL-DATASET-ACQUISITION-TRUST-RESEARCH1 (2026-09-02)

The exploratory [E2R OSINT External Dataset Acquisition, Trust, and
Provenance research](../research/exploratory/e2r-osint-external-dataset-acquisition-and-trust.md)
examines discovering, snapshotting, reviewing, comparing, and selectively
adopting third-party E2R Datasets while preserving provenance and local
assessment ownership. Its result is `CASE 10 / MIXED / DECISION A`: acquisition
and factual acceptance, discovery and trust, integrity and truth, and source
count and independent corroboration remain distinct responsibilities. A
decentralized discovery direction with optional indexes is coherent, but
assertion-level modeling and the location of trust/provenance metadata remain
open.

This is `EXPLORATORY / NOT ACTIVE` research only. It does not implement an
OSINT client, downloader, crawler, trust system, snapshot store, registry,
publication profile, or schema, and it does not start follow-up research. The
LiaisonScape Initial Placement priority and selected checkpoint remain
unchanged; Suite, VS Code OSINT, Personal Storage, Federated Constellation, and
GitHub Sponsors roadmap items remain separate.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-CANDIDATE-FAMILY-EXPERIMENT-DESIGN1 (2026-09-02)

The [LiaisonScape practical seed-family experiment design](liaisonscape-initial-placement-seed-practical-candidate-family-experiment-design.md)
is complete with `CASE 1 / EXACT RESULT 1+2+3+4+5 / DECISION A`. It selects
`FP1-NGP`, a bounded, deterministic, exact normalized general-position family,
as the one primary practical diagnostic candidate. `F0-CURRENT` and `F1-ALG`
remain controls; the structured F2 family remains deferred.

The design keeps exact GEO-0/GEO-3 pre-settling evidence primary, separates
normalization and runtime smoke from hard-safety authority, and leaves visual
quality and Production suitability open. No candidate family, assignment,
settling, routing, label, or application source changed. The selected next
checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-CANDIDATE-FAMILY-EXPERIMENT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-CANDIDATE-FAMILY-EXPERIMENT1 (2026-09-02)

The [LiaisonScape practical candidate-family experiment](liaisonscape-initial-placement-seed-practical-candidate-family-experiment1-result.md)
is recorded as `CASE 2 / EXACT RESULT 1+2+3+4+5+6 / DECISION A`. `FP1-NGP`
preserved the current exact GEO-0/GEO-3 hard-safety floor, remained
assignment-insensitive, bounded the normalized coordinate envelope, avoided
F0's fixed eight-ray saturation in the bounded high-R controls, and remained
finite/distinct through the tested `N<=65` materialization domain.

This is a practical diagnostic result only: visual quality, routing, labels,
crossings, settling quality, and Production suitability remain unassessed.
No candidate family, assignment, application source, sample, preview, or
`ai-knowledge` change was made. The selected next checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-QUALITY-EXPERIMENT-DESIGN1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-QUALITY-EXPERIMENT-DESIGN1 (2026-09-02)

The [LiaisonScape practical-family structural-quality experiment design](liaisonscape-initial-placement-seed-practical-family-structural-quality-experiment-design.md)
is complete with `CASE 9 / EXACT RESULT 1+2+3+4+5+6 / DECISION A`. It keeps
the accepted two-layer motif/overlap-cluster profile, separates exact
GEO-0/GEO-3 safety from structural descriptors, and defines bounded
pre-settling/post-settling evidence with unchanged settling, a small
representative-assignment probe, and an F1/FP1 affine diagnostic.

The design selects `VIS-0`: no manual visual evidence is required for the next
structural run, and routing, labels, crossings, and Production quality remain
outside scope. No source, candidate family, assignment, settling, sample,
preview, or `ai-knowledge` change was made. The selected next checkpoint is
exactly `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-QUALITY-EXPERIMENT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-QUALITY-EXPERIMENT1 (2026-09-02)

The [LiaisonScape practical-family structural-quality experiment](liaisonscape-initial-placement-seed-practical-family-structural-quality-experiment1-result.md)
is recorded as `CASE 9 / MIXED / EXACT RESULT 1+2+3+4+5+6+7+8+9 / DECISION B`.
The source-transparent F0 path passed for Lighthouse and Ashen Crown. FP1
remained hard-valid across the executed primary controls, while the two-layer
profile exposed motif/cluster bottlenecks, high-R capacity-versus-distribution
differences, F1/FP1 affine descriptor changes, and mixed unchanged-settling
transitions. Lighthouse and Ashen profiles changed under the fixed
representation-neutral assignment probes; K3 remained symmetry-equivalent.

This remains a headless structural diagnostic only. Visual, routing, label,
crossing, edge-length, and Production quality remain unassessed, and no source,
candidate family, assignment, settling, sample, preview, or `ai-knowledge`
change was made. The selected next checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-ASSIGNMENT-SENSITIVITY-FOLLOWUP1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-ASSIGNMENT-SENSITIVITY-FOLLOWUP1 (2026-09-02)

The [LiaisonScape practical-family structural assignment-sensitivity follow-up](liaisonscape-initial-placement-seed-practical-family-structural-assignment-sensitivity-followup1.md)
is recorded as `CASE 1 / DECISION A`. The bounded FP1 pre-settling
single-swap audit found structural profile variation beyond the preceding
three representatives: 21/45 Lighthouse swaps and 44/45 Ashen Crown swaps
changed profile, while all 93 swaps remained injective and current-floor
GEO-0/GEO-3 hard-valid. K3 swaps remained equivalent at the topology orbit
level. FP1 candidate positions are non-equivalent geometric roles, and Ashen
showed structural trade-offs; therefore no best mapping or scalar objective was
selected.

The result supports topology-aware assignment as the smallest next question,
while candidate-family responsibility and visual quality remain open. No
Production assignment, candidate family, source, settling, routing, label,
sample, preview, or `ai-knowledge` change was made. The selected next
checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TOPOLOGY-AWARE-ASSIGNMENT-EXPERIMENT-DESIGN1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TOPOLOGY-AWARE-ASSIGNMENT-EXPERIMENT-DESIGN1 (2026-09-02)

The [LiaisonScape topology-aware assignment experiment design](liaisonscape-initial-placement-seed-topology-aware-assignment-experiment-design.md)
is complete as `CASE 1 / DECISION A`. Existing graph-derived topology roles,
deterministic FP1 candidate-role descriptions, and the two-layer structural
profile are sufficient for a bounded headless experiment without a scalar
objective. The design keeps topology role classification, candidate geometric
role classification, role-to-candidate correspondence, admissible assignment
sets, and literal materialization separate. K3 orbit semantics, a stronger
same-degree lexical rename, input-order control, Ashen trade-offs, and FP1
family asymmetry are explicit boundaries.

No topology order, candidate family, assignment, Production behavior, settling,
routing, label, sample, preview, or `ai-knowledge` change was made. The
selected next checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TOPOLOGY-AWARE-ASSIGNMENT-EXPERIMENT1`;
it is selected only and is not started by this record.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TOPOLOGY-AWARE-ASSIGNMENT-EXPERIMENT1 (2026-09-02)

The [LiaisonScape topology-aware assignment experiment](liaisonscape-initial-placement-seed-topology-aware-assignment-experiment1-result.md)
is recorded as `CASE 9 / MIXED / EXACT RESULT 1+2+3+4+5+6+7+8+9+10 / DECISION B`.
Across Lighthouse, Ashen Crown, and the K3 orbit control, all six bounded
policies remained FP1 hard-valid. TA-0 retained lexical sensitivity under the
strong same-degree rename, while TA-1 through TA-3 transported topology,
assignment, literal-witness, and anonymous-profile classes and remained stable
under Entity/Relation input reorder. Real-graph structural profiles changed
with topology field order and with the RC-H2 forward/reverse correspondence
direction; K3 remained orbit-equivalent.

No policy is adopted for Production because candidate index has no accepted
quality meaning and the observed profile differences are not a quality verdict.
The next responsibility is a bounded structural assignment-objective and
candidate-family research checkpoint, with clearance, local curvature,
parallel/self-loop separation, node-movement shape preservation, and later
crossing reduction kept distinct. No source, candidate family, assignment,
settling, routing, label, sample, preview, or `ai-knowledge` change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-RESEARCH1 (2026-09-02)

The [LiaisonScape structural-assignment objective research](liaisonscape-initial-placement-seed-structural-assignment-objective-research1.md)
is recorded as `CASE 2 / EXACT RESULT 1+2+3+4+5+6+7+8+9+10 / DECISION B`.
The accepted evidence supports a scalar-free, partial structural preference in
principle: exact GEO-0/GEO-3 remain hard constraints, while normalized
motif-altitude and local fan-out distribution are only conditional candidate
axes. Shape, compactness, bottleneck identity, total edge length, and other
descriptors remain descriptive or trade-off-prone. Ashen trade-offs therefore
remain incomparable without weights, and routed/label/visual quality remains
downstream except for future explicitly justified presentation-independent
proxies.

No objective, materializer, solver, candidate family, Production assignment,
settling, routing, label, sample, preview, or `ai-knowledge` change was made.
The next checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-PARTIAL-PREFERENCE-DESIGN1`;
it is selected only and is not auto-started.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-PARTIAL-PREFERENCE-DESIGN1 (2026-09-02)

The [LiaisonScape structural-assignment partial-preference design](liaisonscape-initial-placement-seed-structural-assignment-partial-preference-design.md)
is recorded as `CASE 2 / EXACT RESULT 1+2+3+4+5+6+7+8+9+10+11 / DECISION B`.
Hard admissibility remains prior to preference, and normalized motif altitude
is accepted only as a conditional same-motif local axis. Fan-out distribution
is not yet registered because the fixed-sum circular gap vector does not supply
a non-arbitrary comparator; a narrower fan-out semantics design is required.
Incomparability, unknown, not-applicable, preference-equivalence, and full
profile-equivalence remain distinct states, with no total ranking or weights.

No objective, materializer, solver, candidate family, Production assignment,
settling, routing, label, sample, preview, or `ai-knowledge` change was made.
The next checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FANOUT-PARTIAL-PREFERENCE-DESIGN1`;
it is selected only and is not auto-started.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FANOUT-PARTIAL-PREFERENCE-DESIGN1 (2026-09-02)

The [LiaisonScape fan-out partial-preference design](liaisonscape-initial-placement-seed-fanout-partial-preference-design.md)
is recorded as `CASE 2 / EXACT RESULT 1+2+3+4+5+6+7+8+9+11 / DECISION B`.
The complete circular gap vector remains descriptive because its components
have a fixed sum. A larger minimum positive gap is a coherent, narrowly local
candidate for relieving the worst motif-neighbor angular bottleneck under
fixed transported coverage; it is not a uniformity objective. Bottleneck
identity, tie multiplicity, pair-specific gaps, multiple shared Nodes, and
fan-out capacity remain descriptive or separate records, with conflicts kept
incomparable and missing exactness kept unknown.

FAN-P1 is therefore `FANOUT-PARTIAL`, not registered. The exact angular
comparison and representation boundary is the single selected next checkpoint:
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-EXACT-ANGULAR-GAP-COMPARATOR-DESIGN1`.
No objective, candidate family, assignment, Production, settling, routing,
label, sample, preview, or `ai-knowledge` change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-EXACT-ANGULAR-GAP-COMPARATOR-DESIGN1 (2026-09-02)

The [LiaisonScape exact angular-gap comparator design](liaisonscape-initial-placement-seed-exact-angular-gap-comparator-design.md)
is recorded as `CASE 1 / EXACT RESULT 1+2+3+4+5+6+7+8+9+10 / DECISION A`.
Exact half-plane/cross/dot predicates close cyclic ray ordering, directed
`<pi`/`pi`/`>pi` classification, and same-class gap comparison without
`atan2`, square roots, or epsilon. Exact integer/rational geometry, including
the current FP1 diagnostic family after positive denominator clearing, is
sufficient for bounded research registration of FAN-P1. Float-only, rendered,
and future runtime-authority cases remain conditional or `UNKNOWN` rather than
Production support.

The comparator status is `ANGULAR-COMPARATOR-READY` for the bounded exact-
rational FP1 research contract; FAN-P1 is registered for that research scope
only. The selected next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN1`.
No comparator, objective, candidate-family, assignment, Production, settling,
routing, label, sample, preview, or `ai-knowledge` change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN1 (2026-09-02)

The [LiaisonScape structural-assignment objective experiment design](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment-design.md)
is recorded as `CASE 3 / EXACT RESULT 2+6+7+8+9+11 / DECISION C`.
The bounded experiment contract is otherwise defined: exact-rational FP1,
PRE-settling, normalized altitude plus FAN-P1, fixed coverage, record-level
PP-M3 comparison, and 15 unordered policy pairs per graph. Exact altitude
comparison is ready and K3 remains orbit-safe with `k=2` fan-out excluded.

Execution is not ready because committed evidence does not contain complete
literal Node-to-FP1-index witness mappings and tie/fallback manifests for
TA-1 through TA-3. No mapping is guessed or newly optimized. The selected next
checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TOPOLOGY-AWARE-ASSIGNMENT-MANIFEST-RECONSTRUCTION-DESIGN1`.
No experiment, source, assignment, Production, settling, routing, label,
sample, preview, or `ai-knowledge` change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TOPOLOGY-AWARE-ASSIGNMENT-MANIFEST-RECONSTRUCTION-DESIGN1 (2026-09-02)

The [LiaisonScape assignment manifest reconstruction design](liaisonscape-initial-placement-seed-topology-aware-assignment-manifest-reconstruction-design.md)
records `CASE 5 / EXACT RESULT 1+2+3+4+5+6+7+8+9+10 / DECISION I`.
TA-0 / REP-0 is a `WIT-DERIVED` control, TA-1 remains `WIT-CLASS-ONLY`, and
TA-2-degree, TA-2-motif, and TA-3 forward/reverse remain excluded because their
complete policy semantics and literal correspondence are not committed.

The six-policy objective matrix is therefore not ready; no historical mapping
was recovered from deleted output, profile inversion, or residual shells. The
smallest selected next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA1-QUALITY-NEUTRAL-WITNESS-DESIGN1`.
No source, assignment, objective, materializer, solver, settling, routing,
label, sample, preview, or `ai-knowledge` change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA1-QUALITY-NEUTRAL-WITNESS-DESIGN1 (2026-09-02)

The [TA-1 quality-neutral witness design](liaisonscape-initial-placement-seed-ta1-quality-neutral-witness-design.md)
records `CASE 2 / DECISION B`: a deterministic fixture-local witness can be
defined independently of objective output, but it is not semantically neutral
because FP1 candidate roles are non-equivalent. It is therefore named
`WIT-NEW-OPERATIONAL`, not `WIT-NEW-NEUTRAL`, and is limited to `CLAIM-P0`.

One witness is selected conceptually; it has not been created or executed. TA-1
remains set-valued at policy level, and the next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA1-OPERATIONAL-WITNESS-RECONSTRUCTION1`.
No objective, assignment, source, materializer, solver, settling, routing,
label, sample, preview, or `ai-knowledge` change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA1-OPERATIONAL-WITNESS-RECONSTRUCTION1 (2026-09-02)

The [TA-1 operational witness reconstruction](liaisonscape-initial-placement-seed-ta1-operational-witness-reconstruction1-result.md)
records `CASE 7 / DECISION G`. The predeclared `TA1-W1-OP-v1` rule produced
deterministic exact manifests for Ashen Crown and K3 at `W1-MAN-5`; Lighthouse
passed the exact hard gate but remains at `W1-MAN-4` because its current
committed blob hash does not reconcile with the preceding recorded provenance
hash. W1 remains `WIT-NEW-OPERATIONAL` / `CLAIM-P0`, and TA-1 remains
`WIT-CLASS-ONLY / MAN-2`.

The selected next checkpoint is exactly
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-LIGHTHOUSE-FIXTURE-PROVENANCE-RECONCILIATION1`.
No objective, Production, source, candidate family, assignment, settling,
routing, label, sample, preview, or `ai-knowledge` change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-LIGHTHOUSE-FIXTURE-PROVENANCE-RECONCILIATION1 (2026-09-02)

The [Lighthouse fixture provenance reconciliation](liaisonscape-initial-placement-seed-lighthouse-fixture-provenance-reconciliation1-result.md)
records `CASE 4 / DECISION B`. The previously recorded `3038…` content hash
was not found in any reachable committed Lighthouse blob or documented
canonicalization. LF-to-CRLF of the current committed blob reproduces it as a
diagnostic only, so the old value is `PROV-P3` and is not a future authority.

Future W1 research uses `AUTH-LH0`: LiaisonScape commit
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`,
`public/lighthouse-restoration-demo.en.e2r.json`, Git blob
`b96092b0c2b88c6c1ea41c11c1b36dccca3e9726`, raw SHA-256 `C671…`, and W1-input
projection SHA-256 `4CDDB0…`. The W1 mapping is unchanged and Lighthouse is
promoted from `W1-MAN-4` to `W1-MAN-5`; Ashen Crown and K3 remain
`W1-MAN-5`. The exact next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN2`.
No objective, Production, source, sample, or `ai-knowledge` change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN2 (2026-09-02)

The [reduced structural-assignment objective design](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment-design2.md)
records `CASE 3 / DECISION C`: the six-policy matrix is reduced to TA-0/REP-0
versus TA-1/W1 across Lighthouse, Ashen Crown, and K3. TA-0 manifests are now
frozen as `WIT-DERIVED`; TA-1/W1 remains `WIT-NEW-OPERATIONAL` / `CLAIM-P0`.

The reduced experiment is justified only as exact pipeline validation and a
literal-witness contrast, with maximum inference `INF-W0/INF-W1`. Its three
fixture-local cells must not become a cross-fixture score, policy ranking, or
Production selection. TA-2 and TA-3 remain excluded for missing semantics, not
quality failure. `EXEC-YES` is selected for the exact next checkpoint:
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT2`.
No objective values, application source, sample, or `ai-knowledge` change was
made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT2 (2026-09-02)

The [Experiment2 result](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment2-result.md)
records `CASE 3 / DECISION A`. The reduced exact-rational pipeline completed
for the three frozen literal witness pairs: Lighthouse
`TA0-DOMINATES-W1`, Ashen Crown `TA0-DOMINATES-W1`, and K3
`PP-PREF-EQUIVALENT` through the identity oracle. The result remains
`INF-W0/INF-W1` and `CLAIM-P0`; no policy ranking, cross-fixture score, or
Production conclusion is permitted.

The exact pipeline is validated, TA-2/TA-3 remain excluded for missing
semantics, and the selected next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-POLICY-MANIFEST-RECOVERY1`.
No source, sample, `ai-knowledge`, or Production change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-POLICY-MANIFEST-RECOVERY1 (2026-09-02)

The [TA-2 policy manifest recovery result](liaisonscape-initial-placement-seed-ta2-policy-manifest-recovery1-result.md)
records `CASE 7 / DECISION G`. Reachable committed history contains only the
high-level `degree-first` and `motif/overlap responsibility-first` hypotheses;
neither TA-2-degree nor TA-2-motif has a recoverable complete role tuple,
candidate correspondence, tie/fallback, materializer, or literal manifest.
Both remain `TA2-MAN-1 / TA2-WIT-RECOVERY-INCOMPLETE` and are not eligible for
objective design. Experiment2 outputs were not used for recovery.

The selected next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-POLICY-SEMANTICS-DESIGN1`.
No source, sample, `ai-knowledge`, or Production change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-POLICY-SEMANTICS-DESIGN1 (2026-09-02)

The [TA-2 policy semantics design](liaisonscape-initial-placement-seed-ta2-policy-semantics-design.md)
records `CASE 1 / DECISION A`. Both variants are explicitly new designs:
TA-2-degree uses distinct-neighbor degree as a descending semantic preorder
with equal-degree classes; TA-2-motif uses a three-component componentwise
motif/overlap responsibility relation. Both use the experiment-only
`TA2-OP-LIN-v1` materializer boundary, with no candidate-quality meaning.
Future witnesses remain `TA2-WIT-NEW-OPERATIONAL` / `CLAIM-P0`; no literal
mapping or objective result is implied.

The selected next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-OPERATIONAL-WITNESS-RECONSTRUCTION1`.
No source, sample, `ai-knowledge`, or Production change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-OPERATIONAL-WITNESS-RECONSTRUCTION1 (2026-09-02)

The [TA-2 operational witness reconstruction result](liaisonscape-initial-placement-seed-ta2-operational-witness-reconstruction1-result.md)
records CASE 2 / DECISION B. The new TA-2-degree contract was materialized as
the fixture-local witness TA2-DEG-W1-OP-v1 for Lighthouse, Ashen Crown, and
K3; all three are deterministic and pass the exact GEO-0/GEO-3 hard gate.
The TA-2-motif witness was not materialized because Design1's
overlapClusterMembershipCount definition conflicts with the recorded Ashen
vectors: one overlap cluster cannot yield second-component values of 4.

TA2-WIT-NEW-OPERATIONAL / CLAIM-P0 remains the degree-witness boundary.
No objective, mapping optimization, Production, or ai-knowledge change was
made. The selected next checkpoint is
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-MOTIF-RESPONSIBILITY-ENCODING-RECONCILIATION1.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-MOTIF-RESPONSIBILITY-ENCODING-RECONCILIATION1 (2026-09-02)

The [TA-2 motif responsibility encoding reconciliation result](liaisonscape-initial-placement-seed-ta2-motif-responsibility-encoding-reconciliation1-result.md)
records CASE 1 / DECISION A and classifies the seam as ENC-R1
(audit derivation error). The authoritative o(V) meaning remains the count
of derived motif-overlap clusters containing V; Ashen has one cluster, so the
recorded second components that duplicate motifMembershipCount are superseded
topology-only audit evidence. TA2-MOTIF-NEW-v1 itself is unchanged.

The corrected topology-only vectors are frozen without creating a literal
witness, mapping, hard gate, or objective result. TA2-degree remains unchanged
at TA2W-MAN-5. The selected next checkpoint is
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-MOTIF-OPERATIONAL-WITNESS-RECONSTRUCTION1.
No Production, sample, or ai-knowledge change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-MOTIF-OPERATIONAL-WITNESS-RECONSTRUCTION1 (2026-09-02)

The [TA-2 motif operational witness reconstruction result](liaisonscape-initial-placement-seed-ta2-motif-operational-witness-reconstruction1-result.md)
records CASE 1 / DECISION A. The corrected `TA2-MOTIF-NEW-v1` vectors were
materialized as `TA2-MOTIF-W1-OP-v1` for Lighthouse, Ashen Crown, and K3.
All three witnesses are deterministic under Entity/Relation input reorder,
semantic rename transport passes, K3 remains one orbit, and all exact
GEO-0/GEO-3 hard gates pass. Each reaches TA2W-MAN-5 with
`TA2-WIT-NEW-OPERATIONAL` / `CLAIM-P0`.

The complete safe TA2 witness set is Design3-ready. The selected next
checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN3`.
No objective run, Production, sample, or `ai-knowledge` change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN3 (2026-09-02)

The [Design3 result](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment-design3.md)
records CASE 1 / DECISION A. The four provenance-safe witness labels resolve
to three exact geometry classes on Lighthouse, three on Ashen Crown, and one
on K3. The frozen future matrix has 7 executed cells: 6 substantive
geometry-class comparisons, including 2 Experiment2 regression cells and 4
new TA2-motif cells, plus 1 K3 identity control.

The maximum inference remains INF-W0/INF-W1; TA3 remains excluded, and no
cross-fixture score or policy ranking is allowed. The selected next checkpoint
is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT3`.
No objective value, Production, sample, or `ai-knowledge` change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT3 (2026-09-02)

The [Experiment3 result](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment3-result.md)
records CASE 1 / DECISION A. The 7-cell matrix completed cleanly: both
Experiment2 regressions passed, all 4 new TA2-motif real-fixture cells
produced valid literal-geometry relations, and the K3 identity control passed
as `PP-PREF-EQUIVALENT`. The new relations are Lighthouse G0/G2
`LEFT-DOMINATES-RIGHT`, Lighthouse G1/G2 `RIGHT-DOMINATES-LEFT`, Ashen G0/G2
`PP-INCOMPARABLE`, and Ashen G1/G2 `RIGHT-DOMINATES-LEFT`.

The maximum inference remains INF-W0/INF-W1. Aliases retain
`evidenceMultiplicity=1`; no cross-fixture aggregation, ranking, policy
selection, Production change, or FP1 conclusion is authorized. The selected
next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-MANIFEST-RECOVERY1`.
No runtime, sample, or `ai-knowledge` change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-MANIFEST-RECOVERY1 (2026-09-02)

The [TA-3 correspondence manifest recovery result](liaisonscape-initial-placement-seed-ta3-correspondence-manifest-recovery1-result.md)
records `TA3-REC-1 / CASE 4 / DECISION D`. Git archaeology recovered the
exact historical labels `TA-3-forward` and `TA-3-reverse` and the high-level
RC-H2 diagnostic intent, but not an exact operational correspondence,
tie/fallback semantics, or fixture-local Node-to-FP1 manifests. The historical
Experiment1 scope includes Lighthouse, Ashen Crown, and K3, but no fixture is
objective-eligible from this recovery.

No TA3 objective value was calculated, and no Experiment2/3 result, later
TA1/TA2 semantics, visual output, or residual artifact was used to backfill
history. Any next TA3 contract must be explicitly NEW. The selected next
checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-SEMANTICS-DESIGN1`.
No Production, runtime, sample, or `ai-knowledge` change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-SEMANTICS-DESIGN1 (2026-09-02)

The [new TA-3 correspondence semantics design](liaisonscape-initial-placement-seed-ta3-correspondence-semantics-design1.md)
records CASE 1 / DECISION A. This is explicitly a NEW operational semantic
family, not historical replay. It selects one shared responsibility contract,
`TA3-RESP-NEW-v1`, using the exact `R(V)=(m(V),o(V),s(V))` componentwise partial
order by new normative reuse of `TA2-MOTIF-NEW-v1`; it does not backfill the
historical TA3 record.

It also selects one exact candidate-only local-spacing contract,
`TA3-SPACE-NEW-v1` (SPACE-S1 mirrored local chord span), with exact integer
monotonicity for `N>=3` and an explicit `N=2` tie boundary. Forward and reverse
share responsibility, Node linearization, and spacing semantics, differing
only by larger-versus-smaller spacing orientation. Future witnesses are
reserved under `TA3-WIT-NEW-OPERATIONAL` / `CLAIM-P0`; no fixture mapping,
objective, hard gate, Production, runtime, sample, or `ai-knowledge` change
was made. The selected next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-OPERATIONAL-WITNESS-RECONSTRUCTION1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-OPERATIONAL-WITNESS-RECONSTRUCTION1 (2026-09-02)

The [TA-3 operational witness reconstruction result](liaisonscape-initial-placement-seed-ta3-correspondence-operational-witness-reconstruction1-result.md)
records CASE 1 / DECISION A. The new witnesses
`TA3-FWD-W1-OP-v1` and `TA3-REV-W1-OP-v1` were materialized for Lighthouse,
Ashen Crown, and K3 under `TA3-WIT-NEW-OPERATIONAL` / `CLAIM-P0`. All six
cells are input-order deterministic, semantic-rename transport passes, K3
remains one orbit, and every exact GEO-0/GEO-3 hard gate passes without
remapping or repair; each reaches TA3W-MAN-5.

Reverse is literally identical to TA2-motif on the three current fixtures,
but remains semantically distinct by its NEW correspondence contract and
provenance. Forward adds a literal mapping class on all three fixtures. This
does not select a quality winner or Production assignment. Objective Design4
is eligible next, with literal geometry deduplication and semantic-alias
preservation required. No objective, runtime, sample, or `ai-knowledge`
change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN4 (2026-09-02)

The [Design4 specification](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment-design4.md)
records CASE 1 / DECISION A. The six-label witness family recomputes to four
Lighthouse geometry classes, four Ashen Crown classes, and two K3 classes.
The 45 conceptual fixture-local pairs reconcile as 14 identity-implied pairs
and 31 cross-class aliases, covered by 13 future executed class-pair cells:
six Experiment3 regressions, six new real-fixture TA3-Forward cells, and one
K3 orbit control.

TA3-Reverse remains a provenance-visible alias of the TA2-motif geometry class
without duplicated evidence; TA3-Forward is a new literal class on all three
fixtures. Objective coverage and comparator semantics remain unchanged, with
the inference ceiling at `INF-W0/INF-W1`. No objective was run, no Experiment4
clone was created, and no Production, runtime, sample, or `ai-knowledge`
change was made. The selected next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4 (2026-09-02)

The [Experiment4 preflight result](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment4-result.md)
records CASE 5 / DECISION E. Literal manifest recomputation passes Lighthouse
`4/4` and K3 `2/2`, but Ashen Crown recomputes to `3` classes rather than the
Design4-required `4`: `TA1/W1` and `TA3-FWD-W1-OP-v1` have the same exact
Node-to-FP1 fingerprint. The mandatory geometry-class gate therefore failed
before objective execution. Regression cells, K3 orbit-control, and all six
new TA3-Forward cells were not run; no class relations, D4-INF0–3 evidence,
winner, ranking, or Production selection was produced. `D4-INF4=true` and the
maximum inference ceiling remains `INF-W1`. The selected next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-INTEGRITY-RECONCILIATION1`.
No Production, runtime, sample, or `ai-knowledge` change was made.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-INTEGRITY-RECONCILIATION1 (2026-09-02)

The [Experiment4 integrity reconciliation result](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment4-integrity-reconciliation1-result.md)
records CASE 1 / DECISION A. A derived identity-audit error was found in the
previous TA3 result: Ashen Crown TA3 Forward and TA1/W1 use opposite row
orders but have the same keyed Node-to-FP1 mapping. The literal witness tables,
TA3W-MAN-5 gates, and GEO gates remain valid.

The corrected geometry classes are Lighthouse 4, Ashen Crown 3, and K3 2.
The 45 conceptual pairs therefore reduce to 15 identity-implied and 30
cross-class aliases. The corrected future matrix has 10 cells: six
Experiment3 regressions, three new Lighthouse TA3-Forward cells, and one K3
orbit control. No objective was run, no witness was remapped, and no
Production, runtime, sample, or `ai-knowledge` change was made. The next
separately authorized checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-RERUN1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-RERUN1 (2026-09-02)

The [Experiment4 Rerun1 result](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment4-rerun1-result.md)
records CASE 1 / DECISION A. The corrected preflight passed 4/3/2 geometry
classes and 45/15/30/10 accounting. All six Experiment3 regressions matched;
the K3 orbit control passed as `PP-PREF-EQUIVALENT`; and the three new
Lighthouse TA3-Forward cells returned exact relations:
`LEFT-DOMINATES-RIGHT`, `LEFT-DOMINATES-RIGHT`, and
`LEFT-DOMINATES-RIGHT` for `G0-G3`, `G1-G3`, and `G2-G3` respectively.

Ashen TA3-Forward remains a keyed geometry alias of TA1/W1 and generated no
duplicate execution or evidence. `D4-INF0=false`, `D4-INF1=true`,
`D4-INF2=false`, `D4-INF3=false`, and `D4-INF4=false`; the maximum inference
remains `INF-W1`. No win counts, cross-fixture aggregation, ranking, winner,
or Production selection was recorded. The next separately authorized
checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-INTERPRETATION1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-INTERPRETATION1 (2026-09-02)

The [Experiment4 Interpretation1 result](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment4-interpretation1-result.md)
records CASE 1 / DECISION A. Rerun1 is internally coherent: Lighthouse has
all 6/6 class-pair relations and forms the fixture-local chain
`G0 > G2 > G1 > G3`; Ashen has all 3/3 relations with `G0` and `G2`
incomparable and both PP-maximal; K3 passes only as an orbit control.

TA3 Forward adds substantive literal geometry only on Lighthouse in the
current real-fixture set; on Ashen it aliases TA1/W1, and on K3 it is
control-only. TA3 Reverse adds no new literal geometry. There are no UNKNOWN,
INELIGIBLE, manifest, comparator, regression, or class-pair gaps. The current
TA0–TA3 structural-assignment objective branch is current-scope saturated;
Experiment5 is not justified by a specific unresolved question. The maximum
inference remains `INF-W1`; no visual or Production conclusion is made. The
next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-RESEARCH-SYNTHESIS1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-RESEARCH-SYNTHESIS1 (2026-09-02)

The [Research Synthesis1 result](liaisonscape-initial-placement-seed-structural-assignment-research-synthesis1-result.md)
reconciles the TA0–TA3 structural-assignment lineage through the
`INF-W0 / INF-W1` evidence ceiling. The current-scope branch is saturated:
the bounded relation matrix is complete, the corrected Lighthouse/Ashen/K3
topologies are recorded, and no specific unresolved same-level question
justifies Experiment5.

This is a research closure only. Hard-validity, fixture-local structural
preference, visual quality, and Production acceptance remain separate layers.
No universal winner, cross-fixture ranking, FP1 superiority, visual acceptance,
or Production candidate selection is recorded. The remaining concrete
pre-Production responsibility is to freeze auditable acceptance criteria. The
next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-READINESS-DESIGN1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-READINESS-DESIGN1 (2026-09-02)

The [Production Readiness Design1 result](liaisonscape-initial-placement-seed-production-readiness-design1.md)
freezes a non-ranking acceptance contract before candidate selection. Hard
validity, deterministic/runtime correctness, structural preference, visual
acceptance, settling, routing/labels, viewport, performance, compatibility,
provenance, and fixture evidence remain separate classes. PP-M3 remains
fixture-local preference evidence; incomparability and equivalence are
preserved, and no cross-fixture score or winner is authorized.

Criteria are frozen, but candidate eligibility is not yet audited. Visual and
runtime evidence are not accepted by this checkpoint, and no Production
candidate is selected. The exact next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-READINESS-EVIDENCE-AUDIT1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-READINESS-EVIDENCE-AUDIT1 (2026-09-02)

The [nonvisual evidence audit result](liaisonscape-initial-placement-seed-production-readiness-evidence-audit1-result.md)
reconciles the candidate inventory. The current Production baseline is kept
separate from the TA0-TA3 research witnesses, FP1-NGP research family, and K3
control. Research hard evidence reaches only bounded `PR-1`; no research
candidate reaches `PR-2` because a Production-compatible materializer,
runtime compatibility evidence, and complete Production provenance are absent.

The common blocker is B2, not a quality ranking. The common fixture-role set
also has a later ROLE GAP; visual, settling, routing, viewport, and performance
evidence remain unaccepted. No candidate is selected and no visual stage is
authorized yet. The next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-DESIGN1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-DESIGN1 (2026-09-03)

The [candidate materialization design](liaisonscape-initial-placement-seed-production-candidate-materialization-design1.md)
freezes a bounded M2 disposable harness with an M1 pure core. It consumes a
normalized Entity graph and emits ephemeral Derived coordinates only; it is
not imported by the live App, included in the Production bundle, or allowed
to persist or mutate Stored/Owned coordinates. The first domain is
`1<=N<=65` with an explicit positive uniform affine runtime transform.

TA0/REP-0, TA2 degree, TA2 motif, TA3 Forward, TA3 Reverse, and FP1-NGP are
authorized as research-only identities for the bounded implementation
surface. TA1-W1 remains fixture-witness-only and K3 remains control-only; no
fixture witness is generalized into runtime semantics. The common fixture
ROLE GAP, settling/routing/label, visual, viewport, and performance evidence
remain open. No candidate is selected. The exact next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-IMPLEMENTATION1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-IMPLEMENTATION1 (2026-09-03)

The [Implementation1 result](liaisonscape-initial-placement-seed-production-candidate-materialization-implementation1-result.md)
records CASE 1 / DECISION A. The frozen M2 disposable harness and M1 pure
core were implemented in the required detached clone at the accepted
LiaisonScape source commit. The five authorized research-only materializers
(`TA0/REP-0`, TA2 degree, TA2 motif, TA3 Forward, and TA3 Reverse) passed on
the Lighthouse, Ashen Crown, and K3 control fixtures: 15/15 cells, with
exact rational FP1 substrate, explicit transform, provenance, deterministic
failures, and HARD-1..7 evidence. FP1 remains a family dependency only;
TA1-W1, K3, and the reference baseline are not candidate identities.

The clone's unchanged application gate passed 280/280 tests, lint, and build.
The evaluation surface is not imported by Production, persisted, bundled, or
used for visual, settling, routing, label, structural-objective, ranking, or
PR-2 acceptance. No candidate is selected and the common fixture ROLE GAP
remains open. The disposable clone is retained for the next exact checkpoint:
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-VALIDATION1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-VALIDATION1 (2026-09-03)

The [Validation1 result](liaisonscape-initial-placement-seed-production-candidate-materialization-validation1-result.md)
records `CASE 1 / DECISION A`: the frozen Implementation1 source and initial
artifact hashes matched, the existing harness reproduced all 15 authorized
fixture/candidate cells, and nonvolatile materialization evidence matched
after expected `generatedAt` volatility was removed. Pure-core tests passed
13/13; the unchanged application gate passed 280/280 tests, lint, and build;
Production isolation remained intact.

This establishes bounded `MAT-C3` runtime/nonvisual materialization evidence
only. It does not establish `PR-2`, select a candidate, accept visual,
settling, routing/label, viewport, performance, or Production integration
evidence, or claim that Initial Placement is solved. The exact smallest next
prerequisite is nonvisual evidence completion for PR-2, beginning with the
candidate-specific Production compatibility/persistence/migration/fallback
audit and extending hard-gate/runtime and Production provenance evidence
beyond the bounded materializer surface. That prerequisite is not started.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-COMPATIBILITY-AUDIT1 (2026-09-03)

The [candidate compatibility audit](liaisonscape-initial-placement-seed-production-candidate-compatibility-audit1-result.md)
records `CASE 2 / DECISION B`. All five authorized materialized identities are
compatible as bounded EVAL-FULL-SEED evaluations, but current Production
semantics do not define a candidate transform owner, partial Stored/Owned
merge, candidate persistence/adoption, migration handoff, failure/fallback
policy, or integrated provenance boundary. No candidate-specific blocker was
found; these are common compatibility gaps.

`PR-2` remains `NO`. No candidate was selected, no Production integration or
runtime implementation was started, and no visual, settling, routing/label,
viewport, or performance evidence was accepted. The exact smallest next
prerequisite is a bounded common Production compatibility contract design,
beginning with runtime-transform ownership and the EVAL-FULL-SEED versus
partial Stored/Owned boundary. It is not started.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-COMPATIBILITY-DESIGN1 (2026-09-03)

The [candidate compatibility design](liaisonscape-initial-placement-seed-production-candidate-compatibility-design1-result.md)
records `CASE 1 / DECISION A`. It freezes a minimum common Product contract:
the explicit transform belongs to a dedicated pure placement-space evaluation
adapter; candidate evaluation is optional and startup-external; EVAL-FULL-SEED
is permitted only for a clean zero-Stored state; Stored/Owned coordinates
remain authoritative; Derived output requires explicit user-owned adoption;
accepted Coordinate and canonical Space migration precede evaluation; failure
is attributable with no silent fallback or candidate retry; and provenance
remains in a separate evaluation record.

The complete-Stored distinction is explicit: Stored/Owned precedence is
`PASS`, while candidate evaluation over complete Stored input remains
`NOT-DEFINED` because EVAL-FULL-SEED rejects Stored input. No Production code,
candidate selection, schema, registry, persistence, migration, fallback,
visual, settling, routing/label, viewport, performance, or structural
objective work was started. `PR-2` remains `NO`. The exact next checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-COMPATIBILITY-VALIDATION1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-COMPATIBILITY-VALIDATION1 (2026-09-03)

The [candidate compatibility validation](liaisonscape-initial-placement-seed-production-candidate-compatibility-validation1-result.md)
records `CASE 1 / DECISION A`: the frozen PCOMP common compatibility contract
is validated for the bounded nonvisual evaluation surface. The five fixed
materializer source hashes match; fresh pure-core evidence is 13/13; fresh
authorized fixture/candidate evidence is 15/15; Production tests are 280/280;
lint, build, and diff-check pass; and nonvolatile artifact evidence remains
stable across two harness runs.

The validation confirms the shared transform, ownership, adoption, persistence,
migration, failure, safety, and provenance boundaries without implementing the
future Product adapter or live evaluation path. The three defensive failure
paths without individual injected artifact cases are recorded as a bounded
evidence boundary. No candidate-specific compatibility gap or design conflict
was found. No candidate was selected and no Production integration was made.
`PR-2` remains `NO`; visual, settling, routing/label, viewport, performance,
selection, and live-integration evidence remain separate. The exact smallest
next prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-PR2-NONVISUAL-EVIDENCE-COMPLETION1`,
which is not started.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-PR2-NONVISUAL-EVIDENCE-COMPLETION1 (2026-09-03)

The [PR-2 nonvisual evidence completion result](liaisonscape-initial-placement-seed-production-pr2-nonvisual-evidence-completion1-result.md)
records `CASE 1 / DECISION A`: the four exact PR-2 classes—hard validity,
determinism/runtime, compatibility, and provenance—are complete-bounded for
the five frozen materializer identities on `1 <= N <= 65`. The expanded
evidence covers seven committed real fixtures and six deterministic controls:
65 eligible candidate cells pass all HARD-1..7 gates, while N=0 and N=66 fail
closed for every candidate. Projection boundaries for self, parallel, and
Event Relations are recorded explicitly.

The frozen pure-core tests pass 13/13, the MAT-C3 harness passes 15/15, the
new PR-2 evidence tests pass 4/4, and unchanged Production passes 280/280,
lint, build, and diff-check. No candidate-specific failure occurred. The
realistic fixture ROLE GAP remains open for later stages; visual, settling,
routing/label, viewport, performance, Production integration, and selection
remain separate and unaccepted. No candidate is selected and `PR-C3` through
`PR-C5` remain `NO`. The exact next prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-DESIGN1`,
which is selected only and not started.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-DESIGN1 (2026-09-03)

The [visual, settling, and routing evidence design result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-design1-result.md)
records `CASE 1 / DECISION A`: the PR-3 evidence contract is frozen without
executing visual acceptance. PR-2 remains `COMPLETE-BOUNDED`; PR-3 remains
`NO`. The design separates candidate seed output from Product settling,
routing, labels, viewport fit, and browser rendering, and freezes V0-V3
ablation, observable visual criteria, downstream failure attribution, review,
and provenance contracts. `E-VIEWPORT` and `E-PERFORMANCE` are classified as
separate post-PR3 evidence, not assumed PR-3 gates.

The common realistic fixture ROLE GAP remains open: high-fanout, sparse, dense,
realistic symmetry, and realistic larger-size roles require committed fixture
authority and validation. K3 remains control-only and N=65 remains a
synthetic boundary control. No candidate is ranked or selected, no Production
integration is made, and no screenshots are produced. The exact next
prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-FIXTURE-ROLE-ACQUISITION-DESIGN1`,
which is selected only and not started.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-FIXTURE-ROLE-ACQUISITION-DESIGN1 (2026-09-03)

The [fixture-role acquisition design result](liaisonscape-initial-placement-seed-production-visual-fixture-role-acquisition-design1-result.md)
records `CASE 2 / DECISION A`: all 17 committed Dataset paths across
e2r-spec, LiaisonScape, NarrativeLine, and Hub were audited from committed
bytes under `FIXTURE-SELECTION-BLIND-v1`. Existing realistic ordinary and
motif-rich authorities remain frozen; high-fanout, sparse, dense, realistic
symmetry, and realistic larger-size remain role gaps. K3 remains control-only,
and EN/JA files are presentation variants of structural fixtures rather than
additional roles.

The result freezes `VSR-FIXTURE-AUTHORITY-v1`, the role matrix, Product-visible
routing/label coverage, locale policy, future manifest shape, and the
candidate-blind acquisition/authoring contract. No fixture bytes were
modified, no candidate materializer or visual/browser harness was run, no
screenshots were produced, and no candidate was ranked or selected. PR-2
remains `COMPLETE-BOUNDED`; PR-3 remains `NO`; the common corpus is
`CORPUS-INCOMPLETE`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-FIXTURE-ROLE-ACQUISITION1 (2026-09-03)

The [visual fixture role acquisition result](liaisonscape-initial-placement-seed-production-visual-fixture-role-acquisition1-result.md)
records the additive formal reconciliation of Design1 as `CASE 2 / DECISION B`.
The corrected inventory wording is “four repositories audited; 16 tracked
Dataset paths inventoried; Hub contained no tracked Dataset”; the historical
Design1 entry is not rewritten. The five missing realistic roles were
candidate-blindly briefed and acquired as three coherent structural fixtures
with EN/JA variants: `regional-care-coordination` (`high-fanout` and
`larger-size`), `district-solar-cooperatives` (`sparse` and `realistic-symmetry`),
and `regional-emergency-response` (`dense`). Existing ordinary and motif-rich
authorities remain frozen, and no existing fixture was newly promoted.

Commit A is `4d59010d8c13886c188d89a8b4c6c839e75f26e6`
(`testdata: add LiaisonScape visual role fixtures`). The immutable role
manifest is `docs/evidence/visual-fixture-role-manifest-v1.json`. All six new
Datasets validate, EN/JA structures are equivalent, and the common realistic
corpus is `CORPUS-COMPLETE`. `K3_CONTROL = PRESENT` and
`REALISTIC_ROLE = NO`. The acquisition result is `CASE 1 / DECISION A`:
the common corpus is frozen, PR-3 remains `NO`, no candidate materialization,
comparison, screenshots, browser review, selection, or Production integration
was performed. The exact next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-EXECUTION1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-HARNESS-DESIGN1 (2026-09-03)

The [visual evidence harness design result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-harness-design1-result.md)
records the additive reconciliation of Acquisition1's skipped seam. The
Acquisition1 Decision A remains unchanged; its `EXECUTION1` next pointer is
`DEFERRED / NOT YET ELIGIBLE`, and this Harness Design1 identifier is the
corrected next prerequisite.

The frozen input is the `CORPUS-COMPLETE` role manifest with 8 structural
fixtures and 16 EN/JA presentation variants. The planned matrix is 80
candidate/presentation cells, with 240 V0–V3 stage records after structural
V0/V1 deduplication; B0/B1 diagnostic coverage is 40 records. Multi-role
fixtures execute once per candidate/locale/stage and role results reference
the shared artifact.

The source audit found pure importable graph/route/label helpers, but current
`settleInitialPlacement`/`solveAutoLayout` accept no explicit V0 seed, while
App-owned routing orchestration, manual state, and SVG/CSS rendering have no
stable isolated seam. This is `S-H3`; `VSR-SEED-ADAPTER-v1` is required. The
target architecture is a disposable H-B Vite/browser entry with an H-D-style
wrapper in the detached clone at
`experimental/production-candidate-materialization/visual-evidence-harness/`,
but implementation is deferred until the Product/evaluation seam is designed.
The canonical capture viewport is `PR3-CAPTURE-VIEWPORT-v1` at 1280×900 CSS px,
DSF 1, browser zoom 100%, with logical SVG viewBox 800×500.

This checkpoint is `CASE 2 / DECISION B`: no harness implementation, candidate
execution, V0–V3 evidence, screenshots, browser review, candidate selection, or
Production integration occurred. PR-3 remains `NO`. The exact next prerequisite
is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-DESIGN1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-DESIGN1 (2026-09-03)

The [Product evaluation seam design result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-design1-result.md)
records CASE 1 / DECISION A and Product modularization PARTIAL. Reliable future
PR-3 evidence requires a Product-owned explicit-seed settling kernel and a
layered pure automatic route/label derivation boundary. The design keeps
manual state, reconciliation, Dataset lifecycle, interaction, and SVG
composition App-owned; no render-component extraction is authorized now
(P-A). Product modules remain candidate-, TA-, manifest-, and harness-blind.

The design freezes PES-SETTLING-v1, PES-ROUTING-v1, PES-LABEL-v1,
PES-RENDER-v1, PES-ISOLATION-v1, and PRODUCT-SEAM-EQUIVALENCE-v1. Exact
characterization must precede refactoring, with exact numeric equality and
arithmetic-order preservation for default behavior. The preferred future
workspace is a new disposable clone based at accepted source commit
fd563340625fd3d88dc25baedc93c4f8fe69e5e7; the retained materializer clone
remains unchanged.

No Product implementation, harness implementation, candidate materialization,
V0-V3 execution, screenshot/browser review, comparison, ranking, selection,
Production integration, fixture change, or PR-3 claim was made. PR-2 remains
COMPLETE-BOUNDED, PR-3 remains NO, and the exact next prerequisite is the
not-started
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1A.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1A (2026-09-03)

The [Implementation1A characterization result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1a-result.md)
records CASE 3 / DECISION C. The new W-C clone captured 38 auto-layout
baseline cases, 9 pure routing cases, 8 pure label cases, and 16 App
automatic routing/label DOM records from immutable fixture bytes. Exact
in-process replay and fresh-process auto-layout replay pass. Product source
and package files remain unchanged.

Characterization found a frozen-invariant conflict before refactoring:
Node-array reversal is exact for 16/16 fixture variants, while Relation-array
reversal is exact for only 2/16; 14/16 have IEEE-754-level coordinate changes
from the current adjacency accumulation order. The behavior is recorded
without tolerance, rounding, normalization, or Product repair. Therefore
characterization artifacts are complete, but the checkpoint is BLOCKED before
IMPLEMENTATION1B. No candidate execution, V0-V3 evidence, screenshot, browser
review, selection, Production integration, or PR-3 claim occurred.

The exact next prerequisite is the not-started
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CONFLICT-RESOLUTION1.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CONFLICT-RESOLUTION1 (2026-09-03)

The [Relation-order conflict resolution result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-characterization-order-conflict-resolution1-result.md)
records CASE 2 / Decision B. E2R Core collection order is non-semantic, and
LiaisonScape's existing exact “ignores relation order” test establishes the
intended Product behavior. The accepted `fd563340...` implementation retains
Relation insertion order in adjacency Sets used by floating-point settling, so
the current sensitivity is classified as incidental numeric order sensitivity,
not accepted layout semantics.

Implementation1A baseline v1 artifacts are preserved as historical pre-order-
resolution evidence. A separately authorized Product correction must establish
canonical locale-independent Relation/neighbor order and a post-correction
baseline v2 before Implementation1B settling extraction can resume. No Product
source, tests, fixtures, baseline, harness, candidate, V0-V3, screenshot,
browser review, selection, Production integration, or PR-3 claim was made.
The exact smallest next prerequisite is the not-started
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-IMPLEMENTATION1.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-IMPLEMENTATION1 (2026-09-03)

The [order canonicalization implementation result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-characterization-order-canonicalization-implementation1-result.md)
records CASE 1 / Decision A. The W-C correction candidate
`d7271f5bc2c56d6ae7d46992140dc9cc165ecfee` replaces incidental adjacency-Set
iteration with one-time canonical Unicode code-point neighbor ordering and
adds focused exact permutation/comparator coverage. Immutable fixture replay
passes Relation reversal 16/16, Node reversal 16/16, and no-mutation 16/16
for both `solveAutoLayout` and `settleInitialPlacement`; full Product tests pass
283/283 with lint and build.

Historical baseline-v1 remains byte-identical. Twelve of 38 in-memory
auto-layout cases intentionally change by at most
`5.684341886080802e-14`; topology and component membership do not change, and
baseline-v2 is not generated. The correction remains a local unpushed
candidate; accepted Product authority remains `fd563340...`, IMPLEMENTATION1B
remains blocked, and PR-3 remains NO. The exact smallest next prerequisite is
the not-started
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-ADOPTION1.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-ADOPTION1 (2026-09-03)

The [order canonicalization adoption result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-characterization-order-canonicalization-adoption1-result.md)
records CASE 1 / Decision A. The validated W-C correction was transferred into
live Production and committed as `0937d7768136ff63e74924480551d370b2935c2e`
(`fix: canonicalize layout neighbor order`), with parent historical authority
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The two Product files match the W-C
candidate byte-for-byte; Product tests pass 283/283, focused permutation and
immutable fixture diagnostics pass, and lint/build/diff-check pass.

The new Product commit is the CURRENT ACCEPTED PRODUCT SOURCE AUTHORITY for the
next checkpoint. Historical `fd563340...` and baseline-v1 remain preserved;
W-C remains unchanged at `d7271f5...`; the materializer remains detached at
historical `fd563340...`; and the existing dirty EN/JA sample files remain
unchanged. Baseline-v2 is not generated, Implementation1B remains blocked,
PR-3 remains NO, and no candidate materialization, V0-V3, selection, or
publication occurred. The sample-coordinate authoring follow-up is unchanged.

The exact next prerequisite is the not-started
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-BASELINE2.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-BASELINE2 (2026-09-03)

The [post-correction baseline-v2 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-characterization-order-canonicalization-baseline2-result.md)
records CASE 1 / Decision A. Adoption1 final-state reconciliation is recorded
additively: its stale pending-documentation sentence is only a pre-finalization
snapshot; Adoption1 commit `a5348e742b7f8939c13fa0d34eaf9c192178829e` was
validated and clean, and its accepted Product authority remains
`0937d7768136ff63e74924480551d370b2935c2e`.

From a new exact-source clone, the same 38 auto-layout, 9 pure routing, 8 pure
label, and 16+16 App records were reproduced. Baseline-v2 is frozen with
auto-layout 12 changed / 26 unchanged and maximum delta
`5.684341886080802e-14`; every auto-layout difference is
`EXPECTED-ORDER-CORRECTION`. Pure routing and pure labels are exact. App
routing changed in 2 records and App labels changed in 2 records; all are
`UPSTREAM-POSITION-PROPAGATION`, with unexplained drift count 0.

The v2 evidence commit is
`324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`
(`test: freeze LiaisonScape post-correction characterization`), based on
`0937d776...`. Historical v1 remains unchanged, live Production remains
unchanged apart from its two protected dirty samples, W-C remains at
`d7271f5...`, and the materializer remains detached at historical
`fd563340...`. No Product source, sample, candidate, V0-V3, or publication
change occurred.

Product-seam equivalence is not fully reconciled, Implementation1B remains
blocked, PR-3 remains NO, and the exact next prerequisite is the not-started
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-EQUIVALENCE-RECONCILIATION1.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-EQUIVALENCE-RECONCILIATION1 (2026-09-03)

The [authority and equivalence reconciliation result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-characterization-order-canonicalization-equivalence-reconciliation1-result.md)
records CASE 1 / Decision A. The current Product authority is
`0937d776...`; historical `fd563340...` remains the pre-order-correction v1
authority, W-C `d7271f5...` remains correction provenance, and baseline2
`324193e...` remains post-correction evidence only. `PRODUCT-SEAM-EQUIVALENCE-v1`
is retained with the `POST-ORDER-RESOLUTION` profile and v2 is the exact future
refactor target.

The S-C settling boundary remains valid but is refined to a Product-owned
kernel receiving a normalized layout graph and explicit initial positions, so
canonical neighbor ordering is shared rather than duplicated or bypassed.
Materializer source drift is `UNAFFECTED`: the retained fd materializer uses
its own graph/FP1/rational implementation and does not import Product
auto-layout. M-A is retained with later pre-PR-3 environment revalidation.

Implementation1B entry gate is `PASS`. The future workspace policy is W4: a
new clean disposable clone from `0937d776...` at the proposed
`e2r-liaison-scape-product-evaluation-seam-implementation1b` path; it was not
created here. The machine baseline does not define frozen curves during drag:
automatic routes must recompute from current Node positions, while manual
routes, direct Relation drag, and label follow remain App-owned.

Implementation1B remains not started, PR-3 remains NO, and no Product,
materializer, sample, candidate, or interaction change occurred. The exact
next prerequisite is the not-started
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1B.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1B (2026-09-03)

The [Implementation1B settling-kernel refactor result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1b-result.md)
records CASE 1 / Decision A. Reconciliation1 CASE 1 / Decision A and its
`PRODUCT-SEAM-EQUIVALENCE-v1` post-order-resolution profile remain the input.
From a new clean clone at Product authority `0937d7768136ff63e74924480551d370b2935c2e`,
the Product-owned normalized layout graph, automatic seed generation, and
component-scoped settling kernel were separated in `src/auto-layout.ts` while
preserving the existing arithmetic and sequential packing order.

The refactor candidate is commit `a5bc4b5f13731a6e29acab9cd941e014d7a603c0`
(`refactor: extract LiaisonScape layout settling kernel`). Exact baseline-v2
replay is 38/38 with SHA
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`;
Relation and Node reversal checks are 16/16 for both solve and settle, and
pure/App routing and label replay is exact to v2. Product behavior change is
`NONE`; interaction source is unchanged. Product tests pass 287/287 with lint,
build, and diff-check passing.

This is a refactor candidate only. The current accepted Product authority
remains `0937d776...` until adoption. Implementation1C is `NOT STARTED`, PR-3
is `NO`, no candidate materialization or Product candidate integration occurred,
and the exact next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1B-ADOPTION1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1B-ADOPTION1 (2026-09-03)

The [Implementation1B Adoption1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1b-adoption1-result.md)
records CASE 1 / Decision A. The validated candidate
`a5bc4b5f13731a6e29acab9cd941e014d7a603c0` was adopted into live Production
through the selected `E-A` policy: only `src/auto-layout.ts` and
`tests/auto-layout.test.ts` were transferred. The candidate's copied
characterization2 evidence surface remains disposable-clone-only; baseline2
`324193eda...` remains the immutable evidence authority.

Live adoption commit is `3b5fb4d2b8d6360cc630e7e910182927e1d8459a`
(`refactor: extract layout settling kernel`), parent `0937d776...`, and is
the new CURRENT ACCEPTED PRODUCT SOURCE AUTHORITY. The existing
`characterization-v2-post-order-resolution` remains the exact behavioral target:
38/38 replay with unchanged SHA, Relation/Node reversal 16/16 for solve and
settle, pure/App routing and labels exact to v2, Product tests 287/287, lint,
build, and diff-check passing. No baseline-v3 was created and baseline-v2 was
not rewritten; Product behavior change is `NONE`.

Interaction and routing source remain unchanged. Implementation1C is eligible
but `NOT STARTED`; PR-3 is `NO`, with no adapter, candidate materialization,
V0-V3 execution, candidate selection, or Product candidate integration. The
exact next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1C`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1C (2026-09-03)

The [Implementation1C result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1c-result.md)
records CASE 1 / Decision A. From a new clean clone at accepted Product
authority `3b5fb4d...`, the pre-edit v2 replay passed exactly before source
editing. The existing Product seam was insufficient for the requested
evaluation path because sequential multi-component P3 packing remained in the
`solveAutoLayout` composition, so Decision `P-B` added the smallest generic
composition seam in `src/auto-layout.ts` only.

The candidate exposes Product-owned settling from complete explicit initial
positions while retaining the existing normalized graph, canonical neighbor
order, settling arithmetic, and sequential composition. The separate
evaluation-only `VSR-SEED-ADAPTER-v1` validates exact Node-ID coverage and
finite positions, has no fallback, and remains blind to candidates,
materialization, V0-V3, persistence, normal App entry, and rendering.

The local candidate commit is `bb4f603` (`feat: expose LiaisonScape explicit-seed
settling seam`). Characterization2 replay is 38/38 exact with unchanged SHA
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`, the
adapter tests pass 10/10, full Product tests pass 287/287, and lint/build/
diff-check pass. The candidate clone is clean and unpushed.

Live Production remains unchanged at `3b5fb4d...` apart from its two protected
dirty samples; baseline2, W-C, the 1B candidate, and the retained materializer
remain unchanged. No candidate materialization, V0-V3 execution, screenshot,
browser review, selection, Production integration, or PR-3 claim occurred.
Implementation1C Adoption1 is now eligible but not started. PR-3 remains NO,
and the exact next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1C-ADOPTION1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1C-ADOPTION1 (2026-09-03)

The [Implementation1C Adoption1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1c-adoption1-result.md)
records CASE 1 / Decision A. Live Production was verified at the exact 1C
parent authority `3b5fb4d...`; the candidate `bb4f603...` was verified with
that exact parent and its complete path inventory was inspected.

Transfer policy `T-A` was selected: only `src/auto-layout.ts` and
`experimental/product-evaluation-seam/explicit-seed-adapter1/` were adopted.
The copied `characterization2` evidence was excluded because baseline2
`324193e...` remains the separate default-behavior evidence authority. All
selected files byte-matched the candidate. `VSR-SEED-ADAPTER-v1` is frozen;
exact Node-ID coverage, finite coordinates, deterministic failures, no
fallback, no mutation, Product-owned normalization, and Product-owned P3
composition are adopted.

The live adoption commit is `681ef0a90d06e4c88f3e77289c165b7a5bfbc647`
(`feat: expose explicit-seed settling seam`), parent `3b5fb4d...`, and is the
new CURRENT ACCEPTED PRODUCT / EVALUATION-SEAM SOURCE AUTHORITY. Default
Product behavior remains exact to unchanged characterization-v2: 38/38 with
SHA `F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`;
downstream routing/label replay is exact; Product tests pass 287/287; and
lint/build/diff-check pass.

Protected EN/JA sample hashes are unchanged. Live contains no copied
`characterization2`; baseline-v2 is unchanged and baseline-v3 was not
created. No candidate execution, V0-V3 evidence, screenshot, browser review,
selection, materializer update, Product candidate integration, or PR-3 claim
occurred. Implementation1D is eligible but remains `NOT STARTED`; the exact
next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1D`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1D (2026-09-03)

The [Implementation1D result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1d-result.md)
records CASE 1 / Decision A. A new clean disposable clone started exactly at
the accepted Product/evaluation-seam authority `681ef0a...`. The pre-edit
characterization reproduced auto-layout 38/38, pure routing 9/9, App routing
16/16, pure labels 8/8, App labels 16/16, fresh replay PASS, and the unchanged
v2 SHA.

The old App `routedEdges` orchestration was fully mapped, including fixed and
automatic partitioning, existing localeCompare priority, overlap indexing,
Node-label obstacles, occupiedPaths, route diagnostics, parallel eligibility,
and original graph-edge output order. A pure Product-owned
`deriveAutomaticRoutes(...)` seam was extracted to `src/graph-presentation.ts`.
App still owns React/manual/persistence state and continues to derive and pass
provisional Node-label geometry as data. Relation-label and Node-label
derivation remain deferred to Implementation1E.

The 1D candidate commit is `63753950e4f1b004ba22d7bdc39e4732b218d53f`
(`refactor: extract LiaisonScape automatic routing derivation`), parent
`681ef0a...`. Focused routing tests pass 10/10; pure/App routing and labels
remain exact to v2; auto-layout remains 38/38 exact; full Product tests pass
297/297; and lint/build/diff-check pass. Dynamic recomputation for current
Node positions, curve offsets, and self-loop overrides is explicitly proven;
frozen-edge-during-drag remains NOT CORRECT.

Live Production remains unchanged at `681ef0a...` with only protected EN/JA
samples dirty. No candidate execution, materializer execution, V0-V3,
screenshot, browser review, selection, baseline update, label extraction, or
PR-3 claim occurred. Implementation1E remains `NOT STARTED`; the exact next
prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1D-ADOPTION1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1D-ADOPTION1 (2026-09-03)

The [Implementation1D Adoption1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1d-adoption1-result.md)
records CASE 1 / Decision A. Live Production was verified at the exact
pre-adoption authority `681ef0a...`; the Implementation1D candidate
`63753950...` was verified with that exact parent and its three-path inventory
was adopted through an exact-path transfer. All three selected files
byte-matched the validated candidate.

The pure Product-owned `deriveAutomaticRoutes(...)` seam is now adopted. App
continues to own React/manual/persistence/interaction state and provisional
Node-label geometry, while routing preserves the existing comparator,
fixed-first order, overlap indexing, occupiedPaths sequencing, diagnostics,
parallel eligibility, and original graph-edge output order. `viewport.ts` and
`auto-layout.ts` remain unchanged; frozen-edge-during-drag remains NOT
CORRECT.

Live replay remains exact to unchanged characterization-v2: pure routing 9/9,
App routing 16/16, pure labels 8/8, App labels 16/16, auto-layout 38/38 with
SHA `F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`,
Relation and Node reversal solve/settle 16/16 each, and focused seam tests
10/10. Full Product tests pass 297/297; lint/build/diff-check pass. Dynamic
Node-position, curve-offset, self-loop-override, and provisional-label
recomputation proofs pass.

The live adoption commit is `e2ede7f...` (`refactor: extract automatic routing
derivation`), parent `681ef0a...`, and is the new current Product/evaluation/
presentation-seam authority. Baseline-v2 is unchanged; baseline-v3 was not
created. Protected EN/JA samples are unchanged. No label extraction,
candidate/materializer execution, V0-V3, screenshot, browser review,
candidate selection, Product candidate integration, or PR-3 claim occurred.
Implementation1E is technically eligible but remains NOT STARTED. The exact
next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1E`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1E (2026-09-03)

The [Implementation1E result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1e-result.md)
records CASE 1 / Decision A. A new clean disposable clone started at the
accepted Product/evaluation/presentation authority `e2ede7f...`. The old
Node-label and Relation-label App orchestration was mapped before editing,
including current positions/routes, primitive inputs, processing order,
occupied rectangle order, previous placement inputs, and manual override
application points.

The existing `src/graph-presentation.ts` now owns the pure automatic
`deriveAutomaticNodeLabels(...)` and `deriveAutomaticRelationLabels(...)`
orchestration. App remains the owner of React/manual/persistence/interaction
state and passes snapshot Maps for previous placements and manual offsets or
anchors. `placeNodeLabel(...)` and `placeEdgeLabel(...)` remain unchanged and
single-owned in `viewport.ts`; routing and viewport behavior are unchanged.

Focused presentation tests pass 22/22. Exact characterization remains pure
routing 9/9, App routing 16/16, pure labels 8/8, App labels 16/16, and
auto-layout 38/38 with SHA
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.
Relation and Node reversal solve/settle remain 16/16 each, fresh-process and
no-mutation checks pass, and Node movement plus route/curve/self-loop changes
recompute label geometry. Full Product tests pass 309/309; lint/build/
diff-check pass.

The local 1E candidate commit is `dd8ea0c917eae78399411b10ad3beeec705f706d`
(`refactor: extract LiaisonScape automatic label derivation`), parent
`e2ede7f...`. It is a candidate only and was not adopted into live Production.
Baseline-v2 is unchanged; baseline-v3 was not created. Manual label ownership,
drag/follow/reset semantics, routing, persistence, and Dataset behavior remain
unchanged. Implementation1F is NOT STARTED, PR-3 is NO, and V0/V1/V2/V3 are
NONE. The exact next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1E-ADOPTION1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1E-ADOPTION1 (2026-09-03)

The [Implementation1E Adoption1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1e-adoption1-result.md)
records CASE 1 / Decision A. The validated three-file candidate was adopted
into live Production with exact candidate/live bytes. The new accepted
Product/evaluation/presentation-seam authority is
`c7e7745ad883f8434f56dd62e5b933aafabf548d` (`refactor: extract automatic
label derivation`), parent `e2ede7f...`.

Automatic Node-label and Relation-label derivation are now pure
Product-owned seams. Dynamic Node-label recomputation, Relation-label
route-follow, curve-offset and self-loop follow, manual App ownership, and
dependency lists are preserved. Exact baseline evidence remains pure routing
9/9, App routing 16/16, pure labels 8/8, App labels 16/16, auto-layout 38/38
with unchanged v2 SHA
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`, and
the focused presentation suite is 22/22 (routing subset 10/10). Product tests
pass 309/309; lint/build/diff-check pass. Baseline-v2 is unchanged and
baseline-v3 was not created.

Implementation1F is technically eligible but remains NOT STARTED. PR-3 is
NO; V0/V1/V2/V3, candidate execution, materializer execution, browser review,
screenshots, and Product candidate integration remain absent.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F (2026-09-03)

The [Implementation1F result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1f-result.md)
records CASE 1 / Decision A. A clean disposable clone started at the current
accepted Product/evaluation/presentation-seam authority
`c7e7745ad883f8434f56dd62e5b933aafabf548d`. The P-A evaluation-only render
wrapper candidate is committed locally as `60373836bc1ccea56151593afc22a9b8f324d0a3`
(`test: add LiaisonScape evaluation render wrapper`).

`VSR-RENDER-PROJECTION-v1` and `APP-RENDER-EQUIVALENCE-v1` are frozen and
pass. The focused wrapper suite passes 12/12, including deterministic output,
non-mutation, neutral markup, Product class/CSS provenance, and the
independent App-authority structural proof. The wrapper consumes already-
derived presentation data and directly imports the existing `src/styles.css`
under CSS policy C-A. Product render source, `App.tsx`, and Product CSS remain
unchanged; the accepted baseline and v2 SHA remain exact.

Full Product tests pass 309/309; lint/build/diff-check pass. Browser execution,
screenshots, E-VISUAL, candidate/materializer execution, V0-V3, and PR-3
remain absent. Implementation1G is NOT STARTED, the candidate is not selected,
and Product candidate integration has not occurred. The exact next prerequisite
is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F-ADOPTION1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F-ADOPTION1 (2026-09-03)

The [Implementation1F Adoption1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1f-adoption1-result.md)
records CASE 3 / Decision C. The exact two-file F-A transfer was performed
against Live HEAD `c7e7745ad883f8434f56dd62e5b933aafabf548d`; both wrapper files
matched the 1F candidate byte-for-byte. Adoption stopped because the focused
wrapper suite was 11/12: F-R11 found that the candidate's raw CSS SHA reflects
CRLF working-tree bytes while Live has LF working-tree bytes. The Git blob and
normalized stylesheet text are equal, and Product CSS was not changed.

No Live adoption commit was created. The normal Product runtime remains
byte-identical to c7e7745..., Product tests pass 309/309, lint/build and
baseline evidence pass, while `APP-RENDER-EQUIVALENCE-v1` remains structurally
valid but the CSS provenance gate is unresolved. Browser execution, screenshots,
E-VISUAL, candidate/materializer execution, V0-V3, and PR-3 remain absent.
Implementation1G is NOT STARTED. A separately authorized CSS working-tree
reconciliation is required before retrying Adoption1.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F-CSS-PROVENANCE-RECONCILIATION1 (2026-09-03)

The [CSS provenance reconciliation result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1f-css-provenance-reconciliation1-result.md)
records CASE 1 / Decision A. The blocked Adoption1 raw SHA mismatch was
classified as an EOL-dependent working-tree provenance assertion: candidate and
Live share Git blob `ae41e48b34d72067d92517a5d42a57a4cc1d409f`, while candidate
checks out CRLF and Live checks out LF. Product CSS content was not changed.

`PRODUCT-CSS-PROVENANCE-v1` is frozen with Git blob authority and an LF-
normalized canonical content digest; raw working-tree SHA is diagnostic only.
The reconciliation candidate is `0af4437c469bdee2f5636a87e6b5489a1f53c60b`
(`test: make render wrapper CSS provenance EOL-stable`), changing only the
wrapper test. The corrected suite passes 13/13 in both CRLF and isolated LF
checkouts, including EOL equivalence and real-content-mutation rejection.

Live remains untouched at `c7e7745ad883f8434f56dd62e5b933aafabf548d`; the
blocked-Adoption1 wrapper files remain untracked there and unchanged. No Live
adoption, browser work, E-VISUAL, candidate/materializer execution, V0-V3, or
PR-3 claim occurred. Implementation1G is NOT STARTED and NOT ELIGIBLE. The
exact next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F-ADOPTION1-RETRY1`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F-ADOPTION1-RETRY1 (2026-09-03)

The [Adoption1-Retry1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1f-adoption1-retry1-result.md)
records CASE 1 / Decision A. The reconciled two-file F-RETRY-A transfer was
adopted into Live as `bce55702cf79ce0047627125fe759893ffd6fc15`
(`test: adopt evaluation render wrapper`), parent `c7e7745...`. The wrapper
implementation was left byte-untouched; the corrected EOL-stable test was
adopted from reconciliation candidate `0af4437...`.

`PRODUCT-CSS-PROVENANCE-v1` passes in the Live LF checkout using committed Git
blob authority plus canonical LF-normalized content identity. `VSR-RENDER-
PROJECTION-v1`, `APP-RENDER-EQUIVALENCE-v1`, and C-A CSS direct-import policy
remain frozen. The corrected wrapper suite passes 13/13, Product tests pass
309/309, and lint/build/baseline evidence pass. Normal Product runtime source
remains byte-identical to c7e7745...; only evaluation infrastructure advanced
repository HEAD.

Implementation1G is technically eligible but NOT STARTED. Browser execution,
E-VISUAL, candidate/materializer execution, V0-V3, and PR-3 remain absent. The
exact next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1G`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1G (2026-09-03)

The [Implementation1G result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1g-result.md)
records CASE 1 / Decision A. A clean disposable clone started at the current
Live authority `bce55702cf79ce0047627125fe759893ffd6fc15`, and candidate commit
`ff7c399c006ae841aa7ee811e46313f2ebb0dfe4` adds only the isolated
`experimental/product-evaluation-seam/browser1/` entry, smoke fixture, and
focused isolation test.

`VSR-BROWSER-ENTRY-v1`, `PRODUCT-RUNTIME-ISOLATION-v1`,
`EVALUATION-ENTRY-ISOLATION-v1`, and `H-B-BUILD-v1` all PASS. The entry reaches
the adopted render wrapper but not normal App runtime, materializer, or
candidate code; normal Product cannot reach the experimental seam. H-BUILD-A
passes with the existing Vite CLI and dependencies, while normal Product
source and build remain unchanged/green. Product CSS C-A and
`PRODUCT-CSS-PROVENANCE-v1` remain PASS.

The full Product suite passes 309/309; wrapper 13/13, graph-presentation
22/22, routing/labels exact, auto-layout 38/38 with unchanged v2 SHA, and
baseline2 replay 4/4 remain green. Browser execution, dev-server visual
review, screenshots, E-VISUAL, candidate/materializer execution, V0-V3, and
PR-3 remain NO/NONE. The candidate is not adopted or selected; Live remains at
`bce55702...` with only the protected EN/JA sample modifications. The exact
next prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1G-ADOPTION1`,
NOT STARTED.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1G-ADOPTION1 (2026-09-03)

The [Implementation1G Adoption1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1g-adoption1-result.md)
records CASE 1 / Decision A. The validated four-file 1G candidate was
transferred under G-A and adopted into Live as
`563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`, parent
`bce55702cf79ce0047627125fe759893ffd6fc15`. The new repository/evaluation
authority is the adoption commit; normal Product runtime source remains
unchanged.

`VSR-BROWSER-ENTRY-v1`, `PRODUCT-RUNTIME-ISOLATION-v1`,
`EVALUATION-ENTRY-ISOLATION-v1`, and `H-B-BUILD-v1` are frozen in Live and
PASS. The browser1 entry remains evaluation-only at `#evaluation-root`, uses
the adopted wrapper and neutral smoke fixture, and cannot be reached by the
normal Product graph. No Product CSS, wrapper, package, normal Vite config,
App, entry, routing, label, layout, viewport, or baseline bytes changed.

The Product Evaluation Seam implementation sequence 1B-1G is COMPLETE. This
does not complete PR-3 or E-VISUAL. Browser execution, visual review,
screenshots, candidate/materializer execution, V0-V3, and PR-3 remain NO/NONE;
no candidate was selected and no Product candidate integration occurred. The
full Product suite remains 309/309, wrapper 13/13, graph-presentation 22/22,
routing/labels exact, auto-layout 38/38, and baseline2 replay 4/4.

The exact next prerequisite is the separately authorized
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-HARNESS-IMPLEMENTATION1`,
NOT STARTED.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-HARNESS-IMPLEMENTATION1 (2026-09-03)

The disposable Harness Implementation1 candidate is validated in CASE 1 /
Decision A. Product Evaluation Seam 1B–1G remains COMPLETE, and future
evidence is explicitly rebound to current accepted Product authority
`563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`; the historical Harness Design1
freeze `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` remains historical
provenance only. `MATERIALIZER-SOURCE-DRIFT = UNAFFECTED`,
`PRODUCT-DOWNSTREAM-SOURCE-DRIFT = REVALIDATED / NEW EVIDENCE AUTHORITY`,
and `HARNESS-SOURCE-DRIFT-REVALIDATION1 = PASS`.

The self-contained clone is
`C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-harness-implementation1`,
with local candidate commit
`9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` (`test: tighten visual review
packet contract`), on implementation commit
`36650462f7f2def95478098a01cb345b9c89cfa1` (`test: implement LiaisonScape
visual evidence harness`). Its materializer snapshot is exact against the
retained Implementation1 source, and the frozen fixture role manifest
`B867E9FF7B84107E8B4DDCCC02458B7B9AA535AB6FACE4AD10A2942CC8C8D8F5` verifies
8 structural IDs and 16 EN/JA authorities.

`VSR-HARNESS-IMPLEMENTATION-v1` and `VSR-RUN-PLAN-v1` are implemented. The
plan contains 240 candidate records (V0 40, V1 40, V2 80, V3 80) and 40
diagnostic records (B0 8, B1 32), with 0 executed as PR-3 evidence.
`PR3-RUNTIME-TRANSFORM = UNFROZEN`; the only transform used was explicitly
labeled implementation-test configuration. T1–T17 and H-T18–H-T28 pass,
historical materializer checks are 13/13 plus 15/15 bounded replay, and the
harness browser build passes without browser execution or generated evidence
artifacts. `E-VISUAL = NO` and `PR-3 = NO`.

The local harness candidate is not adopted to Live; no candidate is selected,
no Product integration occurred, and no push/tag/release/deploy/publication
occurred. The next evidence checkpoint is not started. The exact name
requires roadmap/design reconciliation because the prior
`...EVIDENCE-EXECUTION1` pointer is deferred:

`NEXT EVIDENCE CHECKPOINT NAME REQUIRES ROADMAP/DESIGN RECONCILIATION`

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-DESIGN1 (2026-09-03)

The [Run Configuration Design1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-design1.md)
records CASE 2 / Decision B. The current Product authority remains
`563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`; future evidence binds directly to
the validated Harness Implementation1 candidate
`9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`, which remains unchanged and
unadopted.

The complete run-configuration and execution-sequence contract is frozen
except for the numeric `PR3-RUNTIME-TRANSFORM-v1`. The materializer's positive
uniform affine transform remains caller-supplied, and the current Product
solver/viewport constants do not establish a normalized-domain origin or
scale. Therefore the implementation-validation values `100/1`, `200/1`, and
`10/1` remain non-authoritative and are not promoted to PR-3 configuration.

The next exact prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE1`,
which may collect only candidate-neutral transform compatibility evidence and
is NOT STARTED. The subsequent decomposition is run-configuration adoption,
machine V0/V1/V2 execution, browser V3 capture, human review, and PR-3
assessment, each as a separately bounded checkpoint. The selected execution
strategy is E-C bounded batches with machine-first gating, fresh browser per
V3 cell, explicit retry/resume rules, immutable run artifacts, deterministic
anonymized review ordering, and full-corpus B0/B1 diagnostics excluded from
candidate accounting.

The historical monolithic `...EVIDENCE-EXECUTION1` pointer is classified
`RENAMED / SPLIT`; historical documents are not rewritten. Planned scope
remains 240 candidate records plus 40 diagnostics, with 0 PR-3 records
executed. Browser execution, screenshots, human review, `E-VISUAL`, candidate
selection, Product integration, and `PR-3` remain NO. No push, tag, release,
deploy, or publication occurred.

### E2R-GAMEBOOK-VSCODE-EXTENSION-RESEARCH-NOTE1 (2026-09-03)

The [E2R Gamebook / Interactive Narrative VS Code Extension research note](e2r-gamebook-vscode-extension-research-note1.md)
records CASE 1 / Decision A. This is `FUTURE RESEARCH / DEFERRED IDEA`, not
active work. The individual feature ideas are currently mostly not novel and
the prior-art names Yarn Spinner, Twine, ink/Inky, articy:draft, and Ren'Py
remain unverified prior-art leads in this checkpoint.

H1–H5 are retained as differentiation hypotheses only: E2R as a shared data
foundation, one Dataset across applications, explicit Gamebook/Media
separation, provenance-preserving authoring and execution, and stateful
branching beyond gamebooks. The E2R Core scene/passage/Event question remains
open. `RESTART-TRIGGER-v1` requires a concrete, testable, materially
E2R-specific differentiation claim before research restarts.

Gamebook Extension and Media Extension relations remain exploratory and
unfrozen. No VS Code extension repository, prototype, schema, player runtime,
implementation, Product change, or prior-art feature-parity work is started.
This idea is not added as ACTIVE, NEXT, or PRIORITY work. `ai-knowledge` is
unchanged, and no push, tag, release, deploy, or publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-DESIGN1-CORRECTION1 (2026-09-03)

The [Run Configuration Design1 Correction1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-design1-correction1.md)
records CASE 1 / Decision A. The original Design1 CASE 2 / Decision B remains
valid; Correction1 fixes only the phase-cardinality defect in its completeness
wording.

The corrected accounting is: candidate Machine V0/V1/V2 = `160` rows
(40 + 40 + 80), candidate Browser V3 = `80` rows, full candidate V0–V3 =
`240` rows, and diagnostics B0/B1 = `40` rows (8 + 32). Phase M therefore
requires 160 candidate machine rows plus 40 diagnostic rows and does not wait
for Phase B. Phase B remains responsible for all 80 V3 rows. B1 remains the
32-row presentation diagnostic contract spanning V2/V3; no secondary
diagnostic ambiguity was found.

No other Design1 contract changed: T-D remains selected,
`PR3-RUNTIME-TRANSFORM-v1` remains UNFROZEN, Edge/viewport/DSF/zoom,
E-C, M/B/R/P, retry/resume, artifact, review, and historical pointer policies
remain unchanged. The exact next prerequisite remains
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE1`,
NOT STARTED. PR-3 remains NO; no candidate, materializer, browser, screenshot,
or review execution occurred. The original Design1 history was not rewritten.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE1 (2026-09-03)

The [Run Configuration Evidence1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-evidence1-result.md)
records CASE 4 / Decision D. Design1 remains CASE 2 / Decision B and its
additive Correction1 remains CASE 1 / Decision A. Protocol Commit A was
preregistered before dynamic execution; the valid clean restart used only
candidate-neutral family, explicit-seed settling, Product downstream, and
exact translation-covariance probes.

FP1 authority and Nmax 65 passed, the candidate-independent point-set proof
passed, Product clearance 96 and three settling iterations passed, and the
minimal exact RC-SPACING-v1 scale derived as 6144/1. Family,
initial-pairwise-clearance, settling, routing, labels, fit, replay, and
non-mutation gates passed. The exact translation-covariance gate failed on
Product floating-point representation drift; no tolerance was introduced
after observing results.

No candidate, real PR-3 fixture, B0/B1, browser, screenshot, human review,
E-VISUAL, ranking, selection, Product integration, or PR-3 execution occurred.
`PR3-RUNTIME-TRANSFORM-v1` remains UNFROZEN. No transform is recommended,
zero origin is not justified, and Adoption1 is ineligible. The valid Evidence
Commit B is `9738ff477d3d216507d1fba562f45dd77aa72797`. Product regression
remains green at 309/309 with the expected baseline-v2 SHA
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.

The exact next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-TRANSLATION-COVARIANCE-DESIGN-RECONCILIATION1`.
No push, tag, release, deploy, or publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE1-PROTOCOL-PROVENANCE-RECONCILIATION1 (2026-09-03)

The [Evidence1 protocol provenance reconciliation result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-evidence1-protocol-provenance-reconciliation1.md)
records CASE 2 / Decision B. The reported topology is confirmed:
`9bd3f3b...` → `ff28b5a...` → `68fde7f...` → `9738ff4...`.

`protocol.json` is byte-identical at A/P/B. The A→P changes are limited to
the pre-dynamic import-path correction, its source-audit hash bookkeeping, and
an additive correction record; no evidence semantics, inputs, transform,
gates, comparison rule, or CASE mapping changed. The executable probe bytes
therefore have PI-B provenance: semantic protocol authority remains
`ff28b5a4afce56aa4f5ac57181a1f33ebd35d20f`, while executable preregistration
authority is `68fde7f3600b152f9d88351829796f1115e65e28`. No dynamic result
predated the correction, and P→B contains only generated artifacts.

Evidence1 remains formally valid with corrected provenance wording; its CASE 4
/ Decision D translation-covariance failure remains unchanged. No transform is
recommended, `PR3-RUNTIME-TRANSFORM-v1` remains UNFROZEN, and Adoption1 remains
ineligible. No new probe, candidate, fixture, browser, screenshot, review,
E-VISUAL, Product, Harness, materializer, Live, or baseline work occurred.

The exact next prerequisite remains the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-TRANSLATION-COVARIANCE-DESIGN-RECONCILIATION1`.
No push, tag, release, deploy, or publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-TRANSLATION-COVARIANCE-DESIGN-RECONCILIATION1 (2026-09-03)

The [translation covariance design reconciliation](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-translation-covariance-design-reconciliation1.md)
records CASE 1 / Decision A. The provenance audit finds that R1–R7 remain
accepted hard requirements: candidate-, fixture-, and locale-neutrality;
determinism; one global transform; no visual tuning; and an explicit positive
uniform affine transform. Arbitrary-origin downstream raw JavaScript Number
equality (R8–R11) first appears in the Evidence1 Protocol A translation
controls and runner gate; it was not an accepted Design1 or Product semantic
invariant.

Evidence1 remains formally valid and permanently retains CASE 4 / Decision D:
exact translation covariance FAILS under its preregistered strict comparison.
The observed CP1 and CP10 differences are classified as finite floating
representation drift (F-C), without claiming visual, semantic-geometry, or
branch equivalence. No tolerance or ULP rule was introduced, and no observed
mismatch was used to set a threshold.

TC-B + TC-D is selected prospectively. `PR3-CANONICAL-RUNTIME-ORIGIN-v1` is
frozen as a canonical no-added-translation policy with `originX=0/1` and
`originY=0/1`; it is not translation equivalence, a Product coordinate policy,
candidate semantics, or a runtime-transform adoption. `RC-SPACING-v1` and
`SCALE-COMPATIBILITY-EVIDENCED` remain valid, including the exact scale
derivation `6144/1`, but `PR3-RUNTIME-TRANSFORM-v1` remains UNFROZEN.

The eight-class `TRANSLATION-BRANCH-RISK-INVENTORY-v1` is recorded. Fresh
preregistered canonical-origin / branch-stability Evidence2 is required;
existing Evidence1 is diagnostic/supporting prior evidence only. Adoption1,
candidate execution, real-fixture execution, B0/B1, browser, screenshot,
review, ranking, selection, Product integration, and PR-3 remain NO/0. The
exact next prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-CANONICAL-ORIGIN-EVIDENCE2`,
which is NOT STARTED. No Product, Harness, materializer, Live, baseline, or
`ai-knowledge` change occurred; no push, tag, release, deploy, or publication
occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-CANONICAL-ORIGIN-EVIDENCE2 (2026-09-03)

The [canonical-origin Evidence2 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-canonical-origin-evidence2-result.md)
records CASE 1 / Decision A. Fresh preregistered candidate-neutral evidence
supports the single transform `originX=0/1`, `originY=0/1`, `scale=6144/1`.
All BS1-BS10 and E2-H1-E2-H22 gates pass; all eight branch-risk classes are
accounted for, with zero blocking O-D responsibilities. The global transform
consistency audit has one fingerprint.

No candidate, authorized candidate materialization, real PR-3 fixture,
alternate-origin run, B0/B1, browser, screenshot, human review, E-VISUAL,
ranking, candidate selection, Product integration, Adoption1 execution, or
PR-3 claim occurred. Candidate execution is 0, real fixture execution is 0,
and alternate-origin execution is 0. The transform is recommended for the
separate Adoption1 checkpoint and `RUN-CONFIGURATION-ADOPTION1 = ELIGIBLE`,
while `PR3-RUNTIME-TRANSFORM-v1` remains UNFROZEN.

The valid Evidence2 clone is separate from Product and ends at Evidence Commit
B `ecad472c48b12e4fccb0d71f2edd44ec2e13f55c`; its valid preregistration
authority is `91d6cea340a717b11806b0563aeb43f861badf1c`. Focused regression is
188/188 and the full Product suite is 309/309; lint, build, and diff-check
pass. The exact next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-ADOPTION1`.
No Product, Harness, materializer, Live, baseline, or `ai-knowledge` change
occurred; no push, tag, release, deploy, or publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE2-SOURCE-HASH-PROVENANCE-RECONCILIATION1 (2026-09-03)

The [Evidence2 source-hash provenance reconciliation](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-evidence2-source-hash-provenance-reconciliation1.md)
records CASE 1 / Decision A. The exact Product Git blob for
`563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf:src/auto-layout.ts` is
`a7bb99d6628fe127eef7defe9ffdd957591de150`; its canonical raw-byte SHA-256 is
`63547927D0B5DE990D596EEAF5925A7877F2677165A3DF676DA9123FC3030212`.

Evidence1's `257B...` is the CRLF checkout representation, while Evidence2's
`2F...` is the Live mixed-EOL working-tree representation. Evidence2's actual
checkout imports resolve to the same Product blob, and no Product source drift
exists. The discrepancy is HASH-RECORD-DRIFT / metadata error only; no
invalidated Evidence2 artifacts entered Evidence Commit B `ecad472...`, whose
13 artifacts remain bound to valid Protocol A `91d6cea...`.

Evidence1 remains formally valid with its historical CASE 4 / Decision D
translation-covariance result. Evidence2 remains valid with CASE 1 / Decision
A, the recommended transform `originX=0/1`, `originY=0/1`, `scale=6144/1`, and
`RUN-CONFIGURATION-ADOPTION1 = ELIGIBLE`. `PR3-RUNTIME-TRANSFORM-v1` remains
UNFROZEN. `PRODUCT-SOURCE-RAW-BLOB-SHA256-v1` is frozen prospectively as an
additive convention binding commit, path, Git blob ID, and SHA-256 of exact raw
blob bytes; historical hashes are preserved. The exact next prerequisite is the
not-started `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-ADOPTION1`.

No Product, Harness, Evidence1, Evidence2, materializer, baseline, or
`ai-knowledge` history changed; no new execution, push, tag, release, deploy,
or publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-MACHINE-EXECUTION1 (2026-09-03)

The [Machine Execution1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-machine-execution1-result.md)
records `CASE 1 / Decision A`. The final Protocol / Executable Commit A is
`06f66142812be03a8a3a138e2b774cbc9926b91f`; it preceded all dynamic work.
Evidence Commit B is `b0bd0f1a9f70915c639cbee61cf5f8370c78766f`, containing
generated evidence artifacts only.

The frozen matrix completed with V0 `40/40`, V1 `40/40`, V2 `80/80`, for
machine candidate total `160/160`. B0 is `8/8` complete. B1 has `16` complete
V2 machine-side diagnostics and `16` pending V3 browser-side obligations.
Deterministic replay, input mutation, stage linkage, fixture authority, and
canonical artifact index gates pass; there are no candidate, Product
downstream, Harness, or fixture-authority failures. All `80` V2 cells are
machine-eligible for later Browser Execution1.

The adopted transform remains the single global
`PR3-RUNTIME-TRANSFORM-v1`: `originX=0/1`, `originY=0/1`, `scale=6144/1`, with
the Evidence2 fingerprint retained. No V3, browser, screenshot, human review,
ranking, selection, Product integration, or PR-3 claim occurred. `E-VISUAL =
NO` and `PR-3 = NO`.

Product regression is `309/309 PASS`; lint and build pass. Live Product,
original Harness, Evidence1 clone, Evidence2 clone, retained materializer,
Baseline2, and `ai-knowledge` remain unchanged. The exact next prerequisite is
the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-EXECUTION1`.
No push, tag, release, deploy, or publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-ADOPTION1 (2026-09-03)

The [Run Configuration Adoption1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-adoption1.md)
records `CASE 1 / Decision A`. The accepted Evidence2 result and source-hash
provenance reconciliation remain valid, Product source drift is `NO`, and the
canonical raw-blob convention is applied prospectively to the adopted source
bundle.

`PR3-RUNTIME-TRANSFORM-v1` is now `ADOPTED / FROZEN` as the single global
transform `originX=0/1`, `originY=0/1`, `scale=6144/1`. Its scope is limited to
the LiaisonScape Initial Placement Seed production-candidate PR-3 evaluation
lineage. This does not establish Product coordinate policy, candidate
semantics, visual acceptance, selection, Product integration, or PR-3
completion. `PR3-CANONICAL-RUNTIME-ORIGIN-v1` is `FROZEN`,
`RC-SPACING-v1` and `SCALE-COMPATIBILITY-EVIDENCED` are `RETAINED`, and
`RUN-CONFIGURATION-ADOPTION1 = COMPLETE`.

Machine Execution1 is `ELIGIBLE / NOT STARTED`. Candidate execution is `0`,
real-fixture execution is `0`, V0/V1/V2/V3 and B0/B1 PR-3 evidence remain
`NONE`/`0`, browser and screenshot work remain `NO`, `E-VISUAL = NO`, ranking,
selection, Product integration, and PR-3 remain `NO`. No Product, Harness,
materializer, baseline, fixture, or `ai-knowledge` file changed. The exact
next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-MACHINE-EXECUTION1`.
No push, tag, release, deploy, or publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-MACHINE-EXECUTION1-BROWSER-LINEAGE-READINESS-RECONCILIATION1 (2026-09-04)

The [Machine Execution1 browser-lineage readiness reconciliation](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-machine-execution1-browser-lineage-readiness-reconciliation1.md)
records `CASE 3 / Decision C`. Machine Evidence B remains valid historical
machine evidence: V0 `40/40`, V1 `40/40`, V2 `80/80`, machine candidate total
`160`, B0 `8 COMPLETE`, and B1 machine-side `16 COMPLETE`. The `16` B1
browser-side diagnostics remain pending; V3 remains `0`.

The static contract audit found that `PR3-RUN-IDENTITY-v1` requires a final
`pr3r1-<lowercase-sha256>` identity containing the exact browser path/version,
while the accepted C-class rule and browser-authority wording do not clearly
state whether that value must be supplied before the first Phase M artifact or
only before Phase B. The Machine-local
`machine-execution1-2026-09-03` ID is therefore `M-R1`, not a final PR3 ID.
No accepted final-manifest or `PR3-RESUME-v1` bridge was found that binds this
phase-local run to a new browser-bound semantic identity. The existing VSR
stage linkage remains valid for immutable V2 fingerprint references but does
not by itself establish the final cross-phase identity.

The Machine computational evidence is preserved and may be referenced
byte-for-byte. It must not be copied, renamed, rewritten, or reidentified.
The browser binding timing is `AMBIGUOUS before Phase M` and `YES before Phase
B`; final PR-3 lineage eligibility is therefore `NO` pending a narrowly scoped
`RUN-IDENTITY / PHASE-BRIDGE DESIGN CORRECTION`.

The frozen Phase B order is corrected additively as B1 browser-side diagnostics
(`16`, `candidate=NO-CANDIDATE`) followed by candidate V3 captures (`80`). The
canonical checkpoint name remains
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1`.
The later `BROWSER-EXECUTION1` wording is `POINTER-NAME-DRIFT` only; no formal
rename was accepted and no second Phase B checkpoint is created.

No browser, CDP, Vite browser run, V3, screenshot, human review, ranking,
selection, Product integration, Machine rerun, or Machine artifact change
occurred. Browser Capture1 is `NOT STARTED`. No new `ai-knowledge` entry was
created, existing dirty knowledge was preserved, and no push, tag, release,
deploy, or publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-IDENTITY-PHASE-BRIDGE-DESIGN-CORRECTION1 (2026-09-04)

The [Run-Identity Phase-Bridge Design Correction1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-identity-phase-bridge-design-correction1.md)
records `CASE 1 / Decision A`. The preferred phase-scoped model is frozen:
Machine Execution1 remains immutable phase-local evidence, while the final
browser-bound `pr3r1-<lowercase-sha256>` identity is minted during Browser
Protocol A preregistration/preflight after exact Microsoft Edge path/version
binding and before any Browser dynamic execution.

`PR3-MACHINE-EVIDENCE-REFERENCE-v1` and `PR3-PHASE-BRIDGE-v1` are frozen as
reference-only contracts. The final Browser/PR3 manifest references Machine
Evidence B `b0bd0f1a9f70915c639cbee61cf5f8370c78766f` plus its exact artifact
index/run-manifest hashes; it does not transfer ownership or rewrite, copy, or
reidentify Machine artifacts. `PR3-RESUME-v1` remains intra-lineage resume
only. Machine rerun is `NO`.

The exact eligible V2 set is frozen at 80 records with set hash
`E891C747394C492AE1D56AA1518F2E596E96756985BCBFBDFC93323070CC162C`. The B1
pending set is frozen at 16 records with set hash
`B02C9075A2758CF953F3D6BF50CC852E8394C0357A127F3B559708899D216335`. V3 rows
must link exact V2 artifact references/hashes, and B1 browser rows must link
exact B1 machine-side references/hashes while retaining `NO-CANDIDATE`.

`PHASE-B-ORDER-v1` is B1 browser-side 16 first, then candidate V3 80. The
canonical checkpoint remains
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1`.
Browser Capture1 is eligible but `NOT STARTED`; V3, screenshots, review,
selection, Product integration, and PR-3 remain `NO`.

No Product, Harness, Machine clone, Evidence1/Evidence2, materializer, or
Baseline2 change occurred. No new `ai-knowledge` entry was created; existing
dirty knowledge was preserved. No push, tag, release, deploy, or publication
occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1 (2026-09-04)

The first authorized Phase B execution was attempted in disposable Browser
lineages based on the accepted Harness authority. Machine Evidence B, the
80-cell eligible V2 set, the 16-cell B1 pending set, the adopted transform,
and the exact Edge Stable authority were frozen before dynamic capture. The
final Browser identity was
`pr3r1-95ff619e25deb4c5edc281041bf6c4d32324e6765c4f5999a98ff68a343d8762`.

The checkpoint is **CASE 7 / DECISION G — B1 PHASE GATE BLOCKS CANDIDATE V3**.
The final disposable lineage committed Browser Protocol A, then reached seven
terminal B1 browser-side failures after 21 attempts; the common CDP launch /
readiness failure prevented the remaining B1 rows and blocked all candidate
V3 captures. No screenshot succeeded, no Browser Evidence B completion commit
was created, and no V3, visual review, ranking, selection, E-VISUAL, Product
integration, or PR-3 assessment occurred. Partial B1 failure records remain in
the Browser clone for diagnosis. Edge VersionInfo and an independent CDP probe
both reported `152.0.4191.53`; Chrome fallback was not used.

The exact next prerequisite remains
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-REVIEW1`,
but it is **NOT STARTED**. A future Browser retry requires a new lineage and
Protocol A after correcting the runner launch/readiness fault. Machine
Execution1, Browser Lineage Readiness Reconciliation1, and Run-Identity
Phase-Bridge Design Correction1 remain preserved.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-CDP-LAUNCH-READINESS-DIAGNOSTIC1 (2026-09-04)

The [Browser Capture1 CDP launch/readiness diagnostic result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-cdp-launch-readiness-diagnostic1.md)
records **CASE 6 / DECISION F — CORRECTION UNSTABLE**. The failed capture7
lineage remains immutable at `06acff14d5e27e3c9a775057c608d203854cab20` and
was not resumed. A fresh diagnostic clone was based on the exact failed
Protocol A source `a7a2aafad8fa25b66b183b8685827ae3fb938d4a` and recorded
reproduction, launch-difference, transport, profile, timing, process, and
focused-test artifacts in diagnostic commit `15659d0`.

The first failed readiness layer was R1: the failed Node `child_process.spawn`
path did not obtain a usable `/json/version` endpoint, while Edge later emitted
`DevTools listening` followed by `GPU process isn't usable. Goodbye.` The
strongest causal difference is the Windows process-launch seam: an isolated
same-argv PowerShell `Start-Process` comparison passed three fresh cycles, but
a later repeat of the diagnostic correction failed three cycles with the same
GPU fatal. The root is therefore **LIKELY**, classified as
`WINDOWS-SPAWN-SEMANTICS-DEFECT` with unresolved process-lifecycle/GPU
instability; no stable correction candidate was accepted.

No Product, Original Harness, Machine Evidence B, transform, viewport,
candidate, B1, V3, screenshot, Browser Evidence B, review, ranking, selection,
E-VISUAL, Product integration, or PR-3 work occurred. Product, Machine,
materializer, Baseline2, ai-knowledge, and the failed Browser lineage remain
unchanged. `REVIEW1 = NOT ELIGIBLE`; the historical Review1 pointer is a stale
downstream pointer, not the active prerequisite. Fresh Browser Capture1 retry
eligibility remains **NO / BLOCKED** until a stable diagnostic correction is
proven. The active next prerequisite is a bounded follow-up diagnostic for the
remaining Edge CDP launch/readiness process-lifecycle instability. That next
diagnostic and any fresh Browser Capture1 retry are **NOT STARTED**. PR-3
remains `NO`; no push, tag, release, deploy, or publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-CDP-LAUNCH-READINESS-DIAGNOSTIC3 (2026-09-04)

The [Browser Capture1 CDP Launch/Readiness Diagnostic3 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-cdp-launch-readiness-diagnostic3.md)
records **CASE 4 / DECISION D - GPU/Edge environment instability dominates**.
The bounded quiescent crossover ran in the preregistered order
`N1 -> P1 -> N2 -> P2 -> N3 -> P3` with six unique profiles and six unique
ports. All six cycles reached CDP at approximately 5.750-6.022 seconds, but
all six became `GPU-FATAL-AFTER-CDP` before the 3-second stability window.

Node and PowerShell each failed 3/3 under the same semantic argv, common Node
HTTP poller, 12-second observation window, fresh-profile policy, and
quiescence procedure. GPU fatal and `GPUPersistentCache` file-in-use errors
occurred in all six cycles; all six process/port/profile cleanup checks passed.
The classifications are `SPAWN-C / CORRELATED ONLY`,
`LIFECYCLE-C / NOT SUPPORTED`, `PROFILE-C / NOT SUPPORTED`,
`GPU-A / FATAL PREVENTS STABLE CDP`, and `TIMEOUT-B / CONTRIBUTING`.

The first N1 attempt was invalidated as a diagnostic-helper snapshot bug and
was not counted; it used a unique profile and was followed by a corrected N1
with no profile or port reuse. Historical Diagnostic1/2 TEMP profiles were
cleaned only from their isolated E2R diagnostic roots: 18 and 2 profiles,
all `CLEANUP-PASS`. No normal Edge profile was touched.

No stable causal Browser runner correction was identified. Browser Capture1
retry remains **NOT ELIGIBLE**; Review1 remains **NOT ELIGIBLE**; B1 and V3
remain `0`; Browser Evidence B remains `NONE`; PR-3 remains `NO`. The exact
next prerequisite is a bounded browser/runtime environment stability
qualification focused on Edge/GPU resource state and external process
ownership. It is **NOT STARTED**. Product, Harness, Machine Evidence B,
failed capture7, materializer, Baseline2, and `ai-knowledge` remain unchanged;
no push, tag, release, deploy, or publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-CDP-LAUNCH-READINESS-DIAGNOSTIC2 (2026-09-04)

The [Browser Capture1 CDP Launch/Readiness Diagnostic2 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-cdp-launch-readiness-diagnostic2.md)
records **CASE 4 / DECISION D — MULTI-FACTOR INSTABILITY**. Diagnostic1's
CASE 6 / Decision F remains historical and was not amended. Diagnostic2
reconciles the retained chronology: Edge process start is `PASS`; first failed
readiness is R1 CDP HTTP discovery; one extended exact failed-runner run
reached `/json/version` at 5765 ms, after the original 5-second window, then
became GPU-fatal after only two successful responses.

The timeout classification is `TIMEOUT-B / CONTRIBUTING`. The launcher result
is `SPAWN-B / LIKELY CONTRIBUTING`, not confirmed: Node direct spawn repeatedly
failed, isolated same-argv PowerShell passed three cycles, and later PowerShell
runs also failed. The final layered model is multi-factor launcher,
process-lifecycle, profile/cache, and GPU instability; Vite is not causal at
R1. Independent probe authority is `PROBE-AUTHORITY-B`: retained artifacts
contain mixed PASS/FAIL, with the final retained probe artifact at port 9712
recording PASS. The earlier prose-only port-9691 PASS is not authoritative.

No Browser Capture1 retry, B1, V3, Browser Evidence B, screenshot, Review1,
ranking, selection, E-VISUAL, Product integration, or PR-3 work occurred.
`REVIEW1 = NOT ELIGIBLE`; the historical Review1 pointer is stale. Fresh
Browser Capture1 retry eligibility remains **NO / BLOCKED**. The exact next
prerequisite is a bounded CDP launch/readiness process-quiescence and
launcher-crossover stability diagnostic with fresh profiles, explicit
targeted process-tree exit confirmation, extended observation, and GPU/cache
state recording. It is **NOT STARTED**. Product, Original Harness, Machine
Evidence B, failed capture7, materializer, Baseline2, and `ai-knowledge`
remain unchanged. PR-3 remains `NO`; no push, tag, release, deploy, or
publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-RUNTIME-POST-REBOOT-QUALIFICATION1 (2026-09-04)

The [Host Runtime Post-Reboot Qualification1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-runtime-post-reboot-qualification1.md)
records **POST-REBOOT-C / DECISION C - HOST / CHROMIUM / GPU RUNTIME
INSTABILITY PERSISTS ACROSS REBOOT**. A full Windows reboot was confirmed
after Qualification1: boot time was `2026-09-03T19:11:25.1487986Z`, after the
Qualification1 completion timestamp.

Updated Edge Stable `152.0.4191.62` failed 3/3 controlled Node cycles with
first CDP at `5569-5719 ms`, GPU fatal 3/3, cache-lock 3/3, and quiescence
3/3. Because Edge remained unstable, Chrome Stable was run as a non-evidence
comparator; current Chrome `152.0.7977.75` also failed 3/3, reaching CDP at
`329-477 ms` but producing GPU fatal and cache-lock errors in every cycle.

The pre- and post-reboot GPU signatures are **UNCHANGED**. Edge-specific
instability is **NO**; persistent host/Chromium/GPU runtime instability is
**YES**. Product, Harness, and Machine Evidence defects were not demonstrated.
The accepted PR-3 authority remains Edge Stable; no Browser Authority
Correction occurred and Chrome is not qualified as a replacement.

Fresh Browser Capture1 remains **NOT ELIGIBLE**; Review1 remains **NOT
ELIGIBLE**; B1 and V3 remain `0`; Browser Evidence B remains `NONE`; PR-3
remains `NO`. The exact next prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-GPU-RUNTIME-DIAGNOSTIC1`,
which is **NOT STARTED**. No driver/settings/browser-authority/runner change,
Product change, or publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-BROWSER-RUNTIME-STABILITY-QUALIFICATION1 (2026-09-04)

The [Browser Runtime Stability Qualification1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-browser-runtime-stability-qualification1.md)
records **CASE 3 / DECISION C - HOST / CHROMIUM / GPU ENVIRONMENT
INSTABILITY**. Updated Edge Stable was resolved as `152.0.4191.62`, drifted
from the historical failed authority `152.0.4191.53`, and failed 3/3
controlled Node cycles. Each reached CDP around 5.756-5.795 seconds, then
became `GPU-FATAL-AFTER-CDP` before the 3-second stability window.

Because updated Edge failed, the user-authorized Chrome direction was tested
as a non-evidence comparator. Chrome Stable `151.0.7922.175` also failed 3/3
under the same semantic argv, Node HTTP poller, fresh-profile policy, unique
ports, 12-second observation, 3-second stability, and targeted quiescence.
Chrome reached CDP at 363-503 ms but had GPU fatal and cache-lock errors in
all three cycles. Edge-specific instability is therefore **NO**; host-wide
Chromium/GPU instability is **YES**. Product, Harness data, and Machine
Evidence defects were not demonstrated.

Chrome is not a stable replacement and the accepted PR-3 authority remains
Edge Stable. Browser Authority Correction1 is not required from this result.
Fresh Browser Capture1 remains **NOT ELIGIBLE**; Review1 remains **NOT
ELIGIBLE**; B1 and V3 remain `0`; Browser Evidence B remains `NONE`; PR-3
remains `NO`. The exact next prerequisite is a bounded host/Chromium/GPU
runtime qualification focused on the common GPU/cache failure and external
runtime state. It is **NOT STARTED**. No Product, Harness, Machine Evidence,
capture7, or `ai-knowledge` change occurred; no push, tag, release, deploy, or
publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-GPU-RUNTIME-DIAGNOSTIC1 (2026-09-04)

The [Host/GPU Runtime Diagnostic1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-gpu-runtime-diagnostic1.md)
records **CASE 2 / DECISION B — HOST-GPU-B / FIREFOX ALSO FAILS**. The
post-reboot Edge/Chrome baseline was reused without rerunning Chromium. A
fresh Microsoft Store Firefox `154.0.1` executable was run in three sequential
headless cycles against a neutral local text/CSS/SVG control page, with three
fresh profiles. All three processes exited code 0 but emitted
`RenderCompositorSWGL failed mapping default framebuffer, no dt`; no PNG was
produced. All three profiles were cleaned and the Firefox process set was
quiescent.

The update-free host snapshot records Windows 11 Home 64-bit, build
`26200.9168`, Intel UHD Graphics / Intel driver `32.0.101.7088`, WDDM 3.2,
DirectX 12, and no installed KB5120998. GPU/WMI inventory was restricted, so
PnP and dxdiag evidence were retained. No display-driver reset,
LiveKernelEvent, or browser crash entry appeared in the narrow event window.
The independent Firefox failure makes cross-engine host/GPU graphics failure
strongly supported. Product, Harness, Machine Evidence, runner causality, and
Browser Authority defects were not demonstrated.

Fresh Browser Capture1 remains **NOT ELIGIBLE**; Review1 remains **NOT
ELIGIBLE**; B1 and V3 remain `0`; Browser Evidence B remains `NONE`; PR-3
remains `NO`. The exact next prerequisite is a bounded GPU driver/Windows
graphics diagnostic beginning with read-only pre-change evidence. It is **NOT
STARTED**. Windows Update, GPU driver, graphics settings, Product, Harness,
Machine Evidence, failed capture7, materializer, Baseline2, and `ai-knowledge`
remain unchanged; no push, tag, release, deploy, or publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-GPU-RUNTIME-GRAPHICS-DIAGNOSTIC2 (2026-09-04)

The [Host/GPU Runtime Graphics Diagnostic2 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-gpu-runtime-graphics-diagnostic2.md)
records **CASE 1 / DECISION A - HEADLESS CHROMIUM GPU-SANDBOX/RUNTIME PATH
STRONGLY IMPLICATED**. Normal visible GUI controls all rendered the same
neutral local page: Edge `GUI-RENDER-PASS`, Chrome `GUI-RENDER-PASS`, and
Firefox `GUI-RENDER-PASS` from the user's bounded manual acceptance
(`page YES, text YES, SVG YES, corruption NO`). Firefox remains open on that
local page.

The retained headless Chromium baseline remains GPU-fatal, but adding only
`--disable-gpu-sandbox` to the otherwise identical Edge baseline produced
three late-stable passes. First CDP arrived at `5574-5632 ms`; all three
completed the 3-second stability window with zero GPU fatal, zero cache-lock,
and 3/3 targeted quiescence/cleanup passes. The result is
`SANDBOX-A / STRONGLY SUPPORTED`. This is diagnostic-only and is not a
production Browser Capture or PR-3 launch configuration.

Diagnostic1's total-host-graphics wording is refined additively to:
**CROSS-ENGINE HEADLESS/AUTOMATED GRAPHICS-COMPOSITOR FAILURE OBSERVED;
NORMAL GUI GRAPHICS PATH REMAINS FUNCTIONAL.** Total GPU hardware or total
Windows graphics failure is not demonstrated. Fresh Browser Capture1 remains
**NOT ELIGIBLE**; Review1 remains **NOT ELIGIBLE**; B1 and V3 remain `0`;
Browser Evidence B remains `NONE`; PR-3 remains `NO`. The exact next
prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-RUNTIME-WINDOWS-UPDATE-QUALIFICATION1`.
KB5120998 was not installed. Product, Harness, Machine Evidence, Browser
authority, driver, settings, and `ai-knowledge` remain unchanged; no push,
tag, release, deploy, or publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-RUNTIME-VSCODE-STABLE-EXCLUSION-QUALIFICATION1 (2026-09-04)

The [VS Code Stable Exclusion Qualification1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-runtime-vscode-stable-exclusion-qualification1.md)
records **CASE 3 / DECISION C - `VSCODE-STABLE-C / MIXED / INCONCLUSIVE`**.
VS Code Stable was installed at `1.136.0` but was already absent before the
test and remained absent before and after all three cycles. VS Code Insiders
`1.137.0-insider`, hosting Codex, remained running throughout. It was not
stopped or modified.

With Stable excluded and Insiders retained, Edge `152.0.4191.62` using the
original Diagnostic2 normal-sandbox argv passed `3/3` with first CDP at
`289-308 ms`, zero GPU fatal, zero cache-lock, and quiescence `3/3`. One
optional sandbox-disabled integrity control also passed. The result answers
the operational question as YES, but because Stable was not running at
preflight there is no matched Stable-running baseline; active Stable-process
causality is therefore **INCONCLUSIVE**, and installation causality is not
demonstrated.

The retained headless Chromium GPU-sandbox/runtime issue remains supported,
but KB5120998 is **not** the immediate next variable. The exact next
prerequisite is a bounded VS Code Stable-present/Stable-absent confirmation
checkpoint. Browser Capture1 remains **NOT ELIGIBLE**; Review1 remains **NOT
ELIGIBLE**; B1 and V3 remain `0`; Browser Evidence B remains `NONE`; PR-3
remains `NO`. No Product, Harness, Machine Evidence, browser authority,
driver, settings, Windows Update, or `ai-knowledge` change occurred; no push,
tag, release, deploy, or publication occurred.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-RUNTIME-VSCODE-STABLE-PRESENT-ABSENT-CONFIRMATION1 (2026-09-04)

The [VS Code Stable Present/Absent Confirmation1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-runtime-vscode-stable-present-absent-confirmation1.md)
records **CASE 1 / DECISION A - `VSCODE-STABLE-PRESENT-A / PRESENCE NOT
SUPPORTED AS CAUSE`**. The reused Stable-absent A1 result and the fresh
Stable-present B result both pass `3/3` under the exact retained Edge original
normal-sandbox argv. During B, Stable and Insiders were identified by their
installation paths and remained present before and after every cycle; first
CDP was `293-309 ms`, GPU fatal and cache-lock counts were both `0`, and
quiescence was `3/3`.

The matched comparison does not support VS Code Stable process presence as the
cause. A2 was therefore not run, Stable was not uninstalled, and KB5120998
remains deferred. The exact next prerequisite is
`HOST-RUNTIME-BROWSER-CAPTURE-READINESS-REQUALIFICATION1`. Browser Capture1
remains **NOT STARTED** and **NOT ELIGIBLE**; Review1 remains **NOT ELIGIBLE**;
B1 and V3 remain `0`; Browser Evidence B remains `NONE`; PR-3 remains `NO`.
No Product, Harness, Machine Evidence, browser authority, driver, settings,
Windows Update, registry, policy, or `ai-knowledge` change occurred; no push,
tag, release, deploy, or publication occurred.
