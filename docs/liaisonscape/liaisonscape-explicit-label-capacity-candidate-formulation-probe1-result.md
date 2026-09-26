# LiaisonScape Explicit Label-Capacity Candidate Formulation Probe 1

Date: 2026-09-15

## Result

Classification: `B. LABEL-CAPACITY SIGNAL VALID / FORMULATION NEEDS REFINEMENT`.

One bounded formulation created useful capacity diversity that the established
candidate pool lacked. It materially improved both difficult fixtures in the
current Product presentation pipeline and did not visibly regress the three
controls. It did not create a Human Review candidate: dense output became too
small at fitted scale, and long-label ownership remained difficult.

## Formulation and boundary

The probe used component-local anisotropic expansion derived from actual
Product Node-label and Relation-label bounds plus internal Relation demand,
then deterministically repacked components. Three fixed intensities (`0.55`,
`0.8`, `1.0`) were tested. This is not global scaling: relative topology is
preserved within each connected component while unused inter-component space
is reclaimed.

The formulation only produced Node-geometry candidates. Current Product
routing, Parallel/Incident allocation, endpoint-plan, final Relation-label and
Node-label placement, Self-loop routing, viewport, and styling remained
authoritative. No production score, provider, Dataset, persistence, dirty
state, Save Coordinates, or manual authority changed.

## Evidence

Every option was evaluated through current Product presentation, the current
HQ research metric, and the fixed diagnostic visual-risk decomposition. The
comparison included current HQ selection, current-pool visual-risk best, and
all three new candidates.

| Fixture | Current -> probe overlaps | Foreign hits | Ambiguity | Fit | Median nearest distance | Post-fit distance |
|---|---:|---:|---:|---:|---:|---:|
| canonical 8/10 | 0 -> 0 | 0 -> 0 | 0 -> 0 | 0.885 -> 1.000 | 122.7 -> 146.8 | 108.6 -> 146.8 |
| dense 14/49 | 13 -> 1 | 46 -> 31 | 39 -> 33 | 0.481 -> 0.375 | 113.7 -> 176.5 | 54.7 -> 66.2 |
| Japanese label-heavy 10/20 | 4 -> 0 | 44 -> 23 | 15 -> 14 | 0.537 -> 0.527 | 116.9 -> 164.4 | 62.8 -> 86.7 |
| Parallel/Incident 10/18 | 0 -> 0 | 9 -> 0 | 9 -> 4 | 0.537 -> 0.623 | 121.5 -> 163.5 | 65.2 -> 101.9 |
| Self-loop 8/11 | 0 -> 0 | 0 -> 0 | 0 -> 0 | 0.885 -> 0.967 | 122.7 -> 159.3 | 108.6 -> 154.0 |

The human observation that long labels need more space is supported, but not
as a universal pair-distance formula. Japanese median Node-label width was
`151` and median Relation-label width `220`; nearest-distance/Node-label-width
rose from `0.77` to only `1.09`. Relation labels occupy routes rather than Node
centers, so route demand, component extent, ownership corridors, and fitted
screen scale must accompany center spacing.

The dense probe beats both the current selection and current-pool visual-risk
best on overlap and foreign-route pressure, but its `0.375` fit exposes a new
viewport/readability tradeoff. The Japanese probe removes measured overlap and
roughly halves foreign-route pressure, yet residual association remains. Thus
explicit capacity belongs in candidate generation, while the remaining
readability residual is coupled to Product label and route presentation.

## Actual Product smoke

The exact candidates were installed only through the development-only,
operation-local preview and inspected in the real App renderer. Reset-to-fit
showed canonical at 100%, dense at 38%, Japanese label-heavy at 53%,
Parallel/Incident at 62%, and Self-loop at 97%.

Dense and Japanese output were visibly better than the prior/current options,
but neither was acceptance quality. Dense labels were too small and ownership
remained difficult; Japanese long Relation labels remained crowded and hard to
associate. Canonical, Parallel/Incident, and Self-loop controls showed no
obvious new breakage. This was smoke, not formal acceptance, and the Self-loop
observation does not replace its independent track.

## Decision and next position

The missing label-capacity signal is real and should survive into a refined
bounded candidate formulation. The tested expansion/repacking rule should not
be adopted as-is. Next work should jointly bound component extent/aspect,
post-fit text scale, and corridor/ownership demand rather than increase
expansion intensity or begin another broad solver sweep.

- label-capacity signal: `VALID`;
- tested formulation: `NEEDS REFINEMENT`;
- difficult-case Product quality: `IMPROVED / NOT ACCEPTABLE`;
- control smoke: `NO OBVIOUS REGRESSION`;
- quality solver: `HOLD / NOT ESTABLISHED`;
- production provider: `NOT ESTABLISHED`;
- Product integration/default: `HOLD`;
- Human Review: `NOT READY`;
- Initial Layout Release blocker: `OPEN`.

No workspace knowledge candidate is promoted. The evidence is still tied to
one bounded synthetic envelope and the current LiaisonScape Product renderer.

`CHECKPOINT COMPLETE - EXPLICIT LABEL CAPACITY CREATES USEFUL CANDIDATE
DIVERSITY, BUT EXTENT AND OWNERSHIP MUST BE BOUNDED TO REACH REVIEW QUALITY`
