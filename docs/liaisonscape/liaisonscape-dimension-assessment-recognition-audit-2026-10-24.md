# LiaisonScape Dimension Assessment recognition and functional support audit

Recorded: 2026-10-24 JST

Status: **LIAISONSCAPE-LOCAL HUMAN DESIGN DIRECTION ADOPTED (BOUNDED) / VALIDATOR 0.7.0 RETAINED BY HUMAN / FUTURE RECOGNITION DEFERRED / NO IMPLEMENTATION ADOPTED**. The audit-stage options and pending questions below record the state before the subsequent Human decisions.

## Authorities and current evidence

- The [Dimension Assessment Candidate 0.2.0](../../extensions/dimension-assessment-extension-candidate-0.2.0.md) is Human-adopted but non-Stable. Its exact `specVersion` governs interpretation; 0.1.0 and 0.2.0 must not be conflated. Dimension and Assessment data are Dataset content, while charts and selection are application projections.
- The [Specification Extension](../../extensions/specification-extension.md) declares used specifications and versions. It does not declare an application's capabilities.
- E2R Validator checkout source `655954d3186d7a1bca24b3f0b81edec76800c925` recognizes the Dimension Assessment identifier, lists exact 0.1.0 and 0.2.0 versions, and invokes its semantic validator. **This is not the Validator implementation currently installed in LiaisonScape.** LiaisonScape pins the published package `@sukoyaka-dopeness/e2r-validator@0.7.0`; its installed `extension-validator.js` lacks this identifier in the recognized set and its installed `specification-validator.js` lacks the Candidate versions. A direct validation of the bundled Lighthouse JA Dataset returned `unknown_extension` at `/extensions/draft.github.sukoyaka-dopeness.dimension-assessment` and `specification_unavailable` at `/extensions/draft.github.sukoyaka-dopeness.specification/uses/3/extension`, which declares this Candidate `0.2.0`; Core validation remained valid. Do not treat newer adjacent-checkout code as deployed application behavior.
- LiaisonScape source `33910d28368c390ff437fce12e03920e60a1dbf9` loads through its pinned Validator, preserves the Dataset object, and serializes it for Export. Its `prepareDatasetForExport` conservatively leaves unknown Extension combinations and existing Specification declarations untouched. No Dimension Assessment presentation or editor was found in the application source. Its [LS-DA-PRESERVE2 record](https://github.com/sukoyaka-dopeness/e2r-liaison-scape/blob/33910d28368c390ff437fce12e03920e60a1dbf9/docs/dimension-assessment-ui-preservation-human-acceptance-2026-10-22.md) accepts only the reviewed Lighthouse JA Handoff, Entity/Relation description edit, UI Export, comparison and re-import path. The earlier incomplete Export observation remains historical.
- ParameterPlotter `0.1.1` supports Dimension and Assessment authoring and four comparison views under the Candidate. That responsibility does not transfer to LiaisonScape simply because both consume E2R Datasets.

## Audit-stage distinctions and choices

The options and pending questions in this section record the audit before the subsequent Human design direction below; they are not the current UI decision.

| Layer | Current evidence | Boundary |
| --- | --- | --- |
| Identifier and exact-version recognition | The adjacent Validator checkout recognizes both Candidate versions, but LiaisonScape's pinned 0.7.0 package does not. | No LiaisonScape runtime recognition or capability presentation is established. |
| Preservation | The bounded Lighthouse JA actual Export and re-import comparison reported no unintended Dimension Assessment changes. | No general guarantee for every Dataset, edit, delete, or Extension. |
| Display | LiaisonScape's graph and Detail UI do not present Dimension definitions or Assessment values. | A new read-only view would be new product work, not mere recognition. |
| Edit | No Dimension Assessment editing path is present. | Editing requires a separate product and safety decision. |
| Unknown or unavailable | The pinned Validator emits `unknown_extension` for the Lighthouse JA Dimension Assessment payload and `specification_unavailable` for its exact declaration. Both are warnings; the Dataset was valid and preservation was accepted only on the reviewed path. | These warnings accurately reflect current installed Validator recognition limits. Do not suppress them without a separately approved version and behavior transition. Diagnostics D2 remains OPEN. |

The first design choice is whether to bring a published, reviewed Validator version with exact Candidate recognition into LiaisonScape or to define a narrower application-local informational mapping while its pinned Validator continues to warn. Either path requires a dependency/behavior review; the newer checkout is not by itself a deployable package decision. A later UI distinction between “recognized Candidate data without LiaisonScape display/edit capability” and genuinely unknown or unavailable data would need EN/JA wording, diagnostic-path attribution, tests for mixed and unsupported versions, and evidence that Import/Export preservation and warning visibility remain intact. No such dependency change, UI or taxonomy is approved here.

Human should decide whether LiaisonScape needs that informational status at all, where it belongs in the existing Diagnostics/UI, and whether read-only Dimension Assessment display is a separate later candidate. Editing, Validator or Specification changes, Stable promotion, and Diagnostics D2 closure require independent decisions. The current preservation acceptance and existing warnings remain unchanged.

## Subsequent Human design direction — 2026-10-24 JST

Human decided for **LiaisonScape only** that recognizing an Extension identifier and exact version is distinct from providing its features. Recognition without display or editing support does not, by itself, require an ordinary UI status, warning, or new control. LiaisonScape uses shared E2R Datasets for its own purpose; lack of Dimension Assessment presentation or editing is not inherently an error. The earlier audit-stage informational UI option is therefore **not selected**. This decision does not establish a common UI rule for other E2R applications.

User-facing notice should follow an actual effect on the user's work, such as possible data loss, save or Export refusal, an unavailable operation, a real validation error, or a compatibility issue requiring a decision. Preserve unsupported data under existing safety boundaries and disclose any limit when preservation cannot be assured. Keep technical Diagnostics separate from ordinary user notifications; do not suppress legitimate Validator findings merely to remove visible warnings.

The pinned published Validator `0.7.0` still lacks this Candidate recognition, and the observed Lighthouse JA `unknown_extension` and `specification_unavailable` warnings remain current technical evidence. Whether to adopt a published Validator version with compatible exact-version recognition requires separate package, behavior, and Dataset-preservation review. The adjacent checkout alone does not establish a deployable dependency. This direction authorizes no dependency update, warning suppression, Dimension Assessment display/edit feature, Candidate Stable promotion, or Diagnostics D2 closure. LS-DA-PRESERVE2 remains accepted only for its reviewed Lighthouse JA path.

The subsequent [published-package compatibility review](liaisonscape-validator-dimension-assessment-compatibility-review-2026-10-24.md) found no newer published Validator than `0.7.0` and recommended retaining it. Human then formally adopted that near-term retention decision: the two Lighthouse JA warnings remain, while a future Validator release and LiaisonScape integration review are deferred as separate work. No dependency update or implementation is authorized by this decision.
