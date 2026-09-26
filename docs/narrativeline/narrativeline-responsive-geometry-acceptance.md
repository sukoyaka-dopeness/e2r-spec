# NarrativeLine Responsive Geometry Acceptance

Status: **ACCEPTED / COMPLETE**

Date: 2026-08-24

This bounded checkpoint closes two post-locale NarrativeLine geometry
follow-ups. It does not claim completion of all shell work, nested Header Back
alignment, Cross-App Locale, LiaisonScape parity, Hub locale production,
release readiness, or version `0.2.0`.

Runtime checkpoints:

- `b9ad92f055df64b0a1960f22b95d3c2a25fecd05` — `fix: stabilize editor shell vertical geometry`
- `ef0026b0a43affa227ce4c10969a231d6c92f2f4` — `fix: stabilize CoordinatePanel space layout`

## A. Header/Footer stable vertical geometry

The former Header/Footer values were 16px vertical / 32px horizontal at base
and 12px vertical / 16px horizontal at `max-width: 600px`. This caused the
observed 601px-to-600px vertical shell jump.

The accepted result is 16px vertical / 32px horizontal at base and 16px
vertical / 16px horizontal at `max-width: 600px`. Vertical shell padding is
stable while horizontal compression remains responsive. Semantic controls remain
present, including the Timeline three-item Header and Home two-item Header.

Manual evidence:

- 1200px: PASS
- 800px: PASS
- 601px Header/Footer: PASS
- 600px Header/Footer: PASS
- 601px-to-600px vertical jump: FIXED
- 480px: PASS
- Home two-item Header: PASS
- Timeline three-item Header: PASS
- keyboard behavior remained usable
- expected horizontal/body shift was accepted

Automated evidence was 132/132 tests PASS, lint PASS, build PASS, and
`git diff --check` PASS. These counts are checkpoint evidence, not normative
requirements.

## B. CoordinatePanel geometry and Space placement

The original narrow defect was separate from global shell geometry. At
`max-width: 600px`, the CoordinatePanel header changed from row to column while
the picker/name retained `flex: 0 1 20rem`; the horizontal basis therefore
became a vertical basis and created an excessive blank region. The intermediate
narrow `flex-basis: auto` fix correctly confirmed that cause.

Content-width review then found that the former side-by-side description and
Space control had no robust variable-content contract. Before Always-stack, the
measured evidence was:

| viewport | panel | header | Space control |
| --- | ---: | ---: | ---: |
| 1200px | 1060px | 1030px | 324px |
| 980px | 899px | 869px | 272px |
| 601px | 520px | 490px | 151px |

These values are evidence, not normative breakpoints.

The accepted CoordinatePanel hierarchy at all widths is:

1. title;
2. explanatory text;
3. Space label/control or static Space name;
4. coordinate values;
5. actions/status.

The Header stacks vertically at base. Picker and static-name variants use the
full available width. The obsolete `flex: 0 1 20rem` allocation and narrow-only
placement ownership were removed. No special 601px-to-600px placement mode
remains. DOM/TSX was unchanged, and Dataset and locale semantics were
unchanged.

Always-stack was accepted because Space names are variable-length presentation
content: application-generated, localized, longer English/Japanese, or
user-authored. No bounded maximum exists. The decision prioritizes content
robustness, information hierarchy, predictable responsive behavior, and
simplicity over a more compact desktop side-by-side arrangement. It is a
NarrativeLine component decision, not a universal Cross-App rule.

Manual evidence:

- approximately 980px: PASS
- 800px: PASS
- 601px: PASS
- 600px: PASS
- 480px: PASS
- approximately 347px: PASS
- Space selector used available width naturally
- `LiaisonScape graph coordinates` remained readable
- no 601px-to-600px placement cliff or excessive blank region
- x/y cards remained normal
- x/y edit inputs: PASS
- Cancel: PASS
- Save Coordinate: PASS

The single-Space static-name variant was not separately manually exercised. It
is accepted within this boundary because picker and static-name variants share
the same CSS ownership, unchanged DOM structure, and stacked full-width
position. The final Always-stack layout was not rechecked at 1200px; 980px
passed, no wide-screen breakpoint remains, and additional width does not
reintroduce side-column competition. These are explicit evidence boundaries.

## Remaining boundaries

NarrativeLine nested Event Detail, Entity Detail, Entity Picker, and Entity
Create Header Back alignment remains open. Detail lower editing action areas
remain KEEP AS-IS unless later evidence changes that decision. LiaisonScape
vertical-parity reconciliation remains OPEN / SEPARATE; this checkpoint did not
modify LiaisonScape. NarrativeLine Locale Consumer is COMPLETE / DOCUMENTED,
while Cross-App Locale remains NOT COMPLETE.
