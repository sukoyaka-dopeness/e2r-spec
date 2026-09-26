# LiaisonScape Parallel Edge Label-pressure Isolation Experiment

Date: 2026-09-01
Checkpoint: `E2R-LIAISONSCAPE-PARALLEL-EDGE-LABEL-PRESSURE-ISOLATION-EXPERIMENT1`

Result: **CASE 3 / EXACT RESULT 3 / DECISION C**

**Hard label collision starts the parallel side switch, while soft halo and
sibling occupied-path pressure amplify the final one-sided bundle.** The
experiment does not authorize relaxing hard collision, changing halo values,
or adding parallel-specific Production exceptions.

## Scope and safety boundary

This was a bounded diagnostic experiment in the detached worktree
`C:/Users/extra/E2R/e2r-liaison-scape-parallel-label-pressure-isolation`,
using LiaisonScape source `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` and copies
of the main worktree's dirty JA/EN Lighthouse samples.

The canonical App routing sequence was preserved: fixed/self routes first,
canonical ordinary Relation order, predecessor `occupiedPaths`, provisional
Node labels, the live `routeGraphEdge`, its actual candidate generation, and
its existing safe/fallback semantics. The temporary observer instrumented the
live candidate loop; it did not implement a second router.

No Production runtime, routing/scoring policy, candidate set, label geometry,
label placement, collision contract, initial placement, Final-label feedback,
parallel slot, physical-side policy, occupied-path rule, Node pressure,
curvature, self-loop, connector, sample, preview, coordinate, or release data
was changed. Hard-colliding diagnostic winners are explicitly not called
safe.

## Baseline gate

The current replay reproduced the preceding audit exactly for the primary
Clara/Thomas group:

| Locale | `mentors` | `supervises` | base slots |
|---|---:|---:|---|
| JA | `-52` | `-76` | `+40 / -40` |
| EN | `-64` | `-88` | `+40 / -40` |

The group is `clara → thomas`; `mentors` has canonical index `0`, and
`supervises` has index `1`. Both base slots have center `0`, separation `80`,
opposite physical sides, and `C_norm = 0.2440` for the stored chord length
`163.908`. Baseline gate: **PASS**.

## Source semantics confirmed

- A parallel group is sorted by Relation ID for slot assignment.
- App routing order sorts by source ID, target ID, then Relation ID, so
  `mentors` is routed before `supervises`.
- The current candidate sequence is the base offset followed by 32 signed
  12-unit expansions: 33 candidates in total.
- The current score includes Node pressure, occupied-path overlap, label hard
  intersection (`100000`), the label halo penalty, and a small absolute-offset
  tie-break.
- A separate list retains side-preserving candidates only when they are
  existing-safe (`Node = 0`, no occupied overlap, and label pressure `= 0`).
  The side-preserving safe winner is returned only when that list is nonempty;
  otherwise the global-best candidate is returned.
- The canonical physical-side sign is based on endpoint IDs. It is not
  changed by this experiment.

## Base-side inventory and fallback

For `mentors`, no current-semantics base-side candidate was safe in either
locale. The base-side candidate frontier was:

| Locale | base-side hard owners | base-side halo owners | base-side hard-safe candidate | base-side current-safe candidate | fallback class |
|---|---|---|:---:|:---:|---|
| JA | Clara, Archive | Lighthouse | NO | NO | F1 hard collision exhausts base side |
| EN | Clara | — | NO | NO | F1 hard collision exhausts base side |

Clara is the source endpoint label. Archive and Lighthouse are foreign Node
labels. In JA the hard blocker is a Clara-plus-Archive combination; no single
owner omission restored the base side. In EN, omitting Clara alone restored the
diagnostic base-side choice. Omitting Archive or Lighthouse had no material
effect. These omissions are diagnostic and leave the original full-label
geometry hard-conflicting.

For the later `supervises` edge, the base-side candidate itself was not hard
blocked, but nearby candidates were affected by Clara halo and/or the already
routed `mentors` path. Its secondary fallback classes are JA F3 (occupied
path) and EN F5 (halo plus occupied path).

## Candidate trace

Every primary call recorded all 33 candidates from the live loop. The key rows
below show the causal frontier; scores are the live scores in graph units.

| Locale / Relation | offset | hard owners | halo owners | occupied | label pressure | score | side | safe |
|---|---:|---|---|:---:|---:|---:|:---:|:---:|
| JA `mentors` | `+40` | Clara, Archive | Lighthouse | NO | `204600.46` | `204600.86` | base | NO |
| JA `mentors` | `+52` | Clara, Archive | Lighthouse | NO | `207002.28` | `207002.80` | base | NO |
| JA `mentors` | `-52` | — | — | NO | `0` | `0.52` | opposite | YES |
| JA `supervises` | `-40` | — | Clara | YES | `29.40` | `10029.80` | base | NO |
| JA `supervises` | `-52` | — | — | YES | `0` | `10000.52` | base | NO |
| JA `supervises` | `-76` | — | — | NO | `0` | `0.76` | base | YES |
| EN `mentors` | `+40` | Clara | — | NO | `100000` | `100000.40` | base | NO |
| EN `mentors` | `+52` | Clara | — | NO | `100000` | `100000.52` | base | NO |
| EN `mentors` | `-64` | — | — | NO | `0` | `0.64` | opposite | YES |
| EN `supervises` | `-40` | — | Clara | NO | `1313.08` | `1313.48` | base | NO |
| EN `supervises` | `-52` | — | Clara | YES | `12.18` | `10012.70` | base | NO |
| EN `supervises` | `-88` | — | — | NO | `0` | `0.88` | base | YES |

Thus the first edge (`mentors`) switches side because hard collision removes
the useful base-side set. The later edge receives that actual path in
`occupiedPaths`; sibling overlap then moves it farther outward.

## Four label-pressure modes

Mode A is current hard-plus-halo semantics. Mode B retains hard collision but
omits only halo contribution. Mode C retains halo contribution but omits hard
contribution; any hard collision in C is unsafe diagnostic output. Mode D
omits all label pressure. Node, occupied-path, candidate, physical-side, and
route-order semantics remain unchanged.

### JA primary group

| Mode | `mentors` | `supervises` | center | separation | minimum sampled separation | physical sides | hard-safe primary bundle |
|---|---:|---:|---:|---:|---:|---|:---:|
| A Current | `-52` | `-76` | `-64` | `24` | `5.883` | same / same | YES for selected routes |
| B hard-only | `-52` | `-76` | `-64` | `24` | `5.883` | same / same | YES for selected routes |
| C halo-only | `+64` | `-52` | `6` | `116` | `37.432` | opposite | NO; `mentors` hard-conflicts |
| D no-label | `+40` | `-40` | `0` | `80` | `29.765` | opposite | NO under original labels |

Mode C's `+64` `mentors` route still intersects Lighthouse, Clara, and
Archive hard rectangles when checked against the original labels. It is not a
safe replacement.

### EN primary group

| Mode | `mentors` | `supervises` | center | separation | minimum sampled separation | physical sides | hard-safe primary bundle |
|---|---:|---:|---:|---:|---:|---|:---:|
| A Current | `-64` | `-88` | `-76` | `24` | `5.066` | same / same | YES for selected routes |
| B hard-only | `-52` | `-76` | `-64` | `24` | `5.883` | same / same | YES for selected routes |
| C halo-only | `+40` | `-64` | `-12` | `104` | `34.861` | opposite | NO; `mentors` hard-conflicts Clara |
| D no-label | `+40` | `-40` | `0` | `80` | `29.765` | opposite | NO under original labels |

Hard-only therefore does not restore the balanced bundle in either locale.
Halo-only restores opposite sides, but only by selecting hard-conflicting
geometry. No-label restores the base arrangement but is not a safe label
semantic.

## Cascade and owner controls

The canonical current sequence provides the cascade directly:

- JA: `mentors +40 → -52`; then `supervises -40 → -76` because the earlier
  `mentors` path occupies the nearer candidates.
- EN: `mentors +40 → -64`; then `supervises -40 → -88` for the same reason,
  with additional Clara halo pressure at intermediate candidates.
- Removing only the sibling occupied path in the preceding audit changed JA
  `supervises -76 → -52` and EN `-88 → -64`, while `mentors` stayed on its
  opposite-side fallback. The bundle then collapsed to the same offset rather
  than becoming balanced.

Owner-only omission confirms the ownership boundary:

| Locale | omit Clara | omit Archive | omit Lighthouse |
|---|---|---|---|
| JA | no primary change | no primary change | no primary change |
| EN | `mentors +40`, `supervises -40` | no primary change | no primary change |

JA requires the combined endpoint Clara and foreign Archive pressure to be
  removed. EN's material owner is the Clara endpoint label. Lighthouse is a
  JA halo owner at the base-side candidates but is not individually causal.

No held-predecessor rerun was needed: the first-edge side switch, the
current-versus-hard-only distinction, the halo-only hard-unsafe recovery, and
the prior sibling-only ablation independently expose the predecessor cascade.

## Ordinary single-Relation control

`sofia-archive` was used as a bounded single-Relation control because its
stored chord is `221.617`, its current offset is nonzero in both locales, and
its current route has label pressure. It is not a clean safety baseline:

| Locale | Current offset | current label owner signal | Hard-only offset | No-label offset |
|---|---:|---|---:|---:|
| JA | `-156` | hard Thomas | `+60` (hard Archive, Clara halo) | `+60` (hard Archive, Clara halo) |
| EN | `+36` | Clara halo | `+36` (Clara halo) | `+60` (hard Clara) |

This shows that label pressure is not exclusive to parallel Relations. The
parallel-specific finding is the additional sibling cascade and the resulting
bundle-level side/readability failure.

## Full ordinary-graph bounded check

Mode B was material outside the primary pair and therefore was not treated as
a harmless presentation improvement:

| Locale / mode | straight / curved | ordinary route length | H2 | PNR / FNR | changed Relations from A |
|---|---:|---:|---:|---:|---|
| JA A | `0 / 12` | `1513.914` | `4` | `1 / 0` | — |
| JA B | `0 / 12` | `1449.785` | `7` | `0 / 1` | `authority-lighthouse`, `sofia-archive` |
| EN A | `0 / 12` | `1459.126` | `7` | `0 / 1` | — |
| EN B | `0 / 12` | `1435.190` | `7` | `0 / 0` | `mentors`, `supervises`, `thomas-maya-friends` |

H2 is the strict sampled interior ordinary-route crossing count. PNR/FNR are
provisional/final Node-label route conflict pairs. The JA hard-only mode adds
three H2 identities and one final conflict despite its lower route total. EN
changes one unrelated ordinary Relation and changes the primary pair without
reducing H2. Route length is therefore not a sufficient objective here.

## Result and design decision

- Result case: **CASE 3** — hard collision starts the side switch, and soft
  halo / sibling occupancy amplify the final one-sided bundle.
- Exact result: **3 — MIXED: HARD LABEL COLLISIONS FORCE THE FIRST SIDE SWITCH
  WHILE SOFT LABEL AND SIBLING PRESSURE AMPLIFY THE FINAL ONE-SIDED BUNDLE.**
- Primary decision: **C — HARD + HALO CASCADE.**
- Fallback: JA and EN `mentors` are F1; `supervises` is secondary F3/F5.
- Hard safety relaxed: **NO**.
- Hard-only label semantics adopted: **NO**; it does not restore the primary
  bundle and has global regressions.
- Production semantic change justified: **NO**.
- Parallel issue solved: **NO**.
- Final-label feedback adopted: **NO**.
- Base slot, slot spacing, physical-side normalization, label geometry,
  label placement, halo constants, and occupied-path semantics changed: **NO**.

The selected next bounded checkpoint is exactly:

`E2R-LIAISONSCAPE-PARALLEL-EDGE-HARD-SIDE-SWITCH-CASCADE-AUDIT1`

That checkpoint should separate the first-edge hard-side switch from the
second-edge occupied/halo amplification. It must retain hard safety and must
not introduce a `parallel ⇒ ignore labels` special case. Initial Placement,
Final-label feedback, ink geometry, self-loop routing, and temporal motion
remain separate.

## Cleanup and verification

The temporary label-pressure mode, live candidate observer, owner omission
hooks, copied samples, generated result JSON, and detached worktree were
removed after recording the result. Main dirty samples, the routing-preview
worktree, localhost, and protected `E2R-Session-0052.md` were preserved.
