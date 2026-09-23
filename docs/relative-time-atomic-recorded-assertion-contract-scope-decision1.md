# Relative Time Atomic Recorded Assertion Contract Scope Decision 1

Date: 2026-09-24

Status: **HUMAN-SELECTED CONTRACT SCOPE — NON-NORMATIVE / NO RELATION SEMANTICS ADOPTED**

## Purpose and authority boundary

This document records the Human's scope decision for the first portable
semantic contract of the extensible Relative Time vocabulary. The first
contract is limited to the atomic meaning of one user-recorded Relative Time
assertion: what that assertion claims.

This is a bounded scope decision, not the contract wording itself and not a
normative adoption. It does not choose or revise the detailed meaning of any
listed relation, promote Relative Time to Stable, or authorize schema,
version, Validator, solver, runtime, or application changes. A later bounded
semantic wording proposal may be prepared for Human review within this scope;
that proposal would still require a separate Human adoption disposition.

This decision follows the committed [Human-selected extensible vocabulary direction](relative-time-extensible-temporal-assertion-direction1.md)
and [Semantic Contract Research 1](relative-time-extensible-semantic-contract-research1.md).
It scopes their next work; it does not replace their selected directions or
resolve their open semantic questions.

## Human-selected scope

The first portable semantic contract is to define only what each individual,
explicitly user-recorded Relative Time assertion claims. Its vocabulary scope
for that atomic-meaning work is:

- `before`
- `after`
- `within`
- `contains`
- `overlap`
- `touching`
- `same-temporal-extent`
- the existing draft candidate `same-instant`

This list defines the scope of the future contract work, not adoption of
these terms' detailed semantics. Their wording must remain consistent with
already Human-selected directions, while unresolved meanings remain open for
later Human review.

`calendar-granule-relation` and `elapsed-offset` remain distinct quantitative
assertion families, not synonyms for qualitative precedence or interval
topology. The first atomic contract may state that responsibility boundary;
it does not need to define quantitative arithmetic, conversion, or entailment.

## Cross-cutting boundaries retained

The first contract must preserve the following previously selected
responsibilities and storage/assertion boundaries:

- Core Relation endpoint direction is structural and carries no temporal
  meaning by itself. Relative Time retains `sourceId` as the reference/base
  Object and `targetId` as the Object described relative to it; the vocabulary
  value describes the target relative to the source.
- One Relation carries one Recorded temporal assertion. Multiple independent
  assertions about the same Object pair may coexist on separate Relations.
  No automatically stored mirror Relation, automatic merge, exclusive
  classification, or winner selection is required.
- A user may record a known temporal relationship without explicit History
  evidence. History does not automatically generate, overwrite, or refine a
  Recorded Relative Time assertion. Unknown relationships need not be
  recorded.
- Recorded assertions and Derived/inferred conclusions are distinct. This
  first contract concerns the former only; it does not authorize automatic
  write-back of Derived results.
- The Human-selected qualitative `before` / `after` direction remains
  bounded: it is not reinterpreted as `end(A) < start(B)` and does not by
  itself imply a start, end, duration, whole extent, boundary/contact, or
  additional precision.
- The selected vocabulary relationships (including `before`/`after`,
  `within`/`contains`, and the symmetric directions for `overlap`,
  `touching`, and `same-temporal-extent`) remain directions for future
  wording, not adopted normative laws or requirements for mirror storage.

These boundaries are inherited from the existing Human-selected direction;
this scope decision neither broadens nor narrows them.

## Explicitly deferred from the first contract

The first atomic-meaning contract excludes the following independent scopes:

1. **Machine evaluation:** endpoint inclusion, open/closed boundaries,
   boundary occurrence, point-at-boundary classification, History-shape
   applicability matrices, and rules for deciding whether an assertion is
   true from History data.
2. **Cross-assertion consistency:** contradiction/compatibility policy,
   diagnostics and severity, duplicate policy, and winner selection.
3. **Derived semantics:** transitivity or other order laws, entailment across
   relation families, solver/closure/propagation, and Derived provenance or
   write-back. The Draft/Cross-Audit difference over strict `before`
   transitivity remains separate and unresolved.
4. **Representation and storage:** schema shapes, Feature names, payload
   variants, version numbers, migration, and preservation implementation.
5. **Application behavior:** Validator behavior, UI, Timeline/Gantt
   projection, scheduling behavior, and application implementation.

In particular, scope inclusion of `overlap`, `touching`, or
`same-temporal-extent` does not choose a machine-evaluable boundary convention.
The first contract must not derive these assertions from coarse History or
silently assign precise endpoint semantics. Likewise, inclusion of
`same-instant` in the vocabulary scope does not resolve its symmetry,
transitivity, interaction with precedence, or normative status.

This decision does not reinterpret qualitative `before` as a precise
scheduling constraint, adopt any Cross-Audit candidate derivation, or reopen
History 2 authoring. `H2-POSITION-CIRCA` remains accepted/closed within its
existing scope; `bounded-point`, `temporal-extent`, and multiple-assertion
authoring remain deferred. Causal order and Temporal Perspectives remain
separate workstreams.

## Relationship to existing evidence

- The [Relative Time Draft 0.1.0](../extensions/relative-time-extension-draft.md)
  is a non-Stable candidate with `relative-position`, `containment`,
  `calendar-granule-relation`, and `elapsed-offset` families. It does not yet
  define all vocabulary in this selected scope.
- The [Human-selected extensible vocabulary direction](relative-time-extensible-temporal-assertion-direction1.md)
  selects the broader vocabulary direction and cross-cutting boundaries, but
  explicitly leaves detailed portable semantics, applicability, and
  evaluation unadopted.
- [Semantic Contract Research 1](relative-time-extensible-semantic-contract-research1.md)
  maps the remaining questions and evidence tensions. This decision narrows
  the first contract to atomic Recorded assertion meaning; it does not resolve
  the Research's separately identified evaluation, Derived, conflict, or
  representation questions.
- The existing [bounded `before` / `after` wording proposal](relative-time-bounded-contract-proposal1.md)
  remains non-normative and not adopted. The broader first-contract scope
  means its adoption is not the first contract checkpoint; its selected
  qualitative direction remains in force and may be represented in the later
  atomic contract wording.

No conflict requiring a new decision was found for recording this scope
choice. Individual relation semantics and machine-evaluation rules remain
future Human decision points, not blockers to documenting the chosen scope.

## Disposition

The Human selected **atomic Recorded assertion semantics only** for the first
portable semantic contract. Machine evaluation, Derived consequences, and
storage/schema are separate later checkpoints. No individual relation's final
wording is adopted here. No normative adoption, Stable promotion, schema or
version change, Validator/runtime/application implementation, staging,
commit, push, or deploy is authorized by this document.
