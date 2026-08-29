# Public Sample Canonical Ownership Decision

- Date: 2026-08-30
- Status: `DECIDED`
- Scope: 10 public Dataset の authoring source、application mirror、Hub public URL の責務分離
- Why: Lighthouse refresh の実装指示と、live canonical source が LiaisonScape `public/` にあることが衝突したため。

## Previous stopped implementation

`E2R-PUBLIC-SAMPLE-REFRESH-IMPLEMENTATION1` は、Lighthouse の実在 canonical
file が `e2r-liaison-scape/public/` にある一方、変更を e2r-spec 内だけに限定
していたため、実装前に正しく停止した。今回その ownership を確定する。

## Public GitHub and local evidence

Public GitHub main を read-only API/repository browsing で確認した。e2r-spec
`examples/` には Apollo 11、Ashen Crown 等が存在し、LiaisonScape `public/`
には Lighthouse EN/JA が存在する。NarrativeLine `src/sample/` には Berlin
Wall EN/JA があり、Hub `src/App.tsx` は5 sampleの raw URL と各 app Handoff URL
を定義している。Local accepted state は e2r-spec `9ea4b0c`、Validator
`4f5001e`、LiaisonScape `d74b176`、NarrativeLine `3c81d33`、Hub `9de6399`。
未push local commitsは public main より優先した。

## 10-sample ownership inventory

| Sample pair | Current local canonical repo/path | Public main path | Hub source URL | App-local copy | Runtime dependency | Public URL already exposed |
|---|---|---|---|---|---|---|
| Berlin Wall EN/JA | NarrativeLine `src/sample/berlin-wall-history.*.e2r.json` | same | raw NarrativeLine URL | NarrativeLine bundled | NL sample loader | yes |
| Apollo 11 EN/JA | e2r-spec `examples/apollo-11-mission.*.e2r.json` | same | raw e2r-spec URL | none | Hub link/Handoff | yes |
| Lighthouse EN/JA | LiaisonScape `public/lighthouse-restoration-demo.*.e2r.json` | same | raw LiaisonScape URL | LiaisonScape `public/` | LS Home loader | yes |
| Ashen Crown EN/JA | e2r-spec `examples/ashen-crown.*.e2r.json` | same | raw e2r-spec URL | none | Hub link/Handoff | yes |
| Titanic EN/JA | e2r-spec `examples/titanic-final-voyage.*.e2r.json` | same | raw e2r-spec URL | none | Hub link/Handoff | yes |

Hub has URL references, not Dataset JSON copies. The Lighthouse files are the
only app public Dataset copy in the audited set; Berlin Wall is an app-bundled
sample. The e2r-spec examples README assigns complete examples a reference
Dataset role. These are current locations, not a permanent dual-canonical
contract.

## Canonical, mirror, and public URL distinction

Canonical authoring source is the one file pair humans edit. A deployment mirror
is a committed copy required by an app's same-origin/static deployment. A public
source URL is the URL consumed by Hub/Handoff. They may differ, but only the
canonical source is authoritative and every mirror requires parity evidence.

## Ownership models

### MODEL-A — CURRENT DISTRIBUTED CANONICAL

This preserves current paths and minimizes movement, but leaves reference data
coupled to individual apps, makes discoverability uneven, and increases silent
drift and Hub URL complexity. It is rejected as the long-term public reference
model.

### MODEL-B — E2R-SPEC CANONICAL, APP MIRRORS

This aligns canonical semantic/reference data with e2r-spec, keeps application
deployment independent through static committed assets, and permits incremental
migration. It introduces mirror drift risk, which is controlled by explicit
committed parity verification. Hub can eventually point to e2r-spec raw URLs,
while an app may continue using its same-origin mirror.

### MODEL-C — E2R-SPEC ONLY, NO APP COPY

This reduces duplication but adds runtime GitHub/network dependency, CORS,
availability/cache, offline development, and startup UX risk. It is not justified
where same-origin app samples already work.

## Selected ownership and migration

**OWNERSHIP-B — E2R-SPEC BECOMES PUBLIC SAMPLE CANONICAL OWNER.**

Migration scope is **MIGRATE-LIGHTHOUSE-FIRST**. Do not move all ten pairs in one
churn-heavy checkpoint. Apollo, Ashen Crown, and Titanic already have e2r-spec
canonical paths; Berlin Wall remains a later bounded migration from NarrativeLine.
Lighthouse is migrated first because its next refresh requires a Core friendship
Relation and Presentation payload.

## Mirror synchronization policy

Adopt **MIRROR-1 — Explicit committed mirror + parity test/tool**. The future
canonical e2r-spec Lighthouse pair is the source; LiaisonScape `public/` is a
deployment/compatibility mirror. A refresh updates canonical files first, then
the mirror, and verifies byte or defined semantic parity. No runtime sibling-repo
dependency and no network fetch during app startup are introduced. Sync tooling
is not implemented in this decision checkpoint.

## Hub URL and application policy

Existing Lighthouse raw URLs must not be removed. Until the mirror migration is
implemented and verified, Hub keeps its current LiaisonScape raw URLs so existing
public links remain compatible. After migration, the Hub source URL may change
to the e2r-spec raw canonical URL in a separate bounded update; app Home may
continue to use the same-origin LiaisonScape mirror. No Hub URL is changed now.

## Lighthouse future implementation

Future canonical paths:

- `e2r-spec/examples/lighthouse-restoration-demo.en.e2r.json`
- `e2r-spec/examples/lighthouse-restoration-demo.ja.e2r.json`

Compatibility mirror paths:

- `e2r-liaison-scape/public/lighthouse-restoration-demo.en.e2r.json`
- `e2r-liaison-scape/public/lighthouse-restoration-demo.ja.e2r.json`

The future sample refresh remains authorized to add exactly the project-created
Relation `thomas-maya-friends` (`thomas` → `maya`, EN `friends with`, JA `友人である`)
and the already decided Presentation records: `clara-lighthouse` reverse,
`clara-thomas-supervises` dashed, and the friendship undirected. Those JSON
changes are not made here.

## Other sample ownership

Apollo 11, Ashen Crown, and Titanic already use e2r-spec examples as canonical
reference files. Berlin Wall remains NarrativeLine-owned until a later explicit
migration. This decision does not move or copy any Dataset.

S3 provenance/licensing remains `REDIST-A` and is not reopened. The ownership
decision only clarifies where project-authoring authority resides; it does not
complete software-repository licensing or alter sample content.

## Exact next implementation files

The next Lighthouse ownership/refresh checkpoint may change only the following
bounded set, with exact parity verification:

1. `e2r-spec/examples/lighthouse-restoration-demo.en.e2r.json` (new canonical)
2. `e2r-spec/examples/lighthouse-restoration-demo.ja.e2r.json` (new canonical)
3. `e2r-liaison-scape/public/lighthouse-restoration-demo.en.e2r.json` (mirror)
4. `e2r-liaison-scape/public/lighthouse-restoration-demo.ja.e2r.json` (mirror)
5. `e2r-spec/examples/README.md` (canonical/mirror role, if needed)
6. one bounded refresh result document

Hub changes are not required in that slice if its existing compatibility URL is
retained. Any URL switch is a separate decision/checkpoint.

Schema impact: none. Runtime impact: none in this checkpoint. Roadmap impact:
none. Research impact: none. No file moves, JSON edits, copies, or URL changes
occur in this decision.

## Exclusions

No sample JSON, Presentation payload, Core Relation, Hub, application runtime,
Validator, schema, roadmap, license/provenance file, version, release, push, or
deploy was changed. Public Sample JSON implementation, Research audit,
Cross-App release audit, and app version decision are NOT STARTED.
