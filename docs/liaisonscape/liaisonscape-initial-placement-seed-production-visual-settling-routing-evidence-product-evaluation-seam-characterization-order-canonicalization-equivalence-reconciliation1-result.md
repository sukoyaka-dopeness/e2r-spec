AUTHORITY / EQUIVALENCE RECONCILIATION ONLY

NO PRODUCT SOURCE MODIFICATION
NO TEST MODIFICATION
NO SETTLING KERNEL EXTRACTION
NO IMPLEMENTATION1B
NO MATERIALIZER UPDATE
NO ROUTING OR LABEL REFACTOR
NO INTERACTION CHANGE
NO CANDIDATE MATERIALIZATION
NO V0/V1/V2/V3
NO SCREENSHOT
NO BROWSER REVIEW
NO SAMPLE MODIFICATION
NO ROUNDING
NO TOLERANCE
NO PR-3 CLAIM
NO PUSH
NO TAG
NO RELEASE
NO DEPLOY
NO PUBLICATION

# LiaisonScape Product Evaluation Seam Characterization Order Canonicalization Equivalence Reconciliation1

## Checkpoint and decision

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-CHARACTERIZATION-ORDER-CANONICALIZATION-EQUIVALENCE-RECONCILIATION1`
- Date: 2026-09-03
- Status: COMPLETE - AUTHORITY AND EQUIVALENCE RECONCILED
- CASE: 1
- Decision: A

`PRODUCT-SEAM POST-CORRECTION AUTHORITY RECONCILED; IMPLEMENTATION1B ENTRY
GATE PASS; BEGIN ONLY A SEPARATELY AUTHORIZED SMALL SETTLING-KERNEL REFACTOR.`

The exact next prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1B`,
status `NOT STARTED`. This checkpoint stops before creating its clone or
changing any Product source.

## WHY and mandatory boundary

Baseline2 froze the corrected Product behavior but did not reconcile the
historical Product/materializer/evaluation roles or the equivalence contract.
This checkpoint establishes which source and baseline a future behavior-
preserving settling refactor must target, and separates machine initial-state
evidence from dynamic interaction behavior.

The boundary was authority/equivalence reconciliation only. No Product source,
test, materializer, routing, label, App, SVG, interaction, fixture, sample,
candidate, or browser artifact was changed.

## Authority chain and roles

The authority transition was verified with:

`git diff fd563340625fd3d88dc25baedc93c4f8fe69e5e7..0937d7768136ff63e74924480551d370b2935c2e`

The exact Product diff contains only `src/auto-layout.ts` and
`tests/auto-layout.test.ts`: the canonical Unicode code-point comparator,
one-time canonical neighbor arrays, and their focused tests. No hidden Product
source change was found. Live Production HEAD is exactly
`0937d7768136ff63e74924480551d370b2935c2e`.

| Authority | Frozen role | Use |
| --- | --- | --- |
| `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` | HISTORICAL PRE-ORDER-CORRECTION PRODUCT AUTHORITY | characterization-v1 historical comparison only |
| `0937d7768136ff63e74924480551d370b2935c2e` | CURRENT ACCEPTED PRODUCT SOURCE AUTHORITY | all future Product seam implementation |
| `d7271f5bc2c56d6ae7d46992140dc9cc165ecfee` | W-C CORRECTION PROVENANCE | validation provenance; not an implementation base |
| `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8` | POST-CORRECTION CHARACTERIZATION-v2 EVIDENCE COMMIT | evidence/tooling only; not Product authority |

## Baseline and equivalence reconciliation

`characterization-v1-pre-order-resolution` remains historical, bound to
`fd563340...`, and is not deleted, demoted, or used as the future refactor
PASS/FAIL target. It preserves the pre-correction incidental Relation-order
numeric behavior.

`characterization-v2-post-order-resolution` is the CURRENT PRODUCT-SEAM
BASELINE, bound to `0937d776...`. It is the exact numeric target for future
Implementation1B. Baseline2 was frozen in the separate evidence commit
`324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`.

The contract name remains `PRODUCT-SEAM-EQUIVALENCE-v1`. Its semantic purpose
did not change; its current profile is explicitly:

`PRODUCT-SEAM-EQUIVALENCE-v1 / POST-ORDER-RESOLUTION PROFILE`

The profile requires, for default Product layout: identical graph semantics,
normalization, shared canonical Unicode comparator and neighbor ordering,
component membership, degree ranking, initial seeds, constants, arithmetic
order, `solveAutoLayout` and `settleInitialPlacement` outputs, exact numeric
equality, failure behavior, and no input mutation. It also requires exact
Relation- and Node-array permutation invariance and no locale-sensitive order.

Routing and labels are not refactored by 1B and must remain identical for the
same upstream positions. App Dataset lifecycle, persistence, manual placement,
interaction, dirty state, viewport behavior, and candidate-blind Product
isolation remain unchanged. Build/test/lint and no research/candidate imports
remain gates.

No epsilon, rounding, quantization, decimal truncation, or “visually same”
substitution is permitted.

## S-C source revalidation

S-C remains the smallest safe conceptual settling decomposition after
canonicalization. The current accepted `src/auto-layout.ts` regions are:

1. Entity/pair normalization: lines 34-45; deduplicated IDs, endpoint checks,
   self/invalid exclusion, and unique undirected pairs.
2. Canonical comparator and endpoint key: lines 16-27.
3. Canonical neighbor construction: lines 46-48.
4. Component discovery: lines 50-62, using the canonical neighbor arrays.
5. Degree-ranked initial seed generation: lines 64-74.
6. Relaxation: lines 75-86, including repulsion, canonical attraction order,
   clamp, and iteration count.
7. Component packing/output: lines 87-90.
8. `solveAutoLayout` composition: lines 30-92.
9. `settleInitialPlacement`: lines 94-100, calling the same Product solver with
   exactly `INITIAL_PLACEMENT_SETTLING_ITERATIONS = 3`.

The default composition remains conceptually Product graph normalization plus
automatic seed generation plus the same Product settling kernel plus packing
and output. The explicit-seed path may substitute only the initial positions.

## Explicit-seed boundary

The earlier raw API proposal
`settleLayoutPositions({ nodes, relations, initialPositions }, config)` is
revised. The selected boundary is S2:

`settleLayoutPositions({ layoutGraph, initialPositions }, config)`

where `layoutGraph` is an internal Product-owned normalized layout graph. It
contains canonical IDs, normalized unique endpoint pairs, canonical ordered
neighbor arrays, component order/membership, degree information required by
the stage, and any other Product-owned ordering data needed by relaxation and
packing. The explicit position map is complete and is validated by the
evaluation-only adapter before calling the kernel.

This avoids duplicate normalization semantics and prevents an evaluation path
from bypassing canonical ordering. The canonical neighbor representation is
created once by Product-owned normalization and is shared by default automatic
seed generation and explicit-seed settling. Product does not receive Dataset
loading, persistence, candidate IDs, V0 policy, registry, ranking, or evidence
responsibility.

The explicit V0 substitutes only the seed position values. It does not replace
graph semantics, endpoint normalization, canonical neighbor order, component
membership, degree ranking, relaxation arithmetic/order, iteration count,
clamp, packing, or failure behavior. If the final implementation cannot keep
these responsibilities common, it must stop for a new seam decision.

## Materializer source-drift audit

MATERIALIZER-SOURCE-DRIFT: `UNAFFECTED`.

The retained materializer imports its own
`experimental/production-candidate-materialization/core/graph.mjs`,
`materializer.mjs`, `canonical.mjs`, `fp1.mjs`, `rational.mjs`, and `gates.mjs`.
It does not import LiaisonScape `src/auto-layout.ts`, `src/dataset.ts`, App,
viewport, or any Product package. Its graph projection, code-point comparator,
normalization, degree/motif ordering, candidate registry, FP1 rational family,
runtime transform, hard gates, output fingerprint, and provenance are owned by
the materializer surface.

The lighthouse authoritative fixture is read from the materializer clone's
committed Product sample at historical `fd563340`; Ashen and K3 use their own
embedded/declared graph authorities. None calls Product auto-layout. Therefore
the `fd563340 -> 0937d776` auto-layout neighbor-accumulation correction does not
affect candidate seed generation, materializer normalization, graph projection,
candidate registry, materializer output, hard gates, provenance, or candidate-
to-V0 mapping. Affected Product imports/paths: none.

Retained materializer policy: M-A, with the operational safeguard of M-C
before any later PR-3/candidate execution. Keep the detached fd materializer
permanently as historical candidate-materialization provenance. Create a
separate current-authority evaluation clone only when harness integration
requires it, and revalidate its execution environment against the current
Product authority before candidate execution. Materializer drift blocks 1B:
NO, because no actual Product auto-layout dependency exists.

## Implementation1B workspace and evidence policy

The selected future workspace is W4: create a NEW disposable clone from exact
current accepted Product authority `0937d776...`, proposed path:

`C:\Users\extra\E2R\e2r-liaison-scape-product-evaluation-seam-implementation1b`

This path is not created in this checkpoint. W-C is provenance-bearing and
baseline2 is evidence-bearing; neither becomes the implementation workspace.
The new clone must have no dirty samples and no characterization evidence
contamination in its Product base.

Baseline2 remains immutable evidence. The 1B clone may consume v2 artifacts by
immutable commit/path provenance or a test-owned copy of the characterization
runner and artifacts. Product source must never import evidence tooling,
candidate policy, manifests, or materializer code.

The one-file-at-a-time plan is frozen: (1) create the clean 1B clone at
`0937d776...`; (2) verify v2 replay before edits; (3) modify only
`src/auto-layout.ts` to extract the Product-owned settling boundary; (4) compile
and run focused tests immediately; (5) modify/add only focused auto-layout
tests; (6) run exact v2 replay; (7) run full Product test/lint/build; (8) prove
no routing/App/label source changed; and (9) commit one bounded refactor
candidate. No implementation occurs here.

The frozen 1B scope is settling extraction only. Expected Product behavior
change is NONE. Expected Product source is `src/auto-layout.ts`; expected
focused tests are `tests/auto-layout.test.ts` plus only the characterization /
equivalence test surface needed for proof. No explicit-seed API is required in
1B if it can safely remain in 1C.

Future 1B gates are exact default output equality for all 38 v2 cases, exact
Relation and Node permutation invariance, fresh-process replay, no mutation,
self/parallel/duplicate/invalid semantics, non-ASCII comparator behavior,
normal Product tests, unchanged routing/label/App source unless a separately
authorized tiny call-site change is necessary, and no rounding/tolerance. Any
default numeric difference stops the refactor and does not update v2.

## Interaction-equivalence boundary

`INTERACTION-EQUIVALENCE-BOUNDARY-v1` is frozen: the machine baseline does NOT
define “frozen curve while dragging” as correct Product behavior. Baseline2
captures automatic initial-state DOM geometry only; it is not a contract that
control points remain fixed while Nodes or Relations move.

Current Product behavior that future work must preserve:

- Node position changes require automatic route recomputation from current
  positions.
- 1B touches initial automatic settling only.
- Node drag behavior, direct Relation drag semantics, manual route state, and
  Relation-label drag/follow behavior remain App-owned and out of scope.
- Manual overrides remain authoritative and are not replaced by snapshots.
- Relation-label ownership/follow behavior must not be frozen to initial
  geometry.
- Browser “feels good” acceptance is later human evidence and is not claimed by
  this machine characterization.

Routing/label modularization remains later, conceptually 1D automatic routing,
1E automatic labels/App switch, 1F P-A wrapper, and 1G isolation proof. No
routing orchestration, label orchestration, render seam, or interaction change
is bundled into 1B.

## Source-drift handoff contract

Future Product seam work starts from `0937d776...`. Each accepted Product
refactor must declare a new Product authority. Candidate materializer
provenance remains separately identified. Before candidate execution, any
Product/materializer/harness mismatch must be revalidated. Historical v1
geometry must never be mixed with a later current Product harness without
explicit attribution.

## Final status

- PRODUCT-SEAM-EQUIVALENCE-v1: retained, current profile POST-ORDER-RESOLUTION.
- Implementation1B entry gate: `PASS`.
- Implementation1B: not started.
- Product-seam equivalence fully reconciled: this authority/profile reconciliation is complete; later source/equivalence proof remains 1B work.
- PR-3: `NO`.
- Candidate materialization: `NO`.
- V0/V1/V2/V3: `NONE`.
- Candidate selected: `NO`.
- Product candidate integration: `NO`.
- Sample integer-coordinate follow-up: unchanged; no sample bytes changed.
- Knowledge Candidate: `NO / checkpoint-local`; no ai-knowledge entry was created or promoted.
- Push/tag/release/deploy/publication: `NONE`.

## Repository states

- e2r-spec: result/roadmap changes pending validation and commit in this checkpoint.
- Live Production: HEAD `0937d776...`; only the two protected Lighthouse sample files remain dirty and unchanged.
- W-C: clean, detached at `d7271f5bc2c56d6ae7d46992140dc9cc165ecfee`.
- Baseline2: clean, committed at `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`.
- Retained materializer: detached at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`; existing `experimental/` remains untracked and untouched.
- ai-knowledge: existing dirty `playbooks/e2r-edge-cdp-browser-diagnostic.md` preserved.

No clone was created or modified in this checkpoint. The next action is the
separately authorized Implementation1B checkpoint, starting from the proposed
new clean clone and preserving the v2 evidence target.
