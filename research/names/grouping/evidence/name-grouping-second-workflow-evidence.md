# Names Grouping — Second Workflow Evidence

Date: 2026-08-14

Status: Research evidence checkpoint; non-normative

## Workflow

A multilingual bibliographic/export application exchanges a work's names with
another catalog. Both catalogs need to preserve two distinct families:

- `東京 / Tokyo / Tōkyō` as a current multilingual/transliteration family;
- `江戸 / Edo` as a historical naming family.

All expressions refer to the same Entity. Entity binding alone therefore
cannot reproduce which expressions belong to which family. P1 expression
identity remains independent; grouping is an additional fact under test.

## Comparison

| Representation | Can reproduce both families? | Assessment |
| --- | --- | --- |
| P1 + Entity binding + language/script metadata | No; family membership is not encoded | Insufficient when catalogs exchange family-aware exports |
| P1 + optional explicit grouping | Yes, if grouping is preserved as a non-identity fact | Smallest candidate |
| P2 stable binding | Not by itself; binding groups all values together | Historical-family loss without extra value semantics |
| P3 hybrid | Yes, but adds an identity layer not yet shown necessary | Candidate only |

## Boundary

This is evidence that a second workflow can require non-derivable grouping
facts. It does not establish grouping cardinality, group identity, payload
shape, or a P2/P3 promotion. Grouping does not imply equivalence, preference,
replacement, or temporal propagation.

## Fixture

`../../../../../../../examples/research/names/name-grouping-second-workflow.json`
