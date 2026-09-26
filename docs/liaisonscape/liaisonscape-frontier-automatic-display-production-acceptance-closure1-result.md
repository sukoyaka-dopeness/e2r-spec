# LiaisonScape Frontier Automatic Display Production Acceptance / Closure 1

Date: 2026-09-16

## Acceptance result

**PASS — PRODUCTION ACCEPTED / SOURCE-LEVEL ADOPTION CLOSED / ROLLOUT DEFERRED**

The normal coordinate-less Dataset-open path is accepted as:

```text
Frontier async Automatic Display
+ settleInitialPlacement immediate usable fallback
+ accepted Pending / Cancel UX
```

This is a source-level adoption closure only. No deploy, release, or public
rollout was performed.

## Accepted production contract

For a coordinate-less Dataset, the App publishes `settleInitialPlacement`
first, then starts the existing Worker operation using the shared Frontier-12
candidate generator and Product-owned presentation evaluation/selection.
Pending status, Cancel, and Graph-only provisional treatment are shown while
the operation is current. Only a current complete finite result is adopted
into render-only positions and viewport fit. Success clears the affordance
without a success banner.

Cancel, Worker construction/runtime failure, invalid or incomplete result,
non-finite result, stale delivery, replacement, relevant mutation, workspace
exit, and unmount cannot publish partial or late positions. The fallback remains
the visible layout. Stored and mixed/partial Coordinates bypass Frontier and
retain their existing authority.

Frontier does not own Product routing, Relation-label, Node-label, Self-loop,
viewport, manual placement, Dataset, persistence, Save Coordinates, or
dirty-state semantics.

## Acceptance evidence

The replayable acceptance artifact is
`../e2r-liaison-scape/experimental/frontier-automatic-display-production-acceptance-closure1/result.json`.

The normal URL browser matrix covered:

- Lighthouse EN as the ordinary coordinate-less success control;
- Apollo EN as the ordinary topology/label control;
- Titanic EN as the slower/label-heavy control;
- Titanic JA and Ashen Crown JA as locale controls.

All five runs entered `started`, exposed the expected pending state where
observed, reached `completed`, removed terminal success UI and provisional
Graph styling, and reported zero console errors. The pending status used
`role=status` and `aria-live=polite`; Cancel was a native enabled,
keyboard-reachable button. The status and viewport toolbar were disjoint after
the previously recorded bounded layout fix.

Deterministic focused tests remain authoritative for Cancel-before-completion,
stale/late-result rejection, replacement/mutation invalidation, stored/mixed
Coordinate bypass, invalid output, Worker failure, and Worker construction
failure. Full application tests passed without lifecycle failures.

## Provenance and residual boundaries

The accepted current-source chain is:

```text
normalized Dataset input
-> shared Frontier candidate generator
-> Worker Product evaluation/selection
-> App async lifecycle adapter
-> normal-path render-only adoption
-> acceptance evidence
```

The source-level production adoption is now closed. The remaining separate
work is deployment/public rollout authorization and any operational monitoring
policy. The existing Human Review `QUALIFIED` residuals, ordinary crossing
follow-up, and dense runtime/congestion boundary remain accepted/deferred and
were not reopened.
