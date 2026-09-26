# LiaisonScape Product-Owned Orientation-Aware Parallel Label Capacity + Stagger Experiment 1

Date: 2026-09-16
Status: `DIAGNOSTIC ONLY / ORIENTATION SIGNAL USEFUL / VERTICAL STAGGER NOT GENERALLY ESTABLISHED / ONE-LINE HORIZONTAL CAPACITY OPEN`

## Purpose and boundary

This checkpoint continues `product-owned-bundle-local-joint-feasibility-v1`.
It tests whether the Product presentation layer can use a Relation-label
rectangle's local tangent/normal footprint and a bounded tangential label
offset to address label association without moving routing, final label
authority, endpoint planning, or Structural Placement.

The candidate is deliberately one-line only. It does not wrap, mutate Dataset
strings, change Node geometry, or alter stored/authored Coordinates. Cases where
the one-line label footprint exceeds the usable owner-route span are recorded as
future display-only wrap demand.

## Formulation

For each non-ordinary, non-Self-loop route, the diagnostic derives a local unit
tangent `t` and normal `n`, then projects the axis-aligned display rectangle:

`T = width * |t.x| + height * |t.y|`
`N = width * |t.y| + height * |t.x|`

The horizontal signal compares `T` with a bounded usable owner-route span after
endpoint allowance. The vertical signal adds a bounded stagger along the owner
route, weighted by the normal footprint and local verticality. Diagonal routes
use the same continuous projection; there is no horizontal/vertical binary
switch in candidate generation. The orientation name in the artifact is a
diagnostic classification only.

The previous bundle-local spacing map is held fixed. The orientation experiment
therefore has exactly one Product-authoritative evaluation per fixture and does
not hide a spacing retune inside the stagger result.

## Evidence

The artifact is
`experimental/product-owned-orientation-aware-label-capacity1/result-summary.json`
and the Product smoke index is
`experimental/product-evaluation-seam/product-owned-orientation-aware-label-capacity1/visual-evidence-index.md`.

| Fixture | Reference → orientation signal | Result |
| --- | --- | --- |
| primary reverse/same-direction + Self-loop | ambiguity `0 → 0`, foreign-closer `0 → 0`, churn `0` | four primary lanes remain 2:2; gamma/delta remain 1:1; Self-loop unchanged |
| higher multiplicity 5 | ambiguity `0 → 0`, ordinary churn `1 → 1` | no further gain; the existing ordinary-route coupling remains |
| mixed incident | ambiguity `0 → 0`, churn `0` | no regression and no additional measurable win |
| shared endpoint multiple bundle | ambiguity `1 → 0`, foreign-closer `1 → 0`, churn `0` | stagger removes the measured ownership residual at fixed `16/16`; this is a promising local signal, not a general adoption result |
| horizontal label capacity | ambiguity `1 → 1`, foreign-closer `1 → 0`, wrap demand `true` | tangential staggering improves foreign-route ordering, but `ab-long` and `ab-longer` have deficits about `184.3` and `197.3`; one-line display capacity is not established |
| vertical label capacity | ambiguity `2 → 2`, label overlap `0 → 0` | `-48, 0, +48` stagger is produced and visible, but no machine-quality improvement is established |
| diagonal label capacity | ambiguity `2 → 2`, label overlap remains `0` | continuous projection and `-24/+24` offsets remain smooth; no binary discontinuity or gross failure |
| Lighthouse EN | ambiguity `0 → 0`, foreign-closer `0 → 0`, churn `0` | no gross public-sample regression at Product Reset fit |

The selected spacing is unchanged from the bundle-local reference for every
fixture: primary `alpha/beta=20`, `gamma/delta=12`; higher `16`; mixed `24`;
shared `16/16`; horizontal and vertical `20`; diagonal `16`; Lighthouse `12`.
The search is therefore bounded to one combination per row, with no adaptive
spacing or grid variant.

## Actual Product smoke

The current, bundle-local reference, and orientation-aware candidates were
inspected on the Actual Product surface for the horizontal control. Vertical
and diagonal reference/candidate pairs and the primary current/reference/
orientation-aware control were also inspected after Reset view.

Observed:

- horizontal tangential offsets visibly separate the labels and improve their
  owner-route association, but the two long labels still exceed the one-line
  usable span; this is a presentation/display-capacity residual;
- vertical labels move to distinct along-edge positions, but the reference is
  already readable and the machine ambiguity remains;
- diagonal labels remain visually smooth under continuous projection;
- primary lane balance, reverse-direction traceability, ordinary cycle, and
  Self-loop presentation remain intact;
- no gross route, Node collision, label-overlap, framing, or interaction
  failure was observed in the smoke.

This smoke check is not formal visual acceptance and does not create a Human
Review candidate.

## Responsibility attribution

### Structural Placement

No new Structural Placement defect was established. The controls use fixed
positions from the preceding research and the candidate changes only Product
presentation inputs. Node geometry remains outside this checkpoint.

### Parallel / Incident allocation

The architecture remains `CLOSED`. Lane generation, reverse physical-side
semantics, and endpoint-plan authority remain unchanged. The primary and mixed
controls show that the existing bundle-local reference can preserve side
ordering without reopening allocation.

### Ordinary routing

Ordinary routing remains Product-owned. The higher-multiplicity churn of one
ordinary route remains visible in both reference and orientation-aware arms;
stagger does not erase that coupling. No ordinary route authority moved into
Structural Placement.

### Relation-label placement / presentation

The useful new signal belongs here: label footprint projection and bounded
along-route staggering can improve local ownership, especially on the
horizontal and shared-endpoint controls. It is not yet a general quality
improvement because vertical ambiguity does not change and horizontal long
labels exceed one-line capacity.

### Endpoint-plan / capacity

Endpoint and bundle capacity remain Product-owned. The tangent/normal rows are
coarse capacity diagnostics, not a new endpoint-plan authority. The horizontal
deficits show that some cases require a later display-only wrap formulation or
another bounded presentation response; widening Structural Placement is not the
appropriate conclusion.

### Coupling

The remaining coupling is between bundle geometry, owner-route span, label
footprint, ordinary-route churn, and shared endpoint demand. Holding spacing
fixed makes this clear: stagger can remove one shared-endpoint ownership
residual, but cannot make a long one-line label fit a short owner route and
cannot remove higher-multiplicity ordinary churn.

## Decision

Outcome: **B/C combined**.

- **B — orientation-aware label capacity is a valid diagnostic direction, but
  vertical stagger is not generally established as a quality solver and
  horizontal one-line capacity remains open.**
- **C — bounded Product presentation formulation is still required for any
  future adoption; the current candidate is not a uniform winner.**

Continue with a narrowly scoped Product presentation/display-capacity study if
needed, especially a display-only wrap checkpoint. Do not adopt wrapping here,
do not increase global spacing, do not reopen Parallel/Incident architecture,
do not move routing or final label authority into Structural Placement, and do
not advance Adaptive Initial Placement Cascade.

Human Review: `NOT READY`; no new candidate meets the evidence bar.
Product default/adoption: `HOLD`.
Production provider: `NOT ESTABLISHED`.
Initial Layout Release blocker: `OPEN`.

## Reproducibility and validation

- Added a deterministic tangent/normal capacity and stagger module.
- Added a development-only per-Relation stagger seam to the existing Product
  presentation path.
- Added horizontal, vertical, and diagonal diagnostic fixtures.
- Added the bounded artifact generator, Actual Product preview seam, visual
  smoke index, and focused artifact tests.
- Dataset content, serialization/export, persistence, dirty-state, Save
  Coordinates, manual placement, manual curvature, and manual label semantics
  are unchanged.
- `node --experimental-strip-types tools/product-owned-orientation-aware-label-capacity1.ts` passed and regenerated the artifact.
- `npm.cmd run lint` passed.
- Focused orientation tests passed: 5/5.
- Full LiaisonScape suite passed: 558 tests, 0 failures.
- e2r-spec `npm run validate` passed.
- Actual Product smoke completed on the current Vite surface.
- `git diff --check` and `npm run validate` remain required final gates.

This document is a new checkpoint result; prior historical result documents are
not rewritten.
