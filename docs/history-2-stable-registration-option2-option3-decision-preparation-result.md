# History 2 Stable Registration: Option 2 / Option 3 Decision Preparation

Date: 2026-09-21

Status: **DESIGN COMPARISON COMPLETE / HUMAN DECISION REQUIRED**

Scope: Comparison of bounded Stable registration strategies for the accepted
History 2 `position` plus optional position-level `circa` surface. This
document does not register a Stable specification and does not change the
History schema, Validator, applications, or sample Datasets.

Authority: The Core and Extension specifications are normative. Current
schemas, Validator source/tests, accepted NarrativeLine evidence, the roadmap,
Git history, and the scoped reusable Knowledge below provide implementation and
process evidence only.

Related records:

- [`history-extension-2.0-draft.md`](../extensions/history-extension-2.0-draft.md)
- [`extension-naming.md`](../spec/extension-naming.md)
- [`specification-extension.md`](../extensions/specification-extension.md)
- [`history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md`](history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md)
- [`roadmap.md`](roadmap.md)
- Validator [specification interoperability profile](https://github.com/sukoyaka-dopeness/e2r-validator/blob/main/docs/specification-interoperability.md)

## Decision summary

The accepted bounded surface is technically implemented and accepted, but it
cannot be called Stable by changing one existing status field:

- `history@1.0.0` is the registered Stable History specification;
- `history@2.0.0` is one Candidate version with `position`, `bounded-point`,
  `temporal-extent`, `multiple-assertions`, and `approximation` Features;
- the current registry registers Extension identifiers, not independent
  maturity states for Features; and
- the current Validator support table treats all History `2.0.0` Features as
  one exact Candidate support surface.

Therefore, promoting only one part of `history@2.0.0` requires either a new
Feature/capability maturity mechanism (Option 2) or a new Stable identity or
version contract (Option 3). Option 1, making all of `history@2.0.0` Stable,
remains inconsistent with the accepted deferred boundary and is excluded.

## Stable, version, and Feature responsibilities

The current architecture separates three concepts:

| Concept | Current responsibility |
| --- | --- |
| Extension identifier | Identity of the continuing responsibility, such as `history`; it is also the payload key. |
| Exact specification version | Exact interpretation of that Extension version, declared through the Specification Extension. |
| Feature | An independently supportable unit within an exact specification version; declarations identify Features actually used. |

The current Feature declaration contract is precise about use and dependency
checking, but it is not a global maturity registry. `lifecycle` records in the
Specification Extension refer to exact Extension/version definitions and are
advisory unless another governance document gives them authority. They do not
currently register a Feature as Stable.

History 2 is intentionally the same `history` responsibility as History 1,
with a new assertion representation. The draft also explicitly keeps
bounded-point, temporal-extent, multiple assertions, and broader temporal
semantics in the same candidate version. The accepted NarrativeLine behavior
is application evidence; it does not change this specification boundary.

## Option 2 — Feature or capability maturity

### Meaning

Introduce a normative registry and declaration interpretation in which an
exact specification version can expose independently mature Features or
capability profiles. The Stable profile would contain only:

- one `position` assertion;
- exact Civil Time;
- optional position-level `approximation: "circa"`; and
- the existing exact declaration and atomic H1-to-H2 preservation contract.

The other History 2 Features would remain Candidate or Deferred.

This would be a new governance unit. It must not be implemented merely by
adding `stable` text to the current Dataset `lifecycle` array.

### Advantages

- Preserves the existing `history` identifier and `2.0.0` payload identity.
- Matches the draft's existing concept that Features are independently
  supportable units.
- Allows bounded-point and temporal-extent to mature later without promoting
  them prematurely.
- Keeps current H2 Candidate Datasets structurally and semantically intact.
- Provides a principled future path for other Extensions that need partial
  maturity.

### Costs and compatibility impact

- Adds a new global maturity/registration concept that the current registry
  does not define.
- Requires a normative answer to whether a Feature status is authoritative,
  how the base no-Feature `position` surface is named, and how profiles compose.
- Requires updates to registry/reference data, declaration interpretation,
  schema or semantic validation boundaries, Validator support reporting, and
  package documentation. The exact file set is intentionally not selected by
  this packet.
- Must define how an unknown, unsupported, or future Feature is preserved and
  whether a Dataset is partially supported or read-only when a stable Feature
  is mixed with a non-Stable Feature.
- May require package/version policy so consumers do not mistake support for
  all of `history@2.0.0` for support of only the Stable profile.

### Compatibility boundary

Existing H2 Candidate Datasets remain valid Candidate data. Existing exact
declarations must not silently become a stronger public-support claim merely
because the registry gains Feature maturity. Consumers must continue to
preserve unsupported Features and refuse unsafe edits. The accepted atomic
H1-to-H2 upgrade remains unchanged; it would produce a Candidate H2 Dataset
until the new maturity/profile contract explicitly says otherwise.

### Irreversible governance choice

Once Feature maturity is a public registry concept, future consumers and
publishers will rely on its composition and downgrade rules. Changing the
meaning of a Stable Feature later would create compatibility and governance
debt. This is the principal Option 2 decision, not a routine documentation
update.

## Option 3 — New Stable identity or version contract

### Meaning

Define a separately registered Stable contract for the bounded surface rather
than assigning partial maturity to `history@2.0.0`. The exact choice could be
a new Extension identifier or, only if the responsibility/version model
justifies it, a new exact version contract. This packet does not choose the
identifier or version.

### Advantages

- Gives Stable consumers an unambiguous identity whose supported surface is
  bounded by construction.
- Leaves `history@2.0.0` completely Candidate, including its deferred Shapes.
- Works with the current identifier registry more directly than inventing
  Feature-level maturity inside the existing model.
- Makes package and validator support claims easier to state narrowly.

### Costs and compatibility impact

- A new identifier normally means a new payload key and a second temporal
  responsibility, even if the intended semantics overlap with `history`.
- A new version-only contract would need a clear reason to remain the same
  Extension responsibility while skipping or superseding the Candidate
  boundary; version numbers alone do not create a bounded Feature subset.
- Existing accepted H2 Datasets would not automatically become the new Stable
  shape. A new migration, declaration, preservation, and downgrade policy
  would be required before public sample migration.
- Existing applications, Validator, schemas, examples, and package consumers
  would need explicit compatibility behavior for both Candidate H2 and the new
  Stable contract.
- Duplicate or parallel temporal representations could increase consumer
  complexity and long-term migration debt.

### Compatibility boundary

Keeping `history@2.0.0` Candidate would protect existing Candidate semantics,
but the new Stable contract must define how it relates to H1 and H2. The
current accepted H1-to-H2 upgrade cannot be silently reinterpreted as a
conversion to an unchosen new Stable identity. Public sample migration would
need a separate explicit checkpoint after that contract is accepted.

### Irreversible governance choice

Choosing a new identifier is difficult to reverse because identifiers are
identity values and payload keys. Choosing a new version contract is also
costly if it creates a parallel representation without a clear responsibility
boundary. Option 3 should therefore be used only if the bounded surface is
intended to be a distinct long-lived specification responsibility, not merely
to work around the absence of Feature maturity.

## Option 1 remains excluded

Making all of `history@2.0.0` Stable would make the current Candidate's
bounded-point, temporal-extent, multiple-assertion, and other deferred meaning
available under the same Stable public-support claim. No current evidence
changes that problem. It would contradict the accepted H2 scope closure and is
not recommended.

## Smaller interim alternative

The smallest architecture-preserving option is to keep `history@2.0.0` as a
Candidate and publish an informative, explicitly non-Stable **bounded support
profile** for the already accepted `position + circa` behavior. This would:

- require no registry, schema, Validator, or identifier change;
- preserve the current Candidate boundary and deferred Features; and
- document the exact application/package support without calling it Stable.

It does not satisfy the Human goal of registering that surface as Stable, and
therefore is an interim release-profile alternative, not a Stable registration
solution.

## Public H2 sample policy impact

The six planned sample groups remain unchanged in this checkpoint:

- Berlin Wall EN/JA;
- Apollo 11 EN/JA;
- Lighthouse Restoration EN/JA;
- Ashen Crown EN/JA;
- Titanic EN/JA; and
- E2R Self-Description.

No sample JSON, application copy, Hub link, User Guide, or runtime is changed.
Sample migration must remain a later checkpoint after the Stable identity or
Feature-maturity contract is accepted and its cross-repository validator and
application evidence is complete. Executable provenance and application
acceptance evidence support the decision but do not themselves register a
specification as Stable.

## Human decision packet

Human approval is requested for exactly one of these design directions:

### Decision A — authorize Option 2 design

Authorize a follow-up design checkpoint for a normative Feature/capability
maturity and registration mechanism. The design must define:

1. the Stable unit for base one-position History and the `approximation`
   Feature;
2. status authority and registry representation;
3. declaration and composition rules for stable, candidate, and unsupported
   Features;
4. Validator/package support and read-only/preservation behavior; and
5. compatibility and future promotion rules for deferred H2 Features.

This authorization does not approve implementation, sample migration, package
publication, or Stable promotion.

### Decision B — authorize Option 3 design

Authorize a follow-up design checkpoint for a new Stable identifier or exact
version contract. The design must first establish:

1. why the bounded surface is a distinct long-lived responsibility;
2. the exact identifier/version and payload/declaration shape;
3. H1/H2/new-Stable migration and preservation rules;
4. Validator/schema/package compatibility and release boundaries; and
5. a plan that avoids silently reclassifying current H2 Candidate Datasets.

This authorization does not approve choosing a final identifier, changing
schemas, migrating samples, or publishing packages.

### Decision C — defer Stable registration

Keep `history@2.0.0` as Candidate and use the smaller non-Stable bounded
support profile if a public support statement is needed. This preserves the
current architecture and defers the irreversible registry decision.

## Current recommendation

If Human requires eventual independent maturity for multiple H2 capabilities,
Option 2 is the lower semantic-disruption direction because it preserves the
existing `history` identity and aligns with the existing Feature concept.
However, it is a new governance mechanism and must be designed before any
implementation.

Option 3 is preferable only if Human concludes that the bounded surface is a
distinct specification responsibility rather than a mature subset of History
2. It should not be selected solely to avoid designing Feature maturity.

Until Decision A, B, or C is selected, no Stable registration or public sample
migration should proceed.

## Validation and change boundary

The current validation evidence remains green:

- `e2r-spec`: `npm.cmd run validate`;
- `e2r-validator`: `npm.cmd run validate` (117 tests plus 3 fixture tests).

This checkpoint changes documentation only. It does not change runtime,
schema, Validator source/tests, registry data, sample JSON, package metadata,
Hub, User Guide, NarrativeLine, or LiaisonScape.

No push, deployment, tag, release, package publication, or sample migration is
authorized or performed.

## Applied Knowledge

The Accepted workspace-scoped Knowledge entry
[`research-result-executable-provenance.md`](../../ai-knowledge/decisions/research-result-executable-provenance.md)
was applied to keep executable/application acceptance evidence separate from
normative Stable registration. No Knowledge entry was created or modified.
