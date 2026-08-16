# ChatGPT Review Disposition — Target Reference Diagnostic Draft

Date: 2026-08-14

Status: Research disposition; non-normative

Review source: `target-reference-chatgpt-review-handoff.md` and the bounded
review returned from ChatGPT.

## Overall decision

The provisional Model A baseline and the five resolver states remain accepted.
The four Agenda handoffs and the Core are not reopened. The review is closed
after correcting the research harness and its explanatory documents.

## Accepted clarifications

1. **Resolver and lifecycle are separate axes.** `malformed`, `unknown`,
   `missing`, `resolved`, and `ambiguous` remain resolver states. `retired`,
   replacement, merge, split, and identity-reuse concerns are lifecycle
   context or generic actions, not additional resolver states.
2. **Delete does not determine resolution.** A target that is removed may be
   `missing`; an identity-bearing retired record may remain `resolved`.
   The operation name alone cannot choose the resolver result.
3. **Unsupported field identity is `unknown`.** A structurally valid but
   unsupported field key is a capability issue, not a missing target.
4. **Field slots are not Entity-only.** The harness no longer hard-codes
   `target.kind === "entity"`; future Core and Extension-owned record kinds
   remain possible.
5. **Dataset ownership remains open.** The research harness uses a placeholder
   Dataset namespace for capability testing and does not assign Dataset-level
   targets to the Core namespace.
6. **Value-level data is companion information.** The draft no longer models a
   value snapshot as a required member of the reference itself.
7. **ID reuse requires evidence.** Rejection applies when a surviving
   persistent reference is confirmed; otherwise the case is preserved and
   reported for further analysis.
8. **Owner-specific rules may exist.** A generic reader defers when an
   explicit owner rule is supplied; it does not invent, apply, or universally
   prohibit that rule.

## Deferred research questions

- the formal representation of owner-specific lifecycle operations;
- retired records, tombstones, and replacement metadata;
- field-slot target structure and field-value snapshot ownership;
- Dataset-level target ownership and profile capability representation;
- target-kind vocabulary;
- Validator severity and conformance rules; and
- the conditions under which a lifecycle operation may safely redirect or
  cascade within one Extension.

## Not adopted

- A sixth resolver state for `retired`, `owner-specific`, or
  `integrity-risk`.
- Universal rejection of all ID reuse without checking surviving references.
- Universal prohibition of owner-defined redirect or cascade semantics.
- Entity-only field-slot resolution.
- Treating the Dataset as a Core Object namespace target.
- Moving value snapshots into the common reference identity model.

## Verification

The isolated research harness now has 13 passing tests, including:

- unknown field identity classified as `unknown`;
- Event field-slot resolution without Entity hard-coding;
- a retained retired identity remaining `resolved` independently of a delete
  operation label;
- explicit owner-rule deferral; and
- evidence-dependent identity-reuse handling.

No Validator, NarrativeLine, Linkscape, Core, or Stable Extension behavior was
changed by this disposition.

## Next step

The next design task is to decide whether the conceptual fixtures need a
second bounded review focused on field-slot versus value-level assertion
ownership, or whether to proceed with the separate terminology-only History
clarification already identified by the architecture audit. No target-
reference Payload should be registered yet.
