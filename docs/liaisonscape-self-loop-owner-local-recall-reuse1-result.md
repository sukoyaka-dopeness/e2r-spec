# LiaisonScape Self-loop Owner-local Finalist Recall + Dependency Reuse 1

Date: 2026-09-14
Status: `RECALL SHORTAGE CONFIRMED / DEPENDENCY REUSE NOT GENERALIZED / NOT READY FOR HUMAN REVIEW`
Checkpoint: `E2R-LIAISONSCAPE-SELF-LOOP-OWNER-LOCAL-RECALL-REUSE1`

## Purpose and boundary

This is an independent diagnostic study of the owner-local allocation
direction identified by the Self-loop-local Capacity Allocation checkpoint.
It does not implement a production selector, reduce the hard feasibility
contract, or change any Product authority. Its purpose is to determine whether
the current cheap screen can retain authoritative-important candidates and
whether owner-local dependency reuse is semantically safe often enough to
justify a smaller bounded search.

The existing diagnostic contract is unchanged:

- ordinary clearance: `8px`;
- peer-loop clearance: `8px`;
- Node-label and Relation-label clearance: `4px`;
- viewport margin: `12px`; and
- ordinary route churn must not exceed the current baseline.

No diagnostic fallback is treated as feasible.

## Ground-truth boundaries

The study uses two explicit bounded references:

1. **Single-loop full-domain reference:** all `72` angle/radius candidates for
   each loop are evaluated through the current Product-authoritative route,
   final Relation-label, final Node-label, viewport, and ordinary-churn
   pipeline.
2. **Owner-group retained-product reference:** all `6^loop-count` combinations
   retained by the current per-loop cheap screen are evaluated authoritatively.

The full owner-group domain of `72^loop-count` is not evaluated. Its size is
recorded but is not silently treated as ground truth. This prevents a bounded
reference from being confused with proof over the complete global Cartesian
product.

Recall is reported as:

- feasible-plan recall;
- best-authoritative-plan recall;
- Pareto-front recall across feasibility, failure count, viewport, churn,
  clearance, and label-overlap dimensions; and
- top-24 authoritative-quality recall.

A false negative is an authoritative feasible or recall-target plan omitted
from the current retained finalist set. A cheap-screen false confidence is a
screen-pass candidate that fails the authoritative contract. A cheap-screen
false rejection is an authoritative feasible candidate rejected by the cheap
screen.

## Results

The study covered the same 12 Lighthouse/Titanic EN/JA, isolated, symmetric,
perturbed, and four-loop fan-out cases.

| Reference | Cases / evaluations | Main result |
| --- | ---: | --- |
| Single-loop full domain | `32` loops × `72` candidates | `24` feasible candidates were omitted from retained top-6 sets; isolated controls exposed the false negatives |
| Retained owner-group product | `12` groups / `5,472` combinations | `8` feasible combinations were omitted from current top-24 finalists; all occurred in isolated JA |
| Dependency reuse projection | `5,472` authoritative combinations | `104` exact semantic matches (`1.9%`) |

### Single-loop recall

The current per-loop top-6 retention is not recall-safe:

- isolated EN loop 1: feasible-plan recall `0%`;
- isolated JA loop 1: feasible-plan recall `10%`;
- isolated JA loop 2: feasible-plan recall `0%`; and
- canonical, symmetric, perturbed, and fan-out loops had no feasible single
  candidate under the tested contract, so their feasible recall is not
  informative.

The result is a concrete false-negative signal, not merely a runtime tradeoff:
the cheap ranking can discard a Product-authoritative feasible Self-loop
candidate before owner-group allocation sees it.

### Owner-group recall

Best-plan recall was `true` for every owner group, but that is insufficient for
quality because the authoritative Pareto sets are much larger than one plan.

- Lighthouse Pareto recall: approximately `4.7-5.3%`;
- Titanic Pareto recall: approximately `58.8-75%`;
- symmetric Pareto recall: `77.8%`;
- perturbed Pareto recall: approximately `46.2-61.9%`; and
- four-loop fan-out Pareto recall: approximately `1.1-2.0%`.

The isolated controls are the only groups with feasible plans. Isolated EN
captured all two feasible retained-product plans. Isolated JA captured only
`7/15` feasible plans (`46.67%`) and omitted eight authoritative feasible
combinations. Its top-24 quality recall was only `66.67%`.

The retained-product result therefore separates two facts: current top-24
selection often preserves one best plan, while it does not preserve the
authoritative feasible/Pareto family needed for a robust owner-local contract.

### Cheap-screen false confidence

The screen does not evaluate final label envelopes. This produced false
confidence in the retained reference:

- isolated EN group: `34` screen-pass combinations later failed
  authoritative evaluation;
- isolated JA group: `21` screen-pass combinations later failed; and
- symmetric EN/JA groups: `36/36` screen-pass combinations later failed at
  the authoritative boundary.

No cheap-screen false rejection of an authoritative feasible retained-product
combination was observed in this reference. This does not prove absence over
the excluded `72^loop-count` domain.

## Dependency reuse evidence

The diagnostic reuse projection reused baseline ordinary routes, non-owner
Self-loop routes, unaffected Relation labels, and non-owner Node labels. It
replaced only owner-loop outputs and the owner Node label. Reuse was eligible
only when that projection exactly matched the complete Product-authoritative
result.

Exact eligibility was:

- Lighthouse: `0/2,592`;
- Titanic: `0/72`;
- isolated EN/JA: `72/72`;
- symmetric EN: `24/36`, symmetric JA: `8/36`;
- perturbed EN/JA: `0/72`; and
- four-loop fan-out EN/JA: `0/2,592`.

The aggregate was `104/5,472` (`1.9%`). Ordinary route equality alone was not
enough: Relation-label and Node-label outputs could still change. This is
evidence against unconditional reuse of route or label results. A future reuse
seam would need an explicit dependency fingerprint and an authoritative
equivalence guard; a numeric cache alone is not sufficient.

The current Product source also keeps route arbitration and final labels in a
single downstream pipeline. No production extraction was made in this study.

## Runtime and search shape

This reference is intentionally expensive because it measures recall against
the Product-authoritative boundary:

- Lighthouse retained-product reference: approximately `19.5-19.8s` per
  locale;
- Titanic retained-product reference: approximately `0.60-0.62s` per locale;
- fan-out retained-product reference: approximately `6.6-6.8s` per locale;
- full single-loop references: `32 × 72` authoritative evaluations in total.

The full-reference wall-clock values are diagnostic Node measurements, not
browser runtime claims. They demonstrate why a reuse or pruning contract is
needed, but they do not establish that such a contract is safe.

## Decision

The study confirms a real finalist-recall problem. The current top-6 / top-24
policy can lose feasible and Pareto-relevant authoritative candidates, even
inside the bounded retained reference. The quality shortages in canonical and
dense cases cannot yet be attributed solely to recall because their retained
reference itself has no feasible plan and the full `72^loop-count` group domain
was not evaluated. Downstream presentation capacity remains an independent
shortage.

Dependency reuse is useful for isolated controls but is not generalized:
ordinary route stability does not guarantee Relation-label or Node-label
stability, and exact owner-local semantic reuse was only `1.9%` overall.

Therefore:

- no production selector or radius policy is changed;
- no finalist is accepted from diagnostic fallback;
- no Product provider or default/adoption decision is made;
- no Adaptive Cascade or Fast Initial + High-quality Auto Layout decision is
  made;
- Self-loop responsibility separation remains confirmed but quality-open;
- Parallel / Relation-label follow-up remains `OPEN`; and
- no candidate is ready for Actual Product smoke acceptance or Human Review.

The next research, if authorized, should be a bounded recall-aware pruning
study with an explicit false-negative gate and dependency fingerprint. It must
retain Product-authoritative verification and should not be described as
browser-native until recall and semantic equivalence are both demonstrated.

## Actual Product and change boundary

No new Product candidate was integrated. This was a diagnostic reference study
only, so no new Actual Product smoke check was required and no formal visual
acceptance was performed.

Changed for this checkpoint:

- `e2r-liaison-scape/tools/self-loop-local-capacity-allocation-audit.mjs`
  (`--recall-reuse` diagnostic mode);
- `e2r-liaison-scape/experimental/self-loop-owner-local-recall-reuse/audit.json`;
- this result document; and
- `e2r-spec/docs/roadmap.md`.

Historical result documents, production runtime source, Dataset, stored or
authored Coordinates, persistence, dirty-state, Save Coordinates, manual
placement/curvature/label semantics, endpoint-plan authority, Parallel /
Incident architecture, and session log were not changed.

Product default/adoption remains `HOLD`, the production provider remains `NOT
ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`.
