# Pre-Public-Release Placement, Display-Order, and License Sequencing

- Date: 2026-08-30
- Status: Current pre-release planning authority
- Scope: LiaisonScape 0.2.0 release readiness

## Current blocker and boundaries

The LiaisonScape 0.2.0 preparation is complete locally, but the final audit
found a release blocker: the repository does not yet contain its own
`LICENSE`/`LICENSE.md`, although its README identifies MIT licensing. License
remediation is a separate bounded checkpoint. This record does not add a
license file, change package metadata, or publish anything.

The Initial Node Placement Objective Audit and the NarrativeLine Display-Order
Reordering Audit are pre-release audits, not implementation approvals.

## Initial Node Placement Objective Audit

The audit must assess: stored Dataset coordinates in the Coordinate / Coordinate
Draft boundary through `getStoredCoordinates`; Dataset open invoking
`placeInitialEntities(...)`; partial stored coordinates; `fitGraphView` as
viewport framing; explicit user Auto Layout invoking `solveAutoLayout`; and
separation of initial placement from user Auto Layout. It must also assess node
and label overlap, edge crossing/congestion/length, bounds, component
separation, stability, incremental stability, stored-coordinate preservation,
and non-persistence of derived placement. It must not assume that a better
visual result authorizes a new serialized contract.

## NarrativeLine Display-Order Reordering Audit

Before implementation, the audit must decide GO or DEFER and record the reason.
It must distinguish chronology/date-time, `temporalOrder`, authorial display
order, Event identity presentation, and arbitrary drag order. It must not change
History or Core schema by implication.

## Current pre-release sequence

1. LiaisonScape `LICENSE` remediation.
2. Initial Node Placement Objective Audit.
3. NarrativeLine Display-Order Reordering Audit.
4. Result-driven placement/order samples, interoperability evidence, and
   release evidence.
5. Final Pre-Public-Release Audit.
6. If READY, explicit authorization for public sync, tag, GitHub Release,
   deployment, and public acceptance.

Research shelf inventory and the Hub concept page remain separate workstreams.
No application runtime, test, schema, package, license, sample, deployment,
tag, public sync, or publication was changed.
