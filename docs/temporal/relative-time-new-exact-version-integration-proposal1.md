# Relative Time Same-Extension New-Exact-Version Integration Proposal 1

- Date: 2026-09-26
- Status: **PROPOSAL FOR HUMAN REVIEW; NOT AN AMENDMENT TO THE RELATIVE TIME DRAFT**
- Baseline: E2R-SPEC HEAD `e2c249b5a86d681e80472f5834ebda0a28745752`; read-only Validator evidence at `5d6d414fac002f8b8fb87e0f13a43664113dc39a`.
- Selected direction: preserve Relative Time `0.1.0`; evolve under the same Extension identifier with a new exact version. This follows the Human's selected direction and is not reopened here.

## Proposed disposition

Prepare the adopted atomic Recorded assertion contract as a new candidate
version of the existing Extension:

- Extension identifier remains
  `draft.github.sukoyaka-dopeness.relative-time`.
- Existing exact version `0.1.0`, its Draft, schema, and consumer meaning remain
  unchanged.
- Proposed next version for Human consideration: **`0.2.0`**. This is a
  proposal, not an assigned version. The Specification Extension defines the
  `MAJOR.MINOR.PATCH` syntax and exact-version identity but does not prescribe
  the bump policy that makes `0.2.0` preferable to another new exact version.
- The new version remains a **Draft/Candidate**, not a Stable Extension merely
  because it has a new version or adopts atomic semantics.
- The new candidate incorporates the already-adopted atomic Recorded meanings
  and limits. It does not revise those semantics or treat this proposal as
  their source of authority.

The exact-version immutability rule already exists in the [Specification
Extension](../../extensions/specification-extension.md): one exact version
identifies one immutable published definition, and a publisher must not
replace that definition's meaning. The Human-selected rule is consistent with
that authority. This proposal adds no duplicate general versioning rule. The
open question is only how that existing exact-version principle applies to
the proposed Relative Time candidate/version and its consumers.

## Proposed representation

The following reuses the current payload organization where it fits and adds
one candidate family for the adopted interval-topology assertions. It is a
concrete design proposal for review, not a schema or normative change.

| Candidate version `0.2.0` family / Feature | Proposed assertion values | Relationship to `0.1.0` |
|---|---|---|
| `relative-position` | `before`, `after`, `same-instant` | Retain the existing payload family. State the adopted atomic meanings and limits, including semantic symmetry for `same-instant` without requiring reverse Relation storage. |
| `containment` | `within`, `contains` | Retain the current family and add the adopted inverse value `contains`. State the adopted applicability for this contract: period-within-period and point-within-period; period-contains-period and period-contains-point. Do not infer History grounding or machine evaluation from that applicability statement. |
| `interval-topology` (new candidate Feature) | `overlap`, `touching`, `same-temporal-extent` | Add a separate assertion family for the adopted atomic claims. It does not define endpoint evaluation, open/closed boundaries, truth testing, or solver behavior. |
| `calendar-granule-relation` | Existing quantitative candidate payload | Preserve its `0.1.0` responsibility and meanings; do not equate it with qualitative assertions. Re-state its contract in the new exact-version definition if required for a complete version. |
| `elapsed-offset` | Existing quantitative candidate payload | Preserve its `0.1.0` responsibility and meanings; do not equate it with qualitative assertions. Re-state its contract in the new exact-version definition if required for a complete version. |

Under this proposal, the new exact version defines the Features
`relative-position`, `containment`, `interval-topology`,
`calendar-granule-relation`, and `elapsed-offset`. As required by the
Specification Extension, each Dataset declaration lists exactly the Features
it uses for that exact version; a Dataset using no value from a Feature does
not list it. The `interval-topology` grouping is proposed because these three
claims form the adopted qualitative interval-topology family, not because
they share an evaluation algorithm.

Illustrative `0.2.0` payloads (not accepted schema fixtures):

```json
{
  "type": "containment",
  "relation": "contains"
}
```

```json
{
  "type": "interval-topology",
  "relation": "touching"
}
```

The proposed contract retains one Recorded assertion per Core Relation,
`sourceId` as reference/base and `targetId` as the Object described relative
to it. Values describe the target relative to the source. Inverse/symmetric
meaning does not create mirror Relations. Existing exact-version Features are
not global identifiers: this new version defines its own complete Feature
contract.

### Schema boundary

The adopted semantic contract includes shape applicability for `within` and
`contains`, but it does not require selecting a machine evaluator. The
candidate schema should validate payload structure and allowed values; it
should not claim that a Relation is true from History data, infer a missing
Relation, or establish endpoint membership. Any Dataset-level shape or
History evaluation policy remains outside this atomic Recorded integration
unless separately authorized.

If adopted, the new exact version should have a separately identifiable
schema artifact, while the current `relative-time-draft.schema.json` continues
to describe `0.1.0`. An illustrative version-specific schema path could be
`schemas/extensions/relative-time-0.2.0.schema.json`; final filename and `$id`
remain part of the later implementation review, not fixed here.

## Compatibility and Dataset treatment

| Case | Proposed treatment |
|---|---|
| Existing Dataset declares Relative Time `0.1.0` | Keep its declaration and payload unchanged. Interpret/validate only under the exact `0.1.0` contract and locally supported implementation. Do not retrofit the adopted contract onto it by assumption. |
| Dataset uses a value absent from `0.1.0` | It is not made valid under `0.1.0` by the semantic adoption or by this proposal. `contains`, `overlap`, `touching`, and `same-temporal-extent` require the proposed new exact version before they can be represented as supported contract values. |
| Dataset declares the proposed new exact version | It claims that exact candidate contract and declares the Features it actually uses. A consumer without support for that exact version must not apply `0.1.0` rules as if they were exact support; it may preserve the unsupported data when practical. |
| Consumer supports both versions | It may validate each declaration against its own exact-version rules. Support for `0.2.0` does not change the meaning or conformance of `0.1.0`. |
| Consumer supports only `0.1.0` | It does not gain `0.2.0` support from the shared identifier. It must report/preserve an unsupported exact version according to its existing behavior, not silently fall back to `0.1.0`. |

The proposal includes **no automatic or required Dataset migration**. An
existing `0.1.0` Dataset can remain at `0.1.0`; a Dataset author may create a
new-version Dataset when they intentionally use the new contract, subject to
consumer support. Relabeling a Dataset, converting declarations, or proving
payload preservation is a separate migration decision and operation. No
bulk, in-place, or application-driven migration is authorized.

## Semantics retained without expansion

The new candidate must copy or accurately incorporate the adopted contract
without expanding it:

- a user may record a known assertion without a particular History assertion;
- History does not automatically create, select, overwrite, or refine Recorded
  Relative Time;
- Recorded and Derived/inferred conclusions remain distinct, with no Derived
  write-back authorization;
- Stable History `temporalOrder`, pairwise Relative Time assertions, Derived
  reasoning, and Timeline/presentation ordering remain separate;
- qualitative `before` / `after` does not mean `end(A) < start(B)` and does not
  imply start/end, duration, whole-extent, boundary/contact, or added
  precision;
- no solver, transitivity/closure, conflict or winner policy, interval truth
  evaluation, Timeline placement, or application behavior is included; and
- H2-POSITION-CIRCA remains accepted only within its existing boundary, while
  History 2.0.0 as a whole remains Candidate and deferred authoring shapes
  remain deferred.

The current Validator's exact-version-gated diagnostics and bounded Derived
evidence for `0.1.0` are compatibility evidence only. Updating it for a new
version, adding tests, supporting both versions, or changing applications is
not part of this proposal's execution.

## Human decisions for the next review

The Human can adopt, revise, split, or defer this proposal. The concrete
decisions surfaced by current evidence are:

1. **Exact version number:** adopt the proposed `0.2.0` or specify another new
   exact version. Existing authority supplies exact-version syntax and
   immutability, but no bump classification rule for this draft.
2. **Representation:** adopt or revise the proposed reuse of
   `relative-position` / `containment` plus the new `interval-topology`
   family/Feature. Feature granularity must retain the Specification
   Extension's rule that Features are independently supportable and should
   not fragment ordinary fields without practical interoperability value.
3. **`within` / `contains` conformance statement:** confirm that the adopted
   shape applicability is stated in the new candidate while machine
   evaluation and History grounding stay explicitly outside it.
4. **Dataset migration boundary:** accept no automatic/required migration in
   this contract, leaving any explicit conversion as a separately authorized
   future operation, or request a separately scoped migration design.
5. **Consumer expectation:** confirm exact-version fail-closed behavior:
   support is declared per version; old consumers do not interpret the new
   version by fallback. Application release/support matrices remain separate.

These are contract-design decisions only. Approving the proposal would not
edit the normative Draft or schema, implement Validator support, change an
application, or migrate a Dataset unless the Human explicitly authorizes that
next scope. A request to split would retain the same Extension identity and
the `0.1.0` boundary unless the Human says otherwise.

## Decision requested

Choose one disposition:

- **Adopt with the proposed `0.2.0` direction and representation**, authorizing
  the next bounded normative Draft/schema change proposal for review;
- **Adopt the same-identity/new-exact-version direction but request specified
  changes** to version number, Feature grouping, payload organization, or
  migration/consumer wording;
- **Split the next work** into separate Human-authorized decisions while
  retaining `0.1.0` unchanged; or
- **Defer** integration and leave all current files and support unchanged.

No choice here promotes the Extension to Stable, revises the adopted atomic
semantics, changes the immutable-version principle, or authorizes
implementation or publication.

## Evidence reviewed

- Human-adopted [atomic Recorded assertion semantics](./relative-time-atomic-recorded-assertion-semantics-adoption1.md).
- Prior [integration design comparison](./relative-time-draft-schema-integration-design-preparation1.md).
- Current [Relative Time Draft 0.1.0](../../extensions/relative-time-extension-draft.md) and [schema](../../schemas/extensions/relative-time-draft.schema.json).
- [Specification Extension exact-version, Feature, and unsupported-version rules](../../extensions/specification-extension.md).
- Current [Validator validation scope](https://github.com/sukoyaka-dopeness/e2r-validator/blob/main/docs/validation-scope.md) and [diagnostic contract](https://github.com/sukoyaka-dopeness/e2r-validator/blob/main/docs/diagnostic-contract.md), read-only at the commit recorded above.
- Current E2R-SPEC Roadmap and the bounded History / H2 authority records linked from the prior preparation.

No normative Extension, schema, Validator, tests, application, sample, or
Dataset changed during this proposal preparation. No version number, Feature
contract, migration policy, implementation, or release is adopted here.
