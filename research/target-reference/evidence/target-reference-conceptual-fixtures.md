# Target Reference Conceptual Fixtures

Date: 2026-08-14

Status: Research fixtures; non-normative

Related research:

- `target-reference-and-record-lifecycle.md`
- `target-reference-model-comparison.md`

## Purpose

These fixtures test the provisional Model A baseline: an owner namespace plus
a local record identity, with existing Core Object identity preserved. They are
conceptual cases, not final Dataset examples. They intentionally avoid JSON
property names, JSON Schema, Extension identifiers, and ID-generation rules.

The fixtures are meant to expose silent redirection, accidental identity
merging, and loss of unknown data before any interoperable writer is designed.

## Abstract notation

The notation below is explanatory only.

- `D` — one Dataset-local scope.
- `E1` — a Core Entity identified by the existing Core Object rules.
- `N1@Names` — a Name record with local identity `N1`, owned by the Names
  responsibility.
- `C1@Claims` — an Epistemic Claim record owned by Claims.
- `A1@Assessments` — an Assessment record owned by Assessments.
- `fieldSlot(E1, name)` — the stable `name` slot of `E1`, not its current text.
- `valueSnapshot(E1.name, "Alice")` — an explicit value-level assertion for
  the text `Alice`; this is not implied by a field-slot reference.
- `unknown@FutureSpace:R1` — a reference whose owner namespace is not
  understood by the reading application.

## Fixture 1 — Core Object target

### Setup

Dataset `D` contains Entity `E1` and a Claim `C1@Claims` that refers to `E1`.

### Expected resolution

- The existing Core Object identity resolves without an Extension registry.
- The Claim remains an Extension-owned record and does not promote `E1` or
  `C1` into another object category.
- A Core Relation endpoint remains subject to current Core rules.

### Failure to avoid

An application must not create a second synthetic Entity for the Claim target
or broaden Core Relation endpoints merely because an Extension can refer to
`E1`.

## Fixture 2 — Extension-owned Name target

### Setup

Dataset `D` contains `N1@Names` and `A1@Assessments` referring to `N1@Names`.
The reading application understands Assessments but not Names.

### Expected resolution

- A Names-aware application resolves `N1@Names` using its owner namespace and
  local identity.
- The Names-unaware application reports an unknown namespace or kind, not a
  missing Name record.
- The raw Assessment and its unresolved reference survive a load/save
  round-trip.

### Failure to avoid

The application must not delete the Assessment, replace the Name with Core
`name`, or silently treat an unknown target as a dangling reference.

## Fixture 3 — Field slot versus field value

### Setup

Dataset `D` contains Entity `E1` whose current Core `name` is `Alicia`.
One Claim refers to `fieldSlot(E1, name)`. A second Claim refers to an
explicit `valueSnapshot(E1.name, "Alice")` record owned by the relevant
assertion responsibility.

### Expected resolution

- The first Claim concerns the mutable field slot and can resolve to the
  current field location.
- The second Claim concerns the historical value `Alice` even though the
  current Core value is `Alicia`.
- The two Claims are not treated as equivalent merely because both mention
  `E1.name`.

### Failure to avoid

Editing `Alice` to `Alicia` must not silently rewrite a value-level Claim.
Conversely, a field-slot Claim must not be presented as proof that a specific
historical text was present at an earlier time.

## Fixture 4 — Unknown namespace round-trip

### Setup

Dataset `D` contains a reference `unknown@FutureSpace:R1` inside a Claim or
Provenance record. Application `A` understands the record containing the
reference but not `FutureSpace`.

### Expected resolution

- `A` preserves the reference and its surrounding record byte-for-byte where
  practical, or semantically without loss where formatting changes.
- `A` reports unsupported/unknown target information separately from malformed
  data and missing targets.
- A later application that understands `FutureSpace` can resolve `R1`.

### Failure to avoid

Unknown data must not be converted to `null`, removed, or rewritten as a
reference to a locally invented record.

## Fixture 5 — Deletion and non-reuse

### Setup

Dataset `D` contains `N1@Names` and `A1@Assessments` referring to it. `N1` is
deleted. A later edit creates an unrelated Name record.

### Expected resolution

- If the owner removes `N1` entirely, `A1` is diagnosed as referring to a
  missing target. If the owner retains an identity-bearing retired record,
  `A1` may still resolve while carrying owner-specific lifecycle context.
- The unrelated later Name does not reuse `N1` as a persistent identity.
- The common contract does not require automatic cascade deletion of `A1`.

### Failure to avoid

Reusing `N1` for the unrelated Name would make the old Assessment resolve
successfully to the wrong record, which is more dangerous than a visible
missing-target diagnostic.

## Fixture 6 — Replacement without automatic redirect

### Setup

`N1@Names` is replaced by `N2@Names` because the owner decides that the
identity-bearing record has changed. An old Assessment refers to `N1`; a new
Assessment refers to `N2`.

### Expected resolution

- The old Assessment remains about `N1` and is not silently redirected to
  `N2`.
- An optional replacement relationship may be preserved as owner-specific
  metadata, but it does not rewrite all historical references.
- A reader that does not understand the replacement metadata still preserves
  both records and their references.

## Fixture 7 — Merge without semantic propagation

### Setup

Two records `N1@Names` and `N2@Names` are merged into `N3@Names`.
Assessments and Claims exist for both source records.

### Expected resolution

- Source references remain identifiable as references to `N1` and `N2`.
- The owner may provide explicit merge metadata, but no universal rule copies
  every Claim or Assessment onto `N3`.
- A consumer can report unresolved historical source records without asserting
  that all source propositions apply to `N3`.

### Failure to avoid

Merge must not be treated as proof of semantic equivalence. Identity
consolidation and proposition adoption are separate operations.

## Fixture 8 — Split without automatic selection

### Setup

One record `N1@Names` is split into `N2@Names` and `N3@Names`. An old Claim
refers to `N1`.

### Expected resolution

- The old Claim remains a reference to `N1` or is diagnosed as missing if `N1`
  no longer exists.
- The system does not choose `N2`, `N3`, or both without an explicit
  owner-defined operation.
- Any split metadata is preserved independently of the original Claim.

## Fixture 9 — Dataset-level target

### Setup

A Provenance record describes how Dataset `D` was created. The target is `D`
itself, not an Entity, Event, Relation, or Extension-owned record.

### Expected resolution

- The research implementation must either resolve Dataset-level targets as an
  explicitly supported class or report that this profile excludes them.
- It must not manufacture a synthetic Core Object representing `D`.
- The decision is visible in the responsibility/profile capability, not
  inferred from a missing Core Object ID.

## Fixture 10 — Diagnostic classification

| Case | Expected state | Required behavior |
| --- | --- | --- |
| Missing owner or required identity component | Malformed | Report structural invalidity; preserve raw record |
| Unsupported owner namespace or target kind | Unknown | Preserve reference; do not call it deleted |
| Known owner and kind, absent local identity | Missing | Preserve reference; report dangling target |
| Exactly one known target | Resolved | Allow owner-specific interpretation |
| More than one possible target | Ambiguous | Do not select silently |

The diagnostic state does not determine truth, credibility, applicability, or
historical adoption.

## Cross-application round-trip exercise

The first executable preservation fixture is available at
`examples/research/target-reference/roundtrip-opaque-record.json`. It is
explicitly research-only and uses an opaque unknown Extension payload; it is
not a target-reference specification.

The conceptual exercise should use two applications:

| Application | Understands | Does not understand |
| --- | --- | --- |
| A | Core, Claims, Assessments, Names | FutureSpace |
| B | Core, Claims, Assessments, Names, FutureSpace | — |

The sequence is:

1. B creates Fixtures 2, 4, 5, and 6, including an unknown reference for A.
2. A loads and saves the Dataset without understanding `FutureSpace`.
3. B reloads the result and compares all known records, references, and
   unknown payloads.
4. B verifies that deletion, non-reuse, replacement, and diagnostics remain
   distinguishable.

Success means that A may add formatting changes, but it does not delete,
retarget, or flatten records it cannot interpret.

NarrativeLine and Linkscape now run this fixture through their existing
load/save paths. Those tests verify unknown-payload preservation only; they do
not claim that either application resolves the draft target-reference
semantics.

## Acceptance criteria before payload design

Payload or Schema work should remain gated until the conceptual fixtures show:

- no silent redirection after array movement or record deletion;
- preservation of an unknown namespace and its surrounding record;
- a clear distinction between field slot and value-level assertion;
- no automatic redirect for replacement, merge, or split;
- explicit handling or exclusion of Dataset-level targets; and
- stable diagnostic classification across two applications.

## Current conclusion

The fixtures support Model A as a useful research baseline if lifecycle rules
remain explicit and owner-specific. They do not justify a universal registry,
a new Core target type, or a common automatic cascade/redirect operation.
The next practical step is to encode these cases in test fixtures for two
applications, still using draft or internal representations rather than a
Stable Extension payload.
