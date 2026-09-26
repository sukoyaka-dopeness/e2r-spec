# LiaisonScape Initial-placement Global-topology Attribution Audit

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-GLOBAL-TOPOLOGY-ATTRIBUTION-AUDIT1`

## Outcome

The bounded attribution is **CASE 1 / EXACT RESULT 1 / DECISION A**: one outside-focal Node, Maya, is sufficient to open the H1111 feedback corridor in JA. This is a diagnostic coordinate attribution only. It does not justify adopting Maya's exact coordinate or changing Production Initial Placement.

The result also separates two outcomes that had been conflated:

- JA corridor opening: Maya alone, mask `000010`, R1 safe pair `0→63`.
- Full-S0 presentation reproduction: not achieved by Maya alone. JA strong-reproduction masks are `111011` and `111111`; both require a broader non-focal coordinate subset.

The effect is therefore local/mesoscale rather than “all nodes are globally necessary”: Maya is directly connected to both Clara and Thomas, but its coordinate change propagates through final label placement and nine ordinary routes.

## Scope and safety

The audit used only the existing `buildEntityGraph`, label-placement, route, and collision helpers in a detached diagnostic worktree. Each mask fixed the four focal Nodes at S0 and selected non-focal Nodes at S0; all remaining non-focal Nodes stayed at S1.

No Production source, Initial Placement rule, routing/scoring/feedback semantics, label geometry, collision constant, parallel policy, self-loop behavior, sample, or preview was changed. Hybrid states are not user layouts or Production candidates.

## Start state and gates

- LiaisonScape main: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, branch `main`; expected dirty samples only: `public/lighthouse-restoration-demo.en.e2r.json` and `public/lighthouse-restoration-demo.ja.e2r.json`.
- e2r-spec: `4af0dd4240cbc6635dd04ed7b95335bdaeba36f6`, branch `main`; protected `sessions/E2R-Session-0052.md` remained untouched.
- Diagnostic worktree: `C:\Users\extra\E2R\e2r-liaison-scape-global-topology-attribution`, detached at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
- Routing preview remained read-only with its existing `src/App.tsx` and `src/viewport.ts` changes.
- The localhost target was kept running and is checked again after cleanup.
- Clean HEAD samples and copied dirty samples were semantically equal after removing only coordinate-extension payloads: **PASS**.

The preceding baseline gate was reproduced for JA:

| State | R1 safe pair | selected bundle |
|---|---:|---:|
| H1111 (focal S0, all non-focal S1) | 0 | -52 / -76 |
| Full S0 | 91 | +40 / -40 |

Full-S0 measured reference was: H2 `0`, PNR/FNR `0/0`, ordinary routes straight/curved `9/3`, route length `1871.188923`, minimum foreign-node clearance `55.286159`. H1111 was H2 `4`, PNR/FNR `3/1`, straight/curved `5/7`, route length `2171.482946`, clearance `28.094869`.

## Non-focal inventory

The live JA graph contained six non-focal Nodes. Bit order is lexical Entity ID order; bit `1` means S0 and bit `0` means S1. The focal Nodes were always S0.

| Bit | ID / display name | S0 | S1 | delta S0-S1; magnitude |
|---|---|---:|---:|---:|
| N0 | `authority` / 港湾局 | (650, 380) | (284.512831, 44.340475) | (+365.487169, +335.659525); 496.234004 |
| N1 | `beacon` / 灯台システム | (620, 520) | (174.562282, 320.914841) | (+445.437718, +199.085159); 487.903331 |
| N2 | `daniel` / ダニエル・ブルックス | (600, 250) | (487.970938, 160.217650) | (+112.029062, +89.782350); 143.566643 |
| N3 | `elias` / イライアス・ワード | (150, 180) | (42.440057, 269.626456) | (+107.559943, -89.626456); 140.007296 |
| N4 | `maya` / マヤ・リード | (470, 480) | (258.741072, 266.170103) | (+211.258928, +213.829897); 300.588689 |
| N5 | `sofia` / ソフィア・モレノ | (150, 340) | (-1.325282, 157.239666) | (+151.325282, +182.760334); 237.277645 |

## Search

JA was exhaustively evaluated: (2^6=64) masks.

- V0: 48
- V1: 16 (a new Node-body overlap relative to the H1111 baseline)
- V2: 0
- Opening masks (V0 and R1 safe pair > 0): `000010`, `000110`, `001010`, `001110`, `010010`, `010011`, `010110`, `010111`, `011010`, `011011`, `011110`, `011111`, `100010`, `100110`, `101010`, `101110`, `110010`, `110011`, `110110`, `110111`, `111010`, `111011`, `111110`, `111111`.

`000010` is the only inclusion-minimal opening mask. Its only immediate failing proper subset is `000000`.

## JA exhaustive table

Columns: R0/R1 bundle are the selected `mentors/supervises` offsets; pair is `safePair/fullCurrentSafe`; safety means the selected R1 pair is hard-safe against that mask's original R0 provisional labels; H2 and PNR/FNR show R0→R1; focal movement is R0→R1 distance for Clara/Thomas/Archive/Lighthouse; route changes are ordinary-route count relative to H1111 R1.

| mask | restored non-focal | V | R0 bundle | R1 bundle | pair | R0-label safety | H2 | PNR/FNR | focal label Δ C/T/A/L | route changes |
|---|---|---|---|---|---:|---|---|---|---:|---:|
| 000000 | - | V0 | -52/-76 | -52/-76 | 0/0 | unsafe | 4→4 | 3/1→3/1 | 38.719579/0/0/118.095565 | 0 |
| 000001 | sofia | V1 | -52/-76 | -196/-196 | 0/0 | unsafe | 4→4 | 3/3→4/1 | 56.987686/0/0/118.095565 | 9 |
| 000010 | maya | V0 | 148/148 | 40/-100 | 63/42 | safe | 6→6 | 1/0→1/0 | 138.653073/0/0/0 | 9 |
| 000011 | maya+sofia | V1 | 148/148 | 40/-100 | 63/42 | safe | 6→6 | 1/1→1/0 | 145.530442/0/0/0 | 11 |
| 000100 | elias | V0 | -52/-76 | -52/-76 | 0/0 | unsafe | 4→4 | 3/2→4/1 | 0/0/0/118.095565 | 5 |
| 000101 | elias+sofia | V1 | -52/-76 | -196/-196 | 0/0 | unsafe | 4→4 | 3/3→5/0 | 0/0/0/118.095565 | 10 |
| 000110 | elias+maya | V0 | 148/148 | 40/-100 | 63/42 | safe | 6→6 | 1/1→1/0 | 145.530442/0/0/0 | 11 |
| 000111 | elias+maya+sofia | V1 | 148/148 | 40/-100 | 63/42 | safe | 6→6 | 1/1→1/0 | 145.530442/0/0/0 | 11 |
| 001000 | daniel | V0 | -52/-76 | -52/-76 | 0/0 | unsafe | 4→4 | 2/1→2/1 | 38.719579/0/0/118.095565 | 1 |
| 001001 | daniel+sofia | V1 | -52/-76 | -196/-196 | 0/0 | unsafe | 4→4 | 2/3→2/1 | 73.694663/0/0/118.095565 | 11 |
| 001010 | daniel+maya | V0 | 148/148 | 40/-100 | 63/42 | safe | 6→6 | 0/0→0/0 | 138.653073/0/0/0 | 10 |
| 001011 | daniel+maya+sofia | V1 | 148/148 | 40/-100 | 63/42 | safe | 6→6 | 0/1→0/0 | 145.530442/0/0/0 | 12 |
| 001100 | daniel+elias | V0 | -52/-76 | -52/-76 | 0/0 | unsafe | 4→4 | 2/1→2/0 | 109.41505/0/0/118.095565 | 7 |
| 001101 | daniel+elias+sofia | V1 | -52/-76 | -196/-196 | 0/0 | unsafe | 4→4 | 2/3→2/0 | 109.41505/0/0/118.095565 | 11 |
| 001110 | daniel+elias+maya | V0 | 148/148 | 40/-100 | 63/42 | safe | 6→6 | 0/1→0/0 | 145.530442/0/0/0 | 12 |
| 001111 | daniel+elias+maya+sofia | V1 | 148/148 | 40/-100 | 63/42 | safe | 6→6 | 0/1→0/0 | 145.530442/0/0/0 | 12 |
| 010000 | beacon | V0 | -52/-76 | -52/-76 | 0/0 | safe | 4→4 | 1/0→1/0 | 38.719579/0/0/0 | 7 |
| 010001 | beacon+sofia | V0 | -52/-76 | -52/-76 | 0/0 | safe | 3→3 | 1/0→1/0 | 38.719579/0/0/0 | 8 |
| 010010 | beacon+maya | V0 | 232/196 | 40/-100 | 144/96 | safe | 2→2 | 1/0→1/0 | 138.653073/0/0/0 | 10 |
| 010011 | beacon+maya+sofia | V0 | 196/172 | 40/-100 | 117/72 | safe | 1→1 | 1/0→1/0 | 138.653073/0/0/0 | 11 |
| 010100 | beacon+elias | V0 | -52/-76 | -52/-76 | 0/0 | safe | 3→3 | 1/0→2/0 | 0/0/0/0 | 8 |
| 010101 | beacon+elias+sofia | V0 | -52/-76 | -52/-76 | 0/0 | safe | 3→3 | 1/0→2/0 | 0/0/0/0 | 8 |
| 010110 | beacon+elias+maya | V0 | 208/184 | 40/-100 | 144/84 | safe | 1→1 | 1/0→1/0 | 145.530442/0/0/0 | 11 |
| 010111 | beacon+elias+maya+sofia | V0 | 196/172 | 40/-100 | 117/78 | safe | 3→1 | 1/0→1/0 | 145.530442/0/0/0 | 11 |
| 011000 | beacon+daniel | V0 | -52/-76 | -52/-76 | 0/0 | safe | 4→4 | 0/0→1/1 | 38.719579/0/0/118.095565 | 8 |
| 011001 | beacon+daniel+sofia | V0 | -52/-76 | -52/-76 | 0/0 | safe | 3→3 | 0/0→1/1 | 38.719579/0/0/118.095565 | 9 |
| 011010 | beacon+daniel+maya | V0 | 232/196 | 40/-40 | 112/112 | safe | 2→2 | 0/0→0/0 | 138.653073/0/0/118.095565 | 11 |
| 011011 | beacon+daniel+maya+sofia | V0 | 196/172 | 40/-40 | 91/84 | safe | 1→1 | 0/0→0/0 | 138.653073/0/0/118.095565 | 12 |
| 011100 | beacon+daniel+elias | V0 | -52/-76 | -52/-76 | 0/0 | safe | 3→3 | 0/0→1/0 | 109.41505/0/0/118.095565 | 9 |
| 011101 | beacon+daniel+elias+sofia | V0 | -52/-76 | -52/-76 | 0/0 | safe | 3→3 | 0/0→1/0 | 109.41505/0/0/118.095565 | 9 |
| 011110 | beacon+daniel+elias+maya | V0 | 208/184 | 40/-40 | 112/98 | safe | 1→1 | 0/0→0/0 | 145.530442/0/0/118.095565 | 12 |
| 011111 | beacon+daniel+elias+maya+sofia | V0 | 196/172 | 40/-40 | 91/91 | safe | 3→1 | 0/0→0/0 | 145.530442/0/0/118.095565 | 12 |
| 100000 | authority | V0 | -52/-76 | -52/-76 | 0/0 | unsafe | 3→3 | 2/0→2/0 | 132.476764/0/0/17.54613 | 3 |
| 100001 | authority+sofia | V1 | -52/-76 | -52/-76 | 0/0 | unsafe | 3→3 | 2/1→2/1 | 132.476764/0/0/146.043688 | 8 |
| 100010 | authority+maya | V0 | 148/148 | 40/-100 | 49/42 | safe | 5→5 | 0/0→0/0 | 128/0/0/0 | 11 |
| 100011 | authority+maya+sofia | V1 | 148/148 | 40/-100 | 49/42 | safe | 5→5 | 0/1→0/0 | 128/0/0/0 | 13 |
| 100100 | authority+elias | V0 | -52/-76 | -52/-76 | 0/0 | unsafe | 3→3 | 2/1→2/0 | 164.994931/0/0/17.54613 | 6 |
| 100101 | authority+elias+sofia | V1 | -52/-76 | -196/-196 | 0/0 | unsafe | 3→3 | 2/3→2/0 | 164.994931/0/0/146.043688 | 9 |
| 100110 | authority+elias+maya | V0 | 148/148 | 40/-100 | 49/42 | safe | 5→5 | 0/1→0/0 | 128/0/0/0 | 13 |
| 100111 | authority+elias+maya+sofia | V1 | 148/148 | 40/-100 | 49/42 | safe | 5→5 | 0/1→0/0 | 128/0/0/0 | 13 |
| 101000 | authority+daniel | V0 | -52/-76 | -52/-76 | 0/0 | unsafe | 3→3 | 2/0→3/0 | 132.476764/0/0/17.54613 | 4 |
| 101001 | authority+daniel+sofia | V1 | -52/-76 | -52/-76 | 0/0 | unsafe | 3→3 | 2/1→3/1 | 132.476764/0/0/35.514822 | 9 |
| 101010 | authority+daniel+maya | V0 | 148/148 | 40/-40 | 49/49 | safe | 5→5 | 0/0→1/0 | 128/0/0/17.54613 | 11 |
| 101011 | authority+daniel+maya+sofia | V1 | 148/148 | 40/-40 | 49/49 | safe | 5→5 | 0/1→1/0 | 128/0/0/17.54613 | 13 |
| 101100 | authority+daniel+elias | V0 | -52/-76 | -52/-76 | 0/0 | unsafe | 3→3 | 2/1→3/0 | 193.140248/0/0/17.54613 | 7 |
| 101101 | authority+daniel+elias+sofia | V1 | -52/-76 | -196/-196 | 0/0 | unsafe | 3→3 | 2/3→3/0 | 193.140248/0/0/35.514822 | 11 |
| 101110 | authority+daniel+elias+maya | V0 | 148/148 | 40/-40 | 49/49 | safe | 5→5 | 0/1→1/0 | 128/0/0/17.54613 | 13 |
| 101111 | authority+daniel+elias+maya+sofia | V1 | 148/148 | 40/-40 | 49/49 | safe | 5→5 | 0/1→1/2 | 128/0/0/17.54613 | 13 |
| 110000 | authority+beacon | V0 | -52/-76 | -52/-76 | 0/0 | safe | 3→3 | 0/0→1/0 | 132.476764/0/0/138.432428 | 9 |
| 110001 | authority+beacon+sofia | V0 | -52/-76 | -52/-76 | 0/0 | safe | 2→2 | 0/0→1/0 | 132.476764/0/0/138.432428 | 10 |
| 110010 | authority+beacon+maya | V0 | 232/196 | 40/-40 | 80/80 | safe | 1→1 | 0/0→0/0 | 128/0/0/138.432428 | 12 |
| 110011 | authority+beacon+maya+sofia | V0 | 196/172 | 40/-40 | 65/60 | safe | 0→0 | 0/0→0/0 | 128/0/0/138.432428 | 13 |
| 110100 | authority+beacon+elias | V0 | -52/-76 | -52/-76 | 0/0 | safe | 2→2 | 0/0→1/0 | 0/0/0/138.432428 | 10 |
| 110101 | authority+beacon+elias+sofia | V0 | -52/-76 | -52/-76 | 0/0 | safe | 2→2 | 0/0→1/3 | 0/0/0/138.432428 | 11 |
| 110110 | authority+beacon+elias+maya | V0 | 208/184 | 40/-40 | 80/70 | safe | 0→0 | 0/0→0/0 | 128/0/0/138.432428 | 13 |
| 110111 | authority+beacon+elias+maya+sofia | V0 | 196/172 | 40/-40 | 65/65 | safe | 2→0 | 0/0→0/0 | 128/0/0/138.432428 | 13 |
| 111000 | authority+beacon+daniel | V0 | -52/-76 | -52/-76 | 0/0 | safe | 3→3 | 0/0→1/0 | 132.476764/0/0/118.095565 | 9 |
| 111001 | authority+beacon+daniel+sofia | V0 | -52/-76 | -52/-76 | 0/0 | safe | 2→2 | 0/0→1/0 | 132.476764/0/0/118.095565 | 10 |
| 111010 | authority+beacon+daniel+maya | V0 | 232/196 | 40/-40 | 112/112 | safe | 1→1 | 0/0→0/0 | 128/0/0/118.095565 | 12 |
| 111011 | authority+beacon+daniel+maya+sofia | V0 | 196/172 | 40/-40 | 91/84 | safe | 0→0 | 0/0→0/0 | 128/0/0/118.095565 | 13 |
| 111100 | authority+beacon+daniel+elias | V0 | -52/-76 | -52/-76 | 0/0 | safe | 2→2 | 0/0→1/0 | 0/0/0/118.095565 | 10 |
| 111101 | authority+beacon+daniel+elias+sofia | V0 | -52/-76 | -52/-76 | 0/0 | safe | 2→2 | 0/0→1/0 | 0/0/0/118.095565 | 11 |
| 111110 | authority+beacon+daniel+elias+maya | V0 | 208/184 | 40/-40 | 112/98 | safe | 0→0 | 0/0→0/0 | 128/0/0/118.095565 | 13 |
| 111111 | authority+beacon+daniel+elias+maya+sofia | V0 | 196/172 | 40/-40 | 91/91 | safe | 2→0 | 0/0→0/0 | 128/0/0/118.095565 | 13 |

## Minimal, conservative, and strong reproduction

- Minimal sufficient non-focal set: `000010` = Maya.
- Conservative-opening minimal set: `000010` = Maya. The selected R1 pair is hard-safe against Maya-mask R0 provisional labels.
- Common member of all minimal sets: Maya (bounded-search wording only).
- Full-S0 strong-reproduction masks: `111011` (Authority, Beacon, Daniel, Maya, Sofia) and `111111` (all six). They match safe pair `91`, selected `+40/-40`, H2 `0`, and original-label hard safety. `111011` is the smallest strong set; its `fullCurrentSafe` is `84`, so it is not identical to Full S0 on every measured presentation count. `111111` is the exact full-S0 control.
- Maya-only is F0/F2 but not F1/F3/F4: it opens a safe corridor and is safe against the original R0 labels, but selects `+40/-100`, has safe pair `63` and full-current-safe `42`, H2 `6`, PNR/FNR `1/0`, straight/curved `6/6`, route length `2572.823717`, and clearance `28.094869`. Thus it does not reproduce the balanced, shorter, cleaner full-S0 presentation.

## Attribution and propagation

Maya's S0 position is (470, 480); its S1 position is (258.741072, 266.170103). Distances from Maya to the focal Nodes are:

| state | Clara | Thomas | Archive | Lighthouse |
|---|---:|---:|---:|---:|
| S0 | 323.110 | 170.000 | 322.490 | 162.788 |
| S1 | 125.513 | 217.774 | 276.142 | 247.191 |

Maya has direct Relations to Clara and Thomas, and is also adjacent to Beacon in the live graph. Under H1111, the selected R0 bundle is `-52/-76` with Maya as a hard owner. Restoring only Maya changes the R0 frontier to `+148/+148`, with focal Clara as the hard owner; after the existing feedback replay, the selected R1 bundle is `+40/-100` and is hard-safe against the original R0 labels. This is a material direct focal-corridor change: **YES**, but it is not evidence that Clara's exact coordinate or a new placement weight should be adopted.

Relative to H1111 R1, the Maya opening mask changed final Node labels for `lighthouse` and `maya`. It changed these ordinary Relations:

`clara-thomas-supervises`, `clara-thomas-mentors`, `clara-maya`, `elias-clara`, `maya-beacon`, `beacon-self-monitor`, `beacon-self-calibrate`, `thomas-maya-friends`, `beacon-lighthouse-installed-in`.

This makes indirect label-placement cascade **YES** and route propagation **YES**. The locality classification is **T1 direct focal-corridor neighbor**, with T2/T3 propagation also present; it is not T4 graph-distant.

## H1111 to opening frontier

The first material frontier is the Maya coordinate delta itself:

| comparison | result |
|---|---|
| H1111 R1 | 0 safe pairs; -52/-76 |
| Maya-only R0 | +148/+148; Clara owns both selected R0 candidates |
| Maya-only R1 | 63 safe pairs; +40/-100 |
| Full S0 R1 | 91 safe pairs; +40/-40 |

The selected R1 candidate becomes original-label safe at the Maya-only opening, but the opposite-sided balanced bundle still requires additional coordinates, especially the Beacon/Daniel-side geometry seen in the strong masks.

## EN bounded replay

The required bounded replay used H1111, JA minimal `000010`, its immediate failing subset `000000`, the smallest strong JA mask `111011`, and Full S0 `111111`. No EN Production conclusion is drawn from these diagnostic hybrids.

| mask | restored non-focal | V | R0 bundle | R1 bundle | pair | R0-label safety | H2 | PNR/FNR | focal label Δ C/T/A/L | route changes |
|---|---|---|---|---|---:|---|---|---|---:|---:|
| 000000 | - | V0 | -52/-76 | -52/-76 | 0/0 | unsafe | 4→4 | 4/3→4/2 | 43.009396/0/0/130.954429 | 0 |
| 111111 | authority+beacon+daniel+elias+maya+sofia | V0 | 184/208 | 40/-40 | 91/91 | safe | 2→0 | 0/0→2/0 | 128/19.226002/20.20708/130.954429 | 14 |
| 000010 | maya | V0 | 40/-64 | -64/-88 | 0/0 | safe | 6→6 | 1/1→4/0 | 148.544235/0/0/130.954429 | 10 |
| 111011 | authority+beacon+daniel+maya+sofia | V0 | 184/208 | 40/-40 | 91/70 | safe | 0→0 | 0/0→2/0 | 128/19.226002/20.20708/130.954429 | 14 |


JA's minimal Maya-only attribution does **not** transfer to EN: `000010` remains at zero safe pairs and selects `-64/-88`. EN's `111011` opens `91` safe pairs but only `70` are full-current-safe; Full S0 `111111` reaches `91/91`. Locale result: **L4 — EN requires a different or broader non-focal coordinate set**, with JA-specific Maya-only opening behavior.

## Decision

| attribution question | result |
|---|---|
| Single outside-focal Node sufficient to open? | YES — Maya, JA mask `000010` |
| Small local set sufficient? | YES — the single Maya set |
| Indirect label cascade material? | YES |
| Route propagation material? | YES — nine ordinary routes from H1111 R1 |
| Broader topology required? | PARTIAL — not for JA corridor opening; YES for full-S0 presentation |
| Locale-independent? | NO — JA minimal does not open EN |
| Numeric Production placement rule justified? | NO |
| Production Initial Placement change justified? | NO |
| Feedback adoption/change justified? | NO |
| Exact next checkpoint | `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-NONFOCAL-NODE-GEOMETRY-CRITERIA-AUDIT1` |

The next checkpoint is selected only and is not started by this record. Its purpose is to abstract why Maya's coordinate relationship matters without adopting the exact coordinate.

## Cleanup and validation

Diagnostic generator, feedback harness, pair oracle, copied samples, generated JSON/console output, and coordinate snapshots were removed from the temporary worktree. The temporary worktree was removed after validation.

- LiaisonScape: `npm.cmd test` 280/280, `npm.cmd run lint`, `npm.cmd run build`, and `git diff --check`: PASS.
- e2r-spec: `npm.cmd run validate`, `git diff --check`, and cached diff checks: PASS.
- localhost `http://127.0.0.1:5173/e2r-liaison-scape/`: HTTP 200.
- Main dirty samples, preview dirty paths, protected session, and protected knowledge playbook were preserved.
- No push, tag, release, deployment, or publication occurred.
