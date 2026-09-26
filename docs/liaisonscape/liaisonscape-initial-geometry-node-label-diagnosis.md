# LiaisonScape Initial Geometry / Node-owned Label Diagnosis

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-GEOMETRY-NODE-LABEL-DIAGNOSIS1`

Date: 2026-09-10

Status: bounded diagnostic; non-normative; no Product or governed-evidence
change

## Outcome

The current evidence does not support treating Edge crossing, Node placement,
or Node-owned label placement as an independent single-cause defect.

The strongest current explanation is a dependency chain:

```text
stored Apollo geometry
  -> long / overlapping route corridors
  -> local route arbitration and relation-label occupancy
  -> constrained, greedy Node-label choices
  -> residual Node-owned label / Edge pressure
  -> difficult initial visual reading
```

The highest-impact next target is therefore a **bounded joint geometry /
presentation experiment**, beginning with alternative Apollo seed geometry or
assignment while keeping the current routing and label implementation fixed.
An isolated crossing-count optimization or an isolated Node-label-distance
change is not justified by this checkpoint.

## Scope and protected state

The investigation used the current LiaisonScape source, the actual-inspection
Apollo spacing fixtures, the Product presentation helpers, and prior
initial-placement/routing records. The following were not modified:

- Fresh10, Fresh11, or Fresh12 artifacts, manifests, indexes, screenshots, or
  canonical Human Review result;
- current accepted routing, label-safety, active-recovery, drag, and
  responsiveness behavior;
- Product source, fixtures, public samples, or candidate materializers.

No new governed Fresh lineage was started. The existing actual Product
inspection surfaces remain the visual authority:

```text
http://127.0.0.1:4175/e2r-liaison-scape/experimental/product-evaluation-seam/actual-inspection/?spacing=220&strictMode=off#datasetUrl=https%3A%2F%2Fdiagnostic.liaisonscape.invalid%2Fapollo-11-product-inspection.en.e2r.json
http://127.0.0.1:4175/e2r-liaison-scape/experimental/product-evaluation-seam/actual-inspection/?spacing=low-density&strictMode=off#datasetUrl=https%3A%2F%2Fdiagnostic.liaisonscape.invalid%2Fapollo-11-product-inspection.en.e2r.json
```

Direct CUA interaction was unavailable in this checkpoint after repeated
helper timeouts. The diagnosis therefore relies on source-exact derivation,
controlled local metrics, the previously recorded actual-Product
observations, and the existing inspection seam; it does not claim a new
Codex-performed physical browser observation.

## Implementation findings

### Node placement and geometry

**PROVEN**

- The actual Apollo spacing fixtures contain stored coordinates. Opening them
  does not exercise the coordinate-less `settleInitialPlacement()` path.
- `App.tsx` reads stored coordinates before presentation derivation; the
  Product does not silently replace these coordinates with generic auto-layout.
- Product routing runs after the stored positions have been accepted.
- The current Product initial-placement source and the evaluation FP1-NGP
  materializer are separate authorities. A change to `auto-layout.ts` alone
  would not repair Fresh12's historical FP1-NGP geometry.

**STRONGLY SUPPORTED**

- In the Apollo 220 current Product fixture, the geometry is already broad
  enough to create long and overlapping corridors before label feedback.
- The topology matters: Apollo's hub-like NASA and event-related connections
  attach many Relations to a small set of nodes, so broadening coordinates
  also increases corridor length and can expose more route alternatives.
- Crossings are not a sufficient objective by themselves. The router handles
  node influence, occupied paths, labels, offsets, and bounded local route
  arbitration; it does not globally minimize all unrelated route crossings.

### Node-owned label placement

**PROVEN**

- `placeNodeLabel()` evaluates 32 directions.
- It considers occupied relation labels, other Node bodies, all supplied route
  sample points, optional yielding routes, and prior-placement movement cost.
- `deriveAutomaticNodeLabels()` is sequential and greedy: each selected label
  is appended to the occupied set before the next Node is processed.
- The bounded presentation pipeline derives routes first, derives relation
  labels, derives Node labels, and may perform one final route-feedback pass.
  It is not a joint global optimization of Node geometry, routes, relation
  labels, and Node-owned labels.

**STRONGLY SUPPORTED**

- The residual label/Edge issue is not caused by the label algorithm having no
  Edge awareness. It is caused by a constrained local choice under the current
  geometry and route/label ordering.
- Node ownership is not an explicit global objective. The current score has a
  fixed owner-distance formula and directional/cardinal preference, while
  route pressure is a local penalty. A candidate can therefore trade route
  pressure against relation-label occupancy, other-node pressure, or movement
  stability.
- Final feedback can improve route safety while still leaving an initial
  presentation that is visually dense or has a remaining diagnostic route
  proximity. This is a presentation-quality limitation, not evidence that
  finalization continuity is broken.

## Controlled baseline

The following values were recomputed from the same current Product helpers
using `deriveBoundedAutomaticPresentation()` and the stored Apollo fixtures.
Crossing pairs exclude shared-endpoint Relations and count sampled segment
intersections. Label route-hit values are diagnostic geometry probes, not
formal acceptance criteria.

| fixture | node extent | route median / max | sampled crossing pairs | Node labels with route hard hit | Node labels with route distance < 20 |
|---|---:|---:|---:|---:|---:|
| Apollo control | `288.7 × 325.2` | `120.5 / 235.8` | `6` | `1` | `1` |
| Apollo 220 | `510.0 × 677.1` | `187.9 / 364.6` | `3` | `1` | `1` |
| low-density control | `400.0 × 180.0` | `336.0 / 336.0` | `0` | `0` | `0` |

The wider Apollo 220 fixture reduces the sampled crossing count relative to
control in this bounded derivation, but increases extent and route burden.
This is direct evidence that a lower crossing count is not equivalent to a
better initial view.

For Apollo 220, the residual diagnostic Node-label route hit is localized to
`NASA`; the route probe identifies `entity-3` and `entity-4` as intersecting
its final label rectangle, with `entity-1` and `entity-8` also within the
20-unit near-route probe. This is consistent with the actual observation of
an Edge corridor concentrating around the NASA-owned label, but the probe is
not a glyph-level visual acceptance result.

With the same Apollo 220 positions and relation labels, removing route paths
from the Node-label input changed the selected placement of 5 of 9 Node
labels. In the route-aware result, NASA moved to a left/up direction rather
than remaining at its route-free right-side choice, yet the final diagnostic
route hit remained. This isolates meaningful route dependence while showing
that the current local mechanism cannot guarantee a globally clean result.

## Causal interpretation

### Geometry

The stored Node geometry is the upstream pressure source for this current
fixture. It determines the available angular separation of corridors and the
distance that routes and labels must span. It is not yet proven that one exact
Node coordinate or one alternate seed family is the best replacement.

### Edge length and crossings

Long edges arise from the endpoint geometry and Apollo relation topology. A
crossing can remain even in a broad layout because the route solver's
objective is local and sequential rather than a global crossing minimizer.
The observed crossing count must therefore be read together with route length,
extent, label pressure, and actual visual recognizability.

### Node-owned labels

The label system responds to Edge paths, but the route paths themselves depend
on provisional labels and relation-label occupancy. The one bounded feedback
pass limits stale route/label disagreement, but it does not solve the full
geometry-label fixed point. The current evidence supports a joint dependency,
not a label-only root cause.

### Viewport framing

Viewport fit remains a separate downstream concern. The current Product
`fitGraphView()` fits Node bounds with a node margin and a minimum scale; it
does not make the geometry more readable. A framing experiment should record
route and label extents in addition to Node extents, but changing the minimum
scale first would treat the symptom and could make text smaller.

## Comparative controls and next experiment

The low-density control is useful as a routing-lifecycle and visual sanity
control, not as a production layout proposal. Apollo control and Apollo 220
show that spacing changes can trade crossing count against extent and route
length; they do not isolate a generally correct spacing value.

The next bounded experiment should use the same Apollo topology and fixed
Product presentation implementation while varying one upstream variable:

1. alternative seed geometry or assignment;
2. the resulting route/label derivation;
3. the minimal metrics above plus route extent and label hard-hit identity;
4. an Early Visual Smoke Check on one or a few rendered outputs.

Only after that comparison should a joint geometry-label experiment be
considered. If a geometry candidate materially improves recognizability while
preserving current routing/drag behavior, a later separate checkpoint can
study Product integration or candidate materialization authority.

## Decision

```text
Node placement alone        = upstream contributor, not yet a selected fix
Node-owned label placement   = route/occupancy-dependent contributor
Crossing minimization alone  = rejected as sole objective
Viewport-only correction     = symptom treatment; defer as first fix
Joint bounded experiment     = highest-value next target
Production adoption          = NOT DECIDED
```

No bounded Product correction was implemented. The available evidence does
not justify changing routing weights, label scoring, spacing defaults, stored
coordinates, candidate materialization, or viewport policy in this checkpoint.

## Validation and state

- Source-exact metric derivation completed for Apollo control, 108, 120, 132,
  144, 180, 220, and low-density fixtures; the retained baseline table uses
  only the minimum comparison set.
- Existing LiaisonScape tests and source gates were not changed or rerun as a
  result of a Product edit because no Product edit was made.
- This documentation change is checked with `npm.cmd run validate` and
  `git diff --check` before commit.
- Fresh10 / Fresh11 / Fresh12 historical evidence: unchanged.
- Fresh12 canonical Human Review result: unchanged.
- New governed Fresh lineage: **NOT STARTED**.
- Push, tag, release, deploy, and publication: **NOT PERFORMED**.

The current routing, label-safety, active-recovery, and responsiveness
snapshot remains preserved. User inspection of the existing actual Product
surfaces may continue, but no spacing, geometry, or label candidate is selected
by this record.
