# LiaisonScape Parallel Incident-Bundle Corridor Retune 2

Date: 2026-09-13

## Decision

**RETUNE / NOT READY FOR HUMAN REVIEW.** A bounded label-aware corridor slot
probe was implemented and exercised through the existing Product routing and
presentation evaluator. It improves internal lane/label clearance in some
cases, but it does not yet preserve outer ordinary-Edge clearance or bundle
side balance. It is therefore not a quality-safe replacement for the current
baseline, `parallel-pair-16`, or `parallel-bundle-16`.

Product default/adoption remains `HOLD`; the production provider remains
`NOT ESTABLISHED`; and the Initial Layout Release blocker remains `OPEN`.
Self-loop routing, Initial Layout provider selection, Dataset authority, and
manual curvature/label authority are unchanged.

## Bounded corridor model

The new opt-in `corridor` slot policy reuses the existing canonical physical
side and rank ordering. For a parallel group it obtains the maximum
deterministic Relation-label visual width from the same width function used by
Relation-label placement. It projects that width plus the existing 22-unit
label height onto the endpoint chord normal, adds a 16-unit gutter, and adds
only the excess over the nominal 80-unit two-lane centerline separation to the
parallel slot.

This is intentionally a bounded internal-corridor probe, not a claim that the
whole incident bundle is already one atomic router unit. Existing occupied
path, Node obstacle, label pressure, and route arbitration still decide the
actual route. Ordinary incident Relations are not silently reassigned, and
future ordinary routes are not pre-reserved by this probe.

Manual curve offsets return through the existing manual branch. Self-loops do
not enter the new calculation. The normal Product caller omits the optional
mode, so default routing is unchanged.

## Matched results

Values below are screen-space after the existing Product viewport fit. The
group values are `side bias / minimum lane separation / Relation-label
clearance / outer ordinary-Edge clearance`.

| Cell | Baseline | Pair/bundle 16 | Corridor-aware |
| --- | --- | --- | --- |
| Lighthouse EN/JA | `0 / 22.7 / 10.7 / 7.2` | `0 / 31.8 / 19.5 / 5.1` | same as pair/bundle |
| Titanic EN | `4.33 / 5.6 / 7.5 / 6.2` | `5.66 / 5.6 / 26.6 / 7.6` | `10.38 / 5.5 / 9.9 / 1.6` |
| Titanic JA | `0 / 33.8 / 14.5 / 2.5` | `0 / 47.2 / 83.9 / 0.1` | `0 / 48.5 / 84.5 / 0.3` |
| 3-parallel long/short synthetic | `0.23 / 12.7 / 35.9 / 0` | `0.92 / 11.0 / 66.7 / 0` | `0.84 / 12.7 / 69.1 / 0` |
| 4 mixed reverse synthetic | `2.45 / 12.6 / 0.6 / 73.7` | `0.02 / 12.7 / 21.9 / 0` | `0.02 / 12.7 / 21.9 / 0` |

All measured arms had zero ordinary crossing count in these small controls;
that is not sufficient for a visual acceptance claim. Apollo EN/JA contains no
parallel group and remained unchanged, providing a no-parallel control.

The corridor candidate changed all parallel routes in the affected groups.
In Titanic EN it also changed one ordinary route and worsened the measured
side bias. In Titanic JA it retained two obstacle-influenced parallel routes
(`fleet` and `andrews`) and one ordinary-route change; its outer clearance
remained effectively exhausted. The reverse synthetic case demonstrates the
opposite trade-off: the bundle becomes balanced while consuming the entire
outer gutter.

## Attribution and responsibility boundary

The probe confirms that label length and orientation can be incorporated into
an internal bundle-width requirement, but that requirement cannot be enforced
by widening individual lanes alone. A long label may require more normal-space
than a short label, while an outer ordinary Relation and an obstacle compete
for the same corridor. The router therefore needs a future group-level
allocation decision: preserve internal lane order and label envelopes first,
then choose a bundle center/detour and an outer-Edge guard that are evaluated
together.

The persistent Titanic EN side bias and the mirror/rotation evidence from
Attribution 1 also require a structural input. Endpoint and neighbor angular
distribution can determine which side remains available even when the label
width calculation is correct. That input belongs to the adjacent Structural
Placement / Angular Ordering track, not to Relation-label ownership in Initial
Layout.

The current result does not authorize a fixture-specific move, a new fixed
spacing value, or a routing/presentation fix for Titanic/Apollo known issues.

## Coverage and disposition

The audit covered Titanic EN/JA, Lighthouse EN/JA, Apollo EN/JA, a 3-parallel
long/short-label case with nearby ordinary and obstacle Nodes, a 4-Relation
mixed reverse-direction case, and the existing mirror/rotation placement
counterfactuals. The requested two/three-plus, reverse, long/short, ordinary,
obstacle, and placement perturbation conditions are represented; the
production Product surface still needs human review only after a candidate
shows a credible external-clearance and ownership result.

No user human review is claimed for `corridor-aware`, and the existing
`parallel-pair-16` / `parallel-bundle-16` review remains unaccepted. Since the
candidate fails the bounded machine safety signal on Titanic EN and the outer
clearance controls, no Actual Product review handoff was prepared for this
candidate.

The next checkpoint should either implement a true group-level corridor
allocation with explicit outer-Edge/obstacle guards, or return to generic
Structural Placement / Angular Ordering when the available corridor is
structurally insufficient. The two tracks remain adjacent rather than fully
serial; Self-loop remains independent.
