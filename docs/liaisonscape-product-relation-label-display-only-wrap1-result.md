# LiaisonScape Product Relation-label Display-only Automatic Wrap Capacity Experiment 1

Date: 2026-09-16
Status: `B/C PRIMARY / D QUALIFIED / F RESIDUAL CAPACITY OPEN`

## Purpose and boundary

This checkpoint evaluates a display-only automatic wrap for derived Product
Relation-label presentation. It does not create a new Initial Placement, alter
Structural Placement, reopen Parallel/Incident architecture, or move routing,
endpoint-plan, Self-loop, or final Relation-label authority.

The tested policy is bounded to at most two lines. English uses whitespace-first
breaking with bounded character fallback; Japanese uses character fallback.
When the second line cannot retain all content, the derived display uses an
ellipsis. Dataset Relation names remain unchanged. The same derived geometry
controls SVG text, the drag hit area, and the Product label collision envelope.

The four diagnostic arms were:

- `current-one-line`: current Product spacing and one-line labels;
- `reference-one-line`: prior Product-owned widened bundle spacing plus fine
  normal offsets, with one-line labels;
- `reference-wrap`: the same reference capacity with display-only wrapping;
- `orientation-wrap`: the reference capacity plus the prior orientation-aware
  stagger diagnostic and display-only wrapping.

The wrap policy was `{ maxLines: 2, maxLineWidth: 132, minimumWidth: 104,
routeInset: 120, minimumDeficit: 12 }`. It is a diagnostic input only and is
not a Product default or provider.

## Source/evidence starting point

The immediately preceding orientation-aware checkpoint recorded large
horizontal one-line deficits while leaving labels one-line. The normal-offset
checkpoint established that bundle capacity is the primary mechanism and that
fine normal candidates are a qualified secondary refinement. Current source had
no automatic Relation-label wrapping. This checkpoint therefore tests only the
next presentation-layer hypothesis and reuses the prior reference capacity; it
does not retune route spacing.

## Evidence by fixture family

| Fixture/control | Display result | Quality signal and residual |
| --- | --- | --- |
| Horizontal English | `ab-long` and `ab-longer` become two lines; line balances `0.36` and `0.80`; one-line deficits `103` and `116` fall to `0` and `5.5` | ownership ambiguity improves from `1` to `0`; no crossing, occupied conflict, label overlap, Node collision, or Node/Relation overlap was introduced |
| Horizontal Japanese | both long labels become two character-broken lines; line balances `0.78` and `0.67`; deficits fall from `68` and `58` to `0` | foreign-closer count falls from `1` to `0`, but owner ambiguity remains `1`; wrap helps association pressure but does not fully solve it |
| English token/punctuation | long token and punctuation label use bounded character fallback and two lines | labels remain finite and bounded, but `supports:regional/restoration coordination` breaks as `supports:region` / `al/restoration…`; this is a readability trade-off, not a general acceptance result |
| Vertical | no automatic wrapping | ownership ambiguity remains `2` and foreign-route hits remain `2`; the residual is not a horizontal one-line capacity problem |
| Diagonal | no automatic wrapping | ownership ambiguity remains `2`; the reference and orientation arms retain one foreign-route hit; continuous diagonal/routing presentation remains the relevant residual |
| Reverse/same-direction primary and Self-loop control | no labels wrap | widened/fine reference behavior remains readable and the Self-loop remains unchanged; wrapping neither solves nor perturbs the Self-loop track |
| Higher multiplicity | no labels wrap | known ordinary-route churn remains `1`; label wrapping does not remove this routing coupling |
| Mixed incident and shared endpoint | no labels wrap | reference ownership is improved/closed in the artifact, but this is inherited capacity evidence, not a wrap-specific win |
| Lighthouse EN/JA | no labels wrap under the tested threshold | no gross regression in the public samples; ordinary and Self-loop behavior remains unchanged |

Across the artifact, all tested arms retained the same route ID sets. The wrap
arm therefore changes derived label geometry, not Product ordinary route
selection. The generated metrics reported zero crossings, occupied-path
conflicts, label-overlap pairs, Node collisions, and Node/Relation overlaps for
the tested synthetic controls. The remaining vertical and diagonal signals are
therefore not hidden by a new collision failure; they remain unresolved
responsibility signals.

## Geometry and capacity interpretation

Wrapping materially reduces tangential footprint for long horizontal labels,
but increases the normal footprint from `22` to `34`. The displayed width is
derived from the longest displayed line plus padding, and the two-line height
is used consistently by placement, hit testing, and collision checks.

The English long-label control shows why this is not yet a general Product
policy: one label has a weak `0.36` line balance and the longer label retains a
small `5.5` span deficit after wrapping. The Japanese controls are better
balanced, but owner ambiguity remains. Punctuation and long-token fallback can
produce visibly awkward breaks. These are presentation-capacity and legibility
constraints, not reasons to move final label semantics into Structural
Placement.

## Actual Product inspection

The actual Product surface was inspected through the diagnostic preview seam for
horizontal English, horizontal Japanese, English token/punctuation, vertical,
diagonal, reverse/same-direction primary, shared endpoint, and Lighthouse EN/JA
controls. The wrapped English and Japanese labels rendered as two lines without
obvious clipping or broken hit geometry. Vertical, diagonal, shared-endpoint,
and Lighthouse controls loaded and remained interactive/read-only as expected.
The primary smoke retained readable reverse-direction and Self-loop geometry.
The token/punctuation control visibly confirmed the expected awkward character
fallback, so it is useful as a negative/readability control rather than a
candidate for formal acceptance. Browser console error/warning output was
empty. This was a small smoke check only, not formal visual acceptance.

## Responsibility attribution

- **Relation-label presentation:** owns line breaking, displayed text geometry,
  ellipsis, line height, hit area, and label collision geometry. This
  checkpoint demonstrates a bounded mitigation for long horizontal labels.
- **Product ordinary routing:** remains authoritative. Ordinary-route churn in
  higher multiplicity and the vertical/diagonal route proximity signals remain
  outside wrapping.
- **Parallel/Incident allocation:** remains `CLOSED`. The reference capacity is
  reused; no new bundle or incident allocator was introduced.
- **Endpoint-plan/capacity:** remains authoritative. Wrap does not allocate
  endpoint lanes or move endpoint planning into Structural Placement.
- **Structural Placement:** unchanged. No Node geometry, topology, or stored
  coordinate is modified.
- **Self-loop routing:** unchanged and remains an independent later track.
- **Dataset/authored state:** unchanged. No Dataset text, stored/authored
  Coordinates, persistence, dirty state, Save Coordinates, manual curvature,
  or manual Relation-label semantics were changed.
- **Coupled residuals:** vertical and diagonal association, foreign-route
  pressure, route proximity, and line-break legibility require Product routing
  and label-presentation reasoning together; wrapping alone does not close
  them.

## Decision

Classification: **`B/C PRIMARY / D QUALIFIED / F RESIDUAL CAPACITY OPEN`**.

- **A is not established:** wrapping is not a general Product quality solution.
- **B is established:** the clearest benefit is horizontal long-label capacity.
- **C is established as a qualified direction:** the benefit appears after the
  previously established bundle widening and fine normal candidate capacity;
  this checkpoint does not justify wrapping on the current arm alone.
- **D is qualified:** two-line height and line-balance/ellipsis trade-offs are
  real, although no new hard collision was observed in this bounded artifact.
- **E is rejected:** horizontal English and Japanese controls show a meaningful
  capacity benefit.
- **F remains:** vertical/diagonal association and routing pressure remain, so
  structural or routing capacity is still insufficient in those controls.

The current architecture should not be locally retuned by simply increasing
offsets or forcing more wrapping. If this line of work continues, it should be
a separate bounded Product label-presentation contract with explicit
legibility, line-balance, remaining-span, and route-clearance gates. It must
remain downstream of Structural Placement and ordinary routing. No formal
adoption, Product default, production provider, or Human Review candidate is
earned by this checkpoint.

Human Review: `NOT READY`.
Product default/adoption: `HOLD`.
Production provider: `NOT ESTABLISHED`.
Initial Layout Release blocker: `OPEN`.
Adaptive Initial Placement Cascade: not entered.
Fast Initial Placement + High-quality Auto Layout: not formally adopted.

## Reproducibility and validation

Added a diagnostic wrap policy, English/Japanese/token fixtures, a four-arm
artifact, an Actual Product preview seam, a smoke index, and focused tests.
Historical result documents were not edited. Session log uses the new
`E2R-Session-0087.md` file under the agreed one-contiguous-objective policy.

Validation completed for this checkpoint:

- wrap artifact regenerated from current source;
- focused display-only wrap tests passed `6/6`;
- Actual Product smoke completed across the controls listed above;
- browser console errors/warnings: none observed;
- full LiaisonScape suite passed `569/569`;
- LiaisonScape lint and production build passed;
- E2R specification validation passed;
- `git diff --check` passed in both repositories. The test harness emitted its
  existing WebSocket port-in-use warning while still passing all tests.

## Changed files

LiaisonScape changes:

- `src/App.tsx`
- `src/graph-presentation.ts`
- `src/viewport.ts`
- `tools/product-relation-label-display-only-wrap1.ts`
- `tests/product-relation-label-display-only-wrap1.test.ts`
- `experimental/product-relation-label-display-only-wrap1/fixtures.mjs`
- `experimental/product-relation-label-display-only-wrap1/result-summary.json`
- `experimental/product-evaluation-seam/product-relation-label-display-only-wrap1/index.html`
- `experimental/product-evaluation-seam/product-relation-label-display-only-wrap1/main.tsx`
- `experimental/product-evaluation-seam/product-relation-label-display-only-wrap1/visual-evidence-index.md`

Specification changes:

- this checkpoint result;
- `sessions/E2R-Session-0087.md`;
- one synchronized roadmap section.

No knowledge-base candidate is required: this is repository-scoped checkpoint
evidence, not reusable cross-repository knowledge.
