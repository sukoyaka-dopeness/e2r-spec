# LiaisonScape Initial-Layout Post Locality Presentation Approximation 1

Date: 2026-09-11

Status: LOCALITY SIGNAL REAL; PROTOTYPE RETUNE OR ALTERNATIVE REQUIRED

## Scope and baseline

This checkpoint investigates whether the expensive Post presentation
evaluation can be approximated within a bounded local dependency region. The
baseline is the current diagnostic `finalist-limit=2 + omit-fine` relaxation
search. Full Post and the finalist-limit=2 candidate remain references only.

The work does not add a Product provider, change Product default behavior, or
move routing, Relation-label, Self-loop, connector, or glyph authority into
Initial Layout. The new evaluator is an explicit diagnostic-only parameter:

```text
E2R_RELAXATION_APPROXIMATION=local-screen
```

When enabled, it computes a bounded local presentation estimate for each
relaxation move. Only candidates whose local estimate improves over the local
current state receive full Product presentation validation. An accepted move
and the selected result still come only from full validation. With the
parameter unset, the existing full evaluator is unchanged.

## Actual dependency mechanism

The existing dependency trace shows that a small Node move does not have a
purely geometric radius boundary. Automatic routes are processed in a
canonical order and later routes consume occupied paths from earlier routes.
A move can therefore change an incident route, alter the occupied-path prefix,
and change a later remote route. Relation-label placement consumes the routed
paths and its sequential occupied-label prefix; Node-label feedback can then
produce another downstream change.

Representative omit-fine trace runs found:

| Fixture / locale | Candidate moves | Moves with changed routes | Moves with remote route propagation | Accepted moves with remote propagation |
| --- | ---: | ---: | ---: | ---: |
| Lighthouse EN | 157 | 157 | 78 (49.7%) | 5 |
| Titanic EN | 186 | 179 | 37 (19.9%) | 5 |

The previously audited replay mechanism remains rejected as an exact reuse
authority: on Titanic EN, only 71/268 replay candidates were exact and 197
differed, with the first mismatch at first-pass route geometry. This
checkpoint does not reactivate that replay implementation.

The new local scope is the union of the moved Node(s), their incident
one-hop graph neighbors, and Nodes within `2.5 * INITIAL_ENTITY_CLEARANCE`
(190 units) of the moved Node(s), with the induced local Relations. This is a
bounded diagnostic approximation, not a claim that the Product dependency
graph is bounded by that radius.

## Local approximation audit

The audit mode computed the local estimate and full score for every relaxation
candidate, without using the estimate to skip validation. It measures recall
of the full improvement decision rather than treating local score agreement as
quality proof.

| Fixture / locale | Avg local Nodes | Avg local Edges | Local eval avg | Predicted improvements | True positives | False positives | False negatives |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 6.5 | 8.1 | 11.5 ms | 43/157 | 6 | 37 | 5 |
| Lighthouse JA | 6.3 | 7.8 | 10.9 ms | 47/146 | 11 | 36 | 16 |
| Titanic EN | 6.3 | 5.9 | 10.2 ms | 53/186 | 23 | 30 | 15 |
| Titanic JA | 6.6 | 6.0 | 9.5 ms | 48/208 | 9 | 39 | 3 |

The local signal is real: it reduces the evaluated scope by roughly one third
on these public samples. It is not a reliable improvement gate yet. False
negatives occur in all four reviewed fixture/locale runs, and the rate is
material for Lighthouse JA and Titanic EN. Remote route propagation is
therefore not safely discardable based on this static locality definition.

## Bounded prototype result

The non-audit prototype was run on the same four fixture/locale cells.

| Fixture / locale | Full omit-fine wall / full evals | Local-screen wall / full evals | Full eval reduction | Wall reduction | Selected-score change |
| --- | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 9,858 ms / 388 | 9,120 ms / 278 | 28.4% | 7.5% | +2.3% |
| Lighthouse JA | 9,416 ms / 375 | 8,903 ms / 276 | 26.4% | 5.4% | +13.6% |
| Titanic EN | 10,211 ms / 413 | 9,262 ms / 285 | 31.1% | 9.3% | +1.5% |
| Titanic JA | 10,472 ms / 440 | 8,922 ms / 280 | 36.4% | 14.8% | +4.9% |

The local evaluator itself costs approximately 9.5-11.5 ms per uncached
evaluation, compared with approximately 23.6–24.7 ms for a full evaluation.
Consequently, reducing full evaluation count does not translate into a
proportional wall-time reduction. The prototype remains roughly 8.9-9.3
seconds on these cases, far from the earlier planning target of approximately
2 seconds for public-sample scale.

Full validation retained zero reported crossing, label-hit, and Node-overlap
metrics for the selected prototype results where checked. Those hard-safety
metrics do not establish visual quality or Post preference. The selected
machine scores worsened in every reviewed cell, most strongly in Lighthouse
JA, because the local gate missed full-score improvements and changed the
accepted search path.

## Quality and human-review boundary

No Actual Product human visual acceptance was claimed for the new
local-screen-selected positions. Their selected positions and downstream
rendered presentation differ from the omit-fine baseline, so the following
must remain a human review requirement before any further candidate use:

- current versus omit-fine versus local-screen on Lighthouse EN/JA;
- current versus omit-fine versus local-screen on Titanic EN/JA;
- Node cohesion, spacing, spread, viewport fit, Node-label and
  Relation-label readability, crossings/crowding, self-loop presentation, and
  any local-screen-only regression; and
- the Lighthouse EN and Lighthouse JA machine-score trade-offs.

Machine zero-crossing or label-hit results must not close this gate. Apollo
EN/JA were not added to this first locality prototype review because the four
Lighthouse/Titanic cells already show locale and graph-density sensitivity;
Apollo remains a possible follow-up control, not a completed human gate.

## Research direction

```text
remote propagation attribution       = SEQUENTIAL OCCUPIED-PATH / LABEL-PREFIX COUPLING
locality signal                       = REAL BUT NOT YET SUFFICIENT
local approximation recall            = INSUFFICIENT FOR QUALITY GATING
prototype runtime effect              = MODEST NET SPEEDUP
prototype quality evidence            = HUMAN REVIEW REQUIRED; NO PASS CLAIM
prototype disposition                 = RETUNE OR ALTERNATIVE
preferred next direction              = ADAPTIVE FINE-PASS OR DEPENDENCY-AWARE GUARD
Initial Layout Release blocker        = STILL BLOCKED
Product default adoption              = HOLD
Product default behavior              = UNCHANGED
```

The next acceleration work should not simply enlarge the static radius or
accept the local score as a new quality authority. A more promising bounded
hypothesis is to retain omit-fine as the baseline, use locality only to
prioritize or propose candidates, and add an explicit recall/safety guard that
detects likely occupied-path or label-prefix propagation before allowing a
candidate to bypass full validation. Adaptive fine-pass research remains
preferable to the current local-screen gate until the false-negative rate and
net wall-time benefit improve. Any candidate that changes selected positions
requires the Actual Product human comparison listed above.

## Preserved boundaries

- Product default and normal Product initial placement are unchanged.
- The local approximation is diagnostic-only and is not connected to the
  normal Product open path.
- Full Product presentation remains the final validation authority for every
  accepted prototype move and selected prototype result.
- Stored/mixed/coordinate-less authority, Derived ownership, dirty-state, Save
  Coordinates, same-payload reopen, fallback, and persistence semantics are
  unchanged.
- Coarse remains parked and is not restored as quality authority.
- Routing, Relation-label, Self-loop, connector, and glyph/CSS authority stay
  downstream presentation responsibilities.
- No known presentation defect was fixed; no App.tsx refactor was performed.
- Canonical fixtures, historical Fresh evidence, Fresh12 canonical Human
  Review, and governed lineage were not changed.
- No push, tag, release, deploy, or publication was performed.
