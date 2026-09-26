# LiaisonScape Parallel Edge Hard-Side-Switch Cascade Audit

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-PARALLEL-EDGE-HARD-SIDE-SWITCH-CASCADE-AUDIT1`

Result: **CASE 4 / EXACT RESULT 4 / DECISION E**

**Under the current Node-label rectangles, candidate set, and hard-collision
contract, no hard-safe opposite-side pair exists for the Clara/Thomas
parallel group. The one-sided bundle is therefore not recoverable by pair
assignment alone without changing label geometry, placement, or hard-safety
semantics.**

## Scope and safety boundary

This was a bounded read-only audit in the detached worktree
`C:/Users/extra/E2R/e2r-liaison-scape-parallel-hard-side-cascade`, using
LiaisonScape source `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` and byte-for-byte
copies of the main worktree's dirty JA/EN Lighthouse samples.

The audit retained the canonical App pipeline, current provisional Node-label
placement, current `routeGraphEdge` candidate geometry, current hard-label and
Node-pressure helpers, current occupied-path helper, current candidate order,
and current sequential route order. The pair oracle only enumerated the
existing candidate cross-product; it did not add a pair score, a second
router, new geometry, backtracking, or new collision semantics.

No LiaisonScape Production runtime, routing/scoring policy, candidate set,
label geometry, label placement, initial placement, Final-label feedback,
parallel slot policy, physical-side policy, occupied-path semantics,
self-loop, connector, sample, preview, coordinate, release, or publication
data was changed.

## Start state and baseline gate

- LiaisonScape HEAD: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
- LiaisonScape dirty state: the expected JA/EN Lighthouse samples only
- e2r-spec starting HEAD: `234342b4e1be1d379a62fe1011f87291337b9ba8`
- e2r-spec dirty state: protected `sessions/E2R-Session-0052.md` only
- routing-preview: existing dirty `src/App.tsx` and `src/viewport.ts`, preserved
- localhost: `http://127.0.0.1:5173/e2r-liaison-scape/`, HTTP 200

The canonical replay reproduced the accepted baseline:

| Locale | `mentors` | `supervises` | base offsets |
|---|---:|---:|---|
| JA | `-52` | `-76` | `+40 / -40` |
| EN | `-64` | `-88` | `+40 / -40` |

The nominal Clara-to-Thomas bundle is opposite-sided, centered at `0`, and
separated by `80`. Baseline gate: **PASS**.

## Current source contract

The source audit confirms:

- `buildEntityGraph` assigns `parallelIndex` and `parallelCount` per directed
  endpoint group after Relation-ID sorting.
- `App.tsx` routes fixed/self/overlapping edges first, then ordinary edges by
  source ID, target ID, and Relation ID. `mentors` therefore precedes
  `supervises` in the canonical replay.
- Each ordinary parallel call enumerates 33 existing offsets: its base offset
  plus 32 signed 12-unit expansions.
- `routeGraphEdge` has no parallel-group state, no record that a sibling has
  crossed its base side, no sibling original-slot input, and no pair-level
  feasibility or selection.
- `occupiedPaths` is appended after each route, so a later sibling sees the
  earlier route.
- A side-preserving winner is returned only when it is Node-safe, occupied-safe,
  and label-pressure-free. Otherwise the router returns the global best
  candidate, even when that candidate crosses its base side.

Therefore, group-level state exists: **NO**. Sibling-crossed-side awareness:
**NO**. Original sibling-slot awareness: **NO**. Pair-level selection:
**NO**.

## First-edge hard switch

The preceding label-pressure and hard-corridor evidence is reproduced and is
used here as the first step of the cascade:

| Locale | `mentors` base-side hard owners | first hard-safe opposite-side candidate | accepted winner |
|---|---|---:|---:|
| JA | Clara, Archive | `-52` | `-52` |
| EN | Clara | `-52` | `-64` |

All useful positive-side `mentors` candidates are hard-unsafe. The first side
switch is therefore caused by **hard label collision**, not by sibling
occupancy or a bundle-level assignment choice.

## `supervises` positive-side frontier

With the accepted negative `mentors` route held as the predecessor, all 33
`supervises` candidates were evaluated. The positive-side frontier starts at
`+52`; `+40` is not in the index-1 candidate set.

| Locale | nearest positive candidate | Node-safe | sibling-occupied-safe | hard-safe | current-safe |
|---|---:|:---:|:---:|:---:|:---:|
| JA | `+52` | YES | YES | **NO** | **NO** |
| EN | `+52` | YES | YES | **NO** | **NO** |

JA positive candidates `+52`, `+64`, `+76`, and `+88` are Node-safe but have
hard owners; farther candidates eventually also acquire Node pressure and
remain hard-unsafe. EN has the same boundary with Clara as the hard owner.
There is no positive hard-safe candidate in either locale. Consequently the
frontier classification is **S1: all opposite-sibling candidates are
hard-unsafe**.

The nearest positive candidate has these owners:

| Locale | `+52` hard owners | `+52` halo owners |
|---|---|---|
| JA | Clara, Archive | Lighthouse |
| EN | Clara | none |

This is an important distinction: the nearest positive candidate is already
Node-safe and sibling-occupied-safe. Hard label geometry removes it before
occupied-path pressure can matter.

## 33 x 33 pair feasibility oracle

The oracle evaluated the 1,089 pairs formed by the two existing 33-candidate
sets. It required, for each Relation, Node safety and no hard label collision;
for the pair it required opposite physical sides and no sibling or unrelated
occupied-path overlap. Soft halo was reported separately and was not used as a
hard-feasibility condition.

| Locale | all pairs | opposite-side pairs | Node-safe swapped pairs | hard-safe swapped pairs | mutually occupied-safe swapped pairs | feasible swapped pairs | full-current-safe pairs |
|---|---:|---:|---:|---:|---:|---:|---:|
| JA | 1,089 | 545 | 24 | **0** | 256 | **0** | **0** |
| EN | 1,089 | 545 | 24 | **0** | 256 | **0** | **0** |

The requested swapped ownership class (`mentors < 0`, `supervises > 0`) has
256 candidate pairs per locale. All 256 are mutually occupied-safe, but none
is hard-safe. Thus:

- hard-safe opposite-side pair: **NO / NO** for JA / EN;
- full current-safe opposite-side pair: **NO / NO**;
- swapped pair hard-safe: **NO / NO**;
- swapped pair Node-safe: **YES for 24 pairs / YES for 24 pairs**;
- swapped pair mutually occupied-safe: **YES for 256 pairs / YES for 256 pairs**.

The nearest swapped pair is `mentors=-52`, `supervises=+52`. It is centered at
`0`, has offset separation `104`, and has minimum sampled separation `35.201`.
It is mutually occupied-safe in both locales, but hard-unsafe:

| Locale | negative `mentors` label signal | positive `supervises` hard signal | positive `supervises` halo signal |
|---|---|---|---|
| JA | none | Clara, Archive | Lighthouse |
| EN | Clara halo | Clara | none |

This directly answers the primary question: the current candidate space does
not contain a hard-safe `mentors negative + supervises positive` pair. The
failure is not an inability to separate the two routes from one another.

Because both positive-side members of an opposite-side pair are hard-blocked
in the relevant direction, the original slot ownership class P1 and the
swapped class P2 are both infeasible; the result is P4 (**neither feasible**),
not a slot-swapping opportunity.

## Route-order reversal control

The bounded reverse-order replay routed the same two Relations in the opposite
order without changing Production order. It did not open a balanced result:

| Locale | canonical mapping | reversed replay mapping | final center | separation | order materially opens a safe balanced pair |
|---|---|---|---:|---:|:---:|
| JA | `mentors=-52`, `supervises=-76` | `supervises=-52`, `mentors=-76` | `-64` | `24` | NO |
| EN | `mentors=-64`, `supervises=-88` | `supervises=-64`, `mentors=-88` | `-76` | `24` | NO |

Both orderings remain hard-safe at their selected individual winners and both
remain same-sided. The final bundle is therefore **R0 / same result as
current** at the presentation level. Relation-to-offset ownership changes in
the diagnostic reversal, but that is not evidence that slot swapping is a
correct Production policy.

## Three-step cascade decomposition

### Step 1: first-edge hard side switch

`mentors` loses its nominal `+40` and nearby positive-side candidates because
of hard Node-label rectangles. It falls to the first hard-safe negative-side
candidate (`-52` JA, `-64` EN).

Dominant signal: **hard label collision**.

### Step 2: second edge sees the switched sibling

The accepted negative `mentors` path is appended to `occupiedPaths`. The
later `supervises` call therefore sees a sibling route on the same physical
side it is trying to use as its own base side.

Dominant effect: **the predecessor path changes the later candidate frontier**.

### Step 3: second-edge final same-side/outward choice

For JA, `supervises=-40` is affected by Clara halo and sibling occupancy, and
the selected clear candidate is `-76`. For EN, Clara halo affects `-40` and
the nearer `-52` candidate also meets sibling occupancy; the selected clear
candidate is `-88`.

Dominant remaining signal: **sibling occupied-path amplification**, with
additional halo pressure in EN. The earlier sibling-only ablation remains
consistent with this: removing sibling occupancy changes the later edge to a
nearer same-side offset but does not restore opposite sides.

Under the current candidate and hard-safety contract, the second-edge
same-side choice is **YES**, and its outward movement is **YES for the
occupied-safe current winner**. This does not make occupied-path semantics the
root cause of the bundle imbalance; it is the cascade after the hard first
switch.

## Bundle interpretation and locale comparison

| Question | JA | EN |
|---|---|---|
| current one-sided bundle required for any opposite-side hard-safe pair? | YES under current geometry | YES under current geometry |
| safe opposite-side bundle alternative exists? | NO | NO |
| sequential route order materially causes the absence of a safe opposite pair? | NO | NO |
| same-side outward amplification remains sequentially observable? | YES | YES |
| locale-specific hard owner topology | Clara + Archive | Clara |

This is **L4 / neither locale has a hard-safe opposite-side pair**. The
topology is shared, but the hard-owner set is locale-dependent. JA's foreign
Archive label adds pressure; EN is controlled primarily by the Clara endpoint
label.

The result supports the boundary between Relation-level routing and
bundle-level presentation, but it does not justify adding a bundle solver yet:
there is no safe opposite-side pair for such a solver to select in the current
geometry.

## Manual presentation context

The supplied favorable `Experimental - Final-label feedback` image and the
observation that a favorable Initial Placement can produce a clean bundle are
preserved as strong manual context. They suggest a meaningful follow-up at the
interaction boundary, but they do not override this current-source pair
oracle. Final-label feedback was not adopted, and Initial Placement was not
changed.

## Result and decision

- Result case: **CASE 4** — no hard-safe opposite-side pair exists under the
  current label geometry.
- Exact result: **4 — DIRECTION SUPPORTED: CURRENT LABEL GEOMETRY LEAVES NO
  HARD-SAFE OPPOSITE-SIDE PAIR.**
- Primary decision: **E — current label geometry makes a balanced hard-safe
  bundle infeasible.**
- Hard safety relaxed: **NO**.
- Slot semantics changed: **NO**.
- Pair optimizer introduced: **NO**.
- Production routing changed: **NO**.
- Parallel issue solved: **NO**.

The selected next bounded checkpoint is exactly:

`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-INITIAL-PLACEMENT-INTERACTION-AUDIT1`

Its purpose is to test whether favorable Initial Placement together with the
existing Final-label feedback can open the currently impossible safe corridor,
without adopting feedback or relaxing hard collision in this checkpoint.

## Cleanup and verification boundary

The temporary candidate/pair harness, copied samples, and temporary observer
were removed from the detached worktree. LiaisonScape main's dirty samples,
the routing-preview worktree, localhost, and the protected session were
preserved.

The final application and specification validation gates were run after
cleanup:

- LiaisonScape: `npm.cmd test` — PASS, 280/280
- LiaisonScape: `npm.cmd run lint` — PASS
- LiaisonScape: `npm.cmd run build` — PASS
- LiaisonScape: `git diff --check` — PASS
- e2r-spec: `npm.cmd run validate` — PASS
- e2r-spec staged diff check — PASS
- localhost route — HTTP 200
