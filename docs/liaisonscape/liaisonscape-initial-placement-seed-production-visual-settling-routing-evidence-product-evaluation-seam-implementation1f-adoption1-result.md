# E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-PRODUCT-EVALUATION-SEAM-IMPLEMENTATION1F-ADOPTION1

Date: 2026-09-03
Status: `ADOPTION1 NOT ADOPTED`
Case: `CASE 3`
Decision: `Decision C`

## Outcome

This checkpoint stopped at the CSS authority hard gate. The exact 1F
evaluation files were transferred into Live, but the adopted wrapper test
failed its raw stylesheet SHA assertion. The candidate and Live stylesheet
have the same Git blob and the same normalized text, but different working-tree
line endings. The candidate clone has CRLF and the Live working tree has LF.

The required CSS SHA from 1F is
`AA28A84F31EDE2BAE6029180EED000072121BF4ED4EAB5462A5B92DD82C5E434`.
Live `src/styles.css` is
`9955A690FDC38064309F1391BA62FA5D5F044B677ED44799555FAB583F6490BF`.
Both repositories report Git blob `ae41e48b34d72067d92517a5d42a57a4cc1d409f`;
the normalized stylesheet text is equal. The candidate is 20,686 bytes with
338 CRLF line endings; Live is 20,348 bytes with 338 LF line endings.

Per the Adoption1 boundary, Product CSS must not be normalized, replaced,
rewritten, or otherwise changed to make the candidate pass. Therefore the
candidate was not adopted and no Live adoption commit was created.

## Authorities and pre-state

The pre-adoption Live HEAD was exactly
`c7e7745ad883f8434f56dd62e5b933aafabf548d`. The protected dirty files were
only:

- `public/lighthouse-restoration-demo.en.e2r.json`:
  `19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1`;
- `public/lighthouse-restoration-demo.ja.e2r.json`:
  `C4604679A8D730705E33E51F06BAED46E37BD571C30595145D1938CD3E9B4EFA`.

The 1F candidate is
`60373836bc1ccea56151593afc22a9b8f324d0a3`
(`test: add LiaisonScape evaluation render wrapper`), with parent
`c7e7745ad883f8434f56dd62e5b933aafabf548d`. Its exact inventory is:

- `experimental/product-evaluation-seam/render-wrapper1/render-wrapper.tsx`;
- `experimental/product-evaluation-seam/render-wrapper1/render-wrapper.test.ts`.

Transfer policy was `F-A`: exact two-file transfer only. No Product source,
App, CSS, package, characterization2, browser, candidate, or materializer work
was added.

The two transferred wrapper files match the candidate byte-for-byte:

- `render-wrapper.tsx`: `BF77F554FF5DB711E2BAF6A8C9DE72C1395D1F21F434A2B5995B10E44BC728E1`;
- `render-wrapper.test.ts`: `A2B6727E88BC920496D0FF9F9292535E9F11E7749E2BEAC3C0544DA3FC092B83`.

They remain untracked in Live because adoption was stopped before staging. The
protected samples were not staged or modified.

## Contract and validation

P-A remains conceptually true: the wrapper is evaluation-only, derives no
geometry, owns no App/manual state, and normal Product render architecture was
not changed. `VSR-RENDER-PROJECTION-v1`, neutral-state semantics, CSS policy
C-A, and equivalence method M-A were not weakened.

The focused wrapper test result in Live was 11/12 PASS. F-R1 through F-R10 and
F-R12 passed; F-R11 failed only because the test's fixed raw CSS SHA expected
the CRLF candidate working-tree hash. The independent App-authority
`APP-RENDER-EQUIVALENCE-v1` structural assertions passed within F-R12, but
the overall adoption gate is FAIL because CSS provenance did not satisfy the
required raw-byte SHA.

The current SVG viewBox remains `0 0 800 500`. The Product CSS authority
remains `src/styles.css`; Product CSS was not modified, copied, rewritten, or
given a second authority. Normal main/App/Product imports of the wrapper remain
NO, and preliminary isolation is PASS.

Product source hashes remain unchanged from c7e7745:

- App.tsx `F66250C0AA1C3457A560556AC8D6FB9D3081FBEFC80B43B8192F0A25BBBE9688`;
- graph-presentation.ts `5C146F76E50C69A0FCDD8F613AD6A89638F81D9F7317D94A84B05A698EECB455`;
- viewport.ts `53168CEFA585AFD6C850BD859943AF66E035765AAA552E079B73005177E93D3F`;
- auto-layout.ts `257B483A9703A15620FF64D97C485D5FE4EF586489BB9EEB6018E4167733E385`;
- main.tsx `D9F21D1B6A6ED7B7633A3D5EF59CBDC19BBC499DFBA5C1A2CFAF24B68D2E7061`;
- index.html `E4717DE7AFEB5B1E96E90BAE834C800433A1C07DC392A0AB5208ECB11FE25605`.

Focused graph-presentation tests passed 22/22. Baseline2 characterization passed
4/4 and fresh replay produced 38 cases with SHA
`F18C4C98607B9412BD6C035803002BE1DFEE1F2AF721942C8D8FF69A5496795B`.
The existing reversal and no-mutation evidence remains 16/16 each and PASS.
The full Product suite passed 309/309; lint, build, and diff-check passed.

No browser, CDP, screenshot, pixel comparison, human visual acceptance,
E-VISUAL, candidate execution, materializer import/execution, TA0/TA2/TA3/FP1,
or V0/V1/V2/V3 work occurred. Baseline-v2 was not changed; baseline-v3 was not
created; PR-3 remains NO.

## Repository state and next action

No Live adoption commit exists. The Live accepted authority remains
`c7e7745ad883f8434f56dd62e5b933aafabf548d`; normal Product runtime source is
byte-identical to it. The 1F candidate remains clean at
`60373836bc1ccea56151593afc22a9b8f324d0a3` and was not modified.

The baseline2, 1E, 1D, 1C, 1B, W-C, and retained materializer repositories
remain unchanged. The protected Session-0052 file and pre-existing
ai-knowledge browser-diagnostic modification remain unchanged. No Knowledge
Candidate entry was added, and the integer-coordinate follow-up is unchanged.

Implementation1G is NOT STARTED and is not automatically eligible for
progression from this failed adoption. Candidate selected: NO. Product
candidate integration: NO. Push, tag, release, deploy, and publication: NONE.

Decision C is: do not adopt; record the exact unexpected CSS working-tree
byte/hash difference. A separately authorized reconciliation checkpoint is
required before Adoption1 can be retried.
