# LiaisonScape Viewport Toolbar Collapse Follow-up

Status: **EXPERIMENT REJECTED / COLLAPSIBLE TOOLBAR FOLLOW-UP DIRECTION RECORDED / IMPLEMENTATION NOT AUTHORIZED**

Date: 2026-08-29

## Scope and current authority

This record documents one presentation-only LiaisonScape experiment and the
bounded follow-up direction it suggests. It does not authorize runtime work.

The accepted LS-VT1 record in
`research/exploratory/liaisonscape-workspace-modernization-audit.md` remains
the authority for the existing `720px` Workspace boundary: above `720px` the
floating toolbar is visible, and at or below `720px` the existing mobile
viewport controls are available through More.

At this checkpoint LiaisonScape remains at:

```text
f00d558 fix: tighten ownership popover spacing
```

Its worktree was clean. No compactness runtime commit exists.

## Rejected compactness experiment

The experiment was presentation-only and changed only `src/styles.css`. The
single bounded CSS candidate was:

- toolbar gap: `8px` to `4px`;
- toolbar padding: `5px` to `4px`;
- local toolbar button `min-height`: `40px` to `32px`;
- local toolbar button padding: `8px 12px` to `4px 8px`;
- local toolbar button and percentage font size: `.85rem`;
- percentage `min-width`: `3rem` to `2.75rem`.

Initial ordinary EN and JA desktop presentation looked less oversized. The
candidate preserved pointer drag, focus-visible behavior, Zoom out, Zoom in,
Reset, the `720px` desktop/mobile handoff, and the bounded targeted UI test
set. It was nevertheless **REJECTED**.

At approximately `721px`, after the floating toolbar had been dragged, live
rendered dimensions were recalculated into a constrained width. Action labels
then became multi-line, including Zoom and Reset, exposing a stale
width/height clamp or recalculation defect. This violates the acceptance
requirement that compacting and dragging remain safe at the boundary.

The candidate was fully reverted. The current expanded toolbar geometry is
the baseline, and no runtime source change remains from this experiment.

## Preferred bounded follow-up direction

The preferred next direction is a **collapsible floating viewport toolbar /
drag-and-disclosure handle audit**.

The concept to investigate is:

```text
expanded:  [handle] [Zoom out] [percentage] [Zoom in] [Reset]
collapsed: [handle]
```

The existing handle is already a button-like interactive element. The audit
should evaluate whether one handle can meaningfully own both:

1. pointer drag to move the floating toolbar; and
2. click or keyboard activation to collapse or expand it.

This is a design direction and audit candidate, not an accepted final
interaction contract. Implementation must not begin from this record alone.

## Questions the audit must resolve

The next bounded audit must resolve at least the following:

- **Click versus drag:** distinguish a click or tap without meaningful
  movement from an actual drag. This record does not prescribe the movement
  threshold.
- **Keyboard semantics:** evaluate Enter, Space, sequential Tab behavior,
  focus-visible behavior, and whether button semantics become appropriate when
  the handle has a real disclosure activation. Keyboard toolbar repositioning
  is not prescribed.
- **Accessible disclosure state:** evaluate `aria-expanded`, accessible names
  in both states, and whether `aria-controls` or another explicit controlled
  relationship is needed. Exact ARIA implementation is not frozen.
- **Position ownership:** start by evaluating preservation of the user's moved
  position across collapse and expansion, unless browser evidence shows that
  this creates an unusable state.
- **Dimension-change reclamping:** required after collapse, expansion,
  viewport resize, responsive width changes, and locale/text width changes.
  The implementation must reclamp against current graph bounds after rendered
  dimensions change; hiding overflow is not sufficient.
- **Responsive boundary:** preserve the existing Workspace-specific boundary:
  above `720px` the floating toolbar may exist, while `720px` and below keeps
  the existing mobile viewport presentation active.
- **EN/JA geometry:** test both languages because control text materially
  changes toolbar width.
- **Pointer/touch usability:** keep the collapsed handle discoverable and
  practically targetable; desktop width must not be treated as mouse-only.

## Relationship to the existing drag-handle audit

This record reframes the existing viewport-toolbar drag-handle keyboard/focus
follow-up; it does not create a competing duplicate.

The previous question was whether a drag-only button-like handle has useful
keyboard and sequential-Tab semantics, including whether it should remain a
focusable button. The new evidence and direction are that, if the handle also
becomes an explicit collapse/expand disclosure control, its button semantics
and keyboard activation may become meaningful.

The future audit should therefore evaluate a combined **drag handle +
disclosure trigger**. It must not yet conclude that the design is accepted,
that the handle should leave Tab order, or that keyboard repositioning is
required.

## Explicit non-changes

This documentation checkpoint changes none of the following:

- LiaisonScape runtime or current toolbar geometry;
- the `720px` breakpoint or mobile viewport controls;
- drag behavior, drag-handle Tab behavior, or keyboard behavior;
- Zoom, Reset, graph routing, Node placement, or Relation placement;
- popover geometry, Dataset state, Coordinate data, or Layout persistence;
- E2R Core, Extensions, schema, or Validator;
- NarrativeLine, Hub, Cross-App Handoff, or `ai-knowledge`.

The accepted and unrelated popover compactness commit
`f00d558 fix: tighten ownership popover spacing` remains unchanged.
