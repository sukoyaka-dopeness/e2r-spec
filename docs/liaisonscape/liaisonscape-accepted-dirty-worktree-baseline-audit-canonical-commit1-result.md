# LiaisonScape Accepted Dirty Worktree Baseline Audit / Canonical Commit 1

Date: 2026-09-16

## Classification

**BASELINE COMMIT BLOCKED / UNRESOLVED DIRTY OWNERSHIP REMAINS**

The current worktrees contain a coherent source-level accepted state, but not
every dirty item can be justified as part of that state. No baseline commit
was created. This preserves the distinction between accepted implementation
and retained-but-unresolved historical/diagnostic work.

## Audit result

The accepted baseline candidates are the current Frontier normal-path
implementation and its shared generator/Worker/adapter/tests, the related
research and acceptance artifacts, the current Product-selection support, and
the recently accepted agent guidance. The current source and result evidence
support retaining those items. The relevant production contract remains:

```text
normal coordinate-less Automatic Display
= Frontier async operation
  + settleInitialPlacement immediate fallback
  + accepted Pending / Cancel UX
```

The following items prevent an honest all-dirty baseline commit:

- In `e2r-liaison-scape`, `.tmp-normal-offset-output.json` is a temporary
  diagnostic output without accepted-result ownership.
- `experimental/product-evaluation-seam/spacing-inspection2/` is an older
  untracked research surface explicitly preserved by earlier session records,
  but its current retention/adoption status is not established here.
- In `e2r-spec`, `work/` contains pre-existing browser/diagnostic outputs and
  is likewise recorded as preserved, not as an accepted baseline.
- `sessions/E2R-Session-0052.md` and `docs/roadmap.md` contain accumulated
  historical/current material. Their entire dirty paths cannot be treated as
  one new baseline unit without hunk-level ownership.

`tests/graph-presentation.test.ts` is marked modified, but its worktree blob
equals the HEAD blob; no content change was identified for a commit.

The machine-readable inventory is in
`../e2r-liaison-scape/experimental/accepted-dirty-worktree-baseline-audit-canonical-commit1/result.json`.

## Provenance and safety

The Frontier executable provenance chain remains source-traceable:

```text
normalized Dataset input
→ shared Frontier candidate generator
→ Worker Product evaluation / selection
→ App async lifecycle adapter
→ normal-path render-only adoption
→ Production Acceptance evidence
```

It is not frozen in a new canonical revision. The references remain app
`942f3f60dda50594d09f48d7c76ffa9bfae56544 + working tree` and spec
`c3b09f081ffc4a2c0ec46ce7f3e86823dd55d642 + working tree`.

No runtime behavior, solver, Product authority, Dataset/Coordinate,
persistence, or dirty-state semantics were changed. No reset, restore, stash,
discard, push, deploy, or release was performed. All unrelated dirty work was
preserved.

## Next safe step

Create a fresh worktree or an explicit ownership map that keeps the temporary
diagnostic output, the older spacing-inspection surface, and spec `work/`
outside the accepted baseline. Only after that separation is evidenced should
the accepted source/evidence baseline be committed and its revision recorded
as canonical. Rollout remains separately deferred.
