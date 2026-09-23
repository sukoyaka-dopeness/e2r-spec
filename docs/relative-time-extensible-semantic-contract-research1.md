# Relative Time Extensible Vocabulary Semantic Contract Research 1

Date: 2026-09-24

Status: **RESEARCH / HUMAN DECISION PREPARATION — NON-NORMATIVE; NO NEW DECISIONS ADOPTED**

## Purpose and authority

This bounded research checkpoint organizes the remaining semantic-contract
questions for the Human-selected extensible Relative Time vocabulary. It is
not a normative specification, adoption disposition, schema proposal, or
implementation authorization. It records no new Human choice and does not
rank the options below.

The evidence order used here is: Stable Core and Stable History for their
existing authority; the current Relative Time Draft as a non-Stable candidate;
committed Human-selected direction documents for the scope they explicitly
select; exploratory Research and Cross-Audit as candidates/evidence only; and
Validator behavior/tests as implementation evidence, not normative authority.

## Current boundaries already selected

The [Human-selected extensible-vocabulary direction](relative-time-extensible-temporal-assertion-direction1.md)
sets the following boundaries for future contract work:

- Core Relation direction is structural only. Relative Time owns any temporal
  meaning assigned to its vocabulary. The existing orientation remains:
  `sourceId` is the reference/base Object, `targetId` is described relative to
  it, and the value describes the target relative to the source.
- One Relation carries one user-recorded temporal assertion. Independent
  assertions can coexist on separate Relations; no mirror Relation, merge,
  exclusive classification, or automatic winner selection is required.
- A known relationship may be recorded without History evidence. History
  values do not create, overwrite, or refine Recorded Relative Time. Any
  History-derived relationship is separate Derived/inference work. Unknown
  relationships need not be recorded.
- Human-selected `before` / `after` is a qualitative precedence claim between
  selected Core Objects. It is not `end(A) < start(B)` and does not assert a
  start, end, duration, whole extent, boundary, or additional precision.
- Future vocabulary directions include `within` / `contains`, partial
  `overlap`, symmetric `touching`, and `same-temporal-extent`; point-like Event
  within period Event is an intended use direction. Their exact boundary,
  shape applicability, and portable evaluation rules remain unresolved.
- `same-instant` remains distinct from equal temporal extents, with its laws
  and normative status unresolved. Calendar-granule and elapsed-offset
  assertions remain distinct quantitative families. Future precise scheduling
  constraints must not be smuggled into coarse `before` / `after`.

These are selected directions, not adopted normative semantics. In
particular, the user-selected vocabulary list does not by itself define an
interval algebra, a complete truth/evaluation model, or which combinations a
consumer can validate.

## Observed canonical and candidate evidence

| Evidence | What it establishes | What it does not establish |
| --- | --- | --- |
| [`spec/core.md`](../spec/core.md) | Core Relation connects Core Objects; endpoint direction alone has no Extension-specific temporal meaning. | Relative Time semantics or interval boundary rules. |
| [`extensions/history-extension.md`](../extensions/history-extension.md) | Stable History records temporal information about an Object; `temporalOrder` has its bounded existing role. | Pairwise Relative Time relations or interval topology. |
| [`extensions/relative-time-extension-draft.md`](../extensions/relative-time-extension-draft.md) | Non-Stable 0.1.0 draft has `relative-position` (`before`, `after`, `same-instant`), `containment` (`within`), calendar-granule and elapsed-offset families; it separates Recorded from Derived and prohibits automatic Relation creation/merge. | `contains`, `overlap`, `touching`, `same-temporal-extent`; a complete boundary/applicability contract. |
| [`relative-time-extensible-temporal-assertion-direction1.md`](relative-time-extensible-temporal-assertion-direction1.md) | Human-selected vocabulary families, inverse/symmetry directions, coexistence, no History fabrication, no precise reinterpretation of `before`, and broad future direction. | Adoption, serialization, evaluation, endpoint-membership rules, shape matrix, or solver behavior. |
| [`relative-time-before-after-semantic-direction-decision1.md`](relative-time-before-after-semantic-direction-decision1.md) and [`relative-time-bounded-contract-proposal1.md`](relative-time-bounded-contract-proposal1.md) | RT-BR-1 Choice 1 and its bounded non-normative wording candidate; no mandatory History grounding or inferred event boundary. | Adoption of the proposal or resolution of the broader vocabulary. |
| [`research/history-vnext/decisions/history-2x-relative-time-cross-audit1.md`](../research/history-vnext/decisions/history-2x-relative-time-cross-audit1.md) | Exploratory compatibility/candidate analysis, including History-shape limits, boundary gaps, and candidate derivations. | Human-selected or Stable authority for its candidate applicability or derivation rules. |
| Relative Time draft schema and Validator diagnostics/tests | Current structural shapes and a bounded implementation's supported diagnostics/derived examples. | Normative semantics or support for vocabulary absent from the current candidate schema. |

The current draft schema does not encode the broader Human-selected interval
vocabulary. History 2 structural representability, preservation, display, and
user-facing authoring are separate capabilities; none alone establishes a
portable temporal relation contract.

## Status distinctions and evidence tension

The following must not be collapsed into one authority level:

1. `before` / `after` bounded qualitative claim and the broader vocabulary
   direction are Human-selected, non-normative directions.
2. Their respective wording documents remain proposals/direction records, not
   adopted Relative Time semantics.
3. `within`, `contains`, `overlap`, `touching`, and
   `same-temporal-extent` are selected vocabulary directions whose detailed
   semantics remain to be specified.
4. Draft prose, Cross-Audit candidate tables, schemas, and Validator behavior
   are evidence at their stated candidate or implementation status; they do
   not silently settle the above details.

There is a specific evidence tension to preserve for Human review. The
Cross-Audit section **“History shape and Relative Time applicability”** says
that extent-to-extent relations wait for boundary semantics and that
“Before” for two extents must use an explicit rule such as
`end(A) before start(B)`. This is an exploratory candidate statement, not a
Human-selected rule. The later Human-selected extensible direction explicitly
says that coarse `before` must not be interpreted as `end(A) < start(B)`.
Accordingly, the Cross-Audit sentence cannot be carried forward as the meaning
of the selected `before`; if extent-specific scheduling comparison is wanted,
it belongs to a separately reviewed precise-constraint family. Whether and
how a qualitative assertion can be machine-evaluated for particular History
shapes remains distinct from what the user-recorded claim asserts.

The Draft and Cross-Audit also state strict `before` transitivity as a
candidate/selected derivation rule under compatible premises, while the newer
Human-selected direction expressly leaves transitivity and the differing
status unresolved. That discrepancy concerns Derived/order-law authority,
not the minimum meaning of an individual Recorded assertion. It is not
resolved here and would need reconciliation before a derived-semantics
contract relies on it.

## Remaining Human decision areas

The topics below are decision areas, not decisions made by this Research. A
Human may select one bounded area for a later checkpoint and defer the rest.
For each, “leave unspecified/defer” remains a viable option where noted.

### 1. Boundary and temporal-extent model

**Question.** What endpoint membership/occurrence model, if any, is required
for portable evaluation of interval relations?

**Already selected.** `touching` is directed toward boundary contact with
non-overlapping interiors; `within` excludes exact equality;
`same-temporal-extent` is distinct from `same-instant`. Boundary occurrence,
open/closed endpoints, point-at-boundary cases, and supported History shapes
are explicitly unresolved. Stable History does not supply this general
interval contract; the Cross-Audit reports History 2 boundary membership as
unsupported.

**Viable directions.** Defer endpoint formalization and treat these as
user-authored vocabulary claims without promising mechanical verification; or
define a portable endpoint-membership model before specifying interval
evaluation; or limit a future machine-evaluable contract to explicitly
supported shapes and leave unsupported combinations unclassified. This list
does not choose an endpoint convention.

**Consequences/dependencies.** Affects `within` / `contains`,
`overlap`, `touching`, `same-temporal-extent`, and any History-shape
compatibility/evaluation matrix. It need not block the already selected
qualitative `before` / `after` claim if that claim remains non-interval-specific.
It is needed before claiming portable mechanical classification at boundaries.

### 2. Portable meaning and scope of `overlap`

**Question.** What exact relation qualifies as partial overlap, and for which
temporal referents/shapes is that meaning asserted or evaluable?

**Already selected.** `overlap` is symmetric, distinct from containment and
exact coextension, and intended to mean partial overlap. Its exact meaning
and supported shapes are not selected.

**Viable directions.** Defer a formal test while retaining the vocabulary
direction; later define overlap only for a bounded set of determinate extents;
or define a broader contract that explicitly addresses points, uncertain
bounds, and endpoint membership. Any later wording must say whether shared
boundary alone counts (the selected `touching` direction says interiors do
not overlap there) and how cases involving containment/equality are excluded
or classified. No option is preferred here.

**Consequences/dependencies.** Depends on or must explicitly abstract over
the boundary model in Decision 1. Affects interoperability, validation, and
whether `overlap` can coexist as a distinct user-authored assertion alongside
other facts. No automatic classification from coarse History is authorized.

### 3. Equality of temporal extents versus point coincidence

**Question.** What makes two extents “exactly coextensive” for
`same-temporal-extent`, independently of `same-instant`?

**Already selected.** The concepts are distinct, and matching coarse History
values do not establish extent equality. Detailed equality/applicability is
unresolved.

**Viable directions.** Defer a portable equality test while allowing the
explicit assertion vocabulary direction to remain; define equality as
identity of the represented temporal set after endpoint-membership rules are
specified; or define a separate equality of a stated boundary description.
Those latter possibilities are not equivalent when boundary inclusion,
uncertainty, or granularity differs; this Research does not choose between
them.

**Consequences/dependencies.** Interacts with Decisions 1 and 2 and with
`within`'s exclusion of exact equality. The vocabulary distinction from
`same-instant` is already selected; only the portable extent-equality test is
open. It can be deferred if no consumer needs to evaluate or infer this
relation.

### 4. Coexistence, inverse/symmetric facts, and logical conflict

**Question.** Beyond the already selected storage rule (separate Relations,
one assertion each, no automatic mirrors/merge), what logical compatibility
or conflict behavior should a future consumer define?

**Already selected.** Multiple independent assertions may coexist, including
examples `before` + `overlap` and `before` + `touching`; selected inverse and
symmetry directions do not require reverse Relation storage. No exclusive
classifier, merge, or winner is selected.

**Viable directions.** Keep the contract assertion-preserving and make no
general consistency claim; define narrowly scoped contradiction checks only
when the relevant referents and interval meanings are comparable; or defer
all cross-assertion consistency semantics. The current evidence does not
justify global conflict rules over abstract Core Objects.

**Consequences/dependencies.** Affects diagnostics and any constraint
consumer, not basic storage of an explicit assertion. Potential tensions such
as `within` with its inverse or `before` with `same-temporal-extent` depend on
whether the assertions concern the same determinate referents; the selected
model does not automatically ground them to one History assertion. This
decision can be deferred for a contract that only defines individual
assertions and preserves them independently.

### 5. Cross-family entailment and quantitative assertions

**Question.** Do calendar-granule or elapsed-offset assertions entail a
qualitative `before` / `after` assertion for any consumer, or are they only
separate recorded families absent a distinct Derived rule?

**Already selected.** Calendar-granule and elapsed-offset are different
families; they may coexist with qualitative assertions. Recorded and Derived
remain distinct and History must not auto-create Recorded Relations.

**Viable directions.** Specify no cross-family entailment in the portable
atomic contract; define a later Derived-only implication under named
compatible calendar/scale premises; or leave it unspecified until a concrete
consumer needs it. None permits writing a derived result back as a Recorded
Relation without separate authorization.

**Consequences/dependencies.** Depends on calendar/scale compatibility and
the Derived provenance/evaluation contract, not on the meaning of each
individual recorded assertion. It can be deferred without blocking an
extensible vocabulary contract that treats families independently.

### 6. Applicability versus explicit assertion for point, period, and
uncertain/bounded shapes

**Question.** Which combinations can a portable consumer evaluate, preserve
as unsupported, or classify as out of scope, especially for point-like and
period Events and History 2 bounded/extent candidates?

**Already selected.** A user may assert point-like Event `within` period
Event. This does not settle boundary membership, History 2 authoring scope, or
all shape combinations. H2-POSITION-CIRCA remains accepted/closed; bounded
point, temporal extent, and multiple-assertion authoring remain deferred.

**Viable directions.** Keep semantic assertion capability independent from
History grounding and defer machine applicability; define a narrow
evaluation matrix for already-supported shapes only; or separately authorize
future History 2 shape research. These choices do not authorize the deferred
History 2 authoring shapes.

**Consequences/dependencies.** Depends on Decision 1 for boundary-sensitive
evaluation and may depend on a separate Human decision to reopen History 2
authoring. Structural representability, read/preserve, display, authoring,
and semantic evaluation must remain distinct. The Human-selected explicit
claim model means unsupported History shape need not erase a Recorded
assertion; what a consumer can verify is a separate contract.

### 7. Precisely constrained scheduling as an extensible family

**Question.** If future Gantt or scheduling consumers need finish-before-start,
lag/minimum gap, or shared boundaries, should these be a distinct precise
constraint family rather than a reinterpretation of qualitative `before`?

**Already selected.** Extensibility is a direction; examples such as
finish-before-start and boundary-relative offsets are not defined. Coarse
`before` must not be reinterpreted as `end(A) < start(B)`.

**Viable directions.** Defer precise constraints; later research a distinct
family; or decide a concrete scheduling use case and authorize a separate
bounded proposal. No representation or Gantt behavior is chosen here.

**Consequences/dependencies.** Independent of adopting the broad qualitative
vocabulary, but a later precise family needs explicit endpoint/extent,
boundary, units, and constraint semantics. It is not a prerequisite for the
other vocabulary families.

### 8. Derived order laws and inference scope

**Question.** If Derived conclusions are later needed, which order laws,
compatible premises, provenance, and evaluation limits are normative?

**Already selected.** Derived is separate from Recorded; no automatic
Recorded Relation creation or write-back is authorized. Human-selected
extensible direction leaves transitivity and the Cross-Audit status
difference unresolved.

**Viable directions.** Defer Derived semantics entirely; or open a separate
Derived-contract checkpoint that reconciles the draft/Cross-Audit candidate
transitivity statements before relying on them. No solver, closure, conflict
policy, or inference depth is selected.

**Consequences/dependencies.** Independent of a contract for direct
user-recorded assertions. It becomes necessary before claiming portable
transitive consequences or cross-family inference. The Cross-Audit's claim
that extent `before` should be explicit `end(A) < start(B)` is not adopted;
this issue is separate from any future precise scheduling family in Decision
7.

## Dependency and timing summary

- Decisions 1–3 are coupled for machine-evaluable interval topology, but the
  selected vocabulary directions do not force immediate endpoint formalism
  if the first contract is limited to what users explicitly record and
  consumers must not infer or falsely claim to validate.
- Decision 4 can be deferred while preserving multiple assertions; it is
  required only before defining cross-assertion diagnostics/consistency.
- Decisions 5 and 8 can be deferred while Recorded assertions remain
  independent and Derived behavior is explicitly unspecified/outside scope.
- Decision 6 can be narrowed to evaluation capability without reopening
  History authoring decisions. Reopening H2 authoring requires a separate
  Human authorization.
- Decision 7 is an independent future scheduling branch, not a prerequisite
  and not an interpretation of `before`.
- No topic here requires starting Causal order or Temporal Perspectives.

Thus, no single choice among these areas is declared a prerequisite for
researching or drafting every other family. A later bounded checkpoint must
state whether it defines (a) the meaning of a user assertion, (b) conditions
for machine evaluation, (c) Derived consequences, or (d) storage/schema. Those
are separate scopes and require separate authorization where applicable.

## Not decided or authorized

This Research does not:

- adopt any proposed vocabulary semantics normatively or promote Relative
  Time to Stable;
- change the current Relative Time Draft, schema, version, Validator, runtime,
  tests, or application behavior;
- select endpoint inclusivity, exact `overlap` tests, extent equality tests,
  or shape-specific truth/evaluation rules;
- revise the Human-selected direct `before` / `after` meaning or its endpoint
  orientation;
- adopt `same-instant` laws, transitivity, solver/closure, cycle,
  self-reference, contradiction, duplicate, diagnostic, or winner policy;
- define History comparison, Derived inference, cross-family entailment, or
  write-back;
- adopt deferred History 2 authoring shapes, reopen H2-POSITION-CIRCA, or
  determine implementation priority/order;
- define Timeline/Gantt projection, UI, or application behavior; or
- start Causal order, Temporal Perspectives, or another workstream.

## Sources inspected

- [Core specification](../spec/core.md)
- [Stable History Extension](../extensions/history-extension.md)
- [Relative Time Extension Draft 0.1.0](../extensions/relative-time-extension-draft.md)
- [Relative Time extensible-vocabulary Human direction](relative-time-extensible-temporal-assertion-direction1.md)
- [Relative Time `before` / `after` semantic direction](relative-time-before-after-semantic-direction-decision1.md)
- [Relative Time bounded wording proposal](relative-time-bounded-contract-proposal1.md)
- [Relative Time minimum temporal-precedence Research 1](../research/exploratory/e2r-relative-time-minimum-temporal-precedence-research1.md)
- [History 2.x / Relative Time Cross-Audit 1](../research/history-vnext/decisions/history-2x-relative-time-cross-audit1.md)
- [Temporal Research Human Decision Preparation](temporal-research-human-decision-preparation1.md)
- [Relative Time next-phase Human decision gate](temporal-next-phase-human-decision-gate1.md)
- [Roadmap current Relative Time direction](roadmap.md#current-relative-time-extensible-vocabulary-direction-2026-09-24)
- [Session 0094 current Relative Time sync](../sessions/E2R-Session-0094.md)
- Draft schema and read-only Validator temporal-diagnostics/tests as implementation evidence.

## Disposition

This is a research and Human decision-preparation artifact. It organizes
remaining semantic-contract areas and evidence tensions without selecting
options or recommending a sequence. All Human-selected directions above
remain non-normative; deferred Human decisions remain open. No canonical
specification, schema, Validator, application, roadmap, Session, or test was
changed for this checkpoint. No staging, commit, push, deploy, or
implementation is authorized.
