# E2R Session 0018

## Date

2026-08-06

## Summary

This session prioritized NarrativeLine MVP validation over further Linkscape
Extension design. NarrativeLine now supports a complete in-browser Core Dataset
editing, validation, Import, and Export workflow for its MVP scope.

Coordinate, Layout, and Dictionary Extension standardization remains deferred.
The supplied Coordinate/Layout/View/Lifecycle review was accepted as useful
design input, but no specification document was changed. In particular,
Coordinate remains the candidate home for logical-space positions, while Layout
and View presentation rules require more application feedback before being
standardized.

---

# NarrativeLine MVP Work Completed

## Core Validation and File Exchange

NarrativeLine now provides UI-independent Core Dataset validation with stable
error codes, JSON Pointer paths, and related IDs where applicable. It validates:

- required top-level `version`, `entities`, `events`, and `relations`
- Core collection types and non-empty unique Object IDs
- Relation `sourceId` and `targetId` resolution
- the prohibition on Relations using Relations as endpoints

Home imports a selected E2R JSON file only after validation succeeds. Invalid
JSON or invalid Core structure remains on Home and displays the reported
issues. Timeline exports a validated Dataset as `e2r-dataset.e2r.json` without
changing the in-memory Dataset.

New NarrativeLine Datasets receive a UUID v7 at
`extensions.metadata.datasetId`. Imported Dataset IDs remain unchanged and are
not added when absent.

## Event and Entity Editing

- Event Detail supports date-only History editing, name, and description.
- `Save Event` saves the Event and returns to Timeline.
- `Save and Add Entity` saves valid Event edits before opening Entity Picker.
- A newly added Event is an application-only draft until its first save.
  Canceling that draft removes it and any connected Relations; Canceling an
  existing Event discards only unsaved local edits.
- Event-to-Entity association can select an existing Entity or create one.
- Removing an Event-to-Entity association removes every direct Relation between
  that exact Event and Entity in either direction, while preserving both Objects
  and unrelated Relations.
- Event deletion removes the Event and all connected Relations after
  confirmation.
- Entity deletion removes the Entity and all connected Relations after
  confirmation, while preserving connected Events.
- Event saves update only fields changed from their initial editor values.
  Optional fields omitted by an imported Dataset remain omitted unless edited.

## Confirmation Dialogs

Event deletion, Entity deletion, and Event-to-Entity association removal use a
shared modal implementation. It blocks pointer interaction with the background,
places keyboard focus on the non-destructive action, confines Tab and Shift+Tab
inside the dialog, and dismisses with Escape. Focus is restored to the opener
when it remains available.

The keyboard behavior was manually confirmed. Browser-visible focus-ring
rendering remains a presentation polish item: Enter-key behavior confirms that
focus moves correctly even where the ring was not visibly rendered.

---

# Manual MVP Acceptance Results

The following browser checks were confirmed:

- Home action order and equal primary button widths:
  Create Dataset, Import E2R JSON, Open Sample Dataset
- invalid non-E2R JSON is rejected with structural error paths
- NarrativeLine Export can be reimported
- a new Dataset Export contains `extensions.metadata.datasetId`
- Export does not alter the displayed Dataset
- Event creation, date/name/description save, ordering, and saved edits
- Save and Add Entity retains Event edits when Entity Picker is canceled
- Entity creation, existing-Entity association, and association removal
- Event deletion confirmation, cancellation, and connected-Relation cleanup
- Entity deletion confirmation and connected-Relation cleanup
- modal pointer blocking, Tab and Shift+Tab containment, Escape cancellation,
  and focus restoration behavior
- Canceling a new Event removes its draft; a saved Event remains
- Importing a fixture with two direct Relations between one Event and Entity
  then removing the association deletes exactly those two Relations

The manual multiple-Relation fixture is located at:

`e2r-narrative-line/public/manual-checks/event-entity-multiple-relations.e2r.json`

The resulting Export retained the unrelated Relations and all remaining Objects.

---

# Documentation Synchronization

NarrativeLine documentation was synchronized to the implemented MVP, including:

- `docs/MVP.md`
- `docs/ui-spec.md`
- `docs/state.md`
- `docs/state-machine.md`
- `docs/navigation.md`
- `docs/editing-model.md`
- `docs/architecture.md`
- `docs/services.md`

The current application has five primary views: Home, Timeline View, Event
Detail, Entity Picker, and Entity Detail. Dataset Settings, shared
DialogService, and SelectionService remain deferred or legacy design material;
they are not current MVP behavior.

The final documentation review removed stale active references to a four-view
MVP and Dataset Settings navigation. Legacy DialogService flows are labeled as
not implemented.

---

# Verification

Automated checks passed after the implementation changes:

- `npm.cmd run test`: 14 passing tests
- `npm.cmd run build`
- `npm.cmd run lint`
- `git diff --check`

No commits or pushes were performed. Existing uncommitted and untracked changes
in both repositories were preserved.

---

# Remaining Work and Recommended Next Steps

## Final Acceptance

The NarrativeLine MVP was accepted as complete on 2026-08-06. The automated
and manual verification recorded above satisfies the current MVP scope.
Remaining UI polish and deferred features are post-MVP work and do not block or
revoke this acceptance status.

## Post-MVP Work

The first post-MVP wording pass was completed on 2026-08-06. User-facing action
labels now identify their target or effect, association removal no longer
suggests Entity deletion, and the Entity Picker heading describes its purpose.

The Detail-screen presentation pass was also completed on 2026-08-06. Related
Entities and Events now use individually bordered cards with a distinct
selected state. Detail headings, date fields, action groups, Entity Picker
controls, and modal actions adapt to narrow viewports. Event and Entity delete
actions are separated from their primary save groups in dedicated Danger Zones.

The subsequent compact-layout correction removed Core Object IDs from Entity
Picker, limited the desktop Year, Month, and Day fields to equal `9rem` widths,
and changed the Timeline return action from `← Home` to `Home`. Narrow-viewport
browser testing remains grouped for a later manual responsive review.

Button presentation was then standardized across every current view and
confirmation. Buttons share one height, padding, border, radius, typography,
background, hover, focus, and disabled treatment. Destructive actions retain
red text but use the same border and background as other buttons; their Danger
Zone placement and confirmation provide the stronger distinction.

A shared application frame was then added around every primary view. Its Header
shows the NarrativeLine brand, its Footer identifies the application as an E2R
timeline editor, and it owns no application state. The Home heading is now `Get
Started` to avoid repeating the Header brand. The narrow-layout Entity creation
input also has its horizontal flex basis removed so it retains a normal control
height when stacked vertically.

Event description previews were standardized between Timeline and Entity
Detail. Both now display only the first stored line in a single-line clipped
preview with an ellipsis, including for long strings without spaces. Event
Detail continues to edit and preserve the complete description.

After public testing, long Event names and Entity Picker descriptions received
the same single-line ellipsis treatment as existing description previews. Full
values remain preserved and editable.

Timeline width containment was tightened so screen padding, card rows, and long
description previews cannot create horizontal overflow. Confirmation actions
now show the shared focus ring on `:focus` as well as `:focus-visible`, ensuring
that the initially focused non-destructive action is visible after pointer
activation. The stray fictional `Gorilla Drumming` Event was removed from the
Apollo 11 onboarding sample; it had no connected Relations.

The remaining placeholder `Alice` and `Bob` Entities and their two connected
Relations were removed from the onboarding sample, leaving its content focused
on Apollo 11. Dark-mode button hover backgrounds are now opaque theme-specific
colors, and confirmation surfaces use the theme background and text colors so
the initially focused safe action remains readable on hover.

A future public-release preparation step should decide the NarrativeLine
release version and configure and verify GitHub Pages deployment. The Credits
action and modal are implemented in the Footer, using version `0.1.0`, creator
name `sukoyaka-dopeness`, release date `2026-08-06`, AI acknowledgement, and
links to both repositories.

Remaining items are polish or explicitly deferred scope:

1. complete the GitHub Pages release: enable Pages with GitHub Actions, review
   the final diff, commit and push the release, then verify the public URL
2. revisit visible focus styling only if a cross-browser accessibility review
   finds an actual user-facing issue
3. keep History clock/time-zone editing, direct Relation editing, search,
   filtering, undo/redo, multiple Datasets, and Dataset Settings deferred
4. resume Extension naming-rule review and then Coordinate, Layout, and
   Dictionary design

The Linkscape reference note that proposes Relation-to-Relation support remains
a separate correction candidate. It conflicts with the current Core rule that a
Relation may not use a Relation as an endpoint.
