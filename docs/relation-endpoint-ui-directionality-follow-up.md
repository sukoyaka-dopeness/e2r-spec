# Status

**PLANNING DIRECTION RECORDED / FUTURE DESIGN AUDIT REQUIRED / IMPLEMENTATION
NOT AUTHORIZED**

This document records a future UI and directionality design direction. It does
not change the E2R Core, an Extension, a schema, a Validator, or either
application. It does not make a bidirectional or undirected Relation valid.

The current directed Relation UI remains valid. The future planning principle
is that `始点` / `終点` and `Source` / `Target` are roles for a directed
Relation, not universal names for every possible future endpoint presentation.

# Why this follow-up exists

E2R Relations currently have structural direction from `sourceId` to
`targetId`. LiaisonScape and NarrativeLine therefore use direction-specific
endpoint labels. Future work may investigate reversing a directed Relation or
supporting bidirectional or undirected semantics. Those possibilities would
make a permanently universal `始点` / `終点` vocabulary misleading.

The future design should separate the generic grouping of connected Objects,
the actual Object type at each endpoint, and a direction-specific role when
such a role exists. This is a vocabulary and semantic-design question, not a
current presentation defect.

# Current directed Relation baseline

The current Core requires every Relation to contain `sourceId` and `targetId`.
Each identifier resolves to an Entity or Event in the same Dataset. Relations
may be self-relations, and Relations must not target another Relation.

The Core defines direction structurally but does not assign domain meaning to
it. Meaning such as causality, ownership, or chronology belongs to an
Extension or Application. The current directed form is:

```text
source → target
```

Current LiaisonScape and NarrativeLine Source/Target or 始点/終点 presentation
accurately reflects this baseline and is not deprecated by this follow-up.

# Technical endpoint vs user-facing grouping

The technical specification term remains `endpoint`. It identifies one side
of a Relation and must not be renamed to `接続` in the Core or schema.

The proposed Japanese user-facing grouping candidate is `接続`. It is a
direction-neutral heading for the Objects connected by a Relation. The
distinction is therefore:

| Responsibility | Term or direction |
| --- | --- |
| technical/specification concept | `endpoint` |
| Japanese user-facing grouping candidate | `接続` |
| directed endpoint role | `始点` / `終点` |

`接続` is not an accepted field name, Core keyword, or universal translation
of `endpoint`. Exact final placement and syntax require a later design audit.

# Japanese UI vocabulary direction

When a future Relation UI groups its connected Objects, prefer the generic
heading:

```text
接続
```

This is preferred over the more technical `端点` and over the Entity-specific
`接続するエンティティ`. It does not assume that every connected Object is
an Entity, and it can serve both LiaisonScape's graph-oriented view and
NarrativeLine's Entity/Event-capable Relation presentation.

This is a planning direction only. It does not authorize changing current
labels, introduce a localization contract, or settle punctuation or exact
layout.

# Object-type presentation

Where useful, a future UI should keep the actual connected Object type
explicit, including at least:

- Entity;
- Event; and
- any other endpoint Object type that a later valid design explicitly permits.

The intended conceptual hierarchy is:

```text
接続
  → connected Object entry
  → actual Object type
  → human-readable Object identity
  → direction role when applicable
```

The UI should not conceal an Event endpoint by assuming an Entity, and it
should not introduce a generic user-facing `Object` label without a separate
design decision. This record does not prescribe DOM, component, or geometry.

# Directed source / target roles

For the current directed Relation, these roles remain valid:

| Language | First role | Second role |
| --- | --- | --- |
| English | Source | Target |
| Japanese | 始点 | 終点 |

They are meaningful because the current Relation has canonical `sourceId` and
`targetId` fields. They are not being removed, deprecated, or replaced by
`接続`. A future direction-neutral presentation may omit role labels only
after the semantics of the future Relation variant are explicitly decided.

# Reverse-direction constraint

If a future UI offers a reverse-direction operation for a directed Relation,
the operation must change the canonical Relation meaning by swapping the
source and target roles:

```text
before: source = A, target = B, presentation = A → B
after:  source = B, target = A, presentation = B → A
```

A presentation-only reversal is not authorized. The state `source = A,
target = B` must not merely be drawn as `A ← B`, because that would make the
arrow contradict the canonical source/target semantics. Reverse-direction
editing requires its own semantic, Dataset-safety, identity, and acceptance
design before implementation.

# Bidirectional Relation boundary

A future bidirectional Relation must not be equated with two independent
directed Relation Objects without an explicit semantic decision. The following
may have different identity, editing, deletion, History, Handoff, and
interoperability behavior:

```text
A ↔ B

A → B
B → A
```

No bidirectional schema, serialization form, normalization rule, or runtime
support is selected here. The existing roadmap's bidirectional Cross-App
Relation-deletion acceptance concerns deletion interoperability, not adoption
of bidirectional Relation semantics.

# Undirected Relation boundary

An undirected Relation must not be treated as a directed Relation with its
arrow hidden. A form such as `A — B` raises separate questions about endpoint
identity, canonical ordering, source/target compatibility, serialization,
validation, editing, deletion, History, Handoff, interoperability, and
presentation.

Undirected Relations remain a future design question. No Core or Extension
representation, conversion rule, or UI behavior is authorized by this record.

# Cross-App implications

LiaisonScape currently presents an Entity-oriented graph while preserving the
Core rule that Relation endpoints may be Entity or Event. Its current
direction display follows `sourceId` to `targetId` when direction is shown.

NarrativeLine may present Relations involving Entity and Event Objects. An
Entity-specific grouping phrase is therefore insufficient as a future common
direction. Both applications should be considered by a later audit, while
their current UI remains unchanged.

The intended Cross-App target is equivalent semantic readability, not
identical DOM, CSS, dialog geometry, or vocabulary in every context.

# English vocabulary boundary

No new English UI vocabulary is finalized here. `Connections` may be an
obvious candidate corresponding to `接続`, but it has not been evaluated or
accepted.

English wording remains **TBD / future cross-locale design** unless an
existing accepted documentation contract independently resolves it. Current
`Source` / `Target` remains valid for directed Relations.

# Future design questions

A later `REL-DIRECTIONALITY1` audit should examine, at minimum:

1. directed reverse editing;
2. bidirectional Relation semantics;
3. undirected Relation semantics;
4. Core versus Extension responsibility;
5. canonical endpoint ordering;
6. Validator implications;
7. round-trip preservation;
8. History implications;
9. Relation identity;
10. deletion semantics;
11. Handoff targeting;
12. LiaisonScape editing and presentation;
13. NarrativeLine presentation;
14. EN/JA vocabulary and localization; and
15. interoperability with existing directed Datasets.

It should also compare exact user-facing grouping, Object-type disclosure,
role labels, accessibility names, narrow layouts, and migration/refusal
behavior without silently changing existing directed data.

# Explicit exclusions

This checkpoint does not implement or authorize:

- changes to Core, Extensions, schemas, or Validator behavior;
- reverse-direction controls or reverse-direction editing;
- bidirectional or undirected Relations;
- presentation-only arrow reversal;
- changes to current Source/Target or 始点/終点 UI;
- changes to LiaisonScape, NarrativeLine, Hub, or runtime tests;
- Relation deletion, Capability Handoff, Relation blocker cards, or Event identity;
- LiaisonScape metadata, generic dialog spacing, Flatness, or endpoint-separator
  work; or
- changes to ai-knowledge.

The current directed Relation model and current directed UI remain valid. No
new reusable workspace knowledge entry is required for this E2R-specific
planning record.

# Suggested future workstream

Use the bounded planning name:

`REL-DIRECTIONALITY1 — Relation Directionality / Endpoint UI Audit`

That future audit should produce an explicit semantic decision before any
runtime or schema work. It should keep `endpoint` as the technical concept,
evaluate `接続` as the Japanese grouping direction, retain explicit Object
types where useful, and treat 始点/終点 as directed-only roles.

This workstream is not the immediate next implementation and is not accepted
as a Core or schema design by this record.
