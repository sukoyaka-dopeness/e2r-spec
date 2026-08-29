# LiaisonScape Modal / Dialog Consistency Audit

Audit ID: `LS-MODAL-DIALOG-CONSISTENCY-AUDIT1`
Date: 2026-08-29
Status: documentation-only audit; no LiaisonScape runtime change

## Scope and authority

This audit inventories the application-owned modal/dialog surfaces in the live
LiaisonScape checkout. It classifies responsibility before comparing visual,
semantic, action, dismissal, focus, responsive, and locale behavior. It does
not propose a universal dialog layout and does not authorize a runtime fix.

The authoritative states inspected were:

- e2r-spec `09bc4ed` (`docs: accept generic endpoint blocker presentation`),
  clean at the start of the audit;
- LiaisonScape `08680c6` (`fix: clarify Relation blocker endpoints`), clean at
  the start of the audit and read-only for this checkpoint;
- the live source under `e2r-liaison-scape/src`, rather than an uploaded
  snapshot;
- [Relation Endpoint Vocabulary Audit](relation-endpoint-vocabulary-audit.md),
  [Relation Endpoint Vocabulary Surface Adoption Audit](relation-endpoint-vocabulary-surface-adoption-audit.md),
  [Relation Direction and Arrow Appearance](relation-direction-and-arrow-appearance.md),
  the LiaisonScape deletion-resolution records, and the cross-app destructive
  action / dialog-spacing records;
- the relevant read-only ai-knowledge guidance on destructive action hierarchy,
  focus ownership, and bounded Edge/CDP browser diagnosis.

The protected dirty change in
`C:\Users\extra\E2R\ai-knowledge\playbooks\e2r-edge-cdp-browser-diagnostic.md`
was not opened for editing and was preserved.

## Complete live inventory

The live source has nine dialog implementations and twelve concrete user-facing
variants. `CreationDialog` has Entity and Relation modes; the detail-dismissal
implementation has Entity and Relation paths; and `ConfirmationDialog` has
Entity and Relation subjects.

| Concrete surface | Live owner | Responsibility | Primary information / action |
| --- | --- | --- | --- |
| Create Entity | `src/components/CreationDialog.tsx` | A. Create / authoring | Name and description; create an Entity |
| Create Relation | `src/components/CreationDialog.tsx` | A. Create / authoring | Source Entity, Target Entity, name, description; create a Relation |
| Entity Detail | `src/components/EntityDetailDialog.tsx` | B/C. Edit and detail / inspection | Canonical Entity fields, relation counts, related Relations; save or enter deletion flow |
| Relation Detail | `src/components/RelationDetailDialog.tsx` | B/C. Edit and detail / inspection | Canonical Relation fields and Source/Target; save or enter deletion flow |
| Entity Detail dismissal | `src/components/DetailDismissalConfirmation.tsx` | E. Destructive confirmation of draft discard | Keep editing or discard unsaved detail changes |
| Relation Detail dismissal | `src/components/DetailDismissalConfirmation.tsx` | E. Destructive confirmation of draft discard | Same shell and semantics for Relation draft changes |
| Creation dismissal | `src/components/CreationDismissalConfirmation.tsx` | E. Destructive confirmation of draft discard | Keep or discard an unsaved new-object draft |
| Dataset replacement, clean/modified/pending variants | `src/components/DatasetReplacementDialog.tsx` | G. Dataset replacement / acquisition safety | Cancel, discard, and/or export before replacement |
| Delete Entity confirmation | `src/components/ConfirmationDialog.tsx` | E. Destructive confirmation | Cancel or confirm Entity deletion when no blockers remain |
| Delete Relation confirmation | `src/components/ConfirmationDialog.tsx` | E. Destructive confirmation | Cancel or confirm Relation deletion |
| Entity deletion blocker resolution | `src/components/EntityDeletionResolutionDialog.tsx` | F. Blocker resolution | Inspect/remove connected Relations, keep Entity, then reach final deletion |
| Credits | `src/components/CreditsDialog.tsx` | H. Information / credits | Application, creator, release, acknowledgement, links |

The count is twelve concrete variants because the detail-dismissal paths share
one implementation, the two delete subjects share one implementation, and
Dataset replacement changes its action set according to safety state. No
separate application-owned `Modal` implementation was found.

### Explicit exclusions

The following live surfaces were searched and excluded from the modal inventory:

- graph context menus and their outside-click/Escape behavior;
- ownership and placement hover popovers;
- viewport toolbar, drag handle, disclosure control, and its tooltip;
- inline graph selection/detail action panels;
- maintenance menus and other `details`-based menus;
- native file-picker, download, and browser confirmation UI.

They may overlay graph content, but they do not render an application-owned
`role="dialog"` / `aria-modal="true"` surface for this audit.

## Responsibility and information-structure classification

The important difference is not whether a Relation is mentioned, but why it is
being mentioned.

| Dialog | Identity model | Relation endpoint classification | Why this model fits |
| --- | --- | --- | --- |
| Create Relation | Endpoint selectors plus editable canonical fields | A. Canonical role required: Source / Target responsibility, presented in the create form as Source Entity / Target Entity | The user is authoring canonical structure; the current graph authoring scope selects Entities |
| Relation Detail | Label/value inspection plus editable canonical fields | A. Canonical role required: `Source` / `Target`; JA runtime labels are `始点` / `終点` | The user is inspecting or editing the Relation's directed structure |
| Entity Detail related-Relation list | Compact label/value cards with Relation name when present and `Source` / `Target` rows | A. Canonical role required for an inspection/navigation surface | Each card is a button into Relation Detail, so roles explain the stored Relation and support the next inspection step |
| Entity deletion blocker | Name when present plus two `Connected object` rows | B. Generic identity required: `Name` + `Connected object` + `Connected object`; JA semantic equivalent is `名前` + `つながり先` + `つながり先` | This is destructive dependency review and must remain valid for Entity/Event endpoints without implying a direction-sensitive editing task |
| Delete confirmation | No structured endpoint identity | C. Compact Relation/Entity subject identity is sufficient | The immediately preceding detail context and confirmation copy identify the subject |

The screenshot-like deletion surface with cards containing Relation name and
Source/Target is the `related-relations` region inside
`src/components/EntityDetailDialog.tsx`, not the blocker-resolution dialog. It
is reached while inspecting an Entity and each card opens the canonical Relation
Detail surface. Its Source/Target presentation is therefore justified and is
not logically equivalent to the generic blocker cards. It is not a second
Entity-deletion confirmation; the actual Entity delete action remains below the
related-Relation list and enters the separate blocker workflow.

No Relation surface was classified as inaccurate type wording. Event-connected
Relations are present in the Dataset and can be inspected through the blocker
workflow; Relation Detail uses type-neutral Source/Target labels and displays
the resolved Entity or Event endpoint. Create Relation intentionally offers the
current graph author's Entity endpoint scope rather than claiming to create
Event endpoints. No runtime semantic or deletion behavior changes are proposed.

Identity fallback is bounded: Relation Detail falls back from a resolved
endpoint display name to the stored endpoint ID, and the create form falls back
to an Entity ID when a display label is unavailable. The blocker uses the
Relation name only when non-empty and retains a short Relation-ID hint when
parallel identity would otherwise be ambiguous. These fallbacks preserve
operation identity without changing the generic/canonical classification.

## Dialog matrix

The matrix records the live contract. `App.tsx` owns the shared outer keyboard
coordination; individual dialog components own responsibility-specific markup,
copy, and any local focus effect.

| Dialog / path | Title and lead copy | Actions and hierarchy | Backdrop / Escape | Focus and keyboard | Scroll / narrow / locale | Classification |
| --- | --- | --- | --- | --- | --- | --- |
| Create Entity | `Create Entity`; no warning lead copy | Cancel, then full-width `Save Entity`; authoring action is primary | No separate backdrop; Escape with an empty draft closes, meaningful draft opens the dismissal confirmation | Name has explicit autofocus; App-level Tab trap applies; no destructive autofocus | Shared `.detail` scroll; 600px rule narrows width; grid actions remain reachable; EN/JA semantics match | A: accepted authoring difference |
| Create Relation | `Create Relation`; endpoint/name/description form | Cancel, then full-width `Save Relation` | Same intentional draft-preserving outside behavior; Escape follows draft semantics | No field autofocus because the first useful field is not unambiguous; App-level Tab trap | Selects and text fields are width-constrained; same narrow shell and locale parity | A/C: accepted authoring difference |
| Entity Detail | `Entity Detail`; fields, counts, and incident warning when needed | Save in the normal action row; related Relation inspection buttons; Entity delete in the danger area | Backdrop closes clean detail or starts draft-discard confirmation; Escape follows the same rule; explicit Close is present | No local autofocus; App-level trap covers visible dialog focusables; source retains draft-focus restoration policy at workflow level | `.detail` scrolls as a whole; long IDs/names wrap; 600px and container rules avoid horizontal clipping | A: canonical inspection differs from confirmation |
| Relation Detail | `Relation Detail`; Source/Target plus fields | Save; separate danger-area Delete Relation; header Close | Backdrop/Close close clean detail or start discard confirmation; Escape follows the same rule | No local autofocus; App-level trap; keyboard can reach Source/Target, fields, technical disclosure, and delete | Long endpoint/name/ID content wraps; 600px and container rules preserve readable label/value layout | A: canonical role presentation is required |
| Detail dismissal | `Discard unsaved changes?`; explains that draft changes will be lost | Cancel first; danger `Discard Changes` second | Backdrop and Escape mean Cancel; explicit Cancel is present | Cancel explicitly receives initial focus; App-level trap; destructive action is not initial focus | Short copy in shared scrolling shell; EN/JA choices and severity match | A: intentional safe-first destructive confirmation |
| Creation dismissal | `Discard unsaved creation draft?`; explains new-object draft loss | Cancel first; danger `Discard and Close` second | Backdrop and Escape mean Cancel; explicit Cancel is present | Cancel explicitly receives initial focus; App-level trap | Same compact confirmation shell; semantic EN/JA parity | A: intentional safe-first destructive confirmation |
| Dataset replacement | `Replace Dataset?`; warns current work may be lost | Cancel first; then state-dependent discard/export actions; discard is danger-emphasized, export is recovery-preserving | Backdrop and Escape cancel replacement | Cancel explicitly receives initial focus; local button-only Tab trap plus App trap | Shared scroll; action row stays single-line on wide screens and stacks full-width below 600px; source/test cover safety combinations | A: three-way safety hierarchy is intentional |
| Delete Entity / Relation | `Confirm deletion`; subject-specific confirmation copy | Cancel first; danger `Delete` second | Backdrop and App Escape path cancel; explicit Cancel is present | Cancel explicitly receives initial focus; App-level trap; Delete is not initial focus | Shared confirmation width/gap; short copy does not need special scrolling; EN/JA severity matches | A: subject variants share the generic destructive shell |
| Entity deletion blocker | `Review connections before deleting`; incident warning and hidden-graph note where relevant | Per-card `Inspect Relation`; footer Keep Entity; final Delete Entity appears only after all blockers are removed | Backdrop means Keep Entity; no accidental destructive dismissal; Escape is not a separate local handler | Keep Entity explicitly receives initial focus; App-level Tab trap; removal restores a neighboring card or Keep Entity | Whole dialog scrolls; card list uses 8px gaps; narrow width stacks card action and footer buttons; long names/IDs wrap; no horizontal overflow observed | A: blocker resolution is not generic confirmation; generic endpoint rows accepted |
| Credits | `Credits`; application/creator/release/acknowledgement/links | One left-aligned Close action | Backdrop and App Escape close; explicit Close is present | No local autofocus; App-level trap; trigger restoration is owned by App | Compact fixed-width dialog, shared scroll safety; EN/JA title/action semantics match; acknowledgement/link text remains intentionally unchanged | A: informational surface does not need destructive safe-first focus |

### Action spacing and emphasis

The shared `.detail-actions` row is right-aligned with a 12px top margin. Generic
confirmation rows add an 8px inter-button gap. Dataset replacement also uses an
8px gap and stacks at the narrow breakpoint. The blocker footer intentionally
uses a 12px gap on wide screens and an 8px vertical gap when stacked. Creation
uses a full-width grid because it is an authoring form; Credits uses a
left-aligned single action because it is an information surface. These are
responsibility-specific layouts, not uncontrolled drift.

Destructive emphasis is consistent where the user is about to lose data:
`danger-confirm` supplies the filled red confirmation action, while the detail
danger area uses a red border/background treatment for the delete entry point.
The blocker does not render Delete Entity while blockers remain, and its safe
Keep Entity action is first and initially focused. The differing visual weight
between a final confirmation, a detail danger zone, and a dependency-resolution
footer reflects severity and task stage.

## Dismissal, focus, and keyboard findings

The outer overlay is a button for dialog surfaces that support backdrop action.
Detail and informational surfaces use their backdrop to close; destructive
confirmation and Dataset replacement backdrops cancel safely; the blocker
backdrop keeps the Entity rather than deleting it. Creation has no backdrop so
an outside click cannot silently discard a draft. These differences are
consistent with responsibility.

`App.tsx` installs a last-dialog focus trap for visible links, buttons, inputs,
selects, textareas, and other focusable elements. It wraps both Tab and
Shift+Tab and prevents background Header controls from becoming the active
focus target while a dialog is open. Dataset replacement has an additional
local button trap. The dismissal confirmations handle Escape locally; App
handles detail, creation, delete-confirmation, and Credits Escape paths. The
blocker deliberately exposes Keep Entity as the safe backdrop action and keeps
the user in the resolution workflow rather than treating Escape as an implicit
Relation removal or Entity deletion.

Explicit initial-focus contracts are narrow and evidence-based:

- Create Entity focuses Name because it is the unambiguous first authoring
  field.
- Create Relation has no autofocus because Source/Target selection is the
  meaningful first choice.
- Draft-discard and deletion confirmations focus Cancel.
- Dataset replacement focuses Cancel.
- Blocker resolution focuses Keep Entity.
- Detail and Credits have no local autofocus; their App-level trap and trigger
  restoration are the relevant shared mechanisms, and the audit found no
  accepted requirement to impose a new universal autofocus rule.

Credits restoration is explicitly owned by App through `creditsTriggerRef`.
Dataset replacement restoration is guarded by `canRestoreReplacementTrigger`.
Blocker item removal and return-from-Relation-Detail restore either the next
valid Relation inspection trigger or Keep Entity. Draft dismissal and detail
workflow transitions preserve the existing selection/draft controller. No
background focus escape was observed in the bounded browser review.

Enter and Space retain native button/select/input activation semantics. The
danger buttons are not initial focus targets, so pressing Enter after a safe
initial focus does not accidentally confirm destructive work.

## Scroll, long content, and narrow viewport

All `.detail` dialogs use `max-height: calc(100svh - 32px)`, `overflow-y: auto`,
and `scrollbar-gutter: stable`; the narrow rule changes this to an 8px viewport
edge allowance. Label/value values and technical IDs use `overflow-wrap:anywhere`
and `word-break:break-word`. This keeps long Entity/Event names, Relation names,
and IDs from forcing horizontal overflow. The blocker list and its footer are
inside the same scrollable dialog, so the title and bottom actions remain in the
same reachable focus/scroll context rather than competing inner scroll regions.

The bounded narrow review used approximately 560x800. Create Entity retained
8px edge spacing, became 529px wide, and kept both actions reachable. The
blocker review stacked each card's inspection action and the footer buttons;
long values wrapped and no horizontal overflow was observed. Dataset replacement
has the same explicit full-width action fallback. These are intentional
responsive adaptations, not a need to make every dialog use the same action
layout.

## EN / JA parity

The live browser review checked English and Japanese Create Entity and Credits
surfaces, including narrow Japanese Create Entity. The existing locale tests
also cover the deletion, detail, blocker, replacement, and foundation messages.
The two locales preserve the same responsibility, warning severity, action set,
and canonical/generic distinction. Japanese labels for canonical Relation
inspection are `始点` / `終点`; generic blocker rows are `名前` / `つながり先`.
The browser showed the corresponding Japanese semantic text and no new
modal-specific encoding failure. Existing unrelated locale-string history is
outside this audit and was not normalized.

## Shared ownership and test coverage

There is a shared visual shell in `src/styles.css`: `.detail`,
`.detail-backdrop`, `.detail-actions`, `.detail.confirmation`,
`.confirmation-backdrop`, `.danger-confirm`, `.detail-danger`, and the narrow
600px rules. `App.tsx` owns rendering order, last-dialog focus trapping,
Credits/replacement trigger restoration, and cross-dialog workflow state.
Dialog-specific components own titles, lead copy, identity model, action order,
and local autofocus/Escape behavior. The observed differences therefore come
from a mix of shared primitive behavior, component markup, scoped CSS, locale
copy, and intentional responsibility—not from one hidden duplicate modal
framework.

Current automated coverage is strongest for the high-risk behavior:

- `tests/detail-deletion-workflow.test.ts` covers Entity/Relation deletion,
  blocker resolution, self/parallel/Event-connected Relations, and safe return
  behavior;
- `tests/relation-blocker-display.test.ts` covers generic rows, duplicate
  identity hints, and Event-connected blockers;
- `tests/dataset-replacement-safety.test.ts` covers replacement action states,
  export transitions, and replacement-trigger restoration;
- `tests/appUiIntegration.test.ts` covers live source contracts for dialog
  rendering, Relation canonical labels, blocker labels, safe-first focus,
  dismissal Escape behavior, App focus trapping, and responsive CSS contracts;
- `tests/i18n.test.ts` covers locale detection and the relevant EN/JA messages.

The main confidence gap is not a demonstrated runtime defect: there is no one
rendered browser fixture that exercises every dialog variant across both locales
and narrow content. That is recorded as an `I. TEST-COVERAGE GAP`, P3, for any
future visual regression work. It does not justify a runtime consistency change
in this checkpoint.

## Bounded real-browser review

Using a dedicated Edge profile and the local CDP helper, the following live
surfaces were actually inspected at the current LiaisonScape runtime:

- English desktop: Create Entity, Entity Detail, Entity deletion blocker with
  multiple Relation cards, Relation Detail, Relation deletion confirmation, and
  Credits;
- Japanese desktop: Create Entity and Credits;
- Japanese narrow viewport around 560x800: Create Entity;
- English replacement safety: a saved Entity edit was used to create a modified
  Dataset, then a local E2R JSON was selected through the file input; the live
  replacement dialog rendered `Replace Dataset?`, its loss-warning copy, Cancel,
  Discard and Continue, and Export and Continue, with Cancel initially focused.

The browser review verified the native-dialog state as closed before and after
application-owned inspection. A bounded current-head blocker narrow check also
confirmed stacked card actions, wrapped values, reachable footer actions, and no
horizontal overflow. The browser review did not change the Dataset on disk or
any repository file.

## Findings and prioritization

| Finding | Dialog(s) | Category | Priority | Likely owner | Runtime candidate |
| --- | --- | --- | --- | --- | --- |
| F-01: No single rendered browser fixture covers every modal variant, locale, and narrow long-content combination | All variants; highest value for blocker, replacement, and dismissal states | I. Test-coverage gap | P3 | LiaisonScape integration/browser-test ownership | Candidate A: add bounded representative dialog fixture coverage only if a future visual regression issue requires it |

No P0/P1 data-safety, completion, semantic-type, focus-escape, or destructive
review confusion defect was established. No P2 visual, action-hierarchy, or
scroll inconsistency was established after responsibility classification.

### Bounded future candidates

Only one bounded candidate follows from the evidence:

1. **Representative modal visual-regression coverage (P3, optional):** add
   browser or rendered fixtures for one create/edit, detail, generic delete,
   draft dismissal, blocker, replacement, and Credits state in EN/JA, with one
   narrow blocker/replacement case. This would improve confidence without
   extracting or normalizing all dialogs.

No Relation vocabulary, Relation Detail, deletion semantics, destructive
styling, action order, or global focus-policy implementation candidate is opened
by this audit.

### Explicitly not defects

- Entity Detail's Source/Target rows and Entity deletion's Connected object
  rows are not vocabulary drift; they serve canonical inspection versus generic
  destructive dependency review.
- Creation's full-width grid actions are not spacing drift; they belong to a
  form that must keep both authoring actions easy to reach.
- Credits' left-aligned Close action is not action-hierarchy drift; it has no
  destructive primary action.
- Cancel-first initial focus is not weak destructive emphasis; it is the
  accepted safe-first contract.
- The blocker footer's Keep Entity placement and its lack of a final Delete
  button while blockers remain are not confirmation inconsistency; they express
  a multi-step resolution state.
- No universal autofocus requirement is implied for Detail, Relation Detail,
  or Credits.
- No cross-application modal parity implementation is opened.

## Outcome

**MODAL AUDIT COMPLETE / NO MATERIAL CONSISTENCY FIX REQUIRED**

The inventory is complete for current application-owned modal/dialog surfaces.
The recently changed generic Entity deletion blocker presentation is accepted
as the baseline. The screenshot-like Entity Detail related-Relation surface is
correctly classified as canonical inspection. One P3 test-coverage gap is
recorded as an optional future confidence improvement; it is not a runtime
consistency defect and does not authorize any implementation in this checkpoint.

No LiaisonScape file, test, locale message, CSS rule, service, or runtime
behavior was changed by this audit.

## Subsequent Relation Detail decision

The Outcome A above remains the valid result of `LS-MODAL-DIALOG-CONSISTENCY-AUDIT1`
under the responsibility model available on 2026-08-29. In particular, its
finding that Entity Detail related-Relation cards and Entity deletion blocker
cards serve different responsibilities remains unchanged.

The later `LS-RELATION-DETAIL-PRESENTATION-DIRECTIONALITY-DECISION1` supersedes
only this audit's Relation Detail classification and current-vocabulary
conclusion. Under the newly accepted product direction, ordinary Relation
Detail becomes Relation inspection plus future presentation configuration. Its
ordinary primary structure is therefore conceptually `Name`, two singular
`Connected object` rows in stable canonical order, and a presentation control
between them. Japanese uses `名前`, `つながり先`, and `つながりの表示`; the
English control label and persistence remain unresolved.

This note does not reopen the modal inventory, destructive styling, dismissal,
focus, scroll, narrow, or EN/JA findings above. It does not change Relation
Create/Edit, Entity Detail, the accepted Entity deletion blocker, or any
runtime behavior. It records a later product-direction supersession, not a
retroactive defect in the completed audit.
