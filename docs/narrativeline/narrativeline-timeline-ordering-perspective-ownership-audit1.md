# NarrativeLine Timeline Ordering / Perspective Ownership Audit 1

Date: 2026-09-27

Status: **AUDIT COMPLETE / HUMAN DESIGN DECISIONS REQUIRED / NO IMPLEMENTATION AUTHORIZED**

## Purpose and scope

This audit prepares Human decisions for the concrete NarrativeLine workflow
recorded in the [current Roadmap entry](../roadmap.md#narrativeline-human-authored-timeline-ordering-synchronization-2026-09-27): use Relative Time-derived band order in the Timeline, allow Human ordering within unordered bands and among undated Events with no Relative Time Relation, and allow a dated/undated visual interleave. A Human may also want the authorial arrangement to travel intentionally with the Dataset.

The requested order is **display intent**. It must not generate or change Civil
Time/date/clock values, History `temporalOrder`, Recorded Relative Time
`before`/`after`, other inferred temporal facts, or Core Object identity. This
audit neither adopts Perspective nor selects an owner, data model, UI, schema,
serialization, or application structure. It keeps the accepted Relative Time
0.2.0 semantic and presentation closure intact.

## Current evidence inspected

### Repository and Git state at audit start

- E2R-SPEC: branch `main`, HEAD
  `b9c756395b6fb3adbb8a4942bd92c76b441ef16c`
  (`docs: reopen NarrativeLine display-order planning`), `origin/main` ahead
  count 14. Existing changes were `M docs/roadmap.md`,
  `M sessions/E2R-Session-0094.md`, and untracked `work/` artifacts. The audit
  document itself was already untracked from the preceding checkpoint. These
  paths were treated as protected baseline; `work/` was not inspected or
  changed.
- NarrativeLine: branch `main`, HEAD
  `62976b506a87034b90c52cd3e8430d589ac79158`
  (`docs: record Relative Time presentation acceptance`), `origin/main` ahead
  count 16, clean worktree at inspection. Source and tests were read only.
- The workspace knowledge sources `C:/Users/extra/E2R/ai-knowledge/INDEX.md`
  and
  `C:/Users/extra/E2R/ai-knowledge/decisions/application-modularization-and-incremental-extraction.md`
  were consulted. The accepted decision requires responsibility-based,
  incremental extraction where a useful boundary is evidenced; it prescribes
  neither a fixed file layout nor a service/component split.

### NarrativeLine implementation and tests

The following current files were inspected under
`C:\Users\extra\E2R\e2r-narrative-line`:

- `src/services/HistoryService.ts`: `compareEventsByHistoryDate` compares
  valid recorded dates and available Civil Time fields, applies
  `temporalOrder` within its applicable contract, then uses Event ID as a
  deterministic fallback.
- `src/screens/TimelineScreen.tsx`: the ordinary Timeline sorts a copied
  `[...dataset.events]`; it does not reorder the Dataset Event array. It does
  not use Relative Time bands in that comparator.
- `src/services/RelativeTimeService.ts`: the display projection currently
  admits Events with no History extension, no History position, and no date.
  It derives directed levels from recorded Relative Time assertions, reports
  incomparable pairs, emits disconnected components as separate groups, and
  suppresses a cyclic component from that projection. Dataset Event-array
  order is the current within-band tie order.
- `src/components/RelativeTimeTimelineProjection.tsx`: the accepted
  supplementary Relative Time projection is a separate collapsed surface,
  not the ordinary Timeline list. It displays derived bands and recorded
  Relations separately. Its current acceptance is not reopened by this audit.
- `src/services/DatasetService.ts`: import parses and validates a Dataset;
  export serializes the Dataset after preparing its specification declaration.
  A Dataset-contained Extension is therefore the existing interchange path in
  principle, subject to a future Extension contract and preservation behavior.
- `docs/editing-model.md`, `docs/ui-spec.md`,
  `docs/priority-feature-backlog.md`, and
  `docs/chatgpt-priority-feature-design-handoff.md` were checked against the
  code and current E2R-SPEC Roadmap.

Relevant current tests include:

- `tests/History2Boundary.test.js` and `tests/ValidationService.test.js` for
  History comparison behavior;
- `tests/RelativeTimeUserFacingService.test.js` for eligible Events,
  incomparable pairs, and cycle suppression;
- `tests/relativeTimePresentationIntegration.test.js` for the accepted
  supplementary bands, separate recorded assertions, and non-mutation; and
- `tests/eventIdentityPresentationIntegration.test.js` for ordinary Timeline
  chronology and its separation from the supplementary Relative Time view.

These tests protect existing boundaries. The inspected source and test search
found no Human-authored Timeline reorder operation or regression test for one.
This audit does not change those tests or claim a runtime defect.

### E2R authority and prior research

- [`spec/core.md`](../../spec/core.md): Dataset `entities`, `events`, and
  `relations` arrays have no required order. Their array position is not an
  interoperable authorial-order contract.
- [`extensions/history-extension.md`](../../extensions/history-extension.md):
  `temporalOrder` is limited relative chronology and explicitly excludes
  display order, narrative reveal order, layout order, and custom Timeline
  visualization order. The source also says persisted non-temporal authorial
  order belongs outside History.
- [`docs/application-recommendations.md`](../application-recommendations.md):
  temporary custom display order is Application View State. Intentionally
  persisted non-temporal authorial order for interoperability belongs to a
  future persisted authorial-context Extension, provisionally called
  Perspective, rather than History or Presentation.
- [`docs/application-design-principles.md`](../application-design-principles.md)
  distinguishes Derived results from Owned Dataset content and keeps
  application-local selection, temporary sorting, and scroll position outside
  the Dataset.
- The adopted [Relative Time atomic semantics](../temporal/relative-time-atomic-recorded-assertion-semantics-adoption1.md)
  keep Recorded assertions distinct from Derived conclusions; no write-back
  into History is adopted. The Human-selected [extensible temporal-assertion
  direction](../temporal/relative-time-extensible-temporal-assertion-direction1.md)
  makes Relative Time a portable temporal vocabulary, not a feature for
  storing arbitrary application order.
- [Multidimensional History and Temporal Perspectives
  Research](../../research/exploratory/e2r-multidimensional-history-temporal-perspectives.md)
  supports scoped alternatives to one global History order as a research
  direction, but leaves identity, owner, representation, scope, and partial
  order open. It is exploratory; it is not an adopted Perspective Extension.
- [Causal Order, Relative Time, and Undated Event Placement
  Research](../../research/exploratory/e2r-causal-relative-order-and-undated-event-placement.md)
  distinguishes temporal precedence from derived display order and preserves
  cycle/conflict boundaries. Its historical question about *factual*
  precedence between dated and undated Events does not define the current
  request's *non-temporal visual placement*.
- The [2026-09-07 display-order audit](./narrativeline-display-order-reordering-audit.md)
  remains an accurate historical defer decision for its then-current
  requirements. It is not rewritten. The current Roadmap records the later
  Human requirement and reopens planning.
- The accepted [Relative Time Timeline presentation audit/result](./narrativeline-relative-time-timeline-projection-presentation-audit1-result.md)
  and follow-up closure govern the supplementary projection. The new ordinary
  Timeline ordering workflow can consume derived ordering evidence without
  changing that accepted surface, identity presentation, or Relative Time
  semantics.

## Responsibility boundary

| Responsibility | What it means here | Must not become |
|---|---|---|
| History chronology | Recorded Civil Time and limited recorded temporal order. | Arbitrary authorial display rank. |
| Recorded Relative Time | Independent Event-to-Event temporal assertions. | A list position or implicit repair mechanism. |
| Derived Relative Time bands | A recomputable, display-only projection of eligible Recorded assertions. | A stored total order or new temporal fact. |
| Human-authored non-temporal order | Intent about how an Event sequence is displayed or narrated. | A timestamp, chronology claim, or Relation mutation. |
| Application View State | Local, transient or locally retained choices such as active view, selection, scroll, collapsed sections, and temporary custom arrangement. | Portable Dataset meaning unless explicitly adopted through a suitable owner. |
| Presentation | Visual appearance/layout properties. | The owner of arbitrary Event sequencing by default. |

A user can place an undated Event visually between dated Events without
asserting that it happened between them. The product must distinguish that
placement from temporal precedence. Conversely, where a recorded temporal
constraint exists, a manual move cannot erase, reverse, or repair it. How the
Timeline reconciles these simultaneously visible orders is a Human design
choice.

## Is Perspective the minimum and appropriate portable owner?

**Finding:** Perspective is the best-supported *existing candidate* for
portable, non-temporal authorial context because current application guidance
already points there. The evidence does not establish that a generic
Perspective model is the *minimum* design or that it has been adopted. It is
not registered, and its ID, version, schema, scope, lifecycle, and order
representation are unresolved.

There are two plausible readings:

1. If the portable content is an authored sequence that may express a chosen
   narrative, editorial, analytical, or other context, Perspective is a
   plausible umbrella responsibility. A first product could support only one
   default arrangement without claiming that multiple Perspectives are
   already implemented or required.
2. If the need is only one Dataset-carried NarrativeLine Timeline sequence,
   a narrower authorial-sequence responsibility may be smaller than a general
   perspective model. It would be less reusable across views and applications
   and could require a later migration if named or multiple contextual orders
   become necessary.

“Perspective” should therefore remain a provisional responsibility name during
decision preparation. Human should choose whether the intended portable
meaning is a general scoped authorial context or one narrow sequence. This
choice does not need to settle an Extension ID or schema in this audit.

## Candidate responsibility models

| Candidate | Meets Dataset portability? | Fit and trade-off | Authority status |
|---|---|---|---|
| Perspective / scoped authorial context Extension | Yes, if Dataset-contained and round-tripped. | Best fit when order has a named/contextual authorial perspective or could coexist with other authored sequences. Broader than necessary if there is exactly one default sequence. | Existing non-normative recommendation; unadopted candidate. |
| Narrow Dataset-carried authorial sequence responsibility | Yes, if defined as a portable Extension. | Potentially the minimum for one Timeline order; does not automatically cover multiple views, authors, or perspectives. Naming and migration path remain design work. | A viable alternative, not an existing adopted model. |
| NarrativeLine-local preference or application workspace state | No, not in the E2R Dataset by itself. | Suitable for temporary or per-user order across reloads; can preserve local preference without changing/exporting Dataset. Does not satisfy cross-app/Dataset-file portability. | Application responsibility. |
| Companion sidecar/project file | Only when deliberately bundled and exchanged with its Dataset. | Could avoid immediate Dataset schema work, but creates linked-file lifecycle, transfer, identity, backup, and missing-sidecar issues; other E2R consumers will not see it through ordinary Dataset import. | Possible application/project architecture; no current common contract. |
| Existing Presentation Extension | Technically Dataset-carried, but wrong current owner. | It currently carries LiaisonScape Relation arrow and line-style properties. Its draft excludes arbitrary application preferences; order is authorial sequence, not visual appearance of an object or relation. | Reusing it conflicts with its defined scope and current application recommendation that authorial order is not Presentation-owned. A distinct approved responsibility would be needed. |
| History `temporalOrder` or History expansion | It persists, but does not meet the non-temporal meaning. | Appropriate only when expressing temporal chronology under History's limited contract. Cannot mean that an Event appears between two dated Events solely for display. | Direct conflict with current History authority. Do not select. |
| Relative Time assertions/Extension | Portable, but temporal. | Appropriate for independently known before/after/other supported temporal facts, not manual display moves. | Conflicts with the accepted Recorded temporal assertion boundary if used as a display-order store. Do not select. |
| Core Event-array order | Already travels as array serialization, but Core gives it no order semantics. | Consumers may preserve array order accidentally, but cannot interpret it interoperably as authorial intent. | Conflicts with Core's unordered collections and must not be assigned new meaning for this feature. |
| Dataset Metadata | Dataset-carried, but metadata concerns identity/title/description/provenance-style context rather than an Event sequence contract. | Could label a Dataset or its creator, not provide a specified order semantics. | No current authority assigns this ordering meaning to Metadata. |

Unknown Extension preservation is important for any portable choice, but
preservation alone does not give another application the semantics to interpret
an ordering record. A NarrativeLine-specific Extension would likewise be
portable bytes without guaranteeing cross-application support.

## What belongs in portable state and what stays local?

If Human selects Dataset portability, the portable data should contain only
what another implementation needs to preserve and interpret the authored
ordering intent. At minimum, the later design must decide:

- which Events are in scope and how the scope is identified;
- whether the intent is one default sequence or a named/contextual sequence;
- the authored relative placement/order and how incomplete coverage is
  interpreted;
- how the stored order coexists with the independently stored temporal
  assertions and derived bands; and
- how unsupported readers preserve, ignore, or report it without converting it
  to History or Core array order.

Do not copy local state into portable data merely because it is visible on
screen. Selection, focus, scroll position, expanded/collapsed Relative Time
view, viewport, temporary sort mode, keyboard focus target, and transient move
feedback remain application-local. If the same app retains a temporary order
between launches, that still can be local Application View State; persistence
duration alone does not make it Dataset-portable.

If order is exported as Dataset content, changing it is an intentional
Dataset-owned mutation with dirty/export consequences. If local-only, it must
not make the Dataset dirty or appear in ordinary E2R export. This is a
user-visible distinction that the product must label clearly.

## Ordering representation: required properties and trade-offs

No concrete representation is selected. A future choice should satisfy the
selected ordering scope, use stable Event identity rather than names or array
indices, tolerate partial coverage, preserve independent temporal data, and
have deterministic rules for imports, unsupported consumers, edits, and
conflicts.

| Representation family | Strength | Main cost / risk |
|---|---|---|
| Ordered Event ID list | Directly expresses a total display sequence and readily represents an undated Event between dated anchors. | Must define partial lists, new Events, missing/deleted IDs, duplicate IDs, scope, and whether unlisted Events append or enter a derived position. An ID list is still display intent, never a temporal assertion. |
| Pairwise authorial placement constraints | Can represent sparse order and local “before this item” intent; may retain more unaffected placements after edits. | Needs a conflict/cycle policy, closure/display algorithm, and distinction from Relative Time Relations despite similar graph shape. No schema or Relation reuse is implied. |
| Stored rank/position tokens | Can support insertions without rewriting the entire order. | Rank generation, renumbering, collision, concurrent edits, and meaning of gaps need rules; arbitrary ranks must not be mistaken for History `temporalOrder`. |
| Anchored insertion slots | Can express “between Event A and Event B” and preserve a human-chosen location. | Anchors may be moved or removed; multiple items can compete for one slot; stale anchors need diagnostics and fallback. |

An ordered list is a reasonable candidate if Human wants one total authored
sequence; sparse constraints may fit partial ordering better. Choosing either
before deciding whether order is total, partial, scoped, default, or multi-view
would prematurely constrain the product contract.

## Composition with Relative Time bands and dated/undated Events

The current projection does not emit a single order for all Timeline Events:
it considers only undated, History-free Events, creates separate connected
groups, and assigns each group's derived display bands. Its level bands are a
presentation of asserted partial order; they are not absolute temporal bins
and do not order disconnected groups. The user requirement to use them in the
Timeline primary ordering is a new composition contract, not a change to the
accepted supplementary projection.

At least three composition models remain viable:

| Model | Rule shape | Consequence |
|---|---|---|
| Band-constrained local order | Derived band sequence stays intact; author order changes only items Human has been told are unordered within a band. | Preserves Relative Time's visible precedence, but alone cannot place unrelated undated Events among dated Events or order disconnected groups. |
| Full authored display sequence | Human controls the complete display sequence; Relative Time bands remain separately available as Recorded/Derived context. | Directly supports arbitrary dated/undated interleave. Visible order can cross recorded-date order, so the Timeline must communicate that it is an authored presentation and keep temporal facts separately inspectable. |
| Constrained composition | Recorded dates and Relative Time precedence constrain parts of the sequence; authorial intent controls only chosen gaps/unordered sets. | Could balance chronology and placement, but must define priority, compatibility, and fallback for every crossing/conflict. A new constraint solver is not assumed or authorized. |

Key Human decisions include:

- Does manual display intent apply only within one Relative Time band, or may it
  cross band boundaries?
- May the display sequence visually reverse two Events with distinguishable
  recorded dates? If not, how can an undated Event be interleaved between them
  without a recorded temporal relation?
- Are disconnected Relative Time groups fixed in separate group frames, freely
  ordered as units, or flattened into one author-controlled sequence?
- Where do undated Events with no Relative Time edges enter relative to
  connected groups?
- If a relation path constrains A before C while B is incomparable, can Human
  place B before, between, or after those Events? If two independent sources of
  display intent differ, which is visible and how is the disagreement exposed?

No answer may alter or repair Recorded Relations. If preserving the relative
band order is a strict display constraint, manual controls must be limited or
must report when a requested move crosses it. If a full sequence may differ,
the Timeline should retain access to the accepted supplementary relation view
and label authorship so the list is not misread as temporal inference.

## Changes that can stale or conflict with authored placements

Persisted placement does not become semantically stale merely because a
temporal input changes; it becomes **in conflict with or incomparable to the
current projection** under whatever composition Human selects. Do not silently
reinterpret a stored position as temporal truth.

| Later change | Evidence effect | Decision the persisted model needs |
|---|---|---|
| Add an Event | No author placement exists yet. | Append as unplaced, insert by existing chronology, or explicitly ask the author. A derived default must remain distinguishable from authored order. |
| Delete an Event | Stored IDs or anchors may become dangling. | Define atomic cleanup or retain a diagnosable orphan until explicit cleanup; do not recreate the Event or mutate Relations. |
| Rename an Event | Identity is unchanged. | Keep the placement through stable ID; never key order by mutable Event name. |
| Add, edit, or delete a Relative Time Relation | The Derived graph/bands may change or a component may split/merge. | Preserve the authored record and either keep its visible order, flag a conflict, or mark only affected placements stale. Do not auto-edit the Relation or authorial order. |
| Add/change/remove History | The Event may enter/leave date-sorted presentation and affect its position among dated Events. | Decide whether authored position remains authoritative display intent, becomes a conflict against chronology, or is limited to a permitted gap. Do not write `temporalOrder`. |
| Create a Relative Time cycle | Current Relative Time projection suppresses the affected component. | Decide whether author order can still display those Events, whether the existing primary History order is fallback, and how the conflict is communicated. Manual order cannot be treated as cycle resolution. |
| Replace/open another Dataset | Local state may accidentally attach to a different content set or reused ID. | Key local state to a reliable Dataset/workspace context and define clear/reset behavior. Portable order should travel only with its Dataset payload. |

For a local-only first slice, retaining a transient sequence and resetting it
on Dataset replacement may be sufficient if clearly communicated. For portable
state, Event membership, sparse/unlisted Events, deleted targets, stale
anchors, new Events, History changes, Relative Time graph edits, unknown-reader
round trips, and cycle/conflict handling are pre-implementation contract
questions. A later UI can choose how to display diagnostics, but must not
silently discard or reinterpret the underlying authored intent.

## Accessibility and interaction direction

Interaction method should expose the selected ordering operation without
embedding pointer coordinates into the data model. The existing application
recommendation and NarrativeLine handoff prefer Earlier/Later controls before
drag and drop. This remains a sound direction: keyboard-operable move controls,
clear position announcements, and predictable focus after a move can serve as
the baseline; drag and drop, if later wanted, should call the same move
operation and remain optional.

The model changes interaction scope:

- a band-local sequence can expose move controls only within that band;
- a full sequence needs controls that can cross date and group boundaries;
- a sparse relation model may require a placement picker or “move before/after”
  target choice rather than repeated single-step movement.

The interaction must tell users whether a move is local-only or changes the
Dataset and therefore the exported portable order. Screen-reader announcements
should describe display position, not “earlier/later in time,” unless a
separate Recorded temporal assertion says that. The exact text, keyboard
shortcuts, and drag behavior can wait for interaction design after the owner
and composition model are selected.

## Modularization evidence

NarrativeLine currently separates History comparison, Relative Time projection,
Timeline rendering, and Dataset import/export into different responsibilities.
The accepted workspace policy says to extract incrementally by responsibility
when a boundary is clear; it does not prescribe file names or a Service split.
An implementation readiness review should inspect the actual ordering
controller/state and smallest useful boundary then, avoid expanding a root
component with all ordering policy, and preserve current functionality while
extracting only what the new feature requires. This audit selects no module,
component, service, or file layout.

## Human decisions required

Resolve these in order; later choices depend on earlier ones:

1. **Persistence goal:** Is the first release local Application View State,
   Dataset-portable authorial order, or a staged local-then-portable path?
   Does “keep across Datasets” mean the ordering follows the file when copied,
   or a user's private preference follows that user across files?
2. **Portable owner:** If Dataset-portable, is the intended meaning broad
   scoped authorial context (Perspective) or one narrow default Timeline
   sequence? Is a portable responsibility required now at all?
3. **Composition:** Is order band-local, full-sequence, or constrained? Can it
   cross derived band boundaries? Can it visibly cross distinct recorded
   dates? How are disconnected groups and unrelated undated Events placed?
4. **Partiality and scope:** Is every Event always ordered, or may placement be
   sparse with unplaced Events? Is there one Dataset default, one Timeline
   view, or more than one named order? Multiple Perspective semantics can be
   deferred if Human selects one bounded order, but the compatibility path
   should be understood before committing to a narrow encoding.
5. **Conflict policy:** When History or Relative Time edits contradict the
   current visible arrangement, preserve-and-warn, constrain the move, or mark
   affected order unplaced? How should a cycle fallback interact with manually
   authored sequence?
6. **Lifecycle:** What happens to new/deleted Events, renamed Events, stale
   anchors, and Dataset replacement? For portable records, which cleanup is
   automatic and which requires author action?
7. **Accessible interaction:** Confirm keyboard-accessible move controls and
   position announcements as baseline before considering optional drag and
   drop. Which move scope is exposed depends on decision 3.

This packet does not settle any of these choices. In particular, it does not
adopt Perspective, a new Extension, portable storage, an Extension ID/version,
schema, serialization, concrete order representation, default/multiple
Perspective semantics, or the NarrativeLine-local versus portable-state
boundary.

## Pre-implementation gate and deferrable details

### Resolve before any implementation that persists order

- whether the authored sequence is local or Dataset-portable and who owns it;
- what sequence/band/date constraints govern a move, including visual
  interleaving and conflict with recorded facts;
- the order's scope and whether it is total or sparse;
- behavior for Event add/delete, History changes, Relative Time changes,
  cycles, and Dataset replacement sufficient to avoid silent data loss or
  temporal reinterpretation; and
- accessible operation parity for the authorized scope.

If Human authorizes only a local prototype, no portable Extension is needed
for that prototype, but the local-versus-Dataset dirty/export boundary and
Dataset-switch/reset behavior still need to be explicit.

### Can wait until bounded implementation/design work

- exact Extension ID, exact version, schema, serialization spelling, and
  Validator rules, until a portable owner and meaning are selected;
- UI microcopy, visual treatment, and optional drag-and-drop details, after
  the keyboard-accessible move operation is agreed;
- storage compaction, rank-renumbering optimization, or concurrent-edit merge
  strategy, unless the selected representation requires them for correctness;
- support for multiple named Perspectives, if Human explicitly chooses one
  default sequence and defers multi-perspective use; and
- detailed warning layout for rare stale/conflict states, after the policy for
  retaining and exposing those states is selected.

These deferrals do not waive compatibility, preservation, or safety decisions
that the selected representation needs before it can be implemented.

## Documentation and Roadmap disposition

This result refines the existing audit document in place. The current Roadmap
already records the concrete Human requirement, identifies the ownership and
persistence audit as complete, points to this result, and leaves Human design
decisions as the required next gate. Its current priority/state did not change,
so no Roadmap edit was needed in this audit. The dated 2026-09-07 defer result
and earlier exploratory Research were left unchanged.

## Boundaries and result

This was a read-only cross-repository design audit plus an E2R-SPEC decision
packet. No NarrativeLine source, tests, samples, Dataset, Core, Extension,
schema, Validator, or migration was changed. The audit does not authorize a
prototype, implementation, release, deployment, push, tag, or publication.

`Timeline ordering / Perspective ownership audit = COMPLETE / HUMAN DECISIONS REQUIRED`

`Perspective adoption / portable model / schema / serialization = NOT DECIDED`

`Application implementation = NOT AUTHORIZED`
