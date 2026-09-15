# LiaisonScape Historical Best Candidate Re-comparison 1

Date: 2026-09-15

Status: `D. COMPARISON INCONCLUSIVE / TRADE-OFF SIGNAL RECORDED`

## Decision

This checkpoint re-compares historical Initial/HQ candidate lineages with the
current Infinite-Canvas / Occupied-Geometry lineage without introducing a new
solver, global objective, or Product provider.

The evidence records a real trade-off signal:

- historical structural candidates are strong on topology-aware ordering,
  routed crossing reduction, compact structural organization, and the prior
  Actual Product preference for `post-structural-relaxation-v1`;
- the current Occupied-Geometry / Label-Capacity lineage is stronger on
  deriving usable extent and reducing occupied label/body collisions in the
  difficult synthetic controls;
- neither side has a fair, same-fixture, current-authority comparison across
  both canonical and difficult cases.

The formal outcome is therefore `D`, not a historical winner, current winner,
or adopted portfolio. The comparison seam is not equivalent enough to claim
that the historical visual winner remains the best current HQ candidate.

Standing statuses remain unchanged: Gate 2 `OPEN`, quality solver
`HOLD / NOT ESTABLISHED`, production provider `NOT ESTABLISHED`, Product
integration/default `HOLD`, Human Review `NOT READY`, Adaptive Cascade
inactive, and Initial Layout Release blocker `OPEN`.

## Scope and authority

The comparison changes only derived candidate geometry in diagnostic or
read-only Product inspection paths. The Product renderer, ordinary routing,
Parallel / Incident allocation, endpoint-plan, final Relation-label and
Node-label placement, Self-loop routing, viewport/camera, Dataset, stored or
authored Coordinates, persistence, dirty-state, Save Coordinates, and manual
semantics remain authoritative and unchanged.

The current Product `More -> Auto Layout` action remains the old
`solveAutoLayout(input)` control with source default `DEFAULT_ITERATIONS = 12`.
It is not relabeled as a recent HQ candidate.

Historical result documents and historical artifacts were read only. No prior
Human Review or user visual evidence is inherited by a new candidate.

## Candidate inventory and identity audit

| Candidate / lineage | Identity and source | Evidence mode | Disposition |
| --- | --- | --- | --- |
| `post-structural-relaxation-v1` | `tools/generic-crossing-search.mjs`; generic crossing search followed by bounded constrained local relaxation | Historical Actual Product replay on Lighthouse/Apollo, plus current-source reconstruction as `post-structural-constrained-relaxation` | Strongest historical visual evidence; not a current-HQ winner |
| Global Placement 3 / G3 | Historical production-native structural portfolio and global spacing transform | Historical artifact replay; current source can reproduce the corresponding structural/global-spacing arm on canonical fixtures | Structural reference, not independently re-adopted |
| Frontier-12 | `tools/generic-crossing-search.mjs`, `E2R_GLOBAL_PLACEMENT_ABLATION=frontier-12` | Historical artifact replay and current-source reconstruction | Current-source Lighthouse output matched the historical selected fingerprint; dense quality remains research evidence |
| Joint-constrained structural formulation | `tools/structural-formulation3.mjs` and `structural-native-v3` | Historical artifact replay plus current-source reconstruction | Ordering/crossing control; not a release candidate |
| Discrete feasibility-first | `tools/discrete-placement-feasibility.mjs`, `structural-native-discrete` | Historical/current diagnostic evidence | Safety/feasibility reference, not a visual winner |
| Explicit Label-Capacity | `tools/explicit-label-capacity-candidate-formulation-probe1.ts` | Current-source diagnostic artifact on fixed synthetic controls | Useful capacity diversity; no historical visual claim |
| Infinite-Canvas / Occupied-Geometry | `tools/infinite-canvas-local-density-extent-growth-rebaseline1.ts` followed by `tools/occupied-geometry-feasibility-first-extent-growth1.ts` | Current-source diagnostic artifact and Actual Product smoke | Current HQ lineage; geometry improves, release readability remains open |
| Fast / current old Auto Layout | Product `settleInitialPlacement` and `solveAutoLayout` | Current Product control | Control only; not a research candidate |

`post-structural-relaxation-v1` and current
`post-structural-constrained-relaxation` are related lineage identities, not
silently treated as the same artifact. The former is a historical materialized
candidate exposed by the old geometry inspection seam; the latter is a
current-source reconstruction. The reconstruction is useful because its
Lighthouse output is consistent with the historical recorded geometry and
metrics, but it does not transfer the historical user judgment to a new
candidate.

## Fixture equivalence audit

The central result is an equivalence boundary, not a missing scalar score.

| Comparison surface | Dataset/topology | Product authority | Equivalence result |
| --- | --- | --- | --- |
| Historical Post vs current baseline | Lighthouse Restoration, same Actual Product surface and camera/reset path | Actual Product renderer and current presentation path | Fair for that historical cell; user preferred Post, but it is scoped historical evidence |
| Historical G3 vs Frontier-12 | Lighthouse/Titanic/Apollo EN/JA canonical cells | Same development-only Actual Product review surface | Fair within the historical structural campaign; Frontier-12 had positive but not formal acceptance evidence |
| Current structural arms | Lighthouse/Titanic/Apollo and `synthetic:k7-7` | Current Product-authoritative evaluator | Reproducible current-source diagnostic comparison |
| Current Label-Capacity / Occupied-Geometry | `canonical`, `dense`, `label`, `connected`, `parallel`, `self-loop` synthetic controls | Current Product-authoritative evaluator | Reproducible within current HQ family, but not topology-equivalent to historical cells |
| Historical visual winner vs current Occupied-Geometry | No shared materialized fixture with both candidate geometries | Cannot be made equivalent by comparing only node/edge counts | **Gap; no fair winner claim** |

The 14-Node/49-Relation historical `synthetic:k7-7` case is not treated as
equivalent to current 14-Node/49-Relation `dense` or `connected` cases. Edge
IDs, topology, labels, component structure, and materialization contracts
differ. Matching cardinality is insufficient.

## Current-source structural re-comparison

The current `generic-crossing-search.mjs` source was run on Lighthouse EN with
the current Product presentation evaluator. These are machine diagnostics, not
a scalar winner decision.

| Arm | Selected family | Full evaluations | Crossings | Label hits | Label near | Node overlap | Min separation | Extent | Fit diagnostic |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: |
| Current old control | `product-current` | 2 | 8 | 1 | 5 | 0 | 100.4 | 489 x 325 | .792 |
| Joint-constrained | `joint-constrained-crossing-ring-rotated-balanced` | 13 | 0 | 0 | 0 | 0 | 162.3 | 486 x 650 | .431 |
| Frontier-12 | `structural-frontier-9-circular-order` | 13 | 0 | 0 | 0 | 0 | 169.0 | 529 x 545 | .506 |
| Discrete | `discrete-crossing-ring-wide` | 12 | 0 | 1 | 2 | 0 | 170.0 | 510 x 340 | .762 |
| G3/global-spacing reference | `global-spacing-only` | 46 | 0 | 0 | 0 | 0 | 169.0 | 529 x 545 | .506 |

The current default research run also reconstructed the Post lineage as
`post-structural-constrained-relaxation` on Lighthouse EN:

| Metric | Current-source Post reconstruction |
| --- | ---: |
| Crossings / label hits / label-near / Node overlap | `0 / 0 / 0 / 0` |
| Minimum separation | `143.8` |
| Extent / fit diagnostic | `633 x 401` / `.662` |
| Route median / maximum | `193.4 / 370.0` |

This is consistent with the provenance record (`636 x 440` to `633 x 401`,
fit `.611` to `.662`) and supports current-source reproducibility of the Post
lineage. It does not establish that Post is better than current
Occupied-Geometry, because Occupied-Geometry has no current-source
materialization for this same Lighthouse fixture.

The dense current-source control demonstrates why historical canonical metrics
cannot be extrapolated:

| Arm | Crossings | Label hits | Label near | Node overlap | Extent | Fit diagnostic |
| --- | ---: | ---: | ---: | ---: | --- | ---: |
| Current old control | 184 | 16 | 24 | 1 | 584 x 411 | .648 |
| Joint-constrained | 206 | 15 | 29 | 0 | 503 x 650 | .431 |
| Frontier-adaptive-12 | 129 | 8 | 20 | 0 | 784 x 328 | .717 |

These are current `synthetic:k7-7` results. They are not substituted for
current `dense` fixture results.

## Current HQ capacity evidence

The current HQ artifacts provide a complementary signal.

### Explicit Label-Capacity

The bounded component-local label-capacity probe used actual Product label
bounds and Relation demand while retaining Product routing and final label
authority. It created useful candidate diversity, but its tested formulation
was recorded as `B. LABEL-CAPACITY SIGNAL VALID / FORMULATION NEEDS
REFINEMENT`. Dense and Japanese overlap improved in the artifact, while fitted
text size and ownership remained unsuitable for Human Review.

### Infinite-Canvas / Occupied-Geometry

The selected diagnostic values below are not compared to historical rows unless
fixture identity is exact.

| Current fixture | Occupied overlap | Visual label overlap | Foreign-route hits | Ownership ambiguity | Extent | Interpretation |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| canonical | 0 | 0 | 0 | 0 | 269 x 493 | bounded control remains clean |
| dense | 2 | 2 | 31 | 31 | 711 x 533 | geometry improved, ownership remains crowded |
| label-heavy JA | 0 | 0 | 16 | 16 | 792 x 586 | occupied geometry improved; association remains open |
| single-connected | 10 | 3 | 160 | not closed | 897 x 784 | hard feasibility remains open |
| Parallel | 0 | 0 | 0 | 0 | 636 x 514 | no new control regression in diagnostic |
| Self-loop | 0 | 0 | 0 | 0 | 269 x 497 | control only; independent track remains open |

The prior Actual Product smoke is decisive for release interpretation:
canonical was stable after Reset view, Parallel retained distinct lanes, but
dense 14/49 remained crowded and difficult for Relation-label ownership at
normal Product zoom. Long-label output required local zoom and was not a visual
pass. The smoke was not formal acceptance and no Human Review candidate was
created.

## Responsibility attribution

| Dimension | Attribution |
| --- | --- |
| Node ordering and structural crossing pressure | Structural Placement / candidate family; historical structural arms retain a meaningful canonical advantage |
| Component spacing and usable extent | Structural Placement, including current infinite-canvas extent growth |
| Node-label geometry | Product Node-label authority; observed as feedback, not transferred |
| Ordinary route crossings and route shape | Product ordinary routing authority |
| Parallel lanes, physical side/order, reverse direction, side bias | Parallel / Incident allocation authority; no candidate-owned improvement established |
| Endpoint angular capacity and shared/multi-bundle endpoints | Endpoint-plan/capacity authority, with only coarse demand exposed to placement |
| Relation-label clearance, ownership, association, long English/Japanese readability | Product Relation-label placement/presentation coupled with ordinary routing |
| Self-loop angle/radius and ordinary-edge interaction | Self-loop routing and independent local-capacity track; control only here |
| Overview fit and readable zoom | Viewport/camera authority; fit is diagnostic, not a hard winner criterion |

The historical Post preference cannot be attributed to routing, Parallel,
endpoint-plan, or Self-loop changes. Current occupied-overlap improvements
cannot be interpreted as proof of improved route/label ownership.

## Machine ranking versus Product visual ranking

The rankings disagree in the way prior research predicted:

- structural metrics favor zero-crossing topology-aware arms and larger
  separation;
- occupied-geometry metrics favor current extent-growth feedback on difficult
  current controls;
- prior Actual Product observation favored Post over the old current baseline
  and generic predecessor on Lighthouse;
- current Actual Product smoke still rejects dense current-HQ readability as
  release-ready because labels and route ownership remain crowded.

There is no defensible single scalar ordering all of these because the fixtures
and, for the difficult family, the materializers are not equivalent. The
disagreement supports separate structural and presentation gates, not
arbitrary score-weight retuning.

## Portfolio relevance

The evidence supports only a research hypothesis that multiple candidate
families may be useful: a topology-aware structural arm can preserve ordering
and crossing quality, while a capacity-aware arm can preserve local spacing and
label demand. It does not authorize a production selector, Worker integration,
provider adoption, Product default replacement, or Adaptive Cascade.

The next HQ release candidate therefore remains the existing current
Infinite-Canvas -> Occupied-Geometry lineage only as a bounded research
baseline, not as a release candidate. A future comparison would need one exact
common fixture materializer containing both historical structural geometry and
current capacity-aware geometry, followed by the same Product-authoritative
evaluation and a small Actual Product smoke.

## Gate and readiness

```text
formal outcome                         = D. COMPARISON INCONCLUSIVE
trade-off signal                       = RECORDED, NOT ADOPTED
historical Post visual preference      = VALID HISTORICAL EVIDENCE / SCOPED
current Occupied-Geometry direction    = PROMISING GEOMETRY / NOT RELEASE-READY
fair current-vs-historical winner      = NOT ESTABLISHED
Human Review                           = NOT READY
next HQ release candidate              = NONE ESTABLISHED
Gate 2                                 = OPEN
Initial Layout Release blocker         = OPEN
```

No new candidate is eligible for formal Human Review from this checkpoint.
The bounded Actual Product smoke evidence is sufficient to stop before a
larger visual campaign; dense current HQ output has the same visible
route/label crowding already recorded by Gate 3.

## Reproduction and validation

Read-only evidence and current-source runs used:

- `docs/liaisonscape-initial-layout-candidate-provenance-audit.md`;
- `docs/liaisonscape-initial-layout-candidate-actual-product-acceptance1-result.md`;
- `docs/liaisonscape-initial-layout-candidate-cross-fixture-acceptance2-result.md`;
- Global Placement 3 / Frontier-12 result, review, and user-evidence documents;
- `docs/liaisonscape-explicit-label-capacity-candidate-formulation-probe1-result.md`;
- `docs/liaisonscape-infinite-canvas-local-density-extent-growth-rebaseline1-result.md`;
- `docs/liaisonscape-occupied-geometry-feasibility-first-extent-growth1-result.md`;
- `experimental/structural-formulation1/` through `3/` artifacts;
- current Label-Capacity, Infinite-Canvas, and Occupied-Geometry result artifacts.

Current structural arms used `tools/generic-crossing-search.mjs` with the
recorded environment arms and current Product evaluator. Actual Product
evidence was restricted to the real-App historical comparison surface and the
previously completed current-HQ operation-local smoke. No diagnostic renderer
was used as a substitute for Product visual quality.

No LiaisonScape runtime source or test source was changed. No Product default,
provider, Dataset, persistence, authority, or historical result document was
changed.

## Knowledge and roadmap disposition

No cross-repository knowledge candidate is promoted. The result is
LiaisonScape-specific and the equivalence gap remains open.

`CHECKPOINT COMPLETE - HISTORICAL POST REMAINS A SCOPED VISUAL REFERENCE;
CURRENT CAPACITY LINEAGE REMAINS PROMISING BUT A FAIR CROSS-LINEAGE WINNER IS
NOT ESTABLISHED`
