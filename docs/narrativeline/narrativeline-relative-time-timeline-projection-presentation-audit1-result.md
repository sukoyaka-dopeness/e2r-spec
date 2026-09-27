# NarrativeLine Relative Time Timeline Projection Presentation Audit 1

Date: 2026-09-27

Status: **CURRENT-STATE AUDIT COMPLETE / HUMAN PRESENTATION DECISION PENDING**

## Scope

This audit prepares a bounded presentation decision for the existing
Relative Time Timeline projection. It does not authorize runtime work or
change the Relative Time, History, or Timeline contracts.

Evidence reviewed:

- NarrativeLine `TimelineScreen.tsx`,
  `RelativeTimeTimelineProjection.tsx`, `RelativeTimeService.ts`,
  `HistoryService.ts`, and their presentation/service tests;
- the existing [Relative Time implementation and browser acceptance
  result](../../../e2r-narrative-line/docs/relative-time-0.2.0-user-facing-slice-implementation-result1.md);
- the current [follow-up record](./narrativeline-relative-time-timeline-projection-presentation-follow-up.md)
  and E2R-SPEC Roadmap status; and
- Human Review reported for this checkpoint: the two displayed orders can be
  mistaken for competing answers, and the projection can become long as the
  Dataset grows.

No new browser session was run. The existing Manual Acceptance record remains
applicable: the History-free chain projection and ordinary History/date list
were both present; EN/JA and 921px, 600px, and 360px layouts were inspected;
no horizontal overflow was observed. The browser screenshot command had timed
out, so that record relies on live UI and measured DOM geometry. Current
NarrativeLine changes since that acceptance do not alter Timeline ordering,
the projection component, or its styles. The user-reported order confusion is
current Human Review evidence, not a newly claimed browser measurement by this
audit.

## Current responsibility boundary

The ordinary Event list is sorted by `compareEventsByHistoryDate` in
`TimelineScreen.tsx`. That comparator uses available History date and
`temporalOrder`, then Event ID as its stable fallback. Relative Time assertions
do not enter that comparator. Thus undated Events can appear in ID order in the
ordinary list while their separate Relative Time projection shows a different
partial order.

`RelativeTimeTimelineProjection` is rendered immediately before the ordinary
Event list. It builds its own display bands from eligible History/date-free
Event endpoints and Recorded qualitative `before` / `after` edges. It does not
write band placement or any other Derived value to the Dataset. The projection
does not combine History-bearing and undated Events. Cycle handling suppresses
the affected projection group and reports the affected names; it does not
repair Recorded Relations. Incomparable pairs remain unordered and are
available under a native, initially collapsed `<details>` disclosure.

The semantic responsibility split is intact. The confusing part is how it is
presented on one screen: the Relative Time panel appears before the ordinary
list, while the ordinary list has no visible section heading. The panel title
`Recorded relative order (display only)` / `記録された相対順序（表示用）`
combines language about Recorded facts with Derived display placement. Its
description explains that bands are not dates, durations, or extra assertions,
but does not directly say that ordinary Timeline ordering remains a separate
view. A user can therefore read the prominent bands as the Timeline's answer
and then encounter a different order in the list below.

## Growth and information hierarchy

Each projection group is currently fully expanded. It shows every eligible
Event once in its display band, then one row for each unique directed pairwise
edge, with both Event names rendered again as buttons. Same-direction
assertions for the same endpoints are deduplicated by the projection edge
builder, so these rows are not a complete inventory of Relation records or
Relation identities. The full independent Recorded Relations remain
authorable in Event Detail. The projection currently has no summary count or
disclosure for its bands and pairwise rows.

For a chain of `n` Events, visible content grows with the number of Events and
edges and repeats Event names in the edge rows. In a sparse partial order, the
incomparability set can grow quadratically: the service enumerates each
unordered pair in a connected component and the UI retains those pairs in its
disclosure list. That list is collapsed initially, but the DOM/data still
grows with it. Multiple disconnected components add groups. Therefore
longitudinal growth is not only panel height; pairwise incomparability detail
can dominate for sufficiently large groups.

At narrow widths, the band label and Event buttons reflow into a single-column
layout, and button text may wrap. Existing 600px / 360px browser measurements
show no horizontal overflow for the accepted fixture, but they do not
establish comfortable height or scanability for large graphs. In the 641–1024px
range, the description currently uses smaller text, another reason a future
visual review should include intermediate widths rather than infer readability
from overflow alone.

## Accessibility observations

The projection is a labelled `<section>` with an `<h2>`. Event names are
keyboard-focusable buttons that open the corresponding Event Detail. The
incomparability list uses native `<details>/<summary>`, inheriting keyboard
toggle and expanded-state semantics. Cycle information uses `role="status"`.

Any future disclosure should retain an understandable accessible name, native
or equivalent keyboard operation, visible focus, and a predictable focus
sequence. A collapsed projection should expose enough summary context to
identify what is hidden, and opening/closing it must not trap focus. Large
expanded lists should avoid needlessly repeated focus stops where presentation
can remain understandable without making every repeated Event label a control;
changing those controls would require acceptance of the Event-editing
interaction contract.

## Presentation candidates for Human decision

These alternatives preserve the existing Recorded / Derived boundary. None is
selected by this audit.

| Candidate | What it may improve | Main trade-off | Semantic boundary / ordinary Timeline | Scale, narrow layout, accessibility |
| --- | --- | --- | --- | --- |
| **A. Clarify the two views in headings and copy**: give the ordinary list a visible heading and describe the Relative Time area explicitly as the display-only partial order of undated Events, separate from ordinary Timeline order. Keep current content and placement. | Makes it easier to understand why the same Event names appear in different orders; smallest information-hierarchy change. | The full panel remains prominent and long. More explicit explanatory text consumes space. | No comparator or data change. Makes the existing separation visible. | Low layout risk; copy must fit EN/JA at narrow widths. Preserve heading hierarchy and labelled section semantics. |
| **B. Progressive disclosure for the whole Relative Time projection**: show a concise labelled summary and let the user open the bands, pairwise rows, and conflict details. | Reduces initial page length and prevents a large projection from dominating the ordinary list. | Users may miss the Relative Time view; a useful summary/count and discoverable summary label need Human selection. | No semantic change. It makes the projection's secondary role explicit but may reduce its proximity to the ordinary Timeline. | Handles large content best while closed. Native `<details>/<summary>` can preserve keyboard disclosure; test focus visibility, screen-reader naming, and EN/JA summary wrapping. |
| **C. Keep a compact band overview visible and disclose supporting pairwise details**: retain the projected placement as the concise result; put its edge explanations and incomparability pairs behind a clearly named disclosure. | Gives users the partial-order overview while reducing repeated names and supporting detail in the initial view. | Still needs a rule for how much of a large band overview to show. Pairwise rows can be mistaken for a complete Recorded Relation list unless explicitly described as deduplicated projection edges. | Does not change projection or Recorded data. The view should state that displayed pairwise paths summarize direction, not Relation identity. | Better initial height for chains and normal-sized graphs, but the visible band overview can still grow. Native disclosure is keyboard-friendly; avoid inaccessible or repeated controls when supporting details are collapsed. |

The choices leave two Human decisions open: whether the Relative Time result
should be immediately visible or initially disclosed, and whether ordinary
Timeline order should receive a stronger visual anchor relative to the
projection. Copy, placement, and disclosure may be combined later only after
Human selects the intended hierarchy.

## Preserved boundaries and disposition

This audit does not change:

- ordinary Timeline comparison or History/date ordering;
- Relative Time `before` / `after`, Relation orientation, or independent
  Recorded assertion identity;
- partial-order, incomparability, or cycle behavior;
- History-bearing Event exclusion from the current Relative Time projection;
- Dataset persistence, Derived writeback, or authoring UI; or
- scope for mixed dated/undated placement, consistency diagnostics, inferred
  dates/bounds, quantitative Relative Time, or manual Timeline ordering.

No NarrativeLine runtime source, test, Candidate schema, History specification,
Relative Time Draft, or Validator was changed. This is decision preparation,
not acceptance or implementation authorization. Human presentation direction
and any resulting acceptance scope remain pending.

## Source references

- NarrativeLine `src/screens/TimelineScreen.tsx` — ordinary comparator use,
  projection placement before the ordinary Event list.
- NarrativeLine `src/components/RelativeTimeTimelineProjection.tsx` — labels,
  content structure, cycle status, and incomparable-pair disclosure.
- NarrativeLine `src/services/HistoryService.ts` — History/`temporalOrder` /
  ID comparison.
- NarrativeLine `src/services/RelativeTimeService.ts` — eligible endpoints,
  unique directed edges, display bands, cycle suppression, and pairwise
  incomparability enumeration.
- NarrativeLine `tests/RelativeTimeUserFacingService.test.js` and
  `tests/relativeTimePresentationIntegration.test.js` — chain, incomparability,
  cycle, History exclusion, and display-only preservation evidence.
