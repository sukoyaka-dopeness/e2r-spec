# E2R-SPEC Initial Public Release-Set Audit 1

Date: 2026-09-22

Status: **HUMAN DECISION REQUIRED - OPTION B RECOMMENDED**

Scope: read-only audit of the local e2r-spec range after public
`origin/main`; no release-set construction or history operation was performed.

## Audited range

The current exact range is:

```text
33be032fe109515b409a7e6c176f2bd632149e5c..9efecf472c814d4593288a2a7ee3677fa84aec18
```

It contains **308 commits**, from 2026-09-06 through 2026-09-22. The current
local `main` is 308 commits ahead of public `origin/main`; `ca05c52` is inside
the range, not its tip. A direct fast-forward to either `ca05c52` or the
current `HEAD` necessarily publishes the complete ancestor range after the
public tip.

The range changes 358 tracked paths: 336 added, 22 modified, and no deleted
paths. The path grouping is:

| Top-level area | Changed paths |
| --- | ---: |
| `docs/` | 254 |
| `sessions/` | 42 |
| `examples/` | 37 |
| `scripts/` | 8 |
| `schemas/` | 6 |
| `extensions/` | 4 |
| `spec/` | 3 |
| `research/` | 2 |
| `AGENTS.md`, `package.json` | 2 |

Subject-based grouping also shows a broad mixed history: approximately 72
LiaisonScape research records, 41 workspace/runtime-evidence records, 33
specification/release records, 2 performance records, and 160 other
documentation commits. This is not a bounded History 2 release series.

## Content and publication findings

The range contains legitimate current specification work, including:

- the History 2 draft schemas and candidate fixtures;
- the `history@2.0.0 / position-circa` registry and registry schema;
- validation scripts and their package gate;
- canonical sample coordinate-removal changes; and
- current roadmap and provenance records.

The eight changed public sample JSON files remain History 1 data. The new
History 2 examples are explicitly labelled Candidate/Draft in
`examples/README.md`; the range does not perform the approved future public H2
sample migration.

No tracked secret, credential, private-key pattern, binary, archive, media
file, or generated `work/` artifact was found in `HEAD`. The largest tracked
files are Markdown/research text and the roadmap; the current untracked
`work/` files are not part of the proposed range and were not changed.

Many historical documents intentionally retain absolute Windows paths,
temporary directories, workspace names, and diagnostic provenance. The
documentation policy and roadmap distinguish these as historical/non-normative
records. They are not evidence of a secret, but they are publication-hygiene
and readability considerations for an Initial Public Release.

One current-status inconsistency remains:

- `docs/README.md:27` still says `History 2 user-facing authoring scope` is
  `DESIGN RESULT / HUMAN SCOPE DECISION REQUIRED`;
- the current roadmap says the broader scope is deferred and the bounded
  H2-POSITION-CIRCA scope is closed;
- the historical result document should remain unchanged, but the README
  current-status line needs a separate minimal correction before publication.

The range-wide `git diff --check` also reports **118 errors across 32 files**,
mostly trailing whitespace and blank EOF lines in historical result documents.
This is a publication-hygiene issue, not a specification or schema failure.

`LICENSE.md` contains the role-based CC BY / MIT / conditional CC0 policy, but
it does not itself grant rights for third-party facts, translations, or
imported assets. Existing public-sample rights, factual-source, and steward
confirmation gates remain separate Human decisions.

## Validation and authority consistency

Current e2r-spec validation passes, including the History 2 registry gate,
History 2 draft fixtures, canonical sample checks, and coordinate-less sample
checks. The normative H2 boundary remains consistent:

```text
history@2.0.0: Candidate
history@2.0.0 / position-circa: Stable profile
```

The source correctness result is therefore green locally. The blockers are
release-set scope, documentation hygiene, and rights/publication governance,
not a request to reopen the adopted H2 design.

## Option assessment

### Option A - publish the full range

Technically possible as a fast-forward after explicit approval of the complete
308-commit historical range. This would publish workspace hygiene records,
LiaisonScape research, sessions, draft specifications, current examples, and
the H2 registry together. It should not be treated as implicitly approved by
the final `ca05c52` commit.

### Option B - construct a bounded release set

**Recommended for Initial Public Release.** The H2 registry change is not
dependent on publishing every unrelated checkpoint in this range as one
release transaction. However, a narrower public history cannot be produced by
an ordinary fast-forward: it requires a separately approved release-set
construction, such as a reviewed new branch/tree or history surgery involving
selected changes. No cherry-pick, rebase, rewrite, or branch replacement was
performed here.

Before either publication path, the Human should decide the README correction,
the range-wide whitespace policy, historical path visibility, and the existing
sample rights/steward gates.

## Exact next Human decisions

1. Approve Option A at exact target SHA `9efecf472c814d4593288a2a7ee3677fa84aec18`,
   accepting all 308 commits and the listed publication-hygiene issues; or
   approve a separate bounded release-set construction under Option B.
2. Approve the minimal `docs/README.md` current-status correction without
   rewriting the historical History 2 result.
3. Decide whether the 118 range diff-check findings are corrected, explicitly
   qualified as historical, or excluded by the release-set construction.
4. Confirm sample rights, factual-source, translation, and stewardship gates
   before any public sample exposure or H2 migration.

No push, rewrite, cherry-pick, rebase, tag, release, deployment, Validator
release, package publication, or sample migration was performed.

## Knowledge applied

- `ai-knowledge/decisions/research-result-executable-provenance.md`: kept
  normative specification, executable evidence, and historical artifacts as
  separate authority layers; release claims must retain replayable provenance.
- `ai-knowledge/playbooks/e2r-public-sample-rights-and-provenance-review.md`:
  treated sample rights, translations, source identity, redistribution, and
  steward confirmation as independent Human gates rather than inferring legal
  clearance from repository presence.

Existing dirty and untracked work was preserved, including the two modified
e2r-spec research files and `work/`.
