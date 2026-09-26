# LiaisonScape Initial-Layout Product Adoption Design 1

Date: 2026-09-11

Status: DESIGN ESTABLISHED; RUNTIME INTEGRATION NOT YET AUTHORIZED

## Purpose

This document defines the authority boundary required to move
`post-structural-relaxation-v1` from a diagnostic candidate toward a possible
Product initial-placement implementation. It does not itself change the
LiaisonScape runtime, public samples, stored Coordinates, or governed
evidence.

The cross-fixture and cross-locale Actual Product observations support the
candidate as the strongest bounded research result. They do not make its
fixture-specific materialized coordinates a universal placement authority.

## Current authority model

The current Product opening path has three intentionally different cases:

| Case | Current authority | Ownership/state |
| --- | --- | --- |
| Stored coordinates for all relevant Entities | Dataset Coordinate extension, read by `getStoredCoordinates()` | user/Dataset-owned; opening does not replace them |
| Mixed stored and missing coordinates | existing `placeInitialEntities()` completion path | derived completion around stored input; adoption semantics remain separate |
| Coordinate-less Dataset | `settleInitialPlacement()` in `src/auto-layout.ts` | transient Derived placement; Save Coordinates is an explicit user action |

`post-structural-relaxation-v1` is not currently one of these authorities. Its
implementation is in the diagnostic `tools/generic-crossing-search.mjs`, and
the comparison surface injects its result into an in-memory clone. It is a
research materializer, not a generic runtime service.

## Adoption design

If adopted later, the Product boundary should be:

```text
Dataset acceptance
  -> coordinate authority classification
  -> generic derived initial-placement provider
  -> bounded presentation-independent placement result
  -> existing routing/label/fit pipeline
  -> transient Derived graph state
  -> explicit user Save Coordinates for persistence
```

The provider must accept arbitrary Dataset topology and locale-resolved text
metadata without reading or writing stored Coordinates. It must return only
derived positions plus diagnostics/quality status. It must not alter routing,
Relation-label placement, Node-label placement, drag behavior, feedback, or
Dataset replacement safety.

The provider must have a deterministic bounded budget. If the budget, input
validity, or quality gate is not met, it must fall back to the current
`settleInitialPlacement()` result rather than partially applying a candidate.
Fallback selection must be observable and must not mark the Dataset dirty.

Locale handling is input-scoped: EN and JA may produce different derived
positions when text geometry is intentionally part of the provider input, but
coordinates must never be copied across locales. Locale must not change the
meaning of stored Coordinate ownership.

## Required runtime contract

A future implementation should expose a small application-level contract
equivalent to:

```text
deriveInitialPlacement({ graph, locale, viewportBudget, timeBudget })
  -> { positions, provider, status, diagnostics }
```

Required properties:

- pure with respect to Dataset and stored Coordinate data;
- deterministic for the same graph, locale, algorithm version, and budget;
- no persistence and no `coordinatesDirty` mutation;
- complete position coverage or an explicit fallback status;
- hard Node-body non-overlap and finite-coordinate checks;
- bounded work and a deterministic current-solver fallback;
- versioned provider identity for later reproducibility;
- tests for stored, mixed, coordinate-less, locale-switched, and replacement
  flows.

The candidate's current diagnostic search does not yet satisfy this contract:
it is coupled to a fixture-oriented search/materialization path and lacks a
generic runtime budget and fallback authority.

## Adoption gates

Runtime integration may begin only after all gates below pass:

1. **Generic authority:** the algorithm is implemented as an application
   runtime provider, not as public-sample coordinate maps or a diagnostic-only
   tool.
2. **Equivalence boundary:** stored coordinates remain authoritative; mixed
   and coordinate-less behavior is explicitly specified and tested.
3. **Safety gate:** arbitrary representative topologies satisfy finite
   coordinates, body clearance, complete coverage, and no Dataset mutation.
4. **Budget gate:** small, medium, and stress fixtures have measured bounded
   time and memory behavior with deterministic fallback.
5. **Locale gate:** EN/JA and changed text lengths are tested without
   cross-locale coordinate reuse.
6. **UX/ownership gate:** derived placement does not create dirty state;
   intentional drag plus Save remains the only persistence path.
7. **Presentation attribution gate:** routing, labels, Self-loops, curve
   crossings, and parallel-Edge side behavior are measured separately and
   are not silently claimed as layout improvements.
8. **Actual Product gate:** representative coordinate-less samples are
   inspected after runtime integration, including a fallback case.

Only after these gates should a separate explicit adoption checkpoint decide
whether to replace the current coordinate-less provider.

## Decision

```text
cross-fixture user evidence       = POSITIVE / BOUNDED
candidate research status         = STRONGEST OBSERVED CANDIDATE
adoption authority                = NOT YET ESTABLISHED
runtime integration               = NOT STARTED
Product adoption                  = HOLD
current Product behavior          = UNCHANGED
```

The design does not authorize a public-sample-specific switch, a coordinate
map embedded in Product, or an immediate port of the diagnostic search. The
next implementation checkpoint, if explicitly authorized, is a bounded
runtime-provider prototype plus the gates above—not direct adoption.

## Preservation

- Stored Coordinate authority and Save Coordinates semantics: unchanged.
- Dataset replacement and dirty-state safety: unchanged.
- Routing, labels, drag, Self-loop, crossing, and parallel-Edge tracks:
  separate and unchanged.
- Fresh10/Fresh11/Fresh12 evidence and Fresh12 canonical Human Review:
  unchanged.
- New governed Fresh lineage: NOT STARTED.
- Push, tag, release, deploy, and publication: NOT PERFORMED.
