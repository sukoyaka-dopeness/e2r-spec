# Documentation Information Architecture / Roadmap Modularization Audit 1

Date: 2026-09-19

Status: **DOCUMENTATION IA AUDIT COMPLETE / HUMAN STRUCTURE DECISION REQUIRED**

This is a documentation audit and design result. It does not move, rename, or
delete documents; split the roadmap; change normative specification content;
or authorize runtime, schema, sample, Validator, application, or release work.

## Executive conclusion

The repository has a real documentation information-architecture problem, but
it is not simply a large-file problem:

- `docs/roadmap.md` is a 11,508-line chronological planning/status record with
  541 headings.
- `docs/` contains 613 files: 611 Markdown files at the root and two JSON
  evidence files under `evidence/`.
- The only existing documentation subdirectories are `evidence/` and
  `evidence/reviews/`.
- Responsibility boundaries already exist at the repository top level through
  `spec/`, `extensions/`, `schemas/`, `examples/`, `applications/`,
  `research/`, and `sessions/`.

The safest recommendation is **navigation-first, responsibility-preserving
maintenance**:

1. retain existing document paths and the single roadmap for now;
2. make `docs/README.md` a stronger navigation hub with explicit current,
   normative, guide, result/acceptance, research, application, and historical
   entry points;
3. keep detailed checkpoint evidence in dedicated result documents and put only
   a short current-status summary plus a link in the roadmap;
4. label historical roadmap snapshots explicitly instead of deleting or
   rewriting them; and
5. defer directory migration and roadmap splitting until a human approves a
   separate migration checkpoint.

This preserves stable links and provenance while making the current authority
easier to find. A wholesale `docs/` move or a thin-roadmap conversion is not
justified by this audit.

## Authority model confirmed from the repository

| Responsibility | Current authority | Role of related documents |
| --- | --- | --- |
| E2R Core and normative model | `spec/` | Normative specification |
| Normative Extensions | `extensions/` | Normative Extension contracts |
| Schemas and executable examples | `schemas/`, `examples/` | Structural/test authority |
| Current planning and priority | `docs/roadmap.md` | Short current entries plus chronology |
| Documentation navigation/policy | `docs/README.md`, `docs/documentation-plan.md` | Entry point and policy |
| Application design | `applications/` | Informative application responsibility/design |
| Research and hypotheses | `research/` and workspace `ai-knowledge/` | Non-normative research/reusable guidance |
| Session chronology | `sessions/` | Historical continuity, not current authority |
| Application implementation | application repositories | Runtime/source authority |
| Bounded checkpoint evidence | dedicated `docs/*-result.md`, `*-acceptance.md`, `*-audit*.md` | Evidence and accepted boundaries |

`docs/README.md` already states that Core and Extension specifications are
normative and that guides, examples, application documentation, and research
are informative. `docs/documentation-plan.md` adds the Current / Designed /
Experimental distinction. These are useful policies, but the hub does not yet
surface the large result and current-status inventory clearly enough.

## Inventory evidence

The inventory was read from the current worktree, not inferred from filenames
alone:

- total files below `docs/`: **613**;
- root-level files: **611**;
- nested files: **2**;
- nested directories: `evidence/`, `evidence/reviews/`;
- Markdown files in `docs/`: **611**;
- `roadmap.md`: **11,508 lines**, **541 headings**;
- the root contains many application-prefixed, cross-app, release,
  acceptance, result, audit, design, and research records.

Filename patterns are useful navigation hints but are not authority by
themselves. A file named `*-result.md` may be closed while remaining important
accepted evidence; a roadmap entry may be current or a historical snapshot.
Status and authority text inside the document must be checked.

## Responsibility categories

The current flat `docs/` root contains these overlapping categories:

- Documentation Hub and entry/navigation;
- current roadmap and planning;
- user guides and explanatory documentation;
- specification/application principles and recommendations;
- design decisions and design proposals;
- audits, diagnostics, experiments, and research notes;
- implementation results;
- acceptance and human-acceptance records;
- cross-application capability and visual records;
- release/readiness/reconciliation records;
- application-specific records, especially LiaisonScape and NarrativeLine;
- historical checkpoint and handoff records.

The categories are meaningful, but current filenames are the primary index.
There is no repository-wide `current/`, `results/`, `acceptance/`, or
`archive/` directory contract today.

## Roadmap responsibility audit

`roadmap.md` currently serves four roles at once:

1. current baseline, priority, and Initial Public Release critical path;
2. active workstream and human-decision tracking;
3. chronological checkpoint record;
4. compact summaries linking to dedicated result documents.

The fourth role is healthy when the entry is short. The chronological record
also has provenance value and should not be deleted merely because a workstream
is closed.

The main maintenance risk is status ambiguity. Older entries can contain
`next`, `open`, `blocked`, or `unstarted` wording that was accurate at the
time, while later current entries supersede it. This is visible in the
History 2 sequence: the current `NL-H2-R1` entry is accepted and closed, while
older readiness wording remains useful as historical evidence. The current
History 2 user-facing authoring scope is separately recorded as design pending
human decision. The safe correction is a clearly labeled current addendum and
link, not historical deletion.

Detailed implementation and acceptance evidence should remain in the dedicated
application or checkpoint result document. The roadmap should answer “what is
current and what is next?” and link to the detail, rather than becoming a
second full result document.

## Current versus historical information policy

Use four independent concepts instead of treating `closed` as `archive`:

- **Current authority** — the document currently used to decide behavior or
  priority;
- **Completed but authoritative evidence** — a closed result still needed to
  support a current claim;
- **Historical record** — an accurate snapshot of an earlier state or attempt;
- **Superseded / obsolete** — no longer a decision authority, retained only to
  explain provenance or prevent repetition.

A result document can be both completed and authoritative evidence. It should
not be moved to an archive solely because its checkpoint is closed. Archive
policy should be considered only when a document is explicitly superseded or
obsolete and all inbound links and provenance requirements are understood.

## Link and reference risk audit

A read-only Markdown link scan covered the repository's Markdown files:

- Markdown files scanned: **920**;
- local links checked: **746**;
- unresolved local targets: **3**.

The three unresolved targets are:

1. a LiaisonScape visual-evidence index referenced by a historical result;
2. a LiaisonScape Frontier 12 JSON replay artifact referenced by `roadmap.md`;
3. `sessions/E2R-Session-0023.md` referencing the old
   `applications/linkscape-mvp-acceptance.md` path.

These are reference-maintenance risks, not evidence that documents should be
moved now. The first two cross-repository targets require the other repository's
current state and should not be “fixed” by guessing a replacement path. The
third is a historical session reference and should remain historical unless a
separate link-reconciliation checkpoint decides to annotate it.

High-risk references for any future migration are:

- Markdown relative links and links from `README.md`/`docs/README.md`;
- `roadmap.md` links embedded in many sessions and result documents;
- cross-repository artifact paths into LiaisonScape or other E2R repositories;
- session records that intentionally preserve old names;
- scripts, fixtures, and tooling that mention exact documentation paths;
- application-repository handoffs that link directly to E2R-SPEC documents.

No path migration should begin until these references have a complete
path-binding inventory and a rollback/verification plan.

## Candidate information-architecture options

### Option A — Preserve the flat root and improve the Hub

Keep existing paths, expand `docs/README.md` into a curated navigation map,
and maintain the single roadmap with short current entries and links to detail.

This has the lowest link and provenance risk. It does not reduce the physical
file count, but it materially improves discoverability without requiring a
repository-wide move.

### Option B — Add responsibility directories for new documents only

Keep existing root paths stable, but place newly created material into small
directories such as `docs/guides/`, `docs/results/`, or `docs/research/` after
human approval. Update the Hub and link policy first.

This can reduce future root growth, but it introduces parallel conventions and
requires a clear rule for application-specific and cross-app records.

### Option C — Move existing documents into a full hierarchy

Create `guides/`, `design/`, `results/`, `acceptance/`, `roadmap/`, and
`archive/` directories and migrate existing files.

This offers the strongest visual categorization but has the highest link,
session-provenance, cross-repository, and human-review cost. The current
repository has no redirects or path-alias contract, so a move would be a
material migration project, not documentation cleanup.

### Option D — Thin index roadmap plus workstream roadmaps

Make `roadmap.md` a short index and create separate application, release, and
research roadmaps.

This may help if active workstreams need independent planning, but splitting
the current chronology would make current-versus-historical interpretation
harder unless a strong status/index contract is added first.

## Recommended information architecture

Recommend **Option A now, with a limited Option B policy for future additions**:

```text
README.md
  -> docs/README.md (Documentation Hub)
       -> Current status / roadmap
       -> Normative Core / Extensions / schemas / examples
       -> User guides and walkthroughs
       -> Application design
       -> Results and acceptance evidence
       -> Research / hypotheses
       -> Historical sessions and handoffs

docs/roadmap.md
  = current planning + short checkpoint chronology

docs/*-result.md / *-acceptance.md / *-audit*.md
  = dedicated evidence, retained at stable paths

spec/ extensions/ schemas/ examples/ applications/ research/ sessions/
  = existing responsibility boundaries; unchanged
```

The next structure checkpoint should decide whether to expand `docs/README.md`
with this navigation map. It should not create directories or move files until
the human approves the path policy.

## Recommended roadmap structure

For the current repository, retain one `docs/roadmap.md` with this discipline:

- a short current baseline and current critical path near the top;
- current workstream entries that state status, owner/repository, next bounded
  checkpoint, and human decision points;
- links to dedicated result documents for detailed evidence;
- historical checkpoint entries retained below, explicitly labeled when their
  status has been superseded;
- no duplicated full test logs, UI evidence, or implementation summaries;
- no current `NEXT` wording left unlabeled when a later checkpoint supersedes
  it.

If workstream roadmaps are eventually approved, start with one bounded active
stream (for example Initial Public Release) and keep `docs/roadmap.md` as the
canonical index. Do not split the whole chronology in one operation.

## Docs root target

Until a separate migration is approved, retain at the root:

- `README.md` as the Documentation Hub;
- `roadmap.md` as the current planning/index authority;
- stable user-facing guides and overviews;
- dedicated result/acceptance documents whose paths are already referenced;
- high-value cross-repository and release/readiness records.

Normative specifications must remain in `spec/` and `extensions/`; executable
examples and schemas must remain in their existing directories. Sessions and
research should not be moved under `docs/` merely to make the root appear
smaller.

## Naming policy proposal

Do not rename existing files in this checkpoint. For new bounded records,
continue the repository's informative convention:

```text
<area>-<subject>-<checkpoint>-result.md
<area>-<subject>-<checkpoint>-acceptance.md
<area>-<subject>-<checkpoint>-audit<revision>-result.md
<area>-<subject>-<checkpoint>-reconciliation<revision>-result.md
```

Every new result should state Date, Status, Scope, Authority, Related records,
and whether it changes runtime/specification. Filename suffixes are navigation
hints; the internal Status and Authority fields decide interpretation.

## Safe migration phases

If the human approves further work, use these bounded phases:

1. **Map** — maintain a generated/read-only inventory of paths, links,
   responsibility, status, and inbound references.
2. **Hub** — improve `docs/README.md` navigation and add a concise current
   status map; do not move existing files.
3. **Roadmap hygiene** — label historical/superseded snapshots and replace
   duplicated detail with links, one workstream at a time.
4. **New-document policy** — optionally place only new documents in approved
   responsibility directories; preserve old paths.
5. **Migration decision** — only if the preceding phases demonstrate a benefit,
   approve one bounded directory migration with exact link repair, validation,
   and human review.

No phase authorizes automatic archive, deletion, rename, or broad `git mv`.

## Audit result and next decision

The audit is complete. The next checkpoint should be a **human structure
decision** selecting one of these bounded choices:

- approve Hub/navigation maintenance only;
- approve Hub plus current-status/roadmap hygiene;
- approve a new-document directory policy;
- authorize a separately scoped path migration after link inventory.

The recommended choice is Hub/navigation maintenance plus current-status
roadmap hygiene, with no existing-file move. This keeps `NL-H2-R1
ACCEPTED/CLOSED` and `H2-POSITION-CIRCA DESIGN RESULT / HUMAN SCOPE DECISION
REQUIRED` discoverable without changing either status.

## Validation and change boundary

This audit changed only documentation planning records. No normative spec,
schema, sample, application source, test, CSS, Validator, Hub, LiaisonScape,
NarrativeLine, or release artifact was changed. No new AI-knowledge entry was
created; the audit used existing repository documentation policy and link/
provenance guidance only.
