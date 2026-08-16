# History vNext Cross-Domain Applicability Evidence Checkpoint

Date: 2026-08-14

Status: Research evidence checkpoint; non-normative

Related research:

- `history-vnext-target-scope.md`
- `history-vnext-target-scope-review-disposition.md`
- `history-vnext-model-b-c-fixtures.md`
- `history-vnext-model-b-c-diagnostic-harness.test.mjs`

## Purpose

Gate 2 requires evidence before reopening Model C as an independent generic
applicability responsibility. This checkpoint compares two domains:

1. Names: a Name expression is **used-during** an interval for an Entity.
2. Rules: a Rule is **valid-during** an interval in its governing domain.

The test asks whether these domains share a semantic contract, not merely a
record-target-plus-interval shape. It also tests whether a reader that knows
only a candidate generic applicability layer can provide useful partial support
without knowing either domain's meaning.

The fixture is evidence about responsibility boundaries. It is not a payload,
Schema, Extension declaration, or proof that a generic applicability
Extension should be created.

## Evidence setup

The internal fixture contains:

```text
N1@Names  -- used-during I1 -->  E1@Core
R1@Rules  -- valid-during I1 --> Rule-domain context
```

Both records have an owner identity, a domain target or context, a temporal
interval, and a domain predicate. The predicate is intentionally not replaced
with one generic `applies` value.

The executable notation is:

- `examples/research/history-vnext/cross-domain-applicability-evidence.json`

It remains research-only and is not an E2R Dataset.

## Profile observations

### Names plus temporal capability

This profile can interpret `N1` as a Names-owned record and can use a future
temporal capability to represent `I1`. It does not thereby interpret `R1` or
own Rule validity.

### Names-only

This profile can understand the Name identity and `used-during` domain meaning,
but preserves the temporal representation as unsupported if it lacks the
required future temporal capability. It cannot interpret Rule validity.

### Candidate applicability-only

This profile can recognize that both records have a structurally similar
temporal qualifier, but it lacks the domain vocabulary required to determine
whether `used-during` and `valid-during` have the same meaning. Treating both as
supported generic applicability would be an unsupported semantic conversion.

The profile may still provide useful infrastructure-level behavior—preserving,
indexing, or reporting references—but that is not evidence of semantic support
for a shared applicability responsibility.

## Comparison

| Dimension | Names `used-during` | Rules `valid-during` | Shared contract demonstrated? |
| --- | --- | --- | --- |
| Record owner | Names | Rules/domain-specific | No |
| Subject meaning | Name expression usage/applicability | Rule validity in a domain | No |
| Target | Entity or Name binding context | Rule domain/context | Not established |
| Temporal value | Interval `I1` | Interval `I1` | Same shape only |
| Overlap meaning | May allow concurrent names | May create rule conflict or versioning concern | No |
| Evidence meaning | May later be supported by Claim/Evidence | May later be supported by Claim/Evidence | Common epistemic layer, not common applicability |
| Generic reader action | Preserve or use Names capability | Preserve or use Rules capability | Infrastructure only |

## Findings

### Finding 1 — Structural reuse exists

Both domains can be described using a target, a temporal representation, an
owner, and a domain predicate. A future temporal capability might therefore be
reusable as a representation component.

This supports Model B's dependency/profile direction: domain owner plus reusable
temporal capability.

### Finding 2 — Semantic reuse is not demonstrated

The words “used,” “applicable,” and “valid” do not establish one contract.
Names may coexist during an interval, while overlapping Rules may be
inconsistent, versioned, scoped, or jointly valid. Those meanings require
domain rules that a generic applicability reader cannot invent.

This does not support reopening Model C as a generic semantic responsibility.

### Finding 3 — Partial support value is infrastructure-level only

An applicability-only reader can preserve unknown records, maintain opaque
references, or expose unresolved diagnostics. Those behaviors are valuable but
are already covered by the common unknown-data and Target Reference boundaries.

They do not demonstrate that the reader can interpret a shared applicability
meaning without understanding Names or Rules.

### Finding 4 — Model C remains an evidence-gated candidate

The checkpoint supplies one additional domain comparison but does not show a
shared semantic contract or semantic partial-support value. Model C therefore
remains deferred rather than promoted.

## Decision

The current Gate 2 disposition remains:

```text
Names owns Name-specific applicability semantics.
Future temporal responsibility supplies temporal representation.
Model C requires further cross-domain semantic evidence before selection.
```

The result does not prohibit a future generic responsibility. It sets a clear
reopening condition: at least two domains must share an explicit applicability
contract, and an applicability-only reader must be able to interpret a useful
subset of that contract without silently importing domain semantics.

## Deferred questions

- whether any domain pair actually shares a stable applicability predicate;
- whether a generic predicate vocabulary can distinguish usage, validity,
  attestation, preference, and epistemic applicability;
- whether a generic reader can perform semantic partial support rather than
  only preservation and diagnostics;
- temporal interval, open-ended, approximate, and competing assertion forms;
- Name and Rule lifecycle identity behavior; and
- final Extension, Feature, payload, and Validator rules.

## Next step

Keep Model B as the Name-specific baseline and perform the required backlog and
candidate-index maintenance only when a concrete temporal capability draft is
available. Do not create a generic applicability Extension from this evidence
checkpoint.
