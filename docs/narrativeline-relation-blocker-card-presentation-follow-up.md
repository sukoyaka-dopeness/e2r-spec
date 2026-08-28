# Status

**FOLLOW-UP / PRESENTATION ONLY / NOT A CAPABILITY HANDOFF BLOCKER**

This follow-up records observations from the public NarrativeLine sender
surface during [XAPP-CAPABILITY-HANDOFF12 public NL-to-LS acceptance](cross-app-capability-handoff-public-nl-ls-acceptance.md).
The Capability Handoff current-source and public acceptance remains CLOSED and
is not reopened by this record.

# Scope

The subject is the NarrativeLine Entity deletion blocker dialog, specifically
repeated Relation-card information and local card actions. This is a visual
and copy follow-up only. It does not change Relation identity, deletion
semantics, Handoff behavior, Dataset behavior, or application ownership.

# Observation source

The public fixture blocker dialog was inspected in English and Japanese. The
Clara Entity case displayed eight blocking Relations and exposed the local
actions `Remove connection` / `つながりを削除` and `Open in LiaisonScape` /
`LiaisonScapeで開く`. The observation was made after public sender deployment;
it was not a failure of the sender contract or recipient resolution.

# Relation card action alignment

The Relation-card actions currently begin at the same left edge as the
Relation identity and are vertically stacked. This makes the information and
operation hierarchy less distinct.

The preferred candidate for later visual acceptance is to align the repeated
card action group at the card end, with right alignment at ordinary width. This
is a local repeated-card treatment, not a Cross-App rule that destructive
actions must always be on the right. A narrow layout may fall back to vertical
stacking when the available width requires it.

Do not introduce a global `safe-left / danger-right` button-placement rule from
this observation.

# Remove connection English button wrapping

The English `Remove connection` action was observed wrapping as:

```text
Remove
connection
```

The observation is treated as a button-geometry and available-width issue,
not as a `text-align` defect. The two-line button increases its height and
action density, making the operation more visually prominent than the Relation
information and producing EN/JA card-height differences.

Candidate directions for a later bounded implementation and visual acceptance
are `white-space: nowrap`, an appropriate button minimum width, and improved
local action-group geometry. Normal width should prefer one-line English
presentation. Extreme narrow layouts may use a responsive fallback rather than
guaranteeing one line at every width.

# Two-action Relation card density

Capability Handoff adds a second local action to some Relation cards:

- `Remove connection` / `つながりを削除`;
- `Open in LiaisonScape` / `LiaisonScapeで開く`.

The current vertical stack increases card height and dialog scroll distance
when many Relations are present. A later comparison should evaluate compact
horizontal action groups with end alignment at ordinary width and a vertical
fallback at narrow width. Exact geometry is intentionally not accepted by this
record.

# Relation endpoint separator mojibake

Relation endpoint presentation was observed with a mojibake separator, for
example:

```text
Clara Bennett 縺? Thomas Hale
```

This is a **KNOWN PRESENTATION DEFECT / DEFERRED FIX**. It is not Dataset
corruption and does not change canonical Relation identity or the Handoff
payload. The likely presentation source is:

`e2r-narrative-line/src/services/RelationPresentationService.ts`

The intended presentation is:

```text
source → target
```

A future fix must regression-check EN and JA for ordinary, self, parallel, and
hidden/Event-related Relations, both in the blocker dialog and when Handoff
actions coexist with the endpoint presentation.

# Dialog footer action

`Keep Entity` / `エンティティを残す` remains on the left side of the dialog
footer. This is not currently classified as a clear defect. Relation-card
actions and dialog-level footer actions have different responsibility levels;
their placement must not be changed as one global adjustment.

# Acceptance boundary

This record is not an accepted design and contains no runtime change. A later
bounded presentation checkpoint must decide the visual geometry using normal
and narrow widths, EN and JA, keyboard/focus behavior, multiple cards, and the
two-action state. It must preserve the existing sender anchor, target identity,
locale fields, and safe modified/pending behavior.

# Explicit exclusions

This follow-up does not change:

- Entity deletion semantics;
- Relation deletion semantics;
- the Capability Handoff contract;
- Dataset Handoff;
- Core, Extension, or schema;
- generic dialog button alignment;
- a Cross-App global destructive-action placement rule;
- Dataset or public storage behavior;
- LiaisonScape runtime or deployment;
- Hub or ai-knowledge.

# Next bounded step

## Control-internal label alignment follow-up

During the recovered local Lighthouse Restoration blocker dialog, the
`Remove connection` label appeared centered inside its button while `Open in
LiaisonScape` appeared start/left-aligned inside its button-like anchor. Both
controls belong to the same ordinary Relation-card action group. The outer
action-group alignment and the internal alignment of text within each control
are separate presentation concerns. This observation does not redefine
Candidate B's card-end alignment or its compact grouping.

This is a **KNOWN PRESENTATION DEFECT / FOLLOW-UP**. It is not evidence of a
Capability Handoff failure, Relation or Entity deletion failure, Dataset
failure, accessibility failure, or Cross-App rule violation.

A later NarrativeLine control-label audit should compare ordinary `<button>`
controls and button-like anchors across modal/dialog actions, workspace
controls, Detail actions, Timeline controls, Home actions, and other repeated
control groups. The audit should cover centered versus start-aligned labels,
multi-line labels, EN and JA, ordinary and narrow widths, button versus anchor
controls, and consistency inside matched action groups.

No universal rule is accepted here. The later audit must determine whether
alignment should be globally normalized, normalized only inside matched action
groups, preserved by control role, or handled through another local rule.

Candidate B Formal Visual / Manual Acceptance remains pending. This unresolved
control-label observation must remain visible until that acceptance is
completed. It does not reopen Capability Handoff acceptance, deletion
semantics, Dataset Handoff, the corrected endpoint separator, or Candidate B's
automated implementation result.

Keep this item deferred as Presentation-only. If implementation is authorized,
perform the card-action geometry and endpoint-separator work as separately
reviewable presentation changes, followed by dedicated visual acceptance. Do
not treat either observation as a Capability Handoff blocker.
