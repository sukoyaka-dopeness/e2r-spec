# LiaisonScape Relation Endpoint Identity Acceptance

Identifier: `LS-REL-ENDPOINT-ID1`
Date: 2026-08-27

## Closure

`LS-REL-ENDPOINT-ID1` is **FORMALLY CLOSED — IMPLEMENTED WITH MANUAL
ACCEPTANCE BOUNDARIES**.

The LiaisonScape implementation is committed and pushed at
`1e2cc2610d994bb6fb9f2b690f519273d240ceba`
(`fix: disambiguate relation endpoint identities`).

## Accepted display contract

- An Entity with one usable trimmed name displays the trimmed name.
- Entities sharing one usable trimmed name display the name plus the minimum
  unique Object ID prefix.
- An Entity whose name is blank or whitespace-only displays its full Object ID.
- Duplicate grouping uses trimmed names only; no case, locale, or additional
  Unicode normalization is introduced.
- The canonical `<option value>` remains the full Entity ID. Display prefixes
  are presentation-only.

## Accepted surface and architecture scope

The contract is applied to Relation Create Source/Target, Relation Detail Edit
Source/Target, and Relation Detail read-only Source/Target.

The implementation uses the H2 Entity-endpoint pure helper, which owns trimmed
name handling, duplicate grouping, minimum unique prefixes, and full-ID
fallback. Related Relations / RR1, Event endpoint behavior, Dataset semantics,
Core, Extensions, graph routing, graph drag, and CSS / Flatness are outside
this change.

## Evidence and verification

Real-browser evidence through the established Edge CDP path confirmed:

- `/json`, WebSocket transport, `Runtime.evaluate`, and production fixture
  acquisition through `DOM.setFileInputFiles`;
- correct Create, Detail Edit, and read-only labels with full underlying IDs;
- responsive widths 1912, 601, 600, and 320px with no horizontal overflow;
- Japanese and English labels;
- Tab and Shift+Tab traversal; and
- the expected labels in the browser Accessibility tree.

Automated verification passed:

- `npm.cmd test`: 204 passed;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS; and
- `git diff --check`: PASS.

## Manual acceptance boundaries

The remaining manual boundaries are OS-native `<select>` popup visual
inspection and testing with a real screen reader such as Narrator or NVDA.
These are not implementation blockers and must not be recorded as completed
manual acceptance.

## Repository boundary

No E2R Core, Extension, Dataset semantic, RR1, Event endpoint, CSS, or
`ai-knowledge` change is part of this closure. No next roadmap item is
selected by this record.

## LS-REL-ENDPOINT-ID2 refinement

Date: 2026-08-27

`LS-REL-ENDPOINT-ID2` is **IMPLEMENTED / ACCEPTED / CLOSED** as a bounded
presentation refinement. It does not reopen the historical ID1 closure.

The Entity endpoint helper now starts duplicate-name hints at a minimum of
eight Object ID characters and extends beyond eight only when required for
uniqueness. This aligns ordinary endpoint surfaces with the existing RR1
Related Relations presentation. The withdrawn four-character proposal was
not adopted.

The preserved rules are:

- unique usable names remain trimmed name-only;
- blank or whitespace-only names remain full Object ID fallback;
- duplicate grouping remains trimmed-name-only, without additional case,
  locale, or Unicode normalization; and
- canonical `<option value>` remains the full Entity ID.

The implementation is committed and pushed at
`22904bf93189a12907eb061d802a822d9a37b034`
(`fix: align endpoint ID hint length`). RR1 source/output was not changed.

Added helper coverage includes IDs shorter than eight characters, exactly
eight-character uniqueness, collision extension beyond eight, unique names,
trimmed names, blank fallback, and separate duplicate-name groups. The
LiaisonScape gates remain green: 204 tests passed, lint passed, build passed,
and `git diff --check` passed. Real-browser Create evidence confirmed
`Yoshi (9f232f22)` and `Yoshi (1a919cf4)` while preserving full option values;
the existing RR1 surface showed the same eight-character hint.

No CSS, Flatness, graph, Dataset, Core, Extension, Event endpoint, or
`ai-knowledge` change is part of ID2. Native `<select>` popup visual
inspection and real screen-reader testing remain the previously recorded
manual boundaries.

## LS-DIALOG-DRAFT1-S1 safety refinement

Date: 2026-08-27

`LS-DIALOG-DRAFT1-S1` is **IMPLEMENTED / ACCEPTED / CLOSED** as a bounded
LiaisonScape safety fix. Entity Detail and Relation Detail now preserve local
draft work when dismissal is requested: clean Close/Escape still closes
immediately, while dirty Close, Escape, or backdrop dismissal opens a
confirmation. Cancel retains the detail and its draft; Discard closes the
detail and does not persist the draft. Explicit Entity/Relation deletion
continues to use the separate existing Delete Confirmation path.

The implementation is committed and pushed at
`fef262f` (`fix: guard unsaved detail drafts`). Both detail types use the
existing draft equality semantics and the existing global dialog focus trap;
the new confirmation initially focuses Cancel and handles Escape as Cancel.
No `pendingUserWork` meaning, Dataset Replacement Safety, Creation Dialog,
Delete Confirmation, CSS, graph behavior, Core, or Extension semantics were
changed.

Verification passed: 205 tests, lint, build, and `git diff --check`. Real
browser acceptance covered dirty Entity Close, dirty Relation Close, dirty
Relation Escape, Cancel retention, Discard/reopen original values, clean
Escape, Japanese narrow-width presentation, and English wide-width
presentation. Creation Escape, general dialog initial focus, Delete
Confirmation focus, action grouping, and Flatness remain separate follow-ups.

## LS-DIALOG-DRAFT1-C3 safe Creation Escape dismissal

Date: 2026-08-27

`LS-DIALOG-DRAFT1-C3` is **IMPLEMENTED / ACCEPTED / CLOSED** as a bounded
Creation Dialog safety fix. The existing `meaningfulCreationDraft` calculation
is shared by `pendingUserWork` and the new App-owned Escape path. Clean Entity
or Relation Creation Escape closes immediately; dirty Escape opens a separate
discard confirmation and retains the Creation draft. Confirmation Cancel and
Escape retain the draft, while Discard closes the Creation Dialog and clears
the transient creation state. The visible Creation Cancel button remains an
immediate explicit discard action, and Creation Dialog backdrop dismissal
remains unimplemented.

The implementation is committed and pushed at
`ffb1b94` (`fix: guard creation drafts on Escape`). It adds a
Creation-specific confirmation component and English/Japanese wording without
changing Detail dismissal safety, Delete Confirmation, Dataset Replacement
Safety, `pendingUserWork` semantics, CSS, graph behavior, Core, or Extension
semantics. The existing native-select boundary remains preserved: the first
Escape closes the native popup only; a subsequent page-level Escape applies
the Creation contract.

Verification passed: 206 tests, lint, build, and `git diff --check`. Real
browser acceptance covered clean Entity Escape, dirty Entity Escape,
confirmation Cancel, confirmation Escape, Discard and blank reopen, clean
Relation Escape, and Japanese 320px / English wide confirmation wording with
Cancel initial focus and no horizontal overflow. The browser was restored to
Japanese, normal viewport, no dialog, and no test draft.

## LS-DIALOG-DRAFT1-F1 safe Delete Confirmation focus

Date: 2026-08-27

`LS-DIALOG-DRAFT1-F1` is **IMPLEMENTED / ACCEPTED / CLOSED** as a bounded
LiaisonScape destructive-safety refinement. The shared Entity/Relation Delete
Confirmation now focuses Cancel when it opens. DOM order, Tab/Shift+Tab
containment, Escape/Cancel behavior, backdrop Cancel behavior, deletion
eligibility, explicit Delete semantics, and return focus remain unchanged.
Enter therefore activates the safe initial Cancel control rather than Delete.

The implementation is committed and pushed at
`cb95cf0` (`fix: focus safe action in delete confirmation`). No Creation
Dialog, CreationDismissalConfirmation, Detail draft safety, Dataset
Replacement Safety, CSS, graph, Core, Extension, or general dialog-focus
policy was changed.

Verification passed: 207 tests, lint, build, and `git diff --check`. Real
browser acceptance covered Relation Delete Confirmation initial Cancel focus,
Enter/Escape no-delete safety, Tab to Delete, explicit Relation deletion, and
Entity Delete Confirmation initial Cancel focus through the shared component.
The browser was restored to the sample Dataset, Japanese locale, normal
viewport, and no dialog. Native screen readers were not directly tested.

## LS-DIALOG-DRAFT1-F2-E1 Create Entity Name autofocus

Date: 2026-08-27

`LS-DIALOG-DRAFT1-F2-E1` is **IMPLEMENTED / ACCEPTED / CLOSED** as a bounded
LiaisonScape Creation Dialog focus refinement. When an explicitly opened
Create Entity Dialog mounts, its Name input receives initial focus. The
condition is limited to Entity mode; Create Relation keeps its unresolved
Source/Target/Name focus decision unchanged.

The implementation uses the existing `CreationDialog` owner with
`autoFocus={mode === "entity"}`. It does not introduce a generic autofocus
rule, focus utility, Enter-to-submit behavior, or focus changes for Detail,
confirmation, Credits, Dataset Replacement, or other surfaces.

The implementation is committed and pushed at
`2284d9b` (`fix: focus Entity name on creation`). No CSS, Dataset, graph,
Core, Extension, or Creation Escape contract was changed.

Verification passed: 208 tests, lint, build, and `git diff --check`. Real
browser acceptance covered keyboard and pointer Create Entity opening,
`document.activeElement` on `#creation-name`, immediate typing, visible
focus, Tab to Description, clean Escape, dirty Escape confirmation with draft
retention after Cancel, JA/EN labels, and JA 320px layout without horizontal
overflow. Create Relation did not receive Name autofocus. The real mobile
software-keyboard effect remains a manual boundary.
