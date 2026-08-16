# Names Grouping — Common Preservation Test Disposition

Date: 2026-08-14

## Verdict

`accept with corrections`

The five common preservation tests are sufficient for the responsibility-level
representation candidate comparison. The test gate is closed; representation
selection remains open.

## Covered boundaries

- overlapping rationales do not become one equivalence class;
- missing members remain unresolved without deleting or repairing the grouping;
- unsupported readers preserve opaque grouping;
- substantive P1 replacement does not retarget membership; and
- unrelated understood-field edits preserve opaque grouping semantically and
  structurally, apart from serialization-only differences.

Do not add tests for empty/single-member grouping, duplicate membership,
cardinality, or Group equality at this stage; those are deferred representation
semantics and must not be selected by fixtures.

## Non-decisions

No record/relation/packaged-data choice, Group identity, targetability,
cardinality, Payload, Extension ID, migration, or P2/P3 policy follows from
this closure. P1 expression identity remains the baseline.
