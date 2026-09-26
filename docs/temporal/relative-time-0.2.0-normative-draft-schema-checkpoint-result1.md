# Relative Time 0.2.0 Normative Draft/Schema Checkpoint Result 1

- Date: 2026-09-26
- Status: **BOUNDED DRAFT/CANDIDATE DEFINITION RECORDED; NOT STABLE; NO IMPLEMENTATION SUPPORT IMPLIED**

## Human disposition and authority

This checkpoint implements the Human's explicit selection of exact Candidate
`0.2.0` under the existing Extension identifier
`draft.github.sukoyaka-dopeness.relative-time`. The Human selected the
`relative-position`, `containment`, `interval-topology`,
`calendar-granule-relation`, and `elapsed-offset` representation; retained the
existing quantitative responsibilities; selected the adopted applicability
for `within` / `contains`; and selected no automatic or required migration
from `0.1.0`. Consumer support remains exact-version-specific, without
fallback interpretation of `0.2.0` as `0.1.0`.

The committed [atomic Recorded semantics adoption](./relative-time-atomic-recorded-assertion-semantics-adoption1.md)
remains the authority for the adopted atomic meanings and limits. The
[Specification Extension](../../extensions/specification-extension.md)
already defines exact-version immutability, exact declarations, and
version-local Features; this result adds no duplicate general versioning
rule. The previous [integration proposal](./relative-time-new-exact-version-integration-proposal1.md)
records the prior review state and is not used to override this Human
disposition.

## Bounded changes

- Added the complete Draft/Candidate definition in
  [`relative-time-0.2.0-draft.md`](../../extensions/relative-time-0.2.0-draft.md).
- Added its separate structural payload schema at
  [`relative-time-0.2.0.schema.json`](../../schemas/extensions/relative-time-0.2.0.schema.json).
- Added a representative 12-assertion fixture and a focused local structural
  validation script. The script checks payload shape/value, exact declaration,
  declared Feature use, Relation-only placement, and Core endpoint integrity.
  It does not evaluate temporal truth, History correspondence, applicability
  shapes, Derived conclusions, or solver behavior.
- Added the Candidate to the Extension index and updated the current Roadmap
  summary. The Roadmap remains the sole current-planning authority.

## Preserved boundaries

- Relative Time `0.1.0` Draft/schema, exact-version meaning, and existing data
  were not changed. No automatic or required Dataset migration is specified.
- `0.2.0` is a Draft/Candidate, not a Stable promotion or publication.
- `before` / `after` remain qualitative target-relative-to-source assertions;
  they do not assert `end(A) < start(B)` or additional interval precision.
- `same-instant` symmetry and `contains` inverse meaning do not require mirror
  Relation storage or automatic reverse Relation creation.
- `within` / `contains` applicability is stated without History grounding,
  endpoint evaluation, or truth testing.
- `overlap`, `touching`, and `same-temporal-extent` add no boundary evaluator,
  solver, or truth procedure.
- Recorded and Derived remain separate. No inference, write-back, transitive
  closure, conflict winner, Timeline placement, or application behavior is
  specified.
- Stable History `temporalOrder`, pairwise Relative Time, Derived reasoning,
  and presentation ordering remain separate. H2-POSITION-CIRCA and deferred
  History 2 scope are not reopened.
- No Validator repository/source/support, application, sample, or Dataset was
  changed. The local schema checks are not Validator support evidence.

## Verification and handoff

The full repository validation and the dedicated Relative Time 0.2.0
structural validation passed before commit. Relative Time `0.2.0` is ready for
a separately authorized exact-version Validator support checkpoint; that
checkpoint must not be inferred from this specification-repository change.
