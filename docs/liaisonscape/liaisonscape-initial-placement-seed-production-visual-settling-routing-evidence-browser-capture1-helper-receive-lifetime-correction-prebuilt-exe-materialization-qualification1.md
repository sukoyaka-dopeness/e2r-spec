# LiaisonScape Browser Capture1 helper receive-lifetime correction qualification

Date: 2026-09-06

## Decision

The bounded correction is qualified PASS. The helper now uses the session receive lifetime for passive `ReceiveAsync`, while operation timeouts remain bounded. Graceful close sends protocol CLOSE before cancellation and disposal. No Product semantics, browser flags, Node heartbeat, fallback, or new dependency was changed.

The corrected semantic implementation is in the detached correction repository at commit `421d788` (correction commits `592b02c` and `f5c0b8c`). The semantic base was `ba3cb3d`; the final helper source and prebuilt EXE are both committed and hash-verified.

## Materialization and authority

- C# source raw SHA-256: `ABF4035E4603DE3179A3FDC4A1E09F8D61586B9FF2CF3221BF7884F8B1D860B3`.
- EXE raw SHA-256: `5C25540A8F86DC2B7C97A7486DABB7FCE8D9995756C13714D4527D4DC910E45A` (9,728 bytes).
- Implementation authority (`PR3-BROWSER-CAPTURE-IMPLEMENTATION-AUTHORITY-v1`): the committed role record has no independent `canonicalSha256` field; its identity is the repository commit and bound source-identity set.
- Build authority (`PR3-BROWSER-CAPTURE-DOTNET-HELPER-BUILD-AUTHORITY-v1`): `F70346FB01863560C3D688A30018F6ACEBCA23535581E76C20A098AA72E88783`.
- Client authority (`PR3-BROWSER-CAPTURE-WEBSOCKET-CLIENT-AUTHORITY-v2`): `A4F97B95591ACCA14D52618FE608604870D2F751658F45B88A0CF7DBC4F2A48A`.
- Compiler: .NET Framework 4.8 `csc.exe`, x64, exact accepted `/noconfig /nostdlib+` reference set; deterministic and byte-reproducible build flags are false.
- A first candidate was superseded after the direct CLOSE check exposed the old cancellation ordering. The final candidate was compiled once from the corrected source, tested, copied once to the semantic path, and verified against the committed bytes.

## Qualification evidence

Static pre and post gates both PASS: focused 106/106, npm 309/309, lint, build, executor-check, and runner-check.

I1 target control and six fresh qualification runs all PASS:

| run | port | quiet receive | post-idle `2+2` | helper errors before teardown | helper exit | quiescence |
|---|---:|---:|---:|---:|---:|---|
| I1 | 9477 | 12,562 ms | 4 | 0 | 0 | PASS |
| Q1 | 9547 | 12,783 ms | 4 | 0 | 0 | PASS |
| Q2 | 9376 | 12,765 ms | 4 | 0 | 0 | PASS |
| Q3 | 9308 | 12,739 ms | 4 | 0 | 0 | PASS |
| Q4 | 9442 | 12,724 ms | 4 | 0 | 0 | PASS |
| Q5 | 9469 | 12,568 ms | 4 | 0 | 0 | PASS |
| Q6 | 9387 | 12,775 ms | 4 | 0 | 0 | PASS |

Every run used a fresh browser/profile and stopped cleanly. Root exit, target crash, GPU fatal, and IPC failure indicators were absent. Historical repositories, Restart4, and protected dirty files were preserved; preservation postflight PASS.

Evidence is non-evidence diagnostic qualification only. No fresh Protocol A, governed B1, V3, screenshots, Browser Evidence B, or Review was performed or authorized by this checkpoint.

## Next prerequisite

CASE1 is eligible for the next separately bounded fresh Browser Capture Restart Protocol A checkpoint, subject to its own authorization and gates. This document does not authorize that execution.
