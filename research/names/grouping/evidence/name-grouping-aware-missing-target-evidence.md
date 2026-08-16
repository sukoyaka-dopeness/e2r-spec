# Names Grouping — Grouping-Aware Missing Target Evidence

Date: 2026-08-14

Status: Research evidence checkpoint; non-normative

## Scenario

A grouping-aware reader encounters a grouping rationale containing P1 members
`N1`, `N2`, and `N3`, while `N2` is missing or unresolved.

## Required behavior

- preserve the grouping rationale and the remaining membership references;
- preserve the unresolved `N2` reference as unresolved/missing information;
- do not delete the whole grouping;
- do not infer a replacement for `N2`;
- do not reconstruct new meaning from only `N1` and `N3`; and
- do not confuse missing target resolution with unsupported grouping capability.

This is a preservation test shared by all representation candidates. It does
not define cleanup, cardinality, or target-resolution payloads.

Fixture: `../../../../../../../examples/research/names/name-grouping-aware-missing-target.json`
