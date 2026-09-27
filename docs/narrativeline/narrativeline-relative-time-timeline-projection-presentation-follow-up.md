# NarrativeLine Relative Time Timeline Projection Presentation Follow-up

Status: **ACCEPTED / COMPLETE / CLOSED** — projection identity, band and
Recorded-pair presentation, and Event Detail Relative Time identity.
Date: 2026-09-27

## Observation

NarrativeLine's ordinary Timeline continues to use its History-centered
ordering. Recorded qualitative Relative Time `before` / `after` assertions
appear separately as a display-only partial-order projection. For undated
Events, the order shown by that projection can differ from their order in the
ordinary Timeline, which Human observation found confusing. As the number of
Events and Relative Time assertions grows, the separate projection may also
become long.

## Follow-up question

A future NarrativeLine presentation and information-hierarchy scope should
reconsider how the Relative Time projection is explained and visually related
to the ordinary Timeline. Human selected an initially collapsed whole
projection, a visibly primary ordinary Timeline heading, and Event Detail
heading typography for that heading. No internal projection restructuring was
selected.

The current-state evidence and bounded presentation candidates are recorded in
the [presentation audit 1 result](./narrativeline-relative-time-timeline-projection-presentation-audit1-result.md).

At implementation time this note recorded a pending acceptance state. The
Human Browser Acceptance and current disposition are recorded below.

## Event identity correction for Human review

Human Browser Review found that repeated fallback names such as `Unnamed Event`
could not identify which Event a projection button would open. NarrativeLine
now resolves labels against the Events represented in the Relative Time
projection, including cycle-suppressed groups. A unique displayed name remains
unchanged; collisions append a short canonical-ID prefix beginning at eight
characters and extending until it distinguishes the Events. Empty-name
fallbacks use the same rule. The same label is used in display bands, recorded
pairwise assertions, incomparable pairs, and cycle details; Event buttons
continue to navigate by the unchanged canonical Event ID. Chronology is not
used as a display discriminator.

NarrativeLine added integration regression tests covering duplicate named
Events, duplicate localized unnamed fallbacks, prefix extension, consistent
labels across projection surfaces, exclusion of same-name Events outside the
projection candidate set, and Event-button identity. A separate authoring
test checks matching labels between selector options, selected option, and
Recorded assertion rows in EN/JA, along with the unchanged Relation endpoints
on creation. Automated checks and the Human Browser Acceptance handoff are
recorded in the follow-up implementation checkpoint. Human review was pending
at that checkpoint; the current accepted disposition is recorded below.

Event Detail applies the same collision-safe presentation pattern to its
Relative Time authoring candidates. Its comparison set consists of every
Dataset Event other than the Event currently being edited, so selector options
and Recorded assertion counterparts resolve the same candidate to the same
label. The localized unnamed-Event fallback is the primary label when Name is
empty. Chronology is not used. This change is scoped to Relative Time authoring
and does not alter Timeline or Related Events identity presentation.

## Band presentation audit and Human decision (historical)

The current projection description already says that bands are derived from
recorded `before` / `after` assertions and their chains, are not saved, do not
represent dates, durations, or extra assertions, and leave Events in the same
band unordered. In the component DOM, however, every `.relative-time-display-band`
repeats the generic `Display placement` / `表示用の配置` label. CSS places each
band in a tinted padded row inside a bordered `.relative-time-projection-group`.
On narrow layouts the label moves above its Event buttons, so repetition also
adds vertical space. The row makes co-level Events visibly grouped, but the
generic label and box-like styling can suggest a stored placement record even
though the explanatory paragraph says otherwise.

Human should choose among presentation directions before implementation:

| Candidate | What changes | Main trade-off |
| --- | --- | --- |
| **Keep band grouping; remove each repeated label** | Retain every co-level Event group and its current visual containers; let the existing section explanation describe them once. | Reduces repeated wording and narrow-screen height, while tinted boxed rows can still look like saved records. |
| **Keep band grouping; use lighter grouping and one shared explanation** | Preserve which Events share a band, but reduce the repeated label and card-like fill/edges in favor of spacing or alignment. | Keeps unordered co-level grouping visible with less record-like weight; the grouping may become less obvious, especially in narrow layouts. |
| **Do not show band groups; retain pairwise assertions and incomparable details** | Remove the band partition from the visible projection while keeping recorded pairwise rows and unordered-pair details. | Avoids the repeated labels and band boxes, but loses the compact co-level overview and risks making a long row list look totally ordered. |

All three options leave the underlying partial-order calculation and Recorded
assertions unchanged. Removing the visible bands is distinct from styling the
same derived groups more lightly. This records the decision-preparation state
before Human selected a direction; the implementation status below supersedes
its pending-decision status.

## Human-selected band and recorded-relation presentation

Human selected retaining the display-band groups while removing the repeated
`Display placement` / `表示用の配置` label. Each band remains a list of Events,
now shown as a light shared group with a subtle border and background rather
than inside a strongly framed enclosing group. The projection explanation
states once that group positions are not saved, do not represent dates,
durations, or additional assertions, and that Events in the same group have
no recorded order relative to one another.

Recorded pairs now have the subsection heading `Recorded before/after
relations` / `記録された前後関係`. At wide widths a pair reads `A → B`; at
narrow widths it reads vertically as `A ↓ B`. The pair's own spacing stays
tight, while separate pairs have more space between them. The narrow arrow is
decorative; a visually hidden `before` / `より前` label supplies the direction
to assistive technology. Event buttons keep their existing canonical-ID
navigation and collision-safe display labels.

The band and pair display changes are implemented and their automated checks
pass. They do not change group or partial-order calculation, Recorded
assertions, Event identity, ordinary Timeline ordering, or Dataset contents.
The earlier candidate table above is historical decision preparation and is
not current implementation status.

The dedicated fixture
`examples/relative-time-0.2-draft/timeline-projection-multi-band-acceptance.json`
contains four undated synthetic Events and four `relative-position` assertions.
It is expected to project as `Opening Signal`, then an unordered shared band
containing `East Hall Gathering` and `West Hall Gathering`, then `Closing
Signal`. It is for application acceptance only; it has not been adopted as a
Hub or public sample. The NarrativeLine integration test loads this exact
cross-repository fixture and checks its projection grouping and separate
Recorded pair rows.

## Formal Human Browser Acceptance (2026-09-27)

Human reviewed the current NarrativeLine runtime in a real browser using the
dedicated multi-band fixture and accepted this bounded presentation and
identity scope:

- the Relative Time disclosure starts collapsed with the accepted EN/JA
  supplementary-view summary; the ordinary `Timeline` / `タイムライン`
  heading remains the primary list heading;
- the fixture shows three separate band regions with one, two, and one Events;
  the two middle Events share a single light band frame and do not appear to
  have a Recorded order between them;
- repeated `Display placement` / `表示用の配置` labels are absent, while the
  `Recorded before/after relations` / `記録された前後関係` section remains
  visually separate;
- wide and narrow pair layouts read `A → B` and `A / ↓ / B`, with enough
  narrow-screen separation to scan distinct pairs;
- EN/JA and an approximately 360px viewport have no observed horizontal
  overflow or clipping; and
- Event buttons open the intended Event Details.

Human also confirmed collision-safe Event identity in the projection and
Relative Time authoring UI. A unique display name remains name-only; duplicate
names (including localized empty-name fallbacks) receive a presentation-only
canonical-ID prefix beginning with the first eight characters and extending
only as needed to distinguish the candidate Events. The close-prefix examples
`01a0e27d-d`, `01a0e27d-e`, and `01a0e27d-f` were distinguishable in the
browser. This behavior is identifier-format agnostic; no UUIDv7-specific rule
or suffix policy is used. Full Event IDs remain canonical for button actions
and stored data. The same identity behavior in Recorded assertion counterparts
and new-relation choices is supported by current source and regression tests.

The multi-band JSON remains an application Acceptance fixture only; it has
not been adopted as a Hub Gallery or public sample. The accepted scope is
**FORMALLY ACCEPTED / COMPLETE / CLOSED**. It changes presentation only and
does not change Relative Time semantics, Relation identity, partial-order,
cycle, or incomparability behavior, ordinary Timeline / History ordering,
Dataset persistence, or Derived writeback. Mixed dated/undated placement,
consistency diagnostics, Derived inference, quantitative Relative Time, and
manual Timeline ordering remain out of scope.

## Preserved boundaries

This follow-up does not change Relative Time partial-order semantics, History's
responsibility for ordinary Timeline ordering, or Recorded assertion
semantics. It does not reopen mixed dated/undated Timeline placement, add
History/Relative Time consistency diagnostics, infer dates, durations, offsets
or temporal bounds, or write Derived results to Recorded data.

## Related authority

- [Current E2R-SPEC Roadmap status](../roadmap.md#current-status-index-2026-09-22)
- [NarrativeLine Relative Time 0.2.0 implementation result](../../../e2r-narrative-line/docs/relative-time-0.2.0-user-facing-slice-implementation-result1.md)
- [Current-state presentation audit and Human decision preparation](./narrativeline-relative-time-timeline-projection-presentation-audit1-result.md)
- [NarrativeLine implementation](../../../e2r-narrative-line/src/components/RelativeTimeTimelineProjection.tsx)
- [NarrativeLine projection integration tests](../../../e2r-narrative-line/tests/relativeTimePresentationIntegration.test.js)
