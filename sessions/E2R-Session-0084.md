# E2R Session 0084

Objective: Product-Owned Bundle-Local Capacity + Cross-Bundle Feasibility
Experiment 1.

Started: 2026-09-16.
Status: `BUNDLE-LOCAL PROMISING / BOUNDED JOINT FEASIBILITY REQUIRED / NOT ADOPTED`.
Continuation file: This is a new objective after Session 0083. Follow-up work
on the same shared-endpoint and ordinary-route residual should append here.

## Work performed

- Added a development-only per-bundle spacing input while preserving the
  existing graph-wide scalar and normal Product path.
- Added bundle-local demand extraction based on directional multiplicity,
  reverse pairing, and Relation-label width.
- Ran bounded full-Product joint selection over current/fixed/demand-adjacent
  spacing options, with at most 42 combinations.
- Reused reverse, same-direction, higher-multiplicity, mixed-incident,
  Self-loop, and public Lighthouse controls.
- Added one shared-endpoint multiple-bundle control to expose coupling directly.
- Compared current, fixed 16, and selected bundle-local output on the Actual
  Product surface after Reset.

## Result

The selected maps are: primary `20/12`, higher multiplicity `16`, mixed
incident `24`, shared endpoint `16/16`, and Lighthouse `12`. Primary local
selection removes the previous ownership failures and preserves gamma/delta,
thereby avoiding the graph-wide spacing-20 regression. Higher multiplicity
falls back from requested 24 to 16 because 24 changes two ordinary routes;
selected 16 changes one. Mixed incident safely uses 24. Lighthouse uses 12
without public regression.

The shared-endpoint control retains one ownership residual at safe `16/16`.
Removing it with wider spacing slightly regresses the neighboring reverse
bundle. Therefore per-bundle demand is useful but independent optimization is
not sufficient; bounded joint Product feasibility remains required.

Actual Product smoke found traceable lanes and reverse arrows on primary,
preserved same-direction and Self-loop presentation, no unnatural mixed/public
ordinary detour, and no gross Lighthouse regression at 51% fit. The
higher-multiplicity changed ordinary route is visible and remains an open cost.
This smoke is not formal acceptance.

## Boundaries and next position

Outcome is `B. BUNDLE-LOCAL POLICY PROMISING / C. BOUNDED JOINT FEASIBILITY
REQUIRED`. Keep the candidate diagnostic. Do not adopt a route default or
provider, reopen Parallel/Incident architecture, change Structural Placement,
change Self-loop/viewport behavior, introduce local relaxation, or open Human
Review. Product default remains `HOLD`, provider `NOT ESTABLISHED`, Human Review
`NOT READY`, and the Initial Layout Release blocker `OPEN`.

If this objective continues, append here and isolate whether the shared-endpoint
ownership residual and higher-multiplicity ordinary churn can be improved by a
more explicit Product-owned joint contract. Do not mix in relaxation yet.

## Validation

- diagnostic artifact regenerated from current source;
- LiaisonScape lint and production build passed;
- 78 focused routing/policy/artifact/architecture tests passed;
- full LiaisonScape suite passed: 553 tests, 0 failures;
- e2r-spec `npm run validate` passed;
- Actual Product current/fixed/local Reset smoke completed for primary,
  shared-endpoint, mixed-incident, higher-multiplicity, and Lighthouse views;
- both repository diffs passed `git diff --check`.
