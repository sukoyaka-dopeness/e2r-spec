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
