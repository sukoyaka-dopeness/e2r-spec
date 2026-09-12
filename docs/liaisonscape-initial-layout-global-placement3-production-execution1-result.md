# LiaisonScape Initial Layout Global Placement 3 Production Execution / Runtime

Date: 2026-09-13

## Decision

```text
Production-capable execution path             = NOT ESTABLISHED
Checkpoint disposition                        = BLOCKED
Product default adoption                     = HOLD / MORE EVIDENCE REQUIRED
Product default behavior                     = UNCHANGED
Initial Layout Release blocker               = OPEN
Stage 1 full-presentation reduction           = NEXT RESEARCH DIRECTION; NOT STARTED
```

The visual and Product-semantic evidence remains positive, but this checkpoint
could not establish a production-capable Global Placement 3 provider without
introducing a new, unvalidated runtime architecture. No default or adoption
change was made.

## Actual execution boundary

The actual LiaisonScape application is a Vite-built static client. Global
Placement 3 currently exists as a development-only acceptance seam:

1. `vite.config.ts` reads a canonical fixture from the sibling E2R-SPEC
   repository;
2. it launches `tools/generic-crossing-search.mjs` in a Node child process;
3. it returns the selected positions through `__acceptance-layouts`; and
4. a DEV-gated App query passes those positions into the normal `open` path.

That is sufficient for bounded Product inspection, but it is not a provider
that an ordinary production Dataset open can execute. The production build
contains no acceptance endpoint or fixture payload, and the repository's
deployment model provides no server-side search service. The diagnostic script
also executes a large search/presentation implementation with Node-only file
and process dependencies; it is not a browser provider contract or Worker
module.

Therefore the development endpoint cannot simply be enabled in production.
Porting the diagnostic search wholesale would cross the previously rejected
runtime boundary and would not be a minimal safety-preserving adoption step.
Replacing it with a cheaper transform over the current Product placement would
be a different algorithm and would not inherit Global Placement 3's human
acceptance.

## Runtime and scaling evidence

The bounded diagnostic arm was remeasured with viewport-anisotropic placement
(`x=0.88`, `y=1.12`), Stage 2 bypass, round-once finalization, and finalist
limit 2. These are diagnostic execution measurements, not production
benchmarks.

| Case | Nodes / edges | Total elapsed | Stage 1 wall | Stage 2 wall | Full presentation evaluations |
| --- | ---: | ---: | ---: | ---: | ---: |
| Lighthouse EN | 10 / 14 | 1.072 s | 1.029 s | 0.042 s | 46 |
| Lighthouse JA | 10 / 14 | 1.061 s | 1.024 s | 0.037 s | 46 |
| Titanic EN | 13 / 12 | 1.019 s | 0.972 s | 0.046 s | 46 |
| Titanic JA | 13 / 12 | 0.996 s | 0.960 s | 0.035 s | 46 |
| Apollo EN | 9 / 11 | 0.897 s | 0.867 s | 0.029 s | 62 |
| Apollo JA | 9 / 11 | 0.929 s | 0.879 s | 0.050 s | 62 |
| Synthetic K3-3 control | 6 / 9 | 0.288 s | 0.287 s | 0.001 s | 24 |

The dominant measured cost is Stage 1 structural/grid candidate generation
and its authoritative presentation evaluations, not adaptive planning or
Product viewport fitting. In the canonical runs, presentation computation was
approximately 0.69-0.95 seconds. The public canonical set only reaches 13
nodes; scaling beyond that size and arbitrary external Dataset behavior remain
unqualified for the candidate.

These measurements do not establish a production latency target, because the
candidate is not executing inside the production client and the benchmark
does not include a production Worker/service transport, browser scheduling,
failure timeout, or larger Dataset scaling.

## Failure and fallback safety

The existing development seam fails closed: missing, failed, or incomplete
layout responses leave the ordinary `open` path to use current Product
placement. The integration guard admits a candidate only for coordinate-less
graphs with complete finite positions. Stored and mixed Coordinates remain on
their existing authorities, and the existing tests/evidence continue to cover
clean Derived placement, dirty-state, Save Coordinates, and same-payload
reopen semantics.

This is safety evidence for the opt-in seam, not evidence that a future
production Worker or service will have equivalent cancellation, timeout,
memory, or partial-result behavior. Those contracts must be designed and
tested before adoption.

## Adoption and next research direction

The runtime finding is both an open Release blocker and an adoption-readiness
gap: exposing this candidate as default would require an unproven production
execution path for ordinary coordinate-less Datasets. The hold is not caused
by the accepted visual result, stored/mixed authority, or downstream
presentation ownership.

The next appropriate bounded work is to define and benchmark a production
execution boundary, likely together with Stage 1 full-presentation reduction
or another search-volume reduction. It should produce a browser-capable or
explicitly service-backed provider with bounded cancellation and whole-result
fallback before any default change is reconsidered. This checkpoint did not
implement that architecture or reduction.

## Preserved boundaries and validation

- Product default/adoption, canonical samples, round-once semantics, stored /
  mixed authority, persistence, dirty-state, and Save Coordinates were not
  changed.
- Routing, Relation-label, Node-label, Self-loop, connector, glyph, and CSS
  authority remain downstream Product responsibilities.
- Historical Fresh evidence, Fresh12 canonical Human Review, and unrelated
  dirty work were preserved.
- No push, tag, release, deploy, or publication was performed.
- No LiaisonScape source or test file was changed in this checkpoint.
- Existing LiaisonScape validation remains 372/372 tests PASS with lint,
  production build, and diff check PASS.
- E2R-SPEC `npm run validate` and `git diff --check` pass.
