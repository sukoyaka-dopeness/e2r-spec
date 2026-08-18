# Automatic Layout Experiment 1B - Density and Initial Framing Result

Date: 2026-08-18

Status: Non-normative experiment evidence

## Result

```text
INCONCLUSIVE
```

Experiment 1B tested wider deterministic Derived fallback spacing and a
minimum readable initial viewport scale. The temporary implementation was
removed after evaluation and is not adopted.

## Scope tested

- Derived fallback spacing: `240 x 180` versus `300 x 220`;
- initial Dataset-open framing with an experimental minimum scale of `0.75`;
- the relationship between graph density and label instability.

The experiment did not test a new layout algorithm, angular freedom, label
distance, collision geometry, routing, persistence, new Entity spawn, or
Derived Entity avoidance.

## Findings

1. Wider spacing did not produce a clearly attributable usability improvement.
2. The graph could still feel cramped immediately after opening.
3. Any local label change could not be confidently attributed to spacing.
4. The tested Dataset's ordinary fit scale was approximately `0.76`, so the
   `0.75` minimum-scale clamp did not activate.
5. Open and Reset View therefore produced essentially the same scale for that
   Dataset.
6. Manual zoom changes did not materially change collision-triggered label
   jump behavior.
7. Current evidence does not support viewport framing as the primary cause of
   collision-triggered label jumps.
8. Graph density remains an unresolved UX concern.

Wider spacing is not accepted, `300 / 220` is not accepted, and the former
`240 / 180` spacing is not newly endorsed as correct.

## Additional hypotheses

The following are hypotheses for later experiments:

- discrete angular candidates may be a stronger contributor to jumps;
- Node-label proximity is an independent quality axis;
- diagonal Node-label distance may feel excessive;
- collision geometry around rectangular Nodes may be too approximate;
- previous-placement hysteresis can retain an escaped label away from its
  preferred location after collision disappears;
- label stability may need both resistance to unnecessary movement and
  recovery toward a preferred placement;
- Relation labels may need proximity/recovery tuning rather than a major
  representation redesign;
- viewport-edge response may be horizontally and vertically asymmetric.

These observations do not change the Layout responsibility boundary or select
any algorithm, weight, spacing constant, or schema.

## Follow-up investigation: uniform spacing expansion

A follow-up comparison tested the fallback Derived spacing `240 x 180` against
the temporary `360 x 270` spacing. No other automatic-layout parameter was
changed. The comparison was intended to determine whether using more graph
space would create more usable screen-space around Nodes and labels.

Manual evaluation did not show a substantial increase in screen-space
breathing room. Investigation found that the larger graph bounds caused
`fitGraphView()` to reduce the display scale, so uniform graph-space spacing
and automatic fit partially cancelled each other in screen space.

The spacing change could still alter graph-space collision conditions,
including Node-to-Node, label-to-label, Node-to-label, and Relation-path
interactions, as well as the final selected label direction. This does not
establish that spacing is irrelevant, nor does it accept any new spacing value.

Additional implementation findings are bounded observations, not design
decisions:

- `fitGraphView()` derives bounds from Node positions with fixed padding;
  actual Node-label rectangles, Relation labels, and route geometry are not
  included in those fit bounds;
- Node-label placement currently searches fixed 16-direction angular
  candidates and applies strong collision penalties;
- Relation paths participate in Node-label candidate scoring;
- label proximity and angular freedom remain separate quality axes from
  collision avoidance and placement stability.

No fit behavior, label-aware bounds, angular candidate resolution, label
distance, collision weight or geometry, routing behavior, or persistence
behavior was changed or accepted by this follow-up. Experiment 1B remains
`INCONCLUSIVE`. The next planned bounded experiment remains Experiment 1C -
Angular Freedom.

## Rollback and clean baseline

The temporary Experiment 1B changes were removed:

- `src/dataset.ts`: `300 / 220` spacing reverted to `240 / 180`;
- `src/viewport.ts`: optional `fitGraphView` minimum-scale support removed;
- `src/App.tsx`: Dataset-open `minimumScale = 0.75` usage removed.

The committed Experiment 1 Label Stability behavior remains:

```text
88b6cabe46535f3e4ad35d4ffbb6eaf52b3bf0aa
feat: experiment with label placement stability
```

LiaisonScape validation after rollback:

- `npm.cmd test`: 122 passed;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS;
- `git diff --check`: PASS;
- working tree: clean.

## Next experiment: Experiment 1C - Angular Freedom

The next bounded experiment tests whether coarse/discrete Node-label angular
candidate selection causes large collision-triggered jumps or failure to use
visibly open nearby space.

The first comparison is current discrete candidates versus higher angular
resolution. A `16 -> 32` comparison may be used as an implementation test, but
`32` is not an accepted product or specification constant. Later options may
include coarse-to-fine search, local angular refinement, or near-continuous
search. No method is selected yet.

Experiment 1C must change only angular candidate resolution/search behavior. It
must not simultaneously change fallback spacing, initial framing, label
distance, collision weights or geometry, previous-placement scoring, routing,
or Relation-label offsets.

## Checkpoint meaning

Experiment 1B is complete as evidence gathering. This means the bounded
hypothesis was tested, temporary code was removed, useful inconclusive evidence
was recorded, and the next experiment can begin from a clean baseline.

It does not mean that spacing, minimum scale, graph density, or label jumping
has been solved or accepted.
