# E2R Session 0093 - NarrativeLine Next Phase and Source Handoff Planning

Date: 2026-09-17
Repository: `e2r-narrative-line` plus synchronized E2R specification record

## Session identity

Objective: Record the current NarrativeLine source state, completed work, and
the next bounded implementation/readiness phases.

Checkpoint: `E2R-NARRATIVELINE-NEXT-PHASE-AND-SOURCE-HANDOFF-PLANNING1`

Started: 2026-09-17

Status: `PLANNING COMPLETE / SOURCE HANDOFF READY`

Continuation file: New session; this objective is materially different from
the earlier LiaisonScape Initial Placement research recorded in Session-0052
and from the Node-label feasibility work in Session-0092.

## Work performed

The current NarrativeLine repository was audited without changing runtime,
application, schema, UI, or test behavior. The source handoff was reduced to a
focused set of 25 current files, grouped by application/UI, services, and
integration tests. The exact list and links are recorded in
`docs/e2r-narrativeline-next-phase-and-source-handoff-planning1-result.md`.

Current NarrativeLine source is on `main` at `a525d2e`; its only tracked dirty
path is the pre-existing `AGENTS.md` guidance update, which was preserved and
not staged. The E2R-SPEC worktree's existing `work/` material and unrelated
documentation changes were also preserved.

## Current source-backed state

- `src/App.tsx` remains the composition root for in-memory Dataset state,
  baseline/dirty state, replacement, handoff startup, locale coordination,
  navigation, and guarded Back/Forward behavior.
- `NavigationService` owns application History payload/index/restoration and
  reconciliation; `DatasetService` owns import, validation, export, title
  update, and filename behavior.
- `PendingWorkService` owns beforeunload protection. `AppFrame`,
  `TimelineScreen`, `WorkspaceMoreMenu`, and detail screens own their current
  shell, workspace, and detail responsibilities.
- Dataset export is non-mutating. Replacement and beforeunload protection keep
  working changes safe. Current screen/navigation and title-editing behavior
  are implemented and covered by focused tests.

Historical candidate lists were reconciled against current source and later
acceptance evidence. Timeline shell, navigation/back behavior, CoordinatePanel
boundaries, title editing, replacement/persistence/handoff, locale/header/
credits, and relation presentation boundaries are accepted at their recorded
scope. Cross-App visual consistency, metadata/action affinity, Event Detail
responsive polish, and deferred display-order/relative-time research remain
separate follow-up work. The recurring Vite middleware warning
`Port 24678 is already in use` remains operational follow-up only; it does not
prevent the current test process from completing.

## Validation evidence

In `e2r-narrative-line`:

- `npm.cmd test`: **222/222 PASS**, exit 0, natural completion; repeated
  `24678` WebSocket warnings were observed.
- `npm.cmd run lint`: PASS.
- `npm.cmd run build`: PASS.
- `git diff --check`: PASS; only the existing line-ending warning for dirty
  `AGENTS.md` was reported.

In `e2r-spec`:

- `npm.cmd run validate`: PASS, including the existing specification,
  coordinate, presentation, layout, visual, Apollo, and public-sample
  validators.
- `git diff --check`: PASS; the existing roadmap line-ending warning was
  reported without a whitespace error.

## Recommended next phases

1. Run a bounded Cross-App visual-consistency audit covering Detail actions,
   dialogs, metadata/ID presentation, title/action affinity, responsive
   behavior, and EN/JA copy in LiaisonScape and NarrativeLine. Human Review is
   appropriate for final visual disposition.
2. Implement only a concrete bounded UI fix if that audit identifies one;
   preserve Dataset, navigation, focus, locale, and destructive-action
   semantics.
3. Perform documentation consistency and final release-readiness review.

No new solver, runtime architecture, Dataset semantics, or Knowledge entry is
authorized by this planning checkpoint. The central Knowledge guidance used
was instruction economy/progressive disclosure, application modularization,
reusable UI harness ownership, reference-first visual audit, and session-log
continuity. No new Knowledge entry was justified.

No commit, push, deploy, release, or publication was performed.

`SESSION LOGGED - NARRATIVELINE NEXT-PHASE PLAN AND SOURCE HANDOFF READY`
