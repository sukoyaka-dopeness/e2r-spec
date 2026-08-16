# P1 Name Expression — Final-Representation Readiness Audit

Date: 2026-08-14

Status: Research-only readiness; non-normative

## 1. Verdict

`ready for P1 representation decision`

P1 can advance to a focused Final-Representation Decision Memo independently
of Grouping. The accepted evidence is sufficient to compare concrete P1
Payload candidates and Extension identity options. No candidate or ID is
selected by this audit.

## 2. Why

The workstream has evidence for independent expression identity, preservation
through Names-unaware and NarrativeLine production boundaries, exact discovery,
pre-classified identity continuity, supplied replacement, and old-reference
non-retargeting. These are the interoperability and identity constraints a
P1 representation must satisfy.

The remaining questions are representation choices, not a missing production
writer. A writer is not required before comparing whether candidate structures
faithfully express the already accepted P1 boundaries.

## 3. Accepted evidence inventory

- P1 identity and preservation conceptual harness;
- independent exact Entity discovery conceptual evidence;
- NarrativeLine production-boundary exact discovery;
- Linkscape Names-unaware opaque round-trip with unrelated Core edit, reload,
  and second save;
- NarrativeLine production import/export opaque P1 preservation with unrelated
  Core edit, reload, and second export;
- NarrativeLine pre-classified non-substantive continuity;
- explicitly supplied `N2` substantive replacement without adapter allocation;
- imported old `N1` reference non-retargeting;
- no inference from equal/similar text, same Entity, language, script, or
  transliteration;
- preservation of unrecognized expression-array members and unrelated opaque
  data; and
- Core `name` separated from P1 identity and fallback display semantics.

## 4. Semantic completeness

Sufficiently complete for a P1 representation comparison:

- expression identity is independent;
- values and language/script metadata are preservable;
- exact discovery uses explicit values without equivalence inference;
- non-substantive continuity and substantive replacement are distinguishable
  when pre-classified;
- supplied replacement identity is not allocated by an unaware adapter;
- old references are not automatically retargeted; and
- unsupported or opaque data survives partial understanding.

Not complete for final adoption, and therefore to be addressed in the Decision
Memo:

- expression object field ownership and requiredness;
- where P1 data is attached within a Core Dataset;
- duplicate or conflicting expression IDs within a research payload;
- versioning and unknown-field policy for a final Extension;
- validation ownership and severity; and
- migration and compatibility rules.

## 5. Evidence sufficiency

The evidence is sufficient to enter candidate comparison. It is not evidence
that any candidate is preferable, nor evidence that a final Payload or
Extension ID already exists. No additional production integration experiment
is required before the bounded Decision Memo.

## 6. P1 / Grouping dependency result

P1 can advance independently of Grouping. P1 expression identity, values,
metadata, and preservation do not require selecting a Grouping representation,
Group identity, cardinality, or grouping Payload.

Grouping remains a separate deferred responsibility. P1 evidence must not be
used to infer grouping membership or representation.

## 7. Remaining Payload decision questions

The Decision Memo should compare, without selecting prematurely:

- candidate location and ownership for P1 data;
- expression record shape and identity field;
- value, language, and script field requirements;
- preservation of unknown members and explicit `null`;
- multiple expressions per Entity and ordering;
- duplicate/conflict handling without accidental equivalence;
- supported/unsupported reader behavior;
- validation and version declaration boundaries; and
- migration implications, if any.

It must not decide Grouping fields or lifecycle vocabulary.

## 8. Extension Identity readiness

Ready for a bounded comparison of Extension identity options, not for
selection. The memo should compare namespace ownership, draft/stable status,
version declaration, collision avoidance, and unknown-reader behavior.

Convenience, short syntax, or implementation familiarity are insufficient
selection evidence. A final ID must not be inferred from the test-only
`research.fixture.p1-names` identifier.

## 9. Target Reference dependency result

Final Target Reference selection is not a prerequisite for the P1
representation Decision Memo. The memo may require that P1 identities remain
stable and that opaque/old references are preserved without automatic
retargeting, while leaving a future Target Reference representation deferred.

## 10. Core `name` boundary result

The Core `name` boundary is sufficient and remains separate. A P1 candidate
must not create P1 identity from Core `name`, rewrite Core `name` from P1, or
infer equivalence from equal text. Fallback display and diagnostic severity
remain outside this readiness decision.

## 11. Remaining decision obligations

Before a final P1 representation can be selected, the Decision Memo must:

- evaluate concrete P1 Payload directions against the accepted preservation
  boundaries;
- compare Extension identity options against namespace, versioning, and
  unknown-reader constraints; and
- state ownership or explicit deferral for unresolved validation, duplicate,
  and migration questions relevant to representation selection.

These obligations belong inside the Decision Memo. They do not block starting
that memo and do not require additional production implementation. Migration
implementation remains deferred; the memo only needs to ensure that a future
migration is not made impossible and that ownership is explicit.

## 12. Deferred non-blockers

The following are not blockers for entering a P1 representation Decision Memo:

- production Names writer evidence;
- NarrativeLine production lifecycle service;
- search index and ranking;
- UI and preferred display;
- final Target Reference representation;
- lifecycle vocabulary and migration implementation;
- Grouping representation, Group identity, and cardinality; and
- P2/P3 reopening.

## 13. Exact recommended next task

Create one non-normative P1 Final-Representation Decision Memo that:

1. compares a small set of concrete P1 Payload candidates;
2. compares candidate Extension identity options;
3. evaluates each candidate against identity, exact discovery, opaque
   preservation, replacement non-retargeting, unknown-member preservation, and
   Core `name` separation;
4. identifies accidental semantics and unresolved ownership;
5. recommends `select`, `defer`, or `accept with corrections` for P1 only;
   and
6. explicitly excludes Grouping and P2/P3.

No implementation, final schema, migration, or writer contract should be
created as part of that memo.

## 14. Grouping Selection Reopen Criteria

`no`. This audit found no comparative Grouping evidence. Grouping remains
`defer selection`; P2/P3 remain closed.

## Final boundary

This audit changes no normative specification, application code, application
tests, Payload, Extension ID, Grouping representation, or Target Reference
model.
