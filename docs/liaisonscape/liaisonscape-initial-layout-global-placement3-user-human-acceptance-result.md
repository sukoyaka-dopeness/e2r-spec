# LiaisonScape Initial-Layout Global Placement 3 User Human Acceptance

Date: 2026-09-12

Status: USER HUMAN ACCEPTANCE = ACCEPT; ACCEPTED FOR NEXT BOUNDED PRODUCT-INTEGRATION CHECKPOINT; NOT PRODUCT DEFAULT OR RELEASE ACCEPTANCE

## Authority and scope

This is the authoritative human evidence for the Global Placement 3 visual
gate. It records the user's direct observation using the comparison URLs in
`liaisonscape-initial-layout-global-placement3-human-review-handoff.md`, not
the earlier Codex browser inspection. The reviewed arms were:

- ECR3 reference: `adaptive-post`;
- candidate: `global-placement3`, viewport-anisotropic `x=0.88`, `y=1.12`,
  structural-centroid based, with diagnostic Stage-2 bypass; and
- canonical Lighthouse, Titanic, and Apollo fixtures in EN and JA.

The user's overall judgment was that Global Placement 3 is nearly passing and
practically usable across the reviewed cells. The user specifically valued the
large reduction in visible crossings and found the candidate sufficiently
usable overall, including Titanic JA.

## User observations

| Review scope | User evidence |
| --- | --- |
| Lighthouse EN/JA | No candidate-only blocker was reported; the candidate was accepted as part of the six-cell overall review. |
| Titanic EN/JA | No candidate-only blocker was reported; Titanic JA was included in the positive overall usability judgment. |
| Apollo EN/JA | No candidate-only blocker was reported; the candidate was accepted as part of the six-cell overall review. |
| Crossings | The substantial reduction in visible crossings was a clear positive. |
| Titanic JA | The candidate was sufficiently practical and usable; the screen-space separation improvement was not merely machine evidence. |
| Parallel Edge + long Relation-label | A vertical parallel-Edge case with a horizontal long Relation-label remained hard to read. The user did not attribute this to Global Placement 3 Initial Layout. |
| Self-loop + ordinary Edge | No crossing was observed in this review, but the user considers this an unresolved presentation/routing concern rather than a solved problem. |
| Manual Relax | Local manual Relax did not sufficiently correct the parallel-Edge/long-label issue; this remains a separate presentation follow-up. |

## Attribution boundary

No Global Placement 3-specific Initial Layout blocker was identified by the
user. The parallel-edge/long-label readability issue belongs to a separate
presentation track, including possible parallel-edge spacing or
Relation-label staggering. The absence of a Self-loop/ordinary-Edge crossing
in this sample is not evidence that the routing problem is resolved.

These observations do not transfer routing, Relation-label, Node-label,
self-loop, connector, or rendering authority to Initial Layout.

## Decision

```text
USER HUMAN ACCEPTANCE                    = ACCEPT
scope                                    = visual gate for next bounded integration checkpoint
candidate-only Initial Layout blocker    = NONE OBSERVED
parallel Edge / long Relation-label      = SEPARATE PRESENTATION FOLLOW-UP
Self-loop / ordinary Edge crossing       = UNRESOLVED PRESENTATION/ROUTING TRACK
manual Relax as presentation remedy      = INSUFFICIENT; separate follow-up
Global Placement 3 next step             = MAY PROCEED TO BOUNDED PRODUCT INTEGRATION / RC EVIDENCE
Product default adoption                 = HOLD
Product default behavior                 = UNCHANGED
Initial Layout Release blocker           = STILL OPEN; NOT CLEARED BY THIS GATE
```

This acceptance does not authorize Product default adoption, release, or
Stage-2 full-presentation reduction. The next checkpoint may assess bounded
Product integration and release-candidate evidence while preserving the
existing default and the separate presentation issue boundaries.

## Preserved boundaries

- No Product default, adoption, persistence, or coordinate canonicalization
  change was made.
- Canonical sample Datasets were not changed.
- Routing, Relation-label, Node-label, Self-loop, connector, glyph, and CSS
  authority remain downstream Product responsibilities.
- Historical Fresh evidence, Fresh12 canonical Human Review, and governed
  lineage were not changed.
- No push, tag, release, deploy, or publication was performed.
