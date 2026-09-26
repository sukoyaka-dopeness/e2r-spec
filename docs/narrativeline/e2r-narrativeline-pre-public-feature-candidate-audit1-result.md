# E2R NarrativeLine Pre-Public Feature Candidate Audit 1

Date: 2026-09-21

Classification: **DOCUMENTATION-ONLY / RECENT ACCEPTANCE SYNCED / HUMAN FEATURE SELECTION REQUIRED**

## Purpose and authority

This record establishes a current planning baseline before the E2R/NarrativeLine
main line resumes. It reconciles recent Human-accepted application work with the
older NarrativeLine next-phase and initial-public-release records, then separates
implementation candidates from audits, release governance, and deferred research.

Current application source, accepted runtime evidence, the current roadmap, and
the later release-readiness reconciliations take precedence over older `NEXT`,
`OPEN`, or `HUMAN DECISION REQUIRED` wording.

This is a planning record only. It does not authorize application, CSS, test,
schema, Core, Extension, deployment, or publication changes.

## Current repository evidence

| Repository | Current evidence used | Scope note |
| --- | --- | --- |
| `e2r-spec` | `main` at `5d99268` | Existing dirty exploratory research and untracked `work/` are preserved and are not part of this checkpoint. |
| `e2r-narrative-line` | `main` at `8495724` | Existing dirty `AGENTS.md` is preserved. Recent H2 and geometry commits are present. |
| `e2r-liaison-scape` | `main` at `589e3bd` | Existing untracked research/temporary material is preserved. Recent toolbar and ordinary-control commits are present. |
| `e2r-hub` | `main` at `445860e` | Shared favicon asset checkpoint is present; no Hub runtime change is authorized here. |

No repository outside this documentation checkpoint was modified.

## Recent Human acceptance synchronization

The following bounded work is current accepted evidence and must not be shown as
an active next runtime checkpoint:

| Area | Current accepted result | Authority |
| --- | --- | --- |
| H2 `circa` preservation and Timeline presentation | Existing Event date/time is preserved; the approximation marker is placed once on the most specific visible Timeline row. JA date+time presentation is `1989-11-09` / `18時53分頃`; History 2.0.0 remains Candidate. | NarrativeLine `02592a0`, `3efa637`; current H2 scope-closure records |
| LiaisonScape viewport toolbar | Compact canvas-utility presentation and pointer-versus-keyboard focus/tooltip treatment were accepted while drag, disclosure, zoom, reset, 720px, and keyboard contracts were retained. | LiaisonScape `8743fb0` |
| Cross-App ordinary/detail control geometry | LiaisonScape More/その他 centering and selected-entity action geometry, NarrativeLine related-card and destructive action geometry, and the bounded Timeline Edit / Entity Detail form-width correction were accepted. | LiaisonScape `589e3bd`; NarrativeLine `e4c2dcb`, `df69e8e`, `8495724` |

These results close the corresponding bounded defects. They do not automatically
close a broader Hub-reference visual-language experiment or authorize a blanket
Cross-App CSS change.

## Superseded or closed historical candidates

The following older planning items are not current implementation candidates
unless new evidence reopens them:

| Historical item | Current disposition |
| --- | --- |
| Long Timeline navigation, visible Add Event reachability, More/Open/Export, and Back-to-Top | Closed/accepted at the recorded boundaries. |
| Dataset title editing and title/summary/action hierarchy | Implemented and accepted at the bounded application responsibilities; do not reopen as a missing capability. |
| Locale consumer/shell behavior and product identity/document-title/favicon work | Implemented or accepted at their recorded boundaries; any remaining release concern is evidence synchronization, not an assumed runtime gap. |
| H2-POSITION-CIRCA and Dataset-wide H1-to-H2 upgrade | Accepted/closed bounded scope. Broader H2 authoring remains deferred. |
| Event identity and bounded Detail action layout/geometry | Accepted at the recent bounded checkpoints. |
| Cross-app Name/form geometry audit | The concrete NarrativeLine form-width issue was corrected by `8495724`; the older audit wording is historical for that defect. |

## Current candidate inventory

### 1. Public User Guide, sample, and provenance refresh

Classification: **AUDIT / DESIGN FIRST — REQUIRED BEFORE INITIAL PUBLIC RELEASE**

User-visible benefit: public users receive guides and samples that describe the
actual accepted capabilities, locale behavior, handoff paths, maturity status,
and ownership accurately.

Current authority is
`docs/e2r-initial-public-release-cross-app-follow-ups-reconciliation1-result.md`
and the remaining-gates reconciliation. The bounded audit covers the
NarrativeLine Berlin Wall sample and guides, the LiaisonScape Lighthouse sample
and guides, E2R-SPEC canonical examples, and Hub registry/cards/links. It must
check EN/JA parity, current labels and flows, public URL/Handoff reachability,
rights and provenance, redistribution eligibility, and Stable versus
Experimental claims.

This is the clearest next bounded checkpoint. It is not permission to change a
sample, guide, Hub registry, or History 2 capability. Human must first select
the supported initial public surface and resolve sample/translation rights.

Core, Extension, and schema changes: **No**. Cross-App coordination:
**Yes, ownership and evidence only**.

### 2. Initial release-set, licensing, and public-state readiness

Classification: **PROMISING / HUMAN SCOPE DECISION REQUIRED — RELEASE GOVERNANCE,
NOT A RUNTIME FEATURE**

User-visible benefit: a public release has an explicit revision set, stewardship
boundary, repository licensing status, sample rights/provenance decision, and
verifiable public links.

The remaining-gates reconciliation identifies repository licensing confirmation,
sample rights/stewardship, exact cross-repository revision selection, and later
push/deploy/public acceptance as remaining gates. These are not implementation
blockers inside NarrativeLine, but they determine what may be advertised and
released. Human approval is required for the supported release set and all
public transactions.

Core, Extension, and schema changes: **No for the readiness decision**.
Cross-App coordination: **Yes**. This item is a release track rather than a
new product feature.

### 3. Broader Cross-App restrained visual language

Classification: **AUDIT / DESIGN FIRST — NOT CURRENTLY AUTHORIZED FOR IMPLEMENTATION**

User-visible benefit: role-equivalent ordinary controls, dialogs, menus, and
shell surfaces can feel quieter and more consistent while preserving focus,
touch targets, destructive distinction, and application-specific structure.

Recent bounded control-density, toolbar, and Detail corrections are accepted,
but the roadmap's broader Hub-reference Visual Style/Flatness experiment remains
a separate design question. The next step, if Human selects it, is an evidence-
led browser audit of remaining role-equivalent surfaces, not a universal token,
shared CSS package, or app-wide rewrite.

Core, Extension, and schema changes: **No**. Cross-App coordination:
**Required**. Human must choose whether the remaining visual differences justify
another bounded audit and which surface, if any, owns a concrete defect.

### 4. Metadata / Object ID / title-action affinity

Classification: **AUDIT / DESIGN FIRST — CROSS-APP FOLLOW-UP, NOT A CONFIRMED
PRE-PUBLIC BLOCKER**

User-visible benefit: long identifiers, metadata, titles, values, and their
actions remain understandable, verifiable, and visually grouped across detail
surfaces without sacrificing traceability.

The older NarrativeLine planning record keeps this as a later Cross-App visual
question. Current source is functional and recent title/identity and Detail
geometry work must not be reopened. A bounded audit may be selected only for a
reproducible current issue involving wrapping, overflow, full-ID verification,
copy affordance, focus/touch access, or action-target clarity. The
`ai-knowledge` Object ID hypothesis is not by itself an E2R-wide requirement.

Core, Extension, and schema changes: **Not required for an audit**. Cross-App
coordination: **Yes**. No implementation is selected without current browser
evidence and Human scope confirmation.

### 5. Public Handoff and interoperability evidence

Classification: **AUDIT / DESIGN FIRST — RELEASE-INTEGRATION WORK**

User-visible benefit: users can follow the documented learn, discover, open,
edit, export, and return-to-documentation journey with preserved Core IDs,
unknown fields, supported/unsupported Extensions, locale variants, and clear
application ownership.

Dataset Handoff v0 and the bounded cross-application preservation behavior are
accepted. What remains is release evidence and public-state verification, not a
new Handoff semantic redesign. Direct Hub Handoff, private/authenticated Handoff,
multi-Dataset workflows, and new interoperability semantics remain outside the
current bounded release scope.

Core, Extension, and schema changes: **No for the evidence audit**.
Cross-App coordination: **Required**. Human must decide the exact public
workflow and release set before any implementation or deployment action.

### 6. Metadata 1.1.0 license declaration

Classification: **PROMISING / HUMAN SCOPE DECISION REQUIRED — SEPARATE SPECIFICATION
TRACK**

The accepted research direction is ready for a Metadata 1.1.0 draft, with an
optional `metadata.license` declaration and explicit separation from
repository/software licensing. It is not a current NarrativeLine runtime
requirement or a reason to reopen accepted Dataset behavior. Selecting it would
require a separate E2R-SPEC/Metadata scope decision, examples, validation, and
application-preservation review.

Core changes: **No in the current design direction**; Extension/Metadata
changes: **Potentially, only after separate authorization**. Cross-App
coordination: **Potentially**.

## Deferred or not a pre-public priority

The following remain future research/specification or explicitly deferred work,
not current NarrativeLine implementation candidates:

- History 2 broader authoring: bounded points, temporal extents, multiple
  assertions, Relative Time authoring/solving, H2-to-H1 conversion, Entity or
  Relation History authoring UI, and History 2 Stable promotion.
- NarrativeLine display-order reordering and related chronology semantics.
- Relative Time, intervals, durations, aliases, confidence, richer temporal
  models, and History vNext.
- Source/Citation, external identifiers, Wikidata/import, provenance/confidence
  enrichment, Dictionary evolution, and external vocabularies.
- Group Entity, multiple-Dataset comparison/merge/lineage, Perspective, broad
  Auto Layout, PWA/offline capability, and AI-assisted authoring/repair.

These may become future candidates after their own evidence and Human scope
decisions, but they are not silently promoted by this audit.

## Planning conclusion

No current evidence authorizes a new NarrativeLine runtime feature as a
`READY / BOUNDED IMPLEMENTATION CANDIDATE`. The next bounded action is the
documentation/content/provenance audit for the initial public surface, followed
by the release-set/licensing/public-state decision record. A broader visual
language or Object ID audit may be selected separately if Human wants another
pre-public quality pass; neither is an automatic blocker from the accepted
corrections above.

This conclusion preserves the existing Human decisions, keeps H2 Candidate
status unchanged, and separates release governance from future product design.

## Validation and non-changes

- Current `roadmap.md`, the NarrativeLine next-phase planning record, the two
  initial-public-release reconciliations, relevant research decisions, and
  current application commit evidence were reviewed.
- No application source, CSS, runtime, test, schema, Core, Extension, sample,
  guide, Hub, or Validator file was changed.
- Existing `AGENTS.md`, exploratory research modifications, and untracked
  `work/` material were preserved.
