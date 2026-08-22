# E2R Session 0042 - LiaisonScape Direct-Manipulation and Hover Presentation Checkpoints

Date: 2026-08-20

## Scope

This session completed and checkpointed the LiaisonScape direct-manipulation
and hover-presentation workstream. The results are application-level and
non-normative. No E2R Core, Dataset format, Dataset serialization, Layout
persistence, or Extension semantics were changed.

## Experiment 2E - Direct drag of unselected Relations

An unselected Relation path can now be dragged directly in one primary-pointer
gesture. The Relation is selected immediately and the existing manual ordinary
curvature or self-loop orientation/radius behavior continues in the same
gesture. Click-only remains selection-only, Relation-label drag remains
independent, and secondary-button Context Menu behavior remains separate.

Manual acceptance passed for ordinary Relations, self-Relations, click-only
selection, label dragging, Context Menu interaction, and already-selected
Relation dragging.

Checkpoint:

- LiaisonScape: `3a048d3 feat: allow direct dragging of unselected relations`
- e2r-spec: `8bbd428 docs: record direct relation drag result`

Result document:

- `docs/liaisonscape-direct-unselected-relation-drag-result.md`

## Experiment 2F - Connection Handle Visibility UX

Connection handles are hidden by default, visible while an Entity is hovered
or selected, and retained during active Relation creation. Touch-oriented use
does not depend on hover after Entity selection.

The accepted application geometry is:

- visible handle radius: `8.5`;
- connection hit target radius: `12`.

The Entity body, hover bridge, and connection hit target have separate
responsibilities. The hover bridge provides continuity only, uses a neutral
cursor, and does not start Entity drag or Relation creation. The connection hit
target owns the existing Relation-creation pointerdown, so Entity drag cannot
steal the connection gesture. Ordinary Relation and Self-Relation creation
semantics remain unchanged.

The Entity BODY popover was changed to a stable Entity-bound left-bottom
placement. It remains near the Entity and normally does not obscure the
connection handle. Earlier stale-popover behavior was not reproduced in later
revisions; no speculative state-management fix was added.

Manual acceptance passed for handle visibility, handle center and edge
acquisition, radius-12 acquisition, hover bridge behavior, ordinary and
self-Relation creation, Entity drag, 2E direct Relation drag, Relation-label
drag, and Context Menu behavior.

Checkpoint:

- LiaisonScape: `c6bea6a feat: refine connection handle visibility and interaction`
- e2r-spec: `7f4c946 docs: record connection handle visibility result`

Result document:

- `docs/liaisonscape-connection-handle-visibility-result.md`

## Experiment 2G - Popover Anchor Consistency

Node-label and Relation-label popovers now use the rendered bounds of their
hovered labels as source anchors. Relation-path popovers use the hovered path
interaction point. The preferred source-relative position is computed first;
the rendered popover dimensions are then used to apply only the minimum
translation required to keep the whole popover inside the visible graph
viewport.

The right-edge narrow-column defect was traced to fixed-position `width: auto`
shrink-to-fit behavior. The accepted sizing rule is:

```css
width: max-content;
max-width: min(240px, calc(100vw - 24px));
```

Edge proximity moves the whole popover rather than progressively narrowing it.
No graph collision solver, Node/Relation/label avoidance, accumulated
displacement, or previous-position routing state was introduced.

Manual acceptance passed for Node-label, Relation-label, and Relation-path
popovers in interior and viewport-edge cases, including readable wrapping and
bounded corner correction. Entity BODY and connection-handle behavior remained
accepted.

Checkpoint:

- LiaisonScape: `6d77536 fix: stabilize popover placement near viewport edges`
- e2r-spec: `f8dd519 docs: record popover anchor consistency result`

Result document:

- `docs/liaisonscape-popover-anchor-consistency-result.md`

## Validation

For the final 2G checkpoint:

- LiaisonScape tests: 158 passed;
- LiaisonScape lint: PASS;
- LiaisonScape build: PASS;
- LiaisonScape `git diff --check`: PASS;
- e2r-spec `npm run validate`: PASS;
- e2r-spec `git diff --check`: PASS.

All checkpoint commits are local and unpushed.

## Explicit non-changes

The 2E-2G workstream did not change:

- E2R Core semantics;
- Dataset format or serialization;
- routing algorithms or scoring;
- occupied-path behavior or Node avoidance;
- automatic self-loop routing;
- manual placement ownership semantics;
- attachment or arrowhead geometry;
- Layout persistence;
- Context Menu Relation creation.

The existing viewport-edge containment issue for any popovers outside the
accepted 2G targets, if reproduced, remains a separate bug rather than a reason
to broaden this workstream.

## UX status and next work

The direct-manipulation and hover-presentation UX track is provisionally frozen
after accepted 2F and 2G results. Reopen it only for a concrete reproducible
defect, an explicit new product requirement, or a regression caused by later
work.

Next major track:

- Dataset Replacement Safety implementation audit, preserving the existing
  distinction between `datasetModified`, `pendingUserWork`, and
  `recoverableSessionState`.

Deferred:

- Context Menu Relation creation;
- Entity shape expansion;
- automatic Relation/self-loop radius adaptation.

Closed until concrete new evidence:

- occupied-path clearance improvement.

## Dataset Replacement Safety D1–D7 implementation checkpoint

The next major track named above was completed for LiaisonScape as an
application-level, non-normative safety workstream. No E2R Core, Extension,
Dataset schema, Coordinate schema, migration semantics, routing algorithm,
label geometry, or Layout persistence semantics were changed.

### Accepted conceptual boundary

The implementation keeps these concepts independent:

- `datasetModified`: current in-memory Dataset content differs from the clean
  accepted baseline;
- `pendingUserWork`: meaningful user-authored work not yet represented in the
  current Dataset; and
- `recoverableSessionState`: possible session recovery state, independent of
  replacement and exit protection.

Replacement and document-exit loss risk are both:

```text
datasetModified || pendingUserWork
```

`coordinatesDirty` remains only the Coordinate pending-work signal. Automatic
layout, selection, hover, popover, zoom, pan, and other derived presentation
state are not pending user work.

Accepted LiaisonScape pending-work sources include unsaved Entity coordinates,
explicit new-Entity placement not yet saved as Coordinate data, manual
Relation routes, manual Relation labels, manual Node labels, meaningful
Creation drafts, Entity Detail drafts, and Relation Detail drafts.

### Foundation and silent-discard findings

The Foundation checkpoint fixed and tested two pre-existing loss boundaries:

1. Coordinate Draft and Linkscape-to-LiaisonScape Space migration preserves
   unsaved positions and their pending state instead of replacing them with
   stored coordinates.
2. View reset no longer implicitly clears manual Relation routes. Returning a
   route to automatic placement remains an explicit Context Menu action.

Explicit new-Entity placement is pending until its Coordinate data is saved;
automatic/default placement is Derived and is not pending by itself.

### LiaisonScape checkpoint commits

The accepted implementation was completed through these local commits:

- Foundation: `6264b99d57f4876bf3f3d4b1f0886e6153f7a262`
  (`feat: add dataset replacement safety foundation`)
- Candidate Staging: `b95b8bfa749e800bdf8ea27dbacd9f13f6d74338`
  (`feat: stage dataset replacements safely`)
- D6 Replacement Confirmation UI:
  `5a5123eaaf60638b49f2840b0c517c262089fb40`
  (`feat: add dataset replacement confirmation`)
- D7 beforeunload: `79451ca43758a14195cf9f549d8785cb9415482a`
  (`feat: protect unsaved work on page exit`)

### Candidate staging and D6

Open local Dataset, Open Sample, and New Dataset share the replacement request
path:

```text
acquire candidate -> parse/validate -> valid candidate
    -> clean: accept immediately
    -> unsafe: stage candidate
```

Invalid JSON and schema-invalid Dataset input does not create a candidate or
accept a replacement. The active Dataset, pending work, and baseline remain
unchanged. While a candidate is staged, a later replacement request is
ignored, protecting the active Dataset and staged candidate from silent
overwrite.

The accepted action matrix is:

- clean: immediate acceptance;
- modified-only: Cancel, Discard and Continue, Export and Continue;
- pending-only: Cancel, Discard work and Continue; and
- modified-and-pending: Cancel, Discard work and Continue, Export Dataset.

Successful explicit Export refreshes `datasetModified` only. It does not clear
`pendingUserWork`. Export failure never accepts a staged candidate.

The dedicated accessible replacement dialog was manually accepted for action
matrix behavior, shared Home/Workspace rendering, invalid-candidate
preservation, backdrop Cancel, keyboard focus containment, responsive action
layout, visible Home Open focus, and New/Open trigger focus restoration after
Cancel/Escape.

### D7 document-exit protection

LiaisonScape conditionally registers browser-native `beforeunload` protection
only while `datasetModified || pendingUserWork` is true. The listener uses
`preventDefault()` and an empty `event.returnValue`, and is removed when the
loss risk becomes false or the component unmounts.

Manual acceptance passed for:

- clean Dataset reload without a browser-native warning;
- modified-only reload with a warning;
- pending-only reload with a warning;
- pending work remaining after successful Export with warning preserved;
- complete revert to the clean baseline without a warning;
- Workspace → Home internal navigation without a warning; and
- Home → Open using the D6 replacement dialog rather than beforeunload.

The exact native warning text and button labels remain browser-dependent.

### Verification

At the final LiaisonScape D7 checkpoint:

- tests: 174 passed;
- lint: PASS;
- build: PASS; and
- `git diff --check`: PASS.

The e2r-spec implementation result was recorded and accepted in:

- `docs/dataset-replacement-safety-liaison-scape-implementation-result.md`
- e2r-spec commit `f91d82b9c42c653b79d923056a2d7db41293d58f`
  (`docs: record dataset replacement safety implementation`)

e2r-spec validation and `git diff --check` both passed for that documentation
checkpoint. Existing unrelated untracked research and session files were
preserved.

### Result and next work

LiaisonScape Dataset Replacement Safety D1–D7 is implemented and manually
accepted. This satisfies the LiaisonScape prerequisite for Dataset Handoff v0.
Dataset Handoff v0 implementation itself remains not started; the next
bounded implementation track is `datasetUrl` startup handoff using the
accepted replacement/open pipeline.

NarrativeLine Replacement Safety parity remains deferred. Invalid Dataset
error-message visibility and the staged-candidate re-request UX remain
follow-up concerns and are not blockers for the accepted D1–D7 checkpoint.
