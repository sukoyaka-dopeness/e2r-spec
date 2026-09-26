# Minimal Root Placement Migration Wave 1 Completion and Root-Ingress Gate Result

- Date: 2026-09-26
- Status: **COMPLETE — 65/65 PATH MIGRATIONS; FIVE-PATH ROOT GATE ENABLED**
- Scope: Move the three approved held documents, repair only their approved direct references and E2R-SPEC path references, and enforce the reviewed immediate-root Markdown baseline.
- Authority: Physical placement only. No runtime behavior, document status, acceptance, maturity, authorization, historical meaning, Roadmap priority, or normative authority changed.
- Prior checkpoint: [Initial partial migration result](documentation-ia-minimal-root-wave1-path-migration1-result.md).
- Placement rationale: [Final root classification and ingress-gate audit](documentation-ia-final-root-classification-and-ingress-gate-audit1.md).

## Final three path migrations

| Previous path | Current path |
|---|---|
| `docs/public-sample-provenance.md` | `docs/public-samples/public-sample-provenance.md` |
| `docs/history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md` | `docs/temporal/history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md` |
| `docs/visual-evidence-early-smoke-check-policy.md` | `docs/evidence/visual-evidence-early-smoke-check-policy.md` |

Together with the earlier 62 moves, this completes all 65 approved P1–P9
manifest paths. No compatibility copy, redirect, or old-path alias remains.

## Approved external path repairs

Only the explicitly named consumer references were edited, changing the path
to the same E2R-SPEC document and preserving surrounding behavior and meaning:

- Hub: `src/App.tsx` and `tests/appUiIntegration.test.ts` now use the
  `docs/public-samples/` provenance URL. The existing basename-based
  integration assertion remains unchanged.
- LiaisonScape: the provenance URL in `src/App.tsx` was updated. That file
  already contained unrelated uncommitted application changes; the path-only
  hunk was committed separately, and all other hunks remain uncommitted.
- NarrativeLine: `src/screens/HomeScreen.tsx` now uses the new provenance URL;
  two History 2 result documents point to the scope-closure record under
  `docs/temporal/`.
- Validator: `test/history-profile.test.js` names the new scope-closure path.
- `ai-knowledge`: the two approved `source_of_truth` values now point to the
  policy under `docs/evidence/`. The unrelated dirty CDP playbook was not
  modified, staged, or committed.

No other sibling or Knowledge file was changed. Path repairs did not alter
application behavior, test intent, Knowledge decisions, or evidence meaning.

The reference-only changes were committed separately in their owning
repositories:

| Repository | Commit | Verification |
|---|---|---|
| `e2r-hub` | `cad502b5db697bc015c53f6624f3b2c41c0dffaa` | `npm test`, `npm run lint`, and `npm run build` passed. |
| `e2r-liaison-scape` | `c5b21dcb9febfd925e467ca673d4f6ab7f240178` | Only the URL hunk in already-dirty `src/App.tsx` was committed; `npm test` (645), lint, and build passed. Other existing changes remain uncommitted. |
| `e2r-narrative-line` | `307a26583074b5db5471d4778ae30231d16e0838` | `npm test` (259), lint, and build passed. Other existing changes remain uncommitted. |
| `e2r-validator` | `5d6d414fac002f8b8fb87e0f13a43664113dc39a` | `npm run validate` passed (123 tests and 3 fixture tests). |
| `ai-knowledge` | `8bc96160473624d57bd3118864a55038715d70fe` | Exact two-file path-only diff and `git diff --check` passed; unrelated dirty playbook remains uncommitted. |

All five commits are local and unpushed. A fresh exact-old-path scan found no
remaining references in those five repositories; each approved destination
exists in E2R-SPEC.

## Root-placement validation gate

The post-migration immediate `docs/` Markdown census contained exactly these
five files:

- `docs/README.md` — repository-wide documentation navigation and routing.
- `docs/roadmap.md` — sole E2R-wide current-planning authority.
- `docs/application-design-principles.md` — repository-wide, non-normative
  application design principles.
- `docs/application-recommendations.md` — repository-wide, non-normative
  recommendations for E2R applications.
- `docs/identifier.md` — E2R-wide identifier recommendations.

The exact reviewed paths and positive rationales are recorded in
[`root-placement-allowlist.json`](root-placement-allowlist.json). The gate
checks only regular Markdown files immediately under `docs/`. It rejects
unlisted root files, stale allowlist paths, malformed or duplicate entries,
and entries without a positive rationale. Content-only edits to allowed root
files pass; nested Markdown is outside the gate. The validator does not decide
ownership, authority, normativity, status, acceptance, or whether a rationale
should be approved.

### Literal Markdown-extension matching

The root gate recognizes only filenames whose final extension is the literal
`.md`, case-insensitively. Allowlist paths must likewise end in a literal
`.md` extension (also case-insensitively); names such as `fooamd` and `fooXmd`
are not Markdown paths. This matcher-clarity correction leaves the reviewed
five-path allowlist, root set, and placement policy unchanged. Regression
coverage exercises both false suffixes and an uppercase `.MD` extension.

## Validation

- `npm run test:docs-root-placement`: PASS, including exact-set acceptance,
  nested-file exclusion, new root ingress, content-only edits, root rename,
  moved/stale entries, duplicate/malformed entries, and malformed manifest
  cases.
- `npm run validate:docs-root-placement`: PASS against the actual five-file
  root and reviewed allowlist.
- `npm run validate`: PASS with both root-gate test and check integrated.
- Approved Markdown path repairs were checked against current filesystem
  targets. The separately recorded Seed-133 artifact references, missing
  `visual-evidence-index.md`, and unrelated session reference remain outside
  scope and unresolved.
- `git diff --check`: PASS for the E2R-SPEC staged changes.
- No push, deployment, tag, release, publication, or public write occurred.
