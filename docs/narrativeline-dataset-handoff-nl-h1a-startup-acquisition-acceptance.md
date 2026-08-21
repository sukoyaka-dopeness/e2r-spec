# NarrativeLine Dataset Handoff - NL-H1A Startup Acquisition Acceptance

Date: 2026-08-22
Status: ACCEPTED
Implementation repository: `e2r-narrative-line`
Implementation commit: `13501723d253cb3a5589f675ab6f32c14ed76894` (`feat: add NarrativeLine Dataset handoff startup acquisition`)

## Scope

NL-H1A implements the Dataset Handoff v0 startup acquisition foundation for
NarrativeLine. It inspects the application fragment once at startup, obtains a
remote Dataset when an explicit handoff is present, and routes the response
through the existing NarrativeLine import, migration, validation, and Dataset
replacement pipeline.

The accepted scope includes:

- startup fragment inspection;
- `#datasetUrl=<percent-encoded absolute HTTPS URL>` parsing;
- empty and duplicate `datasetUrl` rejection;
- rejection of relative, HTTP, non-HTTPS, and credential-bearing URLs;
- coexistence with unknown fragment parameters;
- remote fetch with `credentials: "omit"`;
- non-success HTTP, network, and CORS/fetch failure handling;
- reuse of the existing JSON parse, legacy migration, and E2R validation path;
- valid remote Dataset candidate staging and NL-D4 acceptance;
- explicit handoff precedence over localStorage recovery and the built-in
  sample;
- prohibition of silent fallback after handoff failure;
- explicit acquisition, JSON, and E2R validation failure messages;
- startup-only acquisition;
- one request under React StrictMode; and
- Home Dataset action recovery after every acquisition terminal path.

NL-H1B fragment lifecycle and source-semantics cleanup remain deferred.

## Transport contract

NarrativeLine accepts one non-empty parameter in this form:

```text
#datasetUrl=<percent-encoded absolute HTTPS URL>
```

The value is an acquisition location, not Dataset identity. It is not stored
in the Core Dataset, an Extension, `history.state`, revision metadata,
provenance, or a content hash.

The implementation rejects:

- empty values;
- duplicate `datasetUrl` parameters;
- relative URLs;
- `http:`, `file:`, `data:`, `javascript:`, and other non-HTTPS schemes; and
- URLs containing an embedded username or password.

Unknown fragment parameters are ignored and retained. The handoff fetch uses
`credentials: "omit"`; application cookies, authentication information, and
application credentials are not intentionally forwarded to the Dataset host.

## Acquisition pipeline

The accepted NarrativeLine pipeline is:

```text
startup fragment
    -> datasetUrl validation
    -> HTTPS fetch with credentials omitted
    -> response text
    -> existing JSON parse / migration / E2R validation
    -> handoff candidate
    -> NL-D3 staging
    -> NL-D4 replacement confirmation when required
    -> active Dataset
```

Invalid JSON, E2R validation failure, and fetch failure do not create a
candidate and do not replace the active Dataset. Each failure remains visible
on Home. An explicit handoff failure does not silently open localStorage or
the built-in sample; the user may explicitly choose Resume, New Dataset, Open
E2R Dataset, or Open Sample Dataset.

Startup precedence is:

```text
1. explicit datasetUrl handoff
2. recoverable localStorage Dataset
3. built-in sample
```

This precedence selects the displayed Dataset and does not authorize
destruction of recoverable local state.

## Startup-only and fragment behavior

The handoff is inspected once during application startup. Runtime hash changes,
including changing one `datasetUrl` to another or changing unknown parameters,
do not initiate a second fetch. React StrictMode also results in one Dataset
request because the startup ownership guard is separate from the transient UI
acquisition state.

The `datasetUrl` fragment remains inspectable after successful and failed
handoff attempts. H1A does not implement local acceptance cleanup, sample or
new-Dataset cleanup, candidate lifecycle cleanup, or `history.replaceState`
fragment rewriting. Those behaviors are deferred to NL-H1B.

## Home Dataset action regression

During candidate implementation, Home actions were temporarily unusable after
Handoff-related tests. The trace established that the button handlers were
intact and that the blocking condition was the `disabled` attribute controlled
by `handoffLoading`; a disabled button does not fire its click event.

The startup one-shot guard is not a UI busy state. The accepted fix keeps these
responsibilities separate and wraps valid handoff acquisition in `try/finally`.
The transient `handoffLoading` state is cleared after fetch failure, invalid
JSON, E2R validation failure, candidate staging or acceptance, and unexpected
exceptions. Invalid and absent fragments start with loading false. Home
actions are disabled only while acquisition is actually in progress.

## Changed implementation files

The NarrativeLine implementation checkpoint contains exactly these files:

- `src/App.tsx`;
- `src/screens/HomeScreen.tsx`;
- `src/services/DatasetCandidateService.ts`;
- `src/services/DatasetHandoffService.ts`; and
- `tests/DatasetHandoffService.test.js`.

## Manual acceptance evidence

The following manual scenarios were reported and accepted:

1. Normal startup without `datasetUrl`; no handoff fetch occurs.
2. Successful public HTTPS handoff opens the remote Dataset in Timeline with
   `datasetModified=false` and retains the fragment.
3. React StrictMode produces one Dataset request.
4. Unknown parameters coexist with a valid handoff and remain retained.
5. Empty, duplicate, HTTP, and other unsafe handoffs are rejected before
   fetch and remain on Home.
6. Invalid JSON displays the JSON-specific failure and does not replace the
   active Dataset.
7. Schema-invalid JSON displays the E2R validation failure and does not replace
   the active Dataset.
8. 404 and other fetch failures display an acquisition failure and do not
   replace the active Dataset.
9. Runtime hash changes do not fetch a second Dataset.
10. An explicit handoff takes precedence over a recoverable localStorage
    Dataset without silently destroying that recoverable state.
11. After duplicate, HTTP, invalid JSON, schema-invalid, and fetch failures,
    Home Sample remains usable.
12. After successful handoff and returning Home, all normal Home Dataset
    actions are usable.
13. NL-D4 modified-only replacement remains accepted for Cancel, Discard and
    Continue, and Export and Continue.
14. NL-D4 pending-only replacement remains accepted, including draft retention
    after Cancel and the absence of an export action for pending-only work.
15. NL-D5A beforeunload protection remains accepted for pending drafts.
16. Home -> Resume remains baseline-neutral, and Browser Back / Forward retains
    existing one-operation-per-screen behavior without restoring old Dataset
    content.

## Verification

Implementation commit `13501723d253cb3a5589f675ab6f32c14ed76894` was verified
with:

- `npm test`: 63 passed;
- `npm run lint`: passed;
- `npm run build`: passed; and
- `git diff --check`: passed.

The handoff service tests cover percent-encoded HTTPS parsing, unknown
parameter coexistence, empty and duplicate rejection, unsafe URL rejection,
credential omission, successful response text acquisition, and non-success or
network fetch failures.

## Knowledge Candidate Check

No new `ai-knowledge` entry is required. The accepted boundaries reuse the
existing Dataset Safety, application-boundary, and navigation guidance. The
Handoff design document remains the source of truth for the v0 contract;
commit chronology, browser evidence, error strings, and test counts remain in
this repository result document rather than reusable workspace knowledge.

## Deferred work

- NL-H1B fragment lifecycle and source semantics;
- local acceptance cleanup of `datasetUrl`;
- sample and new-Dataset fragment cleanup;
- candidate, Cancel, and Export fragment lifecycle behavior;
- live hashchange Dataset switching;
- revision, provenance, content identity, and multi-Dataset handoff; and
- localStorage draft persistence or recovery redesign.

## Acceptance status

NarrativeLine Dataset Handoff v0 - NL-H1A Startup Acquisition Foundation is
formally ACCEPTED for the bounded scope above. The next principal task is
NL-H1B Fragment Lifecycle & Source Semantics.
