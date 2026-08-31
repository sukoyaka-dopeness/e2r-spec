# LiaisonScape Automatic-Route Hard-Label Corridor Boundary Audit

Date: 2026-09-01

Task: `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-HARD-LABEL-CORRIDOR-BOUNDARY-AUDIT1`

Result: **MIXED — hard labels block the near-center side, but other signals
still determine the final large-curve winner.**

## Scope and safety boundary

This was a read-only hard-label corridor audit in the detached worktree
`C:/Users/extra/E2R/e2r-liaison-scape-hard-label-corridor`, based on
LiaisonScape `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The temporary owner
trace, hard-owner ablation hook, and manual-offset micro-probe were removed
before cleanup.

No production runtime, routing or scoring policy, candidate set, label
placement, sample, persisted coordinate, parallel policy, self-loop policy,
initial placement, final-label feedback behavior, or interactive preview was
changed. The dirty JA and EN Lighthouse samples were read-only inputs. An
omitted-owner winner below is a diagnostic result and is never called
Production-safe.

The user's manual observation is preserved as context: the existing
`Experimental — Final-label feedback` presentation can look clean when the
initial Node placement is favorable, as in the supplied image. This static
audit does not alter or validate that feedback mode and does not prove that
final-label feedback relieves the current provisional-label corridor.

## Canonical App-pipeline replay

The temporary harness followed the App pipeline: fixed and self routes first,
canonical ordinary Relation order, predecessor `occupiedPaths`, provisional
Node-label rectangles, and the live `routeGraphEdge` candidate generation.
Owner names were associated with the provisional rectangles in the same
`graph.nodes` order that App uses when passing the Node-label array. The live
route constructor and live hard-distance helper were used; route geometry was
not reconstructed in the harness.

## Baseline gate

The JA replay reproduced the required current winners:

| Relation | Expected/current offset |
|---|---:|
| `clara-thomas-mentors` | -52 |
| `clara-thomas-supervises` | -76 |
| `sofia-archive` | -156 |
| `authority-lighthouse` | -24 |

The required `mentors` candidates `40`, `52`, and historical `64` were also
observed with the expected owner identities. Baseline gate: **PASS**.

## Live hard-label semantics

The current source uses `minimumPathToLabelRectDistance(samples, rect)` for
route-to-Node-label distance. It checks the 41 sampled points of the live
quadratic/linear route against an axis-aligned label rectangle. A distance of
zero means that at least one sampled point is inside the rectangle. This is a
sampled hard-collision predicate, not an exact continuous segment/rectangle
intersection oracle.

For each label rectangle, current route arbitration adds:

- `100000` when the sampled distance is zero;
- `(20 - distance) ** 2 * 20` when the positive distance is below `20`;
- zero otherwise.

All label contributions are summed. The current score also contains Node
pressure, occupied-path pressure, and `abs(offset) * 0.01`. The current
existing-safe path requires zero Node pressure, no occupied overlap, and zero
total label pressure. The hard-safe diagnostic used here is separate: zero
Node pressure, no occupied overlap, and no hard owner.

The route helper itself receives rectangles without owner metadata. The owner
identity in this audit is therefore an App-pipeline index association, not a
new runtime ownership contract. The hard-distance helper has no padding or
clearance expansion beyond the rectangle supplied by `placeNodeLabel`.

## Primary JA owner rectangles

The canonical provisional `mentors` pass used these relevant Node-label
rectangles:

| Owner | x | y | width | height |
|---|---:|---:|---:|---:|
| `clara` | 178.843 | 101.891 | 112 | 48 |
| `lighthouse` | 228.519 | 105.613 | 118.5 | 48 |
| `archive` | 151.047 | 60.314 | 115 | 48 |

These values are diagnostic geometry only and are not persisted.

## Full JA mentors candidate hard map

The canonical candidate order is based on the parallel base offset `+40` and
the existing 12-unit expansion. Every candidate below was Node-safe and
occupied-safe unless noted. `H2` and `H3` identify the actual rectangle
owners intersected by the sampled route.

| Offset(s) | Hard owners | Halo owners | Node state | Hard class |
|---|---|---|---|---|
| `+40`, `+52` | `clara + archive` | `lighthouse` | safe | H2 |
| `-52` | none | none | safe | H5 / CLEAR |
| `+64,+76,+88,+100,+112,+124,+136,+148,+160,+172,+184,+196,+208,+220` | `lighthouse + clara + archive` | none | safe through `+88`; unsafe from `+100` | H3 |
| `-64,-76,-88,-100,-112` | none | none | safe | H5 / CLEAR |
| `-124,-136,-148,-160,-172,-184,-196,-208,-220,-232` | none | none | Node-unsafe from `-124` | not eligible |
| `+232` | `lighthouse + clara` | `archive` | Node-unsafe | H2 / not eligible |

The complete discrete forbidden candidate set is:

`+40,+52,+64,+76,+88,+100,+112,+124,+136,+148,+160,+172,+184,+196,+208,+220,+232`.

The first hard-safe candidate on the negative side is `-52`, which is also
the current winner. No positive-side candidate in the live search range is
hard-safe for this JA pass. Thus the large opposite-side curve is not merely
a soft halo preference in this locale: it is the first available hard-safe
side-switch candidate under the current label geometry and candidate set.

## Continuous geometry micro-probe

As a boundary diagnostic only, manual offsets from `-80` through `+80` at
one-unit increments were sent through the existing `routeGraphEdge` manual
geometry path and the existing sampled hard-distance helper. These offsets
were not added to the candidate set and did not participate in selection.

The JA owner-state transitions were:

| First sampled offset | `clara` | `lighthouse` | `archive` |
|---:|---|---|---|
| `-80` | CLEAR | CLEAR | CLEAR |
| `-42` | HALO | CLEAR | CLEAR |
| `-31` | HALO | CLEAR | HALO |
| `-10` | HARD | CLEAR | HALO |
| `+6` | HARD | HALO | HALO |
| `+9` | HARD | HALO | HARD |
| `+56` | HARD | HARD | HARD |

This supports a connected sampled hard corridor around the center and toward
the positive side. It does not establish an exact continuous onset between
sample points; that would require a separately approved exact geometry
boundary oracle.

## Owner-by-owner hard map and ablation

The actual geometry owner identities remain in every ablation result. The
diagnostic temporarily removed the named owner's contribution from both hard
and halo pressure to reproduce the prior owner-omission control. It did not
move or delete the label rectangle.

### JA

| Omitted owner contribution(s) | Winner | Actual hard owners at winner | Interpretation |
|---|---:|---|---|
| none | -52 | none | Production baseline |
| `clara` | -52 | none | archive hard owner remains |
| `archive` | -52 | none | clara hard owner remains |
| `lighthouse` | -52 | none | clara + archive hard owners remain |
| `clara + archive` | -52 | none | lighthouse halo still remains at near-center |
| `clara + lighthouse` | -52 | none | archive hard owner remains |
| `lighthouse + archive` | -52 | none | clara hard owner remains |
| `clara + lighthouse + archive` | **+40** | `clara + archive` | omitted-hard result; not Production-safe |

The result separates two facts. `clara + archive` are the hard owners that
exclude `+40/+52`, while `lighthouse` supplies additional halo pressure. All
three owner contributions must be removed before the diagnostic winner moves
to `+40`. The `+40` result still intersects the actual Clara and Archive
rectangles and therefore must not be interpreted as a safe route or a label
movement feasibility result.

### Owner classes

For the JA `mentors` candidate set, the observed classes are:

- **H1:** not observed as the primary near-center JA blocker; the positive
  `+40/+52` candidates are H2.
- **H2:** `+40/+52` are `clara + archive`; `+232` is `lighthouse + clara`
  with Archive halo but is Node-unsafe.
- **H3:** positive candidates from `+64` through `+220` are blocked by all
  three owners.
- **H4:** no-hard/halo-only is not the JA `mentors` winner frontier; it is
  visible in the authority control.
- **H5:** `-52` through `-112` are clear until Node safety eliminates the
  farther negative candidates.

## Controls

### Clara/Thomas supervises

The JA `supervises` route selected `-76`. Nearer negative candidates `-40`,
`-52`, and `-64` were hard-clear or label-safe but occupied-path-unsafe. The
positive `+52` candidate was both occupied-path-unsafe and hard-blocked by
`clara + archive`. This preserves the occupied-path control: the mentors
hard-label result must not be generalized to the sibling Relation.

### Authority/lighthouse

The JA authority control has no hard corridor at the straight candidate:
offset `0` is hard-safe but lighthouse-halo-positive at minimum distance
`5.809`. Offset `-12` is also hard-safe at `12.840`, and current `-24` is
hard-safe and zero-halo at `20.087`. This remains the prior halo-only control,
not evidence for a hard-label explanation of that route.

### Sofia/archive

The JA Sofia/archive near-center candidates remain Node-unsafe even where
label owners are clear or halo-only. Node safety therefore remains a separate
blocking signal.

## Current curvature necessity

For the JA `mentors` candidate space, the answer is **NECESSARY under the
current provisional label geometry and hard-safety predicate**: every positive
candidate in the live range is hard-unsafe, and `-52` is the first
hard-safe/occupied-safe candidate on the opposite side. This is a statement
about the current discrete candidate space, not a universal claim that a large
curve is required by all possible label placements.

Across locales the stronger overall conclusion is **MIXED**. EN has a
different topology: the positive near-center candidates are blocked by
`clara` alone, while `-52` is hard-safe but Clara-halo-positive and current
`-64` is the first zero-halo winner. Hard safety explains the center exclusion,
but halo and other signals still determine the final winner.

## EN bounded comparison

The EN replay was a bounded cross-locale comparison, not a second baseline
gate. Its `mentors` candidates have `clara` as the hard owner on the positive
side; `archive` and `lighthouse` are not hard owners there. Its owner ablations
were:

| Omitted owner contribution(s) | Winner | Actual hard owners at winner |
|---|---:|---|
| none | -64 | none |
| `clara` | +40 | `clara` |
| `archive` | -64 | none |
| `lighthouse` | -64 | none |
| any tested pair containing `clara` | +40 | `clara` |
| all three | +40 | `clara` |

EN therefore belongs to **L3 — different owner topology**, not L1 shared
owner/shared-side topology. The same numeric offset or boundary must not be
copied across locales.

Available route-level presentation diagnostics were:

| Locale | Straight / curved | Ordinary route length | H2 count |
|---|---:|---:|---:|
| JA | 5 / 7 | 1513.914 | 4 |
| EN | 6 / 6 | 1459.126 | 7 |

These are fresh route replay values. Final-label feedback, PNR/FNR, and
three-label placement feasibility were not reimplemented in this checkpoint;
F6 remains unresolved.

## Decision

The evidence supports the following bounded conclusions:

- **Hard-label corridor causal:** YES for the JA near-center exclusion;
  PARTIAL as an explanation of the final winner across locales.
- **Clara + Archive jointly material:** YES in JA for the `+40/+52` hard
  corridor.
- **Current large curvature required by hard safety:** YES for JA's current
  discrete candidate set; MIXED across JA/EN because EN's final winner also
  reflects halo pressure.
- **Side switch required:** YES in JA; the first usable hard-safe route is
  `-52` on the opposite side.
- **Intermediate hard-safe candidate:** not on the positive JA side before
  the current search limit; clear negative candidates begin at `-52`.
- **Minimum-clearance Production threshold justified:** NO; the preceding
  boundary audit found no shared natural Cmin.
- **Normalized-curvature or straight bonus justified:** NO.
- **Label movement, final-label feedback adoption, parallel policy, and
  initial placement change authorized:** NO.

The manual image observation is consistent with a plausible presentation
dependency on initial placement, but this audit cannot attribute that quality
to final-label feedback or claim a production fix. Temporal drag behavior also
remains unproven.

## Selected next checkpoint

The selected follow-up is:

`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-HARD-CORRIDOR-RELIEF-AUDIT1`

Its purpose is to test, read-only and with the existing feedback geometry, if
the Clara/Archive corridor is actually relieved when final-label geometry is
fed back into routing. It must separately report whether a changed winner is
hard-safe under the original rectangles, whether label movement is feasible,
and whether other routes regress. It is not a Production adoption task.

The parallel-edge bundle-spacing issue and initial-placement quality remain
separate checkpoints.

## Cleanup and verification boundary

The temporary observer, owner-ablation hook, micro-probe, copied inputs,
generated JSON, and worktree were removed. LiaisonScape received no commit.
The existing interactive preview, localhost server, dirty samples, seeded
positions, and protected `E2R-Session-0052.md` were preserved.
