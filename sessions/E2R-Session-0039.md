# E2R Session 0039 - Automatic Layout Experiment 1B Checkpoint

Date: 2026-08-18

## Scope

This session continued the bounded Automatic Layout experiments in
`e2r-liaison-scape`, following the Dataset Replacement Safety and Layout
responsibility work recorded in Session 0038.

The goal was to evaluate whether graph density and initial viewport framing
were primary causes of automatic label jumps. The experiment remained limited
to evidence gathering. No Layout schema, identifier, persistence format, or
interoperability implementation was started.

## Experiment 1 baseline

The committed Experiment 1 Label Stability implementation remains:

```text
88b6cabe46535f3e4ad35d4ffbb6eaf52b3bf0aa
feat: experiment with label placement stability
```

It provides bounded previous-placement hysteresis through an ephemeral
application cache. It does not persist label placement, alter Dataset data,
or change routing, connector behavior, offsets, or mobile-specific behavior.

## Experiment 1B tested changes

The temporary implementation tested:

- deterministic Derived fallback spacing of `300 x 220`, compared with the
  baseline `240 x 180`;
- an experimental minimum initial viewport scale of `0.75` on Dataset open;
- whether wider graph spacing or initial framing reduced label instability.

The implementation was deliberately not combined with changes to angular
candidate resolution, label distance, collision weights or geometry, routing,
Relation offsets, or persistence.

## Result

Experiment 1B is **INCONCLUSIVE**.

Observed evidence:

1. Wider spacing did not produce a clearly attributable usability improvement.
2. The graph could still feel cramped after opening.
3. Local label changes could not be confidently attributed to spacing.
4. The tested Dataset's ordinary fit scale was approximately `0.76`, so the
   `0.75` minimum-scale clamp did not activate.
5. Open and Reset View therefore produced essentially the same scale.
6. Manual zoom changes did not materially change collision-triggered label
   jumps.
7. Current evidence does not support viewport framing as the primary cause of
   those jumps.
8. Graph density remains an unresolved UX concern.

The result does not accept `300 / 220`, newly endorse `240 / 180` as correct,
or claim that graph density or label stability has been solved.

Additional hypotheses retained for later bounded experiments include discrete
angular candidates, Node-label proximity, diagonal distance, rectangular-node
collision approximation, hysteresis recovery toward preferred placement,
Relation-label recovery/proximity, and viewport-edge asymmetry.

## Rollback and validation

The temporary Experiment 1B changes were removed from:

```text
e2r-liaison-scape/src/dataset.ts
e2r-liaison-scape/src/viewport.ts
e2r-liaison-scape/src/App.tsx
```

The LiaisonScape worktree returned clean, with Experiment 1 commit
`88b6cabe...` preserved. No rollback commit was created.

Validation after rollback:

- `npm.cmd test`: 122 passed;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS;
- `git diff --check`: PASS.

The complete evidence is documented in:

```text
e2r-spec/docs/automatic-layout-experiment-1b-density-framing-result.md
```

The roadmap was synchronized in `e2r-spec/docs/roadmap.md`.

## Documentation checkpoint

Local commit:

```text
55a17fee342066dc2a4668d2096327d374e2f164
docs: record graph density experiment evidence
```

Committed files:

```text
docs/automatic-layout-experiment-1b-density-framing-result.md
docs/roadmap.md
```

Validation:

- `git diff --cached --name-status`: only the two intended files were staged;
- `git diff --cached --check`: PASS;
- `npm.cmd run validate`: PASS;
- push: not performed.

Existing untracked research and session files in `e2r-spec` were preserved and
not staged. This session log is intentionally uncommitted until a future
explicitly requested checkpoint.

## Next bounded step

The next proposed step is Experiment 1C - Angular Freedom. It should test
angular candidate resolution/search behavior only, beginning with a comparison
such as current resolution versus `16 -> 32`. The comparison value is not an
accepted product or specification constant.

Experiment 1C must not simultaneously change spacing, initial framing, label
distance, collision weights or geometry, previous-placement scoring, routing,
or Relation-label offsets. Animation, mobile tuning, Layout persistence,
Dataset mutation, and Layout Extension design remain out of scope.

## Return boundary

After Layout persistence and interoperability design, return to Dataset
Replacement Safety through:

```text
Layout explicit adoption
    -> pendingUserWork classification
    -> Dataset Replacement Safety
```

The existing D1-D5 safety documents remain the return boundary. Do not infer
that Layout state is persisted, user-authored, or safe to carry across Dataset
replacement until explicit adoption semantics are designed.

## Automatic Layout follow-up: Experiments 1K-1M

The automatic-layout investigation continued through Experiments 1K, 1L, and
1M. These experiments remain application-level, non-normative evidence. No
Dataset format, Coordinate persistence, Layout schema, or E2R Core behavior was
changed.

### Experiment 1K - Directional Optical Geometry Audit

Experiment 1K was an audit rather than an improvement implementation. It
confirmed the following current geometry:

- Node labels use 12px / weight 650 for names and 10px / weight 500 for
  descriptions;
- SVG default baseline semantics are used, with two-line baselines of -15,
  0, and 15 and a 15-unit line pitch;
- the two-line LabelRect is 48 units high;
- the Node rect is 64 x 64, with an effective half-size of 32;
- pure horizontal and vertical placements have an 8-unit Node-boundary to
  Node-facing LabelRect-edge clearance;
- the label hit rectangle is transparent and does not visually mask the
  connector;
- the connector terminates geometrically at the invisible LabelRect boundary,
  classified as **TRUE GEOMETRIC TERMINATION**.

Text stroke may locally obscure a connector where it crosses glyphs, but this
is distinct from connector termination. Exact glyph `getBBox` measurements
were not obtained, so exact font bounds were not claimed.

Manual evidence also suggested that connector visibility may depend on whether
a label is close and obviously owned or displaced and ambiguous. Adaptive
connector visibility was recorded only as future presentation research; no
threshold or hiding policy was implemented.

Result: **AUDIT COMPLETE / GEOMETRY CLARIFIED**.

Documentation checkpoint:

```text
b33e07e docs: record node label optical geometry audit
```

The checkpoint changed only the 1K evidence document and `docs/roadmap.md`.

### Experiment 1L - Relation-Label Drag-Follow Responsiveness

Experiment 1L tested the analogy between Node-label Experiment 1H and
Relation-owned labels. During active dragging of a Node, a Relation label
bypassed previous-placement hysteresis only when that Relation used the Node as
either `sourceId` or `targetId`. Unrelated Relations retained hysteresis. A
self-loop naturally satisfied the same endpoint condition. Candidate geometry,
collision scoring, routing, Node-label behavior, and persistence were not
changed.

Manual evaluation found substantially reduced or removed trailing during fast
horizontal, vertical, and diagonal endpoint drags. Slow dragging showed no
notable new candidate thrashing. Source and target behavior was symmetric,
pointerup behavior was generally acceptable, and self-loop labels followed at
approximately the same quality as ordinary Relations. Some labels could still
remain farther from the edge after movement; this was separated as recovery
behavior.

Result: **CLEAR IMPROVEMENT / DIRECTION SUPPORTED**.

LiaisonScape checkpoint:

```text
62c9a3e feat: improve relation label drag responsiveness
```

e2r-spec documentation checkpoint:

```text
1f66ea9 docs: record relation label drag responsiveness evidence
```

Both commits remain local and unpushed. The two recovery axes remain
independent:

- normal-distance recovery toward the Relation edge while preserving the
  along-edge position;
- along-edge / midpoint recovery toward the appropriate position on the path.

### Experiment 1M - Relation-Label Normal-Distance Recovery

Experiment 1M is currently a temporary, uncommitted implementation for manual
browser evaluation. The current `placeEdgeLabel()` audit found:

- nine along-edge sample candidates derived from preference indexes
  `[20, 16, 24, 12, 28, 8, 32, 4, 36]` over the sampled path;
- normal offsets `[0, -24, 24, -40, 40]` for each sample bucket;
- candidate preference `alongPathPreference * 5 + awayFromPathPreference`;
- collision/base score of label overlap x100, Node overlap x10000, edge
  overlap x500, plus candidate preference;
- previous-placement hysteresis of candidate movement distance x4;
- previous placement enters the score directly, and sample/normal metadata was
  not previously retained during scoring.

The temporary change is limited to `e2r-liaison-scape/src/viewport.ts`. It
retains the existing scored stable candidate, then considers only candidates in
that same along-edge `sampleIndex` bucket. It chooses the smallest absolute
normal offset that has zero label overlap, zero Node overlap, and zero edge
overlap. If no such candidate exists, the stable candidate remains. This keeps
the existing candidate positions, offsets, weights, routing, and Experiment 1L
behavior unchanged. It does not implement midpoint recovery.

The first implementation exposed an existing parallel-edge test regression by
treating edge overlap as recoverable. The gate was corrected to require zero
edge overlap, preserving the existing edge-avoidance behavior.

Validation after correction:

- `npm.cmd test`: 122 passed;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS;
- `git diff --check`: PASS.

Current LiaisonScape state is intentionally dirty only by:

```text
M src/viewport.ts
```

Experiment 1M is not committed, not documented as a result, and not pushed.
The next stop point is manual browser evaluation of normal-distance recovery.

## Automatic Layout follow-up: Experiments 1M-1U checkpoint

The investigation continued from the 1M manual evaluation. Pure normal escape
and recovery were confirmed, and blocked recovery preserved collision safety.
A bounded side-switch case also showed edge-side oscillation, so the result
was recorded as **BOUNDED IMPROVEMENT / DIRECTION SUPPORTED**, not clear
improvement. The observed side switching was not attributed to 1M recovery
versus existing candidate competition because diagnostic values were not
captured at that moment.

### Experiment 1M-D — Placement diagnostic

Because visual-only evaluation could not reliably separate normal-distance and
along-edge movement, a temporary diagnostic exposed the selected Relation-label
candidate metadata. It displayed `sampleIndex` and signed `normalOffset` in
the browser without persistence, export, interaction capture, or collision
participation. The diagnostic was later removed before checkpointing.

### Experiment 1N Revision 2 and 1Q context

The accepted production behavior remained the midpoint-preferred Relation-label
anchor with local Node pressure and clearance-balanced fallback from 1N
Revision 2. Relation route Node influence remained `60` graph units from 1Q.
No persistence, Dataset, Coordinate, Layout, routing, self-loop, or Node-label
semantics were changed.

### Experiment 1S — Active-drag route hysteresis

Experiment 1S was rolled back to the production checkpoint:

```text
50e48cc feat: refine relation collision response
```

No previous-route retention, hysteresis margin, timer, or sticky candidate was
carried forward.

### Experiment 1T — Active-drag finer route granularity

Experiment 1T tested 12-unit route offsets during active Node drag while
static routing remained at 24-unit steps. Manual evidence found clearly less
coarse route movement and useful intermediate states such as `r:-12`.
However, the drag-only candidate set caused pointerup settling and was
rejected as pointer-state-dependent automatic geometry.

### Experiment 1U — Uniform finer route granularity

Experiment 1U removed the 1T active-drag-only branch and applied one candidate
set to ordinary automatic Relations in all pointer states:

```text
step = 12
steps = 16
maximum additional range = 192
```

Route scoring, penetration, edge-overlap penalty, curvature preference,
first-zero-score behavior, parallel base spacing, manual curvature, self-loop
geometry, the 60-unit influence radius, and Relation-label algorithms were
unchanged. The temporary `r:<offset>` diagnostic, route metadata, and
diagnostic-only tests were removed.

Manual evidence supported less coarse route motion, reduced large
pitter-patter, useful intermediate visual states, and no observed label jump
from clicking an obstacle Node without moving it. The accepted interpretation
is:

```text
12-unit granularity: CLEAR IMPROVEMENT / DIRECTION SUPPORTED
uniform application: SUPPORTED
pointer-state-specific automatic geometry: REJECTED
```

LiaisonScape production checkpoint:

```text
3df96e8 feat: refine automatic relation route granularity
```

Validation was green:

- `npm.cmd test`: 127 passed;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS;
- `git diff --check`: PASS.

The result was documented in:

```text
docs/automatic-layout-experiment-1u-uniform-route-granularity-result.md
```

e2r-spec documentation checkpoint:

```text
31ba9af docs: record uniform relation route granularity result
```

Both checkpoints remain local and unpushed. Existing untracked research and
session files were preserved and were not staged.

## Next bounded research target

The next target is **Relation-Label Placement Transition Animation**. It must
keep the existing 1M/1N placement target authoritative and separately evaluate
the safety of any visual transition path between collision-free targets. No
animation, CSS transition, requestAnimationFrame interpolation, spring model,
or Shift-drag directional snapping has been implemented.
