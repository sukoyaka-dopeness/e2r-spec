# Names Grouping — Representation Candidate Comparison

Date: 2026-08-14

Status: Non-normative candidate comparison; no selection

## Candidates

| Candidate | Responsibility fit | Main risk | Current assessment |
| --- | --- | --- | --- |
| Names-scoped record-like fact | Directly expresses membership and rationale | Could imply Group identity, targetability, or lifecycle | Direct semantic fit; identity burden unproven |
| Names-scoped association-like fact | Expresses a grouping fact among P1 expressions | May imply direction, binary shape, symmetry, transitivity, or equivalence | Candidate requiring semantic isolation |
| Names-scoped optional packaged data | Separates optional support and opaque preservation | May mix Dataset fact with capability/profile semantics | Candidate; packaging unresolved |

## Shared requirements

Every candidate must preserve independent P1 expressions, intentional
membership, distinct and overlapping rationales, Entity bindings without
equating them to grouping, and opaque round-trip for unsupported readers.

No candidate may imply identity equivalence, stable binding identity,
preferred display, lifecycle propagation, historical applicability, or
automatic inference.

All candidates must also preserve the non-propagation and partial-support
guardrails: rationale membership is not inferred across rationales, substantive
P1 replacement does not retarget membership, unrelated edits do not erase
opaque grouping, unsupported capability is distinct from a missing P1 target,
and durable data does not require an independently targetable Group identity.

## Comparison questions

1. Which candidate expresses Names-scoped semantics with the least accidental
   Core or generic Relation meaning?
2. Can an unsupported reader preserve the candidate after unrelated edits?
3. Can missing expression targets remain distinguishable from unsupported
   grouping capability?
4. Does the candidate require an independently targetable Group identity, or
   can it remain a durable but non-targetable fact?
5. What evidence would falsify the candidate's preservation boundary?

## Explicit non-decisions

This comparison does not select record/relation/profile, Group ID,
cardinality, rationale vocabulary, payload, Extension ID, migration, validator
severity, or application writer behavior.
