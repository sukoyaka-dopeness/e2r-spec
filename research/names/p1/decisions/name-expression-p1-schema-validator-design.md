# Names Draft 0.1.0 Schema / Validator Design Note

Status: non-normative research note
Draft under review: `draft.github.sukoyaka-dopeness.names` version `0.1.0`

## Verdict

`ready for bounded schema implementation`

This note authorizes no implementation. It maps the accepted Draft contract to
future responsibilities. P1 can proceed independently of Grouping. Stable
`names`, a production writer, migration, and a final Target Reference remain
outside this work.

## Responsibility classes

- **Schema-local structural rule:** decidable from one Names payload or one
  expression member.
- **Dataset-level semantic/structural rule:** requires scanning Names payloads
  on all Core Objects in one Dataset.
- **Preservation/interoperability rule:** concerns what a partially aware
  consumer retains during processing; static validation cannot establish it.
- **Deferred diagnostic policy:** a condition may be detectable, while severity,
  code, reporting, and repair remain unspecified.

## Recognition and conformance

A member is a recognized P1 candidate when it is an object with string `id` and
string `value`. This includes empty strings for recognition purposes. Empty
`id` or empty `value` then makes the candidate non-conforming to Draft 0.1.0;
the candidate still participates in the conceptual recognized-candidate ID
collection, so malformed records cannot evade duplicate detection. The final
schema may reject the member locally, while the Dataset validator retains its
candidate identity for cross-object checks.

An object such as `{ "id": "N1", "opaqueFutureData": true }` has no string
`value`; it is unrecognized, has no P1 identity, and does not participate in
recognized-ID uniqueness.

For example, `{ "id": "N1", "value": "Tokyo", "language": 123 }` is a
recognized candidate but is non-conforming because a present `language` is not
a string. Its `N1` still participates in uniqueness checking.

## Schema-local mapping

The future Extension schema can check the following without Dataset context:

| Logical path | Recognition consequence | Conformance consequence | JSON Schema | Custom validator |
| --- | --- | --- | --- | --- |
| payload | object candidate | non-object is non-conforming | yes | no |
| `expressions` | — | required array | yes | no |
| `expressions[*]` | object with string `id` and `value` is recognized | unrecognized member makes the payload structurally non-conforming | yes, as a conformance schema | no for the local fact |
| `expressions[*].id` | string participates in candidate recognition | MUST be non-empty; `null` is invalid | yes (`minLength: 1`, non-final) | no |
| `expressions[*].value` | string participates in candidate recognition | MUST be non-empty; `null` is invalid | yes (`minLength: 1`, non-final) | no |
| `language`, if present | does not affect recognition | MUST be a string; `null` invalid | yes | no |
| `script`, if present | does not affect recognition | MUST be a string; `null` invalid | yes | no |

Unknown properties at payload and recognized-record level remain allowed. A
schema must not use `additionalProperties: false` in a way that defeats the
Draft's forward-preservation boundary. Defined fields do not acquire nullable
alternatives merely because unknown fields may contain opaque `null` values.

The schema does not define trimming, whitespace canonicalization, Unicode
normalization, registry spelling, ordering, or an in-payload version.

## Dataset-wide validator responsibilities

After Core Dataset parsing/validation, and regardless of whether a recognized
candidate also fails a local Names conformance rule, a Names-aware validator
scans the Draft Extension on every Entity, Event, and Relation. It collects all
recognized candidates into conceptual state such as
`Map<P1Id, occurrences[]>` and checks uniqueness across:

- members on one Core Object;
- different Entities;
- Entity/Event, Entity/Relation, and Event/Relation combinations; and
- every other cross-object combination in the Dataset.

The scope is the Names responsibility only: Core Object IDs and IDs owned by
other Extensions are not compared. An unrecognized opaque member is not
included. Duplicate recognized IDs are machine-detectable structural
non-conformance. Detection is required; severity, error vocabulary, reporting,
and repair are deferred. Automatic merge, ID allocation, ID rewrite, dropping
one duplicate, and equal-value equivalence are forbidden.

Equal values with distinct IDs are valid. Array order is non-semantic and must
not be interpreted as preference, ranking, identity, transliteration, or
Grouping.

## Preservation and application boundaries

Unknown payload properties, unknown record properties, and unrecognized array
members SHOULD be preserved whenever practical. Opaque `null` and array order
may be retained without acquiring Names semantics. Preservation cannot be
proven by JSON Schema or by a one-shot validator; it requires round-trip or
application integration evidence.

The validator must not infer replacement from changed, equal, or similar text,
allocate IDs, retarget old references, or merge identities. Pre-classified
continuity/replacement is application data, not static schema semantics.

Core `name` is outside Names conformance. No Core name must have a P1
expression, no P1 expression must be projected into Core `name`, and no
automatic synchronization or mismatch diagnostic is defined by this Draft.

BCP 47 validity, ISO 15924 validity, canonical spelling, normalization,
preferred display, ranking, search, lifecycle vocabulary, and migration are
future specification or application questions, not current schema failures.

## Responsibility table

| Rule | JSON Schema/local | Dataset validator | Preservation/application | Deferred policy |
| --- | --- | --- | --- | --- |
| payload object; required `expressions` array | check | — | — | diagnostics |
| `id`/`value` types and non-empty rules | check | retain recognition state | — | diagnostics |
| language/script present values are strings | check | — | — | registry validation |
| Dataset-wide recognized-ID uniqueness | — | collect and detect | — | severity/code/repair |
| unrecognized member | local conformance fact | report as applicable | preserve SHOULD | severity |
| unknown fields / opaque null | — | — | preserve SHOULD | application limits |
| equal values | allow | no duplicate-by-value rule | — | — |
| array order | no semantic rule | no semantic rule | preserve SHOULD | — |
| Core-name mismatch | — | outside Draft | application policy only | future contract |
| old-reference retargeting | — | validator must not do it | application boundary | future lifecycle design |
| unsupported Draft Extension | identify support boundary | separate diagnostic path | unknown-extension preservation | policy |

## Diagnostic ownership

The Draft owns structural facts: missing or wrongly typed payload/fields,
empty `id`/`value`, invalid present language/script types, and unrecognized
members. The Dataset validator owns duplicate-ID detection. Validator
diagnostic policy owns severity, codes, aggregation, and presentation.
Application policy owns preservation, Core-name compatibility, and any
writer behavior. Future migration design owns repair or transformation. Equal
values and permitted unknown fields are not conformance errors merely because
values repeat or fields are unknown. An unrecognized `expressions` member
remains Draft 0.1.0 structural non-conformance even though processors SHOULD
preserve it whenever practical.

## Future architecture and bounded next task

One Extension schema associated with the authority-qualified Draft identifier
and version is conceptually sufficient for local structure. Dataset-wide
uniqueness necessarily remains outside JSON Schema. The Draft contract is
ready for bounded schema implementation. The repository has not established a
final schema-location convention for authority-qualified Draft Extensions;
before creating the schema file, a bounded implementation task must identify
the existing convention or explicitly select a location. This is the only
implementation prerequisite, not a semantic blocker.

The minimum later implementation sequence is:

1. add the single Draft Names schema at the repository's established schema
   location (or first make that location an explicit bounded decision);
2. add focused local-schema tests for the constraints above;
3. separately add Dataset-wide candidate collection and duplicate-ID tests
   across Entity/Event/Relation;
4. keep diagnostic severity, repair, writer, migration, and application
   preservation tests out of both bounded steps unless separately authorized.

## Explicit non-goals and fixed boundaries

This note does not implement a schema, validator, diagnostic codes, severity,
repair, normalization, migration, writer, Stable `names`, Target Reference,
Grouping, P2/P3, preferred display, ranking, search, transliteration,
naming-kind, temporal, or lifecycle vocabulary.

Stable `names` remains deferred. Production Names writer remains unauthorized.
Migration implementation remains deferred. Final Target Reference remains
unresolved and non-blocking. Grouping remains `defer selection`; P2/P3 remain
closed; Grouping Selection Reopen Criteria evidence remains `no`.
