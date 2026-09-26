# E2R-NARRATIVELINE-NEXT-PHASE-AND-SOURCE-HANDOFF-PLANNING1

- Date: 2026-09-17
- Implementation repository: `e2r-narrative-line`
- Classification: **A. NARRATIVELINE NEXT PHASE CLEAR / SOURCE HANDOFF READY**

## Current state

NarrativeLine is at:

- HEAD: `a525d2ec3d25c2ab3c1e2d286ca37bd6529784e5`
- branch: `main`
- tracked dirty work: `AGENTS.md` only, an existing instruction-economy
  change; it is outside this planning checkpoint
- staged changes: none
- untracked files: none in NarrativeLine
- package: private `0.1.0`
- scripts: Vite `dev`/`preview`, TypeScript/Vite `build`, ESLint `lint`, and
  Node test runner `test`

Fresh current-source validation was:

- `npm test`: **222/222 PASS**, exit code 0, natural completion;
- `npm run lint`: PASS;
- `npm run build`: PASS; and
- `git diff --check`: PASS, with only the existing line-ending warning for the
  dirty `AGENTS.md`.

The test suite still emits repeated app-local Vite middleware
`Port 24678 is already in use` warnings during integration tests. They do not
prevent completion or assertion success. This is an operational cleanup
candidate, not evidence of a current product failure.

## Current responsibility map

`src/App.tsx` is the composition root. It owns the in-memory Dataset, accepted
baseline and `datasetModified`, pending-work aggregation, Dataset acquisition /
replacement, handoff startup, locale startup coordination, navigation
transitions, and guarded Browser Back/Forward handling. Leaf screens and
services own their local draft, presentation, and domain operations.

`src/services/NavigationService.ts` owns the application History payload,
indexed entries, safe restoration/reconciliation, and navigation calculations.
Dataset import, validation, export, title update, and export filename behavior
are in `src/services/DatasetService.ts`; replacement copy and loss-risk policy
are split into focused services. `src/services/PendingWorkService.ts` owns the
beforeunload boundary.

The current screen set is Home, Timeline, Event Detail, Entity Picker, Entity
Create, and Entity Detail. `src/components/AppFrame.tsx` owns the shared
Header/Footer shell, locale control, Home/Back slot, and Credits dialog.
Timeline owns its sticky toolbar, title editor, local file picker, and More
menu. Detail screens own editing surfaces and use `CoordinatePanel.tsx` for
bounded Coordinate interpretation/editing. Dataset export remains
non-mutating; accepted changes are tracked in working state and protected by
the existing replacement/beforeunload semantics.

## Historical candidate reconciliation

| Candidate | Current classification | Evidence / consequence |
| --- | --- | --- |
| Long Timeline sticky toolbar, visible Add Event, More, Open/Export | **Already fixed / accepted** | `TimelineScreen.tsx`, `WorkspaceMoreMenu.tsx`, `index.css`, `timelineShellIntegration.test.js`, `workspaceMoreMenuIntegration.test.js`, and the accepted Back-to-Top record. Do not reopen as a new implementation target. |
| Shell/navigation Home and nested Back | **Already fixed / accepted** | `AppFrame.tsx`, `App.tsx`, `NavigationService.ts`, Browser traversal and nested-header tests, and Phase 24 navigation acceptance. |
| CoordinatePanel 600/601px geometry | **Already fixed / accepted at recorded boundary** | Current `CoordinatePanel.tsx` / `index.css` implementation and the recorded CoordinatePanel acceptance. A later browser audit is optional, not a known blocker. |
| Dataset title editing | **Implemented; documentation/visual acceptance may remain** | `DatasetService.updateDatasetTitle`, Timeline title editor, preservation tests, and current dirty-baseline behavior exist. Older roadmap wording saying implementation is merely future is stale relative to source. |
| Dataset acquisition / workspace secondary-action symmetry | **NarrativeLine fixed; Cross-App later** | NarrativeLine More contains Open and Export. Home remains primary acquisition; cross-app visual parity with LiaisonScape is a later bounded audit. |
| Locale / Header / Credits | **Accepted / complete for NarrativeLine** | `messages.ts`, `LanguageContext.tsx`, `AppFrame.tsx`, locale lifecycle/presentation tests, and locale-consumer acceptance. Cross-App overall completion is separate. |
| Replacement safety / persistence / handoff | **Accepted bounded behavior** | `App.tsx`, Dataset services, `PendingWorkService.ts`, handoff services, Browser traversal/replacement tests, and recorded acceptance documents. Do not redesign while doing visual work. |
| Cross-App destructive styling | **Still open, non-blocking** | Roadmap and action-hierarchy Knowledge record a comparison of equivalent risk states, focus, order, responsive behavior, and EN/JA styling; no universal CSS rule is adopted. |
| Metadata / Object ID / title-action affinity | **Still open, cross-app later** | Roadmap records a cross-app visual-affinity audit. Current source is functional; the remaining question is visual grouping, wrapping, and action-target clarity. |
| Event Detail responsive action layout / dialog visual polish | **Pre-release candidate, non-blocking** | Current source has explicit action groups and responsive rules; remaining work is evidence-led visual audit/polish, not a semantic or Dataset change. |
| Vite middleware `24678` warning | **Operational follow-up, not release blocker** | Fresh full test completed naturally with 222/222 PASS. The warning is emitted by app-local Vite middleware setup in integration tests, not by the shared DOM package. Cleanup requires a separate narrowly scoped test-infrastructure decision. |
| Display-order reordering / Relative Time semantics / aliases / Citation / confidence | **Deferred research or specification work** | Current source reads supported History data but does not authorize new persisted semantics. These are not the next UI implementation target. |
| Existing Relation deletion presentation and capability handoff | **Accepted/closed at recorded boundaries** | Later roadmap entries and current tests supersede older “next” lists. Reopen only with new evidence. |

One additional documentation drift remains: older NarrativeLine documents still
describe some History time support or title work as deferred even though the
current source and tests implement bounded versions. This is a documentation
consistency task, not a reason to alter runtime behavior.

## Recommended next phases

1. **Bounded Cross-App visual-consistency audit**
   - Objective: compare NarrativeLine Detail action hierarchy, dialog polish,
     metadata/ID presentation, and title/value/action affinity with the
     corresponding LiaisonScape surfaces.
   - Why now: behavior, navigation, locale, and safety contracts are already
     covered; the remaining user-facing gaps are visual and cross-app.
   - Stop condition: record either no concrete defect or one smallest bounded
     surface for implementation. Do not infer a universal CSS/DOM rule.
   - Human Review: recommended for final visual disposition; source/test audit
     can precede it.

2. **One selected bounded UI implementation, if the audit finds a defect**
   - Objective: change only the selected surface and preserve Dataset,
     navigation, focus, locale, and destructive semantics.
   - Why now: prevents reopening already accepted work or starting a broad
     visual rewrite.
   - Stop condition: focused integration tests, lint/build, and a reviewable
     desktop/narrow EN/JA result.
   - Human Review: required when geometry or visual hierarchy changes.

3. **Documentation consistency and NarrativeLine release-readiness audit**
   - Objective: reconcile README/user guide/implementation docs/roadmap with
     current source, then audit the exact release set and remaining non-blocking
     follow-ups.
   - Why now: current source is stable enough to distinguish implementation
     status from historical roadmap wording.
   - Stop condition: exact current status, validation evidence, and explicit
     public-write boundary are recorded.
   - Human Review: only where the audited release surface requires it.

The `24678` warning can be handled before or alongside phase 3 only if a
warning-free test lifecycle is an explicit release criterion. It should not
displace a concrete user-facing defect without new evidence.

## Source handoff: minimum sufficient set

### MUST HAVE for the next visual/release phase

- `src/App.tsx` — Dataset, replacement, dirty/pending, navigation, and screen
  orchestration authority.
- `src/components/AppFrame.tsx` — shared Header/Footer, Home/Back, locale,
  Credits, and shell hierarchy.
- `src/screens/TimelineScreen.tsx` — Timeline title editor, sticky toolbar,
  Add Event, More, import/export surface.
- `src/screens/EventDetailScreen.tsx` — Event metadata, editing actions,
  Coordinate panel, and responsive action grouping.
- `src/screens/EntityDetailScreen.tsx` — Entity metadata, related content,
  Coordinate panel, editing and destructive-action surfaces.
- `src/components/DetailBackConfirmationDialog.tsx` — guarded navigation
  copy, focus, and destructive discard semantics.
- `src/components/DatasetReplacementDialog.tsx` and
  `src/components/ModalDialog.tsx` — replacement and generic dialog behavior.
- `src/components/WorkspaceMoreMenu.tsx` — secondary action ownership and
  keyboard/focus behavior.
- `src/index.css` — shell, toolbar, detail/dialog, responsive breakpoints, and
  action geometry.
- `src/i18n/messages.ts` and `src/i18n/LanguageContext.tsx` — EN/JA copy and
  locale ownership.
- `src/services/DatasetService.ts`, `DatasetBaselineService.ts`,
  `PendingWorkService.ts`, `DatasetReplacementCopyService.ts`,
  `DetailDiscardCopyService.ts`, and `NavigationService.ts` — data safety,
  pending work, copy roles, and navigation contracts.
- `tests/timelineShellIntegration.test.js`,
  `tests/workspaceMoreMenuIntegration.test.js`,
  `tests/browserTraversalGuardIntegration.test.js`,
  `tests/detailBackConfirmationDialogIntegration.test.js`,
  `tests/localePresentationCompletenessIntegration.test.js`,
  `tests/localeHistoryLifecycleIntegration.test.js`, and
  `tests/DatasetReplacementCopyService.test.js` — focused behavioral and
  interaction evidence for the selected surface.

### USEFUL when the next phase selects the topic

- `src/components/CoordinatePanel.tsx` and `src/services/CoordinateService.ts`
  — only for CoordinatePanel or metadata/space presentation work.
- `src/services/HistoryService.ts` and `EventDetailDraftService.ts` — only for
  History precision, chronology, or Event Detail draft behavior.
- `src/services/DatasetHandoffService.ts`,
  `DatasetHandoffFragmentService.ts`, and
  `CapabilityHandoffSenderService.ts` — only for handoff or release-surface
  verification.
- `package.json`, `vite.config.ts`, `tsconfig*.json`,
  `tests/helpers/dom-test-environment.js`, and the relevant lifecycle tests —
  only if the `24678` test-server warning is selected as work.
- `tests/domIntegrationHarness.test.js` — shared DOM/React lifecycle evidence.

### DEFER UNTIL LATER

Research experiments, unused assets, model files, unrelated service tests, and
all source outside the selected surface. Do not hand off the entire repository
by default.

## E2R-SPEC handoff files

### MUST HAVE

- `docs/roadmap.md` — current status and priority authority.
- `docs/cross-app-destructive-action-hierarchy-audit.md` — action-role and
  focus boundary.
- `docs/narrativeline-phase24-navigation-safety-acceptance.md` — accepted
  navigation/loss-risk contract.
- `docs/narrativeline-locale-consumer-acceptance.md` — accepted EN/JA boundary.
- `docs/narrativeline-timeline-shell-acceptance.md` — accepted Timeline shell.
- `docs/narrativeline-relation-blocker-presentation-formal-acceptance.md` —
  accepted deletion/presentation boundary when comparing dialogs.

### USEFUL

- `docs/narrativeline/narrativeline-modernization-nl-0-acceptance.md` — original application
  boundary and known documentation drift.
- `docs/narrativeline-display-order-reordering-audit.md` — deferred chronology
  and presentation-order boundary.
- `docs/cross-app-confirmation-dialog-spacing-audit.md` — related dialog
  comparison evidence.
- `docs/application-design-principles.md` and
  `docs/application-recommendations.md` — when the task affects E2R/application
  boundaries.

Older checkpoint records remain historical evidence and should not all be
handed off.

## Knowledge handoff

Use the central `ai-knowledge/INDEX.md` first, then only these matching entries:

- `decisions/reusable-ui-integration-harness-ownership-boundary.md` — shared
  DOM lifecycle versus app-owned Vite/fixtures/assertions.
- `hypotheses/cross-app-action-hierarchy-and-destructive-controls.md` —
  safe/destructive roles, focus, and responsive action evidence.
- `hypotheses/reference-first-ui-consistency-audit.md` — reference-first
  cross-screen comparison without assuming identical CSS.
- `decisions/application-modularization-and-incremental-extraction.md` —
  incremental responsibility boundaries if a component becomes a target.
- `decisions/agent-instruction-economy-and-progressive-disclosure.md` —
  proportional handoff and validation guidance.
- `decisions/session-log-continuity-by-objective.md` — only when recording a
  new session/checkpoint history.

Knowledge remains reusable guidance. NarrativeLine source remains the
implementation authority and E2R-SPEC remains roadmap/specification authority.
No new Knowledge entry is justified by this audit.

## Safety and disposition

No NarrativeLine source, test, schema, UI, or runtime behavior was changed by
this planning checkpoint. The dirty `AGENTS.md` was not staged or modified.
No push, deploy, release, or publication was performed.

The current evidence supports a safe next phase and a focused source handoff.
The next implementation should be selected from a concrete cross-app visual
defect; old candidate lists must not be treated as automatic authorization.
