# LiaisonScape Detail / Deletion Modularization Readiness

Status: **READINESS AUDIT COMPLETE / READY FOR A BOUNDED EXTRACTION**

Date: 2026-08-27

This document records the `LS-DETAIL-DELETION-MODULARIZATION1-READINESS`
architecture audit. It is a planning and implementation-boundary document. It
does not change LiaisonScape runtime behavior, E2R Core or Extension
semantics, schemas, graph interaction, or Cross-App Relation deletion status.

## Context

LiaisonScape already has separate leaf UI components and domain services, but
`src/App.tsx` remains an approximately 2,000-line composition and workflow
root. Detail and deletion work is a particularly important boundary because
the accepted Cross-App Relation deletion direction requires explicit Relation
resolution while preserving Entity context, selection cleanup, Dataset
mutation safety, and focus/dismissal behavior.

The current checkpoint is an architecture audit only. It does not implement a
new hook, controller, service, dialog, blocker-resolution surface, or runtime
refactor.

## Existing architecture

The current application has these relevant boundaries:

- [`src/services/EntityService.ts`](../../e2r-liaison-scape/src/services/EntityService.ts)
  owns Entity creation, deletion assessment,
  deletion, detail lookup, and Entity detail mutation.
- [`src/services/RelationService.ts`](../../e2r-liaison-scape/src/services/RelationService.ts)
  owns Relation creation, deletion
  assessment, deletion, detail lookup, and Relation detail mutation.
- [`src/components/EntityDetailDialog.tsx`](../../e2r-liaison-scape/src/components/EntityDetailDialog.tsx)
  renders Entity detail fields,
  related Relation information, and the disabled Entity delete action when
  incident Relations remain.
- [`src/components/RelationDetailDialog.tsx`](../../e2r-liaison-scape/src/components/RelationDetailDialog.tsx)
  renders Relation endpoints,
  editable fields, technical details, and the explicit Relation delete action.
- [`src/components/ConfirmationDialog.tsx`](../../e2r-liaison-scape/src/components/ConfirmationDialog.tsx)
  owns the generic delete-confirmation
  presentation and safe initial focus.
- [`src/components/DetailDismissalConfirmation.tsx`](../../e2r-liaison-scape/src/components/DetailDismissalConfirmation.tsx)
  owns dirty-detail
  dismissal presentation, Escape handling, and Cancel focus.
- [`src/App.tsx`](../../e2r-liaison-scape/src/App.tsx) composes these surfaces
  and currently owns their state,
  transitions, Dataset updates, selection changes, and post-mutation cleanup.

This means the immediate problem is application orchestration concentration,
not missing domain services or a need to split presentational components.

## Responsibility inventory

### A. Workspace / Dataset lifecycle

`App.tsx` owns `dataset`, `datasetModified`, the clean Dataset baseline,
pending replacement state, acquisition and Handoff, locale, Dataset title
editing, export, diagnostics, and the `updateDataset` / `acceptDataset`
boundaries. This responsibility is not part of the first Detail/deletion
extraction.

### B. Selection / Detail workflow

`App.tsx` owns `selectedId`, `selectedRelationId`, `detailOpen`, Entity and
Relation drafts, `detailDismissal`, detail lookup, open/switch transitions,
dirty detection, and dismissal requests. Graph taps and context menus also
change the selected IDs and close detail.

### C. Creation workflow

`App.tsx` owns Entity and Relation creation mode, creation drafts, temporary
Entity placement, creation dismissal, and creation-to-selection transitions.
Creation is outside the first extraction.

### D. Deletion workflow

`App.tsx` owns `deleteConfirmation`, `deleteConfirmationId`, deletion
assessment calls, refusal messages, Relation and Entity deletion commands,
confirmation transitions, selection/detail cleanup, manual placement cleanup,
and Dataset mutation callbacks.

### E. Graph interaction

`App.tsx` owns pointer state, pinch and long-press state, node and Relation
dragging, viewport controls, graph selection, and Relation creation gestures.
This responsibility is outside the first extraction.

### F. Graph presentation

`App.tsx` derives graph routing, Relation label placement, Node label placement,
geometry, layer order, and viewport presentation. This responsibility is
outside the first extraction.

### G. Shell / global UI

`App.tsx` owns Home/workspace transitions, global locale effects, Credits,
toolbar behavior, global modal rendering, browser lifecycle, and keyboard
handling. This responsibility is outside the first extraction.

## Detail / deletion dependency graph

The relevant current flow is:

```text
graph Node or Relation selection
        |
        v
App selectedId / selectedRelationId
        |
        +--> getEntityDetail / getRelationDetail
        |          |
        |          +--> EntityDetailDialog / RelationDetailDialog
        |                         |
        |                         +--> openRelatedRelation
        |                         +--> requestDetailDismissal
        |                         +--> removeSelectedEntity / Relation
        |
        +--> detail drafts + dirty detection
        |
        +--> ConfirmationDialog or DetailDismissalConfirmation
        |
        +--> assess/delete domain service
        |
        +--> updateDataset
        +--> selection/detail cleanup
        +--> graph placement cleanup
```

The domain services do not own React state. The leaf dialogs do not mutate the
Dataset. The coupling is concentrated in the App handlers that coordinate
React state, service results, Dataset mutation, selection, and cleanup.

## Cross-App deletion pressure

The accepted Cross-App Relation deletion design requires the following future
capabilities without changing Core directionality or application ownership:

- an Entity deletion attempt remains blocked while incident Relations remain;
- self Relations count once and parallel Relations remain distinct;
- Event-related or otherwise non-graph-visible Relations remain Dataset
  Objects rather than being treated as nonexistent;
- a blocking Relation can be inspected and explicitly deleted one at a time;
- the Entity context can be retained while resolving a blocker;
- deleting the final blocker does not automatically delete the Entity;
- final Entity deletion remains a separate explicit action; and
- Cancel, dismissal, focus restoration, and identity presentation remain
  recognizable and safe.

Current LiaisonScape provides incident Relation listing through Entity detail
and explicit Relation deletion through Relation detail. It does not yet
provide the final blocker-resolution workflow. This audit therefore identifies
the orchestration boundary needed before that feature; it does not implement
the feature.

## Options considered

| Option | Boundary | Strength | Risk / limitation | Assessment |
|---|---|---|---|---|
| A | Detail and deletion as one application workflow coordinator | Matches the coupled detail, draft, dismissal, deletion, selection, and focus lifecycle | Medium extraction size; requires explicit adapters for Dataset and graph cleanup | **Recommended** |
| B | Separate Detail workflow and deletion workflow | Smaller conceptual areas | The blocker-resolution flow crosses both areas; selection, dismissal, and focus contracts become duplicated or indirect | Defer |
| C | Keep state in App and extract only handlers into a controller/service | Smallest initial file movement | State ownership remains split and the root still coordinates the same workflow transitions; weak preparation for blocker resolution | Not sufficient as the first boundary |

Option A does not mean a single large replacement module. The recommended
boundary is a narrow workflow coordinator whose responsibility is the Detail /
deletion lifecycle, with explicit inputs and callbacks for state that belongs
to the workspace or graph.

## Recommended boundary

The first extraction should be a Detail/deletion workflow controller or hook
(the final name and file shape remain open). It should own or derive:

- detail-open state and Entity/Relation draft state;
- detail dismissal state and dirty-detail assessment;
- selected detail models from the supplied selection IDs and Dataset;
- open Entity, open Relation, and related-Relation transitions;
- save Entity and Relation detail commands;
- deletion assessment and confirmation state;
- explicit Relation and Entity deletion transitions; and
- detail/deletion callbacks needed by the existing leaf dialogs.

The first extraction should not own:

- the Dataset object or clean Dataset baseline;
- Dataset replacement, Handoff, export, locale, or title lifecycle;
- graph routing, geometry, pointer, drag, pinch, or long-press state;
- graph label and placement state;
- the final Cross-App blocker-resolution UI; or
- new deletion semantics.

The graph selection IDs are currently shared by graph and detail behavior. The
least disruptive boundary is for App to remain the canonical owner of graph
selection while the coordinator receives the current IDs and explicit
selection-transition callbacks. Moving selection ownership can be reconsidered
only after the first extraction proves that the adapter is unnecessarily
wide.

## In scope for the first extraction checkpoint

Proposed next checkpoint:

`LS-DETAIL-DELETION-MODULARIZATION2A-STATE-CONTROLLER`

It may:

1. introduce one bounded workflow module for Detail/deletion state and
   transitions;
2. move the listed Detail/deletion state and handlers behind that boundary;
3. keep `updateDataset` as an App-owned callback;
4. keep graph placement cleanup behind explicit callbacks or a narrow result
   contract rather than importing graph internals into the workflow module;
5. wire the existing Entity, Relation, confirmation, and dismissal components
   through the controller without changing their presentation; and
6. preserve the current selection and focus contracts while proving the new
   seam with focused tests.

The implementation should be behavior-preserving. Feature implementation for
Cross-App blocker resolution must be a later checkpoint after this extraction
is accepted.

## Explicitly out of scope

- modifying `src/App.tsx` in this readiness checkpoint;
- creating the proposed hook, controller, or service now;
- copying NarrativeLine's blocked-delete dialog into LiaisonScape;
- implementing Cross-App Relation deletion blocker resolution;
- changing Entity or Relation deletion semantics;
- changing self-Relation or parallel-Relation behavior;
- changing graph routing, drag, pointer, viewport, or label interaction;
- changing CSS or responsive presentation;
- changing Dataset, Core, Extension, or schema behavior;
- changing Handoff, provenance, or directionality; and
- wholesale rewrite or mechanical file splitting.

## State ownership contract

| State / value | Current owner | First-extraction direction |
|---|---|---|
| Dataset and clean baseline | `App.tsx` | Remain in `App.tsx` |
| Dataset modified / pending work | `App.tsx` | Remain in `App.tsx`; receive draft-status output from coordinator |
| Graph selection IDs | `App.tsx` and graph handlers | Remain App-owned initially; pass IDs and transition callbacks |
| Detail drafts and detail dismissal | `App.tsx` | Move behind the coordinator |
| Delete confirmation state | `App.tsx` | Move behind the coordinator |
| Domain mutation | Entity/Relation services called by `App.tsx` | Continue using existing services through the coordinator |
| Dataset mutation boundary | `updateDataset` in `App.tsx` | Remain App-owned callback |
| Graph placement cleanup | graph state in `App.tsx` | Expose narrow post-delete cleanup callback/result |
| Dialog markup and local focus | leaf dialog components | Remain in existing components |

The coordinator must not create a second Dataset source of truth. Service
results must cross the existing `updateDataset` boundary, and failed
assessments or mutations must preserve the current Dataset reference and
message behavior.

## Selection boundary

Graph selection and detail selection currently share `selectedId`,
`selectedRelationId`, and explicit clearing transitions. The first extraction
must preserve these invariants:

- selecting an Entity clears Relation selection;
- selecting a Relation clears Entity selection;
- opening a related Relation switches detail context explicitly;
- closing or dismissing detail does not invent a second selection source;
- successful Relation deletion clears the selected Relation and detail;
- successful Entity deletion clears the selected Entity, detail, and its
  graph placement state; and
- stale IDs remain safely unresolved through existing service/detail lookups.

## Focus / dismissal boundary

The existing leaf dialogs remain the owners of their local focus behavior.
The first extraction must preserve:

- dirty-detail detection before Escape, backdrop, or close dismissal;
- Cancel and Discard behavior in `DetailDismissalConfirmation`;
- safe initial focus in `ConfirmationDialog`;
- global modal focus trapping and modal precedence;
- no automatic focus of a destructive action; and
- focus-safe cleanup after a detail or deletion transition.

The extraction must not add a general focus policy or merge Detail dismissal
with delete confirmation. Those are separate interaction states.

## Dataset update boundary

`updateDataset(nextDataset)` currently sets the Dataset and derives
`datasetModified` against the clean baseline. The first extraction should not
move Dataset ownership into the coordinator. It should either:

- receive `updateDataset` as an explicit callback; or
- return a typed mutation result that App applies through `updateDataset`.

The first option is preferred for preserving the current transition behavior
with the smallest seam. The coordinator may request a domain service mutation,
but it must not directly replace the Dataset state or clean baseline.

## Test preservation plan

The current LiaisonScape baseline is 208 passing tests, with lint and build
passing. The baseline UI contracts are represented by
[`tests/appUiIntegration.test.ts`](../../e2r-liaison-scape/tests/appUiIntegration.test.ts),
[`tests/dataset.test.ts`](../../e2r-liaison-scape/tests/dataset.test.ts), and
[`tests/relation-service.test.ts`](../../e2r-liaison-scape/tests/relation-service.test.ts).
The first extraction should retain and, where necessary, supplement
coverage for:

- Entity and Relation Detail open, close, and switch;
- clean and dirty detail dismissal;
- Entity deletion ready and blocked assessment;
- explicit Relation deletion and delete confirmation;
- confirmation Cancel and successful deletion;
- Dataset update callback and Dataset identity preservation on refusal;
- selection and detail cleanup after deletion;
- self Relation and parallel Relation preservation;
- Event-related or hidden Relation preservation;
- no automatic Entity deletion; and
- safe focus behavior.

The extraction checkpoint should pass the affected focused tests, the full
LiaisonScape test suite, lint, build, and diff check. No browser acceptance is
required for this readiness audit; browser acceptance becomes required if the
next extraction changes observable UI behavior.

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| App and coordinator both own selection or draft state | Define one owner per state and use explicit adapter callbacks |
| Dataset mutation bypasses baseline tracking | Keep `updateDataset` in App and test refusal identity |
| Graph cleanup leaks into workflow code | Use narrow post-mutation cleanup callbacks or typed results |
| Focus or Escape behavior changes during wiring | Preserve existing leaf components and add focused transition tests |
| Cross-App feature and refactor become one change | Keep blocker-resolution UI in a later checkpoint |
| Premature abstraction creates a generic framework | Use one LiaisonScape-specific bounded boundary first |
| File movement obscures behavior changes | Compare behavior-preserving diffs and run the existing full gate |

## Proposed next checkpoint

`LS-DETAIL-DELETION-MODULARIZATION2A-STATE-CONTROLLER` is the recommended next
step. It is a behavior-preserving extraction only. It should be followed by a
separate wiring/acceptance checkpoint if the resulting seam is stable, and
only then by Cross-App Relation deletion readiness implementation.

The proposed sequence is therefore:

1. 2A: extract the bounded Detail/deletion state and controller seam;
2. 2B: migrate and verify existing dialog wiring if needed;
3. implement the LiaisonScape-native Cross-App blocker-resolution workflow;
4. accept the LiaisonScape Relation deletion behavior; and
5. perform bidirectional Cross-App interoperability acceptance.

This sequence does not reorder unrelated roadmap priorities and does not
authorize any of the later implementation steps in this audit checkpoint.

## Acceptance criteria for 2A

The next extraction may be considered ready for acceptance only when:

- the proposed boundary is implemented without a wholesale rewrite;
- Dataset/Core/Extension/schema semantics are unchanged;
- Entity and Relation domain services remain the mutation authority;
- App remains the Dataset and clean-baseline owner;
- graph interaction and selection invariants remain unchanged;
- Detail draft, dismissal, deletion confirmation, and focus behavior remain
  unchanged;
- refusal paths preserve the current Dataset and message behavior;
- existing and focused tests pass;
- lint, build, and diff check pass; and
- any observable UI change receives focused browser evidence with native
  browser-dialog state classified separately from application dialogs and DOM
  evidence.
