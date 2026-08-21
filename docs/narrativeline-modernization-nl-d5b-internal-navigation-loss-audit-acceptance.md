# NarrativeLine Modernization NL-D5B Internal Navigation Loss Audit Acceptance

Date: 2026-08-22
Status: ACCEPTED — NO-OP
Implementation repository: `e2r-narrative-line`

Related accepted implementation baselines:

- NL-D4: `fd22a37` (`feat: protect NarrativeLine Dataset replacement`)
- NL-D5A: `d2c9ac9` (`feat: guard NarrativeLine unload loss risk`)

## Scope and conclusion

NL-D5B audited whether App-internal navigation or Browser History navigation
can still discard pending user work. The audit found no remaining loss path
within the accepted application model. No NarrativeLine implementation change
or NL-D5B implementation commit is required.

Additional internal-navigation confirmation and Browser Back / Forward guards
are therefore not required at this checkpoint.

The accepted principle is:

```text
lossRisk = datasetModified || pendingUserWork
```

This flag alone does not require stopping internal navigation. Navigation must
be guarded only when the navigation operation can actually discard work and
that work cannot be retained and rehydrated.

## Audit basis

The accepted App-level draft ownership preserves pending Event, Entity, and
Entity Create payloads independently of screen mounting. The `popstate`
handler restores navigation state only; it does not clear the pending registry
or draft payloads. Keyed detail editors rehydrate retained payloads when the
user returns.

The active Dataset remains App-owned and is not stored in or restored from
Browser History. Stale Event and Entity selections are checked against the
current Dataset and fall back to a safe Timeline state. Consequently, Browser
Back / Forward does not roll back Dataset content or discard retained drafts.

Explicit editor Back is intentionally different: it is an existing explicit
discard operation and clears the corresponding draft and pending source. It
is not equivalent to Browser Back / Forward.

## Navigation classification

### Preserve pending work

- Header -> Home;
- Home -> Resume;
- Browser Back and Forward;
- Event / Entity / Entity Create screen navigation;
- navigation from Detail to another screen; and
- re-entry through retained History state when the draft can be rehydrated.

These paths preserve App-level draft payloads and pending registry state.

### Commit work

- Save Event;
- Save Entity;
- Save and Add Related Entity; and
- other explicit operations that commit pending payloads to the Dataset.

These paths clear the corresponding retained payload and pending source after
the Dataset update.

### Explicit discard

- Event Detail explicit Back;
- Entity Detail explicit discard / Back behavior;
- Entity Create explicit Back; and
- deletion flows.

These are intentional user-selected discard operations and retain their
existing semantics.

### Guarded replacement

New Dataset, Sample Dataset, and valid Local Open remain protected by the
NL-D4 Dataset Replacement Confirmation UI. Document unload, reload, and tab or
window close remain protected by NL-D5A `beforeunload` behavior.

### Not loss-relevant

Selection, focus, scroll, and screen-only state do not require loss
protection.

## Browser History acceptance

The following NL-0 and NL-D3 boundaries remain accepted:

- NarrativeLine owns its Browser History state;
- `history.state` stores navigation state only;
- Dataset snapshots, candidates, and pending payloads are not stored in
  History;
- same-screen selection uses replacement semantics;
- one Back / Forward operation represents one logical navigation step;
- foreign or unknown History state is ignored;
- stale selections are validated against the current Dataset; and
- stale Detail state falls back safely without restoring old Dataset content.

No generic `popstate` blocker, History loop, duplicate-entry workaround, or
Dataset identity snapshot is introduced.

## Responsibility split

| Workstream | Accepted responsibility |
| --- | --- |
| NL-D4 | Dataset replacement staging and confirmation for New, Sample, and Local Open |
| NL-D5A | Document unload, reload, tab-close, and window-close loss protection |
| NL-D5B | Internal-navigation loss audit; no additional guard required |

## Verification evidence

The no-op conclusion was checked against the existing implementation and
verified with:

- `npm test`: 58 passed;
- `npm run lint`: passed;
- `npm run build`: passed; and
- `git diff --check`: passed.

The NarrativeLine worktree had no implementation changes for this checkpoint.

## Deferred work

- Dataset Handoff v0 `#datasetUrl=`;
- runtime handoff acquisition;
- integration of Handoff acquisition with NL-D4 replacement safety;
- localStorage draft persistence or recovery redesign; and
- a future real loss path, if later evidence identifies one.

## Knowledge Candidate Check

No new `ai-knowledge` entry is required. The conclusion that internal
navigation should be assessed by retained-payload rehydration rather than by
the loss-risk flag alone is already covered by the existing Dataset Safety,
navigation, and application-state knowledge. Audit chronology, test counts,
and workstream-specific details are not promoted to workspace knowledge.

## Acceptance status

NL-D5B Remaining Internal Navigation Loss Protection is formally ACCEPTED as a
NO-OP audit checkpoint. The next principal task is NarrativeLine Dataset
Handoff v0 using `#datasetUrl=`.
