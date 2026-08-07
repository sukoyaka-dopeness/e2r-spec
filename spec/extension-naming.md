# Extension Naming Rules

## Purpose

This document defines naming, namespace, registration, and migration rules for
E2R Extensions. It is the single source of truth for Extension names.

The Specification Extension describes metadata about specifications; it does
not define these global naming rules.

## Stable Extension Names

Stable names are concise, lowercase, implementation-independent names. They
MUST use only lowercase ASCII letters, digits, hyphens, and periods.

An Extension is not Stable merely because a document exists for it. Stable names
are explicitly registered by the E2R specification.

### Registered Stable Extension Names

| Name | Specification |
| --- | --- |
| `metadata` | `extensions/metadata-extension.md` |
| `history` | `extensions/history-extension.md` |

Coordinate, Layout, Dictionary, and Specification remain candidate Extensions
until their maturity and registration status are reviewed.

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
registry.

Examples:

```text
experimental.github.sukoyaka-dopeness.spaces
draft.org.example.coordinate
vendor.com.example.relationship-type
```

Underscores, spaces, and uppercase letters SHOULD NOT be used.

## Registration and Collisions

The registered name table in this document is the initial Stable name registry.
A name MUST NOT be considered Stable until explicitly registered. A future
machine-readable registry may be added if multiple tools require it.

Unknown or unregistered names do not by themselves make a Dataset invalid.

## Evolution and Migration

Stable Extension names are identity values and SHOULD be treated as immutable.
Replacing a draft, experimental, or vendor Extension SHOULD create a new
Extension identity with an explicit migration path. Applications SHOULD NOT
maintain automatically synchronized aliases.

Migration metadata may be described by the Specification Extension. The Core
does not resolve Extension aliases.

## Extension Versioning

The Dataset top-level `version` identifies the Core version. An Extension name
identifies the Extension. These are separate from any version of an Extension
specification or payload.

The Core does not require a common version wrapper for every Extension. An
Extension MAY define version information inside its own payload when needed.
Version numbers SHOULD NOT be embedded in Stable Extension names.

## Unknown Extensions and Conformance

An unknown, unregistered, or non-conforming Extension name does not make the
Core Dataset invalid. Applications MUST ignore Extensions they do not
understand when reading a Dataset and SHOULD preserve their data whenever
practical.
