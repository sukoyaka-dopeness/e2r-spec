# LiaisonScape Initial Layout Frontier Adaptive Dense Cost Reduction 2

Date: 2026-09-13

## Decision

```text
quality-safe progressive early stop        = NOT ESTABLISHED
density-aware whole-frontier retention     = quality-retaining in tested dense cases
cheap-stratum progressive probe            = canonical quality drift observed
G3-quality discovery order                  = k7-7 22/22; k6-8 11/18; k8-8 1/4
production-native provider                 = NOT ESTABLISHED
checkpoint disposition                     = PIVOT from finer frontier early-stop rules
Product default / adoption                 = HOLD / UNCHANGED
Initial Layout Release blocker             = OPEN
```

This was a diagnostic research checkpoint. The existing G3 and Frontier-12
human evidence was not inherited by the new progressive probe. No Product
integration or adoption decision was made.

## Question and matched audit

The retained `frontier-adaptive-12` arm was kept as the quality/runtime
reference. It evaluates the normal bounded portfolio when the cheap frontier
is small, and retains the whole cheap frontier when it is larger than 12.
This is the only tested adaptive rule that retained the G3 output and hard
metrics in all three dense cases.

To test whether the dense frontier could be opened progressively, the
diagnostic-only `frontier-progressive-12` arm first completed the best cheap
structural stratum and then filled from the remaining cheap frontier. The
matched full audit recorded where the G3-quality source occurred in the
deterministic frontier order. These are discovery-order positions, not a claim
that the source had that rank under the full presentation score:

| Case | Cheap pool | Cheap frontier | G3 source discovery position |
| --- | ---: | ---: | ---: |
| `synthetic:k7-7` (14 Nodes / 49 Relations) | 44 | 22 | 22 / 22 |
| `synthetic:k6-8` (14 Nodes / 48 Relations) | 44 | 18 | 11 / 18 |
| `synthetic:k8-8` (16 Nodes / 64 Relations) | 44 | 4 | 1 / 4 |

The `k7-7` result is the important counterexample: the G3-quality source is
last in the tested frontier order, so an early-stop rule based only on the
first cheap stratum has no conservative way to know that the remaining
frontier is unnecessary. Skipped candidates were not classified as
non-improving.

## Progressive probe results

Hard metrics are `routed crossings / Relation-label hits / labelNear20 /
overlap pairs`. Position fingerprints are the selected output fingerprints
from the matched run.

| Cell | Full calls | Runtime | Initial stratum / widened strata | Selected fingerprint | Hard metrics |
| --- | ---: | ---: | --- | --- | --- |
| Lighthouse EN | 5 | 0.30 s | 1 / 2 | `6cf83087b4f4` | 0 / 0 / 3 / 0 |
| Lighthouse JA | 5 | 0.31 s | 1 / 2 | `6cf83087b4f4` | 0 / 0 / 3 / 0 |
| Titanic EN | 12 | 0.44 s | 12 / 0 | `a0998d0e1b40` | 0 / 0 / 1 / 0 |
| Titanic JA | 12 | 0.46 s | 12 / 0 | `a0998d0e1b40` | 0 / 0 / 0 / 0 |
| Apollo EN | 5 | 0.37 s | 1 / 2 | `734841885ea9` | 1 / 1 / 1 / 0 |
| Apollo JA | 5 | 0.36 s | 1 / 2 | `734841885ea9` | 1 / 1 / 1 / 0 |
| `synthetic:k7-7` | 12 | 3.20 s | 12 / 0 | `ab9eadb27b53` | 129 / 8 / 20 / 0 |
| `synthetic:k6-8` | 12 | 3.04 s | 12 / 0 | `e57b55ea355d` | 123 / 4 / 15 / 0 |
| `synthetic:k8-8` | 4 | 3.35 s | 4 / 0 | `ad62aea419c0` | 229 / 16 / 32 / 0 |

The canonical reference was Frontier-12 at 12 calls. Its corresponding hard
metrics were 0/0/0/0 for Lighthouse EN/JA and Titanic EN/JA, 0/0/0/0 for
Apollo EN, and 0/0/2/0 for Apollo JA. Therefore the progressive arm is not
quality-safe: it introduces Lighthouse label-nearness drift, Titanic EN drift,
and Apollo EN/JA route/crossing drift. The dense probe happened to retain the
G3 selected output and metrics, but that does not repair the canonical
regression or establish a general stopping bound.

## Adaptive retention and runtime position

The density-aware adaptive reference retained G3 output and hard metrics in
the three dense cases:

| Case | G3 calls / runtime | Adaptive calls / runtime | Adaptive hard metrics |
| --- | --- | --- | --- |
| `k7-7` | 44 / 8.46--8.73 s | 22 / 6.6--6.8 s | 129 / 8 / 20 / 0 |
| `k6-8` | 44 / 8.46 s | 18 / 5.50 s | 123 / 4 / 15 / 0 |
| `k8-8` | 44 / 13.94 s | 12 / 5.80 s | 229 / 16 / 32 / 0 |

This confirms that cheap frontier density can provide a bounded retention
policy, but it does not reduce the dense authoritative volume to the roughly
two-second planning direction. The progressive probe reduces calls further
in some cells, but its canonical visual drift makes the reduction unsuitable
as a quality-retaining candidate. No production-native provider formulation
was established.

## Research direction and boundaries

The disposition is `PIVOT` for finer progressive/uncertainty-driven frontier
rules. The evidence does not support a conservative early-stop condition from
the currently available cheap features and already evaluated presentation
results. The density-aware whole-frontier arm may remain as a diagnostic
reference, but further threshold tuning or smaller fixed portfolios should not
be treated as quality-safe without a new matched audit and human review.

Any future reduction should change the Stage-2 search architecture or expose a
stronger proof-bearing bound; it should not reclassify skipped candidates as
non-improving. The full Product presentation evaluator remains the quality
authority. Routing, Relation-label, Node-label, Self-loop, and connector
authority remain downstream presentation responsibilities.

No Product default/adoption, canonical Dataset, stored/mixed/coordinate-less
authority, round-once finalization, persistence, dirty-state, Save Coordinates
semantics, or presentation authority was changed. No production Worker/provider
architecture, Actual Product human review, push, release, deploy, or
publication was performed. The new progressive candidate therefore requires
human review if it is ever reconsidered; it is not ready for that gate based on
the current machine evidence.

## Validation

- LiaisonScape targeted locality/presentation tests: 19/19 PASS.
- LiaisonScape full test suite: PASS (the run completed without test failures;
  the existing WebSocket port-in-use diagnostic remained non-fatal).
- `npm run lint`: PASS.
- `npm run build`: PASS.
- LiaisonScape `git diff --check`: PASS.
- E2R-SPEC validation and diff check are required after this record is added.
