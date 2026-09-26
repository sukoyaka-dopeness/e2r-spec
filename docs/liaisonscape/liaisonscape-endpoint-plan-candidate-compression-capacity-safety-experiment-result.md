# LiaisonScape Endpoint Plan Candidate Compression + Capacity-Negotiated Placement Safety Experiment

Date: 2026-09-13

## Decision

**RETUNE / NOT READY FOR HUMAN REVIEW.** A geometry-family compression probe
reduces per-group candidate generation while preserving canonical feasibility
and all tested capacity-shortage outcomes. It does not yet preserve selected
plan identity across all synthetic topology controls, so it is not
output-equivalent and cannot inherit existing Human evidence.

The capacity-negotiated placement boundary is promising: it responds only to a
structured shortage request and makes Titanic EN feasible in machine geometry
without the rejected fixed-angle rule. Viewport, unrelated corridors,
interaction lifecycle, and Human readability remain unaccepted.

Product default/adoption remains `HOLD`, production provider remains `NOT
ESTABLISHED`, and the Initial Layout Release blocker remains `OPEN`.

## Candidate compression

The old gap x center x ordinary-policy portfolio remains the matched oracle.
The bounded compressed family retains the generator's meaningful gap anchors
`40, 56, 72, 88, 176`, five symmetric center choices `-96, -64, 0, 64, 96`,
and both ordinary policies. It is generated before route/presentation work;
the old portfolio is used only for audit comparison, never as Product authority.

This avoids selecting candidates by their already-known hard result. The audit
records both feasible-plan retention and selected-plan identity, because a
feasible but different selected output is a new candidate.

## Matched results

| Cell / control | Oracle candidates | Compressed candidates | Feasible/shortage retained | Selected plan equal | Direct candidate-generation time |
| --- | ---: | ---: | --- | --- | ---: |
| Lighthouse EN | 70 | 40 | feasible | yes | ~285 -> 166 ms |
| Lighthouse JA | 56 | 40 | feasible | yes | ~212 -> 158 ms |
| Titanic EN | 70 | 50 | shortage | n/a | ~371 -> 262 ms |
| Titanic JA | 70 | 40 | feasible | yes | ~295 -> 185 ms |
| Apollo EN/JA | 0 | 0 | empty control | yes | unchanged |
| 3-parallel long/short | 56 | 40 | feasible | yes | ~39 -> 33 ms |
| mixed reverse | 56 | 40 | feasible | yes | ~48 -> 38 ms |
| 2 short/short | 56 | 40 | feasible | **no** | ~26 -> 22 ms |
| 2 long/short | 70 | 50 | feasible | **no** | ~39 -> 29 ms |
| 2 long/long | 70 | 50 | feasible | yes | ~38 -> 29 ms |
| multiple ordinary | 56 | 40 | feasible | **no** | ~62 -> 45 ms |
| shared two bundles | 126 | 90 | feasible | yes | ~90 -> 71 ms |
| crowded two bundles | 126 | 80 | shortage | yes | ~115 -> 79 ms |

The compressed arm retained a feasible candidate for every feasible oracle
group and preserved the routing-side Titanic EN shortage. It also preserved
the shared multi-bundle plan and its no-churn result. The selected output drift
in short/short, long/short, and multiple-ordinary controls is a quality-review
boundary, not a failure hidden by the feasibility gate. The first smaller
family (about 20-30 candidates) was rejected because it dropped feasible
3-parallel and reverse candidates; the retained family is deliberately more
conservative.

For compressed canonical geometry, Lighthouse EN/JA stayed at lane 20.4,
label 8.5, ownership 40.4, outer 7.7, bias 0. Titanic JA stayed at lane 23.7,
label 36.9, ownership 29.5, outer 16.4, bias 0. Titanic EN remained a
shortage with the same fallback-only diagnostic metrics; no unsafe route was
promoted.

The endpoint-plan search remained bounded at 512 states and typically explored
2 states for one group and 6 for the shared two-bundle case. One combined
authoritative presentation materialization was needed for the reported
successful plans. Audit wall time includes the oracle run for retention, so it
is not a runtime claim for the compressed provider. The direct generation
measurements show the actual potential reduction; the endpoint-plan overhead
was not the dominant cost.

## Capacity-negotiated placement safety

Titanic EN's routing request was reused as a generic correction input, not as a
fixture rule:

- required half-sector: about 26.4 degrees;
- available half-sector: about 14.2 degrees;
- ordinary conflicts: 4;
- correction: move only incident neighbors inside the requested sector,
  preserving radial distance;
- endpoint plan after correction: feasible;
- minimum screen-space Node separation: 68.3 -> 64.4 px;
- combined crossings: 0;
- ordinary route changes: 4.

No correction was applied to Lighthouse, because it returned no shortage. The
counterfactual is therefore request-driven rather than a fixed angular relief.
It has not been accepted: graph extent, fit scale, unrelated corridors,
selection/drag continuity, cancellation, and Actual Product visual readability
need a separate review. The request schema is generic and includes endpoint
IDs, required/available sector, shortage, bundle width, conflicts, and label,
outer, obstacle, and port pressure.

## Risks and disposition

The contracts are browser-native pure TypeScript and deterministic. Remaining
risks are candidate-family coverage, multi-bundle growth, combined evaluation
cost, and lifecycle ownership: a request must not trigger placement mutation
during drag, must be cancellable, and must not interfere with manual routes or
dirty/persistence state.

No Human Review handoff is prepared. The compressed candidate changes selected
outputs in several synthetic controls, while the Titanic placement correction
is a new unreviewed candidate. Next work should retune compression around
geometry-derived label/port demand or retain a conservative fallback family,
then separately test request-driven placement with full viewport and lifecycle
guards. Product-facing integration remains premature.
