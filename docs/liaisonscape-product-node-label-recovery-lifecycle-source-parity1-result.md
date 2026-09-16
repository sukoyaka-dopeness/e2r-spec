# LiaisonScape Product Node-label Recovery Lifecycle Source-Parity Experiment 1

Date: 2026-09-16

Status: `A QUALIFIED / SOURCE-PARITY ESTABLISHED IN TESTED ENVELOPE / PRODUCT ADOPTION NOT ESTABLISHED`

## Question and scope

This checkpoint verifies whether diagnostic Node-label recovery runs through
the normal Product presentation source and lifecycle boundaries. It is not a
new Initial Placement, routing, Parallel/Incident, endpoint-plan,
Relation-label, or Self-loop solver.

The checkpoint covers previous automatic Node-label snapshot creation, reuse,
reset, active/finalizing drag behavior, one bounded feedback pass,
Relation/route changes, manual Node-label authority, and stale previous input.
Dataset data, authored coordinates, persistence, dirty-state, Save Coordinates,
manual curvature, and manual Relation-label semantics remain outside the
change.

## Source grounding

The current Product source owns three lifecycle refs in `App`:

- `previousNodeLabelPlacements` for displayed automatic Node-label geometry;
- `previousEdgeLabelPlacements` for displayed Relation-label geometry;
- `previousAutomaticRoutes` for displayed automatic routes.

Presentation derivation reads these snapshots, derives the normal
`deriveBoundedAutomaticPresentation` pipeline, and the presentation effect
commits the displayed Node labels, Relation labels, and routes as the next
snapshots. Reset paths clear all three refs. Active Node dragging suppresses
historical input for the dragged Node while retaining the existing continuity
path for the rest of the graph; finalizing keeps the existing finalizing route
boundary.

The new recovery mode is development-only. It runs through the normal
`deriveBoundedAutomaticPresentation -> deriveAutomaticNodeLabels ->
stepAutomaticNodeLabelPlacement` path and is omitted by normal Product callers.
The tested formulation is lifecycle-based:

- first pass: continuity-only, avoiding first-display churn;
- feedback/final settled pass: recovery may select the fresh candidate only
  when continuity is hard-unsafe and fresh is hard-safe, or when both are
  hard-safe and fresh has a strict non-movement presentation gain;
- active dragged Node: recovery is suppressed;
- manual Node-label offset: manual geometry remains authoritative;
- after presentation: displayed output becomes the next previous snapshot.

This does not retune the existing movement coefficient (`distance * 4`) and
does not move route, Relation-label, endpoint-plan, or Self-loop authority.

## Reproducible experiment

Tool:

`e2r-liaison-scape/tools/product-node-label-recovery-lifecycle-source-parity1.ts`

Artifact:

`e2r-liaison-scape/experimental/product-node-label-recovery-lifecycle-source-parity1/result-summary.json`

The harness applies the same displayed-output commit boundary between derives
as the Product presentation effect. Each fixture runs:

`clean -> identical -> identicalStable -> active -> move -> finalized ->
relationChanged -> stableAfterRecovery -> stableAfterRecovery2 ->
stableAfterRecovery3 -> manual -> reset`

All five fixtures retain the bounded 32 Node-label candidates per Node:

| Fixture | Graph | Lifecycle result |
| --- | ---: | --- |
| `horizontal-label-capacity` | 3 Nodes / 4 Relations | stable; recovery and Relation-change controls pass |
| `high-degree-angular-capacity` | 8 / 7 | stable; hard-safe gating remains visible |
| `parallel-self-loop-control` | 8 / 11 | stable; Self-loop and Parallel remain outside recovery authority |
| `lighthouse-en` | 10 / 14 | stable; English text geometry remains Product-owned |
| `lighthouse-ja` | 10 / 14 | stable; Japanese text geometry remains Product-owned |

All recorded lifecycle controls pass: clean/identical stability,
active-drag suppression, Relation-change coverage, settled recovery stability,
no recovery oscillation, manual authority, and reset clearing previous input.

## Product-derived stale case

The primary stale input is the previous checkpoint's Product
`current-previous` output for `horizontal-label-capacity`, not a hand-written
rectangle. With source-parity lifecycle enabled, recovery triggers `3` times,
each Node retains `32` candidates, and the displayed recovered result exactly
becomes the next previous snapshot.

It does **not** byte-match the previous checkpoint's diagnostic
bounded-recovery output. The older arm recovered with feedback disabled; this
checkpoint preserves first-pass continuity and recovers only in the feedback/
final settled pass to match the normal Product lifecycle. This is a lifecycle
distinction, not evidence that a new scoring weight or movement retune is
needed.

## Responsibility and authority result

| Observation | Attribution |
| --- | --- |
| previous output changes only after the Product effect commits displayed geometry | Node-label snapshot lifecycle / Node-label selection |
| first pass retains continuity and settled feedback can recover | Node-label presentation lifecycle; not ordinary routing |
| active drag and finalizing remain bounded | existing App drag/finalization boundary |
| Relation-change input is consumed without moving route or Relation-label ownership | Product ordinary routing and Relation-label authority |
| manual offsets remain visible and win over automatic recovery | manual Node-label authority |
| reset empties previous snapshots without changing Dataset state | presentation-local reset |
| Self-loop and high-degree controls remain bounded | Self-loop and endpoint-plan authority remain separate |

No Dataset, stored/authored coordinate, persistence, dirty-state, or manual
semantic boundary moved. No prior Human Review evidence was reused.

## Actual Product smoke check

A small smoke check used the real Product `App` surface through the
development-only preview seam with the Product-derived previous seed. It
covered the primary horizontal fixture, high-degree endpoint fixture,
Parallel/Self-loop control, and Lighthouse English/Japanese controls.

The surfaces rendered their graphs, routes, Node labels, Relation labels, and
Self-loop where applicable. No obvious candidate-specific clipping, missing
association, or broken interaction surface was observed. Browser console
checks reported no warnings or errors on the inspected pages. Dense graphs
remain viewport-limited in the existing way; this smoke check is not visual
acceptance.

## Classification and next position

The evidence supports:

`A QUALIFIED / SOURCE-PARITY ESTABLISHED IN TESTED ENVELOPE`

The recovery behavior has a reproducible path through the normal Product
presentation source and tested snapshot lifecycle. The result is not a
production provider or Product adoption decision. The prior diagnostic output
and this source-parity output are not interchangeable because their pass
placement differs.

Standing decisions remain:

- Product default/adoption: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Human Review: `NOT READY`;
- Initial Layout Release blocker: `OPEN`;
- Parallel/Incident architecture: `CLOSED`;
- Adaptive Initial Placement Cascade: `NOT ENTERED`.

The next position is a bounded Product integration/feasibility checkpoint,
not adoption and not Adaptive Cascade. No new Human Review candidate exists
from this checkpoint.

## Validation

- recovery lifecycle artifact regenerated;
- focused lifecycle source-parity and prior hysteresis tests: `2/2` passed;
- LiaisonScape lint: passed;
- Actual Product smoke completed for primary, high-degree, Self-loop, and
  Lighthouse EN/JA controls;
- browser console smoke: no warnings/errors on inspected pages;
- full LiaisonScape test, production build, and E2R-SPEC validation run after
  this document and roadmap update;
- formal Human Review: not started.

## Changed files

LiaisonScape:

- `src/App.tsx`
- `src/graph-presentation.ts`
- `src/presentation-diagnostics.ts`
- `tools/product-node-label-recovery-lifecycle-source-parity1.ts`
- `tests/product-node-label-recovery-lifecycle-source-parity1.test.ts`
- `experimental/product-node-label-recovery-lifecycle-source-parity1/result-summary.json`
- `experimental/product-evaluation-seam/product-node-label-recovery-lifecycle-source-parity1/index.html`
- `experimental/product-evaluation-seam/product-node-label-recovery-lifecycle-source-parity1/main.tsx`

E2R specification:

- this checkpoint result document;
- `docs/roadmap.md`;
- `sessions/E2R-Session-0090.md`.

No reusable knowledge-base entry is added: this remains repository-scoped
checkpoint evidence and does not independently create a workspace decision.
