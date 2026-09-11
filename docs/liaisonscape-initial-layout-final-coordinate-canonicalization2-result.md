# LiaisonScape Initial-Layout Final Coordinate Canonicalization 2

Date: 2026-09-11

Status: TRUE FINAL-SELECTION BOUNDARY CONFIRMED; ROUNDED PRODUCT HUMAN GATE REMAINS REQUIRED

## Purpose and correction

This checkpoint audits the boundary between the generic search winner and
serialization-safe coordinate canonicalization. The preceding
`liaisonscape-initial-layout-final-coordinate-canonicalization1-result.md`
recorded the intended boundary, but the implementation at that point applied
`round-once` inside `constrainedPostStructuralRelaxation()` and then returned
that rounded result to the generic candidate pool. That sequence could be read
as:

```text
relaxation-local best -> round once -> generic candidate re-ranking -> final selected
```

That is a responsibility leak: the relaxation-local `best` is not the generic
search's final winner. The earlier document is retained as historical
checkpoint evidence; it is not rewritten. This checkpoint establishes and
records the corrected implementation.

## Actual selection semantics

`constrainedPostStructuralRelaxation()` keeps its own float `best` according to
`constrainedRelaxationScore`. It is an internal output used to create one
candidate in the generic pool. It no longer canonicalizes that output.

`genericSearch()` then appends the relaxation candidate, performs its existing
candidate ordering across all families, and defines `candidates[0]` as
`floatSelected`. Only after that point does the diagnostic finalization seam
derive a nearest-integer candidate and run one full `presentationMetrics`
evaluation on those rounded positions.

The actual one-way sequence is now:

```text
float search and relaxation
  -> generic candidate pool final sort
  -> floatSelected = candidates[0]
  -> nearest-integer canonicalization once
  -> authoritative full Product presentation validation
  -> acceptance
```

The rounded result is not inserted into the candidate pool, does not trigger a
new generic sort, and cannot select a different float candidate merely because
its post-round score is better or worse. No relaxation is run after rounding.
`audit` reports the rounded comparison while retaining `floatSelected` as the
selected result; `round-once` exposes the rounded result as the selected output
for this diagnostic seam while retaining the same selected candidate identity.

The seam remains diagnostic-only and defaults to `off`:

```text
E2R_RELAXATION_FINAL_CANONICALIZATION=audit
E2R_RELAXATION_FINAL_CANONICALIZATION=round-once
```

Its reported boundary is
`AFTER_TRUE_FINAL_SELECTION_BEFORE_ACCEPTANCE`.

## Bounded machine audit

The audit used the existing `finalist-limit=2 + omit-fine` bounded research
configuration and the canonical E2R-SPEC Lighthouse, Titanic, and Apollo
English/Japanese examples. The unchanged full presentation pipeline was run
after rounding for the comparison metrics.

| Fixture / locale | Elapsed ms | Float winner family | Float score | Rounded score | Changed entities | Max displacement | Route changes | Relation-label changes | Node-label changes |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 8395 | post-structural-constrained-relaxation | 49194.54 | 49194.62 | 10 | 0.664 | 14 | 14 | 10 |
| Lighthouse JA | 8532 | post-structural-constrained-relaxation | 31488.90 | 31492.87 | 10 | 0.664 | 14 | 14 | 10 |
| Titanic EN | 9624 | post-structural-constrained-relaxation | 1546.11 | 1545.39 | 13 | 0.546 | 12 | 12 | 13 |
| Titanic JA | 9453 | post-structural-constrained-relaxation | 1079.73 | 1078.56 | 8 | 0.610 | 9 | 9 | 8 |
| Apollo EN | 6413 | post-structural-constrained-relaxation | 1014.25 | 1014.40 | 5 | 0.674 | 10 | 8 | 4 |
| Apollo JA | 6276 | post-structural-constrained-relaxation | 992.92 | 993.32 | 7 | 0.645 | 11 | 11 | 7 |

All six `audit` cells reported `selectedCandidateIndex = 0`, and the
`selected` identity and positions remained equal to `floatSelected`. A
`round-once` Lighthouse EN check selected the same candidate family and
returned integral coordinates; its selected score was the rounded score, not a
re-ranked alternative.

Every audited cell had at least one downstream route or label geometry change,
which is expected from the existing threshold-sensitive presentation pipeline.
However, no rounded-only increase occurred in crossings,
route-label hits, label-near/overlap metrics, or Node-body overlap. Extent and
fit changes were sub-unit/small. These are machine safety observations, not a
human visual equivalence claim.

## Responsibility and persistence boundary

Canonicalization does not feed back into optimizer selection. A rounded score
degradation therefore remains evidence about the chosen winner's serialization
boundary, not a reason to silently choose another float candidate. If that
behavior is unacceptable in a later release candidate, it must be studied as a
separate explicit integer-safe finalist policy.

The initial placement remains Derived. No canonical sample Dataset was
rewritten, and no Dataset was serialized by this checkpoint. Existing
`serializeDataset`, `applyStoredCoordinates`, Save Coordinates, dirty-state,
stored/mixed/coordinate-less authority, fallback, and same-payload reopen
semantics are unchanged. Routing, Relation-label, Node-label, Self-loop,
connector, and viewport presentation remain downstream authorities.

## Decision

```text
float final selection authority       = genericSearch final candidate sort, candidates[0]
canonicalization boundary             = AFTER_TRUE_FINAL_SELECTION_BEFORE_ACCEPTANCE
canonicalization feedback into search = NO
pre-final round-once behavior         = RESPONSIBILITY LEAK; corrected here
true rounded winner machine safety    = CONFIRMED for six bounded audit cells
Actual Product rounded human gate     = READY FOR A SEPARATE GATE; NOT PERFORMED HERE
canonical sample serialization        = DEFERRED
Initial Layout Release blocker        = STILL BLOCKED
Product default behavior              = UNCHANGED
Product default adoption              = HOLD
```

The next valid checkpoint is the Actual Product visual gate for the true
rounded winner against current and full Post. It must inspect cohesion,
spacing, label readability, crossing/crowding, viewport usability, locale
differences, and rounded-only defects. This checkpoint does not close that
human gate and does not authorize sample replacement, Product adoption, or
release work.

## Preserved boundaries

- Search-time integer-lattice quantization remains separate and is not
  reactivated; prior evidence found it did not provide a general optimization
  benefit.
- No round-after-relaxation loop was added.
- Coarse, cheap-ranking, local-screen, adaptive fine-pass, and other
  performance tracks were not changed or conflated with this boundary audit.
- Product default, Product adoption, normal Product authority, persistence,
  fallback, and interaction behavior were not changed.
- No known routing, Relation-label, Self-loop, connector, or renderer defect was
  fixed.
- Canonical fixtures, historical Fresh evidence, Fresh12 canonical Human
  Review, and governed lineage were not changed.
- No App.tsx refactor, push, tag, release, deploy, or publication was done.
