# E2R Multidimensional History and Temporal Perspectives

Status: **EXPLORATORY / FUTURE DIRECTION**

Date: 2026-09-02

This record is exploratory research. It is not an accepted specification,
implementation-ready design, active work item, scheduled milestone, schema
approval, or authorization to change History, Core, Extensions,
NarrativeLine, LiaisonScape, or any Dataset.

## Primary result

Result: **CASE 4 - A GENERIC TEMPORAL-PERSPECTIVE ABSTRACTION CAN UNIFY
WORLD TIME, EXPERIENCE ORDER, PUBLICATION, AND ACQUISITION WHILE KEEPING
THEIR VALUE TYPES DISTINCT**.

The direction is supported conceptually, with an important qualification:
the abstraction is a future responsibility boundary, not a single numeric
coordinate vector. Absolute Civil Time, relative elapsed time, ordinal
experience/order, publication time, acquisition time, recollection order, and
partial knowledge order can coexist over related Event sets without becoming
anonymous alternatives to one global `temporalOrder` value.

Exact result clauses:

1. **DIRECTION SUPPORTED** - Multiple temporal perspectives can coexist over
   the same Event set without being reduced to one global chronology.
2. **DIRECTION SUPPORTED** - Absolute temporal value, relative duration, and
   ordinal experience order are distinct temporal semantics.
3. **DIRECTION SUPPORTED** - An alternative claim about one time dimension is
   not the same thing as an independent temporal perspective.
4. **DIRECTION SUPPORTED** - An alternative temporal order should be scoped to
   the perspective or context whose order it represents.
5. **DIRECTION SUPPORTED** - Higher-dimensional temporal semantics should be
   separated from 1D/2D/3D visual projection.
6. **DIRECTION SUPPORTED** - Current one-dimensional NarrativeLine behavior
   can remain a valid projection even if future data supports multiple
   temporal perspectives.
7. **DIRECTION SUPPORTED** - Semantic temporal values must not be silently
   moved by visual layout optimization.
8. **DIRECTION SUPPORTED** - Partial and sparse temporal perspectives must be
   considered before treating every dimension as a complete numeric axis.
9. **DIRECTION SUPPORTED** - Current History order is a useful evolution point
   but must not be silently reinterpreted without a compatibility contract.
10. **PARTIAL** - The perspective abstraction is coherent, but its schema
    location, representation, identity, and ownership remain open.
11. **PARTIAL** - 1D/2D/3D projection is coherent, but higher-dimensional
    temporal data need not be Cartesian, complete, or homogeneous.

Decision: **A - RESEARCH DIRECTION ESTABLISHED; DEFER MODEL DESIGN UNTIL
HISTORY VNEXT WORK IS ACTIVE**.

No follow-up checkpoint was auto-started. If this direction is reactivated,
the smallest next research questions are perspective scope/identity and
total-versus-partial/sparse ordering; neither is selected as an active task by
this record.

## Scope and source reconciliation

The live canonical History term is **`temporalOrder`**, located at
`extensions.history.time.temporalOrder`. `historyOrder` is a useful conceptual
phrase but is not the current field name. Earlier drafts used `order`; current
writers use `temporalOrder`, and migration-aware readers may interpret legacy
`order` only under the documented migration rule.

The current roadmap describes History vNext and Relative Time as research or
pending responsibilities. The live selected LiaisonScape Initial Placement
checkpoint remains the current active engineering thread:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-QUALITY-EXPERIMENT-DESIGN1`

This research does not replace, precede, or resequence that checkpoint. The
E2R Suite long-term milestone, VS Code OSINT research, External Dataset trust
research, Personal Storage, Federated Constellation, GitHub Sponsors, and
unrelated roadmap ordering remain separate.

The current specification authority inspected for this record was:

- [History Extension 1.0.0](../../extensions/history-extension.md);
- [History Extension schema](../../schemas/extensions/history.schema.json);
- History vNext target-scope and Model B/C research;
- History vNext cross-domain applicability evidence;
- [E2R Suite long-term milestone](e2r-suite-long-term-milestone.md);
- [E2R for VS Code OSINT Workbench research](e2r-vscode-osint-workbench.md);
- [E2R OSINT External Dataset Acquisition, Trust, and Provenance research](e2r-osint-external-dataset-acquisition-and-trust.md); and
- [current roadmap](../../docs/roadmap.md).

## Current History model

History Extension `1.0.0` defines temporal representation for E2R Core
Objects. The `history.time` object is the stable location for the primary
temporal position of one Core Object. Its temporal value is primarily Civil
Time: calendar and clock fields with explicit, preserved granularity, with
optional IANA Time Zone and UTC offset information.

The current model can express:

- year, month, day, hour, minute, and second fields when known;
- incomplete Civil Time without inventing omitted precision;
- a resolvable Instant when the stored fields, Time Zone, and offset suffice;
- an unresolved or interval-like interpretation when recorded granularity is
  incomplete, without silently filling the missing fields;
- one integer `temporalOrder` for relative comparison when recorded temporal
  value and granularity cannot distinguish Core Objects; and
- a `temporalOrder`-only Time Object when relative chronology is known but a
  date is not.

`temporalOrder` is semantic relative temporal order under the current History
meaning. It is not a general display index, narrative reveal order, layout
rank, application Timeline sort, or arbitrary user-defined axis. It must not
reverse two distinct temporal values whose chronological order is already
known. Its integer values are comparable labels, not elapsed durations and not
coordinates in a multidimensional space.

The current model does not define:

- multiple independent History records or alternative temporal claims for one
  Core Object;
- competing date hypotheses or disjunctive candidate dates;
- intervals, durations, approximate temporal expressions, or relative
  before/after/during/overlap relationships between different Events;
- partial-order constraints with explicit unknown pairwise relationships;
- publication, acquisition, review, observation, memory, belief, or
  presentation chronology as additional History dimensions;
- a persistent authorial/narrative order in the current `history.time` object;
- a generic `TemporalPerspective` Core Object or Extension type; or
- a 2D, 3D, or higher-dimensional temporal projection.

Precision is therefore already meaningful in the current model, but it means
Civil Time granularity, not numeric measurement precision. Same-value and
same-granularity objects may use `temporalOrder` for limited tie-breaking;
that does not provide a general tie, simultaneity, or partial-order algebra.

Unknown History Extension fields should remain preservable where practical,
but preservation is not semantic support. A reader that does not understand a
future perspective must not reinterpret it as current `temporalOrder`.

## Time value versus ordinal order

The central distinction is:

```text
TEMPORAL VALUE = when an event is situated in a temporal domain
ORDINAL ORDER  = where an event appears in a scoped sequence
```

For example, a world chronology may record:

```text
E2 = 1920
E3 = 1921
E1 = 2050
```

Person B may experience the same Events in this order:

```text
E1 order = 1
E2 order = 2
E3 order = 3
```

The experience order is not a replacement timestamp for the world Events.
It is a separate order over a defined scope. The same distinction applies to:

- absolute or civil time versus relative elapsed time;
- occurrence time versus publication time;
- occurrence time versus investigator acquisition time;
- event chronology versus witness recollection order; and
- historical reconstruction versus document creation order.

The following future semantic categories should remain distinct until a later
model proves that they share a value contract:

| Category | Meaning | Current status |
|---|---|---|
| Absolute/Civil Time | Calendar/clock position in a civil context | Current History value |
| Instant | Resolved UTC position | Derived from current value when resolvable |
| Relative elapsed time | Duration or displacement between positions | Future / separate responsibility |
| Ordinal sequence | Position in a scoped order without duration | Future perspective/order concern |
| Subjective duration | Duration as experienced by a subject | Future or separate concern |
| Partial order | Known precedence with unspecified pairs | Future Relative Time/ordering concern |
| Unknown order | No supported precedence claim | Current absence, not a value of zero |

## Temporal perspective as a conceptual abstraction

`Temporal Perspective` is used here as a conceptual name only. It is not a
registered object, field, Extension, or standardized E2R type.

A perspective means a scoped temporal interpretation or ordering over some
identified Event set. Possible scopes include:

- recorded or reconstructed world chronology;
- Person A's experience or observation order;
- Person B's experience, memory, or belief order;
- witness recollection order;
- publication chronology;
- investigator acquisition or review chronology; and
- narrative presentation or discourse order.

The scope does not have to be owned by one Person. A person can supply several
perspectives, a perspective can be shared by a group, and an investigator's
acquisition chronology can be Dataset-local without being a property of the
investigated Event. Subjective does not mean false: “Person B experienced E2
before E1” can be a factual statement about B's experience even when the world
chronology is the reverse.

The candidate principle is therefore **SUPPORTED WITH QUALIFICATION**:

> An alternative temporal order should identify the perspective or context in
> which it applies, rather than adding anonymous competing numbers to one
> global History order.

The qualification is that “perspective” must eventually identify subject,
source/context, scope, value semantics, and coverage without implying that the
perspective is the truth or that every Event receives a complete rank.

## Same Event, claims, and dimensions

One Event may legitimately have several temporal statements:

```text
world occurrence:       1920-06-01
Person B experience:    ordinal position 2
publication:             1955-03-14
investigator acquired:   ordinal position 18
```

These are not competing values for one field. They answer different questions.

By contrast:

```text
Source 1: the Event happened 1920-06-01
Source 2: the Event happened 1920-06-03
```

is ordinarily two competing claims about one world-occurrence dimension. It
may require source, evidence, assessment, or adoption context; it is not
automatically a second perspective.

The distinction is:

| Situation | Interpretation |
|---|---|
| Same dimension, different asserted date | Alternative/competing claim |
| Different question about same Event | Distinct temporal dimension or perspective |
| Same perspective, incomplete coverage | Sparse/partial perspective |
| Same value at available precision | Tie or simultaneity question, not false precision |
| No assertion | Unknown, not an inferred rank |

The current History model can preserve one adopted primary temporal position
and limited `temporalOrder`; it cannot natively represent this full distinction
as a multi-perspective semantic model.

## Time-travel diagnostic control

Time travel is a sharp control, not the sole motivation:

```text
World chronology:
  E_arrival_1920 before E_departure_2050

Traveler B experience:
  E_departure_2050 before E_arrival_1920
```

Both orderings are coherent if their scopes are explicit. The traveler order
does not invalidate the world order, and the world order does not invalidate
the traveler's experience order. A model that permits only one anonymous
global order would be forced either to reject a valid statement or to silently
change the meaning of one of them.

This control does not justify a time-travel-specific schema. The same
separation is required for ordinary publication, acquisition, discovery, and
recollection cases.

## Real-world and OSINT controls

The non-fiction controls are stronger than the time-travel example:

| Control | What must remain separate |
|---|---|
| Occurrence vs publication | When an Event happened versus when a document reported it |
| Occurrence vs acquisition | When an Event happened versus when an investigator obtained a source |
| Event chronology vs recollection | What happened versus the order a witness remembers or reports it |
| Event chronology vs discovery | What happened versus when an investigator learned it |
| Reconstruction vs document creation | Reconstructed historical sequence versus artifact production order |

The existing External Dataset trust research already separates acquisition,
integrity, authenticity, review, corroboration, and factual acceptance. This
History research adds the temporal distinction: `T_occurrence`,
`T_publication`, `T_acquired`, and `T_reviewed` are not interchangeable and
should not be collapsed into the publisher's primary Event time. No OSINT
schema, downloader, trust field, or research-file change follows from this
observation.

## Narrative and fiction connection

The same conceptual separation is useful for narrative and fiction:

- story chronology describes the order of events in the storyworld;
- discourse or presentation order describes how the work reveals them;
- character experience order describes a character's lived sequence;
- narrator knowledge order describes what the narrator can know at each point;
- flashback and flashforward are relations between presentation and story
  order; and
- unreliable recollection may be a statement about remembered or believed
  order, not a correction to story chronology.

This is compatible with the existing NarrativeLine boundary: a 1D timeline
can remain a valid world-chronology projection, while a future narrative view
could select a different scoped order. Narrative-specific concepts must not be
added to Core merely because the same abstraction is useful in fiction.

## Semantic dimensions versus visual dimensions

The semantic model may eventually contain many perspectives:

```text
available semantic perspectives:
  world, Person A, Person B, publication, acquisition
```

A view may select only a few:

```text
X = world chronology
Y = Person A experience order
Z = Person B experience order
```

This is a projection, not a declaration that the Dataset has exactly three
dimensions. A 1D projection may show one selected perspective; a 2D
projection may compare world time with experience or publication; a 3D
projection may compare occurrence, publication, and acquisition. Higher-
dimensional semantic data need not be Cartesian, dense, numeric, or displayable
all at once.

Projection coordinates are derived display coordinates. A layout optimizer,
zoom operation, graph packing step, or label solver may move display geometry,
but must not silently mutate the semantic temporal value or scoped order. No
normalization algorithm, chart implementation, WebGL, Three.js, or 3D graph
implementation is selected.

## Total order, partial order, ties, and sparse coverage

The current `temporalOrder` is a limited integer comparison aid. A future
perspective must not assume that every perspective can assign a total rank to
every Event.

Examples of partial or sparse knowledge include:

- A knows `E1` occurred before `E3`, but cannot place `E2` relative to either;
- evidence establishes order within one source but not across sources;
- two Events are simultaneous at the available granularity;
- a witness remembers `E1` before `E2` but does not date either Event; and
- an investigator acquired one source before another but reviewed them later.

The research conclusion is **SUPPORTED WITH QUALIFICATION** for future
partial/sparse support and **OPEN** for its representation. A complete numeric
axis is not required, and an application may derive a total visible list only
by declaring a deterministic policy for incomparable or tied items. Such a
derived list must not be written back as a semantic temporal assertion without
explicit adoption.

Relative elapsed time is also separate from ordinal order. “E1, then five
minutes later E2” contains a duration relation; “E1 is first, E2 is second”
contains an ordinal relation. Subjective duration may be coherent with the
same broad temporal-perspective family, but is classified as a **FUTURE OR
SEPARATE CONCERN**, not forced into the initial model.

## Current History evolution options

| Option | Disposition | Reason |
|---|---|---|
| HIST-1: keep current order; add scoped perspective layer | **RETAIN as baseline** | Best preservation of current `temporalOrder`; adds future scope without reinterpretation |
| HIST-2: generalize current order directly into scoped orders | **OPEN, not selected** | Could preserve the comparison idea, but risks changing the meaning and completeness assumptions of `temporalOrder` |
| HIST-3: replace order with generic multidimensional positions | **REJECT as primary direction** | Treats heterogeneous values and partial orders as coordinates and breaks simple 1D compatibility |
| HIST-4: model perspective ordering only as Relations | **REJECT as sole owner** | Relations can express relative assertions later, but do not replace an Object's primary temporal value or every scoped sequence |
| HIST-5: hybrid model | **OPEN future architecture** | Most expressive candidate: retain primary History, add scoped temporal/order responsibilities, and allow derived projections; ownership is unresolved |

The current-order conclusion is **A**: `temporalOrder` is a natural
conceptual precursor, but multiple perspectives should be modeled as a
separate scoped layer or hybrid responsibility rather than as a silent direct
reinterpretation. This is a responsibility conclusion, not a schema choice.

## Backward compatibility and interoperability

A future mechanism should preserve the meaning of every valid current Dataset:

- existing Civil Time fields retain their stored calendar and clock meaning;
- recorded granularity is not upgraded or replaced;
- Time Zone and offset behavior remains unchanged;
- current `temporalOrder` remains limited relative order under its current
  scope;
- a reader that does not understand future perspective data can ignore it
  semantically while preserving it as unknown data where practical; and
- a current reader must not treat an unknown perspective as a second
  `temporalOrder`, a malformed current Time Object, or a reason to rewrite the
  primary History value.

Unknown-data preservation is necessary but not sufficient for interoperability:
future work must define how unsupported perspective records are retained,
round-tripped, and reported without semantic conversion. No migration is
designed here.

## Responsibility and model location

No location is selected:

| Candidate location | Research disposition |
|---|---|
| Core | Not selected; multidimensional temporal semantics are not Core-minimal structural concepts |
| Stable History 1.0.0 | Not selected; current meaning and scope remain unchanged |
| History vNext | Plausible for Object-specific absolute temporal assertions, but responsibility continuity and target scope remain design gates |
| Relative Time responsibility | Plausible for cross-Event relative/partial order and elapsed relations; not selected |
| New temporal-perspective Extension | Plausible, but identity, scope, values, claims, and partial support remain open |
| Presentation | Not selected as owner; semantic temporal data must not be placed there merely because views use axes |
| Workspace-local state | May hold a user's temporary selected projection, but must not become the semantic source for persisted temporal meaning |
| Separate analytical layer | Plausible for derived comparisons and projections; not selected as a replacement for portable Dataset semantics |

The current History vNext target-scope work keeps Stable History Core-Object-
focused and treats generic applicability or arbitrary-record targeting as a
separate evidence gate. This research is consistent with that boundary: a
perspective scope is not automatically a new Core Object, a generic assertion,
or an arbitrary record registry.

## Bounded external prior art

The following sources were consulted only to clarify vocabulary and boundary
questions. None was adopted as an E2R model.

### Valid time, transaction time, and bitemporal data

[Jensen and Snodgrass, *Temporal Data Models*](https://www.cs.arizona.edu/~rts/pubs/TRmerged.pdf)
distinguishes valid time, when a fact is true in the modeled reality, from
transaction time, when a database item is current in the database, and treats
their combination as bitemporal data.

- Problem solved: distinguish modeled-world validity from database-record
  history and support temporal queries over both.
- Similarity: occurrence/publication/acquisition/review are multiple temporal
  aspects that must not be collapsed.
- Difference: bitemporal modeling usually provides two database-oriented time
  axes; E2R's perspective question also includes experience, recollection,
  narrative order, sparse coverage, and heterogeneous value types.
- Adoption: **NO**. The distinction is retained as terminology and a future
  compatibility input, not as a Cartesian E2R model.

### Allen interval algebra

[Allen, *Maintaining Knowledge about Temporal Intervals*](https://cse.unl.edu/~choueiry/Documents/Allen-CACM1983.pdf)
provides a primitive interval model and relations such as before, overlaps,
and during, with constraint-propagation reasoning.

- Problem solved: reason about qualitative relations between intervals.
- Similarity: future E2R History vNext and Relative Time may need intervals,
  boundaries, overlap, and partial information.
- Difference: interval relations are not by themselves perspective identity,
  source ownership, publication/acquisition semantics, or narrative order.
- Adoption: **NO**. It is a candidate vocabulary/reference for future interval
  work only; current History 1.0.0 explicitly excludes intervals and durations.

### Causal and partial order

[Lamport, *Time, Clocks and the Ordering of Events in a Distributed System*](https://www.microsoft.com/en-us/research/publication/time-clocks-ordering-events-distributed-system/)
describes causal precedence as a partial order and a logical-clock method for
extending that order consistently to a total order.

- Problem solved: order events consistently when a single physical clock does
  not define all relationships.
- Similarity: E2R may need partial or sparse orders and deterministic display
  extensions for incomparable Events.
- Difference: causal happened-before is not civil occurrence time, personal
  experience, publication time, or a truth claim about history.
- Adoption: **NO**. The distinction between partial semantic order and derived
  total presentation order is retained; Lamport clocks are not selected.

### Storyline and narrative visualization

[The Story(line) So Far survey](https://onlinelibrary.wiley.com/doi/10.1111/cgf.70499)
describes storyline visualization as a temporal-network projection with a time
axis and a separate vertical ordering/layout problem. [Hullman et al., *A
Deeper Understanding of Sequence in Narrative Visualization*](https://www.microsoft.com/en-us/research/publication/a-deeper-understanding-of-sequence-in-narrative-visualization-2/)
also treats presentation sequence as a choice affecting comprehension rather
than as the underlying data's only chronology.

- Problem solved: communicate temporal interaction and narrative sequence in
  a readable visual form.
- Similarity: NarrativeLine may project one selected temporal order, and
  narrative reveal order may differ from story chronology.
- Difference: visualization/layout objectives are not persisted temporal
  semantics and cannot own the meaning of an Event's time.
- Adoption: **NO**. These sources support the semantic/display separation only;
  no chart or layout algorithm is chosen.

### Temporal knowledge graphs

[Knappe et al., *On a Generalized Framework for Time-Aware Knowledge Graphs*](https://journals.sagepub.com/doi/full/10.3233/SSW220010)
explicitly distinguishes validity periods from traceability of facts and notes
that time-aware and temporal terminology is used inconsistently. The [IJCAI
survey on Temporal Knowledge Graph Completion](https://www.ijcai.org/proceedings/2023/734)
shows how temporal validity is used to model evolving graph facts.

- Problem solved: represent and reason over facts whose validity or graph
  state changes over time.
- Similarity: E2R's Entity/Event/Relation space may later need temporal facts,
  provenance, and source or acquisition context.
- Difference: temporal KG completion is often prediction/embedding-oriented
  and fact-validity-centric; it does not settle E2R's distinction among
  occurrence, experience, publication, acquisition, claims, or display order.
- Adoption: **NO**. The need to separate validity from traceability is retained
  as a research principle, not a schema or query model.

## Exploratory principles

| Principle | Result |
|---|---|
| P1: one Event set may have multiple scoped temporal interpretations | SUPPORTED |
| P2: absolute time and ordinal sequence are distinct | SUPPORTED |
| P3: relative elapsed time is not ordinal rank | SUPPORTED |
| P4: alternative claims and distinct dimensions are separate | SUPPORTED |
| P5: subjective/experience order is not automatically false | SUPPORTED |
| P6: scope/context must identify an alternative order | SUPPORTED WITH QUALIFICATION |
| P7: partial and sparse coverage are valid future cases | SUPPORTED WITH QUALIFICATION |
| P8: current `temporalOrder` must retain its meaning | SUPPORTED |
| P9: semantic dimension count need not equal display dimension count | SUPPORTED |
| P10: 1D remains a valid projection of richer data | SUPPORTED |
| P11: semantic temporal values are not layout coordinates | SUPPORTED |
| P12: schema ownership and representation remain open | SUPPORTED |

## Non-goals and explicit non-decisions

This checkpoint does not authorize:

- a History schema change, Core change, or Extension version bump;
- a new `TemporalPerspective` object, `Assertion` object, or Relation
  semantics;
- reinterpretation of `temporalOrder`, introduction of `historyOrders[]`, or
  replacement of current History order;
- 2D or 3D NarrativeLine, WebGL, Three.js, or graph-3D implementation;
- a time-travel, OSINT, publication, acquisition, or perspective-specific
  schema;
- a query language, constraint solver, partial-order engine, or projection
  engine;
- a migration, Dataset rewrite, sample change, runtime change, or release
  work; or
- changes to NarrativeLine, LiaisonScape, Hub, Validator, Handoff, or
  `ai-knowledge`.

## Knowledge candidate

Knowledge Candidate: **YES - EXPLORATORY HYPOTHESIS**.

Potential reusable hypotheses are that one Event set can support several
scoped temporal perspectives, that absolute values and ordinal order should
remain distinct, that semantic temporal data must be separated from visual
projection, and that current one-dimensional views can remain valid
projections of richer future semantics. No promotion was made and
`ai-knowledge` was not modified.

## Roadmap and final boundary

The roadmap receives one compact future-direction cross-reference under the
existing History/temporal research area. It does not change the active
LiaisonScape checkpoint or reorder any Suite, OSINT, Storage, Federation, or
Sponsors work.

Final state for this checkpoint:

- Core changed: **NO**;
- Stable History/Extension/schema changed: **NO**;
- current History order semantics changed: **NO**;
- Dataset, samples, Handoff, NarrativeLine, LiaisonScape, Hub, or Validator
  changed: **NO**;
- 2D/3D implementation, WebGL, Three.js, query language, solver, and
  projection engine selected: **NO**;
- `ai-knowledge` changed: **NO**;
- current LiaisonScape Initial Placement priority changed: **NO**; and
- implementation, migration, release, tag, push, deployment, and publication:
  **NONE**.
