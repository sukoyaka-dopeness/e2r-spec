# E2R Examples

This directory contains reference JSON examples for the E2R Core and official Extensions.

Examples illustrate intended structures. The normative requirements remain in `spec/` and `extensions/`.

## Current Layout

### Core Dataset Examples

JSON files directly under `examples/` are complete Dataset examples:

- `empty-dataset.json`
- `single-event.json`
- `multiple-events.json`
- `event-with-entity.json`
- `cross-application-demo.json`

`cross-application-demo.json` is a reusable workflow example for
NarrativeLine and LiaisonScape. It includes Metadata, mixed History precision,
Event-to-Entity Relations, parallel Entity Relations, multiple self-Relations,
and experimental Coordinate prototype `0.1.0`. LiaisonScape interprets the
`liaisonscape-graph` Entity positions. NarrativeLine independently displays
Dataset-defined Entity/Event Coordinates, including a partial Event value and
an Entity with multiple selectable Spaces.

### History Extension Examples

Valid History examples are stored in `examples/history/`.

The compact files demonstrate individual precision cases:

- `year.json`
- `year-month.json`
- `full-date.json`
- `full-date-time.json`

`unknown-date.json` is an empty fragment demonstrating the absence of recorded History information.

The following Event examples demonstrate Time Zone resolution:

- `tokyo-new-year.json` preserves a Tokyo Civil Time whose UTC preview falls on the previous calendar date.
- `apollo-11-lunar-landing.json` demonstrates an Event recorded with `Etc/UTC` and the numeric offset `+00:00`.

Some History files are fragments rather than complete Core Objects or Datasets. Their purpose is to isolate the Extension structure or absence of History information being demonstrated.

## Valid Examples

Unless a file is placed under `examples/invalid/`, it is intended as a positive example according to the specification revision in the same working tree. Fragment examples are valid only in their documented context and are not standalone Dataset validation targets.

New valid examples should be placed as follows:

- complete Core Dataset examples directly under `examples/`
- official Extension examples under `examples/<extension-name>/`

Examples should remain valid JSON. They should be updated when a normative data structure changes.

## Invalid Examples

Invalid examples are stored under `examples/invalid/` and are intended for negative validation tests.

The current structure is:

```text
examples/
  invalid/
    core/
    extensions/
      history/
      coordinate-draft/
      specification/
```

The History fixtures currently cover:

- an empty Time Object
- `month` without `year`
- `day` without `month`
- `timeZone` without `offset`
- `offset` without `timeZone`
- Time Zone information without minute precision
- an out-of-range `hour`
- an incorrectly formatted `offset`
- the legacy `order` field
- a non-integer `temporalOrder`

### Specification Extension Draft Examples

Specification Extension draft `0.1.0` fixtures are stored in
`examples/specification/`. They cover:

- exact locally supported declarations;
- a legacy payload whose exact Extension version is unspecified;
- a known Extension at an unsupported exact version;
- a locally unavailable Extension specification;
- compatible required dependency data that is unsupported locally; and
- an unsupported Specification Extension bootstrap version.

Invalid declaration and dependency fixtures are stored in
`examples/invalid/extensions/specification/`.

### Coordinate Prototype Examples

`examples/coordinate/external-reference.json` demonstrates an OGC CRS84
identifier while keeping longitude and latitude as locally defined Component
IDs. Validator and NarrativeLine tests process it offline; neither requires
dereferencing the identifier.

`examples/coordinate/migration-refusal/` contains structurally preservable
Datasets for which the explicit Prototype-to-Draft operation must refuse to
run: one has an unknown Prototype field, and one already contains the distinct
Draft identity. They are migration-operation fixtures, not invalid Core
Datasets.

Invalid Coordinate prototype fixtures are stored in
`examples/invalid/extensions/coordinate/`. They cover duplicate Space
definitions, duplicate per-object Coordinates in one Space, unresolved
Components, Relation placement, and disagreement between `formatVersion` and
the Specification declaration. Duplicate claims model the first multi-writer
conflict baseline; they are reported rather than silently merged.

### Coordinate Extension Draft Examples

Coordinate draft `0.1.0` fixtures are stored in
`examples/coordinate-draft/`. They cover:

- partial Entity and Event Coordinates;
- multiple Dataset-local Spaces on one object;
- opaque exact Space and Component IDs containing `/` and `~`;
- exact `specVersion` bootstrap without Specification;
- a matching Specification declaration; and
- explicit external Component bindings for OGC CRS84; and
- an atomic migration output corresponding to the frozen prototype external
  reference fixture, with no inferred external Component bindings.

Invalid draft fixtures are stored in
`examples/invalid/extensions/coordinate-draft/`. They cover bootstrap and
placement errors, whitespace-only Space IDs, duplicate IDs and bindings,
unresolved references, invalid bounds and values, Relation placement, and
missing or conflicting Specification declarations.

Each invalid example should:

- be valid JSON unless JSON syntax itself is the behavior under test
- violate one clearly identified specification rule
- use a filename that identifies the expected failure
- remain separate from reference examples intended for reuse by applications

## Schema Validation

The History schema is located at `schemas/extensions/history.schema.json`.
The Coordinate draft schema is located at
`schemas/extensions/coordinate-draft.schema.json`.

It validates the value stored at `extensions.history`, not an entire Event or Dataset. To validate a History example that contains this property, a test harness should extract the `extensions.history` value from the containing Core Object.

Schema validation covers structural constraints only. IANA Time Zone
resolution, daylight-saving ambiguity, Gregorian date validity for a
particular month and year, cross-Object `temporalOrder`, Coordinate reference
resolution, uniqueness, and numeric constraint relationships require
additional validation.

Schema success does not override the written specification.

## Future Coverage

Future reference examples may cover:

- creative works and fictional narratives
- family trees
- OSINT investigations
- academic citation graphs
- additional official Extensions
