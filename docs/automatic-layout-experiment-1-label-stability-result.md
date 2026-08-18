# Automatic Layout Experiment 1 - Label Stability Result

Date: 2026-08-18

Status: Non-normative bounded experiment result; implementation remains
experimental

## Result

```text
PASS - BOUNDED IMPROVEMENT / DIRECTION SUPPORTED
```

The previous-placement mechanism was integrated into LiaisonScape's rendering
path and produced a bounded improvement in perceived label continuity. It does
not solve automatic label placement as a whole. No numeric score weight is
accepted as a stable product or specification constant.

Animation was not required for this bounded improvement.

## Implementation checkpoint

LiaisonScape commit:

```text
88b6cab feat: experiment with label placement stability
```

The implementation:

- adds optional previous-placement input to the pure node and edge placement
  functions;
- adds movement cost to candidate scoring;
- keeps Node and Relation placement caches separate;
- stores the caches in ephemeral Application-only `useRef` maps;
- updates caches after render commit rather than during render;
- resets both caches when a Dataset is accepted, rejected, or replaced;
- does not persist, export, or treat the cache as user-authored state;
- leaves manual label offsets, Dataset content, Layout persistence, routing,
  connectors, and mobile behavior unchanged.

Validation for the LiaisonScape checkpoint:

- `npm.cmd test`: 122 passed;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS;
- `git diff --check`: PASS.

## Usability evidence

### Short-description Entity

Small movement generally produced fewer abrupt jumps. Labels more often
followed the owning Node on the same side. A smaller improvement remained
visible, and the label could still move when avoidance required it.

### Long-description Entity

Large side-switch impressions were reduced in some movements, but long labels
still showed larger displacement and cases where available free space was not
selected as expected. This remains unresolved.

### Repeated small movement

When no significant collision occurred, previous-placement scoring made labels
more stable. When collision conditions changed enough, labels still moved to a
different candidate. Frequent 180-degree flipping was reduced in some cases,
but not eliminated.

### Large Entity movement

Previous placement did not remain fixed indefinitely; sufficiently large
movement or changed collision conditions could select another candidate. The
naturalness of the resulting empty space remains an open usability question.

### Relation labels

Relation labels appeared to follow their edge more naturally than Node labels
followed their owning Node. Minor tuning may help, but no representation
redesign is selected by this result.

## Newly recorded hypotheses

The following are hypotheses for later experiments, not accepted behavior:

1. The current 16-angle Node candidate set may be too discrete. More angles,
   coarse-to-fine search, or local continuous refinement may improve free-space
   selection. No candidate count is selected.
2. Owning-Node proximity is an independent quality axis. Collision avoidance
   alone is insufficient if the label becomes visually detached.
3. Automatic graph density may be upstream of label instability: insufficient
   space can cause candidate scores to change sharply and produce jumps.
4. Self-loop routing may not apply Node obstacle avoidance in the same way as
   ordinary Relation routing. This belongs to a later routing experiment.
5. Relation-label follow behavior may be better than Node-label follow
   behavior; route-relative continuity and graph-density interaction need
   further observation.

## Experiment sequence update

The next bounded experiment is:

```text
Experiment 1B - Automatic graph density / spacing
```

Compare current spacing, moderately wider Derived placement, and substantially
wider Derived placement. Evaluate:

- desire to manually spread the graph immediately;
- Node label jump frequency;
- long-description readability;
- owning-Node proximity;
- Relation-label readability;
- edge crossing;
- unused whitespace;
- overall graph legibility;
- incremental stability.

Experiment 1B must remain Derived automatic placement only. Owned Coordinates
must not move, Dataset content must not change, and automatic geometry must not
be persisted. It must not become a permanent graph-wide movement policy before
evidence supports that direction.

After 1B, reconsider the order of connector behavior, finer angular candidate
search, Node-label proximity, and Relation routing experiments. Their final
order remains open.

## Checkpoint interpretation

Passing this bounded checkpoint means:

- the previous-placement mechanism was integrated;
- no persistence or responsibility boundary was violated;
- validation remained green;
- visible bounded improvement was observed;
- limitations were identified; and
- evidence is sufficient to proceed to the next experiment.

It does not mean that label placement is solved, that current weights or
candidate angles are accepted constants, or that Layout schema work or Stable
Layout evidence is ready.

## Boundaries

This result does not change the Layout responsibility checkpoint, create a
Layout schema or identifier, modify Validator or NarrativeLine, implement
Dataset Replacement Safety or Dataset Handoff, or change Hub work.
