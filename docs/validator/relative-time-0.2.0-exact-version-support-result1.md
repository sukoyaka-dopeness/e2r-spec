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
