# LiaisonScape Frontier Automatic Display Production Adoption Readiness 1

Date: 2026-09-16
Status: `READY WITH EXPLICIT OPERATIONAL BOUNDARY` for a separate bounded adoption-implementation checkpoint; production default unchanged.

## Decision

Frontier-12 is ready to be considered in a separate production-adoption implementation checkpoint for coordinate-less automatic display, subject to the explicit boundaries below. This checkpoint does not wire the provider, change the default, or decide release adoption.

The current source still uses `deriveActualProductInitialLayout` and
`settleInitialPlacement` for the normal coordinate-less path. Frontier is
reachable only through the DEV acceptance/operation-local preview seams. This
is a source-backed fact, not a missing test.

## Authority and lifecycle contract

| Input/state | Current or required adoption contract |
|---|---|
| coordinate-less Dataset | Frontier may provide derived initial Node positions in a separate adoption path |
| complete stored Coordinates | stored Coordinates remain authoritative; Frontier must not run |
| mixed/partial Coordinates | existing mixed-completion authority remains; Frontier must not replace it |
| Dataset replacement / reload/remount | derived Frontier positions are disposable and must be recomputed only under the explicit provider path |
| locale change | no implicit Dataset or Coordinate mutation; existing presentation lifecycle remains authoritative |
| pan/zoom/Reset | viewport-only state; candidate and Dataset state remain unchanged |
| manual Node/label/route/Self-loop movement | existing manual authority remains authoritative |
| Save/export/dirty state | derived positions do not become stored Coordinates or dirty state without explicit user action |

No current evidence requires changing these contracts.

## Failure and fallback boundary

Current production has no Frontier materialization failure path because Frontier is not wired into the normal provider. The existing DEV seam fails closed for failed requests, incomplete/non-finite candidate maps, and preserves the current Product path when a diagnostic candidate is rejected.

A separate adoption implementation must define and test a technical failure class (request/materialization failure, invalid/incomplete result, hard-infeasible result, and timeout/budget exhaustion) before switching the default. It must discard partial Frontier output, avoid Dataset/dirty-state mutation, and use a deterministic bounded fallback. Fast is not required as a quality competitor and remains internal/emergency material; the adoption checkpoint must decide whether fallback is the existing `settleInitialPlacement` path or another explicitly bounded technical fallback. No new fallback architecture is authorized here.

## Quality and operational boundary

Human Review is closed `QUALIFIED`: Frontier is sufficient for immediate normal automatic display, with a small accepted ordinary Edge-crossing residual in Titanic/Ashen Crown and related presentation. That residual is a roadmap presentation-quality follow-up, not an adoption blocker and not a reason to reopen provider selection.

Dense/long-label presentation congestion and multi-second runtime remain an explicit operational boundary. Adoption may be considered for ordinary coordinate-less display only if the implementation states its graph-size/runtime envelope and does not imply an unrestricted latency guarantee for large dense graphs. Workerization, scheduling, solver optimization, and candidate-row optimization remain out of scope.

Node-label recovery, broader Product settling, Self-loop joint collision quality, and Explicit Auto Layout remain separate tracks.

## Required separate adoption checkpoint gates

Before production default integration, verify: coordinate-less/stored/mixed matrix; Dataset replacement and reload/remount; locale and viewport lifecycle; manual authority; save/export/dirty-state; invalid/incomplete/timeout failure behavior; deterministic fallback; no partial candidate exposure; ordinary Product presentation; and the accepted dense/runtime boundary. The current Frontier Human Review record supplies overall `QUALIFIED` evidence but does not supply PASS records for all 15 review units.

## Classification

`READY WITH EXPLICIT OPERATIONAL BOUNDARY`: sufficient to start a separate bounded production-adoption implementation/design checkpoint, not sufficient to change the production default in this checkpoint. No production source change was made.
