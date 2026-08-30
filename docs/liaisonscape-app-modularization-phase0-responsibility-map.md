# LiaisonScape App Modularization Phase 0 Responsibility Map

Date: 2026-08-30

Status: `MAPPED — LIAISONSCAPE APP RESPONSIBILITY AND STATE-WRITER BOUNDARIES`

## Model used and assessment

Model used: GPT-5 Codex session. The requested Sol Medium profile was a
recommendation for this architectural audit; this session used the available
Codex model. The assessment is based on the complete local source, local
tests, accepted E2R decisions, and a read-only public baseline.

## Trigger, scope, and authority

The trigger is the concentration of Dataset lifecycle, Coordinate work,
graph interaction, presentation geometry, dialogs, and shell orchestration in
`e2r-liaison-scape/src/App.tsx`.

This document is application architecture evidence and refactor checkpoint
authority. It is not a normative E2R Dataset or schema specification.

Primary authority is the accepted workspace decision in
`ai-knowledge/decisions/application-modularization-and-incremental-extraction.md`:
extract by responsibility and change reason, preserve ownership semantics,
characterize behavior first, and make one bounded extraction at a time.
Accepted Dataset Replacement Safety, Coordinate, Presentation, placement,
direct graph authoring, and explicit Auto Layout decisions remain unchanged.

Non-goals are source refactoring, hook or component creation, behavior change,
dependency change, browser acceptance, push, release, and any change to
`e2r-test-utils`, `ai-knowledge`, or other repositories.

## Public and local baseline

The public GitHub `src/App.tsx` baseline previously read by ChatGPT has SHA
`30390f77688e13b44c6d43f149a24f6ad9d24dd5` and corroborates the concentration
of state groups. It is not the implementation authority and may lag local
work.

The local LiaisonScape baseline is branch `main`, HEAD
`0611c27 test: adopt shared DOM test environment`. The working tree was clean
at preflight. The accepted local migration and explicit Auto Layout commits
remain in history; no LiaisonScape source was changed in this checkpoint.

## App.tsx size and structure

`src/App.tsx` is 2,096 lines. Its imports already show useful leaf boundaries:
Dataset and service modules, migration and replacement-safety modules,
presentation and placement modules, viewport and graph-authoring modules,
handoff modules, dialogs, and `useDetailDeletionWorkflow`.

The root still owns approximately 40 React state cells and 27 refs, including
Dataset lifecycle, Coordinate working state, presentation ownership, pointer
lifecycles, focus restoration, and shell state. It contains 19 effects or
layout effects, several memoized graph and geometry derivations, and roughly
40 local functions/callbacks.

Major JSX regions are Home/entry, replacement dialog composition, workspace
toolbar and maintenance actions, graph SVG and pointer handlers, placement
popover/context menu, detail and creation dialogs, credits, and focus/dialog
overlays. The rendering composition is already partly delegated to leaf
components, but workflow and writer coordination remain in App.

## State classification

The following table records every meaningful App-owned mutable state/ref. A
state with more than one concern has one primary semantic owner and explicit
coupling rather than duplicated ownership.

| State/ref | Class | Semantic owner and writers | Reset/persistence | Pending/replacement | Future owner and risk |
|---|---|---|---|---|---|
| `dataset` | S1 | App Dataset mutation; `acceptDataset`, `updateDataset`, detail/creation callbacks | replacement/new; Dataset persisted on export/save | yes / yes | dataset lifecycle workflow; high |
| `datasetModified`, `cleanDatasetBaseline` | S3 | App baseline transaction; `refreshDatasetBaseline`, mutation paths | accept/refresh; baseline is session-only | yes / yes | replacement-safety orchestration; high |
| `pendingDatasetReplacement`, source, target landing | S3 | App replacement staging; `requestDatasetReplacement`, discard/export continuation | cancel/discard/accept; no | yes / yes | replacement workflow; high |
| `startupHandoffFailure`, `diagnostics`, `message` | S3/S9 | acquisition and user feedback paths | new/open/error paths; no | indirectly / yes | acquisition/diagnostics boundary; medium |
| `positions`, `coordinatesDirty`, adopted IDs ref | S2 | App Coordinate adoption; initial placement, drag, Auto Layout, save/migration | accept/replacement/save/delete; stored Coordinate only after explicit save | yes / yes | `useCoordinateWorkflow`; high |
| `selectedId`, `selectedRelationId`, `hoveredEntityId` | S4 | graph taps, detail/context actions, deletion callbacks | dataset replacement/delete; no | no / yes | selection boundary; medium |
| `nodeLayerOrder`, `edgeLayerOrder` | S5 | graph selection and `bringToFront` | dataset reset/delete; session-only | no / yes | graph presentation; medium |
| `edgeLabelOffsets`, `edgeCurveOffsets`, `selfLoopOverrides` | S5 | drag/restore/reset callbacks | relation reset/delete; session-only | no / yes | manual relation presentation; high |
| `manualNodeLabelOffsets` ref | S5 | node-label drag and reconciliation | dataset/label reconciliation; session-only | no / yes | manual placement boundary; high |
| `manualRelationLabelAnchors` ref | S5 | relation-label drag/reconciliation | relation reset/delete; session-only | no / yes | manual placement boundary; high |
| `relationLabelVisualState` ref | S10 | geometry reconciliation | derived reset; no | no / no | geometry cache; low-medium |
| previous node/edge label placement refs | S10 | placement memo/effect reconciliation | graph changes; no | no / no | geometry cache; low |
| `scale`, `pan` | S7 | wheel, pinch, canvas drag, reset/fit | reset/open; session-only | no / no | viewport workflow; medium |
| toolbar collapsed/position and toolbar refs | S7/S6 | toolbar controls and pointer drag | workspace/reset; session-only | no / no | viewport UI; medium |
| `dragRef`, `pointersRef`, `pinchRef` | S6 | graph pointer start/move/end/cancel | pointer lifecycle; no | no / no | graph gesture controller; high |
| edge-curve drag start/suppression refs | S6/S5 | curve drag and cancellation | pointer end/cancel; no | no / no | relation gesture boundary; high |
| long-press refs and context suppression | S6/S9 | touch long press/context menu | pointer/cancel; no | no / no | gesture/context boundary; high |
| `creationMode`, preview, draft fields, dismissal | S8 | creation callbacks and dialog | save/cancel/replacement; Dataset changes persist, placement may be pending | yes / yes | creation workflow; high |
| `pendingEntityPlacement` | S8/S2 | canvas/context creation and save | creation cancel/save; Coordinate is dirty only on explicit placement adoption | yes / yes | creation-coordinate seam; high |
| `datasetTitleEditing`, draft, title refs | S1/S9 | title edit callbacks | save/cancel/replacement; title persisted in Dataset | yes / yes | Dataset metadata workflow; medium |
| `locale` | S9 | initial load and locale control | localStorage; not Dataset | no / no | shell/localization; low |
| credits/maintenance/menu/context/popover state | S9 | UI actions and effects | close/navigation; session-only | no / no | shell/dialog composition; low-medium |
| focus trigger and restoration refs | S9/S3 | replacement/title/detail/dialog effects | close/restore; no | indirectly / yes | focus-aware workflow boundaries; high |
| `autoLayoutConfirmationOpen` | S9/S2 | request/apply Auto Layout | cancel/confirm; result remains working until Save | yes / yes | Coordinate adoption workflow; medium |
| `manualLabelRevision`, hover/popover state | S5/S10 | placement hover and reconciliation | visual changes; no | no / no | presentation UI; low-medium |
| `view` | S9 | home/workspace navigation | navigation; no | no / no | shell composition; low |

## Writer map

The principal Dataset writers are `acceptDataset`, `updateDataset`, title-save,
creation save, detail workflow callbacks, deletion callbacks, migration
functions, and replacement continuation. The hook
`useDetailDeletionWorkflow` does not directly own App's Dataset state: it
receives `onDatasetUpdate`, `onMessage`, and selection/deletion callbacks.
Therefore App remains the Dataset mutation transaction owner while the hook
owns detail drafts and deletion decision state.

The Dataset baseline is written by `refreshDatasetBaseline` during acceptance
and mutation completion. `datasetModified` is changed alongside Dataset
mutations and replacement decisions. `pendingUserWork` is derived from
Dataset modified state, `coordinatesDirty`, and meaningful creation draft;
it must not be made a second independent writer.

`positions` is written by initial acceptance/placement, direct node drag,
Auto Layout adoption, Coordinate migration/preservation, creation placement,
deletion cleanup, and replacement handling. `coordinatesDirty` is written by
node drag, explicit Entity placement, Auto Layout adoption, save, migration,
and replacement preservation. These are one high-risk Coordinate workflow,
not independent setters.

Manual node-label offsets and relation-label anchors are written by label drag
handlers. Edge curve offsets and self-loop overrides are written by curve drag,
restore, reset, and relation deletion paths. Their visual state is local
application presentation, not automatically Dataset Coordinate or Presentation
Extension data.

Selection is written by graph tap handlers, detail/context actions, creation,
replacement acceptance, and deletion callbacks. Pointer state is written by
`startGraphPointer`, `onCanvasPointerMove`, `endGraphPointer`, long-press
handlers, pinch handling, and cancellation effects. Focus refs are written by
replacement/title/dialog triggers and consumed by focus restoration effects.

## Atomic coupling map

| Coupled group | Invariant | Bad split failure |
|---|---|---|
| `dataset`, baseline, `datasetModified`, diagnostics | accepted Dataset and clean comparison describe the same transaction | false clean state or lost replacement warning |
| `positions`, `coordinatesDirty`, stored Coordinate | working positions are distinct from persisted coordinates; dirty is true only for pending writes | unsaved coordinates silently discarded or wrongly serialized |
| positions, replacement staging, creation draft | replacement cannot discard pending work without explicit decision | user work loss and incorrect confirmation |
| graph Dataset, positions, selection, layer orders | deleted/replaced IDs cannot remain selected or layered | stale visual nodes and invalid actions |
| edge route, curve/self-loop, label anchor, visual cache | labels and routes use the same current geometry | jumpy or misplaced labels after drag |
| pointer refs, capture, drag mode, positions/presentation setters | one pointer transaction ends exactly once and releases capture | stuck drag, accidental click, or gesture corruption |
| dialog state, opener refs, restoration flags | dismissal and focus restoration refer to the initiating control | focus loss or restoration to detached controls |
| creation mode, preview, pending placement, Dataset mutation | saved object and its intended placement are adopted consistently | orphan object or dirty flag mismatch |

## Persisted, working, transient, and derived boundary

| Boundary | Current data |
|---|---|
| Dataset-owned persisted | `dataset`, Dataset metadata/title, and stored Coordinate payload only after explicit Coordinate save |
| Application-owned unsaved work | `positions`, `coordinatesDirty`, pending explicit placement, working Auto Layout result, creation draft when meaningful |
| Session-durable application presentation | manual node-label offsets, relation-label anchors, route/curve offsets, self-loop overrides, layer orders, viewport state |
| Pure transient interaction | drag/pointer/pinch/long-press refs, previews, hover, context menu placement, focus/restoration flags |
| Derived rendering/cache | graph maps, routed edges, label placements, reconciliation maps, diagnostics derived for display |

Automatic placement and Auto Layout output are derived/working until an
intentional workflow adopts them. Manual route/label state must not be
collapsed into Dataset Coordinate or Presentation Extension ownership without
an accepted semantic decision.

## Coordinate workflow map

Initial positions come from `getStoredCoordinates` and `placeInitialEntities`,
with deterministic fallback placement. Acceptance fits the graph viewport.
Coordinate migration/adoption is handled by the migration modules and App
orchestration. Entity creation uses automatic placement as derived state, or
explicit canvas placement as pending Coordinate work. Direct node drag updates
`positions`, marks `coordinatesDirty`, and records adopted IDs. Auto Layout
solves pure graph geometry; App confirms, adopts the result into working
positions, and leaves Save as the persistence boundary.

Save is `saveCoordinates`; it validates the accepted Coordinate/Draft shape,
writes safely where allowed, then clears dirty state. Migration and replacement
use `preservePendingCoordinates`. Entity deletion removes obsolete working
positions and related presentation state. Replacement either preserves pending
coordinates or requires an explicit discard/export decision. This establishes
that Coordinate workflow can be given a clear owner without owning Dataset
Replacement Safety or graph pointer gestures: **YES, with a narrow interface**.

The owner must own positions, dirty/adopted-coordinate bookkeeping, initial
loading, save/migration adoption, Auto Layout adoption, and Coordinate cleanup.
It must not own Dataset replacement policy, generic Dataset mutation, pointer
capture, route solving, or manual relation presentation.

## Auto Layout boundary

`solveAutoLayout` remains a pure deterministic solver. App owns confirmation,
invocation, working-position adoption, `coordinatesDirty`, and the Save
boundary. Auto Layout must preserve manual route/label ownership because those
maps are separate application presentation state. A future Coordinate owner
should receive a solver result and adopt it; it should not absorb the solver's
graph algorithm merely because both concern positions.

## Dataset lifecycle boundary

`DatasetService` loads, serializes, extracts metadata, and validates export.
Migration modules assess and transform their bounded payloads. Replacement
safety functions decide whether a candidate is clean, staged, discardable, or
exportable. App currently orchestrates new Dataset, local open, sample load,
handoff acquisition, replacement staging, beforeunload, title edit, export,
selection reset, and focus restoration. A future lifecycle workflow may own
that orchestration, but it must not become a generic `useWorkspace` hook or
absorb Coordinate and graph gesture semantics.

## Graph interaction boundary

No extraction is recommended in this phase. Canvas pan/zoom, node drag,
relation route/self-loop drag, node-label drag, relation-label drag, relation
creation, context menu, long press, pointer capture, and pinch share
`dragRef`, pointer maps, graph refs, positions, selection, and presentation
maps. The source supports the expectation that graph interaction is a
high-risk later phase. Naive extraction could split one pointer transaction or
lose browser capture/cancel semantics.

## Existing extracted responsibility audit

`useDetailDeletionWorkflow` is a healthy but deliberately narrow precedent. It
owns detail drafts, touched presentation drafts, detail open/dismissal,
deletion confirmation, deletion-resolution state, and detail/deletion service
calls. It receives Dataset, locale, selected IDs, and explicit callbacks. It
indirectly changes App Dataset, message, selection, and presentation through
those callbacks, but does not receive a setter for arbitrary App state. Its
boundary is useful because it isolates a workflow while leaving the Dataset
transaction in App. Future extraction should follow this callback discipline.

## Responsibility map

| Responsibility | Current state/writers | Delegated modules | Readiness / future owner |
|---|---|---|---|
| Locale and shell | locale, view, credits, maintenance | i18n, dialogs | high; shell composition |
| Acquisition and handoff | open, failures, diagnostics | DatasetService, handoff modules | medium; acquisition workflow |
| Replacement safety | pending candidate/source, baseline, dirty | replacement-safety, focus | low now; high-coupling lifecycle workflow |
| Dataset mutation/baseline | dataset, modified, baseline | services, deletion hook | low-medium; Dataset transaction owner |
| Metadata/title | title state and refs | DatasetService | medium |
| Coordinate workflow | positions, dirty, adoption | placement/migration modules | best first candidate, high risk |
| Auto Layout integration | confirmation and adoption | pure `auto-layout.ts` | medium; Coordinate owner seam |
| Selection/detail/deletion | selected IDs, hook state | detail hook/services/dialogs | detail hook already extracted |
| Creation | mode, drafts, preview, placement | services/dialog | medium-high; creation workflow later |
| Manual node labels | map ref, revision, drag writers | placement/presentation modules | medium; coupled to geometry |
| Manual relation labels | anchor map, revision, drag writers | relation-label module | medium; coupled to route |
| Relation route/self-loop | curve maps, drag refs | viewport/presentation modules | low; browser-sensitive |
| Graph gestures | pointer/drag/long press refs | direct authoring/viewport helpers | low; last/high risk |
| Viewport | scale, pan, toolbar state | viewport helpers | medium |
| Context menu/long press | menu and gesture refs | direct graph authoring | low-medium |
| Diagnostics/messages | diagnostics, message | i18n and services | medium |
| Credits/maintenance UI | shell state/refs | dialog components | high |
| Focus restoration | trigger and restore refs | replacement-focus, effects | medium; preserve with workflow |
| Home/workspace composition | view and JSX regions | leaf components | medium; composition root target |

## Characterization coverage and browser acceptance

| Behavior | Current coverage | Before extraction |
|---|---|---|
| stored coordinate initialization/fallback | strong via dataset and placement tests; integration coverage exists | retain and add owner-level assertions if needed |
| Coordinate save and dirty flag | partial: safety and integration paths exist | add focused characterization before extraction |
| direct node drag | partial/strong in `appUiIntegration.test.ts`; pointer semantics remain browser-sensitive | preserve real-browser baseline |
| Auto Layout adoption | partial: solver and integration paths | add adoption/dirty characterization |
| replacement while coordinates dirty | strong in replacement-safety tests | retain as gate |
| Entity deletion coordinate cleanup | partial in Dataset/integration behavior | add explicit cleanup assertion |
| creation placement | partial in safety and integration tests | add explicit automatic vs explicit placement cases |

Automated tests are sufficient for pure solver, migration, safety predicates,
and Dataset transformations. Targeted browser acceptance is advisable for
Coordinate extraction if node gesture handlers remain in App. Dataset lifecycle
changes affecting beforeunload/focus need targeted browser acceptance.
Graph interaction changes require real-browser acceptance because pointer
capture, touch/pen, pinch, long press, route drag, and focus behavior are
browser-sensitive.

## Candidate extraction ranking

1. Coordinate workflow: clearest bounded semantic responsibility, but high
   atomic coupling; first after characterization.
2. Dataset workspace lifecycle: valuable but replacement/baseline/focus and
   beforeunload coupling make it a larger second extraction.
3. Workspace actions/shell: comparatively clear, but it calls into both
   Coordinate and Dataset lifecycle and should follow those seams.
4. Dialog composition: feasible incrementally, building on the existing detail
   hook, but mostly composition rather than the most urgent writer problem.
5. Graph interaction: lowest readiness and highest browser/regression risk.

## Recommended first extraction

Choose exactly one: **Coordinate workflow**.

Proposed owner: `useCoordinateWorkflow()` or an equivalently narrow
responsibility-based module, subject to an implementation checkpoint. It owns
`positions`, `coordinatesDirty`, `adoptedCoordinateEntityIdsRef`, initial
stored/fallback coordinate adoption, explicit placement adoption, direct
Coordinate save/migration transitions, Auto Layout result adoption, and
Coordinate cleanup on Dataset changes.

It does not own `dataset`, baseline, replacement policy, pending replacement,
pointer refs/capture, selection, route/label maps, viewport, or the pure
`solveAutoLayout` algorithm.

The App interface should provide the current Dataset/graph and safe service
operations, and receive working positions, dirty status, and narrow callbacks
such as `acceptInitialPositions`, `adoptLayout`, `adoptExplicitPlacement`,
`saveCoordinates`, `preserveOnReplacement`, and `removeEntity`. The exact
interface must be derived from characterization rather than invented in Phase 0.

Required invariants are: working positions are not persisted implicitly;
dirty status tracks pending Coordinate work; explicit placement and drag are
not silently discarded; replacement safety sees the same pending state; Auto
Layout does not mutate Dataset until Save; and deletion/replacement cannot
leave positions for absent IDs.

STOP if the extraction requires owning replacement decisions, changes the
persisted/working boundary, changes manual presentation semantics, moves
pointer capture, changes browser behavior, or causes a failing baseline gate.

## No line-count target

The objective is not to reduce App.tsx below an arbitrary line count. Success
means clearer state ownership, a narrower writer set, explicit persisted/
working/transient boundaries, reduced callback entanglement, behavior-oriented
testability, and preserved browser semantics. App.tsx remaining at 800, 1000,
or another size is acceptable if its remaining responsibility is coherent.

## Codex independent assessment

### Agree

Yes. Responsibility-based incremental extraction is supported by live local
source, not merely by the 2,096-line count. App has many independent state
classes and writer families, while useful leaf services/components already
exist. The concentration is significant enough to justify modularization.

### Concern

The most dangerous boundary is `positions` versus stored Dataset Coordinate,
especially where `coordinatesDirty`, replacement safety, explicit creation
placement, deletion, and Auto Layout adoption meet. A close second is shared
pointer state coupled to presentation writes.

### Alternative

The existing detail/deletion workflow is a safer small extraction by code
surface, but it is already extracted and is not the highest remaining writer
coupling. Dataset lifecycle is not safer as a first extraction because its
baseline, replacement, focus, and beforeunload invariants are broader.

### Recommendation

Characterize Coordinate behavior first, then extract exactly the narrow
Coordinate workflow. Keep graph gestures and replacement safety outside that
first module.

## Implementation changes, roadmap, and result

Implementation changes: only this e2r-spec document was added. No LiaisonScape
source, test, CSS, dependency, App import, or behavior was changed. No
`ai-knowledge` file was changed. `docs/roadmap.md` remains unchanged because
it already records LiaisonScape UI modularization and the accepted application
baseline; no materially misleading state required correction.

Push status: no push. No deploy, npm publish, tag, release, browser acceptance,
or deletion was performed.

The canonical `e2r-test-utils` audit result remains unchanged. The protected
dirty file `ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` remains
untouched.

Result: **MAPPED — LIAISONSCAPE APP RESPONSIBILITY AND STATE-WRITER BOUNDARIES**

