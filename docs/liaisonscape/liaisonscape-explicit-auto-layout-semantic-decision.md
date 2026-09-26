# LiaisonScape Explicit Auto Layout Semantic Decision

- Date: 2026-08-30
- Status: `READY — EXPLICIT AUTO LAYOUT SEMANTICS DEFINED`
- R2 status: `DESIGN DEFINED — IMPLEMENTATION NOT STARTED`

## Trigger

Explicit user command only. This is a graph-wide authoring-adjacent operation,
not passive opening behavior and not a viewport control.

## Background and user expectation

Public Sample Refresh is formally accepted and the prior Validator consumer
blocker is closed. R2 addresses the remaining whole-graph usability question:
a structurally central hub such as Clara should be placed toward the centre of
its component when the user explicitly requests re-layout. This is a structural
expectation, not a hard-coded Lighthouse rule.

## Scope

This decision covers temporary whole-graph Entity repositioning, its safety
boundary, topology inputs, evaluation, and a first implementation experiment.
It does not implement a solver, UI action, schema, sample change, or runtime
behavior.

## Relationship to passive automatic initial placement

The accepted passive rule remains unchanged: automatic initial Entity
placement is `Coordinate / Derived`, must not replace Owned Coordinates, must
not reshuffle the whole graph, and must not author the Dataset merely because
it was opened. The explicit command is a separate
`EXPLICIT-RELAYOUT-EXCEPTION`: an intentional temporary operation may replace
working positions for inspection, while stored Dataset Coordinates remain
untouched until explicit adoption.

## Relationship to view controls

Zoom, pan, fit, and reset view remain Application View State. Auto Layout is
not a view operation because it changes working Entity positions and can later
be adopted as Coordinates.

## Public design baseline

Read-only inspection of the public e2r-spec and LiaisonScape repositories was
required and performed. The public design baseline states that automatic
layout must not override Owned Coordinates, automatic Entity placement is
Derived Coordinate, automatic route/label geometry is Derived Layout, and
automatic geometry is not persisted. The public repositories may lag the
local candidate; local committed documents and source are authoritative for
this decision.

## Current local implementation evidence

In the current LiaisonScape candidate:

- `App.tsx` owns working `positions` and `coordinatesDirty`.
- Dataset acceptance reads stored Coordinates, calls the existing initial
  placement routine, initializes working positions, and resets coordinate
  dirtiness.
- A meaningful Entity drag updates working positions, marks
  `coordinatesDirty`, and records the Entity for Coordinate adoption.
- `pendingUserWork` includes unsaved Coordinates, manual route, manual
  Relation-label, manual Node-label, and meaningful drafts.
- `saveCoordinates` writes through the existing Coordinate writer; it does not
  use a Layout payload.
- Replacement and beforeunload safety already consume `pendingUserWork`.
- `fitGraphView` changes view transform only.
- The Workspace More menu is the existing secondary action hierarchy.
- Automatic routes and labels are recomputed from current Entity geometry;
  manual label anchors/Node offsets are reconstructed relative to their owning
  geometry.

## Working position ownership

Working `positions` are application state. Stored Coordinates are Dataset
state. Auto Layout v1 changes only working positions before Save. It must not
mutate the Dataset during calculation or observation.

## Stored / Owned Coordinate interpretation

Stored Coordinates restore as the current starting positions. An explicit
Re-layout may temporarily move even those Entities, but it does not erase or
rewrite their stored values. After Save, generated positions become
`Coordinate / Owned`; before Save they are `Coordinate / temporary adjustment`.
The accepted passive invariant is not repealed.

## Entity scope decision

Choose `SCOPE-B — ALL GRAPH-VISIBLE ENTITIES / TEMPORARY`. All graph-visible
Entities participate in the explicit result, including those restored from
stored Coordinates. No pin/lock semantics are invented.

## Persistence / adoption decision

Choose `PERSIST-B — TEMPORARY WORKING POSITIONS + EXISTING SAVE ADOPTION`.
Auto Layout sets working positions only. If positions differ,
`coordinatesDirty` and therefore `pendingUserWork` become true. Existing Save
node coordinates adopts the result through the existing Coordinate writer.
No Layout Extension payload or new serialization mechanism is introduced.

## Dirty-coordinate safety decision

Choose `DIRTY-B — CONFIRM REPLACEMENT OF PENDING POSITIONS`. If dirty
Coordinates exist before Auto Layout, the command must ask for confirmation
that unsaved node positions will be replaced. Cancel leaves every working
position untouched; Continue replaces them with the deterministic result.
Silent replacement is prohibited. The dialog is an implementation concern,
not implemented here.

## Manual route / label ownership decisions

Choose `OWN-B — PRESERVE INDEPENDENT MANUAL OWNERSHIP`.

- Manual Node-label offsets remain Node-relative and follow their owner.
- Manual Relation-label anchors remain route-relative and follow their route.
- Manual self-loop orientation/radius remains owned and follows the Entity.
- Manual ordinary Relation route remains manual unless the current
  representation is proven invalid by the future implementation.
- Automatic routes and labels recompute from the new Entity geometry.

Auto Layout must not silently clear unrelated manual state. Existing
application-local ownership is not converted into Dataset Layout data by this
decision.

## Graph-visible topology boundary

Use graph-visible Entities and valid graph-visible Entity-to-Entity Relations.
Hidden Event-related Relations are not layout edges unless the application
graph semantics later explicitly include them. Presentation arrow/line style
does not rewrite Core topology.

## Direction, parallel, self-Relation, and components

Use undirected adjacency derived from directed Core Relations for geometric
attraction and centrality; preserve Core direction for meaning and rendering.
Collapse parallel Relations to distinct-neighbor adjacency for placement and
centrality, while retaining all actual edges for later crossing and clearance
evaluation. Exclude self-Relations from attraction and centrality; continue to
render and preserve their independent manual geometry. Solve disconnected
components separately, then pack them deterministically with explicit gaps and
without overlap.

## Determinism contract

No uncontrolled randomness, clock, DOM measurement, or `Math.random`. The
same topology and relevant input state produce the same result. Stable Entity
IDs provide canonical tie-breaking; Entity array order is not semantic. Any
future relaxation uses fixed iteration and deterministic tie-breaking.

## Centrality intent

For the first experiment, rank Entities by distinct-neighbor degree, with
deterministic stable-ID tie-breaking, within each connected component. This is
the minimum meaningful hub signal: it behaves sensibly for paths, stars, and
cycles, and avoids artificial inflation from parallel Relations. Betweenness,
closeness, weighted degree, and hybrid rankings remain comparison candidates.

## Algorithm-family comparison

| Candidate | Strength | Risk |
| --- | --- | --- |
| ALG-A: centrality-seeded radial/concentric | Clear hub/ring structure and simple determinism | Can look artificial and retain crossings |
| ALG-B: deterministic force/spring | General spacing and graph flexibility | Sensitive weights and stability tuning |
| ALG-C: topology seed plus bounded deterministic relaxation | Combines hub structure, component handling, and bounded refinement | More implementation and objective complexity |

## First experiment candidate

Choose `ALG-C — TOPOLOGY SEED + BOUNDED DETERMINISTIC RELAXATION` as an
experiment candidate only, not a permanent universal algorithm. The seed uses
the topology and centrality rule above; bounded relaxation evaluates overlap,
labels, crossings, lengths, bounds, and component separation.

## Objective hierarchy

The first experiment evaluates, in this order: node overlap; node-label space
and collision; edge crossing; edge length; graph bounds/excessive spread;
component separation; central/hub placement; deterministic reproducibility;
incremental stability; and preservation of unrelated manual ownership. Explicit
Re-layout may move existing nodes, so incremental stability is desirable but
must not make the command meaningless. Numeric weights remain experimental.

## Lighthouse acceptance fixture

Use the accepted Lighthouse fixture without hard-coded IDs: 10 Entities, 11
Events, 28 Relations, and 14 graph-visible Entity-to-Entity Relations. Future
acceptance requires no Entity overlap; a structurally central hub in a genuine
component-central region; no regression in Old Harbor Lighthouse label
legibility; crossings no worse than the accepted baseline where measurable;
bounded graph extent; and unchanged dashed/dotted/reverse/bidirectional
Presentation. No Dataset or sample Coordinate mutation occurs during the
experiment.

## Additional fixture strategy

At least two non-Lighthouse fixtures must accompany the first experiment:

1. a path/cycle-shaped graph to test ordering and non-hub behavior;
2. a disconnected multi-component graph to test deterministic component
   solving and packing.

If available in the live test corpus, add a star/hub, parallel-Relation, and
self-Relation fixture as focused cases. Synthetic fixtures may be test-only;
public samples are not changed.

## Action hierarchy and view-state behavior

Choose `UI-C — WORKSPACE MORE`, with a future discoverable label such as
“Auto layout graph”. It belongs with graph-wide secondary actions, not with
Zoom/Fit/Reset View and not with per-object Automatic placement reset.

Choose `VIEW-A — PRESERVE ZOOM/PAN`. Layout and view responsibilities remain
separate. The solver must normalize its result into bounded graph space, but
the command does not silently change the current view transform.

## Save / Export semantics

Before Save node coordinates: working positions changed, `coordinatesDirty` is
true, `pendingUserWork` is true, and serialized Dataset content is unchanged.
Export follows existing semantics and does not silently adopt temporary
positions. After explicit Save: positions are written by the existing
Coordinate writer, `coordinatesDirty` clears, and Dataset modified state
follows the current baseline. No provenance field or Layout Extension is
written.

## Dataset Replacement Safety

Auto Layout must use D1-D7 rather than a new safety system. Unsaved results
contribute to `pendingUserWork`; beforeunload remains protective; replacement
confirmation protects the temporary positions; Cancel leaves them untouched;
Discard intentionally loses them. Existing Export-and-Continue limitations
for pending Coordinates remain unchanged.

## Serialization/schema decision

Choose `SCHEMA-NO`. The first experiment requires no Core field, Coordinate
Draft change, Layout field, Presentation field, Validator behavior, or Dataset
version. Working Coordinates and the existing Save adoption path are
sufficient.

## Undo boundary

No general Undo/Redo is required for the first experiment. Dirty-state
confirmation is required, and original saved Coordinates remain recoverable
until Save. A one-shot Revert command, if later justified, is a separate
follow-up.

## Implementation responsibility boundary

Future implementation should use a pure topology/layout solver plus small App
integration. Likely responsibilities are topology normalization, component
detection, centrality/seed, deterministic solving, normalization/bounds, and
command integration. Do not embed a large solver in `App.tsx`, perform a broad
graph refactor, add a layout library, or fragment responsibilities into
artificial one-function files. This follows the accepted incremental
modularization decision.

## First implementation experiment boundary

Choose `EXP-1A — PURE SOLVER + TESTS/FIXTURE OUTPUT ONLY`. Implement no
production button initially. The bounded experiment should expose deterministic
solver output for Lighthouse plus the two contrasting fixtures, and assert:
same input gives byte-equivalent output; no overlaps; bounded component
packing; centrality seed behavior; and preserved topology/Presentation data.
Reject the experiment if it is nondeterministic, overlaps nodes, explodes graph
bounds, materially worsens crossings/legibility, or requires serialized Layout
state to explain its result. A later visual harness and production command are
separate decisions.

## Decision table

| Question | Decision |
| --- | --- |
| Trigger | Explicit command only |
| Entity scope | SCOPE-B: all graph-visible, temporary |
| Owned Coordinate interpretation | Explicit temporary exception; stored values untouched until Save |
| Persistence | PERSIST-B: working positions plus existing Save adoption |
| Pre-existing dirty coordinates | DIRTY-B: confirmation before replacement |
| Manual route/label ownership | OWN-B: preserve independent ownership |
| Relation direction for geometry | Undirected-derived adjacency |
| Parallel Relations | Collapsed to distinct-neighbor adjacency |
| Self-Relations | Excluded from attraction/centrality; rendered/preserved |
| Components | Solve separately, deterministic non-overlapping packing |
| Determinism | Stable IDs, fixed computation, no uncontrolled randomness |
| Centrality | Distinct-neighbor degree with stable-ID ties |
| Algorithm family | ALG-C: topology seed plus bounded deterministic relaxation |
| Action location | UI-C: Workspace More |
| View behavior | VIEW-A: preserve zoom/pan |
| Serialization | SCHEMA-NO |
| Save adoption | Existing Save node coordinates writes generated positions |
| Replacement Safety | Existing pending-work confirmation and beforeunload boundary |
| First implementation experiment | EXP-1A: pure solver plus tests/fixture output |

## Rejected alternatives and deferred questions

SCOPE-A fails the whole-graph user intent; SCOPE-C invents an unaccepted
pin/lock model. Immediate Dataset write is rejected because it authors many
values without review. Silent dirty replacement is rejected because it loses
user work. Resetting all manual route/label state is rejected because
ownerships are independent. Directed-only geometry is rejected for placement
because Presentation does not change structural adjacency. Auto-fitting after
layout is rejected to preserve view separation. ALG-C is not a final algorithm.
Numeric weights, relaxation thresholds, crossing metrics, label scoring,
component gaps, and a future Layout representation remain deferred.

## Non-goals and boundaries

Passive initial placement remains accepted and is not reopened. This checkpoint
does not modify LiaisonScape, Validator, NarrativeLine, Hub, samples, schemas,
roadmap, or ai-knowledge. Public Sample Formal Acceptance remains unchanged.
No Layout schema, package, library, button, solver, or browser acceptance is
created here.

## R2 status after this checkpoint

`DESIGN DEFINED — IMPLEMENTATION NOT STARTED`

## Public Sample Formal Acceptance boundary

The accepted Public Sample Refresh remains the baseline. Its canonical sample
semantics, Validator 0.4.0 compatibility, Presentation behavior, and consumer
integration are not altered by this design.

## Push/deploy boundary

This is a local semantic decision only. No push, tag, npm publication, deploy,
or public deployment acceptance is authorized or performed.

## Result

`READY — EXPLICIT AUTO LAYOUT SEMANTICS DEFINED`

STOP: Auto Layout implementation, Final Cross-App / Release Audit, research
audit, push/deployment readiness, and public deployment acceptance remain
unstarted.
