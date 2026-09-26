# Status

NL-PRESENTATION-1G is an audit-only design-evidence record. The audit is complete. No NarrativeLine runtime, CSS, test, message, or RelationPresentationService source was changed, and no existing e2r-spec document or roadmap entry was changed.

Primary classification: **MATCHED-GROUP PATTERN**.

Candidate B formal acceptance remains pending. Capability Handoff acceptance remains CLOSED / ACCEPTED.

# Why this audit exists

NL-PRESENTATION-1F2 recorded a visible difference between the native `Remove connection` button and the `Open in LiaisonScape` button-like anchor in the same Relation blocker card action group. This audit checks whether that difference is local, repeated across matched groups, or evidence of a broader control-label alignment problem.

# Scope

The audit covers user-visible controls in the current NarrativeLine application at NL HEAD `0eae8df`: Relation blocker cards, dialogs, detail actions, timeline/workspace actions, Home, Entity Picker, header, locale, Credits, and related-card controls. It compares semantic role, grouping, geometry, CSS alignment mechanisms, English/Japanese labels, ordinary desktop presentation, and narrow-width presentation.

The recovered public lighthouse fixture was used for the Relation blocker observations. The audit does not reopen or replace the formal 1F visual acceptance.

# Control inventory

- Native buttons: header navigation, workspace menu, dialogs, detail save/discard/delete/association actions, timeline actions, Home actions, Entity Picker actions, coordinate editing, and related-card actions.
- Button-like anchor: the Relation blocker card's `Open in LiaisonScape` Handoff control.
- Ordinary anchors: external repository links in Credits and other navigation/content links. These are not treated as button-equivalent controls merely because they are clickable.
- Composite groups: `.modal-actions`, `.detail-primary-actions`, `.related-card__actions`, `.entity-picker-card__footer`, `.entity-delete-connection__actions`, and workspace/header control clusters.

# CSS alignment mechanisms

The shared button styling supplies the native button geometry and browser-default centered label behavior. Several groups use flex layout for outer placement: modal and related-card actions generally end-align, detail actions split primary and exit regions, and narrow layouts switch selected groups to start-aligned or stacked flow.

The Relation blocker action group explicitly uses `display: flex`, wrapping, `justify-content: flex-end`, an 8px gap, and a 10rem minimum width for both direct buttons and the Handoff anchor. The anchor uses `display: inline-flex` and `align-items: center`, but has no `text-align` rule. Consequently its label remains start-aligned, while the native button label remains centered. At widths up to 600px the group stacks and both controls become full width; this changes outer geometry but does not establish common internal label alignment.

# Browser environment

Evidence was collected from the local Vite application in Edge using the recovered HTTPS lighthouse fixture, with English and Japanese locale paths inspected at ordinary desktop presentation and a 360px narrow viewport. The fixture produced populated Relation blocker cards, including ordinary and self/parallel/duplicate relation cases. No source encoding corruption was observed in the current UTF-8 source; the isolated endpoint-separator issue is outside this audit.

# Relation blocker action group

**A — CONFIRMED INCONSISTENCY.** In populated ordinary cards, `Remove connection` is a native button whose label is centered within its 10rem minimum-width box. `Open in LiaisonScape` is a visually button-like anchor with the same group-level sizing, but its label is start-aligned. The controls share action-group membership, height intent, width intent, gap, and interaction purpose. The difference is therefore not explained by a meaningful role distinction at this visual boundary.

At narrow width both controls become full-width and stack vertically. The mismatch in internal label alignment remains observable as a control-label difference, although the group remains usable and no clipping or blank state was observed. Japanese labels preserve the same geometry relationship; the longer labels increase wrapping pressure under the narrow rule but do not change the finding.

# Modal/dialog controls

**C — CONSISTENT** for matched native-button groups. Entity deletion, event deletion, association removal, dataset replacement, locale conflict, and back-confirmation dialogs use native buttons in modal action regions. Their outer alignment and wrapping vary by dialog purpose, but there is no button-like anchor paired with a native button in the same action group.

**B — INTENTIONAL / ROLE-DIFFERENT** for dialog content or external links that are not action-group peers. Confirmation and destructive-action emphasis are preserved as separate semantic roles.

# Detail controls

**C — CONSISTENT** within native-button detail primary, exit, save, discard, and relation-confirmation groups. Primary/exit placement and destructive styling are deliberate group-level distinctions. The Relation blocker Handoff is the only observed button-like anchor that is geometrically normalized with a native action button in the same local group.

# Timeline/workspace controls

**C — CONSISTENT** for timeline and workspace button clusters. Their flex placement, menu behavior, and narrow-width stacking are group-specific but consistent among native buttons. Menu or navigation links that are not button peers remain role-different.

# Home controls

**C — CONSISTENT** for Home's full-width and stacked native actions. Full-width geometry is intentional and does not imply that unrelated content anchors must receive button-label treatment.

# Entity Picker and related-card controls

**C — CONSISTENT** for Entity Picker selection/create/back controls and related-card native action clusters. Disabled selection buttons, create actions, and related-card action placement express state or card structure rather than a cross-application label-alignment defect.

# Header / locale / Credits controls

**B — INTENTIONAL / ROLE-DIFFERENT** for header navigation, locale controls, and Credits repository anchors when compared with native buttons. Repository anchors are ordinary external links, not members of a matched action-button group. Locale choice buttons are matched native buttons and are internally consistent.

# Button versus button-like anchor findings

The audit found one confirmed matched-group inconsistency: the Relation blocker native button versus Handoff anchor. It found no evidence that all anchors should inherit native-button centered labels, and no repeated native-button inconsistency requiring a global rule. The key boundary is shared visual action-group membership, not clickability alone.

# EN / JA observations

English and Japanese controls use the same DOM roles and CSS paths for the audited groups. Label length affects wrapping and available space, especially at 360px, but does not create a separate alignment defect. The Relation blocker mismatch is present in both locales.

# Ordinary / narrow-width observations

At ordinary desktop width, the Relation action group is end-aligned and horizontally arranged when both actions are present; the native label is centered and the anchor label starts at its content inset. At 360px, the group becomes a vertical, full-width stack. Cards remain populated, action controls remain visible, and the separate inline confirmation behavior remains distinct from the ordinary action group.

# Confirmed inconsistencies

- **A — CONFIRMED INCONSISTENCY:** Relation blocker `Remove connection` and `Open in LiaisonScape` use matched 10rem action geometry but different internal label alignment.

# Intentional or role-different cases

- **B — INTENTIONAL / ROLE-DIFFERENT:** ordinary external/navigation anchors versus native application-command buttons.
- **B — INTENTIONAL / ROLE-DIFFERENT:** destructive, confirmation, disabled, menu, and primary/exit distinctions.
- **C — CONSISTENT:** matched native-button groups in dialogs, detail screens, Timeline, Home, Entity Picker, workspace, locale, and related cards.
- **D — NEEDS SEPARATE REVIEW:** any future proposal to normalize every clickable anchor or every button globally. This audit provides no evidence that such scope is safe or necessary.

# Design-option comparison

- **A — local blocker-card normalization:** smallest affected surface, but it should cover both members of the matched Relation action group rather than only the anchor.
- **B — matched action-group normalization:** best fit. It aligns button and button-like anchor labels only where they intentionally share action geometry and visual grouping.
- **C — global normalization:** unsupported by the evidence and risks changing ordinary links, menus, dialogs, and role-specific controls.
- **D — preserve role-based differences:** correct for ordinary links and unrelated groups, but insufficient for the confirmed matched Relation action group by itself.

# Decision

Final classification: **MATCHED-GROUP PATTERN**. The evidence supports a bounded normalization rule for controls that are intentionally presented as one visual action group, while preserving role-based differences elsewhere. This is a design decision for a future implementation checkpoint, not an implementation authorization in this audit.

# Smallest safe correction boundary

The smallest safe future boundary is the Relation blocker action group, specifically its native `Remove connection` button and button-like Handoff anchor, with ordinary and narrow rules kept together. A broader matched-action-group abstraction may be considered later only with separate evidence and validation; no global button or anchor rule is justified here.

# Formal acceptance boundary

This document records audit evidence only. Candidate B formal acceptance is pending and must remain a separate acceptance decision with its own implementation and validation record. No runtime, CSS, test, or source acceptance is implied by this audit.

# Explicit exclusions

- No NarrativeLine runtime, CSS, tests, messages, or RelationPresentationService changes.
- No endpoint-separator mojibake correction in this audit.
- No changes to existing e2r-spec documents or `docs/roadmap.md`.
- No changes to the protected dirty `ai-knowledge` worktree.
- No change to Capability Handoff CLOSED / ACCEPTED status.
- No push, deploy, release, or formal 1F restart.
