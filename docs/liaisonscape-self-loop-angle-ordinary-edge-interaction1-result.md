# LiaisonScape Self-loop Angle / Ordinary Edge Interaction 1

Date: 2026-09-14
Status: `BOUNDARY CONFIRMED / QUALITY OPEN / NOT READY FOR HUMAN REVIEW`
Checkpoint: `E2R-LIAISONSCAPE-SELF-LOOP-ANGLE-ORDINARY-EDGE-INTERACTION1`

## Scope

This is a bounded diagnostic checkpoint after the Structural Placement and
Parallel / Relation-label re-evaluations. It evaluates the existing Product
self-loop and ordinary-route authorities. It does not implement a new
self-loop solver, change Parallel / Incident allocation, move routing or final
label placement into Structural Placement, or alter Dataset and persistence
semantics.

The authoritative sources remain the current LiaisonScape source and tests.
The older self-loop evidence correctly describes the accepted 10-degree
Node-avoidance experiment, but did not cover the combined ordinary-route,
peer-loop, Node-label, Relation-label, and viewport interactions tested here.

## Current implementation boundary

The current implementation is not a single fixed-angle rule:

- automatic angle selection enumerates 36 full-circle candidates at 10-degree
  steps;
- the owner Node is excluded from the obstacle set;
- the score contains other-Node pressure and a preferred-angle penalty;
- automatic radius follows `38 + floor(parallelIndex / 3) * 14`;
- occupied ordinary paths, peer Self-loop paths, Node labels, Relation labels,
  and viewport bounds are not inputs to Self-loop candidate scoring;
- the selected Self-loop is still appended to the normal occupied-path stream,
  so it can influence later ordinary route arbitration;
- manual orientation/radius remains authoritative and bypasses automatic
  selection.

Therefore the existing angle domain and radius family are bounded, but the
quality objective is local to Node pressure rather than a bounded local
capacity contract.

## Diagnostic method

`e2r-liaison-scape/tools/self-loop-angle-ordinary-edge-interaction-audit.mjs`
ran the current Product route and label pipeline against:

- Lighthouse and Titanic EN/JA, with additional long-label Self-loops on a
  high-degree Entity;
- isolated, symmetric, perturbed, and four-loop fan-out synthetic controls;
- EN and JA long-label variants;
- an ordinary-first route-order control;
- a diagnostic enumeration of the same 36 angle candidates at the current
  radius; and
- exact repeated evaluation for determinism.

The audit artifact is
`e2r-liaison-scape/experimental/self-loop-angle-ordinary-edge-interaction/audit.json`.
It is diagnostic evidence, not a Product acceptance record.

## Evidence

All 12 fixture/locale results were deterministic. The isolated control had no
ordinary-route coupling. Difficult cases did:

| Control | Observed residual | Diagnostic signal |
| --- | --- | --- |
| Lighthouse EN/JA | Existing/added loops can approach ordinary paths at about `0.9–1.6px`; peer-loop clearance reached about `1.8–2.1px`; ordinary-route order churn was `6–7` Relations | The current Node-only selector does not protect ordinary corridors or peer loops |
| Titanic EN/JA | Ordinary clearance reached about `0.3–1.8px`; peer-loop clearance was about `1.15px`; the second loop had only about `5.8°` incident angular gap | Long labels and dense incident geometry expose the missing local capacity inputs |
| Symmetric control | One loop had `0°` incident angular gap to a cardinal ordinary direction; the other had about `1.9px` ordinary clearance | Symmetry alone does not provide usable angular capacity |
| Perturbed control | Both loops reached about `1.8–2.0px` ordinary clearance; one loop had `0°` Node-label clearance | Small perturbations change the selected angle and can expose a presentation collision |
| Four-loop fan-out | Peer-loop clearance reached about `0.94px`; two loops had less than `1.4px` ordinary clearance | The current radius hierarchy does not provide hard angular exclusivity or fan-out capacity |
| EN/JA comparison | Route geometry was the same for matched controls, while label-to-ordinary-route and owner-Node-label clearances differed | Text width/locale is a downstream label/presentation input, not a Structural Placement fix |

The diagnostic 36-angle enumeration frequently found another candidate with a
materially larger ordinary-path and/or Node-label clearance. This is evidence
that the current bounded candidate domain contains useful alternatives; it is
not evidence that the diagnostic scalar score is an acceptable Product policy.
The candidate probe intentionally did not replace the Product selector.

The ordinary-first control produced the same Self-loop geometry in every
reported case. This reproduces the earlier same-geometry finding: changing
route order alone does not fix Self-loop selection. However, the current
Self-loop-first stream can change later ordinary routes because accepted loop
paths enter occupied-path arbitration. That is an ordinary-routing coupling,
not proof that ordinary-first routing should be adopted.

## Responsibility attribution

| Residual | Primary responsibility | Boundary conclusion |
| --- | --- | --- |
| Foreign Node pressure and incident angular scarcity | Structural Placement supplies Node geometry; Self-loop routing consumes it | Placement can improve available space, but does not own loop angle or route |
| Self-loop angle choice | Self-loop routing/presentation | Current bounded search is the right seam; its objective is incomplete |
| Multiple-loop fan-out, peer-loop overlap, radius expansion | Self-loop routing/presentation | Current radius hierarchy is deterministic but not a capacity guarantee |
| Ordinary-route churn or path proximity | Product ordinary routing / occupied-path arbitration | Keep ordinary routing authority; route-order change is not established as the fix |
| Relation-label route/foreign-route clearance and ownership | Product final Relation-label placement | Self-loop candidate selection currently does not reserve these envelopes |
| Node-label clearance | Product Node-label placement and its route inputs | A loop may be geometrically Node-safe while its label is not |
| Endpoint-plan / capacity | Existing endpoint-plan authority | No endpoint-plan transfer into Self-loop was justified; Self-loop demand is a separate local presentation signal |
| Combined failures | Self-loop angle × ordinary routes × labels × viewport | A bounded local allocation contract is a plausible next hypothesis, not an accepted rule |

Structural Placement improvements therefore can naturally remove some foreign
Node pressure and improve angular space, but they do not naturally remove
ordinary corridor conflicts, peer-loop fan-out collisions, or long EN/JA
Relation-label ownership problems.

## Actual Product smoke check

A small read-only smoke check used the existing ECR3 Actual Product surface for
Lighthouse EN and JA with the current arm. The normal App open, route rendering,
label rendering, and viewport fit were stable; no blank surface or catastrophic
Node overlap was observed. The lower Self-loop and its label were visible in the
graph. The JA long label wrapped, and the lower graph region was visually dense
near the viewport edge; this is diagnostic only. A hover tooltip was also
visible during the JA inspection and was not treated as layout evidence.

This smoke check is not formal acceptance. No new candidate was promoted to
Human Review.

## Decision

The self-loop responsibility boundary is confirmed, but Product quality is not
closed. The next smallest research direction is a bounded **Self-loop-local
angle/radius allocation probe** that can inspect, without taking ownership of:

1. ordinary incident-path clearance;
2. peer-loop separation and fan-out capacity;
3. owner Node-label and final Relation-label envelopes; and
4. viewport/fit guards.

The probe must preserve manual authority, deterministic tie-breaking, and a
bounded candidate count. It must first establish whether these inputs can be
combined without destabilizing ordinary routes. It must not become a global
Parallel allocator, a Structural Placement solver, or a final label placer.
Radius adaptation remains unproven and should not be added merely to increase
spacing.

`Parallel / Relation-label Presentation` remains open and is not retuned by
this checkpoint. `Self-loop` can proceed as an independent routing/presentation
track, but no new Human Review candidate exists. The status is therefore
`NOT READY FOR HUMAN REVIEW`.

No Product default/adoption, production provider, Initial Layout Release
blocker, Adaptive Initial Placement Cascade, or Fast Initial Placement plus
High-quality Auto Layout decision changes here.

## Validation and change boundary

Changed files:

- `e2r-liaison-scape/tools/self-loop-angle-ordinary-edge-interaction-audit.mjs`
- `e2r-liaison-scape/experimental/self-loop-angle-ordinary-edge-interaction/audit.json`
- this result document
- `e2r-spec/docs/roadmap.md`

Validation:

- `npm.cmd test -- --test-name-pattern="self-loop|self-Relation|self loop"`:
  `416/416 PASS` (the repository test command currently executes the full
  suite despite the name filter);
- `node tools/self-loop-angle-ordinary-edge-interaction-audit.mjs`: 12 results,
  deterministic;
- Actual Product EN/JA smoke: diagnostic PASS, no formal acceptance.

No source runtime, Dataset, stored/authored Coordinates, persistence,
dirty-state, manual placement, manual curvature, manual Relation-label
semantics, or session log was changed. No knowledge-base promotion is needed:
the existing accepted Node-avoidance decision remains valid within its scope,
while this combined interaction result is repository-scoped checkpoint
evidence.
