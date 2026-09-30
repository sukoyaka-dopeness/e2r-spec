# Session Log Physical Organization — Human Decision Preparation

Date: 2026-10-01

Status: **READ-ONLY AUDIT COMPLETE / PHYSICAL MIGRATION NOT AUTHORIZED**

## Responsibility and current layout

The repository's [Documentation Plan](documentation-plan.md) assigns
`sessions/` to session chronology and handoff history, not current status
authority. The [Documentation Hub](../README.md) likewise describes sessions
as historical collaboration notes. Current status belongs in the Roadmap and
dedicated result, decision, or research authorities. This audit preserves
that responsibility boundary and does not make Session files detailed
multi-workstream authorities.

The current directory is flat: 96 Markdown files named
`E2R-Session-NNNN.md`, with IDs from 0001 through 0097. There is one absent ID
inside that assigned range: 0096. The highest existing ID is 0097. IDs 0098
and 0099 are future numbers above the current maximum, not gaps in the observed
range. No subdirectories or alternate filename forms were found.

## Session 0096 evidence

`sessions/E2R-Session-0096.md` is absent from the working tree. A full-history
path query and an all-reachable-objects search found no committed file object,
creation, deletion, or rename for that path. However,
[Roadmap History's LiaisonScape chronology](../roadmap-history/liaisonscape-layout-and-auto-layout-chronology.md)
contains the committed sentence “Session 0096 records this staging
checkpoint.” Git attributes that sentence to `348435c9` on 2026-09-24.

Therefore 0096 is an **unresolved gap with a surviving historical reference**,
not a proven never-used number. Available reachable Git evidence cannot
establish whether the referenced session was omitted, existed outside the
committed history, or the chronology reference itself is mistaken. Do not
reuse 0096 or create a replacement record without Human direction. A future
policy could reserve it permanently with a short gap note, or permit reuse
only after the orphan reference is resolved; neither policy is adopted here.

## Path-reference and tooling audit

The current repository has relative Markdown references to session files in
session records and evidence documents, research, the Roadmap and Roadmap
History, and the research catalog (`research/research-catalog.json`). The
root README exposes a `sessions/` tree with examples; `docs/README.md` links
to the directory as the history collection; the Documentation Plan identifies
it as the session chronology home. Those navigation and attribution paths
would need coordinated updates if existing files moved.

No session-path-specific validator, test, package script, or source tooling
was found in the repository's `scripts/`, `tests/`, `package.json`, or
`.github/` locations. No direct GitHub `blob` URL to a session file was found
in the scanned tracked documentation. This does not inventory external
bookmarks, third-party links, or GitHub links outside this repository. Git
history reports no prior rename records for the session paths.

Relative local links can be rewritten and checked as part of an approved
migration, but a move changes the public GitHub file URL. No redirect behavior
is established by this repository. A bulk move would also update historical
session-to-session references, documentation, and catalog attribution; it
would create a large review surface even though the session contents stayed
the same.

## Physical-organization options

| Option | Shape | Advantages | Costs and risks |
|---|---|---|---|
| A. Keep flat | Keep 0001–0099 and continue all future files directly in `sessions/` | No path migration; stable links and familiar history view | Directory continues growing; future files remain mixed in one listing |
| B. Range-bucket all | Move existing files into ranges such as `0001-0099/`, then use `0100-0199/`, `0200-0299/` | Uniform directory structure and bounded folder sizes | Moves 96 files; rewrites local references/catalog; changes public file URLs; larger validation/review and history-navigation cost |
| C. Preserve existing, bucket future IDs | Keep 0001–0099 at current paths; put 0100–0199 and later ranges in named subdirectories | Avoids changing established paths while bounding future growth; straightforward append rule after a threshold | Mixed root/subdirectory layout; requires explicit bucket syntax, index/navigation, and link-generation discipline |
| D. Year buckets for future files | Keep existing paths; place new sessions under year directories | Organizes by calendar period | Session number and date can diverge; the chosen period boundary and links need policy; a long year can still grow |

Range buckets of 100 (`0100-0199`, etc.) align with the existing four-digit
sequence and require no date-based inference. This is a structural candidate,
not a selected policy. Existing 0001–0099 can technically remain flat while
future-only buckets begin at 0100; no tooling constraint was found that makes
this impossible. The mixed layout would need clear navigation instructions.

## Index, identity, and gap policy choices

A small `sessions/README.md` could explain the naming pattern, current/future
folder rule, links to the Roadmap and authority documents, and any reserved
gaps. A machine-readable or exhaustive session index is not currently
required by discovered tooling. If a gap ledger is desired, it should record
only number disposition and evidence pointer, not duplicate session content.

The repository already uses sequential four-digit IDs. Treating the numeric ID
as immutable identity would keep links and historical references intelligible
when physical paths change. Whether IDs are never reused, and whether 0096 is
reserved or later reusable, are Human decisions. A path-independent canonical
URL or permanent redirect strategy is not established here.

## Evidence-based recommendation

Preserve all current paths through 0099. If Human wants foldering, begin
range-based folders for 0100 onward and add a concise `sessions/README.md`
that states the rule and points readers to the Roadmap and dedicated
checkpoints. Keep 0096 reserved pending resolution of the historical
reference. This minimizes link churn because repository evidence shows
numerous local path attributions, no migration-support tooling, and no known
redirect mechanism. This recommendation does not authorize folder creation,
renames, ID reuse policy, or migration.

## Minimum Human decisions before implementation

1. Keep existing 0001–0099 paths, or migrate them into range folders?
2. For new sessions from 0100, use flat paths, 100-ID range buckets, or another
   foldering rule?
3. Treat session numbers as immutable and never reused? What disposition
   should 0096 receive while its surviving reference is unresolved?
4. Add a short `sessions/README.md`/gap note, or keep navigation only in the
   existing README and Documentation Hub?

No files under `sessions/` were moved, renamed, deleted, or created by this
audit. The publication verification is recorded separately in
[`e2r-cross-app-locale-publication-verification-result.md`](../cross-app/e2r-cross-app-locale-publication-verification-result.md).
