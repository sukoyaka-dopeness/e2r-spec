# LiaisonScape Parallel Edge Bundle Spacing Audit

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-PARALLEL-EDGE-BUNDLE-SPACING-AUDIT1`
Result: **CASE 3 / EXACT RESULT 3 / DECISION C**

**Label pressure shifts an otherwise balanced parallel bundle.** The current
Lighthouse replay also exhibits the CASE 6 symptom (both ordinary parallel
Routes select the same physical side), but the bounded label ablation shows
that this is a pressure/fallback outcome, not a base-slot or reverse-endpoint
normalization defect.

## Scope and safety boundary

This was a read-only parallel ordinary-edge bundle audit. The authoritative
Production source was LiaisonScape `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
in the detached worktree
`C:/Users/extra/E2R/e2r-liaison-scape-parallel-bundle-spacing-audit`.
The dirty JA and EN Lighthouse samples from the main worktree were copied into
that worktree as read-only inputs.

No Production runtime, routing policy, slot spacing, base offset, candidate
set, candidate step/range/count, physical-side policy, occupied-path policy,
label placement, Node pressure, score weight, curvature scoring, initial
placement, Final-label feedback, self-loop, connector, animation, or sample
was changed. The existing routing-preview worktree and localhost server were
preserved.

The temporary observer called the live `routeGraphEdge` candidate loop. It did
not copy or reimplement the route scorer. The sibling and label ablations were
diagnostic inputs only; neither is a Production proposal.

## Source contract

The current source establishes these boundaries:

- `buildEntityGraph` groups only Relations with the same directed source and
  target, sorts each group by Relation ID, and assigns zero-based
  `parallelIndex` and `parallelCount`.
- `App.tsx` routes fixed/self/overlapping edges first, then ordinary edges by
  source ID, target ID, and Relation ID. `clara-thomas-mentors` therefore
  routes before `clara-thomas-supervises`.
- The Clara-to-Thomas group has `mentors` index `0` and `supervises` index
  `1`, with nominal offsets `+40` and `-40`. The canonical physical-side sign
  is derived from the endpoint IDs, not Relation array order.
- Each ordinary parallel call enumerates the base offset plus 32 signed
  12-unit expansions: 33 candidates total. It first records the global best
  score, and separately records safe candidates that preserve the base side.
  It returns the best side-preserving safe candidate when one exists, and
  otherwise falls back to the global best candidate.
- The live score is Node influence multiplied by `100`, occupied-path overlap
  `10000`, label hard intersection `100000` plus the current halo penalty, and
  a small absolute-offset tie-break. Strict `<` comparisons retain the first
  equal winner.
- `occupiedPaths` is appended after every routed edge. The sibling can
  therefore influence the later member of the same parallel group.

## Primary group and base geometry

The Lighthouse samples contain one ordinary parallel group:

| Relation | source → target | index / count | base offset |
|---|---|---:|---:|
| `clara-thomas-mentors` | `clara → thomas` | 0 / 2 | `+40` |
| `clara-thomas-supervises` | `clara → thomas` | 1 / 2 | `-40` |

The stored JA and EN positions have the same Clara/Thomas chord length,
`163.908`, so both base slots have `C_norm = 40 / 163.908 = 0.2440`.
The base bundle center is `0`, separation is `80`, and its minimum sampled
route-to-route distance is `29.765`. The base geometry is opposite-sided and
balanced for both locales. The absolute offset is relatively visible on this
short chord, but the label ablation returns exactly to these slots; this audit
does not justify changing slot geometry.

The two beacon self-Relations are not ordinary parallel edges and were kept
out of the bundle inventory. Self-loop orientation remains a separate
checkpoint.

## Current live selection

The following values use the actual current candidate loop and current
provisional Node-label rectangles.

| Locale / Relation | base | selected | delta | base side kept | selected score | selected Node | selected occupied | selected label |
|---|---:|---:|---:|:---:|---:|---:|:---:|---:|
| JA `mentors` | `+40` | `-52` | `-92` | NO | `0.52` | `0` | NO | `0` |
| JA `supervises` | `-40` | `-76` | `-36` | YES | `0.76` | `0` | NO | `0` |
| EN `mentors` | `+40` | `-64` | `-104` | NO | `0.64` | `0` | NO | `0` |
| EN `supervises` | `-40` | `-88` | `-48` | YES | `0.88` | `0` | NO | `0` |

Consequently, both Relations select the negative physical side:

| Locale | base center | current center | base separation | current separation | minimum sampled separation | class |
|---|---:|---:|---:|---:|---:|---|
| JA | `0` | `-64` | `80` | `24` | `5.883` | P3, same physical side |
| EN | `0` | `-76` | `80` | `24` | `5.066` | P3, same physical side |

The current bundle is not an excessively separated bundle: its separation is
smaller than the nominal `80`. It is instead a one-sided, near-overlapping
bundle caused by one member crossing its nominal side and the later member
being pushed outward by sibling occupancy.

## Candidate trace and causal signal

All four primary calls recorded the complete 33-candidate sequence. The key
candidate rows are:

| Locale / Relation | candidate | hard label owners | halo owners | occupied overlap | label pressure | score | result |
|---|---:|---|---|:---:|---:|---:|---|
| JA `mentors` | `+40` | Clara, Archive | Lighthouse | NO | `204600.46` | `204600.86` | base-side rejected |
| JA `mentors` | `+52` | Clara, Archive | Lighthouse | NO | `207002.28` | `207002.80` | base-side rejected |
| JA `mentors` | `-52` | — | — | NO | `0` | `0.52` | selected fallback |
| JA `supervises` | `-40` | — | Clara | YES | `29.40` | `10029.80` | sibling/halo rejected |
| JA `supervises` | `-52` | — | — | YES | `0` | `10000.52` | sibling rejected |
| JA `supervises` | `-76` | — | — | NO | `0` | `0.76` | selected |
| EN `mentors` | `+40` | Clara | — | NO | `100000` | `100000.40` | base-side rejected |
| EN `mentors` | `+52` | Clara | — | NO | `100000` | `100000.52` | base-side rejected |
| EN `mentors` | `-64` | — | — | NO | `0` | `0.64` | selected fallback |
| EN `supervises` | `-40` | — | Clara | NO | `1313.08` | `1313.48` | halo rejected |
| EN `supervises` | `-52` | — | Clara | YES | `12.18` | `10012.70` | sibling/halo rejected |
| EN `supervises` | `-88` | — | — | NO | `0` | `0.88` | selected |

For `mentors`, all useful base-side candidates are label-unsafe, while the
opposite-side `-52`/`-64` candidate is immediately safe. This exhausts the
side-preserving-safe set and activates the documented global-best fallback.
For `supervises`, the nominal side is retained, but sibling occupancy rejects
the nearer candidates and produces the additional outward movement.

## O1 sibling-only occupied ablation

O1 removed only the other member of the Clara/Thomas group from
`occupiedPaths` while preserving unrelated occupied paths, Node obstacles,
labels, candidates, and physical-side semantics.

| Locale | `mentors` current → O1 | `supervises` current → O1 | center current → O1 | separation current → O1 | minimum separation current → O1 |
|---|---|---|---|---|---|
| JA | `-52 → -52` | `-76 → -52` | `-64 → -52` | `24 → 0` | `5.883 → 0` |
| EN | `-64 → -64` | `-88 → -64` | `-76 → -64` | `24 → 0` | `5.066 → 0` |

Sibling occupied-path pressure is therefore real for the later edge's outward
movement, but it is not the primary cause of the observed one-sided bundle.
Removing it does not restore opposite sides or improve bundle readability; it
causes the two selected routes to collapse onto the same offset. No occupied
semantics change is justified.

## L1 label-pressure-only ablation

L1 removed only the Node-label rectangles from the two primary parallel calls.
Node obstacles, occupied paths, candidate enumeration, physical-side sign, and
route ordering remained unchanged.

| Locale | `mentors` | `supervises` | center | separation | minimum separation | physical sides |
|---|---:|---:|---:|---:|---:|---|
| JA | `+40` | `-40` | `0` | `80` | `29.765` | opposite / preserved |
| EN | `+40` | `-40` | `0` | `80` | `29.765` | opposite / preserved |

This is a strong single-signal result: removing label pressure restores the
balanced base bundle in both locales. It also isolates the source of the CASE
6 symptom: the same-side result is produced only after label pressure removes
the `mentors` base-side safe candidates. L1 is diagnostic and does not relax
the Production collision contract.

## Node pressure, crossings, and locale boundary

The selected primary candidates have zero Node-overlap pressure in both
locales. Current/O1/L1 global presentation diagnostics were:

| Locale / mode | straight / curved | ordinary route length | H2 | PNR |
|---|---:|---:|---:|---:|
| JA Current | `0 / 12` | `1513.914` | `4` | `1` |
| JA O1 | `0 / 12` | `1497.307` | `4` | `1` |
| JA L1 | `0 / 12` | `1480.497` | `4` | `2` |
| EN Current | `0 / 12` | `1459.126` | `7` | `0` |
| EN O1 | `0 / 12` | `1435.158` | `7` | `0` |
| EN L1 | `0 / 12` | `1401.773` | `7` | `0` |

H2 identities are unchanged by both bounded controls. L1 introduces one
additional JA provisional route/Node-label conflict, so the lower route total
is not a safety or acceptance improvement. The route-length decrease is
reported only as context; total route length is lower priority than collision
safety, physical-side correctness, bundle readability, and local curvature.

The topology is the same in JA and EN. The dominant label owners and pressure
magnitude differ by locale (JA Clara/Archive/Lighthouse versus EN Clara), so
the causal category is cross-locale but not numerically locale-invariant.

## Decision

- Result case: **CASE 3**, with a CASE 6 same-side manifestation.
- Exact result: **3 — DIRECTION SUPPORTED: LABEL PRESSURE SHIFTS AN OTHERWISE
  BALANCED PARALLEL BUNDLE.**
- Primary decision: **C — LABEL PRESSURE.**
- Base slot spacing change justified: **NO**.
- Sibling occupied-path semantics change justified: **NO**.
- Physical-side normalization change justified: **NO**; the accepted
  source/target convention is restored by L1 when the pressure signal is
  absent. The current same-side fallback remains a separate label-pressure
  frontier, not evidence that reverse-endpoint normalization failed.
- Normalized-curvature Production score change justified: **NO**.
- Parallel issue solved: **NO**.

The selected next bounded checkpoint is exactly:

`E2R-LIAISONSCAPE-PARALLEL-EDGE-LABEL-PRESSURE-ISOLATION-EXPERIMENT1`

Its purpose is to isolate the label-pressure contract for parallel bundles
before considering any side-preserving fallback or bundle-spacing change.
Initial Placement, Final-label feedback, self-loop routing, and temporal
motion remain separate. The user's favorable `Experimental — Final-label
feedback` presentation remains manual context and was not mixed into this
current-source replay.

## Cleanup and verification boundary

The temporary observer, O1/L1 hooks, copied samples, generated JSON/console
artifacts, and detached worktree were removed after recording this result.
The main LiaisonScape dirty JA/EN samples, the routing-preview worktree, the
protected `E2R-Session-0052.md`, and the existing localhost server were
preserved.
