# LiaisonScape Parallel / Incident Architecture Closure 1

Date: 2026-09-14

## Decision

**ARCHITECTURE CLOSED / PRODUCT QUALITY FOLLOW-UP REMAINS.** The bounded
Parallel / Incident research now has a usable responsibility and
request-response boundary for the next Structural Placement track. This closes
architecture research, not the visual quality of parallel Relations or
Relation-labels. Product default/adoption remains `HOLD`, the production
provider remains `NOT ESTABLISHED`, and the Initial Layout Release blocker
remains `OPEN`.

## Roadmap synchronization

The current execution order is now:

1. Parallel / Incident Architecture Closure;
2. Structural Placement / Angular Ordering / Initial Node Placement;
3. Parallel / Relation-label Presentation Re-evaluation;
4. Self-loop Angle / Ordinary Edge Interaction;
5. bounded Layout / Presentation Modularization readiness or extraction;
6. Initial Layout Re-baseline;
7. Initial Layout execution-architecture decision.

This is intentionally not a requirement to finish Parallel visual quality
before improving Node placement. The architecture boundary is closed first,
then the improved geometry is used to re-evaluate which Parallel residuals are
actually routing/presentation-owned. Self-loop remains after that re-
evaluation and independent from both authorities.

## Closure contract

The existing pure contracts provide the following stable boundary.

### Acceptance results

`decideIncidentAllocation` accepts only a hard-feasible candidate. A
`capacity-shortage` result carries structured shortage and pressure evidence.
The separately named diagnostic fallback is render-only and is never an
accepted allocation. Unit evidence covers hard-feasible selection, shortage /
fallback separation, and deterministic decisions under input reordering.

### Endpoint and multi-bundle responsibility

The endpoint-plan contract collects incident bundles at a shared endpoint and
can boundedly backtrack instead of committing the first local result. It
represents:

- sector reservation conflicts;
- ordinary Relation claim conflicts;
- shared multi-bundle allocation; and
- combined Product-presentation rejection before commit.

The existing synthetic shared-bundle and conflicting-bundle evidence confirms
that feasible plans and explicit shortage remain distinct. The bounded search
is deterministic and finite. Candidate compression remains a separate
quality/runtime research problem and is not part of this closure.

### Placement negotiation

Routing emits a placement request only for a genuine bounded capacity
shortage. Lighthouse EN/JA and Titanic JA are routing-feasible and therefore
receive no placement correction. Titanic EN reports approximately 26.4 degrees
required versus 14.2 degrees available; the structured request can be consumed
by a derived Structural Placement counterfactual and then re-evaluated through
the same endpoint-plan and Product-presentation authority. The Retune 2
whole-graph guards preserve the original positions on unsafe Node-separation,
extent, fitScale, or displacement outcomes.

Structural Placement does not own the route result. The request-driven
correction is a placement candidate only, with no Dataset write, dirty-state
mutation, or persistence effect. Its lifecycle remains bounded to safe
initial-open / stable-idle states with matching request tokens and without
authored coordinates or manual route/label authority; drag, transitions,
navigation, stale, cancelled, and manually authored states are deferred or
discarded.

## Authority boundary retained

Closure does not transfer any of the following into Parallel orchestration or
Structural Placement:

- Product ordinary routing;
- Relation-label placement;
- manual curvature or manual Relation-label anchors;
- Self-loop routing;
- authored or stored coordinates; or
- Dataset, dirty-state, persistence, and Save Coordinates semantics.

Relation-label reservations are diagnostic inputs to feasibility, while final
label placement remains Product-owned. Existing Human Review evidence is not
inherited by any new candidate.

## What remains open

Architecture closure does not claim:

- final candidate-compression safety;
- production runtime or provider feasibility;
- full Product integration or Actual Product Human Review;
- zero ordinary-route changes in Titanic EN;
- a general crossing-aware Structural Placement solution;
- a solution for parallel visual quality, long-label association, or outer
  clearance; or
- a solution for Self-loop / ordinary-Edge interaction.

The next active research track is **Structural Placement / Angular Ordering /
Initial Node Placement — General Crossing-Aware Placement**. It may use both
the earlier crossing-reduction evidence and the structured capacity request,
but must guard Node separation, viewport fit, graph extent, and unrelated
movement. After that track, **Parallel / Relation-label Presentation
Re-evaluation** is required on the improved geometry before Self-loop work.

No Product provider, default, Dataset, routing rule, label authority,
canonical fixture, persistence behavior, or existing Human evidence changed in
this closure checkpoint. No broad modularization refactor was performed; the
roadmap-only modularization plan remains bounded and future-facing.
