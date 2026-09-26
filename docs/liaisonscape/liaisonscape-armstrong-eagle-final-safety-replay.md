# LiaisonScape Armstrong–Eagle Final-safety Replay

Date: 2026-09-10

Checkpoint: `E2R-LIAISONSCAPE-ARMSTRONG-EAGLE-FINAL-SAFETY-REPLAY1`

Status: bounded diagnostic replay; non-normative; no Product acceptance and no
governed evidence

## Result

The user-correlated actual Product trace was:

```text
drag session #1
node: armstrong
route: entity-4
Neil Armstrong -> Lunar Module Eagle — operates
pointermoves: 8
active routing: 61.9, 380.3
final routing: 61.9, 380.3
same node geometry: YES
same routing geometry: YES
active route: curved, offset +168, fresh-route
final route: curved, offset -60, fresh-route
remote route outcomes: none
```

A deterministic replay used the same Apollo `spacing=220` fixture and the same
final node position. It tested the displayed active `+168` route itself
against the finalizing safety predicates; it did not infer safety from the
selected `-60` route.

## Safety comparison

| Route representation | Node influence | Node-label collision | Occupied path | Result |
| --- | --- | --- | --- | --- |
| displayed active `+168`, evaluated with final snapshot | clear | blocked by `nasa` | clear | reject |
| final selected `-60` | clear | clear | clear | accept |

For the final snapshot, the NASA label rectangle was approximately:

```text
center: (326.54, 273.19)
width x height: 122.5 x 48
left / right: 265.29 / 387.79
top / bottom: 249.19 / 297.19
```

The `+168` candidate received `labelPressure=100000` and was not selected.
Its node-overlap and occupied-path flags were both clear. The final `-60`
candidate had score `0.6`, node overlap `0`, label pressure `0`, and no
occupied-path conflict. The final continuity decision was:

```text
usedPreviousRoute: false
priorRouteHasNodeInfluence: false
priorRouteHasOccupiedPathConflict: false
priorRouteHasLabelCollision: true
blockingNodeLabelIds: ["nasa"]
```

The active snapshot's NASA label was in a different position, approximately
center `(261.58, 234.57)`, so the active route could be selected as a fresh
route while remaining unsafe against the settled final label.

## Classification

```text
classification = B / genuine final safety reroute
68a1369 correction gap = NO
```

The same-geometry condition was satisfied, but the active displayed route was
not final-safe. The side flip `+168 -> -60` is therefore necessary under the
current final label snapshot, not an unexplained continuity failure.

The `[fresh-route]` active authority does not create a continuity leak here.
At finalization, the active route is present as `previousAutomaticRoutes` and
is evaluated by the explicit incident continuity path. The route is rejected
because final label safety reports the NASA blocker. Finalizing continuity is
not an unconditional preference for the previous path.

## Certainty

### PROVEN

- Session #1 timing and transition reports matched, so the trace is correlated
  to the reported physical drag.
- The active `+168` route, replayed at the same final geometry, is rejected by
  the final label-safety predicate because of the NASA label.
- Node influence and occupied-path conflict do not block `+168` in this final
  replay; the blocking class is node-label collision.
- The `-60` final route is the safe selected candidate.

### STRONGLY SUPPORTED

- The user's visible side flip is the expected final safety reroute for this
  representative trajectory.
- Further continuity forcing for this case would risk allowing the incident
  route to cross a settled label and would regress label safety.

### UNRESOLVED

- Other NASA-area trajectories may still produce a safe same-geometry flip or
  a different blocker. This replay does not generalize the result to every
  pointer-up side change.
- Remote locality, initial placement, and spacing remain separate concerns.

## State

```text
session correlation = VALIDATED
Armstrong -> Eagle +168 -> -60 = GENUINE FINAL SAFETY REROUTE
68a1369 correction gap for session #1 = NOT PRESENT
remote locality overall = UNRESOLVED
initial placement redesign = NOT STARTED
new governed Fresh lineage = NOT STARTED
Fresh10 / Fresh11 / Fresh12 historical evidence = unchanged
Fresh12 canonical Human Review result = unchanged
push / tag / release / deploy / publication = NOT PERFORMED
```
