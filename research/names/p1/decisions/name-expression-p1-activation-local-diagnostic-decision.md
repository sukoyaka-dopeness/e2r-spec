# Names Draft 0.1.0 Activation and Local Diagnostic Decision

Date: 2026-08-14

Status: policy selected; ready for bounded `validateDataset()` integration

## Status and scope

This non-normative memo fixes the activation rule and public diagnostic mapping
for the local structural rules of Names Draft `0.1.0`. It authorizes no code,
schema, test, CLI, package, public-export, or specification change.

The accepted Dataset-wide duplicate policy remains unchanged. Its code is
`names_draft_expression_id_duplicate`, its severity is `error`, and it emits
one diagnostic at every duplicated recognized-ID occurrence path without
`relatedIds`.

## Existing architecture findings

The Validator separates Extension support state from payload conformance. Its
Specification Extension implementation registers locally supported exact
identifier/version pairs, reports version-unspecified and unsupported states,
and applies an exact supported implementation only when the selected version
is supported. Public diagnostics use stable `severity`, `code`, and RFC 6901
`path` fields, plus optional `relatedIds` for Core Object IDs.

Existing Core and Extension structural validators implement explicit checks
and translate facts directly to stable E2R diagnostic codes. The Validator has
no JSON Schema registry, no Ajv dependency, and no runtime mechanism for
loading schemas from the sibling specification repository or a published
schema package. Ajv error vocabulary is not part of its public contract.

## Part A: activation decision

Names Draft `0.1.0` local and Dataset-wide rules become active only when all of
the following are true:

1. the Validator locally registers exact Extension identifier
   `draft.github.sukoyaka-dopeness.names`;
2. that registration supports exact version `0.1.0`;
3. the Dataset contains a valid, usable Specification Extension draft `0.1.0`
   declaration selecting that exact identifier and version; and
4. the public Names implementation contains both the accepted local structural
   mapping and accepted Dataset-wide duplicate mapping.

Payload presence alone is insufficient. Local implementation knowledge alone
is insufficient. Text in a malformed declaration is insufficient. The key
does not independently bootstrap version selection, and Names Draft `0.1.0`
must not gain an in-payload version field.

### Version unspecified

When an object-local Names payload exists but no usable exact declaration
selects its version, the Validator emits the existing
`extension_version_unspecified` warning according to its support-state policy.
It emits no Names Draft `0.1.0` local diagnostics and does not run the Names
duplicate detector for public diagnostics.

This is implementable in the current architecture: register Names as locally
known, retain the existing version-unspecified support pass, and gate both
Names validation stages on the exact declaration returned by the existing
Specification validator. No payload wrapper or new version field is needed.

### Unsupported version

If a valid declaration selects the known Names identifier at an unsupported
exact version such as `0.2.0`, the existing
`specification_version_unsupported` warning applies. Neither `0.1.0` local
rules nor the `0.1.0` duplicate detector runs. A future version is never
validated against `0.1.0` by fallback.

### Unrelated identity

A payload or declaration for any other identifier does not activate Names.
This includes a future Stable `names` identifier, another authority-qualified
Draft, and research-only P1 fixture identifiers.

### Invalid Specification declaration

Malformed or otherwise invalid Specification Extension data follows the
existing Specification diagnostics and support-state behavior. It does not
activate Names merely because malformed text contains the Names identifier and
version. If no usable exact Names declaration results, the Names payload
remains version-unspecified for interpretation purposes: no Names `0.1.0`
local or duplicate diagnostics are emitted. Existing Specification errors may
independently make the combined result invalid.

### Activation table

| State | Support warning | Names local rules | Duplicate rules | Result |
| --- | --- | --- | --- | --- |
| Exact `0.1.0` declaration plus local support | None for support state | Run | Run | Names conformance errors affect `valid` |
| Payload but version unspecified | `extension_version_unspecified` | Do not run | Do not run | Warning only from Names support state |
| Unsupported Names version | `specification_version_unsupported` | Do not run | Do not run | Unsupported-version warning; unrelated errors remain independent |
| Unrelated Extension | Existing unknown/unavailable/supported behavior for that identity | Do not run | Do not run | No Names interpretation |
| Malformed Specification declaration | Existing applicable Specification diagnostics; version-unspecified warning where the existing support pass produces it | Do not run without a usable exact declaration | Do not run without a usable exact declaration | Specification errors/warnings remain independent |

## Part B: local structural diagnostic mapping

Every selected local code is Names-Draft-specific and has severity `error` when
exact support is active. Missing properties point to where the property belongs.
Wrong or empty values point to the defined field. A non-object expression member
points to the member itself.

The mapping intentionally uses one `_invalid` code for both wrong type and
empty string where both violate the same field contract. Missing fields retain
separate `_missing` codes because absence and an invalid present value are
distinct stable facts in existing Validator conventions.

| Condition | Code strategy | Severity | Path | Coexists with duplicate? | Recommendation |
| --- | --- | --- | --- | --- | --- |
| B1 payload wrong type | `names_draft_payload_invalid` | error | Names payload path | No candidate collection is possible from that payload | Emit one diagnostic |
| B2 missing `expressions` | `names_draft_expressions_missing` | error | `<payload>/expressions` | No candidates in the missing collection | Emit one diagnostic |
| B3 `expressions` wrong type | `names_draft_expressions_invalid` | error | `<payload>/expressions` | No candidates in the non-array value | Emit one diagnostic |
| B4 member not object | `names_draft_expression_invalid` | error | `<expressions>/<index>` | Member is unrecognized and excluded | Emit one diagnostic |
| B5 missing `id` | `names_draft_expression_id_missing` | error | `<member>/id` | Member is unrecognized and excluded | Emit one diagnostic |
| B6 `id` wrong type, including null | `names_draft_expression_id_invalid` | error | `<member>/id` | Member is unrecognized and excluded | Emit one diagnostic |
| B7 empty string `id` | `names_draft_expression_id_invalid` | error | `<member>/id` | Yes; it remains recognized | Emit local plus applicable duplicate diagnostics |
| B8 missing `value` | `names_draft_expression_value_missing` | error | `<member>/value` | Member is unrecognized and excluded | Emit one diagnostic |
| B9 `value` wrong type, including null | `names_draft_expression_value_invalid` | error | `<member>/value` | Member is unrecognized and excluded | Emit one diagnostic |
| B10 empty string `value` | `names_draft_expression_value_invalid` | error | `<member>/value` | Yes; it remains recognized | Emit local plus applicable duplicate diagnostics |
| B11 `language` wrong type, including null | `names_draft_expression_language_invalid` | error | `<member>/language` | Yes when string `id` and `value` recognize the member | Emit local plus applicable duplicate diagnostics |
| B12 `script` wrong type, including null | `names_draft_expression_script_invalid` | error | `<member>/script` | Yes when string `id` and `value` recognize the member | Emit local plus applicable duplicate diagnostics |
| B13 unrecognized member | Use the applicable B4-B6 or B8-B9 diagnostics | error | Smallest member or field path above | No, because it is unrecognized | Do not emit an additional generic diagnostic |

### Exact code set

```text
names_draft_payload_invalid
names_draft_expressions_missing
names_draft_expressions_invalid
names_draft_expression_invalid
names_draft_expression_id_missing
names_draft_expression_id_invalid
names_draft_expression_value_missing
names_draft_expression_value_invalid
names_draft_expression_language_invalid
names_draft_expression_script_invalid
```

The accepted Dataset-wide code remains separately:

```text
names_draft_expression_id_duplicate
```

### Unrecognized-member decision

Do not emit an additional generic unrecognized-member diagnostic when the
specific local diagnostics completely explain non-conformance. A non-object
member receives `names_draft_expression_invalid`. An object lacking a string
`id` or string `value` receives the applicable missing or invalid field codes.

For example, `{ "id": "N1", "opaqueFutureData": true }` receives
`names_draft_expression_value_missing` when exact `0.1.0` support is active.
It receives no second generic diagnostic and does not enter duplicate
collection. This keeps preservation, recognition, and conformance distinct
without duplicate diagnostic noise.

## Part C: code naming strategy

Select Names-Draft-specific stable codes mapped from explicit structural facts.
Do not expose raw Ajv keywords, instance paths, schema paths, or messages as
the public code contract.

The chosen set is fine-grained where the Validator already distinguishes
missing from invalid, but it avoids separate type, null, and empty codes for
the same present field. This balances machine precision and code stability,
isolates the authority-qualified Draft from future Stable Names, and follows
existing Extension prefixes such as `coordinate_draft_`.

Generic schema-error codes are rejected because the current Validator has no
generic schema diagnostic layer and because such codes would obscure which
recognized Extension contract failed. Ajv keywords are implementation details
and are not stable E2R diagnostic semantics.

## Part D: severity

Select `error` for every local code above when exact Names Draft `0.1.0`
support is active. These facts violate MUST-level rules of a recognized exact
Extension contract. Authority-qualified Draft status does not reduce a known
conformance violation to a warning.

The error means the combined Validator result is invalid under supported Names
Draft conformance. It does not mean that the E2R Core structure itself failed.
The `names_draft_` namespace preserves the validation layer distinction.
Support limitations remain warnings under the existing support-state codes.

## Part E: path policy

Paths use existing RFC 6901 rules and the exact structural location. For any
Core collection `C`, object index `O`, and expression index `E`, let:

```text
P = /C/O/extensions/draft.github.sukoyaka-dopeness.names
```

Then:

- payload wrong type: `P`;
- missing or invalid expressions: `P/expressions`;
- non-object member: `P/expressions/E`;
- missing, wrong, or empty ID: `P/expressions/E/id`;
- missing, wrong, or empty value: `P/expressions/E/value`;
- invalid language: `P/expressions/E/language`; and
- invalid script: `P/expressions/E/script`.

The same rule applies under `entities`, `events`, and `relations`. Dataset-level
Names is not a Draft `0.1.0` payload placement and is not fed into these local
rules. Missing-property paths point to where the absent property belongs,
matching existing Core and Extension practice.

## Part F: coexistence with duplicate diagnostics

Independent violated invariants remain independently observable. Local
validation must not filter or rewrite the input passed to recognized-candidate
collection.

For two recognized records with empty string IDs, each record receives
`names_draft_expression_id_invalid` at its own `/id` path. Because both remain
recognized, each also receives `names_draft_expression_id_duplicate` at that
same path. The duplicate set therefore yields two local diagnostics and two
duplicate diagnostics.

For a recognized `N1` with numeric `language` and another recognized `N1`, the
first receives `names_draft_expression_language_invalid`; both occurrences
receive `names_draft_expression_id_duplicate`. Local failure never suppresses
Dataset-wide recognition.

Missing or wrong-type `id` or `value` prevents recognition. Those members
receive their local facts but no duplicate diagnostic. This is recognition,
not suppression after validation.

## Part G: deterministic ordering

Select this public ordering when Names support is active:

1. existing Specification/support-state diagnostics;
2. Names local structural diagnostics; and
3. Names Dataset-wide duplicate diagnostics.

Names local traversal is `entities`, then `events`, then `relations`; within
each collection it follows Core Object array order, then expression array
order. Within one expression object, checks occur in defined-field order:
`id`, `value`, `language`, `script`. Payload and `expressions` preconditions are
reported before member traversal because traversal is not possible otherwise.

Duplicate diagnostics retain the already accepted detector scan order. This
ordering is an API determinism rule only. It assigns no semantic priority,
repair priority, canonical identity, or ranking. Tests should assert the whole
ordered result where ordering is part of the accepted public behavior.

## Part H: unknown properties

Unknown properties on the Names payload and expression records are allowed.
No diagnostic is emitted merely because an unknown property exists. Opaque
null in an unknown property is also allowed. Local validation must not use an
`additionalProperties` failure and must not delete or reinterpret unknown data.

## Part I: equal values

Equal `value` strings under distinct recognized IDs produce no local or
Dataset-wide diagnostic. No equivalence, similarity, transliteration, ranking,
or preferred-display warning is introduced.

## Part J: whitespace-only values

A whitespace-only non-empty string such as `" "` satisfies Draft `0.1.0`'s
current `minLength: 1` boundary. It produces no whitespace diagnostic and is
not trimmed or normalized. An empty string remains locally invalid but
recognized for duplicate collection.

## Part K: local schema execution strategy

Select explicit manual checks in the existing Validator architecture, mapped
to the stable codes in this memo. Do not introduce Ajv or a runtime schema
loader as part of the bounded integration.

This choice reflects the current architecture rather than making schema
semantics secondary. The written Names specification remains normative and
the accepted JSON Schema remains the local machine-readable reference. To
control drift, exhaustive boundary regression tests must mirror the acceptance
cases of the accepted Names Draft `0.1.0` schema, including null, wrong type,
empty string, unknown properties, empty arrays, equal values, and
whitespace-only values.

The Validator test suite does not require a runtime or filesystem dependency
on a sibling `e2r-spec` checkout. Any future shared-schema conformance
mechanism requires a separate packaging decision.

Ajv execution was considered but not selected because the Validator currently
has no schema-registration mechanism or Ajv dependency, and its published
package cannot safely depend on a sibling repository path. Copying the schema
would create another source of truth. Raw Ajv errors would also leak unstable
implementation details into the public API. A future shared schema package or
registry may justify reconsideration, but it is not a prerequisite for this
small exact Draft integration.

## Part L: public support condition

The Validator may call itself publicly supportive of Names Draft `0.1.0` only
when one bounded implementation includes all of the following:

- exact identifier/version registration;
- valid exact Specification declaration activation;
- version-unspecified, unsupported, malformed-declaration, and unrelated-ID
  gating tests;
- every local structural mapping selected here;
- the accepted Dataset-wide duplicate detector and diagnostic mapping;
- deterministic diagnostic ordering;
- coexistence tests for locally invalid recognized candidates;
- unknown-property, opaque-member, equal-value, whitespace, namespace, scope,
  and mutation regression tests;
- stable public diagnostic and validation-scope documentation;
- CLI and library consistency; and
- read-only behavior with no repair.

Detector availability alone is not Names support. Draft support does not
register or promise compatibility for future Stable Names.

## Required verdicts

### A. Activation rule

Select exact local identifier/version support plus a valid exact Names Draft
`0.1.0` Specification declaration. The payload key alone never activates
`0.1.0` rules.

### B. Version-unspecified policy

Select `extension_version_unspecified` under existing policy, with no Names
`0.1.0` local or duplicate diagnostics.

### C. Local code strategy

Select Names-Draft-specific stable fact codes, distinguishing missing from
invalid while combining wrong type, explicit null, and empty string under the
applicable present-field `_invalid` code.

### D. Local severity

Select `error` for every exact-supported local structural violation.

### E. Local path policy

Select the smallest applicable payload, property, member, or defined-field
RFC 6901 path. Missing fields point to where the property belongs.

### F. Generic unrecognized-member diagnostic

Select do not emit. Use the specific member or field diagnostics that fully
explain why the member is unrecognized and non-conforming.

### G. Local and duplicate coexistence

Select coexistence for every locally invalid member that still satisfies the
accepted recognized-candidate boundary.

### H. Diagnostic ordering

Select support/version diagnostics, then local Names diagnostics in Dataset
and defined-field order, then duplicate diagnostics in accepted scan order.

### I. Schema execution strategy

Select explicit manual structural checks following current Validator
conventions, protected against schema drift by exhaustive boundary regression
tests whose acceptance cases mirror the accepted Names Draft `0.1.0` schema.
The tests require no sibling-repository checkout. No schema-loading prerequisite
remains.

### J. Overall integration readiness

`ready for bounded validateDataset integration`

The activation and local mapping prerequisite left by the duplicate policy
memo is resolved by this decision.

## Exact next bounded task

Prepare and execute one bounded implementation request in `e2r-validator` that
is limited to:

- `src/specification-validator.js` for exact Names Draft `0.1.0` local-support
  registration and exact declaration gating;
- `src/extension-validator.js` and, preferably, one dedicated internal Names
  validator module for local structural diagnostics and orchestration;
- the accepted `src/names-draft-uniqueness-detector.js` for reuse without
  changing recognition semantics;
- focused Names integration tests plus Specification support-state, public API,
  CLI, ordering, coexistence, mutation, and schema-boundary regression tests;
- `docs/diagnostic-contract.md`, `docs/validation-scope.md`, and relevant
  Validator README/support documentation; and
- no application, writer, migration, schema, specification, or repair changes.

The implementation must preserve this exact activation policy, selected codes,
paths, severity, ordering, and duplicate policy. It must not make the local
detector a new Stable package API unless separately authorized.

## Verification-state note

Detector focused tests and relevant existing validation passed; full npm run validate has one pre-existing unrelated fixture-discovery failure.

The full suite is not reported as green, and the unrelated fixture-discovery
issue is not part of the next Names integration task.

## Specification discrepancy

No contradiction was found among the Names Draft specification, accepted local
schema, duplicate policy, Specification Extension version model, or current
Validator diagnostic conventions. The manual-check implementation decision is
an implementation-profile choice and does not make Validator code normative.

## Grouping Selection Reopen Criteria

This decision adds no persistent Name-to-Object binding-target evidence.
Grouping remains `defer selection`; P2/P3 remain closed; Grouping Selection
Reopen Criteria evidence remains `no`.

## UTF-8 and repository safety

This memo must remain UTF-8 without U+FFFD or suspicious mojibake and without
trailing whitespace. All existing uncommitted work is preserved. No reset,
checkout, commit, broad formatting, or unrelated modification is authorized or
performed.
