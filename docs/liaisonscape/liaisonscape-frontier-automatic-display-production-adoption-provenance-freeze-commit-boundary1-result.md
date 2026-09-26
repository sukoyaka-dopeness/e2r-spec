# LiaisonScape Frontier Automatic Display Production Adoption Provenance Freeze / Commit Boundary 1

Date: 2026-09-16

## Result

**PROVENANCE FREEZE BLOCKED / DIRTY-WORKTREE OWNERSHIP NOT SAFELY SEPARABLE**

The accepted production behavior is present in the current source, but the
current worktrees do not provide an auditable committed revision containing
only that behavior. No commit was created.

This is a provenance boundary decision, not a rejection of the accepted
Automatic Display contract. The contract remains:

```text
normal coordinate-less Automatic Display
= Frontier async operation
  + settleInitialPlacement immediate fallback
  + accepted Pending / Cancel UX
```

## Ownership audit

In `e2r-liaison-scape`, the accepted chain crosses `src/App.tsx`,
`src/i18n.ts`, and `src/styles.css`. These tracked files are dirty and their
diffs contain accumulated preview/read-only, presentation, and lifecycle work
in addition to the Frontier normal-path adoption. The untracked shared
generator, Worker proof, adapter, tests, and experiment artifacts can be
identified by path, but staging only those files would omit the accepted App
behavior. Staging the mixed tracked paths would risk committing unrelated
hunks.

In `e2r-spec`, `docs/roadmap.md` and `sessions/E2R-Session-0052.md` contain
accumulated prior checkpoint material, while many result documents remain
untracked. `AGENTS.md` is also dirty. A path-only commit therefore cannot be
claimed as an exact acceptance/provenance boundary. Historical result
documents that say `HEAD + working tree` are not rewritten to claim a commit
that does not exist.

The detailed machine-readable audit is recorded at
`../e2r-liaison-scape/experimental/frontier-automatic-display-production-adoption-provenance-freeze-commit-boundary1/result.json`.

## Provenance status

The source-backed execution chain remains traceable:

```text
normalized Dataset input
→ shared Frontier candidate generator
→ Worker Product evaluation / selection
→ App async lifecycle adapter
→ normal-path render-only adoption
→ Production Acceptance evidence
```

It is not yet frozen as a single committed revision. The current canonical
reference remains `e2r-liaison-scape` at
`942f3f60dda50594d09f48d7c76ffa9bfae56544 + working tree` and `e2r-spec` at
`c3b09f0 + working tree`. The accepted Production Acceptance evidence remains
valid as working-tree evidence; this checkpoint does not change it.

## Safety and next boundary

No runtime, solver, Product presentation, UX, Dataset, Coordinate,
persistence, or dirty-state behavior was changed. No reset, restore, stash,
discard, push, deploy, or release was performed. Unrelated dirty work was
preserved.

Before a provenance-freeze commit, the accepted source must be placed in a
clean or explicitly hunk-owned boundary, with the earlier unrelated changes
left outside the commit. The next safe option is a fresh worktree or an
explicit ownership map for the mixed tracked files; this checkpoint does not
guess at that separation.

Production adoption remains source-level accepted, while deployment/public
rollout remains deferred and separately authorized.
