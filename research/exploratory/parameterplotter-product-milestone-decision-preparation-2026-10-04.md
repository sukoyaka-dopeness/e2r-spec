# ParameterPlotter product-milestone decision preparation

Date: 2026-10-04
Status: **Candidate B selected by Human / dedicated production source published / GitHub Actions Check passed / release and deployment not authorized**

## Current evidence and readiness

The bounded application-local Prototype 2 is HUMAN-ACCEPTED / CLOSED. Its
canonical browser evaluation remains 19 Human PASS / 0 PENDING / B3 NOT RUN;
Human accepted the missing genuine Prototype 1 legacy-session fixture as an
evidence limitation. This packet does not reopen that closure.

Human approved one Product responsibility: a workspace for comparing selected
E2R Entities on explicitly defined Dimensions and inspecting the same
application-local temporary Entity–Dimension values through Profile, Radar,
Quadrant, and Matrix. Prototype 1 and 2 provide accepted evidence that this
comparison workspace and its shared local values/interactions work as a
bounded application experiment. They do not establish audience, usage
frequency, data-retention expectations, collaboration needs, production
readiness, or a portable data model.

**Readiness:** Human selected Candidate B and a dedicated application
repository. `sukoyaka-dopeness/e2r-parameter-plotter` is the canonical
application source boundary. The reviewed first slice has been pushed to its
Public `main`; remote `main` matches local HEAD
`e31c67af3f89a23f959d151091e8f144f413624d`, and GitHub Actions `Check` passed
for that revision. This does not select a formal product name, release
identity, deployment, or portable data model.

## First-slice workspace lifetime candidates prepared 2026-10-04

This table preserves the choices as presented before Human selection. The
resolution immediately below is the current Product authority.

| Candidate | What Human would authorize | Evidence, benefits, trade-offs, and dependencies |
|---|---|---|
| **A. Hold production; gather product-use evidence** | Keep P2 closed and do not start a production slice yet. | Preserves all current non-decisions while gathering evidence about audience and recurring tasks. No repository, framework, or persistence decision is needed. Delays learning from a production-shaped application. |
| **B. Bounded app-local first slice** | Authorize a single-user comparison workspace whose temporary values remain application-local and whose Dataset stays read-only; explicitly accept the first slice's stated session/loss/recovery limits. | Closest to accepted P1/P2 boundaries and does not require a portable Observation model or Dataset write-back. Before implementation, Human must confirm the exact lifetime/recovery expectation; P2's tab-session storage is evidence, not an approved production retention promise. Sharing and durable recovery remain out of scope unless separately selected. |
| **C. Durable app-owned workspace first slice** | Require temporary work to survive beyond the current browser session, while leaving Dataset write-back undecided. | May better support recurring work, but requires a product-level retention, recovery, and ownership promise before technical choices. App-owned persistence can remain distinct from portable E2R semantics. Whether this is local or hosted, and whether users share work, are subsequent decisions rather than assumptions in this option. |

The preceding trade-off text records the pre-decision state and is superseded
by the Human resolution below.

## Human decision: Candidate B — bounded app-local first slice — 2026-10-04

Human selected Candidate B with these first-slice boundaries:

- single-user comparison workspace;
- imported E2R Dataset is read-only;
- Dimensions, temporary Entities, and Entity–Dimension comparison values
  remain application-local;
- no guarantee of durability or recovery beyond the browser session;
- loss of temporary work when the session ends is accepted and must be made
  explicit to the user; and
- portable Observation or Dimension/value contract, Dataset write-back or
  export, shared workspace, account, authentication, and cloud persistence are
  not first-slice requirements.

ParameterPlotter remains a working name. This selection does not reopen the
Prototype 2 closure, which remains HUMAN-ACCEPTED / CLOSED at 19 Human PASS / 0
PENDING / B3 NOT RUN. The accepted B3 evidence limitation remains accepted.

## Production source boundary and implementation preparation

### Evidence and current responsibility boundaries

- `e2r-spec` owns the Core/Extension specification, canonical Roadmap, and
  Research evidence. The accepted Prototype source is under
  `research/prototypes/parameterplotter-1/`; that research location does not
  establish it as a production application source of truth.
- NarrativeLine, LiaisonScape, and Hub have separate application repositories.
  Existing E2R application practice therefore supports an application-owned
  runtime source with its own tests and release boundary. This is evidence,
  not an adopted repository choice for ParameterPlotter.
- Hub's current authority is the ecosystem entry, explanation, catalog, and
  publication surface. It is optional; current cross-app evidence says Hub is
  not a runtime authority or required startup service. Housing the comparison
  workspace in Hub would couple product runtime to a separate portal role and
  needs a specific rationale.
- The workspace-wide accepted modularization decision in the central
  `ai-knowledge/decisions/application-modularization-and-incremental-extraction.md`
  requires moderate, responsibility-based boundaries and incremental
  extraction. It selects no framework, layout, or file count.
- The current software licensing direction is MIT for E2R software
  repositories, with each repository receiving its own `LICENSE` and package
  metadata in a separate bounded step. `e2r-spec` has a distinct standards and
  documentation license policy.

### Source-boundary candidates

| Source option | Boundary | Main benefit | Main cost or risk |
|---|---|---|---|
| **1. Dedicated application repository** | A new application-owned repository is canonical for production runtime, tests, and release; `e2r-spec` remains specification/Roadmap/Research authority; Hub may later link or publish an entry. | Clear ownership and release boundary; matches existing separate application repositories; avoids putting production runtime under the specification repository. | Requires Human to authorize and name/own a repository, then apply repository-specific license, CI, and release conventions. |
| **2. Existing application repository** | Human names an existing repository and explicitly assigns it product ownership. | Avoids establishing another repository and may reuse its delivery infrastructure. | No existing repository is currently evidenced as the owner of this distinct comparison workspace; Hub is a portal, while NarrativeLine and LiaisonScape have separate product responsibilities. Adds coupling and ownership ambiguity unless justified. |
| **3. Defer production source creation** | Keep P2 as accepted evidence and retain the implementation at research-prototype status until a source owner/repository is selected. | Requires no new ownership or repository decision and keeps production claims out of scope. | Delays implementation of the selected first-slice Product direction. |

## Human decision: dedicated production source repository — 2026-10-04

Human selected a dedicated application repository and confirmed the canonical
repository identity `e2r-parameter-plotter`. The signed-in GitHub owner was
`sukoyaka-dopeness`; the existing E2R application repositories under that
owner were Public, so the repository was created as Public at
https://github.com/sukoyaka-dopeness/e2r-parameter-plotter. The specification
and research authority remains `e2r-spec`; the new repository owns the
application runtime and its application-level tests. Hub remains optional and
is not a runtime or source owner.

The new repository was cloned to `C:\Users\extra\E2R\e2r-parameter-plotter`.
Its bounded first-slice source is in commit `e77c610`
(`feat: add ParameterPlotter first app slice`). A documentation-only boundary
status sync is in `e31c67a` (`docs: sync first-slice commit status`), now the
published `main` HEAD. Remote `main` matches that revision. Automated checks,
a browser smoke with a genuine E2R sample, and the GitHub Actions `Check`
workflow passed. The approved ten ParameterPlotter repository topics are
visible on GitHub. The source is published; release and deployment remain
separate, unauthorized steps.

### Prototype 2 source disposition

The accepted Prototype 2 source remains the behavioral reference and evidence
baseline. Production source selectively carries forward runtime modules and
focused tests for the accepted four-view comparison behavior. It has its own
application storage key, visible session-loss notice, repository metadata,
local server entry, and verification commands. The application uses browser-
native ES modules without a third-party runtime dependency; this implementation
choice does not adopt a framework, portable contract, or durable storage. The
Prototype research path is not the production source of truth.

### Lifecycle contract already selected and implementation checks

The Product boundary rules out server persistence, accounts, cross-user sharing,
and a recovery promise. The local implementation makes the selected lifecycle
facts explicit and testable:

- the comparison work is temporary, single-user, and application-local;
- the user is told before relying on the work that ending the browser session
  may lose it and that cross-session recovery is not guaranteed;
- replacing the read-only imported Dataset warns that application-local work
  will be lost, and offers a safe way to cancel; and
- Dataset content is never written back or exported by this first slice.

The application shell now displays the session-lifetime limitation, and the
Dataset replacement warning explains that temporary work cannot be exported
or recovered after the browser session ends. An isolated local browser smoke
check confirmed that the same tab retained its temporary Entity, Dimension,
and value after reload, while a newly opened tab started with an empty
workspace. This is machine supporting evidence for current-session scope, not
Human acceptance or durable recovery. If a desired behavior needs
cross-session recovery, sync, accounts, or cloud storage, return to Human
because it exceeds Candidate B.

### Decisions that can wait

- **Framework and visualization library:** no current E2R-wide authority
  prescribes one. The accepted modularization policy leaves these to the
  implementation team after source ownership is set, provided the chosen
  tools support the bounded behavior and verification needs.
- **Formal product name and release identity:** ParameterPlotter remains a
  working name. Neither is needed for internal source ownership or a first
  implementation checkpoint.
- **Portable semantics and Dataset mutation:** no first-slice requirement
  calls for an Observation model, portable Dimension/value contract, Dataset
  write-back/export, Extension, schema, or Validator changes.
- **Accounts, authentication, shared workspace, hosted persistence, and
  multi-user conflict handling:** excluded by the selected single-user,
  non-durable boundary.
- **Release, deployment, and Hub directory entry:** remain separate gates.
  The first source push is complete. Release and deployment need their own
  readiness and authorization. Hub is not a prerequisite runtime dependency.
- **Known Prototype follow-ups:** the Quadrant resize-then-scroll connector
  defect and waiting-Entity plot-click discoverability remain separate,
  non-blocking follow-ups unless the production slice is shown to depend on
  them.

## Historical conditional implementation gates (pre-Candidate B and source selection)

Human later selected the first-slice outcome, its single-user,
application-local, non-durable boundary, and the dedicated source repository
recorded above. Durable or shared work, cross-application exchange, and
Dataset persistence would require new Human decisions and are not part of
Candidate B.

## Separate follow-ups

The Quadrant resize-then-scroll connector defect and waiting-Entity
plot-click discoverability remain separate Prototype follow-ups. P2 closure
records them as non-blockers. This packet does not fix them or promote them to
Product blockers. If a selected first slice depends on either interaction,
Human may scope a focused follow-up before that slice; otherwise they remain
separate.

## Historical suggested next Human decision (superseded)

The earlier recommendation was to choose A, B, or C and, for B, specify the
session/loss boundary. Human selected B and its boundary on 2026-10-04. The
dedicated source repository was selected and created on 2026-10-04. The next
external gate is Human review and approval before pushing the local first-slice
source; that gate was completed on 2026-10-04 when the approved HEAD was pushed
and its GitHub Actions check passed. No new Product-level choice is pending in
this packet.

## Evidence pointers

- [Current Roadmap](../../docs/roadmap.md)
- [ParameterPlotter Research overview](multi-visualization-application-pre-implementation-research.md)
- [Dimension/value semantics Research checkpoint](parameterplotter-dimension-value-semantics-research-checkpoint-2026-10-02.md)
- [Prototype 2 implementation and closure result](../prototypes/parameterplotter-1/prototype-2-bounded-implementation-result-2026-10-02.md)
- [Prototype 2 Human Browser Evaluation](../prototypes/parameterplotter-1/prototype-2-human-browser-evaluation-2026-10-02.md)
- [Prototype README and current runtime boundary](../prototypes/parameterplotter-1/README.md)
- [Application design principles](../../docs/application-design-principles.md)
- [Cross-App capability architecture and Hub boundary](../../docs/cross-app/cross-app-capability-handoff-implementation-readiness.md)
- [Cross-repository software licensing direction](../../docs/roadmap.md#cross-repository-software-licensing-direction)
