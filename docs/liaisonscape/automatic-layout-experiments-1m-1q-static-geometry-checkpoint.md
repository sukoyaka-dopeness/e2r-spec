# Automatic Layout Experiments 1M–1Q — Static Geometry Checkpoint

Date: 2026-08-19

This checkpoint records the accepted static Relation geometry work after the
bounded application experiments. It does not claim that active-drag
transitions or automatic layout are complete.

## Accepted production behavior

### Experiment 1M — Normal-distance recovery

After a Relation label escapes perpendicular to its edge, safe recovery keeps
the same along-edge `sampleIndex` and prefers a smaller absolute
`normalOffset`. Existing label, Node, and edge overlap blockers remain hard
blockers. Pure evidence included:

```text
20,0 -> 20,-24 -> 20,0
20,0 -> 20,24 -> 20,0
```

### Experiment 1N Revision 2 — Midpoint anchor plus local Node pressure

After 1M recovery, safe candidates with the same `normalOffset` are considered.
The existing midpoint preference supplies an anchor. If its minimum Node
clearance is at least `60` graph units, the anchor remains selected. Below
that temporary application-local threshold, the candidate with the greatest
minimum Node clearance is selected, with midpoint preference as the tie-break.

This revision replaced unconditional midpoint recovery and the earlier
always-maximize-clearance behavior. The `60` value is experimental; it is not
an E2R semantic or final product constant.

Along-edge evidence included:

```text
20,0 -> 28,0 -> 20,0
```

### Experiment 1Q — Earlier Relation-route obstacle response

The ordinary automatic Relation route Node influence radius was changed from
`42` to a temporary `60` graph units. The route penetration term is therefore:

```text
max(0, 60 - distance(route sample, obstacle Node center))
```

Route candidate offsets, route geometry, occupied-edge scoring, curvature
preference, manual curvature behavior, self-loop routing, and parallel routing
were otherwise preserved. Route offset granularity was not changed.

Manual observation found the current 60-level route response approximately
appropriate. This checkpoint does not establish it as a final tuning constant.

## Route / label sensitivity

The 1P trace showed a period in which the label moved while the route remained
at its default offset:

```text
label: 20,0 -> 32,0
route: r:0, d:67, s:0
```

The route later changed offset. This supports the distinction that Relation
labels can respond to nearby obstacles before automatic route geometry changes.

## Diagnostic status

The temporary 1P diagnostics were removed before this checkpoint:

- Relation-label `sampleIndex,normalOffset` text;
- route `r:d:s` text;
- diagnostic-only metadata exposure and tests.

Production behavior tests remain. No diagnostic state is persisted, exported,
or represented in the Dataset.

## Remaining issue

Static/final placement is substantially improved. The remaining concern is
active-drag transition quality: discrete route and Relation-label candidate
switching can feel abrupt or appear as jitter during Node movement. This is
not classified as a static geometry failure, and no active-drag hysteresis was
added in this checkpoint.

The following are explicitly not claimed:

- all oscillation is solved;
- final tuning constants have been selected;
- route granularity is final;
- label-label soft clearance is solved;
- automatic layout is complete.

## Next bounded experiment

Experiment 1R — Active-Drag Relation Geometry Transition Stability.

Its boundary is active Node drag only. Settled/pointerup placement should keep
the current static algorithm authoritative. It has not been implemented.
