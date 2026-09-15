# LiaisonScape Frontier User Visual Comparison Handoff 1

Date: 2026-09-15  
Purpose: hand the current-source Frontier candidate to direct user judgment on
the Actual Product surface.  
Status: `READY FOR USER VISUAL COMPARISON`.

This handoff follows
[`Frontier Actual-Product Visual Sweep 1`](liaisonscape-frontier-actual-product-visual-sweep1-result.md).
It is intentionally not an acceptance result. Do not continue Frontier
research, refinement, routing/label tuning, scoring retune, Product adoption,
or a new solver search until the user visual judgment is recorded.

## How to review

The development server should be started from the LiaisonScape repository:

```powershell
npm.cmd run dev -- --host 127.0.0.1
```

Open each URL below in the browser. The seam is development-only and renders
the current `App` with a complete Frontier candidate through the disposable
operation-local preview contract. It does not adopt or persist Coordinates.

For each fixture, inspect:

1. initial frame;
2. `Reset view` / fit;
3. local zoom where needed for route and Relation-label ownership.

Do not treat initial clipping alone as a layout defect. Judge whether Reset
recovers the complete graph and whether local zoom makes the relevant route and
label association understandable.

The user judgment vocabulary is deliberately small:

- `GOOD`
- `ACCEPTABLE WITH ISSUE`
- `NOT GOOD`
- `NOT REVIEWED`

The final column below is left for user judgment. Existing Codex smoke notes
are context only and are not user acceptance.

## Public samples

Base URL:

`http://127.0.0.1:5173/e2r-liaison-scape/experimental/product-evaluation-seam/frontier-actual-product-visual-sweep1/`

| Fixture | Locale | Exact URL | Selected Frontier family | Diagnostic elapsed | Codex Reset observation | User judgment |
| --- | --- | --- | --- | ---: | --- | --- |
| Lighthouse Restoration | EN | `?fixture=lighthouse-en` | `structural-frontier-9-circular-order` | 651 ms | Full graph recovered; generally inspectable. | `NOT REVIEWED` |
| Lighthouse Restoration | JA | `?fixture=lighthouse-ja` | `structural-frontier-9-circular-order` | 635 ms | Japanese graph remained inspectable after Reset. | `NOT REVIEWED` |
| Apollo 11 | EN | `?fixture=apollo-en` | `structural-frontier-4-grid-structural` | 620 ms | Local incident Relation-label crowding remains. | `NOT REVIEWED` |
| Apollo 11 | JA | `?fixture=apollo-ja` | `structural-frontier-4-grid-structural` | 766 ms | Same central crowding with Japanese labels. | `NOT REVIEWED` |
| Berlin Wall | EN | `?fixture=berlin-wall-en` | `structural-frontier-2-circular-order` | 515 ms | Clear small-to-moderate graph. | `NOT REVIEWED` |
| Berlin Wall | JA | `?fixture=berlin-wall-ja` | `structural-frontier-1-grid-structural` | 546 ms | Long Japanese text remains navigable. | `NOT REVIEWED` |
| Ashen Crown | EN | `?fixture=ashen-crown-en` | `structural-frontier-12-grid-structural` | 861 ms | Central/right route and label crowding. | `NOT REVIEWED` |
| Ashen Crown | JA | `?fixture=ashen-crown-ja` | `structural-frontier-12-grid-structural` | 843 ms | Same central/right ownership residual. | `NOT REVIEWED` |
| Titanic Final Voyage | EN | `?fixture=titanic-en` | `structural-frontier-11-circular-order` | 673 ms | Structurally coherent; local zoom needed. | `NOT REVIEWED` |
| Titanic Final Voyage | JA | `?fixture=titanic-ja` | `structural-frontier-11-circular-order` | 662 ms | Overview is small; judge after local zoom. | `NOT REVIEWED` |

## Research and stress controls

| Fixture | Locale | Exact URL | Selected Frontier family | Diagnostic elapsed | Codex Reset observation | User judgment |
| --- | --- | --- | --- | ---: | --- | --- |
| `synthetic:k7-7` | EN | `?fixture=dense-k7-7` | `structural-frontier-1-grid-structural` | 4,046 ms | Dense crossing and repeated-label pressure. | `NOT REVIEWED` |
| `synthetic:k6-8` | EN | `?fixture=dense-k6-8` | `structural-frontier-1-grid-structural` | 4,251 ms | Global coupling remains visible. | `NOT REVIEWED` |
| `synthetic:k8-8` | EN | `?fixture=dense-k8-8` | `structural-frontier-1-grid-structural` | 6,468 ms | Overview is visibly non-release-readable. | `NOT REVIEWED` |
| Japanese long-label control | JA | `?fixture=label-heavy-ja-10` | `structural-frontier-10-circular-order` | 1,521 ms | Label corridor and ownership coupling remain. | `NOT REVIEWED` |
| Parallel / Self-loop control | EN | `?fixture=parallel-self-loop-control` | `structural-frontier-3-grid-structural` | 619 ms | Parallel lanes, reverse sides, and self-loop visible. | `NOT REVIEWED` |

## Exact artifact and lineage

The authoritative machine record is
[`result-summary.json`](https://github.com/sukoyaka-dopeness/e2r-liaison-scape/blob/main/experimental/frontier-actual-product-visual-sweep1/result-summary.json).
It contains the exact source string, candidate count (`12`), Product
presentation evaluation count (`13`), selected fingerprint, metrics, and
complete selected geometry for every row. The visual evidence index is
[`visual-evidence-index.md`](https://github.com/sukoyaka-dopeness/e2r-liaison-scape/blob/main/experimental/frontier-actual-product-visual-sweep1/visual-evidence-index.md).

The public source paths are:

- `e2r-spec/examples/lighthouse-restoration-demo.{en,ja}.e2r.json`
- `e2r-spec/examples/apollo-11-mission.{en,ja}.e2r.json`
- `e2r-narrative-line/src/sample/berlin-wall-history.{en,ja}.e2r.json`
- `e2r-spec/examples/ashen-crown.{en,ja}.e2r.json`
- `e2r-spec/examples/titanic-final-voyage.{en,ja}.e2r.json`

The five stress rows are the current sweep's reproducible synthetic controls;
they do not modify canonical sample bytes.

## Authority and safety

Frontier owns derived Node geometry only. Product ordinary routing,
Parallel/Incident allocation, endpoint-plan, final Relation-label placement,
Node-label placement, Self-loop routing, viewport/camera, styling,
interaction, Dataset lifecycle, persistence, Save Coordinates, and manual
placement remain authoritative.

During review:

- do not save Coordinates;
- do not alter Dataset data or sample bytes;
- do not treat the preview as adoption;
- do not infer formal Human Review acceptance from this handoff;
- do not change standing statuses.

Standing statuses remain: Gate 2 `OPEN`, quality solver `HOLD / NOT
ESTABLISHED`, production provider `NOT ESTABLISHED`, Product
integration/default `HOLD`, Human Review `NOT READY`, Adaptive Cascade
inactive, and Initial Layout Release blocker `OPEN`.

## Stop condition

This checkpoint stops here until user judgment is available. After judgment,
the next technical direction will be decided from the recorded review rather
than from another automatic visual or solver pass.
