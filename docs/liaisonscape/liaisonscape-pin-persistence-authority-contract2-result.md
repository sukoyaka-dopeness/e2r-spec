# E2R-LIAISONSCAPE-PIN-PERSISTENCE-AUTHORITY-CONTRACT2

Date: 2026-09-17

## Classification

**A. PIN PERSISTENCE CONTRACT CLOSED / READY FOR PINNED FRONTIER
FEASIBILITY**

The persistence and authority blocker is closed at the draft-contract level.
Pin is a LiaisonScape-owned Layout responsibility, not Core data and not a
Coordinate field. The exact draft payload, Coordinate anchor, orphan behavior,
Unpin canonicalization, working-state boundary, Save transaction, reopen rule,
and cross-application preservation boundary are recorded below and in the
[LiaisonScape Layout Extension Draft](../../extensions/liaisonscape-layout-extension-draft.md).

This does not implement a production Pin writer/reader, Pin UI, Explicit Auto
Layout, or Pinned Frontier solver. It authorizes the next bounded Pinned
Frontier feasibility experiment.

## Evidence and existing authority

The source audit used LiaisonScape revision
`3c383c67c8e3c599be9de7f99d6785261e147479` plus its preserved working tree,
and E2R-SPEC revision `391da6d9d9184823570366962f9e417a04898b36` plus this
checkpoint's draft changes. Existing dirty material was preserved.

Current source confirms:

- `src/auto-layout.ts` owns only deterministic structural Node placement;
- `App.tsx` owns working positions, adopted-coordinate IDs,
  `coordinatesDirty`, confirmation, and the current Save Coordinates boundary;
- `src/dataset.ts` owns Coordinate reading/writing and preserves unrelated
  extensions under its current fail-closed rules;
- `src/presentation-extension.ts` is a separate Dataset-carried Presentation
  responsibility and already demonstrates ID-keyed records, explicit draft
  versioning, unknown-field preservation, and default omission;
- `docs/layout-persistence-responsibility-decision.md` separates Coordinate,
  Layout, Presentation, and Application View State; and
- `extensions/coordinate-extension-draft.md` defines named Coordinate Spaces,
  partial values, compatibility, and unsupported-data preservation.

The current App does not yet contain Pin state or a Pin writer. The current
Save Coordinates implementation writes Coordinate values only. Those facts
are implementation gaps, not reasons to merge Pin into Coordinate.

## Exact owner and identifier

Pin is owned by a new LiaisonScape-specific draft Layout Extension:

```text
draft.github.sukoyaka-dopeness.liaisonscape-layout
```

The exact payload is Dataset-level. The Extension is not Stable and does not
replace the generic Layout Extension or the LiaisonScape Presentation
Extension. Version `0.1.0` defines only Entity Pin intent.

The reason for a separate Extension is responsibility-based:

| Responsibility | Owner |
| --- | --- |
| saved numeric position and Coordinate Space | Coordinate Extension |
| fixed-position intent for Explicit Auto Layout | LiaisonScape Layout Extension |
| automatic/manual route and curvature | Product Layout/application state |
| Relation-label, Node-label, Self-loop state | Product Presentation/application state |
| viewport, selection, focus, gesture state | Application View State |

Pin is therefore not added to Core and is not embedded in the Coordinate
payload.

## Persisted representation

The exact draft payload is:

```json
{
  "extensions": {
    "draft.github.sukoyaka-dopeness.liaisonscape-layout": {
      "specVersion": "0.1.0",
      "entities": {
        "entity-1": {
          "pinned": true,
          "spaceId": "liaisonscape-graph"
        }
      }
    }
  }
}
```

The Entity map key is the exact case-sensitive Core Entity ID. A record with
`pinned: true` is the active Pin token. `spaceId` is required and is an exact,
case-sensitive Coordinate Space ID. The Pin Extension stores no x/y value.

The structural schema allows unknown fields at the Extension and record
levels. Supported readers ignore those fields and preserve them whenever
practical. An unsupported `specVersion` is preserved and inactive.

The draft schema and focused cases are:

- `schemas/extensions/liaisonscape-layout-draft.schema.json`
- `scripts/validate-liaisonscape-layout-draft-schema.mjs`

The schema is a structural draft gate; semantic anchor resolution and atomic
save behavior remain application responsibilities.

## Coordinate anchor rule

For an active Pin, Explicit Auto Layout resolves the hard anchor by:

1. resolving the Pin record's Entity ID;
2. reading that Entity's supported Coordinate Extension;
3. selecting exactly one coordinate with the Pin record's exact `spaceId`;
4. requiring compatible finite `x` and `y` values; and
5. passing that value into the future solver as the fixed anchor.

No second coordinate is stored in the Pin Extension. No Space, component,
array-order, Entity-name, viewport, or origin fallback is allowed. Multiple
Spaces are resolved only by explicit `spaceId`. Partial, duplicate,
unsupported, or incompatible Coordinate data is not an anchor.

For a staged unsaved Pin, the current working position is the operation-local
anchor. The future operation snapshot must record its source as `saved` or
`staged` so persistence and runtime constraint identity are not conflated.

## Orphan and invalid semantics

Missing Entity, deleted Entity, missing Space, missing/partial coordinate,
duplicate Space coordinate, unsupported Coordinate definition, malformed Pin
record, and unsupported Pin version are not Core failures.

An Extension-aware reader:

- ignores the record for layout behavior;
- emits a semantic diagnostic when diagnostics are available;
- never invents `(0, 0)` or another guessed anchor; and
- preserves the raw data on unrelated round trips whenever practical.

A LiaisonScape save transaction refuses to leave an active Pin without a
compatible anchor. It may remove the Pin only when the user explicitly
requests Unpin in the same transaction. A malformed or unsupported record is
not silently repaired by an unrelated save.

When LiaisonScape explicitly deletes an Entity, its writer removes the
recognized Pin record in the same Dataset transition. This does not change
the existing Entity/Relation deletion policy. Coordinate removal or reset
must either remove the related Pin in the same explicit transaction or be
refused; it must never leave an active unanchored Pin.

## Unpin canonicalization

Unpin is represented by omission, not `pinned: false`:

1. remove the recognized Pin fields from the Entity record;
2. preserve unrelated unknown future fields whenever practical;
3. remove the Entity record if empty;
4. remove the `entities` container/Extension if no recognized or unknown
   content remains.

Opening, rendering, exporting, or defaulting a Dataset does not materialize
an empty Pin record or Extension.

## Working and dirty-state contract

Pin/Unpin is working state and never autosaves.

- Loaded persisted Pin state is immutable until an explicit save.
- A future Coordinate/Layout owner must track `unsavedPins` separately from
  `coordinatesDirty` when only Pin state changes.
- `unsavedPins` contributes to `pendingUserWork`, Dataset Replacement Safety,
  and beforeunload protection.
- A manual Node move does not create a Pin.
- A manual move of an already Pinned Node is allowed; the moved working
  position becomes that operation's hard anchor and is saved with the Pin.
- Pinning an Entity without a saved anchor stages its current working position
  as an adopted Coordinate candidate and marks the coordinate work dirty.
- Pin then Unpin before Save restores the loaded Pin state; a Pin-created
  anchor is also discarded when it has no independent user adoption.
- Persisted Pin plus a working move keeps the Pin intent and uses the current
  working anchor until Save.

`datasetModified` continues to describe the Dataset relative to the clean
baseline. A staged Pin is not written into the Dataset, but it is pending user
work and therefore blocks unsafe replacement/exit.

## Explicit Save transaction

Candidate A is selected:

```text
Save Coordinates
→ Coordinate anchor adoption
→ LiaisonScape Layout Pin adoption
→ one atomic Dataset transition
```

The existing `Save Coordinates` action remains the explicit persistence
boundary for this draft. It coordinates both payloads even though future UI
copy may clarify that the action saves working layout state. A separate Save
Layout operation is not introduced.

The future writer must build and validate a complete cloned Dataset before
publishing it. Coordinate write, Pin validation, canonicalization, unknown
field preservation, and Dataset validation must all succeed or neither half is
published. On failure, current Dataset and working pending state remain. On
success, the clean baseline and relevant dirty state are updated together.

Export before Save follows the existing export boundary and does not
implicitly persist staged Pins or working Coordinates. Pending work remains
protected. Save then reopen restores Pins only when the persisted record and
its Coordinate anchor are compatible.

## Cross-application preservation

NarrativeLine and other applications need not interpret this Extension. They
must preserve it as unknown Extension data whenever practical and must not
reinterpret it as Core, Coordinate, or Presentation data. This satisfies the
existing `preserve without interpreting` boundary.

## Solver handoff

The next Pinned Frontier experiment receives this exact hard-constraint input:

```text
Entity ID → { x: finite, y: finite, source: "saved" | "staged" }
```

Only active Pins with compatible anchors enter the fixed map. Unpinned Entities
remain movable even if they have saved Coordinates. Manual route/curvature,
Relation-label, Node-label, and Self-loop inputs remain separate Product
snapshot data.

This contract does not claim that current `generateFrontierCandidateSet` or
the current Worker proof can consume the map. Pinned Frontier feasibility is
the next checkpoint.

## Validation and scope

- `npm.cmd run validate` passes, including the new Layout draft validator.
- `git diff --check` passes.
- No LiaisonScape runtime, schema consumer, production UI, Coordinate writer,
  or Auto Layout behavior changed.
- Initial Automatic Display and all existing Product authorities remain
  unchanged.
- Existing app dirty work and E2R-SPEC `work/` remain preserved.
