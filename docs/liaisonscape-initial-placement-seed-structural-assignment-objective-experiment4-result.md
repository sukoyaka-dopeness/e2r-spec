# LiaisonScape Initial-placement Seed Structural-assignment Objective Experiment4 Result

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4`
- Date: 2026-09-02
- Status: **Blocked before objective execution**
- Preceding Design4: commit `b32481b`
- Disposable surface: `C:\Users\extra\E2R\e2r-liaison-scape-structural-assignment-objective-experiment4`

> INF-W0 / INF-W1 ONLY
>
> FIXTURE-LOCAL · LITERAL-WITNESS / LITERAL-GEOMETRY · PREFLIGHT EVIDENCE
>
> NO OBJECTIVE RESULT · NO POLICY RANKING · NO CROSS-FIXTURE SCORE · NO
> WINNER · NO PRODUCTION SELECTION

## Result

Experiment4 did not reach objective execution. The mandatory preflight
recomputed the literal Node-to-FP1 geometry classes from the six frozen witness
manifests and found a Design4 integrity mismatch:

```text
Design4 expected classes: 4 / 4 / 2
Recomputed classes:       4 / 3 / 2
```

Lighthouse and K3 match Design4. Ashen Crown does not: its recomputed class
partition places `TA1/W1` and `TA3-FWD-W1-OP-v1` in the same literal geometry
class. This directly contradicts Design4's required Ashen `G3` singleton and
its statement that TA3-Forward differs from TA1 on all fixtures.

The instruction requires stopping before the objective when the class
recomputation differs. Therefore no regression, K3 orbit-control, or new
TA3-Forward cell is evidence from this checkpoint.

## Preflight exact record

| Fixture | Expected class count | Recomputed class count | Recomputed partition | Status |
| --- | ---: | ---: | --- | --- |
| Lighthouse | 4 | 4 | G0 `{TA0, TA2-degree}`; G1 `{TA1}`; G2 `{TA2-motif, TA3-Reverse}`; G3 `{TA3-Forward}` | PASS |
| Ashen Crown | 4 | 3 | G0 `{TA0, TA2-degree}`; observed G1 `{TA1, TA3-Forward}`; G2 `{TA2-motif, TA3-Reverse}` | **FAIL** |
| K3 | 2 | 2 | G0 `{TA0, TA1, TA2-degree, TA2-motif, TA3-Reverse}`; G1 `{TA3-Forward}` | PASS |

The exact conflicting Ashen fingerprints are:

```text
TA1/W1:             ilyan:0, vhalgrim:1, selene:2, mira:3, rowan:4,
                    nyra:5, garrick:6, darius:7, kael:8, elara:9
TA3-FWD-W1-OP-v1:   ilyan:0, vhalgrim:1, selene:2, mira:3, rowan:4,
                    nyra:5, garrick:6, darius:7, kael:8, elara:9
```

This is a literal mapping equality under the Design4 identity definition. It
does not infer semantic policy identity or quality equivalence; it is a
preflight blocker that must be reconciled before any objective computation.

## Authorities and frozen witnesses

| Fixture | Authority | Raw SHA-256 |
| --- | --- | --- |
| Lighthouse | LiaisonScape `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`: `public/lighthouse-restoration-demo.en.e2r.json` | `C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386` |
| Ashen Crown | e2r-spec `0a8d543a8af4a5ee2ae9b8b69ced319f9b61fc2c`: `examples/ashen-crown.en.e2r.json` | `A34326545FAB32A7EBDB6C26E97056B747C50F294F6574FD21B123D341FE338E` |
| K3 | committed synthetic complete graph `a-b`, `a-c`, `b-c` | not applicable |

The six labels used by preflight were exactly:

```text
TA0/REP-0
TA1/W1
TA2-DEG-W1-OP-v1
TA2-MOTIF-W1-OP-v1
TA3-FWD-W1-OP-v1
TA3-REV-W1-OP-v1
```

All six manifests were reconstructed from the frozen operational witness
records, and all manifest mappings passed injectivity, finite/distinct, and
GEO-0/GEO-3 hard-gate checks. The failure is specifically the expected-vs-
observed class partition.

## Counts and execution boundary

The six-label conceptual universe is still 15 unordered pairs per fixture and
45 fixture-local pairs in total. However, the required `4/4/2` class partition
did not pass, so the Design4 `14 identity-implied + 31 cross-class alias = 45`
and `13 executed cells` accounting cannot be certified for this run. No
objective cell was emitted:

```text
executedCells: 0
regressionCells: 0
newCells: 0
orbitControls: 0
identityImpliedRelations: 0
crossClassAliasRelations: 0
```

The correct next step is reconciliation of the Design4 expected class table
against the TA3 operational witness record, not a manually repaired mapping.

## Runner and invalidated runs

The preflight-only final runner SHA-256 is:

```text
B2FF75B80244201F0BD9AFC5DA4C7443F854140B29C9FEB2B9C5E6F810656BAC
```

The final preflight raw-results SHA-256 is:

```text
C29191763BF14A90E92F0507C9C56806284A6DF54DC89D4A9C4C994FED89E94B
```

Earlier emitted artifacts were invalidated and are recorded in the final
`results.json`:

- `77636E...`: alias orientation was incomplete.
- `CEAC41...`: objective was computed before the literal class mismatch was
  enforced.

The final `results.json` is a research-only preflight failure record. It does
not contain objective evidence or a Production schema.

## Objective coverage and self-check boundary

The registered coverage was reconciled but not evaluated:

| Fixture | Normalized altitude records | FAN-P1 records | Boundary |
| --- | ---: | ---: | --- |
| Lighthouse | 1 | 0 | altitude only |
| Ashen Crown | 7 | 6 | owners darius, elara, garrick, kael, nyra, rowan |
| K3 | 1 | 0 | `k=2` FAN unregistered |

Fixture authority hashes, witness identity construction, mapping injectivity,
GEO-0/GEO-3, and literal class recomputation ran before the stop. Objective
self-checks, PP-M3 cell comparison, alias expansion, orientation audit,
evidence multiplicity audit, exact altitude records, exact FAN-P1 records,
regression comparison, and K3 permutation equality were **NOT RUN** because
the class gate failed.

No `sqrt`, `atan2`, epsilon, rounded angle, float authority, scalar score,
coverage extension, comparator redesign, or cross-fixture aggregation was
used.

## CASE and Decision

**CASE 5** is selected: geometry class / manifest / pair-count / alias
integrity failed at the mandatory pre-objective class gate.

**Decision E** is selected. The next checkpoint is:

```text
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-INTEGRITY-RECONCILIATION1
```

No `CASE 1` celebration is authorized. The run is not an objective completion.

## Claim and Production boundary

The maximum retained inference ceiling is `INF-W1`; this checkpoint adds no
new quality inference. `D4-INF4=true` and `D4-INF0/INF1/INF2/INF3=false`.

The result does not claim that TA3-Forward is better or worse, does not choose
a winner, does not rank policies, does not aggregate fixtures, and does not
claim that Initial Placement is solved. It does not select Production.

No Production source, runtime, sample, witness mapping, FP1/F2, solver,
settling, routing, labels, UI, Core, Extension, schema, or Dataset semantics
were changed. No `ai-knowledge` entry was modified.

## Validation and final state

- Experiment4 runner: preflight failure reproduced deterministically; failure
  artifacts inspected.
- Experiment4 clone: `npm.cmd test` PASS, `280/280`; lint PASS; build PASS;
  `git diff --check` PASS.
- Original LiaisonScape: `npm.cmd test` PASS, `280/280`; lint PASS; build PASS;
  `git diff --check` PASS. Existing port `24678` warning was non-fatal.
- e2r-spec: `npm.cmd run validate` PASS; `git diff --check` PASS.
- Production tracked diff: **NO**.
- The clone remains detached at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
  and is retained as an uncommitted audit surface.
- No push, tag, release, deploy, or publication.
