# NarrativeLine Perspective Ordering Drag and Drop — Human Acceptance

Date: 2026-09-29

Status: **HUMAN ACCEPTED / CLOSED — APPLICATION INTERACTION**

Current planning authority: [E2R Roadmap](../roadmap.md).
Application implementation and verification: [NarrativeLine result](../../../e2r-narrative-line/docs/perspective-ordering-dnd-implementation-result.md).

This closure covers Drag & Drop as a supplementary input to NarrativeLine's
existing Perspective display-order operation. It does not reopen the accepted
[Perspective 0.1.0 Timeline Ordering](narrativeline-perspective-timeline-ordering-formal-human-acceptance-packet.md)
or [ordering progressive disclosure](narrativeline-progressive-disclosure-human-acceptance.md).
The earlier ordering packet's future ordinary-Timeline direct-drag direction
remains historical evidence of that checkpoint. The later Human selection of
explicit editing mode governs the implemented DnD interaction recorded here.

## Accepted interaction boundary

- Ordinary Timeline remains read-oriented: card drag does not change the
  Dataset. Card click and normal text interaction remain available.
- Explicit, session-only **Edit display order** mode enables card-wide drag,
  without a dedicated handle. The existing ↑/↓ controls remain a complete
  keyboard-only ordering path.
- The whole destination card is the drop target. Its surface is the primary
  visual cue; the subdued before/after line gives the insertion position.
  There is no third "center" ordering meaning.
- Editing-mode drag avoids unintended native text selection. Card buttons and
  disclosure controls retain their own actions. Long-Timeline edge scrolling,
  post-drop selection/focus, and reduced-motion operation remain available.
- Drag and ↑/↓ use the same existing Perspective ordering semantics. DnD
  writes no portable gesture or visual state. Core Event order, History,
  Relative Time, dates, and temporal fields remain outside the operation.

## Human Browser Acceptance evidence

The Human reported PASS for card-wide drag, the card surface as the primary
drop affordance with before/after lines as acceptable secondary feedback,
resolved unintended text selection, no ordinary-mode reorder, practical
distant drag and viewport-edge scrolling on a long Timeline, retained
selection/focus after drop, and normal card controls including Edit and Review
display order. The Human confirmed reduced-motion drag/drop and ↑/↓ results
were operable and understandable. A physical-touch DnD operation was confirmed
in an earlier Human check; this record does not claim a new final touch retest
or extend that observation to every touch gesture boundary.

The application checkpoints were `16ed9a2` (initial), `e917af8` (text
selection and hit area), `8c2aa0f` (card highlight), and `dc274fa` (visual
hierarchy). At closure, NarrativeLine's automated gates passed: 325/325
tests, lint, build, and diff check. The application result records the tested
mutation and preservation boundaries; the Human observations above remain
separate from those automated checks.

No Perspective Candidate, Core, History, Relative Time, schema, Validator,
or portable Dataset contract changed. This application-level closure does not
promote Perspective to Stable, register new Validator support, or authorize
deployment or publication.
