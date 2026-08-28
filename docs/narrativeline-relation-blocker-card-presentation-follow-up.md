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

## Relation identity presentation with long Object names

### Current NarrativeLine presentation

The current blocker card separates Relation name from its endpoints:

```text
Relation name
source 竊・target
```

A secondary Relation ID hint may be added when ambiguity requires it. This
compact form is readable when endpoint Object names are short.

### LiaisonScape comparison evidence

A current LiaisonScape Entity deletion blocker was manually inspected. Its
repeated Relation identity cards explicitly separate the following identity
fields:

```text
縺､縺ｪ縺後ｊ縺ｮ蜷榊燕  <Relation name>
蟋狗せ            <source Object name>
邨らせ            <target Object name>
```

This is Cross-App presentation evidence only. It does not establish a
normative E2R rule, and it does not require NarrativeLine and LiaisonScape to
render Relation identity identically.

### Long-name robustness concern

NarrativeLine's combined `source 竊・target` presentation becomes less robust
when one or both endpoint Object names are long. Wrapped source and target
become harder to distinguish; endpoint role must be inferred from arrow
position; arrow placement can become visually awkward after wrapping; long EN
and JA names may produce substantially different wrapping; additional endpoint
or Relation ID hints increase visual ambiguity; and scanning several blocker
cards becomes harder when wrapped endpoint boundaries differ card by card.

This is an **PRESENTATION FOLLOW-UP / LONG-NAME ROBUSTNESS** finding. It is
not a Dataset defect, Relation semantic defect, Capability Handoff defect,
confirmed accessibility failure, or requirement for identical Cross-App UI.

### Safety and responsibility context

This is an Entity deletion blocker surface, not merely compact Relation
display. Before choosing `Remove connection`, the user must be able to
understand which incident Relation is being reviewed. Endpoint role clarity
may therefore appropriately take priority over minimum card height. Relation
semantics and deletion semantics are unchanged.

### Preferred future candidate

A preferred future presentation candidate is role-explicit identity rows,
conceptually:

```text
Relation name  <name>
Source         <source Object identity>
Target         <target Object identity>
```

The Japanese comparison is:

```text
縺､縺ｪ縺後ｊ縺ｮ蜷榊燕  <name>
蟋狗せ            <source Object identity>
邨らせ            <target Object identity>
```

Exact visual geometry is not accepted by this checkpoint. Later comparison
must still decide row structure, label width, spacing, unnamed Relations,
Relation ID and duplicate-name hint placement, long-value wrapping,
narrow-width behavior, EN/JA label width, and whether to match LiaisonScape
exactly or only share responsibility separation.

### Density trade-off and later comparison

The current NarrativeLine two-line identity is more compact. LiaisonScape-style
role separation increases vertical height; vertical density alone is not
decisive. A later comparison should cover short names, long source only, long
target only, both endpoints long, EN, JA, multiple Relation cards, narrow
width, Relation ID hints, duplicate endpoint-name hints, and ordinary, self,
parallel, and Event-related Relations.

The useful Cross-App observation is narrower: explicit source/target roles
appear more resilient to long Object names in a destructive-review surface.
Whether both applications should converge on identical markup or styling
remains undecided.

### Candidate B boundary and formal status

Relation identity presentation, outer action-group geometry, and internal
control-label alignment remain separate responsibilities. This observation
does not reopen or redefine Candidate B automatically. Candidate B Formal
Visual / Manual Acceptance remains pending, and this unresolved identity
presentation concern remains visible as a Presentation follow-up before final
blocker-card presentation closure.

This observation does not reopen Capability Handoff, Entity deletion or
Relation deletion semantics, endpoint separator correction, Dataset Handoff,
Core / Extension / schema, or LiaisonScape runtime acceptance. No Source/Target
rows, card markup, card height, Candidate B geometry, or control-label
alignment are changed by this documentation checkpoint.

## Formal Acceptance closure — 2026-08-28

**FORMALLY ACCEPTED / COMPLETE / CLOSED**

The bounded NarrativeLine Relation blocker-card presentation workstream is
formally accepted and closed at NarrativeLine runtime commit `4591f3a`. The
formal acceptance record is
[NarrativeLine Relation Blocker Presentation Formal Acceptance](narrativeline-relation-blocker-presentation-formal-acceptance.md),
accepted by e2r-spec commit `2b52f15`.

The accepted identity presentation uses explicit, independently wrappable
rows for `Relation Name`, `Source`, and `Target`. The Japanese labels are
`縺､縺ｪ縺後ｊ縺ｮ蜷榊燕`, `蟋狗せ`, and `邨らせ`. Endpoint role is therefore
separated from the value, while secondary Relation-ID and endpoint hints are
preserved where applicable.

The accepted action presentation uses Candidate B's compact card-end action
group at ordinary width, with a narrow-layout fallback. The matched
`Remove connection` / `Open in LiaisonScape` control labels and the internal
Handoff label alignment are accepted as aligned within their local action
group. No global destructive-action placement rule was introduced.

The acceptance preserves Entity and Relation deletion semantics, inline
confirmation, focus behavior, safe modified/pending behavior, and Capability
Handoff semantics. The manual evidence covered Edge real-browser EN and JA
ordinary-width and approximately 360px states, eight blocker cards,
long-name robustness, one- and two-action cards, confirmation and focus,
keyboard behavior, scrolling, and absence of visible mojibake. Automated
evidence was 197/197 tests passing with lint, build, and diff-check passing.

This closure resolves the earlier Candidate B geometry uncertainty, Candidate
C identity uncertainty, Japanese Relation-label mojibake, and matched
blocker action-label alignment findings within this workstream. Those findings
remain valid historical intermediate evidence and are not rewritten. The
Capability Handoff acceptance remains independently **CLOSED / ACCEPTED**.
This closure does not reopen Cross-App work and does not change Entity or
Relation semantics, Dataset Handoff, Core / Extension / schema, Hub,
LiaisonScape, or ai-knowledge.

The earlier endpoint-separator encoding observation was subsequently resolved
by NarrativeLine commit `0eae8df fix: correct Relation endpoint separator`,
which changed the separator to the intended/current `→`. That correction
preceded the final combined blocker acceptance and is included in accepted
runtime `4591f3a`; it is no longer an open Presentation follow-up. The later
Japanese Relation-label mojibake was a separate incident introduced by
`529f209` and corrected by `da54d55`; the two incidents must not be conflated.
