# Session Log Physical Organization — Adopted Decision

Date: 2026-10-01
Status: **HUMAN-ADOPTED / DOCUMENTED**

## Decision

The Human adopted the following organization policy after reviewing the
[read-only decision preparation](session-log-physical-organization-human-decision-preparation.md):

- Keep existing `E2R-Session-0001.md` through `E2R-Session-0099.md` at their
  current flat paths. Do not bulk-move or rename them.
- Treat each four-digit Session ID as a global immutable identity. Do not
  reuse any used or reserved ID.
- Reserve ID `0096` as a gap. Do not create `E2R-Session-0096.md`.
- Preserve the historical Roadmap reference to Session 0096 and append a
  dated note that no committed Session 0096 file was found and that the ID is
  reserved.
- Starting with ID `0100`, use 100-ID range buckets: `0100-0199`,
  `0200-0299`, and so on. Place each Session in its matching bucket, for
  example `sessions/0100-0199/E2R-Session-0100.md`.
- Do not create empty bucket directories. Create a bucket only when its first
  Session record is created.
- Keep Session records as bounded checkpoint summaries, handoffs, and
  historical chronology. Current planning and status remain in the Roadmap;
  detailed evidence and decisions remain in their dedicated result, decision,
  and Research authorities.

## Implementation boundary

The policy changes no existing Session path and does not create a Session
0096 file or any future placeholder. The first range directory will be added
only with its first real Session record. The prior preparation remains evidence
of the alternatives considered; this document records the Human's selected
policy. See [`sessions/README.md`](../../sessions/README.md) for the concise
operating rule.
