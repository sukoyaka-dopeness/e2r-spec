# P1 Name Expression — Linkscape Opaque Round-Trip Evidence

Date: 2026-08-14

Status: Accepted research-only integration evidence; non-normative

## Consumer and scope

Linkscape acts as a Names-unaware consumer. A research-only E2R Dataset carries
opaque Names-shaped data under the test-only identifier
`research.fixture.p1-names`. Neither the identifier nor the input shape selects
a final Names Payload or Extension ID.

The production Linkscape data path is exercised without production-code
changes:

1. `loadDataset()`;
2. an unrelated Entity `description` edit through `updateEntityDetails()`;
3. first `serializeDataset()`;
4. reload through `loadDataset()`; and
5. second `serializeDataset()`.

## Demonstrated preservation

The integration test demonstrates that Linkscape:

- accepts the Dataset while reporting the Names-shaped payload as an unknown
  Extension;
- preserves the opaque Names subtree across an unrelated Core edit;
- preserves P1 expression IDs, values, language and script metadata;
- preserves additional unknown fields, explicit `null`, array contents and
  array order;
- changes no Dataset data other than the intended Entity `description`; and
- produces first and second saves that are equal as parsed JSON data models.

Whitespace, indentation, property order, and other serialization-only
differences are outside the comparison.

Test:

- `../../e2r-linkscape/tests/dataset.test.ts`, test named `preserves opaque P1
  Names research data through an unrelated Core edit and two saves`

Verification at acceptance:

- 72 Linkscape tests passed;
- TypeScript no-emit check passed;
- production build passed; and
- `git diff --check` passed.

## Evidence boundary

This is real serializer round-trip evidence for one Names-unaware consumer. It
does not demonstrate exact Entity discovery in an application, lifecycle edit
behavior in an application, a search index, or ranking.

It does not select or define a final Names Payload, Extension ID, Stable or
Draft Names Extension, Grouping representation, Group identity, cardinality,
writer contract, migration, validator severity, preferred display,
transliteration equivalence, naming-kind semantics, or temporal applicability.

Grouping representation selection remains `defer selection`. P2/P3 remain
closed. This experiment produces no comparative evidence satisfying the
Grouping Selection Reopen Criteria.
