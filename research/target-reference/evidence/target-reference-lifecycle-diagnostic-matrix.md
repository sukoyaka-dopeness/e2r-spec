# Target Reference Lifecycle Diagnostic Matrix

Date: 2026-08-14

Status: Research test matrix; non-normative

Related research:

- `target-reference-and-record-lifecycle.md`
- `target-reference-model-comparison.md`
- `target-reference-conceptual-fixtures.md`

## Purpose

The first two-application test only verifies preservation of an opaque,
unknown Extension payload. This matrix records the next diagnostic cases for
target-reference lifecycle behavior without defining a final reference
payload, Validator code, or application-specific error message.

The purpose is to keep four different questions separate:

1. Is the reference structurally interpretable?
2. Can the target owner and kind be resolved?
3. Is the identified target currently present?
4. Does a lifecycle operation justify any semantic redirect or adoption?

The first three are reference diagnostics. The fourth belongs to the owning
responsibility or an explicit operation and must not be inferred by a generic
reader.

## Diagnostic layers

| Layer | Question | Example outcome | Generic application action |
| --- | --- | --- | --- |
| Structure | Can the reference be parsed? | malformed | Report; preserve raw data where possible |
| Capability | Is the namespace/kind understood? | unknown | Preserve; do not call it deleted |
| Resolution | Is the known identity present? | missing, resolved, ambiguous | Report; do not silently retarget |
| Lifecycle meaning | What does delete/replace/merge/split mean? | owner-specific | Defer to the responsible Extension or explicit operation |

No diagnostic layer establishes truth, confidence, evidence strength,
historical applicability, or hypothesis adoption.

## Matrix

| ID | Abstract setup | Expected state | Preserve | Must not happen |
| --- | --- | --- | --- | --- |
| TRD-01 | Missing owner namespace or identity component | Malformed | Raw surrounding record | Guess a default namespace or target |
| TRD-02 | Unsupported owner namespace | Unknown | Full unknown reference | Convert to missing or delete it |
| TRD-03 | Known owner/kind, absent local identity | Missing | Reference and referring record | Reuse a new record with the old ID |
| TRD-04 | Exactly one known target | Resolved | Original identity | Create a duplicate synthetic Core Object |
| TRD-05 | Multiple possible targets satisfy a reference | Ambiguous | Reference and candidates if available | Select the first or most recent target |
| TRD-06 | Target deleted or retired by its owner | Missing or resolved, depending on whether identity remains present | Historical referring record | Derive resolution state from the operation name |
| TRD-07 | Surviving persistent reference's identity reused by unrelated record | Integrity risk; resolution must not silently retarget | Old reference and diagnostic | Treat any ID reuse as universally invalid without checking surviving references |
| TRD-08 | Record replaced with a new identity | Old target missing or retired | Old and new records, plus optional owner metadata | Redirect every old assertion to the replacement |
| TRD-09 | Two records merged | Owner-specific merge operation | Source identities and old assertions | Copy all Claims/Assessments to the merged target |
| TRD-10 | One record split into several | Owner-specific split operation; old target may be missing | Source identity and split metadata | Choose one new target automatically |
| TRD-11 | Stable field slot exists, current value changed | Resolved slot; value semantics separate | Slot reference and explicit value record | Present current value as historical value |
| TRD-12 | Dataset-level target unsupported by profile | Unknown capability or explicit profile exclusion | Provenance record | Manufacture a synthetic Core Object |

The phrase “integrity risk” in TRD-07 is intentionally not a final Validator
severity. It identifies a dangerous state that must not be allowed to resolve
as a different target.

## Operation-specific expectations

### Delete

Deletion removes or retires the target according to its owner. If the owner
keeps an identity-bearing retired record, resolution may remain `resolved`; if
the identity is absent, it may be `missing`. The operation name alone does not
choose the resolution state. In either case, it does not rewrite references
held by Claims, Evidence, Assessments, or Provenance. A generic reader may
preserve and report the referring data.

### Replace

Replacement creates a new identity only when the owner decides that identity
has changed. An optional replacement relationship may be preserved, but it is
not a universal redirect instruction.

### Merge

Merge establishes a relationship between source identities and a result. It
does not prove that every assertion about a source applies to the result.
Adoption of a proposition remains a separate operation.

### Split

Split establishes multiple result identities. A prior reference cannot be
assigned to one result, all results, or no result without an explicit rule from
the owning responsibility.

### ID reuse

An identity that may be persistently referenced should not be reused for an
unrelated record after deletion. This is a candidate lifecycle invariant, not
yet a Core validity requirement.

## Two-application test roles

| Role | Knows target namespace | Expected behavior |
| --- | --- | --- |
| Unaware application | No | Preserve the record and reference; classify as unknown capability |
| Aware application | Yes | Resolve known targets; classify absent identities as missing |

For both roles:

- malformed references remain distinguishable from unknown references;
- unknown references are not removed during save;
- missing references are not silently redirected;
- replacement, merge, and split metadata is not interpreted as automatic
  retargeting; and
- field-slot references are not presented as historical value assertions.
- an owner-specific rule may be recorded and interpreted by that owner, but a
  generic reader does not invent such a rule or turn its own safety action into
  a universal prohibition.

## Test execution stages

### Stage 1 — fixture-level checks

Use the existing research-only fixture directory to represent the matrix
cases. Verify that the fixture is explicitly non-normative and that unknown
payloads survive existing load/save paths.

### Stage 2 — read-only diagnostic prototype

After a target-reference representation is selected for experimentation,
implement diagnostics in a read-only research harness first. The harness must
classify the matrix cases without rewriting the input Dataset.

### Stage 3 — application integration

Only after two applications agree on the conceptual classifications should
their user-facing diagnostics be considered. Applications may choose different
wording and detail levels, but must not change unknown into missing or resolve
an ambiguous target silently.

### Stage 4 — Validator consideration

Validator rules should be considered only after the reference contract and
ownership lifecycle rules are stable enough to distinguish structural errors
from valid disagreement and unresolved historical records.

## Acceptance criteria

The diagnostic research is ready for a payload design review when:

- all twelve matrix cases have an agreed conceptual state;
- at least one unknown namespace survives an unaware application's round trip;
- deletion and ID reuse cannot produce silent redirection;
- replacement, merge, and split remain operation-specific;
- field slot and value-level assertion behavior is explicit; and
- Dataset-level targeting is either supported by a named profile or explicitly
  excluded.

## Current conclusion

The matrix supports read-only, layered diagnostics as the next implementation
boundary. It does not justify a universal cascade rule, automatic redirect,
new Core Object types, or a Stable target-reference Extension. The existing
two-application preservation tests remain valid and should be extended only
after a draft reference representation exists. The isolated research harness
now exercises the generic safe responses for delete, replacement, merge,
split, and ID reuse; it intentionally leaves owner-specific lifecycle meaning
unresolved, defers when an explicit owner rule is supplied, and does not derive
a resolver state from an operation name.
