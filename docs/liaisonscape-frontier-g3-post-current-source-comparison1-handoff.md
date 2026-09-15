# LiaisonScape Frontier vs G3 vs Post Current-Source Actual Product Comparison 1

Date: 2026-09-15
Status: `READY FOR USER VISUAL COMPARISON / WAITING FOR USER JUDGMENT`

## Purpose

This bounded checkpoint compares the current-source Frontier, G3, and Post
materializations on identical fixture rows. It asks whether the geometry
differences that remain after the preceding Structural Placement work produce
a meaningful difference on the Actual Product surface.

This is a comparison handoff, not a new solver, acceptance result, provider,
Product default, or Human Review candidate. The Fast/current
`settleInitialPlacement()` path is excluded from the visual winner comparison.

## Review surface

The development-only seam is available while the LiaisonScape development
server is running:

`http://127.0.0.1:5174/e2r-liaison-scape/experimental/product-evaluation-seam/frontier-g3-post-current-source-comparison1/`

Use `?fixture=<fixture>&candidate=frontier|g3|post` with these fixture values:

```text
lighthouse-en
lighthouse-ja
apollo-en
apollo-ja
titanic-en
label-heavy-ja-10
dense-k7-7
```

The companion evidence index contains exact machine summaries and the
candidate-by-candidate Actual Product observation index:

[`visual-evidence-index.md`](https://github.com/sukoyaka-dopeness/e2r-liaison-scape/blob/main/experimental/product-evaluation-seam/frontier-g3-post-current-source-comparison1/visual-evidence-index.md)

The machine artifact is:

[`result-summary.json`](https://github.com/sukoyaka-dopeness/e2r-liaison-scape/blob/main/experimental/frontier-g3-post-current-source-comparison1/result-summary.json)

## How to judge

For each candidate, inspect the initial frame, Product `Reset view` / fit, and
local zoom where needed. Initial clipping alone is not a defect if Reset
recovers the graph. Judge the same surface-level questions across candidates:

- Node separation and physical-side ordering;
- ordinary route crossing and churn;
- Parallel / reverse-side behavior where present;
- Relation-label clearance and ownership association;
- Node-label readability and long English/Japanese labels;
- endpoint angular pressure and shared/multi-bundle behavior;
- whether the graph feels trustworthy at overview and local scale.

Record a small judgment using `FRONTIER`, `G3`, `POST`, `ROUGHLY EQUAL`, or
`NONE GOOD`. Codex must not infer the final winner from machine metrics alone.

## Current evidence before user judgment

- G3 is selected with the same fingerprint as Frontier on Lighthouse,
  Apollo, and Titanic. It therefore supplies no distinct visual geometry on
  those rows; its extra evaluation/search work is not a Product-quality win.
- Post produces a different, generally more horizontally compact geometry on
  the public rows. Lighthouse and Apollo were easier to inspect at Reset in
  the smoke check, but central route/Relation-label association residuals
  remain. Titanic still needs local zoom.
- The Japanese long-label control is not solved by Post: the larger view still
  has visibly competing long Node/Relation labels and corridor ownership.
- Dense `k7-7` selects the same `grid-structural` geometry for G3 and Post.
  All three candidates retain high crossing/repeated-label pressure and are not
  release-readable at overview scale.
- The machine record reports zero Product crossing metrics for the public rows,
  but this does not prove Relation-label ownership or visual readability.

These are Codex smoke observations only. They do not fill the user judgment
field and do not create Human Review evidence.

## Authority and safety boundary

The comparison keeps Product authority unchanged. Ordinary routing,
Parallel/Incident allocation, endpoint-plan, final Relation-label placement,
Node-label placement, Self-loop routing, viewport/camera,
styling/interaction, Dataset lifecycle, persistence, Save Coordinates, and
manual placement remain Product responsibilities. Candidate preview is
read-only, non-adopting, and disposable.

Do not add a new solver, retune spacing/capacity/scoring, alter routing or
label authority, change viewport policy, adopt a provider, or write an
acceptance result before user judgment. Do not reuse this comparison as
Human Review evidence.

Standing statuses remain: Gate 2 `OPEN`, quality solver `HOLD / NOT
ESTABLISHED`, production provider `NOT ESTABLISHED`, Product
integration/default `HOLD`, Human Review `NOT READY`, Adaptive Cascade
inactive, and Initial Layout Release blocker `OPEN`.

## Stop point

This checkpoint stops after the user comparison. The next technical direction
must be selected from the recorded judgment. If the result is `NONE GOOD` or
`ROUGHLY EQUAL`, do not silently expand the solver or declare a Product
winner; record the residual responsibility and choose the next bounded
checkpoint explicitly.
