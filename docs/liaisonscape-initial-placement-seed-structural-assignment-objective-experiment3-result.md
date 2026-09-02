# LiaisonScape Initial-placement Seed Structural-assignment Objective Experiment3

## Checkpoint

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT3`

- Date: 2026-09-02
- Status: Complete — clean execution and result reconciliation
- Result: `CASE 1 / EXACT RESULT 1+2+3+4+5+6+7+8+9+10+11+12+13+14 / DECISION A`
- Next checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-MANIFEST-RECOVERY1`

> **Mandatory inference boundary:** this is `INF-W0/INF-W1` fixture-local
> literal-geometry evidence only. It is not a policy ranking, cross-fixture
> score, Production assignment, or FP1 sufficiency result.

## Exact result and decision

The frozen Design3 matrix executed successfully on a new disposable
Experiment3 clone. All seven cells were computed by one frozen runner:

- Lighthouse: `LH-G0` dominates `LH-G1`; `LH-G0` dominates `LH-G2`;
  `LH-G2` dominates `LH-G1`.
- Ashen Crown: `ASH-G0` dominates `ASH-G1`; `ASH-G0` and `ASH-G2` are
  `PP-INCOMPARABLE`; `ASH-G2` dominates `ASH-G1`.
- K3: the identity control is `PP-PREF-EQUIVALENT`.

The two Experiment2 regressions passed exactly. The four real-fixture
TA2-motif comparisons produced new valid relations, including one
incomparability; they must not be aggregated or converted into a winner.
The K3 control passed with identical mappings and equal objective inputs.

Decision A: **Experiment3 is valid and complete; proceed to the bounded TA3
correspondence-manifest recovery checkpoint.** No runtime, Production,
materializer, sample, or witness-policy change follows from this result.

Yahoo! — the expanded structural-assignment objective matrix executed cleanly.

## Execution surface and reproducibility

The run used a new disposable clone, detached at the accepted LiaisonScape
baseline `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`:

`C:\Users\extra\E2R\e2r-liaison-scape-structural-assignment-objective-experiment3`

The runner and result are untracked research artifacts in:

`experimental/structural-assignment-objective-experiment3/runner.mjs`

`experimental/structural-assignment-objective-experiment3/results.json`

The final runner SHA-256 is
`DE2E155230FB3999ECAAB142AC6E19DFE27816FEE2F87FCD0313494DB993A8F4`.
The runner was frozen before the first substantive result and computes from
the committed authorities and frozen manifests. It does not modify
`src/`, `public/`, `tests/`, or package files.

An earlier run was invalidated before interpretation because it emitted
`D3-INF0=true` despite valid new-cell results. That run's runner SHA was
`B7963546A2A4751281AFE9C16EA0A41A756A4B1CCF42F8C925B7DF10B6BC4CCD`.
The final runner records this invalidation explicitly, reran all seven cells
from scratch, and only the final run is evidence.

## Authorities and frozen witnesses

| Fixture | Authority |
|---|---|
| Lighthouse | LiaisonScape `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, `public/lighthouse-restoration-demo.en.e2r.json`, blob `b96092b0c2b88c6c1ea41c11c1b36dccca3e9726`, raw SHA-256 `C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386` |
| Ashen Crown | e2r-spec `0a8d543a8af4a5ee2ae9b8b69ced319f9b61fc2c`, `examples/ashen-crown.en.e2r.json`, raw SHA-256 `A34326545FAB32A7EBDB6C26E97056B747C50F294F6574FD21B123D341FE338E` |
| K3 | committed complete graph on `a`, `b`, `c`; motif `a|b|c`; one overlap cluster and one true Node orbit |

The provenance-safe labels were TA0/REP-0, TA1/W1,
TA2-degree (`TA2-DEG-W1-OP-v1`), and TA2-motif
(`TA2-MOTIF-W1-OP-v1`). TA1/W1, TA2-degree, and TA2-motif were MAN-5 on
all three fixtures. TA3 remains excluded because its semantics and
operational witness are not frozen.

The exact fixture-local geometry classes and fixed computation representatives
were:

| Fixture | Class | Members | Representative |
|---|---|---|---|
| Lighthouse | LH-G0 | TA0, TA2-degree | TA0 |
| Lighthouse | LH-G1 | TA1 | TA1 |
| Lighthouse | LH-G2 | TA2-motif | TA2-motif |
| Ashen Crown | ASH-G0 | TA0, TA2-degree | TA0 |
| Ashen Crown | ASH-G1 | TA1 | TA1 |
| Ashen Crown | ASH-G2 | TA2-motif | TA2-motif |
| K3 | K3-G0 | TA0, TA1, TA2-degree, TA2-motif | TA0 |

Class identity is exact Node-to-FP1 index equality. Representative precedence
is the non-quality execution convention `TA0 < TA1 < TA2-degree < TA2-motif`.
It does not imply canonicality or quality.

## Hard gates and registered coverage

The run asserted exact source hashes, frozen label mappings, class membership,
representative precedence, unchanged candidate-family semantics, and the
frozen seven-cell matrix. All gates passed. The exact normalized-altitude
formula remained `2*abs(cross)/Lmax^2`, compared as exact rationals by cross
multiplication. FAN-P1 used exact full-circle directed angular gaps with
`g_min` and tied bottleneck pairs; no `atan2`, floating point, epsilon, or
degree/radian conversion was used.

| Fixture | Altitude records | FAN-P1 records | Coverage boundary |
|---|---:|---:|---|
| Lighthouse | 1 | 0 | altitude only |
| Ashen Crown | 7 | 6 | owners darius, elara, garrick, kael, nyra, rowan |
| K3 | 1 | 0 | `k=2` FAN-P1 excluded |

PP-M3 compared each registered record separately. A side dominates only when
all comparable records are equal or favor that side and at least one favors
it. Conflicting records yield `PP-INCOMPARABLE`; no scalar score or global
rank was created.

## Executed cells and class relations

| Cell | Fixture / classes | Type | Relation | Inference |
|---|---|---|---|---|
| D3-LH-G0-G1 | Lighthouse: LH-G0 vs LH-G1 | regression | LEFT-DOMINATES-RIGHT | INF-W1 |
| D3-LH-G0-G2 | Lighthouse: LH-G0 vs LH-G2 | new | LEFT-DOMINATES-RIGHT | INF-W1 |
| D3-LH-G1-G2 | Lighthouse: LH-G1 vs LH-G2 | new | RIGHT-DOMINATES-LEFT | INF-W1 |
| D3-ASH-G0-G1 | Ashen: ASH-G0 vs ASH-G1 | regression | LEFT-DOMINATES-RIGHT | INF-W1 |
| D3-ASH-G0-G2 | Ashen: ASH-G0 vs ASH-G2 | new | PP-INCOMPARABLE | INF-W1 |
| D3-ASH-G1-G2 | Ashen: ASH-G1 vs ASH-G2 | new | RIGHT-DOMINATES-LEFT | INF-W1 |
| D3-K3-ID-G0-MOTIF | K3: K3-G0 vs K3-G0 | identity control | PP-PREF-EQUIVALENT | INF-W0 |

Regression oracle checks were `TA0-DOMINATES-W1` for both Lighthouse and
Ashen Crown, and both passed. K3 had exact mapping identity and equal
altitude inputs; FAN-P1 was not applicable and the identity relation passed.

## Exact normalized-altitude records

These are exact rational inputs and per-record directions, not a scalar
aggregation.

| Cell | Motif | Left | Right | Direction |
|---|---|---:|---:|---|
| LH G0/G1 | clara\|maya\|thomas | 8/39 | 2/51 | LEFT_BETTER |
| LH G0/G2 | clara\|maya\|thomas | 8/39 | 9/85 | LEFT_BETTER |
| LH G1/G2 | clara\|maya\|thomas | 2/51 | 9/85 | RIGHT_BETTER |
| ASH G0/G1 | darius\|elara\|kael | 9/85 | 9/337 | LEFT_BETTER |
| ASH G0/G1 | darius\|elara\|nyra | 54/265 | 18/277 | LEFT_BETTER |
| ASH G0/G1 | darius\|kael\|rowan | 36/325 | 3/50 | LEFT_BETTER |
| ASH G0/G1 | darius\|nyra\|rowan | 27/290 | 6/101 | LEFT_BETTER |
| ASH G0/G1 | elara\|garrick\|kael | 2/15 | 2/51 | LEFT_BETTER |
| ASH G0/G1 | elara\|selene\|vhalgrim | 14/81 | 63/724 | LEFT_BETTER |
| ASH G0/G1 | garrick\|kael\|mira | 6/53 | 54/505 | LEFT_BETTER |
| ASH G0/G2 | darius\|elara\|kael | 9/85 | 9/85 | EQUAL |
| ASH G0/G2 | darius\|elara\|nyra | 54/265 | 18/97 | LEFT_BETTER |
| ASH G0/G2 | darius\|kael\|rowan | 36/325 | 3/26 | RIGHT_BETTER |
| ASH G0/G2 | darius\|nyra\|rowan | 27/290 | 6/65 | LEFT_BETTER |
| ASH G0/G2 | elara\|garrick\|kael | 2/15 | 2/15 | EQUAL |
| ASH G0/G2 | elara\|selene\|vhalgrim | 14/81 | 63/580 | LEFT_BETTER |
| ASH G0/G2 | garrick\|kael\|mira | 6/53 | 54/325 | RIGHT_BETTER |
| ASH G1/G2 | darius\|elara\|kael | 9/337 | 9/85 | RIGHT_BETTER |
| ASH G1/G2 | darius\|elara\|nyra | 18/277 | 18/97 | RIGHT_BETTER |
| ASH G1/G2 | darius\|kael\|rowan | 3/50 | 3/26 | RIGHT_BETTER |
| ASH G1/G2 | darius\|nyra\|rowan | 6/101 | 6/65 | RIGHT_BETTER |
| ASH G1/G2 | elara\|garrick\|kael | 2/51 | 2/15 | RIGHT_BETTER |
| ASH G1/G2 | elara\|selene\|vhalgrim | 63/724 | 63/580 | RIGHT_BETTER |
| ASH G1/G2 | garrick\|kael\|mira | 54/505 | 54/325 | RIGHT_BETTER |
| K3 | a\|b\|c | 1/4 | 1/4 | EQUAL |

## Exact FAN-P1 records

Each row records `g_min` using the exact dot product and norm-product
comparator. The class is `0-pi` for every applicable record. `ties` are the
exact directed bottleneck pairs; these are diagnostic witnesses, not extra
evidence points.

| Cell | Owner | Left `dot / norm` | Right `dot / norm` | Ties L / R | Direction |
|---|---|---:|---:|---|---|
| ASH G0/G1 | darius | 1644 / 2714400 | 642 / 412488 | nyra>rowan / kael>elara | LEFT_BETTER |
| ASH G0/G1 | elara | 522 / 275400 | 706 / 498760 | darius>garrick / darius>kael | LEFT_BETTER |
| ASH G0/G1 | garrick | 558 / 314280 | 1746 / 3051432 | elara>kael / kael>elara | LEFT_BETTER |
| ASH G0/G1 | kael | 606 / 370152 | 582 / 339048 | garrick>mira / garrick>darius | LEFT_BETTER |
| ASH G0/G1 | nyra | 1740 / 3100500 | 1992 / 3988800 | elara>darius / darius>elara | LEFT_BETTER |
| ASH G0/G1 | rowan | 2740 / 7540000 | 2556 / 6544800 | kael>darius / darius>kael | LEFT_BETTER |
| ASH G0/G2 | darius | 1644 / 2714400 | 738 / 547560 | nyra>rowan / nyra>rowan | RIGHT_BETTER |
| ASH G0/G2 | elara | 522 / 275400 | 7672 / 59113600 | darius>garrick / selene>vhalgrim | LEFT_BETTER |
| ASH G0/G2 | garrick | 558 / 314280 | 558 / 314280 | elara>kael / elara>kael | EQUAL |
| ASH G0/G2 | kael | 606 / 370152 | 2460 / 6084000 | garrick>mira / rowan>mira | LEFT_BETTER |
| ASH G0/G2 | nyra | 1740 / 3100500 | 840 / 726336 | elara>darius / elara>darius | RIGHT_BETTER |
| ASH G0/G2 | rowan | 2740 / 7540000 | 1476 / 2190240 | kael>darius / kael>darius | RIGHT_BETTER |
| ASH G1/G2 | darius | 642 / 412488 | 738 / 547560 | kael>elara / nyra>rowan | RIGHT_BETTER |
| ASH G1/G2 | elara | 706 / 498760 | 7672 / 59113600 | darius>kael / selene>vhalgrim | RIGHT_BETTER |
| ASH G1/G2 | garrick | 1746 / 3051432 | 558 / 314280 | kael>elara / elara>kael | RIGHT_BETTER |
| ASH G1/G2 | kael | 582 / 339048 | 2460 / 6084000 | garrick>darius / rowan>mira | RIGHT_BETTER |
| ASH G1/G2 | nyra | 1992 / 3988800 | 840 / 726336 | darius>elara / elara>darius | RIGHT_BETTER |
| ASH G1/G2 | rowan | 2556 / 6544800 | 1476 / 2190240 | darius>kael / kael>darius | RIGHT_BETTER |

## Identity, aliases, and evidence multiplicity

The following exact same-class relations were implied as
`PP-PREF-EQUIVALENT`, without substantive duplicate execution:

- Lighthouse TA0 vs TA2-degree;
- Ashen Crown TA0 vs TA2-degree; and
- all six conceptual label pairs on K3.

The eight non-identity alias records were retained with
`independentEvidence=false` and `evidenceMultiplicity=1`:

| Fixture / label pair | Source cell | Source geometry | Expanded relation |
|---|---|---|---|
| Lighthouse TA0 vs TA1 | D3-LH-G0-G1 | LH-G0 vs LH-G1 | LEFT-DOMINATES-RIGHT |
| Lighthouse TA1 vs TA2-degree | D3-LH-G0-G1 | LH-G0 vs LH-G1 | RIGHT-DOMINATES-LEFT |
| Lighthouse TA0 vs TA2-motif | D3-LH-G0-G2 | LH-G0 vs LH-G2 | LEFT-DOMINATES-RIGHT |
| Lighthouse TA2-degree vs TA2-motif | D3-LH-G0-G2 | LH-G0 vs LH-G2 | LEFT-DOMINATES-RIGHT |
| Ashen TA0 vs TA1 | D3-ASH-G0-G1 | ASH-G0 vs ASH-G1 | LEFT-DOMINATES-RIGHT |
| Ashen TA1 vs TA2-degree | D3-ASH-G0-G1 | ASH-G0 vs ASH-G1 | RIGHT-DOMINATES-LEFT |
| Ashen TA0 vs TA2-motif | D3-ASH-G0-G2 | ASH-G0 vs ASH-G2 | PP-INCOMPARABLE |
| Ashen TA2-degree vs TA2-motif | D3-ASH-G0-G2 | ASH-G0 vs ASH-G2 | PP-INCOMPARABLE |

Reverse-orientation aliases invert only dominance. An alias is not a second
experiment, replication, win, or independent evidence point.

## Informativeness and claim boundary

| Flag | Value | Meaning |
|---|---|---|
| D3-INF0 | false | result is not identity/regression-only |
| D3-INF1 | true | at least one new literal-geometry relation exists |
| D3-INF2 | true | at least one new class pair is incomparable |
| D3-INF3 | false | no new different-geometry pair is equivalent |
| D3-INF4 | false | no exactness or integrity blocker |

The highest supported inference remains `INF-W1`: fixture-local relations
between frozen literal witnesses and exact geometry classes. The result does
not authorize a claim that a policy is superior, that TA2-motif should be
selected for Production, that FP1 is sufficient, or that one fixture's
relation generalizes to another fixture. No cross-fixture aggregation,
majority, score, tournament, or ranking is reported.

TA2-degree remains semantically distinct even where it is literally redundant
with TA0 on the current primary fixtures. TA3 remains excluded for missing
semantics and operational witness, not because of a quality rejection.

## Closure and next responsibility

Experiment3 is valid and complete. Its evidence is sufficient to close the
deduplicated structural-assignment objective execution checkpoint, while
preserving the explicit `PP-INCOMPARABLE` outcome and all evidence boundaries.
The smallest next bounded responsibility is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA3-CORRESPONDENCE-MANIFEST-RECOVERY1`

That next checkpoint must recover or reject the missing TA3 correspondence
manifest before any TA3 comparison is attempted. No Production Initial
Placement, routing, label, feedback, materializer, or source change was made;
no push, tag, release, deploy, or publication was performed.
