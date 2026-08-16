# P1 Name Expression Ownership — Review Disposition

Date: 2026-08-14

## Verdict

`accept with corrections`

The P1 boundary is accepted after narrowing lifecycle ownership, separating
outbound references from inbound targets, keeping context and external identity
unresolved, and explicitly separating Core `name` text from P1 identity.

## Accepted boundary

P1 owns stable expression identity, expression value, language/script metadata,
and identity continuity at substantive replacement. It references its owning
Object and may be targeted by separately owned applicability or epistemic
assertions.

P1 does not own lifecycle status, Core `name` semantics, naming-kind/context
vocabularies, external identity mapping, Grouping, generic temporal semantics,
presentation, or Claim/Evidence/Assessment/Provenance payloads.

Grouping selection remains deferred.
