# LiaisonScape Application Version Decision

Date: 2026-08-30

Status: `DECIDED — LIAISONSCAPE NEXT APPLICATION RELEASE VERSION 0.2.0`

## Current version and selected next version

The local LiaisonScape application is currently `0.1.0` and
`package.json` declares `private: true`. The selected next application release
version is **`0.2.0`**. This is a release identity decision only; no version
bump is performed here.

## Trigger and authority

The trigger is the accumulated accepted feature and quality set since the
current `0.1.0` baseline. Authority is the live local LiaisonScape source,
accepted commits/results, and the E2R-SPEC roadmap. Public GitHub is
corroborating only and may lag local work; the available read-only public fetch
of package metadata/releases returned a cache miss.

## Release-relevant accepted changes

The candidate release contains multiple material user-visible capabilities:
Relation arrow and line-style Presentation support with preservation, direct
Entity/Relation authoring and deletion workflows, Dataset Replacement Safety
and Handoff behavior, automatic initial Entity placement, explicit Auto Layout
integration, route/label and self-loop interaction improvements, localization
and Credits parity, viewport toolbar accessibility correction, and associated
round-trip and integration quality work. Shared DOM test-environment migration
is supporting infrastructure, not the versioning basis by itself.

## Candidate comparison

### Why not 0.1.1

`0.1.1` would describe a patch-level maintenance continuation, but the accepted
scope includes several substantive user-visible capabilities and behavior
improvements. It would understate the release magnitude.

### Why 0.2.0

`0.2.0` accurately represents a meaningful minor pre-1.0 application release.
The changes are additive or backward-oriented at the application boundary,
and existing E2R Dataset/Core semantics remain compatible. The application is
still evolving, so a minor pre-1.0 identity is appropriate.

### Why not 1.0.0

The number of commits is not a stability criterion. The product still has
deferred release integration, synchronization, acceptance, and future
workstreams; this checkpoint does not establish a stable 1.0 public contract.
`1.0.0` would be an intentional maturity declaration that is not yet
justified.

## Compatibility and version boundaries

No Core Dataset semantics were intentionally broken and no accepted public
application contract was removed. Presentation and Coordinate changes remain
additive/compatible within their accepted boundaries.

Application version `0.2.0` is independent from Coordinate Extension
`draft.github.sukoyaka-dopeness.coordinate` `0.1.0`, Presentation Extension
`draft.github.sukoyaka-dopeness.liaisonscape-presentation` `0.1.0`, and
Validator `@sukoyaka-dopeness/e2r-validator@0.4.0`. None of those versions is
bumped by this decision.

Because LiaisonScape is `private: true`, this version is not an npm package
publication contract. It identifies the application release, later Git tag and
GitHub Release, deployment traceability, and any aligned Credits display. The
LiaisonScape application must not be published to npm as a consequence.

## Version bump timing and reopen criteria

Decision now, bump later. Change `package.json` and its lockfile only in a
bounded release-preparation checkpoint immediately before tag/release
preparation or the final public release candidate, after intended content and
public/local synchronization are confirmed. Do not claim `0.2.0` in metadata
prematurely.

Reopen this decision only if a major breaking public behavior is introduced,
the release scope is fundamentally changed, the work is split into multiple
public releases, or the product intentionally declares `1.0.0` stability.
Compatible additions within the same pre-1.0 release do not automatically
invalidate the `0.2.0` target.

## Codex assessment

### Agree

Yes. The accepted feature set justifies a new minor pre-1.0 application
release. It is materially more than patch maintenance while retaining Dataset
compatibility.

### Concern

`0.2.0` may be premature if final cross-application and public release
readiness exposes an intentionally separate release scope. That is why the
metadata bump remains deferred and explicit reopen criteria are recorded.

### Alternative

`0.1.1` better fits a fixes-only release but understates the accepted features.
`1.0.0` would overstate maturity and stability. Neither fits the current
evidence as well as `0.2.0`.

### Recommendation

Use `0.2.0` as the next application release target, then perform a separate
release-preparation audit before changing metadata, tagging, releasing, or
 pushing.

## Status and result

LiaisonScape source and package metadata remain unchanged. No push, tag,
GitHub Release, deploy, npm publish, or Validator/Extension version change was
performed. `ai-knowledge` and the protected dirty file remain untouched.

Result: **DECIDED — LIAISONSCAPE NEXT APPLICATION RELEASE VERSION 0.2.0**

