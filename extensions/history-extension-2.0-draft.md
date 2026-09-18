# History Extension 2.0.0 Candidate

Status: Draft candidate; non-Stable specification version.

Extension identifier: `history`

Candidate specification version: `2.0.0`

This document defines the first schema-bearing candidate for History 2.0. It
does not change the Stable History Extension `1.0.0` specification in
[`history-extension.md`](history-extension.md).

## Responsibility and identity

History records temporal information known about one E2R Core Object. Version
`2.0.0` continues the responsibility and registered identifier of History
`1.0.0`; its payload remains at `extensions.history`.

History does not own temporal relationships between different Objects,
causality, presentation order, Timeline layout, or pixel positions. Relative
relationships belong to a separate Relative Time Extension.

A Dataset claiming this candidate version MUST declare `history` at exact
version `2.0.0` with the Specification Extension. The declaration distinguishes
the `assertions` representation from an undeclared or History `1.0.0` payload.
The History payload does not contain a second version field.

## Payload

The canonical `2.0.0` payload is:

```json
{
  "assertions": []
}
```

`assertions` is REQUIRED, MUST contain at least one assertion, and MUST NOT
contain duplicate assertion `id` values. The History `1.0.0` field `time` MUST
NOT occur in a `2.0.0` payload.

Each assertion has a non-empty local `id` and a `type`. Its `id` is stable
within that History payload. It is not a Core Object identifier, cannot be a
Relation endpoint, and MUST NOT be inferred from its array index. This version
does not prescribe UUIDs or another ID-generation algorithm.

Multiple assertions MAY coexist, including assertions that disagree. Their
presence does not select a preferred, canonical, or winning assertion.

## Temporal Position

A Temporal Position reuses History `1.0.0` Civil Time and Instant rules:

- `year` uses astronomical year numbering;
- `month`, `day`, `hour`, `minute`, and `second` form contiguous granularity;
- omitted finer fields are unknown and MUST NOT be filled automatically;
- the calendar is proleptic Gregorian;
- `timeZone` and `offset` form the same paired representation as `1.0.0`.

A Temporal Position MUST contain `year`. It does not contain
`temporalOrder`; that field belongs only to a `position` assertion.

The optional `approximation` field has the sole `2.0.0` candidate value
`circa`. It qualifies the Temporal Position itself. Confidence, probability,
early/mid/late classification, and precision are not approximation values.

Approximation may occur on a direct `position`, `earliest`, `latest`, or a
position-bearing `start` or `end` boundary. Approximation of an entire
bounded-point or temporal-extent assertion is outside this version.

## Assertion variants

### Position

```json
{
  "id": "time-1",
  "type": "position",
  "position": { "year": 1900 },
  "temporalOrder": 10
}
```

`position` is REQUIRED. `temporalOrder` is OPTIONAL and retains the limited
History `1.0.0` meaning: it distinguishes relative temporal order only when
recorded Temporal Positions cannot do so. It is not presentation order or a
Relative Time assertion. It MUST NOT occur inside a Temporal Position, a
bounded-point assertion, or a temporal-extent boundary.

### Bounded point

```json
{
  "id": "time-2",
  "type": "bounded-point",
  "earliest": { "year": 1900 },
  "latest": { "year": 1904 }
}
```

`earliest` and `latest` are REQUIRED Temporal Positions. The assertion means a
point-like occurrence constrained between the two bounds; it is not a period
lasting from `earliest` to `latest`. Ordering or contradiction analysis between
the bounds is a temporal diagnostic, not structural JSON Schema validity.

### Temporal extent

```json
{
  "id": "time-3",
  "type": "temporal-extent",
  "start": { "occurrence": "occurred", "position": { "year": 1900 } },
  "end": { "occurrence": "unknown" }
}
```

`start` and `end` are REQUIRED Temporal Boundaries. A boundary has required
`occurrence` and optional `position`:

| `occurrence` | `position` absent | `position` present |
| --- | --- | --- |
| `occurred` | boundary occurred; position unknown | boundary occurred at the recorded position |
| `not-occurred` | boundary has not occurred; no position recorded | boundary has not occurred; a planned or asserted position is recorded |
| `unknown` | occurrence and position unknown | occurrence unknown; a position assertion is recorded |

`not-occurred` with a position is valid for schedules, future timelines, and
fiction. Applications MUST NOT derive or update `occurrence` from the current
computer clock. This version defines neither `inclusive` nor `exclusive`;
boundaries record where a boundary occurs, not set-membership semantics.

Unusual start/end combinations remain structurally valid when each boundary is
well formed. Temporal diagnostics may report contradictions without deleting,
rewriting, or selecting a winner among recorded assertions.

## Features

This version defines four optional Features with practical partial-support
value:

| Feature | Declaration required when |
| --- | --- |
| `bounded-point` | any bounded-point assertion occurs |
| `temporal-extent` | any temporal-extent assertion occurs |
| `approximation` | any Temporal Position uses `approximation` |
| `multiple-assertions` | any one History payload contains two or more assertions |

A single unapproximated `position` assertion uses the base specification and
declares no Feature. A Specification Extension declaration MUST list every
Feature actually used and MUST NOT list an unused Feature.

## History 1.0.0 compatibility and explicit upgrade

History `1.0.0` remains valid and uses `extensions.history.time`. Merely reading
or editing a Dataset MUST NOT upgrade it to `2.0.0`.

An application SHOULD retain `1.0.0` when the requested edit is representable
there. Using approximation, bounded point, temporal extent, or a second
assertion requires an explicit upgrade workflow.

For a known-field `1.0.0` Time Object, an explicit upgrade may create one
`position` assertion:

- Civil Time, time-zone, and offset fields move unchanged into `position`;
- `temporalOrder`, when present, moves to the assertion level;
- `time` is removed only as part of the atomic conversion;
- an exact `history` version `2.0.0` declaration and used Features are recorded.

A `1.0.0` Time Object containing only `temporalOrder` has no direct conversion
to this candidate because a `2.0.0` position assertion requires a Temporal
Position. It SHOULD remain `1.0.0` unless a later explicit contract preserves
that undated-order meaning without inventing a date.

The conversion MUST NOT run automatically on open. If unknown source fields
cannot be preserved with established meaning, the application MUST NOT report
a lossless successful upgrade while discarding them. It may refuse the upgrade
or require a later explicit preservation contract.

Old consumers that do not support exact version `2.0.0` MUST NOT interpret the
payload as `1.0.0`. They SHOULD preserve it whenever practical.

## Unknown data and partial understanding

Readers MUST ignore unknown fields when interpreting this version and SHOULD
preserve them whenever practical. Unknown fields do not satisfy required
fields. Unknown exact versions or undeclared Features are not semantic support.

A writer that cannot preserve untouched unknown data MUST NOT silently report
the operation as a lossless round trip. A partial consumer MUST modify only
assertions and fields it understands or refuse the unsafe edit.

## Structural validation and temporal diagnostics

The companion JSON Schema checks payload shape, required fields, known variant
separation, and Temporal Position structure. Dataset-level checks cover local
assertion-ID uniqueness and exact Feature declarations.

Known start/end contradictions, incompatible bounds, and conflicts among
assertions are temporal diagnostics. They do not by themselves make the JSON
structure invalid. The separate e2r-validator implementation may report the
bounded diagnostic subset documented by its diagnostic contract; this does not
make the candidate Stable or define a general solver.

## Non-goals

This version does not define Relative Time, alternative calendars, Temporal
Frames, confidence, Citation, preferred assertions, presentation order,
boundary-relative offsets, advanced derivation, or application UX.
