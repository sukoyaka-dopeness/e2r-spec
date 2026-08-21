# Dataset Handoff v0 — LiaisonScape Implementation Result

Status: COMPLETE / MANUALLY ACCEPTED.

Recorded: 2026-08-21.

This is a non-normative application implementation result. It does not add
E2R Core or Extension semantics, define Dataset identity, or change the
Dataset schema.

## Accepted checkpoints

- `b350827` — fragment helpers
- `1a2fab0` — startup acquisition
- `efa56c7` — fragment/popstate history ownership fix
- `3cd89a7` — accepted replacement fragment lifecycle

All LiaisonScape commits remain local and unpushed.

## Transport and URL safety

LiaisonScape accepts the v0 startup form:

```text
#datasetUrl=<percent-encoded absolute HTTPS URL>
```

The implementation distinguishes no handoff, one valid non-empty value,
empty values, and duplicate values. Unknown fragment parameters are tolerated.
Only absolute HTTPS URLs are accepted. Non-HTTPS schemes, relative URLs, and
embedded username/password credentials are rejected. `datasetUrl` is treated
as an acquisition location, not as Dataset identity.

## Startup acquisition

The fragment is inspected once at startup. A valid handoff is fetched directly
with `credentials: "omit"` and passed through the existing open pipeline:

```text
handoff fetch
-> App.open(raw)
-> DatasetService.loadDataset
-> JSON parse
-> Validator
-> candidate
-> requestDatasetReplacement
-> accept or stage
```

There is no `hashchange` live switching. A component-local startup guard
prevents duplicate acquisition under React StrictMode. Manual acceptance
observed one request for the valid handoff Dataset.

## Failure behavior

Invalid fragments, fetch or HTTP failures, invalid JSON, and schema-invalid
Datasets are shown as explicit Home failures. The implementation does not
silently select a sample or another Dataset, and retains the active Dataset and
handoff fragment where applicable. Content-Type is not required, and no proxy
or application credential forwarding is used.

## Replacement safety and fragment lifecycle

The accepted D1-D7 replacement safety implementation is reused unchanged.
Replacement sources are tracked as `handoff`, `local`, `sample`, or `new`.

- Successful handoff acceptance retains `datasetUrl`.
- Successful Local, Sample, or New acceptance removes only `datasetUrl`.
- Candidate acquisition, validation, staging, Cancel, Export Dataset-only, and
  failed Export do not change the fragment.
- Discard and Continue, or successful Export and Continue, update the fragment
  only when the candidate is actually accepted.
- Unknown fragment parameters are preserved.

Fragment lifecycle updates use `history.replaceState`, preserve the existing
history state and `liaisonScapeView` ownership marker, and do not add a history
entry. The follow-up popstate ownership fix preserves the current view for
unknown history state and restores only LiaisonScape-owned Home or Workspace
state.

## Manual evidence and verification

Manual acceptance covered normal startup, valid handoff, StrictMode request
count, invalid fragment, fetch/404 failure, invalid JSON, schema-invalid
Dataset, unknown parameters, runtime hash changes, handoff fragment retention,
Local/Sample/New replacement, invalid candidate preservation, D6 Cancel,
D6 Discard, Export and Continue, modified-and-pending Export Dataset, D7
beforeunload, and Browser Back/Forward behavior.

The accepted verification baseline is:

- 180 tests passed
- lint: PASS
- build: PASS
- `git diff --check`: PASS

## Non-goals and unchanged boundaries

- no E2R Core or Extension change;
- no Dataset identity or schema change;
- no `hashchange` live switching;
- no private or authenticated Dataset support;
- no Hub direct handoff;
- no NarrativeLine parity;
- no account or login requirement;
- no content hash, provenance, or merge behavior.

## Follow-up

Documentation synchronization and user-guide updates remain separate closure
work. Hub direct handoff and NarrativeLine parity remain deferred.
