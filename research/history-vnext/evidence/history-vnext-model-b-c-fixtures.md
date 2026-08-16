# History Gate 2 Model B/C Conceptual Fixtures

Date: 2026-08-14

Status: Research fixtures; non-normative

Related research:

- `history-vnext-target-scope.md`
- `history-vnext-target-scope-review-disposition.md`
- `target-reference-draft-representation.md`
- `field-slot-value-ownership-review-disposition.md`

## Purpose

These fixtures compare the current Model B baseline with the Model C
cross-domain candidate. They do not define a temporal-applicability payload,
Extension identifier, Schema, or writer behavior.

The motivating Name-specific meaning is:

```text
Name record N is an applicable Name expression for Entity E during interval I.
```

The comparison deliberately places beside it a superficially similar
non-Name meaning:

```text
Rule record R is valid during interval I.
```

The fixtures test whether the two statements share a semantic contract or only
share a structural shape.

## Reader profiles

### Profile B-full — Names plus temporal capability

Understands:

- Core Entity and Event identity;
- Names-owned Name records and Name-specific applicability meaning; and
- a future temporal capability for interval representation.

Does not infer that the profile itself owns `applies` semantics.

### Profile B-names-only

Understands Core and Names identity and domain meaning, but not the future
temporal capability. It preserves the temporal portion as unsupported research
data and must not invent a date or interval interpretation.

### Profile C-applicability-only

Understands a candidate generic applicability responsibility but does not
understand Names. It can preserve an unknown Name owner namespace, but it must
not claim to understand the Name expression or silently convert
Name-specific `used-during` into generic `valid-during`.

The existence of this profile is a test hypothesis. Its practical
interoperability value is not assumed.

## Fixture 1 — One Name during one bounded interval

### Setup

`N1@Names` is an identified Name record for `E1@Core`. The assertion says that
the Name expression was used during interval `I1`.

### Expected result

- Profile B-full resolves the Name and Entity references independently and
  understands the Name-specific domain meaning plus the temporal capability.
- Profile B-names-only understands the Name identity and domain relationship,
  preserves `I1` as unsupported temporal data, and does not invent a date.
- Profile C-applicability-only preserves the unknown Names owner and does not
  report a supported generic `valid-during` assertion.

### Failure to avoid

The temporal capability must not become the owner of what “applicable Name”
means merely because it represents `I1`.

## Fixture 2 — Successive non-overlapping Name records

### Setup

`N1@Names` applies to `E1` during `I1`; `N2@Names` applies to `E1` during a
later non-overlapping interval `I2`.

### Expected result

- Name identities remain distinct.
- Profile B-full can compare the intervals if its temporal capability supports
  them.
- Profile B-names-only preserves both Name records and their domain binding
  without fabricating temporal order.
- No reader redirects `N1` to `N2` or merges their expressions.

## Fixture 3 — Overlapping Name records

### Setup

`N1@Names` and `N2@Names` both apply to `E1` during overlapping intervals.

### Expected result

- Overlap is not automatically a structural error: multiple names may be
  usable concurrently.
- A reader may report overlap as information, but cannot infer conflict,
  preference, or truth without Names rules or adoption context.
- No temporal capability chooses one Name based only on interval comparison.

## Fixture 4 — Name-specific `used-during` versus rule `valid-during`

### Setup

The Dataset contains both:

```text
N1@Names is used for E1 during I1.
R1@Rules is valid during I1.
```

The structural form is intentionally similar, but the domain predicates are
different.

### Expected result

- Profile B-full treats the first as Names-owned domain meaning and the second
  as unsupported or separately owned rule meaning.
- Profile C-applicability-only may compare the shapes, but must not claim that
  `used-during` and `valid-during` share one semantic contract without
  explicit evidence.
- The fixture does not justify a generic `applies` predicate.

### Failure to avoid

Reusing one generic applicability field for usage, legal validity, attestation,
preference, and epistemic applicability would create a new semantic catch-all.

## Fixture 5 — Current Name edit from Alice to Bob

### Setup

`N1@Names` is initially the expression `Alice` and has a historical
applicability assertion for `I1`. The current Name record is later edited to
`Bob` without changing its research identity.

### Expected result

- All profiles report that record identity alone does not prove whether the
  historical assertion means Alice or Bob after the substantive edit.
- A safe implementation requires either a Names lifecycle rule that treats the
  substantive replacement as a new identity or explicit value-level historical
  information.
- The resolver must not copy the current value into the historical assertion.

### Failure to avoid

“Reference remains resolved” must not be reported as “historical expression
meaning remains resolved.” Resolver state and value-level meaning are separate.

## Fixture 6 — Unknown and missing references

### Setup

- `N-unknown@FutureNames` is referenced while `E1@Core` resolves.
- `N1@Names` is understood while `E-missing@Core` is absent.

### Expected result

- Unknown Name owner is `unknown`, not `missing`.
- Missing Entity target is `missing`, while the Name reference can remain
  `resolved`.
- The two reference states are independent and preserved through an unaware
  reader.

## Fixture 7 — Later epistemic enrichment

### Setup

An ordinary Name applicability record exists first. A user later adds Claim
and Evidence records concerning whether the Name applied during `I1`.

### Expected result

- The ordinary Name applicability remains Names-owned domain information.
- Claim/Evidence are added explicitly and do not arise automatically.
- Evidence does not change the Name record's resolver state or silently become
  the applicability owner.
- Disagreement between sources is not a structural error without adoption or
  co-applicability context.

## Abstract profile matrix

| Fixture | B-full | B-names-only | C-applicability-only |
| --- | --- | --- | --- |
| Name `used-during` | Interpret Names meaning + temporal capability | Interpret Names meaning; preserve temporal part | Preserve unknown Names meaning |
| Rule `valid-during` | Do not infer Names meaning | Preserve unsupported rule data | Only interpret if an independently defined Rule contract exists |
| Alice → Bob edit | Historical value unresolved without lifecycle/value rule | Same | Same; generic applicability cannot repair value meaning |
| Unknown Name owner | Preserve as unknown | Preserve as unknown | Owner is understood only if exact Names semantics exist |
| Missing Entity | Name and Entity references resolve independently | Same | Same |
| Later Claim/Evidence | Add explicitly; no reinterpretation | Preserve unsupported epistemic data | Preserve unsupported Names/Epistemic data |

## Acceptance criteria

The fixture review supports Model B as the current Name-specific baseline only
if:

- Names remains the owner of Name identity and domain applicability meaning;
- temporal capability supplies representation without owning `used-during`;
- Names-only readers preserve unsupported temporal data without inventing it;
- an applicability-only reader cannot claim semantic support merely from shape;
- Alice→Bob changes expose the unresolved lifecycle/value-level condition; and
- overlap and disagreement remain distinct from structural invalidity.

Model C may be reopened only if a later fixture set demonstrates the same
semantic contract in at least one non-Name domain and useful partial support for
an applicability-only reader.

## Research fixture file

The abstract cases are represented in:

- `examples/research/history-vnext/model-b-c-conceptual-fixtures.json`

The JSON is an internal research notation. It is not an E2R Dataset and must
not be imported by NarrativeLine, Linkscape, or Validator as a supported
Extension.

## Current conclusion

The fixtures reinforce Model B as the current Name-specific baseline and keep
Model C as an evidence-gated cross-domain candidate. They do not define how a
future temporal capability serializes intervals, how Names lifecycle treats
substantive expression edits, or how a Validator evaluates adoption and
competing assertions.

The read-only diagnostic harness is:

- `research/tools/history-vnext-model-b-c-diagnostic-harness.mjs`
- `research/tools/history-vnext-model-b-c-diagnostic-harness.test.mjs`

Its nine tests confirm the three profile boundaries, distinct `used-during`
and `valid-during` semantics, overlap coexistence, Alice-to-Bob historical
value uncertainty, independent unknown/missing diagnostics, explicit Claim/
Evidence enrichment, and preservation of unknown fixture cases.
