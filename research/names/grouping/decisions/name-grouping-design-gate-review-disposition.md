# Names Grouping Design Gate — Review Disposition

Date: 2026-08-14

## Verdict

`accept with corrections`

The separate bounded gate is justified, but the evidence does not yet prove
that multilingual grouping is a shared interoperability responsibility. P1
expression identity remains the baseline.

## Accepted corrections

The gate must first compare **P1 expressions plus optional explicit grouping**
against P2/P3. Grouping must not imply identity equivalence, preferred display,
historical applicability, replacement, or generic temporal semantics.

The review must test whether any grouping fact is non-derivable and would be
lost when applications exchange P1 expressions, Entity bindings, and supported
metadata. It must also test whether any consumer needs the binding itself as a
persistent target.

Independently addressable distinctions include language, script,
transliteration, naming-kind, context/community, external identity, lifecycle,
presentation preference, and historical applicability.

## Three valid gate outcomes

1. No stored grouping is needed; Entity binding and application-derived
   behavior are sufficient.
2. P1 plus optional explicit grouping is sufficient.
3. Stable binding or hybrid identity is justified by evidence.

Promotion to P2/P3 requires at least two materially different consumers,
non-derivable shared grouping facts, failure or unreasonable loss with P1 plus
explicit grouping, a concrete persistent-binding target, preservation of old
expressions, and successful partial-support round-trip.

## Required next evidence

- a second grouping-dependent workflow (initial conceptual fixture added in
  `name-grouping-second-workflow-evidence.md`);
- an overlapping-rationale fixture (initial checkpoint added in
  `name-grouping-overlap-evidence.md`);
- a partial-support round-trip checkpoint in
  `name-grouping-partial-support-evidence.md`;
- a binding-target consumer checkpoint in
  `name-grouping-binding-target-evidence.md` (currently missing evidence);
- one Entity with multiple variant families;
- a consumer targeting the binding itself;
- overlapping grouping rationales; and
- a P1-only reader round-trip that preserves unknown grouping data.

## Deferred decisions

Payload shape, Extension ID, grouping record/relation/profile, cardinality,
equivalence semantics, binding representation, migration, inference,
vocabularies, display/search behavior, lifecycle cascades, temporal
propagation, validator severity, and application writers remain undecided.
