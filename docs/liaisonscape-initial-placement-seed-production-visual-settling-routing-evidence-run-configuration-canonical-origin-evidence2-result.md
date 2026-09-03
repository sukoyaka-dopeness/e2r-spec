# LiaisonScape canonical-origin Evidence2 result

Date: 2026-09-03

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-CANONICAL-ORIGIN-EVIDENCE2`

## Status and decision

**CASE 1 / Decision A — TRANSFORM-ADOPTION-RECOMMENDED.** Fresh
candidate-neutral Evidence2 supports the one full transform under test:

```text
originX = 0/1
originY = 0/1
scale   = 6144/1
```

`RUN-CONFIGURATION-ADOPTION1 = ELIGIBLE`. This result recommends the
transform for the separate Adoption1 checkpoint only; it does not execute or
adopt Adoption1. `PR3-RUNTIME-TRANSFORM-v1` remains **UNFROZEN**.

The accepted Design Reconciliation1 authority is e2r-spec commit
`764d7e90a10a5e28bbaf501a53d24eaf1189ab7e`. Evidence1 remains historical,
diagnostic/supporting prior evidence with CASE 4 / Decision D: exact
translation covariance failed. Its formal provenance remains valid and was
not reused as Evidence2 acceptance evidence.

## Authorities and execution lineage

The Product authority was LiaisonScape commit
`563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`. The fresh disposable Evidence2
clone was created from Harness authority
`9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`, initially clean, at:

`C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-run-configuration-canonical-origin-evidence2`

The retained materializer authority was
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. Baseline2 authority was
`324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`.

The first preregistration commit was `1c6536c` but its runner failed before
probe execution because of an import-path defect. Replacement preregistration
`26c94e6` corrected that path; its first dynamic attempt reached the probes but
failed before artifact writing because the geometry boundary supplied
`width/height` instead of Product's `halfWidth/halfHeight`. That attempt was
invalidated. Replacement preregistration `91d6cea340a717b11806b0563aeb43f861badf1c`
was then syntax-checked and committed before the valid run. The valid run began
only after `91d6cea`; no protocol, executable, Product source, test, or gate
file changed during or after that valid execution. The valid Evidence Commit B
is `ecad472c48b12e4fccb0d71f2edd44ec2e13f55c`.

Protocol and executable authority are therefore the same valid preregistration
commit, `91d6cea`. The Evidence2 surface is
`experimental/product-evaluation-seam/run-configuration-canonical-origin-evidence2/`
with `protocol/`, `src/`, and `artifacts/`; Product and Harness source were not
modified.

## Frozen protocol and source audit

Protocol ID is `CANONICAL-ORIGIN-EVIDENCE2-v1`; evidence class is
`RUN-CONFIGURATION-CANONICAL-ORIGIN`. The transform is
`E2-PRIMARY-TRANSFORM-v1`, under test only, sourced from
`PR3-CANONICAL-RUNTIME-ORIGIN-v1` for origin and
`RC-SPACING-v1 / SCALE-COMPATIBILITY-EVIDENCED` for scale. No alternate
origin, alternate scale, tolerance, epsilon, ULP acceptance window, visual
criterion, candidate registry, or real fixture was used.

The FP1 source hash is
`DFE9358CC8DFD3FF5E6EED45B5E801E705F973F5C8CBB8AE587C1ACD8BCA6CF8`.
`FP1_MAX_N = 65`, with `N=1: P0=(0,0)` and, for `N>1`,
`m=N-1; x_i=i/m; y_i=i^2/m^2; i=0..m`. Product source hashes are:

| Source | SHA-256 |
| --- | --- |
| `src/auto-layout.ts` | `2F53394607E169D377723215A92171F5B4A82212D8F6352A7C96EFA73FC9C6D8` |
| `src/viewport.ts` | `53168CEFA585AFD6C850BD859943AF66E035765AAA552E079B73005177E93D3F` |
| `src/graph-presentation.ts` | `D91F9752C67B17A45B644354BD593BD8CBE0549AE6E03ECEA0799E3E9DA00853` |

The materializer source hash is
`850E9F9D8F6624DD9BF4B3ABC6DC6DC143037F8BDA0AE357F3C8924E502E8CF4`.
Product constants audited before Protocol A were clearance `96`, settling
iterations `3`, movement clamp `18`, route Node influence radius `60`, fit
logical size `800x500` with padding `96`, attachment boundary epsilon `1e-9`,
self-loop tie epsilon `1e-12`, and the existing route geometry comparison
constant `1e-6`. The latter Product constants were recorded as source facts;
Evidence2 introduced no tolerance or epsilon acceptance rule.

## Synthetic evidence

Only deterministic neutral synthetic graphs were used:

| Probe | Nodes | Topology | Result |
| --- | ---: | --- | --- |
| `CP1-SINGLE` | 1 | no edges | PASS |
| `CP2-PAIR` | 2 | one edge | PASS |
| `CP3-PATH` | 3 | path | PASS |
| `CP10-STAR` | 10 | center plus nine leaves | PASS |
| `CP10-CYCLE` | 10 | cycle | PASS |
| `CP16-TWO-COMPONENT` | 16 | two deterministic path components | PASS |
| `CP65-PATH` | 65 | path | PASS |
| `CP-BRANCH-BOUNDARIES` | 8 | parallel, self, and obstacle-pressure synthetic graph | PASS |

All family rows retained the exact rational substrate, produced finite and
injective runtime coordinates, preserved exact Node count, replayed exactly,
left input unchanged, performed no implicit fit, and used no fallback. The
initial exact minimum x gap is `1/64`; with scale `6144/1`, runtime minimum x
gap is `96`. Since absolute x separation alone is at least `96`, every pair's
Euclidean distance is at least Product clearance `96`.

`INITIAL-PAIRWISE-CLEARANCE-v2 = PASS` is therefore an analytical result, not
a tolerance-based runtime result. The independent clearance boundary probes
used Product-derived distances `95`, `96`, and `97`; all explicit-seed calls
completed, and the exact-at-threshold call remained unchanged, consistent with
the Product `< 96` branch. Route Node-influence probes used `59`, `60`, and
`61`; Product returned `true`, `false`, and `false`, respectively. Self-loop
and rounded-rectangle attachment probes were finite with 41 self-loop samples.

The accepted explicit-seed adapter supplied the canonical positions and exactly
three settling iterations. No seed was regenerated and no fallback was used.
Every probe had finite, injective settled output, exact replay, and unchanged
input. Maximum displacement diagnostics were:

| Probe | Maximum displacement |
| --- | ---: |
| `CP1-SINGLE` | `0` |
| `CP2-PAIR` | `76.36753236814714` |
| `CP3-PATH` | `76.36753236814714` |
| `CP10-STAR` | `76.36753236814714` |
| `CP10-CYCLE` | `76.36753236814714` |
| `CP16-TWO-COMPONENT` | `47.20916724770585` |
| `CP65-PATH` | `11.312989026477862` |
| `CP-BRANCH-BOUNDARIES` | `71.27442248445475` |

## Branch accounting and downstream contracts

The eight frozen branch-risk classes were all accounted for:

| Class | Observability | Terminal status | Branch identity proven |
| --- | --- | --- | --- |
| BR1 settling pairwise clearance / repulsion | O-C | `STATICALLY-PROVEN` | NO; analytical clearance proof used |
| BR2 settling movement clamp | O-D | `OUTPUT-STABLE-BRANCH-UNOBSERVED` | NO |
| BR3 routing obstacle / near-distance threshold | O-B | `OUTPUT-STABLE-BRANCH-UNOBSERVED` | NO |
| BR4 routing candidate / score / overlap | O-A | `OUTPUT-STABLE-BRANCH-UNOBSERVED` | NO |
| BR5 label overlap / halo / side / candidate | O-D | `OUTPUT-STABLE-BRANCH-UNOBSERVED` | NO |
| BR6 fit / bounds / scale clamp / centered transform | O-B | `OUTPUT-STABLE-BRANCH-UNOBSERVED` | NO |
| BR7 attachment / self-loop / numeric ties | O-D | `OUTPUT-STABLE-BRANCH-UNOBSERVED` | NO |
| BR8 canonical ordering / identity mapping | O-C | `STATICALLY-PROVEN` | YES |

Observability counts are O-A `1`, O-B `2`, O-C `2`, O-D `3`; blocking O-D
count is `0`. O-D means no internal branch identity claim was made. Exact
identical-input replay, finite output, source-frozen constants, and the
stronger analytical/static properties were sufficient for this chosen-origin
contract.

Routing, Relation-label, Node-label, and fit contracts were recorded
separately. For each subsystem, output was finite, deterministic under exact
replay, and input unchanged. Routing exposed existing Product route outputs
including `parallelSolverEligible`, but no internal score-branch identity was
claimed. Label and fit internal branch identity was not claimed. Boundary case
count was routing `3`, and label/fit boundary counts were `0`; first failure was
`NONE` for every subsystem.

`GLOBAL-TRANSFORM-CONSISTENCY-v1 = PASS`: every dynamic probe carries exactly
`0/1`, `0/1`, `6144/1`, with one transform fingerprint
`102F16DCEF44096686B67B34BDF385A5E71DDDC085183F0B9BA65F9785C34786` and zero
alternate-transform runs. `ALTERNATE-ORIGIN-EXECUTION = 0`.

## Gate summary

BS1 through BS10 all PASS. E2-H1 through E2-H22 all PASS. In particular,
authority identity, preregistration ordering, exact canonical origin and scale,
substrate/runtime integrity, clearance proof, replay, no mutation, explicit
seed compatibility, routing/labels/fit compatibility, global transform
consistency, zero candidate/fixture/alternate-origin execution, no visual
criterion, complete branch accounting, and zero unresolved required O-D
property all pass.

No candidate execution occurred: TA0, TA2-DEG, TA2-MOTIF, and TA3-FWD/REV are
all `0`. No real PR-3 fixture, V0/V1/V2/V3 PR-3 evidence, B0/B1 diagnostic,
browser, CDP, screenshot, human review, visual acceptance, ranking, winner,
candidate selection, Product integration, Adoption1 execution, or PR-3 claim
occurred.

## Canonical artifacts

Evidence Commit B contains only the 13 generated JSON artifacts below. They
use UTF-8, LF, final newline, deterministic sorted keys, and exact SHA-256
bytes:

| Artifact | Bytes | SHA-256 |
| --- | ---: | --- |
| `run-config.json` | 578 | `B0B1D092C29B627E7EFAFCDF97BC2147DC465C42AF4920F32D96FE399F1033CB` |
| `source-audit.json` | 1560 | `44019911DE8B520EA2D80FB11328F89D26ABE44B1C8554840AA8446A43CEABD8` |
| `analytic-proof.json` | 1761 | `B592028657DDA28D34731081DBE41498F0A0C636156CA0381511AA371D6A9DA1` |
| `branch-observability.json` | 2532 | `1BD9D5B7DC350DD4F08FFE3B6C7F2304D6F9C0330C6AF06760F9C0FF44A6EB58` |
| `branch-risk-results.json` | 2402 | `87DE2E2FE95FDE0C3D9A4BCC546087043A39B4A2EF70D3BC4FB567218E0A8FD8` |
| `family-probes.json` | 2908 | `ED7C3C39DDD75AADC5B5E91499F871C5CF278FC9BCD9F713EE641D5B486AFD00` |
| `settling-probes.json` | 26459 | `CFCD8F76B584FCFF575FDA66AF51C51F2E45944C4312EBC2F40445516A210EBC` |
| `routing-probes.json` | 511119 | `27DDA9DFC0D2E4C82A562D98AA7264EC0309BB4BA4443ECFA683FD01F3E6A6D6` |
| `label-probes.json` | 52159 | `88783455EA08F7FA380EB12E737506920463448DF505F4B76AE8EC53048694B9` |
| `fit-probes.json` | 2432 | `0DF7EDBDF1D15FA060FA066ED77468EC0DD309E3BFC76C9B4B5624A29BA65F7C` |
| `global-transform-audit.json` | 331 | `F2D607DDD1A421E839755FC0C25BC4BB4380CC4C572E3000F96DAA4BFED98593` |
| `audit-results.json` | 671727 | `4F4C3426A61DE0A9C9D4A38157075C0961B4F58EE8309B9C02C8D99F37EA74D9` |
| `artifact-index.json` | 2081 | `9FA0313F909584F3C232660E9E0CA7AEB904ABB761330AC7094BA1EF0C61674D` |

Protocol integrity is PASS: Protocol/Executable Commit A bytes are unchanged
between valid dynamic execution and Evidence Commit B, and A-to-B differs only
by generated artifacts. The clone is final clean at `ecad472`.

## Regression and non-drift checks

The Evidence2 clone's focused imported-seam regression was `188/188 PASS`:
explicit-seed adapter, routing, labels, render wrapper, 1G/Harness isolation,
auto-layout, and initial placement. Full Product tests were `309/309 PASS`.
`npm.cmd run lint`, `npm.cmd run build`, and `git diff --check` all PASS. The
build emitted only the normal Vite output; no tracked source changed.

Baseline-v2 SHA remains
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.

At completion, Product remained at
`563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` with only the pre-existing dirty
EN/JA protected sample files. Original Harness remained clean at
`9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`. The retained materializer
remained at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` with its pre-existing
untracked `experimental/` state, and baseline2 remained clean at
`324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8`. `ai-knowledge` was unchanged;
Evidence2 is a repository-local evidence procedure and creates no new
Knowledge Candidate.

## Next step

The exact next prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-ADOPTION1`.
The next checkpoint is **NOT STARTED**. This checkpoint stops here. No push,
tag, release, deploy, or publication occurred.
