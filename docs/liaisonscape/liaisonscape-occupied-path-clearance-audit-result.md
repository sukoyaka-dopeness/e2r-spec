# LiaisonScape Occupied-Path Clearance Audit Result

## Status

Audit completed. Experiment 2D-2A Rev1 rejected. The current occupied-path
metric is retained.

This is an application-level result, not E2R Core or Extension behavior.

## Baseline

Reference application checkpoint: `e581c99 feat: make automatic routing order
canonical`.

## Current occupied-path behavior

Automatic ordinary routing retains its existing candidate geometry and 41 route
samples. Candidate and occupied paths both use `samples.slice(5, -5)`. A
candidate sample is near when its distance to any occupied inner sample is
strictly less than 8. Consecutive near distance accumulates along candidate
samples and resets when a sample is no longer near. An overlap triggers at 24
or more route units and adds 10000 to the score.

Overlap is boolean across occupied paths rather than stacking. The score also
contains continuous Node pressure and a small offset preference. Node pressure
uses a broader, stronger obstacle model.

## Audit findings

The occupied-path response is substantially more binary than Node pressure.
Short crossings can reach distance zero without triggering hard overlap, while
sustained near-parallel travel is discouraged. Small changes around the
distance and duration thresholds can cause abrupt score changes. Sampling
spacing materially affects detection, and endpoint exclusion represents larger
graph-space distances on longer Relations. Node pressure can realistically
outweigh the 10000 occupied-path penalty.

Representative synthetic measurements were:

- 12-unit parallel: no hard penalty;
- exactly 8 units: no penalty because the comparison is strict;
- 7.5 units with an approximately 20.4-unit near run: no penalty;
- 7.5 units with an approximately 27.2-unit near run: 10000 penalty;
- brief crossing: no hard penalty; and
- long near-parallel travel: 10000 penalty.

These measurements describe sampled implementation behavior, not a claim of
continuous geometric precision.

## Useful existing behavior

The retained metric allows brief crossings, preserves compact layouts, and
discourages long near-parallel overlap. Node avoidance remains stronger.
Experiment 2D-1 provides a stable canonical sequential routing order for this
behavior.

## 2D-2A Rev1 prototype

The rejected prototype retained the hard rule and added a soft halo with:

- radius 16;
- weight 1;
- squared normalized penetration;
- averaging over candidate inner samples; and
- nearest occupied-path geometry.

Representative Rev1 measurements were:

- approximately 16 units: soft pressure 0, selected offset 0;
- approximately 12 units: soft pressure about 0.0598, selected offset 0;
- approximately 10 units: soft pressure about 0.1357, selected offset -12;
- approximately 8 units: soft pressure about 0.2418, selected offset -12;
- brief crossing: soft pressure about 0.1035, selected offset 0; and
- sustained approximately 10-unit parallel: soft pressure about 0.1357,
  selected offset -12.

## Rejection evidence

Manual inspection found no meaningful visible product improvement. Existing
regression coverage also failed: `short nearby Relations keep ordered endpoints
and avoid excessive curvature`. A repeated approximately 50-unit Relation that
previously remained straight selected an approximately 24-unit control-point
bend due solely to the soft halo.

Rev1 therefore caused an unacceptable compact-route regression without a
meaningful visible gain.

## Product conclusion

Current edge separation is sufficient for Relation-label readability. There is
no current product requirement to force greater ordinary-edge separation.
Horizontal Relation labels on vertical or near-vertical routes remain readable
enough under the current behavior; additional soft clearance is not justified
merely for label spacing.

## Decision

- Reject Experiment 2D-2A Rev1.
- Do not tune the radius or weight and do not proceed to Rev2.
- Retain the current hard occupied-path metric and all accepted 2D-1 behavior.
- Leave sampling density and endpoint exclusion unchanged.

This is not a claim that the metric is mathematically ideal. It is a product
decision that the measured imperfections do not justify added routing complexity
or regression risk.

## Revisit conditions

Reopen occupied-path clearance only with concrete user-visible evidence, such
as sustained unreadable edge overlap in realistic graphs, repeated
Relation-label readability failures from edge proximity, frequent abrupt
threshold-driven route changes, or a reproducible sampling or endpoint blind
region that harms real layouts. Do not reopen solely because a smoother metric
is theoretically possible.
