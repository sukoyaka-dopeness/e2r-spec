# ChatGPT Review Handoff — Names Grouping Closure Options

## Objective

Review the three bounded closure options for the Names Grouping gate. Decide
whether current evidence supports closing with no stored grouping, continuing
with P1 plus optional explicit grouping, or reopening for a P2/P3 identity
layer.

Do not choose a payload, Extension ID, cardinality, migration, or application
contract.

## Read first

1. `research/names/grouping/decisions/name-grouping-gate-status.md`
2. `research/names/grouping/decisions/name-grouping-gate-closure-options.md`
3. `research/names/grouping/decisions/name-grouping-design-gate-review-disposition.md`
4. `research/names/grouping/evidence/name-grouping-second-workflow-evidence.md`
5. `research/names/grouping/evidence/name-grouping-overlap-evidence.md`
6. `research/names/grouping/evidence/name-grouping-partial-support-evidence.md`
7. `research/names/grouping/evidence/name-grouping-binding-target-evidence.md`
8. `research/exploratory/name-identity-workflow-evidence.md`

## Review questions

1. Does the catalog-family workflow demonstrate a non-derivable shared fact,
   or could applications safely derive the behavior from P1 expressions,
   Entity bindings, and metadata?
2. If non-derivable, is P1 plus optional explicit grouping the smallest safe
   direction without implying identity equivalence or preference?
3. Is there any evidence for a persistent binding target that would justify
   P2/P3? If not, should Option C remain explicitly rejected for now?
4. Are the partial-support and overlapping-rationale preservation constraints
   sufficient for a closure decision?
5. What single missing evidence would most change the recommendation?

## Required response

Return:

- verdict: `close A`, `continue B`, or `reopen C`;
- strongest evidence and counterargument;
- any corrections to the closure conditions;
- explicit deferred decisions; and
- whether another bounded fixture is warranted.

Keep the response responsibility-level and non-normative. Do not infer group
identity, binding semantics, temporal propagation, redirect, merge, split, or
cascade behavior.
