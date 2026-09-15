# LiaisonScape Product Relation-label Normal-offset Granularity + Parallel Bundle Capacity Attribution Experiment 1

Date: 2026-09-16
Status: `B PRIMARY / C QUALIFIED SECONDARY / FOREIGN-SIBLING PRESSURE CONFIRMED / COLLISION-ENVELOPE RETUNE NOT ESTABLISHED`

## Purpose and source-grounded starting point

This checkpoint re-evaluates the Relation-label detachment observed in the
Product surface using the current repository source. `placeEdgeLabel(...)`
currently generates normal candidates `[0, -24, 24, -40, 40]` at arc-position
candidates derived from `[20, 16, 24, 12, 28, 8, 32, 4, 36]`. Candidate score is:

`labelOverlap * 100 + nodeOverlap * 10000 + edgeOverlap * 500 + preference + movementCost`

`edgeOverlap` counts route sample points inside the candidate rectangle with a
horizontal padding of `4` and vertical half-height `15`. The owner route is
excluded from `otherEdgePaths`; all other routed edges are potential foreign
obstacles. Before this checkpoint the trace exposed only fingerprints, so this
experiment added development-only candidate details and the foreign-route index
mapping without changing normal Product behavior.

The experiment keeps Node geometry fixed and compares four arms:

- A: current Parallel routing + current coarse normal candidates;
- B: prior Product-owned bundle-local widened routing + current coarse candidates;
- C: current routing + bounded finer normal candidates `[0, -4, 4, -8, 8,
  -12, 12, -16, 16, -24, 24, -32, 32, -40, 40]`;
- D: widened routing + finer normal candidates.

Widened routing reuses the already-established diagnostic bundle-local maps:
primary `20/12`, higher `16`, mixed `24`, shared `16/16`, Lighthouse `12`.
It does not introduce a new route authority or a new global spacing search.

## Direct trace evidence

On `parallel-self-loop-control`, the current coarse arm provides the causal
trace requested by this checkpoint:

- `r-ab-2` at `normalOffset=0` has `edgeOverlap=18` and foreign route
  `r-ba-1`; the selected candidate is `+24`;
- `r-ba-1` at `0` has `edgeOverlap=18` and foreign route `r-ba-2`;
- `r-ba-2` at `0` has `edgeOverlap=5` and foreign route `r-ba-1`;
- `r-ab-1` and both Gamma/Delta labels have a safe zero candidate in the same
  trace.

Thus the primary rejection is not an unexplained preference jump: a sibling
reverse route enters the zero-offset label rectangle. The trace records
Relation ID, selected and zero candidate, sample index, normal offset, label
overlap, Node overlap, edge overlap, score, and foreign route IDs.

The widened coarse arm still rejects some zero candidates, but provides safe
coarse candidates at `±24` and produces a balanced Alpha/Beta route group. The
widened fine arm can select smaller offsets such as `±4` and `±12`, improving
owner-route margin without needing to widen further.

## Factorial evidence

| Fixture | A current/coarse | B widened/coarse | C current/fine | D widened/fine |
| --- | --- | --- | --- | --- |
| Primary | ambiguity `1`, foreign-closer `1` | `0`, `0`; Alpha/Beta side `2:2` | `1`, `1` | `0`, `0`; selected offsets include sub-24 values |
| Higher multiplicity | ambiguity `3` | `0`; ordinary churn `1` (`ordinary-bd`) | `1` | `0`; ordinary churn `1` |
| Mixed incident | ambiguity `2` | `0` | `0` | `0` |
| Shared endpoint | ambiguity `2` | `1`, foreign-closer `1` | `1`, foreign-closer `0` | `0`, `0` |
| Lighthouse | `0` | `0` | `0` | `0` |

Across all arms, label overlap, Node collision, crossing, and occupied-path
conflict remained zero in the artifact. Route IDs and ordinary-route churn are
separate from label candidate granularity. Higher multiplicity retains the
known ordinary-route coupling; mixed incident and shared endpoint show that
fine offsets can help some local ownership cases even without widening.

The primary control is the strongest attribution signal:

- finer candidates alone do not close the primary ownership failure;
- widened routing alone closes primary ambiguity and foreign-closer;
- widening plus finer candidates improves the remaining owner-route margin and
  permits smaller normal displacement;
- therefore widening is the primary capacity mechanism, while finer offsets are
  a qualified secondary refinement rather than the primary cause.

## Collision-envelope attribution

The foreign-edge signal is produced by a real foreign route sample entering the
current Product collision test envelope. The envelope is not the glyph outline:
it uses the axis-aligned `LabelRect` derived from display width plus `12`, a
22-unit height, and the edge-overlap padding described above. This makes the
test conservative, but this checkpoint did not prove that the conservative
margin is the primary residual. In particular, the same foreign-sibling
identity appears consistently, widening removes the primary ownership failure,
and fine candidates can find safe positions.

Outcome D is therefore **not established**. Collision semantics should not be
retuned from this evidence. A future collision-envelope checkpoint would need a
separate comparison of visible glyph bounds, hit/drag bounds, LabelRect, and
edge-overlap padding, with independent Actual Product evidence.

## Actual Product smoke

The actual Product surface was inspected for all four primary arms after Reset
view. Widened arms visibly separate Alpha/Beta labels and improve reverse-arrow
readability. Fine offsets alone do not visibly repair the current fan-out. The
combined arm remains readable and preserves Gamma/Delta side balance, the
ordinary cycle, and the Epsilon Self-loop.

The widened-fine arm was also inspected for higher multiplicity, shared
endpoint, and Lighthouse. The five-lane bundle remains readable but exposes the
known ordinary incident route cost; shared endpoint association is readable;
Lighthouse shows no gross regression. This is a smoke check, not formal visual
acceptance.

## Responsibility attribution

- **Relation-label placement / presentation:** owns normal candidate granularity,
  label rectangle scoring, foreign-route attribution, and the bounded finer
  candidate direction.
- **Parallel bundle presentation capacity:** owns the primary capacity mechanism
  observed in the primary factorial comparison. The existing Product-owned
  bundle-local route spacing is sufficient for the diagnostic win; no new
  Parallel/Incident authority is required.
- **Ordinary routing:** remains Product-owned. Higher-multiplicity ordinary
  churn remains one route and is not solved by finer label offsets.
- **Endpoint-plan / capacity:** remains Product-owned. Shared endpoint improves
  only under the combined bounded presentation arm; endpoint authority does not
  move to Structural Placement.
- **Structural Placement:** unchanged. No Node geometry or ordering change was
  used.
- **Self-loop:** unchanged and only a coexistence control.

## Decision

Classification: **B primary / C qualified secondary**.

`B` is supported because bundle widening is the primary owner-label capacity
mechanism on the canonical Alpha/Beta control and generalizes without a new
route authority. `C` is qualified because finer normal candidates materially
improve displacement and close additional mixed/shared controls once the
bundle has capacity, but fine granularity alone does not solve the primary
failure.

Do not classify the result as A: coarse quantization alone is not the primary
cause. Do not classify it as D: the collision envelope may be conservative, but
its primary-cause status was not proved. Outcome E is rejected because the
foreign-sibling causal trace reproduces the observed behavior.

No wrap was evaluated. No Self-loop selector change, Structural Placement
change, Parallel/Incident architecture reopening, Product default, provider,
or Human Review adoption follows.

Human Review: `NOT READY`.
Product default/adoption: `HOLD`.
Production provider: `NOT ESTABLISHED`.
Initial Layout Release blocker: `OPEN`.

## Reproducibility and validation

- Added development-only expanded Relation-label candidate traces with foreign
  route index mapping.
- Added a development-only bounded normal-offset candidate-set input.
- Added the four-arm artifact generator, primary/control fixtures reuse,
  Actual Product preview seam, visual smoke index, and focused tests.
- Dataset bytes, serialization, persistence, stored/authored Coordinates, Save
  Coordinates, manual Relation-label semantics, routing authority, endpoint
  authority, and Self-loop authority are unchanged.
- `node --experimental-strip-types tools/product-relation-label-normal-offset-granularity1.ts` passed.
- Focused normal-offset tests passed: 5/5.
- Actual Product smoke completed.
- Final full LiaisonScape suite passed: 563/563.
- LiaisonScape lint/build, spec validation, and diff checks passed.

This is a new checkpoint result. Historical result documents are not rewritten.
