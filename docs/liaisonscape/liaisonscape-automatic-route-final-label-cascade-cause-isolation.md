# LiaisonScape Automatic-Route Final-Label Cascade Cause Isolation

Date: 2026-08-31

Status: bounded application experiment; non-normative

## Exact result

`DIRECTION SUPPORTED — A SPECIFIC FINAL NODE-LABEL MOVEMENT DIRECTLY TRIGGERS THE JA ROUTE CASCADE`

The Japanese final-label feedback trace is reproducible: Pass 2 changes
`authority-lighthouse` and `sofia-archive`; Pass 3 changes the four
Clara-centred ordinary Relations; Pass 4 is fixed. The direct second-layer
trigger is the **Clara final Node-label rectangle** made by Pass 2.

Replacing only that one rectangle in the Pass-3 routing input with its Pass-1
geometry removes all four Pass-3 route changes. This is a diagnostic
counterfactual only; it does not modify production labels, routing, order,
weights, candidates, or state.

## Method

Pass 1 uses current provisional Node labels and current routing. Each later
diagnostic pass uses only the preceding fresh final Node-label rectangles as
the otherwise-current route label input. Candidate enumeration, hard/halo
formula, Node and occupied-path pressure, canonical order, and physical-side
protection remain live-source values. Relation labels are regenerated but are
not routing input.

For the direct probe, Pass-3 predecessor occupied paths are held at their
actual Pass-3 baseline values. One Pass-2 final Node-label rectangle at a time
is substituted with its Pass-1 rectangle. Thus a changed winner is attributable
to that label geometry rather than a route-order swap. No score or policy term
was changed.

## Japanese trace and label movement

| Pass transition | changed ordinary Relations |
| --- | --- |
| 1 → 2 | `authority-lighthouse`, `sofia-archive` |
| 2 → 3 | `clara-lighthouse`, `clara-maya`, `clara-thomas-mentors`, `clara-thomas-supervises` |
| 3 → 4 | none |

The material Pass-1→Pass-2 final Node-label movements are:

| owner | dx | dy | displacement |
| --- | ---: | ---: | ---: |
| Archive | -97.50 | 64.00 | 116.63 |
| Clara | 64.01 | 77.24 | 100.31 |
| Thomas | -2.50 | -38.00 | 38.08 |
| Lighthouse | -10.71 | -17.23 | 20.29 |

All remaining owner rectangles were unchanged in this fresh diagnostic.

## Direct causal result

| Pass-3 Relation | with Pass-2 labels | with only Clara reverted to Pass-1 geometry |
| --- | --- | --- |
| `clara-lighthouse` | changed | unchanged |
| `clara-maya` | changed | unchanged |
| `clara-thomas-mentors` | changed | unchanged |
| `clara-thomas-supervises` | changed | unchanged |

Therefore one final-label owner is sufficient for **4/4** second-layer winner
changes (class L1). Label geometry alone explains this layer under the held
actual predecessor occupied-path baseline: **YES**. An occupied-path-only
counterfactual, canonical-order swap, and pair-label search were not needed to
establish that direct edge, and were not run.

The causal graph established here is:

```text
Pass-2 route changes (authority-lighthouse, sofia-archive)
  → Pass-2 Clara final Node-label movement (100.31 units)
  → Pass-3 Clara-centred route changes (4)
  → fixed Pass-4 state
```

The first edge remains **indirect**: this checkpoint does not attribute Clara's
move exclusively to Authority/Lighthouse or Sofia/Archive. Likewise, it does
not claim whether the four winner changes are driven by a hard intersection,
halo pressure, or a score tie. Those require a separate score-boundary audit;
the present result is geometric necessity/sufficiency at the routing-input
boundary, not a new penalty interpretation.

## Boundaries and decision

Beacon/lighthouse and Daniel/Clara do not enter the static changed-route list.
No dynamic drag sweep, route-length prioritization, curvature policy, H1--H4
acceptance claim, foreign-Node/occupied-corridor fixture, or parallel fixture
was introduced or reclassified. The EN fixed trace is a bounded comparison,
not evidence against the JA direct mechanism.

Classification: **CASE 1 — A SINGLE MOVED FINAL NODE LABEL TRIGGERS THE JA
SECOND-LAYER CASCADE.** First-stage causal route: **NEITHER / INDIRECT**.
Dominant score signal: **NOT YET ISOLATED**. Cascade edges isolated: **4/4**;
maximum observed depth: two route layers.

Production implementation, iterative solving, route-order change, and full
router redesign are justified now: **NO**. The selected next checkpoint is
`E2R-LIAISONSCAPE-AUTOMATIC-ROUTE-FINAL-LABEL-HARD-BOUNDARY-SEMANTICS-EXPERIMENT1`.
It must distinguish hard versus halo score transitions for the four already
isolated Clara-label edges without changing numeric values.

## Closure

Production Runtime, routing, route order, label placement, candidate set,
drag behavior, samples, schema, and `seededPositions` changed: **NO**. No
LiaisonScape commit, push, tag, release, deployment, or publication occurred.
Temporary diagnostics were removed; existing Lighthouse EN/JA sample edits
remain preserved.
