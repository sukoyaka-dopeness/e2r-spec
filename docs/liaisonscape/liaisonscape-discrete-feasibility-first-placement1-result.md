# LiaisonScape Discrete Feasibility-First Structural Placement 1

Date: 2026-09-14

## Decision

**PIVOT / NOT READY FOR HUMAN REVIEW.** A discrete cell-assignment prototype
is small on canonical sparse graphs, but its state space reaches the 25,000
state bound on Titanic and every dense control. Under the tested topology order,
sector and corridor propagation returns no feasible dense plan. This does not
prove that every discrete formulation is impossible; it does show that the
first production-native cell/sector formulation is not a practical bounded
solver or Product candidate.

Product default/adoption remains `HOLD`, production provider remains `NOT
ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`. No Product
behavior or existing Human evidence changed.

## State representation and propagation

Each plan uses one of six deterministic topology scaffolds (crossing-ring,
ordered-stress, or structural-twin, in two orientations), orders Nodes by the
scaffold, and assigns them to distinct wide or staggered discrete cells. The
bounded search keeps at most 25,000 states per family and two solutions per
family. Cell distance provides a baseline Node-separation guarantee. During
partial assignment it propagates:

- a minimum incident angular gap of 8 degrees;
- a conservative straight Relation corridor demand of 20 units plus a capped
  label-length component; and
- deterministic nearest-anchor branching, capped to two choices for the first
  Node and eight thereafter.

The corridor is only a coarse rejection signal. Final routing, labels, endpoint
plans, and viewport behavior remain Product-authoritative and were not moved
into the placement module.

## State-space evidence

| Input | Families | Feasible families | Maximum states/family | Main result |
| --- | ---: | ---: | ---: | --- |
| Lighthouse EN/JA | 12 | 12 | 53 | small, all retained |
| Titanic EN/JA | 12 | 9 | 25,000 | state cap reached |
| Apollo EN/JA | 12 | 12 | 175 | small, all retained |
| k7-7 | 12 | 0 | 25,000 | sector-pruned / capped |
| k6-8 | 12 | 0 | 25,000 | sector-pruned / capped |
| k8-8 | 12 | 0 | 25,000 | sector-pruned / capped |
| k5-9 | 12 | 0 | 25,000 | sector-pruned / capped |
| k7-7 minus one | 12 | 0 | 25,000 | sector/corridor-pruned / capped |

Canonical sparse graphs therefore do not expose the same combinatorial burden:
they reach solutions in roughly 13--175 states. The 13-Node Titanic graph
already needs the cap for three families, demonstrating that the issue is not
limited to synthetic 16-Node scale. Dense family totals exceeded 1.5 million
sector prunes across twelve families; no dense plan was passed to Product
presentation. A no-solution result is an explicit shortage in this diagnostic,
not a fallback accepted as a placement.

The main risk is that the apparently helpful sector guard is not a safe global
proof: a partial local angular gap can reject a later assignment that would
have used a different port arrangement, while relaxing it returns to state
explosion. Similarly, the coarse corridor guard has no exact route/label
semantics and cannot replace endpoint-plan evaluation.

## Product-authoritative canonical control

The nine/twelve candidate discrete plans that survived on canonical controls
were sent through the unchanged Product presentation evaluator. They required
10--13 authoritative evaluations and roughly .32--.74 seconds. They produced
zero Node overlap and zero crossings on Lighthouse/Titanic, but Lighthouse had
one Relation-label hit and `labelNear20=2`; Apollo EN had two label hits and
Apollo JA one. FitScale was about .762 and graph-space separation 170. These
are machine observations only and not Human Review evidence. They do not
offset the absence of dense feasible plans.

## Architectural conclusion

The state-space gate fails for the first discrete formulation: topology order,
cell occupancy, endpoint-sector proxy, and coarse corridor demand cannot all be
searched with a small browser-native bounded portfolio. The next step should
not be a larger cap or a universal lower threshold. It should be one of:

1. a narrower graph-decomposition formulation with explicit cross-component
   capacity contracts and a small number of Product-validation finalists; or
2. a formal responsibility split: fast deterministic Initial Placement first,
   with explicit High-quality Auto Layout responsible for presentation-quality
   improvement on dense graphs.

If decomposition cannot keep the state space small without losing the topology
signal, the second option is the more credible release architecture. Parallel,
Relation-label, and Self-loop authorities remain separate tracks.

## Validation and evidence

State evidence is in LiaisonScape
`experimental/discrete-placement-feasibility/audit.json`; canonical Product
control evidence is in `product-audit.json`. The module is pure and bounded,
deterministic across input enumeration, and does not mutate input. No fixture
was copied or altered. Full suite, lint, production build, diff checks, and
E2R-SPEC validation pass at checkpoint closure. No Human Review handoff was
prepared.
