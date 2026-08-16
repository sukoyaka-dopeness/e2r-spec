# E2R Session 0025 — Target Reference Architecture Gate and Research Handoff

Date: 2026-08-14

## Session outcome

This session established a research checkpoint for the architecture work that
followed Agendas 1, 4, 2, and 3.

The following conclusions are now recorded as a coherent, non-normative
baseline:

- Core remains minimal; no Core schema change is justified.
- A common target-reference dependency is needed by several future
  responsibilities, but it should not become a universal Core registry.
- The provisional baseline is an owner namespace plus a local record identity.
- Resolver states remain exactly `malformed`, `unknown`, `missing`, `resolved`,
  and `ambiguous`.
- Resolver state, lifecycle meaning, field-slot identity, and value-level
  information are separate axes.
- Unknown references must remain preservable; they must not be treated as
  missing targets.
- Generic readers must not invent replacement redirects, merge propagation,
  split selection, or cascade deletion.
- Owner-specific lifecycle rules may exist, but a generic reader defers to an
  explicitly supplied owner rule.
- A field slot is not the current value stored in that slot.
- A value-level datum remains separate from the Reference itself and does not
  receive automatic updates when the current field value changes.
- Dataset-level targets remain a capability/profile question; their owner
  namespace is not assigned to Core.

This is a good checkpoint before beginning another architecture gate or any
new payload design.

## Architecture audit and research documents

The cross-agenda audit is:

- `research/exploratory/temporal-epistemic-names-architecture-audit.md`

The Target Reference research sequence is:

1. `research/target-reference/decisions/target-reference-and-record-lifecycle.md`
2. `research/target-reference/decisions/target-reference-model-comparison.md`
3. `research/target-reference/evidence/target-reference-conceptual-fixtures.md`
4. `research/target-reference/evidence/target-reference-lifecycle-diagnostic-matrix.md`
5. `research/target-reference/decisions/target-reference-draft-representation.md`
6. `research/target-reference/decisions/target-reference-chatgpt-review-disposition.md`
7. `research/target-reference/decisions/field-slot-value-ownership-review-disposition.md`

The research-only fixture is:

- `examples/research/target-reference/roundtrip-opaque-record.json`

It is explicitly not a Stable Extension example.

## Research harness

The isolated read-only harness is:

- `research/tools/target-reference-diagnostic-harness.mjs`
- `research/tools/target-reference-diagnostic-harness.test.mjs`

The harness does not parse E2R Datasets and is not imported by Validator,
NarrativeLine, or Linkscape.

Its current tests cover:

- all five resolver states;
- unknown namespace versus missing identity;
- Core Object, Event, and Extension-owned record field slots;
- unsupported field identity as `unknown`;
- slot resolution remaining unchanged for Alice, Bob, and no current value;
- companion value preservation outside the resolver;
- Dataset-level capability testing;
- delete/retire not determining resolver state;
- owner-specific lifecycle deferral;
- replacement, merge, and split without generic retargeting; and
- evidence-dependent identity-reuse handling.

Current result: 14 tests passed.

## Normative terminology update completed

The terminology-only update from `Temporal Precision` / `Time Precision` to
`Civil Time Granularity` has been applied to:

- `extensions/history-extension.md`
- `spec/rationale.md`
- `docs/application-recommendations.md`

No History `1.0.0` field, JSON structure, validation rule, or Dataset meaning
was changed.

## ChatGPT review record

Two bounded reviews were completed.

### Review 1 — Target Reference diagnostic draft

Handoff:

- `research/target-reference/historical-handoffs/target-reference-chatgpt-review-handoff.md`

Disposition:

- `research/target-reference/decisions/target-reference-chatgpt-review-disposition.md`

Key result: resolver and lifecycle axes were separated; unknown field
identities, owner-specific rules, retired identities, and evidence-dependent
ID reuse were clarified.

### Review 2 — Field slot and value-level ownership

Handoff:

- `research/target-reference/historical-handoffs/field-slot-value-ownership-chatgpt-handoff.md`

Disposition:

- `research/target-reference/decisions/field-slot-value-ownership-review-disposition.md`

Key result: the resolver no longer receives or reports companion value
semantics; field capability is evaluated on the resolved owner target.

## Verification

The research harness passed 14 tests after the second review.

Earlier in this session, the preservation fixture also passed:

- NarrativeLine: 35 tests, build, and lint;
- Linkscape: 70 tests, build, and lint.

The `e2r-spec` working tree contains uncommitted research files and the three
terminology edits above. The application repositories also contain pre-existing
uncommitted work. Do not use reset or checkout commands, and do not commit or
push without an explicit request.

## Recommended next milestones

### 1. Gate 3 — Minimal Source/Citation workflow

This is the recommended next architecture gate because NarrativeLine already
has a practical need to record the source behind an Event or Entity, while the
Epistemic design has not decided whether that action creates a Claim, Evidence,
Citation, Provenance record, or a deliberately smaller profile.

The next bounded review should compare one ordinary user action, such as
“record this source for this Event,” across the smallest honest alternatives.
It must not define final Claim/Evidence/Assessment Extension payloads.

### 2. Gate 2 — History vNext target scope

Decide whether temporal applicability of a Name record belongs to History vNext,
Names plus a History profile, a separate temporal-applicability responsibility,
or a general assertion model. This determines whether registered `history`
responsibility continuity is preserved.

### 3. Relative Time focused research

Separate ordinal days, event-to-event offsets, time-only values, undated-event
interleaving, and presentation order. Do not turn the conceptual Feature groups
into formal Extension Features before partial-support evidence exists.

### 4. Backlog and candidate-index alignment

After the next responsibility decision, update NarrativeLine's priority
backlog, the Extension candidate index, and older research supersession notes.
Keep all new fields and identifiers gated.

### 5. Cross-application evidence checkpoint

Extend the existing preservation fixture only after a draft responsibility
representation exists. Demonstrate preservation and partial support in at least
two applications before proposing a Stable Extension.

## Next chat room handoff

Start the next chat by reading these files:

1. `sessions/E2R-Session-0025.md`
2. `research/exploratory/temporal-epistemic-names-architecture-audit.md`
3. `research/target-reference/decisions/target-reference-chatgpt-review-disposition.md`
4. `research/target-reference/decisions/field-slot-value-ownership-review-disposition.md`
5. `research/target-reference/decisions/target-reference-draft-representation.md`
6. `research/tools/target-reference-diagnostic-harness.mjs`
7. `research/tools/target-reference-diagnostic-harness.test.mjs`
8. `extensions/history-extension.md`
9. `spec/rationale.md`
10. `docs/application-recommendations.md`

Then begin with a bounded Gate 3 review. Do not reread all nine original
Agenda handoffs unless a specific unresolved question requires one of them.

Suggested opening request for the next chat:

```text
Session 0025でTarget Reference Gate 1とfield slot/value-level ownershipの
限定レビューが完了しました。Session 0025と指定された研究文書を読み、
次はGate 3「NarrativeLineの最小Source/Citation workflow」の限定設計を
進めてください。Claim、Evidence、Assessment、Provenanceの最終Payloadや
Extension IDはまだ決めず、1つのユーザー操作を最小限の概念モデルで比較
してください。
```
