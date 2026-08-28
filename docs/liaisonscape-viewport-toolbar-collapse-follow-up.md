# LiaisonScape Viewport Toolbar Collapse Follow-up

Status: **AUDIT COMPLETE / DESIGN ACCEPTED / READY FOR BOUNDED IMPLEMENTATION / RUNTIME IMPLEMENTATION NOT PERFORMED**

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

## LS-VIEWPORT-TOOLBAR-COLLAPSE-AUDIT1 — Source audit and contract

Date: 2026-08-29

This section supersedes the earlier implementation-readiness status only for
the bounded design question. It does not rewrite the historical compactness
rejection or implement the follow-up.

### Audit authority and current implementation

The read-only audit used the live LiaisonScape source at `f00d558`, including
`src/App.tsx`, `src/styles.css`, `tests/appUiIntegration.test.ts`,
`src/direct-graph-authoring.ts`, and `src/viewport.ts`.

The current source establishes these responsibilities:

- `App.tsx` owns `viewportToolbarPosition`, the toolbar ref, and the toolbar
  drag ref; it also renders the handle, Zoom out, percentage, Zoom in, and
  Reset controls.
- The handle is a native `button` with the current move label/title. It has
  `pointerdown`, `pointermove`, `pointerup`, and `pointercancel` handlers.
  Pointerdown calls `preventDefault()` and `stopPropagation()`, records the
  graph-relative offset, and takes pointer capture. Pointerup/cancel releases
  capture and clears the drag ref.
- During drag, App reads current graph and toolbar rectangles and clamps the
  graph-relative `x` and `y` values. Once a user position exists, a
  `ResizeObserver` observes both graph and toolbar and repeats that clamp.
  The current source has no collapse state, disclosure activation, or
  explicit post-disclosure layout contract.
- The floating toolbar is `.viewport-controls mobile-hide`. Its current CSS
  placement is absolute, initially right-anchored, and changes to explicit
  left/top coordinates after a drag. At `720px` and below the floating toolbar
  is hidden and the existing `.mobile-viewport-menu` inside More is displayed.
- Existing UI integration coverage checks the source structure and the
  `720px` mobile-hide contract, but does not yet test collapse/disclosure or
  dimension-change behavior.

The existing graph long-press primitive uses a 500ms duration and an 8px
movement tolerance. The toolbar contract below uses its own movement
classification; it does not reuse the long-press primitive.

### Interaction decision

The existing button can coherently own both capabilities if the future
implementation makes the distinction explicit:

- pointer drag remains a pointer capability of the handle;
- click/tap without meaningful movement is the disclosure action;
- Enter and Space use native button activation for disclosure;
- a completed drag never toggles disclosure.

The design is therefore **accepted as a bounded implementation direction**,
with the following contract:

1. A primary pointerdown begins a possible toolbar drag and records the
   starting client point.
2. Movement of less than or equal to a toolbar-local `8px` client-distance
   threshold remains eligible for click/tap disclosure.
3. Movement greater than that threshold becomes drag, updates position, and
   suppresses the associated disclosure click.
4. Pointercancel never toggles disclosure. Secondary mouse-button interaction
   never drags or toggles. Touch follows the same conceptual distinction.
5. Pointer capture remains owned by the handle for the active drag and is
   released on pointerup or pointercancel.

The threshold is a conventional small pointer threshold, not a reuse of the
graph's 4px drag transition or its long-press primitive. The future code must
ensure that any browser-generated click after a drag is consumed without a
second toggle.

### Keyboard and disclosure accessibility decision

The handle remains in ordinary sequential Tab order because disclosure gives
the button a meaningful keyboard function. The initial bounded contract is:

- Enter toggles collapse/expand through normal button activation;
- Space toggles collapse/expand through normal button activation;
- arrow keys do not reposition the toolbar;
- focus-visible remains the existing visible focus treatment;
- focus stays on the handle after either toggle.

The future handle exposes a state-specific localized accessible name that
identifies the current disclosure action and retains a concise indication that
the control can be dragged to move the toolbar. It exposes `aria-expanded`.
The expanded action group receives a stable `aria-controls` target so the
relationship is explicit. Exact localized wording is an implementation detail,
not a new cross-application vocabulary rule.

When collapsed, the action group is removed from layout and sequential focus
through an equivalent hidden/conditional mechanism. Zoom out, percentage,
Zoom in, and Reset are therefore not keyboard-reachable or active toolbar
content while collapsed; the handle remains reachable. When expanded, the
existing control order is retained.

### State and position ownership

Collapse is transient LiaisonScape application view state. It is not Dataset
data, Core, an Extension, Coordinate data, Layout persistence, exported data,
`history.state`, `sessionStorage`, or `localStorage`.

The state follows the existing App-owned viewport state lifecycle: it survives
ordinary graph interaction, locale switching, Detail open/close, Dataset
replacement, and Home-to-Workspace transitions while the App remains mounted.
It resets to expanded on a fresh page load or component remount. No separate
user preference is invented.

`viewportToolbarPosition` remains the owner of the user's graph-relative
toolbar position. Collapse preserves that logical position. Expansion attempts
to restore it, but never blindly trusts stale pixel coordinates: the position
is re-clamped using the newly rendered toolbar dimensions and current graph
bounds.

### Dimension-change re-clamp contract

Dimension-aware reclamping is required and is part of the future acceptance
contract. Whenever the floating toolbar is visible, its rendered bounding box
must be inside the current graph bounds when the graph is large enough to
contain it.

The future implementation must remeasure and reclamp after:

- collapse and expansion;
- graph/container or viewport resize;
- a responsive transition while the floating toolbar remains visible;
- locale changes in either direction;
- any observed toolbar-content width or height change.

The proposed bounded mechanism is an App-owned layout correction that reads
fresh graph and toolbar rectangles after the disclosure state has committed,
combined with observation of graph/toolbar size changes. A pure graph-relative
clamp helper may be extracted only if it reduces test coupling; a generic
draggable-component abstraction is not justified. The correction must use the
current rendered rectangle after expansion, not a width captured before it,
and must not rely on overflow clipping.

### Responsive and locale contract

At `721px` and above, the floating toolbar may exist in either expanded or
collapsed state. Both states must remain draggable, focusable as specified,
and clamped after current dimensions are known.

At `720px` and below, the floating toolbar remains hidden and the existing
mobile viewport controls inside More remain authoritative. Collapse does not
create a second mobile disclosure UI.

If the user drags or collapses at desktop width, then crosses to `720px` or
below, the application keeps the transient collapse state and graph-relative
position in memory while the floating toolbar is hidden. When returning above
`720px`, it restores the prior logical state and re-clamps to current graph
bounds. A page reload starts expanded with the existing default placement.

EN and JA must be tested independently. Locale switching while expanded,
collapsed, and after a drag preserves Dataset, graph scale, and graph pan; it
only triggers the dimension-aware re-clamp required by the rendered text
width. Re-expansion after a locale change uses the current locale's measured
dimensions.

### Responsibility and expected implementation scope

The smallest bounded runtime scope is:

- `src/App.tsx`: App-owned collapsed state, existing local pointer workflow,
  disclosure activation, refs, rendering, and dimension-aware correction;
- `src/styles.css`: expanded/collapsed action-group presentation only, without
  changing the global button geometry, the `720px` breakpoint, or the mobile
  menu;
- `tests/appUiIntegration.test.ts`: structural and responsive ownership
  coverage for the bounded feature.

No mechanical App split is required for this one coherent viewport-toolbar
responsibility. A pure clamp helper in `src/viewport.ts` is optional and must
only be added if the implementation demonstrates a clear reusable geometry
boundary. No generic interaction framework or one-function-per-file
extraction is authorized.

### Bounded implementation test plan

Automated coverage for the next checkpoint must cover:

- initial expanded state and click-to-collapse / click-to-expand;
- accepted Enter and Space disclosure activation;
- collapsed controls removed from Tab reachability;
- drag classification without a second disclosure toggle;
- pointercancel and secondary-button safety;
- position containment after collapse, expansion, and rendered dimension
  changes;
- `721px` floating ownership and `720px` mobile ownership;
- EN/JA locale changes in expanded, collapsed, and dragged states;
- Zoom out, Zoom in, and Reset regression.

Real-browser acceptance must cover EN and JA expanded/collapsed desktop states,
drag-then-click, click-then-drag, keyboard disclosure, focus-visible,
wide-to-`721px`-to-`720px`-to-`721px` resizing, locale switching after drag,
right/bottom expansion near graph edges, horizontal overflow, and pointer/touch
target usability. The acceptance must inspect fresh rectangle measurements
after every dimension-changing transition.

### Final audit outcome

**DESIGN ACCEPTED / READY FOR BOUNDED IMPLEMENTATION**.

This is a design/source-audit outcome only. It authorizes a future bounded
implementation checkpoint under the scope above; it does not accept runtime
implementation, change the current toolbar, or close the separate need for
implementation-level automated and real-browser acceptance.
