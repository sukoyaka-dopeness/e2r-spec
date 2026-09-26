# LiaisonScape Parallel Obstacle Side-Collapse Audit

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-PARALLEL-OBSTACLE-SIDE-COLLAPSE-AUDIT1`
- Scope: audit / diagnostic only

## Exact result

`CAUSALITY CONFIRMED - OBSTACLE ROUTING INDEPENDENTLY COLLAPSES PARALLEL SIDES`

The reverse-endpoint normalization remains closed and not regressed. With
the post-fix canonical sign supplied by `App.tsx`, clean same-direction and
reverse-direction pairs both begin on opposite physical sides. A one-sided
obstacle can then cause both Relations to select the same escape side.

This is caused by per-Relation candidate scoring, not by the base parallel
slot assignment. The current scoring minimizes node-overlap pressure, edge
overlap, label pressure, and a small absolute-offset cost. It has no
parallel-group side-distribution constraint or side-switch penalty.

## Source and baseline

LiaisonScape was at `96da8dd` (`fix: normalize reverse parallel edge sides`),
three commits ahead of its upstream, with no runtime worktree changes. The
relevant live pipeline is `App.tsx`'s ordered `occupiedPaths` loop and
`viewport.ts`'s `routeGraphEdge`: canonical base sign, offset candidates,
node-influence scoring, occupied-path scoring, label pressure, and final
selection. Manual offsets return before candidate scoring; self-loops use a
separate geometry selector.

The e2r-spec baseline is the accepted reverse-endpoint fix document and its
synthetic counterfactual. No hypothesis or knowledge-base entry was promoted.

## Frozen synthetic geometry

`A=(0,0)`, `B=(400,0)`, with the production node-influence radius and route
candidate generation. Positive means the control point is above the A->B
canonical centerline; negative means below it.

| Case | No obstacle | Obstacle `C=(200,40)` | Finding |
|---|---|---|---|
| S2: A->B, A->B | `+40`, `-40` | `-52`, `-40` | both choose negative escape side |
| R2: A->B, B->A | `+40`, `-40` | `-52`, `-40` | same collapse after normalization |
| M3: A->B, A->B, B->A | `+40`, `-40`, `-64` | `-52`, `-40`, `-76` | all selected negative in this geometry |

The mirrored obstacle `C=(200,-40)` produced the mirrored collapse: `+40`,
`+52` for both pair members. A center obstacle `C=(200,0)` produced large
opposite detours (`+112`, `-112`), showing that side preservation can remain
possible when both sides are equally pressured. A distant obstacle
`C=(200,100)` did not change the clean pair.

## Stage and candidate evidence

The first side change occurs at Stage 4, selected obstacle route. Stage 1
base normalization is still opposite-sided. For S2 with `C=(200,40)`, the
positive base candidate `+40` is obstructed and the selected candidate is
`-52`; the second Relation keeps `-40`. A positive side-preserving candidate
exists at larger offsets, but it loses on the current score because the
negative `-52` route clears the obstacle with less detour. Therefore this is
Mode B (`VALID SAME-SIDE-PRESERVING CANDIDATE EXISTS BUT LOSES SCORE`) for
the tested geometry, with Mode C as the resulting group-level symptom.

The candidate loop is shared by both directions but evaluates each Relation
independently. `occupiedPaths` is populated in the relation iteration order;
it can add an edge-overlap penalty to later routes, but the obstacle-only
collapse reproduces without occupied paths. Relation-ID/order influence was
not the primary cause and requires a separate permutation matrix for any
stronger claim.

## Isolation and causal answers

- Q1: YES — obstacle-only collapse reproduces.
- Q2: YES — same-direction S2 collapses with a one-sided obstacle.
- Q3: YES — post-fix reverse-direction R2 also collapses.
- Q4: CASE-DEPENDENT — legal same-side-preserving candidates exist in the
  tested geometry, but may be farther or otherwise score worse.
- Q5: YES — current scoring selects the opposite-side escape candidate.
- Q6: PARTIALLY — individual scoring lacks group awareness; group-level
  causality is confirmed as an architecture gap, not a global rewrite proof.
- Q7: NO — obstacle-only reproduces without `occupiedPaths`.
- Q8: NOT PROVEN — order is an input to occupied-path scoring, but is not
  required for the observed obstacle-only collapse.
- Q9: PRODUCT TRADE-OFF — side preference may help when clearance remains
  valid, but obstacle clearance must win when a side switch is necessary.

Root cause classification: `MULTIPLE MECHANISMS`, with primary evidence for
`OBSTACLE SCORE PREFERS UNNECESSARY SIDE SWITCH` and a confirmed
`PARALLEL GROUP CONTEXT LOST DURING OBSTACLE ROUTING` symptom. The geometry
can still make a side switch necessary in other cases.

## Scope boundary and next candidate

The smallest justified follow-up is a diagnostic-backed
`PARALLEL SIDE-PRESERVATION PREFERENCE IN OBSTACLE SCORING`, limited to
otherwise valid candidates and bounded by obstacle, foreign-node, crossing,
label, route-length, and pair-separation measurements. A group-aware
constraint or occupied-path/order change is not justified by this audit
alone.

No runtime files, tests, samples, CSS, Coordinate/Presentation payloads,
schemas, Core, Extensions, Validator, or release metadata were changed.
Self-loop, foreign-node, label, ordinary crossing, and NarrativeLine
Display-Order work remain separate.

## Verification

- LiaisonScape: 278/278 tests passed.
- LiaisonScape lint and build passed.
- `git diff --check` passed.
- Temporary diagnostics were command-line only; no repository artifact was
  left behind.
- Protected dirty `sessions/E2R-Session-0052.md` was preserved.
- No push, tag, release, deploy, or publication was performed.
