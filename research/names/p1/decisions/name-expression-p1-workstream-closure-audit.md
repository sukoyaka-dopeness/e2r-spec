# Names P1 Workstream Closure Audit

Date: 2026-08-14

Status: closure audit; non-normative

## Purpose and audit boundary

This audit closes the bounded P1 Name-expression workstream. It records what
is complete, what is evidence-only, and what remains intentionally deferred.
It does not begin a new Names design, select Grouping, resolve Target
Reference, register Stable `names`, authorize a writer, or perform release or
versioning work.

The audit treats the following as the fixed semantic boundary:

- a recognized candidate is a non-array object with string `id` and string
  `value`;
- empty `id`, empty `value`, and invalid present `language` or `script` remain
  recognized candidates but fail local structural conformance;
- missing or non-string `id` or `value` makes a member unrecognized;
- local conformance and Dataset-wide recognition are separate observations.

## Sources reviewed

The audit cross-checks the canonical Draft and schema, the accepted research
decisions, the Validator implementation and documentation, and the accepted
application evidence. The principal records are:

- `extensions/names-extension.md`;
- `schemas/extensions/names-draft.schema.json`;
- `research/names/p1/decisions/name-expression-p1-schema-validator-design.md`;
- `research/names/p1/decisions/name-expression-p1-duplicate-diagnostic-policy-decision.md`;
- `research/names/p1/decisions/name-expression-p1-activation-local-diagnostic-decision.md`;
- `research/names/p1/evidence/name-expression-p1-evidence-status.md`;
- `research/names/p1/evidence/name-expression-p1-linkscape-roundtrip-evidence.md`;
- `research/names/p1/evidence/name-expression-p1-narrativeline-exact-discovery-evidence.md`;
- `research/names/p1/evidence/name-expression-p1-narrativeline-opaque-roundtrip-evidence.md`;
- `research/names/p1/evidence/name-expression-p1-narrativeline-lifecycle-evidence.md`;
- `research/names/grouping/current/name-grouping-representation-selection-readiness-handoff.md`; and
- `research/names/grouping/deferred/name-grouping-selection-reopen-criteria.md`.

The Validator implementation was inspected read-only at its Names support
registration, local validator, accepted detector, Extension orchestration,
tests, and public diagnostic documentation. NarrativeLine and Linkscape were
not modified.

## P1 representation and conformance audit

### Local schema

The accepted local schema is
`schemas/extensions/names-draft.schema.json`.

- dialect: JSON Schema Draft 2020-12;
- payload: object with required array `expressions`;
- conforming P1 record fields: required non-empty string `id` and `value`;
- optional `language` and `script`: string when present;
- defined fields are not nullable;
- unknown payload and record properties are allowed;
- opaque unknown `null` is allowed;
- whitespace-only non-empty values are allowed;
- equal values with distinct IDs are allowed; and
- array order is non-semantic.

The schema does not implement Dataset-wide recognized-ID uniqueness. That rule
is owned by the separate Validator detector.

### Recognition and conformance

The same boundary is present in the design note, schema, and Validator:

| Input member | Recognized candidate | Local conformance |
| --- | --- | --- |
| object with string `id` and string `value` | yes | depends on non-empty fields and optional metadata types |
| empty string `id` | yes | fails `id` non-empty rule |
| empty string `value` | yes | fails `value` non-empty rule |
| string `id`/`value`, invalid `language` or `script` | yes | fails optional-field type rule |
| missing or non-string `id` | no | unrecognized-member/local field violation |
| missing or non-string `value` | no | unrecognized-member/local field violation |
| textual `id` without string `value` | no | opaque/unrecognized; preservation is a separate interoperability concern |

This distinction is deliberate. Local validation reports the structural fact,
while the Dataset-wide detector observes every recognized candidate from the
raw Dataset and does not discard candidates because local validation failed.

### Dataset-wide uniqueness

The accepted detector scans only object-local Names payloads on every Entity,
Event, and Relation. It excludes Dataset-level Names payloads, Core Object IDs,
Relation endpoints, Dataset IDs, IDs owned by other Extensions, and opaque
unrecognized members.

The public integration emits `names_draft_expression_id_duplicate` with
severity `error` once for every occurrence of each duplicated recognized ID.
Each path addresses that occurrence's `/id`; `relatedIds` is not used. Public
ordering is:

1. existing Specification/support diagnostics;
2. Names local diagnostics; and
3. Names duplicate diagnostics in global Dataset occurrence order:
   Entity, Event, Relation, object-array index, expression-array index.

The order is deterministic API behavior, not identity priority, canonicality,
ranking, or repair priority. Equal values under distinct IDs do not produce a
diagnostic or imply equivalence.

### Exact Draft activation

Names `0.1.0` local and Dataset-wide rules are active only when all of these
hold:

- the Validator locally supports exact identifier
  `draft.github.sukoyaka-dopeness.names`;
- it locally supports exact version `0.1.0`; and
- a valid usable Specification Extension declaration selects that exact
  identifier and version.

Payload presence alone does not activate Names rules. A payload without a
usable declaration receives the existing `extension_version_unspecified`
behavior and no Names `0.1.0` local or duplicate diagnostics. An unsupported
declared version receives the existing unsupported-version behavior and is not
validated using `0.1.0` rules. Malformed Specification declarations follow
existing Specification diagnostics and do not create a Names fallback.

### Public local diagnostics

The accepted public local codes are:

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
names_draft_expression_id_duplicate
```

All Names conformance and duplicate diagnostics are errors only under active
exact support. Missing properties point to where they belong; present invalid
fields point to their field; non-object members point to the member. No
additional generic unrecognized-member diagnostic is emitted when a specific
field/member fact explains the violation.

## Mandatory completion matrix

| Area | Status | Basis | What is actually complete | What is not implied |
| --- | --- | --- | --- | --- |
| P1 semantic responsibility | complete for bounded P1 | Draft and ownership decisions | independently addressable expression identity/value boundary | Names as a whole is not complete |
| P1 representation | complete for accepted Draft boundary | canonical Draft + schema | object-local `expressions` records and recognized-ID scope | final future Stable representation |
| Draft identifier/version | accepted Draft candidate | `draft.github.sukoyaka-dopeness.names` / `0.1.0` | exact authority-qualified support identity | Stable unqualified `names` |
| local schema | implemented/accepted | Draft 2020-12 schema and focused validation | payload/record structural boundary | Dataset-wide uniqueness |
| Dataset-wide uniqueness | implemented/accepted | detector and Validator integration | recognized IDs unique across Entity/Event/Relation | repair or migration |
| public Validator support | implemented/accepted | exact activation, local codes, duplicate policy, tests/docs | public read-only diagnostics under exact declaration | Stable package API for detector internals |
| Linkscape preservation | evidence only | accepted opaque round-trip evidence | one Names-unaware consumer preserves opaque subtree through Core edit/save/reload/save | global E2R preservation guarantee or Names-aware behavior |
| NarrativeLine discovery | evidence only | accepted exact-discovery evidence | exact explicit value-to-Entity discovery through production import boundary | general search, fuzzy matching, ranking, or writer behavior |
| NarrativeLine preservation | evidence only | accepted import/edit/export/reload evidence | opaque P1-shaped subtree preservation through production path | production Names writer or semantic editing |
| lifecycle observation | evidence only | accepted bounded adapter evidence | pre-classified continuity, supplied replacement, no old-reference retargeting | general lifecycle model, classifier, vocabulary, or service |
| production Names editing/writer | not implemented; unauthorized | fixed boundary | none | writer API, UI editing, allocation, repair |
| Core `name` integration | bounded separation complete | Draft/Core boundary | separate label; no projection or synchronization requirement | fallback policy or mismatch severity |
| language/script registry validation | deferred | Draft contract | string-only structural fields | BCP 47 or ISO 15924 validation |
| naming-kind semantics | deferred | Draft non-goal | no `kind` field or vocabulary | pen-name, childhood-name, dictionary semantics |
| temporal applicability | deferred | Draft non-goal | no temporal fields or behavior | History targeting or applicability model |
| Target Reference | unresolved; non-blocking | fixed research boundary | no final mechanism selected | final target representation |
| Grouping | defer selection | current handoff and reopen criteria | P1 may coexist with future optional explicit grouping | representation, Group identity, cardinality |
| P2/P3 | closed | explicit reopen criterion | no P2/P3 work reopened | future behavior without concrete criterion evidence |
| Stable `names` | deferred | Draft maturity boundary | authority-qualified Draft only | Stable registration or alias policy |
| migration | deferred | explicit non-goal | no migration implementation | old/new identity transformation |
| repair | forbidden; unimplemented | Validator read-only policy | diagnostics only | merge, rewrite, allocation, delete, retarget, normalize |

## Evidence that must not be promoted to normative or production claims

The following evidence is accepted but remains research-only and non-normative.

### Linkscape opaque preservation

Demonstrated: a Names-unaware production data path preserved a test-only
opaque Names-shaped subtree, including IDs, values, language/script, unknown
fields, explicit null, array contents, and order through an unrelated Core edit,
reload, and two saves.

Not demonstrated: Names-aware interpretation, final Names payload or
Extension ID, writer behavior, lifecycle, search/ranking, equivalence,
Grouping, Target Reference, or global E2R preservation.

### NarrativeLine exact discovery

Demonstrated: exact string equality discovered explicit expression values for
one Entity through production import, Core validation, and the Dataset-model
boundary using a research-only adapter.

Not demonstrated: general Names search, fuzzy matching, normalization,
case-folding, transliteration, ranking, preferred display, lifecycle, writer,
or a final binding model.

### NarrativeLine opaque preservation

Demonstrated: a test-only opaque P1-shaped subtree survived production import,
an unrelated Core edit, export, reload, and second export, including metadata,
unknown data, explicit null, and array order.

Not demonstrated: a production Names writer, semantic Names editing, lifecycle
service, migration, ranking, or Stable Names support.

### NarrativeLine lifecycle adapter

Demonstrated: pre-classified non-substantive continuity retained `N1`, an
explicitly supplied substantive replacement used `N2`, and an old opaque
reference remained `N1` without automatic retargeting.

Not demonstrated: a general classification algorithm, lifecycle vocabulary,
retirement/deletion/restore/redirect/merge/split/cascade, migration, or
production lifecycle service. An opaque same-ID member was not assigned P1
identity and did not define duplicate semantics.

Research evidence is not normative specification text and does not convert a
research adapter into a production implementation.

## Deferred responsibility audit

The following are intentionally not part of P1 closure:

- search index, fuzzy search, normalization, case folding, transliteration,
  ranking, and preferred display;
- naming-kind vocabulary;
- temporal applicability;
- lifecycle vocabulary and classification;
- production Names writer and application editing;
- migration, repair, or automatic retargeting;
- final Target Reference;
- Grouping representation, Group identity, and cardinality;
- Stable `names` registration; and
- P2/P3 behavior.

P1 workstream closure means that the bounded P1 identity/representation and
Validator interoperability boundary is complete. It does not mean that Names
as a whole is complete.

## Closure questions

### Q1. Is P1 representation itself complete enough to close this workstream?

Yes, within the accepted Draft `0.1.0` boundary: schema, recognition/
conformance distinction, Dataset-wide uniqueness, public diagnostics, exact
activation, ordering, and read-only behavior are implemented and tested.

### Q2. Is Names as a whole complete?

No. Search, ranking, naming kinds, temporal applicability, lifecycle, writer,
migration, Target Reference, Grouping, Stable registration, and other
responsibilities remain deferred or unresolved.

### Q3. Does Grouping block P1 closure?

No. Grouping remains a separate deferred responsibility and does not block the
accepted P1 identity/representation boundary.

### Q4. Do P2/P3 need reopening?

No. No concrete persistent independently targetable Name-to-Object binding
evidence satisfying the explicit reopen criterion was found.

### Q5. Is Stable `names` registration decided?

No. Stable unqualified `names` remains deferred. Draft Validator support is not
Stable registration evidence.

### Q6. Is a production Names writer implemented?

No. No production writer is authorized or implemented.

### Q7. Is final Target Reference resolved?

No. It remains unresolved and non-blocking for this P1 closure.

### Q8. Can release/versioning now be considered as a separate next decision?

Yes. This audit does not perform release/versioning and does not imply that
publishing must occur. It records that the bounded P1 workstream has no
remaining blocking correction before a separate release/versioning decision.

## Overall verdict

**P1 workstream closed; ready for separate release/versioning decision**

This verdict does not say “Names complete.” It closes only the bounded P1
identity/representation and Validator interoperability workstream.

## Exact next task

Conduct a separate Validator release/versioning decision. Do not perform that
decision, publish a package, register Stable `names`, or change any deferred
Names responsibility as part of this audit.

## Current validation state

Focused detector・integration・Specification tests: 57/57 passed. Full
`npm run validate`: 89/90 passed; one pre-existing unrelated research
fixture-discovery failure.

The full suite is not green. The failure concerns existing conceptual fixture
discovery under the sibling specification repository and was not fixed by
this audit.

## Safety and non-promotion statements

This audit does not make research evidence normative.

This audit does not turn research adapters into production implementations.

This audit does not register Stable `names`.

This audit does not authorize a production Names writer.

This audit does not implement migration or repair.

This audit does not resolve Target Reference.

Grouping remains `defer selection` unless concrete reopen evidence is actually
found.

P2/P3 remain closed unless their explicit reopen criterion is actually met.

No release/versioning action was authorized or performed.

## Encoding and repository safety

This memo must decode as UTF-8, contain no U+FFFD or suspicious mojibake,
preserve actual Unicode where examples are used, and contain no trailing
whitespace. Only this audit memo is created by this task; all existing
uncommitted work is preserved. No reset, checkout, commit, broad formatting,
or unrelated fix was performed.
