# LiaisonScape Apollo 11 Route Curvature Inspection Result

Checkpoint: `E2R-LIAISONSCAPE-APOLLO-ROUTE-CURVATURE-INSPECTION1`

Date: 2026-09-08

Status: bounded, non-authoritative diagnostic inspection; no Product selection
or governed evidence execution

## Finding

The current router does not simply curve every ordinary edge without cause.
Its `routeGraphEdge()` candidate space includes a straight offset-`0`
candidate and evaluates node influence, occupied paths, and provisional label
pressure. However, its automatic score has no direct route-length, bend, or
global true-crossing term; the final route can therefore be locally safe while
being a globally unnecessary detour.

On the Apollo 11 Product-seed control, six of eleven ordinary routes were
curved. A route-level comparison against the same route endpoints found:

- three curved routes whose straight candidate was blocked by another Node's
  route-influence radius;
- three curved routes whose straight candidate was Node-clear;
- two of those three were also clear of the measured final Node-label bounds;
- one clear route, `entity-10` (`Saturn V -> Columbia`), had a `36`-unit curve
  offset, a `1.462x` path-length ratio, and no observed crossing or final-label
  benefit over its straight candidate; and
- `entity-3` had only a `24`-unit offset, but its curve reduced the measured
  crossings against the other current routes from `4` to `3`, so it is not
  safe to classify all curvature as unnecessary.

The result supports a bounded straightness preference for routes whose direct
candidate is clear, but does not justify unconditional straight-route
priority.

## Method and boundary

The audit used the current Product route output from the prior Apollo 11 EN
bounded experiment and the current `src/viewport.ts` route geometry semantics.
For every route, it compared the selected quadratic geometry with a diagnostic
straight candidate using the same endpoints. It measured sampled path length,
curve offset, minimum distance to other Node centers, final Node-label bounds,
and intersections with the other currently selected route samples.

This is a route-isolation diagnostic: replacing one route can change occupied
path state and downstream label placement. The results are therefore evidence
for candidate selection experiments, not a Production acceptance result.

## Route classification

| Route | Curve offset | Detour ratio | Straight Node state | Straight label state | Crossings: current / straight | Interpretation |
| --- | ---: | ---: | --- | --- | ---: | --- |
| `entity-1` Armstrong -> NASA | `-60` | `1.079x` | blocked (`51.4`) | clear | `4 / 1` | Curve is required for the tested Node-clearance policy; local routing does not minimize global crossing |
| `entity-3` Collins -> NASA | `24` | `1.004x` | clear (`75.6`) | clear | `3 / 4` | Small curve has measurable crossing value |
| `entity-4` Armstrong -> Eagle | `12` | `1.001x` | clear (`64.4`) | blocked (`0`) | `4 / 4` | Curve is plausibly label-driven |
| `entity-5` Aldrin -> Eagle | `-84` | `1.394x` | blocked (`16.2`) | clear by sampled distance | `4 / 0` | Direct path is invalid because of Node influence; crossing result alone is not actionable |
| `entity-8` NASA -> Saturn V | `-84` | `1.182x` | blocked (`15.0`) | clear by sampled distance | `4 / 2` | Direct path is invalid because of Node influence |
| `entity-10` Saturn V -> Columbia | `36` | `1.462x` | clear (`111.3`) | clear (`69.8`) | `0 / 0` | Strongest unnecessary-curvature candidate in this fixture |

The other five routes were straight or effectively straight in the selected
output. The straight comparison used current neighboring routes as context;
it did not assert that a full rerun would preserve every downstream route.

## Interpretation

### PROVEN

- The current route implementation has a straight ordinary-route candidate
  (`offset=0`) and a deterministic family of offset candidates.
- Its automatic score directly accounts for Node influence, occupied-path
  avoidance, provisional Node-label pressure, and a small absolute-offset
  preference.
- It does not directly account for total path length, bend count, or global
  true crossings.
- Apollo contains at least one curved route (`entity-10`) for which the
  diagnostic straight candidate is clear under the measured Node, label, and
  crossing checks.
- Apollo also contains a counterexample (`entity-3`) where a small curve
  lowers the measured crossing count.

### STRONGLY SUPPORTED

- A bounded straightness/detour preference can remove at least some unnecessary
  curvature without replacing the current routing system.
- The preference must be conditional on obstacle and final-presentation
  safety. Straightness alone is not a valid primary objective.
- The remaining Apollo routing issue is mixed: `entity-10` points to local
  over-avoidance or incomplete route-cost semantics, while `entity-3` points
  to a genuine crossing trade-off.

### UNRESOLVED

- Which local pressure caused the current scorer to choose the `entity-10`
  offset in the exact provisional-label and occupied-path state used during
  route derivation.
- Whether a straightness preference remains safe after a full downstream route
  and label rerun, especially in JA and other fixture roles.
- Whether the correct preference should be path length, detour ratio, bend
  count, or a lexicographic combination after hard safety checks.
- Whether global crossing arbitration should be added in the same bounded
  change or remain a separate phase.

## Interactive inspection

The temporary inspection surface allows edge-by-edge selection and comparison
of current and straight candidate geometry, with pan and zoom:

`C:/Users/extra/E2R/e2r-spec/work/apollo-routing-inspection.html`

It is non-authoritative and intentionally shows diagnostic geometry only. Its
script syntax check passed; no Product or historical evidence file was changed.

## Recommendation

Run one further bounded candidate experiment before changing Product code:

1. keep the current Product seed and route candidate generation;
2. add a conditional straightness/detour ordering only for candidates that pass
   the existing hard Node and occupied-path checks;
3. rerun the complete downstream relation-label and Node-label derivation;
4. reject any candidate whose final collision identities worsen, even when
   crossing or length improves;
5. include `entity-10` as a positive control and `entity-3` as a regression
   guard; and
6. inspect a small number of actual images before any wider fixture matrix.

No unconditional straight-route preference and no new routing system is
recommended at this checkpoint.

## Changes and validation

- Product source changed: **NO**.
- Product tests changed: **NO**.
- e2r-spec changed path: this result document only.
- Interactive inspection surface: temporary, untracked, non-authoritative.
- Fresh10/Fresh11/Fresh12 historical evidence: unchanged.
- Fresh12 canonical Human Review result: unchanged.
- New governed Fresh lineage: **NOT STARTED**.
- Push, tag, release, deploy, publication: **NOT PERFORMED**.
- Apollo route audit: **PASS**.
- Interactive surface script syntax check: **PASS**.
- Prior LiaisonScape tests: `309/309 PASS`.
- Prior LiaisonScape lint/build: **PASS**.
- Prior E2R-SPEC validation: **PASS**.
