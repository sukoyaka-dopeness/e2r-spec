# History Extension

## Purpose

The History Extension defines temporal information for E2R Core Objects.

Its purpose is to provide interoperable timeline data while remaining independent of application-specific implementations.

History Extension intentionally defines temporal semantics, not timeline algorithms or UI behavior.

---

# Design Principles

The History Extension follows these principles:

- Keep the specification minimal.
- Separate temporal information from the Core.
- Preserve interoperability between applications.
- Allow future extensions without breaking compatibility.
- Leave implementation details to applications whenever possible.

---

# Extension Structure

History information is stored inside a dedicated `history` object.

```json
{
  "extensions": {
    "history": {
      "time": {
        "value": "1945-08-15",
        "precision": "day",
        "order": 10
      }
    }
  }
}
```

The `time` object is reserved for temporal information and provides a stable location for future expansion.

---

# Time Object

The Time Object represents a single temporal position.

## Fields

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| value | string | Yes | ISO 8601 compatible partial date string. |
| precision | string | Yes | Precision of `value`. |
| order | integer | No | Ordering value used when chronological ordering alone is insufficient. |

---

## value

`value` represents the temporal position of an object.

Examples:

```
1945
1945-08
1945-08-15
```

Future versions may support additional temporal representations.

---

## precision

`precision` explicitly defines the precision of `value`.

Supported values:

- `year`
- `month`
- `day`

The value of `precision` MUST match the format of `value`.

Examples:

| value | precision |
|-------|-----------|
| `1945` | `year` |
| `1945-08` | `month` |
| `1945-08-15` | `day` |

---

## order

`order` is an optional ordering key.

Type:

```
integer
```

The value itself has no semantic meaning.

Applications are responsible for assigning and maintaining `order`.

The specification does not require sequential numbering.

Examples:

```
10
20
30
```

or

```
100
200
300
```

Applications MAY freely regenerate `order` values whenever relative ordering is preserved.

---

# Ordering Rules

Applications should determine chronological order using the following priority.

1. `value`
2. `precision`
3. `order`
4. Core Object `id`

This provides deterministic ordering while allowing implementation flexibility.

---

# Unknown Dates

Objects without temporal information are valid.

Applications may use `order` to position objects whose temporal information is unknown.

The specification does not require unknown dates to appear at any particular position in a timeline.

---

# Scope

History Extension intentionally does **not** define:

- Calendar systems
- Relative temporal relationships
- Temporal constraints
- Multiple candidate dates
- Timeline presentation
- Timeline navigation

These are expected to be handled by separate Extensions or future revisions.

---

# Planned Future Extensions

The following capabilities are intentionally outside History Extension v1.0.

## Time Interval

Future versions may introduce an interval object containing `start` and `end` Time Objects for representing durations.

---

## Calendar

Examples:

- Gregorian calendar
- Julian calendar
- Japanese era calendar
- Fictional calendars

Calendar support is expected to become an independent Extension referenced by History Extension.

---

## Era

Examples:

- Childhood
- Sengoku Period
- Edo Period

Era-based temporal references may be added in a future revision.

---

## Approximate Time

Examples:

- around 1945
- summer
- early nineteenth century

Approximate temporal expressions are distinct from eras and will be considered separately.

---

## Relative Time

Examples:

- before
- after
- +3 days
- during
- overlaps

These represent relationships between multiple Events rather than properties of a single Event.

Relative temporal information is expected to become a separate Extension.

---

## Multiple Time Hypotheses

Future revisions may support multiple candidate dates for a single Event.

This avoids representing a single Event as multiple duplicated Events and preserves the Single Source of Truth principle.

---

## Time Model

The possibility of separating temporal information into multiple conceptual layers has been identified for future study.

Potential layers include:

- Absolute Time
- Relative Time
- Time Scale

This concept is intentionally postponed until after the Timeline MVP.

---

# Compatibility

Future versions of the History Extension should extend the `time` object rather than replacing it.

Applications should ignore unknown fields in accordance with the E2R Core philosophy.
