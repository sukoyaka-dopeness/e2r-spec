# E2R Dataset Acquisition Entry Point Alignment

Status: accepted future direction / non-normative design note
Date: 2026-08-22

This document records a future information-architecture direction for Dataset
acquisition and replacement across E2R applications. It does not change the
E2R Core, Dataset schema, Dataset Handoff v0 transport, or current application
behavior.

## Current inconsistency

NarrativeLine currently presents Dataset acquisition and replacement primarily
from Home. Its Timeline main screen is centered on viewing and editing the
current Dataset rather than on opening another Dataset.

LiaisonScape currently exposes a prominent Import / Open Dataset action from
the main graph workspace. This is useful during development and debugging,
but it places Dataset replacement beside graph editing actions and does not
match the clearer Dataset lifecycle boundary used by NarrativeLine.

Dataset acquisition and replacement includes more than local import:

- New Dataset;
- Local Open / Import;
- Sample Dataset;
- Resume;
- Dataset Handoff; and
- Dataset Replacement Safety confirmation.

These are application-level lifecycle operations. They are distinct from
editing the current Dataset's Events, Entities, Relations, graph, or timeline.

## Accepted future direction

The canonical information-architecture principle is:

```text
Home
    = primary Dataset acquisition and replacement entry point

Workspace / Timeline / Graph
    = primary viewing and editing location for the current Dataset
```

Future application design should therefore treat Home as the primary place
for Dataset lifecycle actions. NarrativeLine's current model is the primary
reference direction for this boundary.

LiaisonScape's prominent workspace Import / Open Dataset action should be
aligned toward a secondary access affordance in a future UI revision. The
future direction is not to remove useful access immediately, but to change its
information-architecture role from primary workspace action to secondary
Dataset access.

NarrativeLine should not add a prominent always-visible main-screen Import
button merely to mirror LiaisonScape's current workspace presentation.

## Rationale

1. Dataset replacement is a document or workspace-level operation, not an
   ordinary edit inside the current Dataset.
2. Keeping replacement actions beside Entity, Event, Relation, timeline, or
   graph editing actions can blur the distinction between replacing the
   document and editing its contents.
3. Replacement may invoke loss-risk confirmation such as NL-D4, so a single
   Dataset lifecycle entry point provides a clearer safety boundary.
4. A shared primary model gives NarrativeLine and LiaisonScape a consistent
   conceptual structure while allowing their visual layouts to differ.
5. Keeping workspace editing focused reduces accidental Dataset replacement
   and preserves space for the application's primary editing tasks.

## Secondary Dataset access remains an open design question

The accepted direction does not require every Dataset operation to be
reachable only from Home. Secondary workspace access may remain useful for:

- development and debugging;
- frequent switching workflows;
- an application or Dataset menu;
- an overflow menu;
- a keyboard shortcut; or
- a future multi-Dataset workflow.

The following details remain open:

- whether secondary access should exist in the workspace;
- whether it belongs in an application menu, Dataset menu, overflow menu, or
  shortcut;
- the exact label and placement;
- which of New, Open, Sample, and other lifecycle actions belong there; and
- whether future multi-Dataset support changes the primary versus secondary
  distinction.

If secondary access is adopted, it should remain conceptually subordinate to
the Home Dataset lifecycle entry point. The final UI may differ between
applications; pixel-level layout symmetry is not required.

## Cross-application symmetry requirement

If NarrativeLine and LiaisonScape both expose secondary Dataset access, both
applications should expose an equivalent concept rather than leaving a
workspace Import / Open action in only one application.

The requirement is conceptual symmetry, not identical component structure:

```text
NarrativeLine: Menu -> Open / Import Dataset
LiaisonScape: Menu -> Open / Import Dataset
```

The concrete label and placement may follow each application's existing UI
architecture. Dataset Replacement Safety semantics must remain equivalent,
including candidate staging, confirmation, Cancel, export, and final
acceptance behavior.

## Future multi-Dataset consideration

Current E2R applications primarily operate on one active Dataset. Future work
may introduce multiple Dataset workflows such as:

- importing an additional Dataset;
- comparing Datasets;
- switching between Datasets;
- a reference Dataset;
- multiple open Datasets; or
- merge or cross-Dataset workflows.

Those workflows could make workspace-side Dataset access more valuable. They
do not change the current model or authorize a multiple-Dataset data model,
tabs, merge, simultaneous editing, cross-Dataset references, or a Dataset
switcher in this checkpoint.

When additional import becomes distinct from replacement, the terminology and
interaction model should distinguish:

```text
Dataset replacement
    = replace the active Dataset, subject to loss-risk safety

Dataset acquisition / additional import
    = obtain another Dataset without implicitly redefining the active one
```

That distinction is future design work.

## Relationship to Dataset Handoff and Replacement Safety

Dataset Handoff v0 is a startup acquisition instruction. It integrates with
the Home Dataset lifecycle model but does not require workspace-side import
controls.

Handoff failure returns the user to Home, where the user may explicitly choose
Resume, New, Local Open, or Sample. This is consistent with:

```text
Home = Dataset lifecycle and acquisition hub
```

Dataset Replacement Safety remains the application-level boundary for
candidate staging, loss-risk confirmation, beforeunload protection, and final
acceptance. This entry-point direction does not alter those semantics.

## Accepted versus open decisions

Accepted:

- Home is the canonical primary Dataset acquisition and replacement entry
  point.
- Workspace, Timeline, and Graph prioritize viewing and editing the current
  Dataset.
- LiaisonScape's prominent workspace Import / Open action should move toward
  secondary access in a future UI revision.
- NarrativeLine should not add a prominent main-screen Import button solely to
  match LiaisonScape's current presentation.
- If secondary access is adopted, both applications should expose equivalent
  conceptual access.

Open:

- the secondary access location and label;
- exact inclusion of New, Open, Sample, and related actions;
- keyboard shortcut behavior;
- future multi-Dataset information architecture; and
- whether additional import should be modeled separately from replacement.

## Explicit non-goals for this record

This record does not implement or authorize:

- NarrativeLine UI changes;
- LiaisonScape UI changes;
- Import button removal;
- menu or overflow menu additions;
- keyboard shortcuts;
- multiple Dataset support;
- Dataset tabs, merge, or switching;
- Dataset replacement logic changes;
- Dataset Handoff implementation changes;
- user guide changes; or
- Hub integration.

## Decision status

The primary-entry-point direction is accepted as a future information-
architecture decision. Secondary access placement and future multi-Dataset
behavior remain open design questions. Any implementation task must be scoped
and accepted separately after reviewing usage frequency, touch and desktop
behavior, replacement safety, and cross-application symmetry.
