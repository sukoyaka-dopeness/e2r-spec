# NarrativeLine Perspective Ordering Representation Audit 1

Date: 2026-09-27

Status: **AUDIT COMPLETE / HUMAN REPRESENTATION DECISION REQUIRED / NO IMPLEMENTATION AUTHORIZED**

## Purpose and selected direction

This follow-up audits representations for a Dataset-portable,
Human-authored Perspective order. It records the direction in the Human's
2026-09-27 request and checks it against current E2R authority, Research,
Roadmap, Git history, NarrativeLine source/tests, and workspace knowledge.
The direction is selected for design preparation; this record does not adopt
Perspective normatively or define an Extension.

The current selected requirements are:

- portable authorial context under provisional Perspective responsibility,
  intended for NarrativeLine and potentially other applications;
- leave room for multiple Perspectives later, without requiring multiple
  Perspectives in the first supported slice;
- keep non-temporal display intent separate from History chronology, Recorded
  Relative Time, Derived bands, Core array order, and Presentation;
- allow partial/sparse coverage. An unplaced Event does not thereby gain a
  Human-authored order; new Events begin unplaced and may receive a separately
  identified Derived/default display position;
- remove a deleted Event's Perspective references in the same operation and
  preserve placement across rename by stable Event identity;
- retain Human order when History or Relative Time changes and warn if current
  evidence/projection disagrees; never automatically repair or discard either
  source;
- keep Relative Time cycles as Relative Time projection conflicts; Perspective
  does not solve or rewrite them; and
- use keyboard-accessible move operations as the baseline. Drag and drop may
  be considered later as another input to the same ordering operation.

When an authored display sequence crosses recorded dates or Relative Time band
order, retain the authored sequence and temporal evidence unchanged, show the
mismatch, and make the order easy for the Human to edit. This records the
selected direction, not final warning text or an adopted Extension contract.
The accepted Relative Time 0.2.0 semantics, authoring, supplementary
projection, presentation, and Event identity closure remain closed.

## Current source and Git evidence

At audit start, E2R-SPEC was on `main` at
`1526cb93fa8c25266b2c161d8038d024e57b83a1` (`docs: expand Timeline ordering
decision audit`), 15 commits ahead of `origin/main`. Existing worktree state
was `M docs/roadmap.md`, `M sessions/E2R-Session-0094.md`, and untracked
`work/`. Those existing paths were preserved; `work/` was not changed.

NarrativeLine was checked read-only on `main` at
`62976b506a87034b90c52cd3e8430d589ac79158` (`docs: record Relative Time
presentation acceptance`), 16 commits ahead of `origin/main`, with a clean
worktree. No NarrativeLine source or test was changed.

### NarrativeLine implementation and tests

The following live files were inspected under
`C:\Users\extra\E2R\e2r-narrative-line`:

- `src/screens/TimelineScreen.tsx` sorts a derived copy of `dataset.events`
  using `compareEventsByHistoryDate`; the Dataset array itself is not
  reordered.
- `src/services/HistoryService.ts` compares History values and applies
  `temporalOrder` within its temporal comparison contract, then a stable Event
  ID fallback.
- `src/services/RelativeTimeService.ts` derives bands only for eligible
  undated, History-free Events. It returns disconnected components separately,
  reports incomparable pairs, and suppresses a cyclic component from its
  projection. Dataset Event-array order currently breaks within-band ties.
- `src/components/RelativeTimeTimelineProjection.tsx` renders the accepted
  collapsed supplementary projection separately from the ordinary Timeline.
- `src/services/DatasetService.ts` parses/validates imported Dataset JSON and
  serializes Dataset content for export. This is the existing transport path
  for future Dataset-contained data; it does not define Perspective meaning or
  rank normalization.
- Relevant tests checked were `tests/History2Boundary.test.js`,
  `tests/RelativeTimeUserFacingService.test.js`,
  `tests/relativeTimePresentationIntegration.test.js`, and
  `tests/eventIdentityPresentationIntegration.test.js`. They protect History
  comparison, Relative Time bands/cycles/non-mutation, and the distinct
  ordinary Timeline. Source/test search found no Perspective writer, rank
  token, anchored Event order, or Human-authored reorder test.

This is a new capability; existing projection and chronology tests are
regression boundaries, not evidence favoring a Perspective representation.

### Current specification and Research

- [`spec/core.md`](../../spec/core.md) says Core Dataset arrays have no
  required order. Event-array position has no portable authorial meaning.
- [`extensions/history-extension.md`](../../extensions/history-extension.md)
  defines `temporalOrder` as an integer for relative temporal comparison where
  recorded values do not distinguish Objects. Values need not be sequential;
  applications MAY assign/regenerate them if relative temporal order is
  preserved. Display order, narrative reveal order, layout order, and custom
  Timeline order are explicitly outside `temporalOrder`.
- [`docs/application-recommendations.md`](../application-recommendations.md)
  assigns temporary custom order to application state and points intentionally
  persisted non-temporal authorial order toward a future authorial-context
  Extension, provisionally Perspective, rather than History or Presentation.
- The [Relative Time atomic semantics adoption](../temporal/relative-time-atomic-recorded-assertion-semantics-adoption1.md)
  keeps Recorded assertions separate from Derived conclusions; no manual move
  writes a temporal Relation or History value.
- The [ownership and persistence audit](./narrativeline-timeline-ordering-perspective-ownership-audit1.md)
  is the completed prior checkpoint. The Human's current choice narrows its
  open owner/persistence fork to portable Perspective design; representation
  and maintenance remain open here.
- The [multidimensional History / Perspectives Research](../../research/exploratory/e2r-multidimensional-history-temporal-perspectives.md)
  supports scoped orders as an exploratory direction but leaves ownership,
  identity, scope, and representation open. It does not adopt a Perspective
  Extension.

## Historical rank evidence and its authority

[Session 0005](../../sessions/E2R-Session-0005.md), created in Git commit
`978bffc` and expanded in `70058b9` on 2026-07-25, records an early History
`order` proposal: a lexicographically compared string whose gaps carry no
meaning beyond relative order; applications could regenerate/renumber it;
generation was left to applications, with sequential, sparse, and
LexoRank-like algorithms as examples.

That record is historical History design, not a Perspective decision. The
current [History Extension](../../extensions/history-extension.md) states
that earlier drafts used `order` and current writers use `temporalOrder`.
Git commit `b229508` completed the current History specification on
2026-08-07 with an integer and a narrower temporal meaning. The old allocation
discussion is useful only as a possible algorithm precedent; it does not
authorize rank tokens for Perspective.

The current spec permits applications to assign/regenerate `temporalOrder`
while preserving intended relative temporal order. It does not prescribe
renumbering on every import/export or save. Search of current spec, Research,
tests, and Git history found no adopted Perspective rank-rebalance rule and no
import/export normalization rule. The History permission is scoped to History
and cannot be transferred to Perspective without a separate contract.

## Anchor evidence and reported prior preference

The supplied handoff reports an earlier Human preference for an anchor-style
approach. In the checked E2R-SPEC roadmap, Git history, sessions, Research, and
workspace Knowledge, no accepted Timeline/Perspective serialization decision
for anchors was found. Relevant uses are different:

- [Causal/Relative Order and Undated Placement Research](../../research/exploratory/e2r-causal-relative-order-and-undated-event-placement.md)
  discusses dated anchors for *temporal constraints*, such as recorded
  `A before B before C`, and explicitly separates them from display order.
  That Research does not supersede or decide non-temporal authorial placement.
- [Session 0040](../../sessions/E2R-Session-0040.md)'s manual
  Relation-relative anchor concerns LiaisonScape graph
  geometry/label placement ownership, not Timeline Event sequence or a
  portable Perspective order.

The earlier ownership audit listed anchored insertion as a candidate, not a
selected representation. The Human should clarify whether the reported
preference means (a) a move interaction such as “place before/after this
Event,” (b) serialized references to anchor Events, or both. An anchor-like UI
operation can persist an ordered list or rank token; interaction and
serialization are separate choices.

## Four representation families

The four candidates are not the same abstraction. Rank tokens and ordered ID
lists encode a sequence among the Events included. Anchors and pairwise
constraints encode relationships between Events. Each can preserve partial
coverage, but the meaning and edit behavior differ.

| Representation | Fit for partial/sparse coverage | Strength | Main cost / risk |
|---|---|---|---|
| **Ordered Event ID list** | List only Events the Human has placed; omitted/new Events remain unplaced and receive a separate Derived/default position. The listed subset is totally ordered. | Direct and inspectable. Stable IDs preserve rename, deletion removes one item, and the list can place an undated Event among dated display anchors without asserting time. No rank allocation or rebalance contract. | A move rewrites the affected sequence. Must define how listed and unplaced Events compose and whether total order among listed members is intended. If Human means only local constraints, a list may assert too much. |
| **Rank / position token** | Give each placed Event a token within one Perspective; no token means unplaced. Assigned items have a total order. | A local move may update one token; insertion need not rewrite a long sequence. | Comparator, token domain, uniqueness, allocation, collisions, exhausted gaps, rebalance timing, round-trip stability, and Dataset dirty/export effects all need rules. It adds allocation complexity, not richer partial-order semantics than a list. |
| **Anchored insertion** | A placed Event refers to a stable neighbor or slot, such as after A or between A and B. | Closely matches insertion interaction and permits partial placement without ranks. | Anchor deletion/movement, one- vs two-sided anchors, several Events in one slot, chains, and re-anchoring require rules. Removing a deleted Event's anchor reference can lose surviving placement intent unless cleanup is atomic. A secondary order may be needed for multiple items in one slot. |
| **Pairwise authorial constraints** | Store only authored precedence edges; unrelated pairs remain unordered. | Best fit if the Perspective itself is intended to be a partial order rather than a sequence of placed items. | The UI still needs a deterministic display extension for unordered pairs. Constraints can cycle, including after edits/merge; a deleted middle Event can break sparse chains. Similar graph shape to Relative Time does not imply shared Relation identity or temporal meaning. |

An unplaced Event must not become authored merely to complete a total display
list. A stable fallback may display it, but the display source must remain
identifiable as Derived/default. A missing/deleted target must never recreate
an Event or change a temporal Relation.

## Rank allocation, rebalance, import, and export

Session 0005 supports only this high-level principle: an allocation algorithm
may change numeric/string tokens if the intended relative order remains. It
did not set an import/export normalization schedule. Current History authority
likewise allows order-preserving regeneration but says nothing about every
import, export, or save.

If Human selects ranks, the following contract questions are mandatory:

1. **Meaning:** token comparison orders only placed Events in the same
   Perspective. Numeric distance, lexical shape, and gaps have no temporal or
   additional authorial meaning.
2. **Allocation:** an explicit move allocates a token. Collision or token-space
   exhaustion is detected; it must not silently change user order.
3. **Rebalance:** if needed, reassign tokens in that Perspective while
   preserving its exact current order, atomically with the explicit move that
   requires space. Do not change History or Relative Time.
4. **Transport:** valid tokens should round-trip unchanged. Unconditional
   import/export rebalancing would rewrite portable Dataset bytes on a no-op
   transfer and cause avoidable dirty-state, diff, and merge churn.

This is an audit recommendation, not an adopted rule. The recommended starting
policy is **no automatic reassign/rebalance on import or export; rebalance only
as necessary within an explicit order edit, preserving order**. If Human wants
canonicalization during export, a separate decision must specify whether it
changes only output bytes or mutates Dataset state, whether that marks the
Dataset dirty, and whether repeated round-trips are stable.

An order-preserving rank rebalance may be semantically neutral while still
changing serialized Dataset data. It must not be hidden as a temporal repair.
If it is performed as part of a Human move, the order change and any needed
rebalance should be one atomic Dataset edit. No such behavior is implemented.

## Lifecycle and composition constraints

The selected Human directions narrow future representation design:

- New Events are unplaced. Derived/default display must not serialize them as
  authored.
- Event deletion removes its Perspective entry/reference in the same
  operation. Lists/ranks remove that member. Anchors/constraints remove all
  references and preserve remaining authored order where possible without
  inventing relationships silently.
- Rename preserves order through stable Event ID, never mutable Event name.
- History/Relative Time add/edit/delete preserves authored order and warns
  when date/band evidence differs. A move that crosses dates/bands changes
  authored display sequence but not temporal facts.
- A Relative Time cycle remains independently reported. Perspective does not
  resolve it. Whether the display retains its authored sequence in the
  affected region is a presentation policy, not cycle repair.
- Disconnected Relative Time groups are not ordered by their temporal
  Relations. Their display grouping and authorial sequence composition remain
  separate from the accepted supplementary projection.
- Multiple Perspectives remain a future requirement; the first schema may
  support one default only if it preserves a credible expansion path. Exact
  default/multiple semantics remain for a later Human checkpoint.

For list and rank, removing a deleted Event has a simple local operation. For
anchors, neighbor deletion may require re-anchoring surviving placements. For
pairwise constraints, deleting a middle Event may disconnect previously
authored relationships. These differences should be evaluated against the
Human's chosen deletion rule before a representation is selected.

## Accessibility and modularization

Keyboard move controls can operate on a list, rank, anchor, or constraint
model. “Move before/after a chosen Event” does not require persisting that
neighbor as an anchor. Drag and drop, if later added, should invoke the same
ordering operation and must not serialize pointer coordinates. Cross-band or
cross-date moves retain the Human sequence and announce/display a warning
without saying that the Event moved earlier/later in time.

The accepted workspace modularization decision requires incremental,
responsibility-based extraction when a useful boundary is evidenced and
rejects fixed file counts/layouts or wholesale rewrites. The audit selects no
NarrativeLine Service, component, state owner, or file split. A later readiness
review should inspect the actual Timeline ordering orchestration and isolate
only the smallest clear responsibility.

## Human decision packet

### Representation decision

1. **Ordered Event ID list — recommended baseline:** one sparse list of stable
   Event IDs per Perspective. Choose this if each Perspective totally orders
   its explicitly placed subset and rewriting that sequence on a move is
   acceptable. It is the simplest portable expression in the absence of scale
   or collaboration evidence.
2. **Rank tokens:** choose if local token updates solve an evidenced scale or
   collaboration need. If chosen, confirm no import/export normalization and
   rebalance only as needed during an explicit move, preserving order.
3. **Anchored insertion:** choose if the Human wants neighbor-relative
   placement as stored meaning, not only as an interaction. Confirm reference
   deletion, chains, slot ties, and re-anchoring. Confirm whether the reported
   earlier preference applies to storage, UI, or both.
4. **Pairwise constraints:** choose if sparse partial precedence, with
   unordered pairs, is itself required in portable Perspective meaning.
   Confirm cycle, disconnected-item, and deterministic presentation rules.

The choice can be two-stage: first select **sequence of placed Events** versus
**partial pairwise constraints**, then decide whether a sequence is encoded as
a direct list or tokenized positions. UI anchors do not determine this choice.

### Questions still requiring Human response

- Confirm the semantic model: sparse sequence of placed Event IDs, or partial
  authorial constraints that leave some placed Events mutually unordered?
- Is the earlier anchor preference for UI interaction, serialized anchors, or
  both? Repository evidence found no adopted Timeline anchor representation.
- If selecting rank tokens, confirm the recommended maintenance rule: retain
  tokens through import/export and rebalance only when required by a Human
  ordering edit, preserving relative order.
- Confirm that crossing a dated Event or Relative Time band preserves the
  authored move and warns while all temporal evidence remains unchanged.
- Is one default Perspective sufficient for the first design checkpoint,
  with multiple Perspectives left as a later extension of scope?

## Deferred checkpoint work and safety

The representation choice is the next Human gate. Extension ID/version,
schema, serialization spelling, Validator rules, default/multiple Perspective
semantics, migration, and concrete application modules remain deferred to a
separately authorized Perspective design checkpoint. No prototype, schema,
Validator, Dataset migration, application code, tests, samples, or public data
were changed or authorized by this audit.

## Roadmap disposition

The previous [ownership/persistence audit](./narrativeline-timeline-ordering-perspective-ownership-audit1.md)
is preserved as completed evidence. Human has now selected portable
Perspective design preparation and additional lifecycle/conflict directions,
so the Roadmap's prior “ownership and persistence audit next” label is stale.
This representation audit is recorded as complete, and Human representation
selection is now the next decision. Older defer and research records are not
rewritten.

`Perspective portable-order direction = HUMAN-SELECTED FOR DESIGN PREPARATION`

`Ordering representation = NOT SELECTED / HUMAN DECISION REQUIRED`

`Import/export rebalancing = NO EXISTING REQUIREMENT / RECOMMENDED AGAINST AUTOMATIC NORMALIZATION`

`Schema / serialization / prototype / implementation = NOT AUTHORIZED`
