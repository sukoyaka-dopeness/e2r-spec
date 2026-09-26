# LiaisonScape Routing / Label-safety Geometry Dependency Audit

Date: 2026-09-09

Checkpoint: `E2R-LIAISONSCAPE-ROUTING-LABEL-SAFETY-GEOMETRY-DEPENDENCY-AUDIT1`

Status: bounded diagnostic and user-inspection snapshot; non-normative; no
Product selection or governed evidence

## Purpose and boundary

This checkpoint records the current user-inspected routing and label-safety
state after LiaisonScape commit `9a36f54`, then asks a narrower causal
question: whether Apollo 11's crowded geometry contributes to the remaining
pointer-up route complexity.

It does not select a spacing value, optimize crossings as a Product objective,
or change routing, placement, label, viewport, CSS, or evidence behavior.
Fresh10, Fresh11, Fresh12, and the canonical Fresh12 Human Review result are
read-only. The measurements below are diagnostic comparisons, not acceptance
thresholds or a formal review.

The checkpoint follows the workspace's [bounded visual geometry
playbook](../../../ai-knowledge/playbooks/bounded-visual-geometry-experiment.md)
and [actual Product inspection
hypothesis](../../../ai-knowledge/hypotheses/actual-product-surface-before-interaction-evidence.md):
calculated geometry supports diagnosis, while user-visible claims require the
actual Product surface.

## Current user-inspected snapshot

The snapshot is user interaction evidence for the Product state at
`9a36f54 fix: align active routing with dragged labels`. It is not a formal
acceptance result.

```text
USER-INSPECTED LABEL-SAFETY / ACTIVE-RECOVERY SNAPSHOT

GOOD
- dragged-node label safety
- active obstacle avoidance
- active route recovery
- current drag responsiveness

OPEN
- residual pointer-up side flip
- incident curve -> straight finalization jump
- distant route movement at finalization
```

The user observed that a drag which creates a necessary curve is now generally
safe and responsive, but that an incident route can still be curved while the
Node is moving and return to straight at pointer-up. The user also observed
occasional remote-route movement at finalization. This record preserves those
observations without treating them as a Product-wide failure rate.

`9a36f54` specifically made the active router use the previous displayed
label of the dragged Node as its one-frame continuity authority, rather than
only the provisional label. Its focused regression test guards the former
case in which a remote route could enter the live dragged label and flip only
after the final label pass. The earlier local guards remain part of the input
state: `e093357`, `55c17ce`, `8154930`, `6d44512`, and `99701be`.

## Comparative setup

Three read-only fixtures were evaluated through the current Product helpers:
`buildEntityGraph`, stored coordinates, `deriveBoundedAutomaticPresentation`,
Node-label placement, and `fitGraphView`.

| Surface | Role | What it can establish |
| --- | --- | --- |
| Apollo `spacing=220` | Current actual-Product diagnostic fixture | Current 9-Node / 11-Relation topology and remaining complexity |
| Apollo `control/96` | Same-topology density sensitivity control | Whether tighter Apollo geometry increases the diagnostic burden |
| low-density recovery control | 3-Node / 1-Relation mechanism control | Whether the recovery lifecycle is simple when there is one route and one temporary obstacle |

The low-density control does **not** share Apollo's topology. It cannot prove
that a different Apollo placement will remove finalization jumps. It only
separates a simple recovery mechanism from the multi-route, multi-label Apollo
case. Similarly, `220` is a diagnostic fixture, not a proposed Product
constant.

For an active-to-final comparison, each Node was moved by eight small fixed
deltas (four 40-unit cardinal and four 28-unit diagonal moves). The active
presentation used the current Product's active-drag inputs; the final
presentation reused that active result at the same Node geometry and enabled
the normal bounded final-label feedback. This is a deterministic model probe,
not a proxy for user drag frequency or a visual-quality score.

## Minimal diagnostic baseline

| Metric | Apollo `220` | Apollo `control/96` | low-density control |
| --- | ---: | ---: | ---: |
| Nodes / ordinary Relations | `9 / 11` | `9 / 11` | `3 / 1` |
| Node extent | `510.0 x 677.1` | `288.7 x 325.2` | `400.0 x 180.0` |
| Node-only fit scale (800 x 500) | `0.4156` | `0.7914` | `1.0000` |
| Initially curved routes | `3` | `6` | `0` |
| Route-length median / maximum | `187.9 / 364.6` | `120.5 / 235.8` | `336.0 / 336.0` |
| Non-endpoint sampled crossing pairs | `3` | `6` | `0` |
| Route hits: endpoint-owned Node label / foreign Node label | `1 / 1` | `1 / 1` | `0 / 0` |
| Final Node labels moved from provisional placement | `7` | `3` | `0` |
| Bounded final-label feedback applied | yes | yes | no |
| Active-to-final probes with changed routes | `60 / 72` | `70 / 72` | `0 / 24` |
| Probes with changed non-incident routes | `38 / 72` | `56 / 72` | `0 / 24` |
| Maximum changed / remote routes in one probe | `5 / 5` | `4 / 4` | `0 / 0` |

The retained metrics answer distinct questions rather than trying to reduce the
state to one score: extent and fit describe framing pressure; crossing and
curved-route counts describe route context; owner versus foreign Node-label
hits preserve label ownership; and the same-geometry active-to-final probe
measures phase-boundary churn directly.

## Actual Product diagnostic inspection

The current actual Product seam was opened in Edge, not a simplified renderer.
The clean Apollo `220` view rendered 9 Entities and 11 displayed Relations at
42% node fit; it showed a compact but multi-corridor graph with the current
route and label presentation. The low-density view rendered its 3 Nodes and
one straight control route at 100% fit. These observations establish that the
fixtures load into `src/App.tsx` with the normal Product graph, viewport, and
node-drag interaction.

This was a diagnostic visual smoke check only. It does not declare either
surface visually accepted, rank candidates, or replace a user inspection.

## Causal assessment

### PROVEN

1. Active node drag deliberately derives with `feedbackEnabled: false` in
   `src/App.tsx`; pointer-up derives the same final Node geometry through the
   finalizing presentation with bounded final-label feedback enabled. A
   same-geometry active-to-final route difference is therefore a real
   structural possibility, not merely a browser repaint artifact.
2. The current Apollo `220` fixture already has nontrivial route/label context:
   three sampled non-endpoint crossings, three initially curved routes, one
   endpoint-owned and one foreign Node-label route hit, and final-label
   movement for seven Nodes.
3. Holding the Apollo topology fixed, the tighter `control/96` state has more
   crossings (`6` versus `3`) and more active-to-final probes with a changed
   non-incident route (`56/72` versus `38/72`). The current wider `220`
   fixture reduces this measured pressure but does not eliminate it.
4. The 3-Node low-density control has no route or label interaction in its
   base state and no route changes across its 24 same-geometry active-to-final
   probes. Its focused test also demonstrates a single temporary obstacle
   safely curves and then restores its route.
5. The `9a36f54` regression test verifies the dragged-label safety condition
   that motivated the current snapshot. It does not claim to eliminate every
   finalization transition.

### STRONGLY SUPPORTED

- Apollo geometry and route density are upstream contributors to routing and
  finalization complexity. Tightening the same Apollo topology worsens the
  measured crossing and remote-transition burden, while the simple control has
  none.
- Geometry is not the sole cause of the remaining user-visible jump. Even the
  wider `220` Apollo state has `60/72` modeled active-to-final route changes,
  and the Product intentionally changes derivation authority at the phase
  boundary. A placement improvement may reduce pressure but cannot be assumed
  to remove the need for a finalization-continuity rule.
- The current concern separates cleanly into three responsibilities:
  initial Node geometry controls the amount of route/label pressure;
  Node-label placement determines which live label rectangles routing must
  respect; and finalization decides whether a safe active presentation is
  retained or re-arbitrated at pointer-up.

### UNRESOLVED

- Which topology-aware initial-placement candidate reduces Apollo pressure
  without regressing other fixtures or locales.
- Whether the remaining incident curve-to-straight change is safety-required
  in each observed drag, an avoidable final-label feedback difference, or a
  mixture of both.
- Whether a bounded finalization continuity rule can preserve a safe incident
  route without suppressing necessary obstacle avoidance, direct recovery, or
  the existing `9a36f54` live-label guarantee.
- Whether node-owned label placement needs another change. The current user
  snapshot considers dragged-node label safety good, so this checkpoint does
  not reopen it merely because owner-label intersections occur in a base
  metric.

## Dependency ordering and next target

The highest-impact **immediate** target is residual pointer-up continuity for
incident routes. It is the remaining user-visible discontinuity in the
current `220` Product fixture and survives after the dragged-label safety
correction. It should be investigated with exact active/final candidate and
label traces, one drag trajectory at a time.

Initial Node placement/crossing is the highest-impact **upstream pressure
reduction** candidate. It should be tested separately as a bounded,
same-topology placement experiment with the current routing and label rules
held fixed. A lower-crossing candidate would be evidence about burden, not a
license to change the router's objective or adopt a spacing constant.

Node-owned label placement is a maintained safety dependency, not the next
optimization target. Any finalization or placement experiment must keep the
`9a36f54` live dragged-label condition and its regression coverage intact.

The ordering is therefore:

```text
preserve current label-safety and active-recovery guards
  -> isolate one residual incident finalization jump
  -> independently compare a topology-aware placement candidate
  -> only then consider an interaction between the two results
```

This is dependency ordering, not an implementation plan or Product adoption.

## Why no implementation was made

The comparison makes geometry a credible upstream contributor but does not
identify a safe general rule for replacing final feedback with active routing,
or for always retaining an incident curve. Either shortcut could retain a
route that conflicts with settled labels or fail to recover a necessary
obstacle avoidance. No bounded source change is therefore justified at this
checkpoint.

## State and validation intent

- Product adoption: **NOT DECIDED**.
- Routing optimization: **PAUSED** after this diagnosis.
- Spacing selection: **NOT DECIDED**.
- New governed Fresh lineage: **NOT STARTED**.
- Fresh12 historical evidence and canonical Human Review result: **UNCHANGED**.
- Push, tag, release, deployment, and publication: **NOT PERFORMED**.

The next evidence is a user inspection of the two actual-Product controls,
followed by a separate explicit checkpoint if a particular residual trajectory
or placement candidate deserves work.
