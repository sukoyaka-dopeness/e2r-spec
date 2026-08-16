# Name Lifecycle and Historical Value Ownership

Date: 2026-08-14

Status: Research gate; non-normative

## Purpose

Gate 2 identified a value-level hazard: a temporal applicability reference to a
Name record does not automatically preserve the historical expression if the
same record is edited from `Alice` to `Bob`.

This bounded review compares lifecycle and value-ownership models for
Object-specific Name records. It does not define a Names payload, temporal
applicability payload, Extension identifier, Schema, or Validator rule.

## Invariant to preserve

The following must remain distinct:

```text
Name record identity
Name expression value
Name-to-Object binding
Temporal applicability assertion
Historical value-level datum
```

A reference resolving to one Name record proves record identity only. It does
not prove that the record's current expression value was the value intended by
an older applicability assertion.

## Motivating case

1. Name record `N1` has expression `Alice` and applies to Entity `E1` during
   interval `I1`.
2. An editor changes the expression to `Bob`.
3. The old applicability reference still targets `N1`.

The resolver may remain `resolved`, but the historical value meaning is not
automatically resolved. A generic reader must not copy the current `Bob` value
back into the historical assertion.

## Candidate lifecycle models

### Model L1 — Immutable expression identity

An independently referenced Name record represents one substantive Name
expression identity. Cosmetic or descriptive edits may preserve identity, but a
substantive expression replacement creates a new record identity.

**Advantages**

- Old applicability references continue to identify the historical expression.
- No automatic value snapshot is required for ordinary identity preservation.
- Replacement, retirement, and deletion remain separate lifecycle operations.
- A reader can preserve old and new records without redirecting references.

**Risks**

- The boundary between cosmetic and substantive edits requires Names rules.
- User interfaces must explain why changing text may create a new identity.
- Equivalent expressions in different language, script, or context need
  explicit identity policy.

**Assessment**

Safest provisional lifecycle direction for independently referenceable Name
records.

### Model L2 — Mutable identity with explicit value-level snapshot

The Name record may change expression while retaining identity. An applicability
assertion that must preserve the older expression stores an explicit historical
value-level datum or snapshot outside the resolver reference.

**Advantages**

- Ordinary editing can retain one record identity.
- Exact historical expression meaning can survive a mutable current value.
- Snapshot ownership can be chosen by a future assertion or value
  responsibility.

**Risks**

- Every historical assertion that needs exact value meaning must opt into a
  snapshot.
- Snapshot equality, complex values, absence, and unknown values remain open.
- A reader may confuse a field slot or current value with a snapshot.
- Without explicit snapshot adoption, old applicability remains value-ambiguous.

**Assessment**

Viable when mutable editing is a hard requirement, but requires explicit
value-level ownership and cannot be inferred from a Name reference.

### Model L3 — Hybrid versioned expression records

An enduring Name subject or binding can remain stable while each substantive
expression version has its own identity. Applicability targets the expression
version, while a separate relationship may connect versions to a common Name
subject.

**Advantages**

- Separates enduring subject, expression, and historical applicability.
- Supports corrections, translations, script variants, and replacement history.
- Avoids silently changing the value of an independently targeted expression.

**Risks**

- Adds another identity layer and lifecycle vocabulary.
- May duplicate Model L1 plus explicit replacement metadata.
- The enduring subject itself may become an underdefined generic record.

**Assessment**

Useful for richer naming ecosystems, but too large to select for the current
Name-specific temporal applicability baseline.

## Comparison matrix

| Model | Substantive edit | Historical applicability target | Snapshot needed by default | Main burden | Provisional status |
| --- | --- | --- | --- | --- | --- |
| L1 immutable expression identity | New Name identity | Old expression record | No, if identity rule applies | Edit classification | Preferred provisional direction |
| L2 mutable + snapshot | Same identity | Record plus explicit value datum when needed | Conditional | Snapshot ownership and semantics | Viable alternative |
| L3 hybrid versioned records | New expression version | Expression version | Usually no | Additional identity layer | Deferred richer model |

## Edit classification boundary

This review does not define a final vocabulary, but the following distinction
is required:

- cosmetic presentation metadata may be edited without changing expression
  identity when it does not alter the represented Name;
- a substantive text, language, script, naming-kind, or represented-expression
  change may require a new identity under L1 or L3;
- an explicit value-level snapshot may preserve exact historical content under
  L2; and
- changing the current value must never silently rewrite old applicability,
  Claim, Evidence, or Provenance information.

Identity equivalence must not be inferred from equal text, URLs, labels, or
current display output. Names identity, external identity, and Core `name`
remain separate.

## Lifecycle operations

All models retain the common Target Reference safety rules:

- replacement does not authorize generic redirect;
- merge does not propagate every historical assertion;
- split does not select a new Name target automatically;
- deletion does not authorize cascade cleanup; and
- `missing` and `unknown` remain distinct from retired or replaced lifecycle
  context.

An owner-aware Names implementation may define explicit lifecycle metadata later.
That metadata does not change resolver state by operation name alone.

## Provisional disposition

For the current Name-specific temporal applicability research, prefer Model L1
as the safest provisional lifecycle direction:

```text
substantive expression replacement -> new Name identity
historical applicability -> old Name identity
current cosmetic editing -> identity preserved only when meaning is unchanged
```

Keep Model L2 as a viable alternative when mutable identity is required, but
make value-level snapshot adoption explicit. Keep L3 deferred until evidence
shows that an enduring subject plus versioned expressions solves a real
cross-application need not covered by L1 and replacement metadata.

This is not a final Names rule. It is a guardrail for future fixture and payload
research.

## Required evidence before payload design

Test at least these cases across two conceptual readers:

1. cosmetic label metadata edit with unchanged expression;
2. Alice→Bob substantive replacement;
3. language or script change;
4. two historical applicability assertions to old and new expressions;
5. explicit value-level snapshot under mutable identity;
6. missing, unknown, retired, and replaced Name references; and
7. later Claim/Evidence addition without automatic value copying.

Success means the readers never report a current `resolved` record as proof of
the historical value unless the selected lifecycle or snapshot rule supports
that conclusion.

## Deferred questions

- Names-specific definition of substantive expression change;
- language, script, naming-kind, and context identity;
- exact value-level datum ownership;
- snapshot representation for complex or absent values;
- replacement, retirement, merge, and split metadata;
- interaction with Name-to-Entity binding;
- temporal applicability interval representation; and
- final Names and temporal Extension boundaries.

## Next step

The lifecycle/value fixtures are recorded in
`name-lifecycle-value-fixtures.md`, with internal notation at
`examples/research/names/name-lifecycle-value-fixtures.json`. The read-only
harness is:

- `research/names/p1/tools/name-lifecycle-value-diagnostic-harness.mjs`
- `research/names/p1/tools/name-lifecycle-value-diagnostic-harness.test.mjs`

Its eight tests confirm cosmetic identity preservation, L1/L2 Alice→Bob
divergence, explicit language/script policy requirements, no replacement
redirect, separate value snapshots, independent lifecycle/resolution, and
explicit Claim/Evidence enrichment.

The bounded Names identity-policy review is recorded in
`name-identity-policy-review.md`. It establishes a conservative L1-oriented
guardrail while keeping subject/binding and hybrid policies open. The next step
is a multilingual and naming-kind fixture review; no Name writer or snapshot
persistence should be added yet.
