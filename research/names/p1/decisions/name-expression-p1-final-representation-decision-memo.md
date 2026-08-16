# P1 Name Expression — Final-Representation Decision Memo

Date: 2026-08-14

Status: Non-normative research decision; P1 scope only

## Status and scope

This memo uses the accepted P1 identity, preservation, exact-discovery,
replacement, and Core `name` boundaries. It compares Payload and Extension
identity directions for P1 Name expressions only.

It does not define a normative schema, implement a writer, choose Grouping,
define a Target Reference model, reopen P2/P3, or design migration records.
The conceptual shapes below are comparison instruments, not final JSON
contracts.

## Current authoritative boundaries

A viable P1 representation must support:

- stable independent expression identity;
- expression value with optional language and script metadata;
- multiple expressions on one Entity, Event, or Relation;
- equal values without identity equivalence;
- exact discovery by explicit value without transliteration or normalization;
- pre-classified identity continuity and explicitly supplied replacement;
- old-reference non-retargeting;
- preservation of unknown fields and unknown array members; and
- no automatic preference, ranking, or Grouping inference.

Core `name` remains an optional short human-readable label, not P1 identity.
The accepted Linkscape and NarrativeLine round-trip evidence demonstrates
opaque preservation but does not select a final Payload or Extension ID.

## Decision questions

The decisions are separated into Payload direction, semantic Extension name,
and maturity/identifier. A convenient syntax or existing research fixture is
not selection evidence.

## Payload candidates

### Candidate A — Object-local P1 collection

Each named Core Object owns its P1 expressions under that object's
`extensions` object. Ownership is structural and implicit.

### Candidate B — Dataset-level flat P1 registry

A Dataset-level payload stores P1 records and each record identifies its owning
Core Object. An illustrative `objectId` is not a Target Reference decision.

### Candidate C — Hybrid or mirrored representation

One location is canonical and another stores links, projections, or a
materialized index.

## Payload comparison

| Candidate | Responsibility fit | Identity clarity | Ownership clarity | Opaque preservation | Discovery fit | Lifecycle fit | Accidental semantics | Migration risk | Assessment |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A: object-local | Directly expresses expressions of this Core Object | Clear per-object record identity | Structural and unambiguous for Entity/Event/Relation | Strong; unknown Object-level Extension survives | Exact discovery can scan objects; no registry required | Supports supplied replacement and old-reference non-retargeting | Low; no generic target or Group implied | Low to moderate | **Select** |
| B: Dataset registry | Expresses ownership through a separate owner field | Clear record identity, but owner binding is additional semantics | Requires owner identifier and possible type discrimination | Viable, but registry-aware rebuilders can drop unknown records | Central scan is convenient, not required by evidence | Adds owner/reference and synchronization questions | Medium; may imply generic Target Reference or registry lifecycle | Moderate | Do not select |
| C: hybrid/mirror | Can serve both ownership and indexing | Two locations risk conflicting identity | Canonical owner must be defined separately | Each reader must preserve both canonical and derived data | Potentially fast, but performance is hypothetical | Synchronization can rewrite or retarget data | High; duplicate source of truth and writer contract | High | Do not select |

Candidate A has the lowest demonstrated semantic and preservation risk. B does
not provide an interoperability capability that A lacks, and C introduces
duplicate authority without accepted performance evidence.

Candidate A applies uniformly to Entity, Event, and Relation instances. A
Relation's predicate or type meaning remains outside P1 and belongs to a
Semantic/Dictionary responsibility; naming the Relation instance is not
relation-type semantics.

## Expression record boundary

The selected direction is sufficient to recommend the following draft
boundary, without writing a normative schema:

- `id`: required string for a recognized P1 expression;
- `value`: required string for a recognized P1 expression;
- `language`: optional metadata;
- `script`: optional metadata;
- unknown fields: permitted and preserved;
- expression collection: zero, one, or many at the representation boundary;
- array order: preserved but semantically irrelevant; and
- explicit `null`: preserved as opaque data when encountered, without assigning
  P1 null meaning.

Recognized P1 expressions require stable identity within the Dataset. The draft
specification must make the Names-owned uniqueness scope explicit. What remains
to be decided is the exact resolution scope under Candidate A, not whether
independently addressable recognized P1 records may be ambiguous. The research
fixture with an opaque same-textual-ID member does not define duplicate-ID
semantics because that member is not a recognized P1 expression.

The representation must transform only recognized P1-like records when an
application understands them. Unknown array members must not be filtered out
merely because they lack a recognized shape.

## Ordering

Evidence shows that consumers preserve array order, but it does not show that
order means preference or ranking. The draft boundary should preserve order
without assigning Names semantics. Preference/ranking is not selected.

## Core `name` relationship

No extra linkage field is justified. Candidate A must maintain:

- Core `name` is not P1 identity;
- equal text does not establish identity equivalence;
- Core `name` is not automatically synchronized with P1;
- fallback display does not create, replace, redirect, or merge P1; and
- mismatch diagnostics are Names-aware/application concerns, not automatic
  Core validity errors.

## P1 / Grouping separation

Candidate A contains no Group ID, membership, rationale, equivalence set,
alias set, or transliteration set. P1 representation can be selected while
Grouping remains `defer selection`. No P1 evidence in this memo is evidence
for a Grouping representation.

## Extension semantic-name candidates

| Direction | Precision | Responsibility continuity | Risk | Assessment |
| --- | --- | --- | --- | --- |
| N1: `names` | Broad enough for P1 and future Names-scoped responsibilities | Allows later explicit separation of Grouping if evidence requires it | Must state clearly that P1-only scope is selected now | **Select semantic name `names`** |
| N2: `name-expression` | Precisely describes current P1 scope | May prematurely fragment a broader Names responsibility and create renaming pressure | Could imply a future second Extension for related Names facts | Do not select |

`names` is selected as the semantic responsibility term for this draft
direction, not as a Stable registration. It does not imply that Grouping,
preferred display, or lifecycle semantics are already included.

## Extension maturity / identifier candidates

| Option | Collision/maturity | Compatibility and migration | Assessment |
| --- | --- | --- | --- |
| I1: authority-qualified Draft `draft.github.sukoyaka-dopeness.names` | Collision-aware and appropriate for a developing candidate | Makes later Stable promotion explicit; responsibility continuity is documented | **Select for draft work** |
| I2: registered Stable `names` | Unqualified Stable names require explicit registry registration | Would create a stronger compatibility commitment than current evidence supports | Defer; not justified |
| I3: defer all identifier selection | Preserves flexibility | Blocks concrete interoperability and draft fixture comparison unnecessarily | Do not select |

The proposed Draft identifier is a payload key and Extension identifier under
the existing architecture. No second canonical URI, alias, or synchronized
short identifier is proposed. Stable registration remains deferred and is not
implied by this memo.

## Versioning

No in-payload version field is recommended at this stage. Extension identity
and specification version remain separate, and the existing Specification
Extension can declare an exact used version when a draft specification exists.
A payload version should be added only if concrete compatibility evidence
requires it; it must not be added for symmetry or embedded in the identifier.

## Validation ownership

Later specification work may define structural requirements for recognized
records: collection shape, object shape, string `id`, string `value`, optional
language/script types, and any recognized-ID scope chosen by that work.

The following remain separate and deferred: diagnostic severity, repair,
Core-name mismatch severity, migration diagnostics, and unsupported-Extension
diagnostics. A validator must not silently repair, merge, or retarget P1
identities.

## Migration boundary

Migration implementation is deferred. The selected object-local direction and
Draft identifier do not make future migration impossible. A later memo or
specification must keep Stable promotion explicit, avoid synchronized aliases,
and document ownership if the responsibility is split. No migration schema or
algorithm is designed here.

## Payload verdict

`select Candidate A — object-local P1 collection`

Candidate A directly expresses the accepted responsibility, works uniformly
for Entity/Event/Relation objects, preserves opaque data naturally, and does
not require a Target Reference system, writer synchronization, or Grouping
semantics. B and C add ownership or source-of-truth risks without materially
stronger evidence.

## Extension-name verdict

`select names`

`names` best preserves responsibility continuity while allowing P1-only scope
to be specified explicitly and leaving future Grouping separation open.
`name-expression` is more syntactically precise but risks premature
responsibility fragmentation.

## Extension-identifier verdict

`select authority-qualified Draft identifier`

Use `draft.github.sukoyaka-dopeness.names` for draft design work only. Stable
registration of `names` is deferred and is not justified by this memo.

## Overall P1 representation verdict

`select Candidate A with the authority-qualified Draft identity for dedicated
draft P1 specification design`

The evidence supports moving to a dedicated draft P1 specification design. It
does not authorize writing that specification, registering a Stable Extension,
implementing a writer, or selecting any Grouping behavior.

## Remaining deferred semantics

Recognized P1 ID uniqueness-scope details and duplicate/conflict handling,
validation severity, repair, migration implementation, lifecycle vocabulary, Target
Reference representation, preferred display, ranking, transliteration,
naming-kind semantics, temporal applicability, Grouping, Group identity,
cardinality, and P2/P3 remain deferred or closed as previously stated.

## Exact recommended next task

Prepare a focused draft P1 specification design using Candidate A and the
authority-qualified Draft identifier as the selected research direction. That
task must remain bounded to P1 expression records, ownership, preservation,
and structural conformance. It must not register Stable `names`, implement a
writer, define migration, or reopen Grouping/P2/P3.

## Grouping Selection Reopen Criteria

`no`. No new comparative Grouping evidence was discovered. Grouping remains
`defer selection`; P2/P3 remain closed.
