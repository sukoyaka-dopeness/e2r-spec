# Relative Time 0.2.0 Validator Exact-Version Support Result 1

- Date: 2026-09-26
- Status: **LOCAL READ-ONLY EXACT-VERSION SUPPORT IMPLEMENTED; CANDIDATE / NOT A RELEASE**

## Result

The `e2r-validator` source now recognizes Relative Time Extension
`draft.github.sukoyaka-dopeness.relative-time` at exact versions `0.1.0` and
`0.2.0` as separate contracts. The support is recorded in Validator commit
[`0d81cec`](https://github.com/sukoyaka-dopeness/e2r-validator/commit/0d81cec9cc4acdb9083d9c2cc1442735db88fcda).
The `0.2.0` contract is the Candidate defined by the
[0.2.0 Draft](../../extensions/relative-time-0.2.0-draft.md) and
[companion schema](../../schemas/extensions/relative-time-0.2.0.schema.json);
the [atomic Recorded semantics adoption](../temporal/relative-time-atomic-recorded-assertion-semantics-adoption1.md)
remains the authority for the adopted meanings and limits.

For a supported exact `0.2.0` declaration, Validator checks the version's
Feature set and use, payload variants and known values, Relation-only
placement, and Core endpoint integrity. It does not determine assertion
truth, evaluate endpoints, compare assertions with History, run conflict or
closure rules, or produce Derived conclusions. The existing non-evaluative
warning for an unsupported Calendar identifier remains. Unsupported exact
versions and unsupported declared Features do not activate payload rules or
fall back to another Relative Time version.

Relative Time `0.1.0` retains its existing contract and bounded read-only
diagnostics, including its Derived evidence. No `0.1.0` Draft, schema, or
interpretation was changed. Dataset data is not migrated or written, and no
Relations or History assertions are created, changed, or removed.

## Verification and scope

Validator `npm run validate` passed: lint, all 131 unit tests, and all 3
fixture-validation tests. The fixture suite also validates the E2R-SPEC
Relative Time `0.2.0` valid example. The support is a local Validator source
checkpoint only; it does not change the Validator package version, establish
published package support, promote the Relative Time Candidate to Stable, or
authorize application support, Dataset migration, release, or publication.

## Normal package release preparation

Validator commit [`79856e5`](https://github.com/sukoyaka-dopeness/e2r-validator/commit/79856e5)
prepares the normal package candidate as `@sukoyaka-dopeness/e2r-validator`
`0.7.0`. The current release policy assigns a compatible new validation
capability to a MINOR release; the npm registry reported `0.6.1` as latest,
so `0.7.0` is the next policy-conforming package version. Local package,
fixture, and clean-install checks passed. This remains an unpublished local
candidate, not application support or a Relative Time Stable promotion.

CI and release workflows pin the E2R-SPEC input to commit
`237fcb6191cc18622a3f692b8f4634b9374ee8f9`, which contains the exact Draft,
schema, and fixture. At preparation time that commit was not present in the
local `origin/main` tracking ref, and remote reachability could not be
verified. It must be fetchable by the release workflow before the package can
be normally consumed. Public repository updates, tag creation, GitHub Release,
and npm publication remain unauthorized and unperformed. NarrativeLine
remains unchanged and can begin its separately authorized read-only support
slice only after a normal package release is available.
