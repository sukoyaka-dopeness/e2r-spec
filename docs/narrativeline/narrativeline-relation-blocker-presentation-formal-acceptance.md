# Status

**ACCEPTED** — Combined Relation blocker presentation formally accepted at local NarrativeLine HEAD `4591f3a`. This acceptance covers the bounded Candidate B/C presentation work and the corrected Japanese labels. Capability Handoff acceptance remains CLOSED / ACCEPTED.

# Accepted runtime

Accepted runtime: local NarrativeLine source at `4591f3a`, served by Vite from the working tree. No public deployed runtime was used. NarrativeLine remained clean and unchanged during acceptance.

# Scope

The accepted surface is the Entity deletion blocker for Clara Bennett: repeated Relation identity fields, Candidate B action geometry, matched action-label alignment, responsive behavior, hints, confirmation, focus, and coexistence with the existing Handoff anchor. Semantics, transport, deletion behavior, and application boundaries are preserved.

# Automated baseline

Before browser acceptance, NarrativeLine passed `197/197` tests, lint, build, and diff-check. After acceptance, the same gates passed again with `197/197` tests. The focused presentation, Handoff, and final deletion integration tests also passed.

# Browser environment

Formal acceptance used Microsoft Edge `151.0.4129.107` against the local Vite server at `http://127.0.0.1:4173/e2r-narrative-line/`. The browser page was inspected through the local Chromium DevTools protocol. No public deployment was used.

# Dataset fixture

The recovered HTTPS fixture was:

`https://raw.githubusercontent.com/sukoyaka-dopeness/e2r-liaison-scape/main/public/lighthouse-restoration-demo.en.e2r.json`

The accepted target was Entity `Clara Bennett` with canonical ID `clara`. The blocker contained 8 incident Relation cards.

# Candidate B action geometry

PASS. Ordinary-width actions remain in the existing card-end action group. At narrow width they remain full-width and vertically stacked. No action-group width, gap, wrapping, placement, destructive styling, confirmation, or footer geometry was changed during this acceptance.

# Candidate C Relation identity

PASS. Every blocker card exposes three explicit identity rows: Relation Name, Source, and Target. Relation Name remains visually distinct from endpoint values; Source and Target are independently rendered and independently wrappable. Event-related cards show the resolved Event identity under the correct role without adding Entity/Event type labels.

# Japanese label correction

PASS. The browser displayed the corrected Japanese labels on all 8 cards:

- `つながりの名前`
- `始点`
- `終点`

No mojibake was visible in the identity labels.

# Matched action-label alignment

PASS. The browser DOM/CSS measurement showed both ordinary action controls centered internally. The Handoff anchor has local `justify-content: center`; no global button/anchor normalization was introduced.

# EN ordinary-width acceptance

PASS. At 1280px, all 8 cards showed readable `Relation Name`, `Source`, and `Target` labels and values. Values did not collide with labels. The two eligible actions, `Remove connection` and `Open in LiaisonScape`, were visible, formed coherent per-card groups, and had centered label rectangles. No horizontal overflow, clipping, blank card, or blank state was observed.

# JA ordinary-width acceptance

PASS. At 1280px, locale switching through the normal control preserved the blocker and Dataset state. All 8 cards displayed correct Japanese identity labels and readable values. `つながりを削除` and `LiaisonScapeで開く` were visible and centered. No unexpected geometry change, overflow, clipping, or Dataset mutation from locale switching was observed.

# Multiple blocker-card acceptance

PASS. The 8-card Clara list remained scannable. Repeated three-field identity groups did not become confusing; card boundaries and their action groups remained associated, and no action appeared to belong to a neighboring card. Increased height was usable and did not constitute a density failure.

# Narrow-width acceptance

PASS. At 360px in JA, all labels and values remained readable, values wrapped without collision, and the action group used the existing vertical fallback. Both stacked action labels were centered, no horizontal overflow or clipping was observed, and the dialog remained usable with an internal scrollable Relation list. The EN ordinary-width result and the same local responsive rules establish the corresponding EN behavior; no EN-specific narrow defect was observed.

# Long-name robustness

PASS for the visual boundary. A temporary browser-only text mock made both Source and Target values long at 360px without changing Dataset or repository files. Each value wrapped in its own value region, remained associated with its role label, and did not overlap or create horizontal overflow. Relation Name and the action group remained distinct. The mock is visual evidence only and is not semantic fixture evidence.

# One-action state

PASS. A reversible unsaved Entity edit was created through the normal UI. Handoff was suppressed, Remove connection remained available, no empty Handoff slot remained, identity presentation was unchanged, and no automatic save/discard occurred. The one-action button remained centered. The edit was not saved.

# Inline confirmation

PASS. Activating Remove connection entered confirmation for exactly one card. Identity remained visible, confirmation was visually distinct, Cancel was available, and neighboring cards remained unambiguous. Cancel returned to the ordinary card state, restored focus to the originating control, and caused no Dataset mutation.

# Keyboard and focus

PASS. Browser Tab traversal reached the blocker controls in card order; the local smoke retained visible focus on a blocker action. Existing automated integration coverage additionally verifies Handoff keyboard activation, focus-visible behavior, inline Cancel restoration, and safe footer focus. No navigation through Handoff was required.

# Self Relation

PASS, backed by existing automated evidence and source inspection. The self Relation presentation preserves two distinct rows: Source `A` and Target `A`; values are not collapsed into one endpoint line.

# Parallel Relations

PASS, backed by existing automated evidence. Parallel Relations remain separate cards, retain Relation Name and secondary Relation ID hints, and preserve independent Source/Target rows without introducing ordering semantics.

# Event-related / hidden Relations

PASS. The browser showed the known Event-related incident cards `Clara appointed restoration lead` and `Restoration work begins` as endpoint values under the appropriate Source/Target roles. They were not omitted, and no new type label was introduced.

# Endpoint and Relation ID hints

PASS, backed by focused automated coverage. Duplicate endpoint disambiguation remains attached to the relevant endpoint value. Relation ID hints remain secondary Relation-level information after the identity fields, and parallel Relation IDs retain their existing canonical-prefix behavior.

# Capability Handoff coexistence

PASS for presentation coexistence only. Eligible clean cards displayed exactly one `Open in LiaisonScape` anchor beside Remove connection; it remained centered, readable, unclipped, and separate from identity rows. The one-action dirty state suppressed it. Handoff transport, recipient, same-tab behavior, eligibility, and public acceptance were not reopened.

# Dialog footer boundary

PASS. `Keep Entity` / `エンティティを残す` remained visually separate from per-Relation actions. Card-end action alignment did not move or imply movement of the dialog footer. Footer readability and focus behavior remained intact.

# Mojibake visual verification

PASS. The entire visible JA blocker dialog showed normal Japanese for heading, explanatory copy, identity labels, action labels, footer label, and surrounding controls. No replacement-character glyph or mixed corrupted Japanese was visible.

# Dialog scrolling

PASS. With all 8 cards, the Relation list exposed an internal scroll container (`scrollHeight` greater than `clientHeight`) at 360px. Top and lower cards remained reachable, actions remained in their cards, no blank state appeared, and the list remained usable after Cancel.

# Manual boundaries

Self, parallel, duplicate-hint, and Relation-ID cases were accepted using existing automated presentation evidence plus live source inspection where the recovered fixture did not expose a convenient direct action. Long-name evidence used a temporary browser-only visual mock as explicitly permitted; it was not treated as Dataset evidence. These boundaries do not prevent acceptance because they directly exercise the same independent identity-row and local geometry rules, and all relevant automated regressions passed.

# Non-blocking observations

No new blocking or non-blocking visual defect was found in the required matrix. The accepted Cross-App relationship remains responsibility vocabulary and role separation only; pixel-identical LiaisonScape styling is not required.

# Final classification

**ACCEPTED**.

All required matrix items A–P passed. The combined Relation blocker presentation is accepted for the bounded local runtime at `4591f3a`.

# Explicit preserved boundaries

- Relation semantics and Entity deletion semantics were not changed.
- Capability Handoff contract and public acceptance remain CLOSED / ACCEPTED.
- Dataset Handoff, Core, Extension, schema, and application ownership were not reopened.
- No Cross-App pixel parity requirement was introduced.
- No NarrativeLine source, CSS, tests, strings, fixtures, or behavior were changed during this acceptance checkpoint.
- No push or deploy was performed.
