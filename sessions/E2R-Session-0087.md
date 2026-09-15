# E2R Session 0087

Objective: Product Relation-label Display-only Automatic Wrap Capacity
Experiment 1.

Started: 2026-09-16.
Status: `B/C PRIMARY / D QUALIFIED / F RESIDUAL CAPACITY OPEN`.

This is a new objective after Session 0086. Work for this objective is kept in
this session file under the agreed one-contiguous-objective policy.

## Scope

Test a bounded display-only automatic Relation-label wrap after the previously
established Product-owned bundle capacity and fine normal-offset reference.
Preserve Dataset/authored values, stored/authored Coordinates, persistence,
dirty-state, Save Coordinates, manual Relation-label semantics, Structural
Placement, Product routing, endpoint-plan authority, Parallel/Incident closure,
and the independent Self-loop track.

## Work performed

- Confirmed current Product source had one-line Relation-label rendering.
- Added a bounded two-line derived geometry with English whitespace-first and
  Japanese character fallback, including bounded ellipsis.
- Shared the derived width/height across automatic label placement, SVG text,
  hit area, and collision envelope without changing the default one-line path.
- Reused the prior widened/fine reference and orientation-aware diagnostic arms;
  no new route-spacing authority was introduced.
- Ran controls for horizontal EN/JA, token/punctuation, vertical, diagonal,
  reverse/same-direction primary, higher multiplicity, mixed incident, shared
  endpoint, Self-loop, and Lighthouse EN/JA.
- Inspected the actual Product surface for representative controls.

## Result

Long horizontal English and Japanese labels fit into bounded two-line derived
geometry. Horizontal ownership/foreign-route pressure improves, but English
line balance and punctuation fallback expose readability trade-offs. Vertical
and diagonal residuals do not wrap and remain unresolved; ordinary-route churn
and Self-loop behavior are unchanged.

The result is `B/C PRIMARY / D QUALIFIED / F RESIDUAL CAPACITY OPEN`.
Human Review remains `NOT READY`; Product default/adoption remains `HOLD`;
production provider remains `NOT ESTABLISHED`; and the Initial Layout Release
blocker remains `OPEN`.

## Validation record

- display-only wrap artifact regenerated;
- focused wrap suite passed 6/6;
- Actual Product smoke completed for horizontal EN/JA, token/punctuation,
  vertical, diagonal, reverse primary, shared endpoint, and Lighthouse EN/JA;
- browser console errors/warnings: none observed;
- full LiaisonScape suite passed 569/569;
- LiaisonScape lint/build, E2R specification validation, and diff checks passed.
