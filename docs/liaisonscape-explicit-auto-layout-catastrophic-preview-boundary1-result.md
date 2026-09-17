# LiaisonScape Explicit Auto Layout Catastrophic Preview Boundary 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-CATASTROPHIC-PREVIEW-BOUNDARY1`  
Classification: **C. CATASTROPHIC CONCEPT CLOSED / AUTOMATED CLASSIFIER NOT YET JUSTIFIED / IMPLEMENTATION CAN STAGE WITH EXPLICIT POLICY SEAM**

## Decision

The two-tier Preview policy now has a bounded catastrophic concept:

```text
structural-invalid
  -> no Preview; preserve the pre-operation display

structurally valid + catastrophic presentation failure
  -> no Preview; preserve the pre-operation display

structurally valid + non-catastrophic residual
  -> show the best available candidate for user review, with residual evidence
```

Catastrophic presentation means that the candidate is technically complete
but the rendered Product view has lost practical graph comprehension: for
example, a severe Node pile-up or equivalent relation/label collapse that
makes the displayed structure unusable. This is intentionally a concept and
policy seam, not a newly chosen magic threshold.

The current evidence does not justify a general automated catastrophic
classifier for V1. A future adapter may stage the policy explicitly, but it
must keep hard structural rejection, catastrophic visual blocking, and
non-catastrophic advisory residuals as separate outcomes.

## Structural invalid is a separate gate

The following remain hard structural failures and are not visual-catastrophe
evidence:

* incomplete position maps;
* non-finite coordinates;
* Pin violations;
* stale or wrong operation/snapshot identity;
* partial publication of a result.

They are rejected before Preview. The candidate may be structurally invalid
even when no visual metric is available.

## Negative controls

The diagnostic generated complete finite positions for the current
Product-faithful presentation evaluator. It did not alter Frontier, Auto
Layout, thresholds, or production behavior.

| Control | Structural state | Representative Product evidence |
| --- | --- | --- |
| `pileup` on Lighthouse EN | Complete and finite | 10 Nodes at one point produced 45 Node-body overlap pairs, 7 routed crossings, 12 label-route hits, 6 label overlaps, and 14 near-label cases. |
| `microCollapse` on Lighthouse EN | Complete and finite | A 12×2 Graph-space arrangement still produced 45 Node-body overlap pairs and severe route/label pressure. |
| `pileup` on label-heavy JA | Complete and finite | 45 Node-body overlap pairs, 15 label-route hits, 5 label overlaps, and 20 near-label cases. |
| `pileup` on dense `bipartite(7,7)` | Complete and finite | The intentionally collapsed Product view is a clear negative control, not an accepted solver candidate. |
| `extentOutlier` on Lighthouse EN | Complete and finite | Extent was approximately 1,000,001, aspect ratio approximately 3,081, and fit scale 0.1. This is a viewport/framing concern until Product evidence shows that the view is actually unusable. |

The pile-up control was also opened in the read-only Product-faithful surface:

`http://192.168.0.11:5175/e2r-liaison-scape/experimental/explicit-auto-layout-catastrophic-preview-boundary1/?control=pileup`

The visible result placed the Nodes in a central pile-up with dense stacked
Relation curves and labels. This is evidence that the catastrophic concept is
observable in Product terms. It does not establish that the current solver
generates such a result.

## Representative candidates and dense boundary

The preceding current-source diagnostic covered 15 normal candidate cases
(five fixture families with no, few/mixed, and all Pins). All were complete
and finite, with 0/15 candidate-none cases. The best-by-score candidate was
strictly eligible in 0/15 cases, but strict ineligibility only records a
presentation residual and does not itself block Preview.

Actual Product / Product-faithful evidence covered Lighthouse EN/JA, Titanic
EN, label-heavy JA, and dense controls. Ordinary candidate views remained
usable at fit view. The dense candidate was visibly congested and took more
than nine seconds to become ready in the browser surface; the observation
supports a future Graph-space separation direction, not a catastrophic
classification or spacing implementation. Browser latency was not used as a
visual-quality threshold.

False-positive risk is material: blocking every dense case, every nonzero
crossing, or every `labelNear20` result would reject reviewable candidates.
False-negative risk also remains: a future candidate may be technically
complete but visually collapse. One negative control is not enough to set a
general threshold or calibrate a classifier.

## Machine boundary

Current source metrics are useful evidence but are not a sufficient classifier
without Product-backed examples. The current strict predicate remains
unchanged:

```text
crossings === 0
&& overlapPairs === 0
&& labelRouteHits === 0
&& labelOverlap === 0
&& labelNear20 === 0
```

It is a strict Product eligibility signal. It is not the catastrophic Preview
gate. A later automated classifier would require reviewed positive/negative
controls, fixture-size and density context, Pin context, viewport evidence,
and explicit false-positive/false-negative acceptance. Those conditions are
not established here, so the classifier is **not yet justified**.

Warnings for non-catastrophic residuals remain a separate future Product
choice. Warning copy, iconography, severity, and metric wording were not
implemented in this checkpoint.

## Production boundary

No production source behavior changed. In particular, the checkpoint did not
change:

* Explicit Auto Layout solver or parameters;
* Initial Automatic Display / Frontier provider;
* routing, Relation-label, Node-label, or Self-loop authority;
* Pin, Dataset, Coordinate, persistence, Save Coordinates, or dirty-state
  semantics;
* Preview/Accept/Reject production UI;
* Human Review or provider selection.

The next implementation may stage an explicit Preview policy seam, but must
first preserve the pre-operation display for structural and catastrophic
failure, keep non-catastrophic residuals reviewable rather than silently
accepted, and retain separate Accept/Reject/Cancel/Save semantics.

## Reproduction and provenance

From `e2r-liaison-scape`:

```text
node tools/explicit-auto-layout-catastrophic-preview-boundary1.mjs
node --experimental-strip-types --test tests/explicit-auto-layout-catastrophic-preview-boundary1.test.ts
```

The diagnostic source and artifact are:

* `tools/explicit-auto-layout-catastrophic-preview-boundary1.mjs`
* `tests/explicit-auto-layout-catastrophic-preview-boundary1.test.ts`
* `experimental/explicit-auto-layout-catastrophic-preview-boundary1/result-summary.json`
* `experimental/explicit-auto-layout-catastrophic-preview-boundary1/index.html`
* `experimental/explicit-auto-layout-catastrophic-preview-boundary1/main.tsx`

The replay chain is:

```text
current Product graph and placement source
  -> intentionally bounded complete-finite negative controls
  -> current Product routing/label metrics
  -> Product-faithful read-only visual surface
  -> catastrophic concept / classifier decision
```

The result is diagnostic-only and records the current LiaisonScape HEAD plus
working-tree diagnostic additions. No new candidate is claimed to be
Frontier-12 or a production solver result.
