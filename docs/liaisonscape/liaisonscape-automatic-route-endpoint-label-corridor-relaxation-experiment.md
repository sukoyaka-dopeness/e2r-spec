# LiaisonScape Endpoint Label Corridor Relaxation Experiment

Date: 2026-09-01

## Scope

This one-shot, controlled experiment used the existing `placeNodeLabel` helper
and the live `routeGraphEdge` implementation only. It changed no production
runtime, score, candidate space, label placement, sample, or preview. Parallel,
self-loop, drag, and global feedback behavior were excluded.

`placeNodeLabel` has 32 ordered angular candidates. Its optional previous
placement adds movement cost; omitting that argument for the target owner alone
is possible without changing any other label. Its route-aware evaluation and
the normal Node-label connector remain in use.

## Controlled one-shot result

The preceding corridor-blocked fixture was reused. One endpoint-owned 48×20
label rectangle on the horizontal corridor makes the live router select a
nonzero route; source-only and target-only give the same result. With both
labels present, moving only one target leaves the other blocker and does not
recover a lower-curvature result.

| chord | current offset | P0 target offset | P1 target displacement | P1 reroute offset |
|---:|---:|---:|---:|---:|
| 80 | 48 | 48 | 57.3 | 0 |
| 120 | 72 | 72 | 65.3 | 0 |
| 160 | 96 | 96 | 75.1 | 0 |
| 240 | 72 | 72 | 97.8 | 72 |
| 320 | 72 | 72 | 122.7 | 72 |

P0 is the helper with the current rectangle as previous placement. P1 omits
only the target owner’s previous-placement preference; its selected candidate
opens the source-only corridor and live reroute becomes straight through chord
160. The connector follows the selected candidate. Foreign Node and occupied
path pressure are absent in this fixture.

## Result

Existing candidates can open a corridor for a **single** endpoint blocker, and
target-owner-only removal of previous-placement preference is required in the
tested short chords. This is `CASE 4`: controlled relaxation works, but no
Lighthouse ordinary Relation inventory or qualifying real case was established
in this bounded experiment. It does not justify production behavior or an
interactive preview.

The selected next checkpoint is
`E2R-LIAISONSCAPE-LIGHTHOUSE-LOCAL-CURVATURE-BLOCKER-INVENTORY1`.

Temporary fixture edits were removed. No LiaisonScape commit was made.
