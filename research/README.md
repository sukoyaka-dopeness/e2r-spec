# E2R Research

Research documents are non-normative. They preserve exploration, decisions,
evidence, and handoffs without changing the Core or officially published
Extensions.

## Where to start

- `research-catalog.json` — machine-readable catalog, proposed paths, and
  reorganization status.
- `names/` — Names P1 and Grouping workstreams. Each has a `current/` entry
  point, with decisions, evidence, deferred work, and historical handoffs
  separated below it.
- `history-vnext/` — History vNext research and evidence.
- `source-citation/` — bounded Source/Citation research.
- `exploratory/` — general exploratory research without a current workstream
  entry point.
- `tools/` — executable research harnesses and their tests. These remain in
  place until test-discovery and reference impact are handled explicitly.

## Directory meanings

- `current/` contains the entry point for a workstream, not every current
  decision.
- `decisions/` contains accepted or proposed non-normative design records.
- `evidence/` contains fixtures, evidence checkpoints, and preservation tests.
- `deferred/` contains explicitly deferred work.
- `historical-handoffs/` preserves prior session transfer documents. Historical
  does not mean invalid; it means the document is no longer the current entry
  point.

Accepted decisions and evidence remain usable references after a workstream
closes. The current entry point and document status are separate axes.

## Authority boundary

Research does not define normative Core or Extension behavior. Normative
requirements are defined by `spec/` and the applicable Extension documents.
Applications and Validators may provide implementation evidence, but research
evidence does not by itself authorize a writer, migration, repair, or Stable
registration.

The physical reorganization is incremental. The Catalog records `path`,
`movedFrom`, `proposedPath`, move batches, and reference impact. Do not move a
later batch until the preceding navigation and validation checkpoint passes.
