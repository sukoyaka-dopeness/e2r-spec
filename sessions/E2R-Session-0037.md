# E2R Session 0037 - Dataset Handoff v0 Design and First Distribution

Date: 2026-08-18

## Scope

This session consolidated the E2R Dataset distribution and handoff work. It
covered Hub first publication, Dataset Handoff v0 design documentation, and
read-only safety audits of the sibling applications.

No E2R Core or Extension schema was changed.

## E2R Hub First Distribution

Repository:

```text
C:\Users\extra\E2R\e2r-hub
```

The Hub received its local Pages preparation and a bounded sample-section
polish:

- Vite base configured as `/e2r-hub/`;
- GitHub Pages workflow added at `.github/workflows/deploy-pages.yml`;
- workflow uses checkout, Node setup, `npm ci`, lint, build, Pages artifact
  upload, and Pages deployment;
- sample heading changed to `Sample Datasets` / `サンプルデータセット`;
- sample action buttons use a common `10.5rem` width, `max-width: 100%`, and
  centered text while retaining the accepted left-aligned button column;
- existing sample Dataset content and source links were preserved.

Local checkpoints:

```text
cc81b04 ci: prepare Hub GitHub Pages deployment
adfd8af style: refine Hub sample dataset section
```

The Hub repository was then created manually by the user as a public empty
repository, configured with GitHub Pages source `GitHub Actions`, and pushed:

```text
https://github.com/sukoyaka-dopeness/e2r-hub
```

First push:

```text
adfd8afb01b1649bedb2f80fd6fffab57b09882d
```

The Pages workflow run for `adfd8af` completed successfully:

```text
run: 32045286774
job: deploy
```

Public Hub:

```text
https://sukoyaka-dopeness.github.io/e2r-hub/
```

Public HTTP smoke confirmed the Hub HTML, CSS, and JavaScript assets. The
configured application, specification, Validator, and five canonical sample
source links returned successfully. Mobile smoke had already been user-
confirmed, including sample cards, horizontal overflow, footer overscroll, and
Credits behavior.

## Existing sibling publication state

The existing sibling repositories remain published without code changes in
this session:

```text
NarrativeLine: 1a71758
LiaisonScape: f38e4a2
```

Their Pages workflows had previously encountered GitHub-hosted Action download
429/503 failures and were later rerun successfully by the user. This session
did not perform additional reruns or workflow changes.

## Dataset Handoff v0 source audit

Read-only source audits confirmed that both applications currently have no
runtime owner for the fragment namespace:

```text
location.hash: unused
hashchange: unused
hash router: absent
```

LiaisonScape uses `pushState`, `replaceState`, and `popstate` for screen
navigation, but does not use the fragment for routing. The audit therefore
classified the proposed handoff namespace as compatible:

```text
#datasetUrl=<percent-encoded absolute HTTPS URL>
```

The documented v0 boundary is startup-only handoff. Live `hashchange` Dataset
switching, multi-Dataset input, merge, provenance, lineage, and content hashes
remain out of scope.

## Dataset Replacement Safety audit

Read-only audits found a shared implementation blocker before handoff code can
be added:

```text
NarrativeLine: NEEDS SHARED DATASET REPLACEMENT SAFETY
LiaisonScape: NEEDS SHARED DATASET REPLACEMENT SAFETY
```

NarrativeLine has a single `narrativeline.lastDataset` localStorage slot, but
no explicit dirty state, export baseline, recovery history, source tracking,
or replacement confirmation. Opening another Dataset can overwrite the slot.

LiaisonScape keeps the Dataset in in-memory React state without Dataset
persistence, dirty protection, export tracking, or replacement confirmation.
Open File, Open Sample, and New Dataset can replace the current Dataset
directly.

The shared safety principles recorded for future implementation are:

> Handoff must not silently discard unrecoverable unsaved work.

> Handoff startup precedence determines which Dataset is displayed; it does not
> authorize destruction of a previous recoverable session.

## Dataset Handoff v0 design checkpoint

The E2R specification repository now contains the single-source design
document:

```text
docs/dataset-handoff-v0-design.md
```

It is explicitly design/non-normative and records:

- fixed fragment syntax and parsing behavior;
- `datasetUrl` as acquisition location, not Dataset identity;
- HTTPS, credentials, CORS, and privacy boundaries;
- startup precedence and silent-fallback prohibition;
- reuse of the existing validation/open pipelines;
- fragment lifecycle and stale-reference handling;
- separation of screen navigation from Dataset replacement;
- Dataset Replacement Safety as the next blocking workstream;
- future contentHash / Provenance / lineage direction;
- explicit v0 exclusions.

Checkpoint:

```text
22623fc docs: define Dataset Handoff v0 design
```

The existing exploratory document remains separate:

```text
research/exploratory/dataset-distribution-and-merge.md
```

That document covers future Dataset composition, merge, equivalence,
provenance, and lineage. It was not rewritten or merged into the Handoff v0
design document.

## Validation and boundaries

For the specification documentation checkpoint:

- `npm run validate`: PASS;
- `git diff --check`: PASS;
- Core schema: unchanged;
- Extension schema: unchanged;
- application code: unchanged;
- Handoff implementation: not started;
- Dataset Replacement Safety implementation: not started;
- push: not performed for the specification commit.

Existing untracked research and session files were preserved. No unrelated
files were staged for the design checkpoint.

## Next workstream

```text
Dataset Handoff v0 design
    -> Dataset Replacement Safety design
    -> Dataset Replacement Safety implementation
    -> Dataset Handoff v0 implementation
    -> Hub direct sample handoff
```
