# Names Grouping — Representation Selection Gate

Date: 2026-08-14

Status: Open; criteria-only gate, non-normative

## Purpose

The responsibility-level candidate comparison is accepted. This gate defines
the evidence required before any representation direction can be selected.
It does not select a record, association, or packaged-data representation.

## Selection criteria

A candidate may advance only if it:

1. expresses Names-scoped intentional membership with distinct rationale;
2. preserves overlapping rationales and does not infer equivalence,
   transitivity, or connected-component semantics merely from representation
   shape or overlapping membership without separate evidence;
3. preserves P1 expression identity and unresolved references, while keeping
   unsupported grouping capability distinct from an understood grouping with an
   unresolved or missing P1 member target;
4. survives unsupported-reader round-trip and unrelated understood edits;
5. does not introduce Group identity, stable Name-to-Object binding identity,
   targetability, lifecycle, preference, or historical applicability implicitly;
6. keeps packaging ownership separate from semantic ownership.

## Disqualifying behavior

Reject or revise a candidate if it silently:

- retargets membership after substantive P1 replacement;
- drops unknown or unresolved grouping data during normalization;
- infers grouping from Entity binding, language, script, or other metadata;
- treats association shape as binary, directed, symmetric, transitive, or
  equivalent without separate evidence; or
- requires an independently targetable Group identity without evidence.

## Required next review

The next review may compare candidate behaviors against these criteria, but it
must defer Payload, Group ID, cardinality, vocabulary, Extension ID, migration,
validator severity, and application writer behavior.

P1 remains the identity baseline. P2/P3 remain out of scope unless persistent
binding-target evidence appears.
