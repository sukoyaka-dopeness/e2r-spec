# LiaisonScape Explicit Auto Layout Preview Admissibility Visual Gate 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-PREVIEW-ADMISSIBILITY-VISUAL-GATE1`  
Classification: **B. TWO-TIER PREVIEW POLICY SUPPORTED / CATASTROPHIC CLASSIFIER REMAINS OPEN**

## Decision

The selected Preview policy is two-tier:

```text
structurally invalid or catastrophic Product presentation
  -> do not show Preview; preserve the pre-operation working display
structurally valid and non-catastrophic residuals
  -> show the best available candidate for review, with residual warnings/evidence
```

No single metric is a catastrophic decision by itself. In particular, a
nonzero crossing count or `labelNear20` count does not automatically block a
Preview. A future implementation still needs a bounded catastrophic
definition, supported by Product evidence, before it can turn this policy into
an automatic classifier.

This checkpoint is diagnostic only. It did not change the solver, the strict
`isAutomaticLayoutPresentationEligible` predicate, Product presentation
authority, production UI behavior, Initial Automatic Display, or Human Review
status.

Current `App.tsx` still applies the synchronous Explicit Auto Layout result
through its existing operation path; it does not gain a Preview/Accept/Reject
surface from this checkpoint. The read-only browser candidate surface used
below is evidence infrastructure, not a production Preview policy
implementation.

## Current-source evidence

The current strict predicate remains the five-condition Product eligibility
signal:

```text
crossings === 0
&& overlapPairs === 0
&& labelRouteHits === 0
&& labelOverlap === 0
&& labelNear20 === 0
```

The preceding current-source diagnostic supplied 15 cases: Lighthouse EN,
Apollo EN, label-heavy JA, dense `bipartite(7,7)`, and a
parallel/Self-loop control, each with no, few/mixed, and all Pins. Every case
had 12 candidates, a complete finite candidate set, and a non-empty best
candidate by score. The resulting candidate-none rate was 0/15 and the
structural-invalid rate was 0/15. The best-by-score candidate passed the
strict predicate in 0/15 cases, but this is evidence of presentation residuals,
not evidence that all 15 candidates are catastrophic.

The best-by-score failure-condition counts were:

| Condition | Cases with the condition |
| --- | ---: |
| routed crossings | 8 |
| Node-body overlap | 3 |
| label-route hits | 10 |
| label overlap | 2 |
| label nearness | 15 |

These values are diagnostic summaries, not new thresholds. They also include
Product-owned routing and label feedback, Pin constraints, and inherited
presentation state. They cannot be used to attribute every residual to the
layout solver.

## Actual Product / Product-faithful visual evidence

The following URLs were opened against the current source on a LAN-bound
development server. Screenshots were inspected during the run; the
reproducible evidence is the URL, fixture identity, AX state, and the current
source/artifact replay rather than an automatic visual verdict.

| Surface | Fixture | Observation |
| --- | --- | --- |
| Actual Product normal path | Lighthouse EN | Pending status and Cancel were visible. After completion, the status cleared, the Graph and viewport controls remained usable, and Save Coordinates stayed disabled. |
| Actual Product normal path | Lighthouse JA | Japanese pending/Cancel copy appeared and cleared. The translated toolbar, labels, and fitted Graph remained visible. |
| Actual Product normal path | Titanic EN | The slower open showed pending state first and then a finite fitted Graph with ordinary controls still available. |
| Product-faithful read-only candidate seam | label-heavy JA | Long Japanese Relation labels were rendered in a read-only candidate surface. Local toolbar zoom was exercised from 55% to 61% for inspection. |
| Product-faithful read-only candidate seam | dense `k7-7` (source alias `k7x7`) | A 14-node/49-relation candidate stayed visible while pending and became ready after more than 9 seconds in the browser surface. The fitted 71% view exposed substantial line/label congestion for inspection. |

The normal-path screenshots distinguish the pre-operation fallback from the
later render-only candidate. The candidate seam separately provides local
inspection of label-heavy and dense views. Fit scale/aspect is recorded as a
viewport/framing observation and is not treated as structural invalidity.

The dense browser observation is a usability boundary, not a solver-only
timing measurement: it includes the Product-faithful application surface and
must not be read as a standalone algorithm benchmark.

## Catastrophic boundary and coverage

No candidate-none case or structural-invalid result was found in the covered
15-case diagnostic. Therefore this checkpoint does not justify a Preview block
for the current candidate set. It also does not prove that every future
candidate is previewable.

The following remain intentionally open for the next implementation/design
checkpoint:

* a source-backed catastrophic presentation definition that can distinguish a
  gross comprehension failure from an advisory crossing, congestion, or label
  residual;
* treatment of candidate failure, incomplete/non-finite positions, and
  candidate-none as the hard no-Preview branch;
* how warning text and metric evidence should be exposed without presenting
  strict eligibility as a binary user verdict;
* ordinary, moderate, complex, dense, label-heavy, parallel/Self-loop, and Pin
  cases at consistent overview and local-zoom conditions;
* separate Preview quality from viewport framing and from broader Product
  presentation settling behavior.

Human Review was not reopened, and no fixture-level PASS/FAIL or QUALIFIED
record was added here.

## Reproduction and provenance

From `e2r-liaison-scape`:

```text
node tools/explicit-auto-layout-preview-admissibility-visual-gate1.mjs
node --experimental-strip-types --test tests/explicit-auto-layout-preview-admissibility-visual-gate1.test.ts
```

The diagnostic source and artifact are:

* `tools/explicit-auto-layout-preview-admissibility-visual-gate1.mjs`
* `tests/explicit-auto-layout-preview-admissibility-visual-gate1.test.ts`
* `experimental/explicit-auto-layout-preview-admissibility-visual-gate1/result-summary.json`

The replay chain is:

```text
current eligibility diagnostic artifact
  -> normalized 15-case structural summary
  -> candidate-none / complete-finite gate
  -> best-by-score Product metric summary
  -> bounded two-tier policy record
  -> Actual Product / Product-faithful visual observations
```

The input artifact records the current LiaisonScape HEAD plus prior diagnostic
working-tree additions. No production behavior was changed.

## Follow-up

Explicit Auto Layout may proceed to a bounded implementation design only with
the two-tier policy kept explicit. That work must preserve the pre-operation
display on hard failure, treat a valid residual candidate as reviewable rather
than silently accepted, and keep Accept/Reject/Cancel/Save semantics separate
from Initial Automatic Display. It must not relax or reinterpret the current
strict Product eligibility predicate without a separate decision.
