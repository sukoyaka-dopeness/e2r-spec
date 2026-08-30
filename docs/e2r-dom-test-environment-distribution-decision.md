# E2R DOM Test Environment Distribution Decision

- Date: 2026-08-30
- Status: `DECIDED — NPM PACKAGE DISTRIBUTION WITH RELEASE-BEFORE-CONSUMER-MIGRATION`
- Model used: Current Codex model; assessment: sufficient for the bounded distribution architecture decision.

## Trigger

The LiaisonScape consumer pilot established technical compatibility but left
the permanent distribution and dependency model undecided.

## Prior pilot evidence

The isolated consumer pilot recorded in
[`e2r-dom-test-environment-liaison-scape-consumer-pilot-result.md`](e2r-dom-test-environment-liaison-scape-consumer-pilot-result.md)
passed package build, package tests, tarball creation, consumer lint, and
consumer build. The temporary helper adapter worked and the consumer's direct
`jsdom` declaration could be removed. The remaining nine test failures were
missing e2r-spec fixtures in the isolated clone, not package incompatibility.

## Authority and baseline

The accepted local E2R specification and roadmap remain authoritative. The
public GitHub URLs for LiaisonScape, e2r-spec, e2r-dom-test-environment, and
e2r-test-utils were checked read-only; the live fetch environment returned
cache-miss errors, so public observations are recorded as unverified here.
The local repositories are therefore the operative evidence for this
decision. The local LiaisonScape baseline still declares direct `jsdom` and a
repo-local helper; it does not declare the shared package.

## Canonical package identity

`C:\Users\extra\E2R\e2r-dom-test-environment` is the canonical candidate:

- name: `@sukoyaka-dopeness/e2r-dom-test-environment`
- version: `0.1.0-alpha.0`
- `private`: absent; `publishConfig.access`: `public`
- license: MIT in both `package.json` and `LICENSE`
- exports: typed ESM `dist/index.js` and `dist/index.d.ts`
- packed files: `dist`, `README.md`, `LICENSE`
- runtime code imports `jsdom`; current declaration is `peerDependencies`
- package tests use jsdom 30.0.1 and claim compatibility with 26.1.0 and 30.0.1
- pre-release and not published

The package is license-ready in the narrow file/metadata sense, but a
separate formal release/publication checkpoint is still required.

## e2r-test-utils observation

`e2r-test-utils` is not Git-managed and contains an older snapshot, version
`0.0.0-h12.0`, with a historical `.tgz`. Its package name equals the
canonical package name, but its implementation is not newer and no current
consumer was found. It is therefore an old packaging experiment/snapshot,
not an alternate canonical source. It was not changed.

## Requirements

The permanent model must support a clean public clone, ordinary CI,
external contributors, immutable version identification, useful lockfile
provenance, independent release and rollback, reuse by multiple E2R
consumers, the current multi-repository architecture, and no dependency on a
developer-specific sibling path.

## Candidate distribution models

| Model | Clean clone | CI | Versioning | Contributor | Multi-consumer | Complexity | Role |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DIST-A npm registry | Yes | Yes | Semver + lockfile | Normal npm flow | Strong | Moderate release work | Selected permanent model |
| DIST-B GitHub dependency | Usually | Possible | Tag/commit dependent | Git access/build coupling | Moderate | Moderate | Rejected as primary |
| DIST-C sibling `file:` | No | No, unless workspace is recreated | Path-based | Requires E2R layout | Weak | Low locally, high externally | Local experiment only |
| DIST-D committed `.tgz` | Yes if committed | Yes but awkward | File artifact, manual updates | Provenance/maintenance burden | Weak | High over time | Rejected |
| DIST-E workspace/monorepo | Yes within workspace | Possible | Workspace release tooling | Architecture migration | Strong | Excessive for one utility | Rejected |
| DIST-F repo-local helper | Yes | Yes | No shared version | Normal today | None | Low | Temporary sequencing choice |

## Selected permanent model

Select `DIST-A`: publish the package independently under a clear semver
version, then consume that released version from LiaisonScape and future E2R
repositories. This preserves separate repository ownership, clean clone and
CI behavior, lockfile provenance, rollback, and release independence.

## Selected repository boundary

Keep the DOM environment as a separate repository. Its responsibility is a
framework-neutral DOM/global/cleanup lifecycle utility, distinct from
LiaisonScape application behavior and from E2R Dataset utilities. A monorepo
is not justified by this one shared package.

## Consumer import decision

Select `IMPORT-B`: retain a tiny LiaisonScape repo-local adapter that
re-exports the package. This keeps test imports stable, leaves room for
LiaisonScape-specific test setup, and makes a future package API migration
localized. The adapter must remain thin and must not recreate package logic.

## jsdom ownership

Conceptually, the shared package owns the DOM environment and its jsdom
runtime requirement; LiaisonScape should not retain a direct `jsdom`
declaration if it has no other direct use. Before publication, resolve the
current peerDependency choice explicitly: because the distributed runtime
imports jsdom, the release review must either make jsdom a regular runtime
dependency or document and verify the peer contract for every consumer. This
checkpoint makes no package metadata change.

## Migration sequencing

1. Complete package release-readiness review, including metadata, license,
   jsdom ownership, supported Node/npm versions, and clean-clone checks.
2. Publish the first legitimate package version through an explicitly
   authorized release checkpoint.
3. Install that exact released version in a clean LiaisonScape consumer and
   rerun test, lint, build, and fixture-aware validation.
4. Migrate the real LiaisonScape adapter and remove direct jsdom only if no
   other direct source use exists.
5. Obtain a second-consumer result before broadening the package API.

Until step 2, `DIST-F` remains the operational sequencing choice: the
repo-local helper stays in place.

## Licensing and release prerequisites

The package already contains MIT `LICENSE` and matching package metadata.
Separate release work remains for publication authorization, package
ownership/access, final versioning, jsdom dependency semantics, supported
runtime declaration if adopted, clean-clone/CI evidence, and release notes.

## Rejected alternatives

GitHub dependency distribution does not provide the same ordinary registry
semver and lockfile workflow. Sibling `file:` dependencies require a special
workspace layout. A committed tarball creates artifact and update burden.
A monorepo would expand repository architecture solely for this utility.
Immediate consumer migration before publication would make the dependency
source illegitimate or environment-specific.

## Codex assessment

### Agree

The prior pilot supports package compatibility, separate responsibility, and
the sequencing distinction between choosing npm and publishing immediately.
Keeping the helper until a legitimate package release is evidence-aligned.

### Concern

The package's current peerDependency declaration for a runtime-imported jsdom
is a release and supply-chain clarity risk. It must be settled before the
first consumer migration.

### Alternative

The only credible short-term alternative is to retain the local helper while
finishing package readiness. A GitHub dependency is not a better permanent
model unless registry publication is expressly unavailable.

### Recommendation

Use a separately versioned npm package, preserve the current multi-repository
boundary, keep a thin consumer adapter, and release before real migration.

## Implementation impact

No application, package, helper, lockfile, `e2r-test-utils`, schema, or
roadmap implementation change is authorized by this document.

## Deferred work

Package metadata finalization, jsdom ownership, publication authorization,
first release, exact-version consumer migration, and second-consumer evidence
remain separate checkpoints.

## Push/publish status

No package was published and no consumer migration occurred in this
checkpoint. No push, tag, deploy, or release was performed.

## Roadmap

`docs/roadmap.md` is unchanged. Its existing reusable-utility and separate
publication/release wording already accommodates this decision; changing it
would add synchronization noise without changing roadmap substance.

## Decision

`DECIDED — NPM PACKAGE DISTRIBUTION WITH RELEASE-BEFORE-CONSUMER-MIGRATION`
