# ChatGPT Review Handoff — Representation Selection Criteria

Read first:

1. `research/names/grouping/decisions/name-grouping-representation-selection-gate.md`
2. `research/names/grouping/decisions/name-grouping-candidate-comparison-disposition.md`
3. `research/names/grouping/decisions/name-grouping-common-preservation-disposition.md`
4. `research/names/grouping/decisions/name-grouping-representation-candidate-comparison.md`
5. `research/names/grouping/evidence/name-grouping-candidate-preservation-matrix.md`

Review whether the selection criteria are complete and responsibility-level.
Return `accept`, `accept with corrections`, or `reject`. Identify any criterion
that accidentally selects a payload or representation, and any preservation
boundary that is missing.

Do not select a candidate. Do not define Group identity, cardinality, Payload,
Extension ID, migration, validator severity, or application behavior. Keep P1
expression identity as the baseline and do not reopen P2/P3.

The gate explicitly requires non-inference of equivalence, transitivity, and
connected-component semantics; excludes stable Name-to-Object binding identity;
distinguishes unsupported grouping from missing/unresolved P1 targets; and
forbids automatic grouping inference from Entity binding, language, or script.
No additional fixture is requested for this review.
