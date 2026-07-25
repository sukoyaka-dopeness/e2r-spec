# History Extension

## Purpose

The History Extension defines temporal information for E2R Core Objects.

Its purpose is to provide interoperable timeline data while remaining independent of application-specific implementations.

History Extension intentionally defines **temporal semantics**, not timeline algorithms or UI behavior.

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
        "date": "1945-08-15",
        "order": "0010"
      }
    }
  }
}
```

The `time` object is reserved for temporal information and provides a stable location for future expansion.

---

# Time Object

## date

`date` represents the temporal position of an object.

History Extension uses ISO 8601 representations whenever possible.

Examples:

```
1945
1945-08
1945-08-15
1945-08-15T12:30:00Z
```

A separate precision field is intentionally omitted.

The precision is inferred directly from the ISO 8601 representation.

---

## order

`order` is an ordering key used when displaying events.

Type:

```
string
```

The value itself has **no semantic meaning**.

Applications MUST preserve the relative ordering of events.

Applications MAY freely regenerate or renumber `order` values whenever the relative ordering is preserved.

Examples:

```
0010
0020
0030
```

or

```
A
M
Z
```

or

```
am3J
am4K
b001
```

History Extension defines the meaning of ordering, but does not define how ordering values are generated.

---

# Ordering Rules

Applications should determine display order using the following priority.

1. Temporal information (`date`)
2. `order`
3. Application-defined stable ordering (for example object ID)

This ensures deterministic ordering while allowing implementation flexibility.

---

# Unknown Dates

Objects without temporal information are valid.

Applications may use `order` to position objects with unknown dates.

Unknown dates should not automatically force objects to the beginning or end of a timeline.

Applications should allow users to place such objects anywhere in the ordering.

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

The following capabilities are intentionally left outside History Extension v1.0.

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
