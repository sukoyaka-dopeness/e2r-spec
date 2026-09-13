# LiaisonScape Initial Layout Frontier-12 Dense / Topology Retune 1

Date: 2026-09-13

## Decision

```text
dense G3 candidate loss boundary       = representative selection, not pool/frontier admission
topology-aware crossing-pair signal    = NOT QUALITY-SAFE; no dense gain, canonical Lighthouse drift
density-aware adaptive portfolio       = PROMISING bounded research candidate
candidate generator                    = no immediate change indicated
production-native provider             = NOT ESTABLISHED
checkpoint disposition                  = CONTINUE bounded research; no Product integration
new candidate human review              = REQUIRED before any Actual Product adoption consideration
Product default / adoption              = HOLD / UNCHANGED
Initial Layout Release blocker         = OPEN
```

This checkpoint is a diagnostic retune only. The prior Frontier-12 canonical
user evidence is not inherited by the new adaptive candidate, and the G3
Human ACCEPT remains unchanged.

## Loss-boundary audit

The dense reference was `synthetic:k7-7` (14 Nodes / 49 Relations). A matched
full audit evaluated all 44 structural candidates using the same authoritative
Product presentation scoring used by G3.

| Boundary | Evidence |
| --- | --- |
| Structural pool | G3-selected source fingerprint `ab9eadb27b53` was present in the 44-candidate pool. |
| Cheap Pareto frontier | The same candidate was present in the 22-candidate frontier. It was not dominated by the tested global features. |
| Representative portfolio | The candidate was absent from the 12 representatives. This is where the G3-quality source was lost. |
| Authoritative selection | Full G3 reference selected `ab9eadb27b53`, with 129 crossings, 8 Relation-label hits, 20 near-label observations, and 0 overlaps. |

Therefore, the primary dense problem is not that the candidate generator
cannot produce the G3-quality source, and not the current scalar Pareto
admission. The loss is in compressing a 22-member frontier into 12 global
feature representatives.

## Retune hypotheses

### Topology-aware representative selection

The first prototype extended the representative distance vector with a
binary crossing relation-pair signature, while retaining the existing
crossing/geometry features. This preserved original candidate generation and
full presentation authority.

On `synthetic:k7-7`, the topology-aware 12-arm still selected the same
Frontier-12 output: 13 full evaluations, approximately 3.7--4.0 seconds,
143 routed crossings, 6 Relation-label hits, 18 near-label observations, and
0 overlaps. It did not recover the G3 source.

On Lighthouse EN/JA, it changed the selected output and introduced
`labelNear20 = 3` where the ordinary Frontier-12 arm had 0. This is a
canonical quality drift, so the topology signature is not accepted as a
quality-safe portfolio rule.

### Density-aware adaptive portfolio

The bounded adaptive rule keeps the normal 12-representative portfolio when
the cheap frontier is small, but widens to the whole cheap frontier when its
size exceeds 12. This is not an unconditional K increase: the extra
authoritative calls are admitted only when the frontier itself is dense. For
dense cases with no cheap zero-crossing structural state, it also preserves
the actual G3 fallback semantics by retaining raw candidate geometry instead
of applying the viewport transform.

## Matched results

Hard metrics are shown as `routed crossings / Relation-label hits /
labelNear20 / overlap pairs`. Position fingerprints are final selected
position fingerprints for the respective arm.

### Canonical cells

The adaptive rule remains at 13 full calls on all six canonical cells because
their cheap frontier does not exceed the bounded 12 portfolio condition. It
therefore matched the existing Frontier-12 output and machine metrics in this
run:

| Cell | Full calls | Runtime | Selected fingerprint | Hard metrics |
| --- | ---: | ---: | --- | --- |
| Lighthouse EN | 13 | 0.54 s | `4cc6d8ae2c92` | 0 / 0 / 0 / 0 |
| Lighthouse JA | 13 | 0.54 s | `4cc6d8ae2c92` | 0 / 0 / 0 / 0 |
| Titanic EN | 13 | 0.53 s | `9a27b996f084` | 0 / 0 / 0 / 0 |
| Titanic JA | 13 | 0.54 s | `9a27b996f084` | 0 / 0 / 0 / 0 |
| Apollo EN | 13 | 0.53 s | `9e821a079aee` | 0 / 0 / 0 / 0 |
| Apollo JA | 13 | 0.51 s | `9e821a079aee` | 0 / 0 / 2 / 0 |

These results are machine evidence only. Titanic JA remains non-equivalent to
G3 as established in the earlier Frontier-12 review, and the prior positive
user evidence was not automatically applied to this new arm.

### Dense and additional bounded-density cases

| Case / arm | Nodes / Relations | Full calls | Runtime | Selected fingerprint | Hard metrics |
| --- | ---: | ---: | ---: | --- | --- |
| `synthetic:k7-7` G3 reference | 14 / 49 | 44 | 8.73 s | `ab9eadb27b53` | 129 / 8 / 20 / 0 |
| `synthetic:k7-7` Frontier-12 | 14 / 49 | 13 | 3.7--4.0 s | `bdd252c1b045` | 143 / 6 / 18 / 0 |
| `synthetic:k7-7` topology-12 | 14 / 49 | 13 | 3.7--4.0 s | `bdd252c1b045` | 143 / 6 / 18 / 0 |
| `synthetic:k7-7` adaptive | 14 / 49 | 22 | 6.6--6.8 s | `ab9eadb27b53` | 129 / 8 / 20 / 0 |
| `synthetic:k6-8` G3 reference | 14 / 48 | 44 | 8.46 s | `e57b55ea355d` | 123 / 4 / 15 / 0 |
| `synthetic:k6-8` Frontier-12 | 14 / 48 | 13 | 3.73 s | `4d72aad8815d` | 161 / 9 / 20 / 0 |
| `synthetic:k6-8` adaptive | 14 / 48 | 18 | 5.50 s | `e57b55ea355d` | 123 / 4 / 15 / 0 |
| `synthetic:k8-8` G3 reference | 16 / 64 | 44 | 13.94 s | `ad62aea419c0` | 229 / 16 / 32 / 0 |
| `synthetic:k8-8` Frontier-12 | 16 / 64 | 13 | 6.05 s | `2dab04d48d25` | 255 / 15 / 26 / 0 |
| `synthetic:k8-8` adaptive | 16 / 64 | 12 | 5.80 s | `ad62aea419c0` | 229 / 16 / 32 / 0 |

The adaptive rule retained the G3 selected output and hard metrics in all
three tested dense cases. Relative to G3, it reduced full authoritative calls
by 50% on `k7-7`, 59% on `k6-8`, and 73% on `k8-8`. Relative to Frontier-12,
it spends more calls on the dense `k7-7` and `k6-8` cases, but recovers the
G3-quality output; on `k8-8` it uses the same 12-call budget and happened to
recover the G3 output.

The `k7-7` adaptive runtime remains roughly 6.6--6.8 seconds, so this is a
quality-retention result, not evidence of the roughly two-second feasibility
target. The cheap planning budget remains 19,216 geometry evaluations; the
dominant new cost is the widened authoritative portfolio.

## Research direction and boundaries

`CONTINUE` is appropriate for bounded research of density-aware frontier
retention because the source candidate exists, the adaptive rule recovered it
across the tested dense cases, and canonical behavior stayed aligned with
Frontier-12. The next work should examine whether a less expensive density
signal or a bounded topology family can retain this behavior without paying
the full dense frontier cost. It should not simply reduce the bound again.

The topology-pair signature alone is `RETUNE/NOT ACCEPTED` because it did not
improve dense quality and caused a canonical Lighthouse drift. No immediate
candidate-generator replacement is justified by these cases; the observed
loss is portfolio admission/representative selection. A production-native
provider is still not established, and a new Actual Product human review is
required before treating the adaptive arm as an adoption candidate.

No Product default/adoption, canonical Dataset, coordinate authority,
round-once semantics, persistence, dirty-state, Save Coordinates behavior, or
presentation authority was changed. No production Worker architecture or
release work was performed.

## Validation

- LiaisonScape targeted locality/presentation tests: 18/18 PASS.
- LiaisonScape full test suite: 385/385 PASS.
- `npm run lint`: PASS.
- `npm run build`: PASS.
- LiaisonScape `git diff --check`: PASS.
- E2R-SPEC validation and diff check remain required after this record is
  added.
