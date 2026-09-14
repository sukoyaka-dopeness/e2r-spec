# LiaisonScape Narrow Graph Decomposition + Capacity Contract 1

Date: 2026-09-14

## Decision

**B-LEANING / NOT READY FOR HUMAN REVIEW.** A narrow graph decomposition can
make individual local Structural Placement searches small, but the tested
decomposition does not yet make the complete single-placement problem bounded
enough for production use. Dense and symmetric biconnected cores remain one
global topology problem, while decomposable canonical graphs can still produce
a large product of local finalist choices with shared endpoints as global
bottlenecks.

This is an architecture/feasibility result, not a Product provider decision.
The evidence supports formally considering **Fast Initial Placement + explicit
High-quality Auto Layout** as the next responsibility split if a later,
stronger contract cannot reduce the residual coupling. Adaptive Initial
Placement Cascade remains a later hypothesis and is not advanced by this
checkpoint.

## Scope and authority boundary

The checkpoint added a pure browser-compatible probe in LiaisonScape:

- `tools/decomposition-capacity-contract.mjs`;
- `tools/decomposition-capacity-contract-audit.mjs`;
- `tests/decomposition-capacity-contract.test.ts`; and
- `experimental/decomposition-capacity-contract/audit.json`.

The probe uses an undirected biconnected-component decomposition as a narrow
structural partition. It runs the existing bounded discrete feasibility audit
independently for each local component and emits a shared-endpoint contract
containing participating components, incident relation count, relation IDs,
aggregate coarse label demand, required angular span using the existing
8-degree minimum-gap signal, and a `shared-endpoint` or `global-bottleneck`
classification.

The probe owns no routing, final label placement, endpoint-plan authority,
Self-loop routing, Dataset state, persistence, or authored coordinates. A
global biconnected component is deliberately retained as a global core rather
than being split by an arbitrary cut.

## Experiment matrix

The audit covered the six canonical EN/JA fixtures, dense bipartite controls,
a one-relation perturbation, a symmetric ring, and a deliberately decomposable
block chain.

| Input | Components | Boundary contracts | Global bottlenecks | Max local states | Local search product | Finalist upper bound |
|---|---:|---:|---:|---:|---:|---:|
| Lighthouse EN/JA | 3 | 2 | 1 | 27 | 1,755 | 1,728 |
| Titanic EN/JA | 9 | 1 | 1 | 11 | 2,750,000 | capped at 1,000,000,000 |
| Apollo EN/JA | 2 | 3 | 0 | 22 | 286 | 144 |
| dense k7-7 | 1 | 0 | 0 | 25,000 | 25,000 | 1 |
| dense k7-7 minus one | 1 | 0 | 0 | 25,000 | 25,000 | 1 |
| dense k8-8 | 1 | 0 | 0 | 25,000 | 25,000 | 1 |
| symmetric ring-12 | 1 | 0 | 0 | 532 | 532 | 12 |
| four-block chain | 9 | 4 | 3 | 13 | 2,031,250 | capped at 1,000,000,000 |

The EN/JA rows were structurally identical for this probe, as expected from
their shared graph shape. Labels still affect explicit contract demand; the
probe does not treat that demand as final label placement authority.

## Evidence

### Local state-space reduction

The decomposition reduces the largest local search substantially on every
canonical input tested. Lighthouse, Titanic, and Apollo remained below 27,
11, and 22 states respectively for the largest local component, with no local
state-cap hit. This demonstrates that a local feasibility formulation can be
production-native and bounded at component scope.

That result is not sufficient for a complete algorithm. The product of local
search budgets is already 2,750,000 for Titanic, and the product of retained
local finalist families reaches the audit ceiling of 1,000,000,000. Independent
local boundedness therefore does not imply bounded global finalist generation.

### Boundary capacity and global bottlenecks

The shared-endpoint contract makes coupling observable rather than silently
discarding it. Lighthouse, Titanic, and the four-block control expose a
`global-bottleneck` endpoint under the tested relation-count/8-degree signal.
Apollo exposes multiple boundary contracts without the same bottleneck class.

A component boundary is not automatically a safe cut. A high-degree or
multiply shared endpoint still requires a global coordination decision about
angular demand and coarse label reservation.

### Dense, symmetric, and perturbed controls

The k7-7, k7-7-minus-one, and k8-8 controls remain one biconnected global
core. The one-relation perturbation therefore does not create an artificial
decomposition or make the dense state-cap failure disappear. Each reaches the
existing 25,000-state bound in all twelve local audit families.

The symmetric ring-12 control also remains one global core and reaches 532
states without a cap hit. This is bounded at this size, but it provides no
decomposition reduction and does not establish a scalable dense guarantee.

The probe therefore preserves a meaningful topology signal by refusing to
split cases in which global topology is structurally inseparable. It does not
yet prove that the residual global core can be handled by a small
browser-native portfolio.

## Product-authoritative relationship

The existing unchanged Product-authoritative discrete control was rerun for
the six canonical fixtures. It selected 9–12 candidates, used 10–13 full
Product presentation evaluations, retained zero Node overlap and zero routed
crossings in the reported canonical selections, and produced label hits or
near-hits that still require Product interpretation. Elapsed times were
approximately 327–734 ms in the diagnostic Node run.

Those results confirm that the existing authority path remains usable for
finalist validation. They do not validate the new decomposition as a Product
candidate: the new probe currently emits component contracts and boundedness
evidence, not merged coordinates for Product presentation. No Product default,
provider, routing rule, or endpoint-plan authority changed.

## Outcome classification

This checkpoint is closer to **Outcome B** than Outcome A.

Evidence for continuing a narrowly bounded single-placement investigation:

- local component searches are small and deterministic;
- explicit endpoint contracts preserve the visibility of cross-boundary
  capacity demand; and
- separable sparse regions can be reasoned about without immediately
  invoking a global 25,000-state search.

Evidence against adopting decomposition as the single-placement solution:

- dense and symmetric cores remain global;
- a one-edge dense perturbation remains globally coupled;
- high-degree shared endpoints remain global bottlenecks; and
- local finalist combinations can become unbounded even when every local
  solver is below its state cap.

The next architectural decision should compare the cost of a stronger global
boundary coordinator against the explicit Fast Initial Placement +
High-quality Auto Layout split. It should not raise the existing state cap,
globally relax sector/corridor constraints, move routing or labels into
Structural Placement, or advance Adaptive Cascade.

## Human Review status

**NOT READY FOR HUMAN REVIEW.** The new probe is architecture/feasibility
evidence only. It has no Actual Product visual smoke-check output and no new
candidate eligible for formal visual review. Existing historical Human Review
evidence is not inherited.

## Validation

Completed for this checkpoint:

- decomposition/capacity audit: PASS;
- decomposition determinism and input-preservation tests: PASS;
- dense global-core and state-cap test: PASS;
- existing Product-authoritative canonical audit: PASS.

The full LiaisonScape test completed `416 / 416 PASS`; lint and production
build also passed. E2R-SPEC `npm.cmd run validate` and both repository diff
checks passed. The test run emitted an existing WebSocket port-in-use message
from the test environment, but no test failed.

## Change and adoption status

The changes are limited to the pure research probe, its focused test, and its
reproducible audit output. No Product source, Dataset, persistence, dirty-state,
manual placement semantics, or provider selection changed.

Product default/adoption remains `HOLD`; production provider remains `NOT
ESTABLISHED`; Initial Layout Release blocker remains `OPEN`.

This is repository-local evidence and does not warrant a new workspace
knowledge Decision. A future cross-repository reuse candidate may be considered
only after independent confirmation of the contract shape and its boundedness.
