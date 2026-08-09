# E2R Medium- and Long-term Roadmap

This roadmap consolidates open work recorded in Sessions 0001–0022. It is a
planning document, not a normative part of the E2R Core or any Extension.
Later session logs remain historical records; this document is the current
priority summary.

## Completed or no longer active

These items appeared as future work in earlier sessions but are now complete
or superseded:

- NarrativeLine MVP, including Japanese and English UI, samples, import/export,
  title editing, guide links, and Validator warning display.
- Bilingual E2R overview guides, including JSON examples and AI workflow
  guidance.
- Standalone Validator MVP, reusable library API, CLI, fixture validation, and
  npm publication of `0.1.3` through GitHub Actions Trusted Publishing.
- Validator release documentation, CHANGELOG, package smoke test, and
  tag/version checks.
- Core prohibition on Relation-to-Relation endpoints and the corresponding
  Linkscape documentation correction.

## Priority 1 — operational reliability

### 1.1 Maintain Validator release operations

Keep the controlled tag-based release process working for the next package
change. Each release should run lint, tests, specification fixtures, package
inspection, and the tag/version check before publishing.

### 1.2 Maintain the shared validation contract

When Core or official Extensions evolve, update the Validator, diagnostics,
fixtures, and public documentation together. Preserve the distinction between
Core errors, warnings, informational or skipped Extension validation, and
application-specific checks.

## Priority 2 — Linkscape implementation readiness

### 2.1 Keep the MVP boundary stable

The current target is an Entity-first graph viewer and light editor:

- import a Dataset;
- display Entity nodes and Relation edges;
- zoom, pan, select, and open Entity Detail;
- drag nodes; and
- save coordinates only after intentional user action.

The acceptance criteria are in
[`applications/linkscape-mvp-acceptance.md`](../applications/linkscape-mvp-acceptance.md).

### 2.2 Begin implementation from the accepted MVP boundary

The `e2r-linkscape` repository has been created. Inspect its initial state and
port the acceptance criteria into automated tests before expanding the MVP.
Do not standardize Coordinate or Layout Extensions merely to start the
application.

### 2.3 Resolve coordinate and layout requirements empirically

First observe real Linkscape behavior. Then decide whether user coordinates
belong in a Coordinate Extension, application state, or both. Treat automatic
layout as a reusable engine and preserve explicit user coordinates.

## Priority 3 — documentation and interoperability

### 3.1 Keep the bilingual guide aligned

When E2R examples, Core rules, or official Extensions change, update the
Japanese and English guides together. Keep links pointed at canonical examples
and avoid duplicating a second incompatible JSON source.

### 3.2 Document AI workflows without overclaiming

E2R JSON may act like an intermediate language between people, applications,
and AI systems. Future examples may cover analysis, summarization, PDF
generation, and Dataset repair loops. Validator checks structural conformance;
it does not establish factual truth or guarantee the quality of generated prose.

### 3.3 Add neutral visual documentation when needed

Create Core and Core/Extension diagrams only when a concrete documentation or
application need exists. Keep SVG source ownership unambiguous and treat
colors, layout, and iconography as presentation rather than Core semantics.

## Priority 4 — research backlog

These topics remain valuable but should not block the MVP or expand the Core:

- Media Extension and references to external media;
- AI generation, validation, and repair workflows;
- provenance, sources, external identifiers, Wikidata import, and external
  vocabulary mapping;
- deterministic layout seeding and graph-stable placement;
- multiple Datasets, merge, provenance, and cross-Dataset references;
- alternative calendars, relative time, intervals, and temporal constraints;
- Dictionary Extension versioning, inheritance, and external dictionaries;
- View or Presentation Extensions; and
- richer semantic Relation vocabularies.

Each topic should first produce a focused research note and interoperability
requirement before becoming a normative specification proposal.

## Explicitly deferred

The following are not current priorities unless new user evidence changes the
decision:

- short-term NarrativeLine UI changes while friend review is pending;
- Event Detail, Entity Detail, and Entity Picker redesign;
- direct Relation editing in NarrativeLine;
- search, filtering, undo/redo, and multiple-Dataset workflows;
- Relation semantic labels in Linkscape MVP; and
- standardization of Coordinate, Layout, Dictionary, Media, or AI Extensions.

## Priority rule

Prefer work that increases executable evidence and interoperability:

1. release and validation reliability;
2. small application acceptance tests;
3. documentation aligned with tested examples; then
4. research and new Extensions.

Do not promote a historical “future work” item to active scope solely because
it appears in an older session log.
