# LiaisonScape Initial Placement Seed: Run Configuration Evidence1 Result

Date: 2026-09-03

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE1`

Status: complete; candidate-neutral evidence collected, with exact translation
covariance failing. The transform is not recommended and Adoption1 is not
eligible.

## CASE / Decision

**CASE 4 / Decision D — TRANSLATION COVARIANCE FAILS**

The static authority, FP1 derivation, spacing proof, family-only probes,
explicit-seed settling, and Product downstream probes pass. The preregistered
exact translation comparison fails on Product floating-point output. The first
exact mismatch is:

`CP1-SINGLE / T1 / nodeLabel.probe-00.x: expected 3.4902433775699572e-15, received 0`

Additional exact mismatches include the CP10 V0 y coordinate
`1896.2962962962963` versus `1896.296296296296`. The protocol explicitly
forbids adding a tolerance merely to make this gate pass, and no applicable
already-accepted canonical equivalence rule establishes full origin neutrality
for these outputs. Therefore the full transform recommendation is **NO**,
zero origin is not justified, and Adoption1 is ineligible.

The exact next prerequisite is the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-TRANSLATION-COVARIANCE-DESIGN-RECONCILIATION1`.

## Authorities and valid evidence run

The Design1 authority is `04a7a24997d1f008e9dbb57aec4e6552b0d719d6`, and its
additive Correction1 is `349f42e11a7d88d51dbdfb1eb4323247bb3dfb44`. Both remain
historical and unchanged. Product authority is
`563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`; Harness authority is
`9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`.

The initially created disposable clone was
`C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-run-configuration-evidence1`.
Its observed-result tolerance experiment was excluded as an invalid mixed
run. The valid separately recorded clean restart is
`C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-run-configuration-evidence1-exact-restart1`.
It started from Protocol Commit A `ff28b5a`, parent
`9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`. Its pre-dynamic import correction
is `68fde7f` (`test: correct clean Evidence1 preflight`). Protocol A was
committed before dynamic probes and `protocol/protocol.json` was not changed
after execution began. Evidence Commit B is `9738ff4`
(`test: record exact Evidence1 covariance result`), with Protocol A as an
ancestor. The valid evidence clone is clean at that commit.

## Frozen source and derivation

The family-only FP1 source SHA-256 is
`DFE9358CC8DFD3FF5E6EED45B5E801E705F973F5C8CBB8AE587C1ACD8BCA6CF8`, with
`FP1_MAX_N = 65` and formula `N=1: P0=(0,0); N>1: m=N-1,
x_i=i/m, y_i=i^2/m^2, i=0..m`. Static inspection establishes a complete
candidate-independent permutation of the fixed FP1 index set; candidates
cannot change the point set. No candidate materializer was called.

Product `src/auto-layout.ts` SHA-256 is
`257B483A9703A15620FF64D97C485D5FE4EF586489BB9EEB6018E4167733E385`.
Verified defaults are clearance `96`, settling `3` iterations, and movement
clamp `18`. `RC-SPACING-v1` is frozen: at N=65 the minimum normalized x gap is
`1/64`, requiring `scale * (1/64) >= 96`; the independently derived minimal
scale is `64 * 96 = 6144/1`. The primary origin hypothesis is `0/1,0/1`.

The low control is `0/1,0/1,3072/1` and fails analytically with minimum
runtime x gap `48`. The high control is `0/1,0/1,12288/1` and passes
analytically with minimum runtime x gap `192`; it is diagnostic only. T1 is
`160/1,160/1,6144/1`; T2 is `100/1,200/1,6144/1`.

## Probe results

Synthetic graphs only: CP1-SINGLE (N=1, no edges), CP3-PATH (N=3, edges
0-1 and 1-2), CP10-STAR (N=10, center 0 to 1..9), and CP65-PATH (N=65,
edges 0-1 through 63-64). All family probes passed: runtime coordinates
were finite and injective, exact substrates were retained, replay was exact,
and inputs were unchanged. N=65 runtime minimum x gap was `96`, so
`INITIAL-PAIRWISE-CLEARANCE-v1 = PASS`.

The accepted `VSR-SEED-ADAPTER-v1` consumed supplied coordinates without
regenerating the seed, fallback, or random state. Settling replay and
non-mutation passed for all probes. Maximum displacement diagnostics were
CP1 `0`, CP3 `76.36753236814714`, CP10 `76.36753236814714`, and CP65
`11.312989026477862`. Product clamp internals were not instrumented, so clamp
hit count is not observable.

Product routing, Relation-label, Node-label, and fit compatibility passed;
downstream replay and non-mutation passed. Manual route/label state was empty,
active drag was absent, and no browser dependency was used.

Exact translation results were V0 FAIL, V1 FAIL, route FAIL, Relation-label
FAIL, Node-label FAIL, and fitted-representation FAIL for both T1 and T2.
No tolerance was applied. Visual quality was not measured.

## Evidence boundaries and artifacts

Evidence class is `RUN-CONFIGURATION-COMPATIBILITY`; PR-3 stage evidence is
`0`. Candidate materializations, real PR-3 fixtures, TA0, TA2, TA3, B0, and
B1 execution are all zero. Browser, CDP, screenshot, human review, E-VISUAL,
ranking, selection, Product integration, and PR-3 are all NO. The
`PR3-RUNTIME-TRANSFORM-v1` remains **UNFROZEN**.

Canonical UTF-8/LF/final-newline/sorted-key artifacts in
`experimental/product-evaluation-seam/run-configuration-evidence1/artifacts/`:

| Artifact | SHA-256 |
| --- | --- |
| `source-audit.json` | `F80A2C358F02E302B45BB3B498EE5AF6DFF1D22C5C979DD82D380F681366B0EB` |
| `analytic-proof.json` | `9C3A44C66946F85F82787A4FF8806A1102F304B70628FAEE145A2CFB828C0526` |
| `family-probes.json` | `C8408CFD08DA13D0A6F782FF77C8322CF34A5DE296344FB8CC482E49BBC4D150` |
| `settling-probes.json` | `505D950A6B3B9AA11FFBB0DFA3645FE89FD5320DAB74AABB780A47DB0D36E10B` |
| `downstream-probes.json` | `054E92B33FA76B5BB227ABAE2BDC5E3DBACCB643FC45F16E8A1A9E6D1EA6C916` |
| `translation-probes.json` | `5A7270CC5869396B074035CFE669015D4E7D9B94528A32EDB5E4A9AEEDAC47D9` |
| `audit-results.json` | `03EFA20ABB98A50E1BFF9D6B5C53721B67F81426B3B8375C7F571EF1E4274896` |
| `artifact-index.json` | self-excluded from its own index |

Protocol bytes and probe implementation bytes match their recorded hashes
after the valid run. No push, tag, release, deploy, or publication occurred.

## Regression and protected state

In the valid restart clone, focused accepted tests passed: explicit-seed
adapter `10/10`; routing/labels `22/22`; render wrapper `13/13`; 1G isolation
`12/12`; auto-layout `10/10`; initial placement `7/7`. Full Product tests
passed `309/309`; lint, build, and `git diff --check` passed. Baseline-v2 is
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.

Live remains at `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` with only the two
pre-existing protected EN/JA sample modifications. Harness remains clean at
`9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`. The retained materializer
remains at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` with its pre-existing
untracked `experimental/` preserved. Baseline2 remains clean at
`324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`. `ai-knowledge` was not changed;
its pre-existing Edge/CDP playbook modification remains untouched.

Adoption1 is not started. The next checkpoint is NOT STARTED pending design
reconciliation of the exact translation-covariance requirement.
