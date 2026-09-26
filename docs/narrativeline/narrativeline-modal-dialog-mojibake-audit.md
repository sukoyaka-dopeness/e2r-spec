# NarrativeLine Modal/Dialog Mojibake Audit

## Status

**AUDIT COMPLETE / CORRECTION DEFERRED**

No runtime, test, CSS, or copy source was changed by this audit.

## Why this audit exists

The known Relation endpoint separator defect is rendered in the Entity
deletion blocker dialog. Before correcting that isolated presentation value,
all NarrativeLine modal and dialog surfaces were inspected to determine
whether the defect is isolated or part of a wider encoding problem.

## Scope

The audit covered every current `ModalDialog` consumer, the shared dialog
implementation, direct dialog literals, values supplied by copy services and
i18n, Relation presentation values, aria labels, status text, buttons, links,
empty/resolved states, and the `currentDialog` application state reference.

## Modal/dialog inventory

The live source contains these modal surfaces:

| Surface | Component / file | Opening state or trigger | Main text sources |
| --- | --- | --- | --- |
| Entity deletion blocker | `src/screens/EntityDetailScreen.tsx` | Entity `Delete Entity` with incident Relations | direct EN/JA literals, `RelationPresentationService`, presentation messages |
| Final Entity deletion confirmation | `src/screens/EntityDetailScreen.tsx` | resolved blocker or unblocked Entity delete | direct EN/JA literals |
| Dataset replacement | `src/components/DatasetReplacementDialog.tsx` | replacement safety state | `DatasetReplacementCopyService` |
| Locale conflict | `src/components/LocaleConflictDialog.tsx` | requested and saved locale differ | direct EN/JA literals and locale labels |
| Detail Back confirmation | `src/components/DetailBackConfirmationDialog.tsx` | dirty detail navigation | `DetailDiscardCopyService` |
| Event deletion confirmation | `src/screens/EventDetailScreen.tsx` | Event `Delete Event` | direct EN/JA literals and presentation messages |
| Event–Entity association removal | `src/screens/EventDetailScreen.tsx` | Event detail association removal | direct EN/JA literals and presentation messages |
| Credits | `src/components/AppFrame.tsx` | Credits control | direct title plus presentation messages |

All listed surfaces use the shared `src/components/ModalDialog.tsx`, which
renders `role="alertdialog"`, `aria-modal="true"`, and
`aria-labelledby`. The `currentDialog` field in `src/state/AppState.ts` was
also discovered, but no additional current modal consumer was found through
the live source search.

## Search method

Source discovery used searches for `ModalDialog`, `alertdialog`,
`currentDialog`, `aria-labelledby`, and `ariaLabelledby` across `src`.
Encoding heuristics searched for the Unicode replacement character and common
UTF-8/mojibake fragments including `窶`, `竊`, `邵ｺ`, `郢ｧ`, `隴`, `縺`,
`繧`, `蜿`, `譁`, `莠`, `迚`, `髯`, `邂`, and `遶`.

The heuristic was treated as evidence for manual review, not as an automatic
classification of every non-ASCII character.

## Confirmed clean surfaces

The following modal surfaces contain coherent English and Japanese literals
or copy-service values in the current source review, with no separately
confirmed mojibake in their dialog-specific text:

- Locale conflict title, message, and choice labels;
- final Entity deletion confirmation wording;
- Event deletion confirmation wording;
- Event–Entity association removal wording; and
- the Credits title and its repository links.

This classification concerns the dialog-specific values reviewed here. It
does not certify every indirect shared message value used elsewhere in the
application.

## Confirmed mojibake findings

### Relation endpoint separator

- Source: `e2r-narrative-line/src/services/RelationPresentationService.ts:33`
- Function: Relation blocker label construction
- Current value: `` `${endpoint(sourceId)} 竊・${endpoint(targetId)}` ``
- Intended value: a normal endpoint separator, recorded by the existing
  presentation follow-up as `source → target`
- Applicability: EN and JA Relation blocker presentation
- Visible surface: Entity deletion blocker dialog, including ordinary,
  self, parallel, and hidden/Event-related Relations
- Dataset affected: No; this is a derived presentation string
- Semantics affected: No; canonical Relation IDs and operations are unchanged
- Correction footprint: one presentation-service value plus required EN/JA
  regression coverage

### Shared presentation messages supplied to dialogs

`src/i18n/messages.ts` contains additional clearly corrupted literals that can
reach modal surfaces through `getPresentationMessages`, including:

- English `handoffLoading: "Opening the handed-off Dataset窶ｦ"`;
- Japanese `openInLiaisonScape: "LiaisonScape縺ｧ髢九￥"`;
- Japanese Credits labels and gratitude text containing repeated mojibake
  sequences such as `繝`, `縺`, and `譁`; and
- Japanese export/error and unnamed-object messages containing the same
  patterns, some of which are used by dialog-adjacent error and status
  surfaces.

These are confirmed source-level encoding defects where the intended Japanese
copy is identifiable from the corresponding English key and surrounding
application meaning. The affected values are presentation-only; they do not
alter Dataset bytes, object identity, or deletion/Handoff semantics.

- Applicability: English for the `窶ｦ` value; Japanese for the listed Japanese
  values
- Dialog surfaces: Credits, Handoff/loading or error presentation, and any
  modal that consumes the shared presentation messages
- Correction footprint: shared i18n message audit and locale regression
  coverage, not a Relation-only one-line fix

Because these findings cross the shared message layer, they are not safe to
fold into the separately reviewable endpoint-separator correction.

## Suspicious findings

No additional dialog-specific value was classified as suspicious after manual
review. Unusual Japanese punctuation, arrows, ellipses, and legitimate
non-ASCII literals were not classified merely because they were non-ASCII.

## Non-modal findings

The same `src/i18n/messages.ts` corruption is also available to non-modal
surfaces, including general loading, export/error, unnamed-object, and Event
count presentation. These are classified as **NON-MODAL FINDING** where they
are not rendered inside a dialog. They reinforce the shared-message scope but
do not change the modal audit decision.

## Known Relation endpoint separator result

The known finding is independently confirmed at the current source. The
`primary` Relation value uses a normal arrow separator, while the `endpoints`
value used by the blocker card contains the mojibake separator `竊・`. The
Candidate B action-group change did not alter this value. It remains unfixed.

## EN / JA coverage

The inventory includes both locale branches for every listed dialog. Locale
conflict has explicit coherent EN/JA literals. Deletion dialogs combine
explicit EN/JA literals with Relation and shared-message values. Credits,
Handoff-related messages, export/error messages, and unnamed-object fallbacks
require a shared i18n correction review for both locales, with Japanese as the
principal affected language and the English loading ellipsis as an additional
affected value.

## Dataset / semantic safety assessment

No Dataset data is corrupted by these findings. Relation endpoint strings,
labels, counts, button labels, and status messages are derived presentation
values. Canonical IDs, Relation endpoints, deletion behavior, Handoff fields,
and Dataset persistence remain unaffected.

## Recommended correction scope

Do not implement a correction in this audit. The next work should be split into
at least two reviewable presentation changes:

1. correct the Relation endpoint separator and regression-check EN/JA,
   ordinary/self/parallel/hidden-Event-related Relations, blocker dialogs, and
   coexisting Handoff actions; and
2. separately audit and correct the shared `messages.ts` values, with modal
   and non-modal locale coverage and copy-service regression tests.

Candidate B remains implemented, with formal visual acceptance pending. Its
geometry and Handoff behavior are outside this audit.

## Explicit exclusions

This audit did not modify NarrativeLine runtime source, tests, CSS, i18n
messages, `RelationPresentationService.ts`, e2r-spec roadmap, ai-knowledge,
LiaisonScape, Hub, Core, Extensions, schemas, modal geometry, deletion or
Handoff behavior. No mojibake was fixed. No Candidate B visual/manual
acceptance was performed. Nothing was pushed or deployed.

## Decision

**C. BROADER ENCODING ISSUE**

The known endpoint separator is confirmed, but shared i18n/presentation
messages contain additional confirmed corruption reaching modal and non-modal
surfaces. Correction requires a separate shared-message diagnosis and cannot
be safely treated as an isolated Relation separator fix.
