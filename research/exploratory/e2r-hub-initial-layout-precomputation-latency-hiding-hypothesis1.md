# E2R Hub-Managed Initial Layout Precomputation / Latency-Hiding Hypothesis

Checkpoint: `E2R-HUB-INITIAL-LAYOUT-LATENCY-HIDING-HYPOTHESIS1`

Date: 2026-09-11

Status: **DEFERRED / FUTURE UX LATENCY-HIDING HYPOTHESIS**

Classification: **Research hypothesis / non-normative UX direction**

This document records a future UX hypothesis. It is not a runtime design,
implementation plan, Handoff contract, cache specification, browser capability
requirement, Product decision, or authorization to modify E2R Hub,
LiaisonScape, NarrativeLine, or the E2R data model.

## Idea and motivation

Initial Layout can be a visible part of Dataset-open latency. A controlled E2R
surface such as the Hub, or a future Sample Gallery / Dataset Gallery, may know
that a user is likely to open a particular Dataset before the click occurs.
That surface could potentially begin Dataset acquisition and Initial Layout
precomputation during otherwise idle time, so that the visible wait after the
click is shorter.

The hypothesis is:

> On an E2R-managed discovery surface, bounded prefetch and precomputation may
> hide part of the Initial Layout latency without changing the Initial Layout
> algorithm or making derived coordinates stored Dataset data.

This is primarily a user-experience latency hypothesis. It is not evidence that
the current Initial Layout runtime is acceptable and it does not replace the
current algorithm-runtime research.

## Runtime reduction versus latency hiding

These are separate research directions:

| Direction | Meaning | Scope |
| --- | --- | --- |
| Algorithm runtime reduction | Make the computation itself faster | All supported entry points, subject to their own runtime boundaries |
| Precomputation / latency hiding | Use time before activation to reduce visible wait | Only surfaces that control the Dataset discovery and can safely start the work |

Precomputation can improve perceived latency on an eligible Hub path while
leaving direct file open, direct URL open, and externally initiated Handoff
latency unchanged. A successful latency-hiding experiment therefore cannot be
reported as a general Initial Layout runtime improvement.

## Applicable surfaces

The primary candidate scope is a first-party, E2R-managed surface that controls
the discovery UI and knows the source Dataset link, such as:

- the E2R Hub;
- a future E2R Sample Gallery; or
- a future E2R Dataset Gallery with an explicitly controlled catalog.

The surface would need an explicit, supported path to the Dataset and a clear
handoff into the receiving application's normal Dataset-open and Initial Layout
authority. This hypothesis does not assume that the current Hub has a sample
registry, Dataset identity service, hosting service, or generated Handoff-link
implementation; the accepted Hub IA leaves those as separate future questions.

## Applicability limits and browser/security boundary

This direction does not mean that LiaisonScape should inspect arbitrary
external Web pages, discover Dataset links, or start work on resources that the
user did not make available through a controlled surface.

Potential limits include:

- same-origin policy and CORS response permissions;
- whether the Dataset URL is fetchable from the Hub's origin;
- browser cache and credential rules;
- service-worker or browser scheduling behavior, if considered later;
- memory and bandwidth pressure from abandoned prefetches;
- user privacy and unintended access to a Dataset before activation;
- cancellation when the user changes locale, selection, or intent; and
- compatibility of the eventual handoff with the receiving application's
  current acquisition, parse, validation, and replacement-safety path.

Direct local file open, an arbitrary direct URL entered outside the controlled
surface, and externally initiated Handoff may not have a safe or timely
precomputation opportunity. These are explicit non-applicable cases, not
failures of the hypothesis.

## Possible future intent signals

If this hypothesis is later investigated, candidate signals could be evaluated
incrementally:

- Dataset link entering the visible viewport;
- pointer hover over a Dataset link;
- keyboard focus on a Dataset link; and
- an explicit user action that indicates likely activation.

These are research candidates only. No trigger ordering, debounce period,
priority policy, cancellation rule, or prefetch budget is selected here.
Intent signals must not be treated as permission to fetch arbitrary resources
or to mutate a Dataset.

## Possible execution and transfer questions

Future investigation may compare a Web Worker or another browser-supported
background mechanism with main-thread work, while measuring UI responsiveness,
memory, cancellation, and the cost of duplicate computation. The following
choices remain open and are not specified by this note:

- Worker ownership and message protocol;
- prefetch versus precompute sequencing;
- prerender or speculation features;
- cache transport between the Hub and the receiving application;
- lifetime, eviction, and cancellation;
- locale and presentation configuration binding; and
- failure and fallback behavior when precomputation is incomplete or stale.

The receiving application must still use its normal Dataset parse, validation,
replacement, placement-authority, routing, label, viewport, and interaction
pipeline. A diagnostic-only rendering surface would not establish Product
latency-hiding acceptance.

## Derived versus stored coordinate responsibility

Any future precomputed coordinates should be treated as a Derived Initial
Layout result transferred temporarily to the receiving application. They must
not be written into the canonical Dataset's stored Coordinates merely because
the Hub computed them before the click.

The receiving application's existing stored, mixed, coordinate-less, dirty-
state, Save Coordinates, and persistence semantics remain authoritative. A
user's explicit save is a separate ownership transition and must not be
implicitly performed by prefetch or precomputation.

A future temporary cache identity might include Dataset identity or content
hash, Initial Layout algorithm and version, locale, and relevant presentation
or configuration version. Those fields are listed as design questions only;
this checkpoint does not define identity, hashing, cache records, provenance,
or a new Dataset Extension.

## Research questions for a future checkpoint

At minimum, a later investigation would need to establish:

1. Which controlled surface owns the source link and has authority to begin
   acquisition?
2. Whether the fetch is permitted by origin, CORS, credentials, and privacy
   constraints?
3. How much visible latency is actually hidden after accounting for abandoned
   work and duplicate opens?
4. Whether background work affects Hub responsiveness or receiving-application
   startup?
5. How Dataset identity, locale, algorithm version, and presentation inputs
   prevent stale Derived results from being reused?
6. How cancellation, failure, fallback, and direct-open paths behave?
7. How the temporary Derived result crosses into the normal Product open path
   without changing stored-coordinate authority?
8. Whether the UX benefit justifies the complexity relative to further exact
   algorithm-runtime reduction?

## Current disposition

```text
idea classification                 = RESEARCH HYPOTHESIS
applicable scope                     = CONTROLLED E2R-MANAGED SURFACES
general external-page discovery     = OUT OF SCOPE
algorithm runtime replacement       = NO
current implementation               = NOT STARTED
current disposition                  = DEFER / FUTURE UX LATENCY-HIDING HYPOTHESIS
Initial Layout runtime research     = PRIORITY
Initial Layout runtime blocker      = UNCHANGED
Product default / adoption           = UNCHANGED / HOLD
```

Current exact runtime optimization research remains the priority. This idea is
parked until the applicable controlled surface, acquisition boundary, and
temporary Derived-result handoff can be investigated without weakening the
existing Dataset and application ownership contracts.

## Non-goals and preserved boundaries

This checkpoint does not:

- change Hub, LiaisonScape, or NarrativeLine runtime;
- implement prefetch, precompute, a Worker, prerendering, speculation, or a
  cache transport;
- change Initial Layout algorithms, providers, or Product defaults;
- adopt or publish a Product initial-placement policy;
- change canonical Datasets, samples, Coordinates, or fixture ownership;
- change Dataset Handoff syntax or semantics;
- create a Hub sample registry, Dataset identity service, or hosting service;
- move routing, labels, viewport, or presentation authority into Initial
  Layout;
- treat precomputed Derived coordinates as stored Dataset Coordinates; or
- remove or resolve the current Initial Layout runtime Release blocker.

## E2R Research / knowledge disposition

This is a project-local E2R-SPEC Research Note. It is not an accepted
workspace-wide `ai-knowledge` rule or decision. No `ai-knowledge` entry is
added or promoted because the hypothesis has not been independently validated,
and its browser, surface, and cache boundaries are intentionally unresolved.
