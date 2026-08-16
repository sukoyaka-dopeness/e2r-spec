# Names Grouping Design Gate — Limited Review

Date: 2026-08-14

Status: Proposed research gate; non-normative

## Decision

Open a separate, limited Names design gate for multilingual grouping. Keep
P1 expression identity as the conservative baseline while the gate tests
whether grouping variants under one Entity provides enough interoperability
value to justify a binding or hybrid identity layer.

This gate does not select a final Names payload, Extension ID, temporal
integration, migration rule, or application behavior.

## Evidence boundary

The current evidence covers historical timeline naming, where P1 is the
smallest safe fit, and multilingual Entity display/search, where P2/P3 offer
grouping convenience but introduce versioning or an additional identity layer.
See `name-identity-workflow-evidence.md` and its fixture and harness:

- `../../../../../../../examples/research/names/name-identity-workflow-evidence.json`
- `tools/name-identity-workflow-evidence-harness.mjs`
- `tools/name-identity-workflow-evidence-harness.test.mjs`

## Limited review questions

1. Is variant grouping a cross-application interoperability need, or mainly a
   presentation/search concern?
2. Can grouping remain an explicit relation/profile while expression identity
   stays P1?
3. If a stable binding is needed, what historical value/version semantics are
   required to prevent old displays from being rewritten?
4. Which naming-kind, language, script, and context distinctions must remain
   independently addressable?
5. What preservation and unknown-data behavior is required for readers that do
   not understand the grouping profile?

The first comparison is P1 expressions plus optional explicit grouping versus
P2/P3. The test is whether grouping information is non-derivable and lost in
exchange, not merely whether grouping is convenient.

## Review constraints

- Do not infer identity equivalence from language, script, transliteration, or
  display preference.
- Do not add generic temporal applicability, redirect, merge, split, or
  cascade semantics.
- Do not modify Core or application contracts during this gate.
- Treat P2/P3 as candidates only; require concrete cross-domain evidence before
  promotion.

## Exit criteria

The gate may close only after a bounded review records either evidence that
explicit grouping is sufficient and no new identity layer is needed, or
evidence-backed requirements for a Names-owned grouping/binding profile,
including historical value ownership and preservation rules.

A third valid outcome is that no stored grouping is justified because Entity
binding plus independent P1 expressions and application-derived behavior are
sufficient.

An initial second-workflow checkpoint is recorded in
`name-grouping-second-workflow-evidence.md`; it remains conceptual evidence,
not a promotion decision.

Until then, implementations should preserve unknown grouping data and retain
independent Name expression references.

## Review handoff

The bounded external review is prepared in
`name-grouping-design-gate-chatgpt-review-handoff.md`. It must be reviewed
against the listed evidence before any disposition is recorded.
