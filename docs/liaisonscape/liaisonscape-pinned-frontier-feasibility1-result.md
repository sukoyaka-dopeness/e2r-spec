# LiaisonScape Pinned Frontier Feasibility 1

Date: 2026-09-17
Contract: `E2R-LIAISONSCAPE-PINNED-FRONTIER-FEASIBILITY-1`
Classification: **C. PINNED FRONTIER HARD CONSTRAINT ESTABLISHED / PRODUCT QUALITY INSUFFICIENT ON DENSE CONTROL; EXPLICIT AUTO LAYOUT QUALITY GATE REMAINS OPEN**

## Scope

This was a diagnostic-only experiment. It did not change the production App,
the Initial Automatic Display provider, Dataset or Coordinate persistence,
dirty-state, routing, labels, Self-loop semantics, or the accepted Frontier
Human Review result.

The experiment asks whether a pinned operation can be represented as a real
constraint-aware candidate computation and then evaluated by the existing
Product presentation stage. It does not claim that the pinned diagnostic
construction is the reviewed Frontier-12 lineage or a production solver.

## Boundary and ownership

The replay boundary is:

```text
graph + complete finite initialPositions
  + fixedAnchors[id] = { x, y, source: "saved" | "staged" }
  + serializable Product presentation snapshot
→ bounded candidate generation
→ Product-owned routing / Relation-label / Node-label / Self-loop evaluation
→ deterministic ranking and final finite positions
```

The experimental source is
`e2r-liaison-scape/experimental/pinned-frontier-feasibility1/core.ts`.
`generatePinnedFrontierCandidateSet` validates a complete finite input,
installs fixed anchors before movable-node relaxation, and never includes an
anchor in translation, scaling, or relaxation. Final validation requires exact
coordinate equality for every fixed anchor. The all-pinned case returns a
finite unchanged anchor map; the one-movable case exercises the same contract.

For the no-pin case, the experiment delegates to the current shared
`src/frontier-candidate-generator.ts::generateFrontierCandidateSet` and uses
the existing Product selection/finalization shape. For pinned cases, the
bounded `anchor-aware-relaxation-v1` construction is explicitly diagnostic;
it is not presented as a recovered Frontier-12 algorithm.

The presentation snapshot is plain data and includes, where present:

- ordinary edge curve offsets;
- Self-loop overrides;
- previous Node-label and Relation-label placements;
- manual Node-label offsets and Relation-label anchors; and
- previous automatic routes.

The snapshot is consumed by
`src/graph-presentation.ts::deriveBoundedAutomaticPresentation`. This keeps
Product routing, label placement, Self-loop presentation, and previous-state
feedback outside the Frontier candidate generator while making the dependency
serializable for a future operation boundary.

## Matrix and evidence

The replay tool is
`e2r-liaison-scape/tools/pinned-frontier-feasibility1.mjs`; its output is
`e2r-liaison-scape/experimental/pinned-frontier-feasibility1/result-summary.json`.
It covers:

| Fixture | Shape | Pin cases |
| --- | ---: | --- |
| Apollo 11 EN | 9 Nodes / 11 Relations | no pins, one saved, few mixed, many mixed, one movable, all pinned |
| dense-k7-7 | 7 Nodes / 21 Relations | no pins, one saved, few mixed, many mixed, one movable, all pinned |
| parallel-self-loop-control | 5 Nodes / 7 Relations, one Self-loop and one parallel pair | no pins, one saved, few mixed, many mixed, one movable, all pinned |

All rows produced complete finite selected maps, preserved every fixed anchor
exactly, and passed `structuredClone`. Saved and staged source values were
carried as provenance and did not change constraint strength. The three
fixtures were deterministic under repeated direct execution. The actual
Node Worker transport was exercised for the one-saved case of each fixture;
each emitted `started` and `completed` with matching operation, generation, and
snapshot identity, and passed the same result validator.

No-pin parity against the accepted Frontier/Product Worker core passed for all
three fixtures, including representative identities and selected position
fingerprints. The Product snapshot was non-empty for every fixture and its
fingerprint was carried through the worker envelope.

Product metrics are diagnostic, not a replacement for visual acceptance. With
the non-empty snapshot, Apollo and the parallel/self-loop control retained
zero crossings in most pin cases, while dense-k7-7 retained 23--29 routed
crossings in every case. This is evidence that the constraint and Product
snapshot boundaries execute; it is also a direct quality counterexample to a
general Explicit Auto Layout release claim. The parallel/self-loop one-movable
case also showed a crossing, so the control does not establish joint quality
under every anchor arrangement.

Representative median timings, using three in-process repetitions after the
fixture was loaded, were:

| Fixture | Candidate generation | Product presentation evaluation |
| --- | ---: | ---: |
| Apollo 11 EN | 0.35 ms | 65.97 ms |
| dense-k7-7 | 0.38 ms | 165.27 ms |
| parallel/self-loop | 0.16 ms | 37.78 ms |

These timings exclude fixture I/O, process startup, artifact writing, and
React rendering. They characterize the diagnostic boundary only; they do not
choose main-thread, cooperative, or Worker execution policy.

## Executable provenance

At generation time the application repository was at
`3c383c67c8e3c599be9de7f99d6785261e147479` plus the current diagnostic
working-tree additions. Reproduction is:

```text
cd e2r-liaison-scape
node --experimental-strip-types tools/pinned-frontier-feasibility1.mjs
node --experimental-strip-types --test tests/pinned-frontier-feasibility.test.ts
```

The executable chain is therefore:

```text
normalized graph / finite anchors / Product snapshot
→ pinned-frontier-feasibility1/core.ts
→ Product deriveBoundedAutomaticPresentation and quality metrics
→ worker.mjs transport and validator
→ result-summary.json
```

The existing no-pin chain remains the current shared Frontier generator and
accepted Worker/Product core. A pinned production solver lineage does not yet
exist; the diagnostic anchor-aware construction must not be silently promoted
to that lineage.

## Decision

Hard pinned-coordinate preservation, serializability, deterministic bounded
output, Product snapshot consumption, and a Worker transport seam are
established. Product quality is not established for the dense control, and
the one-movable parallel/self-loop case is not universally clean. Explicit
Auto Layout therefore remains an active release-quality gap.

The next implementation may define a separate Explicit Auto Layout operation
boundary around this evidence, but it must still decide the proposal versus
direct-adoption contract, manual presentation authority, and quality gate. No
production wiring, Pin reader/writer, Save Coordinates change, or Human Review
reopening is authorized by this result.
