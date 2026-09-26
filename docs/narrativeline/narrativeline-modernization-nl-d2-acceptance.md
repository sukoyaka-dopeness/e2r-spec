# NarrativeLine Modernization NL-D2 Acceptance

Date: 2026-08-21

Status: ACCEPTED

This document records the bounded acceptance result for NarrativeLine's
Pending Work Model. It follows NL-D1 Dataset Modification Baseline and does
not accept candidate staging, Dataset replacement confirmation,
`beforeunload`, Dataset Handoff v0, or destructive-navigation protection.

## Preconditions and boundaries

NL-D1 remains the source of truth for `datasetModified`: current Dataset
content is compared with the accepted or successful-export baseline.

NL-D2 adds an independent App-level aggregate for local user work that has not
yet been committed to the Dataset. It does not replace the Dataset baseline
model, and it does not persist local form drafts across reload.

The current loss-risk foundation is:

```text
lossRisk = datasetModified || pendingUserWork
```

The loss-risk guard itself is deferred to later safety work.

## Accepted pending-work model

`pendingUserWork` is derived from a registry of active pending sources. It is
not a sticky mutable flag. A source can return to its original value and clear
its own pending state without affecting other sources.

The current sources are:

### Event Detail

Pending fields:

- name;
- description; and
- History year, month, day, hour, minute, and second.

Opening Event Detail alone is not pending. A meaningful local edit produces
`pendingUserWork = true`; reverting all fields to their Dataset values clears
it. Save clears the source after committing the Dataset edit. Back discards
the local edits and clears the source.

### Entity Detail

Name and description drafts are pending when they differ from the current
Entity values. Opening the screen alone is clean. Reverting or saving clears
the source.

Coordinate numeric drafts are tracked through the same surface. Selecting a
Space and opening or closing the editor are transient view operations, not
pending work. An x/y draft difference is pending; reverting or successfully
saving it clears the source.

### Entity Create

The empty form is clean. Meaningful name or description input is pending.
Reverting to an empty form or using Back / Cancel clears the source. Creating
the Entity commits the operation and clears the source through screen
unmount/navigation.

### New Event draft

`Add Event` inserts the Event object into the Dataset and therefore affects
NL-D1 `datasetModified`. `draftEventId` remains an application-level draft
marker. NL-D2 does not automatically classify the existence of the draft
object itself as pending work; unsaved Event Detail field edits are tracked as
pending work. Draft replacement and confirmation policy remain future safety
work.

## Explicitly non-pending state

The following remain transient application or browser state:

- selected Event or Entity;
- return context;
- current screen;
- focus and scroll;
- Browser History state;
- dialog open state;
- time section open / closed state;
- selected Coordinate Space; and
- other transient view state.

## Independence from `datasetModified`

The accepted model supports all four combinations independently:

| `datasetModified` | `pendingUserWork` | Meaning |
|---|---|---|
| false | false | clean Dataset and no local drafts |
| false | true | clean accepted Dataset with uncommitted local work |
| true | false | committed Dataset edit with no local drafts |
| true | true | committed Dataset edit plus local pending work |

Saving an Event or Entity clears the relevant pending source and can make
`datasetModified = true`. A successful Coordinate Save clears pending work
while preserving the Dataset modification. A successful Export may clear
`datasetModified` according to NL-D1 while leaving unrelated local pending
work active.

## Export and recovery boundaries

Export does not commit local Event Detail or other local form drafts. A
successful Export may establish the current Dataset as the NL-D1 baseline, but
`pendingUserWork` remains true when local drafts remain.

Reload currently loses local form drafts and therefore clears pending sources
after startup. Dataset content recovery through `narrativeline.lastDataset`
remains separate from pending-work persistence. This is a known limitation,
not a failed NL-D2 tracking result.

## Browser Back loss path

Browser Back follows NL-0 screen/context restoration. When it unmounts a
screen containing local pending fields, the component cleanup clears the
pending source and the local input is lost. This is a known current pending-
work loss path.

NL-D2 records the path but does not intercept it. Protection through candidate
staging, replacement confirmation, `beforeunload`, or destructive-navigation
guards belongs to later Dataset Safety work.

## Manual acceptance

The following manual results were accepted:

1. Clean Dataset → `pendingUserWork = false`.
2. Event Detail open only → false.
3. Event name, description, and History edits → true; complete reversion →
   false.
4. Event Save → pending false and Dataset modification visible in Timeline.
5. Event Back discard → pending false and unsaved input not committed.
6. Entity Create empty / meaningful input / revert / Back → false / true /
   false / false.
7. Entity Detail edit / revert / Save → true / false / false.
8. Successful Export followed by a new local Event edit →
   `datasetModified = false`, `pendingUserWork = true`.
9. Repeated Event edit/revert cycles remained stable.
10. Reload discarded local pending drafts and started with pending false.
11. Canonical `liaisonscape-graph` Coordinate x=120, y=180: x=121 produced
    pending true; reverting produced false; successful Save produced pending
    false and Timeline `datasetModified = true`; reopening showed x=121.
12. Repeated Coordinate Save produced deterministic success / unchanged
    status without a false failure message.

## Coordinate follow-up history

The Coordinate boundary required two follow-ups:

- `ece57d8` addressed stale Dataset closure risk in the Coordinate update
  path;
- `5ef26ea` corrected a React updater timing bug where Dataset mutation
  succeeded but the synchronous UI status returned failure.

The final manual result after `5ef26ea` was PASS. The earlier
`datasetModified = false` observation was not accepted as a product failure;
the follow-up investigation confirmed the baseline semantics and fixed the
separate status-reporting race.

## Automated verification

At the final NL-D2 checkpoint:

- 53 tests passed;
- lint passed;
- production build passed; and
- `git diff --check` passed.

## Implementation checkpoints

- `6ae5479` — `feat: track NarrativeLine pending user work`;
- `113720a` — `fix: stabilize Event Detail pending tracking`;
- `ece57d8` — `fix: preserve Coordinate dataset modification baseline`;
- `5ef26ea` — `fix: return Coordinate save status synchronously`.

The implementation commits remain local and unpushed. NarrativeLine was clean
at the acceptance checkpoint.

## Knowledge Candidate Check

The central `ai-knowledge/INDEX.md` search routing was applied for Dataset
safety, pending work, drafts, recovery, application state, and export
boundaries. No existing accepted NarrativeLine-specific Dataset Safety
decision was copied from LiaisonScape.

The NL-D2 observations are useful within NarrativeLine, but they are not yet
independent evidence for a workspace-wide decision. No new knowledge entry is
required. Commit chronology, test counts, and this acceptance record remain
repository documentation rather than knowledge entries.

## Next stage

The next modernization work may address Dataset Safety protection, but NL-D2
does not itself implement candidate staging, replacement confirmation,
`beforeunload`, or Handoff.
