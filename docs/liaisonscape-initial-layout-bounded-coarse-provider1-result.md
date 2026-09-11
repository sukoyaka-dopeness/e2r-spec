# LiaisonScape Initial-Layout Bounded Coarse Provider 1

Date: 2026-09-11

Status: BOUNDED PROVIDER CANDIDATE PASS; PRODUCT INTEGRATION NOT STARTED

## Scope

This checkpoint places `coarse-objective-prototype-v1` behind the existing
bounded initial-layout provider boundary. It does not wire the strategy into
the normal Product opening path and does not adopt it as the Product default.

## Implementation boundary

`deriveBoundedInitialLayout()` now accepts an explicit provider strategy:

```text
label-envelope-v1
coarse-objective-prototype-v1
```

The coarse strategy delegates candidate generation to the existing cheap
coarse objective and applies the same provider boundary checks:

- canonical Entity ordering and Product-visible relation projection;
- finite and complete positions;
- existing Node-body clearance safety check;
- explicit iteration and time budget;
- no routing, Relation-label placement, feedback, drag, or persistence
  authority;
- whole-result fallback on unsafe or budget-exceeded candidates; and
- explicit `ownership: "derived"` in the provider result.

The provider never exposes a partial coarse candidate. Stored Coordinates,
mixed-coordinate handling, Dataset dirty state, and Save Coordinates remain
outside this opt-in provider.

## Runtime evidence

The following single-run diagnostic measurements used a 100 ms budget and two
coarse iterations. They are feasibility evidence, not a performance guarantee.

| Fixture | Nodes | Visible relations | Provider result | Elapsed |
| --- | ---: | ---: | --- | ---: |
| Lighthouse EN | 10 | 14 | completed | 17.067 ms |
| Lighthouse JA | 10 | 14 | completed | 5.036 ms |
| Apollo 11 EN | 9 | 11 | whole-result fallback: unsafe seed | 0.603 ms |
| Apollo 11 JA | 9 | 11 | whole-result fallback: unsafe seed | 0.283 ms |
| Titanic EN | 13 | 12 | completed | 16.048 ms |
| Titanic JA | 13 | 12 | completed | 8.378 ms |

The completed results identify themselves as
`coarse-objective-prototype-v1` and `ownership: "derived"`. Apollo EN/JA
preserve the current fallback because the candidate seed is unsafe; this is a
safe rejection, not evidence that Apollo has been visually accepted or that
the coarse strategy is equivalent to Post.

## Verification

The LiaisonScape suite passed `349/349`, including provider strategy
selection, deterministic output, derived ownership, and coarse whole-result
budget fallback. Lint and production build passed.

## Classification

### PROVEN

- The coarse diagnostic generator can be invoked through the bounded provider
  contract without changing the normal Product path.
- Determinism, bounded iterations, finite/complete output, derived ownership,
  and whole-result fallback are testable provider properties.
- Unsafe coarse candidates do not replace the current placement.

### STRONGLY SUPPORTED

- The provider boundary is a viable opt-in diagnostic seam for further Actual
  Product evaluation.
- The strategy is feasible at the tested small/medium public-sample sizes
  under the current prototype budget.

### UNRESOLVED

- Post visual or metric equivalence;
- absence of a coarse-specific visual defect across all fixtures/locales;
- acceptable behavior for larger or denser arbitrary Datasets;
- whether the coarse objective is sufficiently general for Product adoption;
- stored/mixed/coordinate-less integration behavior in the normal Product
  authority.

## Decision and preserved state

```text
bounded coarse provider candidate = PASS
Actual Product normal integration = NOT STARTED
Product adoption                 = HOLD
Post equivalence                 = NOT PROVEN
new governed Fresh lineage       = NOT STARTED
historical Fresh evidence        = UNCHANGED
push/release/deploy/publication  = NOT PERFORMED
```

The next valid gate is opt-in Actual Product evaluation of this provider
strategy, with the existing user-observation boundary still in force. It is
not an adoption decision.
