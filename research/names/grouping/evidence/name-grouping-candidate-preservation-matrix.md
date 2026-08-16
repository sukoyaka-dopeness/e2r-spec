# Names Grouping — Candidate Preservation Matrix

Date: 2026-08-14

Status: Non-normative comparison; no representation selected

## Common scenario

A grouping-aware reader understands the grouping responsibility but encounters
one missing P1 member target. The grouping rationale and remaining references
must survive without repair or inferred propagation.

## Matrix

| Candidate direction | Must preserve | Falsified if |
| --- | --- | --- |
| Names-scoped record-like fact | rationale, known members, unresolved member reference | missing member invalidates or deletes the whole fact |
| Names-scoped association-like fact | rationale distinction and unresolved association information | missing edge is removed and graph inference creates new grouping |
| Names-scoped optional packaged data | understood and unknown subdata, including unresolved member | partial normalization drops unsupported or unresolved subdata |

## Shared result

The missing-target fixture provides one common falsification boundary. No
candidate may use partial resolution to infer replacement, equivalence,
preferred display, historical applicability, or lifecycle behavior.

This matrix does not establish which candidate is preferable. It only prevents
candidate-specific packaging from weakening the already accepted preservation
requirements.

Fixture and harness:

- `examples/research/names/name-grouping-aware-missing-target.json`
- `tools/name-grouping-aware-missing-target-harness.test.mjs`
