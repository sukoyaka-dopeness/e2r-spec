# LiaisonScape Explicit Auto Layout Product Eligibility Semantics 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-PRODUCT-ELIGIBILITY-SEMANTICS1`  
Classification: **C. MIXED / PREDICATE IS A HARD PRESENTATION ELIGIBILITY GATE, BUT ITS FALSE RESULT MIXES REAL PRESENTATION QUALITY WITH INHERITED/OUT-OF-SCOPE RESIDUALS**

## Decision

The current `isAutomaticLayoutPresentationEligible` predicate is valid as a
strict Product presentation eligibility predicate, but current source does not
show that it is the intended or complete Explicit Auto Layout Preview/release
gate. It is used by research/selection proposal paths; `App.tsx` currently
invokes `solveAutoLayout` directly and applies the result to working positions
and dirty state without calling this predicate.

The predicate is exactly:

```text
crossings === 0
&& overlapPairs === 0
&& labelRouteHits === 0
&& labelOverlap === 0
&& labelNear20 === 0
```

It is not a general structural-validity check. It does not directly gate
non-finite/completeness, Pin preservation, minimum separation, extent/aspect,
fit scale, route length, corridor deficit, short-hop count, or a Self-loop-
specific metric. Those dimensions remain available as separate evidence.

## Evidence and attribution

The diagnostic covered 5 fixtures and three pin cases each: no pins, few mixed,
and all pinned. The pre-operation display was current `settleInitialPlacement`
for coordinate-less datasets. For each selected portfolio candidate and the
best-single Pin-aware Frontier control, the current Product presentation was
evaluated under:

- the primary non-empty operation snapshot;
- the same previous automatic state with manual Node/Relation label fields
  removed;
- an empty presentation snapshot; and
- the pre-operation fallback as a relative baseline.

There were 30 candidate comparisons. All maps were complete and finite and all
Pins were exact. All 30 primary evaluations were ineligible. The failed
predicate conditions were:

| Condition | Comparisons failing |
| --- | ---: |
| routed crossings | 19 |
| Node-body overlap | 5 |
| label-route hits | 20 |
| label overlap | 5 |
| label nearness | 30 |

The condition-level attribution recorded 6 candidate/automatic-presentation
factors, 7 manual-user-authority-dependent factors, 15 previous-automatic-
presentation-dependent factors, and 58 inherited pre-operation residuals.
These factors can overlap; they are not additive defect counts. The full
non-empty snapshot differed from the empty snapshot for all 30 comparisons.
Removing manual fields changed the overall boolean outcome in one comparison
(parallel/Self-loop control, no pins), demonstrating that manual state can
affect the strict gate. Production manual authority was not removed; this was a
diagnostic counterfactual only.

The dense `bipartite(7,7)` control retains stress-case crossing pressure. It is
not used as the sole release gate, but it is evidence of a real quality limit.
Ordinary, label-heavy, and parallel/Self-loop results also contain inherited or
authority-preserving residuals, so treating every `false` as a new solver defect
would be incorrect.

## Semantic boundary

The current authority remains:

```text
Auto Layout → Node candidate geometry
Product → automatic routing/curvature, Relation-label, Node-label,
          Self-loop, presentation evaluation
User → manual route/curvature and manual label/Self-loop state
Pin → exact Node hard constraint
```

The diagnostic does not discard manual state, relax thresholds, alter Product
authority, or change Initial Automatic Display. A later Explicit Auto Layout
implementation should distinguish at least structural validity, Preview
admissibility, and release acceptance. Relative improvement over the
pre-operation presentation may be useful evidence, but cannot by itself waive
a genuinely catastrophic hard failure.

## Reproduction and provenance

From `e2r-liaison-scape`:

```text
node --experimental-strip-types tools/explicit-auto-layout-product-eligibility-semantics1.mjs
node --experimental-strip-types --test tests/explicit-auto-layout-product-eligibility-semantics1.test.ts
```

The executable artifact is:

- `tools/explicit-auto-layout-product-eligibility-semantics1.mjs`
- `tests/explicit-auto-layout-product-eligibility-semantics1.test.ts`
- `experimental/explicit-auto-layout-product-eligibility-semantics1/result-summary.json`

The replay chain is:

```text
fixture Dataset
→ settleInitialPlacement pre-operation positions
→ exact Pin case and candidate geometry
→ operation Product snapshot
→ current Product presentation
→ individual metric values
→ predicate condition attribution
→ candidate/pre-operation relative deltas
→ interpretation
```

The recorded source revision is the current LiaisonScape `HEAD` plus diagnostic
working-tree additions. No production behavior or Human Review status changed.

## Follow-up

This checkpoint does not select a new solver, change the predicate, or begin
implementation. The next safe Explicit Auto Layout implementation checkpoint
must decide the separate Preview/adoption contract, including manual/stored
Coordinate treatment, Cancel/Accept/Reject lifecycle, and which severe quality
conditions remain hard. It may reuse current Product evaluation, but must not
silently reinterpret a strict research predicate as a user-facing release gate.

