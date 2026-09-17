# LiaisonScape Explicit Auto Layout Safe Preview Failure Diagnosis 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-SAFE-PREVIEW-FAILURE-DIAGNOSIS1`  
Classification: **E. ROOT CAUSE NOT YET ESTABLISHED / HUMAN CHECK B HOLD**

## Conclusion

The source and current Actual Product do not show a general failure for an
ordinary, finite, unpinned graph or for a manually moved ordinary graph. A
fresh Titanic fixture and a fresh Lighthouse JA fixture both reached:

```text
Auto Layout -> Running -> Product Preview
```

The same result was observed on both currently running Vite instances. The
earlier Safe Preview failure therefore cannot currently be attributed to a
5173/5176 source mismatch or to manual movement alone. The exact failing
input/state was not captured, and the current UI maps several distinct
failures to the same user-facing message. Human Check B remains on HOLD.

## Runtime identity

The diagnostic used the current LiaisonScape worktree:

```text
C:\Users\extra\E2R\e2r-liaison-scape
HEAD: 3c383c67c8e3c599be9de7f99d6785261e147479 + existing dirty worktree
```

The recent smoke URL was:

```text
http://127.0.0.1:5176/e2r-liaison-scape/?acceptance-fixture=titanic&acceptance-locale=en
```

The fresh diagnosis also used:

```text
http://127.0.0.1:5173/e2r-liaison-scape/?acceptance-fixture=titanic&acceptance-locale=en
http://127.0.0.1:5173/e2r-liaison-scape/?acceptance-fixture=lighthouse&acceptance-locale=ja
```

5173 and 5176 are separate Vite processes, but both point at the same
worktree and serve the current Explicit Auto Layout source. A no-query URL
(`http://localhost:5173/e2r-liaison-scape/`) is the Dataset-unselected Home
surface and is not an Auto Layout reproduction.

## Exact failure branches

`App.tsx` calls
`captureExplicitAutoLayoutSnapshotFromDataset`. If capture fails, the App
sets the generic `explicitAutoLayoutFailed` message before the Worker starts.
If the Worker/operation outcome is failed, the same generic message is set
again. The failure code is not retained in the visible UI.

The current operation source has these fail-closed branches:

| Branch | Condition | Relevance to Safe Preview message |
| --- | --- | --- |
| `INVALID_SNAPSHOT` | incomplete/invalid graph, working positions, or snapshot input | capture-time failure |
| `PIN_RESOLUTION_FAILED` | an active persisted/staged Pin has no compatible finite anchor | capture-time failure |
| `GENERATOR_FAILURE` | Frontier candidate generation does not complete | Worker result failure |
| `INCOMPLETE_RESULT` | no selected candidate is produced | Worker result failure |
| `NON_FINITE_RESULT` | selected positions are incomplete or non-finite | Worker result failure |
| `PIN_VIOLATION` | selected output changes a fixed Pin anchor | Worker result failure |
| `EXECUTION_ERROR` | executor/operation rejects or throws | adapter failure |

Cancel and stale outcomes do not use the Safe Preview failure message; they
return to the idle state. Strict Product eligibility is also not a failure:
the current operation returns a structurally valid Preview with a quality
warning when eligibility is false.

The Worker `onerror` path supplies only a terminal failure reason to the
adapter, while a normal failed result carries the operation failure code.
`App.tsx` currently discards both forms when selecting the generic message.
Consequently the historical browser message alone cannot identify its exact
branch or payload.

## Controlled reproduction

The reproducible checkpoint test is:

`e2r-liaison-scape/tests/explicit-auto-layout-safe-preview-failure-diagnosis1.test.ts`

It verifies:

| Input | Capture/operation result |
| --- | --- |
| fresh ordinary unpinned graph | completed Preview |
| manually moved ordinary unpinned graph | completed Preview |
| valid working Pin | completed Preview with Pin anchor preserved |
| persisted Pin without a compatible Coordinate Space/anchor | capture fails with `PIN_RESOLUTION_FAILED`; diagnostic `PIN_SPACE_UNSUPPORTED` |

This test does not claim that the historical Human Check B failure was the
invalid-Pin case. It establishes the current source distinction and the
smallest known input that produces the same generic user-facing failure.

## Responsibility findings

- Candidate generation is reached for fresh and manual ordinary cases.
- Product presentation evaluation is reached for those cases and for valid
  working-Pin input.
- Manual movement of an unpinned Entity is not itself a failure condition;
  the no-Pin generator path uses the graph/config candidate input while the
  working positions remain part of the immutable operation snapshot.
- Valid staged or manually moved pinned anchors are resolved from finite
  working positions and preserve the anchor.
- An active saved Pin with a malformed/unsupported Coordinate-space contract
  fails before candidate generation. This is intentional fail-closed behavior
  for invalid Pin input, not evidence of a solver quality failure.
- Stale, cancellation, and Worker transport semantics remain covered by the
  existing adapter tests and were not implicated by the fresh reproduction.

The current source does not retain a diagnostic reason code for a failed
operation in an acceptance artifact or user-visible status. A future
diagnostic-only improvement may retain an internal reason for reproduction,
but no Product UI exposure or semantic change is made here.

## Japanese copy

The current source and fresh 5173/5176 runtime use:

```text
元の配置に戻る
```

The string `元の配置に戻す` is not present in current `src/i18n.ts`. This is
a source/evidence discrepancy to keep explicit; it is unrelated to the Safe
Preview failure and was not changed in this diagnosis.

## Boundaries and disposition

No Frontier tuning, spacing retune, Product score change, dense optimization,
Pin semantic change, routing/label/Self-loop change, Dataset mutation, or
persistence change was made. The accepted Initial Automatic Display,
Pin/working-state, Preview, Apply/Reject, Save Coordinates, and viewport
boundaries remain unchanged.

The correct current disposition is **E**, not a claim that the failure is a
valid ordinary-layout rejection and not a claim that it was fixed. Human
Check B may resume only after the exact failing Dataset/state is captured or
the failure branch is otherwise made observable. It must not be closed as
PASS from the fresh-fixture success evidence alone.

## Validation

- safe-preview diagnosis test: `2/2 PASS`;
- existing Explicit Auto Layout operation test: `12/12 PASS`;
- existing Preview admissibility/eligibility tests: `3/3 PASS`;
- Actual Product fresh Titanic EN on 5173: Running and Preview observed;
- Actual Product fresh Lighthouse JA on 5173: Running and Preview observed;
- Actual Product fresh Lighthouse JA on 5176: Running and Preview observed;
- `npm.cmd test` broad invocation: not a PASS; the globbed suite entered the
  known Vite/WebSocket lifecycle wait after reporting tests, so it was stopped;
- no production source behavior was changed.
