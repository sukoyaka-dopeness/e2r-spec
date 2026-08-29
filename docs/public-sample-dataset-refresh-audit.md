# Public Sample Dataset Refresh Audit

- Date: 2026-08-30
- Status: `BLOCKED — SAMPLE SEMANTICS/PROVENANCE DECISION REQUIRED`
- Scope: Public Sample Refresh 前の inventory、canonical source、validation、
  parity、Presentation opportunity、copy/licensing audit
- Why now: Production Validator integration は `dd86697` で accepted 済みだが、
  sample Dataset自体の変更はまだ開始していない。

## Authorities and repository baselines

Production Validator acceptance は
`docs/production-validator-extension-integration-acceptance.md`、Result は
`docs/production-validator-extension-integration-result.md`、orphan policy は
`docs/presentation-orphan-relation-validation-policy-decision.md` を authority
とした。Roadmap の sequencing では Public Sample Refresh は Validator
acceptance の後、cross-app/release audit の前である。

Live baseline:

| Repository | HEAD / status | Gate |
|---|---|---|
| e2r-spec | `dd86697`, clean | `npm.cmd run validate` PASS |
| e2r-validator | `4f5001e`, clean | 105 tests + 3 fixtures PASS |
| e2r-liaison-scape | `d74b176`, clean | 269 tests、lint、build PASS |
| e2r-narrative-line | `3c81d33`, clean | 222 tests、lint、build PASS |
| e2r-hub | `9de6399`, clean | 1 test、lint、build PASS |

`ai-knowledge` には保護対象の既知 dirty file
`playbooks/e2r-edge-cdp-browser-diagnostic.md` のみがあり、変更していない。

## Public sample inventory and canonical-source map

Hub `src/App.tsx` が現在 public-facing に列挙する5 sample と EN/JA URLを
authorityとした。JSONの canonical source は次の通りで、Hub は raw URL と
GitHub source link を保持する参照層である。Hub に JSON の bundled copy は
確認できない。LiaisonScape は Lighthouse の public copy、NarrativeLine は
Berlin Wall の bundled sample を持つため、その2系統は copy/surface audit
対象である。

| Sample | EN/JA | Canonical source | Public surface | Role | Current Extensions | Copied/linked | Refresh candidate |
|---|---|---|---|---|---|---|---|
| Berlin Wall History | pair | NarrativeLine `src/sample` | Hub → NarrativeLine/LiaisonScape | historical event timeline | Metadata, Specification | Hub links/copies URL; NL bundled | KEEP-AS-IS |
| Apollo 11 Mission | pair | e2r-spec `examples` | Hub → NarrativeLine/LiaisonScape | canonical interoperability sample | Metadata, Coordinate Draft, Specification | Hub URL links | KEEP-AS-IS |
| Lighthouse Restoration | pair | LiaisonScape `public` current deployed asset | Hub → NarrativeLine/LiaisonScape | fictional application showcase | Metadata, Coordinate Draft, Specification | Hub URL links; LS public copy | REFRESH-PRESENTATION candidate |
| Ashen Crown | pair | e2r-spec `examples` | Hub → NarrativeLine/LiaisonScape | fictional creative-writing graph | Metadata, Coordinate Draft, Specification | Hub URL links | KEEP-AS-IS |
| Titanic Final Voyage | pair | e2r-spec `examples` | Hub → NarrativeLine/LiaisonScape | historical voyage sample | Metadata, Coordinate Draft, Specification | Hub URL links | REVIEW-SEMANTICS-FIRST |

The e2r-spec Coordinate `basic.json` and invalid examples are validation/schema
fixtures, not Hub public samples, and are excluded from the public inventory.
No Berlin Wall, Apollo, Ashen Crown, or Titanic JSON copy was found in Hub or
LiaisonScape. Hub links Berlin and Lighthouse to application-owned repositories;
the remaining links point to e2r-spec. No synchronization mechanism or drift
report exists beyond these explicit URLs, so copy ownership must remain explicit
in a future implementation.

## Validator audit of every public complete Dataset

All ten EN/JA files were passed through the production CLI (`REAL-CLI`). Every
file returned exit `0`, `valid=true`, zero errors, zero warnings, zero orphan
Presentation warnings, zero unknown-Extension warnings, and zero unsupported-
version warnings. This included the two LiaisonScape Lighthouse files and the
two NarrativeLine Berlin files. No file was rewritten.

Counts: Apollo 9 Entity / 12 Event / 66 Relation; Ashen Crown 10 / 12 / 57;
Titanic 13 / 18 / 40; Berlin Wall 9 / 15 / 23; Lighthouse 10 / 11 / 26.

## Sample role and semantic audits

### Lighthouse Restoration

This is explicitly fictional and application-facing. Existing Relations such
as `clara-lighthouse` (`leads restoration of`), `clara-thomas-supervises`,
`maya-beacon` (`maintains`), and `beacon-self-monitor` already have readable
sample meaning. No new Relation is required for a visual demonstration.
Presentation candidates may use existing IDs only; Core sourceId/targetId and
topology must remain unchanged. Any future factual/provenance claim about the
fictional scenario requires a separate decision.

### Apollo 11 EN/JA parity

The pair has identical Entity, Event, Relation IDs and topology, identical
Coordinate Draft space/value structure, identical Extension identities and no
Presentation payload. Metadata dataset IDs and natural-language title/content
are intentional localization differences. No drift candidate was found.

### Ashen Crown EN/JA parity

The pair has identical IDs, topology, counts, Coordinate Draft structure and
Extension identities. Metadata IDs/titles and natural-language content differ
as intentional localization. No Presentation payload or parity drift was found.

### Other samples

Berlin Wall is the historical Timeline sample and contains Metadata and
Specification but no Coordinate Draft. Titanic is a historical sample with
Metadata, Coordinate Draft and Specification; adding visual semantics requires
content/provenance review first. All current samples validate without orphan
Presentation data.

## Coordinate, Presentation, and Extension audit

Apollo, Ashen Crown, Titanic, and Lighthouse use Coordinate Draft
`draft.github.sukoyaka-dopeness.coordinate` version `0.1.0`; Berlin Wall has no
Coordinate payload. The public files use the canonical `liaisonscape-graph`
Space where present. No automatic-placement provenance is materialized. Partial
and multi-space Coordinate behavior remains part of the existing contract and
must not be rewritten merely for refresh.

No public sample currently uses the LiaisonScape Presentation Extension
`draft.github.sukoyaka-dopeness.liaisonscape-presentation` `0.1.0`. A bounded
showcase is educationally valuable for Lighthouse, but only after provenance
approval. Recommended candidates are existing Relations `clara-lighthouse` with
`arrowDisplay: "reverse"` only if the visual emphasis is explicitly explained,
and `clara-thomas-supervises` or `maya-beacon` with `lineStyle: "dashed"` only
if the visual distinction is documented as presentation intent, not a new
semantic category. The safer initial choice is one existing Relation and one
property, not a topology change or a blanket addition to every sample.

`normal`/`solid` remain omitted defaults. Reverse never swaps Core endpoints;
undirected/bidirectional never change Core meaning. Unknown fields/tokens remain
preservable. The accepted Validator orphan policy is warning/valid/no repair.

Specification Extensions are present in the complete samples and validate with
their current declarations. No Specification declaration, Metadata field,
Coordinate field, license field, or Presentation payload should be added solely
because a refresh is planned.

## Metadata, license, provenance, and copies

Current sample Metadata contains `datasetId` and `title`; the audited Dataset
files do not provide a general accepted license declaration. Repository/sample
README and source comments provide role descriptions, but this audit found no
single explicit redistribution authority covering every historical and
fictional sample. Dataset content licensing/provenance is distinct from app
Credits. Before public Dataset modification or redistribution, the owner must
decide the license/provenance boundary for Apollo, Titanic, Berlin Wall, and the
project-created fictional samples. No unaccepted Metadata `license` field is
introduced here.

Hub provides localized cards, raw Dataset links, GitHub source links, and
NarrativeLine/LiaisonScape Handoff URLs. It does not link a Validator surface.
Hub copies/links are not changed in this audit. NarrativeLine has a bundled
Berlin sample and an onboarding sample loader; LiaisonScape has bundled
Lighthouse assets and reads Presentation/Coordinate values through its existing
runtime. Future refresh acceptance must verify both app copies and Hub URLs.

## Compatibility evidence and future acceptance

NarrativeLine baseline tests cover sample loading, History/Coordinate behavior,
Handoff, and preservation-oriented flows; LiaisonScape baseline tests cover
Coordinate, Presentation read/write/preservation, Relation deletion cleanup,
open/render/edit/export behavior. These are automated evidence, not browser
acceptance. Future refresh must add manual/open-roundtrip evidence for each
changed public sample.

| Future criterion | Required evidence |
|---|---|
| S1 Validator | every complete EN/JA Dataset CLI-valid with expected warnings |
| S2 Presentation | chosen Relation visibly renders arrow/line intent, no Core mutation/orphan |
| S3 LiaisonScape | open, render, Detail, edit/no-op, export, reopen |
| S4 NarrativeLine | open, Presentation preservation, round-trip, History/Coordinate regression |
| S5 EN/JA parity | non-language structure remains equal |
| S6 Unknown preservation | unowned Extensions survive round-trip |
| S7 Hub/Handoff | correct localized URL and both app destinations |
| S8 License/provenance | redistribution authority verified |
| S9 Metadata | accepted metadata remains correct |
| S10 No unintended semantics | topology/Core meaning unchanged |

## Classification and recommended next scope

| Classification | Samples / finding |
|---|---|
| KEEP-AS-IS | Apollo 11, Ashen Crown, Berlin Wall |
| REFRESH-PRESENTATION | Lighthouse, conditional on provenance decision |
| REFRESH-CONTRACT | none evidenced |
| REFRESH-COPY-SYNC | none proven; Hub/app links require future sync verification |
| REVIEW-SEMANTICS-FIRST | Titanic provenance and any proposed Lighthouse semantic claim |
| REMOVE-FROM-PUBLIC-CANDIDATE | none; fixtures remain excluded, not removed |

The smallest future implementation scope, after the blocker is resolved, is
one Lighthouse EN/JA paired Presentation edit using existing Relation IDs,
paired-file parity tests, production Validator checks, and a result document.
Hub copy/link changes should be a separate checkpoint if needed. Expected files
would be the two Lighthouse JSON files, focused sample/parity tests, and the
bounded result document; no new Relation should be added.

## Known blockers and exclusions

Current status is **BLOCKED — SAMPLE SEMANTICS/PROVENANCE DECISION REQUIRED**:
explicit redistribution/license authority and the intended educational meaning
of any non-default Presentation property are not yet sufficiently recorded for
a public sample change. This audit does not choose those meanings by inference.

No sample JSON, Relation, Presentation property, Coordinate, Metadata, Hub,
NarrativeLine, LiaisonScape, Validator, schema, roadmap, version, release,
Handoff, or ai-knowledge file was changed. Public Sample Refresh implementation,
cross-app/release audit, app version decision, push, deploy, and the next
checkpoint were not started.
