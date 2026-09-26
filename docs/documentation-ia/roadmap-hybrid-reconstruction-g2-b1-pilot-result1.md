# Roadmap Hybrid Reconstruction - G2-B1 Pilot Result 1

Date: 2026-09-25
Status: BOUNDED A-STYLE PILOT COMPLETE / G2-B1 ONLY / B2-B4 UNCHANGED

## Scope

This bounded pilot applies the approved A-style Hybrid reconstruction only to
`G2-B1 — cheap screening / finalist recall`. The Roadmap heading and anchor
were retained. Its body now states the current planning consequence and the
negative/open boundaries; dated measurements, fixture-specific observations,
and checkpoint-era progression are delegated to the dedicated result and the
existing broad Layout and Auto Layout chronology.

`G2-B2` (multi-stage probing), `G2-B3` (boundary equivalence-class
completion), and `G2-B4` (risk-gate / probe-target stability) were not
changed. G2-C and G2-D were also out of scope.

## Current planning consequence retained

- Screening is useful as a bounded diagnostic reduction of finalist
  candidates, but cheap-only production screening remains `NOT ESTABLISHED`.
- Meaningful dense misses remain where cheap summaries do not distinguish
  materially different Product routing outcomes.
- The evidence does not establish a production selector, quality solver,
  Product default/integration, production provider, or general quality
  closure.
- Probe and risk-gate work remain separate responsibilities; this pilot does
  not close their live qualification boundaries.
- Roadmap remains the sole current-planning authority, while the dedicated
  result and broad History remain evidence authorities for their respective
  detail and chronology.

## Historical delegation and provenance

The original B1 block was appended to
`docs/roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md`.
The original heading, date, status language, source order, measurements,
fixture names, and dedicated result link were preserved. Only the relative
path in the History copy was adjusted for its directory depth. No new History
taxonomy or micro-file was introduced.

The current Roadmap heading points to both the dedicated result and the
existing History anchor:

`#liaisonscape-bounded-screening-formulation-finalist-recall-1-2026-09-14`

## Verification

Before this pilot, `docs/roadmap.md` contained 4,393 lines and 237 ATX
headings; the existing History unit contained 3,199 lines and 302 ATX
headings. After the pilot, the measured counts are 4,387 / 237 and 3,229 /
303 respectively. The heading count in Roadmap is unchanged, and the History
unit gained one preserved chronology heading.

The following checks were performed for this bounded change:

- the G2-B1 heading and anchor remain in Roadmap;
- the G2-B2, G2-B3, and G2-B4 headings remain present and were not edited;
- the dedicated result and History anchor are reachable from the compressed
  Roadmap text;
- the staged paths are limited to the Roadmap, the existing History unit,
  `docs/README.md`, and this result record;
- `git diff --check` and `git diff --cached --check` pass; and
- `npm.cmd run validate` passes.

This result records documentation responsibility only. It does not establish
a Product selector, solver, provider, default, integration, SLA, release
readiness, visual acceptance, or Human Review readiness.
