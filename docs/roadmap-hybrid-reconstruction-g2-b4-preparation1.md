# Roadmap Hybrid Reconstruction - G2-B4 A-style Preparation 1

Date: 2026-09-25
Status: NON-NORMATIVE PREPARATION / G2-B4 ONLY / NO ROADMAP OR HISTORY BODY CHANGE

## Purpose and current authority

This preparation examines the Roadmap heading
`LiaisonScape Independent Risk-Gate / Probe-Target Stability Validation 1
(2026-09-14)` for a later, standalone A-style Hybrid reconstruction pilot.
The current Roadmap, the dedicated result, the existing Layout and Auto Layout
History unit, and the preceding G2-B1/B2/B3 results were checked as separate
responsibilities.

The dedicated authority is
`docs/liaisonscape-independent-risk-gate-probe-target-stability1-result.md`.
The current Roadmap heading remains the planning authority for the live
risk/target qualification. The broad History unit is the eligible destination
for dated detail if the later pilot is approved.

## Evidence reconciliation

The dedicated result separates two outcomes that must not be merged:

- fail-closed classification safety is bounded evidence: failed, timed-out,
  or nonzero-exit Product probes do not produce a partial or unverified
  selected result; and
- target/risk readiness remains open: generation-index perturbation restores
  meaningful misses, the stable family-plus-fingerprint rule reaches only
  `24/26`, and independent graph-derived controls reach `6/8` exact-best with
  near-threshold misses.

The current disposition is `C. ORDER DEPENDENCY CONFIRMED / TARGET RULE NOT
ESTABLISHED`. Risk-gate readiness is `OPEN`, probe-target readiness is `NOT
ESTABLISHED`, and the multi-stage selector remains diagnostic-only. The result
does not establish Product adoption, Adaptive Cascade, Human Review, a
quality solver, Product integration/default, provider, SLA, or release
readiness.

## Claim-level manifest

| Claim | Latest authority | Current Roadmap consequence | Eligible detail for later pointer | Proposed disposition |
| --- | --- | --- | --- | --- |
| Fail-closed classification | Risk-Gate result | Failed/timeout/nonzero probes fail closed; no unverified selected result | Failure-injection outputs, per-arm counts, dated diagnostic setup | **A - compress with explicit bounded qualifier** |
| Generation-order sensitivity | Risk-Gate result | Prior diagnostic success is not invariant to generation-index perturbation | Perturbation matrices and returned-miss tables | **A - retain as live negative boundary** |
| Target rule | Risk-Gate result | Stable target rule remains `NOT ESTABLISHED` | Family/fingerprint formulation comparisons and dated alternatives | **A - pointer compression candidate, not closure** |
| Risk gate | Risk-Gate result and B3/B2 authorities | Risk-gate readiness remains `OPEN`; selector remains diagnostic-only | Independent-control details, trigger/threshold matrices | **A - retain live qualification** |
| Independent controls | Risk-Gate result | Evidence is not generalized risk-gate closure | Control graph detail, frontier misses, edge-perturbation detail | **A - delegated detail with open boundary adjacent** |
| Product/production adoption | Standing Roadmap and dedicated result boundaries | No Product adoption, selector policy, provider, default/integration, visual acceptance, or Human Review readiness | Dated status repetition only | **HOLD / do not reclassify** |

## Recommended next implementation pilot

Proceed only as **G2-B4 alone**, using A-style body compression with the
existing heading and generated anchor unchanged. The future edit should:

1. keep fail-closed behavior as bounded diagnostic safety evidence;
2. keep generation-order sensitivity and meaningful misses visible as current
   negative qualification;
3. keep risk-gate readiness `OPEN` and probe-target readiness `NOT
   ESTABLISHED` adjacent to the pointer;
4. keep the multi-stage selector diagnostic-only and preserve all Product,
   provider, quality, visual, Human Review, SLA, and release boundaries; and
5. delegate perturbation matrices, independent-control detail, formulation
   progression, and dated measurements to the dedicated result and the
   existing broad History unit.

No B disposition is proposed. The pilot is A-style because the heading must
remain a live qualification entry; it is not a History migration and must not
turn fail-closed safety into target stability or production readiness.

## Anchor and scope checks

The G2-B4 heading and generated anchor are retained as compatibility-sensitive
planning entries. The intended future edit is body-only. G2-B1, G2-B2, and
G2-B3 remain separate and are not reopened. No new History unit, taxonomy, or
responsibility model is needed for this preparation.

G2-C and G2-D are out of scope. Core/Extension/schema/runtime semantics,
maturity, acceptance, provider status, Product integration, and release status
are unchanged. Sibling repositories and `work/` are not modified.

## Human decision gate

The next decision is limited to authorizing the exact standalone G2-B4 A-style
body compression described above. Before any implementation, current authority
and inbound references must be rechecked. If preserving fail-closed safety
requires changing the target/risk status, selector policy, or Product
boundary, stop and return to Human review.
