# E2R Initial Public Release Closure Audit

Date: 2026-09-22

Classification: **INITIAL PUBLIC RELEASE FORMALLY CLOSED / CURRENT PUBLIC AUTHORITIES VERIFIED**

## Public authority and deployment result

The live application revisions and pre-sync e2r-spec authority matched the
accepted authorities at finalization. This documentation-only transaction
publishes the closure record on top of that e2r-spec base:

| Repository | Public `main` |
| --- | --- |
| e2r-spec | `63dd40245bf97d98945826ffab9a23b2b77e3ec6` pre-sync base |
| e2r-validator | `7606f1e4acf886d012af44b2c5e35bad5b5e20a8` |
| NarrativeLine | `db49ceff2aa38398d716001d9e1bca35bb46732f` |
| LiaisonScape | `b5c0781d8467f015141e5564ec249b9785961f45` |
| Hub | `71ae8ab8c3255d91c89dd68ce788540dc13bba89` |

The latest Pages runs for all three applications succeeded. Public Hub,
NarrativeLine, and LiaisonScape smoke checks succeeded, including EN/JA Home
surfaces and representative Dataset handoffs. Lighthouse loaded without the
historical `specification_version_unsupported` warning. Validator `0.6.1` was
published through the existing tag-controlled Trusted Publishing workflow.

## Interoperability evidence

All ten ordinary EN/JA sample endpoints returned HTTP 200 and contained H2
History assertions with no legacy H1 `history.time` values. The Self-Description
endpoint returned HTTP 200 and validated as `stable-profile-supported` with only
the accepted non-fatal `specification_unavailable` diagnostic for its Lineage
Draft declaration.

Validator 0.6.1 validation of the public sample endpoints returned valid results
for all ordinary samples and the accepted Self-Description warning boundary.
The release workflow passed 123 tests plus 3 fixture tests, and the published
tag `v0.6.1`, public `main`, and npm `latest` `0.6.1` are reachable.

## Rights / provenance reassessment

The previous rights/provenance blocker is cleared. Human-approved authority
already covers the five ordinary public sample families and the separate public
Self-Description dogfood/technical entry. The current provenance authority
records the creation-provenance statement, the `REDIST-A — READY UNDER CURRENT
PROJECT AUTHORITY` classification, the EN/JA scope, and the boundary that
external facts and third-party material are excluded from the E2R CC0 claim.

The records also explicitly preserve unrecoverable authoring/localization
details as unknown rather than inventing them. That accepted limitation is not
itself a release blocker. The public files and provenance authority match the
approved five-family plus Self-Description exposure, and no new third-party
rights or redistribution issue was found in this reassessment.

## Release-hygiene closure

The previously identified Validator hygiene issue is resolved by the public
`0.6.1` release:

- repository `LICENSE` artifact is MIT;
- package metadata declares `license: "MIT"`;
- README and MVP status reflect published `0.6.0` and public `0.6.1` accurately;
- package version and lockfile are `0.6.1`;
- runtime, API, CLI, diagnostics, fixtures, and validation semantics are
  unchanged from `0.6.0`;
- the release workflow passed `123/123` unit tests and `3/3` fixture tests.

The current-status roadmap was synchronized in this bounded documentary
follow-up. Historical checkpoint records remain historical and were not
rewritten as part of this closure.

## Formal closure

No release blocker was found within the accepted Initial Public Release scope.
The following remain explicit non-blockers or separate future work:

- Self-Description Lineage `0.1.0` remains Draft / Experimental;
- `specification_unavailable` remains an accepted non-fatal warning;
- deferred History 2 surfaces and broader authoring remain deferred;
- future visual-quality, solver-quality, and product follow-ups remain separate;
- GitHub Release object creation is not required for this closure;
- consumer applications may remain on Validator `0.6.0` because `0.6.1` is
  release-hygiene-only.

This document records the formal closure of the E2R Initial Public Release
under the accepted authority, rights/provenance, application, sample, and
release-hygiene boundaries. It does not authorize new runtime work, schema
changes, deferred-scope promotion, or unrelated release activity.
