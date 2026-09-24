# LiaisonScape Layout and Auto Layout Chronology

Status: **HISTORICAL ROADMAP EVIDENCE — NOT CURRENT PLANNING AUTHORITY**

The early Initial Placement / routing section below was extracted from
`docs/roadmap.md` at `dd3db43` (`docs: compress Seed PR-3 Browser roadmap
lineage`) in its original source order. The later Automatic Display and
Explicit Auto Layout entries preserve complete original H3 blocks extracted
from `docs/roadmap.md` at `e17e778` (`docs: slim roadmap release and cross-app
tranche`). Dates, status wording, evidence, and scope limitations are retained.
The pre-coordination Initial Layout Product / Provider / Frontier / Presentation
progression was extracted from `docs/roadmap.md` at `c275018`
(`docs: migrate Initial Placement routing chronology`), preserving its dated
checkpoint wording and source order.
Relative Markdown hrefs are adjusted only to resolve from this file; original
path-only prose is unchanged. Current priorities, accepted Automatic Display
status, Human Check B's qualified disposition, and open diagnostics/quality
follow-ups remain in the [current roadmap section](../roadmap.md#current-initial-layout-parallel-presentation-coordination-2026-09-13).

## Early Automatic Layout Experiment 1 Progression (2026-08-18)

The following Roadmap experiment progression was extracted from
`docs/roadmap.md` at parent commit
`2ee9a3e5327fdc71ab2dfc8c1c8d926231dc22ea`, preserving its original wording
and source order. Its dated result and `next experiment` language records the
state of that Roadmap snapshot only. Detailed experiment evidence remains in
the dedicated result and audit documents; current Layout persistence
boundaries remain in the roadmap.

Experiment 1 Label Stability is complete as bounded evidence. The
previous-placement approach showed partial improvement without changing
Dataset or Layout persistence. The next bounded experiment is graph density /
spacing, recorded in
`docs/automatic-layout-experiment-1-label-stability-result.md`.

Experiment 1B Density/Framing is now recorded as inconclusive evidence. Its
temporary spacing and initial-framing implementation was not adopted, and
current evidence does not support viewport framing as the primary cause of
label jumps. The next bounded experiment is Experiment 1C Angular Freedom.
Layout schema and identifier work remain not started.

The Experiment 1B follow-up found that expanding uniform Derived spacing from
`240 x 180` to the temporary `360 x 270` comparison did not materially
increase screen-space breathing room because automatic fit reduced the display
scale as graph bounds grew. Graph-space collision conditions may still change.
Node-based fit bounds, fixed 16-direction Node-label candidates, collision
penalties, and Relation-path effects remain separate unresolved factors. No
new spacing value or fit behavior was accepted, and Experiment 1B remains
`INCONCLUSIVE`.

Experiment 1C Angular Freedom is now recorded as bounded evidence with a
`CLEAR IMPROVEMENT / DIRECTION SUPPORTED` result. Increasing Node-label
candidate resolution from 16 to the temporary 32-direction comparison
exposed useful intermediate directions and improved some collision-triggered
placements. The comparison did not select 32 as a final constant or change
label distance, collision scoring, geometry, fit behavior, routing, or
persistence. The next bounded experiment is Experiment 1D Owning-Node
Proximity.

Experiment 1D Owning-Node Proximity is now recorded as
`MIXED / BOUNDED IMPROVEMENT`. The temporary axis-separated distance formula
showed some near-vertical improvement, but no clear diagonal or
long-description improvement. The exact formula was not adopted and the
baseline distance calculation was restored. Owning-Node proximity remains
unresolved; Angular Freedom remains the stronger supported direction. The next
bounded experiment is Experiment 1E Node-Label Recovery.

Experiment 1E Node-Label Recovery is now recorded as
`INCONCLUSIVE / DENSITY-LIMITED`. Recovery could return labels closer when
nearby preferred candidates became genuinely free after substantial Node
separation, but ordinary initial density often kept those candidates blocked.
The exact recovery gate was not adopted; previous-placement hysteresis and
the 32-direction baseline remain. Graph geometry density has stronger evidence
as an upstream factor. The next bounded experiment is Experiment 1F
Anisotropic Derived Spacing.

Experiment 1F Anisotropic Derived Spacing is recorded as
`INCONCLUSIVE / LIMITED APPLICABILITY`. The `360 x 180` fallback comparison
did not adequately exercise the main manual targets because stored Coordinates
and temporary direct-creation positions bypass the fallback grid. The
temporary spacing was not adopted and the `240 x 180` baseline was restored.
Future work should provide an intentional Coordinate-free automatic-layout
demonstration Dataset. Relation-label midpoint recovery and normal-distance
recovery remain separate future experiments.

Experiment 1G Node-Label Cardinal Preference is recorded as
`BOUNDED IMPROVEMENT / DIRECTION SUPPORTED`. A temporary `0.5` penalty per
11.25-degree step from the nearest cardinal axis made sparse placements more
orderly while retaining all 32 legal directions for dense-graph escape. The
weight is not final, cardinal-only placement is not accepted, and proximity
and density remain separate concerns. Future work now includes Node-label
drag-follow responsiveness during active Node movement and bounded
multi-line description wrapping; wrapping was not implemented. The next
temporary experiment is Experiment 1H Node-Label Drag-Follow Responsiveness.

Experiment 1H Node-Label Drag-Follow Responsiveness is recorded as
`CLEAR IMPROVEMENT / DIRECTION SUPPORTED`. Bypassing previous-placement
hysteresis only for the actively dragged Node's own label removed the observed
fast-drag trailing while preserving hysteresis for other labels. The exact
rule remains experimental. Future routing evidence should distinguish label
readability and ownership from edge overlap/crossing, and self-loop
orientation versus Node-label clearance remains a separate candidate.

Experiment 1I Bounded Description Wrapping is recorded as
`CLEAR IMPROVEMENT / DIRECTION SUPPORTED`. Preserving the 28-character visible
content limit while wrapping to a temporary maximum of two lines at width 20
reduced wide description footprints and improved dense readability and
automatic placement in English and Japanese. The geometry audit found an
8-unit Node-boundary-to-LabelRect-edge gap in both pure vertical and horizontal
placement; optical glyph inset remains separate. The temporary global +3
vertical shift was rejected. The next experiment is 1J Node-Facing Optical
Inset.

Experiment 1J Node-Facing Optical Inset is recorded as
`MIXED / DIRECTIONAL OPTICAL ASYMMETRY CONFIRMED`. A uniform 3px radial
text-only nudge produced little improvement above Nodes and over-corrected
below Nodes, so it was not adopted. LabelRect clearance remains unchanged;
future work should inspect visual geometry before another optical adjustment.
Qualitatively, 32 directions plus cardinal preference also appear to reduce
manual Node-label repositioning, though this is not yet a measured metric. The
next audit is Experiment 1K Directional Optical Geometry.

Experiment 1K Directional Optical Geometry is recorded as
`AUDIT COMPLETE / GEOMETRY CLARIFIED`. The audit confirmed an 8-unit
Node-boundary-to-LabelRect-edge clearance for pure horizontal and vertical
placements, a transparent hit rectangle, and TRUE GEOMETRIC TERMINATION at
the invisible LabelRect boundary. Directional optical asymmetry remains a
rendered-glyph question; adaptive connector visibility is recorded only as
future presentation research. No production geometry change was adopted.
The next temporary experiment is 1L Relation-label Drag-Follow
Responsiveness.

Experiment 1L Relation-label Drag-Follow Responsiveness is recorded as
`CLEAR IMPROVEMENT / DIRECTION SUPPORTED`. Bypassing previous-placement
hysteresis only for Relations incident to the actively dragged Node reduced
horizontal, vertical, and diagonal trailing while preserving stability for
unrelated Relations. Self-loops were included by the same endpoint condition.
Some labels still remain too far from their edge after movement; normal-
distance recovery and along-edge / midpoint recovery remain independent,
separate experiments. The next temporary experiment is 1M Relation-label
Normal-Distance Recovery.

## Early Initial Placement and Routing Progression (2026-08-30 to 2026-09-01)

The following complete original H3/H4 blocks were extracted from the roadmap
in source order. Their historical status language remains a dated snapshot;
the current Initial Layout coordination section remains the sole planning
authority.

### E2R-LIAISONSCAPE-COORDINATELESS-PLACEMENT-COMPARISON-AUDIT1 (2026-08-30)

The stored-versus-derived-versus-explicit-Auto-Layout comparison is recorded in
[LiaisonScape Coordinate-less Placement Comparison
Audit](../liaisonscape-coordinate-less-placement-comparison-audit.md). The result is
`ACCEPTED - CURRENT STORED SAMPLE COORDINATES REMAIN PREFERRED`. Detailed evidence and
qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-RELATION-ROUTING-PRESENTATION-QUALITY-AUDIT1 (2026-08-30)

The Relation routing / presentation quality audit is recorded in [LiaisonScape Relation
Routing / Presentation Quality
Audit](../liaisonscape-relation-routing-presentation-quality-audit.md). The result is
`ROUTING / PRESENTATION FOLLOW-UP REQUIRED - INITIAL PLACEMENT IS NOT PRIMARY CAUSE`.
Detailed evidence and qualifications remain in the linked authority; this dated
checkpoint does not change current execution order or authorize work beyond its recorded
scope.

### E2R-LIAISONSCAPE-SELF-LOOP-SAME-GEOMETRY-COUNTERFACTUAL1 (2026-08-30)

The self-loop same-geometry counterfactual is recorded in [LiaisonScape Self-Loop
Same-Geometry Counterfactual](../liaisonscape-self-loop-same-geometry-counterfactual.md).
The result is `NOT JUSTIFIED - SAME-GEOMETRY COUNTERFACTUAL SHOWS NO CLEARLY BETTER
SELF-LOOP ROUTE`. Detailed evidence and qualifications remain in the linked authority;
this dated checkpoint does not change current execution order or authorize work beyond
its recorded scope.

### E2R-LIAISONSCAPE-REVERSE-ENDPOINT-PARALLEL-PHYSICAL-SIDE-FIX1 (2026-08-30)

The reverse-endpoint parallel physical-side fix is recorded in [LiaisonScape
Reverse-Endpoint Parallel Physical-Side
Fix](../liaisonscape-reverse-endpoint-parallel-physical-side-fix.md). Automatic non-self
parallel base offsets now use a canonical unordered endpoint frame, so A->B and B->A
retain opposite physical sides while their semantic directions and arrows remain
unchanged. Detailed evidence and qualifications remain in the linked authority; this
dated checkpoint does not change current execution order or authorize work beyond its
recorded scope.

### E2R-LIAISONSCAPE-PARALLEL-OBSTACLE-SIDE-COLLAPSE-AUDIT1 (2026-08-30)

The obstacle side-collapse audit is recorded in [LiaisonScape Parallel Obstacle
Side-Collapse Audit](../liaisonscape-parallel-obstacle-side-collapse-audit.md). The result
is `CAUSALITY CONFIRMED - OBSTACLE ROUTING INDEPENDENTLY COLLAPSES PARALLEL SIDES`: a
one-sided obstacle can make individually scored routes choose the same escape side even
after clean base normalization. Detailed evidence and qualifications remain in the
linked authority; this dated checkpoint does not change current execution order or
authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-PARALLEL-OBSTACLE-SIDE-PRESERVATION-FIX1 (2026-08-30)

The bounded obstacle side-preservation fix is recorded in [LiaisonScape Parallel
Obstacle Side-Preservation
Fix](../liaisonscape-parallel-obstacle-side-preservation-fix.md). Safe candidates that
preserve the existing parallel physical side are now preferred lexicographically, while
the existing best-candidate fallback allows side switching when no such candidate is
safe. Detailed evidence and qualifications remain in the linked authority; this dated
checkpoint does not change current execution order or authorize work beyond its recorded
scope.

### E2R-LIAISONSCAPE-FOREIGN-NODE-CLEARANCE-FIX1 (2026-08-30)

The foreign-node clearance audit is recorded in [LiaisonScape Foreign-Node Clearance
Audit](../liaisonscape-foreign-node-clearance-audit.md). The result is `NOT REPRODUCED`:
current Lighthouse stored coordinates keep all ordinary Relation routes outside the
existing 60-unit node-influence region. Detailed evidence and qualifications remain in
the linked authority; this dated checkpoint does not change current execution order or
authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-RELATION-LABEL-NORMAL-DISTANCE-RECOVERY-FIX1 (2026-08-30)

The Relation-label normal-distance audit is recorded in [LiaisonScape Relation-Label
Normal-Distance Recovery
Audit](../liaisonscape-relation-label-normal-distance-recovery-audit.md). The result is
`NOT JUSTIFIED`: the existing label helper already returns an automatic label toward its
owner Edge when pressure disappears, while keeping the along-edge anchor stable and
retaining necessary displacement when collisions remain. Detailed evidence and
qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-RELATION-LABEL-ALONG-EDGE-MIDPOINT-RECOVERY-FIX1 (2026-08-30)

The along-edge / midpoint recovery audit is recorded in [LiaisonScape Relation-Label
Along-Edge Recovery Audit](../liaisonscape-relation-label-along-edge-recovery-audit.md).
The result is `NOT JUSTIFIED`: existing candidate selection returns labels toward the
preferred midpoint when pressure disappears, while preserving along-edge displacement
whenever the preferred position remains blocked. Detailed evidence and qualifications
remain in the linked authority; this dated checkpoint does not change current execution
order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-RELATION-LABEL-FOREIGN-EDGE-OWNERSHIP-FIX1 (2026-08-30)

The foreign-edge ownership audit is recorded in [LiaisonScape Relation-Label
Foreign-Edge Ownership
Audit](../liaisonscape-relation-label-foreign-edge-ownership-audit.md). The result is `NOT
JUSTIFIED`: current automatic label candidates already place representative Lighthouse
labels nearer to their owning Relation than to the nearest foreign Relation. Detailed
evidence and qualifications remain in the linked authority; this dated checkpoint does
not change current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-ORDINARY-EDGE-CROSSING-CONGESTION-FIX1 (2026-08-30)

The ordinary-edge crossing audit is recorded in [LiaisonScape Ordinary-Edge Crossing
Audit](../liaisonscape-ordinary-edge-crossing-audit.md). The result is `NOT REPRODUCED`:
the current Lighthouse stored geometry has zero true non-endpoint ordinary-edge
crossings and no sampled near-crossing pair below the diagnostic 20-unit band. Detailed
evidence and qualifications remain in the linked authority; this dated checkpoint does
not change current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-SHARED-ENDPOINT-FANOUT-CONGESTION-FIX1 (2026-08-30)

The shared-endpoint fan-out audit is recorded in [LiaisonScape Shared-Endpoint Fan-Out
Audit](../liaisonscape-shared-endpoint-fanout-audit.md). The result is `NOT REPRODUCED`:
the current Lighthouse geometry has no material post-boundary bundling. Detailed
evidence and qualifications remain in the linked authority; this dated checkpoint does
not change current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-GRIDNESS-COUNTERFACTUAL1 (2026-08-30)

The gridness counterfactual is recorded in [LiaisonScape Initial Node Placement Gridness
Counterfactual](../liaisonscape-initial-node-placement-gridness-counterfactual.md). The
result is `DIRECTION SUPPORTED`: the coordinate-less fallback exhibits strong
repeated-row gridness, while the existing Auto Layout counterfactual removes exact X/Y
alignments. Detailed evidence and qualifications remain in the linked authority; this
dated checkpoint does not change current execution order or authorize work beyond its
recorded scope.

### E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-NON-GRID-EXPERIMENT1 (2026-08-30)

The non-grid experiment is recorded in [LiaisonScape Initial Node Placement Non-Grid
Experiment](../liaisonscape-initial-node-placement-non-grid-experiment.md). The result is
`PARTIAL`: bounded runs of the existing Auto Layout mechanics remove the coordinate-less
fallback's repeated-row gridness deterministically, but full startup reuse remains
unproven for mixed Coordinates, routing/label quality, performance, and ownership
semantics. Detailed evidence and qualifications remain in the linked authority; this
dated checkpoint does not change current execution order or authorize work beyond its
recorded scope.

### E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-BOUNDED-SETTLING-IMPLEMENTATION1 (2026-08-30)

The bounded settling implementation is recorded in [LiaisonScape Initial Node Placement
Bounded Settling
Implementation](../liaisonscape-initial-node-placement-bounded-settling-implementation.md).
The result is `IMPLEMENTED`: Coordinate-less Dataset opening now uses a deterministic
three-iteration derived placement helper based on the existing Auto Layout mechanics.
Detailed evidence and qualifications remain in the linked authority; this dated
checkpoint does not change current execution order or authorize work beyond its recorded
scope.

### E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-CONGESTION-SETTLING-DEPTH-EXPERIMENT1 (2026-08-30)

The settling-depth experiment is recorded in [LiaisonScape Initial Node Placement
Congestion / Settling Depth
Experiment](../liaisonscape-initial-node-placement-congestion-settling-depth-experiment.md).
The result is `RESEARCH REQUIRED`: 6/12-iteration counterfactuals compact the Node
geometry beyond the accepted 3-iteration candidate, but the existing solver is not
Edge-crossing-, route-clearance-, or label-aware. Detailed evidence and qualifications
remain in the linked authority; this dated checkpoint does not change current execution
order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-NODE-LAYOUT-PRESENTATION-PRESSURE-OBJECTIVE-DECOMPOSITION1 (2026-08-30)

The presentation-pressure decomposition is recorded in [LiaisonScape Initial Node
Placement Presentation-Pressure Objective
Decomposition](../liaisonscape-initial-node-placement-presentation-pressure-objective-decomposition.md).
The result is `RESEARCH REQUIRED`: the existing Node-only solver does not account for
Edge, route-corridor, or label pressure, but direct integration of production routing
and labels would create an unbounded feedback loop. Detailed evidence and qualifications
remain in the linked authority; this dated checkpoint does not change current execution
order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-PARALLEL-SYNTHETIC-PHYSICAL-SIDE-COUNTERFACTUAL1 (2026-08-30)

The synthetic physical-side counterfactual is recorded in [LiaisonScape Parallel
Synthetic Physical-Side
Counterfactual](../liaisonscape-parallel-synthetic-physical-side-counterfactual.md). The
result is `CAUSALITY CONFIRMED - REVERSE-ENDPOINT PHYSICAL-SIDE NORMALIZATION FIX
REQUIRED`. Detailed evidence and qualifications remain in the linked authority; this
dated checkpoint does not change current execution order or authorize work beyond its
recorded scope.

### E2R-LIAISONSCAPE-REVERSE-ENDPOINT-PARALLEL-PHYSICAL-SIDE-FIX1 (2026-08-30)

The reverse-endpoint parallel physical-side fix is recorded in [LiaisonScape
Reverse-Endpoint Parallel Physical-Side
Fix](../liaisonscape-reverse-endpoint-parallel-physical-side-fix.md). Automatic non-self
parallel base offsets now use a canonical unordered endpoint frame, so A->B and B->A
retain opposite physical sides while their semantic directions and arrows remain
unchanged. Detailed evidence and qualifications remain in the linked authority; this
dated checkpoint does not change current execution order or authorize work beyond its
recorded scope.

### E2R-LIAISONSCAPE-PARALLEL-PHYSICAL-SIDE-DECOMPOSITION-AUDIT1 (2026-08-30)

The parallel physical-side decomposition is recorded in [LiaisonScape Parallel
Physical-Side Decomposition
Audit](../liaisonscape-parallel-physical-side-decomposition-audit.md). The result is
`INSUFFICIENT EVIDENCE - PARALLEL PHYSICAL-SIDE CAUSE NOT ISOLATED`. Detailed evidence
and qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-ROUTING-DECOMPOSITION-SELF-LOOP-AUDIT1 (2026-08-30)

The routing decomposition and self-loop audit is recorded in [LiaisonScape Routing
Decomposition / Self-Loop Audit](../liaisonscape-routing-decomposition-self-loop-audit.md).
The result is `SELF-LOOP ROUTING FIX NOT YET JUSTIFIED - INSUFFICIENT CAUSAL EVIDENCE`.
Detailed evidence and qualifications remain in the linked authority; this dated
checkpoint does not change current execution order or authorize work beyond its recorded
scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-EDGE-CORRIDOR-PROXY-EXPERIMENT1 (2026-08-30)

The Edge-corridor proxy experiment is recorded in [LiaisonScape Initial Placement
Edge-Corridor Proxy
Experiment](../liaisonscape-initial-placement-edge-corridor-proxy-experiment.md). The
result is `PARTIAL`: straight topological chord crossing (P1) and separation (P2) detect
controlled synthetic cases, but Lighthouse ranking does not explain production routing
or the manual congestion concern. Detailed evidence and qualifications remain in the
linked authority; this dated checkpoint does not change current execution order or
authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LABEL-PRESSURE-PROXY-EXPERIMENT1 (2026-08-30)

The Label-pressure proxy experiment is recorded in [LiaisonScape Initial Placement
Label-Pressure Proxy
Experiment](../liaisonscape-initial-placement-label-pressure-proxy-experiment.md). The
result is `RESEARCH REQUIRED`: actual label pressure depends on production route
samples, candidate anchors, occupied paths, and localized text footprint, so a
straight-chord proxy does not explain Lighthouse reliably. Detailed evidence and
qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-DEGREE-CENTERED-OUTWARD-PLACEMENT-EXPERIMENT1 (2026-08-30)

The degree-centered outward experiment is recorded in [LiaisonScape Degree-Centered
Outward Placement
Experiment](../liaisonscape-degree-centered-outward-placement-experiment.md). The result is
`PARTIAL`: Lighthouse centrality selects `clara` consistently, supporting a future
central-hub seed experiment, but label-aware sectoring and the post-settle effect were
not established. Detailed evidence and qualifications remain in the linked authority;
this dated checkpoint does not change current execution order or authorize work beyond
its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-NODE-REPULSION-SENSITIVITY-EXPERIMENT1 (2026-08-30)

The Node-repulsion sensitivity experiment is recorded in [LiaisonScape Initial Placement
Node-Repulsion Sensitivity
Experiment](../liaisonscape-initial-placement-node-repulsion-sensitivity-experiment.md).
The result is `NOT SUPPORTED`: the current three-iteration candidate's minimum Node
distance is already beyond the 96-unit repulsion activation distance, and repulsion
tuning does not explain the presentation concern. Detailed evidence and qualifications
remain in the linked authority; this dated checkpoint does not change current execution
order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SOURCE-RECONCILIATION-AND-TARGET-EDGE-LENGTH-EXPERIMENT1 (2026-08-30)

The source reconciliation and target-edge-length experiment is recorded in [LiaisonScape
Initial Placement Source Reconciliation and Target Edge Length
Experiment](../liaisonscape-initial-placement-source-reconciliation-and-target-edge-length-experiment.md).
The result is `SUPPORTED BY EQUATIONS`: live source confirms that Coordinate-less
opening uses the solver's own degree-ranked seed, not the previously described fallback
seed, and that always-attractive connected-node force explains continued compression.
Detailed evidence and qualifications remain in the linked authority; this dated
checkpoint does not change current execution order or authorize work beyond its recorded
scope.

### E2R-LIAISONSCAPE-TARGET-EDGE-LENGTH-CANDIDATE-AND-SHARED-SOLVER-BOUNDARY-EXPERIMENT1 (2026-08-30)

The target-edge-length and shared-solver boundary experiment is recorded in
[LiaisonScape Target Edge Length Candidate and Shared Solver Boundary
Experiment](../liaisonscape-target-edge-length-candidate-and-shared-solver-boundary-experiment.md).
The result is `BLOCKED`: current source equations explain continued compression, but no
non-arbitrary target Edge length is justified by existing semantic or geometric
evidence. Detailed evidence and qualifications remain in the linked authority; this
dated checkpoint does not change current execution order or authorize work beyond its
recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MULTI-HOP-TOPOLOGY-SEED-EXPERIMENT1 (2026-08-30)

The multi-hop topology seed experiment is recorded in [LiaisonScape Initial Placement
Multi-Hop Topology Seed
Experiment](../liaisonscape-initial-placement-multi-hop-topology-seed-experiment.md). The
result is `NOT SUPPORTED`: live source shows a degree-ranked but topology-agnostic ring
seed, while no bounded external-seed comparison established material multi-hop
presentation benefit. Detailed evidence and qualifications remain in the linked
authority; this dated checkpoint does not change current execution order or authorize
work beyond its recorded scope.

### E2R-LIAISONSCAPE-EXTERNAL-SEED-INJECTION-AND-MULTI-HOP-COUNTERFACTUAL1 (2026-08-30)

The causal external-seed experiment is recorded in [LiaisonScape External-Seed Injection
and Multi-Hop
Counterfactual](../liaisonscape-external-seed-injection-and-multi-hop-counterfactual.md).
The result is `PARTIAL`: round-trip injection was bit-identical, BFS hop rings improved
Lighthouse spacing but mixed branches, and parent sectors materially improved Lighthouse
routing and labels. Detailed evidence and qualifications remain in the linked authority;
this dated checkpoint does not change current execution order or authorize work beyond
its recorded scope.

### E2R-LIAISONSCAPE-BRANCH-PRESERVING-SEED-TOPOLOGY-GUARD-EXPERIMENT1 (2026-08-30)

The topology-guard experiment is recorded in [LiaisonScape Branch-Preserving Seed
Topology Guard
Experiment](../liaisonscape-branch-preserving-seed-topology-guard-experiment.md). The
result is `PARTIAL`: categorical true branching plus a unique maximum root selects C for
Lighthouse and protects chain, cycle, dense, and equal-two-hub controls, but it accepts
unsafe unequal-two-hub and cross-linked-branch cases. Detailed evidence and
qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-PRESENTATION-AWARE-LOCAL-EXPANSION-COUNTERFACTUAL1 (2026-08-30)

The bounded post-presentation experiment is recorded in [LiaisonScape Presentation-Aware
Local Expansion
Counterfactual](../liaisonscape-presentation-aware-local-expansion-counterfactual.md). The
result is `PARTIAL`: one `clara`-centered 1-hop pass reduced actual Lighthouse
Relation-label/Node conflicts but did not reduce any ordinary crossing, and one label
conflict migrated. Detailed evidence and qualifications remain in the linked authority;
this dated checkpoint does not change current execution order or authorize work beyond
its recorded scope.

### E2R-LIAISONSCAPE-LOCAL-EXPANSION-ROUTING-SIGNAL-DECOMPOSITION1 (2026-08-30)

The bounded causal diagnosis is recorded in [LiaisonScape Local-Expansion Routing-Signal
Decomposition](../liaisonscape-local-expansion-routing-signal-decomposition.md). The result
is `MIXED`: two of seven Lighthouse H2 crossings have a safe bounded single-endpoint
signal, while route-pair swaps, full route-order reversal, and occupied-path removal
retain all seven identities. Detailed evidence and qualifications remain in the linked
authority; this dated checkpoint does not change current execution order or authorize
work beyond its recorded scope.

### E2R-LIAISONSCAPE-ROUTING-CROSSING-MIXED-CAUSE-PRIORITIZATION1 (2026-08-31)

The bounded candidate-space experiment is recorded in [LiaisonScape Routing- Crossing
Mixed-Cause
Prioritization](../liaisonscape-routing-crossing-mixed-cause-prioritization.md). Its result
is `DIRECTION SUPPORTED`: current candidates can safely resolve five of seven English
Lighthouse true crossings through two one-Relation replacements, and both benefits
survive fresh routing and labels. Detailed evidence and qualifications remain in the
linked authority; this dated checkpoint does not change current execution order or
authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-ORDINARY-ROUTE-TRUE-CROSSING-OBJECTIVE-EXPERIMENT1 (2026-08-31)

The bounded objective experiment is recorded in [LiaisonScape Ordinary-Route
True-Crossing Objective
Experiment](../liaisonscape-ordinary-route-true-crossing-objective-experiment.md). Its
result is `TRADE-OFF`: threshold-free X1 preserves hard Node and provisional-label
safety but cannot select the previously proven Lighthouse crossing reductions because
those candidates fail its provisional-label gate. Detailed evidence and qualifications
remain in the linked authority; this dated checkpoint does not change current execution
order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-NEAR-CENTER-WINNER-DISCONTINUITY-EXPERIMENT1 (2026-09-01)

The live frontier experiment is recorded in [LiaisonScape Near-Center Winner
Discontinuity
Experiment](../liaisonscape-automatic-route-near-center-winner-discontinuity-experiment.md).
It is `F7 / MIXED`: near-center candidates exist, but different Relations lose them to
Node-label pressure, occupied paths, or combined safety cliffs. Detailed evidence and
qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-THREE-LABEL-CORRIDOR-FEASIBILITY-AUDIT1 (2026-09-01)

The feasibility audit is recorded in [LiaisonScape Three-Label Corridor Feasibility
Audit](../liaisonscape-automatic-route-three-label-corridor-feasibility-audit.md). It is
`BLOCKED / F6`: pressure omission is established, but the current label placement API
does not expose the full candidate inventory and exact safety semantics needed for a
joint feasibility oracle. Detailed evidence and qualifications remain in the linked
authority; this dated checkpoint does not change current execution order or authorize
work beyond its recorded scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-MULTI-LABEL-CORRIDOR-ISOLATION1 (2026-09-01)

The canonical App-pipeline isolation is recorded in [LiaisonScape Multi-Label Corridor
Isolation](../liaisonscape-automatic-route-multi-label-corridor-isolation.md). It is
`DIRECTION SUPPORTED`: both Clara/Thomas Relations require all three observed owners
under live omission, while Sofia/Archive has alternative single-owner sets and
Authority/Lighthouse is a foreign-label control. Detailed evidence and qualifications
remain in the linked authority; this dated checkpoint does not change current execution
order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-LIGHTHOUSE-LOCAL-CURVATURE-BLOCKER-INVENTORY1 (2026-09-01)

The Japanese Lighthouse inventory is recorded in [LiaisonScape Lighthouse Local
Curvature Blocker
Inventory](../liaisonscape-lighthouse-local-curvature-blocker-inventory.md). It is `MIXED`:
Clara/Thomas and Sofia/Archive are multiple-label cases, while Authority/Lighthouse is a
single foreign-label case; no single endpoint-label qualifying case was found. Detailed
evidence and qualifications remain in the linked authority; this dated checkpoint does
not change current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-ENDPOINT-LABEL-CORRIDOR-RELAXATION-EXPERIMENT1 (2026-09-01)

The controlled experiment is recorded in [LiaisonScape Endpoint Label Corridor
Relaxation
Experiment](../liaisonscape-automatic-route-endpoint-label-corridor-relaxation-experiment.md).
It is `PARTIAL`: existing candidates plus target-owner-only previous-placement
preference removal reopened a single endpoint corridor through chord 160, but a second
endpoint blocker remained decisive and no Lighthouse case was shown. Detailed evidence
and qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-SHORT-EDGE-NORMALIZED-CURVATURE-AUDIT1 (2026-08-31)

The controlled source audit is recorded in [LiaisonScape Automatic-Route Short-Edge /
Normalized-Curvature
Audit](../liaisonscape-automatic-route-short-edge-normalized-curvature-audit.md). It is
`MIXED`: absolute offsets amplify normalized curvature on short chords, while ordinary
automatic endpoint labels alone did not curve the minimal fixture; endpoint labels
occupying the corridor did select nonzero live routes. Detailed evidence and
qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-ORDINARY-ROUTE-NODE-LABEL-CROSSING-PRIORITY-SEMANTICS-EXPERIMENT1 (2026-08-31)

The bounded semantics experiment is recorded in [LiaisonScape Ordinary-Route
Node-Label-Crossing Priority Semantics
Experiment](../liaisonscape-ordinary-route-node-label-crossing-priority-semantics-experiment.md).
Its result is `MIXED`: provisional route/Node-label intersections are only partially
predictive of final presentation safety. Detailed evidence and qualifications remain in
the linked authority; this dated checkpoint does not change current execution order or
authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-HISTORICAL-REPLAY-AUDIT1 (2026-08-31)

The historical detached-worktree replay is recorded in [LiaisonScape Automatic-Route
Historical Replay Audit](../liaisonscape-automatic-route-historical-replay-audit.md). Its
result is `TRADE-OFF — EARLIER ROUTING IS TEMPORALLY SMOOTHER BUT REINTRODUCES ACCEPTED
COLLISION REGRESSIONS`: G3/G4 have a stable beacon trajectory, while those generations
predate accepted physical-side protections and omit current provisional-label behavior;
G5 also fails the foreign-Node clearance control. Detailed evidence and qualifications
remain in the linked authority; this dated checkpoint does not change current execution
order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-HISTORICAL-SAFETY-DELTA-ISOLATION1 (2026-08-31)

The property-level replay is recorded in [LiaisonScape Automatic-Route Historical
Safety-Delta
Isolation](../liaisonscape-automatic-route-historical-safety-delta-isolation.md). Its
result is `MIXED — PROVISIONAL-LABEL PRESSURE IS CAUSAL BUT NO GLOBAL RELAXATION IS
SAFE`: the hard provisional-label boundary alone causes the beacon flip, while full
removal recovers continuity but changes route and label identities across both locales.
Detailed evidence and qualifications remain in the linked authority; this dated
checkpoint does not change current execution order or authorize work beyond its recorded
scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-LABEL-PRESSURE-TEMPORAL-SEMANTICS-EXPERIMENT1 (2026-08-31)

The active-drag and release comparison is recorded in [LiaisonScape Automatic- Route
Label-Pressure Temporal Semantics
Experiment](../liaisonscape-automatic-route-label-pressure-temporal-semantics-experiment.md).
Its result is `TRADE-OFF — DRAG-TIME LABEL DEFER REMOVES THE MID-DRAG FLIP BUT MOVES THE
SAME DISCONTINUITY TO RELEASE`: snapshot, defer, and offset hold make the beacon drag
smooth, but each restores the current 216-unit discontinuity when released, and defer
has the largest temporary label-conflict inventory. Detailed evidence and qualifications
remain in the linked authority; this dated checkpoint does not change current execution
order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FINITE-REVALIDATION-EXPERIMENT1 (2026-08-31)

The bounded two-stage experiment is recorded in [LiaisonScape Automatic-Route
Final-Label Finite Revalidation
Experiment](../liaisonscape-automatic-route-final-label-finite-revalidation-experiment.md).
Its result is `MIXED — FINAL-LABEL REVALIDATION IS INFORMATIVE BUT NOT YET A STABLE
SELECTION SEMANTIC`: using Pass-1 final Node-label rectangles for one otherwise-current
arbitration pass changes six English and two Japanese ordinary routes. Detailed evidence
and qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-STABILITY-EXPERIMENT1 (2026-08-31)

The bounded feedback probe is recorded in [LiaisonScape Automatic-Route Final-Label
Feedback Stability
Experiment](../liaisonscape-automatic-route-final-label-feedback-stability-experiment.md).
Its result is `PARTIAL — JA REQUIRES ADDITIONAL FINAL-LABEL FEEDBACK PASSES BEFORE
STABILIZING`: EN is fixed after Pass 2; JA changes two routes at Pass 2, four further
routes at Pass 3, and is fixed at Pass 4. Detailed evidence and qualifications remain in
the linked authority; this dated checkpoint does not change current execution order or
authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-CASCADE-CAUSE-ISOLATION1 (2026-08-31)

The bounded cause isolation is recorded in [LiaisonScape Automatic-Route Final-Label
Cascade Cause
Isolation](../liaisonscape-automatic-route-final-label-cascade-cause-isolation.md). Its
result is `DIRECTION SUPPORTED`: reverting only the Pass-2 Clara final Node-label
rectangle to its Pass-1 geometry removes all four Japanese Pass-3 Clara-centred route
changes. Detailed evidence and qualifications remain in the linked authority; this dated
checkpoint does not change current execution order or authorize work beyond its recorded
scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-HARD-BOUNDARY-SEMANTICS-EXPERIMENT1 (2026-08-31)

The score-boundary attribution attempt is recorded in [LiaisonScape Automatic-Route
Final-Label Score-Boundary Semantics
Experiment](../liaisonscape-automatic-route-final-label-hard-boundary-semantics-experiment.md).
It is `BLOCKED`: a partial score reconstruction did not reproduce all four live Japanese
Pass-3 winners, so attributing them to hard, halo, occupied-path, or tie semantics would
be unreliable. Detailed evidence and qualifications remain in the linked authority; this
dated checkpoint does not change current execution order or authorize work beyond its
recorded scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-SCORE-TRACE-REPRODUCTION1 (2026-08-31)

The live-score trace reproduction attempt is recorded in [LiaisonScape Automatic-Route
Final-Label Score-Trace
Reproduction](../liaisonscape-automatic-route-final-label-score-trace-reproduction.md). It
is `BLOCKED`: a read-only observer can compile inside the live candidate loop, but an
App-pipeline L0/L1 harness has not yet attached it and reproduced the eight required
target winners. Detailed evidence and qualifications remain in the linked authority;
this dated checkpoint does not change current execution order or authorize work beyond
its recorded scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-LABEL-HALO-CONTINUITY-SEMANTICS-EXPERIMENT1 (2026-09-01)

The bounded halo-semantics experiment is recorded in [LiaisonScape Automatic-Route
Label-Halo Continuity Semantics
Experiment](../liaisonscape-automatic-route-label-halo-continuity-semantics-experiment.md).
Its result is `PARTIAL`: a hard-preserving magnitude-first diagnostic recovers the
`authority-lighthouse` straight candidate, but its minimum label distance falls from
`20.087` to `5.809`, and the direction does not recover the main Clara/Thomas hard-label
frontier. Detailed evidence and qualifications remain in the linked authority; this
dated checkpoint does not change current execution order or authorize work beyond its
recorded scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-NEAR-CENTER-LABEL-PRESSURE-CONTINUITY-EXPERIMENT1 (2026-09-01)

The canonical App-pipeline label-pressure experiment is recorded in [LiaisonScape
Automatic-Route Near-Center Label-Pressure Continuity
Experiment](../liaisonscape-automatic-route-near-center-label-pressure-continuity-experiment.md).
Its result is `MIXED`: label pressure is causal, but its boundary is Relation-specific.
Detailed evidence and qualifications remain in the linked authority; this dated
checkpoint does not change current execution order or authorize work beyond its recorded
scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-LABEL-HALO-MINIMUM-CLEARANCE-BOUNDARY-AUDIT1 (2026-09-01)

The bounded minimum-clearance audit is recorded in [LiaisonScape Automatic-Route
Label-Halo Minimum-Clearance Boundary
Audit](../liaisonscape-automatic-route-label-halo-minimum-clearance-boundary-audit.md). Its
result is `PARTIAL`: JA authority/lighthouse has reproducible hard-safe breakpoints at
approximately `5.809`, `12.840`, and `20.087`, but the broader graph has dense
Relation-specific breakpoints and EN has no shared boundary with the same effect.
Detailed evidence and qualifications remain in the linked authority; this dated
checkpoint does not change current execution order or authorize work beyond its recorded
scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-HARD-LABEL-CORRIDOR-BOUNDARY-AUDIT1 (2026-09-01)

The bounded hard-label corridor audit is recorded in [LiaisonScape Automatic-Route
Hard-Label Corridor Boundary
Audit](../liaisonscape-automatic-route-hard-label-corridor-boundary-audit.md). Its result
is `MIXED`: in JA, the `clara + archive` hard corridor excludes the `+40/+52`
near-center `mentors` candidates and `-52` is the first hard-safe opposite-side
candidate. Detailed evidence and qualifications remain in the linked authority; this
dated checkpoint does not change current execution order or authorize work beyond its
recorded scope.

### LiaisonScape Node-label collision geometry follow-ups (2026-09-01)

The hard-label corridor audit established that current automatic-route hard
collision uses the full axis-aligned Node-label background rectangle and the
41 sampled route points. The rectangle is a conservative collision obstacle;
it is not the rendered glyph ink itself. The following two future checkpoints
are registered to investigate that distinction without changing the current
runtime contract.

#### E2R-LIAISONSCAPE-NODE-LABEL-INK-GEOMETRY-COLLISION-AUDIT1

Audit whether Node-label collision geometry should be tighter than the full
background rectangle. Compare, in a bounded read-only experiment:

- the current full background rectangle;
- deterministic per-line tight text bounds;
- rendered text/ink bounds where browser measurement is reliable;
- true glyph-outline geometry only if its cross-browser cost is acceptable;
- a simpler deterministic text-bound approximation.

The audit must measure whether empty corners, whitespace, and multiline label
space are unnecessarily forcing Edge curvature, especially in the
Clara/Thomas hard corridor. It must preserve deterministic and cross-browser
routing behavior and must not assume that glyph outlines are automatically the
correct answer. Paint/background geometry and collision geometry remain
separate concepts; registering this audit does not authorize ink-based
Production collision semantics.

#### E2R-LIAISONSCAPE-NODE-LABEL-CONNECTOR-VISIBILITY-AUDIT1

Audit Node-label connector visibility, attachment, and occlusion separately
from collision geometry. The current background rectangle may visually cover
part of a connector even when the connector is logically attached correctly.
The audit should measure the visible connector endpoint, background occlusion,
ownership legibility, text/ink clearance, and multiline JA/EN behavior. It must
determine whether connector geometry should use a separate contract or remain
coupled to the background rectangle; it must not automatically couple
connector changes to route-collision changes.

These are presentation follow-ups only. They do not authorize final-label
feedback adoption, initial-placement changes, parallel-edge bundle changes,
self-loop changes, temporal drag changes, hard-collision relaxation, halo
retuning, candidate-set changes, or a multi-label solver.

The execution order remains:

1. `E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-HARD-CORRIDOR-RELIEF-AUDIT1`
2. `E2R-LIAISONSCAPE-NODE-LABEL-INK-GEOMETRY-COLLISION-AUDIT1`
3. `E2R-LIAISONSCAPE-NODE-LABEL-CONNECTOR-VISIBILITY-AUDIT1`

The first checkpoint remains the immediate next checkpoint. The two new
checkpoints are future registrations only, and no production or preview change
was made by this roadmap update.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-HARD-CORRIDOR-RELIEF-AUDIT1 (2026-09-01)

The read-only Current-to-feedback audit is recorded in [LiaisonScape Automatic-Route
Final-Label Feedback Hard-Corridor Relief
Audit](../liaisonscape-automatic-route-final-label-feedback-hard-corridor-relief-audit.md).
Its result is `CASE10 / MIXED`: JA moves only the Clara final label and keeps the
`mentors` winner at `-52`, while EN changes `mentors` from `-64` to `+40` and makes that
route clear against feedback rectangles but hard-unsafe against the original provisional
Clara rectangle. Detailed evidence and qualifications remain in the linked authority;
this dated checkpoint does not change current execution order or authorize work beyond
its recorded scope.

### E2R-LIAISONSCAPE-NODE-LABEL-INK-GEOMETRY-COLLISION-AUDIT1 (2026-09-01)

The bounded collision-geometry audit is recorded in [LiaisonScape Node-label Ink
Geometry Collision Audit](../liaisonscape-node-label-ink-geometry-collision-audit.md). Its
result is `G2 / EXACT RESULT 2`: deterministic tight-content and per-line regions
relieve some route pressure, but the JA and EN `mentors` primary hard owners remain in
the estimated text region. Detailed evidence and qualifications remain in the linked
authority; this dated checkpoint does not change current execution order or authorize
work beyond its recorded scope.

### E2R-LIAISONSCAPE-PARALLEL-EDGE-BUNDLE-SPACING-AUDIT1 (2026-09-01)

The bounded parallel ordinary-edge audit is recorded in [LiaisonScape Parallel Edge
Bundle Spacing Audit](../liaisonscape-parallel-edge-bundle-spacing-audit.md). Its result is
`CASE 3 / EXACT RESULT 3 / DECISION C`: label pressure shifts an otherwise balanced
`clara-thomas-mentors` / `clara-thomas-supervises` bundle. Detailed evidence and
qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-PARALLEL-EDGE-LABEL-PRESSURE-ISOLATION-EXPERIMENT1 (2026-09-01)

The bounded label-pressure experiment is recorded in [LiaisonScape Parallel Edge
Label-pressure Isolation
Experiment](../liaisonscape-parallel-edge-label-pressure-isolation-experiment.md). Its
result is `CASE 3 / EXACT RESULT 3 / DECISION C`: hard label collision starts the first
parallel side switch, while soft halo and sibling occupied-path pressure amplify the
final one-sided bundle. Detailed evidence and qualifications remain in the linked
authority; this dated checkpoint does not change current execution order or authorize
work beyond its recorded scope.

### E2R-LIAISONSCAPE-PARALLEL-EDGE-HARD-SIDE-SWITCH-CASCADE-AUDIT1 (2026-09-01)

The bounded cascade audit is recorded in [LiaisonScape Parallel Edge Hard-Side-Switch
Cascade Audit](../liaisonscape-parallel-edge-hard-side-switch-cascade-audit.md). Its result
is `CASE 4 / EXACT RESULT 4 / DECISION E`: the current label geometry leaves no
hard-safe opposite-side pair for the Clara/Thomas parallel group. Detailed evidence and
qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-FEEDBACK-INITIAL-PLACEMENT-INTERACTION-AUDIT1 (2026-09-01)

The bounded Final-label feedback / Initial Placement interaction audit is recorded in
[LiaisonScape Automatic-Route Final-Label Feedback / Initial-Placement Interaction
Audit](../liaisonscape-automatic-route-final-label-feedback-initial-placement-interaction-audit.md).
Its result is `CASE 5 / EXACT RESULT 5 / DECISION F`: feedback opens the balanced
parallel corridor on the favorable clean HEAD geometry in both locales, but its effect
changes with starting geometry and locale. Detailed evidence and qualifications remain
in the linked authority; this dated checkpoint does not change current execution order
or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-S0-S1-FOCAL-COORDINATE-ATTRIBUTION-EXPERIMENT1 (2026-09-01)

The narrower S0/S1 focal coordinate attribution experiment is recorded in [LiaisonScape
S0/S1 Focal Coordinate Attribution
Experiment](../liaisonscape-automatic-route-s0-s1-focal-coordinate-attribution-experiment.md).
It replaced the broader locale/start regression audit for immediate execution; that
broader checkpoint remains deferred, not completed or deleted. Detailed evidence and
qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-GLOBAL-TOPOLOGY-ATTRIBUTION-AUDIT1 (2026-09-01)

The exhaustive non-focal attribution audit is recorded in [LiaisonScape
Initial-placement Global-topology Attribution
Audit](../liaisonscape-initial-placement-global-topology-attribution-audit.md). Its result
is `CASE 1 / EXACT RESULT 1 / DECISION A`: the single outside-focal Node `maya` is an
inclusion-minimal V0 sufficient set in JA (`000010`), opening the H1111 feedback
corridor from `0` to `63` safe pairs. Detailed evidence and qualifications remain in the
linked authority; this dated checkpoint does not change current execution order or
authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-QUALITY-CRITERIA-VALIDATION1 (2026-09-01)

The cross-neighborhood and cross-sample validation is recorded in [LiaisonScape
Initial-placement Local-neighborhood Quality Criteria
Validation](../liaisonscape-initial-placement-local-neighborhood-quality-criteria-validation.md).
Its result is `CASE 2 / EXACT RESULT 2 / DECISION A`: the shared-neighbor spacing
criterion is supported by an ordinary Class O neighborhood in Ashen Crown JA/EN, without
using labels, routes, locale, or rendered text as placement inputs and without a
selected hard-safety counterexample. Detailed evidence and qualifications remain in the
linked authority; this dated checkpoint does not change current execution order or
authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-NONFOCAL-NODE-GEOMETRY-CRITERIA-AUDIT1 (2026-09-01)

The bounded non-focal geometry audit is recorded in [LiaisonScape Initial-placement
Non-focal Node Geometry Criteria
Audit](../liaisonscape-initial-placement-nonfocal-node-geometry-criteria-audit.md). Its
result is `CASE 11 / EXACT RESULT 5 / DECISION B`: Maya's coordinate change combines
direct corridor clearance with Node-label and route propagation. Detailed evidence and
qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-SPACING-EXPERIMENT1 (2026-09-01)

The bounded implementation experiment is recorded in [LiaisonScape Initial-placement
Local-neighborhood Spacing
Experiment](../liaisonscape-initial-placement-local-neighborhood-spacing-experiment.md).
Its result is `CASE 6 / EXACT RESULT 6 / DECISION D`: the topology-only shared-neighbor
adjustment opened the selected local angle in Lighthouse and Ashen Crown, but its
displacement semantics introduced new R0 hard route/Node-label conflicts in Lighthouse
and replaced the hard-conflict set in Ashen. Detailed evidence and qualifications remain
in the linked authority; this dated checkpoint does not change current execution order
or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-LOCAL-NEIGHBORHOOD-DISPLACEMENT-BOUNDARY-AUDIT1 (2026-09-01)

The rejected-candidate displacement boundary audit is recorded in [LiaisonScape
Initial-placement Local-neighborhood Displacement Boundary
Audit](../liaisonscape-initial-placement-local-neighborhood-displacement-boundary-audit.md).
Its result is `CASE 4 / EXACT RESULT 2 / DECISION B`: a safe partial forward
displacement region exists in both Lighthouse and Ashen before the first new final-label
conflict, but the rejected minimum-line-distance selector chooses an endpoint as W
rather than the validated shared neighbor in both topologies. Detailed evidence and
qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-TARGET-SELECTION-AUDIT1 (2026-09-01)

The shared-neighbor target-selection audit is recorded in [LiaisonScape
Initial-placement Shared-neighbor Target Selection
Audit](../liaisonscape-initial-placement-shared-neighbor-target-selection-audit.md). Its
result is `CASE 6 / EXACT RESULT 5 / DECISION G`: Lighthouse has a
topology-distinguishable shared-neighbor role because the Clara-Thomas pair has relation
multiplicity two, but Ashen's 21-role overlap cluster leaves the validated Kael role
non-unique. Detailed evidence and qualifications remain in the linked authority; this
dated checkpoint does not change current execution order or authorize work beyond its
recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-ROLE-SYMMETRY-AUDIT1 (2026-09-01)

The shared-neighbor role-symmetry and motif-level identifiability audit is recorded in
[LiaisonScape Initial-placement Shared-neighbor Role Symmetry
Audit](../liaisonscape-initial-placement-shared-neighbor-role-symmetry-audit.md). Its
result is `CASE 10 / EXACT RESULT 5 / DECISION G`: Lighthouse has one unordered triangle
whose Clara-Thomas multiplicity identifies the diagnostic ordered role `(Clara, Thomas;
Maya)`, while Ashen's support triangle has structurally distinguishable Darius, Elara,
and Kael but no source-grounded reason to designate Kael as W. Detailed evidence and
qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SHARED-NEIGHBOR-ADJUSTMENT-SCOPE-AUDIT1 (2026-09-01)

The shared-neighbor adjustment-scope audit is recorded in [LiaisonScape
Initial-placement Shared-neighbor Adjustment Scope
Audit](../liaisonscape-initial-placement-shared-neighbor-adjustment-scope-audit.md). Its
result is `CASE 2 / EXACT RESULT 2 / DECISION A`: an overlap-cluster scope provides one
structural model for isolated motifs and overlapping motifs. Detailed evidence and
qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-QUALITY-CRITERIA-AUDIT1 (2026-09-01)

The motif-cluster quality-criteria audit is recorded in [LiaisonScape Initial-placement
Motif-cluster Quality Criteria
Audit](../liaisonscape-initial-placement-motif-cluster-quality-criteria-audit.md). Its
result is `CASE 6 / EXACT RESULT 2 / DECISION D`: the evidence supports a two-layer
descriptive bottleneck profile. Detailed evidence and qualifications remain in the
linked authority; this dated checkpoint does not change current execution order or
authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-QUALITY-CRITERIA-VALIDATION1 (2026-09-01)

The two-layer motif/overlap-cluster quality validation is recorded in [LiaisonScape
Initial-placement Motif-cluster Quality Criteria
Validation](../liaisonscape-initial-placement-motif-cluster-quality-criteria-validation.md).
Its result is `CASE 2 / EXACT RESULT 2 / DECISION B`: the two-layer profile is validated
after collapsing redundant descriptors. Detailed evidence and qualifications remain in
the linked authority; this dated checkpoint does not change current execution order or
authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-REGULARIZATION-SEMANTICS-AUDIT1 (2026-09-01)

The motif-cluster regularization semantics audit is recorded in [LiaisonScape
Initial-placement Motif-cluster Regularization Semantics
Audit](../liaisonscape-initial-placement-motif-cluster-regularization-semantics-audit.md).
Its result is `CASE 5 / EXACT RESULT 4 / DECISION D`: source-independent improvement
directions are definable, but source-independent activation remains unspecified.
Detailed evidence and qualifications remain in the linked authority; this dated
checkpoint does not change current execution order or authorize work beyond its recorded
scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-REGULARIZATION-ACTIVATION-AUDIT1 (2026-09-01)

The source-independent regularization activation audit is recorded in [LiaisonScape
Initial-placement Motif-cluster Regularization Activation
Audit](../liaisonscape-initial-placement-motif-cluster-regularization-activation-audit.md).
Its result is `CASE 5 / EXACT RESULT 3 / DECISION E`: transition history can detect and
help prevent solver-induced deterioration after a comparable Derived geometry exists,
but it cannot repair bottlenecks already present in the initial seed. Detailed evidence
and qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-BOTTLENECK-ORIGIN-AUDIT1 (2026-09-01)

The seed-versus-settling bottleneck-origin audit is recorded in [LiaisonScape
Initial-placement Motif-cluster Bottleneck Origin
Audit](../liaisonscape-initial-placement-motif-cluster-bottleneck-origin-audit.md). Its
result is `CASE 7 / EXACT RESULT 5 / DECISION F`: the current seed is deterministic but
sensitive to topology-tie and lexical ID assignment. Detailed evidence and
qualifications remain in the linked authority; this dated checkpoint does not change
current execution order or authorize work beyond its recorded scope.

### E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-ASSIGNMENT-STABILITY-AUDIT1 (2026-09-01)

The seed-assignment stability audit is recorded in [LiaisonScape Initial-placement
Seed-assignment Stability
Audit](../liaisonscape-initial-placement-seed-assignment-stability-audit.md). Its result is
`CASE 7 / EXACT RESULT 5 / DECISION D`: higher-order topology distinguishes all Nodes in
the tested Lighthouse and Ashen samples, but K3, star, path, symmetric-motif, and ring
controls confirm that automorphic Nodes cannot receive a unique topology-only order.
Detailed evidence and qualifications remain in the linked authority; this dated
checkpoint does not change current execution order or authorize work beyond its recorded
scope.

## Initial Layout Product, Provider, Frontier, and Presentation Progression (2026-09-11 to 2026-09-13)

The following complete pre-coordination checkpoint blocks were extracted from
`docs/roadmap.md` at commit `c2750181170a160cf10e115eebcf215612b9222f`, in
source order. Their dated status language is historical evidence; current
planning remains in the [Current Initial Layout / Parallel Presentation
Coordination section](../roadmap.md#current-initial-layout-parallel-
presentation-coordination-2026-09-13).

### LiaisonScape Initial-Layout Runtime Provider Prototype 1 (2026-09-11)

The [runtime provider prototype result](../liaisonscape-initial-layout-runtime-provider-prototype1-result.md)
records a bounded opt-in provider boundary in the LiaisonScape repository.
It validates deterministic Node/label-envelope refinement, whole-result
fallback, finite/complete positions, and non-persistence, but it is not wired
into `App.tsx` and does not reproduce the diagnostic Post materializer's
routing-aware metrics. Runtime integration and Product adoption remain
`NOT STARTED` / `HOLD`; actual Product opt-in inspection and
candidate-equivalence/budget evidence are still required.

### LiaisonScape Initial-Layout Candidate Equivalence / Budget 1 (2026-09-11)

The [candidate equivalence and budget result](../liaisonscape-initial-layout-candidate-equivalence-budget1-result.md)
records that the bounded provider is safe as an opt-in experiment but does not
yet reproduce `post-structural-relaxation-v1`: Apollo EN/JA use whole-result
fallback, while other public samples complete a smaller Node/label-only
refinement. Product opt-in integration remains `NOT STARTED` and adoption
remains `HOLD`; routing/label quality equivalence and actual Product inspection
are still required.

### LiaisonScape initial-layout candidate cross-fixture acceptance (2026-09-11)

The user's Actual Product comparison across Lighthouse Restoration, Apollo 11,
Berlin Wall, Ashen Crown, and Titanic Final Voyage in EN/JA is recorded in
[Initial-Layout Candidate Cross-Fixture Acceptance 2](../liaisonscape-initial-layout-candidate-cross-fixture-acceptance2-result.md).
The user preferred `post-structural-relaxation-v1` in every compared cell.
This establishes strong bounded research evidence, including the fact that
Titanic EN/JA may have materially different locale-specific geometry; it does
not permit cross-locale coordinate reuse or a cross-fixture scalar ranking.

The explicit adoption result is `HOLD`: the current Product authority remains
the generic `settleInitialPlacement()` path, while Post is still a diagnostic
materializer with no generic runtime authority, budget, fallback, or
locale-aware policy for arbitrary coordinate-less Datasets. Self-loop,
non-semantic curve-crossing, and parallel-Edge side-balance concerns remain
separate routing/presentation tracks. No Product source, Dataset, or governed
evidence was changed.

### LiaisonScape Initial-Layout Product Adoption Design / Runtime Authority (2026-09-11)

The [Initial-Layout Product Adoption Design](../liaisonscape-initial-layout-product-adoption-design1.md)
defines the boundary for a future runtime provider. Stored Coordinates remain
authoritative; coordinate-less placement remains transient Derived state until
an explicit Save Coordinates action. A future provider must be generic,
deterministic, locale-input-scoped, budgeted, safety-gated, and able to fall
back to the current provider without dirtying the Dataset.

`post-structural-relaxation-v1` currently satisfies research comparison
eligibility but not this runtime authority contract. Therefore Product
integration is **NOT YET AUTHORIZED** and adoption remains **HOLD**. The next
possible implementation checkpoint is a bounded runtime-provider prototype
against these gates; no public-sample-specific coordinate switch is allowed.

### LiaisonScape Initial-Layout research synchronization (2026-09-11)

This section is the current execution-order authority for the Initial Layout
research branch and supersedes earlier local "next step" wording in the
individual result entries below.

1. **Acceptance evidence — RECORDED.**
   `post-structural-relaxation-v1` is strongly preferred by the user across
   the bounded cross-fixture / cross-locale Actual Product comparison. This is
   research evidence, not a universal ranking or Product adoption.
2. **Runtime authority / bounded provider — SAFETY PASS, HOLD.** Stored
   Coordinates remain authoritative; coordinate-less output remains Derived;
   the provider has whole-result fallback and does not dirty or persist the
   Dataset. Post equivalence is not proven.
3. **Post runtime feasibility — CLOSED NEGATIVE.** The full Post evaluator is
   seconds-scale and routing/presentation-coupled; direct generic runtime
   integration is not justified.
4. **Coarse objective — NEXT.** The diagnostic proxy is implementable without
   taking routing authority. Comparative evaluation must first recheck its
   Relation-label corridor geometry sensitivity and Node-label rectangle
   approximation before any adoption discussion.

Separate presentation tracks are not children of Initial Layout authority:

- Node-owned label glyph halo / white-outline symmetry: presentation
  experiment candidate; collision geometry and rendering remain separate.
- Node-label connector termination, layering, and glyph integration: separate
  connector track.
- Titanic EN `Carpathia -> Titanic` `r10/r11` parallel Edge plus long
  Relation-label interaction: downstream routing/presentation track; runtime
  routing fix not started.
- Self-loop angle bias: separate unresolved routing/presentation track.

### LiaisonScape Initial-Layout Coarse Objective Actual Product Comparison 2 (2026-09-11)

The [Actual Product comparison result](../liaisonscape-initial-layout-coarse-objective-actual-product-comparison2-result.md)
records that Post remains visually preferred and that the coarse candidate
follows the same improvement direction, with acceptable observed Node
placement, label readability, Node--Edge spacing, graph cohesion, and viewport
usability. Absence of a coarse-specific new defect remains unconfirmed, so the
bounded provider branch may continue diagnostically while Product adoption
remains `HOLD`.

### LiaisonScape Initial-Layout Bounded Coarse Provider 1 (2026-09-11)

The [bounded provider result](../liaisonscape-initial-layout-bounded-coarse-provider1-result.md)
records that `coarse-objective-prototype-v1` is now available through the
existing opt-in provider boundary. Lighthouse and Titanic completed within the
diagnostic budget; Apollo EN/JA safely used whole-result fallback after unsafe
seed rejection. Derived ownership, deterministic output, and fallback are
verified, while Post equivalence, arbitrary-Dataset generality, and normal
Product integration remain unresolved. The next gate is opt-in Actual Product
evaluation; Product adoption remains `HOLD`.

### LiaisonScape Initial-Layout Bounded Provider Contract Audit 1 (2026-09-11)

The [provider contract audit](../liaisonscape-initial-layout-bounded-provider-contract-audit1-result.md)
found and corrected a graph-input boundary mismatch: candidate and fallback
now use the same Product-visible Relation projection. It also corrected the
default provider identity so the simplified envelope prototype is not named as
`post-structural-relaxation-v1`. The coarse strategy remains a
presentation-informed geometric proxy, not a presentation-independent
materializer or Post implementation. Tests, lint, and build pass; opt-in
Actual Product evaluation is the next gate and Product adoption remains
`HOLD`.

### LiaisonScape Initial-Layout Coarse Objective Comparative Evaluation 1 (2026-09-11)

The [comparative evaluation result](../liaisonscape-initial-layout-coarse-objective-comparative-evaluation1-result.md)
records a diagnostic bounded candidate. It reduced the proxy score modestly on
Lighthouse and Titanic within roughly 0.3–10.5 ms, while Apollo EN/JA used safe
whole-result fallback. The real Product inspection surface is ready for
current/Post/coarse user comparison, but proxy-to-visual agreement and Post
approximation remain unresolved; Product adoption is not authorized.

### LiaisonScape Initial-Layout Coarse Objective Proxy Audit 1 (2026-09-11)

The [coarse objective proxy audit](../liaisonscape-initial-layout-coarse-objective-proxy-audit1-result.md)
found and corrected a Relation-label corridor bug: the former self-chord
midpoint measurement was always zero and was not geometry-sensitive. The
corrected proxy responds to foreign Node and foreign straight-chord occupancy.
Node-label rectangles are explicitly only estimated occupancy envelopes, not
glyph or actual label-placement authority. The proxy is now ready for bounded
comparative evaluation, while Product integration and adoption remain
unauthorized.

These tracks may inform diagnostic proxies, but do not authorize Product
initial-placement, routing, label, connector, Self-loop, or parallel-Edge
adoption.

### LiaisonScape Initial-Layout Post-Objective Runtime Feasibility 1 (2026-09-11)

The [Post-objective runtime feasibility result](../liaisonscape-initial-layout-post-objective-runtime-feasibility1-result.md)
measured the existing diagnostic search at approximately 7–12 seconds and
208–269 Post presentation evaluations on representative public samples. This
does not fit the bounded runtime-provider budget, and the fast provider remains
non-equivalent. Direct Product opt-in is therefore not authorized; the next
possible work is a separate coarse-objective or offline-assistance design
checkpoint.

### E2R-LIAISONSCAPE-NODE-LABEL-CONNECTOR-VISIBILITY-AUDIT1 (2026-09-13)

The Node-label geometry and connector audit is recorded in [LiaisonScape
Node-label Geometry and Connector Audit 1](../liaisonscape-node-label-geometry-connector-audit1-result.md).
Its result is `PASS / BOUNDED PRESENTATION FIX`: the shared conservative
collision/hit `LabelRect` is retained, while connector attachment uses a
deterministic text-plus-outline visual envelope. This removes the apparent
diagonal and upper/lower connector gap without changing route obstacles,
Relation-label authority, manual placement, or Dataset behavior.

The six Global Placement 3 canonical surfaces loaded through the normal Product
rendering path in browser inspection, with one Node-label group and connector
per displayed Node. This is machine/browser evidence, not a new external human
acceptance. No Initial Layout, Global Placement 3, default, persistence,
canonical sample, or publication change was made. Ink-based collision
tightening remains separate and is not reopened by this checkpoint.

The Node-side attachment follow-up is also complete: the former
`direction * 33` virtual-circle start now uses the shared
`getEntityAttachment` dispatch with `ENTITY_ATTACHMENT_SHAPE`. Current
rounded-rectangle Nodes attach at 32px on cardinal directions and at the
corner-aware boundary on diagonals. The change preserves connector z-order,
collision/hit rectangles, routing, label placement, and Dataset behavior; no
new human acceptance is implied by this browser inspection.

### E2R-LIAISONSCAPE-NODE-LABEL-CONNECTOR-PRESENTATION-FOLLOWUP1 (2026-09-13)

The Node-label connector presentation follow-up is recorded in [LiaisonScape
Node-label Geometry and Connector Audit 1](../liaisonscape-node-label-geometry-connector-audit1-result.md).
Its result is `PASS / BOUNDED PRESENTATION FIX`. The connector now prefers a
deterministic per-line text-plus-outline visual envelope for multiline labels,
with the prior enclosing visual envelope retained only as a gap fallback.
The conservative collision/hit `LabelRect`, Node-label placement, routing,
Relation-label authority, and Dataset semantics remain unchanged.

The connector is painted below connection affordances, the selected/focused
Node body, and the label group, so it cannot cover the Node selection/focus
indication. The six Global Placement 3 canonical surfaces loaded without
Product errors in browser inspection, and automated geometry/UI tests pass.
This remains machine/browser evidence rather than a new external human
acceptance; Product default/adoption and the Initial Layout Release blocker
are unchanged.

### LiaisonScape Initial-Layout Global Placement 3 Production Simplification / Quality-Contributor Ablation 1 (2026-09-13)

The [Global Placement 3 production simplification result](../liaisonscape-initial-layout-global-placement3-production-simplification-ablation1-result.md)
isolated the accepted viewport-anisotropic transform from the structural
candidate search and authoritative presentation selection. A deterministic
current seed plus the transform reduced the 46/62-call G3 diagnostic arm to
one full presentation call, and one/two-arm bounded grid probes reduced the
same volume to one or two calls. The speedup was not quality-safe: direct arms
introduced routed crossings, label conflicts, or overlap in all six canonical
cells, while bounded grid arms retained defects and degraded sharply on the
14-node/49-relation synthetic case.

The quality contribution is therefore mixed: the global transform improves
screen-space shape, but candidate diversity and authoritative selection are
also required. This checkpoint pivots from transform-only and tiny-arm
simplification; no production-native provider was established, no new human
review was authorized, Product default/adoption remains `HOLD`, and the
Initial Layout Release blocker remains `OPEN`.

### LiaisonScape Initial-Layout Global Placement 3 Frontier-12 Human Review Handoff (2026-09-13)

The [Frontier-12 human review handoff](../liaisonscape-initial-layout-global-placement3-frontier12-human-review-handoff.md)
adds `frontier-12` to the existing development-only Actual Product review
surface. It provides explicit G3 (`global-placement3`) and Frontier-12 URLs
for Lighthouse/Titanic/Apollo in EN/JA, using the same canonical Dataset and
normal App rendering path. Machine evidence is summarized separately: the
candidate retains G3 output in 5/6 cells and changes Titanic JA, so no G3
human ACCEPT is inherited. The status is `READY FOR HUMAN REVIEW`; user
acceptance, Product default/adoption, and the Initial Layout Release blocker
remain unchanged.

### LiaisonScape Initial-Layout Global Placement 3 Frontier-12 Human Review Execution (2026-09-13)

The [Frontier-12 human review result](../liaisonscape-initial-layout-global-placement3-frontier12-human-review-result.md)
records a Codex browser inspection of all six G3/reference versus
Frontier-12/candidate pairs on the normal Product surface. All six cells
loaded through the expected Dataset, fit, routing, and label path. No obvious
candidate-only defect was observed in that inspection; Titanic JA visibly
requires particular attention because its selected output differs and its
compact fitted view creates a readability/spacing trade-off.

This is not external human acceptance. All six user judgments and the overall
Frontier-12 disposition remain `UNCONFIRMED / PENDING USER HUMAN REVIEW` until
the user supplies the visual observations. G3 Human ACCEPT, Product
default/adoption, dense scaling, production-provider readiness, and the
Initial Layout Release blocker are unchanged.

### LiaisonScape Initial-Layout Global Placement 3 Frontier-12 User Human Review Evidence (2026-09-13)

The [Frontier-12 user evidence result](../liaisonscape-initial-layout-global-placement3-frontier12-human-review-user-evidence-result.md)
records the user's direct observation separately from Codex browser inspection
and machine metrics. Frontier-12 speed was satisfactory and the canonical
six-cell result was broadly good, with no Frontier-12-specific visual
regression observed.

The user also identified unnecessary Edge crossings weakening
Relation-label association in Titanic EN/JA and short horizontal Edges making
Relation-labels appear detached in Apollo EN. The user reports both issues
were already present in Global Placement 3; they are therefore recorded as
separate downstream routing/Relation-label presentation follow-ups, not
Frontier-12 defects.

Because the user did not explicitly use the project's formal `ACCEPT` wording,
the canonical checkpoint is recorded as human evidence received but formal
acceptance not closed. A bounded dense/topology Frontier-12 retune research
checkpoint may proceed; Product default/adoption remains `HOLD` and the
Initial Layout Release blocker remains `OPEN`.

### LiaisonScape Initial-Layout Global Placement 3 Production-native Structural Diversity / Frontier Reduction 1 (2026-09-13)

The [Frontier Reduction 1 result](../liaisonscape-initial-layout-global-placement3-production-native-frontier-reduction1-result.md)
tested a cheap structural Pareto frontier plus normalized farthest-point
representatives before authoritative Product presentation. Frontier-12 reduced
the matched G3 46/62-call arm to 13 calls including round-once finalization and
retained the G3 selected structural candidate/output in 5/6 canonical cells.
All six canonical cells had zero routed crossings, Relation-label route hits,
and overlap pairs; Titanic JA selected a new output and therefore does not
inherit the G3 human ACCEPT.

The 14-Node/49-Relation dense case retained no G3 candidate and still had 143
routed crossings at Frontier-12, despite a runtime reduction from 8.46 s to
3.62 s. The formulation is consequently `RETUNE` for density-aware portfolio
selection, not a production provider. A canonical-scope new Actual Product
human review may follow, while Product default/adoption remains `HOLD` and the
Initial Layout Release blocker remains `OPEN`.

### LiaisonScape Initial-Layout Frontier-12 Dense / Topology Retune 1 (2026-09-13)

The [Frontier-12 dense/topology retune result](../liaisonscape-initial-layout-global-placement3-frontier12-dense-topology-retune1-result.md)
audited the dense loss boundary and found that the G3-selected source was
present in the 44-candidate pool and 22-candidate cheap frontier, but was lost
when the frontier was compressed to 12 representatives. A crossing
relation-pair signature did not improve the dense result and introduced a
canonical Lighthouse label-nearness drift, so it is not a quality-safe rule.

A density-aware adaptive portfolio was then tested: it keeps the 12-call
portfolio for sparse frontiers and evaluates the whole cheap frontier when it
is denser than 12. It used 22 calls on `synthetic:k7-7`, 18 on `k6-8`, and 12
on `k8-8`, recovering the G3 selected output and hard metrics in all three
cases. Canonical cells stayed at the existing 13-call Frontier-12 result.
The dense `k7-7` runtime was still about 6.6--6.8 seconds, so this is a
quality-retention research candidate, not a production provider or release
solution. Disposition is `CONTINUE` for bounded density-aware research;
Product default/adoption remains `HOLD` and the Release blocker remains
`OPEN`. A new Actual Product human review is required for any adoption
consideration.

### LiaisonScape Initial-Layout Frontier Adaptive Dense Cost Reduction 2 (2026-09-13)

The [Frontier Adaptive Dense Cost Reduction 2 result](../liaisonscape-initial-layout-frontier-adaptive-dense-cost-reduction2-result.md)
tested whether a cheap structural stratum could be evaluated first and the
remaining frontier widened only when needed. The matched audit found the
G3-quality source at frontier-order positions 22/22 for `k7-7`, 11/18 for
`k6-8`, and 1/4 for `k8-8`; the first case prevents a conservative early-stop
claim from the current cheap signals.

The diagnostic progressive probe reduced canonical evaluation count to five in
Lighthouse and Apollo and used 12 calls in Titanic and the dense cases, but it
introduced canonical Lighthouse label-nearness drift, Titanic EN drift, and
Apollo EN/JA route/crossing drift relative to Frontier-12. The density-aware
whole-frontier reference remained quality-retaining in the tested dense cases
at 22/18/12 calls, but remained several seconds from the roughly two-second
planning direction. The frontier early-stop line is therefore `PIVOT`; the
adaptive whole-frontier arm remains diagnostic reference only. Production-native
provider readiness, Product default/adoption, and the Initial Layout Release
blocker are unchanged (`NOT ESTABLISHED`, `HOLD`, `OPEN`).

### LiaisonScape Initial-Layout Authoritative Presentation Cost Audit 1 (2026-09-13)

The [Authoritative Presentation Cost Audit 1 result](../liaisonscape-initial-layout-authoritative-presentation-cost-audit1-result.md)
reprofiled one full Product presentation evaluation without changing the
candidate arm or evaluator authority. Existing exact geometry/metadata reuse
was output-equivalent in all nine matched cells and reduced measured
authoritative time by roughly 14--22%, but only reduced profiled E2E time by
about 9--15%. Full evaluation count was unchanged.

Dense residual cost remained route candidate generation and sequential
occupied-path checks; `k8-8` retained about 2.06 seconds of occupied-path work
even after reuse. The cache reached 72--87% hit rates but required up to about
20,394 geometry entries plus matching metadata entries in one process. No
2--3x exact per-evaluation opportunity was found. The micro-optimization line
is therefore `PIVOT`; the next direction is a larger production-native
structural formulation or an explicit Initial Placement/high-quality Auto
Layout responsibility split. Product default/adoption and the Initial Layout
Release blocker remain `HOLD` and `OPEN`.

### Production-native structural formulation 1 (2026-09-13)

The [structural formulation research](../liaisonscape-initial-layout-production-native-structural-formulation1-result.md)
implemented layered barycenter, graph-distance stress, structural-twin spokes,
crossing-aware circular ordering, and ordered stress. A six-candidate portfolio
retained the ten-arm audit's selected output on eleven measured cells and used
seven full evaluations including round-once. Dense k7-7/k6-8/k8-8 crossings
fell from 129/123/229 to 81/72/144 at about 1.05--1.99 seconds, but fit shrank
screen separation and canonical Apollo still had a crossing. Titanic JA had
label-nearness drift relative to Frontier-12. Larger dense 24/144 took 7.23 s.

Disposition: RETUNE the portfolio and continue bounded structural research;
no general human-review readiness or production provider is established.
The dense topology signal is evidence against declaring structural research
exhausted. Fast Initial Placement plus explicit high-quality Auto Layout
remains an architecture option for larger graphs, not an adopted behavior.
Product default/adoption remains HOLD and Release blocker OPEN. No human
acceptance is inherited; vertical parallel-edge spacing remains separate.

### LiaisonScape Initial-Layout Obstacle-sensitive Crossing / Placement-vs-Presentation Decomposition Audit 1 (2026-09-13)

The [obstacle-sensitive crossing decomposition result](../liaisonscape-initial-layout-obstacle-sensitive-crossing-decomposition-audit1-result.md)
added an opt-in diagnostic that uses the existing Product route samples and
60-unit Node-influence predicate to identify obstacle-sensitive routes, then
tests eight deterministic one-clearance local Node moves per inferred obstacle.
The audit found a placement-sensitive signal in Lighthouse, Apollo, and dense
`k7-7`, but no quality-safe general move rule: crossing reductions changed
route sets or traded against labels/overlap. Titanic EN/JA had no inferred
obstacle Node; its four crossings were two ordinary-route and two parallel
Relation presentation cases, with nearest non-endpoint Nodes outside the
router influence radius. The Titanic long-label/parallel issue therefore
remains a separate presentation track.

Disposition is `RETUNE` for structural placement research. No retune provider,
routing fix, parallel-spacing fix, or Self-loop fix was implemented. Product
default/adoption remains `HOLD`, production provider remains `NOT ESTABLISHED`,
and the Initial Layout Release blocker remains `OPEN`. The independent
parallel Edge spacing checkpoint may proceed; existing human evidence is not
inherited by any new candidate.

### LiaisonScape Parallel Edge / Incident Bundle Presentation Retune 1 (2026-09-13)

The [parallel Edge / incident bundle retune result](../liaisonscape-parallel-edge-incident-bundle-presentation-retune1-result.md)
added an opt-in presentation-only slot policy. Pair widening improves the
two-Relation case, while bundle-aware widening also separates same-side slots
in 3+ groups and preserves reverse-direction, manual-route, obstacle, ordinary
Relation, and Self-loop boundaries. The six-cell machine comparison was mostly
neutral; Titanic EN improved one label-route hit, while Lighthouse JA incurred
a route-length increase and Titanic crossings remained. The candidate is
`RETUNE / READY FOR HUMAN REVIEW`, not human-accepted. Existing Titanic and
Apollo Relation-label issues remain a separate presentation track. Product
default/adoption remains `HOLD` and the Initial Layout Release blocker remains
`OPEN`.

### LiaisonScape Parallel Edge / Incident Bundle Presentation Human Review Handoff (2026-09-13)

The [parallel Edge / incident bundle human-review handoff](../liaisonscape-parallel-edge-incident-bundle-human-review-handoff.md)
publishes explicit six-cell URLs for the G3 baseline, `parallel-pair-16`, and
`parallel-bundle-16` arms. The candidate arms reuse G3 coordinates and use the
normal Product open/routing/label/fit surface; no new Initial Layout provider
is introduced. Titanic EN/JA are the priority review cells. Codex verified the
Titanic EN baseline/pair/bundle pages and arm banners in the local browser,
but USER HUMAN REVIEW remains `PENDING`. Product default/adoption remains
`HOLD` and the Initial Layout Release blocker remains `OPEN`.

### LiaisonScape Automatic Display Placement Final Bake-off 1 (2026-09-16)

The [checkpoint result](../liaisonscape-automatic-display-placement-final-bakeoff1-result.md)
closes the existing automatic-display candidate comparison without adding a
solver family. Frontier-12, Post/constrained relaxation, and G3/structural
portfolio were compared through the current Product-authoritative metrics on
canonical/public EN/JA, label-heavy, and dense controls. Free-form remains
excluded by crossing-gate regressions, and Fast remains internal/emergency
fallback material rather than a normal provider.

Frontier is the sole normal automatic-display integration candidate for the
next separate engineering step: it has the strongest combined quality,
determinism, and runtime evidence, while dense/long-label presentation and
multi-second runtime remain documented risks. No production default switch,
Human Review, Explicit Auto Layout decision, or Adaptive Cascade follows.
Session 0095 records this candidate decision.

### LiaisonScape Frontier Automatic Display Integration Candidate Staging 1 (2026-09-16)

The [checkpoint result](../liaisonscape-frontier-automatic-display-integration-candidate-staging1-result.md)
connects the existing development-only acceptance layout seam to the
`frontier-12` arm for coordinate-less Dataset review staging. The normal
production path remains `settleInitialPlacement`; stored and mixed Coordinates
retain their existing authority, and Frontier positions remain derived without
persistence or dirty-state changes.

The seam preserves all downstream Product presentation authorities and is
sufficient to prepare a formal visual-review candidate. It does not perform
production default adoption or Human Review. Session 0096 records this staging
checkpoint.

### LiaisonScape Frontier Automatic Display Formal Visual Review Preparation 1 (2026-09-16)

The [formal visual review result](../liaisonscape-frontier-automatic-display-formal-visual-review1-result.md)
prepares a reproducible Actual Product read-only preview surface for the
Frontier-12 candidate across canonical/public, locale, label-heavy, dense, and
Parallel/Self-loop controls. The package keeps machine metrics supplemental to
human judgment and records per-unit coverage without assuming unreviewed units
are accepted. Production default/adoption remains unchanged.

### LiaisonScape Frontier Automatic Display Production Adoption Readiness 1 (2026-09-16)

The [adoption-readiness result](../liaisonscape-frontier-automatic-display-production-adoption-readiness1-result.md)
audits the current source and prior Frontier evidence without changing runtime
behavior. Frontier remains DEV-only today; normal coordinate-less opening still
uses `settleInitialPlacement`, while stored and mixed Coordinates retain their
existing authorities. The outcome is **READY WITH EXPLICIT OPERATIONAL
BOUNDARY** for a separate bounded adoption-implementation checkpoint, not a
production-default decision.

That next checkpoint must define technical failure classes, discard partial
results, provide deterministic bounded fallback behavior, and preserve the
Dataset/dirty-state/manual-authority matrix. Fast remains internal/emergency
material rather than a quality competitor. Dense/long-label congestion and
multi-second runtime remain explicit operational boundaries; large-dense SLA is
not established. Session chronology is preserved; historical `HOLD`/`NOT READY`
entries are not rewritten.

### LiaisonScape Frontier Automatic Display User-Abort / Cancellation Feasibility Audit 1 (2026-09-16)

The [cancellation feasibility result](../liaisonscape-frontier-automatic-display-user-abort-cancellation-feasibility-audit1-result.md)
classifies user abort as **not justified for initial adoption**. The current
Frontier acceptance seam fetches a precomputed artifact and applies it during a
synchronous open; Frontier is not a browser-side production computation and
has no current interruptible solver boundary. A future browser computation
would require an explicit cooperative-execution or worker-isolation decision
before responsive abort UI is added. No production, fallback, timeout, or UI
behavior changed.

### LiaisonScape Frontier Automatic Display Production Execution / Transient Preview Architecture Audit 1 (2026-09-16)

The [execution architecture result](../liaisonscape-frontier-automatic-display-production-execution-transient-preview-architecture-audit1-result.md)
finds that a production Frontier solver boundary does not yet exist. The
current `frontier-12` seam is a DEV/review-only precomputed artifact fetch,
while normal opening remains synchronous `settleInitialPlacement`. The
checkpoint therefore stops before Workerization, cooperative scheduling,
Cancel UI, or transient styling: deterministic solver extraction, serializable
input/output, stale-result rejection, and preview ownership are prerequisites.
Production default and all existing authority boundaries remain unchanged.

### LiaisonScape Frontier Production Solver Extraction Readiness / Contract 1 (2026-09-16)

The [extraction-readiness result](../liaisonscape-frontier-production-solver-extraction-readiness1-result.md)
classifies the checkpoint as **BLOCKED: FRONTIER LINEAGE NOT REPRODUCIBLE FROM
CURRENT SOURCE**. Current artifacts and the DEV seam identify Frontier-12, but
no single current-source pipeline reproduces its reviewed result; the existing
runtime provider is a separate prototype and is explicitly not wired to App.
Extraction, Worker/cooperative execution, Cancel UI, and transient snapshots
remain deferred until a source-level solver and artifact-parity gate exist.

### LiaisonScape Frontier-12 Lineage Recovery / Reproduction 1 (2026-09-16)

The [lineage-recovery result](../liaisonscape-frontier-12-lineage-recovery-reproduction1-result.md)
reconstructs the research lineage at `e7d6cbc`: the Frontier Actual Product
Visual Sweep generator invokes `tools/generic-crossing-search.mjs` with the
recorded Frontier-12 environment. Replaying the current source matched the
saved selected family and position fingerprint for 10 file-backed fixtures and
3 dense synthetic fixtures. The remaining two custom synthetic controls have
their source constructors recovered but were not independently replayed in this
bounded parity command, so the result is **B. LINEAGE RECONSTRUCTABLE WITH
BOUNDED EVIDENCE**, not a claim of full artifact-wide exact parity. This closes
the lineage-identity blocker but does not create a production solver or change
the production default.

### LiaisonScape Frontier-12 Bounded Solver Extraction / Standalone Characterization 1 (2026-09-16)

The [extraction result](../liaisonscape-frontier-12-bounded-solver-extraction-standalone-characterization1-result.md)
stops with **BLOCKED: PRODUCT-AUTHORITATIVE SELECTION DEPENDENCY**. The
structural Frontier candidate pool is identifiable, but the reviewed final
position is selected through Product presentation metrics, eligibility/sorting,
and final canonicalization in the research runner. Extracting a placement-only
complete-position solver would therefore alter the recovered behavior or move
Product authority. Solver-only runtime was not claimed; existing sweep timing
remains end-to-end evidence. No source, production, or Human Review behavior
changed.

### LiaisonScape Frontier-12 Candidate / Product Selection Authority Decision 1 (2026-09-16)

The [authority decision](../liaisonscape-frontier-12-candidate-product-selection-authority-decision1-result.md)
selects **A: candidate-set generator with Product-owned downstream selection**.
Frontier owns normalized placement input, deterministic structural candidate
generation, and finite derived candidates. Product retains presentation
evaluation, routing/label/Self-loop authority, ranking, final selection, and
canonicalization. This preserves reviewed parity and keeps Frontier runtime
measurable separately from Product evaluation/rendering. A bounded candidate-set
extraction checkpoint may begin; Worker/cooperative/Cancel architecture remains
undecided and production default remains unchanged.

### LiaisonScape Frontier-12 Single-Implementation Structural Refactor / Candidate Boundary 1 (2026-09-16)

The [structural refactor result](../liaisonscape-frontier-12-single-implementation-structural-refactor-candidate-boundary1-result.md)
records **COMPLETED: SHARED CANDIDATE BOUNDARY / PARITY GATE PASSED** after the
explicitly authorized structural move. `src/frontier-candidate-generator.ts`
is now the single normalized-input/config Frontier implementation, and
`tools/generic-crossing-search.mjs` consumes it without the former Frontier
candidate-generation closure. Candidate-set determinism plus Product-selected
family/fingerprint parity passed for 10 file-backed and 3 dense synthetic
controls. Candidate generation and Product presentation timing are separately
recorded in the [replay artifact](../../../e2r-liaison-scape/experimental/frontier-12-shared-candidate-generator-parity1/result.json).
The two private custom synthetic constructors remain explicitly outside this
independent replay artifact. No App wiring, production default change,
authority move, retuning, or execution-architecture decision was made.

### LiaisonScape Frontier-12 Candidate-Set Extraction / Product-Selector Parity & Standalone Characterization 1 (2026-09-16)

The [candidate-set extraction result](../liaisonscape-frontier-12-candidate-set-extraction-product-selector-parity-standalone-characterization1-result.md)
keeps architecture A canonical but stops with **BLOCKED: CURRENT RESEARCH
RUNNER IS NOT A BOUNDED EXTRACTABLE MODULE**. The structural generator is
private and coupled to runner graph/config globals; copying it would create a
second implementation and break provenance. No extraction or solver-only timing
was claimed. A future checkpoint must scope a single-implementation structural
refactor and candidate-set parity before execution architecture decisions.

### LiaisonScape Frontier / Product Execution Architecture & Lifecycle Decision 1 (2026-09-16)

The [execution architecture result](../liaisonscape-frontier-product-execution-architecture-lifecycle-decision1-result.md)
selects a future `hybrid-worker-proposal-main-thread-commit` boundary for the
Frontier automatic-display proposal path. Frontier candidate generation and
pure Product presentation evaluation/selection may execute sequentially in one
Worker from an immutable serializable snapshot; main thread retains snapshot
validation, render, session adoption, Dataset authority, persistence, and
dirty-state responsibility. The current normal provider remains
`settleInitialPlacement`. Main-thread synchronous Frontier execution is not
accepted for measured dense workloads, while cooperative execution remains
unselected because the current generator has no natural resumable yield
boundary. Actual Worker parity, browser responsiveness, cancellation, and App
orchestration remain a separate implementation checkpoint; no production
wiring, default switch, Cancel UI, or transient preview was made.

### LiaisonScape Frontier / Product Worker Execution Proof 1 (2026-09-16)

The [Worker execution proof result](../liaisonscape-frontier-product-worker-execution-proof1-result.md)
records an actual browser Web Worker run of the shared Frontier candidate
generator plus current pure Product presentation/proposal selection. Lighthouse
EN, Apollo EN, and dense K7-7 matched the direct current-source path for
candidate set, Product proposal output, selected family, and final position
fingerprint. The dense Worker run kept the main-thread interval/RAF gaps at
14.1/16.9 ms in the measured browser and cancellation terminated before any
result was published. The reproducible browser artifact is
`../e2r-liaison-scape/experimental/frontier-product-worker-execution-proof1/browser-result.json`.

This establishes the Worker execution envelope only. The normal App path and
production default remain unchanged; coordinate-authority gating, replacement
replacement/remount invalidation, fallback, and derived-position adoption remain the next
bounded integration checkpoint.

### LiaisonScape Frontier Automatic Display Pending UX / Production-Integration Lifecycle Acceptance 1 (2026-09-16)

The [pending UX result](../liaisonscape-frontier-automatic-display-pending-ux-production-integration-lifecycle-acceptance1-result.md)
stages visible pending feedback on the existing DEV-only
`initial-layout=frontier-12-worker` seam. The existing settleInitialPlacement
graph remains usable as fallback, only the graph receives provisional styling,
Cancel terminates the operation without publishing a result, and application
chrome remains available. Apollo EN and Titanic JA browser smokes observed the
pending status, Cancel, provisional graph class, and no console errors; the
normal Lighthouse EN URL had no staging state or provisional class. Focused
adapter tests cover the deterministic cancellation/race, failure, stale, and
coordinate-authority gates. No production default, solver, Product authority,
Dataset, persistence, or Human Review decision changed. A separate production
adoption/integration checkpoint remains required.

### LiaisonScape Frontier Automatic Display Pending + Cancel Production UX Acceptance 1 (2026-09-16)

The [pending + Cancel UX result](../liaisonscape-frontier-automatic-display-pending-cancel-production-ux-acceptance1-result.md)
accepts the lifecycle policy for eventual production use while keeping the
default switch separate. Pending status is shown only during an active
operation, Cancel keeps the already usable settleInitialPlacement graph,
graph-only provisional treatment is retained, and success clears the affordance
without a success banner. Browser controls covered Lighthouse EN, Apollo EN,
Titanic EN, and Ashen Crown JA. A real status/viewport-toolbar overlap found in
Titanic was fixed by keeping status outside the graph section; stale terminal
state is cleared on invalidation/replacement, and narrow layouts wrap the
status. No solver, Dataset, persistence, Product authority, Human Review, or
production default change was made. Normal coordinate-less Frontier wiring
remains a separate adoption checkpoint.

### LiaisonScape Frontier Automatic Display Production Adoption Implementation 1 (2026-09-16)

The [production adoption implementation result](../liaisonscape-frontier-automatic-display-production-adoption-implementation1-result.md)
connects the existing Frontier/Product Worker flow to the normal coordinate-less
Dataset-open path. `settleInitialPlacement` remains the immediately published
usable fallback; pending + Cancel, graph-only provisional treatment, current
complete-finite validation, render-only adoption, and lifecycle invalidation
remain in force. Stored and mixed/partial Coordinates retain their existing
authority. Worker construction errors now resolve through bounded fallback.
The normal URL smoke entered `started` without the DEV query and reached
`completed` with no console errors. Production Acceptance / Closure remains
the next checkpoint; no solver, Product authority, Dataset semantics, or
Human Review decision changed.

### LiaisonScape Frontier Automatic Display Production Acceptance / Closure 1 (2026-09-16)

The [Production Acceptance / Closure result](../liaisonscape-frontier-automatic-display-production-acceptance-closure1-result.md)
records **PASS — PRODUCTION ACCEPTED / SOURCE-LEVEL ADOPTION CLOSED /
ROLLOUT DEFERRED**. The normal coordinate-less path is now the Frontier async
Automatic Display flow with immediate `settleInitialPlacement` fallback and
the accepted Pending / Cancel UX. Normal URL browser coverage across ordinary,
slower/label-heavy, and EN/JA controls reached completion with terminal cleanup
and no console errors. Focused lifecycle evidence closes coordinate authority,
cancel, failure, stale, replacement, invalid-result, and unmount boundaries;
the full suite remained passing. No solver, Product authority, Dataset
semantics, or Human Review decision changed. Deployment/public rollout remains
a separately authorized checkpoint.

### LiaisonScape Frontier Automatic Display Production Adoption Provenance Freeze / Commit Boundary 1 (2026-09-16)

The [provenance-freeze result](../liaisonscape-frontier-automatic-display-production-adoption-provenance-freeze-commit-boundary1-result.md)
classifies the checkpoint as **PROVENANCE FREEZE BLOCKED / DIRTY-WORKTREE
OWNERSHIP NOT SAFELY SEPARABLE**. The accepted normal-path implementation is
present, and its source-backed execution chain remains traceable, but the
required App/i18n/styles paths contain mixed accumulated changes and the spec
roadmap/session paths likewise contain prior checkpoint material. No commit
was created, and no dirty work was discarded or moved. The canonical reference
therefore remains the prior HEAD plus working tree; a clean or explicitly
hunk-owned boundary is required before a committed revision can be declared
canonical. Production adoption remains source-level accepted; rollout remains
deferred.

### LiaisonScape Accepted Dirty Worktree Baseline Audit / Canonical Commit 1 (2026-09-16)

The [baseline audit result](../liaisonscape-accepted-dirty-worktree-baseline-audit-canonical-commit1-result.md)
classifies the checkpoint as **BASELINE COMMIT BLOCKED / UNRESOLVED DIRTY
OWNERSHIP REMAINS**. The Frontier normal-path implementation, its research and
acceptance evidence, and the accepted guidance form a coherent baseline
candidate. However, `.tmp-normal-offset-output.json`, the older untracked
`experimental/product-evaluation-seam/spacing-inspection2/` surface, spec
`work/`, and cumulative session/roadmap paths are not all justified as one
canonical baseline. No commit or cleanup was performed. The accepted source
state and Frontier provenance therefore remain HEAD plus working tree until a
fresh worktree or explicit ownership map provides a safe boundary.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-PREVIEW-PIN-CONTRACT1 (2026-09-17)

The [Preview / Pin contract result](../liaisonscape-explicit-auto-layout-preview-pin-contract1-result.md)
closes with **C. BLOCKED BY PERSISTENCE / AUTHORITY CONTRACT**. The
Preview → Accept / Reject lifecycle is bounded as a separate Explicit Auto
Layout operation: calculation is asynchronous and isolated, Cancel/Reject
preserve the pre-operation display, and only Accept creates the existing
working-coordinate/dirty transaction. Initial Automatic Display's fallback and
render-only semantics are not reused.

Persistent Entity Pin remains a strong direction for Explicit Auto Layout, not
a Core or Coordinate field. The preferred boundary is a LiaisonScape-owned
Layout/Presentation Extension whose Pin intent refers to a compatible saved
Coordinate anchor. Exact payload/schema, orphan-Pin behavior, Unpin
canonicalization, and atomic Save Coordinates responsibility remain open and
must be closed before implementation.

The current Frontier generator accepts topology/configuration only and does
not implement fixed-position constraints. The current Worker/Product proof
also uses empty manual route, label, Self-loop, and previous-placement state.
Therefore pinned Frontier feasibility and a snapshot-aware Product input path
are required before Explicit Auto Layout integration. Post-hoc restoration of
Pinned coordinates is not accepted as hard-constraint support. No runtime,
schema, UI, or provider behavior changed; Initial Automatic Display remains
accepted and unchanged.

### E2R-LIAISONSCAPE-PIN-PERSISTENCE-AUTHORITY-CONTRACT2 (2026-09-17)

The [Pin persistence authority result](../liaisonscape-pin-persistence-authority-contract2-result.md)
records **A. PIN PERSISTENCE CONTRACT CLOSED / READY FOR PINNED FRONTIER
FEASIBILITY**. Pin is now bounded as a LiaisonScape-owned draft Layout
Extension, separate from Core, Coordinate, and Presentation responsibilities:
`draft.github.sukoyaka-dopeness.liaisonscape-layout` version `0.1.0`.

The exact active record is an Entity-ID keyed `{ pinned: true, spaceId }`
entry. `spaceId` must resolve to exactly one compatible finite `x/y` Coordinate
anchor; Pin stores no second coordinate. Unpin is canonical record omission.
Orphan, malformed, unsupported, or incompatible Pins are preserved when
practical, diagnosed, and inactive; no guessed anchor is allowed.

Pin/Unpin remains unsaved working layout state and participates in pending-work
and replacement/exit safety. Existing `Save Coordinates` is selected as the
single atomic transaction coordinator for compatible Coordinates plus Pin
state; production writer/reader behavior is not yet implemented. The draft
schema and focused validator are added, but no Core or Coordinate schema is
changed.

The next checkpoint may begin Pinned Frontier feasibility using saved or staged
`Entity ID → finite anchor` inputs. Initial Automatic Display, Frontier
provider behavior, Product presentation authority, and runtime application
behavior remain unchanged.

### E2R-LIAISONSCAPE-PINNED-FRONTIER-FEASIBILITY1 (2026-09-17)

The [Pinned Frontier feasibility result](../liaisonscape-pinned-frontier-feasibility1-result.md)
establishes the hard-constraint and execution boundary but does not close
Explicit Auto Layout quality. A diagnostic candidate construction installs
saved/staged fixed anchors before bounded movable-node relaxation, preserves
all pinned coordinates exactly, and produces deterministic complete finite
maps for no/few/many/all pin cases. The all-pinned and one-movable cases are
explicitly covered.

The existing shared no-pin Frontier generator and Product selection retain
representative-identity and selected-position fingerprint parity. A plain-data
Product snapshot containing route, Relation-label, Node-label, Self-loop, and
previous-route state was evaluated through the current Product presentation
stage, and a real diagnostic Worker transport completed with matching operation
and snapshot identity. No production App wiring or Pin persistence behavior
was changed.

The dense-k7-7 control retained substantial routed crossing pressure in every
pin case, and the parallel/self-loop one-movable case retained a crossing.
The classification is therefore **C. PINNED FRONTIER HARD CONSTRAINT
ESTABLISHED / PRODUCT QUALITY INSUFFICIENT ON DENSE CONTROL**. The diagnostic
anchor-aware construction is not claimed to be the reviewed Frontier-12
lineage. Explicit Auto Layout remains an active release-quality gap; its
operation lifecycle, manual-authority treatment, and quality gate remain for a
separate bounded implementation decision.

### E2R-LIAISONSCAPE-DENSITY-ADAPTIVE-NODE-SEPARATION-EXPERIMENT1 (2026-09-17)

The [density-adaptive Node separation result](../liaisonscape-density-adaptive-node-separation-experiment1-result.md)
is classified **C. MIXED**. The diagnostic comparison covered Lighthouse EN,
Apollo EN, label-heavy JA, dense-k7-7, and a parallel/Self-loop control across
no, few, many, one-movable, and all-pinned conditions. It compared current
fixed separation, a bounded larger-fixed Graph-space control, and a
per-Node density-adaptive separation policy through the current Product
presentation evaluator.

Adaptive separation relieved some score and label-nearness pressure in
ordinary, label-heavy, and selected pinned cases, but regressed other cases.
The dense control retained crossing pressure in every non-all-pinned case and
therefore does not support a general dense-quality or release claim. Increased
Graph bounds and reduced fit scale are recorded as separate viewport/framing
effects, not as a reason to change fit policy.

The experiment retained the Pin hard constraint and Product ownership of
routing, Relation-label, Node-label, Self-loop, and previous presentation
state. No spacing policy was promoted to production, Initial Automatic
Display, or shared production source. Explicit Auto Layout remains an active
quality gap; any later implementation must preserve this boundary and require
moderate-case quality plus dense graceful-degradation evidence.

### E2R-LIAISONSCAPE-PINNED-CROSS-FAMILY-PRODUCT-PORTFOLIO-EXPERIMENT1 (2026-09-17)

The [pinned cross-family Product portfolio result](../liaisonscape-pinned-cross-family-product-portfolio-experiment1-result.md)
is classified **C. PORTFOLIO HELPS SELECT CASES / GENERAL RELEASE-QUALITY
BENEFIT NOT ESTABLISHED**. Under one operation-local Product presentation
snapshot, the diagnostic compared Pin-aware Frontier, density-adaptive, and
topology-aware free-form candidate families across ordinary, label-heavy,
dense, and parallel/Self-loop controls. Exact anchors were preserved during
construction, all candidate maps were complete and finite, and independent
replay reproduced candidate fingerprints.

The combined Product selector chose a non-Frontier family in every row, but
some choices were deterministic tie reuse of the Frontier geometry. The
distinct portfolio choices improved bounded Product score and crossing signals
in several cases, while one case increased node overlap and no candidate passed
the non-empty snapshot's full Product eligibility gate. Dense `bipartite(7,7)`
(historical `dense-k7-7`) retained substantial crossing pressure. This supports
case selection as a diagnostic direction, not a general release-quality or
production-provider claim.

Post is excluded from the pin-aware portfolio because current evidence does not
provide a source-faithful pin-aware generator; post-hoc pin restoration is not
accepted. Product routing, Relation-label, Node-label, Self-loop, previous
presentation, viewport, Dataset, persistence, and dirty-state authorities are
unchanged. No Human Review or provider reselection is opened, and Explicit Auto
Layout remains an active implementation/quality gap.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-PRODUCT-ELIGIBILITY-SEMANTICS1 (2026-09-17)

The [Product eligibility semantics result](../liaisonscape-explicit-auto-layout-product-eligibility-semantics1-result.md)
is classified **C. MIXED**. The current
`isAutomaticLayoutPresentationEligible` predicate is a strict five-condition
Product presentation gate: zero routed crossings, Node-body overlap, label-
route hits, label overlap, and label nearness. Current source uses it in
research/selection proposal paths; `App.tsx` Explicit Auto Layout calls
`solveAutoLayout` directly and does not use this boolean as its completion or
adoption gate.

Across ordinary, label-heavy, dense, and parallel/Self-loop controls with no,
few-mixed, and all Pins, all 30 primary candidate comparisons were ineligible.
The diagnostic separated non-empty, no-manual-field, empty, and pre-operation
views. Failures included real crossing/overlap/presentation pressure, but also
inherited pre-operation and previous-state residuals; one case changed boolean
outcome when manual fields were removed. The distinction is evidence for a
semantic split, not permission to discard manual authority or relax the
predicate.

The predicate does not directly gate finite/completeness, Pin preservation,
minimum separation, extent/aspect, viewport fit, route length, corridor
pressure, short hops, or a Self-loop-specific metric. No predicate, solver,
Product authority, Initial Automatic Display, Pin persistence, Dataset, or
Human Review behavior changed. The next Explicit Auto Layout implementation
checkpoint must define separate structural-validity, Preview-admissibility, and
release-acceptance semantics before adopting this boolean for user-facing
Preview or release decisions.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-PREVIEW-ADOPTION-CONTRACT-RECONCILIATION1 (2026-09-17)

The [Preview / Adoption contract reconciliation result](../liaisonscape-explicit-auto-layout-preview-adoption-contract-reconciliation1-result.md)
is classified **B. CONTRACT MOSTLY CLOSED / ONE EXPLICIT PRODUCT DECISION
REQUIRED**. The solver-independent Explicit Auto Layout lifecycle remains
closed: immutable snapshot, cancellation/stale validation, isolated Preview,
session-only Accept, explicit Reject, bounded coordinate revert, and Save
Coordinates persistence boundary. The Pin persistence/authority draft is also
closed at its stated draft level.

The remaining decision is Preview admissibility for structurally valid
candidates with inherited, manual-authority-dependent, or soft Product
presentation residuals. The strict five-condition
`isAutomaticLayoutPresentationEligible` predicate remains a valid Product
eligibility signal but is not established as the complete Explicit Auto Layout
Preview/release gate. Strict blocking, advisory Preview, or a two-tier
catastrophic/soft policy are documented choices requiring Product judgment.

No threshold, solver, provider, lifecycle, Dataset, Pin, persistence, or Human
Review behavior changed. Production Explicit Auto Layout implementation may
begin its adapter design after the Product policy is explicitly selected; it
must not silently reinterpret the current research predicate.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-PREVIEW-ADMISSIBILITY-VISUAL-GATE1 (2026-09-17)

The [Preview admissibility visual gate result](../liaisonscape-explicit-auto-layout-preview-admissibility-visual-gate1-result.md)
records **B. TWO-TIER PREVIEW POLICY SUPPORTED / CATASTROPHIC CLASSIFIER
REMAINS OPEN**. The selected policy preserves the pre-operation working
display for structurally invalid or catastrophic Product presentation, while
allowing a complete finite, non-catastrophic residual candidate to be shown as
the best available review Preview with warnings/evidence. No single crossing
or label-nearness count is a catastrophic decision by itself.

The current 15-case diagnostic had 0/15 candidate-none cases and 0/15
structurally invalid cases, while the best-by-score candidate passed the
existing strict five-condition Product eligibility predicate in 0/15 cases.
Actual Product / Product-faithful browser evidence covered ordinary EN/JA,
Titanic, label-heavy JA, and dense controls. Dense candidate-ready observation
exceeded nine seconds in the browser surface and retained substantial
line/label congestion; this is a usability boundary, not a standalone solver
benchmark.

No solver, threshold, production UI, Initial Automatic Display, Product
authority, persistence, or Human Review behavior changed. Before Preview
implementation, the catastrophic definition, warning presentation, failure /
candidate-none branch, and consistent overview/local-zoom evidence remain to
be closed. Human Review and provider selection remain closed.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-CATASTROPHIC-PREVIEW-BOUNDARY1 (2026-09-17)

The [Catastrophic Preview boundary result](../liaisonscape-explicit-auto-layout-catastrophic-preview-boundary1-result.md)
records **C. CATASTROPHIC CONCEPT CLOSED / AUTOMATED CLASSIFIER NOT YET
JUSTIFIED / IMPLEMENTATION CAN STAGE WITH EXPLICIT POLICY SEAM**. A
structurally valid candidate may still be blocked when its Product rendering
loses practical graph comprehension, such as a severe Node pile-up or
relation/label collapse. Structural invalidity remains a separate hard gate.

Diagnostic pile-up and micro-collapse controls were complete and finite but
visibly unusable in the Product-faithful surface. An extent outlier was kept as
a separate viewport/framing concern. The normal 15-case diagnostic remained
15/15 complete finite and 0/15 candidate-none; strict eligibility remains a
separate signal and was not relaxed or repurposed.

No general catastrophic threshold or classifier is justified yet because
false-positive risk is material for dense/congested but reviewable candidates,
while broader false-negative evidence is still missing. No solver, spacing
study, production Preview UI, Product authority, persistence, or Human Review
behavior changed. Future Preview implementation may stage the two-tier policy
explicitly, with warnings and residual evidence kept separate from hard
blocking.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-PRODUCTION-OPERATION-STAGING1 (2026-09-17)

The [Production operation staging result](../liaisonscape-explicit-auto-layout-production-operation-staging1-result.md)
is classified **D. STAGING EXPOSED ARCHITECTURE CONFLICT / PRODUCTION
IMPLEMENTATION HOLD**. Current `App.tsx` still uses the synchronous
`solveAutoLayout` direct-apply path. The existing Worker adapter is scoped to
coordinate-less Initial Automatic Display, the Worker Product evaluator uses
empty manual/previous presentation state, and Pin runtime reader/writer
integration is absent.

The accepted Explicit lifecycle contract remains diagnostic-only until a
separate production operation snapshot, transport-neutral adapter,
snapshot-aware Product selection boundary, structural/catastrophic policy
seam, and Pin/non-Pin scope are made explicit. Reusing Initial Automatic
Display fallback semantics or copying the diagnostic lifecycle into App is not
accepted. Initial Automatic Display, Product authority, Dataset/Coordinate
semantics, persistence, and Human Review remain unchanged.

The dense Product-faithful Preview remains a later quality follow-up: it was
reviewable but visibly congested, and greater Graph-space separation may be
desirable. This is not permission to retune spacing in the staging checkpoint.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-OPERATION-BOUNDARY1 (2026-09-17)

The [Explicit Auto Layout operation boundary result](../liaisonscape-explicit-auto-layout-operation-boundary1-result.md)
is classified **B. OPERATION BOUNDARY ESTABLISHED / PIN INTEGRATION GAP
REMAINS**. `src/explicit-auto-layout-operation.ts` now provides an immutable,
serializable Explicit operation snapshot, shared Frontier candidate generation,
snapshot-aware Product presentation evaluation/ranking, complete finite
validation, an explicit structurally-valid Preview policy seam, Preview DTO,
and transport-neutral Cancel/stale/failure handling. It never adopts positions
or writes a Dataset.

Active Pin anchors are captured as first-class `{ x, y, source }` input and
checked for exact preservation, but current production Pin extraction and
fixed-anchor Frontier generation do not exist. Pin-bearing operations therefore
fail closed rather than being treated as unpinned. The Initial Automatic
Display adapter, Product authorities, persistence, and App behavior remain
unchanged. App integration, Pin runtime connection, and execution-architecture
selection remain separate checkpoints.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-PIN-RUNTIME-INTEGRATION1 (2026-09-17)

The [Pin runtime integration result](../liaisonscape-explicit-auto-layout-pin-runtime-integration1-result.md)
is classified **B. FIXED-ANCHOR OPERATION ESTABLISHED / PIN WRITER GAP
REMAINS**. The Explicit operation now has a read-only Pin resolver for the
accepted draft Layout Extension, exact compatible Coordinate anchors, staged
working anchors, and explicitly identified manual moves of already-Pinned
Nodes. Invalid, orphan, unsupported, missing, partial, duplicate, or
incompatible active Pins fail closed with diagnostics.

The bounded fixed-anchor candidate construction is now a single shared source
implementation in `src/pinned-frontier-candidate-generator.ts`; the existing
diagnostic feasibility consumer delegates to it. No-Pin input delegates to the
existing shared Frontier generator, partial Pins keep anchors fixed from the
start, and all-Pinned input returns the unchanged finite anchor map. Product
routing, Relation-label, Node-label, Self-loop, previous presentation, and
strict eligibility responsibilities remain downstream.

Pin mutation/UI and atomic Save Coordinates writer integration remain a
separate checkpoint. This item does not change Initial Automatic Display,
Dataset data, Coordinate persistence, dirty-state semantics, App wiring, or
production rollout.

### E2R-LIAISONSCAPE-PIN-WRITER-ATOMIC-SAVE1 (2026-09-17)

The [Pin writer / atomic Save result](../liaisonscape-pin-writer-atomic-save1-result.md)
is classified **B. PIN WRITER ESTABLISHED / ONE BOUNDED SAVE-INTEGRATION GAP
REMAINS**. `src/pin-persistence.ts` now owns the bounded working Pin state
operations and builds a cloned Dataset candidate that combines the existing
Coordinate writer with canonical LiaisonScape Layout Pin persistence. It
preserves unknown fields, omits recognized Pin records on Unpin, validates
complete finite Pin anchors, and returns the original Dataset on failure.

The existing Coordinate serialization and Save Coordinates authorities remain
unchanged. Focused evidence covers new Pins, saved-Pin moves, Unpin omission,
Pin-then-Unpin coordinate discard, invalid anchors, unsupported versions, and
reader round-trip. Initial Automatic Display and Product presentation
responsibilities remain isolated.

App-owned Pin working state integration into `pendingUserWork`, replacement /
beforeunload safety, the existing Save Coordinates action, and Pin/Unpin UI
remain the next bounded gap. This item does not change runtime App behavior,
Dataset schema, persistence behavior outside the new pure writer boundary, or
production rollout.

### E2R-LIAISONSCAPE-PIN-APP-WORKING-STATE-SAVE-INTEGRATION1 (2026-09-17)

The [Pin App working-state / Save integration result](../liaisonscape-pin-app-working-state-save-integration1-result.md)
is classified **E. APP WORKING-STATE / ATOMIC SAVE INTEGRATION ESTABLISHED /
PIN UI REMAINS OPEN**. App-owned Pin state is initialized from accepted
Datasets, reconciled across in-session Entity mutations, and kept distinct
from `coordinatesDirty`. `unsavedPins` now participates in the existing
`pendingUserWork`, Dataset replacement, and `beforeunload` safety boundary.

The existing Save Coordinates action accepts Pin-only pending work and routes
Coordinate plus canonical Layout Pin persistence through the atomic writer.
Success refreshes the Dataset and Pin baseline together; failure preserves the
Dataset and all working pending state. No Extension JSON is written directly
from a UI because Pin/Unpin UI is not part of this checkpoint.

Pin UI / Human Check A remains the next bounded step. Explicit Auto Layout
Preview/Accept/Reject App lifecycle remains separate. Initial Automatic Display,
Product authorities, Dataset schema, and rollout behavior are unchanged.

### E2R-LIAISONSCAPE-PIN-UI1 (2026-09-17)

The [Pin UI 1 result](../liaisonscape-pin-ui1-result.md) is classified **B. PIN UI
FUNCTIONAL / FIRST VISUAL CANDIDATE REJECTED**. Entity Context Menu and Entity Detail
now
expose the same working Pin state and call the App-owned Pin mutation seams.
Human Check A rejected the persistent glyph and pinned/unpinned shadow
distinction as ambiguous and visually inconsistent. Existing drag, selection,
Relation creation, and long-press Context Menu semantics remained unchanged.

The UI adds no direct Extension or Coordinate writes, autosave, Pin All/Unpin
All control, or Explicit Auto Layout lifecycle. Existing atomic Save Coordinates,
replacement/beforeunload safety, and manual movement of Pinned Nodes remain the
authority. EN/JA state/action messages and a bounded Human Check A checklist
were prepared, but no visual or accessibility PASS was inferred.

### E2R-LIAISONSCAPE-PIN-UI-HUMAN-CHECK-A-VISUAL-ITERATION1 (2026-09-17)

The [Pin UI Human Check A visual iteration result](../liaisonscape-pin-ui-human-check-a-visual-iteration1-result.md)
is classified **A. PIN VISUAL ITERATION STAGED / READY TO RESUME HUMAN CHECK
A**. Persistent Pin decoration has been removed from the Canvas, and pinned
and unpinned Nodes now share the same ordinary shadow and presentation. Pin
state/action remains explicit and synchronized in Entity Context Menu and
Entity Detail with the accepted `Pinned` / `Unpinned`, `Pin` / `Unpin`, and
Japanese vocabulary.

Working Pin state, pending-work and replacement safety, atomic persistence,
manual movement of pinned Nodes, Initial Automatic Display, and the current
Explicit Auto Layout boundary remain unchanged. Pin All / Unpin All and new
hover/selection Pin popovers remain deferred. Human Check A must resume before
visual acceptance or any rollout conclusion.

### E2R-LIAISONSCAPE-PIN-UI-HUMAN-CHECK-A-POPOVER-ITERATION2 (2026-09-17)

The [Pin UI Human Check A popover iteration result](../liaisonscape-pin-ui-human-check-a-popover-iteration2-result.md)
is classified **A. PIN POPOVER ITERATION STAGED / READY TO RESUME HUMAN CHECK
A**. Pinned Nodes now show localized `Pinned` / `ピン留め済み` state text in
the existing Entity ownership popover. Unpinned Nodes show no Pin state text.
The state line reuses existing ownership typography without reinterpreting Pin
as automatic or user placement.

Human Check A subsequently accepted and closed this presentation: no persistent
Pin glyph, one common Node shadow, pinned-only Entity popover state, and the
existing localized Context Menu and Entity Detail vocabulary. Pin All / Unpin
All remains deferred.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-APP-LIFECYCLE-INTEGRATION1 (2026-09-17)

The [Explicit Auto Layout App lifecycle integration result](../liaisonscape-explicit-auto-layout-app-lifecycle-integration1-result.md)
is classified **B. LIFECYCLE INTEGRATED / READY FOR HUMAN CHECK B**. The normal
Product command captures immutable App working state, runs the shared
Frontier/Pin-aware/Product-selection path in a dedicated Worker, and exposes a
read-only Preview with Apply/Keep-current actions. Only Apply adopts Node
positions into working state; Save Coordinates remains the sole persistence
authority. Cancel, Reject, failure, and stale input preserve pre-operation
state.

Structural invalidity remains a hard refusal; non-strict Product eligibility
is a visible review warning. Initial Automatic Display, Product presentation
authorities, Dataset schema, and persistence semantics are unchanged. Human
Check B remains open; release closure is not inferred before that review.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-PREVIEW-SURFACE-REFINEMENT1 (2026-09-17)

The [Explicit Auto Layout Preview surface refinement result](../liaisonscape-explicit-auto-layout-preview-surface-refinement1-result.md)
is classified **A. PREVIEW SURFACE REFINED / READY TO RESUME HUMAN CHECK B**.
Human Check B confirmed lifecycle function and actual unpinned Node movement,
then identified a bounded surface defect: Preview text/actions shared the
Graph section with the floating viewport toolbar. Preview is now an
operation-level surface between Dataset metadata and the Graph section, and
the EN/JA decision copy is `Review Auto Layout` / `Use this layout` /
`Return to previous layout` and `自動レイアウトを確認` /
`このレイアウトを使う` / `元の配置に戻る`. The later DEV failure
diagnostic checkpoint records the user-accepted correction to
`元の配置に戻す`.

The fix is limited to surface ownership, layout, and user-facing copy.
Algorithm, Worker, Pin, lifecycle, Product presentation, Dataset, Coordinate,
dirty-state, and persistence semantics are unchanged. Human Check B remains
open and must not be inferred complete from this refinement.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-HUMAN-CHECK-B-RESUME1 (2026-09-17)

The [Human Check B resume result](../liaisonscape-explicit-auto-layout-human-check-b-resume1-result.md)
is classified **A. COPY CORRECTED / HUMAN CHECK B READY**. Current source and
Actual Product evidence confirm the accepted EN/JA Preview title and actions:
`Review Auto Layout` / `Use this layout` / `Return to previous layout` and
`自動レイアウトを確認` / `このレイアウトを使う` / `元の配置に戻る` at
that checkpoint. The subsequently clarified accepted Japanese Reject copy is
`元の配置に戻す` and is applied by the DEV failure diagnostic checkpoint.

The operation-level Preview surface remains separate from the Graph section
and floating viewport toolbar. Human Check B is resumed, but no overall visual
PASS, QUALIFIED, or FAIL is recorded here. Pin/lifecycle interaction review,
warning acceptability, viewport behavior, and ordinary/dense quality remain
for human judgement; no solver or presentation retuning is authorized.

### E2R-LIAISONSCAPE-PIN-WORKING-ANCHOR-CONSISTENCY1 (2026-09-17)

The [Pin working-anchor consistency result](../liaisonscape-pin-working-anchor-consistency1-result.md)
is classified **B. TWO DISTINCT PIN FAILURES IDENTIFIED AND FIXED / READY TO
RETEST HUMAN CHECK B**. Human Check established that stationary Pins are exact
hard constraints, while both move -> Pin and Pin -> move previously failed at
`result-validation / PIN_VIOLATION`; moved Pin Save independently failed with
`PIN_DATASET_INVALID`.

The Auto Layout path resolved and carried the correct current working anchor
through candidate selection, but final `round-once` canonicalization rounded
fractional dragged Pin coordinates immediately before exact validation. Final
canonicalization now preserves fixed anchors exactly and rounds only unpinned
positions. The Save path correctly produced Coordinate and Pin payloads but
failed to add the Layout Extension to an existing Specification `uses` list;
the atomic writer now synchronizes that declaration without repairing invalid
or conflicting declarations implicitly.

Focused and Actual Product evidence now covers both moved-Pin operation
orderings, stationary/all-Pinned constraints, canonical Lighthouse atomic
Save, saved/reloaded anchor resolution, and move -> Pin -> Preview -> Reject ->
Save. Frontier quality, Product scoring/presentation, Pin meaning, Preview
adoption, Dataset persistence authority, and Initial Automatic Display remain
unchanged. Human Check B may resume but is not closed by this checkpoint;
dense Graph-space quality remains separate.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-HUMAN-CHECK-B-RETEST1 (2026-09-17)

The [Human Check B retest result](../liaisonscape-explicit-auto-layout-human-check-b-retest1-result.md)
is classified **B. HUMAN CHECK B RETEST READY / FULL-SUITE ENVIRONMENTAL GATE
STILL OPEN**. Current Actual Product evidence on the Lighthouse JA fixture
shows fresh Unpinned Auto Layout reaching Preview with its quality warning,
and the same graph with a stationary Pin reaching Preview without
`PIN_VIOLATION` or a hard-failure diagnostic. The prior move -> Pin -> Preview
-> Reject -> Save sequence also succeeds; complementary Pin -> move and
saved/reloaded anchor cases are covered by focused executable tests.

The Preview actions are `Review Auto Layout` / `Use this layout` /
`Return to previous layout` and `自動レイアウトを確認` / `このレイアウトを使う`
/ `元の配置に戻す`. Preview remains read-only until Use, and Save Coordinates
remains the Dataset persistence authority. Targeted evidence is `30/30 PASS`.
The full suite was attempted but remained open after the known WebSocket
`Port 24678 is already in use` lifecycle condition and is not recorded as
Full PASS. The accepted automatic-integer/manual-float precision direction is
recorded: Explicit Auto Layout preserves fixed Pin/manual anchors exactly and
rounds only unpinned automatic positions; Initial Automatic Display
integerization remains a separate follow-up. Human Check B final disposition
remains user-owned, and dense Graph-space quality remains separate.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-HUMAN-CHECK-B-CLOSURE-GATE1 (2026-09-17)

The [Human Check B Closure Gate result](../liaisonscape-explicit-auto-layout-human-check-b-closure-gate1-result.md)
consolidates the accepted lifecycle, Pin, Preview, and Save evidence and
records the Human Review quality findings for **Pinned global recovery** and
**Presentation-aware local relaxation**. The gate is classified **B. EVIDENCE
CONSOLIDATED / FULL-SUITE LIFECYCLE GATE OPEN / USER DISPOSITION REQUIRED**.
The final Human Check B `PASS`, `QUALIFIED`, or `FAIL` decision is not inferred
by Codex.

The ordinary `npm test` rerun reproduced Vite middleware HMR WebSocket port
`24678` conflict after an initially clean port check. A serial diagnostic run
removed the conflict message but still hung without a completion summary,
indicating a separate test/Vite lifecycle or open-handle follow-up. Neither
run is recorded as Full PASS; focused regressions remain `30/30 PASS`, and
lint, build, E2R-SPEC validation, and diff checks remain green.

The two quality findings are deferred follow-ups, not Pin lifecycle or Preview
contract blockers. Production defaults, solver quality, Product authorities,
Dataset semantics, and rollout remain unchanged. Based on the current evidence,
`QUALIFIED` is the natural Human Check B disposition candidate if the user
accepts these quality limitations, but the final decision remains user-owned.
The separate Initial Automatic Display automatic-coordinate integerization
follow-up remains open; Explicit Auto Layout preserves fractional manual/Pin
anchors while integer-canonicalizing unpinned automatic positions. The primary
focused campaign is `72/72 PASS`, with a final provider-boundary rerun of
`30/30 PASS` after the last source adjustment.

### E2R-LIAISONSCAPE-INITIAL-AUTOMATIC-DISPLAY-INTEGER-CANONICALIZATION-HUMAN-CHECK1 (2026-09-17)

The [Initial Automatic Display integerization Human Check result](../liaisonscape-initial-automatic-display-integer-canonicalization-human-check1-result.md)
is classified **A. HUMAN CHECK READY / NO INTEGERIZATION REGRESSION OBSERVED**.
Fresh coordinate-less Lighthouse EN Actual Product smoke on the current Vite
`5176` source showed an immediately usable Graph and normal async completion;
the final 10-Entity/14-Relation display, labels, routes, and Self-loop showed
no visible integerization-attributable regression or hard-failure diagnostic.
Stored fractional Coordinates and manual fractional placement remain covered
by focused executable evidence because raw coordinate precision is not exposed
on the normal review surface.

The final Human Review disposition is not inferred here. The suggested review
procedure is limited to fresh coordinate-less display, stored fractional
authority, and manual fractional placement. Provider selection, quality
follow-ups, Explicit Auto Layout lifecycle, and the separate full-suite
Vite/HMR lifecycle gate remain unchanged.

### E2R-LIAISONSCAPE-INITIAL-AUTOMATIC-DISPLAY-INTEGER-CANONICALIZATION1 (2026-09-17)

The [Initial Automatic Display integer canonicalization result](../liaisonscape-initial-automatic-display-integer-canonicalization1-result.md)
is classified **A. INITIAL AUTOMATIC DISPLAY INTEGER CANONICALIZATION
ESTABLISHED / HUMAN CHECK READY**. Internal `solveAutoLayout` calculation may
remain fractional, while `settleInitialPlacement` canonicalizes the immediate
coordinate-less fallback to integer Node positions. The existing Frontier async
selected result already rounds before re-evaluating Product presentation, so
the final render-only adoption is integer as well.

Stored and mixed fractional Coordinates remain authoritative, and manual Node
placement retains fractional precision. No Dataset, persistence, dirty-state,
Explicit Auto Layout, Pin, routing, label, Self-loop, or quality follow-up
behavior changed. Focused evidence is `72/72 PASS`; lint, build, E2R-SPEC
validation, and diff checks pass. The known full-suite Vite/HMR lifecycle gate
remains separate and is not recorded as Full PASS.

### E2R-LIAISONSCAPE-INITIAL-AUTOMATIC-DISPLAY-INTEGER-CANONICALIZATION-HUMAN-CHECK-PASS-CLOSURE1 (2026-09-17)

The [Initial Automatic Display integerization Human Check PASS closure](../liaisonscape-initial-automatic-display-integer-canonicalization-human-check-pass-closure1-result.md)
records the user's explicit Human Review disposition: **PASS**. The immediate
fallback/provisional Graph was usable, Cancel preserved it, Frontier completion
introduced no unnatural jump or collapse, and no obvious integerization-related
regression or visible hard-failure diagnostic was observed. Stored and manual
fractional Coordinate behavior remains supported by focused executable evidence.
This acceptance is limited to the automatic-coordinate precision boundary; it
does not revisit Frontier/dense quality, Pinned global recovery, or
Presentation-aware local relaxation.

The previously open full-suite lifecycle gate is now **CLOSED**. Current source
and reproduction identified Vite middleware test-server WebSocket setup as the
cause: `hmr: false` alone still allowed Vite to allocate its default `24678`
WebSocket listener for parallel test workers. The test-only harness fix sets
`server.ws: false` in the three middleware-mode test server configurations.
The normal `npm test` now completes naturally with `634/634 PASS`, a complete
summary, exit code 0, and no residual 24678 listener. No production runtime or
Product semantics changed; historical records that described the gate as open
are retained. Existing quality follow-ups remain unchanged.

### E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-REFERENCE-PLACEMENT-REGRESSION-FIXTURE1 (2026-09-17)

The [Explicit Auto Layout reference-placement regression fixture result](../liaisonscape-explicit-auto-layout-reference-placement-regression-fixture1-result.md)
classifies the checkpoint **B. REGRESSION REPRODUCED / RESPONSIBILITY STILL
MIXED**. A neutral moderate 12-Entity / 19-Relation graph is available as a
saved-coordinate reference and a topology-identical coordinate-less control,
with EN/JA-shaped labels, local clusters, high-degree hubs, and cross-cluster
Relations. The DEV acceptance URL reaches the current `Running` → `Review Auto
Layout` path. The saved reference retains separated clusters while the current
Preview visibly rearranges the graph into a compact central/circular layout.

The current machine metrics do not prove a solver-only regression: reported
crossings are equal for the saved reference and Preview, while other signals
favor different arrangements. The result is therefore a reproducible visual
difference with mixed responsibility, not a final Human Review disposition.
The fixture is **READY_TO_REVIEW_NOT_JUDGED**. No quality fix, retuning, or
authority change is authorized. Pinned global recovery, Presentation-aware local
relaxation, and dense Graph-space / Relation-label congestion remain separate
non-blocking follow-ups; Human Check B remains `QUALIFIED`.
