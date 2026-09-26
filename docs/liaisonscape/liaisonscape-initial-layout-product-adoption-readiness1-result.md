# LiaisonScape Initial-Layout Product Adoption Readiness 1

Date: 2026-09-11

Status: READY FOR DECISION — fallback policy established; adoption not performed

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
finite. The current Product fallback does not independently guarantee the
coarse candidate's Node-body clearance for this dense input. This is an
observed quality limitation of the preserved current placement, not evidence
that a partial coarse result escaped the provider and not a routing or
Relation-label presentation result.

The structural result is now independent of per-candidate wall-clock jitter.
Large inputs may still take the emergency fallback at an iteration boundary;
that is intentionally a runtime safety outcome rather than a quality claim.
Existing provider behavior remains bounded and fails closed, but the evidence
is insufficient to claim a robust large/dense default.

## Budget contract hardening

The coarse evaluator was adjusted so ordinary candidate acceptance is governed
by the deterministic structural bound already represented by
`maxIterations × Entity count × 8 directions`. The wall-clock budget is now
checked before and after an iteration only, as an emergency fail-safe. A
timeout returns the current Product placement as one whole fallback result;
the partial coarse candidate is never exposed. This keeps normal geometry and
quality classification independent of per-candidate scheduling jitter while
retaining a runtime escape hatch.

The hardening does not remove the wall-clock guard, change the current Product
solver, or make fallback geometry claim coarse clearance. The 100 ms value is
still a runtime fail-safe input, not a golden timing value.

## Fallback geometry policy

The policy decision for this checkpoint is **ACCEPT CURRENT SEMANTICS**:
fallback is a non-regression boundary, not a second coarse quality target. On
unsafe-candidate or emergency-timeout, the provider must return exactly the
current Product placement for the same Product-visible graph, with complete
finite Derived positions and no partial coarse candidate. The large/dense test
now compares the fallback output directly with `solveAutoLayout()` and fixes
this authority boundary without changing the solver.

The current solver's dense geometry limitation is therefore recorded as a
separate Product placement quality issue. It is not silently attributed to
coarse Initial Layout and is not repaired in this checkpoint. If a future
Product decision requires a minimum clearance guarantee even on fallback, that
is a separately scoped placement redesign and must not be introduced as a
side effect of coarse adoption.

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
budget contract redesign                   = PASS for coarse candidate evaluation
deterministic work bound                   = ESTABLISHED
deterministic quality/result classification = ESTABLISHED absent emergency abort
wall-clock fail-safe                       = ESTABLISHED at iteration boundaries
candidate clearance safety                 = SUPPORTED for completed candidates
fallback geometric clearance               = NOT GUARANTEED by current Product solver
large/dense runtime classification         = BOUNDED; fallback follows current Product semantics
fallback geometry policy                   = ACCEPT CURRENT SEMANTICS / NON-REGRESSION
Actual Product opt-in human acceptance     = CLOSED / PASS (bounded tested scope)
Product default adoption readiness         = READY FOR DECISION
Product default behavior                   = UNCHANGED
Post equivalence                           = NOT CLAIMED
```

The next valid step is a separate explicit Product adoption decision. This
checkpoint does not authorize changing the Product default. Any improvement to
fallback geometry remains a separate placement redesign decision.

Historical Fresh evidence, canonical Human Review, and governed Fresh lineage
are unchanged. No push, release, deploy, or publication was performed.
