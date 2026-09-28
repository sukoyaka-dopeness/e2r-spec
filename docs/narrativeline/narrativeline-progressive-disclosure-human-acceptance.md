# NarrativeLine Progressive Disclosure — Human Acceptance

Date: 2026-09-28

Status: **RELATIVE TIME AND PERSPECTIVE ORDERING PROGRESSIVE DISCLOSURE — HUMAN ACCEPTED / CLOSED**

This record closes two application-level presentation workstreams. It does not
reopen or alter the separately accepted Perspective 0.1.0 Timeline Ordering
semantics.

## Relative Time progressive disclosure

The Human confirmed in a real browser that:

- an ordinary Dataset starts without the advanced Relative Time UI; More can
  explicitly enable it for the session;
- Timeline and Event Detail share that session visibility, and the UI-enabled
  choice is not stored as Dataset preference;
- a Dataset with a supported Relative Time record derives ON when opened, and
  Event Detail offers the existing authoring UI;
- an unsupported Relative Time `0.3.0` Dataset keeps Relative Time information
  discoverable through the Timeline diagnostic, does not expose the ordinary
  authoring UI in Event Detail, and preserves the Relation payload and
  declaration after export;
- Dataset replacement and reopen derive presentation from the active Dataset
  instead of carrying a prior manual session choice.

The Human-selected contract also keeps malformed, partially recognized, and
declaration-only evidence out of the safe OFF classification. DIAGNOSTIC
visibility does not grant authoring capability. The current application has
no Human-visible Relative Time record deletion action, so deletion of the
last record was not a Browser Acceptance requirement for this closure.

The Japanese More action is `相対時間の機能を表示`. The implementation was
updated to this Human-selected wording and automated regression coverage
checks the rendered entry. The exact wording was not part of the Human's
reported post-correction browser pass; the copy change does not alter the
accepted visibility or data behavior.

## Perspective ordering progressive-disclosure follow-up

The Human confirmed in a real browser that ordinary Timeline selection and
focus do not show ordering arrows or “About display order”; the help appears
only in editing mode. A mismatch remains reviewable in ordinary mode, and
opening “Review display order” does not enable editing. Its explicit “Edit
display order” action and the More action enter the same session-only mode;
ending that mode returns to ordinary Timeline. Export/import starts with
editing mode OFF while restoring the saved Perspective sequence. JA/EN,
keyboard/focus behavior, and narrow layout were accepted in the reported
scope.

This follow-up changes no Perspective 0.1.0 sequence, placed/unplaced,
composition, or other portable semantics.

## Validator diagnostic boundary

Perspective import may show `unknown_extension` at the Perspective payload
and `specification_unavailable` at its Specification Extension use. The
read-only audit found these are expected Validator 0.7.0 recognition and
availability diagnostics: NarrativeLine's local Perspective consumer support
does not register Perspective 0.1.0 with that Validator. They remain visible,
are not filtered, and are not acceptance failures for either progressive-
disclosure workstream. Any Validator support decision is a separate workstream.

## Implementation and verification record

The application implementation and localized copy are recorded in the
[NarrativeLine implementation result](../../e2r-narrative-line/docs/progressive-disclosure-human-acceptance-result.md).
The unsupported Relative Time `0.3.0` Browser Acceptance fixture is
application-only evidence, not a public sample.

No Core, History, Relative Time, or Perspective semantics, schema, Candidate
contract, Validator contract, or portable UI preference changed in this
closure. No public sample, deployment, or release was created.
