# Minimal Root Placement Migration Wave 1 Result

- Date: 2026-09-26
- Status: **PARTIAL — 62/65 APPROVED MOVES COMPLETE; THREE PATHS HELD FOR EXTERNAL REFERENCE REPAIR; ROOT GATE NOT IMPLEMENTED**
- Scope: Execute the approved P1–P9 migration where current direct-reference evidence permits path-only repair within E2R-SPEC.
- Authority: Physical placement and local-link repair only. No document status, acceptance, maturity, authorization, historical meaning, Roadmap priority, normative authority, or release readiness changed.
- Preparation: [Post-Wave-5 Root Classification and Placement Preparation 1](documentation-ia-post-wave5-root-classification-audit1.md).

## Migration performed

The approved exact manifest contained 65 documents. **62 were moved** with
their basenames unchanged; no manifest-external document was moved:

| Packet | Result |
|---|---:|
| P1 Public Samples → `docs/public-samples/` | 19/20 moved; canonical provenance record held |
| P2 Release Governance → `docs/release-governance/` | 12/12 moved |
| P3 Temporal → `docs/temporal/` | 19/20 moved; scope-closure record held |
| P4 Test Infrastructure → `docs/test-infrastructure/` | 8/8 moved |
| P5 Cross-App provenance access → `docs/cross-app/` | 1/1 moved |
| P6 Visual evidence policy → `docs/evidence/` | 0/1 moved; policy held |
| P7 Application Suite → `docs/application-suite/` | 1/1 moved |
| P8 Dataset Validation → `docs/dataset-validation/` | 1/1 moved |
| P9 Hub action-copy readiness → `docs/hub/` | 1/1 moved |

The six Human-approved responsibility directories were created. Existing
`cross-app/`, `evidence/`, and `hub/` destinations were reused. The placement
does not change any directory into a status or authority hierarchy.

## Three documents held at the root

Execution-time read-only scans found direct path dependencies that were not
present in the preparation scan. These references remain valid because the
documents stayed at their original paths:

1. `docs/public-sample-provenance.md` is linked by Hub `src/App.tsx` and
   `tests/appUiIntegration.test.ts`, LiaisonScape `src/App.tsx`, and
   NarrativeLine `src/screens/HomeScreen.tsx` using the published E2R-SPEC
   `main` path. Those applications expose the central provenance URL, so
   moving the document without repairing the consumer URLs would break them.
2. `docs/history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md` is
   linked by two NarrativeLine implementation records through E2R-SPEC
   `main` URLs and is named by Validator `test/history-profile.test.js`.
   Updating those external references would require writes to sibling repos.
3. `docs/visual-evidence-early-smoke-check-policy.md` is the declared
   `source_of_truth` in two `ai-knowledge` entries. Updating those references
   would require a Knowledge-repository write.

The Human authorization explicitly kept sibling repositories and Knowledge
read-only. No compatibility copy, redirect, or alias was authorized, so these
three paths were not moved. No external repository was modified, staged, or
committed. Their statuses and authority remain unchanged.

## Path repairs and navigation

Live Markdown link destinations to moved documents were recalculated relative
to each document's resulting location. Published `e2r-spec` `main` URLs that
pointed at moved documents were updated path-only. The live Research catalog
reference to `e2r-self-description.md` now points to
`docs/public-samples/e2r-self-description.md`. Historical source-path
inventories in migration/audit evidence were preserved as recorded facts.

The Documentation Hub now links to the responsibility collections, and the
Documentation Plan and Documentation IA entry page point to this result. The
Roadmap's planning text and status were not edited; only its live links to
moved records were repaired. The 15 Seed-133 JSON diagnostic references and
the known missing `visual-evidence-index.md` reference were not changed,
created, acquired, substituted, repaired, or marked resolved.

## Root census and gate condition

The actual immediate-root Markdown census after these moves is **8**, not the
approved final 5:

- approved root-retain set: `README.md`, `roadmap.md`,
  `application-design-principles.md`, `application-recommendations.md`, and
  `identifier.md`;
- held P1/P3/P6 documents: `public-sample-provenance.md`,
  `history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md`, and
  `visual-evidence-early-smoke-check-policy.md`.

Because the immediate root does not equal the approved five-file set, the
conditional root-placement gate was **not implemented**. No allowlist,
validator, tests, or `npm run validate` hook was added. No manifest entries
were added for the held files, and no other file was moved to force the
expected count.

Completing P1, P3, and P6 requires a separate Human decision authorizing the
exact path-only repairs in the identified sibling/Knowledge files, or another
explicitly approved compatibility strategy. Once the three files are safely
moved, re-census the root; implement the gate only if it then contains exactly
the five approved root files.

## Validation and repository boundary

- `npm run validate`: PASS after the path and link repairs.
- A local Markdown-target scan checked 1,492 targets. Seventeen remain
  unresolved: the 15 previously documented, intentionally unavailable
  Initial Placement Seed JSON artifacts; the previously documented
  `visual-evidence-index.md`; and the pre-existing session reference to
  `applications/linkscape-mvp-acceptance.md`. The first 16 were not repaired,
  generated, acquired, or marked resolved. The unrelated session reference
  was left unchanged.
- Manifest check: 65 approved entries; 62 moved, the three authorized holds
  remain at root, and no other manifest target is missing.
- Immediate root census: eight Markdown files. The conditional root-placement
  gate remains unimplemented because the approved five-file condition is not
  met.
- `git diff --check`: PASS (Git reports the repository's existing LF-to-CRLF
  normalization warnings).
- Sibling repositories and `ai-knowledge`: read-only; no writes performed.
- `work/`: untouched and unstaged.
- No push, deploy, tag, release, publication, or public write performed.
