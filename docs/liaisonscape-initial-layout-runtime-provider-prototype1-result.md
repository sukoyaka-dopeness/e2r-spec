# LiaisonScape Initial-Layout Runtime Provider Prototype 1

Date: 2026-09-11

Status: BOUNDED PROTOTYPE PASS; PRODUCT ADOPTION NOT PERFORMED

## Result

LiaisonScape now has an opt-in `deriveBoundedInitialLayout()` prototype in
`src/initial-layout-provider.ts`. It is not wired into `App.tsx`, so current
Product opening behavior is unchanged.

The prototype validates the runtime boundary rather than claiming that the
diagnostic materializer has already become the Product algorithm. It starts
from the current deterministic coordinate-less placement, applies a bounded
Node/label-envelope-only refinement, and never invokes routing, Relation-label
placement, feedback, drag, or persistence. It returns a complete immutable
position result or the current Product placement as a whole-result fallback.

## Verified contract

- deterministic canonical Entity ordering;
- finite, complete positions;
- Node-body clearance rejection;
- label-envelope objective without route ownership;
- explicit time budget and iteration bound;
- invalid-input and budget-exceeded fallback;
- no Dataset mutation and no dirty-state or Coordinate persistence;
- locale accepted as provider-scoped input, without cross-locale coordinate
  reuse.

The test suite passes `341/341`, including deterministic, invalid-input, and
budget-fallback cases. Lint, build, and `git diff --check` pass.

## Boundary and limitations

This prototype is intentionally not evidence that
`post-structural-relaxation-v1` can already be adopted. The existing Post
materializer remains in the diagnostic tool and uses a Product presentation
evaluator; the prototype tests a safer runtime seam with a deliberately
smaller responsibility. It therefore does not yet reproduce the cross-fixture
Post metrics or establish routing/label quality equivalence.

Before runtime integration, a follow-up must decide whether the actual Post
search can be expressed within this provider contract, or whether a separate
generic provider should be evaluated. It must then measure representative
small/medium/stress Datasets, locale changes, stored/mixed/coordinate-less
flows, and actual Product visual behavior. Whole-result fallback remains the
required safety mechanism.

## Decision and state

```text
provider boundary prototype       = PASS
current Product behavior          = UNCHANGED
runtime integration                = NOT STARTED
post candidate adoption           = HOLD
next gate                         = actual Product opt-in inspection and
                                     candidate-equivalence/budget evidence
```

Fresh10/Fresh11/Fresh12 evidence and the Fresh12 canonical Human Review
result are unchanged. No new governed Fresh lineage, push, tag, release,
deploy, or publication was performed.
