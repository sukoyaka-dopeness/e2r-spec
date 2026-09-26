# E2R Initial Public Release H2 Circa and Provenance UI Readiness Audit 1

- Date: 2026-09-21
- Classification: **HUMAN DECISION REQUIRED — BOUNDED H2 TECHNICAL BASELINE GREEN; STABLE REGISTRATION AND SAMPLE PROVENANCE/PUBLICATION SCOPE REMAIN OPEN**
- Scope: documentation, specification-readiness, and UX-readiness audit only
- No runtime, schema, Validator, sample Dataset, User Guide, or UI change was made

This record reconciles the recent Human decisions with the current
specification, application, Validator, sample-provenance, and release-gate
evidence. It is a current decision record; older planning entries remain
historical unless this record or a later acceptance record supersedes them.

## Human decisions recorded

### Lighthouse remains an ordinary Sample Gallery sample

Lighthouse Restoration remains in the ordinary current Sample Gallery. Its use
of the LiaisonScape Presentation Draft does not by itself require a Hub
`Experimental` badge, a separate Gallery, or relocation. The current relation
presentation variants (including reverse/undirected/bidirectional display,
line styles, parallel relations, and self-relations) are application
presentation evidence, not a promise that the Presentation Extension is
Stable or that the same visual treatment is normative E2R semantics.

The current graph showcase boundary is preserved: Lighthouse is a fictional
project sample with a Presentation Draft payload, while the ordinary sample
card remains the public entry treatment. Any future copy or provenance UI must
avoid implying general Stable Presentation support.

### H2 `position + circa` is the bounded Stable-readiness audit surface

The accepted bounded surface is one History 2 `position` assertion with
optional position-level `approximation: "circa"`, explicit H1-to-H2 Dataset-
wide upgrade, safe exact editing, and the accepted Timeline projection. This
does not reopen or expand History 2 authoring. The following remain outside
scope and deferred: `bounded-point`, `temporal-extent`, multiple assertions,
Relative Time authoring/solving, Entity/Relation History authoring UI, H2 to H1
conversion, and broader History 2 authoring.

### Provenance and license information must be reachable without conflation

Sample-specific source, author/steward, translation, redistribution, and
attribution information should eventually be reachable from the Hub sample
cards and from the built-in sample entry points in NarrativeLine and
LiaisonScape. A Home screen should link to sample information rather than
showing full license text by default. Software/application licensing remains a
separate responsibility from Dataset-content licensing.

No Metadata 1.1.0 field, sample JSON edit, or runtime/UI implementation is
authorized by this audit.

### Self-Description placement remains undecided

E2R Self-Description remains a dogfood/technical showcase with publication
deferred. Its placement in the public Hub is not selected here and must not be
inferred from the other sample decisions.

## H2 `position + circa` Stable-readiness audit

### Current authority and technical result

| Surface | Current evidence | Result |
| --- | --- | --- |
| Specification | [`extensions/history-extension-2.0-draft.md`](../../extensions/history-extension-2.0-draft.md) defines exact History `2.0.0`, declaration-gated Features, position-level `circa`, and explicit non-goals | Bounded semantics are sufficiently explicit for this audit; the version remains Draft/Candidate and non-Stable |
| Schema and Validator | [`schemas/extensions/history-2.0-draft.schema.json`](../../schemas/extensions/history-2.0-draft.schema.json) and [`scripts/validate-history-2.0-draft-schema.mjs`](../../scripts/validate-history-2.0-draft-schema.mjs) cover exact declarations, Feature matching, valid/invalid fixtures, upgrade/refusal boundaries, and unknown-field handling | No bounded schema/Validator mismatch was found; support is candidate-gated, not Stable registration |
| NarrativeLine writer/read/edit/export | [`h2-position-circa-bounded-authoring-implementation-result.md`](https://github.com/sukoyaka-dopeness/e2r-narrative-line/blob/main/docs/h2-position-circa-bounded-authoring-implementation-result.md) and [`history-2-dataset-wide-upgrade-implementation-result.md`](https://github.com/sukoyaka-dopeness/e2r-narrative-line/blob/main/docs/history-2-dataset-wide-upgrade-implementation-result.md) record accepted bounded behavior, atomic upgrade, exact editing, preservation, export/reload/re-import, and EN/JA acceptance | Bounded application contract is accepted/closed; no new runtime blocker was identified in this documentation audit |
| Migration contract | Explicit upgrade preserves Civil Time, time zone/offset/granularity, assertion identity, temporal order, and unknown data where lossless; unsafe unknown/unsupported/mixed input is refused | Stable-safe behavior is bounded by refusal rather than lossy migration |
| Validator/package maturity | [`e2r-validator/docs/mvp-status.md`](https://github.com/sukoyaka-dopeness/e2r-validator/blob/main/docs/mvp-status.md) states that History `2.0.0` is exact-version, declaration-gated Candidate support; prepared `0.5.0` is not the published package, while `0.4.0` is latest published | Release/package maturity remains open |

The technical result is therefore **bounded implementation, migration, and
validation evidence green**. `circa` is a position-level normative value; its
localized Timeline marker is application presentation and does not introduce a
new temporal meaning.

### Remaining Stable blockers and non-blockers

Classification: **STABLE PROMOTION BLOCKED — EXPLICIT SPECIFICATION MATURITY /
REGISTRATION DECISION REQUIRED**.

The blocker is not a discovered loss-of-data defect or a missing bounded
`circa` implementation. The current blocker is governance and maturity:

1. History `2.0.0` is still a Draft Candidate and has no current Stable
   registration/lifecycle decision.
2. A Human must decide whether this bounded surface may be registered or
   promoted independently, or must remain Candidate until a broader History 2
   maturity gate is complete.
3. Stable promotion would require an explicit version/declaration contract,
   Validator/package release boundary, and public-support decision. Codex must
   not infer those decisions from the green bounded tests.

The following are not blockers for this bounded audit and must not be added as
hidden prerequisites: bounded points, temporal extents, multiple assertions,
Relative Time, Entity/Relation authoring, H2-to-H1 conversion, or generalized
History 2 authoring. They remain deferred unless reopened by a new Human scope
decision.

## Dataset provenance and license UI readiness

### Current access and authority

The Hub currently exposes sample cards, Handoff links, raw Dataset/source links,
and a `Sample Dataset sources` documentation surface. NarrativeLine and
LiaisonScape expose built-in sample entry points and general Credits, but the
current source evidence does not show a sample-specific `Sample info` route
that reaches source, translation, redistribution, and Dataset-license
details. The three applications therefore do not yet provide one consistent
sample-provenance access path.

The strongest existing authority is the centralized e2r-spec provenance record:
[`docs/public-sample-provenance.md`](../public-sample-provenance.md), supported by
the repository policy in
[`research/standards-licensing/decisions/e2r-standards-license-decision.md`](../../research/standards-licensing/decisions/e2r-standards-license-decision.md)
and the separate Metadata license design
[`research/metadata/decisions/dataset-license-metadata-design.md`](../../research/metadata/decisions/dataset-license-metadata-design.md).

### Recommended architecture

The least duplicative bounded architecture is:

1. Keep a centralized, repository-owned sample provenance registry/page in
   e2r-spec as the authority for sample source, author/steward, translation,
   redistribution, attribution, revision/path, and content-license status.
2. Let the Hub link each sample card, or a central sample index, to that
   authority with `Sources / License` wording.
3. Let NarrativeLine and LiaisonScape built-in sample entry points reach the
   same authority with `Sample info` wording.
4. Keep full license text off Home by default and keep software licenses
   separate from Dataset-content rights.

This is a recommendation for a later Human-scoped implementation checkpoint,
not an authorization to add a schema field or duplicate legal claims in three
applications. Per-sample standalone documents can remain linked from the
central record when useful; duplicating independent rights statements in each
application would create drift.

## Current rights and provenance status for the six named samples

The later S3 formalization record supersedes the older pre-formalization
`REDIST-B` classifications. It records the five public sample pairs (ten JSON
files) as **REDIST-A — READY UNDER CURRENT PROJECT AUTHORITY** for bounded
sample-refresh purposes. This is not legal advice, does not relicense external
facts, and does not close the final public-release gate.

| Sample | Current evidence | Still requires Human/release confirmation |
| --- | --- | --- |
| Berlin Wall | NarrativeLine-owned factual project-authored Dataset; EN/JA pair and bounded provenance record exist; external factual basis remains excluded from any project license claim | Final steward/source confirmation, translation authority, attribution/redistribution wording, and selected release revision |
| Apollo 11 | Canonical e2r-spec factual project-authored Dataset; NASA factual references and EN/JA structural parity are recorded | Final source/steward and translation/redistribution confirmation; release-set selection |
| Lighthouse Restoration | Fictional project-created sample; EN/JA provenance is recorded; ordinary Gallery treatment is retained; Presentation Draft remains an application maturity boundary | Final sample authority/translation confirmation and wording that does not imply Stable Presentation support |
| Ashen Crown | Fictional project-created e2r-spec Dataset; EN/JA project-adopted localization is recorded | Final project authority/translation confirmation and release-set selection |
| Titanic | Factual project-authored Dataset with recorded reference basis and EN/JA provenance record | Final factual-source/steward confirmation, translation/attribution wording, and release-set selection |
| E2R Self-Description | Separate dogfood/technical Dataset; current policy target is project-created content, but public Hub publication remains deferred | Human placement/publication decision, final provenance/license confirmation, public URL and release-set decision |

Structural EN/JA parity is evidence of matching IDs/topology/extension keys,
not proof of translation authorship or legal permission. Dataset-content
license decisions must remain distinct from the MIT/software licensing
questions for application and Validator repositories.

## Current Human decisions still required

1. Keep History `2.0.0` Candidate, or authorize a bounded Stable-scope,
   including the required registration/version/package boundary.
2. Approve the centralized provenance registry/page as the shared authority,
   and approve the exact Hub/NarrativeLine/LiaisonScape link wording and
   placement.
3. Confirm the exact public release sample set, steward/rights/translation
   wording, and public revisions/URLs.
4. Decide Self-Description placement separately from the five public sample
   pairs.
5. Resolve software-repository licensing confirmation and every
   push/tag/deploy/publication action through the existing release gates.

## Next bounded checkpoints

The next implementation candidate, after the relevant Human decisions, is a
documentation-first provenance registry/page in e2r-spec followed by bounded
links from Hub, NarrativeLine, and LiaisonScape. A separate H2 maturity/
registration decision record may follow; it should not implement broader H2
features or perform Stable promotion implicitly.

No current evidence requires reopening accepted H2-POSITION-CIRCA behavior,
changing schema/Validator/runtime, changing sample JSON, or adding full license
text to Home.

## Validation and preservation

Validation for this documentation checkpoint:

- current e2r-spec `npm run validate`: passed;
- current e2r-validator `npm test`: 117/117 passed;
- Validator CLI checks for Self-Description, Apollo 11, Berlin Wall, and
  Lighthouse remained valid under the recorded warning/diagnostic boundary;
- current H2 specification, schema, Validator status, NarrativeLine result,
  migration result, sample provenance, Hub source, and release-gate records
  were cross-checked;
- `git diff --check` was run for the final documentation diff.

Only this result document and the roadmap current-status reference are changed.
The pre-existing e2r-spec modifications to two research files and untracked
`work/` are preserved and are not part of this checkpoint. No application
source, tests, CSS, schema, Validator artifact, sample JSON, User Guide,
historical acceptance record, or existing research file was changed.
