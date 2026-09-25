# Documentation IA / `docs/`-Wide Organization Audit 1

Date: 2026-09-25
Status: **AUDIT / TAXONOMY NOT SELECTED / PATH MIGRATION NOT AUTHORIZED**
Scope: `e2r-spec/docs/` inventory, navigation, local Markdown references, and
read-only canonical-workspace reference checks.
Authority: current IA decisions and `docs/documentation-plan.md`; this audit
does not supersede them.

## Outcome

The current tree has a measurable root-navigation and path-concentration
problem, but its content is not cleanly partitioned by filename or lifecycle.
This audit makes one path-preserving navigation cleanup in `docs/README.md`.
It does **not** select a folder taxonomy, move or rename files, delete
documents, change authority/status, or resume Roadmap slimming. A Human
decision is required before any directory hierarchy or migration tranche is
adopted.

`docs/roadmap.md` remains the sole current-planning authority. Existing
`docs/roadmap-history/` remains the bounded historical-chronology area; the
two existing broad history files, legacy preservation unit, and README are not
reclassified. `docs/evidence/` currently holds machine-readable review and
fixture-role evidence, not a general prose-results directory.

## Current inventory and method

At HEAD `d586f8400e261dde9113cbc98078662e9877d4d1`:

- `docs/` contains 710 files: 708 Markdown files and 2 JSON evidence files.
- 704 Markdown files sit directly at the `docs/` root. The remaining four are
  `roadmap-history/README.md`, its legacy chronology, and the two broad
  chronology files. The JSON files are under `evidence/` and its `reviews/`
  subdirectory.
- `liaisonscape-*` is the largest filename family (462 root documents).
  Other visible families include 46 `roadmap-*`, 35 `narrativeline-*`, 24
  `automatic-layout-*`, and 22 `cross-app-*` files. These prefix counts
  overlap other responsibility classifications and are inventory signals,
  not move manifests.
- A local Markdown-link scan over the 708 Markdown files counted 1,295
  relative/local links. It found 164 files with no inbound inline local
  Markdown link within `docs/` and 16 targets absent at their literal local
  paths. These are **review candidates**, not proven orphans or proof of
  external-link safety: the scan does not establish absence of GitHub deep
  links, prose/path mentions, generated references, or every reference syntax.
- Fifteen absent targets are JSON artifacts referenced from a historical
  Browser Capture diagnostic path under an experimental workspace; one is a
  `visual-evidence-index.md` referenced from the mixed Product presentation
  result. No replacement authority was established by this read-only audit.

The inventory combined recursive path/extension counts, document titles and
status/authority headers where present, repository-local link relationships,
the Documentation Hub and plan, current Roadmap/History boundaries, and
responsibility-matched sample documents. Filenames were used to find clusters,
not to determine authority or disposition. Link and prefix counts are
reproducible navigation evidence, not semantic classifications of every
document.

## Responsibility clusters and observed IA friction

| Responsibility cluster | Current evidence and finding | IA consequence |
| --- | --- | --- |
| Normative specification and canonical examples | `spec/`, `extensions/`, `schemas/`, and `examples/` remain separate top-level authorities. | Preserve these paths and their normative boundaries; do not fold them into a general `docs/` taxonomy. |
| Current planning and roadmap chronology | One `roadmap.md`, plus `roadmap-history/` with a README, bounded legacy unit, and two broad workstream chronologies. | This is the clearest established physical split. Keep its authority model and broad-history policy unchanged. |
| Guides and reader entry material | Bilingual Overview, “What Can E2R Do?”, and Dataset Walkthrough form three paired families (six files), with additional sample/self-description material. | A small `guides/` cohort is a plausible pilot, but it has confirmed inbound references, including NarrativeLine GitHub links to both Overview files. A move requires an exact path/link manifest and sibling-owner coordination. |
| Application and cross-application evidence | 462 `liaisonscape-*`, 35 `narrativeline-*`, 22 `cross-app-*`, plus Hub, Validator, release, and shared evidence. The files include designs, decisions, implementation results, audits, qualifications, and mixed responsibility. | Do not move by prefix. Responsibility-first subgroups could be prepared, but each needs semantic manifesting and path-owner review. |
| Decisions, results, audits, acceptances, and designs | These document classes are interleaved with application/workstream evidence. Established suffixes are inconsistent and do not always imply status or authority. | A type-based `decisions/`, `results/`, or `audits/` taxonomy would be easy to automate but risks splitting one workstream and treating suffixes as authority. `documentation-plan.md` explicitly does not select `docs/results/` as a default. |
| Research and exploratory material | The repository has a top-level `research/` authority. `docs/e2r-gamebook-vscode-extension-research-note1.md` and `docs/e2r-hub-initial-layout-precomputation-latency-hiding-hypothesis1.md` self-identify as deferred research/hypothesis, while `docs/ai-workflow-research.md` is a workflow backlog discovered through the Documentation Hub. | The first two are path-policy review candidates; the AI workflow backlog may serve a documentation/workflow role. No relocation is authorized, and the latter's owner/destination should be resolved before classification. |
| Machine evidence | `docs/evidence/` contains a fixture-role manifest and a VSR review JSON beneath `reviews/`. | Preserve as an artifact-oriented evidence area. Do not overload it with prose results without a separate decision. |
| Documentation IA decisions and preparation | Roadmap-first and chronology-structure decisions constrain roadmap/history only; the whole-`docs/` taxonomy was expressly deferred. The recent `docs/README.md` “Current status at a glance” had grown into a long list of preparations/results, including stale “no reconstruction” wording. | Keep the deferral intact. The navigation list was condensed to link to governing IA decisions and this audit, rather than duplicate a changing checkpoint ledger. |

## Path-preserving cleanup completed

`docs/README.md` now:

- distinguishes session records (`sessions/`) from historical Roadmap
  chronology (`roadmap-history/`);
- replaces the oversized “Current status at a glance” artifact list with
  links to the current Roadmap/History entry points, current IA decisions,
  and this whole-`docs/` audit;
- removes duplicated Roadmap/Documentation Plan links from its AI section,
  since those authorities already have dedicated navigation; and
- does not enumerate every result, audit, or checkpoint. Those remain linked
  from their current authority and can be found through the responsibility
  groups documented here.

This changes no path or status. An initial console rendering made some
Japanese labels appear corrupted; re-reading the file as UTF-8 confirmed the
labels are intact, so no language-text edit was necessary. The absent
experimental JSON and sibling visual-index targets remain **HOLD**; no
substitute path was inferred.

## Folder taxonomy choices for Human review

The current accepted decisions do not authorize any of these options. A new
folder is a physical navigation choice only; it must not imply a new document
authority or status hierarchy.

| Option | Illustrative shape | Benefits | Risks / Human decision |
| --- | --- | --- | --- |
| **A. Root-preserving navigation** | Keep current paths; use the Hub and a few responsibility indexes. | No path compatibility break; preserves current `documentation-plan.md` placement policy. | Does not reduce the 704-file root and adds index-maintenance burden; decide whether better navigation alone is sufficient. |
| **B. Responsibility-first folders** | Keep Roadmap/History and evidence as established; consider a small guide cohort and later app/workstream evidence cohorts (not a blanket `liaisonscape-*` move). | Best alignment with actual owners and reader/workstream tasks. | Cross-app, release, application, and evidence documents overlap; needs Human-selected boundaries, exact manifests, and external path coordination. |
| **C. Document-lifecycle folders** | Possible `decisions/`, `results/`, `audits/`, `designs/`. | Easier to explain mechanically; may reduce root concentration broadly. | High path churn; splits workstreams; filename suffix is not authority/status; conflicts with current default that cross-cutting results live at root unless a real navigation/ownership problem and migration cost are accepted. |
| **D. Hybrid, narrow landing zones** | Keep cross-cutting authority records and Roadmap at root; consider one small reader-guide folder and only separately approved broad app/workstream evidence groups. | Incremental, avoids moving the full 462-file LiaisonScape family at once. | Still requires agreement on what is a guide versus authority/evidence and future placement policy; this audit does not select it. |

### Candidate migration cohorts (not authorized)

1. **Bilingual reader-guide pilot (six files):** `e2r-overview-en.md`,
   `e2r-overview-ja.md`, `what-can-e2r-do-en.md`,
   `what-can-e2r-do-ja.md`, `dataset-walkthrough-en.md`, and
   `dataset-walkthrough-ja.md`. A possible destination is illustrative
   `docs/guides/`, not selected. Workspace scans confirm references from
   `docs/README.md`, reciprocal links between the “What Can E2R Do?” and
   Walkthrough pairs, session path mentions, and NarrativeLine's external
   GitHub links to both Overview files. The move must therefore coordinate
   sibling link changes and preserve bilingual pairing.
2. **Research-location reconciliation:** the two explicitly deferred
   Gamebook and Hub latency research notes are candidates for comparison with
   their top-level `research/` counterparts/policy. `ai-workflow-research.md`
   is a separate HOLD until its role and intended discoverability are
   clarified. No path changes are approved here.
3. **Application evidence cohorts:** LiaisonScape, NarrativeLine, Hub,
   Validator, and cross-app materials need smaller responsibility-level
   manifests. The 462 `liaisonscape-*` files are not one safe tranche; the
   existing Roadmap/History and dedicated authority links must be preserved.
4. **Release/provenance and History 2 materials:** potential coherent
   workstreams, but they cut across application and E2R-wide evidence. No
   common destination was selected. Keep current public-release, provenance,
   Stable/Candidate, and Human-decision boundaries where they are.

## Link, navigation, and migration controls

- No folder was created; no file was moved, renamed, deleted, merged, or
  reclassified. No external link was declared nonexistent.
- The 164 zero-inbound candidates and 16 absent literal targets were not
  “fixed” by speculative links or guessed destinations. Review them by
  authority and current use before any future migration.
- Before an approved move, repeat the scan across the canonical E2R workspace
  and any affected sibling repositories, including Markdown links, fragment
  anchors, plain path mentions, JSON, scripts, and fixtures. An empty inbound
  scan is not proof that external consumers do not exist.
- A migration proposal should include source→destination manifest, target
  owner, inbound-reference inventory, exact link repairs, preserved
  authority/status text, pre/post link checks, and a rollback/recovery plan.
  Stage only approved paths and use one bounded commit per coherent tranche.
- `docs/roadmap.md` remains unchanged; no Roadmap slimming was performed.
- `AGENTS.md`, accepted IA decisions, sibling repositories, and `work/` were
  not modified. No Banked Reset ticket was used.

## Human decisions requested before foldering

1. Choose whether to keep the root with curated navigation (A), select a
   responsibility-first or hybrid scheme (B/D), or request a different
   bounded option. Do not adopt lifecycle folders solely from filename suffix.
2. If foldering is desired, approve the first exact migration cohort and
   destination. The six bilingual guides are the smallest concrete pilot, but
   their NarrativeLine external links make cross-repository coordination part
   of that future checkpoint.
3. Decide whether the two deferred research notes should be aligned to the
   top-level `research/` location policy; separately clarify the AI workflow
   backlog's ownership/destination.
4. Set future-document placement guidance only after selecting a taxonomy;
   this audit does not update `documentation-plan.md` or create a second
   authority hierarchy.

## Validation

The inventory and reference scan were read-only. The only content change is
the path-preserving navigation cleanup in `docs/README.md`; this audit records
the snapshot and preparation, not a path migration. `npm run validate`,
`git diff --check`, and local-link checks for the changed Hub/audit document
passed.
