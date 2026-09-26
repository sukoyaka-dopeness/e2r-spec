# Automatic Layout Experiment 1H - Node-Label Drag-Follow Responsiveness Result

Date: 2026-08-18

Status: Non-normative experiment evidence

## Result

```text
CLEAR IMPROVEMENT / DIRECTION SUPPORTED
```

Experiment 1H tested whether the previous-placement hysteresis that helps
stationary label stability also contributed to visible lag while an owning
Node was actively moving.

## Scope tested

During an active drag, only the dragged Node's own automatic label bypassed
`previousPlacement`. The condition was:

```ts
dragRef.current?.kind === "node"
  && dragRef.current.id === node.id
```

All other Node labels retained their previous-placement hysteresis. The 32
angular directions, cardinal preference, distance formula, collision scoring
and geometry, routing, persistence, and Node movement behavior were unchanged.

## Findings

Fast horizontal, vertical, and diagonal drags all showed improved response;
the visible trailing or lag largely disappeared. No new pointerup jump was
observed, and labels belonging to non-dragged Nodes remained approximately
stable.

Dense or slow movement could still produce large candidate-direction changes,
including approximately 90-degree changes. These appear more related to the
existing discrete candidate and cardinal-preference behavior than to a new
Experiment 1H regression. Candidate-direction jumps and co-moving hysteresis
remain separate future questions.

The evidence supports treating static label stability and active owning-Node
drag responsiveness differently. The exact active-drag rule remains
experimental; it does not establish that hysteresis should always be disabled
during drag or that all label motion problems are solved.

## Future observations

Relation routing should not automatically treat maximum edge-edge separation
as its highest visual priority. Edge overlap or crossing may be tolerable when
Relation labels remain readable and clearly associated with their Relations,
but this is not a conclusion that overlap or crossing is always harmless.
Future scoring research should distinguish Relation-label readability and
ownership, Node clearance, edge-edge overlap, edge crossing, route length, and
route stability.

Cardinal-preferred Node labels may also occupy broad directions used by
self-loops. Joint observation of self-loop orientation and Node-label
clearance is a future experiment candidate. No routing or self-loop behavior
was changed here.
