# Source/Citation Conceptual Fixtures

Date: 2026-08-14

Status: Research fixtures; non-normative

Related research:

- `minimal-source-citation-workflow.md`
- `minimal-source-citation-chatgpt-review-disposition.md`
- `target-reference-draft-representation.md`
- `field-slot-value-ownership-review-disposition.md`

## Purpose

These fixtures exercise the Gate 3 responsibility decision:

```text
record this source for this Event
    = identified Source + weak Citation association to the identified Event
    != automatic Claim, Evidence, Assessment, or Provenance
```

They test the smallest reusable cross-application baseline, not the absolute
minimum record count. They do not define final payload keys, a Schema, an
Extension identifier, an Extension partition, or a NarrativeLine writer.

## Abstract notation

The notation is explanatory only:

- `E1@Core` — a Core Event identified by the existing Core rules.
- `S1@Sources` — identified Source material owned by the Source
  responsibility.
- `C1@Citations` — a weak Citation association owned by the Citation
  responsibility.
- `K1@Claims` — an explicit epistemic Claim.
- `V1@Evidence` — Evidence that relates Source material to a Claim.
- `unknown@FutureSources:S9` — a Source reference whose owner namespace is not
  understood by the current reader.

Citation labels such as `C1` make the research cases independently observable.
They do not decide that Citation identity is mandatory in a final payload.

## Common weak semantics

Every Citation in these fixtures means only:

```text
identified Source is cited in connection with identified target
```

It does not imply evidential support, derivation, authorship, truth,
reliability, or confidence. The Source reference and citation-target reference
are resolved independently using `malformed`, `unknown`, `missing`, `resolved`,
or `ambiguous`.

## Fixture 1 — One Source cited for two Events

### Setup

Dataset `D` contains `S1@Sources`, Events `E1@Core` and `E2@Core`, and two weak
Citation associations:

```text
C1: S1 -> E1
C2: S1 -> E2
```

### Expected result

- Both Source references resolve to the same Source identity.
- Each Event target resolves independently.
- Removing `C1` leaves `S1`, `E1`, `E2`, and `C2` unchanged.
- Neither Citation is interpreted as Evidence for an unstated proposition.

### Failure to avoid

An application must not duplicate `S1`, copy its description into two
authoritative inline values, or delete `S1` when one Citation is removed.

## Fixture 2 — Equal display text, distinct Source identities

### Setup

Dataset `D` contains `S2@Sources` and `S3@Sources`. Both display as
`Same displayed source`, but they are intentionally distinct. `C3` cites `S2`
for `E1`; `C4` cites `S3` for `E2`.

### Expected result

- `S2` and `S3` remain distinct after load/save.
- Citation resolution uses Source identity, not description equality.
- An application may offer an explicit reconciliation workflow but does not
  merge the Sources automatically.

### Failure to avoid

Text, title, URL, or another display value must not silently become Source
identity.

## Fixture 3 — Resolved Event and unknown Source owner

### Setup

`C5@Citations` targets the present Event `E1@Core` and refers to
`unknown@FutureSources:S9`. Application `A` understands the Citation
responsibility and Core but not the future Source owner.

### Expected result

- The Event target is `resolved`.
- The Source reference is `unknown`, not `missing`.
- `C5` and the opaque Source reference are preserved.
- Unsupported Source semantics do not invalidate `E1` or unrelated data.

### Failure to avoid

The application must not replace the Source reference, manufacture a local
Source, remove `C5`, or collapse the two independent resolver results into one
Citation-wide state.

## Fixture 4 — Missing Event with preserved Citation and Source

### Setup

Dataset `D` contains `S1@Sources` and `C6@Citations`. `C6` refers to the absent
Core Event identity `event-missing`. The fixture does not derive this state
from a delete operation label.

### Expected result

- The Source reference is `resolved`.
- The Event target is `missing`.
- `S1`, `C6`, and the original target reference remain preservable.
- A generic reader does not retarget or cascade-delete either record.

An owner may alternatively retain an identity-bearing retired Event, in which
case target resolution could remain `resolved` while lifecycle context is
reported separately. That is a different fixture state.

### Failure to avoid

An application must not infer a replacement Event, treat the missing target as
an unknown owner, or reuse `event-missing` for an unrelated Event while the
persistent Citation survives.

## Fixture 5 — Later Claim/Evidence without Citation reinterpretation

### Setup

Dataset `D` first contains the weak Citation `C1: S1 -> E1`. Later, a user
explicitly creates `K1@Claims` for a temporal proposition and
`V1@Evidence`, which relates an identified portion of `S1` to `K1`.

### Expected result

- `C1` remains a weak Event-level Citation.
- `K1` owns or identifies the explicit proposition independently.
- `V1` connects Source material to `K1`; it does not target `C1` as a shortcut.
- No current Event field value is copied into or inferred from `C1`.
- Removing `V1` does not remove or weaken the meaning of `C1`.

### Failure to avoid

The application must not promote, convert, or reinterpret `C1` as Evidence or
Provenance. Claim text, quoted Source material, field-slot identity, and
value-level information remain separate responsibilities.

## Executable preservation fixture

The Dataset-shaped fixture is:

- `examples/research/source-citation/conceptual-roundtrip.json`

It is a valid Core-shaped research Dataset whose Source, Citation, Claim, and
Evidence concepts are stored only under opaque `research.fixture.*` Extension
namespaces. The representation is deliberately verbose and diagnostic. Its
property names are not proposed payload keys.

The five conceptual cases coexist in one Dataset so a preservation path can
compare them together. Research record IDs are included to make loss,
duplication, or retargeting observable; they do not settle whether every final
Citation requires persistent identity.

## Cross-application exercise

Use two applications with different capabilities:

| Application | Understands | Does not understand |
| --- | --- | --- |
| A | Core and opaque Extension preservation | all `research.fixture.*` semantics |
| B | Core and the research fixture notation | `future.example.sources` |

The exercise is:

1. B records the expected semantic projection of all five cases.
2. A loads and saves the Dataset without editing unknown Extension data.
3. B reloads the result and compares Source identities, Citation identities,
   both references on each Citation, and the separate Claim/Evidence records.
4. B confirms that unknown and missing references remain distinct and that no
   Citation became Evidence or Provenance.

Formatting may change, but semantic content must not be deleted, merged,
retargeted, or flattened.

## Preservation checkpoint

The opaque Dataset-shaped fixture has now passed the existing load/save paths
of both applications:

- NarrativeLine: `tests/sourceCitationPreservation.test.js` — 36 total tests
  passed, including the Source/Citation preservation test;
- Linkscape: `tests/source-citation-preservation.test.ts` — 71 total tests
  passed, including the Source/Citation preservation test.

Both applications also passed their build and lint checks. The assertions
compare the exported Dataset with the original fixture and confirm that the
unknown `research.fixture.source-citation` Extension survives. They do not
claim that either application interprets Source, Citation, Claim, or Evidence
semantics.

## Acceptance criteria

Before provisional payload design begins, the fixtures must demonstrate:

- one Source identity can be reused by multiple Citations;
- equal Source descriptions do not merge identity;
- Source and target references retain independent diagnostic states;
- a missing target does not authorize cascade or redirect behavior;
- later Claim/Evidence addition does not reinterpret a Citation;
- unknown fixture content survives at least two application preservation
  paths; and
- no fixture field is treated as Core, Stable Extension data, or an
  application writer contract.

## Current conclusion

The conceptual fixtures are sufficient to begin a read-only preservation
exercise. They do not justify a final Source/Citation payload.

The research-only diagnostic harness is:

- `research/source-citation/tools/source-citation-diagnostic-harness.mjs`
- `research/source-citation/tools/source-citation-diagnostic-harness.test.mjs`

Its seven tests classify each Citation's Source and target references
independently, preserve equal-text Source identities, keep unknown and missing
distinct, avoid mutation, and retain the boundary between a weak Citation and
later Claim/Evidence records.

This completes the preservation checkpoint. It does not authorize a writer or
payload design. The next architecture task is Gate 2, History vNext target
scope, after the related backlog and candidate-index alignment is handled as a
separate maintenance step.
