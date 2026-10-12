# Hub to ParameterPlotter Startup Handoff v0 — Human Browser Review Preparation

Date: 2026-10-09

Status: **IMPLEMENTED / AUTOMATED CHECKS PASS / HUMAN BROWSER ACCEPTANCE PENDING**

This note prepares the remaining local Human Browser Review. It does not close
the Handoff Acceptance or claim public deployment.

## Current local review environment

The following listeners were reachable during this checkpoint:

- Hub: <http://127.0.0.1:4186/e2r-hub/>
- ParameterPlotter: <http://localhost:4185/>
- Local CORS-enabled Dataset fixtures: <http://localhost:4187/>

The running Hub's Vite module reported these active development settings:

- ParameterPlotter target: `http://localhost:4185/`
- Lighthouse EN/JA: `http://localhost:4187/lighthouse.en.json` and
  `http://localhost:4187/lighthouse.ja.json`
- Cedar EN/JA: `http://localhost:4187/cedar.en.json` and
  `http://localhost:4187/cedar.ja.json`

The fixture server reads the current local E2R-SPEC Lighthouse files and
NarrativeLine-owned Cedar files. All four returned HTTP 200 and
`Access-Control-Allow-Origin: *` in this checkpoint. Their current local
contents are Lighthouse 10 Entities / 5 Dimensions / 31 Assessments and Cedar
6 Entities / 4 Dimensions / 15 Assessments; each payload and its Specification
`uses` entry declare Candidate 0.2.0.

These are local worktree fixtures. They do not establish that the public Hub,
ParameterPlotter, or raw Dataset URLs expose these revisions. A read-only fetch
of the four public raw URLs currently referenced by Hub succeeded, but those
responses do not contain the Dimension Assessment extension. Do not use the
public URLs as evidence for these unpushed Dataset updates. Public source and
application deployment remain unverified.

## Evidence already accepted

Human previously reviewed the direct ParameterPlotter Startup Handoff routes
for Lighthouse EN, Lighthouse JA, Cedar EN, and Cedar JA and confirmed that the
corresponding Dataset displayed. That prior bounded display evidence remains
valid; this preparation does not ask Human to repeat those direct-URL checks.

The current [Handoff v0 design](dataset-handoff-v0-design.md),
[ParameterPlotter implementation record](../../../e2r-parameter-plotter/docs/dataset-handoff-v0-implementation-2026-10-09.md),
and [Hub implementation record](../../../e2r-hub/docs/parameterplotter-sample-handoff.md)
define the local/public boundary and the replacement-safety flow. Current
automated checks also pass: Hub 5/5 tests and ParameterPlotter's
`npm.cmd run check` (34 application modules; 141/141 tests).

No Codex-operated browser acceptance is claimed. The Computer Use initialization
failed in this checkpoint before a browser session was available.

## Remaining Human review

Use a disposable Edge InPrivate session. Keep Hub and ParameterPlotter tabs in
that same InPrivate session so the receiving app uses one isolated local
`localhost:4185` browser-storage area. Do not use an existing working Dataset.

1. Open <http://127.0.0.1:4186/e2r-hub/>. From the English Hub, use the
   ParameterPlotter action on Lighthouse, then on Cedar. Confirm the resulting
   ParameterPlotter tab identifies the matching Dataset and English UI request.
2. Switch the Hub to Japanese. Use its ParameterPlotter actions for Lighthouse
   and Cedar. Confirm the matching Japanese Dataset and Japanese UI request.
   Dataset-authored text should remain in the language of the selected file.
3. For a fetch-failure check, open this local-only test URL in the same
   InPrivate profile:
   `http://localhost:4185/#datasetUrl=http%3A%2F%2Flocalhost%3A4187%2Fmissing.json&locale=en`
   Confirm an error is shown and the active Dataset is not replaced. Use the
   app's Continue action to leave the failed startup handoff before continuing.
   Automated checks cover malformed JSON parsing and the normal replacement
   wiring; source inspection shows structural `readDataset` failures are caught
   before replacement. They do not exercise this complete failure path in a
   browser. A JSON object that is structurally openable but has Validator errors follows
   ParameterPlotter's existing diagnostic read-only behavior; it is not the
   same failure case. Do not use a valuable workspace to explore that branch.
4. For replacement Cancel, create a disposable Dataset/workspace in
   ParameterPlotter and make an applied change that is not exported. From Hub,
   start either sample handoff. Confirm the replacement warning appears;
   choose Cancel and verify the prior disposable workspace and its change remain
   active. This is a cancellation test; do not choose Discard in a workspace
   containing anything valuable.
5. To check locale conflict, explicitly set the ParameterPlotter UI to
   Japanese in this InPrivate session, then start an English Hub handoff. Confirm
   that the saved recipient preference is not silently overwritten and that
   the existing locale-choice UI is resolved before Dataset fetch. The selected
   Dataset's text remains English. The reverse conflict is optional if the
   first direction passes.
6. With a disposable workspace only, use Reload and Back/Forward to observe the
   startup boundary. Handoff is startup-only: a full Reload is a new startup
   and may fetch the retained `datasetUrl` again; it is not specified to avoid
   reacquisition. In-document Back/Forward must not trigger a new fetch merely
   from history traversal. If replacement would affect loss-sensitive work,
   verify that existing confirmation protects it and Cancel preserves it.
7. After a successful handoff, use More → Open Dataset with a disposable local
   JSON file. Confirm the existing local Open route remains available and
   continues through the normal replacement-safety flow.

The failure URL uses a loopback HTTP 404 fixture route. This is allowed only
because the development ParameterPlotter itself is served over loopback HTTP;
it is not a production URL example. Public Handoff requires HTTPS, and browser
fetch from a public app additionally depends on the Dataset host's CORS policy.

## Contract and evidence boundaries

- Hub's locale is a startup request. A valid saved ParameterPlotter locale
  preference remains recipient-owned; a conflict is presented before fetching.
  Dataset content language is independent of UI locale.
- Handoff fetches once during application startup and uses the normal
  Dataset-validation and replacement lifecycle. Network/HTTP/JSON/open failure
  does not silently fall back or replace the current Dataset.
- A structurally openable Dataset with Validator errors is accepted into the
  existing diagnostic read-only surface. With loss-sensitive work, the normal
  replacement confirmation protects the current workspace; a clean workspace
  can be replaced without that confirmation. Whether Handoff should reject
  Validator-invalid-but-openable input instead of preserving this diagnostic
  behavior is not decided by this checkpoint and is not claimed as accepted.
- Canceling replacement retains the current workspace. Accepting Handoff
  retains `datasetUrl`; choosing Continue after a failed handoff or accepting a
  local file, New Dataset, or bundled sample removes only `datasetUrl`, keeping
  locale and unknown fragment parameters.
- Reload starts a new application lifecycle, so retained startup instructions
  may run again. No `hashchange`/`popstate` listener was found in the current
  ParameterPlotter runtime; history traversal within the existing document is
  not an acquisition event.
- Automated tests, this checkpoint's read-only HTTP/source inspection, prior
  direct-route Human review, and the remaining Hub-origin Human review are
  distinct evidence. Only Human-reported browser observations can close the
  remaining Human Acceptance.

Current planning status remains in the [E2R-SPEC Roadmap](../roadmap.md).
The Hub-to-ParameterPlotter milestone remains **HUMAN BROWSER ACCEPTANCE
PENDING** until the remaining Hub-origin and safety interactions above are
reported by Human.
