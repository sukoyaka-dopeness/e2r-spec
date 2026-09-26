# LiaisonScape Pin Working Anchor Consistency 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-PIN-WORKING-ANCHOR-CONSISTENCY1`  
Classification: **B. TWO DISTINCT PIN FAILURES IDENTIFIED AND FIXED / READY TO RETEST HUMAN CHECK B**

## Conclusion

The moved-Pin Explicit Auto Layout failure and moved-Pin Save failure had two
distinct root causes. Both were bounded contract violations after the correct
current working position had already been captured; neither was a Frontier
quality, Product scoring, or shared working-anchor resolution failure.

Human Check B evidence remains authoritative:

- the same stationary Node moved when unpinned and remained fixed when pinned;
- both move -> Pin -> Auto Layout and Pin -> move -> Auto Layout produced
  `result-validation / PIN_VIOLATION` before this fix;
- move -> Pin -> Save Coordinates produced `PIN_DATASET_INVALID` before this
  fix.

Human Check B remains open, but may resume against the corrected source.

## Auto Layout root cause

The current working position was consistent through:

```text
App working position
-> effective Pin resolver
-> immutable operation snapshot
-> pinned candidate input
-> selected floating-point candidate
```

The first divergence occurred in final `round-once` canonicalization.
Canonicalization rounded every selected Node, including fixed Pin anchors.
Ordinary stationary anchors happened to use integer positions and therefore
passed. A manually dragged anchor commonly had fractional graph coordinates;
rounding changed it immediately before exact Pin validation, producing
`PIN_VIOLATION`.

The bounded fix preserves each `snapshot.activePins` coordinate exactly while
continuing to round only unpinned selected positions. Candidate generation,
ranking, Product evaluation, and the exact Pin validator are unchanged.

Focused evidence now covers:

- ordinary fixed integer Pin;
- non-integer moved Pin through final canonicalization;
- move -> staged Pin -> operation;
- saved Pin -> manual move -> operation;
- all-Pinned operation.

Both moved cases complete Preview and retain the exact current working anchor.

## Save root cause

The Save path correctly built the Coordinate payload and canonical Layout Pin
record, but `writePinState` added
`draft.github.sukoyaka-dopeness.liaisonscape-layout` without synchronizing an
already-present Specification Extension `uses` list. Canonical public fixtures
such as Lighthouse have a complete Specification declaration. Export
validation therefore rejected the otherwise valid candidate with:

```text
/extensions/draft.github.sukoyaka-dopeness.liaisonscape-layout:
specification_declaration_missing
```

App mapped this to `PIN_DATASET_INVALID`.

The bounded fix synchronizes the existing supported Specification declaration
when the application-owned Layout payload is added or omitted. It preserves
existing declaration order and fields, refuses to repair duplicate/conflicting
declarations implicitly, and does not create a Specification Extension where
none existed.

A canonical Lighthouse replay now atomically produces:

- the moved Node Coordinate at its exact finite non-integer position;
- one canonical `{ pinned: true, spaceId: "liaisonscape-graph" }` record;
- Coordinate and Layout declarations in the existing `uses` list;
- a saved/reloaded Pin anchor equal to the moved position.

## Actual Product evidence

Runtime identity:

```text
URL: http://127.0.0.1:5176/e2r-liaison-scape/?acceptance-fixture=lighthouse&acceptance-locale=ja
repo/worktree: C:\Users\extra\E2R\e2r-liaison-scape
HEAD: 3c383c67c8e3c599be9de7f99d6785261e147479 + existing dirty worktree
server: vite --host 127.0.0.1 --port 5176
```

Observed sequence:

```text
move Node -> Pin -> Auto Layout -> confirm replacement
-> Product Preview (no PIN_VIOLATION)
-> Return to previous layout
-> Save Coordinates
-> "座標を保存しました。"
```

The Preview used the moved Pin graph position, and no DEV hard-failure
diagnostic appeared.

## Preserved boundaries

Manual move remains distinct from Pin. Pinned Nodes remain manually movable,
stationary and moved Pins remain exact Explicit Auto Layout constraints,
staged Unpin remains an operation-input omission, Preview remains read-only,
Apply remains the only Preview adoption action, and Save Coordinates remains
the only Dataset persistence authority. Initial Automatic Display and manual
Relation route/label, Node-label, Self-loop, Product scoring, and solver
quality behavior are unchanged. Dense Graph-space quality remains a separate
follow-up.

## Validation

- Pin/Explicit operation/diagnostic focused tests: `30/30 PASS`;
- moved-Pin operation regression: both orderings PASS;
- existing stationary/all-Pinned regressions: PASS;
- Pin atomic Save tests, including existing Specification declaration: PASS;
- canonical Lighthouse Save/reload replay: PASS;
- Actual Product move -> Pin -> Preview: PASS;
- Actual Product moved Pin Save: PASS;
- lint, production build, E2R-SPEC validation, and diff checks: PASS;
- broad `npm test`: not classified PASS; tests continued to report successes
  but the process remained open after the known `Port 24678 is already in use`
  WebSocket lifecycle condition and was stopped;
- Human Check B final disposition: not inferred; ready to resume.
