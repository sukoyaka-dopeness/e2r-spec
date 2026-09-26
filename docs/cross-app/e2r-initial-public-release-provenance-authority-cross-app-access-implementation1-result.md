# E2R Initial Public Release Provenance Authority and Cross-App Access Implementation 1

Date: 2026-09-21

Status: Implemented bounded checkpoint; Human release gates remain

## Classification

**IMPLEMENTED / CENTRAL PROVENANCE AUTHORITY + BOUNDED CROSS-APP ACCESS**

This checkpoint records the current Human decisions and exposes the existing
provenance authority from the three application entry points. It does not
declare public release, grant a legal warranty, or reopen deferred History 2
authoring.

## Authority and sample set

The central authority is:

`docs/public-sample-provenance.md`

The ordinary Initial Public Release Sample Gallery remains the five-family set:

1. Berlin Wall
2. Apollo 11
3. Lighthouse Restoration
4. Ashen Crown
5. Titanic

Lighthouse remains an ordinary Gallery sample even though its current
LiaisonScape relation presentation uses the Presentation Draft. It is not
promoted to Stable E2R semantics by this checkpoint.

E2R Self-Description is a separate dogfood/technical entry, not a sixth
ordinary Gallery card. The bounded entry may open the canonical
`examples/e2r-self-description.json` Dataset in NarrativeLine and
LiaisonScape through the existing Handoff/source architecture. It remains
non-normative and does not require a prominent Experimental warning.

## Provenance and rights boundary

The current project creation provenance wording is:

> E2R project-created, AI-assisted/generated with OpenAI Codex under Human
> direction and review.

This records project creation and review provenance. It is not a claim that
external factual material was created by E2R, and it does not replace
source-specific attribution or release authority.

For Berlin Wall, Apollo 11, and Titanic, this checkpoint deliberately does not
invent concrete sources used at creation. Their factual-reference boundary
remains explicit until evidence-backed citations and final steward review are
available. Lighthouse Restoration and Ashen Crown remain fictional. The
Self-Description is project dogfood based on the E2R repository, documents,
and development history.

The current authority distinguishes software repository licensing from Dataset
content licensing. Eligible project-created sample/example/dogfood content is
the policy target for CC0 1.0, but this record does not present that target as
a completed legal grant where the applicable release authority has not yet
confirmed it for the selected public revision. `metadata.license` remains
unchanged; the Metadata 1.1.0 candidate is not implemented by this checkpoint.

## Implemented access

### Hub

Each of the five ordinary sample cards exposes `Sources / License`, linking to
the central authority. The existing sample-source section also links there.
The separate Self-Description entry provides:

- a NarrativeLine Handoff/source link;
- a LiaisonScape Handoff/source link; and
- a Self-Description information link to the central authority.

### NarrativeLine and LiaisonScape

The built-in sample entry on each Home surface exposes localized `Sample info`
(`Sample info` / `サンプル情報`) linking to the same central authority. No
sample JSON content, H2 behavior, schema, Core, Extension, Validator, or User
Guide content was changed.

## Separate H2 workstream

Human approval of H2 Stable registration is recorded as a separate workstream.
This checkpoint does not change History 2 schema or registration, the
Validator, packages, or NarrativeLine behavior. Broader History 2 authoring
remains deferred.

## Validation and remaining gates

The bounded implementation was validated with:

- Hub build and lint: PASS;
- Hub integration test: PASS (1/1);
- NarrativeLine build and lint: PASS;
- NarrativeLine serial test run: PASS (257/257);
- LiaisonScape build and lint: PASS;
- LiaisonScape test run: PASS (636/636).

The LiaisonScape test environment emitted non-fatal jsdom
`attachEvent`/`detachEvent` diagnostics. No test assertion failed. Earlier
parallel Vite runs also exposed the known port/cache cleanup race; the
serial NarrativeLine run was green and is the authoritative result here.

The remaining Human/release gates are factual-source citation and review,
final Dataset-content rights/steward confirmation, H2 Stable registration,
and any separately authorized rollout, deployment, or publication. Browser
visual acceptance of the new links and Self-Description entry remains a
release-facing confirmation; this checkpoint does not claim that acceptance or
publication has occurred.

## Scope and provenance

Changed application files are limited to the Hub sample access presentation
and test, NarrativeLine Home/localized copy, and LiaisonScape Home/localized
copy. The central provenance record and this result/roadmap status are the
only e2r-spec documentation changes for this checkpoint. Pre-existing dirty
research and `work/` content were preserved and not staged.
