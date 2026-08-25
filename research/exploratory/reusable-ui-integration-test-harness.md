# Reusable Vite UI Integration Test Harness

Status: research conclusion reached; implementation handoff ready.

## Motivation

Recent NarrativeLine locale work established bounded production integration
evidence using:

- the Node built-in test runner;
- jsdom;
- React 19 `createRoot` and `act`;
- Vite `createServer` and `ssrLoadModule`;
- production components and application modules; and
- observable storage, History API, fragment, fetch, and semantic UI state.

The pattern covered deterministic checks for locale Conflict behavior, real
button interaction, localized alerts, browser fallback, fragment updates,
`history.replaceState`, `history.state`, and Handoff fetch counts.

## Research question

Can this pattern be reused as a bounded UI integration testing approach by a
second E2R application without hiding application-specific behavior or making
the E2R repositories depend on a premature shared package?

If reuse is demonstrated, a later question is whether the stable environment
and lifecycle helpers justify extraction into a shared repository or package.

## Current evidence boundary

NarrativeLine checkpoints `d5749cc` and `5013089` demonstrate one working
consumer. LiaisonScape checkpoint `37f1930` and Hub checkpoint `41a7156`
subsequently provide independent second- and third-application evidence.

The research must preserve:

- per-test jsdom isolation and cleanup;
- React root unmount and Vite server close on failure paths;
- storage, History, and fetch observability without global behavior leakage;
- semantic assertions instead of CSS-only assertions; and
- application-owned acceptance tests outside the generic harness layer.

## Candidate extraction threshold

Do not create a shared repository or npm package unless at least two E2R
applications use the same helper contract, copy-paste maintenance is a real
cost, the lifecycle API is stable, and app-specific behavior can remain outside
the shared layer. Treat this threshold as a hypothesis, not an accepted
architecture.

## Manual acceptance boundary

Automation is appropriate for deterministic DOM, dialog, alert, storage,
History, fragment, fetch-count, and state-transition evidence. Real-browser
acceptance remains necessary for responsive geometry, wrapping, visual focus,
hover, touch feel, drag quality, and browser Back/Forward UX.

## Synchronized evidence: H1-H6

### H1 — LiaisonScape second-application validation

Result: `PREMATURE`. LiaisonScape did not yet have a production UI integration
test, so portability evidence was insufficient.

### H2 — LiaisonScape minimal production UI integration baseline

Result: `SUCCESS / checkpointed` at `37f1930`.

The baseline demonstrated production App rendering with JSDOM, Vite
`createServer`, `ssrLoadModule`, React `createRoot`, `act`, global restoration,
test-only jsdom, deterministic cleanup, and passing focused/full validation.

### H3 — NarrativeLine / LiaisonScape portability comparison

Result: `NEEDS THIRD CASE`.

The candidate common boundary was JSDOM/global lifecycle, React root lifecycle,
Vite lifecycle, and cleanup. Providers, Dataset/storage state, browser stubs,
selectors, actions, and semantic assertions remained application-owned.

### H4 — Hub third-application feasibility audit

Result: `FEASIBLE / STRONG THIRD CASE / PROCEED H5`.

Hub's landing surface was independent enough to test the lifecycle without
requiring Dataset loading, network startup, or production source changes.

### H5 — Hub minimal production UI integration baseline

Result: `SUCCESS / checkpointed` at `41a7156`.

The baseline rendered the production Hub App through Vite and React, used
`jsdom@30.0.1`, verified the Home surface semantically, and passed focused,
repeated, full, lint, build, and diff checks without React/Vite/JSDOM/leak
warnings.

### H6 — Three-application portability decision

Result: `PROCEED TO SHARED EXTRACTION DESIGN`.

Three applications now demonstrate the same environment lifecycle
responsibilities. This result authorizes design work only; it does not approve
an implementation, package, or application migration.

## Supported boundary after H6

The strongest shared core is:

- JSDOM creation and close;
- global descriptor capture, install, and restoration, including absent
  properties;
- cleanup registration and failure-path disposal; and
- a React root lifecycle helper.

Vite `createServer`, `ssrLoadModule`, server close, `act` settling policy, and
JS/TS consumption remain adapter-dependent. Vite is not an unconditional
shared-core requirement because the observed versions differ (`8.1.5` versus
`8.2.1`).

Browser capabilities remain explicitly app/test-owned. A universal browser
stub bundle is rejected: NarrativeLine may require IntersectionObserver and
scroll/focus APIs, LiaisonScape has its own UI requirements, and the Hub Home
baseline requires almost none.

Dataset fixtures, locale semantics, storage contents, URL/hash/navigation or
handoff state, providers, selectors, actions, labels, and semantic assertions
remain application-owned. Generic Dataset, locale, navigation, Timeline,
Graph, or Hub options are rejected.

## H6 conclusion snapshot (historical)

**Hypothesis supported / design candidate ready**

The evidence supports a small reusable environment lifecycle abstraction.
`Accepted shared API`, `Implemented`, and `Completed` are not claimed. The
next step is H7 — Minimal Shared UI Integration Environment Design, still
design-only.

## H6 knowledge candidate (historical)

The following reusable rule is supported across three independent applications
and is eligible for a workspace knowledge entry:

> Reusable UI integration harnesses should centralize environment lifecycle
> and cleanup, while application-specific state, browser capabilities,
> selectors, fixtures, and semantic assertions remain application-owned.

## Next step

H7 scope is limited to the DOM/global lifecycle API, cleanup ownership,
optional Vite adapter boundary, React lifecycle boundary, app-owned extension
points, JS/TS consumption, dependency/version policy, and prototype location.
No package creation, shared harness implementation, or app migration is
authorized by this checkpoint.

## Possible bounded experiments

1. Reproduce a minimal production-component smoke test in LiaisonScape using
   its existing toolchain.
2. Compare NarrativeLine and LiaisonScape helper boundaries and lifecycle
   cleanup requirements.
3. Evaluate a local prototype only if both applications demonstrate a stable
   common contract.

No runtime, package, or test-infrastructure implementation is authorized by
this research seed.

## H15R — Research evidence synchronization

H7 completed the minimal shared UI integration environment design. H8-H10
then established the same canonical lifecycle boundary across three materially
different consumers: Hub, LiaisonScape, and NarrativeLine. LiaisonScape passed
with jsdom 26.1.0; Hub and NarrativeLine passed with jsdom 30.0.1. NarrativeLine
retained its richer browser capabilities and URL-string / React-act
compatibility as migration-local behavior.

H11 selected a dedicated TypeScript-authored, Core-only package consumed as
compiled ESM JavaScript with declarations. jsdom remains consumer-owned as a
peer; React, Vite, browser stubs, Dataset state, and application semantics are
excluded. Independent cloneability is a required distribution invariant.

H12-H14 validated the exact same packed artifact without rebuild or repack:

| Consumer | Language | jsdom | Result |
|---|---|---:|---|
| Hub | TypeScript | 30.0.1 | PASS |
| LiaisonScape | TypeScript | 26.1.0 | PASS |
| NarrativeLine | JavaScript / ESM | 30.0.1 | PASS |

Artifact SHA-256:
`E456014CBAAA6427580699DB29BD9F6F9A5B03E6523E3FA48C2BB076AB4EA096`.
The proven peer expression is `26.1.0 || 30.0.1`; jsdom 27, 28, and 29 are
untested and are not claimed as supported. No duplicate runtime jsdom was
required. React, Vite, browser capabilities, fixtures, providers, and
semantic assertions remained application-owned.

H15 completed the permanent distribution design. **PUBLIC NPM** is selected,
with **PUBLIC GIT TAG** as the fallback, because public npm best preserves
`fresh clone → npm install → npm test` without sibling repositories, local
tarballs, manual downloads, or ordinary contributor registry tokens.
Publication has not occurred. Source ownership is separate: a new narrow
package repository, conceptually `e2r-dom-test-environment`, is preferred.
The existing `e2r-test-utils` remains an experimental prototype and is not yet
a formal repository.

## Research conclusion

**Research conclusion reached / implementation handoff ready**

Sharing is justified across three applications and both TypeScript and
JavaScript/ESM consumers. The reusable package remains a Core-only DOM,
global, and cleanup lifecycle abstraction, not a general React/Vite or
application test framework. Package viability is demonstrated, while formal
repository creation, license confirmation, Node support policy, README/API
contract, final metadata, npm scope/access readiness, publication
authorization, and consumer migration remain implementation/release work.

The next bounded phase is **H16 — Package Repository Formalization /
Pre-Publication Readiness**. H16 may create a local Git repository and prepare
metadata, but must not create a remote, push, or publish without separate
authorization.

## Knowledge candidate

**NO new Knowledge Candidate.** The accepted workspace decision already records
the reusable principle that shared UI integration infrastructure owns
environment lifecycle and cleanup, while application-specific state, browser
capabilities, selectors, fixtures, and semantic assertions remain
application-owned. The public npm choice is project-specific distribution
design rather than a new reusable workspace rule.
