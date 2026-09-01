# LiaisonScape One-button High-quality Automatic Coordinate Generation

Date: 2026-09-01

Status: Research seed / exploratory future capability

## Purpose

This note records a long-term LiaisonScape goal: a user should be able to
request automatic coordinates for a Dataset through one clear action and
receive a practical, high-quality layout that needs little manual correction.

The goal is user-facing and intentionally non-normative. It does not promise
mathematical optimum, global optimum, or a universal optimal layout. It is not
an implementation plan, release blocker, schema proposal, or authorization to
change the current placement engine.

Preferred wording is:

- high-quality automatic coordinate generation;
- practical automatic layout;
- low-manual-correction layout; and
- one-action automatic coordinate generation.

## Meaning of "one-button"

One-button describes the user workflow, not the internal algorithmic shape.
It does not mean one force, one pass, one heuristic, or one optimization
objective. A future action may orchestrate bounded stages such as:

1. global initial placement;
2. graph and motif analysis;
3. motif-overlap-cluster quality handling;
4. local geometric regularization;
5. routing evaluation;
6. label evaluation; and
7. bounded feedback with deterministic termination.

This pipeline is an architecture hypothesis only. The current implementation
does not constitute the complete pipeline and no stage is adopted here.

## Desired outcome and non-goals

The desired outcome is a layout that:

- exposes graph topology clearly;
- keeps nodes, labels, and edges usable and difficult to confuse;
- reduces unnecessary crossings and local congestion;
- preserves stable behavior when the same inputs are repeated;
- accommodates local motifs and overlapping motif clusters;
- avoids requiring extensive manual correction; and
- remains compatible with future explicit user-defined Groups.

The following are explicitly not claimed:

- mathematical optimality;
- global optimality for every graph;
- a universal graph-layout solution;
- minimum total edge length as the dominant objective;
- one fixed set of weights for every Dataset; or
- that current motif research is already a proven general algorithm.

Readable geometry and low correction cost are presentation goals. They must not
be silently turned into Core semantics.

## Research context

The current research sequence has reached a motif-cluster quality-criteria
audit. Its bounded evidence supports a two-layer descriptive profile:

- per-motif shape and Node-to-chord bottleneck evidence, with absolute packing
  as context; and
- shared-Node fan-out, cluster aggregation, and boundary context for
  overlapping motifs.

This result is useful as a possible local-geometry stage in a future
automatic-layout pipeline. It does not establish a complete layout algorithm,
an objective function, a candidate score, or a numeric acceptance threshold.

The current selected next research checkpoint remains:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-QUALITY-CRITERIA-VALIDATION1`

This future capability record does not skip, reorder, or close that checkpoint.

## Derived-first boundary

Automatic coordinates are Derived by default. Opening a Dataset, viewing it,
or invoking automatic arrangement must not silently write Coordinate or Layout
data into the Dataset.

The generation result, intermediate candidates, diagnostics, routing previews,
label previews, and quality profiles remain application-derived unless the user
explicitly adopts a supported subset through an intentional save operation.
Determinism does not turn a generated value into Owned data.

If a future explicit adoption workflow exists:

- it must clearly say what responsibility is being saved;
- saving coordinates must not silently save routes, labels, appearance, or
  viewport state;
- existing Owned values must be preserved unless the user intentionally
  replaces or removes them;
- the responsible Core or Extension representation must be known; and
- unsupported or unknown data must remain preserved whenever practical.

Coordinate persistence and Layout persistence are therefore separate research
questions. A saved coordinate is not permission to persist the algorithm,
quality score, cache, viewport, or interaction history.

## Possible internal pipeline boundaries

The following decomposition is a research map, not a prescribed file layout or
runtime architecture:

| stage | responsibility | current status |
|---|---|---|
| graph analysis | identify components, motifs, overlap clusters, and boundary context | bounded evidence exists; not a complete engine |
| global seed | produce deterministic initial coordinates for graph components | current research subject |
| local geometry | inspect motif and cluster bottlenecks without a universal scalar score | quality criteria under validation |
| regularization | test bounded local changes while protecting explicit values | future experiment |
| route evaluation | inspect crossings, parallel sides, self-loops, and obstacle effects | existing application research; not a universal objective |
| label evaluation | inspect Node and Relation label pressure separately from source graph semantics | existing application research; not a Core concern |
| feedback | apply bounded, reproducible changes only when a validated condition exists | future pipeline experiment |
| adoption | intentionally persist selected supported values | separate workflow; not automatic |

The stages may iterate or be skipped according to graph state. Any future
orchestrator must define failure containment, deterministic inputs, bounded
termination, and protection of user-owned values before implementation.

## Quality and objective boundary

The present objective direction is presentation quality, not shortest total
edge length. A future evaluation may need to consider several independent
signals, including:

- Node and Node-label separation;
- Relation-label separation from edges, nodes, and other labels;
- ordinary-route crossings and congestion;
- parallel-route side diversity and spacing;
- self-loop readability;
- obstacle influence only when the obstacle is locally relevant;
- motif shape and Node-to-chord bottlenecks; and
- shared-Node fan-out and cluster boundary context.

These are candidate research dimensions, not a weighted score. No claim is
made that all dimensions can be optimized simultaneously or that one dimension
dominates in every graph. The later validation work must preserve the
distinction between a diagnostic profile and a placement decision.

## Determinism and reproducibility

A future one-action operation should be reproducible from explicit normalized
inputs and the exact application or engine version. Relevant inputs may
include Core topology, supported owned coordinates, bounded application
configuration, and a declared engine version. Dataset ID is not required as a
universal seed.

The following should be observable in a future experiment:

- input normalization;
- engine version and bounded configuration;
- deterministic tie-breaking;
- failure and no-op behavior;
- protection of Owned values;
- whether routes and labels were evaluated; and
- whether the result remained Derived or was explicitly adopted.

Reproducibility is a safety and debugging property. It is not evidence of
optimality.

## Group-aware future

Future user-defined Groups and derived motif-overlap clusters may both affect
layout, but they are different inputs:

- an explicit Group expresses user intent and may cross derived clusters;
- a derived cluster expresses topology-based shared geometry; and
- neither concept should be silently generated from the other.

A future pipeline may give explicit Groups a presentation or layout role while
using derived clusters for local geometric analysis. Ownership, persistence,
collapse/expand behavior, and boundary routing must be decided independently.

## General reuse boundary

The motivation is broader than LiaisonScape: a practical automatic layout
pipeline could help relationship graphs and other structured visualizations.
The current evidence supports only a **reusable hypothesis / research
motivation**. It does not establish a general solution, and it must not be
promoted to workspace-wide knowledge from this single application record.

The motif and cluster descriptors may be reusable if their graph-structural
meaning remains explicit. LiaisonScape-specific labels, screenshots, route
semantics, and UI controls must not be presented as universal graph facts.

## Open research questions

- How should a user review, reject, partially accept, or rerun a generated
  layout?
- How are manual corrections protected during a later one-action run?
- Which stages may iterate, and what is the bounded termination contract?
- How should disconnected components, dense clusters, and long labels be
  handled without a universal scale assumption?
- How should explicit Groups interact with local cluster analysis and boundary
  routing?
- Which outputs are Coordinate, which are Layout, and which remain
  application-only View State?
- What second application can consume or preserve any intentionally adopted
  output?
- How can evaluation expose trade-offs without pretending to solve a single
  global optimum?

## Current decision boundary

This is future research/post-release growth only. It does not modify Core,
Extensions, schemas, examples, samples, package versions, tests, preview,
current placement, routing, labels, Coordinate persistence, Layout
persistence, or `ai-knowledge`.

No implementation is authorized by this note. The current research order and
selected checkpoint remain unchanged.
