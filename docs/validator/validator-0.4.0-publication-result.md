# Validator 0.4.0 Publication Result

- Date: 2026-08-30
- Status: `ACCEPTED — VALIDATOR 0.4.0 PUBLISHED`
- Authorization: the attached publication checkpoint explicitly authorized
  Validator `main` push, annotated `v0.4.0` tag creation/push, and the
  tag-triggered Trusted Publishing.
- Publication boundary authority: `7df25f7 docs: verify Validator 0.4.0 publication boundary`.

## Pre-publication public state

Immediately before publication, public Validator main was
`cc29fef70a6bb64e337857ce042edf6e9acea1ec`, package version was 0.3.0, public
tags ended at `v0.3.0`, and npm did not contain 0.4.0. Public e2r-spec main was
`8c7371cffdecd020d3a1c634752b3269175ce29e`.

## npm pre-publication state

The pre-publication registry checks returned latest `0.3.0`, dist-tag
`latest: 0.3.0`, and versions through `0.3.0`. Version 0.4.0 was absent.

## Release commit

`40c820a6345ef98e256984ad5246aae9c73338e8`

Local Validator package.json and package-lock root were both version 0.4.0;
CHANGELOG contained `## 0.4.0 - 2026-08-30`. Final `npm ci`, `npm run validate`,
and `npm pack --dry-run` passed before the public write.

## Main push

Validator `main` was pushed once with `git push origin main`. The remote main
was verified as the release commit above.

## Annotated tag

An annotated tag `v0.4.0` was created at the release commit with message
`Release v0.4.0`. Local verification showed the tag peeled to
`40c820a6345ef98e256984ad5246aae9c73338e8`.

## Tag push

Only `git push origin refs/tags/v0.4.0` was executed. The public tag exists,
and its peeled commit is the release commit. The tag was not moved or deleted.

## Release workflow

The tag-triggered workflow run was identified precisely:

- Workflow run ID: `33281141605`
- URL: https://github.com/sukoyaka-dopeness/e2r-validator/actions/runs/33281141605
- Tag/head branch: `v0.4.0`
- Head SHA: `40c820a6345ef98e256984ad5246aae9c73338e8`
- Status: `completed`
- Conclusion: `success`

The workflow's release validation, packaging, and publication completed
successfully.

## npm publication

Validator 0.4.0: **PUBLISHED**.

Post-publication registry checks returned:

- latest: `0.4.0`
- dist-tags: `{ "latest": "0.4.0" }`
- exact package version: `0.4.0`
- versions include `0.4.0`

## Clean-install smoke

A new temporary project installed
`@sukoyaka-dopeness/e2r-validator@0.4.0` from the npm registry, not a local
tarball. Installed package version was `0.4.0` and the temporary workspace was
cleaned afterward.

## CLI smoke

The installed local binary `.\node_modules\.bin\e2r-validator.cmd --version`
returned `e2r-validator 0.4.0`.

## Published Presentation library smoke

The installed public package validated a minimal Dataset containing Core
Relation data, Presentation 0.1.0 with `lineStyle: "dashed"`, and the exact
Specification `uses` declaration with `valid=true` and an empty diagnostics
array.

## Published orphan-warning smoke

The same installed package accepted a Presentation orphan Relation ID as a
valid Dataset and emitted `presentation_orphan_relation`.

## Package content sanity

The installed package contained `src/presentation-validator.js` and
`docs/specification-interoperability.md`, alongside the expected source and
documentation package surface. Package version was 0.4.0.

## Tag/commit/package/changelog coherence

Public main, annotated `v0.4.0`, peeled tag commit, package version, package
lock root version, and CHANGELOG heading all agree on the 0.4.0 release and
release commit. No GitHub Release object was created.

## GitHub Release object boundary

No GitHub Release object was created. The project release mechanism remains
annotated tag plus GitHub Actions plus npm Trusted Publishing.

## Consumer integration state

Consumer integration: **READY — NOT STARTED**. LiaisonScape remains on
`^0.2.0` and NarrativeLine remains on `^0.3.0`. No consumer package.json or
package-lock.json was changed.

## Public Sample Formal Acceptance boundary

Public Sample Formal Acceptance: **NOT RESUMED**.

## Auto Layout boundary

Explicit Auto Layout: **NOT STARTED**. R2 remains separate and unchanged.

## Temporary workspace cleanup

The exact published-smoke workspace
`C:/Users/extra/E2R/.tmp-validator-0.4.0-published-smoke-20260830` was
removed after evidence collection. Cleanup passed.

## Modified repositories

- Validator: public `main` and annotated `v0.4.0` were published; worktree
  remains clean.
- e2r-spec: this result document only; local commit follows, with no push.
- LiaisonScape, NarrativeLine, Hub: unchanged by this checkpoint.
- ai-knowledge: protected dirty file preserved unchanged.

## Public writes performed

Only these authorized public writes were performed:

1. Validator `main` push.
2. Validator annotated `v0.4.0` tag push.
3. GitHub Actions Trusted Publishing of npm 0.4.0 caused by that tag.

Nothing else was pushed or published.

## Exclusions

No e2r-spec push, consumer dependency update, app version bump, GitHub Release
object, deploy, Auto Layout work, sample change, or history rewrite was
performed.
