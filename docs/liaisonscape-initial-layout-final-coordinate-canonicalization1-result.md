# LiaisonScape Initial-Layout Final Coordinate Canonicalization 1

Date: 2026-09-11

Status: BOUNDARY CONFIRMED; ROUNDED PRESENTATION HUMAN GATE REMAINS REQUIRED

## Responsibility boundary

The existing integer-lattice probe and final coordinate canonicalization are
different responsibilities.

| Responsibility | Boundary established here |
| --- | --- |
| Initial Layout search | May use float coordinates and its own diagnostic search-time lattice probe |
| Candidate selection | Select the float candidate using the existing diagnostic search |
| Final coordinate canonicalization | After selection, before final acceptance; nearest-integer, once |
| Product presentation | Recompute authoritatively from the canonicalized coordinates |
| Dataset serialization | Deferred until the canonicalized result has passed the acceptance gate |
| User Save Coordinates | Existing explicit user-owned persistence path; unchanged |

This prevents integer coordinates from becoming a search-space constraint while
still allowing a future release candidate to use a stable integer payload. It
also keeps generated placement Derived until an explicit, accepted persistence
operation.

## Actual implementation

`generic-crossing-search.mjs` now exposes a diagnostic-only parameter:

```text
E2R_RELAXATION_FINAL_CANONICALIZATION=audit
E2R_RELAXATION_FINAL_CANONICALIZATION=round-once
```

The default is `off`. `audit` computes nearest-integer coordinates and runs one
authoritative full Product presentation evaluation for comparison without
changing the selected result. `round-once` returns the rounded result after
that one validation. Neither mode performs another relaxation round. Neither
mode writes a Dataset or connects to the normal Product open path.

The validation still uses the existing routing, Relation-label, Node-label,
Self-loop, connector, and viewport-derived presentation pipeline. The
canonicalization helper does not replace any of those authorities.

## Existing search-time lattice evidence

The earlier Stage 2 lattice probe remains separate evidence. Steps 1–4
collapsed only a small number of genuinely distinct candidate states and did
not produce a meaningful runtime reduction; step 4 changed selected geometry
and caused a material Linkscape route-quality regression. Integer arithmetic
was not the bottleneck. Therefore search-time quantization is not promoted as
the canonicalization mechanism.

## Bounded round-once audit

The current research baseline was `finalist-limit=2 + omit-fine`. For each
fixture/locale, the selected float positions were rounded with JavaScript
nearest-integer semantics and the resulting positions were passed once through
the unchanged full presentation evaluator.

| Fixture / locale | Changed Entities | Max displacement | Mean displacement | Route geometry changes | Relation-label changes | Node-label changes | Constrained score delta | Fit-scale delta |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 10 | 0.664 | 0.411 | 14 | 14 | 10 | +10.25 | -0.000277 |
| Lighthouse JA | 10 | 0.664 | 0.434 | 14 | 14 | 10 | +4.11 | +0.000009 |
| Titanic EN | 13 | 0.546 | 0.378 | 12 | 12 | 13 | -1.28 | -0.000063 |
| Titanic JA | 8 | 0.610 | 0.220 | 9 | 9 | 8 | -1.20 | -0.000139 |
| Apollo EN | 5 | 0.674 | 0.200 | 10 | 8 | 4 | +0.53 | +0.000538 |
| Apollo JA | 7 | 0.645 | 0.373 | 11 | 11 | 7 | +0.40 | -0.000007 |

The maximum displacement is below `sqrt(0.5)` as expected for independent
nearest-integer rounding. Extent changes were sub-unit in both axes. The
presentation changes are not evidence of a defect by themselves: the current
route and label pipeline is sequential and threshold-sensitive, so small
coordinate changes can change occupied-path, Relation-label, or Node-label
choices.

## Machine safety result

Across all six audited cells, no rounded-only increase occurred for:

- routed crossings;
- route/Node-label hits;
- label-near or label-overlap metrics; or
- Node-body overlap.

The `round-once` mode also returned integral selected coordinates and reused the
same full evaluator after rounding. This establishes a bounded machine
procedure, not a human visual pass. Exact route or label geometry changes are
not treated as automatic rejection because presentation quality is determined
by human-observable behavior, not byte equality.

## Human acceptance and serialization boundary

Actual Product human acceptance was not performed for the newly rounded
results. It remains required because every audited cell changed at least some
downstream route or label geometry. The required review is current versus the
float `omit-fine` result versus the rounded result on Lighthouse EN/JA,
Titanic EN/JA, and Apollo EN/JA as coverage permits, including cohesion,
spacing, label readability, crossing/crowding, viewport fit, and any
rounded-only regression.

The canonical sample JSON files were not rewritten. This is intentional:
`serializeDataset` preserves the numeric values it receives, and
`applyStoredCoordinates` writes explicit user-owned coordinates. There is no
evidence in this checkpoint to replace canonical coordinate-less samples or to
turn Derived initial placement into persisted Dataset content. Sample
serialization remains a separate release-candidate acceptance operation.

## Decision

```text
search-time integer lattice          = NOT REQUIRED / SEPARATE
final coordinate canonicalization    = AFTER SELECTION, BEFORE ACCEPTANCE
rounding rule                        = nearest integer, once
round-once machine safety            = CONFIRMED in six audit cells
rounded presentation equivalence    = NOT CLAIMED
human review requirement             = REQUIRED
sample Dataset serialization         = DEFERRED
user Save Coordinates semantics      = UNCHANGED
Initial Layout Release blocker      = STILL BLOCKED
Product default behavior             = UNCHANGED
Product default adoption             = HOLD
```

The evidence supports keeping final canonicalization as a release-candidate
boundary, but does not authorize changing Product default behavior or sample
payloads. A follow-up should perform the Actual Product visual gate on the
rounded results; it should not reintroduce search-time lattice quantization or
add a post-round relaxation loop. If that human gate finds threshold-sensitive
visual regressions, bounded integer-safe finalization or nearby integer
candidate selection should be studied as a separate hypothesis.

## Preserved boundaries

- Product default, Product adoption, and the normal Product initial-placement
  authority are unchanged.
- Stored/mixed/coordinate-less authority, Derived ownership, dirty-state, Save
  Coordinates, same-payload reopen, and fallback contracts are unchanged.
- Routing, Relation-label, Self-loop, connector, renderer, and viewport
  presentation authority remain downstream.
- Coarse remains parked; cheap-ranking and local-screen remain separate
  performance research tracks.
- No known presentation defect was fixed, and no App.tsx refactor was done.
- Canonical fixtures, historical Fresh evidence, Fresh12 canonical Human
  Review, and governed lineage were not changed.
- No push, tag, release, deploy, or publication was performed.
