# LiaisonScape Initial-placement Seed Production-candidate Materialization Implementation1

## Checkpoint

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-IMPLEMENTATION1`
- Date: 2026-09-03
- Status: Complete; isolated materializer implementation and validation passed
- Next checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-VALIDATION1`

## Mandatory banner

```text
ISOLATED EVALUATION MATERIALIZER IMPLEMENTATION ONLY
MAT-C2 TARGET
NO PRODUCTION REPLACEMENT
NO PRODUCTION CANDIDATE SELECTED
NO LIVE APP IMPORT
NO PRODUCTION BUNDLE CHANGE
NO VISUAL ACCEPTANCE
NO SETTLING ACCEPTANCE
NO ROUTING/LABEL ACCEPTANCE
NO STRUCTURAL OBJECTIVE RERUN
NO PR-2 CLAIM
NO CLAIM THAT INITIAL PLACEMENT IS SOLVED
```

## Result and decision

**CASE 1** is selected. The frozen Design1 M2 disposable harness and M1 pure
core were implemented in the required disposable clone. All five authorized
candidate identities materialized successfully for Lighthouse, Ashen Crown,
and K3, with exact output, provenance, deterministic failure handling, and
hard-gate evidence. This is implementation evidence for the bounded seam, not
candidate-quality or Product evidence.

**DECISION A** is selected:

```text
MAT-C2 bounded implementation complete;
proceed to separately authorized validation, without Production selection
```

No candidate is selected. No candidate reaches `PR-2`. The next checkpoint is
recorded but was not started automatically.

The hacker-movie boundary is:

```text
Bingo! The bounded materializer runs and emits auditable evidence in isolation.
Yahoo! The M2/M1 seam is executable without opening a Production path.
```

These statements celebrate implementation isolation and evidence integrity
only; they do not celebrate a visual result, a quality winner, or solved
Initial Placement.

## Source and protected-state reconciliation

### Production source authority

- Repository: `C:\Users\extra\E2R\e2r-liaison-scape`
- Accepted source commit: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
- Production tracked `src/`, `public/`, `tests/`, `package.json`,
  `package-lock.json`, Vite configuration, `App.tsx`, and `main.tsx`: unchanged
- Protected Lighthouse sample files remained untouched

### Required disposable clone

- Clone: `C:\Users\extra\E2R\e2r-liaison-scape-production-candidate-materialization-implementation1`
- HEAD: detached at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
- Clone commit: none created; clone is retained for the next checkpoint
- Production package files: unchanged
- `npm ci` was run only in the clone to restore its existing dependencies;
  no manifest or lockfile change resulted
- Only the untracked `experimental/production-candidate-materialization/`
  surface was added

The `e2r-spec` protected `sessions/E2R-Session-0052.md` dirty state was
preserved. Research surfaces, the routing preview, `ai-knowledge`, and the
source fixture authorities were read-only for this checkpoint. No new clone
was created beyond the required disposable clone.

## Implemented surface

The implementation uses the Design1 direction:

```text
disposable harness -> pure candidate materializer -> normalized graph / exact arithmetic
Production App / main.tsx -X-> evaluation materializer
```

Files in the clone are:

- `experimental/production-candidate-materialization/core/rational.mjs` —
  normalized BigInt rational arithmetic and exact parsing
- `core/graph.mjs` — canonical normalized graph, code-point ordering, graph
  fingerprint, degrees, connected components, and corrected motif state
- `core/fp1.mjs` — exact FP1-NGP family generator, bounded at `N<=65`
- `core/canonical.mjs` — keyed canonical JSON and SHA-256 coordinate
  fingerprint, including rational reduction and `-0` normalization
- `core/gates.mjs` — HARD-1 through HARD-7 checks
- `core/materializer.mjs` — registry, input contract, TA0/TA2/TA3 semantics,
  exact transform, output, provenance, and failure precedence
- `fixtures/authoritative.mjs` — explicit Lighthouse, Ashen Crown, and K3
  authority projections
- `tests/materialization.test.mjs` — 13 pure-core tests
- `harness/run-validation.mjs` — bounded fixture/candidate validation and
  artifact generation

The harness output is under the clone-local,
`experimental/production-candidate-materialization/artifacts/implementation-validation1/`:

- `manifest.json`
- `raw-materialization.json`
- `audit-results.json`
- `artifact-index.json`

Raw exact/runtime output and audit interpretation remain separate.

## Registry and semantic boundary

| Authorized identity | Materializer | Scope |
| --- | --- | --- |
| `TA0/REP-0` | `TA0-REP0-MAT-v1` | degree-descending, code-point lexical tie, direct FP1 zip |
| `TA2-DEG-W1-OP-v1` | `TA2-DEG-MAT-v1` | distinct degree semantic identity |
| `TA2-MOTIF-W1-OP-v1` | `TA2-MOTIF-MAT-v1` | corrected `R=(m,o,s)`, componentwise maxima |
| `TA3-FWD-W1-OP-v1` | `TA3-FWD-MAT-v1` | NEW responsibility to larger SPACE-S1 role |
| `TA3-REV-W1-OP-v1` | `TA3-REV-MAT-v1` | NEW responsibility to smaller SPACE-S1 role |
| `FP1-NGP` | `FP1-NGP-MAT-v1` | family generator/dependency only |

`TA1-W1-OP-v1`, `K3`, and `REFERENCE-BASELINE` are not authorized as
candidate materializers. TA1 returns `UNSUPPORTED-CANDIDATE`; it is not
silently generalized from fixture witness data. K3 is a control only. Equal
literal geometry does not merge semantic identity or provenance.

The input is `EVAL-FULL-SEED` only. It contains a canonical normalized graph,
explicit fixture/source authority, candidate identity and contract, family
identity, configuration, and an explicit exact rational transform. Labels,
locale, routes, viewport state, and Stored Coordinates are not inputs.

## Exact contracts implemented

- Graph domain: `1 <= N <= 65`; `N=0` and `N>65` return
  `DOMAIN-MISMATCH`.
- Node IDs are nonempty and unique; graph edge endpoints exist; self edges and
  duplicate undirected pairs are rejected by normalization; endpoint order is
  Unicode/code-point canonical.
- FP1 uses exact `Q_i=(m*i,i^2)` with `m=N-1`, and the singleton `(0,0)` for
  `N=1`. No division is performed for the singleton.
- Runtime coordinates use exact positive rational `originX`, `originY`, and
  `scale`; exact affine arithmetic is completed before one `Number`
  conversion. Nonfinite output and runtime coordinate collapse are rejected.
- TA0 and TA2 degree use descending distinct-neighbor degree and lexical
  code-point ties. Their materializer and semantic IDs remain distinct.
- TA2 motif uses corrected `R(V)=(m(V),o(V),s(V))`, componentwise partial
  order, repeated maxima, and lexical selection only among simultaneous
  maxima.
- TA3 Forward maps higher responsibility to larger SPACE-S1 spacing; Reverse
  maps it to smaller spacing. N=2 equal roles and N=1 are explicit.
- Failure precedence is deterministic: unsupported identity, invalid input or
  authority/transform, domain mismatch, undefined, nonfinite, noninjective,
  hard-gate failure, and runtime error. There is no fallback, remapping, or
  repair.

## Validation evidence

The pure core test suite passed **13/13**. It covers rational normalization,
FP1 N=1/N=3/N=10/N=65 and N=0/N=66 boundaries, exact SPACE-S1 values,
mapping identity, TA2/TA3 distinctions, input permutations, failure
precedence, hard gates, canonical fingerprints, and no mutation.

The harness passed **15/15** authorized fixture/candidate cells:

```text
Lighthouse  5/5
Ashen Crown 5/5
K3 control  5/5
```

Every successful result had complete keyed coordinates, finite distinct
runtime values, all HARD-1..7 gates true, explicit graph/fixture/source
provenance, and a coordinate fingerprint. The oracle mappings were checked
without treating their literal equality as a quality ranking.

Boundary and failure checks passed:

- FP1: N=1, 3, 10, and 65 successful; N=0 and 66 rejected
- SPACE-S1: N=10 exact roles
  `[164,172,196,236,292,364,452,556,676,740]`
- SPACE-S1: N=2 exact tie roles `[4,4]`
- unsupported TA1/K3/unknown identities rejected
- malformed graph, missing transform, invalid scale, zero denominator,
  nonfinite conversion, and noninjective conversion returned their specified
  statuses
- graph/Relation input reordering produced identical coordinates and output
  fingerprints
- input graph/configuration/authority remained unmutated
- hard-gate valid and collinear/same-positive-ray witnesses were separately
  detected

The clone's existing application gates also passed after `npm ci`:

- `npm.cmd test`: **280/280 passed**
- `npm.cmd run lint`: passed
- `npm.cmd run build`: passed
- `git diff --check`: passed for tracked changes; no tracked Production diff

The build output was produced by the unchanged application source. Port
24678 was already in use during the test run, producing a non-fatal WebSocket
server warning; the complete test suite still passed.

## Isolation, reachability, and claim boundary

Search of the clone's Production `src/`, `public/`, and `tests/` found no
reference to `production-candidate-materialization`, `materializeCandidate`,
or `materializeFp1Family`. The evaluation surface is not imported by
`App.tsx` or `main.tsx`, is not a startup path, is not in the Production
bundle, and has no browser persistence or user-state mutation.

This checkpoint does not accept visual quality, settling, routing, labels,
viewport, performance, crossing minimization, or structural-objective
quality. It does not select a winner, change a candidate, solve Initial
Placement, or advance any identity to `PR-2`. The common fixture ROLE GAP
remains open.

## Artifact hashes

Generated artifact index (`artifact-index.json`):

| Artifact | SHA-256 |
| --- | --- |
| `manifest.json` | `DA9910F341D5460B22C4617C2BF894C165987443E06DE91FA225F1BCE8BAC946` |
| `raw-materialization.json` | `377DDDF0ED38F373DAD5897DCC0F8F3FA59B226BA20AC9D83B39B44B1886EA59` |
| `audit-results.json` | `6E1B604E2E2DDC43CA6028D9A8D79C5D348D0EF9A590229ED11E37C214BFB142` |

The manifest and audit also contain the implementation source hashes and the
fixture/source authority fields. The clone is retained rather than committed
so the next validation checkpoint can inspect the same evidence surface.

## Knowledge Candidate and follow-up

Knowledge Candidate: **YES**. Reusable principles were confirmed but
`ai-knowledge` was not changed:

- an evaluation materializer can be Production-compatible without being
  Production-integrated;
- fixture witnesses must not be silently generalized;
- Derived output should remain ephemeral and provenance-rich;
- exact research arithmetic needs an explicit runtime-number boundary; and
- evaluation code must depend in the Production direction, never from the
  live entrypoint back into evaluation code.

The next separately authorized checkpoint is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-VALIDATION1`.
It may validate artifact reproducibility and boundary evidence. It must not
be treated as authorization for Production replacement, candidate selection,
visual acceptance, settling/routing/label acceptance, or PR-2.

## Final state

| Item | Result |
| --- | --- |
| MAT-C2 bounded implementation | PASS |
| Production source / bundle / imports | unchanged |
| Candidate selected | NO |
| PR-2 claim | NO |
| Initial Placement solved claim | NO |
| Visual / settling / routing / label acceptance | NO |
| Objective rerun / ranking / winner | NO |
| Dataset/Core/Extension/schema change | NO |
| `ai-knowledge` change | NO |
| Push, tag, release, deploy, publication | NONE |
