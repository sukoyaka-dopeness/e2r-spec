# Cross-App Editor Shell Geometry v0

Status: adopted project-level design policy; non-normative to the E2R Core

Date: 2026-08-23

## Scope

This policy applies primarily to the editor application shells of NarrativeLine
and LiaisonScape. Hub is an E2R landing and ecosystem surface. It follows the
same semantic shell hierarchy, but is not required to use the editor-shell
vertical geometry policy.

This document defines geometry responsibilities and acceptance boundaries. It
does not define a shared DOM, shared CSS, a universal breakpoint, or exact
pixel dimensions for every application.

## Adopted policy

### Stable vertical editor shell

At a responsive breakpoint, a normal one-line Header or Footer SHOULD preserve
its vertical geometry. Applications MAY naturally change height when content
wraps, but a breakpoint SHOULD NOT independently shrink vertical padding,
control height, and typography in a way that creates an avoidable shell jump.

For editor shells:

- Header and Footer vertical padding remains stable across responsive
  breakpoints unless a bounded usability decision accepts the change;
- primary interactive controls retain a 40px minimum height;
- semantic controls are not removed or reordered merely to compact the shell;
- focus-visible, keyboard, and touch targets remain usable.

### Horizontal responsive compression

Narrow layouts SHOULD respond primarily through horizontal geometry:

- reduce horizontal padding;
- reduce action-group gaps;
- adjust horizontal button padding where safe;
- allow available-width brand and descriptor handling.

Compression MUST NOT remove semantic controls, change their semantic order, or
reduce interactive targets below the accepted application baseline.

The policy is `same policy != same CSS`. LiaisonScape may require different
horizontal spacing from NarrativeLine because its Workspace Header contains
brand, explicit Home, and locale control.

### Shell hierarchy

The geometry policy preserves the accepted semantic hierarchy:

Header:

- application brand;
- application-level controls;
- explicit Home when the surface is a top-level workspace.

Footer:

- descriptor/context;
- Credits.

Locale controls remain in the Header. Nested Detail, Picker, and Create
surfaces retain contextual Back behavior and do not receive an additional
global Home control merely for geometry consistency.

### Interactive target baseline

The primary editor-shell controls SHOULD retain the current 40px minimum target
baseline, including:

- locale control;
- explicit Home;
- Credits.

This is a behavioral and accessibility baseline, not a requirement to express
the rule through one shared selector or one shared component.

### Brand and descriptor degradation

At extreme narrow widths, complete brand or descriptor visibility is not a
universal requirement. Acceptance should prioritize:

- no collision with controls;
- no unwanted horizontal scrolling;
- preserved semantic hierarchy;
- usable control interaction.

The approximately 240px and 270px observations remain bounded acceptance
evidence, not a workspace-wide minimum-width guarantee. Font settings and
content length may change the exact degradation boundary.

## Application boundaries

### NarrativeLine

NarrativeLine currently has 16px Header/Footer vertical padding at its base and
12px at `max-width: 600px`, with 40px controls. The adopted editor-shell policy
therefore creates a runtime follow-up to align its narrow vertical padding with
the stable-vertical rule. This follow-up does not reopen the accepted F2-NL1,
F2-NL1b, or F2-NL1c decisions; it is a separate geometry alignment checkpoint.

The existing Timeline Home-navigation and Credits dismissal follow-ups remain
separate roadmap items.

### LiaisonScape

LiaisonScape's current F2-LS1 working-tree implementation preserves 16px
Header/Footer vertical padding at `max-width: 600px` while compressing horizontal
geometry and action gaps. This is consistent with the adopted stable-vertical
editor-shell policy.

F2-LS1 remains pending manual retest and final acceptance. This document does
not mark F2-LS1 Accepted or Closed and does not authorize runtime changes.

### Hub

Hub remains outside the primary editor-shell geometry scope. Its landing-surface
role permits its current centered max-width layout, 700px responsive boundary,
vertical compaction, and smaller locale/Credits padding. Hub still preserves the
shared semantic roles of Header locale control and Footer descriptor plus
Credits.

## Evidence boundary

The policy is based on source audit and F2-LS1 manual observations:

- NarrativeLine: 16px base and 12px narrow vertical padding;
- LiaisonScape: 16px base and narrow vertical padding after F2-LS1 correction;
- both editor applications: 32px to 16px horizontal padding compression and
  40px control minimum;
- Hub: 18px to 14px vertical padding at its 700px landing breakpoint.

These are source-derived observations, not browser computed measurements.
Browser and human acceptance remain necessary for final geometry decisions,
especially at 601px, 600px, 599px, representative narrow widths, 270px, and
240px in EN and JA.

## Non-goals

This policy does not define:

- exact Header or Footer heights;
- a universal breakpoint or gap value;
- a universal minimum viewport width;
- Hub runtime modernization;
- viewport toolbar behavior;
- Dataset Replacement styling;
- Credits focus behavior;
- Dataset title editing or Detail ID presentation;
- locale consumer or Dataset Handoff semantics.

## Decision

For NarrativeLine and LiaisonScape editor shells, Cross-App geometry consistency
means stable vertical shell behavior, preserved interactive targets, preserved
semantic order, and horizontal-first responsive compression. It does not mean
copying one application's DOM or CSS values into the other.
