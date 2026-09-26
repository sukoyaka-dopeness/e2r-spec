# NarrativeLine Relation Blocker-Card Action Geometry Comparison

## Status

**DESIGN COMPARISON COMPLETE / RECOMMEND CANDIDATE B / IMPLEMENTATION NOT
AUTHORIZED**

This record is a bounded presentation comparison. It does not accept or
implement a runtime design.

## Why this comparison exists

The Entity deletion blocker dialog contains repeated Relation cards. Each card
currently presents Relation identity followed by a local `Remove connection`
action and, when eligible, an `Open in LiaisonScape` action. The current
vertical, start-aligned arrangement makes two-action cards unnecessarily tall
and allows the English destructive-action label to wrap at ordinary width.

The comparison evaluates local information/action hierarchy and card density.
It does not use or establish a global rule about where destructive actions must
be placed.

## Existing accepted boundaries

Capability Handoff acceptance remains **CLOSED / ACCEPTED**. The accepted
`relation.inspect` sender anchor, canonical Relation identity, same-tab
navigation, locale transport, and modified/pending Dataset safety are outside
this comparison and must remain unchanged.

The accepted deletion behavior also remains unchanged: Relations are explicit
Dataset Objects, incident Relations block Entity deletion, Relation removal is
explicit, self and parallel Relations remain distinct blockers, and no silent
cascade is introduced.

## Current geometry

The live NarrativeLine markup uses `.entity-delete-connection` for each card,
with `.entity-delete-connection__identity`, a `Remove connection` button, an
optional `.entity-delete-connection__handoff` anchor, and an inline
`.entity-delete-connection__confirmation` state.

The current CSS gives the card one grid column, an 8px gap, 8px padding, and
`overflow-wrap: anywhere`. The identity is its own nested grid. Each ordinary
button and Handoff anchor has `width: 10rem`, `max-width: 100%`,
`justify-self: start`, and a 4px top margin. Consequently, actions are
vertically stacked below the identity and begin at the card start edge. The
dialog remains capped at `28rem` wide and its Relation list owns the scrolling.

This explains both observed issues: the 10rem control can wrap `Remove
connection` under constrained available space, and a two-action card consumes
two action rows.

## Candidate A — current flow, end alignment only

The identity remains above the actions, and actions remain vertically stacked.
At ordinary width the action controls align to the card end; at narrow width
they may remain stacked.

This is the smallest implementation change and preserves the current card
height relationship for one-action cards. It improves the visual separation
between information and operation, but does not materially reduce the height
or scroll distance of two-action cards. It also does not by itself guarantee a
one-line English `Remove connection` label.

## Candidate B — compact horizontal action group below identity

The identity remains a distinct information block. The ordinary card places
the available local actions in one horizontal group below it, aligned to the
card end. At narrow width the group falls back to vertical stacking. The
ordinary-width group should provide enough local space for one-line English
`Remove connection` presentation where the card width permits it.

This directly addresses the two-action density problem while keeping identity
above operations. It also gives one-action and two-action cards the same local
hierarchy, with only the action-group contents changing.

## Candidate C — identity/actions side-by-side

The identity occupies one side of the card and the actions occupy the other.
The live dialog width is capped at 28rem, while Relation names, endpoint names,
and optional ID hints can be long. At that width, a side-by-side layout would
make the identity column compete directly with the action column and would
increase wrapping risk. It is therefore not credible as the default candidate
without a substantially more complex responsive design.

## EN/JA observations

English exposes the clearest defect: `Remove connection` can become two lines
when the action control's available width is reduced. Candidate B has the
strongest opportunity to reserve ordinary-width action space and keep the
label on one line.

Japanese labels are also long and must not be used as evidence that a fixed
width or unconditional `nowrap` is safe. Candidate A preserves the current
localized stacking behavior but leaves two-action density unchanged. Candidate
B is acceptable only with a narrow responsive fallback. Candidate C creates
the greatest risk of identity and action competition in both locales.

## Ordinary and narrow observations

At ordinary width, Candidate A improves alignment but retains two action rows.
Candidate B produces a shorter two-action card and a more legible sequence of
identity followed by actions. Candidate C spends the limited card width on two
competing columns.

At narrow width, Candidate A remains safe because it already stacks. Candidate
B should explicitly fall back to vertical stacking rather than forcing a
horizontal row or one-line labels. Candidate C requires the most breakpoint
behavior and is least predictable for long content.

## One-action and two-action observations

For a one-action card, Candidate A changes alignment only. Candidate B adds a
local action-group boundary but should not materially increase height.
Candidate C offers little benefit because there is no second action to justify
the horizontal identity/action split.

For a two-action card, Candidate A remains two rows and therefore retains the
largest dialog scroll cost. Candidate B can place `Remove connection` and
`Open in LiaisonScape` in one ordinary-width row and stack them at narrow
width. Candidate C may save vertical space, but only by reducing the width
available to long identity content.

With multiple Relation cards, Candidate B provides the largest likely reduction
in cumulative card height and scroll distance while retaining repeated local
hierarchy.

## Long-label observations

Long Relation names, endpoint names, and Relation ID hints favor keeping the
identity as a full-width block. Candidate B preserves that property. Candidate
A also preserves it but does not solve density. Candidate C puts the identity
under direct width pressure and is most likely to produce awkward wrapping or
uneven card heights.

No candidate justifies unconditional `nowrap` for every locale or viewport.
Any later implementation must use responsive constraints and verify long
labels rather than hiding or clipping them.

## Focus and confirmation preservation analysis

Candidate B can be implemented locally around the ordinary action controls
without changing the existing button and anchor semantics. The native Remove
button must remain the trigger that enters inline confirmation; the Handoff
anchor must remain a native same-tab link with its accepted contract.

The inline `.entity-delete-connection__confirmation` state is a preservation
boundary. It has a distinct two-column confirmation layout and must not be
forced into the ordinary action group. Existing Cancel focus, origin-trigger
focus restoration, surviving-Relation focus, safe `Keep Entity` focus, and
focus-visible outlines must remain unchanged.

Candidate A has the lowest implementation risk. Candidate B has moderate,
bounded CSS risk if the ordinary action group is separated from confirmation
layout. Candidate C has the highest risk because column changes can affect
focus-visible geometry, long-label wrapping, and responsive ordering.

## Comparison table

| Criterion | Candidate A | Candidate B | Candidate C |
| --- | --- | --- | --- |
| Information/action hierarchy | Clear, unchanged | Clear identity then compact actions | Competing columns |
| Ordinary EN | Alignment improves; wrapping remains possible | Best chance of one-line action | Width competition |
| Ordinary JA | Safe stacking | Compact if width permits | Highest wrapping risk |
| Narrow behavior | Already safe | Explicit vertical fallback required | Complex fallback required |
| One-action card | Minimal change | Consistent action-group treatment | Little benefit |
| Two-action card | Remains tall | Lowest height and scroll cost | Potentially compact but identity-constrained |
| Multiple cards | Density unchanged | Best cumulative density improvement | Uneven long-content risk |
| Long labels | Full-width identity preserved | Full-width identity preserved | Identity width reduced |
| Focus-visible geometry | Lowest risk | Moderate local CSS risk | Highest risk |
| Confirmation preservation | Straightforward | Safe if confirmation stays separate | Greater layout coupling |
| Implementation complexity | Low | Moderate and bounded | High |
| Notable downside | Does not solve density | Needs responsive breakpoint tuning | Not credible at current width |

## Decision

**RECOMMEND CANDIDATE B.**

Candidate B best addresses the observed repeated-card problem: it preserves a
full-width Relation identity block, reduces ordinary-width two-action card
height, improves action hierarchy, and allows a narrow-width stacking
fallback. This is a recommendation for a later implementation checkpoint,
not implementation acceptance.

## Implementation boundary

A later separately authorized checkpoint may adjust only the repeated ordinary
Relation-card action geometry in NarrativeLine. It must compare EN and JA,
ordinary and narrow widths, one- and two-action cards, multiple cards, long
labels, focus-visible states, and the unchanged inline confirmation state.

It must preserve the accepted Handoff anchor and safety behavior. The endpoint
separator correction must remain a separate reviewable presentation change.

## Explicit exclusions

This comparison does not modify NarrativeLine runtime source, Entity deletion
or Relation deletion semantics, inline confirmation behavior, focus
restoration, `Keep Entity` footer placement, locale semantics, Capability or
Dataset Handoff, Core, Extensions, schemas, LiaisonScape, Hub, or
ai-knowledge. It does not create a global destructive-action alignment rule or
a Cross-App `safe-left / danger-right` rule. The endpoint-separator mojibake is
untouched. No push or deployment is authorized by this record.
