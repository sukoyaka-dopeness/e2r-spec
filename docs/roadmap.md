# E2R Medium- and Long-term Roadmap

Date: 2026-08-17

Status: Current planning document; non-normative

## Purpose

### Workspace placement migration — COMPLETED — 2026-09-21

The E2R root workspace placement migration is complete. The final direct-child
inventory is:

`8 directories / 7 Git repositories / 0 noncanonical root workspaces`

The seven canonical repositories remain direct children of
`C:\Users\\extra\\E2R`, and the `workspace` infrastructure container
holds all noncanonical experimental and diagnostic workspaces under the
approved placement policy. The migration covered the visual-evidence and
run-configuration waves, browser/CDP and runtime qualification lineages,
structural and routing experiments, the linked-worktree administration update,
the failed-clone disposition, and the final receive-lifetime special-
preservation relocation.

All approved relocations preserved each workspace's full `.git` tree, refs,
objects, source/tests, evidence, generated content, dirty state where
applicable, and relative paths. Approved dependent `remote.origin.url`
updates and the single linked-worktree admin metadata update were bounded to
their operational targets. Historical paths and provenance records were left
unchanged. The final receive-lifetime relocation preserved its branch,
646-entry dirty state, 634 untracked artifacts, Restart8 evidence, local-only
Git chronology, existing extraction, and dangling objects.

Detailed checkpoint evidence remains in `workspace\artifacts`, the
workspace-specific documents, and Git history. Those records retain the
migration sequence and preservation measurements; this summary is the current
roadmap authority for placement status. Future disposition of archived
evidence, historical provenance, or any later cleanup is separate work and is
not reopened by this closure.

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
| Documentation Hub / roadmap hygiene / new-document path policy | **IMPLEMENTED** | `docs/README.md`, `docs/documentation-plan.md`, and this section; existing paths remain stable |
| Roadmap chronology / slimming tranches 1–2, Initial Placement, and post-release observation history | **BOUNDED EXTRACTIONS COMPLETE** | [history index](roadmap-history/README.md); [slimming migration 1](roadmap-slimming-migration1-result.md); [slimming migration 2](roadmap-slimming-migration2-result.md); [Initial Placement / routing chronology migration](roadmap-initial-placement-routing-history-migration1-result.md); [2026-09-23 observation history migration](roadmap-post-release-cross-app-observation-history-migration1-result.md); this roadmap remains the sole current-planning authority |
| Roadmap → Research responsibility | **FIRST BOUNDED COMPRESSION COMPLETE / OTHER CANDIDATES REMAIN** | [audit result](roadmap-research-responsibility-audit1-result.md); [migration 1 result](roadmap-research-responsibility-migration1-result.md); current planning and Research priorities unchanged; other candidates require separate Human-reviewed manifests |
| Residual Roadmap responsibility audit | **INITIAL-PLACEMENT AND PRE-RELEASE COMPLETE / MIXED AREA AUDITED; SEED RESEARCH, PR-2, PR-3 PRE-BROWSER, AND BROWSER DIAGNOSTIC LINEAGES POINTER-COMPRESSED** | [residual audit](roadmap-residual-responsibility-audit1.md); [Initial Placement / routing compression result](roadmap-initial-placement-routing-pointer-compression1-result.md); [pre-release chronology migration result](roadmap-pre-release-chronology-migration1-result.md); [mixed-area responsibility audit](roadmap-mixed-seed-readiness-browser-responsibility-audit1.md); [Seed research pointer compression result](roadmap-seed-research-pointer-compression1-result.md); [Seed PR-2 lineage compression result](roadmap-seed-production-pr2-lineage-pointer-compression1-result.md); [Seed PR-3 pre-Browser preparation compression result](roadmap-seed-pr3-pre-browser-preparation-pointer-compression1-result.md); [Seed PR-3 Browser lineage compression result](roadmap-seed-pr3-browser-runtime-diagnostic-pointer-compression1-result.md); other mixed groups remain unchanged; current execution order is unchanged |
| NarrativeLine NL-H2-R1 | **ACCEPTED / MANUAL ACCEPTANCE COMPLETE** | [accepted application result](https://github.com/sukoyaka-dopeness/e2r-narrative-line/blob/main/docs/nl-h2-r1-history-2-candidate-recognition-and-edit-refusal-result.md) |
| NarrativeLine H2 `circa` regression candidate | **ACCEPTED / HUMAN VISUAL ACCEPTANCE COMPLETE — BOUNDED REPAIR** | NarrativeLine `02592a0` preserves existing date/time data and `3efa637` places the marker on the most specific visible Timeline row; JA date+time acceptance is `1989-11-09` / `18時53分頃`; History 2.0.0 remains Candidate |
| History 2 broader authoring scope | **DEFERRED / BOUNDED H2-POSITION-CIRCA CLOSED; FUTURE SCOPE DECISION ONLY IF REOPENED** | [scope result](history-2-user-facing-authoring-scope-result.md); [bounded scope closure](history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md); broader shapes and Relative Time authoring remain outside the current scope |
| H2-POSITION-CIRCA | **ACCEPTED / CLOSED — BOUNDED AUTHORING SCOPE** | [scope closure](history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md); [NarrativeLine acceptance result](https://github.com/sukoyaka-dopeness/e2r-narrative-line/blob/main/docs/h2-position-circa-bounded-authoring-implementation-result.md); History 2.0.0 remains Candidate |
| History 2 bounded Stable registration | **IMPLEMENTED / PROFILE REGISTERED / VALIDATOR GREEN / PUBLIC SAMPLE RELEASE COMPLETE** | [implementation result](history-2-position-circa-stable-profile-implementation-result.md); [sample migration result](public-sample-h2-migration-and-self-description-current-state-refresh-result.md); `history@2.0.0` remains Candidate while `history@2.0.0 / position-circa` is the adopted Stable profile; broader H2 surfaces remain deferred |
| Dataset-wide History 1 to History 2 upgrade | **IMPLEMENTED / AUTOMATED GREEN / BOUNDED REAL-BROWSER AND HUMAN ACCEPTANCE COMPLETE** | [NarrativeLine implementation result](https://github.com/sukoyaka-dopeness/e2r-narrative-line/blob/main/docs/history-2-dataset-wide-upgrade-implementation-result.md); [scope closure](history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md) |
| Cross-App control density / Visual Style / Flatness | **BOUNDED CORRECTIONS ACCEPTED / BROADER STYLE FOLLOW-UP AUDIT OR DESIGN ONLY** | LiaisonScape `589e3bd` and NarrativeLine `e4c2dcb`, `df69e8e`, `8495724` cover the accepted More/ordinary/detail geometry corrections. A broader Hub-reference visual-language experiment remains a separate Human-selected design question; it does not authorize a blanket CSS rewrite. |
| LiaisonScape viewport toolbar | **ACCEPTED / HUMAN VISUAL AND INTERACTION ACCEPTANCE COMPLETE** | LiaisonScape `8743fb0` records compact canvas-utility geometry and pointer-versus-keyboard focus/tooltip treatment while retaining drag, disclosure, zoom, reset, 720px, and keyboard behavior |
| NarrativeLine Detail controls | **ACCEPTED / BOUNDED GEOMETRY CORRECTIONS COMPLETE** | NarrativeLine `df69e8e` and `8495724` cover destructive/detail action geometry, Timeline Edit, and Entity Detail form width; further Picker/Create or visual-style work requires a separate current-evidence audit |
| NarrativeLine pre-public feature candidates | **SAMPLE ROLE / PROVENANCE DECISIONS RECORDED / PUBLIC ACCESS RELEASED** | [provenance authority and access result](e2r-initial-public-release-provenance-authority-cross-app-access-implementation1-result.md), [sample role decision preparation](e2r-public-sample-role-decision-preparation1-result.md), and [content/provenance audit](e2r-initial-public-release-content-sample-provenance-refresh-audit1-result.md); five ordinary Gallery families and separate Self-Description dogfood access are public; factual-source caveats remain provenance boundaries |
| Recent application identity and shell corrections | **IMPLEMENTED / ACCEPTANCE STATUS SPLIT** | Timeline `↑/↓`, Timeline Footer, Detail bottom action/AppFrame continuity, Dataset title hierarchy/direct editing, product-name-only document titles, and title input chrome/terminology have implementation evidence but are not wholesale `ACCEPTED / CLOSED` without explicit visual acceptance. The common SVG favicon has Human browser-tab/narrow confirmation |
| E2R workspace clone and evidence hygiene | **COMPLETED / ROOT PLACEMENT CLOSED (8 / 7 / 0)** | [workspace placement migration summary](#workspace-placement-migration--completed--2026-09-21); detailed evidence remains in workspace artifacts and Git history; future evidence disposition is separate work |
| Initial Public Release | **FORMALLY CLOSED / PUBLIC AUTHORITIES VERIFIED / ACCEPTED BOUNDARIES PRESERVED** | [final closure audit](e2r-initial-public-release-closure-audit-result.md); five ordinary Gallery samples, separate Self-Description dogfood access, Hub/NarrativeLine/LiaisonScape provenance links, Validator `0.6.1`, and the accepted rights/provenance boundary are public and verified; deferred History 2, Lineage, visual-quality, and future product work remain separate follow-ups |

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
and its [migration result](roadmap-post-release-cross-app-observation-history-migration1-result.md).
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
Names P1 validation and read-only Coordinate Draft Validator support are
complete at their recorded boundaries. Coordinate Prototype `0.1.0` remains
frozen; its separate Draft candidate is not Stable and application
writers/migration remain bounded by their accepted evidence. See
`research/coordinate/decisions/coordinate-draft-0.1.0-review.md` and
`examples/cross-application-demo.json`.

### Dataset Replacement Safety implementation checkpoint — 2026-08-20
LiaisonScape Dataset Replacement Safety D1-D7 and Dataset Handoff v0 were
implemented and manually accepted within their bounded scope. Detailed
authority and evidence remain in `dataset-replacement-safety-design.md` and
`dataset-replacement-safety-liaison-scape-implementation-result.md`; application
parity is separate.

### NarrativeLine Focus Phase 2 closure — 2026-08-23
Focus Phase 2 is closed for its bounded NarrativeLine scope: explicit
fresh-Entity creation focuses Name once; draft resume/history restoration do
not force focus; existing Detail screens retain no generic autofocus. Safe
Enter/form semantics and Timeline title autofocus remain deferred; this does
not authorize changes in other screens or applications (runtime checkpoint
`1d6d609`).
## Completed design milestone 1: Specification Extension redesign

The design milestone produced the Specification Extension draft `0.1.0` in
`extensions/specification-extension.md`. That draft remains a draft, not a
registered Stable Extension. Its version/dependency/Feature/bootstrap
contract and deferred registry, authentication, migration, and Core changes
are defined in the draft itself; this roadmap does not duplicate its design
checklist. Coordinate and other candidate Extensions retain their separate
maturity boundaries.

## Completed implementation milestone 2: Validator interoperability model

The read-only Validator interoperability milestone is implemented for the
Specification Extension draft. Its diagnostic and fixture detail is retained
in `production-validator-extension-integration-acceptance.md` and related
result evidence. This milestone does not promote the draft to Stable or
authorize network retrieval, migration, or application writers.

## Application evidence track

This track may prepare fixtures and experiments while the Specification
Extension is designed, but it must not pre-empt its schema decisions.

### Completed evidence milestone 3: Coordinate prototype
Coordinate prototype `0.1.0` evidence is complete and remains frozen as the
compatibility/migration baseline. Its cross-application and external-reference
evidence is retained in `foreign-graph-coordinate-interop-experiment-result.md`;
the prototype is not a Stable Extension.

### Completed design milestone 4: Coordinate draft `0.1.0`
The Coordinate draft candidate is assembled in
`extensions/coordinate-extension-draft.md`. Its accepted compatibility,
external-reference, version/evolution, and review decisions remain in the
dedicated `research/coordinate/decisions/` records; the roadmap retains the
current draft/prototype boundary rather than repeating those contracts.

### Completed implementation milestone 5: read-only Validator support
Read-only Validator support recognizes the Coordinate Draft and Prototype
identities and remains separate from application writing or migration. The
maturity and identifier decision is retained in
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

The exploratory [E2R Multidimensional History and Temporal Perspectives](../research/exploratory/e2r-multidimensional-history-temporal-perspectives.md)
research examines multiple scoped temporal values and orderings over the same
Event set, including recorded chronology, experience/recollection order,
publication/acquisition chronology, partial order, and 1D/2D/3D projections.
It preserves current `temporalOrder` semantics, keeps semantic dimensions
separate from visual projection, and remains `EXPLORATORY / NOT ACTIVE`.
No schema, Core, Extension, NarrativeLine, LiaisonScape, or implementation
change follows from this research. The 2026-09-18 design addendum also keeps
recorded position, precedence, offsets, durations, and scoped perspectives
distinct; it selects no common payload or ownership model. The same addendum
records a future Temporal Frame hypothesis for shared-origin coordinates,
including wide-range precision and serialization as research requirements;
it does not select an origin or coordinate representation.

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

The [Relative Time minimum temporal-precedence Research result](../research/exploratory/e2r-relative-time-minimum-temporal-precedence-research1.md)
is now recorded at commit `a88dd2c5f7d3f93b42e7e89c3cbf0fc8cb2fc784` as an
**EXPLORATORY / RESEARCH RESULT — NON-NORMATIVE**, pending Human review. It
compares current authority and implementation evidence and lists a minimum
contract candidate plus unresolved Human decision points; it does not adopt the
candidate, promote either draft, or authorize schema, Validator, runtime, or
application changes. Relative Time semantics and derived-display adoption
remain open. The separate [History 2 deferred-shapes authoring-scope Research
result](../research/exploratory/e2r-history2-deferred-shapes-authoring-scope-research1.md)
is recorded at commit `855a6090313aed7d77f14f0917be0e6eb0bdf4e4` as an
**EXPLORATORY / RESEARCH RESULT — NON-NORMATIVE**, pending Human review. It
compares the deferred shapes and identifies unresolved authoring contracts;
it does not adopt any shape, select an implementation scope or order, change
the accepted H2-POSITION-CIRCA boundary, or authorize specification, schema,
Validator, or application changes. The three broader shapes remain deferred,
and the existing sequence and priorities are unchanged.

The cross-workstream [Temporal Research Human Decision Preparation](temporal-research-human-decision-preparation1.md)
is complete and recorded at commit `f1f7a21d6cf4da3b66df966dd38254d5ef4bcb44`.
It organizes the unresolved Relative Time and History 2 questions, options,
dependencies, and deferrable choices; it adopts **no Human decision**,
normative semantics, deferred authoring scope, priority, sequence, or bounded
implementation. `position + circa` remains accepted/closed, the Relative Time
candidate remains unadopted, and the three broader History 2 shapes remain
deferred. Causal order and Temporal Perspectives remain separate workstreams.

The [History 2.x and Relative Time Candidate Cross-Audit](../research/history-vnext/decisions/history-2x-relative-time-cross-audit1.md)
records a non-normative candidate draft and cross-audit. It keeps History
`1.0.0` stable, treats `position`, `bounded-point`, and `temporal-extent` as
History shape candidates, treats approximation initially as a Temporal
Position capability, and treats Relative Time
`relative-position`, `containment`, `calendar-granule-relation`, and
`elapsed-offset` as separate candidate families. Recorded/Derived,
conflict/structural validity, partial understanding, and presentation
separation remain design gates. Its 2026-09-18 normalization records established
research boundaries separately from the smaller set of human decisions that
preceded the first schema candidate. The normalized boundary keeps History
2.x under the same registered `history` identifier as a same-responsibility
major-version direction, accepts basic strict `before` and basic `within`
transitivity only as Derived semantic rules with supported premises, and limits
the initial approximation candidate to Temporal Positions. The History `2.0.0`
candidate and Relative Time `0.1.0` candidate version/schema details are now
selected and implemented in the specification and Validator checkpoints.
Advanced derivation applicability and solver policy, whole-assertion
approximation, Stable registration, and application writer/migration/UI remain
open or deferred as recorded in the audit.
The first specification checkpoint now defines History `2.0.0` candidate and
Relative Time Draft `0.1.0` prose, structural schemas, representative fixtures,
exact Feature declarations, and repository-local validation. This does not
change Stable registration, application, migration UX, deployment, or release
implementation. A subsequent bounded Validator checkpoint adds exact-version-
gated, read-only structural diagnostics and limited two-edge Derived evidence;
it does not promote either candidate, create Relations, or authorize application
writes, migration, deployment, or release.

### Human-selected future interval-semantics and Timeline direction (2026-09-23)

The Human selected a separate future design/research direction for period
relationships and Timeline placement. This is a project direction only; it
does not adopt Stable or normative semantics, amend an Extension draft, or
authorize schema, Validator, runtime, UI, or application implementation.

- The committed [Relative Time bounded contract proposal](relative-time-bounded-contract-proposal1.md)
  (`e7c9bc21deca695ade11ebdb19ab5c3245cfee4d`) remains a standalone
  non-normative / not-adopted proposal limited to direct pairwise `before` /
  `after`. Its scope is not expanded by this roadmap entry.
- A separate future interval-semantics checkpoint is to consider the existing
  candidate `within` / containment together with `overlap`. `within` is not to
  be advanced as a standalone adopted interval relation ahead of that joint
  consideration. Containment and partial overlap are intended as distinct
  semantic categories; their portable definitions are not yet adopted. The
  Cross-Audit's earlier “accepted” basic `within` transitivity remains a
  non-normative Derived-rule candidate only; it does not adopt user-facing
  Recorded `within` authoring or settle `within` together with `overlap`.
- History values, including coarse values such as a year, do not automatically
  create Recorded Relative Time Relations such as `within`, `overlap`,
  `same-temporal-extent`, or boundary contact. A Recorded Relation represents
  a time relationship explicitly recorded by a user. Any relation Derived from
  History evidence is a separate question and must remain distinct from
  Recorded data; no Derived/inference contract is selected here. Matching
  coarse precision alone does not establish equal full extents or touching
  boundaries.
- Separately from semantic Relations, where semantic evidence does not
  determine an Event's Timeline position, the future presentation design
  direction is to let a user explicitly place that Event before or after
  another Event. Long-distance dragging is not a required interaction model.
  This does not define persisted placement, create a semantic Relation, or
  authorize Timeline implementation.

The meaning of `overlap`, `same-temporal-extent`, interval boundary occurrence
and contact, and Derived relationships from History remain unresolved. This
direction does not change H2-POSITION-CIRCA **ACCEPTED / CLOSED**, adopt History
2 deferred shapes, or determine future branch priority or sequencing.

### Current Relative Time extensible-vocabulary direction (2026-09-24)

> Historical current-state snapshot: this entry records the selected
> extensible-vocabulary direction before the later adoption of atomic
> Recorded assertion semantics. Its statements that semantics were not yet
> adopted and that broader semantic-contract research was the next checkpoint
> describe that earlier state; see the current adoption status below.

The current Human-selected design/research direction is recorded in
[`docs/relative-time-extensible-temporal-assertion-direction1.md`](relative-time-extensible-temporal-assertion-direction1.md),
committed as `d0d6f54947b43fa4e4bad8e646bc01b6135f9a62` (`docs: record
extensible Relative Time direction`). It treats Relative Time as an extensible
temporal-assertion vocabulary for multiple present and future applications,
not as an application-specific feature. This is a non-normative direction
record; it does not adopt an Extension contract, Stable status, schema/version,
Validator, solver, runtime, UI, or application implementation.

- The existing Human-selected qualitative `before` / `after` direction
  remains in force. Its bounded wording proposal at
  `9b3eadb479f35f5920128de941332b4be8fef835` remains valid non-normative
  evidence and is not withdrawn, but standalone normative adoption is not the
  current next checkpoint; broader vocabulary semantic-contract research /
  design comes first.
- The vocabulary is being organized into qualitative precedence
  (`before` / `after`), interval topology (`within` / `contains`, `overlap`,
  `touching`, `same-temporal-extent`), the existing point-coincidence
  candidate (`same-instant`), and the existing quantitative
  `calendar-granule-relation` / `elapsed-offset` candidates. These families
  remain distinct; no schema representation or complete portable semantics
  are selected here.
- The direction is one Relation per Recorded assertion, no required mirror
  Relation for an inverse/symmetric meaning, and allows multiple independent
  Relations about the same Object pair. It does not set conflict, duplicate,
  winner, or exclusivity rules.
- A point-like Event may be explicitly related as `within` a period Event.
  Period Events do not automatically require or create separate start/end
  Events. An optional future UI suggestion for separately meaningful start/end
  Events remains an unimplemented UX direction.
- History is not a source for automatically creating, overwriting, or
  refining Recorded Relations. History-derived relations or absolute
  placement remain a separate Derived/inference responsibility, with no
  automatic write-back. Matching coarse History values do not establish
  `same-temporal-extent` or `touching`.
- Gantt and other future scheduling use is an extensibility goal. Precise
  scheduling constraints may be considered as a separate family later; the
  coarse `before` / `after` direction must not be reinterpreted as a boundary
  rule such as `end(A) < start(B)`. Allen interval algebra is a reference for
  checking vocabulary coverage and inverse/symmetry, not an adopted algebra
  or compatibility claim.

The next substantive Relative Time research/design checkpoint is semantic
contract organization across this selected vocabulary direction, before
schema or version changes are considered. It is not schema work or
implementation authorization. The earlier interval-topology-only `within` +
`overlap` checkpoint is now considered within this broader direction rather
than the sole next semantic checkpoint. The separate Timeline presentation
direction remains separate from Relative Time Relations. Existing unresolved
boundary/applicability, `same-instant` laws, derivation, and conflict matters
remain open; no new priority among implementation branches is set. The
H2-POSITION-CIRCA accepted/closed boundary and History 2 deferred-shapes
status are unchanged.

### Human-selected next-workstream sequence — Relative Time then Documentation IA (2026-09-24)

> Historical sequencing snapshot: this plan was recorded before the Human
> disposition and the following minimum state synchronization. Its first two
> steps are complete; the minimum state synchronization and current next
> workstream are recorded below.

At the time this sequence was selected, the Relative Time atomic
Recorded-assertion checkpoint remained to be closed. Its
[adoption-readiness audit](relative-time-atomic-semantics-adoption-readiness1.md)
was committed as `53a7ae283003edac865161c4666c08f38023c361`, and the atomic
wording proposal awaited a separate Human disposition. The planned sequence
was:

1. Close the adoption-readiness review checkpoint.
2. Obtain and record the Human disposition of the atomic semantic proposal
   (adopt, request revision, defer, or reject); this roadmap entry does not
   choose that disposition.
3. Complete only the minimum Relative Time project-state/documentation sync
   needed to record that disposition.
4. Then begin a separate **Documentation Information Architecture / Roadmap
   Physical Modularization** Human structure-decision checkpoint.
5. Treat any actual directory changes, file moves/renames, archive migration,
   or roadmap split as a later, separately reviewed checkpoint after that
   structure decision.

This sequence does not wait for all Relative Time work to finish: schema or
version integration, machine evaluation, Derived semantics, Validator work,
and runtime/application implementation are not prerequisites to starting the
Documentation IA structure decision. Nor does it authorize any of them.

The [Documentation IA / Roadmap Modularization Audit](documentation-information-architecture-roadmap-modularization-audit1-result.md)
and its recommendation to retain existing paths and one roadmap for now,
strengthen navigation/current-status responsibility, and require a separate
Human structure decision remain historical evidence of that audit's
recommendation. The earlier H2-POSITION-CIRCA closure gate is already
historically satisfied; this newer sequencing decision places the structure
decision after the current atomic Relative Time disposition instead. The
latest Human-selected planning direction for that structure decision is
recorded below; neither entry itself selects a directory layout, archive
target, split unit, move/rename plan, or link-compatibility policy.

The audit's 2026-09-19 inventory found 613 files under `docs/` and an
11,508-line roadmap. A read-only count on 2026-09-24 finds 651 files under
`docs/` (649 Markdown files) and 13,315 lines in `docs/roadmap.md`. These
figures support revisiting the information architecture; they are not a
structure decision or authorization to migrate files.

#### Historical Human-selected Documentation IA review direction (2026-09-24)

> Historical preparation-stage direction: the Human structure decision below
> supersedes this section's statement that chronology separation is only a
> candidate for the next decision. The evidence and prior-audit history here
> remain unchanged.

The next Documentation IA structure decision will review roadmap length and
the flat `docs/` root together as one information-architecture workstream.
The latest read-only inventory above records 649 Markdown files under
`docs/`, many at the same root level, while `roadmap.md` carries current
planning alongside extensive completed, superseded, and historical chronology.
The Human-selected direction is to evaluate how current planning authority
can remain easy to find without growing the flat root or duplicating detailed
checkpoint evidence.

The first high-impact structural candidate to evaluate is separating
completed/superseded/historical chronology from the current roadmap body. The
future `docs/roadmap.md` is intended to remain a concise planning entry point
for current status, priority, dependencies, active workstreams, and the next
Human decision. Dedicated decision, audit, and result documents remain the
authority/evidence for checkpoint detail; the roadmap should link rather
than duplicate that detail.

Issue-by-issue files are not the default direction because they would further
increase the already large document inventory. If chronology separation alone
proves insufficient, a small number of broad responsibility/domain units may
be considered, but their boundaries are not selected. The `docs/` flat-root
organization and roadmap length are to be evaluated together, not treated as
unrelated cleanup tasks.

At the time, this updated the sequencing and questions for a future Human
structure decision; it did not select a structure. The prior audit's
single-roadmap and existing-path recommendation remains historical evidence.

#### Current Human-selected Roadmap-first structure direction (2026-09-24)

The Human selected the Roadmap-first direction recorded in [Documentation IA
/ Roadmap Physical Modularization Direction Decision 1](documentation-ia-roadmap-physical-modularization-direction-decision1.md).
Keep `docs/roadmap.md` as the concise current-planning entry point and
physically separate completed, superseded, and historical chronology while
retaining it as evidence. Detailed checkpoint authority/evidence stays in its
dedicated documents and should be linked rather than duplicated. Issue-per-file
modularization is not the default.

The selected scope is roadmap planning/chronology responsibility separation
and the reference integrity needed for that separation. The bounded
implementation-preparation and migration-gate review selected as the next
step at that time is now complete; the current migration status is recorded
below.

> Historical selection boundary: when this direction was recorded, the
> chronology destination, file count/division, directory creation, and
> physical migration remained unselected. Those bounded details were selected
> and authorized in a later decision and migration checkpoint; this historical
> snapshot is not their current status.

The `docs/` flat-root issue remains a separate future IA checkpoint; no
general taxonomy or relocation of other docs is selected.

#### Historical snapshot — Roadmap-first migration-preparation status (2026-09-24)

> This records the pre-migration gate state. The current migration result
> below supersedes its statements that destination, manifest, and physical
> migration remained undecided or had not started.

#### Historical snapshot — Roadmap Physical Modularization implementation-preparation status (2026-09-24)

The bounded [Roadmap Physical Modularization implementation-preparation
record](documentation-ia-roadmap-physical-modularization-implementation-preparation1.md)
maps the mixed current/history regions, candidate layouts, extraction gate,
and observed path/anchor references. Physical destination, unit count, and
the exact extraction manifest remain for Human selection/review. No roadmap
content or links have been migrated; the `docs/`-wide taxonomy remains a
separate later checkpoint.

#### Current Roadmap-first chronology migration status (2026-09-24)

The Human-selected bounded migration is recorded in [Roadmap Chronology
Structure Decision 1](documentation-ia-roadmap-chronology-structure-decision1.md)
and its [migration result](documentation-ia-roadmap-chronology-migration1-result.md).
The verified historical workspace-migration block remains preserved in
[`roadmap-history/legacy-chronology.md`](roadmap-history/legacy-chronology.md).
The first two bounded slimming tranches moved verified completed/superseded
entries from mixed regions into the existing Release/Cross-App unit and a new
broad LiaisonScape layout/Auto Layout unit. The [first result](roadmap-slimming-migration1-result.md)
and [second result](roadmap-slimming-migration2-result.md) record boundaries
and validation. The [Roadmap Slimming Audit](roadmap-slimming-audit1.md)
remains candidate-classification evidence, not blanket migration authority.
Remaining mixed/open content stays in this sole current-planning authority;
the wider `docs/` taxonomy and relocation remain deferred.

#### Current Relative Time atomic-semantics status after Human adoption (2026-09-24)

The Human adopted the atomic Recorded assertion semantics and stated
cross-cutting boundaries in [Relative Time Atomic Recorded Assertion
Semantics Adoption 1](relative-time-atomic-recorded-assertion-semantics-adoption1.md),
commit `a5e26b0c5b3d04ea69bfd1f6b90476fede1bb17e` (`docs: adopt Relative Time
atomic semantics`). The adoption record is the current normative semantic
authority for that bounded atomic layer. The proposal and readiness audit
remain historical proposal and audit evidence; they have not been rewritten.

This adoption does not extend current Draft/schema support, promote the
Relative Time Extension to Stable, or adopt representation, versioning,
machine evaluation, boundary rules, History mapping, cross-assertion policy,
Derived rules, Validator, migration, UI, or application implementation. Those
remain separate work. The Human-disposition step in the sequence above is
complete; this entry records the minimum project-state synchronization. The
next planned workstream is the Documentation IA / Roadmap Physical
Modularization Human structure-decision checkpoint described above. No
structure decision or migration is made by this status update.

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

The [E2R Suite long-term research](../research/exploratory/e2r-suite-long-term-milestone.md)
remains unscheduled, with no target version, date, or implementation order.
It does not change the current active LiaisonScape Initial Placement
checkpoint or authorize a Suite shell or new application.

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
- **Cross-App Dataset Replacement destructive styling parity — ACCEPTED / CLOSED**
  — the modified-only, pending-only, and modified-and-pending action matrices,
  safe-side focus, danger/hover hierarchy, EN/JA copy, and representative
  normal/narrow browser surfaces were audited. NarrativeLine's weaker
  destructive treatment was corrected locally for this dialog only. See the
  [audit result](cross-app-dataset-replacement-destructive-styling-parity-audit1-result.md).

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

**ACCEPTED / CLOSED — LOCAL HOVER CORRECTION.** The bounded Chrome audit found
matching 3px purple `focus-visible` rings and matching locale hover colors, but
LiaisonScape's bordered Home anchor lacked hover feedback while NarrativeLine
Header buttons and both locale controls had it. LiaisonScape now gives that
Home anchor the existing light-purple background/purple border hover treatment.
EN/JA, representative wide, and 390px browser states pass without overflow.
See [audit result](cross-app-shell-action-hover-focus-parity-audit1-result.md).

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

Cross-App Relation Deletion Ownership / Visibility Safety is **FORMALLY
ACCEPTED / CROSS-APP IMPLEMENTATION ALIGNED / COMPLETE** through
`XAPP-REL-DELETE6-CAPABILITY-CLOSURE`. The current canonical contract and
bounded scope are recorded in the [capability closure](cross-app-relation-deletion-capability-closure.md).
The completed NarrativeLine/LiaisonScape implementation, bidirectional
acceptance, and capability-Handoff progression are preserved as dated evidence
in the [Release and Cross-App chronology](roadmap-history/release-and-cross-app-chronology.md).
That historical progression does not reopen the accepted ownership, no-cascade,
explicit Relation-deletion, self/parallel Relation, or interoperability
boundaries. Remaining presentation follow-ups stay separately identified below.

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

The Initial Public Release is formally closed; its current status and retained boundaries remain in the status index and [closure audit](e2r-initial-public-release-closure-audit-result.md). The superseded pre-release and LiaisonScape 0.2.0 sequence is preserved, in original order and wording, in the [release and Cross-App chronology](roadmap-history/release-and-cross-app-chronology.md#pre-release-and-liaison-scape-020-release-preparation-chronology); its dated `current`, `next`, `blocked`, and `unauthorized` statements are historical snapshots.

The Initial Node Placement Objective Audit remains relevant as evidence, not as the old release sequence: both Lighthouse samples had stored coordinates and did not exercise missing-coordinate placement. Its [dedicated audit](liaisonscape-initial-node-placement-objective-audit.md) is retained as context for the current Initial Layout attribution work below; it does not change the current execution order or authorize runtime, schema, or sample changes.

### LiaisonScape Initial-Layout Coarse Objective Self-loop Boundary Audit 1 (2026-09-11)

The [Self-loop boundary audit](liaisonscape-initial-layout-coarse-objective-self-loop-boundary-audit1-result.md)
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

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-AWARE-SEED-GEOMETRY-SEMANTICS-AUDIT1 (2026-09-01)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape
Initial-placement Motif-aware Seed-geometry Semantics
Audit](liaisonscape-initial-placement-motif-aware-seed-geometry-semantics-audit.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-SPACE-AUDIT1 (2026-09-01)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape Initial-placement
Seed Candidate-space Audit](liaisonscape-initial-placement-seed-candidate-space-audit.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-SEMANTICS-AUDIT1 (2026-09-01)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape
Initial-placement Seed Candidate-generation Semantics
Audit](liaisonscape-initial-placement-seed-candidate-generation-semantics-audit.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-SEMANTICS-VALIDATION1 (2026-09-01)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape Initial-placement Seed Candidate-generation Semantics
Validation](liaisonscape-initial-placement-seed-candidate-generation-semantics-validation.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

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

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape Initial-placement Seed Candidate-generation Input Boundary Audit](liaisonscape-initial-placement-seed-candidate-generation-input-boundary-audit.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-GENERATION-DESIGN-BOUNDARY-AUDIT1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape Initial-placement Seed Candidate-generation Design Boundary Audit](liaisonscape-initial-placement-seed-candidate-generation-design-boundary-audit.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-FAMILY-OFFLINE-EXPERIMENT1-DESIGN1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape Initial-placement Seed Candidate-family Offline Experiment 1 Design](liaisonscape-initial-placement-seed-candidate-family-offline-experiment1-design.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-CANDIDATE-FAMILY-OFFLINE-EXPERIMENT1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape Initial-placement Seed Candidate-family Offline Experiment 1 Result](liaisonscape-initial-placement-seed-candidate-family-offline-experiment1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-GENERATION-ASSIGNMENT-RESPONSIBILITY-AUDIT1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape Initial-placement Seed Generation / Assignment Responsibility Audit](liaisonscape-initial-placement-seed-generation-assignment-responsibility-audit.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-SEMANTICS-DESIGN1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape
Initial-placement Seed-assignment Semantics Design](liaisonscape-initial-placement-seed-assignment-semantics-design.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FAMILY-ASSIGNMENT-EXPERIMENT-SEAM-DESIGN1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape
Initial-placement Seed Family / Assignment Experiment Seam Design](liaisonscape-initial-placement-seed-family-assignment-experiment-seam-design.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

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

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FAMILY-ASSIGNMENT-EXPERIMENT-SEAM1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape Initial-placement Seed Family / Assignment
Experiment Seam 1](liaisonscape-initial-placement-seed-family-assignment-experiment-seam1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-EQUIVARIANCE-FOLLOWUP1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape Initial-placement Seed Assignment Equivariance Follow-up](liaisonscape-initial-placement-seed-assignment-equivariance-followup.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

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

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-CANDIDATE-FAMILY-EXPERIMENT-DESIGN1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape practical seed-family experiment design](liaisonscape-initial-placement-seed-practical-candidate-family-experiment-design.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-CANDIDATE-FAMILY-EXPERIMENT1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape practical candidate-family experiment](liaisonscape-initial-placement-seed-practical-candidate-family-experiment1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-QUALITY-EXPERIMENT-DESIGN1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape practical-family structural-quality experiment design](liaisonscape-initial-placement-seed-practical-family-structural-quality-experiment-design.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-QUALITY-EXPERIMENT1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape practical-family structural-quality experiment](liaisonscape-initial-placement-seed-practical-family-structural-quality-experiment1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-ASSIGNMENT-SENSITIVITY-FOLLOWUP1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape practical-family structural assignment-sensitivity follow-up](liaisonscape-initial-placement-seed-practical-family-structural-assignment-sensitivity-followup1.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TOPOLOGY-AWARE-ASSIGNMENT-EXPERIMENT-DESIGN1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape topology-aware assignment experiment design](liaisonscape-initial-placement-seed-topology-aware-assignment-experiment-design.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TOPOLOGY-AWARE-ASSIGNMENT-EXPERIMENT1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape topology-aware assignment experiment](liaisonscape-initial-placement-seed-topology-aware-assignment-experiment1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-RESEARCH1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape structural-assignment objective research](liaisonscape-initial-placement-seed-structural-assignment-objective-research1.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-PARTIAL-PREFERENCE-DESIGN1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape structural-assignment partial-preference design](liaisonscape-initial-placement-seed-structural-assignment-partial-preference-design.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-FANOUT-PARTIAL-PREFERENCE-DESIGN1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape fan-out partial-preference design](liaisonscape-initial-placement-seed-fanout-partial-preference-design.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-EXACT-ANGULAR-GAP-COMPARATOR-DESIGN1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape exact angular-gap comparator design](liaisonscape-initial-placement-seed-exact-angular-gap-comparator-design.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape structural-assignment objective experiment design](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment-design.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TOPOLOGY-AWARE-ASSIGNMENT-MANIFEST-RECONSTRUCTION-DESIGN1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [LiaisonScape assignment manifest reconstruction design](liaisonscape-initial-placement-seed-topology-aware-assignment-manifest-reconstruction-design.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA1-QUALITY-NEUTRAL-WITNESS-DESIGN1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [TA-1 quality-neutral witness design](liaisonscape-initial-placement-seed-ta1-quality-neutral-witness-design.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA1-OPERATIONAL-WITNESS-RECONSTRUCTION1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [TA-1 operational witness reconstruction](liaisonscape-initial-placement-seed-ta1-operational-witness-reconstruction1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-LIGHTHOUSE-FIXTURE-PROVENANCE-RECONCILIATION1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [Lighthouse fixture provenance reconciliation](liaisonscape-initial-placement-seed-lighthouse-fixture-provenance-reconciliation1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN2 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [reduced structural-assignment objective design](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment-design2.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT2 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [Experiment2 result](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment2-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-POLICY-MANIFEST-RECOVERY1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [TA-2 policy manifest recovery result](liaisonscape-initial-placement-seed-ta2-policy-manifest-recovery1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-POLICY-SEMANTICS-DESIGN1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [TA-2 policy semantics design](liaisonscape-initial-placement-seed-ta2-policy-semantics-design.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-OPERATIONAL-WITNESS-RECONSTRUCTION1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [TA-2 operational witness reconstruction result](liaisonscape-initial-placement-seed-ta2-operational-witness-reconstruction1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-MOTIF-RESPONSIBILITY-ENCODING-RECONCILIATION1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [TA-2 motif responsibility encoding reconciliation result](liaisonscape-initial-placement-seed-ta2-motif-responsibility-encoding-reconciliation1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA2-MOTIF-OPERATIONAL-WITNESS-RECONSTRUCTION1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [TA-2 motif operational witness reconstruction result](liaisonscape-initial-placement-seed-ta2-motif-operational-witness-reconstruction1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN3 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [Design3 result](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment-design3.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT3 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [Experiment3 result](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment3-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-MANIFEST-RECOVERY1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [TA-3 correspondence manifest recovery result](liaisonscape-initial-placement-seed-ta3-correspondence-manifest-recovery1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-SEMANTICS-DESIGN1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [new TA-3 correspondence semantics design](liaisonscape-initial-placement-seed-ta3-correspondence-semantics-design1.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-OPERATIONAL-WITNESS-RECONSTRUCTION1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [TA-3 operational witness reconstruction result](liaisonscape-initial-placement-seed-ta3-correspondence-operational-witness-reconstruction1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN4 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [Design4 specification](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment-design4.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [Experiment4 preflight result](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment4-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-INTEGRITY-RECONCILIATION1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [Experiment4 integrity reconciliation result](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment4-integrity-reconciliation1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-RERUN1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [Experiment4 Rerun1 result](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment4-rerun1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-INTERPRETATION1 (2026-09-02)

Detailed checkpoint evidence and dated disposition remain in [Experiment4 Interpretation1 result](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment4-interpretation1-result.md). This research/design snapshot is not current execution authority and does not authorize Production selection, Product adoption, or visual acceptance.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-RESEARCH-SYNTHESIS1 (2026-09-02)

**RESEARCH CLOSURE ONLY — FIXTURE-LOCAL; INF-W0 / INF-W1 CEILING.** The TA0–TA3 branch is saturated at current scope; no Experiment5 is justified. Hard-validity, fixture-local structural preference, visual quality, and Production acceptance remain separate; no universal winner, cross-fixture ranking, Production selection, or visual acceptance follows. Full synthesis and correction authority: [Research Synthesis1 result](liaisonscape-initial-placement-seed-structural-assignment-research-synthesis1-result.md). The dated Production Readiness next-step is a checkpoint snapshot; current sequencing remains in `Current Initial Layout / Parallel Presentation Coordination`.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-READINESS-DESIGN1 (2026-09-02)

Detailed readiness criteria and the checkpoint's dated disposition remain in the [Production Readiness Design1 authority](liaisonscape-initial-placement-seed-production-readiness-design1.md). The later PR-2 completion result is the current pointer for bounded nonvisual status and remaining-stage boundaries.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-READINESS-EVIDENCE-AUDIT1 (2026-09-02)

The inventory reconciliation and its dated findings remain in the [readiness evidence audit result](liaisonscape-initial-placement-seed-production-readiness-evidence-audit1-result.md). Its historical blocker/sequence snapshot is superseded for current bounded PR-2 status by the later completion result.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-DESIGN1 (2026-09-03)

The bounded, disposable materialization contract and its role boundaries remain in the [candidate materialization design](liaisonscape-initial-placement-seed-production-candidate-materialization-design1.md); the evaluation surface is not Production integration or candidate selection.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-IMPLEMENTATION1 (2026-09-03)

Implementation evidence and its dated result remain in the [materialization implementation result](liaisonscape-initial-placement-seed-production-candidate-materialization-implementation1-result.md). Its bounded harness results do not establish Production integration or candidate selection.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-VALIDATION1 (2026-09-03)

Validation evidence and its bounded claims remain in the [materialization validation result](liaisonscape-initial-placement-seed-production-candidate-materialization-validation1-result.md). The old “next PR-2 prerequisite” wording is a dated snapshot; PR-2's later disposition is recorded under the completion checkpoint below.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-COMPATIBILITY-AUDIT1 (2026-09-03)

The compatibility audit's dated findings remain in the [candidate compatibility audit result](liaisonscape-initial-placement-seed-production-candidate-compatibility-audit1-result.md); its earlier PR-2 status is superseded by the later bounded completion result.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-COMPATIBILITY-DESIGN1 (2026-09-03)

The validated common compatibility contract remains in the [candidate compatibility design result](liaisonscape-initial-placement-seed-production-candidate-compatibility-design1-result.md). Compatibility evidence defines bounded evaluation boundaries; it is not candidate selection or Production integration.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-COMPATIBILITY-VALIDATION1 (2026-09-03)

The validated bounded compatibility evidence and its limitations remain in the [candidate compatibility validation result](liaisonscape-initial-placement-seed-production-candidate-compatibility-validation1-result.md). Its earlier “PR-2 not started” sequencing is superseded by the completion checkpoint below.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-PR2-NONVISUAL-EVIDENCE-COMPLETION1 (2026-09-03)

**Current bounded disposition: PR-2 nonvisual evidence is COMPLETE-BOUNDED** for the four required classes (hard validity, determinism/runtime, compatibility, and provenance), the five frozen research materializer identities, and `1 <= N <= 65`; the dedicated [PR-2 completion result](liaisonscape-initial-placement-seed-production-pr2-nonvisual-evidence-completion1-result.md) is the detailed evidence authority. The bounded run covered seven committed real fixtures and six deterministic controls; all 65 eligible cells passed HARD-1..7, while N=0 and N=66 failed closed.

This does not select a candidate or establish a Production provider, Product adoption, Production integration, or visual acceptance; no candidate is selected and `PR-C3` through `PR-C5` remain `NO`. Compatibility evidence and candidate selection remain separate. The realistic fixture ROLE GAP remains open for later stages. PR-3 visual/settling/routing and subsequent integration evidence are separate, unaccepted scopes; see the [PR-3 evidence design result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-design1-result.md) for their current contract and status.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-DESIGN1 (2026-09-03)
The frozen PR-3 visual/settling/routing evidence contract remains in [visual, settling, and routing evidence design result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-design1-result.md). It is a preparation contract, not visual acceptance or PR-3 completion; PR-2 remains a separate COMPLETE-BOUNDED input.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-FIXTURE-ROLE-ACQUISITION-DESIGN1 (2026-09-03)
The acquisition contract and then-incomplete corpus snapshot remain in [fixture-role acquisition design result](liaisonscape-initial-placement-seed-production-visual-fixture-role-acquisition-design1-result.md); the later acquisition result below is authoritative for the resulting corpus status.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-FIXTURE-ROLE-ACQUISITION1 (2026-09-03)
Current corpus status: CORPUS-COMPLETE; PR-3 remains unestablished. Role assignments and provenance are recorded in [visual fixture role acquisition result](liaisonscape-initial-placement-seed-production-visual-fixture-role-acquisition1-result.md). Corpus completion alone is not candidate materialization, visual acceptance, or PR-3 completion.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-HARNESS-DESIGN1 (2026-09-03)
The initial harness contract and its design-blocked disposition remain in [visual evidence harness design result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-harness-design1-result.md); the later implementation result records the bounded harness candidate status.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-DESIGN1 (2026-09-03)
Product modularization was explicitly partial: the Product-owned pure evaluation seams remained distinct from App-owned lifecycle, manual state, and interaction. The detailed equivalence and isolation contract remains in [Product evaluation seam design result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-design1-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1A (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Implementation1A characterization result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1a-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CONFLICT-RESOLUTION1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Relation-order conflict resolution result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-characterization-order-conflict-resolution1-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-IMPLEMENTATION1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [order canonicalization implementation result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-characterization-order-canonicalization-implementation1-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-ADOPTION1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [order canonicalization adoption result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-characterization-order-canonicalization-adoption1-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-BASELINE2 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [post-correction baseline-v2 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-characterization-order-canonicalization-baseline2-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-EQUIVALENCE-RECONCILIATION1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [authority and equivalence reconciliation result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-characterization-order-canonicalization-equivalence-reconciliation1-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1B (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Implementation1B settling-kernel refactor result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1b-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1B-ADOPTION1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Implementation1B Adoption1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1b-adoption1-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1C (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Implementation1C result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1c-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1C-ADOPTION1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Implementation1C Adoption1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1c-adoption1-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1D (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Implementation1D result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1d-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1D-ADOPTION1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Implementation1D Adoption1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1d-adoption1-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1E (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Implementation1E result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1e-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1E-ADOPTION1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Implementation1E Adoption1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1e-adoption1-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Implementation1F result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1f-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F-ADOPTION1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Implementation1F Adoption1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1f-adoption1-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F-CSS-PROVENANCE-RECONCILIATION1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [CSS provenance reconciliation result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1f-css-provenance-reconciliation1-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F-ADOPTION1-RETRY1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Adoption1-Retry1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1f-adoption1-retry1-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1G (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Implementation1G result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1g-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1G-ADOPTION1 (2026-09-03)
The 1B-1E Product-owned seam refactors were adopted under their recorded behavior-preservation baselines. The 1F/1G evaluation render/browser infrastructure was separately adopted as isolated evaluation infrastructure; it did not integrate a research candidate or alter Dataset semantics. This lineage's recorded Product/evaluation authority is 563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf; later Product-source evolution has separate authority, so this is not a claim that the sibling repository's current source is unchanged. See [Implementation1G Adoption1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-product-evaluation-seam-implementation1g-adoption1-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-HARNESS-IMPLEMENTATION1 (2026-09-03)
The disposable harness was validated as an implementation candidate, not adopted to Live as a complete harness; its result is in [dedicated harness implementation result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-harness-implementation1-result.md). This checkpoint did not produce PR-3 candidate/visual evidence. The separately adopted evaluation entry infrastructure is recorded under Implementation1G Adoption1.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-DESIGN1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Run Configuration Design1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-design1.md).

### E2R-GAMEBOOK-VSCODE-EXTENSION-RESEARCH-NOTE1 (2026-09-03)

**DEFERRED / IDEA HOLD.** Research may reopen only when a concrete, testable,
materially E2R-specific differentiation claim satisfies the frozen
`RESTART-TRIGGER-v1` and is separately reviewed. This capsule is not active,
next, or priority work; no extension repository, prototype, schema, player
runtime, implementation, or Product change is authorized. See the [E2R
Gamebook / Interactive Narrative VS Code Extension research note](e2r-gamebook-vscode-extension-research-note1.md)
for the hypotheses, unverified prior-art leads, open Core mapping question,
and complete restart criteria.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-DESIGN1-CORRECTION1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Run Configuration Design1 Correction1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-design1-correction1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Run Configuration Evidence1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-evidence1-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE1-PROTOCOL-PROVENANCE-RECONCILIATION1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Evidence1 protocol provenance reconciliation result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-evidence1-protocol-provenance-reconciliation1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-TRANSLATION-COVARIANCE-DESIGN-RECONCILIATION1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [translation covariance design reconciliation](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-translation-covariance-design-reconciliation1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-CANONICAL-ORIGIN-EVIDENCE2 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [canonical-origin Evidence2 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-canonical-origin-evidence2-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE2-SOURCE-HASH-PROVENANCE-RECONCILIATION1 (2026-09-03)
Detailed checkpoint evidence and dated disposition remain in [Evidence2 source-hash provenance reconciliation](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-evidence2-source-hash-provenance-reconciliation1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-MACHINE-EXECUTION1 (2026-09-03)
Machine Execution1's bounded machine matrix completed V0 40/40, V1 40/40, V2 80/80 (160 total), with B0 8 and B1 machine-side 16 complete. Its immutable evidence and limits remain in [Machine Execution1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-machine-execution1-result.md). Browser-side status is not carried forward from this dated machine snapshot.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-ADOPTION1 (2026-09-03)
PR3-RUNTIME-TRANSFORM-v1 is ADOPTED/FROZEN only for this bounded PR-3 seed-evaluation lineage (origin 0/1,0/1; scale 6144/1). It is not Product coordinate policy or candidate semantics and does not establish visual acceptance, selection, or PR-3 completion. Details: [Run Configuration Adoption1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-adoption1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-MACHINE-EXECUTION1-BROWSER-LINEAGE-READINESS-RECONCILIATION1 (2026-09-04)
This audit's cross-phase identity ambiguity was resolved by the following phase-bridge correction; Machine evidence remains valid and is not rewritten. Audit detail: [Machine Execution1 browser-lineage readiness reconciliation](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-machine-execution1-browser-lineage-readiness-reconciliation1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-IDENTITY-PHASE-BRIDGE-DESIGN-CORRECTION1 (2026-09-04)
The frozen phase bridge keeps Machine evidence immutable and phase-local; the later Browser lineage references its exact artifacts without copying, rewriting, or re-identifying them. This summary makes no Browser Capture execution/status claim. Contract: [Run-Identity Phase-Bridge Design Correction1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-identity-phase-bridge-design-correction1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-result.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-CDP-LAUNCH-READINESS-DIAGNOSTIC1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture1 CDP launch/readiness diagnostic result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-cdp-launch-readiness-diagnostic1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-CDP-LAUNCH-READINESS-DIAGNOSTIC3 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture1 CDP Launch/Readiness Diagnostic3 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-cdp-launch-readiness-diagnostic3.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-CDP-LAUNCH-READINESS-DIAGNOSTIC2 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture1 CDP Launch/Readiness Diagnostic2 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-cdp-launch-readiness-diagnostic2.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-RUNTIME-POST-REBOOT-QUALIFICATION1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Host Runtime Post-Reboot Qualification1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-runtime-post-reboot-qualification1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-BROWSER-RUNTIME-STABILITY-QUALIFICATION1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Runtime Stability Qualification1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-browser-runtime-stability-qualification1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-GPU-RUNTIME-DIAGNOSTIC1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Host/GPU Runtime Diagnostic1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-gpu-runtime-diagnostic1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-GPU-RUNTIME-GRAPHICS-DIAGNOSTIC2 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Host/GPU Runtime Graphics Diagnostic2 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-gpu-runtime-graphics-diagnostic2.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-RUNTIME-VSCODE-STABLE-EXCLUSION-QUALIFICATION1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [VS Code Stable Exclusion Qualification1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-runtime-vscode-stable-exclusion-qualification1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-RUNTIME-VSCODE-STABLE-PRESENT-ABSENT-CONFIRMATION1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [VS Code Stable Present/Absent Confirmation1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-runtime-vscode-stable-present-absent-confirmation1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-RUNTIME-BROWSER-CAPTURE-READINESS-REQUALIFICATION1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture Readiness Requalification1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-host-runtime-browser-capture-readiness-requalification1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART1-PROTOCOL-A (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture1 Restart1 Protocol A result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart1-protocol-a.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART1-B1-EXECUTION1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture1 Restart1 B1 Execution1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart1-b1-execution1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART1-B1-ENTRY-SEAM-CORRECTION1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture1 Restart1 B1 Entry-Seam Correction1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart1-b1-entry-seam-correction1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART1-B1-ENTRY-READINESS-DIAGNOSTIC1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture1 Restart1 B1 Entry Readiness Diagnostic1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart1-b1-entry-readiness-diagnostic1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART2-PROTOCOL-A (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture1 Restart2 Protocol A result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart2-protocol-a.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-PR3-RUN-IDENTITY-BROWSER-IMPLEMENTATION-AUTHORITY-DESIGN-CORRECTION1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture implementation-authority design correction result](liaisonscape-browser-capture-pr3-run-identity-browser-implementation-authority-design-correction1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-PR3-RUN-IDENTITY-BROWSER-IMPLEMENTATION-AUTHORITY-IMPLEMENTATION1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture implementation-authority implementation result](liaisonscape-browser-capture-pr3-run-identity-browser-implementation-authority-implementation1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART3-APP-READINESS-CDP-CALL-CORRECTION-QUALIFICATION1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Restart3 app-readiness/CDP-call correction qualification result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart3-app-readiness-cdp-call-correction-qualification1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART2-PROTOCOL-A (2026-09-04) - v2 binding

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture1 Restart2 Protocol A v2 binding result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart2-protocol-a-v2-binding.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART2-B1-EXECUTION1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture1 Restart2 B1 Execution1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart2-b1-execution1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART2-EXECUTOR-RUN-ROOT-BINDING-CORRECTION1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Restart2 executor/run-root binding correction result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart2-executor-run-root-binding-correction1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART3-PROTOCOL-A (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Restart3 Protocol A result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart3-protocol-a.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART3-B1-EXECUTION1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Restart3 B1 Execution1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart3-b1-execution1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART3-TARGET-SELECTION-RUNTIME-CORRECTION-QUALIFICATION1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Restart3 target-selection runtime correction qualification result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart3-target-selection-runtime-correction-qualification1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART3-SHARED-CDP-TRANSPORT-CLIENT-CORRECTION-QUALIFICATION1 (2026-09-04)

Detailed dated checkpoint evidence and immutable lineage state remain in [Restart3 shared CDP transport/client correction qualification result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart3-shared-cdp-transport-client-correction-qualification1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART3-SHARED-CDP-WEBSOCKET-INDEPENDENT-CLIENT-DIAGNOSTIC1 (2026-09-05)

Detailed dated checkpoint evidence and immutable lineage state remain in [Restart3 independent CDP WebSocket client diagnostic result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart3-shared-cdp-websocket-independent-client-diagnostic1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-WEBSOCKET-CLIENT-AUTHORITY-REPLACEMENT-DESIGN-CORRECTION1 (2026-09-05)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture1 WebSocket client authority / replacement design correction result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-websocket-client-authority-replacement-design-correction1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-DOTNET-WEBSOCKET-BRIDGE-IMPLEMENTATION1 (2026-09-05)

Detailed dated checkpoint evidence and immutable lineage state remain in [ClientWebSocket bridge implementation result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-dotnet-websocket-bridge-implementation1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-DOTNET-WEBSOCKET-BRIDGE-HELPER-EXECUTION-POLICY-COMPATIBILITY-QUALIFICATION1 (2026-09-05)

Detailed dated checkpoint evidence and immutable lineage state remain in [helper execution-policy compatibility result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-dotnet-websocket-bridge-helper-execution-policy-compatibility-qualification1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-DOTNET-NON-SCRIPT-WEBSOCKET-HELPER-AUTHORITY-DESIGN-CORRECTION1 (2026-09-05)

Detailed dated checkpoint evidence and immutable lineage state remain in [non-script WebSocket helper authority design correction result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-dotnet-non-script-websocket-helper-authority-design-correction1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-DOTNET-EXE-WEBSOCKET-HELPER-IMPLEMENTATION1 (2026-09-05)

Detailed dated checkpoint evidence and immutable lineage state remain in [production .NET executable helper implementation result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-dotnet-exe-websocket-helper-implementation1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-DOTNET-EXE-HELPER-RUNTIME-QUALIFICATION-DIAGNOSTIC-CORRECTION1 (2026-09-05)

Detailed dated checkpoint evidence and immutable lineage state remain in [executable helper runtime qualification diagnostic result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-dotnet-exe-helper-runtime-qualification-diagnostic-correction1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART4-PROTOCOL-A (2026-09-05)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture1 Restart4 Protocol A result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart4-protocol-a.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART4-B1-EXECUTION1 (2026-09-05)

Detailed dated checkpoint evidence and immutable lineage state remain in [Browser Capture1 Restart4 B1 Execution1 result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart4-b1-execution1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RESTART4-B1-LOCAL-WEBSOCKET-CONNECTION-REFUSAL-DIAGNOSTIC-CORRECTION1 (2026-09-05)

Detailed dated checkpoint evidence and immutable lineage state remain in [Restart4 B1 local WebSocket refusal diagnostic](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-restart4-b1-local-websocket-connection-refusal-diagnostic-correction1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-EDGE-PROCESS-LIFETIME-HOST-RUNTIME-DIAGNOSTIC1 (2026-09-05)

Detailed dated checkpoint evidence and immutable lineage state remain in [Edge process lifetime / host runtime diagnostic](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-edge-process-lifetime-host-runtime-diagnostic1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-EDGE-PROCESS-LIFETIME-RECURRENCE-READINESS-DECISION1 (2026-09-05)

Detailed dated checkpoint evidence and immutable lineage state remain in [recurrence/readiness decision](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-edge-process-lifetime-recurrence-readiness-decision1.md).

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-APPLICATION-READINESS-RECURRENCE-DIAGNOSTIC1 (2026-09-05)

Detailed dated checkpoint evidence and immutable lineage state remain in [application-readiness diagnostic](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-application-readiness-recurrence-diagnostic1.md).

### Browser Capture Runtime Convergence Diagnostic/Correction1 (2026-09-05)

Detailed dated checkpoint evidence and immutable lineage state remain in [runtime convergence result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-browser-capture1-runtime-convergence-diagnostic-correction1.md).

### PR-3 Browser Evidence current-host runtime blocker synchronization (2026-09-07)

Current status is maintained in the [current-host runtime blocker synchronization](liaisonscape-browser-capture-current-host-runtime-blocker-synchronization.md): current-host Browser execution and PR-3 Browser Evidence are **BLOCKED**; the exact runtime root cause remains **UNRESOLVED**, no repository-local safe correction is identified, and the existing .62 authority pin remains deferred pending a qualified successor. B1 is not passed, V3 has not started, no successor authority is available, and Fresh lineage4 is ineligible. Resume only after runtime qualification passes under the same accepted security boundary and Browser authority is qualified/reconciled without rewriting historical evidence. This is not READY or PR-3 acceptance.

### NarrativeLine Display-Order Reordering Audit (2026-09-07)

The [NarrativeLine Display-Order Reordering Audit](narrativeline-display-order-reordering-audit.md)
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

The [Pre-Public-Release Push and Deployment Readiness Audit](pre-public-release-push-deployment-readiness-audit.md)
is **COMPLETE / DEFER FOR NOW / PUBLIC WRITE NOT AUTHORIZED**. The audit
confirmed that the local Validator 0.4.0 publication, consumer integration,
local Public Sample acceptance, S3 licensing/provenance formalization, and
LiaisonScape 0.2.0 preparation are recorded as complete, but the exact public
release set is not yet stable: e2r-spec retains an unrelated dirty session-log
change, LiaisonScape retains modified sample mirrors and twelve local commits
ahead of its tracked `origin/main`, and public propagation/deployment
acceptance plus the final Cross-App / Release Audit remain outstanding.

No push, tag, deploy, publication, cleanup, or cross-repository source change
was performed. PR-3 Browser Evidence remains formally BLOCKED and is not
replaced by an alternate evidence path. A future release checkpoint must first
define and reconcile exact release commits, preserve unrelated dirty state, run
the final Cross-App / Release Audit, and obtain explicit authorization for each
public write.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-REVIEW-EXECUTION-AUTHORITY1 (2026-09-08)

The [visual review execution authority result](liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-review-execution-authority1.md)
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

The [Early Smoke Check policy](visual-evidence-early-smoke-check-policy.md)
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
Baseline](liaisonscape-end-to-end-performance-baseline.md). Retain its timing
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

The [parallel Edge / incident bundle retune result](liaisonscape-parallel-edge-incident-bundle-presentation-retune1-result.md)
and its [human-review handoff](liaisonscape-parallel-edge-incident-bundle-human-review-handoff.md)
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

The [obstacle-sensitive decomposition result](liaisonscape-initial-layout-obstacle-sensitive-crossing-decomposition-audit1-result.md)
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

The [Parallel / Incident Bundle Geometry Attribution 1 result](liaisonscape-parallel-incident-bundle-geometry-attribution1-result.md)
classifies the bounded matched audit as `MIXED / RETUNE`. With coordinates
held constant, pair/bundle slot policy directly changed parallel route geometry
and Relation-label clearance. Titanic JA also changed one ordinary incident
route and reduced measured outer clearance to about 0.1px after widening;
`fleet` and `andrews` remained obstacle-influenced routes. This confirms that
parallel readability cannot be accepted from internal lane separation alone.

Mirror/rotation placement controls under the same routing semantics changed
side bias and label clearance, including a 3-parallel long-label synthetic
case. Placement therefore contributes through neighbor angular distribution,
but no fixture-specific swap or circular-order rule is accepted. The next
geometry hypothesis is a Relation-label-aware incident-bundle corridor that
preserves internal physical-side ordering, outer ordinary-Edge clearance, and
bundle-level obstacle coexistence. Fixed pair spacing is not sufficient.

Parallel bundle geometry and Structural Placement / Angular Ordering remain
adjacent retune tracks; the attribution result does not make them a serial
dependency. Self-loop / ordinary-Edge interaction remains independent. No
bounded production retune or new human acceptance was made. Product
default/adoption remains `HOLD`, production provider remains `NOT ESTABLISHED`,
and the Initial Layout Release blocker remains `OPEN`.

### LiaisonScape Parallel Incident-Bundle Corridor Retune 2 (2026-09-13)

The [Parallel Incident-Bundle Corridor Retune 2 result](liaisonscape-parallel-incident-bundle-corridor-retune2-result.md)
implemented an opt-in label-aware slot probe. It used the existing deterministic
Relation-label width, chord-normal projection, and gutter to widen internal
parallel lanes without changing default routing, manual curvature, or
Self-loop behavior.

The probe improved internal label/lane measurements but was not quality-safe as
a whole-bundle rule: Titanic EN side bias worsened to 10.38 and outer clearance
fell to 1.6px; Titanic JA retained obstacle influence and near-zero outer
clearance; the reverse synthetic bundle balanced its lanes while consuming all
outer clearance. The 3-parallel long-label case likewise retained zero outer
clearance. No human-review handoff was prepared for this candidate.

The working contract is therefore escalated from internal label-aware spacing
to true group-level corridor allocation: preserve physical-side ordering and
label envelopes, then allocate bundle center/detour together with outer
ordinary-Edge and obstacle guards. Endpoint/neighbor angular distribution
remains an adjacent Structural Placement / Angular Ordering input. Parallel
and structural tracks remain neighboring retune tracks; Self-loop remains
independent. Product default/adoption is `HOLD` and the Initial Layout Release
blocker remains `OPEN`.

### LiaisonScape Parallel / Incident Geometry Formulation Exploration 1 (2026-09-13)

The [formulation exploration result](liaisonscape-parallel-incident-geometry-formulation-exploration1-result.md)
classifies further offset/corridor tuning as `PIVOT / NOT READY FOR HUMAN
REVIEW`. The current sequential route-then-label pipeline cannot reserve final
parallel label envelopes and later ordinary incident routes in one decision.
That decision boundary explains the repeated internal-clearance versus outer-
gutter and side-bias trade-off.

A diagnostic atomic-bundle portfolio plus incident ordinary rerouting was
deterministic and materially improved the 2-label, 3-plus, reverse-direction,
long/short, and obstacle synthetic controls. It also repaired Titanic EN label
ownership and side balance, but canonical Lighthouse lost outer clearance and
Titanic required 8 ordinary-route changes. The candidate is therefore causal
evidence, not an accepted presentation rule.

The next Parallel track is an endpoint-sector and atomic incident allocator
above per-Relation routing. It must allocate the complete incident set,
Relation-label reservations, bundle center/detour, obstacle guards, and
physical-side order as one bounded decision. When no sector is feasible it may
return a generic angular-capacity requirement to Structural Placement /
Angular Ordering; a fixed placement correction is rejected because the 32-
degree probe improved Titanic EN but reduced Lighthouse minimum Node
separation from 85.5px to 40px.

Parallel presentation and Structural Placement remain adjacent negotiating
tracks. Self-loop remains independent. Product default/adoption remains
`HOLD`, production provider remains `NOT ESTABLISHED`, Initial Layout
re-baseline remains blocked, and the Release blocker remains `OPEN`.

### LiaisonScape Parallel / Incident Routing Architecture Experiment 1 (2026-09-13)

The [incident routing architecture experiment](liaisonscape-parallel-incident-geometry-formulation-exploration1-result.md)
extends the previous corridor probe with a bounded atomic incident portfolio
and a hard-feasibility-first gate. The candidate evaluates parallel lanes,
Relation-label reservation, outer ordinary Relations, obstacle influence,
physical-side uniqueness, and crossing safety before comparing side bias and
detour cost. It is deterministic and improves the synthetic short/short,
long/long, long/short, 3-plus, reverse, ordinary, and obstacle controls.

The canonical result is not yet safe: no hard-feasible candidate was found in
Lighthouse EN/JA or Titanic EN because outer clearance was unavailable; Titanic
JA had only 3/35 feasible candidates and required 8 ordinary-route changes.
This records a generic capacity shortage rather than silently accepting a
scalar trade-off. A fixed 32-degree angular relief is also rejected because
it reduced Lighthouse minimum Node separation from 85.5px to 40px.

The next implementation boundary is therefore an endpoint-sector/port
allocator above per-Relation routing. It should atomically reserve the whole
incident set and return a generic angular-capacity request to Structural
Placement when routing cannot satisfy the contract. No candidate is ready for
Human Review. Product default/adoption remains `HOLD`, production provider
remains `NOT ESTABLISHED`, and the Initial Layout Release blocker remains
`OPEN`; Self-loop remains independent.

### LiaisonScape Endpoint-Sector / Port Allocation Architecture Experiment 2 (2026-09-13)

The [Experiment 2 result](liaisonscape-endpoint-sector-port-allocation-architecture-experiment2-result.md)
classifies the bounded architecture as `RETUNE / NOT READY FOR HUMAN REVIEW`.
A first-class contract now separates feasible allocation, structured capacity
shortage, and diagnostic fallback rendering. Joint endpoint-budget search also
showed that the previous Lighthouse shortage was a bundle-first search
artifact: Lighthouse EN/JA became feasible with no ordinary-route churn, and
Titanic JA churn fell from 8 Relations to 1. Titanic EN remained infeasible and
returned an approximately 12.2-degree half-sector shortage plus outer/obstacle
pressure.

The next routing step is a multi-bundle endpoint plan with explicit port
reservations and bounded backtracking. Structural Placement / Angular Ordering
may concurrently test the generic Titanic EN capacity request, but must preserve
Node separation, viewport fit, and unrelated corridors; fixed angular relief
remains rejected. Self-loop remains independent. Product default/adoption is
`HOLD`, production provider is `NOT ESTABLISHED`, Initial Layout re-baseline is
blocked, and the Release blocker remains `OPEN`.

### LiaisonScape Endpoint Plan Candidate Compression + Capacity-Negotiated Placement Safety (2026-09-13)

The [candidate compression and capacity safety result](liaisonscape-endpoint-plan-candidate-compression-capacity-safety-experiment-result.md)
is `RETUNE / NOT READY FOR HUMAN REVIEW`. A conservative geometry-family
portfolio reduced direct per-group candidate generation while retaining
canonical feasible/shortage outcomes and the shared multi-bundle plan. Smaller
families dropped rare feasible synthetic candidates; the retained family still
drifts selected output in short/short, long/short, and multiple-ordinary cases,
so no existing Human evidence is inherited.

Titanic EN's structured 26.4-degree request was applied as a generic,
request-driven placement counterfactual: endpoint planning became feasible and
Node separation changed 68.3px to 64.4px, with crossings 0. Viewport, unrelated
corridor, lifecycle, and Human readability evidence remain open. Continue with
compression retuning and request-driven placement safety before Product-facing
integration; Product default/adoption remains `HOLD`, production provider is
`NOT ESTABLISHED`, and the Release blocker remains `OPEN`.

### LiaisonScape Endpoint Plan / Multi-Bundle Incident Allocation Experiment (2026-09-13)

The [endpoint-plan result](liaisonscape-endpoint-plan-multi-bundle-incident-allocation-experiment-result.md)
is `RETUNE / NOT READY FOR HUMAN REVIEW`. A deterministic branch-and-bound
contract now reserves all parallel bundles at a shared endpoint before atomic
commit, rejects sector and ordinary-route ownership conflicts, and performs a
combined authoritative Product presentation validation before accepting a
plan. The shared two-bundle synthetic was feasible in 6 of at most 512 explored
states with no ordinary-route churn; canonical one-bundle results remained
unchanged.

Titanic EN still returned the structured routing capacity shortage. A bounded
request-driven placement counterfactual made it feasible while changing minimum
screen-space Node separation from 68.3px to 64.4px, but that is a new unreviewed
placement candidate, not inherited Human evidence. Next work should reduce
per-group port-family generation and test the capacity request with generic
viewport/Node guards. Product default/adoption remains `HOLD`, production
provider remains `NOT ESTABLISHED`, and the Release blocker remains `OPEN`.

### Adaptive Initial Placement Cascade — HYPOTHESIS / FUTURE EXPERIMENT (2026-09-13)

The [Adaptive Initial Placement Cascade and endpoint-plan safety checkpoint](liaisonscape-adaptive-initial-placement-cascade-and-endpoint-plan-safety-result.md)
records a future hypothesis: try a fast bounded placement, accept only when a
cheap gate is sufficiently predictive of Actual Product readability/safety,
and escalate difficult Datasets to higher-quality placement or an explicit
High-quality Auto Layout responsibility. This is not a current execution
policy and does not change the current exact-runtime or endpoint/placement
research priority.

The hypothesis requires a cheap gate that predicts Product quality, low-cost
escalation, explicit responsibility boundaries for each stage, and a separate
interaction-stability solution for progressive re-layout. Endpoint-plan and
capacity-negotiation evidence may inform the future gate, but routing-only,
placement-escalation, cheap structural, and authoritative-presentation-only
signals must remain distinct.

The bounded geometry-derived candidate probe reduced typical endpoint families
to 12--18 candidates, but dropped oracle-feasible results in Lighthouse EN and
synthetic controls and drifted selected plans in other controls. It is
`RETUNE / NOT READY FOR HUMAN REVIEW`; the old family remains the audit
oracle. The request-driven placement lifecycle is only a pure, unintegrated
contract: initial-open/idle application, drag/transition/manual-authority
deferral, and stale/cancel discard. Whole-graph viewport, unrelated-corridor,
interaction, and Actual Product evidence remain open. Product default/adoption
is `HOLD`, production provider is `NOT ESTABLISHED`, and the Initial Layout
Release blocker is `OPEN`.

### Current Initial Layout execution order — Parallel Closure, Structural Retune, and Presentation Re-evaluation (2026-09-14)

The [Structural Placement / Angular Ordering Retune 1 result](liaisonscape-structural-placement-angular-ordering-retune1-result.md)
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

The [General Crossing-Aware Placement 1 result](liaisonscape-general-crossing-aware-placement1-result.md)
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

The [Joint-Constrained Crossing-Aware Placement 2 result](liaisonscape-joint-constrained-crossing-aware-placement2-result.md)
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

The [Discrete Feasibility-First Structural Placement 1 result](liaisonscape-discrete-feasibility-first-placement1-result.md)
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

The [Narrow Graph Decomposition + Capacity Contract 1 result](liaisonscape-narrow-decomposition-capacity-contract1-result.md)
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

The [Parallel / Relation-label Presentation Re-evaluation 1 result](liaisonscape-parallel-relation-label-presentation-reevaluation1-result.md)
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

The [Self-loop Angle / Ordinary Edge Interaction 1 result](liaisonscape-self-loop-angle-ordinary-edge-interaction1-result.md)
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

The [Self-loop-local Angle / Radius Capacity Allocation 1 result](liaisonscape-self-loop-local-capacity-allocation1-result.md)
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

The [Self-loop-local Capacity Allocation 1 — Runtime Evidence Correction 1 result](liaisonscape-self-loop-local-capacity-runtime-correction1-result.md)
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

The [Self-loop Owner-local Finalist Recall + Dependency Reuse 1 result](liaisonscape-self-loop-owner-local-recall-reuse1-result.md)
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

The [Self-loop Owner-local Recall-aware Pruning + Dependency Fingerprint 1 result](liaisonscape-self-loop-owner-local-recall-aware-pruning-dependency-fingerprint1-result.md)
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

The [Responsibility-separated Initial Layout Re-baseline 1 result](liaisonscape-responsibility-separated-initial-layout-rebaseline1-result.md)
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

### LiaisonScape Initial Layout Execution Architecture Decision 1 (2026-09-14)

The [Initial Layout Execution Architecture Decision 1 result](liaisonscape-initial-layout-execution-architecture-decision1-result.md)
provisionally adopts the execution split `Fast deterministic Initial Placement
+ explicit High-quality Auto Layout`, while keeping quality-solver readiness
at `HOLD / NOT ESTABLISHED`. The decision does not adopt a provider or change
Product behavior. Current `settleInitialPlacement` remains the startup
baseline; the existing explicit Auto Layout and explicit Save Coordinates
boundary provides a compatible Product seam, but the current 12-iteration
Auto Layout is not a high-quality solver.

The future quality operation may propose Node geometry and consume repeated
Product-authoritative feedback, but ordinary routing, Parallel/Incident,
Self-loop, final labels, endpoint-plan, and viewport remain their current
authorities. A production operation requires snapshot, cancellation,
stale-result rejection, preview, accept/revert, manual-authority compatibility,
and explicit runtime/state/memory bounds. Adaptive Initial Placement Cascade
remains `INACTIVE`. Product default/adoption remains `HOLD`, production
provider remains `NOT ESTABLISHED`, Human Review remains `NOT READY`, and the
Initial Layout Release blocker remains `OPEN`.

### LiaisonScape Explicit High-quality Auto Layout Operation Lifecycle 1 (2026-09-14)

The [Explicit High-quality Auto Layout Operation Lifecycle 1 result](liaisonscape-explicit-high-quality-auto-layout-operation-lifecycle1-result.md)
establishes the solver-independent lifecycle contract for the provisionally
adopted execution split. The contract isolates an immutable input snapshot,
generation-token cancellation, stale-result rejection, candidate/preview
isolation, atomic session-coordinate accept, explicit reject, and bounded
one-step revert. It preserves stored/authored Coordinates, `coordinatesDirty`,
manual route/Self-loop/label authority, Product routing/endpoint-plan/final
presentation authority, and explicit `Save Coordinates` persistence.

The diagnostic implementation passes `13/13` focused tests and reproduces
12 semantic invalidation reasons, cancellation/completion race safety, old
operation protection, viewport-only preview invalidation, and dirty-baseline
preserving revert. This is a lifecycle result, not a quality-solver or Product
integration result: current `App.tsx` remains synchronous and does not yet
implement cancellation, isolated preview, stale-result guards, or revert.
Quality solver readiness remains `HOLD / NOT ESTABLISHED`, Product
default/adoption remains `HOLD`, production provider remains `NOT ESTABLISHED`,
Adaptive Initial Placement Cascade remains `INACTIVE`, Human Review remains
`NOT READY`, and the Initial Layout Release blocker remains `OPEN`.

### LiaisonScape Explicit High-quality Auto Layout Operation Lifecycle Contract Closure 1 (2026-09-14)

The [Explicit High-quality Auto Layout Operation Lifecycle Contract Closure 1 result](liaisonscape-explicit-high-quality-auto-layout-operation-lifecycle-contract-closure1-result.md)
closes the previous lifecycle contract with corrections. Source-first review
confirmed that active-job semantic identity and accepted Node-coordinate revert
validity must be separate: manual route, Self-loop, Relation-label, Node-label,
and locale changes stale running Product-dependent work, but do not by
themselves invalidate a coordinate-only revert. Node movement, Dataset/graph
change, coordinate load/reset/save, or another coordinate operation does
invalidate it.

The revert transaction now restores prior session positions, prior
`coordinatesDirty`, and an explicit stored/adopted/derived coordinate
ownership map plus adopted IDs. Accept remains session-only and
`persistDataset: false`; `Save Coordinates` remains the sole explicit
persistence boundary. Snapshot capture and job envelopes now use deep-frozen
clones. The focused source contains and passes `18/18` lifecycle tests; the
audit derives the count from the test source. The earlier `13/13` figure remains
historical and is corrected in the closure document rather than silently
rewriting the prior result.

Disposition: `LIFECYCLE CONTRACT CLOSED WITH CORRECTIONS`. Quality solver
readiness remains `HOLD / NOT ESTABLISHED`, Product integration/default remains
`HOLD`, production provider remains `NOT ESTABLISHED`, Adaptive Initial
Placement Cascade remains `INACTIVE`, Human Review remains `NOT READY`, and the
Initial Layout Release blocker remains `OPEN`.

### LiaisonScape Explicit High-quality Auto Layout Browser Execution Budget Study 1 (2026-09-14)

The [Explicit High-quality Auto Layout Browser Execution Budget Study 1 result](liaisonscape-explicit-high-quality-auto-layout-browser-execution-budget-study1-result.md)
provides real-browser execution evidence without changing Product behavior.
The Worker/background proposal path is feasible as a future execution
hypothesis, but current Product-authoritative verification and preview remain
main-thread work that is not browser-bounded: the dense `k7-7` control reached
about `4.8s` for one cooperative slice, about `2.15s` for one hybrid
verification slice, and about `2.77s` for preview. Cooperative scheduling did
not deliver cancellation before dense work completed. Parallel, long-label,
and self-loop-heavy controls also exceeded a proposed `50ms` main-thread
slice. The browser harness nevertheless confirmed cancellation completion,
stale old-generation rejection, and newer-operation preservation.

Disposition: `WORKER-PROPOSAL PATH SUPPORTED / PRODUCT VERIFICATION BUDGET NOT
ESTABLISHED`. Continue with a narrow Product-authoritative verification
interruptibility/budget design study only. Do not implement or adopt a quality
solver, Worker provider, Product default, Adaptive Initial Placement Cascade,
or Human Review candidate from this evidence. Fast deterministic Initial
Placement plus explicit High-quality Auto Layout remains `PROVISIONALLY ADOPT`
as the execution-architecture direction; quality solver readiness remains
`HOLD / NOT ESTABLISHED`, Product integration/default remains `HOLD`,
production provider remains `NOT ESTABLISHED`, Human Review remains `NOT
READY`, and the Initial Layout Release blocker remains `OPEN`.

### LiaisonScape Product-authoritative Verification Interruptibility Design Study 1 (2026-09-14)

The [Product-authoritative Verification Interruptibility Design Study 1 result](liaisonscape-product-authoritative-verification-interruptibility-design-study1-result.md)
decomposes the current source-faithful presentation evaluation into explicit
label-free route, first route, Relation-label, Node-label, optional feedback
route/label stages, and finalization. The diagnostic staged composition is
exactly equivalent to the current synchronous Product authority for the
focused control, and cancellation between stages preserves no partial Product
result.

The result is nevertheless only `PARTIAL INTERRUPTIBILITY ONLY`: each current
stage remains a whole pass. Real-browser stage evidence reached `485.1ms` for
the dense feedback route, `434ms` for dense first route, `103.1ms` for dense
Relation-label placement, and `119.4ms` for dense Node-label placement.
Canonical, parallel, and self-loop route stages also exceeded the diagnostic
`50ms` threshold; long-label pressure did not in this run. The current
Product-authoritative inner loops consume ordered occupied-path or occupied-
label prefixes, so yielding safely inside them requires an explicit
accumulator/resume seam and exact semantic-equivalence tests.

Disposition: `SEMANTIC STAGE SEAM SUPPORTED / PARTIAL INTERRUPTIBILITY ONLY`.
Proceed, if at all, with one-stage-at-a-time authority-preserving accumulator
extraction and fail-closed budget tests. Do not treat replay-prefix or a
whole-pass Worker call as resumable execution. Quality solver readiness remains
`HOLD / NOT ESTABLISHED`, Product integration/default remains `HOLD`,
production provider remains `NOT ESTABLISHED`, Adaptive Initial Placement
Cascade remains `INACTIVE`, Human Review remains `NOT READY`, and the Initial
Layout Release blocker remains `OPEN`.

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

### LiaisonScape Product-authoritative Route Selection Inner-loop Accumulator / Interruptibility 1 (2026-09-14)

The [Product-authoritative Route Selection Inner-loop Accumulator / Interruptibility 1 result](liaisonscape-product-authoritative-route-selection-inner-loop-accumulator1-result.md)
extracts the current ordinary route-selection inner loop into an explicit
one-ordered-edge accumulator while retaining the existing synchronous Product
entry point as a draining wrapper. Focused equivalence tests and five real
Edge 152 controls (canonical, dense, parallel-pressure, long-label-pressure,
and self-loop-pressure) matched the synchronous route authority exactly.

Initialization measured `0--0.2ms` and the maximum observed one-edge route
work unit measured `0.7--4.9ms`, below the preferred `16ms` slice and the
diagnostic `50ms` ceiling in this run. Cooperative cancellation between units
completed without exposing a partial Product result. The complete ordered edge
list and precomputed parallel-label signals retain future-edge information;
occupied paths and overlap counts remain explicit prefix state.

Disposition: `ROUTE INNER-LOOP INTERRUPTIBILITY ESTABLISHED / PRODUCT
VERIFICATION BUDGET STILL OPEN`. This is route-level execution evidence, not
a Product verification SLA. Relation-label and Node-label inner loops remain
the next separate budget boundary. Quality solver readiness remains `HOLD /
NOT ESTABLISHED`, Product integration/default remains `HOLD`, production
provider remains `NOT ESTABLISHED`, Adaptive Initial Placement Cascade remains
`INACTIVE`, Human Review remains `NOT READY`, and the Initial Layout Release
blocker remains `OPEN`.

### LiaisonScape Product-authoritative Relation-label Inner-loop Accumulator / Interruptibility 1 (2026-09-14)

The [Product-authoritative Relation-label Inner-loop Accumulator / Interruptibility 1 result](liaisonscape-product-authoritative-relation-label-inner-loop-accumulator1-result.md)
extracts the current Relation-label pass into one ordered routed-edge work
unit, including empty-label no-ops, while retaining the existing synchronous
Product API as a draining wrapper. The source-faithful state separates the
immutable routed-edge order, Node points, and whole-route path-bounds cache
from the mutable occupied-Relation-label prefix and accepted placement map.

Focused tests and both first/feedback passes of five real Edge 152 controls
were exactly equivalent to the current synchronous authority, including
manual-anchor reconstruction and diagnostic trace identity. Initialization
measured `0.3--1.0ms`; every observed unit stayed below the `50ms` diagnostic
ceiling. Dense feedback reached `21.0ms`, so the preferred approximately
`16ms` slice is not uniform even though the ordered seam is resumable and
fail-closed between units.

Disposition: `RELATION-LABEL ACCUMULATOR EQUIVALENT / DIAGNOSTIC CEILING MET /
PREFERRED SLICE NOT UNIFORM`. Relation-label execution interruptibility is
established for the observed controls, but Product-wide verification budget
remains `NOT ESTABLISHED` pending the independent Node-label inner-loop
checkpoint. Quality solver readiness remains `HOLD / NOT ESTABLISHED`, Product
integration/default remains `HOLD`, production provider remains `NOT
ESTABLISHED`, Adaptive Initial Placement Cascade remains `INACTIVE`, Human
Review remains `NOT READY`, and the Initial Layout Release blocker remains
`OPEN`.

### LiaisonScape Product-authoritative Node-label Inner-loop Accumulator / Interruptibility 1 (2026-09-14)

The [Product-authoritative Node-label Inner-loop Accumulator / Interruptibility 1 result](liaisonscape-product-authoritative-node-label-inner-loop-accumulator1-result.md)
extracts the current input-order Node-label pass into one Node work unit while
retaining the existing synchronous Product API as a draining wrapper. The
source-faithful state keeps the initial Relation-label occupancy immutable,
tracks the accepted Node-label prefix separately, preserves active-drag and
manual-offset behavior, and reuses the immutable routed-edge and yielding-route
geometry for every step.

Focused tests and both first/feedback passes of five real Edge 152 controls
were exactly equivalent to the current synchronous authority, including
diagnostic trace identity. Initialization measured `0--0.4ms`; every observed
Node unit stayed below both the preferred approximately `16ms` reference and
the `50ms` diagnostic ceiling. Cooperative cancellation stopped before any
partial result was published. This is execution evidence for the selected
controls, not a Product-wide verification SLA.

Disposition: `NODE-LABEL INNER-LOOP INTERRUPTIBILITY ESTABLISHED /
DIAGNOSTIC CEILING AND PREFERRED SLICE MET IN OBSERVED CONTROLS`. The ordered
Node-label seam is now reproducible and fail-closed, but Product-wide
verification budget remains `NOT ESTABLISHED`; the Relation-label dense-feedback
`21ms` observation and full accumulator orchestration/stale-race budget remain
open. Quality solver readiness remains `HOLD / NOT ESTABLISHED`, Product
integration/default remains `HOLD`, production provider remains `NOT
ESTABLISHED`, Adaptive Initial Placement Cascade remains `INACTIVE`, Human
Review remains `NOT READY`, and the Initial Layout Release blocker remains
`OPEN`.

### LiaisonScape Product-authoritative Full Verification Resumable Orchestration / Budget Closure 1 (2026-09-14)

The [Product-authoritative Full Verification Resumable Orchestration / Budget Closure 1 result](liaisonscape-product-authoritative-full-verification-resumable-orchestration1-result.md)
composes the existing Route Selection, Relation-label, and Node-label
accumulators into one explicit state machine while preserving the source
dependency order: label-free route, first route, yielding-route derivation,
first Relation-label, first Node-label, feedback decision, optional feedback
route/labels, and finalization. Route, Relation-label, and Node-label work
units are respectively one ordered edge, one ordered routed edge, and one
input-order Node. The current synchronous Product authority remains the
reference path.

Focused tests and five real Edge 152 controls are exact-equivalent in both
semantic result and diagnostic traces. Cancellation and budget exhaustion are
fail-closed with no partial Product result. The latest cooperative completion
measurement reached `49.7ms` for a dense scheduler step, about `5.60s` elapsed
wall time, and about `3.23s` scheduler overhead. Earlier browser runs observed
scheduled slices above `50ms`, so the preferred approximately `16ms` slice is
not uniform and the diagnostic `50ms` ceiling is not established product-wide.

Disposition: `FULL VERIFICATION RESUMABLE SEAM ESTABLISHED / EXACT
EQUIVALENCE ESTABLISHED / PRODUCT-WIDE VERIFICATION BUDGET NOT ESTABLISHED`.
Continue with a bounded budget-closure question only; do not build or adopt a
quality solver, Worker/provider, Product default, Adaptive Initial Placement
Cascade, or Human Review candidate. Fast deterministic Initial Placement plus
explicit High-quality Auto Layout remains `PROVISIONALLY ADOPT` as an
execution-architecture direction, quality solver remains `HOLD / NOT
ESTABLISHED`, Product integration/default remains `HOLD`, production provider
remains `NOT ESTABLISHED`, Adaptive Initial Placement Cascade remains
`INACTIVE`, Human Review remains `NOT READY`, and the Initial Layout Release
blocker remains `OPEN`. Session log remains intentionally unchanged.

### LiaisonScape Product-wide Verification Budget Closure / Scheduler Policy Study 1 (2026-09-14)

The [Product-wide Verification Budget Closure / Scheduler Policy Study 1 result](liaisonscape-product-wide-verification-budget-scheduler-policy-study1-result.md)
compares one-unit, fixed-two, elapsed-eight-ms, and hybrid-eight-ms-two-unit
scheduler policies around the existing exact-equivalent full-verification state
machine. All four policies completed canonical, dense, parallel, long-label,
and self-loop controls with exact semantic and normalized trace equivalence.
Cancellation and budget exhaustion remained fail-closed with no partial Product
result.

The elapsed-eight-ms soft quota reduced observed turn count, cooperative wall
time, and scheduler overhead most strongly in two Edge runs. In the second run
it reached at most `9.0ms` cooperative scheduler step, about `232.3ms` maximum
cooperative wall time, and about `86.5ms` maximum overhead across the controls.
It can nevertheless overshoot its 8ms target, observed up to `45` small work
units before cancellation, and does not bound a long current work unit. Prior
full-verification runs with `49.7ms`, `53.4ms`, and `83.9ms` slices remain
valid.

Disposition: `SCHEDULER POLICY SEAM ESTABLISHED / ELAPSED SOFT QUOTA
PROMISING / PRODUCT-WIDE VERIFICATION BUDGET NOT ESTABLISHED`. Continue only
with a bounded authority-preserving micro-splitting or budget-contract study;
do not adopt a production scheduler, build a quality solver, select a Worker
provider, change Product defaults, activate Adaptive Initial Placement
Cascade, or advance Human Review. Existing execution split remains
`PROVISIONALLY ADOPT`, quality solver remains `HOLD / NOT ESTABLISHED`, Product
integration/default remains `HOLD`, production provider remains `NOT
ESTABLISHED`, Adaptive Initial Placement Cascade remains `INACTIVE`, Human
Review remains `NOT READY`, and the Initial Layout Release blocker remains
`OPEN`. Session log remains intentionally unchanged.

### LiaisonScape Product-authoritative Verification Long-unit Attribution / Authority-preserving Micro-splitting 1 (2026-09-14)

The [Product-authoritative Verification Long-unit Attribution / Authority-preserving Micro-splitting 1 result](liaisonscape-product-authoritative-verification-long-unit-attribution-micro-splitting1-result.md)
adds source-step attribution to the existing exact-equivalent full-verification
state machine. Five Edge 152 controls were measured with the one-unit policy
under diagnostics-off/on and first/repeat browser runs. Current authoritative
Route, Relation-label, and Node-label work units stayed below `3.2ms`; the
largest source-step observation was a `4.4ms` dense Node-label initialization
phase transition. Diagnostics-on increased measured totals, and phase
transitions were distinguishable from geometry work.

The historical `49.7/53.4/83.9ms` scheduler slices remain valid, but the old
artifact did not capture source-step identity, so their exact retroactive cause
is not established. No authority-preserving micro-split is justified by the
current controlled attribution. Product-wide verification budget, hard `50ms`
ceiling, and preferred approximately `16ms` slice remain `NOT ESTABLISHED`.

Disposition: `CURRENT AUTHORITATIVE SOURCE STEPS SHORT / HISTORICAL OUTLIER
ATTRIBUTION INCONCLUSIVE / MICRO-SPLIT NOT JUSTIFIED`. Keep the one-edge,
one-routed-edge, and one-Node seams; do not expand scheduler-policy search,
add arbitrary internal splits, adopt a production scheduler, build a quality
solver, change Product defaults, activate Adaptive Initial Placement Cascade,
or advance Human Review. Fast deterministic Initial Placement plus explicit
High-quality Auto Layout remains `PROVISIONALLY ADOPT`, quality solver remains
`HOLD / NOT ESTABLISHED`, Product integration/default remains `HOLD`,
production provider remains `NOT ESTABLISHED`, Adaptive Initial Placement
Cascade remains `INACTIVE`, Human Review remains `NOT READY`, and the Initial
Layout Release blocker remains `OPEN`. Session log remains intentionally
unchanged.

### LiaisonScape Product-authoritative Verification Historical Long-slice Reproduction / Same-run Source-step Attribution 1 (2026-09-14)

The [Product-authoritative Verification Historical Long-slice Reproduction / Same-run Source-step Attribution 1 result](liaisonscape-product-authoritative-verification-historical-long-slice-reproduction1-result.md)
repeated the source-step attribution study in the same Edge browser run that
records scheduler turn, source-step, authority, diagnostics mode, and
scheduler-gap fields together. Three page reload cycles covered canonical,
dense, parallel, long-label, and Self-loop-heavy controls under diagnostics-off
and diagnostics-on first/repeat conditions: 60 attribution runs in total.

Semantic equivalence was `60/60` and diagnostics-on normalized trace
equivalence was `30/30`. The historical `49.7/53.4/83.9ms` slices were not
reproduced. The current maximum was `16.2ms` on the dense control, and the
source step itself was a Node-label initialization phase transition with
`0ms` scheduler gap. No authoritative work-unit outlier reached `16ms`, no
turn reached `50ms`, and the maximum observed scheduler gap was `0.1ms`.

Disposition: `HISTORICAL LONG-SLICE NOT REPRODUCED / CURRENT SAME-RUN
ATTRIBUTION ESTABLISHED / ONE PHASE-TRANSITION OUTLIER OBSERVED / EVENT-LOOP
GAP NOT MATERIAL / MICRO-SPLIT NOT JUSTIFIED / PRODUCT-WIDE VERIFICATION
BUDGET NOT ESTABLISHED`. Do not expand scheduler-policy search or add
arbitrary micro-splits. Keep Fast deterministic Initial Placement plus
explicit High-quality Auto Layout `PROVISIONALLY ADOPT`, quality solver
`HOLD / NOT ESTABLISHED`, Product integration/default `HOLD`, production
provider `NOT ESTABLISHED`, Adaptive Initial Placement Cascade `INACTIVE`,
Human Review `NOT READY`, and the Initial Layout Release blocker `OPEN`.
Session log remains intentionally unchanged.

### LiaisonScape Bounded Quality-Solver Benchmark 1 (2026-09-14)

The [Bounded Quality-Solver Benchmark 1 result](liaisonscape-bounded-quality-solver-benchmark1-result.md)
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

### LiaisonScape Product-authoritative Verification Scaling Envelope / Main-thread Viability 1 (2026-09-14)

The [Product-authoritative Verification Scaling Envelope / Main-thread Viability 1 result](liaisonscape-product-authoritative-verification-scaling-envelope-main-thread-viability1-result.md)
measures the current source-faithful verification authority across six bounded
workload families—sparse, dense, parallel, label-heavy, Self-loop, and mixed—at
small, medium, and large levels: 18 cases total. The declared upper case is 24
Nodes / 80 Relations, with parallel, Self-loop, and long-label pressure.

All cases preserved exact staged and scheduler semantic equivalence, and all
diagnostics-on samples preserved normalized trace equivalence. Within this
tested envelope, main-thread verification completed without a `50ms` source
step or turn and without a material scheduler gap. The maximum diagnostics-off
turn/source-step was `21.3ms` on dense-large, specifically the Node-label
initialization phase transition; no authoritative Route, Relation-label, or
Node-label work unit reached `16ms`. Dense aggregate Route and Relation-label
work, rather than one long authority unit, dominated total compute.

Disposition: `VERIFICATION SCALING ENVELOPE ESTABLISHED / MAIN-THREAD VIABLE
WITHIN TESTED ENVELOPE / DENSE-LARGE NODE-LABEL PHASE TRANSITION EXCEEDS
PREFERRED 16MS / NO 50MS SOURCE-STEP BLOCKER / NO NEW MICRO-SPLIT JUSTIFIED /
WORKER ARCHITECTURE STUDY NOT JUSTIFIED BY THIS ENVELOPE / PRODUCT-WIDE
UNBOUNDED BUDGET NOT ESTABLISHED`. Keep Fast deterministic Initial Placement
plus explicit High-quality Auto Layout `PROVISIONALLY ADOPT`, quality solver
`HOLD / NOT ESTABLISHED`, Product integration/default `HOLD`, production
provider `NOT ESTABLISHED`, Adaptive Initial Placement Cascade `INACTIVE`,
Human Review `NOT READY`, and the Initial Layout Release blocker `OPEN`.
Session log remains intentionally unchanged.

### LiaisonScape Bounded Screening Formulation / Finalist Recall 1 (2026-09-14)

The [Bounded Screening Formulation / Finalist Recall 1 result](liaisonscape-bounded-screening-finalist-recall1-result.md)
reuses the existing candidate families and Product-authoritative oracle to
compare deterministic finalist screens at K=2/3/4/6. The previous current
top-4 exact-best recall was reproduced at `20/26`. A lexicographic geometry,
topology, label/corridor, angular, and extent formulation improved top-4 exact
recall to `24/26`, retained a Product top-3 candidate in `26/26`, and retained
all 24 oracle baseline improvements while reducing simulated Product
evaluations from 311 to 104.

Two meaningful dense misses remain. In `dense-k7-7` and `dense-k5-9`, the
missed Product-best and retained grid candidates are equivalent under the
tested cheap summaries while Product routing differs by nine and seven
crossings. Increasing K to six does not recover them; Pareto and mandatory
family diversity also performed worse. Disposition: `B. RECALL IMPROVED BUT
NOT CLOSED`. Cheap-only production screening remains `NOT ESTABLISHED`; the
next bounded architecture candidate is one/two complete Product-authoritative
probes gated only for cheap-equivalent/high-risk classes. Quality solver and
Product integration remain `HOLD / NOT ESTABLISHED` and `HOLD`; production
provider remains `NOT ESTABLISHED`, Adaptive Cascade remains `INACTIVE`, Human
Review remains `NOT READY`, and the Initial Layout Release blocker remains
`OPEN`.

### LiaisonScape Bounded Multi-stage Product Probe / Dense Cheap-equivalence Closure 1 (2026-09-14)

The [Bounded Multi-stage Product Probe / Dense Cheap-equivalence Closure 1 result](liaisonscape-bounded-multi-stage-product-probe1-result.md)
evaluates the next bounded architecture candidate after finalist screening:
existing candidate generation, cheap lexicographic K=4, a graph-derived
cheap-equivalence/high-risk gate, and zero, one, or two complete
Product-authoritative ambiguity probes. No new solver family or Product
authority was introduced.

The zero-probe baseline reproduced `24/26` exact-best with two meaningful
dense misses. One bounded probe triggered on `3/26` operations, recovered both
known misses, and reached `26/26` exact-best with zero meaningful false
negatives, `107` Product evaluations versus `311` oracle evaluations, and
`100%` baseline-improvement retention. Two probes added cost without improving
the result. The gate produced one unnecessary trigger on `dense-k6-8`, no
canonical trigger, and no trigger on `dense-k7-7-minus-one` or `dense-k8-8`.

Disposition: `A. BOUNDED MULTI-STAGE SELECTOR ESTABLISHED` for this diagnostic
campaign, with multi-stage selector readiness only `DIAGNOSTICALLY PROMISING /
PRODUCTION INTEGRATION NOT ESTABLISHED`. Cheap-only screening remains
`HOLD / NOT ESTABLISHED`; quality solver remains `HOLD / NOT ESTABLISHED`,
Product integration/default remains `HOLD`, production provider remains `NOT
ESTABLISHED`, Adaptive Initial Placement Cascade remains `INACTIVE`, Actual
Product visual evaluation remains `NOT READY`, Human Review remains `NOT
READY`, and the Initial Layout Release blocker remains `OPEN`. The next bounded
question is independent gate/target validation; do not advance Adaptive
Cascade, Product adoption, or Human Review.

### LiaisonScape Boundary Equivalence-Class Product Completion / Cost Envelope 1 (2026-09-14)

The [Boundary Equivalence-Class Product Completion / Cost Envelope 1 result](liaisonscape-boundary-equivalence-class-product-completion1-result.md)
follows the order-dependency result by evaluating the entire cheap-equivalence
class that crosses the normal K=4 boundary. The class is defined only by the
existing six-decimal quantized cheap feature vector and must contain both K=4
and outside members. Product metrics, fixture identity, candidate index, and
known Product-best identity are excluded from membership and triggering.

Across the previous 26 operations plus eight independent controls, cheap K=4
reached `30/34` exact-best with four meaningful misses. The previous density +
one index policy reached `32/34` but remained order-dependent. Full boundary
completion reached `34/34` exact-best and top-3-any, zero meaningful misses,
zero regret, and `100%` baseline retention. It evaluated 182 of 420 oracle
candidates, avoided 238 evaluations, and added at most eight evaluations per
operation. Seven boundary classes showed material Product variance, including
crossing ranges up to 43.

Stable geometry-ordered caps were order-invariant but remained incomplete:
`+2` left four misses, `+4` left two, and `+6` left one. Failure injection
failed closed on all 34 operations and produced no unverified selected result.

Disposition: `A. BOUNDARY CLASS COMPLETION ESTABLISHED WITH ACCEPTABLE COST`
for this diagnostic completion architecture. Boundary-equivalence trigger is
`DIAGNOSTICALLY SUPPORTED`, full completion is `QUALITY CLOSED IN TESTED SET`
within the tested envelope, and capped completion remains `NOT CLOSED`.
Keep cheap-only selector `HOLD / NOT ESTABLISHED`, risk gate `OPEN`, probe
target `NOT ESTABLISHED`, quality solver `HOLD / NOT ESTABLISHED`, Product
integration/default `HOLD`, production provider `NOT ESTABLISHED`, Adaptive
Initial Placement Cascade `INACTIVE`, Actual Product visual evaluation `NOT
READY`, Human Review `NOT READY`, and the Initial Layout Release blocker
`OPEN`. Do not treat this as Product adoption or production provider evidence.
Session log is synchronized in Session 0058.

### LiaisonScape Independent Risk-Gate / Probe-Target Stability Validation 1 (2026-09-14)

The [Independent Risk-Gate / Probe-Target Stability Validation 1 result](liaisonscape-independent-risk-gate-probe-target-stability1-result.md)
rechecks the previous bounded multi-stage Product probe under failure
injection, candidate-generation-order perturbation, and four independent
graph-derived synthetic controls. The normal diagnostic path now requires
zero fail-closed operations before it can retain an established classification;
failure injection correctly produced fail-closed operations, no selected best
candidate for failed probes, and limited-probing insufficiency.

The previous one-probe `26/26` closure was invariant to list-order reversal
but not to generation-index perturbation: three targets changed and two
meaningful dense misses returned (`24/26`). A stable family-plus-fingerprint
target rule was order-invariant but also reached only `24/26`. Independent
controls reached `6/8` exact-best and left two near-threshold frontier misses;
the graph-derived risk gate remains open.

Disposition: `C. ORDER DEPENDENCY CONFIRMED / TARGET RULE NOT ESTABLISHED`.
Keep the multi-stage selector diagnostic-only, quality solver `HOLD / NOT
ESTABLISHED`, Product integration/default `HOLD`, production provider `NOT
ESTABLISHED`, Adaptive Initial Placement Cascade `INACTIVE`, Actual Product
visual evaluation `NOT READY`, Human Review `NOT READY`, and the Initial
Layout Release blocker `OPEN`. Do not advance Product adoption or Human
Review; no visual smoke check was warranted because this checkpoint produced
no new Product visual candidate. Session log is synchronized in Session 0057.

### LiaisonScape Production-shaped Quality Provider Execution / Browser Cost Envelope 1 (2026-09-14)

The [Production-shaped Quality Provider Execution / Browser Cost Envelope 1 result](liaisonscape-production-shaped-quality-provider-execution-browser-cost-envelope1-result.md)
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

The [Product Verification Execution Architecture Decision 1 result](liaisonscape-product-verification-execution-architecture-decision1-result.md)
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

The [checkpoint result](liaisonscape-worker-product-metric-parity-actual-product-visual-candidate-gate1-result.md)
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

The [checkpoint result](liaisonscape-operation-local-actual-product-hq-candidate-preview-visual-smoke1-result.md)
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

The [checkpoint result](liaisonscape-hq-metric-candidate-formulation-visual-failure-audit1-result.md)
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

The [checkpoint result](liaisonscape-explicit-label-capacity-candidate-formulation-probe1-result.md)
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

The [checkpoint result](liaisonscape-bounded-label-capacity-screen-ownership-refinement1-result.md)
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

The [checkpoint result](liaisonscape-occupied-geometry-feasibility-first-extent-growth1-result.md)
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

The [checkpoint result](liaisonscape-infinite-canvas-local-density-extent-growth-rebaseline1-result.md)
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

The [checkpoint result](liaisonscape-initial-layout-release-bar-hub-publication-reprioritization1-result.md)
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

The [checkpoint result](liaisonscape-representative-sample-release-quality-acceptance1-result.md)
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

The [checkpoint result](liaisonscape-representative-sample-release-quality-acceptance2-ashen-crown-result.md)
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

The [checkpoint result](liaisonscape-general-complex-dataset-practicality-gate1-result.md)
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

The [checkpoint result](liaisonscape-general-complex-dataset-practicality-gate2-hq-candidate-reconnection-result.md)
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

The [checkpoint result](liaisonscape-general-complex-dataset-practicality-gate3-bounded-hq-readability-execution-result.md)
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

The [checkpoint result](liaisonscape-historical-best-candidate-recomparison1-result.md)
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

The [checkpoint result](liaisonscape-common-fixture-cross-lineage-comparison1-result.md)
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

The [checkpoint result](liaisonscape-structural-seeded-capacity-refinement1-result.md)
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

The [checkpoint result](liaisonscape-frontier-actual-product-visual-sweep1-result.md)
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

The [user visual comparison handoff](liaisonscape-frontier-user-visual-comparison-handoff1.md)
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

The [comparison handoff](liaisonscape-frontier-g3-post-current-source-comparison1-handoff.md)
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

The [experiment result](liaisonscape-topology-aware-free-form-crossing-minimizing-auto-layout-experiment1-result.md)
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

The [checkpoint result](liaisonscape-cross-family-product-authoritative-auto-layout-portfolio-selector1-result.md)
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

The [checkpoint result](liaisonscape-diagnostic-preview-fixture-integrity-parallel-one-sided-product-quality-audit1-result.md)
corrects a diagnostic-only Japanese synthetic fixture and audits the reported
one-sided Parallel presentation on the current Actual Product surface. The
mojibake was caused by duplicated preview/tool literals, not by the Product
renderer. A shared diagnostic fixture generator now preserves the same
topology, IDs, labels, locale, and candidate geometry across the portfolio
tool and preview seam.

The corrected Parallel control contains two forward and two reverse Relations
for `alpha`/`beta`. Current Product output has physical-side counts `1` and
`3`; the `gamma`/`delta` pair remains balanced. The reverse routes' opposite
base-side candidates are rejected by occupied-path conflict or Relation-label
pressure, so the side imbalance is downstream routing/presentation behavior
under hard feasibility pressure. The current Product path does not call the
experimental incident allocator or expose endpoint-plan output. No safe fix
was adopted because forcibly selecting the rejected side would introduce the
known clearance conflicts.

The checkpoint is classified `C. PREVIEW FIXTURE INTEGRITY RESTORED /
ONE-SIDED RESULT IS HARD-FEASIBILITY-DRIVEN`, with `D. APPARENT ONE-SIDED
ISSUE IS DOWNSTREAM ROUTING OR LABEL PRESENTATION` attribution. It is not
formal acceptance and opens no Human Review candidate. Parallel/Incident
architecture remains closed, quality solver remains `HOLD / NOT ESTABLISHED`,
production provider remains `NOT ESTABLISHED`, Product integration/default
remains `HOLD`, Human Review remains `NOT READY`, Adaptive Cascade remains
inactive, and the Initial Layout Release blocker remains `OPEN`. Session 0081
records this new objective.

### LiaisonScape Product Presentation Local Spacing + Parallel/Label/Self-loop Refinement 1 (2026-09-16)

The [checkpoint result](liaisonscape-product-presentation-local-spacing-parallel-label-self-loop-refinement1-result.md)
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

The [checkpoint result](liaisonscape-product-owned-parallel-bundle-generalization1-result.md)
generalizes the prior widened Product Parallel presentation direction across
the reverse/same-direction control, a five-Relation bundle, a mixed-incident
control, and the public Lighthouse EN sample. Fixed `bundle-16` improved lane
and endpoint separation and reduced owner-route ambiguity on the primary
control without crossings, final occupied-path conflicts, label overlap, Node
collision, or ordinary-route churn. The higher-multiplicity control exposed a
real ordinary-route coupling cost, so the fixed direction remains diagnostic.

A graph-wide adaptive spacing scalar is rejected as a generalized policy: it
selected spacing 20 on the primary graph and collapsed the balanced gamma/delta
same-direction pair to one physical side. Higher-multiplicity spacing 24 also
changed two ordinary routes. The evidence supports continuing with a
bundle-local capacity policy or explicit cross-bundle feasibility check, not
adopting a global adaptive scalar, changing Structural Placement, reopening
Parallel/Incident architecture, or changing Self-loop/viewport authority.

The checkpoint is classified `A/C QUALIFIED: WIDENED PRODUCT PARALLEL
PRESENTATION GENERALIZES AS A DIAGNOSTIC DIRECTION / GRAPH-WIDE ADAPTIVE
SPACING IS NOT SAFE`. Product default/adoption remains `HOLD`, production
provider remains `NOT ESTABLISHED`, Human Review remains `NOT READY`, Adaptive
Cascade remains inactive, and the Initial Layout Release blocker remains
`OPEN`. Session 0083 records this new objective.

### LiaisonScape Product-Owned Bundle-Local Capacity + Cross-Bundle Feasibility Experiment 1 (2026-09-16)

The [checkpoint result](liaisonscape-product-owned-bundle-local-capacity-cross-bundle-feasibility1-result.md)
replaces the rejected graph-wide adaptive scalar with per-bundle demand
candidates and a bounded full-Product joint feasibility selection. The largest
control explores 42 combinations. Selected spacing is `20/12` for the primary
reverse/same-direction graph, `16` for higher multiplicity, `24` for mixed
incident, `16/16` for a new shared-endpoint control, and `12` for Lighthouse.

The primary selection removes ownership ambiguity and foreign-closer labels
while preserving the good gamma/delta bundle, directly avoiding the prior
global-spacing-20 collapse. Higher multiplicity falls back to 16 because its
requested 24 changes two ordinary routes. The shared-endpoint control retains
one ownership residual because the wider arm that removes it slightly regresses
the neighboring bundle. This proves local demand is useful but bundle decisions
are not independent; bounded joint Product feasibility is required.

The outcome is `B. BUNDLE-LOCAL POLICY PROMISING / C. BOUNDED JOINT
FEASIBILITY REQUIRED`. The candidate remains diagnostic and is not uniformly
better than fixed 16. Parallel/Incident architecture remains `CLOSED`, Product
default/adoption remains `HOLD`, production provider remains `NOT ESTABLISHED`,
Human Review remains `NOT READY`, local relaxation remains absent, and the
Initial Layout Release blocker remains `OPEN`. Session 0084 records this new
objective.

### LiaisonScape Product-Owned Orientation-Aware Parallel Label Capacity + Stagger Experiment 1 (2026-09-16)

The [checkpoint result](liaisonscape-product-owned-orientation-aware-label-capacity-stagger1-result.md)
holds the Session 0084 bundle-local spacing maps fixed and adds a bounded
Product-owned Relation-label tangent/normal footprint diagnostic with
along-owner-route stagger. Horizontal labels use tangential footprint versus
usable owner span; vertical labels receive bounded stagger; diagonal labels use
continuous projection. One-line labels remain the only candidate, while
deficits are recorded for a future display-only wrap study.

The primary control remains non-regressed with zero churn. The shared-endpoint
control improves its remaining ownership ambiguity under fixed `16/16`, and
horizontal staggering improves foreign-route ordering, but the two long
horizontal labels still exceed one-line usable span by roughly `184` and `197`
units. Vertical stagger produces readable positions without improving the
machine ownership ambiguity, and diagonal behavior remains smooth without a
binary orientation rule. Higher-multiplicity ordinary-route churn remains.

The outcome is `B/C COMBINED`: orientation-aware label capacity is a useful
Product presentation diagnostic, but vertical stagger is not generally
established and one-line horizontal capacity remains open. No wrap, routing,
endpoint-plan, Structural Placement, Parallel/Incident, Self-loop, default,
provider, or Human Review adoption follows. Product default/adoption remains
`HOLD`, production provider remains `NOT ESTABLISHED`, Human Review remains
`NOT READY`, Adaptive Cascade remains inactive, and the Initial Layout Release
blocker remains `OPEN`. Session 0085 records this new objective.

### LiaisonScape Product Relation-label Normal-offset Granularity + Parallel Bundle Capacity Attribution Experiment 1 (2026-09-16)

The [checkpoint result](liaisonscape-product-relation-label-normal-offset-granularity1-result.md)
reproduces the current `placeEdgeLabel` normal candidates and scoring from
source, then compares current/coarse, widened/coarse, current/fine, and
widened/fine arms on fixed Node geometry. The expanded diagnostic trace names
the foreign sibling route that enters a rejected zero-offset label rectangle:
for example, primary `r-ab-2` is blocked by `r-ba-1`. This confirms foreign
sibling pressure as the immediate cause of the observed zero-offset rejection.

The primary control retains ambiguity `1` under finer candidates alone, while
the prior Product-owned bundle-local widening closes it to `0` and restores
Alpha/Beta side balance `2:2`. Finer candidates become useful after widening,
selecting smaller offsets and improving owner-route margin; mixed and shared
controls show secondary gains. Higher multiplicity retains one ordinary-route
churn and Lighthouse has no gross regression.

The outcome is `B PRIMARY / C QUALIFIED SECONDARY`: bundle widening is the
primary owner-label capacity mechanism, with finer normal candidates a bounded
secondary refinement. Collision-envelope retuning is not established. No wrap,
routing, endpoint-plan, Structural Placement, Parallel/Incident, Self-loop,
default, provider, or Human Review adoption follows. Product default/adoption
remains `HOLD`, production provider remains `NOT ESTABLISHED`, Human Review
remains `NOT READY`, Adaptive Cascade remains inactive, and the Initial Layout
Release blocker remains `OPEN`. Session 0086 records this new objective.

### LiaisonScape Product Relation-label Display-only Automatic Wrap Capacity Experiment 1 (2026-09-16)

The [checkpoint result](liaisonscape-product-relation-label-display-only-wrap1-result.md)
tests a bounded, display-only two-line Relation-label presentation after the
previously established Product-owned bundle widening and fine normal-offset
reference. English uses whitespace-first breaking with bounded character
fallback; Japanese uses character fallback. Dataset Relation names and all
stored/authored state remain unchanged, and the same derived geometry is shared
by SVG text, hit testing, and the label collision envelope.

On horizontal English controls, two long labels reduce one-line span deficits
from `103/116` to `0/5.5` and remove the reference ownership ambiguity. On the
Japanese horizontal control, two-line character breaking is better balanced and
removes the foreign-closer signal, but one ownership ambiguity remains. Token
and punctuation controls expose an explicit readability trade-off. Vertical and
diagonal controls do not wrap and retain their existing route/association
residuals; higher multiplicity retains ordinary-route churn. The Actual Product
smoke found no gross rendering or interaction regression, but the result is not
formal visual acceptance.

The outcome is `B/C PRIMARY / D QUALIFIED / F RESIDUAL CAPACITY OPEN`: display-
only wrapping is useful for long horizontal labels after bundle capacity and
fine placement, but it is not a general Product-quality solution. No local
offset retune, Structural Placement change, routing authority change,
endpoint-plan change, Self-loop adoption, Product default/provider, or Human
Review candidate follows. Product default/adoption remains `HOLD`, production
provider remains `NOT ESTABLISHED`, Human Review remains `NOT READY`, Adaptive
Cascade remains inactive, and the Initial Layout Release blocker remains
`OPEN`. Session 0087 records this new objective.

### LiaisonScape Product Node-label Relation-presentation-first Angular Escape Experiment 1 (2026-09-16)

The [checkpoint result](liaisonscape-product-node-label-relation-presentation-first-angular-escape1-result.md)
holds the current Product routes and Relation-label rectangles fixed and adds
only an opt-in diagnostic angular occupancy signal to the existing 32-angle
automatic Node-label scorer. Horizontal, vertical, diagonal, high-degree,
dense, Self-loop, and Lighthouse EN/JA controls compare current-fresh,
current-previous, angular-fresh, and angular-previous arms.

Fresh angular escape selected the same Node-label directions as the current arm
on every fixture and introduced no measured overlap or foreign-route benefit.
Previous-placement inputs changed directions across every fixture family and
incurred the larger movement cost; angular pressure did not overcome that
continuity term. The Actual Product smoke showed no angular-specific rendering
or interaction regression, while the larger Lighthouse framing risk remained
present in the control as well.

The outcome is `E PRIMARY / C QUALIFIED`: current route-distance/collision
scoring is sufficient in the tested envelope, previous-placement hysteresis is
the stronger residual signal, and Relation-presentation-first angular escape is
not established. No Structural Placement, routing, Relation-label,
endpoint-plan, Self-loop, Adaptive Cascade, Product default/provider, or Human
Review decision follows. Product default/adoption remains `HOLD`, production
provider remains `NOT ESTABLISHED`, Human Review remains `NOT READY`, Adaptive
Cascade remains inactive, and the Initial Layout Release blocker remains
`OPEN`. Session 0088 records this new objective.

### LiaisonScape Product Node-label Hysteresis / Recovery Attribution Experiment 1 (2026-09-16)

The [checkpoint result](liaisonscape-product-node-label-hysteresis-recovery-attribution1-result.md)
reuses the current Product 32-angle Node-label scorer with the existing
previous-placement movement term exposed as a candidate-level diagnostic. It
compares current-fresh, current-previous, hysteresis-ablation,
bounded-recovery, active-drag, and finalizing-drag controls on the same
horizontal, orientation, dense, high-degree, Parallel/Self-loop, and
Lighthouse EN/JA fixture set.

The prior checkpoint's Product `current-previous` output is used as the main
previous snapshot. Previous selection changes directions in every fixture
family, while hysteresis ablation exactly matches fresh selection. A bounded
diagnostic recovery rule returns the fresh labels for all eight fixtures,
handles both fresh-gain and hard-conflict triggers, and is stable on repeated
identical input without changing fixed routes or Relation-label rectangles.
The Actual Product smoke shows no new rendering or console failure on the
primary, high-degree, Self-loop, or Lighthouse controls.

The outcome is `A QUALIFIED FOR CONTINUED BOUNDED NODE-LABEL RESEARCH / PRODUCTION NOT ESTABLISHED`:
previous-placement hysteresis is now the primary tested Node-label residual,
and an explicit recovery semantic is a viable next bounded formulation. The
recovery rule remains diagnostic-only. No movement-weight retune, Structural
Placement change, routing/Relation-label/endpoint-plan/Self-loop authority
change, Adaptive Cascade entry, Product default/provider decision, or Human
Review candidate follows. Product default/adoption remains `HOLD`, production
provider remains `NOT ESTABLISHED`, Human Review remains `NOT READY`, Adaptive
Cascade remains inactive, and the Initial Layout Release blocker remains
`OPEN`. Session 0089 records this new objective.

### LiaisonScape Product Node-label Recovery Lifecycle Source-Parity Experiment 1 (2026-09-16)

The [checkpoint result](liaisonscape-product-node-label-recovery-lifecycle-source-parity1-result.md)
verifies the recovery direction through the actual Product presentation source
and the tested previous-snapshot lifecycle. The development-only mode uses the
normal `deriveBoundedAutomaticPresentation` path, retains continuity on the
first pass, and permits bounded recovery only on the settled feedback pass.
The displayed result is committed as the next previous Node-label snapshot,
while active drag, finalizing, manual Node-label, reset, route, Relation-label,
endpoint-plan, and Self-loop boundaries remain unchanged.

The five-fixture lifecycle harness covers primary horizontal, high-degree,
Parallel/Self-loop, Lighthouse EN, and Lighthouse JA controls. All lifecycle
controls pass, repeated settled derives are stable, no recovery oscillation is
observed, manual offsets remain authoritative, reset clears previous input,
and each Node retains a bounded 32-candidate set. A Product-derived stale
seed triggers `3` recoveries with `32` candidates and becomes the next previous
snapshot. It intentionally does not byte-match the prior diagnostic recovery
arm because the earlier arm recovered with feedback disabled, whereas this
source-parity arm preserves first-pass continuity and recovers in the normal
feedback/final lifecycle.

The outcome is `A QUALIFIED / SOURCE-PARITY ESTABLISHED IN TESTED ENVELOPE`.
Product default/adoption remains `HOLD`, production provider remains `NOT
ESTABLISHED`, Human Review remains `NOT READY`, Adaptive Cascade remains
inactive, and the Initial Layout Release blocker remains `OPEN`. No new Human
Review candidate or production adoption follows. Session 0090 records this
new objective.

### LiaisonScape Product Node-label Recovery Integration / Feasibility Experiment 1 (2026-09-16)

The [checkpoint result](liaisonscape-product-node-label-recovery-integration1-result.md)
places the bounded Node-label recovery rule inside the normal Product
presentation path as an explicit development-only candidate switch:
`?node-label-recovery=candidate`. The normal `App` caller does not pass a
recovery prop, previous-label override, or diagnostic feedback override. The
candidate uses the existing previous Node-label ref, normal feedback policy,
and the unchanged first-pass continuity / settled-pass recovery formulation.

The five-fixture integration sequence passes clean/identical stability,
active-drag suppression, Relation-change feedback, finalization, manual
authority, reset, and repeated post-recovery stability. The Product-derived
primary stale case recovers `3` times with `32` candidates per Node and makes
the recovered result the next previous snapshot. Candidate evaluation delta is
`0` against baseline in clean, settled, and stale measurements; recovery
comparison median is at most `0.0126 ms` and added Node-label stage median at
most `0.7895 ms` in the measured source process. The largest measured full
derive median is approximately `28.1 ms` on Lighthouse EN, but this is not a
browser SLA and candidate rows are still materialized on every candidate-mode
pass.

The Actual Product smoke used the candidate URL switch without recovery
diagnostic props on primary, high-degree, Parallel/Self-loop, Lighthouse EN,
and Lighthouse JA. All settled to the expected surface with no console
warnings/errors. The outcome is `C. INTEGRATION ESTABLISHED / PERFORMANCE /
RECOMPUTATION BOUNDARY REMAINS`. Product default/adoption remains `HOLD`,
production provider remains `NOT ESTABLISHED`, Human Review remains `NOT
READY`, Adaptive Cascade remains inactive, and the Initial Layout Release
blocker remains `OPEN`. Session 0091 records this new objective.

### LiaisonScape Product Node-label Recovery Dense / Browser Main-thread Feasibility Experiment 1 (2026-09-16)

The [checkpoint result](liaisonscape-product-node-label-recovery-dense-browser-feasibility1-result.md)
extends the preceding Product-shaped recovery integration to seven deterministic
controls: Lighthouse-ish, medium dense, large dense, high-degree-heavy,
label-heavy EN/JA, and Parallel/Self-loop coexistence. Clean baseline and
`product-candidate` presentation outputs remain identical, and the recovery
comparison itself remains approximately sub-millisecond in source probes. The
candidate-row counter scales at 64 rows per Node across two passes, but this
was not the primary observed runtime cost.

The browser-native boundary is not closed. Medium/high-degree Product derives
are roughly `0.42–0.58 s`, while the 28-node/200-edge large-dense control is
roughly `2.6–2.8 s` per observed derive and reaches approximately `11 s`
longtask/rAF gaps during the initial Product sequence. Source and browser
evidence attribute the dominant cost to the full presentation pipeline rather
than recovery comparison. A separate lifecycle issue also remains: high-degree,
label-heavy EN, and Parallel/Self-loop controls produced multiple recovery
fingerprints across reuse probes.

The Actual Product smoke reached `graph-stable` with zero console errors for all
seven controls, but medium dense showed obvious long-Relation-label congestion.
No formal visual evidence or Human Review followed. The outcome is `F.
BROWSER FEASIBILITY NOT ESTABLISHED`, with runtime attribution `E. FULL
PRESENTATION PIPELINE PRIMARY BOTTLENECK` and a remaining quality/lifecycle
boundary. Product default/adoption remains `HOLD`, production provider remains
`NOT ESTABLISHED`, Human Review remains `NOT READY`, Adaptive Cascade remains
inactive, and the Initial Layout Release blocker remains `OPEN`. Workerization,
cooperative scheduling, and candidate-row optimization are not adopted by this
checkpoint. Session 0092 records this new objective.

### LiaisonScape Product Node-label Recovery Reuse Fingerprint Attribution 1 (2026-09-16)

The [checkpoint result](liaisonscape-product-node-label-recovery-reuse-fingerprint-attribution1-result.md)
confirms that the prior dense reuse arm was not fully source-parity: the
Actual Product stores and reuses Node-label, Relation-label, and automatic-route
snapshots together, while the prior harness rolled forward only Node-label
history. A new diagnostic arm rolls forward all three snapshots and hashes
route, Relation-label, Node-label, recovery, and final-output traces.

In the source-parity arm, the first changing stage is route reuse; changes then
propagate through Relation-label placement and Node-label placement. The
difficult fixtures do not settle to one state, but neither do several former
stable controls under this more faithful lifecycle. The result is therefore
`B/C COMBINED`: prior harness parity artifact confirmed / broader Product
presentation settling behavior open. Node-label recovery semantics, authority
boundaries, Product defaults, and all standing holds remain unchanged. Session
0093 records this bounded attribution checkpoint.

### LiaisonScape Self-loop Residual Responsibility Closure 1 (2026-09-16)

The [checkpoint result](liaisonscape-self-loop-responsibility-closure1-result.md)
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

The [canonical-baseline result](liaisonscape-accepted-dirty-worktree-ownership-resolution-canonical-baseline-commit2-result.md)
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

The [current-state audit result](liaisonscape-explicit-auto-layout-completion-readiness-current-state-gap-audit1-result.md)
confirms that the current Explicit Auto Layout button synchronously runs the
deterministic `solveAutoLayout` structural Node solver on the main thread,
directly updates working positions, marks graph-visible Entities adopted and
dirty, and leaves Dataset persistence to the existing Save Coordinates action.
Downstream Product routing, Relation-label, Node-label, Self-loop, and
viewport presentation recompute afterward; they are not part of the current
solver's candidate evaluation.

The resulting quality ceiling explains disorderly final presentation: the
current solver does not score crossings, occupied paths, label envelopes,
Self-loop pressure, or viewport quality. Frontier/Worker/Product computation
is reusable only behind a separate Explicit Auto Layout operation boundary;
the Initial Automatic Display adapter's coordinate-less fallback and
render-only semantics are not directly reusable. The checkpoint stops with an
explicit proposal-vs-direct-adoption lifecycle decision still required.
Initial Automatic Display and all Dataset/Coordinate/persistence authority
remain unchanged.

### Roadmap Sync — Explicit Auto Layout / Pin / Post-LiaisonScape Follow-ups 1 (2026-09-17)

This entry synchronizes the current planning direction from the Explicit Auto
Layout readiness audit and the subsequent design discussion. It is a
non-normative roadmap record. It does not change runtime source, the E2R Core,
an Extension schema, Dataset semantics, or the accepted Initial Automatic
Display contract.

#### LiaisonScape Explicit Auto Layout — active release blocker

The current synchronous `solveAutoLayout` path is not yet sufficient for the
pre-release quality bar: it produces deterministic Node geometry but does not
evaluate crossing, occupied-path, label-envelope, Self-loop, or viewport
pressure as a Product-quality result. Initial Automatic Display is already
production accepted and is not reopened by this item.

The preferred Explicit Auto Layout direction is:

```text
Auto Layout → async calculation → candidate Preview → Accept / Reject
```

This remains an implementation direction, not a completed runtime contract:

- Cancel while running preserves the display from immediately before the
  operation.
- Reject returns to that pre-operation display.
- Only Accept adopts the candidate into working positions and then uses the
  existing dirty / Save Coordinates semantics.
- This is a different contract from Initial Automatic Display's usable
  fallback and render-only adoption.
- The shared Frontier generator, Worker transport, and Product evaluation are
  reuse candidates, but Explicit Auto Layout needs its own operation/lifecycle
  adapter and manual-authority snapshot.

The next implementation work must first make the lifecycle and authority
boundary explicit. It must not silently replace the current direct-apply
semantics with a preview contract, or move routing, Relation-label,
Node-label, Self-loop, Dataset, Coordinate, persistence, or dirty-state
authority into the solver.

#### Entity Pin / Unpin — Explicit Auto Layout constraint direction

Persistent Entity Pin is recorded as a strong design direction for Explicit
Auto Layout:

- a Pinned Entity is a hard position constraint;
- only Unpinned Entities may move during Explicit Auto Layout;
- `manual move != Pin`; moving an Entity does not implicitly pin it;
- the fixed operation is intended to express reusable layout intent across
  repeated Auto Layout runs and later opens.

The preferred UI candidates are `Pin / Unpin` in the Entity Context Menu and a
Pin state control in Entity Detail. A small Node glyph may communicate state,
but should not be the primary click target. The visual treatment should remain
shape-independent, use more than shadow alone, and remain compatible with
hover, selection, and touch ownership. Glyph color and exact control/copy are
open questions.

Pin is not currently a Core concept. The preferred direction is a
LiaisonScape-owned layout/presentation Extension that associates saved Entity
position with pinned state, for example:

```json
{ "x": 420, "y": 180, "pinned": true }
```

This example is illustrative only. Exact schema, `pinned: false` versus field
omission, unknown-extension preservation, and the relationship to the explicit
Save Coordinates transaction remain open. Pin changes should remain working
layout state until an explicit save rather than silently mutating the Dataset.

#### Edge and presentation authority during Explicit Auto Layout

Auto Layout owns Node placement. Automatic Edge routing and curvature should
be re-derived and evaluated by Product for the new candidate geometry. Existing
manual Edge route/curvature, manual Relation-label, manual Node-label, and
manual Self-loop state remain user authority; Node Pin and Edge-route fixing
are separate concepts. Whether the preserved manual presentation state gives
the candidate adequate Product quality is an implementation/acceptance gate,
not permission to transfer that authority to Auto Layout.

#### Post-LiaisonScape and other product follow-ups

The existing [GitHub Sponsors follow-up](#github-sponsors-follow-up-2026-09-02)
remains the post-LiaisonScape direction: a restrained secondary link near the
bottom of Home, never a primary action. No runtime Sponsor implementation is
authorized by this synchronization.

Existing roadmap entries remain the canonical records for the following
separate follow-ups; this entry does not duplicate or close them:

- Dataset title editing for `extensions.metadata.title`, with unknown-field
  preservation and Dataset Replacement Safety;
- Entity deletion parity and the unresolved confirmation/cascade policy;
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

This roadmap distinguishes accepted direction, strong preference, candidate
implementation, and open question. It must not present an unresolved design as
canonical specification. The following remain explicitly open: Pin Extension
exact schema; omission versus `false`; Pin glyph/color; exact preview controls
and copy; cascade-deletion confirmation; and the exact external/local media
schema and security model.

No runtime, source, schema, or implementation change was made by this sync.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-SAFE-PREVIEW-FAILURE-DIAGNOSIS1 (2026-09-17)

The [Safe Preview failure diagnosis result](liaisonscape-explicit-auto-layout-safe-preview-failure-diagnosis1-result.md)
is classified **E. ROOT CAUSE NOT YET ESTABLISHED / HUMAN CHECK B HOLD**.
Fresh Titanic EN and Lighthouse JA fixtures reached Running and Product
Preview on both the 5173 and 5176 Vite instances. A focused source diagnostic
also shows that a manually moved ordinary unpinned graph and a valid working
Pin reach Preview; an invalid saved Pin without a compatible finite anchor
fails closed at capture with `PIN_RESOLUTION_FAILED` / `PIN_SPACE_UNSUPPORTED`.

The current App collapses capture failure and Worker/operation failure into the
same Safe Preview message, so the historical browser observation does not
identify its exact branch or payload. Strict Product quality warnings remain
Preview-admissible and are not this failure. No source behavior, Pin contract,
solver, Product authority, or Japanese copy was changed. Human Check B must
not be closed from fresh-fixture success alone; the exact failing Dataset/state
or a future diagnostic-only reason capture is still required.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-DEV-FAILURE-DIAGNOSTIC1 (2026-09-17)

The [DEV failure diagnostic result](liaisonscape-explicit-auto-layout-dev-failure-diagnostic1-result.md)
is classified **A. DEV FAILURE DIAGNOSTIC ESTABLISHED / READY TO CAPTURE NEXT
HUMAN CHECK B FAILURE**. Explicit Auto Layout hard failures now retain stage,
reason, operation/snapshot/graph identity, Entity/Pin counts, Pin diagnostics,
Worker status, and bounded reached-stage evidence in structured App state.
Development builds render that record only after a hard failure; production
UI, successful Preview, quality-warning Preview, Cancel, and stale outcomes do
not expose it.

An explicit DEV-only Lighthouse Pin-resolution probe reproduced the existing
fallback with `snapshot-capture` / `PIN_RESOLUTION_FAILED` /
`PIN_SPACE_UNSUPPORTED` visible in the Actual Product. The ordinary Lighthouse
JA path still reached Preview without the diagnostic. This proves observability
but does not attribute the intermittent Human Check B failure to Pin input.
The accepted Japanese Reject action is now `元の配置に戻す`. Solver quality,
Product scoring/presentation, Pin semantics, lifecycle, Dataset, Coordinates,
dirty-state, and persistence are unchanged. Human Check B remains HOLD until
the next real failure reason is captured and reviewed; dense Graph-space
quality remains a separate follow-up.

**Current-state clarification:** the `HOLD` wording above is the dated status
of those diagnostic checkpoints. The later Human disposition is **QUALIFIED**
([closure result](liaisonscape-explicit-auto-layout-human-check-b-qualified-closure1-result.md)).
That bounded acceptance did not identify the cause of the earlier hard-failure
observation; cause attribution remains a separate unresolved diagnostic
question and does not reopen the qualified lifecycle acceptance.

### Explicit Auto Layout quality follow-ups

The current Explicit Auto Layout Preview / Pin lifecycle contract remains
accepted independently of the following quality work. These items are
follow-ups, not blockers for Pin lifecycle correctness, persistence, or the
existing Preview contract.

- **Pinned global recovery:** With one or more Pins, a severely degraded
  current working layout can be preserved too locally. If unpinned Nodes have
  been manually collapsed into dense or overlapping positions, Pin-aware
  candidate generation may retain substantial crossings and congestion
  instead of reconstructing a cleaner global arrangement. Future work should
  keep Pinned Nodes as hard anchors while allowing unpinned Nodes to participate
  in broader/global candidate generation or recovery. This remains separate
  from Pin lifecycle correctness and persistence acceptance.
- **Presentation-aware local relaxation:** Automatically placed Node labels
  can remain rough beyond isolated dense cases. After structural candidate
  selection, future work may investigate a bounded local perturb/relax pass
  that re-evaluates Node labels, Relation labels, routing, overlaps, and other
  Product presentation pressure around the selected candidate. This is not
  authorization to retune spacing or routing heuristics without separate
  evidence.

Both follow-ups remain in the broader Explicit Auto Layout quality track,
alongside dense Graph-space separation and Relation-label congestion. Any
future improvement must preserve the current authority boundaries, runtime
expectations, Pin semantics, and canonical readability.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-HUMAN-CHECK-B-QUALIFIED-CLOSURE1 (2026-09-17)

The [Human Check B qualified closure result](liaisonscape-explicit-auto-layout-human-check-b-qualified-closure1-result.md)
records the user's final disposition: **QUALIFIED**. Actual Product evidence
accepted the Explicit Auto Layout lifecycle, Preview, Pin hard constraints,
manual movement of Pinned Nodes, Save Coordinates, and reload consistency.
The imperfect visual quality is represented by deferred **Pinned global
recovery**, **Presentation-aware local relaxation**, and dense Graph-space /
Relation-label congestion follow-ups; these do not reopen lifecycle acceptance
or provider selection. The full `npm test` Vite/HMR lifecycle gate remains
open separately.

### E2R-LIAISONSCAPE-GENERAL-COMPLEX-DATASET-PRACTICALITY-REASSESSMENT1 (2026-09-17)

The [General / Complex Dataset practicality reassessment](liaisonscape-general-complex-dataset-practicality-reassessment1-result.md)
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

The [Auto Layout quality freeze and worktree baseline audit result](liaisonscape-auto-layout-quality-freeze-and-worktree-baseline-audit1-result.md)
records the current research boundary. The controlled 12-Entity / 19-Relation
reference-placement fixture was reviewed in both JA and EN, and the user
judged that **Preview improves the controlled fixture**. The prior diagnostic
record remains historical: it records a reproducible reference-to-Preview
difference with mixed attribution, not a confirmed Human-visible regression.

A separate observation on the private real Dataset `天の葬列20260710a` found a
more compact Preview with increased Relation / Relation-label congestion
relative to its saved layout. The Dataset is not copied into the repository,
and the observation is retained as non-blocking evidence rather than a release
blocker. The complexity boundary is unresolved across graph size, density,
label pressure, and topology; no threshold exploration is started here.

Additional Explicit / Initial Auto Layout quality research is frozen for the
post-release follow-up track. Pinned global recovery, Presentation-aware local
relaxation, Graph-space separation, Relation-label congestion, broader
Node-label quality, circular-order behavior, and the broader complexity
threshold remain documented non-blocking follow-ups. Explicit Auto Layout
Human Check B remains `QUALIFIED`, Initial Automatic Display remains accepted,
and release practicality remains `B. PRACTICALITY ACCEPTABLE WITH
NON-BLOCKING QUALITY FOLLOW-UPS`. This freeze does not approve production
rollout, deploy, release, or a production-default change.

The current worktrees were audited without reset, restore, stash, clean, delete,
or commit. Accumulated accepted runtime/lifecycle source, tests, DEV fixtures,
research artifacts, and specification records have proposed logical commit
groups. `.tmp-*`, the older `experimental/product-evaluation-seam/spacing-inspection2/`,
and `e2r-spec/work/` diagnostic material remain preserved outside the proposed
baseline pending ownership/canonical-status review. The current classification
is **C. MIXED OWNERSHIP / COMMIT BOUNDARY NOT YET SAFE**; a follow-up may create
bounded local commits after human review.

### E2R-LIAISONSCAPE-WORKTREE-BASELINE-COMMIT-READINESS1 (2026-09-17)

The [worktree baseline commit-readiness result](liaisonscape-worktree-baseline-commit-readiness1-result.md)
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

The [shared test infrastructure audit result](e2r-workspace-shared-test-infrastructure-audit1-result.md)
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

The [Final Release-Readiness Audit result](liaisonscape-final-release-readiness-audit1-result.md)
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

The follow-up [test WS cleanup result](narrativeline-vite-test-ws-cleanup1-result.md)
is **IMPLEMENTED / ACCEPTED / CLOSED**. All 18 current NarrativeLine Vite
middleware test servers use SSR loading/transform only and do not consume
WebSocket/HMR APIs. Their per-server options now set `ws:false`, which disables
the unnecessary listener itself without changing assertions or test semantics.
Full tests pass 259/259 naturally; captured output has zero port 24678
warnings, zero listener observations during the run, and zero post-run
listeners/workers. Lint, build, and diff checks pass. No product/runtime or
Public behavior changed. Future tests that exercise Vite WS/HMR must opt in
explicitly for their own server.

The [Vite 24678 warning diagnostic result](narrativeline-vite-24678-warning-diagnostic1-result.md)
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

The follow-up [trigger audit](narrativeline-vite-24678-warning-trigger-audit1-result.md)
inspected installed Vite 8.1.5 and reproduced the trigger with eight parallel
middleware-mode servers: one bound fixed WS port 24678 and seven logged
`EADDRINUSE`. `hmr:false` does not disable this listener; `server.ws:false`
does. NarrativeLine's parallel test workers contribute the condition, but no
cleanup leak or runtime impact was found. The existing warning remains
**ACCEPTED / CLOSED** without test changes or output suppression.

The [NarrativeLine next-phase and source-handoff planning result](e2r-narrativeline-next-phase-and-source-handoff-planning1-result.md)
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

The [NarrativeLine documentation and final release-readiness audit result](e2r-narrativeline-documentation-and-final-release-readiness-audit1-result.md)
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

The [NarrativeLine documentation closure reconciliation result](e2r-narrativeline-documentation-closure-reconciliation1-result.md)
confirmed and corrected two remaining wording drifts in the current working
tree: `docs/MVP.md` now consistently distinguishes implemented bounded local
time fields from deferred Time Zone/UTC offset/Instant work, and `docs/ui-spec.md`
now assigns the locale selector to the Header and descriptor/Credits to the
Home Footer. No source, test, schema, runtime, or LiaisonScape artifact was
changed. NarrativeLine source-level implementation remains **CLOSED**.

### E2R-INITIAL-PUBLIC-RELEASE-REMAINING-GATES-RECONCILIATION1 (2026-09-17)

The [Initial Public Release remaining-gates reconciliation result](e2r-initial-public-release-remaining-gates-reconciliation1-result.md)
reconstructs the current cross-repository critical path without reopening
NarrativeLine or LiaisonScape implementation. Remaining gates are human
licensing/provenance confirmation, exact release-set selection, clean release
commits, explicit push/deploy/publication authorization, and public URL
deployment acceptance. Older Auto Layout `OPEN` records remain historical and
superseded for source-level readiness. No public write was authorized or
performed.

### E2R-INITIAL-PUBLIC-RELEASE-TRANSACTION-READINESS-DECISION1 (2026-09-17)

The [Initial Public Release transaction-readiness decision result](e2r-initial-public-release-transaction-readiness-decision1-result.md)
prepares, without selecting, the human decision packet for software licensing,
sample stewardship/rights, exact cross-repository revisions, and public URL
acceptance. The current classification is **TRANSACTION READINESS DECISIONS
PREPARED / HUMAN APPROVAL REQUIRED**. No release set, license artifact,
package metadata, sample, public URL, or public transaction was changed.

### E2R-PUBLIC-SAMPLE-RIGHTS-PROVENANCE-AND-RELEASE-DECISION-RECONCILIATION1 (2026-09-17)

The [public sample rights/provenance reconciliation result](e2r-public-sample-rights-provenance-and-release-decision-reconciliation1-result.md)
records all five current sample families as Initial Public Release candidates
under the human policy, while retaining per-sample stewardship/rights
confirmation. Bounded repository inspection found no concrete copy evidence,
but this is not legal certification. The reusable review process is recorded
in the central Knowledge playbook. No sample, translation, license artifact,
or release revision was changed or selected.

### E2R-PWA-AND-OFFLINE-CAPABILITY-ROADMAP1 (2026-09-17)

The [PWA and offline capability roadmap result](e2r-pwa-and-offline-capability-roadmap1-result.md)
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

The [Documentation Information Architecture / Roadmap Modularization Audit](documentation-information-architecture-roadmap-modularization-audit1-result.md)
is complete. Current recommendation: preserve existing documentation paths and
the single roadmap, strengthen `docs/README.md` as a responsibility-based
navigation hub, and keep detailed checkpoint evidence in dedicated result
documents. Existing-file moves, renames, archive migration, and roadmap
splitting require a separate human structure decision. This is a
documentation-only planning record; no runtime, normative specification, or
release artifact changed.

### E2R-HISTORY-2-USER-FACING-AUTHORING-SCOPE-DESIGN (2026-09-19)

> Historical planning checkpoint; current H2-POSITION-CIRCA status is governed
> by the bounded authoring closure entry below.

The [History 2 User-Facing Authoring Scope result](history-2-user-facing-authoring-scope-result.md)
records a documentation-only design checkpoint after `NL-H2-R1` acceptance.
Current Candidate recognition and read-only preservation remain **ACCEPTED /
CLOSED**; this checkpoint does not reopen them or authorize runtime work.

The smallest proposed meaningful public History 2 experience is one
`position` assertion with optional position-level `approximation: "circa"`,
using an explicit History `1.0.0` to `2.0.0` upgrade only when the H2-only
capability is selected. Bounded-point, temporal-extent, multiple assertions,
Relative Time, and broader Timeline semantics remain deferred. The proposal
requires human scope approval, especially for non-fabricating Timeline display
and approximate-value ordering, before a bounded NarrativeLine implementation
checkpoint may begin.

### E2R-H2-POSITION-CIRCA-HUMAN-SCOPE-DECISION-PREPARATION (2026-09-19)

> Historical checkpoint; the retained recommendation is superseded for current
> status by `E2R-H2-POSITION-CIRCA-BOUNDED-AUTHORING-CLOSURE` below.

The [H2-POSITION-CIRCA decision preparation](history-2-position-circa-human-scope-decision-preparation-result.md)
is complete. It recommends acceptance of one History 2 `position` assertion
with position-level `approximation: "circa"`, subject to explicit human
approval of the non-fabricating Timeline presentation projection, H1-to-H2
upgrade confirmation, H2-to-H1 downgrade boundary, and declaration cleanup.
This remains **RECOMMENDED FOR ACCEPTANCE / HUMAN APPROVAL REQUIRED** and does
not authorize NarrativeLine runtime work.

### E2R-H2-POSITION-CIRCA-BOUNDED-AUTHORING (2026-09-19)

> Historical implementation checkpoint; its pending human-acceptance status is
> superseded by the bounded closure entry below.

The explicitly approved H2-POSITION-CIRCA slice is implemented in
NarrativeLine and automated validation is green. The bounded surface is one
History `2.0.0` `position` assertion with optional position-level
`approximation: "circa"`, explicit History 1 to History 2 upgrade confirmation,
safe H2 exact editing, and the non-fabricating recorded-position Timeline
projection. The application result is **IMPLEMENTED / AUTOMATED GREEN / HUMAN
ACCEPTANCE REQUIRED**. Human acceptance remains required before this
capability is considered accepted, and History 2.0.0 remains a non-Stable
candidate. Bounded-point, temporal-extent, multiple assertions, Relative Time,
and broader temporal semantics remain deferred.

### E2R-H2-POSITION-CIRCA-DECLARATION-BLOCKER-FIX (2026-09-19)

> Historical repair checkpoint; its pending real-browser status is superseded
> by the bounded closure entry below.

The NarrativeLine repair result records the declaration boundary exposed when
a Dataset contained an existing Stable History 1 Event alongside the
explicitly upgraded circa Event. Current Validator evidence shows that
silently placing that H1 sibling under a History 2 declaration would be
invalid, so the application does not migrate or accept that mixed state.
The approved single-representation path is automated-green, but the current
status is **BOUNDARY CLARIFIED / REAL-BROWSER ACCEPTANCE PENDING** because the
fresh browser rerun could not initialize in the available browser connector.
This does not promote History 2.0.0 or close human acceptance.

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

The earlier implementation, blocker-fix, and planning entries above retain
their historical chronology. Current status is governed by this closure entry
and the linked [scope closure result](history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md).

### HISTORY-2-DATASET-WIDE-H1-TO-H2-UPGRADE-PLANNING (2026-09-19)

> Historical implementation-planning checkpoint; its open acceptance status is
> superseded by the bounded closure entry above.

The [scope-closure result](history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md)
was approved for implementation. The [NarrativeLine implementation result](https://github.com/sukoyaka-dopeness/e2r-narrative-line/blob/main/docs/history-2-dataset-wide-upgrade-implementation-result.md)
records **IMPLEMENTED / AUTOMATED GREEN** across Entity, Event, and Relation
History payloads, with strict preflight, atomic refusal, declaration
synchronization, and draft-preserving confirmation behavior. Browser
infrastructure diagnosis, Real Browser acceptance, and Human acceptance remain
open; History 2.0.0 remains a non-Stable Candidate.

The implemented scope defines an explicit atomic Dataset-wide History `1.0.0`
to `2.0.0` upgrade. Opening, viewing, ordinary
exact date/time editing, saving, exporting, or reloading an H1 Dataset without
using an H2-only capability must keep its H1 representation. The first
explicit use of an H2-only capability, currently
`approximation: "circa"`, is the planned upgrade trigger.

Because the exact History declaration is Dataset-level, the target is not an
Event-local H1/H2 mixture. The implementation converts relevant H1 exact
positions across the Dataset to equivalent H2 exact positions, applies
`circa` only where selected, and changes the declaration atomically. Exact and
approximate Events may coexist in a fully H2 Dataset; the refused state is a
mixed H1/H2 representation under one exact declaration. Detailed conversion
rules are recorded in the linked implementation result.

The safety direction is explicit and atomic: Cancel leaves the Dataset in H1;
failure must not leave a partial migration; any relevant H1 History that
cannot be converted safely causes refusal; and unknown data must not be
silently discarded. The planned sequence is:

1. Browser acceptance infrastructure timeout diagnosis.
2. Real-browser acceptance.
3. Human acceptance and H2-POSITION-CIRCA acceptance closure.
4. Documentation and roadmap structural cleanup.

The browser connector timeout cause is not established; in particular, port
`24678` is not identified as its cause. Timeout diagnosis is a separate
bounded checkpoint before real-browser acceptance. Roadmap splitting, archive
migration, and broader documentation IA cleanup remain deferred until after
H2-POSITION-CIRCA human acceptance closure. No further migration
implementation, schema change, Validator change, sample change, or Relative
Time change is authorized by this planning entry.

### E2R-INITIAL-PUBLIC-RELEASE-CROSS-APP-FOLLOW-UPS-RECONCILIATION1 (2026-09-19)

The [Cross-App Follow-Ups Reconciliation result](e2r-initial-public-release-cross-app-follow-ups-reconciliation1-result.md)
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
   result](e2r-cross-app-visual-hierarchy-form-geometry-audit1-result.md).

The next content/sample refresh audit remains separate because its public
capability and provenance decisions gate guide and sample claims. The unified
visual hierarchy/form-geometry audit is the single visual checkpoint for the
consolidated cluster. Push, deployment, publication, and public-release
decisions remain explicitly authorized human actions.

### E2R-CROSS-APP-VISUAL-HIERARCHY-FORM-GEOMETRY-AUDIT1 (2026-09-19)

The [Cross-App Visual Hierarchy / Form Geometry Audit result](e2r-cross-app-visual-hierarchy-form-geometry-audit1-result.md)
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

The [retired test-utils cleanup result](e2r-workspace-retired-test-utils-cleanup1-result.md)
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
| LiaisonScape selected Entity status Name display | **ACCEPTED / CLOSED** | At 390x844, a long selected Name wrapped within a 343px status box (x=16..359); document scroll width equaled the 390px viewport. Two same-name Entities remained independently selectable and produced the same name-based status; EN/JA integration tests cover empty-name ID fallback. Canvas tap cleared the status; locale switching updated the prefix. Current Dataset-open path clears selection. NarrativeLine's related Event→Entity Detail navigation was checked separately at 390px and stayed within a 390px document width. No source changes were needed. See [acceptance result](narrativeline-entity-selection-status-narrow-acceptance1-result.md). | None. Other selection-policy or display changes require a separate Human decision. |
| LiaisonScape Pin / Unpin User Guide coverage | **IMPLEMENTED / GUIDE COVERAGE UPDATED** | The EN/JA guides now document Pin/Unpin in Entity Detail and the Entity context menu, its Explicit Auto Layout constraint meaning, the working-state boundary, and persistence through Save node coordinates. The guides also record the related Add Relation empty-Entity boundary and explicit Auto Layout preview flow. Runtime, Pin semantics, Dataset, and Export behavior were not changed by this documentation checkpoint. |

- NarrativeLine narrow Header robustness: **LOCAL ACCEPTANCE PASS / CLOSED**.
  Current local correction, narrow cold-load/reload and SPA flow, EN/JA,
  focus-visible, and horizontal bounds were verified; the live Public artifact
  also passed the tested Chromium 390px flow but its exact source revision is
  unidentifiable. Physical-device reproduction/deployment of the correction is
  not claimed. See [acceptance result](narrativeline-narrow-header-robustness-acceptance1-result.md).

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
