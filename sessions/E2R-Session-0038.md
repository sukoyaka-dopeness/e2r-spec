# E2R Session 0038 - Dataset Replacement Safety Checkpoint and Layout Source Set

Date: 2026-08-18

## Scope

This session recorded the Dataset Replacement Safety D1-D5 design checkpoint
and prepared a focused source set for the next ChatGPT session on
LiaisonScape-owned authority-qualified experimental Layout v0.

The source-set audit was read-only across:

```text
e2r-spec
e2r-liaison-scape
e2r-narrative-line
e2r-validator
```

No application code, Core schema, Extension schema, Validator code, or sibling
repository was changed during the source-set audit.

## Dataset Replacement Safety D1-D5 checkpoint

The following documentation was created and synchronized:

```text
docs/dataset-replacement-safety-design.md
docs/dataset-handoff-v0-design.md
```

The checkpoint defines these independent conceptual states:

```text
datasetModified
pendingUserWork
recoverableSessionState
```

Accepted policy:

- a clean Dataset baseline is established after successful Dataset acceptance;
- successful explicit Export refreshes the Dataset baseline;
- Export clears Dataset modification only and does not clear pending local work;
- the Dataset replacement guard is `datasetModified || pendingUserWork`;
- recoverable session state does not bypass the replacement guard;
- Dataset replacement is distinct from internal screen navigation;
- LiaisonScape `coordinatesDirty` remains a limited signal for unsaved dragged
  node positions, not a complete Dataset dirty flag;
- NarrativeLine `narrativeline.lastDataset` remains partial session recovery,
  not durable save, backup, or revision history.

Confirmation UX, button choices, application-exit policy,
`beforeunload`, autosave, and implementation remain outside this checkpoint.

## Git checkpoint

Local commit:

```text
3ad9d1fa55e1eaaf3ad2cd9603e1fe9701bbca41
docs: checkpoint Dataset Replacement Safety design
```

Committed files:

```text
docs/dataset-replacement-safety-design.md
docs/dataset-handoff-v0-design.md
```

Validation:

- `git diff --cached --check`: PASS;
- `npm.cmd run validate`: PASS;
- push: not performed.

Existing untracked research and session files were preserved and not staged.

## Layout experimental v0 source audit

The next task is to design a LiaisonScape-owned, authority-qualified
experimental Layout v0. The requested source set was limited to 25 files and
was selected from current decision documents plus implementation evidence.

The source set covers:

- Core and Extension responsibility boundaries;
- Extension naming and authority-qualified identifiers;
- Extension identifier equals payload key;
- Specification Extension `uses` and exact-version interaction;
- Coordinate versus Layout separation;
- Derived versus Owned state and explicit adoption;
- LiaisonScape graph positions, Relation curvature, label placement, layer
  ordering, and current Save Coordinates behavior;
- NarrativeLine preservation of unknown Extensions and export behavior;
- Validator handling of unknown, unsupported, and undeclared Extensions;
- Dataset Replacement Safety D1-D5 for returning after Layout persistence work.

## Recommended ChatGPT Project Sources

### E2R specification and architecture

```text
e2r-spec/spec/philosophy.md
e2r-spec/spec/extension-naming.md
e2r-spec/extensions/README.md
e2r-spec/research/extension-architecture/decisions/extension-identity-and-payload-key-decision.md
e2r-spec/extensions/specification-extension.md
e2r-spec/docs/specification-interoperability.md
e2r-spec/docs/diagnostic-contract.md
e2r-spec/research/exploratory/linkscape-layout-and-view-state.md
e2r-spec/docs/roadmap.md
```

### Coordinate boundary and evidence

```text
e2r-spec/extensions/coordinate-extension.md
e2r-spec/extensions/coordinate-extension-draft.md
e2r-spec/research/coordinate/decisions/coordinate-maturity-and-identifier-decision.md
e2r-spec/research/coordinate/decisions/coordinate-draft-0.1.0-review.md
e2r-spec/docs/direct-graph-authoring-decision.md
e2r-spec/docs/direct-graph-authoring-closure.md
```

### LiaisonScape implementation evidence

```text
e2r-liaison-scape/src/App.tsx
e2r-liaison-scape/src/dataset.ts
e2r-liaison-scape/src/viewport.ts
e2r-liaison-scape/src/services/DatasetService.ts
```

### NarrativeLine and Validator evidence

```text
e2r-narrative-line/src/App.tsx
e2r-narrative-line/src/services/DatasetService.ts
e2r-validator/src/extension-validator.js
e2r-validator/src/specification-validator.js
```

### Return boundary

```text
e2r-spec/docs/dataset-replacement-safety-design.md
e2r-spec/docs/dataset-handoff-v0-design.md
```

## Important current findings for Layout v0

LiaisonScape currently keeps several graph values as application state:

- graph positions in `positions`;
- unsaved node movement tracked by `coordinatesDirty`;
- Relation curvature in `edgeCurveOffsets`;
- node and edge label placement in label-offset state;
- node and edge layer ordering in layer-order state;
- zoom, pan, selection, dialogs, previews, and other View State.

Stored Coordinate data is handled separately through Coordinate read/write and
the explicit Save Coordinates action. Current Relation curvature, label
placement, and layer ordering are not thereby established as a persisted Layout
Extension. The next design must define the Derived-to-Owned transition,
explicit adoption, and return-to-automatic behavior without collapsing
Coordinate and Layout responsibilities.

The current Layout research remains exploratory. No Layout identifier, payload
shape, feature set, migration path, or Specification `uses` declaration was
selected by this session.

## Dataset Replacement Safety return point

After Layout experimental persistence design and any bounded cross-application
round-trip evidence, the work must return to the pending-work model:

```text
Layout explicit adoption
    -> pendingUserWork classification
    -> Dataset Replacement Safety policy
```

The D1-D5 document is the current return boundary. No D6 or D7 document was
found in the current repository state.

## Boundaries

The next session must not:

- register a Stable Layout Extension;
- modify the E2R Core;
- merge Coordinate and Layout;
- introduce automatic identity or provenance semantics;
- implement Dataset Handoff v0;
- implement confirmation UX or `beforeunload`;
- modify the selected source files merely by loading them.
