# LiaisonScape Parallel / Incident Bundle Geometry Attribution 1

Date: 2026-09-13

## Decision

**MIXED / RETUNE.** The bounded audit established separate routing-side and
placement-side signals, but did not establish a quality-safe presentation fix.
The next work should retune parallel incident-bundle geometry and structural
angular ordering as adjacent tracks. The existing `parallel-pair-16` and
`parallel-bundle-16` candidates remain unaccepted.

Product default/adoption remains `HOLD`, production provider remains
`NOT ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`.
Self-loop routing and Self-loop/ordinary-Edge interaction remain a separate
track.

## Audit method

The audit used the existing Product-owned `deriveBoundedAutomaticPresentation`
route, Relation-label, Node-label, obstacle, and viewport-fit path. It did not
move any presentation authority into Initial Layout.

For each canonical G3 coordinate result, the following routing counterfactuals
used identical coordinates and topology:

1. existing spacing (`fixed-routing-baseline`);
2. `parallel-pair-16`; and
3. `parallel-bundle-16`.

The placement counterfactuals used the same baseline routing semantics while
applying centroid-based mirror-x, mirror-y, and 90-degree rotation probes.
Those transforms are diagnostic controls, not production rules. Two synthetic
graphs additionally covered long/short labels, a 3+ group, nearby ordinary and
obstacle Nodes, and mixed reverse-direction Relations.

The measurements use screen-space values after the existing `fitGraphView`.
Bundle side bias is the absolute mean lane offset normalized by half the lane
range; a value near zero is balanced, while a larger value indicates a
one-sided bundle. Outer-ordinary clearance excludes the shared endpoint
region. Obstacle influence uses the existing Product Node-influence predicate.

## Routing / slot allocation evidence

With coordinates held constant, slot policy changed the parallel route
geometry in every case where the policy had an effect. In the canonical
parallel cases:

| Cell | Baseline | Pair/bundle 16 | Attribution |
| --- | --- | --- | --- |
| Lighthouse EN/JA | lane separation 22.7px, label clearance 10.7px, outer clearance 7.2px | 31.8px, 19.5px, 5.1px | parallel routes changed; ordinary routes did not |
| Titanic EN | side bias 4.33, lane separation 5.6px, label clearance 7.5px | bias 5.66, 5.6px, 26.6px | parallel routes changed, but the one-sided geometry remained |
| Titanic JA | lane separation 33.8px, label clearance 14.5px, outer clearance 2.5px | 47.2px, 83.9px, 0.1px | three routes changed, including one ordinary route |

Titanic JA is the clearest mixed failure: widening the parallel group
improves the internal and label-to-label measurements but consumes nearly all
clearance to an outer ordinary route. The two parallel routes remain
influenced by different non-endpoint Nodes (`fleet` for `r10`, `andrews` for
`r11`) in the existing obstacle predicate. This is evidence for routing and
obstacle arbitration being part of the result, not evidence that those IDs
should become a layout rule.

The reverse-direction synthetic group kept its physical-side ordering. Its
baseline bundle was strongly one-sided (bias 2.45) with 44.5px outer
clearance; pair/bundle spacing brought the measured bias to 0.02 and label
clearance from 0.6px to 21.9px, but reduced outer clearance to 0px. This shows
that a policy can repair internal side balance while spending the external
gutter.

## Placement / angular-distribution evidence

Changing only the input geometry under the same baseline routing semantics also
changed the bundle shape:

- Lighthouse mirror-y changed the bundle from balanced to side bias 0.43 and
  increased lane separation from 22.7px to 39.7px; its outer clearance fell
  from 2.7px to 0.9px in graph-space-derived measurement. Rotation changed
  Relation-label clearance to 6.5px. These are geometry-dependent effects,
  not a fixed slot-width effect.
- Titanic EN remained one-sided under mirror and rotation probes (bias about
  4.33--5.33), and rotation reduced label clearance to 3.9px. The routing
  policy alone cannot make this family readable when the endpoint/neighbor
  geometry gives both lanes the same effective side.
- The 3-parallel synthetic probe changed from near-balanced baseline bias 0.23
  to bias 2.67 under mirror probes; long-label clearance fell to 4.2px. This
  demonstrates that a 3+ group needs angular and label-aware treatment rather
  than only a larger pair offset.

The placement signal is therefore real, but it is not a justification for a
fixture-specific swap or for assuming equal circular spacing is correct.
Neighbor angular distribution, group endpoints, and outer incident geometry
must be treated as generic structural inputs.

## Label-aware incident-bundle corridor hypothesis

A viable contract is a bundle corridor, not a constant per-pair offset. For a
parallel group, the corridor should be derived from:

- stable physical-side ordering and a minimum gap between adjacent lanes;
- the projection of each Relation-label visual envelope onto the bundle normal,
  including a gutter between long labels;
- the number of lanes and their slot order;
- clearance to outer ordinary incident Relations; and
- obstacle guard space for the bundle as a whole.

The required corridor is consequently a bound over the internal lane envelope,
label envelopes plus gutter, outer-ordinary guard, and obstacle guard. It must
be allowed to move or detour as one bundle when the available corridor is
blocked; it must not silently collapse internal ordering to satisfy an
obstacle. Short labels may tolerate a smaller local gap, while multiple long
labels may require a wider corridor even when the route centerlines are
already separated.

This contract is feasible as a next geometry design, but the audit does not
claim that the current pair/bundle implementation satisfies it. In particular,
the Titanic JA outer-clearance result and the synthetic long-label results
reject fixed spacing as a sufficient acceptance criterion.

## Classification and next direction

| Observed issue | Attribution | Next owner |
| --- | --- | --- |
| Pair/bundle lane displacement and route changes at fixed coordinates | routing / slot allocation | Parallel incident-bundle geometry |
| Titanic EN one-sided parallel routes with unchanged lane separation | mixed; route arbitration exposed by endpoint geometry | Parallel geometry plus structural angular ordering |
| Titanic JA obstacle-influenced lanes and outer ordinary clearance collapse | mixed routing/obstacle/bundle interaction | Parallel bundle corridor; do not fix in Initial Layout alone |
| Side bias and label clearance changes under mirror/rotation | placement-sensitive neighbor angular distribution | Structural Placement / Angular Ordering |
| Long-label association failures after lanes are separated | presentation-sensitive label envelope/corridor residual | Parallel Relation presentation |
| Self-loop/ordinary-Edge interaction | independent | Self-loop presentation track |

No bounded production retune was implemented in this checkpoint. The result is
`RETUNE`: implement and test a generic corridor/ordering model next, while the
structural angular-ordering probe proceeds as an adjacent dependency. The two
tracks should share attribution data, but neither should absorb routing,
Relation-label, or Self-loop authority into Initial Layout.

## Coverage and evidence boundary

The diagnostic covered Lighthouse EN/JA, Titanic EN/JA, Apollo EN/JA, a
3-parallel long/short-label graph with nearby ordinary and obstacle Nodes, and
a 4-Relation mixed reverse-direction graph. Apollo has no parallel group in
this audit; its placement controls were still useful as a no-parallel control.

This is machine/geometry evidence from the existing Product evaluator, not
user visual acceptance. Existing parallel Human Review remains
`PENDING/UNACCEPTED`, and no existing G3 or Frontier human evidence is
inherited by a future retune candidate.

No Product default, Initial Layout provider, Dataset, coordinate authority,
persistence, dirty-state, Save Coordinates, manual curvature, or Self-loop
behavior was changed.
