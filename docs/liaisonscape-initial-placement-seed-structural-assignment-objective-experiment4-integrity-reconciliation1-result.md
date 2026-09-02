# LiaisonScape Initial-placement Seed Structural-assignment Objective Experiment4 Integrity Reconciliation1

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-INTEGRITY-RECONCILIATION1`
- Date: 2026-09-02
- Status: Complete — documentation-only integrity reconciliation; no objective execution
- Result: `CASE 1 / DECISION A`
- Scope: frozen witness manifests, derived geometry identity, Design4 matrix and protected-state reconciliation

## Decision and boundary

The mandatory Experiment4 preflight correctly blocked before objective
execution, but its Ashen Crown class expectation was based on a stale derived
identity claim. This checkpoint reconciles that claim. It does not execute
Experiment4, rerun Experiment3, change a witness, change Production, or alter
the source/runtime.

The corrected next checkpoint is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT4-RERUN1`

Its future disposable clone is reserved as:

`C:\Users\extra\E2R\e2r-liaison-scape-structural-assignment-objective-experiment4-rerun1`

That clone is not created by this checkpoint.

## Root cause and authority order

The first incorrect claim is the derived “Existing-witness identity audit” in
the TA3 operational witness result (`928c820`), where Ashen Crown Forward
versus TA1/W1 was marked `DIFFERENT`. The comparison used serialized row order
as though it were part of the mapping. It was not a keyed comparison.

The literal tables are authoritative and remain unchanged. The authority
order for this reconciliation is:

1. the literal frozen mapping;
2. the exact generator contract;
3. fixture authority;
4. a keyed derived identity audit;
5. Design4 class expectation;
6. Experiment4 preflight output.

For Ashen Crown, TA1/W1 is:

```text
ilyan->P0, vhalgrim->P1, selene->P2, mira->P3, rowan->P4,
nyra->P5, garrick->P6, darius->P7, kael->P8, elara->P9
```

TA3 Forward is displayed in the opposite row order:

```text
elara->P9, kael->P8, darius->P7, garrick->P6, nyra->P5,
rowan->P4, mira->P3, selene->P2, vhalgrim->P1, ilyan->P0
```

These are the same keyed `Node -> FP1Index` mapping. They are not a witness
remap and do not imply semantic policy identity.

## GEOM-FP-v1 reconciliation helper

The audit fingerprint is literal and quality-neutral. It validates that every
expected Node occurs exactly once, rejects extra, duplicate, or missing Nodes,
sorts Node IDs by Unicode/codepoint order, and serializes unambiguously as:

```text
NodeID:FP1Index|NodeID:FP1Index|...
```

The optional SHA-256 is a digest of that canonical serialization. Row order is
not an input to identity; Node keys and their indices are. The fingerprint has
no semantic, quality, ranking, or Production meaning.

The helper self-checks all passed:

| Check | Result |
| --- | --- |
| identical rows | PASS |
| reversed row order with the same Node/index pairs | PASS: same fingerprint |
| arbitrary row permutation | PASS: same fingerprint |
| one changed index | PASS: different fingerprint |
| missing Node | PASS: rejected |
| extra Node | PASS: rejected |
| duplicate Node | PASS: rejected |
| deterministic serialization and SHA-256 | PASS |

## Corrected geometry classes

The six provenance-safe labels are classified independently within each
fixture. The corrected classes are:

| Fixture | Class | Members |
| --- | --- | --- |
| Lighthouse | G0 | TA0/REP-0; TA2-DEG-W1-OP-v1 |
| Lighthouse | G1 | TA1/W1 |
| Lighthouse | G2 | TA2-MOTIF-W1-OP-v1; TA3-REV-W1-OP-v1 |
| Lighthouse | G3 | TA3-FWD-W1-OP-v1 |
| Ashen Crown | G0 | TA0/REP-0; TA2-DEG-W1-OP-v1 |
| Ashen Crown | G1 | TA1/W1; TA3-FWD-W1-OP-v1 |
| Ashen Crown | G2 | TA2-MOTIF-W1-OP-v1; TA3-REV-W1-OP-v1 |
| K3 | G0 | TA0/REP-0; TA1/W1; TA2-DEG-W1-OP-v1; TA2-MOTIF-W1-OP-v1; TA3-REV-W1-OP-v1 |
| K3 | G1 | TA3-FWD-W1-OP-v1 |

TA3 Reverse remains literally identical to TA2-motif on all three fixtures.
TA3 Forward is a new literal class on Lighthouse and K3, but is an exact
literal alias of TA1/W1 on Ashen Crown. All witness provenance and semantic
family distinctions remain visible.

## Corrected pair counts and matrix

Each fixture has six labels and therefore 15 conceptual unordered pairs:

| Fixture | Class sizes | Conceptual | Identity-implied | Cross-class | Executed cells |
| --- | --- | ---: | ---: | ---: | ---: |
| Lighthouse | 2, 1, 2, 1 | 15 | 2 | 13 | 6 |
| Ashen Crown | 2, 2, 2 | 15 | 3 | 12 | 3 |
| K3 | 5, 1 | 15 | 10 | 5 | 1 |
| Total | — | 45 | 15 | 30 | 10 |

The corrected execution matrix is:

- Lighthouse: three Experiment3 regression cells (`G0-G1`, `G0-G2`,
  `G1-G2`) plus three new TA3-Forward cells (`G0-G3`, `G1-G3`, `G2-G3`);
- Ashen Crown: three Experiment3 regression cells (`G0-G1`, `G0-G2`,
  `G1-G2`); TA3 Forward is covered through its G1 alias;
- K3: one orbit-control cell (`G0-G1`).

Thus the total is `6 regression + 3 new Lighthouse + 1 K3 control = 10`.
Alias expansion preserves source cell, source geometry pair, directional
orientation, and `evidenceMultiplicity: 1`; aliases do not create evidence.

## Design4 and TA3 corrections

The [corrected Design4](liaisonscape-initial-placement-seed-structural-assignment-objective-experiment-design4.md)
now records 4/3/2 classes, 15/30 identity and cross-class counts, and the
10-cell matrix. Its former Ashen G3 and three Ashen TA3-Forward cells are
removed as duplicate executions. The objective contract, comparator coverage,
inference ceiling `INF-W0/INF-W1`, and no-ranking boundary are unchanged.

The [TA3 witness result](liaisonscape-initial-placement-seed-ta3-correspondence-operational-witness-reconstruction1-result.md)
now corrects only its derived Ashen Forward identity row and downstream prose.
Its literal mapping tables, TA3W-MAN-5 results, GEO gates, provenance, and
semantic distinctions are unchanged.

## Invalidated Experiment4 preflight artifacts

The failed Experiment4 clone was inspected read-only and remains untouched:

`C:\Users\extra\E2R\e2r-liaison-scape-structural-assignment-objective-experiment4`

Its final preflight state remains `BLOCKED-BEFORE-OBJECTIVE`, with
`objectiveStarted=false` and `executed=0`. The final artifact identities are:

| Artifact | SHA-256 |
| --- | --- |
| `runner.mjs` | `B2FF75B80244201F0BD9AFC5DA4C7443F854140B29C9FEB2B9C5E6F810656BAC` |
| `raw-results.json` | `C29191763BF14A90E92F0507C9C56806284A6DF54DC89D4A9C4C994FED89E94B` |
| `results.json` | `D603BA2EFD16ED1C2C85A1047AA3069A9604297D21532DE54BB9F284B6E127D6` |

The earlier invalidated artifacts included the alias-orientation bug and an
objective-before-class-enforcement attempt. They are not evidence. The final
preflight is evidence only for the need for this reconciliation, not for any
objective relation.

## Central answers

| Question | Answer |
| --- | --- |
| Was a source or runtime change needed? | No. |
| Was any objective calculated? | No. |
| Was Experiment3 rerun? | No. |
| Is Ashen Forward a new geometry class? | No; it is keyed-identical to TA1/W1. |
| Are the TA3 literal tables wrong? | No; the derived identity comparison was wrong. |
| Are TA3W-MAN-5 and GEO gates changed? | No. |
| Correct class counts? | Lighthouse 4, Ashen Crown 3, K3 2. |
| Correct pair counts? | 45 conceptual, 15 identity-implied, 30 cross-class. |
| Correct execution count? | 10: six regressions, three new Lighthouse cells, one K3 control. |
| Is K3 quality evidence? | No; it remains an orbit control only. |
| Is any ranking or winner authorized? | No. |
| Is Production changed? | No. |
| Next checkpoint? | `...OBJECTIVE-EXPERIMENT4-RERUN1`, separately authorized. |

## Closure

CASE 1 / Decision A is selected. The integrity blocker is resolved by
correcting the derived keyed-identity audit and propagating the correction to
the Design4 matrix. No protected sample, Session, source, runtime,
`ai-knowledge`, failed clone, or prior witness literal table was modified.
