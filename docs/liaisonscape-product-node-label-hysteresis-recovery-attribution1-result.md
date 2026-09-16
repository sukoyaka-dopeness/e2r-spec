# LiaisonScape Product Node-label Hysteresis / Recovery Attribution Experiment 1

Date: 2026-09-16

Status: `A QUALIFIED FOR CONTINUED BOUNDED NODE-LABEL RESEARCH / PRODUCTION NOT ESTABLISHED`

## Question

This checkpoint isolated the residual effect of previous automatic Node-label
placement after the preceding Relation-presentation-first angular escape
experiment. It did not introduce a new Initial Placement, Structural
Placement, routing, Parallel/Incident, endpoint-plan, Self-loop, or
Relation-label solver.

The source-level questions were:

- does the existing movement cost, rather than a fresh presentation signal,
  explain the repeated `fresh outside / previous inward` behavior;
- can a bounded recovery rule retain continuity when it is safe while allowing
  a fresh candidate to recover a clear presentation gain or a hard conflict;
- are the lifecycle boundaries for active drag, finalizing drag, feedback, and
  previous-placement reuse already explicit enough to test without moving
  authority between Product stages;
- can the evidence remain bounded on canonical, dense, high-degree, Self-loop,
  and English/Japanese Lighthouse controls.

## Source grounding

The current Product source was inspected before instrumentation:

- `placementMovementCost(candidate, previous)` is the existing Euclidean
  label-center distance multiplied by `4`;
- `placeNodeLabel` already evaluates `32` candidates and includes occupied
  labels, other Nodes, routed paths, yielding routes, cardinal preference,
  and previous-placement cost;
- `App` retains `previousNodeLabelPlacements` after each presentation effect;
- the active Node drag suppresses previous input for the actively dragged Node;
- the finalizing pass clears active drag state while preserving the existing
  bounded finalization path;
- feedback is at most one bounded follow-up pass;
- Node-label state is not Dataset state and is not serialized.

The source diagnostic trace now exposes, for each candidate, fresh score/rank,
continuity rank, previous-candidate identity, selected identity, movement cost,
route hard/halo pressure, yielding-route pressure, angular terms, hard-safe
classification, and split Relation-label/previous-Node-label overlap. The
trace is additive: omitting the diagnostic sink leaves the existing Product
selection unchanged.

The Actual Product preview adds only development-only inputs for a previous
automatic Node-label snapshot, a final Node-label diagnostic override, and a
hysteresis ablation. Normal Product callers do not provide these inputs.

## Arms and provenance

The reproducible artifact is:

`e2r-liaison-scape/experimental/product-node-label-hysteresis-recovery-attribution1/result-summary.json`

The arms are:

- `current-fresh`: current Product scorer without previous placement;
- `current-previous`: current Product scorer with the prior checkpoint's
  Product `current-previous` Node-label output as the previous snapshot;
- `hysteresis-ablation`: the same previous input is provided but the movement
  term is omitted diagnostically, so it is fresh-equivalent;
- `bounded-recovery`: continuity is the default, but the fresh candidate is
  selected when it is hard-safe and strictly improves the existing
  non-movement presentation score, or when continuity selection is hard-unsafe
  and fresh selection is hard-safe;
- `drag-active`: the existing active-drag rule suppresses previous input for
  the actively dragged Node;
- `drag-finalized`: the bounded recovery comparison is evaluated after the
  active state has ended.

The primary previous snapshot is not a hand-written inward rectangle. It is
the previous checkpoint's Product scorer output. A fixed Relation-label
rectangle perturbation remains in the artifact as a negative-control/fallback
path; it did not change candidate ranking in this fixture set. Relation routes
and Relation-label rectangles are held fixed across the arms.

The recovery rule is diagnostic-only. No arbitrary new scalar weight, movement
coefficient retune, production default, or provider adoption was made.

## Evidence

| Fixture | recovery triggers | current-previous changed Nodes | ablation changed Nodes | recovery changed Nodes | previous mean connector | recovery mean connector |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| horizontal-label-capacity | 3 | 3 | 0 | 0 | 60.95 | 56.16 |
| vertical-label-capacity | 3 | 3 | 0 | 0 | 64.67 | 50.00 |
| diagonal-label-capacity | 4 | 4 | 0 | 0 | 63.85 | 50.00 |
| high-degree-angular-capacity | 8 | 8 | 0 | 0 | 79.17 | 53.56 |
| dense-angular-capacity | 5 | 5 | 0 | 0 | 65.48 | 52.80 |
| parallel-self-loop-control | 8 | 8 | 0 | 0 | 60.63 | 50.00 |
| lighthouse-en | 8 | 8 | 0 | 0 | 97.18 | 90.90 |
| lighthouse-ja | 9 | 10 | 0 | 0 | 96.24 | 71.57 |

All Nodes retained `32` candidates in every arm. Across all eight fixtures:

- `current-previous` changed direction for at least one Node in every fixture;
- `hysteresis-ablation` exactly matched `current-fresh`;
- `bounded-recovery` matched `current-fresh` in the recorded final labels;
- recovery included both fresh-gain triggers and hard-conflict triggers;
- repeated identical-input recovery was stable in every fixture;
- no `A -> B -> A -> B` oscillation was observed;
- Relation routes and Relation-label rectangles stayed fixed;
- Relation-label overlap and foreign-route collision stayed zero in the final
  recovery metrics;
- no Dataset, coordinate, persistence, dirty-state, or manual placement input
  was changed.

This is strong attribution evidence that the tested residual is the
previous-placement continuity term, not a missing angular occupancy signal or
a new route/label authority. It is not a claim that every future
Node-label lifecycle is solved: the prior snapshot is a bounded prior
checkpoint output, and the recovery rule has not been adopted into the normal
Product provider.

## Responsibility attribution

| Observation | Attribution |
| --- | --- |
| fresh and ablation outputs agree across all controls | Node-label placement's existing non-movement scorer is the relevant fresh baseline |
| previous output changes directions on every fixture family | Node-label previous-placement lifecycle and movement cost are the primary tested residual |
| bounded recovery returns the fresh labels without route changes | recovery belongs at the Node-label selection/lifecycle boundary, not ordinary routing or Relation-label placement |
| hard-conflict recovery appears in high-degree and Lighthouse controls | endpoint/route pressure is consumed as an existing placement signal; route and endpoint-plan authority remains outside this checkpoint |
| Self-loop fixture remains unchanged except for Node-label arm comparison | Self-loop routing remains an independent closed responsibility |
| English/Japanese controls remain finite and readable in smoke | text geometry and Product presentation remain authoritative; no label wrap or semantic change was introduced |

## Actual Product smoke check

A small Actual Product smoke was performed through the real Product `App`
surface using the development-only preview seam. It covered:

- horizontal primary `bounded-recovery` and `current-previous`;
- high-degree synthetic `bounded-recovery`;
- the Parallel/Self-loop control;
- Lighthouse English and Japanese `bounded-recovery`.

The primary continuity and recovery surfaces rendered the same graph and
Relation presentation with different Node-label placements; no obvious
clipping or broken association was seen. The high-degree graph rendered with
its central hub and incident Relations visible. The Self-loop control retained
its self-loop and parallel Relations. English and Japanese Lighthouse labels
rendered on the Actual Product surface. Fresh console checks for these pages
reported no warnings or errors.

The high-degree and Lighthouse surfaces remain dense and viewport-limited in
the existing way. This smoke check is diagnostic only; it is not visual
acceptance and does not create a Human Review candidate.

## Classification and next position

The checkpoint is classified:

`A QUALIFIED FOR CONTINUED BOUNDED NODE-LABEL RESEARCH / PRODUCTION NOT ESTABLISHED`

The evidence supports continuing with a bounded, source-parity Node-label
recovery/lifecycle checkpoint: retain continuity by default, but make recovery
semantically explicit for a hard conflict or a clearly better fresh
presentation candidate. This is a formulation direction, not a production
provider decision.

The result does not justify:

- zeroing or retuning the production movement coefficient;
- moving routing, final Relation-label placement, endpoint-plan, or Self-loop
  authority into Structural Placement;
- entering Adaptive Initial Placement Cascade;
- formally adopting Fast Initial Placement plus High-quality Auto Layout;
- Human Review or Product default adoption.

Standing status remains:

- Product default/adoption: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Human Review: `NOT READY`;
- Initial Layout Release blocker: `OPEN`;
- Parallel/Incident architecture: `CLOSED`;
- Adaptive Initial Placement Cascade: `NOT ENTERED`.

## Validation

- recovery diagnostic tool regenerated the artifact;
- focused hysteresis/angular tests: `5/5` passed;
- LiaisonScape lint: passed;
- LiaisonScape production build: passed;
- Actual Product smoke: completed for primary, high-degree, Self-loop, and
  Lighthouse EN/JA controls;
- browser console smoke: no warnings/errors on inspected pages;
- formal Human Review: not started.

## Changed files

LiaisonScape:

- `src/viewport.ts`
- `src/App.tsx`
- `tools/product-node-label-hysteresis-recovery-attribution1.ts`
- `tests/product-node-label-hysteresis-recovery-attribution1.test.ts`
- `experimental/product-node-label-hysteresis-recovery-attribution1/result-summary.json`
- `experimental/product-evaluation-seam/product-node-label-hysteresis-recovery-attribution1/index.html`
- `experimental/product-evaluation-seam/product-node-label-hysteresis-recovery-attribution1/main.tsx`

E2R specification:

- this checkpoint result document;
- `docs/roadmap.md`;
- `sessions/E2R-Session-0089.md`.

No reusable knowledge-base entry was added: this remains repository-scoped
checkpoint evidence and does not independently justify a workspace decision.
