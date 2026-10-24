# LiaisonScape Validator / Dimension Assessment compatibility review

Recorded: 2026-10-24 JST

Status: **REVIEW COMPLETE / HUMAN DECISION: RETAIN PUBLISHED VALIDATOR 0.7.0 FOR NOW / DIMENSION ASSESSMENT DIAGNOSTICS DEFERRED / NO DEPENDENCY CHANGE**. The recommendation below preceded the subsequent Human decision recorded at the end.

## Scope and authorities

This review follows the [recognition and functional-support audit](liaisonscape-dimension-assessment-recognition-audit-2026-10-24.md) and its later LiaisonScape-local Human design direction. Recognition of an Extension is separate from LiaisonScape display/edit support. No ordinary UI notice is required solely because a recognized Extension is functionally unsupported. Legitimate technical Diagnostics remain visible. The [LS-DA-PRESERVE2 Human acceptance](https://github.com/sukoyaka-dopeness/e2r-liaison-scape/blob/33910d28368c390ff437fce12e03920e60a1dbf9/docs/dimension-assessment-ui-preservation-human-acceptance-2026-10-22.md) covers only its reviewed Lighthouse JA path. Dimension Assessment `0.2.0` remains a non-Stable Candidate; Diagnostics D2 remains OPEN.

Evidence was read from the current LiaisonScape checkout `33910d28368c390ff437fce12e03920e60a1dbf9`, Validator checkout `655954d3186d7a1bca24b3f0b81edec76800c925`, LiaisonScape's installed package and lockfile, and the npm registry queried on 2026-10-24 JST. Existing uncommitted work in LiaisonScape was not changed. The checkout comparison is **not** a published-package or swapped-dependency application test.

## Published package versus repository source

| Evidence | Published dependency used by LiaisonScape | Adjacent Validator checkout |
| --- | --- | --- |
| Version and availability | `package.json` and lockfile pin `@sukoyaka-dopeness/e2r-validator@0.7.0`. The installed package reports `0.7.0`; the lockfile resolves the npm tarball. `npm view ... versions dist-tags` returned `0.7.0` as both the highest listed version and `latest`. No newer published package was found. | `package.json` still says `0.7.0`, but HEAD is four commits after tag `v0.7.0`; three later commits add and refine Dimension Assessment validation. The unchanged package version does not make HEAD the published 0.7.0 tarball. |
| Identifier recognition | Installed `extension-validator.js` does not register `draft.github.sukoyaka-dopeness.dimension-assessment`; its payload gets `unknown_extension`. | Registers the identifier and invokes `validateDimensionAssessment`. |
| Exact Specification version | Installed `specification-validator.js` has no Dimension Assessment `0.1.0` or `0.2.0` local support; Lighthouse JA's `0.2.0` declaration gets `specification_unavailable`. | Registers exact `0.1.0` and `0.2.0` versions. Unsupported future versions are not treated as supported. |
| Semantic validation | Does not interpret Dimension Assessment payload values. | Checks recognized payload structure, references, bounds, values and declaration consistency; supported-version violations can be errors. This does not add an application editor. |

The registry lookup establishes available published versions, not future publication intent. A usable published candidate with this recognition would first require an independently reviewed Validator release. Its [documented release process](../../../e2r-validator/docs/release-process.md) requires a new package version and changelog entry, Specification fixture compatibility, clean install, validation, package inspection, an approved exact tag and Trusted Publishing workflow, followed by registry and clean-install checks. None of those publication steps was performed in this review. The current checkout's package manifest still reports the already published `0.7.0`.

## Bounded compatibility probes

Read-only Node comparisons ran the installed npm package and adjacent checkout `validateDataset` on disposable in-memory copies of LiaisonScape's bundled `public/lighthouse-restoration-demo.ja.e2r.json`. The baseline has Candidate `0.2.0`. These are service-level probes, not a browser run or a LiaisonScape dependency update.

| Input | Published `0.7.0` | Adjacent HEAD | Consequence if equivalent code were later adopted |
| --- | --- | --- | --- |
| Bundled Lighthouse JA | `valid: true`; warning `unknown_extension` at the Candidate payload and `specification_unavailable` at Specification `uses/3/extension`. | `valid: true`; neither warning. | These two warnings could disappear through actual recognition, without suppressing Diagnostics. |
| Copy with first Assessment `value` changed to a string | `valid: true`; the same two warnings. | `valid: false`; `dimension_assessment_value_not_finite` error at `assessments/0/value`. | A Dataset currently importable with warnings could be refused on Import/Handoff and blocked on Export under current LiaisonScape error gates. |
| Copy with payload and declaration changed to unsupported `0.3.0` | `valid: true`; the same two warnings. | `valid: true`; `dimension_assessment_version_unsupported` warning. | Unsupported versions remain uninterpreted; exact support is not inferred. |
| Copy with a separate opaque `example.unknown` payload and exact Specification declaration | `valid: true`; warnings for both unknown payloads and both unavailable declarations. | `valid: true`; Dimension Assessment warnings disappear, while `unknown_extension` and `specification_unavailable` remain for `example.unknown`. | Recognition of one Candidate does not suppress warnings for a genuinely unknown Extension. |

The adjacent Validator's `npm run validate` passed (145 tests plus 3 fixture tests, with lint PASS). LiaisonScape's focused installed-dependency tests passed 27/27, covering its Lighthouse sample, Export declaration handling and replacement safety. A separate read-only service-level round trip through LiaisonScape's current `loadDataset`, `prepareDatasetForExport`, `serializeDataset` and re-import loaded Lighthouse JA both times, retained both warnings, preserved its Dimension Assessment payload and Specification declarations by structural JSON comparison, and left `prepareDatasetForExport` on the same Dataset object. This does not extend the bounded Human UI Export acceptance to arbitrary Datasets.

## LiaisonScape behavior and risk boundary

`loadDataset` accepts a parsed Dataset only when Validator `valid` is true. Local file Import and Startup Handoff use the same validation result; invalid input produces a failure rather than a replacement candidate. `validateDatasetForExport` revalidates the current Dataset; an error prevents download, whereas warnings remain visible and allow Export. `prepareDatasetForExport` returns a Dataset with existing Specification declarations unchanged, and returns an undeclared Dataset unchanged when unsupported Extension combinations prevent safe declaration completion. Recognition does not by itself modify the Dataset or add Dimension Assessment display/edit functions.

Therefore a future Validator change could alter warning codes/severity, Import/Handoff acceptance, and Export refusal for malformed **known** Candidate data. It could also change what Diagnostics appear after replacement or re-import. Those behavior changes need LiaisonScape integration tests for valid, malformed, unsupported-version and unknown Extension cases, including Dataset retention and failure/recovery paths, before an update is considered safe. No such swapped-dependency integration or browser test was performed here. The existing Diagnostics D2 re-evaluation issue is independent and remains OPEN.

## Recommendation and remaining decision

**Recommend A — keep the current published Validator `0.7.0` for now.** It is the latest published package; no published update candidate exists. The reviewed Lighthouse JA path imports, exports and re-imports with bounded preservation evidence, and LiaisonScape's adopted design direction does not require an ordinary UI recognition status. This recommendation does not assert general Dataset safety or that semantic validation is unnecessary in all future work.

If Human later chooses exact Candidate recognition and semantic validation in LiaisonScape, a new Validator release is a prerequisite; the adjacent source is a technical starting point, not a deployable dependency. Before approving that release for LiaisonScape, decide how newly rejected malformed Candidate Datasets affect Import, Handoff, Export, diagnostics, and user recovery, then validate those paths against the actual published package. Do not update a dependency, suppress warnings, change Extension maturity, close D2, or enlarge LS-DA-PRESERVE2 on the strength of this review.

## Subsequent Human retention decision — 2026-10-24 JST

Human adopted the review's near-term recommendation: LiaisonScape retains `@sukoyaka-dopeness/e2r-validator@0.7.0` for now. The existing Lighthouse JA `unknown_extension` and `specification_unavailable` warnings remain. Do not change Validator or suppress Diagnostics in the UI solely to remove those warnings. This is a current retention decision, not a permanent prohibition on future Validator updates, and it does not claim that `0.7.0` fully validates Dimension Assessment content.

The LiaisonScape-local UI direction remains: recognizing an Extension without displaying or editing its features does not itself call for an ordinary user notice. Notify users when an actual effect on their work warrants it, including a data-preservation limit, refused operation, real validation error, or compatibility choice. Keep legitimate technical Diagnostics distinct from ordinary notifications.

Exact Candidate recognition and semantic validation are deferred to an independent future Validator release and LiaisonScape integration review, if that work is separately selected and authorized. That review must assess Datasets accepted today with warnings that a newer Validator might reject with errors, including Import, Handoff, Export, preservation, and recovery behavior. No release or integration work starts from this decision. LS-DA-PRESERVE2 remains bounded to its Lighthouse JA path; Diagnostics D2 and Cross-Context Workspace Safety remain separately open or pending. Dimension Assessment `0.2.0` remains non-Stable, and no display/edit feature or cross-app UI rule is adopted.
