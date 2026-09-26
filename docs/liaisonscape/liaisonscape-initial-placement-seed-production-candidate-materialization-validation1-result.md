# LiaisonScape Initial-placement Seed Production-candidate Materialization Validation1

## Checkpoint

- Checkpoint: `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-CANDIDATE-MATERIALIZATION-VALIDATION1`
- Date: 2026-09-03 JST
- Status: Complete; bounded MAT-C3 runtime/nonvisual materialization evidence established
- Implementation authority: `6354ec1c7534f51ec1482ea7172cfe32343315e3`
- Retained clone HEAD: `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`

## Mandatory boundary

```text
MATERIALIZATION VALIDATION ONLY
MAT-C2 INPUT EVIDENCE UNDER VALIDATION
MAT-C3 BOUNDED RUNTIME/NONVISUAL EVIDENCE ONLY
NO PRODUCTION REPLACEMENT
NO PRODUCTION CANDIDATE SELECTED
NO PRODUCTION INTEGRATION
NO VISUAL ACCEPTANCE
NO SETTLING ACCEPTANCE
NO ROUTING/LABEL ACCEPTANCE
NO STRUCTURAL OBJECTIVE RERUN
NO PR-2 BY ASSUMPTION
NO CLAIM THAT INITIAL PLACEMENT IS SOLVED
```

## Why

Implementation1 created the frozen M2 disposable harness and M1 pure
materialization core, but established only MAT-C2. This checkpoint reruns the
retained surface and audits source identity, deterministic canonical output,
supported-runtime execution, boundary/failure attribution, provenance,
artifact regeneration, and Production isolation. It does not evaluate
candidate quality or promote any readiness state by implication.

**Bingo!** The bounded materialization evidence seam is reproducible and
remains isolated from the live Production path.

## Authorities and protected state

The canonical specification repository is
`C:\Users\extra\E2R\e2r-spec`. The Production LiaisonScape repository is
`C:\Users\extra\E2R\e2r-liaison-scape`. The retained disposable clone is
`C:\Users\extra\E2R\e2r-liaison-scape-production-candidate-materialization-implementation1`.

The clone was detached at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`; its
only working-tree change is the retained untracked
`experimental/production-candidate-materialization/` surface. No clone
commit was created.

Lighthouse authority is the committed Git blob at
`e2r-liaison-scape@fd563340`,
`public/lighthouse-restoration-demo.en.e2r.json`, raw SHA-256
`C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386`.
The checked-out clone copy has a CRLF working-tree hash of
`303823E07613D338E57E62C3F60EBEADC2BB853815D16007A9F4573242F6325C`; this
does not replace the committed blob authority. The protected Production
working-tree samples were not used as authority; the Production Lighthouse
working-tree hash was different and remained untouched.

Ashen Crown authority is
`e2r-spec@0a8d543/examples/ashen-crown.en.e2r.json`, raw SHA-256
`A34326545FAB32A7EBDB6C26E97056B747C50F294F6574FD21B123D341FE338E`.
K3 remains a control-only topology.

The protected dirty file `sessions/E2R-Session-0052.md`, both Production
Lighthouse sample files, and
`C:\Users\extra\E2R\ai-knowledge\playbooks\e2r-edge-cdp-browser-diagnostic.md`
were preserved without editing, staging, or restoration.

## Frozen source-hash verification

All Implementation1 source hashes matched before rerun and remained
unchanged afterward:

| File | SHA-256 |
| --- | --- |
| `core/rational.mjs` | `948EDDE70FE80633E39D02E51BD5CA21333825F6E32DD4FB88777736A05A85ED` |
| `core/graph.mjs` | `899472982A7EE2DBBF32F5F1640202DC20BFF7E8BD4424048997137B2076B15E` |
| `core/fp1.mjs` | `3B1B7567D5A56BDE6DF66B2771E0C5AE1F7190483DA2E6BB6DCECBB587BBFBF6` |
| `core/canonical.mjs` | `553DE8A41AE94E6D9258D783FDB6117C25C10B1DE97E342D57D6D5A75C5629F0` |
| `core/gates.mjs` | `069DA87471E092E76629B3C213AAA3832AA7E146F96187CFD44913396E99398C` |
| `core/materializer.mjs` | `850E9F9D8F6624DD9BF4B3ABC6DC6DC143037F8BDA0AE357F3C8924E502E8CF4` |
| `fixtures/authoritative.mjs` | `A72475F2450D93EFEAAB4CC8655FA72440B6472917615953AD4824E955D62BD5` |
| `tests/materialization.test.mjs` | `6A2AB8E448B665067FB2E07F6F21DD1F92945B3442EC9421A921DC1950375BE2` |
| `harness/run-validation.mjs` | `D06A2DB57C74D852DD962CB541FB94D178985517A5EA1DF861BAF54DB272C454` |

No frozen source was redesigned, repaired, or reimplemented.

## Original artifact-hash verification

Before rerunning the harness, byte-for-byte copies of the four existing
Implementation1 artifacts were kept outside all repositories. The three
artifacts with frozen hashes initially matched:

| Artifact | Initial SHA-256 |
| --- | --- |
| `manifest.json` | `DA9910F341D5460B22C4617C2BF894C165987443E06DE91FA225F1BCE8BAC946` |
| `raw-materialization.json` | `377DDDF0ED38F373DAD5897DCC0F8F3FA59B226BA20AC9D83B39B44B1886EA59` |
| `audit-results.json` | `6E1B604E2E2DDC43CA6028D9A8D79C5D348D0EF9A590229ED11E37C214BFB142` |

`artifact-index.json` was also preserved as the baseline input. It contains
the same three frozen artifact hashes.

## Runtime and rerun commands

The supported local runtime was:

```text
node v24.18.0
npm 11.16.0
```

The following commands were run from the retained clone:

```text
node --test experimental/production-candidate-materialization/tests/materialization.test.mjs
node experimental/production-candidate-materialization/harness/run-validation.mjs
npm.cmd test
npm.cmd run lint
npm.cmd run build
git diff --check
```

## Pure-core and harness results

The isolated pure-core test passed `13/13`. The existing harness completed
`15/15 SUCCESS` across Lighthouse, Ashen Crown, and K3 for the five authorized
candidate identities:

```text
TA0/REP-0
TA2-DEG-W1-OP-v1
TA2-MOTIF-W1-OP-v1
TA3-FWD-W1-OP-v1
TA3-REV-W1-OP-v1
```

The accepted witness mappings, `nodeOrder`, `candidateIndices`, exact
coordinates, runtime coordinates, coordinate/output fingerprints, and
canonical graph fingerprints reproduced exactly. All 15 permutation checks
reported `graphPermutationInvariant: true`; input no-mutation evidence was
`true`.

The output remains `MAT-CANONICAL-JSON-v1` with exact rational coordinates
computed before the single JavaScript `Number` conversion. Runtime transform
configuration remained the explicit `originX=100/1`, `originY=200/1`,
`scale=10/1` for successful fixture materializations.

## Boundary and failure evidence

FP1 family boundaries reproduced:

- `N=1`, `N=3`, `N=10`, and `N=65`: `SUCCESS`;
- `N=0` and `N=66`: `DOMAIN-MISMATCH`;
- SPACE-S1 `N=10`: `164,172,196,236,292,364,452,556,676,740`;
- SPACE-S1 `N=2`: `4,4`, preserving the semantic tie.

Failure attribution reproduced without repair, remap, retry, or baseline
fallback:

| Input or identity | Result |
| --- | --- |
| `TA1-W1-OP-v1` | `UNSUPPORTED-CANDIDATE` |
| K3 candidate identity | `UNSUPPORTED-CANDIDATE` |
| unknown identity | `UNSUPPORTED-CANDIDATE` |
| `N=0`, `N=66` | `DOMAIN-MISMATCH` |
| duplicate node, missing endpoint, self edge | `INVALID-INPUT` |
| missing/zero/negative transform | `INVALID-INPUT` |
| zero denominator | `INVALID-INPUT` |
| nonfinite runtime output | `NONFINITE-OUTPUT` |
| runtime collapse of distinct coordinates | `NONINJECTIVE-OUTPUT` |

The valid control had HARD-1 through HARD-7 all `true`. The collinear control
retained HARD-1, HARD-2, HARD-3, HARD-6, and HARD-7 as `true`, with HARD-4 and
HARD-5 `false`. No invalid case was hidden by a fallback.

## Artifact regeneration and volatility analysis

The regenerated artifact hashes were:

| Artifact | Regenerated SHA-256 |
| --- | --- |
| `manifest.json` | `B6E592CADF82F5B01ABEC632B6A082811B94C867A55AACA648D6E9E75919773B` |
| `raw-materialization.json` | `6C591AB808622AFC548968A058339BBBCE02A35E3084D99DF5897F521C6D1607` |
| `audit-results.json` | `E4BA530F2EED39C10EF55335B5CFE454EEC39C685578375A604776F500811252` |

The harness generated `2026-09-02T17:39:45.615Z` (`2026-09-03 JST`). Exact
structural comparison against the preserved baseline found:

- `raw-materialization.json`: only `/generatedAt` changed;
- `audit-results.json`: only `/generatedAt` changed;
- `manifest.json`: `/generatedAt` and the hashes of the two timestamp-bearing
  raw/audit artifacts changed; and
- `artifact-index.json`: `/generatedAt` and the transitive hashes of those
  artifacts and `manifest.json` changed.

After removing only those expected volatile fields and transitive hashes, all
four JSON structures matched exactly. No nonvolatile materialization evidence
drift was found.

## Registry, exclusions, hard gates, and provenance

The registry remains exactly the five identities listed above. FP1-NGP remains
the family generator/dependency only. `TA1-W1-OP-v1` remains unsupported and
fixture-witness-only; K3 remains control-only; `REFERENCE-BASELINE` remains a
reference boundary and not a research candidate; unknown identities remain
unsupported. Equal literal geometry did not collapse semantic, materializer,
or provenance identity.

The provenance records retain the exact fixture authority, fixture hash,
production source commit, evaluation authority, semantic contract, candidate
family, ownership mode `EVAL-FULL-SEED`, runtime transform, configuration,
canonicalization version, and source hashes. Stored/Owned coordinates remain
outside the materializer input and Derived output remains ephemeral.

## Production isolation and reachability audit

The Production files `src/entity-placement.ts`, `src/auto-layout.ts`,
`src/App.tsx`, and `src/main.tsx` were inspected. Searches of Production
`src/`, `public/`, `tests/`, and the rebuilt `dist/` found no reference to
`production-candidate-materialization`, `materializeCandidate`, or
`materializeFp1Family`.

There is no App or `main.tsx` startup hook, Production strategy registry,
candidate selector, hidden preference, materializer persistence, Dataset
write, coordinate persistence, evaluator-driven settling/routing/label or
viewport mutation, or Production bundle inclusion. Existing Production
locale storage, navigation, placement, settling, and user-work state remain
unrelated accepted application behavior.

The Production repository retained only its two pre-existing dirty Lighthouse
sample files. No tracked Production source, test, package, lockfile, sample,
or bundle input changed during Validation1.

## Production regression gates

The unchanged application gates from the retained clone passed:

- `npm.cmd test`: `280/280 PASS`;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS; and
- `git diff --check`: PASS.

The test run emitted a non-fatal pre-existing WebSocket warning because port
`24678` was already in use; the complete suite still passed.

## CASE and Decision

**CASE 1 — MAT-C3 ESTABLISHED.** Frozen source identity, initial artifact
identity, supported runtime execution, canonical output and fingerprint
reproducibility, reorder/no-mutation evidence, hard gates, failure
attribution, registry/exclusions, provenance, Production isolation, and
regression gates all passed. The only artifact-file differences were
attributable to the harness `generatedAt` field and its transitive hashes.

**Decision A:**

```text
MAT-C3 runtime/nonvisual materialization evidence established for the bounded
Validation1 surface.
```

This is not a candidate selection or quality decision.

## PR-2 status and remaining gaps

`PR-2` remains **NO**. MAT-C3 is not PR-2, and no PR-2 transition is inferred
from bounded evidence. The remaining applicable evidence gaps are broader
than this isolated materialization surface: general hard-evidence scope,
candidate-specific Production compatibility and persistence/migration/fallback
audit, complete Production provenance, fixture ROLE GAP, performance,
viewport, visual acceptance, settling, routing/label evidence, Production
selection eligibility, candidate selection, and Production integration.

The exact smallest next prerequisite is **nonvisual evidence completion for
PR-2**, beginning with the candidate-specific Production compatibility audit
(including persistence, migration, fallback, and current safety semantics),
while extending hard-gate/runtime evidence and Production provenance beyond
the bounded materializer surface. This prerequisite is **NOT STARTED**. No
visual, settling, routing/label, selection, or integration checkpoint was
started.

## Knowledge Candidate assessment

Knowledge Candidate: **YES**, repository-scoped only. This checkpoint confirms
that a Production-compatible evaluation materializer can establish bounded
runtime/nonvisual evidence without being Production-integrated; that exact
artifact reproducibility must distinguish timestamp volatility from
nonvolatile evidence; and that fixture authority, identity, failure, and
Derived-coordinate provenance must remain explicit. `ai-knowledge` was not
modified.

## Final repository state

| Repository/surface | State |
| --- | --- |
| e2r-spec | Initial protected `sessions/E2R-Session-0052.md` remains dirty; this result document is the only owned new file before the roadmap synchronization. |
| LiaisonScape Production | Clean except pre-existing dirty EN/JA Lighthouse samples; no tracked source/package change. |
| Disposable clone | Detached `fd563340...`; no commit; untracked implementation surface retained. |
| ai-knowledge | Pre-existing protected playbook state preserved; no change. |

No push, tag, release, deploy, publication, or remote state change was made.
