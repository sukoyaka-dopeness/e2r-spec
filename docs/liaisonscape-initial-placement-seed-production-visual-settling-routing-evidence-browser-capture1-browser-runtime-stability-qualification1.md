# LiaisonScape Browser Runtime Stability Qualification1

Date: 2026-09-04

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-BROWSER-RUNTIME-STABILITY-QUALIFICATION1`

## Status and answers

**CASE 3 / DECISION C - HOST / CHROMIUM / GPU ENVIRONMENT INSTABILITY.**

The user-authorized Chrome direction was used only as a non-evidence runtime
comparator. The accepted PR-3 browser authority remains Microsoft Edge Stable;
Chrome was not silently substituted and no Browser evidence was created.

Q1: The updated Edge Stable is `152.0.4191.62`, resolved at the explicit
allowlisted path below. Both product and file versions are `152.0.4191.62`.
This is drift from the failed authority `152.0.4191.53`.

Q2: **No.** Updated Edge completed 3/3 controlled Node cycles, but each cycle
reached CDP at 5756-5795 ms and then became GPU-fatal before the 3-second
stability window.

Q3: **No.** Chrome Stable completed 3/3 controlled Node cycles, but each cycle
also became GPU-fatal after CDP. Its first CDP timings were 363-503 ms, but
none reached stable readiness.

Q4: **No.** Because both browsers failed under the controlled equivalent
conditions, the blocker is not classified as Edge-specific. It is classified
as host/Chromium/GPU environment instability.

Q5: The current evidence does not support treating the issue as an Edge-only
problem that can be bypassed by changing PR-3 authority to Chrome. Chrome is
not a stable replacement. Product implementation work remains bounded from
this infrastructure failure, but Browser Capture remains blocked.

Q6: The exact next prerequisite is a bounded host/Chromium/GPU runtime
qualification focused on the common GPU/cache failure and external runtime
state. Do not change the Browser runner or browser authority merely to mask
this failure.

The prior Edge 152.0.4191.53 lineage remains historical. The Edge update is a
new environment state and does not amend the failed Protocol A or its final
identity.

## Authorities and boundary

| Item | Authority |
| --- | --- |
| e2r-spec starting HEAD | `bf4c3a94941947a48179e6a5b9b024311232d2f0` |
| Diagnostic3 authority | `bf4c3a94941947a48179e6a5b9b024311232d2f0` |
| Diagnostic3 commit | `1fac80210e8137207547673aa580019fd5c8f3f1` |
| Qualification clone | `C:/Users/extra/E2R/e2r-liaison-scape-browser-runtime-stability-qualification1` |
| Failed Browser Capture authority | `4e297ea8d4a423788c6e571a228147f575d723ad` |
| Failed Protocol A | `a7a2aafad8fa25b66b183b8685827ae3fb938d4a` |
| Failed capture7 lineage | `C:/Users/extra/E2R/e2r-liaison-scape-visual-evidence-browser-capture7` at `06acff14d5e27e3c9a775057c608d203854cab20` |
| Product | `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` |
| Original Harness | `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` |
| Machine Evidence B | `b0bd0f1a9f70915c639cbee61cf5f8370c78766f` |
| Phase-Bridge Design Correction1 | `86aa84ccb8b118e51a2206bff69c0177399b3d03` |

This was non-evidence qualification only. It did not resume capture7, start
Browser Capture1, create B1/V3/Browser Evidence B, generate screenshots, run
Review1, modify Product, modify the Harness, or modify Machine Evidence.

## Browser authority resolution

The current accepted authority before this checkpoint remained **Microsoft
Edge Stable with no Chrome fallback**. The user-authorized Chrome direction
allowed a controlled non-evidence comparator after updated Edge failed; it did
not authorize a silent PR-3 authority substitution.

| Browser | Executable | Product version | File version | Channel | Version drift |
| --- | --- | --- | --- | --- | --- |
| Updated Edge | `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe` | `152.0.4191.62` | `152.0.4191.62` | Stable | YES from `152.0.4191.53` |
| Chrome comparator | `C:/Program Files/Google/Chrome/Application/chrome.exe` | `151.0.7922.175` | `151.0.7922.175` | Stable | not applicable |

Both paths were resolved from the explicit local allowlists. Chrome was
already installed; it was not installed or updated by this checkpoint.

## Controlled qualification conditions

Updated Edge was tested first with three consecutive Node
`child_process.spawn` cycles. Chrome was tested only after Edge failed 3/3.
Both browsers used the same semantic argv, fresh globally unique profiles,
unique ports, Node HTTP `/json/version` polling, 12-second observation, and
3-second stability window. The quiescence rule was
`CDP-DIAGNOSTIC-QUIESCENCE-v1`: targeted diagnostic PID exit, port closure,
profile quiet across a 2-second interval, and targeted cleanup success or
permanent abandonment. No broad browser termination was used.

The common argv was:

```text
--headless=new
--disable-gpu
--disable-extensions
--no-first-run
--no-default-browser-check
--user-data-dir=<globally unique absolute profile>
--remote-debugging-port=<globally unique port>
--remote-debugging-address=127.0.0.1
--force-device-scale-factor=1
--force-page-scale-factor=1
--window-size=1280,900
about:blank
```

The same Node `fetch` poller requested
`http://127.0.0.1:<port>/json/version` for both browser arms. Every cycle
used a new profile and port; profile reuse was `0` and port reuse was `0`.

## Per-cycle results

| Browser/cycle | Port | First CDP | Stability | GPU fatal | Cache lock | Cleanup/quiescence | Result |
| --- | ---: | ---: | --- | --- | --- | --- | --- |
| Edge 1 | 9911 | 5795 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |
| Edge 2 | 9912 | 5759 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |
| Edge 3 | 9913 | 5756 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |
| Chrome 1 | 9914 | 503 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |
| Chrome 2 | 9915 | 363 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |
| Chrome 3 | 9916 | 376 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |

Edge qualification was 3 cycles, 0 stable passes, 3 unstable/failures, GPU
fatal 3/3, cache-lock 3/3, and quiescence 3/3. Chrome qualification was 3
cycles, 0 stable passes, 3 unstable/failures, GPU fatal 3/3, cache-lock 3/3,
and quiescence 3/3. No matrix stopped early.

The updated Edge retained the old GPU signature semantically:

- GPU process exited unexpectedly;
- `GPUPersistentCache` file-in-use errors; and
- `GPU process isn't usable. Goodbye.`

Chrome showed the same semantic GPU-fatal/cache-lock pattern. The vocabulary
is treated as a runtime signature, not as proof that every internal component
is identical across browsers.

## Browser-runtime classification

`BROWSER-RUNTIME-B / HOST-CHROMIUM-GPU ENVIRONMENT INSTABILITY` is supported.
Both Edge and Chrome reached CDP, both failed the complete stability window,
and both produced GPU fatal/cache-lock events under fresh-profile,
no-reuse, quiescent conditions. This rules against a launcher-only diagnosis
and does not qualify Chrome as a stable replacement.

| Question | Finding |
| --- | --- |
| Edge-specific instability strongly supported | NO |
| Host/Chromium/GPU instability supported | YES |
| Product defect demonstrated | NO |
| Harness data defect demonstrated | NO |
| Machine Evidence defect | NO; Machine Evidence unchanged |
| Stable replacement browser identified | NO |
| Chrome technically viable for this qualification | NO |
| Chrome user-authorized direction applicable | YES, comparator-only; not a qualified replacement |
| Current accepted PR-3 authority remains Edge | YES |
| Browser Authority Correction required | NO; Chrome did not qualify |
| Stable causal Browser runner correction needed | NO |

The failure is bounded to this browser/runtime qualification. It does not
prove the entire Product universally correct; it demonstrates that Product,
Harness data, and Machine Evidence are not implicated by this specific
common infrastructure failure.

## Eligibility and next state

Fresh Browser Capture1 retry eligibility remains **NO**. Even though the Edge
version changed, updated Edge did not satisfy 3/3 stable readiness. Chrome
cannot make the retry eligible because it is not the accepted PR-3 authority
and did not pass qualification.

`capture7 resumable = NO`; the old final identity
`pr3r1-95ff619e25deb4c5edc281041bf6c4d32324e6765c4f5999a98ff68a343d8762`
remains historical only. A future successful browser-authority change would
require a new exact browser binding and new `pr3r1-*`; no such change occurred.

B1 authoritative evidence: `0`; V3: `0`; Browser Evidence B: `NONE`; PNG
PR-3 evidence: `0`; Human Review: `NO`; E-VISUAL: `NO`; ranking: `NO`;
selection: `NO`; Product integration: `NO`; PR-3: `NO`; Review1: `NO`.

The exact next prerequisite is a bounded host/Chromium/GPU runtime
qualification focused on the common GPU/cache failure and external runtime
state. The next checkpoint is **NOT STARTED**. Do not change browser
authority, start Browser Capture1, resume capture7, run Review1, generate B1 or
V3, or change Product/Harness/Machine Evidence from this checkpoint.

Knowledge Candidate: **CANDIDATE ONLY / NO NEW ENTRY**. The reusable
observation is that after a browser update, requalify the runtime before
changing capture infrastructure; an equivalently controlled second Chromium
browser must be stable before a browser-specific authority conclusion is
made. `ai-knowledge` was not modified.

## Artifacts and repository state

Qualification artifacts are under
`C:/Users/extra/E2R/e2r-liaison-scape-browser-runtime-stability-qualification1/diagnostics/browser-runtime-stability-qualification1/`.
The qualification clone commit is `fd222947b1af7a6f7ae5b440cc132b0dd6a3c9b1`
with subject `diagnostic: qualify browser runtime stability`; it is local and
clean.

The result was recorded additively in [docs/roadmap.md](roadmap.md). e2r-spec
validation and diff checks passed before the local documentation commit.
Product's pre-existing dirty sample files were preserved. The materializer's
pre-existing `experimental/` directory and the dirty knowledge playbook were
preserved.

Push/tag/release/deploy/publication: **NONE**.
