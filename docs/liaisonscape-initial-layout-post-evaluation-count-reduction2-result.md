# LiaisonScape Initial-Layout Post Evaluation-Count Reduction 2

Date: 2026-09-12

Status: ORDERING AND PRUNING ATTRIBUTED; ORDER-PRESERVING PRUNING STILL NOT QUALITY-SAFE; RELEASE BLOCKER REMAINS

## Scope and reference

This checkpoint continues from Evaluation-Count Reduction 1. The CR2
retained arm remains the authoritative reference:

```text
E2R_PRESENTATION_FINALIST_LIMIT=2
E2R_RELAXATION_STEP_MODE=omit-fine
E2R_PRESENTATION_GEOMETRY_CACHE=1
E2R_PRESENTATION_EXACT_CANDIDATE_REUSE=1
original sequential relaxation order
full presentation evaluation for every hard-feasible candidate
```

The comparison uses the six canonical fixture/locale cells: Lighthouse EN/JA,
Titanic EN/JA, and Apollo EN/JA. All arms use the same full presentation
pipeline and retain full presentation as the quality authority. No Product
provider, default path, persistence behavior, or routing/presentation
ownership changed.

The four diagnostic variants are:

| Arm | Order | Retention | Purpose |
| --- | --- | --- | --- |
| CR2 | original | full | authoritative reference |
| original-order audit | original | full | confirms the attribution seam does not alter CR2 |
| order-preserving prune | original | top-2 + risk guard | isolates pruning from dynamic reordering |
| dynamic-order audit | state-aware reranked | full | isolates ordering from pruning |
| ECR1 combined | state-aware reranked | top-2 + risk guard | reproduces the prior bounded prototype |

`cheap-ranking` is the original-order arm: the existing plan iteration order
is preserved while non-retained candidates are skipped. The dynamic arm groups
plans by sorted moved Node IDs and step, recalculates the cheap signal against
the current positions and current presentation metrics, and reranks after an
accepted move. The added `acceptedPlanIndexes` trace records the sequential
accepted trajectory without changing the search.

## Ordering versus pruning

The original-order full audit reproduced CR2 exactly in all six cells: selected
family, selected score, selected presentation digest, accepted trajectory, and
full evaluation count were unchanged. This validates the comparison boundary.

The dynamic-order full audit changed the accepted trajectory and selected
presentation digest in all six cells even though it full-validated every
state-feasible descriptor. Relative to CR2, its selected score changed by
approximately +3.7%, +0.0%, +5.1%, -0.9%, +0.8%, and +3.3% for Lighthouse EN,
Lighthouse JA, Titanic EN, Titanic JA, Apollo EN, and Apollo JA respectively.
It provided no stable count reduction or runtime gain. Therefore dynamic
reordering itself is a material search-behavior change and is not a safe
acceleration boundary.

The original-order prune arm retained the CR2 ordering but changed the
accepted trajectory and selected digest in all six cells. Its selected score
changed by approximately +4.1%, +0.1%, +12.2%, +5.1%, +1.2%, and +5.8%
respectively. This attributes the additional loss to pruning/retention rather
than to dynamic ordering. In particular, Titanic EN shows a large pruning
regression even when the original candidate order is preserved.

The ECR1 combined arm changes both order and retention. Its result is not a
new independent quality authority; it is retained only as the prior bounded
prototype for comparison.

## Evaluation-count and runtime comparison

The following sequential measurements report total full presentation
evaluations, with end-to-end runtime and Stage 2 runtime in milliseconds.

| Fixture / locale | CR2 full eval | Original-order prune | Dynamic-order audit | ECR1 combined | E2E CR2 -> prune -> ECR1 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 226 | 173 | 224 | 186 | 4,189 -> 3,398 -> 3,622 |
| Lighthouse JA | 232 | 172 | 231 | 175 | 4,289 -> 3,339 -> 3,411 |
| Titanic EN | 272 | 153 | 263 | 178 | 4,829 -> 2,932 -> 3,302 |
| Titanic JA | 279 | 178 | 281 | 175 | 4,317 -> 3,053 -> 3,028 |
| Apollo EN | 245 | 143 | 242 | 159 | 2,760 -> 1,867 -> 2,018 |
| Apollo JA | 237 | 154 | 238 | 170 | 2,708 -> 1,949 -> 2,146 |

The order-preserving prune reduced full evaluations by 23.5%--43.8% and the
combined ECR1 arm by 17.7%--35.1% relative to CR2. The order-only audit kept
approximately the same evaluation count, confirming that its selected-result
changes are ordering effects rather than pruning effects. The prune arm's
Stage 2 reductions were approximately 25.9%--51.9%; ECR1 reductions were
18.6%--43.5%. These are single sequential diagnostic samples, not release
guarantees.

## Full-improving and accepted-move recall

The audit arms full-validate their state-feasible descriptors. Top-2 recall is
the share of full-improving decisions whose cheap rank was within top-2. Since
audit accepts every full improvement, accepted-move recall is equal in these
measurements. This is the exact audit signal; skipped prototype candidates do
not have an exact result and are not counted as non-improving.

| Fixture / locale | Original-order top-2 improving / accepted recall | Dynamic-order top-2 improving / accepted recall |
| --- | ---: | ---: |
| Lighthouse EN | 16.7% / 16.7% | 76.5% / 76.5% |
| Lighthouse JA | 33.3% / 33.3% | 63.3% / 63.3% |
| Titanic EN | 36.8% / 36.8% | 73.5% / 73.5% |
| Titanic JA | 17.6% / 17.6% | 63.2% / 63.2% |
| Apollo EN | 61.5% / 61.5% | 75.0% / 75.0% |
| Apollo JA | 41.2% / 41.2% | 70.6% / 70.6% |

Dynamic reranking improves the cheap signal's state-local ranking recall, but
the resulting order changes the accepted state. Original-order pruning avoids
that order change but retains too few candidates at top-2. The two mechanisms
therefore have different failure modes and must not be evaluated as one
undifferentiated score.

## Selected output and presentation metrics

The selected result was the same family,
`post-structural-constrained-relaxation`, in every arm. The following compact
trace identifies the accepted trajectory and final presentation output; the
digest changes are evidence of search behavior change, not proof of visual
regression by themselves.

| Cell | CR2 trajectory / digest | Original-order prune trajectory / digest | Dynamic audit trajectory / digest | ECR1 trajectory / digest |
| --- | --- | --- | --- | --- |
| Lighthouse EN | `eeb6b891` / `f1d3f068` | `e9b19c08` / `98f773ce` | `60112b11` / `f58ec463` | `1820610c` / `212b6331` |
| Lighthouse JA | `855f42ca` / `b6c366b4` | `5bafa85d` / `5c980fe6` | `cad2b498` / `39d68111` | `268758a8` / `4ca93af0` |
| Titanic EN | `8d0d9376` / `081535ed` | `d11a941b` / `32d80c82` | `984225e6` / `25741dab` | `84a02510` / `59b468e6` |
| Titanic JA | `0755c857` / `48f41fae` | `c89294a7` / `62845d65` | `4a9e422d` / `a3212541` | `5f8a2c88` / `037f42cc` |
| Apollo EN | `59f4451e` / `09e41c28` | `9f618925` / `92933da7` | `3dc0f128` / `5f4b1314` | `457ebe85` / `5de93b51` |
| Apollo JA | `99b186b5` / `7454ef45` | `ae5bcb08` / `8b076e1a` | `c3876f1a` / `731c31fb` | `80493914` / `9697b5e8` |

All selected arms reported zero crossings, zero `labelRouteHits`, zero
`labelNear20`, zero `labelOverlap`, and zero Node-body overlap. Those hard
metrics do not establish human visual equivalence. The measured extent,
fitScale, route median, and route maximum also changed in the pruning arms.
For example, ECR1 changed Titanic EN from extent `744.4 x 570.9`, fitScale
`0.4851`, route median/max `297.3 / 622.6` to `808.8 x 583.6`, `0.4756`, and
`320.8 / 682.8`; this is a machine-visible spread/route signal requiring
human review if that arm is ever retained.

No Actual Product human visual acceptance was performed in this machine
attribution checkpoint. Any changed-output arm would require a new Actual
Product review before use. Known parallel Edge, long Relation-label,
Self-loop, and connector presentation behavior remains downstream and was
not repaired or reassigned to Initial Layout.

## Decision and next direction

```text
ordering effect                    = MATERIAL; dynamic full audit changes trajectory/output
pruning effect                     = MATERIAL; original-order prune changes trajectory/output
full evaluation reduction          = 23.5%--43.8% for original-order prune
dynamic state-local top-2 recall   = 63.2%--76.5% in full audit
original-order top-2 recall        = 16.7%--61.5% in full audit
selected result                    = CHANGED for every pruning/dynamic arm cell
machine quality                    = MIXED / DEGRADED versus CR2
human visual review                = REQUIRED for any changed-output continuation
next direction                     = ORDER-PRESERVING ADAPTIVE RETENTION
Initial Layout Release blocker     = STILL BLOCKED
Product default behavior           = UNCHANGED
Product default adoption           = HOLD
```

The evidence rejects dynamic reordering as a standalone acceleration
boundary: it changes the accepted search state without reducing evaluation
count. It also rejects fixed top-2 retention as a safe order-preserving gate:
it reduces count, but recall and selected quality are unstable, especially on
Titanic.

The next bounded hypothesis is therefore order-preserving adaptive retention:
retain the original sequential order, but use state-local uncertainty, rank
margin, and dependency risk to widen retention when top-2 is not reliable.
That experiment should be measured against a matched full audit and must keep
unknown skipped candidates separate from exact non-improvements. No such new
prototype is implemented in this checkpoint.

The roughly-two-second target remains a feasibility target, not a pass
criterion. The current measurements do not remove the Release blocker and do
not justify Product adoption.

## Preserved boundaries

- Product default initial placement and Product adoption are unchanged.
- `post-structural-relaxation-v1` remains diagnostic and is not connected to
  the normal Product open path.
- No Post equivalence, coarse equivalence, or visual acceptance was claimed.
- Stored, mixed, coordinate-less, Derived, dirty-state, Save Coordinates,
  same-payload reopen, and fallback semantics are unchanged.
- Routing, Relation-label, Node-label, Self-loop, connector, glyph, and CSS
  authority remain downstream presentation responsibilities.
- No known presentation defect was fixed, and no App.tsx refactor was done.
- Canonical fixtures, historical Fresh evidence, Fresh12 canonical Human
  Review, and governed lineage were not changed.
- No push, tag, release, deploy, or publication was performed.
