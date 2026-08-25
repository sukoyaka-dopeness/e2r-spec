# E2R Session 0049 — LiaisonScape LS-M2A Workspace More Acceptance

Date: 2026-08-25

## Scope

This session records the implementation, visual follow-ups, and formal
acceptance of LiaisonScape LS-M2A — Workspace More / Action Hierarchy.

No E2R Core, Extension, Dataset representation, serialization, Validator,
NarrativeLine, Hub, or Dataset Replacement Safety semantics were changed.

## LiaisonScape implementation chain

The accepted local application history is:

- `6b6d521 feat: move workspace secondary actions into More`
- `e9e57c6 fix: align workspace More keyboard behavior`
- `68f9eb5 fix: align workspace More to inline end`
- `cb0dfb7 fix: consolidate workspace count and actions`
- `000bdfe fix: refine workspace information layout`
- `4dabaa1 test: lock workspace compact action responsibility`

Final LiaisonScape HEAD at acceptance: `4dabaa1`.

The implementation moved Workspace Open Dataset and Export E2R JSON into the
existing local More disclosure, removed visible duplicates, preserved the
existing handlers and replacement-safety path, and retained the native/local
disclosure interaction model.

## Accepted hierarchy

Above the Workspace-specific `720px` breakpoint:

```text
[current graph-visible Entity / Relation count]
  [Add Entity] [Add Relation] [Save node coordinates] [More]
```

At `720px` and below:

```text
[current graph-visible count]
[Add Entity] [Add Relation] [More]
```

Save Coordinates is a top-level action above `720px` and is available inside
More at `720px` and below. The `720px` threshold is Workspace-specific and does
not change the application shell's global `600px` breakpoint.

The toolbar count is the current graph-visible Entity / Relation count. The
acquisition-success message `Loaded ...` is not persistent Workspace
information and is absent after a cold reload. The graph-visible count no
longer appears below the graph. The unselected `Select an Entity or Relation`
placeholder was removed; selected Entity/Relation Detail behavior was
preserved.

The Event-related hidden-Relation capability notice remains semantically
unchanged and is positioned below the graph. Its final presentation remains
the responsibility of LS-M2D.

## More interaction acceptance

The accepted local More contract is:

- opening focuses the first enabled item;
- ArrowDown and ArrowUp navigate enabled items;
- Home and End select the first and last enabled items;
- Tab and Shift+Tab close More without trapping normal page focus;
- Escape closes More and restores focus to its trigger;
- outside click closes More; and
- item activation closes More.

This is an application-local contract, not a requirement for a shared E2R UI
component.

## Dataset Replacement Safety evidence

Manual acceptance covered both safety paths:

- after adding `Replacement Safety Test` and invoking Open Dataset from More,
  the replacement confirmation appeared and Cancel preserved the original
  Lighthouse Dataset and modified work;
- after dragging a graph Node without saving coordinates, Open Dataset from
  More again opened the replacement confirmation.

Moving Open Dataset into More did not bypass Dataset Replacement Safety. The
D1-D7 safety matrix was not reopened.

## Verification

LiaisonScape final automated evidence:

- `npm.cmd test`: 183 passed;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS; and
- `git diff --check`: PASS.

The formal e2r-spec acceptance checkpoint is commit
`9c3c09e docs: accept LiaisonScape workspace action modernization`, updating:

- `docs/roadmap.md`; and
- `research/exploratory/liaisonscape-workspace-modernization-audit.md`.

e2r-spec `npm.cmd run validate` and `git diff --check` passed. The unrelated
untracked files `research/exploratory/anonymous-dataset-sharing.md` and
`sessions/E2R-Session-0048.md` were preserved and not staged.

## Retained follow-ups

The following remain deferred and were not implemented in LS-M2A:

- LS-M2B Dataset title editing;
- LS-M2C Object ID Technical details;
- LS-M2D capability-notice final presentation;
- LS-M2E tooltip/popover visual experiment;
- LS-LAYOUT-1 Initial Node Placement Objective Audit;
- viewport toolbar drag-handle keyboard/focus audit;
- LiaisonScape Credits descriptive-copy localization;
- common E2R favicon; and
- Long-form Object Content / Media responsibility research.

No new ai-knowledge candidate was added. No push was performed.

## Closure

LS-M2A is **ACCEPTED / COMPLETE**. The next bounded application checkpoint is
LS-M2B. This session stops at the LS-M2A acceptance boundary.
