# LiaisonScape Initial-Layout Stage-2 Architecture Redesign 2

Date: 2026-09-12

Status: BOUNDED STATE-SPACE BENEFIT NOT ESTABLISHED; PIVOT; RELEASE BLOCKER REMAINS

## Scope and retained reference

This checkpoint asks whether Stage 2 can be reconstructed as a bounded
state-space or alternative search formulation that materially reduces full
Product presentation calls while retaining the ECR3
`adaptive-cheap-ranking` quality/runtime reference.

The retained settings were:

```text
E2R_PRESENTATION_FINALIST_LIMIT=2
E2R_RELAXATION_STEP_MODE=omit-fine
E2R_PRESENTATION_GEOMETRY_CACHE=1
E2R_PRESENTATION_EXACT_CANDIDATE_REUSE=1
E2R_RELAXATION_PRIORITIZATION=adaptive-cheap-ranking
E2R_RELAXATION_ADAPTIVE_MARGIN=0.10
```

No alternative search was connected to Product. The audit used the actual
Stage-2 implementation and a fresh six-cell ECR3 run. This was sufficient to
test the feasibility boundary without introducing a new candidate whose
selected output would require a new human review.

## Candidate state and transition boundary

The actual evaluator state is not only Node coordinates. A state that can
reproduce the next authoritative result must include, at minimum:

```text
S = (Node positions,
     ordered occupied-route state,
     Relation-label placements,
     Node-label placements,
     feedback state)
```

A single-node move is a transition from `S` to a candidate state. Its
acceptance depends on the full presentation score, and an accepted transition
changes the state seen by later transitions. The current ECR3 implementation
has one active frontier and preserves the original sequential candidate order.
That is already a width-one state-space search; replacing its loop with a
different name does not remove its authoritative evaluations.

An exact bounded beam would retain multiple frontiers, but each frontier has
the same state-dependent transition problem. Without a proven dominance or
dependency certificate, each retained transition still needs the full
presentation evaluator. A bounded macro-transition or depth cap can reduce
calls only by omitting transitions or changing the accepted state, so it is a
quality-changing candidate rather than an exact ECR3-preserving formulation.

## Fresh matched ECR3 audit

The following table is a fresh representative run. Wall time is host-load
sensitive. `full` is the total full presentation-evaluation count, `Stage 2`
includes repair and relaxation, and `relax` excludes the relaxation start
state. The selected digest and metrics are the retained ECR3 result.

| Fixture / locale | Nodes / edges | Candidate plans / distinct states | Full / Stage 2 / relax | E2E / Stage 2 ms | Accepted trajectory | Digest | Score | Extent / fit | Route median / max |
| --- | ---: | ---: | ---: | ---: | ---: | --- | ---: | --- | ---: |
| Lighthouse EN | 10 / 14 | 160 / 151 | 198 / 154 / 110 | 5,254 / 3,507 | 25 | `dd80b93415a5` | 50,185.66 | 676.3 × 447.2 / 0.602 | 188.2 / 556.1 |
| Lighthouse JA | 10 / 14 | 160 / 152 | 196 / 152 / 106 | 5,198 / 3,463 | 25 | `b66c8fe80f95` | 31,484.58 | 639.2 × 420.2 / 0.636 | 188.2 / 537.6 |
| Titanic EN | 13 / 12 | 208 / 196 | 190 / 146 / 102 | 4,982 / 3,335 | 23 | `766ce8b5e0b1` | 1,697.23 | 816.7 × 600.6 / 0.463 | 320.8 / 686.0 |
| Titanic JA | 13 / 12 | 208 / 197 | 190 / 146 / 103 | 4,554 / 2,934 | 11 | `933102bd5357` | 1,127.75 | 784.0 × 397.0 / 0.668 | 239.1 / 348.5 |
| Apollo EN | 9 / 11 | 144 / 141 | 163 / 103 / 57 | 3,147 / 1,604 | 10 | `e499f44620a8` | 1,018.83 | 626.6 × 437.1 / 0.615 | 202.2 / 348.5 |
| Apollo JA | 9 / 11 | 144 / 138 | 180 / 120 / 75 | 3,389 / 1,891 | 15 | `a905475af54c` | 1,007.31 | 609.8 × 443.5 / 0.607 | 188.3 / 367.3 |

All six selected results had zero crossings, zero Relation-label route hits,
zero label overlap, and zero `labelNear20`. The selected digest, trajectory,
and hard metrics match the retained ECR3 reference. No alternate selected
output was produced.

The observed action branching is already 16 plans per Node for the retained
two-step schedule: 144 plans at nine Nodes, 160 at ten Nodes, and 208 at
thirteen Nodes. After feasibility and candidate-state de-duplication, 138–197
distinct states remained, while 57–110 relaxation candidates still required
full authoritative evaluation. The accepted trajectory length varied from
11 to 25, including locale-sensitive differences. This is state explosion at
the first transition layer, before composing multi-step states.

## Feasibility result

The exact formulation that preserves ECR3 is:

```text
one sequential frontier
× original candidate order
× full presentation validation per admissible transition
```

It is the existing ECR3 loop and yields no new authoritative-call reduction.
Keeping more than one frontier increases the number of state-dependent
transitions. Keeping fewer transitions requires a surrogate, dominance proof,
or hard state bound; Reduction 1–4 provide no such certificate, and the
dependency audit showed that route occupancy and feedback propagate through
the ordered evaluator. A macro or bounded-depth formulation therefore cannot
inherit ECR3 quality or human acceptance merely from using the same objective.

The fresh runtime range was 3.15–5.25 seconds end-to-end and 1.60–3.51
seconds for Stage 2. These values are host-load-sensitive and remain above
the roughly-two-second planning target in several cells. They do not show a
new runtime path; they confirm that the current expensive work is the
authoritative transition validation itself.

```text
bounded state-space exactness       = only width-one ECR3 semantics
additional safe call reduction     = none established
bounded beam/macro quality safety  = not established
state-space benefit                = not established
disposition                        = PIVOT
```

The next research direction may examine a genuinely different bounded
state-space or Stage-2 architecture, but it must first define a composable
authoritative state or accept a new human-review candidate. A later global
spacing / zoomed-out initial-placement hypothesis is a possible follow-on,
but it was not implemented or evaluated here.

## Boundaries and validation

- Full Product presentation remains the quality authority.
- Product default/adoption, canonical samples, accepted final-coordinate
  canonicalization, persistence, and stored/mixed/coordinate-less authority
  were not changed.
- Routing, Relation-label, Node-label, Self-loop, connector, glyph, and CSS
  authority remain downstream presentation responsibilities.
- ECR3 human ACCEPT was not extended to a new candidate.
- Historical Fresh evidence, Fresh12 canonical Human Review, and governed
  lineage were not changed.
- No push, tag, release, deploy, or publication was performed.

Validation:

- six-cell fresh ECR3 matched audit: PASS;
- LiaisonScape suite: 368/368 PASS;
- lint: PASS;
- production build: PASS;
- E2R-SPEC `npm run validate`: PASS;
- diff check: PASS.

Decision: `PIVOT`. The Initial Layout Release blocker remains active and
Product default behavior remains unchanged.
