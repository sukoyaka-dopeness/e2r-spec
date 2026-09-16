# LiaisonScape Product Node-label Recovery Integration / Feasibility Experiment 1

Date: 2026-09-16

Status: `C. INTEGRATION ESTABLISHED / PERFORMANCE BOUNDARY REMAINS`

## Question and scope

This checkpoint takes the bounded recovery behavior from the lifecycle
source-parity checkpoint and places it inside the normal Product presentation
path as a production-shaped, development-only candidate. It does not adopt a
Product default, establish a production provider, or start Human Review.

The question is whether the existing continuity, drag, feedback, manual
authority, and boundedness semantics survive the smallest normal Product
integration, and what recomputation cost that integration adds.

Dataset bytes, serialization, import/export, stored/authored Coordinates,
dirty-state, Save Coordinates, manual Node-label offsets, manual
Relation-label anchors, manual curvature, ordinary routing, Parallel/Incident,
endpoint-plan, Relation-label placement, Self-loop routing, Structural
Placement, Initial Placement, and Auto Layout remain outside the change.

## Integration boundary

The candidate is activated only by the development URL switch:

`?node-label-recovery=candidate`

The switch is guarded by `import.meta.env.DEV`. The normal `App` caller does
not pass a Node-label recovery prop, a previous-label override, or a
diagnostic feedback override. When the switch is absent, the existing Product
path remains unchanged. When it is present, `App` uses its ordinary
`previousNodeLabelPlacements` ref and ordinary feedback policy, then passes
the internal `product-candidate` mode through:

`deriveBoundedAutomaticPresentation -> deriveAutomaticNodeLabels ->
stepAutomaticNodeLabelPlacement`

This keeps recovery within Node-label selection/lifecycle responsibility. No
authority moved to routing, Parallel/Incident, endpoint-plan, Relation-label,
Self-loop, Structural Placement, Initial Placement, or Auto Layout.

The formulation is unchanged from the source-parity checkpoint:

- first pass is continuity-only;
- settled feedback recovers only from a hard-unsafe continuity choice to a
  hard-safe fresh choice, or for a strict fresh non-movement presentation gain;
- active dragged Node recovery is suppressed;
- manual Node-label geometry remains authoritative;
- the displayed result becomes the next previous snapshot;
- the existing `distance * 4` movement coefficient is unchanged.

## Reproducible artifact and fixtures

Tool:

`e2r-liaison-scape/tools/product-node-label-recovery-integration1.ts`

Artifact:

`e2r-liaison-scape/experimental/product-node-label-recovery-integration1/result-summary.json`

The five-fixture sequence is the same bounded lifecycle sequence used by the
source-parity checkpoint: clean, identical, stable identical, active drag,
move, finalizing, Relation presentation change, three stable post-recovery
derives, manual offset, and reset.

| Fixture | Recovery observations | Result |
| --- | ---: | --- |
| horizontal primary | 3 | lifecycle controls pass; stale case recovers |
| high-degree | 1 | lifecycle controls pass; hard-safe gate remains visible |
| Parallel / Self-loop | 3 | lifecycle controls pass; Self-loop remains separate |
| Lighthouse EN | 1 | lifecycle controls pass; English geometry remains stable |
| Lighthouse JA | 1 | lifecycle controls pass; Japanese geometry remains stable |

Across all fixtures:

- clean/identical stability passes;
- active-drag recovery suppression passes;
- Relation-change feedback is observed;
- settled recovery is stable across repeated derives;
- no recovery oscillation is observed;
- manual offsets remain authoritative;
- reset clears previous input;
- every Node retains the bounded 32-candidate set;
- recovered settled output converges to the same fingerprint as the baseline
  after the recovery boundary.

## Product-derived stale case

The primary stale input is the previous Product `current-previous` output for
the horizontal fixture. In the integrated candidate path it produces 3
recoveries, retains 32 candidates per Node, and the recovered output becomes
the next previous snapshot. No diagnostic previous-label override is used by
the integration candidate itself.

## Performance and recomputation evidence

The tool compares the existing baseline and the `product-candidate` mode on
the same source inputs. The comparison is source/runtime evidence, not a
browser SLA.

- Node-label candidate evaluation delta is `0` for clean, settled, and stale
  cases on all five fixtures. The recovery mode does not rescore a second set
  of 32 candidates.
- Recovery comparison work is small in the measured Node process: at most
  `0.0126 ms` median per measured presentation case.
- Additional measured Node-label stage time is at most `0.7895 ms` median in
  the tested fixture set.
- The largest measured full derive median is approximately `28.1 ms` on the
  Lighthouse EN case. This is an observed source-process value, not a browser
  responsiveness guarantee.
- Candidate rows are still materialized for the bounded selection comparison
  on each candidate-mode pass. That allocation/recomputation boundary has not
  been demonstrated on larger dense graphs or under the browser's actual main
  thread scheduler.

The evidence therefore supports a production-shaped candidate integration,
but not a claim that the cost is production-safe for all graph sizes. This is
why the checkpoint is classified `C`, not as Product adoption readiness.

## Lifecycle and regression result

Normal lifecycle behavior remained intact:

- initial open and stable rerender use continuity without first-pass churn;
- active drag suppresses recovery for the actively dragged Node;
- drag finalization does not snap back to the stale previous placement;
- settled feedback can recover and the following derive retains the recovered
  placement;
- Relation presentation change is consumed by the existing Product path;
- manual Node-label offset is not overwritten by recovery and is not confused
  with the automatic previous snapshot;
- reset clears presentation-local snapshots without changing Dataset state;
- route and Relation-label fingerprints remain owned by their existing stages;
- Self-loop and Parallel geometry remain visible and unchanged in the smoke
  controls;
- EN and JA text geometry use the existing Product text path.

No production default, stored coordinate, persistence, dirty-state, or manual
semantic behavior was changed.

## Actual Product smoke check

A small smoke check used the actual Product `App` surface through the new
integration preview seam. The preview did not pass
`diagnosticNodeLabelRecoveryEnabled`, `diagnosticPreviousNodeLabelPlacements`,
or `diagnosticFeedbackEnabled`; it activated only the normal development URL
switch.

The following candidate URLs were inspected:

- horizontal primary;
- high-degree endpoint control;
- Parallel/Self-loop control;
- Lighthouse EN;
- Lighthouse JA.

The graph, routes, labels, and Self-loop rendered without an obvious
candidate-specific break. The Japanese page settled to the correct graph
after navigation; browser console checks on all inspected pages reported no
warnings or errors. Dense Lighthouse and high-degree views remain
viewport-limited as in the existing Product surface. This smoke check is not
formal visual acceptance and produces no Human Review candidate.

## Classification and next position

`C. INTEGRATION ESTABLISHED / PERFORMANCE / RECOMPUTATION BOUNDARY REMAINS`

The source integration point is production-shaped and the lifecycle semantics
survive the normal caller path in the tested envelope. The remaining boundary
is not a recovery-quality failure: candidate rows are materialized on every
candidate-mode pass, the measured cost is nonzero, and no larger dense/browser
main-thread envelope has been established.

Next position: a bounded performance/recomputation feasibility checkpoint for
larger and denser Product-shaped inputs. Do not advance to Product adoption,
production provider finalization, Human Review, Adaptive Initial Placement
Cascade, or release acceptance from this result.

Standing status remains:

- Product default/adoption: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Human Review: `NOT READY`;
- Initial Layout Release blocker: `OPEN`;
- Parallel/Incident architecture: `CLOSED`;
- Adaptive Initial Placement Cascade: `NOT ENTERED`.

## Validation

- integration artifact regenerated;
- focused integration and source-parity tests: `2/2` passed;
- LiaisonScape lint: passed;
- Actual Product smoke completed on all five controls;
- browser console smoke: no warnings/errors on inspected pages;
- full LiaisonScape test, build, and E2R-SPEC validation run after document
  updates;
- formal Human Review: not started.

## Changed files

LiaisonScape:

- `src/App.tsx`
- `src/graph-presentation.ts`
- `src/viewport.ts`
- `tools/product-node-label-recovery-integration1.ts`
- `tests/product-node-label-recovery-integration1.test.ts`
- `experimental/product-node-label-recovery-integration1/result-summary.json`
- `experimental/product-evaluation-seam/product-node-label-recovery-integration1/index.html`
- `experimental/product-evaluation-seam/product-node-label-recovery-integration1/main.tsx`

E2R specification:

- this checkpoint result document;
- `docs/roadmap.md`;
- `sessions/E2R-Session-0091.md`.

No reusable knowledge-base entry is added: this remains repository-scoped
checkpoint evidence and does not independently create a workspace decision.
