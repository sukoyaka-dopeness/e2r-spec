# Name Lifecycle and Value Fixtures

Date: 2026-08-14

Status: Research fixtures; non-normative

Related research:

- `name-lifecycle-and-historical-value-ownership.md`
- `history-vnext-model-b-c-fixtures.md`
- `target-reference-draft-representation.md`
- `field-slot-value-ownership-review-disposition.md`

## Purpose

These fixtures compare lifecycle Model L1 (immutable substantive expression
identity) and Model L2 (mutable identity with explicit value-level snapshot).
They test whether a historical applicability reference preserves historical
expression meaning after edits.

The fixtures do not define Names payload keys, value snapshot structure,
Extension identifiers, Schemas, or writer behavior.

## Abstract records

- `N1@Names` — independently identifiable Name expression record.
- `E1@Core` — Core Entity to which the Name is bound.
- `I1` — temporal applicability interval.
- `V1@ValueData` — explicit value-level historical datum; ownership is only
  conceptual in this review.
- `C1@Claims` and `D1@Evidence` — later epistemic records, not automatic
  lifecycle output.

## Fixture 1 — Cosmetic metadata edit

`N1` has expression `Alice`. A display note or presentation metadata changes,
but the represented expression remains Alice.

Expected under both L1 and L2:

- `N1` identity remains stable;
- the applicability reference to `N1` remains historically meaningful; and
- no value snapshot is required merely because presentation metadata changed.

## Fixture 2 — Alice to Bob substantive replacement

`N1` initially represents Alice and applies during `I1`. The expression is
changed to Bob.

Expected under L1:

- Alice remains `N1`;
- Bob receives a new Name identity, for example `N2`; and
- the old applicability reference remains about Alice without redirect.

Expected under L2:

- `N1` may retain identity and now hold Bob;
- the old applicability meaning is unresolved unless an explicit value datum
  preserves Alice; and
- a current resolved `N1` reference must not be reported as proof that Alice
  remains its current or historical value.

## Fixture 3 — Language or script change

`N1` represents an English expression and is changed to a Japanese or alternate
script expression.

The fixture leaves identity policy open, but requires an explicit decision:

- if language/script is part of expression identity, create a new identity;
- if the same Name record may contain variants, preserve separate expression
  values and applicability meaning; or
- if historical exact expression matters, retain explicit value-level data.

Text equality or display preference must not select the policy automatically.

## Fixture 4 — Old and new applicability references

`N1` (Alice) applies during `I1`; `N2` (Bob) applies during `I2` after a
substantive replacement.

Expected:

- both identities remain independently resolvable;
- `I1` does not redirect to `N2`; and
- interval ordering does not itself prove that Bob replaced Alice or that one
  Name is preferred.

## Fixture 5 — Explicit L2 value snapshot

Under L2, `N1` is currently Bob but an applicability assertion for `I1` has an
explicit value datum `V1` containing Alice.

Expected:

- `N1` reference resolves to the current Name record;
- `V1` preserves the historical value separately;
- resolver classification does not receive or rewrite `V1`; and
- removing or changing the current value does not silently rewrite `V1`.

## Fixture 6 — Unknown, missing, retired, and replaced identities

The fixture includes:

- `unknown@FutureNames:N9`;
- absent `N-missing@Names`;
- retained identity-bearing retired `N-retired@Names`; and
- replaced `N-old@Names` with new `N-new@Names`.

Expected:

- unknown owner is `unknown`;
- understood absent identity is `missing`;
- retained retired identity may remain `resolved`; and
- replacement does not authorize generic redirect.

## Fixture 7 — Later Claim/Evidence addition

After the Name lifecycle operation, a user adds `C1@Claims` and `D1@Evidence`
to discuss whether Alice applied during `I1`.

Expected:

- Claim and Evidence are explicit additions;
- they do not rewrite Name identity or current value;
- Evidence does not become a lifecycle rule; and
- a Citation or Provenance record is not inferred automatically.

## Acceptance criteria

The fixture review succeeds if both lifecycle profiles:

- distinguish resolver state from historical value meaning;
- preserve old references without automatic redirect;
- preserve unknown and missing references;
- keep current value and value-level datum separate;
- keep Claim/Evidence enrichment explicit; and
- expose the unresolved L2 case when no snapshot exists.

L1 remains the safer provisional direction when independently referenced Name
expressions must preserve historical meaning. L2 remains viable only when
explicit snapshot ownership is available.

## Research fixture

The internal fixture is:

- `examples/research/names/name-lifecycle-value-fixtures.json`

It is not an E2R Dataset and must not be imported as a supported Extension.

## Next step

Use the read-only lifecycle diagnostic harness to verify these cases. Do not
add Name editing or snapshot persistence to any application.
