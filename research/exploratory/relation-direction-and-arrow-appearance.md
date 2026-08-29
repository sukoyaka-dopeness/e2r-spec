# Relation Direction and Arrow Appearance — Post-MVP Research Memo

## Status

Exploratory post-MVP memo. This document does not register an Extension, change
the Core Specification, or select a final representation.

## Motivation

After the LiaisonScape MVP, users are expected to want more control over how
Relations are interpreted and displayed:

- reverse an existing Relation;
- create the opposite Relation to express a two-way structure;
- represent or display a relation without directional emphasis;
- choose arrowheads at the source, target, both ends, or neither end.

These requests look like one arrow-setting feature in the UI, but they combine
Core structure, relation semantics, and visualization appearance. They should be
designed as separate responsibilities before application implementation begins.

## Current Core boundary

The Core Relation has `sourceId` and `targetId`. Relation direction is structural,
but the Core does not assign semantic meaning to that direction and does not
define a Relation type. A Relation may be self-referential, and multiple
Relations may connect the same endpoints.

Therefore, the following are distinct operations:

### Reverse the existing Relation

Change `A → B` to `B → A` by exchanging the Core endpoints. This is within the
current Core model and can be an early LiaisonScape editing feature.

### Create a two-way structure

Create two Core Relations, `A → B` and `B → A`. This represents two assertions
or two directed facts. It must not be silently treated as one symmetric
Relation.

### Express semantic symmetry

A single Core Relation may have a semantic definition that says its predicate
is symmetric, such as “sibling of” or “communicates with”. The Core Relation
still has structural source and target endpoints; semantic symmetry belongs to
a semantic Extension or dictionary definition.

### Hide directional appearance

Removing arrowheads is a presentation choice. It must not convert a directed
Core Relation into an undirected semantic relation.

## Responsibility split

### Semantic directionality

The semantic layer may eventually describe properties of a reusable Relation
meaning, for example:

```text
parent of
  symmetric: false
  inverse: child of

sibling of
  symmetric: true
```

This is a candidate for the Dictionary/Semantic workstream. The exact property
names, validation rules, inverse-meaning model, identity, versioning, and
applicability remain open.

An inverse definition is not the same as automatically creating the inverse
Core Relation. A symmetric definition is not the same as storing two Core
Relations. Applications must not infer new assertions without an explicit
authoring operation.

### Arrow appearance

Arrowhead choice belongs to Presentation, or to a narrowly scoped future
presentation-related Extension. A candidate conceptual vocabulary is:

```text
source | target | both | none
```

This describes rendering only. It must not be used as the sole source of
interoperable semantic meaning. The same Relation may be rendered with no
arrowheads in one view and with a target arrowhead in another view while its
Core endpoints remain unchanged.

### Layout and geometry

Relation routing, curvature, label position, and relative layering remain
Layout concerns. Arrowhead choice should not be used to encode routing or
coordinate data.

### LiaisonScape application

LiaisonScape may later provide separate actions and controls:

- “Reverse direction”: exchange Core endpoints;
- “Add opposite Relation”: explicitly create the reverse Core Relation;
- semantic information: inspect or edit supported dictionary meaning;
- arrow appearance: choose a supported presentation setting.

The UI should not present “no arrow” as “undirected” or “both arrows” as proof
that two semantic assertions exist.

## Proposed staged workstream

1. **Core-safe editor operation** — add an explicit action to reverse the
   existing Relation, with endpoint-editing and round-trip tests.
2. **Explicit opposite assertion** — add a separate action to create the
   reverse Relation, with clear handling of IDs, names, parallel Relations, and
   self-Relations.
3. **Semantic research** — evaluate whether the existing Dictionary Extension
   can responsibly host symmetric and inverse properties, or whether a more
   focused semantic Extension is required.
4. **Presentation research** — define arrow appearance independently of Core
   direction, Layout, Coordinate, and application view state.
5. **Consumer integration** — implement only the supported semantic and
   presentation profiles in LiaisonScape and preserve unknown data elsewhere.

## Open questions

- Is `symmetric` a property of a dictionary entry, a relation assertion, or
  both?
- Does `inverse` identify another dictionary entry, a relation meaning, or a
  versioned semantic definition?
- How should conflicting or incomplete semantic definitions be diagnosed?
- Should arrow appearance be stored per Relation, per Layout, per Presentation,
  or in application-local view state?
- How should a consumer distinguish an authored arrow setting from a generated
  default?
- How should editing behave when a symmetric or inverse definition is unknown?
- What interoperability evidence is required before registering either
  semantic directionality or arrow appearance as a stable Extension?

## Related documents

- `spec/core.md` — Core `sourceId`, `targetId`, and structural Relation direction
- `extensions/dictionary-extension.md` — reusable Relation meanings
- `extensions/layout-extension.md` — routing and arrangement responsibilities
- `research/exploratory/view-generation.md` — separation of Core, Layout, and
  Presentation
- `docs/application-design-principles.md` — Core/Extension/application
  responsibility boundaries

## Non-goals

This memo does not:

- modify the Core Relation model;
- define a final semantic schema;
- define a final Presentation schema;
- make arrow styling carry semantic truth;
- require changes to LiaisonScape or NarrativeLine now.

## E2R-RELATION-VISUAL-DIRECTIONALITY-AUDIT1 — Research reconciliation

Date: 2026-08-29

Status: **RESEARCH PARTIALLY RECONCILED / SOME VISUAL MODES REQUIRE SEPARATE
DECISION**.

This bounded audit follows the planning direction in
`docs/relation-endpoint-ui-directionality-follow-up.md`. It preserves the
earlier exploratory memo and its historical distinctions; it does not
implement or authorize a directionality control, visual-mode prototype, new
Extension, or Core change.

### Authority and existing Research inventory

The live authority set is:

| Document | Relevant finding | Classification |
| --- | --- | --- |
| `spec/core.md`, Relation Fields | `sourceId` and `targetId` are required, resolve to same-Dataset Entity or Event objects, and establish structural direction. Self-relations and cycles are valid; Relation-to-Relation endpoints are not. | Normative Core authority |
| `spec/philosophy.md`, Presentation Extensions and Application View State | Presentation owns appearance, not semantic meaning; transient zoom, pan, selection, hover, and gesture state remain application concerns. | Normative responsibility guidance |
| `research/exploratory/view-generation.md`, Single source of truth and Relationship Graph | Relation direction comes from Core `sourceId`/`targetId`, not arrow styling; routes and geometry are Layout, while line appearance is Presentation. | Compatible exploratory boundary |
| `research/exploratory/linkscape-layout-and-view-state.md` | Relation direction is Core data; arrow/line appearance is Presentation; route geometry is Layout; View State is not Dataset content. | Compatible application evidence |
| `extensions/layout-extension.md` | Layout describes how positions are displayed without modifying the Core. | Compatible candidate responsibility |
| Earlier sections of this memo | Endpoint reversal, an opposite Relation, semantic symmetry, and hidden arrowheads are different operations. | Compatible exploratory distinction |
| `docs/relation-endpoint-ui-directionality-follow-up.md` | The R2 endpoint-swap constraint is explicitly superseded by a planning intent to investigate presentation-only forms; exact iconography/schema remain unselected. | Superseded history plus clarification target |
| `docs/liaisonscape-relation-attachment-and-arrowhead-result.md` | Current arrowhead orientation is derived from route samples and does not change Dataset persistence or Core data. | Compatible application result, not a directionality decision |

The normative Core and responsibility boundaries take precedence over
application planning. The existing research status `needs-review` for this
exploratory memo remains appropriate for any future schema or runtime work;
this section records the bounded semantic disposition below.

### Canonical Core contract

For one canonical Relation:

```text
sourceId = A
targetId = B
```

the Dataset contains one structurally directed Relation from `A` to `B`.
`sourceId` and `targetId` are canonical structural roles, not interchangeable
display aliases. Core does not assign domain meaning such as causality,
ownership, or chronology to the direction; such meaning belongs to an
Extension or Application.

The audit preserves the other Core constraints: endpoints resolve to Entity or
Event objects in the same Dataset; a self-Relation is valid; parallel
Relations remain distinct Core objects; cycles are allowed; and a Relation
cannot target another Relation. No visual mode changes these facts.

### Reconciliation of the apparent tension

The question has three separate layers:

1. **Dataset semantic truth:** the canonical objects and structural roles in the
   Relation (`sourceId = A`, `targetId = B`);
2. **View/Presentation encoding:** how a visualization emphasizes or does not
   emphasize that structure; and
3. **user interpretation risk:** what a viewer may infer incorrectly from the
   encoding.

“Presentation must not override semantic meaning” is compatible with an
alternative depiction when it means that the view must not claim the
canonical Relation changed. It does not prohibit every non-default visual
orientation, but it requires canonical roles to remain truthful and
discoverable. A visual encoding must not be the only copy of interoperable
meaning.

| Existing statement or direction | Classification | Disposition |
| --- | --- | --- |
| Core direction is structural and owned by `sourceId`/`targetId`. | Compatible. | Remains authoritative and unchanged. |
| Presentation owns appearance, not semantic meaning. | Compatible. | Applies to visual directionality with explicit semantic safeguards. |
| Visualization direction comes from Core endpoints, not arrow styling. | Requires clarification. | It identifies the Dataset source of truth; it is not a ban on a disclosed view orientation or direction-neutral rendering. |
| Removing arrowheads must not create an undirected semantic Relation. | Compatible. | Retained as the minimum undirected-visual boundary. |
| R2 required a reverse visual to swap canonical endpoints. | Genuine historical contradiction with the later planning direction. | Explicitly superseded by `c6f9055`; historical evidence only, not current authority. |
| The planning record lists normal, reverse, undirected, and bidirectional forms. | Requires clarification. | These are candidates with different interpretation risks, not four equally accepted modes. |

The historical contradiction is resolved by explicit supersession, not by
rewriting the old record. The remaining issue is a design boundary rather than
an unresolved Core conflict: a presentation may be visually non-default while
remaining semantically unchanged, but stronger reciprocal-looking encodings
need stronger safeguards.

### Presentation-only mode assessment

The following forms are illustrative concepts only; their glyphs are not
accepted UI, marker, serialization, or schema vocabulary.

| Mode | Candidate visual | Canonical data | Interpretation risk | Disposition |
| --- | --- | --- | --- | --- |
| Normal | `A -> B` | Unchanged | Lowest when used as the default. | Accepted baseline. |
| Reverse visual | `A <- B` | Still `sourceId = A`, `targetId = B` | High: viewers may infer endpoint exchange. | Defensible only as an explicitly identified view orientation, with safeguards; not a semantic reverse operation. |
| Undirected visual | `A — B` | Still structurally `A -> B` | Medium/high: viewers may infer an undirected fact. | Defensible only as explicitly direction-neutral presentation; never as an undirected Core claim. |
| Bidirectional visual | `A <-> B` | Still one Relation `A -> B` | Highest: viewers may infer reciprocal meaning or two Relations. | Not accepted as a generally safe shorthand; separate named-view/presentation decision required. |

The safe reconciled formulation is:

> A View or Presentation may alter how structural direction is visually
> emphasized or depicted, provided it does not silently rewrite canonical
> endpoints, claim that Dataset semantics changed, or use the visual form as
> the only interoperable representation of meaning.

This formulation supports the normal baseline and conditional reverse and
undirected candidates. It does not accept bidirectional appearance merely for
symmetry with the other forms.

### Reverse visual boundary

`A <- B` can represent a reading or view orientation rather than semantic
reversal, but only if the future surface makes that distinction explicit. At a
minimum it would need:

- an indication that the selected mode is a presentation/view mode;
- Relation Detail and canonical inspection surfaces retaining
  `source`/`target` and `sourceId`/`targetId` roles;
- no automatic swap of endpoint identities, IDs, names, descriptions, or
  operation targets; and
- help or equivalent explanation sufficient to prevent treating the visual
  arrow as an endpoint-editing action.

Exact control names, tooltip copy, icons, and endpoint wording remain future UI
work. A semantic reversal is a separate editing operation that exchanges
canonical endpoints and needs its own identity, Dataset-safety, round-trip,
and acceptance design.

### Undirected visual boundary

An arrowless rendering may mean “display this relationship without emphasizing
direction.” It must not mean “this Relation is semantically undirected” unless
a future Core/Extension decision explicitly defines such a model; current Core
does not.

Exported and shared Dataset data therefore retains `sourceId` and `targetId`.
A consumer that does not understand the visual choice can still process the
directed Core Relation, and canonical inspection does not hide its structural
roles. A persisted direction-neutral choice requires a separate responsibility
and interoperability decision; this audit does not create or authorize it.

### Bidirectional visual boundary

A two-headed depiction of one Relation is not equivalent to two independent
Relations:

```text
one Relation:  A -> B

two Relations:
  A -> B
  B -> A
```

Nor is it proof that a semantic predicate is symmetric. Because ordinary
interpretation is close to reciprocal assertions, this audit does not accept
`A <-> B` as an ordinary Presentation option. It remains a candidate for a
narrower explicitly named View/Perspective or separately decided presentation
contract, requiring evidence for identity, Detail, editing, deletion, History,
Handoff, export, and cross-application interpretation.

### Name, description, and identity immutability

Visual directionality never automatically changes Relation `name`, Relation
`description`, `sourceId`, `targetId`, endpoint Entity/Event identity, or any
Core object ID. If an authored Relation name is `Alice supervises Bob`, a
reverse visual does not authorize rewriting it to `Bob is supervised by Alice`.
Presentation controls are not semantic text transforms; a user must separately
edit human-authored content through an explicit semantic workflow.

### Storage and ownership boundary

This audit does not choose a storage format or authorize a new Extension:

- a temporary viewing mode belongs to application View State;
- an intentionally remembered composition may require a future
  Layout/Presentation/Perspective decision, not an arbitrary Core property;
  and
- a reusable symmetry or inverse claim belongs to future Semantic/Dictionary
  research, not to arrow appearance.

Persistence alone does not make a visual choice interoperable. Visual
directionality must not be added to Core merely to restore a local view.

### Round-trip and Relation Detail boundary

When a Dataset has no presentation-direction metadata, the safe default is a
visualization reflecting canonical `sourceId -> targetId` direction when
direction is shown. Another application can preserve and interpret the
canonical Relation without understanding an application-specific visual mode;
NarrativeLine does not need to understand a LiaisonScape visual choice to
preserve Core semantics.

Relation Detail continues to expose canonical `source`/`sourceId` and
`target`/`targetId` roles regardless of graph presentation. Generic endpoint
group vocabulary, Entity/Event type presentation, and direction-specific UI
labels remain a separate later audit. This checkpoint does not rename or
replace `Source`, `Target`, `始点`, `終点`, or the deferred Japanese generic
endpoint term.

### Final outcome

**RESEARCH PARTIALLY RECONCILED / SOME VISUAL MODES REQUIRE SEPARATE
DECISION**.

Normal visual direction remains the accepted baseline. Reverse visual and
undirected visual are viable bounded candidates only when explicitly presented
as non-semantic view choices with canonical-role safeguards. Bidirectional
visual appearance for one canonical directed Relation remains unresolved and
requires a separate decision; it is not accepted merely because it is
visually symmetrical.

Remaining questions are limited to future design evidence: the safest named
View/Presentation concept for reverse and direction-neutral modes; ownership of
any intentionally persisted visual choice; whether bidirectional shorthand can
avoid implying reciprocal assertions; and the cross-application/accessibility
evidence required before runtime or Extension design.

No Core, schema, Validator, Extension, application runtime, endpoint
vocabulary, or exact arrow artwork change follows from this audit.

## E2R-RELATION-VISUAL-DIRECTIONALITY-DECISION1 — Follow-up decision

Date: 2026-08-29

Status: **RESEARCH RECONCILED / PRESENTATION-ONLY DIRECTIONALITY MODEL
ACCEPTED**.

### Historical Outcome B and the resolved question

The preceding audit, recorded at `c68b767`, remains historical evidence. It
concluded **RESEARCH PARTIALLY RECONCILED / SOME VISUAL MODES REQUIRE
SEPARATE DECISION**: Normal was the baseline, Reverse and Undirected were
bounded presentation-only candidates, and Bidirectional was left unresolved.

Bidirectional was deferred because a two-headed depiction of one Relation could
be read as reciprocal semantic assertions or as two Relations. That concern was
valid as an interpretation risk, but the accepted product decision is that it
does not justify overriding or prohibiting an explicit user choice of visual
expression. The unresolved Bidirectional portion of Outcome B is therefore
superseded by this section; the canonical-data safeguards and the distinction
between presentation and semantic mutation remain in force.

### Reconciled principle

**Visual Relation directionality is presentation state. Canonical Relation
semantics remain defined by Dataset structure. Presentation must not be used by
the application as an instruction to mutate or infer canonical semantic
structure.**

In short:

> display choice != semantic mutation

One canonical directed Relation may be drawn in different ways without
automatically changing what is stored. Potential interpretation by another
viewer is a presentation consideration, but it is not by itself sufficient
reason for the application to override or forbid an explicit visual choice.
This is a narrow decision about Relation visual directionality, not a general
UX doctrine.

The application's responsibility is to preserve canonical Dataset semantics,
keep semantic editing explicit, and avoid silently inferring semantic
mutations from presentation controls. It is not required to anticipate every
possible interpretation by forbidding an intentional presentation.

### Four presentation modes under one model

The four modes below use the same presentation-only rule. The glyphs are
conceptual examples only; they do not select final arrowhead artwork, UI
labels, or serialization vocabulary.

| Mode | Canonical Relation | Conceptual visual | Conclusion |
| --- | --- | --- | --- |
| Normal | `sourceId = A`, `targetId = B` | `A -> B` | Accepted presentation baseline; no semantic mutation. |
| Reverse | `sourceId = A`, `targetId = B` | `A <- B` | Accepted presentation-mode concept; no endpoint swap. |
| Undirected | Still canonical `A -> B` | `A — B` | Accepted direction-neutral presentation concept; it does not create an undirected Core Relation. |
| Bidirectional | Still one canonical `A -> B` Relation | `A <-> B` | Accepted presentation-mode concept; it does not create reciprocal or duplicate canonical structure. |

For every mode, the application must not infer or rewrite Dataset semantics from
the drawing. In particular, selecting Bidirectional must not create a reverse
Relation, create a second Relation, swap `sourceId`/`targetId`, make the
Relation structurally symmetric, rewrite semantic text, change IDs, or change
Core, schema, or Extension semantics. The same no-mutation rule applies to
Normal, Reverse, and Undirected.

### One visual Relation versus two canonical Relations

If the user semantically means both assertions:

```text
Alice supervises Bob
Bob supervises Alice
```

the canonical model can represent them as two distinct Relations:

```text
Relation 1: Alice -> Bob
Relation 2: Bob -> Alice
```

That is different from selecting Bidirectional presentation for one canonical
Relation:

```text
one Relation: A -> B, displayed as A <-> B
```

The visual choice is not equivalent to automatically creating the two
Relations, and the two semantic assertions must not be collapsed into one
presentation choice.

### Semantic identity and text boundary

Changing visual mode never automatically rewrites:

- Relation `name`;
- Relation `description`;
- Entity names;
- `sourceId`;
- `targetId`; or
- the Relation ID or any other Core object ID.

For example, a canonical Relation named `Alice supervises Bob` remains named
`Alice supervises Bob` when the user selects Reverse, Undirected, or
Bidirectional presentation. Semantic text editing remains a separate explicit
user action.

Canonical `source`/`target` roles and their IDs remain available to
semantic and technical surfaces irrespective of the selected visual mode.
This decision does not select final Relation Detail vocabulary and does not
rename `Source`, `Target`, or any existing or deferred endpoint vocabulary.
Endpoint-vocabulary work remains a separate audit.

### Safeguards and ownership boundary

The retained safeguards are semantic-clarity safeguards, not a veto on any of
the four modes:

- canonical source/target roles remain inspectable;
- a visual mode is identified as presentation/view state rather than an
  endpoint-editing operation; and
- no semantic mutation occurs merely because a visual mode is selected.

No mandatory warning dialog or confirmation prompt follows from this decision.
Bidirectional presentation is not inherently a dangerous operation and must
not be prohibited solely because an observer could infer reciprocity.

If visual directionality is later persisted, it remains presentation/view-owned
state. Possible future ownership includes transient LiaisonScape View State,
Layout/View presentation state, or another future presentation-oriented
mechanism. This checkpoint selects none of them and does not introduce a new
Extension or persistence mechanism. Visual directionality must not be promoted
into Core merely to store an appearance choice.

### Interoperability and default presentation

Applications that do not understand a future visual-directionality setting
must still preserve and interpret the canonical Relation from `sourceId`,
`targetId`, Relation identity, and normal Core fields. NarrativeLine does not
need to understand a LiaisonScape visual mode in order to preserve Relation
semantics. Unknown presentation metadata, if introduced in a later checkpoint,
must not redefine the Core Relation.

When no visual-directionality presentation choice is present, the default graph
presentation reflects canonical `sourceId -> targetId` direction when direction
is shown. This documentation decision does not change current runtime behavior.

### Accepted scope and exclusions

The accepted result is:

**RESEARCH RECONCILED / PRESENTATION-ONLY DIRECTIONALITY MODEL ACCEPTED**.

Normal, Reverse, Undirected, and Bidirectional are all accepted as
presentation-mode concepts for one canonical directed Relation. All retain the
same canonical source/target Dataset structure, and no visual mode itself
changes semantic text or Core structure.

This does not authorize runtime implementation, final UI labels, final glyph
or arrow styling, a persistence model, endpoint-vocabulary resolution, or any
change to Relation creation/editing, Relation Detail, graph markers, Core,
schema, Extension semantics, or application repositories. The current
checkpoint is documentation and decision reconciliation only.

## LS-RELATION-DETAIL-PRESENTATION-DIRECTIONALITY-DECISION1 — Bounded UI consequence

Date: 2026-08-29

The presentation-only directionality model now has one bounded UI consequence:
ordinary LiaisonScape Relation Detail is the intended future surface for
inspecting a Relation and choosing how that Relation is shown. This does not
rewrite the semantic directionality decision above and does not authorize the
control's runtime implementation.

The conceptual Relation Detail structure is:

- Relation `Name`;
- one generic `Connected object` row for the canonical source-ordered endpoint
  A;
- a presentation control conceptually between the endpoint rows; and
- one generic `Connected object` row for the canonical target-ordered endpoint
  B.

The endpoint names are shown once and are not repeated inside a compact visual
direction label. The rows retain stable canonical storage order without being
labelled Source/Target in the ordinary primary view. This avoids requiring a
user to reconcile canonical role terminology with a Reverse or other
presentation-only visual choice. The Japanese control concept is
`つながりの表示`; the exact English control label remains unresolved.

This UI consequence does not select final glyphs, persistence, or an advanced
technical view. Relation Create/Edit remains a separate canonical Source/
Target responsibility, and Entity Detail's related-Relation cards remain a
separate follow-up. The default remains Normal (`sourceId -> targetId`) when no
presentation choice exists. Selecting Normal, Reverse, Undirected, or
Bidirectional must continue to leave `sourceId`, `targetId`, Relation text,
IDs, Core semantics, and Extension semantics unchanged.

## LS-RELATION-DETAIL-DISPLAY-CONTROL-EN1 — English label decision

Date: 2026-08-29

Status: **EN DISPLAY-CONTROL LABEL ACCEPTED**

### Candidate comparison

The accepted visible English label is **`Relation display`**. It is a compact
noun phrase that uses the established E2R UI object term `Relation` and reads
naturally as “how this Relation is shown.” It remains valid for Normal,
Reverse, Undirected, and Bidirectional presentation without implying that the
canonical Relation direction is being edited.

The serious alternatives were rejected for bounded reasons:

| Candidate | Conclusion |
| --- | --- |
| `Relation display` | Accepted: specific enough for the Relation Detail context, compact, and compatible with all four visual modes |
| `Connection display` | Not selected: friendlier in isolation, but introduces `Connection` as a competing object name for the canonical `Relation` |
| `Appearance` | Not selected: too broad; the current control does not choose color, thickness, curve, opacity, or label placement |
| `Display` | Not selected: short and non-technical, but too vague and could mean visibility rather than directional presentation |
| `Relation appearance` / `Connection appearance` | Not selected: retain the scope ambiguity of `Appearance`, with the same Relation/Connection concern for the latter |
| `Direction` / `Relation direction` | Not selected: can imply canonical semantic direction or `sourceId`/`targetId` mutation |
| `Arrow type` / `Arrow` | Not selected: too narrow because Undirected is not an arrow-only presentation |
| `Orientation` | Not selected: abstract and likely to imply layout rotation rather than Relation presentation |

The label fits the current LiaisonScape tone of terse nouns and noun phrases
such as `Relation Detail`, `Object ID`, `Automatic placement`, `Route`, and
`Label`, while remaining more informative than a bare `Display`. It does not
need to repeat either endpoint, the Relation name, Source, Target, or internal
IDs because the two endpoint rows are immediately adjacent.

### Four-mode and semantic-mutation checks

`Relation display` remains meaningful above each of the conceptual controls:

- Normal: display the Relation as A toward B;
- Reverse: display the Relation as B toward A;
- Undirected: display the Relation without directional emphasis; and
- Bidirectional: display the Relation in both directions.

In every case the wording describes presentation, not canonical data. A user
is not reasonably led to infer that the control rewrites the Relation,
exchanges endpoint IDs, creates reciprocal Relations, or changes Relation
text. Endpoint names remain outside the control and are not repeated in its
label.

The Japanese label `つながりの表示` remains unchanged. This is conceptual
parity, not a requirement for literal translation. A future runtime may use a
more descriptive accessible name than the concise visible label; this decision
does not select final ARIA strings.

Persistence ownership remains unresolved and is now the remaining named
decision before runtime implementation. The four presentation modes, stable
endpoint order, no-mutation boundary, Japanese label, and English visible
label are decided conceptually; runtime implementation remains unimplemented.

## LS-RELATION-DISPLAY-PERSISTENCE-OWNERSHIP1 - Persistence ownership decision

Date: 2026-08-29

Status: **RELATION DISPLAY PERSISTENCE OWNER ACCEPTED / SERIALIZATION DETAIL
REMAINS**.

This checkpoint resolves the remaining ownership question for the accepted
Relation Detail `Relation display` control. It is a documentation-only
decision. It does not implement the control, register an Extension, define a
schema, or change any application.

### Live ownership evidence

The current authority set distinguishes the following responsibilities:

| Existing responsibility | Current evidence | Disposition for Relation display |
| --- | --- | --- |
| Core Relation | `sourceId` and `targetId` define the canonical structural Relation | Not an owner; unchanged |
| Coordinate | The current prototype and draft Coordinate contracts address Entity/Event coordinates; Relation Coordinate payloads are prohibited | Not an owner |
| Layout | Existing research owns route geometry, self-Relation geometry, label placement, and spatial layering; exact Layout persistence remains experimental | Not an owner for visual direction mode |
| Application View State | Zoom, pan, selection, hover, modal, and gesture state are application-only | Temporary runtime holder only, not the accepted Dataset owner |
| Presentation | Existing research assigns line/arrow appearance and other visual styling to Presentation, but no registered Presentation Extension exists | Correct responsibility; a new bounded owner mechanism is required |
| Perspective | A provisional future responsibility for persisted targeting, grouping, ordering, or relevance context | Not needed for this Relation-local appearance choice |

The strings `liaisonscape-graph` and `liaisonscape-user-unit` are current
Coordinate Space and unit identifiers, not Relation-presentation Extension
identifiers. The Extension index lists Coordinate as draft/prototype and
Layout as a candidate document; it lists no registered LiaisonScape-owned
Presentation Extension or Relation display field. Therefore no existing
identifier, version, enum convention, or Relation-addressing convention can
be safely reused as a serialized contract here.

### Ownership decision

The selected ownership conclusion is:

**NEW PRESENTATION OWNERSHIP MECHANISM REQUIRED.**

The exact conceptual owner is a future LiaisonScape-owned, Dataset-contained
Presentation mechanism for reusable Relation appearance intent. This is a
bounded owner decision, not permission to design the complete Presentation
family. The future payload must remain separate from Core, Coordinate, Layout,
and the provisional Perspective responsibility.

Core ownership is rejected. All four accepted modes continue to describe one
Relation with the same `sourceId = A` and `targetId = B`; putting the mode on
Core would make a rendering choice appear to be semantic structure. Layout
ownership is also rejected for this field: route/curvature and label geometry
answer where a Relation is drawn, while this mode answers how its direction is
visually emphasized. A future Presentation mechanism may later be composed
with a Layout, but it must not be hidden inside one.

Transient LiaisonScape state alone is not accepted as the product persistence
boundary. The choice is an explicit, Relation-specific presentation decision,
so a committed selection is expected to survive Dataset export, close/reopen,
and transfer to another LiaisonScape instance. Application memory may hold the
active value while editing, but it is not the durable owner. A future
Perspective may eventually compose or reference this state, but its current
research scope does not justify forcing a Relation appearance enum into it.

### Persistence boundary and lifecycle expectations

The future runtime/contract checkpoint must treat a committed display choice
as Dataset-contained presentation data:

- Choosing Reverse, Undirected, or Bidirectional must not mutate endpoints,
  names, descriptions, IDs, or semantic Extensions. It may make the Dataset
  modified once the selection is intentionally adopted as presentation data.
- Closing Relation Detail, saving/exporting, closing the application, browser
  reload, and reopening the same exported Dataset should retain an adopted
  choice. A value that was only a canceled or incomplete interaction may be
  discarded according to the future atomic-adoption rule.
- Export/import and Dataset copying should carry the presentation metadata with
  the Dataset. It must not be implemented as localStorage or as a preference
  that survives replacement of the active Dataset.
- Replacing the Dataset replaces its Relation display choices. The incoming
  Dataset's presentation state is authoritative for that Dataset; no unrelated
  browser preference is merged into it.
- The state must be addressed by exact Relation ID, not by endpoint pair,
  Relation name, array position, or rendered edge. This permits one mode for a
  self-Relation and independent modes for parallel Relations.
- When a Relation is deleted, a future writer should remove its presentation
  record in the same committed Dataset transition. Orphan-record validation
  and repair rules remain part of the serialization contract; this checkpoint
  does not authorize cleanup code.
- A future display-mode change is conceptually an authored Dataset
  presentation mutation. It should therefore be eligible for the same future
  undo/redo boundary as other adopted Dataset edits, while undo/redo itself
  remains out of scope.

This is analogous to the accepted direction for intentionally saved Entity
Coordinates: an explicit adopted value is Dataset content and can contribute
to dirty state. It is deliberately not analogous to LiaisonScape's current
automatic routes, temporary Relation curvature, or temporary label placement,
which remain Derived or unsaved Layout adjustments. Opening a Dataset or
merely rendering a default must not materialize `Normal`.

### Compatibility, unknown values, and default

Absence of a persisted display choice means Normal: render the canonical
source-to-target direction when direction is shown. The contract should omit
that default rather than materialize an explicit `normal` value unless a
future schema gives a demonstrated reason to do otherwise.

Another application, including NarrativeLine, must remain able to parse and
edit the Core Relation without understanding this LiaisonScape presentation
state. An unsupported Presentation payload or mode must not block Core
Relation use, must not rewrite `sourceId` or `targetId`, and should be
preserved on round trip whenever the applicable Extension and consumer rules
require preservation. Existing NarrativeLine evidence demonstrates opaque
unknown Extension preservation for supported round-trip paths; it does not
make NarrativeLine a Presentation consumer.

If a later LiaisonScape version encounters an unknown mode, it should preserve
the original metadata where practical and render the safe canonical Normal
fallback without silently rewriting the unknown value. It must not claim to
interpret or edit the unsupported value. The exact diagnostic and recovery
surface is deferred.

### Serialization readiness

The conceptual value set is stable enough for the next contract discussion:
Normal, Reverse, Undirected, and Bidirectional. The exact serialized tokens,
casing, payload placement, Relation-ID map/record shape, Extension identifier,
version field, declaration behavior, unknown-field rules, and orphan-record
validation are not safely selected by the current evidence. No field or token
is introduced here.

Accordingly, the next checkpoint is **A2: one bounded serialized-shape and
version decision remains**. Runtime implementation is not ready until that
contract is defined and its preservation/dirty-state tests are authorized.

## LS-RELATION-DETAIL-ARROW-DISPLAY-ORDER-DECISION1 - Arrow-display label and information order

Date: 2026-08-29

Status: **RELATION DETAIL ARROW-DISPLAY PRESENTATION ACCEPTED**.

This follow-up supersedes only the visible label and responsibility of the
four-mode Relation Detail control, and refines the ordinary information order.
It does not erase the earlier acceptance of `Relation display` /
`縺､縺ｪ縺後ｊ縺ｮ陦ｨ遉ｺ`. That earlier wording was valid as a broader
presentation label. The four-mode control is now understood more narrowly
because future line/stroke style may be controlled independently.

### Arrow-display responsibility

The accepted Japanese visible label for this control is
`遏｢蜊ｰ縺ｮ陦ｨ遉ｺ`. It means controlling whether and in which direction arrow
indication is shown between the two connected objects. `窶覗` remains valid
because it means no arrow indication; it is not being treated as an arrow
type.

The previously considered `遏｢蜊ｰ縺ｮ遞ｮ鬘杼` is rejected as the primary label.
It frames the four choices as arrow types even though one choice removes arrow
indication. A future line/stroke-style responsibility may separately cover
solid, dashed, dotted, or other line appearance. This checkpoint does not
select its label, options, or implementation.

The English candidate comparison is intentionally bounded:

| Candidate | Disposition |
| --- | --- |
| `Arrow display` | Accepted: communicates whether and how arrow indication is shown, includes no-arrow and both-arrow choices, and leaves line style separate |
| `Relation display` | Superseded for this narrow control; remains suitable as a possible broader future presentation heading |
| `Arrow` | Rejected: too terse and does not describe a choice of display behavior |
| `Arrow direction` | Rejected: suggests a single direction selector and can imply canonical direction editing |
| `Direction` | Rejected: risks implying mutation of the Relation's canonical direction |

`Arrow display` is therefore the exact accepted English visible label. It
describes presentation, not a change to `sourceId`, `targetId`, Relation text,
object identity, or semantic meaning.

### Unchanged four-mode semantics

For stable endpoint A (the first displayed object in canonical source order)
and endpoint B (the second displayed object in canonical target order), the
four choices remain:

| Mode | Presentation result | Canonical effect |
| --- | --- | --- |
| Normal | A toward B | None |
| Reverse | B toward A visually | None; do not swap `sourceId` and `targetId` |
| Undirected | A and B without arrow indication | None; does not create an undirected Core Relation |
| Bidirectional | Arrow indication in both directions | None; does not create reciprocal or duplicate Relations |

Endpoint names are shown once in the surrounding rows, not repeated inside
the arrow-display control. The control belongs conceptually between endpoint A
and endpoint B. No mode changes `sourceId`, `targetId`, Relation name or
description, any Entity/Event name, any ID, or any semantic Extension.

### Relation Detail information hierarchy

The accepted ordinary-field order for Relation Detail is:

| Order | Japanese | English |
| --- | --- | --- |
| 1 | `蜷榊燕` | `Name` |
| 2 | `縺､縺ｪ縺後ｊ蜈・` | `Connected object` |
| 3 | `遏｢蜊ｰ縺ｮ陦ｨ遉ｺ` | `Arrow display` |
| 4 | `縺､縺ｪ縺後ｊ蜈・` | `Connected object` |
| 5 | `隱ｬ譏餐` | `Description` |

This order makes the Relation's human-readable identity primary, then shows
what it connects and how that connection is visually shown, followed by the
description. Technical Information remains secondary below these ordinary
fields, and Save/Delete/Close remain actions rather than ordinary identity
content. The current live endpoint-first order is a future redesign target,
not a data or semantic defect. Relation Create/Edit, Entity Detail, and the
accepted deletion blocker remain separate surfaces.

This is a documentation-only reconciliation. It does not implement the
reordering, add the control, define Presentation serialization, or alter the
accepted persistence owner. Persistence remains the future LiaisonScape-owned
Dataset-contained Presentation mechanism, with serialization still deferred.
