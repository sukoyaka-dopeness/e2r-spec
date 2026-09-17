# LiaisonScape Explicit Auto Layout Preview Surface Refinement 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-PREVIEW-SURFACE-REFINEMENT1`  
Classification: **A. PREVIEW SURFACE REFINED / READY TO RESUME HUMAN CHECK B**

## Human Check B finding and bounded fix

Human Check B confirmed that the Explicit Auto Layout lifecycle and actual
unpinned Node movement work. It identified one bounded presentation defect:
the Preview surface was rendered inside the Graph section alongside the
floating viewport toolbar, so the toolbar could cover Preview text or actions.

The Preview is now an operation-level surface placed between Dataset metadata
and the Graph section. The Graph section owns only the Graph canvas and its
viewport-level controls. This is a DOM/CSS ownership correction; it does not
change graph geometry, Product presentation authority, or lifecycle semantics.

```text
Workspace controls
Dataset metadata
Explicit Auto Layout surface
  - title / status
  - optional warning
  - decision actions
Graph section
  - floating viewport toolbar
  - graph canvas
```

## Accepted copy

```text
English:
  Review Auto Layout
  Use this layout
  Return to previous layout

Japanese:
  自動レイアウトを確認
  このレイアウトを使う
  元の配置に戻る
```

The warning is concise, user-facing, and does not expose strict eligibility
or internal score terminology. Apply/Reject semantics are unchanged.

## Preserved boundaries

Frontier algorithm, Worker execution, Pin-aware operation semantics, Running,
Cancel, stale, failure, Preview, Apply, and Reject lifecycle are unchanged.
Product routing, Relation-label, Node-label, Self-loop, viewport authority,
Initial Automatic Display, Dataset, Coordinate, persistence, dirty-state, and
Save Coordinates rules are also unchanged.

Human Check B remains open. This checkpoint does not record visual PASS,
QUALIFIED, or FAIL for the overall Explicit Auto Layout review.

## Actual Product evidence

The local Actual Product was checked in desktop EN and JA states. In both
locales, Running showed the operation-level status above the Graph, and the
completed Preview showed the revised title, warning, and two decision actions
above the Graph. The floating viewport controls remained separate and
available during Preview. The surface uses ordinary responsive wrapping and
does not depend on a fixed z-index relationship.

This browser evidence confirms surface composition and copy only. It is not a
replacement for the remaining Human Check B visual decision on layout quality,
Pin presentation, warning acceptability, or dense/slow cases.

## Validation

- focused Explicit Auto Layout / UI regression tests: PASS;
- LiaisonScape lint: PASS;
- LiaisonScape build: PASS;
- e2r-spec `npm run validate`: PASS;
- both repository `git diff --check`: PASS, with existing LF/CRLF warnings;
- no production default, release, deploy, or push performed.
