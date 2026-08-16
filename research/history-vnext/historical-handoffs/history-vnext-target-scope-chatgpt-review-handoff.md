# ChatGPT Review Handoff — History vNext Target Scope

Date: 2026-08-14

Status: Research review handoff; non-normative

## Purpose

Conduct one bounded, critical review of the four responsibility models for
temporal applicability of Extension-owned records, especially Object-specific
Name records.

The motivating distinction is:

```text
Entity E existed or occurred at time T.
Name record N applies to Entity E during interval I.
Source S supports Claim C that N applied during interval I.
```

These statements have different subjects. The review must test whether the
provisional preference for a separate temporal-applicability responsibility is
actually justified, or whether a Names plus History profile, History vNext
generic target model, or general assertion model is smaller and safer.

## Files to read

Read every file in this list before answering. The E2R specification repository
is the source of truth. The research documents are non-normative architecture
inputs.

### Gate 2 decision and cross-gate context

1. `C:\Users\extra\E2R\e2r-spec\research\history-vnext-target-scope.md`
2. `C:\Users\extra\E2R\e2r-spec\research\temporal-epistemic-names-architecture-audit.md`
3. `C:\Users\extra\E2R\e2r-spec\research\target-reference-draft-representation.md`
4. `C:\Users\extra\E2R\e2r-spec\research\target-reference-chatgpt-review-disposition.md`
5. `C:\Users\extra\E2R\e2r-spec\research\field-slot-value-ownership-review-disposition.md`
6. `C:\Users\extra\E2R\e2r-spec\research\minimal-source-citation-workflow.md`

### Normative specification and Extension boundaries

7. `C:\Users\extra\E2R\e2r-spec\spec\core.md`
8. `C:\Users\extra\E2R\e2r-spec\spec\philosophy.md`
9. `C:\Users\extra\E2R\e2r-spec\spec\rationale.md`
10. `C:\Users\extra\E2R\e2r-spec\extensions\history-extension.md`
11. `C:\Users\extra\E2R\e2r-spec\extensions\specification-extension.md`
12. `C:\Users\extra\E2R\e2r-spec\extensions\README.md`
13. `C:\Users\extra\E2R\e2r-spec\docs\application-design-principles.md`
14. `C:\Users\extra\E2R\e2r-spec\docs\application-recommendations.md`

### Names and epistemic context

15. `C:\Users\extra\E2R\e2r-spec\docs\ai-workflow-research.md`
16. `C:\Users\extra\E2R\e2r-narrative-line\docs\priority-feature-backlog.md`
17. `C:\Users\extra\E2R\e2r-narrative-line\docs\chatgpt-priority-feature-design-handoff.md`

Do not reread all original Agenda handoffs unless a concrete contradiction in
the listed files cannot be resolved without one. If an additional file is
needed, identify the exact unresolved question and path before relying on it.

## Models to compare

### Model A — History vNext with a generic target model

History vNext retains the History responsibility and directly targets Core
Objects and arbitrary identifiable Dataset records.

### Model B — Names plus an optional History dependency or profile

Names owns Name records. A Names profile optionally uses or requires an exact
History capability for temporal applicability.

### Model C — Separate temporal-applicability responsibility

A dedicated responsibility owns assertions that an identifiable record applies
to a target, field slot, or context during a temporal extent. History remains
responsible for temporal representation and Core-Object temporal information.

### Model D — General assertion model with Core-focused History

History remains Core-Object-focused. A general assertion responsibility owns
propositions such as “Name N applied to Entity E during interval I.”

## Review task

Critically evaluate all four models. Do not assume Model C is correct merely
because it preserves current History boundaries.

For every model, examine:

- which responsibility owns the Name record;
- which responsibility owns the temporal value or interval;
- which responsibility owns the applicability relation;
- whether Stable History `1.0.0` retains responsibility continuity;
- whether the model expands History into a universal record registry;
- whether ordinary applicability becomes an implicit Claim;
- dependency and profile behavior when History or Names is unsupported;
- target-reference requirements and independent resolver states;
- field-slot versus current-value semantics;
- lifecycle behavior for replacement, retirement, merge, split, and deletion;
- preservation behavior for unknown owner namespaces and unsupported records;
- conflict, overlap, competing assertion, and adoption behavior; and
- whether two independent applications can reproduce the same result.

## Required diagnostic cases

Test each model against these cases:

1. One Name record applies to one Entity during a bounded interval.
2. Two non-overlapping Name records apply to the same Entity in succession.
3. Two Name records overlap with different name expressions.
4. A Name record has an applicability assertion but no current Core value
   matching its text.
5. The current Name value changes after a historical applicability assertion
   is recorded.
6. The Name record is replaced and an old applicability assertion remains.
7. The Name record is retired or deleted while its target reference survives.
8. The target Entity is missing, while the Name owner is understood.
9. The Name owner namespace is unknown, while the target Entity resolves.
10. A reader understands Names but not the temporal-applicability responsibility.
11. A reader understands the temporal responsibility but not Names.
12. A user later adds a Claim/Evidence record concerning the applicability
    assertion.
13. The same Name applicability is asserted by two sources with disagreement.
14. A Dataset contains competing assertions without an adoption context.

For every case, state whether the model preserves the distinction between:

- resolver state;
- lifecycle meaning;
- temporal applicability;
- current field value;
- epistemic support; and
- presentation or preference.

## Questions requiring explicit answers

1. Is temporal applicability a temporal representation concern, a relation
   between records, or a proposition/assertion concern?
2. Does Model C introduce a genuinely smaller responsibility than Model B, or
   merely another packaging layer around Names and History?
3. Can Model A expand History's target domain without breaking responsibility
   continuity for existing History readers?
4. Under Model B, which component owns the meaning of “applies”: Names, History,
   or the profile itself?
5. Under Model D, when is a normal applicability record not an epistemic Claim?
6. Should applicability target a Name record, a field slot, a value snapshot,
   an Entity, or a context—and can these targets be kept distinct?
7. Can an applicability assertion remain meaningful after the current Name text
   changes without silently snapshotting or rewriting the field value?
8. What can a context-free Validator report about overlapping assertions, and
   what requires adoption/co-applicability semantics?
9. Which model best preserves unknown data and partial support across two
   applications?
10. Is a separate applicability responsibility justified without already
    defining its final Extension, Feature, or payload?

## Constraints

- Keep the E2R Core minimal.
- Do not change History Extension `1.0.0`.
- Do not define a final History vNext, Names, applicability, or assertion
  payload.
- Do not choose an Extension identifier, version, or partition.
- Do not treat a Name record as a Core Object.
- Do not turn every applicability assertion into an implicit Claim.
- Keep temporal applicability distinct from source support, confidence,
  provenance, naming preference, and presentation order.
- Preserve the five resolver states: `malformed`, `unknown`, `missing`,
  `resolved`, and `ambiguous`.
- Do not infer resolver state from delete, retire, replace, merge, or split
  operation names.
- Do not invent generic redirect, merge propagation, split selection, or
  cascade deletion.
- Keep field-slot identity separate from current field values and value-level
  information.
- Unknown Extensions and unsupported records must remain preservable.
- Distinguish normative requirements, research conclusions, and application
  recommendations.
- Do not propose an application writer or Validator implementation from this
  review alone.

## Required output

Return one structured review memo containing:

1. **Verdict** — `accept`, `accept with corrections`, or `reject` for the
   provisional Model C preference.
2. **Strongest counterexample** — the case most likely to make Model C unsafe
   or unnecessarily large.
3. **Four-model comparison matrix** — responsibility ownership, continuity,
   compatibility, partial support, and unresolved risks.
4. **Diagnostic case results** — pass, correction required, or unresolved for
   all fourteen cases and for each model where the result differs.
5. **History continuity disposition** — whether Stable `history` can retain
   its current responsibility under each model.
6. **Target and value ownership disposition** — Name record, applicability
   target, field slot, current value, and value snapshot.
7. **Conflict and adoption disposition** — what a generic Validator may report
   without selecting an adopted hypothesis set.
8. **Corrections** — exact required and optional edits to
   `history-vnext-target-scope.md`.
9. **Deferred questions** — items requiring payload, Extension partition, or
   cross-application evidence.
10. **Next gate** — the smallest safe research step after disposition.

Do not rewrite the entire Gate 2 document. Quote only the minimum text needed
to identify a correction. If Model C is accepted unchanged, explain why the
strongest counterexample does not defeat it. If another model is preferred,
state the smallest change needed to the responsibility boundary.

## Return path

Return the completed memo to Codex. Codex will audit it against the listed
sources, record an accept/reject disposition, and make only corrections that
remain consistent with the E2R source of truth.
