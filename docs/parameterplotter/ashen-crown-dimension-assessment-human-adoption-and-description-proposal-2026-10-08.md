# The Ashen Crown Dimension Assessment: Human-Adopted Design and Description Proposal

Date: 2026-10-08

Status: The seven-Dimension and 70-Assessment design below is Human-adopted
sample content. Dimension Description wording and the proposed Candidate version
are pending Human approval. Nothing in this record changes Candidate 0.1.0 or
the canonical EN/JA Datasets.

## Authority and evidence

- E2R-SPEC source revision inspected: `f92b1002f54a068f3d10ef0f8332ea51540cd2de`.
- ParameterPlotter source revision inspected: `cd728791d3b5c4d44ce262c62ad30bb76653bd2b`.
- Candidate authority: [Dimension Assessment Extension Candidate](../../extensions/dimension-assessment-extension-candidate.md), exact version `0.1.0`.
- Candidate schema: [dimension-assessment-candidate.schema.json](../../schemas/extensions/dimension-assessment-candidate.schema.json).
- Canonical source samples: [English](../../examples/ashen-crown.en.e2r.json) and [Japanese](../../examples/ashen-crown.ja.e2r.json).
- The source samples contain 10 Entities, 12 Events, and 57 Relations, with no Dimension Assessment payload. Existing Core Object IDs correspond between language variants; their Dataset IDs are distinct.

This record preserves the existing Core Entity, Event, and Relation content.
The numeric Assessments are authorial fictional settings proposed by AI and
adopted by Human. They are not mechanically derived from the existing graph.

## Human-adopted Dimension definitions

All seven Dimensions describe an overall assessment across the story
represented in the Dataset. `integerOnly` is `true` for each. The distinct
ranges are intentional. No decimal scale or positive non-zero minimum is
required for this sample.

| ID | English name | Japanese name | MIN | MAX |
| --- | --- | --- | ---: | ---: |
| `ashen.command` | Command Authority | 指揮権限 | 0 | 6 |
| `ashen.combat` | Combat Capability | 戦闘能力 | 0 | 10 |
| `ashen.information` | Information Leverage | 情報活用力 | 0 | 8 |
| `ashen.arcane` | Arcane Power | 魔術的な力 | 0 | 12 |
| `ashen.healing` | Healing Practice | 治療能力 | 0 | 6 |
| `ashen.diplomacy` | Diplomatic Skill | 交渉力 | 0 | 5 |
| `ashen.concord` | Contribution to Concord | 和議への貢献 | -4 | 6 |

The 70 Human-adopted Assessment values are ordered as command, combat,
information, arcane, healing, diplomacy, and concord:

| Entity ID | Command | Combat | Information | Arcane | Healing | Diplomacy | Concord |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `elara` | 6 | 3 | 6 | 0 | 0 | 4 | 6 |
| `garrick` | 5 | 9 | 3 | 0 | 1 | 2 | 2 |
| `selene` | 2 | 3 | 7 | 8 | 2 | 3 | 2 |
| `rowan` | 1 | 5 | 8 | 0 | 0 | 4 | 0 |
| `mira` | 0 | 1 | 2 | 0 | 6 | 3 | 3 |
| `darius` | 5 | 4 | 7 | 0 | 0 | 5 | -4 |
| `ilyan` | 4 | 3 | 5 | 0 | 4 | 4 | 5 |
| `nyra` | 3 | 3 | 7 | 0 | 0 | 5 | 6 |
| `kael` | 6 | 8 | 5 | 0 | 0 | 3 | 1 |
| `vhalgrim` | 1 | 10 | 4 | 12 | 0 | 2 | 2 |

All 10-by-7 pairs are explicitly assessed: 70/70. A value of `0` is an
explicit authored value at the scale minimum or, for Contribution to Concord,
the defined neutral net effect. An unassessed pair is represented by the
absence of an Assessment record; this sample intentionally has no such pairs.

Diplomatic Skill measures negotiation and tactical bargaining ability. It
does not measure whether that ability is used to support peace or to advance
political strategy and division. Darius's Diplomacy value `5` and Concord
value `-4` are intentional and describe different traits and outcomes.

## Proposed endpoint labels and EN/JA Descriptions

The following are final-wording proposals for Human review, not adopted
Candidate text. Each Description is intended as plain human-readable text. It
states the overall-story premise and clarifies what `0` means without treating
absence of source detail as zero.

| ID | English low label | English high label | English Description | Japanese low label | Japanese high label | Japanese Description |
| --- | --- | --- | --- | --- | --- | --- |
| `ashen.command` | No command authority | Realm-scale command | Rates the authority to direct people or organized groups across the story represented in this Dataset. 0 is the scale minimum: no command authority; 6 is command authority capable of shaping the realm's course. | 指揮権限なし | 王国規模の指揮権限 | このDatasetに描かれた物語全体を通じて、人々や組織を指揮する権限を評価します。0は尺度上の最低値で、指揮権限がない状態、6は王国の行方を左右する規模の指揮権限を表します。 |
| `ashen.combat` | No combat capability | Exceptional combatant | Rates direct combat capability across the story represented in this Dataset. 0 is the scale minimum: no combat capability; 10 is exceptional capability in direct conflict. | 戦闘能力なし | 卓越した戦闘能力 | このDatasetに描かれた物語全体を通じて、直接戦闘を行う能力を評価します。0は尺度上の最低値で、戦闘能力がない状態、10は直接対決で卓越した力を発揮する状態を表します。 |
| `ashen.information` | No information leverage | Can redirect realm events | Rates access to consequential information and the ability to use it to influence events across the story represented in this Dataset. 0 is the scale minimum: no information leverage; 8 can redirect events across the realm. | 情報活用力なし | 王国規模の事態を動かす情報活用力 | このDatasetに描かれた物語全体を通じて、重要な情報を活用し、事態に影響を与える力を評価します。0は尺度上の最低値で、情報による影響力がない状態、8は王国規模の事態を動かせる状態を表します。 |
| `ashen.arcane` | No arcane power | World-shaping power | Rates supernatural or arcane power across the story represented in this Dataset. 0 is the scale minimum: no arcane power; 12 is power capable of changing the realm's fate. | 魔術的な力なし | 王国の運命を変える魔術的な力 | このDatasetに描かれた物語全体を通じて、超常的・魔術的な力を評価します。0は尺度上の最低値で、その力を持たない状態、12は王国の運命を変え得る力を表します。 |
| `ashen.healing` | No healing practice | Master healer | Rates the skill to treat injury or illness across the story represented in this Dataset. 0 is the scale minimum: no healing practice; 6 is exceptional restorative skill. | 治療の技術なし | 卓越した治療能力 | このDatasetに描かれた物語全体を通じて、負傷や病を治療する技術を評価します。0は尺度上の最低値で、治療の技術がない状態、6は卓越した治療能力を表します。 |
| `ashen.diplomacy` | Ineffective negotiator | Exceptional negotiator | Rates negotiation and tactical bargaining ability across the story represented in this Dataset. It measures skill, not whether that skill is used for peace, political strategy, or division. 0 is the scale minimum; 5 is exceptional negotiating ability. | 交渉が不得手 | 卓越した交渉力 | このDatasetに描かれた物語全体を通じて、交渉や駆け引きの能力を評価します。和平に用いるか、政治的策略や分裂に用いるかは評価しません。0は尺度上の最低値、5は卓越した交渉能力を表します。 |
| `ashen.concord` | Deepens division | Builds lasting concord | Rates the net effect on unity and settlement across the whole story represented in this Dataset. Negative values deepen division, 0 is a neutral overall effect, and positive values contribute to lasting concord. | 分裂を深める | 長く続く和議を築く | このDatasetに描かれた物語全体を通じて、和解や共同体のまとまりに与える総合的な影響を評価します。負の値は分裂を深め、0は中立的な総合影響、正の値は長く続く和議への貢献を表します。 |

The endpoints clarify scale bounds; values between them are integer points on
that Dimension's own scale. They do not establish a shared unit across
Dimensions.

## Minimum new Candidate proposal

### Version

Proposal: define `0.2.0` as a new exact Candidate version under the existing
Candidate Extension identifier. This is an additive Candidate revision only;
it does not register or promote a Stable Extension. Candidate 0.1.0 and its
schema remain unchanged.

The version number itself requires Human approval. The reason to propose a
new exact version is that 0.1.0 fixes `specVersion` to `"0.1.0"` and its
Dimension object schema rejects additional properties. A Description-bearing
payload cannot truthfully claim conformance to 0.1.0.

### Proposed field contract

Add this optional member to a Dimension definition in the new version:

| Field | Proposed requirement | Proposed meaning |
| --- | --- | --- |
| `description` | OPTIONAL string | Plain human-readable explanation of the Dimension, its scale, and any shared temporal premise. It is not machine-interpreted and does not alter bounds or Assessment meaning. |

Proposed minimal boundaries:

- No Markdown semantics, structured rubric, temporal field, Assessment rationale,
  evidence, or provenance field.
- No line-break normalization or trimming rule is proposed yet.
- A missing field means no Description is supplied. Whether an empty or
  whitespace-only string is allowed, and whether any length limit is needed,
  remain Human decisions.
- Descriptions do not create multiple Assessments or time-indexed values.
- Existing `min`, `max`, `integerOnly`, `unit`, endpoint-label, identity, and
  missing-versus-zero rules remain unchanged.

### Compatibility and implementation boundary

Candidate 0.1.0 processors must continue to use the 0.1.0 schema and rules. A
consumer that does not support the new exact version must not reinterpret its
payload as 0.1.0; existing Candidate guidance says unsupported payloads should
be preserved whenever practical, and a writer that cannot preserve them must
refuse an unrelated write that would drop or rewrite them. This is safe
versioned compatibility, not transparent support by old processors.

After Human approval, work should be accepted in separate checkpoints:

1. Candidate version, wording, and schema semantics in E2R-SPEC.
2. Focused Candidate validation and appropriate production Validator support.
3. ParameterPlotter import/export preservation and Dimension Description
   authoring/display surfaces.
4. Canonical English Dataset, with the approved seven Dimensions and 70 values.
5. Japanese Dataset, preserving the same Core IDs, Dimension IDs, scales, and
   values while using approved Japanese names, labels, and Descriptions.
6. ParameterPlotter bundled sample refresh after canonical sample acceptance.

Validator and application support must recognize the exact new version and
must not silently strip Description or downgrade the payload. The specific
Validator repositories, UI surfaces, migration behavior, and test matrix need
Human-approved scope before implementation. Candidate 0.1.0 is not modified
by any of these proposals.

## Human decisions still required

The seven Dimensions and all 70 values above are already adopted and do not
require re-approval. Human review is requested only for:

1. The exact new Candidate version number and field contract.
2. Whether Description accepts empty/whitespace-only text, line breaks, and a
   length limit; and whether plain text is interpreted without Markdown.
3. The proposed English and Japanese endpoint labels and Descriptions,
   especially the interpretation of the `0` labels and the distinction
   between Diplomatic Skill and Contribution to Concord.
4. The exact Validator and ParameterPlotter implementation scope and the
   acceptance boundary for unsupported-version preservation.
5. The canonical EN/JA sample update checkpoint and when ParameterPlotter's
   bundled copy should be refreshed.

## Worktree and validation note

This record does not edit Candidate 0.1.0, schemas, validators, runtime,
canonical samples, or bundled samples. Existing unrelated dirty and untracked
work is retained. Documentation validation is recorded with the commit for
this file only.
