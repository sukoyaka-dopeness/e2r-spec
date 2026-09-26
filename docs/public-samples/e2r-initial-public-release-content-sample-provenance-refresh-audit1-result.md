# E2R Initial Public Release Content, Sample, and Provenance Refresh Audit 1

- Date: 2026-09-21
- Classification: **HUMAN SAMPLE-SCOPE DECISION REQUIRED / PROVENANCE AND RIGHTS GATE BEFORE CONTENT UPDATE**
- Scope: read-only audit and bounded next-phase planning; no application, sample, Hub, Validator, schema, or release mutation

## Executive result

The current User Guides and Hub registry describe the main supported workflows
well enough to make a bounded content refresh possible, but they are not yet a
final public-release contract. LiaisonScape's guide does not document the
current Dataset-title editing path or the secondary `More` actions, and both
application guides need a final EN/JA/current-label pass for locale and
secondary-action wording.

The current sample set is structurally usable and Validator-valid, but the
sample files do not carry the source, authorship, translation, license, or
redistribution record needed to select a final public release set. The
existing rights reconciliation specifically leaves factual-sample and
software-license confirmations open. No sample was changed by this audit.

The E2R Self-Description Dataset remains an informative, experimental,
non-normative dogfood artifact. Its current JSON is valid and useful for
technical inspection, but its Hub publication remains deferred pending the
standards/document licensing decision, redistribution status, public URL, and
final public wording. It must not be silently presented as a Stable public
sample.

## Current evidence boundary

The audit used the current working trees and current source files rather than
older planning wording:

| Area | Current evidence |
| --- | --- |
| E2R-SPEC | `dd69875`; two unrelated exploratory files remain modified and `work/` remains untracked; no files in that existing dirty scope were changed |
| NarrativeLine | `8495724`; the pre-existing `AGENTS.md` modification was preserved |
| LiaisonScape | `589e3bd`; pre-existing untracked research/temp files were preserved |
| E2R-Hub | `819442a`; current two-view copy, five sample cards, guide links, specification/Validator links, and Handoff wiring were inspected |
| e2r-validator | `00bcda7`; current CLI and test package were inspected |

The E2R-SPEC `npm run validate` gate passed. The Validator CLI returned
`valid: true` for the Self-Description, Apollo 11, Berlin Wall, and Lighthouse
files; the Self-Description retained its two non-fatal
`extension_version_unspecified` warnings. The Validator test suite passed
117/117. These checks establish structural validity, not rights clearance or
human visual/public-release acceptance.

## User Guide audit

### NarrativeLine

The EN guide covers the current user-goal path: opening the built-in sample or
a local Dataset, Timeline use, Event creation/editing, related Entity
creation, title editing with `Apply title`, export, replacement safety,
reload/close protection, Handoff, validation, and the current coordinate
editing boundary. The JA guide has the corresponding task structure.

The remaining bounded content checks are:

* explicitly identify the current `More`/secondary-action path where it is
  the place users find export or related workspace actions;
* state the current locale-switching behavior and labels in both languages;
* make the current `Dataset title`/`Apply title` terminology and the
  current Handoff/export distinction easy to find in both guides; and
* perform a final browser-backed EN/JA label pass, including narrow layout,
  rather than treating source parity alone as acceptance.

These are content accuracy and discoverability updates, not authorization to
reopen accepted History 2, geometry, Handoff, or title-editing behavior.

### LiaisonScape

The EN and JA guides cover Home, opening the sample/local Dataset, Entity and
Relation graph operations, pan/zoom, node coordinates, route/label placement,
export, replacement safety, reload protection, validation, and Handoff. They
also correctly state that the current graph view focuses on Entity-to-Entity
connections and that Event-connected Relations remain in the Dataset without
being shown as Entity-to-Entity lines.

The clearest current omissions are:

* Dataset title presentation and direct editing are not documented;
* the current `More`/`その他` secondary actions are not documented;
* locale switching is mentioned as a Home action but not explained as a
  reusable user workflow; and
* the final EN/JA pass should check the current labels, especially title,
  export, coordinate, and secondary actions, against the browser.

No guide evidence requires a new application feature. The bounded content
update is ready in principle once Human selects the public capability and
sample set.

## Current public sample inventory

All current public sample families are JSON-valid. EN/JA pairs inspected here
have matching object counts and topology for their intended family. Metadata
currently contains only Dataset identity/title for the application-owned and
canonical samples; it does not by itself establish authorship, rights, or
translation provenance.

| Role candidate | Current path(s) | Current structure and capability signal | Current classification |
| --- | --- | --- | --- |
| NarrativeLine-owned Berlin Wall | `e2r-narrative-line/src/sample/berlin-wall-history.{en,ja}.e2r.json` | 9 Entities / 15 Events / 23 Relations; 15 dated History Events, including date-time precision; 7 Entity-to-Entity Relations and additional Event-involved Relations | **STRONG TWO-VIEW CANDIDATE; RIGHTS/STEWARD CONFIRMATION REQUIRED** |
| LiaisonScape-owned Lighthouse | `e2r-liaison-scape/public/lighthouse-restoration-demo.{en,ja}.e2r.json` | 10 / 11 / 28; 14 Entity-to-Entity and 14 Event-involved Relations; mixed year, month, date, and date-time precision; LiaisonScape Presentation Draft payload for relation display | **STRONG GRAPH SHOWCASE; EXPERIMENTAL PRESENTATION BOUNDARY MUST BE LABELED** |
| Canonical Apollo 11 | `e2r-spec/examples/apollo-11-mission.{en,ja}.e2r.json` | 9 / 12 / 66; 11 Entity-to-Entity and 55 Event-involved Relations; all 12 Events have date-time History | **BEST STABLE-ORIENTED TWO-VIEW CANDIDATE ON STRUCTURE; HUMAN VISUAL/RIGHTS REVIEW REQUIRED** |
| Canonical Ashen Crown | `e2r-spec/examples/ashen-crown.{en,ja}.e2r.json` | 10 / 12 / 57; 17 Entity-to-Entity and 40 Event-involved Relations; year-only History | **FICTIONAL GRAPH-RICH SHOWCASE CANDIDATE; AUTHORSHIP/REDISTRIBUTION CONFIRMATION REQUIRED** |
| Canonical Titanic | `e2r-spec/examples/titanic-final-voyage.{en,ja}.e2r.json` | 13 / 18 / 40; 12 Entity-to-Entity and 28 Event-involved Relations; date and date-time History | **CHRONOLOGY/GRAPH CANDIDATE; FACTUAL RIGHTS AND SOURCE CONFIRMATION REQUIRED** |
| E2R Self-Description | `e2r-spec/examples/e2r-self-description.json` | 12 / 10 / 23; 13 Entity-to-Entity and 10 Event-involved Relations; 10 dated Events; Lineage Draft payload | **DOGFOOD / EXPERIMENTAL; HUB PUBLICATION DEFERRED** |

The Hub currently exposes Berlin Wall, Apollo 11, Lighthouse, Ashen Crown, and
Titanic with EN/JA source and Handoff links. It does not expose the
Self-Description Dataset. That is consistent with the current Self-Description
and licensing records; adding it to the public Gallery is a separate Human
decision, not a missing automatic link.

## “One dataset / two views” suitability

The current Hub copy is supported by the existence of multiple datasets that
load through both Handoff paths, but the evidence does not select a single
flagship sample.

* Apollo 11 is the strongest stable-oriented canonical candidate from the
  current structure: it has substantial chronology and a non-trivial
  Entity-to-Entity graph. Its graph is dense, so Human visual review must
  confirm that it is legible rather than merely valid.
* Berlin Wall is the strongest current application-owned candidate: it is
  already the NarrativeLine sample, has readable dated chronology, and has
  meaningful Entity-to-Entity structure. Its factual provenance and
  redistribution record remain incomplete.
* Lighthouse is the clearest LiaisonScape graph showcase, but it carries the
  LiaisonScape Presentation Draft and has no authored coordinate/layout
  extension in the current JSON. Its automatic graph presentation must not be
  described as stored coordinates.
* Ashen Crown is a useful fictional graph-rich option if project authorship
  and redistribution are confirmed. Titanic is a useful factual chronology
  option only after its source/rights boundary is confirmed.

Recommended bounded decision: Human selects one stable-oriented representative
sample (or a small named set) and separately decides whether Lighthouse or
Ashen Crown is an explicitly Experimental graph showcase. Do not enlarge one
Dataset merely to satisfy every Timeline and graph goal, and do not treat
current Handoff reachability as rights clearance.

## History 2 / `circa` boundary

The current public samples use History 1-shaped data. No inspected public
sample uses H2 `position` plus `approximation: "circa"`. Lighthouse and some
other samples demonstrate mixed H1 date precision, which is distinct from the
accepted-but-Candidate H2 circa behavior.

The current H2-POSITION-CIRCA implementation and acceptance are closed as a
bounded Candidate capability, but History 2.0.0 is not Stable and broader
authoring remains deferred. Therefore:

* stable-oriented initial-public-release samples should not imply H2 circa
  support;
* a separate Candidate/Experimental showcase is possible only by explicit
  Human decision and must be labeled non-Stable; and
* adding H2 data to a current public sample is not part of this audit and
  would require a separate public-support decision.

## LiaisonScape showcase boundary

The current Lighthouse sample provides meaningful directed, parallel, and
presentation-varied Relations and a useful Entity-to-Entity graph. It can
serve as a graph showcase without claiming that its displayed positions are
stored Dataset coordinates. The Self-Description Dataset offers a different
ecosystem graph and dated milestone chronology, but its Lineage Draft and
dogfood status keep it outside the Stable sample set by default.

Stored coordinates, automatic display, Event-connected edges, parallel/self
Relations, and presentation variation are distinct showcase properties. A
future sample decision should classify them separately rather than silently
combining them into one release claim.

## Provenance, authorship, rights, and redistribution

This is the current release gate, not a documentation polish item.

Open confirmations are:

* source and factual provenance for Berlin Wall and Titanic;
* authorship and redistribution authority for every sample, including the
  adopted JA translations;
* whether Ashen Crown and Lighthouse are fully project-authored fictional
  content, and who can grant redistribution rights;
* sample-level license/credit notices and any external facts, names, or
  copied expressive text/assets;
* the distinction between repository software licenses and Dataset-content
  rights; and
* final public URL, revision pinning, and Hub/Handoff release-set selection.

The current standards-license decision selects a future CC0 treatment for
project-created dogfood/example content subject to third-party rules, but S3
formalization and the full provenance audit are not complete. The
Self-Description artifact itself explicitly says that no license is selected
and that Hub publication is deferred. This audit does not convert that policy
direction into a license grant.

## Hub public entry point

Current Hub source provides:

* NarrativeLine and LiaisonScape application links;
* EN/JA User Guide links for both applications;
* five sample families with EN/JA source and Handoff links;
* E2R Specification and documentation links; and
* E2R Validator links with the current CLI/library boundary.

The Self-Description Dataset is not linked from the Hub. Keep that omission
unless Human approves a separately labeled dogfood/experimental entry after
the public URL, rights, and licensing gates. The source links target `main`
or the current public repository path, so deployed revision/base-path and
Handoff acceptance remain a later release checkpoint; this audit did not
perform deployment or publication.

## Proposed bounded next checkpoints

1. **Human release-set and sample-role decision.** Select the stable-oriented
   representative Dataset(s), any separate Experimental graph showcase, and
   whether Self-Description remains canonical-only/dogfood.
2. **Rights/provenance confirmation.** Record steward, source, authorship,
   translation, redistribution, and sample-content license/credit boundaries
   without conflating them with software repository licenses.
3. **Content-only User Guide refresh.** Update only the confirmed current
   labels and workflows, with EN/JA parity; likely first target is
   LiaisonScape title editing, More/secondary actions, and locale guidance.
4. **Sample/Handoff release-readiness check.** Verify the selected sample set
   in both applications, Validator, Hub links, EN/JA, and deployed public
   URLs. Do not add H2 Candidate semantics unless separately approved.
5. **Optional Self-Description decision.** After S3/public-URL evidence,
   choose canonical-only, explicitly labeled dogfood entry, or continued Hub
   deferral. No automatic Gallery addition follows from this audit.

## Decisions intentionally left to Human

Human approval is still required for the representative release sample set,
the stable versus experimental boundary, Self-Description Hub placement,
H2-Candidate inclusion, factual/fictional sample rights, adopted translation
rights, final public URL/revision set, and every push/deploy/tag/publication
action. No new runtime, schema, Validator, sample, or User Guide behavior was
selected by this audit.

## Changes and validation

This checkpoint changes only this result document and the roadmap's current
status reference. No application source, tests, CSS, sample Dataset, Hub
source, Validator artifact, historical research, `work/`, or existing dirty
file was changed.

Validation performed:

* `npm run validate` in `e2r-spec` — passed;
* `npm test` in `e2r-validator` — 117/117 passed;
* Validator CLI — Self-Description valid with two recorded warnings; Apollo
  11, Berlin Wall, and Lighthouse valid with no diagnostics;
* current JSON inventory/count/topology and EN/JA pair comparison;
* source-level Hub registry and User Guide/current-label inspection.

No push, deploy, release, publication, or runtime/browser mutation was
performed. Existing unrelated dirty work remains preserved.
