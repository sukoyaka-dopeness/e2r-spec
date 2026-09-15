# E2R Session 0086

Objective: Product Relation-label Normal-offset Granularity + Parallel Bundle
Capacity Attribution Experiment 1.

Started: 2026-09-16.
Status: `B PRIMARY / C QUALIFIED SECONDARY / FOREIGN-SIBLING PRESSURE CONFIRMED / COLLISION-ENVELOPE RETUNE NOT ESTABLISHED`.

This is a new objective after Session 0085. Work for this objective is kept in
this session file under the agreed one-contiguous-objective policy.

## Scope

Reproduce the current Relation-label normal candidate behavior from source,
trace why Alpha/Beta zero-offset candidates are rejected, and compare current
versus widened bundle routing with coarse versus bounded finer normal offsets.
Keep Node geometry fixed and preserve Product routing, final label, endpoint,
Self-loop, Parallel/Incident, and Structural Placement authority.

## Work performed

- Confirmed current source candidate set `[0,-24,+24,-40,+40]` and score terms.
- Added development-only candidate details and foreign route identity mapping.
- Added bounded finer candidates `[0,±4,±8,±12,±16,±24,±32,±40]`.
- Ran the four-arm factorial on primary, higher multiplicity, mixed incident,
  shared endpoint, and Lighthouse controls.
- Inspected all primary arms and difficult/public widened-fine arms on the
  Actual Product surface.

## Result

On primary, `r-ab-2` zero-offset is rejected by foreign `r-ba-1`, and reverse
labels show the corresponding sibling collisions. Fine candidates alone retain
primary ambiguity `1`; widened coarse and widened fine both close it to `0`
and restore Alpha/Beta side `2:2`. Widened fine additionally selects smaller
offsets than `±24`. Higher multiplicity retains one ordinary-route churn;
mixed and shared controls show secondary gains from finer offsets. Lighthouse
has no regression.

The result is `B PRIMARY / C QUALIFIED SECONDARY`. Collision-envelope retuning
is not established. Human Review remains `NOT READY`; Product default `HOLD`;
production provider `NOT ESTABLISHED`; Initial Layout Release blocker `OPEN`.

## Validation record

- normal-offset artifact regenerated;
- focused normal-offset suite passed 5/5;
- Actual Product smoke completed;
- final full LiaisonScape suite passed: 563/563;
- LiaisonScape lint/build, spec validation, and diff checks passed.
