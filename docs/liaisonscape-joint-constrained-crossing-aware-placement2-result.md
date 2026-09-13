# LiaisonScape Joint-Constrained Crossing-Aware Placement 2

Date: 2026-09-14

## Decision

**PIVOT / NOT READY FOR HUMAN REVIEW.** The tested joint projection establishes
useful hard/soft boundaries, but it does not make topology crossing quality and
screen-space capacity coexist reliably. Post-generation continuous projection
is not the next main formulation. Any further single-placement research should
construct topology cells and endpoint capacity together before coordinates are
committed; otherwise the project should evaluate fast Initial Placement plus an
explicit High-quality Auto Layout responsibility split.

Product default/adoption remains `HOLD`, production provider remains `NOT
ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`. No Product
behavior, Dataset authority, persistence semantics, routing/label authority, or
existing Human evidence changed.

## Audit scope and formulations

This checkpoint carried forward the three bounded families from General
Crossing-Aware Placement 1 and added a fourth:

- compact guarded grids: safe fit/separation but weak dense topology quality;
- continuous topology packing: strong crossings but unsafe overlaps/labels;
- topology-to-grid projection: hard separation but loses crossing quality; and
- **joint constrained topology projection**: six strong crossing-ring,
  ordered-stress, and structural-twin sources, each projected into wide and
  balanced envelopes with 180 deterministic separation-projection passes.

The new generator is pure browser-compatible JavaScript and bounded to 64
Nodes, 256 input Relations, twelve source/shape arms, and fixed iterations.
Candidates below a 144.5 graph-unit minimum separation are rejected before
authoritative presentation; nine to twelve arms survived depending on the
topology. No fixture ID, stored coordinate, Product route, or final label
coordinate enters placement generation.

## Hard and soft responsibilities

The experiment treated these as hard candidate boundaries:

- no dangerous Node overlap;
- graph-space minimum Node-center separation of approximately 145;
- bounded wide/balanced extent envelopes;
- full Product presentation hard defects at authoritative selection; and
- endpoint-plan `feasible` versus explicit `capacity-shortage` after selection.

Screen-space separation could not be guaranteed from graph-space separation
alone because viewport fit is coupled to total extent. A fixed cheap endpoint
angle threshold was deliberately not made hard: Titanic selected candidates had
only about 5.7 degrees of minimum incident angular gap yet remained endpoint-
plan feasible, while Apollo candidates with 17.8--25.1 degrees failed combined
presentation in the endpoint audit. Crossing count, route length, mild angular
pressure, corridor deficit, compactness, and balance therefore remained soft
comparative evidence.

## Canonical Product-presentation evidence

All six selected candidates had zero Node overlap. Lighthouse and Titanic had
zero crossings, Relation-label hits, and near hits. Apollo retained one routed
crossing in EN/JA; Apollo EN also had one near hit. FitScale was .431--.464 and
screen-space minimum Node separation was approximately 62--70 pixels, versus
the stronger Frontier screen separation on most cells. Runtime was about
.24--.36 seconds with 8--13 authoritative evaluations.

Endpoint-plan results on the exact selected positions were:

- Lighthouse EN/JA and Titanic EN/JA: feasible;
- Titanic/Lighthouse plans changed one ordinary route in most cells;
- Apollo EN/JA no-parallel controls: `capacity-shortage` with reason
  `combined-presentation`, despite the cheap minimum-angle proxy looking safe.

This is direct false-safe evidence. The cheap angular/corridor proxy is useful
for diversity and rejection of extreme dense pressure, but cannot replace the
existing Product presentation plus endpoint plan.

## Dense and perturbation evidence

Counts are routed crossings / Relation-label hits / `labelNear20`; references
are retained adaptive Frontier results.

| Case | Reference | Joint constrained | Runtime | Evaluations |
| --- | --- | --- | ---: | ---: |
| k7-7 | 129 / 8 / 20 | 206 / 15 / 29 | 1.65 s | 9 |
| k6-8 | 123 / 4 / 15 | 100 / 10 / 19 | 1.64 s | 11 |
| k8-8 | 229 / 16 / 32 | 394 / 27 / 37 | 2.23 s | 9 |
| k5-9 | 104 / 7 / 20 | 74 / 10 / 21 | 1.50 s | 11 |
| k7-7 minus one | 137 / 9 / 21 | 101 / 8 / 18 | 1.54 s | 10 |

The topology signal was partly retained: k6-8, k5-9, and the one-Relation
perturbation improved crossings, and the perturbation also improved the full
hit/near tuple. It was not stable across the near-symmetric family: k7-7 and
k8-8 regressed substantially. Every selected dense arm avoided Node overlap,
but fitScale .431--.464 converted the approximately 145 graph-space separation
to only about 62--67 screen pixels. Dense cheap minimum incident gaps were
0.1--1.0 degrees and coarse corridor deficits were 1,326--2,080; these signals
correctly identify severe pressure but do not identify the authoritative winner
or prove a repair.

Thus relative topology order alone is insufficient. Structural twins are a
real crossing contributor, but their spoke geometry concentrates endpoint
angles. Ring/order relations survive projection better on sparse cells, while
repulsion can reorder local neighborhoods enough to destroy dense crossings.

## Label, Parallel, and responsibility attribution

The deterministic corridor proxy uses Relation-label length only as a coarse
straight-corridor demand and never decides final label placement. It correlates
with severe dense label pressure but has canonical false-safe/false-alarm
boundaries. Final Relation-label evidence continues to come from Product
presentation.

Any improvement to Parallel/Relation-label geometry from these coordinates is
secondary evidence only. Parallel presentation must be re-evaluated after a
viable placement candidate exists; it is not closed here. Self-loop remains an
independent track. Routing-issued capacity negotiation remains a bounded
response to a true shortage, not a substitute for globally safe placement.

## Next bounded step

Do not continue tuning envelope size, repulsion strength, or a single weighted
score. The remaining credible single-placement hypothesis is a discrete,
feasibility-first topology-cell/port assignment that:

1. preserves selected relative angular/local topology order as a constraint;
2. allocates distinct screen-capacity cells rather than projecting afterward;
3. reserves coarse endpoint sectors and label corridors during assignment;
4. validates a small Pareto set through unchanged Product presentation and the
   endpoint plan; and
5. fails explicitly when capacity cannot be allocated.

That architecture is materially different from this projection family. Before
implementing it broadly, a bounded feasibility checkpoint should determine
whether the discrete state space stays small. If not, evidence now supports
moving to the Initial Placement / explicit High-quality Auto Layout split
rather than another continuous-placement retune.

## Validation and evidence

Machine evidence is stored in LiaisonScape
`experimental/structural-formulation3/audit.json`; endpoint-plan evidence used
the existing attribution audit with an explicit placement-ablation input. The
full LiaisonScape suite, lint, production build, diff checks, and E2R-SPEC
validation pass at closure. No Human Review handoff was prepared.
