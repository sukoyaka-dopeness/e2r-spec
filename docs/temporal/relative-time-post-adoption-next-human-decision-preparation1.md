# Relative Time Post-Adoption Next Human Decision Preparation 1

- Date: 2026-09-26
- Status: **DECISION PREPARATION ONLY; NO NEW WORK OR IMPLEMENTATION AUTHORIZED**
- Baseline: current E2R-SPEC repository evidence at HEAD `9881f6c23e21ac44ac31f2969ddbf9f700d90140`.

## Purpose

Reconcile the current Relative Time authority after the Documentation IA work
and prepare one bounded next Human decision. This record does not re-open
already selected or adopted semantics and does not change the Draft, schema,
Validator, examples, or application behavior.

## Current authority and status

| Authority / evidence | Current status and scope |
|---|---|
| Stable History 1.0.0, [`history-extension.md`](../../extensions/history-extension.md) | Stable per-Object temporal record. Its limited `temporalOrder` is not pairwise Relative Time and is not Timeline/presentation order. |
| H2-POSITION-CIRCA closure and Stable profile | The H2 authoring/atomic Dataset-wide upgrade closure is accepted only within its recorded bounded scope. Base History 2.0.0 remains Candidate; the adopted Stable `position-circa` profile does not reopen broader H2 authoring. See the [scope closure](./history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md) and [profile implementation result](./history-2-position-circa-stable-profile-implementation-result.md). |
| RT-BR-1 `before` / `after` direction | Already Human-selected as Choice 1: a direct, bounded qualitative Recorded claim. The [direction decision](./relative-time-before-after-semantic-direction-decision1.md) did not itself adopt normative text; its endpoint orientation and non-precision limits were subsequently carried into the adopted atomic contract. Do not ask this question again. |
| Extensible-vocabulary direction and atomic contract scope | The Human selected an extensible user-recorded assertion vocabulary and later selected the first contract scope: the atomic meaning of one Recorded assertion. These are recorded in the [direction](./relative-time-extensible-temporal-assertion-direction1.md) and [scope decision](./relative-time-atomic-recorded-assertion-contract-scope-decision1.md). |
| Atomic Recorded assertion semantics | **Adopted** by the [adoption record](./relative-time-atomic-recorded-assertion-semantics-adoption1.md). It covers the listed qualitative values and their stated applicability/limits, including the selected qualitative `before` / `after` meaning. It is not merely a proposal or an open RT-BR-1 choice. |
| Relative Time Draft 0.1.0 and its schema | Remain a non-Stable candidate and are not amended by semantic adoption. They structurally represent `before`, `after`, `same-instant`, `within`, `calendar-granule-relation`, and `elapsed-offset`; the adopted atomic contract additionally includes `contains`, `overlap`, `touching`, and `same-temporal-extent`, and its selected `within` / `contains` applicability is not fully encoded by the current candidate. See the [Draft](../../extensions/relative-time-extension-draft.md) and [schema](../../schemas/extensions/relative-time-draft.schema.json). |
| Validator | The current Validator provides exact-version, declaration-gated, read-only support for Draft 0.1.0, including bounded diagnostics/Derived evidence. That implementation is not semantic adoption, does not add absent Draft/schema variants, and does not authorize writes or a solver. See its [validation scope](https://github.com/sukoyaka-dopeness/e2r-validator/blob/main/docs/validation-scope.md) and [diagnostic contract](https://github.com/sukoyaka-dopeness/e2r-validator/blob/main/docs/diagnostic-contract.md). |

The detailed proposal, readiness audit, and Research remain useful evidence at
their own authority levels. Their pre-adoption questions are superseded only
where the later Human decisions and adoption record expressly decide them;
their separate deferred topics remain deferred or unresolved.

## Meaning boundaries retained

- A Recorded Relative Time assertion is its own user-recorded evidence. It
  does not require a particular History assertion as grounding. History does
  not create, select, overwrite, refine, or consolidate it.
- Recorded assertions remain distinct from Derived conclusions. The adoption
  does not authorize automatic History or Relation write-back.
- Stable History `temporalOrder`, pairwise Relative Time semantics, Derived
  reasoning, and Timeline/presentation projection are separate responsibilities.
- Adopted qualitative `before` / `after` does not mean
  `end(A) < start(B)` and does not imply a start, end, duration, whole extent,
  boundary/contact, or extra precision.
- H2-POSITION-CIRCA remains closed only at its accepted boundary. The
  History 2 Candidate as a whole, deferred authoring shapes, and broader
  authoring are not reopened here.
- Atomic semantic adoption does not amend Draft 0.1.0, make all adopted
  values serializable or schema-valid, promote Relative Time to Stable, or
  establish Validator/application support.

## The next bounded Human decision

**Question:** Should the next checkpoint prepare a Draft/schema integration
and versioning design for the already adopted atomic Recorded contract, or
should that work remain deferred with Draft 0.1.0 and its schema unchanged?

Choose one:

1. **Authorize integration-design preparation only.** Prepare a bounded
   proposal comparing how the existing Draft/schema could represent the
   already adopted atomic contract, including compatibility/versioning
   implications and exact gaps. This authorizes analysis and a proposal for
   later Human review only—not edits to the normative Draft, schema, Validator,
   examples, application, or Dataset migration.
2. **Defer integration design.** Keep Draft 0.1.0 and its schema unchanged;
   retain the semantic adoption as current authority and the representation
   gap as an explicit boundary. This selects no later date, priority, or
   alternative semantic model.

Either choice leaves the adopted meanings, endpoint orientation, Recorded /
Derived distinction, History separation, and `before` / `after` limits
unchanged. Neither choice adopts a Feature or payload shape, selects a
version number, settles machine evaluation, Derived/order laws, consistency,
solver policy, Timeline/UI behavior, application writing, or deployment.

If option 1 is selected and a proposal is later prepared, adopting its
representation/versioning recommendations would still require a separate
Human disposition. Any subsequent Validator/runtime/application work would
also require its own scoped authorization. If option 2 is selected, no
implementation or schema change follows.

## Evidence considered

- Current Roadmap Relative Time status and its post-adoption pointer.
- Human-selected RT-BR-1 direction, extensible-vocabulary direction, atomic
  contract scope, atomic wording decisions, and atomic semantics adoption.
- Relative Time Draft 0.1.0 and its current JSON Schema.
- Stable History 1.0.0, bounded H2-POSITION-CIRCA closure, and the registered
  Stable `position-circa` profile boundary.
- History 2.x / Relative Time Cross-Audit and Relative Time semantic-contract
  Research, treated as candidate/exploratory evidence rather than adopted
  authority.
- Validator's current committed validation-scope and diagnostic-contract
  documentation, treated as implementation evidence only.

No Core, Extension, schema, Validator, application, or sample files were
changed for this preparation. No semantic adoption, version choice, workstream
priority, implementation, migration, push, or release is authorized here.
