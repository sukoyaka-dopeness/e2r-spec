# LiaisonScape Explicit Auto Layout Human Check B Resume 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-HUMAN-CHECK-B-RESUME1`  
Classification: **A. COPY CORRECTED / HUMAN CHECK B READY**

## Result

The accepted Preview copy is present in current source and was confirmed on
the Actual Product surface:

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

The copy communicates that the candidate is a reviewable proposal and that
the return action restores the pre-operation display. Apply/Reject semantics
are unchanged.

## Surface and evidence

The operation-level Preview surface remains between Dataset metadata and the
Graph section. It contains the title, optional warning, and decision actions.
The Graph section contains the floating viewport toolbar and Graph canvas.
No z-index workaround or return of Preview controls into the canvas was
introduced.

Actual Product smoke confirmed the revised EN surface in the Titanic fixture:
Running showed the current layout was unchanged, and completion showed the
title, warning, and both decision actions above the Graph. The equivalent JA
surface and copy were confirmed in the preceding browser review and remain
source-parity with this checkpoint.

Human Check B is resumed and ready for human judgement. This checkpoint does
not assign an overall PASS, QUALIFIED, or FAIL. Remaining review covers Pin
constraint visuals, all-pinned/no-op behavior, Cancel/Reject/Apply, warning
acceptability, EN/JA consistency, viewport operation, and ordinary/dense
quality. Dense congestion and layout quality remain separate follow-up
concerns and are not retuned here.

## Preserved boundaries

Frontier, Worker, Pin-aware operation, lifecycle, Product routing,
Relation-label, Node-label, Self-loop, Initial Automatic Display, Dataset,
Coordinate, persistence, dirty-state, and Save Coordinates semantics are
unchanged. No production default, rollout, deploy, or release action was
performed.

## Validation

- current i18n/source copy inspection: PASS;
- focused Explicit Auto Layout and UI tests: PASS;
- full LiaisonScape test suite: PASS;
- lint: PASS;
- build: PASS;
- e2r-spec `npm run validate`: PASS;
- `git diff --check` in both repositories: PASS, with existing line-ending
  normalization warnings.
