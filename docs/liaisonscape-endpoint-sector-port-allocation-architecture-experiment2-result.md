# LiaisonScape Endpoint-Sector / Port Allocation Architecture Experiment 2

Date: 2026-09-13

## Decision

**RETUNE / NOT READY FOR HUMAN REVIEW.** A first-class incident-allocation
decision contract is viable, and joint endpoint-budget search removes two
important artifacts of Experiment 1. It makes Lighthouse EN/JA feasible
without ordinary-route churn and reduces Titanic JA ordinary-route churn from
8 Relations to 1. Titanic EN remains a real bounded capacity-shortage case.

This is diagnostic architecture evidence, not a Product routing change.
Product default/adoption remains `HOLD`, the production provider remains `NOT
ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`.

## Architecture tested

The experiment retained the existing Product route and Relation-label
authorities, but changed the orchestration above them:

1. collect the complete parallel group and every ordinary Relation incident to
   either endpoint;
2. derive a label-aware bundle half-width and the endpoint angular sector that
   width requires;
3. classify ordinary Relations whose endpoint direction conflicts with that
   reservation;
4. evaluate both a localized `preserve-unaffected` policy and the former
   `reroute-all` policy for each deterministic bundle gap/center candidate;
5. run Product Relation-label derivation, then apply hard feasibility before
   side-bias/detour cost;
6. commit an allocation only when a hard-feasible candidate exists.

This is a bounded joint capacity-budget prototype, not yet a complete port
allocator. In particular, port tangents are represented by angular sectors,
not persistent Node-boundary port objects, and multiple bundles are still
processed sequentially. Those are explicit architecture risks rather than
hidden Product semantics.

## First-class decision contract

The browser-compatible pure contract returns exactly one of:

- `feasible`, containing an accepted candidate ID;
- `capacity-shortage`, containing a generic placement-negotiation request; or
- a separately named `diagnosticFallbackCandidateId` used only to render and
  inspect an unsafe case.

A diagnostic fallback is never an accepted allocation. The shortage payload
contains endpoint IDs, required and available half-sector angles, angular
shortage, bundle width, bundle and conflicting Relation IDs, the union of hard
failures, and label/outer-guard/obstacle/port pressure. Unit tests cover hard-
feasible-only selection, shortage/fallback separation, structured pressure,
and order-independent determinism.

## Canonical evidence

All geometry values below are screen-space after the existing Product fit.
The candidate count doubled because both localized and reroute-all ordinary
policies were audited.

| Cell | Experiment 1 | Experiment 2 | Selected geometry (`lane / label / ownership / outer / bias`) | Ordinary route changes | Diagnostic time |
| --- | --- | --- | --- | ---: | ---: |
| Lighthouse EN | 0/35 feasible | 2/70 feasible | `20.4 / 8.5 / 40.4 / 7.7 / 0` | 5 -> 0 | ~300 ms |
| Lighthouse JA | 0/28 feasible | 1/56 feasible | `20.4 / 8.5 / 40.4 / 7.7 / 0` | 5 -> 0 | ~217 ms |
| Titanic EN | 0/35 feasible | 0/70 feasible | diagnostic fallback only: `40.6 / 65.4 / 37.3 / 1.3 / 0.73` | 8 -> 4 | ~365 ms |
| Titanic JA | 3/35 feasible | 6/70 feasible | `23.7 / 36.9 / 29.5 / 16.4 / 0` | 8 -> 1 | ~295 ms |
| Apollo EN/JA | no parallel group | no allocation | unchanged control | 0 | ~14 ms |

The Lighthouse shortage in Experiment 1 was therefore an artifact of the
bundle-first/reroute-all search boundary, not proof that its coordinates lack
capacity. Titanic JA likewise did not require broad incident churn. Titanic EN
remained infeasible after both policies, so its shortage is retained.

For Titanic EN the least-shortage request reports approximately:

- required half-sector: `26.4 degrees`;
- available half-sector: `14.2 degrees`;
- shortage: `12.2 degrees`;
- reserved bundle width: `94.1 px` after fit;
- conflicting ordinary Relations: 4;
- outer-guard deficit: `4 px`, with additional obstacle/port pressure.

The numbers are diagnostic requirements, not a normative placement threshold.
A Structural Placement counterfactual must satisfy this request while also
preserving Node separation, viewport fit, and unrelated route corridors.

## Synthetic and invariance evidence

Hard-feasible results were found for 2-parallel short/short, long/short, and
long/long labels; 3-plus long/short; mixed reverse direction; nearby obstacle;
multiple ordinary Relations; asymmetric incident geometry; and a Node shared
by two parallel groups. Physical-side ordering remained deterministic. The
localized policy usually changed zero or one ordinary route.

Mirror and rotation controls confirm that capacity is geometry-dependent. The
asymmetric base and mirror were feasible, while a 90-degree rotation produced
a structured shortage of about 10.1 degrees and rendered only a diagnostic
fallback. This is expected negotiation evidence, not transform invariance.

The shared-multiple-bundle case also exposes the next risk: feasibility for one
group does not prove globally compatible ports because the current diagnostic
still commits groups sequentially. A production allocator must reserve all
incident bundles and ordinary Relations in one endpoint plan, or perform
bounded backtracking with an explicit portfolio limit.

## Responsibility and feasibility assessment

- Routing/presentation owns endpoint sectors, ports, bundle lanes, ordinary
  guards, obstacle detours, and atomic commit.
- Relation-label placement remains the final Product authority; deterministic
  label envelopes are reservations, not replacement label placement.
- Structural Placement receives a capacity request only after bounded joint
  routing returns `capacity-shortage`.
- Self-loop, manual curvature, and manual Relation-label authority remain
  unchanged and outside this experiment.

The contract and candidate bookkeeping are deterministic and use no Node-only
or server API, so they are browser-native in formulation. Production readiness
is not established: drag continuity, manual-route coexistence, cancellation,
multi-bundle endpoint plans, and portfolio growth still require design and
tests. The measured 56-70 candidate portfolios are diagnostic and are not an
accepted production budget.

## Next checkpoint

Continue the routing architecture one bounded step: replace sequential
per-bundle decisions with an endpoint plan covering all incident bundles and
ordinary Relations, use explicit port reservations during route generation,
and cap/backtrack the joint portfolio deterministically. In parallel, use the
Titanic EN structured request for a capacity-negotiated placement experiment;
do not reinstate fixed 32-degree relief.

No candidate meets the Human Review gate because Titanic EN still has no hard-
feasible allocation and the new architecture has not been rendered as a safe
canonical Product candidate. Existing Human evidence is not inherited.
