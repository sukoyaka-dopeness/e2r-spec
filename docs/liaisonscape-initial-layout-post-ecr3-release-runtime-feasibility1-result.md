# LiaisonScape Initial-Layout ECR3 Release-Oriented Runtime Feasibility 1

Date: 2026-09-12

Status: ECR3 RUNTIME RECONFIRMED; AUTHORITATIVE PRESENTATION REMAINS THE HOTSPOT; PIVOT; RELEASE BLOCKER REMAINS

## Scope and boundary

This checkpoint remeasures and profiles the retained ECR3
`adaptive-cheap-ranking` candidate after its Actual Product visual gate. It is
a release-oriented feasibility checkpoint, not a Product adoption or release
checkpoint.

The measured configuration was:

```text
E2R_PRESENTATION_FINALIST_LIMIT=2
E2R_RELAXATION_STEP_MODE=omit-fine
E2R_PRESENTATION_GEOMETRY_CACHE=1
E2R_PRESENTATION_EXACT_CANDIDATE_REUSE=1
E2R_RELAXATION_PRIORITIZATION=adaptive-cheap-ranking
E2R_RELAXATION_ADAPTIVE_MARGIN=0.10
E2R_PRESENTATION_COST_PROFILE=1
```

The six canonical coordinate-less public-sample payloads were measured with
the diagnostic generic search: Lighthouse EN/JA, Titanic EN/JA, and Apollo
EN/JA. The same downstream Product presentation evaluator remained the
quality authority. No Product provider, default authority, persistence
semantics, canonical sample, or presentation ownership changed.

## Retained ECR3 runtime remeasurement

The following are fresh sequential local measurements. Wall time is variable
with host load; evaluation counts and the stage split are the stronger
attribution signals.

| Fixture / locale | E2E ms | Stage 1 wall / full | Stage 2 wall / full | Stage 2 presentation ms | Authoritative presentation ms |
| --- | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 4,215 | 1,167 / 44 | 3,047 / 154 | 3,030 | 3,800 |
| Lighthouse JA | 4,204 | 1,192 / 44 | 3,012 / 152 | 2,993 | 3,785 |
| Titanic EN | 3,992 | 1,112 / 44 | 2,880 / 146 | 2,861 | 3,676 |
| Titanic JA | 3,563 | 1,125 / 44 | 2,437 / 146 | 2,420 | 3,248 |
| Apollo EN | 2,171 | 984 / 60 | 1,187 / 103 | 1,175 | 1,789 |
| Apollo JA | 2,394 | 994 / 60 | 1,400 / 120 | 1,386 | 1,991 |

The fresh Stage-2 decomposition was:

| Fixture / locale | Presentation repair evaluations | Post-structural relaxation evaluations | Stage 2 full evaluations | Presentation cache hits |
| --- | ---: | ---: | ---: | ---: |
| Lighthouse EN | 50 | 111 | 154 | 8 |
| Lighthouse JA | 50 | 107 | 152 | 6 |
| Titanic EN | 50 | 103 | 146 | 8 |
| Titanic JA | 50 | 104 | 146 | 9 |
| Apollo EN | 50 | 58 | 103 | 6 |
| Apollo JA | 50 | 76 | 120 | 7 |

Repair is bounded at 50 evaluations for the two-finalist configuration. The
relaxation work is larger in every measured cell, ranging from 58 to 111
evaluations. The columns do not add exactly because the presentation cache
serves some requests; they nevertheless confirm that reducing relaxation
volume has the largest direct Stage-2 leverage in this arm.

The fresh E2E range is 2.17–4.22 seconds, consistent with the previously
reported approximately 2.23–4.12 second ECR3 range. Stage 2 is 1.19–3.05
seconds and is the dominant stage for every cell. Apollo is near the proposed
two-second feasibility planning target only in EN; Lighthouse and Titanic
remain materially above it.

The stage-2 full-evaluation count is 103–154 in this run. The count varies
with locale and accepted trajectory, so it is not a fixed bound of 2
evaluations per finalist. The adaptive policy considered 164–242 state-local
plans, skipped 107–215 candidates from full validation, fully validated
57–110 candidates, and accepted 10–25 moves across the six cells. Adaptive
planning took 5.7–9.5 ms per cell and therefore is not a meaningful share of
the release runtime.

## Cost attribution

The cost profile confirms that the residual is not adaptive ranking overhead:

```text
authoritative presentation          = 1.79–3.80 seconds per run
metric aggregation                  = 0.13–0.24 seconds per run
adaptive planning                   = 0.006–0.010 seconds per run
stage-2 presentation                 = 1.16–3.03 seconds per run
```

Within the profiled first/feedback presentation passes, the largest measured
subcomponents were route candidate generation, relation/node label placement,
and occupied-path checks. Across those passes, route candidate generation was
approximately 0.61–1.48 seconds, relation-label plus node-label placement was
approximately 0.49–0.90 seconds, and occupied-path checking was approximately
0.22–0.75 seconds. The same passes performed approximately 64–231 million
occupied-path point comparisons per cell. These are profiler contributions,
not separate additional wall time, and they explain why the authoritative
presentation evaluator remains expensive.

The exact-position geometry cache and exact candidate reuse remain enabled,
but cache reuse is sparse relative to the evaluated state volume (the
representative Lighthouse EN profile recorded eight stage-2 cache hits). This
does not provide evidence for a new cache-only release path. The earlier
matched evidence also remains valid: the existing cheap screen was ineffective
on representative cases, and incremental presentation replay was not exact
enough to become an authority.

## Quality relationship and optimization decision

The ECR3 Actual Product human gate remains the quality evidence for this same
retained candidate: all six reviewed cells were ACCEPT, the full Post visual
direction was retained, and no candidate-only visual regression was observed.
That acceptance is not machine equivalence and does not transfer to a new
candidate whose selected output changes.

No additional output-changing optimization was adopted in this checkpoint.
The evidence does not support spending effort on adaptive-planning
micro-optimization: it is only a few milliseconds. Reducing finalist or
relaxation volume further would change the selected trajectory and would need a
new human visual gate; the earlier fixed-top-2, omitted-fine, cheap-screen, and
incremental-replay evidence does not make such a change release-safe. No
additional net quality/runtime candidate was therefore claimed.

The retained ECR3 improvement remains the prior bounded reduction of
approximately 12.4–31.9% in full evaluations versus CR2, with the fresh run
showing a similar runtime envelope. This is useful research progress, but not
enough to make the current release target credible for the larger Lighthouse
and Titanic cells.

The next efficient research boundary is to PIVOT toward a new bounded
evaluation-count or stage-2 search-space hypothesis that reduces authoritative
presentation calls while preserving the current Product evaluator. Any such
candidate must be treated as a new visual-review candidate if its selected
coordinates or presentation digest changes. The routing, Relation-label,
Self-loop, connector, glyph, and CSS authorities remain downstream Product
responsibilities.

```text
ECR3 retained runtime                 = 2.17–4.22 seconds fresh sample
dominant residual cost               = repeated Stage-2 authoritative presentation
adaptive ranking overhead            = not material
cache-only acceleration              = insufficient evidence
new optimization adopted             = none
roughly-two-second target            = reached only approximately for Apollo EN; not stable
next research direction              = PIVOT to bounded authoritative-evaluation-count reduction
ECR3 visual quality                  = previously ACCEPTED; unchanged by this checkpoint
Initial Layout Release blocker       = STILL BLOCKED
Product default behavior             = UNCHANGED
Product default adoption             = HOLD
```

## Preserved boundaries and validation

- Product default initial placement and Product adoption were not changed.
- `post-structural-relaxation-v1` remains diagnostic and is not a Product
  default or Post-equivalent authority.
- Stored, mixed, coordinate-less, Derived, dirty-state, Save Coordinates, and
  same-payload reopen semantics were not changed.
- Canonical samples, accepted coordinate canonicalization, historical Fresh
  evidence, Fresh12 canonical Human Review, and governed lineage were not
  changed.
- No routing, Relation-label, Self-loop, connector, glyph, or CSS defect was
  fixed.
- No push, tag, release, deploy, or publication was performed.

Validation for this documentation-only checkpoint:

- LiaisonScape retained ECR3 automated validation: 368/368 tests PASS, lint
  PASS, production build PASS;
- fresh six-cell runtime/profile command: PASS;
- E2R-SPEC `npm run validate`: PASS;
- diff checks: PASS after review.
