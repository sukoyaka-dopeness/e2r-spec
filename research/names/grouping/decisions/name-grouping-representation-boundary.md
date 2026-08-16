# Names Grouping — Representation Boundary Review

Date: 2026-08-14

Status: Limited next-stage review; non-normative

## Purpose

Option B is a responsibility direction, not a selected representation. This
review defines the questions a future representation must answer without
choosing a record, relation, profile, identifier, or payload shape.

## Minimum semantic requirements

A representation candidate must preserve:

- independent P1 expression identity;
- intentional membership of expressions in a grouping fact;
- distinct grouping rationales, including overlap;
- Entity bindings without treating them as grouping membership; and
- opaque round-trip behavior for unsupported readers.

It must also ensure that membership under one rationale does not imply
membership under another, that unrelated edits do not erase unknown grouping,
and that substantive P1 replacement does not silently retarget membership.
Unsupported grouping capability must remain distinct from an understood
grouping whose P1 expression target is missing or unresolved. Durability alone
does not require an independently targetable grouping identity.

It must not imply:

- identity equivalence;
- stable binding identity;
- preferred display or search ranking;
- replacement, retirement, merge, split, redirect, or cascade;
- historical applicability propagation; or
- automatic inference from language, script, transliteration, or naming-kind.

## Responsibility boundary

Grouping semantics are Names-scoped. Packaging as an Extension, profile,
record, or relation remains deferred; generic readers may remain ignorant and
preserve the representation opaquely.

## Review questions

1. What is the smallest durable fact being exchanged: intentional membership
   with enough rationale distinction? Provenance remains separate.
2. Can the fact remain optional and independently preservable without a new
   identity layer?
3. How should overlapping rationales remain distinct without fixing global
   cardinality?
4. Which owner is responsible for the meaning, while generic readers remain
   safe and ignorant?
5. What preservation behavior is required when a reader edits unrelated P1
   fields?

## Explicit non-decisions

Do not decide representation kind, Group ID, cardinality, vocabulary, payload,
Extension ID, migration, validator severity, or application writer behavior in
this review.
