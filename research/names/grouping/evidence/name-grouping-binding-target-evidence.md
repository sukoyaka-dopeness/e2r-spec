# Names Grouping — Binding Target Consumer Evidence

Date: 2026-08-14

Status: Research evidence checkpoint; non-normative

## Question

Does any materially different consumer need to persistently target a stable
Name-to-Entity binding itself, rather than a concrete P1 expression or the
owning Entity?

## Candidate consumers

| Consumer | Persistent target needed | Current result |
| --- | --- | --- |
| Historical timeline | Exact expression | Binding target not shown necessary |
| Multilingual catalog export | Expression family/grouping fact | Binding target not shown necessary |
| Editorial alias-management queue | A mutable review relationship may be convenient | Requires evidence; not established |

The current evidence therefore does not justify P2/P3 promotion. A mutable
binding reference would also require explicit historical value/version
ownership before it could safely support old displays.

## Boundary

This checkpoint records a missing-evidence result, not a binding design. It does
not define binding IDs, update semantics, payload shape, or migration.

Fixture: `../../../../../../../examples/research/names/name-grouping-binding-target.json`
