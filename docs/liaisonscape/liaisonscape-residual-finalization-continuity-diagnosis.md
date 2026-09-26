# LiaisonScape Residual Finalization Continuity Diagnosis

Date: 2026-09-10

Checkpoint: `E2R-LIAISONSCAPE-RESIDUAL-FINALIZATION-CONTINUITY1`

Status: bounded Product-routing correction and diagnostic record; non-normative;
not a Product selection or governed-evidence result

## Purpose and boundary

This record follows the user-inspected routing and label-safety snapshot at
LiaisonScape `9a36f54` and its geometry dependency audit
([routing / label-safety geometry dependency audit](liaisonscape-routing-label-safety-geometry-dependency-audit.md)).
It isolates the remaining Apollo `spacing=220` pointer-up discontinuity for an
incident route. It does not select an initial placement, change node-label
design, or reopen spacing and crossing optimization.

The implementation checkpoint is LiaisonScape `68a1369`
`fix: preserve safe incident route through finalization`. Fresh10, Fresh11,
Fresh12, their artifacts, and the Fresh12 canonical Human Review result remain
read-only. No governed Fresh lineage was created.

This work uses the workspace's [bounded visual geometry
playbook](../../../ai-knowledge/playbooks/bounded-visual-geometry-experiment.md)
and [actual Product inspection
hypothesis](../../../ai-knowledge/hypotheses/actual-product-surface-before-interaction-evidence.md):
derived values establish mechanics, while user-visible quality remains an
actual-Product observation.

## Representative route and measurement method

The focused deterministic probe uses the actual Apollo `spacing=220` fixture
and the same Product helpers as `src/App.tsx`:

```text
fixture: apollo-11-spacing-220.en.e2r.json
dragged Entity: Neil Armstrong (armstrong)
incident Relation: entity-4
display name: Neil Armstrong -> Lunar Module Eagle — operates
```

It compares the last active presentation with the first finalizing
presentation at the **same stored node geometry**. It separately advances the
release coordinate by one graph unit to prove that continuity does not cross a
geometry boundary. The smallest useful evidence is therefore route path,
endpoint coordinates that produced it, final node/label/occupied-path safety,
and continuity authority; aggregate crossing or fit metrics do not answer this
phase-boundary question.

## Diagnosis

### PROVEN

1. During active node drag, `src/App.tsx` derives the bounded presentation
   with final label feedback disabled; at pointer-up, the finalizing pass
   enables it. The active and finalizing presentations may consequently use
   different node-label snapshots and route candidates even when the node
   coordinates are identical.
2. The main difference in the representative investigations is the
   phase-specific label snapshot, not endpoint-label exclusion. With the
   previous displayed labels, an active route can choose a curve; with the
   current provisional/final labels, the fresh final candidate can be straight.
3. The safe representative move, Armstrong `(-80, -40)` graph units, produced
   a curved active `entity-4` route and a straight fresh-final candidate. The
   active curve cleared the final node, label, and previously occupied-path
   predicates. Its fresh final change was therefore avoidable presentation
   churn, not a required recovery.
4. The counterexample, Armstrong `(0, -80)`, produced an active curve that
   enters final node influence. It must not be retained merely for continuity;
   the final fresh route is allowed to replace it.
5. Browser pointer processing may leave the final release coordinate ahead of
   the last sampled active coordinate. `node-drag-finalizing` alone is not
   equivalent to identical geometry. A route from the active frame is only a
   candidate when both stored endpoint coordinates equal the current route
   endpoints exactly.

### STRONGLY SUPPORTED

- The observed incident curve-to-straight pointer-up jump can be caused by a
  safe active route being re-arbitrated against the final label snapshot. This
  is the narrow residual discontinuity addressed here.
- The previously reported remote-route movement is a distinct question. The
  correction does not grant graph-wide finalization continuity and does not
  reuse a remote route through this incident-route path.
- Apollo's dense geometry remains upstream pressure, as recorded by the prior
  audit, but is not a reason to replace final safety arbitration wholesale.

### UNRESOLVED

- The frequency and exact causes of every user-observed remote route change
  remain outside this incident-route correction.
- Which initial placement or spacing reduces route/label pressure across the
  wider fixture set remains a separate experiment.
- Route and label quality still require an actual-Product user inspection;
  deterministic paths are not a visual acceptance result.

## Bounded correction

`68a1369` adds explicit, finalizing-only continuity authority for an incident
route. The final pass may reuse the displayed active route only when all of
the following hold:

```text
1. it is an incident route of the just-finished node drag;
2. active drag is no longer in progress;
3. the previous route was generated at exactly the same source and target
   node positions as the finalizing pass; and
4. normal node, label, and occupied-path safety checks still accept it.
```

Otherwise routing uses the normal fresh final candidate. In particular, the
new authority does not apply during active drag, does not reuse a route when a
release position differs from the final active sample, and does not override
node influence, label collision, occupied-path conflict, active recovery, or
manual-route authority.

The changed Product paths are:

```text
src/App.tsx
src/graph-presentation.ts
tests/actual-inspection-diagnostics.test.ts
```

The new regression test guards all three boundaries: it retains the safe
Apollo curve, rejects the unsafe active curve, and fails closed when the final
release moves Armstrong one unit beyond the active geometry.

## Actual Product inspection

The actual `src/App.tsx` Apollo inspection seam was used for a diagnostic
smoke check. A physical CUA drag of Armstrong showed that its final release
coordinate differed from the final active sample; the new exact-endpoint guard
therefore correctly declined reuse. That observation verifies the necessity
of the geometry guard, but it does **not** visually prove the identical-
geometry representative path.

User inspection should use a clean page state and the route diagnostic target
for `Neil Armstrong -> Lunar Module Eagle — operates`. Drag Armstrong and
observe the final state before and after release:

- If the displayed active incident route remains safe at the same node
  geometry, it should remain visually continuous through pointer-up.
- If a final node/label/occupied-path conflict exists, rerouting is expected.
- A small release-coordinate advance should re-evaluate rather than reuse a
  stale path.
- Check that unrelated remote routes, label safety, and drag responsiveness
  have not regressed.

This is diagnostic user inspection, not formal Human Review or Product
acceptance. Do not save inspection coordinates while comparing temporary
drags.

## Validation

LiaisonScape validation at `68a1369`:

```text
focused presentation diagnostics: 5 / 5 PASS
focused graph-presentation regressions: 33 / 33 PASS
npm test: 330 / 330 PASS
npm run lint: PASS
npm run build: PASS
git diff --check: PASS
```

The test runner reported its existing development WebSocket-port warning while
all tests passed; it was not a route failure.

E2R-SPEC validation for this record is run before its documentation checkpoint.

## State

```text
safe incident finalization continuity = IMPLEMENTED / USER INSPECTION PENDING
unsafe final route recovery = PRESERVED
remote locality overall = UNRESOLVED
routing / spacing investigation = PAUSED
crossing-aware placement = NOT STARTED
governed Fresh lineage = NOT STARTED
historical evidence = unchanged
push / tag / release / deploy / publication = NOT PERFORMED
```
