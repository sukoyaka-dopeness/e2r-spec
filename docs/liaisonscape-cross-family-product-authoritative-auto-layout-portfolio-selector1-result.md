# LiaisonScape Cross-Family Product-Authoritative Auto Layout Portfolio Selector Experiment 1

Date: 2026-09-16
Status: `DIAGNOSTIC RESULT / SELECTOR INCOMPLETE / HUMAN REVIEW NOT READY`

## Purpose

This bounded checkpoint tests whether already-existing Frontier, Post, and
topology-aware free-form placement families can be treated as a portfolio and
selected per fixture through the current Product authority. It does not add a
solver, retune a family, change routing or label authority, or adopt a Product
provider/default.

## Method

The diagnostic tool materializes all three family geometries on the same
fixture, IDs, labels, and locale. It records family identity, exact geometry
fingerprint, hard-gate result, fresh Product-authoritative metrics, persisted
lineage parity, oracle ranking, and bounded selector result.

Hard gates are node-body overlap, pathological extent/aspect, regression from
a zero-crossing Frontier baseline, and non-finite geometry. The full oracle
Product-evaluates every unique admitted geometry. The bounded selector first
uses cheap straight-crossing/spacing/extent features, then Product-evaluates
only the top two finalists and applies lexicographic Product ordering. Exact
fingerprints are deduplicated before Product evaluation.

The implementation and artifact are in the LiaisonScape repository:

- `tools/cross-family-product-authoritative-auto-layout-portfolio-selector1.mjs`
- `experimental/cross-family-product-authoritative-auto-layout-portfolio-selector1/result-summary.json`
- `experimental/cross-family-product-authoritative-auto-layout-portfolio-selector1/visual-evidence-index.md`

## Results

| Fixture | Oracle | Bounded selector | Match | Admitted | Oracle / selector Product evaluations |
| --- | --- | --- | --- | ---: | ---: |
| Lighthouse EN | Frontier | Frontier | exact | 2 | 2 / 2 |
| Lighthouse JA | Frontier | Frontier | exact | 2 | 2 / 2 |
| Apollo EN | Frontier | Frontier | exact | 2 | 2 / 2 |
| Apollo JA | Post | Post | exact | 2 | 2 / 2 |
| Titanic EN | Frontier | Frontier | exact | 2 | 2 / 2 |
| Japanese long-label | free-form | free-form | exact | 3 | 3 / 2 |
| dense `k7-7` | free-form | Post | miss | 3 | 3 / 2 |

The selector exactly matched the fresh Product oracle on 6/7 rows (`85.7%`).
There was no meaningful-equivalent rescue on the dense miss. Its recorded
regret under the current lexicographic metric score was approximately
`3,128,922.85`. Across these rows the oracle used 16 Product evaluations and
the bounded selector used 14, avoiding only two evaluations. No duplicate
geometry reuse occurred because the three family fingerprints were distinct
on each row.

The dense miss is the important boundary result. Cheap features ranked Post
and Frontier ahead of free-form even though fresh Product evaluation ranked
free-form first (`102` crossings versus Post `129` and Frontier `143`). This
shows that the bounded cheap screen does not yet recall the Product winner on
the crossing-heavy control. It is evidence against treating the current
screen as an established portfolio selector, not a reason to retune a family
or add an unbounded fallback.

The Japanese long-label row is a complementary guard. The selector reaches
free-form and the fresh machine metrics remain favorable, but the Actual
Product smoke still shows broad geometry and difficult long-label association
at overview scale. Machine zero-crossing/label-hit fields do not establish
human readability.

## Metric parity interpretation

The fresh current-source evaluator reported 21 field mismatches against
persisted fields in the prior family artifacts. The mismatches are retained in
the artifact per candidate. They are not silently normalized and are not used
to rewrite historical result documents. For this checkpoint, current-source
Product-authoritative recomputation is the ranking authority; prior artifacts
remain lineage evidence for candidate materialization and prior observations.

## Actual Product inspection

A small smoke was performed on the real Product `App` surface through a
read-only, disposable preview seam for the dense selector result, dense
oracle result, and Japanese long-label selector result. The dense Post result
was compact but still crowded; the free-form oracle reduced the machine
crossing signal but remained visually crowded and partially clipped at the
initial viewport; the long-label free-form result remained difficult to read
at overview scale. No mutation, Save Coordinates, provider adoption, or
acceptance judgment was performed.

## Responsibility and outcome

The experiment keeps Structural Placement responsible only for candidate
derived Node geometry. Ordinary routing, Parallel/Incident allocation,
endpoint-plan, final Relation-label placement, Node-label placement,
Self-loop routing, viewport/camera, Dataset lifecycle, persistence, Save
Coordinates, and manual placement remain Product authorities.

The result is closest to:

`B. PORTFOLIO PROMISING / SELECTOR INCOMPLETE`, with a `C. PORTFOLIO QUALITY
BENEFIT EXISTS BUT METRIC GAP REMAINS` qualification.

There is real cross-family value: Post wins one public row and free-form wins
the dense and long-label machine rows. However, the bounded selector misses
the dense Product oracle and saves only two of sixteen Product evaluations in
this small sample. The current evidence does not establish that portfolio
cost is justified, and it does not establish a production selector.

No new candidate is ready for user comparison or Human Review. Do not start a
new solver family, family retune, routing/label retune, Adaptive Initial
Placement Cascade, Product integration, or default/provider adoption from
this result. Fast Initial Placement + High-quality Auto Layout remains an
unadopted architectural option, not a decision of this checkpoint.

Standing statuses remain: Gate 2 `OPEN`, quality solver `HOLD / NOT
ESTABLISHED`, production provider `NOT ESTABLISHED`, Product
integration/default `HOLD`, Human Review `NOT READY`, Adaptive Cascade
inactive, and Initial Layout Release blocker `OPEN`.
