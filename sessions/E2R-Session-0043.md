# E2R Session 0043 - Initial Public Release Roadmap and Documentation Closure

Date: 2026-08-21

## Scope

This session consolidated the accepted Dataset Handoff v0, Dataset
Replacement Safety, history-navigation, and LiaisonScape user-guide work into
the project-wide planning context. The work was documentation and planning
only. No E2R Core, Extension, application source, Validator, or Dataset
semantic implementation was changed in this session.

## LiaisonScape Dataset Handoff v0

LiaisonScape Dataset Handoff v0 was implemented and manually accepted through
the following application checkpoints:

- Handoff 1A fragment helpers: `b350827`;
- Handoff 1B startup loading: `1a2fab0`;
- history/popstate ownership follow-up: `efa56c7`;
- Handoff 1C fragment lifecycle: `3cd89a7`.

The accepted behavior is startup-only public HTTPS Dataset acquisition through
`#datasetUrl`, with CORS, explicit failure visibility, no silent fallback, no
live hash switching, and preservation/removal rules for the Dataset fragment.

## LiaisonScape documentation checkpoints

The accepted user-guide work documented replacement safety, browser-native exit
protection, Dataset Handoff, task-oriented graph interaction, Context Menu
detail access, direct Relation dragging, node-coordinate saving, and separate
manual label/route placement.

Documentation Closure A was recorded in e2r-spec commit `412ffa6`.
Documentation Closure B and future-direction wording were checkpointed in
LiaisonScape commit `92cc0f4`; placement-description deduplication was
checkpointed in `2bec30a`.

The guides now distinguish:

- implemented MVP behavior;
- manually accepted safety and handoff behavior; and
- future directions that are under consideration or research, not committed
  features.

## Initial Public Release roadmap

The project-wide critical path is now recorded in `docs/roadmap.md`:

1. NarrativeLine modernization toward LiaisonScape-level Dataset safety and
   Handoff parity, after auditing NarrativeLine's temporal editing model;
2. independent Browser Back/Forward, `history.state`, `popstate`, fragment,
   and navigation-ownership audit;
3. Hub / Portal public entry point with applications, samples, documentation,
   maturity status, and entry points;
4. Validator, canonical/sample Dataset, public handoff, and cross-application
   interoperability evidence; and
5. synchronization of README, user guide, roadmap, implementation status,
   deployment state, and sample links across repositories.

The intended initial-public-release journey is:

`learn E2R -> discover samples -> open a Dataset -> edit safely -> export ->
return to documentation`.

The roadmap checkpoint is e2r-spec commit `aba56e3`:

`docs: organize initial public release roadmap`

## Research and post-release direction

The roadmap explicitly keeps the following outside the initial-public-release
blocker set:

- NarrativeLine <-> LiaisonScape cross-application handoff, especially
  transfer of current unexported edits rather than only a public source URL;
- Entity grouping / Group Entity, pending evidence from both applications;
- multiple Dataset comparison, lineage, merge, provenance, and references;
- advanced layout, presentation, Media, icons, and reproducible placement;
- bounded Perspective experiments;
- richer temporal semantics;
- Source, Citation, identifiers, provenance, confidence, and vocabularies; and
- AI-assisted analysis, validation, repair, and authoring.

Group Entity is not an accepted Core or Extension decision. Nested groups,
multiple membership, Group relations, persistence, and ownership boundaries
remain unresolved. NarrativeLine modernization is expected to provide useful
grouping evidence before a bounded LiaisonScape experiment is considered.

## Verification and repository state

The roadmap synchronization passed `npm run validate` and `git diff --check`.
The checkpoint commit changed only `docs/roadmap.md`. Existing untracked
research and session files were preserved. No application implementation,
user guide, ai-knowledge, or cross-application handoff implementation was
performed as part of the roadmap synchronization.

## Next boundary

The next major implementation workstream is NarrativeLine modernization. It
must begin with a read-only architecture and pending-work audit; LiaisonScape
behavior must not be copied mechanically, and Group Entity must not be
promoted to accepted Dataset semantics without evidence and a bounded design
process.
