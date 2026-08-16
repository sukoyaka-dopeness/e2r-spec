# Names Grouping Gate — Closure Options

Date: 2026-08-14

Status: Responsibility-level comparison closed on Option B; non-normative

| Option | Current evidence fit | Unresolved |
| --- | --- | --- |
| A. No stored grouping | Safe for derived display/search | Non-derivable family facts are lost |
| B. P1 + optional explicit grouping | Best fit for catalog-family evidence | Ownership and cross-application scope |
| C. P2/P3 identity layer | Not supported | Persistent binding consumer and historical value/version semantics |

## Disposition

Close the A/B/C responsibility comparison on Option B: P1 expression identity
plus optional explicit grouping. P1 remains the identity baseline. This is not
a payload or Extension decision. Grouping must
remain optional, explicit, non-equivalence, and independently preservable.

## Reopen condition

Reopen for Option C only if a consumer needs to persistently reference the
enduring Name-to-Entity binding itself, while the owning Entity, a P1
expression, and explicit grouping are inadequate targets. Historical
value/version ownership must also be demonstrated.

This closure does not adopt a grouping representation.

Grouping representation, cardinality, identifiers, vocabulary, migration,
validation, application writers, and final Names/Extension details remain
deferred.
