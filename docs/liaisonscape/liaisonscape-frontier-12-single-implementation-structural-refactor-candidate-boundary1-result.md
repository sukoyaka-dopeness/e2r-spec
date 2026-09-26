# LiaisonScape Frontier-12 Shared Candidate Generator Structural Refactor / Parity Gate 1

Date: 2026-09-16

## Final classification

`COMPLETED: SHARED CANDIDATE BOUNDARY / PARITY GATE PASSED`

Architecture A remains canonical: Frontier owns a bounded structural
candidate set and Product owns downstream presentation selection. The
behavior-preserving structural refactor is complete; Frontier was not wired to
the normal App path and the production default remains `settleInitialPlacement`.

## Shared boundary

The single current implementation is:

`src/frontier-candidate-generator.ts::generateFrontierCandidateSet`

It accepts normalized plain data:

`{ nodes: { id }[], edges: { id, sourceId, targetId }[] }`

and explicit configuration for limit, feature mode, circular search bounds,
and grid search bounds. It returns a deterministic finite candidate set with
candidate positions, family, identity fingerprint, structural metadata,
representative ordering, and a `status`/structured `failure` result. Invalid
identifiers, invalid limits, and incomplete/non-finite generated positions fail
closed without exposing a partial candidate.

Frontier-specific order search, ellipse generation, seeded random sequence,
grid search, feature vectors, dominance, and farthest-point representative
selection no longer live as a private implementation in
`tools/generic-crossing-search.mjs`. The runner now supplies normalized graph
data and consumes the shared generator. Global spacing remains a runner-side
diagnostic transform. Product routing, Relation-label, Node-label, Self-loop,
eligibility, ranking, final canonicalization, viewport, and persistence remain
downstream responsibilities.

## Parity evidence

`tools/frontier-12-shared-candidate-generator-parity1.ts` replays the current
source into
`experimental/frontier-12-shared-candidate-generator-parity1/result.json`.
The replay covers 10 file-backed rows and 3 dense synthetic rows from the
reviewed sweep. Every row reported:

* `candidateStatus: completed`;
* repeated generator output byte-equivalent after JSON serialization;
* 12 representatives;
* exact reviewed selected family and final position fingerprint after the
  existing Product-authoritative selector and round-once canonicalization.

The Apollo EN candidate-set gate records 60 pool candidates, 5 frontier
candidates, the 12 representative identities in order, and digest
`578a2d12abb94a8d4f73ef181ed010ce4b5adea9f1a70486ac8f14aeddb1286b`.
The focused test retains this as a regression gate. The full 13-row replay
reports `candidateSetDeterminism: true` and `endToEndParity: true`.

The two custom constructors `label-heavy-ja-10` and
`parallel-self-loop-control` remain existing-sweep-only controls in this
artifact because their constructor code is private to the earlier sweep
runner. They were not silently treated as independently replayed. Their
existing reviewed artifact and coverage remain unchanged.

## Runtime characterization

The parity replay measures the shared generator separately from the child
runner's Product presentation profile. Across the 13 rows, candidate
generation was approximately 88–218 ms for ordinary controls and 1.22–2.24 s
for dense controls. Product presentation was separately reported at
approximately 163–405 ms for ordinary controls and 1.92–3.15 s for dense
controls. These are diagnostic measurements, not a main-thread, cooperative,
or Worker decision.

## Provenance

The replayable chain is:

`fixture file or synthetic:k input -> buildEntityGraph normalization -> shared Frontier generator -> candidate digest/representative order -> generic-crossing-search Product selector -> reviewed family/fingerprint`

The checkpoint artifact records the generator entry point, consumer, source
input normalization, explicit parameters, Frontier environment, reviewed
artifact reference, per-row candidate digest, deterministic replay result, and
separated timing. The source revision is the working tree based on the
recovered lineage revision `e7d6cbc`; a future committed revision should be
recorded when this checkpoint is committed.

## Remaining boundary

The normal App provider, operation identity, fallback/stale-result lifecycle,
and execution architecture remain future checkpoints. No Product authority
was moved, no quality retuning or crossing refinement was started, and Human
Review `QUALIFIED` was not reopened. The two private custom fixture
constructors are the remaining replay-coverage gap, not a solver or authority
blocker.
