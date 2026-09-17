# E2R Workspace Shared Test Infrastructure Audit 1

Date: 2026-09-17
Checkpoint: `E2R-WORKSPACE-SHARED-TEST-INFRASTRUCTURE-AUDIT1`

## Classification

**A. SHARED DOM INFRASTRUCTURE ACTIVE / RETIRED SNAPSHOT NOT CANONICAL**

The two primary paths have different roles. The Git-managed
`e2r-dom-test-environment` repository is active shared test infrastructure.
The unmanaged `e2r-test-utils` directory is a retired historical packaging
snapshot and is not an active alternative. No archive or deletion was
performed.

## Repository audit

### `e2r-dom-test-environment`

| Field | Current evidence |
| --- | --- |
| Path | `C:\Users\extra\E2R\e2r-dom-test-environment` |
| HEAD | `8fb7693eaf8ab89c5fe6ce93134734b39fd8bbf6` |
| Branch/remote | `main`, aligned with `origin/main` |
| Package | `@sukoyaka-dopeness/e2r-dom-test-environment@0.1.0` |
| Git status | clean at audit time |
| Purpose | framework-neutral JSDOM, global installation, and cleanup lifecycle |
| API | `createDomTestEnvironment`, `installGlobal`, `addCleanup`, `cleanup` |
| Scripts | `build`, `test`, `check` |
| Tests | 2 package tests |

The package owns JSDOM creation, the default DOM globals, descriptor-preserving
global installation/restoration, asynchronous LIFO cleanup, idempotent cleanup,
window close, and cleanup-error aggregation. It does not own React, Vite,
fixtures, selectors, providers, Dataset semantics, or Product assertions.

The current source is reusable and has unique executable value. Its consumers
retain application-specific adapters for default URLs and other app-owned
globals. Vite middleware transport and server lifecycle remain outside this
package.

`package.json` is public-package-shaped (`private` absent, `publishConfig.access`
`public`, MIT, typed ESM), while the local README still contains pre-release /
not-yet-published wording. Consumer lockfiles and `npm ls` resolve the exact
`0.1.0` package from the npm registry. This wording discrepancy is a separate
package publication/readiness concern; it is not evidence for retirement and
this audit did not publish or change package metadata.

### `e2r-test-utils`

| Field | Current evidence |
| --- | --- |
| Path | `C:\Users\extra\E2R\e2r-test-utils` |
| Git state | no `.git`; not a repository |
| Package | same package name, private `0.0.0-h12.0` snapshot |
| Current contents | retired README, metadata, lockfile, and TypeScript configuration |
| Active consumer | none found |
| Unique executable value | none identified in the current metadata-only snapshot |

The retained README explicitly identifies this directory as a historical
packaging snapshot and directs new development to the `0.1.0` shared package.
Prior role-audit evidence records that the old implementation matched the
canonical package and contained no newer behavior. The directory is therefore
an **archive/delete candidate after a separately authorized cleanup decision**,
not a current infrastructure repository. It remains untouched.

## Workspace-wide usage

The active direct consumers are:

- `e2r-liaison-scape`: exact `0.1.0` devDependency and a thin test adapter
  preserving the LiaisonScape test URL;
- `e2r-narrative-line`: exact `0.1.0` devDependency and a thin test adapter
  preserving the NarrativeLine URL and installing
  `IS_REACT_ACT_ENVIRONMENT`.

Both package-lock files resolve the registry package and neither app retains a
direct `jsdom` dependency. No active import or dependency was found in
`e2r-spec`, `e2r-validator`, or `e2r-ai-knowledge`. Historical detached
experiment directories contain copies of the LiaisonScape consumer pattern,
but they are not current workspace product consumers.

`e2r-hub` is an active app but is not a shared-package consumer. Its test
helper still contains a local implementation of the same generic JSDOM/global
cleanup pattern and supplies the Hub default URL. No unique generic lifecycle
behavior was identified, but the Hub URL and any Hub-specific globals would
need to remain in a thin adapter if a later migration is authorized. This is a
future migration candidate, not a reason to delete or modify the shared
package or Hub in this audit.

## Comparison with current test architecture

The current ownership split is:

```text
shared package
  -> JSDOM / globals / descriptor restoration / cleanup

application adapter
  -> default URL and application-specific globals

application test
  -> Vite middleware, React root, server cleanup, fixtures, selectors,
     Product assertions, and semantic lifecycle
```

This matches the accepted Knowledge decision
`decisions/reusable-ui-integration-harness-ownership-boundary.md`. It also
explains a current observation: NarrativeLine's full test run passed but still
emitted Vite middleware `24678` port-in-use warnings. Those warnings belong to
the app-local Vite test-server setup, not to the shared DOM package cleanup
contract. LiaisonScape's separate test-only `server.ws: false` fix remains
app-owned and is not a shared-package change.

No evidence supports moving Vite, Product fixtures, Dataset helpers, or
application assertions into the shared package. No evidence supports creating
a second shared utility from `e2r-test-utils`.

## Validation evidence

Shared package:

- `npm test`: build succeeded; **2/2 PASS**, exit code 0, natural termination;
- `npm run check`: build and nested tests passed, but the final `npm pack
  --dry-run` step returned exit code 1 because npm could not write its default
  cache log directory in this environment;
- rerun `npm pack --dry-run --cache <temporary cache>`: PASS; the expected
  five-file package contents were listed.

Consumers and active references:

- LiaisonScape current baseline evidence: `636/636 PASS`, lint/build PASS;
- NarrativeLine current test run: **222/222 PASS**, exit code 0, natural
  termination; repeated Vite `24678` warnings were observed but did not cause
  assertion failure or a hang;
- Hub current test run: **1/1 PASS**, exit code 0, natural termination;
- `npm ls` in LiaisonScape and NarrativeLine: exact shared package `0.1.0`;
- workspace search: no active `e2r-test-utils` import, dependency, or
  `file:`/`link:` consumer.

No package source, application source, test helper, or dependency was changed
by this audit.

## Disposition and required future work

| Area | Disposition | Boundary |
| --- | --- | --- |
| `e2r-dom-test-environment` | **KEEP ACTIVE / KEEP AS SHARED INFRASTRUCTURE** | retain framework-neutral DOM lifecycle only |
| LiaisonScape adapter | **KEEP ACTIVE** | preserve app URL; keep Vite/Product ownership local |
| NarrativeLine adapter | **KEEP ACTIVE** | preserve app URL and React-act global; keep app semantics local |
| Hub local helper | **KEEP BUT MIGRATION CANDIDATE** | migrate only in a separately scoped checkpoint with focused/full validation |
| `e2r-test-utils` | **DORMANT / ARCHIVE-DELETE CANDIDATE** | explicit cleanup authorization and final provenance check required |
| package publication wording | **SEPARATE READINESS ITEM** | reconcile README/package release evidence before any publication action |

Before any `e2r-test-utils` deletion, confirm that its historical role is fully
covered by the existing E2R-SPEC result documents and that no new local evidence
has appeared. Do not use reset, clean, delete, move, or archive operations as
part of this audit.

## Knowledge integration

No new Knowledge entry was created. The existing accepted
`reusable-ui-integration-harness-ownership-boundary` decision already states
the reusable lesson confirmed here: centralize generic DOM/global cleanup while
keeping Vite lifecycle, fixtures, providers, selectors, and assertions
application-owned. The existing `e2r-test-utils` retirement and distribution
records remain the canonical historical evidence. This result document records
the current repository-specific usage and does not replace those sources.

## Safety result

No repository was deleted, archived, moved, or modified. No package was
published. No application behavior, Dataset semantics, UI, Vite production
configuration, or test assertion was changed. Push, deploy, release, and
publication were not performed.
