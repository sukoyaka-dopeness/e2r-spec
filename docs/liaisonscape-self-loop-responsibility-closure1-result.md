# LiaisonScape Self-loop Residual Responsibility Closure 1

Date: 2026-09-16
Status: bounded diagnostic closure; Product adoption remains HOLD

## Decision

The current Self-loop behavior is accepted for this Initial Layout / Product
Presentation research phase with an explicit boundary. No production change is
required by this checkpoint.

## Current authority map

| Responsibility | Current authority | Inputs / outputs |
| --- | --- | --- |
| Node geometry and available angular space | Structural / Initial Placement | derived Node positions |
| Self-loop geometry | Product `routeGraphEdge` Self-loop branch and `selectAutomaticSelfLoopGeometry` | owner point, `parallelIndex`, other Node obstacle points; angle/radius/path |
| ordinary route occupancy | Product automatic routing | previously selected ordinary route samples |
| Relation-label placement | Product Relation-label stage | routed paths, Node points, prior Relation-label snapshot |
| Node-label placement | Product Node-label stage | routed paths, Relation-label rectangles, prior Node-label snapshot |
| manual Self-loop geometry | manual Self-loop override | explicit orientation/radius; bypasses automatic selector |

Self-loop geometry remains derived application presentation data. It does not
alter Dataset, stored Coordinates, or persistence semantics.

## Current selector contract

For automatic self Relations, the current source uses:

- preferred orientation `-π/2 + (parallelIndex % 3) * 2π/3`;
- radius `38 + floor(parallelIndex / 3) * 14`;
- 36 orientation candidates at 10° spacing;
- 41 route samples per candidate;
- Node pressure from normalized squared penetration within the 60-unit Node
  influence radius;
- preferred-orientation penalty weight `0.05`;
- deterministic score, angular-distance, and normalized-angle tie breakers.

The owner Node is not an obstacle. Manual orientation/radius remains
authoritative. Parallel Self-loops receive their distribution through the
preferred 120° groups and radius hierarchy; hard angular exclusivity is not a
contract.

## Collision and pressure responsibility

The selector currently considers only other Node geometry. It does not consume:

- ordinary occupied paths;
- Relation-label rectangles;
- Node-label rectangles;
- peer Self-loop paths or peer-loop joint feasibility;
- viewport bounds or fit state.

After selection, the Self-loop route enters normal occupied-path processing,
and downstream Relation-label and Node-label stages react to the resulting
route. Those downstream stages do not feed their final geometry back into the
Self-loop selector. This is an intentional one-way responsibility boundary,
not an accidental claim of global collision freedom.

The existing accepted Self-loop evidence and later diagnostic experiments show
that broader coupling can find safer angles in individual cases, but angle-only,
angle-plus-radius, owner-local, and top-K approaches did not establish a
bounded production contract across canonical and dense controls. Some ordinary
route, label, owner-label, and peer-loop clearance residuals therefore remain
possible and are not diagnostic fallback feasibility claims.

## Product impact and closure

Current evidence establishes deterministic automatic geometry, nearby-Node
escape, preserved manual authority, preserved parallel distribution, and no
specific local defect that must be fixed before closing this research phase.
Actual Product smoke and existing Self-loop presentation tests show the
current behavior renders and remains within the existing interaction boundary;
they do not constitute formal Human Review acceptance.

Classification:

`A/B QUALIFIED: CURRENT SELF-LOOP CONTRACT ACCEPTABLE WITH EXPLICIT BOUNDARY / JOINT PRODUCT COLLISION QUALITY DEFERRED`

The Initial Layout research blocker is not independently held open by a proven
Self-loop defect. The broader Product presentation settling track remains
separate and is not reclassified here.

## Closed now vs follow-up

Closed for this phase:

- Self-loop geometry authority and input boundary;
- preferred orientation, fan-out, radius growth, and candidate evaluation;
- downstream ownership of route and label collision effects;
- acceptance of bounded Node-only avoidance as the current automatic contract;
- no production change, solver expansion, or authority movement.

Follow-up, not a release prerequisite for this checkpoint:

- Node-owned label route-clearance refinement;
- optional soft occupied-path pressure;
- radius adaptation under dense label/path pressure;
- peer-loop joint spacing/fan-out;
- stabilization or hysteresis if a concrete interaction problem appears;
- connection-handle and future-shape concerns.

Product default/adoption remains `HOLD`, production provider remains `NOT
ESTABLISHED`, Human Review remains `NOT READY`, Adaptive Cascade remains
inactive, and the Initial Layout Release blocker remains `OPEN` pending the
other research tracks.

## Evidence and validation

Source evidence:

- `e2r-liaison-scape/src/viewport.ts` Self-loop branch and selector;
- `e2r-liaison-scape/src/graph-presentation.ts` downstream route/label stages;
- `e2r-spec/docs/liaisonscape-automatic-self-loop-node-avoidance-result.md`;
- existing Self-loop interaction, presentation, and Actual Product diagnostic
  artifacts under `e2r-liaison-scape/experimental/`.

Focused tests: Self-loop routing/presentation tests passed. Full LiaisonScape
tests, lint, and build passed. `e2r-spec` validation and `git diff --check`
passed.
