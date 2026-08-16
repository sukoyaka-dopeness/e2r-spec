# P1 Name Expression — NarrativeLine Exact-Discovery Evidence

Date: 2026-08-14

Status: Accepted research-only application-boundary evidence; non-normative

## Consumer boundary

The experiment passes a research-only Names-shaped E2R Dataset through
NarrativeLine's production `importDatasetJson()` boundary, Core validation, and
the NarrativeLine `Dataset` model before passing the imported Dataset to a
research-only exact-discovery adapter.

The test-only identifier `research.fixture.p1-names` and its input shape do not
select a final Names Payload, Extension ID, Draft/Stable Extension, Grouping
representation, or stable Name-to-Object binding model.

## Demonstrated discovery

The adapter performs only direct string equality over explicit expression
values:

- `東京` → Entity `E1`, expression `N-ja`;
- `Tokyo` → Entity `E1`, expression `N-en`;
- `Tōkyō` → Entity `E1`, expression `N-tr`;
- `tokyo` → no result; and
- `Tōkyō ` → no result.

The three expression IDs remain distinct. No merge, rewrite, retarget,
ranking, preference, normalization, or equivalence inference occurs.

## Evidence boundary

This demonstrates independent exact P1 Entity discovery through the
NarrativeLine application data boundary as research-only integration evidence.
That exact-discovery experiment itself did not test NarrativeLine save/load P1
preservation, unrelated Core edit opaque preservation, pre-classified lifecycle
behavior, search indexing, ranking, preferred display, transliteration
equivalence, or writer behavior.

It does not select or define a final Names Payload, Extension ID, Grouping,
Group identity, cardinality, lifecycle vocabulary, migration, validator
severity, or temporal applicability.

Grouping representation selection remains `defer selection`. P2/P3 remain
closed. This experiment produces no comparative evidence satisfying the
Grouping Selection Reopen Criteria.

Test:

- `../../e2r-narrative-line/tests/p1NameExpressionDiscovery.test.js`
