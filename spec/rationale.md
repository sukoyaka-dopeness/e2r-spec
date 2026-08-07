# Design Rationale

This document explains the reasoning behind the architectural decisions of the E2R Core specification and its official Extensions.

It complements `philosophy.md` by documenting why the Core is designed as it is, why certain capabilities are delegated to Extensions, and why official Extensions make particular architectural choices.

---

# Minimal Core

The Core is intentionally kept as small as possible.

Every feature added to the Core increases long-term maintenance costs, implementation complexity, and compatibility requirements.

A feature should become part of the Core only when interoperability cannot reasonably be achieved through an Extension.

Whenever a feature can be standardized independently, it should be defined as an Extension rather than expanding the Core.

---

# Structural Rather Than Semantic

The Core standardizes structure rather than domain meaning.

Its responsibility is limited to representing:

- existence
- occurrence
- connection

The Core intentionally avoids defining what those structures mean within a particular domain.

Domain semantics belong to Semantic Extensions.

This separation keeps the Core reusable across many different application domains.

---

# Self-contained Dataset

The Core assumes that a Dataset is self-contained.

A conforming Core implementation should be able to exchange, validate, and interpret a Dataset without requiring external Dataset dependencies.

Reasons:

- portability
- reproducibility
- offline usability
- predictable interoperability

Cross-Dataset references may be standardized by future Extensions, but they are intentionally excluded from the Core.

---

# Why the Core Version Is a Top-level Field

An application must know which Core rules govern a Dataset before it can
interpret the Dataset's structure or its Extensions.

The required top-level `version` field therefore identifies the E2R Core
version used by the Dataset. It is structural information needed for Core
interoperability rather than descriptive metadata.

Core versioning and Extension versioning are separate concerns. The Dataset's
top-level `version` does not declare the version of the History Extension,
Metadata Extension, or any other Extension.

Keeping this distinction explicit prevents an Extension revision from being
mistaken for a change to the Core data model.

---

# Metadata outside the Core

Metadata is intentionally excluded from the Core.

Examples include:

- title
- description
- author
- license
- language
- dataset identifier
- generating application

These fields are useful in many applications, but they are not required to exchange the structural information represented by E2R.

Keeping Metadata in a Dataset-level `metadata` Extension allows different
ecosystems to adopt different metadata models without fragmenting the Core.
For example, a Dataset identifier may be stored at
`extensions.metadata.datasetId` without making Dataset identity a Core
requirement.

This also keeps the Core `version` separate from descriptive metadata and from
any version information that an Extension may define for itself.

---

# Why Time Is an Extension

Time is important for many applications but unnecessary for others.

Some datasets describe logical structures, conceptual knowledge, taxonomies, or other information that has no temporal dimension.

Moving temporal representation into the History Extension allows the Core to remain independent of chronology while still providing a common temporal model for applications that require it.

---

# Why a Time Object

The History Extension uses a Time Object instead of a single date field.

This design supports:

- partial dates
- structurally explicit precision
- local calendar and clock fields
- optional time-zone resolution
- future temporal extensions

without requiring incompatible changes to the overall data model.

---

# Why Precision Is Explicit

Temporal precision is represented by which Time Object fields are present rather than inferred from a formatted string or recorded in a second, potentially contradictory field.

This avoids ambiguity and allows applications to distinguish between values such as:

- 2027
- 2027-05
- 2027-05-18

without relying on parsing heuristics.

---

# Why Civil Time Is Preserved

Historical Events are commonly identified by the date and clock time used at the place where they occurred.

That Civil Time can be part of the historical meaning of the record. Converting it to another time zone may change its displayed calendar date even though the represented occurrence has not changed.

For example, a New Year Event recorded shortly after midnight in Tokyo occurs on the previous UTC calendar date. Storing only its UTC representation would discard the local date by which the Event is understood.

The History Extension therefore preserves the recorded local calendar and clock fields. Time-zone conversion is a derived view of that information, not an automatic replacement for it.

---

# Why UTC Alone Is Not the Source of Truth

UTC is valuable for exchange and comparison, but not every historical temporal value identifies a unique Instant.

In particular:

- a year, month, or date without a clock time describes a Civil Time value or interval, not midnight
- a clock time without a Time Zone cannot be placed uniquely on the UTC time scale
- assigning a default Time Zone would add information that the source did not provide
- replacing local fields with UTC can lose the historically meaningful local calendar date

For these reasons, the History Extension does not make a derived UTC timestamp a second authoritative value. The recorded Civil Time and, when present, its IANA Time Zone ID and numeric offset form one compound source of truth.

Applications may derive UTC for comparison or preview when the recorded information is sufficient. They must preserve the original precision and must not invent missing fields merely to satisfy a date-time API.

---

# Why an IANA Time Zone ID and Offset Are Both Recorded

An IANA Time Zone ID, such as `Asia/Tokyo` or `America/New_York`, identifies a regional rule set rather than a fixed displacement from UTC. It preserves the civil context and allows an application to account for historical offset changes and daylight-saving transitions.

A numeric offset, such as `+09:00` or `-04:00`, records how the Civil Time was resolved when the value was created or intentionally edited. It also distinguishes repeated local times during a backward daylight-saving transition.

Neither value is sufficient for every purpose on its own:

- an offset identifies a displacement but does not preserve the regional time-zone context
- a Time Zone ID may resolve differently after corrections to the IANA Time Zone Database
- some local times are ambiguous unless the selected offset is also known

Recording both makes the interpretation reproducible without requiring History Extension v1 to store an IANA database version. If later rules disagree with the stored pair, preserving and reporting the disagreement is safer than silently rewriting historical data.

Time-zone abbreviations are not used because abbreviations such as `CST` can refer to different zones and offsets.

The `offset` field uses one numeric form for every offset, including `+00:00` for UTC. The `Z` designator is appropriate as part of some complete timestamp formats, but allowing it as an alternative value in this field would create two representations of the same numeric offset without adding information.

---

# Why Time Zone Changes Require Explicit Intent

Changing a Time Zone can mean either of two different operations:

- keep the Civil Time fields and reinterpret them in another Time Zone
- preserve the represented Instant and convert the Civil Time fields for another Time Zone

These operations produce different data. An application cannot infer the user's intent safely, so the History Extension keeps the distinction explicit and does not define a silent conversion rule.

---

# Why History Extension v1 Uses the Proleptic Gregorian Calendar

Interoperable numeric date fields require one deterministic calendar model. History Extension v1 therefore applies Gregorian rules consistently, including to years before the historical adoption of the Gregorian calendar.

This choice does not claim that every source originally used the Gregorian calendar. It provides one exchange representation while leaving source-calendar identity, conversion provenance, Julian and lunisolar calendars, Japanese eras, and fictional calendars to a future Calendar Extension.

A fixed calendar model also keeps applications from interpreting the same numeric fields with incompatible application-defined rules.

---

# Why Astronomical Year Numbering Is Used

The stored `year` is an integer using astronomical year numbering: year `0` represents 1 BCE, year `-1` represents 2 BCE, and positive years correspond to CE years.

Including year zero gives calculations and ordering a continuous integer sequence across the BCE/CE boundary. Labels such as BCE, CE, BC, AD, `紀元前`, and `紀元後` remain presentation concerns and can be localized without changing the Dataset.

---

# Why Higher-level Temporal Semantics Are Separate

The History Extension represents temporal values rather than their interpretation.

Examples intentionally excluded include:

- seasons
- historical eras
- approximate dates
- relative time
- parallel timelines
- time loops

These concepts represent temporal semantics rather than temporal structure and may be standardized by separate Extensions.

Presentation order and narrative reveal order are also excluded because they describe a view of Events rather than their temporal position.

---

# Why Relations Have No Type

Earlier drafts considered including a semantic `type` field in every Relation.

Examples included concepts such as:

- parent
- participant
- member
- located_at
- causes

Further discussion concluded that these values describe the meaning of a connection rather than the connection itself.

The Core therefore represents only that two Core Objects are connected.

The meaning of that connection belongs to Semantic Extensions.

This keeps Relation consistent with the responsibilities of Entity and Event.

---

# Reserved Properties

The Core reserves only the minimum set of top-level properties required for interoperability.

Current reserved properties are:

- `version`
- `entities`
- `events`
- `relations`
- `extensions`

Additional reserved properties should only be introduced when they provide clear interoperability benefits.

---

# Forward Compatibility

Unknown fields MUST be ignored.

Applications should not reject a Dataset simply because it contains fields or Extensions they do not recognize.

Rejecting every unknown field would make additive evolution impossible: an
older application could reject a newer Dataset even when it can still process
all Core information it understands. Applications should therefore preserve
unknown fields whenever practical.

A validator may report an unknown Core field as a warning. This helps users
notice likely spelling mistakes without treating every future field as a fatal
error. Unknown fields are never substitutes for required fields. For example,
an unknown `evnets` field does not satisfy the required `events` field, and an
application must not silently reinterpret or rename it.

The same distinction applies within a recognized Extension. Unknown fields are
ignored and preserved for forward compatibility, while invalid values in fields
defined by the supported Extension may be reported as errors.

This enables:

- forward compatibility
- independent Extension development
- gradual ecosystem evolution

---

# Dataset-level Extensions

Some information applies to an entire Dataset rather than individual Core Objects.

Examples include:

- calendar definitions
- unit systems
- localization
- metadata

For this reason, Dataset-level Extensions are supported.

This avoids overloading Entity, Event, or Relation definitions with information that belongs to the Dataset itself.

Dataset-level and Core Object Extensions use the same placement convention:
the Extension name is a property of `extensions`, and its value directly
contains the Extension-specific data. The Core does not add a common `data` or
Extension `version` wrapper because such a wrapper would add structure without
improving Core interoperability. An Extension may define version information in
its own value if its compatibility model requires it.

---

# Human-readable Design

E2R is intended to be human-readable as well as machine-readable.

Design choices therefore favor:

- explicit structure
- predictable naming
- stable architecture
- simple implementation

Readability is considered an important aspect of long-term maintainability.

---

# Extension-first Architecture

Whenever practical, new functionality should be introduced through Extensions rather than expanding the Core.

This allows:

- experimentation
- domain-specific models
- independent evolution
- backwards compatibility

The Core should remain stable while Extensions evolve around it.

---

# Future Evolution

The Core intentionally leaves room for future standard Extensions, including but not limited to:

- Metadata Extension
- History Extension enhancements
- Calendar Extension
- Semantic Extension vocabularies
- Dataset Link Extension

These are not part of the Core unless future interoperability requirements demonstrate that they should be standardized.

## Why `temporalOrder` Is Part of the History Extension

Recorded temporal fields do not always distinguish Events whose relative chronology is nevertheless known. Events may share the same date and precision, or their dates may be unknown while one is known to precede another.

The purpose of `temporalOrder` is to preserve that temporal fact across interoperable applications. Its name makes clear that it does not represent arbitrary presentation order.

The integer itself has no meaning beyond relative comparison. Applications may regenerate or rebalance values when they preserve the represented relative temporal order.

The History Extension does not standardize an allocation algorithm because sequential numbers, sparse numbers, and rank-like strategies can all produce the same observable ordering. Standardizing an algorithm would constrain implementations without improving interoperability.

`temporalOrder` is used only when the recorded temporal value and precision do not already establish the order. It cannot be used to reverse known chronological positions.

## Why Display Order Is Separate

The same Events may reasonably appear in different orders in different views. One view may use chronology, another may emphasize a narrative path, and another may present a curated comparison.

A view-specific order therefore does not belong in `temporalOrder`. A future presentation Extension may define a View-owned Event ID list, allowing each View to own an independent order without changing the Events' temporal data.

Temporary sorting, selection, panel state, scroll position, and similar application state remain outside the Dataset.

## Why Civil Time and Instant Ordering Are Both Needed

Civil Time ordering and Instant ordering answer different questions.

- Civil Time ordering preserves the locally recorded calendar and clock values.
- Instant ordering compares values on the UTC time scale when they can be resolved without inventing information.

Neither mode is universally correct. A historical calendar view may need the dates recognized at each Event's location, while a cross-zone sequence of precisely timed Events may need Instant ordering. Applications should identify the mode when the difference can affect the result.

## Layered Temporal Model

The History Extension provides primary Civil Time, optional resolution to an Instant, and limited relative ordering through `temporalOrder`.

Future Extensions may complement this information with:

- alternative calendar systems and conversion provenance
- relative temporal relationships and constraints
- interoperable timeline views and presentation order

Applications should treat these Extensions as complementary rather than competing.

History data remains the temporal source. A Relative Time Extension may express relationships such as before, after, or between. A presentation Extension may arrange the same Events differently without changing their temporal meaning.

This layered design keeps individual Extensions small while allowing increasingly sophisticated temporal reasoning.
