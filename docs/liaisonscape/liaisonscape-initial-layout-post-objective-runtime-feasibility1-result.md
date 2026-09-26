# LiaisonScape Initial-Layout Post-Objective Runtime Feasibility 1

Date: 2026-09-11

Status: POST-OBJECTIVE RUNTIME FEASIBILITY NOT ESTABLISHED; OPT-IN HOLD

## Scope

This checkpoint measured the existing diagnostic Post search and compared its
responsibility and cost with the bounded runtime-provider contract. No Product
default, `App.tsx` path, Dataset, stored Coordinate, or governed evidence was
changed.

The previous provider's Apollo fallback is not treated as proof of a particular
unsafe condition. The cause remains the provider's current safety result; this
checkpoint instead measures the richer Post objective directly.

## Diagnostic Post measurements

The existing `tools/generic-crossing-search.mjs` was run with its standard
diagnostic configuration.

| Fixture | Nodes | Visible Edges | Wall time | Presentation calls | Full evaluations | Post evaluations | Accepted moves |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Apollo 11 EN | 9 | 11 | ~7.2 s | 469 | 453 | 208 | 16 |
| Lighthouse EN | 10 | 14 | ~11.6 s | 483 | 467 | 238 | 14 |
| Titanic EN | 13 | 12 | ~12.0 s | 514 | 494 | 269 | 38 |

The diagnostic search performs hundreds of presentation evaluations and spends
seconds even on small public samples. Its quality signal is not a
Node/label-envelope-only primitive: it depends on structural search and the
full presentation evaluator, including routing and downstream presentation
defect metrics.

## Boundary analysis

PROVEN:

- The existing Post objective cannot be treated as a small bounded runtime
  primitive under the current implementation: representative runs exceed the
  provider's 100 ms diagnostic budget by roughly two orders of magnitude.
- The fast provider prototype is not Post-equivalent. Its public-sample run
  completed in approximately 1–5 ms for several fixtures but fell back on
  Apollo EN/JA and evaluates only Node/label envelopes.
- The richer Post evaluator crosses the intended provider responsibility
  boundary by consuming routing/presentation-derived quality signals.
- Whole-result fallback and keeping the current Product provider unchanged
  remain safe under the measured failure mode.

STRONGLY SUPPORTED:

- A direct runtime port of the current Post search is not viable without a new
  architecture, substantially larger latency budget, or a different coarse
  objective.
- Candidate generation and full presentation evaluation are the dominant
  feasibility barrier, not the provider's fallback mechanism alone.
- Positive Actual Product observations establish bounded research value, not
  a generic runtime performance contract.

UNRESOLVED:

- Whether a new coarse, presentation-independent objective can preserve enough
  of the Post visual benefit while remaining within a Product budget.
- Whether staged offline/precomputed assistance is compatible with arbitrary
  Dataset and locale requirements; no such authority exists today.
- Visual equivalence after any future alternative provider is introduced.

## Decision

```text
Post-objective generic runtime feasibility = NOT ESTABLISHED
bounded provider safety contract           = PASS
Post quality equivalence                   = NOT PROVEN
Actual Product opt-in integration          = NOT STARTED
Product adoption                           = HOLD
current Product behavior                   = UNCHANGED
```

The next valid direction is an explicit architecture/design checkpoint for a
new coarse objective or offline assistance, not direct App integration. The
current Post diagnostic materializer remains research-only.

Fresh10/Fresh11/Fresh12 historical evidence and the Fresh12 canonical Human
Review result are unchanged. No new governed Fresh lineage, push, tag,
release, deploy, or publication was performed.
