# P1 Name Expression — NarrativeLine Integration Boundary

Date: 2026-08-14

Status: Research-only application boundary; non-normative

## Scope

If a future NarrativeLine adapter is tested, it may read and preserve
independent P1 Name expressions for one Entity and perform exact discovery.
The adapter may exercise already/pre-classified lifecycle cases from the P1
integration plan.

## Required checks

- preserve P1 expression IDs, values, language, and script;
- preserve unknown Names data after unrelated supported edits;
- discover the owning Entity from each exact expression; and
- preserve the same P1 ID for a pre-classified non-substantive edit; and
- avoid retargeting old references after a pre-classified substantive
  replacement.

## Exclusions

No NarrativeLine writer contract, final Payload, Extension ID, Grouping,
preferred display, ranking, transliteration equivalence, naming-kind,
temporal applicability, migration, or validator severity is selected.

This document authorizes no code change; it is a boundary for a future
application integration experiment only.
