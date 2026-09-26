# NarrativeLine Timeline Shell Alignment Acceptance

Status: **ACCEPTED / COMPLETE**

Date: 2026-08-24

Runtime repository: `sukoyaka-dopeness/e2r-narrative-line`

Runtime checkpoint: `4868111b02aa850bb0c652ab3b3470dcd92595a0` (`fix: align
Timeline shell navigation`)

## Scope

This bounded acceptance covers top-level Timeline shell navigation placement.
It does not claim completion of all NarrativeLine shell follow-ups, nested
Detail / Picker / Create Header Back alignment, 600/601px vertical geometry,
CoordinatePanel geometry, Cross-App Locale, public-release readiness, or version
`0.2.0`.

## Accepted behavior

The Timeline Header contains the NarrativeLine brand, an explicit localized
Home action, and the locale control. The lower sticky action area contains Add
Event only; duplicate Home is absent.

AppFrame exposes one generic optional Header navigation action. The App owns
Timeline Home navigation, while TimelineScreen no longer owns or receives a
Home-navigation callback. Existing Home navigation semantics are reused:
Dataset state remains loaded and Continue Editing returns to the same Timeline.
No Dataset replacement or reset semantic was introduced. The generic Header
navigation action remains suitable for later nested Back use.

The accepted Header forms are:

- two items: brand | locale;
- three items: brand | Home | locale.

The three-item grid is explicit, with a flexible-width brand and single-line
Home and locale controls. The prior blank brand hit-area fix remains preserved.
This acceptance does not prescribe the exact CSS as a universal cross-app rule;
the policy remains “same policy != same CSS”.

## Evidence

Automated checkpoint evidence:

- Timeline shell integration: 1/1 PASS
- locale history: 6/6 PASS
- locale presentation: 15/15 PASS
- full NarrativeLine suite: 132/132 PASS
- lint: PASS
- build: PASS
- `git diff --check`: PASS

Selector hardening discovered during implementation is recorded as
implementation detail, not as a general specification requirement: locale
lifecycle tests select the locale control semantically by target-language label,
and Timeline Add Event tests do not assume a lower-button position.

Manual visual acceptance:

- approximately 1200px: PASS
- approximately 800px: PASS
- 601px horizontal Header: PASS
- 600px horizontal Header: PASS
- approximately 480px: PASS
- Home two-item Header: PASS
- Tab / Enter / Space: PASS
- brand blank-click regression: PASS
- lower duplicate Home: absent

The pre-existing 600/601px Header/Footer vertical-height jump remains open. It
was not fixed by this runtime checkpoint; horizontal three-item Header
acceptance and vertical geometry are separate concerns.

## Remaining boundaries

The next NarrativeLine runtime target is 600/601px Header/Footer vertical
geometry, followed by CoordinatePanel geometry and nested Header Back alignment.
Detail lower editing action areas remain KEEP AS-IS unless later evidence
changes that decision. LiaisonScape Credits alignment remains queued for its
locale-consumer work. NarrativeLine Locale Consumer remains COMPLETE /
DOCUMENTED; Cross-App Locale overall remains NOT COMPLETE.
