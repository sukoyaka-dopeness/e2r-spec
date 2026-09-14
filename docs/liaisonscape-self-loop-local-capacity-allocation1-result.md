# LiaisonScape Self-loop-local Angle / Radius Capacity Allocation 1

Date: 2026-09-14
Status: `BOUNDED DOMAIN CONFIRMED / LOCAL CAPACITY SHORTAGE / NOT READY FOR HUMAN REVIEW`
Checkpoint: `E2R-LIAISONSCAPE-SELF-LOOP-LOCAL-CAPACITY-ALLOCATION1`

## Scope and boundary

This checkpoint tests whether the existing bounded Self-loop candidate domain
can accept local capacity inputs without moving authority across the existing
boundaries. It is a diagnostic formulation study, not a production solver or a
Product retune.

Self-loop angle, radius, and fan-out remain Self-loop routing/presentation
responsibilities. Structural Placement supplies Node geometry and available
angular space only. Ordinary routing, final Relation-label placement, final
Node-label placement, endpoint-plan authority, and Parallel / Incident
architecture remain unchanged. Manual Self-loop orientation/radius remains
authoritative.

## Tested arms

The audit is
`e2r-liaison-scape/tools/self-loop-local-capacity-allocation-audit.mjs`, with
artifact
`e2r-liaison-scape/experimental/self-loop-local-capacity-allocation/audit.json`.

It uses a provisional diagnostic hard contract:

- ordinary Self-loop path clearance: at least `8px`;
- peer Self-loop clearance: at least `8px`;
- Node-label and final Relation-label envelope clearance: at least `4px`;
- viewport margin: `12px`;
- candidate ordinary-route churn must not exceed the current baseline; and
- no feasible plan is silently accepted as a fallback.

The thresholds are audit gates, not adopted Product constants.

Three arms were compared:

1. `angle-only-independent`: 36 ten-degree candidates per loop at the current
   radius, selected independently;
2. `angle-plus-small-radius-independent`: the same angle domain with base and
   base-plus-14 radius candidates, selected independently; and
3. `owner-group-bounded-allocation`: owner-local candidate combinations with
   at most six retained candidates per loop, no global graph solver, and at
   most 24 final Product-authoritative evaluations per owner group.

Every final finalist was evaluated through the current Product route pipeline,
final Relation-label placement, final Node-label placement, viewport guard,
and ordinary-route churn comparison. A cheap geometry screen was used only to
bound final evaluation. A `diagnostic-best-non-feasible` result is explicitly a
fallback and is not an accepted allocation.

## Results

The matrix covered Lighthouse and Titanic EN/JA plus isolated, symmetric,
perturbed, and four-loop fan-out controls in EN/JA: 12 cases and 36 arms.
All 12 baseline Product evaluations were deterministic.

| Arm | Accepted allocations | Evidence |
| --- | ---: | --- |
| angle-only-independent | `0/12` | Independent choices leave peer-loop, label-envelope, or ordinary-corridor conflicts |
| angle-plus-small-radius-independent | `1/12` | Only isolated JA became feasible; radius expansion did not resolve canonical or dense cases |
| owner-group-bounded-allocation | `2/12` | Isolated EN/JA were feasible; Lighthouse, Titanic, symmetric, perturbed, and fan-out remained infeasible |

Representative residuals from the selected diagnostic best plans:

- Lighthouse EN/JA: peer-loop clearance remained near `0.8–2.1px`; the
  four-loop owner group had no feasible plan; one group fallback changed one
  ordinary route.
- Titanic EN/JA: owner-group allocation improved one peer clearance to about
  `8.3px`, but final Relation-label/ordinary conflicts and viewport pressure
  remained; no feasible plan was accepted.
- Symmetric controls: Node-label envelope conflicts remained despite ordinary
  path clearance above `23px` in selected plans. This separates label capacity
  from route-only capacity.
- Perturbed controls: one ordinary clearance remained about `1.8–2.0px`; a
  small radius portfolio improved another loop but did not produce a complete
  plan.
- Four-loop fan-out: group allocation still left peer-loop clearance near
  `0.94px` for some loops. Independent selection was especially unsafe because
  multiple loops converged on the same local angular region.
- Isolated controls: owner-local group allocation was feasible in both locales;
  isolated JA also had one feasible angle-plus-radius independent plan. This is
  a sparse control result, not evidence for dense Product adoption.

## Radius adaptation finding

Radius adaptation is locally useful but not generally justified as the default
capacity mechanism. The base-plus-14 portfolio rescued an isolated JA control,
and group allocation used the larger radius in some feasible isolated plans.
In canonical, symmetric, perturbed, and four-loop controls it did not remove
the combined peer-loop, label-envelope, ordinary-corridor, or viewport
shortages. Larger radius alone therefore cannot be credited as a general
quality fix, and no radius policy was adopted.

## Candidate count and runtime

The domain remains bounded:

- 36 angles per radius;
- 72 angle/radius candidates for the small portfolio;
- maximum owner-local product observed: `1,296` screened combinations;
- maximum final Product-authoritative evaluations per owner group: `24`.

This proves bounded candidate count, but not yet browser-native runtime. The
staged audit reduced the naive full-authoritative search cost, yet canonical
Lighthouse arms still measured approximately `4–6 seconds` each and the
four-loop fan-out arms approximately `1.8–2.5 seconds` each. The expensive
part is repeated authoritative route/label presentation, not angle arithmetic.
The screen-to-finalist reduction is diagnostic and its recall is not yet an
accepted guarantee. A production candidate would need dependency-aware reuse
or a separately justified smaller finalist contract before claiming
browser-native behavior.

## Responsibility attribution

The experiment supports the following boundary:

- Structural Placement can reduce foreign-Node pressure and increase available
  angular space, but cannot guarantee local Self-loop capacity.
- Self-loop routing needs local access to ordinary incident-path clearance,
  peer-loop separation, and radius/fan-out demand.
- final Relation-label and Node-label authorities must remain downstream
  authorities; they can provide coarse reservation signals but must not move
  into the Self-loop router.
- ordinary route churn remains a Product ordinary-routing concern. Candidate
  plans that alter loop paths can change occupied-path arbitration, so a
  Self-loop allocator cannot claim isolation merely because its own geometry is
  local.
- endpoint-plan and Parallel / Incident capacity contracts are not reusable as
  Self-loop ownership. The local Self-loop contract is adjacent evidence, not
  a transfer of authority.

## Decision

The existing 36-angle domain is large enough to contain useful alternatives,
but independent local selection is insufficient. An owner-local group
allocation is directionally correct and remains bounded, yet it is only
feasible for sparse isolated controls under the tested contract. It does not
close canonical or dense Product quality, and its authoritative verification
cost is not yet browser-native.

Therefore:

- no Self-loop production selector change is justified;
- no radius adaptation policy is adopted;
- no diagnostic fallback is accepted as a feasible allocation;
- Self-loop architecture remains responsibility-confirmed but quality-open;
- Parallel / Relation-label follow-up remains `OPEN` and unchanged;
- bounded Layout / Presentation Modularization is not yet ready for a
  behavior-changing extraction of the allocator; and
- no new candidate is ready for Human Review.

The next Self-loop research, if authorized, should focus on a small owner-local
capacity contract with explicit finalist-recall and dependency-reuse evidence.
It must not expand into a global graph solver, Parallel allocator, Structural
Placement solver, or final label placer.

No new candidate was integrated into the Actual Product surface because no
canonical or dense arm produced an accepted allocation. Consequently, no new
Product smoke check was promoted from the previous current-geometry smoke
check; this checkpoint has no formal visual acceptance.

Product default/adoption remains `HOLD`, the production provider remains `NOT
ESTABLISHED`, the Initial Layout Release blocker remains `OPEN`, and neither
Adaptive Initial Placement Cascade nor Fast Initial Placement plus explicit
High-quality Auto Layout is adopted.

## Validation and change boundary

Changed for this checkpoint:

- `e2r-liaison-scape/tools/self-loop-local-capacity-allocation-audit.mjs`
- `e2r-liaison-scape/experimental/self-loop-local-capacity-allocation/audit.json`
- this result document
- `e2r-spec/docs/roadmap.md`

No production runtime source, Dataset, stored/authored Coordinates,
persistence, dirty-state, Save Coordinates, manual Node placement, manual
curvature, manual Relation-label semantics, Parallel architecture, endpoint
plan, or session log was changed.
