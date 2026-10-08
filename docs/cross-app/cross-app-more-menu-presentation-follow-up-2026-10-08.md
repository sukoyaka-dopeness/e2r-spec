# Cross-App More Menu Presentation Follow-up

Date: 2026-10-08

## Status

- Human-selected design direction: **ADOPTED**
- Follow-up: **OPEN**
- Implementation: **NOT IMPLEMENTED**
- Human implementation acceptance: **NOT HUMAN-ACCEPTED**

The Human Browser Review observed visual inconsistency in the More menus of
ParameterPlotter, NarrativeLine, and LiaisonScape. The Human selected
NarrativeLine's current More menu as the visual reference for a future,
independent UI-consistency pass.

## Adopted presentation direction

Use NarrativeLine's simple text-row presentation as the reference for these
visual properties across the three applications:

- menu-item typography and text size;
- spacing between items;
- text alignment;
- the visual treatment of each item; and
- the popup's overall visual hierarchy.

The direction is to review LiaisonScape's framed-button treatment and
ParameterPlotter's differing text size and spacing against that reference.
This decision concerns presentation only. It does not require the applications
to expose the same menu items or functions, and it does not select CSS values or
an implementation technique.

Each application must retain its existing menu functions and interaction
contracts, including keyboard operation, focus management, dismissal, and
accessibility. Any implementation should compare the actual app surfaces and
preserve those responsibilities; this record does not authorize a broader
visual redesign.

## Acceptance boundary

The Human selected the design direction. No implementation or Human acceptance
of an implementation is recorded here. Browser geometry review and Human visual
and interaction acceptance remain future work. This follow-up is independent
of ParameterPlotter's Candidate 0.2.0 Description acceptance and does not change
its status.

During the related ParameterPlotter review, the Human clarified that the
Description omitted from Export JSON for Dimension 2-2 had been deliberately
removed for a deletion test. That observation is not evidence of a Description
loss defect. No existing ParameterPlotter acceptance record containing the
contrary suspicion was found during this documentation checkpoint, so no prior
acceptance record was rewritten. Candidate 0.2.0 remains outside the scope of
this follow-up.
