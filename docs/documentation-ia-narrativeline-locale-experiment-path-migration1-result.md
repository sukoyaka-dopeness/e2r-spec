# NarrativeLine Locale Recipient-Preference Experiment Path Migration 1

- Date: 2026-09-26
- Status: PATH MIGRATION COMPLETE; ACCEPTANCE SCOPE UNCHANGED
- Scope: The two NarrativeLine-only bounded experiment acceptance records from manifest C of the [Primary-Responsibility Residual Documentation Classification Audit 1](documentation-ia-primary-responsibility-residual-classification-audit1.md).
- Authority: Human-approved path-only migration. Each acceptance remains authoritative only for its recorded NarrativeLine experiment scope; shared Cross-App Locale design authority remains separate.
- Related records: [Documentation Plan](documentation-plan.md), [Documentation Hub](README.md), and the shared [Cross-App Locale startup design](cross-app/cross-app-locale-startup-v0-recipient-preference-design.md).

## Migration

Moved only these two records to `docs/narrativeline/`, retaining their
basenames and separate acceptance scopes:

- `docs/narrativeline/cross-app-locale-recipient-preference-experiment-1-acceptance.md`
- `docs/narrativeline/cross-app-locale-recipient-preference-experiment-2b-acceptance.md`

The canonical workspace scan found no other exact-filename inbound links or
plain-path references beyond the classification audit's original manifest.
That manifest is retained as a record of its audit-time source paths and now
links forward to this execution result. No sibling or Knowledge repository
needed a path repair.

The first acceptance remains accepted only within its NarrativeLine
recipient-preference experiment scope. The second remains accepted only for
its NarrativeLine in-session Dataset Replacement composition scope. Neither
closes the shared Cross-App Locale contract, Hub or LiaisonScape parity, nor
the broader Cross-App Locale workstream. The shared Locale design records
remain in `docs/cross-app/` and were not moved or changed.

## Verification

- Confirmed the two approved source files existed and the two destinations
  were vacant before moving; both destinations exist and both root sources are
  absent after moving.
- Confirmed the migration introduced no stale workspace-local reference; the
  audit-time source manifest is explicitly preserved as historical inventory.
- `npm.cmd run validate` and `git diff --cached --check` passed.
- No status, acceptance, maturity, authority, or Roadmap content changed.
