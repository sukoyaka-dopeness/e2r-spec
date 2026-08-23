# Reusable Vite UI Integration Test Harness

Status: exploratory research seed; no shared repository or package is
approved.

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
consumer. That is insufficient evidence for a cross-repository abstraction.
LiaisonScape should be the next validation target before any extraction
decision.

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

## Possible bounded experiments

1. Reproduce a minimal production-component smoke test in LiaisonScape using
   its existing toolchain.
2. Compare NarrativeLine and LiaisonScape helper boundaries and lifecycle
   cleanup requirements.
3. Evaluate a local prototype only if both applications demonstrate a stable
   common contract.

No runtime, package, or test-infrastructure implementation is authorized by
this research seed.
