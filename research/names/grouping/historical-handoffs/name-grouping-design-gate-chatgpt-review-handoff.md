# ChatGPT Review Handoff — Names Grouping Design Gate

## Review objective

Critically review the limited Names grouping gate opened after the P1/P2/P3
workflow comparison. Determine whether multilingual variant grouping is a
cross-application interoperability requirement, or should remain an explicit
application/profile concern.

Do not design a final Names payload, choose an Extension ID, define migration,
or modify any application.

## Context

- P1: independently referenceable Name expression identity.
- P2: stable Name-to-Entity binding identity with version/snapshot burden.
- P3: binding plus expression identities, with the highest complexity.
- Historical timeline naming currently favors P1.
- Multilingual display/search shows practical grouping value for P2/P3, but
  grouping must not erase language, script, naming-kind, context, or historical
  expression distinctions.
- Model B remains the current Name-specific baseline for temporal applicability;
  generic Model C semantics are not adopted.

## Read these files first

1. `research/names/grouping/decisions/name-grouping-design-gate.md`
2. `research/exploratory/name-identity-policy-review.md`
3. `research/exploratory/name-identity-workflow-evidence.md`
4. `examples/research/names/name-identity-workflow-evidence.json`
5. `research/exploratory/name-identity-multilingual-fixtures.md`
6. `examples/research/names/name-identity-multilingual-fixtures.json`
7. `research/names/p1/decisions/name-lifecycle-and-historical-value-ownership.md`
8. `research/exploratory/temporal-epistemic-names-architecture-audit.md` (Gate 2 section)

## Questions for the reviewer

1. Is grouping multilingual Name variants a shared interoperability need across
   at least two materially different workflows, or primarily presentation and
   search behavior?
2. Can an explicit grouping relation/profile preserve P1 expression identity
   without introducing P2/P3 as a general identity policy?
3. If a stable binding is required, what minimum historical value/version
   ownership is necessary to prevent old displays from changing?
4. Which distinctions must remain independently addressable: language, script,
   transliteration, naming-kind, context, external identifier, and lifecycle?
5. What would count as sufficient cross-domain evidence to promote P2 or P3?

## Required response format

Return:

- verdict: `accept`, `accept with corrections`, or `reject`;
- the strongest argument for and against opening this separate gate;
- whether P1 should remain the baseline;
- corrections to the five review questions or exit criteria;
- missing evidence, if any; and
- explicit non-decisions that must remain deferred.

Keep the review responsibility-level and non-normative. Do not invent payload
fields, identifiers, redirect/cascade behavior, or generic temporal semantics.

After review, record the disposition in
`name-grouping-design-gate-review-disposition.md`. The gate has three possible
outcomes: no stored grouping, P1 plus optional grouping, or evidence-backed
promotion of stable binding/hybrid identity.
