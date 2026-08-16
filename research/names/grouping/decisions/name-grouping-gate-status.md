# Names Grouping Gate — Evidence Status

Date: 2026-08-14

Status: Responsibility-level comparison closed on Option B; representation work
deferred

## Current disposition

`continue B` is the final responsibility-level disposition. P1 expression
identity is the baseline, with optional explicit grouping for non-derivable
family facts. No P2/P3 promotion, grouping payload, Extension ID, or
application contract has been selected.

## Evidence matrix

| Checkpoint | Result | Implication |
| --- | --- | --- |
| Historical timeline | P1 strongest | Exact expression remains independently targetable |
| Multilingual catalog export | Two non-derivable families | P1 plus optional explicit grouping is a candidate |
| Overlapping rationales | One expression can join distinct families | Grouping must not be one equivalence class |
| Partial-support round-trip | Opaque grouping preserved | Unsupported readers can remain safe |
| Binding-target consumer | Evidence missing | P2/P3 promotion is not justified |

## Reopen condition

Reopen only for evidence of a persistent binding-target consumer for which the
Entity, P1 expression, and explicit grouping are inadequate. Any such promotion
must demonstrate historical value ownership and partial-support preservation.

## Test coverage

Closure alternatives are compared in `name-grouping-gate-closure-options.md`.

The following read-only harnesses cover the evidence checkpoints:

- `tools/name-grouping-second-workflow-harness.test.mjs`
- `tools/name-grouping-overlap-harness.test.mjs`
- `tools/name-grouping-partial-roundtrip-harness.test.mjs`
- `tools/name-grouping-binding-target-harness.test.mjs`
