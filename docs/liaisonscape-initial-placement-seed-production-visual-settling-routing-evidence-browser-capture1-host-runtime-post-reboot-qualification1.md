# LiaisonScape Host Runtime Post-Reboot Qualification1

Date: 2026-09-04

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-RUNTIME-POST-REBOOT-QUALIFICATION1`

## Status and answers

**POST-REBOOT-C / DECISION C - HOST / CHROMIUM / GPU RUNTIME INSTABILITY
PERSISTS ACROSS REBOOT.**

Q1: **Yes, Edge remains unstable.** Current Edge `152.0.4191.62` failed
3/3 with `GPU-FATAL-AFTER-CDP`; first CDP timings were 5569-5719 ms and
all stability windows failed.

Q2: **Yes, Chrome reproduces the common failure.** Current Chrome
`152.0.7977.75` failed 3/3 with the same semantic GPU fatal/cache-lock
signature; first CDP timings were 329-477 ms and all stability windows failed.

Q3: **No.** Reboot did not remove or reduce the prior GPU/cache signature.
The post-reboot Edge and Chrome cycles still produced GPU process exits,
`GPUPersistentCache` file-in-use errors, and `GPU process isn't usable.
Goodbye.`.

Q4: **No transient resolution was observed.** Neither browser became stable;
the blocker is not classified as a reboot-cleared transient state.

Q5: **Yes.** Failure now persists after a full Windows reboot, across Edge and
Chrome, with fresh profiles, unique ports, successful quiescence, and no
profile reuse. The next investigation should move from browser-process and
runner diagnostics to a bounded Windows/GPU-driver/runtime qualification.

Q6: The exact next prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-GPU-RUNTIME-DIAGNOSTIC1`.
It is not started here.

This is non-evidence qualification only. Browser Capture1, capture7 resume,
B1, V3, Browser Evidence B, screenshots, Review1, Product changes, Harness
changes, Machine Evidence changes, browser-authority changes, and runner
changes were not performed.

## Authorities

| Item | Authority |
| --- | --- |
| e2r-spec starting HEAD | `d414db09fbd9c05bb9bf97e6327cf365da96b5d2` |
| Qualification1 authority | `d414db09fbd9c05bb9bf97e6327cf365da96b5d2` |
| Qualification1 commit | `fd222947b1af7a6f7ae5b440cc132b0dd6a3c9b1` |
| Qualification clone | `C:/Users/extra/E2R/e2r-liaison-scape-host-runtime-post-reboot-qualification1` |
| Diagnostic3 authority | `bf4c3a94941947a48179e6a5b9b024311232d2f0` |
| Failed Browser Capture authority | `4e297ea8d4a423788c6e571a228147f575d723ad` |
| Failed Protocol A | `a7a2aafad8fa25b66b183b8685827ae3fb938d4a` |
| Failed capture7 lineage | `C:/Users/extra/E2R/e2r-liaison-scape-visual-evidence-browser-capture7` at `06acff14d5e27e3c9a775057c608d203854cab20` |
| Product | `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` |
| Original Harness | `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` |
| Machine Evidence B | `b0bd0f1a9f70915c639cbee61cf5f8370c78766f` |

All prior diagnostics and the failed lineage remain historical and unchanged.
The current boot is a new host-runtime observation boundary; it does not
rewrite earlier evidence.

## Reboot boundary and host state

Qualification1 completed at `2026-09-03T19:01:44.468Z`. The post-reboot boot
timestamp was `2026-09-03T19:11:25.1487986Z`, derived from the non-admin
System Up Time counter. A direct system boot-time check was consistent within
approximately two seconds. The qualification current timestamp was
`2026-09-03T19:18:42.6197986Z`; recorded uptime was `00:07:17.4710000`.

Reboot-after-Qualification1 was **YES**. OS version was `10.0.26200.0`,
Windows build `26200`; the host is Windows 11 Home. The process was
non-administrator. `Get-CimInstance Win32_OperatingSystem` was unavailable
under the non-admin diagnostic context, so the boot artifact records the
fallback counter source and its limitation.

Before browser qualification, existing process counts were Edge `7` and
Chrome `0`. These were recorded only; no unrelated browser process was closed
or killed, and they are not treated as causal evidence.

## Browser resolution

| Browser | Executable | Product version | File version | Drift from Qualification1 |
| --- | --- | --- | --- | --- |
| Microsoft Edge Stable | `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe` | `152.0.4191.62` | `152.0.4191.62` | NO |
| Google Chrome Stable | `C:/Program Files/Google/Chrome/Application/chrome.exe` | `152.0.7977.75` | `152.0.7977.75` | YES from `151.0.7922.175` |

Both browser paths were resolved from the explicit local allowlists. No
browser was installed or updated during this checkpoint.

## Controlled post-reboot matrix

Edge ran first for three sequential cycles. Because Edge did not produce
3/3 stable results, Chrome ran as a non-evidence comparator for three
sequential cycles. Both used Node `child_process.spawn`, the same Node
`fetch` `/json/version` poller, 12-second observation window, 3-second
stability window, unique profile, unique port, startup URL, headless mode,
scale, viewport, and targeted quiescence procedure. No browser-specific flag
difference was introduced.

The common argv remained:

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

| Browser/cycle | Port | First CDP | Stability | GPU fatal | Cache lock | Quiescence | Result |
| --- | ---: | ---: | --- | --- | --- | --- | --- |
| Edge 1 | 10011 | 5719 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |
| Edge 2 | 10012 | 5584 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |
| Edge 3 | 10013 | 5569 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |
| Chrome 1 | 10014 | 477 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |
| Chrome 2 | 10015 | 341 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |
| Chrome 3 | 10016 | 329 ms | FAIL | YES | YES | PASS | `GPU-FATAL-AFTER-CDP` |

Edge stable PASS was `0/3`, failure count `3`, GPU fatal `3/3`, cache-lock
`3/3`, and quiescence `3/3`. Chrome stable PASS was `0/3`, failure count
`3`, GPU fatal `3/3`, cache-lock `3/3`, and quiescence `3/3`. Profile reuse
was `0`; port reuse was `0`. All diagnostic ports were closed after use.

## Pre/post reboot GPU comparison

| Signature | Pre-reboot Qualification1 | Post-reboot Qualification1 | Comparison |
| --- | --- | --- | --- |
| GPU process exit | PRESENT | PRESENT | UNCHANGED |
| `GPUPersistentCache` file-in-use | PRESENT | PRESENT | UNCHANGED |
| `GPU process isn't usable. Goodbye.` | PRESENT | PRESENT | UNCHANGED |

The `--disable-gpu` flag remained unchanged. Its presence alongside the fatal
GPU signature is recorded as an observation; no flag-policy conclusion or
Browser Capture policy change is made here.

## Classification and next state

The result is **POST-REBOOT-C: HOST / CHROMIUM / GPU RUNTIME INSTABILITY
PERSISTS ACROSS REBOOT**. This is materially stronger than Qualification1:
the same class of failure persisted across a full reboot, two Chromium
browsers, multiple browser versions, fresh profiles, unique ports, successful
process quiescence, and no profile reuse.

Edge-specific instability: **NO**. Persistent host/Chromium/GPU instability:
**YES**. Reboot resolved runtime instability: **NO**. Stable browser identified:
**NO**. Browser Authority Correction required: **NO**. The accepted PR-3
authority remains Edge Stable, and Chrome is not qualified as a replacement.

Product defect demonstrated: **NO**. Harness defect demonstrated: **NO**.
Machine Evidence defect: **NO**. Browser runner changed: **NO**. The evidence
now justifies a bounded host/GPU runtime diagnostic covering adapter/driver/
graphics runtime/backend/sandbox/resource state, without changing those
settings in this checkpoint.

Fresh Browser Capture1 remains **NOT ELIGIBLE**. `capture7 resumable = NO`.
B1 evidence: `0`; V3: `0`; Browser Evidence B: `NONE`; PNG evidence: `0`;
Human Review: `NO`; Review1: `NO`; E-VISUAL: `NO`; ranking: `NO`; selection:
`NO`; Product integration: `NO`; PR-3: `NO`.

The exact next prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-GPU-RUNTIME-DIAGNOSTIC1`.
The next checkpoint is **NOT STARTED**. Do not update drivers, change graphics
settings, alter registry/policy, disable sandbox, install/update browsers, or
repeat this same matrix.

Knowledge Candidate: **CANDIDATE ONLY / NO NEW ENTRY**. A full OS reboot is a
meaningful diagnostic boundary after browser-level causes are controlled; if
the same cross-browser GPU fatal persists, escalation should move to host/GPU
runtime diagnostics rather than more runner retries. `ai-knowledge` was not
modified.

## Artifacts and repository state

Artifacts are under
`C:/Users/extra/E2R/e2r-liaison-scape-host-runtime-post-reboot-qualification1/diagnostics/host-runtime-post-reboot-qualification1/`.
The qualification clone commit is created locally with subject
`diagnostic: qualify browser runtime after reboot`; no push occurred.

The result was recorded additively in [docs/roadmap.md](roadmap.md). Product,
Original Harness, Machine Evidence, Diagnostic1/2/3, Qualification1,
capture7, and `ai-knowledge` remain unchanged. Existing Product sample
modifications and the materializer's `experimental/` directory were
preserved.

Push/tag/release/deploy/publication: **NONE**.
