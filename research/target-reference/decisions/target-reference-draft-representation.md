# Target Reference Draft Representation

Date: 2026-08-14

Status: Internal research representation; non-normative

Related research:

- `target-reference-and-record-lifecycle.md`
- `target-reference-model-comparison.md`
- `target-reference-lifecycle-diagnostic-matrix.md`

## Purpose

The read-only diagnostic harness needs a small in-memory representation in
which the lifecycle matrix can be exercised. This document records that
representation so it cannot be mistaken for a proposed E2R payload.

The representation is deliberately not placed inside a Dataset and does not
define JSON property names, a Schema, an Extension identifier, or a Core
change.

## Internal conceptual shape

An internal reference contains these concepts:

| Concept | Meaning |
| --- | --- |
| `scope` | The resolution scope; the harness currently supports `dataset-local` only |
| `ownerNamespace` | The responsibility that owns the target; `core` is reserved for Core Objects |
| `targetKind` | What kind of target is intended, such as `entity`, `record`, `field-slot`, or `dataset` |
| `localId` | Owner-defined identity of a record or Core Object |
| `fieldKey` | Stable field identity when `targetKind` is `field-slot` |
| companion value datum | Optional explicit historical value kept separately from the reference |

Conceptually, a reference is represented as:

```text
Reference {
  scope: dataset-local
  ownerNamespace: <owner>
  targetKind: <kind>
  localId: <owner-defined identity>
  fieldKey?: <stable field identity>
}

CompanionValueDatum {
  ownerReference: <Reference>
  valueSnapshot: <explicit value-level assertion>
}
```

This is explanatory notation only. The names above are not candidate final
payload keys.

## Resolution context

The harness supplies a separate context describing what the current reader
understands:

- known owner namespaces;
- supported target kinds for each owner;
- currently present target identities;
- supported field identities on each target record; and
- whether Dataset-level targets are supported.

The context is not stored in the reference and is not a runtime registry. It
simulates the capabilities of an aware or unaware application. Field
capability is evaluated on the resolved owner target, not only at namespace
level, so heterogeneous records can expose different stable fields.

## Classification rules

The harness returns one of these research states:

- `malformed` — required structural concepts are absent or inconsistent;
- `unknown` — owner namespace, target kind, or profile capability is not known;
- `missing` — the owner and kind are known, but no current target matches;
- `resolved` — exactly one target matches; or
- `ambiguous` — more than one target matches.

The harness never mutates a reference, creates a target, follows replacement
metadata, performs merge/split selection, or cascades deletion.

It also exposes a research-only lifecycle assessment for `delete`,
`replace`, `merge`, `split`, and `id-reuse`. This assessment returns the safe
generic action (preserve, report, or reject reuse); it does not assign a
resolution state or meaning to owner-specific lifecycle metadata.

When an explicit owner-specific rule is indicated, the harness defers to the
owner instead of treating the generic safety action as a universal prohibition.
Identity reuse is rejected only when the research input confirms that a
persistent reference survives; without that evidence the harness preserves and
reports the case for further owner-specific analysis.

## Deliberately unresolved

This draft does not decide:

- whether a Dataset-wide namespace exists;
- how identifiers are generated or persisted;
- whether retired identities require tombstones;
- how a replacement, merge, or split is serialized;
- whether a field value needs a snapshot record or Claim;
- whether Dataset-level targets are enabled in any future profile; or
- which diagnostic severity a future Validator should assign.

The harness is successful if it demonstrates that those decisions can remain
open without collapsing unknown, missing, malformed, and ambiguous states.

## Research harness

The current read-only implementation is
`research/target-reference/tools/target-reference-diagnostic-harness.mjs`, with executable
checks in
`research/target-reference/tools/target-reference-diagnostic-harness.test.mjs`. It is an
isolated research tool and is not imported by the Validator, NarrativeLine, or
Linkscape.
