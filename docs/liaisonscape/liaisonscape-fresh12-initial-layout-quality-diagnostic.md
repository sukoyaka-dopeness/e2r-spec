# LiaisonScape Fresh12 Initial-layout Quality Diagnostic

Checkpoint: `E2R-LIAISONSCAPE-FRESH12-INITIAL-LAYOUT-QUALITY-DIAGNOSTIC1`

Date: 2026-09-08

Status: bounded diagnostic; non-normative; no Production or governed-evidence
change

## Scope and result

This checkpoint investigates the first Fresh12 Human Review observation for
the Apollo 11 English current-production baseline:

- nodes spread through an approximately `6000 x 6000` graph-space region;
- long Relations and frequent crossings;
- a thin upper-left to lower-right visual band;
- an initial viewport transform at `scale(0.1)`;
- unreadable labels and poor graph recognizability.

Result: **the primary cause is the evaluation seed geometry, with a secondary
fit-floor interaction and a downstream routing-objective limitation**.

The Fresh12 B1/V3 artifacts, screenshots, manifests, indexes, audits, and
canonical Human Review result were read only. No Fresh12 artifact or review
result was rewritten, and no new governed lineage was created.

## Investigation surface

The investigation read and reconciled:

- the Fresh12 V3 result and packet, including the V2 reference and viewport
  transform;
- the referenced historical machine V2 Apollo 11 artifact;
- the evaluation materializer `core/fp1.mjs`, `core/materializer.mjs`, and the
  frozen machine transform contract;
- the Product V2 derivation, Product `src/viewport.ts`, and
  `src/graph-presentation.ts`;
- Product `src/auto-layout.ts` and its tests, to determine whether the normal
  coordinate-less Product auto-layout participated;
- existing initial-placement and routing experiments in this repository.

The canonical V2 artifact is external to the Browser helper repository and is
referenced by Fresh12 V3 through its V2 artifact reference and coordinate
fingerprint. This is an investigation input, not a replacement for Fresh12.

## Causal findings

### PROVEN

1. Fresh12 V2 does not generate positions through Product `solveAutoLayout`.
   The V2 derivation constructs `positions` directly from the successful V1
   coordinates, then calls Product routing, label derivation, and fit helpers.
   Browser V3 carries the V2 geometry forward; it does not re-layout it.

2. The V1 coordinates are produced by the evaluation materializer's FP1-NGP
   family. For `N=9`, the family is
   `x=i/8`, `y=(i/8)^2`, then the frozen runtime transform applies
   `origin=(0,0)` and `scale=6144`.
   The resulting family coordinates include x values at 0, 768, ..., 6144 and
   y values at 0, 96, 384, ..., 6144. Fresh12's observed positions, after
   candidate assignment, match this construction exactly.

3. The fixed `6144/1` transform is enforced by the machine authority and is
   also recorded by the Browser capture authority. It is therefore not an
   incidental browser zoom value.

4. Product `fitGraphView` fits node bounds only, with 32-unit node margins,
   and clamps the result to `MIN_SCALE=0.1`. It does not use a global crossing
   objective. Product route arbitration scores node pressure, sustained
   proximity to already occupied paths, label pressure, and offset cost; a
   transverse crossing with a future route is not directly scored.

### STRONGLY SUPPORTED

1. The roughly `6000 x 6000` extent is caused by the FP1-NGP seed family plus
   the frozen 6144 scale, not by initial placement settling in the current
   Product application.

2. The long Relations are primarily a consequence of applying Apollo 11's
   topology to a monotonic parabolic point family. Several Relations connect
   points far apart on that family, so the route primitive receives long
   chords before it performs its bounded local offset search.

3. The crossings are a mixed geometry/objective result. The family places
   many nodes on one narrow monotonic locus, while the Apollo topology creates
   overlapping chord corridors. The router can avoid nodes, labels, and some
   already occupied-path proximity, but its sequential local arbitration does
   not optimize all route pairs globally.

4. `scale(0.1)` is not just a neutral presentation choice. For the Fresh12
   node bounds, the un-clamped height fit is approximately `0.0505`, so the
   implementation reaches the minimum-scale floor. The floor prevents the
   intended 96-unit vertical padding from fitting the node extent; lowering
   the floor alone would show more geometry but would make text even smaller.

5. Geometry and framing both contribute to the unusable initial view. Changing
   only the viewport minimum would not remove the parabolic arrangement,
   long edges, or crossings. Changing only the seed's global numeric scale
   would not change the normalized geometry or topology; it would mainly
   determine whether the fit floor is hit.

### UNRESOLVED

- The best replacement family, topology-aware assignment, or Product-layout
  integration point has not been selected.
- It is not yet established whether a bounded general-position family,
  topology-aware seed, or a Product auto-layout-derived candidate gives the
  best combined crossing, edge-length, label, and recognizability result.
- The correct production policy for fitting route and label extents, rather
  than node extents alone, remains an experiment. It should not be inferred
  from this one cell.
- The sampled crossing count below is a diagnostic metric, not a formal
  acceptance criterion and not a claim about all fixtures.

## Minimal diagnostic baseline

Metrics were computed from the historical Apollo 11 V2 positions and its 41-
sample route polylines. A crossing pair means a pair of non-adjacent route
polylines with at least one sampled segment intersection; shared-endpoint
pairs are excluded. These values are intended for same-fixture comparisons.

| Metric | Fresh12 Apollo 11 baseline | Why retained |
|---|---:|---|
| Node extent | `6036 x 6036` graph units | Direct measure of macro geometry and fit pressure |
| Route-length median | `2830.5` graph units | Represents ordinary edge burden without hiding the center of the distribution |
| Route-length maximum | `7862.6` graph units | Detects extreme topology-to-seed chord failures |
| Sampled crossing pairs | `9` | Captures the visible global routing failure in a reproducible bounded form |
| Fit scale / unclamped height fit | `0.1` / `0.0505` | Distinguishes input extent from the viewport floor interaction |

Additional diagnostic context: route extent is approximately `5979.9 x
6001.0`; at the clamped scale, the node extent alone projects to roughly
`603.6 x 603.6` viewport units in an `800 x 500` view. The screenshot confirms
the corresponding gross visual defect: a very small diagonal graph with
mostly empty canvas and effectively unreadable labels.

The five historical Apollo 11 candidate V2 records share the same node extent,
fit scale, and unclamped fit result because they share the same FP1 family and
transform. Their sampled crossing-pair counts vary between 8 and 10, showing
that assignment changes can affect crossings without solving the macro
geometry problem.

## Improvement direction

The most promising next experiment is a **candidate-seed geometry experiment**
that preserves the Apollo fixture, source/fixture authority, and assignment
boundary while varying one seed-family or assignment variable at a time. It
should compare the baseline metrics above plus an Early Visual Smoke Check on
one or a few trustworthy rendered outputs.

The experiment should be followed by, not replaced with:

1. a bounded route-objective experiment for true transverse crossings; and
2. a viewport experiment that records node, route, and label extents and
   rejects an initial view that is technically successful but visually
   unusable.

Reducing `MIN_SCALE` is not the preferred first fix. It is a useful diagnostic
counterfactual, but it treats the symptom and worsens label legibility. The
first candidate should instead make the input geometry compact and
recognizable, then verify whether the existing router remains acceptable.

## Why no implementation was made

No runtime change was made in this checkpoint. The observed cause crosses the
frozen evaluation materializer/family/transform authority and the Product V2
presentation boundary. Editing Product `auto-layout.ts` would not affect the
Fresh12 path; editing the materializer or frozen transform would be a new
candidate-generation/evidence-authority checkpoint and would require fresh
governed evidence later. A local implementation here would therefore mix
diagnosis with authority migration and could not be validated against the
protected Fresh12 lineage.

The next implementation checkpoint should first define the experiment's
candidate and authority boundary, then run a temporary non-authoritative
comparison. Only a later explicit checkpoint should create a new governed
Fresh lineage.

## Visual smoke check

The canonical Fresh12 Apollo 11 PNG was inspected non-authoritatively. It
shows the predicted diagonal, sparse, low-scale graph and unreadable labels.
No formal Human Review result was changed or extended by this inspection.

## Validation and state

- LiaisonScape `npm.cmd test`: `309/309` passed.
- LiaisonScape `npm.cmd run lint`: passed.
- LiaisonScape `npm.cmd run build`: passed.
- `git diff --check`: to be run on the bounded documentation commit.
- Fresh12 historical evidence: unchanged.
- Canonical Fresh12 Human Review result: unchanged.
- New governed Fresh lineage: **NOT STARTED**.
- Push, tag, release, deploy, and publication: **NOT PERFORMED**.

This record is a bounded diagnostic result. It does not change E2R Core,
Extensions, Product layout semantics, candidate ranking, formal review, or
PR-3 acceptance.
