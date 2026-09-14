# LiaisonScape Explicit High-quality Auto Layout Operation Lifecycle 1

Date: 2026-09-14

Status: **LIFECYCLE CONTRACT ESTABLISHED / QUALITY SOLVER HOLD / PRODUCT INTEGRATION HOLD / NOT READY FOR HUMAN REVIEW**

## Scope and decision

This checkpoint defines the operation lifecycle required by the provisionally
adopted execution split: fast deterministic Initial Placement at startup plus
an explicit High-quality Auto Layout operation. It does not implement a
high-quality solver, change the Product default, or integrate a new provider.

The result is a solver-independent contract. A synchronous fake, cooperative
asynchronous job, or Worker-shaped job may all use the same snapshot, token,
candidate, cancellation, and acceptance rules. The lifecycle is therefore
usable as a bounded integration seam without making execution mechanism or
solver quality claims.

The decision remains:

- execution split B: `PROVISIONALLY ADOPT`;
- quality solver: `HOLD / NOT ESTABLISHED`;
- Product default/adoption: `HOLD`;
- production provider: `NOT ESTABLISHED`;
- Adaptive Initial Placement Cascade: `INACTIVE`;
- Initial Layout Release blocker: `OPEN`;
- Human Review: `NOT READY`.

## Source-first findings

The current source was inspected before defining the contract:

- `src/auto-layout.ts` has a deterministic three-iteration startup settling
  path and a basic twelve-iteration `solveAutoLayout` default;
- `src/actual-product-initial-layout.ts` preserves stored Coordinates and
  uses the current fallback unless an opt-in prototype provider is selected;
- `src/graph-presentation.ts` remains the Product authority for ordinary
  routing, Parallel/Incident presentation, final Relation-label and Node-label
  placement, and its bounded feedback pass;
- `src/App.tsx` already has an explicit Auto Layout trigger, session position
  replacement, adopted-coordinate tracking, `coordinatesDirty`, confirmation
  when unsaved coordinates exist, and a separate `Save Coordinates` boundary;
- `src/dataset-replacement-safety.ts` preserves pending coordinate/session work
  and controls Dataset replacement loss risk.

The implementation gap is material: current `applyAutoLayout()` is synchronous,
replaces session positions immediately, and does not expose a running
operation, cancellation, isolated candidate preview, stale-result guard, or
one-step revert. The current source therefore supports the execution boundary
but does not yet implement this checkpoint's lifecycle. No production source
was changed to conceal that gap.

## Minimal state model

The diagnostic contract in
`e2r-liaison-scape/experimental/quality-operation-lifecycle/contract.mjs`
models these states:

```text
idle -> running -> candidate-ready -> previewing
                 |                    |
                 +-> cancel-requested +-> accepted / rejected / cancelled
                 |                    |
                 +-> failed / stale <-+
```

`cancel-requested` is retained until the job completion callback is consumed,
so a completion/cancellation race cannot accidentally publish a candidate.
Terminal outcomes retain a reason for diagnostics. A late result from an old
operation records `stale` without clearing a newer active operation.

The operation record contains an immutable input snapshot, operation ID,
generation token, candidate slot, and optional Product-derived preview. The
current session and Dataset are outside that record and remain unchanged until
an explicit accept transaction is applied by Product.

## Snapshot and invalidation contract

The minimum semantic snapshot includes:

- Dataset identity and revision, graph projection, and current session Node
  positions;
- stored/authored coordinate fingerprint, dirty state, and adopted-coordinate
  fingerprint;
- manual ordinary Relation-route and Self-loop inputs;
- manual Relation-label and Node-label inputs;
- locale, algorithm version, and explicit budget policy;
- viewport fingerprint for preview derivation only.

The snapshot identity excludes read-only selection and viewport-only changes.
The latter may invalidate a derived preview, but does not discard a valid
geometry candidate.

| change | running operation | candidate/preview | accepted-layout revert |
| --- | --- | --- | --- |
| Node move | stale/cancel | stale | expires |
| manual ordinary route | stale/cancel | stale | remains usable for Node geometry |
| manual Self-loop | stale/cancel | stale | remains usable for Node geometry |
| manual Relation-label or Node-label edit | stale/cancel | stale | remains usable for Node geometry |
| Dataset/entity/Relation mutation | stale/cancel | stale | expires |
| Dataset replacement | stale/cancel | stale | expires |
| coordinate load/reset | stale/cancel | stale | expires |
| another Auto Layout | old operation stale | old candidate stale | expires/replaced |
| coordinate save / stored-authority change | stale/cancel | stale | expires |
| locale change | stale/cancel | stale | remains only if the Product explicitly proves label-independent use; default is expire during active work |
| viewport-only change | remains | preview cleared, candidate retained | remains |
| read-only selection/inspection | remains | remains | remains |

The conservative locale rule is intentional: even though Node geometry is the
proposal, long English/Japanese labels affect Product verification and preview
readability. A future implementation may split geometry and presentation
versions, but must not silently use a label-dependent result after a locale
change.

## Cancellation, completion, and transport independence

Cancellation is cooperative at the contract boundary. The job receives an
envelope containing the operation ID, generation token, and cloned snapshot.
Cancellation before a result changes the state to `cancel-requested`; a late
candidate becomes `cancelled`. Cancellation after a candidate or preview is
terminal and repeated cancellation is idempotent.

Every result is accepted only when all of the following hold:

1. operation ID and generation match the active operation;
2. cancellation has not been requested;
3. the current semantic snapshot identity still equals the captured identity;
4. the candidate has a complete finite position map.

Otherwise the result is discarded as cancellation, stale input, or stale old
operation. This same rule applies whether the result came from a synchronous
fake, a cooperative async loop, or a Worker message. Worker termination is an
execution optimization, not an authority rule.

Failure reasons are kept distinct: `budget-exhausted`, `no-better`,
`infeasible-only`, `solver-failure`, `exception`, `cancelled`, and `stale`.
Budget exhaustion is not success, and no-better is not an instruction to alter
the Dataset or silently adopt the last candidate.

## Candidate, preview, accept, reject, and revert

Candidate positions are isolated from current session positions. A Product
preview may derive routes, Parallel/Incident allocation, Self-loop geometry,
final Relation-label placement, Node-label placement, endpoint-plan results,
and viewport fit from the candidate, but those are presentation observations,
not ownership transfer to Structural Placement.

Accept returns one atomic session-coordinate transaction:

- replace the current session positions with the candidate positions;
- mark the affected Entity IDs as adopted and set `coordinatesDirty`;
- preserve manual route, Self-loop, Relation-label, and Node-label authority;
- trigger normal Product presentation derivation;
- do not mutate or persist the Dataset.

The existing explicit `Save Coordinates` action remains the sole persistence
boundary. Accept is therefore not a Dataset transaction and must not refresh
the clean Dataset baseline.

Reject leaves the pre-operation session and Dataset unchanged. After accept,
one bounded revert may return the pre-operation session positions while
preserving the pre-operation dirty baseline. The revert expires on a Node move,
another accepted layout/Auto Layout, Dataset mutation or replacement,
coordinate load/reset, coordinate save, or equivalent authority-changing
event. This is deliberately not a general undo/history feature.

## Manual authority and Product verification

Structural Placement may propose Node geometry and coarse spatial/angular
capacity only. The quality operation may ask existing authorities to evaluate
the proposal repeatedly, but it does not own:

- ordinary routing or route churn;
- Parallel/Incident lane and physical-side allocation;
- Self-loop angle/radius/fan-out;
- final Relation-label or Node-label placement;
- endpoint-plan capacity authority;
- viewport fit.

Manual edits remain stronger than automatic observations. A candidate can be
rejected because Product-authoritative routing, label, endpoint, or viewport
checks fail; the solver must not rewrite those checks as placement rules. A
manual edit while a job is running invalidates that job, while a manual edit
after acceptance remains authoritative and may expire only the Node-coordinate
revert when it changes the accepted geometry baseline.

## Determinism and boundedness

The operation input is explicitly versioned by snapshot identity, algorithm
version, and budget policy. Equal values must produce the same candidate and
the same acceptance eligibility. Changing a budget or algorithm version is an
input change, not nondeterminism.

The checkpoint proves lifecycle boundedness, not solver boundedness. A future
solver must separately bound elapsed time, candidate/state count, memory, and
main-thread blocking, and must specify deterministic degradation. It must not
reintroduce full-domain Self-loop search, global decomposition coupling, or
unbounded Product-authoritative verification under the Initial Placement
workflow.

## Reproducible evidence

The diagnostic implementation and audit are:

- `e2r-liaison-scape/experimental/quality-operation-lifecycle/contract.mjs`;
- `e2r-liaison-scape/tests/quality-operation-lifecycle.test.ts`;
- `e2r-liaison-scape/tools/quality-operation-lifecycle-audit.mjs`;
- `e2r-liaison-scape/experimental/quality-operation-lifecycle/audit.json`.

The focused suite passes `13/13`. The audit reproduces the following key
facts:

- start, candidate, preview, and accept remain separate states;
- 12 semantic invalidation reasons stale active work;
- viewport-only change clears only a derived preview;
- cancellation wins a late-completion race;
- an old result cannot displace a newer operation;
- accept returns `coordinatesDirty`, adopted IDs, manual-authority preservation,
  and `persistDataset: false` as one session transaction;
- one-step revert returns the pre-operation positions and preserves the prior
  dirty baseline.

No Actual Product visual smoke check was run. This checkpoint produced no new
visual candidate or Product behavior to inspect; diagnostic lifecycle output
cannot establish visual quality. Human Review is therefore `NOT READY`.

## Roadmap and next boundary

This checkpoint closes the lifecycle-contract question, not the solver or
Product-integration question. The next evidence gate should measure a bounded
solver prototype through this contract using current Product-authoritative
presentation, including browser/main-thread budget, progress behavior, mixed
manual authority, preview fidelity, and difficult dense/label/Self-loop cases.
It must remain an explicit operation and must not become Adaptive Initial
Placement Cascade.

No knowledge candidate was added: the contract is currently LiaisonScape- and
workflow-specific, while the cross-repository modularization decision remains
unchanged. No session log was updated.
