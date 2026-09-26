# LiaisonScape Adaptive Initial Placement Cascade and Endpoint-Plan Safety Checkpoint

Date: 2026-09-13

## Decision

**RETUNE / NOT READY FOR HUMAN REVIEW.** The future adaptive cascade is
recorded as a hypothesis only. A first geometry-derived endpoint-candidate
family reduced generation volume, but it did not retain the oracle's feasible
plans across canonical and synthetic controls. The request-driven placement
side is a useful bounded contract and remains unintegrated; its lifecycle and
whole-graph safety evidence are not sufficient for Product use.

Product default/adoption remains `HOLD`, the production provider remains `NOT
ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`.

## Future hypothesis: Adaptive Initial Placement Cascade

This is a `Hypothesis / future experiment`, not an accepted execution policy:

1. try the fastest bounded placement;
2. accept early when a cheap safety/readability gate is sufficiently reliable;
3. escalate only the difficult Dataset to a more expensive placement; and
4. optionally hand the final stage to an explicit High-quality Auto Layout
   responsibility.

The intended benefit is fast-path completion for ordinary Datasets, not
running every placement method on every open. A future experiment must show
that the cheap gate predicts Actual Product readability and safety, that the
escalation decision is cheap, that fast/medium/high-quality stages have clear
ownership, and that progressive re-layout does not destabilize interaction.
The current endpoint-plan, incident-routing, and capacity-negotiation work can
provide gate evidence: routing-only defects, placement-escalation defects,
cheap structural signals, and defects that require authoritative Product
presentation must remain distinguishable.

This does not change current execution priority. Exact runtime reduction and
the current endpoint/placement attribution work remain ahead of any cascade
implementation.

## Geometry-derived candidate-generation probe

The old conservative family was retained as the matched oracle. The probe
derived a small family before route evaluation from projected Relation-label
width, parallel count, incident ordinary-Relation count, chord length, and
available endpoint half-sector. It produced up to three demand-derived gaps,
up to three symmetric center choices, and only the ordinary policies relevant
to incident ordinary Relations. Full Product presentation remained the
authority at endpoint-plan validation; no routing or label authority moved
into the candidate generator.

The probe reduced typical one-group portfolios from 56--70 candidates to
12--18, and the shared two-bundle case from 126 to 18. Generation measurements
were approximately 79--108 ms for canonical Lighthouse/Titanic cells and
12--32 ms for synthetic one-group controls. These are diagnostic measurements,
not Product runtime claims.

Matched evidence did not support acceptance:

| Control | Geometry-derived result | Evidence |
| --- | --- | --- |
| Lighthouse EN | 18 candidates, capacity shortage | lost the oracle's feasible result |
| Lighthouse JA | 18, feasible | selected plan drifted |
| Titanic EN | 18, capacity shortage | shortage classification retained, no safe candidate |
| Titanic JA | 18, feasible | selected plan drifted |
| Apollo EN/JA | 0 | unchanged no-parallel control |
| 3-parallel obstacle / reverse | 4 each, shortage | lost oracle-feasible results |
| 2 short/short | 18, feasible | selected plan drifted |
| 2 long/short and long/long | 18, shortage | lost oracle-feasible results |
| multiple ordinary / asymmetric | 12, feasible | selected plan drifted |
| shared two bundles | 18, feasible | selected plan matched oracle |
| crowded two bundles | 30, shortage | shortage result matched |

The result is not quality-safe compression. Feasibility retention and
selected-plan identity are separate evidence: a feasible but different plan is
a new candidate, and a capacity shortage must not be hidden by diagnostic
fallback rendering. A geometry-derived family needs either a more conservative
retention contract or a different formulation; no Product-facing candidate is
ready.

## Capacity-negotiated placement safety boundary

The existing Titanic EN structured shortage remains actionable in a diagnostic
counterfactual, but it is not an accepted placement rule. A future request
consumer must obey this pure lifecycle boundary:

- apply only during coordinate-less initial open or a stable idle state, with a
  matching request token and no authored coordinates or manual route/label
  authority;
- defer while a Node is being dragged and during Dataset replacement or
  navigation;
- defer rather than overwrite authored coordinates or manual route/label
  state;
- discard cancellation, stale tokens, and missing requests; and
- never mutate Dataset data, dirty state, persistence, or Save Coordinates as a
  side effect of the decision.

The boundary is implemented as an unintegrated pure contract and covered by
unit tests. It does not itself prove viewport safety, unrelated-route safety,
interaction continuity, or Actual Product readability. Those remain required
before any Product integration. Request absence continues to mean no placement
correction: Lighthouse and other non-shortage cells must not be changed.

## Status and next direction

The geometry-derived candidate family is `RETUNE`, not `ACCEPT`: it is a useful
cost probe but currently unsafe for quality retention. Continue only with a
more conservative demand/retention formulation if it can retain rare feasible
port/sector candidates without restoring the full family. Separately, test
request-driven placement with whole-graph viewport and unrelated-corridor
guards before any Human Review handoff. The Adaptive Initial Placement Cascade
remains a deferred future hypothesis, not the current priority.

No Product default, provider contract, Dataset, coordinate ownership,
persistence, or Human evidence was changed by this checkpoint.
