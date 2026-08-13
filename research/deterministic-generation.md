# Deterministic Generation

Date: 2026-08-12

Status: Exploratory and non-normative

## Purpose

This document explores repeatable automatic generation in E2R applications.
It does not define Core behavior, register a Generation Extension, select a
random-number generator, or require a Dataset identifier.

The practical goal is a versioned Engine contract that can produce predictable
Derived results without silently modifying Owned Dataset data.

## Why repeatability matters

Applications may automatically calculate or create:

- missing graph positions;
- Relation routes and label placement;
- sample or benchmark Datasets;
- synthetic Core objects;
- simulation inputs;
- candidate Presentation values; or
- other purpose-specific results.

Uncontrolled variation makes tests, debugging, collaboration, and comparison
difficult. Repeatability can improve those workflows without making automatic
results part of E2R Core semantics.

## Three different properties

### Determinism

A generation contract is deterministic when the same exact Engine version,
normalized inputs, parameters, and relevant execution rules produce the same
contract-defined result.

```text
same Engine version
+ same normalized inputs
+ same parameters
+ same relevant execution rules
= same contract-defined result
```

The contract must define what equality means. Depending on the purpose, this
may require canonical collection ordering, numeric precision rules, or an exact
serialized representation.

### Reproducibility

A result is reproducible when another permitted environment can reconstruct it
from the declared Engine version, inputs, parameters, and required runtime
conditions.

A deterministic implementation is not automatically reproducible elsewhere.
Its code or Engine version may be unavailable, or its result may depend on an
undeclared font, locale, platform API, numeric library, or external service.

### Incremental stability

A generator is incrementally stable when a change affects only the outputs that
depend on that change, as far as its contract permits.

For example, adding an unrelated Entity should not move every existing graph
node if the layout contract promises stable placement for unaffected objects.

Incremental stability is not implied by determinism. A deterministic global
layout can consistently replace every position after one object changes.

## Interoperability levels

Different repeatability claims should not be confused.

| Level | Claim | Use |
| --- | --- | --- |
| 0 | No repeatability guarantee | Exploratory or intentionally unpredictable behavior |
| 1 | Same application build repeats the result | Local tests and stable user experience |
| 2 | Same versioned Engine contract repeats the result across conforming adapters | Target for shared generation work |
| 3 | Every E2R application independently derives the same result | Not a current E2R goal |

E2R research targets Level 2 where interoperability provides concrete value.
The Core does not standardize a universal generator.

## Versioned Engine model

An Engine is a purpose-specific generator outside the E2R Dataset model.

An Engine should be:

- identified independently from its display name;
- explicitly versioned;
- immutable at a published version;
- side-effect-free with respect to its input Dataset;
- invoked through an application adapter;
- narrow enough to declare its actual dependencies; and
- testable without network access when its contract claims offline operation.

An Engine identifier is not automatically an E2R Extension identifier. An
Engine may implement behavior for Coordinate, Layout, Presentation, Core-object
generation, or another purpose without becoming the owner of that data model.

### Purpose-specific contracts

One universal generation request cannot describe every useful generator.
Contracts should be purpose-specific before a shared envelope is considered.

Examples include:

- missing-coordinate proposal;
- Relation-route proposal;
- label-placement proposal;
- sample-Dataset generation; and
- benchmark-fixture generation.

Each contract must identify which input fields and parameters can affect its
output. Unrelated Dataset data should not be treated as an implicit input.

## Explicit inputs

A deterministic invocation may depend on:

- target Core object identifiers;
- relevant Core fields;
- relevant Extension values;
- existing Owned values that must be preserved or treated as constraints;
- purpose-specific parameters;
- an optional seed;
- the exact Engine version; and
- declared execution rules required by the contract.

Input normalization must be explicit. If collection order is not meaningful,
reordering a Dataset array must not change the result. An Engine may sort by
stable object identifier or use another contract-defined canonical order.

If order is meaningful for a particular contract, that order must be an
explicit input rather than an accidental consequence of JSON array traversal.

## Seeds

A seed is one possible parameter, not the definition of determinism.

The same seed with a different Engine version, input set, parameter set, or
runtime dependency may produce a different result. Conversely, many useful
deterministic algorithms need no pseudo-random seed.

A Dataset ID:

- remains Dataset identity;
- is optional under the Metadata Extension;
- must not be generated merely to run an Engine;
- is not a universal default seed; and
- may be used as a seed only when a purpose-specific workflow chooses and
  exposes that dependency.

Applications should prefer an explicit seed parameter when users need control
over variations. Removing or changing a seed does not modify Core meaning.

## Delta result

An Engine should return a proposed delta rather than a replacement Dataset.

The conceptual result includes:

- Engine identifier and exact version;
- purpose or contract identifier;
- overall outcome status;
- target object identifiers;
- proposed additions, replacements, or removals within the contract's scope;
- per-target outcome where partial results are permitted;
- diagnostics; and
- runtime metadata needed to evaluate the result.

The exact JSON or programming-language shape remains Deferred.

Returning a delta provides three safeguards:

1. the application can validate proposed changes before adoption;
2. unrelated Core and Extension data remains outside the Engine's write scope;
   and
3. the application can present, reject, partially accept, or explicitly save
   the result according to the purpose-specific contract.

The Engine does not mutate the Dataset directly.

## Result validation and failure containment

An application adapter should validate:

- that every target identifier is allowed by the contract;
- that proposed values use the expected responsibility and shape;
- that Core invariants remain valid;
- that the Engine did not attempt to change unrelated data;
- that required dependencies were available; and
- that diagnostics and partial outcomes are internally consistent.

Failure must remain contained to the generation operation. A failed Engine must
not leave a partially mutated Dataset.

Fallback behavior belongs to the application or purpose-specific contract. It
may retain the previous Derived result, use a simpler local generator, display
no result, or ask the user. E2R Core does not select the fallback.

Partial success is permitted only when the contract defines independent target
outcomes and the application can adopt them safely. Otherwise the invocation is
atomic.

## Owned and Derived results

Engine output is Derived when produced. Determinism does not make it Owned.

The application may display or cache a Derived delta without changing the
Dataset. Opening a Dataset or upgrading an Engine must not automatically adopt
the result.

A result becomes Owned only when an intentional application workflow adopts it
under the responsible Core or Extension model. For example:

```text
automatic missing-node position -> Derived Coordinate candidate
explicitly saved position        -> Owned Coordinate data
```

Once a value is Owned:

- later Engine versions must not silently replace it;
- automatic generation should treat it as an input constraint or leave it
  outside the target set;
- resetting it to automatic behavior requires an intentional operation; and
- unsupported applications should preserve it whenever practical.

Generated Core objects can likewise become Owned through an intentional import,
creation, or adoption workflow. They must remain valid Core objects and retain
stable identifiers after adoption.

Whether generation provenance should be stored with an adopted result is a
separate responsibility and remains Deferred. Reproduction metadata is not a
substitute for the adopted value.

## Caches and dependency invalidation

Derived caches are non-authoritative. An application may discard and rebuild
them at any time.

An Engine contract should identify the dependencies of each result at the
smallest useful scope. When a dependency changes, only affected Derived results
should be invalidated when the contract promises incremental stability.

Potential dependencies include:

- target Core object fields;
- Relation endpoints;
- Coordinate values;
- Layout constraints;
- Presentation inputs;
- Engine parameters; and
- external resources explicitly admitted by the contract.

Owned values are not cache entries. A dependency change may make an Owned value
stale or inconsistent, but it does not authorize automatic replacement. The
application should report the issue or request an intentional update.

## Linkscape evidence

Linkscape currently demonstrates Level 1 repeatability for parts of its graph
display:

- fallback Entity positions are derived from Entity array order;
- Relation routing evaluates deterministic geometric candidates;
- parallel and self-Relations use stable indexes for a fixed ordered input;
- label placement evaluates candidates in a fixed order; and
- stored coordinates take priority over fallback placement.

The current behavior is not a shared versioned Engine contract:

- Entity-array reordering can change fallback positions;
- Relation-array order can affect route occupancy and label placement;
- implementation version is not recorded as an Engine identity/version pair;
- no delta result is exposed;
- dependency scopes are not declared; and
- incremental stability across graph edits is not guaranteed.

Linkscape does not use `datasetId` as a mandatory seed. This is compatible with
the research direction.

Current automatic positions, routes, labels, and collision avoidance remain
Derived. Linkscape adopts only Entity coordinates through its explicit
`Save node coordinates` operation; manual route and label adjustments are not
currently adopted into the Dataset.

## No universal Generation Extension

Current evidence does not justify a general Generation Extension.

Generation is behavior performed by an Engine and application adapter. The
result belongs to the responsibility it represents: Coordinate, Layout,
Presentation, Core, or another Extension.

Engine configuration, cache state, progress, retries, and fallback selection
normally remain application state. A future provenance or reproducibility
responsibility may record selected facts about an adopted result, but it must
not become a universal wrapper around all generated data.

## Required experiments

### 1. Repeat invocation

Run the same Engine version twice with identical normalized inputs and
parameters. Compare the contract-defined result, diagnostics, and target
statuses.

### 2. Irrelevant array reordering

Reorder Entity, Event, or Relation arrays that the contract declares
order-insensitive. Confirm that outputs remain identical.

### 3. Incremental graph change

Add or edit one target and verify that unaffected results remain stable to the
degree promised by the contract. Record cases where global recomputation is an
intentional contract behavior.

### 4. Engine upgrade with Owned values

Adopt selected generated coordinates, upgrade the Engine, and confirm that the
Owned coordinates remain unchanged while eligible missing values may receive
new Derived proposals.

### 5. Delta validation

Return a proposal containing target identifiers and scoped changes. Verify that
the application rejects unknown targets, invalid values, and attempts to modify
unrelated fields before mutating the Dataset.

### 6. Failure containment

Force unavailable dependencies, invalid output, timeout, and partial-result
conditions. Confirm that the Dataset remains unchanged unless a valid permitted
partial result is intentionally adopted.

### 7. Optional seed and missing Dataset ID

Run a seedless deterministic contract against a Dataset without `datasetId`.
Then run an explicitly seeded variation and confirm that the seed is only a
declared parameter.

### 8. Cross-adapter reproduction

Invoke the same Engine version and contract through two application adapters.
Confirm the Level 2 equality rules or document environment dependencies that
prevent reproduction.

## Open questions

- What lexical rules should Engine and contract identifiers use?
- Which Engine artifacts must remain available to support old versions?
- Which equality rules are appropriate for floating-point geometry?
- How should execution limits and cancellation appear in diagnostics?
- When is partial success safe for each purpose-specific contract?
- Which dependency information belongs in runtime caches versus persisted
  provenance?
- How should nondeterministic AI services report that they cannot provide a
  deterministic contract?
- When does a globally recomputed result remain acceptable despite weak
  incremental stability?

These questions should be answered per contract before attempting a shared
generation envelope.

## Decision checkpoint

Shared generation work may advance when at least one purpose-specific Engine:

- has an immutable identifier and version;
- declares normalized inputs and parameters;
- returns a validated delta;
- preserves Owned data;
- contains failure without Dataset mutation;
- documents its deterministic and incremental-stability guarantees; and
- reproduces its contract-defined result through a second adapter.

Until then, deterministic algorithms remain application behavior and their
unadopted results remain Derived.
