# NarrativeLine P1 Integration — Go/No-Go Gate

Date: 2026-08-14

Status: Criteria-only; non-normative

## Go criteria

A future NarrativeLine integration experiment may start only when it has:

- a research-only fixture containing independent P1 expressions;
- save/load through the research-only adapter that preserves IDs, values,
  language, and script;
- exact Entity discovery checks with no ranking or preference behavior;
- a pre-classified non-substantive edit that retains the same P1 ID;
- a pre-classified substantive replacement that creates a new P1 ID while
  existing references remain targeted at the old ID; and
- an explicit semantic/structural opaque-preservation assertion after an
  unrelated Core edit, allowing serialization-only differences.

## No-go conditions

Do not start or interpret the experiment as specification adoption if it:

- requires a final Payload or Extension ID;
- introduces Grouping, Group identity, cardinality, or stable binding identity;
- infers transliteration equivalence, preferred display, or ranking;
- defines edit classification, migration, temporal applicability, or writer
  contract; or
- changes NarrativeLine code without a separate implementation request.

## Status

The criteria are informational. NarrativeLine integration remains unimplemented
and no code change is authorized by this gate.
