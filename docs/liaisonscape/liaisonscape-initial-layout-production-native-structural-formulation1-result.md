# LiaisonScape production-native structural formulation 1

Date: 2026-09-13

## Decision and scope

**RETUNE the candidate; CONTINUE structural research in a bounded scope.**
A topology-derived six-candidate portfolio provides substantially better dense
crossing/hit metrics at approximately 1.05--1.99 seconds for the three requested
dense cases. However, it does not establish readable output on all canonical
cells, and the dense improvement has a material viewport trade-off. It is not
ready for a general Actual Product acceptance gate.

This is positive evidence that structural formulations still have useful
headroom, not proof of a universal high-quality Initial Placement solution.
Do not force a permanent Initial Placement/Auto Layout split solely from the
previous Frontier failures. Consider that split as a practical option for
larger dense graphs: this prototype reaches 7.23 seconds at 24/144.
Neither policy is adopted by this checkpoint.

Product default/adoption remains HOLD and unchanged. Production provider
integration remains NOT ESTABLISHED; Initial Layout Release blocker remains
OPEN. G3 Human ACCEPT and Frontier-12 positive human evidence remain scoped to
their existing arms. All results here are machine evidence, not human review.

## Actual evidence audit

The earlier claim that `k8-8` used four evaluations at about 5.8 seconds mixed
the four-member cheap frontier with the retained adaptive twelve-candidate
portfolio. The actual retained implementation evaluates twelve candidates on
that case. Likewise, discovery at rank 22 in one ordering is not proof that
22 evaluations are mathematically necessary for all structural formulations.
This checkpoint treats both as observations about the prior formulation.

Prior direct-transform/grid-one/grid-two and Frontier representative selection
results, exact occupied-prefix dependency evidence, and cost audits were
reviewed. No failed cache, replay, or cheap-score final authority was revived.
The existing generic search is reused only to evaluate generated coordinates
with the same Product routing, labels, feedback, fit metrics, selection, and
round-once finalization. No rendering or route algorithm was changed.

## Formulations actually implemented

The pure JavaScript module takes node IDs and ordinary endpoint topology;
it does not read fixture names, labels, stored coordinates, or renderer state.
Self-loops and duplicate ordinary neighbors do not influence its structural
graph; the authoritative evaluator still receives all Product Relations.

1. **Layered barycenter:** maximum-degree root, undirected breadth-first layers,
   twelve deterministic neighbor-rank sweeps, fixed layer/node spacing.
   This exposed a poor routing arrangement for dense bipartite graphs.
2. **Graph-distance stress:** all-pairs BFS distances, deterministic circle
   initialization, 160 simultaneous stress-majorization iterations. Cohesion
   alone did not eliminate authoritative crossings or label hits.
3. **Structural-twin spokes:** group identical ordinary-neighbor sets, split
   each group between opposite spokes, and place groups at distinct angles.
   This directly changes the topology embedding instead of searching a grid
   portfolio. It was the strongest dense signal.
4. **Crossing-aware ring:** one deterministic order, at most eight pair-swap
   passes / 2,048 cheap objective calls, counting interleaved ordinary endpoint
   pairs, then a circular embedding. It won Lighthouse and Titanic, but its
   edge-length/fit trade-off remained material.
5. **Ordered stress:** initialize the same bounded stress computation from the
   crossing-aware order. It reduced Apollo's two ring crossings to one, but
   did not reach the zero-crossing Frontier-12 reference.

Each is evaluated in two axis orientations with the same .88/1.12 transform.
A geometric minimum-distance scale is applied before that transform; floats
are retained until the existing final canonicalization step. This is a
deterministic heuristic bound, not a proof of general hard feasibility.

The ten-candidate audit is exploration, not the proposed runtime portfolio.
The retained small diagnostic portfolio has only crossing-ring, ordered-stress,
and twin-spokes, each in two orientations. All eleven tested cells retained
the ten-arm audit's selected coordinate fingerprint, complete presentation
digest, and reported final metrics under this six-arm reduction. This is
in-sample portfolio evidence, not a general guarantee or inherited human gate.

## Matched quality and runtime

Counts below are **crossings / Relation-label hits / labelNear20**. Every
selected output had zero Node overlaps and zero Relation-label overlaps.
References are current Frontier-12 for canonical and retained adaptive for
dense. All comparisons enabled existing exact geometry/metadata reuse and
round-once; full presentation remains the selector. Timings are Node diagnostic
elapsed times, not production-browser benchmarks or cold-start guarantees.

| Cell | Reference metrics | New metrics | Reference seconds | Small seconds (two runs) |
| --- | --- | --- | ---: | --- |
| Lighthouse EN | 0 / 0 / 0 | 0 / 0 / 0 | .467 | .210 / .230 |
| Lighthouse JA | 0 / 0 / 0 | 0 / 0 / 0 | .436 | .223 / .232 |
| Titanic EN | 0 / 0 / 0 | 0 / 0 / 0 | .402 | .196 / .203 |
| Titanic JA | 0 / 0 / 0 | 0 / 0 / 1 | .399 | .199 / .202 |
| Apollo EN | 0 / 0 / 0 | 1 / 0 / 0 | .454 | .154 / .168 |
| Apollo JA | 0 / 0 / 2 | 1 / 0 / 0 | .436 | second run .162 |
| k7-7 (14/49) | 129 / 8 / 20 | 81 / 4 / 12 | 5.547 | 1.099 / 1.104 |
| k6-8 (14/48) | 123 / 4 / 15 | 72 / 2 / 11 | 4.784 | 1.050 / 1.135 |
| k8-8 (16/64) | 229 / 16 / 32 | 144 / 5 / 15 | 5.316 | 1.684 / 1.989 |
| k5-9 (14/45) | 104 / 7 / 20 | 64 / 1 / 8 | 4.455 | .963 / 1.112 |
| k7-7 minus one Relation (14/48) | 137 / 9 / 21 | 108 / 6 / 18 | 3.084 | 1.113 / 1.195 |

Small portfolio: six generated candidates, seven full evaluations including
finalization. Canonical reference: thirteen calls. Adaptive dense reference:
22, 18, 12, 20, 12 respectively; integer finalization can hit the exact cache,
so it does not always add another full call. The audit portfolio used eleven
calls. Independent current G3 runs are stored in `g3.json`; dense G3 comparison
must not be replaced by an assumed equivalence on additional perturbed cases.
The fresh G3 calls/times were 46/.995--1.071 s for Lighthouse/Titanic,
62/.939--.944 s for Apollo, and 44/7.181, 6.944, 11.382 s for the requested
dense cases. Dense selected digests match the adaptive reference on those
three cases and k5-9. On the one-edge perturbation G3 is better than adaptive:
129/7/19 versus 137/9/21, while the new formulation still reaches 108/6/18.
Canonical G3 matches Frontier-12 except Titanic JA, where G3 has a different
fingerprint and labelNear20=2. The new Titanic JA near=1 is thus an improvement
over that G3 machine metric but a regression against the stronger Frontier-12
near=0 result; no human preference is inferred.

The speedup on requested dense cells is approximately 63--80% against the
matched adaptive reference. This is a different structural geometry and
evaluation-volume result, not an exact optimization of the old output.

## Screen-space counter-signals

Using the evaluator's unchanged fit computation, minimum Node-center separation
times fitScale changes as follows (pixels in its fixed diagnostic viewport):

| Cell | Reference | New |
| --- | ---: | ---: |
| Lighthouse EN/JA | 85.5 | 70.2 |
| Titanic EN/JA | 68.3 | 54.6 |
| Apollo EN/JA | 122.9 | 42.2 |
| k7-7 | 117.6 | 35.7 |
| k6-8 | 117.6 | 41.9 |
| k8-8 | 90.8 | 31.1 |

Dense fitScale falls from .717/.717/.554 to .240/.282/.209. Route median
lengths increase from roughly 314/309/356 to 463/463/511 graph units. Titanic
route median increases from 408 to 587. These are material readability risks:
fewer crossings can coexist with smaller visible text and longer routes.
No Actual Product browser or user review was conducted for these candidates.
The existing Titanic/Apollo presentation issues are not credited as fixed.

The one-edge perturbation changes twin classes and geometry substantially;
although its crossing/hit advantage remains, topology-edit continuity and
generality outside bipartite families are unresolved. The five dense cases
are not evidence across all dense graph classes.

## Scaling and execution boundary

Full six-candidate evaluation: k10-10 (20/100) took 3.65 s, k12-12 (24/144)
took 7.23 s. Their selected crossings were 400 and 900; no G3 quality comparison
was run at these two larger scales. These measurements expose a scaling
ceiling rather than support unlimited synchronous browser execution.

Generation alone, three runs each: 16/64 took 28--40 ms; 24/144 took
414--479 ms; 32/256 took 2.605--2.616 s; a 64-node/63-edge chain took
193--194 ms. The bounded ring objective still checks pairs of edges and is
the main obvious density-sensitive structural loop; operation-count bounds
do not make it cheap on all accepted inputs.

The module is portable standard JavaScript with no Node/DOM imports. Input
bounds are 64 nodes and 256 input edges; exceeding them throws in this research
API. It is not a Product timeout/fallback contract. No Worker, server, provider
integration, cancellation, or browser benchmark was implemented. Determinism
was checked across input enumeration and duplicate/self-edge permutations;
ID-renaming invariance and cross-engine floating-point identity are not claimed.

## Next bounded direction

Retune topology decomposition with an explicit viewport/route-length trade-off
and a stronger sparse embedding. The dense spoke signal survives the bounded
perturbation and is large enough to justify that work. Avoid selecting solely
by crossing count: preserve authoritative presentation selection and bring a
candidate to user review only with clearly stated screen-space trade-offs.

Current portfolio is not a universal Initial Placement candidate. A human
comparison is required before claiming its dense readability; canonical Apollo
and Titanic JA should be repaired through a new structural hypothesis before
the general acceptance gate. This does not authorize presentation fixes.
The evidence is insufficient to conclude that all structural formulations are
exhausted or that a permanent two-operation UX is mandatory. For larger dense
graphs, investigate fast Initial Placement plus explicit High-quality Auto
Layout as a parallel architecture decision, not an adopted behavior.

## Evidence, boundaries and validation

Machine artifacts and reproduction commands are in LiaisonScape
`experimental/structural-formulation1/`: per-family metrics, selected digests,
small-vs-audit equality, current G3 references, scaling and source hashes.
No canonical fixture, presentation implementation, persisted coordinates,
dirty-state, Product default, or adoption behavior changed. Vertical parallel
Edge spacing remains the next independent presentation track.

LiaisonScape tests: 388/388 PASS; lint and production build PASS. Two new tests
cover input preservation, deterministic enumeration, duplicate/self-edge
handling, disconnected/empty/singleton cases, and bounds. Machine comparison
of all eleven cells passed. E2R-SPEC validate, diagnostic script syntax checks,
and both diff checks PASS. No user human acceptance was performed.
