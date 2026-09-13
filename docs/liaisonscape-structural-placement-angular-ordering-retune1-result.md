# LiaisonScape Structural Placement / Angular Ordering Retune 1

Date: 2026-09-14

## Decision

**RETUNE / NOT READY FOR HUMAN REVIEW.** The existing production-native
structural formulation remains useful evidence for ordinary crossing reduction,
but it does not provide a quality-safe general placement rule. A generic,
request-driven angular correction is machine-promising for the Titanic EN
capacity shortage, yet it remains a new unreviewed placement counterfactual and
is not integrated into Product.

Product default/adoption remains `HOLD`, production provider remains `NOT
ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`.

## Roadmap order

The current execution order is intentionally:

1. Parallel / Incident Bundle: finish endpoint-plan responsibility boundaries,
   distinguish routing-only failure from capacity shortage, and return a
   structured request when routing lacks angular capacity.
2. Structural Placement / Angular Ordering: reduce ordinary crossings and
   answer only generic capacity requests while guarding Node separation,
   viewport fit, and unrelated corridors.
3. Self-loop Angle / Ordinary Edge Interaction: independently examine loop
   angles, ordinary-edge interference, multiple loops, and loop radius.
4. Initial Layout Re-baseline: reassess canonical, dense, and difficult
   topologies after the attribution boundary is clearer.
5. Initial Layout execution architecture: compare single placement, fast
   placement plus explicit High-quality Auto Layout, and the deferred Adaptive
   Initial Placement Cascade.

The Adaptive Cascade remains a `Hypothesis / future experiment` after items
1--4. Self-loop work is deliberately before both that hypothesis and the
execution-architecture decision, so presentation residuals are not mistaken
for placement quality.

## Formulations and evidence

The retained production-native structural formulation 1 was used as the
crossing-aware reference. Its earlier evidence showed major dense crossing
reductions at roughly 1--2 seconds, but also material fitScale and screen-space
Node-separation regressions; it is not a default candidate. The current
capacity-negotiated probe does not revive fixed angular relief, circular equal
spacing, or fixture-specific swaps.

The bounded structural correction applies only to a routing-issued request. It
rotates incident neighbors inside the requested sector while preserving their
radial distance, chooses a deterministic side for a zero-angle tie, and
returns the original positions when graph-wide separation or extent guards
fail. It is a pure browser-compatible contract; it does not write Dataset
coordinates or alter the Product provider.

Matched machine evidence:

| Case | Result | Interpretation |
| --- | --- | --- |
| Lighthouse EN/JA | no request; no correction | request absence prevents unnecessary movement |
| Titanic EN | request 26.4°, available 14.2°; endpoint plan feasible after correction | actionable but unreviewed; Node separation 68.3 -> 64.4 px, crossings 0, 4 ordinary routes changed |
| Titanic JA | routing-only endpoint plan feasible | no placement correction justified |
| Apollo EN/JA | no-parallel control | unchanged |
| shared/crowded multi-bundle | feasible / shortage classifications retained | shortage is explicit, diagnostic fallback is not accepted |
| asymmetric rotated control | feasible after request | generic perturbation evidence only, not a production rule |

The previous structural formulation's canonical and dense evidence remains
the relevant comparison: crossing reduction alone reduced fitScale or Node
separation, and fixed 32-degree relief improved Titanic EN while damaging
Lighthouse. The new request-driven candidate avoids applying that change to
Lighthouse, but the full graph viewport, unrelated route corridor, and human
readability are still unverified.

## Responsibility and lifecycle boundary

Endpoint planning owns incident feasibility, bundle/port reservation, and the
structured capacity request. Structural Placement may consume that request as
a generic capacity negotiation, but it owns the resulting candidate geometry
only as a derived, uncommitted placement result. Product routing, Relation
labels, Self-loops, manual curves, manual labels, and authored/stored
coordinates remain authoritative elsewhere.

The request lifecycle contract permits application only during coordinate-less
initial open or stable idle with a matching token and no authored/manual
authority. It defers during drag, Dataset replacement, navigation, or manual
route/label authority, and discards stale or cancelled requests. This is a
static contract, not Product integration; it protects against lifecycle
mutation but does not prove browser timing or visual acceptance.

## Assessment

The structural track remains `RETUNE`. Request-driven capacity negotiation is
worth one more bounded safety step only if it adds viewport and unrelated-
corridor guards without moving unaffected Nodes. Candidate compression should
not be the immediate priority because the geometry-derived probe lost rare
oracle-feasible candidates. Self-loop / Ordinary Edge Interaction is the next
separate presentation track after this attribution boundary, while Initial
Layout re-baseline remains blocked.

No Product default, provider, Dataset, persistence, dirty-state, Save
Coordinates semantics, or existing Human evidence changed.
