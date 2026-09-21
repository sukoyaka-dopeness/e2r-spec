# History 2 `position-circa` Stable Profile Implementation Result

Date: 2026-09-22

Status: **IMPLEMENTED / NORMATIVELY REGISTERED / VALIDATOR EVIDENCE GREEN**

Human adopted the Option 2 profile-scoped maturity model. This checkpoint
implements only the registry authority and read-only Validator classification.
It does not migrate public samples or change application runtime behavior.

## Adopted contract

The immutable profile identity is:

```text
history@2.0.0 / position-circa
```

`history@2.0.0` remains a Candidate specification version. The
`position-circa` profile is Stable only for the following bounded contract:

- exactly one `position` assertion per History payload;
- exact History 2 Civil Time position rules;
- optional position-level `approximation: "circa"`;
- current exact Specification Extension declaration semantics; and
- the accepted atomic H1 to H2 conversion, preservation, and refusal rules.

`bounded-point`, `temporal-extent`, `multiple-assertions`, broader History 2
authoring, Relative Time, H2 to H1 conversion, and generalized temporal
solving remain outside the Stable profile.

## Registry authority

The normative authority is
[`spec/extension-profile-maturity.md`](../spec/extension-profile-maturity.md)
and its machine-readable
[`spec/extension-profile-maturity-registry.json`](../spec/extension-profile-maturity-registry.json).
The registry entry is immutable by profile identity. A future contract change
requires a new profile identity or a separately approved revision contract.
No separate revision field was introduced in this checkpoint.

The existing Specification Extension `uses` / `features` declaration remains
an actual-use fact declaration. No Dataset Stable-profile claim field was
added. The Validator computes profile classification from the exact
declaration, declared Features, and actual History payload constraints.

## Validator behavior

Validator results now expose a separate `profileSupport` object. It keeps the
following facts distinct:

- `extensionMaturity: "candidate"` for `history@2.0.0`;
- `classification: "stable-profile-supported"` only when the complete
  `position-circa` contract matches; and
- `candidate-supported` or `unsupported-or-partial` for deferred, malformed,
  unknown, or unsupported cases.

History `1.0.0` remains `stable-extension-supported`. The Validator remains
read-only and preserves/refuses unknown data according to the existing History
2 contract.

## Compatibility and public samples

Existing History 1 data, accepted History 2 Candidate data, and the accepted
H1 to H2 upgrade semantics remain unchanged. Candidate Datasets are not
rewritten or silently reclassified as Stable. The six planned public sample
groups remain unchanged and are reserved for a later migration checkpoint:
Berlin Wall, Apollo 11, Lighthouse Restoration, Ashen Crown, Titanic, and E2R
Self-Description.

## Validation evidence

- e2r-spec registry schema and adopted profile gate: green;
- e2r-spec full validation: green;
- e2r-validator profile fixtures: exact position, optional circa, deferred
  Features, unknown Feature, and History 1 cases pass;
- e2r-validator full test, fixture, and lint gates: green; and
- `git diff --check`: green.

No NarrativeLine, LiaisonScape, Hub, sample JSON, Core, Extension payload
schema, or application runtime was changed. No push, publication, deployment,
tag, package release, or sample migration was performed.
