# LiaisonScape Initial-Layout Stage-2 Authoritative Evaluation Reduction 4

Date: 2026-09-12

Status: NO USEFUL CONSERVATIVE BOUND FOUND; PIVOT REQUIRED; RELEASE BLOCKER REMAINS

## Scope and retained reference

This checkpoint follows Stage-2 Authoritative Evaluation Reduction 3. The
retained ECR3 `adaptive-cheap-ranking` arm remains the quality/runtime
reference:

```text
E2R_PRESENTATION_FINALIST_LIMIT=2
E2R_RELAXATION_STEP_MODE=omit-fine
E2R_PRESENTATION_GEOMETRY_CACHE=1
E2R_PRESENTATION_EXACT_CANDIDATE_REUSE=1
E2R_RELAXATION_PRIORITIZATION=adaptive-cheap-ranking
E2R_RELAXATION_ADAPTIVE_MARGIN=0.10
```

The research question was whether candidate dominance, a conservative score
lower bound, hard-feasibility state, or accepted-state evidence can safely
prove that a candidate cannot improve the current state before invoking the
full Product presentation evaluator. Original sequential acceptance semantics
and full presentation authority were retained throughout the audit.

No Product provider, default behavior, canonical sample, coordinate
canonicalization, persistence semantics, or downstream presentation authority
changed.

## Bound and dominance audit

The existing candidate score is:

```text
presentation defects + optional corridor penalty
+ usable-span penalty + routed median/max length
+ extent + locality penalty + edge-length penalty
```

The available conservative candidate lower bound uses direct endpoint chord
lengths with a deliberately safe attachment allowance, extent, and the
non-negative long-edge term. It omits the expensive route/label defect terms
and other candidate-specific presentation effects. It was run as a probe, not
as a pruning authority:

```text
E2R_RELAXATION_CHEAP_SCREEN=probe
E2R_RELAXATION_LATTICE_PROBE=1
```

Across Lighthouse EN/JA, Titanic EN/JA, and Apollo EN/JA:

```text
lower-bound violations       = 0 observed
lower-bound rejections       = 0 in all six cells
candidate raw duplicates     = 2–7 per cell
configured-position duplicates = 2–7 per cell
```

The zero observed violations are compatible with a conservative bound on this
sample, but the zero rejections show that it has no useful pruning power. The
small duplicate count is already handled by the existing exact presentation
cache and therefore does not yield a new authoritative-call reduction.

The hard-feasibility and displacement checks also run before full evaluation,
but they are safety admission checks rather than a new dominance proof. No
additional candidate-dominance relation was established from the actual score
structure.

## Why accepted-state and dependency bounds are insufficient

The accepted state changes the current score and the route/label environment.
A candidate that is dominated by a cheap geometric quantity in one state can
change sequential occupied-path decisions, Relation-label placement, and
Node-label feedback in another state. Existing dependency evidence recorded
remote route propagation through the ordered presentation pipeline. This makes
the full presentation result state-dependent in a way not captured by the
available scalar lower bound.

An accepted-state guard could become conservative only by retaining all
candidates whose dependency prefix might be affected, or by falling back to
the full target set whenever the bound is not proven. The former has no exact
boundary in the current evidence; the latter removes the reduction. A later
fallback also cannot restore a candidate skipped earlier in the sequential
trajectory.

## Matched ECR3 result

The bound audit left the ECR3 evaluated trajectory and selected result
unchanged in all six cells:

| Fixture / locale | Total full evaluations | Stage-2 full evaluations | Relaxation evaluations | E2E / Stage-2 representative ms | Selected digest prefix |
| --- | ---: | ---: | ---: | ---: | --- |
| Lighthouse EN | 198 | 154 | 111 | 3,697 / 2,634 | `dd80b934` |
| Lighthouse JA | 196 | 152 | 107 | 3,632 / 2,602 | `b66c8fe8` |
| Titanic EN | 190 | 146 | 103 | 3,442 / 2,464 | `766ce8b5` |
| Titanic JA | 190 | 146 | 104 | 3,075 / 2,102 | `933102bd` |
| Apollo EN | 163 | 103 | 58 | 1,950 / 1,063 | `e499f446` |
| Apollo JA | 180 | 120 | 76 | 2,099 / 1,212 | `a905475a` |

The probe reported zero crossings, zero Relation-label route hits, zero
near-label counts, zero label overlap, and zero Node-body overlap in all
selected outputs. These hard metrics confirm safety for the retained ECR3
output, not a new bound or visual equivalence of a skipped candidate.

No bound-based pruning candidate was enabled, so there is no new runtime
reduction to claim. The retained ECR3 reduction remains the prior bounded
12.4–31.9% full-evaluation reduction versus CR2, with its fresh approximately
2.17–4.22 second runtime envelope. The roughly-two-second planning target is
not stably met.

## Decision

```text
useful exact/conservative bound       = NOT ESTABLISHED
bound violations in matched audit    = 0 observed
bound rejection opportunity          = 0 in all six cells
new authoritative-call reduction     = NONE
ECR3 trajectory/output                = retained unchanged
human review                          = not required; no new candidate retained
disposition                           = PIVOT
```

Candidate dominance and scalar lower-bound pruning should not be continued as
if a quality-safe boundary had been found. The next research direction should
be Stage-2 search architecture redesign: for example, an explicitly bounded
state-space formulation or a presentation evaluator architecture with a
formally reusable dependency contract. Such work must keep the full Product
presentation evaluator as the quality authority until an exactness argument is
available. No new provider or Product candidate is proposed here.

## Preserved boundaries and validation

- Original sequential acceptance semantics and full Product presentation
  authority were preserved.
- Product default/adoption, canonical samples, accepted coordinate
  canonicalization, stored/mixed/coordinate-less authority, and persistence
  semantics were not changed.
- Routing, Relation-label, Node-label, Self-loop, connector, glyph, and CSS
  authority remain downstream presentation responsibilities.
- ECR3 Actual Product human ACCEPT was not transferred to any new candidate.
- Historical Fresh evidence, Fresh12 canonical Human Review, and governed
  lineage were not changed.
- No push, tag, release, deploy, or publication was performed.

Validation:

- six-cell bound/lattice diagnostic audit: PASS;
- LiaisonScape suite: 368/368 PASS;
- lint: PASS;
- production build: PASS;
- E2R-SPEC `npm run validate`: PASS;
- staged diff check: PASS.
