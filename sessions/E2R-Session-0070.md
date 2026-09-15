# E2R Session 0070

Objective: General / Complex Dataset Practicality Gate 1.
Checkpoint: LiaisonScape Fast Initial Placement and explicit HQ practicality
for unknown or coordinate-less datasets.
Started: 2026-09-15.
Status: `FAST INITIAL PLACEMENT PRACTICALITY ESTABLISHED / HQ PRACTICALITY
AND QUALITY NOT ESTABLISHED`.
Continuation file: This is a new objective and release-gate file. Continue in
this file only for the same General / Complex Dataset Practicality Gate 1
objective; create a new Session file for a materially new objective or release
gate.

## Scope

This checkpoint followed Representative Sample Release-Quality Acceptance 2.
It did not create a new Initial Placement solver, quality provider, Product
default, or Adaptive Initial Placement Cascade. Existing Dataset, coordinate,
persistence, dirty-state, Save Coordinates, manual placement, routing,
Parallel/Incident, endpoint-plan, Relation-label, Node-label, and Self-loop
authority boundaries were preserved.

The diagnostic boundary was the current coordinate-less Fast
`settleInitialPlacement` path versus the existing explicit 12-iteration
`solveAutoLayout` path, both evaluated through the current Product-authoritative
presentation and quality metric code. Five fixed controls were used:
`sparse` 8/7, `dense` 14/49, `long-label` 10/20, `connected` 14/49, and
`parallel-self-loop` 10/18 with one Self-loop and a three-Relation parallel
group. Each was coordinate-less and measured three times in the Node
diagnostic runner.

## Evidence

Fast and HQ placement time remained sub-millisecond. Median end-to-end
diagnostic totals were:

| Control | Fast | HQ |
| --- | ---: | ---: |
| sparse | 12.7 ms | 14.2 ms |
| dense | 197.6 ms | 167.4 ms |
| long-label | 58.4 ms | 52.3 ms |
| connected | 191.9 ms | 182.4 ms |
| parallel-self-loop | 39.7 ms | 37.4 ms |

The current Product presentation work dominates these totals. Dense Fast/HQ
retained 41/42 crossings; connected Fast/HQ retained 72/58 crossings with
13/17 label-route hits; long-label HQ had two body overlaps and one label
overlap; connected HQ had three body overlaps and two label overlaps. The
parallel/Self-loop control did not show a catastrophic synthetic failure, but
this does not advance either independent Self-loop research or final Parallel
acceptance.

The new diagnostic page initially exposed a blank page because it attempted to
embed the Product App before its generated JSON artifact existed. This was
treated as a diagnostic-page defect, not Product evidence. The page was
reduced to a diagnostic-only JSON view, the fixture was corrected to provide
the same edge labels that App supplies to Product presentation, and the
artifact was regenerated. The corrected page rendered the source-faithful
matrix; no Product conclusion relies on the page.

## Actual Product smoke

The Actual Product surface was opened at the development-only Ashen Crown
English acceptance fixture. The coordinate-less Fast startup produced a
stable 10-Entity / 17-visible-Relation graph with Product controls and native
zoom. No blank state, crash, navigation failure, mojibake, or obvious
Node-body overlap was observed. This was a small smoke check and not formal
acceptance.

The existing More -> Auto Layout action was then run on the same surface. It
completed and marked coordinates temporary, but the resulting graph showed
obvious central Node-body overlap and degraded route/Relation-label
readability. Visual inspection stopped at this gross defect; no expensive
visual evidence or Human Review candidate was produced. The operation was not
saved and the browser was reloaded afterward.

## Decision

Gate 2 is classified `C`: Fast is practically usable in the tested envelope,
but the required HQ fallback is not established as a bounded, readable,
release-quality Product operation. This is not evidence that a future bounded
HQ formulation is impossible; it is evidence that the existing explicit
action cannot be used as that formulation.

Quality solver remains `HOLD / NOT ESTABLISHED`; production provider remains
`NOT ESTABLISHED`; Product integration/default remains `HOLD`; Human Review
remains `NOT READY`; Adaptive Initial Placement Cascade remains inactive; and
the Initial Layout Release blocker remains `OPEN`.

No knowledge candidate was added. This checkpoint records release-specific
practicality evidence rather than a reusable cross-repository principle. No
push, tag, release, deploy, publish, reset, stash, or historical document
rewrite was performed.
