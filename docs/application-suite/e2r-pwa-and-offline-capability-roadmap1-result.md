# E2R-PWA-AND-OFFLINE-CAPABILITY-ROADMAP1

- Date: 2026-09-17
- Classification: **ROADMAP DIRECTION RECORDED / NO INITIAL PUBLIC RELEASE BLOCKER**

## Product direction

NarrativeLine and LiaisonScape are the first PWA candidates. Each remains an
independent application with its existing responsibility: NarrativeLine is the
timeline editor and LiaisonScape is the relationship editor. A single merged
E2R PWA is not selected. Hub PWA conversion is outside this checkpoint.

PWA installability and offline completeness are separate concerns. A future
PWA implementation should make browser-native installation optional, preserve
normal web use when installation is unavailable, and avoid unsolicited install
promotion. Application shell, local Dataset editing, local JSON import/export,
and bundled samples are candidate local capabilities; remote samples,
Handoff acquisition, external references, dictionary/semantic services,
Wikidata, collaboration, and synchronization may remain network-dependent.

The workspace does not make the suite-wide promise that all E2R applications
are fully offline applications. The roadmap principle is:

> Offline capability is application- and capability-specific.

Network-dependent applications must fail gracefully: preserve local work,
make unavailable actions explicit, and distinguish stale/cache data from live
data. Concrete cache, persistence, service-worker, update, quota, and offline
Handoff semantics require a later bounded design checkpoint.

## Current evidence

- NarrativeLine and LiaisonScape have GitHub Pages workflows and expected base
  paths, but no current manifest or Service Worker artifact was found in the
  inspected source trees.
- Their source-level implementation phases remain closed; absence of PWA
  artifacts is not a newly discovered runtime defect.
- Existing local Dataset editing/import/export and bundled sample behavior are
  not evidence of complete offline support.
- Hub is a public entry point, not selected for PWA conversion here.

## Initial Public Release boundary

PWA installability and full offline capability are **not** Initial Public
Release blockers. The present web applications can be released as ordinary
web applications if their separately required licensing, exact revision,
deployment, and public acceptance gates are satisfied. PWA/offline work is a
future bounded enhancement candidate, potentially pre- or post-release, but
must not be silently added to the current release contract.

## Future bounded checkpoints

1. Cross-App PWA readiness audit: manifest, icons, installability, standalone
   display, base path, update behavior, browser/platform differences, and
   install-action accessibility.
2. Application-specific offline capability audit: local-safe,
   network-required, cacheable-optional, and failure behavior.
3. Bounded architecture/design decision: Service Worker, cache strategy,
   persistent storage, update migration, quota, external reference, and
   offline Handoff semantics.

These checkpoints may inspect the applications and current deployment
configuration, but no runtime implementation is authorized by this roadmap
record.

## Deferred network-dependent scope

Dictionary, thesaurus, semantic lookup, Wikidata, remote citation/reference
retrieval, collaboration, synchronization, and hosted AI remain future
network-dependent capabilities. Their offline behavior must be specified per
capability rather than inferred from PWA status.

## Safety and validation

No application source, manifest, Service Worker, icons, package metadata,
version, Dataset, schema, sample, deployment workflow, public URL, or LICENSE
was changed. Existing dirty work was preserved. No Knowledge entry was added:
the roadmap principle is explicit here, while a reusable process is not yet
independently evidenced.

e2r-spec `npm.cmd run validate`: **PASS**.
e2r-spec `git diff --check`: **PASS**; existing line-ending warning only.
No commit, push, tag, deploy, publication, or public release was performed.

`PWA/OFFLINE ROADMAP RECORDED - NOT AN INITIAL PUBLIC RELEASE BLOCKER`
