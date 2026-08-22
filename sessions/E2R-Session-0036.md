# E2R Session 0036 - E2R Hub Home MVP

Date: 2026-08-17

## Scope

This session established and refined the first E2R Hub Home MVP. The work was
application-surface work only. It did not change E2R Core, Extension
semantics, Dataset format, application handoff, browser workspace, or sibling
application behavior.

Repository:

```text
C:\Users\extra\E2R\e2r-hub
```

## Hub repository bootstrap

The initial repository was converted from the Vite starter into a minimal E2R
Hub application:

- Vite demo UI, logos, counter, starter links, and unused assets removed;
- minimal `E2R Hub` screen established;
- E2R Hub README added;
- repository `AGENTS.md` guidance added;
- package name retained as `e2r-hub`;
- no Hub product features, routing, storage, handoff, or deployment added.

Checkpoint:

```text
db0138d chore: initialize E2R Hub
```

## E2R Hub Home MVP

The first Home MVP was implemented using the existing React + TypeScript
scaffold, without new dependencies or a localization library.

Implemented sections:

- locale-aware Header and English/Japanese switch using in-memory React state;
- Hero introduction;
- NarrativeLine timeline application card;
- LiaisonScape relationship editor card;
- Berlin Wall, Apollo 11, and Lighthouse Restoration sample cards;
- E2R explanation with Entity / Event / Relation terminology;
- E2R Specification and E2R Validator resource links;
- compact footer;
- localized Credits modal.

The page remains static and lightweight. Direct sample Dataset handoff,
arbitrary Dataset URL handoff, browser storage, Router, Web Validator, Hub
return links, and Pages deployment remain out of scope.

Verified external resources:

- NarrativeLine: `https://sukoyaka-dopeness.github.io/e2r-narrative-line/`
- LiaisonScape: `https://sukoyaka-dopeness.github.io/e2r-liaison-scape/`
- E2R Specification: `https://github.com/sukoyaka-dopeness/e2r-spec`
- E2R Validator: `https://github.com/sukoyaka-dopeness/e2r-validator`
- Berlin Wall source: NarrativeLine `src/sample/`
- Apollo 11 source: E2R-SPEC `examples/`
- Lighthouse source: LiaisonScape `public/`

## Visual and copy refinement

The Home page received bounded visual review refinements:

- Hero and section hierarchy were adjusted for desktop and smartphone layouts;
- Japanese application terminology uses `年表` and `相関図`;
- application-card eyebrow metadata was later removed because it duplicated
  the card action headings;
- sample cards use consistent `View Dataset JSON` / localized equivalent
  source actions;
- E2R explanation was made single-column and later consolidated so the four
  numbered points carry the complete explanation without repeated paragraphs;
- English copy was refined for events, relationships, smartphone viewing,
  Apollo sample capability, Entity / Event / Relation terminology, and JSON /
  LLM / Validator boundaries;
- Japanese sample titles and descriptions were refined for Apollo 11,
  Lighthouse, Berlin Wall, NarrativeLine, and LiaisonScape;
- the footer remained compact and locale-aware;
- the Hero ecosystem label received a modest size increase.

The accepted Home MVP checkpoint is:

```text
27c8580 feat: build E2R Hub home
```

The application-card simplification checkpoint is:

```text
73476b9 style: simplify Hub application cards
```

## Validator copy follow-up

The Japanese Validator description was changed from `E2R Dataset` to the
Japanese `E2Rデータセット` wording while preserving the CLI, JavaScript
library, and non-browser-Hub boundary.

Checkpoint:

```text
4d0bf1f fix: refine Hub Validator copy
```

This follow-up changed only `e2r-hub/src/App.tsx`.

## Validation and repository state

Hub checkpoints passed the applicable gates:

- `npm run lint`;
- `npm run build`;
- `git diff --check`;
- staged diff checks before commits.

The current Hub worktree is clean. The repository has no configured remote and
no push was performed. All Hub commits remain local and unpushed.

## Boundaries reaffirmed

This session did not authorize or implement:

- Dataset handoff or automatic Dataset opening;
- Dataset hosting or user storage;
- shared locale persistence;
- browser workspace or IndexedDB;
- Router or application catalog infrastructure;
- Web Validator;
- GitHub Pages deployment;
- sibling application footer or Hub-return changes;
- new E2R Core or Extension semantics.
