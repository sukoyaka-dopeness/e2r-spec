# LiaisonScape Browser Capture1 CDP Launch/Readiness Diagnostic1

Date: 2026-09-04

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-CDP-LAUNCH-READINESS-DIAGNOSTIC1`

## Status

**CASE 6 / DECISION F — CORRECTION UNSTABLE.** The failed Browser Capture1
lineage was reproduced as a non-evidence diagnostic. The first readiness layer
that failed was R1: the Edge CDP HTTP endpoint was not reachable by the failed
runner before its process later emitted a GPU fatal. The strongest causal
divergence is the Windows launch seam: the failed runner uses Node
`child_process.spawn(Edge, argv)`, while the known-working probe uses PowerShell
`Start-Process -FilePath Edge -ArgumentList`. Identical failed-runner argv
launched through PowerShell passed in one isolated three-cycle experiment, but a
later repeat returned to the same GPU fatal. The causal explanation is therefore
**LIKELY**, not confirmed as a stable correction.

The diagnostic did not retry B1, produce V3, create Browser Evidence B, or
perform review. The failed capture7 lineage remains immutable historical
diagnostic history. Review1 is **NOT ELIGIBLE**. Its pointer in the historical
Browser Capture1 result is a **STALE DOWNSTREAM POINTER**, not the active next
prerequisite.

## Authorities and selected source

| Item | Authority / result |
| --- | --- |
| e2r-spec starting HEAD | `4e297ea8d4a423788c6e571a228147f575d723ad` |
| Product | `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` |
| Original Harness | `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` |
| Machine Evidence B | `b0bd0f1a9f70915c639cbee61cf5f8370c78766f` |
| Phase-Bridge Design Correction1 | `86aa84ccb8b118e51a2206bff69c0177399b3d03` |
| Failed Browser Protocol A | `a7a2aafad8fa25b66b183b8685827ae3fb938d4a` |
| Failed partial record | `06acff14d5e27e3c9a775057c608d203854cab20` |
| Failed final identity | `pr3r1-95ff619e25deb4c5edc281041bf6c4d32324e6765c4f5999a98ff68a343d8762` |
| Failed lineage | `C:/Users/extra/E2R/e2r-liaison-scape-visual-evidence-browser-capture7` |
| Failed lineage final HEAD | `06acff14d5e27e3c9a775057c608d203854cab20` |
| Diagnostic clone | `C:/Users/extra/E2R/e2r-liaison-scape-browser-cdp-readiness-diagnostic1` |
| Diagnostic source/base | `a7a2aafad8fa25b66b183b8685827ae3fb938d4a`, parent `348bc2c0dae4a67d7b86ffa84f60609ac997743a`; selected because it is the exact failed Protocol A runner before partial B1 records |
| Diagnostic clone commit | `15659d0` — `diagnostic: record Edge CDP readiness divergence` |

The failed lineage was not modified, amended, resumed, or converted. The
diagnostic clone contains only diagnostic scripts and JSON records; it contains
no B1 evidence rows, candidate V3, or PR-3 screenshots.

## Environment and reproduction

| Field | Result |
| --- | --- |
| Edge executable | `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe` |
| Product version | `152.0.4191.53` |
| File version | `152.0.4191.53` |
| Edge authority drift | NO |
| Independent probe reproduction | PASS, current probe port 9691; `/json/version` in 661 ms and 7 targets |
| Failed runner reproduction | FAIL, exact runner path did not reach `/json/version` |
| First failed readiness layer | **R1 — CDP transport HTTP discovery** |
| R0 process start | PASS: Node returned a PID and process was alive at 100 ms |
| R2 target discovery | NOT REACHED in failed path |
| R3–R6 | NOT REACHED |
| Failed runner transport | fixed `--remote-debugging-port` plus Node `fetch` to `/json/version` |
| Working probe transport | fixed port plus PowerShell HTTP `/json/version` and `/json/list` |
| Failed user-data-dir | explicit absolute unique TEMP profile per port |
| Working user-data-dir | explicit absolute unique TEMP profile per port |
| Default Edge profile used | NO |
| Failed port semantics | runner selects fixed `9500 + attempt index`, passes the same port to Edge and polls loopback |
| Working port semantics | explicit fixed loopback port, same port used for discovery |
| `DevToolsActivePort` | not used; no file was required or observed for the fixed-port path |
| remote-debugging-pipe | NOT USED |
| Vite before first causal failure | Vite is started before the B1 loop by the runner, but R1 fails before Vite/page readiness matters; Vite is not the cause |
| Readiness timeout causal | NO: the process later failed with a GPU fatal; extending the timeout was not a demonstrated fix |

The exact failed argv was:

```text
--headless=new
--disable-gpu
--disable-extensions
--no-first-run
--no-default-browser-check
--user-data-dir=<unique absolute TEMP profile>
--remote-debugging-port=<fixed port>
--remote-debugging-address=127.0.0.1
--force-device-scale-factor=1
--force-page-scale-factor=1
--window-size=1280,900
about:blank
```

The known-working probe argv was:

```text
--user-data-dir=<unique absolute TEMP profile>
--remote-debugging-address=127.0.0.1
--remote-debugging-port=<fixed port>
--remote-allow-origins=*
--no-first-run
--no-default-browser-check
--new-window
about:blank
```

The failed runner uses `spawn(EDGE, args, { stdio: "ignore", windowsHide: true
})`. The diagnostic used piped stdio only to retain stderr and stdout. The
working probe uses PowerShell `Start-Process -FilePath` with `-WindowStyle
Hidden`. Both use loopback-only debugging and isolated profiles.

## Difference matrix and experiments

| Difference | Working value | Failed value | Tested | Result |
| --- | --- | --- | --- | --- |
| Executable | same Edge path | same Edge path | YES | not the difference |
| Headless mode | absent | `--headless=new` | YES | removing headless passed 3 PowerShell cycles; not sufficient alone because Node direct no-headless also failed |
| Debug port | fixed explicit port | fixed explicit port | YES | no port mismatch found |
| Debug address | `127.0.0.1` | `127.0.0.1` | YES | no address mismatch found |
| User-data-dir | unique absolute TEMP | unique absolute TEMP | YES | profile isolation preserved |
| `--remote-debugging-pipe` | absent | absent | YES | not causal |
| `--remote-allow-origins` | present in probe | absent in runner | YES | not isolated as root; HTTP failed before WebSocket origin policy |
| `--window-size` / scale | absent in probe | `1280,900`, DSF/page scale 1 | YES | no independent root evidence |
| startup URL | `about:blank` | `about:blank` | YES | not causal by itself |
| process launcher | PowerShell `Start-Process` | Node `child_process.spawn` | YES | strongest first divergence; same-argv PowerShell passed in an isolated run |
| stdio | redirected/observable | runner ignores | YES | runner loses diagnostic stderr; not proven as the launch cause |
| shell | PowerShell command host | no shell, direct spawn | YES | correlated with launcher seam; actual command line could not be inspected |
| detached/process group | default PowerShell process behavior | Node default spawn behavior | YES | process-tree behavior remains a likely contributor |
| port allocation | explicit | `9500 + counter` | YES | no wrong-port evidence |
| cleanup timing | targeted tree cleanup | `child.kill()` in runner | YES | residual lifecycle instability observed; stable correction not proven |

Bounded experiments were: exact Node reproduction D1; same-argv PowerShell
comparison D2; same-argv PowerShell three-cycle probe; headless-only removal
three-cycle probe; Node direct no-headless three-cycle probe; simultaneous
Node-fetch/core-HTTP/PowerShell transport comparison; and the later corrected
launcher validation. D1 reproduced failure. D2 and the isolated same-argv
PowerShell three-cycle run passed, while the later repeated correction run
failed. This satisfies a likely causal distinction but not the confirmation
standard for a stable fix.

The failed stderr included the following short exact diagnostics:

```text
DevTools listening on ws://127.0.0.1:<port>/devtools/browser/<volatile-id>
GPU process exited unexpectedly: exit_code=-1073741790
FATAL: ... GPU process isn't usable. Goodbye.
```

The volatile WebSocket URL and target IDs are intentionally not retained here.
In the transport comparison, Node `fetch`, Node core HTTP, and PowerShell all
failed after the process entered this GPU-fatal path. This rules out a Node
`fetch`-only explanation for that run.

Actual process command-line inspection was attempted with
`Get-CimInstance Win32_Process`, but the environment returned access denied.
Therefore actual command-line divergence is **NOT VERIFIED**; intended argv
was identical in the single-dimension same-argv comparison.

## Causal result and correction

Root status: **LIKELY**, not CONFIRMED.

Root classification: **WINDOWS-SPAWN-SEMANTICS-DEFECT**, with an unresolved
Edge GPU/process-lifecycle instability that prevents stable correction proof.

The exact likely causal difference is that the failed runner directly creates
Edge through Node `child_process.spawn`, while the known-working path delegates
Windows process creation to PowerShell `Start-Process`. The direct Node path
failed even when the headless flag was removed. The same failed argv through
PowerShell reached CDP in an isolated three-cycle test. However, a later
PowerShell-based correction proof failed all three cycles with the same GPU
fatal, so this is not an adopted fix.

No Product, Original Harness, Machine runner, Machine Evidence B, transform,
viewport, candidate data, or failed Protocol A was changed. A diagnostic-only
launcher helper was added to the disposable clone, but **minimal correction in
the capture runner = NO** and **Diagnostic Correction Candidate commit = NONE**.
The helper and proof scripts are not authorized for Browser Evidence B.

Focused diagnostic tests:

- six diagnostic scripts passed `node --check`;
- `corrected-edge-launch.test.mjs`: 2/2 PASS;
- isolated same-argv PowerShell validation: 3/3 PASS;
- later corrected-launch repeat: 0/3 PASS, therefore overall repeated result:
  **FAIL / UNSTABLE**;
- orphan browser processes attributable by the diagnostic port sweep: 0
  observed after targeted cleanup; command-line process inspection remained
  unavailable;
- independent Edge probe after the diagnostic: PASS on port 9691;
- fresh isolated profile semantics: preserved;
- Edge-only policy: preserved;
- Chrome fallback: NO.

## Evidence and downstream boundary

| Field | Result |
| --- | --- |
| B1 authoritative browser evidence | 0 |
| Candidate V3 | 0 |
| PR-3 PNG evidence | 0 |
| Browser Evidence B | NONE |
| Human Review | NO |
| Ranking | NO |
| Candidate selection | NO |
| E-VISUAL | NO |
| Product integration | NO |
| PR-3 | NO |
| Review1 eligibility | NO |
| Failed capture7 resumable | NO |
| Fresh lineage required | YES |
| Fresh Browser Capture1 retry eligible | NO — blocked pending stable diagnostic correction |
| Viewport changed | NO |
| DSF changed | NO |
| Zoom changed | NO |
| Transform changed | NO |
| Machine V2 recomputed | NO |

The historical Review1 pointer is corrected additively as stale. The active
next prerequisite is a bounded follow-up to isolate and correct the remaining
common Edge CDP launch/readiness process-lifecycle instability. A fresh Browser
Capture1 lineage is **NOT STARTED** and must not begin automatically from this
checkpoint. The six partial B1 failure records from capture7 must not be reused
as Browser evidence.

The unchanged reusable references are Machine Protocol A
`06f66142812be03a8a3a138e2b774cbc9926b91f`, Machine Evidence B
`b0bd0f1a9f70915c639cbee61cf5f8370c78766f`, eligible V2 set 80 with SHA
`E891C747394C492AE1D56AA1518F2E596E96756985BCBFBDFC93323070CC162C`, pending
B1 set 16 with SHA
`B02C9075A2758CF953F3D6BF50CC852E8394C0357A127F3B559708899D216335`, and
transform `originX=0/1, originY=0/1, scale=6144/1`.

## Repository and knowledge state

| Repository / item | Result |
| --- | --- |
| Live Product | unchanged at `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` |
| Protected dirty samples | preserved |
| Original Harness | unchanged |
| Machine clone / Evidence B | unchanged and clean |
| Retained materializer | unchanged; pre-existing `?? experimental/` preserved |
| Baseline2 | unchanged at `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8` |
| Failed capture7 lineage | unchanged and clean at `06acff14d5e27e3c9a775057c608d203854cab20` |
| Diagnostic clone | clean at `15659d0` |
| Knowledge Candidate | `NO NEW ENTRY / CANDIDATE ONLY` |
| `ai-knowledge` | unchanged; pre-existing playbook dirt preserved |
| Product tests/lint/build | not run; Product was out of scope |
| e2r-spec validation | PASS |
| e2r-spec diff-check | PASS |
| e2r-spec commit | recorded after staging |
| Push/tag/release/deploy/publication | NONE |

The next checkpoint is **NOT STARTED**. Stop after this browser-infrastructure
diagnostic; do not resume capture7, start Browser Capture1, start Review1,
generate V3, create Browser Evidence B, or perform visual review.
