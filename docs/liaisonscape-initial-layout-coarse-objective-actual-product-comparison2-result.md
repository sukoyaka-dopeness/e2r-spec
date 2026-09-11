# LiaisonScape Initial-Layout Coarse Objective Actual Product Comparison 2

- Date: 2026-09-11
- Status: USER EVIDENCE RECORDED; COARSE-SPECIFIC VISUAL GAP OPEN
- Scope: diagnostic Actual Product comparison only

## Result

The user compared the current baseline, `post-structural-relaxation-v1`, and
`coarse-objective-prototype-v1` on the existing Actual Product inspection
surface. The following observations are recorded as user evidence:

- `post-structural-relaxation-v1` remains the preferred presentation.
- The coarse candidate follows the same broad visual improvement direction as
  Post; directional visual agreement is `OK`.
- Node placement was generally natural.
- Label readability was acceptable for the comparison.
- Node--Edge spacing was sufficient.
- Overall graph cohesion and viewport usability were `OK`.
- Titanic parallel-Edge intrusion remains a known routing/presentation track;
  it is not attributed to the coarse initial-layout candidate.

The user has not yet confirmed whether the coarse candidate introduces a new
coarse-specific visual defect. That absence is therefore not recorded as a
PASS or as evidence of Post equivalence.

## Decision boundary

```text
Post visual preference                 = CONFIRMED
coarse directional visual agreement   = OK / USER OBSERVED
coarse unique-defect absence          = UNCONFIRMED
bounded provider follow-up            = JUSTIFIED DIAGNOSTICALLY
Product default integration           = NOT STARTED
Product adoption                       = HOLD
```

The bounded provider branch may continue as a diagnostic prototype because the
coarse candidate is visually aligned with the observed improvement direction.
That evidence does not authorize changing Product initial-placement authority,
weights, search policy, or fallback semantics.

## Inspection surface

The existing surface remains available for the one unresolved user check:

```text
http://127.0.0.1:4178/e2r-liaison-scape/experimental/product-evaluation-seam/geometry-inspection1/?fixture=lighthouse&locale=en&candidate=coarse-objective-prototype-v1
```

Use `candidate=current`, `candidate=post-structural-relaxation-v1`, or
`candidate=coarse-objective-prototype-v1`; change `fixture` and `locale` as
needed. The surface uses an in-memory diagnostic clone and does not persist
coordinates or modify the Product Dataset.

## Preserved boundaries

- No Product default adoption or runtime integration was performed.
- Routing, Relation-label, connector, Self-loop, and parallel-Edge behavior
  were not changed.
- Fresh10/Fresh11/Fresh12 historical evidence and the Fresh12 canonical Human
  Review result were not changed.
- No new governed Fresh lineage, push, tag, release, deploy, or publication
  was performed.
