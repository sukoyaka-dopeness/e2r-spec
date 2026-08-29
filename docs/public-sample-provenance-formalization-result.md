# Public Sample Provenance Formalization Result

- Date: 2026-08-30
- Status: `S3 COMPLETE — PUBLIC SAMPLE REDISTRIBUTION FORMALIZED`
- Scope: e2r-spec role-based licensing application and ten public sample Dataset
  provenance records
- S2 authority: `research/standards-licensing/decisions/e2r-standards-license-decision.md`
- S3-B authority: `docs/public-sample-semantics-provenance-decision.md`

## Repository licensing application

Before this checkpoint e2r-spec had no root license file and README stated that
license information would be added before first public release. After this
checkpoint, `LICENSE.md` is the root role map and README points to it. The map
applies:

- project-authored specification/documentation prose → CC BY 4.0;
- standalone schemas and code-like specification artifacts → MIT;
- eligible project-created example/research Dataset JSON → CC0 1.0;
- third-party/imported material → original/source-specific terms.

Official license-text sources are linked from `LICENSE.md`: Creative Commons
CC BY 4.0 legal code, Creative Commons CC0 1.0 legal code, and the SPDX MIT
license text. Full legal text was not rewritten or paraphrased into a custom
license. Application and Validator software repositories remain outside this
S3 scope.

## Sample provenance and reclassification

`docs/public-sample-provenance.md` records canonical EN/JA paths, content class,
Git introduction history, project authorship/adoption, factual references,
translation status, bounded verbatim audit, and caveats for every sample.

| Pair | Result |
|---|---|
| Berlin Wall EN/JA | REDIST-A — project-authored historical Dataset; external factual material remains excluded from CC0 claim |
| Apollo 11 EN/JA | REDIST-A — project-authored Dataset with NASA reference basis and canonical sample documentation |
| Lighthouse EN/JA | REDIST-A — project-created fictional demo |
| Ashen Crown EN/JA | REDIST-A — project-created fictional Dataset |
| Titanic EN/JA | REDIST-A — project-authored historical Dataset with recorded reference basis |

All ten Dataset files are therefore `REDIST-A — READY UNDER CURRENT PROJECT
AUTHORITY` for the next bounded sample-refresh implementation. This is internal
release-readiness evidence, not a legal warranty. Formal steward confirmation,
attribution/source handling, and final public release review remain ordinary
release gates. No obvious long verbatim third-party prose was found in the
bounded audit; the review was not a comprehensive rights investigation.

## JA translation and metadata boundary

The EN/JA pairs have matching structural identities where intended. Git history
shows project adoption and, for Apollo, a Japanese relation-label correction;
the original method of every translation is not recoverable. This is recorded
explicitly rather than treated as evidence of external ownership or of a legal
conclusion. Dataset `metadata.license` remains absent because Metadata 1.1.0 is
still a candidate and mixed/source-limited content must not be given an
untruthful Dataset-wide declaration.

## Validator and scope impact

The ten current Dataset files were revalidated through the accepted production
Validator CLI: all returned `valid=true`, exit 0, no errors, warnings, unknown
Extension warnings, or orphan Presentation warnings. Sample JSON content was
not changed. Schema impact: none. Runtime impact: none.

This checkpoint does not add Presentation payloads. The already decided next
sample refresh may add the exact Lighthouse EN/JA payload only after the normal
release review:

```json
"relations": {
  "clara-lighthouse": { "arrowDisplay": "reverse" },
  "clara-thomas-supervises": { "lineStyle": "dashed" }
}
```

No Relation, endpoint, topology, or Core meaning is changed by this result.

## Public Sample Refresh status

S3 formalization is complete and the ten samples are REDIST-A. Public Sample
JSON implementation is UNBLOCKED. Presentation payload implementation is still
NOT STARTED. Hub, NarrativeLine, LiaisonScape, Validator, roadmap, schemas,
package metadata, and software-repository licenses are unchanged. Public
Sample Refresh, cross-app audit, version decision, release, push, and deploy
were not started.
