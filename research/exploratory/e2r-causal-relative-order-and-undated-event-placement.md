# E2R Causal Order, Relative Time, and Undated Event Placement

Status: EXPLORATORY / EARLY-CAPABILITY RESEARCH

Date: 2026-09-02

This record investigates whether a bounded relative-temporal capability could be
delivered earlier than full History vNext. EARLY-CAPABILITY describes research
only. It does not authorize a schema, Extension, semantic vocabulary,
application implementation, or Dataset change.

## Result

Result: CASE 11 - MIXED / EXACT RESULT 1+2+3+4+5+6+7+8+9+10+11 /
DECISION I.

Causality and temporal precedence are distinct responsibilities. An
Event-to-Event Relation is structurally appropriate for a future causal
assertion, but a human-readable Relation name is not portable semantic typing.
Explicit before/after meaning belongs more naturally to a future Relative Time
or History-vNext responsibility than to the current temporalOrder field.

A partial temporal order can conceptually place undated Events relative to
dated anchors without inventing Civil Time. A deterministic linear Timeline
order is a derived projection and must not be written back as temporal truth.
The minimum portable precedence contract, conflict rules, and causal typing
boundary are not yet selected. The smallest next research is therefore the
minimum relative-temporal-precedence contract.

### Exact result clauses

1. DIRECTION SUPPORTED - Event causality should remain distinct from relative
   temporal precedence.
2. DIRECTION SUPPORTED - An Event-to-Event causal Relation fits the current Core
   endpoint model, but portable causal meaning requires semantic typing beyond
   a human-readable Relation name.
3. DIRECTION SUPPORTED - Explicit before/after semantics belong more naturally
   to Relative Time responsibility than to causality.
4. DIRECTION SUPPORTED - A partial temporal order can locate undated Events
   relative to dated anchors without inferring Civil Time.
5. DIRECTION SUPPORTED - A deterministic linear display extension of a partial
   order must remain derived presentation and must not be written back as
   Dataset chronology.
6. DIRECTION SUPPORTED - Known dates, explicit relative constraints, and
   qualified causal-derived constraints can be conceptually combined in a
   provenance-aware temporal constraint graph.
7. DIRECTION SUPPORTED - Constraint cycles and date contradictions must be
   exposed rather than resolved by inventing dates or reordering facts.
8. DIRECTION SUPPORTED - Screen position and spacing of undated Events must not
   imply unsupported date or duration.
9. DIRECTION SUPPORTED - A bounded early NarrativeLine capability may need only
   a minimal relative-precedence contract rather than the entire History vNext
   model.
10. PARTIAL - Causal-to-temporal inference should wait for portable causal
    semantic typing; explicit temporal constraints need not wait for it.
11. PARTIAL - Interval, duration, multidimensional perspective, competing
    claims, and approximation can remain later or separate responsibilities.
12. NOT SUPPORTED - Current temporalOrder alone is a general partial-order
    representation.
13. NOT SUPPORTED - Relation display label text should drive causal inference.

Decision: I - MIXED; SELECT THE SINGLE SMALLEST MISSING-EVIDENCE CHECKPOINT.

Selected next checkpoint:

E2R-HISTORY-RELATIVE-TEMPORAL-PRECEDENCE-MINIMUM-CONTRACT-RESEARCH1

It is selected only and is not auto-started by this record.

## Source inventory and reconciliation

| source | current conclusion | disposition |
|---|---|---|
| Stable History Extension | history.time is the primary temporal position; temporalOrder is limited relative order; inter-Event before/after, intervals, durations, and constraints are excluded | authoritative baseline; retained |
| History schema | validates the current Time Object and has no persisted Event-to-Event precedence structure | authoritative baseline; unchanged |
| History vNext target-scope research | intervals, target ownership, and competing applicability remain research/deferred | related evidence; not duplicated |
| History vNext cross-domain evidence | structural reuse of a temporal qualifier is not a shared semantic contract | supports caution around generic semantics |
| History vNext Model B/C fixtures | domain ownership and temporal representation remain distinct | supports responsibility separation |
| Multidimensional History research | scoped temporal perspectives can coexist; temporalOrder and display projection must retain their boundaries | narrower orthogonal follow-up; preserved |
| Temporal epistemic/names research | temporal applicability, claims, and domain ownership are not interchangeable | related boundary; not duplicated |
| Core specification | Relations connect Entity or Event endpoints; Relation-to-Relation endpoints are prohibited; Core defines no Relation type | structural authority |
| Dictionary Extension | vocabulary responsibility is separate from Core structure | semantic-typing dependency |
| Semantic vocabulary architecture | future Relation vocabulary is research, not current Core typing | causal typing remains open |
| Semantic layers | semantic Extensions and presentation/behavior remain separate | responsibility boundary |
| Relation endpoint vocabulary audit | Event-capable endpoints remain type-neutral; endpoint wording adds no Relation meaning | supports Event-to-Event shape |
| NarrativeLine HistoryService | current comparator uses valid dates, precision, temporalOrder where applicable, then Event ID | current implementation authority |
| NarrativeLine TimelineScreen | Timeline sorts a derived Event copy; unknown dates follow dated Events and show a placeholder | current presentation boundary |
| NarrativeLine priority backlog | dated/undated interleaving needs Relative Time or History-vNext ownership before a persisted writer | direct product evidence |
| NarrativeLine priority handoff | precedence, conflicts, cycles, migration, and preservation need design first | direct handoff evidence |

No dedicated live causal-order or relative-precedence research record was found.
Existing backlog and handoff material is reused rather than treated as a
completed design.

The e2r-spec start state was 525a926 on main tracking origin/main, with the
pre-existing protected modification to sessions/E2R-Session-0052.md. The current
LiaisonScape Initial Placement priority remains the selected structural-quality
experiment:
E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-FAMILY-STRUCTURAL-QUALITY-EXPERIMENT1.
This History research does not interrupt, reorder, or block that work.

## Current model

### Core Relation shape

The current structural shape is:

    Event A -- Relation Object --> Event B

This is an Event-to-Event Relation. The Relation Object is not an intermediate
Node and must not be represented as:

    Event A --> Relation Node --> Event B

Current Core permits Entity or Event at either endpoint and prohibits a
Relation-to-Relation endpoint. Relation direction is structural, not portable
domain meaning. Core defines no Relation type and does not decide whether a
Relation means causation, precedence, support, or another domain relationship.

### Current temporalOrder

The canonical field is extensions.history.time.temporalOrder. It is a limited
relative temporal order used when recorded temporal value and granularity cannot
otherwise distinguish Objects. It is not an arbitrary display rank, narrative
reveal order, general Event-to-Event constraint graph, complete partial-order
encoding, or replacement for explicit before/after relationships.

Its meaning is unchanged by this record. Current writers continue to use
temporalOrder rather than the legacy draft order field.

### Current NarrativeLine behavior

NarrativeLine currently sorts a derived copy of dataset.events by:

1. valid recorded date before Events without a valid recorded date;
2. stored Civil Time fields;
3. precision for an equal prefix;
4. temporalOrder when both values are applicable; and
5. Event ID as a deterministic fallback.

It does not read Event-to-Event before constraints, causal Relations, or a
partial-order graph. An Event without temporal information follows dated Events
and is displayed with a placeholder date. The Dataset Event array is not
reordered and temporalOrder is not generated merely to preserve display.

Explicit relative placement is therefore not a current product capability.

## Causality as semantic Relation

The statement causes(A,B) fits an Event-to-Event Relation structurally. Its
portable meaning does not follow from a Relation name such as causes because
name is a human-readable Core field and Core has no Relation type. A future
semantic vocabulary or typed Relation responsibility would need to identify the
predicate, direction, scope, uncertainty, and possibly domain.

Illustrative families include causes, contributes-to, triggers, enables,
prevents, responds-to, and consequence-of. They are not standardized here.
They can have different temporal behavior and must not be collapsed into one
universal causal type.

Prevents is a counterexample to blindly converting causality into a temporal
edge: the target may be hypothetical, attempted, prevented, or never occur.
Long-running conditions, disputed causation, logical dependence, and
domain-specific enablement create further boundaries.

## Causality and temporal order

The assertions are different:

    causes(A, B)
    before(A, B)

before(A,B) does not imply causes(A,B). Temporal succession alone does not
identify a causal mechanism.

causes(A,B) may correlate with before(A,B) in an ordinary world-time domain,
but the implication is not universal E2R semantics. Time travel, retrocausal
fiction, causal loops, logical dependence, persistent conditions, and uncertain
causation are falsification boundaries. A causal predicate may provide a
derived temporal constraint only under an explicitly applicable portable rule.
No such rule is selected here.

Causal and temporal graphs may share some edges, but need not share edge sets,
scope, provenance, or acyclicity rules. A causal cycle is not automatically a
temporal-precedence cycle or an invalid Dataset.

## Relative precedence as its own responsibility

before(A,B) means that A's relevant temporal occurrence precedes B's relevant
temporal occurrence. It does not state an exact date, elapsed duration,
interval boundary, causal mechanism, narrative reveal order, or screen position.

| candidate | interpretation | result |
|---|---|---|
| RT-1 ordinary Core Relation | reuse current Relation shape and human-readable meaning | structurally possible, semantically insufficient |
| RT-2 History vNext / Relative Time | temporal responsibility owns explicit precedence | natural candidate; needs minimum contract |
| RT-3 new temporal Extension | separate persisted temporal constraint layer | plausible; ownership open |
| RT-4 hybrid | typed causal Relation plus Relative Time precedence | strongest conceptual separation |
| RT-5 derived-only application state | display constraints never portable | temporary projection only |

No option is a schema decision. The current direction is the hybrid boundary:
typed causal meaning is separate from explicit temporal precedence, which is
separate from current temporalOrder.

## Partial-order model

Let V be the relevant Event set and E_t be explicit temporal precedence edges.
An edge A -> B means A occurs before B. If acyclic, transitive closure gives
derived precedence facts without requiring every pair to receive a rank.

For:

    A before B
    A before C
    B before D
    C before D

the known facts include A < B, A < C, B < D, and C < D, while B and C remain
incomparable. A total display rank may be operationally valid, but storing it
as Dataset truth adds a claim not supported by the source constraints.

The early direction uses strict before edges only. at-or-before, simultaneity,
immediately-before, and equality classes are not required for the first
capability. Direct versus transitive storage remains open; redundant transitive
facts must not be treated as contradictions.

## Stored versus derived responsibilities

| responsibility | example | status |
|---|---|---|
| stored temporal assertion | explicit A before B | future portable contract; OPEN |
| stored causal assertion | typed causes(A,B) | future semantic typing; OPEN |
| derived causal precedence | A before B from a qualified causal rule | future qualified derivation; OPEN |
| transitive temporal assertion | A before C from A before B and B before C | derived; storage policy OPEN |
| deterministic display order | A, B, C chosen from a partial order | application-derived presentation |
| display coordinate | x/y position in a Timeline | application-derived presentation |

NarrativeLine may eventually derive visible order or position for undated Events,
but must not silently write invented Civil Time, temporalOrder, before, or causal
Relations. Explicit user adoption requires a future defined workflow.

## Undated Event placement

Relative temporal placement is not date estimation. B can be known to occur
after A and before D without assigning B a Civil Time.

### Two-sided dated anchors

Given A at 1900-01-01, A before B, B before C, C before D, and D at
1900-04-01, B and C can be displayed between the anchors without receiving
1900-02-01 and 1900-03-01. Screen spacing must not imply those dates or a
proportional duration. Incomplete History granularity must be respected.

### One-sided dated anchor

Given A before B, B before C, and C at 1900-04-01, the chain has an upper
bound. It does not produce dates for A or B. A future display may use a
relative region, but the UI is not selected here.

### No dated anchor

A before B and B before C can form an undated relative sequence without an
absolute calendar placement. A separate undated region or another projection is
a presentation choice and remains open.

### Incomparable and unconstrained Events

If A before B and A before C are known but no B/C relation exists, B and C are
incomparable. A stable ID may choose a display tie-breaker, but that tie-break
is not semantic chronology. An unconstrained undated Event has no placement
evidence and must not be placed as if one existed.

## Dated-anchor and granularity boundary

Known dates can act as anchors, but current History preserves recorded
granularity and does not turn a year or month into a point instant. An early
capability must distinguish recorded value and precision, strict relative
constraint, interval-like bound, exact date, and display location.

Bound propagation must respect edge direction and current Civil Time comparison.
Conflicting bounds must be surfaced rather than fitted. Proportional screen
spacing is not required and must not imply unsupported duration.

## Conflicts and cycles

The following is a date/constraint conflict:

    A = 1900-04-01
    A before B
    B before C
    C = 1900-01-01

The system must not cosmetically place the Events or invent dates to make the
chain fit.

Likewise, A before B, B before C, and C before A is a temporal-precedence cycle
for ordinary acyclic world chronology. A future evaluator needs cycle/SCC
detection, but causal cycles and time-travel perspectives must not be globally
equated with invalid Dataset structure. Error terminology remains future work.

## Causal relation family boundary

| family | temporal implication in general | status |
|---|---|---|
| causes | often precedes in ordinary world time, not universal | qualified/open |
| contributes-to | may precede, overlap, or persist | no automatic implication |
| triggers | initiating relation with variable interval meaning | qualified/open |
| enables | logical/material precondition need not be Event occurrence order | no automatic implication |
| prevents | target may be hypothetical or never occur | no automatic implication |
| responds-to | often follows a trigger in a domain, not universal | qualified/open |
| consequence-of | causal dependence wording, not a complete time rule | qualified/open |

No vocabulary or automatic causal inference is adopted.

## Relation to Multidimensional History

This research is narrower than Multidimensional History and Temporal
Perspectives. It concerns ordinary/default chronology and a possible early
partial-order capability. It does not wait for experience perspectives,
publication/acquisition/recollection dimensions, subjective duration, 2D/3D
projection, or a general perspective abstraction.

The multidimensional conclusion remains intact: semantic temporal dimensions
and visual projections are separate, and temporalOrder is not reinterpreted.

## Relation to History vNext responsibilities

| concern | early placement status | reason |
|---|---|---|
| explicit relative precedence | BLOCKING | minimum semantic subject |
| partial order | BLOCKING | avoids false totality |
| conflict detection | BLOCKING | prevents cosmetic placement |
| dated-anchor semantics | BLOCKING for dated interleaving | respects precision and no date inference |
| intervals | LATER | not needed for strict precedence direction |
| duration | LATER | screen spacing must not imply it |
| approximation | LATER | not needed for minimum contract |
| bounded point | LATER/OPEN | richer temporal value |
| alternative claims | LATER | adoption and uncertainty exceed minimum |
| multidimensional perspectives | SEPARATE | broader research already recorded |
| provenance | OPTIONAL for derived view; LATER for portable assertion workflow | preserves source responsibility |
| semantic causality | SEPARATE; BLOCKING only for causal-derived edges | explicit precedence can avoid inference |

Full History vNext is not conceptually required before a narrow explicit
precedence capability, but the minimum contract is required before persistence
or implementation.

## Relation to Semantic / Dictionary responsibility

Explicit temporal precedence can be understood as temporal semantics without
deciding what a causal predicate means. Causal-to-temporal inference requires a
portable vocabulary and applicability rule. Semantic Relation typing therefore
does not block a future capability that consumes explicit precedence, but does
block inference from a human-readable causes name or untyped Relation.

## Early NarrativeLine capability levels

These are research labels, not product states:

| level | capability | status |
|---|---|---|
| EARLY-R0 | current dated/undated sorting and read-only temporalOrder | implemented baseline |
| EARLY-R1 | read-only projection of an already defined external constraint | possible after contract |
| EARLY-R2 | minimum portable explicit strict-precedence contract | next research target |
| EARLY-R3 | bounded dated-anchor placement with conflict/cycle diagnostics | earliest plausible user-visible slice after R2 |
| EARLY-R4 | persisted authoring/editing of relative precedence | later workflow/safety gate |
| EARLY-R5 | causal typing and qualified causal-derived precedence | separate later capability |

The smallest safe future user-visible slice is conceptually EARLY-R3, after
EARLY-R2 and its anchor/conflict boundary are accepted. No implementation is
selected.

## Event temporal-state classification

These are evaluation states, not schema enums:

| state | date known | relative constraints | derived bound | display confidence | semantic position |
|---|---:|---:|---:|---|---:|
| dated | yes, subject to granularity | none required | recorded value | recorded value only | partial/full per precision |
| relative between two anchors | no exact date required | yes | two-sided order | relative only | bounded, not dated |
| relative one-sided | no exact date required | yes, one bound | one-sided | relative only | partial |
| relative-only chain | no | yes, chain | relative sequence | relative only | ordered within chain |
| incomparable | maybe | partial only | no total rank | partial/ambiguous | pair not comparable |
| unconstrained undated | no | none usable | no | unknown | no |
| conflicting | any | inconsistent | blocked | diagnostic required | unresolved |

## Responsibility decisions

Causality: CAUSAL-C - both, with distinct ownership. A future typed
Event-to-Event Relation can carry causal meaning; a qualified rule may derive a
temporal constraint in a temporal responsibility.

Temporal precedence: TIME-C - hybrid. Explicit before/after belongs to a future
Relative Time/History responsibility and is not current temporalOrder or display
order. Exact schema ownership remains unresolved.

The Event-to-Event shape remains correct. A Relation is a Dataset object, not a
Node in a temporal or graph path.

## Principle classification P1-P15

| principle | result |
|---|---|
| P1 causality and temporal precedence are distinct | SUPPORTED |
| P2 temporal precedence does not imply causality | SUPPORTED |
| P3 causal semantics imply precedence only under an explicit valid rule/scope | SUPPORTED WITH QUALIFICATION |
| P4 partial order must not be silently totalized as Dataset truth | SUPPORTED |
| P5 display order must not be written to temporalOrder or Civil Time automatically | SUPPORTED |
| P6 undated Events can have meaningful placement without date estimation | SUPPORTED |
| P7 dated Events can bound undated Events without imputing dates | SUPPORTED WITH QUALIFICATION |
| P8 incomparable Events are legitimate | SUPPORTED |
| P9 conflicts must be surfaced, not cosmetically resolved | SUPPORTED |
| P10 human-readable Relation names are insufficient for portable causal inference | SUPPORTED |
| P11 causal Relation and Relative Time may need separate responsibilities | SUPPORTED |
| P12 early relative placement need not require all History vNext | SUPPORTED WITH QUALIFICATION |
| P13 screen distance must not imply unsupported duration | SUPPORTED |
| P14 semantic constraints and Timeline coordinates are separate | SUPPORTED |
| P15 known-date comparisons must respect current History granularity | SUPPORTED WITH QUALIFICATION |

## Smallest missing-evidence checkpoint

Selected:

E2R-HISTORY-RELATIVE-TEMPORAL-PRECEDENCE-MINIMUM-CONTRACT-RESEARCH1

This is smaller than the alternatives because it defines the common prerequisite
without deciding a full schema, causal vocabulary, or UI.

- Current temporalOrder compatibility cannot define a missing Event-to-Event
  constraint shape or partial-order boundary.
- Causal typing is needed only for causal-derived edges; explicit precedence can
  be researched independently.
- Anchor behavior depends on the precedence subject and strictness contract.
- Conflict handling depends on explicit edge and comparison semantics.
- A NarrativeLine experiment before the contract risks inventing semantics and
  totalizing a partial order.
- Full History vNext includes intervals, durations, claims, approximation, and
  perspectives not required by the minimum strict contract.

The follow-up should answer only subject/scope, strict edge meaning, direct
versus transitive representation, partial order/incomparability, interaction
with History granularity, conflict/cycle states, and preservation/unknown-data
behavior.

## Non-goals and explicit non-decisions

This record does not authorize:

- a before or after field;
- a Relative Time Extension or History version bump;
- a TemporalConstraint, TemporalPerspective, or assertion object;
- a causal Relation type, semantic dictionary entry, or inference rule;
- changing temporalOrder or adding historyOrders;
- a partial-order solver, topological-sort implementation, or cycle detector;
- Timeline placement code, an undated lane, UI markers, or spacing rules;
- invented Civil Time, duration, interval, or temporalOrder values;
- sample modification, Dataset migration, Validator semantic rules, or export;
- changes to NarrativeLine, LiaisonScape, Hub, Core, Extensions, or schemas; or
- promotion to ai-knowledge.

## Knowledge candidate

Knowledge Candidate: YES - EXPLORATORY HYPOTHESIS.

Potential reusable principles are that causal Relation and temporal precedence are
distinct; partial order can support placement without exact dates; linear
display order is not semantic chronology; derived positions must not synthesize
dates; dated anchors can bound undated Events; human-readable Relation labels
are not causal inference rules; and semantic constraints are separate from
Timeline coordinates.

No ai-knowledge entry was created or promoted.

## Roadmap and final boundary

The existing History/chronology roadmap direction is refined with a compact
cross-reference to this narrower research. The existing Multidimensional
History record is preserved. The active LiaisonScape Initial Placement
priority, Suite, OSINT, Personal Storage, Federation, Sponsors, and unrelated
roadmap order remain unchanged.

Final boundary:

- Core changed: NO;
- Stable History/Extension/schema changed: NO;
- temporalOrder changed: NO;
- Relation schema or endpoint semantics changed: NO;
- causal semantic type adopted: NO;
- Relative Time schema adopted: NO;
- new Extension adopted: NO;
- NarrativeLine changed: NO;
- LiaisonScape changed: NO;
- Validator changed: NO;
- samples/Datasets changed: NO;
- Multidimensional History changed: NO;
- ai-knowledge changed: NO; and
- implementation, migration, release, tag, push, deployment, and publication:
  NONE.
