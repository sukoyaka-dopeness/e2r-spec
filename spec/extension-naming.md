# Extension Naming Rules

## Purpose

This document defines identification, naming, namespace, registration,
version-separation, and migration rules for E2R Extensions. It is the single
source of truth for Extension identifiers and names.

The Specification Extension describes metadata about specifications; it does
not define these global naming rules.

## Extension Identifiers and Payload Keys

An Extension identifier is the exact property name used to locate that
Extension's payload in an `extensions` object:

```text
extensions.<extension-identifier>
```

For example, `history` is both the Extension identifier and the payload key in
`extensions.history`.

An Extension identifier identifies an Extension responsibility across its
specification versions. It is distinct from:

- a human-readable or localized display name;
- the Dataset's top-level Core `version`; and
- the version of the Extension specification.

E2R does not currently define a second canonical specification identifier that
is separate from the Extension identifier. Introducing such an identifier in
the future would require explicit binding, conflict, preservation, and migration
rules. It MUST NOT be inferred from a display name, documentation URL, or
implementation name.

Extension identifiers are resolution-independent identity values. Applications
MUST NOT require network access, DNS resolution, or registry lookup merely to
compare an Extension identifier or determine Core validity.

## Stable Extension Names

Stable Extension names are Extension identifiers. They are concise, lowercase,
implementation-independent names and MUST use only lowercase ASCII letters,
digits, hyphens, and periods.

An Extension is not Stable merely because a document exists for it. Stable names
are explicitly registered by the E2R specification.

### Registered Stable Extension Names

| Name | Specification |
| --- | --- |
| `metadata` | `extensions/metadata-extension.md` |
| `history` | `extensions/history-extension.md` |

`metadata` and `history` are existing registered unqualified identifiers. Their
registration does not make other unqualified names available to independent
publishers.

Coordinate remains unregistered after its prototype maturity review;
`draft.github.sukoyaka-dopeness.coordinate` identifies draft candidate
`0.1.0`, not a Stable Extension. Layout, Dictionary, and Specification likewise
remain candidate Extensions until their maturity and registration status are
reviewed. None of these names appears in the Stable registry above.

## Namespaced Extension Names

Draft, experimental, and vendor-specific Extensions SHOULD use:

```text
<prefix>.<authority>.<extension-name>
```

The prefixes are `experimental`, `draft`, and `vendor`. Experimental means
exploratory work without an interoperability expectation. Draft means a
developing candidate specification. Vendor identifies ownership or scope and
is not a required lifecycle stage.

An authority MAY use a reverse-domain name or a service-scoped account name.
It is a collision-avoidance scope, not proof of ownership or a permanent
registry. An authority component that resembles a domain or URL remains an
opaque identifier component; applications are not required to resolve it.

Examples:

```text
experimental.github.sukoyaka-dopeness.spaces
draft.org.example.coordinate
vendor.com.example.relationship-type
```

These complete names are Extension identifiers and therefore also appear as
payload keys. Underscores, spaces, and uppercase letters SHOULD NOT be used.

## Registration and Collisions

The registered name table in this document is the initial Stable name registry.
A name MUST NOT be considered Stable until explicitly registered. A future
machine-readable registry may be added if multiple tools require it.

Unqualified names are collision-prone. An unregistered unqualified name SHOULD
NOT be assumed to identify a globally interoperable Extension. Independently
published Extensions SHOULD retain an authority-qualified name unless and until
the E2R specification explicitly registers another Stable identifier.

Unknown or unregistered names do not by themselves make a Dataset invalid.

## Evolution and Migration

Stable Extension identifiers are identity values and SHOULD be treated as
immutable. Changing a display name does not change the Extension identifier.

If a specification changes responsibility enough that it no longer describes
the same Extension, it SHOULD use a new Extension identifier and an explicit
migration path. Splitting or merging Extension responsibilities normally
creates new identifiers. Deprecation alone does not change identity.

Replacing a draft, experimental, or vendor Extension SHOULD likewise create a
new Extension identifier when responsibility continuity is not preserved.
Applications SHOULD NOT maintain automatically synchronized aliases.

Migration metadata may be described by the Specification Extension. The Core
does not resolve Extension aliases.

## Extension Versioning

The Dataset top-level `version` identifies the Core version. An Extension
identifier identifies the Extension. These are separate from the version of an
Extension specification or payload.

The Core does not require a common version wrapper for every Extension. An
Extension MAY define version information inside its own payload when needed.
Version numbers SHOULD NOT be embedded in Stable Extension names.

A future Dataset-level specification declaration MAY associate an Extension
identifier with the exact Extension specification version used by the Dataset.
Such a declaration does not replace or rename the payload key.

When an Extension payload is present without an exact specification-version
declaration, the Extension is present and its specification version is
unspecified unless that Extension defines another version rule. Absence of a
version declaration MUST NOT be interpreted as absence of the Extension.

## Unknown Extensions and Conformance

An unknown, unregistered, or non-conforming Extension name does not make the
Core Dataset invalid. Applications MUST ignore Extensions they do not
understand when reading a Dataset and SHOULD preserve their data whenever
practical.
