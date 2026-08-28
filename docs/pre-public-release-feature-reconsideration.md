# Pre-public-release Feature Reconsideration

## Status

**PLANNING CHECKPOINT / PRE-RELEASE CANDIDATES RECORDED / RESEARCH AUDITS
REQUIRED / IMPLEMENTATION NOT AUTHORIZED**

This record captures the remaining pre-public-release feature candidates after
the Relation directionality supersession recorded in
`docs/relation-endpoint-ui-directionality-follow-up.md`. It records planning
boundaries and audit questions; it does not select a schema, register an
Extension, or authorize feature implementation.

## Current work-order boundary

The immediate intention is not to begin these larger feature workstreams yet.
The current sequence is:

1. finish bounded small fixes and audits possible from the currently supplied
   runtime source set;
2. refresh and review the latest relevant Research files;
3. audit and select the larger pre-release feature workstreams;
4. after format-affecting decisions stabilize, perform the final public Sample
   Dataset refresh; and
5. later run release, interoperability, and final acceptance.

Recording a candidate here does not make it the immediate next
implementation. No runtime, Core, Extension, schema, Validator, sample, Hub,
or application change is authorized by this record.

## Relation directionality cross-reference

The detailed directionality decision is complete as a planning supersession in
`docs/relation-endpoint-ui-directionality-follow-up.md` and is not duplicated
here. The current high-level state is:

- Core Relation remains structurally `sourceId -> targetId`;
- future LiaisonScape reverse, undirected, and bidirectional appearance is
  being considered as visualization/presentation behavior;
- Core, schema, and Extension changes are not currently assumed for that
  feature;
- exact Research responsibility reconciliation remains required;
- visual direction changes must not auto-rewrite Relation `name` or
  `description`;
- Japanese vocabulary remains Relation = `つながり` and generic endpoints =
  `接続先`; and
- English generic endpoint candidate `Endpoints` remains subject to a later
  vocabulary audit.

## Relation endpoint vocabulary surface audit

Before any cross-app endpoint UI change, perform a bounded all-surface audit.
Inventory current and candidate user-facing terminology, including:

- Japanese: `始点`, `終点`, `接続元`, `接続先`, `接続元のエンティティ`, and
  `接続先のエンティティ`;
- English: `Source`, `Target`, and `Endpoints`; and
- arrow and separator presentation.

The audit should cover LiaisonScape Relation creation, edit/detail, Related
Relations, deletion confirmations, graph labels, Handoff landing/detail,
messages/i18n, and tests. It should cover NarrativeLine Relation blocker
cards, Related Relation presentation, Entity/Event-related surfaces, Handoff
sender surfaces, fallback Relation identity, messages/i18n, and tests.

The goal is one coherent vocabulary contract, while allowing different DOM,
layout, and interaction composition in each application. No runtime rename is
authorized by this record.

## NarrativeLine Relative Chronology

Relative Chronology is a serious pre-release design candidate. The primary use
case is:

- A has a known date;
- B has no known date;
- C has a later known date; and
- recorded facts say A occurred before B and B occurred before C.

NarrativeLine should eventually be able to place B meaningfully between A and
C without inventing a Civil Time value. This is factual chronology, not
arbitrary display order, authorial reveal order, ordinary filtering, or a
fabricated approximate date.

The likely workstream is **Relative Chronology / Relative Time — minimal
pre-release candidate**. Current History `temporalOrder` must not be
overloaded beyond its accepted scope.

### Minimal `before` candidate

A later Research audit should evaluate whether one canonical strict temporal
relation is sufficient initially:

```text
before(A, B)
```

`after(A, B)` could normalize to `before(B, A)`, and B between A and C could
use `before(A, B)` plus `before(B, C)`. This is only a candidate; no schema or
Extension is selected here.

The audit must cover Event references, self constraints, duplicate
constraints, cycles, contradictions, known Civil Time conflicts, partial
dates and granularity, transitive implications, stored versus derived
transitive relations, deletion/reference integrity, Validator behavior,
round-trip, unknown-data behavior, NarrativeLine ordering, and
interoperability.

### Relative Chronology editing

A persisted chronology model also needs usable editing. Candidate interactions
include Earlier/Later controls, possible Japanese controls such as `▲ 前へ`
and `▼ 後へ`, and drag-and-drop. Exact labels are not selected.

Drag-and-drop must not be implemented as array reordering when it changes
factual temporal constraints. If adopted, it should use the same underlying
chronology-editing operation as button-based editing. Later design must decide
buttons first, drag-and-drop in the first release, conflict/cycle feedback, and
keyboard accessibility.

## Temporal order and authorial order

`temporalOrder` editing remains a separate pre-release candidate. History
already supports it when existing temporal values and granularity cannot
otherwise distinguish Objects. Raw numeric values should not be the primary
ordinary-user UI without explicit later justification.

Authorial or presentation display-order reordering is another distinct
pre-release candidate. Arbitrary display order must not be stored in History
`temporalOrder`. If persisted for interoperability, it must be reviewed using
the existing Perspective/authorial-context research. No Perspective schema is
authorized here.

## NarrativeLine search and filter

**USEFUL PRE-RELEASE FEATURE CANDIDATE / NOT AN ARCHITECTURAL RELEASE
BLOCKER**

A bounded first version may remain application-local and derived. It may start
with Event name, description, dated/undated state, and related Entity or other
simple supported conditions. No Dataset Extension is required for that basic
version.

Future advanced possibilities include fuzzy search, a compound Query Builder,
saved filters, URL-shared filters, cross-object full-text search, an internal
shared search index, and Dictionary/Semantic-aware search. None should be
built now, and a future internal index is not Dataset content.

## NarrativeLine granularity-aware Timeline folding

Granularity-aware folding or grouping is a pre-release usability candidate for
long Timelines. It must not be reduced to `year folding`. Justified
application-level buckets may include century, decade, year, month, day, hour,
or another scale.

Folding must respect recorded History granularity and must not invent finer
precision. An Event known only to year precision must not be silently treated
as having a known month, day, or hour. Initial fold/collapse state is
Application View State unless later evidence justifies persisted view data. No
Extension is required for a basic derived UI.

## NarrativeLine first/last navigation

The current preferred symmetric Japanese wording candidate is:

```text
↑ 最初
↓ 最後
```

`上へ / 下へ` may suggest incremental scrolling rather than endpoint
navigation. The English candidate remains `↑ Top` / `↓ Bottom`. A possible
state contract is `↓ 最後` at the Timeline top and `↑ 最初` after meaningful
downward scroll. Exact visibility and state behavior require a bounded UI
audit; no runtime change is authorized here.

## Time-of-day correction

NarrativeLine's current public application already has time-of-day
input/editing. Time-of-day editing must not be listed as a missing
pre-release feature merely from older planning material. Older roadmap or
Research statements about adding time controls must be checked against current
runtime evidence. No implementation follows from this item.

## LiaisonScape Entity Group and multiple membership

Group and membership design is a pre-release reconsideration. Earlier
assumptions of one Group maximum per Entity, a single-parent hierarchy, a
physical exclusive container, or collapse as a defining behavior must not
become foundational.

The initial design must remain compatible with one Entity belonging to multiple
Groups. The conceptual capability is many-to-many:

```text
Entity <-> Group
```

Entity A may belong simultaneously to Group X, Group Y, and Group Z. A design
centered on `entity.groupId`, or another structure that structurally limits
one membership, is not acceptable as the initial assumption.

### Group membership versus presentation

Group membership meaning and graph presentation must be designed separately.
Group collapse/expand is not a required first-release Group feature, and Group
must not be defined as one exclusive physical container. Later presentation
candidates include hull/region, highlighting, labels, badges, filters, focus
mode, or another visual treatment; no choice is accepted here.

Research must still determine responsibility for application-only grouping,
Perspective, another Extension, semantic grouping, persistence, Group
identity, targetability, Relation-to-Group participation, nested Groups,
multiple membership, and cross-app usefulness. Core is not modified here.

## LiaisonScape bounded UX follow-ups

Ownership tooltip/popover sizing remains an explicit pre-public-release
follow-up. The later audit must distinguish Entity body, Node label, Relation
path, and Relation label. No global size fix is authorized without surface
evidence; no CSS work is authorized here.

Viewport toolbar drag-handle keyboard/focus behavior remains an explicit
accessibility follow-up. The handle receives keyboard focus, but the useful
keyboard interaction represented by that focus is unclear. Later audit must
decide whether to remove it from ordinary Tab order, provide genuine keyboard
movement/reposition interaction, or use a more appropriate semantic control.
Focusability must not simply be removed without accessibility review.

Initial Node Placement, `LS-M3`, remains a major LiaisonScape
pre-release-quality candidate. A later audit must consider edge crossings,
node overlap, label overlap, edge length, graph bounds, component separation,
layout stability, and incremental stability. No placement algorithm is
implemented here.

## Undo/Redo

Undo/Redo is desirable but is not currently mandatory for the first public
release. It is not a release blocker and its priority is not raised by this
reconsideration.

## Semantic and Dictionary sequence

Semantic/Dictionary work remains outside the first public-release
implementation scope. Preserve this later sequence:

1. design the Dictionary/Semantic responsibility boundary;
2. experiment with on-demand external vocabulary retrieval;
3. investigate Wikidata lookup;
4. investigate thesaurus/synonym lookup;
5. define provenance, retrieval metadata, caching, offline/error behavior, and
   intentional adoption rules; and
6. later use the foundation for Entity visualization applications such as
   quadrant/radar charts and for Character Generator.

This work must not start in this checkpoint.

## Public Sample Dataset Refresh

Public Sample Dataset Refresh is a **PRE-RELEASE REQUIREMENT**, not optional
cleanup. Existing public samples must be updated to the latest accepted
Dataset form before public release, after format-affecting decisions are stable
enough to avoid repeated migrations.

The eventual refresh must inventory public samples, preserve each sample's
intended role, update accepted representations where appropriate, and verify
the production Validator, NarrativeLine smoke, LiaisonScape smoke,
cross-app round-trip, unknown-field and unknown-Extension preservation, Hub
sample links/Handoff, license and redistribution eligibility, and the
Stable-oriented versus Experimental distinction where relevant. No sample
files change here.

## Other existing pre-release items

Existing roadmap items retain their current statuses. This record does not
reopen accepted or closed work and does not silently reorder the roadmap. Live
open or deferred examples include destructive styling parity, Cross-App
Flatness/visual baseline, the common E2R favicon, selectable SVG icons,
responsive/presentation follow-ups, S3 licensing/provenance, public
interoperability, deployment/push readiness, and the final pre-public-release
audit.

The larger Research audit follows completion of the current small-fix
sequence. No candidate in this record is promoted to mandatory implementation
solely because it is recorded here.
