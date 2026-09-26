# LiaisonScape Initial Placement Seed: Translation Covariance Design Reconciliation1

Date: 2026-09-03

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-TRANSLATION-COVARIANCE-DESIGN-RECONCILIATION1`

Status: complete; bounded read-only design reconciliation. No evidence run,
probe, Product change, Harness change, or transform adoption occurred.

## CASE / Decision

**CASE 1 / Decision A — EXACT NUMBER COVARIANCE WAS OVER-SPECIFIED FOR
TRANSFORM ADOPTION**

Strict arbitrary-origin JavaScript `Number` equality remains a valid failed
Evidence1 diagnostic, but it is not a future transform-adoption hard gate.
`PR3-CANONICAL-RUNTIME-ORIGIN-v1` is frozen prospectively as a canonical
no-added-translation policy:

```text
originX = 0/1
originY = 0/1
```

This policy does not claim that alternate origins are exactly equivalent. A
fresh, preregistered canonical-origin and branch-stability evidence checkpoint
is required before `PR3-RUNTIME-TRANSFORM-v1` can be adopted. The exact next
prerequisite is:

`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-CANONICAL-ORIGIN-EVIDENCE2`

It is not started by this checkpoint.

```text
DESIGN / READ-ONLY AUDIT ONLY
EVIDENCE1 CASE 4 / DECISION D PRESERVED
NO CANDIDATE EXECUTION
NO BROWSER / CDP / SCREENSHOT / REVIEW
NO TOLERANCE OR ULP EXPERIMENT
NO PRODUCT / HARNESS / MATERIALIZER / LIVE / BASELINE CHANGE
NO TRANSFORM ADOPTION
NO ADOPTION1
NO PR-3
```

## WHY and scope

Valid Evidence1 established the exact FP1 family, the candidate-independent
point-set property, Product clearance `96`, three settling iterations,
`RC-SPACING-v1`, and the minimal scale derivation `64 × 96 = 6144/1`. Its
family, explicit-seed settling, downstream routing/labels/fit, replay, and
non-mutation checks passed. Its preregistered exact translation covariance gate
failed, including:

```text
CP1-SINGLE / T1 / nodeLabel.probe-00.x
expected 3.4902433775699572e-15
received 0

CP10 V0 y
expected 1896.2962962962963
received 1896.296296296296
```

Evidence1 remains formally valid as `CASE 4 / Decision D — TRANSLATION
COVARIANCE FAILS`. This document does not reinterpret that result, add a
tolerance, or convert it to PASS. It determines only whether that strict
comparison was part of the previously accepted transform semantics and what a
safe prospective contract should require.

## Authorities

| Authority | Identity |
| --- | --- |
| e2r-spec starting HEAD | `813d35b2a8859ed147c56bcd22fb747f253c94f0` |
| Design1 | `04a7a24997d1f008e9dbb57aec4e6552b0d719d6` |
| Design1 Correction1 | `349f42e11a7d88d51dbdfb1eb4323247bb3dfb44` |
| Evidence1 semantic protocol | `ff28b5a4afce56aa4f5ac57181a1f33ebd35d20f` |
| Evidence1 executable preregistration | `68fde7f3600b152f9d88351829796f1115e65e28` |
| Evidence1 result | `9738ff477d3d216507d1fba562f45dd77aa72797` |
| Product | `563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf` |
| Harness | `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` |
| Retained materializer | `fd563340625fd3d88dc25baedc93c4f8fe69e5e7` |
| Baseline2 | `324193eda5924d2c5f5d0e0cad8a92b64d2ea6a8` |

The protocol provenance reconciliation remains authoritative for the
Evidence1 topology: Protocol A is the semantic authority, the pre-dynamic
import correction is the executable authority, and Evidence Commit B is the
result authority. No generated Evidence1 artifact was changed here.

## Requirement provenance matrix

“Evidence1-local” means that the requirement was explicitly used by the
Evidence1 protocol or its candidate-neutral compatibility scope; it does not
mean that Evidence1 executed every dimension named by the requirement.
“Still binding” means binding for the prospective transform-adoption contract,
while the historical Evidence1 result remains binding as recorded evidence.

| ID | First accepted source | Exact meaning | Hard requirement | Evidence1-local | Still binding | Why |
| --- | --- | --- | --- | --- | --- | --- |
| R1 | Run Configuration Design1, selected transform policy | One runtime transform must not depend on candidate identity or candidate quality. | YES | YES | YES | Candidate-neutral compatibility is required before any candidate matrix. |
| R2 | Run Configuration Design1, selected transform policy | The same transform configuration applies across fixture identities and roles. | YES | YES | YES | Per-fixture scale/origin tuning would invalidate cross-fixture provenance. Evidence1 did not execute real fixtures. |
| R3 | Run Configuration Design1, selected transform policy | Locale must not select or tune the numeric transform. | YES | YES | YES | Locale is a presentation input, not transform ownership. Evidence1 used synthetic non-locale probes. |
| R4 | Run Configuration Design1, selected transform policy; Harness artifact contract | Frozen inputs and configuration replay deterministically. | YES | YES | YES | Replay and immutable canonical artifacts are required; this is not arbitrary-origin equality. |
| R5 | Run Configuration Design1, selected transform policy | One predeclared global transform is used, with no per-cell selection. | YES | YES | YES | A single global choice is needed for comparable run lineage. |
| R6 | Run Configuration Design1, visual/run boundary | Transform choice must not be made by visual preference or candidate ranking. | YES | YES | YES | Evidence1 was candidate-neutral and did not perform visual acceptance. |
| R7 | Candidate Materialization Design1, “Exact-to-runtime arithmetic boundary” | `x_runtime = originX + scale*x_exact`, `y_runtime = originY + scale*y_exact`, with exact rational inputs and `scale > 0`. | YES | YES | YES | This is the accepted arithmetic boundary; it does not define a particular origin or raw-output covariance. |
| R8 | Evidence1 Protocol A, `transformRule.primary` and `translationControls` | The primary hypothesis used zero origin and compared translated controls as a test of origin neutrality. | NO before Evidence1 | YES | NO as arbitrary-origin adoption gate | Evidence1 introduced this hypothesis locally. The prospective policy preserves one canonical origin without requiring all origins to agree. |
| R9 | Evidence1 Protocol A, `gates.translation` and runner covariance procedure | Downstream outputs should commute with a tested translation after subtracting the translation. | NO before Evidence1 | YES | NO as adoption gate | It first appears as an Evidence1 compatibility gate, not in Design1 or Product semantics. |
| R10 | Evidence1 executable runner `compareTranslatedPoints`, strict `!==` comparison | Translated finite outputs must match normalized base outputs as raw JavaScript Numbers. | NO before Evidence1 | YES | NO | This is a local comparison representation, not a Product requirement. |
| R11 | Evidence1 Protocol A, “fitted representation covariance” gate | Fitted/centered downstream representation must be exactly identical under the translated-control normalization. | NO before Evidence1 | YES | NO | It is a downstream diagnostic gate; it is not required to choose one canonical transform. |

R1–R7 therefore remain hard prospective requirements. R8–R11 are not
retroactively erased: they remain the exact historical Evidence1 contract and
its result, but they do not bind the new adoption contract as arbitrary-origin
raw equality requirements.

## Provenance of translation covariance

The accepted Run Configuration Design1 deliberately left the numeric
`PR3-RUNTIME-TRANSFORM-v1` open. It required a candidate-neutral, fixture-
neutral, locale-neutral, deterministic, predeclared, immutable, positive
uniform affine transform, but it did not require alternate origins to produce
identical downstream Numbers. The Candidate Materialization Design1 likewise
requires a caller-supplied transform and exact rational substrate, while
explicitly declining to define a LiaisonScape pixel origin or scale.

Evidence1 then selected a primary zero-origin hypothesis under `RC-SPACING-v1`
and added T1/T2 translation controls. Its exact covariance gate was introduced
to support the stronger reasoning that the zero-origin representative was
origin-neutral. That reasoning conflated two distinct claims:

1. **Canonical origin choice:** choose one deterministic, source-independent,
   no-added-translation representative for the run.
2. **Arbitrary translation equivalence:** every alternate origin must produce
   the same normalized downstream representation, including raw Number values.

The first does not logically require the second. A single canonical origin can
be fixed by policy and then tested directly for Product compatibility. Product
source has no accepted contract saying that `(a + t) - t` must equal `a` in raw
IEEE-754/JavaScript Number evaluation, nor that all translated route, label,
fit, or settling computations must be bit-identical. The new design therefore
does not claim alternate-origin equivalence.

## Floating-point classification

The known mismatches are classified **F-C — finite floating representation
difference only**, as far as the existing artifacts and source support.
Translation normalization performs operations equivalent in effect to
`(a + t) - t`, while Product downstream functions perform additional
`Math.hypot`, trigonometric, subtraction, division, and min/max operations.
Those evaluation paths can yield a finite rounding difference even when the
underlying real geometry is translation-equivalent.

| Observation | Classification | Supported conclusion | Not established |
| --- | --- | --- | --- |
| CP1 T1 node-label x, `3.4902433775699572e-15` vs `0` | F-C | A finite normalized-output rounding difference is present; source contains translated-coordinate arithmetic and label geometry arithmetic capable of such a difference. | No visual equivalence, semantic geometry equality, or branch equality is inferred. |
| CP10 T1/T2 V0 y, `1896.2962962962963` vs `1896.296296296296` | F-C | The difference is a finite last-representable-value drift consistent with translated arithmetic and different Number evaluation paths. | No claim that later operations cannot cross a threshold. |

No semantic geometry difference (F-A) or branch/control-flow difference (F-B)
was proven by Evidence1. A branch difference remains a future risk category,
not an observed result. F-D is retained only for any uninstrumented causal
detail; it is not needed to classify the observed finite mismatches as a raw
representation failure. No epsilon, ULP bound, or visual tolerance is added.

## TRANSLATION-BRANCH-RISK-INVENTORY-v1

This is a static inventory. No branch was executed by this checkpoint.

| ID | Product file/function | Compared quantity / branch | Real-arithmetic translation invariant? | Float sensitivity possible? | Evidence1 exercised? | Existing branch-stability proof? | Future evidence needed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BR1 | `src/auto-layout.ts` / `settleLayoutPositions` | `Math.hypot(deltaX, deltaY) < clearance`; repulsion decision | YES | YES | YES, explicit-seed settling | Initial clearance was analytically proven for the chosen spacing; settling decision trace was not proven. | BS4 and BS5 |
| BR2 | `src/auto-layout.ts` / `settleLayoutPositions` | `Math.max(-18, Math.min(18, dx/dy))`; movement clamp | YES for displacement differences | YES | YES, settling output; clamp hit count unavailable | NO | BS5 |
| BR3 | `src/viewport.ts` / route obstacle checks | `Math.hypot(...) < 60`, path/obstacle and near-distance thresholds | YES | YES | YES, downstream route probes | Output replay passed; alternate-origin branch stability was not proven. | BS6 |
| BR4 | `src/graph-presentation.ts` and `src/viewport.ts` / route selection | route priority, overlap case, candidate score and `score < bestScore` | YES where based on translated geometry | YES | YES, downstream route probes | No branch trace or alternate-origin decision proof | BS6 and BS9 |
| BR5 | `src/viewport.ts` / `placeEdgeLabel`, `placeNodeLabel` | label overlap, clearance/halo thresholds, candidate score reduction | YES where based on translated geometry | YES | YES, route/label probes | Exact output replay only; no branch-stability proof | BS7 and BS9 |
| BR6 | `src/viewport.ts` / `fitGraphView`, `clampScale` | min/max bounds, padding, scale clamp and centered transform | YES for translated extents before fitting | YES at boundaries | YES, fit probes | Fit output replay only; no boundary proof | BS8 |
| BR7 | `src/viewport.ts` / attachment and self-loop geometry | `<= ... + 1e-9`, discriminant, `chordLength`, self-loop `1e-12` tie tests | YES in real geometry | YES | YES, downstream geometry paths | No alternate-origin branch proof | BS6–BS8 |
| BR8 | `src/auto-layout.ts`, `src/graph-presentation.ts` / canonical ordering | ID/locale ordering, degree and canonical side selection | Not a numeric geometry comparison | NO direct float sensitivity | YES by static source and synthetic replay | Canonical ID ordering is established; no new numeric claim needed | BS9, to confirm one chosen transform does not alter identity mapping |

The inventory distinguishes direct numeric threshold risk from canonical
string/ID ordering. Existing Evidence1 shows deterministic outputs and
non-mutation, but it does not prove that every translation would preserve every
Product branch. The future contract therefore requires stability at the one
canonical origin, without requiring alternate-origin execution.

## Option assessment

### TC-A — keep strict Number covariance

TC-A is not required by Product semantics or the accepted Design1 contract.
Under current JavaScript Number arithmetic it is not a realistic general
adoption condition for all downstream translated values: finite real
translation equivalence does not guarantee bit-identical results after
addition, subtraction, square roots, trigonometry, fitting, and score ties.
Satisfying it as a semantic invariant would require a Product arithmetic or
comparison redesign, such as origin-relative internal computation or another
exact/numeric substrate. That change is not authorized here.

TC-A protects the strongest possible raw replay identity across alternate
origins, which is useful as a diagnostic. It also over-constrains transform
adoption and does not itself explain which Product branch decisions are
semantically required. Result: **rejected as the future adoption gate;
retained as the historical Evidence1 diagnostic.**

### TC-B — canonical origin, no translation-equivalence gate

TC-B is supported by the provenance audit. It preserves the original Design1
requirements for one deterministic global transform, prevents per-candidate,
per-fixture, per-locale, or visual tuning, and avoids inventing a Product
coordinate policy. Zero is the only proposed origin because FP1 has canonical
`P0=(0,0)` and zero adds no translation policy; this is a policy choice, not a
claim that other origins are equivalent.

The one chosen origin must still pass direct finite/distinct compatibility,
deterministic replay, no mutation, and Product branch-stability evidence. TC-B
is **selected prospectively**.

### TC-C — explicit numeric equivalence contract

TC-C is **DESIGN-BLOCKED**. ULP, relative, absolute-plus-relative,
operation-derived, and canonical-float representations were considered
conceptually, but no already-accepted arithmetic model or Product contract
provides a principled bound before future results are collected. Observed
mismatch magnitudes cannot supply that bound. No numeric equivalence relation
is frozen.

### TC-D — exact substrate / semantic-layer covariance

TC-D is selected with TC-B. Exact rational FP1 coordinates, exact rational
transform inputs, source identities, canonical serialization, and Node-ID
mappings remain exact-contract surfaces. Downstream Product Number geometry is
handled by deterministic replay, finite/distinct checks, direct compatibility,
and branch-stability evidence. This cleanly separates candidate semantics from
the floating Product layout/rendering machinery without declaring the latter
bit-exact under arbitrary translations.

### TC-E — Product arithmetic change

TC-E is not started and is not authorized. It is only the conceptual answer to
what would be needed if TC-A were retained as a mandatory semantic invariant:
the Product would need an origin-relative or otherwise specified arithmetic
seam, followed by a separate design and implementation authorization. No such
change is needed for the selected TC-B + TC-D design.

### TC-F — other source-supported option

No additional source-supported option was found. **N/A.**

## C1–C6 distinction and selected design

| Claim | Required by PR-3 transform adoption? | Interpretation |
| --- | --- | --- |
| C1 chosen transform is deterministic | YES | Frozen inputs/configuration must replay deterministically. |
| C2 chosen transform uses one global origin | YES | No cell-specific or candidate-specific origin. |
| C3 chosen origin is canonical by policy | YES | `PR3-CANONICAL-RUNTIME-ORIGIN-v1` supplies this rule. |
| C4 alternate origins are equivalent in real arithmetic | NO | Useful mathematical diagnostic, not needed to choose one policy. |
| C5 alternate origins produce exact-identical JavaScript Numbers | NO | Not a Product or Design1 invariant; Evidence1 tested it and failed. |
| C6 alternate origins cannot change any Product branch | NO | Universal alternate-origin branch equivalence is not required; chosen-origin branch stability is required. |

The selected design is **TC-B + TC-D**. It freezes the canonical-origin rule,
not the numeric runtime transform. It explicitly does not claim translation
equivalence, visual equivalence, or Product coordinate ownership.

## PR3-CANONICAL-RUNTIME-ORIGIN-v1

Frozen prospectively as a design rule: **YES**.

```text
originX = 0/1
originY = 0/1
```

Semantics:

- canonical configuration rule and no-added-translation representative;
- same for every candidate, fixture, and locale;
- fixed before candidate execution;
- no visual tuning and no candidate ranking;
- not a Product coordinate policy;
- not candidate semantics;
- not a statement that alternate origins are equivalent;
- changing it creates a new semantic run lineage.

`PR3-RUNTIME-TRANSFORM-v1` remains **UNFROZEN**. The scale is not adopted by
this rule.

## Scale status

Evidence1's `RC-SPACING-v1` remains valid evidence. At `Nmax=65`, the minimum
normalized adjacent x gap is `1/64`, Product clearance is `96`, and the exact
minimal compatible scale derivation is:

```text
64 × 96 = 6144/1
```

Status: `SCALE-COMPATIBILITY-EVIDENCED`.

The low control `3072/1` remains analytically inadmissible and the high control
`12288/1` remains diagnostic-only. Scale `6144/1` is **not adopted** as
`PR3-RUNTIME-TRANSFORM-v1` by this checkpoint.

## Future canonical-origin / branch-stability evidence

Fresh preregistered evidence is required: **YES**. The exact next checkpoint is
the not-started Evidence2 named above. It must use the one proposed canonical
zero-origin configuration and must not compare candidate quality or require
arbitrary translated-origin equality. Its bounded evidence classes are:

| Class | Required question |
| --- | --- |
| BS1 | Exact substrate to Number conversion is finite and injective on the bounded domain. |
| BS2 | Identical frozen inputs replay deterministically. |
| BS3 | Inputs and Dataset state are not mutated. |
| BS4 | Initial clearance condition is analytically proven for the chosen scale/origin. |
| BS5 | Settling branch decisions/traces are stable where observable without Product modification. |
| BS6 | Routing case selection and geometric tie/threshold decisions are stable. |
| BS7 | Label side/candidate decisions are stable. |
| BS8 | Fit and clamp decisions are stable, including boundary cases in the declared domain. |
| BS9 | The same chosen transform applies across all synthetic probe inputs and produces the same identity mapping. |
| BS10 | No alternate-origin comparison is required for acceptance; it may remain diagnostic only. |

No Product instrumentation is frozen by this document. If a branch decision is
not observable through existing pure seams, that limitation must be recorded;
it cannot be silently replaced with a new Product implementation.

## Evidence reuse and safety

Existing Evidence1 observations are retained as **diagnostic/supporting prior
evidence**, not acceptance evidence under the changed contract. The contract
is being designed after the results were observed, and no accepted rule permits
retroactive reclassification. Therefore fresh preregistered Evidence2 is
required. No threshold is derived from the observed `3.49e-15` or CP10
difference, and no post-hoc numeric tolerance or ULP rule is introduced.

Evidence1 formal provenance remains **VALID**. Its substantive result remains
**CASE 4 / Decision D — TRANSLATION COVARIANCE FAILS**. Its transform
recommendation remains **NO** under its own protocol. This prospective design
does not alter that historical record.

## Adoption and execution boundary

| Item | Status |
| --- | --- |
| `PR3-RUNTIME-TRANSFORM-v1` | UNFROZEN |
| `RUN-CONFIGURATION-ADOPTION1` | INELIGIBLE |
| Candidate execution added | 0 |
| Real fixture execution added | 0 |
| B0/B1 execution | 0 |
| Browser / CDP | NO |
| Screenshot | NO |
| Human review | NO |
| `E-VISUAL` | NO |
| Candidate ranking | NO |
| Candidate selection | NO |
| Product integration | NO |
| `PR-3` | NO |

No Product, Harness, materializer, Live, Evidence clone, or baseline change was
made. No push, tag, release, deploy, or publication occurred.

## Knowledge Candidate assessment

No new `ai-knowledge` entry is needed. The distinction between exact
floating-point identity and semantic/deterministic evidence is recorded here
as a repository-local rule for this specific LiaisonScape evidence contract;
it is not yet a reusable cross-workspace process rule. The pre-existing dirty
Edge/CDP playbook remains untouched.

## Result and next action

The provenance audit supports TC-B + TC-D. The canonical zero-origin rule is
frozen prospectively, exact raw Number covariance remains a historical failed
diagnostic rather than a future adoption gate, scale evidence is preserved,
and `PR3-RUNTIME-TRANSFORM-v1` remains unfrozen. The next checkpoint is
`...CANONICAL-ORIGIN-EVIDENCE2`, **NOT STARTED**. Stop after this design
reconciliation; do not start Evidence2 or Adoption1 here.
