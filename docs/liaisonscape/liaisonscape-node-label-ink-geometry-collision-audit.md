# LiaisonScape Node-label Ink Geometry Collision Audit

Date: 2026-09-01

Task: `E2R-LIAISONSCAPE-NODE-LABEL-INK-GEOMETRY-COLLISION-AUDIT1`

Result class: **G2 — tighter deterministic bounds relieve some routes but do
not remove the main `Clara` / `Archive` `mentors` corridor.**

Exact result: **2 — per-line text bounds relieve some label pressure but do not
remove the main Clara / Archive corridor.**

Primary decision: **D — the result is Relation- and locale-dependent; more
isolation is required.**

## Scope and safety boundary

This was a read-only collision-geometry audit in the detached worktree
`C:/Users/extra/E2R/e2r-liaison-scape-label-ink-collision-audit`, based on
LiaisonScape `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`.

No Production runtime, routing policy, collision contract, label rendering,
sample, preview, coordinate, parallel-edge, self-loop, or connector behavior
was changed. The existing routing-preview worktree and localhost server were
not modified. The dirty JA and EN Lighthouse samples were read-only inputs.
The user's clean `Final-label feedback` image and favorable-initial-placement
observation remain strong manual context, not automated acceptance evidence.

The temporary harness used the current `dataset.ts` and `viewport.ts` helpers
directly. It used no second router, no copied route scorer, no copied occupied
path solver, and no candidate-set modification.

## Current source contract

The source audit found the following current boundary:

- `placeNodeLabel` deterministically derives a label envelope from the current
  text estimate, with width clamped to `48..180` and a `+12` width allowance;
  height is `20`, `34`, or `48` according to description lines.
- Text width is an application estimate based on Unicode Han/Hiragana/Katakana
  classification (`10` units for those characters and `6.5` otherwise). No
  Canvas `measureText` or browser text measurement is used by this path.
- Candidate label placement evaluates 32 directions and considers occupied
  labels, other Nodes, and sampled route paths.
- `minimumPathToLabelRectDistance` treats each supplied `LabelRect` as an
  axis-aligned rectangle and checks the 41 sampled route points. A distance of
  zero is the current hard intersection predicate.
- `routeGraphEdge` receives the label rectangles directly. Its current label
  score adds `100000` for a hard intersection and a quadratic halo penalty for
  distances below `20`, alongside Node and occupied-path signals.
- The rendered Node label is SVG text with a CSS stroke; the `label-drag-hit`
  rectangle is transparent and is an interaction target, not a painted label
  background. Connector geometry is a separate SVG line and was not changed.

Therefore the current full rectangle is a conservative application collision
envelope. It is not an exact glyph-outline or browser-measured ink region.

## Audited geometry modes

The route helper was run unchanged with three temporary collision-region
representations:

| Mode | Collision region |
|---|---|
| A | Current full `LabelRect` from `placeNodeLabel` |
| B | One deterministic tight content rectangle per Node, formed from the
estimated rendered text lines without the current envelope allowance |
| C | Separate deterministic per-line rectangles, using the existing
`truncateNodeText`, `wrapNodeLabel`, Unicode width estimate, and SVG baseline
positions |

Modes B and C are diagnostics only. They do not claim to measure actual
rendered ink. The per-line rectangle height was a deterministic text-line
approximation; CSS stroke, font rasterization, browser text metrics, and true
glyph outlines were not treated as measured collision geometry.

Mode D (rendered ink bounds) and Mode E (true glyph outlines) were not measured.
No font parser, browser-specific text API, or new dependency was introduced.

## Baseline gate

Mode A reproduced the required current JA winners:

| Relation | Current offset |
|---|---:|
| `clara-thomas-mentors` | -52 |
| `clara-thomas-supervises` | -76 |
| `sofia-archive` | -156 |
| `authority-lighthouse` | -24 |

Baseline gate: **PASS**. Each ordinary route evaluated the current 33-position
candidate sequence (`0` or base offset plus 32 signed 12-unit expansions).

## Primary `mentors` hard-region classification

The four required JA candidates were classified against A/B/C regions:

| Candidate | Clara | Archive | Lighthouse | Interpretation |
|---:|---|---|---|---|
| `+40` | HARD / HARD / HARD | HARD / HARD / HARD | HALO / HALO / HALO | Clara and Archive remain hard in estimated text regions |
| `+52` | HARD / HARD / HARD | HARD / HARD / HARD | HALO / HALO / HALO | Same main hard owners |
| `+64` | HARD / HARD / HARD | HARD / HARD / HARD | HARD / HALO / HALO | Lighthouse full-envelope hard area is reduced to halo |
| `-52` | CLEAR / CLEAR / CLEAR | CLEAR / CLEAR / CLEAR | CLEAR / CLEAR / CLEAR | Opposite-side control remains clear |

The order within each cell is `A / B / C`. In the EN topology, `Clara` is the
only focal hard owner for `+40`, `+52`, and `+64` in all three modes; Archive
and Lighthouse are clear. EN `-52` is full-rectangle Clara halo but clear in
B/C.

For JA, the `+40/+52` Clara and Archive intersections persist in B and C,
which classifies those observed hard collisions as **E0 — estimated text/ink
region**. No E1 case (tight content rectangle hard, per-line estimate clear)
was observed. JA `+64` Lighthouse changes from A hard to B/C halo and is
consistent with **E2/E3 — padding or empty-area effect unresolved**; this
experiment does not distinguish those two causes. The existence of this one
relief does not remove the primary Clara/Archive corridor.

For EN, Clara remains hard in B/C at all three positive candidates, so its
primary collision is also E0 under this deterministic estimate. The E0 label
means “inside the audit's estimated text-line region”; it is not a claim about
exact glyph ink.

## Route replay results

### JA

| Mode | `mentors` winner | Straight / curved | Ordinary route length | H2 | PNR / FNR | Hard route/label pairs |
|---|---:|---:|---:|---:|---:|---|
| A | -52 | 5 / 7 | 1513.914 | 4 | 1 / 1 | `sofia-archive | thomas` |
| B | -52 | 5 / 7 | 1513.914 | 4 | 1 / 1 | `sofia-archive | thomas` |
| C | -52 | 5 / 7 | 1496.128 | 4 | 1 / 1 | `sofia-archive | thomas` |

Mode B made no JA route-winner change. Mode C changed only
`authority-lighthouse` (`-24→-12`) and `sofia-archive` (`-156→-132`); it did
not change `mentors`, `supervises`, or the H2 identities. The minimum foreign
Node clearance was `23.492` in A/B and `19.149` in C.

### EN

| Mode | `mentors` winner | Straight / curved | Ordinary route length | H2 | PNR / FNR | Hard route/label pairs |
|---|---:|---:|---:|---:|---:|---|
| A | -64 | 6 / 6 | 1459.126 | 7 | 0 / 2 | none |
| B | -52 | 6 / 6 | 1442.528 | 7 | 1 / 0 | none |
| C | -52 | 6 / 6 | 1442.528 | 7 | 1 / 0 | none |

Modes B and C changed the same four selected route identities relative to A:
`clara-thomas-mentors`, `clara-thomas-supervises`, `sofia-archive`, and
`thomas-maya-friends`. The H2 identities were unchanged. Minimum foreign Node
clearance improved from `18.615` to `23.492`, and final route/Node-label
conflicts fell from two to zero, but provisional conflicts increased from zero
to one. The main EN Clara hard corridor remained.

## Short-edge check

Using a diagnostic chord threshold of `<=160` graph units, the only current
short curved JA ordinary route was `authority-lighthouse` (chord `121.851`,
offset `-24`) in A/B. C reduced it to `-12`; this is one lower-curvature
short-edge case. No EN route met this threshold while curved in A/B/C.

The result does not establish that a tighter collision region solves the
user's broader short-edge or node-motion presentation concern. Temporal drag,
curvature preservation during Node movement, and final-label feedback remain
separate questions.

## Determinism and cross-locale boundary

Modes A/B/C are pure-data diagnostics based on the current application text
estimator and stored layout. They are browser-independent and reproducible in
the Node test runtime for the same source, inputs, and mode. They remain
font-dependent at the presentation level because actual SVG text rendering is
not represented by the estimator. No OS-specific or browser-specific ink
measurement was introduced, so D/E determinism was not tested.

The same broad contract is usable in JA and EN, but the result is not
locale-invariant: Japanese multiline dimensions expose a Lighthouse envelope
relief while retaining Clara/Archive hard owners; English width and topology
retain Clara hard pressure and change four route winners under B/C.

## Boundaries kept separate

- Parallel-edge same-direction curvature remains a separate bundle-spacing
  question; this audit did not change parallel policy.
- Final-label feedback remains manual context and was not adopted or combined
  with the A/B/C collision modes.
- Connector attachment and occlusion remain the separate
  `E2R-LIAISONSCAPE-NODE-LABEL-CONNECTOR-VISIBILITY-AUDIT1` checkpoint.
- Initial placement, self-loop orientation, label rendering, and temporal drag
  behavior remain unmodified.

## Decision and next checkpoint

The evidence does not justify replacing the current full rectangle in
Production. Deterministic tighter regions are promising for selected routes,
but the main JA and EN `mentors` hard owners remain in the estimated text
region, while the route and conflict changes are locale- and Relation-
dependent.

The selected next bounded checkpoint is exactly:

`E2R-LIAISONSCAPE-PARALLEL-EDGE-BUNDLE-SPACING-AUDIT1`

It is selected only and is not started by this record. Its purpose is to
separate parallel bundle side/spacing effects from the remaining label
collision frontier and from the user's favorable-initial-placement manual
observation.

## Cleanup and verification boundary

The temporary collision-region adapter, observer inputs, generated JSON, and
detached worktree were removed after recording the result. The Stage A research
commit was not included in this Stage B commit. The preview worktree,
localhost server, dirty samples, seeded positions, and protected
`E2R-Session-0052.md` were preserved.
