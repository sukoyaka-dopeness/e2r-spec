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
`docs/narrativeline/e2r-narrativeline-next-phase-and-source-handoff-planning1-result.md`.

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

---

## Continuation - History 2 authoring, Dataset-wide upgrade, and browser infrastructure

Date: 2026-09-19

Status:

```text
HISTORY 2 POSITION/CIRCA AUTHORING IMPLEMENTED
DATASET-WIDE H1 -> H2 UPGRADE AUTOMATED GREEN
BACKDROP DISMISSAL ALIGNED
REAL-BROWSER ACCEPTANCE BLOCKED BY CONNECTOR REATTACH
```

This continuation records the work completed after the original Session 0093
planning checkpoint and the exact boundary for moving to a new chat.

### Completed specification and implementation sequence

History 2.0.0 Candidate and Relative Time Draft 0.1.0 research, decision
normalization, schema-first validation, diagnostics, Validator `0.5.0`
preparation/publication, and the NarrativeLine dependency checkpoint were
completed through their recorded bounded checkpoints. NarrativeLine then
implemented and accepted the read-only Candidate boundary, bounded
single-position `circa` authoring, declaration synchronization, and the
Dataset-wide History 1 to History 2 upgrade.

The Dataset-wide upgrade implementation is on NarrativeLine `main` in:

- `538292e feat: implement Dataset-wide History 2 upgrade`

Its synchronized E2R-SPEC result is:

- `453f3ef docs: record Dataset-wide History implementation`

The implementation performs one strict, atomic Dataset-wide conversion across
Entity, Event, and Relation History when the user confirms the first H2-only
`circa` use. It preserves supported Civil Time fields, granularity, Time Zone,
offset, and `temporalOrder`; synchronizes the exact History 2 declaration and
Features; validates the complete result before commit; and refuses malformed,
unknown, mixed, or otherwise unsafe states without mutating the source Dataset.
Known-shape undeclared legacy H1 is accepted only when a complete declaration
can be generated safely. Cancel and conversion/refusal failures preserve the
H1 Dataset and the unsaved Event draft.

No schema, Validator semantics, sample Dataset, Relative Time behavior,
bounded-point, temporal-extent, multiple-assertion authoring, Entity/Relation
authoring UI, or H2-to-H1 downgrade was added by that implementation.

### H2 confirmation interaction consistency

The H2 upgrade confirmation now treats Cancel, Escape, and direct backdrop
click as the same safe cancellation path. Dialog-interior clicks do not
dismiss it, and the shared `ModalDialog` restores opener focus. The bounded fix
is on NarrativeLine `main` in:

- `1eeb590 fix: allow backdrop cancel for History upgrade dialog`

H2-specific integration evidence verifies that backdrop dismissal preserves
the H1 Dataset, unsaved Event draft, and approximation control state, and does
not leave a partial H2 declaration, Feature, or migration result. This did not
create a global backdrop policy for destructive dialogs.

Current NarrativeLine automated baseline after this fix:

- focused H2 application-path tests: **5/5 PASS**;
- full suite: **247/247 PASS**, exit 0, natural completion;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS;
- `git diff --check`: PASS.

The recurring Vite middleware warning `Port 24678 is already in use` remains
non-failing. The listener was absent before the suite, at the sampled point
during the suite, and after suite completion. The connector timeout was
already reproducible before the test run, so current evidence separates this
warning from the Computer Use connector failure.

### Real-browser acceptance infrastructure diagnosis

NarrativeLine's dev server remained healthy at `127.0.0.1:5173`, owned by Vite
PID `28348`. Ports `24678`, `9222`, and `9223` had no persistent listener.
Normal Edge and Chrome processes remained available and were not restarted or
terminated.

The Computer Use connector failed before H2 acceptance could start:

- `cua_repl.getState()` repeatedly timed out after 30 seconds, including after
  automatic and explicit JavaScript-session resets;
- direct Computer Use app inventory succeeded and detected Chrome, Edge, and
  the Edge NarrativeLine window;
- attempting the Edge window-state smoke stopped because the tooling could not
  determine the current browser URL with enough confidence for policy
  enforcement;
- therefore browser discovery worked, while the wrapper/window-state URL
  boundary remained unhealthy.

This supports a connector/tooling-layer diagnosis, not a NarrativeLine repo,
dev-server, browser-process, CDP-port, or `24678` cause.

### Safe connector restart and current stop point

The only documented supported lifecycle operation was session/kernel reset;
it did not recover health. Process inspection then confirmed a Codex-owned
connector chain that had remained alive since 2026-09-17:

- `cua-repl` Node PID `26604`, parent Codex app-server PID `1936`;
- dedicated child `node_repl` PID `24000`.

With explicit user authorization, only PIDs `24000` and `26604` were ended.
The parent Codex app-server, VS Code, Vite, Edge, Chrome, and unrelated Node
processes were not touched. The old connector processes exited, but the current
Codex session did not respawn or reattach a replacement. Subsequent connector
state/reset calls returned immediate `Transport closed` rather than timing
out. No new `cua-repl` process was present at the final check.

The parent app-server was deliberately not restarted because doing so could
destroy the current task/session without a supported in-session resume path.
The safe classification at handoff is therefore:

```text
SAFE CONNECTOR CHILD RESTART DID NOT REATTACH
/ HUMAN OR TOOLING-SIDE ACTION REQUIRED
```

### Exact next-chat resume boundary

The next chat should begin after a human-side Codex / VS Code extension session
restart has created a fresh Computer Use connector transport. Before starting
the H2 Real Browser acceptance matrix, perform only this infrastructure smoke:

1. confirm a new `cua-repl` process and current start time;
2. confirm `127.0.0.1:5173` is listening;
3. call `cua_repl.getState()` or the current equivalent;
4. confirm Edge and the NarrativeLine window appear in app inventory;
5. confirm window-state capture and browser URL determination succeed.

If these pass, proceed in a separate bounded checkpoint to the fresh H2 Real
Browser acceptance matrix. Do not treat connector recovery itself as H2 Human
Acceptance. If URL confidence or transport failure recurs in the fresh
session, stop at the external tooling boundary rather than changing
NarrativeLine, Vite ports, browser profiles, timeouts, or retry counts.

### Repository and publication state at handoff

NarrativeLine:

- branch `main`;
- HEAD `1eeb590`;
- `origin/main` ahead by 17 commits;
- only the pre-existing dirty `AGENTS.md` remains unstaged.

E2R-SPEC before this session-log update:

- branch `main`;
- HEAD `453f3ef`;
- `origin/main` ahead by 242 commits;
- pre-existing dirty research files
  `research/exploratory/e2r-causal-relative-order-and-undated-event-placement.md`
  and
  `research/exploratory/e2r-multidimensional-history-temporal-perspectives.md`;
- pre-existing untracked `work/`.

Validator remains at `00bcda7` and was not changed in the final implementation
or connector checkpoints. No application source, runtime, schema, sample,
browser profile, firewall, global Node/npm installation, or persistent port
configuration was changed during connector diagnosis. Real Browser H2
acceptance remains unperformed. No push, tag, deploy, release, or publication
was performed in these final checkpoints.

`SESSION CONTINUATION LOGGED - H2 AUTOMATED GREEN / CONNECTOR REATTACH REQUIRED`
