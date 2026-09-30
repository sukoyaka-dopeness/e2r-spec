# E2R Session 0095 — NarrativeLine 0.2.0 bounded public gate

Date: 2026-09-30
Status: CI PARITY GREEN; PUBLIC WRITE PENDING

This session starts the release transaction gate after prior NarrativeLine
acceptance and readiness audits. The Human selected a bounded E2R-SPEC public
revision instead of publishing the local `main` history with unrelated work.
The current [Roadmap](../docs/roadmap.md) and [transaction gate](../docs/narrativeline/narrativeline-0.2.0-bounded-public-transaction-gate.md)
own the present status. This session does not alter Session 0094 or authorize
push, deployment, tagging, or publication.

The old Pages failure and the current test fixture ownership mismatch were
resolved by making NarrativeLine's test inputs application-owned. Full CI
topology at NarrativeLine `804bb17` plus the workflow-pinned E2R-SPEC
`d14e345` passed 348 tests, lint, and build. The final local NarrativeLine
candidate is `d5fe2cc`; that exact SHA was rerun in the same topology and also
passed. Public Cedar fetch, deployed
revision, live Handoff, actual-date Credits commit, and public-write approval
remain separate release gates.

The production-only npm advisory scan returned zero vulnerabilities. The full
install-tree scan reports three high transitive development dependencies with
fixes available; this checkpoint did not update dependencies and records the
toolchain finding separately from production dependency risk.

## Follow-up: bounded dependency advisory disposition

On 2026-09-30, the exact candidate lockfile was checked against the reviewed
advisory ranges and its current call paths. `brace-expansion@5.0.8` is used
through ESLint's minimatch path, `nanoid@3.3.16` through PostCSS's fixed
`nanoid(6)` call, and `undici@8.10.0` through jsdom in the development test
environment. The current application does not feed Dataset content to those
vulnerable operations; the NarrativeLine test helper does not enable jsdom
subresources or configure the affected undici cache/deduplication interceptors.
The exact Pages workflow runs fixed repository test/lint/build commands on
`main` pushes or manual dispatch. The three findings are therefore recorded
as high-severity, unpatched development-tool advisories with no demonstrated
production-runtime or current release-pipeline exploit path, not as fixed
packages. Their patched versions and a separate lockfile maintenance follow-up
remain noted in the [current transaction gate](../docs/narrativeline/narrativeline-0.2.0-bounded-public-transaction-gate.md).
The latest local npm advisory-endpoint retry was unavailable; package versions
and paths were verified from the current lockfile and install tree, with
advisory ranges checked against package-maintainer reviewed records. No
dependency changes were made. If release policy requires a clean full-tree
audit, stop before public writes and return for that decision/remediation.
