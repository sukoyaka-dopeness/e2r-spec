# E2R Session 0024 — NarrativeLine UI Completion and Next Milestones

Date: 2026-08-10

## Session outcome

This session completed a substantial NarrativeLine usability pass, continued
the Linkscape MVP, and aligned the user-facing documentation with the current
application flows.

All four repositories were clean when this handoff was written:

- `e2r-spec`
- `e2r-validator`
- `e2r-narrative-line`
- `e2r-linkscape`

Do not assume that a clean state means every future-work item is complete. Use
the milestones below as the current priority order.

## NarrativeLine work completed

The NarrativeLine UI was reviewed on desktop and mobile, including a temporary
same-Wi-Fi deployment. The following behavior was implemented and confirmed:

- mobile input focus no longer causes unwanted browser zoom in Event Detail;
- Japanese UI remnants such as `New Event`, `Edit Entity`, `Relation`, and
  `Dataset` were corrected where appropriate, while the English mode retains
  the English labels;
- Gregorian calendar labels were clarified;
- long Event and Entity names wrap consistently in Detail views;
- returning to Timeline restores the edited Event near the center of the view;
- returning from Entity Detail to its originating Event Detail restores the
  related Entity selection and scroll context;
- saving an Entity opened from Event Detail returns to that Event Detail;
- Event and Entity cards were made denser, with square corners and reduced
  vertical spacing;
- bottom navigation and action bars were aligned to the main content width;
- Back, save, creation, and destructive actions were given clearer and more
  consistent placement;
- the Entity Picker and new Entity creation workflows were split into separate
  screens;
- shared application footer content remains on Home only and is not repeated on
  working screens; and
- mobile Entity Picker and Entity Create layouts were corrected.

Important recent NarrativeLine commits include:

- `049da7b feat: split Entity creation from picker`
- `552dda4 ui: simplify working screens and related cards`
- `b93921f ui: unify primary action placement`
- `81fd06b docs: expand NarrativeLine user guide`
- `a3c0816 docs: make user guides task oriented`

The Japanese and English user guides now include the screen-transition flow.
They introduce terminology near the beginning, explain Entity using timeline
examples, and describe tasks from the user's goal before exposing internal
storage details. The Dataset title is described as extension data; the exact
path, `extensions.metadata.title`, is retained only as a technical note.

NarrativeLine remains at version `0.1.0`. Do not increment it merely for the
documentation and ongoing MVP refinement recorded here. Reconsider the version
at an explicit release or interoperability milestone.

## Linkscape current state

Linkscape implements the documented Entity-first MVP acceptance boundary A1
through A19. It currently supports:

- import and Core validation;
- Entity nodes and directed Relation edges;
- selection and Entity Detail;
- zoom and pan;
- temporary node dragging;
- deterministic fallback placement;
- explicit coordinate saving and restoration;
- preservation of unknown fields and Extensions; and
- Validator checks before export.

The user confirmed on desktop and mobile that the five-node Relation sample
renders, edges follow moving nodes, zoom and pan work, Entity Detail opens, and
coordinates return after explicitly saving, exporting, and re-importing the
Dataset. Reloading without first exporting and importing intentionally returns
to the original stored state.

Recent Linkscape commits include:

- `e7826b6 docs: record Linkscape MVP status`
- `1f31206 docs: add Linkscape relation sample`
- `009f1d8 fix: truncate long graph node labels`
- `3108ccf ui: align Linkscape button styling`

Observed follow-up candidates include initial edge overlap and applying the
settled NarrativeLine visual language to Linkscape. Do not standardize a
Coordinate or Layout Extension merely to address visual layout quality.

## Current milestone priority

### Milestone 1 — Finish the Linkscape MVP as a usable product slice

This is the next active milestone because its acceptance boundary and core
implementation already exist. Finishing it provides executable evidence with
less specification risk than beginning a new temporal model.

Work in this order:

1. Audit the Linkscape UI against the NarrativeLine principles established in
   this session: compact density, square cards, consistent content width,
   restrained separators, clear Back/primary/destructive action placement, and
   usable mobile layouts.
2. Re-test the graph on desktop and mobile, including long node names,
   selection, Entity Detail, zoom, pan, drag, coordinate save, export, and
   re-import.
3. Evaluate the observed initial edge overlap. Improve the fallback layout only
   if it can remain deterministic and does not mutate the Dataset merely by
   opening it.
4. Write or expand a Linkscape user guide that explains the workflow from the
   user's goals rather than from internal fields.
5. Record known MVP limitations and decide whether the result constitutes an
   explicit Linkscape release boundary.

Do not expand this milestone into Event editing, semantic Relation labels,
Relation creation/deletion, search/filtering, or standardized Coordinate and
Layout Extensions.

### Milestone 2 — Define and implement relative temporal information

The user wants NarrativeLine to support values such as `day 1` and `day 2`.
This must begin as a semantic design task, not as an ad hoc UI field.

First distinguish at least these cases:

- ordinal or relative days such as `day 1` and `day 2`;
- an offset relative to another Event, such as `three days after`;
- time-of-day without a calendar date;
- an Event with no known date but an intentional presentation order; and
- coexistence with Gregorian dates of year, month, and day precision.

The design phase should produce a focused research note, representative
Datasets, and a decision about whether the semantics belong in History, a new
Relative Time Extension, a Narrative Order Extension, or more than one clearly
separated mechanism. Presentation order must not be silently treated as
historical time.

After the semantics are accepted, implement in this dependency order:

1. normative or draft Extension documentation and examples;
2. Validator diagnostics and fixtures;
3. NarrativeLine data handling, editing UI, display, and ordering;
4. import/export round-trip tests; and
5. Japanese and English user-guide updates.

Also add explanatory sample Datasets with different temporal granularities.

### Milestone 3 — Cross-application interoperability checkpoint

Demonstrate the practical value of E2R with an end-to-end tested workflow:

```text
NarrativeLine creation and export
    → Validator validation
    → Linkscape import, graph use, and coordinate save
    → Linkscape export
    → NarrativeLine re-import
```

The checkpoint should verify that:

- Event, Entity, Relation, IDs, and unknown fields are preserved;
- unknown Extensions survive applications that do not edit them;
- Linkscape coordinate data does not break NarrativeLine;
- relative temporal data is safely preserved by an application that does not
  interpret it;
- errors, warnings, and unsupported application features remain distinct; and
- bilingual guides show how a user can reuse one Dataset across applications.

This is the most natural point to reconsider application version numbers and a
formal release.

## Other priorities and deferrals

Validator release reliability remains important, but it is maintenance rather
than the next standalone milestone while the published package and current
tests are healthy. Any Core or Extension change must still update Validator,
fixtures, diagnostics, and public documentation together.

The following remain deferred unless new evidence changes their priority:

- Coordinate, Layout, Dictionary, Media, and AI Extension standardization;
- direct Relation editing in NarrativeLine;
- Event editing and semantic Relation labels in Linkscape;
- search, filtering, undo/redo, and multiple-Dataset workflows; and
- application view-state serialization into interoperable Dataset data.

## Instructions for the next Codex session

1. Read this log, `docs/roadmap.md`,
   `applications/relationship-graph-app.md`, and
   `applications/linkscape-mvp-acceptance.md`.
2. Check `git status` in all four repositories before editing.
3. Start with Milestone 1 and inspect the current Linkscape source and tests.
4. Compare Linkscape with the current NarrativeLine UI by examining the source,
   not by reconstructing the design from memory.
5. Propose a small, bounded Linkscape UI pass before editing; preserve the A1
   through A19 behavior and run tests, lint, and build afterward.
6. Do not begin relative-date implementation until its semantic distinctions
   have been written down and reviewed.
7. Keep NarrativeLine at `0.1.0` until an explicit version or release decision.
8. Do not commit or push unrelated changes together.

The immediate next engineering action is therefore: inspect Linkscape's current
layout and application-frame CSS/components, compare them with NarrativeLine's
settled UI rules, and prepare the smallest consistent UI-alignment change while
preserving graph behavior.
