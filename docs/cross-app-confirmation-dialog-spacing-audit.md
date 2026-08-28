# Status

**AUDIT / DESIGN EVIDENCE ONLY. No implementation is authorized by this
document.**

The current evidence supports a LiaisonScape-local generic confirmation-dialog
action-row spacing follow-up. NarrativeLine already provides separated generic
actions and does not require matching runtime geometry. The final audit
classification is **READY — LIAISONSCAPE-LOCAL GENERIC DIALOG FIX**.

The audit used current local runtime sources at LiaisonScape `ce446e5` and
NarrativeLine `4f066d5`. No application source, CSS, tests, fixtures, or
Dataset data was changed.

# Historical observation

Earlier roadmap and cross-application records referred variously to a
LiaisonScape generic-dialog button-spacing issue and a generic Cross-App
confirmation button-spacing issue. The wording did not establish whether the
problem was an adjacent-button gap, wrapped action spacing, content-to-footer
spacing, or an application-parity defect.

The current audit separates those possibilities. The reproduced LiaisonScape
generic confirmation row places its two 40px buttons directly adjacent with no
effective horizontal gap. The equivalent NarrativeLine row has an 8px gap.
The difference is real, but it is local to LiaisonScape's generic confirmation
action geometry; it is not evidence for a global Cross-App pixel rule.

# Current source lineage

LiaisonScape current HEAD is `ce446e5 fix: align Dataset metadata text`.
NarrativeLine current HEAD is `4f066d5 feat: disambiguate Event identity`.
The accepted Relation blocker-card presentation, Dataset metadata spacing and
alignment, Cross-App Relation deletion, and Capability Handoff checkpoints are
separate accepted workstreams and were not reopened.

# Dialog taxonomy

The relevant categories are:

- **A — generic confirmation dialog:** application-wide confirmation surfaces
  for object deletion or comparable two-action decisions.
- **B — Dataset Replacement confirmation:** replacement-safety dialogs with
  Cancel, Discard and Continue, and sometimes Export actions.
- **C — object deletion confirmation:** the concrete Entity, Relation, or Event
  deletion confirmations. In LiaisonScape Relation/Entity deletion uses the
  generic `ConfirmationDialog`; in NarrativeLine Event/Entity deletion uses the
  generic `ModalDialog`.
- **D — blocker/resolution dialog:** LiaisonScape Entity deletion resolution and
  NarrativeLine Entity deletion resolution. These are multi-step safety
  surfaces, not generic two-action confirmations.
- **E — draft/back-navigation confirmation:** LiaisonScape detail/creation
  dismissal confirmations and NarrativeLine detail-back confirmations.
- **F — informational dialog:** Credits and locale-information surfaces.

The original spacing observation most directly applies to category **A**, as
seen through category **C** object deletion confirmation. Inline Relation
blocker confirmations, menus, popovers, ordinary workspace action groups, and
creation form action grids are excluded from the generic action-row diagnosis.

# LiaisonScape source structure

`src/components/ConfirmationDialog.tsx` renders the generic deletion surface:
`.detail.confirmation.confirmation-{subject}` with a `.detail-actions` row,
Cancel first, and the `danger-confirm` Delete action second. The same local
`.detail-actions` selector is used by detail and dismissal surfaces.

`src/components/DatasetReplacementDialog.tsx` uses
`.replacement-confirmation .detail-actions`, explicitly adds `gap: 8px`, and
stacks full-width actions at `max-width: 600px`. This is a separate category B
implementation and is not the primary defect.

The controlling generic row declaration is:

```css
.detail-actions { display: flex; justify-content: flex-end; margin-top: 12px; }
```

There is no generic-row gap, no generic-row responsive stack rule, and no
generic button width/min-width rule beyond the shared 40px button box. The
replacement-specific selector supplies its own gap and narrow behavior.

# NarrativeLine source structure

`src/components/ModalDialog.tsx` is the shared modal surface. It renders a
`.modal-backdrop` and a `.modal-dialog` `section` with alertdialog semantics,
focus handling, Escape dismissal, and Tab trapping.

Generic confirmation consumers, including Event and Entity deletion, render a
`.modal-actions` row. Dataset Replacement adds
`.dataset-replacement-actions`; detail-back confirmation adds
`.detail-back-confirmation-actions` and intentionally stacks its actions.

The shared action-row declaration is:

```css
.modal-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 16px;
}
```

At `max-width: 600px`, generic `.modal-actions` becomes a column with stretched
full-width buttons. Dataset Replacement has a related `max-width: 700px`
column override. Buttons remain 40px high with intrinsic width in the wide
generic case and full row width in the narrow case.

# LiaisonScape browser evidence

Real Microsoft Edge was used against the current local runtime URL
`http://127.0.0.1:5177/e2r-liaison-scape/`. Browser version was
`Edg/151.0.4129.107`, with viewport height 900px and device scale factor 1.
The safe built-in Lighthouse Restoration sample was used: 10 Entities, 12
visible Entity-to-Entity Relations, and 14 Event-related Relations hidden from
the graph. No repository fixture was modified.

The primary category A/C case opened the existing Relation detail for
`clara-thomas-supervises`, then its explicit Delete Relation action. EN and JA
used Cancel/Delete or キャンセル/削除. At 1280px the row was flex/row/nowrap,
effective gap 0, width 699px, and content-to-row separation 18px. At 600px and
360px it remained flex/row/nowrap with effective gap 0; the row widths were
535px and 280px. The buttons remained adjacent, 40px high, and did not wrap.

The category B Dataset Replacement case was produced by an ordinary temporary
title edit followed by opening the existing sample. It had three actions:
Cancel, Discard and Continue, Export and Continue (or the Japanese equivalents).
The row used an 8px gap wide and narrow; at 600px and 360px it stacked three
full-width 40px actions with 8px vertical gaps. This existing geometry was
acceptable and was not treated as the primary defect.

# NarrativeLine browser evidence

Real Microsoft Edge was used against the current local runtime URL
`http://127.0.0.1:5178/e2r-narrative-line/`, with the same Edge version,
viewport height, and device scale factor. The safe built-in Berlin Wall History
sample was used: 15 Events. No repository fixture was modified.

The primary category A/C case selected an existing Timeline Event and opened
Delete Event. EN and JA used Keep Event/Delete Event or できごとを残す/できごとを
削除. At 1280px the row was flex/row/wrap with an 8px gap, width 470px, and
content-to-row separation 16px. At 600px and 360px it stacked two full-width
40px actions with an 8px vertical gap; row widths were 414px and 279px.

The category B Dataset Replacement case had three actions and used an 8px gap
wide and narrow. At 600px and 360px it stacked three full-width actions with
8px vertical gaps. The current NarrativeLine generic and replacement geometry
was readable and safe across both locales.

# Computed-style comparison

Representative generic confirmation values were:

| App / width | row display / direction | wrap | gap | row width / height | content-to-actions | button arrangement |
| --- | --- | --- | --- | ---: | ---: | --- |
| LiaisonScape EN / 1280 | flex / row | nowrap | 0 effective | 699 / 40px | 18px | adjacent intrinsic-width buttons |
| LiaisonScape JA / 600 | flex / row | nowrap | 0 effective | 535 / 40px | 16px | adjacent intrinsic-width buttons |
| LiaisonScape JA / 360 | flex / row | nowrap | 0 effective | 280 / 40px | 16px | adjacent intrinsic-width buttons |
| NarrativeLine EN / 1280 | flex / row | wrap | 8px | 470 / 40px | 16px | intrinsic-width buttons separated |
| NarrativeLine JA / 600 | flex / column | wrap | 8px | 414 / 88px | 16px | two full-width stacked buttons |
| NarrativeLine JA / 360 | flex / column | wrap | 8px | 279 / 88px | 16px | two full-width stacked buttons |

LiaisonScape generic `.detail` measured 756px wide with 20px padding at 1280px,
584px with 16px padding at 600px, and 329px with 16px padding at 360px.
NarrativeLine generic `.modal-dialog` measured 504px wide with 16px padding at
1280px, 448px at 600px, and 313px at 360px. The two applications intentionally
use different dialog surface widths and button text widths; those differences
are not themselves defects.

All generic buttons were 40px high, used 8px 12px inline padding, had no margin,
and retained readable non-wrapping or wrapped labels as appropriate. The
LiaisonScape generic row's `align-items: normal` and NarrativeLine row's
`align-items: center` did not create a material action-row safety problem.

# Primary spacing diagnosis

The primary classification is **S1 — horizontal distance between adjacent
buttons**, but only for the LiaisonScape generic confirmation row. Its two
buttons share a border with no effective gap. This is distinct from S3
content-to-action distance: LiaisonScape's 16–18px and NarrativeLine's 16px
content separation were adequate. It is also distinct from S2/S7: narrow
generic actions did not wrap or overflow in the inspected cases.

The replacement dialogs already use intentional 8px spacing and safe stacking.
Safe/destructive visual hierarchy is a separate styling responsibility and was
not used to justify a spacing change.

# Source ownership

For LiaisonScape the controlling ownership is **O6 — combination**: the shared
local `.detail-actions` action-row CSS supplies the zero-gap geometry, while the
`.confirmation` component scope identifies the legitimate narrow owner for a
future change. The generic `button` rule is not the owner. For NarrativeLine,
the observed geometry is owned by **O1 — generic shared dialog action CSS** in
`.modal-actions`.

The narrowest future LiaisonScape owner is a confirmation-scoped action row,
not global `button`, global flex-row, or application-shell CSS.

# EN / JA evidence

Both applications were checked in EN and JA at 1280px, 600px, and 360px.
LiaisonScape used Cancel/Delete and キャンセル/削除. NarrativeLine used Keep
Event/Delete Event and できごとを残す/できごとを削除. Longer Japanese labels
changed intrinsic button widths but did not cause clipping or overflow. No
mojibake was observed in the audited dialog labels.

# Narrow-width evidence

At approximately 360px, LiaisonScape generic confirmation retained a horizontal
two-button row with `innerWidth/clientWidth/scrollWidth = 360/345/345`; the
vertical scrollbar reduced client width but did not create horizontal overflow.
Its replacement row used `360/360/360` and stacked three full-width actions.

NarrativeLine generic confirmation used `360/345/345` and stacked two full-width
actions. Its replacement row used `360/360/360` and stacked three full-width
actions. Focus outlines remained inside the dialog surface, labels stayed
readable, and content/action separation remained clear. The current narrow
geometry is safe; only LiaisonScape's adjacent generic buttons remain visually
less separated than the equivalent local pattern.

# Candidate comparison

### Candidate A — current geometry

Candidate A is the current source. LiaisonScape generic confirmations use no
effective horizontal action-row gap and preserve a two-button intrinsic-width
row at all inspected widths. This reproduces the historical observation. Its
replacement-specific row is already separated and stacked safely.

### Candidate B — LiaisonScape-local generic action-row gap

Temporary browser-only CSS was applied to the existing LiaisonScape generic
confirmation:

```css
.detail.confirmation .detail-actions { gap: 8px !important; }
```

At 1280px this changed the adjacent Japanese buttons from touching to an 8px
separation while keeping the 699px row, 40px row height, 40px button heights,
focus-visible state, and no overflow. At 360px it preserved the 280px row and
40px height, added the same 8px separation, and kept `360/345/345` without
overflow. No action order, colors, radii, or button dimensions changed.

Candidate B is evidence for a future local direction only. It was not written
to either application.

### Candidate C — local wrap/stack gap adjustment

Candidate C was not run. The narrow LiaisonScape generic row already fits its
two actions without wrapping or overflow, so a wrap/stack change would address
the wrong diagnosis and would alter the accepted narrow action geometry.

# Generic-rule assessment

**G2 — NO: the issue is LiaisonScape-local but shared within LiaisonScape.**

One shared Cross-App rule is not justified. LiaisonScape's generic confirmation
row has the confirmed local zero-gap issue, while NarrativeLine's corresponding
generic row already has an 8px gap and a distinct narrow stack. A future fix can
be shared among LiaisonScape generic confirmation consumers through a scoped
local selector, but must not become a global button or cross-application rule.

# Cross-App parity assessment

The semantic hierarchy is equivalent: safe/cancel action first, destructive or
discard action second, 40px controls, explicit focus, and safe narrow layouts.
The applications do not need identical dialog widths, button widths, margins,
or responsive breakpoints. The material difference is LiaisonScape's touching
generic buttons versus NarrativeLine's intentional 8px separation. This is a
local readability/grouping improvement, not a Cross-App pixel-parity mandate.

# Destructive-styling boundary

Destructive colors, backgrounds, borders, emphasis, disabled styling, and safe
initial-focus policy were observed only to distinguish styling from spacing.
Cross-App Dataset Replacement destructive styling parity remains outside this
audit and was not changed or evaluated as a follow-up.

# Flatness boundary

Global radius, control density, general padding, shadows/elevation, and overall
visual language were not evaluated. The Cross-App Visual Style / Flatness
Experiment remains separate and open/deferred.

# Blocker-card boundary

NarrativeLine Relation blocker-card presentation remains **FORMALLY ACCEPTED /
COMPLETE / CLOSED**. Its inline confirmations, blocker identity, action
alignment, Handoff action, and wrapping were not reopened. No shared selector
coupling with the audited `.modal-actions` generic dialog row was found that
would require a runtime change.

# Dataset-safety boundary

No Dataset semantics or safety behavior changed. The browser-only replacement
cases used temporary title edits and then explicitly discarded the staged
candidate to restore a clean in-memory state. No Dataset fixture was written.
`datasetModified`, `pendingUserWork`, trigger logic, action order,
Save/Discard/Export behavior, Replacement Safety, beforeunload, and unknown
field preservation remain unchanged.

# Design classification

**B — READY / LIAISONSCAPE-LOCAL GENERIC DIALOG FIX**

The current material issue is the absence of effective horizontal separation
between the two actions in LiaisonScape's generic confirmation row. The issue
is owned by a LiaisonScape-local generic action-row/component boundary.
NarrativeLine already has an acceptable separated generic row and does not need
a matching runtime change. No implementation is authorized by this audit.

# Smallest future implementation boundary

If separately authorized, the smallest implementation is:

- app: LiaisonScape only;
- likely file: `src/styles.css`;
- owner: `.detail.confirmation .detail-actions` or an equivalent selector that
  scopes the generic confirmation action row without changing global buttons,
  detail forms, blocker cards, or unrelated workspace action groups;
- direction: add an 8px local action-row gap;
- CSS-only: yes, based on Candidate B; no JSX, Dataset, or workflow change is
  indicated;
- semantic tests: preserve existing deletion, replacement-safety, focus, and
  action-order contracts rather than testing a CSS literal;
- acceptance: rerun the matrix below in real EN/JA browser states.

No NarrativeLine source change is required. No global destructive styling,
button height, radius, action order, or responsive policy change is part of this
boundary.

# Future acceptance matrix

Any authorized implementation must recheck:

- LiaisonScape generic Entity/Relation deletion confirmation in EN and JA;
- LiaisonScape Dataset Replacement in EN and JA with three actions;
- NarrativeLine comparable Event/Entity confirmation and Dataset Replacement;
- 1280px, approximately 600px, and approximately 360px;
- action labels, count, order, row gap, row/character geometry, content/action
  separation, and safe/destructive grouping;
- readably separated controls without treating button widths as a parity target;
- narrow wrapping/stacking, button-label wrapping, focus outline, and no
  horizontal overflow;
- native browser dialog state closed before visual acceptance;
- existing initial-focus and Tab/Escape behavior;
- Dataset Replacement Safety, title semantics, Save/Discard/Export behavior,
  and unknown-field preservation;
- LiaisonScape and NarrativeLine test, lint, build, and diff-check gates.

# Explicit exclusions

This audit did not modify LiaisonScape, NarrativeLine, roadmap, endpoint
separator presentation, Relation blocker-card presentation, Dataset metadata,
Dataset samples, tests, schemas, Core, Extensions, Hub, or ai-knowledge.

It did not begin Cross-App destructive-styling parity, the Flatness Experiment,
general responsive cleanup, action reordering, focus-policy changes, or any
runtime implementation. The separately known endpoint-separator status is
outside this audit and remains governed by its own accepted lineage.

No new reusable knowledge entry was required: this is a bounded presentation
audit with an application-local result, not a new cross-repository decision.

No push or deployment was performed.
