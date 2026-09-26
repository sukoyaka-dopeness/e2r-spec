# LiaisonScape Automatic-Route Final-Label Score-Trace Reproduction

Date: 2026-08-31

Status: bounded application experiment; non-normative

## Exact result

`BLOCKED — LIVE SCORE SELECTION CANNOT YET BE OBSERVED WITHOUT AN APP-PIPELINE TRACE HARNESS`

The preceding copied score reconstruction remains invalid because it did not
reproduce all Japanese Pass-3 winners. It therefore cannot attribute hard,
halo, occupied-path, or tie semantics.

A temporary read-only observer was inserted directly into the live
`routeGraphEdge` candidate loop and compiled successfully. It can report each
candidate's live offset, Node pressure, occupied overlap, label pressure,
offset cost, total score, base-side preservation, safe predicate, and prior
best score without modifying arbitration. It was removed immediately after the
compile check; no source trace API remains.

The missing boundary is an App-pipeline harness which constructs Pass 1/Pass 2
final Node-label input, replays canonical predecessor paths, attaches the
observer to the four target calls, and compares trace-on/off selected geometry.
That complete L0/L1 pipeline was not completed here, so the required 8/8
winner reproduction is not claimed.

## Decision

Trace-on/off equivalence for the full feedback pipeline: **NOT MEASURED**.
Live L0/L1 target winner reproduction: **0/8 established**. Safe predicate,
fallback, occupied scan, and strict comparison are observable at their live
location, but no target trace has yet been captured. Hard/halo attribution,
score tuning, routing changes, and policy design remain out of scope.

The selected next checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-APP-PIPELINE-TRACE-HARNESS1`.
It must be a temporary behavior-identical fixture harness and leave no
observer, debug flag, helper export, or runtime change in production source.

## Closure

Production Runtime, routing, scoring, route order, label placement, candidate
set, drag behavior, samples, schema, and `seededPositions` changed: **NO**.
Temporary source instrumentation was removed. No LiaisonScape commit, push,
tag, release, deployment, or publication occurred. Existing Lighthouse EN/JA
sample edits remain preserved.
