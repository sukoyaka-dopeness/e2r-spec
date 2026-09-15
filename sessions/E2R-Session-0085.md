# E2R Session 0085

Objective: Product-Owned Orientation-Aware Parallel Label Capacity + Stagger
Experiment 1.

Started: 2026-09-16.
Status: `DIAGNOSTIC ONLY / ORIENTATION SIGNAL USEFUL / VERTICAL STAGGER NOT GENERALLY ESTABLISHED / ONE-LINE HORIZONTAL CAPACITY OPEN`.

This is a new objective after Session 0084. Work for this objective is kept in
this session file under the agreed one-contiguous-objective policy.

## Scope

Test the Relation-label tangent/normal footprint and bounded along-owner-route
stagger while holding the previous bundle-local spacing map fixed. Keep
one-line labels, record but do not adopt display-only wrap demand, and preserve
Product routing, endpoint-plan, final Relation-label, Parallel/Incident, and
Structural Placement authority.

## Work performed

- Added deterministic orientation-aware footprint and stagger derivation.
- Added a development-only Relation-ID stagger input to the existing Product
  presentation seam.
- Added horizontal, vertical, and diagonal capacity fixtures.
- Compared current, bundle-local reference, and orientation-aware output using
  Product-authoritative presentation, quality, and risk metrics.
- Added Actual Product preview and completed a small Reset-view smoke.

## Result

Reference spacing stayed fixed: primary `20/12`, higher `16`, mixed `24`,
shared `16/16`, horizontal/vertical `20`, diagonal `16`, Lighthouse `12`.
The primary remained non-regressed with zero churn; shared-endpoint ownership
improved from ambiguity/foreign-closer `1/1` to `0/0`; horizontal staggering
reduced foreign-closer but did not remove ambiguity; vertical ambiguity stayed
`2`; diagonal stayed `2` with continuous geometry. Horizontal long labels
exceeded one-line usable span by roughly `184` and `197` units and were marked
for a future display-only wrap study.

Actual Product smoke showed improved horizontal association, readable vertical
stagger, smooth diagonal behavior, and no gross primary/Self-loop regression.
The smoke is not formal acceptance.

## Decision and next position

Outcome is `B/C COMBINED`: orientation-aware label capacity is a useful Product
presentation diagnostic, but vertical stagger is not generally established and
one-line horizontal capacity remains unresolved. Human Review is `NOT READY`.
Product default remains `HOLD`, production provider `NOT ESTABLISHED`, and the
Initial Layout Release blocker `OPEN`.

Potential next checkpoint: a separate display-only Relation-label wrap/capacity
study, only if needed. Keep it out of Dataset semantics and do not infer a
Structural Placement change from the deficits. Self-loop, Adaptive Cascade,
Fast Initial Placement + High-quality Auto Layout adoption, and Parallel/Incident
reopening remain out of scope.

## Validation record

- orientation artifact regenerated;
- source lint passed;
- focused orientation suite passed 5/5; full LiaisonScape suite passed 558/558;
- e2r-spec `npm run validate` passed;
- Actual Product smoke completed;
- specification validation and diff checks remain final gates.
