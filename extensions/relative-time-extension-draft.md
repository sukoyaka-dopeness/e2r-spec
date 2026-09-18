# Relative Time Extension Draft 0.1.0

Status: Draft candidate; not a registered Stable Extension.

Draft Extension identifier: `draft.github.sukoyaka-dopeness.relative-time`

Draft specification version: `0.1.0`

## Responsibility and placement

Relative Time records a temporal relationship between two Core Objects. It is
separate from History, which records temporal information known about one Core
Object.

The payload occurs only on a Core Relation at:

```text
relation.extensions["draft.github.sukoyaka-dopeness.relative-time"]
```

The Core Relation is the structural carrier. This Extension owns the temporal
meaning; consumers MUST NOT infer it from the Relation `name`.

For every recorded assertion:

- `sourceId` identifies the user-selected reference or base Object;
- `targetId` identifies the Object described relative to the source.

Variant values describe the target relative to the source. Therefore
`relation: "before"` means the target is before the source,
`direction: "after"` means the target is the recorded elapsed offset after the
source, and positive Calendar displacement means the target is in a later
granule than the source.

Consumers MUST NOT reverse the recorded endpoints merely for solver
convenience. One Core Relation carries one Relative Time assertion. Independent
assertions use independent Relations and MUST NOT be automatically merged.

A conforming Dataset MUST declare this Extension at exact version `0.1.0`
through the Specification Extension. The payload itself contains no version
wrapper.

## Variant payloads

The payload is exactly one of the following known semantic variants. Unknown
sibling fields remain structurally permitted for forward preservation, but
known fields from another variant are invalid in the selected variant.

### Relative position

```json
{
  "type": "relative-position",
  "relation": "before"
}
```

`relation` is `before`, `after`, or `same-instant` and describes the target
relative to the source. `same-instant` is not the same as membership in the
same Calendar day, month, or year.

### Containment

```json
{
  "type": "containment",
  "relation": "within"
}
```

The target is within the source under the recorded orientation. Exact
applicability to point, bounded-point, and extent shapes remains a semantic
contract and diagnostic concern.

### Calendar granule relation

```json
{
  "type": "calendar-granule-relation",
  "granularity": "month",
  "displacement": 1
}
```

`granularity` is `year`, `month`, `day`, `hour`, `minute`, or `second`.
`displacement` is an integer: `0` means the same granule, `1` the next granule,
`-1` the previous granule, and another integer that many granules away.

This is Calendar-granule membership/displacement, not elapsed duration or
general calendar arithmetic. The optional `calendar` is a non-empty opaque
Calendar identifier. When absent, this draft uses the proleptic Gregorian
calendar. This draft semantically recognizes `gregorian`; another identifier
is structurally preservable but MUST NOT be evaluated unless the consumer
supports its separate Calendar contract.

Partial Temporal Positions support a granule relation only when the fields
required to identify that granule are known. A consumer MUST NOT fill omitted
History fields to force evaluation.

### Elapsed offset

```json
{
  "type": "elapsed-offset",
  "direction": "after",
  "value": 90,
  "unit": "minute"
}
```

`direction` is `before` or `after`. `value` is a positive integer. `unit` is
`second`, `minute`, or `hour`. Zero uses `same-instant`; negative values are
not used because direction is explicit. Fractional values, `day`, compound
durations, and arbitrary calendar arithmetic are outside this draft. No
semantic upper bound is imposed by this specification.

## Features

Each variant is an independently supportable Feature:

- `relative-position`
- `containment`
- `calendar-granule-relation`
- `elapsed-offset`

The exact-version declaration MUST list every Feature used by Relative Time
payloads in the Dataset and MUST NOT list unused Features.

## Recorded, Derived, and conflict

Recorded assertions and Derived conclusions are different. Implementations
MUST NOT automatically create Relations for Derived conclusions, fabricate
History dates, delete conflicting recorded assertions, or select a winner.

With strict compatible premises, basic semantic derivations include:

```text
A before B; B before C -> Derived A before C
A within C; C within W -> Derived A within W
```

These rules do not select storage, provenance, closure, solver, or runtime
evaluation policy. They do not apply when required shape, boundary, uncertainty,
or Calendar semantics are unsupported. Same Calendar day alone does not imply
instant order.

Strict cycles and obvious containment contradictions are temporal diagnostics,
not JSON Schema failures. Recorded Relation payloads remain intact.

The separate e2r-validator implementation may report a bounded diagnostic
subset and two-edge Derived evidence for strict `before` and `within` premises.
That implementation remains read-only, exact-version gated, and does not
define a general solver, closure policy, or automatic Relation creation.

## Unknown data and partial understanding

Unknown is not invalid and is not semantic support. Readers MUST ignore unknown
fields while interpreting a supported version and SHOULD preserve them whenever
practical. A consumer MUST NOT interpret an unsupported exact version, Feature,
or Calendar as this draft's known semantics.

A writer that cannot preserve untouched unknown data MUST NOT silently report a
lossless round trip. It MUST limit edits to data it can preserve or refuse the
unsafe edit.

## Structural validation

The companion JSON Schema validates one Extension payload. Dataset-level
validation verifies Relation-only placement, exact specification and Feature
declarations, and Core endpoint integrity. Temporal conflicts and derivation
remain separate future Validator responsibilities.

## Non-goals

This draft does not define History payloads, causality, presentation order,
Temporal Frames, overlaps, same-temporal-extent authoring, boundary-relative
offsets, compound durations, advanced solvers, or application UI.
