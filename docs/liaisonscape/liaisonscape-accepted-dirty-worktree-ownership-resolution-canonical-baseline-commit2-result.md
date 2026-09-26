# LiaisonScape Accepted Dirty Worktree Ownership Resolution / Canonical Baseline Commit 2

Date: 2026-09-16

## Classification

**ACCEPTED BASELINE ESTABLISHED / CANONICAL COMMITS CREATED**

The current accepted state was fixed in separate local commits without
including the unresolved diagnostic material. Past checkpoint boundaries were
not reconstructed; the commits represent the current accepted baseline.

## Canonical commits

- LiaisonScape: `9616a75` — `chore: establish accepted LiaisonScape baseline`
  - current accepted runtime/source state;
  - Frontier shared generator, Worker/Product selection, async adapter, and
    normal-path render-only adoption;
  - focused tests and research/acceptance/provenance artifacts;
  - accepted repository guidance.
- E2R-SPEC: `d68d7f1` — `docs: establish accepted E2R baseline`
  - accepted guidance;
  - formal Frontier and Product result documents;
  - roadmap history and Session-0052 formal session history.

## Frontier executable provenance

The accepted implementation is now anchored to the committed LiaisonScape
revision:

```text
9616a75
→ shared Frontier candidate generator
→ Worker Product evaluation / selection
→ App async lifecycle adapter
→ normal-path render-only adoption
→ Production Acceptance evidence
```

The corresponding specification and decision record is anchored to `d68d7f1`.
The accepted production contract remains:

```text
normal coordinate-less Automatic Display
= Frontier async operation
  + settleInitialPlacement immediate fallback
  + accepted Pending / Cancel UX
```

## Baseline exclusions

The following existing material remains uncommitted and unchanged:

- LiaisonScape `.tmp-normal-offset-output.json` — temporary diagnostic output;
- LiaisonScape `experimental/product-evaluation-seam/spacing-inspection2/` —
  retained historical/research surface whose current adoption status is not
  established;
- E2R-SPEC `work/` — retained browser/diagnostic outputs.

These exclusions do not invalidate the accepted baseline. No ambiguous
material was deleted, moved, reset, restored, or stashed. The empty/marker
state for `tests/graph-presentation.test.ts` was not turned into a content
change.

## Validation and remaining boundary

Before commit, LiaisonScape completed `npm test` with **588/588 PASS**,
`npm run lint` PASS, `npm run build` PASS, and cached `git diff --check` PASS.
E2R-SPEC `npm run validate` and cached `git diff --check` both passed.

The worktrees retain only the explicitly excluded diagnostic material and the
known no-content test marker. No runtime behavior was changed to create the
boundary. Production adoption is source-level canonical; deployment, release,
and public rollout remain separately deferred and authorized.
