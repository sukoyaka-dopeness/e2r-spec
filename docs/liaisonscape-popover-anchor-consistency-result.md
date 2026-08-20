# LiaisonScape Popover Anchor Consistency Result

## Status

Accepted application-level presentation result, recorded on 2026-08-20.

LiaisonScape checkpoint: `6d77536 fix: stabilize popover placement near viewport edges`.

This does not change E2R Core, an E2R Extension, or Dataset serialization
semantics.

## Scope

This experiment covers the LiaisonScape hover popovers for:

- Node-label;
- Relation-label;
- Relation-path.

The Entity BODY popover remains governed by the previously accepted 2F
connection-handle visibility result.

## Source-relative placement

Node-label and Relation-label popovers use the rendered bounds of the hovered
label as their source anchor. Relation-path popovers use the pointer location
from the hovered path interaction. The resulting placement is presentation-only
Application View State and does not modify Dataset content or graph geometry.

## Root cause of the right-edge defect

A fixed-position popover with only `left` positioning and `width: auto`
participated in shrink-to-fit sizing. Near the right edge, the available
horizontal space became small and compressed the popover, causing excessive
text wrapping.

## Accepted sizing

The current application behavior uses natural content width with the existing
240px maximum and a narrow-viewport safety cap:

```css
width: max-content;
max-width: min(240px, calc(100vw - 24px));
```

These are LiaisonScape application values, not E2R specification constants.
Proximity to an edge does not progressively narrow the popover.

## Accepted viewport containment

The preferred source-relative position is computed first. The rendered
popover dimensions and visible graph viewport bounds are then used to shift the
whole popover by the minimum amount needed to keep it visible. Horizontal and
vertical corrections are applied independently, including at corners.

Containment changes position, not normal typography or wrapping. No graph
collision solver, Node/Relation/label avoidance, accumulated displacement, or
anchor routing memory is used.

## Manual evidence

Manual acceptance passed for Node-label, Relation-label, and Relation-path
popovers near viewport edges. Normal line wrapping was retained and the whole
popover moved instead of becoming a narrow column. Entity BODY behavior and
connection-handle behavior remained accepted.

## Automated evidence

- 158 tests passed;
- lint passed;
- build passed;
- `git diff --check` passed.

## Stale popover observation

Earlier stale-hover-popover behavior remains non-reproducible. Experiment 2G
does not introduce a speculative state-management fix. Reopen it only with a
reproducible interaction sequence.

## Explicit non-goals

2G does not change Dataset format, routing, Node avoidance, occupied-path
behavior, automatic self-loop routing, placement ownership, layout persistence,
attachment geometry, arrowheads, or Context Menu Relation creation.

## UX status and next track

The direct-manipulation and hover-presentation UX track is provisionally frozen
after accepted 2F and 2G results. The next major track is Dataset Replacement
Safety, beginning with an implementation audit against its existing design.

Deferred work remains:

- Context Menu Relation creation;
- Entity shape expansion;
- automatic Relation/self-loop radius adaptation.

Occupied-path clearance improvement remains closed until concrete new evidence.
