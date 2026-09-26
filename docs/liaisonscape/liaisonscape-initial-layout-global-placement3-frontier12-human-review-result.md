# LiaisonScape Initial Layout Global Placement 3 Frontier-12 Human Review Result

Date: 2026-09-13

Status: USER HUMAN ACCEPTANCE = UNCONFIRMED; CODEX BROWSER INSPECTION RECORDED; USER JUDGMENT REQUIRED

## Scope and evidence boundary

This checkpoint opened all twelve G3/reference and Frontier-12/candidate URLs
on the development-only review surface, at the same browser size, and waited
for the normal Product App surface to finish loading. The page banner
identified the active arm for each navigation. The graph was rendered through
the normal Dataset open, initial placement, viewport fit, routing, Relation-
label, and Node-label path.

The observations below are Codex browser inspection only. They are not an
external human visual acceptance and do not replace the user's judgment. The
previous G3 Human ACCEPT remains unchanged; it is not inherited by Frontier-12.

## Machine preflight

The existing matched machine evidence remains the preflight reference:

| Cell | G3 -> Frontier-12 hard metrics (cross / label hits / overlap) | `labelNear20` G3 -> Frontier-12 | Selected output |
| --- | --- | ---: | --- |
| Lighthouse EN | 0/0/0 -> 0/0/0 | 0 -> 0 | same |
| Lighthouse JA | 0/0/0 -> 0/0/0 | 0 -> 0 | same |
| Titanic EN | 0/0/0 -> 0/0/0 | 0 -> 0 | same |
| Titanic JA | 0/0/0 -> 0/0/0 | 2 -> 0 | different |
| Apollo EN | 0/0/0 -> 0/0/0 | 0 -> 0 | same |
| Apollo JA | 0/0/0 -> 0/0/0 | 2 -> 2 | same |

These metrics establish review eligibility only. In particular, Titanic JA's
`labelNear20` improvement is not treated as proof of readability.

## Browser inspection matrix and user-review status

The following status is intentionally left `UNCONFIRMED` until the user
returns a visual judgment for each cell.

| Cell | Codex browser inspection | User human judgment |
| --- | --- | --- |
| Lighthouse EN | Both arms loaded normally and appeared readable with no obvious candidate-only clipping, overlap, or routing defect. | UNCONFIRMED |
| Lighthouse JA | Both arms loaded normally and appeared readable with no obvious candidate-only defect; Japanese labels remained visible. | UNCONFIRMED |
| Titanic EN | Both arms loaded normally with the same apparent central Titanic structure; no obvious candidate-only clipping or overlap was seen. | UNCONFIRMED |
| Titanic JA | The G3 view appeared more spread at a higher fitted scale, while Frontier-12 appeared substantially more compact at a lower fitted scale. No obvious clipping or overlap was seen, but the changed output creates a real readability/spacing trade-off that requires user judgment. | UNCONFIRMED |
| Apollo EN | Both arms loaded normally and appeared visually equivalent in this inspection; no obvious candidate-only defect was seen. | UNCONFIRMED |
| Apollo JA | Both arms loaded normally and appeared visually equivalent in this inspection; no obvious candidate-only defect was seen. | UNCONFIRMED |

## Presentation-track separation

No candidate-only defect was observed in this browser inspection. Any
parallel Edge/long Relation-label, Self-loop angle, or connector presentation
behavior remains a downstream presentation/routing track. The fact that a
particular crossing was not visible in these cells does not resolve that
track, and no such issue is used to reject Frontier-12 here.

## Disposition

```text
Lighthouse EN: UNCONFIRMED - browser inspection showed normal readable rendering; user judgment pending
Lighthouse JA: UNCONFIRMED - browser inspection showed normal Japanese rendering; user judgment pending
Titanic EN: UNCONFIRMED - browser inspection showed no obvious candidate-only defect; user judgment pending
Titanic JA: UNCONFIRMED - changed compact output and fit-scale trade-off require direct user comparison
Apollo EN: UNCONFIRMED - browser inspection showed no obvious candidate-only defect; user judgment pending
Apollo JA: UNCONFIRMED - browser inspection showed no obvious candidate-only defect; user judgment pending

Frontier-12 candidate-only defect: none observed in Codex browser inspection; not a human judgment
Overall Frontier-12: PENDING USER HUMAN REVIEW
```

Frontier-12 cannot be recorded as `ACCEPT`, `RETUNE`, or `REJECT` from this
checkpoint alone. The review surface is left available for the user's direct
comparison. A positive canonical review would remain limited to these six
cells; dense scaling, a production-native provider, Product default/adoption,
and Release acceptance would remain separate decisions.

No Product behavior, Dataset, routing/presentation authority, persistence,
round-once semantics, or historical evidence was changed.
