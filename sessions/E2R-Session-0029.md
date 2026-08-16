# E2R Session 0029 — Linkscape Creation Planning Handoff

Date: 2026-08-15

Status: planning complete; implementation not started

## Workstream

Linkscape Entity/Relation Creation and Cross-Application Round-Trip.

This bounded workstream follows the roadmap/status synchronization recorded in
`docs/roadmap.md`. The planning pass classified the workstream as
**READY WITH SMALL LOCAL DECISIONS**.

## Current implementation evidence

The Linkscape repository currently has:

- existing Entity and Relation display and selection;
- Entity and Relation detail editing;
- Dataset import, export, and validation;
- Coordinate persistence and round-trip behavior;
- preservation of unknown fields and Extensions; and
- 72 passing tests and a successful production build.

NarrativeLine already supports Entity creation and Event-to-Entity relation
creation, Dataset import/export, and validation. It is therefore suitable as a
cross-application consumer for the bounded fixture.

## Fixed scope

Implement only:

- Create Entity;
- Create Entity-to-Entity Relation;
- save/export and Linkscape reopen;
- Validator acceptance; and
- bounded Linkscape → NarrativeLine → Linkscape round-trip verification.

Do not implement:

- Entity or Relation deletion;
- cascade or dangling-reference behavior;
- Names editing or Names Grouping;
- Semantic/Dictionary integration;
- drag-to-create Relation;
- advanced Layout/Perspective; or
- new E2R semantics or Extensions.

Deletion is a separate future decision because it involves incoming/outgoing
Relations, dangling references, Extension references, cascade policy, and
lifecycle semantics.

## Fixed local decisions

### IDs

First reuse an existing repository convention if one exists. Otherwise use a
browser-native UUID such as `crypto.randomUUID()`, checking all relevant Core
Object IDs and regenerating on collision. Do not introduce an E2R ID rule.

### Draft mutation

Create forms mutate only local draft state. Save creates the Core Object and
updates the Dataset; Cancel discards the draft without Dataset mutation.

### Entity placement

Creation does not fabricate persisted Coordinate data. Existing deterministic
fallback display placement is reused. Coordinate persistence follows existing
explicit save rules.

### Relation profile

The first Linkscape authoring profile exposes Entity-to-Entity Relations only.
Self Relations and parallel Relations are allowed. Relation-to-Relation remains
invalid under Core rules. Event endpoints are not exposed in this UI, but are
not prohibited by Core.

### Fields and editor reuse

Reuse the currently supported Entity and Relation detail fields and editor
paths. Do not add semantic vocabulary, relation-type semantics, or a new
direction model. After save, the created object should be selected where this
fits the existing UI and the graph should update immediately.

## Planned implementation sequence

1. Add dataset-level `createEntity()` with collision-safe ID generation.
2. Add minimal Add Entity / Save / Cancel UI.
3. Add dataset-level `createRelation()` with endpoint checks.
4. Add Add Relation / source / target / Save / Cancel UI.
5. Verify export, reopen, graph update, self and parallel Relations.
6. Add regression and persistence tests.
7. Validate the exported Dataset with the supported E2R Validator.
8. Verify the bounded NarrativeLine round-trip.
9. Update Linkscape user guides and only then update roadmap/status.

## Expected files

Likely Linkscape files:

- `src/dataset.ts`
- `src/App.tsx`
- `src/styles.css`
- `tests/dataset.test.ts`
- `tests/graph.test.ts`
- `docs/user-guide-en.md`
- `docs/user-guide-ja.md`

Do not refactor unrelated code. Preserve existing working-tree changes.

## Required tests

At minimum test Entity and Relation creation, valid unique IDs, collision
handling, new Entity persistence, new Relation persistence, self Relations,
parallel Relations, invalid endpoints, Relation-to-Relation rejection, Cancel
non-mutation where practical, unknown-data preservation, Coordinate regression,
and existing editor/graph regressions.

## Cross-application acceptance

The bounded scenario is:

```text
Linkscape: create Alice, Bob, Alice → Bob : friend
    → export
    → E2R Validator
    → NarrativeLine import and export
    → Linkscape reopen
    → Alice, Bob, and the Relation remain
```

The goal is Dataset interoperability, not identical application UI. If a
fully automated cross-repository test is impractical, automate reusable
serialization/fixture checks and document the remaining manual acceptance
step. Do not add fragile infrastructure solely for cross-repository testing.

## Acceptance boundary

Implementation may be declared complete only when Entity and Relation creation,
save/reopen, self/parallel behavior, Validator acceptance, unknown-data and
Coordinate preservation, full Linkscape tests, build, documentation, and the
bounded NarrativeLine round-trip pass.

This workstream must stop after its completion report. It must not begin
deletion or the NarrativeLine Names P1 consumer work.

## Handoff

The next session should read this document and the planning source supplied in
the preceding conversation, then inspect the current Linkscape working tree
before editing. Begin with Phase A dataset primitives and tests. Do not make a
specification decision unless implementation evidence exposes a genuine Core
or Extension responsibility conflict.

## LiaisonScape rename workstream closure

The Linkscape → LiaisonScape rename workstream was completed through Stage 8.
The active product identity is now `LiaisonScape`, the canonical repository is
`e2r-liaison-scape`, and the current Coordinate profile uses
`liaisonscape-graph` / `liaisonscape-user-unit`.

The GitHub repository was renamed manually and the local `origin` remote was
updated to:

`https://github.com/sukoyaka-dopeness/e2r-liaison-scape.git`

The local directory was subsequently renamed to `e2r-liaison-scape`. Final
closure verification found no active references to the former absolute local
path. Historical Linkscape wording, persisted legacy identifiers,
compatibility tests, migration source terminology, and historical session
records remain intentionally preserved.

The canonical cross-application fixture and the full LiaisonScape,
NarrativeLine, Validator, and E2R-SPEC validation passes remain green. The
rename workstream is closed with the verdict:

`LIAISONSCAPE RENAME WORKSTREAM CLOSED`

## Next workstream

The next planned workstream is LiaisonScape Entity creation / Relation creation.
It begins with an implementation inventory and a decision record defining the
minimal creation MVP, Core constraints, persistence behavior, and acceptance
tests. No implementation has started in this session.
