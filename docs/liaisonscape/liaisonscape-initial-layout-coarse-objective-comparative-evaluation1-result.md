# LiaisonScape Initial-Layout Coarse Objective Comparative Evaluation 1

Date: 2026-09-11

Status: DIAGNOSTIC COMPARISON READY; PRODUCT ADOPTION NOT PERFORMED

## Candidate

The diagnostic candidate `coarse-objective-prototype-v1` starts from the
current three-iteration coordinate-less placement and performs a deterministic
bounded greedy search using the corrected coarse objective. It is not wired to
the Product default.

## Machine comparison

| Fixture | Current score | Coarse score | Coarse status | Coarse elapsed |
| --- | ---: | ---: | --- | ---: |
| Apollo 11 EN | 1,620,919 | 1,620,919 | fallback: unsafe seed | ~6.4 ms |
| Apollo 11 JA | 1,605,536 | 1,605,536 | fallback: unsafe seed | ~0.3 ms |
| Lighthouse EN | 710,424 | 708,010 | completed | ~7.7 ms |
| Lighthouse JA | 705,340 | 703,131 | completed | ~4.6 ms |
| Titanic EN | 408,468 | 405,533 | completed | ~10.5 ms |
| Titanic JA | 404,123 | 402,139 | completed | ~8.0 ms |

The coarse candidate reduced its own proxy score modestly on Lighthouse and
Titanic, while Apollo safely retained the current result because the seed did
not pass the existing hard Node-body condition. These values are proxy scores,
not actual Product presentation metrics.

The previously recorded Post comparison remains separate: the user preferred
Post visually across the bounded sample set, but Post uses the expensive full
presentation evaluator and is not runtime-feasible under the current budget.
No claim is made that a lower coarse score equals Post visual quality.

## Actual Product surface

The coarse candidate is available on the existing real `src/App.tsx`
inspection surface. It materializes only an in-memory clone and keeps Save
Coordinates disabled:

```text
http://127.0.0.1:4178/e2r-liaison-scape/experimental/product-evaluation-seam/geometry-inspection1/?fixture=lighthouse&locale=en&candidate=coarse-objective-prototype-v1
```

The same surface accepts `fixture=apollo-public|lighthouse|titanic`,
`locale=en|ja`, and `candidate=current|post-structural-relaxation-v1|coarse-objective-prototype-v1`.
It loaded Lighthouse EN with 10 entities / 14 visible relations, the coarse
candidate selected, and Save Coordinates disabled. User visual comparison is
still diagnostic observation, not adoption.

## Interpretation

PROVEN:

- Candidate generation is bounded and inexpensive for completed representative
  samples (approximately 0.3–10.5 ms in this run).
- The corrected proxy can drive a candidate different from current placement
  on Lighthouse and Titanic.
- Whole-result fallback remains active for Apollo EN/JA unsafe seeds.
- The candidate can be rendered by the real Product surface without changing
  Product default behavior or persistence semantics.

STRONGLY SUPPORTED:

- The coarse proxy is runtime-plausible as a diagnostic provider candidate.
- It does not yet demonstrate sufficient approximation of Post's visual
  benefit; the score improvement is modest and proxy-local.

UNRESOLVED:

- Agreement between coarse ranking and user Actual Product preference.
- Whether Node-label rectangle and straight-corridor estimates mis-rank any
  representative candidate.
- Whether Apollo fallback is acceptable for a future provider or indicates a
  need for a different seed/quality gate.

## Decision

```text
bounded comparative evaluation = READY
runtime-provider follow-up     = WORTH CONTINUING DIAGNOSTICALLY
Actual Product opt-in          = NOT STARTED
Product adoption               = HOLD
```

Next step is user inspection of current / Post / coarse on representative EN/JA
samples, followed by correlation of visual observations with proxy metrics.
Routing, Relation-label rendering, Node-label glyph treatment, connectors,
Self-loops, and parallel Edges remain separate tracks.

Fresh10/Fresh11/Fresh12 evidence and the Fresh12 canonical Human Review result
are unchanged. No new governed Fresh lineage, push, tag, release, deploy, or
publication was performed.
