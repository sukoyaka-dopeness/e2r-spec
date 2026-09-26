# LiaisonScape Bounded Screening Formulation / Finalist Recall 1

Date: 2026-09-14

Status: **B. RECALL IMPROVED BUT NOT CLOSED / CHEAP-EQUIVALENT DENSE ROUTING BOUNDARY CONFIRMED / NOT READY FOR HUMAN REVIEW**

## Question and boundary

The preceding Bounded Quality-Solver Benchmark established that existing
candidate families can improve Product-authoritative metrics, but its current
cheap top-4 ranking retained the Product-best candidate in only `20/26`
successful candidate operations. This checkpoint asks whether the same
candidate sets can be reduced to a small deterministic finalist budget without
moving Product routing, Parallel/Incident, endpoint-plan, final labels,
Self-loop routing, or viewport authority into Structural Placement.

No solver family was added. The campaign repeated the same 12 fixtures and 39
bounded operations across `direct-current`, `structural-native-v3`,
`frontier-adaptive-12`, and the same limited
`structural-native-discrete` controls. All candidates were evaluated by the
current Product presentation path to establish oracle ground truth. Screening
features used only candidate Node geometry and Dataset graph/label demand;
Product metrics were consumed only after ranking for evaluation and diagnosis.

## Decision

**B. RECALL IMPROVED BUT NOT CLOSED.** A deterministic lexicographic screen
improved top-4 exact-best recall from `20/26` (`76.9%`) to `24/26` (`92.3%`),
retained at least one Product top-3 candidate in `26/26`, and retained all 24
oracle baseline-improving operations. It reduced the simulated Product
evaluation count from `311` oracle evaluations to `104` finalists, a `66.6%`
reduction.

The two remaining misses are meaningful dense failures. On `dense-k7-7` and
`dense-k5-9`, the missed Product-best and retained candidates have effectively
identical tested cheap features—structural crossings, separation, label-span,
coarse corridor, angular, Parallel, Self-loop, extent, and edge-spread
summaries—while Product routing differs by 9 and 7 crossings respectively.
Increasing the lexicographic budget from four to six does not recover either
candidate. Cheap-only screening is therefore improved but is not established
as a production candidate selector.

## Previous six false negatives

The previous top-4 result was reproduced exactly before evaluating new rules.
All six misses met the checkpoint's meaningful-false-negative definition:
exact best absent plus more than 2% or 2,000 score regret, a critical Product
metric regression, or loss of an oracle baseline improvement.

| Fixture / arm | Product-best cheap rank | Primary diagnosis |
| --- | ---: | --- |
| Lighthouse EN / structural-native-v3 | 6 | final label-pressure outcome and extent/fit discrimination omitted |
| Lighthouse JA / structural-native-v3 | 6 | final label-pressure outcome and extent/fit discrimination omitted |
| Titanic EN / structural-native-v3 | 7 | extent/fit discrimination omitted |
| Titanic JA / structural-native-v3 | 7 | extent/fit discrimination omitted |
| dense-k7-7 / frontier-adaptive-12 | 12 | tested cheap geometry summaries cannot distinguish Product routing outcome |
| dense-k5-9 / frontier-adaptive-12 | 8 | tested cheap geometry summaries cannot distinguish Product routing outcome |

The first four misses can be corrected by an explicit staged ordering that
keeps separation and topology first and then uses label-demand/corridor and
extent signals. The dense misses are not weight-tuning failures: the compared
candidates are cheap-feature equivalent under this formulation.

## Compared formulations

Five bounded deterministic selectors were compared at `K = 2, 3, 4, 6`:

1. the previous scalar ranking;
2. lexicographic hard geometry, topology, label/corridor, angular, and extent
   ordering;
3. a normalized weighted scalar chosen from six small interpretable profiles;
4. Pareto-frontier plus feature-distance retention; and
5. scalar/Pareto/family/risk hybrid diversity retention.

At K=4 the exact-best results were:

| Formulation | Exact best | Product top-3 hit | Meaningful misses |
| --- | ---: | ---: | ---: |
| previous scalar | 20/26 | 23/26 | 6 |
| lexicographic | **24/26** | **26/26** | **2** |
| normalized balanced scalar | 21/26 | 26/26 | 4 |
| Pareto-diverse | 15/26 | 23/26 | 10 |
| hybrid risk/family-diverse | 13/26 | 22/26 | 12 |

Pareto and family diversity did not improve recall in this candidate set.
Their extreme-feature anchors displaced candidates that were better under the
Product authority. Scalar weighting improved top-3 hit rate but did not match
the simpler lexicographic rule. Family diversity is therefore not supported as
a mandatory retention contract by this evidence.

## Finalist-budget tradeoff

For the lexicographic formulation:

| K | Exact best | Product top-3 hit | Meaningful misses | Finalist evaluations | Oracle reduction |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 2 | 16/26 | 24/26 | 9 | 52 | 83.3% |
| 3 | 20/26 | 26/26 | 5 | 78 | 74.9% |
| 4 | **24/26** | **26/26** | **2** | 104 | 66.6% |
| 6 | 24/26 | 26/26 | 2 | 156 | 49.8% |

K=4 is the best observed bounded tradeoff. K=2 and K=3 discard too many
Product-best candidates. K=6 adds 52 Product evaluations without resolving
the dense cheap-equivalence boundary.

## Regret and baseline improvement

For lexicographic K=4:

- median Product-score regret: `0`;
- mean regret: `51,153.29`;
- p95 regret: `569,994.70`;
- maximum regret: `759,990.75`;
- mean relative regret: `0.404%`;
- maximum relative regret: `6.57%`;
- Product top-3 set mean coverage: `78.2%`;
- baseline-improvement retention: `24/24` oracle-improving operations.

The zero median and 100% top-3 hit distinguish the two dense misses from a
general loss of useful candidates, but their seven/nine Product crossing
regressions prevent treating them as negligible near-ties. The scalar score is
an ordering metric, not visual acceptance.

## Feature audit

Structural crossings remained the dominant useful topology feature and had a
high diagnostic correlation with Product score. Extent/fit discrimination
addressed four of the six previous miss patterns, while edge-spread supplied a
related secondary signal. Label-span and coarse corridor features helped
separate canonical label-sensitive cases, but their global correlation was
confounded by fixture scale and they do not reproduce final Relation-label or
Node-label placement.

Angular pressure had only moderate diagnostic correlation. Parallel and
Self-loop pressure were deterministic and cheap but fixture-specific, partly
redundant, and did not independently recover a previous false negative. They
remain coarse risk signals only; they do not own endpoint-plan or Self-loop
angle/radius authority.

The proposed feature extraction is bounded by existing structural crossing
work plus `O(V^2)` separation, `O(E*V)` coarse corridor, and
`O(E + sum(degree log degree))` angular scans. Across the 26 candidate
operations, lexicographic K=4 screening—including feature extraction—measured
approximately `1.216ms` median and `4.682ms` maximum. Ranking itself was much
smaller than feature extraction and remained deterministic.

## Product evaluation cost

The oracle campaign evaluated 311 candidates. Lexicographic K=4 would evaluate
104 finalists and save 207 Product evaluations. Oracle Product presentation
time measured `32,324.28ms` in the final run. Proportional candidate-count
projection estimates `10,685.15ms` for the K=4 finalists, a `66.9%` reduction.
The largest operation moved from 22 to 4 Product evaluations; its proportional
presentation estimate moved from about `4,000.11ms` to `1,315.82ms`.

The finalist timing is an estimate from measured all-candidate presentation
cost, not a separately timed production pre-screen execution. Candidate costs
can vary, so a future execution checkpoint must measure the selected finalists
directly if this architecture advances.

## Generalization and hold-out evidence

Lexicographic K=4 retained the exact Product best in all 16 canonical
operations, including all sampled EN/JA, Parallel-sensitive Titanic,
Self-loop-sensitive Lighthouse, and label-sensitive controls. The dense subset
retained 8/10 exact bests and all Product top-3 hits; both remaining failures
were dense grid permutations.

The lexicographic rule has no fitted weights. Separately, leave-one-fixture-out
selection among six predefined scalar profiles chose the same balanced profile
for every hold-out but achieved only `21/26` exact recall with four meaningful
misses. This rejects weight tuning as closure evidence. The fixed
lexicographic rule generalized across the current canonical language pairs,
but it was selected from this campaign and has no independent external-fixture
confirmation.

## Architecture disposition

Cheap-only screening is `NOT ESTABLISHED` as a production selector. The next
bounded architecture candidate is a narrowly gated multi-stage selector that
uses cheap lexicographic K=4 and, only for cheap-equivalent/high-risk classes,
measures one or two complete Product-authoritative probes. It must not
approximate or relocate routing/label authority, and it must demonstrate that
the probe can distinguish dense permutations without allowing Product
evaluation count to expand back toward the oracle set.

A production-shaped cheap-only pre-screen benchmark is therefore `HOLD`; the
current simulation is sufficient to establish the remaining boundary. No
Actual Product visual smoke check was appropriate because no candidate was
connected to the Product surface and no visual-quality claim was made.

Standing status remains:

- Fast deterministic Initial Placement plus explicit High-quality Auto Layout:
  `PROVISIONALLY ADOPT` as an execution direction;
- quality solver: `HOLD / NOT ESTABLISHED`;
- Product integration/default: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Adaptive Initial Placement Cascade: `INACTIVE`;
- Actual Product visual evaluation: `NOT READY`;
- Human Review: `NOT READY`; and
- Initial Layout Release blocker: `OPEN`.

## Reproducibility and changed files

LiaisonScape:

- `tools/bounded-screening-finalist-recall1.mjs`;
- `tools/bounded-screening-finalist-recall-audit.mjs`;
- `tests/bounded-screening-finalist-recall.test.ts`; and
- `experimental/bounded-screening-finalist-recall1/benchmark-result-summary.json`.

E2R-SPEC:

- this result document;
- `docs/roadmap.md`; and
- `sessions/E2R-Session-0055.md`.

The fixed JSON artifact is the numeric source of truth. The result document
does not replace the preceding benchmark result. No App.tsx, Product behavior,
Dataset, persistence, coordinate ownership, dirty-state, Save Coordinates,
manual authority, routing/label/Self-loop/viewport authority, provider, or
default was changed.
