# LiaisonScape Frontier-12 Bounded Solver Extraction / Standalone Characterization 1

Date: 2026-09-16

## Final classification

`BLOCKED: PRODUCT-AUTHORITATIVE SELECTION DEPENDENCY`

No production solver extraction was performed. The recovered Frontier-12
lineage contains a separable structural candidate-generation region, but the
reviewed final position is selected only after Product-authoritative
presentation evaluation. Extracting only the structural region would return a
candidate set, not the Human Review behavior. Treating that candidate set as a
pure complete-position solver would change the reviewed lineage.

## Source-backed boundary

In `tools/generic-crossing-search.mjs`:

* `productionAblationPlan("frontier-12")` calls
  `productionStructuralFrontier(12)`;
* `productionStructuralFrontier` builds the structural candidate pool,
  computes the structural frontier, and chooses representatives;
* the resulting candidates are then passed through `productionSimplificationSearch`;
* that path calls `presentationMetrics`, applies Product presentation
  feasibility/quality eligibility, sorts candidates, and may apply final
  coordinate canonicalization before emitting the selected positions and
  fingerprint.

The saved Human Review artifact records the output of this complete path. The
structural frontier alone is not the reviewed result. Routing, Relation-label,
Node-label, Self-loop, viewport, and other Product authorities therefore cannot
be silently moved into a new solver module to make the boundary appear pure.

## Why extraction stops

The requested contract was:

`normalized serializable placement input -> deterministic Frontier-12 computation -> complete finite derived Node positions`

The current evidence supports a narrower contract:

`normalized graph input -> structural Frontier candidate pool/representatives -> Product-authoritative presentation selection -> final positions`

Removing the Product selection stage would require choosing one structural
candidate or reproducing the Product evaluator inside the solver. Either would
alter authority or reviewed behavior. No bounded refactor can produce the
requested complete-position pure solver without resolving that architecture
decision first.

## Runtime characterization boundary

The existing sweep reports end-to-end child-process materialization and
presentation timings, but those include fixture parsing, candidate comparison,
Product presentation evaluation, artifact/report generation, and process
startup. Because the structural functions are private closures over the
research runner and are not exposed as a standalone entry point, a
solver-only runtime measurement cannot be made without performing the blocked
extraction.

Accordingly, no solver-only ordinary/difficult/dense timing is claimed here.
The existing end-to-end timings remain lineage evidence only and must not be
used to choose main-thread, cooperative, or Worker execution.

## Provenance and parity

The prior lineage provenance remains valid:

* source revision: `e7d6cbc`;
* orchestration: `tools/frontier-actual-product-visual-sweep1.ts`;
* search entry point: `tools/generic-crossing-search.mjs`;
* Frontier-12 environment and deterministic ordering;
* 10 file-backed and 3 dense synthetic exact family/fingerprint replays.

Those replays prove the existing research lineage, not a newly extracted pure
solver. No artifact was retuned and no Human Review decision was reopened.

## Required next decision

A future checkpoint must choose one of two explicit designs before extraction:

1. define a pure Frontier solver that returns a candidate set and keep the
   Product-authoritative selector as a separate downstream stage; or
2. define and authorize a shared Product-evaluation contract, accepting that
   the production candidate boundary is no longer placement-only.

Only after that decision should standalone runtime characterization be added.
Worker/cooperative execution, Cancel, transient preview, App wiring, and
production default remain out of scope.
