# E2R Validator 0.4.0 Release Candidate Result

Date: 2026-08-30

## Status

**RELEASE CANDIDATE READY — PUBLISH AUTHORIZATION REQUIRED**

This bounded checkpoint prepares the accepted local Validator as `@sukoyaka-dopeness/e2r-validator@0.4.0`. No publication, tag, push, deployment, or Formal Acceptance was started.

## Trigger and authority

The preceding consumer-integration checkpoint identified the installed public Validator `0.2.0` as the LiaisonScape warning blocker. The accepted package/consumer decision selects Validator `0.4.0`, future consumer ranges `^0.4.0`, publish-first sequencing, and temporary `npm pack` consumer smoke.

Public GitHub baseline was Validator `0.3.0`; its public specification validator lacked local Presentation support and its public Presentation validator was absent. npm contained versions `0.1.0`, `0.1.2`, `0.1.3`, `0.2.0`, and `0.3.0`, with `latest` at `0.3.0`; no `0.4.0` collision existed. GitHub releases had none.

Accepted source revision before preparation: `231ab2f fix: align Presentation specification support`.

## Release delta and SemVer

The delta is feature-like: read-only Presentation Draft 0.1.0 validation, known arrow and line-style tokens, orphan Relation-ID warnings, and exact local Specification support. Unknown fields/tokens remain forward-compatible; unsupported versions are not interpreted and input is not mutated. This is classified as minor release `0.4.0`.

Only `package.json`, `package-lock.json`, `CHANGELOG.md`, and `README.md` were changed. The public API remains `validateDataset(value)` with the existing result shape; LiaisonScape and NarrativeLine import that API unchanged.

## Verification

- Validator: `npm ci`, `npm run validate` — 106 tests and 3 fixture tests passed; lint passed.
- `npm pack --dry-run`: 19 files, including `src/presentation-validator.js`; no tests, fixtures, or credentials.
- Artifact: `sukoyaka-dopeness-e2r-validator-0.4.0.tgz`; SHA-256 `0645D10C12E5B2651A371A3DF8635158550144214276018A7064B548E1051391`; npm shasum `c8af4002cc090ff79b300a01188ed9f6e5a82d81`.
- Fresh temporary consumer installed the tgz at exact `0.4.0`; canonical Lighthouse English/Japanese library validation returned `valid: true` with no diagnostics, and CLI `--version` returned `e2r-validator 0.4.0`.
- Temporary LiaisonScape installed exact `0.4.0`; 269 tests, lint, and build passed. Real browser smoke loaded the sample graph with 10 entities and 14 visible relations, including the Lighthouse sample, with no `unknown_extension`, `specification_unavailable`, or `extension_version_unspecified` warning.
- Temporary NarrativeLine installed exact `0.4.0`; 222 tests, lint, and build passed; canonical package validation was warning-free. Its browser smoke was not required for this checkpoint.

The `npm ls` range warning in temporary consumers reflects their intentionally unchanged old dependency declarations (`^0.2.0` and `^0.3.0`), not the installed package. Real consumer repositories and their dependency files were unchanged.

## Boundary and next step

Validator commit: `07f476e chore: prepare Validator 0.4.0` (local, unpushed). This result document is the only e2r-spec change for this checkpoint. Consumer dependency updates, publication workflow, tag creation, Trusted Publishing, Public Sample Formal Acceptance, push, and deployment remain pending and require explicit authorization.
