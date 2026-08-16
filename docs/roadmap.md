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
- Treat major desktop/mobile UI divergence as later application design work,
  not a Core or Extension requirement.
- Add NarrativeLine time-of-day controls through progressive disclosure when
  that application task is prioritized; the History model already supports the
  relevant fields.

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

## Immediate sequence

1. Preserve the LiaisonScape `0.1.0` First Distribution and Direct Graph
   Authoring checkpoints as the current application baseline.
2. Select exactly one bounded follow-up workstream through its own scope and
   evidence gate before implementation.
3. Keep Names P1 product integration, Names Grouping, Relative Time,
   History vNext, Target Reference, Source/Citation, Provenance/Confidence,
   Semantic/Dictionary, and Layout/Presentation responsibilities independently
   gated.
4. Continue Coordinate Draft work only through its existing evidence gates;
   read-only Validator support does not by itself authorize application Draft
   writers, migration, or Stable registration.

The ordering above does not select the next product feature. A later handoff or
explicit planning decision may choose one bounded follow-up without reopening
unrelated workstreams.

At every step, prefer the smallest change that increases executable evidence
and keeps Core and Extension responsibilities distinct.
