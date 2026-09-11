# LiaisonScape Initial-Layout Stage-2 Authoritative Evaluation Reduction 3

Date: 2026-09-12

Status: CONSERVATIVE PRESSURE GUARD INSUFFICIENT; PIVOT REQUIRED; RELEASE BLOCKER REMAINS

## Scope and retained reference

This checkpoint follows Stage-2 Authoritative Evaluation Reduction 2. The
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

Reduction 2 showed that static pressure-target admission can remove
post-structural relaxation calls, but changes the accepted trajectory when its
initial target set is narrow. This checkpoint tests the conservative boundary:
keep original sequential order and the full Product presentation evaluator,
but use pressure/dependency state to decide whether to admit the pressure set
or fall back to all Nodes.

The pressure arm was measured with the existing diagnostic seam:

```text
E2R_RELAXATION_TARGETING=pressure
```

No Product provider, default authority, canonical sample, persistence
semantics, or downstream presentation authority was changed.

## Conservative-guard hypothesis

The only guard that is conservative from the currently available evidence is:

```text
if the pressure-expanded target does not cover the full graph,
use the full Node target set;
after accepted-state pressure/dependency expansion escapes the active target,
use the full Node target set for the remaining work.
```

The first condition is necessary to avoid claiming that initially skipped
Nodes are non-improving. The second condition is necessary because accepted
moves can change occupied-path and label-prefix dependencies. A later fallback
cannot restore candidates skipped earlier, so this guard is conservative only
when it falls back before any partial target admission whose omitted result is
needed for trajectory equivalence.

## Matched pressure comparison

The six canonical coordinate-less public-sample cells were run with the same
ECR3 settings. Wall time is host-load sensitive; counts and selected output
are the stronger evidence.

| Fixture / locale | ECR3 total / Stage 2 | Pressure total / Stage 2 | Relaxation ECR3 → pressure | E2E ms ECR3 → pressure |
| --- | ---: | ---: | ---: | ---: |
| Lighthouse EN | 198 / 154 | 198 / 154 | 111 → 111 | 3,618 → 3,632 |
| Lighthouse JA | 196 / 152 | 196 / 152 | 107 → 107 | 3,571 → 3,603 |
| Titanic EN | 190 / 146 | 171 / 127 | 103 → 83 | 3,348 → 3,024 |
| Titanic JA | 190 / 146 | 142 / 98 | 104 → 55 | 3,034 → 2,380 |
| Apollo EN | 163 / 103 | 116 / 56 | 58 → 9 | 1,890 → 1,467 |
| Apollo JA | 180 / 120 | 180 / 120 | 76 → 76 | 2,094 → 2,088 |

The pressure arm reduced total full evaluations by 10.0% for Titanic EN, 25.3%
for Titanic JA, and 28.8% for Apollo EN. Stage-2 reductions were 13.0%,
32.9%, and 45.6%. The other cells were already full-target or fell back to
full-target. This confirms runtime leverage, but not quality-safe omission.

## Target coverage and accepted-state risk

| Fixture / locale | Initial pressure Nodes | Expanded target Nodes | Graph Nodes | Pressure result |
| --- | ---: | ---: | ---: | --- |
| Lighthouse EN | 10 | 10 | 10 | full coverage |
| Lighthouse JA | 9 | 10 | 10 | full coverage |
| Titanic EN | 7 | 11 | 13 | partial target |
| Titanic JA | 2 | 6 | 13 | partial target |
| Apollo EN | 2 | 2 | 9 | partial target |
| Apollo JA | 0 | 0 | 9 | full-target fallback |

The partial-target cells are exactly the cells where the pressure result
changed the selected digest. A static target set does not account for later
accepted-state changes. Existing dependency evidence also shows remote route
propagation through sequential occupied paths and label prefixes, so a fixed
initial pressure boundary cannot be treated as an exact dependency cut.

## Selected output and machine quality

| Fixture / locale | ECR3 score / digest | Pressure score / digest | Pressure hard metrics |
| --- | ---: | ---: | --- |
| Lighthouse EN | 50,185.66 / `dd80b934` | 50,185.66 / `dd80b934` | zero crossings, label hits, overlap |
| Lighthouse JA | 31,484.58 / `b66c8fe8` | 31,484.58 / `b66c8fe8` | zero crossings, label hits, overlap |
| Titanic EN | 1,697.23 / `766ce8b5` | 1,702.00 / `42596a1b` | zero crossings, label hits, overlap |
| Titanic JA | 1,127.75 / `933102bd` | 1,179.07 / `055729fe` | zero crossings, label hits, overlap |
| Apollo EN | 1,018.83 / `e499f446` | 1,046.47 / `4c236d29` | zero crossings, label hits, overlap |
| Apollo JA | 1,007.31 / `a905475a` | 1,007.31 / `a905475a` | zero crossings, label hits, overlap |

Titanic EN, Titanic JA, and Apollo EN changed accepted trajectory and selected
presentation digest. The score degradation is approximately 0.3%, 4.6%, and
2.7% respectively. Zero hard metrics are not sufficient to establish visual
equivalence. The ECR3 Actual Product human ACCEPT cannot be inherited by this
pressure-selected output.

## Conservative fallback result

Applying the conservative first condition to the six cells yields:

```text
Lighthouse EN/JA   = pressure target covers graph; full ECR3 path
Titanic EN/JA      = partial coverage; full-target fallback
Apollo EN          = partial coverage; full-target fallback
Apollo JA          = existing full-target fallback
```

The resulting conservative guard is trajectory/output equivalent to ECR3 in
these cells, but it has zero evaluation reduction and zero runtime benefit.
Allowing the partial target in order to recover the measured savings reproduces
the changed outputs above. A post-acceptance expansion rule cannot prove exact
equivalence because it cannot revisit already skipped candidates.

Therefore the current pressure-informed target admission cannot satisfy both
requirements from the available evidence: meaningful authoritative-call
reduction and ECR3 trajectory/output retention. A new matched-audit-backed
dependency guard would need a stronger exact or conservative lower-bound
argument before it could safely omit candidates.

## Decision

```text
pressure-target runtime leverage      = ESTABLISHED
ECR3 trajectory/output retention      = only with full-target fallback
conservative guard reduction         = zero in the six-cell evidence
partial pressure target quality      = MIXED; output changed in 3/6 cells
human review                          = required for any partial-target continuation
disposition                           = PIVOT
```

The research should pivot away from static pressure-target admission rather
than widen its radius or accept the pressure signal as a new quality
authority. The next acceleration hypothesis must reduce authoritative calls
using an exact/conservative candidate dominance or state-bound argument, or
accept that a different Stage-2 architecture is required. No new candidate is
ready for Actual Product human review in this checkpoint.

## Preserved boundaries and validation

- Original sequential order and full Product presentation authority were
  retained for all admitted pressure candidates.
- Product default/adoption, canonical samples, accepted coordinate
  canonicalization, stored/mixed/coordinate-less authority, and persistence
  semantics were not changed.
- Routing, Relation-label, Node-label, Self-loop, connector, glyph, and CSS
  authority remain downstream presentation responsibilities.
- ECR3 Actual Product human ACCEPT was not transferred to the pressure output.
- Historical Fresh evidence, Fresh12 canonical Human Review, and governed
  lineage were not changed.
- No push, tag, release, deploy, or publication was performed.

Validation:

- matched six-cell pressure/full diagnostic profile: PASS;
- LiaisonScape suite: 368/368 PASS;
- lint: PASS;
- production build: PASS;
- E2R-SPEC `npm run validate`: PASS;
- staged diff check: PASS.
