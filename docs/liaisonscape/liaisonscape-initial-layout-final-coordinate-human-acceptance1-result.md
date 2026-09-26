# LiaisonScape Initial-Layout True Final Coordinate Human Acceptance

Date: 2026-09-11

Status: ROUNDED PRODUCT VISUAL GATE CLOSED; RELEASE CANDIDATE NOT ESTABLISHED

## Comparison boundary

This checkpoint reviewed the true rounded winner after generic search final
selection in the Actual Product renderer. The reviewed arms were:

1. `current`, the Product coordinate-less baseline.
2. `post-structural-relaxation-omit-fine-v1`, the bounded
   `finalist-limit=2 + omit-fine` float winner.
3. `post-structural-relaxation-omit-fine-rounded-final-v1`, the same float
   winner after one nearest-integer canonicalization.

The full `post-structural-relaxation-v1` comparison is not rerun here. Its
human preference over current is already recorded in the preceding Post
acceptance checkpoints. This gate tests whether the final rounded output
retains the accelerated Post direction without a rounded-only visual defect.

The existing development-only `geometry-inspection1` seam clones the
coordinate-less Dataset in memory, replaces only the stored coordinate values
for the selected diagnostic candidate, and passes that clone through the
ordinary `App` renderer. Routing, Relation-label placement, self-loop and
connector presentation, viewport controls, and text rendering therefore stay
under their normal Product authorities. The new rounded candidate derives
`Math.round` positions at runtime from the existing float diagnostic map; no
fixture-specific rounded coordinate copy or persisted Dataset was introduced.

## Human visual observations

### Lighthouse EN

| Arm | Observation |
| --- | --- |
| current | The graph was visibly compact around the central relation area. Several routes and labels competed for the same corridor and scanability was weaker. |
| float accelerated Post | The graph was more circular and balanced, with clearer separation and more readable routes and labels. |
| true rounded winner | Visually equivalent at the observed Product scale to the float arm: the same cohesion, spacing, readable labels, and viewport fit direction. No rounded-only crossing, overlap, clipping, or excessive-spread defect was observed. |

The previously measured Lighthouse EN machine score counter-signal was not a
human-observed rounded regression. The rounded result remained in the same
visually preferred direction over current.

### Lighthouse JA

| Arm | Observation |
| --- | --- |
| current | Japanese labels remained readable, but the central arrangement was crowded and relation scanning was harder. |
| float accelerated Post | The graph was more distributed and balanced, with readable Japanese labels and routes. |
| true rounded winner | Visually indistinguishable at normal inspection from the float arm. No rounded-only overlap, clipping, crossing, label-readability, or viewport defect was observed. |

### Titanic EN

| Arm | Observation |
| --- | --- |
| current | The RMS Titanic hub was dense; multiple Edges and Relation labels converged in the central area. |
| float accelerated Post | Surrounding Entities were more separated and the graph was easier to scan, while the known parallel-Edge and long-Relation-label behavior remained visible. |
| true rounded winner | Retained the float arm's distributed arrangement and readability at the observed fit. No rounded-only crowding, clipping, overlap, or excessive-spread defect was observed. |

The parallel-Edge/long-Relation-label behavior is shared downstream
presentation evidence and is not attributed to final coordinate rounding.

### Titanic JA

| Arm | Observation |
| --- | --- |
| current | The central hub was compact and some Japanese relation paths required more visual scanning. |
| float accelerated Post | The graph was more distributed with improved hub separation and readable Japanese labels. |
| true rounded winner | Visually matched the float direction at normal inspection. No rounded-only label, route, Node overlap, clipping, or viewport defect was observed. |

### Apollo EN

| Arm | Observation |
| --- | --- |
| current | This sparse fallback graph was already readable, with a vertically distributed arrangement and no severe crowding. |
| float accelerated Post | The observed Product surface was effectively neutral versus current for this control fixture; no new crowding or readability problem appeared. |
| true rounded winner | The same sparse, readable Product graph remained visible. No rounded-only visual regression was observed. |

### Apollo JA

Apollo JA used the existing whole-result fallback: the Product shell was in
Japanese while the Apollo Dataset content remained the English fallback. This
is the expected fallback behavior, not a new rounded-candidate fixture.

| Arm | Observation |
| --- | --- |
| current | The fallback graph remained sparse and readable with stable viewport fit. |
| float accelerated Post | The observed graph was effectively neutral versus current for this sparse control. |
| true rounded winner | The Japanese Product shell and fallback Dataset graph remained stable and readable. No rounded-only defect or locale-specific rounding regression was observed. |

## Presentation and interaction responsibility

The human review used the same Product canvas and routing/presentation path for
all three arms. Node cohesion, spacing, viewport fit, Node-label readability,
Relation-label readability, route crossings, and crowding were judged from the
rendered surface; machine geometry values were not treated as a substitute for
that judgment.

Self-loop, connector, and long-label behavior remained downstream. The known
self-loop angle tendency, connector/layering questions, and Titanic
parallel-Edge/long-label behavior were not fixed or reclassified. No
rounded-only worsening of those presentation behaviors was observed. The
preceding Product acceptance evidence covers the broader selection, drag,
locale, viewport, and Save Coordinates interaction path; this checkpoint did
not repeat an exhaustive drag/save test in every arm.

The comparison seam is diagnostic-only. It keeps Save Coordinates disabled for
the in-memory clone, does not set dirty-state, and does not serialize or alter
canonical fixtures. The rounded candidate is not fed back into search,
candidate sorting, relaxation, or Product default authority.

## Decision

```text
true rounded winner visual quality       = ACCEPTABLE
float Post visual direction retained     = YES for Lighthouse/Titanic; NEUTRAL/ACCEPTABLE for Apollo fallback
rounded-only visual regression            = NOT OBSERVED
round-once finalization                   = ACCEPT for separate serialization checkpoint
Actual Product rounded visual gate        = CLOSED / PASS for six reviewed cells
Actual Product opt-in acceptance         = CLOSED / PASS for the reviewed acceptance scope
canonical sample serialization            = READY FOR A SEPARATE CHECKPOINT; NOT PERFORMED
Initial Layout Release blocker            = STILL BLOCKED
Product default behavior                  = UNCHANGED
Product default adoption                  = HOLD
```

The result supports carrying the true final-selection rounded output into a
separate sample-serialization review. It does not establish Post equivalence,
release readiness, or permission to connect any Post candidate to the normal
Product default. Runtime remains a separate Release blocker.

## Preserved boundaries

- Rounding occurs once after the generic search has selected its float winner;
  no search-time lattice, reranking, or re-relaxation was added.
- No routing, Relation-label, self-loop, connector, glyph, or CSS authority was
  moved into Initial Layout, and no known presentation defect was fixed.
- Stored/mixed/coordinate-less authority, Derived ownership, dirty-state, Save
  Coordinates, fallback, and same-payload reopen semantics are unchanged.
- Coarse remains parked and is not restored as a quality authority.
- Product default, canonical fixtures, historical Fresh evidence, Fresh12
  canonical Human Review, and governed lineage were not changed.
- No App.tsx refactor, push, tag, release, deploy, or publication was done.
