# ChatGPT Review Handoff — Representation Candidate Comparison

Read first:

1. `research/names/grouping/decisions/name-grouping-representation-candidate-comparison.md`
2. `research/names/grouping/decisions/name-grouping-representation-boundary.md`
3. `research/names/grouping/decisions/name-grouping-representation-review-disposition.md`
4. `research/names/grouping/evidence/name-grouping-overlap-evidence.md`
5. `research/names/grouping/evidence/name-grouping-partial-support-evidence.md`
6. `research/names/grouping/decisions/name-grouping-closure-review-disposition.md`
7. `research/names/grouping/evidence/name-grouping-candidate-preservation-matrix.md`
8. `research/names/grouping/evidence/name-grouping-aware-missing-target-evidence.md`
9. `research/names/grouping/evidence/name-grouping-replacement-non-retargeting-evidence.md`
10. `examples/research/names/name-grouping-replacement-non-retargeting.json`
11. `research/names/grouping/evidence/name-grouping-unrelated-edit-preservation-evidence.md`
12. `examples/research/names/name-grouping-unrelated-edit-preservation.json`
13. `research/names/grouping/decisions/name-grouping-candidate-comparison-disposition.md`
14. `research/names/grouping/decisions/name-grouping-common-preservation-disposition.md`

Compare the three candidate directions at responsibility level only. Return
`accept`, `accept with corrections`, or `reject`, identify accidental semantics
each candidate could introduce, and state whether the common preservation tests
are now sufficient.

The common tests include overlapping rationales, grouping-aware missing member
targets, opaque partial-support round-trip, and substantive P1 replacement
without automatic retargeting. They also include preservation of opaque
grouping after an unrelated understood-field edit.

Do not select a final representation, Group identity, cardinality, Payload,
Extension ID, migration, or application behavior. Keep P1 expression identity
as the baseline and do not reopen P2/P3 without persistent binding-target
evidence.

The five common preservation tests are now closed as sufficient at the
responsibility level. Review the candidate comparison itself next; do not add
new semantic fixtures for deferred questions such as cardinality, duplicate
membership, or Group equality.

Use the candidate comparison disposition to keep this review at the
responsibility level. Compare semantic fit and accidental semantics only; do
not rank candidates as an implementation selection.
