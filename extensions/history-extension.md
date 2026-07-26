# History Extension

## Purpose

The History Extension defines temporal information for E2R Core Objects.

Its purpose is to provide interoperable temporal data while remaining independent of application-specific implementations.

The History Extension defines temporal representation, not timeline algorithms, visualization, or user interface behavior.

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
        "year": 1945,
        "month": 8,
        "day": 15,
        "order": 10
      }
    }
  }
}
```

The `time` object provides a stable location for future temporal extensions.

---

# Time Object

The Time Object represents a single temporal position.

## Fields

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| year | integer | No | Year value. |
| month | integer | No | Month (1–12). |
| day | integer | No | Day of month. |
| hour | integer | No | Hour (0–23). |
| minute | integer | No | Minute (0–59). |
| second | integer | No | Second (0–59). |
| order | integer | No | Optional ordering key. |

At least one temporal field should be present.

Fields that are not known are simply omitted.

Examples:

```json
{
  "year": 1945
}
```

```json
{
  "year": 1945,
  "month": 8
}
```

```json
{
  "year": 1945,
  "month": 8,
  "day": 15
}
```

```json
{
  "year": 1945,
  "month": 8,
  "day": 15,
  "hour": 12,
  "minute": 30
}
```

---

# Precision

Temporal precision is determined by the most specific field present.

Examples:

| Fields | Precision |
|--------|-----------|
| year | year |
| year, month | month |
| year, month, day | day |
| year, month, day, hour | hour |
| year, month, day, hour, minute | minute |
| year, month, day, hour, minute, second | second |

No separate `precision` field is required.

---

# Order

`order` is an optional ordering key.

Its value has no intrinsic semantic meaning.

Applications may assign and regenerate `order` values whenever relative ordering is preserved.

The specification does not require sequential numbering.

The relationship between `order` and temporal information may evolve in future revisions.

---

# Ordering Rules

Applications should determine chronological ordering using the following priority:

1. Temporal value
2. Temporal precision (coarser precision first)
3. `order`
4. Core Object `id`

For example:

```
1945

1945-08

1945-08-15

1945-08-15 12:00

1945-08-15 12:00:30
```

This provides deterministic ordering while allowing implementation flexibility.

---

# Unknown Dates

Objects without temporal information are valid.

Applications may use `order` or application-specific behavior when positioning such objects.

The specification does not require unknown dates to appear at any particular position.

---

# Scope

History Extension intentionally does **not** define:

- Calendar systems
- Relative temporal relationships
- Temporal constraints
- Multiple candidate dates
- Timeline presentation
- Timeline navigation
- Timeline editing behavior

These concerns belong to applications or future Extensions.

---

# Planned Future Extensions

The following capabilities are intentionally outside History Extension v1.0.

## Time Interval

Representing durations using `start` and `end` Time Objects.

---

## Calendar

Examples:

- Gregorian calendar
- Julian calendar
- Japanese era calendar
- Fictional calendars

Calendar support is expected to become an independent Extension.

---

## Era

Examples:

- Childhood
- Sengoku Period
- Edo Period

Era-based temporal references are intentionally outside the current specification.

---

## Approximate Time

Examples:

- around 1945
- summer
- early nineteenth century

Approximate temporal expressions are expected to become an independent Extension.

---

## Relative Time

Examples:

- before
- after
- +3 days
- during
- overlaps

Relative temporal information describes relationships between multiple Events rather than properties of a single Event.

It is expected to become an independent Extension.

---

## Multiple Time Hypotheses

Future revisions may support multiple candidate dates for a single Event while preserving the Single Source of Truth principle.

---

# Compatibility

Future versions should extend the `time` object rather than replacing it.

Applications should ignore unknown fields in accordance with the E2R Core philosophy.
