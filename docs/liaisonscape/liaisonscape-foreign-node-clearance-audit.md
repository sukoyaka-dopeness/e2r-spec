# LiaisonScape Foreign-Node Clearance Audit

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-FOREIGN-NODE-CLEARANCE-FIX1`
- Scope: audit / diagnostic only

## Exact result

`NOT REPRODUCED - OBSERVED PROXIMITY IS NOT A CURRENT ROUTING CLEARANCE DEFECT`

The current production helper was evaluated against the Lighthouse stored
coordinates. No ordinary Relation route entered a foreign Node's existing
60-unit routing-influence region. The nearest representative was
`clara-maya` (`clara -> maya`) near foreign Node `lighthouse`: the minimum
sampled center distance was 87.3 units, or 55.3 units outside the existing
32-unit visible Node body radius. The route therefore clears both the body
and the routing influence region.

The final rendered curve is the same sampled quadratic geometry returned by
`routeGraphEdge`; no candidate/final-curve clearance gap was found. The
reported visual concern is therefore not sufficient evidence for a foreign-
node routing fix in the current stored sample.

## Pipeline inspection

`App.tsx` excludes the Relation's source and target IDs from the obstacle list
and passes every other graph Node position to `routeGraphEdge`. The helper in
`src/viewport.ts` generates the base route and deterministic offset
candidates, evaluates node-influence penetration, occupied-path overlap, and
label pressure, then selects the lowest existing score. Manual offsets return
before automatic selection; self-loops use a separate selector.

The relevant existing node-influence radius is 60 units and the visible
rounded Node geometry uses a 32-unit half extent. No new threshold or weight
was introduced. This preserves the established priority of obstacle safety,
parallel side preservation, occupied-path behavior, manual ownership, and
deterministic selection.

## Lighthouse measurement

The route was measured from the current English Lighthouse sample with
stored graph coordinates. The closest foreign Node for each ordinary route
was found by minimum distance over the helper's 41 route samples.

| Relation | Direction | Closest foreign Node | Center distance |
|---|---|---|---:|
| `clara-maya` | clara -> maya | `lighthouse` | 87.3 |
| `daniel-clara` | daniel -> clara | `lighthouse` | 94.4 |
| `beacon-lighthouse-installed-in` | beacon -> lighthouse | `authority` | 97.8 |
| `authority-lighthouse` | authority -> lighthouse | `daniel` | 102.1 |
| `clara-thomas-mentors` | clara -> thomas | `sofia` | 148.0 |
| `clara-thomas-supervises` | clara -> thomas | `lighthouse` | 148.0 |

The remaining ordinary Relations were also outside the influence region.
The two Clara/Thomas Relations retain their post-fix parallel separation;
the foreign-node audit did not identify a new clearance regression there.

## Synthetic and classification result

Existing synthetic production-helper tests already cover unrelated Nodes as
obstacles, route detours, node-influence rejection, parallel obstacle side
preservation, occupied paths, manual curves, and self-loops. The current
implementation selects a safer existing candidate when node-influence
pressure differs; no failing foreign-node regression could be produced from
the accepted geometry and existing rule set.

Root-cause classification: `NOT REPRODUCED`. Cases requiring a new visual
clearance threshold, a new score weight, candidate-generator redesign, or a
continuous final-curve solver are not justified by this evidence. Label
ownership and ordinary crossing remain separate issues.

## Scope and verification

No LiaisonScape runtime file, test, sample, CSS, Coordinate/Presentation
payload, schema, Core, Extension, Validator, or release metadata was changed.
No runtime commit was created. Reverse-endpoint normalization and parallel
obstacle side preservation remain CLOSED / NOT REGRESSED. Self-loop,
label, crossing, and NarrativeLine Display-Order work remain separate.

- Existing LiaisonScape baseline: 279/279 tests passed.
- Lint: PASS.
- Build: PASS.
- `git diff --check`: PASS.
- Temporary diagnostics were command-line only and left no repository files.
- Protected dirty `sessions/E2R-Session-0052.md` was preserved.
- No push, tag, release, deploy, or publication was performed.
