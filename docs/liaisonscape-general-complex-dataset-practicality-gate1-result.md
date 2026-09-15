# LiaisonScape General / Complex Dataset Practicality Gate 1

Date: 2026-09-15

## Classification

`C. FAST INITIAL PLACEMENT PRACTICALITY ESTABLISHED / HQ PRACTICALITY AND
QUALITY NOT ESTABLISHED`

The current coordinate-less Fast path is bounded enough to open unknown-sized
datasets and provide an inspectable Product surface in the tested envelope.
The existing explicit Auto Layout action is not a release-quality High-quality
Auto Layout path: the diagnostic matrix retains topology and presentation
residuals, and the Actual Product smoke check produced obvious Node-body
overlap after the operation. The checkpoint therefore does not close the
Initial Layout Release blocker or authorize a provider, solver, default, or
Human Review.

## Scope and authority

This is a new release-gate objective following Representative Sample
Acceptance 2. It measures practical behavior for coordinate-less general and
complex datasets; it does not create a new Initial Placement solver.

The source boundary is deliberately narrow:

- Fast uses the current `settleInitialPlacement` path;
- HQ uses the existing explicit `solveAutoLayout` path with 12 iterations;
- both feed the current Product-authoritative presentation and quality metric
  code in a diagnostic-only benchmark;
- the Actual Product smoke uses the existing Product surface and its More ->
  Auto Layout action.

Dataset semantics, stored/authored Coordinates, persistence, dirty-state,
Save Coordinates, manual Node placement, manual curvature, manual
Relation-label semantics, ordinary routing, Parallel/Incident allocation,
endpoint-plan authority, final Relation-label placement, and Self-loop
authority were not changed. No quality solver or production provider was
adopted. Adaptive Initial Placement Cascade remains inactive.

## Fixed diagnostic matrix

The benchmark uses five deterministic coordinate-less controls:

| Control | Shape | Purpose |
| --- | --- | --- |
| `sparse` | 8 Nodes / 7 Relations | ordinary usable-start baseline |
| `dense` | 14 Nodes / 49 Relations | high relation density and crossing pressure |
| `long-label` | 10 Nodes / 20 Relations | long English/Japanese-shaped label demand |
| `connected` | 14 Nodes / 49 Relations | single connected high-coupling control |
| `parallel-self-loop` | 10 Nodes / 18 Relations | one Self-loop plus a three-Relation parallel group |

The 800 x 500 viewport and fit values are diagnostic camera observations, not
hard canvas bounds. Infinite-canvas extent is allowed. Each phase was measured
three times in the Node diagnostic runner; the reported `medianTotalMs` is not
a browser SLA.

## Source-faithful diagnostic evidence

| Control | Fast median | HQ median | Fast signals | HQ signals |
| --- | ---: | ---: | --- | --- |
| sparse | 12.7 ms | 14.2 ms | 0 overlaps / 0 crossings / 0 label hits | 0 / 0 / 0 |
| dense | 197.6 ms | 167.4 ms | 0 body overlaps / 41 crossings / 4 label-route hits | 4 body overlaps / 42 crossings / 12 label-route hits |
| long-label | 58.4 ms | 52.3 ms | 0 / 8 / 0, label overlap 0 | 2 / 0 / 4, label overlap 1 |
| connected | 191.9 ms | 182.4 ms | 0 / 72 / 13, label overlap 2 | 3 / 58 / 17, label overlap 2 |
| parallel-self-loop | 39.7 ms | 37.4 ms | 0 / 3 / 0 | 2 / 0 / 3 |

Placement itself remains sub-millisecond in all rows. The cost and quality
signals are dominated by Product presentation, route, and label work. The
results therefore do not support the idea that a slightly larger placement
iteration count is sufficient to make arbitrary complex datasets release
quality. In particular:

- Fast is finite and deterministic across all five controls, with no blank
  result in the diagnostic path and no body overlap in the synthetic Fast
  output;
- dense and connected cases retain substantial crossing and route/label
  pressure even when HQ reduces extent or crossing count;
- HQ can introduce Node-body overlap and label-route hits, so its quality
  direction is not monotonic;
- the parallel/Self-loop control does not show a catastrophic structural
  failure in this bounded run, but that is not evidence for the independent
  Self-loop track or for final Parallel presentation acceptance.

## Actual Product smoke

Before making a broader visual claim, the current Product surface was opened
with the development-only canonical Ashen Crown acceptance fixture in English:

`?acceptance-fixture=ashen-crown&acceptance-locale=en`

The coordinate-less Fast startup showed a stable 10-Entity / 17-visible-
Relation graph. The Product controls, native zoom, selection surface, and
navigation shell were present; no blank state, crash, navigation failure,
mojibake, or obvious Node-body overlap was observed. This is a small smoke
check, not formal acceptance.

The same surface then invoked the existing More -> Auto Layout action. The
operation completed and showed the existing temporary-coordinate message, but
the resulting graph had obvious central Node-body overlap and degraded local
route/label readability. This gross visual defect caused the visual inspection
to stop; no expensive visual evidence or Human Review candidate was produced.
The operation was not saved, and the browser was reloaded afterward.

This is stronger than a diagnostic-only failure attribution: the current
Product action itself is not presently suitable evidence for a several-second
HQ usability promise. It does not establish that a future bounded HQ
formulation is impossible; it establishes that the existing explicit action
cannot serve as that formulation without further bounded research.

## Practicality and release decision

Fast Initial Placement passes the narrow practical-start question in the
tested envelope: it is deterministic, finite, and immediately exposes a
usable Product graph for the inspected canonical coordinate-less sample. The
general/complex gate as a whole remains partial because the fallback path
needed for difficult datasets is not established:

- the current HQ action has a direct Actual Product smoke failure;
- Node/presentation metrics remain difficult-case dependent rather than
  bounded by a demonstrated product budget;
- the diagnostic runner is source-faithful but not a substitute for an
  adopted Product provider or visual acceptance;
- the results do not establish arbitrary-size coverage or a browser SLA.

The release disposition remains:

- quality solver: `HOLD / NOT ESTABLISHED`;
- production provider: `NOT ESTABLISHED`;
- Product integration/default: `HOLD`;
- Human Review: `NOT READY`;
- Adaptive Initial Placement Cascade: inactive;
- Initial Layout Release blocker: `OPEN`.

The next step is not another broad solver search, a scalar retune, or
Adaptive Cascade. If this gate is continued, it should first address the
bounded execution/quality contract for an explicit HQ operation and verify it
again on the Actual Product surface. A new provider or Product default still
requires separate evidence and authorization.

## Reproduction and changed artifacts

The diagnostic contract is
`GENERAL-COMPLEX-DATASET-PRACTICALITY-GATE1-v1`.

The LiaisonScape artifact is generated by:

```text
node --experimental-strip-types tools/general-complex-practicality-gate1.mjs
```

It writes the fixed matrix and measured rows to
`experimental/general-complex-practicality-gate1/result-summary.json`.

No knowledge candidate is added: this is a release-specific practicality
gate, not a reusable cross-repository principle. Session 0070 records the
checkpoint under the new objective file.
