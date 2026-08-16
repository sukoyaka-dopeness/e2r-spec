# P1 Name Expression — Evidence Status

Date: 2026-08-14

## Accepted checkpoints

- P1 identity and preservation: accepted conceptual harness;
- independent exact Entity discovery: accepted conceptual harness;
- independent exact P1 Entity discovery through the NarrativeLine application
  data boundary: accepted research-only integration evidence;
- Names-unaware opaque serializer round-trip: accepted Linkscape research-only
  integration evidence, including an unrelated Core edit, reload, and second
  save;
- NarrativeLine production import/export opaque P1 save/load preservation,
  including an unrelated Core edit, reload, and second export: accepted
  research-only integration evidence;
- NarrativeLine pre-classified P1 lifecycle observation, including supplied
  replacement and old-reference non-retargeting: accepted research-only
  integration evidence;
- NarrativeLine integration Go/No-Go criteria: accepted, research-only; no
  implementation authorization.

## Not demonstrated

- real search index or ranking behavior;
- NarrativeLine production lifecycle integration;
- general lifecycle model, classification algorithm, and production lifecycle
  service;
- Names writer behavior;
- retirement, deletion, restoration, redirect, merge, split, cascade, and
  migration;
- transliteration or identity equivalence;
- preferred display or Grouping behavior.

## Current boundaries

P1 identity remains independent and Grouping selection remains `defer
selection`. No final Payload, Extension ID, or application writer follows from
these checkpoints. The accepted serializer evidence is recorded in
`name-expression-p1-linkscape-roundtrip-evidence.md` and is limited to
Linkscape as a Names-unaware consumer. The accepted NarrativeLine discovery
evidence is recorded in
`name-expression-p1-narrativeline-exact-discovery-evidence.md` and is limited
to exact discovery through the imported Dataset boundary.
The accepted NarrativeLine opaque preservation evidence is recorded in
`name-expression-p1-narrativeline-opaque-roundtrip-evidence.md`.
The accepted NarrativeLine lifecycle evidence is recorded in
`name-expression-p1-narrativeline-lifecycle-evidence.md` and is limited to
pre-classified operations observed through the bounded research adapter.
