# LiaisonScape Product-Owned Parallel Bundle + Relation-Label Ownership Generalization 1

Date: 2026-09-16

## Checkpoint purpose

This checkpoint tests whether the widened Parallel presentation direction from
the prior checkpoint generalizes beyond one reverse bundle. It keeps the
current Node geometry, ordering, Self-loop selector, viewport policy, and
Parallel/Incident responsibility boundary.

The controls were:

- the existing reverse + same-direction + Self-loop control;
- a diagnostic five-Relation higher-multiplicity bundle;
- a mixed-incident four-Relation bundle with ordinary incident Relations;
- the public Lighthouse EN sample, which contains a real Parallel group and
  Self-loop coexistence.

The exact artifact is
[`result-summary.json`](../../e2r-liaison-scape/experimental/product-owned-parallel-bundle-generalization1/result-summary.json).
The Actual Product smoke surfaces are indexed in
[`visual-evidence-index.md`](../../e2r-liaison-scape/experimental/product-owned-parallel-bundle-generalization1/visual-evidence-index.md).

## Candidate identity and policy comparison

The candidate identity is `product-owned-adaptive-bundle-v1`. It is a
diagnostic Product presentation policy, not an adopted provider. It derives a
bounded graph-wide spacing scalar from:

- maximum non-Self-loop Parallel multiplicity;
- whether an undirected endpoint pair has both directions;
- maximum Parallel Relation-label display width.

Self-loops and ordinary Relations are excluded from demand calculation. The
policy is capped at 32 source units and never requests side symmetry.

The existing `bundle-16`, `pair-16`, and `corridor-aware-16` references all
produced the same result on the primary control: spacing 16 with bundle/pair/
corridor mode differences not activated by that fixture's label geometry. This
equality is fixture-specific, not evidence that the concepts are identical in
general.

## Evidence

### Reverse + same-direction control

With the new checkpoint's consistent group metrics, the alpha/beta current
result was side `3:1`, lane separation `14.70`, endpoint angular separation
`0.157`, one ownership ambiguity, and one label for which a foreign route was
closer than its owner. Fixed `bundle-16` changed the bundle to `2:2`, increased
endpoint angular separation to `1.149`, reduced the foreign-closer count to
zero, and reduced ownership ambiguity to zero. It retained zero crossings,
zero final occupied-path conflicts, zero label overlap, zero Node collision,
and zero ordinary-route churn.

The gamma/delta same-direction pair remained balanced under fixed `bundle-16`:
lane separation increased from `54.80` to `76.70` and endpoint angular
separation from `0.866` to `1.149`. This is a useful non-regression control,
not a request to force every bundle to be symmetric.

The adaptive graph-wide policy selected spacing 20 for this graph. It improved
alpha/beta further, but caused gamma/delta to collapse to a same-side `2:0`
result with lane separation `14.16` and endpoint angular separation `0.143`.
This is a direct cross-bundle regression and rejects the graph-wide scalar as a
safe generalized policy.

### Higher multiplicity

The five-Relation bundle had current ownership ambiguity `3` and foreign-closer
count `3`. Fixed `bundle-16` reduced both to zero, increased lane separation
from `14.13` to `22.00`, and retained zero crossings and zero final conflicts.
It changed one ordinary route. The adaptive policy selected spacing 24,
increased lane separation to `26.53`, and retained zero ownership ambiguity,
but changed two ordinary routes and lengthened the median route further.

The higher-multiplicity result supports bounded fan-out demand, but does not
justify selecting the largest spacing solely from a scalar width signal.
Ordinary-route churn is a real coupling cost.

### Mixed incident control

The mixed incident control was already side-balanced at `2:2`, so side balance
was not used as its success criterion. Fixed `bundle-16` increased endpoint
angular separation from `0.437` to `0.603`, reduced ownership ambiguity from `2`
to `1`, reduced foreign-closer labels from `2` to `1`, and caused zero ordinary
route churn. Crossings, final conflicts, label overlap, and Node collision
remained zero. The adaptive spacing 24 removed the remaining ambiguity and
foreign-closer labels, but this improvement came with a longer route signal;
the control is not sufficient to establish a production policy by itself.

### Public Lighthouse sample

The Lighthouse EN sample has a real two-Relation Clara/Thomas Parallel group,
ordinary incident pressure, and two Self-loops elsewhere. Current lane
separation was `44.88` and endpoint angular separation `0.286`; fixed 16
increased these to `62.84` and `0.398`. Adaptive spacing 12 produced `58.35`
and `0.370`. Current and both candidates had zero ownership ambiguity and zero
foreign-closer labels on this public row. No ordinary route churn, crossing,
final conflict, label overlap, or Node collision was measured.

The Actual Product Reset smoke kept the public graph usable at its normal 51%
fit. The widened view did not produce a gross route, label, Self-loop, or graph
structure regression. The visual improvement was modest at fit scale, so this
is supporting evidence rather than acceptance.

## Relation-label ownership

The checkpoint confirms that owner-route distance alone is insufficient. The
primary control had median owner distance 0 even before widening, yet one
label was closer to a foreign route and one ownership ambiguity remained.
Fixed widening removed those foreign-closer and ambiguity observations on the
primary control, while the public sample stayed non-regressed. The policy did
not add an unconditional “move labels toward edges” rule; final label
placement remains the existing Product authority.

The higher-multiplicity and mixed-incident controls show the remaining coupling:
larger fan-out can improve relative ownership, but may change ordinary route
geometry and route length. Route length was retained as a trade-off signal,
not optimized as a winner.

## Responsibility and boundary findings

| Observation | Attribution |
| --- | --- |
| Bundle lane and endpoint fan-out | Product Parallel/reverse routing presentation. |
| Foreign-closer labels and ambiguity | Product route geometry coupled with final Relation-label placement. |
| Ordinary-route churn on higher multiplicity | Product occupied-path arbitration coupling. |
| Self-loop coexistence | Preserved Product Self-loop authority; no selector change. |
| Node topology/order | Structural Placement input, unchanged in this checkpoint. |
| Viewport framing | Existing Product viewport policy, unchanged. |

Parallel/Incident architecture remains `CLOSED`. The experimental Incident
allocator and endpoint-plan authority were not reopened. Structural Placement
does not receive routing or final label ownership.

## Outcome and readiness

The checkpoint is classified:

**A/C QUALIFIED: WIDENED PRODUCT PARALLEL PRESENTATION GENERALIZES AS A
DIAGNOSTIC DIRECTION, BUT GRAPH-WIDE ADAPTIVE SPACING IS NOT SAFE; BUNDLE-LOCAL
CAPACITY POLICY OR CROSS-BUNDLE FEASIBILITY IS STILL REQUIRED.**

The fixed widened reference is worth continuing as a bounded Product
presentation research direction. The adaptive implementation is useful as a
negative/control result, not as a production candidate. A production route
default, Product provider, Structural Placement change, portfolio change, or
Self-loop change is not justified.

Human Review remains `NOT READY`. The Actual Product smoke found no gross
failure in the widened reverse, same-direction, mixed-incident, or public
sample surfaces, but it is not formal acceptance and does not create a Human
Review candidate.

Local relaxation was not introduced. Self-loop angle/radius/fan-out policy was
not changed. Viewport policy was not changed. Product default/adoption remains
`HOLD`, production provider remains `NOT ESTABLISHED`, and the Initial Layout
Release blocker remains `OPEN`.

## Changed files and validation

LiaisonScape changes are limited to the dev-only bounded policy, diagnostic
fixtures/tool/artifact, Product preview seam, and tests. The normal Product
default path remains unchanged; canonical Dataset bytes, stored/authored
Coordinates, persistence, and Save Coordinates were not changed.

Validation completed:

- generalized artifact regenerated across four controls;
- focused policy, bundle-routing, and artifact tests passed;
- LiaisonScape lint and build passed;
- relevant full Product tests passed;
- Actual Product smoke completed for reverse/same-direction, mixed incident,
  and public Lighthouse controls;
- no historical result document was rewritten;
- no push, tag, release, deploy, publish, reset, stash, clean, rebase, squash,
  or amend was performed.

No knowledge candidate is added. This is repository-local Product evidence and
the adaptive failure should remain scoped to this checkpoint until an
independent bundle-local formulation confirms it.
