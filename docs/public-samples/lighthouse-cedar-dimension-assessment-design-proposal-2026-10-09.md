# Lighthouse and Cedar Dimension Assessment Design Proposal

Date: 2026-10-09

Status: **DESIGN PROPOSAL / HUMAN CONTENT DECISION PENDING**

This proposal is a reviewable authoring plan. It does not change either
Dataset, select canonical wording, or approve any Assessment value. Scores
below are AI-authored interpretations of the existing fictional descriptions,
Events, and Relations; they are not facts mechanically derived from Core.

## Source authority, current distribution, and compatibility

### Lighthouse Restoration Project

The canonical EN/JA files are
`examples/lighthouse-restoration-demo.{en,ja}.e2r.json` in E2R-SPEC. They each
contain 10 Entities, 11 Events, and 28 Relations. The Entity set includes the
Old Harbor Lighthouse, Beacon System, Harbor Historical Archive, and Harbor
Authority as well as six people. Existing identity, graph links, Metadata,
History, and LiaisonScape Presentation content remain authoritative and are
outside this proposal.

LiaisonScape `public/lighthouse-restoration-demo.{en,ja}.e2r.json` is the
committed compatibility/deployment mirror. Both current locale files match
their E2R-SPEC canonical counterparts byte for byte (EN SHA-256
`03a14b5f26adeb87cb88bbdc676b848e1bc36f533e6f6cb5795eff23627cf09c`; JA
`c4acc5eb1e3e54405b7486e31654b978f1d21309dc3de80cf8629d6543764dba`). The
Hub currently obtains Lighthouse from the LiaisonScape raw mirror URL. If the
sample is later approved for editing, update E2R-SPEC first, synchronize the
mirror, and verify parity; changing the Hub URL is a separate decision and is
not necessary to retain the current acquisition path.

### Cedar Observatory: An Open Night

The canonical EN/JA pair is owned by NarrativeLine at
`e2r-narrative-line/src/sample/cedar-observatory-showcase.{en,ja}.e2r.json`.
Each file contains 6 Entities, 12 Events, and 28 Relations. The Entities are
Cedar Observatory, Cedar Sky Club, Mira Vale, Ren Sato, Bluebird Telescope,
and Neighborhood Visitors. This is a NarrativeLine-owned fictional showcase,
not an E2R-SPEC canonical sample and not a Hub-owned copy. Hub links to these
files for NarrativeLine and LiaisonScape Handoff; it does not copy the JSON.
The EN/JA files share Core Object IDs and topology while keeping distinct
Dataset IDs and localized text.

The public-sample provenance record identifies Lighthouse as project-created
fiction and Cedar as a project-created fictional pair authored with Codex under
Human direction and review. Existing rights, ownership, and translation
qualifications remain in their current provenance records. Adding candidate
scores would require a provenance addendum only after Human adopts those
AI-authored interpretations; this proposal itself does not assert that they
have been adopted.

The Dimension Assessment Candidate `0.2.0` is the appropriate proposal if the
Human wants the Dataset to explain each scale in portable prose: both samples
already use a Specification Extension, and the Candidate permits an optional
plain-text Dimension `description`. The exact payload version would be
`0.2.0`, with one matching `uses` declaration in the existing Specification
Extension. Lighthouse would retain Metadata `1.0.0`, History `2.0.0`, and
LiaisonScape Presentation `0.1.0`; Cedar would retain Metadata `1.0.0`,
History `1.0.0`, and Relative Time `0.2.0` with its current feature list.
Nothing here changes those existing extensions. Candidate `0.1.0` remains
available for data without descriptions, but is not recommended for these
scale-rich examples.

Current ParameterPlotter source and its vendored Validator support exact
Dimension Assessment Candidates `0.1.0` and `0.2.0`. NarrativeLine and
LiaisonScape currently depend on Production Validator `0.7.0`; each has tests
for preserving unknown Extension data through unrelated edits/save or
round-trip paths. That is evidence for opaque preservation, not proof that
these applications expose, edit, or semantically validate Dimension
Assessments. Their current Feature support and the eventual approved payload
must be rechecked at implementation time. No app-specific Dataset copy should
be created. Hub's current Cedar and Lighthouse cards target NarrativeLine and
LiaisonScape, not ParameterPlotter. ParameterPlotter can use the same portable
JSON through its Dataset-open/import path; a Hub-to-ParameterPlotter sample
action or a bundled copy is a separate product decision.

## Shared scoring convention proposed for each sample

Use integer-only `0..5` scales for the proposed Dimensions. Each description
would state that scores are a qualitative, whole-story author assessment of
the role described in this Dataset, not a measurement and not a per-event
timeline. For contribution/role scales, `0` means an explicitly assessed lack
of the described role or contribution; it does not mean missing. An absent
Entity/Dimension record remains unassessed. Do not assign zero merely because
a specialized Dimension does not apply.

The proposed endpoint vocabulary is `No described role` / `Central described
role` for role scales, and `No described contribution` / `Central described
contribution` for contribution scales. These are candidate labels, not final
approved EN/JA copy. Specialized scales below have their own endpoint wording.

## Lighthouse Restoration Project proposal

All candidate Assessments refer to the restoration story as a whole, including
its described outcome. Ratings are qualitative author judgments grounded in
the existing Entity descriptions, Event descriptions, and Relations.

| ID | Proposed EN / JA name | Assessed meaning and intended scope | Range | Candidate description and endpoints |
|---|---|---|---:|---|
| `lighthouse.restoration-role` | Restoration Participation / 修復への関与 | Directness and importance of the Entity's described role in the lighthouse restoration; may compare people, equipment, archive, authority, and the lighthouse itself. | 0–5, integer | Describes involvement across the whole story; `No described role` / `Central described role`. |
| `lighthouse.community-service` | Contribution to Continued Harbor Service / 港の継続的な機能への貢献 | How strongly the described role or function contributes to returning the lighthouse to continued harbor and community use. Applies across people and non-people where the Dataset states a contribution. | 0–5, integer | Describes contribution to the restoration's continued-use outcome; `No described contribution` / `Central described contribution`. |
| `lighthouse.role-expertise` | Role-Specific Expertise / 役割に関する専門性 | Expertise in the role explicitly described for a person. Intended scope: the six human Entities only. | 0–5, integer | Describes the strength of stated role-specific expertise across the whole story; `No stated role expertise` / `Exceptional stated role expertise`. |
| `lighthouse.historical-stewardship` | Historical Knowledge and Stewardship / 歴史資料の知識と継承 | Contribution to preserving, finding, or conveying the site's history and records. Intended scope: Elias, Sofia, and the Archive. | 0–5, integer | Describes the Entity's whole-story role in historical knowledge and records; `No described contribution` / `Central described contribution`. |
| `lighthouse.asset-readiness` | Restored Asset Readiness / 修復資産の稼働準備 | The operational readiness explicitly described at the story's concluding state. Intended scope: the Lighthouse and Beacon System only. | 0–5, integer | Describes the final state stated in the Dataset, not a physical inspection or time series; `Not ready for described service` / `Ready for described service`. |

### Lighthouse candidate matrix

Columns follow the Dimension order above. A dash means no Assessment record is
proposed, not zero. Any value remains subject to Human adoption.

| Entity ID | restoration-role | community-service | role-expertise | historical-stewardship | asset-readiness |
|---|---:|---:|---:|---:|---:|
| `lighthouse` | 5 | 5 | — | — | 5 |
| `clara` | 5 | 4 | 5 | — | — |
| `elias` | 3 | 2 | 4 | 4 | — |
| `maya` | 5 | 5 | 5 | — | — |
| `thomas` | 4 | 4 | 5 | — | — |
| `sofia` | 3 | 3 | 5 | 5 | — |
| `daniel` | 4 | 4 | 3 | — | — |
| `beacon` | 5 | 5 | — | — | 5 |
| `archive` | 3 | 3 | — | 5 | — |
| `authority` | 4 | 4 | — | — | — |

The candidate values follow the stated details: Clara is appointed lead and a
structural engineer; Maya is responsible for the Beacon System and tests it;
Thomas is the stonework specialist; Elias knows the site's history; Sofia
finds original plans and documents the site; Daniel reports that fundraising
met its target; the Beacon fails, is restored/tested, and is maintained; the
Archive holds plans, photographs, and stories; the Authority appoints Clara
and administers the grounds; the restored Lighthouse reopens as a working
beacon and community landmark. The exact numeric distinctions are proposed
interpretations, not facts asserted by those descriptions.

Candidate density: 31 of 50 possible cells (62%). The unassessed cells on
`role-expertise`, `historical-stewardship`, and `asset-readiness` are outside
the declared scope of those specialized Dimensions. The shared role and
community dimensions have candidate values for all ten Entities because each
has a stated connection to the restoration or its outcome. No zero is proposed:
the source does not establish an Entity in these shared scopes as having no
role/contribution, and zero is not being used as a placeholder.

## Cedar Observatory proposal

Candidate Assessments describe the whole planned open-night story, not
time-specific states. In particular, the Dataset states that Neighborhood
Visitors are invited and that the program is for them; it does not state that
they attended. The proposal therefore does not score their attendance or
observing experience.

| ID | Proposed EN / JA name | Assessed meaning and intended scope | Range | Candidate description and endpoints |
|---|---|---|---:|---|
| `cedar.open-night-role` | Open-Night Role / 公開観望会での役割 | How central the Entity's described role is to planning, preparing, hosting, or being invited to the open night. Applies across people, group, venue, instrument, and invitees. | 0–5, integer | Describes the Entity's role in the whole open-night plan; `No described role` / `Central described role`. |
| `cedar.observing-program-contribution` | Contribution to the Observing Program / 観望プログラムへの貢献 | Contribution to making the planned visitor observing program possible. Intended scope: venue, organizing group/coordinator, technician, and telescope; invitation alone is insufficient. | 0–5, integer | Describes the whole-story contribution to the planned observing program; `No described contribution` / `Central described contribution`. |
| `cedar.coordination` | Coordination Responsibility / 運営調整の責任 | Described responsibility for organizing the open night and coordinating its people and tasks. Intended scope: Cedar Sky Club and Mira. | 0–5, integer | Describes coordination responsibility across the whole story; `No described responsibility` / `Central coordination responsibility`. |
| `cedar.technical-preparation` | Technical Preparation Contribution / 技術準備への貢献 | Contribution to preparing and checking the observing equipment. Intended scope: Ren and Bluebird Telescope. | 0–5, integer | Describes the whole-story contribution to equipment preparation; `No described contribution` / `Central described contribution`. |
| `cedar.visitor-route-safety` | Visitor-Route Safety Contribution / 来場者経路の安全への貢献 | Contribution to planning or checking visitor routes, paths, and exits. Intended scope: Cedar Sky Club and Ren, whose events describe route planning and a safety walkthrough. | 0–5, integer | Describes the whole-story contribution to route safety; `No described contribution` / `Central described contribution`. |

### Cedar candidate matrix

Columns follow the Dimension order above. A dash means no Assessment record is
proposed, not zero. Any value remains subject to Human adoption.

| Entity ID | open-night-role | observing-program-contribution | coordination | technical-preparation | visitor-route-safety |
|---|---:|---:|---:|---:|---:|
| `cedar-observatory` | 5 | 5 | — | — | — |
| `cedar-sky-club` | 5 | 4 | 5 | — | 3 |
| `mira-vale` | 4 | 3 | 4 | — | — |
| `ren-sato` | 4 | 4 | — | 5 | 5 |
| `bluebird-telescope` | 4 | 5 | — | 4 | — |
| `neighbors` | 2 | — | — | — | — |

The candidates are grounded in the existing plan: the Observatory is the venue;
the Club approves and organizes the open night, assigns roles, and drafts the
route; Mira coordinates the group; Ren checks paths/exits and Bluebird; the
Telescope is prepared for the sky tour; neighbors are invited and are the
intended audience. Numeric differentiation remains authorial judgment.

Candidate density: 17 of 30 possible cells (about 57%). Unassessed cells on
specialized Dimensions are not zero. Neighbors receive only an open-night
role score because the source does not establish attendance or operational
work. The Dimension descriptions can state intended scope, but Candidate
0.2.0 has no machine-readable `not applicable` state: an absent record means
unassessed and cannot itself distinguish “outside the intended scope” from
“not yet assessed.” Do not introduce a new absence taxonomy to solve that
limitation.

## ParameterPlotter comparison and limits

- **Profile:** shows one Entity's assessed dimensions beside missing cells;
  useful for understanding a person's role/expertise or a facility's role and
  readiness without filling absent values.
- **Radar:** the two shared dimensions plus at least one applicable specialized
  Dimension give selected people, lighthouse assets, and some Cedar organizers
  or technical participants a three-spoke comparison. Entities with fewer than
  three assessed selected Dimensions should remain unavailable for a complete
  Radar shape; do not infer a zero or widen a specialized Dimension just to
  produce one.
- **Quadrant:** Lighthouse's two shared Dimensions support all ten Entities.
  Cedar's role and observing-program Dimensions support five Entities; the
  invited neighbors lack a second valid score because attendance is not
  established. ParameterPlotter naturally excludes an Entity missing either
  selected axis.
- **Matrix:** best for seeing the sparse pattern, the explicit assessments,
  and the unassessed cells across all Entity types.

These are portability-oriented Dimension definitions and Assessment records.
They do not add app view state or chart coordinates. Candidate descriptions
remain plain human-readable prose, not Markdown, scoring code, per-Assessment
rationale/evidence, or a timeline model.

## Human decisions required before implementation

1. Adopt, revise, or reject the proposed Dimensions, scopes, endpoint wording,
   and scoring interpretation for each Dataset.
2. Adopt, revise, or reject each listed numeric value as AI-authored fiction;
   no individual value becomes canonical before approval.
3. Confirm that `0..5`, integer-only scales are suitable for both examples,
   rather than choosing different ranges where a narrower concept warrants it.
4. Decide whether EN/JA should use the same Dimension IDs and numeric values
   while retaining localized names/descriptions, consistent with existing
   paired Dataset identity policy.
5. Confirm that implementation should update the current owner source only,
   preserve Dataset/Object IDs and all existing Core/Extensions, and update
   compatibility mirrors where present. Confirm whether ParameterPlotter
   should continue opening the same Dataset through JSON import, or whether a
   later Hub action/bundled copy is wanted as a separately scoped change.
6. Approve any provenance addendum describing the new assessments as
   AI-authored interpretations adopted by Human.

Until those decisions are recorded, both localized Dataset pairs, Hub links,
the ParameterPlotter bundle, and all runtimes remain unchanged.
