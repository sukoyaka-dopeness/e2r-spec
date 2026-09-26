# LiaisonScape Browser Capture1 CDP Launch/Readiness Diagnostic2

Date: 2026-09-04

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-CDP-LAUNCH-READINESS-DIAGNOSTIC2`

## Status and answers

**CASE 4 / DECISION D — MULTI-FACTOR INSTABILITY; RETAIN BROWSER CAPTURE BLOCK.**

Q1: **Edge did start.** Node returned a PID and the process was alive at the
100 ms observation point. PowerShell `Start-Process` also returned a PID.

Q2: The first objectively failed layer is **R1 — CDP HTTP endpoint discovery**.
R0 process creation was observed; R2 target discovery and all later page,
evaluation, packet, and capture readiness layers were not reached in the
failed five-second runs.

Q3: **Yes, in the extended observation.** The exact failed-runner path produced
its first `/json/version` success at reported `5765 ms` (timestamp
`2026-09-03T18:24:56.346Z`), after the original five-second observation
window. It produced only two successful responses before the endpoint failed
again and Edge became GPU-fatal.

Q4: The five-second window is **CONTRIBUTING**, not proven sufficient. The
correct classification is `TIMEOUT-B`: the window misses a late CDP response
on at least one run, but longer observation does not establish stable browser
operation.

Q5: Node `child_process.spawn` is **not confirmed as the sole root**. It is a
`SPAWN-B` contributing/likely factor: Node direct spawn repeatedly failed,
while an isolated same-argv PowerShell comparison passed three cycles, but
PowerShell later failed under the same GPU/process state. The stronger final
model is multi-factor launcher/process-lifecycle/GPU instability.

Q6: Independent probe authority is **`PROBE-AUTHORITY-B`**. Retained probe
artifacts contain both failures and a final retained PASS. The final retained
probe artifact is a PASS, but the probe authority as a whole is mixed and the
environment is unstable; the PASS must not be merged with earlier failures.

Q7: The smallest justified follow-up is a bounded CDP launch/readiness
process-quiescence and launcher-crossover diagnostic with fresh profiles,
explicit process-tree exit verification, and GPU/cache-state observation. It
is **NOT STARTED**. Browser Capture1 retry remains blocked.

Diagnostic1 remains historically valid as **CASE 6 / Decision F** for its own
checkpoint. This document refines its root label from a likely root cause to a
likely contributing factor and refines its timeout conclusion from `NO` to
`TIMEOUT-B / CONTRIBUTING`. Diagnostic1 history was not amended.

## Authorities

| Item | Authority |
| --- | --- |
| e2r-spec starting HEAD | `d4a61b21dcf8792d9674a635872580401f224b67` |
| Diagnostic1 authority | `d4a61b21dcf8792d9674a635872580401f224b67` |
| Failed Browser Capture1 authority | `4e297ea8d4a423788c6e571a228147f575d723ad` |
| Product | `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` |
| Original Harness | `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` |
| Machine Evidence B | `b0bd0f1a9f70915c639cbee61cf5f8370c78766f` |
| Phase-Bridge Design Correction1 | `86aa84ccb8b118e51a2206bff69c0177399b3d03` |
| Failed Protocol A | `a7a2aafad8fa25b66b183b8685827ae3fb938d4a` |
| Failed lineage | `C:/Users/extra/E2R/e2r-liaison-scape-visual-evidence-browser-capture7` |
| Failed lineage final HEAD | `06acff14d5e27e3c9a775057c608d203854cab20` |
| Diagnostic1 clone/base | `C:/Users/extra/E2R/e2r-liaison-scape-browser-cdp-readiness-diagnostic1` at `15659d0abec53e4a21d0f55eb03e1f9ae256849c` |
| Diagnostic2 clone | `C:/Users/extra/E2R/e2r-liaison-scape-browser-cdp-readiness-diagnostic2` |
| Diagnostic2 source | Diagnostic1 commit `15659d0abec53e4a21d0f55eb03e1f9ae256849c`; new clone preserved Diagnostic1 history |

The Diagnostic2 chronology is retained in
`diagnostics/cdp-readiness-diagnostic2/cdp-diagnostic-chronology.json`.
Diagnostic1 `reproduction.json`, `corrected-runner-validation.json`, its
result document, the failed lineage, and the failed partial B1 records were
not modified.

## Chronology and timing

The chronology contains eight grouped rows: the two Diagnostic1 initial
reproductions; transcript-only same-argv PowerShell cycles; transcript-only
no-headless cycles; later PowerShell correction failures; the retained
extended exact failed-runner observation; and the retained final independent
probe. Transcript-only PASS rows remain comparison observations and are not
independent-probe authority.

| Run | Launcher / port | Timeout | Result | Timing / observation |
| --- | --- | ---: | --- | --- |
| Failed exact reproduction | Node spawn / 9611 | 5000 ms | FAIL | T0 `17:56:48.477Z`; `DevTools listening` about 194 ms; polling ended 5009 ms; no HTTP success; GPU fatal followed |
| Initial comparison reproduction | Node spawn / 9612 | 5000 ms | FAIL | `DevTools listening` about 195 ms; polling ended 5003 ms; no HTTP success; GPU fatal followed |
| Same-argv PowerShell isolated | Start-Process / 9614 | 5000 ms | PASS, transcript-only | CDP reported at 608 ms |
| Same-argv PowerShell isolated | Start-Process / 9641–9643 | 5000 ms | PASS 3/3, transcript-only | CDP reported at 613/514/523 ms; one target each |
| No-headless PowerShell | Start-Process / 9671–9673 | 5000 ms | PASS 3/3, transcript-only | CDP reported at 640/525/510 ms; one target each |
| Later PowerShell correction matrix | Start-Process / 9622, 9631–9633, 9651–9654 | 3000/5000 ms | FAIL | `DevTools listening` present; GPU fatal; no HTTP success in retained rows |
| Extended exact failed runner | Node spawn / 9711 | 15000 ms diagnostic | UNSTABLE | first HTTP success 5765 ms; 2 successes; observation ended 6869 ms after process failure |
| Final independent probe | Start-Process / 9712 | 5000 ms | PASS, retained | first CDP success 5828 ms; one target; two stability responses; cleanup emitted Access denied after PASS |

For the extended run, T0 was `2026-09-03T18:24:50.730Z`. The first retained
HTTP success was `2026-09-03T18:24:56.346Z`; first GPU failure was
`2026-09-03T18:24:56.454Z`; fatal Goodbye was
`2026-09-03T18:24:56.628Z`; cleanup exit was
`2026-09-03T18:24:57.465Z`. The stderr `DevTools listening` line has no
independent timestamp in the retained output; it appears before the GPU error
sequence. Therefore the exact latest spawn-to-DevTools interval is not
retained. The earliest exact interval is approximately 194 ms in the initial
failed reproduction.

One retained run demonstrates `READINESS-WINDOW-MISS = YES`: the extended
run's first CDP response was after the original 5-second window. The initial
failed reproduction instead emitted the stderr announcement before its polling
end and never obtained HTTP readiness. This mixed chronology is why the
overall timeout classification is `TIMEOUT-B`, not `TIMEOUT-A` or a blanket
`TIMEOUT-C`.

The extended run had 55 failed polls and 2 successful `/json/version` polls;
the last poll failed. The CDP stability interval is **FAIL**. This is
`LATE-BUT-IMMEDIATELY-UNSTABLE-CDP`, not late stable readiness.

## Independent probe authority

`INDEPENDENT-PROBE-AUTHORITY-v1 = PROBE-AUTHORITY-B`.

The retained authoritative final artifact is
`C:/Users/extra/E2R/e2r-liaison-scape-browser-cdp-readiness-diagnostic2/diagnostics/cdp-readiness-diagnostic2/independent-probe-final.json`:

- run label: `independent-known-working-probe-final`;
- timestamp: `2026-09-03T18:27:05.0530748Z`;
- launcher: PowerShell `Start-Process`;
- port: 9712;
- executable: Microsoft Edge Stable;
- result: **PASS**;
- first `/json/version`: 5828 ms;
- target count: 1;
- stability responses: 2.

The authority remains B because Diagnostic1 retained Node direct comparison
failure, later PowerShell failures, and the Diagnostic2 corrected-probe
matrix failures. The earlier prose-only port-9691 PASS has no retained
artifact and is not treated as authoritative. The 9712 PASS is not merged
with those failures; it is the final retained probe row within a mixed
environment classification.

## Layered root model

| Layer | Classification | Evidence |
| --- | --- | --- |
| R0 Edge process start | PASS | PID returned; alive at 100 ms; stderr generated in failed runs |
| R1 CDP HTTP readiness | LATE / INTERMITTENT / FAIL | no response in several five-second runs; one extended run succeeded twice at about 5.765 s |
| Readiness-window contribution | **TIMEOUT-B / CONTRIBUTING** | extended first response occurred after 5 s, but stability failed |
| Launcher contribution | **SPAWN-B / LIKELY CONTRIBUTING** | Node direct failures versus isolated same-argv PowerShell 3/3 PASS; later PowerShell failures prevent confirmation |
| Process-lifecycle contribution | **LIKELY / UNRESOLVED** | targeted cleanup reports, residual profile locks, and later state-dependent failures |
| GPU fatal contribution | **GPU-D / MIXED-UNSTABLE** | GPU failures preceded or surrounded late CDP; fatal followed two CDP responses |
| Profile/cache contention | **LIKELY / UNRESOLVED** | repeated `GPUPersistentCache` file-in-use errors and cleanup EPERM |
| Vite | NOT CAUSAL at R1 | failure occurs before page/evaluation readiness |

`DevTools` versus HTTP is `DTH-E / MIXED-UNSTABLE`: the initial failed run
announced DevTools before the five-second polling end but never yielded HTTP;
the extended run yielded HTTP only after the original window, with no retained
independent timestamp for the stderr announcement. GPU relation is
`GPU-D / MIXED-UNSTABLE`, not GPU-A or GPU-B alone.

The controlled same-argv crossover was performed. Node direct spawn cycles in
retained artifacts were 5 total, 0 PASS / 5 FAIL. PowerShell launcher cycles in
retained artifacts were 9 total, 1 PASS / 8 FAIL; separate transcript-only
PowerShell observations included an isolated 3/3 same-argv PASS and a 3/3
no-headless PASS. This is insufficient for `SPAWN-A / CONFIRMED`.

## Profile, process, and temporary-state audit

All diagnostic profiles were explicit absolute TEMP paths and unique per
attempt. No regular user Edge profile was used. The diagnostic TEMP root
retained 18 Diagnostic1 profile directories and 2 Diagnostic2 profile
directories after targeted cleanup attempts. Some remained because Edge file
locks caused `EPERM`; one diagnostic retry reused a path after that cleanup
failure. No unknown or user data was removed. No diagnostic port remained
listening after the final targeted cleanup sweep, and attributable orphan
processes observed by the port sweep were 0. Full actual process-tree command
line inspection was unavailable because `Get-CimInstance Win32_Process`
returned access denied.

The logs repeatedly contain `GPUPersistentCache` file-in-use errors. This is
evidence for a process/profile/cache-state contribution, but not enough to
prove whether the original cause is an orphan child, a shared Edge background
process, or a Windows GPU resource condition. The independent probe also
shows that the control path is mixed, so the runner alone cannot be blamed.

## Correction and boundary

No Browser runner implementation was changed. The Diagnostic1 helper and
Diagnostic2 extended-observation/final-probe scripts are measurement helpers
only. No stable minimal correction was proven; no Diagnostic Correction
Candidate commit was created. The diagnostic clone commit is
`3e1a9b1649cbf77af67e4a2703cd2d12200a070f` —
`diagnostic: reconcile CDP readiness chronology`.

The Browser semantic contract was not changed: Edge-only policy, fresh profile
isolation, viewport `1280×900`, DSF 1, zoom 100%, viewBox `0 0 800 500`, and
transform `originX=0/1, originY=0/1, scale=6144/1` remain unchanged.

No B1 authoritative browser evidence, V3, Browser Evidence B, PNG, Human
Review, E-VISUAL, ranking, selection, Product integration, or PR-3 output was
created. Review1 eligibility remains **NO**. The historical Review1 pointer is
a stale downstream pointer and is not active.

## Final repository state and next prerequisite

| Item | Result |
| --- | --- |
| Product | unchanged at `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` |
| Protected dirty samples | preserved |
| Original Harness | unchanged |
| Machine Evidence B / clone | unchanged and clean |
| Failed capture7 lineage | unchanged and clean |
| Diagnostic1 clone | unchanged and clean at `15659d0abec53e4a21d0f55eb03e1f9ae256849c` |
| Diagnostic2 clone | clean at `3e1a9b1649cbf77af67e4a2703cd2d12200a070f` |
| Retained materializer | unchanged; pre-existing `?? experimental/` preserved |
| Baseline2 | unchanged |
| `ai-knowledge` | unchanged; no new entry |
| B1 / V3 / Browser Evidence B | 0 / 0 / NONE |
| Review1 / PR-3 | NOT ELIGIBLE / NO |
| Next checkpoint | NOT STARTED |

The exact next prerequisite is: **bounded CDP launch/readiness process
quiescence and launcher-crossover stability diagnostic**, with one launcher at
a time, fresh profile and port, extended observation, explicit targeted
process-tree exit confirmation, and GPU/cache-state recording. Fresh Browser
Capture1 remains **NOT ELIGIBLE** until that diagnostic establishes stable CDP
readiness and cleanup.

Knowledge Candidate: **CANDIDATE ONLY / NO NEW ENTRY**. The reusable
observation is that Edge process creation and CDP readiness must remain
separate readiness layers; a `DevTools listening` line alone proves neither
stable HTTP CDP nor stable browser operation. The existing dirty
`ai-knowledge/playbooks/e2r-edge-cdp-browser-diagnostic.md` was not modified.

Push/tag/release/deploy/publication: **NONE**. Stop after Diagnostic2. Do not
start Browser Capture1, resume capture7, run Review1, generate B1/V3, or create
Browser Evidence B.
