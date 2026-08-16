# P1 Lifecycle Integration — Prerequisite Readiness Audit

Date: 2026-08-14

Status: Research-only readiness; non-normative

## 1. Current verdict

`go with bounded research-only prerequisites`

The accepted P1 identity-continuity boundary is sufficient to define a small
future experiment, but NarrativeLine has no production P1 lifecycle operation
or lifecycle-aware reference model. A later implementation request must first
authorize an isolated research adapter and test input. This audit authorizes no
code change.

## 2. Why

The prerequisite experiment can use already pre-classified cases without
deciding how substantive change is detected. It can observe identity
continuity and old-reference non-retargeting while leaving lifecycle
vocabulary, persistence ownership, and writer behavior unresolved.

## 3. Existing production boundaries found

- `DatasetService.importDatasetJson()` parses and Core-validates a Dataset.
- `DatasetService.exportDatasetJson()` validates and serializes a Dataset,
  including existing Specification declaration preparation.
- `EntityService.updateEntity()` performs a Core Entity update while
  preserving other Entity properties and Extensions.
- NarrativeLine's Dataset and Core Object models permit unknown fields and
  opaque Extensions.
- The accepted research adapter and integration tests already establish the
  imported Dataset boundary and opaque round-trip behavior.

None of these boundaries interprets P1 lifecycle identity or references.

## 4. Missing boundary

NarrativeLine lacks a production operation that accepts a pre-classified P1
non-substantive edit or substantive replacement and lacks a production model
for an old reference to a P1 expression. The lifecycle fixtures are research
fixtures, not importable E2R Datasets, and must not be treated as a supported
Extension.

## 5. Minimal pre-classified non-substantive experiment shape

Use a research-only input already classified as an intended-expression-
continuous edit:

- before P1 ID: `N1`;
- after P1 ID: `N1`; and
- the intended expression remains the same.

The observable is identity continuity. The experiment must not define the
classification rule.

## 6. Minimal pre-classified substantive replacement shape

Use a research-only input already classified as replacement:

- before expression identity: `N1`;
- replacement identity: `N2`;
- `N1` and `N2` are distinct; and
- an existing reference to `N1` is not automatically retargeted to `N2`.

No replacement-detection algorithm is required or permitted in this bounded
experiment.

## 7. Minimal research-only old-reference observable

Use a test-only record with an opaque reference field containing `N1`, plus a
replacement record for `N2`. After the pre-classified replacement operation,
assert that the opaque reference still contains `N1`. The record is an
observation instrument only; it does not select a Target Reference format,
Names Payload, Extension ID, or general reference semantics.

If `N1` is absent from an active collection, the test must distinguish a
missing old target from the replacement `N2`. It must not infer retirement,
deletion, restoration, or redirect.

## 8. Candidate operation boundaries

| Candidate | Responsibility fit | Semantic risk | Writer-contract risk |
| --- | --- | --- | --- |
| Isolated research-only adapter over imported `Dataset` | Best fit for a bounded observation | Low if cases are pre-classified and opaque | Does not create a writer contract |
| New production `EntityService` lifecycle operation | Not currently owned by the Core Entity service | High; may establish lifecycle vocabulary or identity ownership | High; would need a separate contract |
| Test-local object transformation without imported Dataset boundary | Low; repeats conceptual evidence | Low | Does not demonstrate application integration |

The isolated adapter is the only suitable later direction for this bounded
experiment. Selecting it now does not authorize implementation.

## 9. Exact files a later implementation request would need to authorize

At minimum:

- `e2r-narrative-line/src/research/p1LifecycleExperiment.ts` — one
  research-only adapter, if required;
- `e2r-narrative-line/tests/p1LifecycleIntegration.test.js` — the imported
  Dataset boundary and pre-classified cases; and
- one inline research-only input in that test, unless a separate fixture is
  explicitly requested.

Existing production services should remain unchanged unless a later request
explicitly expands the scope and defines ownership.

## 10. Exact tests a later implementation request should require

- import of a valid research-only Dataset through `importDatasetJson()`;
- pre-classified non-substantive case retains `N1`;
- pre-classified substantive case observes `N2` as the explicitly supplied
  replacement identity, distinct from `N1`; the adapter does not infer or
  allocate the replacement identity;
- old `N1` reference remains `N1` and is not retargeted;
- if a research case explicitly supplies `N1` as absent from the active
  collection, that missing old target remains distinguishable from `N2`,
  without defining deletion, retirement, restoration, or redirect semantics;
- no identity inference from equal text, same Entity, language, script,
  transliteration, or naming-kind; and
- existing unrelated opaque data remains unchanged through the experiment.

## 11. Deferred semantics that remain untouched

Lifecycle vocabulary, retirement, deletion, restoration, redirect, merge,
split, cascade, migration, snapshot Payload, final Names Payload, Extension
ID, writer contract, preferred display, ranking, transliteration equivalence,
naming-kind semantics, temporal applicability, Grouping, and P2/P3 reopening
remain deferred or closed according to the current handoff.

## 12. Evidence interpretation

Success would demonstrate only that the accepted P1 identity-continuity and
non-retargeting boundaries can be observed through a bounded NarrativeLine
Dataset adapter using pre-classified cases.

It would not demonstrate a general lifecycle model, lifecycle vocabulary,
production writer behavior, migration, historical snapshot ownership, or
application UI behavior.

## 13. Grouping Selection Reopen Criteria

`no`. A lifecycle prerequisite experiment supplies no comparative evidence for
record-like, association-like, or packaged-data Grouping representation.
Grouping remains `defer selection`; P2/P3 remain closed.

## UTF-8 / mojibake audit

The intended Japanese value checks for this audit are to be performed with
UTF-8-aware string comparison, not terminal rendering. The relevant expected
value is Unicode `\u6771\u4eac` (`東京`). Suspicious mojibake and U+FFFD must be
absent from any newly created lifecycle research input. Existing historical
fixtures are not modified by this readiness audit.

## Audit boundary

This document changes no NarrativeLine production code, tests, fixture, or
normative specification. A later lifecycle implementation experiment requires
a separate explicit implementation request naming the adapter, input, tests,
and accepted P1 boundaries.
