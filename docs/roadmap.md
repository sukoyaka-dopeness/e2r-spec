# E2R Medium- and Long-term Roadmap

Date: 2026-08-17

Status: Current planning document; non-normative

## Purpose

### Workspace placement migration — COMPLETED — 2026-09-21

Placement is closed at `8 directories / 7 Git repositories / 0 noncanonical root workspaces`.
Seven canonical repositories remain direct children of `C:\Users\extra\E2R`; experimental and diagnostic workspaces, including the preserved receive-lifetime workspace, remain under `workspace/`.
Current status is in the [status index](#current-status-index-2026-09-22); chronology and preservation evidence remain in the [legacy chronology](roadmap-history/legacy-chronology.md), workspace artifacts, and Git history.
Future evidence disposition, provenance, archiving, and cleanup remain separate; placement closure does not authorize them.

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

## Current status index — 2026-09-22

This short section is the entry point for current status. Detailed checkpoint
records and retained planning entries remain below for evidence and chronology;
they do not override this index merely because they contain stronger-looking
words such as `NEXT`, `OPEN`, `BLOCKED`, or `UNSTARTED`. The completed
workspace-migration chronology is preserved in the [roadmap history
index](roadmap-history/README.md); its dated status language is historical.

| Workstream | Current status | Authority / next decision |
| --- | --- | --- |
| Documentation Hub / roadmap hygiene / new-document path policy | **IMPLEMENTED** | `docs/README.md`, `docs/documentation-plan.md`, and this section; existing paths remain stable; [bounded baseline milestone outline consolidation](documentation-ia/roadmap-baseline-milestone-outline-consolidation1-result.md); [exploratory Suite heading consolidation](documentation-ia/roadmap-exploratory-suite-heading-consolidation1-result.md) |
| Roadmap chronology / planning-history compression | **BOUNDED EXTRACTIONS AND COMPRESSIONS RECORDED** | [history index](roadmap-history/README.md); [Roadmap slimming results](documentation-ia/roadmap-slimming-migration1-result.md), [tranche 2](documentation-ia/roadmap-slimming-migration2-result.md), and [Relative Time / Documentation IA snapshot compression](documentation-ia/roadmap-relative-time-and-documentation-ia-snapshot-compression1-result.md); detailed history-migration results remain linked from their entries; this roadmap remains the sole current-planning authority |
| Roadmap → Research responsibility | **FIRST BOUNDED COMPRESSION COMPLETE / OTHER CANDIDATES REMAIN** | [audit result](documentation-ia/roadmap-research-responsibility-audit1-result.md); [migration 1 result](documentation-ia/roadmap-research-responsibility-migration1-result.md); current planning and Research priorities unchanged; other candidates require separate Human-reviewed manifests |
| Residual Roadmap responsibility audit | **AUDIT 3 COMPLETE / E2R-WIDE MILESTONES CANONICAL; HUB-SPECIFIC SUPPLEMENT RECORDED** | [Human decision](documentation-ia/documentation-ia-e2r-wide-milestone-authority-decision1.md); [decision preparation](documentation-ia/documentation-ia-hub-vs-e2r-wide-milestone-authority-decision-preparation1.md); [fresh whole-roadmap audit 3](documentation-ia/roadmap-residual-responsibility-audit3.md); [audit 2](documentation-ia/roadmap-residual-responsibility-audit2.md); [audit 1](documentation-ia/roadmap-residual-responsibility-audit1.md); [Initial Placement / routing compression result](documentation-ia/roadmap-initial-placement-routing-pointer-compression1-result.md); [pre-release chronology migration result](documentation-ia/roadmap-pre-release-chronology-migration1-result.md); [mixed-area responsibility audit](documentation-ia/roadmap-mixed-seed-readiness-browser-responsibility-audit1.md); [Seed research pointer compression result](documentation-ia/roadmap-seed-research-pointer-compression1-result.md); [Seed PR-2 lineage compression result](documentation-ia/roadmap-seed-production-pr2-lineage-pointer-compression1-result.md); [Seed PR-3 pre-Browser preparation compression result](documentation-ia/roadmap-seed-pr3-pre-browser-preparation-pointer-compression1-result.md); [Seed PR-3 Browser lineage compression result](documentation-ia/roadmap-seed-pr3-browser-runtime-diagnostic-pointer-compression1-result.md); [Seed PR-3 Browser history migration result](documentation-ia/roadmap-seed-pr3-browser-history-migration1-result.md); [this PR-3 pre-Browser history migration](documentation-ia/roadmap-seed-pr3-prebrowser-history-migration1-result.md); other mixed groups remain unchanged; current execution order is unchanged |
| NarrativeLine NL-H2-R1 | **ACCEPTED / MANUAL ACCEPTANCE COMPLETE** | [accepted application result](https://github.com/sukoyaka-dopeness/e2r-narrative-line/blob/main/docs/nl-h2-r1-history-2-candidate-recognition-and-edit-refusal-result.md) |
| NarrativeLine H2 `circa` regression candidate | **ACCEPTED / HUMAN VISUAL ACCEPTANCE COMPLETE — BOUNDED REPAIR** | NarrativeLine `02592a0` preserves existing date/time data and `3efa637` places the marker on the most specific visible Timeline row; JA date+time acceptance is `1989-11-09` / `18時53分頃`; History 2.0.0 remains Candidate |
| History 2 broader authoring scope | **DEFERRED / BOUNDED H2-POSITION-CIRCA CLOSED; FUTURE SCOPE DECISION ONLY IF REOPENED** | [scope result](./temporal/history-2-user-facing-authoring-scope-result.md); [bounded scope closure](./temporal/history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md); broader shapes and Relative Time authoring remain outside the current scope |
| H2-POSITION-CIRCA | **ACCEPTED / CLOSED — BOUNDED AUTHORING SCOPE** | [scope closure](./temporal/history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md); [NarrativeLine acceptance result](https://github.com/sukoyaka-dopeness/e2r-narrative-line/blob/main/docs/h2-position-circa-bounded-authoring-implementation-result.md); History 2.0.0 remains Candidate |
| History 2 bounded Stable registration | **IMPLEMENTED / PROFILE REGISTERED / VALIDATOR GREEN / PUBLIC SAMPLE RELEASE COMPLETE** | [implementation result](./temporal/history-2-position-circa-stable-profile-implementation-result.md); [sample migration result](./public-samples/public-sample-h2-migration-and-self-description-current-state-refresh-result.md); `history@2.0.0` remains Candidate while `history@2.0.0 / position-circa` is the adopted Stable profile; broader H2 surfaces remain deferred |
| Dataset-wide History 1 to History 2 upgrade | **IMPLEMENTED / AUTOMATED GREEN / BOUNDED REAL-BROWSER AND HUMAN ACCEPTANCE COMPLETE** | [NarrativeLine implementation result](https://github.com/sukoyaka-dopeness/e2r-narrative-line/blob/main/docs/history-2-dataset-wide-upgrade-implementation-result.md); [scope closure](./temporal/history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md) |
| Cross-App control density / Visual Style / Flatness | **BOUNDED CORRECTIONS ACCEPTED / BROADER STYLE FOLLOW-UP AUDIT OR DESIGN ONLY** | LiaisonScape `589e3bd` and NarrativeLine `e4c2dcb`, `df69e8e`, `8495724` cover the accepted More/ordinary/detail geometry corrections. A broader Hub-reference visual-language experiment remains a separate Human-selected design question; it does not authorize a blanket CSS rewrite. |
| LiaisonScape viewport toolbar | **ACCEPTED / HUMAN VISUAL AND INTERACTION ACCEPTANCE COMPLETE** | LiaisonScape `8743fb0` records compact canvas-utility geometry and pointer-versus-keyboard focus/tooltip treatment while retaining drag, disclosure, zoom, reset, 720px, and keyboard behavior |
| NarrativeLine Detail controls | **ACCEPTED / BOUNDED GEOMETRY CORRECTIONS COMPLETE** | NarrativeLine `df69e8e` and `8495724` cover destructive/detail action geometry, Timeline Edit, and Entity Detail form width; further Picker/Create or visual-style work requires a separate current-evidence audit |
| NarrativeLine pre-public feature candidates | **SAMPLE ROLE / PROVENANCE DECISIONS RECORDED / PUBLIC ACCESS RELEASED** | [provenance authority and access result](./cross-app/e2r-initial-public-release-provenance-authority-cross-app-access-implementation1-result.md), [sample role decision preparation](./public-samples/e2r-public-sample-role-decision-preparation1-result.md), and [content/provenance audit](./public-samples/e2r-initial-public-release-content-sample-provenance-refresh-audit1-result.md); five ordinary Gallery families and separate Self-Description dogfood access are public; factual-source caveats remain provenance boundaries |
| Recent application identity and shell corrections | **IMPLEMENTED / ACCEPTANCE STATUS SPLIT** | Timeline `↑/↓`, Timeline Footer, Detail bottom action/AppFrame continuity, Dataset title hierarchy/direct editing, product-name-only document titles, and title input chrome/terminology have implementation evidence but are not wholesale `ACCEPTED / CLOSED` without explicit visual acceptance. The common SVG favicon has Human browser-tab/narrow confirmation |
| Cross-App Locale recipient preference | **CROSS-APP CLOSURE NOT ESTABLISHED / NOT AN INITIAL-RELEASE GATE** | NarrativeLine's [consumer acceptance](narrativeline/narrativeline-locale-consumer-acceptance.md) explicitly says the overall workstream is not complete; LiaisonScape's i18n MVP and Hub's [bilingual landing acceptance](hub/e2r-hub-public-entry-point-milestone-2-acceptance.md) are bounded component evidence, not closure of the shared startup-locale contract. No current priority is selected by this status sync. Hub direct Handoff remains a separate deferred capability under the Hub acceptance |
| E2R workspace clone and evidence hygiene | **COMPLETED / ROOT PLACEMENT CLOSED (8 / 7 / 0)** | [workspace placement migration summary](#workspace-placement-migration--completed--2026-09-21); detailed evidence remains in workspace artifacts and Git history; future evidence disposition is separate work |
| Initial Public Release | **FORMALLY CLOSED / PUBLIC AUTHORITIES VERIFIED / ACCEPTED BOUNDARIES PRESERVED** | [final closure audit](./release-governance/e2r-initial-public-release-closure-audit-result.md); five ordinary Gallery samples, separate Self-Description dogfood access, Hub/NarrativeLine/LiaisonScape provenance links, Validator `0.6.1`, and the accepted rights/provenance boundary are public and verified; deferred History 2, Lineage, visual-quality, and future product work remain separate follow-ups |

The current runtime order recorded by this index no longer treats the H2
`circa`, viewport-toolbar, or bounded Detail/control-geometry corrections as
open next items. The accepted Initial Public Release transaction is complete:
the public authorities, sample access, provenance boundary, and Validator
package hygiene are recorded in the final closure audit. Factual-source
caveats remain provenance boundaries rather than reopened rights gates.
Future visual, Lineage, deferred-History-2, and product-quality work remains
separate follow-up and does not reopen this closure or promote deferred
History 2 authoring.

The detailed 2026-09-23 LiaisonScape / NarrativeLine observation and
audit-time evidence progression is preserved in the existing [Release and
Cross-App Roadmap History](roadmap-history/release-and-cross-app-chronology.md#post-release-liaisonscape-narrativeline-observation-audit-2026-09-23)
and its [migration result](documentation-ia/roadmap-post-release-cross-app-observation-history-migration1-result.md).
Current dispositions and operative follow-ups remain in the status index and
current session inventory; this historical record does not change them.

### How to maintain current and historical entries

- Add a short current-status entry to this roadmap only when it changes the
  current priority, state, dependency, or required human decision.
- Link the detailed result, acceptance, audit, or reconciliation document
  instead of duplicating its evidence in the roadmap.
- Preserve older entries as chronology. When an old status could be mistaken
  for current, add a brief historical/superseded label or a link to the later
  current entry; do not rewrite the historical record wholesale.
- Keep this roadmap as the sole current-planning authority. Transferred
  chronology is indexed in [Roadmap History](roadmap-history/README.md) and is
  historical evidence, not a second status source.
- Keep normative requirements in `spec/`, `extensions/`, `schemas/`, and
  canonical `examples/`. This roadmap is non-normative planning authority.

### Historical workspace clone and evidence hygiene baseline — 2026-09-19

The completed workspace-placement, relocation, extraction, acceptance, and

cleanup chronology from this historical baseline through Visual capture1–6 is

preserved verbatim in the [legacy chronology](roadmap-history/legacy-chronology.md).

The current root-placement status remains summarized in the status index above.

## Current baseline

Current-state reconciliation (2026-09-24): e2r-spec S3 repository-level
standards/data licensing application and public-sample provenance formalization
are **COMPLETE**; see the [S3 result](./public-samples/public-sample-provenance-formalization-result.md)
and [provenance authority](./public-sample-provenance.md). The Initial Public
Release is **FORMALLY CLOSED** per the [closure audit](./release-governance/e2r-initial-public-release-closure-audit-result.md).
The dated baseline and release-planning statements below that describe S3,
publication, or release-readiness as pending are historical snapshots, not
current blockers. This does not claim completion of formal legal review or
software-repository licensing outside e2r-spec, nor authorize any future public
write.

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

`e2r-spec` is excluded from that software-license direction. Its separate
standards/document role-based licensing policy was decided and applied under
S3; see the [S3 result](./public-samples/public-sample-provenance-formalization-result.md).

### Standards licensing policy decision — 2026-08-25

S2 accepted the role-based policy in
`research/standards-licensing/decisions/e2r-standards-license-decision.md`:
CC BY 4.0 for project-authored specification/documentation prose, MIT for
standalone schema/code-like specification artifacts, and CC0 1.0 for eligible
project-created example, research fixture, and machine-readable dogfood data.
The existing MIT direction for E2R software repositories is reaffirmed. This
is a policy decision, not license-file or package-metadata implementation.

At this dated planning point, S3 remained required for the formal repository
license application and provenance audit, and Hub publication of the
Self-Description Dataset remained blocked. The e2r-spec S3 result and later
Initial Public Release closure linked above supersede that pending status;
they do not settle formal legal review or licensing in other software
repositories.

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
The architecture agendas consolidated Coordinate, Layout, Perspective,
Presentation, and Application View State responsibilities; distinguished Owned
from Derived data; and kept visualizations distinct from persisted Dataset
data. Current normative and research authority remains in the Core, Extensions,
and dedicated research documents.

### Agenda 1--9 reflection status
Repository-level reflection of Agendas 1-9 is substantially complete.
Remaining work is evidence-dependent candidate follow-through and separate
Extension maturity decisions; no completion percentage is used as a proxy for
implementation or Stable readiness. Current priorities and gates are listed
under `## Research priority` and `## Evidence gates for candidate Extensions`.

### Application and tooling evidence
Names P1 and its Validator release are closed at their recorded boundary; no
application writer, migration, repair, or Core `name` synchronization is
authorized ([closure handoff](../research/names/p1/current/names-workstream-closure-handoff.md)).
Coordinate remains a frozen Prototype plus a separate non-Stable Draft
candidate with read-only Validator support; application writing and migration
remain unauthorized by that evidence ([maturity decision](../research/coordinate/decisions/coordinate-maturity-and-identifier-decision.md),
[Draft review](../research/coordinate/decisions/coordinate-draft-0.1.0-review.md)).

### Dataset Replacement Safety implementation checkpoint — 2026-08-20
LiaisonScape D1-D7 and Dataset Handoff v0 are implemented and manually
accepted within their recorded scope. See the [design](cross-app/dataset-replacement-safety-design.md)
and [implementation result](liaisonscape/dataset-replacement-safety-liaison-scape-implementation-result.md);
cross-application parity remains separate.

### NarrativeLine Focus Phase 2 closure — 2026-08-23
Focus Phase 2 is closed for its bounded NarrativeLine scope; safe Enter/form
semantics and Timeline title autofocus remain deferred, and this closure does
not authorize changes in other screens or applications. See the [Session 0047
closure record](../sessions/E2R-Session-0047.md) and runtime checkpoint
`1d6d609`.
### Completed baseline milestones 1–5

These completed design, implementation, and evidence milestones are retained
as a compact baseline inventory; their detailed authorities remain the source
for their respective contracts and evidence.

1. **Specification Extension redesign — COMPLETE; Draft `0.1.0`, not Stable.**
   The [draft](../extensions/specification-extension.md) defines the contract
   and deferred work. No Stable registration, migration, or Core change is
   authorized.
2. **Validator interoperability model — IMPLEMENTED / ACCEPTED at its
   recorded read-only boundary.** See the
   [acceptance](validator/production-validator-extension-integration-acceptance.md) and
   [result](validator/production-validator-extension-integration-result.md). This does
   not promote the Specification Extension Draft or authorize network
   retrieval, migration, or application writers.
3. **Coordinate Prototype `0.1.0` — FROZEN experimental compatibility /
   migration baseline, not Stable.** See the
   [interoperability result](cross-app/foreign-graph-coordinate-interop-experiment-result.md).
4. **Coordinate Draft `0.1.0` — Draft candidate, not Stable.** See its
   [definition](../extensions/coordinate-extension-draft.md) and
   [bounded review](../research/coordinate/decisions/coordinate-draft-0.1.0-review.md).
5. **Read-only Validator support for Coordinate — IMPLEMENTED.** Recognition
   of Draft and Prototype identities authorizes neither application writing
   nor migration; see the
   [maturity decision](../research/coordinate/decisions/coordinate-maturity-and-identifier-decision.md)
   and [Draft review](../research/coordinate/decisions/coordinate-draft-0.1.0-review.md).

## Application evidence track

This track may prepare fixtures and experiments while the Specification
Extension is designed, but it must not pre-empt its schema decisions.

### Layout persistence experiment

The responsibility and persistence boundary checkpoint is documented in
`docs/layout-persistence-responsibility-decision.md`. It records the current
non-normative design direction without selecting an identifier, schema, or
implementation.

The Automatic Layout experiment order and interoperability evidence ladder are
documented in `docs/liaisonscape/automatic-layout-experiment-plan.md`. This remains an
experiment plan and does not establish a Layout identifier, schema, algorithm,
or maturity model.

The early Automatic Layout Experiment 1 progression, from Label Stability
through 1L Relation-label Drag-Follow Responsiveness, is preserved as
historical evidence in the [LiaisonScape Layout and Auto Layout
chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#early-automatic-layout-experiment-1-progression-2026-08-18).
Its dated results and then-proposed next experiments are historical snapshots,
not current execution instructions; detailed evidence remains in the dedicated
experiment result and audit documents. This migration adopts no experimental
parameter or behavior.

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
The tested NarrativeLine to Validator to LiaisonScape round trip preserves
Core IDs, unknown/unsupported data, and shared Coordinate values. The
reproducible repository-local gate remains
`npm run validate:coordinate-interoperability`; broader application behavior
remains governed by its dedicated evidence.

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

**EXPLORATORY / NOT ACTIVE.** The [dedicated research](../research/exploratory/e2r-multidimensional-history-temporal-perspectives.md)
preserves current `temporalOrder`, separates temporal semantics from visual
projection, and leaves any common payload/model and Temporal Frame
representation unselected. No schema, application, or implementation change
is authorized; active Initial Placement priority is unchanged.

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
Placement priority remains unchanged. The 2026-09-18 addendum further records
that a future Relation carrier must preserve Relation identity, endpoints,
lifecycle, and provenance, while derived placement is not an adopted fact.
Common-origin frame coordinates remain separate from these pairwise
constraints.

The [minimum temporal-precedence Research result](../research/exploratory/e2r-relative-time-minimum-temporal-precedence-research1.md)
and [Temporal Research Human Decision Preparation](./temporal/temporal-research-human-decision-preparation1.md)
are historical preparation evidence. Their pre-adoption statements that
Relative Time semantics awaited Human disposition are superseded by the
[atomic Recorded semantics adoption](./temporal/relative-time-atomic-recorded-assertion-semantics-adoption1.md).
That adoption is limited to the atomic Recorded contract: it does not amend
Draft/schema support or adopt machine evaluation, Derived rules, Validator, or
application behavior. Causal-order research remains exploratory and separate;
the active Initial Placement priority is unchanged.

The [History 2 deferred-shapes Research](../research/exploratory/e2r-history2-deferred-shapes-authoring-scope-research1.md)
keeps `bounded-point`, `temporal-extent`, and multiple-assertion authoring
deferred. The [History 2.x / Relative Time Cross-Audit](../research/history-vnext/decisions/history-2x-relative-time-cross-audit1.md),
candidate Drafts, schemas, and bounded Validator results remain their detailed
candidate-design and implementation evidence; they do not expand the adopted
atomic meanings. History `2.0.0` and Relative Time `0.1.0` remain non-Stable
candidates. Cross-Audit Derived-law candidates, advanced solver policy,
application writing/migration/UI, and broader History 2 authoring remain
separate open or deferred boundaries; no priority or execution order changes.

### Human-selected future interval-semantics and Timeline direction (2026-09-23)

The atomic Recorded meanings and their adopted limits are governed by the
[Human adoption record](./temporal/relative-time-atomic-recorded-assertion-semantics-adoption1.md);
this earlier interval-semantics snapshot is not a second semantic authority.
The separate Timeline presentation direction remains: where semantic evidence
does not determine an Event's position, explicit user placement may be
considered without creating a semantic Relation or persisted placement
contract. No Timeline implementation is authorized here.

### Current Relative Time extensible-vocabulary direction (2026-09-24)

> Historical current-state snapshot: this entry records the selected
> extensible-vocabulary direction before the later adoption of atomic
> Recorded assertion semantics. Its statements that semantics were not yet
> adopted and that broader semantic-contract research was the next checkpoint
> describe that earlier state; see the current adoption status below.

The broader Human-selected extensibility direction remains recorded in the
[direction decision](./temporal/relative-time-extensible-temporal-assertion-direction1.md).
Its pre-adoption status and sequencing language are historical; the
[atomic adoption record](./temporal/relative-time-atomic-recorded-assertion-semantics-adoption1.md)
is the normative authority for the adopted layer and explicitly preserves the
Draft/schema, versioning, Derived, and implementation boundaries. Future
vocabulary or scheduling expansion remains separate work, not implied by this
adoption.

### Human-selected next-workstream sequence — Relative Time then Documentation IA (2026-09-24)

> Historical sequencing snapshot: this plan was recorded before the Human
> The readiness review, Human adoption disposition, and minimum state sync
> recorded in this sequence are complete. The sequence remains historical
> evidence; current Relative Time authority is in the adoption record and the
> current IA direction/migration status appears below.

#### Historical Human-selected Documentation IA review direction (2026-09-24)

> Historical preparation-stage direction: the Human structure decision below
> supersedes this section's statement that chronology separation is only a
> candidate for the next decision. The evidence and prior-audit history here
> remain unchanged.

The detailed evidence, alternatives, and prior-audit comparison remain in the
[decision-preparation record](documentation-ia/documentation-ia-roadmap-physical-modularization-decision-preparation1.md).
The later [Roadmap-first structure decision](documentation-ia/documentation-ia-roadmap-physical-modularization-direction-decision1.md)
supersedes this preparation snapshot; its chronology-only scope and separate
deferral of wider `docs/` taxonomy are summarized in the current direction
below.

#### Current Human-selected Roadmap-first structure direction (2026-09-24)

The Human-selected [Roadmap-first structure direction](documentation-ia/documentation-ia-roadmap-physical-modularization-direction-decision1.md)
keeps this file as the sole current-planning entry point and separates completed
and historical chronology into a few broad evidence units; detailed checkpoint
authority stays in dedicated documents, not duplicate Roadmap prose. The
bounded chronology structure and migration are recorded in the linked decision
and result below. Wider `docs/` taxonomy and relocation remain deferred; issue-
per-file modularization is not the default.

#### Historical snapshot — Roadmap-first migration-preparation status (2026-09-24)

> This records the pre-migration gate state. The current migration result
> below supersedes its statements that destination, manifest, and physical
> migration remained undecided or had not started.

The detailed gate and manifest remain in the
[implementation-preparation record](documentation-ia/documentation-ia-roadmap-physical-modularization-implementation-preparation1.md);
this historical snapshot does not describe current migration status.

#### Historical snapshot — Roadmap Physical Modularization implementation-preparation status (2026-09-24)

The preparation record preserves its candidate layouts, evidence, and
reference analysis. Its pre-migration statement that no content had moved is a
historical snapshot; see the current direction and migration status below.

#### Current Roadmap-first chronology migration status (2026-09-24)

The [chronology structure decision](documentation-ia/documentation-ia-roadmap-chronology-structure-decision1.md),
[migration result](documentation-ia/documentation-ia-roadmap-chronology-migration1-result.md),
[history index](roadmap-history/README.md), and bounded migration results
linked from the current-status index record completed extractions and
compressions. They do not establish that every historical-looking paragraph
has been migrated: unverified mixed/open content remains here as current
planning evidence. `docs/`-wide taxonomy and relocation remain deferred.

#### Current Relative Time atomic-semantics status after Human adoption (2026-09-24)

The Human-adopted [atomic Recorded assertion semantics](./temporal/relative-time-atomic-recorded-assertion-semantics-adoption1.md)
are the normative authority for that bounded layer; the proposal and readiness
audit remain historical evidence. The adoption does not extend Draft/schema
support or authorize the separate representation, versioning, evaluation,
Derived, Validator, migration, or application work listed in that record.
The atomic-semantics phase and minimum state sync are closed. Current
Documentation IA direction and migration status are recorded immediately
above; this entry does not broaden either scope.

The next Human decision under preparation is whether to authorize a bounded
Draft/schema integration-and-versioning design checkpoint for the already
adopted semantics, or to defer that work while Draft 0.1.0 remains unchanged.
This is not a priority or implementation authorization; see the [decision
preparation](./temporal/relative-time-post-adoption-next-human-decision-preparation1.md).

> Historical snapshot — superseded by the current `NL-H2-R1` entry near the
> end of this roadmap. The following readiness text records the pre-acceptance
> state and is retained for chronology.

The subsequent NarrativeLine application-readiness audit is recorded in
`e2r-narrative-line/docs/history-2-relative-time-application-readiness.md`.
NarrativeLine currently consumes stable History `1.0.0` semantically; candidate-
shaped History and Relative Time payloads are preserved but not semantically
presented or authored. The current History editor must not be used on candidate
or mixed payloads because it writes stable `history.time`. The application now
resolves the published registry validator `0.5.0` through its lockfile, making
candidate structural diagnostics available at the existing validation boundary
without adding candidate UI, writer, migration, or Relative Time ordering.
The dependency/release audit selects a normal published
`@sukoyaka-dopeness/e2r-validator` package as the canonical production path; a
sibling file, workspace, or Git dependency is temporary evidence only and is
not the application release model. NL-H2-R1 remains a separate, unstarted
NarrativeLine implementation checkpoint. This is a readiness record only: it
does not authorize runtime changes, migration, sample changes, deployment, or
release, and Relative Time authoring/order inference remains deferred.

The source-first NarrativeLine modularization readiness audit is recorded in
`e2r-narrative-line/docs/narrativeline-modularization-readiness-audit.md`.
It finds meaningful existing service/screen separation and does not justify a
wholesale App rewrite or mechanical file splitting. If NL-H2-R1 is authorized,
the next bounded architecture checkpoint should evaluate a pure History
capability/policy seam before candidate logic is spread across Event Detail,
Dataset mutation, export declaration, and App orchestration. This remains
**RECORDED / IMPLEMENTATION NOT STARTED**: it does not authorize runtime
refactoring, History 2 UI, edit refusal, migration, or Relative Time behavior.

### Character Generator and character-name research (non-active)

Detailed research on perceived name impressions, external vocabulary and
source policy, large-graph scenarios, and deterministic Dataset tendency/seeds
remains in the [Character Generator Application research
sections](../applications/character-generator-app.md) and the [name-impression
research seed](../research/exploratory/name-impression-database-and-character-name-generation.md).
This is non-active future research, not a release blocker or an implementation
authorization. No external source is selected, and fetching/import is not
authorized. Large-graph sizes remain illustrative, not requirements; the
current Initial Placement priority is unchanged.

### Character Generator external vocabulary and large-graph research

The [Character Generator Application research](../applications/character-generator-app.md)
retains the large-graph and external-vocabulary detail. This remains non-active
future research: the approximately 100-Entity scale is illustrative, no source
is selected, and `EXTERNAL-VOCABULARY-WEB-FETCH-EXPERIMENT1` is
`FUTURE / NOT STARTED`; no fetch or importer is authorized. Current Initial
Placement priority is unchanged.

### Character Generator portable vocabulary source policy

The [Character Generator Application research](../applications/character-generator-app.md)
retains the source-policy and provenance detail. No named source is approved;
source-specific rights evidence and a separate licensing decision remain
prerequisites before any future fetch or adoption. This is not active work or a
release blocker.

### Character Generator deterministic Dataset tendency and seed research

The [Character Generator Application research](../applications/character-generator-app.md)
retains this unproven hypothesis and its seed, privacy, and reproducibility
questions. No algorithm, schema, or generation implementation is selected;
this remains non-active future research and does not change current placement
priority.

### Grouping evidence and feedback direction

Collect cross-application evidence, including NarrativeLine needs, before any
bounded LiaisonScape grouping experiment. No Dataset grouping semantic or
implementation is accepted. This remains future work, not a release blocker;
the detailed design space is linked below.

### User-defined graph Groups

The [user-defined Groups research](../research/exploratory/liaisonscape-user-defined-graph-groups.md)
retains the goal and open design questions, including the distinction from
derived layout clusters. No implementation is authorized.

### One-button high-quality automatic coordinate generation

This remains a non-active future goal and does not change the current
authoritative Initial Placement priority or selected checkpoint. The
[dedicated research](../research/exploratory/liaisonscape-one-button-automatic-coordinate-generation.md)
retains the quality, pipeline, and Derived-coordinate boundaries. No broader
placement implementation is authorized by this pointer.

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

The E2R Studio direction recorded in `sessions/E2R-Session-0010.md` remains a
Hub application-planning responsibility: introduce E2R, present applications,
samples and documentation, and provide Hub-owned user entry points. Hub is an
application/distribution surface, not a Core object or a requirement for a
universal application UI.

**Planning authority:** the [E2R-wide milestone map](#proposed-e2r-wide-milestones)
is the sole canonical ecosystem milestone sequence. This section is a scoped
Hub supplement, not a second ecosystem sequence. Hub Milestone 1 remains
**COMPLETE / ACCEPTED DESIGN** and Milestone 2 remains **COMPLETE / MANUALLY
ACCEPTED**, as recorded in the [IA authority](hub/e2r-hub-public-entry-point-information-architecture.md)
and [Milestone 2 acceptance](hub/e2r-hub-public-entry-point-milestone-2-acceptance.md).

Hub-specific planning retained here:

- Hub catalog/status-card presentation and onboarding/documentation paths
  contribute to canonical ecosystem milestone 2; they do not define another
  first-use sequence.
- Hub sample-gallery presentation contributes to canonical milestone 3;
  canonical sample content and cross-application sample responsibility remain
  governed by that milestone.
- Hub-provided sample and Self-Description access/Handoff surfaces contribute
  to canonical interoperability milestone 4. Some Dataset Handoff link
  generation exists in current Hub source, but this is implementation
  evidence only; it does not establish Human acceptance or completion of the
  broader evidence responsibility.
- Hub-facing capability/compatibility and pack discovery/display contribute
  to canonical milestones 5 and 7; definitions, compatibility policy and
  manifest foundations are not duplicated here.
- The existing [E2R Self-Description Dataset](../examples/e2r-self-description.json)
  remains owned at this repository path; a suitable Hub entry point is a
  Hub-specific follow-up. Placement, presentation, URL/Handoff behavior and
  relation to sample-gallery UI remain implementation-checkpoint decisions.
- Browser-local locale preference and retained-Dataset/project workspace
  remain exploratory Hub responsibilities, not Dataset content or an
  implicit Extension. Storage choices are not selected here. Browser storage
  is origin-scoped; an explicit bridge or server-backed workspace must be
  investigated before assuming cross-origin sharing.
- Hub portal release mechanics contribute to canonical milestone 10; they do
  not replace ecosystem-wide evidence-gated release coordination.

These supplements do not authorize a Core change, universal application UI,
automatic interpretation of unknown metadata, or implementation of deferred
workspace architecture. Hub-specific next work still requires a bounded
scope and evidence gate; it is not inferred from the former Hub list order.

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

- review the cross-application control density and typography of operation
  buttons in LiaisonScape and NarrativeLine on desktop and narrow mobile
  layouts. Current user observation confirms that button boxes and their text
  feel oversized across both applications, rather than at one isolated screen.
  Audit shared or app-wide control rules, including padding, height, border
  weight, font size, and responsive behaviour. Preserve touch-target,
  keyboard, contrast, and readable localized-label requirements while reducing
  visual disproportion; this is not authorization for individual CSS patches;
- align NarrativeLine's browser Back/Forward behavior with LiaisonScape's
  Home/workspace model, including Dataset retention and direct-entry or
  refresh behavior;
- align the Home navigation control in NarrativeLine view headers with
  LiaisonScape's current header treatment, while keeping navigation semantics
  explicit and preserving the active Dataset;
- audit modal and confirmation-dialog focus behavior in both applications.
- **Cross-App metadata/action visual affinity audit** — Human Review observed
  that LiaisonScape Workspace Dataset title metadata can place the title/value
  on the left and its `Edit` action at the far edge of the row, weakening the
  visual connection between the action and its target. At a future
  cross-application CSS / visual-consistency pass, audit whether metadata
  label, value, and action should read as one visual group without imposing a
  permanent adjacent-button rule. Include any comparable NarrativeLine
  metadata/action surface, wide-viewport separation, natural narrow-viewport
  wrapping, existing Header/toolbar/Detail/metadata hierarchy, and EN/JA
  label length. A future section-level action for multi-field Dataset metadata
  remains a valid alternative; exact DOM, flex/grid, gap, and breakpoint
  choices are intentionally left open.
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

This retained heading is a historical pointer, not an open audit. The former
implementation-asymmetry and “not yet aligned” statements are superseded by
the **FORMALLY ACCEPTED / CROSS-APP IMPLEMENTATION ALIGNED / COMPLETE** status
in [Cross-App Relation Deletion Capability Closure](cross-app/cross-app-relation-deletion-capability-closure.md).
The dated progression remains in the [Release and Cross-App chronology](roadmap-history/release-and-cross-app-chronology.md).
Targeted Handoff/discovery and generalized Relation management remain separate
deferred responsibilities; neither reopens this closure.

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

**Canonical planning authority:** the following ten milestones provide the
sole E2R-wide cross-repository milestone sequence. The Hub section above is a
Hub-specific supplement and does not establish a parallel ecosystem sequence.
The existing sequence and descriptions are retained unchanged. They use three
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

The [E2R Suite long-term research](../research/exploratory/e2r-suite-long-term-milestone.md)
remains **EXPLORATORY / DISTANT / NOT ACTIVE**, unscheduled with no target
version, date, or implementation order; it does not change the active
LiaisonScape Initial Placement checkpoint or authorize a Suite shell or new
application.

A separate [E2R Wiki / portable hosted Dataset research](../research/exploratory/e2r-wiki-portable-hosted-dataset-application.md)
explores one possible application shape within that distant space; it does not
change this status or authorize implementation.

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

## LiaisonScape residual UX / quality follow-up (2026-08-23)

Manual review during F2-LS1 identified the following bounded LiaisonScape
follow-ups. They are implementation and acceptance work, not Core or Extension
changes. This 2026-08-23 note does not establish the current execution priority
of F2-LS1, Cross-App Locale consumer implementation, or Hub locale producer
completion:

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
   Viewport Toolbar Collapse Follow-up](liaisonscape/liaisonscape-viewport-toolbar-collapse-follow-up.md).
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

### Automatic Display crossing refinement follow-up (2026-09-16)

Frontier-12 Automatic Display is **QUALIFIED** by Human Review for normal
automatic display: it appears immediately and is sufficient as an initial view.
Titanic, Ashen Crown, and related canonical/public presentation may still show
a small number of avoidable-looking ordinary Edge crossings. Human Review found
these understandable and below the level of a gross comprehension defect, so
they are not a release or adoption blocker and do not reopen provider selection.

This is a presentation-quality follow-up only. If prioritized later, investigate
local crossing reduction, routing pressure, and placement/presentation coupling
within the existing authority boundary. Preserve current runtime expectations,
canonical readability, downstream Product presentation authority, and the
accepted Frontier-12 contract. Do not begin that implementation or solver study
under this closure. The follow-up is analogous to the documented Self-loop
residual: accepted current contract plus a separately tracked quality question.

### F2-LS1 acceptance checkpoint

**Accepted / Closed** at the bounded acceptance recorded in [the F2-LS1 acceptance authority](cross-app/liaisonscape-cross-app-shell-alignment-f2-ls1-acceptance.md). Locale-consumer completion is separate. The minimum-width observation and unrelated follow-ups below remain distinct.

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
  Collapse Follow-up](liaisonscape/liaisonscape-viewport-toolbar-collapse-follow-up.md) as
  a **DESIGN ACCEPTED / READY FOR BOUNDED IMPLEMENTATION** combined
  drag-handle plus disclosure-trigger contract. Runtime implementation remains
  a separate checkpoint; the `720px` handoff and no-keyboard-repositioning
  boundary remain unchanged.
- **Cross-App Dataset Replacement destructive styling parity is ACCEPTED / CLOSED.** The bounded audit result is preserved in Roadmap History; Dataset Replacement Safety semantics and other action contracts are unchanged.

The following observations are recorded as non-issues and are not additional
roadmap items: extreme-narrow Footer wrap/clip differences caused by available
text width, and a changed initial Tab location after pointer interaction when
the browser's sequential-focus behavior remains correct. The accepted
approximately 240px boundary remains bounded and is not a universal minimum
width requirement.

F2-LS1 remains **Accepted / Closed**. Its accepted-check inventory is preserved in Roadmap History; the minimum-width and other follow-ups above remain separately bounded.

### Cross-App shell action hover parity

**ACCEPTED / CLOSED** for the tested browser, width, and locale matrix. Physical-device and other browser-family coverage is not implied. Detailed evidence remains in [the audit result](cross-app/cross-app-shell-action-hover-focus-parity-audit1-result.md).

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

**ACCEPTED / COMPLETE.** Add Event remains primary; Open and Export are secondary actions. Home-first acquisition remains canonical, and LiaisonScape parity remains deferred under the current [Home-first direction](#home-first-dataset-acquisition-hierarchy). Native picker and real-touch acceptance remain outside the recorded browser acceptance. Detailed checkpoint evidence is preserved in the [Release and Cross-App chronology](roadmap-history/release-and-cross-app-chronology.md#narrativeline-workspace-more-acceptance-2026-08-25) and [modernization authority](../research/exploratory/liaisonscape-workspace-modernization-audit.md).

### NarrativeLine Timeline Back-to-Top acceptance — 2026-08-25

**ACCEPTED.** Back-to-Top is a transient Timeline navigation affordance; Add Event remains primary and More the terminal secondary-action container. Detailed behavior and acceptance evidence is preserved in the [Release and Cross-App chronology](roadmap-history/release-and-cross-app-chronology.md#narrativeline-timeline-back-to-top-acceptance-2026-08-25) and [NarrativeLine next-phase result](narrativeline/e2r-narrativeline-next-phase-and-source-handoff-planning1-result.md).

## Active follow-up ledger — 2026-08-25

### LiaisonScape LS-M2A acceptance — 2026-08-25

**ACCEPTED / COMPLETE at the application-local boundary.** Open/Export remain secondary, and Dataset Replacement Safety is preserved. This does not establish cross-app parity; current deferrals and follow-ups remain in the entries below. Detailed scope and acceptance evidence is preserved in the [Release and Cross-App chronology](roadmap-history/release-and-cross-app-chronology.md#liaisonscape-ls-m2a-acceptance-2026-08-25) and [modernization authority](../research/exploratory/liaisonscape-workspace-modernization-audit.md). The dated next-step sequence is historical.

### Current execution order

This 2026-08-25 execution-order snapshot is superseded and is retained in Roadmap History only. Use the [current canonical reconstruction summary](#roadmap-reconstruction-checkpoint-current-canonical-summary) for current order and priority.

### Planned visual follow-ups before public release

The following two visual follow-ups are intentionally separate. Recording them
does not authorize runtime, CSS, or experiment work.

The Dataset metadata divider-spacing and label/value alignment checkpoints are marked **FIXED / ACCEPTED**; their dated detail is preserved in Roadmap History. The general 600/601px responsive topic remains separate.

1. **NarrativeLine / LiaisonScape Cross-App Visual Style / Flatness
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

The LiaisonScape-local label/value alignment checkpoint is **FIXED / ACCEPTED** at the recorded runtime boundary. The 16px divider-spacing baseline remains unchanged. The general 600/601px topic, Cross-App Visual Style / Flatness, and NarrativeLine parity remain separate; detailed measurements and dated observations are in Roadmap History and the [alignment audit](liaisonscape/liaisonscape-dataset-metadata-alignment-audit.md).

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

- **Workspace action hierarchy — app-local checkpoints accepted; conceptual
  cross-app secondary-access parity deferred:** NarrativeLine Workspace More
  and LiaisonScape LS-M2A are recorded as accepted at their application-local
  boundaries above. The old “audit needed” label is superseded; retain the
  [Home-first direction](#home-first-dataset-acquisition-hierarchy) and its
  deferral boundary without reopening either accepted checkpoint.
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

## Deferred Cross-App safety and test-infrastructure follow-ups (2026-08-24)

Recent locale production-readiness work surfaced two future follow-ups. They
do not reorder the current locale priority and do not reopen completed locale
checkpoints.

### Audit and align Cross-App Entity deletion semantics

This **2026-08-24 planning snapshot is superseded**, not a current audit task.
The bounded deletion contract, NarrativeLine/LiaisonScape alignment, and
bidirectional acceptance are closed in [Cross-App Relation Deletion Capability
Closure](cross-app/cross-app-relation-deletion-capability-closure.md); the historical
progression is retained in the [Release and Cross-App chronology](roadmap-history/release-and-cross-app-chronology.md).
No additional deletion-semantics or cascade-policy decision is pending here.

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

Historical component-status and sequencing snapshot (2026-08-24): NarrativeLine
Locale Consumer was **COMPLETE / DOCUMENTED**, based on
runtime checkpoint `ded44d6ca093431cc829d0aa47f6524ea789750a`, final automated
evidence, and EN/JA manual acceptance. This records recipient-consumer
readiness, not completion of Cross-App Locale or application release readiness.
See [NarrativeLine Locale Consumer Acceptance](narrativeline/narrativeline-locale-consumer-acceptance.md).

The dated next-target sequence was LiaisonScape locale consumer
implementation/alignment, followed by Hub startup locale producer completion
and final cross-app closure. It is historical sequencing, not a current
priority selection. Cross-App Locale remains not closed under the linked
acceptance; the Initial Public Release closure does not complete it. The Hub
direct Handoff capability is separate and remains deferred under the Hub
milestone acceptance.

### Non-blocking NarrativeLine follow-ups

- The completed Header/Footer and CoordinatePanel 600/601px geometry checkpoints are preserved in Roadmap History; the remaining bullets below stay open or deferred.
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

NarrativeLine Credits behavior is accepted in the [locale-consumer authority](narrativeline/narrativeline-locale-consumer-acceptance.md),
and LiaisonScape Credits locale parity is recorded closed in the [Release and
Cross-App chronology](roadmap-history/release-and-cross-app-chronology.md).
Hub's accepted [bilingual landing-page milestone](hub/e2r-hub-public-entry-point-milestone-2-acceptance.md)
covers bounded locale and Credits behavior, but does not establish this
follow-up's full Close/Escape/backdrop parity. No later closure record for that
specific Hub check was found in the reviewed authorities; retain it as an
open/deferred follow-up, not an Initial Public Release gate. The old entry does
not authorize a runtime change.

### Version and queued research note

The LiaisonScape next application release decision is now accepted as
`0.2.0`, while the current metadata remains `0.1.0` until bounded release
preparation. Application versioning remains separate from Dataset/schema
versioning. Cross-App Locale, research shelf inventory, and the Hub
concept-page update remain separate cross-app or future work and do not reopen
the LiaisonScape version decision by themselves.

### LS-DETAIL-RR1 Related Relation readability — ACCEPTED / CLOSED
**ACCEPTED / CLOSED** at the project-specific acceptance boundary. Detailed implementation and manual evidence are retained in Roadmap History and the [modernization audit](../research/exploratory/liaisonscape-workspace-modernization-audit.md). Dataset identity, graph visibility, and Delete semantics remain unchanged. Current follow-ups remain: `LS-REL-ENDPOINT-ID1` (audit needed), `LS-DIALOG-DRAFT1` (audit needed), `LS-CTX-R1` (bug/fix needed), and `LS-GRAPH-DRAG1` (bug/audit needed).

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
  [LiaisonScape Relation Endpoint Identity Acceptance](liaisonscape/liaisonscape-relation-endpoint-identity-acceptance.md).
- Object ID / Technical details and F2-LS1 locale/shell are accepted/closed.
- LS-GRAPH-DRAG1 / D1R6R2 is accepted/closed and verified committed/pushed.
- Session 0048 publication, Anonymous Dataset Sharing research, Temporal /
  Epistemic / Names research, and the LiaisonScape modernization audit are
  committed checkpoints.

### Current cross-app deletion status

Cross-App Relation Deletion Ownership / Visibility Safety is **FORMALLY
ACCEPTED / CROSS-APP IMPLEMENTATION ALIGNED / COMPLETE** through
`XAPP-REL-DELETE6-CAPABILITY-CLOSURE`. The current canonical contract and
bounded scope are recorded in the [capability closure](cross-app/cross-app-relation-deletion-capability-closure.md).
The completed NarrativeLine/LiaisonScape implementation, bidirectional
acceptance, and capability-Handoff progression are preserved as dated evidence
in the [Release and Cross-App chronology](roadmap-history/release-and-cross-app-chronology.md).
That historical progression does not reopen the accepted ownership, no-cascade,
explicit Relation-deletion, self/parallel Relation, or interoperability
boundaries. The NarrativeLine endpoint-separator observation was corrected and
included in its [later formal presentation acceptance](narrativeline/narrativeline-relation-blocker-presentation-formal-acceptance.md).
The later [Cross-App visual consistency audit](cross-app/e2r-cross-app-visual-consistency-audit1-result.md)
found no bounded current visual defect, without requiring pixel-identical UI.
Targeted Handoff/discovery and broader Relation management remain separate
deferred work, not closure prerequisites.

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
LiaisonScape, the bounded Detail/deletion state-controller extraction is
**IMPLEMENTED / ACCEPTED** at commit `98f7751`; its ownership boundary and
evidence remain in [LiaisonScape Detail / Deletion Modularization Readiness](liaisonscape/liaisonscape-detail-deletion-modularization-readiness.md).
The record states that a separate 2B wiring checkpoint is unnecessary. Any
future extraction requires its own readiness review under the workspace
policy; no further Detail/deletion extraction is currently sequenced here.

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

### Cross-App Relation Deletion closure and remaining boundaries

The Cross-App Relation Deletion capability is **FORMALLY ACCEPTED / COMPLETE /
CLOSED** by the [capability closure](cross-app/cross-app-relation-deletion-capability-closure.md);
the detailed dated implementation and acceptance progression remains in the
[Release and Cross-App chronology](roadmap-history/release-and-cross-app-chronology.md).
The old `NL-ENTITY-DELETE4-CARD-PRESENTATION1` sequence is not a current
capability blocker. Retain only the closure's explicitly named non-blocking
presentation findings above; do not infer universal UI parity or reopen the
accepted deletion contract. Handoff/discovery and generalized Relation
management remain deferred and outside that closure.

### E2R-CDP-STABILIZATION1 — CDP/browser acceptance workflow

The e2r-spec-owned helper is **IMPLEMENTED / ACCEPTED** and maintained in
[`tools/edge-cdp/`](../tools/edge-cdp/), with its operational scope in the
[README](../tools/edge-cdp/README.md) and regression coverage in
[`edge-cdp-helper.test.mjs`](../tools/edge-cdp/edge-cdp-helper.test.mjs).
The bounded real-Edge acceptance evidence, including native-dialog gating, is
recorded in [LiaisonScape Relation Deletion Resolution Acceptance](liaisonscape/liaisonscape-relation-deletion-resolution-acceptance.md).
This helper supplies evidence tooling; each scenario retains its own acceptance
authority. It adds no production application dependency or runtime behavior.

### LS-DETAIL-DELETION-MODULARIZATION1-READINESS

The readiness recommendation and accepted 2A state-controller boundary are
preserved in [LiaisonScape Detail / Deletion Modularization Readiness](liaisonscape/liaisonscape-detail-deletion-modularization-readiness.md).
Cross-App blocker resolution, focused acceptance, bidirectional
interoperability, and final capability closure are recorded in the [closure authority](cross-app/cross-app-relation-deletion-capability-closure.md)
and [Release and Cross-App chronology](roadmap-history/release-and-cross-app-chronology.md).
The former “final interoperability remains follow-up” sequence is superseded
by that closure; the exclusions and non-blocking presentation items stated in
the current status above remain operative.

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
[LiaisonScape Relation Endpoint Identity Acceptance](liaisonscape/liaisonscape-relation-endpoint-identity-acceptance.md)
record. Its outside-dialog Creation click contract is no-dismissal with draft
retention; this does not convert Creation to Credits-style backdrop dismissal.
Action grouping and the two visual follow-ups remain separate and do not block
the behavioral closure.

### REL-DIRECTIONALITY1 / PRE-RELEASE-FEATURE-RECONSIDERATION1

The full planning record is [Pre-public-release Feature Reconsideration](./release-governance/pre-public-release-feature-reconsideration.md).
The detailed Relation directionality supersession is already recorded
separately and complete in [Relation Endpoint UI / Directionality
Follow-up](cross-app/relation-endpoint-ui-directionality-follow-up.md). The remaining
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

Historical execution-order snapshot: at this roadmap reconstruction checkpoint,
the active sequence was Cross-App Locale production readiness, NarrativeLine
and LiaisonScape locale consumers, Hub locale/Handoff closure, residual quality
and bounded visual/safety follow-ups, release assets and placement/display-order
audits, S3 licensing/provenance and sample redistribution checks, then
push/deployment readiness, public interoperability evidence, and the final
pre-public-release audit. The later S3 result and Initial Public Release closure
supersede this sequence as release planning; it is not the current execution
order. Current status is in the [status index](#current-status-index-2026-09-22).
Cross-App Locale itself is not closed, but this historical release sequence
does not select its present priority or imply that the locale workstream blocks
the already closed release.

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
[NarrativeLine Event Identity Formal Acceptance](narrativeline/narrativeline-event-identity-formal-acceptance.md),
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
recorded in [NarrativeLine Relation Blocker-Card Presentation Follow-up](narrativeline/narrativeline-relation-blocker-card-presentation-follow-up.md).
That presentation workstream is now **FORMALLY ACCEPTED / COMPLETE / CLOSED**
at accepted NarrativeLine runtime `4591f3a`. Formal evidence is recorded in
[NarrativeLine Relation Blocker Presentation Formal Acceptance](narrativeline/narrativeline-relation-blocker-presentation-formal-acceptance.md),
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

The accepted presentation-only direction and its Relation Detail consequence
are retained in the [directionality research authority](../research/exploratory/relation-direction-and-arrow-appearance.md)
and the [Presentation reconciliation result](liaisonscape/liaisonscape-presentation-relation-display-reconciliation-result.md).
This is a historical decision checkpoint; later entries below record the
selected labels, serialization contract, schema, and implementation evidence.

### LS-RELATION-DETAIL-DISPLAY-CONTROL-EN1 (2026-08-29)

The accepted broader label `Relation display` is recorded in the
[directionality research authority](../research/exploratory/relation-direction-and-arrow-appearance.md).
It was later superseded for the four-mode control by the narrower `Arrow
display` decision below; details and provenance are summarized in the
[reconciliation result](liaisonscape/liaisonscape-presentation-relation-display-reconciliation-result.md).

### LS-RELATION-DISPLAY-PERSISTENCE-OWNERSHIP1 (2026-08-29)

The [directionality research authority](../research/exploratory/relation-direction-and-arrow-appearance.md)
records the accepted Presentation-owned, Dataset-contained persistence
responsibility and its boundaries. The later [Presentation Draft](../extensions/presentation-extension-draft.md)
and schema define the serialization contract; LiaisonScape implementation
evidence and limits are summarized in the [reconciliation result](liaisonscape/liaisonscape-presentation-relation-display-reconciliation-result.md).

### LS-RELATION-DETAIL-ARROW-DISPLAY-ORDER-DECISION1 (2026-08-29)

The accepted four-mode `Arrow display` label, presentation-only choices, and
Relation Detail information order remain in the [directionality research authority](../research/exploratory/relation-direction-and-arrow-appearance.md).
The [Presentation reconciliation result](liaisonscape/liaisonscape-presentation-relation-display-reconciliation-result.md)
distinguishes that accepted design from committed LiaisonScape implementation
and does not claim separate Human acceptance of the runtime feature.

### LS-RELATION-PRESENTATION-SERIALIZATION-DESIGN1 (2026-08-29)

The current [Presentation Draft](../extensions/presentation-extension-draft.md)
defines the Dataset-contained `0.1.0` candidate contract; the [structural schema](../schemas/extensions/presentation-draft.schema.json)
and LiaisonScape reader/writer implementation are separately evidenced. See
the [Presentation reconciliation result](liaisonscape/liaisonscape-presentation-relation-display-reconciliation-result.md)
for the implementation checkpoints and the boundary between them and
Draft/Stable status.

### E2R-LS-PRESENTATION-EXTENSION-SCHEMA1 (2026-08-29)

The [Presentation Draft](../extensions/presentation-extension-draft.md) and
[structural schema](../schemas/extensions/presentation-draft.schema.json)
remain the contract authorities; `npm run validate:presentation-draft`
checks the schema. Production Validator support has its own
[integration result](validator/production-validator-extension-integration-result.md)
and [acceptance](validator/production-validator-extension-integration-acceptance.md).
The Extension remains a Draft candidate, not Stable; the [reconciliation result](liaisonscape/liaisonscape-presentation-relation-display-reconciliation-result.md)
records application implementation separately from those authorities.

### LS-RELATION-LINE-STYLE-DESIGN1 (2026-08-29)

The accepted independent `lineStyle` responsibility, tokens, defaults, and
Presentation/Layout boundaries remain in the [directionality research authority](../research/exploratory/relation-direction-and-arrow-appearance.md)
and [Presentation Draft](../extensions/presentation-extension-draft.md).
The schema and LiaisonScape reader/writer/UI implementation checkpoints are
complete in their respective authorities; their evidence and non-acceptance
limits are summarized in the [reconciliation result](liaisonscape/liaisonscape-presentation-relation-display-reconciliation-result.md).

### LS-RELATION-LINE-STYLE-SCHEMA1 (2026-08-29)

The [structural schema](../schemas/extensions/presentation-draft.schema.json)
includes `lineStyle` and its non-empty-string shape alongside `arrowDisplay`;
the targeted gate is `npm run validate:presentation-draft`. Runtime fallback,
preservation, rendering, and edit behavior belong to the Draft and application,
not the schema. See the [reconciliation result](liaisonscape/liaisonscape-presentation-relation-display-reconciliation-result.md)
for implementation evidence; no Stable promotion is implied.

### LS-PRESENTATION-RELATION-DELETION-CLEANUP1 (2026-08-30)

This bounded lifecycle item is **CLOSED** in the [cleanup result](liaisonscape/liaisonscape-presentation-relation-deletion-cleanup-result.md):
explicit Relation deletion removes only its keyed Presentation record and
preserves siblings and unrelated orphans. No global orphan repair or
Validator/schema policy change is implied.

The Initial Public Release is formally closed; its current status and retained boundaries remain in the status index and [closure audit](./release-governance/e2r-initial-public-release-closure-audit-result.md). The superseded pre-release and LiaisonScape 0.2.0 sequence is preserved, in original order and wording, in the [release and Cross-App chronology](roadmap-history/release-and-cross-app-chronology.md#pre-release-and-liaison-scape-020-release-preparation-chronology); its dated `current`, `next`, `blocked`, and `unauthorized` statements are historical snapshots.

The Initial Node Placement Objective Audit remains relevant as evidence, not as the old release sequence: both Lighthouse samples had stored coordinates and did not exercise missing-coordinate placement. Its [dedicated audit](liaisonscape/liaisonscape-initial-node-placement-objective-audit.md) is retained as context for the current Initial Layout attribution work below; it does not change the current execution order or authorize runtime, schema, or sample changes.

### LiaisonScape Initial-Layout Coarse Objective Self-loop Boundary Audit 1 (2026-09-11)

The [Self-loop boundary audit](liaisonscape/liaisonscape-initial-layout-coarse-objective-self-loop-boundary-audit1-result.md)
removed Self-loop Relations from ordinary straight-chord, long-edge,
Relation-label corridor, and parallel-bundle proxies. Node occupancy metrics
remain valid Node-geometry signals; loop angle/radius and loop-label behavior
remain routing/presentation work. The corrected objective is ready for bounded
comparative evaluation, with Product integration still unauthorized.

Historical early Initial Placement / routing progression, from the coordinate-less comparison through the bounded seed-assignment stability audit, is preserved in the [LiaisonScape Layout and Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#early-initial-placement-and-routing-progression-2026-08-30-to-2026-09-01). The dated sequence is historical evidence; current priorities, constraints, and execution order remain in the current coordination authority.

### E2R-PERSONAL-STORAGE-RESEARCH1 (2026-09-01)

**Exploratory / non-adopted.** Personal Storage remains optional: accountless,
local/offline Dataset open, editing, validation, and ordinary export remain
available. No provider, account/auth model, schema, or implementation is
selected. This research does not change the current LiaisonScape Initial
Placement order. See [E2R-managed Personal Storage Research](../research/exploratory/e2r-managed-personal-storage.md).

The 2026-09-01 to 2026-09-03 Seed candidate-generation, assignment,
structural-objective, and PR-2 preparation chronology is preserved in the
[existing Layout and Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#seed-candidate-generation-assignment-structural-objective-and-pr-2-preparation-chronology-2026-09-01-to-2026-09-03).
Its [bounded migration result](documentation-ia/roadmap-seed-pr2-history-migration1-result.md)
records scope and reference checks. All 55 dated checkpoint blocks and their
dedicated evidence pointers remain there in source order.

The TA0-TA3 synthesis closed only the fixture-local research branch at its
recorded INF-W0 / INF-W1 ceiling. It does not justify Experiment5, a universal
winner, cross-fixture ranking, Production selection, Product adoption, or
visual acceptance. Current PR-2 disposition and its bounded limits remain
summarized immediately below; current Initial Layout sequencing remains in the
coordination authority.

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

### E2R-VSCODE-OSINT-WORKBENCH-RESEARCH1 (2026-09-02)

**EXPLORATORY / FUTURE DIRECTION — NOT ACTIVE OR SELECTED.** No VS Code or
Desktop implementation, platform, storage, AI provider, schema, cloud backend,
or authentication model is authorized. The current LiaisonScape Initial
Placement priority and selected checkpoint remain unchanged. See the [E2R
for VS Code — OSINT Workbench research](../research/exploratory/e2r-vscode-osint-workbench.md)
for the research question, design space, risks, and open questions; related
Host Authority and External Dataset research remain separate.

### E2R-WEB-VSCODE-HOST-AUTHORITY-RESEARCH1 (2026-09-10)

**EXPLORATORY / FUTURE DIRECTION — NOT AN ACCEPTED ARCHITECTURE OR ACTIVE
IMPLEMENTATION.** The research preserves the distinction between E2R-SPEC's
Dataset/interoperability authority, shared Product source, the first-class Web
surface, and a possible future VS Code host; exact host, package, runtime, and
deployment choices remain unselected. No extension, Webview, Custom Editor,
schema, or implementation is authorized. See the [E2R Web / VS Code Host
Authority research](../research/exploratory/e2r-web-vscode-host-authority.md)
for the responsibility model, alternatives, risks, open questions, and
conditional research sequence if the direction is separately reopened.

### E2R-OSINT-EXTERNAL-DATASET-ACQUISITION-TRUST-RESEARCH1 (2026-09-02)

**EXPLORATORY / NOT ACTIVE.** The research direction is established, but
implementation is deferred until OSINT Workbench architecture becomes active;
no follow-up starts automatically. The current LiaisonScape Initial Placement
priority and checkpoint remain unchanged. Acquisition is not factual
acceptance; discovery is distinct from trust; integrity/authenticity do not
establish truth; and Dataset count does not establish independent
corroboration. Decentralized discovery with optional indexes is a supported
direction, not a selected protocol. Local assessment, snapshot identity,
assertion-level modeling, and trust/provenance ownership remain unresolved;
no client, downloader, registry, schema, or implementation is authorized. See
the [E2R OSINT External Dataset Acquisition, Trust, and Provenance research](../research/exploratory/e2r-osint-external-dataset-acquisition-and-trust.md)
for the full evidence, distinctions, open questions, and non-goals.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-PR2-NONVISUAL-EVIDENCE-COMPLETION1 (2026-09-03)

**Current bounded disposition: PR-2 nonvisual evidence is COMPLETE-BOUNDED** for the four required classes (hard validity, determinism/runtime, compatibility, and provenance), the five frozen research materializer identities, and `1 <= N <= 65`; the dedicated [PR-2 completion result](liaisonscape/liaisonscape-initial-placement-seed-production-pr2-nonvisual-evidence-completion1-result.md) is the detailed evidence authority. The bounded run covered seven committed real fixtures and six deterministic controls; all 65 eligible cells passed HARD-1..7, while N=0 and N=66 failed closed.

This does not select a candidate or establish a Production provider, Product adoption, Production integration, or visual acceptance; no candidate is selected and `PR-C3` through `PR-C5` remain `NO`. Compatibility evidence and candidate selection remain separate. The realistic fixture ROLE GAP remains open for later stages. PR-3 visual/settling/routing and subsequent integration evidence are separate, unaccepted scopes; see the [PR-3 evidence design result](liaisonscape/liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-design1-result.md) for their current contract and status.

### Seed PR-3 pre-Browser preparation and evaluation lineage — historical (2026-09-03 to 2026-09-04)

The dated preparation, bounded evaluation-seam adoptions, run-configuration evidence, and phase-bridge records are preserved in the [LiaisonScape Layout and Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#seed-pr-3-pre-browser-preparation-and-evaluation-chronology-2026-09-03-to-2026-09-04). The current PR-2 disposition and PR-3 Browser blocker remain separate below; this historical lineage does not establish PR-3 acceptance or change any current boundary.

### E2R-GAMEBOOK-VSCODE-EXTENSION-RESEARCH-NOTE1 (2026-09-03)

**DEFERRED / IDEA HOLD.** Research may reopen only when a concrete, testable,
materially E2R-specific differentiation claim satisfies the frozen
`RESTART-TRIGGER-v1` and is separately reviewed. This capsule is not active,
next, or priority work; no extension repository, prototype, schema, player
runtime, implementation, or Product change is authorized. See the [E2R
Gamebook / Interactive Narrative VS Code Extension research note](../research/exploratory/e2r-gamebook-vscode-extension-research-note1.md)
for the hypotheses, unverified prior-art leads, open Core mapping question,
and complete restart criteria.





### Seed PR-3 Browser Capture / runtime diagnostic lineage — historical

The 40 dated Browser Capture, host/runtime qualification, restart, run-identity, transport/helper, and convergence checkpoints are preserved in the [LiaisonScape Layout and Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#seed-pr3-browser-capture-and-runtime-diagnostic-chronology-2026-09-04-to-2026-09-05); their detailed evidence remains linked from that history unit. This historical delegation does not change the current-host status or resume condition recorded in the immediately following current-planning entry.

### PR-3 Browser Evidence current-host runtime blocker synchronization (2026-09-07)

Current status is maintained in the [current-host runtime blocker synchronization](liaisonscape/liaisonscape-browser-capture-current-host-runtime-blocker-synchronization.md): current-host Browser execution and PR-3 Browser Evidence are **BLOCKED**; the exact runtime root cause remains **UNRESOLVED**, no repository-local safe correction is identified, and the existing .62 authority pin remains deferred pending a qualified successor. B1 is not passed, V3 has not started, no successor authority is available, and Fresh lineage4 is ineligible. Resume only after runtime qualification passes under the same accepted security boundary and Browser authority is qualified/reconciled without rewriting historical evidence. This is not READY or PR-3 acceptance.

### NarrativeLine Display-Order Reordering Audit (2026-09-07)

The [NarrativeLine Display-Order Reordering Audit](narrativeline/narrativeline-display-order-reordering-audit.md)
is **COMPLETE / DEFER FOR NOW**. It was selected as the next independent
pre-public-release audit after PR-3 Browser Evidence became formally blocked;
it does not reopen or depend on Browser execution.

The current NarrativeLine implementation sorts a derived copy of the Event
collection by recorded date, precision, `temporalOrder` where applicable, and
Event ID. It does not reorder the Dataset or generate `temporalOrder` merely to
preserve presentation order. Core, History, application guidance, and the
NarrativeLine design handoff agree that temporary custom display order is
application state, while factual relative chronology and persisted authorial
order require separate responsibility decisions.

No concrete release-critical defect or requirement for arbitrary display-order
reordering was established. No source, test, sample, schema, Core, History,
Extension, or Dataset change is authorized. If the work is reopened, the first
step is a bounded ownership/design decision separating temporary presentation,
factual Relative Time, and persisted authorial order; accessible move controls
must precede drag-and-drop.

### Pre-Public-Release Push and Deployment Readiness Audit (2026-09-07)

The [Pre-Public-Release Push and Deployment Readiness Audit](./release-governance/pre-public-release-push-deployment-readiness-audit.md)
is **COMPLETE / DEFER FOR NOW / PUBLIC WRITE NOT AUTHORIZED**. The audit
recorded the state at its 2026-09-07 checkpoint: local Validator 0.4.0
publication and consumer integration, local Public Sample acceptance, S3
licensing/provenance formalization, and
LiaisonScape 0.2.0 preparation are recorded as complete, but the exact public
release set is not yet stable: e2r-spec retains an unrelated dirty session-log
change, LiaisonScape retains modified sample mirrors and twelve local commits
ahead of its tracked `origin/main`, and public propagation/deployment
acceptance plus the final Cross-App / Release Audit remain outstanding.

Its pending public-release status was superseded by the [2026-09-22 Initial
Public Release closure audit](./release-governance/e2r-initial-public-release-closure-audit-result.md).
The audit remains evidence of its earlier no-public-write disposition; it does
not describe the current release status or authorize a new public transaction.

No push, tag, deploy, publication, cleanup, or cross-repository source change
was performed. PR-3 Browser Evidence remains formally BLOCKED and is not
replaced by an alternate evidence path. A future release checkpoint must first
define and reconcile exact release commits, preserve unrelated dirty state, run
the final Cross-App / Release Audit, and obtain explicit authorization for each
public write.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-REVIEW-EXECUTION-AUTHORITY1 (2026-09-08)

The [visual review execution authority result](liaisonscape/liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-review-execution-authority1.md)
establishes the additive `VSR-REVIEW-RESULT-v1` contract for a future Human
Review of an already-generated Browser Evidence B lineage. The canonical
schema is `schemas/evidence/visual-review-result-v1.schema.json`; derived
results belong to `docs/evidence/reviews/<review-result-id>.json` in
e2r-spec. The result is write-once and must bind phaseRunId, finalPr3RunId,
identity SHA, artifact-index/protocol/eligible-set/manifest/audit/state hashes,
and each V3 result, packet, screenshot, and fixture-manifest entry.

The review unit is one candidate/fixture/locale/V3 cell with V-A..V-H rows.
Fresh12's 80 machine-eligible cells are explicitly separated into 64 research
candidate cells and 16 separately labeled current-baseline references; the
baseline is not a candidate and is excluded from ranking. No replicate axis is
invented. Human Review is authorized only as a later bounded checkpoint after
the read-only start gate passes and trustworthy visual inspection is available.

Ranking remains a separate not-started checkpoint, with no weighted score,
majority selector, cross-fixture scalar, or baseline ranking. Selection remains
a further separate checkpoint, and formal PR-3 acceptance and publication are
not authorized here. Fresh12 evidence is unchanged, Human Review remains
`NOT STARTED`, and PR-3 remains `NO`.

### Early diagnostic visual smoke check before expensive evidence (2026-09-08)

The [Early Smoke Check policy](./visual-evidence-early-smoke-check-policy.md)
is accepted as a lightweight, non-authoritative process safeguard for visual
output workflows. Before a large candidate matrix, long browser capture, or
formal visual review, the workflow should inspect the first trustworthy output
for gross scale, viewport, clipping, displacement, label-readability, and
recognizability defects. A representative output is normally sufficient; a
skip requires a recorded reason.

This diagnostic check is explicitly separate from Human Review, ranking,
selection, and formal acceptance. Machine PASS does not substitute for visual
sanity, and a smoke defect does not itself identify a layout, fit, camera, or
coordinate root cause. The policy is motivated by Fresh12's first review cell,
where B1/V3 and integrity passed but visual review found a blocking defect.
Fresh12 artifacts and its canonical review result remain immutable.

### LiaisonScape Dataset loading UX follow-up (2026-09-11)

Add a clear loading indication for the interval between opening a Dataset and
the first stable, usable Graph display. This is a near UX follow-up, separate
from performance optimization: the indication should explain waiting without
assuming that the current measured implementation is slow enough to require a
code optimization. No implementation is authorized by this roadmap entry.

The pre-coordination Initial Layout Product / provider / Frontier / presentation
checkpoint progression (2026-09-11 to 2026-09-13) is preserved in the
[historical chronology](roadmap-history/liaisonscape-layout-and-auto-layout-
chronology.md#initial-layout-product-provider-frontier-and-presentation-
progression-2026-09-11-to-2026-09-13), with migration details in the
[bounded result](roadmap-initial-layout-product-frontier-history-migration1-
result.md). Its dated checkpoint status is historical; current planning and
operative constraints remain in the coordination authority below.

### LiaisonScape Dataset display-time performance follow-up (deferred)

The current end-to-end performance investigation is closed after the baseline
recorded in [LiaisonScape End-to-End Dataset Open
Baseline](liaisonscape/liaisonscape-end-to-end-performance-baseline.md). Retain its timing
seam, stage contracts, and profiler as observability for a later checkpoint.
Re-measure the actual Product after a substantial feature change or a change
in Dataset size or shape, then prioritize the bottleneck observed at that
time. The current evidence identifies presentation derivation, especially
route candidate generation and the first pass, as the present hot spot; it is
not a permanent optimization assumption. This deferred item does not reopen
snapshot reuse, authorize Product adoption, or start governed evidence work.

## Current Initial Layout / Parallel Presentation Coordination (2026-09-13)

This section is the current coordination authority for the adjacent
Initial-Layout and presentation research tracks. The checkpoint entries above
remain historical records and are not rewritten by this summary.

### 1. Parallel / Incident Bundle Geometry Attribution — RETUNE

The [parallel Edge / incident bundle retune result](liaisonscape/liaisonscape-parallel-edge-incident-bundle-presentation-retune1-result.md)
and its [human-review handoff](liaisonscape/liaisonscape-parallel-edge-incident-bundle-human-review-handoff.md)
establish that `parallel-pair-16` and `parallel-bundle-16` improve graph-space
slot spacing in machine evidence, but user review did not establish a reliable
readability improvement. The candidates remain unaccepted and must not inherit
G3 or Frontier human acceptance.

The next bounded attribution scope is to distinguish routing-side from
placement-side contribution using the same coordinates, mirrored or reordered
placement controls, and matched presentation evaluation. The bundle hypothesis
should cover, together rather than independently:

- internal minimum separation and stable ordering for 2+ parallel Relations;
- Relation-label occupied width, especially long labels on vertical routes;
- clearance from the outer ordinary incident Relation;
- obstacle avoidance that preserves bundle-side ordering and does not collapse
  the bundle; and
- reverse-direction physical-side behavior.

Fixed pair spacing is not a sufficient acceptance rule. A
Relation-label-aware bundle corridor is the working hypothesis, with ordinary
outer-Edge guard spacing and obstacle handling measured as part of the same
incident bundle. The Titanic JA observation that widening only the parallel
Relations can worsen the view when nearby ordinary Edges do not move is a
required counter-signal.

### 2. Structural Placement / Angular Ordering Retune — RETUNE, ADJACENT

The [obstacle-sensitive decomposition result](liaisonscape/liaisonscape-initial-layout-obstacle-sensitive-crossing-decomposition-audit1-result.md)
did not establish a quality-safe placement rule, but it did show that some
crossings are placement-sensitive while the Titanic parallel residual is not
explained by the current Node-obstacle predicate alone. Structural placement
research therefore remains adjacent to the parallel attribution track rather
than waiting for a complete parallel fix.

Its bounded scope is generic Node ordering or local swap evidence, including
neighbor angular separation around shared endpoints and the contribution of
Node angular distribution to parallel one-sided bending. Do not assume that
equal circular spacing is inherently correct, and do not hard-code a fixture
or object ID. Every candidate must be assessed jointly against crossings,
screen-space Node/label separation, route corridors, Relation-label
association, viewport fit, and runtime.

The two tracks may exchange attribution evidence: a route that changes under a
generic Node ordering control is placement-sensitive; a residual that persists
under matched placement controls remains routing/presentation-owned. Neither
track transfers routing, label, or Self-loop authority into Initial Layout.

### 3. Self-loop / Ordinary Edge Interaction — SEPARATE TRACK

Self-loop angle tendency and Self-loop/ordinary-Edge interaction remain an
independent routing/presentation track. They must be measured as residuals when
useful, but must not be included in the Parallel bundle objective or credited
to structural placement. No Self-loop routing fix is authorized by the
parallel or Initial-Layout checkpoints.

### 4. Initial Layout Re-baseline — BLOCKED / AFTER SUFFICIENT ATTRIBUTION

After enough matched evidence exists in the two adjacent tracks, re-baseline
the structural formulation on canonical and dense cases. Re-measure crossing
cause, Relation-label association, screen-space readability, viewport fit, and
runtime together. The re-baseline must decide whether to continue a single
Initial Placement formulation or separate fast Initial Placement from an
explicit high-quality Auto Layout responsibility.

This is a gated re-evaluation, not a requirement to finish all presentation
work first. Parallel bundle attribution and structural/angular retune may
proceed as neighboring research, while Initial Layout re-baseline waits for
their causal boundary evidence. Existing G3/Frontier user evidence is not
inherited by any new candidate.

### Current status and priority boundary

Product default/adoption remains `HOLD`; the production provider remains
`NOT ESTABLISHED`; and the Initial Layout Release blocker remains `OPEN`.
The current priority is bounded attribution plus parallel bundle geometry and
structural/angular retune. Self-loop remains separate. No Product behavior,
canonical Dataset, persistence semantics, or release state changes follow from
this roadmap organization. Completed Automatic Display production/acceptance
and Explicit Auto Layout implementation/acceptance progression is preserved in
the [LiaisonScape layout and Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md);
current acceptance, qualified disposition, diagnostics, and quality follow-ups
remain summarized in the current entries below.

### LiaisonScape Parallel / Incident Bundle Geometry Attribution 1 (2026-09-13)

**MIXED / RETUNE; no quality-safe presentation fix or Human acceptance.**
Parallel geometry and Structural Placement / Angular Ordering remain adjacent,
not serial; Self-loop interaction remains independent. No fixture-specific
rule, Product default, or provider is selected. See the [dedicated result](liaisonscape/liaisonscape-parallel-incident-bundle-geometry-attribution1-result.md).

### LiaisonScape Parallel Incident-Bundle Corridor Retune 2 (2026-09-13)

**RETUNE / NOT READY FOR HUMAN REVIEW.** The bounded label-aware corridor probe
did not establish a quality-safe whole-bundle rule. Parallel and Structural
Placement remain adjacent tracks; Self-loop remains independent. No routing
default or acceptance is selected. See the [dedicated result](liaisonscape/liaisonscape-parallel-incident-bundle-corridor-retune2-result.md).

### LiaisonScape Parallel / Incident Geometry Formulation Exploration 1 (2026-09-13)

**PIVOT / NOT READY FOR HUMAN REVIEW.** Local offset/corridor tuning was not
quality-safe; the bounded evidence supports continued investigation of an
atomic incident-allocation boundary, not an accepted presentation rule.
Parallel and Structural Placement remain adjacent; Self-loop remains
independent. See the [dedicated formulation result](liaisonscape/liaisonscape-parallel-incident-geometry-formulation-exploration1-result.md).

### LiaisonScape Parallel / Incident Routing Architecture Experiment 1 (2026-09-13)

**PIVOT / NOT READY FOR HUMAN REVIEW.** The diagnostic established a capacity-
negotiation boundary but did not produce a Human-reviewable candidate. Any
placement request remains evidence, not an adopted rule. Parallel and
Structural Placement remain adjacent; Self-loop remains independent. See the
[dedicated formulation result](liaisonscape/liaisonscape-parallel-incident-geometry-formulation-exploration1-result.md).

### LiaisonScape Endpoint-Sector / Port Allocation Architecture Experiment 2 (2026-09-13)

**RETUNE / NOT READY FOR HUMAN REVIEW.** The bounded endpoint-sector
architecture distinguishes feasible allocation from capacity shortage, but
Titanic EN remains a shortage case and no Product routing change is adopted.
Parallel and Structural Placement remain adjacent; Self-loop remains
independent. See the [dedicated Experiment 2 result](liaisonscape/liaisonscape-endpoint-sector-port-allocation-architecture-experiment2-result.md).

### LiaisonScape Endpoint Plan Candidate Compression + Capacity-Negotiated Placement Safety (2026-09-13)

**RETUNE / NOT READY FOR HUMAN REVIEW.** Candidate compression did not preserve
selected-plan identity across all controls; the request-driven placement
counterfactual remains unintegrated and unaccepted. No Product integration or
Human evidence is inherited. See the [dedicated capacity-safety result](liaisonscape/liaisonscape-endpoint-plan-candidate-compression-capacity-safety-experiment-result.md).

### LiaisonScape Endpoint Plan / Multi-Bundle Incident Allocation Experiment (2026-09-13)

**RETUNE / NOT READY FOR HUMAN REVIEW.** The bounded endpoint-plan contract
handles shared-endpoint bundle conflicts, but Titanic EN remains a routing
capacity-shortage case; its placement counterfactual is unreviewed evidence,
not a selected rule. See the [dedicated multi-bundle result](liaisonscape/liaisonscape-endpoint-plan-multi-bundle-incident-allocation-experiment-result.md).

### Adaptive Initial Placement Cascade — HYPOTHESIS / FUTURE EXPERIMENT (2026-09-13)

**HYPOTHESIS / FUTURE EXPERIMENT — inactive, not current execution policy.**
The bounded candidate-family probe did not retain all oracle-feasible plans;
request-driven placement remains a pure, unintegrated contract without
whole-graph or Actual Product acceptance. It does not change current execution
priority. See the [dedicated cascade and endpoint-plan safety result](liaisonscape/liaisonscape-adaptive-initial-placement-cascade-and-endpoint-plan-safety-result.md).

### Current Initial Layout execution order — Parallel Closure, Structural Retune, and Presentation Re-evaluation (2026-09-14)

The [Structural Placement / Angular Ordering Retune 1 result](liaisonscape/liaisonscape-structural-placement-angular-ordering-retune1-result.md)
now makes the near-term order explicit:

1. Parallel / Incident Architecture Closure: close the responsibility,
   feasibility, shortage, fallback, and request-response contracts without
   claiming Product visual-quality closure;
2. Structural Placement / Angular Ordering / Initial Node Placement, including
   ordinary-crossing reduction, Node separation, viewport fit, and generic
   responses to routing-issued capacity requests;
3. Parallel / Relation-label Presentation Re-evaluation using the improved Node
   geometry;
4. Self-loop Angle / Ordinary Edge Interaction as an independent
   routing/presentation track;
5. bounded Layout / Presentation Modularization readiness and behavior-
   preserving extraction, only where a responsibility contract is already
   stable;
6. Initial Layout Re-baseline on canonical, dense, and difficult topologies;
7. Initial Layout execution-architecture decision.

Parallel visual-quality follow-up is deliberately not a prerequisite for
Structural Placement once the Parallel architecture boundary is closed. After
Structural Placement, the re-evaluation must measure bundle lane separation,
physical-side ordering, side bias, Relation-label clearance and ownership,
outer ordinary clearance, obstacle influence, ordinary-route churn, endpoint
capacity, and long EN/JA label behavior. Only residuals that remain under the
improved geometry should be treated as Parallel / Relation-label Product
quality work. Self-loop follows that re-evaluation and remains independent.

### Future Layout / Presentation Modularization plan (2026-09-14)

The current research is separating Parallel / Incident Bundle, Structural
Placement / Angular Ordering, Self-loop / Ordinary Edge Interaction, Initial
Layout, ordinary Relation routing, Relation-label placement, and future
quality-gate / Adaptive Cascade orchestration. This records a future
responsibility-based modularization plan, not an authorization for a broad
rewrite.

The intended direction is to stabilize the responsibility and authority
boundaries experimentally first, then extract small pure contracts or modules
incrementally where behavior-preserving reuse is demonstrated. Experimental
algorithms must remain replaceable; modularization is for making responsibility
and authority explicit, not for prematurely fixing an algorithm or imposing a
file layout. Product behavior changes and research algorithm changes remain
separate checkpoints.

The conceptual seams to preserve for future evaluation include Initial /
Structural Placement, ordinary Relation Routing, Parallel / Incident
Allocation / Endpoint Plan, Relation-label Placement, Self-loop Routing,
Presentation Evaluation, capacity request/response contracts, and future
Initial Layout orchestration / quality gates. Each candidate should continue
through the accepted common Product Presentation responsibilities. Fast and
high-quality stages must not duplicate or fork those responsibilities; a
quality gate may reject or escalate a fast candidate when presentation defects
are evident.

This plan does not change the current priority: Parallel and Structural
Placement remain adjacent retune tracks, Self-loop remains independent, and
modularization readiness is considered only after those boundaries are
sufficiently established and before Re-baseline when a small extraction is
actually justified. Adaptive Cascade remains a later hypothesis. Product
default/adoption remains `HOLD`, the production provider remains `NOT
ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`.

Self-loop work is intentionally before both the deferred Adaptive Initial
Placement Cascade and the execution-architecture decision. This prevents
parallel, ordinary-route, and Self-loop presentation residuals from being
misattributed to Initial Layout. The Adaptive Cascade remains a
`Hypothesis / future experiment` and is not promoted in priority.

Structural Retune 1 remains `RETUNE / NOT READY FOR HUMAN REVIEW`: the
request-driven placement counterfactual is generic and machine-promising for
Titanic EN, but viewport, unrelated-corridor, interaction, and human-readability
evidence remain open. Product default/adoption remains `HOLD`, production
provider remains `NOT ESTABLISHED`, and the Initial Layout Release blocker
remains `OPEN`.

The [General Crossing-Aware Placement 1 result](liaisonscape/liaisonscape-general-crossing-aware-placement1-result.md)
keeps this track at `RETUNE / NOT READY FOR HUMAN REVIEW`. Compact guarded-grid
placement restores viewport fit and screen-space Node separation but loses the
strong dense crossing signal; continuous compression of the strong topology
embedding preserves crossings but causes Node/label clearance defects. A clean
canonical crossing count also did not imply endpoint capacity: Lighthouse JA
reported an explicit endpoint-plan shortage. The next bounded placement work
must construct topology ordering, hard Node separation, endpoint capacity, and
coarse label corridors jointly. Parallel presentation re-evaluation remains
after a viable geometry candidate; Self-loop remains independent. Product
default/adoption is `HOLD`, production provider is `NOT ESTABLISHED`, and the
Initial Layout Release blocker is `OPEN`.

The [Joint-Constrained Crossing-Aware Placement 2 result](liaisonscape/liaisonscape-joint-constrained-crossing-aware-placement2-result.md)
closes continuous post-generation projection as `PIVOT / NOT READY FOR HUMAN
REVIEW`. Hard graph-space separation removed Node overlap, but viewport fit
still reduced screen separation; dense crossing retention was topology-
dependent; and cheap angular/corridor proxies had authoritative endpoint-plan
false-safe cases. The only remaining bounded single-placement hypothesis is a
discrete feasibility-first topology-cell/port assignment that reserves screen,
endpoint-sector, and coarse label-corridor capacity during construction. Its
state-space feasibility must be checked before deeper implementation. If it is
not small, proceed to the Initial Placement / explicit High-quality Auto Layout
responsibility decision instead of another projection retune. Parallel
presentation re-evaluation and Self-loop remain downstream independent tracks.
Product default/adoption remains `HOLD`, production provider remains `NOT
ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`.

The [Discrete Feasibility-First Structural Placement 1 result](liaisonscape/liaisonscape-discrete-feasibility-first-placement1-result.md)
now records the state-space gate as `PIVOT / NOT READY FOR HUMAN REVIEW`.
Canonical sparse cases stayed below 175 states per family, but Titanic reached
the 25,000-state cap for three families and every dense control returned no
feasible plan under the tested sector/corridor propagation. The next work must
not simply raise the cap or relax the guards. Investigate a narrower
decomposition with explicit capacity contracts only if its state space remains
small; otherwise advance the Fast Initial Placement plus explicit High-quality
Auto Layout responsibility decision. Product default/adoption remains `HOLD`,
production provider remains `NOT ESTABLISHED`, and the Initial Layout Release
blocker remains `OPEN`.

The [Narrow Graph Decomposition + Capacity Contract 1 result](liaisonscape/liaisonscape-narrow-decomposition-capacity-contract1-result.md)
records the first bounded decomposition audit as `B-LEANING / NOT READY FOR
HUMAN REVIEW`. Biconnected local components kept canonical local searches below
27 states and exposed explicit shared-endpoint demand, but Titanic and a
decomposable block-chain control still produced large local-search/finalist
products. Dense k7-7, one-relation-perturbed k7-7, k8-8, and symmetric ring
controls remained global cores rather than becoming falsely decomposable. The
evidence therefore does not establish a production-native single-placement
solution. A stronger boundary coordinator may be compared with the Fast
Initial Placement plus explicit High-quality Auto Layout responsibility split;
Adaptive Cascade remains a later hypothesis. Product-authoritative validation
remains the finalist gate, and no new Product candidate or provider was
adopted. Product default/adoption remains `HOLD`, production provider remains
`NOT ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`.

The [Parallel / Relation-label Presentation Re-evaluation 1 result](liaisonscape/liaisonscape-parallel-relation-label-presentation-reevaluation1-result.md)
records the post-Structural-Placement downstream audit as `RETUNE BOUNDARY
CONFIRMED / NOT READY FOR HUMAN REVIEW`. Improved geometry can reduce some
endpoint angular scarcity and side-bias cases, but fixed pair/bundle/corridor
spacing still trades internal lane and label clearance against outer ordinary
clearance, obstacle influence, ordinary-route churn, and Relation-label
ownership. Titanic EN retains endpoint-plan `capacity-shortage`; Titanic JA
retains obstacle and outer-gutter pressure; Apollo remains a no-parallel
control. The next bounded direction is group-level bundle allocation with
explicit label, outer-ordinary, obstacle, and endpoint-capacity checks under
the existing Product authorities. No new Product candidate, provider, or
default was adopted. The responsibility boundary is clear enough for the
independent Self-loop track to proceed, while Parallel / Relation-label
quality remains open. Product default/adoption remains `HOLD`, production
provider remains `NOT ESTABLISHED`, and the Initial Layout Release blocker
remains `OPEN`.

### LiaisonScape Self-loop Angle / Ordinary Edge Interaction 1 (2026-09-14)

The [Self-loop Angle / Ordinary Edge Interaction 1 result](liaisonscape/liaisonscape-self-loop-angle-ordinary-edge-interaction1-result.md)
confirms the Self-loop routing/presentation boundary but keeps Product quality
open as `NOT READY FOR HUMAN REVIEW`. The current implementation already has a
bounded 36-candidate, 10-degree full-circle angle search and a deterministic
radius hierarchy. It is not a fixed-angle rule. Its score, however, consumes
only foreign-Node pressure and preferred orientation; ordinary paths, peer
Self-loops, Node labels, final Relation labels, and viewport bounds are not
candidate inputs.

Lighthouse/Titanic EN/JA and symmetric, perturbed, isolated, and four-loop
fan-out controls showed ordinary clearance below about 2px in difficult cases,
peer-loop clearance near 1px, zero-degree incident gaps, and ordinary-route
churn when Self-loop paths entered occupied-path arbitration. An ordinary-first
control reproduced the same Self-loop geometry, so route order alone is not
established as the fix. A diagnostic enumeration found materially safer angles
inside the existing bounded domain, which supports a future Self-loop-local
angle/radius allocation probe but not a new production solver or spacing-only
retune.

Structural Placement can improve foreign-Node pressure and angular capacity but
does not own Self-loop routing, ordinary routing, or final labels. Parallel /
Relation-label follow-up remains open and was not changed. No new Human Review
candidate, Product provider, default/adoption decision, or knowledge-base
promotion was made; Product default/adoption remains `HOLD`, production
provider remains `NOT ESTABLISHED`, and the Initial Layout Release blocker
remains `OPEN`.

### LiaisonScape Self-loop-local Angle / Radius Capacity Allocation 1 (2026-09-14)

The [Self-loop-local Angle / Radius Capacity Allocation 1 result](liaisonscape/liaisonscape-self-loop-local-capacity-allocation1-result.md)
confirms that the existing 36-angle Self-loop domain can be searched with
bounded local capacity signals, but does not establish a production-native
allocator. Independent angle-only selection accepted `0/12` cases; a small
angle-plus-radius portfolio accepted only one isolated JA control; and an
owner-local group allocation accepted only isolated EN/JA controls. Canonical,
dense, symmetric, perturbed, and four-loop fan-out cases remained infeasible
under the provisional ordinary-path, peer-loop, label-envelope, viewport, and
route-churn contract.

The largest owner-local search was bounded at `1,296` screened combinations
and `24` final Product-authoritative evaluations, but canonical Lighthouse
arms still took approximately `4-6s` and fan-out arms approximately
`1.8-2.5s`. The evidence therefore separates bounded candidate count from
browser-native runtime: the expensive coupling is repeated Product route and
label presentation evaluation. No diagnostic fallback was accepted, no radius
policy or production selector was changed, and no new Product candidate
reached Actual Product smoke review. Self-loop responsibility separation is
confirmed but quality remains open; Parallel / Relation-label follow-up also
remains `OPEN`. Product default/adoption remains `HOLD`, production provider
remains `NOT ESTABLISHED`, and the Initial Layout Release blocker remains
`OPEN`.

### LiaisonScape Self-loop-local Capacity Allocation 1 — Runtime Evidence Correction 1 (2026-09-14)

The [Self-loop-local Capacity Allocation 1 — Runtime Evidence Correction 1 result](liaisonscape/liaisonscape-self-loop-local-capacity-runtime-correction1-result.md)
corrects the previous runtime measurement without changing the quality or
feasibility matrix. The original `runCase()` timers were read after later arms
had run, so angle-only included angle-plus-radius and owner-group work, while
angle-plus-radius included owner-group work. The corrected audit uses one
warm-up and three measured runs per baseline/arm, with median/p95 and phase
instrumentation; Node process startup and module loading are excluded.

Corrected Lighthouse medians are approximately `0.65-0.68s` for angle-only,
`0.99-1.01s` for angle-plus-radius, and `4.0s` for owner-group. Owner-group
cost is dominated by the largest owner-local cheap-screen Cartesian product
(`1,296` combinations, about `3.0s` in Lighthouse EN), not by the final
`24` Product-authoritative evaluations alone. Four-loop fan-out shows the same
screening dominance at approximately `1.3s` of a `1.66-1.68s` arm. The
quality result remains `0/12`, `1/12`, and `2/12` accepted respectively, so
the disposition is `previous quality conclusion unchanged; runtime statement
corrected only`. A future finalist-recall / dependency-reuse measurement may
be considered, but no production selector or Product candidate is adopted;
Human Review remains `NOT READY`, Product default/adoption remains `HOLD`,
production provider remains `NOT ESTABLISHED`, and the Initial Layout Release
blocker remains `OPEN`.

### LiaisonScape Self-loop Owner-local Finalist Recall + Dependency Reuse 1 (2026-09-14)

The [Self-loop Owner-local Finalist Recall + Dependency Reuse 1 result](liaisonscape/liaisonscape-self-loop-owner-local-recall-reuse1-result.md)
confirms a real finalist-recall shortage under the existing Product authority.
The study authoritatively evaluated all `72` single-loop candidates for each
of `32` loops and all `6^loop-count` retained owner-group combinations, for
`5,472` group combinations. The current top-6/top-24 policy omitted feasible
single-loop candidates in isolated EN/JA and omitted `8/15` feasible retained
group combinations in isolated JA. Best-plan recall was often true, but
Pareto recall fell to approximately `1.1-5.3%` for Lighthouse and fan-out.

The cheap screen also produced false confidence because it omits final label
envelopes: symmetric groups had `36/36` screen-pass combinations fail at the
authoritative boundary. A diagnostic owner-local reuse projection was exactly
equivalent in only `104/5,472` cases (`1.9%`); ordinary route equality alone
was not sufficient because Relation-label and Node-label outputs could change.
The full retained reference remains diagnostic and does not prove the excluded
`72^loop-count` full group domain. No production selector, provider, Product
candidate, or authority boundary was changed. Self-loop quality remains open,
Parallel / Relation-label remains `OPEN`, Human Review remains `NOT READY`,
Product default/adoption remains `HOLD`, production provider remains `NOT
ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`.

### LiaisonScape Self-loop Owner-local Recall-aware Pruning + Dependency Fingerprint 1 (2026-09-14)

The [Self-loop Owner-local Recall-aware Pruning + Dependency Fingerprint 1 result](liaisonscape/liaisonscape-self-loop-owner-local-recall-aware-pruning-dependency-fingerprint1-result.md)
corrects the preceding displayed-example aggregation: the actual single-loop
false-negative total is `30`, while the prior `24` was only the sum of capped
display arrays. The checkpoint evaluated all retained `6^loop-count` products
and all eight tractable 2-loop `72^2 = 5,184` full-domain references. Current
top-24 missed the full-domain best plan in every evaluated 2-loop group; in
isolated EN/JA it retained only `2/394` and `7/1,514` feasible plans, with
full-domain Pareto recall of zero. The 4-loop `72^4` domain was explicitly not
evaluated.

Hard-screen, pairwise, incremental, cheap-Pareto, failure-class-diverse, and
orientation/radius-diverse pruning did not establish a globally
false-negative-safe contract. Stage-specific routing, Relation-label,
Node-label, viewport, and semantic fingerprints were defined, but exact reuse
was eligible in only `104/5,472` retained-product cases and cannot be used as
pre-evaluation pruning. The disposition is `B-LEANING / FULL-DOMAIN RECALL
FAILURE / NOT READY FOR HUMAN REVIEW`; no Product candidate, provider,
default/adoption, or authority boundary changed. Product default/adoption
remains `HOLD`, production provider remains `NOT ESTABLISHED`, and the Initial
Layout Release blocker remains `OPEN`.

### LiaisonScape Responsibility-separated Initial Layout Re-baseline 1 (2026-09-14)

The [Responsibility-separated Initial Layout Re-baseline 1 result](liaisonscape/liaisonscape-responsibility-separated-initial-layout-rebaseline1-result.md)
establishes the current Product path as the re-baseline: current deterministic
Initial Placement followed by Product-authoritative routing, Relation-label,
Node-label, and viewport presentation. Across 21 canonical, dense,
symmetry/decomposition-sensitive, and presentation-sensitive cases, placement
was deterministic and very fast (roughly `0.03-0.22ms` median), while Product
presentation dominated runtime (roughly `19-41ms` on canonical and
`138-243ms` on dense diagnostic arms). Placement metrics and downstream
metrics are now explicitly separated.

The current path still has canonical/dense Node-overlap and structural-crossing
signals, but downstream residuals remain even without Node overlap: actual route
crossings, Relation-label clearance/route hits, dense endpoint pressure,
parallel lane pressure, and Self-loop/label interaction. The result is
`BASELINE ESTABLISHED / SINGLE-PATH QUALITY INSUFFICIENT / ARCHITECTURE
DECISION READY / NOT READY FOR HUMAN REVIEW`. It supports formally evaluating
Fast Initial Placement plus explicit High-quality Auto Layout, but does not
adopt it. Adaptive Initial Placement Cascade remains inactive. Product
default/adoption remains `HOLD`, production provider remains `NOT ESTABLISHED`,
and the Initial Layout Release blocker remains `OPEN`.

### LiaisonScape Product-authoritative Verification Execution / Budget — Canonical Current Planning Summary

The [Hybrid reconstruction pilot result](documentation-ia/roadmap-hybrid-reconstruction-product-verification-pilot-result1.md)
consolidates the current consequence of PV-01, PV-02, PV-05, and PV-08;
their dated checkpoint progression is preserved in the [Layout and Auto Layout
chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#product-verification-execution-budget-pilot-roadmap-source-snapshot-2026-09-25).

Fast deterministic Initial Placement plus explicit High-quality Auto Layout
remains a `PROVISIONAL EXECUTION DIRECTION`, not Product adoption. The
corrected lifecycle contract is closed for snapshot identity,
cancellation/staleness, preview isolation, accept/reject, revert, and explicit
persistence, but quality-solver readiness and Product integration remain
separate holds. The [corrected lifecycle authority](liaisonscape/liaisonscape-explicit-high-quality-auto-layout-operation-lifecycle-contract-closure1-result.md)
is separate from the [full verification authority](liaisonscape/liaisonscape-product-authoritative-full-verification-resumable-orchestration1-result.md).

Product-authoritative Route, Relation-label, and Node-label accumulator seams
and their full resumable orchestration have bounded exact-equivalence and
fail-closed evidence. This is execution evidence, not a Product-wide
performance SLA. The [tested scaling envelope](liaisonscape/liaisonscape-product-authoritative-verification-scaling-envelope-main-thread-viability1-result.md)
is limited to its named controls.

Product-wide verification budget and any hard production slice contract remain
`NOT ESTABLISHED`. The [scheduler authority](liaisonscape/liaisonscape-product-wide-verification-budget-scheduler-policy-study1-result.md)
remains diagnostic only; historical long-slice
attribution do not authorize a production scheduler, Worker provider, quality
solver, Product default, Adaptive Initial Placement Cascade, or Human Review
candidate.

Detailed dated progression remains available in the History unit and the
dedicated result documents. The current Initial Layout parent, its current
priority/boundary statements, and its compatibility-sensitive anchor remain.

### LiaisonScape Explicit High-quality Auto Layout Browser Execution Budget Study 1 (2026-09-14)

The [browser budget study](liaisonscape/liaisonscape-explicit-high-quality-auto-layout-browser-execution-budget-study1-result.md)
is retained as a current qualification boundary: the Worker/background path
remains a future hypothesis, while Product-authoritative verification and
preview budget closure remain unresolved.

Do not treat the measurements as a Product SLA or as adoption of a Worker,
quality solver, Product default, Adaptive Cascade, or Human Review candidate.
The dated browser evidence is preserved in the [Layout and Auto Layout
chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#product-verification-execution-budget-pilot-roadmap-source-snapshot-2026-09-25).

### LiaisonScape Product-authoritative Verification Interruptibility Design Study 1 (2026-09-14)

The [interruptibility study](liaisonscape/liaisonscape-product-authoritative-verification-interruptibility-design-study1-result.md)
supports a semantic stage seam, but intra-stage work remains a separate
qualification boundary. Any resumed work must preserve Product authority,
exact equivalence, and fail-closed no-partial-result behavior.

Historical stage timings and the dated next-step wording are preserved in the
[Layout and Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#product-verification-execution-budget-pilot-roadmap-source-snapshot-2026-09-25).

### Organic Relationship-Shaped Placement — HYPOTHESIS / FUTURE STRUCTURAL DIRECTION

The failed continuous projection and first discrete cell-assignment gate leave
an `Organic Relationship-Shaped Placement` hypothesis for later research. The
goal is not to make a graph look like a regular grid, ring, or random jitter;
it is to derive Node geometry from Relation topology, route/label capacity,
endpoint angular space, Node separation, and viewport constraints. Grid, ring,
cell, and sector structures may remain internal search scaffolds, but final
geometry must not be forced to preserve their artificial regularity. Any future
candidate must continue through the unchanged Product presentation and
endpoint-plan authorities and must be tested on canonical, dense, symmetric,
perturbed, disconnected, and label-length variants. This is a future
hypothesis, not a Product provider or adoption decision. Product
default/adoption remains `HOLD`, production provider remains `NOT ESTABLISHED`,
and the Initial Layout Release blocker remains `OPEN`.

### LiaisonScape Product-authoritative Relation-label Inner-loop Accumulator / Interruptibility 1 (2026-09-14)

The [Relation-label accumulator result](liaisonscape/liaisonscape-product-authoritative-relation-label-inner-loop-accumulator1-result.md)
establishes an equivalent ordered seam for the observed controls, while the
preferred slice is not uniform and the Product-wide verification budget is
still unestablished. This is not a Product SLA.

Detailed measurements and the dated progression remain in the [Layout and
Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#product-verification-execution-budget-pilot-roadmap-source-snapshot-2026-09-25).

### LiaisonScape Product-authoritative Node-label Inner-loop Accumulator / Interruptibility 1 (2026-09-14)

The [Node-label accumulator result](liaisonscape/liaisonscape-product-authoritative-node-label-inner-loop-accumulator1-result.md)
establishes an equivalent fail-closed seam for the observed controls. The
qualification is bounded to those controls; full orchestration and
Product-wide budget remain open.

Detailed measurements and the dated progression remain in the [Layout and
Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#product-verification-execution-budget-pilot-roadmap-source-snapshot-2026-09-25).

### LiaisonScape Product-wide Verification Budget Closure / Scheduler Policy Study 1 (2026-09-14)

The [scheduler policy study](liaisonscape/liaisonscape-product-wide-verification-budget-scheduler-policy-study1-result.md)
establishes exact policy equivalence and a promising diagnostic soft quota,
not a hard production budget. Keep Product-wide budget, production scheduler,
provider, Product integration/default, and Human Review boundaries open.

Policy measurements, cancellation trade-offs, and dated next-step wording are
preserved in the [Layout and Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#product-verification-execution-budget-pilot-roadmap-source-snapshot-2026-09-25).

### LiaisonScape Product-authoritative Verification Long-unit Attribution / Authority-preserving Micro-splitting 1 (2026-09-14)

The [long-unit attribution result](liaisonscape/liaisonscape-product-authoritative-verification-long-unit-attribution-micro-splitting1-result.md)
found current source steps short in the controlled runs, while historical
outlier attribution remained inconclusive. No arbitrary micro-split or
Product-wide budget is established by this evidence.

The source-step measurements and dated disposition remain in the [Layout and
Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#product-verification-execution-budget-pilot-roadmap-source-snapshot-2026-09-25).

### LiaisonScape Product-authoritative Verification Historical Long-slice Reproduction / Same-run Source-step Attribution 1 (2026-09-14)

The [same-run reproduction result](liaisonscape/liaisonscape-product-authoritative-verification-historical-long-slice-reproduction1-result.md)
did not reproduce the historical long slices and supports retaining the
one-edge, one-routed-edge, and one-Node seams without arbitrary micro-splits.
This does not establish a Product-wide budget or SLA.

The 60-run evidence and historical status wording remain in the [Layout and
Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#product-verification-execution-budget-pilot-roadmap-source-snapshot-2026-09-25).

compares current Fast Initial Placement with the existing joint-constrained,
bounded structural-frontier, and limited discrete feasibility-first candidate
families. Twelve canonical, dense, label-sensitive, Parallel/Self-loop, mixed,
and Product-control fixtures produced 39 bounded operations. Candidate
finalist evaluation used the current Product-authoritative presentation
source; cheap proxies were measured only as a diagnostic pre-screen model and
did not replace routing, Relation-label, Node-label, endpoint-plan, Parallel /
Incident, or Self-loop authority.

Twenty-four of 26 successful candidate operations improved the retained
Product metric vector/scalar ordering versus the current baseline. However,
cheap top-4 recall of the Product-best candidate was only `20/26` (`76.9%`),
with six false negatives. The frontier arm reached 22 candidates and up to
22 Product presentation evaluations, while discrete feasibility-first
produced no candidate on the dense `k7-7` representative. Repeat fingerprints
were deterministic on the representative checks.

Disposition: `B. QUALITY SOLVER FAMILY PROMISING BUT SCREENING UNSOLVED`.
Continue only with a bounded screening/formulation study that improves recall
and caps Product-authoritative finalist evaluation. Do not select a production
solver or provider, change Product defaults, activate Adaptive Cascade, or
advance Human Review. Keep Fast deterministic Initial Placement plus explicit
High-quality Auto Layout `PROVISIONALLY ADOPT`, quality solver `HOLD / NOT
ESTABLISHED`, Product integration/default `HOLD`, production provider `NOT
ESTABLISHED`, Adaptive Cascade `INACTIVE`, Human Review `NOT READY`, and the
Initial Layout Release blocker `OPEN`. Session log remains intentionally
unchanged.

### LiaisonScape Bounded Screening Formulation / Finalist Recall 1 (2026-09-14)

The [Bounded Screening Formulation / Finalist Recall 1 result](liaisonscape/liaisonscape-bounded-screening-finalist-recall1-result.md)
supports a bounded diagnostic reduction of finalist candidates, but recall is
not closed. The current planning consequence is:

- cheap-only production screening remains `NOT ESTABLISHED`;
- meaningful dense misses remain where cheap summaries do not distinguish
  materially different Product routing outcomes;
- the evidence does not establish a production selector, quality solver,
  Product default/integration, provider, or general quality closure;
- later probe and risk-gate work is a separate responsibility and does not
  retroactively close this screening boundary; and
- detailed K comparisons, fixture-level misses, timing/regret measurements,
  and dated progression are preserved in the [existing Layout and Auto Layout
  chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#liaisonscape-bounded-screening-formulation-finalist-recall-1-2026-09-14)
  and the dedicated result.

### LiaisonScape Bounded Multi-stage Product Probe / Dense Cheap-equivalence Closure 1 (2026-09-14)

The [Bounded Multi-stage Product Probe / Dense Cheap-equivalence Closure 1 result](liaisonscape/liaisonscape-bounded-multi-stage-product-probe1-result.md)
records a bounded one-probe diagnostic campaign over the existing candidate
families and Product-authoritative verification seam. The campaign is useful
evidence for diagnostic reduction, but it does not establish a production
selection policy.

The current planning consequence is:

- multi-stage selection remains `DIAGNOSTICALLY PROMISING / PRODUCTION
  INTEGRATION NOT ESTABLISHED`;
- cheap-only screening remains `HOLD / NOT ESTABLISHED`, and this campaign
  does not establish a quality solver, Product default/integration, production
  provider, Adaptive Cascade, visual acceptance, Human Review, SLA, or release
  readiness;
- the bounded one-probe result must remain subject to the separate G2-B4
  risk-gate, failure-closure, and probe-target stability qualification; and
- the detailed probe counts, candidate-evaluation totals, trigger/cost
  matrices, and dated campaign progression are delegated to the [dedicated
  result](liaisonscape/liaisonscape-bounded-multi-stage-product-probe1-result.md) and the
  [existing Layout and Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#liaisonscape-bounded-multi-stage-product-probe-dense-cheap-equivalence-closure-1-2026-09-14).

### LiaisonScape Boundary Equivalence-Class Product Completion / Cost Envelope 1 (2026-09-14)

The [Boundary Equivalence-Class Product Completion / Cost Envelope 1 result](liaisonscape/liaisonscape-boundary-equivalence-class-product-completion1-result.md)
records a bounded boundary-equivalence completion architecture. The current
planning consequence is:

- full boundary completion is `QUALITY CLOSED IN TESTED SET` only within the
  tested envelope;
- capped completion remains `NOT CLOSED`;
- the boundary-equivalence trigger is `DIAGNOSTICALLY SUPPORTED`, not a
  production selection policy;
- G2-B4 remains a separate live qualification with risk gate `OPEN` and
  probe target `NOT ESTABLISHED`; and
- cheap-only selector, quality solver, Product integration/default, provider,
  Product adoption, visual acceptance, Human Review, and release readiness
  remain unestablished or open.

Class definitions, cost/order matrices, failure-injection detail, candidate
counts, and dated progression remain in the [dedicated result](liaisonscape/liaisonscape-boundary-equivalence-class-product-completion1-result.md)
and the [existing Layout and Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#liaisonscape-boundary-equivalence-class-product-completion-cost-envelope-1-2026-09-14).

### LiaisonScape Independent Risk-Gate / Probe-Target Stability Validation 1 (2026-09-14)

The [Independent Risk-Gate / Probe-Target Stability Validation 1 result](liaisonscape/liaisonscape-independent-risk-gate-probe-target-stability1-result.md)
separates bounded fail-closed diagnostic safety from the still-open
risk-gate and probe-target qualification. The current planning consequence is:

- failed, timed-out, or nonzero-exit probes fail closed and cannot produce a
  partial or unverified selected result;
- generation-order sensitivity remains meaningful negative evidence, with
  target changes and returned dense misses under generation-index perturbation;
- independent controls still include meaningful misses, so the graph-derived
  risk gate remains `OPEN`;
- probe-target readiness remains `NOT ESTABLISHED`, and the multi-stage
  selector remains diagnostic-only rather than a production selection policy;
  and
- quality solver, Product integration/default, provider, Product adoption,
  Adaptive Cascade, visual acceptance, Human Review, SLA, and release
  readiness remain unestablished or open.

Perturbation matrices, independent-control detail, dated formulation, and
checkpoint progression remain in the [dedicated result](liaisonscape/liaisonscape-independent-risk-gate-probe-target-stability1-result.md)
and the [existing Layout and Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#liaisonscape-independent-risk-gate-probe-target-stability-validation-1-2026-09-14).

### LiaisonScape Production-shaped Quality Provider Execution / Browser Cost Envelope 1 (2026-09-14)

The [Production-shaped Quality Provider Execution / Browser Cost Envelope 1 result](liaisonscape/liaisonscape-production-shaped-quality-provider-execution-browser-cost-envelope1-result.md)
wraps the established diagnostic candidate generation, cheap K=4 screen, full
boundary completion, and current Product-authoritative verification in a pure
provider execution seam. The seam keeps the existing routing, Parallel /
Incident, endpoint-plan, Relation-label, Node-label, Self-loop, viewport, and
final Product selection authorities in place; it does not integrate App.tsx,
change Product defaults, or mutate Dataset/persistence semantics.

The Node campaign completed `34/34` operations and matched the fixed boundary
artifact's selected fingerprints on `34/34`, with `182` Product evaluations.
Cancellation, stale input, Product failure, and budget exhaustion failed
closed without exposing a partial result. Browser controls completed
deterministically, but the dense quality case took `2,317.7ms` and reached a
`251.6ms` maximum main-thread slice with a `255.8ms` interval gap; label-heavy
reached `54.9ms`. Product verification dominated the provider cost.

Disposition: `D. WORKER OR EXECUTION ARCHITECTURE STUDY REQUIRED`. Provider
execution semantics are diagnostically established, but dense multi-finalist
quality work is not main-thread-ready. Keep quality solver `HOLD / NOT
ESTABLISHED`, production provider `NOT ESTABLISHED`, Product integration/default
`HOLD`, Actual Product visual evaluation `NOT READY`, Human Review `NOT READY`,
Adaptive Cascade `INACTIVE`, and the Initial Layout Release blocker `OPEN`.
No Actual Product visual smoke check or Human Review was warranted. Session log
is synchronized in Session 0059.

### LiaisonScape Product Verification Execution Architecture Decision 1 (2026-09-14)

The [Product Verification Execution Architecture Decision 1 result](liaisonscape/liaisonscape-product-verification-execution-architecture-decision1-result.md)
traces the provider's dense main-thread blocker to synchronous whole-candidate
`deriveBoundedAutomaticPresentation` calls. Existing Product-authoritative
route, Relation-label, and Node-label accumulators materially improved the
main-thread boundary, but provider-shaped dense geometry retained load-sensitive
source units.

Worker-isolated current Product verification preserved every verified
presentation signature, Product metric, and selected fingerprint across
canonical, dense, and label-heavy controls. In the fixed dense run, maximum
main-thread slice fell from `1,893.4ms` synchronous to `14.6ms` Worker;
cancellation terminated without receiving or exposing a result. Total wall
time remained load-sensitive, and per-candidate Worker startup/transport added
cost on smaller cases.

Disposition: `B. WORKER PRODUCT VERIFICATION ARCHITECTURE ESTABLISHED IN
TESTED ENVELOPE`. This establishes an execution responsibility boundary, not a
production provider or latency SLA. Keep quality solver `HOLD / NOT
ESTABLISHED`, production provider `NOT ESTABLISHED`, Product integration/default
`HOLD`, Human Review `NOT READY`, Adaptive Cascade `INACTIVE`, and the Initial
Layout Release blocker `OPEN`. Actual Product visual evaluation is `READY FOR
NEXT CHECKPOINT`; it was not performed here. Session log is synchronized in
Session 0060.

### LiaisonScape Worker Product Metric Parity / Actual Product Visual Candidate Gate 1 (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-worker-product-metric-parity-actual-product-visual-candidate-gate1-result.md)
confirms that the prior Worker response used a diagnostic-only score rather
than the complete HQ research metric. A forward pure metric seam now supplies
both synchronous and Worker verification without moving Product presentation
authority or duplicating Worker logic.

Across 28 canonical, dense cheap-equivalent, and label-heavy finalists,
presentation signatures had zero mismatches; selected complete metrics and
fingerprints also matched. Worker isolation remained materially better on the
dense main-thread boundary, while 30.8-second wall time kept latency open.

Disposition: `D. WORKER PRODUCT PARITY ESTABLISHED / VISUAL EVALUATION
INCONCLUSIVE`. The Actual Product Lighthouse surface was inspected, but the
verified HQ candidate could not be shown because no non-adopting preview seam
exists. Keep visual quality and Human Review `NOT READY`, quality solver `HOLD
/ NOT ESTABLISHED`, production provider `NOT ESTABLISHED`, Product
integration/default `HOLD`, and the Initial Layout Release blocker `OPEN`.
The next checkpoint is a bounded, operation-local Actual Product candidate
preview seam and representative visual smoke inspection.

### LiaisonScape Operation-local Actual Product HQ Candidate Preview / Visual Smoke 1 (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-operation-local-actual-product-hq-candidate-preview-visual-smoke1-result.md)
establishes a development-only, non-adopting preview at the App's Node-geometry
input. It leaves session positions, Dataset/persistence, dirty state, coordinate
ownership, Save Coordinates, and manual authorities unchanged while reusing the
entire current Product presentation pipeline.

Actual Product smoke covered three exact prior Worker-selected fingerprints.
Canonical was stable but showed no material improvement. Dense and Japanese
label-heavy candidates failed because label crowding and route/label association
remained visually unacceptable at fitted scale.

Disposition: `B. PREVIEW ESTABLISHED / METRIC-VISUAL QUALITY GAP FOUND`.
Keep visual quality and Human Review `NOT READY`, quality solver `HOLD / NOT
ESTABLISHED`, production provider `NOT ESTABLISHED`, Product integration/default
`HOLD`, and the release blocker `OPEN`. Next investigate metric/candidate
formulation against the visual failures; retain Self-loop as a missing control.

### LiaisonScape HQ Metric / Candidate Formulation Visual Failure Audit 1 (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-hq-metric-candidate-formulation-visual-failure-audit1-result.md)
classifies the failure as `C. METRIC AND CANDIDATE FORMULATION BOTH
INSUFFICIENT`. The current score omits Relation/Relation and Node/Relation label
overlap, foreign-route/Relation-label collision, ownership ambiguity, and
post-fit readability. Existing pools contain lower-risk candidates, but bounded
Actual Product comparison shows that even those candidates remain unacceptable
for dense and Japanese long-label cases.

Keep the quality solver and provider `NOT ESTABLISHED`, Product
integration/default `HOLD`, Human Review `NOT READY`, and the Initial Layout
Release blocker `OPEN`. Next test one explicit label-capacity candidate
formulation against the fixed diagnostic vectors; do not start another broad
solver search or retune a production scalar from these observations alone.

### LiaisonScape Explicit Label-Capacity Candidate Formulation Probe 1 (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-explicit-label-capacity-candidate-formulation-probe1-result.md)
tests one bounded component-local expansion and repacking formulation derived
from actual Product label bounds and Relation demand. It reduces dense label
overlap from `13` to `1` and Japanese label-heavy overlap from `4` to `0`, with
lower foreign-route pressure and no obvious control regression.

Actual Product smoke confirms visible improvement but not acceptance quality.
Dense output falls to `0.375` fit and remains difficult to read; long Japanese
Relation-label ownership also remains unresolved. Disposition:
`B. LABEL-CAPACITY SIGNAL VALID / FORMULATION NEEDS REFINEMENT`. Keep quality
solver `HOLD / NOT ESTABLISHED`, production provider `NOT ESTABLISHED`, Product
integration/default `HOLD`, Human Review `NOT READY`, and the release blocker
`OPEN`. Refine a bounded extent/aspect, post-fit scale, and ownership-capacity
contract before any wider solver or adoption work. Session 0064 records this
checkpoint.

### LiaisonScape Bounded Label-Capacity / Screen-Scale / Ownership Formulation Refinement 1 (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-bounded-label-capacity-screen-ownership-refinement1-result.md)
adds a three-variant, diagnostic-only local-grouping/2D-packing formulation
with a baseline-relative fit budget and continuous ownership margin. Japanese
multi-component output improves from fit `0.537` to `0.601` with foreign-route
hits `44` to `31`; dense output improves fit `0.481` to `0.635` and overlap
`13` to `6`, but foreign-route hits worsen `46` to `74`.

The single-connected 14/49 control is decisive: overlap improves `69` to `56`,
but fit falls below budget and foreign-route hits worsen `186` to `285`.
Actual Product smoke confirms the connected core remains unreadable. The
checkpoint is classified `D. MULTI-COMPONENT BENEFIT CONFIRMED /
SINGLE-COMPONENT FORMULATION OPEN`. Keep quality solver `HOLD / NOT
ESTABLISHED`, production provider `NOT ESTABLISHED`, Product integration
`HOLD`, Human Review `NOT READY`, and the release blocker `OPEN`. Session 0065
records the checkpoint; the next bounded question is Product-authoritative
Relation-label ownership/corridor feedback, not stronger expansion or
Adaptive Cascade.

### LiaisonScape Occupied-Geometry Feasibility-First Extent Growth 1 (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-occupied-geometry-feasibility-first-extent-growth1-result.md)
tests a bounded Product-presentation feedback loop instead of another fixed
expansion multiplier. Actual Node body, Node-label, and Relation-label bounds
are measured after each presentation pass; deterministic penetration
displacement drives at most 2, 4, or 8 geometry feedback sweeps. Viewport fit,
fit budget, and fit scale remain camera diagnostics only.

Dense occupied overlap falls `5 -> 2`, Japanese `1 -> 0`, and the
single-connected control `28 -> 10`; connected visual label overlap falls
`12 -> 3` and foreign-route hits `225 -> 160`. Node-body overlap is zero, but
single-connected remains not hard-feasible with label/body and label/label
collisions. Canonical, Parallel/Incident, and Self-loop controls remain
occupied-feasible.

Actual Product smoke at `36%` reset overview and `78%` native zoom confirms
that the connected candidate still has crowded long Relation-label and route
association. The attempted pan was not accepted because browser automation
timed out.

Disposition: `B. GEOMETRY CAPACITY FURTHER IMPROVES / RELATION OWNERSHIP
RESIDUAL CONFIRMED`; the single-connected hard-feasibility boundary remains
open. Keep quality solver `HOLD / NOT ESTABLISHED`, production provider `NOT
ESTABLISHED`, Product integration/default `HOLD`, Human Review `NOT READY`,
Adaptive Initial Placement Cascade inactive, and the Initial Layout Release
blocker `OPEN`. Session 0067 records the checkpoint. Continue with a narrow
bounded owner-aware feasibility study or make the residual an explicit Product
presentation boundary; do not transfer routing/labels or advance Human Review.

### LiaisonScape Infinite-Canvas Local-Density / Extent-Growth Re-baseline 1 (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-infinite-canvas-local-density-extent-growth-rebaseline1-result.md)
re-baselines the previous fit interpretation against the Product owner's
effectively infinite canvas model. `fitGraphView(..., 800, 500)`, `fitScale`,
`fitBudget`, and `extentScale` remain historical or camera diagnostics; the new
bounded candidate permits label-demand-driven extent growth without a viewport
fit clamp and retains actual Product label geometry and local grouping.

The single-connected 14/49 control improves from label-overlap `56` to `12`
and grows from `420 x 466` to `765 x 739`; Node-label bounds overlap is zero.
Dense and Japanese multi-component cases also improve overlap, while Parallel
and Self-loop controls show no obvious regression. The connected case still
has `225` foreign-route/Relation-label hits and is visibly crowded at 82%
Product zoom.

Disposition: `C. SINGLE-CONNECTED CAPACITY IMPROVES WHEN EXTENT MAY GROW /
PRODUCT ROUTE-LABEL RESIDUAL REMAINS OPEN`. Keep quality solver `HOLD / NOT
ESTABLISHED`, production provider `NOT ESTABLISHED`, Product integration/
default `HOLD`, Human Review `NOT READY`, Adaptive Initial Placement Cascade
inactive, and the Initial Layout Release blocker `OPEN`. Session 0066 records
the checkpoint. Continue with bounded Product-authoritative route/label
ownership work; do not treat the smoke check as formal acceptance or begin
Adaptive Cascade.

### LiaisonScape Initial Layout Release-Bar / Hub Publication Re-prioritization 1 (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-initial-layout-release-bar-hub-publication-reprioritization1-result.md)
redefines the Hub/publication bar without claiming that Initial Layout research
is complete. The release-critical sequence is now:

1. `Representative Sample Release-Quality Acceptance`;
2. `General / Complex Dataset Practicality Gate`.

The first gate is the next checkpoint. The second gate measures unknown or
user-provided Dataset practicality with Fast Initial Placement and, where
needed, an explicit High-quality Auto Layout operation. A target described as
`roughly / on the order of 10 seconds` remains a practical target, not a hard
browser-independent SLA.

Repository evidence distinguishes the eight canonical e2r-spec sample variants,
the two Lighthouse LiaisonScape compatibility mirrors, and the development-only
Titanic/Apollo/Lighthouse acceptance-fixture seam. Ashen Crown is not exposed by
the normal LiaisonScape sample loader and must not be silently marked accepted.
Representative Sample acceptance is `OPEN / NOT CLOSED`; the General / Complex
Dataset gate is `NOT STARTED AS A RELEASE GATE`.

Unresolved single-connected stress quality, Relation-label ownership,
occupied-geometry convergence, HQ metric refinement, solver portfolios, and
Adaptive Initial Placement remain post-release or later-quality research unless
ordinary representative evidence shows a release failure. Quality solver
remains `HOLD / NOT ESTABLISHED`, production provider `NOT ESTABLISHED`,
Product integration/default `HOLD`, Human Review `NOT READY`, and the Initial
Layout Release blocker remains `OPEN`. Session 0068 records this clarification.

### LiaisonScape Representative Sample Release-Quality Acceptance 1 (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-representative-sample-release-quality-acceptance1-result.md)
inspected the Actual Product surface rather than a diagnostic renderer.
Lighthouse EN/JA were opened through the normal Product sample path; Titanic
EN/JA and Apollo EN/JA were opened through the existing development-only
acceptance-fixture seam. All observed cases rendered usable graphs without
blank/crash/navigation failure, obvious Node-body overlap, or mojibake.

Titanic and Apollo retain bounded central route/Relation-label crowding, so
their classification is `PASS WITH BOUNDED SAMPLE FOLLOW-UP`. Lighthouse is
`PASS WITH NON-BLOCKING OBSERVATION`. Apollo JA reload was confirmed, but
same-payload Save/reopen remains unconfirmed. Ashen Crown is canonical in
e2r-spec but has no current normal Product or acceptance-fixture acquisition
path, therefore it is `NOT EVALUATED`.

Gate 1 overall is `C. PARTIAL / ACQUISITION-EVIDENCE GAP`; it is not closed and
does not advance Gate 2. The next bounded question is whether an
acceptance-only Ashen Crown seam is warranted. Do not add Ashen Crown to the
normal Product sample loader solely for this acceptance. Quality solver,
production provider, Product integration/default, Human Review, and the
Initial Layout Release blocker remain unchanged. Session 0069 records the
matrix; deep layout research and General / Complex Dataset Practicality remain
deferred.

### LiaisonScape Representative Sample Release-Quality Acceptance 2 - Ashen Crown Acquisition Evidence (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-representative-sample-release-quality-acceptance2-ashen-crown-result.md)
extends only the development-only canonical acceptance seam with Ashen Crown
EN/JA. Both coordinate-less canonical files were validated and inspected on
the Actual Product surface. English and Japanese opened and reloaded as stable
10-Entity / 17-visible-Relation graphs, with no blank/crash/navigation failure,
obvious Node-body overlap, or mojibake. Native Product zoom supported local
inspection. Central route/Relation-label density remains a bounded
non-blocking observation.

Gate 1 is now `B. ACCEPTED WITH BOUNDED NON-BLOCKING SAMPLE FOLLOW-UPS`.
Same-payload Save/reopen remains a separate unclaimed persistence check and was
not required for this acquisition/rendering gate. Gate 2, `General / Complex
Dataset Practicality`, remains not started and was not begun in this
checkpoint. The normal sample loader, Product authority, production provider,
quality solver, Human Review state, and Initial Layout Release blocker remain
unchanged. Session 0069 records this continuation.

### LiaisonScape General / Complex Dataset Practicality Gate 1 (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-general-complex-dataset-practicality-gate1-result.md)
tests five deterministic coordinate-less controls through the current Fast
`settleInitialPlacement` path and the existing explicit 12-iteration
`solveAutoLayout` path. Fast placement is finite and deterministic in the
tested envelope, and the Actual Product Ashen Crown smoke opened a usable
10-Entity / 17-visible-Relation graph without blank/crash/navigation failure,
mojibake, or obvious Node-body overlap.

The diagnostic matrix shows that placement itself remains sub-millisecond;
presentation, route, and label work dominate dense and connected cases. Dense
and connected controls retain substantial crossing and route/label pressure,
and the HQ rows can introduce body overlap. More importantly, the Actual
Product More -> Auto Layout smoke completed but produced obvious central
Node-body overlap, so the existing HQ action cannot be treated as a
release-quality several-second fallback. Visual evidence stopped at that
gross defect; no Human Review candidate was created.

Gate 2 is therefore `C. FAST INITIAL PLACEMENT PRACTICALITY ESTABLISHED / HQ
PRACTICALITY AND QUALITY NOT ESTABLISHED`. Keep quality solver `HOLD / NOT
ESTABLISHED`, production provider `NOT ESTABLISHED`, Product
integration/default `HOLD`, Human Review `NOT READY`, Adaptive Initial
Placement Cascade inactive, and the Initial Layout Release blocker `OPEN`.
Do not begin another broad solver search or adopt a provider from this gate.
Session 0070 records the new objective; the next bounded question is an
explicit HQ execution/quality contract, only if continued.

### LiaisonScape General / Complex Dataset Practicality Gate 2 - HQ Candidate Reconnection (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-general-complex-dataset-practicality-gate2-hq-candidate-reconnection-result.md)
separates three previously conflated roles. Fast Initial Placement is the
coordinate-less startup path. The current Product More -> Auto Layout action
is the old `solveAutoLayout(input)` control, with source default
`DEFAULT_ITERATIONS = 12`; it is not the recent HQ research candidate. The
recent candidate reconnected here is the bounded
Infinite-Canvas Local-Density / Extent-Growth -> Occupied-Geometry
Feasibility-First lineage.

The recent candidate improves occupied geometry without changing Product
authority: dense occupied overlap `5 -> 2`, Japanese `1 -> 0`, and
single-connected `28 -> 10`; however single-connected remains hard-infeasible
and retains route/label ownership residuals. Through the existing Actual
Product operation-local seam, canonical reset view was stable, while dense
14/49 at 47% overview remained visibly crowded and difficult to associate.
The smoke stopped at that failure; no Human Review candidate was created.

The recent candidate's per-case generation and end-to-end wall-time envelope
were not recorded, and prior Worker timing belongs to a different finalist
campaign. Therefore no candidate meets both the release-oriented quality and
practicality bar. Gate 2 is classified `D. NO CURRENT RECENT HQ CANDIDATE
MEETS RELEASE PRACTICALITY`. Keep quality solver `HOLD / NOT ESTABLISHED`,
production provider `NOT ESTABLISHED`, Product integration/default `HOLD`,
Human Review `NOT READY`, Adaptive Initial Placement Cascade inactive, and
the Initial Layout Release blocker `OPEN`. Do not reinterpret the old Product
button's failure as a failure of the entire research lineage, and do not
replace or adopt the button in this checkpoint. Session 0071 records the
reconnection.

### LiaisonScape General / Complex Dataset Practicality Gate 3 - Bounded HQ Readability / Execution Budget (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-general-complex-dataset-practicality-gate3-bounded-hq-readability-execution-result.md)
selects one existing HQ research family: Infinite-Canvas Local-Density /
Extent-Growth followed by Occupied-Geometry Feasibility-First feedback. No
new solver family, provider, Product default, or Adaptive Cascade was added.

The family improves occupied geometry and preserves bounded canonical,
Parallel, and Self-loop controls. Product timing for replayed candidates was
also measured through the existing authority: presentation-derived time was
`79.4ms` canonical, `495.1ms` dense, and `207.8ms` long-label; dense graph
stable was `986.5ms`. These are verification/replay measurements only. The
candidate-generation and complete user-visible operation budget remain
unmeasured, and dense Actual Product readability remains below the
release-facing bar.

Gate 2 remains open with prior classification D. Gate 3 is classified `C.
BOUNDED HQ DIRECTION PROMISING / RELEASE READABILITY AND EXECUTION BUDGET NOT
CLOSED`. The minimal blocker is now one complete bounded HQ operation that
has both credible candidate-generation/verification/total timing and readable
Actual Product route/Relation-label association for ordinary or moderate
complex coordinate-less data. Keep quality solver `HOLD / NOT ESTABLISHED`,
production provider `NOT ESTABLISHED`, Product integration/default `HOLD`,
Human Review `NOT READY`, Adaptive Initial Placement Cascade inactive, and
the Initial Layout Release blocker `OPEN`. Session 0072 records this
checkpoint.

### LiaisonScape Historical Best Candidate Re-comparison 1 - Past Visual Winners vs Current HQ Lineage (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-historical-best-candidate-recomparison1-result.md)
recompares the historical `post-structural-relaxation-v1`, Global Placement 3,
Frontier-12, joint-constrained, and discrete structural lineages with the
current Explicit Label-Capacity and Infinite-Canvas -> Occupied-Geometry
lineage. The audit distinguishes historical artifact replay from
current-source reconstruction and does not inherit historical Human Review
evidence.

Current source reconstructs the Post lineage on Lighthouse with zero routed
crossings, zero label hits, zero label-near count, zero Node overlap, and an
extent of `633 x 401`. The historical Actual Product comparison had previously
preferred Post over the old current baseline and generic predecessor on that
same scoped surface. Current structural arms retain strong canonical topology
signals, while current Occupied-Geometry improves occupied label/body
collisions on its own difficult synthetic controls. Dense current HQ Actual
Product smoke still shows crowded Relation-label ownership.

The comparison is formally `D. COMPARISON INCONCLUSIVE / TRADE-OFF SIGNAL
RECORDED`: historical canonical fixtures and current capacity fixtures do not
share exact topology/materialization, so equal node/edge counts are not treated
as equivalence and no fair cross-lineage winner is claimed. This records a
research trade-off between structural ordering/crossing quality and local
spacing/label capacity, not a portfolio or selector decision. No new solver,
provider, Product default, Adaptive Cascade, or Human Review candidate is
created. Gate 2 remains `OPEN`, quality solver remains `HOLD / NOT ESTABLISHED`,
production provider `NOT ESTABLISHED`, Product integration/default `HOLD`,
Human Review `NOT READY`, and the Initial Layout Release blocker `OPEN`.
Session 0073 records this new objective.

### LiaisonScape Common-Fixture Cross-Lineage Comparison 1 - Historical Structural Candidates vs Current Capacity Candidates (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-common-fixture-cross-lineage-comparison1-result.md)
materializes the historical structural lineages (as current-source
reconstructions) and the current Label-Capacity / Infinite-Canvas /
Occupied-Geometry lineages on the same bounded Dataset topology, Entity/
Relation IDs, labels, and current Product presentation evaluator. Lighthouse
EN, Apollo JA, dense K7x7, and a Parallel/Self-loop control were covered.

The common fixture removes the prior cardinality/materialization confound.
Structural reconstructions retain the strongest canonical crossing and
ordering signal. Capacity reconstructions do not establish a general spacing,
occupied-geometry, or long-label win on the same rows; dense remains globally
coupled with high crossing, label-near, and foreign-route pressure. An Actual
Product smoke reached the real App: the structural Post reconstruction was
inside the viewport, while the same-fixture Label-Capacity candidate clipped
right/lower Nodes. The smoke was not formal acceptance and no Human Review
candidate was created.

The checkpoint is `D. COMMON-FIXTURE COMPARISON MATERIALIZED / HISTORICAL
REPLAY STILL INCOMPLETE`: old historical artifact replay on this exact new
topology is not established, and no cross-lineage winner or portfolio
selector is adopted. Gate 2 remains `OPEN`, quality solver remains `HOLD /
NOT ESTABLISHED`, production provider `NOT ESTABLISHED`, Product
integration/default `HOLD`, Human Review `NOT READY`, Adaptive Cascade
inactive, and the Initial Layout Release blocker `OPEN`. Session 0074 records
this new objective.

### LiaisonScape Structural-Seeded Capacity Refinement 1 - Strong Structural Geometry + Capacity / Occupied Feedback (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-structural-seeded-capacity-refinement1-result.md)
applies the existing Label-Capacity, Infinite-Canvas, and Occupied-Geometry
diagnostics after an existing structural seed on the exact common fixtures.
Frontier is the primary seed because it retains canonical zero-crossing
signals with materially fewer current-source Product evaluations than Post;
Post remains the quality reference/control.

The bounded preservation contract requires component-local pair ordering to
remain unchanged, crossings not to increase, and Node-body overlap not to
increase. Lighthouse permits Frontier + Label-Capacity under this contract;
Parallel/Self-loop permits Frontier + Infinite-Canvas + Occupied-Geometry.
Apollo has no preserving Frontier refinement, and Dense rejects all tested
capacity stages. The successful Lighthouse refinement expands extent to about
`1016 x 811`; Actual Product Reset view recovers the overview around 35%, but
Relation-label readability at that overview remains open.

The checkpoint is `B. FRONTIER-SEEDED HQ DIRECTION PROMISING / PRODUCT
READABILITY OPEN`. It establishes a diagnostic stage boundary, not a general
pipeline, solver, portfolio selector, provider, Product default, Adaptive
Cascade, or Human Review candidate. Gate 2 remains `OPEN`, quality solver
remains `HOLD / NOT ESTABLISHED`, production provider `NOT ESTABLISHED`,
Product integration/default `HOLD`, Human Review `NOT READY`, Adaptive
Cascade inactive, and the Initial Layout Release blocker `OPEN`. Session 0075
records this new objective.

### LiaisonScape Frontier Actual-Product Visual Sweep 1 - Public Samples and Research Stress Fixtures (2026-09-15)

The [checkpoint result](liaisonscape/liaisonscape-frontier-actual-product-visual-sweep1-result.md)
reconstructs the current Frontier-12 candidate once per row and inspects it
through the real Product `App` surface using a disposable, non-adopting
operation-local preview seam. Ten repository-verified public EN/JA samples
(Lighthouse, Apollo 11, Berlin Wall, Ashen Crown, and Titanic) plus dense
`k7-7`, `k6-8`, `k8-8`, a Japanese long-label control, and a
Parallel/Self-loop control were materialized. Each row retained 12 bounded
candidates and 13 Product presentation evaluations; the exact selected
geometry and fingerprints are persisted in the companion LiaisonScape
artifact.

Actual Product smoke found public samples generally usable for a bounded user
visual comparison. Berlin and Lighthouse were clear at local inspection
scale; Apollo and Ashen retain local Relation-label/route crowding, and
Titanic needs local zoom because fit overview scale becomes small. The
Parallel/Self-loop control showed separated lanes, reverse-side distinction,
and a visible self-loop. Dense and long-label controls remain visibly coupled
and non-release-readable, so Frontier alone does not close Product
presentation capacity.

The checkpoint is classified `FRONTIER PUBLIC-SAMPLE VISUAL COMPARISON READY /
COMPLEX PRODUCT READABILITY OPEN`. It is not formal acceptance and creates no
Human Review candidate. Keep quality solver `HOLD / NOT ESTABLISHED`,
production provider `NOT ESTABLISHED`, Product integration/default `HOLD`,
Human Review `NOT READY`, Adaptive Cascade inactive, and the Initial Layout
Release blocker `OPEN`. Do not start another broad Structural Placement search
or geometry-only retune from this smoke result. Session 0076 records this new
objective.

### LiaisonScape Frontier User Visual Comparison Handoff 1 - Public Samples and Complex Research Fixtures (2026-09-15)

The [user visual comparison handoff](liaisonscape/liaisonscape-frontier-user-visual-comparison-handoff1.md)
opens the already materialized current-source Frontier candidate through the
development-only Actual Product preview seam. It supplies exact URLs for the
ten public EN/JA samples and five research/stress controls, preserves the
selected Frontier family and diagnostic elapsed time per fixture, and leaves a
small user judgment vocabulary: `GOOD`, `ACCEPTABLE WITH ISSUE`, `NOT GOOD`,
or `NOT REVIEWED`.

This is a stop point, not a solver checkpoint. No Frontier refinement,
Label-Capacity or Occupied-Geometry change, new solver, scoring retune,
routing/label fix, viewport policy, provider, default, or acceptance result
should be added before the user judgment is recorded. Gate 2 remains `OPEN`,
quality solver remains `HOLD / NOT ESTABLISHED`, production provider remains
`NOT ESTABLISHED`, Product integration/default remains `HOLD`, Human Review
remains `NOT READY`, Adaptive Cascade remains inactive, and the Initial Layout
Release blocker remains `OPEN`. Session 0077 records this new objective.

### LiaisonScape Frontier vs G3 vs Post Current-Source Actual Product Comparison 1 (2026-09-15)

The [comparison handoff](liaisonscape/liaisonscape-frontier-g3-post-current-source-comparison1-handoff.md)
materializes Frontier, Global Placement 3, and Post from current source on the
same Lighthouse EN/JA, Apollo 11 EN/JA, Titanic, Japanese long-label, and
dense `k7-7` rows. All candidates use the same current Product surface and
remain read-only, non-adopting previews. The companion LiaisonScape artifact
records selected family, complete geometry, fingerprint, elapsed time,
candidate count, Product presentation evaluation count, and metrics per
candidate.

G3 is fingerprint-equivalent to Frontier on the canonical public rows and
therefore supplies no distinct visual geometry signal. Post is generally more
compact and easier to inspect on Lighthouse/Apollo smoke checks, but retains
route/Relation-label association residuals; the Japanese long-label control
remains capacity-bound. Dense `k7-7` selects the same geometry for G3 and Post
and remains non-release-readable. These are Codex smoke observations only;
the checkpoint deliberately stops for user visual judgment and does not name a
winner.

The checkpoint is classified `CURRENT-SOURCE THREE-WAY ACTUAL PRODUCT
COMPARISON READY / WAITING FOR USER JUDGMENT`. It is not formal acceptance and
creates no Human Review candidate. Gate 2 remains `OPEN`, quality solver
remains `HOLD / NOT ESTABLISHED`, production provider remains `NOT
ESTABLISHED`, Product integration/default remains `HOLD`, Human Review
remains `NOT READY`, Adaptive Cascade remains inactive, and the Initial Layout
Release blocker remains `OPEN`. Session 0078 records this new objective.

### LiaisonScape Topology-Aware Free-Form Crossing-Minimizing Auto Layout Experiment 1 (2026-09-15)

The [experiment result](liaisonscape/liaisonscape-topology-aware-free-form-crossing-minimizing-auto-layout-experiment1-result.md)
tests a diagnostic-only continuous placement line that derives topology-aware
components, degree/hub roots, BFS layers, bridge signals, and bounded local
relaxation without final grid or circle projection. Six candidates per row
were evaluated through the existing Product presentation authority on
Lighthouse EN/JA, Apollo 11 EN/JA, Titanic, the Japanese long-label control,
and dense `k7-7`.

Dense `k7-7` routed crossings fell from Frontier `143` and Post `129` to
`100`, demonstrating a real free-form topology signal. The same candidate
retained label-route/near pressure and materially larger extent. Public rows
regressed to 3–6 crossings, Titanic became an extremely wide tiny Reset
overview, and long Japanese labels remained capacity-bound. Actual Product
smoke confirmed the trade-off; no user comparison or Human Review candidate
was opened.

The checkpoint is classified `C. STRUCTURAL IMPROVEMENT BUT PRESENTATION
TRADE-OFF / D. NO MEANINGFUL GENERAL IMPROVEMENT OVER FRONTIER / POST`. Gate 2
remains `OPEN`, quality solver remains `HOLD / NOT ESTABLISHED`, production
provider remains `NOT ESTABLISHED`, Product integration/default remains
`HOLD`, Human Review remains `NOT READY`, Adaptive Cascade remains inactive,
and the Initial Layout Release blocker remains `OPEN`. Session 0079 records
this new objective.

### LiaisonScape Cross-Family Product-Authoritative Auto Layout Portfolio Selector Experiment 1 (2026-09-16)

The [checkpoint result](liaisonscape/liaisonscape-cross-family-product-authoritative-auto-layout-portfolio-selector1-result.md)
tests whether existing Frontier, Post, and topology-aware free-form candidate
families can be selected as a bounded portfolio under the current Product
authority. On the same seven fixtures, a full oracle and a top-two cheap-screen
selector were compared after explicit hard gates and exact geometry
fingerprint handling.

The selector matched the fresh Product oracle on 6/7 rows. It selected
Frontier on Lighthouse EN/JA, Apollo EN, and Titanic, Post on Apollo JA, and
free-form on the Japanese long-label control. On dense `k7-7`, the oracle
selected free-form (`102` current Product crossings) while the bounded selector
selected Post (`129`), because cheap features ranked Post and Frontier ahead of
free-form. The selector used 14 Product evaluations versus 16 for the oracle
and reused no duplicate geometry. This establishes a real portfolio signal but
not an established selector: the dense recall miss and the small evaluation
saving remain open.

A small Actual Product smoke found the selected dense Post view compact but
still crowded, the dense free-form oracle mechanically improved but visually
remained crowded/clipped, and the long-label free-form selection remained hard
to read at overview scale. Persisted prior-family fields differed from fresh
current-source Product recomputation in 21 fields; the checkpoint records that
parity gap and uses fresh current-source evaluation without rewriting history.

The checkpoint is classified `B. PORTFOLIO PROMISING / SELECTOR INCOMPLETE`
with a `C. PORTFOLIO QUALITY BENEFIT EXISTS BUT METRIC GAP REMAINS`
qualification. It is not formal acceptance and opens no Human Review
candidate. Gate 2 remains `OPEN`, quality solver remains `HOLD / NOT
ESTABLISHED`, production provider remains `NOT ESTABLISHED`, Product
integration/default remains `HOLD`, Human Review remains `NOT READY`,
Adaptive Cascade remains inactive, and the Initial Layout Release blocker
remains `OPEN`. Session 0080 records this new objective. Do not retune a family,
change routing/label authority, add an Adaptive Cascade, or adopt a Product
provider/default from this result.

### LiaisonScape Diagnostic Preview Fixture Integrity + Parallel One-Sided Product Quality Audit 1 (2026-09-16)

The [checkpoint result](liaisonscape/liaisonscape-diagnostic-preview-fixture-integrity-parallel-one-sided-product-quality-audit1-result.md)
records the corrected fixture and one-sided observation as bounded diagnostic
evidence: the rejected side was under hard feasibility pressure, and forcing
it was not established as a safe fix. This is not formal acceptance or a
general quality conclusion. The current Parallel / Incident Bundle Geometry
coordination remains **RETUNE**.

### LiaisonScape Product Presentation Local Spacing + Parallel/Label/Self-loop Refinement 1 (2026-09-16)

The [checkpoint result](liaisonscape/liaisonscape-product-presentation-local-spacing-parallel-label-self-loop-refinement1-result.md)
keeps the current Frontier-12 `parallel-self-loop-control` Node geometry and
tests bounded Product presentation changes. Alpha/beta local spacing at 1.15x
and 1.30x was compared with the current Product route policy and with the
existing development-only `bundle-16`, `pair-16`, and `corridor-aware-16`
inputs. Twelve Self-loop angle/radius probes and a Node-only versus occupied
presentation viewport diagnostic were also recorded.

Local spacing can create capacity but is not a standalone winner: the 1.15x
probe reaches 2:2 in the normal policy while losing endpoint angular
separation and retaining an ownership ambiguity; 1.30x increases extent and
ambiguity. The strongest signal is the same current geometry with the widened
Product bundle policy: alpha/beta becomes 2:2, endpoint separation improves,
and the Actual Product smoke shows clearer lane/label/reverse-direction
association, with a route-length and ownership-margin trade-off. This is a
Product presentation direction, not a forced side-balancing rule or a reopened
Incident allocator.

The automatic Self-loop remains upper-biased because its source selector seeds
the upper orientation and applies only a weak preferred-angle penalty; manual
right/down/left probes do not establish automatic adoption. The real Product
Reset view centered both control and widened-bundle surfaces at 100%; the
initial preview's smaller/left-biased frame is retained as a framing diagnosis,
with no viewport fix adopted. The smoke found no gross widened-bundle or
ordinary-route break, but no Human Review candidate was opened.

The checkpoint is classified `A/B/C COMBINED: LOCAL PRODUCT ROUTE-PRESENTATION
DIRECTION PROMISING / SPACING CAPACITY HELPS BUT ROUTING-LABEL TRADE-OFF
REMAINS / SELF-LOOP REFINEMENT NOT ESTABLISHED`. Parallel/Incident architecture
remains closed, quality solver remains `HOLD / NOT ESTABLISHED`, production
provider remains `NOT ESTABLISHED`, Product integration/default remains `HOLD`,
Human Review remains `NOT READY`, Adaptive Cascade remains inactive, and the
Initial Layout Release blocker remains `OPEN`. Session 0082 records this new
objective. Do not adopt the development route variant, modify Product defaults,
open Human Review, or merge Self-loop/viewport authority into Structural
Placement from this checkpoint.

### LiaisonScape Product-Owned Parallel Bundle + Relation-Label Ownership Generalization 1 (2026-09-16)

The [dated generalization experiment](liaisonscape/liaisonscape-product-owned-parallel-bundle-generalization1-result.md)
is preserved in the existing [Layout / Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#product-parallel-and-relation-label-diagnostic-progression-roadmap-source-snapshot-2026-09-25).
It rejects a graph-wide adaptive spacing scalar as a general policy; the tested
widened-bundle direction remains diagnostic, not adopted. Current Parallel
planning remains governed by the **RETUNE** coordination authority above.

### LiaisonScape Product-Owned Bundle-Local Capacity + Cross-Bundle Feasibility Experiment 1 (2026-09-16)

The [checkpoint result](liaisonscape/liaisonscape-product-owned-bundle-local-capacity-cross-bundle-feasibility1-result.md)
shows bundle-local demand can be a useful diagnostic signal, but bundle choices
are coupled: shared-endpoint ownership and ordinary-route trade-offs remain,
and joint-feasibility evidence is bounded. The candidate is not adopted or
uniformly better than the fixed reference. This does not change the active
Parallel **RETUNE** or establish an independent per-bundle rule.

### LiaisonScape Product-Owned Orientation-Aware Parallel Label Capacity + Stagger Experiment 1 (2026-09-16)

The [checkpoint result](liaisonscape/liaisonscape-product-owned-orientation-aware-label-capacity-stagger1-result.md)
supports orientation-aware capacity as a bounded Product-presentation
diagnostic only. One-line horizontal Relation-label capacity remains **OPEN**;
vertical stagger is not established as a general rule, and higher-multiplicity
ordinary-route churn remains. The smoke/experiment evidence is not visual
acceptance and does not change routing, label, endpoint-plan, or Product policy.

### LiaisonScape Product Relation-label Normal-offset Granularity + Parallel Bundle Capacity Attribution Experiment 1 (2026-09-16)

The [checkpoint result](liaisonscape/liaisonscape-product-relation-label-normal-offset-granularity1-result.md)
attributes the tested zero-offset rejection to foreign sibling-route pressure.
This is bounded to the tested Product candidate/fixture envelope; collision-
envelope retuning is **NOT ESTABLISHED**, and finer offsets do not independently
resolve the capacity issue. No general label-placement, route, or endpoint
policy follows.

### LiaisonScape Product Relation-label Display-only Automatic Wrap Capacity Experiment 1 (2026-09-16)

The [checkpoint result](liaisonscape/liaisonscape-product-relation-label-display-only-wrap1-result.md)
finds display-only wrapping useful for some tested long horizontal labels, but
vertical/diagonal association and higher-multiplicity routing residuals remain;
it is not a general Product-quality solution. Relation names and authored
Dataset state are unchanged by this diagnostic. No routing authority, stored
presentation state, default policy, or visual acceptance follows.

### LiaisonScape Product Node-label Relation-presentation-first Angular Escape Experiment 1 (2026-09-16)

The [dated angular-escape diagnostic](liaisonscape/liaisonscape-product-node-label-relation-presentation-first-angular-escape1-result.md)
and its bounded negative result are preserved in the [Layout / Auto Layout
chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#product-node-label-diagnostic-progression-roadmap-source-snapshot-2026-09-25).

The result records that angular escape was not established in the tested
envelope; this does not select a Node-label, routing, or presentation policy.

### LiaisonScape Product Node-label Hysteresis / Recovery Attribution Experiment 1 (2026-09-16)

The [dedicated result](liaisonscape/liaisonscape-product-node-label-hysteresis-recovery-attribution1-result.md)
qualifies previous-placement hysteresis as the primary tested Node-label
residual and the recovery formulation for continued bounded research only.
Recovery remains diagnostic-only; this evidence does not establish production
policy, Product adoption, or general visual-quality acceptance.

### LiaisonScape Product Node-label Recovery Lifecycle Source-Parity Experiment 1 (2026-09-16)

The [dedicated result](liaisonscape/liaisonscape-product-node-label-recovery-lifecycle-source-parity1-result.md)
records `A QUALIFIED` source parity only within its tested lifecycle envelope.
It does not establish general Product adoption, settling, or visual-quality
acceptance. Manual presentation and route, Relation-label, endpoint-plan, and
Self-loop boundaries remain unchanged.

### LiaisonScape Product Node-label Recovery Integration / Feasibility Experiment 1 (2026-09-16)

The dated development-only integration/feasibility progression is preserved in
the [Layout / Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#product-node-label-diagnostic-progression-roadmap-source-snapshot-2026-09-25).
The [dedicated result](liaisonscape/liaisonscape-product-node-label-recovery-integration1-result.md)
records bounded integration evidence, not Product default or production
policy.

The development-only evidence retains a performance/recomputation boundary.
Its bounded timings are not a browser SLA or Product-wide guarantee and do
not establish a production selector, Product default, provider, or Worker
responsibility.

### LiaisonScape Product Node-label Recovery Dense / Browser Main-thread Feasibility Experiment 1 (2026-09-16)

The [dedicated result](liaisonscape/liaisonscape-product-node-label-recovery-dense-browser-feasibility1-result.md)
is the authority for bounded dense-fixture and browser evidence.

For the tested dense/full-presentation pipeline, browser-main-thread
feasibility remains **NOT ESTABLISHED**; source and browser evidence attribute
the dominant observed cost to the full pipeline, not recovery comparison.

Medium-dense long-label congestion was a smoke observation, not formal visual
acceptance. No Workerization or performance guarantee follows; the bounded
measurements are not an SLA, and the quality/lifecycle boundary remains.

### LiaisonScape Product Node-label Recovery Reuse Fingerprint Attribution 1 (2026-09-16)

The [latest reuse/fingerprint result](liaisonscape/liaisonscape-product-node-label-recovery-reuse-fingerprint-attribution1-result.md)
identified an earlier harness parity artifact: the source-parity arm first
diverged at route reuse, then Relation-label and Node-label placement.
Broader Product presentation settling remains **OPEN**; this attribution does
not fully resolve its cause or change recovery semantics, authority boundaries,
or Product adoption. Node-label recovery remains bounded diagnostic/research
evidence: it establishes no general visual-quality acceptance, quality solver,
provider, Product default/integration, or Human Review readiness.

### LiaisonScape Self-loop Residual Responsibility Closure 1 (2026-09-16)

The [checkpoint result](liaisonscape/liaisonscape-self-loop-responsibility-closure1-result.md)
closes this research phase at **A/B QUALIFIED**: the Product selector owns
automatic angle/radius geometry and bounded other-Node avoidance; joint Product
collision quality remains deferred. Ordinary paths, Relation/Node labels, peer
loops, and viewport constraints retain their existing authorities. No solver,
authority movement, Product adoption, Human Review, or Adaptive Cascade follows.
Session 0094 records this closure checkpoint.

### LiaisonScape HQ Preview Viewport Interaction Fix 1 (2026-09-16)

The same preview surface now separates viewport navigation from graph editing:
canvas pan, native Ctrl+wheel zoom, toolbar zoom, and Reset remain available,
while Node/Relation/label/Self-loop editing, context menu, and relation creation
remain read-only-disabled. Candidate, Dataset, persistence, and dirty-state
semantics are unchanged. This was a local preview interaction fix, not a
production behavior or solver change.

### LiaisonScape Frontier Automatic Display Human Review Closure 1 (2026-09-16)

The user's Human Review disposition is **QUALIFIED**: Frontier-12 is accepted
as sufficient for an immediate normal automatic display, with no gross defect
blocking graph comprehension. A small number of avoidable-looking ordinary
Edge crossings remain in Titanic/Ashen Crown and related presentation; the
user did not provide complete per-fixture dispositions, so no unconfirmed unit
is marked PASS. The crossing residual does not reopen provider selection and is
tracked as presentation-quality follow-up.

### LiaisonScape Frontier Automatic Display App Async Adapter / Lifecycle Staging 1 (2026-09-16)

The async adapter result adds a DEV-only initial-layout=frontier-12-worker
seam from the actual Dataset-open lifecycle. It gates Frontier on
coordinate-less non-empty Datasets, snapshots serializable graph/config data,
runs the existing Frontier/Product Worker, validates operation/generation/
snapshot identity and complete finite positions, and adopts success only into
render-only derived positions. Replacement, mutation, workspace exit, unmount,
failure, cancel, and stale completion cannot publish late output; the existing
settleInitialPlacement result remains the bounded fallback. Stored and mixed
Coordinates remain authoritative. Focused adapter tests and a Lighthouse EN
browser smoke passed. The normal provider/default, visible Cancel UI,
transient preview, and production integration remain on hold.

### LiaisonScape Accepted Dirty Worktree Ownership Resolution / Canonical Baseline Commit 2 (2026-09-16)

The [canonical-baseline result](liaisonscape/liaisonscape-accepted-dirty-worktree-ownership-resolution-canonical-baseline-commit2-result.md)
records **ACCEPTED BASELINE ESTABLISHED / CANONICAL COMMITS CREATED**.
LiaisonScape `9616a75` fixes the accepted runtime/source, Frontier
generator/Worker/adapter chain, focused tests, and related evidence; E2R-SPEC
`d68d7f1` fixes the accepted guidance, result documents, roadmap, and formal
Session-0052 history. The temporary `.tmp-normal-offset-output.json`, older
`experimental/product-evaluation-seam/spacing-inspection2/`, and spec
`work/` remain uncommitted and preserved. No runtime behavior was changed to
create the boundary. Source-level adoption is canonical; rollout remains
deferred.

### LiaisonScape Explicit Auto Layout Completion Readiness / Current-State Gap Audit 1 (2026-09-16)

This dated readiness snapshot is retained as a navigation anchor; its execution
state and proposal-vs-direct-apply discussion are historical. The later
[Explicit Auto Layout lifecycle integration](liaisonscape/liaisonscape-explicit-auto-layout-app-lifecycle-integration1-result.md)
and [qualified Human Check B disposition](liaisonscape/liaisonscape-explicit-auto-layout-human-check-b-qualified-closure1-result.md)
own their bounded results. The original snapshot is preserved in the [Layout
and Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#explicit-auto-layout-readiness-and-pre-release-blocker-roadmap-source-snapshot-2026-09-25).
This does not establish general visual-quality acceptance or change Initial
Automatic Display authority.

### Roadmap Sync — Explicit Auto Layout / Pin / Post-LiaisonScape Follow-ups 1 (2026-09-17)

This heading retains its historical anchor. Current Explicit Auto Layout,
Pin, and presentation responsibilities are summarized below; the dated
readiness and pre-release progression is in the [existing broad
chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#explicit-auto-layout-readiness-and-pre-release-blocker-roadmap-source-snapshot-2026-09-25).
Dedicated results linked here remain the evidence authorities.

#### LiaisonScape Explicit Auto Layout — active release blocker

The dated pre-release blocker is no longer current planning status. Explicit
Auto Layout has a bounded accepted Product lifecycle; Human Check B is
**QUALIFIED** only for its recorded scope. This does not imply general visual
quality acceptance, Pin maturity, rollout, or a change to Initial Automatic
Display. See the [production integration](liaisonscape/liaisonscape-explicit-auto-layout-production-integration-result.md),
[lifecycle integration](liaisonscape/liaisonscape-explicit-auto-layout-app-lifecycle-integration1-result.md),
[qualified closure](liaisonscape/liaisonscape-explicit-auto-layout-human-check-b-qualified-closure1-result.md),
and [dated blocker chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#explicit-auto-layout-readiness-and-pre-release-blocker-roadmap-source-snapshot-2026-09-25).

#### Entity Pin / Unpin — Explicit Auto Layout constraint direction

Pin is LiaisonScape Layout intent under the **Draft / non-Stable** Layout
Extension contract, not Core data or a Coordinate field. A Pin is a hard
placement constraint; moving an Entity does not itself Pin it. Pin changes are
working state and persist through the explicit Save boundary. The exact
contract and authority are in the [Pin persistence decision](liaisonscape/liaisonscape-pin-persistence-authority-contract2-result.md),
[runtime integration](liaisonscape/liaisonscape-explicit-auto-layout-pin-runtime-integration1-result.md),
[working-state / Save integration](liaisonscape/liaisonscape-pin-app-working-state-save-integration1-result.md),
and [Pin UI Human Check A result](liaisonscape/liaisonscape-pin-ui-human-check-a-popover-iteration2-result.md).
The UI result does not make the Extension Stable.

#### Edge and presentation authority during Explicit Auto Layout

Explicit Auto Layout computes placement candidates; LiaisonScape Product owns
routing and derived Relation-label, Node-label, Self-loop, and viewport
presentation. Existing manual presentation remains user-owned; a Node Pin is a
placement constraint, not an Edge-route lock. See the [operation boundary](liaisonscape/liaisonscape-explicit-auto-layout-operation-boundary1-result.md)
and [lifecycle integration](liaisonscape/liaisonscape-explicit-auto-layout-app-lifecycle-integration1-result.md).

#### Post-LiaisonScape and other product follow-ups

The existing [GitHub Sponsors follow-up](#github-sponsors-follow-up-2026-09-02)
remains the post-LiaisonScape direction: a restrained secondary link near the
bottom of Home, never a primary action. No runtime Sponsor implementation is
authorized by this synchronization.

Existing roadmap entries remain the canonical records for the following
separate follow-ups; this entry does not duplicate or close them:

- Dataset title editing for `extensions.metadata.title`, with unknown-field
  preservation and Dataset Replacement Safety;
- user-provided images/media as an application Extension direction, with
  browser-security, portability, external-reference, and copyright questions;
- NarrativeLine and Hub completion before new diagram applications.

Before new ER or State Diagram applications, complete NarrativeLine and Hub.
For NarrativeLine, date-less Order-only Events remain a direction to reconnect
with existing research; mixed date/Event ordering and authority are to be
reconfirmed when that implementation begins, not decided by this roadmap sync.
ER, State Diagram, four-quadrant/radar Graph, and Random Character Generator
applications remain future context rather than current implementation work.

#### Status language and open questions

Pin UI glyph and copy have a bounded Human Check A result; the Pin Extension
contract remains **Draft / non-Stable**, with exact maturity and schema
questions governed by its [authority decision](liaisonscape/liaisonscape-pin-persistence-authority-contract2-result.md).
The following remains explicitly open: the exact external/local media schema
and security model.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-SAFE-PREVIEW-FAILURE-DIAGNOSIS1 (2026-09-17)

The original intermittent Safe Preview hard failure remains unattributed: its
exact input and failure branch were not captured. Later qualified lifecycle
review and successful ordinary/valid-Pin cases do not establish its cause. See
the [failure diagnosis](liaisonscape/liaisonscape-explicit-auto-layout-safe-preview-failure-diagnosis1-result.md)
and the separate [Human Check B closure](liaisonscape/liaisonscape-explicit-auto-layout-human-check-b-qualified-closure1-result.md).

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-DEV-FAILURE-DIAGNOSTIC1 (2026-09-17)

The DEV diagnostic makes a known invalid-Pin snapshot-capture failure
observable; it did **not** identify the cause of the earlier intermittent Safe
Preview failure. Its dated probe and diagnostic details are preserved in the
[Layout and Auto Layout chronology](roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md#dev-failure-diagnostic-roadmap-source-snapshot-2026-09-25)
and the [dedicated diagnostic result](liaisonscape/liaisonscape-explicit-auto-layout-dev-failure-diagnostic1-result.md).

### Explicit Auto Layout quality follow-ups

Explicit Auto Layout lifecycle / Preview / Pin / Save remains **QUALIFIED**
within Human Check B's recorded scope. Additional quality work is frozen as
non-blocking follow-up and does not reopen that acceptance. Follow-ups include
Pinned global recovery, Presentation-aware local relaxation, Graph-space
separation, Relation-label congestion, broader Node-label quality,
circular-order behavior, and graph-size / density / label / topology effects.
The [quality-freeze result](liaisonscape/liaisonscape-auto-layout-quality-freeze-and-worktree-baseline-audit1-result.md)
holds the detailed evidence; no general quality closure or complexity
threshold is established.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-HUMAN-CHECK-B-QUALIFIED-CLOSURE1 (2026-09-17)

Human Check B remains **QUALIFIED** for its recorded Actual Product scope:
the Explicit Auto Layout lifecycle / Preview, Pin hard constraints, manual
movement of Pinned Nodes, Save Coordinates, and reload consistency. This is not
unqualified or general visual-quality acceptance. Frozen quality follow-ups do
not reopen the disposition; the full `npm test` Vite/HMR lifecycle gate remains
a separate test-infrastructure gate, not a Product failure. See the [qualified
closure result](liaisonscape/liaisonscape-explicit-auto-layout-human-check-b-qualified-closure1-result.md).

### E2R-LIAISONSCAPE-GENERAL-COMPLEX-DATASET-PRACTICALITY-REASSESSMENT1 (2026-09-17)

The [General / Complex Dataset practicality reassessment](liaisonscape/liaisonscape-general-complex-dataset-practicality-reassessment1-result.md)
classifies the current Product as **B. PRACTICALITY ACCEPTABLE WITH
NON-BLOCKING QUALITY FOLLOW-UPS**. Current coordinate-less Initial Automatic
Display opens an immediately usable fallback Graph, exposes accepted Pending /
Cancel behavior, and asynchronously adopts only a current complete Frontier
result. Stored and mixed Coordinates retain their authority. Explicit Auto
Layout remains a Worker/Preview/Use/Return operation with Human Check B
`QUALIFIED`; its known quality follow-ups are not reopened.

Current-source Actual Product observations covered Lighthouse EN/JA and Titanic
EN on the 5176 dev surface; the existing normal-path acceptance matrix covers
Apollo EN, Titanic JA, and Ashen Crown JA. The current full suite is
`634/634 PASS` with natural termination. Seconds-order Frontier completion is
treated as practical diagnostic evidence only, not a hard browser-independent
SLA. Dense Graph-space, Relation-label congestion, Pinned global recovery,
Presentation-aware local relaxation, and broader Node-label quality remain
documented non-blocking follow-ups.

The practicality concern for the accepted Automatic Display operation may close
on this evidence. This does not close Explicit Auto Layout quality, authorize
deployment/public rollout, or change any Product authority or persistence
semantics. Historical Gate 1-3 classifications are retained as history.

### E2R-LIAISONSCAPE-AUTO-LAYOUT-QUALITY-FREEZE-AND-WORKTREE-BASELINE-AUDIT1 (2026-09-17)

Additional Explicit / Initial Auto Layout quality research remains frozen as
non-blocking post-release follow-up; this is not quality closure or approval to
deploy, release, or change a production default. The controlled
12-Entity / 19-Relation fixture was judged to improve in Preview, while a
separate private real-Dataset observation found a more compact Preview with
increased Relation / Relation-label congestion. Cause and any complexity
threshold across size, density, label pressure, and topology remain unresolved.
The detailed evidence and frozen follow-up list are in the [quality-freeze
result](liaisonscape/liaisonscape-auto-layout-quality-freeze-and-worktree-baseline-audit1-result.md).
Initial Automatic Display remains accepted; Explicit Auto Layout Human Check B
remains `QUALIFIED`. Neither status absorbs the other's lifecycle or quality
boundary.

The current worktrees were audited without reset, restore, stash, clean, delete,
or commit. Accumulated accepted runtime/lifecycle source, tests, DEV fixtures,
research artifacts, and specification records have proposed logical commit
groups. `.tmp-*`, the older `experimental/product-evaluation-seam/spacing-inspection2/`,
and `e2r-spec/work/` diagnostic material remain preserved outside the proposed
baseline pending ownership/canonical-status review. The current classification
is **C. MIXED OWNERSHIP / COMMIT BOUNDARY NOT YET SAFE**; a follow-up may create
bounded local commits after human review.

### E2R-LIAISONSCAPE-WORKTREE-BASELINE-COMMIT-READINESS1 (2026-09-17)

The [worktree baseline commit-readiness result](liaisonscape/liaisonscape-worktree-baseline-commit-readiness1-result.md)
converts the prior mixed-ownership audit into exact path manifests without
creating a commit. The current status is 57 status paths in LiaisonScape and
40 in e2r-spec (the new readiness record is included); neither index has
staged changes.

The proposed order is: accepted LiaisonScape runtime plus inseparable direct
tests; Layout/Pin extension plus validator; DEV acceptance seam and the
controlled reference fixture; reproducible research experiments/evidence; and
e2r-spec result records/roadmap. Cumulative source files are intentionally not
split by historical checkpoint. The two `.tmp-*` files,
`experimental/product-evaluation-seam/spacing-inspection2/`, and `work/` are
preserved outside the baseline. Historical research retention remains the
small human decision set.

The classification is **B. COMMIT MANIFEST ESTABLISHED / SMALL HUMAN DECISION
SET REMAINS**. No solver, scoring, routing, label, UI, Dataset, or persistence
change was made. The prior `636/636 PASS` remains historical evidence; the
future runtime baseline commit was verified with `636/636 PASS`, natural
termination, lint, and build. The later bounded commits are `17be25a`
(LiaisonScape accepted runtime/direct tests), `e4f6856` (Layout/Pin extension
and validator), `c692cdf` (DEV seam and controlled fixture), and `e6a66df`
(canonical historical research evidence). Public rollout, deploy, and release
remain separate checkpoints.

### E2R-WORKSPACE-SHARED-TEST-INFRASTRUCTURE-AUDIT1 (2026-09-17)

The [shared test infrastructure audit result](./test-infrastructure/e2r-workspace-shared-test-infrastructure-audit1-result.md)
classifies `@sukoyaka-dopeness/e2r-dom-test-environment@0.1.0` as active shared
infrastructure used by LiaisonScape and NarrativeLine. Its responsibility is
limited to framework-neutral JSDOM/global/cleanup lifecycle; application
adapters retain app-specific URLs and globals, while Vite middleware, fixtures,
selectors, and Product assertions remain app-owned.

`e2r-test-utils` is confirmed as a non-canonical, unmanaged `0.0.0-h12.0`
historical packaging snapshot with no active consumer. It remains untouched as
a future archive/delete candidate requiring separate authorization. Hub still
has an active local helper with overlapping generic lifecycle code and is a
future migration candidate, not a current shared-package consumer.

The shared package tests pass `2/2`; LiaisonScape current evidence is
`636/636 PASS`; NarrativeLine is `222/222 PASS` with app-local Vite
`24678` warnings; and Hub is `1/1 PASS`. No package or application source was
changed. Existing Knowledge ownership guidance and retirement records already
cover the reusable conclusion, so no duplicate Knowledge entry was added.

### E2R-LIAISONSCAPE-FINAL-RELEASE-READINESS-AUDIT1 (2026-09-17)

The [Final Release-Readiness Audit result](liaisonscape/liaisonscape-final-release-readiness-audit1-result.md)
classifies the current committed state as **B. RELEASE-READY WITH DOCUMENTED
NON-BLOCKING FOLLOW-UPS**. Current source, accepted Actual Product evidence,
and fresh validation show no concrete release blocker in the audited
LiaisonScape implementation. The source-level implementation phase may close;
this does not authorize public rollout, deployment, or release.

The audited source revisions are LiaisonScape `e6a66df`, E2R-SPEC source
baseline `2b84915`, and e2r-ai-knowledge `fa66c51`; this current-status result
and roadmap entry are committed in E2R-SPEC `76d4f6b`. The accepted Initial Automatic
Display contract, Coordinate/persistence authority, Explicit Auto Layout
`QUALIFIED` lifecycle, Pin behavior, Product presentation authority, and
failure/stale/replacement safety remain unchanged. Current validation is
LiaisonScape `636/636 PASS` with natural termination, lint PASS, build PASS,
E2R-SPEC `npm run validate` PASS, and no post-run `24678` listener.

Pinned global recovery, Presentation-aware local relaxation, Graph-space and
Relation-label congestion, broader Node-label quality, complexity/circular
ordering, and ordinary Edge crossing refinement remain documented non-blocking
follow-ups. Existing historical entries that describe earlier open gates are
preserved as history; this entry is the current release-readiness status.

### E2R-NARRATIVELINE-NEXT-PHASE-AND-SOURCE-HANDOFF-PLANNING1 (2026-09-17)

### E2R-NARRATIVELINE-VITE-24678-WARNING-DIAGNOSTIC1 (2026-09-23)

The follow-up [test WS cleanup result](narrativeline/narrativeline-vite-test-ws-cleanup1-result.md)
is **IMPLEMENTED / ACCEPTED / CLOSED**. All 18 current NarrativeLine Vite
middleware test servers use SSR loading/transform only and do not consume
WebSocket/HMR APIs. Their per-server options now set `ws:false`, which disables
the unnecessary listener itself without changing assertions or test semantics.
Full tests pass 259/259 naturally; captured output has zero port 24678
warnings, zero listener observations during the run, and zero post-run
listeners/workers. Lint, build, and diff checks pass. No product/runtime or
Public behavior changed. Future tests that exercise Vite WS/HMR must opt in
explicitly for their own server.

The [Vite 24678 warning diagnostic result](narrativeline/narrativeline-vite-24678-warning-diagnostic1-result.md)
classifies the warning as **REPRODUCED TWICE / TEST-ONLY OPERATIONAL / ACCEPTED
NON-BLOCKING / CLOSED**. A fresh `npm test` run emitted 89 middleware Vite
WebSocket port warnings while completing naturally with 259/259 passing tests
and exit code 0. A second full run independently reproduced the warning and
also passed 259/259. Listener ownership was transiently in Node test workers; no
24678 listener or test worker remained after exit. The current middleware test
calls disable HMR but do not disable Vite's WebSocket server; production/dev
Vite configuration is separate. No code/configuration change was made because
the warning has no demonstrated test, process-lifecycle, product-runtime, or
Public behavior impact. The previous LiaisonScape harness mitigation remains
supporting evidence only; no cross-repository change was made.

The follow-up [trigger audit](narrativeline/narrativeline-vite-24678-warning-trigger-audit1-result.md)
inspected installed Vite 8.1.5 and reproduced the trigger with eight parallel
middleware-mode servers: one bound fixed WS port 24678 and seven logged
`EADDRINUSE`. `hmr:false` does not disable this listener; `server.ws:false`
does. NarrativeLine's parallel test workers contribute the condition, but no
cleanup leak or runtime impact was found. The existing warning remains
**ACCEPTED / CLOSED** without test changes or output suppression.

The [NarrativeLine next-phase and source-handoff planning result](narrativeline/e2r-narrativeline-next-phase-and-source-handoff-planning1-result.md)
classifies the current state as **NARRATIVELINE NEXT PHASE CLEAR / SOURCE
HANDOFF READY**. Current NarrativeLine source is stable at `a525d2e`; its only
tracked dirty work is the pre-existing `AGENTS.md` guidance update, which was
preserved outside this planning checkpoint. Fresh validation is `222/222 PASS`
with natural completion, lint PASS, and build PASS. The full test still emits
app-local Vite middleware `24678` warnings, but they do not prevent completion.

Current source and later acceptance records supersede older candidate lists for
Timeline sticky/More, Header Home and nested Back, CoordinatePanel 600/601
geometry, locale, replacement safety, Dataset title editing, and Relation
deletion presentation. The remaining practical pre-release candidates are a
bounded Cross-App visual-consistency audit (Detail actions, dialogs,
metadata/ID and title/action affinity), followed by implementation only if a
concrete defect is confirmed, then documentation synchronization and a
NarrativeLine release-readiness audit. The Vite warning is an optional
operational follow-up, not a current product blocker.

The result defines a minimum source handoff instead of requesting the whole
repository. It preserves the boundary `e2r-spec` = specification/roadmap,
`e2r-narrative-line` = implementation, and `e2r-ai-knowledge` = reusable
guidance. No runtime, test, schema, UI, or Knowledge change was made.

### E2R-NARRATIVELINE-DOCUMENTATION-AND-FINAL-RELEASE-READINESS-AUDIT1 (2026-09-17)

The [NarrativeLine documentation and final release-readiness audit result](narrativeline/e2r-narrativeline-documentation-and-final-release-readiness-audit1-result.md)
classifies the current state as **RELEASE-READY WITH DOCUMENTED NON-BLOCKING
FOLLOW-UPS**. Current source is at `a525d2e`, with the pre-existing dirty
`AGENTS.md` preserved. Documentation drift in the NarrativeLine MVP and UI
specification was synchronized for the already implemented bounded clock
editing and EN/JA locale support; deferred Time Zone, UTC offset, Instant,
Relative Time, aliases, Citation, confidence, and other research/spec work
remain deferred. Full tests complete naturally with all assertions passing,
lint/build and E2R-SPEC validation pass, and the `24678` Vite warning remains
operational and non-blocking. NarrativeLine's source-level implementation
phase is **CLOSED**; rollout, deploy, public release, and publication remain
separate decisions.

### E2R-NARRATIVELINE-DOCUMENTATION-CLOSURE-RECONCILIATION1 (2026-09-17)

The [NarrativeLine documentation closure reconciliation result](narrativeline/e2r-narrativeline-documentation-closure-reconciliation1-result.md)
confirmed and corrected two remaining wording drifts in the current working
tree: `docs/MVP.md` now consistently distinguishes implemented bounded local
time fields from deferred Time Zone/UTC offset/Instant work, and `docs/ui-spec.md`
now assigns the locale selector to the Header and descriptor/Credits to the
Home Footer. No source, test, schema, runtime, or LiaisonScape artifact was
changed. NarrativeLine source-level implementation remains **CLOSED**.

### E2R-INITIAL-PUBLIC-RELEASE-REMAINING-GATES-RECONCILIATION1 (2026-09-17)

Historical release-planning snapshot (2026-09-17): the [Initial Public Release
remaining-gates reconciliation result](./release-governance/e2r-initial-public-release-remaining-gates-reconciliation1-result.md)
recorded the then-current cross-repository critical path: human
licensing/provenance confirmation, exact release-set selection, clean release
commits, explicit push/deploy/publication authorization, and public URL
deployment acceptance. Its pending-release classification was superseded by
the [2026-09-22 closure audit](./release-governance/e2r-initial-public-release-closure-audit-result.md);
the result remains historical evidence and does not authorize future public
writes. Older Auto Layout `OPEN` records remain historical and superseded for
source-level readiness.

### E2R-INITIAL-PUBLIC-RELEASE-TRANSACTION-READINESS-DECISION1 (2026-09-17)

Historical decision-preparation snapshot (2026-09-17): the [Initial Public
Release transaction-readiness decision result](./release-governance/e2r-initial-public-release-transaction-readiness-decision1-result.md)
prepared, without selecting, a human decision packet for software licensing,
sample stewardship/rights, exact cross-repository revisions, and public URL
acceptance. Its **HUMAN APPROVAL REQUIRED** classification was superseded for
the Initial Public Release by the 2026-09-22 closure audit. It remains evidence
of the earlier preparation state; it does not establish current licensing
requirements or authorize future public writes.

### E2R-PUBLIC-SAMPLE-RIGHTS-PROVENANCE-AND-RELEASE-DECISION-RECONCILIATION1 (2026-09-17)

The [public sample rights/provenance reconciliation result](./release-governance/e2r-public-sample-rights-provenance-and-release-decision-reconciliation1-result.md)
records all five current sample families as Initial Public Release candidates
under the human policy, while retaining per-sample stewardship/rights
confirmation. Bounded repository inspection found no concrete copy evidence,
but this is not legal certification. The reusable review process is recorded
in the central Knowledge playbook. No sample, translation, license artifact,
or release revision was changed or selected.

### E2R-PWA-AND-OFFLINE-CAPABILITY-ROADMAP1 (2026-09-17)

The [PWA and offline capability roadmap result](./application-suite/e2r-pwa-and-offline-capability-roadmap1-result.md)
records NarrativeLine and LiaisonScape as independent future PWA candidates
and adopts the boundary **offline capability is application- and
capability-specific**. PWA installability and offline completeness are not
Initial Public Release blockers. Manifest, Service Worker, cache, persistence,
update, quota, and offline Handoff semantics remain future bounded design and
implementation checkpoints. No runtime or release artifact was changed.

### E2R-NARRATIVELINE-NL-H2-R1 (2026-09-19)

Current status: **ACCEPTED / MANUAL ACCEPTANCE COMPLETE**. The fixture-loading
blocker described below is retained as history and is superseded. Chrome CDP
loaded the canonical Candidate through NarrativeLine's real file input without
a production change. Real Chrome acceptance then passed Stable History, the
exact Candidate, mixed validation refusal, unknown and unsupported History,
unrelated edit plus export/re-import preservation, EN/JA, keyboard/focus, and a
360 px narrow viewport. No runtime defect was found. The detailed result is
recorded in NarrativeLine's
`docs/nl-h2-r1-history-2-candidate-recognition-and-edit-refusal-result.md`.

Historical attempt record: the NarrativeLine bounded runtime result `NL-H2-R1` is implemented at
NarrativeLine commit `1c1d068`. Its latest manual acceptance attempt is
**BLOCKED BY FIXTURE-LOADING ENVIRONMENT — NO RUNTIME FIX INDICATED**: the
stable History browser checks passed, but Candidate fixture acquisition through
the Chrome automation file chooser was unavailable, so the remaining
Candidate/unknown/mixed, unrelated-edit preservation, narrow-layout, and
Candidate keyboard/focus scenarios did not run. The implementation remains
ready for manual acceptance when the fixture path is available. The
application recognizes the exact supported History `2.0.0` Candidate boundary,
keeps candidate/unknown/mixed/unsupported History read-only, refuses Stable
History writes for those shapes, and preserves candidate and Relative-Time
payloads on unrelated edit/export paths. Stable History behavior remains
unchanged.

This checkpoint does not promote History 2 or Relative Time, add semantic
ordering or authoring, migrate data, change Dataset/Core/Extension schema,
modify Validator, or change sample Datasets. Live-browser desktop/narrow and
keyboard/focus acceptance remains the next application acceptance step. The
NarrativeLine source-level release boundary and public rollout/deploy/release
decisions remain separate.

### E2R-DOCUMENTATION-INFORMATION-ARCHITECTURE-ROADMAP-MODULARIZATION-AUDIT1 (2026-09-19)

The [Documentation Information Architecture / Roadmap Modularization Audit](documentation-ia/documentation-information-architecture-roadmap-modularization-audit1-result.md)
is complete. Current recommendation: preserve existing documentation paths and
the single roadmap, strengthen `docs/README.md` as a responsibility-based
navigation hub, and keep detailed checkpoint evidence in dedicated result
documents. Existing-file moves, renames, archive migration, and roadmap
splitting require a separate human structure decision. This is a
documentation-only planning record; no runtime, normative specification, or
release artifact changed.

### E2R-H2-POSITION-CIRCA-BOUNDED-AUTHORING-CLOSURE (2026-09-19)

The bounded H2-POSITION-CIRCA authoring scope is now **ACCEPTED / CLOSED**.
Human and Real Browser acceptance reconciled the safe and unsafe Dataset-wide
upgrade paths, confirmation dismissal/focus behavior, Entity/Event/Relation
conversion, atomicity, Option A Timeline presentation, circa removal,
History removal, EN/JA and locale behavior, narrow layout, export/reload/
re-import, unknown/unsupported/mixed refusal, Relative Time preservation, and
the multi-H2 exact-edit declaration regression fix.

History 2.0.0 remains a non-Stable Candidate. This closure does not accept
bounded-point, temporal-extent, multiple-assertion, Relative Time authoring or
solving, H2 to H1 conversion, Entity/Relation History authoring UI, History 2
Stable promotion, release, deployment, or publication. The canonical Relative
Time live import passed with all 11 Events undated and no Dataset mutation or
runtime error; its raw browser download artifact was not directly captured in
one run, so automated exact JSON round-trip remains the payload-preservation
evidence for that boundary.

Current status is governed by this closure entry and the linked [scope
closure result](./temporal/history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md).
Historical proposal, decision-preparation, implementation, blocker-repair,
and Dataset-wide planning snapshots are preserved in the [History 2 position/
circa chronology](roadmap-history/release-and-cross-app-chronology.md#history-2-position-circa-authoring-and-dataset-upgrade-chronology-2026-09-19).

### E2R-INITIAL-PUBLIC-RELEASE-CROSS-APP-FOLLOW-UPS-RECONCILIATION1 (2026-09-19)

Historical pre-release follow-up snapshot: the dated “REQUIRED BEFORE INITIAL
PUBLIC RELEASE” labels below were superseded as release gates by the 2026-09-22
closure audit. Any visual-quality or product follow-up that remains operative
is separate from release closure and is tracked under current status.

The [Cross-App Follow-Ups Reconciliation result](./release-governance/e2r-initial-public-release-cross-app-follow-ups-reconciliation1-result.md)
records two bounded pre-public-release follow-ups from current source and
accepted evidence. This is a roadmap/documentation checkpoint only; it does
not authorize runtime, CSS, sample, User Guide, Hub, Validator, or release
artifact changes.

1. **NarrativeLine / LiaisonScape User Guide and Public Sample refresh —
   REQUIRED BEFORE INITIAL PUBLIC RELEASE:** reconcile current EN/JA guides,
   app-owned and E2R-SPEC canonical samples, Hub registry/Handoff links,
   capability coverage, credits, license/provenance, redistribution status,
   and Stable versus Experimental roles. Do not promote History 2.0.0
   Candidate, Relative Time, or other research/draft semantics into public
   samples without a separate public-support decision.
2. **NarrativeLine / LiaisonScape Cross-App Visual Hierarchy / Form Geometry
   Audit — REQUIRED BEFORE INITIAL PUBLIC RELEASE / QUALITY AUDIT:** the prior
   Name-input item is now consolidated with screen-title hierarchy, Dataset
   title field/action affinity, and the existing control-density observation.
   Compare role-equivalent surfaces in EN/JA desktop and narrow browser states,
   measure actual geometry and localized-label behavior, and identify the owning
   app before any fix. Current source shows implementation differences, not a
   confirmed defect; no universal `width: 100%` rule or shared CSS is
   established. Any implementation must be a separately accepted, smallest
   app-local change after reproducible evidence. See the unified [audit
   result](cross-app/e2r-cross-app-visual-hierarchy-form-geometry-audit1-result.md).

The next content/sample refresh audit remains separate because its public
capability and provenance decisions gate guide and sample claims. The unified
visual hierarchy/form-geometry audit is the single visual checkpoint for the
consolidated cluster. Push, deployment, publication, and public-release
decisions remain explicitly authorized human actions.

### E2R-CROSS-APP-VISUAL-HIERARCHY-FORM-GEOMETRY-AUDIT1 (2026-09-19)

The [Cross-App Visual Hierarchy / Form Geometry Audit result](cross-app/e2r-cross-app-visual-hierarchy-form-geometry-audit1-result.md)
consolidates the current screen-title hierarchy, Dataset title
field/action-affinity, Name-input geometry, and control-density observations
into one bounded audit. Existing accepted metadata alignment, divider spacing,
Dataset title editing, and the prior `E2R-CROSS-APP-VISUAL-CONSISTENCY-AUDIT1`
classification remain closed; historical records are not reopened.

This is **AUDIT CONSOLIDATED / NO IMPLEMENTATION AUTHORIZED**. The audit must
compare role-equivalent surfaces using EN/JA, wide/intermediate/narrow, normal
and edit states, pointer/keyboard focus-visible behavior, short/long labels,
wrapping, overflow, and actual browser geometry followed by human acceptance.
It does not require identical DOM, HTML heading levels, text, CSS selectors,
breakpoints, or pixel dimensions. The Cross-App Visual Style / Flatness
Experiment remains a separate surface-styling boundary.

If the later audit confirms no defect, this visual follow-up cluster can close.
If it confirms one defect, the next checkpoint is one smallest app-local fix;
multiple independent defects require human prioritization first. No runtime,
CSS, test, locale, sample, User Guide, or schema change is authorized here.

### E2R-WORKSPACE-RETIRED-TEST-UTILS-CLEANUP1 (2026-09-17)

The [retired test-utils cleanup result](./test-infrastructure/e2r-workspace-retired-test-utils-cleanup1-result.md)
classifies the unmanaged `e2r-test-utils` directory as safely removed after a
final provenance and consumer check. Its final inventory was metadata-only
(`package.json`, `package-lock.json`, `README.md`, and `tsconfig.json`), with
no Git repository, executable source, unique evidence, or active consumer.
The canonical `@sukoyaka-dopeness/e2r-dom-test-environment@0.1.0` package and
its LiaisonScape / NarrativeLine consumers were preserved unchanged.

Historical E2R-SPEC references remain as provenance. The root IDE workspace
file still contains the deleted folder as a non-executable local membership;
it was intentionally left untouched under this exact-directory cleanup
boundary and is a separate workspace-housekeeping follow-up. No application,
Dataset, UI, or test-runtime behavior changed, and no duplicate Knowledge
entry was needed.

### 2026-09-23 session status inventory

This inventory separates remaining evidence or decision gaps from work that
was accepted or completed during the session. It does not authorize
application, User Guide, sample, schema, Validator, or runtime changes.

#### Accepted / completed and excluded from open work

| Candidate | Classification | Current evidence | Minimum next checkpoint |
| --- | --- | --- | --- |
| LiaisonScape selected Entity status Name display | **ACCEPTED / CLOSED** | At 390x844, a long selected Name wrapped within a 343px status box (x=16..359); document scroll width equaled the 390px viewport. Two same-name Entities remained independently selectable and produced the same name-based status; EN/JA integration tests cover empty-name ID fallback. Canvas tap cleared the status; locale switching updated the prefix. Current Dataset-open path clears selection. NarrativeLine's related Event→Entity Detail navigation was checked separately at 390px and stayed within a 390px document width. No source changes were needed. See [acceptance result](narrativeline/narrativeline-entity-selection-status-narrow-acceptance1-result.md). | None. Other selection-policy or display changes require a separate Human decision. |
| LiaisonScape Pin / Unpin User Guide coverage | **IMPLEMENTED / GUIDE COVERAGE UPDATED** | The EN/JA guides now document Pin/Unpin in Entity Detail and the Entity context menu, its Explicit Auto Layout constraint meaning, the working-state boundary, and persistence through Save node coordinates. The guides also record the related Add Relation empty-Entity boundary and explicit Auto Layout preview flow. Runtime, Pin semantics, Dataset, and Export behavior were not changed by this documentation checkpoint. |

- NarrativeLine narrow Header robustness: **LOCAL ACCEPTANCE PASS / CLOSED**.
  Current local correction, narrow cold-load/reload and SPA flow, EN/JA,
  focus-visible, and horizontal bounds were verified; the live Public artifact
  also passed the tested Chromium 390px flow but its exact source revision is
  unidentifiable. Physical-device reproduction/deployment of the correction is
  not claimed. See [acceptance result](narrativeline/narrativeline-narrow-header-robustness-acceptance1-result.md).

#### Remaining open follow-ups and decisions

- LiaisonScape Detail modal: **LOCAL MATRIX ACCEPTED / NO DEFECT** for the
  tested portrait/landscape browser matrix; physical safe-area and OS-keyboard
  coverage remains environment-specific follow-up.
- LiaisonScape phone-landscape graph-canvas expansion: **EXPLORATORY / HUMAN
  SCOPE DECISION PENDING**; no feature adoption is recorded.

#### Completed and excluded from the open inventory

The following are not re-registered as open tasks because current evidence and
the session's accepted boundaries treat them as complete or already covered:

- LiaisonScape zero-Node Add Relation disabled entry-point correction;
- selected Relation three-line status structure, Entity-status typography
  alignment, and removal of the obsolete curve-guidance message;
- the accepted browser-confirmed range for Entity/Relation selection display;
- NarrativeLine Entity Create form-width correction;
- Dataset Handoff audit and Hub link-registry verification;
- History 2 `position + circa`, Dataset-wide H1-to-H2 upgrade, and their
  accepted preservation boundaries.

The Relation technical Object ID remains a separate accepted technical-detail
surface. None of these completed boundaries is reopened by the remaining
verification or documentation candidates above. Existing dirty and untracked
work in e2r-spec, NarrativeLine, and LiaisonScape remains outside this record
and must be preserved.
