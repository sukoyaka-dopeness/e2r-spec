# Gate 2 Review Disposition — History vNext Target Scope

Date: 2026-08-14

Status: Research disposition; non-normative

Review source: `history-vnext-target-scope-chatgpt-review-handoff.md` and the
bounded review returned from ChatGPT.

## Overall decision

The review verdict `reject` is accepted for the provisional selection of Model
C. This does not reject Model C as a future candidate. It returns Model C to a
cross-domain evidence backlog and changes the Name-specific provisional
baseline to Model B.

The current Gate 2 baseline is:

```text
Names owns Name identity and Name-specific applicability semantics.
Future temporal responsibility supplies temporal representation only.
An optional Names + temporal-capability profile declares the combination.
```

This is a responsibility disposition, not a final profile, Extension, payload,
Schema, or History vNext decision. Stable History `1.0.0` remains unchanged and
Core-Object-focused.

## Accepted corrections

1. **Model B is the Name-specific smallest baseline.** Names owns the meaning
   that a Name is applicable to its Object; a temporal responsibility supplies
   the interval or temporal representation. A profile or dependency declaration
   owns no new domain semantics.
2. **Model C was downgraded.** A generic `applies` responsibility may collapse
   usage, validity, attestation, epistemic applicability, and preference into a
   catch-all. It remains a candidate only if at least one additional domain
   shares the same applicability contract and an applicability-only partial
   reader has practical interoperability value.
3. **Model B's assessment was corrected.** It is the smallest current boundary
   for the motivating Name-specific case, not merely a packaging option after a
   generic responsibility is defined.
4. **History continuity remains conditional for Model A.** A new History
   version or exact-version declaration does not by itself prove that expanding
   from Core Objects to arbitrary records preserves responsibility continuity.
5. **Mutable Name values were made explicit.** A record reference alone does
   not guarantee historical expression meaning if the same identity can be
   substantively changed from Alice to Bob. Names lifecycle identity rules or
   explicit value-level information are deferred requirements.
6. **Target and value ownership remain separate.** Name record, Entity,
   field-slot, current value, value snapshot, and context targets are not
   interchangeable.

## Strongest counterexample disposition

The strongest counterexample to Model C is that the same structural pattern
“record R applies to target X during interval I” can represent different domain
meanings: a Name used during a period, a rule valid during a period, a Claim
applicable in a jurisdiction, or a preferred display Name in a Perspective.

Without a shared semantic contract, Model C either becomes a generic predicate
registry or becomes a thin target-and-time wrapper that adds little beyond
Model B. The counterexample defeats Model C as the current provisional owner,
but does not prevent later cross-domain research.

The second counterexample is a substantive edit of a Name record from Alice to
Bob. Existing target identity and applicability references do not automatically
preserve the historical expression. This is now recorded as a deferred Names
lifecycle/value-level question.

## Model disposition

| Model | Disposition | Reason |
| --- | --- | --- |
| A. History vNext generic targets | Deferred | Expands History's target domain; requires formal responsibility continuity audit |
| B. Names + optional temporal capability | Provisional Name-specific baseline | Smallest current boundary when Names owns applicability semantics |
| C. Separate generic applicability | Future candidate | Requires cross-domain semantic and partial-support evidence |
| D. General assertion model | Richer workflow candidate | Too large for ordinary Name applicability; keep Claim wrapping explicit |

## Preserved conclusions

- History `1.0.0` remains Core-Object-focused.
- A Name record is not a Core Object.
- Temporal applicability is not automatically Evidence, Provenance, or an
  Epistemic Claim.
- Overlapping or competing applicability assertions are not automatically
  structural errors.
- A context-free Validator may report malformed references, unknown/missing/
  ambiguous targets, and local interval invalidity, but not adoption or
  semantic conflict without co-applicability context.
- Resolver states remain `malformed`, `unknown`, `missing`, `resolved`, and
  `ambiguous`, independently of lifecycle meaning.
- Unknown Extensions and unsupported records remain preservable.
- Generic readers do not invent redirects, merge propagation, split selection,
  or cascade deletion.

## Required future evidence

Before Model C can be restored as an independent responsibility, research must
show:

- Name-specific and at least one non-Name domain use the same applicability
  semantic contract;
- an applicability-only reader can provide useful partial support without
  understanding the owning domain;
- the contract distinguishes usage, validity, attestation, preference, and
  epistemic applicability where they differ; and
- preservation and conflict diagnostics remain stable across at least two
  applications.

## Next step

The conceptual Model B versus Model C fixture review is recorded in
`history-vnext-model-b-c-fixtures.md`, with internal notation in
`examples/research/history-vnext/model-b-c-conceptual-fixtures.json`. It
includes:

1. a Names plus temporal-capability reader;
2. a Names-only reader;
3. a candidate applicability-only reader;
4. Name-specific `used-during` versus another domain's `valid-during`; and
5. a substantive Alice-to-Bob Name edit with historical applicability.

The fixtures remain non-normative and introduce no payload or writer. The
read-only cross-profile harness is recorded in
`research/tools/history-vnext-model-b-c-diagnostic-harness.mjs` and has nine
passing tests. The next step is evidence collection in at least one additional
domain, followed by a decision on whether a shared applicability contract and
an applicability-only partial reader are strong enough to reopen Model C.

The additional Rules-domain checkpoint is now recorded in
`history-vnext-cross-domain-evidence.md`, with internal notation in
`examples/research/history-vnext/cross-domain-applicability-evidence.json`.
It demonstrates structural reuse of a temporal qualifier but not a shared
semantic contract or semantic partial-support value. Model C therefore remains
deferred and Model B remains the Name-specific baseline.
