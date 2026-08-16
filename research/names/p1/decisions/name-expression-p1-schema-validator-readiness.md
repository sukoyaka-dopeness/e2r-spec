# P1 Names Draft 0.1.0 — Schema / Validator Readiness Review

Date: 2026-08-14

Status: Research-only readiness; non-normative

## Verdict

`ready for bounded schema/validator design`

Draft 0.1.0 contains enough structural boundary to design machine-checkable
constraints. This review does not add a schema, validator implementation, or
diagnostic contract.

## Machine-checkable structural constraints

A future schema or validator may check:

- the Draft payload is an object;
- `expressions` is present and is an array;
- every recognized P1 member is an object;
- recognized `id` is a non-empty string;
- recognized `value` is a non-empty string;
- present `language` is a string;
- present `script` is a string;
- recognized P1 IDs are unique across all Names-owned expressions in the
  Dataset, including Entity, Event, and Relation placements; and
- an `expressions` array containing an unrecognized member is not structurally
  conforming to Draft 0.1.0.

Same values across distinct recognized IDs are valid. Array order has no
semantic meaning. Unknown fields and unrecognized members remain preservation
responsibilities even when they are not conforming recognized P1 data.

## Recognition and conformance boundary

A member is recognized as a P1 candidate when it is an object with a string
`id` and a string `value`. A member with a matching textual `id` but no string
`value` is not a recognized P1 record and must not participate in recognized-ID
uniqueness or replacement operations.

After recognition, Draft conformance additionally requires that `value` is
non-empty and that any present `language` and `script` values are strings. For
example, an object with string `id` and `value` but numeric `language` is a
recognized P1 candidate that is non-conforming; its ID still participates in
the Dataset-wide recognized-ID uniqueness check.

This boundary does not define duplicate-ID semantics for opaque members.

## Dataset-wide uniqueness check

The uniqueness check is Dataset-wide within the Names responsibility, not only
within one Core Object. A validator would need to collect recognized records
from Entity, Event, and Relation `extensions` placements before reporting a
recognized-ID conflict.

This does not require uniqueness against Core Object IDs, other Extension IDs,
or opaque/unrecognized members.

## Preservation versus conformance

These are separate outcomes:

- recognized malformed fields may fail structural conformance;
- an unrecognized array member makes the array non-conforming to Draft 0.1.0;
- a partially aware processor should preserve unknown fields and members when
  practical; and
- preservation does not make unrecognized data semantically conforming.

Unknown Extension handling remains separate from Draft Names conformance.

## Deferred validator policy

The following must remain outside this readiness boundary:

- diagnostic severity and error codes;
- repair or normalization;
- merging equal values;
- rewriting IDs;
- automatic ID allocation;
- reference retargeting;
- Core `name` synchronization;
- Core-name mismatch severity;
- migration diagnostics; and
- unsupported-Extension diagnostics.

A validator must not silently repair or reinterpret P1 identity.

## Language and script

Draft 0.1.0 requires only string type for `language` and `script`. BCP 47,
ISO 15924, registry lookup, normalization, and lexical canonicalization remain
deferred unless a later specification decision explicitly adds them.

## Null and empty values

Recognized `id` and `value` cannot be `null`; `value` is a non-empty string.
Optional `language` and `script` are omitted when absent. Unknown opaque `null`
values may be preserved but have no Draft Names meaning.

## Scope and non-goals

This review does not define lifecycle vocabulary, migration, writer behavior,
Target Reference representation, Grouping, Group identity, cardinality,
preferred display, ranking, transliteration equivalence, or P2/P3 behavior.

## Exact next task

Prepare a schema/validator design note that maps the constraints above to
machine-checkable paths and explicitly assigns every remaining policy question
to Draft specification review, application diagnostics, or a future migration
decision. Do not implement the schema or validator as part of that task.

Grouping remains `defer selection`; P2/P3 remain closed; Grouping Selection
Reopen Criteria evidence remains `no`.
