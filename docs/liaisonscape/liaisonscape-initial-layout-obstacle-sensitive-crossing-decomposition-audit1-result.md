# LiaisonScape Initial Layout Obstacle-sensitive Crossing / Placement-vs-Presentation Decomposition Audit 1

Date: 2026-09-13

## Decision

**RETUNE the structural formulation; keep the parallel-Edge and Self-loop
presentation work as separate tracks.** The audit establishes a reusable
placement-sensitive signal in some graphs, but it does not establish a
quality-safe placement rule. Titanic's observed crossing/label problem is not
explained by the current Product router's Node-obstacle influence predicate.

Product default/adoption remains `HOLD`, the production provider remains
`NOT ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`.
No new candidate inherits G3 or Frontier-12 human evidence.

## Audit method

The LiaisonScape diagnostic gained an opt-in
`OBSTACLE-SENSITIVE-PLACEMENT-AUDIT-v1` seam. It reuses the authoritative
Product route, Relation-label, Node-label, feedback, and metric pipeline. For
each selected arm it:

1. identifies non-endpoint Nodes whose actual route samples enter the existing
   60-unit `RELATION_ROUTE_NODE_INFLUENCE_RADIUS`;
2. records the affected routes, crossing categories, nearest obstacle, and
   route/corridor metrics; and
3. evaluates eight deterministic cardinal/diagonal one-Node moves of one
   `INITIAL_ENTITY_CLEARANCE` (76 units) around each inferred obstacle.

The moves are an audit counterfactual, not a provider or routing change. No
fixture name, person name, ID, coordinate, or presentation authority is
embedded in the rule. The crossing categories are derived from the graph:
ordinary route crossing, parallel-relation presentation, and self-loop
interaction.

## Matched evidence

The direct-current control used one authoritative presentation for the base
and then the bounded local moves. Counts are
`crossings / Relation-label hits / labelNear20`.

| Cell | Base | Obstacle Nodes | Crossing cause | Crossing-reducing moves | Balanced crossing-reducing moves |
| --- | ---: | ---: | --- | ---: | ---: |
| Lighthouse EN | 8 / 4 / 6 | 2 | 5 ordinary, 2 parallel, 1 self-loop interaction | 4 | 0 |
| Lighthouse JA | 8 / 2 / 6 | 2 | 5 ordinary, 2 parallel, 1 self-loop interaction | 4 | 0 |
| Titanic EN | 4 / 2 / 3 | 0 | 2 ordinary, 2 parallel | 0 | 0 |
| Titanic JA | 4 / 1 / 2 | 0 | 2 ordinary, 2 parallel | 0 | 0 |
| Apollo EN | 6 / 2 / 2 | 1 | 6 ordinary | 4 | 0 |
| Apollo JA | 6 / 3 / 4 | 1 | 6 ordinary | 4 | 3 |
| synthetic:k7-7 | 186 / 22 / 32 | 13 | ordinary routes | 41 | 16 |

“Balanced” means that the move reduced crossings without increasing
Relation-label hits, label-nearness, label overlap, or Node overlap. It is a
diagnostic screen only; it is not a human-quality acceptance criterion.

The structural-native-small selected arm had no inferred obstacle Node on the
canonical cells; its remaining Apollo EN/JA ordinary crossing therefore did
not present as an obstacle-sensitive route under this contract. The frontier
control on `synthetic:k7-7` did expose eight obstacle Nodes and 30
crossing-reducing moves, with 17 balanced counterfactuals. That dense result
shows that the signal is not canonical-fixture-only, but also shows the cost
and instability of applying local moves in a crowded graph: 76 audit calls
for the frontier arm, about 13.0 seconds including the audit, versus the
frontier base's bounded presentation run.

## Titanic causal boundary

Titanic EN/JA is the requested obstacle-sensitive test, but the actual trace
does not support the proposed obstacle explanation. In the current control,
the crossing route set was `r5`, `r7`, `r10`, `r11`; `r10` and `r11` are the
parallel Relation pair, while the ordinary crossings involve `r5`/`r7`.
Their nearest non-endpoint Nodes were approximately 65.7, 65.8, 98.1,
106.0, and 114.0 graph units away, all outside the router's 60-unit Node
influence radius. No inferred obstacle Node was available for a local causal
move, and the same four-crossing base was observed in EN and JA.

The associated pressure was instead concentrated in route/label corridor and
short usable-span signals (including the known parallel/long-label pattern).
Consequently, changing Titanic Node ordering or a generic one-Node move has
not been demonstrated as the cause of the presentation defect. The issue is
classified as a mixed ordinary-route arbitration plus pre-existing parallel
Relation presentation residual, not as a Frontier/structural candidate-only
defect.

## Placement-sensitive evidence elsewhere

Lighthouse exposed `maya` and `lighthouse` as obstacles influencing the
`daniel-clara` route. Apollo exposed `nasa` influencing `entity-4`. Moving
these inferred Nodes can reduce some crossings, which is evidence that
placement can affect downstream routing. However, no Lighthouse or Apollo EN
move reduced crossings while keeping all audited label/overlap metrics
non-worse; Apollo JA had three balanced counterfactuals but did not establish
a deterministic general rule. The best Lighthouse moves also changed the
crossing route set, illustrating that a scalar crossing improvement can trade
one presentation defect for another.

The dense k7-7 audit similarly found many obstacle-influenced Nodes and local
crossing reductions, but the large candidate volume, route-set changes, and
label/fit trade-offs prevent treating the result as quality-safe. This is
diagnostic evidence for a future density-aware structural objective, not an
implemented retune.

## Presentation residuals and next direction

Parallel Relations remain a presentation responsibility. The Titanic EN/JA
parallel pair and its long horizontal-label association issue were not fixed
or credited to Initial Layout. Lighthouse also exposed one self-loop/ordinary
route interaction; it remains a Self-loop/routing presentation issue even
though a local placement counterfactual can change whether that crossing is
visible. No Self-loop or parallel-spacing implementation changed here.

The structural formulation is therefore `RETUNE`: retain obstacle influence,
route corridor pressure, and local topology as research signals, but require a
multi-metric, screen-space-aware acceptance rule and matched audit before
putting such a rule into a candidate generator. Do not hard-code the Titanic
layout. The next independent presentation checkpoint may proceed to parallel
Edge spacing; it must remain separate from Initial Layout attribution.

## Boundaries and validation

Only the diagnostic audit seam and its regression test were changed in
LiaisonScape. Product default/adoption, stored/mixed/coordinate-less
authority, round-once, persistence, dirty-state, Save Coordinates, routing,
labels, Self-loops, connectors, and canonical fixtures were unchanged. The
existing G3/Frontier-12 user evidence remains scoped to those arms.

The new audit test passed. Full LiaisonScape test, lint, production build, and
diff-check gates are required for the implementation checkpoint. E2R-SPEC
validation is required for this record. No push, tag, release, deploy, or
publication occurred.
