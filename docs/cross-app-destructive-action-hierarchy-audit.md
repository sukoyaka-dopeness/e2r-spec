# Status

**DESIGN / SOURCE AUDIT COMPLETE — IMPLEMENTATION NOT STARTED** — 2026-08-28.

This checkpoint records the `LS-CROSS-APP-RELATION-DELETION5-ACTION-HIERARCHY-AUDIT`
review requested by the `LS-CROSS-APP-RELATION-DELETION4-PRESENTATION-FOLLOWUP`.
It audits accepted NarrativeLine and LiaisonScape surfaces and selects a bounded
presentation direction for LiaisonScape's Entity deletion resolution dialog.
It does not change runtime code, CSS, i18n, tests, deletion semantics, or the
accepted focus fix.

# Scope

The audit used the current source and accepted records in:

- NarrativeLine: `src/screens/EntityDetailScreen.tsx`,
  `src/screens/EventDetailScreen.tsx`, `src/components/ModalDialog.tsx`, and
  the related action styles in `src/index.css`.
- LiaisonScape: `src/components/EntityDetailDialog.tsx`,
  `src/components/RelationDetailDialog.tsx`,
  `src/components/ConfirmationDialog.tsx`,
  `src/components/EntityDeletionResolutionDialog.tsx`, `src/App.tsx`, and
  `src/styles.css`.
- Accepted evidence: [NarrativeLine Entity Deletion Resolution
  Acceptance](narrativeline-entity-deletion-resolution-acceptance.md) and
  [LiaisonScape Relation Deletion Resolution Real Edge
  Acceptance](liaisonscape-relation-deletion-resolution-acceptance.md).

The review covers normal and narrow layout, source/DOM order, Tab order,
focus-visible behavior where already accepted, EN/JA label length, and the
semantic distinction between a safe choice and a destructive choice. It does
not prescribe a universal component or a fixed pixel value.

# NarrativeLine evidence

## Entity deletion resolution

The accepted Entity deletion workflow has four relevant states:

- In the blocked state, each Relation card contains its own `Remove connection`
  action and inline confirmation. The dialog footer contains `Keep Entity`.
- After the last blocker is removed, the resolved state reports that deletion
  is possible and keeps the safe action in the footer.
- In the zero-blocker state, the same footer contains `Keep Entity` followed by
  `Delete Entity` in the DOM.
- The final confirmation dialog also places `Keep Entity` before `Delete Entity`
  in the DOM and visual action sequence.

`Delete Entity` is not the initial focus. The accepted `ModalDialog` focuses the
configured safe control, traps forward and reverse Tab inside the dialog,
handles Escape, and restores the opener after dismissal. At narrow width the
modal footer changes to a column without reversing the safe-before-danger
order. The Entity acceptance record also confirms EN/JA and narrow behavior;
the remaining NarrativeLine presentation follow-ups are separate from this
audit.

The source does not show a NarrativeLine header/footer duplicate of `Keep
Entity` in the blocked dialog. Its safe resolution action is represented in the
footer, while the final confirmation likewise uses a single safe footer choice.

## Event and Entity Detail action layout

Entity Detail and Event Detail use a different hierarchy from a confirmation
footer. Save and navigation actions occupy the primary detail action area.
The destructive Entity or Event action is placed in a separate `.danger-zone`
below the main content and is right-aligned at normal width. On narrow width,
the primary actions and Danger Zone controls become full-width stacks; their
DOM order is preserved.

This is evidence for separating destructive intent from routine editing. It is
not evidence that every destructive action must be right-aligned inside every
surface.

## Confirmation dialogs

Entity deletion, Event deletion, and association-removal confirmations use the
same safe-before-danger pattern: the safe/cancel action precedes the
destructive action in the DOM and visual sequence. The generic modal's focus
behavior reinforces that hierarchy without auto-focusing the destructive
control. Inline relation removal is kept within the originating Relation card
and is not promoted to the dialog's primary footer.

# LiaisonScape evidence

## Detail surfaces

Entity Detail uses `.detail-danger` below save and technical-detail content. It
shows the incident warning and related Relation controls, with `Delete Entity`
in that danger area. Relation Detail uses the same separation for
`Delete Relation`. These surfaces make the destructive action visually
distinct from save and close, and they do not establish a left/right rule for
modal decisions.

Both detail surfaces have a header `Close` action. That action is navigation or
dismissal, not a second copy of a workflow decision such as `Keep Entity`.

## Existing confirmations and other dialogs

`ConfirmationDialog` places `Cancel` before the `.danger-confirm` delete
button, focuses `Cancel`, and relies on the app-level topmost-dialog Tab trap.
Dataset replacement confirmation similarly keeps cancellation and safe
continuation choices before the destructive discard choice. Creation and detail
dismissal dialogs use `Close`/`Cancel` as dismissal semantics rather than
renaming them as an entity-retention decision.

This is a consistent semantic pattern, but the containing action areas differ:
detail danger sections are separated from routine actions, while modal footers
contain a local decision pair.

## Entity deletion resolution dialog

`EntityDeletionResolutionDialog` currently renders:

1. a header `Keep Entity` action;
2. one `Inspect Relation` action per blocker Relation;
3. a footer `Keep Entity` action; and
4. when no blockers remain, a footer `Delete Entity` action.

The footer `Keep Entity` is the accepted initial focus and is also the fallback
focus after Relation removal. The app-level trap keeps Tab within the topmost
`role="dialog"`; the source order therefore exposes both `Keep Entity`
controls before reaching the final destructive control. This is safe in the
sense that the destructive control is not first, but it creates two equivalent
safe decision stops and weakens the action hierarchy.

The existing narrow CSS stacks each blocker card and makes its inspect action
full-width. It does not yet define a dedicated narrow stacking rule for the
resolution footer. The zero-blocker footer is therefore the relevant bounded
presentation gap.

# Detail Danger Zone vs Modal Footer vs Inline Action

These are three different interaction surfaces and must not be collapsed into
one placement rule.

| Surface | Primary purpose | Evidence-based hierarchy |
| --- | --- | --- |
| Detail Danger Zone | Separate an irreversible object action from routine editing | Keep save/close in their normal areas; place deletion in a labeled/separated danger area. |
| Modal footer | Resolve one local safe/destructive decision | Put the safe choice first in DOM/Tab order, the destructive choice after it, and provide clear visual separation. |
| Inline destructive action | Act on one identified item in a collection | Keep the action inside that item's card/row, preserve item identity, and use an inline confirmation when needed. |

NarrativeLine demonstrates all three patterns. LiaisonScape's detail dialogs
and resolution dialog demonstrate that the same semantic ordering can coexist
with different container geometry. A cross-app rule should therefore describe
meaning and order, not a single screen coordinate.

# Current Resolution finding

The current LiaisonScape zero-blocker state has a real hierarchy issue, but it
is not a deletion-semantics or focus-containment failure:

- `Keep Entity` appears in both the header and footer.
- In the zero-blocker footer, `Keep Entity` and `Delete Entity` are visually
  close.
- The DOM/Tab sequence is still safe-before-danger, and the accepted focus fix
  keeps the initial and restored focus on the safe workflow control.
- The duplicate header action makes the same no-delete outcome available twice;
  it is not equivalent to the ordinary Detail `Close` action unless that
  semantic equivalence is deliberately retained and documented.

The bounded presentation problem is therefore consolidation and separation,
not reordering deletion behavior or reopening Formal Real Edge acceptance.

# Copy terminology

`blocker` and `blocker-resolution` remain valid internal code and design
terminology. Human-facing copy should explain the connected Relations that
must be removed, rather than expose `blocker` as the primary user term.

Candidate copy for later implementation review:

- unresolved EN: “This Entity has connected Relations. Remove these Relations
  before deleting the Entity.”
- resolved EN: “All Relations connected to this Entity have been removed. You
  can now delete the Entity.”
- unresolved JA: 「このエンティティに接続しているつながりがあります。エンティティを削除する前に、これらのつながりを削除してください。」
- resolved JA: 「このエンティティに接続しているつながりはすべて削除されました。このエンティティを削除できます。」

The wording must cover hidden or Event-related Relations, self Relations, and
parallel Relations. It should not say “shown connections” or otherwise imply
that only graph-visible Relations are included. These are copy candidates
only; no i18n or runtime change is part of this checkpoint.

# Options

The following options were assessed against existing source evidence, dialog
semantics, accidental-activation risk, keyboard/DOM order, narrow width,
EN/JA label width, duplication, and implementation complexity.

## Option A — one footer decision pair

Use one footer pair:

`[Keep Entity] [Delete Entity]`

Remove the duplicate header `Keep Entity`. Keep the safe action first in the
DOM and Tab sequence, and keep the destructive action second. This is closest
to the accepted NarrativeLine confirmation pattern and keeps a visible local
way to leave the resolution workflow without deletion.

## Option B — one right-aligned footer cluster

Use the same single footer pair, right-aligned as a cluster, with an explicit
existing-convention gap between the controls. This fits LiaisonScape's
`.detail-actions` alignment and the existing confirmation style. It is
acceptable only if narrow width changes the cluster to a full-width vertical
stack while retaining safe-before-danger order.

## Option C — header `Close`, footer `Delete Entity` only

Replace the header `Keep Entity` with `Close` and remove the safe footer action.
This matches the naming of ordinary detail dismissal, but it makes the
resolution footer danger-only and removes the explicit `Keep Entity` decision
from the action pair. It also requires proving that `Close` has exactly the
same no-delete and focus-restoration semantics in every resolution state.
It is not selected for the bounded change.

## Option D — evidence-based bounded direction

Adopt the semantic rule supported by both applications—one safe choice before
one destructive choice in a local decision surface—then choose geometry from
the host surface. For the current LiaisonScape dialog this resolves to Option A
semantically, with Option B's existing right-aligned footer cluster at normal
width if it remains legible. This avoids treating left/right as the reusable
rule.

# Narrow-width analysis

Desktop appearance alone is insufficient. Any later implementation must verify
all of the following at the selected narrow viewport:

- safe and destructive controls remain visibly distinct;
- the safe control remains before the destructive control in DOM, visual, and
  Tab order;
- the destructive control never precedes the safe control after wrapping;
- both controls have sufficient separation and become full-width where the
  host action convention requires it;
- long EN and JA labels do not collapse the gap or create ambiguous grouping;
- focus-visible outlines remain fully visible and do not appear to reorder the
  choices.

CSS visual reordering must not be used to compensate for an unsafe DOM order.
The implementation should make DOM order and visual hierarchy naturally agree.

# Keyboard/DOM-order analysis

NarrativeLine's modal abstraction gives direct evidence for initial safe focus,
focus trapping, reverse Tab behavior, Escape dismissal, and opener restoration.
LiaisonScape's resolution dialog uses an explicit safe focus ref and the
app-level topmost-dialog trap; the accepted focus-fix record confirms the
relevant Relation-confirmation, final-confirmation, and forward/reverse Tab
cases.

For the bounded LiaisonScape presentation change, the required order is:

1. dialog heading and explanatory content;
2. blocker Relation inspection controls, when present;
3. one safe resolution control; then
4. the destructive Entity deletion control, only after all blockers are gone.

The first focus and focus restoration target must remain the safe resolution
control. Removing the duplicate header action changes the number of Tab stops
but not the accepted focus contract. Any alternative that moves the safe action
to a header must re-audit nested dialog behavior, opener restoration, and every
blocked/resolved/zero-blocker transition.

# Cross-App principle assessment

The audit does **not** establish a universal E2R convention of “safe left,
destructive right.” The observed evidence varies by surface:

- Detail surfaces use a separated Danger Zone, commonly with the destructive
  action aligned to the end of the area.
- Modal footers place the safe action first and the destructive action second;
  this naturally appears safe-left/danger-right in a normal horizontal
  layout, but the durable property is order and separation.
- Inline actions stay with the affected Relation card and do not follow a
  global footer geometry.

The reusable cross-app principle candidate is:

> In a destructive decision surface, expose one clearly identified safe choice
> before the destructive choice in DOM and keyboard order, keep the choices
> visually distinct, and do not auto-focus the destructive choice. Select
> Detail/Danger Zone, modal-footer, or inline geometry according to the host
> surface.

This principle is strong enough for the bounded LiaisonScape direction. It is
not a mandate to unify components, CSS tokens, or exact left/right placement
across applications.

# Recommended LiaisonScape direction

Select **Option D**, implemented as **Option A's single footer decision pair**:

- remove the duplicate header `Keep Entity` from
  `EntityDeletionResolutionDialog`;
- retain one footer `Keep Entity` action for the no-delete resolution choice;
- keep `Delete Entity` in the footer only in the zero-blocker state;
- preserve safe-before-danger DOM and Tab order;
- use the existing LiaisonScape action-container convention for normal-width
  alignment, with deliberate visual separation rather than a new global rule;
- at narrow width, use a full-width safe-then-danger stack if the existing
  action layout requires stacking;
- retain the accepted safe initial-focus and focus-restoration target.

This direction removes duplicated semantics, preserves the explicit safe
workflow decision, and keeps the destructive choice visibly and sequentially
secondary. It does not turn ordinary Detail `Close` into a synonym for
`Keep Entity`.

Exact CSS values, copy finalization, and the browser acceptance matrix belong
to the next implementation checkpoint and are intentionally not decided here.

# Explicit non-decisions

This audit does not:

- change Entity or Relation deletion semantics, no-cascade behavior, or
  hidden/self/parallel Relation handling;
- reopen or weaken the accepted LiaisonScape focus fix or Formal Real Edge
  acceptance;
- change runtime source, CSS, i18n, tests, or presentation implementation;
- prescribe a universal safe-left/danger-right rule;
- require NarrativeLine and LiaisonScape to share one modal abstraction;
- finalize human-facing EN/JA copy;
- reopen bidirectional Cross-App acceptance or capability closure;
- modify the existing dirty/untracked
  `ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` work.

No reusable `ai-knowledge` entry is added by this checkpoint. The principle is
recorded here as an application-specific audit result pending validation by a
later bounded implementation and acceptance.

# Next implementation boundary

The next step is a LiaisonScape-only presentation checkpoint. It may change
only the resolution dialog's action placement/spacing, selected EN/JA copy,
and the corresponding focused presentation tests. It must verify normal and
narrow width, EN and JA, DOM/Tab order, focus-visible state, safe focus,
Relation inspection/removal transitions, and zero-blocker final deletion in a
browser acceptance record.

That implementation must not alter the deletion service, Relation identity or
visibility, Dataset ownership, routing, pointer behavior, Handoff, schema,
Core/Extension semantics, or the accepted focus-management behavior. After
that bounded checkpoint, bidirectional Cross-App acceptance and capability
closure remain separate later work.
