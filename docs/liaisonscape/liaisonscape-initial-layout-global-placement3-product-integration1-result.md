# LiaisonScape Initial Layout Global Placement 3 Product Integration

Date: 2026-09-12

## Decision

```text
Product integration                         = PASS (bounded development-only opt-in)
Product default adoption decision           = READY FOR PRODUCT DEFAULT ADOPTION DECISION
Product default behavior                    = UNCHANGED
Initial Layout Release blocker              = OPEN
Stage 1 presentation reduction              = NOT STARTED
```

The decision is limited to the safety and integration gate. It does not adopt
Global Placement 3 as the Product default and does not constitute release
acceptance.

## Integration seam and authority

The normal development App root path now accepts the explicit query
`initial-layout=global-placement3` together with the existing canonical
acceptance-fixture query. The App obtains positions from the development-only
`/__acceptance-layouts` endpoint, whose search reads directly from
`../e2r-spec/examples`. The returned positions are placed into the existing
`open` -> parse/accept -> initial placement -> presentation -> viewport path;
the ECR3 comparison surface is not used for this evidence.

The endpoint is allowlisted to `lighthouse`, `titanic`, and `apollo-11`,
`en`/`ja`, and the `global-placement3` arm. It is not a production fixture
source or a new Product sample policy. Endpoint failure resolves to the
existing Product placement path rather than preventing Dataset open.

The candidate supplies only coordinate positions. Routing, Relation-label,
Node-label, Self-loop, connector, glyph/CSS, and viewport presentation remain
Product-owned downstream authority. The integrated arm enables the accepted
round-once final-coordinate canonicalization after true final selection; it
does not feed rounded coordinates back into the search.

## Six-cell normal Product-path evidence

Each cell was opened at the normal App root with the development-only opt-in
and canonical fixture query. The timing diagnostic reported
`bounded-provider/global-placement3/prototype/completed`, the graph rendered,
and `Save node coordinates` was disabled on the clean coordinate-less open.
The range reflects development-server loading and the App's development
double-open behavior, so it is integration evidence rather than a release
benchmark.

| Fixture / locale | Entities / relations | Fit scale | Observed stable open range |
| --- | ---: | ---: | ---: |
| Lighthouse EN | 10 / 14 | 0.51 | 2.61-3.65 s |
| Lighthouse JA | 10 / 14 | 0.51 | 1.99-3.34 s |
| Titanic EN | 13 / 12 | 0.41 | 2.14-3.52 s |
| Titanic JA | 13 / 12 | 0.71 | 1.96-3.34 s |
| Apollo EN | 9 / 11 | 0.71 | 2.03-2.81 s |
| Apollo JA | 9 / 11 | 0.71 | 2.08-2.79 s |

Within the Product timing diagnostic, initial placement was below 0.5 ms and
the downstream presentation phase was approximately 146-433 ms. The remaining
development-path time includes the bounded layout endpoint generation and
transport (approximately 1.08-1.34 s in the observed runs).

The prior user-authoritative Global Placement 3 visual acceptance remains the
human evidence for the six cells. No new candidate-only defect appeared in
this normal-root integration inspection. The accepted crossing improvement
and the known parallel-edge/long-label and Self-loop presentation boundaries
remain as previously classified; they are not absorbed by Initial Layout.

## Coordinate authority and safety audit

- Coordinate-less Dataset: the explicit opt-in can provide
  `bounded-provider/global-placement3` positions. The result is Derived and
  the Dataset is clean; no automatic coordinate save occurs.
- Fully stored Coordinates: the override is admitted only when there are no
  stored coordinates. Stored coordinates therefore continue through the
  existing `stored-coordinates` authority and are not overwritten by the
  candidate.
- Mixed Coordinates: the candidate override is likewise not admitted. The
  existing Product mixed-coordinate completion path remains authoritative.
- Fallback: a missing, failed, or incomplete layout response falls through to
  the existing placement derivation; it does not block Dataset open.
- Dirty state and Save Coordinates: the integration does not change the
  coordinate writer, baseline comparison, dirty-state handling, or Save
  Coordinates behavior. The existing exact same-payload Save/reopen evidence
  remains PASS: saved coordinates reopen as stored authority and reopen does
  not itself create dirty/pending work. This checkpoint did not relabel a
  canonical fixture reload as persistence evidence.

## Round-once audit

Matched local searches for all six fixture/locale cells enabled
`round-once` after final selection. All retained the
`global-spacing-only` family, produced integer final positions, and showed no
family drift. The maximum coordinate delta from the unrounded arm was
0.52-0.67 graph units across the six cells. This is finalization evidence, not
an additional visual acceptance claim.

## Validation and boundaries

LiaisonScape validation passed after the integration changes:

- `npm.cmd test`: 371/371 PASS
- `npm.cmd run lint`: PASS
- `npm.cmd run build`: PASS
- `git diff --check`: PASS (only existing line-ending warnings)

E2R-SPEC validation passed with `npm run validate`. Canonical examples,
historical Fresh evidence, Fresh12 canonical Human Review, and unrelated
working-tree changes were not modified. No push, tag, release, deploy, or
publication was performed.

The release blocker remains open because this bounded development opt-in
proves integration safety, not production runtime readiness or default
adoption. The next checkpoint may make a Product default decision; this one
does not.
