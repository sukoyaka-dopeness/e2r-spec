# LiaisonScape Initial-Layout Coarse Objective Design 1

Date: 2026-09-11

Status: PROXY OBJECTIVE PROTOTYPE PASS; PRODUCT ADOPTION NOT AUTHORIZED

## Result

An opt-in diagnostic objective, `scoreCoarseInitialLayout()`, was added to
LiaisonScape. It is not wired into `App.tsx` and does not replace the current
initial-placement provider.

The objective uses only Node geometry, estimated text envelopes, and straight
chords. It reports:

- Node body overlap;
- Node-label envelope overlap;
- straight-chord crossing;
- long-edge count;
- parallel-bundle pressure based on endpoint chord length; and
- Relation-label midpoint corridor pressure based on estimated label width.

It combines these into a diagnostic score, but the score is not an acceptance
authority and has no routing or actual Relation-label placement semantics.

## Responsibility boundary

The proxy is intentionally presentation-informed but not presentation-owned:

```text
initial-layout provider owns     Node geometry and cheap geometric proxies
routing authority owns           routed Edge candidates and obstacle choice
Relation-label authority owns   actual label placement and recovery
Self-loop authority owns        loop angle/radius behavior
```

This permits the provider to avoid obviously bad geometry without claiming
that a straight-chord estimate is equivalent to the Product presentation.
Parallel Edge and long-label pressure are signals for later inspection, not
runtime routing fixes.

## Evidence and limitations

PROVEN:

- The proxy is deterministic under input reordering.
- It detects body/label overlap, straight crossings, long edges, parallel
  pressure, and a bounded label-corridor estimate without invoking Product
  routing.
- LiaisonScape tests pass `344/344`; lint and build pass.

STRONGLY SUPPORTED:

- A coarse objective can be expressed inside the initial-layout responsibility
  boundary and evaluated much more cheaply than the Post materializer.
- The proxy is suitable for a bounded comparative experiment against current
  placement and Post materializations.

UNRESOLVED:

- Whether any weighting or candidate search using this proxy preserves the
  Actual Product visual preference for Post across fixtures/locales.
- Whether straight-chord and estimated label signals correlate sufficiently
  with actual routed presentation to justify runtime use.
- Safe weights, quality thresholds, and a fallback policy for arbitrary
  Dataset sizes.

## Decision

```text
coarse objective design         = FEASIBLE AS DIAGNOSTIC PROXY
Post visual equivalence         = NOT PROVEN
Product opt-in integration      = NOT STARTED
Product adoption                = HOLD
next checkpoint                 = bounded comparative candidate evaluation
```

The next checkpoint may compare this proxy-driven candidate generation against
current and Post on representative EN/JA fixtures, with actual Product visual
inspection. It must not silently promote the proxy, alter routing, or change
stored/mixed/derived ownership semantics.

Fresh10/Fresh11/Fresh12 evidence and the Fresh12 canonical Human Review result
are unchanged. No new governed Fresh lineage, push, tag, release, deploy, or
publication was performed.
