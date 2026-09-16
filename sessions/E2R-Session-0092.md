# E2R Session 0092 — Product Node-label Recovery Dense / Browser Main-thread Feasibility Experiment 1

Date: 2026-09-16
Repository: `e2r-liaison-scape` plus synchronized E2R specification record

## Objective

Evaluate whether the production-shaped Node-label recovery integration remains
bounded on Product-shaped medium/large dense graphs and on the browser main
thread, while separating recovery decision cost, candidate materialization,
Node-label stage, full presentation derive, browser long tasks, and visible
Product smoke behavior.

This is a new objective after Session 0091, so it uses a new session file rather
than appending to the prior integration checkpoint.

## Work performed

- Added deterministic Product-shaped fixture generation for Lighthouse-ish,
  medium dense, large dense, high-degree-heavy, label-heavy EN/JA, and
  Parallel/Self-loop coexistence cases.
- Added source-faithful baseline versus `product-candidate` profiling with
  repeated settled probes, shifted recovery probes, candidate-row counters, and
  recovery fingerprint reuse checks.
- Added an actual Product preview seam with no diagnostic recovery props. The
  preview records Product timing sink events, profiler Node-label/Relation-label
  stage values, browser longtask and rAF gaps, a labelled DOM-mutation proxy,
  and recompute/relation-change controls.
- Performed Edge browser measurement and small Actual Product smoke checks.
- Stopped visual evidence after medium dense showed obvious long-Relation-label
  congestion; no formal Human Review or visual acceptance was attempted.

## Evidence and decision

Clean baseline/candidate presentation output was identical across the seven
source fixtures. Recovery comparison remained approximately 0.02–0.06 ms in
the source probes, while candidate rows scaled at 64 per Node across two passes.
The dominant cost was the full presentation pipeline: roughly 0.42–0.58 s
browser derives for medium/high-degree controls and 2.6–2.8 s for 28-node,
200-edge large dense. Observed browser longtasks/rAF gaps reached about 11 s
for large dense.

Recovery reuse was stable in the Lighthouse-ish, medium-dense, large-dense, and
label-heavy JA controls, but not stable in high-degree-heavy, label-heavy EN,
or Parallel/Self-loop controls. This remains a quality/lifecycle boundary and
is not changed in this session.

Classification:

- Overall: **F — browser feasibility not established**.
- Runtime attribution: **E — full presentation pipeline primary bottleneck**.
- Candidate materialization: not shown to be the primary bottleneck.
- Product default: `HOLD`.
- Production provider: `NOT ESTABLISHED`.
- Human Review: `NOT READY`.
- Initial Layout Release blocker: `OPEN`.
- Adaptive Cascade: `NOT ENTERED`.

## Validation and safety

The focused source/test/artifact validation and repository gates are reported in
the handoff for this session. No Dataset, persistence, saved/authored
coordinates, manual placement, routing, Relation-label, Self-loop, or Product
authority was changed. No Worker or cooperative scheduling implementation was
adopted. No unrelated dirty work was reset, stashed, deleted, or rewritten.

## Session-log policy

This file is intentionally new because the objective changed from integration
feasibility to dense/browser feasibility. Future work that remains within this
same objective may append here; a new objective receives a new session file.

## Closure update

The checkpoint was completed and recorded without changing any Product
authority. The actual Product smoke campaign reached `graph-stable` with zero
console errors for all seven controls. Medium dense showed visible long-label
congestion, so formal visual evidence and Human Review were intentionally not
started.

Validation completed after the source and browser artifacts were generated:

- LiaisonScape `npm test`: 577/577 passed;
- LiaisonScape `npm run lint`: passed;
- LiaisonScape `npm run build`: passed;
- E2R specification `npm run validate`: passed;
- both repository `git diff --check` gates: passed.

The owned changes were committed locally and remain unpushed:

- LiaisonScape `942f3f6` — `Add dense Node-label browser feasibility checkpoint`;
- e2r-spec `024fe35` — `Record dense Node-label browser feasibility checkpoint`.

Unrelated dirty work was preserved. At closure, the LiaisonScape worktree
still contained the pre-existing `tests/graph-presentation.test.ts` edit,
`.tmp-normal-offset-output.json`, and
`experimental/product-evaluation-seam/spacing-inspection2/`; the specification
worktree still contained the pre-existing `sessions/E2R-Session-0052.md` edit
and `work/`.

## Updated session-log granularity policy

Session logs are now grouped by a broader continuous objective rather than by
every bounded checkpoint. Checkpoints, experiments, validation results, and
small follow-up results that serve the same objective should be appended to the
same session file. A new session file is created only when the overarching
objective or responsibility boundary changes materially. This policy is
effective from the next objective onward; this file remains the consolidated
record for the dense/browser feasibility objective.
