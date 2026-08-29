# LiaisonScape Node-Label Route Avoidance Result

- Date: 2026-08-30
- Status: `ACCEPTED — NODE LABEL ROUTE AVOIDANCE`

## Triggering Lighthouse defect and authority

The Japanese `lighthouse` Entity (`旧港の灯台`) had a readable node label
crossed by a Relation Edge. The accepted diagnosis in e2r-spec `7522186` was
`L2 — DERIVED RELATION ROUTING`, classified `VISUAL-BOTH`, with remedy `R4`.
The public GitHub LiaisonScape source was inspected read-only; its published
`routeGraphEdge` did not consume node-label rectangles. Local LiaisonScape
`9eef66d` was the implementation authority.

## Root cause and dataflow

Before this change, automatic routes were generated from node point obstacles
and occupied paths; Relation labels were then placed on those routes; Node
labels were placed last using the final route paths. Routes therefore had no
rectangular node-label obstacle input. This was not a DOM measurement defect,
manual label corruption, or SVG z-order illusion.

The bounded implementation derives deterministic provisional node-label
rectangles from current graph-space geometry, supplies them to automatic route
candidate scoring, then continues the existing Relation-label and Node-label
placement/rendering flow. No React feedback loop or state convergence pass was
introduced.

## Geometry and ownership contract

`minimumPathToLabelRectDistance(samples, rect)` is a pure graph-space helper.
It handles the full rectangle, non-finite input safely, and returns zero for
intersection. Automatic ordinary routes add a strong intersection penalty and
a bounded 20-unit near-label pressure, while retaining node, occupied-path,
and base-offset preference. A label is not reduced to a center point.

Source and target labels are included as obstacles after node attachment
geometry; unrelated labels are included as well. Manual Relation offsets and
manual self-loop geometry return before automatic label scoring and remain
authoritative. No Dataset, Coordinate, Layout, Presentation, or route-owned
state is created or persisted. Node-label placement, Relation-label placement,
drag behavior, and reset behavior remain otherwise unchanged.

## Tests and Lighthouse evidence

Focused tests cover rectangular obstacle avoidance, positive clearance,
determinism, and preservation of an explicitly manual route. The full
LiaisonScape suite passed: 271 tests, lint, and build.

The Lighthouse regression was exercised with the current JA sample without
editing the sample. At the representative 1280×720 browser view and displayed
76% zoom, the graph rendered 10 Entities and 14 visible Relations. The former
route corridor was displaced around the label region; the measured graph-space
route-to-label rectangle clearance was non-zero, and visual inspection showed
the `旧港の灯台` text readable with no visible Edge through its glyphs. Reload
and Display Reset retained the deterministic arrangement. The graph was not
blank, self-Relations remained visible, and no obvious new Lighthouse label
crossing was observed in the bounded visual scan. The current browser smoke
used the accepted temporary Edge/CDP procedure; the old installed public
Validator warning state is unrelated to this runtime-only checkpoint.

## Dataset and cross-repository safety

Canonical e2r-spec Lighthouse JSON and LiaisonScape mirror JSON are unchanged;
no Coordinate or Presentation JSON was changed. Validator 0.4.0, schema,
NarrativeLine, Hub, roadmap, and ai-knowledge are unchanged. Cross-repository
gates passed: e2r-spec validate and mirror validation; Validator validate;
NarrativeLine 222 tests/lint/build; Hub test/lint/build. LiaisonScape passed
271 tests/lint/build.

## Public Sample impact and exclusions

Runtime collision blocker: **CLOSED**.

Presentation semantic JSON revision: **NOT YET IMPLEMENTED**.
Validator publication: **NOT YET PERFORMED**.
Consumer dependency update: **NOT YET PERFORMED**.
Public Sample Formal Acceptance: **NOT YET RESUMED**.

The next sample Presentation revision remains a separate bounded checkpoint.
No sample geometry, routing persistence, Layout schema, global visual styling,
or unrelated layout tuning was started.
