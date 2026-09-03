# LiaisonScape Initial Placement / Seed Production / Visual Settling / Routing / Evidence / Browser Capture1 - Host/GPU Runtime Graphics Diagnostic2

Date: 2026-09-04 JST
Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-GPU-RUNTIME-GRAPHICS-DIAGNOSTIC2`

## Result

**CASE 1 / DECISION A - HEADLESS CHROMIUM GPU-SANDBOX/RUNTIME PATH STRONGLY IMPLICATED.**

All three normal GUI controls rendered the deterministic local page correctly.
The retained Chromium baseline remained GPU-fatal under its original headless
path. Adding only `--disable-gpu-sandbox` produced three late-stable Edge CDP
passes with no GPU fatal or cache-lock signal and full quiescence. This refines
Diagnostic1's conclusion: the evidence does not demonstrate total host GPU or
Windows graphics failure. The next controlled prerequisite is the update-free
Windows Update qualification for KB5120998; the update is not installed here.

The sandbox-disabled flag is diagnostic-only and is not accepted as a Browser
Capture, PR-3, or production launch configuration.

## Evidence record

1. **CASE:** CASE 1 - GUI PASS plus Chromium GPU-sandbox diagnostic 3/3 stable.
2. **Decision:** DECISION A - headless Chromium GPU-sandbox/runtime path strongly implicated.
3. **e2r-spec starting HEAD:** `f0a853c83d96849662d91d04c4ba885e48694529`.
4. **Diagnostic1 authority:** `42f9f796bcc0e84b5ab5c0bf50dab3370b168acf`.
5. **Diagnostic clone path:** `C:\Users\extra\E2R\e2r-liaison-scape-host-gpu-runtime-graphics-diagnostic2`.
6. **Diagnostic clone base:** exact Diagnostic1 final HEAD above.
7. **Windows build:** Windows 11 Home, 25H2, build `26200.9168` (`26200`, UBR `9168`).
8. **KB5120998 installed:** NO; no update action.
9. **GPU adapter:** Intel(R) UHD Graphics, `PCI\\VEN_8086&DEV_A7A8`.
10. **GPU driver:** Intel Corporation `32.0.101.7088`, dated `2026/06/17`; WDDM 3.2, DirectX 12.
11. **Edge version:** `152.0.4191.62`.
12. **Chrome version:** `152.0.7977.75`.
13. **Firefox version:** `154.0.1` Microsoft Store executable.
14. **Control-page SHA-256:** `3b0eaf2daf945621a9dfb55673b8dda481a607251092098dc5c63d6eff3aa502`.
15. **GUI Edge test:** YES; `GUI-RENDER-PASS`, valid PNG `921x920`, fresh profile, cleanup/quiescence PASS.
16. **GUI Chrome test:** YES; `GUI-RENDER-PASS`, valid PNG `929x917`, fresh profile, cleanup/quiescence PASS.
17. **GUI Firefox test:** YES; `GUI-RENDER-PASS`, user-confirmed page/text/SVG YES and corruption/blank NO; window left open.
18. **All three GUI render PASS:** YES.
19. **Normal GUI graphics classification:** `NORMAL-GUI-GRAPHICS = PASS`.
20. **Diagnostic1 total-host-graphics conclusion refined:** YES.
21. **Refined wording:** `CROSS-ENGINE HEADLESS/AUTOMATED GRAPHICS-COMPOSITOR FAILURE OBSERVED; NORMAL GUI GRAPHICS PATH REMAINS FUNCTIONAL.`
22. **Prior Firefox headless result reinterpreted:** YES; it remains a valid Firefox headless/compositor failure observation, not proof of total host failure.
23. **Retained Chromium baseline reused:** YES; prior Edge/Chrome headless failures were not changed.
24. **Sandbox experiment executed:** YES; Edge only, 3 cycles.
25. **Exact added flag:** `--disable-gpu-sandbox` only; `--headless=new`, `--disable-gpu`, profiles, ports, Node launcher, and `/json/version` poller were retained.
26. **Edge sandbox cycles planned/completed:** 3 / 3.
27. **Edge sandbox stable PASS count:** 3; all were `SANDBOX-LATE-STABLE-PASS` because first CDP was after 5 seconds, while the full 3-second stability window passed.
28. **Edge sandbox failure count:** 0.
29. **Edge sandbox first-CDP range:** `5574-5632 ms`.
30. **Edge sandbox stability:** 3/3 reached CDP and remained reachable through the 3-second window.
31. **Edge sandbox GPU fatal count:** 0.
32. **Edge sandbox cache-lock count:** 0.
33. **Edge sandbox quiescence PASS count:** 3/3; targeted trees stopped, ports closed, profiles quiet, cleanup PASS.
34. **Chrome sandbox cycles executed:** NO; Edge 3/3 was sufficient under the preregistered minimum experiment.
35. **Chrome sandbox stable PASS count:** 0 (not run).
36. **Chrome sandbox failure count:** 0 (not run).
37. **Chrome sandbox GPU fatal count:** 0 (not run).
38. **Profile reuse count:** 0.
39. **Port reuse count:** 0.
40. **Sandbox classification:** `SANDBOX-A / STRONGLY SUPPORTED`.
41. **GPU sandbox path strongly implicated:** YES.
42. **Total GPU hardware failure demonstrated:** NO.
43. **Total Windows graphics failure demonstrated:** NO.
44. **Headless/automation-specific failure supported:** YES.
45. **Product defect demonstrated:** NO.
46. **Harness defect demonstrated:** NO.
47. **Machine Evidence defect:** NO.
48. **Browser runner changed:** NO; only the isolated diagnostic variable was added.
49. **Browser authority changed:** NO; Edge remains the accepted authority.
50. **Windows Update changed:** NO.
51. **GPU driver changed:** NO.
52. **Windows graphics settings changed:** NO.
53. **Stable current canonical Browser Capture semantics demonstrated:** NO; the successful diagnostic requires a non-production sandbox flag.
54. **Fresh Browser Capture1 retry eligible:** NO.
55. **Capture7 resumable:** NO.
56. **B1 evidence:** 0.
57. **V3:** 0.
58. **Browser Evidence B:** NONE.
59. **PNG PR-3 evidence:** 0.
60. **Human Review:** NO.
61. **Review1 eligible:** NO.
62. **E-VISUAL:** NO.
63. **Ranking:** NO.
64. **Selection:** NO.
65. **Product integration:** NO.
66. **PR-3:** NO.
67. **Exact next prerequisite:** `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1-HOST-RUNTIME-WINDOWS-UPDATE-QUALIFICATION1`.
68. **Next checkpoint:** NOT STARTED.
69. **Diagnostic artifact root:** `C:\Users\extra\E2R\e2r-liaison-scape-host-gpu-runtime-graphics-diagnostic2\diagnostics\host-gpu-runtime-graphics-diagnostic2`.
70. **Diagnostic clone commit hash/subject:** `716fd17` (`diagnostic: isolate GUI and GPU sandbox graphics paths`); no push.
71. **Diagnostic clone final state:** clean at `716fd17`; unrelated repositories preserved.
72. **Result document:** this document.
73. **Roadmap:** changed additively.
74. **Knowledge Candidate:** candidate only; no new `ai-knowledge` entry.
75. **ai-knowledge:** unchanged, including pre-existing dirty playbook state.
76. **e2r-spec validation:** required `npm.cmd run validate` PASS.
77. **Diff-check:** required `git diff --check` PASS.
78. **e2r-spec commit hash/subject:** recorded after the documentation commit below; no push.
79. **e2r-spec worktree:** clean after the local documentation checkpoint, aside from unrelated pre-existing state if present.
80. **Live Product unchanged:** YES.
81. **Protected samples preserved:** YES.
82. **Machine clone unchanged:** YES.
83. **Original Harness unchanged:** YES.
84. **Retained materializer unchanged:** YES.
85. **Baseline2 unchanged:** YES.
86. **Browser Capture1 started:** NO.
87. **Review1 run:** NO.
88. **Windows Update / driver remediation:** NO.
89. **Push/tag/release/deploy/publication:** NONE.

## GUI controls

The Edge and Chrome controls used fresh visible/non-headless profiles and the
same local page. Their loopback CDP captures were used only as deterministic
render checks. Firefox's Store build did not expose the Chromium-style CDP
endpoint, so the user provided the required bounded manual acceptance:
`page YES, text YES, SVG YES, corruption NO`. The Firefox window remains open
on the local control page and was not terminated or cleaned up.

## Sandbox diagnostic

The three Edge cycles used ports `9941`, `9942`, and `9943`, unique fresh
profiles, the common Node launcher and `/json/version` poller, 12-second
observation, and a 3-second stability window. All three emitted a DevTools
listening signal, reached CDP late, remained stable for the required window,
and produced no retained `GPU process exited unexpectedly`, GPU-fatal, or
`GPUPersistentCache` lock event. The initial helper postflight misclassified
the dedicated sandbox TEMP root as unsafe; after a path-guard correction, the
same recorded runs were independently postflight-verified with targeted tree
termination, closed ports, quiet profiles, cleanup PASS, and zero remaining
diagnostic profiles. No additional browser cycle was run.

This is strong evidence that the GPU-sandbox/runtime path contributes to the
retained headless Chromium failure. It is not permission to weaken the browser
sandbox in production. The preferred next variable is the controlled
Windows Update qualification for KB5120998, still without installing it in
this checkpoint.

No Browser Capture1, capture7 resume, B1, V3, Browser Evidence B, Review1,
ranking, selection, Product integration, or PR-3 work occurred.
