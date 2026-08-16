# P1 Name Expression — Research-Only Integration Experiment Plan

Date: 2026-08-14

Status: Plan only; non-normative

## Scope

Prepare a future integration test using a research-only fixture containing
independent P1 expressions for one Entity. The test may exercise a real
reader/writer or application adapter, but it must not establish a final
representation.

## Checks

1. Save/load preserves expression IDs, values, and language/script metadata.
2. An unrelated Core edit followed by reserialization preserves unknown Names
   data semantically and structurally, allowing serialization-only differences.
3. Exact lookup of each expression discovers the owning Entity.
4. A previously classified non-substantive edit retains the P1 ID; the
   experiment does not classify edits.
5. A previously classified substantive replacement creates a new P1 ID and
   existing references remain targeted at the old ID; this does not define
   general replacement or writer behavior.

## Explicit exclusions

No ranking, preferred display, transliteration equivalence, naming-kind,
Grouping, temporal applicability, migration, final Payload, Extension ID, or
application writer contract is tested or selected.

The fixture and any adapter are research-only. This plan is not implementation
authorization.
