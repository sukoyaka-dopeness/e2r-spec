# E2R Session 0026 — Handoff

Date: 2026-08-14

## Repository safety

The e2r-spec and sibling application repositories contain uncommitted work.
Do not reset, checkout, commit, push, or overwrite unrelated changes. Preserve
all existing work.

## Current architectural state

- P1 Name expression identity/preservation: accepted conceptual evidence.
- Independent exact Entity discovery through `東京`, `Tokyo`, and `Tōkyō`:
  accepted conceptual evidence.
- P1 lifecycle boundary: accepted; pre-classified non-substantive edits retain
  identity, substantive replacement creates a new identity, and old references
  are not automatically retargeted.
- Core `name` boundary: accepted with Core-defined label semantics separated
  from Names fallback usage; differences are not Core validity errors.
- NarrativeLine P1 integration Go/No-Go criteria: accepted, research-only;
  implementation is not authorized.
- Grouping responsibility: P1 expression identity plus optional explicit
  grouping.
- Grouping representation selection: `defer selection`; record-like,
  association-like, and optional packaged-data directions remain unresolved.
- P2/P3: closed unless persistent Name-to-Object binding-target evidence
  appears.

## Evidence status

Accepted conceptual evidence includes identity/preservation, exact Entity
discovery, overlapping rationales, missing target preservation, opaque partial
support, replacement non-retargeting, and unrelated-edit preservation.

Accepted research-only integration evidence now also includes a Linkscape
Names-unaware opaque round trip through an unrelated Core edit, reload, and
second save. This demonstrates preservation of P1-shaped IDs, values,
language/script metadata, unknown fields, explicit nulls, and array order for
that consumer only.

It also includes independent exact P1 Entity discovery through NarrativeLine's
production import and validation boundary followed by a research-only adapter.
This is limited to exact discovery of explicit expression values; it does not
demonstrate NarrativeLine save/load preservation, lifecycle integration,
ranking, or writer behavior.

NarrativeLine production import/export opaque P1 save/load preservation is now
also accepted research-only integration evidence. The experiment includes an
unrelated production Core edit, reload, and second export, and preserves P1
IDs, values, language/script metadata, unknown data, explicit nulls, and array
order. It does not demonstrate lifecycle integration, ranking, or writer
behavior.

NarrativeLine now also has accepted research-only lifecycle evidence for
pre-classified non-substantive continuity, explicitly supplied `N2`
replacement, and imported old-reference non-retargeting. After replacement,
recognized P1-like `N1` is absent while an opaque same-id member may remain;
the test does not assign identity semantics to that opaque member or define
duplicate-ID semantics.

Not implemented or not demonstrated:

- real search index or ranking;
- NarrativeLine lifecycle integration;
- general lifecycle model and classification algorithm;
- Names writer behavior;
- real pre-classified lifecycle integration;
- transliteration/identity equivalence;
- preferred display or Grouping behavior.

## Canonical Grouping handoff

Use `research/names/grouping/current/name-grouping-current-handoff-index.md` first. It points to the
primary readiness handoff:

`research/names/grouping/current/name-grouping-representation-selection-readiness-handoff.md`

The seven Read first files listed there are authoritative. The current result
is `defer selection`; do not select a representation or add semantic fixtures
for deferred cardinality/Group identity questions.

## P1 handoffs

- `research/names/p1/historical-handoffs/name-expression-p1-ownership-review-handoff.md`
- `research/names/p1/historical-handoffs/name-expression-p1-lifecycle-review-handoff.md`
- `research/names/p1/historical-handoffs/name-expression-p1-consumer-experiment-handoff.md`
- `research/names/p1/historical-handoffs/name-expression-p1-integration-experiment-handoff.md`
- `research/names/p1/historical-handoffs/name-expression-p1-narrativeline-integration-gate-handoff.md`

## Implementation boundary

Do not implement until the user explicitly names the target repository/application,
reader/writer/serializer/integration scope, research-only fixture, accepted P1
boundaries, and concrete files/tests. Use
`research/names/p1/decisions/name-expression-p1-implementation-request-checklist.md`.

## Verification

The latest relevant harnesses pass, and `git diff --check` passes. Do not
interpret conceptual harnesses as production integration evidence.

## Names Draft 0.1.0 local schema checkpoint

The accepted Draft 0.1.0 local structural schema is implemented at
`schemas/extensions/names-draft.schema.json` using JSON Schema Draft 2020-12.
The focused validation harness is
`scripts/validate-names-draft-schema.mjs`, wired into `npm run validate`.

The schema covers the object payload, required `expressions` array, non-empty
string `id` and `value`, optional non-null string `language` and `script`,
unknown-property preservation boundaries, empty arrays, equal values with
distinct IDs, and rejection of unrecognized expression members. Defined-field
null regression cases for `id`, `value`, `language`, and `script` are covered.
Whitespace-only values remain allowed. Dataset-wide recognized-ID uniqueness is
intentionally outside this local schema and remains a separate validator task;
`uniqueItems` is not used.

The checkpoint is accepted after full validation, UTF-8/U+FFFD and mojibake
checks, trailing-whitespace checks, and `git diff --check`. The next bounded
task is Dataset-wide Names-owned recognized-ID uniqueness across Entity, Event,
and Relation. Severity, diagnostic codes, aggregation, and repair remain
deferred.

Stable `names`, production writer, migration, final Target Reference, and
Grouping remain unchanged: Stable/writer/migration/Target Reference are
deferred or unresolved, Grouping is `defer selection`, P2/P3 are closed, and
Grouping Selection Reopen Criteria evidence remains `no`.
