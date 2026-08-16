# P1 Name Expression — Implementation Request Checklist

Date: 2026-08-14

Status: Operational checklist; non-normative

## Before implementation

An implementation request must identify:

- the target repository/application;
- whether the work is reader, writer, serializer, or integration testing;
- the research-only fixture and accepted P1 boundaries to exercise; and
- the exact requested code/test scope.

## Required constraints

The implementation must preserve independent P1 identity, values,
language/script metadata, exact Entity discovery, and the accepted
pre-classified lifecycle outcomes. Unknown Names data must survive unrelated
Core edits semantically and structurally, allowing serialization-only
differences.

## Explicitly out of scope unless separately requested

Grouping representation, final Payload, Extension ID, Group identity,
cardinality, ranking, preference, transliteration equivalence, naming-kind
semantics, migration, temporal applicability, validator severity, and writer
contract design.

## Repository safety

Preserve existing uncommitted work. Do not reset, checkout, commit, or modify
unrelated files. Implementation begins only after the user explicitly requests
the code change and names the target scope.
