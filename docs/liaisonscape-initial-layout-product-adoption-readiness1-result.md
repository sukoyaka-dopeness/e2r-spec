# LiaisonScape Initial-Layout Product Adoption Readiness 1

Date: 2026-09-11

Status: HOLD — readiness gates not all satisfied

## Scope

This checkpoint evaluates whether `coarse-objective-prototype-v1` is ready
for a separate Product-default adoption decision. It does not change the
Product default, stored-coordinate authority, routing/presentation, or
public samples. No adoption was performed.

The existing Actual Product opt-in human acceptance remains valid: Lighthouse,
Titanic EN/JA, Apollo EN/JA fallback, interaction, and same-payload Save /
reopen evidence were observed through the normal Product path. This record
adds arbitrary-topology and larger-input evidence; it does not replace human
visual observation with machine metrics.

## Generality and bounded-runtime probe

The new LiaisonScape readiness test exercised sparse, chain, hub, parallel,
disconnected, dense, and self-loop topologies. Inputs were generated from
generic Entity/Relation data and were not copied from a fixture.

Representative single-run results with a 100 ms budget and two iterations:

| Topology | Entities | Relations | Result | Time |
| --- | ---: | ---: | --- | ---: |
| sparse | 12 | 5 | completed coarse prototype | 16.54 ms |
| chain | 30 | 29 | current whole-result fallback, budget-exceeded | 100.71 ms |
| hub | 30 | 29 | completed coarse prototype | 69.73 ms |
| parallel | 16 | 12 | completed coarse prototype | 15.87 ms |
| disconnected | 32 | 28 | current whole-result fallback, budget-exceeded | 100.20 ms |
| dense | 36 | 216 | current whole-result fallback, unsafe-candidate | 9.17 ms |

A 1 ms dense-budget probe also returned a whole-result current fallback. No
partial coarse candidate was exposed, and position maps were complete and
finite. However, the dense fallback output did not satisfy the provider's
Node-body clearance check in the stress assertion. This is a safety-readiness
failure, not a routing or Relation-label presentation result.

The same 100 ms input can also cross the wall-clock boundary during candidate
evaluation, so prototype-versus-fallback classification is not yet a stable
adoption-quality result for larger graphs. Existing provider behavior remains
bounded and fails closed, but the evidence is insufficient to claim a robust
large/dense default.

Self-loop relations were isolated from the ordinary coarse objective: adding
self-loops produced the same ordinary placement as the equivalent graph
without them. Their angle/radius and labels remain presentation authority.

## Authority and Product safety

- Coordinate-less input is the only coarse opt-in target.
- Fully stored Coordinates remain stored authority.
- Mixed Coordinates retain the existing Product completion semantics.
- Coarse output is `Derived`; opening alone does not dirty or persist the
  Dataset.
- Drag then Save Coordinates remains the explicit persistence path.
- The saved Dataset payload was previously reopened through the normal Product
  open path; stored Coordinates remained authoritative and coarse did not
  overwrite them.
- Product-visible Entity Relation projection is shared by candidate and
  fallback; routing, connector, Relation-label, and viewport presentation
  remain downstream Product responsibilities.
- EN/JA acceptance and Apollo whole-result fallback were observed in Actual
  Product, with no coarse-specific visual defect identified. This does not
  establish equivalence with Post or prove absence across arbitrary data.

Known parallel-edge/long-label, Self-loop-angle, and connector presentation
issues remain separate tracks and were not fixed or credited to Initial Layout.

## Decision

```text
arbitrary topology completeness/finite output = SUPPORTED
bounded whole-result fallback              = SUPPORTED
large/dense clearance safety               = NOT ESTABLISHED; stress failure observed
large/dense runtime classification         = NOT STABLE ENOUGH FOR ADOPTION
Actual Product opt-in human acceptance     = CLOSED / PASS (bounded tested scope)
Product default adoption readiness         = HOLD
Product default behavior                   = UNCHANGED
Post equivalence                           = NOT CLAIMED
```

The next valid step is a separately scoped provider-hardening checkpoint for
large/dense fallback safety and budget determinism, followed by a new explicit
adoption decision. This checkpoint does not authorize either change.

Historical Fresh evidence, canonical Human Review, and governed Fresh lineage
are unchanged. No push, release, deploy, or publication was performed.
