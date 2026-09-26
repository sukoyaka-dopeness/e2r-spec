# LiaisonScape Initial Placement Seed: Browser Capture1 Result

Date: 2026-09-04

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-BROWSER-CAPTURE1`

## Status

**CASE 7 / DECISION G — B1 PHASE GATE BLOCKS CANDIDATE V3.** Browser
Capture1 is incomplete and blocked. The Browser phase was authorized and
Protocol A was committed, but the first seven B1 cells exhausted their three
transport attempts without a CDP endpoint. The run stopped before the B1 set
was terminal and before any candidate V3 capture. No Browser Evidence B
completion commit was created; the partial failure records are retained in the
Browser clone as a diagnostic failure commit.

The independent Edge probe succeeded with `Edg/152.0.4191.53`; the failure is
attributed to the Browser runner launch/readiness path, not to a candidate.
Human review, ranking, selection, E-VISUAL, Product integration, and PR-3
remain out of scope and were not performed.

## Authorities and frozen bridge

| Item | Authority |
| --- | --- |
| e2r-spec start | `86aa84ccb8b118e51a2206bff69c0177399b3d03` |
| Phase-Bridge Design Correction1 | `86aa84ccb8b118e51a2206bff69c0177399b3d03` |
| Product | `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` |
| Original Harness | `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` |
| Machine Protocol A | `06f66142812be03a8a3a138e2b774cbc9926b91f` |
| Machine Evidence B | `b0bd0f1a9f70915c639cbee61cf5f8370c78766f` |
| Machine phase run | `machine-execution1-2026-09-03` |
| Browser clone | `C:/Users/extra/E2R/e2r-liaison-scape-visual-evidence-browser-capture7` |
| Browser clone initial HEAD | `348bc2c0dae4a67d7b86ffa84f60609ac997743a` |
| Browser Protocol A | `a7a2aafad8fa25b66b183b8685827ae3fb938d4a` |
| Partial diagnostic commit | `06acff14d5e27e3c9a775057c608d203854cab20` |

Machine Evidence B was checked before execution: the clone was clean at
`b0bd0f1a9f70915c639cbee61cf5f8370c78766f`; artifact-index SHA was
`03D11E6A1EBCBBE548BA2722F48FDE971499E9806DD50C746B80C147FD0462AD`; run
manifest SHA was `45F5186426D57688203315EDFB3AA6D97CA597C4C8F7F95844EE1AEF6415C75C`.
The eligible V2 set was 80 / `E891C747394C492AE1D56AA1518F2E596E96756985BCBFBDFC93323070CC162C`;
the B1 pending set was 16 / `B02C9075A2758CF953F3D6BF50CC852E8394C0357A127F3B559708899D216335`.
Frozen transform was `0/1, 0/1, 6144/1`, fingerprint
`102F16DCEF44096686B67B34BDF385A5E71DDDC085183F0B9BA65F9785C34786`.
No V2 was recomputed or changed.

The Product source freeze passed for auto-layout, viewport, graph-presentation,
the accepted browser entry, render wrapper, and CSS Git blob authorities.
Edge Stable was resolved at `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`;
product and file version were both `152.0.4191.53`. Browser family/channel:
Microsoft Edge / Stable. Chrome fallback: **NO**. Viewport: 1280×900 CSS px;
DSF 1; zoom 100%; viewBox `0 0 800 500`.

## Identity and execution

Browser phase-local run ID: `browser-capture7-2026-09-04`.

Final canonical identity input SHA: `95FF619E25DEB4C5EDC281041BF6C4D32324E6765C4F5999A98FF68A343D8762`.
Final semantic ID: `pr3r1-95ff619e25deb4c5edc281041bf6c4d32324e6765c4f5999a98ff68a343d8762`.
The identity was independently verified before Protocol A. The phase bridge
was frozen as `PR3-PHASE-BRIDGE-v1`, targeting Browser and referencing Machine
Evidence B; no Machine artifact was copied, rewritten, or reidentified.

The final preregistration topology had six discarded pre-dynamic/failed
lineages before the final capture7 Protocol A: the first correction was before
dynamic capture; later lineages stopped on common B1 launch/readiness failure.
The final lineage's Protocol A preceded its dynamic sessions and no runner or
semantic configuration changed after dynamic capture began. Edge authority was
rechecked before the first attempt and had zero runtime-version mismatches.

## Capture result

| Measure | Result |
| --- | ---: |
| B1 planned | 16 |
| B1 terminal | 7 |
| B1 success | 0 |
| B1 browser-capture-failure | 7 |
| B1 pending when stopped | 9 |
| B1 attempts | 21 |
| B1 retries used | 14 |
| B1 candidate identity violations | 0 |
| B1 parent-link failures | 0 |
| Common B1 blocking failure | YES |
| B1 phase gate | FAIL |
| Candidate V3 planned | 80 |
| Candidate V3 terminal/success/failure | 0 / 0 / 0 |
| V3 attempts/retries | 0 / 0 |
| V3 parent mismatches | 0 |
| V2 recomputation | 0 |
| Browser sessions attempted | 21 |
| Successful screenshots/PNGs | 0 |
| PNG dimension/hash verification | NOT APPLICABLE |
| Browser generated artifact count | 7 partial B1 records |
| Artifact index/stale count | NOT FINALIZED / NOT APPLICABLE |

The partial B1 rows retained `candidate=NO-CANDIDATE` and exact machine
artifact references/hashes. No candidate V3 row was planned dynamically after
the failed B1 gate. Review-eligible V3: 0; Review-blocked V3: 0 because V3
was not started. Per-candidate and per-fixture quality summaries, ranking, and
score aggregation were not produced.

## Regression and repository state

Product full tests/lint/build and final artifact-index validation were not run
as a completion gate because the Browser phase stopped at the common B1
infrastructure gate. The accepted pre-A Browser unit/isolation checks passed;
the exact static checks were the browser entry test, accepted browser-entry
test, `node --check`, source freeze, machine reference, identity, and staged
diff checks. Baseline-v2 remains the frozen
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B` reference;
Baseline2 was not changed or rerun.

Live Product remains at `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` with its
pre-existing dirty sample files preserved. Original Harness, Machine clone,
Evidence1, Evidence2, retained materializer, and Baseline2 were not modified.
The Browser clone has no uncommitted transport file and retains the partial
failure commit above; it is not a valid Browser Evidence B completion state.

No new `ai-knowledge` entry was created; pre-existing ai-knowledge dirt was
preserved. e2r-spec validation and diff-check for this documentation commit
are recorded after staging. Push/tag/release/deploy/publication: **NONE**.

## Downstream boundary

Human review: **NO**. E-VISUAL: **NO**. Ranking: **NO**. Selection: **NO**.
Product integration: **NO**. PR-3: **NO**.

Exact next prerequisite from accepted authority:
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-REVIEW1`.
That checkpoint is **NOT STARTED**. A future retry requires a new Browser
lineage and Protocol A after correcting the runner launch/readiness fault; this
checkpoint must not be resumed by mixing the partial B1 records with new
captures.
