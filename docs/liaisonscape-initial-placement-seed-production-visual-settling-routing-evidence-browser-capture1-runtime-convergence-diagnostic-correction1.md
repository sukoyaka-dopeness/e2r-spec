# Browser Capture Runtime Convergence Diagnostic/Correction1

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-RUNTIME-CONVERGENCE-DIAGNOSTIC-CORRECTION1`

Date: 2026-09-05 JST. Classification: informational application/runtime diagnostic,
NON-EVIDENCE. No Core, Extension, schema, Product, candidate or fixture change.

## Result

**CASE 10 / `RUNTIME-CONVERGENCE-HELPER-SOURCE-CORRECTION-REQUIRED`.**
Semantic impact: NONE. Production correction: NO. C# changed: NO. EXE rebuilt: NO.
Fresh restart eligible: NO; fresh restart created: NO.

Five short connected controls passed. The first long-window qualification passed
connection and readiness but emitted a helper receive-loop ERROR while the Edge
root, debugging listener and exact page target were still healthy. The committed
C# creates a fresh 10,000ms cancellation timer for each pending ReceiveAsync,
and converts cancellation of a quiet receive into terminal ERROR. Q1's error
occurred **10,038.137ms after its last received MESSAGE, 230.091ms before teardown**.
This is a mechanically supported helper receive-idle defect, not a new
ECONNREFUSED, readiness timeout, or browser root-exit recurrence.

Qualification: planned 6, executed 1, success 0, failure 1, pending 5; one attempt,
zero retries. Q2–Q6 NOT STARTED. The first failure remains FAIL. No C# fix or
EXE materialization is authorized in this checkpoint, so runtime work stops here.

A single common production race explaining all historical episodes is NOT
PROVEN. Historical root-exit/listener-loss evidence remains valid with its
initiating host/browser cause unresolved. Separate diagnostic-path defects and
the new receive-idle defect explain why aggregate labels alone were misleading.

Primary records: [root-cause.json](../../e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1/diagnostics/browser-capture-runtime-convergence-diagnostic1/root-cause.json), [helper-idle-receive-audit.json](../../e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1/diagnostics/browser-capture-runtime-convergence-diagnostic1/helper-idle-receive-audit.json),
[run-summary.json](../../e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1/diagnostics/browser-capture-runtime-convergence-diagnostic1/run-summary.json), [qualification-summary.json](../../e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1/diagnostics/browser-capture-runtime-convergence-diagnostic1/qualification-summary.json). These are
diagnostic observations, not Browser Evidence B.

## Starting authority and lineage

E2R-SPEC started clean at `c95b52f540191ea84267b6f986500ac39f06f3cc`.
The actual prior document authority is that finalization commit, not a presumed
uncommitted continuation.

| Role | Commit | Parent | Subject |
| --- | --- | --- | --- |
| Prior substantive result | `e73b06f2c1cef175ca58721a68f008722febf3a0` | `c51f3ae7bdc34d65050c42478cec712872d117db` | docs: record application readiness recurrence diagnostic |
| Prior final reference / starting HEAD | `c95b52f540191ea84267b6f986500ac39f06f3cc` | `e73b06f2c1cef175ca58721a68f008722febf3a0` | docs: finalize application readiness diagnostic reference |

Preflight inspected status, HEAD, log -20, both commit stats, subjects and parents.
Historical records and blocked roadmap entries are not rewritten.

Fresh diagnostic clone:
`C:/Users/extra/E2R/e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1`.

Exact base and unchanged semantic authority:
`ba3cb3dd50ab723a7b4a4a5c2b839bc2abef87d4`.
No correction clone was created. No new semantic commit was created.
Diagnostic commit: `a4b646776ba4b5362bcbbe75f9058092896e4666`, subject
`diagnostics: converge Browser Capture runtime failures`; artifact-index
follow-up: `d85b3596a0ff71a9ea75f33288e3ef22e6f8521a`.

## Semantic, binary and browser authority

`PR3-BROWSER-CAPTURE-IMPLEMENTATION-AUTHORITY-v1`: manifest 21, closure 21,
omitted 0, unexpected 0, before and after. Exact production authority validation
ran before every attempted diagnostic and again after work.

| Bound source | Git blob (unchanged) | Git raw SHA-256 (unchanged) |
| --- | --- | --- |
| C# helper | `7b9388d99ad9f84d761cd363ee4c0885ce553ff1` | `8463CA40361743CC129952BF471DF8E290977D9B58DDBE36D5D1A52F0D017C5F` |
| EXE helper | `781440ea9d1d10fc3c6f059bdde8b9394fdbd233` | `17F38BFC4DB37EC6A7D906D6A7E90EFD64864FEE336D2215F7BB1CEE20182E86` |
| browser-capture.mjs | `02dac418d67b9d5f8da793b4dcc200c98fde5e9d` | `CCA9FD5E150006C2541BD1EA3F6B52D9CA06B1BE03D0419A5573DF18634B2251` |
| main.tsx | `b671e09d2729fc8ac1002ed2bc0740f1107baefd` | `116B684D3D87C3FBA58C5EBEA64182650324125BCB0F2BD3DD30A50024AB9F49` |

Build authority `PR3-BROWSER-CAPTURE-DOTNET-HELPER-BUILD-AUTHORITY-v1`:
`DB0A717A579BC52BDF86DA7B0C25FF238893DA0410E11A3343D7F874B1FDBC37`.
Client authority `PR3-BROWSER-CAPTURE-WEBSOCKET-CLIENT-AUTHORITY-v2`:
`4C87A2359BF5146E6781B97208A85B04B76A53966977BDEDFF9BAB01A84D8BF9`.
Both unchanged; client rematerialization: NO; new client authority: N/A.
Changed semantic paths: NONE. Existing Run Identity v3 and Phase Bridge v3
remain sufficient for these unchanged inputs; no v4 or new identity is created.

Edge: `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`;
version `152.0.4191.62`;
SHA-256 `D26CC5367000F94F05664F33D7118B1BEDA5A4633CFF019D13CC113449B71B0C`.
Browser drift: NO. EXE bytes identical in every run, including Q1.

Windows worktree text uses CRLF; worktree-raw text hashes therefore differ from
Git-raw LF hashes. The existing authority validator normalizes text as designed,
and all expected Git blobs/raw hashes match. The EXE raw bytes match directly.
This is not a semantic correction or falsely retained authority. Full identities
and closure: [authority-self-check.json](../../e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1/diagnostics/browser-capture-runtime-convergence-diagnostic1/authority-self-check.json) and [authority-after.json](../../e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1/diagnostics/browser-capture-runtime-convergence-diagnostic1/authority-after.json).

## Six historical episodes, preserved separately

The letters here identify historical episodes; new controls use A1/A2/A3 and
B1/B2/B3. In particular, **new diagnostic B1 is not governed B1**.

| Episode | Commit | Preserved observation | Limit established by this audit |
| --- | --- | --- | --- |
| A: EXE runtime qualification | `a3961661b46a096ba070c0c1593fbecb07619c18` | Canonical 3/3 PASS: exact target, CONNECTED, evaluate=2, domains, marker, SVG/viewBox and teardown | Short canonical path does not establish an idle receive can survive 10s |
| B: Restart4 governed B1 | `25e65b89f275eef9511c5e9792ea6e3bd927db29` | Three terminal refusal attempts, two retries; one failed item, fifteen pending | Accepted root-exit → listener-loss interpretation is corroborated by C; raw B attempts lack PID/exit timestamps, so no invented B chronology |
| C: refusal diagnostic | `74140239207a935bb211ac839eafe242d745c1b0` | No-helper control also exits; helper control 3/3 root exit → listener loss/refusal; 2147483651 / 0x80000003 | Helper not necessary for this historical failure; root-exit initiating cause unresolved |
| D: lifetime diagnostic | `a6c9bab7ada605001bd53f15baf8564195eb438d` | App/no-helper 3/3 and trivial/no-helper 3/3 survived bounded observations; no new breakpoint exit | Non-reproduction under a different allocator and observer does not erase C |
| E: recurrence gate | `00106693de338c39ca2596df1ca47c30d85e6fb7` | Planned 6; retained Run1 PASS with 10s/36 samples, Run2 APPLICATION-READINESS FAIL; remaining four unexecuted in retained gate | Source does one immediate composite snapshot, not production polling; Run2's false component is not retained |
| F: readiness diagnostic | `166f01d7afc950e18042417739c79fcf0a3b33dc` | Last retained run discovers page, opens Node probe, then helper refuses; CDP/readiness not reached | Wrong Vite root, uncorrelated adapter, no continuity trace; retained one-run summary is not a total launch ledger |

E Run1 contains an additional nested `teardown.helper.errors`
OperationCanceledException even though its top-level `helperErrors` is zero.
It has no timestamp sufficient to place that error before/after close. Preserve
its historical PASS label and both raw fields; it is consistent with, but does
not independently prove, Q1's receive-idle mechanism.

F's session contains repeated runner invocations and separate probes; each
invocation overwrote run1/summary. Thus the prior document's retained 1/3 and
stop-on-first-failure statement cannot establish the total actual launch count.
Its empty exception/navigation arrays were hard-coded: NOT OBSERVED, not zero.
No missing raw event has been reconstructed as a measurement.

References: [historical-observation-matrix.json](../../e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1/diagnostics/browser-capture-runtime-convergence-diagnostic1/historical-observation-matrix.json),
[source-extracts.json](../../e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1/diagnostics/browser-capture-runtime-convergence-diagnostic1/source-extracts.json), [prior-readiness-reconstruction.json](../../e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1/diagnostics/browser-capture-runtime-convergence-diagnostic1/prior-readiness-reconstruction.json),
[restart4-preservation.json](../../e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1/diagnostics/browser-capture-runtime-convergence-diagnostic1/restart4-preservation.json), [lineage.json](../../e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1/diagnostics/browser-capture-runtime-convergence-diagnostic1/lineage.json).

## Complete historical code-path delta audit

This is an informational diagnostic; A-F refer to the six historical episodes,
not the new controls. Exact source paths, commits, raw hashes and numbered
source excerpts are in `source-extracts.json`. Historical files remain unchanged.

| Aspect | A: EXE qualification | B: governed B1 | C: refusal diagnostic | D: lifetime diagnostic | E: recurrence gate | F: latest readiness diagnostic |
| --- | --- | --- | --- | --- | --- | --- |
| Edge launch | `launchEdge/startEdge` | `capture` | `startEdge` | `runControl` | `run` | `run` |
| argv order | headless, disable-gpu, disable-extensions, first-run/default-check, profile, port, address, scale factors, window, URL | same | same | same | same | same final runner; earlier transcript probes differ |
| cwd/env/detached | inherited clone cwd/env; false | inherited clone cwd/env; false | same | same | same | same |
| shell/windowsHide | false/true | default false/true | false/true | false/true | false/true | default false/true |
| stdout/stderr | ignore/pipe | ignore/ignore | ignore/ignore | pipe/pipe | pipe/pipe | ignore/ignore |
| Profile | mkdir timestamp/PID | port-derived; Edge creates | mkdir timestamp/PID/port | mkdir timestamp/PID/port | mkdir timestamp/PID/port | timestamp/run/port; Edge creates |
| Profile cleanup | retained | recursive remove after kill + 80ms; errors ignored | remove after root exit | remove after observation | remove after kill + 150ms | retained |
| Debug port | listen(0), release | random 9300-9799, unreserved | same as B | listen(0), release | same as B | same as B |
| Port ownership | no OS owner proof | no OS owner proof | TCP, no OS owner proof | TCP/process snapshot, no listener owner assertion | no owner proof | no owner proof |
| Vite | direct Node with evaluation root arg; shared | direct Node with evaluation root arg; shared | direct Node evaluation root; shared | direct Node evaluation root; shared | direct Node evaluation root; fresh | cmd -> npm -> cmd -> Vite; **Product root**, fresh requested |
| Vite readiness | successful HTTP awaited | HTML parsed as JSON, 80 attempts failure swallowed, then 1200ms delay | successful HTTP awaited | successful HTTP awaited | successful HTTP awaited | not awaited; 1500ms delay is after Edge launch |
| Input timing | before Vite | per capture after Vite | before Vite | before Vite | after Vite HTTP | immediately after shell spawn |
| Input data | B1-shaped 2 nodes/1 relation | actual B1-shaped 2/1 | same 2/1 | empty 0/0 | empty 0/0 | empty 0/0, viewportTransform absent, unused fields added |
| Evaluation URL | qualification query | `cell=apollo_11__en&attempt=1..3` | hyphenated cell; diagnostic attempt | hyphenated cell; diagnostic attempt | hyphenated cell; recurrence attempt | hyphenated cell; no attempt |
| Discovery | /version and /list, 10s, 100ms | each bounded at 8s, 100ms | 8s/100ms | 80ms and process snapshots | 80ms, first successful list only | 1500ms then 80/100ms; first exact list |
| Target selector | unique exact URL | imported/exported strict selector; ambiguity fails closed | exact URL, errors retried | one exact URL | single list exact URL | own selector |
| Freshness before helper | no revalidation | no revalidation | TCP/HTTP before and after helper | no helper | no revalidation | no revalidation after probe |
| Node TCP probe | none | none | yes | yes | none | none |
| Node WS probe | none for canonical direct run | none | none | none | none | page-target WebSocket, no commands, **open during helper connect**, close only in finally |
| URI rewrite | none | none | none | n/a | none | `127.0.0.1` -> `localhost` |
| EXE spawn | direct shell:false | production `DotnetBridge`, direct shell:false | own adapter direct shell:false | n/a | own adapter direct shell:false | own adapter direct shell:false |
| CONNECT budget | EXE 10s; Node startup observes 3s | 10s | 10s | n/a | 10s | polls connected 10s; ERROR during connect not propagated |
| CDP correlation | matches command ID | production Cdp matches ID and rejects protocol errors | evaluate accepts first MESSAGE | n/a | matches command ID | **first pending waiter gets every MESSAGE, including unsolicited events** |
| Enable order | evaluate, Runtime, Page | Page, Runtime, Emulation metrics/scale, Page.navigate | evaluate only | none | evaluate, Runtime, Page | evaluate, Runtime, Page |
| Readiness | 10s marker polling then separate DOM checks | 100 marker attempts/100ms, shared 10s CDP deadline; 80ms wait then DOM/SVG | none | none | **one combined snapshot, no polling** | marker loop 10s starts after setup; invalid adapter; fake empty event arrays |
| Readiness domain | evaluation entry | evaluation entry | transport only | lifetime only | evaluation entry | Product HTML served at evaluation-shaped URL |
| Root monitoring | spawn/exit and health | no exit observation in retained capture return | spawn/exit, TCP/HTTP health | process tree + exit | exit monitored; fail vector lost | no exit handler or continuity series |
| Timeout/kill paths | timers bound observer; close helper then kill root | readiness deadline; finally close helper -> kill root -> 80ms -> remove profile/input | close helper, health, kill root | observations complete then root kill | helper close, root/Vite kill, 150ms; quiescence hard-coded true | helper CLOSE not awaited; root and outer shell kill; descendants not awaited |
| Vite teardown | child.kill, no full wait | finally vite.kill | finally vite.kill | finally vite.kill | direct child.kill | kills outer shell only; prior Vite PID 10632 remained on 4173 |
| Run retention | canonical 3 JSONs | immutable attempts in evidence | per control | per control | runN JSON overwritten if invoked again | run1/summary overwritten on every invocation; retained 1 != total launches |

### Readiness and capture-input findings

Production uses only `globalThis.__E2R_BROWSER_READY__ === true` as its poll
predicate. `document.readyState`, href, root, SVG and viewBox are supplemental
qualification checks. The deadline is created after the Cdp constructor and
shared by connection, domain enable, emulation, Page.navigate, marker polling,
DOM extraction and capture. There are at most 100 polls, with 100ms delays
between calls, not 100 ticks scheduled at fixed absolute times. An immediate
false result at time zero is expected while bootstrap is pending. E did not
wait for it to change and did not retain which component was false. E cannot
establish a production timeout failure.

`main.tsx` resolves `/capture-input.json` at `location.origin`, adds the encoded
location search as cacheBust, fetches with no-store, checks response.ok, parses
JSON, calls renderEvaluationGraph, calls React createRoot.render, then sets
the marker. Exceptions before assignment prevent the marker. The marker is
assigned after render scheduling, **without a commit/layout completion
barrier**. Navigation creates a fresh JS context and resets the marker. This
is a possible DOM/marker timing gap; a production defect is not yet proven.
There is no stale value cache in production Cdp; each call gets a new ID. A CDP
exceptionDetails reply is not treated as JavaScript throw by the poller and
does not yield true; protocol/transport rejection propagates directly.

Vite can return HTML for a missing JSON URL. response.ok alone would not
detect that; JSON parsing rejects it. The existing absolute entry seam remains
present. F's Vite root points at Product, so F is not a valid evaluation-entry
qualification even if transport succeeds. Its empty exception/navigation
arrays are NOT-OBSERVED, not measurements of zero.

### Port, target and probe findings

Neither random-500 nor bind-to-zero-then-release reserves a port until Edge
binds. The latter reduces selection of an already occupied port but leaves a
release/bind gap. /json/version proves a responding browser, not ownership by
the just-launched PID. B has no immediate root/TCP/target-ID/URI revalidation
between selecting the page and CONNECT. Cdp construction performs synchronous
authority work before spawning EXE, adding a measured gap in this checkpoint.
These are audit gaps, not proven causes of historical failures.

F's probe opens the direct page socket, sends no CDP command, stays open until
finally, then calls close() without awaiting its close event. It also rewrites
the helper URI host. Probe interference, a one-client restriction, TIME_WAIT
causation, address-family causation, stale target/URI and helper source defects
are all NOT-PROVEN. An earlier successful socket cannot prove later continuity.

The new B control preserves the source-observed open-through-helper lifetime;
closing the probe before helper would not reproduce F. It omits F's hostname
rewrite to isolate the probe variable. This distinction is explicit rather
than silently attributing both changes to the probe.

### Initial causal model and evidence limits

Root exit can cause listener loss and then TCP refusal for either client.
That chain is supported by historical C, whose helper-free control also failed.
The exact initiating root failure is unresolved. D's surviving controls used
a different allocator, observation path and bounded interval, so they do not
erase C. E adds an independently proven premature diagnostic assertion, and F
adds wrong Vite root, weak cleanup/correlation and missing event retention.
A single shared production race explaining all six episodes is not established.

The session transcript for F contains repeated runner invocations and separate
probes; its retained summary reports only the last run. Its stated 1/3 and
stop-on-first-failure cannot be used as a full launch ledger. Preserve the
original artifact and distinguish retained-record count from execution count.

On 2026-09-05 before controls, OS process inventory found F's node PID 10632
listening on 4173 (parent cmd 13048, parent npm 23324), command line pointing
into F's node_modules and lacking the evaluation root argument. Those exact
diagnostic processes were stopped after ownership verification. No historical
repository file was changed. The new runner logs each spawn, calls production
Cdp, uses the literal B1 input expression, verifies Vite ownership/HTML/input,
uses unique profiles and write-once run files, and awaits teardown.



## Unified diagnostic path and instrumentation boundaries

The new runner imports the exact production Cdp, target selector/poller and
readiness constants; it does not use historical F's custom adapter. The B1
capture-input expression is read from the accepted executor and instantiated
for apollo-11/en (two nodes/one relation, including viewportTransform).
This is the actual current B1 input shape, not a claim to full fixture visual
coverage. Vite receives the evaluation root positional argument, uses direct
Node spawn and port 4173, and serves evaluation-root HTML. Page URL is exactly
`http://127.0.0.1:4173/e2r-liaison-scape/?cell=apollo_11__en&attempt=1`.

Frozen Edge argv, in order (profile/port/URL substituted per run):

```text
--headless=new
--disable-gpu
--disable-extensions
--no-first-run
--no-default-browser-check
--user-data-dir=<fresh profile>
--remote-debugging-port=<random 9300..9799>
--remote-debugging-address=127.0.0.1
--force-device-scale-factor=1
--force-page-scale-factor=1
--window-size=1280,900
<exact evaluation URL>
```

No flag change, browser endpoint substitution, GPU sandbox override, Chrome or
Firefox run, browser update, OS/security/PowerShell policy/registry/firewall/GPU
setting change occurred. All new runs used the same execution user
`msi\\extra` in the approved execution context. Historical privilege-context
differences were not separately randomized or proven causal.

Observability adds read-only TCP/HTTP probes, OS listener-owner assertion,
immediate root/target/URI revalidation, an independent worker's 100ms continuity
sampling, stderr/exit/IPC logging, Network.enable, and a separate DOM-vector read
beside each marker poll. Each file is write-once per run. JSONL sequence is append
order; worker samples carry their own start/end times on the same process.hrtime
origin, so chronological analysis uses elapsedMs and completedMs, not arrival
order. Sampling cannot exclude every sub-sample transient.

There is a 1,274.702–1,402.525ms synchronous authority-validation gap from
production Cdp constructor entry to helper spawn. The independent monitor
continues through this gap. Root/listener/exact target/URI remained healthy in
all sampled post-selection, pre-teardown states. The observations and successful
HTML wait affect timing; this is production-like, not byte-for-byte governed
orchestration or evidence equivalence. No artificial wait, retry, heartbeat,
timeout increase or allocator change was used to conceal a failure.

A1 imposed an extra immediate JSON parse after writing input into already-running
Vite. It failed before Edge/helper launch. A2 onward records the raw response
instead, without imposing that non-production gate. This diagnostic-only change
is disclosed; A1 remains a failed invocation. The pre-browser request returned
200 text/html in all six later runs, whereas every actual browser capture-input
fetch returned 200 application/json. Vite's cached publicFiles set and asynchronous
watcher explain the publication window (local dependency source/hash/line excerpts
in [capture-input-audit.json](../../e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1/diagnostics/browser-capture-runtime-convergence-diagnostic1/capture-input-audit.json)). No production input/readiness failure
was demonstrated by that early observational request.

## Controls, readiness and qualification

| Run | Debug port | Vite / Edge / helper PID | Marker result / elapsed ms | Final result | Continuity samples |
| --- | --- | --- | --- | --- | --- |
| A1 | 9642 | 26812 / — / — | NOT-REACHED  | FAIL / SETUP | 0 |
| A2 | 9452 | 29932 / 9228 / 9052 | PASS 299 | PASS | 25 |
| A3 | 9630 | 20764 / 29844 / 29484 | PASS 258 | PASS | 26 |
| B1 | 9485 | 24860 / 25360 / 8548 | PASS 262 | PASS | 28 |
| B2 | 9793 | 17444 / 25584 / 26492 | PASS 300 | PASS | 26 |
| B3 | 9773 | 26672 / 25500 / 20088 | PASS 290 | PASS | 27 |
| Q1 | 9700 | 25264 / 28436 / 27836 | PASS 270 | FAIL / OBSERVED-RUNTIME-ERROR | 114 |

Control A: up to 3 planned, 3 diagnostic invocations, 2 browser launches,
2 PASS, 1 setup FAIL (A1). Control B: 3 planned/executed, 3 PASS.
Control C: NOT APPLICABLE / not executed; A/B showed no listener/target discontinuity
and no justified historical delay needed replay. Control D: all six connected
runs reached readiness, 6 PASS, 0 timeouts, 0 grace windows, 0 late-readiness cases.
Control IDs B1–B3 here add zero governed B1 attempts.

For every connected run: TCP/version/exact list/target/URI revalidation PASS,
helper CONNECTED, Runtime.evaluate=2, Page.enable and Runtime.enable PASS;
first DOM vector was interactive, exact href, root=true, SVG=false,
viewBox=null, marker=false/undefined. The next sample showed complete, exact href,
root=true, SVG=true, viewBox=`0 0 800 500`, marker=true; the post-ready 80ms
check also passed. No DOM/marker disagreement, runtime exception or readiness
timeout was observed. This demonstrates a normal false-to-true startup transition,
not the missing exact predicate vector of historical E Run2.

| Run | Exact target ID | Exact WS URI |
| --- | --- | --- |
| A2 | `2DEA423523BFB2725C19486285469E90` | `ws://127.0.0.1:9452/devtools/page/2DEA423523BFB2725C19486285469E90` |
| A3 | `9BBFB31AFEA0961EB789B44083273B68` | `ws://127.0.0.1:9630/devtools/page/9BBFB31AFEA0961EB789B44083273B68` |
| B1 | `F3363954DBB6DE147E02B7CCF63A848D` | `ws://127.0.0.1:9485/devtools/page/F3363954DBB6DE147E02B7CCF63A848D` |
| B2 | `BEB21545283470BAFDF0F7A38BB962F0` | `ws://127.0.0.1:9793/devtools/page/BEB21545283470BAFDF0F7A38BB962F0` |
| B3 | `A119E59C1B84755C77FB66189002E49C` | `ws://127.0.0.1:9773/devtools/page/A119E59C1B84755C77FB66189002E49C` |
| Q1 | `93BCC51546E36EAE9A615501753C459C` | `ws://127.0.0.1:9700/devtools/page/93BCC51546E36EAE9A615501753C459C` |

Production marker predicate remains `globalThis.__E2R_BROWSER_READY__ === true`,
100ms between attempts, maximum 100, shared 10,000ms deadline created after
Cdp construction. DOM-vector reads are observations, not replacements for the
predicate. Runtime/Page/Network events and every individual sample are retained
in run-N.json/JSONL; A1's CDP/readiness is NOT REACHED, not a measured zero.

Across the six connected runs: root spontaneous exits 0, breakpoint exits 0,
targetCrashed 0, GPU-fatal signatures 0, cache-lock signatures 0, IPC parse
errors 0, Runtime.exceptionThrown 0. Each has seven Page-domain events (42 total,
including navigation/loading/resizing; not seven navigations). Six targets and
six profiles are distinct; all seven allocated debug ports, including A1's unused
browser port, are distinct. Fresh helper count 6; fresh Edge count 6; fresh Vite
count 7. All seven invocations reached checked process/listener quiescence.
Only the five short controls had clean CLOSED envelopes and helper exit code 0.
Q1 had one pre-teardown helper ERROR and needed forced child termination;
quiescence does not make its helper teardown clean.

### Q1: decisive receive-idle chronology

| Monotonic elapsed ms | Observed event |
| --- | --- |
| 3,436.301 | Before-helper health: root alive, TCP connected, exact target/URI unchanged |
| 4,760.629 | Exact prebuilt helper spawned, PID 27836 |
| 4,761.327 | CONNECT sent with 10,000ms bound |
| 4,867.674 | CONNECTED envelope received |
| 5,031.806 | Production marker PASS; shared budget elapsed 270ms |
| 5,121.467 | Last MESSAGE received, after final DOM evaluation |
| 15,151.545–15,159.110 | Independent sample: root alive, TCP connected, same target and URI |
| 15,159.604 | ERROR: OperationCanceledException in Program.ReceiveLoop |
| 15,269.244–15,277.686 | Same root/listener/target/URI still healthy after ERROR |
| 15,386.843 | Final pre-teardown health remains healthy |
| 15,389.695 | Teardown begins; no prior CLOSE IPC |
| 17,415.082 | Helper child exits by SIGTERM after bridge close fallback |
| 17,912.239 | Helper/Edge/Vite dead; debug and Vite listeners refused; quiescence PASS |

C# source lines 120–122 instantiate `CancellationTokenSource(10000)` around
each pending receive. Lines 143–147 emit ERROR and cancel StopSource unless
already stopping. It is a receive-idle timeout, not a token retained from CONNECT.
No Node CLOSE or Edge teardown preceded the exception. The source, stack trace,
~10s idle interval and healthy endpoints together support CASE 10.

The Node production bridge correctly treats ERROR as terminal and marks Cdp
closed. Its subsequent CLOSE write is rejected because the bridge is already
closed; it waits for its bounded exit then kills the helper. Ignoring that ERROR,
sending periodic CDP traffic merely to reset receive-idle, or silently increasing
a timeout would not qualify the unchanged requested idle path.

Raw Q1 `survival.status=PASS` describes 36 browser/root/listener/target snapshots
over 10,229.116ms. The helper error landed during the final sampling sleep,
after the last loop check of Cdp.closed. The runner's final error gate retained
overall FAIL. **Combined helper-inclusive survival: 0 PASS / 1 FAIL**, not 1/1
qualification PASS. The raw browser-only subresult is preserved without promotion.

### Answers to the primary causal questions

| Question | Evidence-backed answer |
| --- | --- |
| A: One shared lifecycle race? | NOT PROVEN. Historical root/listener loss, E/F diagnostic defects and Q1's idle receive timer are distinct mechanisms. |
| B: Two independent production issues? | Browser/listener failure is historically observed; a production readiness defect is not established. There is now a separate proven helper receive-idle issue, not simply a two-issue browser/readiness model. |
| C: Instrumentation perturbation? | Extra timing and TCP/HTTP/Network traffic exist; a harmful listener/target perturbation is NOT PROVEN. A1's extra assertion and E/F's source divergences are proven diagnostic issues. |
| D: Node WS probe? | New B1–B3 keep the direct page socket open through helper connect, send no commands, then close normally (1000) in finally. All pass with unchanged target/URI. Globally PROVEN-HARMLESS would overclaim; audit status NOT-PROVEN for harmful causation, no observed perturbation in these three comparisons. |
| E: Port allocation? | Random 500-port pool has no reservation/collision recovery; bind-zero/release also has a release/bind gap. New runs use the random mechanism, reject occupied ports without redraw, assert Edge PID ownership; no collision/reuse failure observed. Version response alone is not ownership proof. |
| F: Selection too early? | Production lacks immediate revalidation and has synchronous authority work before CONNECT. All new post-selection samples and helper connections are healthy; causal importance of that gap is NOT PROVEN. |
| G: Stale WS URI? | Possible audit gap, not observed. Same ID/URI before helper and through monitored runtime in all six connected runs; historical F lacks that continuity proof. |
| H: Root alive while page recreated? | Mechanically possible but no replacement of the selected target was observed. Page.navigate creates a new document context on the same target; other background targets do not equal selected-target replacement. |
| I: Helper racing teardown? | Historical C supports browser loss preceding refusal. Q1 ERROR precedes any teardown while root/listener/target remain healthy; it is receive cancellation, not connect/teardown race. CONNECT-specific ClientWebSocket divergence is NOT PROVEN; receive-idle divergence is supported. |
| J: Exact readiness predicate failure? | E Run2's false component was not recorded. New initial vectors have SVG=false, viewBox=null, marker=false, readyState=interactive; all become ready within 258–300ms of shared budget start. No production polling miss or late readiness observed. |

No observed one-client-only restriction (probe and helper coexist in all three B
runs). No target/session detach attributed to the probe, no URI change, and no
TIME_WAIT ownership/causation proof. F's hostname rewrite is intentionally not
combined with the isolated probe comparison; address-family hypothesis stays
unproven. There is no receive-loop timer fix in Node configuration that removes
the hard-coded C# timer while preserving the requested passive survival contract.

## Correction boundary and exact next prerequisite

Correction applied: NO. Changed semantic paths: NONE. Correction clone/commit:
N/A. No speculative regression tests or authority rematerialization were added.
The new runner and summaries are diagnostic-only; the accepted C#, EXE,
executor, evaluation entry, build inputs and client-bound sources are unchanged.

Next prerequisite: a separately authorized **helper receive-lifetime
design/correction and controlled prebuilt EXE materialization** checkpoint.
It must distinguish a healthy idle receive from explicit close/cancellation and
bounded CONNECT/SEND/CDP operations, test a quiet receive beyond the current
10-second boundary plus clean shutdown, bind the resulting reviewed binary and
source in implementation/build/client authority, and run the required fresh
6-consecutive-run non-evidence qualification with no retries. Those are next
checkpoint requirements, not implementation or build actions performed here.

Current v3 identity/bridge contracts remain sufficient for the unchanged
authority; a future changed authority must be rebound and verified there.
No new binary, csc.exe invocation, Node heartbeat workaround, caller timeout
extension, evidence restart or Protocol A is part of this checkpoint.
Fresh Protocol A remains blocked until the future authority and qualification
gates pass. Next checkpoint NOT STARTED.

## Preservation and evidence boundaries

Restart4 HEAD `25e65b89f275eef9511c5e9792ea6e3bd927db29`;
semantic ID
`pr3r1-ec74872605846cbb9bc1c1b6d8acf5bb083bc4c65c58b44dcb24836fcd1f6861`.
B1 remains planned 16, executed 1, success 0, failure 1, pending 15,
attempts 3, retries 2. Manifest/index byte hashes and the full historical tree
are unchanged. Modified: NO; resumed: NO; pending consumed: NO; new governed
attempts: 0. Restart3 remains unchanged at
`45a8a1c55a41f767b3f22ad963321dda6fd9a755`.

Product remains `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`, with both
pre-existing dirty lighthouse EN/JA samples preserved byte-for-byte. Machine
Protocol `06f66142812be03a8a3a138e2b774cbc9926b91f` and Machine Evidence B
`b0bd0f1a9f70915c639cbee61cf5f8370c78766f` are unchanged; Machine rerun: NO.
Original Harness, fixtures, Baseline2, retained materializer (including its
pre-existing untracked experimental files), and all six historical diagnostic
clones are unchanged. No historical file edits occurred. Before/after inventories
compare HEAD, status, and raw file-tree fingerprints for 13 repositories:
[preservation-before.json](../../e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1/diagnostics/browser-capture-runtime-convergence-diagnostic1/preservation-before.json) / [preservation-after.json](../../e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1/diagnostics/browser-capture-runtime-convergence-diagnostic1/preservation-after.json).

The previously orphaned F diagnostic Vite and its exact owned shell/npm ancestry
were stopped after identity verification; no user browser was stopped.
Each new run removed only its own generated capture-input after matching its
hash. Fresh temporary Edge profiles are retained for audit; no broad profile
deletion was performed. Listener/process quiescence was checked per run.

V3: 0. Screenshots: 0. Fresh restart/Protocol A: not created.
Browser Evidence B: NONE / INCOMPLETE. Human Review: NOT STARTED.
Review1: NOT ELIGIBLE. E-VISUAL: NOT PRODUCED. Ranking/selection: NOT STARTED.
PR-3: NO. No push, tag, release, deployment or publication.

Knowledge Candidate: CANDIDATE ONLY / NO NEW ENTRY. Use a single timestamped
production-like chronology, audit code-path differences and retain failed evidence
instead of merging aggregate failure labels. A receive-idle error must be separated
from close-time cancellation and listener loss. No ai-knowledge edit; its
pre-existing dirty browser playbook is preserved exactly.

## Verification, commits and handoff

| Gate | Pre | Post |
| --- | --- | --- |
| Focused authority/bridge/CDP/target/run-binding tests | 102/102 PASS | 102/102 PASS |
| npm test | 309/309 PASS | 309/309 PASS |
| npm run lint | PASS | PASS |
| npm run build | PASS | PASS |
| node --check executor and diagnostic runner | PASS | PASS |
| Diagnostic summary syntax and chronology assertions | N/A | PASS |
| Authority / preserved trees | PASS | PASS |

Exact-lockfile `npm ci --ignore-scripts` reconstructed node_modules only.
package.json and package-lock.json unchanged; no dependency added/upgraded.
These passing static gates do not exercise and qualify a real idle receive;
they do not override Q1. Correction regression tests: N/A (no correction).
All raw gate logs, source extracts, run JSON/JSONL and summaries are indexed in
[artifact-index.json](../../e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1/diagnostics/browser-capture-runtime-convergence-diagnostic1/artifact-index.json).

E2R-SPEC changes: this informational result and an additive roadmap entry only.
E2R-SPEC validate: PASS. Diff/staged-diff check: PASS. E2R-SPEC substantive
commit: `24a6320163266224e476f884264537db584adfbc`.
Final reference authority is the separate non-amending finalization commit that
records that substantive hash; the containing Git commit is its exact identity.
Diagnostic final state: clean at `d85b3596a0ff71a9ea75f33288e3ef22e6f8521a`.
E2R-SPEC final worktree: clean at `24a6320163266224e476f884264537db584adfbc`.
All commits remain local/unpushed. No correction clone exists.

This report and its linked per-run/authority/preservation records cover the
requested final-report fields 1–140: decision/lineage (1–18), exact authorities
(19–26), historical/source and causal audits (27–39, 72–84), all control/readiness/
error fields (40–71), tests and qualification (85–104), evidence/preservation/
documentation (105–128), verification/commit/safety/next boundary (129–140).
