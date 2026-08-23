# E2R Session 0047 - NarrativeLine Focus Phase 2 Closure

Date: 2026-08-23

## Scope

This session records the bounded NarrativeLine Focus Phase 2 workstream,
covering Entity Create autofocus experiments F1, F1b, and F1c, their accepted
runtime behavior, reusable Knowledge evidence, and formal closure.

No E2R Core or Extension schema was changed. No Dataset semantics, CSS,
Validator behavior, or LiaisonScape runtime behavior was changed.

## Accepted runtime behavior

The accepted NarrativeLine behavior is:

- Fresh `Create New Entity` entry starts a blank Entity Create workflow and
  focuses Name once.
- `Resume Draft` resumes the existing single Entity Create draft and does not
  force focus to Name.
- Browser Back/Forward history restoration preserves the draft but does not
  recreate fresh-creation autofocus intent.
- Explicit Entity Create discard clears the draft and pending work; a later
  fresh creation is blank and may autofocus Name again.
- Successful `Create and Associate` clears the draft and returns to the normal
  workflow.
- Existing Event Detail and Existing Entity Detail retain no generic
  autofocus because the intended editing field is not unambiguous at entry.
- Japanese IME behavior and textarea Enter/newline behavior remain unchanged.

The implementation uses App-owned transient explicit intent. Focus intent is
not persisted in `history.state`, `sessionStorage`, or `localStorage`, and no
generic focus-intent service was introduced.

## F1/F1b/F1c checkpoints

F1 established the initial Name autofocus for fresh Entity Create entry while
avoiding rerender focus stealing.

F1b distinguished fresh explicit creation from Browser history restoration.
The one-shot autofocus intent is created only for fresh blank creation and is
consumed after focus.

F1c aligned the UI wording and lifecycle semantics for the existing single
draft:

- no pending draft: `Create New Entity`;
- pending draft: `Resume Draft` / `下書きを再開`;
- Resume preserves the existing draft and does not autofocus;
- Discard returns to the New state without silently replacing a draft.

## Runtime checkpoint

The accepted NarrativeLine runtime checkpoint is:

`1d6d609 feat: focus fresh entity creation by explicit intent`

Changed runtime files:

- `src/App.tsx`;
- `src/screens/EntityCreateScreen.tsx`; and
- `src/screens/EntityPickerScreen.tsx`.

No NavigationService or history metadata change was required.

## Verification

The runtime checkpoint passed:

- `npm.cmd test`: 88 passed;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS; and
- `git diff --check`: PASS.

The later specification roadmap synchronization passed:

- `e2r-spec`: `npm.cmd run validate` PASS;
- roadmap `git diff --check`: PASS; and
- Knowledge `git diff --check`: PASS.

## Knowledge synchronization

Reusable evidence was recorded in the Hypothesis entry:

`ai-knowledge/hypotheses/cross-app-action-hierarchy-and-destructive-controls.md`

The entry records that consistency should be evaluated by predictability from
explicit user intent, not by identical autofocus behavior across semantically
different entry actions. It also records that fresh autofocus is reversible,
while Resume/History restoration, safe Enter, and Timeline title focus remain
bounded or deferred concerns.

Knowledge checkpoint:

`8ea97aa docs: record explicit-intent autofocus evidence`

Closure refinement checkpoint:

`2b203fe docs: close explicit-intent focus experiment`

The Knowledge status remains `Hypothesis`; this evidence is not a workspace-
wide accepted rule and does not authorize analogous LiaisonScape changes.

## Formal closure and roadmap synchronization

Focus Phase 2 was formally closed as:

`CLOSE AS-IS`

The closure does not make safe Enter/form semantics or Timeline title
autofocus release blockers. Those remain optional deferred follow-up
experiments. Dialog focus remains governed by the existing ModalDialog
safe-focus, Escape, Tab-trap, and opener-restore behavior.

The E2R specification roadmap records the closure in:

`docs/roadmap.md`

Roadmap checkpoint:

`3c98fd9 docs: close NarrativeLine focus phase`

Remaining NarrativeLine-main and Cross-App Shell alignment work is separate
from Focus Phase 2, including display-order reordering, footer alignment,
Home/Hub auxiliary navigation, Dataset secondary access alignment, and locale
control alignment.

## Repository and publication status

The NarrativeLine and Knowledge worktrees were clean after their checkpoints.
The specification repository retained the pre-existing untracked file:

`research/exploratory/anonymous-dataset-sharing.md`

That file was not part of this session and was not modified or staged.

No repository was pushed. No release, tag, or publication was performed.
