# Names Grouping — Representation Selection Readiness

Date: 2026-08-14

Status: Readiness review; non-normative

## Question

Do current responsibility-level evidence and preservation tests justify
selecting one representation direction, or do the candidates remain
intentionally unresolved?

## Current evidence

All three candidates satisfy the common preservation boundary at the
responsibility level. Their remaining differences are accidental-semantics
risks rather than demonstrated interoperability failures:

- record-like: risk of Group identity and targetability;
- association-like: risk of relation/graph semantics; and
- optional packaged data: risk of capability/packaging confusion.

## Readiness rule

Selection requires positive evidence that one candidate expresses the
Names-scoped grouping fact with materially less semantic risk and no loss of
preservation behavior. Passing common tests alone is necessary but does not
select a candidate.

If no candidate meets that stronger threshold, retain all three as unresolved
directions and defer representation selection.

## Non-decisions

No representation, Payload, Group identity, cardinality, Extension ID,
migration, validator severity, or application behavior is selected here.
