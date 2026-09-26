# E2R Public Sample Role Decision Preparation and Provenance/Rights Confirmation Audit 1

- Date: 2026-09-21
- Classification: **HUMAN SAMPLE-ROLE AND RIGHTS DECISION REQUIRED**
- Preceding checkpoint: `0aafcba docs: audit public release content and sample readiness`
- Scope: documentation/evidence audit and decision preparation only

This record prepares the Human decision; it does not select the final public
sample set, change any Dataset, update a User Guide, add a Hub entry, or
promote a Candidate/Experimental capability.

## Current repository and ownership evidence

| Area | Current evidence and ownership |
| --- | --- |
| NarrativeLine | `8495724`; Berlin Wall samples are application-owned under `src/sample/`; pre-existing `AGENTS.md` modification is preserved |
| LiaisonScape | `589e3bd`; Lighthouse samples are application-owned under `public/`; existing untracked research/temp state is preserved |
| E2R-SPEC | `0aafcba`; canonical examples and Self-Description are under `examples/`; two pre-existing modified research files and untracked `work/` remain untouched |
| E2R-Hub | `819442a`; current Hub exposes five sample families, EN/JA source links, and NarrativeLine/LiaisonScape Handoff links |
| e2r-validator | `00bcda7`; current CLI and library validate the inspected Core/sample structures |

The current Hub registry is evidence of exposure, not a grant of Dataset
rights. Its sample URLs point at the current public repository `main` paths;
deployed revision, base path, and public release-set acceptance remain later
release gates.

## Role decision matrix

The roles below are evidence-based candidate roles. They intentionally do not
rank or select a final release set.

| Sample | Current files and structure | NarrativeLine value | LiaisonScape value | Role candidates | Current boundary |
| --- | --- | --- | --- | --- | --- |
| Berlin Wall | `e2r-narrative-line/src/sample/berlin-wall-history.{en,ja}.e2r.json`; 9 Entities / 15 Events / 23 Relations; 15 dated History Events; 7 Entity-to-Entity Relations | Strong readable chronology with date and date-time precision | Meaningful but smaller Entity graph; additional Event-involved Relations remain in the Dataset | Stable-oriented representative; two-view representative | Factual source, authorship, description text, translation, and redistribution confirmation are incomplete |
| Apollo 11 | `e2r-spec/examples/apollo-11-mission.{en,ja}.e2r.json`; 9 / 12 / 66; 11 Entity-to-Entity and 55 Event-involved Relations; all Events have date-time History | Strong canonical chronology and time precision | Non-trivial graph, but dense enough to require visual readability confirmation | Stable-oriented representative; two-view representative | Factual source, authorship/adaptation, translation, and redistribution confirmation are incomplete |
| Lighthouse Restoration | `e2r-liaison-scape/public/lighthouse-restoration-demo.{en,ja}.e2r.json`; 10 / 11 / 28; 14 Entity-to-Entity and 14 Event-involved Relations | Usable mixed-precision chronology | Strongest current graph showcase; two self-Relations, a parallel Relation pair, direction/presentation variants, and Event-connected Relations | LiaisonScape Experimental showcase; possibly two-view supporting sample | Depends on LiaisonScape Presentation Draft; current JSON has no stored coordinate/layout extension; automatic display must not be described as stored coordinates |
| Ashen Crown | `e2r-spec/examples/ashen-crown.{en,ja}.e2r.json`; 10 / 12 / 57; 17 Entity-to-Entity and 40 Event-involved Relations; year-only History | Coarse but readable chronology | Rich fictional graph candidate | Fictional/Experimental graph showcase | Project authorship and redistribution authority need confirmation; no automatic “project-created” assumption |
| Titanic | `e2r-spec/examples/titanic-final-voyage.{en,ja}.e2r.json`; 13 / 18 / 40; 12 Entity-to-Entity and 28 Event-involved Relations | Strong chronology with date/date-time precision | Moderate graph | Stable-oriented chronology or two-view candidate | Factual sources, adapted descriptions, authorship, translation, and redistribution remain open; existing release-gate record calls this out |
| E2R Self-Description | `e2r-spec/examples/e2r-self-description.json`; 12 / 10 / 23; 13 Entity-to-Entity and 10 Event-involved Relations; 10 dated Events; Lineage Draft payload | Bounded E2R development chronology | Ecosystem graph of E2R components and applications | Dogfood/technical showcase; separately labeled Experimental/Dogfood entry | Informative, Experimental, non-normative; no Dataset license selected; Hub publication deferred |

The inspected EN/JA pairs have identical Core IDs, Relation topology, and
Extension keys. This establishes structural parity; it does not establish
translation authorship or legal reuse rights.

## `One dataset / two views.` representative decision

The current Hub Hero is supported structurally by more than one candidate, but
no single candidate should be selected by Codex.

* **Apollo 11** is the strongest canonical/stable-oriented candidate from the
  current E2R-SPEC set. Its 11 Entity-to-Entity Relations provide genuine graph
  content, while all 12 Events provide a clear Timeline basis. The graph is
  dense, so Human visual inspection must decide whether its relationship view
  is readable enough for a first public representative.
* **Berlin Wall** is the strongest application-owned candidate. It already
  serves NarrativeLine's sample role, has a readable 15-Event chronology, and
  has seven Entity-to-Entity Relations. It requires the same factual and
  translation-rights confirmation as other historical material.
* **Lighthouse** is a strong graph-specific companion, not automatically the
  stable two-view representative, because its graph Presentation Draft is an
  Experimental dependency and its current JSON has no stored coordinates.

Human decision options:

1. Select Apollo 11 as the primary stable-oriented two-view representative.
2. Select Berlin Wall as the primary representative because it is the
   application-owned Timeline sample, subject to rights confirmation.
3. Select a bounded pair: one primary representative plus a separately named
   graph-oriented companion. This keeps the Hub claim honest without forcing a
   single Dataset to demonstrate every capability.

No score or automatic final choice is assigned here.

## LiaisonScape Experimental showcase

The Lighthouse evidence confirms the requested graph properties:

* two self-Relations on `beacon`;
* a parallel `clara` → `thomas` pair;
* reverse, undirected, bidirectional, dashed, and dotted Presentation Draft
  variations;
* 14 Event-connected Relations retained in the Dataset; and
* automatic graph display remains the application behavior.

The sample does not contain stored coordinate/layout data in its current JSON.
Therefore the showcase may claim graph relationships and presentation
variation, but not authored/stored coordinates. Stored coordinates and an
automatic display are separate properties.

Ashen Crown is also a credible fictional/graph-rich showcase candidate, with
17 Entity-to-Entity Relations, but current repository evidence does not by
itself prove that every fictional text and translation is project-owned or
freely redistributable. It remains `HUMAN CONFIRMATION REQUIRED`.

## H2 `circa` boundary

None of the six inspected release candidates currently uses H2
`position` + `approximation: "circa"`. The mixed year/month/date/date-time
values in Lighthouse and other samples are History 1 precision, not H2 circa.

H2-POSITION-CIRCA is accepted as a bounded Candidate capability, while
History 2.0.0 remains NON-STABLE and broader authoring is deferred. The
decision boundary is therefore:

| Option | Public treatment | Consequence |
| --- | --- | --- |
| Stable-oriented initial release | Exclude H2 circa from representative samples and messaging | Lowest maturity risk; current samples already satisfy this boundary |
| Experimental showcase | Use a separate clearly labeled Candidate/Experimental fixture | Requires Human approval, explicit wording, and a separate sample role; does not promote H2 to Stable |
| Stable representative sample | Add H2 circa to a public representative | Not supported by current maturity evidence and requires a new public-support decision |

This audit does not edit any sample JSON or Guide wording.

## Provenance, authorship, translation, and rights confirmation

Current sample metadata contains Dataset identity/title, but not a complete
rights record. The following confirmations remain open:

| Category | Current evidence | Human confirmation needed |
| --- | --- | --- |
| Berlin Wall | Factual sample under NarrativeLine `src/sample/`; no complete source/rights record in Dataset metadata | Steward, factual sources, adapted expressive text, EN/JA authorship, redistribution authority |
| Apollo 11 | Canonical E2R-SPEC example; no complete source/rights record in Dataset metadata | Factual sources, NASA/public-domain assumptions where relevant, adapted descriptions, translations, redistribution |
| Titanic | Canonical example; prior release-gate reconciliation explicitly identifies provenance limitations | Source selection, factual/expressive content boundary, translations, redistribution authority |
| Lighthouse | Fictional application-owned sample with clear graph purpose | Confirm project authorship and that all EN/JA content is redistributable |
| Ashen Crown | Fictional E2R-SPEC example | Confirm project authorship, contributor ownership, translation rights, and redistribution |
| Self-Description | Project dogfood artifact; current document says no license is selected and Hub publication is deferred | Decide whether it remains internal/canonical dogfood or receives a separately formalized public treatment after S3 |
| Software repositories | LiaisonScape has MIT; E2R-SPEC has a role-based license map; prior release-gate evidence notes missing committed root licenses for NarrativeLine, Hub, and Validator | Separate software-license completion from Dataset-content rights and select the release repository set |

The accepted licensing policy direction does not itself clear a sample:
third-party or imported content keeps its original terms, and a repository
license does not relicense Dataset contents. No Metadata 1.1.0 or license
field is introduced by this audit.

For EN/JA pairs, the current files prove structural parity but not whether the
Japanese text is project-authored, machine-assisted, externally translated, or
otherwise licensed. That provenance category must be confirmed before public
redistribution.

## Self-Description decision options

The current artifact is valid under the current Validator and is documented as
`E2R Self-Description — Machine-Readable Dogfood`. It has a recognized Lineage
Draft dependency, ten dated Events, and an explicit non-normative boundary.
The current documentation and standards-license records agree that Hub
publication is deferred.

| Option | Treatment | Current assessment |
| --- | --- | --- |
| A | Keep canonical/internal dogfood only | **Aligned with current authority; no Hub change** |
| B | Add a clearly labeled Hub “About E2R / Experimental Dogfood” entry, not a normal Sample Gallery item | Requires Human approval after public URL, redistribution, wording, and licensing gates |
| C | Treat it as an Initial Public Release representative sample | Not recommended by current maturity/provenance evidence; would require explicit scope and rights decisions |

The current absence of a Hub Self-Description link is therefore intentional
or at least authority-consistent, not an unowned omission.

## Human decision packet

Human decisions needed before content-update implementation are:

1. primary stable-oriented representative: Apollo 11, Berlin Wall, or a
   bounded alternative;
2. whether Lighthouse and/or Ashen Crown is a separately labeled Experimental
   graph showcase;
3. whether H2 circa is excluded from the initial stable release or shown only
   through a separately labeled Candidate fixture;
4. whether Self-Description stays canonical-only, receives a labeled dogfood
   entry, or remains outside the initial public release;
5. steward/source/rights/translation confirmations for every selected sample;
6. Dataset-content license/credit notices and the software repository release
   set; and
7. final public URL/revision set and later authorization for push, deploy,
   release, and publication.

Copyable Human decision text:

> I approve the selected Initial Public Release sample role(s), the separate
> Experimental graph showcase boundary, the H2 circa treatment, and the
> Self-Description placement option recorded in this packet. I confirm the
> listed authorship, translation, source, redistribution, attribution, and
> Dataset-content license boundaries for the selected samples. This approval
> does not authorize sample JSON, User Guide, Hub, runtime, Validator, schema,
> push, deploy, or publication changes beyond a separately scoped follow-up.

## Next bounded checkpoint

After Human decisions and rights evidence are recorded, the next bounded work
is a content-only update of the confirmed User Guides/Hub wording and, only if
selected, the sample-role/public-entry documentation. A separate deployed
public-URL/Handoff acceptance must follow. No H2 Candidate promotion or
Self-Description Gallery entry is implied by this audit.

## Changes and validation

This checkpoint changes only this decision-preparation document and the
roadmap's current-status reference. No sample JSON, User Guide, Hub source,
application source, Validator artifact, schema, Core, Extension, research, or
existing dirty file was changed.

Validation/evidence performed:

* current repository HEAD/status/ownership inspection;
* EN/JA Core ID, Relation topology, and Extension-key comparison for all five
  paired sample families;
* object-count, History-precision, Entity-to-Entity/Event-involved Relation
  inventory for all candidates;
* Lighthouse self-Relation, parallel-Relation, Event-connected, and
  Presentation Draft inspection;
* current Hub registry/source inspection;
* existing E2R-SPEC `npm run validate` and e2r-validator 117/117 test evidence
  from the preceding checkpoint.

No runtime/browser mutation, sample change, guide change, Hub change, push,
deploy, release, or publication was performed. Existing unrelated dirty work
remains preserved.
