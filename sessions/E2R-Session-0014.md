# E2R Session 0014

## Date

2026-08-05

## Summary

This session completed the current History Extension specification work and established a repeatable JSON Schema validation workflow for E2R-SPEC.

The session also revisited the separation between persistent Core identifiers and human-readable references. The earlier working term `HumanID` was refined into the research concept `referenceCode`.

---

# History Extension

## Authoritative Temporal Representation

The History Extension preserves Civil Time as the historically meaningful representation of an Event.

When Time Zone information is available, the local calendar and clock fields, IANA Time Zone ID, and numeric UTC offset form one compound authoritative representation.

UTC may be derived for comparison, exchange, or preview, but a derived UTC value does not replace the stored Civil Time.

This avoids losing the local calendar date by which an Event is understood.

## Civil Time and Instant

Civil Time represents calendar and clock fields in a civil context.

An Instant represents a unique position on the UTC time scale.

A Civil Time identifies an Instant only when it contains sufficient precision and the Time Zone and offset information needed to resolve it without ambiguity.

Partial dates remain partial. A date-only value must not be interpreted as midnight, and omitted fields must not be invented merely to satisfy a date-time API.

## Time Zone and Offset

The following decisions were recorded:

- `timeZone` uses an IANA Time Zone ID.
- Time-zone abbreviations such as `JST`, `EST`, and `CST` are not stored.
- `timeZone` and `offset` occur together.
- Time Zone information requires at least minute precision.
- `offset` uses the numeric `+HH:MM` or `-HH:MM` form.
- UTC is represented as `+00:00`, not `Z`, in the `offset` field.
- The offset disambiguates repeated Civil Times during backward daylight-saving transitions.
- Nonexistent Civil Times must not be shifted silently.
- A later IANA Time Zone Database disagreement must not silently rewrite stored values.
- History Extension v1 does not require the IANA Time Zone Database version to be stored in the Dataset.

## Time Zone Operations

Applications must distinguish two different operations:

1. Reinterpret the same Civil Time fields in another Time Zone, changing the represented Instant.
2. Convert the Civil Time fields to another Time Zone while preserving the represented Instant.

Applications should not infer which operation the user intends merely because a different Time Zone was selected.

## Calendar and Year Numbering

History Extension v1 uses the proleptic Gregorian calendar.

The `year` field uses astronomical year numbering:

- year `1` is 1 CE
- year `0` is 1 BCE
- year `-1` is 2 BCE

BCE, CE, BC, AD, and localized era labels are presentation concerns.

Alternative calendars, conversion provenance, Julian calendar dates, lunisolar calendars, Japanese calendar eras, and fictional calendars remain outside History Extension v1.

## Temporal Order

The earlier draft field `order` was renamed to `temporalOrder`.

`temporalOrder` is limited to relative chronology when recorded temporal fields and precision cannot otherwise distinguish Core Objects.

It must not reverse chronology already established by known temporal values.

Presentation order, narrative reveal order, layout order, and custom Timeline View order are not represented by `temporalOrder`.

A future presentation Extension may allow a View to own an Event ID list. Temporary selection, sorting, panel state, and scroll position remain application state outside the Dataset.

## Ordering Modes

Civil Time ordering and Instant ordering answer different questions.

- Civil Time ordering preserves stored local calendar and clock values.
- Instant ordering compares resolvable values on the UTC time scale.

Applications should identify the ordering interpretation when the distinction can affect results. Missing Time Zones or temporal precision must not be invented to force Instant ordering.

## History Extension Scope

History Extension v1 intentionally excludes:

- alternative calendar systems
- time intervals and durations
- approximate temporal expressions
- relative temporal relationships between Events
- temporal constraints such as before, after, during, or overlaps
- multiple candidate dates and competing hypotheses
- historical periods represented as Era Entities
- custom Timeline presentation and navigation
- application editing behavior

These concerns remain available to future Extensions or applications.

---

# Non-normative Application Recommendations

Application guidance was added without making user-interface behavior normative.

Recommended editing behavior includes:

- keep year, month, and day readily visible
- place hour, minute, second, and Time Zone controls in an expandable section
- keep the section collapsed for new and date-only Events
- expand it when stored clock or Time Zone information exists
- preserve values when the section is collapsed
- derive `offset` from Civil Time and the selected IANA Time Zone
- preview Event-local time, UTC, or the viewer's Time Zone without changing stored values
- distinguish reinterpretation from conversion while preserving an Instant
- report ambiguous and nonexistent daylight-saving times

The open or closed state of the section is application state and is not stored in the E2R Dataset.

NarrativeLine implementation of these recommendations was not part of this specification session.

---

# Design Rationale

The rationale document was expanded to record why:

- Civil Time is preserved
- UTC alone is not the source of truth
- IANA Time Zone IDs and numeric offsets are both recorded
- Time Zone changes require explicit intent
- History Extension v1 uses the proleptic Gregorian calendar
- astronomical year numbering includes year zero
- `temporalOrder` belongs to temporal representation
- arbitrary display order belongs outside the History Extension
- Civil Time and Instant ordering are both necessary

The earlier description of History as absolute time only was removed.

---

# Reference Examples

Two standalone Event examples were added:

- `examples/history/tokyo-new-year.json`
- `examples/history/apollo-11-lunar-landing.json`

The Tokyo New Year example demonstrates a locally meaningful date whose UTC preview falls on the previous calendar date.

The Apollo 11 example demonstrates an Event whose reference is recorded using `Etc/UTC` and `+00:00`.

The examples documentation now distinguishes complete Datasets, positive History fragments, and invalid fixtures.

---

# History JSON Schema

## Draft Schema

The following Draft 2020-12 schema was added:

```text
schemas/extensions/history.schema.json
```

The schema validates the value of an `extensions.history` property rather than a complete Event or Dataset.

It validates structural constraints including:

- field types and basic ranges
- contiguous temporal precision
- the `timeZone` and `offset` pair
- minimum minute precision for Time Zone information
- numeric offset syntax
- the requirement for `year` or `temporalOrder`
- rejection of the legacy `order` field for current writer output

IANA membership, offset resolution, daylight-saving behavior, month-specific Gregorian day validity, and cross-Object temporal consistency remain semantic validation concerns.

## Invalid Fixtures

Ten invalid History fixtures were added under:

```text
examples/invalid/extensions/history/
```

They cover:

- an empty Time Object
- missing coarser temporal fields
- incomplete Time Zone and offset pairs
- insufficient precision for Time Zone information
- an out-of-range hour
- an invalid offset form
- the legacy `order` field
- a non-integer `temporalOrder`

Each fixture is valid JSON and intentionally violates a History Extension structural rule.

## Validator and Repeatable Command

Ajv `8.20.0` was added as a development dependency for E2R-SPEC.

The validation script is:

```text
scripts/validate-history-schema.mjs
```

The following commands are available:

```text
npm run validate:history
npm run validate
```

The History validator:

- compiles the schema in Ajv Draft 2020-12 strict mode
- accepts six valid History examples
- rejects ten invalid fixtures
- verifies the expected validation keyword for each invalid fixture
- fails when fixture files and the declared fixture manifest differ
- returns a nonzero process exit code when any expectation fails

`npm audit` reported zero known vulnerabilities at the time of installation.

## Completion Criterion

The History Schema completion criterion was defined as all schema compilation, valid-example, and invalid-fixture checks passing through the repeatable npm validation command.

That completion criterion was met during this session.

---

# Human-readable Reference Code Research

Earlier sessions discussed separating persistent Core IDs from a human-facing `HumanID`.

This session refined the concept to `referenceCode` because the value would support human recognition and communication without establishing object identity.

The research document is:

```text
research/exploratory/human-readable-reference-code.md
```

The current direction is:

- Core `id` remains the Single Source of Truth for structural identity.
- Relations continue to reference Core `id` values.
- `referenceCode` is optional supplementary data.
- `name`, aliases, reference codes, and external identifiers remain distinct concepts.
- changing a reference code does not create a different Core Object.
- manual-authoring tools may resolve a reference code to a Core ID before serialization.

Human-readable Reference Code is a research candidate rather than an official Extension.

It is not required for the NarrativeLine MVP. A Dataset Browser or authoring utility is a suitable environment for validating the need before standardization.

---

# Files Added or Updated

The History Extension work in this session affected the following areas:

- `extensions/history-extension.md`
- `spec/rationale.md`
- `docs/application-recommendations.md`
- `examples/README.md`
- `examples/history/tokyo-new-year.json`
- `examples/history/apollo-11-lunar-landing.json`
- `examples/invalid/extensions/history/`
- `schemas/README.md`
- `schemas/extensions/history.schema.json`
- `scripts/validate-history-schema.mjs`
- `package.json`
- `package-lock.json`
- `.gitignore`
- `research/exploratory/human-readable-reference-code.md`

---

# Deferred Work

The following work remains outside the completed History Schema task:

- NarrativeLine Time Zone editing UI
- expandable clock and Time Zone controls in NarrativeLine
- non-destructive local, UTC, and viewer-Time-Zone previews
- explicit reinterpretation and conversion operations
- a Core JSON Schema
- composition of Core and official Extension schemas for complete Dataset validation
- semantic validation using IANA Time Zone Database rules
- alternative Calendar and Relative Time Extensions
- an official Reference Code Extension
- Dataset Browser experiments with persistent reference codes

---

# Outcome

The current History Extension specification and its structural validation workflow are complete according to the completion criterion established in this session.

Future application implementation can proceed against a documented and repeatably validated temporal data model.
