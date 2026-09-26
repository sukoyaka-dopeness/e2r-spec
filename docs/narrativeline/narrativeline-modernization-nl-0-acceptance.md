# NarrativeLine Modernization NL-0 Acceptance

Date: 2026-08-21

Status: ACCEPTED

This document records the bounded acceptance result for NarrativeLine's
Navigation / State Ownership Foundation. It does not accept Dataset
Replacement Safety, `beforeunload`, Dataset Handoff v0, or general
documentation synchronization.

## Scope

NL-0 establishes browser-navigation ownership for NarrativeLine while keeping
screen navigation separate from Dataset replacement. The accepted scope is:

- NarrativeLine-owned `history.state` for screen and navigation context;
- Browser Back / Forward restoration of owned screen entries;
- preservation of foreign and unknown history state;
- no Dataset content in `history.state`;
- no URL-fragment screen routing; and
- preservation of the existing Timeline return focus and scroll behavior.

Dataset Replacement Safety remains the next separate workstream.

## Accepted history model

NarrativeLine identifies its owned state with the application-specific
`narrativeLineView` marker. The marker stores only:

- `currentScreen`;
- `selectedEvent`;
- `selectedEntity`;
- `returnEventId`;
- `returnEntityId`; and
- `draftEventId`.

The Dataset itself is not stored in browser history. Browser navigation restores
screen and context state only; it does not replace the active Dataset.

The initial entry preserves existing `history.state` and adds NarrativeLine's
ownership marker with `replaceState`. Logical screen transitions add one
history entry. `popstate` restoration does not add another entry.

Foreign or unknown history state is ignored and does not force Home, Timeline,
or any other NarrativeLine screen to take ownership.

## NL-0A deduplication result

The initial NL-0 implementation performed browser-history side effects inside
a React state updater. This could create duplicate entries when an updater was
re-evaluated, including under StrictMode development behavior.

NL-0A separates these responsibilities:

- `navigate()` calculates the next application state without browser side
  effects;
- App records history after a logical screen transition;
- same-screen Event selection updates the current entry with `replaceState`;
- `popstate` restoration does not push a new entry.

Consequently, one logical screen transition corresponds to one browser-history
step. Selection changes within Timeline do not create navigation steps.

## Fragment and Dataset boundaries

Runtime hash-only changes do not route screens, replace the Dataset, or change
selection. The accepted manual result preserves hash-only Back / Forward
behavior without making the fragment a screen router.

Browser Back / Forward also does not replace the active Dataset. New, Sample,
Open, and Resume replacement semantics remain unchanged and are deferred to
Dataset Replacement Safety work.

## Timeline return behavior

When returning to Timeline with an existing Event still present, the existing
Timeline behavior is accepted:

- the relevant Event remains selected;
- its card receives keyboard focus; and
- the card is scrolled into view, including for long Timelines.

Deleted Events and canceled draft Events do not receive return focus because
the target no longer exists.

## Verification

Manual acceptance covered:

- Home / Timeline Back and Forward;
- Timeline / Event Detail Back and Forward;
- Event Detail / Entity Picker Back and Forward;
- Entity Picker / Entity Create Back and Forward;
- Event Detail / Entity Detail Back and Forward;
- repeated Back / Forward context restoration;
- Timeline selection followed by Browser Back;
- Timeline return selection, focus, and auto-scroll;
- runtime hash-only changes; and
- Dataset preservation across Browser Back / Forward.

The previously observed intermittent Add Event return-to-Timeline display
issue was not reproduced after repeated checks. It is recorded as
`NOT REPRODUCED`, not as a separately fixed defect.

Automated verification of the accepted implementation:

- 48 tests passed;
- lint passed;
- production build passed; and
- `git diff --check` passed.

## Implementation checkpoints

- NarrativeLine: `6d5963e` — `feat: establish NarrativeLine navigation ownership`;
- NarrativeLine: `749ebcd` — `fix: deduplicate NarrativeLine history entries`.

These commits remain local and unpushed. The NarrativeLine worktree was clean
at acceptance.

## Documentation boundary

The known mismatch where `docs/MVP.md` describes Hour / Minute / Second as
Deferred while the current NarrativeLine implementation supports them remains
open. This NL-0 acceptance record does not correct that drift or synchronize
NarrativeLine's general documentation.

## Next stage

The next modernization stage is:

`NL-D1 Dataset Modification Baseline`

NL-D1 has not been implemented or accepted by this document.
