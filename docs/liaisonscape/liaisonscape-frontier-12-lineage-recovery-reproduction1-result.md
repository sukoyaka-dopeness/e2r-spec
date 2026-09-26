# LiaisonScape Frontier-12 Lineage Recovery / Reproduction 1

Date: 2026-09-16

## Final classification

`B. LINEAGE RECONSTRUCTABLE WITH BOUNDED EVIDENCE`

The Human Review candidate's source lineage is reconstructable from current repository source. The
recovered lineage is the `e7d6cbc` Frontier Actual Product Visual Sweep 1
generator, whose production-facing search entry point is
`tools/generic-crossing-search.mjs` and whose fixture orchestration entry point
is `tools/frontier-actual-product-visual-sweep1.ts`.

The recovered entry points and 13-row parity gate establish the lineage, but
the bounded replay did not independently execute the two custom synthetic
controls. This is therefore recorded as bounded evidence rather than full
artifact-wide exact parity.

This is lineage recovery only. No production solver extraction, App wiring,
provider reselection, or behavior change was performed.

## Recovered lineage map

`frontier-actual-product-visual-sweep1.ts`
→ fixture loading / synthetic fixture generation
→ controlled Frontier environment
→ `generic-crossing-search.mjs`
→ `productionAblationPlan("frontier-12")`
→ `productionStructuralFrontier(12)`
→ Product-authoritative presentation evaluation and selection
→ selected positions / family / metrics / fingerprint
→ `experimental/frontier-actual-product-visual-sweep1/result-summary.json`
→ DEV acceptance artifact consumed by `App.tsx`.

The recovered implementation is a research/evaluation pipeline, not the
normal Product provider. `App.tsx` only fetches its generated positions in the
DEV acceptance seam; `actual-product-initial-layout.ts` continues to use
`settleInitialPlacement` for normal coordinate-less opening.

## Replay contract

From the LiaisonScape repository root, the orchestration method is equivalent
to:

```text
node --experimental-strip-types tools/frontier-actual-product-visual-sweep1.ts
```

The generator invokes:

```text
node tools/generic-crossing-search.mjs <fixture-path>
```

with the following Frontier-12 environment:

```text
E2R_PRESENTATION_GEOMETRY_CACHE=1
E2R_PRESENTATION_EXACT_CANDIDATE_REUSE=1
E2R_RELAXATION_FINAL_CANONICALIZATION=round-once
E2R_GLOBAL_PLACEMENT_ABLATION=frontier-12
E2R_GLOBAL_PLACEMENT_MODE=viewport-anisotropic
E2R_GLOBAL_SPACING_SCALE=.88
E2R_GLOBAL_SPACING_Y=1.12
E2R_GLOBAL_SPACING_STAGE2=off
```

The generator uses the canonical E2R-SPEC samples, NarrativeLine Berlin Wall
samples, and source-defined synthetic controls. It sorts structural IDs with
the current comparator, uses the current structural frontier implementation,
and fingerprints sorted position entries with SHA-256 truncated to 12 hex
characters.

## Parity evidence

The saved `result-summary.json` was replayed through the current
`generic-crossing-search.mjs` with the recorded environment. All file-backed
rows matched both selected family and selected position fingerprint:

| Scope | Rows | Result |
| --- | ---: | --- |
| canonical/public and Berlin file fixtures | 10 | 10/10 exact family + fingerprint matches |
| dense synthetic `k7-7`, `k6-8`, `k8-8` | 3 | 3/3 exact family + fingerprint matches |

The observed matches include, for example, Lighthouse EN
`4cc6d8ae2c92`, Apollo EN `9e821a079aee`, Titanic EN `9a27b996f084`, and dense
K7-7 `bdd252c1b045`. Locale-paired rows also matched their corresponding
source-defined results.

The remaining two synthetic controls in the saved sweep
(`label-heavy-ja-10` and `parallel-self-loop-control`) are defined by the
orchestration script's local fixture constructors and were not independently
re-run in this bounded replay command. Their generator entry point and source
definition are recovered, but the replay table deliberately does not claim
additional parity beyond the 13 executed rows.

## Executable provenance

* source revision: `e7d6cbc` (`Add Frontier Actual Product visual sweep`);
  the relevant generator and search source are present at the current
  repository tip;
* fixture identity: generator fixture table plus canonical sample paths and
  synthetic source identifiers;
* entry points: `tools/frontier-actual-product-visual-sweep1.ts` and
  `tools/generic-crossing-search.mjs`;
* parameters: recorded Frontier environment above, `frontier-12` representative
  limit, current structural frontier and Product presentation selection;
* determinism: stable ID ordering, explicit environment, no random seed or
  DOM measurement in the structural generator; output checked by family and
  fingerprint;
* output evidence: saved result summary, selected family, metrics, positions,
  and selected position fingerprint.

## Remaining provenance limits

The original host invocation metadata, exact Node/npm version, and original
working-tree hash are not recorded in the historical artifact. The two custom
synthetic controls still need a separate parity replay if complete all-row
reproduction is required. These limits do not invalidate the recovered
lineage: the source entry points and 13-row parity gate are exact, and the
remaining fixture constructors are in the same orchestration source.

## Decision

The prior extraction-readiness blocker is closed for lineage identity: a
current-source Frontier-12 research lineage is recovered. This does not make it
a production solver. A separate bounded checkpoint may now perform standalone
solver characterization or extraction planning, subject to preserving Product
authority and the existing Human Review `QUALIFIED` decision.
