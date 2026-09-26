# LiaisonScape Self-loop Owner-local Recall-aware Pruning + Dependency Fingerprint 1

Date: 2026-09-14

Status: **FALSE-NEGATIVE GATE FAILED / FULL-DOMAIN RECALL SHORTAGE CONFIRMED / DEPENDENCY FINGERPRINT NOT SUFFICIENT / NOT READY FOR HUMAN REVIEW**

## Scope and decision

This checkpoint tested whether owner-local Self-loop finalist pruning and
stage-specific dependency reuse can make the existing bounded Self-loop
search production-native without losing Product-authoritative candidates.
It did not change the production selector, Product provider, default/adoption,
or any responsibility boundary. Self-loop routing remains Self-loop authority;
Structural Placement continues to provide geometry only. Ordinary routing,
endpoint-plan evaluation, Parallel/Incident allocation, and final Relation-label
and Node-label presentation remain their existing authorities.

The result is a stronger negative result than the preceding retained-product
recall study. The current retained `6^loop-count` product is useful as a
bounded diagnostic reference, but it is not a safe substitute for the full
`72^loop-count` owner-group domain. In the evaluated 2-loop cases, current
top-24 finalist retention missed the full-domain best plan in every case and
missed most or all of the full-domain Pareto front. In the two cases with
full-domain feasible plans, it retained only `2/394` and `7/1,514` feasible
plans. None of the tested pruning strategies establishes a globally
false-negative-safe contract. Dependency reuse is exact only under a strict,
stage-specific semantic guard and is too sparse to close this gap.

Disposition: do not promote owner-local pruning, dependency reuse, or a new
Self-loop candidate to Product or Human Review. Keep the Initial Layout
Release blocker `OPEN`, Product default/adoption `HOLD`, and production
provider `NOT ESTABLISHED`.

## Correction to the preceding recall artifact

The preceding document
`liaisonscape-self-loop-owner-local-recall-reuse1-result.md` reported `24`
single-loop false negatives. That number was an aggregation of the displayed
false-negative example arrays. Each loop stored at most 12 examples, so the
array length was not the total count.

This checkpoint keeps the historical result document unchanged and records
the corrected accounting here:

| quantity | corrected value |
| --- | ---: |
| single-loop reference candidates | 32 loops × 72 candidates |
| actual single-loop false-negative total | 30 |
| displayed false-negative examples | capped at 12 per loop |
| retained owner-group authoritative combinations | 5,472 |
| previous displayed aggregate | 24; not a total |

The correction changes the count and the confidence statement, not the
previous quality matrix. Any future report must keep total counts separate
from capped diagnostic examples.

## Reference boundaries

The audit uses three explicitly different boundaries.

1. **Single-loop reference:** all 72 angle/radius candidates for every loop.
   This is the authoritative reference for single-loop feasibility, best
   candidate, Pareto membership, and failure-class comparison.
2. **Retained-product reference:** all current owner-local `6^loop-count`
   combinations. This is authoritative only for comparing pruning inside the
   already-retained product. It contains 1,296 combinations for 4-loop groups
   and 36 for 2-loop groups, for 5,472 combinations across the 12 cases.
3. **Full-domain owner-group reference:** all `72^loop-count` combinations
   when the domain is at most 5,184. All eight 2-loop groups were evaluated
   at 5,184 combinations. The four 4-loop groups would require 26,873,856
   combinations each and were explicitly not evaluated. They must not be
   described as full-domain ground truth.

The full-domain evaluations are Node diagnostic measurements and are not a
browser-runtime claim. Measured 2-loop full-reference arms took approximately
5.0–19.9 seconds for the synthetic controls and 69.6–70.5 seconds for
Titanic EN/JA. This cost is itself evidence that Product-authoritative
evaluation cannot be treated as an unlimited inner loop.

## Pruning and false-negative gate

The audit compared the current finalist policy with six diagnostic alternatives:

- `current-top24`;
- `screen-pass-all`;
- `pairwise-hard-conflict-pruned`;
- `incremental-hard-screen-pruned`;
- `cheap-pareto-top24`;
- `failure-class-diverse-top24`;
- `orientation-radius-diverse-top24`.

The false-negative gate requires, within the stated reference boundary, all
authoritative feasible plans, the authoritative best plan, the full
authoritative Pareto front, and at least one representative of every failure
class to remain available. Keeping one best plan is explicitly insufficient.
The gate also treats the fallback-only outcome as a failure, not as recall.

The audit evaluated 84 strategy/case arms. Ten local arms pass the gate only
against their bounded retained-product reference. This is not a global success:
all eight full-domain 2-loop `current-top24` comparisons fail the full-domain
best/Pareto requirement, and the feasible cases have large false-negative
counts. The apparent local passes occur because a retained product can already
exclude the omitted 72-domain candidates before pruning is tested.

Representative retained-product signals:

| case | retained product | current feasible recall | current Pareto recall | observation |
| --- | ---: | ---: | ---: | --- |
| Lighthouse EN | 1,296 | no feasible plan | 5.32% | best retained, front not retained |
| Lighthouse JA | 1,296 | no feasible plan | 4.72% | same pattern |
| Titanic EN | 36 | no feasible plan | 75.00% | hard screens empty the arm |
| isolated EN | 36 | 100% | 88.89% | only a retained-domain success |
| isolated JA | 36 | 46.67% | 85.71% | 8 retained feasible plans are false negatives |
| symmetric EN | 36 | no feasible plan | 77.78% | cheap screen does not prove authority |
| perturbed EN | 36 | no feasible plan | 46.15% | diversity does not restore recall |
| fan-out EN | 1,296 | no feasible plan | 2.02% | high-degree coupling remains |

The hard-screen variants sometimes retain zero candidates, including difficult
canonical, Titanic, perturbed, and fan-out arms. This is a useful diagnostic
counterexample: a local screen can reject every member of the current product
without proving that the full Product-authoritative domain is infeasible.
Cheap Pareto selection also loses feasible candidates in isolated controls.
Failure-class and orientation/radius diversity improve diagnostic coverage in
some arms, but do not recover the missing best or Pareto candidates.

## Full-domain evidence

The 2-loop full-domain reference is the decisive boundary for this checkpoint.

| case | full candidates | full feasible | current top-24 feasible retained | full Pareto | top-24 Pareto recall | full-reference runtime |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Titanic EN | 5,184 | 0 | 0 | 469 | 0.21% | ~69.6 s |
| Titanic JA | 5,184 | 0 | 0 | 417 | 1.20% | ~70.5 s |
| isolated EN | 5,184 | 394 | 2 | 166 | 0% | ~5.8 s |
| isolated JA | 5,184 | 1,514 | 7 | 148 | 0% | ~5.1 s |
| symmetric EN | 5,184 | 0 | 0 | 508 | 1.18% | ~19.1 s |
| symmetric JA | 5,184 | 0 | 0 | 517 | 0.19% | ~19.9 s |
| perturbed EN | 5,184 | 0 | 0 | 591 | 0% | ~16.6 s |
| perturbed JA | 5,184 | 0 | 0 | 508 | 0% | ~17.5 s |

For isolated EN and JA, the current product has full-domain false-negative
feasible counts of 392 and 1,507 respectively. The current best plan is not
retained in any of the eight full-domain groups. These results reject the
interpretation that the current top-6 owner-local candidate set is a safe
compression of the 72-candidate single-loop domain.

The 4-loop arms remain bounded diagnostic retained-product measurements only.
Their full domain is deliberately out of budget; the result is therefore not
a claim that every 4-loop candidate was rejected, nor that a full 4-loop
reference is unnecessary.

## Dependency fingerprint and reuse

The proposed reuse key was decomposed by semantic stage instead of using one
opaque cache key:

- **routing:** ordinary and non-owner Self-loop route geometry plus
  occupied-path arbitration semantics;
- **Relation-label:** unaffected Relation-label geometry and obstacle ordering;
- **Node-label:** non-owner Node-label geometry and occupied Relation-label
  inputs;
- **viewport:** positions and fit inputs;
- **semantic guard:** exact equality of complete routed edges, Relation-label
  map, Node-label map, viewport result, feasibility class, and ordinary-route
  churn.

This is the minimum useful shape for a future diagnostic fingerprint because
route equality alone is not sufficient. In the retained-product study,
exactly 104 of 5,472 combinations were eligible for the strict reuse
projection (1.9%). Eligibility was concentrated in easy isolated/symmetric
subcases and was zero in the principal Lighthouse, Titanic, perturbed, and
fan-out arms. Reusing a route while allowing labels or occupied-path ordering
to differ would be semantically unsound under the current Product authority.

The evidence therefore supports a stage-specific fingerprint as a correctness
guard, but not as a performance closure. A fingerprint may identify exact
reuse opportunities after a candidate survives the relevant authority checks;
it cannot justify pruning candidates before full semantic equivalence is
known.

## Responsibility attribution

The observed shortage is not evidence that Self-loop routing or final label
authority should move into Structural Placement.

- **Self-loop owner-local search:** owns angle/radius candidate generation and
  local candidate identity. Its current 72-domain finalist compression is
  recall-unsafe.
- **ordinary routing and occupied-path arbitration:** remain coupled to the
  candidate evaluation. Local hard screens can be false-safe or empty the
  search because they do not reproduce all later route interactions.
- **Relation-label and Node-label presentation:** remain Product authority.
  Their geometry and obstacle ordering must be included in semantic reuse
  guards; route-only fingerprints are insufficient.
- **endpoint-plan and capacity:** remain authoritative downstream checks.
  The retained product cannot be promoted as an endpoint-capacity-safe
  contract when full-domain feasible plans are omitted.
- **Structural Placement:** may provide improved Node geometry and coarse
  capacity signals, but must not absorb Self-loop routing, ordinary routing,
  final labels, or endpoint-plan authority.

The dominant issue is coupling across these existing authorities, not a missing
single local offset or a need for a larger arbitrary cap.

## Product, browser, and Human Review status

No new Product candidate was integrated. Consequently, no Actual Product
visual smoke check was appropriate for this checkpoint. The diagnostic audit
was not used to claim Product visual quality, and no formal Human Review was
started. Prior Human Review evidence is not inherited by this candidate or
this checkpoint.

The audit remains browser-native in implementation shape—bounded candidate
sets, deterministic probes, and explicit caps—but the measured full-domain
authority cost and recall loss mean that browser-native bounded production
feasibility is not established.

## Outcome and roadmap position

This checkpoint is **B-leaning and more specifically a recall-boundary
failure** for the owner-local Self-loop branch. It does not prove that every
possible decomposition is impossible, but it does prove that the current
`top-6`/`top-24` owner-local compression and the tested pruning families are
not a safe production-native state-space reduction. The dependency fingerprint
is a useful semantic guard, not a sufficient reduction mechanism.

The next decision should remain at the architecture boundary: do not add more
local pruning heuristics to Initial Placement without a new proof of recall.
The broader Fast Initial Placement plus explicit High-quality Auto Layout
responsibility split may be considered as an architecture option, but this
checkpoint does not formally adopt it. Adaptive Initial Placement Cascade is
not entered. Self-loop-local routing/label work may continue only as a
separate diagnostic track with explicit full-domain or statistically justified
reference boundaries.

## Reproduction and changed artifacts

The diagnostic source and output are:

- `e2r-liaison-scape/tools/self-loop-local-capacity-allocation-audit.mjs`
  (`--prune-fingerprint` mode; diagnostic only);
- `e2r-liaison-scape/experimental/self-loop-owner-local-pruning-fingerprint/audit.json`;
- this checkpoint document;
- the corresponding roadmap synchronization.

The historical recall/reuse result and historical capacity/runtime documents
were not rewritten. Dataset, authored/stored coordinates, persistence,
dirty-state, Save Coordinates, manual placement/curvature, manual
Relation-label semantics, Product provider/default, and session logs were not
changed.

Validation is limited to the diagnostic/source and repository gates reported
with this checkpoint. No push, tag, release, deploy, publish, or history
rewrite was performed.
