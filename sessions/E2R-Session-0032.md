# E2R Session 0032 — LiaisonScape First Distribution Closure and NarrativeLine Follow-up

## Scope

This session records the completion of LiaisonScape 0.1.0 First Distribution
and the subsequent NarrativeLine interoperability, research, and documentation
follow-up. LiaisonScape was released successfully; later NarrativeLine work was
kept in separate checkpoints and was not pushed as part of this session.

## LiaisonScape First Distribution

LiaisonScape 0.1.0 First Distribution was closed with the following confirmed
state:

- Version: `0.1.0`
- Release date: `2026-08-16`
- GitHub Pages deployment: successful
- Live URL: `https://sukoyaka-dopeness.github.io/e2r-liaison-scape/`
- English and Japanese samples: confirmed
- English and Japanese user guides: confirmed
- Credits and repository links: confirmed
- JavaScript and CSS delivery: confirmed
- 121 tests passed
- lint, typecheck, build, and `git diff --check`: green
- final release metadata commit: `3ef5a21`
- pushed to the remote
- worktree clean at release closure

The Pages workflow was made reproducible by checking out the sibling
`e2r-spec` repository side-by-side at a published fixture revision. The final
published revision used for the required research fixtures was:

`97c899ff4ca8c7b134fac4ec17cdaf534cf950df`

The workflow preserved the project Pages base path and deployed the generated
LiaisonScape `dist/` artifact. The release blocker was identified as the
availability of canonical cross-repository fixtures, not a production or Pages
architecture defect.

The later authoritative published `e2r-spec` fixture revision for NarrativeLine
verification is:

`c7c842cdba054d675087dbf4322dad22d3443a`

This supersedes the earlier `97c899ff4ca8c7b134fac4ec17cdaf534cf950df`
revision mentioned above for the subsequent NarrativeLine verification work.

## LiaisonScape release preparation completed

The First Distribution work included:

- removal of the legacy migration action from the first-distribution UI while
  retaining migration services, tests, fixtures, and fail-closed behavior;
- Credits action in the Home footer using `Credits` in English and `クレジット`
  in Japanese;
- Credits modal content and layout aligned with NarrativeLine;
- English AI acknowledgement and repository presentation as explicitly
  requested;
- Home sample Dataset entry with localized English/Japanese sample loading;
- sample action spacing aligned with NarrativeLine without a divider;
- Vite project Pages base configuration;
- Pages CI side-by-side `e2r-spec` checkout and pinned fixture revision;
- README and English/Japanese user-guide updates;
- Japanese guide clarification for beginner interactions, including right
  click, touch long-press, connection-port dragging, Ctrl plus mouse wheel,
  saved Coordinates, and the distinction between temporary view state and
  exported data.

The release boundary intentionally excluded the later redesign of
NarrativeLine browser navigation and the planned mobile LiaisonScape model.

## Deferred product ideas recorded

The following were recorded as post-MVP planning items rather than implemented:

- NarrativeLine should eventually gain browser Back behavior comparable to
  LiaisonScape.
- NarrativeLine Credits should eventually dismiss when the backdrop outside
  the modal is clicked.
- NarrativeLine public sample data may later gain Entity↔Entity Relations and
  Coordinate values that make the cross-application LiaisonScape view more
  interesting, without weakening NarrativeLine's Timeline identity.
- Mobile LiaisonScape should be considered a focused relationship explorer,
  centered on one Entity and its one-hop neighborhood, rather than a reduced
  desktop graph editor. Bottom sheets, search/list navigation, simplified
  Relation presentation, and form-based editing are candidate directions.
- Relation direction, bidirectionality, undirected appearance, and arrow
  presentation require a deliberate separation between semantic direction and
  visual arrow appearance. Future work belongs across Extension design,
  presentation responsibility, and LiaisonScape UI rather than in a visual
  shortcut.

## NarrativeLine checkpoints

NarrativeLine work was separated into independent checkpoints:

- Coordinate interoperability follow-up, including canonical and legacy Space
  handling, bounded Entity position editing, preservation behavior, and
  validation evidence;
- History date/time enhancement for contiguous hour, minute, and second
  precision and Timeline display;
- Home action alignment;
- Target Reference preservation evidence;
- Source/Citation preservation evidence;
- P1 Names consumer research.

The P1 Names research checkpoint was ultimately committed locally as:

`ecc2120 research: add P1 Names consumer experiments`

Its approved scope is exactly:

- `src/research/p1LifecycleExperiment.ts`
- `src/research/p1NameExpressionDiscovery.ts`
- `tests/p1LifecycleIntegration.test.js`
- `tests/p1NameExpressionDiscovery.test.js`

The P1 experiment is research-only. It demonstrates bounded exact-value,
case-sensitive expression discovery and lifecycle behavior, but does not
authorize Names product integration, alias semantics, ranking, normalization,
equivalence inference, or Grouping behavior.

During isolated verification, the P1-specific tests passed 5/5 and lint/build
passed. A flat temporary worktree initially failed seven full-suite tests
because the sibling `e2r-spec` fixtures were not present. The cause was the
temporary layout, not P1 behavior. A later diagnostic confirmed that the Codex
sandbox could not create `.git/index.lock` because of its ACL boundary, while
the repository root remained writable. No ACL, ownership, or security setting
was changed and no push was performed for the P1 follow-up.

## NarrativeLine documentation reconciliation

The four tracked NarrativeLine documentation files were reconciled to the
current implementation and research boundary:

- `docs/MVP.md`
- `docs/architecture.md`
- `docs/editing-model.md`
- `docs/priority-feature-backlog.md`

The documents now distinguish:

- shipped Coordinate interoperability and basic History time editing;
- Target Reference and Source/Citation preservation evidence;
- P1 Names research evidence;
- future semantic/product work such as Relative Time, temporal intervals,
  Source/Citation UI, confidence, and Names integration.

The untracked
`docs/chatgpt-priority-feature-design-handoff.md` was then rewritten as a
separate, non-normative planning handoff. It records the original design
questions, completed implementation context, preservation/research limits,
unresolved responsibilities, and the next decision dependency. It explicitly
states that preservation is not semantic support and research is not product
authorization. It remains untracked pending review and normal-PowerShell
staging.

## Current NarrativeLine boundary

The first unresolved design dependency is ownership of chronology between
dated and undated Events. A future persisted ordering UI must not silently
extend `temporalOrder` beyond its specification. Relative Time or History-vNext
design, conflict behavior, cross-application reproducibility, and unknown-data
preservation must be resolved before product integration.

Other future topics remain separate: temporal intervals, Source/Citation,
confidence, Names/aliases, and mobile interaction. Completed research and
preservation checkpoints must not be interpreted as semantic product support.

## Verification and safety

For the completed LiaisonScape First Distribution, 121 tests, lint/typecheck,
production build, diff-check, Pages deployment, and live smoke tests were
confirmed green.

For the later NarrativeLine documentation work:

- only the intended documentation files were edited in each documentation
  slice;
- the design handoff was kept separate from the four tracked documentation
  files;
- no E2R Core or Stable Extension was declared by the research checkpoints;
- no unrelated source or test behavior was changed during documentation work;
- no ACL or security changes were made;
- no broad staging, reset, restore, stash, or history rewrite was performed.

## Complete NarrativeLine handoff stopping point

The separate NarrativeLine recovery handoff is intentionally recorded at the
following exact point:

- the revised file is `docs/chatgpt-priority-feature-design-handoff.md`;
- its staged tree has been verified as
  `f87da2396236376313db573a5f8ddc803922f910`;
- the staged content is expected to contain only that handoff file;
- the handoff commit has **not** yet been completed or reported;
- NarrativeLine has **not** been pushed.

The next operator must first verify `git status -sb`,
`git diff --cached --name-status`, `git diff --cached --check`, and
`git write-tree` in the normal NarrativeLine PowerShell environment. If the
staged tree remains unchanged, the intended commit subject is:

`docs: reconcile NarrativeLine priority design handoff`

After committing, the operator must run the full NarrativeLine verification
and audit before considering a push: 42/42 tests, lint, build,
`git diff --check`, a clean worktree, and an `origin/main..HEAD` review.
No force push, rewrite, or automatic merge/rebase is authorized. If the remote
has diverged, stop for review.

## Verdict

`LIAISONSCAPE 0.1.0 FIRST DISTRIBUTION COMPLETE`

LiaisonScape has no remaining First Distribution blocker. Subsequent work is
post-release research, documentation reconciliation, or explicitly deferred
product design.
