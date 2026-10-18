# Cross-App Header / Brand / Focus Navigation Decision

Date: 2026-10-18

Status: **HUMAN-ADOPTED APPLICATION UX POLICY**

## Scope and authority

Human adopted this user-operation policy for NarrativeLine, LiaisonScape, and
ParameterPlotter. It governs the relationship between visible focus, the focused
control's role, and Header navigation. It does not prescribe a common DOM, CSS,
initial-focus target, or navigation implementation. It is application UX policy,
not an E2R Core or Extension requirement.

The existing application-specific Home / Back, Dataset protection, unsaved-work,
focus-restoration, and accessibility contracts remain authoritative for their
respective flows. This decision does not reopen or expand earlier Human
Acceptance.

## Adopted behavior

1. A visible focus indicator identifies the actual focused target and makes its
   operational role clear. The same displayed brand must not appear to be two
   consecutive focus stops, one actionable and one non-actionable, with
   confusingly similar indicators.
2. When the brand provides Home navigation, it is a keyboard-reachable,
   keyboard-activatable link or button. Preserve native activation: Enter for a
   link; Enter and Space for a button.
3. Choose initial focus for the application and transition context. A screen
   heading may receive focus, but its role must remain visually and
   operationally distinct from an actionable brand link. No application is
   required to focus its brand on arrival.
4. Keep explicit Home and contextual Back responsibilities, Dataset and
   unsaved-work safeguards, dialog focus restoration, and accessible meaning.

This decision does not make a non-actionable heading navigate on Enter or
introduce a global Enter shortcut. It does not change URL fragment or browser
history policy.

## Current application evidence and disposition

- NarrativeLine uses a brand Home link and separate localized Header Home or
  contextual Back buttons. Its [Timeline shell acceptance](../narrativeline/narrativeline-timeline-shell-acceptance.md)
  and [Phase 24 navigation acceptance](../narrativeline/narrativeline-phase24-navigation-safety-acceptance.md)
  retain their bounded meanings. No NarrativeLine runtime change is required
  by this decision.
- LiaisonScape currently uses brand and explicit Workspace Home links. Its
  [cross-app shell focus audit](cross-app-shell-action-hover-focus-parity-audit1-result.md)
  records bounded focus-visibility evidence. The older deferred
  `e2r-liaison-scape/docs/future-header-navigation-unification.md` describes a
  brand button at its original snapshot; current source uses a link. The
  deferred Dataset and browser-navigation questions are not decided here. No
  LiaisonScape runtime change is required by this decision.
- ParameterPlotter's 2026-10-18 Human observation and isolated Codex Chrome
  reproduction found that Workspace arrival focused a non-actionable brand
  `h1`, while the next Tab focused its nested Home link. Both displayed similar
  rings; Enter worked only after Tab. Human approved focusing the existing
  link on Workspace arrival for Continue, Return, and accepted Dataset entry.
  The [application correction record](../../../e2r-parameter-plotter/docs/workspace-brand-initial-focus-correction-2026-10-18.md)
  tracks implementation and verification. Its `#home` fragment observation is
  independent and does not authorize URL redesign.

The earlier ParameterPlotter SAE-04 Human Browser PASS remains bounded and
historical. The later observation is additional Home/common UI evidence, not a
revocation of Single Active Editor closure. ParameterPlotter Home/common UI is
**HUMAN ACCEPTED / CLOSED (BOUNDED)** under its separate
[2026-10-18 Human decision](../../../e2r-parameter-plotter/docs/home-common-ui-human-acceptance-closure-2026-10-18.md).
Codex tests or browser checks alone cannot set Human Browser PASS.
ParameterPlotter Product Acceptance remains PENDING and Public Release remains
NO-GO.
