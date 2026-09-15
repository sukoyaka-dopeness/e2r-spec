# E2R Session 0083

Objective: Product-Owned Parallel Bundle + Relation-Label Ownership
Generalization Experiment 1.

Checkpoint: determine whether the widened Parallel presentation direction from
Session 0082 generalizes across reverse Parallel, same-direction Parallel,
higher multiplicity, mixed incident, and a public Product sample.

Started: 2026-09-16.
Status: `DIAGNOSTIC RESULT / WIDENED PRODUCT DIRECTION GENERALIZES QUALIFIED / GRAPH-WIDE ADAPTIVE POLICY REJECTED`.
Continuation file: This is a new objective after Session 0082; follow-up work
on bundle-local capacity should append here.

## Work performed

- Audited the current `bundle-16`, `pair-16`, and `corridor-aware-16` inputs
  against the current route source. They are equivalent on the primary
  control, but their concepts are not assumed equivalent generally.
- Added a dev-only `product-owned-adaptive-bundle-v1` policy using bounded
  non-Self-loop multiplicity, reverse-direction pairing, and Parallel label
  width signals.
- Kept all Node geometry and ordering fixed.
- Evaluated the existing primary control, a five-Relation bundle, a mixed
  incident control, and public Lighthouse EN.
- Added owner-route, nearest-foreign-route, ownership-margin, and
  foreign-closer label diagnostics.
- Added a read-only Actual Product seam and inspected current versus fixed
  widened views for the primary, mixed incident, and public controls. The
  primary surface also supplies the same-direction gamma/delta control.

## Evidence summary

Fixed `bundle-16` improved primary alpha/beta from side `3:1` to `2:2`,
increased endpoint angular separation `0.157` to `1.149` under the new
all-route metric, and reduced foreign-closer labels and ownership ambiguity
from `1` to `0`, with zero crossings, final conflicts, label overlap, Node
collision, and ordinary churn. Gamma/delta remained balanced and widened from
lane separation `54.80` to `76.70`.

The higher-multiplicity control improved ownership ambiguity `3` to `0`; the
mixed incident control improved ambiguity `2` to `1`; Lighthouse lane
separation improved `44.88` to `62.84` with no public-row ownership or route
regression. The higher-multiplicity fixed candidate changed one ordinary route,
so the direction has a clear coupling cost.

The adaptive graph-wide policy exposed the boundary: it selected spacing 20
for the primary graph and caused gamma/delta to collapse to same-side `2:0`.
Higher multiplicity selected 24 and changed two ordinary routes. This rejects a
single graph-wide adaptive scalar and points to bundle-local capacity or a
cross-bundle feasibility check as the next formulation.

## Authority and standing statuses

Structural Placement still owns derived Node geometry. Product still owns
ordinary routing, Parallel/reverse routing, endpoint attachment, final
Relation-label placement, Node-label placement, Self-loop routing, viewport,
interaction, persistence, and Save Coordinates. Parallel/Incident architecture
remains closed; endpoint-plan and Incident allocator authority were not
reopened.

Self-loop selector, viewport policy, Product defaults, production provider,
Initial Placement, Auto Layout portfolio, and Adaptive Initial Placement
Cascade were not changed or adopted. Human Review remains `NOT READY`, Product
default/adoption remains `HOLD`, production provider remains `NOT ESTABLISHED`,
and the Initial Layout Release blocker remains `OPEN`.

Local relaxation was deliberately not introduced so the widened bundle signal
remains separately attributable.

## Files and validation

LiaisonScape owned changes:

- `src/product-parallel-bundle-policy.ts`
- `src/App.tsx` (dev-only `adaptive-bundle` preview input)
- `experimental/product-owned-parallel-bundle-generalization1/fixtures.mjs`
- `experimental/product-owned-parallel-bundle-generalization1/result-summary.json`
- `experimental/product-owned-parallel-bundle-generalization1/visual-evidence-index.md`
- `tools/product-owned-parallel-bundle-generalization1.ts`
- `experimental/product-evaluation-seam/product-owned-parallel-bundle-generalization1/index.html`
- `experimental/product-evaluation-seam/product-owned-parallel-bundle-generalization1/main.tsx`
- `tests/product-owned-parallel-bundle-policy.test.ts`
- `tests/product-owned-parallel-bundle-generalization1.test.ts`

E2R-SPEC owned changes:

- this session log;
- the checkpoint result document;
- the roadmap entry.

Validation completed: generalized artifact generation, focused route/policy/
artifact tests, Actual Product smoke, and source inspection. Full lint/build,
relevant/full tests, and `git diff --check` remain required before commit.
Unrelated dirty work was preserved and no push or history rewrite was done.

## Next position

Do not adopt fixed 16 or graph-wide adaptive spacing as a Product default. The
next bounded direction, if continued, is a bundle-local policy with explicit
cross-bundle ordinary-route and label-ownership feasibility checks. Keep local
relaxation, Self-loop refinement, viewport policy, and Structural Placement
research separate.
