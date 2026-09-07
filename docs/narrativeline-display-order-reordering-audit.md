# NarrativeLine Display-Order Reordering Audit

Date: 2026-09-07

Status: **AUDIT COMPLETE / DEFER FOR NOW / NO IMPLEMENTATION AUTHORIZED**

## Scope and selection

This is the next bounded pre-public-release audit selected after the PR-3
Browser Evidence runtime blocker was formally closed as current-host
**BLOCKED**. It is independent of Browser execution and does not reopen PR-3.

The selection was made from the current roadmap after verifying that:

- standards-license formalization and e2r-spec sample provenance are already
  recorded as complete;
- Validator 0.4.0 publication and consumer integration are already recorded as
  complete;
- Public Sample Formal Acceptance is READY but depends on the blocked Browser
  evidence boundary; and
- the pre-public-release sequence explicitly retains the NarrativeLine
  Display-Order Reordering Audit as a separate pending audit.

The current NarrativeLine source repository was inspected read-only:

- Repository: `C:\Users\extra\E2R\e2r-narrative-line`
- Branch: `main`
- HEAD: `a525d2ec3d25c2ab3c1e2d286ca37bd6529784e5`
- Worktree: clean at audit time

No NarrativeLine source, test, sample, package, or lockfile was changed.

## Existing contract

The current NarrativeLine implementation provides a chronological Timeline
view using a derived copy of the Dataset Event collection. The comparison
sequence is:

1. valid recorded dates before Events without a recorded date;
2. stored Civil Time fields from year through the recorded granularity;
3. precision, with coarser precision first for an equal prefix;
4. `temporalOrder` when the recorded date comparison cannot distinguish the
   Events; and
5. Event ID as a deterministic fallback.

`src/screens/TimelineScreen.tsx` sorts `[...dataset.events]`, leaving the
Dataset collection unchanged. `src/services/HistoryService.ts` implements the
comparison described above. Export preserves recorded `temporalOrder` values
and does not generate them merely to reproduce presentation order.

The current tests include Timeline chronology/order regression coverage and
explicitly distinguish `temporalOrder` from human-facing identity. Relevant
surfaces include `tests/eventIdentityPresentationIntegration.test.js` and
`tests/ValidationService.test.js`.

## Specification and design boundary

The evidence is consistent across the following E2R-SPEC boundaries:

- Core states that Dataset `entities`, `events`, and `relations` arrays have no
  required ordering.
- History defines temporal ordering but explicitly excludes timeline layout,
  custom application display ordering, and editing workflow.
- History requires application-specific display order to remain separate from
  `temporalOrder`; a future persisted authorial-context responsibility may be
  considered independently.
- Application recommendations classify temporary custom display order as
  application state. A persisted non-temporal authorial order would require a
  future Extension, provisionally called Perspective.
- The NarrativeLine design handoff requires relative-chronology ownership to be
  resolved before adding a persisted ordering UI. Accessible non-pointer
  controls must precede drag-and-drop.

The relevant source-of-truth documents are:

- `spec/core.md`
- `extensions/history-extension.md`
- `docs/application-design-principles.md`
- `docs/application-recommendations.md`
- `research/exploratory/e2r-causal-relative-order-and-undated-event-placement.md`
- NarrativeLine `docs/editing-model.md`, `docs/ui-spec.md`,
  `docs/priority-feature-backlog.md`, and
  `docs/chatgpt-priority-feature-design-handoff.md`

## Audit result

No current defect or release-critical need was established for arbitrary
display-order reordering. The current behavior is internally consistent:

- chronological presentation is derived and deterministic;
- Dataset Event-array order is not treated as a semantic or authorial order;
- existing `temporalOrder` is not silently overloaded as an arbitrary display
  order;
- unknown fields and Extensions remain outside this audit's change scope; and
- no Core, History, Presentation, Perspective, or application persistence
  contract needs to change for the current product boundary.

The item is therefore **DEFER FOR NOW**. This is a deliberate disposition, not
an implementation failure and not a Browser-dependent blocker.

## Future entry conditions

If a concrete requirement later calls for reordering, the first follow-up must
separate these cases:

1. temporary, non-temporal presentation order;
2. factual relative chronology involving undated Events; and
3. persisted non-temporal authorial or narrative order.

Temporary presentation order may remain application state. Factual ordering
between dated and undated Events requires a responsibility decision about
Relative Time or a History-vNext design; it must not be inferred from the
current `temporalOrder` field. Persisted authorial order requires a separate
interoperable responsibility and preservation/migration contract.

Only after that ownership decision should a bounded UI experiment be selected.
Keyboard-accessible move controls should precede any drag-and-drop interaction,
and any implementation must preserve Dataset/Core semantics, unknown
Extensions, round-trip behavior, and cross-application interpretation.

## Boundaries and exclusions

This audit does not:

- change NarrativeLine, LiaisonScape, Validator, Hub, or Browser Capture source;
- add or modify a Core field, History field, Extension, schema, or Dataset;
- generate or rewrite `temporalOrder` values;
- reorder any sample or Dataset Event collection;
- resume PR-3 Browser Evidence, Fresh lineage4, B1, or V3;
- create a new `ai-knowledge` entry; or
- authorize release, push, tag, deployment, or publication.

## Final classification

`NarrativeLine Display-Order Reordering Audit = COMPLETE / DEFER FOR NOW`

`NarrativeLine display-order implementation = NOT AUTHORIZED`

`Core / History / schema change = NONE`

`PR-3 Browser Evidence status = UNCHANGED / BLOCKED`
