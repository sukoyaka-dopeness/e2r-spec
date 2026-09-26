# LiaisonScape Initial-placement Seed Production-candidate Materialization Design1

## Checkpoint

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-DESIGN1`
- Date: 2026-09-03
- Status: Complete; bounded evaluation surface contract frozen; implementation not started

## Mandatory banner

```text
PRODUCTION-CANDIDATE MATERIALIZATION DESIGN ONLY

EVALUATION SURFACE - NOT PRODUCTION REPLACEMENT

NO PRODUCTION CANDIDATE SELECTED
NO RUNTIME IMPLEMENTATION
NO VISUAL ACCEPTANCE
NO OBJECTIVE RERUN
NO NEW ASSIGNMENT POLICY
NO LIVE PRODUCTION PATH CHANGE
NO CLAIM THAT INITIAL PLACEMENT IS SOLVED
```

## Result

This checkpoint defines a bounded, disposable evaluation surface for
materializing an authorized research identity into LiaisonScape-compatible
Derived coordinates. It does not change the live initial-open path, add a
Production strategy registry, persist coordinates, or select a candidate.

The minimum sufficient architecture is **M2 Disposable Harness Adapter with an
M1 pure materialization core**. The harness consumes a normalized accepted
Entity graph, invokes an exact operational candidate contract, emits an
ephemeral coordinate result and provenance, and runs outside the live App
entrypoint. It may use stable Production types and pure utilities, but the
Production entrypoint must not import it.

The first implementation domain is deliberately bounded: a normalized graph
with `1 <= N <= 65`, a required explicit positive uniform affine transform
from the exact FP1 coordinate substrate to runtime numbers, and
`EVAL-FULL-SEED` ownership. `N=0`, missing transform, partial Owned
coordinates, unsupported candidate identities, and invalid graph projections
produce attributable failures. There is no silent baseline fallback.

TA1-W1 remains a fixture-witness-only identity and is deferred from the first
implementation set. This is an explicit registry boundary, not a repair or a
new TA1 semantic policy. TA0/REP-0, TA2 degree, TA2 motif, TA3 Forward, TA3
Reverse, and the FP1-NGP family have generic-enough operational contracts for
the bounded evaluation surface, while remaining research-only identities.

## Exact result and decision

**CASE 1** is selected:

> A minimal isolated Production-compatible evaluation materializer contract
> is frozen for an explicitly bounded first implementation domain. Authorized
> identities have generic-enough operational contracts for that domain; the
> fixture-only TA1 witness is explicitly deferred. Live Production startup,
> persistence, and selection remain unchanged.

**DECISION A** is selected:

```text
MATERIALIZATION DESIGN COMPLETE;
IMPLEMENT ISOLATED EVALUATION SURFACE NEXT
```

The exact next checkpoint is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-IMPLEMENTATION1`

Implementation1 is authorized only for the isolated evaluation surface
defined here. It is not authorization to replace Production, select a
candidate, perform visual acceptance, rerun the structural objective, or
publish/deploy.

## Hacker-movie celebration boundary

```text
Bingo! The evaluation-materialization seam is exact and isolated from Production.
Yahoo! Candidate Materialization Design1 is frozen and safe to implement as a bounded evaluation surface.
```

These statements celebrate contract and sequencing integrity only. They do
not celebrate a candidate, a visual result, or a solved Initial Placement, and
they did not influence the decision.

## Source and protected-state reconciliation

### e2r-spec

- HEAD: `a344d4865c90c9de3b3c8ad08730493e45408368`
  (`docs: audit LiaisonScape initial placement readiness evidence`)
- branch/upstream: `main` / `origin/main`
- initial dirty state: protected `sessions/E2R-Session-0052.md` only
- Evidence Audit1 commit `a344d48`: present
- Production Readiness Design1 commit `6a470ea`: present
- Research Synthesis1 commit `670713c`: present
- Interpretation1 `c054dd6`, Rerun1 `e95fcde`, Integrity Reconciliation1
  `ff5bbc4`, TA3 witnesses `928c820`, Experiment3 `e797a7c`, and Experiment2
  `ae502e9`: present

### LiaisonScape

- HEAD: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`
- branch/upstream: `main` / `origin/main`
- Initial Placement source drift from the accepted baseline: **NONE** for
  `src/auto-layout.ts`, `src/entity-placement.ts`, and `src/App.tsx`
- protected dirty samples preserved and not used as authority:
  `public/lighthouse-restoration-demo.en.e2r.json` and
  `public/lighthouse-restoration-demo.ja.e2r.json`

The research surfaces, routing preview, residual experiment shells,
`ai-knowledge`, and its protected browser diagnostic playbook remain outside
this checkpoint. No new clone was created. No source, sample, witness, TA
semantic, UI, routing, settling, solver, schema, Core, Extension, or
knowledge-base change was made.

## Evidence Audit1 authority

[Evidence Audit1](liaisonscape-initial-placement-seed-production-readiness-evidence-audit1-result.md)
is the immediate authority. It distinguishes:

```text
CURRENT-PRODUCTION-BASELINE  live runtime only
TA0-TA3                     research witness identities
FP1-NGP                     research candidate family
K3                          control only
```

Evidence Audit1 recorded bounded research hard results as `PR-1` only and
identified B2, the missing Production-compatible materializer, as the common
smallest blocker. It also preserved the later fixture ROLE GAP, performance
gap, viewport threshold gap, and visual/settling/routing evidence boundary.

This Design1 closes only the contract shape for B2. It does not close B2 by
implementation and does not advance any candidate to `PR-2`.

## Current Production non-target path

The live path is frozen as a non-target for this checkpoint:

```text
App.acceptDataset
  -> getStoredCoordinates
  -> buildEntityGraph
  -> placeInitialEntities
  -> if no Stored Coordinates: settleInitialPlacement
  -> fitGraphView / render
```

The current source uses `placeInitialEntities` for Stored/Owned precedence and
bounded unowned placement. When no Stored Coordinates exist, the current App
then calls `settleInitialPlacement` with three iterations. Partial Stored
Coordinate opening does not take that settling branch. Those semantics remain
the accepted Production baseline and are not reinterpreted as TA0 or FP1.

The evaluation materializer MUST NOT replace either placement function, alter
the App startup selection, change fallback behavior, change dirty-state
semantics, or become a default.

## Architecture alternatives M1-M4

| Architecture | Assessment | Decision |
| --- | --- | --- |
| M1 pure function library | Strong auditability and deterministic unit testing, but needs a disposable runtime adapter for fixture/provenance/artifact evidence. | Included as the inner core. |
| M2 disposable harness adapter | Reuses Production-compatible types/utilities, supports runtime and provenance evidence, and remains outside App startup and the bundle. | **Selected minimum surface.** |
| M3 hidden/debug App path | Introduces Product-visible or reachable selection and risks persistence, navigation, and bundle leakage. | Rejected. |
| M4 Production strategy registry | Broadens live architecture before a candidate is selected and is unnecessary for B2. | Rejected. |

The selected form is therefore M2 + M1: a pure candidate materializer called
by a disposable harness. M2 is needed for the supported-runtime and artifact
boundary; M1 keeps candidate semantics free of App state.

## Production-compatible definition

For this project, a Production-compatible evaluation materializer is a
callable evaluator that:

1. accepts the normalized Entity graph and coordinate types used by the
   supported LiaisonScape toolchain;
2. implements one exact, provenance-named research operational contract;
3. produces finite runtime-number coordinates in the contract's Derived
   representation when the required transform is supplied;
4. can be executed by the supported local runtime without the live App;
5. exposes hard-gate, determinism, failure, and provenance evidence; and
6. has no startup, persistence, selection, navigation, or user-state effect.

It does **not** mean wired into Production startup, included in the main
Production bundle, accepted as a replacement, or safe for visual use without
the later evidence layers.

## Isolation contract

The evaluation surface has all of these requirements:

- no App startup hook;
- no user-facing or query-parameter candidate selector;
- no hidden persisted preference;
- no Dataset schema or Extension change;
- no automatic execution from `main.tsx` or `App.tsx`;
- no default candidate;
- no fallback into the current baseline;
- no `localStorage`, browser history, selection, navigation, or pending-work
  mutation;
- no network, remote code, dynamic evaluation, or external persistence; and
- local Dataset/fixture bytes only.

## Dependency direction

The dependency direction is:

```text
disposable evaluation harness
  -> pure candidate materializer
  -> stable Production Dataset/graph/coordinate types and utilities
```

The reverse dependency is forbidden:

```text
Production App / main entrypoint -> evaluation materializer
```

The materializer must not import App orchestration, React state, viewport,
labels, routing, or browser persistence utilities. A future reference adapter
may invoke existing `placeInitialEntities` and the separately identifiable
`settleInitialPlacement`, but that adapter is not a research candidate.

## Candidate authorization registry

The registry below is an evaluation-only authorization boundary. “Authorized”
means authorized to be implemented on the bounded surface, not selected for
Production.

| Identity | Materializer ID | Classification | First implementation | Reason |
| --- | --- | --- | --- | --- |
| `REFERENCE-BASELINE` | `REFERENCE-BASELINE-ADAPTER-v1` | reference adapter, not candidate | NO; later comparison aid | Current live source is authoritative baseline, not a research replacement. |
| `TA0/REP-0` | `TA0-REP0-MAT-v1` | `GENERIC-CONTRACT-BUT-RESEARCH-ONLY` | YES | Generic graph extraction, degree-descending/code-point lexical order, FP1 direct zip, and explicit hard-gate failure are sufficient in the bounded domain. |
| `TA1-W1-OP-v1` | none authorized | `FIXTURE-WITNESS-ONLY` | NO | Its component-membership token is frozen for connected fixture witnesses and does not define an arbitrary disconnected-graph ordering. |
| `TA2-DEG-W1-OP-v1` | `TA2-DEG-MAT-v1` | `GENERIC-CONTRACT-BUT-RESEARCH-ONLY` | YES | Degree semantic classes and the declared operational linear extension are generic within the accepted graph domain. |
| `TA2-MOTIF-W1-OP-v1` | `TA2-MOTIF-MAT-v1` | `GENERIC-CONTRACT-BUT-RESEARCH-ONLY` | YES | Corrected `R(V)=(m(V),o(V),s(V))`, componentwise dominance, repeated maxima, and lexical operational tie handling are defined. |
| `TA3-FWD-W1-OP-v1` | `TA3-FWD-MAT-v1` | `GENERIC-CONTRACT-BUT-RESEARCH-ONLY` | YES | NEW responsibility/spacing/correspondence semantics are defined for accepted topology; no historical replay is used. |
| `TA3-REV-W1-OP-v1` | `TA3-REV-MAT-v1` | `GENERIC-CONTRACT-BUT-RESEARCH-ONLY` | YES | Same NEW semantic layers with the separately defined reverse spacing orientation. |
| `FP1-NGP` | `FP1-NGP-MAT-v1` | `GENERIC-CONTRACT-BUT-RESEARCH-ONLY` | YES as family dependency | Formula and exact substrate are generic for the bounded `N` domain; runtime transform is an explicit input, never an invented default. |
| `K3 orbit control` | none | control-only | NO | A symmetry/integrity control cannot become a quality candidate. |

No geometry alias changes semantic identity. TA3 Reverse being literally
identical to TA2 motif on current fixtures does not merge their contracts.
TA1 is not silently generalized and no fixture table is runtime algorithmic
semantics.

## Generic-versus-fixture materializer audit

| Identity | Accepted operational authority | Generic status | Boundary |
| --- | --- | --- | --- |
| TA0/REP-0 | degree-descending, code-point lexical order, direct zip to FP1 | `GENERIC-CONTRACT-BUT-RESEARCH-ONLY` | no semantic fallback; hard-gate failure is returned |
| TA1-W1 | eight-field W1 signature including fixture-local component token | `FIXTURE-WITNESS-ONLY` | deferred; no invented component ordinal or disconnected ordering |
| TA2 degree | descending degree; lexical only within equal semantic class | `GENERIC-CONTRACT-BUT-RESEARCH-ONLY` | equal degree is not semantic privilege |
| TA2 motif | repeated maxima of componentwise `R(V)`; lexical only among simultaneous maxima | `GENERIC-CONTRACT-BUT-RESEARCH-ONLY` | incomparability remains; `o(V)` uses corrected cluster-object count |
| TA3 Forward | NEW responsibility to larger `SPACE-S1` role | `GENERIC-CONTRACT-BUT-RESEARCH-ONLY` | not historical TA3 replay |
| TA3 Reverse | NEW responsibility to smaller `SPACE-S1` role | `GENERIC-CONTRACT-BUT-RESEARCH-ONLY` | not historical TA3 replay |
| FP1-NGP | `P_i=(i/m,(i/m)^2)` with exact `Q_i=(m*i,i^2)` | `GENERIC-CONTRACT-BUT-RESEARCH-ONLY` | only explicit bounded transform makes runtime numbers |

“Generic” here means a deterministic algorithm is defined for the bounded
normalized graph domain, not that the identity is a Production policy or that
all future Dataset topologies are supported.

## TA0 authority

TA0 is materializable without semantic invention in the first domain:

1. derive the accepted normalized Entity topology;
2. compute distinct non-self Entity-neighbor degree;
3. sort Nodes by descending degree;
4. use Unicode/code-point Entity ID order only within equal degree classes;
5. generate the exact FP1 candidate sequence; and
6. direct-zip the ordered Nodes to ascending FP1 indices.

The graph extraction, sort, candidate generation, and direct zip are generic
within the input contract. TA0 does not define a repair or a fallback when a
hard gate fails. The materializer returns `HARD-GATE-FAIL`; it does not invent
a new candidate sequence.

TA0/REP-0 remains a research identity. The materializer must not call it a
historical replay or equate it with the current Production baseline.

## TA1 authority

TA1 semantic hypothesis and `TA1-W1-OP-v1` are distinct. W1 defines an exact
fixture-local eight-field signature and ascending operational order. Its
component field uses one shared token for the connected fixtures and explicitly
does not invent an ordinal for arbitrary components. Therefore W1 is a
fixture-witness-only contract for this design.

The surface records TA1 in the registry for traceability but does not assign a
materializer ID or authorize its first implementation. A future generic TA1
contract requires a separately authorized reconciliation; this checkpoint
does not create one.

## TA2 authority

### TA2 degree

`TA2-DEG-NEW-v1` uses distinct-neighbor degree as its semantic order. Equal
degree is a semantic class; lexical code-point order is only the operational
linear extension within that class. The direct zip to ascending FP1 indices is
the exact operational witness boundary.

### TA2 motif

`TA2-MOTIF-NEW-v1` uses:

```text
R(V) = (m(V), o(V), s(V))
```

where `m` is motif membership, `o` is the count of derived motif-overlap
cluster objects containing the Node, and `s` is the count of distinct other
Nodes sharing an accepted motif. Dominance is componentwise; equal vectors are
equivalent; unequal non-dominating vectors remain incomparable. Repeated
maxima extraction is the operational linear extension, with lexical selection
only among simultaneous maxima.

The superseded Ashen `(4,4,*)` and `(2,2,*)` forms are not accepted input.
The known `o(V)` concern remains a candidate-specific PR-3+ semantic blocker
if a later quality claim materially depends on it; it does not block this
materialization contract because the corrected definition is the accepted
current authority.

## TA3 authority

TA3 materialization uses the NEW contracts only:

```text
TA3-RESP-NEW-v1
TA3-SPACE-NEW-v1
TA3-CORR-OP-v1
TA3-CORR-FWD-NEW-v1
TA3-CORR-REV-NEW-v1
```

Responsibility is derived from corrected motif/cluster topology. `SPACE-S1`
derives candidate-local spacing roles from exact FP1 neighbors. Forward zips
higher responsibility to larger spacing roles; Reverse zips it to smaller
spacing roles. `N=1` and `N=2` are explicit boundaries. Candidate index is an
operational handle only.

TA3 Forward and Reverse are separately materializable generic operational
identities in the bounded domain. They are not the recovered historical
`TA-3-forward` or `TA-3-reverse` mappings, and no historical backfill is
performed.

## FP1 generator and numeric domain

For `N >= 2`, let `m=N-1`:

```text
P_i = (i/m, (i/m)^2), i = 0 ... N-1
Q_i = (m*i, i^2)
D   = m^2
P_i = (m*i/D, i^2/D)
```

`Q_i` and `D` are the exact arithmetic substrate. For `N=1`, the defined
family is the singleton `{P0=(0,0)}` and no division is performed. For `N=0`,
FP1 is undefined and the materializer returns `DOMAIN-MISMATCH`.

The maximum currently evidenced FP1 family domain is `N=65`. The first
implementation domain is therefore `1 <= N <= 65`; this is not a claim that
larger values are impossible. `N>65` returns `DOMAIN-MISMATCH` until a later
bounded domain decision authorizes expansion.

The generator is `O(N)` in candidate count and uses no randomness. Multi-
component graphs, motif-free graphs, high fanout within `N<=65`, self-relation
exclusion, duplicate-pair collapse, and non-Entity endpoint exclusion are
defined by the normalized projection below. Hard validity is still checked
after assignment.

## Exact-to-runtime arithmetic boundary

The research contract does not define a LiaisonScape pixel scale or origin.
This design does not invent one. Instead, runtime materialization requires a
caller-supplied, provenance-recorded **positive uniform affine transform**:

```text
x_runtime = originX + scale * x_exact
y_runtime = originY + scale * y_exact
scale > 0
```

`originX`, `originY`, and `scale` are exact rational configuration values with
positive denominators. The evaluator computes exact rational results first,
then converts them to JavaScript `Number` values at the single runtime
boundary. The exact rational values remain in the raw artifact.

The conversion MUST:

- reject zero or negative scale;
- reject malformed or zero denominators;
- reject non-finite runtime numbers;
- reject conversion results that collapse distinct coordinates;
- record the exact transform and its canonical serialization; and
- never apply an implicit scale, viewport fit, or per-fixture tuning.

If the transform is absent or invalid, the result is `INVALID-INPUT` or
`MATERIALIZATION-UNDEFINED`; there is no default identity transform claim.
The transform is an evaluation configuration, not a candidate semantic and
not a Production coordinate policy.

## Materialization input contract

The materializer consumes a normalized projection rather than labels or the
full UI Dataset object:

```text
MaterializationInput {
  inputAuthority: {
    datasetSha256?: string,
    graphProjectionSha256: string,
    fixtureAuthority: string,
    fixtureHash?: string,
    sourceCommit: string
  },
  graph: {
    nodes: [{ id: string }],
    undirectedEntityEdges: [{ a: string, b: string }]
  },
  candidateId: string,
  semanticContract: string,
  materializerId: string,
  materializerVersion: string,
  candidateFamily: { id: "FP1-NGP", version: string },
  ownershipMode: "EVAL-FULL-SEED",
  runtimeTransform: { originX: Rational, originY: Rational, scale: Rational },
  configuration: object
}
```

The projection is canonical: Node IDs are unique and nonempty; edge endpoints
exist; `a` and `b` are code-point ordered; self edges are absent; duplicate
undirected pairs are represented once. Raw Dataset extraction may exclude
self-relations and non-Entity endpoints according to accepted graph
semantics, but the resulting projection hash is recorded. A malformed
projection is rejected rather than repaired.

The materializer does not consume Node labels, Relation labels, descriptions,
locale, viewport, render positions, current route output, current label
placements, Stored Coordinates, browser state, or localStorage. Those are
downstream or outside the candidate semantics.

## Materialization output contract

Successful output has this logical shape:

```text
MaterializationResult {
  status: "SUCCESS",
  candidateId: string,
  materializerId: string,
  inputAuthority: {...},
  ownershipMode: "EVAL-FULL-SEED",
  coordinateRepresentation: "DERIVED-RUNTIME-NUMBER-WITH-EXACT-SUBSTRATE",
  coordinates: {
    nodeId: { x: number, y: number, exactX: RationalString, exactY: RationalString }
  },
  diagnostics: {...},
  hardGates: { HARD-1: ..., HARD-2: ..., HARD-3: ..., HARD-4: ..., HARD-5: ..., HARD-6: ..., HARD-7: ... },
  determinism: {...},
  provenance: {...}
}
```

The coordinate map is keyed by Node ID. It is Derived and ephemeral. Failure
results retain diagnostics and provenance but do not expose a successful
coordinate map as accepted output. Raw candidate coordinates may be retained
in `raw-materialization.json` for audit attribution, marked as unaccepted.

## Coordinate ownership and partial-Owned boundary

Ownership is frozen as:

```text
Stored/Owned Coordinates > evaluation Derived coordinates
```

The first implementation supports only `EVAL-FULL-SEED`: a complete
from-scratch candidate materialization against the normalized graph, with no
partial Stored Coordinate merge. If the input carries partial or complete
Owned coordinates, the materializer must reject the input for this mode; it
must not silently ignore or overwrite them.

`EVAL-PARTIAL-UNOWNED` is deferred because inheriting the current Production
partial-coordinate behavior would mix candidate semantics with ownership and
would prevent a clean first nonvisual attribution. A later coordinate-boundary
checkpoint may define it separately. This design does not declare partial
Owned semantics solved.

## No-state-mutation contract

Materialization MUST NOT:

- write or return a mutated Dataset as a side effect;
- persist coordinates or write localStorage;
- set `coordinatesDirty` or Dataset modified state;
- change pending user work or replacement safety state;
- change selection, navigation, browser history, or viewport;
- mutate input arrays, objects, or fixture bytes; or
- trigger an App render or startup path.

The result is an artifact for evaluation only. Separate future acceptance is
required before any coordinate can become user-owned or persisted.

## Settling boundary

The candidate materializer emits seed coordinates only. Settling is a separate
future evaluation stage:

```text
candidate materializer -> seed Derived coordinates
separate settling evaluation -> post-settle coordinates
```

The current Production three-iteration `settleInitialPlacement` behavior is
recorded as a reference boundary, not embedded in candidate semantics. A
candidate cannot receive credit because settling repairs an invalid seed, and
settling quality is not evaluated here.

## Routing and label boundary

Materialization does not depend on routing, ordinary/parallel/self-loop route
geometry, Node labels, Relation labels, locale, or viewport. Route and label
evaluation consumes a later seed or post-settle result. This prevents a
structural assignment witness from being treated as visual acceptance and
keeps the present routing/label work outside this checkpoint.

## Hard-gate order

The exact order is:

```text
candidate semantics
  -> exact operational materialization
  -> exact-to-runtime coordinate conversion
  -> coordinate freeze
  -> HARD-1..7 audit
  -> result artifact
```

The gates are eligibility gates, not quality scores:

| Gate | Requirement |
| --- | --- |
| HARD-1 | All runtime coordinates are finite numeric values. |
| HARD-2 | Candidate points are distinct where distinct Nodes are required. |
| HARD-3 | Node-to-candidate assignment is injective and complete. |
| HARD-4 | Accepted motifs satisfy GEO-0 nondegeneracy. |
| HARD-5 | Accepted motifs satisfy GEO-3 distinct positive neighbor rays when a noncoincident realization exists. |
| HARD-6 | No Node is missing, duplicated, extra, or incompletely assigned. |
| HARD-7 | No runtime exception or invalid numeric state occurs. |

A failed hard gate rejects that materialization result. It does not trigger a
swap, remap, retry with another policy, lexical repair, geometry repair, or
baseline fallback.

## Failure semantics

The result taxonomy is frozen as follows:

| Status | Meaning |
| --- | --- |
| `SUCCESS` | Exact authorized materializer completed and all HARD-1..7 gates passed. |
| `UNSUPPORTED-CANDIDATE` | Candidate ID is not in the authorization registry for this surface. |
| `INVALID-INPUT` | Required field, projection, transform, or provenance input is malformed. |
| `DOMAIN-MISMATCH` | Input is outside the first supported domain, such as `N=0` or `N>65`. |
| `MATERIALIZATION-UNDEFINED` | Accepted identity has no defined operation for the supplied domain. |
| `HARD-GATE-FAIL` | Materialization completed but a frozen hard gate failed. |
| `NONFINITE-OUTPUT` | Runtime conversion produced a non-finite number. |
| `NONINJECTIVE-OUTPUT` | Distinct required Nodes collapsed to one coordinate. |
| `RUNTIME-ERROR` | Unexpected evaluator exception; no fallback is attempted. |

No result status silently falls back to another candidate or to
`REFERENCE-BASELINE`. No automatic geometry repair is allowed unless a future
accepted candidate contract explicitly includes it; none does here.

## Determinism hooks

The future implementation must record enough evidence for:

```text
same input bytes + same candidate + same configuration
  => same canonical output
```

The harness must provide controls for Entity-array reorder, Relation-array
reorder, public serialization preservation, and supported runtime execution.
Canonical graph derivation sorts Node IDs and edge endpoint pairs by Unicode
code point and uses no locale or filesystem order. Candidate semantics that
use lexical IDs declare that operational dependency. Literal rename stability
is not claimed; semantic rename transport remains a candidate-specific
property.

This Design1 freezes the hooks only. It does not claim `E-DETERMINISM` or
runtime compatibility PASS for an unimplemented surface.

## Output fingerprint and canonicalization

The fingerprint is computed from a canonical UTF-8 JSON object whose entries
are keyed by sorted Node ID, not from row order. Runtime numbers use the
supported JavaScript JSON number serialization after normalizing `-0` to `0`
and rejecting non-finite values. Exact research rationals are serialized as
canonical reduced signed-integer strings such as `"9/81"`; reduction and
denominator sign are explicit, not implicit rounding.

The fingerprint is SHA-256 over that canonical byte sequence. The output
artifact stores the canonicalization version, transform, exact rational
substrate, runtime coordinate map, and fingerprint. It must not silently round
or truncate coordinates.

## Provenance contract

Every future execution record must include:

- `candidateId`;
- semantic contract ID and provenance;
- operational `materializerId` and version;
- candidate family ID/version;
- evaluation source commit;
- accepted Production source commit;
- Dataset/fixture authority and raw hash when applicable;
- normalized graph projection hash;
- runtime and toolchain version;
- Node and Relation counts;
- ownership mode;
- exact runtime transform;
- configuration;
- exact-to-runtime representation;
- output coordinate hash;
- HARD-1..7 results;
- status and failure reason; and
- artifact hashes.

Filename-only provenance is insufficient. Current dirty Lighthouse sample
bytes cannot be used as authority; the committed fixture authority and hash
must be named.

## Future artifact model

The first implementation should emit an isolated artifact set:

```text
manifest.json
raw-materialization.json
audit-results.json
```

`manifest.json` contains identity, contracts, input/configuration, provenance,
and artifact hashes. `raw-materialization.json` contains exact and runtime
coordinates plus diagnostics, including rejected raw output where needed.
`audit-results.json` contains hard-gate and determinism observations. Raw
output and interpretation remain separate; an interpretation must not rewrite
raw evidence.

## Implementation location and bundle boundary

No implementation is created here. The future implementation location is a
disposable clone-local surface:

```text
experimental/production-candidate-materialization/
```

inside a source snapshot of the accepted LiaisonScape commit. Its pure core,
harness adapter, tests, and artifacts remain outside the tracked Production
`src/` path unless a later checkpoint explicitly changes that boundary.

The evaluation surface is **not included in the Production bundle**. It is not
reachable from `main.tsx` or `App.tsx`. It may import stable pure Production
types/utilities from the source snapshot, but Production must never import the
evaluation materializer. No new clone or directory is created by this Design1.

## Baseline adapter decision

The current baseline is a `REFERENCE-BASELINE`, not a candidate. A later
implementation may add a reference adapter that invokes the existing
`placeInitialEntities` and, in a separately named operation, the current
three-iteration `settleInitialPlacement`. That adapter is useful for
like-for-like diagnostics but is not required to materialize a research
candidate and cannot be used as an implicit fallback.

No baseline adapter is implemented or counted as a first-implementation
candidate in this checkpoint.

## Common fixture ROLE GAP

The ROLE GAP remains preserved:

- realistic ordinary;
- motif-rich;
- high-fanout;
- sparse;
- dense;
- symmetry/control; and
- larger-size roles.

The future harness accepts arbitrary frozen fixture authorities and hashes; it
does not hardcode Lighthouse, Ashen Crown, Berlin Wall, Apollo 11, Titanic, or
K3. Materialization does not solve the common role mapping. A later fixture
coverage checkpoint must freeze the common set before visual comparison.

## MAT claim levels

This design reaches only:

```text
MAT-C0  materialization contract fact
MAT-C1  generic-enough candidate materializer design in the bounded domain
```

No `MAT-C2` implementation, `MAT-C3` runtime evidence, or `MAT-C4+` readiness
claim is emitted. No research identity reaches `PR-2` merely because this
design exists.

## Supported-domain matrix

| Domain | TA0 | TA1-W1 | TA2 | TA3 | FP1 |
| --- | --- | --- | --- | --- | --- |
| `N=0` | `DOMAIN-MISMATCH` | `OUT-OF-SCOPE` | `DOMAIN-MISMATCH` | `DOMAIN-MISMATCH` | `DOMAIN-MISMATCH` |
| `N=1` | DEFINED | fixture-only / deferred | DEFINED | DEFINED; Forward=Reverse | DEFINED singleton |
| `N=2` | DEFINED | fixture-only / deferred | DEFINED | DEFINED; equal spacing-role class | DEFINED |
| `3<=N<=65` | DEFINED | fixture-only / deferred | DEFINED | DEFINED | DEFINED |
| `N>65` | `DOMAIN-MISMATCH` for first domain | OUT-OF-SCOPE | `DOMAIN-MISMATCH` for first domain | `DOMAIN-MISMATCH` for first domain | `DOMAIN-MISMATCH` |
| multiple components | DEFINED by normalized graph | fixture-only / deferred | DEFINED | DEFINED | DEFINED |
| motif-free graph | DEFINED | fixture-only / deferred | DEFINED with zero responsibility | DEFINED with zero responsibility | DEFINED |
| high fanout within domain | DEFINED; hard gate decides | fixture-only / deferred | DEFINED; hard gate decides | DEFINED; hard gate decides | DEFINED; hard gate decides |
| self-relations / duplicate pairs | excluded/canonicalized before input | same boundary, not authorized | excluded/canonicalized before input | excluded/canonicalized before input | family input is Node-count based |
| non-Entity endpoints | absent from normalized projection | absent from normalized projection | absent from normalized projection | absent from normalized projection | not a family input |

“Defined” does not mean hard-valid for every topology. It means the operation
has an exact result or an attributable hard-gate failure without invention.

## Central questions Q1-Q45

| ID | Answer |
| --- | --- |
| Q1 | A Production-compatible evaluation materializer is an isolated callable that uses compatible types, exact research semantics, runtime-number output, provenance, and no Product state. |
| Q2 | It evaluates a research identity outside startup; Production placement is the live `App.acceptDataset` behavior. |
| Q3 | M2 Disposable Harness Adapter containing an M1 pure core. |
| Q4 | No. The live App does not import it. |
| Q5 | No. It is excluded from the Production bundle. |
| Q6 | No. Output is Derived and ephemeral. |
| Q7 | No. Stored/Owned coordinates remain authoritative; first mode is full-seed only. |
| Q8 | No dirty, modified, pending-work, selection, navigation, or localStorage state changes. |
| Q9 | No. Settling is a separate later evaluation stage. |
| Q10 | No. Routing and labels are downstream. |
| Q11 | TA0/REP-0, TA2 degree, TA2 motif, TA3 Forward, TA3 Reverse, and FP1-NGP family dependency enter the bounded registry; TA1 is traceable but deferred. |
| Q12 | No. K3 is control-only. |
| Q13 | The current baseline is a reference adapter boundary, not a candidate. |
| Q14 | TA0, TA2 degree, TA2 motif, TA3 Forward, and TA3 Reverse are generic-enough within the bounded domain; FP1 is a generic-enough family dependency. |
| Q15 | TA1-W1 is fixture-witness-only; K3 is control-only. |
| Q16 | Yes, in the bounded domain; undefined hard-gate outcomes return failure, never repair. |
| Q17 | No. TA1-W1 lacks arbitrary disconnected-component authority and is deferred. |
| Q18 | Yes, within `1<=N<=65` and normalized graph input. |
| Q19 | Yes, with corrected `o(V)` and partial-order semantics. |
| Q20 | Yes, as NEW Forward semantics, not historical replay. |
| Q21 | Yes, as NEW Reverse semantics, not historical replay. |
| Q22 | Yes as a bounded generic generator; it remains research-only and needs explicit transform input. |
| Q23 | First domain: `1<=N<=65`; larger N is not implied. |
| Q24 | Singleton `(0,0)`; no division. |
| Q25 | `DOMAIN-MISMATCH`; no candidate fallback. |
| Q26 | Normalized graph, authority/hashes, identity/version fields, full-seed mode, exact transform, and configuration. |
| Q27 | Status, identity, authority, keyed Derived coordinates, exact substrate, diagnostics, gates, determinism metadata, failure, and provenance. |
| Q28 | `EVAL-FULL-SEED`. |
| Q29 | No. Partial-Owned mode is deferred and rejected by the first surface. |
| Q30 | Return `MATERIALIZATION-UNDEFINED` or `DOMAIN-MISMATCH`, preserving attribution. |
| Q31 | Return `HARD-GATE-FAIL`; do not remap, retry, repair, or fallback. |
| Q32 | No, unless a future semantic contract explicitly says so; none does here. |
| Q33 | No. Baseline fallback is forbidden. |
| Q34 | Canonical sorted Node-keyed JSON, exact rational strings, normalized `-0`, finite runtime numbers, and SHA-256. |
| Q35 | Exact rational FP1 substrate through a required caller-supplied positive uniform affine transform. |
| Q36 | Candidate/semantic/materializer/family IDs, both source authorities, fixture and projection hashes, runtime/config, counts, transform, output hash, gates, status, and failure. |
| Q37 | Disposable clone-local `experimental/production-candidate-materialization/`. |
| Q38 | No. Dependency direction is evaluation surface to stable Production utilities. |
| Q39 | Yes, through normalized projection and explicit fixture authority/hash; no fixture is hardcoded. |
| Q40 | No. ROLE GAP remains later work. |
| Q41 | No. Materialization design does not issue PR-2. |
| Q42 | MAT-C0 and bounded MAT-C1 only. |
| Q43 | No candidate is selected. |
| Q44 | `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-IMPLEMENTATION1`. |
| Q45 | No. The next checkpoint is recorded but not auto-started. |

## Hypotheses H1-H17

| ID | Assessment |
| --- | --- |
| H1 | Supported by design: an isolated harness can address B2 without live startup. |
| H2 | Supported: compatible types do not imply Production integration. |
| H3 | Supported: M2 + M1 is the smallest sufficient seam. |
| H4 | Supported: fixture tables remain oracle/evidence inputs, not semantics. |
| H5 | Supported for TA0, TA2, TA3, and FP1 in the bounded domain; not for TA1-W1. |
| H6 | Supported: exact operational identities retain their own provenance. |
| H7 | Supported: FP1 exact arithmetic has an explicit transform boundary. |
| H8 | Supported: output is Derived and ephemeral. |
| H9 | Supported: Stored/Owned precedence is preserved and partial mode is deferred. |
| H10 | Supported: settling remains downstream. |
| H11 | Supported: routing/labels remain downstream. |
| H12 | Supported: hard-gate failures are attributable and non-repairing. |
| H13 | Supported by the keyed fingerprint contract. |
| H14 | Supported: arbitrary fixture authorities are input data, not hardcoded logic. |
| H15 | Supported as sequencing: B2 can be designed/implemented before ROLE GAP coverage. |
| H16 | Supported: no Production bundle/import is required. |
| H17 | Supported: this design alone advances no candidate beyond bounded MAT-C1. |

## Falsification N1-N21

| ID | Result |
| --- | --- |
| N1 | Not triggered: no live App startup change is authorized. |
| N2 | Not triggered: Product-visible selection is not required. |
| N3 | Not triggered: TA1 fixture-only status is explicit. |
| N4 | Not triggered: fixture mappings are not runtime semantics. |
| N5 | Not triggered: TA1 semantic hypothesis and W1 remain separate. |
| N6 | Not triggered: TA3 is explicitly NEW, not historical replay. |
| N7 | Not triggered: Stored/Owned coordinates are not overwritten. |
| N8 | Not triggered: Derived output is nonpersistent. |
| N9 | Not triggered: dirty/modified state is outside the harness. |
| N10 | Not triggered: settling is separate. |
| N11 | Not triggered: routing and labels are forbidden inputs. |
| N12 | Not triggered: undefined materialization has explicit failure statuses. |
| N13 | Not triggered: hard-gate failure has no undocumented repair. |
| N14 | Not triggered: exact-to-runtime conversion requires explicit transform and provenance. |
| N15 | Not triggered: output identity is keyed by Node ID. |
| N16 | Not triggered: Production entrypoint imports no evaluation module. |
| N17 | Not triggered: ROLE GAP remains open. |
| N18 | Not triggered: no candidate reaches PR-2 here. |
| N19 | Not triggered: no candidate is selected. |
| N20 | Not triggered: Production source change is outside this design. |
| N21 | Not triggered: protected state was preserved. |

## CASE and final decision

The selected result is **CASE 1**. The materialization contract is complete
for the explicitly bounded first implementation set, while TA1-W1 remains
deferred as fixture-only and the common ROLE GAP remains open.

The selected decision is **Decision A**. The next responsibility is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-IMPLEMENTATION1`

The next checkpoint was not started automatically.

## Roadmap and knowledge boundary

The roadmap receives only a minimal status entry recording M2 + M1, the
registry boundary, the generic-versus-fixture result, Derived/nonpersistent
output, the bounded `1<=N<=65` domain, the preserved ROLE GAP, and the exact
next checkpoint. Unrelated priorities are not reordered.

Knowledge Candidate: **YES - multiple reusable materialization principles**.
The principles are recorded here only; `ai-knowledge` is not modified. They
are:

- Production-compatible evaluation code need not be Production-integrated;
- fixture witnesses must not be silently generalized;
- evaluation materializers should emit ephemeral Derived state;
- failure must remain attributable to the audited identity;
- evaluation code should depend on stable Production utilities, not the
  Production entrypoint; and
- exact research arithmetic needs an auditable runtime-number boundary.

## Validation boundary

This Design1 performs no browser, runner, objective rerun, visual acceptance,
benchmark, implementation, or new clone operation. The required read-only
gates are run after the document and roadmap update:

- Original LiaisonScape: `npm.cmd test`, `npm.cmd run lint`,
  `npm.cmd run build`, and `git diff --check`;
- e2r-spec: `npm.cmd run validate` and `git diff --check`.

The expected historical application baseline is 280 tests; the live count is
reported in the final handoff. No gate result is used as a candidate quality
ranking.

## Final state

- Production candidate selected: **NO**
- Production source changed: **NO**
- evaluation materializer implemented: **NO**
- live App import or bundle path changed: **NO**
- Dataset/Core/Extension/schema changed: **NO**
- TA semantics changed: **NO**
- objective rerun: **NO**
- visual acceptance: **NO**
- benchmark: **NO**
- settling/routing/labels/UI/solver changed: **NO**
- protected Session preserved: **YES**
- protected Lighthouse samples preserved: **YES**
- research surfaces and routing preview preserved: **YES**
- `ai-knowledge` changed: **NO**
- new clone created: **NO**
- FP1/F2 changed: **NO**
- ROLE GAP solved: **NO**
- push/tag/release/deploy/publication: **NONE**
