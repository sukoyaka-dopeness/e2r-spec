# LiaisonScape Evidence1 Protocol Provenance Reconciliation1

Date: 2026-09-03

Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-EVIDENCE1-PROTOCOL-PROVENANCE-RECONCILIATION1`

Status: complete; provenance reconciled. No new compatibility probe or other
evidence execution occurred in this checkpoint.

## CASE / Decision

**CASE 2 / Decision B — PRE-DYNAMIC EXECUTABLE CORRECTION, SEMANTICS UNCHANGED**

The commit topology is confirmed. `protocol.json` is byte-identical at
Protocol A, the pre-dynamic correction, and Evidence B. The executable probe
runner is not byte-identical because the pre-dynamic correction fixes only
module import paths. The complete A→P diff proves that no transform/config
value, synthetic input, gate, comparison rule, canonicalization rule, or CASE
interpretation changed. No dynamic result existed in the clean restart before
the correction, and P→B changes only generated artifacts.

Therefore the Evidence1 substantive result remains formally valid:
**CASE 4 / Decision D — TRANSLATION COVARIANCE FAILS**. The earlier wording
that the probe implementation was “unchanged since Protocol Commit A” is
corrected additively. The semantic protocol authority is Protocol A; the
executable preregistration authority for the valid run is `68fde7f`.

The exact next prerequisite remains the not-started
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-RUN-CONFIGURATION-TRANSLATION-COVARIANCE-DESIGN-RECONCILIATION1`.

## Authorities and topology

Evidence clone:
`C:\Users\extra\E2R\e2r-liaison-scape-visual-evidence-run-configuration-evidence1-exact-restart1`

| Commit | Parent | Subject |
| --- | --- | --- |
| `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` | `36650462f7f2def95478098a01cb345b9c89cfa1` | `test: tighten visual review packet contract` |
| `ff28b5a4afce56aa4f5ac57181a1f33ebd35d20f` | `9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc` | `test: preregister LiaisonScape runtime transform probes` |
| `68fde7f3600b152f9d88351829796f1115e65e28` | `ff28b5a4afce56aa4f5ac57181a1f33ebd35d20f` | `test: correct clean Evidence1 preflight` |
| `9738ff477d3d216507d1fba562f45dd77aa72797` | `68fde7f3600b152f9d88351829796f1115e65e28` | `test: record exact Evidence1 covariance result` |

Protocol A is the semantic protocol authority. The executable correction is
`68fde7f`; Evidence B is `9738ff4`. Product authority is
`563d5bc3ce8d3a915c75dd13b33188ae6f7fccaf`; Harness authority is
`9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`.

## A→P diff classification

Changed paths:

- `protocol/correction-restart1.json`: one additive provenance/preflight
  record, P0 nonsemantic metadata.
- `protocol/source-audit.json`: the probe-runner SHA changed, P1 audit
  bookkeeping only.
- `src/run-probes.mjs`: two import path corrections, P1 preflight/import
  wiring only.

P0 count is 1, P1 count is 2, P2 count is 0, P3 count is 0, and P4 count is
0. The runner hunk changes only the materializer and Product source import
locations so the already-defined runner can resolve its authorities. Its
constants, family formula, synthetic graph inventory, settling invocation,
downstream calls, exact covariance comparator, canonicalization, and result
interpretation are unchanged.

## Exact evidence-producing file hashes

Every evidence-producing file present at Protocol A is listed below. The
analytic, family, settling, downstream, translation, and artifact-index
implementations are all contained in the single probe runner; no separate
implementation files existed at A.

| Path | SHA-256 @ A | SHA-256 @ P | SHA-256 @ B | A→P changed | P→B changed | Classification / semantic effect |
| --- | --- | --- | --- | --- | --- | --- |
| `experimental/product-evaluation-seam/run-configuration-evidence1/protocol/protocol.json` | `CA0AA36E058B88F620EBA199B15333320E3D091508A27768CDDADFD21CA39499` | `CA0AA36E058B88F620EBA199B15333320E3D091508A27768CDDADFD21CA39499` | `CA0AA36E058B88F620EBA199B15333320E3D091508A27768CDDADFD21CA39499` | NO | NO | protocol document; unchanged |
| `experimental/product-evaluation-seam/run-configuration-evidence1/protocol/source-audit.json` | `A78C93FF83579B31F9A61681F8F39CC1B1FE7700A5892EAE1E35E6D3F33BAC8B` | `BEC652E7AD0DA5BC054D1E633FCA8CF256DD8A983842AD7611FDEE9FB181B62B` | `BEC652E7AD0DA5BC054D1E633FCA8CF256DD8A983842AD7611FDEE9FB181B62B` | YES | NO | P1 hash bookkeeping for corrected runner |
| `experimental/product-evaluation-seam/run-configuration-evidence1/src/run-probes.mjs` | `96FD1FD1104E225742A73777B04287704B2C1880D44E4B68D80FE26FA620DB67` | `83C27C7758D99764A1D8BA4AC825C0EB2498E93FA02F4901D88CB221E271A6E2` | `83C27C7758D99764A1D8BA4AC825C0EB2498E93FA02F4901D88CB221E271A6E2` | YES | NO | P1 import wiring only; evidence semantics unchanged |

Thus the classification is **PI-B**, not PI-A: executable bytes changed A→P,
but only by P1 import/preflight wiring. The exact executable probe authority
is `68fde7f3600b152f9d88351829796f1115e65e28`; the exact semantic protocol
authority is `ff28b5a4afce56aa4f5ac57181a1f33ebd35d20f`.

## Protocol and execution boundary

`protocol.json` has exact byte hash
`CA0AA36E058B88F620EBA199B15333320E3D091508A27768CDDADFD21CA39499` at A, P,
and B: `PROTOCOL-DOCUMENT-INTEGRITY = PASS`.

The A and P commit trees contain protocol/source files but no generated
`artifacts/` tree. The first committed result files appear in B, whose parent
is P and whose changed paths are exactly the eight generated JSON artifacts:
`analytic-proof.json`, `artifact-index.json`, `audit-results.json`,
`downstream-probes.json`, `family-probes.json`, `settling-probes.json`,
`source-audit.json`, and `translation-probes.json`. The clean restart’s
additive correction record also states that dynamic execution had not started
before P. Therefore dynamic result before `68fde7f` is **NO**.

P→B source stability is PASS: no protocol, source-audit, runner, test, gate,
or other evidence-producing implementation changed after P. The transform
values, RC-SPACING rule, synthetic probe inventory, exact covariance rule,
gates, CASE mapping, and evidence canonicalization all changed A→P **NO**.

The original claim “probe implementation bytes unchanged since Protocol A” is
**CORRECTED**, not retained literally. The corrected provenance statement is:

> The semantic protocol was frozen at `ff28b5a`. A pre-dynamic executable
> preflight/import correction was committed at `68fde7f` before any valid
> compatibility result was collected. Evidence-producing semantics, inputs,
> gates, transform hypotheses, exact comparison rule, synthetic probe
> inventory, and CASE interpretation were unchanged by that correction. The
> executable probe authority for the valid run is therefore `68fde7f`.

## Substantive result retained

Evidence1 remains valid and its CASE 4 / Decision D result is retained. No
new probes were run here and no tolerance or translation-covariance design was
introduced. The transform recommendation remains **NO**;
`PR3-RUNTIME-TRANSFORM-v1` remains **UNFROZEN**; Adoption1 remains ineligible.
Candidate execution, real fixture execution, B0/B1, browser, screenshot,
human review, E-VISUAL, ranking, selection, Product integration, and PR-3 are
all **NO/0**.

No Product, Harness, materializer, Live, or baseline change was made. The
pre-existing Live EN/JA sample dirt and ai-knowledge Edge/CDP playbook dirt
remain preserved. No push, tag, release, deploy, or publication occurred.

The exact next prerequisite is the translation-covariance design
reconciliation above, and it is **NOT STARTED**. Do not start it as part of
this reconciliation.
