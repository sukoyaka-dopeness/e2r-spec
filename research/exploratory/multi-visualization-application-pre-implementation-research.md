# ParameterPlotter (working name) — multi-visualization application research

Date: 2026-09-30; current status updated 2026-10-06
Status: Prototype 1 accepted / bounded application-local Prototype 2 HUMAN-ACCEPTED / CLOSED (19 Human PASS / 0 PENDING / B3 NOT RUN; legacy browser-evidence limitation accepted) / Candidate B first Product slice HUMAN-ACCEPTED / successor lifecycle and authoring policies HUMAN-DECIDED / bounded successor functional application behavior HUMAN-ACCEPTED / CLOSED at local source `b9a8e1fee6499c191c66033296e98965d777684e` / current verified local source `111be04898f354efe92856dfdd355ca89845fa59` includes post-acceptance source/UI corrections / Codex 390px real-browser review of all four views PASS / latest local readiness documentation `7280f1fd77d2e1df24e247e680314b3d3c4d2f97` / Product UI audit `e6733aad51cd083e54329a6d59a9de5f364186d3` / current source has no new Human functional acceptance / browser storage failure injection NOT RUN / Dimension Assessment Extension Candidate 0.1.0 HUMAN-ADOPTED (not Stable) / source and docs unpublished / release and deployment not approved

## Prototype 1 checkpoint and current handoff — 2026-10-02

The application-local ParameterPlotter Prototype 1 has been implemented and
Human-accepted as bounded interaction evidence. Profile, Radar, Quadrant,
and Matrix share Entity identity, temporary Dimensions and values, and the
Prototype's missing-value behavior. Imported Dataset content remains
read-only; temporary data stays in tab-session storage. Prototype 1 used the
numeric range `-1..+1`, and Radar's 10-spoke cap was a provisional display
limit.

The [Prototype 1 checkpoint](../prototypes/parameterplotter-1/prototype-1-checkpoint-2026-10-02.md)
records accepted interaction evidence, limitations, and the non-decisions
made at that checkpoint. The [Prototype README](../prototypes/parameterplotter-1/README.md)
contains implementation progression and bounded refinements. On 2026-10-02,
Human approved the Product responsibility direction below; this resolves the
checkpoint's pending decision without changing its historical record.

The approved responsibility is one workspace to compare selected E2R
Entities with explicitly defined Dimensions and inspect the same
application-local temporary Entity–Dimension values through Profile, Radar,
Quadrant, and Matrix. The values remain application-local session data, not a
portable Observation model. At that 2026-10-02 approval checkpoint, Human had not selected a product name,
portable Dimension/value contract, production implementation, application
owner, Dataset write-back/export, Extension, schema, or Validator change. A
later decision adopted the bounded Dimension Assessment Extension Candidate
described below; it does not retroactively change the Prototype 1 evidence.

The bounded application-local Prototype 2 experiment around
Dimension-specific MIN/MAX, optional free-text unit, arbitrary numeric
ranges, and derived presentation positions is Human-accepted and closed within
its bounded scope. Canonical evaluation status is 19 Human PASS / 0 PENDING /
B3 NOT RUN. Human accepted the lack of a genuine Prototype 1 legacy-session
browser fixture as a limitation; B3 is not Human PASS and no artificial fixture
was created. See the [implementation and closure result](../prototypes/parameterplotter-1/prototype-2-bounded-implementation-result-2026-10-02.md)
and the [Human Browser Evaluation guide](../prototypes/parameterplotter-1/prototype-2-human-browser-evaluation-2026-10-02.md).
The latest bounded refinements preserve
Matrix row/scroll/page position on value commit and implement the subsequent
Human-selected Dimension-local integer constraint for all new value commits.
The earlier Profile-global random-only option is superseded. Existing decimal
records are retained and marked, with no ordinary plot position while violating
the constraint; unconstrained Dimensions continue to allow decimals. This is
application-local and adopts no portable precision or step contract.
The closure does not adopt the [Dimension/value semantics checkpoint](parameterplotter-dimension-value-semantics-research-checkpoint-2026-10-02.md)'s
deferred portable questions. Precision,
directionality, portable zero and missing-state semantics, normalization,
provenance, multiple observations, portable Dimension identity/vocabulary,
and a Recorded Observation model remain open Research topics rather than
decisions in this implementation.

On 2026-10-04, Human selected Candidate B for the first Product slice: a
single-user, bounded app-local workspace with a read-only imported Dataset and
application-local Dimensions, temporary Entities, and comparison values.
Durability or recovery beyond the browser session is not guaranteed, and
possible loss at session end must be explicit to users. Portable
Observation/Dimension-value semantics, Dataset write-back/export, shared
workspace, accounts, authentication, and cloud persistence are not first-slice
requirements. ParameterPlotter remains a working name. Human selected the
dedicated Public application repository
[`sukoyaka-dopeness/e2r-parameter-plotter`](https://github.com/sukoyaka-dopeness/e2r-parameter-plotter)
as canonical production source. At this decision checkpoint, the repository
had been created and cloned, first-slice files were being prepared locally,
and the source had not yet been pushed. The
[Product decision packet](parameterplotter-product-milestone-decision-preparation-2026-10-04.md)
records the source boundary and implementation status. At that first-slice
checkpoint no portable contract, Dataset write-back, Extension, schema, or
Validator change was adopted. Human later adopted the Dimension Assessment
Candidate for successor Product work; Candidate B acceptance and its session-only
boundary remain historical and unchanged. The first external
source push was later approved and completed as recorded below. The later
Dimension Assessment Candidate is Human-adopted as a successor portable data
contract; Dataset write-back implementation, production schema/Validator
integration, and application runtime remain unimplemented.

## First source publication — 2026-10-04

The reviewed first slice was pushed to the public repository's `main` branch.
The implementation commit is `e77c6108171df005252ce9a25d042a770386b99d`
(`feat: add ParameterPlotter first app slice`); the latest revision is
`e31c67af3f89a23f959d151091e8f144f413624d` (`docs: sync first-slice commit
status`). GitHub's remote `main` matched this HEAD, and the GitHub Actions
`Check` workflow passed for it. The ten approved topics are set on the
ParameterPlotter repository. No release, tag, or deployment was made. The
Product boundary and Prototype 2 closure remain unchanged.

## First Product slice Human Acceptance — 2026-10-04

Human accepted the bounded Candidate B first Product slice after importing a
genuine E2R Dataset and confirming Dataset read-only behavior, shared
application-local values across Profile/Radar/Quadrant/Matrix, replacement
warning and preservation through **Keep current workspace**, session-lifetime
disclosure, and basic ordinary/narrow presentation. Human did not execute the
destructive replacement action. The local syntax check and all 26 tests passed;
GitHub Actions `Check` Run #1 / `verify` passed at public HEAD
`e31c67af3f89a23f959d151091e8f144f413624d`. See the
[first-slice Human Acceptance record](https://github.com/sukoyaka-dopeness/e2r-parameter-plotter/blob/main/docs/first-slice-human-acceptance-2026-10-04.md).

This closes the bounded first Product slice only. It does not authorize a
release, tag, deployment, formal product name, or portable contract. The
Quadrant connector issue and waiting-Entity plot-click discoverability remain
separate non-blocking follow-ups. Prototype 2 remains independently closed at
19 Human PASS / 0 PENDING / B3 NOT RUN.

After that acceptance, Human approved the successor capability direction:
production Validator integration; Dataset Entity edit/delete; Temporary
Entity promotion; Dataset Save/Export; comparison-work persistence and
recovery beyond a browser session; visible storage-failure handling; a public
application shell; and eventual external deployment. The direction initially
left portable representation, persistence artifacts, Entity field allowlist,
Temporary Entity promotion identity, invalid/unsupported Dataset policy,
shell, hosting, URL, product name, and release identity open. Human
subsequently selected the Dataset Entity deletion policy: block deletion while
incident Relations remain, expose their identities, do not cascade or allow
dangling Relations, and provide targeted LiaisonScape inspection only when
the exact Relation can be resolved against the same current Dataset. Human
also selected browser-local persistence plus a user-managed, self-contained
ParameterPlotter workspace backup/import with an embedded Dataset dependency
snapshot. Browser-storage write failure permits editing to continue in the
current session only with visible degraded/unsaved status. Dataset JSON Export remains a separate portable Dataset artifact. The later
Dimension Assessment Candidate defines an explicit Dataset-level portable
Dimension/Assessment representation for authored facts; existing
application-local workspace data is not implicitly converted to it. Human decided that blank or whitespace-only `name` / `description`
values remove the optional field; omitting an unchanged field preserves it.
The Entity edit-field allowlist is now Human-decided as Candidate A: ordinary Dataset Entity editing
may change only `name` and `description`, keeps `id` immutable, and preserves
all other known/unknown fields, Extensions, and unrelated Dataset content.
Nonblank trim/normalization remains open, and future Extension authoring
requires a separate decision naming its Extension, version, fields, and need.
Candidate B remains accepted as its original
session-only first slice and is not reopened. These remain application-level decisions, not an
E2R-wide rule. Human has decided Workspace Import/Restore uses whole-workspace
replacement, not merge, and pre-activation failure leaves both the active
workspace and prior browser-local copy intact. Replacing changed, degraded, or
unsaved current work requires explicit loss confirmation with Cancel or
Discard and Restore; a separate backup is optional. If persistence fails once
a valid restore is activation-ready, apply it in memory as degraded/unsaved,
disclose possible loss, and retain the prior browser-local copy until the new
workspace is successfully persisted. Exact UI and other Product policies
remain open. Human subsequently decided that ordinary new Entities are
created directly as Dataset Entities; Temporary creation/promotion is outside
the normal successor workflow. Dimensions, comparison values, selection,
placement, and view state remain workspace-owned; the later Dimension
Assessment Candidate separately defines portable Dataset Dimensions and
explicit Assessments but does not automatically convert existing workspace
data. The earlier conditional-promotion decision is retained as historical evidence and
is not a current requirement. The published Candidate B source persists and
reloads `tempEntities`. Human subsequently decided that the successor has no
compatibility guarantee for Candidate B session-only workspaces and does not
migrate, auto-promote, convert, or restore legacy `tempEntities`; it may start
new workspace state. No migration or rescue guarantee is adopted. See the
[legacy-workspace decision](parameterplotter-public-product-readiness-checkpoint-2026-10-04.md#human-decision-legacy-candidate-b-temporary-workspace-compatibility--2026-10-05),
[historical promotion decision](parameterplotter-public-product-readiness-checkpoint-2026-10-04.md#historical-human-decision-temporary-entity-promotion-identity-and-value-continuity--2026-10-05),
[restore-safety decision record](parameterplotter-public-product-readiness-checkpoint-2026-10-04.md#human-decision-workspace-import--restore-replacement-safety--2026-10-05),
[Product milestone decision packet](parameterplotter-product-milestone-decision-preparation-2026-10-04.md#human-decision-comparison-work-persistence-and-recovery--2026-10-05), and
[persistence decision record](parameterplotter-public-product-readiness-checkpoint-2026-10-04.md#human-decision-persistence-and-recovery-promise--2026-10-05).

## Human-adopted Dimension Assessment Candidate 0.1.0 - 2026-10-05

Human selected a portable Candidate Extension based on the comparison
responsibility explored in ParameterPlotter. The Candidate authority is
[Dimension Assessment Extension Candidate](../../extensions/dimension-assessment-extension-candidate.md),
identifier `draft.github.sukoyaka-dopeness.dimension-assessment`, display
name **Dimension Assessment Extension**, version `0.1.0`. It carries
Dataset-level Dimension definitions and at most one explicitly authored
numeric Assessment per Entity-by-Dimension pair. Dimensions have inclusive hard
bounds; integer-only Dimensions require at least one valid integer in range.
Absence of an Assessment means unassessed, while zero is an ordinary numeric
value. Unit is free text without conversion semantics; endpoint labels are
optional as a pair.

This Candidate does not define a general Observation or measurement model,
provenance, time series, arbitrary numeric Entity properties, or application
presentation. Normalized values, Radar vertices, Quadrant positions, rank,
selection, and view state are Derived/application state, not Recorded
Extension data. ParameterPlotter's Human-decided Rescale operation remains an
application authoring choice rather than a normative Extension mutation
algorithm.

The Candidate is Human-adopted but not Stable. Bounded production Validator
support and ParameterPlotter application integration have received functional
Human Acceptance for the tested local working tree; the detailed result is in
the [successor Human Acceptance record](../../../e2r-parameter-plotter/docs/successor-human-acceptance-2026-10-06.md).
The accepted source is fixed at local commit
`b9a8e1fee6499c191c66033296e98965d777684e`; the acceptance documentation is
fixed at local ParameterPlotter commit
`be8a08dcdc5ff18c63ca4951e89b0a7178db0caf`. Current verified local source
`111be04898f354efe92856dfdd355ca89845fa59` includes post-acceptance endpoint-label, workspace action hierarchy, and View
control accessibility corrections; it does not replace the accepted source
baseline. A Codex real-browser review at 390px passed for Profile, Radar
(including spoke additions), Quadrant (including axis selection), and Matrix;
the new More disclosure was reviewed at desktop size only. This is follow-up
evidence, not a new Human acceptance. The Product/UI audit document is commit `e6733aad51cd083e54329a6d59a9de5f364186d3`; latest local successor readiness
documentation is commit `7280f1fd77d2e1df24e247e680314b3d3c4d2f97`.
Browser-storage write-failure injection remains NOT RUN. The source and docs
remain unpublished. The 2026-10-07 Product/UI audit records the approved More
action hierarchy and the remaining Home/startup, EN/JA terminology, sample,
Footer/Credits/identity, and Dataset-title authoring gates; see the [audit](../../../e2r-parameter-plotter/docs/product-ui-completion-audit-2026-10-07.md).
This does not register the Candidate as Stable or approve release or deployment.
The earlier [implementation result](parameterplotter-successor-first-bounded-implementation-result-2026-10-05.md)
remains the implementation evidence checkpoint.
Prototype 2 remains HUMAN-ACCEPTED / CLOSED at 19 Human PASS / 0 PENDING /
B3 NOT RUN. Candidate B first-slice acceptance remains its historical
session-only boundary. Cross-consumer interoperability testing and Stable
promotion remain separate work.

The following earlier sections retain their dated pre-Prototype and
decision-preparation context. Their implementation authorization/status was
true at those checkpoints and is not the current status. Human has since
authorized bounded successor implementation; remaining Product choices are
tracked in the linked readiness checkpoint. Production
architecture/framework, formal product name, release identity, and
Radar's permanent 8-versus-10 policy remain undecided or deferred.

## Historical Human-selected research direction — 2026-10-01

**ParameterPlotter** is the leading working name for this future
multi-visualization application; it is not a finalized product name. The
concept is an application with a distinct view of an E2R Dataset from a
Timeline or relationship graph, principally placing and comparing Entities
across multiple parameter or semantic dimensions. The initial visualization
forms under consideration are quadrant/four-quadrant and radar. 3D
visualization remains future scope and is not required for an initial
prototype.

The first prototype direction is application-local and exploratory, using the
Dataset read-only. Temporary parameters, view toggles, and generated profiles
may be used to test the task and presentation without claiming portable Dataset
semantics. Do not begin by adopting Core changes, an Extension, a schema,
portable parameter contracts, or Dataset semantic write-back. Whether a
portable parameter/dimension model is needed must be decided from prototype
evidence.

The application may later become an early consumer of reusable Semantic,
Dictionary, or external-vocabulary capabilities. Vocabulary lookup/resolution,
localized labels, stable Concept identity, caching/reuse, axis selection,
Entity parameter input, and quadrant/radar rendering form a possible research
path. A lazy resolution direction—semantic ID, local cache/pool, fetch when
needed, then cache for reuse—may be evaluated. This does not make ordinary
Dataset use or validation network-dependent, and failed retrieval must not
erase Dataset-local fallback labels. Source/provenance, retrieved revision or
version, language, licensing, and offline failure behavior require separate
decisions before external vocabulary adoption. A parameter-dimension
vocabulary and a typed Relation-predicate vocabulary may share infrastructure;
their meaning and responsibility are not presumed identical.

For initial vocabulary experiments, a human-selected polar pair such as
`好き ↔ 嫌い` may be explored. Lexical antonymy alone does not establish a
mathematical axis. Keep logical negation, polar antonymy, contrastive
counterpart, and merely related concepts distinct; the Human must select and
adopt a concept pair as an axis. More relational or contextual parameters
remain future research.

The local Prototype described as future work in this 2026-10-01 planning
snapshot has since been completed as Prototype 1 (see the current handoff at
the top of this document). The Product and any production implementation
remain future work, not active implementation. This direction does not change
current Hub publication or Cross-App release priorities. The relative order
of product/production work and the Semantic/Dictionary/vocabulary foundation
returns to Human judgment when supported by evidence. Repository ownership;
production start; framework or visualization-library choice; portable
representation or numeric normalization; Extension/schema; external provider
or licensing policy; 3D technology; and release name, version, or date remain
intentionally undecided. No runtime, Dataset, schema, Validator, application
repository, or public artifact is changed by this Research direction.

## Local Prototype observation: Enter-to-commit — 2026-10-01

Human use of the local ParameterPlotter Prototype repeatedly surfaced a desire
to press Enter immediately after editing a single-line text or numeric value
whose commit target is clear. The Prototype is testing Enter-to-commit for
Profile/Matrix numeric values and native single-line creation/edit forms for
temporary Dimensions and Entities. Search/filter fields are excluded; Enter in
multiline fields retains its newline meaning, and native select behavior is
unchanged. This is application-local interaction evidence, not an accepted
E2R-wide convention. After further Human use, audit relevant single-line edit
surfaces in NarrativeLine and LiaisonScape and return any shared convention to
Human decision. It conveys no portable data or Dataset write-back semantics.

## Product responsibility hypothesis before Prototype evidence (historical)

A possible product task is to **compare a selected set of E2R objects against
explicit, named dimensions and inspect how the same observations appear in
different projections**. A quadrant view can compare two compatible
dimensions; a radar view can compare several. This is coherent as one product
only if the views share object identity, dimension definitions, values, missing
data policy, and provenance. A bundle of unrelated charts would not establish
that responsibility. NarrativeLine explains Event chronology; LiaisonScape
explains connections. Neither currently owns dimension-based assessment.

The pre-Prototype proposal was to start with a read-only comparison probe on
explicitly supplied data. Authoring portable scores first would prematurely
fix who owns the meaning, units, evidence, and revision policy. Prototype 1
has since supplied this application-local evidence while keeping temporary
observations separate from the Dataset; see the current checkpoint above.

## Current evidence and ownership

| Source | Current responsibility | Consequence for this research |
| --- | --- | --- |
| [Core](../../spec/core.md) | Entity existence, Event occurrence, directed Relation, identity and optional human text | None defines a score, dimension, or population to compare. A Relation's direction does not supply a numeric value. |
| [Metadata 1.0.0](../../extensions/metadata-extension.md), [History](../../extensions/history-extension.md), [Relative Time](../../extensions/relative-time-0.2.0-draft.md) | Dataset description, temporal record, temporal relations | Dates, duration, and Candidate dates cannot silently become generic chart scores. |
| [Perspective 0.1.0](../../extensions/perspective-extension-candidate.md) | Human-authored sparse non-temporal **Event display order** | The ordinary word “perspective” does not make this Candidate an owner of analytical axes or values. Future expansion would be a separate semantic decision. |
| [Coordinate Draft](../../extensions/coordinate-extension-draft.md) | Numeric Entity/Event positions in Dataset-defined Spaces and Components | Its reusable values could possibly express a domain-specific measured space after a deliberate interpretation decision. Graph X/Y or quadrant pixels do not automatically become assessments; the current draft does not define scoring, normalization, evidence, or repeated observations. |
| [Layout concept](../../extensions/layout-extension.md), [Presentation Draft](../../extensions/presentation-extension-draft.md) | Visual arrangement concepts; LiaisonScape Relation styling | Neither owns the assessed semantic values. A quadrant layout example is a display sketch, not a numeric value contract. Radar polygon geometry is Derived. |
| [Semantic vocabulary research](semantic-vocabulary-architecture.md), [Suite research](e2r-suite-long-term-milestone.md) | Possible axis words and a multidimensional-analysis product direction | Starting hypotheses, not accepted identifiers, units, or data shape. |

The [Roadmap](../../docs/roadmap.md) calls for quadrant/radar exploration but
does not adopt their data model. Existing application-design principles keep
Core data, application views, and editing logic separate. A new interoperable
assessment model, if eventually justified, belongs in an explicitly reviewed
responsibility outside Core; it cannot be smuggled into Perspective,
Presentation, History, or Relative Time because a chart happens to need it.

## What is compared?

| Candidate | Natural use | Limitation / decision |
| --- | --- | --- |
| Entity | Compare durable things, people, resources, or organizations | Strong default for an initial comparison task, but not every Entity admits the same dimensions. |
| Event | Compare occurrences or plans | Plausible for event evaluation; must not turn dates or NarrativeLine display order into generic scores. |
| Relation | Compare connections/assertions | Could be useful for quality or strength of a relationship, but current Core Relations have no standard measure and may be independent assertions. |
| Dataset aggregate | Compare entire projects or networks | Requires explicit aggregation population and algorithm; one Dataset alone is insufficient. |
| User-selected mixed set | Flexible exploration | Entity/Event differences and missing values need a visible comparison contract; not a safe implicit default. |

An initial **Entity-only, user-selected set** is a bounded hypothesis, not an
adopted product decision. Object type and eligible population must be chosen
before UI or schema design. Keep canonical Core IDs as identity; visual labels
and order are presentation.

## Dimension and value contract to decide

Quadrant and Radar could project the same observations, but only after the
following meaning is settled independently of geometry:

- Stable dimension identity versus translated label and vocabulary source.
- A numeric value's author, measured/assessed subject, Dimension-specific
  MIN/MAX or other arbitrary numeric range, unit, precision,
  directionality (what “higher” means), and whether zero is meaningful.
- Scale comparability and normalization. Radar especially can mislead when
  dimensions have unlike ranges; normalization is a Derived transformation,
  not a silent mutation of Recorded values.
- Missing, unknown, inapplicable, and unassessed values; none should be
  fabricated as zero. Partial polygons and absent quadrant points need policy.
- Multiple observations across time, assessors, or evidence sources;
  selection/aggregation must be explicit rather than a hidden winner.
- The formal boundary between Recorded observations and Derived presentation
  values, including any normalization contract.
- The comparison set and which axes appear: temporary application selection
  first, with portable user-authored configuration only if interoperability
  justifies a later separate contract.

If two dimensions' values share this contract, a quadrant point is Derived
from their numeric pair. A Radar spoke is the same dimension value after an
explicit scale transformation. If the chart needs categorical quadrant labels
or an entirely different relationship metric, it is a separate feature and
may not share a single underlying observation model.

### Portable data versus view state

An interoperable Dataset would need explicitly authored observations and
dimension definitions only after a new responsibility/version decision.
Derived projections include normalized values, points, radar vertices,
quadrant labels, sorting, and warning badges. Hover, selected objects, zoom,
active chart, and temporary axis choice are application session/view state.
A saved dashboard or shared comparison configuration is a possible later
portable presentation responsibility, distinct from the observations it
references. No X/Y pixel, polygon vertex, rank, or temporary selection is
recorded merely because a user opens a chart.

## Cedar Observatory as a probe

The new [NarrativeLine showcase candidate](../../../e2r-narrative-line/docs/cedar-observatory-showcase-release-candidate.md)
has seven Events, six Entities, meaningful Entity-to-Entity and Event-to-Entity
connections, three Recorded History dates, qualitative Relative Time, and
direct Calendar/elapsed date Candidates. It can support a Timeline and an
Entity relationship graph from the same Dataset without added semantic fields.
It has **no** dimension definitions, scores, ranges, units, or observations.
The current LiaisonScape Entity graph consumes its six Entity nodes and six
Entity-to-Entity edges, but LiaisonScape's Validator 0.6.0 warns about the
Relative Time 0.2.0 declaration that NarrativeLine's Validator 0.7.0 supports.
This is a consumer-version boundary, not a chart value or a reason to invent
one. The graph also omits Event-related Relations by its existing projection.
For example, assigning “visitor impact” and “preparation effort” values to
the club or telescope would be new Human-authored assessments, not a derivation
from their names, graph degree, or dates. A quadrant or Radar chart of this
Dataset alone would therefore be visually possible only with fabricated or
application-local demonstration values, not a faithful E2R Dataset projection.
The sample stays a NarrativeLine story and is not distorted to solve that gap.

## Pre-Prototype Human design gate (historical planning record)

The questions and smallest-experiment outline below record the gate that
preceded Prototype authorization. Prototype 1 has since been completed and
Human-accepted as interaction evidence; see the current handoff at the top of
this document. The former MVP proposal is historical. The next step recorded
at that checkpoint was the separate Product responsibility review, not
another Prototype UI pass. Human has since approved that responsibility and
closed the bounded application-local Prototype 2 scope. The next Product
milestone remains unselected; its decision-preparation packet is recorded in
the current planning handoff below.

Before implementation, Human should decide:

1. Is the product one **dimension-based comparison workspace** with quadrant
   and Radar as projections of shared observations, or are they separate
   products/features with different data responsibilities?
2. Which subject and user task comes first (Entity comparison is the bounded
   starting hypothesis), and who supplies/owns dimension definitions and
   values?
3. Is a read-only, application-local prototype acceptable to test meaning and
   comprehension before any portable authoring? What explicit example data
   may it use without claiming those values exist in Cedar Observatory?
4. If portability is later required, which observation identity, scale,
   missing/multiple-value, provenance, and configuration rules justify a new
   Extension or a deliberate Coordinate/Perspective revision? This cannot be
   selected from current authority alone.

The minimal research MVP proposed at that time would load an unchanged
Dataset, select a small set of Entities, attach **clearly separate temporary
comparison observations** in the prototype, and toggle two-axis and
multi-axis projections with visible missing-value and scale handling. It was
to be read-only, have no Dataset write-back, no schema/Validator changes, and
no new app repository until the Human selected a Product boundary. The planned
next checkpoint was a design decision separate from NarrativeLine release
approval. Human later approved the Product responsibility, completed and
closed the bounded application-local Prototype 2, and selected Candidate B for
the first Product slice. See the current planning handoff below.

## Current Product milestone and source-boundary handoff — 2026-10-04

Human selected Candidate B: a bounded, single-user app-local first slice with
a read-only imported Dataset, temporary comparison data, and no durability or
recovery guarantee beyond the browser session. Possible session-end loss must
be disclosed. ParameterPlotter remains a working name. Its dedicated
production source has been published on GitHub; this publication does not
select a formal product name, release identity, portable model, or deployment.
See the [decision-preparation packet](parameterplotter-product-milestone-decision-preparation-2026-10-04.md)
for the source boundary and deferred decisions.
