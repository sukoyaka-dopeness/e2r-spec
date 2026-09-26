# Relative Time Extension Draft 0.2.0

Status: Draft candidate; not a registered Stable Extension.

Draft Extension identifier: `draft.github.sukoyaka-dopeness.relative-time`

Draft specification version: `0.2.0`

This is a separate exact-version definition under the existing Extension
identifier. Relative Time Draft `0.1.0` and its schema remain unchanged. This
candidate incorporates the already adopted [atomic Recorded assertion
semantics](../docs/temporal/relative-time-atomic-recorded-assertion-semantics-adoption1.md)
within the representation defined here; that adoption record remains the
semantic authority for its bounded adopted meanings and limits.

The key words MUST, MUST NOT, REQUIRED, SHOULD, SHOULD NOT, and MAY are to be
interpreted as normative requirements of this Draft candidate only.

## Responsibility and placement

Relative Time records one temporal assertion between two Core Objects. It is
distinct from History, which records temporal information about one Core
Object, and from Derived conclusions and presentation ordering.

The payload occurs only on a Core Relation at:

```text
relation.extensions["draft.github.sukoyaka-dopeness.relative-time"]
```

The Core Relation is the structural carrier. The Extension owns the temporal
meaning; consumers MUST NOT infer it from the Relation `name` or endpoint
direction alone.

For every Recorded assertion, `sourceId` identifies the user-selected
reference/base Object, and `targetId` identifies the Object described relative
to it. Payload values describe the target relative to the source. One Core
Relation carries one Recorded assertion. Independent assertions MAY coexist
as separate Relations for the same Object pair; they MUST NOT be automatically
merged, made exclusive, or assigned a winner by this contract. Inverse or
symmetric meanings do not require mirror Relations.

A conforming Dataset using this candidate MUST declare the exact Extension
identifier and version `0.2.0` through the Specification Extension. The
payload contains no version wrapper. Its declaration MUST list exactly the
Features used by its Relative Time payloads, as defined by the Specification
Extension. These Feature identifiers are local to this exact version.

## Recorded semantics and limits

The following meanings are atomic user-recorded claims, not computed results.
They do not require a corresponding History assertion. History MUST NOT
automatically generate, select, overwrite, or refine a Recorded Relative Time
assertion. Recorded assertions and Derived conclusions are distinct; this
candidate does not authorize Derived write-back to Relations or History.

| Value | Meaning of target relative to source | Contract limit |
| --- | --- | --- |
| `before` | Qualitatively temporally earlier than the source. | Does not assert `end(A) < start(B)`, start/end ordering, a start, end, duration, whole-extent ordering, boundary/contact, precise scheduling, or additional precision. |
| `after` | Qualitatively temporally later than the source. | Inverse direction of `before`; it is not a scheduling or elapsed-offset rule and carries the same limits. |
| `same-instant` | The point-like temporal occurrences are at the same instant. | Symmetric in meaning; does not mean equal period extents and does not require mirror Relation storage. |
| `within` | The target's temporal occurrence or extent is within the source's and is not exactly coextensive. | Applies here to period-within-period and point-within-period only. It does not specify endpoint inclusion or machine evaluation. |
| `contains` | The target's temporal occurrence or extent contains the source's and is not exactly coextensive. | Inverse of `within`; applies here to period-contains-period and period-contains-point only. It does not require a reverse Relation or specify endpoint evaluation. |
| `overlap` | The target's and source's temporal extents partially overlap. | Distinct from containment, exact coextension, and boundary-only `touching`. No endpoint evaluation is defined. |
| `touching` | The temporal extents have boundary contact without overlapping interiors. | Symmetric; not the directional Allen `meets` / `met-by` pair. No open/closed boundary or point-at-boundary rule is defined. |
| `same-temporal-extent` | The target and source have exactly the same temporal extent. | Explicit coextension, distinct from `same-instant`; matching coarse History or apparent adjacency does not establish it. |

The `within` / `contains` combinations not listed above are outside this
candidate's applicability: point-within-point, period-within-point,
point-contains-point, and point-contains-period. This applicability statement
does not define a temporal-shape serialization, endpoint membership test, or
truth evaluator.

Symmetry and inverse meaning describe the recorded assertion's semantics only.
They do not require reverse Relation creation, Derived generation,
transitivity, equivalence closure, or any solver behavior.

## Variant payloads

Each payload is exactly one known variant. Unknown sibling properties are
structurally permitted for forward preservation, but known fields belonging to
another variant are invalid in the selected variant.

### Relative position Feature

Feature identifier: `relative-position`.

```json
{ "type": "relative-position", "relation": "before" }
```

`relation` MUST be `before`, `after`, or `same-instant`, with the meanings and
limits above.

### Containment Feature

Feature identifier: `containment`.

```json
{ "type": "containment", "relation": "contains" }
```

`relation` MUST be `within` or `contains`, with the applicability above.

### Interval topology Feature

Feature identifier: `interval-topology`.

```json
{ "type": "interval-topology", "relation": "overlap" }
```

`relation` MUST be `overlap`, `touching`, or `same-temporal-extent`. These
values record the atomic claims above. This Feature defines no endpoint
evaluation, open/closed boundary semantics, truth testing, or solver.

### Calendar granule relation Feature

Feature identifier: `calendar-granule-relation`.

```json
{
  "type": "calendar-granule-relation",
  "granularity": "month",
  "displacement": 1
}
```

`granularity` MUST be `year`, `month`, `day`, `hour`, `minute`, or `second`.
`displacement` MUST be an integer: `0` denotes the same granule, `1` the next,
`-1` the previous, and other integers that many granules away. The optional
`calendar` is a non-empty opaque Calendar identifier. When absent, this
candidate uses the proleptic Gregorian calendar. It semantically recognizes
`gregorian`; another identifier is structurally preservable but MUST NOT be
evaluated unless the consumer supports its separate Calendar contract.

Partial Temporal Positions support a granule relation only when the fields
needed to identify that granule are known. A consumer MUST NOT fill omitted
History fields to force evaluation. This Feature remains Calendar-granule
membership/displacement, not elapsed duration or general calendar arithmetic.

### Elapsed offset Feature

Feature identifier: `elapsed-offset`.

```json
{
  "type": "elapsed-offset",
  "direction": "after",
  "value": 90,
  "unit": "minute"
}
```

`direction` MUST be `before` or `after`; `value` MUST be a positive integer;
and `unit` MUST be `second`, `minute`, or `hour`. Zero uses `same-instant`;
negative values are not used because direction is explicit. Fractional values,
`day`, compound durations, and arbitrary calendar arithmetic are outside this
candidate. No semantic upper bound is imposed here.

This quantitative Feature remains distinct from qualitative and interval
topology assertions.

## Exact-version, unknown data, and unsupported behavior

An exact version identifies one immutable specification definition under the
Specification Extension. This candidate does not amend or reinterpret
`0.1.0`. A Dataset declaring `0.1.0` remains governed by that exact version;
the values added here do not become valid `0.1.0` values. No automatic or
required `0.1.0` to `0.2.0` migration is defined or implied.

Support is exact-version-specific. A consumer that does not support `0.2.0`
MUST NOT interpret it by falling back to `0.1.0`. It SHOULD preserve an
unsupported exact version and unknown data when practical, and MUST NOT claim
semantic support for the unsupported version. Unknown fields are not semantic
support: readers MUST ignore unknown fields when interpreting a supported
version and SHOULD preserve them whenever practical. A writer unable to
preserve untouched unknown data MUST NOT silently report a lossless round trip
and MUST limit edits to data it can preserve or refuse the unsafe edit.

A consumer that does not implement one of this exact version's declared
Features MUST NOT claim support for that Feature. It may preserve the
declaration and payload while reporting the limitation, consistent with the
Specification Extension; absence of Feature support does not authorize
fallback interpretation under another exact version.

## Structural validation boundary

The companion JSON Schema validates the structure and known values of one
Relative Time payload. Dataset-level checks may verify exact declarations,
Feature-use completeness, Relation-only placement, and Core endpoint
integrity. Neither JSON Schema nor those structural checks establish that a
Recorded assertion is true, test temporal endpoints, compare it with History,
or derive a missing assertion.

This candidate defines no Derived inference, transitive closure, conflict or
winner policy, solver, Timeline placement, presentation order, or application
behavior. Stable History `temporalOrder`, pairwise Recorded Relative Time,
Derived reasoning, and Timeline/presentation ordering remain separate
responsibilities. This candidate does not reopen History 2.0.0 maturity,
H2-POSITION-CIRCA acceptance, or deferred History authoring shapes.
