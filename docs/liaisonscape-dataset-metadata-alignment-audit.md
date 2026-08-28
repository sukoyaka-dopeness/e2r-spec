# Status

**AUDIT / DESIGN EVIDENCE ONLY. No implementation is authorized by this document.**

A real Microsoft Edge audit was performed against the current LiaisonScape HEAD:
`72685dc fix: separate Dataset metadata from toolbar`.
The accepted baseline was unchanged and the application worktree remained clean.
The audit used the local development URL:
`http://127.0.0.1:5175/e2r-liaison-scape/`.

The tested Dataset was the built-in Lighthouse Restoration sample, containing 10
Entities and 12 visible Entity-to-Entity Relations. Its Dataset title is
`灯台修復プロジェクト`; the same Dataset was inspected in EN and JA locale states.
Long-title cases used temporary browser-only text replacement in the existing read-only
`span`. They were not saved to the Dataset or to repository fixtures.

# Existing accepted spacing baseline

`LS-METADATA-SPACING1` remains **FIXED / ACCEPTED**.

The accepted runtime baseline is:

```css
.dataset-metadata { margin-top: 16px; }
```

The audit preserved the computed `margin-top: 16px` and did not revisit the
divider-to-metadata block-start spacing. Candidate styles were session-only and did
not change this property.

# Observation

The previously reported label/value offset is not uniform across the matrix.
At 1280px, 721px, 720px, and 601px with the short Japanese title, the `dt` and
value `span` boxes and their text ranges had identical top and bottom coordinates.
At 600px and approximately 360px, the current row has `align-items: flex-start`
while its nested `dd` retains `align-items: center`; the label starts at the row
top, while the short-title value is centered beside the 40px Edit button.
The measured value-top minus label-top delta was **+8.390625px** at both widths.

For a temporary long Japanese title, the value wrapped to multiple lines. At 721px,
720px, and 601px the current row-level `align-items: center` centered the label
box against the multiline value block: the label was 11.59375px below the value
block top. At 600px and 360px the existing flex-start rule put both text boxes at
the first-line top, while the nested `dd` continued to center the Edit control.

Therefore the short-title observation is a real responsive geometry issue at the
600px breakpoint and below. The wide short-title difference is not a box or text
range mismatch; any remaining perception there is optical, primarily reflecting
the label weight and glyph metrics.

# Source structure

The relevant JSX in `src/App.tsx` is:

```tsx
<dl className="dataset-metadata" aria-label={...}>
  <dt>{...}</dt>
  <dd>
    <span>{metadata?.title ?? ...}</span>
    <button type="button" ...>{...}</button>
  </dd>
  <dt>Dataset ID</dt>
  <dd>{...}</dd>
</dl>
```

The second `dt`/`dd` pair is hidden by scoped CSS. The first `dt` and first `dd`
are direct flex items of the `dl`; there is no wrapper grouping the label and value
text. The Edit button is inside the value `dd`, beside the value `span`.

Current relevant CSS in `src/styles.css` is:

- `.dataset-metadata`: `display: flex`, row direction, `align-items: center`,
  `gap: 8px`, `margin: 16px 0 4px`, `padding: 0`, and `font-size: .86rem`.
- The first `dt` is `flex: 0 0 auto`.
- The first `dd` is `display: flex`, `align-items: center`, `min-width: 0`,
  `flex: 1 1 auto`, and `gap: 8px`.
- The value `span` is `min-width: 0`, `flex: 1 1 auto`, and
  `overflow-wrap: anywhere`.
- The Edit button is `flex: 0 0 auto` and `white-space: nowrap`.
- At `max-width: 600px`, `.dataset-metadata` currently uses
  `align-items: flex-start`; the scoped `dd` also receives `margin-bottom: 6px`.

Computed styles confirmed that the browser default `dd` margin is not active:
the relevant `dd` had `margin: 0` above 600px and `margin-bottom: 6px` only from
the explicit narrow media rule. No global `dl`, `dt`, or `span` reset was found.
The global `button` rule supplies the common button box and line-height.

# Computed-style evidence

Browser: Microsoft Edge `151.0.4129.107` (Chromium; Protocol-Version `1.3`).
Viewport emulation used device scale factor 1 and height 900px, with widths
1280, 721, 720, 601, 600, and 360.

Representative current JA short-title computed values:

| Element | 1280px | 600px |
| --- | ---: | ---: |
| row display / alignment | flex / center | flex / flex-start |
| row font-size / line-height | 15.48px / 26.1px | 13.76px / 23.2px |
| row height | 40px | 46px; the explicit 6px bottom margin contributes to the flex line size |
| row gap / column-gap | 8px / 8px | 8px / 8px |
| `dt` font-size / weight / line-height | 15.48px / 650 / 26.1px | 13.76px / 650 / 23.2px |
| `dt` box | 47.234px × 26.094px | 42px × 23.203px |
| `dd` display / alignment | flex / center | flex / center |
| `dd` margin / padding | 0 / 0 | 0 0 6px / 0 |
| value `span` display / line-height | block / 26.1px | block / 23.2px |
| value `span` box | 1096.797px × 26.094px | 456.469px × 23.203px |
| Edit button line-height / height | 18.576px / 40px | 16.512px / 40px |
| Edit button padding | 8px 12px | 8px 12px |

At 1280px the `dt` and value `span` both had top `173.046875px` and bottom
`199.140625px`; their text ranges both had top `175.046875px` and bottom
`196.046875px`. At 600px the row began at `191.203125px`; the `dt` began
there, while the value `span` began at `199.59375px`. The label-to-value gap
was 8px in both cases, measured from `dt.right` to `span.left`.

The label and value share the same computed font family, font size, line-height,
margins, padding, and text wrapping rules. The intentional computed difference is
`dt font-weight: 650` versus value `span font-weight: 400`.

# Vertical alignment diagnosis

Classification: **G — combination**, with two bounded behaviors:

- At wide short-title widths, the boxes and text ranges coincide. The apparent
  difference is optical-only (F), not a measurable layout mismatch.
- At 600px and approximately 360px, the mismatch is caused by the interaction of
  row-level `align-items: flex-start` and nested `dd` `align-items: center` (C +
  wrapper geometry E). The value is centered in the 40px control row while the
  label is not.
- With multiline values above the 600px breakpoint, row-level center alignment
  centers the label against the full value block instead of the first text line.

No default margin or padding cause was found. The different label weight is real,
but computed metric equality shows it is not sufficient to explain the narrow
8.390625px offset.

# Horizontal spacing diagnosis

The visible label-end to value-start distance measured exactly **8px** in the
current short-title cases. The value-to-Edit distance also measured exactly 8px.
The first 8px comes from the row `gap`; the second comes from the nested `dd`
`gap`. The `dd` has no active horizontal margin or padding. The label width is
intrinsic (`42px` in JA at 600px; `30.453px` in EN at 1280px), with no minimum
width. The value has `min-width: 0` and flexes into the remaining space.

There was no horizontal overflow in any inspected width, including long-title
cases. Classification: **H1 — ACCEPTABLE / INTENTIONAL**. The 8px spacing is
already part of the local control vocabulary; this audit does not prescribe a
smaller value and finds no separate horizontal defect.

# Edit button responsibility

The future responsibility should be **B: label + value as a text pair, with Edit
aligned separately as a control**. The current button is nested in `dd`, but its
40px control box is visibly and geometrically separate from the value text. A
row-level baseline candidate changed the text alignment without changing the
button top/bottom coordinates in the tested cases. The button should not be treated
as a third text baseline or be normalized by a global button rule.

# Short-title evidence

Current read-only short-title evidence:

| Locale / width | row alignment | label/value top delta | label/value gap | overflow |
| --- | --- | ---: | ---: | ---: |
| JA / 1280px | center | 0px | 8px | none |
| JA / 721px | center | 0px | 8px | none |
| JA / 720px | center | 0px | 8px | none |
| JA / 601px | center | 0px | 8px | none |
| JA / 600px | flex-start | +8.390625px | 8px | none |
| JA / ~360px | flex-start | +8.390625px | 8px | none |
| EN / 1280px | center | 0px | 8px | none |

The EN wide label was `Title` and the Edit control was `Edit`; the JA wide label
was `タイトル` and the Edit control was `編集`. The Dataset title remained the
same underlying sample title while the locale changed.

# Long-title evidence

Long-title evidence used the existing read-only value `span` with temporary
browser-only text. No Dataset save occurred.

The JA long title wrapped to two lines at 721px, 720px, 601px, and 600px, and
to three lines at approximately 360px. At 720px the current label top was
`210px` while the value block began at `198.40625px`, a `-11.59375px`
`value-top-minus-label-top` delta. At 600px and 360px the existing flex-start
rule aligned the label to the first line, but the value block extended below it.

At 1280px the temporary JA and EN long strings fit on one line. The current
button remained 40px high and stayed in the nested `dd` control position. At
720px the button top was `201.609375px` beside the two-line value; at 600px it
was `194.40625px`; at 360px it was `206px` beside the three-line value. No
horizontal overflow occurred.

This is a real multiline alignment consideration, separate from the original
wide short-title optical impression. First-line alignment is more legible for
the label/value text pair than centering the label against the complete value
block, provided Edit remains a separate control.

# EN / JA evidence

Both locales were inspected in the real browser at wide width and in the matrix
where the Japanese sample exposed the narrow and multiline geometry most clearly.
EN wide short and long cases had identical label/value boxes and 8px horizontal
gap. JA short cases reproduced the same wide result and the narrow responsive
offset. The locale changed labels and controls but did not change Dataset title
semantics or the metadata structure.

# Responsive evidence

- **721px / 720px:** no narrow row override; short title boxes coincide. Long
  value wraps to two lines and current center alignment centers the label block.
- **601px:** same wide alignment rule; short boxes coincide. Long value wraps and
  shows the same center-alignment issue.
- **600px:** the media rule changes the row to flex-start. Short value is
  8.390625px below the label; long value begins at the label top and wraps.
- **Approximately 360px:** the row remains horizontal; the short value is
  8.390625px below the label; the long value wraps to three lines. Edit remains
  in the nested control position. The row has no horizontal overflow.

The row does not wrap into a label/value column in this matrix. The association
remains clear for short titles and remains understandable for long titles because
the label stays at or near the first text line after the narrow flex-start rule.

# Candidate comparison

Only evidence-supported candidates were compared with temporary browser CSS.

### Candidate A — current geometry

The accepted current geometry uses row `align-items: center` above 600px and
`flex-start` at 600px and below, with the nested `dd` remaining center-aligned.
It preserves the accepted spacing and button geometry, but leaves the 8.390625px
narrow short-title offset and centers the label against multiline values above the
breakpoint.

### Candidate B — row text baseline alignment

Temporary CSS was injected only in the browser session:

```css
.dataset-metadata { align-items: baseline !important; }
```

At 600px and approximately 360px, Candidate B changed the short-title
label/value top delta from +8.390625px to 0px. At 720px, it changed the long
multiline delta from -11.59375px to 0px, aligning the label with the first value
line. It retained an 8px label/value gap, an 8px value/Edit gap, no horizontal
overflow, and the 16px metadata margin. The Edit button top/bottom remained the
same in the tested short and long narrow cases; its nested `dd` alignment remained
center.

Candidate B did not detach Edit at wide or narrow widths. The current EN/JA
focus-visible checks remained present, and Candidate B's EN focus-visible check also
remained present. It is the preferred candidate for a future bounded CSS
implementation.

### Candidate C — local text metric normalization

Candidate C was not run as a mutation because the current `dt` and value `span`
already share the same computed font family, font size, line-height, margins, and
padding. The independent metric defect required to justify a text-normalization
candidate was not present. The label weight difference alone does not explain the
narrow offset.

# 16px spacing preservation

The computed `.dataset-metadata` `margin-top` remained `16px` in current and
Candidate B measurements. Candidate B changed only row cross-axis alignment in
the temporary browser session. The accepted divider-spacing fix remains isolated
from this audit.

# Flatness boundary

The audit did not evaluate or change radius, global control height, global button
padding, shadows, elevation, border contrast, hover language, destructive styling,
or generic form density. Those remain part of the separate Cross-App Visual Style /
Flatness Experiment.

# 600/601 boundary

Only the Dataset metadata row was inspected at 601px and 600px. The observed
difference is the existing metadata-specific media rule at `max-width: 600px`.
Unrelated shell, toolbar, graph, and responsive geometry were not reopened.

# Design decision

**READY — BASELINE ALIGNMENT ONLY**

Vertical alignment is a confirmed local defect in the narrow short-title state and
in current multiline behavior. Horizontal spacing is acceptable and intentional.
The smallest supported direction is the text-pair baseline candidate, while Edit
remains separately aligned as a control. This audit does not implement that direction.

# Smallest implementation boundary

The smallest future boundary is CSS-only in `src/styles.css`:

1. Change the local `.dataset-metadata` row alignment to `align-items: baseline`.
2. Replace or remove the `max-width: 600px` local `align-items: flex-start` override
   so it does not override the baseline direction.
3. Leave `.dataset-metadata dd` `align-items: center`, the nested 8px gap, button
   flex behavior, and `.dataset-metadata { margin-top: 16px; }` unchanged.

No `src/App.tsx` markup change is required by the measured Candidate B result. A
future implementation must remain limited to this metadata-row CSS boundary and
must not become a global baseline or control normalization.

# Future acceptance matrix

Any later implementation checkpoint must re-run real-browser acceptance for:

- EN short title and JA short title, read-only.
- EN long title and JA long title, including wrapping.
- Wide, 721px, 720px, 601px, 600px, and approximately 360px.
- Read-only state and Edit state.
- Keyboard focus-visible on Edit, with no clipping.
- Label/value first-line relationship and separate Edit association.
- 8px local horizontal relationships unless an explicitly accepted spacing decision
  changes them.
- No horizontal overflow at every listed width.
- Divider-to-metadata `margin-top: 16px` remains unchanged.
- Dataset title semantics, `extensions.metadata.title`, modified/pending state,
  Save/Cancel, Replacement Safety, and unknown-field preservation remain unchanged.
- The existing LiaisonScape test, lint, build, and diff-check gates remain green.

# Explicit exclusions

This audit did not modify LiaisonScape source, CSS, tests, fixtures, Dataset files,
package files, or runtime behavior. It did not modify `docs/roadmap.md`.

It did not begin implementation, reopen `LS-METADATA-SPACING1`, alter Dataset
semantics, evaluate the Flatness Experiment, reopen unrelated 600/601 shell
geometry, or change NarrativeLine. It did not add a knowledge entry because this
is repository-local presentation evidence with no reusable cross-repository decision.

No push or deployment was performed.
