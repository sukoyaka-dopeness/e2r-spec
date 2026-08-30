# LiaisonScape Viewport Toolbar Keyboard and Focus Result

Date: 2026-08-30

Status: `ACCEPTED — VIEWPORT TOOLBAR KEYBOARD AND FOCUS CONTRACT`

## Trigger and existing contract

The movable and collapsible viewport toolbar already supported pointer drag,
click collapse/expand, an 8-pixel movement threshold, pointer-cancel safety,
graph-bound clamping, resize reclamping, and localized visual help. The handle
was a focusable button with `aria-expanded` and `aria-controls`.

## Audit and decision

The handle's pointer affordance combines Move with Collapse/Expand, but its
keyboard activation only collapses or expands. Movement is optional positional
customization: all viewport actions remain usable without relocating the
toolbar. Therefore keyboard movement is not required.

Options considered:

- A: retain pointer-only movement and give the button a truthful
  Collapse/Expand accessible name. Chosen.
- B: add arrow-key movement. Rejected as unnecessary additional interaction
  semantics and regression surface.
- C: separate drag and collapse controls. Rejected as a larger UI redesign for
  an optional convenience.

The visual tooltip continues to communicate `Move` plus `Collapse`/`Expand`
for pointer and focus-visible users. The button accessible name now describes
the keyboard/button action only: `Collapse viewport controls` or `Expand
viewport controls`, with equivalent English/Japanese localization.

Focus remains on the handle after toggle, `hidden` removes the action region
when collapsed, and native button activation is retained without custom
duplicate key handling.

## Implementation and evidence

Changed files in LiaisonScape:

- `src/App.tsx`: use the existing localized collapse/expand labels for the
  button accessible name.
- `tests/appUiIntegration.test.ts`: characterize focus retention and truthful
  English/Japanese names while retaining pointer, cancel, clamp, resize, and
  locale coverage.

Automated evidence: `npm.cmd test` passed `277/277`; `npm.cmd run lint` passed;
`npm.cmd run build` passed; `git diff --check` passed. The test run emitted
non-failing Vite WebSocket port-in-use warnings in some runs.

Browser acceptance classification: `NOT REQUIRED — semantic-only accessible
name change covered by DOM integration`; no browser acceptance was performed.

## Modularization policy assessment

This bounded accessibility correction does not justify extracting the
Viewport workflow. No new state or writer was introduced, and App.tsx
modularization, Coordinate extraction, and graph gesture extraction remain
not started.

## Codex assessment

### Agree

The combined drag-handle/collapse-button design is coherent enough to retain:
pointer movement is optional, while keyboard users receive a normal button
action with an accurate name.

### Concern

The original `Move or ...` name conflated a pointer convenience with the
keyboard action and could imply keyboard movement that did not exist.

### Alternative

Arrow-key movement or separate controls could provide more discoverability,
but both enlarge semantics and regression surface without making required
functionality accessible.

### Recommendation

Keep pointer-only movement, retain the visual Move tooltip, and keep the
accessible button name limited to Collapse/Expand unless toolbar relocation
becomes functionally necessary in the future.

## Boundaries and result

No Dataset, Coordinate, Auto Layout, routing, placement, deletion, dependency,
or package behavior changed. No push, deploy, publish, tag, or release was
performed. `docs/roadmap.md` was unchanged because it contains no unresolved
toolbar keyboard/focus item requiring closure. `ai-knowledge` was unchanged
because the existing modularization decision is sufficient. The protected
dirty file remains untouched.

Result: **ACCEPTED — VIEWPORT TOOLBAR KEYBOARD AND FOCUS CONTRACT**

