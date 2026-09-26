# LiaisonScape Initial Node Placement Bounded Settling Implementation

## E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-BOUNDED-SETTLING-IMPLEMENTATION1

Date: 2026-08-30

### Result

`IMPLEMENTED - DERIVED INITIAL PLACEMENT NOW REUSES AUTO-LAYOUT MECHANICS WITHOUT AUTO-LAYOUT WORKFLOW SEMANTICS`

Coordinate-less Dataset opening now uses a bounded three-iteration run of the
existing pure Auto Layout mechanics. The result is applied only as temporary
display placement. It does not invoke the explicit Auto Layout workflow, write
Coordinates, mark the Dataset dirty, create adoption state, or add History.

### Scope

- `e2r-liaison-scape/src/auto-layout.ts` exposes the centralized
  `INITIAL_PLACEMENT_SETTLING_ITERATIONS` constant (`3`) and a dedicated
  `settleInitialPlacement` helper.
- `e2r-liaison-scape/src/App.tsx` selects that helper only when the opened
  Dataset has no stored Coordinates.
- Dataset-contained Coordinates remain authoritative and are not changed.
  Mixed Coordinate Datasets retain the existing stored-plus-deterministic
  missing-node placement path; settling missing nodes around pinned authored
  positions is intentionally a separate ownership decision.
- No Core, Extension, schema, sample, release metadata, or explicit Auto
  Layout workflow behavior changed.

The three-iteration bound follows the preceding non-grid experiment: it
removed the fallback's repeated-row alignments deterministically while keeping
the derived composition less aggressively reorganized than the full solver.

### Verification

The LiaisonScape repository passed:

- `npm.cmd test` — 280/280
- `npm.cmd run lint`
- `npm.cmd run build`

The implementation is pure and deterministic for unchanged graph input, and
the existing stored-coordinate and explicit Auto Layout tests remain passing.

### Follow-up boundary

Routing and Relation-label quality were not promoted to acceptance criteria for
this initializer. If mixed authored/derived placement must also settle around
pinned nodes, it requires a separate ownership and solver-objective checkpoint.
The ai-knowledge candidate remains a candidate only; no Decision was promoted.
