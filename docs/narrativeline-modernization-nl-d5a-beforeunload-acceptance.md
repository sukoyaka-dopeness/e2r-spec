# NarrativeLine Modernization NL-D5A beforeunload Loss Protection Acceptance

Date: 2026-08-22
Status: ACCEPTED
Implementation repository: `e2r-narrative-line`
Implementation commit: `d2c9ac9` (`feat: guard NarrativeLine unload loss risk`)

## Scope

NL-D5A applies the accepted Dataset loss-risk model to browser document exit
events:

```text
lossRisk = datasetModified || pendingUserWork
```

When loss risk exists, NarrativeLine registers a native `beforeunload`
listener. The listener calls `preventDefault()` and assigns the browser
standard empty `returnValue`; it does not provide custom warning text or a
custom dialog.

When the application is clean, no listener is registered. When state returns
to clean, the listener is removed. Registration and cleanup are owned by an
App-level effect and use the exact listener reference, including during React
StrictMode lifecycle checks.

## Accepted states

| State | `datasetModified` | `pendingUserWork` | Browser exit protection |
| --- | --- | --- | --- |
| Clean | `false` | `false` | Off |
| Modified only | `true` | `false` | On |
| Pending only | `false` | `true` | On |
| Modified + Pending | `true` | `true` | On |
| Reverted clean | `false` | `false` | Off |

Successful export updates the accepted/export baseline according to NL-D1 and
turns protection off when no pending work remains. Export with pending work
leaves protection on because `pendingUserWork` remains true.

## Recovery boundary

`beforeunload` protection and reload recovery remain separate responsibilities.

- `beforeunload` warns about work that may be lost from the current session.
- Reload recovery restores Dataset content from localStorage and starts a new
  session baseline.
- The pre-reload dirty flag and pending draft state are not restored as a
  consequence of the new-session recovery rule.
- No localStorage draft persistence or recoverable-session redesign is added
  by NL-D5A.

## Regression boundaries

NL-D5A does not intercept Browser Back / Forward, add internal navigation
guards, modify NL-D4 replacement confirmation, alter Resume baseline
neutrality, or change Browser History ownership. Dataset candidates remain
outside History and recovery state.

The accepted manual regression evidence confirms:

- Browser Back / Forward retains the existing one-entry-per-screen behavior
  and does not restore old Dataset content;
- NL-D4 modified-only, pending-only, and modified-plus-pending replacement
  actions remain unchanged;
- pending Event drafts survive the accepted Home, Resume, Cancel, and export
  paths;
- saved and unsaved Event presentation semantics remain correct; and
- Resume remains baseline-neutral.

## Manual acceptance evidence

The following scenarios were accepted:

1. Clean Dataset reload has no browser warning.
2. Modified-only reload presents the browser-native warning; cancelling keeps
   the current session, while proceeding recovers content into a new clean
   session baseline.
3. Pending-only Event draft reload presents the browser-native warning.
4. Modified-plus-pending reload presents the browser-native warning.
5. Reverting Dataset content to the accepted baseline and clearing pending work
   removes the warning.
6. Ordinary export cleans the Dataset and removes the warning.
7. Export with pending work cleans `datasetModified` but retains pending work,
   so the warning remains.
8. Browser Back / Forward, NL-D4 replacement confirmation, Home -> Resume,
   and Event draft display behavior remain accepted.

## Verification

Implementation commit `d2c9ac9` was verified with:

- `npm test`: 58 passed;
- `npm run lint`: passed;
- `npm run build`: passed; and
- `git diff --check`: passed.

The added service test covers no registration for clean state, registration
for either loss-risk input, native event cancellation semantics, and exact
listener cleanup.

## Deferred work

- Browser Back / Forward pending-work guard;
- remaining internal navigation loss protection;
- Dataset Handoff `#datasetUrl=`;
- runtime fragment processing;
- localStorage draft persistence or recovery redesign; and
- generic navigation blocker infrastructure.

## Knowledge Candidate Check

No new `ai-knowledge` entry is required. The accepted beforeunload boundary is
covered by the existing Dataset Safety and export/recovery knowledge. Browser
API usage, test counts, commit chronology, and session-specific implementation
details are not promoted to workspace knowledge.

## Acceptance status

NL-D5A beforeunload Loss Protection is formally ACCEPTED for the bounded scope
above. The next principal workstream is NL-D5B Remaining Internal Navigation
Loss Protection.
