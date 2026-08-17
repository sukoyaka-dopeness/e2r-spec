# E2R Session 0033 - Ecosystem Hub, Milestones, and Checkpoint Policy

Date: 2026-08-17

## Scope

This session consolidated the next planning direction for the E2R ecosystem.
It covered Git checkpoint policy across the four repositories, the E2R Hub /
Studio concept, application and Validator milestones, Canonical Sample work,
and external vocabulary retrieval research.

No Core or Stable Extension semantics were changed in this session.

## Git checkpoint policy

The root `AGENTS.md` files for all four repositories now authorize verified
local commits for bounded logical checkpoints while keeping push, release,
publication, and history rewriting under explicit user authorization.

Repositories:

- `e2r-spec`: `35bd1e2 chore: define Codex Git checkpoint policy`
- `e2r-narrative-line`: `089b78d chore: define Codex Git checkpoint policy`
- `e2r-validator`: `f55a9a2 chore: define Codex Git checkpoint policy`
- `e2r-liaison-scape`: `fd841b9 chore: define Codex Git checkpoint policy`

The prohibition wording was then aligned across all four policies:

- `git add .`
- `git add -A`
- `git commit -a`
- `git reset --hard`
- `git clean`
- broad `git restore`
- broad or automatic `git stash`
- rebase
- squash
- amend of an existing checkpoint
- history rewriting
- force push

Each policy also recommends exact-path or precise-hunk staging. The alignment
follow-up commits were:

- `e2r-spec`: `58aa65d chore: align Git safety policy`
- `e2r-narrative-line`: `cd568ec chore: align Git safety policy`
- `e2r-validator`: `cc29fef chore: align Git safety policy`
- `e2r-liaison-scape`: `c216b33 chore: align Git safety policy`

All four repositories were clean after these commits, each was two commits
ahead of `origin/main`, and none was pushed.

## E2R Hub / Studio direction

The historical E2R Studio idea in `sessions/E2R-Session-0010.md` was
recognized as the precursor to an E2R ecosystem hub or portal. The current
roadmap now explicitly describes a top-level application and distribution
surface that can:

- introduce E2R;
- present applications and their individual top pages;
- provide samples and documentation;
- explain application capabilities and compatibility; and
- guide users between compatible workflows.

The Hub is not a new Core object and does not require a universal application
UI.

The proposed Hub track is:

1. scope and information architecture;
2. static E2R landing page;
3. application catalog and status cards;
4. shared sample gallery;
5. onboarding and documentation paths;
6. cross-application handoff links;
7. capability and compatibility metadata;
8. Pack distribution foundation;
9. user workspace and project entry model; and
10. ecosystem release surface.

The next practical Hub step is information architecture followed by a small
static landing page.

## Application and Validator planning

The following five milestone proposals were prepared for each current
application/tool.

### NarrativeLine

1. Resolve dated/undated Event chronology.
2. Extend History editing toward Relative Time, intervals, and advanced time
   expressions.
3. Strengthen cross-application import/export and unknown-data preservation.
4. Prepare Dataset entry and handoff flows for the E2R Hub.
5. Improve mobile, accessibility, browser-history, and release quality.

### LiaisonScape

1. Stabilize the current Entity-first MVP and First Distribution.
2. Improve Relation display, label placement, routing, and collision handling.
3. Design a mobile Relationship Explorer centered on an Entity and its nearby
   graph.
4. Continue Coordinate Draft interoperability evidence without assuming Stable
   Coordinate registration.
5. Expose application capability information for the Hub and future Pack
   discovery.

### Validator

1. Stabilize Specification Extension version, dependency, Feature, and
   compatibility diagnostics.
2. Complete Coordinate Draft cross-application verification evidence.
3. Solidify Names Draft diagnostics, fixtures, and release quality.
4. Improve diagnostic usability through stable codes, JSON Pointers, related
   IDs, and warning/error separation.
5. Maintain distribution, compatibility, release, and supported-profile
   metadata for future Hub use.

These are planning proposals, not authorization for unrelated implementation
or for promotion of a Draft Extension to Stable.

## Canonical Sample follow-up

The NarrativeLine public sample Dataset must be revised so that opening the
same Dataset in LiaisonScape produces an interesting and legible graph while
remaining a useful Timeline sample in NarrativeLine.

The expected direction is to add or improve meaningful Entity-to-Entity
Relations, selected Event connections, and compatible Coordinate data. This
is application/sample work; it must not weaken NarrativeLine's Timeline
identity or change the E2R Core.

This task is now explicitly recorded in `docs/roadmap.md` and should be treated
as a bounded cross-application sample workstream.

## Dictionary, Semantic, and external vocabulary research

The roadmap already contained related topics such as external identifiers,
Wikidata import, Dictionary evolution, and AI-assisted analysis. This session
clarified a separate research task: on-demand read-only retrieval from
thesauri, Wikidata, or other external vocabulary sources for possible use with
Dictionary and future Semantic capabilities.

Research boundaries:

- retrieved data is external or Derived until intentionally adopted;
- source identity, retrieval time, revision/version, license, language, and
  failure/offline behavior must be preserved;
- network access must not be required to open or validate a valid Dataset;
- lookup must not silently create identities, meanings, Relations, or Semantic
  assertions; and
- caching and deterministic selection require explicit design.

The recommended order is to define Dictionary/Semantic responsibility first,
then prototype one read-only external lookup with provenance and offline
fallback.

## Proposed E2R-wide milestone sequence

The current ten-step cross-repository proposal is:

1. E2R ecosystem information architecture.
2. First-use Hub and application directory.
3. Canonical cross-application samples.
4. Interoperability verification baseline.
5. Validator compatibility matrix.
6. History and chronology completion.
7. Application capability and Pack manifest research.
8. Dictionary and Semantic foundation.
9. On-demand external vocabulary experiment.
10. Evidence-gated ecosystem releases.

The proposed immediate sequence is milestones 1 through 4, with the Canonical
Sample revision as a bounded parallel task.

## Planning reading set

For future ChatGPT discussion, a maximum-25 reading set was identified across
the four repositories. It covers current roadmap, application boundaries,
History, Dictionary, Specification Extension, Hub direction, sample data,
Relation routing, and Validator release behavior. The exact paths are listed
in the preceding planning exchange and include:

- `docs/roadmap.md`;
- `extensions/specification-extension.md`;
- `extensions/dictionary-extension.md`;
- `extensions/history-extension.md`;
- the NarrativeLine backlog, architecture, editing model, handoff, and sample;
- LiaisonScape README, graph-authoring closure, and routing research; and
- Validator README and release process.

## Recorded checkpoint

The roadmap additions from this session were committed in `e2r-spec` as:

`230731c docs: expand E2R ecosystem milestones`

The commit changed only `docs/roadmap.md`. No push was performed.

## Status and boundaries

- Hub planning is non-normative application/ecosystem planning.
- Canonical Sample improvement is a bounded sample and application task.
- Dictionary/Semantic and external vocabulary work remains research.
- Network retrieval is optional and must not become a Dataset validity
  requirement.
- No Core or Stable Extension was changed or authorized.
- Existing application and Validator checkpoint commits were not amended,
  rebased, squashed, or pushed.
