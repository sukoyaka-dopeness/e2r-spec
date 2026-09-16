# LiaisonScape Frontier Automatic Display Integration Candidate Staging 1

Date: 2026-09-16
Status: diagnostic / review-candidate staging; production default unchanged

## Result

Frontier-12 is now reachable through the existing development-only acceptance
layout seam for source-parity staging:

`?acceptance-fixture=lighthouse&acceptance-locale=en&initial-layout=frontier-12`

The seam loads the named coordinate-less acceptance Dataset and its Frontier
position artifact, then passes the complete position map through the existing
`initialLayoutOverride` path. It does not change the normal production path,
which remains `deriveActualProductInitialLayout` → `settleInitialPlacement`.

## Authority and lifecycle audit

| Case | Authority / provider | Frontier used? | Persistence / dirty state |
| --- | --- | --- | --- |
| coordinate-less normal open | current Product / `settleInitialPlacement` | no | derived only |
| coordinate-less dev staging | diagnostic override / Frontier-12 artifact | yes | derived only |
| complete stored Coordinates | stored-coordinates | no | existing stored authority |
| mixed Coordinates | current Product completion | no | existing mixed semantics |
| Dataset replacement / reopen | `acceptDataset` resets presentation refs and derives fresh initial layout | only if dev staging is requested again | no automatic Dataset write |
| locale change | same Dataset state and existing locale lifecycle | no implicit re-placement | no Dataset mutation |
| viewport fit/reset | viewport responsibility | independent | view state only |

The App reset path clears prior route/label snapshots, manual label state, and
other presentation state before accepting a replacement. Frontier staging is
therefore not allowed to leak across Dataset replacement. Stored or mixed
Coordinates still win before any diagnostic override because the override is
accepted only when the stored-coordinate set is empty and the position map is
complete for the opened graph.

## Presentation boundary

Frontier supplies only initial Node positions. Existing Product routing,
Parallel/Incident handling, endpoint planning, Relation-label placement,
Node-label placement, Self-loop geometry, manual route/label authority, and
Node-label recovery remain unchanged downstream. Automatic placement remains
derived and is not written to Coordinate data or treated as dirty work.

The acceptance layout endpoint already supports `frontier-12`; this checkpoint
connects the existing development URL parameter to that endpoint. No new
solver or candidate generation was added.

## Failure and fallback boundary

If the acceptance Dataset or Frontier layout request fails, the existing
acceptance loading failure path reports the failure; it does not silently claim
Frontier success. If a loaded diagnostic map is incomplete or non-finite, the
existing App guard rejects it and uses the normal current Product initial
layout path. This checkpoint does not add a new Fast fallback or change its
future internal/emergency positioning.

No Worker, scheduler, solver tuning, route/label authority change, Product
default switch, or persistence change was made.

## Review readiness

The seam is sufficient to prepare a formal visual review candidate using the
existing Frontier public/canonical and label-heavy fixture artifacts. It is not
itself Human Review, and no visual acceptance or production adoption is claimed
here. Dense runtime risk remains recorded rather than solved.

## Validation

- focused acceptance / initial-layout / graph-presentation tests: passed;
- full LiaisonScape suite: 577/577 passed;
- lint: passed;
- build: passed;
- `e2r-spec` validate: passed;
- `git diff --check`: passed.
