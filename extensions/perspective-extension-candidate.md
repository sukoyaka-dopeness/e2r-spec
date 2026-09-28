# Perspective Extension Candidate — Human-Authored Event Ordering

Status: Candidate contract for Human review; not adopted, Stable, or implemented.

Proposed Extension identifier: `draft.github.sukoyaka-dopeness.perspective`

Proposed candidate specification version: `0.1.0`

This document prepares a portable contract from the Human-selected ordering
direction. The identifier and version are proposals, not registration or
adoption. The accompanying JSON Schema checks payload shape only. Core,
History, and Relative Time authority remain unchanged.

## Responsibility

This Extension carries Dataset-portable, Human-authored, non-temporal context
for Events. In this Candidate, its sole proposed capability is a sparse ordered
sequence of stable Event IDs within a named Perspective. The Perspective is a
cross-application scope: an application may consume it, but does not own its
portable meaning.

It does not record or derive Civil Time, dates, clock values, History
`temporalOrder`, Recorded Relative Time assertions, Derived Relative Time
bands, causal facts, Event identity, grouping, targeting, relevance, ranking,
coordinates, or application-specific view preferences. It does not change
Core Event-array order or arbitrate Relative Time cycles.

## Proposed payload shape

The payload is Dataset-level under the proposed identifier. It has no local
version wrapper; an adopted exact version would be declared through the
Specification Extension, following current Extension versioning authority.

```json
{
  "perspectives": {
    "main": {
      "name": "Narrative sequence",
      "eventOrder": ["event-a", "event-undated", "event-b"]
    }
  }
}
```

`perspectives` is a map keyed by Perspective ID, leaving room for multiple
independent scopes. Each entry has a human-readable `name` and an `eventOrder`
array. The Candidate schema permits one or more entries and an empty sequence;
this is a structural proposal only. No default Perspective, active selection,
or multi-Perspective editing behavior is defined. A first consumer may expose
one supported Perspective without claiming that other entries do not exist.

Each `eventOrder` lists a sparse subset of the Dataset's Events exactly once.
The list order is the Human-authored display sequence among those listed
Events. An omitted Event is unplaced in this Perspective; omission carries no
negative or temporal meaning. A consumer may compose unplaced Events into a
display using separately identified Derived/default rules, but MUST NOT write
those placements into this sequence without Human action.

The sequence is a portable semantic value, not a suggestion to store ranks.
An implementation MAY use private transient indexes or tokens, but MUST NOT
serialize them as ordering meaning. Import/export MUST preserve the sequence
without automatic normalization or renumbering. A Human move updates the
sequence. Anchor-like before/after controls may be used as interaction; an
anchor is not persisted by this contract.

## Identity, lifecycle, and evidence composition

Entries reference stable Core Event IDs, never names or array positions.
Renaming an Event preserves its reference. Creating an Event leaves it
unplaced. Deleting an Event removes its references from every sequence in the
same Dataset edit. An unresolved ID is stale data: consumers should retain it
when safely round-tripping unsupported or unknown payloads and surface it for
repair; they must not recreate an Event or infer one from the ID. Whether a
conforming writer rejects, preserves, or offers explicit cleanup for stale
references is an adoption decision below.

History and Relative Time changes do not rewrite `eventOrder`. A consumer
derives diagnostics by comparing authored sequence with current temporal
evidence and Derived bands. In particular, cross-date or cross-band order is
retained as authorial display intent and does not make an Event earlier or
later in time. A newly added History record does not silently stale or erase
placement. Relative Time additions, edits, deletions, disconnected groups,
and cycles likewise do not mutate the sequence. Conflicting/cyclic temporal
evidence remains owned and reported by the relevant temporal authority; this
Extension neither resolves nor suppresses it.

The payload contains no conflict flags, acknowledgments, warnings, or
Derived-band snapshot in this proposal. Those are not necessary to express
the selected order. Whether a Human's confirmation of a known mismatch must
itself travel with the Dataset is unresolved; consumers may otherwise derive
warnings locally. No conflict-resolution or confirmation transaction is
specified here.

## Consumer and interaction boundary

Applications that understand this exact contract interpret the same sequence
independently of application identity. Unknown or unsupported consumers should
preserve the Extension payload when practical and must not reinterpret it as
temporal evidence. A consumer that cannot retain unknown payloads has a
portability limitation that must be visible before destructive save/export.

Keyboard-accessible move operations are the baseline interaction direction.
Optional drag-and-drop must invoke the same order operation. Interaction may
offer “move before/after” without making anchors part of the Dataset contract.
Temporary ordering and view controls belong to local Application View State;
only intentionally portable authorial sequence belongs here. The boundary for
other NarrativeLine-specific preferences remains open.

## Structural schema boundary

The accompanying schema validates a payload object, non-empty Perspective
keys/names, and unique string IDs per sequence. JSON Schema cannot confirm
that IDs exist in the containing Dataset, validate the Specification
Extension declaration, detect temporal mismatch, manage Event deletion, or
preserve unknown Extension bytes in a particular application. Those require
Dataset-aware validation and consumer behavior, neither implemented by this
checkpoint.

## Human decision packet

The following forks remain open; this Candidate must not be treated as their
approval:

1. **Adoption and naming:** adopt this responsibility; confirm or replace the
   proposed Extension ID and exact version. The candidate is not in a Stable
   registry and is not promoted.
2. **Perspective identity and cardinality:** confirm the map-key ID and
   display name shape, whether an empty sequence is useful, and how the first
   consumer identifies its one usable Perspective. Decide later whether
   Dataset-level defaults or multiple-Perspective selection are portable
   semantics or application view state.
3. **Stale references:** choose detection, retention, warning, explicit
   repair, and write behavior when Event IDs are missing. Confirm whether
   ordinary conformance requires every listed ID to resolve to a current
   Event at save time.
4. **Conflict acknowledgment:** decide whether confirmation of a dated/band
   mismatch is only a local interaction state or portable Dataset data. If
   portable, define its identity, evidence binding, invalidation, and lifecycle
   without turning it into a temporal assertion.
5. **Composition and diagnostics:** decide what display rule combines placed
   sequence with unplaced Events, band order, disconnected Relative Time
   groups, and conflicting/cyclic projections. The sequence itself does not
   specify those presentation rules.
6. **Portable versus local state:** finalize which NarrativeLine controls,
   active selection, warning dismissal, and temporary reorder state remain
   Application View State. No application-owned state is added here.
7. **Unsupported round-trip:** set the required preservation behavior and
   user-visible handling when an application cannot interpret this exact
   version or contains multiple entries.
8. **Validation and transaction boundary:** decide whether a future Dataset
   validator enforces unique/resolved Event IDs, and how sequence edits,
   Event deletion, and any user-confirmed conflict state commit atomically.

Before implementation, resolve adoption/ID/version, sequence meaning and
Perspective identity/cardinality sufficient for a producer/consumer, stale
reference save policy, unsupported round-trip expectations, and whether
conflict acknowledgment is portable. Exact warning copy, control arrangement,
internal data structures, private rank allocation, and detailed accessibility
announcements can wait until application design, provided the keyboard move
operation remains accessible and uses the same semantic edit.

No Candidate-to-Stable promotion, Core/History/Relative Time change, runtime
implementation, Validator integration, migration, public sample change, or
Gantt work is authorized by this checkpoint.
