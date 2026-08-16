# ChatGPT Review Disposition — Minimal Source/Citation Workflow

Date: 2026-08-14

Status: Research disposition; non-normative

Review source: `minimal-source-citation-chatgpt-review-handoff.md` and the
bounded review returned from ChatGPT.

## Overall decision

The review verdict `accept with corrections` is accepted. Gate 3 is closed at
the responsibility level after applying the corrections to
`minimal-source-citation-workflow.md`.

The selected baseline is:

```text
record this source for this Event
    = identified Source + weak Citation association to the identified Event
    != automatic Claim, Evidence, Assessment, or Provenance
```

This is the smallest reusable cross-application baseline considered here, not
the absolute minimum record count. No payload, Schema, Extension identifier,
Extension partition, or NarrativeLine writer is authorized.

## Accepted corrections

1. **The minimum claim was narrowed.** A Citation with an inline source
   description is a smaller isolated representation. It does not preserve
   reusable Source identity, so it does not replace the selected reusable
   baseline.
2. **Source and Citation identity were separated.** Conceptual Source identity
   is required for reuse and same-text distinction. Citation identity is
   required only when the association must be independently referenced or
   distinguished; this Gate does not make it universally mandatory.
3. **Two independent references were made explicit.** The Citation's Source
   reference and citation-target reference each use the five resolver states
   independently. An unsupported Source owner is `unknown`, not `missing`,
   even when the Event target resolves.
4. **Weak Citation semantics were made formal.** The stored association does
   not imply evidential support, derivation, authorship, truth, reliability, or
   confidence.
5. **Generic safety and owner lifecycle were separated.** Generic readers do
   not invent retargeting or cascade deletion, and an operation name does not
   determine resolver state. A future Citation owner may define explicit
   cleanup choices for aware editors.
6. **Single-source-of-truth risk was clarified.** Future Citation-local
   locators, excerpts, or snapshots must not duplicate a Source's canonical
   description as a second authoritative representation.
7. **Duplicate Citation meaning remains deferred.** Whether multiple
   independent Citations may connect the same Source and target depends on
   later identity and payload research.

## Strongest counterexample disposition

The review's strongest counterexample is one Citation association that owns an
inline source description. It can reproduce a one-time user action with fewer
records, so the earlier wording could not claim an absolute minimum.

The counterexample does not preserve that two Citations identify the same
Source, and textual equality cannot safely supply that identity. It also
requires an identity decision if the Source later becomes independently
assessed or used as Evidence. The counterexample therefore narrows the claim
but does not overturn the selected reusable baseline.

## Preserved conclusions

- Core remains unchanged.
- An Event is not converted into an implicit proposition.
- Citation remains distinct from Evidence and Provenance.
- Later Claim/Evidence records are added without reinterpreting the Citation.
- Event field edits do not change an Event-level Citation because the target
  is Event identity, not current field values.
- Source display text is not Source identity, and applications do not
  automatically deduplicate Sources.
- Removing a Citation does not remove its Source or Event.
- Apparently unreferenced Sources are not automatically collected because
  unknown Extensions may still reference them.
- Unknown and unsupported records remain preservable.

## Deferred questions

- final Source and Citation payloads;
- Extension identifiers, versions, and partitioning;
- mandatory versus optional Citation identity in a final representation;
- bibliographic structure and external resource identity;
- locators, excerpts, embedded resources, and offline portability;
- Source equivalence and deduplication;
- owner-specific cleanup UI and lifecycle rules;
- Claim, Evidence, Assessment, and Provenance payloads; and
- Specification Extension Feature boundaries based on partial-support
  evidence.

## Next step

The conceptual cross-application fixtures are now recorded in
`source-citation-conceptual-fixtures.md`, with the opaque Dataset-shaped fixture
at `examples/research/source-citation/conceptual-roundtrip.json`. They cover:

1. one Source cited for two Events;
2. identical display text with distinct Source identities;
3. a resolved Event with an unknown Source owner;
4. a missing Event with preserved Citation and Source information; and
5. later Claim/Evidence addition without Citation reinterpretation.

These fixtures remain research representations. They do not define a final
E2R payload or authorize application-defined citation fields.

The research-only diagnostic harness is now recorded in
`research/source-citation/tools/source-citation-diagnostic-harness.mjs`, with seven passing
tests in `research/source-citation/tools/source-citation-diagnostic-harness.test.mjs`. It
evaluates the two references of each Citation independently and does not
produce an aggregate Citation state.

The opaque Dataset has now passed both existing application load/save paths:

- NarrativeLine preservation test: 36 total tests passed;
- Linkscape preservation test: 71 total tests passed.

Both applications also passed build and lint. This is preservation evidence
only; neither application interprets the research Source/Citation semantics.

The Gate 3 preservation checkpoint is complete. The next architecture task is
Gate 2, History vNext target scope, after backlog and candidate-index alignment
is handled separately.
