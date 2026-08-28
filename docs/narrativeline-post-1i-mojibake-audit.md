# Status

Audit / root-cause diagnosis only. Primary classification: **ISOLATED NEW SOURCE-LITERAL CORRUPTION**. No NarrativeLine source, CSS, test, messages, build configuration, or browser helper was changed. Formal Visual / Manual Acceptance remains pending.

# Trigger

After commit `529f209 fix: clarify Relation blocker identity`, a real-browser Japanese inspection showed mojibake in the newly introduced Relation identity role labels while Relation names, endpoint Object names, and existing Japanese dialog/action copy remained readable. This audit distinguishes source-byte evidence from terminal rendering and runtime evidence.

# Browser evidence

The supplied real-browser observation is that the Japanese blocker shows corrupted-looking values for all three new role labels, while `supervises`, `mentors`, `works with`, `Clara Bennett`, `Thomas Hale`, and `Maya Reed` render normally. Existing Japanese dialog/action text, including `つながりを確認してください`, `つながりを削除`, and `エンティティを残す`, also renders normally. This contrast is consistent with a defect localized to the new literals, but browser appearance alone is not the root-cause proof.

# Historical false-positive boundary

The earlier mojibake audit established that PowerShell and terminal glyph rendering can create false positives. Therefore this record does not classify text from console appearance alone. Raw bytes, explicit UTF-8 decoding, Unicode code points, committed Git blobs, and emitted bundle content are the deciding evidence.

# 529f209 introduction audit

Commit `529f209` changed exactly four files. The JA role labels were introduced in `src/screens/EntityDetailScreen.tsx` as local literal branches in the blocker-card identity markup:

- `Relation Name` / `縺､縺ｪ縺後ｊ縺ｮ蜷榊燕`
- `Source` / `蟋狗せ`
- `Target` / `邨らせ`

They are literal text, not derived messages. The parent commit contains none of these six labels. `529f209` is therefore the first commit containing the affected literals.

# Raw-byte / UTF-8 evidence

The current worktree `src/screens/EntityDetailScreen.tsx` is valid UTF-8, has no UTF-8 BOM, and contains no invalid byte sequence. The other 1I-changed text files are also valid UTF-8 with no BOM. The file is not broadly re-encoded.

Valid UTF-8 does not imply correct language content. The three JA literals are validly encoded wrong Unicode characters: the stored source is already mojibaked rather than a correct Japanese string later damaged by decoding.

# Unicode code-point evidence

The affected source code points are:

```text
縺､縺ｪ縺後ｊ縺ｮ蜷榊燕 = U+7E3A U+FF64 U+7E3A U+FF6A U+7E3A U+5F8C U+FF4A U+7E3A U+FF6E U+8737 U+698A U+71D5
蟋狗せ             = U+87CB U+72D7 U+305B
邨らせ             = U+90A8 U+3089 U+305B
```

These are not the intended Japanese code points. The first decodes back to `つながりの名前`, the second to `始点`, and the third to `終点` when the mojibake characters are reversed through the corresponding legacy-encoding misinterpretation. The important diagnosis is the stored code-point mismatch, not the terminal glyph appearance.

# Git blob evidence

The committed blob at `529f209:src/screens/EntityDetailScreen.tsx` has the same valid UTF-8 bytes, no BOM, and the same three wrong code-point sequences. The parent blob `529f209^:src/screens/EntityDetailScreen.tsx` has none of the new labels. The corruption is present in the commit, not introduced after checkout.

# Source-wide mojibake signature scan

The current `src` and `tests` text source was scanned for the specified signatures (`邵ｺ`, `郢ｧ`, `隴－`, `陷ｿ`, `騾怖`, `隰慾`, `闔`, `鬮ｫ`, replacement-character patterns, and related signatures). No additional matches were found outside the three newly added literals. The surrounding Japanese UI literals in Entity Detail, dialogs, Event Detail, Timeline, Home, Picker/Create, Credits, locale, replacement UI, blocker actions, Handoff, More, and error/loading paths remain ordinary Japanese source text.

# messages.ts verification

`src/i18n/messages.ts` is valid UTF-8, has no BOM, and contains no matching mojibake signatures. Representative Japanese content remains correctly stored, and the English ellipsis literals are ordinary `…` code points. Classification: **CLEAN**. No messages.ts change is warranted.

# 529f209 changed-file audit

The four changed files were checked for UTF-8 validity, BOM state, and unrelated conversion:

- `src/screens/EntityDetailScreen.tsx`: valid UTF-8, no BOM; contains the three newly introduced wrong JA literals.
- `src/services/RelationPresentationService.ts`: valid UTF-8, no BOM; no new JA label literals or broad encoding conversion.
- `src/index.css`: valid UTF-8, no BOM; CSS-only local identity geometry; no suspicious literals.
- `tests/entityDeletionPresentationIntegration.test.js`: valid UTF-8, no BOM; English structural/value assertions and no corrupted JA label literals.

The evidence supports one affected file and three affected literals, not file-level conversion, line-ending-only corruption, or a broader editor/save failure.

# Test coverage gap

The 196/196 suite remained green because the existing presentation integration tests asserted service compatibility fields, English DOM labels/values, Relation ID hints, and structural behavior. They did not render the Japanese blocker and assert the intended Japanese role-label code points. No test accidentally derives an expected JA label from the corrupted source; the missing boundary is simply direct JA label-content coverage.

A future regression must render a Japanese blocker card and assert exact text/code points for the three role labels, separately from the service's endpoint identity values. It should fail against `529f209` before correction and pass after correction, while retaining the existing EN, self, parallel, duplicate-hint, Relation-ID, action, confirmation, and focus coverage.

# Build-output evidence

The current build completed successfully. The emitted JavaScript bundle contains all three English labels and the same three mojibaked JA strings with the same Unicode code points. Therefore the build preserves the source content; it does not introduce the corruption and does not repair it. `dist` was not edited or committed.

# Browser / DOM evidence

The supplied real-browser visual result is recorded above. During this audit no safe current CDP page was available for a DOM `textContent` read; the endpoint responded without an inspectable page. Accordingly, no direct DOM claim is made here. The source and bundle evidence independently establish that the browser has the wrong JA literals available to render.

# First confirmed bad commit

**FIRST CONFIRMED BAD COMMIT: `529f209`**. The parent lacks the labels; the `529f209` blob contains the wrong but validly UTF-8-encoded Unicode characters. This is source-commit corruption, not a stale browser/cache or build/runtime encoding transformation.

# Classification

**ISOLATED NEW SOURCE-LITERAL CORRUPTION**.

The diagnosis is narrower than a generic NarrativeLine encoding issue: the three JA role-label literals added by `529f209` are already stored as wrong Unicode characters in one source file, while messages.ts, the other changed files, and unrelated current source remain clean.

# Smallest safe correction scope

The smallest future correction is limited to the three JA literals in `src/screens/EntityDetailScreen.tsx`:

- `縺､縺ｪ縺後ｊ縺ｮ蜷榊燕` → `つながりの名前`
- `蟋狗せ` → `始点`
- `邨らせ` → `終点`

No file-wide encoding rewrite, BOM change, messages.ts refactor, CSS change, service change, or runtime decoding workaround is supported by the evidence.

# Regression boundary

A future authorized fix should add or adapt focused Japanese integration assertions for `Relation Name` role content (`つながりの名前`), `Source` role content (`始点`), and `Target` role content (`終点`) in a blocker card. It should also verify that existing endpoint values, duplicate endpoint hints, Relation ID hints, self/parallel/Event-related behavior, Handoff actions, inline confirmation, and focus behavior remain unchanged. Full tests, lint, build, and a fresh browser check should then be rerun.

# Explicit exclusions

- No mojibake fix, label change, BOM change, encoding normalization, or file rewrite was performed.
- No NarrativeLine runtime source, CSS, tests, messages.ts, RelationPresentationService, build configuration, or Vite configuration was modified.
- No control-label alignment fix, Candidate B geometry change, deletion/Handoff/focus change, or Formal Visual Acceptance restart.
- No changes to LiaisonScape, Hub, ai-knowledge, roadmap, Core, Extension, or schema.
- Capability Handoff remains CLOSED / ACCEPTED.
- Nothing was pushed or deployed.
