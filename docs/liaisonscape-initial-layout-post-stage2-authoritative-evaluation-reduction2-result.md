# LiaisonScape Initial-Layout Stage-2 Authoritative Evaluation Reduction 2

Date: 2026-09-12

Status: PRESSURE-TARGET PROTOTYPE MIXED; RETUNE REQUIRED; RELEASE BLOCKER REMAINS

## Scope and retained reference

This checkpoint follows Stage-2 Authoritative Evaluation Reduction 1. The
ECR3 `adaptive-cheap-ranking` arm remains the retained quality/runtime
reference:

```text
E2R_PRESENTATION_FINALIST_LIMIT=2
E2R_RELAXATION_STEP_MODE=omit-fine
E2R_PRESENTATION_GEOMETRY_CACHE=1
E2R_PRESENTATION_EXACT_CANDIDATE_REUSE=1
E2R_RELAXATION_PRIORITIZATION=adaptive-cheap-ranking
E2R_RELAXATION_ADAPTIVE_MARGIN=0.10
```

The bounded hypothesis tested here is pressure-informed target admission for
post-structural relaxation:

```text
E2R_RELAXATION_TARGETING=pressure
```

The target set is the current structural candidate's presentation-pressure
Nodes plus the existing bounded one-hop/nearby dependency neighborhood. The
original sequential candidate order is preserved, and every admitted
hard-feasible candidate still goes through the full Product presentation
evaluator. This is not top-K retention, dynamic reordering, a cheap screen, or
incremental replay. It is diagnostic-only and does not change Product
authority.

## Why this hypothesis was selected

The preceding cost attribution showed that repair is bounded at 50 evaluations
while relaxation is 58–111 evaluations. Earlier dependency evidence showed
that a Node move can propagate through sequential occupied paths and label
prefixes, so static geometric locality is not sufficient. The pressure target
therefore uses already observed route-crossing, route-label, label-corridor,
short-hop, and nearby-node signals as a conservative candidate-volume probe.

This is only a target-selection hypothesis. It does not prove that a Node
without current pressure cannot improve the authoritative score, and skipped
target groups remain unknown rather than non-improving.

## Matched six-cell comparison

The following sequential measurements use the same ECR3 settings. Wall time is
host-load sensitive; counts, selected output, and hard metrics are the stronger
comparison signals.

| Fixture / locale | ECR3 total / Stage 2 full | Pressure total / Stage 2 full | Relaxation ECR3 → pressure | E2E ms ECR3 → pressure | Stage 2 ms ECR3 → pressure |
| --- | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 198 / 154 | 198 / 154 | 111 → 111 | 3,618 → 3,632 | 2,566 → 2,587 |
| Lighthouse JA | 196 / 152 | 196 / 152 | 107 → 107 | 3,571 → 3,603 | 2,531 → 2,562 |
| Titanic EN | 190 / 146 | 171 / 127 | 103 → 83 | 3,348 → 3,024 | 2,385 → 2,063 |
| Titanic JA | 190 / 146 | 142 / 98 | 104 → 55 | 3,034 → 2,380 | 2,069 → 1,410 |
| Apollo EN | 163 / 103 | 116 / 56 | 58 → 9 | 1,890 → 1,467 | 1,014 → 591 |
| Apollo JA | 180 / 120 | 180 / 120 | 76 → 76 | 2,094 → 2,088 | 1,203 → 1,198 |

Pressure targeting reduced total full evaluations by 10.0% for Titanic EN,
25.3% for Titanic JA, and 28.8% for Apollo EN. The corresponding Stage-2
reductions were approximately 13.0%, 32.9%, and 45.6%. Lighthouse and Apollo
JA had no count reduction because their pressure neighborhoods covered all
Nodes or correctly fell back to the full target set. The observed E2E changes
were approximately -9.7%, -21.5%, and -22.4% in the three reduced cells; the
small Lighthouse increases are within expected wall-time variation.

## Target coverage and dependency risk

| Fixture / locale | Pressure Nodes | Expanded target Nodes | All graph Nodes | Target coverage |
| --- | ---: | ---: | ---: | ---: |
| Lighthouse EN | 10 | 10 | 10 | 100% |
| Lighthouse JA | 9 | 10 | 10 | 100% |
| Titanic EN | 7 | 11 | 13 | 84.6% |
| Titanic JA | 2 | 6 | 13 | 46.2% |
| Apollo EN | 2 | 2 | 9 | 22.2% |
| Apollo JA | 0 | 0 | 9 | full-target fallback |

The savings correlate with narrow target coverage, but that coverage is also
the quality risk. Existing dependency audits recorded remote route propagation
for 49.7% of Lighthouse EN candidate moves and 19.9% of Titanic EN candidate
moves. A static pressure set computed before relaxation cannot establish that
later accepted-state dependencies remain inside the initial target set.

## Selected output and quality evidence

| Fixture / locale | ECR3 score / digest prefix | Pressure score / digest prefix | Hard metrics in pressure result |
| --- | ---: | ---: | --- |
| Lighthouse EN | 50,185.66 / `dd80b934` | 50,185.66 / `dd80b934` | zero crossings, label hits, label overlap |
| Lighthouse JA | 31,484.58 / `b66c8fe8` | 31,484.58 / `b66c8fe8` | zero crossings, label hits, label overlap |
| Titanic EN | 1,697.23 / `766ce8b5` | 1,702.00 / `42596a1b` | zero crossings, label hits, label overlap |
| Titanic JA | 1,127.75 / `933102bd` | 1,179.07 / `055729fe` | zero crossings, label hits, label overlap |
| Apollo EN | 1,018.83 / `e499f446` | 1,046.47 / `4c236d29` | zero crossings, label hits, label overlap |
| Apollo JA | 1,007.31 / `a905475a` | 1,007.31 / `a905475a` | zero crossings, label hits, label overlap |

The selected digest changed in Titanic EN, Titanic JA, and Apollo EN. The
score degradation is small in Titanic EN but material in Titanic JA and Apollo
EN. All reported hard presentation metrics remained zero; this does not prove
visual equivalence, Post-direction retention, or safe omission of the skipped
groups. The ECR3 Actual Product human ACCEPT therefore cannot be inherited by
the pressure-selected output.

The pressure arm is not ready for Actual Product human review as a retained
candidate yet. The machine result is useful evidence for runtime leverage, but
the static target boundary is too narrow and changes the accepted trajectory
in the cells where it saves the most work.

## Decision and next direction

```text
tested hypothesis                    = pressure-informed target admission
original sequential order            = preserved
full presentation authority          = preserved for admitted candidates
maximum total-evaluation reduction   = 28.8% in Apollo EN
maximum Stage-2 reduction            = 45.6% in Apollo EN
quality result                       = MIXED; selected output changed in 3/6 cells
hard-metric result                   = zero in all measured pressure outputs
human review                         = NOT READY; ECR3 ACCEPT not inherited
disposition                          = RETUNE
```

The next bounded attempt should be a conservative pressure guard, not a wider
blind neighborhood: measure target recall against a matched full audit,
retain candidates implicated by accepted-state dependency changes, and fall
back to the full Node target set whenever pressure coverage or dependency risk
is insufficient. If that guard cannot retain the ECR3 trajectory while
removing meaningful authoritative calls, the research should PIVOT away from
static target admission. The full evaluator remains the quality authority;
routing and label ownership remain downstream presentation responsibilities.

## Preserved boundaries and validation

- No Product default or Product adoption was changed.
- No canonical sample, accepted final-coordinate canonicalization, or
  persistence/stored/mixed/coordinate-less authority was changed.
- No routing, Relation-label, Node-label, Self-loop, or connector authority was
  changed or repaired.
- `post-structural-relaxation-v1` remains diagnostic and no Post equivalence is
  claimed.
- Historical Fresh evidence, Fresh12 canonical Human Review, and governed
  lineage were not changed.
- No push, tag, release, deploy, or publication was performed.

Validation:

- matched six-cell diagnostic profile: PASS;
- LiaisonScape existing suite: 368/368 PASS;
- lint: PASS;
- production build: PASS;
- E2R-SPEC `npm run validate`: PASS;
- staged diff check: PASS.

