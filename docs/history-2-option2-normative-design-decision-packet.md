# History 2 Option 2 Normative Design: Stable Support Profile

Date: 2026-09-22

Status: **NORMATIVE DESIGN READY / HUMAN ADOPTION DECISION REQUIRED**

This is a design checkpoint only. It does not adopt a Feature-maturity
registry, promote History `2.0.0`, change the schema or Validator, migrate
public samples, or authorize package publication.

## Decision scope

The bounded surface under consideration is the accepted History 2 behavior:

- one `position` assertion;
- exact Civil Time;
- optional position-level `approximation: "circa"`;
- the exact Specification Extension declaration contract; and
- the accepted atomic History 1 to History 2 preservation and validation
  contract.

The following remain outside the proposed Stable profile:

- `bounded-point`;
- `temporal-extent`;
- `multiple-assertions`;
- broader History 2 authoring;
- Relative Time authoring or solving;
- History 2 to History 1 conversion; and
- generalized temporal solving.

## Current authority and design constraint

The current architecture separates:

| Unit | Current responsibility |
| --- | --- |
| Extension identifier | Continuing responsibility and payload key, such as `history`. |
| Exact Extension version | One immutable specification interpretation, such as `history@2.0.0`. |
| Feature | An independently supportable capability declared as actually used by a Dataset. |
| Stable maturity | Currently registered per Extension identifier and exact version, not per Feature. |

The Specification Extension's `uses` field records what a Dataset actually
uses. Its `features` field is not a support claim and its current `lifecycle`
metadata is not a normative Feature registry. The History 2 draft likewise
defines all four optional Features in one Candidate version. Those boundaries
must remain intact unless Human explicitly adopts a new contract.

## Proposed Option 2 model

Option 2 is viable only as a **profile-scoped maturity model**, not as a
free-standing Stable/Candidate label on a single Feature.

The proposed normative unit is an immutable **support profile** identified by
the tuple:

```text
(Extension identifier, exact Extension version, profile identifier)
```

For example, `history@2.0.0` with a proposed profile identifier such as
`position-circa` is notation for the bounded profile, not a final wire-format
decision. A profile is needed because the bounded Stable claim includes the
unflagged base `position` capability, the optional `approximation` Feature,
and semantic constraints such as one assertion. No single existing Feature
identifier can express that complete contract.

### Maturity authority

The normative authority should be a versioned E2R specification registry or
registry section maintained with the normative specification, with immutable
entries for exact profile contracts. It must be separate from:

- application acceptance documents and executable evidence;
- mutable Dataset `lifecycle` notes; and
- the Specification Extension's `uses` facts.

The registry entry would identify the exact Extension version, profile
identifier, maturity (`stable`, `candidate`, or `deferred`), allowed Features,
required base capabilities, semantic constraints, preservation/refusal rules,
and the specification references that define the contract.

This is a proposed authority boundary. No registry file or schema is created
by this checkpoint.

### Feature and profile relationship

Feature maturity is contextual to an exact version and profile. A Feature can
be independently supportable without being globally Stable. The profile is
the public maturity claim; its contract is the intersection of:

1. the exact Extension version;
2. the base capability set;
3. the permitted Feature set; and
4. semantic constraints that cannot be represented by `features` alone.

For the proposed profile:

| Profile element | Proposed Stable boundary |
| --- | --- |
| Exact version | `history@2.0.0` remains Candidate as a whole. |
| Base capability | Exactly one `position` assertion with exact Civil Time. |
| Optional Feature | `approximation`, only as position-level `circa`. |
| Constraints | No bounded-point, temporal-extent, or multiple assertions. |
| Upgrade contract | Accepted atomic H1 to H2 conversion and preservation rules. |
| Status | Stable for this profile only; not Stable for all H2.0.0. |

The base `position` capability is therefore an explicit profile member even
though it has no Feature flag in the current History 2 declaration model.

## Dataset and support classification

The profile registry must define composition without changing the existing
meaning of `uses`:

| Dataset condition | Support classification |
| --- | --- |
| Exact `history@2.0.0`; one position assertion; optional `approximation`; no deferred capability | `stable-profile-supported` for the proposed profile. |
| Known H2 data using bounded-point, temporal-extent, multiple assertions, or another deferred capability | `candidate-supported` or read-only partial support; never Stable-profile-supported. |
| Unknown Feature, unknown exact version, or an extension the consumer cannot interpret | `unsupported-or-partial`; preserve and refuse unsafe edits. |
| A Dataset containing both bounded Stable data and known Candidate data | The Dataset is not wholly Stable-profile-supported. A consumer may expose the stable subset only if it can preserve the remainder losslessly. |

The classification is based on the declared exact version, declared used
Features, and the payload constraints in the profile. A `stable` lifecycle
string or a Feature name alone cannot establish the claim.

Unknown and unsupported data retain the current History 2 boundary: readers
preserve it whenever practical, and writers modify only data they understand
or refuse an unsafe edit. A stable profile must never turn unsupported data
into silently discarded data.

## Declaration semantics

The recommended first design is to keep `uses` unchanged:

- `uses` continues to declare the exact Extension version and Features
  actually used;
- the profile registry supplies the normative support classification; and
- a Validator computes profile matching from the declaration plus payload
  constraints.

This avoids overloading a declaration of Dataset facts with a claim about a
consumer's support maturity. If an explicit Dataset profile claim is later
required, it must be a separate, exact profile reference and must not replace
or reinterpret `uses`. That would be a separate Human-approved declaration
semantics decision.

The Specification Extension's existing exact version, Feature completeness,
unknown-field preservation, and dependency rules remain unchanged in this
design. `history@2.0.0` is not renamed or silently reclassified.

## Validator and package claims

Future Validator output should report at least two distinct facts:

1. exact Extension-version support, where `history@2.0.0` remains Candidate;
2. bounded profile support, where the proposed profile may be Stable.

It must not emit a generic “History 2 Stable” result. A package or application
support claim should name the exact profile tuple it supports and state its
behavior for Candidate and unsupported data:

- stable-profile data may be edited within the accepted contract;
- known Candidate features are preserved and are read-only unless the
  consumer has an independently accepted Candidate path; and
- unknown data is preserved or the unsafe operation is refused.

This separates normative profile registration from executable acceptance
evidence. Tests and browser results can demonstrate conformance, but cannot
register a profile by themselves.

## Compatibility and future promotion

Existing History 1 Stable data remains valid. Existing History 2 Candidate
data remains valid and is not rewritten merely because a profile is
registered. The accepted H1 to H2 upgrade contract is unchanged; an upgraded
Dataset can match the Stable profile only when its resulting payload satisfies
the profile constraints.

Future maturity should be additive. A bounded-point or temporal-extent
profile may be registered later against the exact version only after its own
contract and evidence are accepted. The meaning of an existing Stable profile
must not be widened in place. If its contract must change, a new profile
identity or profile revision and an explicit compatibility/migration rule are
required.

This prevents a later Feature promotion from retroactively making a previously
Stable consumer claim cover data it was never designed to edit.

## Difficult-to-reverse governance choices

Human adoption of this model would make the following public contracts:

1. profile identity is a compatibility identity, not an informal label;
2. the registry is normative and immutable for published entries;
3. `history@2.0.0` can remain Candidate while a profile is Stable;
4. profile matching is constrained by payload semantics, not only Feature
   strings; and
5. stable profile consumers must preserve or refuse non-profile data.

Changing any of these later would affect validators, packages, applications,
and public Datasets. They should not be smuggled in as a documentation-only
status update.

## Option 2 viability and Option 3 boundary

Option 2 is architecturally viable if Human accepts profile-scoped maturity
and the new normative authority. It preserves the `history` responsibility,
the `2.0.0` payload identity, current `uses` facts, and existing Candidate
Datasets while giving the bounded surface a precise Stable claim.

Option 3 is not required by this design. It becomes preferable only if Human
decides that the bounded surface is a distinct long-lived payload
responsibility, or rejects a Stable profile inside a Candidate version. A new
identifier or version would then require its own payload/declaration,
migration, preservation, Validator, package, and sample policy. This packet
does not choose or implement that fallback.

## Human adoption decision packet

Human approval is requested for the following design decision, not for
implementation:

> Adopt Option 2 as a profile-scoped maturity design in which an immutable
> normative registry identifies Stable support profiles by exact Extension
> identifier, exact version, and profile identifier; keep `uses` as Dataset
> fact declarations; and classify the bounded `history@2.0.0` position/circa
> contract as Stable only when its complete profile constraints match.

Before implementation, Human must explicitly choose or reject these details:

1. whether the registry is accepted as a new normative authority;
2. the canonical profile identifier and whether it needs its own revision;
3. computed profile classification versus a separate Dataset profile claim;
4. the exact package/Validator wording for Candidate-version plus
   Stable-profile support; and
5. whether the proposed one-position/circa constraints are the final bounded
   Stable contract.

If any of these are rejected, retain `history@2.0.0` as Candidate and return to
Option 3 or the non-Stable bounded support-profile alternative. Do not change
the registry, schema, Validator, package metadata, or samples without a new
Human-approved implementation checkpoint.

## Public samples and current deferred scope

The six planned public sample groups remain unchanged: Berlin Wall, Apollo 11,
Lighthouse Restoration, Ashen Crown, Titanic, and E2R Self-Description, each
in EN/JA where applicable. No sample migration is authorized by this packet.

Bounded-point, temporal-extent, multiple assertions, Relative Time,
H2-to-H1 conversion, generalized solving, Stable promotion, and publication
remain deferred until the relevant contracts are separately accepted.

## Evidence and applied Knowledge

This design is grounded in:

- `spec/extension-naming.md` for identifier/version separation and Stable
  registration;
- `extensions/specification-extension.md` for exact `uses`, Feature facts,
  preservation, and lifecycle limitations;
- `extensions/history-extension-2.0-draft.md` and its schema for the current
  Candidate boundary;
- the accepted H1-to-H2 and H2-POSITION-CIRCA closure records;
- current e2r-validator interoperability/support behavior; and
- the prior Option 2/3 comparison in
  `history-2-stable-registration-option2-option3-decision-preparation-result.md`.

Applied Knowledge: [`research-result-executable-provenance.md`](../../ai-knowledge/decisions/research-result-executable-provenance.md),
Accepted, workspace scope. It was applied by keeping executable acceptance
evidence separate from the normative registry and profile authority. No
Knowledge entry was changed.

## Checkpoint boundary

This checkpoint changes design documentation and current-status reporting
only. It does not change runtime, schema, Validator source/tests, registry
implementation, package metadata, sample JSON, Hub, User Guide, or any other
repository. No push, deployment, tag, release, publication, or sample
migration was performed.
