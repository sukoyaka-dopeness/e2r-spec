# E2R Session 0103 - Cross-App Home, Credits, and backdrop checkpoint

Date: 2026-10-07

Repositories: `e2r-spec`, `e2r-parameter-plotter`, `e2r-narrative-line`,
`e2r-liaison-scape`, and `ai-knowledge`

## Session identity

Objective: record the Human-selected Cross-App Home, Credits, and overlay
backdrop alignment, checkpoint the bounded ParameterPlotter Home/startup
acquisition/shell/Credits feature, and keep implementation evidence distinct
from Human Browser Acceptance.

Status: **LOCAL FEATURE CHECKPOINTS CREATED / AUTOMATED VERIFICATION PASS /
HUMAN BROWSER ACCEPTANCE PENDING / FULL OVERLAY RUNTIME AUDIT DEFERRED**.
This session is a historical collaboration record; the Roadmap remains the
current planning authority.

## Human-selected contract

- Home uses `Get Started` and the ParameterPlotter description
  `Compare E2R Entities across Dimensions.` Ordinary acquisition actions are
  separated from the Sample action. The reference spacing is 12px between
  ordinary actions and an additional 12px before the Sample group. The
  ParameterPlotter Sample wording remains unchanged.
- ParameterPlotter Credits identifies `ParameterPlotter`,
  `sukoyaka-dopeness`, and
  `With gratitude to all the AI systems that contributed to this project.`
  with the existing repository links. Version, First release, and Updated
  remain omitted.
- Standard overlay backdrop is `rgba(8, 6, 13, 0.28)`. A backdrop that
  dismisses on click uses `rgba(8, 6, 13, 0.34)` on hover; a non-dismissible
  backdrop has no hover change. Hover feedback is suppressed while the
  pointer is over the dialog. Existing dismissal behavior, z-index ownership,
  and safety semantics remain application/surface responsibilities.

## Work and checkpoints

- NarrativeLine aligned its shared modal backdrop and dismissible-hover
  modifier with the selected contract, including a regression assertion.
  Local commit `46e7fd27c4af9270f60521ed212c19269fa3b877`:
  `fix: align modal backdrops with cross-app contract`.
- ParameterPlotter checkpointed Home acquisition, recoverable Continue
  Editing, New/Open/Sample entry, the bundled canonical Ashen Crown sample,
  Home/Workspace shell integration, Footer and Credits, Cross-App typography
  and backdrop alignment, replacement protection, related tests, and current
  implementation evidence. The sample file's SHA-256 matches the E2R-SPEC
  canonical English example. Local commit
  `4aaebf971b94c445e9468c63abe532d72ef8694b`:
  `feat: add ParameterPlotter Home acquisition shell`. The unrelated
  `.github/FUNDING.yml` was excluded.
- LiaisonScape already supplied the backdrop and Home action-grouping
  reference; no source change or empty commit was made.
- The existing `reference-first-ui-consistency-audit.md` evidence remains at
  Hypothesis status; no new Knowledge entry or status promotion was made in
  this session.
- The current Roadmap summary row was updated to distinguish selected/source-
  aligned contract, pending Human Browser Acceptance, and the deferred
  full-dialog audit. Only that ASCII row was staged from the mixed Roadmap
  worktree. Local commit `b64ee08926d1eafc8d34083bf72b7dbb321663e5`:
  `docs: sync Cross-App backdrop follow-up status`. Pre-existing mixed
  Roadmap/Research changes, untracked Research seeds, and `work/` artifacts
  were retained. Other malformed bytes in the Roadmap were not repaired.

## Verification and acceptance boundary

At the checkpoint, ParameterPlotter syntax checks covered 22 application
modules and all 67 tests passed; `git diff --check` passed. NarrativeLine's
349 tests, lint, and build passed. LiaisonScape's 656 tests, lint, and build
had passed in the preceding validation; it was unchanged here. E2R-SPEC's
`npm.cmd run validate` passed after the Roadmap status update.

Codex browser review inspected Home and Credits at the checked viewport.
These source, automated, and Codex browser checks are not Human Browser
Acceptance. The three-app real-browser audit of every dialog, modal, and
drawer for normal color, hover, dialog-body suppression, dismissal behavior,
and served computed styles remains **DEFERRED**. Hover/computed-style runtime
behavior was not verified for every overlay. Human review of the current
ParameterPlotter feature checkpoint remains pending.

## Repository boundary

At checkpoint time, the local application commits remained unpushed:
ParameterPlotter `4aaebf9` (20 commits ahead of `origin/main`), NarrativeLine
`46e7fd2` (2 ahead), and LiaisonScape was at `b93e976` with no tracked changes.
E2R-SPEC was at `b64ee08` (9 ahead before this Session commit) and retained
its unrelated dirty/untracked documentation and work artifacts. Knowledge
was at `f8028d1` (12 ahead) with unrelated dirty/untracked work retained.
ParameterPlotter's untracked `.github/FUNDING.yml` and existing LiaisonScape
artifacts were preserved. No Dataset, Core, Extension, schema, Validator, or
Candidate 0.1.0 semantics changed. No push, tag, release, deployment, Pages
publication, or Hub publication occurred.
