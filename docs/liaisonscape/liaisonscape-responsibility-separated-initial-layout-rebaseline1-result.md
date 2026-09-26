# LiaisonScape Responsibility-separated Initial Layout Re-baseline 1

Date: 2026-09-14

Status: **BASELINE ESTABLISHED / SINGLE-PATH QUALITY INSUFFICIENT / FAST-INITIAL + EXPLICIT QUALITY-PHASE OPTION SUPPORTED / ARCHITECTURE DECISION READY / NOT READY FOR HUMAN REVIEW**

## Purpose and boundary

This checkpoint re-baselines the current Product path after the Structural
Placement, Parallel/Relation-label, and Self-loop investigations. It does not
introduce a new placement solver, revive a rejected formulation as a
production candidate, or formally adopt Fast Initial Placement plus explicit
High-quality Auto Layout.

The measured baseline is the current coordinate-less Product path:

`current-product Initial Placement` → Product automatic routing and occupied
path arbitration → final Relation-label placement → final Node-label placement
→ viewport fit.

Stored/authored coordinates, Dataset semantics, persistence, dirty-state, Save
Coordinates, manual Node placement, manual curvature, manual label semantics,
and all downstream authorities remain unchanged. The baseline is diagnostic
only. The current Product provider remains the current Product provider; no
prototype provider was adopted.

## Source/evidence basis

The audit was grounded in the current source rather than only in handoff
claims:

- `src/auto-layout.ts` and `src/initial-layout-provider.ts` for the current
  deterministic placement path and opt-in provider boundary;
- `src/actual-product-initial-layout.ts` for the current/stored/mixed/provider
  authority split;
- `src/graph-presentation.ts` for the bounded label-free, first, and feedback
  Product presentation passes;
- `src/viewport.ts` for route, label, self-loop, and viewport primitives;
- current endpoint/incident and presentation tests;
- the historical structural, decomposition, Parallel/Relation-label, and
  Self-loop result documents listed in the request.

Where historical documents describe a candidate or a result differently from
the source, this checkpoint uses the source and records the difference as a
baseline fact. In particular, the current runtime path is a three-iteration
`settleInitialPlacement` call followed by Product presentation; the opt-in
bounded providers are not wired into App.

## Re-baseline case matrix

The reproducible audit covers 21 cases:

| category | cases |
| --- | --- |
| canonical | Lighthouse EN/JA, Apollo EN/JA, Titanic EN/JA |
| dense | k7-7, k6-8, k8-8, k5-9, k7-7-minus-one |
| symmetry | symmetric 8-node ring |
| decomposition-sensitive | articulation-linked multi-block synthetic graph |
| presentation-sensitive | parallel bundle, dense incident endpoint, Self-loop fan-out, long EN/JA label pressure |

Each case was run three times in one Node process. The audit records medians
and the maximum of the three measured runs as a small p95-like bound. These
are diagnostic Node timings; they are not browser runtime measurements.

## Metric separation

The audit does not use a placement proxy as a substitute for Product quality.

Placement-owned metrics:

- Node overlap and minimum Node separation;
- straight structural crossing proxy, excluding self and incident pairs;
- extent and aspect ratio;
- component count and deterministic repeatability;
- placement time and the fixed three-iteration bound.

Product-authoritative metrics:

- actual routed-path crossings;
- Relation-label route interaction and Relation-label/Node-label clearance;
- Relation-label ownership completeness;
- parallel-group lane separation;
- Self-loop/ordinary route and Self-loop/label probes;
- route influence and occupied-path results;
- viewport scale and finite/outside checks;
- Product presentation time and feedback-pass participation.

The attribution rule is: a downstream failure stays downstream unless a
separate placement metric demonstrates a contributing geometry shortage.

## Baseline runtime and boundedness

Current Initial Placement is small and deterministic for this matrix. Placement
medians were approximately `0.03–0.22ms` per case, with the largest observed
three-run maximum approximately `1.2ms` in Lighthouse EN. All 21 cases were
deterministic and used the fixed three-iteration current Product path.

The Product-authoritative presentation path dominated the combined runtime:

| representative case | placement median | Product presentation median | combined median |
| --- | ---: | ---: | ---: |
| Lighthouse EN | ~0.22ms | ~40.5ms | ~40.7ms |
| Apollo EN | ~0.11ms | ~21.0ms | ~21.1ms |
| Titanic EN | ~0.12ms | ~24.4ms | ~24.5ms |
| dense k7-7 | ~0.13ms | ~159.8ms | ~159.9ms |
| dense k8-8 | ~0.20ms | ~242.7ms | ~242.9ms |

The current placement path is therefore bounded in isolation, but the complete
Product-authoritative path is not established as a uniformly low-cost browser
operation on dense graphs. The expensive boundary is route arbitration,
Relation-label placement, Node-label placement, feedback, and their coupled
obstacle inputs—not the three placement iterations alone.

## Representative placement-owned results

The current placement is not quality-complete even before downstream
presentation is considered:

- Apollo EN/JA each produced one Node-overlap pair under the current body
  clearance probe.
- Dense k7-7 and k6-8 produced one overlap pair; dense k5-9 produced five.
- Lighthouse EN had seven straight crossing-proxy pairs; Apollo EN had six;
  Titanic EN had four.
- Dense k7-7 and k8-8 produced 201 and 341 straight crossing-proxy pairs.
- The symmetric ring was deterministic, non-overlapping, and had zero
  structural crossing proxies.
- The articulation-linked control remained deterministic and separated, but
  retained four structural crossing proxies.

These crossing counts are intentionally not presented as final route quality.
They show that the current initial geometry can contribute pressure, especially
in dense cases, while the later Product route result must still be measured
independently.

## Representative Product-authoritative results

The downstream path retains major residuals even where placement-owned metrics
are acceptable:

| case | placement signal | Product signal | attribution |
| --- | --- | --- | --- |
| Lighthouse EN | no Node overlap; min separation ~100 | 8 routed crossings, 4 route/Node-label hits, Relation-label/Node-label minimum 0 | mixed, with downstream presentation residual dominant |
| Apollo EN | one placement overlap | 6 routed crossings, 2 route/Node-label hits, Node-label minimum ~0.7 | placement contributes; routing/label residual remains |
| Titanic EN | no Node overlap; min separation ~106 | 4 routed crossings, parallel lane minimum ~4.3, Relation-label/Node-label minimum 0 | Parallel/label and ordinary routing, not Node overlap alone |
| dense k7-7 | one placement overlap | 186 routed crossings, 22 route/Node-label hits | dense topology and downstream routing/presentation coupling |
| dense k8-8 | no placement overlap | 301 routed crossings, 35 route/Node-label hits, Node-label minimum ~2.7 | downstream global coupling remains without placement overlap |
| synthetic parallel bundle EN | no placement overlap | lane minimum ~5.3 and 2 route crossings | Parallel/Incident and ordinary route authority |
| synthetic Self-loop EN | no placement overlap | 3 Self-loops and one route/label hit | Self-loop and final label authority |
| long-label EN/JA | no placement overlap | one route crossing and Relation-label/Node-label minimum 0 | long-label presentation and route interaction |

The current audit found no occupied-path intersection in the small synthetic
Self-loop controls under its exact intersection probe. This does not negate
the earlier Self-loop-specific evidence: the prior angle/ordinary and
owner-local studies found low clearances, route churn, and full-domain recall
failure in difficult canonical and multi-loop cases. The baseline therefore
keeps Self-loop quality attributed to its existing downstream authority rather
than declaring it solved by the current Node geometry.

Relation-label ownership was structurally complete in this audit: every
non-empty visible Relation had a Product label entry. That is only an
association/ownership invariant; it does not imply adequate clearance or
readability.

## Failure attribution

The baseline supports the following responsibility split.

### Placement geometry

Placement owns Node overlap, initial separation, component packing, the
structural crossing proxy, and deterministic bounded startup. It contributes
to downstream shortage when Nodes are too close, when long labels have no
usable local space, or when initial geometry forces route arbitration into a
crowded region. Apollo overlap and dense placement overlap are examples.

### Ordinary routing

Actual route crossings, occupied-path arbitration, route influence, and route
churn remain ordinary routing authority. A low structural crossing count does
not guarantee low actual route crossings: the current symmetric ring is a
good control, while the articulation-linked control has four actual routed
crossings despite no placement overlap.

### Parallel / Incident

Bundle lane separation and endpoint allocation remain Parallel/Incident
authority. Titanic's no-overlap geometry still produces a small parallel lane
minimum, and the synthetic bundle retains lane pressure. Enlarging spacing is
not established as a solution because the earlier reevaluation showed tradeoffs
against outer ordinary clearance, obstacles, and route churn.

### Relation-label and Node-label

Final label positions, ownership association, corridor clearance, and long
English/Japanese readability remain Product presentation authority. Zero
Relation-label/Node-label clearance and route/label hits remain in Lighthouse,
Apollo, Titanic, dense, and long-label cases even where Node geometry is
non-overlapping.

### Self-loop

Self-loop angle, radius, fan-out, and their interaction with ordinary routes
remain Self-loop/route/presentation authority. The prior full-domain recall
checkpoint shows that current owner-local compression is not recall-safe; this
re-baseline does not reopen that branch.

### Endpoint-plan and viewport

Endpoint-plan capacity remains authoritative downstream. Viewport fit remains
the final Product boundary. The baseline found finite positions and no
non-finite viewport inputs, but a fit scale as low as approximately `0.48` in
dense k8-8 shows that graph-space separation does not equal screen-space
capacity.

The remaining difficult cases are therefore mixed/coupled, but the coupling is
now attributable rather than collapsed into a single “placement quality” score.

## Counterfactual interpretation

The audit deliberately does not create a new solver. The existing historical
evidence supplies the counterfactual boundaries:

- continuous and constrained projection improved some geometry but did not
  preserve authoritative topology/capacity safely;
- global discrete search exceeded the useful bounded state space on dense
  controls;
- narrow decomposition reduced local search but did not remove global
  finalist/capacity coupling;
- Parallel/Relation-label evaluation showed that geometry improvement can
  reduce angular scarcity without resolving label/outer-route tradeoffs;
- Self-loop full-domain evaluation showed that top-6/top-24 compression loses
  feasible and Pareto-relevant candidates.

The new baseline adds the missing control: current placement and downstream
Product presentation are measured separately on the same positions. It does
not claim that a better placement would never help. It shows where better
placement can help and where it cannot be expected to solve the residual.

## Historical comparison and architecture readiness

The evidence now supports a formal architecture decision checkpoint, but not a
production architecture adoption.

### Single Initial Placement

The current single path is operationally bounded and deterministic at the
placement stage. It is not sufficient as a claim of sufficiently good Product
presentation: dense actual route crossings, label interactions, parallel lane
pressure, Self-loop residuals, and screen-fit pressure remain. Additional
local placement heuristics are not justified by this checkpoint alone.

### Fast Initial Placement + explicit High-quality Auto Layout

This option is now evidence-supported as an architecture hypothesis:

- startup placement is already very cheap and bounded;
- expensive Product-authoritative evaluation is separable and measurable;
- dense cases expose quality residuals that are not safely closed by a small
  Initial Placement heuristic;
- the quality phase could spend a larger explicit budget on the existing
  routing/label/endpoint authorities.

This is not formal adoption. UX signaling, coordinate ownership, Save
Coordinates interaction, quality-phase cancellation, and the quality solver's
own boundedness remain unresolved.

### Adaptive Initial Placement Cascade

No new evidence promotes this future hypothesis. It remains inactive and is
not entered by this checkpoint.

## Initial Layout Release blocker

The blocker remains `OPEN`, but it can now be stated more precisely. It is not
one undifferentiated placement failure:

- current placement quality is insufficient on some canonical and dense cases;
- dense topology creates large actual route-crossing and label-interaction
  residuals;
- endpoint/Parallel capacity is not uniformly satisfied;
- Self-loop full-domain recall and presentation quality remain open;
- the complete Product-authoritative path has materially higher cost than the
  placement stage on dense cases;
- browser-native boundedness for a quality-complete single path is not
  established;
- responsibility-separated execution and coordinate UX have not been adopted.

## Product and Human Review status

This checkpoint only re-measures the current Product path and introduces no new
candidate. No Actual Product visual smoke check was required, because no
candidate was integrated and no visual acceptance claim is made. The source
pipeline used in the audit is the actual Product authority, but this diagnostic
result is not a substitute for a future Actual Product smoke check when a new
candidate is integrated.

Human Review is **NOT READY**. Historical Human Review evidence is not
transferred to this re-baseline or to any future candidate.

## Reproduction and artifacts

Added diagnostic source and output:

- `e2r-liaison-scape/tools/initial-layout-responsibility-rebaseline.mjs`;
- `e2r-liaison-scape/experimental/initial-layout-responsibility-rebaseline/audit.json`.

Added this result document and its roadmap synchronization. No production
source, App surface, Dataset authority, or existing Product provider was
changed. No session log, historical result, knowledge candidate, or Product
adoption record was changed.

The audit is deterministic and bounded by the fixed current three-iteration
placement path and three in-process measurements per case. Its timing numbers
remain Node diagnostic evidence, not browser acceptance evidence.

## Decision

Responsibility separation is established strongly enough to proceed to an
architecture decision checkpoint. The evidence is **B-leaning for quality
completion of a single Initial Placement path**, while preserving the current
bounded Product startup path as a valid baseline/fallback. Fast Initial
Placement plus an explicit High-quality Auto Layout phase is the leading
architecture option to evaluate next, but is not adopted here. No further
unbounded local placement, Self-loop pruning, or arbitrary candidate-cap
increase is justified by this checkpoint.
