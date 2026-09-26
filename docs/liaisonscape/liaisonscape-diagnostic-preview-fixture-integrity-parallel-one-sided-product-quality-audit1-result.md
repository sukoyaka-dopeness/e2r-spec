# LiaisonScape Diagnostic Preview Fixture Integrity + Parallel One-Sided Product Quality Audit 1

Date: 2026-09-16
Status: `DIAGNOSTIC RESULT / FIXTURE INTEGRITY RESTORED / PARALLEL RESIDUAL CLASSIFIED`

## Purpose

This bounded checkpoint has two parts: restore the integrity of the Japanese
synthetic fixture used by the Cross-Family portfolio preview, and audit the
reported one-sided Parallel presentation on the same Actual Product surface.
It does not retune the portfolio selector, add a solver, change Initial
Placement, reopen Parallel/Incident architecture, or move Product authority.

## Fixture integrity finding

The mojibake was in duplicated diagnostic fixture literals in the portfolio
selector tool and preview seam. The current Product source did not cause the
corruption. A shared diagnostic-only generator now supplies the Japanese
fixture to both surfaces:

`experimental/diagnostic-fixtures.mjs`

The corrected fixture preserves 10 entities, 20 Relations, the existing IDs,
the existing topology, Japanese locale, and the existing candidate positions.
The Actual Product smoke showed Japanese glyphs rather than mojibake. The
prior historical portfolio result document was not rewritten; the corrected
fixture and its new evidence are recorded here.

## Parallel audit method

The audit reuses the existing `parallel-self-loop-control` topology and the
materialized current-source Frontier positions. It runs the current
Product-authoritative presentation path and records, per undirected pair:

- exact Relation IDs and source/target direction;
- canonical parallel index/count;
- physical side sign and directed curve offset;
- endpoint attachment angles;
- final routed geometry;
- final Relation-label rectangle and source/target ownership;
- route candidate rejection reasons from occupied paths and label pressure.

The reproducible artifact is:

`experimental/parallel-one-sided-product-quality-audit1/result-summary.json`

The Actual Product evidence index is:

`experimental/parallel-one-sided-product-quality-audit1/visual-evidence-index.md`

## Evidence

The corrected control contains 8 Nodes and 11 Relations, including 6
Parallel Relations and 1 Self-loop. The `alpha`/`beta` bundle has two
`alpha -> beta` and two `beta -> alpha` Relations. Current Product output has
physical-side counts `1` and `3`: it is not literally one-sided, but it is
visibly side-imbalanced. The `gamma`/`delta` same-direction pair is balanced
at `1` and `1`.

For `alpha`/`beta`, the reverse routes are the key evidence:

- `r-ba-1` base-side candidates `-40` and `-52` are rejected by occupied-path
  conflict; `-64` remains label-pressured, so `+64` is selected.
- `r-ba-2` base-side candidates are occupied or label-pressured on the
  opposite side; `+88` is selected.

Thus the one-sided appearance is not caused by Structural Placement, a
portfolio candidate, or the experimental incident allocator. The current
Product path does not call `decideIncidentAllocation` or expose an endpoint
plan. It uses `buildEntityGraph`'s canonical directional parallel index and
`routeGraphEdge`'s physical-side, occupied-path, and label-pressure
arbitration. The resulting side concentration is a downstream routing /
Relation-label presentation residual under hard feasibility pressure.

The Actual Product smoke showed separated curved lanes and distinguishable
reverse arrows at overview/local scale, but the audit demonstrates that this
visual success is not symmetric side allocation. The self-loop and the other
parallel pair remained visible. No gross Product break was found.

## Fix decision and responsibility

No production fix was adopted. A naive opposite-side force would select
candidates already rejected for occupied-path or Relation-label clearance,
so it is not a safe bounded quality fix. The existing responsibility boundary
remains valid:

- Structural Placement owns only derived Node geometry;
- Parallel/Incident allocation architecture remains closed;
- ordinary routing, endpoint planning, final Relation-label placement,
  Node-label placement, Self-loop routing, viewport/camera, persistence, and
  manual authority remain Product responsibilities.

The result is closest to:

`C. PREVIEW FIXTURE INTEGRITY RESTORED / ONE-SIDED RESULT IS
HARD-FEASIBILITY-DRIVEN`, with a `D. APPARENT ONE-SIDED ISSUE IS DOWNSTREAM
ROUTING OR LABEL PRESENTATION` attribution.

This is not evidence to reopen the Parallel/Incident architecture. It does
justify a later, separately bounded Product routing/presentation checkpoint if
the user authorizes one. It does not justify selector retuning, a new solver,
or Product adoption.

Human Review remains `NOT READY`; Product default/adoption remains `HOLD`;
production provider remains `NOT ESTABLISHED`; and the Initial Layout Release
blocker remains `OPEN`.
