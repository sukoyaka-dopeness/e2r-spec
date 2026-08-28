# Status

**PLANNING DIRECTION RECORDED / FUTURE DESIGN AUDIT REQUIRED / IMPLEMENTATION
NOT AUTHORIZED**

This R2 record supersedes the earlier committed planning checkpoint
`14a0284` where `接続` was recorded as the preferred Japanese endpoint
grouping candidate. That historical commit remains unchanged; its wording is
withdrawn and is not retained as an accepted alternative.

This document records only a future UI and directionality planning direction.
It does not change the E2R Core, an Extension, a schema, a Validator, or
either application. It does not make bidirectional or undirected Relations
valid.

# Superseded wording

The withdrawn candidate was:

```text
接続
```

The current preferred Japanese endpoint vocabulary is:

```text
接続先
```

The distinction is intentional:

```text
つながり = the Relation Object itself
接続先   = the Object or Objects connected by that Relation
```

The earlier `接続` wording is superseded because `つながり` and `接続` are
too close as neighboring ordinary-user concepts. `接続先` more clearly
describes the connected Object information. The supersession is recorded in
this new commit rather than by rewriting the earlier commit.

# Current Relation baseline

The current Core requires every Relation to contain `sourceId` and `targetId`.
Each identifier resolves to an Entity or Event in the same Dataset. Relations
may be self-relations, and Relations must not target another Relation.

The current Relation model is directed structurally:

```text
source → target
```

The Core does not assign domain meaning such as causality, ownership, or
chronology to that direction. Such meaning belongs to an Extension or an
Application. No accepted Core semantics for bidirectional or undirected
Relations supersede this baseline.

# Relation vs endpoint vocabulary

The established Japanese user-facing vocabulary for the Relation itself
remains `つながり`. This checkpoint does not rename it to `接続`, `接続関係`,
or `リレーション`.

The preferred future user-facing vocabulary for information about the Objects
at a Relation's ends is `接続先`. It distinguishes the Relation from the
connected Object information without assuming that every connected Object is
an Entity.

This is a user-facing planning distinction, not a new Core field or a change
to canonical Relation data.

# Meaning of 接続先

`接続先` does **not** mean only `target`.

It is intended to mean the Object or Objects connected by the Relation,
covering endpoint information generally. A directed Relation still retains
canonical `source` and `target` semantics internally and in the specification.
Both sides may be presented under a future endpoint-oriented `接続先` concept.

The final UI may use one `接続先` section, an endpoint-level label, or another
composition. This record does not decide whether the term appears once, once
per endpoint, or in another DOM structure.

# Technical endpoint terminology

The technical/specification concept remains `endpoint`. It must not be
renamed to `接続先` in normative identifiers, schema property names, code
identifiers, or technical terminology merely because `接続先` is a candidate
Japanese UI term.

The layers remain distinct:

| Layer | Term |
| --- | --- |
| technical/specification concept | `endpoint` |
| canonical directed fields | `source` / `target` and `sourceId` / `targetId` |
| Japanese user-facing endpoint vocabulary | `接続先` |
| Japanese Relation vocabulary | `つながり` |

# Entity / Event endpoint presentation

Future UI should keep the actual connected Object type available where useful.
At minimum, the design must be able to distinguish:

- Entity (`エンティティ`); and
- Event (`できごと`).

Other endpoint Object types may be considered only if a later valid E2R design
explicitly permits them. A generic `接続先` label must not falsely imply that
every endpoint is an Entity.

An illustrative, non-final presentation is:

```text
接続先
- エンティティ: A
- できごと: B
```

The punctuation, layout, and exact labels are not accepted by this record.

# Current 始点 / 終点 validity

Because the current Relation model is directed, the current Japanese labels
remain valid:

- `始点`;
- `終点`.

They are direction-specific role labels. They are not being removed,
deprecated, or replaced in the current UI. `接続先` is a future generic
endpoint vocabulary, not a correction to the current directed labels.

# Direction and arrow consistency for the ordinary directed form

For the ordinary directed presentation of a Relation:

```text
source = A
target = B
```

the ordinary visual direction normally corresponds to:

```text
A → B
```

The arrow must not imply causality, ownership, chronology, or another domain
meaning unless a supported Extension or Application contract provides that
meaning. Direction-neutral endpoint vocabulary does not remove the requirement
to keep the ordinary directed structural meaning truthful.

# Historical R2 reverse-direction constraint (superseded)

The following section preserves the R2 planning direction for history. Its
requirement that a future visual reverse must swap canonical source and target
is superseded by the current planning direction below and is not current
implementation authorization.

If a future UI offers a reverse-direction operation, semantic reversal must
swap the canonical source and target roles:

```text
before: source = A, target = B, presentation = A → B
after:  source = B, target = A, presentation = B → A
```

A presentation-only reversal is not authorized. Keeping `source = A` and
`target = B` while drawing an arrow that implies the opposite direction would
contradict canonical Relation meaning. Reverse-direction editing requires a
separate semantic, identity, Dataset-safety, and acceptance design.

# Superseding current directionality planning

The R2 requirement above is now superseded. The current planning intent is
that graph directionality may be presented as an application or visualization
choice while the canonical Core Relation remains unchanged:

```text
Dataset: sourceId = A, targetId = B

ordinary visual form:      A → B
reverse visual form:       A ← B
undirected visual form:    A — B
bidirectional visual form: A ↔ B
```

The forms and glyphs are illustrative only. No exact iconography, control, or
visual directionality schema is accepted by this record.

In these future visual forms, `sourceId = A` and `targetId = B` are not
automatically swapped merely because the graph appearance changes. The visual
choice must not be presented as a change to canonical Relation semantics, and
it must not cause the application to infer causality, ownership, chronology,
or another domain meaning. The later `REL-DIRECTIONALITY1` audit must define
how this presentation responsibility coexists with the Core structural
direction and the existing Presentation/Application Visualization boundaries.

If current Research responsibility wording says that Presentation must not
override or misrepresent Core semantic direction, that evidence is retained.
Current planning status: **PLANNING DIRECTION REQUIRES RESEARCH
RESPONSIBILITY RECONCILIATION**. The required result is a responsibility
reconciliation, not a silent rewrite of the normative specification. No Core,
schema, or Directionality Extension change is authorized here.

# Reverse presentation and human-authored text

A future visual directionality choice must not automatically rewrite a
Relation's human-authored `name` or `description`. For example, reversing the
appearance of a Relation named `mentor`, `apprentice`, `supervisor`, or
`subordinate` does not tell the application how the user's prose should
change. Any semantic editing operation and any presentation choice require
separate future design decisions.

# Bidirectional boundary

One future bidirectional Relation must not be assumed equivalent to two
independent directed Relations:

```text
A ↔ B

A → B
B → A
```

The alternatives may differ in identity, editing, deletion, History, Handoff,
round-trip behavior, interoperability, and presentation. No bidirectional
schema, serialization, normalization rule, or runtime support is selected.

# Undirected boundary

An undirected Relation must not be modeled merely as a directed Relation with
its arrow hidden. A form such as `A — B` requires explicit decisions about
endpoint roles, source/target compatibility, canonical ordering, identity,
serialization, validation, editing, deletion, History, Handoff,
interoperability, and presentation.

The word `先` in `接続先` does not by itself make the term directed-only. The
planning interpretation is the Object or Objects to which a Relation is
connected, so the word may remain viable if a later design introduces an
undirected Relation. This linguistic observation does not authorize undirected
Relation semantics.

# Cross-App implications

LiaisonScape currently presents an Entity-oriented graph, while its supported
Core rule allows a Relation endpoint to be an Entity or Event. A future
`接続先` term should remain natural in that graph-oriented context without
changing current Relation Detail, labels, arrows, or editing behavior.

NarrativeLine may present Relations involving both Entity and Event Objects.
Its future vocabulary must therefore avoid Entity-only wording. The common
conceptual distinction is:

```text
つながり = the Relation
接続先   = the connected endpoint Objects
```

Cross-App parity means equivalent semantic readability, not identical DOM,
CSS, geometry, or final wording in every context.

# English vocabulary boundary

No English counterpart for `接続先` is finalized here. `Endpoints` is a
preferred candidate for a later EN/JA vocabulary audit; candidates such as
`Connections` and `Connected objects` have not been evaluated. `Endpoints`
is not normative or accepted English vocabulary in this checkpoint.

Future direction-neutral English vocabulary remains **TBD**. Current
`Source` / `Target` remains valid for the current directed UI.

# Future UI questions

A later `REL-DIRECTIONALITY1` audit should evaluate:

1. the exact UI role of `接続先`;
2. section heading versus endpoint-level label;
3. continued visibility of 始点/終点 for directed Relations;
4. Entity/Event and other future Object-type presentation;
5. directed reverse editing;
6. bidirectional semantics;
7. undirected semantics;
8. Core versus Extension responsibility;
9. canonical endpoint ordering;
10. schema and Validator implications;
11. Relation identity;
12. deletion implications;
13. History implications;
14. Handoff implications;
15. LiaisonScape presentation and editing;
16. NarrativeLine presentation;
17. EN/JA vocabulary; and
18. interoperability with existing directed Datasets.

This audit is not performed by this record.

# Explicit exclusions

This checkpoint does not implement or authorize:

- changes to Core, Extensions, schemas, or Validator behavior;
- changes to current `つながり`, `始点`, `終点`, `Source`, or `Target` UI;
- reverse-direction controls or presentation-only arrow reversal;
- bidirectional or undirected Relations;
- changes to LiaisonScape, NarrativeLine, Hub, or runtime tests;
- Relation deletion, Capability Handoff, Relation blocker cards, or Event identity;
- metadata, generic dialog spacing, destructive styling, Flatness, display-order,
  layout, routing, or endpoint-separator work; or
- changes to ai-knowledge.

The current directed Relation model and current directed UI remain valid. No
new reusable workspace knowledge entry is required for this E2R-specific
vocabulary and future-directionality planning record.

# Suggested future audit

Use the bounded workstream name:

`REL-DIRECTIONALITY1 — Relation Directionality / Endpoint UI Audit`

The later audit should treat `接続先` as the preferred Japanese generic
endpoint vocabulary, retain `endpoint` as the technical concept, keep
`つながり` for the Relation itself, retain explicit Object types where useful,
and define how alternate visual forms coexist with canonical source/target
without silently redefining Dataset meaning.

It must produce an explicit semantic decision before any runtime, schema, or
Core work. This workstream is not the immediate next implementation and is not
accepted as a Core or schema design by this record.
