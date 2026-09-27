# NarrativeLine Relative Time Timeline Projection Presentation Follow-up

Status: Current-state audit complete; Human presentation decision and any
implementation prioritization remain pending.
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
to the ordinary Timeline. Progressive disclosure or folding may be explored
if the projection becomes lengthy; neither approach is selected by this
record.

The current-state evidence and bounded presentation candidates are recorded in
the [presentation audit 1 result](./narrativeline-relative-time-timeline-projection-presentation-audit1-result.md).

This note records a presentation follow-up, not authorization to implement a
particular UI change. Human scope selection and acceptance remain necessary.

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
