# E2R Hub Public Entry Point Milestone 2 Acceptance

Date: 2026-08-22
Status: ACCEPTED

## Scope

This document records the bounded application implementation acceptance for
E2R Hub / Portal Public Entry Point Milestone 2: Static E2R Landing Page
Implementation.

It is non-normative application evidence. It does not change the E2R Core,
an Extension, Dataset Handoff v0 semantics, Hub runtime scope, or any sibling
application runtime.

## Relationship to Milestone 1

Milestone 1 established the Hub as a public discovery and distribution
surface for E2R applications, samples, and documentation. It also established
that:

- NarrativeLine is a Timeline editor;
- LiaisonScape is a relationship explorer/editor;
- Validator is a Dataset validation tool;
- E2R Specification is the specification and documentation entry point;
- Home remains the primary Dataset acquisition and replacement entry point
  inside applications; and
- Hub direct Dataset Handoff remains future work.

Milestone 2 aligns the existing static landing page with that information
architecture without rebuilding the Hub or introducing a backend.

## Implementation checkpoints

- `a45e806385064a17de5576214649bf186f755160` — align E2R Hub public landing
  page;
- `56a4b2d` — refine landing copy and add the focused Documentation alignment;
  and
- `7129246` — clarify the final NarrativeLine Japanese copy.

The accepted implementation HEAD at the time of this record is `7129246`.
The `e2r-hub` worktree was clean during the acceptance preflight.

## Accepted implementation

The bounded implementation retains the existing React/Vite landing-page
architecture and provides:

- the existing E2R introduction and application discovery hierarchy;
- distinct positioning for NarrativeLine, LiaisonScape, Validator, and the
  E2R Specification;
- clarified sample-section purpose and source-link meaning;
- a Documentation section;
- NarrativeLine User Guide EN / JA direct links;
- LiaisonScape User Guide EN / JA direct links;
- E2R documentation and specification links;
- EN / JA locale-dependent heading and explanatory copy;
- the existing responsive layout with a responsive Documentation grid; and
- the existing credits behavior.

The final NarrativeLine Japanese card description is:

```text
できごとを時間順に見たり、編集したりできます。
```

The top-page Handoff implementation-status paragraph was removed. This is a
presentation correction only. The underlying facts remain unchanged:

- NarrativeLine Dataset Handoff v0 is COMPLETE;
- LiaisonScape Dataset Handoff v0 is COMPLETE / manually accepted; and
- Hub direct Handoff and Handoff-link generation remain future work.

## Manual acceptance evidence

The following focused browser acceptance evidence was reported for the final
copy checkpoint:

- Japanese NarrativeLine copy displayed correctly and read naturally;
- Desktop NarrativeLine card wrapping and card height remained acceptable;
- Narrow/mobile layout had no overflow;
- the broader Milestone 2 application hierarchy, sample section,
  Documentation section, EN / JA behavior, credits, responsive base layout,
  and User Guide link placement remained acceptable;
- English NarrativeLine copy remained unchanged; and
- EN -> JA -> EN locale round trip preserved the locale-dependent copy and
  showed both EN and JA User Guide links.

This record preserves the distinction between user-reported browser evidence
and automated repository verification. It does not claim that Codex itself
performed an interactive browser session.

## Automated verification

The Hub implementation checkpoint was verified with:

- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS;
- `git diff --cached --check`: PASS; and
- `git show --check`: PASS.

The acceptance record is additionally validated by the normal e2r-spec gate:

- `npm.cmd run validate`: PASS; and
- acceptance-document `git diff --cached --check`: PASS.

## Explicit unchanged boundaries

Milestone 2 does not implement or authorize:

- Hub direct Dataset Handoff;
- Handoff-link generation or `#datasetUrl=` generation UI;
- Dataset hosting or upload;
- a sample registry or Dataset identity service;
- browser-side Validator UI;
- account or login;
- analytics or tracking;
- backend or API services;
- multi-Dataset support, merge, lineage, or provenance;
- application runtime changes;
- E2R Core or Extension changes; or
- NarrativeLine, LiaisonScape, or Validator runtime changes.

The residual `research/exploratory/anonymous-dataset-sharing.md` file in
`e2r-spec` remains untouched and is not part of this acceptance checkpoint.

## Knowledge Candidate Check

Knowledge Candidate: NONE.

This is an application implementation acceptance record based on the existing
Hub IA, application-boundary guidance, and accepted Handoff evidence. It does
not establish a new reusable workspace rule.

## Final acceptance

Based on the reported focused browser evidence, the accepted implementation
checkpoints, and the automated verification above:

**E2R Hub / Portal Public Entry Point Milestone 2 — Static E2R Landing Page
Implementation is formally ACCEPTED.**
