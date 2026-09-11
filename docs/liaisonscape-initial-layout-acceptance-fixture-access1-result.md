# LiaisonScape Initial Layout Bounded Acceptance-Fixture Access

Date: 2026-09-11

## Decision

Add a development-only Vite middleware endpoint that reads the canonical
fixtures directly from `../e2r-spec/examples`. It accepts only the named
fixture and locale combinations used for this gate and is reached only by the
explicit query seam:

`?initial-layout=coarse-objective-prototype-v1&diagnostic=timing&acceptance-fixture=<name>&acceptance-locale=<en|ja>`

The App fetches that endpoint and passes the returned text to the existing
Dataset `open`/schedule/accept path. It does not create a second fixture copy,
fixture-specific coordinates, candidate output, or a production sample UI.

## Actual cause resolved

Canonical Titanic and Apollo fixtures existed only in `e2r-spec/examples`,
while LiaisonScape exposed only Lighthouse in `public/`. Browser file-picker
automation could open the picker but could not safely inject a local file.
The bounded dev endpoint removes that acquisition blocker without changing
Product Dataset semantics. The implementation also accounts for canonical
filenames (`titanic-final-voyage`, `apollo-11-mission`, and
`lighthouse-restoration-demo`) behind stable acceptance names.

## Product evidence

- Titanic EN and JA opened through the normal Product parse/accept path,
  reached graph stable, fit the viewport, and rendered nodes, routes, and
  labels.
- Apollo EN and JA opened through the same path and reached graph stable. The
  timing diagnostic reported `current-fallback/fallback/unsafe-candidate` for
  the bounded provider, and the Product graph remained usable.
- The observed Titanic parallel/long-label pressure and Apollo routing/label
  behavior are presentation observations. Known routing, Relation-label,
  self-loop, and connector tracks remain separate from Initial Layout
  acceptance.
- No coarse-only visual defect was confirmed in the observed screens.
- Save followed by reopening the exact same saved Dataset payload was not
  completed; reopening the canonical fixture would reload the original
  coordinate-less source and would not prove persistence.

## Safety and validation

- No Product default or default authority changed.
- No fixture content was copied into Product assets.
- Production build output contains no acceptance-fixture endpoint or fixture
  payload.
- Added tests cover the allowlist and URL mapping.
- LiaisonScape tests: 356/356 PASS; lint, build, and diff check PASS.
- E2R-SPEC validate remains PASS.

## Classification

- Bounded acceptance-fixture access: PASS.
- Titanic EN/JA Actual Product visual acceptance: observed, with known
  presentation issues kept separate.
- Apollo EN/JA fallback Product safety: observed and usable; visual acceptance
  remains limited to the screens inspected.
- Same-payload Save/reopen: UNCONFIRMED.
- Actual Product opt-in human acceptance: PARTIAL / NOT CLOSED until the
  same-payload reopen and any required self-loop/connector/long-label review
  are directly completed.
- Product default adoption: HOLD.
