# Validator 0.7.0 Relative Time 0.2.0 Publication Result 1

- Date: 2026-09-26
- Status: **PUBLISHED / NORMAL PACKAGE CONSUMPTION VERIFIED — BOUNDED READ-ONLY SUPPORT**

## Publication and authority

The Human authorized the E2R-SPEC public `main` sync and the Validator `0.7.0`
release transaction. E2R-SPEC `main` was fast-forwarded from `8e1f3ee` to
`c266b9209744fd6a2a139b9251ae704348c29631`. GitHub resolved the exact
`237fcb6191cc18622a3f692b8f4634b9374ee8f9` commit pinned by the Validator
CI and release workflows. That commit defines the Relative Time `0.2.0`
Draft/Candidate and its schema; `0.1.0` remains a separate exact contract.

Validator `main` was fast-forwarded from `7606f1e` to release commit
`79856e5b5d624500afea3a9182db947c313e3e2a`. Its [main CI run](https://github.com/sukoyaka-dopeness/e2r-validator/actions/runs/36236674881)
passed. The annotated `v0.7.0` tag resolves to that same commit. The
[tag-triggered release workflow](https://github.com/sukoyaka-dopeness/e2r-validator/actions/runs/36236732902)
passed the pinned specification checkout, validation, version and changelog
checks, package inspection, and npm Trusted Publishing. The
[GitHub Release](https://github.com/sukoyaka-dopeness/e2r-validator/releases/tag/v0.7.0)
is published for the same tag.

## Registry and consumer verification

The npm registry reports `@sukoyaka-dopeness/e2r-validator@0.7.0` as `latest`.
Its published tarball has 24 files, shasum
`10a1ee3a387951f8975142a498672f75dfb50e3c`, and integrity matching the
local release candidate and workflow package inspection. A fresh install
using the normal npm registry package path reported CLI version `0.7.0`.

That installed package validated the E2R-SPEC Relative Time `0.1.0`
all-families fixture with zero diagnostics and its existing bounded Derived
evidence. It validated the `0.2.0` all-families fixture with zero diagnostics
and no Derived output. The release CI also passed the complete Validator test
and specification fixture suite, including exact-version and unsupported
version/Feature cases.

The immutable `0.7.0` tarball's bundled README and status document retain
their pre-publication snapshot wording, which calls `0.7.0` unpublished and
`0.6.1` latest. The repository's current README and status document were
updated after publication; those edits do not alter the published tarball.
Registry metadata, the release workflow, and this result establish the actual
publication status. Correcting the bundled wording would require a separate
new package version, not a rewrite of `0.7.0`.

## Bounded handoff

Validator support remains read-only. `0.2.0` is a Draft/Candidate, not Stable.
The package does not evaluate assertion truth, compare against History,
generate Derived conclusions for `0.2.0`, solve conflicts, migrate Datasets,
or write temporal data. Unsupported exact versions do not fall back to a
known contract. No NarrativeLine dependency, source, UI, version, or Dataset
was changed. The Human-selected first consumer scope A can now use this
normally consumable package in a separate implementation checkpoint.
