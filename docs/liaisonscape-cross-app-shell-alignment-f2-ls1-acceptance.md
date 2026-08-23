# LiaisonScape Cross-App Shell Alignment F2-LS1 Acceptance

Status: Accepted / Closed

Date: 2026-08-23

Runtime checkpoint: `56f45da feat: align LiaisonScape application shell`

## Scope

F2-LS1 covers LiaisonScape Home and Workspace application-shell placement:

- Home Header: LiaisonScape brand and locale control;
- Workspace Header: LiaisonScape brand, explicit Home, and locale control;
- Home and Workspace Footer: descriptor/context and Credits;
- removal of locale and Home controls from the Footer;
- responsive editor-shell geometry; and
- Credits availability and opener-focus restoration from Home and Workspace.

F2-LS1 does not implement the locale consumer contract. The following remain
outside this checkpoint:

- `#locale` parsing;
- requested-versus-persisted locale conflict resolution;
- legacy `liaisonscape.locale` migration;
- explicit-manual-choice-only persistence;
- startup locale conflict ordering before Dataset Handoff fetch;
- Dataset Handoff semantics;
- Dataset Replacement Safety semantics; and
- graph/routing semantics.

## Accepted manual evidence

The final browser acceptance reported the following PASS results:

- Header / Footer shell geometry at 601px and 600px without a visible
  breakpoint-height jump;
- stable-vertical editor-shell policy with horizontal responsive compression;
- Home Header brand + locale;
- Workspace Header brand + explicit Home + locale;
- Home and Workspace Footer descriptor + Credits;
- no Footer locale control;
- no Workspace Footer Home control;
- brand text activation navigates Home;
- blank area beside the brand does not navigate Home;
- explicit Home activation navigates Home;
- locale activation changes locale only;
- locale switching preserves Dataset and selection;
- Home -> Continue Editing preserves the active Dataset;
- Credits dismissal by Close, Escape, and backdrop click;
- Credits opener focus restoration from Home and Workspace;
- keyboard regression checks;
- representative Dataset Replacement Dialog focus and dismissal checks;
- Dataset Replacement Safety behavior unchanged; and
- 240px / 270px brand degradation accepted as the existing bounded extreme-
  narrow behavior.

The acceptance uses the editor-shell geometry policy defined in
`docs/cross-app-editor-shell-geometry-v0-design.md`. Same policy does not mean
shared DOM or identical CSS values.

## Runtime change boundary

The runtime checkpoint changes only:

- `e2r-liaison-scape/src/App.tsx`;
- `e2r-liaison-scape/src/styles.css`.

The implementation adds the accepted shell controls, constrains the brand hit
area to the brand content rather than the full Grid cell, preserves stable
vertical shell geometry at the 600px breakpoint, and restores focus to the
Credits opener after dismissal. It does not change locale persistence,
Dataset Handoff, Dataset Replacement Safety, graph state, or routing.

## Automated validation

The runtime checkpoint passed:

- `npm test`: 180 tests passed;
- `npm run lint`: PASS;
- `npm run build`: PASS; and
- `git diff --check`: PASS.

The runtime repository was clean after commit. No push, deploy, or release was
performed.

## Accepted non-blocking observations

The following observations do not block F2-LS1 acceptance:

1. Header Home and locale hover treatments are not visually identical. Their
   semantic behavior and keyboard accessibility pass. Cross-App action hover
   parity remains a separate residual UX audit.
2. Workspace Dataset Open / Import remains available as a primary toolbar
   action. The adopted direction is Home-first primary Dataset acquisition,
   with Workspace acquisition treated as secondary access in a future bounded
   cross-application decision. F2-LS1 does not change the toolbar.
3. Extreme-narrow Footer wrapping/clipping, 240px-universal behavior,
   viewport-toolbar compactness, drag-handle keyboard semantics, Dataset title
   editing, Detail ID presentation, graph information hierarchy, and Dataset
   Replacement destructive styling remain deferred or non-blocking follow-ups.

## Decision

LiaisonScape F2-LS1 Home / Workspace Header Locale Placement is Accepted / Closed
at the recorded evidence boundary. This acceptance does not promote the locale
consumer implementation, does not close unrelated UX follow-ups, and does not
authorize publication or deployment.
