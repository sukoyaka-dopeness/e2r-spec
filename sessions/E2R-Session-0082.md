# E2R Session 0082

Objective: Product Presentation Local Spacing + Parallel/Label/Self-loop
Refinement Experiment 1.

Checkpoint: preserve the current broad Node topology while testing bounded
Product-owned presentation refinements for local spacing, Parallel lanes,
Relation-label association, Self-loop direction, and viewport framing.

Started: 2026-09-16.
Status: `DIAGNOSTIC RESULT / LOCAL PRODUCT ROUTE DIRECTION PROMISING / SELF-LOOP AND HUMAN REVIEW NOT READY`.
Continuation file: This is a new objective after Session 0081; future work on
the same bounded checkpoint should append here.

## Work performed

- Read the current Product route, Relation-label, Self-loop, and viewport
  source before changing anything.
- Reused the materialized Frontier-12
  `parallel-self-loop-control` positions as the control.
- Added a diagnostic-only bounded alpha/beta local-spacing comparison at
  1.15x and 1.30x pair distance without changing Node IDs, broad ordering,
  gamma/delta, or the epsilon incident cluster.
- Compared current routing with the existing development-only `bundle-16`,
  `pair-16`, and `corridor-aware-16` Product presentation inputs.
- Probed twelve Self-loop angle/radius overrides only as diagnostic geometry;
  no override was adopted.
- Added a reproducible read-only Product preview seam for current, local
  spacing, and widened-bundle comparisons.
- Performed a small Actual Product smoke check before treating the route
  direction as useful evidence, including the real Product Reset view.

## Evidence summary

Current alpha/beta distance is 173 source units. The normal Product route
policy retains the previously observed effective 1:3 physical-side result.
With the same Node geometry, `bundle-16` produces 2:2, increases forward
endpoint angular separation from 0.866 to 1.149 radians, removes the measured
ownership ambiguity, and preserves zero crossings and zero final route
conflicts. The median route length rises from 112.77 to 116.24 and aggregate
ownership margin falls, so this is a bounded direction with a real trade-off,
not a winner.

Local spacing alone increases alpha/beta to 198.95 or 224.90 units. The 1.15x
probe reaches 2:2 under the normal policy but reduces endpoint angular
separation and leaves an ownership ambiguity; the 1.30x probe increases extent
and ambiguity. It is not sufficient as a standalone refinement.

The Self-loop selector chose the upper preferred orientation exactly. The
source explains this through its preferred-angle seed and weak preference
penalty; manual right/down/left probes were constructible but are not evidence
of automatic selection. The actual Product smoke showed the Self-loop still
above epsilon while ordinary incident edges remained usable.

Reset view centered the graph at 100% in the actual Product surface for the
control and widened-bundle candidate. The initial preview's smaller/left-biased
appearance is kept as a viewport initialization/framing observation; no fix
was adopted.

## Authority and standing statuses

Structural Placement still owns derived Node geometry. Product still owns
ordinary and Parallel/reverse routing, endpoint attachment, final Relation-label
placement, Node-label placement, Self-loop routing, viewport/camera,
interaction, persistence, and Save Coordinates. Parallel/Incident architecture
remains closed; no endpoint-plan or Incident allocator was reopened.

Product default/adoption remains `HOLD`, production provider remains `NOT
ESTABLISHED`, quality solver remains `HOLD / NOT ESTABLISHED`, Human Review
remains `NOT READY`, and the Initial Layout Release blocker remains `OPEN`.
Adaptive Initial Placement Cascade was not started.

## Files and validation

LiaisonScape owned changes:

- `tools/product-presentation-local-spacing-parallel-label-self-loop-refinement1.ts`
- `experimental/product-presentation-local-spacing-parallel-label-self-loop-refinement1/result-summary.json`
- `experimental/product-presentation-local-spacing-parallel-label-self-loop-refinement1/visual-evidence-index.md`
- `experimental/product-evaluation-seam/product-presentation-local-spacing-parallel-label-self-loop-refinement1/index.html`
- `experimental/product-evaluation-seam/product-presentation-local-spacing-parallel-label-self-loop-refinement1/main.tsx`
- `tests/product-presentation-local-spacing-parallel-label-self-loop-refinement1.test.ts`

E2R-SPEC owned changes:

- this session log;
- the checkpoint result document;
- the roadmap entry.

Validation completed: diagnostic artifact generation, LiaisonScape lint,
artifact inspection, `git diff --check`, and Actual Product current/refined
Reset smoke. No historical result document was rewritten. Existing unrelated
dirty work was preserved. No push, tag, release, deploy, publish, reset,
stash, clean, rebase, squash, or amend was performed.

## Next position

Keep the result as a Product presentation diagnostic direction, not a new
placement solver or adopted route policy. If continued, test the widened
Product route policy against simple Parallel, reverse Parallel, mixed incident,
Self-loop coexistence, and long-label controls with fresh Actual Product smoke.
Keep Self-loop angular capacity and any viewport correction as separate bounded
tracks. Do not open Human Review or adopt a Product default from this result.
