# LiaisonScape Parallel Physical-Side Decomposition Audit

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-PARALLEL-PHYSICAL-SIDE-DECOMPOSITION-AUDIT1`
- Scope: diagnostic comparison only

## Result

`INSUFFICIENT EVIDENCE - PARALLEL PHYSICAL-SIDE CAUSE NOT ISOLATED`

The current Lighthouse geometry does not provide a reverse-direction parallel
pair. Its only ordinary parallel group is `clara` to `thomas`, with two
Relations. The current source assigns distinct deterministic slots and the
focused tests establish separation and endpoint-order stability. A physical-
side normalization defect is therefore not demonstrated by this sample.

## Lighthouse parallel inventory

| Endpoint pair | Relation | Name | Source -> target | Index / count |
|---|---|---|---|---:|
| clara / thomas | clara-thomas-mentors | mentors | clara -> thomas | 0 / 2 |
| clara / thomas | clara-thomas-supervises | supervises | clara -> thomas | 1 / 2 |

The two `beacon` self-Relations (`beacon-self-monitor` and
`beacon-self-calibrate`) are not an ordinary parallel group for this audit;
self-loop geometry has its own orientation and radius logic.

## Live routing decomposition

For ordinary parallel Relations the pipeline is: graph grouping, canonical
parallel index/count assignment, endpoint vector and normal, base signed curve
offset, optional manual offset, obstacle candidate search, occupied-path
adjustment, final control point, sampling, and SVG path. The base offset is
`+/- (40 + 24 * rank)` according to parallel index parity. The normal is derived
from the directed source-to-target vector, so semantic direction and physical
curve side are separate concepts that must be compared together.

The application computes a canonical routing priority by source ID, target ID,
then Relation ID. `buildEntityGraph` assigns parallel indices consistently for
the endpoint group, while rendered route order may still affect occupied-path
candidate selection. Manual `edgeCurveOffsets` bypass automatic offset
selection and are user-owned presentation state.

## Findings

- Base slot assignment is visibly distinct for the Lighthouse two-Relation
  group and is covered by existing deterministic parallel tests.
- Obstacle and occupied-path stages can change the final control point from the
  base slot, so a same-side appearance cannot be attributed to slot assignment
  without a stage comparison.
- Endpoint reversal is tested, but the Lighthouse sample alone cannot establish
  the product objective for opposite-direction Relations sharing a pair.
- No current evidence shows that manual Presentation or stored geometry causes
  the reported appearance; no manual parallel payload was introduced here.
- The sample contains no ordinary reverse-direction parallel pair, so the key
  physical-side normalization case remains unobserved.

## Required counterfactual before implementation

Freeze the current stored node coordinates and compare straight baseline, base
parallel slot only, base plus obstacles, base plus occupied paths, and current
automatic final geometry. Use synthetic same-direction, reverse-direction, and
three-Relation groups. Record signed internal offset, canonical physical-side
sign, control point, route length, foreign-node clearance, crossing changes,
and label ownership. A zero-centered slot arrangement may be evaluated as a
diagnostic candidate only; it is not an accepted production rule.

Do not change arrow direction, Relation semantics, routing constants, or
Presentation persistence from this audit. Parallel routing, self-loop
ordinary-path awareness, foreign-node proximity, label recovery, and general
crossing minimization remain separate follow-ups.

No runtime, test, sample, schema, Coordinate, Presentation, Core, Extension,
Validator, or release operation was changed. NarrativeLine Display-Order
remains not started.
