# Lighthouse Dashed Showcase Semantic Decision

- Date: 2026-08-30
- Status: `READY — LIGHTHOUSE DASHED SHOWCASE SEMANTICS DEFINED`
- Trigger: the residual audit `35616b6 docs: audit LiaisonScape Validator release residuals` classified the absent dashed showcase as `D1 — R1 USER-INTENT GAP`.

## User-intent gap

The accepted Lighthouse sample uses dotted for the existing personal
friendship, while no Relation uses dashed. The request is for one meaningful
sample-local dashed use, not for a global interpretation of `lineStyle`, a new
Relation type system, or a fabricated spouse/family story.

## Public GitHub evidence

The public LiaisonScape repository was inspected read-only through its public
EN/JA Lighthouse JSON and `tests/lighthouse-sample.test.ts`. The public sample
contains the older published baseline and may lag the accepted local semantic
revision. The public e2r-spec repository was also checked read-only; local
unpushed decision/result documents remain the semantic authority. Public
evidence therefore establishes provenance and divergence, not authority over
the current local decision.

## Local semantic authority

The local authority is the current e2r-spec canonical EN/JA sample and these
decision/result records:

- `docs/lighthouse-semantic-enrichment-decision.md`
- `docs/lighthouse-presentation-and-legibility-revision-decision.md`
- `docs/lighthouse-presentation-semantic-revision-implementation-result.md`
- `docs/liaisonscape-validator-release-residual-audit.md`
- the public-sample ownership and provenance decision/result documents

The LiaisonScape mirror and `tests/lighthouse-sample.test.ts` were inspected
read-only for parity evidence.

## Current Lighthouse state

The local canonical EN/JA samples have 10 Entities, 11 Events, and 28
Relations. Fourteen Relations connect Entity-to-Entity endpoints and are
visible in the graph. The current Presentation records are:

- `clara-lighthouse`: `arrowDisplay: "reverse"`
- `thomas-maya-friends`: `arrowDisplay: "undirected"`, `lineStyle: "dotted"`
- `clara-maya`: `arrowDisplay: "bidirectional"`

All other line styles are implicit solid; the current dashed count is zero.
The current added `thomas-maya-friends` Relation is the only friendship
Relation. `beacon-lighthouse-installed-in` remains present without an
explicit Presentation record.

## Visible Relation semantic inventory

| Relation ID | EN name | JA name | endpoints | current arrowDisplay | current lineStyle | semantic category | narrative evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `clara-thomas-supervises` | supervises | 監督する | Clara → Thomas | normal (implicit) | solid (implicit) | professional hierarchy | Clara is restoration project lead; Thomas supports the team. |
| `clara-thomas-mentors` | mentors | 指導する | Clara → Thomas | normal (implicit) | solid (implicit) | mentoring | The Relation itself states mentoring; no extra biography is required. |
| `clara-maya` | works with | 協力する | Clara ↔ Maya visually | bidirectional | solid (implicit) | collaboration | Clara, Thomas, and Maya begin restoration work together. |
| `elias-clara` | advises | 助言する | Elias → Clara | normal (implicit) | solid (implicit) | advice | Elias is a former keeper who knows the site's history and advises Clara. |
| `sofia-elias` | interviews | 聞き取りをする | Sofia → Elias | normal (implicit) | solid (implicit) | interview / information gathering | Sofia is documenting history and interviews Elias. |
| `daniel-clara` | coordinates with | 調整する | Daniel → Clara | normal (implicit) | solid (implicit) | coordination | Daniel coordinates local support and reports the fundraising milestone. |
| `maya-beacon` | maintains | 保守する | Maya → Beacon | normal (implicit) | solid (implicit) | maintenance | Maya is responsible for the beacon system. |
| `sofia-archive` | works with | 協力する | Sofia → Archive | normal (implicit) | solid (implicit) | collaboration | Sofia is the archivist documenting the lighthouse history. |
| `clara-lighthouse` | leads restoration of | 修復を率いる | Clara → Lighthouse | reverse | solid (implicit) | institutional/project leadership | Clara is the restoration project lead. |
| `beacon-self-monitor` | self-monitors | 自己監視する | Beacon → Beacon | normal (implicit) | self/system behavior | The Relation description states that the system monitors its condition. |
| `beacon-self-calibrate` | self-calibrates | 自己調整する | Beacon → Beacon | normal (implicit) | self/system behavior | The Relation description identifies a second maintenance loop. |
| `authority-lighthouse` | administers | 管理する | Authority → Lighthouse | normal (implicit) | institutional management | The public authority is responsible for the harbor and lighthouse grounds. |
| `thomas-maya-friends` | friends with | 友人 | Thomas ↔ Maya visually | undirected | dotted | personal friendship | This is the explicitly accepted friendship Relation. |
| `beacon-lighthouse-installed-in` | is installed in | 設置されている | Beacon → Lighthouse | normal (implicit) | object containment | The beacon system is described as equipment inside the lighthouse. |

This is an analysis inventory only; it does not define a normative Relation
taxonomy.

## Narrative evidence

The sample supports durable project roles, collaboration, advice, an explicit
friendship, institutional responsibility, equipment containment, and a
specific interview. It also contains dated events for discovery, appointment,
project work, testing, and reopening. The strongest evidence for an episodic
or bounded interaction is `sofia-elias`: Sofia is an archivist documenting the
lighthouse's history, and the Relation explicitly says she interviews Elias,
whose historical knowledge is stated. No spouse, romance, family, employment
contract, or other biography is inferred.

## Candidate strategies

### C1 — Existing Relation receives dashed

Candidates evaluated were advice, interview, coordination, and mentoring.
`sofia-elias` is the strongest candidate because an interview is a bounded
information-gathering interaction, clearly distinct from friendship and from
ongoing structural/project work. Advice and mentoring can be ongoing support;
coordination is part of the continuing restoration effort. Giving any of
those dashed treatment would be less clear from the available evidence.

### C2 — Add one new personal Relation

Rejected. The sample does not provide evidence for a new personal Relation
stronger than the accepted Thomas/Maya friendship. Adding one merely to obtain
dashed coverage would invent biography and add unnecessary topology.

### C3 — Reallocate friendship style

Rejected. The accepted friendship choice is undirected plus dotted. It is an
explicitly supported personal relationship and already has a coherent visual
distinction. No stronger evidence shows that dotted friendship is wrong.

### C4 — Keep dashed absent

Rejected as the final decision. It would leave the previously recorded user
intent gap unresolved, while `sofia-elias` supplies a supported, bounded
existing Relation candidate.

## Candidate comparison

| Candidate | Narrative support | Semantic clarity | EN/JA symmetry | No invented biography | Showcase value | Future Auto Layout independence | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C1: `sofia-elias` interview | HIGH | HIGH | HIGH | HIGH | HIGH | HIGH | selected |
| C1: advice / coordination / mentoring | MEDIUM | MEDIUM | HIGH | HIGH | MEDIUM | HIGH | rejected as less distinct |
| C2: one new personal Relation | LOW | LOW | uncertain | LOW | MEDIUM | HIGH | rejected |
| C3: friendship style reallocation | HIGH | LOW | HIGH | HIGH | MEDIUM | HIGH | rejected |
| C4: dashed absent | HIGH | HIGH | HIGH | HIGH | LOW | HIGH | rejected; gap remains |

## Selected decision

**DASHED-A — EXISTING RELATION**

The existing Relation `sofia-elias` becomes the single dashed showcase. Its
Core Relation, endpoints, and names remain unchanged. The selected distinction
is a bounded interview/information-gathering interaction, not a new E2R
semantic category.

## Sample-local dashed rationale

In this Lighthouse sample, dashed is used for a bounded interview or
information-gathering interaction: Sofia's documented interview with Elias.
Friendship remains dotted, while ordinary work, project, institutional, and
technical Relations remain solid. This vocabulary is local to this sample and
does not assign a general meaning to dashed across E2R.

## Friendship dotted rationale

Friendship remains `thomas-maya-friends`, with undirected display and dotted
line. Dotted marks the sample's personal friendship distinction; it is not
replaced merely to create dashed coverage.

## Spouse decision

`SPOUSE-NO — PRESERVED`. No exact new evidence reopens the accepted spouse
decision, and no spouse Relation is added.

## Exact implementation contract

The later implementation checkpoint may make exactly one Presentation-only
change:

- Relation ID: `sofia-elias`
- Core Relation: unchanged
- EN name: `interviews` unchanged
- JA name: `聞き取りをする` unchanged
- `arrowDisplay`: unchanged, implicit `normal`
- add only `lineStyle: "dashed"` to its Presentation record
- canonical EN/JA Presentation payloads: structurally identical
- no Coordinate or Event change
- no Dataset version change
- Relation count remains 28

Expected Presentation relation-key set after implementation:

```text
clara-lighthouse
clara-maya
sofia-elias
thomas-maya-friends
```

The friendship remains undirected+dotted and all other explicitly represented
arrow choices remain unchanged.

## EN/JA parity

The later EN and JA payloads must add the same relation key and the same
`lineStyle` token. Only the human-readable Core names remain localized. No
localized semantic divergence is permitted.

## Presentation payload impact

Only the sample-local Presentation Extension changes. Its `specVersion`
remains `0.1.0`; the exact Specification declaration remains unchanged; and
the new value is already supported by Validator 0.4.0 RC.

## Core Relation impact

None. No Core field, endpoint, direction, Relation name, Event, Entity, or
global E2R meaning changes.

## Relation count impact

The total remains 28 and the visible Entity-to-Entity count remains 14. No
reciprocal duplicate Relation is introduced.

## Visual/routing considerations

`sofia-elias` is an ordinary directed Relation, not a self-Relation or a
parallel Relation, and its current route can display a dashed stroke clearly.
This decision was made from semantics rather than route convenience. No route
geometry or CSS retuning is authorized here. Clara-central arrangement and
topology-aware whole-graph placement remain the separate R2 Explicit Auto
Layout / Re-layout feature.

## Validator impact

No Validator code or schema change is required. Validator 0.4.0 RC already
supports `lineStyle: "dashed"` in Presentation 0.1.0. This later change is a
valid Presentation-only addition and remains read-only validation behavior.

## Specification impact

No Core or Extension specification change is required. The meaning is
explicitly sample-local visual vocabulary, not a normative E2R semantic
definition.

## Automatic Layout boundary

Unchanged: **R2 — Explicit Auto Layout / Re-layout** remains separate. This
decision does not move Clara, recalculate Coordinates, or alter placement
ownership.

## Public Sample Acceptance impact

Yes. The selected semantic decision must be implemented and verified before
Public Sample Formal Acceptance because it addresses the final Lighthouse R1
user-intent gap. Formal Acceptance is not resumed by this decision checkpoint.

## Superseded clauses

The later implementation, once accepted, will supersede only the affected
sample-local clauses in `docs/lighthouse-presentation-and-legibility-revision-decision.md`
and `docs/lighthouse-presentation-semantic-revision-implementation-result.md`
that state:

- dashed is unused or there is no dashed showcase;
- the final Presentation relation-key set excludes `sofia-elias`.

The Lighthouse sample test assertion that there is no dashed showcase is also
identified for later update. Historical documents and the historical test are
not rewritten in this decision checkpoint.

## Preserved decisions

Preserved: friendship dotted and undirected; `SPOUSE-NO`; all 10 Entities, 11
Events, and 28 Relations; all Core endpoint semantics; EN/JA parity;
Specification uses and Presentation ID/version; Coordinates; provenance and
canonical ownership; Validator 0.4.0 RC; and the separation of Auto Layout
from initial placement.

## Exclusions

No canonical sample JSON, LiaisonScape mirror JSON, runtime, CSS, tests,
Validator, package file, schema, roadmap, NarrativeLine, Hub, or ai-knowledge
file is changed by this decision.

## Implementation NOT STARTED

The `sofia-elias` dashed Presentation change is **NOT STARTED**. This document
records the later implementation contract only.

## Publication NOT STARTED

Validator publication, consumer dependency updates, Public Sample Formal
Acceptance, Explicit Auto Layout, final release audit, push, tag, and deploy
are **NOT STARTED**.
