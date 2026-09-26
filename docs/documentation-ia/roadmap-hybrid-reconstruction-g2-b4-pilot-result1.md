# Roadmap Hybrid Reconstruction - G2-B4 Pilot Result 1

Date: 2026-09-25
Status: BOUNDED A-STYLE PILOT COMPLETE / G2-B4 ONLY / B1, B2, B3 UNCHANGED

## Scope

This bounded pilot applies the approved A-style Hybrid reconstruction only to
`G2-B4 — Independent Risk-Gate / Probe-Target Stability`. The existing
Roadmap heading and anchor were retained. The Roadmap now carries the
bounded fail-closed safety consequence and the still-live target/risk
qualification without treating either as production readiness.

`G2-B1`, `G2-B2`, and `G2-B3` were not edited. G2-C and G2-D were also out
of scope.

## Current planning consequence retained

- Failed, timed-out, or nonzero-exit probes fail closed and cannot produce a
  partial or unverified selected result.
- Generation-order sensitivity remains meaningful negative evidence, with
  target changes and returned dense misses under generation-index perturbation.
- Independent controls still contain meaningful misses; risk-gate readiness
  remains `OPEN`.
- Probe-target readiness remains `NOT ESTABLISHED`, and the multi-stage
  selector remains diagnostic-only rather than a production selection policy.
- Product adoption, quality solver, provider, Product integration/default,
  Adaptive Cascade, visual acceptance, Human Review, SLA, and release
  readiness remain unestablished or open.

## Historical delegation and provenance

The original B4 block was appended to
`docs/roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md`.
Its original heading, date, disposition wording, source order, measurements,
Session reference, and dedicated result link were preserved. Only the relative
result path was adjusted for the History directory. No new History taxonomy or
micro-file was introduced.

The compressed Roadmap heading points to the dedicated result and the History
anchor:

`#liaisonscape-independent-risk-gate-probe-target-stability-validation-1-2026-09-14`

## Verification

Before this pilot, `docs/roadmap.md` contained 4,369 lines and 237 ATX
headings; the existing History unit contained 3,303 lines and 305 ATX
headings. After the pilot, the measured counts are 4,366 lines and 237 ATX
headings for Roadmap, and 3,335 lines and 306 ATX headings for the History
unit.

The bounded checks for this change are:

- the G2-B4 heading and anchor remain in Roadmap;
- the G2-B1, G2-B2, and G2-B3 headings remain present and were not edited;
- the dedicated result and History anchor are reachable from the compressed
  Roadmap text;
- only this result, the Roadmap, the existing broad History unit, and the
  documentation README are in the intended checkpoint scope;
- `git diff --check` and `git diff --cached --check` pass; and
- `npm.cmd run validate` passes.

This result records documentation responsibility only. It does not establish
a stable target rule, risk-gate closure, production selector, quality solver,
Product integration, provider, Product adoption, SLA, release gate, visual
acceptance, or Human Review readiness.
