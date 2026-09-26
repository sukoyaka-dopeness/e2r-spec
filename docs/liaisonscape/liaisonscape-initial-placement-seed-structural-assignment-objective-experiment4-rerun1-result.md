# LiaisonScape Initial-placement Seed Structural-assignment Objective Experiment4 Rerun1 Result

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-RERUN1`
- Date: 2026-09-02
- Status: Complete — clean rerun; research-only; no Production selection
- Result: `CASE 1 / DECISION A`

## Mandatory inference banner

```text
INF-W0 / INF-W1 ONLY
FIXTURE-LOCAL LITERAL-WITNESS / LITERAL-GEOMETRY / EXACT-OBJECTIVE EVIDENCE
NO POLICY RANKING / NO CROSS-FIXTURE SCORE / NO WINNER / NO PRODUCTION SELECTION
```

## Exact result and decision

The corrected preflight passed the exact `4/3/2` geometry partition and
`45/15/30/10` accounting. All six Experiment3 regression cells matched their
oracles, the K3 orbit control returned `PP-PREF-EQUIVALENT`, and all three new
Lighthouse TA3-Forward cells returned exact non-unknown PP-M3 relations.

The exact new Lighthouse relations are:

| Cell | Representative pair | Relation |
| --- | --- | --- |
| `D4-LH-G0-G3` | TA0/REP-0 vs TA3-FWD-W1-OP-v1 | `LEFT-DOMINATES-RIGHT` |
| `D4-LH-G1-G3` | TA1/W1 vs TA3-FWD-W1-OP-v1 | `LEFT-DOMINATES-RIGHT` |
| `D4-LH-G2-G3` | TA2-MOTIF-W1-OP-v1 vs TA3-FWD-W1-OP-v1 | `LEFT-DOMINATES-RIGHT` |

**Decision A:** Rerun1 is valid and complete. The next separately authorized
checkpoint is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-INTERPRETATION1`

The result is evidence-gated as follows:

```text
Bingo! — corrected geometry, regression, orbit, exactness, alias, and
evidence gates passed.
Yahoo! — Experiment4 Rerun1 completed cleanly.
```

The celebration is about experiment integrity only. It does not celebrate a
policy winner or authorize a Production change.

## Reconciliation1 authority

The preceding reconciliation (`ff5bbc4`) established that Ashen Crown
TA1/W1 and TA3 Forward have the same keyed `Node -> FP1Index` map despite
opposite presentation row order. This Rerun1 uses that corrected authority:

| Fixture | Classes | Class sizes |
| --- | ---: | --- |
| Lighthouse | 4 | 2, 1, 2, 1 |
| Ashen Crown | 3 | 2, 2, 2 |
| K3 | 2 | 5, 1 |

TA3 Forward is a new literal geometry class on Lighthouse and K3, and an
Ashen TA1/W1 geometry alias. It remains provenance-distinct and semantically
distinct; literal identity is not semantic policy identity.

## Failed Experiment4 blackout

The failed surface was inspected read-only and remains immutable:

`C:\Users\extra\E2R\e2r-liaison-scape-structural-assignment-objective-experiment4`

Its objective artifacts were not used as expectations, comparator oracles,
regression repair, new-cell prediction, or matrix choice. Their hashes remain:

| Artifact | SHA-256 |
| --- | --- |
| `runner.mjs` | `B2FF75B80244201F0BD9AFC5DA4C7443F854140B29C9FEB2B9C5E6F810656BAC` |
| `raw-results.json` | `C29191763BF14A90E92F0507C9C56806284A6DF54DC89D4A9C4C994FED89E94B` |
| `results.json` | `D603BA2EFD16ED1C2C85A1047AA3069A9604297D21532DE54BB9F284B6E127D6` |

## Source and clean rerun surface

The Production baseline was `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.
The new disposable clone is:

`C:\Users\extra\E2R\e2r-liaison-scape-structural-assignment-objective-experiment4-rerun1`

It is detached at that baseline and retains only untracked experimental
artifacts. No `src/`, `public/`, `tests/`, `package.json`, or
`package-lock.json` tracked diff exists. The runner and result paths are:

```text
experimental/structural-assignment-objective-experiment4-rerun1/runner.mjs
experimental/structural-assignment-objective-experiment4-rerun1/raw-results.json
experimental/structural-assignment-objective-experiment4-rerun1/results.json
```

Hashes for the final clean run:

| Artifact | SHA-256 |
| --- | --- |
| `runner.mjs` | `ACF71E96FD88EAFE9ADA992347F03236B789F70404151594F587E1CBBC7BF50C` |
| `raw-results.json` | `657CE4907222D932B5EE5CEA29830194893FD1C5533CBB05518F21713F8CCD07` |
| `results.json` | `573F743CB31584ACA6126481BB46AEE7A7594B05157DBE38B267585CC5F4F361` |

The runner was frozen before the first substantive objective result. Two
pre-objective implementation attempts were abandoned before writing objective
evidence; the final clean run was executed from scratch after the corrections.

## Fixture authorities and witness manifests

| Fixture | Authority | Raw SHA-256 |
| --- | --- | --- |
| Lighthouse | LiaisonScape commit `fd563340...`, `public/lighthouse-restoration-demo.en.e2r.json`, blob `b96092b0c2b88c6c1ea41c11c1b36dccca3e9726` | `C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386` |
| Ashen Crown | e2r-spec commit `0a8d543a8af4a5ee2ae9b8b69ced319f9b61fc2c`, `examples/ashen-crown.en.e2r.json` | `A34326545FAB32A7EBDB6C26E97056B747C50F294F6574FD21B123D341FE338E` |
| K3 | committed complete graph `a,b,c`, motif `a|b|c`, one true Node orbit | not applicable |

The exact six labels were used for every fixture:

```text
TA0/REP-0
TA1/W1
TA2-DEG-W1-OP-v1
TA2-MOTIF-W1-OP-v1
TA3-FWD-W1-OP-v1
TA3-REV-W1-OP-v1
```

All six manifests were domain-complete, injective, deterministic, and passed
the exact GEO-0/GEO-3 hard gate. No remapping or new witness was introduced.

## GEOM-FP-v1 and geometry classes

`GEOM-FP-v1` validates the expected Node domain exactly, rejects missing,
extra, and duplicate Nodes, sorts Node IDs by Unicode/codepoint order, and
serializes `NodeID:FP1Index|...`. Equality is keyed Node-to-index equality;
presentation row order is ignored. The self-checks for same order, reversed
rows, arbitrary permutation, changed index, malformed domain, deterministic
serialization, and deterministic SHA all passed.

The exact classes were:

| Fixture | Class | Members |
| --- | --- | --- |
| Lighthouse | `LH-G0` | TA0/REP-0; TA2-DEG-W1-OP-v1 |
| Lighthouse | `LH-G1` | TA1/W1 |
| Lighthouse | `LH-G2` | TA2-MOTIF-W1-OP-v1; TA3-REV-W1-OP-v1 |
| Lighthouse | `LH-G3` | TA3-FWD-W1-OP-v1 |
| Ashen Crown | `ASH-G0` | TA0/REP-0; TA2-DEG-W1-OP-v1 |
| Ashen Crown | `ASH-G1` | TA1/W1; TA3-FWD-W1-OP-v1 |
| Ashen Crown | `ASH-G2` | TA2-MOTIF-W1-OP-v1; TA3-REV-W1-OP-v1 |
| K3 | `K3-G0` | TA0/REP-0; TA1/W1; TA2-DEG-W1-OP-v1; TA2-MOTIF-W1-OP-v1; TA3-REV-W1-OP-v1 |
| K3 | `K3-G1` | TA3-FWD-W1-OP-v1 |

Representatives were selected by non-quality precedence: TA0, TA1,
TA2-degree, TA2-motif, TA3-Forward, TA3-Reverse. Representative choice has
no quality meaning.

## Exact objective contracts and self-checks

Normalized altitude used exact rational
`2*abs(cross(B-A,C-A))/Lmax^2`, with exact integer/rational arithmetic and
cross multiplication. FAN-P1 was used only on its registered Ashen Crown
records, with exact full-circle directed angular gaps: half-plane order, exact
cross signs, normalized-cosine comparison, cyclic wrap, `g_min`, and ties.
No `atan2`, square root, epsilon, rounded angle, or float authority was used.

PP-M3 combined each registered record separately using only the legal relation
outputs. The following runner self-check groups all passed:

| Self-check group | Result |
| --- | --- |
| rational equality and ordering | PASS |
| altitude equality and direction | PASS |
| same/opposite ray and directed-gap classes | PASS |
| complementary angles and positive scaling | PASS |
| cyclic wrap and tied bottlenecks | PASS |
| PP-M3 equal/left/right/incomparable/unknown | PASS |
| GEOM-FP keyed row-order invariance and malformed input rejection | PASS |
| alias orientation inversion | PASS |
| evidence multiplicity | PASS |
| pair expansion and K3 permutation/orbit control | PASS |

## Coverage and exact records

| Fixture | Normalized-altitude records per cell | FAN-P1 records per cell | Boundary |
| --- | ---: | ---: | --- |
| Lighthouse | 1 | 0 | registered altitude |
| Ashen Crown | 7 | 6 | FAN owners: darius, elara, garrick, kael, nyra, rowan |
| K3 | 1 | 0 | k=2 FAN-P1 unregistered |

The complete exact rational altitude and FAN-P1 records are retained in
`raw-results.json` and `results.json`. Key exact new-cell altitude records:

| Cell | Motif | Left | Right | Direction |
| --- | --- | ---: | ---: | --- |
| `D4-LH-G0-G3` | `clara|maya|thomas` | `8/39` | `9/337` | LEFT_BETTER |
| `D4-LH-G1-G3` | `clara|maya|thomas` | `2/51` | `9/337` | LEFT_BETTER |
| `D4-LH-G2-G3` | `clara|maya|thomas` | `9/85` | `9/337` | LEFT_BETTER |

The complete altitude record set is:

| Cell | Motif | Left | Right | Direction |
| --- | --- | ---: | ---: | --- |
| `D4-LH-G0-G1` | `clara|maya|thomas` | `8/39` | `2/51` | LEFT_BETTER |
| `D4-LH-G0-G2` | `clara|maya|thomas` | `8/39` | `9/85` | LEFT_BETTER |
| `D4-LH-G1-G2` | `clara|maya|thomas` | `2/51` | `9/85` | RIGHT_BETTER |
| `D4-LH-G0-G3` | `clara|maya|thomas` | `8/39` | `9/337` | LEFT_BETTER |
| `D4-LH-G1-G3` | `clara|maya|thomas` | `2/51` | `9/337` | LEFT_BETTER |
| `D4-LH-G2-G3` | `clara|maya|thomas` | `9/85` | `9/337` | LEFT_BETTER |
| `D4-ASH-G0-G1` | `darius|elara|kael` | `9/85` | `9/337` | LEFT_BETTER |
| `D4-ASH-G0-G1` | `darius|elara|nyra` | `54/265` | `18/277` | LEFT_BETTER |
| `D4-ASH-G0-G1` | `darius|kael|rowan` | `36/325` | `3/50` | LEFT_BETTER |
| `D4-ASH-G0-G1` | `darius|nyra|rowan` | `27/290` | `6/101` | LEFT_BETTER |
| `D4-ASH-G0-G1` | `elara|garrick|kael` | `2/15` | `2/51` | LEFT_BETTER |
| `D4-ASH-G0-G1` | `elara|selene|vhalgrim` | `14/81` | `63/724` | LEFT_BETTER |
| `D4-ASH-G0-G1` | `garrick|kael|mira` | `6/53` | `54/505` | LEFT_BETTER |
| `D4-ASH-G0-G2` | `darius|elara|kael` | `9/85` | `9/85` | EQUAL |
| `D4-ASH-G0-G2` | `darius|elara|nyra` | `54/265` | `18/97` | LEFT_BETTER |
| `D4-ASH-G0-G2` | `darius|kael|rowan` | `36/325` | `3/26` | RIGHT_BETTER |
| `D4-ASH-G0-G2` | `darius|nyra|rowan` | `27/290` | `6/65` | LEFT_BETTER |
| `D4-ASH-G0-G2` | `elara|garrick|kael` | `2/15` | `2/15` | EQUAL |
| `D4-ASH-G0-G2` | `elara|selene|vhalgrim` | `14/81` | `63/580` | LEFT_BETTER |
| `D4-ASH-G0-G2` | `garrick|kael|mira` | `6/53` | `54/325` | RIGHT_BETTER |
| `D4-ASH-G1-G2` | `darius|elara|kael` | `9/337` | `9/85` | RIGHT_BETTER |
| `D4-ASH-G1-G2` | `darius|elara|nyra` | `18/277` | `18/97` | RIGHT_BETTER |
| `D4-ASH-G1-G2` | `darius|kael|rowan` | `3/50` | `3/26` | RIGHT_BETTER |
| `D4-ASH-G1-G2` | `darius|nyra|rowan` | `6/101` | `6/65` | RIGHT_BETTER |
| `D4-ASH-G1-G2` | `elara|garrick|kael` | `2/51` | `2/15` | RIGHT_BETTER |
| `D4-ASH-G1-G2` | `elara|selene|vhalgrim` | `63/724` | `63/580` | RIGHT_BETTER |
| `D4-ASH-G1-G2` | `garrick|kael|mira` | `54/505` | `54/325` | RIGHT_BETTER |
| `D4-K3-G0-G1` | `a|b|c` | `1/4` | `1/4` | EQUAL |

The complete registered FAN-P1 record set is:

| Cell | Owner | Left `g_min` | Right `g_min` | Direction |
| --- | --- | --- | --- | --- |
| `D4-ASH-G0-G1` | darius | `0-pi:1644/2714400` | `0-pi:642/412488` | LEFT_BETTER |
| `D4-ASH-G0-G1` | elara | `0-pi:522/275400` | `0-pi:706/498760` | LEFT_BETTER |
| `D4-ASH-G0-G1` | garrick | `0-pi:558/314280` | `0-pi:1746/3051432` | LEFT_BETTER |
| `D4-ASH-G0-G1` | kael | `0-pi:606/370152` | `0-pi:582/339048` | LEFT_BETTER |
| `D4-ASH-G0-G1` | nyra | `0-pi:1740/3100500` | `0-pi:1992/3988800` | LEFT_BETTER |
| `D4-ASH-G0-G1` | rowan | `0-pi:2740/7540000` | `0-pi:2556/6544800` | LEFT_BETTER |
| `D4-ASH-G0-G2` | darius | `0-pi:1644/2714400` | `0-pi:738/547560` | RIGHT_BETTER |
| `D4-ASH-G0-G2` | elara | `0-pi:522/275400` | `0-pi:7672/59113600` | LEFT_BETTER |
| `D4-ASH-G0-G2` | garrick | `0-pi:558/314280` | `0-pi:558/314280` | EQUAL |
| `D4-ASH-G0-G2` | kael | `0-pi:606/370152` | `0-pi:2460/6084000` | LEFT_BETTER |
| `D4-ASH-G0-G2` | nyra | `0-pi:1740/3100500` | `0-pi:840/726336` | RIGHT_BETTER |
| `D4-ASH-G0-G2` | rowan | `0-pi:2740/7540000` | `0-pi:1476/2190240` | RIGHT_BETTER |
| `D4-ASH-G1-G2` | darius | `0-pi:642/412488` | `0-pi:738/547560` | RIGHT_BETTER |
| `D4-ASH-G1-G2` | elara | `0-pi:706/498760` | `0-pi:7672/59113600` | RIGHT_BETTER |
| `D4-ASH-G1-G2` | garrick | `0-pi:1746/3051432` | `0-pi:558/314280` | RIGHT_BETTER |
| `D4-ASH-G1-G2` | kael | `0-pi:582/339048` | `0-pi:2460/6084000` | RIGHT_BETTER |
| `D4-ASH-G1-G2` | nyra | `0-pi:1992/3988800` | `0-pi:840/726336` | RIGHT_BETTER |
| `D4-ASH-G1-G2` | rowan | `0-pi:2556/6544800` | `0-pi:1476/2190240` | RIGHT_BETTER |

The exact Ashen FAN-P1 records are present for all three Ashen cells and all
six registered owners in the raw result. Their composed relations are shown
below; no unregistered K3 fan-out record was invented.

## Six regression results

All six matched the Experiment3 oracle. These are regression checks, not
independent replication claims.

| Cell | Experiment3 oracle | Rerun1 relation | Match |
| --- | --- | --- | --- |
| `D4-LH-G0-G1` | LEFT-DOMINATES-RIGHT | LEFT-DOMINATES-RIGHT | PASS |
| `D4-LH-G0-G2` | LEFT-DOMINATES-RIGHT | LEFT-DOMINATES-RIGHT | PASS |
| `D4-LH-G1-G2` | RIGHT-DOMINATES-LEFT | RIGHT-DOMINATES-LEFT | PASS |
| `D4-ASH-G0-G1` | LEFT-DOMINATES-RIGHT | LEFT-DOMINATES-RIGHT | PASS |
| `D4-ASH-G0-G2` | PP-INCOMPARABLE | PP-INCOMPARABLE | PASS |
| `D4-ASH-G1-G2` | RIGHT-DOMINATES-LEFT | RIGHT-DOMINATES-LEFT | PASS |

## K3 orbit control

K3 compares `TA0/REP-0` (`a:0,b:1,c:2`) with TA3 Forward
(`a:2,b:1,c:0`). They are literally different mappings but one semantic Node
orbit. The exact altitude records are `1/4` versus `1/4`, yielding
`PP-PREF-EQUIVALENT`. This is an orbit-control result and substantive quality
evidence is false.

## Identity and alias accounting

The 15 identity-implied relations are all
`PP-PREF-EQUIVALENT`, `executed=false`, `identityImplied=true`, and
`independentEvidence=false`:

| Fixture | Identity-implied pairs |
| --- | --- |
| Lighthouse | TA0/REP-0–TA2-DEG-W1-OP-v1; TA2-MOTIF-W1-OP-v1–TA3-REV-W1-OP-v1 |
| Ashen Crown | TA0/REP-0–TA2-DEG-W1-OP-v1; TA1/W1–TA3-FWD-W1-OP-v1; TA2-MOTIF-W1-OP-v1–TA3-REV-W1-OP-v1 |
| K3 | all 10 unordered pairs within the five-member G0 class |

The 30 cross-class aliases expand from the 10 unique execution cells:

| Source cells | Alias count |
| --- | ---: |
| Lighthouse `G0-G1`, `G0-G2`, `G1-G2`, `G0-G3`, `G1-G3`, `G2-G3` | 13 |
| Ashen Crown `G0-G1`, `G0-G2`, `G1-G2` | 12 |
| K3 `G0-G1` | 5 |
| Total | 30 |

Every alias carries its `sourceCellId`, `sourceGeometryPair`,
`sourceEvidenceMultiplicity=1`, `independentEvidence=false`, and
`evidenceMultiplicity=1`. Reversed directional aliases exchange left/right;
equivalence, incomparability, unknown, and not-applicable remain invariant.
Ashen TA3 Forward is therefore an alias of TA1/W1, never duplicate evidence.

## Accounting and D4-INF

```text
45 conceptual fixture-local pairs
= 15 identity-implied
+ 30 cross-class

10 executed geometry-class cells
= 6 regression
+ 3 new Lighthouse TA3-Forward
+ 1 K3 orbit control
```

Duplicate conceptual pairs: `0`. Missing conceptual pairs: `0`.

```text
D4-INF0 = false
D4-INF1 = true
D4-INF2 = false
D4-INF3 = false
D4-INF4 = false
```

The maximum inference remains `INF-W1`. No cross-fixture aggregation,
scalarization, winner, policy ranking, or Production selection is permitted.

## CASE and closure

`CASE 1` is selected because all corrected integrity and objective gates pass.
`Decision A` is selected because Rerun1 is valid and complete; interpretation
is the next checkpoint, not an automatic continuation.

Production changes: **NO**.

No source, sample, UI, routing, settling, witness mapping, Core, Extension,
schema, or `ai-knowledge` change was made. The protected Session, original
LiaisonScape dirty samples, failed Experiment4 clone, Experiment1/2/3
surfaces, routing preview, and residual shells were preserved.
