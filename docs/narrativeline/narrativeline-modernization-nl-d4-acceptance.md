# NarrativeLine Modernization NL-D4 Acceptance

Date: 2026-08-22
Status: ACCEPTED
Implementation repository: `e2r-narrative-line`
Implementation commit: `fd22a37` (`feat: protect NarrativeLine Dataset replacement`)

## Scope

NL-D4 adds Dataset Replacement Confirmation between candidate staging and
candidate acceptance. It protects the active Dataset and pending user work
before a replacement is accepted. This checkpoint does not add
`beforeunload`, Browser Back pending-work protection, Dataset Handoff, runtime
fragment processing, generic importing, localStorage draft persistence, or
Dataset identity snapshots.

The accepted loss-risk model is:

```text
lossRisk = datasetModified || pendingUserWork
```

The three application-level inputs are `datasetModified`,
`pendingUserWork`, and `candidateDataset`.

## Accepted action matrix

| State | Actions |
| --- | --- |
| Clean: `datasetModified = false`, `pendingUserWork = false` | Immediate candidate acceptance; no confirmation |
| Modified only | Cancel; Discard and Continue; Export and Continue |
| Pending only | Cancel; Discard and Continue |
| Modified + Pending | Cancel; Discard work and Continue; Export Dataset |

Export is not offered for pending-only work because pending drafts may not be
included in the exported Dataset.

## Candidate and confirmation semantics

Staging a candidate leaves the active Dataset, accepted baseline,
`datasetModified`, and `pendingUserWork` unchanged. The candidate is retained
until a decision and is not stored in Browser History, localStorage recovery
state, or Dataset identity.

Confirmation occurs before destructive replacement.

- Cancel clears only the candidate and preserves the active Dataset, baseline,
  pending registry, and pending draft payload.
- Discard and Continue accepts the candidate, establishes its baseline, clears
  the candidate, and clears discarded pending work.
- Candidate acceptance remains separate from screen navigation, Home, Resume,
  and reload recovery.

## Export semantics

Export and Continue is available only for modified-only state. It downloads
the current active Dataset, updates the baseline only after successful browser
download initiation, and then accepts the staged candidate.

Export Dataset in modified-plus-pending state:

- downloads committed Dataset content only;
- does not export or clear pending drafts;
- updates the baseline after successful download;
- changes `datasetModified` to `false` while `pendingUserWork` remains `true`;
- retains the candidate; and
- transitions the dialog to the pending-only action matrix.

Export failure retains the active Dataset, candidate, baseline, and pending
work and does not falsely establish a clean baseline.

Timeline export and replacement export use the shared browser download path.
Serialization success alone is not treated as successful export.

## Pending draft lifecycle

Pending registry state and actual pending draft payload are kept together for
the bounded editor mechanisms.

- Home navigation retains pending payload and registry state.
- Candidate Cancel retains pending payload and registry state.
- Export Dataset retains pending payload and registry state.
- Resume rehydrates retained editor payload rather than replacing it with the
  Dataset value.
- Successful Save commits the payload to the Dataset, then clears the
  corresponding payload and pending source.
- Explicit editor Back discards the payload without changing the Dataset and
  clears the corresponding pending source.
- Candidate Discard and Dataset deletion clear discarded pending payloads and
  sources.

Save and discard cleanup suppresses stale editor effects from republishing a
local draft after App-level cleanup.

## Navigation and accessibility compatibility

The NL-0 and NL-D3 Browser History boundaries remain unchanged. History stores
screen and selection state, not Dataset content, candidate state, or Dataset
identity. Resume remains baseline-neutral, reload recovery remains a new
session baseline, and stale selections are validated against the current
Dataset.

The confirmation dialog accepts the following interaction semantics:

- initial focus is defined;
- Tab and Shift+Tab remain inside the dialog;
- Escape dismisses through Cancel;
- backdrop click dismisses through Cancel; and
- focus is restored to the initiating control where available.

Desktop actions render in one row without a 2+1 wrap, while narrow viewports
stack all actions vertically without horizontal overflow.

## Manual acceptance evidence

The following cases were manually accepted:

- clean Sample replacement with immediate acceptance;
- modified-only Cancel, Discard, and Export and Continue;
- pending-only confirmation with Cancel and Discard only;
- modified-plus-pending action matrix;
- actual Export Dataset download with candidate retention and pending-only
  transition;
- pending Event draft preservation through Home, replacement staging, Export
  Dataset, Cancel, Resume, and editor reopen;
- restored draft Save with Dataset update and `pendingUserWork = false`;
- explicit Event Detail Back with draft discard and Dataset preservation;
- Browser Back / Forward and stale-detail safety from NL-D3;
- dialog focus, keyboard, backdrop, and focus-restoration behavior; and
- responsive desktop and narrow action layouts.

Visual width polish beyond the accepted responsive behavior remains a
non-blocking follow-up.

## Deferred work

- `beforeunload`;
- Browser Back pending-work guard and remaining internal loss protection;
- Dataset Handoff `#datasetUrl=`;
- runtime fragment processing;
- generic importer behavior; and
- localStorage draft persistence or redesign.

## Verification

NarrativeLine verification for implementation commit `fd22a37`:

- `npm test`: 57 passed;
- `npm run lint`: passed;
- `npm run build`: passed; and
- `git diff --check`: passed.

## Knowledge Candidate Check

No new `ai-knowledge` entry is required. The accepted observations are scoped
to this implementation and are already covered by the existing Dataset Safety,
application-state, recovery, and export-boundary knowledge. Session chronology,
commit history, test counts, and CSS-specific details are not promoted to
workspace knowledge.

## Acceptance status

NL-D4 Dataset Replacement Confirmation UI is formally ACCEPTED for the bounded
scope above. The next principal work may address `beforeunload` and remaining
internal navigation loss protection.
