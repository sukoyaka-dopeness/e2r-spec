# LiaisonScape Parallel / Incident Geometry Formulation Exploration 1

Date: 2026-09-13

## Decision

**PIVOT / NOT READY FOR HUMAN REVIEW.** The evidence rejects further local
offset/corridor retuning as the primary research direction. The most promising
replacement is a capacity-negotiated incident allocator: route a parallel
bundle and its labels atomically, allocate surrounding ordinary Relations from
the same endpoint-sector budget, and request bounded placement-side angular
capacity only when routing cannot satisfy the reservation.

The bounded implementation is diagnostic only. Product default/adoption
remains `HOLD`, the production provider remains `NOT ESTABLISHED`, and the
Initial Layout Release blocker remains `OPEN`.

## Actual architecture finding

The current Product pipeline routes Relations sequentially. Each route sees
only already-occupied paths; Relation labels are placed after every route has
been committed. Consequently a parallel Relation cannot reserve space for:

- the final envelopes of the other labels in its bundle;
- ordinary incident Relations that appear later in route order; or
- a bundle-wide obstacle detour that preserves every internal lane.

This is why pair widening, bundle widening, and label-aware lane widening can
improve one local metric while consuming the outer gutter or increasing side
bias. The limitation is the decision boundary, not only the spacing value.

## Solution families explored

1. **Independent lane offset and label-aware corridor widening.** Existing
   baseline, `pair-16`, `bundle-16`, and `corridor-aware` evidence was retained.
   This family cannot jointly reserve internal labels and later ordinary
   routes, so it remains rejected as the final formulation.
2. **Atomic bundle reservation.** A bounded diagnostic generated symmetric,
   physical-side-stable lane portfolios for the whole undirected parallel
   group. It used the existing Product route geometry and deterministic
   Relation-label placement to evaluate lane separation, label clearance,
   ownership, obstacles, side bias, and detour together.
3. **Incident ordinary rerouting.** For each atomic bundle candidate, ordinary
   Relations at either endpoint were rerouted after the bundle paths had been
   reserved. This demonstrated that external clearance can be recovered, but
   also exposed broad ordinary-route churn because no shared endpoint port or
   sector allocator exists yet.
4. **Generic angular-capacity relief.** A diagnostic-only placement
   counterfactual opened any incident angle below 32 degrees while preserving
   radial distance. It proves a placement contribution in Titanic EN, but is
   not quality-safe: Lighthouse minimum Node separation fell from 85.5 px to
   40 px and its bundle metrics regressed.
5. **Placement-only or routing-only ownership.** Rejected. The canonical and
   counterfactual evidence requires an explicit negotiation boundary between
   the two authorities.

Self-loops and manual curvature/manual Relation-label placement remained
outside every new probe.

## Bounded joint-allocation evidence

Values are screen-space after the existing Product fit. The compact metric is
`lane separation / label clearance / minimum ownership margin / outer ordinary
clearance / side bias`.

| Cell | Baseline | Existing best local widening | Joint incident portfolio |
| --- | --- | --- | --- |
| Lighthouse EN/JA | `22.7 / 10.7 / 44.8 / 7.2 / 0` | `31.8 / 19.5 / 62.8 / 5.1 / 0` | `24.9 / 12.8 / 49.3 / 1.8 / 1.45` |
| Titanic EN | `5.6 / 7.5 / -11.9 / 6.2 / 4.33` | pair/bundle: `5.6 / 26.6 / -11.8 / 7.6 / 5.66` | `40.6 / 65.4 / 37.3 / 1.3 / 0.73` |
| Titanic JA | `33.8 / 14.5 / 45.9 / 2.5 / 0` | corridor: `48.5 / 84.5 / 33.4 / 0.3 / 0` | `23.7 / 36.9 / 29.5 / 16.4 / 0` |
| 3-parallel long/short | `12.7 / 35.9 / 14.1 / 0 / 0.23` | corridor: `12.7 / 69.1 / -4.9 / 0 / 0.84` | `29.5 / 9.8 / 33.0 / 33.0 / 1.14` |
| 4 mixed reverse | `12.6 / 0.6 / -28.2 / 73.7 / 2.45` | corridor: `12.7 / 21.9 / -14.1 / 0 / 0.02` | `29.1 / 8.5 / 29.2 / 25.6 / 0.76` |
| 2 short labels | `10.3 / 26.0 / 12.4 / 38.9 / 4.33` | pair/bundle: `10.3 / 25.6 / 12.3 / 42.5 / 5.67` | `37.6 / 48.5 / 37.5 / 40.7 / 0.73` |
| 2 long labels | `10.3 / 5.0 / -12.5 / 38.9 / 4.33` | corridor: `9.8 / 27.4 / 12.9 / 60.1 / 12.66` | `73.9 / 26.5 / 71.2 / 44.7 / 1.09` |

Apollo EN/JA has no parallel group and remained unchanged. All listed joint
allocations were deterministic in a matched repeat. No measured arm introduced
an ordinary crossing in these bounded cases; that does not establish human
readability.

The joint allocator used 21–28 portfolio evaluations per group. Its measured
diagnostic cost was about 14–28 ms for the synthetic controls and about
117–209 ms for canonical cells with a parallel group. These timings exclude
Initial Layout generation and are feasibility evidence, not Product runtime.

## Angular capacity and responsibility boundary

The minimum available angle between a bundle chord and an ordinary incident
neighbor was about 14.2 degrees in Titanic EN, 18.8 degrees in Titanic JA, and
17.7 degrees in Lighthouse. The synthetic controls had 40.4–82.4 degrees.
The joint allocator was stable and broadly beneficial in the higher-capacity
controls, while the low-capacity canonical cells forced trade-offs or broad
ordinary-route changes.

Opening Titanic EN to 32 degrees changed its joint result to
`20.3 / 30.7 / 43.5 / 31.0 / 0` and removed the measured side bias. That is
direct causal evidence for placement contribution. The same generic correction
made Lighthouse worse: side bias rose to 2.68, outer clearance fell to 1.1 px,
and minimum Node separation fell to 40 px. A fixed angular-placement rule is
therefore rejected.

The proposed responsibility split is:

- **Routing/presentation:** declare the required bundle width from lane count
  and label envelopes; allocate endpoint sectors/ports across the complete
  incident set; route the bundle atomically; preserve physical-side order;
  reserve outer guards; and detour the bundle as a unit around obstacles.
- **Relation-label placement:** remain authoritative for final label position,
  while exposing deterministic envelope/reservation needs to the allocator.
- **Structural placement:** receive a generic `required angular capacity not
  available` result only after routing exhausts bounded sector/side choices.
  Any correction must also preserve Node separation, viewport fit, and other
  route corridors.
- **Self-loop/manual state:** remain independent and authoritative under their
  existing contracts.

## Most promising next architecture

The next implementation should be a bounded **endpoint-sector + atomic
incident allocator**, not another offset formula:

1. build undirected parallel groups and every ordinary incident Relation;
2. derive label-aware width and guard reservations;
3. enumerate a small deterministic portfolio of endpoint sector/port orders
   and bundle centerline families;
4. route all bundle lanes and affected ordinary Relations as one candidate;
5. place Relation labels with the existing Product authority and reject the
   candidate on ownership, obstacle, crossing, or outer-guard failure;
6. commit the whole incident decision atomically;
7. emit a bounded angular-capacity request rather than silently collapsing the
   bundle when no routing candidate is feasible.

This requires a presentation-orchestration boundary above per-Relation
`routeGraphEdge`; it should not move routing authority into Initial Layout.
The current diagnostic already uses browser-compatible deterministic geometry,
so a production-native implementation is plausible. Production readiness is
not established because continuity/drag behavior, manual-route coexistence,
multiple interacting bundles, cancellation, and bounded portfolio size still
need explicit contracts and tests.

## Architecture experiment: hard-feasibility-first selection

The portfolio was then changed from scalar weighted selection to a
feasibility-first gate. A candidate was eligible only when it had no obstacle
influence, at least 16px lane separation, at least 4px label clearance, no
negative label ownership margin, at least 4px outer clearance when an outer
incident Relation existed, no crossing, and unique physical-side offsets.
Cost comparison (side bias, detour, and route length) ran only after that gate.

The gate found feasible candidates in Titanic JA (3/35), the 3-parallel
long/short synthetic case (3/28), mixed reverse (1/28), short/short (13/28),
and long/long (1/35). It found none in Lighthouse EN/JA (0/35 and 0/28) or
Titanic EN (0/35); those candidates failed outer clearance. This is a useful
generic capacity-shortage result, not a fallback to unsafe candidate choice.
The bounded rerun was deterministic in every cell.

The synthetic hard-feasible results improved both internal and external
geometry, but the canonical shortage cases show that a per-bundle allocator
cannot manufacture endpoint angular capacity. Titanic EN had only 14.2° and
Lighthouse 17.7° of measured bundle-to-ordinary angular capacity. Titanic JA
had 18.8° and became feasible only with substantial ordinary-route churn (8
routes). The experiment therefore validates the negotiation boundary but does
not establish a safe product rule.

## Disposition

No new candidate is ready for Actual Product Human Review. The hard-first
allocator is strongly promising on synthetic topology and exposes the right
causal boundary, but canonical Lighthouse and Titanic still contain
capacity-shortage/trade-off cases and 5–9 ordinary route changes. Existing
G3/Frontier and parallel Human evidence is not inherited.

Research should **PIVOT from offset/corridor heuristics to the endpoint-sector
and atomic incident architecture**. Structural Placement / Angular Ordering
remains an adjacent fallback/negotiation track, not the first owner of every
parallel defect. Self-loop remains separate.
