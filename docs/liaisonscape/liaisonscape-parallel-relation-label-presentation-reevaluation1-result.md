# LiaisonScape Parallel / Relation-label Presentation Re-evaluation 1

Date: 2026-09-14

## Decision

**RETUNE BOUNDARY CONFIRMED / NOT READY FOR HUMAN REVIEW.** The existing
Parallel / Incident architecture remains a valid responsibility boundary, but
fixed pair/bundle spacing and the current corridor probe are not sufficient
Product-quality solutions. The residual is a mixed downstream problem:

- improved Node geometry can remove or reduce endpoint angular scarcity and
  some side-bias cases;
- Parallel routing/slot arbitration still trades internal lane separation
  against outer ordinary-Relation clearance and ordinary-route churn;
- Relation-label placement still has ownership and long-label association
  failures even when route separation improves; and
- endpoint-plan capacity can reject a geometry that looks acceptable to cheap
  routing proxies.

The next bounded formulation should be a group-level bundle allocation and
presentation evaluation that preserves existing Product routing,
endpoint-plan, and final Relation-label authorities. It should not be another
fixed-offset retune. Self-loop remains an independent downstream track and is
not included in this checkpoint.

Product default/adoption remains `HOLD`, production provider remains `NOT
ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`.

## Scope and source reconciliation

The starting documents and current source agree on the major boundary:

- Structural Placement supplies geometry candidates only;
- `deriveBoundedAutomaticPresentation` owns the Product route and label
  pipeline;
- endpoint-plan / incident allocation returns `feasible` or
  `capacity-shortage`; and
- final Relation-label placement remains downstream of route selection.

The current source adds an important operational detail to the written
handoff: `graph-presentation.ts` can collect the maximum parallel-group label
width and pass opt-in `pair`, `bundle`, or `corridor` modes into
`routeGraphEdge`, but the normal Product caller omits these modes. The
re-evaluation therefore treats those modes as diagnostic arms, not Product
behavior or provider candidates.

No contradiction was found that requires changing the authority model. The
current source was used as the authority where the older evidence documents
described a broader hypothesis.

## Reproducible audit

The checkpoint uses the existing Product-authoritative attribution audit and
adds a wrapper and artifact:

- `tools/parallel-relation-label-presentation-reevaluation.mjs`;
- `experimental/parallel-relation-label-presentation-reevaluation/audit.json`.

The wrapper compares, on the same geometry and Product presentation path:

- fixed-routing baseline;
- `parallel-pair-16`;
- `parallel-bundle-16`;
- `parallel-corridor-aware`;
- joint incident portfolio;
- hard-feasibility-first incident allocation; and
- angular-relief plus joint incident counterfactual.

The fixture matrix covers all six canonical EN/JA cells, Titanic difficult
cases, Apollo no-parallel control, long/short-label controls, reverse-direction
bundles, multiple ordinary incident Relations, asymmetric geometry, shared
parallel bundles, conflicting bundles, mirror, and rotation.

Measured fields remain Product-facing diagnostics: routed crossings, lane
separation, Relation-label clearance, label ownership margin, outer ordinary
clearance, bundle side bias, obstacle influence, ordinary route changes,
endpoint angular capacity, authoritative plan status, explored states,
candidate count, and determinism.

## Responsibility attribution

| Residual | Attribution | Evidence and interpretation |
|---|---|---|
| Physical-side uniqueness and reverse-direction ordering | Parallel routing / canonical slot policy | Existing canonical physical-side sign preserves forward/reverse side ordering. The reverse synthetic bundle remained deterministic; this part is not an open direction-collapse defect. |
| Internal lane separation | Parallel slot allocation, coupled to geometry | Lighthouse baseline 22.7px improved to 31.8px with pair/bundle spacing. Titanic JA improved 33.8px to 47.2px, but external clearance fell to 0.1px. |
| Persistent Titanic EN side bias | Mixed Structural Placement + route arbitration | Baseline bias 4.33 and pair/bundle bias 5.66 remain one-sided. Geometry determines available angular space, while routing cannot safely create a second effective side by widening one slot. |
| Titanic JA outer ordinary clearance | Parallel routing + obstacle arbitration | Baseline outer clearance 2.5px; pair/bundle 0.1px; corridor 0.3px. Two routes remain obstacle-influenced and one ordinary route changes under pair/bundle/corridor. |
| Relation-label clearance | Relation-label placement coupled to route corridor | Titanic JA internal label clearance improves to 83.9–84.5px under pair/bundle/corridor, but this consumes outer clearance. Titanic EN corridor falls to 9.9px and ownership remains negative. |
| Relation-label ownership / association | Relation-label presentation | Titanic EN baseline ownership is -11.9px; pair/bundle remains -11.8px and corridor -9.2px. Route separation alone does not guarantee that a long label is perceived as belonging to its own Relation. |
| Endpoint angular capacity | Endpoint-plan authority | Titanic EN authoritative endpoint-plan remains `capacity-shortage` with `no-group-candidate` in the bounded portfolio. Cheap route/lane metrics cannot replace this authority. |
| Shared multi-bundle endpoint | Endpoint-plan + Parallel bundle coupling | Shared-bundle synthetic is feasible, but conflicting bundles return `capacity-shortage`; the outer corridor and angular demand are a joint endpoint resource. |
| Ordinary route churn | Routing arbitration / bundle interaction | Canonical Titanic JA pair/bundle/corridor changes one ordinary route; the angular-relief counterfactual changes nine ordinary routes. More relief is therefore not a safe general fix. |
| Obstacle influence | Ordinary routing and bundle obstacle policy | Titanic JA baseline and fixed spacing retain two obstacle-influenced parallel routes. A joint incident portfolio removes that influence in the measured arm but changes route geometry and is not a Product adoption candidate. |
| Node separation and viewport usability | Structural Placement / viewport fit | No new Initial Placement was introduced. The measured arms retain Product Node separation and fit behavior; these are prerequisites, not proof of label or ownership quality. |

## What improved Node geometry can and cannot do

The placement counterfactuals show that geometry is a real input. Mirror and
rotation alter endpoint angular capacity, bundle side bias, label clearance,
and outer clearance under unchanged routing semantics. The angular-relief
counterfactual can improve outer clearance and side balance in Titanic EN, but
it also reduces Node separation and changes several ordinary routes. That is
not a safe production geometry rule.

The following problems can naturally improve when geometry gives the bundle
more angular room:

- a genuine endpoint-sector shortage;
- one-sided placement caused by neighboring Node angles;
- outer ordinary clearance when a usable alternate side exists; and
- obstacle exposure caused by a poor initial incident direction.

The following remain routing/label-specific even with better geometry:

- long-label envelope competition inside a bundle;
- Relation-label ownership when a label is closer to another route than its
  own route;
- bundle-vs-outer-ordinary corridor allocation;
- obstacle arbitration after routes compete for the same side; and
- ordinary-route churn caused by sequential occupied-path decisions.

The result is a coupling boundary, not permission to move routing or final
label placement into Structural Placement.

## Canonical and difficult results

### Lighthouse

The baseline has zero routed crossings, 22.7px lane separation, 10.7px
Relation-label clearance, 44.8px minimum ownership margin, and 7.2px outer
clearance. Pair/bundle spacing raises lane separation to 31.8px and label
clearance to 19.5px, but reduces outer clearance to 5.1px. No ordinary route
changes. This is a measurable internal improvement with an external-clearance
trade-off, not a complete quality closure.

### Titanic EN

The baseline has 5.6px lane separation, 7.5px label clearance, -11.9px
ownership margin, 6.2px outer clearance, and side bias 4.33. Pair/bundle
spacing barely changes lane separation, improves label clearance to 26.6px,
but worsens side bias to 5.66 and leaves ownership negative. Corridor-aware
returns 5.5px lane separation, 9.9px label clearance, -9.2px ownership, and
1.6px outer clearance, with one ordinary-route change. The authoritative
endpoint-plan arm returns `capacity-shortage` / `no-group-candidate`.

### Titanic JA

The baseline has 33.8px lane separation, 14.5px label clearance, 45.9px
ownership, 2.5px outer clearance, and two obstacle-influenced routes.
Pair/bundle raises internal lane and label clearance to 47.2px and 83.9px,
but outer clearance falls to 0.1px and one ordinary route changes. Corridor
does not recover the lost external gutter. A joint incident portfolio produces
16.4px outer clearance, but only after changing the selected route set and
one ordinary route; it is not a new accepted candidate.

### Apollo

Apollo is a useful no-parallel control in this checkpoint. The parallel arms
do not change its presentation. It prevents a false conclusion that every
remaining Product visual issue belongs to Parallel routing.

### Synthetic controls

The long/short-label and reverse-direction controls preserve deterministic
physical-side ordering but show that label ownership and outer clearance can
remain coupled. Multiple ordinary and asymmetric controls show that side bias
can persist or change under mirror/rotation. Shared parallel bundles remain
feasible in the measured case; conflicting parallel bundles return an
authoritative `capacity-shortage`. This is the strongest evidence that a
group-level capacity decision is needed instead of a larger constant offset.

## Actual Product inspection and smoke check

A small Actual Product smoke check was performed using the existing ECR3
Actual Product review surface, not a diagnostic renderer alone:

- Titanic EN `parallel-pair-16` and `parallel-bundle-16` were opened on the
  normal App surface with canonical Dataset, routing, labels, fit, and
  interaction enabled;
- Titanic JA `parallel-corridor-aware` was opened on the same surface and
  inspected after render stabilization; and
- the graph was zoomed once for closer label/bundle inspection.

The surface rendered successfully with the expected Dataset and graph
controls. No blank surface, broken loading state, or obvious catastrophic
Node overlap was observed in the smoke check. At the closer view, the central
Titanic incident bundle still had dense route/label competition and did not
provide sufficiently unambiguous Relation-label association for formal visual
acceptance. This smoke check is diagnostic only; it is not Human Review or
acceptance evidence.

No interaction semantics, Dataset state, coordinates, or manual placement was
changed during inspection.

## Architecture disposition

The existing responsibility boundary is sufficiently clear to advance to the
independent Self-loop Angle / Ordinary Edge Interaction track, while keeping
Parallel / Relation-label quality follow-up open. Advancing Self-loop does not
mean that Parallel quality is accepted.

Within the Parallel / Relation-label track, fixed pair/bundle/corridor spacing
should not be continued as the primary direction. The next bounded formulation
should make one allocation decision for:

- ordered internal lanes;
- Relation-label envelopes and ownership;
- outer ordinary-Relation gutter;
- obstacle guard; and
- endpoint angular capacity / shared-bundle demand.

It must return explicit `feasible` or `capacity-shortage`, preserve ordinary
routing and final label authority, bound candidate count, and pass the same
Product-authoritative evaluator. No Product provider or default change is
authorized by this checkpoint.

## Human Review and knowledge status

**NOT READY FOR HUMAN REVIEW.** No new candidate earned a formal review
handoff. Existing historical Human Review evidence was not inherited.

This remains repository-local evidence. No new cross-repository Knowledge
Decision or reusable knowledge entry is warranted yet.
