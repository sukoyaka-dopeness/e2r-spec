# Public Sample Semantics and Provenance Decision

- Date: 2026-08-30
- Status: `BLOCKED — PROVENANCE FORMALIZATION REQUIRED`
- Scope: Public Sample Refresh対象10 Datasetの provenance、redistribution
  readiness、Presentation showcase intent の決定
- Why: `cae0255` audit は全sampleのvalidationを確認したが、license/provenance
  authority と Presentation教育目的が未形式化だった。

## Audit authority

Direct authority は Public Sample Refresh audit、Production Validator acceptance
`dd86697`、Presentation orphan decision、現行 Presentation/Coordinate Draft、
Core、sample README、Apollo canonical sample document、roadmap と各 live
repository である。公開 remote URL、local Git history、local unpushed accepted
work は区別して扱った。今回の決定は legal guarantee ではなく、repository
evidence に基づく release-readiness decision である。

## User Presentation-showcase requirement

次回の refresh では少なくとも1つの既存 Relation に non-default
`arrowDisplay`、少なくとも1つに non-default `lineStyle` を設定する。
新しい Entity/Event/Relation、endpoint swap、semantic vocabulary の追加は
認めない。unknown token/field、orphan record は positive public showcase に
混ぜない。

## Repository and licensing-policy evidence

e2r-spec README は first public release 前に license information を追加すると
記載している。現時点で各 sample の Dataset内 license declaration と各 repo の
formal release license application は完了していない。accepted project policy
の方向（project-created examples は CC0候補等）は sampleごとの authorship や
外部事実の provenance を自動証明しない。S3 formal repository
licensing/provenance application は別の release gate として残る。

## Provenance ledger

| Sample | Locale | Content class | Project authorship evidence | External factual basis | Existing provenance doc | Intended licensing bucket | Redistribution readiness | Blocker |
|---|---|---|---|---|---|---|---|---|
| Berlin Wall | EN | FACTUAL PROJECT-AUTHORED DATASET | NarrativeLine bundled authored JSON/history | Berlin Wall history | none dedicated | CC0 candidate only after review | REDIST-B | source/redistribution record |
| Berlin Wall | JA | FACTUAL PROJECT-AUTHORED DATASET | project-local Japanese JSON | same historical basis; translation authored locally | none dedicated | CC0 candidate only after review | REDIST-B | translation/provenance record |
| Apollo 11 | EN | FACTUAL PROJECT-AUTHORED DATASET | e2r-spec canonical example/history | Apollo mission facts and UTC chronology | `docs/apollo-11-canonical-sample.md` | CC0 candidate only after source review | REDIST-B | formal source/license record |
| Apollo 11 | JA | FACTUAL PROJECT-AUTHORED DATASET | project-local Japanese localization | same Apollo facts/chronology | Apollo canonical sample doc | CC0 candidate only after translation review | REDIST-B | JA authoring/redistribution record |
| Lighthouse | EN | PROJECT-CREATED FICTIONAL | LiaisonScape public demo and Git history | none; fictional restoration scenario | LiaisonScape README | CC0 candidate after S3 formalization | REDIST-B | explicit sample authority/license |
| Lighthouse | JA | PROJECT-CREATED FICTIONAL | project-local Japanese demo | none; fictional scenario | LiaisonScape README | CC0 candidate after S3 formalization | REDIST-B | JA authoring/authority record |
| Ashen Crown | EN | PROJECT-CREATED FICTIONAL | e2r-spec authored example | none; fictional kingdom | none dedicated | CC0 candidate after S3 formalization | REDIST-B | explicit sample authority/license |
| Ashen Crown | JA | PROJECT-CREATED FICTIONAL | project-local Japanese localization | none; fictional kingdom | none dedicated | CC0 candidate after S3 formalization | REDIST-B | JA authoring/authority record |
| Titanic | EN | FACTUAL PROJECT-AUTHORED DATASET | e2r-spec authored example | Titanic voyage facts | none dedicated | CC0 candidate only after source review | REDIST-B | factual source/license record |
| Titanic | JA | FACTUAL PROJECT-AUTHORED DATASET | project-local Japanese localization | same Titanic facts | none dedicated | CC0 candidate only after translation review | REDIST-B | JA authoring/source record |

These classifications do not assert that redistribution is unlawful or lawful.
They state that the current repository evidence is insufficient for the formal
public-release gate. EN/JA pairs are not promoted to READY merely because their
structure matches; translation authorship and authority are separately required.

## Pair decisions

Apollo EN/JA have equal IDs, topology, chronology, Coordinate values and Extension
identities; title, descriptions, metadata IDs and language are intentional
localization. Ashen Crown has the same structural parity and is explicitly a
fictional creative-writing sample. Berlin Wall has equal observed structure but
no dedicated provenance document. Titanic has equal current structure but no
dedicated factual-source record. All remain `REDIST-B`.

Lighthouse EN/JA are project-created fictional demos with equal counts, IDs,
topology and Coordinate structure. The existing Relation meanings are sufficient
for a presentation example; no Core content change is authorized. Both still need
the same explicit sample authority and Japanese authoring record before public
redistribution formalization.

## Lighthouse Relation inventory

| Relation ID | source | target | EN name | JA name | Core semantic summary | arrow candidate | lineStyle candidate | rationale |
|---|---|---|---|---|---|---|---|---|
| `clara-thomas-supervises` | clara | thomas | supervises | 監督する | supervision | no | dashed | optional visual distinction only |
| `clara-thomas-mentors` | clara | thomas | mentors | 指導する | mentoring | no | no | keep default |
| `clara-maya` | clara | maya | works with | 協力する | collaboration | no | no | keep default |
| `elias-clara` | elias | clara | advises | 助言する | advice | no | no | keep default |
| `sofia-elias` | sofia | elias | interviews | 聞き取りをする | interview | no | no | keep default |
| `daniel-clara` | daniel | clara | coordinates with | 調整する | coordination | no | no | keep default |
| `maya-beacon` | maya | beacon | maintains | 保守する | maintenance | no | dotted | optional visual distinction only |
| `sofia-archive` | sofia | archive | works with | 協力する | collaboration | no | no | keep default |
| `clara-lighthouse` | clara | lighthouse | leads restoration of | 修復を率いる | restoration leadership | reverse | no | direction showcase would be explainable |
| `beacon-self-monitor` | beacon | beacon | self-monitors | 自己監視する | self relation | no | no | keep default |
| `beacon-self-calibrate` | beacon | beacon | self-calibrates | 自己調整する | self relation | no | no | keep default |
| `built-lighthouse` | built | lighthouse | — | — | event-to-entity | no | no | keep default |
| `records-archive` | records | archive | — | — | event-to-entity | no | no | keep default |
| `failure-beacon` | failure | beacon | — | — | event-to-entity | no | no | keep default |
| `lead-clara` | lead-appointed | clara | — | — | event-to-entity | no | no | keep default |
| `announce-authority` | announced | authority | — | — | event-to-entity | no | no | keep default |
| `authority-lighthouse` | authority | lighthouse | administers | 管理する | administration | no | no | keep default |
| `plans-sofia` | plans-found | sofia | — | — | event-to-entity | no | no | keep default |
| `work-clara` | work-starts | clara | — | — | event-to-entity | no | no | keep default |
| `work-thomas` | work-starts | thomas | — | — | event-to-entity | no | no | keep default |
| `work-maya` | work-starts | maya | — | — | event-to-entity | no | no | keep default |
| `work-beacon` | work-starts | beacon | — | — | event-to-entity | no | no | keep default |
| `fundraising-daniel` | fundraising | daniel | — | — | event-to-entity | no | no | keep default |
| `test-maya` | beacon-test | maya | — | — | event-to-entity | no | no | keep default |
| `reopen-lighthouse` | reopened | lighthouse | — | — | event-to-entity | no | no | keep default |
| `maintenance-maya` | future-maintenance | maya | — | — | event-to-entity | no | no | keep default |

## Presentation educational decision

Use the smallest pattern: one existing Relation, `clara-lighthouse`, receives
`arrowDisplay: "reverse"`, and a separate existing Relation,
`clara-thomas-supervises`, receives `lineStyle: "dashed"`. The direction choice
is a visual demonstration that does not swap `sourceId`/`targetId`; the sample
documentation must explain that visual direction is Presentation intent, not a
new semantic direction. Dashed is only a visible pattern example, never “weak”
or “uncertain”. A separate Relation keeps the two responsibilities easier to
read and avoids overloading one semantic edge. `undirected` and `bidirectional`
are not selected because they are less natural for these named directed sample
Relations. `dotted` is not needed.

The exact equal EN/JA payload for both files is:

```json
{
  "draft.github.sukoyaka-dopeness.liaisonscape-presentation": {
    "specVersion": "0.1.0",
    "relations": {
      "clara-lighthouse": { "arrowDisplay": "reverse" },
      "clara-thomas-supervises": { "lineStyle": "dashed" }
    }
  }
}
```

This payload is intended under the Extension key inside Dataset `extensions`.
No `normal` or `solid` default is materialized. Unknown fields/tokens and orphan
records remain fixtures, not public positive-sample content.

## Other sample Presentation classification

Apollo, Berlin Wall, Ashen Crown and Titanic pairs are
`KEEP-PRESENTATION-FREE`. Lighthouse is the only
`PRESENTATION-SHOWCASE`, because its existing fictional graph is explicitly an
application demo and already has suitable Relations. No sample needs Core
topology change: Entity/Event/Relation additions, deletions, endpoint changes,
and Relation name rewrites are `NOT AUTHORIZED` for this refresh.

## Specification, S3, and next scope

Lighthouse already has a Specification Extension with current declarations. The
Presentation payload is self-bootstrapped by its `specVersion`; adding a
Specification `uses` declaration solely for this draft is not required by the
current contract. No declaration change is authorized in the next sample-only
slice unless a separate exact conformance check requires it.

Decision: **S3-B**. The repository README's pending license statement and the
absence of sample-specific redistribution records mean formal S3 licensing/
provenance completion must precede treating changed JSON as a public release
candidate. This is evidence-based release gating, not a claim that every JSON
edit is prohibited during private development.

The next implementation is therefore not started. Once the bounded provenance
records are accepted, exact files for the sample slice are:

- `e2r-liaison-scape/public/lighthouse-restoration-demo.en.e2r.json`
- `e2r-liaison-scape/public/lighthouse-restoration-demo.ja.e2r.json`
- paired sample/parity tests in LiaisonScape
- one bounded refresh result document

Hub JSON sync is not expected because Hub stores links, not copies. Any Hub URL
change is a separate checkpoint.

## Future acceptance criteria

Updated EN/JA files must be CLI-valid with no errors, Presentation warnings, or
orphan warnings; LiaisonScape must visibly render both chosen properties and
preserve them through Detail edit, export, and reopen; NarrativeLine must open,
preserve and round-trip the Extension; EN/JA Presentation payloads must be
identical; Hub/Handoff URLs must remain canonical; and the selected REDIST
requirements must be satisfied. Unknown Extension preservation and unchanged
Core topology are mandatory regression checks.

Schema impact: none. Validator impact: none. LiaisonScape runtime impact: none.
NarrativeLine runtime impact: none. Hub runtime impact: none. Roadmap impact: none.
Sample JSON, LICENSE files, package metadata, and research priorities are also
unchanged.

## Exclusions

No sample Dataset, Presentation payload, Core Relation, provenance document,
LICENSE, Hub, application runtime, Validator, schema, roadmap, version, release,
push, deploy, or research-wide audit was changed. The next implementation
checkpoint is NOT started.
