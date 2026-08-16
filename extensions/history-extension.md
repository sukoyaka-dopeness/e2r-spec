# History Extension

## Purpose

The History Extension defines interoperable temporal information for E2R Core Objects.

This document defines History Extension version `1.0.0`.

It defines:

- Civil Time expressed with explicit granularity.
- Optional IANA Time Zone information.
- The relationship between Civil Time and an Instant.
- Temporal ordering when recorded time alone is insufficient.

The History Extension defines temporal representation. It does not define timeline layout, custom presentation order, navigation, or editing workflows.

---

# Design Principles

The History Extension follows these principles:

- Keep temporal representation separate from the Core.
- Preserve the Civil Time in which an Event is historically understood.
- Do not replace an authoritative Civil Time with a derived UTC value.
- Preserve incomplete temporal information without inventing missing granularity.
- Use IANA Time Zone IDs when a regional time zone is known.
- Keep temporal order separate from application-specific display order.
- Allow future temporal Extensions without replacing the Time Object.

---

# Temporal Concepts

## Civil Time

Civil Time is a combination of calendar and clock fields expressed in a civil context.

Examples include:

- `1945`
- `1945-08`
- `1945-08-15`
- `2011-03-11 14:46 Asia/Tokyo`

Civil Time may be incomplete. An omitted field is unknown and MUST NOT be filled automatically.

For example, the following value represents a calendar date:

```json
{
  "year": 2011,
  "month": 3,
  "day": 11
}
```

It MUST NOT be interpreted as `2011-03-11 00:00:00`.

Civil Time without Time Zone information does not identify a unique position on the UTC time scale.

---

## Instant

An Instant is a unique position on the UTC time scale.

A Civil Time can identify an Instant only when it has sufficient granularity and includes the Time Zone and UTC offset information required to resolve it without ambiguity.

A Time Object with incomplete granularity may correspond to an interval rather than a unique Instant. Applications MUST preserve the recorded granularity when deriving or displaying another time representation.

For example, a value recorded to minute granularity represents that minute. An application MUST NOT add a zero second and claim that the source data had second granularity.

The History Extension does not store a derived UTC value as a second authoritative representation. The Time Object remains the Single Source of Truth.

---

# Calendar Model

History Extension version `1.0.0` uses the proleptic Gregorian calendar.

The Gregorian rules are applied consistently before and after the historical introduction of the Gregorian calendar. Source dates recorded in another calendar must be converted before being represented as History Extension version `1.0.0` Civil Time.

Alternative source calendars, conversion provenance, Japanese calendar eras, Julian calendar dates, lunisolar calendars, and fictional calendars are outside History Extension version `1.0.0`.

## Astronomical Year Numbering

The `year` field uses astronomical year numbering.

| Stored year | Historical display |
|-------------|--------------------|
| `2` | 2 CE / AD 2 |
| `1` | 1 CE / AD 1 |
| `0` | 1 BCE / 1 BC |
| `-1` | 2 BCE / 2 BC |
| `-2` | 3 BCE / 3 BC |

Conversions between a historical era label and the stored integer are:

```text
CE n  -> year = n
BCE n -> year = 1 - n
```

The Dataset stores only the integer `year`. Labels such as BCE, CE, BC, AD, `紀元前`, and `西暦` are presentation concerns.

The Gregorian leap-year rules apply to astronomical year numbering, including year zero.

---

# Extension Structure

History information is stored in the `history` Extension.

```json
{
  "extensions": {
    "history": {
      "time": {
        "year": 1945,
        "month": 8,
        "day": 15,
        "temporalOrder": 10
      }
    }
  }
}
```

The `time` object is the stable location for the primary temporal position of a Core Object.

---

# Time Object

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `year` | integer | No | Proleptic Gregorian year using astronomical year numbering. |
| `month` | integer | No | Gregorian month, from 1 through 12. |
| `day` | integer | No | Valid day of the specified Gregorian month and year. |
| `hour` | integer | No | Hour, from 0 through 23. |
| `minute` | integer | No | Minute, from 0 through 59. |
| `second` | integer | No | Second, from 0 through 59. |
| `timeZone` | string | No | IANA Time Zone ID. |
| `offset` | string | No | Numeric UTC offset in `+HH:MM` or `-HH:MM` form. |
| `temporalOrder` | integer | No | Relative temporal order when recorded time cannot distinguish Objects. |

Leap-second representation is outside History Extension version `1.0.0`.

## Field Dependencies

Temporal fields MUST be contiguous from coarser granularity to finer granularity.

- `month` requires `year`.
- `day` requires `year` and `month`.
- `hour` requires `year`, `month`, and `day`.
- `minute` requires `year`, `month`, `day`, and `hour`.
- `second` requires `year`, `month`, `day`, `hour`, and `minute`.

`timeZone` and `offset` MUST either both be present or both be absent.

Time Zone information requires at least minute granularity. Therefore, `timeZone` and `offset` require `year`, `month`, `day`, `hour`, and `minute`.

A Time Object MUST contain at least `year` or `temporalOrder`.

Fields that are not known are omitted. Applications MUST NOT add missing fields merely to satisfy a date-time API.

---

# Civil Time Granularity

Civil Time granularity is determined by the most specific temporal field present.

| Fields | Civil Time Granularity |
|--------|-----------|
| `year` | year |
| `year`, `month` | month |
| `year`, `month`, `day` | day |
| `year`, `month`, `day`, `hour` | hour |
| `year`, `month`, `day`, `hour`, `minute` | minute |
| `year`, `month`, `day`, `hour`, `minute`, `second` | second |

`timeZone`, `offset`, and `temporalOrder` do not increase Civil Time granularity.

No separate granularity field is used.

Applications MUST NOT display or serialize greater granularity than is present in the Time Object unless the added granularity is clearly identified as derived or user-supplied.

---

# Time Zones and UTC Offsets

## IANA Time Zone IDs

`timeZone` identifies the civil time-zone rules using an IANA Time Zone Database identifier.

Examples include:

- `Asia/Tokyo`
- `America/New_York`
- `Europe/London`
- `Etc/UTC`

Writers MUST use a valid IANA Time Zone ID available to them.

A reader that cannot resolve a Time Zone ID MUST preserve the value. It MAY treat the Time Object as not currently resolvable to an Instant, but MUST NOT invalidate the surrounding Core Dataset solely for that reason.

Time-zone abbreviations such as `JST`, `EST`, or `CST` MUST NOT be stored in `timeZone`.

---

## Numeric Offset

`offset` records the numeric difference between the Civil Time and UTC at that temporal position.

Examples include:

- `+09:00`
- `-05:00`
- `+00:00`

UTC MUST be represented as `+00:00` in the `offset` field. The `Z` designator is not used in this field.

The offset records the resolution used when the Time Object was created or edited. Applications SHOULD derive it from `timeZone` rather than requiring users to enter it directly.

At the time of creation or intentional time-zone editing, `offset` SHOULD agree with one of the offsets valid for `timeZone` at the recorded Civil Time.

History Extension version `1.0.0` records offsets to minute granularity. Historical sub-minute offsets are outside its current scope.

---

## Authoritative Representation

The local calendar and clock fields, `timeZone`, and `offset` form one compound authoritative representation.

Applications may derive a UTC representation for comparison or preview, but MUST NOT replace the authoritative Civil Time unless the user explicitly requests a time-zone conversion.

Applications MUST distinguish between:

- Changing the Time Zone interpretation while keeping the Civil Time fields unchanged.
- Converting the Civil Time fields to another Time Zone while preserving the represented Instant or interval.

These operations have different meanings and MUST NOT be silently conflated.

---

## Ambiguous Local Times

During a backward daylight-saving transition, the same Civil Time may occur more than once.

For example, `2024-11-03 01:30 America/New_York` can refer to different positions on the UTC time scale depending on its offset.

An application MUST NOT choose between such occurrences silently. It MUST obtain or preserve enough information to identify the intended occurrence. The `offset` field provides that disambiguation.

---

## Nonexistent Local Times

During a forward daylight-saving transition, some Civil Times do not exist.

An application MUST NOT silently shift a nonexistent Civil Time to another value. It SHOULD report the problem and request user action.

---

## Time-Zone Database Changes

IANA time-zone rules may change, including corrections to historical data.

If a recorded `timeZone` and `offset` later disagree with the rules available to an application, the application:

- MUST preserve both recorded values.
- SHOULD report the inconsistency.
- MUST NOT silently rewrite the Time Object.

When an application must reproduce the UTC resolution originally recorded by the Dataset, the recorded numeric `offset` takes precedence over a later-derived offset.

History Extension version `1.0.0` does not require a Dataset to record the version of the IANA Time Zone Database used by an application.

---

# Temporal Order

## `temporalOrder`

`temporalOrder` records relative temporal order when the recorded temporal value and granularity cannot otherwise distinguish Core Objects.

Typical uses include:

- Ordering Events recorded at the same minute when one is known to occur first.
- Ordering Events that share the same date and granularity.
- Ordering multiple Events with unknown dates when their relative chronology is known.

`temporalOrder` MUST NOT be used to reverse two distinct temporal values whose chronological order is already known.

The integer itself has no meaning beyond relative comparison. Values need not be sequential.

Applications MAY assign or regenerate `temporalOrder` values when they preserve the intended relative temporal order.

Display order, narrative reveal order, layout order, and ordering within a
custom application Timeline visualization are not represented by
`temporalOrder`.

---

# Ordering Modes

History data can be presented using Civil Time ordering or Instant ordering. Applications MUST identify which interpretation they use when the distinction can affect results.

## Civil Time Ordering

Civil Time ordering preserves the stored local calendar date and clock value.

The recommended comparison priority is:

1. Known Civil Time before unknown Civil Time.
2. Stored temporal fields from `year` through the recorded granularity.
3. Civil Time granularity, with coarser granularity first when values share a prefix.
4. `temporalOrder` when the Objects have the same temporal value, granularity, and time-zone comparison basis.
5. Core Object `id` as a deterministic fallback.

Civil Time ordering does not convert values into the viewer's Time Zone.

Two values with different Time Zones are not assumed to represent the same temporal position merely because their displayed local fields are equal.

---

## Instant Ordering

Instant ordering compares values after resolving their Civil Time using the recorded `offset`.

Applications MUST NOT claim Instant ordering for a Time Object that cannot be resolved with the available information.

The recommended comparison priority for resolvable values is:

1. Derived UTC temporal position or interval.
2. Civil Time granularity.
3. `temporalOrder` when the represented positions remain indistinguishable at their recorded granularity.
4. Core Object `id` as a deterministic fallback.

When a view contains both resolvable and unresolvable values, a recommended default is:

1. Resolvable values in Instant order.
2. Unresolvable values in Civil Time order.
3. Objects without temporal fields, ordered by `temporalOrder` and then Core Object `id`.

Applications MAY offer alternative predictable presentation policies, but MUST NOT invent missing Time Zones or Civil Time granularity.

---

# Examples

## Partial Civil Time

Year granularity:

```json
{
  "year": 1945
}
```

Month granularity:

```json
{
  "year": 1945,
  "month": 8
}
```

Day granularity:

```json
{
  "year": 1945,
  "month": 8,
  "day": 15
}
```

Minute granularity without a Time Zone:

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

## Tokyo New Year Celebration

This fictional example preserves the local New Year date in Tokyo.

```json
{
  "id": "event-new-year-celebration",
  "name": "New Year Celebration Begins",
  "extensions": {
    "history": {
      "time": {
        "year": 2027,
        "month": 1,
        "day": 1,
        "hour": 0,
        "minute": 30,
        "timeZone": "Asia/Tokyo",
        "offset": "+09:00"
      }
    }
  }
}
```

Its local representation is `2027-01-01 00:30 Asia/Tokyo`. A UTC preview is `2026-12-31 15:30 UTC`. The UTC preview does not replace the stored Civil Time.

---

## Apollo 11 Lunar Landing

This example uses UTC as the reference because the lunar landing does not have an Earth-local IANA Time Zone.

```json
{
  "id": "event-apollo-11-lunar-landing",
  "name": "Apollo 11 Lunar Landing",
  "description": "The lunar module Eagle landed on the Moon.",
  "extensions": {
    "history": {
      "time": {
        "year": 1969,
        "month": 7,
        "day": 20,
        "hour": 20,
        "minute": 17,
        "second": 43,
        "timeZone": "Etc/UTC",
        "offset": "+00:00"
      }
    }
  }
}
```

The recorded time follows NASA's Apollo 11 Record of Lunar Events, which lists the lunar landing at 20:17:43 GMT on 20 July 1969.

---

## BCE Year

The following Time Object represents year 44 BCE using astronomical year numbering:

```json
{
  "year": -43
}
```

The BCE label is generated for presentation and is not stored in the Dataset.

---

# Unknown Dates

Core Objects without a History Extension or without a `time` object are valid and have no recorded temporal position.

A Time Object containing only `temporalOrder` may be used when relative chronology among undated Objects is known:

```json
{
  "temporalOrder": 20
}
```

A recommended default is to display dated Events before undated Events.

Applications MUST NOT infer a date from `temporalOrder`.

---

# Scope

History Extension version `1.0.0` intentionally does not define:

- Alternative calendar systems.
- Calendar conversion provenance.
- Time intervals or durations.
- Approximate temporal expressions.
- Relative temporal relationships between different Events.
- Temporal constraints such as before, after, during, or overlaps.
- Multiple candidate dates or competing hypotheses.
- Historical periods represented as Era Entities.
- Timeline presentation, layout, lanes, or navigation.
- Custom application Timeline visualization ordering.
- User interface behavior.

These concerns belong to applications or future Extensions.

## Alternative Calendars

Julian calendars, Japanese calendar eras, lunisolar calendars, and fictional calendars may be defined by a future Calendar Extension.

History Extension version `1.0.0` fields MUST NOT be reinterpreted with application-defined calendar rules.

## Relative Time

Relative temporal information such as before, after, or between describes relationships among Events rather than the primary Civil Time of one Object.

It may be defined by a future Relative Time Extension.

## Timeline Display and Authorial Ordering

Application-specific display order MUST NOT be stored in `temporalOrder`.

A future interoperable persisted authorial-context Extension may define an
independent Event order. Current research provisionally calls this
responsibility Perspective; this specification does not define its schema or
register such an Extension.

Presentation appearance, layout, and non-temporal authorial ordering remain
separate responsibilities. Application-local selection, panel state, temporary
sorting, and scroll position belong outside the E2R Dataset.

---

# Compatibility

Applications MUST ignore unknown fields within the History Extension when reading.

Applications SHOULD preserve unknown History Extension fields whenever practical and SHOULD modify only fields they understand.

Future versions SHOULD extend the Time Object additively whenever practical.

## Draft `order` Migration

Earlier drafts used an `order` field where this specification now uses `temporalOrder`.

Writers conforming to this revision MUST emit `temporalOrder` and MUST NOT emit the legacy `order` field.

During migration, readers MAY accept legacy `order` as `temporalOrder` when `temporalOrder` is absent.

If both fields are present, readers SHOULD use `temporalOrder`, preserve the unknown or legacy value whenever practical, and report the conflict when appropriate.

---

# Non-Normative Application Recommendations

Applications are responsible for editing and presenting History information.

Recommended behavior includes:

- Keep year, month, and day fields visible for ordinary date editing.
- Place hour, minute, second, and Time Zone controls in an optional expandable section.
- Expand the time section automatically when the Event already contains clock fields.
- Do not assign the viewer's Time Zone to existing unzoned data automatically.
- Use a searchable IANA Time Zone selector rather than abbreviations.
- Derive `offset` from the selected Time Zone and Civil Time.
- Provide a preview in Event local time, UTC, or the viewer's Time Zone without modifying stored values.
- Provide an explicit conversion action when changing fields while preserving an Instant.
- Ask the user to resolve ambiguous daylight-saving times.
- Reject or explain nonexistent daylight-saving times instead of silently shifting them.
- Localize BCE and CE labels without changing the stored integer year.
- Hide raw `temporalOrder` numbers from ordinary users.
- Allow relative reordering only among Events whose temporal value, granularity, and comparison basis do not otherwise establish an order.
- Prefer simple Earlier and Later controls before introducing drag-and-drop editing.

Different applications may provide different workflows while exchanging the same History data.
