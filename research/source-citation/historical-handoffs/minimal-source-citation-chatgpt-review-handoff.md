# ChatGPT Review Handoff — Minimal Source/Citation Workflow

Date: 2026-08-14

Status: Research review handoff; non-normative

## Purpose

Conduct one bounded, critical review of the provisional Gate 3 decision for
NarrativeLine's smallest Source/Citation workflow.

The ordinary user action under review is:

```text
Record this source for this Event.
```

The current research decision is:

```text
Source description + weak Citation association to the Event
```

It does not automatically create a Claim, Evidence, Assessment, or Provenance
record. The review must test this decision rather than merely restate or endorse
it.

## Files to read

Read every file in this list before answering. The E2R specification repository
is the source of truth. The NarrativeLine files provide application evidence,
not normative rules.

### Current Gate 3 decision and dependencies

1. `C:\Users\extra\E2R\e2r-spec\research\minimal-source-citation-workflow.md`
2. `C:\Users\extra\E2R\e2r-spec\research\temporal-epistemic-names-architecture-audit.md`
3. `C:\Users\extra\E2R\e2r-spec\research\target-reference-draft-representation.md`
4. `C:\Users\extra\E2R\e2r-spec\research\target-reference-chatgpt-review-disposition.md`
5. `C:\Users\extra\E2R\e2r-spec\research\field-slot-value-ownership-review-disposition.md`

### Normative specification and application boundaries

6. `C:\Users\extra\E2R\e2r-spec\spec\core.md`
7. `C:\Users\extra\E2R\e2r-spec\spec\philosophy.md`
8. `C:\Users\extra\E2R\e2r-spec\spec\rationale.md`
9. `C:\Users\extra\E2R\e2r-spec\extensions\specification-extension.md`
10. `C:\Users\extra\E2R\e2r-spec\docs\application-design-principles.md`
11. `C:\Users\extra\E2R\e2r-spec\docs\application-recommendations.md`

### Existing epistemic and NarrativeLine evidence

12. `C:\Users\extra\E2R\e2r-spec\docs\ai-workflow-research.md`
13. `C:\Users\extra\E2R\e2r-narrative-line\docs\priority-feature-backlog.md`
14. `C:\Users\extra\E2R\e2r-narrative-line\docs\chatgpt-priority-feature-design-handoff.md`

Do not reread all original Agenda handoffs unless a concrete contradiction in
the listed documents cannot be resolved without one. If an additional source
is required, identify the exact unresolved question and file before relying on
it.

## Review task

Critically evaluate whether a Source description plus a weak Citation
association to an Event is the smallest honest, interoperable conceptual model
for the stated action.

Compare it against at least these alternatives:

1. Provenance targeting the Event or Event record;
2. a direct weak Citation association targeting the Event;
3. automatic creation of a minimal Claim plus Evidence;
4. Source-only storage awaiting later linkage; and
5. any smaller alternative you believe the current decision overlooked.

For every alternative, examine:

- the exact fact adopted into the Dataset;
- what a second independent application could reproduce;
- user-visible and hidden record creation;
- whether the model overstates support, origin, truth, or confidence;
- stable identity and target-reference requirements;
- later enrichment into explicit Claim/Evidence workflows;
- Event, Citation, and Source editing and deletion behavior;
- missing, unknown, ambiguous, and preserved opaque references;
- whether the model silently depends on current field values; and
- whether it introduces a responsibility that belongs in Core.

## Required diagnostic cases

Test the recommendation against these cases:

1. One Source is cited for two Events.
2. Two Sources have identical display text but distinct identities.
3. A user removes one Citation while the Source remains used elsewhere.
4. A user deletes the Event while an aware or unaware application preserves
   the Citation data.
5. The Event name or time changes after the Citation is recorded.
6. A user later states that one Source passage supports one explicit temporal
   proposition.
7. A user records that an import from a Source created the Event record.
8. An application understands the Citation owner but not the Source owner.
9. An application understands neither owner and round-trips both records.
10. An apparently unreferenced Source may still be referenced by an unknown
    Extension.

For each case, state whether the current decision preserves the intended
meaning and whether any correction is needed.

## Questions requiring an explicit answer

1. Is "cited in connection with" sufficiently precise to be an interoperable
   responsibility, or is it only an application UI relationship?
2. Does a Citation association need its own persistent Dataset-local identity,
   or can identity remain optional until another record targets it?
3. Is Source identity required in the minimal workflow, or can a Citation own
   an inline source description without loss of later interoperability?
4. Can Source reuse and inline citation coexist without creating two competing
   sources of truth?
5. Does an Event-level Citation remain meaningful after Event fields change?
6. Is non-cascading preservation sufficient for deletion, or does the owning
   responsibility need an explicit lifecycle rule?
7. Can later Evidence reference the Source independently while preserving the
   original weak Citation meaning?
8. Should the Gate remain open if the Source/Citation Extension partition is
   undecided, or can the responsibility decision close while partitioning is
   deferred?

## Constraints

- Keep the E2R Core minimal.
- Do not define a final JSON payload or Schema.
- Do not choose an Extension name, identifier, or version.
- Do not decide the final partition among Source, Citation, Claim, Evidence,
  Assessment, and Provenance Extensions.
- Do not turn an Event into an implicit proposition.
- Do not treat Citation presence or count as confidence or verification.
- Do not conflate record origin with evidential support.
- Keep field-slot identity separate from current field values and value-level
  information.
- Preserve the five resolver states: `malformed`, `unknown`, `missing`,
  `resolved`, and `ambiguous`.
- Do not invent generic redirect, merge, split, or cascade behavior.
- Unknown Extensions and unsupported records must remain preservable.
- Distinguish normative requirements, research conclusions, and application
  recommendations.
- Do not propose NarrativeLine writer implementation from this review alone.

## Required output

Return one structured review memo containing:

1. **Verdict** — `accept`, `accept with corrections`, or `reject` for the
   current minimal baseline.
2. **Strongest counterexample** — the case most likely to invalidate or narrow
   the current decision.
3. **Alternative comparison** — a concise matrix covering all required
   alternatives.
4. **Diagnostic case results** — pass, correction required, or unresolved for
   each of the ten cases.
5. **Identity and lifecycle disposition** — Source identity, Citation identity,
   reuse, editing, deletion, and opaque preservation.
6. **Corrections** — exact changes recommended for
   `minimal-source-citation-workflow.md`, separated into required and optional
   edits.
7. **Deferred questions** — questions that genuinely require payload,
   Extension partition, or cross-application evidence.
8. **Next gate** — the smallest safe research step after disposition.

Do not rewrite the entire decision document. Quote only the minimum text needed
to identify a proposed correction. If the decision is accepted unchanged,
explain why the strongest counterexample does not defeat it.

## Return path

Return the completed memo to Codex. Codex will audit it against the listed
sources, record an accept/reject disposition, and make only the corrections
that remain consistent with the E2R source of truth.
