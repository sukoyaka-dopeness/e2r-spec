# E2R-SPEC Session Logs

Session logs are historical collaboration records: bounded checkpoint
summaries, handoffs, and chronology. They do not define current specification
or planning status. Use the [Roadmap](../docs/roadmap.md) for current status
and follow its links to dedicated result, decision, and Research authorities.

## IDs and paths

- Session IDs are global, immutable, four-digit identities. Used or reserved
  IDs are never reused.
- Session records with IDs below `0100` use the flat `sessions/` layout.
- Existing numbered Session files below `0100` stay at their current paths;
  none are moved or renamed. Future Sessions `0098` and `0099`, if created,
  also use the flat layout.
- `0096` is a reserved gap. No `E2R-Session-0096.md` exists or should be
  created. A dated note beside the historical Roadmap reference records this
  disposition.
- Starting at `0100`, use 100-ID range directories: `0100-0199`,
  `0200-0299`, and so on. For example:
  `sessions/0100-0199/E2R-Session-0100.md`.
- Create a range directory only when the first real Session in that range is
  added; do not add empty directories or placeholder files.

The Human-adopted policy is recorded in the
[Session Log Physical Organization decision](../docs/documentation-ia/session-log-physical-organization-decision1.md).
The preceding [decision preparation](../docs/documentation-ia/session-log-physical-organization-human-decision-preparation.md)
retains the audit and alternatives. This README explains navigation and
numbering only; detailed workstream evidence stays with its responsible
authority.
