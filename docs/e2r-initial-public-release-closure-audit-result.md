# E2R Initial Public Release Closure Audit

Date: 2026-09-22

Classification: **INITIAL PUBLIC RELEASE RIGHTS/PROVENANCE BLOCKER CLEARED / REMAINING BOUNDED RELEASE-HYGIENE WORK CONFIRMED**

## Public authority and deployment result

The live public revisions matched the accepted authorities at audit time:

| Repository | Public `main` |
| --- | --- |
| e2r-spec | `63dd40245bf97d98945826ffab9a23b2b77e3ec6` |
| e2r-validator | `945f711e19f1c54566d87806b4d4716420e09b60` |
| NarrativeLine | `db49ceff2aa38398d716001d9e1bca35bb46732f` |
| LiaisonScape | `b5c0781d8467f015141e5564ec249b9785961f45` |
| Hub | `71ae8ab8c3255d91c89dd68ce788540dc13bba89` |

The latest Pages runs for all three applications succeeded. Public Hub,
NarrativeLine, and LiaisonScape smoke checks succeeded, including EN/JA Home
surfaces and representative Dataset handoffs. Lighthouse loaded without the
historical `specification_version_unsupported` warning.

## Interoperability evidence

All ten ordinary EN/JA sample endpoints returned HTTP 200 and contained H2
History assertions with no legacy H1 `history.time` values. The Self-Description
endpoint returned HTTP 200 and validated as `stable-profile-supported` with only
the accepted non-fatal `specification_unavailable` diagnostic for its Lineage
Draft declaration.

Validator 0.6.0 validation of the public sample endpoints returned valid results
for all ordinary samples and the accepted Self-Description warning boundary.
The local 0.6.0 suite passed 123 tests plus 3 fixture tests. The published tag
`v0.6.0`, public `main`, and npm `latest` `0.6.0` were reachable.

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

## Remaining bounded release-hygiene blockers

1. Public Validator 0.6.0 release-facing metadata is inconsistent with the
   accepted release state: its published README still says that 0.5.0 is the
   latest published package, while npm reports `latest = 0.6.0`. The public
   Validator repository/package also has no MIT license artifact or package
   license metadata, while the accepted software boundary identifies Validator
   software as MIT. A bounded corrective package/documentation transaction is
   required; its exact version/publication sequence remains a Human decision.

2. The e2r-spec current-status roadmap entry still says exact release and
   public-write gates remain, although the accepted public revisions and writes
   now exist. Historical checkpoint documents remain historical, but the
   current-status entry needs a separate documentary synchronization before
   formal closure.

These are release-governance and publication-hygiene issues, not runtime or
History 2 design failures. GitHub Release absence and existing CI Node/runner
annotations remain non-blocking under the accepted boundary.

## Next Human decisions

- decide the bounded Validator 0.6.0 metadata/license correction and any
  required corrective package release;
- authorize a current-status documentation synchronization; and
- only then decide formal Initial Public Release closure.

No push, deploy, tag, package publication, sample change, or closure declaration
was performed by this audit.
