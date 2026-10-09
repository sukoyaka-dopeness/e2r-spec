# Lighthouse and Cedar Dimension Assessment Content Review

Date: 2026-10-09

Status: **HUMAN CONTENT REVIEW SNAPSHOT — SUPERSEDED BY CONTENT ADOPTION AND DATASET IMPLEMENTATION**

On 2026-10-09 Human adopted the recommended content in this review. The
implementation and validation disposition is recorded in the
[implementation result](lighthouse-cedar-dimension-assessment-implementation-result-2026-10-09.md).
The pending-decision language below describes the review checkpoint before
that adoption; it is retained as the record of what was reviewed. Browser
acceptance and publication are separate and are not established by adoption.

This document refines the [initial design proposal](lighthouse-cedar-dimension-assessment-design-proposal-2026-10-09.md)
for Human review. At the original review checkpoint it did not authorize
Dataset changes. Every numeric value below is an AI-authored fictional
assessment, not a fact mechanically calculated from Core records; Human
subsequently adopted the recommendations as Dataset content.

## Sources and authority

- Lighthouse owner source: `e2r-spec/examples/lighthouse-restoration-demo.en.e2r.json`
  and `.ja.e2r.json` (10 Entities, 11 Events, 28 Relations).
- Cedar owner source: `e2r-narrative-line/src/sample/cedar-observatory-showcase.en.e2r.json`
  and `.ja.e2r.json` (6 Entities, 12 Events, 28 Relations). These are read-only
  source files for this review.
- Repository snapshots inspected: E2R-SPEC `fbc456db9aa8582b95f6f4243e76bd2e1eb7fe6e`,
  NarrativeLine `0440459c054adc391b76c5626295172b1a1bc571`, and LiaisonScape
  `fa890887365274a100c7e6712cb68a33019dc8c8` (the latter two read-only).
- Candidate contract: E2R-SPEC
  [`extensions/dimension-assessment-extension-candidate-0.2.0.md`](../../extensions/dimension-assessment-extension-candidate-0.2.0.md)
  and [`schemas/extensions/dimension-assessment-candidate-0.2.0.schema.json`](../../schemas/extensions/dimension-assessment-candidate-0.2.0.schema.json).
- Source ownership, distribution paths, and provenance are summarized in the
  initial proposal and [`public-sample-provenance.md`](public-sample-provenance.md).

Candidate 0.2.0 supports optional non-blank plain-text Dimension descriptions.
They may contain line breaks; they are not Markdown or executable rubrics and
do not create per-Assessment rationale, evidence, or time-series semantics.
Use exact payload version `0.2.0` and align the existing Specification
Extension `uses` declaration. An absent Assessment remains unassessed; zero
is an explicitly recorded number. No special not-applicable value exists.

## Review convention

All proposed scales are `MIN 0`, `MAX 5`, `integerOnly: true`. They are
qualitative author judgments across the whole story represented by the
Dataset, not measurements or event-by-event scores. The lower endpoint means
that the Dimension has been explicitly assessed at its lowest described
level; it does not mean missing. A dash in a matrix means no Assessment is
proposed. Specialized Dimensions are sparse by design; absence does not
assert that an Entity has zero capability or contribution.

Evidence labels in the audit tables:

- **D** — the cited role, action, or outcome is directly stated in the
  Dataset; the numeric level remains an interpretation.
- **I** — the source supports the general connection, while the relative
  numeric level is an AI interpretation.
- **H** — weak or ambiguous support; Human should decide whether to retain,
  revise, or remove the candidate.

## Lighthouse: recommended Dimensions

The five proposed Dimension concepts and intended scopes are retained. The clarifications below
separate restoration participation from community-use contribution, and
define expertise as portrayal within each person's own stated role rather
than a ranking across occupations.

| ID | EN name | JA name | Range / integerOnly | EN endpoints (MIN / MAX) | JA endpoints (MIN / MAX) | Description, EN | Description, JA |
|---|---|---|---|---|---|---|---|
| `lighthouse.restoration-role` | Restoration Role | 修復における役割 | 0–5 / true | No described role / Central described role | 記述された役割なし / 物語の中心となる役割 | Across the whole story in this Dataset, assesses how central an Entity's stated role is in the lighthouse restoration. It can describe people, the lighthouse, equipment, records, or an organization when the Dataset gives them a role. 0 is an explicit lowest rating, not an unassessed value; 5 is a central role. | このDatasetに描かれた物語全体を通じて、灯台の修復においてEntityに記述された役割がどの程度中心的かを評価します。Datasetに役割が記されている場合、人、灯台、設備、資料、組織を対象にできます。0は明示的な最低評価であり、未評価を意味しません。5は中心的な役割を表します。 |
| `lighthouse.community-service` | Contribution to Continued Harbor and Community Use | 港と地域での継続利用への貢献 | 0–5 / true | No described contribution / Central contribution | 記述された貢献なし / 中心的な貢献 | Across the whole story, assesses how strongly the Entity's stated work or function supports the lighthouse's continued use for harbor and community service. This is an outcome-oriented contribution scale, distinct from having a restoration role. 0 is an explicit lowest rating, not missing; 5 is a central described contribution. | 物語全体を通じて、Entityに記述された仕事や機能が、灯台の港での利用と地域への貢献を続けることをどの程度支えるかを評価します。修復に役割を持つこと自体とは異なり、結果への貢献を扱います。0は明示的な最低評価であり、未評価ではありません。5は記述上、中心的な貢献を表します。 |
| `lighthouse.role-expertise` | Role-Specific Expertise Shown | 役割に関する専門性の描写 | 0–5 / true | No role-specific expertise shown / Expertise clearly demonstrated in the stated role | 役割に関する専門性の描写なし / 役割における専門性が明確に示される | Across the whole story, assesses how clearly the Dataset portrays each person's expertise in that person's own stated role. It does not compare the difficulty or worth of different occupations. 0 means no role-specific expertise is shown in this Dataset, not that the person lacks real-world ability and not that the value is unassessed; 5 means the expertise is central and clearly demonstrated. | 物語全体を通じて、各人物が本人に記述された役割において専門性をどの程度明確に示しているかを評価します。異なる職業の難しさや価値を比べる尺度ではありません。0は、このDatasetで役割に関する専門性が描かれていないという明示的な評価であり、現実の能力がないことや未評価を意味しません。5は専門性が中心的かつ明確に示される状態です。 |
| `lighthouse.historical-stewardship` | Historical Knowledge and Records | 歴史知識と記録資料 | 0–5 / true | No described history resource or contribution / Central history resource or contribution | 歴史に関する資源・貢献の記述なし / 歴史に関する中心的な資源・貢献 | Across the whole story, assesses how central an Entity is as a stated source, holder, discovery point, or steward of knowledge and records about the lighthouse and harbor. It applies only where that connection is described. 0 is an explicit lowest rating, not missing; 5 is central to the story's historical knowledge or records. | 物語全体を通じて、灯台や港の歴史に関する知識・記録について、Entityが記述上の情報源、保管先、発見の場、または管理主体としてどの程度中心的かを評価します。その関係が記述されている場合に限り適用します。0は明示的な最低評価であり、未評価ではありません。5は歴史知識や記録において中心的な役割を表します。 |
| `lighthouse.asset-readiness` | Readiness for Described Service | 記述された用途への稼働準備 | 0–5 / true | Not shown ready for described service / Explicitly ready for described service | 記述された用途への準備が示されていない / 記述された用途への準備が明確に示される | Assesses the service-readiness state stated for the restored lighthouse assets in the story's concluding outcome. It is limited to the Lighthouse and Beacon System and is not a physical inspection or a timeline. 0 is an explicit lowest rating, not an absent Assessment; 5 means readiness for the described service is explicit. | 物語の結末として記述された、修復後の灯台設備が用途に使える状態かを評価します。対象は灯台と灯台システムに限り、現物検査や時系列評価ではありません。0は明示的な最低評価であり、Assessmentの欠如を意味しません。5は記述された用途への準備が明確であることを表します。 |

### Lighthouse review of all 31 original candidate cells

Recommended values are shown below; the original candidate is on the left of
`→`. A dash is no record, not zero. Proposed reductions refine relative
contribution rather than change source facts.

| Entity | Dimension | Original → recommended | Evidence and review |
|---|---|---:|---|
| lighthouse | restoration-role | 5 → 5 | **D/I** `reopened`: restored lighthouse reopens as a working beacon and community landmark; centrality is interpretive. |
| clara | restoration-role | 5 → 5 | **D/I** `lead-appointed`, `work-starts`: appointed lead; work begins. |
| elias | restoration-role | 3 → 3 | **D/I** Entity says former keeper who knows history; interview/advice connection in Relations. Numeric weight is interpretive. |
| maya | restoration-role | 5 → 5 | **D/I** Entity says responsible for beacon system; `work-starts`, `beacon-test`, maintenance plan. |
| thomas | restoration-role | 4 → 4 | **D/I** stonework specialist; `work-starts`; Relation says Clara supervises/mentors him. |
| sofia | restoration-role | 3 → 3 | **D/I** archivist; `plans-found` and documentation role. |
| daniel | restoration-role | 4 → 4 | **D/I** harbor volunteer coordinating local support; `fundraising` milestone. |
| beacon | restoration-role | 5 → 5 | **D/I** failure triggers restoration; system is tested/restored and has a maintenance plan. |
| archive | restoration-role | 3 → 3 | **I** records are preserved there and original plans are found there; restoration role is indirect. |
| authority | restoration-role | 4 → 4 | **D/I** responsible authority appoints Clara and administers grounds; numeric centrality is interpretive. |
| lighthouse | community-service | 5 → 5 | **D/I** described as restored for continued community use; reopens as working beacon/community landmark. |
| clara | community-service | 4 → 3 | **I** leadership supports outcome, but direct contribution to community service is less explicit than restoration leadership; Human review. |
| elias | community-service | 2 → 1 | **H** history knowledge/advice is stated, but its effect on continued harbor/community service is indirect and not measured. |
| maya | community-service | 5 → 5 | **D/I** responsible for/tested system and continuing monitoring plan; numeric contribution remains authorial. |
| thomas | community-service | 4 → 3 | **I** stonework restoration supports reopening; exact service impact is not separately stated. |
| sofia | community-service | 3 → 2 | **I** records and plans support restoration context, but service contribution is indirect. |
| daniel | community-service | 4 → 4 | **D/I** coordinates support and reports fundraising target reached; link to final service outcome is plausible. |
| beacon | community-service | 5 → 5 | **D/I** working beacon is an explicit part of the reopened service; centrality is interpretive. |
| archive | community-service | 3 → 2 | **I** its records support the work, but no direct operational harbor service is stated. |
| authority | community-service | 4 → 3 | **I** appointment/grounds responsibility enables work; a direct service contribution is not stated. |
| clara | role-expertise | 5 → 5 | **D/I** structural engineer and appointed project lead; expertise level is authorial. |
| elias | role-expertise | 4 → 4 | **D/I** former keeper with site history knowledge; the description supports expertise, level is interpretive. |
| maya | role-expertise | 5 → 5 | **D/I** electrical engineer responsible for system; tests restored system. |
| thomas | role-expertise | 5 → 5 | **D/I** stonework specialist; works under supervision/mentorship. “5” is a strong authorial rating, not a documented performance result. |
| sofia | role-expertise | 5 → 5 | **D/I** archivist; finds original plans and documents history. |
| daniel | role-expertise | 3 → 2 | **H** coordination and fundraising actions are explicit, but the Dataset gives little role-specific expertise detail beyond those actions; lower score is cautious, still interpretive. |
| elias | historical-stewardship | 4 → 4 | **D/I** former keeper who knows the site's history; no explicit transfer/preservation act is attributed to him. Rate knowledge presence, not an unstated transfer. |
| sofia | historical-stewardship | 5 → 5 | **D/I** documents history and finds original plans. |
| archive | historical-stewardship | 5 → 5 | **D/I** described as preserving plans, photographs, and stories; plans found there. |
| lighthouse | asset-readiness | 5 → 5 | **D** `reopened`: explicit working beacon/community landmark conclusion. |
| beacon | asset-readiness | 5 → 4 | **H** `beacon-test` says the restored system was tested, but does not state the test result. Ongoing monitoring is planned and the Lighthouse reopens as working beacon. 4 is a cautious interpretation; Human should decide whether the result supports a score or whether this cell should be unassessed. |

Recommended Lighthouse matrix (31/50 assessed; no explicit zeros):

| Entity ID | restoration-role | community-service | role-expertise | historical-stewardship | asset-readiness |
|---|---:|---:|---:|---:|---:|
| `lighthouse` | 5 | 5 | — | — | 5 |
| `clara` | 5 | 3 | 5 | — | — |
| `elias` | 3 | 1 | 4 | 4 | — |
| `maya` | 5 | 5 | 5 | — | — |
| `thomas` | 4 | 3 | 5 | — | — |
| `sofia` | 3 | 2 | 5 | 5 | — |
| `daniel` | 4 | 4 | 2 | — | — |
| `beacon` | 5 | 5 | — | — | 4 |
| `archive` | 3 | 2 | — | 5 | — |
| `authority` | 4 | 3 | — | — | — |

## Cedar: recommended Dimensions

The open-night role and observing-program dimensions remain cross-Entity
scales, but an invitee's role is only “invited audience,” not attendance or
participation. Technical preparation is narrowed to the expertise portrayed
in a person's role; the Dataset states that Ren checks Bluebird but does not
record a successful check result. Route safety is broadened to route planning
and safety contribution so the Club's documented route drafting is not
misstated as a safety inspection.

| ID | EN name | JA name | Range / integerOnly | EN endpoints (MIN / MAX) | JA endpoints (MIN / MAX) | Description, EN | Description, JA |
|---|---|---|---|---|---|---|---|
| `cedar.open-night-role` | Open-Night Role | 公開観望会での役割 | 0–5 / true | No described role / Central described role | 記述された役割なし / 物語の中心となる役割 | Across the whole planned open-night story, assesses how central an Entity's stated role is in planning, preparing, hosting, or being invited to the event. For invited visitors, it rates only their explicitly described role as intended audience; it does not imply attendance or experience. 0 is an explicit lowest rating, not missing; 5 is central. | 計画された公開観望会の物語全体を通じて、企画、準備、開催、または招待された立場において、Entityに記述された役割がどの程度中心的かを評価します。招待された来場者については、想定された参加者として明記された役割のみを評価し、実際の出席や体験を意味しません。0は明示的な最低評価であり、未評価ではありません。5は中心的な役割です。 |
| `cedar.observing-program-contribution` | Contribution to the Observing Program | 観望プログラムへの貢献 | 0–5 / true | No described contribution / Central contribution | 記述された貢献なし / 中心的な貢献 | Across the whole story, assesses the stated contribution to making the planned visitor observing program possible. It applies where the Dataset describes such a contribution by the venue, organizers, people, or equipment; an invitation alone is insufficient. 0 is an explicit lowest rating, not an unassessed cell; 5 is central to the described program. | 物語全体を通じて、計画された来場者向け観望プログラムを実現するために記述された貢献を評価します。天文台、運営者、人、設備について、その貢献がDatasetに記されている場合に適用します。招待されたことだけでは適用根拠になりません。0は明示的な最低評価であり、未評価セルではありません。5は記述されたプログラムにおける中心的な貢献です。 |
| `cedar.coordination` | Coordination Responsibility | 運営調整の責任 | 0–5 / true | No described coordination responsibility / Central coordination responsibility | 調整責任の記述なし / 中心的な調整責任 | Across the whole story, assesses the stated responsibility for organizing the open night and coordinating people or tasks. Its intended scope is Cedar Sky Club and Mira, where that responsibility is described. 0 is an explicit lowest rating, not missing; 5 is central coordination responsibility. | 物語全体を通じて、公開観望会を運営し、人や作業を調整する責任がどの程度記述されているかを評価します。適用対象は、その責任が記述されているシダー星空クラブとミラです。0は明示的な最低評価であり、未評価ではありません。5は中心的な調整責任を表します。 |
| `cedar.technical-role-expertise` | Technical Expertise Shown in Role | 役割における技術的専門性の描写 | 0–5 / true | No technical expertise shown / Technical expertise clearly demonstrated in the stated role | 技術的専門性の描写なし / 役割における技術的専門性が明確に示される | Across the whole story, assesses how clearly a person's technical expertise is portrayed in the person's stated role. It does not assess whether equipment passed a check. The proposed scope is Ren, identified as the observatory technician and described checking the telescope. 0 means no technical expertise is shown in this Dataset, not lack of real-world ability or missing data; 5 means clearly demonstrated expertise. | 物語全体を通じて、人物が本人に記述された役割で技術的な専門性をどの程度明確に示しているかを評価します。機材点検に合格したかどうかは評価しません。適用対象は、天文台の技術担当として望遠鏡を点検するレンの案です。0はこのDatasetで技術的専門性が描かれていないという明示的な評価であり、現実の能力がないことや未評価を意味しません。5は専門性が明確に示される状態です。 |
| `cedar.visitor-route-safety` | Visitor-Route Planning and Safety Contribution | 来場者経路の計画と安全への貢献 | 0–5 / true | No described route contribution / Central route-planning or safety contribution | 経路に関する貢献の記述なし / 経路計画または安全への中心的な貢献 | Across the whole story, assesses the stated contribution to planning or checking routes and movement through the observatory. The Club is described drafting the visitor route and Ren walking paths and exits and revising the plan. The scale does not claim that the Club performs a safety inspection. 0 is an explicit lowest rating, not missing; 5 is a central described contribution. | 物語全体を通じて、天文台内の経路や人の移動を計画・確認することへの記述上の貢献を評価します。クラブは来場者経路をまとめ、レンは通路と出入口を歩いて確認して計画を見直したと記されています。この尺度は、クラブが安全点検を行ったと主張するものではありません。0は明示的な最低評価であり、未評価ではありません。5は中心的な貢献です。 |

### Cedar review of all 17 original candidate cells

| Entity | Dimension | Original → recommended | Evidence and review |
|---|---|---:|---|
| cedar-observatory | open-night-role | 5 → 5 | **D/I** venue prepares an open night and opens its doors; centrality is interpretive. |
| cedar-sky-club | open-night-role | 5 → 5 | **D** approves event, assigns roles, plans invitations, route, briefing, welcome desk, and closing. |
| mira-vale | open-night-role | 4 → 4 | **D/I** coordinator agrees plan and coordinates team; numerical level is interpretive. |
| ren-sato | open-night-role | 4 → 4 | **D/I** technician checks route/equipment as part of preparation; relative level is interpretive. |
| bluebird-telescope | open-night-role | 4 → 4 | **I** prepared instrument for tour and checked by Ren; assigning it an event “role” is authorial framing. Human review. |
| neighbors | open-night-role | 2 → 2 | **H** invitations and intended audience are stated; score means invited audience role only, never attendance, experience, or contribution. Human should affirm that the scale includes invitees. |
| cedar-observatory | observing-program-contribution | 5 → 5 | **D/I** venue/dome are prepared, doors open, tour planned; contribution level is interpretive. |
| cedar-sky-club | observing-program-contribution | 4 → 4 | **D/I** organizes event and program; whether it is less central than venue is authorial. Human review. |
| mira-vale | observing-program-contribution | 3 → 3 | **I** coordinates the team; program contribution is indirect, not separately measured. |
| ren-sato | observing-program-contribution | 4 → 4 | **D/I** checks route and telescope; check result is not stated. Score denotes contribution, not successful equipment state. |
| bluebird-telescope | observing-program-contribution | 5 → 5 | **D/I** instrument is explicitly prepared for visitor tour and checked; successful readiness outcome is not stated. High contribution is authorial. |
| neighbors | observing-program-contribution | — | **Unassessed intentionally**: invitation does not establish attendance, observing, or program contribution. Do not assign 0. |
| cedar-sky-club | coordination | 5 → 5 | **D/I** organizes and divides roles; centrality is a rating. |
| mira-vale | coordination | 4 → 4 | **D/I** identified coordinator and coordinates team; exact level is interpretive. |
| ren-sato | `cedar.technical-preparation` → `cedar.technical-role-expertise` | 5 → 3 | **H** technician role and telescope check are stated, but no check result or technical method is recorded. Recommend lower portrayal score 3; Human should decide whether this evidence supports any numeric score. |
| bluebird-telescope | `cedar.technical-preparation` | 4 → — | **H / withdraw**: Ren checks Bluebird, but no result establishes the instrument's technical preparation/readiness level. The revised Dimension rates a person's expertise, so this cell is outside its scope. Leave unassessed, not zero. |
| cedar-sky-club | visitor-route-safety → route planning and safety contribution | 3 → 3 | **D/I** club drafts the route and plans movement; no safety inspection by the Club is stated. Score now means route planning contribution, not a safety finding. |
| ren-sato | visitor-route-safety → route planning and safety contribution | 5 → 5 | **D/I** walks paths/exits and revises the movement plan; centrality remains interpretive. |

Recommended Cedar matrix (16/30 assessed; no explicit zeros):

| Entity ID | open-night-role | observing-program-contribution | coordination | technical-role-expertise | visitor-route-safety |
|---|---:|---:|---:|---:|---:|
| `cedar-observatory` | 5 | 5 | — | — | — |
| `cedar-sky-club` | 5 | 4 | 5 | — | 3 |
| `mira-vale` | 4 | 3 | 4 | — | — |
| `ren-sato` | 4 | 4 | — | 3 | 5 |
| `bluebird-telescope` | 4 | 5 | — | — | — |
| `neighbors` | 2 | — | — | — | — |

## Interpretation, density, and visualization

- The final proposal retains five Dimensions for each Dataset and changes no
  Core data. Lighthouse retains its five proposed IDs; Cedar retains four
  proposed IDs and uses `cedar.technical-role-expertise` for the clarified
  technical-expertise meaning. Lighthouse retains all 31
  assessment cells, with 8 suggested score adjustments (six community-service
  reductions, Daniel expertise 3→2, Beacon readiness 5→4). Cedar retains 16
  of the 17 original cells; Ren changes 5→3 and the Bluebird technical value
  is withdrawn. Total proposed density becomes 47/80 cells (31/50 Lighthouse,
  16/30 Cedar). No zero is proposed.
- The deliberately sparse specialized axes avoid treating non-applicability
  as zero. Candidate 0.2.0 absence still cannot encode why a cell is absent;
  the human-readable Dimension description can state intended scope, but it
  does not add machine-readable applicability semantics.
- **Profile:** shows one entity's recorded scores alongside absent cells;
  absent cells should remain visibly unassessed.
- **Radar:** can compare entities only when the selected dimensions have
  actual records; do not fill a shape with inferred values.
- **Quadrant:** Lighthouse's shared role and community-service axes give all
  ten entities candidate values. Cedar's open-night role and program axes
  give five entities two values; invited neighbors lack a second value and
  should not be plotted on that pair.
- **Matrix:** exposes the intended sparse pattern and keeps zero distinct
  from missing, should a future Human-approved design include any zero.

## EN/JA correspondence, provenance, and implementation plan

The recommended authoring plan is one shared Dimension ID set, scale,
integer constraint, entity/dimension mapping, and numeric value set across
each EN/JA pair. Localize only names, descriptions, and endpoint labels.
Keep the paired Dataset IDs distinct and preserve all Core Object IDs,
topology, Metadata, History, and other Extensions.

If Human approves the content, use Candidate 0.2.0 because the descriptions
are portable plain-language scale explanations. Keep its payload version and
the existing Specification Extension declaration exactly aligned. Do not
add a new missing-value state, rubric, per-cell evidence, or time model.

Update sequence after approval:

1. Update Lighthouse EN/JA in E2R-SPEC as canonical owner sources.
2. Validate both against Candidate 0.2.0 and the Production Validator; compare
   IDs, dimensions, scales, and assessment pairs across locales.
3. Synchronize Lighthouse's LiaisonScape deployment mirror byte-for-byte and
   verify current Hub acquisition still points to the intended mirror.
4. Update Cedar EN/JA in NarrativeLine, its owner repository, preserving its
   distinct Dataset IDs and shared Core identity/topology. Hub currently links
   to that source rather than storing another copy.
5. Add provenance recording these as AI-authored fictional evaluations
   adopted by Human, not values derived mechanically from Core or supported by
   external evidence. Preserve current authorship, localization, rights, and
   licensing qualifications; do not imply broader legal clearance.
6. Treat ParameterPlotter open/import as use of the same Dataset. Hub sample
   entry changes, bundled samples, Cross-App acceptance, and releases remain
   separate decisions.

## Decisions requested from Human

Please decide:

1. Whether to adopt these five Dimensions per Dataset, including the revised
   meanings for Lighthouse community service, historical stewardship, and
   Cedar technical/route contributions.
2. Whether `0..5`, integer-only scales and all EN/JA names, endpoint labels,
   and descriptions are suitable as written.
3. For each audited cell, whether to adopt the recommended value, revise it,
   or leave it unassessed. Highest-priority review cells are Lighthouse
   `elias` community-service 1, `daniel` role-expertise 2, `beacon`
   asset-readiness 4; Cedar `neighbors` open-night-role 2, `ren-sato`
   technical expertise 3, and the withdrawn Bluebird technical score.
4. Whether the stated intentional missing cells are appropriate, especially
   Cedar neighbors' lack of program-contribution score and Bluebird's lack of
   technical expertise score.
5. Whether EN/JA pairs should share IDs, scales, mappings, and values while
   keeping localized text and distinct Dataset IDs.
6. Whether to authorize the owner-source and Lighthouse mirror updates in
   the sequence above, with Hub links unchanged unless separately approved.
7. Whether to adopt the provenance addendum describing the scores as
   AI-authored fictional assessments subsequently approved by Human.

Until these decisions are recorded, both owner Dataset pairs, the
LiaisonScape Lighthouse mirror, Hub links, and all application bundles remain
unchanged. This review is not Dataset approval, publication approval, or
Candidate promotion.
