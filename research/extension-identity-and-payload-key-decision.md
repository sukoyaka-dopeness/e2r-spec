# Extension Identity and Payload-Key Decision Memo

Date: 2026-08-12

Status: Accepted architecture decision; non-normative record

Subsequent work: Specification Extension draft `0.1.0` now resolves the
version syntax, candidate identifier, dependency range, Feature identifier,
lifecycle, and bootstrap questions in
`extensions/specification-extension.md`. Statements below that mark these
items Deferred record the boundary of this earlier identity decision; they are
not the current design status.

## Purpose

This memo resolves the next design question identified by
`research/extension-architecture-agenda-audit.md`:

> Should the JSON key locating an Extension payload be separate from the
> canonical identifier of the Extension specification?

The memo reviews four candidate designs and records the accepted minimal
direction. It does not register or rename an Extension, change Dataset
conformance, or define the future Specification Extension schema.

The decision is reflected in `spec/extension-naming.md`. That normative document
remains the source of truth for Extension identifiers and names.

## Existing constraints

The current E2R documents establish these constraints:

- Dataset `version` identifies the Core version, not an Extension version.
- Extension data is stored directly at
  `extensions.<extension-name>.<extension-specific-data>`.
- The Core does not add a common Extension `data` or `version` wrapper.
- `metadata` and `history` are registered Stable Extension names.
- Stable Extension names are currently identity values and should be treated as
  immutable.
- Draft, experimental, and vendor-specific names can already include an
  authority-qualified namespace.
- Unknown Extension names do not make the Core Dataset invalid.
- Applications should preserve unknown Extension data whenever practical.
- Specification is still a candidate Extension and does not yet define an
  exact-version, dependency, Feature, or bootstrap model.

The current implementations also identify supported Extensions directly from
their payload keys. NarrativeLine reads and edits `metadata` and `history`,
Linkscape reads `metadata` and its experimental `coordinate` payload, and
Validator recognizes `metadata` and `history`. None currently resolves a second
specification identifier before interpreting a payload.

## Terminology

| Term | Meaning |
| --- | --- |
| Extension identifier | Stable name identifying an Extension responsibility and locating its payload under `extensions` |
| Payload key | The JSON property containing that Extension payload; under this proposal it is the Extension identifier |
| Display name | Human-readable, localizable name such as `History Extension` |
| Extension specification version | Exact published revision governing the Extension payload |
| Core version | Exact Core revision in the Dataset's top-level `version` |
| Authority | Publisher namespace used to avoid collisions among independently defined Extensions |

An Extension identifier and its exact specification version identify a
published Extension definition:

```text
Extension identifier + exact Extension specification version
```

The display name is not an identity value. The Core version is not an Extension
version.

## Designs reviewed

### Design A: registered short name is the identity

```text
payload key = Extension identifier = history
```

This exactly preserves the current model. It is simple and readable, but a
globally decentralized ecosystem cannot safely allocate generic unqualified
names without a central registry.

### Design B: retain existing short identities and use qualified future identities

```text
metadata                                  existing registered identity
history                                   existing registered identity
vendor.com.example.relationship-type      authority-qualified identity
```

The payload key remains the Extension identifier. Existing Stable names remain
unchanged, while independently published future Extensions use qualified names
to avoid collision.

The future Specification Extension can separately declare the exact version
used by each Extension identifier.

### Design C: separate payload key from canonical specification identifier

```text
payload key:                    history
canonical specification ID:    <different qualified identifier>
exact version:                 <separate version>
```

This preserves short payload keys and allows a second globally qualified
identifier. It also creates an indirection and requires a binding between two
identity-like values.

### Design D: rename all payloads to new qualified identities

```text
extensions.history -> extensions.<new-qualified-history-name>
```

This creates uniform naming at the cost of breaking current Stable-name
immutability and requiring Dataset and application migration.

## Comparison

| Criterion | A | B | C | D |
| --- | --- | --- | --- | --- |
| Existing Dataset compatibility | Strong | Strong | Strong | Poor |
| Stable-name immutability | Strong | Strong | Requires reinterpretation | Poor |
| Single source of truth | Strong | Strong | Weak unless binding is immutable | Strong |
| Multiple authorities | Weak | Strong | Strong | Strong |
| Offline use | Strong | Strong | Strong if resolution-independent | Strong |
| Exact-version declarations | Possible | Possible | Possible | Possible |
| Implementation simplicity | Strong | Strong | Moderate | Poor |
| Payload readability | Strong | Strong | Strong | Variable |
| Collision avoidance | Weak | Strong | Does not solve payload-key collision by itself | Strong |
| Migration cost | None | None | No payload migration, but new binding logic | High |
| Core schema change | None | None | None | None |

## Audit of Design C

The source draft recommended Design C. Its distinction among payload key,
display name, specification identity, and version is valuable, but separating
the first two is not yet justified.

### The payload key remains an interoperability identity

Existing Datasets contain `extensions.history` without a Specification
Extension declaration. Applications must continue to infer the represented
Extension responsibility from `history`.

If a newer Dataset later adds a different canonical identifier, then removing,
losing, or not understanding that declaration cannot make the remaining
`history` payload semantically anonymous. The payload key therefore remains an
identity in every backward-compatible processor.

### Two values create a conflict rule

Design C requires an answer when:

```text
payload key registry says history -> specification X
Dataset declaration says history -> specification Y
```

Treating the declaration as authoritative permits a Stable key to change
meaning. Treating the registered key as authoritative makes the second
identifier subordinate and largely redundant. Treating the conflict as merely
a diagnostic leaves the governing specification unresolved.

### Immutable binding makes the second identifier an alias

Design C can be made safe by requiring one permanent mapping from each Stable
payload key to one canonical specification identifier. However, that produces
two immutable identifiers for the same responsibility and requires every
Specification-aware implementation to maintain the mapping.

No application or cross-authority Dataset currently demonstrates a need for
that extra alias.

### Canonical identity does not solve JSON collision

Two canonical identifiers still cannot simultaneously use the same
`extensions.history` property. Payload keys require authority-aware collision
avoidance regardless of Design C. Using the qualified Extension identifier as
the payload key solves both problems with one value.

## Accepted decision

Adopt **Design B** as the current architecture direction.

### D1. One identifier has two related functions

The Extension identifier both:

1. identifies the Extension responsibility; and
2. locates its payload under `extensions`.

```text
extensions.<Extension identifier>
```

This is not a Core-defined wrapper. It preserves the current direct Extension
payload model.

### D2. Existing Stable identifiers remain unchanged

The registered identities remain:

```text
metadata
history
```

They continue to locate `extensions.metadata` and `extensions.history`. No
payload migration, alias, or second canonical identifier is introduced.

### D3. Qualified identifiers address multiple authorities

An independently published Extension should use an authority-qualified
identifier consistent with the collision-avoidance rules in
`spec/extension-naming.md`.

Existing E2R-registered short identities are historical built-in identities,
not a template that grants generic short names to every publisher.

Whether all future E2R-published Stable Extensions must also be qualified is
Deferred. Stable registration remains a deliberate specification action.

### D4. Version is separate from identity

An Extension specification version must not be embedded in the Extension
identifier or top-level Core `version`.

Conceptually:

```text
Extension identifier = history
exact Extension specification version = 1.0.0
```

The exact version syntax remains Deferred.

### D5. Exact used versions may be declared centrally

The future Dataset-level Specification Extension may declare the exact
specification version used by an Extension identifier.

The declaration should refer to the same identifier used as the payload key;
it should not introduce a second canonical identifier merely to restate that
identity.

The exact JSON representation remains Deferred.

### D6. Missing declaration means version unspecified

If an Extension payload exists without an exact-version declaration, the
Extension remains present and identifiable by its payload key:

```text
payload present + no declaration
= Extension present, specification version unspecified
```

This preserves all current E2R Datasets. A validator may perform locally known
legacy or best-effort validation but must not claim that the Dataset declared a
specific version.

### D7. Identifiers are resolution-independent

An authority-qualified identifier is compared as an opaque identity value. A
consumer must not require DNS, an HTTP request, a registry lookup, or any other
network operation to process the Core Dataset or compare Extension identities.

The lexical form may be URI-like or reverse-domain-like, but resolution is not
part of identity semantics unless a future Extension explicitly adds optional
discovery metadata.

### D8. Unknown data and declarations travel together

An application that does not support an Extension should preserve both its
payload and any exact-version declaration whenever practical.

Unknown, unsupported, or unavailable Extension specifications do not by
themselves invalidate the Core Dataset.

### D9. Display names remain independent

Changing or localizing `History Extension` does not rename `history`. A display
name is never used as the Extension identifier.

### D10. Responsibility change creates a new identity

If a specification changes responsibility enough to cease being the same
Extension, it requires a new Extension identifier and normally a new payload
key. Split and merge operations therefore create new identities and may require
explicit data migration.

Deprecation alone does not change identity.

### D11. Core remains unchanged

The Core continues to know only the `extensions` containers and their direct
Extension-owned values. It does not resolve authorities, specifications,
versions, or dependencies.

## Specification Extension bootstrap

A future Specification Extension must identify its own exact version without
infinite self-reference.

A one-level bootstrap is sufficient:

1. a Specification-aware implementation recognizes the registered
   Specification Extension identifier;
2. the Specification Extension defines a small stable version-discovery field
   in its own payload;
3. that field selects the exact rules used to interpret the remainder of the
   payload; and
4. the payload may then declare exact versions for itself and other used
   Extensions.

The Core does not participate. The future schema must make the bootstrap field
explicit, but this memo does not choose its name or representation.

The current candidate key `specification` is not registered Stable and is not
made permanent by this memo.

## Validator behavior implied by the proposal

An offline Validator should eventually distinguish:

| Dataset state | Result |
| --- | --- |
| Core valid; no specification declarations | Core validation remains possible |
| Known Extension identifier; version unspecified | Best-effort validation may run; exact-version validation is not claimed |
| Identifier and exact version declared and locally supported | Exact Extension validation may run |
| Identifier known but declared version unsupported | Report unsupported Extension version; preserve data |
| Identifier unknown locally | No network required; warn or report unsupported and preserve data |
| Declaration refers to an absent payload | Specification diagnostic, not automatically a Core error |
| Payload exists but declaration is absent | Version unspecified, not Extension absent |

Dependency failures affect the dependent Extension scope, not unrelated Core
data. Exact diagnostic severity belongs to the Specification Extension and
Validator design pass.

## Consequences

### `spec/extension-naming.md`

No reversal of its current identity model is required. A later focused update
should clarify:

- that Extension name, Extension identifier, and payload key refer to the same
  value in the current architecture;
- that `metadata` and `history` are existing registered unqualified identities;
- how independently published Stable or long-lived names use authority
  qualification; and
- that specification versions and display names are separate.

### `extensions/specification-extension.md`

The redesign should declare the exact versions actually used by the Dataset,
using the Extension identifier as the declaration reference. It should also
address required dependencies, optional uses, Features, version compatibility,
evolution metadata, and its one-level bootstrap as separate concerns.

It must not require a live registry and must not make declarations mandatory
for Core processing.

### `spec/core.md`

No schema change is required. At most, a future editorial clarification may
distinguish the Core version from declared Extension specification versions.

### Metadata and History

No payload, field, name, or implementation migration is required.

### Applications

NarrativeLine, Linkscape, and Validator may continue using `metadata` and
`history` directly. Future Specification-aware behavior is additive.

## Rejected for now

- Renaming `metadata` or `history`.
- Adding a second canonical identifier for every Extension.
- Adding a common Core-level Extension wrapper.
- Embedding versions in payload keys.
- Using display names as identities.
- Requiring online identifier resolution.
- Automatically synchronizing aliases between old and new payload keys.
- Treating absence of a specification declaration as absence of the Extension.

## Deferred

- exact identifier grammar;
- whether all future E2R-published Stable identities must be qualified;
- exact version grammar and formal Semantic Versioning adoption;
- exact Specification Extension schema;
- the final Specification Extension identifier and payload key;
- dependency version-range syntax;
- Feature identifier syntax;
- optional specification discovery URLs;
- publisher authentication;
- split and merge migration algorithms;
- lifecycle metadata representation; and
- whether concrete cross-ecosystem evidence may later justify reconsidering a
  separate canonical specification identifier.

## Decision status and next step

Design B is the accepted architecture decision. The corresponding identifier,
payload-key, version-separation, and resolution-independent rules are recorded
normatively in `spec/extension-naming.md`.

The next architecture task is the focused redesign of the Specification
Extension. That work should begin with conceptual records for:

1. Extension identifier and exact used version;
2. required and optional dependencies;
3. optional Features used by the Dataset;
4. immutable specification definition versus mutable lifecycle metadata; and
5. the Specification Extension's one-level bootstrap.
