# LiaisonScape Initial-placement Motif-cluster Regularization Activation Audit

Date: 2026-09-01

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-REGULARIZATION-ACTIVATION-AUDIT1`

## Outcome

Result: **CASE 5 / EXACT RESULT 3 / DECISION E**.

> **PARTIAL - TRANSITION HISTORY CAN PREVENT SOLVER-INDUCED DEGRADATION BUT
> CANNOT REPAIR BOTTLENECKS ALREADY PRESENT IN THE INITIAL SEED**

The audit separates two activation questions:

1. workflow activation: when regularization may participate at all; and
2. local constraint activation: which already-defined motif or fan-out
   constraint may participate within that workflow.

The evidence supports workflow-bounded participation and detects deterioration
after a comparable Derived geometry exists. It does not support repairing a
collapse already present in the coordinate-less seed. Ashen also contains
mixed local improvements and deteriorations, so per-constraint detection does
not by itself authorize a cluster-wide action.

No static threshold, ranking cutoff, known-good reference, ideal shape, scalar
score, force, movement magnitude, semantic W, or Production activation rule is
introduced. The selected next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-BOTTLENECK-ORIGIN-AUDIT1`

It is selected only. No Production Node movement or placement change was made.

## Start state and preservation

The audit used the current LiaisonScape source and current clean sample
snapshot in a detached diagnostic clone. The source reference was:

`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`

The current `src/auto-layout.ts` mechanics were copied into a temporary
instrumentation script only to expose these stage boundaries:

1. topology/component inventory;
2. deterministic initial seed;
3. settling entry;
4. settling iteration 1;
5. settling iteration 2;
6. settling iteration 3;
7. component packing; and
8. final positions.

The coordinate-less input used graph Entities and Entity-to-Entity adjacency
only. Stored Coordinate Draft positions, labels, routes, feedback, H2,
rendered text, and locale copy were not inputs to the trace.

- LiaisonScape was on `main`, five commits ahead of `origin/main`.
- Pre-existing dirty paths were
  `public/lighthouse-restoration-demo.en.e2r.json` and
  `public/lighthouse-restoration-demo.ja.e2r.json`; neither was edited,
  restored, normalized, staged, or committed.
- e2r-spec started at `8b45ca7`; the protected
  `sessions/E2R-Session-0052.md` was not edited, staged, restored, reset, or
  committed.
- The preview's existing `src/App.tsx` and `src/viewport.ts` changes were
  preserved.
- The existing dirty `ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md`
  was preserved and no knowledge entry was changed.
- The running localhost was not restarted.

## Evidence-integrity preflight

The preceding semantics report described a fan-out opening but wrote the
diagnostic direction as `60 -> 25` degrees. Direct reproduction of the same
controlled family confirms that `25 -> 60` is the opening direction; `60 -> 25`
describes collapse. The preceding report's `SEM-3` factual line was corrected
only to `25 -> 60`. Its historical CASE, Exact Result, and Decision were not
changed.

The current controlled fan-out trace preserves both radial distances and
changes the selected gap from approximately `30` to `60` degrees. This is
diagnostic evidence for direction semantics, not a Production movement amount
or activation threshold.

## Reproduction gate and input boundary

The preceding minimal profile was reproduced:

- Lighthouse: 10 Entities, one connected component, one triangle motif on
  `{clara, maya, thomas}`;
- Ashen Crown: 10 Entities, one connected component, seven triangle motifs,
  nine motif Nodes, and six multi-motif shared Nodes;
- zero-motif control: no regularization profile;
- Entity and Relation order: invariant within floating-point comparison
  tolerance; and
- deterministic repeated evaluation: invariant.

Motifs are unordered graph triangles. Relation direction and multiplicity are
not used to select activation. The profile is generic topology plus Node
geometry and does not depend on E2R semantic meaning.

## Workflow versus local activation

Regularization must not participate during ordinary render, locale switching,
selection, Detail opening, or manual coordinate display. The current source
already has a bounded boundary: `settleInitialPlacement` is called by the
coordinate-less dataset-opening path, while explicit stored coordinates use
the stored-position path. This supports workflow activation as a semantic
boundary, but does not decide which local constraint activates.

Manual drag remains user-owned interaction. A future explicit Auto Layout
workflow could be another bounded participant, but this audit does not add it.

## Real Derived-placement trace: Lighthouse

Lighthouse has one isolated motif. Its normalized minimum altitude by stage was:

| stage | normalized minimum altitude | transition deterioration |
|---|---:|---|
| seed | `0.000000` | baseline is already degenerate |
| settling 1 | `0.013878` | no; improves |
| settling 2 | `0.027671` | no; improves |
| settling 3 | `0.041384` | no; improves |
| packed | `0.041384` | no change |
| final | `0.041384` | no change |

The problematic motif geometry is therefore seed-born in this current
coordinate-less trace. A transition-relative detector sees improvement after
the seed, not deterioration that it can use to authorize repair. A proposal
guard could prevent a later candidate from reducing the altitude, but it cannot
recover the already-collapsed seed without a separate repair or reference
policy.

Lighthouse classification: **ORIGIN-L1, seed-born**.

## Real Derived-placement trace: Ashen Crown

Ashen has seven motifs and one overlap cluster. The transition inventory shows
mixed behavior rather than a single monotonic quality direction:

| transition | motif constraints worsened | motif constraints improved | fan-out constraints worsened | fan-out constraints improved |
|---|---:|---:|---:|---:|
| seed -> settling 1 | 3 of 7 | 4 of 7 | 3 of 6 | 3 of 6 |
| settling 1 -> settling 2 | 3 of 7 | 4 of 7 | 3 of 6 | 3 of 6 |
| settling 2 -> settling 3 | 3 of 7 | 4 of 7 | 4 of 6 | 2 of 6 |
| seed -> final | 3 of 7 | 4 of 7 | 3 of 6 | 3 of 6 |

Representative changes show the conflict. The motif
`{darius, elara, kael}` changes from normalized altitude `0.707107` at seed to
`0.697791`, `0.686276`, and `0.673078` through settling. In contrast,
`{garrick, kael, mira}` changes from `0.400000` to `0.412628`, `0.425920`, and
`0.439856`. At shared Node Darius, the minimum fan-out gap improves from `0`
to `1.710158`, `3.709774`, and `6.059514` degrees, while Garrick's gap changes
from `45` to `41.269992`, `37.672831`, and `34.197882` degrees.

Thus Ashen contains both solver-induced deterioration and simultaneous
improvement. A per-constraint trigger would activate several constraints; a
cluster Pareto rule would need an explicit policy for mixed states. Neither is
a neutral activation fact.

Ashen classification: **ORIGIN-L3/L4, seed-present and settling-mixed; a
single global cause is not attributable from this trace**.

## Comparator variants

The audit distinguishes four diagnostic comparators:

| comparator | use | result |
|---|---|---|
| T1 immediate step | `G[n]` versus `G[n-1]` | detects post-seed local deterioration, but is sensitive to mixed motion |
| T2 stage boundary | settling output versus settling input | same direction in this three-step source trace; a clearer future contract |
| T3 run entry | final versus initial seed | exposes aggregate seed-to-final change, but loses origin detail |
| T4 best-so-far reference | current versus historical best | requires ranking/reference semantics and is not source-independent |

T1 and T2 can detect deterioration only after two comparable geometries exist.
T3 cannot repair a seed-born condition. T4 is intentionally not adopted.

## Activation families

| family | result | boundary |
|---|---|---|
| ACT-0 absolute numeric threshold | **NOT SOURCE-GROUNDED** | would require a fitted value such as altitude or angle X |
| ACT-1 relative rank / top-N | **NOT SUPPORTED** | selects a worst constraint even in a healthy geometry and hides a ranking policy |
| ACT-2 stored / known-good reference | **DIAGNOSTIC ONLY** | useful when supplied, unavailable as a general Dataset basis |
| ACT-3 exact degeneracy | **SUPPORTED AS SAFETY FLOOR** | catches exact zero area/collinearity, not near-collapse |
| ACT-4 transition-relative deterioration | **PARTIAL** | detects post-seed worsening, cannot repair seed-born collapse |
| ACT-4A per-constraint deterioration | **DETECTABLE BUT TOO SENSITIVE** | Ashen activates mixed local facts without resolving composition |
| ACT-4B cluster Pareto deterioration | **UNDERDETERMINED** | mixed improvement/worsening requires an unapproved policy |
| ACT-5 proposal-relative non-worsening guard | **SUPPORTED AS GUARD ONLY** | can reject a worsening candidate, not repair existing collapse |
| ACT-6 workflow-bounded participation | **SUPPORTED** | limits participation to a Derived placement workflow |

The term “active bottleneck” is not allowed to silently mean “lowest value.”
That would turn a diagnostic extremum into a ranking/activation policy.

## Controlled activation checks

The generic controls establish the boundary without selecting a numeric cutoff:

| control | observation | result |
|---|---|---|
| healthy to near-collinear triangle | normalized altitude decreases `0.500 -> 0.010` | deterioration is detectable |
| collapsed to less-collapsed triangle | normalized altitude increases `0.010 -> 0.400` | no deterioration activation |
| exact collinearity | area is exactly zero | threshold-free safety floor exists |
| balanced fan-out to opened fan-out | selected gap increases about `30 -> 60` degrees with radial distances preserved | improvement direction exists; no activation |
| mixed two-motif tradeoff | one motif improves while the other worsens | per-constraint and cluster decisions diverge |
| zero-motif graph | no triangle/fan-out identity | no activation |

A small healthy perturbation would be detected as a transition if treated as a
universal trigger. The audit therefore rejects automatic repair on every
non-zero change and leaves activation authorization unresolved.

## Detect, activate, repair, and guard

These are separate claims:

| question | result |
|---|---|
| Can a comparable transition be observed? | **YES** |
| Can deterioration of an existing local identity be detected? | **YES, PARTIAL in mixed clusters** |
| Does detection alone authorize regularization? | **NO / POLICY REQUIRED** |
| Can the same transition semantic repair a seed-born collapse? | **NO** |
| Can a proposal-relative guard prevent new worsening? | **YES, as a guard only** |
| Should ordinary rendering activate it? | **NO** |

The distinction is decisive for the current problem: transition history is a
prevention signal for solver-induced degradation, not a general repair signal.

## Static activation impossibility boundary

Without a threshold, known-good reference, ideal target shape, ranking policy,
or placement history, static geometry can describe a low altitude or narrow
fan-out but cannot establish that regularization must activate. Exact
degeneracy is a useful safety floor, but it is too weak for the observed
near-collapse and does not explain mixed clusters.

Absolute packing and boundary context remain context dimensions. “The cluster
became smaller” or “the outside Node became closer” does not activate motif or
fan-out regularization by itself.

## Invariance and input boundary

The diagnostic result is invariant under repeated execution, Entity order,
Relation order, generic ID permutation, translation, rotation, mirror
correspondence, uniform scale of normalized shape, and JA/EN sample parity.
Floating-point equality is used only as an evidence-comparison detail; it is not
a semantic threshold.

Labels, routes, locale, feedback, H2, occupied paths, and presentation text are
outside this activation input. The coordinate-less path does not use favorable
stored coordinates as an activation reference.

## General layout and future Group connection

The retained meaning is a generation-process-aware rule over graph topology,
Node geometry, motif/cluster identity, and Derived-stage history. It is a
reusable hypothesis for a future one-button Derived coordinate workflow, not a
universal static layout rule. The existing future records for user-defined
Groups and one-button automatic coordinate generation remain unchanged.

Explicit user-defined Groups remain a separate user/Dataset concept. A future
Group-aware layout may use cluster-local constraints internally, but must not
silently equate a motif overlap cluster with a user-defined Group.

## Decision and next checkpoint

The result is **CASE 5 / EXACT RESULT 3 / DECISION E**:

- static threshold-free activation is not justified;
- transition-relative deterioration is useful after a comparable state;
- Lighthouse's observed bottleneck is already present in the seed;
- Ashen combines seed-present geometry with settling-created mixed changes;
- per-constraint detection is too sensitive as a complete activation policy;
- cluster Pareto activation remains underdetermined;
- proposal-relative non-worsening is a prevention guard only; and
- workflow-bounded participation is supported.

The selected next checkpoint is exactly:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-MOTIF-CLUSTER-BOTTLENECK-ORIGIN-AUDIT1`

Its purpose is to isolate seed, settling, and cross-stage origin evidence with
one bounded question before further activation design. It must not introduce a
force, a scalar objective, a semantic W, a fitted threshold, or Production
movement.

Knowledge Candidate: **YES - HYPOTHESIS REFINED**. No `ai-knowledge` entry was
created or changed; controlled synthetic evidence and one current source trace
are not independent application evidence.

## Cleanup and validation

- temporary activation harness, stage snapshot instrumentation, synthetic
  controls, JSON/text output, and copied data: removed;
- temporary diagnostic clone: removed;
- LiaisonScape Production Initial Placement, routing, feedback, labels,
  samples, and `seededPositions`: unchanged;
- preview and its existing dirty state: preserved;
- protected Session: preserved and unstaged;
- `ai-knowledge`: unchanged.

Validation gates:

- LiaisonScape `npm.cmd test`: **280/280 passed**;
- LiaisonScape `npm.cmd run lint`: passed;
- LiaisonScape `npm.cmd run build`: passed;
- LiaisonScape `git diff --check`: passed;
- e2r-spec `npm.cmd run validate`: passed;
- e2r-spec working-tree and cached diff checks: passed;
- localhost `http://127.0.0.1:5173/e2r-liaison-scape/`: HTTP 200.

The e2r-spec checkpoint commit is:

```text
docs: audit LiaisonScape motif cluster regularization activation
```

It remains unpushed.
