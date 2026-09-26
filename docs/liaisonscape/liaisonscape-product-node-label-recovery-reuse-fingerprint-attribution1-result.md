# LiaisonScape Product Node-label Recovery Reuse Fingerprint Attribution 1

Date: 2026-09-16
Status: bounded diagnostic checkpoint; Product adoption remains HOLD

## Scope

This checkpoint attributes repeated recovery-fingerprint changes in the dense
browser-feasibility campaign. It does not change Node-label recovery semantics,
the `distance * 4` movement coefficient, routing or label authority, Product
defaults, persistence, or execution architecture.

## Source-parity audit

The current Product `App.tsx` commits all three derived presentation snapshots
after presentation: `previousNodeLabelPlacements`,
`previousEdgeLabelPlacements`, and `previousAutomaticRoutes`. The next
`deriveBoundedAutomaticPresentation` call passes all three snapshots. The
prior dense source harness passed the current Node snapshot but reset Relation
label history and omitted automatic-route history on every repeated derive.
That prior reuse arm was therefore not Actual Product snapshot parity.

The new diagnostic tool is:

`e2r-liaison-scape/tools/product-node-label-recovery-reuse-fingerprint-attribution1.ts`

It compares `node-only` with `product-snapshots`, where the latter rolls
forward all three snapshots after every shifted derive. It retains bounded
hashes of route, Relation-label, Node-label, output, and recovery traces so the
campaign does not retain the full dense trace graph in memory.

## Results

The first divergence in the source-parity arm is upstream of Node-label
recovery: route trace hashes change first, followed by Relation-label hashes,
then Node-label hashes and the final output. This is visible even in controls
that were stable under the Node-only arm. The full Product snapshot arm has
multiple states for Lighthouse, medium dense, large dense, high-degree,
label-heavy EN/JA, and Parallel/Self-loop; the difficult fixtures show the
strongest non-settling behavior.

The Node-only arm reproduces the previous harness shape: high-degree and
Parallel/Self-loop remain multi-state, while label-heavy EN has two states.
However, this arm cannot establish a Node-label-only cause because its route
and Relation-label inputs are intentionally not the inputs retained by the
Actual Product.

The evidence therefore separates three findings:

1. The old dense reuse result was partly an experiment artifact: it was not
   source-parity for Product snapshot lifecycle.
2. The current Product source does not show a Node-label snapshot lifecycle
   omission or an isolated recovery-state bug in this checkpoint.
3. With source-parity snapshots, instability begins in route reuse and
   propagates through Relation-label placement and then Node-label recovery.
   This is a broader Product presentation settling / feedback-order behavior,
   not a Node-label recovery-only attribution.

The route snapshot is a genuine Product input: `previousAutomaticRoutes` is
used by route selection, while Relation-label history is used by the
Relation-label stage. Thus the all-three arm is the authoritative lifecycle
arm for this question. Its non-convergence is a quality/lifecycle residual,
not proof that any one authority should be moved or redesigned.

## Classification

`B/C COMBINED: PRIOR HARNESS PARITY ARTIFACT CONFIRMED / BROADER PRODUCT PRESENTATION SETTLING BEHAVIOR OPEN`

Node-label recovery semantics remain unchanged and are not classified as the
primary cause. No production change is justified by this checkpoint. The next
bounded investigation, if desired, should minimize the route-history-induced
cycle and compare pass-order or feedback-state provenance, without changing
authority ownership.

Product default/adoption remains `HOLD`, production provider remains `NOT
ESTABLISHED`, Human Review remains `NOT READY`, Adaptive Cascade remains
inactive, and the Initial Layout Release blocker remains `OPEN`.

## Reproducibility and validation

- Diagnostic source artifact:
  `e2r-liaison-scape/experimental/product-node-label-recovery-reuse-fingerprint-attribution1.json`
- Repro command:
  `node --experimental-strip-types tools/product-node-label-recovery-reuse-fingerprint-attribution1.ts`
- Focused source checks: LiaisonScape `npm test`, `npm run lint`, and `npm run build`
- Specification checks: `npm run validate`, `git diff --check`
