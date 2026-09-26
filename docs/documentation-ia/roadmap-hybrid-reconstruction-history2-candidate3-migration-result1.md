# Roadmap Hybrid Reconstruction — History 2 Candidate 3 B Reconstruction Result 1

Date: 2026-09-25

Status: **BOUNDED HISTORICAL RECONSTRUCTION COMPLETE / CURRENT H2 CLOSURE RETAINED**

## Scope and authority

This checkpoint implements only Candidate 3 from the
[Candidate 2/3 claim reconciliation preparation](roadmap-hybrid-reconstruction-candidates2-3-claim-reconciliation-preparation1.md).
`docs/roadmap.md` remains the sole current-planning authority. The bounded
H2-POSITION-CIRCA closure result remains the evidence authority for that
accepted scope; the existing Release / Cross-App chronology is the primary
location for the transferred dated progression.

The current Roadmap and dedicated evidence were rechecked at parent commit
`8238b7b595d3a98c7f35b6343e2eeb7cc21ac3ab`. The five target headings still
explicitly represented historical, superseded, or checkpoint-era status. The
current closure heading and status-index rows were left in place.

## Transferred blocks

These five complete Roadmap blocks were moved in original source order to the
[History 2 position/circa chronology](../roadmap-history/release-and-cross-app-chronology.md#history-2-position-circa-authoring-and-dataset-upgrade-chronology-2026-09-19):

1. `E2R-HISTORY-2-USER-FACING-AUTHORING-SCOPE-DESIGN (2026-09-19)`
2. `E2R-H2-POSITION-CIRCA-HUMAN-SCOPE-DECISION-PREPARATION (2026-09-19)`
3. `E2R-H2-POSITION-CIRCA-BOUNDED-AUTHORING (2026-09-19)`
4. `E2R-H2-POSITION-CIRCA-DECLARATION-BLOCKER-FIX (2026-09-19)`
5. `HISTORY-2-DATASET-WIDE-H1-TO-H2-UPGRADE-PLANNING (2026-09-19)`

The original body wording, dated statuses, source order, and evidence links
were preserved. The moved blocks' relative links to sibling `docs/` files were
adjusted to resolve from `docs/roadmap-history/`. A chronology introduction
clarifies that historical `current`/`pending`/`open`/`next` wording belongs to
the source snapshots and points to the current closure retained in Roadmap.
The source-order gap is intentional: the original closure checkpoint between
the blocker repair and final planning snapshot stays in Roadmap rather than
being duplicated in History.

## Current state retained

The Roadmap retains `E2R-H2-POSITION-CIRCA-BOUNDED-AUTHORING-CLOSURE
(2026-09-19)` and its dedicated closure pointer. The status index was not
changed. Current boundaries remain:

- H2-POSITION-CIRCA authoring and atomic Dataset-wide H1→H2 upgrade are
  **ACCEPTED / CLOSED only within the recorded bounded scope**;
- base `history@2.0.0` remains **Candidate / non-Stable**;
- the adopted Stable `history@2.0.0 / position-circa` is a bounded profile,
  not Stable promotion of the entire History 2 extension; and
- broader H2 authoring, Relative Time authoring/solving, and other excluded
  surfaces remain deferred/out of scope.

No broader History 2, temporal, schema, runtime, or application status was
inferred or changed. Candidate 2, other Roadmap responsibilities, and sibling
repositories were not modified.

## Reference and measurement reconciliation

Before moving the blocks, the canonical E2R Markdown workspace was searched
for direct `roadmap.md#...` references to the five exact source anchors. No
matching inbound fragment reference was found. The current closure anchor was
retained and is linked from the new History section. This workspace check does
not claim that external deep links do not exist.

Counts use physical lines and ATX headings (`^#{1,6} `) measured from the
parent checkout and resulting files:

| File | Before | After | Change |
| --- | ---: | ---: | ---: |
| `docs/roadmap.md` lines | 4,251 | 4,143 | −108 |
| `docs/roadmap.md` ATX headings | 237 | 232 | −5 |
| `docs/roadmap-history/release-and-cross-app-chronology.md` lines | 1,324 | 1,443 | +119 |
| Same History file ATX headings | 57 | 63 | +6 (section heading plus five transferred headings) |

Each transferred block was compared with its Roadmap source block after
normalizing only the expected relative-link prefix change; all five compared
equivalent. The Roadmap change removes only the five approved headings and
their bodies, retains the closure heading, replaces its now-inaccurate
“entries above” sentence with the History pointer, and does not touch the
status index.

## Files and validation

Changed files:

- `docs/roadmap.md`
- `docs/roadmap-history/release-and-cross-app-chronology.md`
- `docs/roadmap-history/README.md`
- `docs/README.md`
- this bounded result

Validation performed:

- all local Markdown links in the new result resolve;
- transferred block/source comparison: **5/5 equivalent** after relative-link
  adjustment;
- target anchor scan: no canonical-workspace inbound fragments to the five
  moved headings; current closure anchor retained;
- `npm run validate`;
- `git diff --check`.

No push, deploy, tag, release, publication, sibling-repository write, or
`work/` write/stage was performed.
