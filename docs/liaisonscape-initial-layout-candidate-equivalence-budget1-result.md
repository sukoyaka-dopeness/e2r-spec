# LiaisonScape Initial-Layout Candidate Equivalence / Budget 1

Date: 2026-09-11

Status: EQUIVALENCE NOT ESTABLISHED; PRODUCT OPT-IN HOLD

## Scope

This checkpoint compared the bounded runtime-provider prototype with the
adoption design requirements. It did not wire the provider into `App.tsx`,
change the Product default, or modify any Dataset or governed evidence.

The prototype is deliberately a provider-boundary experiment: it uses the
current coordinate-less seed plus bounded Node/label-envelope refinement. It
does not claim to reproduce the diagnostic Post materializer, whose research
search used a richer presentation evaluator.

## Measurement

All public samples were passed through the Product-visible Entity graph
projection. Relations to non-Entity objects were ignored, matching the
existing `openedGraph` boundary.

| Fixture | Nodes | Visible Relations | Result |
| --- | ---: | ---: | --- |
| Apollo 11 EN | 9 | 11 | whole-result fallback: unsafe candidate |
| Apollo 11 JA | 9 | 11 | whole-result fallback: unsafe candidate |
| Ashen Crown EN | 10 | 17 | prototype completed, 2 iterations |
| Ashen Crown JA | 10 | 17 | prototype completed, 2 iterations |
| Titanic EN | 13 | 12 | prototype completed, 2 iterations |
| Titanic JA | 13 | 12 | prototype completed, 2 iterations |
| Lighthouse EN | 10 | 14 | prototype completed, 2 iterations |
| Lighthouse JA | 10 | 14 | prototype completed, 2 iterations |

Representative elapsed times were approximately 1–5 ms for completed public
samples. A synthetic 25-Node chain completed in approximately 12 ms; 50- and
100-Node chains rejected the seed as unsafe and fell back. A 10-Node chain
completed in approximately 1 ms. The budget was 100 ms for this diagnostic
run; fallback was still exercised by safety rejection, not only by time
expiry.

## Interpretation

PROVEN:

- The provider can normalize Product-visible relation input without treating
  hidden Event endpoints as invalid.
- Deterministic completion, whole-result fallback, and bounded execution are
  testable runtime properties.
- The provider does not establish Post equivalence: Apollo EN/JA fallback,
  while other fixtures complete a smaller Node/label-only refinement.
- Completed output is not evidence of routing, Relation-label, Self-loop,
  crossing, or parallel-Edge quality because those responsibilities are not in
  this provider.

STRONGLY SUPPORTED:

- A generic provider contract is a viable safety seam, but the current
  prototype is not a quality-equivalent implementation of Post.
- A single fixed budget and Node/label-only objective cannot yet justify
  replacing the current coordinate-less Product provider.
- Whole-result fallback safely preserves current behavior when quality gates
  reject a candidate.

UNRESOLVED:

- Whether the actual Post search can be generalized without importing routing
  authority or exceeding an acceptable runtime budget.
- Whether a separate coarse presentation proxy can reproduce the observed Post
  preference across arbitrary Dataset sizes and locales.
- Actual Product visual equivalence after any future opt-in integration.

## Decision

```text
candidate equivalence       = NOT PROVEN
budget contract             = PROTOTYPE PASS, quality coverage incomplete
Actual Product opt-in      = NOT STARTED
Product adoption            = HOLD
current Product behavior    = UNCHANGED
```

The next useful checkpoint is not direct integration. It is either (a) a
diagnostic comparison that ports the actual Post objective behind this same
provider contract, or (b) a documented decision to reject Post as a generic
runtime provider and retain it as research-only. Stored, mixed, dirty-state,
Save Coordinates, routing, and historical Fresh evidence remain unchanged.
