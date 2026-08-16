# Names Grouping Closure Review — Disposition

Date: 2026-08-14

## Verdict

`continue B`

The responsibility-level A/B/C comparison closes on Option B: P1 expression
identity plus optional explicit grouping. This does not adopt a grouping
representation or any Names payload.

## Findings

- Catalog-family evidence demonstrates a non-derivable grouping fact.
- Overlapping rationales show grouping is not one identity-equivalence class.
- Partial-support evidence establishes opaque preservation requirements.
- No consumer currently requires the enduring binding itself as a persistent
  target; P2/P3 remain rejected as current outcomes.

## Reopen trigger

Reopen Option C only when a consumer persistently targets the Name-to-Entity
binding itself and neither the Entity, a P1 expression, nor explicit grouping
is adequate, together with historical value/version ownership evidence.

## Deferred

Payload, Extension ID, group identity/cardinality, ownership, vocabularies,
inference, preference, lifecycle, temporal propagation, migration, validation,
and application behavior remain deferred.
