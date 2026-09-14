# LiaisonScape Independent Risk-Gate / Probe-Target Stability Validation 1

Date: 2026-09-14

## Scope

This checkpoint independently tests the two open assumptions left by the
bounded multi-stage Product probe study:

1. a Product probe failure must fail closed and must never be classified as a
   successful bounded selector result; and
2. a useful probe target must remain meaningful when candidate-generation order
   changes, rather than depending on an incidental generation index.

The study retains the existing candidate families, cheap K=4 screen, complete
Product-authoritative evaluation, and existing responsibility boundaries. It
does not add a solver family, connect a provider, change Product defaults, or
move ordinary routing, Parallel / Incident allocation, endpoint-plan,
Relation-label, Node-label, or Self-loop authority into Structural Placement.

The target-rule and independent-control experiments are diagnostic only. They
reuse the source-faithful candidate and Product metric pipeline; they do not
approximate Product quality with a diagnostic renderer.

## Part A — fail-closed classification safety

The normal multi-stage artifact was regenerated with the classification
predicate requiring `failClosedOperations === 0`. It recorded zero fail-closed
operations. Its one-probe diagnostic result remains `26/26` exact-best,
`0` meaningful false negatives, and `107` Product evaluations from `311`
oracle evaluations. The normal result can therefore remain classified as the
previous diagnostic A only under the explicit zero-failure condition.

A failure-injection run set `E2R_MULTI_STAGE_INJECT_PROBE_FAILURE=1` while
reusing the same candidate pool. All 26 operations recorded a failed probe;
the one-probe budget recorded `26` fail-closed operations, `0/26`
exact-best hits, and no selected best candidate for those failed operations.
The aggregate classification was `D. LIMITED PRODUCT PROBING INSUFFICIENT`,
not A. A failed, timed-out, or nonzero-exit Product probe cannot silently
produce a partial or unverified adoption result.

This closes the semantic safety question for the current diagnostic path, but
it is not evidence that the probe policy is production-ready.

## Part B — candidate-order stability

The campaign used the previous 26 completed operations and the same Product
oracle. It compared the current rule, a list-order-only reversal, a
generation-index perturbation, and a target rule based on stable family and
candidate fingerprint.

| arm | exact-best | meaningful misses | triggered operations | Product evaluations |
|---|---:|---:|---:|---:|
| current index rule | 26/26 | 0 | 3 | 107 |
| list-order-only reversal | 26/26 | 0 | 3 | 107 |
| generation-index perturbation | 24/26 | 2 | 3 | 107 |
| stable family + fingerprint, original order | 24/26 | 2 | 3 | 107 |
| stable family + fingerprint, perturbed order | 24/26 | 2 | 3 | 107 |

List-order-only reversal did not change targets. In contrast, reversing the
candidate array and assigning new candidate indices changed three frontier
targets: `dense-k7-7`, `dense-k6-8`, and `dense-k5-9`. The two useful dense
closures, `dense-k7-7` and `dense-k5-9`, became meaningful misses again. This
confirms that the current 26/26 closure is dependent on candidate-generation
order, not merely on the candidate set.

The family-plus-fingerprint rule is invariant under the same perturbation, and
its rule contains no Product score, crossing count, label-route hit, or other
Product result. However, it also misses both historical dense Product-best
candidates. It is therefore stable but not a sufficient replacement target
rule.

The order result is:

`C. ORDER DEPENDENCY CONFIRMED / TARGET RULE NOT ESTABLISHED`

## Independent graph-derived controls

Four new synthetic graph-derived controls were added without fixture-name or
known-Product-best lookup in the gate:

- `independent-k6-7` — dense near-threshold;
- `independent-k7-6` — dense transpose;
- `independent-k8-7` — dense wide; and
- `independent-k5-8-minus-one` — edge perturbation.

Across the structural-native and frontier-adaptive arms, eight operations were
evaluated. The index rule and stable rule both produced `6/8` exact-best and
two meaningful false negatives. The gate triggered once, on the wide
`independent-k8-7` frontier case, and did not trigger on the two near-threshold
frontier misses. The edge-perturbed case did not trigger and was exact-best.
The independent control result is therefore not a generalized risk-gate
closure; it leaves the risk gate open.

The control evidence is useful in two ways. First, the gate is graph-derived
and does not leak Product oracle results. Second, graph density plus cheap
equivalence crossing is not yet sufficient to recall every difficult frontier
case. Adding a larger constant K or adding an arbitrary grid variant would not
address this specific target-stability failure.

## Product-authoritative relationship

Product metrics are used only as the evaluation oracle and for post-hoc recall,
regret, and false-negative measurement. The stable target rule itself uses
family and candidate fingerprint only. No Product routing, final label
placement, endpoint-plan authority, or Self-loop routing was moved into the
screening or gate rule.

Because this checkpoint produced no new Product visual candidate and only
validated selector safety and stability, no Actual Product visual smoke check
was warranted. Diagnostic output is not being treated as Product acceptance.
Human Review is not ready.

## Disposition

- risk-gate readiness: `OPEN`;
- probe-target readiness: `NOT ESTABLISHED`;
- multi-stage selector: `DIAGNOSTICALLY BOUNDED / TARGET OR GATE OPEN`;
- quality solver: `HOLD / NOT ESTABLISHED`;
- Product integration/default: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Adaptive Initial Placement Cascade: `INACTIVE`;
- Actual Product visual evaluation: `NOT READY`;
- Human Review: `NOT READY`; and
- Initial Layout Release blocker: `OPEN`.

The evidence is closer to outcome C than to an independent production-quality
closure: the previous one-probe result is not robust to generation-order
perturbation, and the stable replacement rule loses the same two dense wins.
The next research step should be a bounded formulation for stable target
selection or a reconsideration of whether this multi-stage selector belongs in
the execution architecture. It should not advance Adaptive Initial Placement
Cascade, Product adoption, or Human Review.

## Reproduction and changed files

The fixed artifact is
`experimental/independent-risk-gate-validation1/benchmark-result-summary.json`.
The reproduction tool is
`tools/independent-risk-gate-validation1.mjs`; its audit is
`tools/independent-risk-gate-validation-audit.mjs`. The normal multi-stage
probe source also records fail-closed operations and exposes a controlled
failure-injection path for this diagnostic validation.

The checkpoint adds a focused test for the fixed artifact and extends the
normal multi-stage test with the zero-fail-closed classification invariant.
No knowledge candidate was promoted because this remains repository-local
evidence and the target rule is not established. Session log and roadmap are
synchronized separately; no historical result document was rewritten.
