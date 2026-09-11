# LiaisonScape Initial-Layout / Presentation Attribution: Titanic 1

Date: 2026-09-11

Status: ATTRIBUTION COMPLETE; NO RUNTIME FIX OR PRODUCT ADOPTION

## Scope

This checkpoint examined whether Titanic Final Voyage EN's visible parallel
Edge and long Relation-label behavior is being treated as initial-layout
quality by `post-structural-relaxation-v1`. It used the existing diagnostic
materializer and same fixture topology. No Product source, Dataset,
coordinate ownership, or governed evidence was changed.

The primary parallel group is `Carpathia -> Titanic`, Relations `r10` and
`r11` (`responds to distress from` and `rescues survivors from`). The labels
are long, and their route/presentation interaction is a current Product
presentation concern.

## Attribution findings

The Post relaxation score is not a pure Node-geometry score. It includes:

- crossing count;
- Relation-label route hits and near-label routes;
- label overlap and Node overlap;
- route median and maximum;
- extent, usable-span, and locality/edge-length terms.

Thus the current Post candidate can move Nodes to reduce downstream
presentation defects. That is a real coupling, not an attribution-free
initial-placement result.

The score does not contain a separate `parallelEdge` or `selfLoopAngle`
authority. Parallel behavior enters indirectly through the routed geometry,
crossing/label signals, route burden, and subsequent feedback output. A
Self-loop angle preference is similarly not an independent initial-layout
objective term.

## Same-fixture counterfactual

Titanic EN was run with the standard objective and with the existing
`label-corridor` objective. Both retained the same candidate family and zero
hard crossings/label hits in the selected Post result:

| Metric | Standard | Label-corridor |
| --- | ---: | ---: |
| hard crossings | 0 | 0 |
| label-route hits | 0 | 0 |
| label near routes | 0 | 0 |
| label overlap | 0 | 0 |
| route median | 299.5 | 375.0 |
| route maximum | 618.7 | 702.6 |
| extent | 744.4 × 583.6 | 744.4 × 583.6 |
| Post evaluated candidates | 269 | 259 |
| accepted moves | 38 | 39 |

The counterfactual shows that changing a label-corridor weight can alter
route burden without reducing the already-zero hard hit count. It does not
isolate or fix the `r10/r11` routing behavior. It also does not justify
claiming that the Post geometry independently solved the parallel presentation
issue.

## Classification

```text
parallel Edge / long Relation-label attribution
  = strongly coupled to full presentation evaluation
  = not an independent initial-layout objective signal

Self-loop angle attribution
  = separate / unresolved routing presentation track

Post initial-layout quality independent of routing/labels
  = not proven
```

PROVEN:

- Titanic's relevant parallel group is `r10/r11` between Carpathia and Titanic.
- Current Post ranking consumes downstream routing and label-derived signals.
- The existing score has no separate parallel-side or Self-loop-angle term.
- The tested corridor counterfactual moved route burden while leaving hard hit
  counts at zero.

STRONGLY SUPPORTED:

- A coarse objective that claims to represent Post must either explicitly
  declare its presentation proxy or stop short of claiming independent layout
  quality.
- Routing/Relation-label fixes should remain separate runtime work; embedding
  them into initial-layout authority would make attribution and ownership
  worse.

UNRESOLVED:

- Whether a presentation-independent proxy can preserve enough of the Post
  preference without routing authority.
- Whether the observed `r10/r11` behavior is acceptable after a future
  controlled routing comparison.
- Self-loop angle causality under same-geometry alternatives.

## Decision

The evidence is sufficient to proceed to a coarse-objective design checkpoint,
but not to Product adoption or a routing fix. The design must keep the
initial-layout provider responsible for Node geometry and use any presentation
proxy only as an explicitly bounded diagnostic signal. Parallel routing,
Relation-label placement, and Self-loop behavior remain separate tracks.

```text
Product initial-layout adoption = HOLD
runtime routing fix              = NOT STARTED
new governed Fresh lineage       = NOT STARTED
```
