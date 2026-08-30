# LiaisonScape Parallel Synthetic Physical-Side Counterfactual

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-PARALLEL-SYNTHETIC-PHYSICAL-SIDE-COUNTERFACTUAL1`
- Scope: diagnostic counterfactual only

## Result

`CAUSALITY CONFIRMED - REVERSE-ENDPOINT PHYSICAL-SIDE NORMALIZATION FIX REQUIRED`

Using frozen synthetic geometry A=`(0,0)`, B=`(200,0)`, the production
`routeGraphEdge` helper was evaluated without changing runtime or samples.
Relative to canonical A->B, control y > 0 is POSITIVE and y < 0 is NEGATIVE.

| Case | Directions | Index 0 | Index 1 | Index 2 | Finding |
|---|---|---|---|---|---|
| S2 | A->B, A->B | POSITIVE, +40 | NEGATIVE, -40 | - | opposite sides |
| R2 | A->B, B->A | POSITIVE, +40 | POSITIVE, +40 | - | same-side collapse |
| S3 | A->B x3 | POSITIVE, +40 | NEGATIVE, -40 | POSITIVE, +64 | biased; no center |
| M3 | A->B x2, B->A | POSITIVE, +40 | NEGATIVE, -40 | NEGATIVE, -64 | mixed bias |
| M4 | A->B x2, B->A x2 | POSITIVE, +40 | NEGATIVE, -40 | NEGATIVE, -64 | unequal sides |

With obstacle C=`(100,40)`, S2 became NEGATIVE at both indices: index 0
switched from +40 to -52 while index 1 remained -40. Thus obstacle candidate
selection can collapse an otherwise opposite-side pair, independently of the
base slot defect.

The source derives its normal from directed source-to-target and its base sign
from parallel-index parity. Reversing endpoints reverses the normal while
retaining the sign, mapping both Relations to the same canonical side. ID order
changes slot ownership but does not remove this direction-dependent mapping.
Manual offsets are separate user-owned controls and were not primary evidence.

## Causal answers and scope

- Q1: YES, same-direction pairs separate at base slots.
- Q2: NO, the reverse-direction pair collapses to one side.
- Q3: YES, endpoint reversal changes physical side with unchanged slot sign.
- Q4: YES, R2 reproduces same-side collapse.
- Q5: YES, an obstacle can collapse S2 at the solver stage.
- Q6: NOT ISOLATED; occupied paths were not needed for the collapse.
- Q7: NO; ID order changes ownership, not the normalization defect.

The smallest candidate is `REVERSE-ENDPOINT PARALLEL PHYSICAL-SIDE
NORMALIZATION`, followed by a focused A->B plus B->A regression test. Obstacle
side preservation remains separate and must be evaluated for crossing,
clearance, labels, and route length. No runtime, tests, sample, payload,
schema, Core, Extension, Validator, or release operation was changed.
Self-loop, foreign-node, label, crossing, and NarrativeLine Display-Order
findings remain separate.
