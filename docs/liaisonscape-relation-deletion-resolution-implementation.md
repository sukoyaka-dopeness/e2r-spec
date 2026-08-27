# LiaisonScape Relation Deletion Resolution Implementation

Status: **AUTOMATED IMPLEMENTATION COMPLETE / FORMAL BROWSER ACCEPTANCE PENDING**

Date: 2026-08-27

Runtime checkpoint: `33d0427` — `feat: add Entity deletion Relation resolution`

This document records the bounded LiaisonScape implementation for
`LS-CROSS-APP-RELATION-DELETION1-BLOCKER-RESOLUTION`. It does not close the
cross-application capability or change E2R Core, Extensions, schemas, Dataset
ownership, or Relation semantics.

## Implemented behavior

- Entity deletion remains blocked while any incident Relation remains; no
  silent cascade is introduced.
- A blocked Entity deletion opens a LiaisonScape-native resolution surface.
- Every incident Relation is represented separately, including self and
  parallel Relations.
- Relation identity prefers the Relation name and directed endpoint display;
  an eight-character-minimum Relation ID hint is added only when the rendered
  identity is ambiguous.
- Event-connected or otherwise non-graph-visible Relations remain in the
  blocker set and receive an explanation that they exist in the Dataset but
  are not normally shown in the graph.
- A blocker is inspected through the existing Relation Detail surface. The
  existing Relation deletion service and confirmation remain the deletion
  authority; no cascade service or duplicate Relation editor was introduced.
- After an explicit Relation deletion, the current Dataset is re-evaluated and
  the resolution surface returns with remaining blockers.
- Removing the final blocker leaves the Entity present and exposes a separate,
  explicit Entity deletion action. Entity deletion still requires the existing
  confirmation.
- Resolution Cancel/Keep, Relation deletion Cancel, Relation Detail return,
  dirty-detail dismissal, safe initial focus, and post-deletion focus remain
  explicit. Destructive Entity deletion is not autofocused.
- English and Japanese copy and bounded responsive CSS were added for the new
  surface.

## Responsibility boundary

`useDetailDeletionWorkflow` owns the resolution context, inspected Relation,
return transitions, confirmation transitions, and current-Dataset assessment.
`EntityDeletionResolutionDialog` owns blocker presentation, inspection
triggers, zero-blocker presentation, and local focus. `App.tsx` remains the
Dataset, graph selection, graph interaction, placement, and composition owner.
Dataset updates continue through the existing `updateDataset` callback, and
post-deletion placement cleanup continues through the existing callbacks.
`EntityService` and `RelationService` remain the domain mutation authority.

## Verification

The LiaisonScape checkpoint passed:

- focused Relation blocker display tests: PASS;
- focused workflow state-transition test: PASS;
- `npm test`: 214 passed, 0 failed;
- `npm run lint`: PASS;
- `npm run build`: PASS; and
- `git diff --check`: PASS.

The automated workflow test covers self, parallel, and Event-connected
Relations; explicit Relation deletion and Cancel; last-blocker resolution;
and explicit final Entity deletion. The run also emitted a non-failing Vite
WebSocket port-in-use message while UI test servers ran concurrently.

## Acceptance boundary and next checkpoint

This is an automated implementation checkpoint, not Formal Real Edge browser
acceptance. The new observable UI still requires the separately planned Edge
acceptance with native-browser-dialog state classified independently from
application dialog DOM state.

The next checkpoint is Real Edge formal acceptance, followed by bidirectional
Cross-App acceptance covering NarrativeLine and LiaisonScape, then capability
closure. No claim of final cross-application alignment is made here.
