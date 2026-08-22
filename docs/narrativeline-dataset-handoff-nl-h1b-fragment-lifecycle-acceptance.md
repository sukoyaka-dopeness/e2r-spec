# NarrativeLine Dataset Handoff - NL-H1B Fragment Lifecycle Acceptance

Date: 2026-08-22
Status: ACCEPTED
Implementation repository: `e2r-narrative-line`
Implementation commit: `19345bb` (`feat: manage NarrativeLine Dataset handoff fragment lifecycle`)

## Scope

NL-H1B defines the application lifecycle of the Dataset Handoff v0
`datasetUrl` fragment after the NL-H1A startup acquisition. It assigns a
bounded source to Dataset replacement candidates and applies fragment cleanup
only when a candidate becomes the actual active Dataset.

The accepted candidate source model is:

```text
handoff | local | sample | new
```

`resume` is not a Dataset source. Resume is same-session navigation to the
current or recoverable Dataset and does not perform Dataset acceptance.

NL-H1B does not add live hashchange opening, remote fetch behavior, Dataset
identity, provenance, revision tracking, localStorage redesign, or pending
draft persistence.

## Actual Dataset acceptance

Actual acceptance is the existing App-level `acceptStagedDataset` boundary:

1. The candidate Dataset becomes the active Dataset.
2. The accepted baseline is refreshed.
3. Candidate and pending replacement state are cleared as appropriate.
4. The source lifecycle policy is applied.
5. Normal Timeline navigation proceeds.

The following are not actual acceptance by themselves:

- selecting a Dataset source action;
- candidate staging;
- displaying the replacement confirmation dialog;
- Cancel;
- Export Dataset without candidate acceptance; and
- Resume.

Clean candidates are accepted immediately after selection because no
confirmation is required. Modified or pending work keeps the candidate staged
until Discard and Continue or the applicable Export and Continue path accepts
it.

## Source lifecycle matrix

| Source or operation | Actual acceptance | `datasetUrl` behavior |
| --- | --- | --- |
| Handoff | Yes | Preserve |
| Local Open | Yes | Remove `datasetUrl` only |
| Sample | Yes | Remove `datasetUrl` only |
| New Dataset | Yes | Remove `datasetUrl` only |
| Local/Sample/New staging | No | Preserve |
| Cancel | No | Preserve |
| Normal Export | No | Preserve |
| Export Dataset in modified-plus-pending dialog | No | Preserve |
| Discard and Continue | Yes | Remove for local/sample/new |
| Export and Continue | Yes | Remove for local/sample/new |
| Resume | No | Preserve |

For a handoff URL such as:

```text
#foo=bar&datasetUrl=https%3A%2F%2Fexample.com%2Fa.json&x=1
```

local, sample, or new acceptance produces:

```text
#foo=bar&x=1
```

An accepted handoff keeps the original `datasetUrl` and all unknown
parameters.

## Fragment cleanup

The implementation removes every `datasetUrl` occurrence, including empty or
duplicate occurrences, while preserving unrelated raw fragment parameters.
If no parameters remain, the fragment is removed completely rather than
leaving an empty `#`.

Fragment cleanup is performed with `history.replaceState`:

- no `pushState` is used;
- the current `history.state` object is preserved;
- pathname is preserved;
- query string is preserved;
- unknown fragment parameters are preserved; and
- cleanup does not create a separate Browser History navigation step.

The cleanup is a URL side effect after Dataset acceptance. If URL rewriting is
unavailable or fails, the already accepted Dataset is not rolled back or
corrupted.

## Staging, Cancel, and export boundaries

When a handed-off Dataset is modified and a local, sample, or new candidate is
selected:

- staging leaves the active handoff Dataset and `datasetUrl` unchanged;
- Cancel clears the candidate and preserves the handoff Dataset, pending work,
  and fragment;
- Export Dataset exports only the current Dataset, leaves the candidate and
  pending work staged, and preserves the fragment;
- Discard and Continue accepts the candidate and then removes `datasetUrl`;
  and
- Export and Continue accepts the candidate after successful export and then
  removes `datasetUrl`.

For modified-plus-pending work, Export Dataset alone does not accept the
candidate. The pending-only replacement dialog remains available and the
fragment remains unchanged until an actual candidate acceptance occurs.

## Failure and Resume

NL-H1A failure behavior remains unchanged. A failed handoff stays on Home,
retains the fragment, does not silently open localStorage or the sample, and
allows the user to choose an explicit action.

Resume navigates to the current or recoverable Dataset session. It is not a
replacement acceptance and therefore never performs fragment cleanup.

## Browser History and startup-only boundaries

Fragment cleanup is not screen navigation. It does not add a cleanup-only
History entry. Manual acceptance confirmed that after cleanup one Browser Back
operation returns to the previous logical screen rather than an intermediate
URL state.

NL-H1A startup-only behavior remains unchanged:

- changing the fragment at runtime does not trigger a remote fetch;
- changing `datasetUrl` from A to B at runtime does not reopen B; and
- existing screen History ownership, stale-detail fallback, and retained draft
  behavior remain unchanged.

## Changed implementation files

The NarrativeLine implementation checkpoint contains exactly these files:

- `src/App.tsx`;
- `src/services/DatasetCandidateService.ts`;
- `src/services/DatasetHandoffFragmentService.ts`; and
- `tests/DatasetHandoffFragmentService.test.js`.

## Manual acceptance evidence

The following scenarios were reported and accepted:

1. Successful handoff retains `datasetUrl` and unknown parameters.
2. Handoff followed by clean Sample, New, or Local Open removes only
   `datasetUrl`.
3. Modified handoff followed by Sample and Cancel preserves the candidate
   boundary and fragment.
4. Modified-only Sample and Export and Continue downloads, accepts Sample,
   and removes only `datasetUrl`.
5. Modified-plus-pending Export Dataset retains candidate, pending work, and
   fragment; Cancel preserves them; Discard and Continue accepts and cleans.
6. Handoff failure followed by Resume preserves the fragment.
7. Handoff failure followed by Sample performs actual acceptance and removes
   only `datasetUrl`.
8. Browser Back after cleanup has no extra cleanup-only History step.
9. Runtime hash changes produce zero remote reopen requests.
10. NL-D5A pending-draft beforeunload behavior remains accepted.
11. NL-D4 modified-only, pending-only, and modified-plus-pending matrices
    remain accepted.

## Verification

Implementation commit `19345bb` was verified with:

- `npm test`: 70 passed;
- `npm run lint`: passed;
- `npm run build`: passed; and
- `git diff --check`: passed.

The bounded tests cover datasetUrl-only removal, unknown-only preservation,
duplicate and empty parameter cleanup, `replaceState` state/path/query
preservation, no replacement when datasetUrl is absent, and source-specific
cleanup policy.

## Regression boundaries

The following accepted behavior remains outside the H1B change:

- NL-H1A HTTPS-only acquisition, credentials omission, failure reporting,
  startup-only behavior, StrictMode single fetch, and Home loading-state fix;
- NL-D4 replacement confirmation and its three-action matrix;
- NL-D5A `beforeunload` protection with
  `lossRisk = datasetModified || pendingUserWork`;
- NL-D5B no-op internal-navigation audit and retained draft behavior; and
- Browser History screen navigation without Dataset or candidate snapshots.

## Knowledge Candidate Check

No new `ai-knowledge` entry is required. The Dataset Handoff design and
existing navigation and Dataset Safety guidance already cover the applicable
boundaries. The source lifecycle matrix, URL cleanup policy, manual evidence,
test count, and commit chronology are repository-specific acceptance evidence,
not reusable workspace knowledge.

## Acceptance status

NarrativeLine Dataset Handoff v0 - NL-H1B Fragment Lifecycle & Source
Semantics is formally ACCEPTED for the bounded scope above. The next task is
to determine the remaining Dataset Handoff v0 completion scope.
