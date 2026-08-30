# LiaisonScape Self-Loop Same-Geometry Counterfactual

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-SELF-LOOP-SAME-GEOMETRY-COUNTERFACTUAL1`
- Scope: diagnostic comparison only

## Result

`NOT JUSTIFIED - SAME-GEOMETRY COUNTERFACTUAL SHOWS NO CLEARLY BETTER SELF-LOOP ROUTE`

The comparison froze the Lighthouse stored coordinates, Entity/Relation
topology, node geometry, route constants, and Presentation state. It compared
the current production order with ordinary-first routing and inspected the
existing self-loop candidate domain. The self-loop geometry did not change when
ordinary paths were routed first. Therefore an order-only fix is not supported
by this evidence.

## Frozen target and affected Relations

The target is `beacon` at stored coordinate `(620,520)`. Its two self-
Relations are `beacon-self-monitor` (`self-monitors`) and
`beacon-self-calibrate` (`self-calibrates`). Nearby ordinary Relations include
`maya-beacon` (`maintains`), `beacon-lighthouse-installed-in` (`is installed
in`), `clara-maya` (`works with`), `clara-lighthouse` (`leads restoration of`),
`authority-lighthouse` (`administers`), and `thomas-maya-friends` (`friends
with`). No IDs, coordinates, relations, or styles were modified.

## Source-level counterfactual finding

The current `App.tsx` classifies self-loops as fixed edges and routes them
before ordinary automatic edges, accumulating every route in `occupiedPaths`.
However, `routeGraphEdge` enters the self-loop branch and calls
`selectAutomaticSelfLoopGeometry(source, parallelIndex, obstacles)` without
using `occupiedPaths`. Its candidate score considers node pressure and angular
preference, not ordinary-path intersection or proximity. Consequently, the
ordinary-frozen control and ordinary-first routing produce the same self-loop
candidate geometry under the frozen inputs.

## Measurements

Using the current stored geometry and 41-point route samples:

| Relation | Production vs ordinary-first | Production nearest ordinary route | Loop-to-loop gap |
|---|---|---:|---:|
| beacon-self-monitor | identical | 56.30 | 25.17 |
| beacon-self-calibrate | identical | 1.76 | 25.17 |

The `beacon-self-calibrate` proximity is a real diagnostic signal, but it does
not establish that routing order caused it or that an alternate orientation is
better. The current candidate search was not changed to invent a replacement
orientation, and no visual screenshot was promoted as quantitative proof.

## Causal answers

- Q1: routing-order asymmetry exists in classification, but is **not proven**
  to cause the observed defect.
- Q2: **not established**; the tested ordinary-first same-geometry control did
  not produce a different or clearly better orientation.
- Q3: **NO**; changing order alone does not alter self-loop geometry because
  self-loop selection ignores occupied ordinary paths.
- Q4: **NOT YET JUSTIFIED**; ordinary-path awareness is a candidate only if a
  bounded orientation search demonstrates a better trade-off.
- Q5: **NO**; ordinary routing is not established as the primary cause by this
  counterfactual.

## Release and next scope

No self-loop fix, routing-order change, ordinary-route change, parallel change,
label change, test, sample, Coordinate/Presentation payload, schema, Core,
Extension, or release operation was performed. If the issue remains important,
the next smallest diagnostic is an explicit bounded orientation enumeration
scored against ordinary paths, foreign nodes, labels, the other loop, and route
length, followed by a minimal synthetic regression test only if causality is
confirmed. Parallel curvature, label ownership, and foreign-node findings
remain separate follow-ups. NarrativeLine Display-Order remains not started.
