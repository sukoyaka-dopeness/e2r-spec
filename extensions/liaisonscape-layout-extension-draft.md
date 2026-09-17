# LiaisonScape Layout Extension Draft

Status: Draft candidate; not Stable; bounded LiaisonScape writer implemented,
Pin UI and full App working-state integration remain open

Draft Extension identifier:
`draft.github.sukoyaka-dopeness.liaisonscape-layout`

Draft specification version: `0.1.0`

## Responsibility

This Extension carries LiaisonScape-authored layout intent. Version `0.1.0`
defines persistent Entity Pin/Unpin intent for Explicit Auto Layout.

It is separate from the Coordinate Extension:

- Coordinate stores a positional value in a named Coordinate Space.
- this Extension states that an Entity's compatible saved position is a hard
  positional constraint for Explicit Auto Layout.

It is also separate from the LiaisonScape Presentation Extension. It does not
own Relation arrow display, line style, route geometry, curvature, labels,
Self-loop geometry, viewport state, selection, or interaction state.

This draft does not add Pin to E2R Core and does not define a general-purpose
style or preference bag. A future responsibility that is not Pin requires a
separate bounded decision.

## Identifier and placement

The exact identifier is both the Extension identity and Dataset-level payload
key:

```text
extensions["draft.github.sukoyaka-dopeness.liaisonscape-layout"]
```

The payload MUST contain `specVersion: "0.1.0"` when present. The draft is
not registered Stable. An application that does not understand this
Extension MUST ignore it for behavior and SHOULD preserve it whenever
practical.

## Payload shape

The canonical payload is a Dataset-level object with an ID-keyed Entity map:

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

The example is the exact draft vocabulary and the current bounded writer
contract. The Entity map key is the exact case-sensitive Core Entity
ID. It MUST NOT be derived from the Entity name, array position, endpoint, or
rendered geometry.

An Entity record with `pinned: true` is a Pin intent. `spaceId` identifies the
Coordinate Space whose saved positional value supplies the hard constraint.
`pinned: false` is not a Pin record and is not canonical output.

Unknown fields at the Extension and Entity-record levels MUST be ignored by
the supported Pin behavior and SHOULD be preserved whenever practical. Unknown
fields do not replace the required `pinned` and `spaceId` fields and do not
create a second Pin representation.

## Canonicalization

The canonical writer uses record omission for Unpin:

1. Pin writes or retains one Entity record with `pinned: true` and a valid
   `spaceId`.
2. Unpin removes the Entity record's recognized Pin fields.
3. If no unknown fields remain in that record, the record is removed.
4. If no Entity records remain and no unknown Extension fields remain, the
   entire Extension is omitted.
5. An explicit `pinned: false` is not emitted.

If an Entity record contains unknown future fields, Unpin removes the current
Pin fields but preserves those unknown fields whenever practical. The remaining
record is not interpreted as an active Pin by this draft. A canonical writer
MUST NOT rewrite unrelated unknown fields merely because a Dataset is opened,
viewed, or exported.

An Extension containing only `specVersion` or only unknown future fields may
be structurally preserved, but a canonical writer MUST NOT create an empty
Pin state merely by opening or displaying a Dataset.

## Coordinate anchor contract

For a supported active Pin, LiaisonScape resolves the anchor as follows:

1. Find the Entity with the exact Entity-ID map key.
2. Read the Entity's supported Coordinate Extension occurrences.
3. Select exactly one coordinate occurrence whose `spaceId` exactly equals the
   Pin record's `spaceId`.
4. Require compatible finite `x` and `y` values in that occurrence.
5. Use that coordinate as the hard Node anchor for Explicit Auto Layout.

No Coordinate value is copied into this Extension. No fallback Space,
component name, array order, Entity name, or coordinate near the current
viewport may be guessed. A Dataset with multiple Spaces must identify the
intended Space explicitly in each Pin record. A partial coordinate, duplicate
coordinate for the requested Space, unsupported Coordinate version, or
unsupported external definition is not a compatible anchor.

The same rule applies to a staged working Pin, except that an unsaved current
working position may serve as the operation-local anchor until the explicit
Save transaction succeeds. The operation snapshot must record whether an
anchor came from saved Dataset state or staged working state.

## Orphan and invalid Pin semantics

The following are not Core Dataset failures:

- a Pin Entity ID does not resolve to a current Entity;
- the requested Space is absent;
- the Entity has no compatible saved coordinate;
- the coordinate is partial, duplicated, unsupported, or otherwise
  incompatible;
- the Pin record is malformed for the supported vocabulary; or
- the Extension version is unsupported.

An Extension-aware reader MUST ignore such a record for layout behavior, MUST
NOT invent an anchor such as `(0, 0)`, and SHOULD expose a semantic diagnostic
when diagnostics are available. It SHOULD preserve the raw record on
unrelated round trips whenever practical.

A LiaisonScape canonical Save transaction MUST refuse to leave an active Pin
without a compatible anchor. It may instead remove the Pin only when the user
explicitly requests Unpin in the same transaction. A malformed or unsupported
record is not silently repaired by an unrelated save.

When LiaisonScape explicitly deletes an Entity, its canonical writer removes
the recognized Pin record for that Entity in the same Dataset transition.
This is metadata cleanup and does not change the application's Entity/Relation
deletion policy. An application that does not understand the Extension may
preserve the orphan as opaque data.

If a coordinate is removed or reset while an active Pin references it, the
operation MUST either remove the Pin in the same explicit user transaction or
refuse the coordinate change. It MUST NOT leave an apparently active Pin with
no anchor and MUST NOT silently choose another Space.

## Working state and dirty state

Pin/Unpin is a working layout operation, not an autosave operation.

- Persisted Pin state is loaded from the Dataset and is not changed by open or
  display.
- A staged Pin state is application working state and participates in
  `pendingUserWork`, Dataset replacement protection, and beforeunload safety.
- A Pin change must have its own dirty distinction in the future Coordinate /
  Layout owner. It must not be hidden inside `coordinatesDirty` when no
  coordinate changed.
- If Pinning an Entity without a saved anchor stages its current working
  position as the anchor candidate, that Entity also becomes an adopted
  Coordinate candidate and `coordinatesDirty` is set.
- `manual move != Pin`: a completed Node move does not create a Pin.
- A manual move of an already Pinned Node is allowed as direct user
  manipulation. The current working position becomes the operation-local hard
  anchor; Save persists the new coordinate and Pin together.
- Pin/Unpin before Save remains reversible working state. Returning to the
  loaded Pin and coordinate state clears the corresponding pending work.

`datasetModified` continues to describe Dataset changes relative to the clean
baseline. A staged Pin is not written into the Dataset until Save, but it is
still included in `pendingUserWork` so replacement and exit protection apply.

## Explicit Save transaction

The selected transaction boundary is Candidate A:

```text
Save Coordinates
→ compatible Coordinate anchor(s)
→ LiaisonScape Layout Pin state
→ one atomic Dataset adoption
```

The existing `Save Coordinates` action remains the explicit user persistence
boundary for this first draft. It is the transaction coordinator, even though
its current label is narrower than the future behavior. A later UI copy review
may clarify that the action saves the working layout, but a separate Save
Layout action is not introduced by this draft.

The writer MUST construct and validate a complete cloned Dataset before
publishing it. If Coordinate writing, Pin validation, Extension
canonicalization, or Dataset validation fails, it MUST publish neither half;
the current Dataset and staged working state remain pending. On success it
updates the clean Dataset baseline, clears the relevant coordinate and Pin
dirty state, and preserves unrelated Core fields, Extensions, and unknown
fields.

Export before Save does not implicitly persist staged Pin or working
coordinates. It follows the existing export boundary and exports the current
Dataset state; pending Pin/Coordinate work remains protected until an explicit
adoption transaction succeeds.

## Reopen and cross-application preservation

After Save and reopen, LiaisonScape restores a Pin only when its record and
Coordinate anchor pass the exact rules above. Saved Coordinate and Pin state
are Dataset-carried and therefore travel together in E2R JSON.

NarrativeLine or another application that does not understand this draft need
not execute Pin behavior. It must preserve the unknown Extension whenever
practical and must not reinterpret Pin as Coordinate, Presentation, or Core
data. An unsupported `specVersion` is preserved and treated as inactive by
the current reader.

## Explicit Auto Layout input

The future operation snapshot must expose a deterministic hard-constraint map:

```text
Entity ID → { x, y, source: "saved" | "staged" }
```

For persisted Pins, the map comes from the saved Coordinate anchor. For a
staged Pin, the current working anchor is used. Unpinned Entities are not in
the fixed map even if they have saved Coordinates. Manual route/curvature,
Relation-label, Node-label, and Self-loop state are separate Product inputs
and are not converted into Pin records.

## Draft status and non-goals

This is a bounded draft Extension and semantic authority closure. It does not

- register a Stable Extension;
- change the E2R Core or Coordinate Extension;
- add a Stable Extension, Pin UI, or full App Auto Layout path;
- claim that the current Frontier generator supports fixed anchors; or
- change Initial Automatic Display, routing, labels, Self-loop behavior,
  persistence, or Dataset Replacement Safety at runtime.

The next checkpoint may begin the Pinned Frontier feasibility experiment using
this exact anchor and working-state contract.
