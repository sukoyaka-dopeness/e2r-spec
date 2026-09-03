# LiaisonScape Visual Evidence Run Configuration Design1 Correction1

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-DESIGN1-CORRECTION1`

Date: 2026-09-03

Status: complete; additive documentation correction only.

## CASE / Decision

**CASE 1 — COUNT CONTRACT CORRECTED**

**Decision A:** The phase cardinality contract is corrected additively. Phase M
requires 160 candidate V0/V1/V2 terminal rows, not 240. Phase B owns 80
candidate V3 rows. The full candidate V0–V3 plan remains 240. Diagnostic rows
remain 40. No other Design1 contract changes.

The exact next prerequisite remains:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE1`

It is **NOT STARTED**. This correction does not freeze a numeric runtime
transform and does not authorize that next checkpoint.

## Original authority and defect

The corrected source is the original Design1 result:

`docs/liaisonscape-initial-placement-seed-production-visual-settling-routing-evidence-run-configuration-design1.md`

Original Design1 commit:

`04a7a24997d1f008e9dbb57aec4e6552b0d719d6` —
`docs: design LiaisonScape visual evidence run configuration`

The affected meaning appears in the Design1 “B0/B1 timing and completeness”
section. It states, in substance:

```text
Machine phase complete only when all 240 planned candidate V0/V1/V2 rows
(40 + 40 + 80) and all 40 B0/B1 rows have terminal status.
```

The arithmetic in the parenthetical is 160, not 240. The 240 value includes
the 80 V3 browser rows and therefore cannot be a Phase M prerequisite when
Phase B is defined to begin only after Phase M completes. This is a count and
phase-completion contract defect, not a change to the underlying matrix.

This Correction1 is additive. The original Design1 commit and prose remain
historical and are not amended, rebased, rewritten, or removed. This document
is the authoritative interpretation for the affected phase counts.

## Cardinality proof

The frozen matrix has five candidates, eight structural fixtures, and two
locales for presentation stages:

| Stage / category | Arithmetic | Rows |
| --- | --- | ---: |
| V0 | 5 candidates × 8 structural fixtures | 40 |
| V1 | 5 candidates × 8 structural fixtures | 40 |
| V2 | 5 × 8 × 2 locales | 80 |
| V3 | 5 × 8 × 2 locales | 80 |
| Candidate Machine | V0 + V1 + V2 = 40 + 40 + 80 | **160** |
| Candidate Browser | V3 = 80 | **80** |
| Candidate full V0–V3 | 160 + 80 | **240** |
| B0 diagnostics | structural diagnostics | 8 |
| B1 diagnostics | presentation diagnostics spanning V2/V3 | 32 |
| Diagnostics total | B0 + B1 = 8 + 32 | **40** |

The values are independently confirmed by the accepted Harness
Implementation1 result, which records V0 `40`, V1 `40`, V2 `80`, V3 `80`, B0
`8`, B1 `32`, and diagnostic total `40`. No accepted authority contradicts
these cardinalities.

## Corrected phase completeness contract

`PR3-PHASE-CARDINALITY-CORRECTION1` is frozen with these meanings:

```text
CANDIDATE-MACHINE-ROWS = 160
  V0 = 40
  V1 = 40
  V2 = 80

CANDIDATE-BROWSER-ROWS = 80
  V3 = 80

CANDIDATE-FULL-V0-V3-ROWS = 240
  V0 = 40
  V1 = 40
  V2 = 80
  V3 = 80

DIAGNOSTIC-ROWS = 40
  B0 = 8
  B1 = 32
```

Phase M is complete only when:

- all 160 planned candidate V0/V1/V2 rows have terminal machine status;
- all 40 B0/B1 diagnostic rows required by the frozen diagnostic contract
  have terminal status; and
- all required Phase M artifact and linkage audits are complete.

Phase M does **not** wait for V3. V3 belongs to Phase B. Phase B completeness
is unchanged: all 80 planned V3 presentation rows must have either a valid
browser capture or an explicit terminal failure/missing status under the
accepted failure and survivor-bias contract.

The distinction is mandatory: 160 is the candidate Machine total, 80 is the
candidate Browser total, and 240 is the full candidate V0–V3 total. The value
240 must not be globally replaced with 160.

## B0/B1 ambiguity audit

The Design1 wording describes B0 as 8 structural diagnostics and B1 as 32
presentation diagnostics. The accepted Harness Implementation1 result also
records B0 `8`, B1 `32`, and explicitly preserves B0/B1 as current-Product
diagnostics with no candidate execution. The surrounding contracts describe
B1 as presentation diagnostics spanning the V2/V3 presentation surfaces.

There is **no secondary diagnostic-phase ambiguity** requiring CASE 3. This
correction does not change B1 from 32, does not redefine B1 as machine-only,
and does not silently decide a new ordering rule for candidate V3. The existing
Design1 execution decomposition remains in force; only the Phase M count is
corrected so that its gate is not circular.

## Unchanged Design1 contracts

Correction1 does not alter any of the following:

- Design1 CASE 2 / Decision B;
- T-D selection;
- `PR3-RUNTIME-TRANSFORM-v1 = UNFROZEN`;
- implementation-test `originX=100/1`, `originY=200/1`, `scale=10/1` remaining
  non-authoritative;
- `PR3-BROWSER-AUTHORITY-v1`;
- Microsoft Edge Stable as canonical browser policy;
- browser fallback = NO;
- capture viewport 1280 × 900 CSS pixels;
- DSF exactly 1;
- browser zoom 100%;
- SVG viewBox `0 0 800 500`;
- `PR3-RUN-IDENTITY-v1`;
- `PR3-SOURCE-FREEZE-v1`;
- E-C bounded-batch execution;
- Phase M / B / R / P decomposition;
- `PR3-RETRY-v1`;
- B-S1 fresh browser per V3 cell;
- artifact immutability;
- `PR3-RESUME-v1`;
- review anonymization and deterministic review order;
- prohibition on ranking, winner, and selection semantics;
- historical `...EVIDENCE-EXECUTION1` = `RENAMED / SPLIT`; and
- the exact next prerequisite `...RUN-CONFIGURATION-EVIDENCE1`.

## Authorities and non-execution

Current Product authority remains:

`563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`

Current Harness authority remains:

`9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`

Harness is unchanged and remains a disposable, unadopted candidate. Live is
unchanged. The retained materializer and baseline2 are unchanged.

No candidate or materializer execution occurred. PR-3 executed records remain
`0`. B0/B1 were not executed. No browser was launched, no CDP session was
opened, no screenshot was captured, and no human review was performed.
`E-VISUAL = NO`, candidate selected = `NO`, Product integration = `NO`, and
`PR-3 = NO`.

## Knowledge Candidate assessment

No new reusable workspace knowledge entry is needed. This is a correction to
a repository-local run-configuration count contract and is fully recorded in
this result and the additive roadmap entry. `ai-knowledge` is unchanged.

## Result and next action

The phase-count defect is corrected additively under
`PR3-PHASE-CARDINALITY-CORRECTION1`. The original Design1 history remains
unchanged. The exact next prerequisite remains:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE1`

It is **NOT STARTED**. No numeric transform was frozen, and no push, tag,
release, deploy, or publication occurred.
