# Coordinate Maturity and Identifier Decision

Date: 2026-08-13

Status: Accepted architecture decision; non-normative record

## Decision

Coordinate should be **revised into a normative draft before any Stable
registration is considered**.

The alternatives rejected at this checkpoint are:

- direct promotion of experimental prototype `0.1.0` to Stable; and
- indefinite deferral after the interoperability evidence has succeeded.

The existing prototype is evidence, not the future normative definition. It is
frozen for compatibility and migration work under:

```text
experimental.github.sukoyaka-dopeness.coordinate
prototype format 0.1.0
```

The next definition should use the working draft identifier:

```text
draft.github.sukoyaka-dopeness.coordinate
```

Its first specification version should be `0.1.0`. The full pairs distinguish
the definitions:

```text
experimental.github.sukoyaka-dopeness.coordinate + prototype format 0.1.0
draft.github.sukoyaka-dopeness.coordinate        + specification version 0.1.0
```

The draft identifier is not an alias for the prototype identifier. Migration
must be explicit and must not keep two automatically synchronized payloads.

No Stable identifier is registered by this decision. The concise identifier
`coordinate` remains a plausible future E2R-registered name, but it is neither
reserved nor selected until the draft passes its own review.

## Why the evidence is sufficient to continue

Prototype `0.1.0` now demonstrates the responsibility in executable form:

- Dataset-level Space definitions with stable Dataset-local IDs;
- Component-keyed finite numeric values;
- partial Coordinates and multiple Spaces;
- the same structure on Entity and Event;
- controlled Linkscape legacy migration;
- independent interpretation by Linkscape and NarrativeLine;
- bounded writes to one shared Space by both applications;
- preservation of unknown fields, Components, other Spaces, and array order;
- structural duplicate and incompatible-definition refusal;
- offline external-reference preservation and interpretation;
- exact prototype validation with Coordinate-specific diagnostics; and
- a repeatable NarrativeLine -> Validator -> Linkscape -> Validator ->
  NarrativeLine checkpoint.

This is enough evidence that Coordinate is a useful independent Extension
responsibility. It is not evidence that every prototype field is ready to
become a permanent contract.

## Why direct Stable promotion is rejected

### 1. Compatibility-sensitive fields are described as informational

Prototype `0.1.0` describes Space `kind` as informational. In practice, both
writers require exact agreement on `kind`, `unit`, and `positiveDirection`
before changing shared values. The implementation behavior is appropriately
conservative, but the written contract does not yet define these values as
interoperability identity or specify how equality is determined.

The draft must distinguish clearly between:

- human-readable metadata;
- opaque identifiers compared exactly;
- standardized vocabulary tokens; and
- optional hints that must not control safe writing.

### 2. Unit and direction vocabulary is underspecified

The prototype permits a `unit` identifier or Dataset-defined unit name without
defining a Dataset unit registry, namespace rules, or equality semantics.
Likewise, values such as `display-right`, `east`, and `north` are useful
evidence but do not yet form a normative vocabulary.

The first draft may keep identifiers opaque and exact rather than attempting a
universal unit ontology, but that rule must be explicit. A writer must be able
to decide compatibility without guessing from display text.

### 3. External-reference precedence required a separate decision

The prototype can preserve an OGC coordinate reference identifier offline, but
does not yet state what happens when an external definition and local
Component metadata disagree. The draft must define whether local Components
are aliases, mappings, constraints, or an independent Dataset vocabulary, and
which information a processor may rely on without resolving the reference.

Network access must remain optional. The accepted follow-up decision keeps the
local definition operationally authoritative, adds explicit Component-level
external bindings to the draft design, and makes unresolved or
conflicting bindings fail closed for external-aware writes.

### 4. Version bootstrap required a separate decision

`formatVersion` successfully bootstraps prototype `0.1.0`, while the draft
Specification Extension can separately declare an exact version. Before the
Coordinate draft is written, it must decide whether it retains an internal
bootstrap field, relies on a Specification declaration when available, or
defines a finite combination of both. It must avoid contradictory sources of
truth and remain usable when the Specification Extension is absent.

The accepted follow-up decision gives the future Coordinate draft its own
required `specVersion`. A supported Specification declaration repeats that
exact value only as a checked consistency assertion and cannot override it.

### 5. A normative schema and migration contract were required

The Validator implementation and fixtures are valuable executable evidence,
but the prototype does not yet have a normative JSON Schema or an independently
reviewable field contract. The draft needs:

- a schema for Dataset, Entity, and Event placements;
- explicit unknown-field preservation expectations;
- valid and invalid fixtures owned by the draft;
- a migration from the frozen experimental identifier; and
- a statement of what happens to unsupported or partially understood data.

The resulting draft contract now supplies the written rules, a JSON Schema,
valid and invalid fixtures, semantic fixture validation, and an atomic,
fail-closed prototype migration. Application and published Validator adoption
remain a later review checkpoint.

### 6. Space evolution required a bounded rule

Stable Dataset-local Space IDs are already useful. The draft still needs to say
when changing a Space definition is compatible, when a new Space ID is
required, and how processors handle deletion or replacement while Coordinates
refer to the Space. This is reference integrity, not Layout or Presentation.

The accepted follow-up decision permits same-ID display-name edits and bound
changes that preserve every recorded value. Component-set or semantic changes
require a new Space ID, explicit Coordinate migration, and reference-safe
retirement of the old Space.

## Identifier assessment

| Option | Decision | Reason |
| --- | --- | --- |
| Keep `experimental.github.sukoyaka-dopeness.coordinate` permanently | Reject | `experimental` no longer reflects the demonstrated interoperability expectation and would freeze prototype fields prematurely |
| Move the next definition to `draft.github.sukoyaka-dopeness.coordinate` | Accept | Matches the naming rules for a developing candidate and keeps the current prototype identifiable for migration |
| Register `coordinate` now | Reject for now | Concise and implementation-independent, but registration would make identity effectively immutable before the draft contract is reviewed |
| Select a permanent qualified Stable identifier now | Defer | No present evidence requires choosing between a future E2R-registered short name and a permanent authority-qualified identity |

`Coordinate Extension` remains the accepted English display name and
`Coordinate` remains the responsibility term. Display-name acceptance does not
register an Extension identifier.

## Required first-draft decisions

The draft must resolve these items before application migration begins:

1. exact compatibility semantics for `kind`, Component IDs, units, and
   positive directions;
2. the relationship and precedence between local Components and
   `externalReference`;
3. the exact-version bootstrap and its interaction with the Specification
   Extension;
4. compatible and incompatible Space-definition evolution;
5. normative placement, reference, numeric, partial-value, and preservation
   rules;
6. a machine-readable schema and fixture set; and
7. explicit one-way migration from experimental prototype `0.1.0`.

The draft must not absorb Relation routes, label placement, icons, zoom, pan,
selection, grouping, ordering, or generation algorithms. Those responsibility
boundaries have already passed the architecture audit.

## Application consequences

Until the draft is reviewed:

- Linkscape and NarrativeLine continue to read and write the frozen
  experimental prototype as currently tested;
- Validator continues to identify its diagnostics as prototype-specific;
- no application writes `draft.github.sukoyaka-dopeness.coordinate`;
- no automatic migration runs merely because a Dataset is opened; and
- no Stable registry entry is added.

After the draft schema and migration rules are accepted, applications may add
an explicit migration workflow. Backward reading support can remain during a
transition, but the prototype and draft payloads must not be maintained as
synchronized aliases.

## Completion condition for this decision

This maturity checkpoint is complete when the repository records:

- the **revise** disposition;
- the frozen prototype boundary;
- the working draft identifier;
- the unresolved Stable identifier;
- the required first-draft decisions; and
- the prohibition on automatic registration or migration.

The first two bounded draft-design tasks are now completed. Compatibility
semantics for Space and Component definitions are recorded by
`coordinate-space-component-compatibility-decision.md`, which accepts exact
lexical identity and semantic-descriptor matching through explicit application
capability profiles. `coordinate-external-reference-decision.md` keeps local
definitions self-contained, defines explicit external Component bindings, and
requires external-aware writing to fail closed.
`coordinate-version-and-space-evolution-decision.md` makes Coordinate's own
`specVersion` the authoritative bootstrap and requires new Space IDs for
semantic-definition changes. The normative contract, schema, fixtures, and
explicit prototype migration are now assembled under
`extensions/coordinate-extension-draft.md`; repository review precedes
application or published Validator adoption.
