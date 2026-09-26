# LiaisonScape Automatic Placement Serialization Impact Result

Date: 2026-08-30

Status: `CLOSED — AUTOMATIC ENTITY PLACEMENT INTRODUCES NO NEW SERIALIZED CONTRACT`

## Scope and authority

This is a bounded release-impact audit of the accepted Automatic Initial Entity
Placement implementation. Local LiaisonScape source is authoritative. The
accepted placement result, Coordinate ownership decisions, Dataset serializer,
replacement-safety helpers, and current tests were inspected. No placement
algorithm or runtime behavior was changed.

The public repository is corroborating evidence only and may lag the local
implementation; its placement source was not treated as authoritative for
this audit.

## Findings

Dataset open reads stored Coordinates and computes missing positions through
`placeInitialEntities`. The resulting `positions` map is application runtime
state; `acceptDataset` does not write those generated positions back into the
Dataset or baseline. Stored/owned positions win.

Automatic new-Entity spawn creates a real Core Entity Dataset mutation, so
`datasetModified` may change for that reason. Its automatic position is still
derived and does not set `coordinatesDirty` or pending Coordinate work.
Explicit canvas placement and node drag remain distinct user-owned Coordinate
work and retain their existing dirty/save semantics.

Coordinate Save uses `buildPersistableCoordinatePositions`: stored positions
for existing Entity IDs are retained, and only positions whose Entity IDs are
in the adopted-ID set are added from the working map. Automatic positions are
not added merely because they exist in `positions`. Export serializes the
Dataset object, not the runtime positions map.

## Contract impact

Automatic placement introduces no new Dataset-visible field, Extension, token,
version, algorithm identifier, provenance marker, ownership marker, Layout
state, or Presentation state. The Coordinate Extension ID, version, Space,
payload shape, reader/writer behavior, and Specification declaration semantics
are unchanged. No Layout or Presentation serialization contract is created.

Therefore no Validator change is required solely because automatic placement
was implemented. Existing Coordinate writes remain explicit and existing
unknown-data round-trip preservation remains the governing behavior.

Dataset Replacement Safety is unchanged: automatic derived placement alone is
not `coordinatesDirty`, pending user work, or replacement loss risk. Explicit
placement and drag may still contribute pending work, while Core Entity
creation may independently make the Dataset modified.

## Evidence and recommendation

Placement tests cover deterministic fallback, stored-coordinate precedence,
disconnected graphs, and stability. Replacement-safety tests cover automatic
versus explicit creation placement, persistable-position filtering, and dirty
semantics. Dataset and preservation tests cover serialization and unrelated
Extension preservation. No additional characterization test was necessary.

Browser acceptance is `NOT REQUIRED — SERIALIZATION IMPACT AUDIT USES SOURCE
AND AUTOMATED EVIDENCE`; no browser acceptance was performed.

The Coordinate workflow remains a future extraction candidate, but this audit
is not an extraction signal and did not create `useCoordinateWorkflow()`.

## Codex assessment

### Agree

Yes. Live local implementation supports Automatic Entity Placement as Derived
runtime geometry rather than a new Dataset serialization contract.

### Concern

The main risk is a future broad `positions` to Coordinate conversion bypassing
the adopted-ID filter. The current Save path explicitly prevents that leakage.

### Alternative

Serializing placement provenance could aid reproducibility, but no current
product requirement supports adding generated/algorithm metadata. Adding it
would create a new contract and Validator/schema burden.

### Recommendation

Close the serialization residual with no schema, Validator, Layout,
Presentation, or Specification declaration change. Preserve the current
Derived-versus-Owned boundary.

No LiaisonScape source or test files were changed. No `ai-knowledge` file,
sample, package, push, deploy, publish, tag, or release was changed or
performed.

Result: **CLOSED — AUTOMATIC ENTITY PLACEMENT INTRODUCES NO NEW SERIALIZED CONTRACT**

