# Relative Time Draft/Schema Integration Design Preparation 1

- Date: 2026-09-26
- Status: **DESIGN COMPARISON FOR HUMAN DECISION; NO DRAFT/SCHEMA/IMPLEMENTATION CHANGE AUTHORIZED**
- E2R-SPEC baseline: `bc56d9602d8fe8c65013532c06e50994eda1bedd`
- Read-only Validator baseline inspected: `e2r-validator` `5d6d414fac002f8b8fb87e0f13a43664113dc39a` (clean worktree).

## Decision in brief

The atomic Recorded Relative Time semantics are already adopted. The open
integration question is how, if at all, to make that adopted contract
representable and structurally supportable by an exact Relative Time Draft
version without silently changing the interpretation of existing
`0.1.0` declarations.

The next Human decision is to select a versioning direction for a later
Draft/schema integration proposal, or to defer integration. No exact version,
payload shape, Feature identifier, compatibility promise, or migration policy
is selected here.

## Authority map

| Source | Authority/status used in this comparison |
|---|---|
| [Atomic Recorded semantics adoption](./relative-time-atomic-recorded-assertion-semantics-adoption1.md) | Adopted semantic authority for the atomic Recorded assertions and expressly stated limits. It does not amend the Draft or schema. |
| [Relative Time Draft 0.1.0](../../extensions/relative-time-extension-draft.md) | Non-Stable candidate contract with four payload families and exact version `0.1.0`. |
| [Draft schema](../../schemas/extensions/relative-time-draft.schema.json) | Structural schema for the current candidate payloads; not the adopted semantic authority. |
| [Specification Extension](../../extensions/specification-extension.md) | Dataset declarations use exact Extension versions and optional exact-version-local Features. An exact version identifies one immutable published specification definition; unsupported exact versions are not interpreted as a known version. |
| Validator implementation evidence | Read-only, exact-version/declaration-gated support for Relative Time `0.1.0`, including a bounded subset of structural diagnostics and Derived evidence. This is implementation evidence, not authority to extend semantics. |
| [Previous post-adoption decision preparation](./relative-time-post-adoption-next-human-decision-preparation1.md) | Confirms RT-BR-1 Choice 1 and the atomic semantics adoption are settled; the present checkpoint follows the authorized integration-design preparation branch. |

Stable History 1.0.0, the bounded H2-POSITION-CIRCA closure, and the adopted
Stable History `position-circa` profile retain their existing scopes. None is
a Relative Time representation or a prerequisite for recording a direct
Relative Time assertion.

## Representation gap

The adopted atomic contract covers one explicitly Recorded assertion and its
stated limits. The current Draft/schema support is narrower. This is a gap
between semantic authority and candidate serialization/structural support;
it does not make adopted claims semantically unadopted, nor make absent
payload forms valid under Draft 0.1.0.

| Adopted semantic scope | Draft 0.1.0 / schema today | Integration gap (not a selected design) |
|---|---|---|
| `before` / `after` | Present in `relative-position`. | The adoption explicitly qualifies them as qualitative target-relative-to-source claims. Any candidate wording must preserve that limit and must not turn them into `end(A) < start(B)`, scheduling, duration, or whole-extent claims. |
| `same-instant` | Present in `relative-position`. | The adoption states semantic symmetry without requiring mirror storage or Derived closure. The schema validates the token but does not express those semantic limits. |
| `within` | Present as the sole `containment` relation. | The adopted contract selects period-within-period and point-within-period for this contract and excludes other combinations. The payload schema has no such shape matrix; current Validator evidence does not make that matrix part of schema validation. |
| `contains` | No `contains` token or corresponding candidate case. | A representation and exact-version support decision is needed. Its adopted meaning is the inverse claim with the stated applicability, not automatic reverse Relation storage. |
| `overlap`, `touching`, `same-temporal-extent` | No corresponding current payload value/case. | These adopted atomic claims are not representable as known Draft 0.1.0 values. New payload/Feature organization is open. The adoption does not supply endpoint evaluation, boundary rules, or a solver. |
| `calendar-granule-relation`, `elapsed-offset` | Present as distinct candidate payload families and Features. | They remain separate quantitative families. Atomic adoption does not silently revise their detailed contract or convert them into qualitative values. |

The candidate lists four Features: `relative-position`, `containment`,
`calendar-granule-relation`, and `elapsed-offset`. Under the Specification
Extension, Feature identifiers are local to an exact specification version;
when declarations use `features`, they identify the Features actually used
and may not list unused Features. Whether future semantic families extend
those Features or introduce another organization is undecided.

The adopted contract does not itself specify payload shapes, Feature names,
version numbers, schema validation of temporal referents, History comparison,
conflict handling, or application support. Those cannot be inferred from the
adoption table.

## Compatibility boundary

### Existing `0.1.0` declarations and data

- A Dataset declaring `draft.github.sukoyaka-dopeness.relative-time` at exact
  version `0.1.0` claims the current candidate contract, not automatic support
  for every subsequently adopted semantic value.
- Existing `0.1.0` payloads using the current four candidate families remain
  judged against the exact `0.1.0` Draft/schema and local consumer support.
  This preparation proposes no reinterpretation, rewrite, or migration of
  those Datasets.
- The current schema accepts only its defined variant cases. Adding an
  adopted-but-absent token to a payload does not make that payload valid
  against the unchanged 0.1.0 schema. Unknown sibling fields being
  preservable does not mean an unknown semantic value is interpreted.
- The current Draft's general/underspecified `within` support must not be
  confused with the narrower adopted applicability set. Tightening that
  applicability can affect the conformance of existing payloads and therefore
  needs an explicit exact-version and compatibility disposition.

### Consumers and exact-version declarations

- The inspected Validator supports exact version `0.1.0` and provides bounded,
  read-only diagnostics/Derived evidence. It does not thereby support absent
  adopted values, make them normative Draft 0.1.0 payloads, or authorize
  mutation. Its exact-version gate is current compatibility evidence.
- Under the Specification Extension, a consumer must not apply one exact
  version's rules to a different declared exact version. An old consumer may
  preserve an unsupported version when practical, but it must not claim that
  version's semantic support.
- Dataset `uses` declarations are exact, not ranges. A version change is
  therefore visible in the Dataset declaration; this preparation selects no
  automatic rewrite or compatibility fallback.
- Newer consumers could choose to support both an old and a new exact version,
  but that support matrix and its tests would be later implementation work.
  Existing consumers would not gain support merely because a new version is
  published.

## Versioning directions for Human comparison

| Direction | What it would mean | Compatibility/evolution implications | Main cost or unresolved decision |
|---|---|---|---|
| **A. Revise candidate `0.1.0` in place** | Treat `0.1.0` as an editable, not-yet-immutable draft and update its text/schema to align with the adopted semantics. | The exact-version declaration need not change, though its Feature list might depending on the representation. Consumers already implementing `0.1.0` could interpret that label differently; existing payloads may acquire changed conformance, especially around `within`. | Human must decide whether this exact draft identity/version is still mutable despite current Validator and Dataset declaration support. If it is an immutable published definition under the Specification Extension rule, this direction is unavailable. |
| **B. Keep the Extension identifier; add a new exact candidate version** | Preserve `0.1.0` and define a later candidate version under `draft.github.sukoyaka-dopeness.relative-time`. No number is proposed here. | Old declarations retain their old interpretation. Datasets using new values declare the new exact version. New consumers may support both; old consumers do not claim support for the new version. | Requires a version support matrix and an explicit decision whether/how old Datasets can be migrated. It avoids same-label reinterpretation but is not transparent to older consumers. |
| **C. Introduce a distinct Extension identifier** | Give the integrated contract a new identity rather than evolving the existing draft identity. | Existing `0.1.0` remains separate; payload and declaration identity both change for the new line. No automatic equivalence or migration follows from similar semantics. | Creates parallel identity/support tracks and migration burden. Current evidence does not require a new semantic responsibility, so justification would need to be explicit. |
| **D. Defer integration** | Keep the adopted semantic authority and Draft/schema mismatch as-is. | No existing Dataset or consumer behavior changes. Adopted semantics remain authoritative at the semantic layer, while unsupported serialization remains an explicit capability gap. | New values remain unavailable to current Draft 0.1.0 structural validation and exact-version consumers. No priority or future date is selected. |

These are versioning directions, not endorsements of a particular schema
shape. In particular, selecting B would not itself choose the next version
number, Features, variant layout, dataset migration rules, or Validator
behavior. Selecting A would require an explicit Human disposition of the
same-version mutability question; the fact that the Draft is non-Stable does
not answer that question by itself.

## Next Human decision

**Which direction should govern the next bounded integration proposal?**

- **A - Revise the existing 0.1.0 candidate in place**, subject to explicitly
  treating its exact definition as mutable at this stage.
- **B - Preserve 0.1.0 and prepare a later exact version under the same
  Extension identifier.**
- **C - Prepare a distinct Extension identity** for Human comparison, accepting
  that it creates a separate identity/support line.
- **D - Defer integration**, leaving Draft 0.1.0 and its schema unchanged.

Choosing A, B, or C selects only the direction for a subsequent bounded
integration proposal. It does not authorize changing the Draft/schema in this
checkpoint. A later Human review must still decide/adopt concrete normative
wording, representation, version identity, compatibility promises, and any
migration policy before implementation. Option D authorizes no follow-up.

None of these choices revisits RT-BR-1 Choice 1 or the adopted atomic
semantics. None adds History grounding, changes Recorded/Derived separation,
reinterprets Stable History `temporalOrder`, adopts precise interval
semantics for `before` / `after`, reopens H2-POSITION-CIRCA, selects a solver,
or authorizes Timeline/application behavior.

## Validation and scope

This is a documentation-only design preparation. It changes no normative
Extension, schema, Validator source, test, example, sample, application,
Dataset, migration policy, or version. The repository's full validation is
used to verify the documentation-only checkpoint and preserve the current
minimal-root gate. The sibling Validator repository is read-only evidence and
remains unchanged.
