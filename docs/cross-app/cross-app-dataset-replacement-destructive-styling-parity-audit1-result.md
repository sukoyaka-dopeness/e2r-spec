# Cross-App Dataset Replacement Destructive Styling Parity Audit 1

Status: **ACCEPTED / CLOSED**  
Date: 2026-09-23

## Scope and finding

Compared current NarrativeLine and LiaisonScape Dataset Replacement dialogs.
Both expose the same risk actions by state: modified-only has Cancel, Discard
and Continue, Export and Continue; pending-only has Cancel and Discard and
Continue; modified-and-pending has Cancel, Discard work and Continue, Export
Dataset. EN/JA copy and state-to-action availability remain in their existing
application contracts.

The safe-side action is first and receives initial focus in both dialogs.
Export actions retain ordinary button treatment. The material presentation
disparity was the destructive action: LiaisonScape used white text on a solid
red button and a darker-red hover, while NarrativeLine used red text and border
on a neutral button, then its shared purple hover removed the red signal. This
made equivalent loss-risk actions materially less prominent in NarrativeLine.

NarrativeLine now applies the existing LiaisonScape red treatment only to the
Dataset Replacement destructive action, including a darker-red hover. No
dialog outside this surface was changed. Action labels/order, state detection,
availability, safe-side initial focus, dismissal, export behavior, and disabled
logic were not changed. NarrativeLine currently passes `busy={false}`, so the
replacement dialog has no disabled-action state in ordinary runtime. The
current LiaisonScape dialog likewise renders these actions enabled.

## Evidence and validation

- Local browser review: NarrativeLine modified-only in EN and JA at normal
  browser width; LiaisonScape modified-only at a 390px narrow browser width in
  JA. Both present the safe-side Cancel first and distinguish Discard; at narrow
  width LiaisonScape stacks the actions, with no clipped action text. A keyboard
  Tab moved focus to the destructive action and its 3px purple focus-visible
  outline remained visible.
- Source review: LiaisonScape's `.danger-confirm` supplies the solid red base
  and darker-red hover; both applications retain a 3px purple `:focus-visible`
  outline. NarrativeLine stacks replacement actions at its existing narrow
  breakpoint. No responsive or interaction redesign was needed.
- State/copy matrices: NarrativeLine's `DatasetReplacementCopyService` tests
  cover all three states in EN/JA; LiaisonScape's
  `dataset-replacement-safety.test.ts` covers the matching action matrix.
  These support the visual review of pending-only and modified-and-pending,
  whose destructive control uses the same state-independent style.
- NarrativeLine `npm.cmd test`: **259/259 PASS**.
- LiaisonScape `npm.cmd test`: **641/641 PASS**, exit code 0. The run printed
  existing React/jsdom `attachEvent`/`detachEvent` diagnostics; no tests failed.
- `npm.cmd run build` in both application repositories: **PASS**.
- Public deployment/device-specific acceptance was not performed or required;
  no deploy or public-site change was made.

## Boundary

The only implementation change is a presentation-only, Dataset Replacement-
scoped CSS correction in NarrativeLine. No LiaisonScape, Dataset semantics,
dirty/pending classification, dialog/action contract, focus/dismissal contract,
Export path, schema, or Validator source was changed. CSS/DOM identity was not
the goal. No further Human design decision is needed for this bounded styling
audit; the roadmap follow-up is closed.
