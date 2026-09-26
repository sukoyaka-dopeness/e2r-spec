# LiaisonScape Initial-placement Local-neighborhood Displacement Boundary Audit

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-DISPLACEMENT-BOUNDARY-AUDIT1`

## Outcome

Result: **CASE 4 / EXACT RESULT 2 / DECISION B**.

> **DIRECTION SUPPORTED — TARGET SELECTION, NOT DISPLACEMENT MAGNITUDE, IS
> THE PRIMARY FAILURE BOUNDARY**

The rejected candidate is reproducible at the placement level. It moves
`Clara` in Lighthouse by `20.988126` and `Elara` in Ashen Crown by
`10.090279`. A bounded forward sweep shows that a non-zero part of each
vector can preserve the current final-label conflict state before the full
candidate reaches the first new conflict boundary. However, in both target
samples the selected `W` is a validated endpoint, not the validated shared
neighbor (`Maya` for Lighthouse or `Kael` for Ashen Crown). This target-role
mismatch is common to both samples and is the strongest actionable boundary.

No new placement candidate was implemented. No coefficient, cutoff, target
distance, angle threshold, iteration count, route rule, label rule, or locale
rule was added. The exact next checkpoint is:
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-TARGET-SELECTION-AUDIT1`.

## Start state and preservation

- LiaisonScape main HEAD: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
- Main status contained only the pre-existing dirty Lighthouse samples:
  `public/lighthouse-restoration-demo.en.e2r.json` and
  `public/lighthouse-restoration-demo.ja.e2r.json`.
- e2r-spec starting HEAD: `d9c641cccf00934a30dedd89f7c820d6b4d2d668`.
- Existing preview HEAD: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, with its
  existing `src/App.tsx` and `src/viewport.ts` changes preserved.
- Existing localhost `http://127.0.0.1:5173/e2r-liaison-scape/` returned
  HTTP 200 and was not restarted.
- Temporary diagnostic clone:
  `C:\Users\extra\E2R\e2r-liaison-scape-local-neighborhood-displacement-boundary`.
- The protected `sessions/E2R-Session-0052.md` and protected knowledge
  playbook were not edited or staged.

## Reproduction gate

The preceding rejected source shape was recreated exactly in the temporary
clone: `src/auto-layout.ts` added the same shared-neighbor helper, selected
the minimum current W-to-infinite-U/V-line distance per component, used the
existing clearance and `0.25` displacement scale, and used the existing
`[-18,18]` per-axis clamp. The candidate source change was not copied to main.

The placement reproduction is exact:

| sample | moved Node | P0 | P1 | D = P1 − P0 | magnitude | clamp |
|---|---|---|---|---|---:|---|
| Lighthouse JA/EN | Clara | `(178.843134,165.891269)` | `(193.956513,151.328055)` | `(15.113379,-14.563215)` | `20.988126` | not activated |
| Ashen JA/EN | Elara | `(181.038240,164.980393)` | `(184.700481,155.578173)` | `(3.662241,-9.402219)` | `10.090279` | not activated |

The prior report's safety classification is also reproduced: Lighthouse
acquires new hard conflicts and Ashen changes its hard-conflict identity set.
The fresh sweep observer records the exact live route/provisional/final owner
sets below; those owner strings differ from the earlier bounded replay's
summary strings because this audit recomputes all routes and labels in a fresh
pass. The deterministic placement vector and the safety failure class are the
stable reproduction facts.

## Eligible triplets and target selection

The audit enumerated distinct undirected Entity adjacency from sorted Entity
IDs. Self-relations and duplicate Relation IDs do not add membership.

| sample | eligible triplets | selected triplet | line distance | selected pair Relations | selected W links | validated reference |
|---|---:|---|---:|---|---|---|
| Lighthouse JA/EN | 3 | `Maya / Thomas / Clara` | `12.047495` | `thomas-maya-friends` | `clara-maya`, `clara-thomas-mentors`, `clara-thomas-supervises` | `Clara / Thomas / Maya` |
| Ashen JA/EN | 21 | `Darius / Nyra / Elara` | `55.638883` | `r16` | `r11`, `r3` | `Darius / Elara / Kael` |

The selected triplet is therefore **T2** in both samples: the selected W is
one of the validated reference endpoints. The validated reference triplets
remain eligible, but rank below the generic minimum-line-distance choice.
This is the same target-role mismatch in Lighthouse and Ashen, not a
Lighthouse-only or locale-only split.

For completeness, the Ashen baseline triplet line-distance inventory was:

```text
Darius/Elara/Kael 75.710; Darius/Elara/Nyra 126.395;
Darius/Kael/Elara 99.090; Darius/Kael/Rowan 249.532;
Darius/Nyra/Elara 55.639; Darius/Nyra/Rowan 107.830;
Darius/Rowan/Kael 79.580; Darius/Rowan/Nyra 102.246;
Elara/Garrick/Kael 104.248; Elara/Kael/Darius 81.611;
Elara/Kael/Garrick 148.650; Elara/Nyra/Darius 84.984;
Elara/Selene/Vhalgrim 289.958; Elara/Vhalgrim/Selene 156.866;
Garrick/Kael/Elara 83.631; Garrick/Kael/Mira 101.144;
Garrick/Mira/Kael 179.385; Kael/Mira/Garrick 79.848;
Kael/Rowan/Darius 85.771; Nyra/Rowan/Darius 254.727;
Selene/Vhalgrim/Elara 141.572.
```

The Lighthouse inventory consists of the three triangle permutations:
`Clara/Maya/Thomas 27.354`, `Clara/Thomas/Maya 21.397`, and
`Maya/Thomas/Clara 12.047`. The generic minimum selects the last one rather
than the validated `Clara/Thomas/Maya` role.

## Displacement semantics

The selected normal was the current-side normal with side sign `+1` in both
paired locales. The un-clamped and clamped vectors were equal:

| sample | selected line distance | clearance gap | normal | unclamped | clamped | x/y clamp |
|---|---:|---:|---|---|---|---|
| Lighthouse | `12.047495` | `83.952505` | `(-axisY, axisX) / length` | `(15.113379,-14.563215)` | same | NO / NO |
| Ashen | `55.638883` | `40.361117` | `(-axisY, axisX) / length` | `(3.662241,-9.402219)` | same | NO / NO |

The correction is thus not failing because the per-axis clamp activated. Its
direction and target selection are both observable before the clamp boundary.

## Forward path sweep

The diagnostic path was `P(t) = P0 + tD` for
`t = 0, .125, .25, .375, .5, .625, .75, .875, 1`. It was not used to tune a
Production coefficient.

The following table reports selected local geometry and the fresh route
observer's `PNR/FNR` counts. PNR is route/provisional-Node-label conflict
pairs; FNR is route/final-Node-label conflict pairs. `new FNR` means identities
not present at `t=0`; H2 lists strict sampled ordinary-route/node-influence
identities. No body overlap was observed at any forward probe.

| sample | forward local line distance / angle | first new FNR | last safe non-zero probe | PNR/FNR pattern |
|---|---|---:|---:|---|
| Lighthouse JA | `12.05/170.39° → 33.04/154.06°` | `.625` | `.5` | `1/0` through `.5`; `3/2` from `.625` |
| Lighthouse EN | same | `.75` | `.625` | `0/0` through `.625`; `1/1` from `.75` |
| Ashen JA | `55.64/130.93° → 65.73/123.47°` | `.25` | `.125` | `3/0` at `.125`; `3/1` from `.25`; `2/1` from `.5` |
| Ashen EN | same | `.375` | `.25` | `3/1` through `.25`; `7/1` at `.375`; `5/3` at `.5/.625`; `5/2` from `.75` |

The forward path therefore has a safe non-zero region in both target samples,
but it is not a universal magnitude boundary: the first unsafe sampled point
differs by locale and the route/label state is discrete. The full candidate is
not the first useful geometric movement; it is simply a later point on a path
whose target role is already wrong.

Representative fresh final-conflict identities at the full forward point were:

- Lighthouse JA: `sofia-archive|thomas`,
  `thomas-maya-friends|clara`;
- Lighthouse EN: `sofia-archive|clara`;
- Ashen JA: `r12|elara`;
- Ashen EN: `r5|darius`, `r8|elara`.

These are evaluation outputs only and do not become placement inputs.

## Mirror direction probe

The mirror path used `P(-t)` for `t = .25, .5, .75, 1`.

| sample | mirror line distance / angle | hard/final safety observation | interpretation |
|---|---|---|---|
| Lighthouse JA | `6.80/174.57° → 8.94/172.86°` | no new FNR; PNR remains `1` through `.75`, `3` at `1` | safer final-label boundary, but geometry moves toward the line |
| Lighthouse EN | same | no new FNR and PNR `0` at all probes | safer presentation path, not a fan-out direction |
| Ashen JA | `53.12/132.88° → 45.55/138.91°` | no new FNR until `t=1`, where `r5|darius` appears | angle opens, but line clearance worsens |
| Ashen EN | same | baseline `r12|elara` persists at `.25`; no new FNR at `.5/.75`; `r5|darius` appears at `1` | mixed and sample-dependent |

The mirror result does not support resurrecting a mirrored candidate. It shows
that current-side direction can affect presentation safety, but it does not
make target selection correct and does not consistently improve the validated
local descriptor. Direction is secondary to selecting the proper shared-neighbor
role in this audit.

## Safe-partial classification

- `S0 BASELINE`: `t=0`.
- `S1`: the small non-zero probes before the first new final conflict preserve
  hard final-label safety and have no body overlap.
- `S2`: later forward probes introduce a new final conflict or replace the
  baseline conflict set.
- `S3`: not used as the primary classification; H2 alone does not decide S1/S2.
- `S4 MIXED`: the mirror path and Ashen EN show mixed PNR/FNR/H2 behavior.

Thus a safe partial forward region exists in both target samples, but not a
single monotone Production bound. The full candidate's failure is not proof
that every non-zero displacement is unsafe.

## Mechanism decision

| question | result |
|---|---|
| safe non-zero forward interval exists | YES, in both Lighthouse and Ashen |
| failure only after larger displacement | NO; useful geometry and target mismatch are present before the full point |
| mirror direction avoids failure | PARTIAL; final-label safety improves in some probes, local spacing does not |
| selected triplet matches validated reference | NO |
| selected W is a validated endpoint | YES, in both samples |
| same failure mechanism across Lighthouse/Ashen | PARTIAL-to-YES; target-role mismatch is shared, exact route identities are sample/locale-mediated |
| target selection material | YES |
| magnitude/overshoot material | PARTIAL; it determines when the discrete safety boundary is crossed |
| direction material | PARTIAL; mirror changes safety but not the correct role |

No alternative target move was implemented. In particular, `Maya` and `Kael`
were not forced as special cases. The next audit must establish whether a
general topology role can identify the intended W without moving Nodes or
fitting the observed samples.

## Decision and cleanup

The classification is **CASE 4**. The exact result is **2**. The primary
decision is **B — target selection is primary**. A safe partial displacement
region exists, while the generic minimum-line-distance selector chooses the
wrong role in both target samples. No coefficient tuning was performed.

The temporary clone, sweep harness, mirror probe, route observers, generated
JSON, copied samples, and other diagnostic artifacts were removed. No
candidate worktree remains. Production Initial Placement, Production routing,
feedback, label placement, samples, and the existing preview were unchanged.

## Validation

- Reconstructed candidate: placement vector and moved-Node values reproduced.
- Candidate `npm.cmd test`: **280/280 passed**.
- Candidate `npm.cmd run lint`: passed.
- Candidate `npm.cmd run build`: passed.
- Candidate `git diff --check`: passed.
- e2r-spec `npm.cmd run validate`: passed.
- e2r-spec working-tree and cached diff checks: passed.
- localhost: HTTP 200.

The e2r-spec checkpoint commit is:

```text
docs: audit LiaisonScape local displacement boundary
```

It remains unpushed. The protected session remained unstaged and the two
pre-existing dirty LiaisonScape samples remained untouched.
