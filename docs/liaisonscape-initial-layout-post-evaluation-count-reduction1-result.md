# LiaisonScape Initial-Layout Post Evaluation-Count Reduction 1

Date: 2026-09-11

Status: BOUNDED COUNT REDUCTION OBSERVED; QUALITY-SAFE REDUCTION NOT ESTABLISHED; RELEASE BLOCKER REMAINS

## Scope and retained reference

This checkpoint follows Cost Reduction 3. The retained CR2 arm remains the
authoritative reference:

```text
E2R_PRESENTATION_FINALIST_LIMIT=2
E2R_RELAXATION_STEP_MODE=omit-fine
E2R_PRESENTATION_GEOMETRY_CACHE=1
E2R_PRESENTATION_EXACT_CANDIDATE_REUSE=1
```

The reference uses the existing sequential relaxation order and sends every
hard-feasible relaxation candidate through the existing full presentation
evaluation. The new mode is diagnostic-only:

```text
E2R_RELAXATION_PRIORITIZATION=dynamic-cheap-ranking
E2R_RELAXATION_PRIORITY_TOP_K=2
```

The full presentation evaluator remains the quality authority. The cheap
signal only orders and bounds which candidates receive that authoritative
evaluation. No Product provider, default path, stored/mixed/coordinate-less
authority, persistence behavior, or presentation ownership changed.

## Hypothesis and stale-ranking distinction

The previous cheap-ranking probe calculated all descriptors once before the
sequential relaxation loop. Accepted moves subsequently changed `current`
and `currentMetrics`, so later ranks described an obsolete state. That static
one-shot result was not treated as a quality-preserving gate.

This checkpoint tests a narrower state-aware hypothesis: candidates can be
prioritized within deterministic groups while preserving the full evaluator,
if each group is ranked against the current positions and current presentation
metrics. Groups are keyed by the sorted moved Node IDs and step size. Within a
group, the cheap signal is recomputed when the group is entered or when an
accepted move invalidates its queue. The prototype retains top-2 candidates
plus the existing dependency-risk guard (`riskScore >= 3`). After an accepted
move, queued candidates are returned to the active group and the group is
reranked from the new state. This explicitly records the state dependency;
it does not claim that the cheap signal is presentation authority.

The audit mode uses the same dynamic ordering but full-validates every
state-feasible descriptor. It is the state-local reference for measuring rank
recall. The prototype's skipped candidates are not silently considered
improving or non-improving; their full result is unknown in prototype mode.

## Six-cell machine comparison

The runs below used the six canonical E2R examples and were performed
sequentially under the same retained settings. `presentation` is the total
full presentation-evaluation count reported by the search profile. `post` is
the relaxation-local evaluated count. `plans` is the complete generated
relaxation plan count, not the number sent to full evaluation.

| Fixture / locale | CR2 presentation / post | Dynamic top-2 presentation / post | Full-eval reduction | End-to-end ms | Stage 2 ms |
| --- | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 226 / 144 | 186 / 100 | 17.7% | 4,224 -> 3,601 | 3,025 -> 2,424 |
| Lighthouse JA | 232 / 147 | 175 / 87 | 24.6% | 4,296 -> 3,383 | 3,105 -> 2,217 |
| Titanic EN | 272 / 187 | 178 / 93 | 34.6% | 4,840 -> 3,290 | 3,735 -> 2,182 |
| Titanic JA | 279 / 194 | 175 / 87 | 37.3% | 4,451 -> 2,991 | 3,354 -> 1,886 |
| Apollo EN | 245 / 141 | 159 / 55 | 35.1% | 2,754 -> 1,981 | 1,755 -> 978 |
| Apollo JA | 237 / 132 | 170 / 64 | 28.3% | 2,738 -> 2,133 | 1,726 -> 1,126 |

The observed end-to-end reductions in this sequential sample were
approximately 14.8%, 21.3%, 32.0%, 32.8%, 28.1%, and 22.1% respectively.
The retained two-second feasibility target was reached only approximately
for Apollo EN in this sample and remains unreached as a stable target across
the public cells. These are diagnostic measurements, not release-time
guarantees.

## State-local recall and dependency evidence

The dynamic audit full-validates its state-feasible descriptors and reports
the fraction of full-improving decisions whose dynamic cheap rank was within
top-2. Because the search accepts every full improvement in audit mode, the
accepted-move rank recall has the same value in this audit. This is not a
prototype recall estimate: prototype-skipped candidates do not have an exact
result.

| Fixture / locale | Plans | Audit reranks | Unique considered | Full validated | Top-2 improving recall | Top-2 accepted-move recall |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 160 | 49 | 143 | 142 | 76.5% | 76.5% |
| Lighthouse JA | 160 | 45 | 145 | 145 | 63.3% | 63.3% |
| Titanic EN | 208 | 57 | 178 | 178 | 73.5% | 73.5% |
| Titanic JA | 208 | 40 | 191 | 191 | 63.2% | 63.2% |
| Apollo EN | 144 | 30 | 138 | 138 | 75.0% | 75.0% |
| Apollo JA | 144 | 33 | 135 | 135 | 70.6% | 70.6% |

The rank signal is materially better than the earlier static one-shot probe
on some cells, but it remains fixture/locale-sensitive and misses roughly a
quarter to a third of full-improving decisions at top-2 in the audit. The
dynamic prototype's full-evaluation counts were 99, 86, 92, 86, 54, and 63
for the six cells. Its diagnostic skip-decision counts were 112, 109, 202,
132, 144, and 152. The difference between `unique considered` and repeated
`considered` observations is intentional: an accepted move causes a group to
be described again from the new state.

The prototype records `rerankCount` and `acceptedMoveReranks`; the latter was
28, 24, 21, 7, 12, and 15. This confirms that accepted state updates actually
triggered bounded reranking rather than merely renaming the static ranking.

## Selected-result and machine-quality evidence

The dynamic order is a search-behavior change. The final presentation digest
changed in all six cells:

| Fixture / locale | CR2 selected score / digest | Dynamic top-2 selected score / digest | Score change |
| --- | ---: | ---: | ---: |
| Lighthouse EN | 49,194.54 / `f1d3f068` | 51,043.19 / `212b6331` | +3.8% |
| Lighthouse JA | 31,488.90 / `b6c366b4` | 31,491.50 / `4ca93af0` | +0.0% |
| Titanic EN | 1,546.11 / `081535ed` | 1,687.86 / `59b468e6` | +9.2% |
| Titanic JA | 1,079.73 / `48f41fae` | 1,129.93 / `037f42cc` | +4.6% |
| Apollo EN | 1,014.25 / `09e41c28` | 1,007.76 / `5de93b51` | -0.6% |
| Apollo JA | 992.92 / `7454ef45` | 1,032.50 / `9697b5e8` | +4.0% |

All six selected outputs reported zero crossings, zero Relation-label route
hits, zero `labelNear20`, zero label overlap, and zero Node-body overlap in
the diagnostic metrics. Those hard counters do not prove human-observed
quality. The changed digests and the score increases in five cells mean that
the machine result is mixed/degraded relative to the CR2 reference, with the
largest regression in Titanic EN. The dynamic audit itself also changed the
selected output in all six cells because state-aware ordering changes the
accepted sequential state even when every candidate is fully evaluated.

The prototype therefore cannot be called Post-equivalent, quality-preserving,
or ready for Product use. Any continuation that retains this changed order
requires Actual Product human review of the changed positions and downstream
presentation. The current machine evidence is sufficient to avoid promoting
top-2 directly to that gate.

## Decision

```text
evaluation-count hypothesis       = SUPPORTED FOR BOUNDED COUNT REDUCTION ONLY
full evaluation reduction          = 17.7%--37.3% across the six cells
state-local top-2 improving recall = 63.2%--76.5% in full audit
state-local accepted-move recall   = 63.2%--76.5% in full audit
selected result                    = CHANGED in all six cells
machine quality                    = MIXED / DEGRADED vs CR2 reference
human visual review                = REQUIRED before any continuation
end-to-end runtime                 = approximately 2.0--4.8 s baseline to 2.0--3.6 s prototype in this sample
roughly-two-second target          = NOT ESTABLISHED as a stable target
next direction                     = RETUNE OR ALTERNATIVE
Initial Layout Release blocker     = STILL BLOCKED
Product default behavior           = UNCHANGED
Product default adoption           = HOLD
```

The result supports continued research into adaptive count reduction, but
not further tuning of top-2 as though it were already safe. The next bounded
hypothesis should either increase retention selectively where state-local
recall is weak (for example, an adaptive K / uncertainty policy whose recall
is measured against a matched full audit), or return to a different
authoritative-evaluation reduction strategy. A cheap signal must remain a
prioritization aid, and full presentation must remain the quality authority.
No new prototype is selected in this checkpoint.

## Preserved boundaries

- Product default initial placement and Product adoption are unchanged.
- `post-structural-relaxation-v1` remains diagnostic and is not connected to
  the normal Product runtime.
- No equivalence with the parked coarse provider or with Post output was
  claimed.
- Stored, mixed, coordinate-less, Derived, dirty-state, Save Coordinates,
  same-payload reopen, and fallback semantics are unchanged.
- Routing, Relation-label, Node-label, Self-loop, connector, glyph, and CSS
  authority remain downstream presentation responsibilities.
- No known presentation defect was fixed, and no App.tsx refactor was done.
- Canonical fixtures, historical Fresh evidence, Fresh12 canonical Human
  Review, and governed lineage were not changed.
- No push, tag, release, deploy, or publication was performed.
