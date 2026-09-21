# Public Sample H1 to H2 Migration Inventory / Transaction Preparation

Date: 2026-09-22

Classification: **MIGRATION INVENTORY COMPLETE / FIVE SAMPLE PAIRS MECHANICALLY ELIGIBLE; SELF-DESCRIPTION DECLARATION DECISION REQUIRED**

## Boundary

This checkpoint inventories the current public sample files and prepares a
future H1 to H2 transaction. It does not edit sample JSON, application-owned
copies, mirrors, package dependencies, or public release state.

The adopted contract remains:

- `history@2.0.0` is Candidate overall.
- `history@2.0.0 / position-circa` is the Stable profile.
- `uses` / `features` semantics are unchanged; no Dataset profile claim is
  added.
- Existing exact Civil Time becomes one H2 `position` assertion.
- No unsupported Feature or unsupported `circa` assertion is introduced.

## Ownership and exposure matrix

| Sample family | Current canonical authority | Current mirror / application copy | Hub source boundary | Migration transaction boundary |
|---|---|---|---|---|
| Berlin Wall | NarrativeLine `src/sample/berlin-wall-history.{en,ja}.e2r.json` | No e2r-spec copy identified; NarrativeLine bundles the pair | NarrativeLine raw URLs | NarrativeLine-owned pair; app commit and public revision must move together |
| Apollo 11 | e2r-spec `examples/apollo-11-mission.{en,ja}.e2r.json` | None identified | e2r-spec raw URLs | e2r-spec pair |
| Lighthouse Restoration | e2r-spec `examples/lighthouse-restoration-demo.{en,ja}.e2r.json` | LiaisonScape `public/` pair; current EN/JA blobs are byte-identical to e2r-spec | Existing Hub URLs still point to LiaisonScape mirror | e2r-spec canonical pair and LiaisonScape mirror must be synchronized |
| Ashen Crown | e2r-spec `examples/ashen-crown.{en,ja}.e2r.json` | None identified | e2r-spec raw URLs | e2r-spec pair |
| Titanic | e2r-spec `examples/titanic-final-voyage.{en,ja}.e2r.json` | None identified | e2r-spec raw URLs | e2r-spec pair |
| E2R Self-Description | e2r-spec `examples/e2r-self-description.json` | No Dataset copy identified | Separate dogfood / technical entry boundary | Separate declaration decision before migration |

The Hub contains URLs and Handoff wiring, not independent Dataset JSON copies.
Historical ownership records remain authoritative for provenance; they are not
rewritten by this preparation document.

## Current H1 inventory

All five ordinary families currently declare `history@1.0.0` and use H1
`extensions.history.time` payloads. No ordinary sample contains H2 `assertions`,
`approximation`, bounded-point, temporal-extent, multiple assertions, or
unknown History fields in the inspected payloads.

| Pair | Entities / Events / Relations | History-bearing Events | Civil Time precision | Other temporal fields | EN/JA parity |
|---|---:|---:|---|---|---|
| Berlin Wall | 9 / 15 / 23 | 15 | 12 date, 3 date-time | date-time values use `Europe/Berlin` / `+01:00` | IDs, topology, counts, and History values match |
| Apollo 11 | 9 / 12 / 66 | 12 | 12 date-time | date-time values use `Etc/UTC` / `+00:00` | IDs, topology, counts, and History values match |
| Lighthouse Restoration | 10 / 11 / 28 | 11 | 1 year, 4 year-month, 4 date, 2 date-time | no timezone/offset values identified | IDs, topology, counts, and History values match |
| Ashen Crown | 10 / 12 / 57 | 12 | 12 year | none | IDs, topology, counts, and History values match |
| Titanic | 13 / 18 / 40 | 18 | 2 date, 16 date-time | no timezone/offset values identified | IDs, topology, counts, and History values match |

The ordinary pair comparisons found no History-bearing EN/JA temporal mismatch,
mixed H1/H2 state, or unknown History payload field. Existing localized names,
descriptions, Dataset IDs, Relations, Presentation, and Coordinates are outside
the migration transform and must remain unchanged.

## Expected ordinary migration

For each existing H1 History payload, the bounded conversion is:

```text
extensions.history.time
  -> extensions.history.assertions: [{ id: "time-1", type: "position", position: ... }]
```

`year`, `month`, `day`, `hour`, `minute`, `second`, `timeZone`, and `offset`
remain unchanged. `temporalOrder`, where present, moves to the assertion level.
The exact `history@2.0.0` declaration replaces `history@1.0.0`.

None of the five ordinary families requires a `features` entry because none
uses `approximation`, bounded-point, temporal-extent, or multiple assertions.
The expected post-migration classification is:

```text
history@2.0.0: Candidate
history@2.0.0 / position-circa: Stable profile supported
```

An in-memory conversion of all ten ordinary EN/JA files with local
e2r-validator `0.5.0` produced valid results and the expected
`stable-profile-supported` classification. No file was written.

## Self-Description exception

`examples/e2r-self-description.json` currently has 10 History-bearing Events,
all with H1-shaped `time` values. Seven also carry `temporalOrder`; all have a
Civil Time year/month/day. The Dataset has Metadata and Lineage Draft payloads,
but no central Specification Extension declaration and no current History
declaration.

The payload can be mechanically represented as one H2 `position` assertion per
Event, preserving Civil Time and moving `temporalOrder` to assertion level.
However, making it a declaration-complete H2 Dataset requires deciding how to
restore the central declaration for Metadata, History, and the existing Lineage
Draft. A local trial with those declarations yielded a valid Dataset,
`stable-profile-supported` History classification, and a non-fatal
`specification_unavailable` warning for the Lineage Draft. Choosing that
declaration boundary is a semantic/public-contract decision, not an automatic
sample conversion.

Therefore Self-Description is **not included in an all-sample migration wave**
until Human confirms the declaration treatment and preserves its separate
dogfood/technical, non-normative role.

## Validator and application boundary

The local e2r-validator `0.5.0` classifier is sufficient for local migration
preflight. NarrativeLine currently consumes `0.5.0`. LiaisonScape's current
package lock consumes `0.4.0`; its local validator accepts the transformed H2
shape with an unsupported-version warning but does not provide the new Stable
profile classifier. No package release, dependency update, or application
change is authorized here.

This means local transformation evidence is available, but public application
consumption and Stable-profile reporting require a separate cross-repository
dependency/release decision. It must not be silently folded into sample JSON
migration.

## Publication and rights boundary

The current provenance authority records the five ordinary Gallery families,
the separate Self-Description dogfood entry, the project creation wording, and
the policy target for eligible project-created Dataset content under CC0 1.0.
It also preserves the boundary that external factual material and uncertain
EN/JA translation provenance are not automatically relicensed. Exact public
revisions, final steward/rights confirmation, mirror inclusion, and push/deploy
transactions remain separate Human gates.

No new legal clearance is inferred by this inventory. The Human-approved
publication policy is recorded as policy; it is not an authorization to push,
deploy, publish a package, or change sample content in this checkpoint.

## Recommended next transaction shape

The evidence supports a bounded ordinary-sample migration preparation, but not
one undifferentiated six-sample mutation:

1. e2r-spec-owned Apollo 11, Ashen Crown, and Titanic pairs can be transformed
   after exact-file approval and preflight.
2. Lighthouse requires a coordinated e2r-spec canonical + LiaisonScape mirror
   update with parity verification.
3. Berlin Wall requires a separate NarrativeLine-owned pair update and exact
   application revision boundary.
4. Self-Description requires the declaration decision described above.

Human should approve the exact wave, repository revisions, mirror synchronization
order, and application/package readiness before any JSON edit begins.

## Validation and preservation

- `npm.cmd run validate` in e2r-spec: PASS.
- Current local validator inspection: all ten ordinary files valid under H1;
  Self-Description valid with two unspecified-version warnings.
- In-memory ordinary H1→H2 conversion: 10/10 valid and Stable-profile
  supported; no files written.
- Lighthouse EN/JA canonical-to-mirror byte parity: PASS before migration.
- Current worktrees were preserved: e2r-spec research modifications and
  untracked `work/`, NarrativeLine's existing `AGENTS.md` change, and
  LiaisonScape's existing temporary/research files were not changed or staged.

No sample migration, application change, package update, push, tag, deploy,
publication, or release declaration was performed.

Applied Knowledge:

- `ai-knowledge/playbooks/e2r-public-sample-rights-and-provenance-review.md`
  for exact-path inventory, ownership/provenance separation, EN/JA parity, and
  Human confirmation boundaries.
- `ai-knowledge/decisions/research-result-executable-provenance.md` for
  keeping source, fixture identity, transformation evidence, and authority
  layers distinct.
