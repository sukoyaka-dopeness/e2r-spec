# Relative Time 0.2.0 First-Consumer Readiness 1

- Date: 2026-09-26
- Status: **APPLICATION-SCOPE PREPARATION ONLY — NO RUNTIME CHANGE AUTHORIZED**

## Authority baseline

The [Relative Time 0.2.0 Draft](../../extensions/relative-time-0.2.0-draft.md)
and [schema](../../schemas/extensions/relative-time-0.2.0.schema.json) define
the current Candidate contract. The [atomic Recorded semantics adoption](./relative-time-atomic-recorded-assertion-semantics-adoption1.md)
remains semantic authority. The [Validator support result](../validator/relative-time-0.2.0-exact-version-support-result1.md)
records local, read-only exact-version support at Validator commit
`0d81cec9cc4acdb9083d9c2cc1442735db88fcda`. None of these records promotes
Relative Time to Stable or authorizes application behavior.

The latest inspected NarrativeLine commit was
`307a26583074b5db5471d4778ae30231d16e0838`. Its lockfile still resolves
`@sukoyaka-dopeness/e2r-validator` `0.6.0`; that dependency is not evidence of
the later local `0.2.0` support. The support commit is source evidence, not a
published/consumable package release. Application implementation therefore
has a dependency-availability gate: use a normally consumable Validator
artifact that supports exact `0.2.0`; do not use a sibling path or Git
dependency as a substitute. No package release is authorized by this
preparation.

## Current application evidence

NarrativeLine is the best-supported first-consumer candidate, but not yet a
semantic consumer:

- It is the Timeline-oriented application. Its current
  `compareEventsByHistoryDate` orders by valid recorded date/time, then
  applicable History `temporalOrder`, then Event ID. It does not read
  Relative Time Relations.
- Its generic `validateCoreDataset` delegates to the installed Validator and
  forwards diagnostics. Import/export operates on the parsed Dataset; generic
  Extension fields are retained. The export declaration writer only claims
  versions it owns and can state completely, and declines to add an
  incomplete Specification declaration when an unsupported Extension is
  present.
- Accepted `NL-H2-R1` evidence records preservation of Relative Time Relation
  payloads on unrelated edit/export paths while keeping History editing
  separate. It explicitly excludes Relative Time ordering, authoring,
  solving, diagnostics, and Derived write-back. This remains useful
  preservation evidence, not `0.2.0` support acceptance.
- The current application dependency is older than the local Validator
  support. With that dependency, an exact `0.2.0` declaration is not verified
  by the new local contract; the application may only preserve it as
  unsupported/opaque data. The current generic import-information surface
  displays validator issues, but no dedicated bilingual `0.2.0` capability
  notice or Relation presentation has been accepted.

Current LiaisonScape source/documentation searches showed no Relative Time
consumer path; its graph/layout responsibility is not a stronger initial
consumer for temporal ordering. Hub is a public-entry/workflow surface, not a
Timeline consumer, and no current Relative Time consumer evidence was found
there. These searches do not establish that those applications can never
consume the Extension. NarrativeLine is recommended first because its
existing Timeline and preservation boundaries make a bounded consumer slice
testable without changing another application's responsibility.

At inspection, NarrativeLine had unrelated dirty and untracked work. It was
treated as non-authoritative for this preparation and was not modified,
staged, or committed. The audit relied on committed application documents and
the inspected read-only source paths; no sibling repository was written.

## Candidate first slices

### A. Exact-version read-only recognition, diagnostics, and preservation — recommended

After the Validator support is available through the application's normal
dependency channel, integrate that exact-version validator behavior without
using Relative Time to alter presentation. The bounded application capability
would be: validate a declared `0.2.0` payload and its exact Feature use; expose
structural errors and unsupported-version/Feature limitations through the
existing diagnostic boundary; preserve the declaration, Relation payload,
and unknown sibling data through import, unrelated supported edits, export,
and re-import. Do not infer, repair, rewrite, or create temporal data.

This slice does not need a new semantic UI. Any optional explanatory copy
would be an explicit EN/JA product choice and should be tested at desktop and
narrow widths. Existing generic diagnostics may remain the only visible
feedback unless Human selects that localized notice.

Candidate acceptance boundaries for a later implementation checkpoint:

1. Only exact `0.2.0` activates its five-Feature contract; `0.1.0` remains on
   its existing path, and another exact version never falls back.
2. Valid `0.2.0` data opens without being represented as Stable or as
   semantically evaluated. Invalid payload/declaration structure follows the
   Validator's diagnostics; unsupported exact versions/Features remain
   uninterpreted and preserved when safe.
3. Import, an unrelated edit, export, and re-import preserve exact
   Specification declaration, Relative Time Relation payloads, and unknown
   sibling fields. No declaration or Feature is invented or rewritten.
4. No Relation authoring/editing/deletion, History write, Derived output,
   Timeline ordering change, migration, or automatic repair occurs.
5. Any user-facing notice is EN/JA, keyboard accessible, and verified at a
   narrow viewport; no semantic ordering UI is part of this acceptance.
6. Full application tests, lint, build, focused round-trip coverage, and
   bounded browser acceptance pass against the exact consumable Validator
   artifact. Package/release and app-version decisions remain separate.

### B. Read-only semantic presentation or Relative Time-based Timeline order — not ready

This is not required to establish exact-version structural support and would
cross from preservation into product interpretation. In particular,
`before` / `after` only establish qualitative pairwise precedence. They do not
establish elapsed days or numbered positions. A partial order may leave Events
incomparable; converting it to a total Timeline order requires a deterministic
projection and rules for mixed dated/undated Events, existing `temporalOrder`,
conflicting/cyclic claims, and visible labels. Validator `0.2.0` intentionally
does not diagnose conflicts or solve that projection. No current accepted
application authority supplies those choices.

If Human wants semantic presentation, first authorize a separate design
decision covering whether to show atomic Relation descriptions without
sorting, produce an ordinal projection, or defer presentation. Do not begin
Timeline UI implementation from the observation that Relative Time may be
useful.

### C. Authoring, migration, or Derived reasoning — exclude

None is needed for a first consumer. These would add Relation lifecycle and
Feature declaration ownership, conversion policy, inference/conflict rules,
or writeback semantics beyond the current application and Candidate
boundaries.

## Recommended next decision

Select **A** as NarrativeLine's first application scope, conditional on a
normally consumable Validator package with exact `0.2.0` support. Decide
separately whether the first slice needs a localized supported-Candidate
notice; default recommendation is to keep existing diagnostic presentation
and add no semantic UI. Do not include Relative Time-based Timeline ordering.

If Human instead wants semantic presentation, defer the implementation and
commission the bounded projection design in option B. If package support is
not made consumable, keep application behavior at opaque preservation and do
not claim exact `0.2.0` validation.

## Explicit exclusions

This record changes no application, Validator, Draft, schema, sample, or
Dataset. It does not choose application versioning, package publication,
Stable promotion, Relation authoring, Derived reasoning, solver/conflict
policy, Timeline sorting, or migration. The `0.1.0` and `0.2.0` exact
contracts, History grounding boundary, and H2-POSITION-CIRCA acceptance remain
unchanged.
