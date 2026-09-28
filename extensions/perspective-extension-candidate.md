# Perspective Extension Candidate — Human-Authored Event Ordering

Status: Human-adopted Candidate `0.1.0`; not a registered Stable Extension.

Candidate Extension identifier: `draft.github.sukoyaka-dopeness.perspective`

Candidate specification version: `0.1.0`

This document is the Candidate authority for portable Human-authored Event
ordering. Human adopted this bounded contract on 2026-09-28. Candidate adoption
does not register a Stable identifier or establish runtime support. The
accompanying JSON Schema checks payload shape only. The key words MUST,
MUST NOT, SHOULD, and MAY state requirements of this Candidate version.
Core, History, and Relative Time authority remain unchanged.

## Responsibility

This Extension carries Dataset-portable, Human-authored, non-temporal context
for Events. In this Candidate, its sole capability is a sparse ordered
sequence of stable Event IDs within a named Perspective. The Perspective is a
cross-application scope: an application may consume it, but does not own its
portable meaning.

It does not record or derive Civil Time, dates, clock values, History
`temporalOrder`, Recorded Relative Time assertions, Derived Relative Time
bands, causal facts, Event identity, grouping, targeting, relevance, ranking,
coordinates, or application-specific view preferences. It does not change
Core Event-array order or arbitrate Relative Time cycles.

## Payload and exact version

The payload occurs only at Dataset level under
`dataset.extensions["draft.github.sukoyaka-dopeness.perspective"]`. It has no
local version wrapper. A Dataset conforming to Perspective `0.1.0` MUST declare
this exact identifier and version through the Specification Extension's
`uses` entry. This Candidate defines no optional Features, so that entry has
no `features` field. Without an exact declaration, the Extension is present
but its version is unspecified; a consumer MUST NOT assume `0.1.0` semantics
solely from the payload key.

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

`perspectives` is a non-empty map keyed by a non-empty Perspective ID, unique
within this Dataset payload. Each entry has a non-empty human-readable `name`
and an `eventOrder` array, which MAY be empty. The ID is stable within the
Dataset and is not derived from the name, insertion order, or Event IDs. The
name is a label, not Perspective identity. Multiple entries are permitted;
their sequences are independent.

This version defines no portable default Perspective. Map order or JSON
serialization order MUST NOT select one. If a consumer has exactly one
applicable Perspective entry for this ordering capability, it MAY use that
entry. If several entries are applicable, a consumer MUST NOT silently select
the first or another implicit winner. It MAY obtain an explicit selection
through application state or defer Perspective authoring while preserving all
entries. Multiple-Perspective creation and switch controls are not required
of an initial consumer. An empty sequence remains an applicable entry; its
emptiness does not designate another entry as default.

Each `eventOrder` lists Event IDs without duplicates. For resolving IDs, a
consumer uses the containing Dataset's Core Events. The list order is the
Human-authored display sequence among listed Events. An omitted Event is
unplaced in this Perspective; omission carries no negative or temporal
meaning. A consumer MAY compose unplaced Events into a display using
separately identified Derived/default rules, but MUST NOT write those
placements into this sequence without Human action. A list may place an
undated Event between dated Events for display without claiming a date.

The sequence is the portable semantic value. Pairwise authorial constraints,
anchors, ranks, position tokens, their gaps, allocation, and rebalance are not
portable semantics in `0.1.0`. An implementation MAY use private indexes or
tokens and normalize them while preserving the sequence's meaning. Import and
export MUST NOT unconditionally renumber or rewrite the authored sequence.
An explicit Human move updates the sequence. Anchor-like before/after controls
MAY be used as interaction; they do not persist an anchor.

## Identity, lifecycle, and evidence composition

Entries reference stable Core Event IDs, never names or array positions.
Renaming an Event preserves its reference. Creating an Event leaves it
unplaced. When a writer supporting this exact version deletes an Event as one
Dataset mutation, it MUST remove that Event ID from every Perspective sequence
in the same mutation. A writer that cannot safely update an unsupported
Perspective payload must refuse that deletion rather than silently leave or
drop its references. A pre-existing imported reference to a missing Event is
a dangling reference: a supporting consumer MUST diagnose it and preserve it
during unrelated edits and round-trips. It MUST NOT automatically delete or repair
it. A dangling reference MUST NOT recreate an Event. Explicit Human repair
MAY remove it. This policy distinguishes deletion of an existing Event by a
supporting writer from preservation of an already dangling imported ID.

History and Relative Time changes do not rewrite `eventOrder`. A consumer
derives diagnostics by comparing authored sequence with current temporal
evidence and Derived bands. In particular, cross-date or cross-band order is
retained as authorial display intent and does not make an Event earlier or
later in time. A newly added History record does not silently stale or erase
placement. Relative Time additions, edits, deletions, disconnected groups,
and cycles likewise do not mutate the sequence. Conflicting/cyclic temporal
evidence remains owned and reported by the relevant temporal authority; this
Extension neither resolves nor suppresses it.

Temporal mismatches are Derived diagnostics, not Recorded Perspective data.
This version has no conflict flag, warning acknowledgment, or Derived-band
snapshot field. A consumer MAY require Human confirmation before saving or
exporting a known mismatch, but MUST keep that confirmation separate from the
portable Perspective payload. Another consumer can recompute diagnostics from
current temporal evidence. Relative Time cycles remain Relative Time
conflicts; the Perspective sequence does not repair them.

## Consumer and interaction boundary

Applications that understand this exact version interpret the same sequence
independently of application identity. An unknown or unsupported consumer
MUST ignore its semantics and SHOULD preserve its payload when practical,
following Core Extension rules. An application writing a Dataset with a
Perspective payload it cannot safely preserve MUST refuse the write; it MUST
NOT drop an unsupported or unselected Perspective. No consumer may reinterpret
a Perspective sequence as temporal evidence.

Keyboard-accessible move operations are the baseline interaction direction.
Optional drag-and-drop must invoke the same order operation. Interaction may
offer “move before/after” without making anchors part of the Dataset contract.
Temporary ordering and view controls belong to local Application View State;
only intentionally portable authorial sequence belongs here. The boundary for
other NarrativeLine-specific preferences remains open.

## Structural schema boundary

The [Perspective Candidate schema](../schemas/extensions/perspective-candidate.schema.json)
validates a payload object, non-empty Perspective
keys/names, and unique string IDs per sequence. JSON Schema cannot confirm
that IDs resolve to current Events, validate the Specification Extension
declaration, detect temporal mismatch, manage Event deletion, or preserve
unsupported payloads in an application. A dangling ID is structurally valid
and requires a Dataset-aware diagnostic. Runtime Validator and consumer
integration remain separate work.

## Implementation boundary

The contract permits a first NarrativeLine consumer/writer with one applicable
Perspective. For several applicable entries, the application needs an
explicit selection or must leave Perspective ordering read-only while
preserving every entry. Exact display composition of placed and unplaced
Events, warning copy, and move controls are application design choices. A
keyboard-accessible move remains the interaction baseline; optional drag and
drop invokes the same semantic operation.

This Candidate does not prescribe a NarrativeLine module or file layout.
Runtime implementation, Validator integration, migration, public samples,
Stable promotion, other application consumers, and the other possible
Perspective capability families require separate checkpoints.
