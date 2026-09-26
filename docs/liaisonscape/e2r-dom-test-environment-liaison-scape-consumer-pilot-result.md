# E2R DOM Test Environment LiaisonScape Consumer Pilot

- Date: 2026-08-30
- Status: `PILOT PARTIAL — CONSUMER COMPATIBLE, DISTRIBUTION DECISION PENDING`
- Model used: Current Codex model; assessment was performed as a bounded local consumer experiment.

## Scope and baseline

This pilot evaluated whether the local pre-release package
`@sukoyaka-dopeness/e2r-dom-test-environment@0.1.0-alpha.0` can replace
LiaisonScape's current `tests/helpers/dom-test-environment.ts`. The real
LiaisonScape, package source, package metadata, `e2r-test-utils`, and protected
knowledge-base files were not changed.

The local package is a small framework-neutral DOM/global lifecycle utility.
Its public API exports `createDomTestEnvironment`, with `url`, `globals`,
`window`, `document`, `installGlobal`, `addCleanup`, and idempotent asynchronous
LIFO `cleanup`. It is not a React/Vite fixture package. The package tarball
contains `dist`, `README.md`, and `LICENSE`; it is not yet published.

## Consumer experiment

An isolated temporary clone of LiaisonScape was used. Its helper was replaced
by a two-export thin adapter to the package, and the direct LiaisonScape
`jsdom` devDependency was removed in that temporary clone. No permanent
consumer migration was attempted.

| Check | Result |
| --- | --- |
| Package build | PASS |
| Package tests | PASS, 2/2 |
| Package tarball dry-run | PASS |
| Consumer helper API/type compatibility | PASS |
| Consumer lint | PASS |
| Consumer build | PASS |
| Consumer full test command | PARTIAL: 268/277 passed; 9 failures were missing e2r-spec fixture paths in the isolated clone, not DOM-environment failures |

The consumer test run also emitted a non-fatal WebSocket port-in-use message.
The relevant DOM-backed tests executed successfully. The nine failures were
`ENOENT` errors for fixtures normally reached outside the LiaisonScape clone.

## Semantic parity

| Responsibility | Assessment |
| --- | --- |
| DOM construction and URL | Compatible; the package default URL matches the current helper |
| Default globals | Compatible; the current helper's defaults are covered |
| Additional globals | Compatible via `globals` |
| Global descriptor restoration | Package behavior is retained and more explicitly tested |
| Cleanup ordering/errors | Compatible; package provides awaited LIFO cleanup and aggregation |
| Consumer ownership | Compatible; consumer keeps the helper path as a thin adapter |
| Framework/application fixtures | Intentionally out of scope |

## Decision

The package is technically consumable by LiaisonScape and can remove the
consumer's direct `jsdom` dependency when installed from a legitimate package
source. The pilot does not authorize permanent LiaisonScape edits because the
package is still local/pre-release and not publicly published. A workspace
dependency or publication/distribution decision is required before migration.

Next bounded step: decide the legitimate distribution source, then repeat the
consumer gate with the same thin adapter and fixture-aware test setup. Do not
start App/UI integration, change `e2r-test-utils`, publish, push, or deploy as
a consequence of this pilot.

## Repository impact

Only this e2r-spec result document is part of the checkpoint. The result is
recorded locally and remains unpushed.
