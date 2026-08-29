# Public Sample Provenance Record

Date: 2026-08-30
Status: **S3 formalization record — project release-readiness evidence**

This record documents repository evidence; it is not legal advice or a
guarantee of rights. Eligible project-created Dataset JSON is intended for the
CC0 1.0 bucket under `LICENSE.md`. External facts are references used to author
the Dataset, not automatically transferred or relicensed by this repository.

## Method and common boundary

Canonical paths, Git history, README/sample documentation, and current Dataset
content were inspected. The sample pairs were introduced and maintained by the
`sukoyaka-dopeness` project history. No obvious long verbatim third-party prose
was identified in this bounded review; this is not a comprehensive plagiarism
or rights investigation. Where an exact original translation method is not
recoverable, the record says so rather than inferring whether AI assistance was
used.

The Dataset-level `metadata.license` candidate is intentionally not added.
Repository licensing and this provenance record are the current formalization
boundary. Software repository licensing is separate.

## Sample ledger

| Pair | EN canonical | JA canonical | Class | History / authorship evidence | External basis | JA status | Verbatim audit | Bucket |
|---|---|---|---|---|---|---|---|---|
| Berlin Wall | `e2r-narrative-line/src/sample/berlin-wall-history.en.e2r.json` | `e2r-narrative-line/src/sample/berlin-wall-history.ja.e2r.json` | factual project-authored Dataset | NarrativeLine sample files are maintained in project history | Berlin Wall chronology and events; source bibliography still bounded | PROJECT-ADOPTED TRANSLATION — ORIGINAL AUTHORING METHOD NOT RECOVERABLE | no obvious long match found | CC0 candidate, source terms remain excluded |
| Apollo 11 | `e2r-spec/examples/apollo-11-mission.en.e2r.json` | `e2r-spec/examples/apollo-11-mission.ja.e2r.json` | factual project-authored Dataset | introduced in `e9610e0`; later graph/coordinate refinements; JA correction in `33e741b` | NASA mission chronology and UTC event basis; see `docs/apollo-11-canonical-sample.md` | project-adopted Japanese localization; exact method not recoverable | no obvious long match found | CC0 candidate, factual sources not relicensed |
| Lighthouse | `e2r-spec/examples/lighthouse-restoration-demo.en.e2r.json` | `e2r-spec/examples/lighthouse-restoration-demo.ja.e2r.json` | project-created fictional demo | canonical sample moved to e2r-spec; LiaisonScape `public/` remains the deployment/compatibility mirror | no external story dependency known | project-created/adopted localization; exact method not recoverable | no obvious long match found | CC0 candidate after project authority |
| Ashen Crown | `e2r-spec/examples/ashen-crown.en.e2r.json` | `e2r-spec/examples/ashen-crown.ja.e2r.json` | project-created fictional Dataset | introduced in `e9ed7dd`; later graph readability refinements | no external story dependency known | project-created/adopted localization; exact method not recoverable | no obvious long match found | CC0 candidate after project authority |
| Titanic | `e2r-spec/examples/titanic-final-voyage.en.e2r.json` | `e2r-spec/examples/titanic-final-voyage.ja.e2r.json` | factual project-authored Dataset | introduced in `7d8b11c` | Titanic voyage facts; dedicated source bibliography still needed | PROJECT-ADOPTED TRANSLATION — ORIGINAL AUTHORING METHOD NOT RECOVERABLE | no obvious long match found | CC0 candidate, factual sources not relicensed |

## Pair-specific evidence

### Berlin Wall EN/JA

The pair is a project-authored historical event dataset with matching IDs,
topology, counts, and Specification/Metadata structure. Local Git confirms the
files live in NarrativeLine's sample directory. The factual event basis and
Japanese translation adoption are recorded here, but a dedicated bibliography
and named translation author are not recoverable from current history. It is
therefore eligible in role, but its CC0 application excludes any external
material and requires the project to confirm authority before publication.

Reference authorities for the bounded factual basis are the [German Historical
Museum Berlin Wall chronology](https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-modernisierung/volksaufstand-und-mauerbau/mauerbau.html)
and the [Berlin Wall Memorial chronology](https://www.berliner-mauer-gedenkstaette.de/en/berlin-wall-history-553.html).

### Apollo 11 EN/JA

The canonical sample document records the intended Apollo chronology, UTC time
values, object structure, and Coordinate parity. Git history shows the initial
pair and subsequent project-authored graph/coordinate refinements; the Japanese
pair also has a specific relation-label correction. The project authored the
Dataset descriptions and localization as a structured sample. NASA is the
appropriate factual reference authority for mission facts; this record does not
relicense NASA material. The pair is structurally ready under the repository
bucket after source/authority review.

The factual reference set includes NASA's [Apollo 11 mission overview](https://www.nasa.gov/mission/apollo-11/)
and [Apollo 11 mission report archive](https://www.nasa.gov/history/apollo-11-mission-report/).

### Lighthouse Restoration EN/JA

The sample is explicitly fictional and project-created. The canonical EN/JA
files are now in e2r-spec `examples/`; LiaisonScape `public/` remains a
deployment/compatibility mirror. Existing Relations and the two bounded
semantic additions are authored graph content; no external story dependency
was found. The EN/JA files share the same topology and Coordinate structure.
The project has authority to adopt the pair as its demo content, subject to the
normal S3 release record and translation confirmation.

### Ashen Crown EN/JA

Git history identifies the English fantasy sample as a project example and
subsequent readability work. The Japanese pair has matching structure and is a
project-adopted localization. No external story or copied prose dependency was
identified in this bounded audit. It is eligible project-created data, subject
to confirmation of project release authority.

### Titanic EN/JA

The pair is a project-authored historical voyage Dataset with matching IDs,
topology, and Coordinate structure. The facts concern Titanic's final voyage;
the current repository has no dedicated factual-source bibliography for this
sample. The project-authored descriptions and Japanese localization are not
treated as external source text, but a source record and authority confirmation
remain required before public publication.

Reference authorities for the bounded voyage basis include the [Smithsonian
Titanic collection](https://americanhistory.si.edu/collections/object-groups/titanic)
and the [Encyclopaedia Britannica Titanic overview](https://www.britannica.com/topic/Titanic).

## Redistribution readiness

The role-based license map and this provenance ledger move each pair from
`REDIST-B` to **REDIST-A — READY UNDER CURRENT PROJECT AUTHORITY** for the
bounded purpose of private/public-sample refresh implementation. This does not
complete the separate public release gate: factual citations, translation
review, and final steward confirmation must accompany a release candidate.

S3 is complete for e2r-spec's repository-level standards/data application:
the category map is in `LICENSE.md`, README is synchronized, canonical official
license texts are linked, provenance is recorded, and no third-party material
was intentionally relicensed. Formal legal review or software-repository MIT
application remains outside this checkpoint.
