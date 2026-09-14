# LiaisonScape Bounded Multi-stage Product Probe / Dense Cheap-equivalence Closure 1

Date: 2026-09-14

## Scope

This checkpoint continues `Bounded Screening Formulation / Finalist Recall 1`,
which left the cheap-only selector at `B. RECALL IMPROVED BUT NOT CLOSED`.
It evaluates a bounded multi-stage selector around the existing candidate
families and the existing lexicographic K=4 screen:

```text
existing candidate generation
  -> cheap lexicographic K=4
  -> deterministic cheap-equivalence / high-risk gate
  -> 0, 1, or 2 complete Product-authoritative probes
  -> Product-authoritative metric selection
```

No solver family was added. No partial routing, simplified routing, label
approximation, new proxy renderer, Product integration, App.tsx connection,
provider, or Product default was added.

Every normal finalist and every ambiguity probe uses the current Product
authority, including ordinary routing, Parallel / Incident allocation,
endpoint-plan, Relation-label, Node-label, Self-loop routing, feedback, and
existing Product metrics. The new direct probe entry is diagnostic-only and
accepts a positions file; it does not move any Product authority into
Structural Placement.

## Gate and target rule

The gate is intentionally independent of fixture identity. It fires when both
conditions hold:

1. graph occupancy is dense by graph-derived properties (`>=14` nodes, `>=45`
   edges, and edge density `>=0.4`); and
2. a quantized cheap feature class with at least four members crosses the
   normal K=4 boundary.

The tested cheap-equivalence key contains structural crossings, separation,
label-span, coarse corridor, angular, extent, and edge-spread signals. The
quantization is deterministic and is not a Product-result lookup.

Probe targets are the lowest candidate-generation-index members outside the
normal K=4 finalists within the triggered equivalence classes. A second probe
uses the next member under the same deterministic rule. This is a diagnostic
target rule, not a claim that candidate-generation order is a stable production
semantic.

## Evidence

The same 26 successful candidate operations and 311 oracle candidate
evaluations from the previous checkpoint were used. The previous cheap-only
baseline was reproduced before adding probes:

| budget | exact-best | top-3-any | meaningful misses | Product evaluations | avoided evaluations |
|---|---:|---:|---:|---:|---:|
| 0 extra probe | 24/26 | 26/26 | 2 | 104 | 207 |
| 1 extra probe | 26/26 | 26/26 | 0 | 107 | 204 |
| 2 extra probes | 26/26 | 26/26 | 0 | 110 | 201 |

Baseline-improvement retention was `100%` for all three budgets. The one-probe
configuration had zero mean and maximum regret, and remained deterministic.
Two probes did not improve recall or regret.

The gate triggered on three of 26 operations (`11.5%`):

- `dense-k7-7 / frontier-adaptive-12`: useful trigger; the probe selected the
  prior Product-best candidate and removed the prior crossing miss.
- `dense-k5-9 / frontier-adaptive-12`: useful trigger; the probe selected the
  prior Product-best candidate and removed the prior crossing miss.
- `dense-k6-8 / frontier-adaptive-12`: false trigger under the zero-probe
  ground truth; the normal K=4 result was already exact-best.

There were no canonical false triggers, no trigger on `dense-k7-7-minus-one`,
and no trigger on `dense-k8-8`. The observed unnecessary-trigger rate among
triggers was `1/3` (`33.3%`). This is bounded cost evidence, not generalized
risk-gate validation.

The measured current Product-authoritative presentation time for the one-probe
configuration was `16,862.68ms`, versus `33,993.40ms` for the previous
all-candidate presentation total in the same campaign family. The one probe
added `724.06ms` of Product-authoritative presentation time to the normal
K=4 finalist total. These are direct source-faithful authority measurements;
the process wall time also includes per-probe process startup and is not a
Product latency claim.

The current candidate harness couples candidate-family generation and Product
evaluation inside `generic-crossing-search`, so candidate-generation-only
timing could not be isolated without inventing a different execution path.
This checkpoint reports selected Product authority timing separately instead
of relabeling coupled wall time as cheap generation time.

## Dense and control interpretation

The two previous false negatives were not caused by a new solver family. They
were caused by a frontier candidate class whose cheap summaries crossed the
K=4 boundary while current Product routing produced materially different
crossing results. A single complete Product probe selected the first
deterministic outside representative in both cases.

The `dense-k6-8` trigger is important: the same graph-derived gate can spend
one unnecessary probe on a difficult control. The gate therefore detects a
class of ambiguity with useful recall in this campaign, but its precision and
holdout behavior are not yet sufficient to call it a production policy.

Canonical, English, Japanese, Parallel/Titanic, Self-loop/Lighthouse, and
label-sensitive controls remain covered by the normal K=4 route without new
authority. No special Parallel, Self-loop, or Relation-label solver was added.

## Disposition

Classification for this bounded diagnostic is:

`A. BOUNDED MULTI-STAGE SELECTOR ESTABLISHED`

This means the tested architecture closed the two known meaningful misses with
one bounded complete Product probe and preserved deterministic selection in
the tested controls. It does not mean a production selector, quality solver,
or provider is established. In particular:

- candidate generation readiness: existing candidate families only;
- cheap screening readiness: useful baseline, but not independently validated;
- multi-stage selector readiness: diagnostically promising, production
  integration not established;
- Product integration/default: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Actual Product visual evaluation: `NOT READY`;
- Human Review: `NOT READY`;
- Initial Layout Release blocker: `OPEN`.

The next bounded question, if continued, is independent risk-gate and target
selection validation on new graph-derived controls, including whether a stable
target rule can retain the recall without relying on candidate-generation order.
Do not expand to Adaptive Initial Placement Cascade, add a solver family, move
routing or labels into Structural Placement, or treat this diagnostic result
as Product adoption.

No Actual Product visual smoke check was performed because this checkpoint
produced no new Product visual candidate and the selector remains diagnostic.
Human Review remains not ready.

## Reproduction and files

The fixed artifact is
`experimental/bounded-multi-stage-product-probe1/benchmark-result-summary.json`.
The reproduction tool is
`tools/bounded-multi-stage-product-probe.mjs`; its audit is
`tools/bounded-multi-stage-product-probe-audit.mjs`. The current generic
Product search contains the diagnostic positions-file probe entry, and the
previous screening tool can export its candidate pool without rewriting the
committed result artifact.

The session log and roadmap were synchronized for this checkpoint. No
knowledge candidate was promoted: this is still one repository's bounded
evidence, and the target-order rule needs independent confirmation.
