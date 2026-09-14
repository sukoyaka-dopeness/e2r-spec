# LiaisonScape Product-authoritative Verification Long-unit Attribution / Authority-preserving Micro-splitting 1

Date: 2026-09-14

## Question

The preceding full-verification and scheduler-policy checkpoints established an
exact, resumable seam but did not establish a Product-wide main-thread budget.
Historical browser runs recorded scheduled slices of `49.7ms`, `53.4ms`, and
`83.9ms`. This checkpoint asks whether those observations correspond to an
indivisible Product-authoritative Route, Relation-label, Node-label, or phase
transition unit, and whether any such unit should be authority-preservingly
micro-split.

This is a diagnostic checkpoint only. It does not change App.tsx, Product
defaults, persistence, Dataset safety, manual placement, routing authority,
label semantics, Self-loop routing, Worker/provider selection, or visual
presentation.

## Source and measurement boundary

The source-faithful full-verification state machine remains the authority
order. Its natural work units remain one ordered Route edge, one ordered
routed Relation-label edge, and one input-order Node-label Node. The added
measurement records `state.steps` as source-step attribution, including
`phase`, `kind`, and elapsed time, plus per-phase cost totals. It does not add
yield points, reorder work, or expose partial Product output.

Each of five Edge 152 controls was measured with the one-unit scheduler under
both diagnostics-off and diagnostics-on conditions, with a first and immediate
repeat run after the browser page reload:

| control | purpose |
| --- | --- |
| canonical lighthouse | canonical Product-shaped graph |
| dense k7-7 | dense topology and high route/label pressure |
| parallel pressure | shared endpoint / parallel bundle pressure |
| long-label pressure | long English label and placement pressure |
| self-loop pressure | Self-loop-heavy mixed control |

The first/repeat pair is a browser warm-up comparison, not a claim of a
portable cold-start guarantee. The historical outliers remain retained because
the earlier artifact did not record source-step attribution and therefore
cannot be retroactively mapped exactly.

## Evidence

The fixed Edge artifact is
[`browser-result-summary.json`](../../e2r-liaison-scape/experimental/verification-long-unit-attribution1/browser-result-summary.json).
Across all controls and first/repeat runs:

| mode | max authoritative work unit | max phase transition | max measured source step |
| --- | ---: | ---: | ---: |
| diagnostics off | `2.6ms` | `3.5ms` | `3.5ms` |
| diagnostics on | `3.2ms` | `4.4ms` | `4.4ms` |

The longest work-unit phases were `first-route` and `feedback-route`.
The longest non-work-unit entries were Node-label initialization and feedback
preparation transitions, especially on the dense control. Diagnostics-on
runs increased total measured compute (`11.4--150.6ms` off versus
`16.6--204.7ms` on across controls), while preserving semantic equivalence.

All attribution runs completed with exact semantic equivalence. The existing
four scheduler policies also remained exact-equivalent in the same browser
study, and the earlier cancellation evidence remains fail-closed with no
partial Product result.

## Attribution

### Route

Route work is the largest recurring authoritative unit in the current source,
because one edge evaluates bounded route candidate geometry and obstacle/
occupied-path arbitration. Parallel pressure increases the measured Route
work-unit cost, but the observed source-step maximum was `2.6ms` on this run.
No current authoritative Route unit approached `16ms` or `50ms`.

The historical `49.7/53.4/83.9ms` slices therefore cannot be attributed to a
currently observed indivisible Route unit. They remain open evidence of
whole-pass, scheduler, diagnostics, browser, or harness variance until a
future run captures the same outlier with source-step data.

### Relation-label

Relation-label work units remained below Route work-unit maxima in the tested
controls. The diagnostics-on total increased, but no long authoritative
Relation-label unit was observed. No micro-split is justified.

### Node-label

Dense Node-label initialization and feedback transitions were the longest
source-step entries, but they were phase transitions rather than long
Node-label work units. The Node-label work units themselves remained below
`3.2ms`. Splitting the initialization transition without a reproduced
authoritative long unit would only move orchestration boundaries and would not
preserve a demonstrated semantic bottleneck.

### Phase transitions, diagnostics, and harness

The new attribution separates source-step compute from the browser cooperative
wrapper. Diagnostics-on adds trace construction and profile-like observation
work to the same source steps. Cooperative elapsed time also includes timer
turn scheduling and browser event-loop overhead. These are distinct from
Product-authoritative geometry computation.

The evidence supports the following bounded conclusion:

* current warm source steps are short on canonical, dense, parallel,
  long-label, and Self-loop-heavy controls;
* diagnostics and phase transitions can dominate the local maximum without
  being a Product geometry work unit;
* historical outliers remain valid and are not erased by warm reruns;
* exact retroactive attribution of the historical outliers is not established
  because the old artifact recorded only scheduler slices, not source steps.

## Micro-splitting decision

No authority-preserving micro-split was added. There is no current evidence of
a specific authoritative Route, Relation-label, Node-label, or phase-transition
unit that is both reproducibly long and safely splittable without introducing
an unproven internal checkpoint. The current one-edge / one-routed-edge /
one-Node seams remain the smallest evidence-backed authority-preserving units.

This is not a Product-wide budget approval. The hard `50ms` ceiling, preferred
approximately `16ms` slice, and production main-thread budget remain
`NOT ESTABLISHED`. The scheduler study may remain a diagnostic execution
policy study; no production scheduler is adopted.

## Responsibility and release status

The result does not move authority:

* Route, Relation-label, and Node-label geometry remain Product-owned.
* Ordinary routing, Parallel / Incident allocation, endpoint-plan authority,
  final Relation-label placement, and Self-loop routing remain at their
  existing authorities.
* Structural Placement remains outside this verification budget checkpoint.
* Fast deterministic Initial Placement plus explicit High-quality Auto Layout
  remains `PROVISIONALLY ADOPT` as an execution-architecture direction.
* Quality solver remains `HOLD / NOT ESTABLISHED`.
* Product integration/default remains `HOLD`.
* Production provider remains `NOT ESTABLISHED`.
* Adaptive Initial Placement Cascade remains `INACTIVE`.
* Human Review remains `NOT READY`.
* Initial Layout Release blocker remains `OPEN`.

No Actual Product visual smoke check was required: this checkpoint changed only
diagnostic attribution and fixed research artifacts, not Product rendering or
interaction behavior.

## Validation

* `node tools/verification-long-unit-attribution-audit.mjs` — PASS
* full LiaisonScape test suite — `473/473 PASS`
* `npm run lint` — PASS
* `git diff --check` — PASS
* fixed Edge 152 source-step attribution study — five controls, all completed,
  semantic equivalence true for every attribution run

The existing browser-test warning `WebSocket server error: Port 24678 is
already in use` was emitted during the test run; it did not cause a test
failure.

## Disposition

`LONG-UNIT ATTRIBUTION INCONCLUSIVE FOR HISTORICAL OUTLIERS / CURRENT
AUTHORITATIVE SOURCE STEPS SHORT / MICRO-SPLIT NOT JUSTIFIED / PRODUCT-WIDE
VERIFICATION BUDGET NOT ESTABLISHED`.

The next work should not search scheduler policies again or add arbitrary
micro-splits. If budget closure is revisited, it should first capture source
step attribution in the same run that reproduces a historical outlier, with
diagnostics, event-loop, and phase-transition fields preserved together.
Session log remains intentionally unchanged.
