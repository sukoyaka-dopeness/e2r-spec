# P1 Name Expression — Integration Readiness

Date: 2026-08-14

Status: Criteria-only checkpoint; non-normative

## Purpose

Define the boundary for a future real application or serializer integration
test. This document does not authorize implementation or select a payload.

## Entry criteria

An integration experiment must already preserve:

- independent P1 expression identities and values;
- language/script metadata without identity inference;
- non-substantive identity continuity;
- substantive replacement as a new identity without retargeting; and
- exact Entity discovery without ranking or preference semantics.

## Integration checks

The future test may verify:

1. a real reader/writer preserves P1 expressions across save/load;
2. a Names-unaware or Core-only reader preserves unknown Names data while
   editing unrelated Core data. After reserialization, the Names data must be
   semantically and structurally preserved; serialization-only differences such
   as whitespace or property formatting are allowed; and
3. an application discovers an Entity from each exact P1 expression.

## Exclusions

Do not infer transliteration equivalence, preferred display, search ranking,
Grouping, naming-kind semantics, temporal applicability, migration, or final
Payload/Extension behavior from this integration test.

## Current status

No real application integration or serializer test is authorized by this
checkpoint alone. It is a future bounded test plan.

Any concrete fixture shape used by a future experiment is research-only. Its
use does not select or approve a final Payload, Extension ID, or Grouping
representation.
