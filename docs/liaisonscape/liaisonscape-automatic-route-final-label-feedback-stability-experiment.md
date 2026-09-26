# LiaisonScape Automatic-Route Final-Label Feedback Stability Experiment

Date: 2026-08-31

Status: bounded application experiment; non-normative

## Exact result

`PARTIAL — JA REQUIRES ADDITIONAL FINAL-LABEL FEEDBACK PASSES BEFORE STABILIZING`

The preceding finite-revalidation result is reproducible. EN reaches a fixed
state after Pass 2. JA has a second, four-route cascade at Pass 3 and then
reaches a fixed state at Pass 4. No two-state or longer cycle appears within
the bounded eight-pass probe.

This observes a feedback structure; it does not authorize an iterative
Production solver, fixed-point render loop, hysteresis, damping, route-order
change, numeric tuning, or any continuity policy.

## Method and state identity

Pass 1 is the current production-equivalent fresh path. For every later pass,
only the preceding pass's fresh final **Node-label** rectangles replace the
route-label input. The 33 current candidates, their order and scores, Node and
occupied-path pressure, hard/halo formula, canonical ordinary route order, and
parallel physical-side protections are unchanged. Relation labels are freshly
placed after routing, but are never fed into routing.

A state signature contains every ordinary Relation's selected geometry
(straight/curved form and control point), every final Node-label owner and
rectangle, and every Relation-label position. A fixed/self-loop route is not
counted as an ordinary-route change unless its state signature differs. Exact
rounded signatures are compared only in the diagnostic; no production identity
format was added.

## Reproduction and bounded trace

| Locale | Pass 2 change | Pass 3 change | Pass 4 change | state class |
| --- | --- | --- | --- | --- |
| EN | `clara-lighthouse`, `clara-maya`, `clara-thomas-mentors`, `clara-thomas-supervises`, `sofia-archive`, `thomas-maya-friends` | none; equals Pass 2 | not needed | FS1 — fixed after Pass 2 |
| JA | `authority-lighthouse`, `sofia-archive` | `clara-lighthouse`, `clara-maya`, `clara-thomas-mentors`, `clara-thomas-supervises` | none; equals Pass 3 | FS2 — fixed after Pass 3+ |

The EN/JA Pass-2 and Pass-3 counts exactly reproduce the preceding experiment:
EN `6/0`, JA `2/4`. The bounded probe stopped immediately on repeated state,
well before Pass 8. Cycle observed: **NO**.

The static beacon/lighthouse and Daniel/Clara routes do not occur in either
locale's changed-ordinary-route list. This bounded feedback variable therefore
does not establish a remedy for the known beacon `-60 → 156` drag boundary, and
does not disturb the Daniel stable control in this fixture.

## Cascade interpretation

The JA trace is a two-layer **CROSS / ORDER mixed cascade**:

```text
Pass-2 final Node-label geometry
  → authority-lighthouse and sofia-archive change
  → new Pass-2 final Node-label geometry
  → four Clara-centred ordinary routes change at Pass 3
  → Pass-3 final Node-label geometry
  → fixed Pass-4 state
```

The direct cause cannot yet be reduced to a particular Node-label owner,
hard-versus-halo boundary, or occupied-path tie. Those score components were
not made available by a production helper and were deliberately not recreated
as a new policy. Canonical order remains a plausible propagation channel
because later routes see occupied paths from earlier routes, but no order-swap
experiment was run. Thus the exact causal classification is **F4 mixed**, not
an assertion that route order alone causes the cascade.

## Safety and presentation boundary

This probe reuses the current non-label and parallel safety code paths, but its
purpose is state convergence. It does not independently re-run the dedicated
reverse-endpoint-parallel, obstacle-side-parallel, foreign-Node, or occupied
corridor fixtures. Nor does it turn temporary geometric checks into a new H1--
H4, PNR/FNR, label/other-route, route-total, or curvature acceptance contract.
The established current Lighthouse baseline remains context, not a claimed
quality result for an unimplemented iterative policy.

The evidence is nevertheless enough to reject the earlier assumption that the
JA Pass-3 difference necessarily means a non-convergent feedback loop. It
settles after one extra cascade, but that locale-dependent pass count and route
churn still prevent a safe finite selection semantics or a claim of genuine
presentation improvement rather than conflict migration.

## Decision

| Question | Result |
| --- | --- |
| EN converges in bounded probe | YES — Pass 2 fixed |
| JA converges in bounded probe | YES — Pass 3 fixed, confirmed by Pass 4 |
| Cycle observed | NO |
| Instability type | MIXED CROSS / ORDER cascade |
| Hard label boundaries directly isolated as cause | NOT YET ISOLATED |
| Presentation genuinely improves | NOT ESTABLISHED |
| Non-label and parallel safety independently preserved | NOT YET VERIFIED |

Classification: **CASE 5 — JA feedback cascades across multiple routes before
stabilizing.** Final-label feedback is informative but promising as a
Production direction: **PARTIAL**. Production iterative solving and a full
router redesign are justified now: **NO**.

The selected next checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-CASCADE-CAUSE-ISOLATION1`. It
must isolate the first JA route/label dependency without changing score terms,
candidate space, or route order.

## Closure

Production Runtime, routing, drag/release behavior, label placement, candidate
set, samples, schema, and `seededPositions` changed: **NO**. No LiaisonScape
commit, push, tag, release, deployment, or publication occurred. Existing
unaccepted Lighthouse EN/JA sample edits remain preserved; temporary harnesses
were removed.
