# LiaisonScape Explicit Auto Layout Human Check B Closure Gate 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-HUMAN-CHECK-B-CLOSURE-GATE1`  
Classification: **B. EVIDENCE CONSOLIDATED / FULL-SUITE LIFECYCLE GATE OPEN / USER DISPOSITION REQUIRED**

## Scope and disposition boundary

This checkpoint consolidates the existing Human Check B lifecycle, Pin,
Preview, and Save evidence and records the two layout-quality findings
confirmed during Human Review. It does not assign a final `PASS`, `QUALIFIED`,
or `FAIL` disposition to Human Check B; that final visual judgment remains
user-owned.

Based on the evidence, `QUALIFIED` is the natural disposition candidate if the
user accepts the documented quality limitations: the lifecycle and Pin
contract is functioning, while bounded quality follow-ups remain. This is a
candidate only, not a recorded Human Check B decision.

The accepted lifecycle evidence remains:

```text
Unpinned Node -> Explicit Auto Layout -> actual movement
Stationary Pin -> Auto Layout -> fixed anchor preserved
move -> Pin -> Auto Layout -> exact fractional anchor -> Preview
Pin -> move -> Auto Layout -> exact current anchor -> Preview
move -> Pin -> Save Coordinates -> successful atomic Save
Save / reload -> Coordinate and Pin anchor consistent
Unpin -> Layout target removed
Preview -> Use this layout / Return to previous layout
quality warning -> reviewable Preview, not hard failure
hard failure -> DEV diagnostic with reason
```

The two previously identified Pin defects remain fixed: final
`round-once` canonicalization preserves fixed fractional anchors, and the
atomic writer synchronizes the Layout Extension declaration in an existing
Specification `uses` list. No new Pin hard failure was observed in the
current-source retest.

## Full-suite environmental gate

The first rerun was made after confirming that no process was listening on
port `24678`. The normal `npm test` invocation still emitted:

```text
WebSocket server error: Port 24678 is already in use
```

and remained open. Current Vite source identifies `24678` as the default HMR
WebSocket port for middleware mode when no explicit WebSocket server is
provided. The UI tests create multiple Vite middleware servers; this is
consistent with a test/Vite lifecycle or open-handle conflict, not a
LiaisonScape assertion failure.

A diagnostic serial run using Node test concurrency `1` removed the port
conflict message and progressed through the suite, but also remained open for
about 60 seconds without a completion summary. It was stopped. The test
architecture was not changed, and neither run is recorded as Full PASS. The
remaining gate is therefore an environmental/test-server lifecycle issue to
follow up separately.

## Human Review quality findings

### Pinned global recovery

Human Review confirmed that when Nodes are manually collapsed into a severely
dense or overlapping working layout, Explicit Auto Layout with one or more
Pins can preserve too much of that degraded geometry. Unpinned Nodes may retain
substantial crossings and congestion instead of participating in a cleaner
global reconstruction.

The current Pin-aware path is local-recovery-oriented because working
positions seed candidate generation while Pins remain hard anchors. Future
quality work may preserve Pinned anchors while allowing Unpinned Nodes to use
broader/global candidate generation or recovery. This is separate from Pin
lifecycle correctness and persistence acceptance.

### Presentation-aware local relaxation

Human Review also confirmed that automatically placed Node labels can appear
rough beyond isolated dense cases. Current candidate selection evaluates the
Product presentation, but does not perform a final bounded local perturbation
or relaxation around the selected structural candidate.

Future work may investigate a presentation-aware local pass that re-evaluates
Node labels, Relation labels, routing, overlaps, crossings, and related
presentation pressure. This is a quality investigation only; it does not
authorize independent spacing or routing heuristic retuning.

Both items remain alongside dense Graph-space separation and Relation-label
congestion in the broader Explicit Auto Layout quality track. They are not
blockers for the accepted Preview / Pin lifecycle contract.

The accepted precision direction is also retained: automatic Explicit Auto
Layout positions are integer-canonicalized, while manual/current Pin anchors
preserve fractional precision. Initial Automatic Display integerization is a
separate follow-up and was not changed here.

## Boundaries preserved

Initial Automatic Display, Frontier parameters, Product routing and label
authority, Self-loop semantics, Dataset and Coordinate persistence, dirty-state
safety, and manual placement semantics were not changed. No production default,
deployment, release, or public rollout was performed.

The next decision is the user's final Human Check B disposition, with the
quality findings understood as accepted/deferred follow-ups rather than an
automatic lifecycle failure.

## Validation evidence

- Focused Pin / Explicit Auto Layout regression evidence: `30/30 PASS`.
- `npm run lint`: PASS.
- `npm run build`: PASS.
- `e2r-spec npm run validate`: PASS.
- `git diff --check`: PASS in both repositories.
- Full `npm test`: attempted in normal and serial diagnostic modes; neither
  completed, so it is not recorded as PASS.
