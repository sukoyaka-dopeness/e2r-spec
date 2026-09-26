# LiaisonScape Structural Placement / Angular Ordering Retune 2

Date: 2026-09-14

## Decision

**RETUNE / NOT READY FOR HUMAN REVIEW.** A request-driven placement response
can be made safer as a bounded, graph-wide-guarded counterfactual, but the
current evidence does not establish a generally acceptable Product placement
candidate. The correction remains derived and opt-in to a routing-issued
capacity shortage. Product default/adoption remains `HOLD`, the production
provider remains `NOT ESTABLISHED`, and the Initial Layout Release blocker
remains `OPEN`.

## Roadmap synchronization

The roadmap now records a future **Layout / Presentation Modularization** plan.
It is responsibility-based and incremental: stabilize Parallel / Incident
Bundle, Structural Placement / Angular Ordering, Self-loop / Ordinary Edge
Interaction, and shared Presentation authority first; extract small pure
contracts only when their behavior-preserving boundary is demonstrated. It is
not a broad application rewrite or an algorithm-freezing step.

The execution order is now:

1. Parallel / Incident Bundle and structured capacity requests;
2. Structural Placement / Angular Ordering;
3. Self-loop / Ordinary Edge Interaction;
4. bounded modularization readiness or extraction where justified;
5. Initial Layout Re-baseline;
6. Initial Layout execution-architecture decision.

This does not promote Adaptive Cascade, change the current priority, or move
routing, labels, or Self-loop authority into Initial Layout.

## Retune formulation

The former correction moved every incident neighbor inside the requested sector
to the same boundary angle. The bounded Retune 2 contract instead:

- runs only after a structured routing capacity request;
- orders incident neighbors deterministically by signed angle and stable ID;
- projects only neighbors inside the requested sector outward;
- preserves their radial distance and their local angular order;
- derives a small angular separation from the request and incident count rather
  than restoring a fixed 32-degree rule;
- guards global minimum Node separation, graph extent, optional viewport
  fitScale, and maximum moved-neighbor displacement; and
- returns the original positions on any safety failure.

The contract reports moved and directly involved Nodes. It never changes
unrelated Nodes, writes Dataset coordinates, or changes dirty/persistence
state. The caller re-runs the existing authoritative endpoint plan and
presentation evaluator; the placement module does not own routing or labels.

## Matched evidence

The existing audit was extended with the new guarded arm. Product fit and
authoritative routes/labels were re-evaluated after each accepted correction.

| Case | Request / result | Whole-graph evidence | Presentation result |
| --- | --- | --- | --- |
| Lighthouse EN/JA | no shortage request | no correction | unchanged |
| Apollo EN/JA | no parallel/request control | no correction | unchanged |
| Titanic EN | 26.4° required vs 14.2° available; correction applied at `titanic` | graph minimum separation 168.2 -> 158.4; extent 995.7 -> 1030.4; guarded fitScale unchanged; only `bride` moved | endpoint plan feasible; crossings 0; lane 40.6px; label clearance 28px; outer clearance 16.8px; side-bias 0.73; min screen Node separation 64.4px; 4 ordinary route changes |
| shared conflicting synthetic | correction moved only the directly incident `ordinary` Node | graph minimum separation 141.2 -> 170.5; extent 393.8 -> 396.1; guarded fitScale unchanged; no unrelated Node movement | capacity shortage remained explicit; it was not promoted as a feasible allocation |
| asymmetric rotated synthetic | correction moved direct neighbor `o1` | graph minimum separation 16.4 -> 27.4; extent 488.8 -> 496.0; guarded fitScale unchanged; no unrelated Node movement | endpoint plan became feasible; crossings 0; one direct ordinary route changed |

For Titanic EN, the correction reduced graph minimum separation by about 5.8%
within the 12% guard and increased extent by about 3.5% within the 25% guard.
The Product-fit report remained at approximately 0.406 for the corrected arm.
The four ordinary route changes are part of the requested endpoint/incident
neighborhood; no unrelated Node was moved and the diagnostic now distinguishes
direct from unrelated route changes. This is safety evidence, not a claim that
the existing route/label presentation is visually solved.

The conflicting synthetic demonstrates the required fail-safe boundary:
capacity shortage can remain a shortage even after a local correction. The
request does not authorize an unsafe fallback. Controls without a request
received no correction, so Titanic-specific pressure was not generalized into
a fixed rule.

## Responsibility and lifecycle

Endpoint planning remains responsible for incident feasibility and structured
capacity requests. Structural Placement may answer a request with a derived
candidate only at the existing safe lifecycle boundary (coordinate-less
initial open or stable idle, matching token, no authored coordinates or manual
route/label authority). Drag, Dataset transition, navigation, stale, cancelled,
or manually authored states remain deferred or discarded.

The request-driven correction still has unresolved Product lifecycle questions:
when a new request may trigger a re-presentation, how cancellation is wired,
and how interaction continuity is preserved. These were not integrated or
human-reviewed here. Self-loop routing remains an independent track.

## Assessment and next step

The evidence supports one bounded generic safety contract, not adoption. The
next step may continue Structural Placement only if a full route/label and
interaction audit can show that request-driven movement does not create
unrelated presentation churn. If that boundary cannot be demonstrated, the
track should pivot to a broader placement/routing negotiation or to the
separate Self-loop / Ordinary Edge Interaction work. No fixed angular relief,
fixture-specific swap, or routing repair was introduced.

No Product provider, default, Dataset, canonical fixture, authored-coordinate
authority, persistence, dirty-state, Save Coordinates behavior, or existing
Human evidence changed. No Product Human Review handoff was prepared.
