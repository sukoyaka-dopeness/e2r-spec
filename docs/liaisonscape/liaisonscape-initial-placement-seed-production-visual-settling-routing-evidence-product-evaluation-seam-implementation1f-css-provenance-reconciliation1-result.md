# E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F-CSS-PROVENANCE-RECONCILIATION1

Date: 2026-09-03
Status: `RECONCILIATION CANDIDATE`
Case: `CASE 1`
Decision: `Decision A`

## Outcome and blocker classification

The previous Implementation1F Adoption1 stopped as CASE 3 because F-R11 treated
the raw working-tree SHA-256 of `src/styles.css` as portable CSS identity.
This checkpoint audited the cause and classified it as:

`RAW WORKING-TREE HASH PROVENANCE CONTRACT MISMATCH`.

The candidate and Live files have the same committed Git blob and equal text
after only line-ending normalization. Candidate checkout materializes CRLF;
Live materializes LF. No Product CSS content drift was found and Live was not
modified.

The reconciliation selects `P-CSS-A` Git blob authority, with a
`P-CSS-B` canonical normalized text digest as the portable content-contract
layer. `PRODUCT-CSS-PROVENANCE-v1` is frozen:

- authoritative identity is `HEAD:src/styles.css` at blob
  `ae41e48b34d72067d92517a5d42a57a4cc1d409f`;
- CRLF versus LF checkout materialization is non-semantic;
- test-side normalization is only CRLF -> LF and lone CR -> LF;
- canonical normalized UTF-8 SHA-256 is
  `9955A690FDC38064309F1391BA62FA5D5F044B677ED44799555FAB583F6490BF`;
- raw working-tree SHA is diagnostic only;
- spaces, tabs, trailing whitespace, CSS syntax, Unicode, comments, and
  property order are not normalized.

The proof has two layers: a Git blob assertion and a canonical text assertion
against the actual imported stylesheet. The wrapper still imports
`../../../src/styles.css`; no runtime CSS transformation was introduced.

## EOL authority audit

Candidate clone:
`C:\Users\extra\E2R\e2r-liaison-scape-product-evaluation-seam-implementation1f`

Live repository:
`C:\Users\extra\E2R\e2r-liaison-scape`

Both report `HEAD:src/styles.css` blob
`ae41e48b34d72067d92517a5d42a57a4cc1d409f`. Candidate
`git ls-files --eol src/styles.css` is `i/lf w/crlf attr/`; Live is
`i/lf w/lf attr/`. Neither repository has a root or parent `.gitattributes`.
Both use `file:C:/Users/extra/.gitconfig true` for
`core.autocrlf`; `core.eol` and `core.safecrlf` are unset. This is
consistent with platform checkout materialization, not a repository policy
requiring raw working-tree bytes.

Candidate stylesheet: 20,686 bytes, 338 CRLF line endings, raw SHA
`AA28A84F31EDE2BAE6029180EED000072121BF4ED4EAB5462A5B92DD82C5E434`.
Live stylesheet: 20,348 bytes, 338 LF line endings, raw SHA
`9955A690FDC38064309F1391BA62FA5D5F044B677ED44799555FAB583F6490BF`.
Normalized text equality: PASS; canonical digest equality: PASS.

The old F-R11 failure was reproduced on Live as 11/12, while the original
CRLF-materialized 1F/reconciliation checkout produced 12/12. This demonstrates
the old raw assertion's EOL dependence without changing Product CSS.

## Reconciliation clone and source scope

A new disposable clone was created at
`C:\Users\extra\E2R\e2r-liaison-scape-product-evaluation-seam-implementation1f-css-provenance-reconciliation1`
at initial HEAD `60373836bc1ccea56151593afc22a9b8f324d0a3`. The original 1F
clone and commit remain preserved and unchanged.

Only
`experimental/product-evaluation-seam/render-wrapper1/render-wrapper.test.ts`
was changed. The exact change replaces the raw stylesheet SHA assertion with
the Git blob assertion, canonical LF-normalized digest, and wrapper CSS import
assertion, then adds F-R13 proving LF and CRLF produce the same digest while a
non-EOL content mutation changes it. `render-wrapper.tsx` is unchanged;
Product CSS, `.gitattributes`, all `src/` Product files, package files, and
lockfiles are unchanged.

The reconciliation commit is
`0af4437c469bdee2f5636a87e6b5489a1f53c60b`,
`test: make render wrapper CSS provenance EOL-stable`, parent
`60373836bc1ccea56151593afc22a9b8f324d0a3`. It is a local, unpushed
`IMPLEMENTATION1F CSS-PROVENANCE RECONCILIATION CANDIDATE`. The original
`60373836bc1ccea56151593afc22a9b8f324d0a3` remains the historical 1F
validation provenance. Nothing is adopted into Live here.

## Validation

The corrected wrapper suite passes 13/13 in the CRLF reconciliation clone and
13/13 in an isolated LF-materialized checkout. F-R1 through F-R12 remain
passing; F-R13 proves EOL portability and real-content-mutation rejection.
`APP-RENDER-EQUIVALENCE-v1`, M-A, and `VSR-RENDER-PROJECTION-v1` remain
unchanged and pass. CSS policy C-A remains direct import of Product
`src/styles.css`.

Focused graph-presentation tests pass 22/22. Baseline2 characterization passes
4/4 and fresh replay is 38 cases with SHA
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.
Pure routing is 9/9 exact; App routing 16/16; pure labels 8/8; App labels
16/16; auto-layout 38/38; Relation and Node reversal solve/settle are 16/16
each; fresh-process and no-mutation are PASS. The Product suite passes
309/309; lint, build, and diff-check pass.

Product source hashes remain unchanged:
`App.tsx F66250C0AA1C3457A560556AC8D6FB9D3081FBEFC80B43B8192F0A25BBBE9688`,
`graph-presentation.ts 5C146F76E50C69A0FCDD8F613AD6A89638F81D9F7317D94A84B05A698EECB455`,
`viewport.ts 53168CEFA585AFD6C850BD859943AF66E035765AAA552E079B73005177E93D3F`,
`auto-layout.ts 257B483A9703A15620FF64D97C485D5FE4EF586489BB9EEB6018E4167733E385`,
`main.tsx D9F21D1B6A6ED7B7633A3D5EF59CBDC19BBC499DFBA5C1A2CFAF24B68D2E7061`,
`styles.css AA28A84F31EDE2BAE6029180EED000072121BF4ED4EAB5462A5B92DD82C5E434`
in the CRLF candidate checkout, and `index.html
E4717DE7AFEB5B1E96E90BAE834C800433A1C07DC392A0AB5208ECB11FE25605`.
For `styles.css`, committed blob and canonical text are the authority; raw
Live working-tree SHA remains diagnostic.

## Protected state and next boundary

The actual Live repository remains untouched at HEAD
`c7e7745ad883f8434f56dd62e5b933aafabf548d`. Its two blocked-Adoption1
untracked wrapper files remain byte-identical:
`render-wrapper.tsx BF77F554FF5DB711E2BAF6A8C9DE72C1395D1F21F434A2B5995B10E44BC728E1`
and `render-wrapper.test.ts A2B6727E88BC920496D0FF9F9292535E9F11E7749E2BEAC3C0544DA3FC092B83`.
Protected EN/JA sample hashes remain
`19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1` and
`C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA`.

No browser, CDP, screenshot, pixel comparison, E-VISUAL, candidate execution,
materializer execution, TA0/TA2/TA3/FP1, or V0/V1/V2/V3 work occurred.
Baseline-v2 is unchanged, baseline-v3 was not created, and PR-3 remains NO.
Implementation1G is NOT STARTED and NOT ELIGIBLE because Live adoption has not
occurred. Candidate selected: NO; Product candidate integration: NO.

The next exact prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F-ADOPTION1-RETRY1`,
NOT STARTED. It must use the unchanged wrapper implementation, this corrected
test, `PRODUCT-CSS-PROVENANCE-v1`, and blob/canonical-content proof. This
checkpoint does not start that retry.

The Session-0052 file and pre-existing ai-knowledge browser-diagnostic change
were preserved. No Knowledge Candidate entry was added. Baseline2, 1E, 1D,
1C, 1B, W-C, and the retained materializer remain unchanged. Push, tag,
release, deploy, and publication: NONE.
