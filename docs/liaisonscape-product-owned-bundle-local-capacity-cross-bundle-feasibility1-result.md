# LiaisonScape Product-Owned Bundle-Local Capacity + Cross-Bundle Feasibility Experiment 1

Date: 2026-09-16

## Purpose and candidate

This checkpoint tests whether widened Parallel presentation can be selected per
undirected endpoint bundle without repeating the previous graph-wide spacing
regression. Node geometry/order, Structural Placement, ordinary graph data,
Self-loop selection, viewport, persistence, and Product defaults are fixed.

The exact candidate identity is
`product-owned-bundle-local-joint-feasibility-v1`. It is diagnostic-only. Its
source policy derives a bounded demand for each bundle from maximum directional
multiplicity, direction count, and maximum Relation-label width. It then forms
a small spacing set around current, fixed 16, requested demand, and two bounded
escalations. Every combination is evaluated by the complete current Product
routing and final label presentation.

Selection is lexicographic: hard presentation feasibility, neighboring-bundle
regression, foreign-closer labels, ownership ambiguity, ordinary-route churn,
spacing excess/deficit, bundle geometry, and route length. Side symmetry is not
an objective. The largest search was 42 combinations.

The machine-readable evidence is
[`result-summary.json`](../../e2r-liaison-scape/experimental/product-owned-bundle-local-capacity1/result-summary.json),
and the Actual Product smoke is indexed in
[`visual-evidence-index.md`](../../e2r-liaison-scape/experimental/product-owned-bundle-local-capacity1/visual-evidence-index.md).

## Results

All current, fixed, and selected rows retained zero crossings, zero final
occupied-path conflicts, zero label overlap, and zero Node collision.

| Control | Selected spacing by bundle | Main current → selected signal | Ordinary churn |
| --- | --- | --- | --- |
| reverse + same-direction | alpha/beta `20`; gamma/delta `12` | ambiguity `1→0`; foreign-closer `1→0`; alpha/beta angle `0.157→1.213`; gamma/delta lane `54.80→71.24` | `0` |
| higher multiplicity 5 | a/b `16` | lane `14.13→22.00`; angle `0.113→0.122`; ambiguity and foreign-closer `3→0` | `1` (`ordinary-bd`) |
| mixed incident | a/b `24` | angle `0.437→0.683`; ambiguity and foreign-closer `2→0` | `0` |
| shared-endpoint bundles | a/b `16`; a/c `16` | ambiguity and foreign-closer `2→1`; median ownership margin `18.98→37.40` | `0` |
| Lighthouse EN | Clara/Thomas `12` | lane `44.88→58.35`; angle `0.286→0.370`; ownership remains unambiguous | `0` |

### Primary reverse and same-direction interaction

Current alpha/beta is side `3:1`, minimum lane separation `14.70`, and endpoint
angular separation `0.157`. Fixed 16 is `2:2`, `15.30`, and `1.149`; selected
local spacing 20 is `2:2`, `14.99`, and `1.213`. Median ownership margin is
`31.32` current, `13.36` fixed, and `14.99` local, showing why margin is retained
as a trade-off rather than used alone.

Gamma/delta stays `1:1`. Fixed 16 produces lane/angle `76.70/1.149`; local 12
uses only `71.24/1.083`, still above current `54.80/0.866`. The previous
graph-wide spacing 20 instead collapses this bundle to `2:0`, lane `14.16`, and
angle `0.143`. Bundle-local selection therefore closes that exact regression.
Route median/total are `112.77/1336.88` current, `116.24/1354.33` fixed, and
`117.58/1360.62` local. Self-loop count and geometry are unchanged.

### Higher multiplicity and mixed incident

The five-Relation demand requests 24, but joint selection falls back to 16.
Spacing 24 changes both ordinary Relations and has route total `2219.67`;
spacing 16 removes all three ownership failures while changing only
`ordinary-bd`, with route median/total `311.72/1955.83` versus current
`298.42/1829.65`. The Actual Product view makes that changed ordinary route
visible inside the fan-out. It is a real coupling cost, not free improvement.

Mixed incident selects 24 because it removes the remaining fixed-16 ambiguity
without ordinary churn. Side distribution remains `2:2`; lane separation stays
`14.13`, while endpoint angle increases from current `0.437` and fixed `0.603`
to `0.683`. Route median rises `298.42→302.12`.

### Shared endpoint and public sample

The new shared-endpoint control proves that bundle decisions are not fully
independent. A wider joint arm can remove the last foreign-closer label, but it
slightly reduces the reverse bundle's minimum lane separation below the
non-regression threshold. The selector therefore falls back to `16/16`, equal
to fixed 16, and explicitly retains one ambiguity/foreign-closer residual. Both
bundles preserve their `2:2` and `1:1` side distributions and ordinary churn is
zero. This is evidence for bounded joint arbitration, not for isolated local
optimization.

Lighthouse selects 12 rather than fixed 16. It preserves side `1:1`, zero
ownership failures, and zero churn while increasing lane separation
`44.88→58.35`. Its ownership margin `29.21` and route total `3491.92` remain
closer to current than fixed 16 (`26.98`, `3492.74`). The Actual Product Reset
view remains usable at 51%; the improvement is modest and no public-sample
noise, Self-loop, framing, or graph-structure regression was observed.

## Architecture and conclusion

The graph-wide adaptive policy is retained only as a negative control; its
scalar is not reused by the selected candidate. Bundle-local candidate
generation is useful, but bundle-local optimization alone is insufficient.
Shared endpoints, occupied routes, ordinary incident Relations, and final
label ownership require a full bounded cross-bundle Product check.

The outcome is:

**B. BUNDLE-LOCAL POLICY PROMISING / C. BOUNDED JOINT FEASIBILITY REQUIRED.**

The candidate is more general than fixed 16 because it avoids the primary
cross-bundle failure, narrows Lighthouse to 12, widens mixed incident to 24,
and falls back to 16 where higher multiplicity/shared capacity makes expansion
costly. It is not uniformly visually better than fixed 16, and the remaining
shared-endpoint ownership residual plus higher-multiplicity ordinary churn
prevent production or Human Review readiness.

Parallel/Incident architecture remains `CLOSED`. Routing, endpoint attachment,
and final Relation-label placement remain current Product authorities. Local
relaxation was not introduced. Structural Placement, Self-loop selector,
viewport/Reset, Initial Placement, portfolio, Dataset bytes, stored/authored
Coordinates, persistence, and Save Coordinates were not changed. Product
default/adoption remains `HOLD`, production provider remains `NOT ESTABLISHED`,
Human Review remains `NOT READY`, and the Initial Layout Release blocker
remains `OPEN`.

No workspace knowledge candidate is required; this is repository-local
diagnostic evidence. The next bounded Product presentation step, if continued,
should isolate the shared-endpoint ownership residual and the necessity of the
higher-multiplicity ordinary-route change without introducing relaxation.
