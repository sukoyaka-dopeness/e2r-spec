# Names Draft 0.1.0 Duplicate-ID Diagnostic Policy Decision

Date: 2026-08-14

Status: policy selected; ready with a bounded version-activation prerequisite

## Status and scope

This memo decides how accepted Dataset-wide Names-owned recognized-ID
duplicates should map to the E2R Validator public diagnostic contract. It does
not implement that mapping. It changes no validator code, diagnostic type,
test, public export, specification, schema, application, or Dataset.

The decision applies only to Extension identifier
`draft.github.sukoyaka-dopeness.names` at exact specification version `0.1.0`.
It does not apply to a future Stable `names` Extension, another Draft version,
or a research-only identifier.

## Current accepted detector boundary

The accepted internal detector scans object-local Names payloads on
`entities`, `events`, and `relations`. A recognized candidate is a non-array
object with string `id` and string `value`. Empty strings and independently
invalid `language` or `script` fields do not prevent recognition. Members
without both string fields are opaque and do not participate in P1 uniqueness.

The detector records expression ID, Core collection, owning object index and
available Core Object ID, expression index, and an RFC 6901-compatible path to
the expression `id`. It is deterministic and read-only. It does not scan a
Dataset-level Names payload.

## Existing validator diagnostic conventions

The public diagnostic shape is `{ severity, code, path, relatedIds? }`.
`path` is an RFC 6901 JSON Pointer to the smallest useful invalid value.
`relatedIds` is explicitly an optional list of relevant Core Object IDs; it is
not a general related-value or related-path field. Extension diagnostics use a
conceptual-area prefix. Violations of recognized structural rules, including
duplicate identifiers and invalid recognized Extension values, are errors.
Unknown or unsupported interpretation states are warnings.

The existing shape cannot attach several related paths to one diagnostic. It
can nevertheless retain every duplicate occurrence without a new property by
emitting one diagnostic at every occurrence path.

## Diagnostic code decision

Select `names_draft_expression_id_duplicate`.

The prefix distinguishes the authority-qualified Names Draft support layer
from Core and from any future Stable Names implementation. `expression_id`
identifies the violated Names-owned identity field, and `duplicate` follows
existing identifier-duplicate naming. The code must be documented as a stable
public code when integration is accepted; it must never later be reused for a
different condition.

## Severity decision

Select `error`.

Draft 0.1.0 requires recognized P1 IDs to be unique throughout the Dataset and
states that a duplicate makes the Dataset structurally non-conforming to the
Draft. This is a recognized-rule violation, not an allowed support limitation.
It therefore follows the existing error policy and makes the combined
validation result invalid when exact Names Draft 0.1.0 support is active.

## Aggregation decision

Select one diagnostic per occurrence. Two occurrences produce two diagnostics;
three occurrences produce three. Multiple duplicated IDs produce one
diagnostic for every occurrence of each duplicated ID.

This is the smallest policy that preserves every location using the current
public shape. One diagnostic per duplicate ID would lose the other paths.
Reporting only occurrences after the first would preserve the locations of
later conflicts but would omit the original participant. Per-occurrence output
adds bounded repetition but avoids a new public field and lets tools highlight
every participant uniformly.

Diagnostics are emitted deterministically in detector scan order:

1. `entities`, then `events`, then `relations`;
2. Core Object array order within each collection; and
3. expression array order within each object.

This order is an implementation convention only. It assigns no semantic
priority, rank, preference, ownership precedence, or repair preference.

## Primary-path decision

Each diagnostic path is that occurrence's expression-ID path:

```text
/entities/0/extensions/draft.github.sukoyaka-dopeness.names/expressions/1/id
/events/0/extensions/draft.github.sukoyaka-dopeness.names/expressions/0/id
/relations/0/extensions/draft.github.sukoyaka-dopeness.names/expressions/0/id
```

There is no single privileged primary occurrence. In each diagnostic, `path`
means “this recognized P1 ID occurrence participates in a Dataset-wide
duplicate.” This follows the smallest-useful-invalid-value convention and is
deterministic without treating the first occurrence as canonical.

## Related-occurrence decision

Represent the complete conflict through repeated per-occurrence diagnostics,
not through `relatedIds` and not through a new property. Consumers can group
diagnostics by code and the string value found at each diagnostic path.

The duplicated P1 ID must not be placed in `relatedIds`, because that field is
contractually for Core Object IDs. Owning Core Object IDs are location context,
not uniqueness participants, and are already recoverable from valid Core data
through each path. They should therefore also be omitted from these diagnostics.
This avoids implying that Core IDs share the Names namespace or that an owner
is itself in conflict.

No related-path prerequisite is needed for this selected aggregation policy.
If a future policy changes to one diagnostic per duplicated ID, a general
related-path representation would first require a separate bounded public
diagnostic-contract decision.

## Locally-invalid recognized candidate policy

Independent violated invariants remain independently observable. Duplicate
diagnostics are emitted for all recognized candidates even when one or more of
them also fail local Names structure.

Consequently, two recognized empty-string IDs produce both the applicable
local empty-ID diagnostics and the Dataset-wide duplicate diagnostics. A
recognized `N1` with `language: 123`, invalid `script`, or empty string `value`
still participates in duplicate diagnostics alongside another recognized
`N1`. Local failure must not suppress or short-circuit Dataset-wide collection.

This memo does not select local-schema diagnostic codes. Local diagnostics and
duplicate diagnostics may be generated in a deterministic implementation
order, but that order conveys no causal or semantic priority. The integration
tests must prove coexistence rather than rely on incidental ordering between
the two classes.

## Unsupported and supported Draft boundary

When the Validator does not explicitly support Names Draft 0.1.0, it follows
the existing unknown or unsupported Extension policy and does not run the
duplicate detector as public Names interpretation. Merely finding the textual
Draft key does not authorize applying a locally unclaimed version contract.

The duplicate diagnostic becomes active only when the Validator:

- registers exact identifier `draft.github.sukoyaka-dopeness.names` as locally
  supported at exact version `0.1.0` with no implied support for other versions;
- recognizes a valid Specification Extension draft `0.1.0` declaration for
  that exact identifier and exact version; and
- has the Names local structural and Dataset-wide diagnostic integration
  required by the public-contract threshold below.

An unsupported declaration continues to use the existing support warning and
must not be interpreted using 0.1.0 rules. An unavailable or unknown identity
continues to use the existing unavailable/unknown policy.

## Specification-version applicability

Names Draft 0.1.0 has no in-payload version field, and this memo does not add
one. Exact version selection therefore uses the existing Specification
Extension architecture. The duplicate diagnostic applies only under a valid
supported declaration of:

```json
{
  "extension": "draft.github.sukoyaka-dopeness.names",
  "version": "0.1.0"
}
```

The current Validator also has a “known Extension, version unspecified” state
for payloads without a usable declaration. Applying Names 0.1.0 rules in that
state would silently assume a version because Names has no independent
bootstrap field. Before integration, a bounded prerequisite must confirm and
test that undeclared Names payloads receive the existing
`extension_version_unspecified` support warning but no 0.1.0 local or duplicate
diagnostics. This is a version-activation clarification within the existing
architecture, not a request for a new architecture.

## Public-contract threshold

`names_draft_expression_id_duplicate` may enter the stable public
`validateDataset()` diagnostic API only when all of the following land in one
bounded integration:

- exact Names Draft identifier/version local-support registration;
- the exact declaration-based activation rule, including regression tests for
  supported, unspecified, unsupported, and unrelated identities/versions;
- accepted local Names structural diagnostic mapping, so public support does
  not expose only half of Draft conformance;
- the selected error severity and exact stable code;
- one diagnostic per occurrence at each expression-ID path;
- deterministic scan and diagnostic ordering tests;
- coexistence tests for duplicate and independently local-invalid candidates;
- regression tests for equal values, opaque members, namespace separation,
  Dataset-level non-placement, and input immutability;
- public diagnostic and validation-scope documentation; and
- CLI/library regression coverage showing identical diagnostic semantics.

Implementing this authority-qualified Draft support does not register Stable
`names` or promise compatibility with a future Stable representation.

## Repair prohibition

Validation remains read-only. No diagnostic or integration may auto-merge,
rewrite or allocate IDs, delete an occurrence, normalize data, reorder arrays,
retarget references, or infer equivalence. No automatic fix or safe repair
suggestion is defined. Repair requires a separate future design and authority.

## Equal-value and opaque-member non-diagnostics

Distinct recognized IDs with equal values do not produce this diagnostic:

```json
[
  { "id": "N1", "value": "Tokyo" },
  { "id": "N2", "value": "Tokyo" }
]
```

No warning is emitted merely because values match. Language, script,
transliteration, naming kind, Core Object, and array position do not establish
identity or equivalence.

An opaque member such as `{ "id": "N1", "opaqueFutureData": true }` lacks a
string `value` and does not participate in P1 uniqueness. A recognized `N1`
plus that opaque textual ID therefore produces no duplicate-ID diagnostic.
This exclusion does not make the opaque member conforming to Draft 0.1.0.

## Decision table

| Decision | Options | Existing-convention fit | Semantic risk | Interoperability impact | Recommendation |
| --- | --- | --- | --- | --- | --- |
| Diagnostic code | `names_draft_expression_id_duplicate`; generic code; defer | Draft-specific prefix and duplicate suffix fit existing codes | Generic naming could conflate Draft and Stable rules | Exact code is machine-readable and version-layer explicit | Select `names_draft_expression_id_duplicate` |
| Severity | error; warning; defer | Recognized structural violations are errors | Warning would treat non-conformance as allowed | Error gives consistent validity semantics | Select error |
| Aggregation unit | per duplicate ID; per occurrence; later conflicts only | Per occurrence fits current single-path shape | Per-ID loses paths; later-only hides the original | Every participant remains addressable | Select one diagnostic per occurrence |
| Primary path | canonical first; later conflict; every occurrence | Every occurrence follows smallest-useful-value paths | A canonical first path could imply priority | Deterministic complete location coverage | Use each occurrence's `/id` path |
| Related occurrences | `relatedIds`; new related paths; repeated diagnostics | Repeated diagnostics need no contract change | `relatedIds` would confuse P1 and Core IDs | Existing consumers can process stable fields | Use repeated diagnostics; omit `relatedIds` |
| Locally-invalid recognized candidates | coexist; suppress duplicate | Coexistence matches independent invariant reporting | Suppression changes accepted recognition | Malformed records cannot evade uniqueness | Emit both applicable diagnostic classes |
| Unsupported Draft behavior | interpret anyway; support warning only | Warning/no interpretation matches existing support separation | Interpretation could apply the wrong version | Unknown/future data remains forward-compatible | Do not run Names rules unless exact support is active |
| Version applicability | exact declaration; assume 0.1.0; all Names versions | Exact declaration uses existing version architecture | Assumption leaks rules into future versions | Prevents accidental Stable/future interpretation | Exact `0.1.0` declaration only |
| Public-contract threshold | detector alone; partial integration; complete bounded support | Complete support matches stable-code discipline | Partial support creates misleading conformance claims | Consumers receive deterministic documented behavior | Require registration, local mapping, integration tests, and docs |

## Required decision verdicts

### A. Diagnostic code

Select `names_draft_expression_id_duplicate`.

### B. Severity

Select `error`.

### C. Aggregation

Select one diagnostic per occurrence of every duplicated recognized ID.

### D. Primary-path policy

Select each occurrence's JSON Pointer-compatible expression `id` path, emitted
in Dataset scan order without semantic priority.

### E. Related-occurrence representation

Select repeated per-occurrence diagnostics using the existing shape. Omit
`relatedIds`; do not add a Names-specific public property.

### F. Local-failure coexistence

Select coexistence. Duplicate diagnostics remain emitted for recognized
candidates that independently fail local schema rules, including empty IDs,
empty values, and invalid optional metadata types.

### G. Draft-support and public-contract condition

Activate only after exact identifier/version registration and a valid exact
Names Draft 0.1.0 Specification declaration, together with the complete
public-contract threshold above. Unspecified or unsupported versions are not
interpreted using 0.1.0 rules.

### H. Overall integration readiness

`ready with bounded prerequisite`

The prerequisite is to accept and test the exact declaration-based activation
rule for an object-local Extension without an in-payload version, including
the version-unspecified behavior. Local Names structural diagnostic mapping
must then be included in the bounded support integration rather than silently
invented during duplicate integration.

## Exact next bounded task

Review and accept the declaration-based Names Draft 0.1.0 activation rule and
the local structural diagnostic mapping needed for complete public support.
After acceptance, prepare one bounded `validateDataset()` integration task that
registers exact Draft support, maps local and duplicate facts to the accepted
public diagnostics, adds deterministic regression tests and documentation,
and makes no repair or application changes.

## Remaining deferred semantics

Human-facing messages, localization, repair, migration, writer behavior,
Stable Names registration, future Names versions, Target Reference, Grouping,
lifecycle behavior, equivalence, ranking, preferred display, and P2/P3 remain
outside this decision.

## Verification-state note

Detector focused tests and relevant existing validation passed; full
`npm run validate` has one pre-existing unrelated fixture-discovery failure.
That failure concerns conceptual fixtures under the sibling specification
repository and is not evidence against the accepted detector or this policy.
The full suite is not reported as green.

## Grouping Selection Reopen Criteria

This diagnostic policy supplies no new persistent Name-to-Object binding-target
evidence and does not reopen Grouping selection. Grouping remains
`defer selection`; P2/P3 remain closed; Grouping Selection Reopen Criteria
evidence remains `no`.

## UTF-8 and repository safety

This memo must remain UTF-8 without U+FFFD or suspicious mojibake and without
trailing whitespace. Existing uncommitted detector work is preserved. No
reset, checkout, commit, broad formatting, or unrelated modification is
authorized or performed.
