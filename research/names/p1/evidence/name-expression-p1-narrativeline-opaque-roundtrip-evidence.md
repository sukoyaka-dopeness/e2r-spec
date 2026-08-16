# P1 Name Expression — NarrativeLine Opaque Round-Trip Evidence

Date: 2026-08-14

Status: Accepted research-only application-boundary evidence; non-normative

## Production workflow

The experiment passes a research-only Names-shaped E2R Dataset through
NarrativeLine's existing production path:

1. `importDatasetJson()`;
2. unrelated Core `description` edit through production `updateEntity()`;
3. `exportDatasetJson()`;
4. reload through `importDatasetJson()`; and
5. second `exportDatasetJson()`.

No production implementation, UI, writer contract, or specification code was
changed for the experiment.

## Demonstrated preservation

The test-only identifier is `research.fixture.p1-names`; it is an input marker
only and does not select a final Names Payload or Extension ID. The experiment
demonstrates preservation of independent P1 expression IDs, values including
`東京`, `Tokyo`, and `Tōkyō`, language and script metadata, unknown fields and
nested unknown data, explicit `null`, ordered array contents, the complete
opaque Names subtree after reload, and first/second export equality as parsed
JSON data models.

The only intended Dataset change is the unrelated Entity `description`.
Whitespace, indentation, line endings, trailing newline, property order, and
equivalent JSON escaping are serialization-only differences.

## Evidence boundary

This demonstrates NarrativeLine production import/export opaque P1 save/load
preservation and preservation after an unrelated supported Core edit. It does
not demonstrate lifecycle integration, search indexing or ranking, Names
writer behavior, preferred display, transliteration equivalence, or any final
Names representation.

It does not select or define a final Payload, Extension ID, Grouping, Group
identity, cardinality, lifecycle vocabulary, migration, validator severity,
writer contract, or temporal applicability.

Grouping representation selection remains `defer selection`. P2/P3 remain
closed. This experiment produces no comparative evidence satisfying the
Grouping Selection Reopen Criteria.

Test:

- `../../e2r-narrative-line/tests/p1NameExpressionDiscovery.test.js`
