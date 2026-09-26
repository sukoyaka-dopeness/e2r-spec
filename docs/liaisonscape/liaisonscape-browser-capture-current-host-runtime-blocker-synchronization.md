# LiaisonScape PR-3 Browser Evidence Current-Host Runtime Blocker Synchronization

Date: 2026-09-07
Status: Current non-normative application/runtime blocker record

## Scope

This record synchronizes the current LiaisonScape PR-3 Browser Evidence
runtime state into `e2r-spec`. It is a status and roadmap record only. It does
not modify the E2R Core, Extensions, schemas, Dataset semantics, or the
Browser Capture implementation.

The Browser source repository was inspected read-only:

- Repository: `C:\Users\extra\E2R\e2r-liaison-scape-browser-capture-helper-receive-lifetime-correction1`
- Branch: `evidence/browser-capture-helper-receive-lifetime-correction1`
- HEAD: `9801d8e80afa120deee1f4efb251335c9a4e0f56`

## Current Edge identity and qualification

- Runtime: Microsoft Edge Stable `152.0.4191.66`
- Executable: `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`
- SHA-256: `02AAED8823A4E4BAE8F672C620C9356BDDEBD68651D5BFD141ED9E6576D5F03C`
- Current Edge runtime qualification: **FAIL**
- Current Edge Browser authority candidate: **NOT QUALIFIED**
- Next Fresh lineage runtime prerequisite: **BLOCKED**

## Formal current state

The current-host runtime blocker is formally confirmed as follows:

- PR-3 Browser runtime blocker: **FORMALLY CONFIRMED**
- Current-host Browser execution: **BLOCKED**
- PR-3 Browser Evidence: **BLOCKED**
- Blocker: current-host Browser runtime qualification failure
- Root cause: **UNRESOLVED**
- Repository-local safe correction: **NONE IDENTIFIED**
- Browser authority successor: **NOT AVAILABLE**
- B1 gate: **NOT PASSED**
- V3: **NOT STARTED**
- Next Fresh lineage creation eligibility: **NO**
- Resume condition: **DEFINED**

This is a runtime prerequisite blocker. It is not a claim that PR-3 was
accepted, completed, or rejected on product semantics.

## Proven evidence boundary

The following are directly supported by the current evidence:

- Fresh lineage isolation and immutability contracts remain enforced.
- Fresh lineage3 has terminal failed B1 evidence.
- Fail-closed Browser authority enforcement remains in effect.
- The current `.66` runtime reproduces a GPU child failure:
  `GPU process exited unexpectedly: exit_code=-1073741790` followed by
  `GPU process isn't usable. Goodbye.`
- `-1073741790` is `0xC0000022`, `STATUS_ACCESS_DENIED`.
- The Edge root process terminates after the GPU failure and CDP continuity is
  lost.
- Repository-local bounded correction attempts did not identify a safe
  correction.

The observed `GPUPersistentCache\DawnGraphiteCache` access/sharing message
(`0x20`) is retained as an observation only. It is not classified as the root
cause.

The following remain unproven:

- The exact denied filesystem or resource object.
- The exact ACL failure or sandbox broker operation.
- An exact Edge defect, Windows defect, GPU-driver defect, or a causal link to
  the cache-lock observation.
- That a repository code modification would safely resolve the failure.

Privileged ProcMon/WPR or equivalent tracing was not performed and is not
required for this documentation checkpoint.

## Bounded hypotheses already tested

The failure was not eliminated by the following repository/local execution
variants:

- Node `stdio=pipe` or `stdio=ignore`.
- `windowsHide=true` or `windowsHide=false`.
- Direct PowerShell launch.
- An application-free `data:` target.
- `--disable-gpu-compositing`.
- `--use-angle=swiftshader`.

The current evidence therefore does not presently attribute the failure to
Node stderr handling, `windowsHide`, Vite, the LiaisonScape application, the
.NET helper, CDP WebSocket transport, target selection, or an obvious missing
safe GPU launch flag. This does not identify the external root cause.

## Historical and execution boundary

The historical execution state is preserved and is not resumable or reusable:

- Fresh lineage1: **HISTORICAL FAILED B1 / LOCKED / IMMUTABLE**
- Fresh lineage2: **HISTORICAL FAILED B1 / CLOSED / IMMUTABLE**
- Fresh lineage3: **HISTORICAL FAILED B1 / CLOSED / IMMUTABLE**
- Restart8: **PRESERVED / IMMUTABLE / NON-RESUMABLE**
- Restart1: historical B1 evidence preserved

Fresh lineage3 is identified by:

- `phaseRunId`: `browser-capture-fresh-lineage3-2026-09-07`
- `finalPr3RunId`:
  `pr3r1-299738ed263bae0ba40ed999fecde0eafcd35a49008d638d850c8555e3c419f7`
- B1: 16 planned, 1 terminal execution, 0 successes, 1 failure, 3 attempts,
  2 retries, 15 remaining
- V3: not started
- Terminal failure recorded at Browser repository HEAD

Fresh lineage3 retry, resume, reuse, remaining-B1 execution, authority rewrite,
and success reinterpretation are not permitted. The preserved Restart8
untracked historical evidence is not normalized, moved, deleted, or rewritten.

## Browser authority and resume condition

The repository’s Edge `152.0.4191.62` authority pin remains:

`KNOWN / DEFERRED UNTIL QUALIFIED SUCCESSOR EXISTS`

The `.62` pin is not updated to `.66`, and `.66` is not materialized as an
authority candidate, because `.66` has failed runtime qualification. No new
Browser authority identity is created by this checkpoint.

Runtime work may resume only when all of the following are evidenced under the
same accepted security boundary:

1. The current failure is resolved by a demonstrably changed host/runtime
   state, while the relevant runtime state remains observable.
2. The current or successor Edge Stable runtime passes the non-evidence
   qualification required by the current contract.
3. A Browser authority candidate can be qualified and reconciled without
   rewriting historical records.

Fresh lineage4 is ineligible until the runtime prerequisite is no longer
blocked. This record does not grant READY status.

## Change and knowledge boundary

This checkpoint changes only the current e2r-spec documentation status record
and roadmap. It does not change Browser runtime source, tests, Browser
authority, Protocol A, Fresh lineage artifacts, or historical evidence. It
also does not add a new `ai-knowledge` entry because the exact external cause
remains unresolved.

No additional GPU experiment, privileged tracing, runtime correction, authority
update, Fresh lineage4, governed B1/V3 execution, Human Review, ranking,
selection, PR-3 acceptance, integration, push, tag, release, deploy, or
publication is performed by this checkpoint.

## Final classification

`PR-3 Browser runtime blocker = FORMALLY CONFIRMED`

`current-host Browser execution = BLOCKED`

`repository-local correction = NONE IDENTIFIED`

`Browser authority successor = NOT AVAILABLE`

`next Fresh lineage creation eligibility = NO`
