# Hub to ParameterPlotter Sample Acquisition Design Review

Date: 2026-10-09

Status: **HUMAN-SELECTED IMPLEMENTATION ROUTE / IMPLEMENTED / HUMAN BROWSER ACCEPTANCE PENDING**

## Current ownership and routes

- Lighthouse Restoration Project is owned by E2R-SPEC at
  `examples/lighthouse-restoration-demo.{en,ja}.e2r.json`. LiaisonScape's
  `public/` copies are distribution/compatibility mirrors; the Hub's existing
  Lighthouse raw-file URLs point to those mirrors. E2R-SPEC and LiaisonScape
  implementation records report byte parity at their reviewed revisions.
- Cedar Observatory: An Open Night is owned by NarrativeLine at
  `src/sample/cedar-observatory-showcase.{en,ja}.e2r.json`. The Hub URLs point
  to these owner files.
- The Hub selects EN or JA from its UI locale and creates receiving-app URLs
  with `#datasetUrl=<encoded URL>&locale=<locale>`. Its current sample cards
  offer NarrativeLine and LiaisonScape destinations; no ParameterPlotter
  destination is present. Hub source commit inspected: `a588cb9342064ec21d1de21cab466bcaac97beab`.
- ParameterPlotter accepts local JSON through **More → Open Dataset** and
  loads its own bundled Ashen Crown file from the app. Its URL Fragment
  handling reads `locale`; it has no `datasetUrl` fetch path. Source inspected:
  `7283f2a8c2d17fe20b4975dd6dedb75fb33c12b7`.
- These owner Dataset changes are local and unpushed. The Hub's raw GitHub
  `main` URLs and any public app URL therefore cannot be assumed to serve the
  reviewed revisions until their separately authorized publication occurs.

## Existing Handoff behavior

NarrativeLine and LiaisonScape both parse a `datasetUrl` startup fragment,
require an absolute HTTPS URL without embedded credentials, fetch with
credentials omitted, validate the retrieved Dataset, and pass it through
their existing candidate/replacement lifecycle. Their implementations report
fetch/parse/validation failure and preserve the active Dataset safety
boundary. On acceptance, both retain the URL when the accepted source is the
Handoff itself; their existing local/sample/new acquisition paths handle
fragment cleanup separately. LiaisonScape also supports a distinct targeted
Handoff contract; that extension is not required for ordinary sample
acquisition. The Hub selects a localized owner URL before creating the
handoff. These are application implementations of the existing Dataset
Handoff model, not a ParameterPlotter contract.

The [Dataset Handoff v0 design](dataset-handoff-v0-design.md) defines the
transport as an absolute HTTPS `datasetUrl`, not as Dataset identity or
revision. It expects the browser to fetch directly from the Dataset host,
without forwarding application credentials; public use depends on the host's
CORS behavior. The Hub is not a required proxy. The Hub's `locale` fragment
parameter is an application-level companion; Handoff v0 leaves unknown
fragment parameters to the receiver. ParameterPlotter's locale preference
precedence when a Handoff also carries `locale` remains unselected.

Implementation evidence: [NarrativeLine Handoff acceptance](../narrativeline/narrativeline-dataset-handoff-nl-h1a-startup-acquisition-acceptance.md),
[LiaisonScape Handoff implementation](../liaisonscape/dataset-handoff-v0-liaison-scape-implementation-result.md),
and the shared [Dataset Acquisition Entry Point Alignment](dataset-acquisition-entry-point-alignment.md).

The accepted cross-app acquisition entry-point decision keeps Home as the
primary Dataset lifecycle surface and treats Handoff as a startup acquisition
instruction. Existing guidance also says to keep Dataset ownership singular
and to preserve replacement safety. The relevant authority and reusable
decision are [`Dataset Acquisition Entry Point Alignment`](dataset-acquisition-entry-point-alignment.md)
and [`the shared Knowledge decision`](../../../ai-knowledge/decisions/dataset-acquisition-entry-point-alignment.md).

## Options

| Option | User path | Benefits | Costs and boundaries |
|---|---|---|---|
| A. Download then Open Dataset | From Hub, obtain the owner JSON locally, open ParameterPlotter, choose **More → Open Dataset**, and select the file. | No new ParameterPlotter transport behavior; uses the existing file import and replacement-safety route; can test unpublished files locally. | More steps and context switching; current Hub sample cards do not provide a direct download action; weaker consistency with Hub's one-step handoff to NarrativeLine/LiaisonScape; filename/locale selection becomes user-managed. |
| B. Hub startup Handoff to ParameterPlotter | Add a ParameterPlotter destination to each Hub sample card using the locale-matched owner URL and existing `datasetUrl` plus `locale` fragment pattern; add safe Handoff acquisition to ParameterPlotter. | Closest to current Hub pattern and user expectation; one-step from a sample card; preserves owner source and localized pairing; scales to further Hub samples without copies. | Requires ParameterPlotter runtime, validation and tests; must define safe fetch, error recovery, fragment cleanup, candidate staging, replacement confirmation and behavior if the active workspace has unsaved work. Hub must only point to publicly available versions in production; local integration testing needs local serving/configuration of owner files and CORS. |
| C. Hub downloads then opens or transfers a file | Hub obtains the JSON and triggers a download or browser-mediated transfer, followed by local opening in ParameterPlotter. | Could keep ParameterPlotter's URL-fetch surface unchanged. | Browsers do not provide a safe generic way for Hub to populate another app's file picker or transfer a downloaded file into it; still multi-step, less predictable, and introduces download naming/storage concerns. A direct raw JSON link is a download/navigation, not an app handoff. |

## Evaluation and recommendation

Option B is the recommended design direction for a future implementation
checkpoint because it follows the Hub's existing card-to-application
Handoff pattern and keeps each Dataset at its current owner. It should be
implemented only after Human selects the route. The recommendation does not
approve a new ParameterPlotter fragment contract or authorize runtime work.

Option A remains a useful immediate local review path and recovery fallback.
It is the only currently supported way to open these local, unpushed owner
files in ParameterPlotter. It should not be described as an integrated Hub
acquisition experience.

Option C offers no demonstrated benefit over A or B and is not recommended
without a concrete browser capability and user-flow requirement.

## Decisions required before implementation

Human should select whether the milestone is:

1. an explicit Hub-to-ParameterPlotter `datasetUrl` startup Handoff (recommended);
2. a Hub download action documented as a two-step local-file workflow; or
3. a different acquisition contract.

If B is selected, implementation design must still settle and validate:

- supported URL scheme and credential/redirect policy;
- how Handoff failure returns the user to ParameterPlotter Home without
  replacing the active Dataset;
- candidate validation and Dataset Replacement Safety when work is pending;
- when consumed fragment parameters are removed;
- locale precedence when both the Hub locale and existing ParameterPlotter
  locale preference are present; and
- local development fixture serving and CORS, separately from published URLs.

These are implementation details to resolve against the existing
ParameterPlotter replacement-safety contract and the E2R Handoff authority.
They are not settled by the current research.

## Not authorized by this review

This design comparison changes no app runtime, Hub links/UI, Dataset owner or
file, distribution mirror, Candidate contract, or publication state. The
Lighthouse/Cedar ParameterPlotter Browser Acceptance is recorded separately
in the [bounded closure](../public-samples/lighthouse-cedar-parameterplotter-human-browser-acceptance-closure-2026-10-09.md).

## Human-selected implementation route and checkpoint

Human selected Option B: Hub to ParameterPlotter Startup Handoff v0. The reason is to offer the same Hub-originated Dataset acquisition pattern as NarrativeLine and LiaisonScape while keeping the existing Dataset owners and the ParameterPlotter local Open Dataset path.

The bounded implementation adds startup-only `datasetUrl` acquisition to ParameterPlotter and optional ParameterPlotter actions to the Hub Lighthouse and Cedar cards. Hub locale selects the matching EN/JA source URL. The ParameterPlotter locale conflict screen is resolved before fetching; its existing saved-versus-requested choice remains unchanged. Handoff then enters the normal Dataset read/validation and replacement-safety path. Fetch or parse failure does not replace the prior Dataset or silently select a fallback. Accepting a Handoff retains the URL; accepting a local file, New Dataset, or bundled sample clears only `datasetUrl`, preserving locale and unknown fragment parameters.

Hub exposes the ParameterPlotter action only when a receiving-app URL is configured. The inspected ParameterPlotter source has no deployment workflow or confirmed public app URL. Local integration supports loopback-only HTTP and configurable local Dataset fixture URLs; public Hub links and public Dataset fetchability are not verified by local tests.

Implementation evidence (local, unpushed): `e2r-parameter-plotter/docs/dataset-handoff-v0-implementation-2026-10-09.md` and `e2r-hub/docs/parameterplotter-sample-handoff.md`. Status: IMPLEMENTED / AUTOMATED CHECKS PASS / HUMAN BROWSER ACCEPTANCE PENDING. This does not change the Dataset Handoff v0 design, Dataset ownership, publication status, or Candidate stability.
