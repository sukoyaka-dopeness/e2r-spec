# The Ashen Crown Candidate 0.2.0 Canonical Content Approval

Date: 2026-10-08

Status: **HUMAN CONTENT APPROVAL PENDING — NOT IMPLEMENTED**

This packet requests final Human approval of the EN/JA Dimension names,
endpoint labels, and complete Dimension Descriptions proposed for the canonical
The Ashen Crown pair. It does not authorize or perform a sample update.

## Authority and evidence checked

- E2R-SPEC working revision at review: `6fe45c5b7558e2b6365c9e9076b017668601f3c7`.
- Human-adopted seven-Dimension / 70-Assessment design and original wording
  proposal: [adoption record](ashen-crown-dimension-assessment-human-adoption-and-description-proposal-2026-10-08.md).
- Candidate authority: [Dimension Assessment Candidate 0.2.0](../../extensions/dimension-assessment-extension-candidate-0.2.0.md).
- Shape validation: [Candidate 0.2.0 schema](../../schemas/extensions/dimension-assessment-candidate-0.2.0.schema.json).
- Canonical English Dataset: [ashen-crown.en.e2r.json](../../examples/ashen-crown.en.e2r.json).
- Canonical Japanese Dataset: [ashen-crown.ja.e2r.json](../../examples/ashen-crown.ja.e2r.json).
- Provenance authority: [Public Sample Provenance Record](../public-samples/public-sample-provenance.md), Ashen Crown pair row and pair-specific evidence.
- Production Validator revision previously accepted for exact 0.2.0 support:
  `d81a6a7c6047f39369e425ca018d3b4b80bd18c6`.
- ParameterPlotter runtime accepted for bounded 0.2.0 integration:
  `a2b4c311013c946f1006a3c8ad58bade22743110`; its bounded Human Browser
  Acceptance remains closed as recorded in the
  [acceptance closure](../../../e2r-parameter-plotter/docs/candidate-0.2.0-human-browser-acceptance-closure-2026-10-08.md).

The Candidate remains non-Stable. The completed ParameterPlotter integration
acceptance is separate from this content approval and from release readiness.

## Already adopted and not being reconsidered

Human has adopted these seven IDs, names, integer ranges, and 70 authored
Assessment values. Each Dimension is an overall assessment across the story
represented in the Dataset; each has `integerOnly: true`. The ranges are
intentionally independent. No score, Dimension, ID, or range is proposed for
change here.

| Dimension ID | English name | Japanese name | MIN | MAX |
| --- | --- | --- | ---: | ---: |
| `ashen.command` | Command Authority | 指揮権限 | 0 | 6 |
| `ashen.combat` | Combat Capability | 戦闘能力 | 0 | 10 |
| `ashen.information` | Information Leverage | 情報活用力 | 0 | 8 |
| `ashen.arcane` | Arcane Power | 魔術的な力 | 0 | 12 |
| `ashen.healing` | Healing Practice | 治療能力 | 0 | 6 |
| `ashen.diplomacy` | Diplomatic Skill | 交渉力 | 0 | 5 |
| `ashen.concord` | Contribution to Concord | 和議への貢献 | -4 | 6 |

The 70 approved values are preserved in the linked adoption record. All 10 ×
7 Entity/Dimension pairs have an explicit Assessment. Zero is an authored
value, not missing data: it is a scale minimum except for Contribution to
Concord, where it is the defined neutral overall effect. An absent Assessment
record means unassessed; this sample has no unassessed pair.

## Final wording proposed for Human approval

The wording below retains the existing proposal. It is plain text under
Candidate 0.2.0; Markdown-like characters, if any, have no special meaning.
All Descriptions state the shared whole-story premise. No structured rubric,
time-indexed Assessment, or per-Assessment rationale/evidence is introduced.

| ID | EN name | JA name | MIN–MAX | EN low / high label | JA low / high label |
| --- | --- | --- | ---: | --- | --- |
| `ashen.command` | Command Authority | 指揮権限 | 0–6 | No command authority / Realm-scale command | 指揮権限なし / 王国規模の指揮権限 |
| `ashen.combat` | Combat Capability | 戦闘能力 | 0–10 | No combat capability / Exceptional combatant | 戦闘能力なし / 卓越した戦闘能力 |
| `ashen.information` | Information Leverage | 情報活用力 | 0–8 | No information leverage / Can redirect realm events | 情報活用力なし / 王国規模の事態を動かす情報活用力 |
| `ashen.arcane` | Arcane Power | 魔術的な力 | 0–12 | No arcane power / World-shaping power | 魔術的な力なし / 王国の運命を変える魔術的な力 |
| `ashen.healing` | Healing Practice | 治療能力 | 0–6 | No healing practice / Master healer | 治療の技術なし / 卓越した治療能力 |
| `ashen.diplomacy` | Diplomatic Skill | 交渉力 | 0–5 | Ineffective negotiator / Exceptional negotiator | 交渉が不得手 / 卓越した交渉力 |
| `ashen.concord` | Contribution to Concord | 和議への貢献 | -4–6 | Deepens division / Builds lasting concord | 分裂を深める / 長く続く和議を築く |

### `ashen.command` — Command Authority / 指揮権限

**EN Description:** Rates the authority to direct people or organized groups
across the story represented in this Dataset. 0 is the scale minimum: no
command authority; 6 is command authority capable of shaping the realm's
course.

**JA Description:** このDatasetに描かれた物語全体を通じて、人々や組織を指揮する権限を評価します。0は尺度上の最低値で、指揮権限がない状態、6は王国の行方を左右する規模の指揮権限を表します。

### `ashen.combat` — Combat Capability / 戦闘能力

**EN Description:** Rates direct combat capability across the story
represented in this Dataset. 0 is the scale minimum: no combat capability;
10 is exceptional capability in direct conflict.

**JA Description:** このDatasetに描かれた物語全体を通じて、直接戦闘を行う能力を評価します。0は尺度上の最低値で、戦闘能力がない状態、10は直接対決で卓越した力を発揮する状態を表します。

### `ashen.information` — Information Leverage / 情報活用力

**EN Description:** Rates access to consequential information and the ability
to use it to influence events across the story represented in this Dataset.
0 is the scale minimum: no information leverage; 8 can redirect events across
the realm.

**JA Description:** このDatasetに描かれた物語全体を通じて、重要な情報を活用し、事態に影響を与える力を評価します。0は尺度上の最低値で、情報による影響力がない状態、8は王国規模の事態を動かせる状態を表します。

### `ashen.arcane` — Arcane Power / 魔術的な力

**EN Description:** Rates supernatural or arcane power across the story
represented in this Dataset. 0 is the scale minimum: no arcane power; 12 is
power capable of changing the realm's fate.

**JA Description:** このDatasetに描かれた物語全体を通じて、超常的・魔術的な力を評価します。0は尺度上の最低値で、その力を持たない状態、12は王国の運命を変え得る力を表します。

### `ashen.healing` — Healing Practice / 治療能力

**EN Description:** Rates the skill to treat injury or illness across the story
represented in this Dataset. 0 is the scale minimum: no healing practice; 6
is exceptional restorative skill.

**JA Description:** このDatasetに描かれた物語全体を通じて、負傷や病を治療する技術を評価します。0は尺度上の最低値で、治療の技術がない状態、6は卓越した治療能力を表します。

### `ashen.diplomacy` — Diplomatic Skill / 交渉力

**EN Description:** Rates negotiation and tactical bargaining ability across
the story represented in this Dataset. It measures skill, not whether that
skill is used for peace, political strategy, or division. 0 is the scale
minimum; 5 is exceptional negotiating ability.

**JA Description:** このDatasetに描かれた物語全体を通じて、交渉や駆け引きの能力を評価します。和平に用いるか、政治的策略や分裂に用いるかは評価しません。0は尺度上の最低値、5は卓越した交渉能力を表します。

### `ashen.concord` — Contribution to Concord / 和議への貢献

**EN Description:** Rates the net effect on unity and settlement across the
whole story represented in this Dataset. Negative values deepen division, 0
is a neutral overall effect, and positive values contribute to lasting
concord.

**JA Description:** このDatasetに描かれた物語全体を通じて、和解や共同体のまとまりに与える総合的な影響を評価します。負の値は分裂を深め、0は中立的な総合影響、正の値は長く続く和議への貢献を表します。

The low/high labels name the adopted MIN/MAX endpoints. Integer values between
them belong to that Dimension's own scale; no cross-Dimension unit or
normalization is implied.

## Consistency and parity review

- The 70 adopted values are all within their corresponding inclusive MIN/MAX
  bounds and are integers. The selected range includes a negative MIN only on
  `ashen.concord`; its `-4` is Darius's deliberate division-deepening result.
- `ashen.command` reaches 6 for Elara and Kael; Mira's 0 is the authored scale
  minimum. `ashen.combat` reaches 10 for Vhalgrim; Mira is 1. `ashen.information`
  reaches 8 for Rowan; Mira is 2. `ashen.arcane` reaches 12 for Vhalgrim, with
  Selene at 8 and the other eight Entities explicitly at 0.
- `ashen.healing` reaches 6 for Mira; Ilyan is 4 and six Entities have explicit
  zero. `ashen.diplomacy` reaches 5 for Darius and Nyra; Garrick and Vhalgrim
  are 2. Darius's 5 here measures negotiation skill and is intentionally
  independent of his `ashen.concord` value of -4.
- `ashen.concord` ranges from Darius at -4 to Elara and Nyra at 6; Rowan's 0
  is the neutral overall effect. These readings match the approved distinction
  between capability and outcome, and between explicit zero and unassessed.
- EN and JA proposals carry the same Dimension IDs, endpoints, integer
  constraints, and Assessment values. Dataset prose stays in its authored
  language; changing ParameterPlotter's UI locale must not translate or alter
  these portable descriptions.

No semantic contradiction was found that requires changing the adopted values
or the existing wording proposal. This is a consistency review, not Human
approval of the wording.

## Canonical identity and provenance to preserve during a later update

The current canonical English sample uses Dataset ID `ashen-crown-en-v1` and
title `The Ashen Crown`; the Japanese sample uses Dataset ID
`ashen-crown-ja-v1` and title `灰冠の王国`. Both currently contain 10 Entities,
12 Events, and 57 Relations. Their Entity IDs (`elara`, `garrick`, `selene`,
`rowan`, `mira`, `darius`, `ilyan`, `nyra`, `kael`, `vhalgrim`), Event IDs,
Relation IDs, topology, and localized Core content must be preserved. Do not
import browser-test Entities or duplicate Dimensions.

If approved and implemented later, add the same seven Dimension IDs, bounds,
integer constraints, and 70 Entity/Dimension Assessment values to both
language-specific Datasets, with the approved localized names, endpoint
labels, and Descriptions. Declare the exact Dimension Assessment Candidate
`0.2.0` in its payload and matching Specification Extension `uses` entry;
retain the existing Metadata and History declarations. Do not claim 0.1.0,
silently downgrade, or alter Core facts to express an Assessment.

The provenance record describes Ashen Crown as a project-created fictional
sample with a project-adopted Japanese localization whose exact authoring
method is not recoverable. It says no external story dependency was identified
in the bounded review and marks the content **CC0 candidate after project
authority**; this wording is not a release authorization or a comprehensive
rights audit. The new Assessment values are AI-authored fictional settings
adopted by Human, not facts mechanically derived from Events or Relations.
Any later provenance update should describe that authorship/adoption without
inventing a Japanese translation workflow or claiming external facts as
relicensed.

## Human decision requested

Please approve the EN/JA names, low/high labels, and full Descriptions in the
table as a set, or identify the exact rows/phrases to revise. The seven IDs,
the ranges, `integerOnly: true`, and all 70 Assessment values are already
Human-adopted and are not being asked for again.

After the wording is approved, a separate implementation checkpoint may
update only the two canonical files, validate the paired payloads against
Candidate 0.2.0 and Production Validator, preserve the Core identity above,
and update provenance evidence as warranted. Bundled-sample refresh remains a
separate checkpoint. Candidate Stable promotion and public release remain out
of scope.

## Worktree boundary

This approval packet and its concise Roadmap pointer do not modify canonical
samples, schemas, validators, or application runtime. Existing unrelated
dirty and untracked work is retained.
