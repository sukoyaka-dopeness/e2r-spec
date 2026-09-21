# History 2 Stable Profile Cross-Repository Publication Readiness Audit

Date: 2026-09-22

Status: **PUBLIC TRANSACTION NOT READY - UNPUBLISHED REVISIONS / MUTABLE CROSS-REPOSITORY CHECKOUT**

This is a publication-readiness and transaction-preparation result. It does
not publish either repository, release a package, update applications, or
migrate public samples.

## Accepted local contract

The accepted local implementation is:

- e2r-spec `ca05c524fb889ccc178a816594a90bdbba39468c` —
  `feat: register History 2 position-circa profile`;
- e2r-validator `9853420f7b1535c479e7efc0455e5fb26471fc99` —
  `feat: classify History 2 stable profiles`.

The contract remains `history@2.0.0` Candidate with the separately computed
Stable profile `history@2.0.0 / position-circa`. Dataset `uses` / `features`
semantics and the accepted H1 to H2 preservation contract are unchanged.

## Local and public revision evidence

| Repository | Local result | Public remote result |
| --- | --- | --- |
| e2r-spec | `ca05c52` is local `main`; `origin/main` is `33be032fe109515b409a7e6c176f2bd632149e5c`; local `main` is 307 commits ahead | exact `ca05c52` is not advertised; public `origin/main` does not contain `spec/extension-profile-maturity-registry.json` or the implementation result |
| e2r-validator | `9853420` is local `main`; `origin/main` is `00bcda7107fd697bffbe4ee7bf464e9f11f8c39e`; local `main` is 1 commit ahead | exact `9853420` is not advertised; public `origin/main` does not contain `src/profile-maturity.js` or `test/history-profile.test.js` |

The e2r-spec commit is therefore not a one-commit public transaction: moving
public `main` to `ca05c52` would publish the entire 307-commit range after the
current public tip. That range requires explicit Human release-set approval;
this audit does not infer it from the final local commit.

The public npm package currently reports `@sukoyaka-dopeness/e2r-validator`
`0.5.0` as `latest`. The local Validator commit leaves `package.json` at
`0.5.0`, so it cannot be published as a new package release without a new
SemVer release decision, matching changelog entry, and release commit/tag.

## Actual dependency boundary

The normative authority is the e2r-spec registry:

`spec/extension-profile-maturity-registry.json`

The Validator runtime does not import e2r-spec as an npm or runtime package.
Its classifier contains the executable profile contract, while tests compare
the classifier against a sibling checkout of the e2r-spec registry and fixture
trees. The CI and release workflows currently checkout the e2r-spec default
branch without a `ref`, so this is a mutable public-`main` dependency rather
than an immutable revision dependency.

The current application consumption boundary is:

- NarrativeLine consumes the published Validator `^0.5.0` and its lockfile
  resolves `0.5.0`;
- LiaisonScape consumes published Validator `^0.4.0` and its lockfile resolves
  `0.4.0`;
- Hub has no Validator package dependency;
- no inspected application currently consumes `profileSupport`.

Thus the new classifier is not yet available to public application installs.
The public sample JSON does not require an application dependency update merely
to be edited locally, but any public claim or CI gate that requires the Stable
profile classification requires the published Validator release and its
application/CI consumption boundary to be decided first.

## Reproducibility result

The local source worktrees passed their relevant full validation before this
audit:

- e2r-spec full validation, including the registry gate: PASS;
- e2r-validator lint, tests, and sibling-fixture validation: PASS;
- staged diff check: PASS.

The public fresh-checkout path is not reproducible yet. A fresh CI checkout of
the current public e2r-spec `main` lacks the registry file, while a fresh public
checkout of the current public Validator `main` lacks the classifier and its
profile tests. The Validator workflow also does not pin a public e2r-spec SHA,
so even after publication the exact cross-repository fixture/registry boundary
would remain mutable unless separately accepted as policy.

## Recommended transaction order

The bounded order for Human approval is:

1. Approve the exact e2r-spec public release set, explicitly including the
   307 commits from public `origin/main` through `ca05c52`, or select a smaller
   reviewed public range that still contains the normative registry and its
   required documentation.
2. Push that approved e2r-spec range and verify the exact final SHA is publicly
   reachable.
3. Decide whether Validator CI/release must pin that now-public e2r-spec SHA.
   If immutable reproducibility is required, create a separate bounded
   workflow-pin change and verify it before the package release.
4. Prepare a new Validator release commit with an unused SemVer version,
   changelog entry, and package-lock update; validate, pack, and clean-install
   it against the public e2r-spec revision.
5. Publish/tag the approved Validator release, then separately approve any
   NarrativeLine/LiaisonScape dependency updates. Their current ranges do not
   constitute proof that they consume the new classifier.
6. Start public H2 sample migration only after the exact sample contract,
   Validator release, and public CI boundary are approved. No sample migration
   was started here.

## Exact next Human decisions

Human approval is required for:

- the e2r-spec 307-commit public release set versus a narrower reviewed range;
- immutable e2r-spec SHA pinning in Validator CI/release, or an explicit
  acceptance of mutable public-main consumption;
- the Validator package SemVer and release/tag/publication transaction;
- whether and when applications update their Validator dependencies;
- the public H2 sample migration start boundary.

No runtime, schema, Validator implementation, application, sample, package,
remote, tag, deployment, or publication was changed by this audit.

## Knowledge applied

Applied accepted `ai-knowledge/decisions/research-result-executable-provenance.md`
to keep normative e2r-spec authority, executable Validator evidence, and
application/package consumption evidence as separate layers. No Knowledge
entry was modified.

Unrelated dirty and untracked work was preserved, including e2r-spec research
changes and `work/`, NarrativeLine's existing `AGENTS.md` change, and
LiaisonScape's existing temporary/research files.
