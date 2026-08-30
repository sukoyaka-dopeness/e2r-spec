# LiaisonScape Relation Routing / Presentation Quality Audit

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-RELATION-ROUTING-PRESENTATION-QUALITY-AUDIT1`
- Scope: diagnosis and design-objective confirmation only

## Result

`ROUTING / PRESENTATION FOLLOW-UP REQUIRED - INITIAL PLACEMENT IS NOT PRIMARY CAUSE`

The audit keeps the current Lighthouse stored coordinates as the comparison
basis. The visual concern cannot be assigned to node placement alone: the live
application performs graph routing, node-label placement, Relation-label
recovery, and Presentation-aware/manual overrides after node positions are
selected. A bounded routing/presentation follow-up is warranted before
release-quality claims, but this checkpoint does not implement it.

## Current pipeline and findings

For each Relation, the source maps endpoint positions, groups parallel
Relations, assigns slots, applies curvature, considers node influence and
occupied paths, solves visible route offsets where eligible, handles self-loops,
and applies manual route overrides. It then derives a route label position with
normal-distance and along-edge recovery, previous-placement hysteresis, and
optional manual label anchors. Automatic route and label geometry is Derived;
explicitly dragged values are user-owned presentation state.

Existing tests cover deterministic parallel routing, endpoint reversal, self and
parallel Relations, node-influence avoidance, route and label recovery, manual
route/label preservation, and graph integration. They do not provide one
Lighthouse-scale quality table for avoidable crossings, foreign-node clearance,
detour/length, label ownership ambiguity, or the crossing-versus-detour tradeoff.

The observed problem classes remain open as bounded diagnosis: route candidate
selection, parallel slots, obstacle avoidance, stored/manual geometry, label
recovery, and optical false-connection risk. Current source and tests show that
initial placement is not proven to be the primary cause. Crossing may be
unavoidable or may arise after routing; label ownership must be assessed using
the rendered path rather than only the conceptual endpoint line.

## Next evidence and boundaries

Compare, on the same stored geometry, conceptual straight edges, current routed
edges, parallel-offset-only edges, and manual/stored Presentation. Record
Relation IDs, endpoint identities, crossing location, nearest foreign node,
route/label distances, parallel slot and curvature sign, and whether a change
introduces detour or ambiguity. Screenshots may support diagnosis but are not
required tracked binary artifacts.

No runtime, test, sample, Coordinate, Presentation schema, Core, Extension,
Validator, or release operation was changed. A future implementation requires a
separate bounded decision and must preserve semantic Relation direction versus
visual curve side. Initial Node Placement and NarrativeLine Display-Order work
remain unchanged and not started.
