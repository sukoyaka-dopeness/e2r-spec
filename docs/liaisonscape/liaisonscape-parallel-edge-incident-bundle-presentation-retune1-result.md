# LiaisonScape Parallel Edge / Incident Bundle Presentation Retune 1

Date: 2026-09-13

## Decision

**RETUNE / READY FOR HUMAN REVIEW.** The bounded bundle-aware slot policy is
implemented as an opt-in presentation experiment. It improves same-side slot
separation for groups larger than two and preserves the existing physical-side
and manual-route boundaries, but canonical machine evidence is mixed and no
human Actual Product acceptance has been recorded for this candidate.

Product default/adoption remains `HOLD`. Initial Layout is unchanged and its
Release blocker remains `OPEN`. This result does not alter the separate
Self-loop track or the existing G3/Frontier human evidence.

## Current semantics and bounded change

Automatic non-self routes use canonical endpoint ordering and the existing
`canonicalPhysicalSideSign` to keep physical side stable for reverse-direction
Relations. Parallel index determines alternating side and rank. The existing
base slots are `40 + (rank - 1) * 24` graph units from the direct chord;
occupied-path, Node-obstacle, label-obstacle, and route arbitration still run
after slot construction.

The change adds optional `parallelBundleSpacing` and
`parallelBundleMode` inputs to the Product-owned route/presentation path:

- `pair` adds the same 16-unit diagnostic spacing to every parallel slot.
- `bundle` adds spacing according to group cardinality and slot rank, so
  same-side slots in a 3+ group are separated as one incident bundle.
- the default is zero spacing, so normal Product callers retain the existing
  route output;
- manual curve offsets and self-loop branches remain authoritative and do not
  consume this policy;
- ordinary Relations still participate in the existing occupied-path
  arbitration rather than being assigned a parallel slot.

The Actual Product review seam exposes `parallel-pair-16` and
`parallel-bundle-16`. Both reuse the `global-placement3` coordinate result and
exercise the normal Dataset open, Product routing, labels, viewport fit, and
interaction surface. They do not create a new Initial Layout provider. The
review surface is development-only; production builds do not expose the
canonical fixture endpoint or activate the variant.

## Matched machine evidence

The canonical runs used the existing Product presentation evaluator, one full
presentation evaluation per cell, direct-current/G3 coordinates, Stage 2 off,
and compared spacing 0 with pair/bundle spacing 16. Values are
`crossings / Relation-label route hits / labelNear20`, followed by median/max
route length in graph units.

| Cell | No spacing | Pair-16 | Bundle-16 | Observation |
| --- | --- | --- | --- | --- |
| Lighthouse EN | 8 / 4 / 6; 115.1 / 266.6 | 8 / 4 / 6; 118.1 / 266.6 | 8 / 4 / 6; 118.1 / 266.6 | neutral defect metrics; small route-length increase |
| Lighthouse JA | 8 / 2 / 6; 131.9 / 266.6 | 8 / 2 / 6; 143.2 / 273.8 | 8 / 2 / 6; 143.2 / 273.8 | neutral defect counts; measurable route-length trade-off |
| Titanic EN | 4 / 2 / 3; 109.9 / 268.4 | 4 / 1 / 3; 113.1 / 268.4 | 4 / 1 / 3; 113.1 / 268.4 | one label-hit improvement; known crossings remain |
| Titanic JA | 4 / 1 / 2; 116.9 / 268.4 | 4 / 1 / 2; 116.9 / 268.4 | 4 / 1 / 2; 116.9 / 268.4 | no machine change |
| Apollo EN | 6 / 2 / 2; 120.5 / 235.8 | 6 / 2 / 2; 120.5 / 235.8 | 6 / 2 / 2; 120.5 / 235.8 | no machine change |
| Apollo JA | 6 / 3 / 4; 87.7 / 235.8 | 6 / 3 / 4; 87.7 / 235.8 | 6 / 3 / 4; 87.7 / 235.8 | no machine change |

All runs had zero label-overlap pairs and one authoritative evaluation. Elapsed
time was approximately 56--78 ms per diagnostic run; this policy does not
reduce evaluation count and is not a Release-runtime solution.

## Synthetic geometry and arbitration evidence

The same route implementation was exercised with deterministic synthetic
graphs containing the requested structural cases:

- **Two parallel + nearby ordinary Relation:** the two-route midpoint
  separation increased from 47.1 to 66.0 units with pair/bundle 16. The
  ordinary route retained its normal non-parallel path in the control case.
- **Three parallel Relations:** pair-16 left the minimum same-side slot gap at
  14.1 units; bundle-16 increased it to 23.6 units. This is the reason to keep
  bundle-aware widening rather than treating pair widening as sufficient.
- **Reverse-direction parallel groups:** the forward and reverse groups kept
  opposite canonical physical-side signs under both policies. Slot ordering
  is deterministic; direction reversal does not collapse both groups onto one
  physical side.
- **Nearby obstacle Node:** the first parallel route still avoided the
  obstacle's 60-unit Node-influence radius while occupied-path arbitration
  remained active. Spacing did not bypass the existing route safety checks.
- **Manual and Self-loop controls:** manual curve offsets were unchanged when
  spacing was enabled, and the self-loop geometry was unchanged. The
  implementation does not attempt to solve Self-loop/ordinary interaction.

These are geometry and Product-evaluator regression observations, not a claim
that a screenshot-level human judgment has passed. A three-or-more synthetic
group demonstrates the bundle mechanism; it does not establish that every
dense incident bundle is visually acceptable.

## Product review boundary

The development review surface can be opened with the existing six canonical
fixture/locale combinations and either arm:

`http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/ecr3-actual-product/?fixture=<lighthouse|titanic|apollo-11>&locale=<en|ja>&arm=<parallel-pair-16|parallel-bundle-16>`

The banner identifies the active arm. A human review should compare pair-16
and bundle-16 against the same-cell `global-placement3` reference and inspect:
the gap between parallel routes, clearance to outer ordinary incident routes,
label-to-route association, 3+ and reverse groups, obstacle detours, and the
known Titanic long-label presentation. The existing Titanic/Apollo
presentation issues must remain classified as pre-existing downstream issues
unless the bundle arm alone amplifies them.

No user human review was performed in this checkpoint. Accordingly, the
candidate has no `ACCEPT` disposition and no existing human evidence is
inherited.

## Validation and boundaries

The new regression file is `tests/parallel-bundle-presentation.test.ts`.
It covers default equivalence, two- and three-edge spacing, reverse direction,
manual offsets, ordinary Relations, obstacle arbitration, and Self-loop
non-interference. The implementation changes are confined to the optional
route/presentation inputs, the development review seam, and the diagnostic
search environment plumbing. Initial Layout candidate selection, routing
authority, Relation-label placement authority, Node placement, persistence,
and Dataset semantics are unchanged.

Required gates for this checkpoint: full LiaisonScape test suite, lint,
production build, diff check, and E2R-SPEC validation. No push, tag, release,
deploy, or publication occurred.
