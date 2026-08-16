# Name Identity Multilingual and Naming-Kind Fixtures

Date: 2026-08-14

Status: Research fixtures; non-normative

Related research:

- `name-identity-policy-review.md`
- `name-lifecycle-and-historical-value-ownership.md`
- `name-lifecycle-value-fixtures.md`

## Purpose

These fixtures compare three identity policies for Name records:

- P1 expression identity;
- P2 stable subject/binding identity; and
- P3 hybrid binding plus expression identities.

They focus on multilingual, multiscript, naming-kind, and context differences.
They do not define Name payload keys, an identity algorithm, an Extension,
Schema, or application migration behavior.

## Profiles

### P1 — Expression identity

Each independently meaningful expression and identity-bearing language/script or
naming-kind distinction may require a new Name identity. Historical
applicability targets the expression record.

### P2 — Subject/binding identity

One stable Name-to-Object binding groups expressions and variants. Historical
meaning requires explicit expression version or value-level information.

### P3 — Hybrid

An enduring binding and independently identifiable expression records coexist.
Historical applicability targets expression records while applications can
navigate through the binding.

## Fixture 1 — English and Japanese expressions

`N-en` is `Alice` in English/Latin script. `N-ja` is `アリス` in Japanese.
Both are associated with Entity `E1`.

Expected:

- P1 may use distinct Name identities when language/script is identity-bearing.
- P2 may group both under one binding, but must preserve each expression and
  language/script value separately.
- P3 keeps one binding plus two expression identities.
- No policy may infer that equal pronunciation or transliteration proves
  identity equivalence.

## Fixture 2 — Transliteration and script variant

`N-original` contains an original-script expression; `N-translit` contains a
transliteration. They may refer to the same Entity but need not represent the
same expression identity.

Expected:

- Transliteration is not silently merged with the original expression.
- Historical applicability can target one variant without rewriting the other.
- A preferred display selection is separate from identity and applicability.

## Fixture 3 — Naming-kind change

`N-short` is a short/common name. `N-legal` is a legal or official name for the
same Entity.

Expected:

- Naming-kind is not a display-only property by default.
- P1 may require distinct identities; P2 requires explicit typed variants; P3
  represents distinct expression records under one binding.
- A display preference must not decide legal identity or historical use.

## Fixture 4 — Context or community

`N-community-a` is used in Community A and `N-community-b` in Community B.

Expected:

- Context is not automatically part of expression identity or automatically
  ignored.
- Applicability context must remain separate from current value and
  presentation preference.
- Historical assertions need explicit context only when the domain meaning
  requires it.

## Fixture 5 — Historical expression edit

`N-en` was historically applicable during `I1`, then its expression is edited
from `Alice` to `Alicia`.

Expected:

- P1 creates a new expression identity or requires an explicit variant policy.
- P2 requires an expression version or value-level datum to preserve Alice.
- P3 creates a new expression record under the stable binding.
- All policies preserve the old applicability reference without generic
  redirect.

## Fixture 6 — Unknown language/script vocabulary

A reader understands the Name owner but not the language or script vocabulary.

Expected:

- Unsupported language/script metadata is preserved and reported separately.
- The Name record is not treated as missing merely because metadata vocabulary
  is unknown.
- The reader must not merge, normalize, or rewrite the expression.

## Comparison matrix

| Case | P1 | P2 | P3 | Required invariant |
| --- | --- | --- | --- | --- |
| English/Japanese | Distinct expressions possible | One binding, separate values | Two expression records | No pronunciation-based merge |
| Original/transliteration | Distinct identities possible | Variant values/version needed | Separate expressions | No silent merge |
| Short/legal naming-kind | Distinct identities likely | Explicit typed variants | Separate expressions | Preference does not define identity |
| Community context | Explicit qualifier or identity decision | Binding plus context/value | Expression plus context | Context is not presentation |
| Alice→Alicia | New identity/variant | Snapshot/version required | New expression record | No historical redirect |
| Unknown vocabulary | Preserve/report | Preserve/report | Preserve/report | Unknown ≠ missing |

## Acceptance criteria

The fixture review is successful if:

- language and script differences are not silently erased;
- naming-kind does not collapse into display preference;
- context is not silently treated as identity or presentation;
- historical applicability remains attached to the intended expression;
- unknown metadata remains preservable; and
- the three policies expose their different identity and value burdens.

No case by itself selects P1, P2, or P3 as a final Names rule. The evidence is
intended to show which policy is needed by a concrete workflow.

## Research fixture

The internal fixture is:

- `examples/research/names/name-identity-multilingual-fixtures.json`

It is not an E2R Dataset and must not be imported as a supported Extension.

## Next step

Run the read-only identity-policy harness and record whether the fixtures expose
an interoperability need for P2 or P3 beyond the conservative P1 guardrail.
