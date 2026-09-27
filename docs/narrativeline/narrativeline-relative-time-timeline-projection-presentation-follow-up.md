# NarrativeLine Relative Time Timeline Projection Presentation Follow-up

Status: Human-selected direction implemented; automated checks pass; Real
Browser and Human visual acceptance remain pending.
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

This note records the selected bounded implementation and its pending
acceptance state. It does not claim `ACCEPTED` or `CLOSED`; Human visual and
interaction review remains necessary.

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

NarrativeLine added an integration regression test covering duplicate named
Events, duplicate localized unnamed fallbacks, prefix extension, consistent
labels across projection surfaces, exclusion of same-name Events outside the
projection candidate set, and Event-button identity. Automated checks and the
Human Browser Acceptance handoff are recorded in the follow-up implementation
checkpoint. Human review remains pending; this identity correction is not
`ACCEPTED` or `CLOSED`.

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
