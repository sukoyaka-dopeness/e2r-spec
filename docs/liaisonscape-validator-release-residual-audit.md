# LiaisonScape / Validator Release Residual Audit

- Date: 2026-08-30
- Status: `READY — LIAISONSCAPE / VALIDATOR RELEASE RESIDUALS TRIAGED`
- Scope: audit and triage only. No residual fix, dependency update,
  publication, version change, workflow change, sample change, or Auto Layout
  implementation was performed.

## Public GitHub evidence and local authority

Public read-only evidence was checked for [LiaisonScape](https://github.com/sukoyaka-dopeness/e2r-liaison-scape) and [Validator](https://github.com/sukoyaka-dopeness/e2r-validator), including public package metadata, samples, source, and release workflow. Public LiaisonScape still declares Validator `^0.2.0`; the public source may lag accepted local commits. Local clean repositories are authoritative for this audit: LiaisonScape `0e56345`, e2r-spec `696d9e0`, and Validator `07f476e`.

## Baseline gates

All required gates passed: LiaisonScape 274 tests, lint, build; Validator
validate and `npm pack --dry-run`; e2r-spec validate and mirror validation;
NarrativeLine 222 tests, lint, build; and Hub test, lint, build.

## Validator package coherence and release workflow

Validator `package.json` is version `0.4.0`; both root and package lock versions
are `0.4.0`; `CHANGELOG.md` contains `## 0.4.0 - 2026-08-30`; package name and
pack contents are coherent. The local repository tracks `.github/workflows/release.yml` and the public repository exposes the same release-facing workflow boundary: `vMAJOR.MINOR.PATCH` tag, OIDC `id-token: write`, checkout of Validator and e2r-spec, `npm ci`, validate, tag/version check, changelog check, pack inspection, and `npm publish --access public`. The workflow and `docs/release-process.md` agree. No local/public workflow blocker was found.

## Presentation implementation and behavior coverage

The required dedicated `test/presentation-validator.test.js` file does not
exist and is not required. Actual behavior is covered in these existing files:

| Behavior | Production code | Test location | Covered? | Classification |
|---|---|---|---|---|
| exact Presentation 0.1.0 support | `src/presentation-validator.js`, `src/specification-validator.js` | `test/extension-validator.test.js`, `test/specification-validator.test.js` | Yes | CLOSED |
| normal/reverse/undirected/bidirectional | `src/presentation-validator.js` | `test/extension-validator.test.js`, specification tests | Yes | CLOSED |
| solid/dashed/dotted | `src/presentation-validator.js` | `test/extension-validator.test.js` | Yes | CLOSED |
| malformed payload/record/arrow/line | `src/presentation-validator.js` | `test/extension-validator.test.js` | Yes | CLOSED |
| orphan Relation IDs | `src/presentation-validator.js` | `test/extension-validator.test.js` | Yes | CLOSED |
| unknown future tokens/fields preservation | extension dispatch and preservation path | `test/extension-validator.test.js` | Yes | CLOSED |
| unsupported Presentation version | version dispatch | `test/extension-validator.test.js` | Yes | CLOSED |
| exact Specification declaration/local support | `src/specification-validator.js` | `test/specification-validator.test.js` | Yes | CLOSED |

## Documentation parity and README

`README.md` accurately describes Presentation Draft 0.1.0 read-only support,
unknown-token/field preservation, and no auto-repair. The release-facing gap is
`docs/specification-interoperability.md`: its locally supported versions table
omits the Presentation Extension even though production code supports it. This
is `R1 — VALIDATOR DOCUMENTATION PARITY`; it is not an implementation defect.

## Validator sample validation

Validator 0.4.0 RC validates the revised canonical Lighthouse EN/JA samples
without errors or warnings. The accepted ten-public-sample validation remains
warning-free; no sample regression or orphan Presentation record was found.

## Consumer dependency state

LiaisonScape local/public remains on `^0.2.0` with lock `0.2.0`; NarrativeLine
remains on `^0.3.0`. This is `EXPECTED PENDING INTEGRATION`, not a new bug:
the accepted sequence is publish-first, then consumer updates to `^0.4.0`.
The browser `unknown_extension` / `specification_unavailable` messages are a
`KNOWN CONSUMER DEPENDENCY RESIDUAL`. Temporary 0.4.0 package smoke already
proved the package behavior warning-free.

## LiaisonScape recent-work regression audit

The accepted recent work remains correct: dotted friendship, bidirectional
Clara/Maya, solid supervision, reverse Clara/Lighthouse, node-label route
avoidance, and automatic initial placement all passed focused/full gates. Owned
Coordinates remain protected, Derived placement does not author Coordinate
state, manual Relation routes remain authoritative, and no blank/crash or new
correctness regression was found. Lighthouse renders 10 Entities and 14
visible Entity-to-Entity Relations.

## Lighthouse dashed intent gap

The current sample has friendship dotted and no dashed Relation. This is
classified `D1 — R1 USER-INTENT GAP`: the user's explicit request for a
meaningful personal-relationship dashed showcase is not fully represented.
The rejected spouse decision is not reopened here, and no replacement Relation
is invented. A separate bounded semantic decision is required before Auto
Layout if the user still requires dashed showcase coverage.

## Auto Layout boundary

“Clara should be central” and topology-driven whole-graph arrangement are
`R2 — EXPLICIT AUTO LAYOUT / RE-LAYOUT FEATURE`. They are not a regression in
the accepted initial placement feature: initial placement only fills missing
Derived positions and never rearranges Lighthouse's stored Coordinates.
Auto Layout design and implementation remain outside this audit.

## Edge/node-label boundary

The accepted node-label route-avoidance blocker is `CLOSED`. No new glyph-level
crossing or correctness regression was found. Ordinary graph density, hub
centrality, and route aesthetics remain separate Auto Layout concerns.

## Residual matrix

| ID | Repo | Observation | Evidence | Class | Before Auto Layout? | Before Validator publish? | Exact next bounded action |
|---|---|---|---|---|---|---|---|
| R1-1 | Validator | Specification interoperability table omits supported Presentation | local docs vs `LOCAL_SUPPORT` and tests | R1 | Yes, small documentation fix | Recommended, but not publication-blocking | Update only the supported-versions documentation and validate |
| R1-2 | e2r-spec / samples | No dashed sample showcase despite explicit user intent | Lighthouse payload and regression test | R1 / D1 | Yes, separate semantic decision | No | Decide one natural sample-local dashed use; do not invent it in this audit |
| R2-1 | LiaisonScape | topology-aware Clara-central whole-graph arrangement desired | accepted placement boundary | R2 | No; this is the next feature stream | No | Create a separate Explicit Auto Layout design checkpoint |
| R3-1 | Validator/consumers | publication and consumer dependency update pending | RC result and package ranges | R3 | No | Yes, after R1 decisions as sequenced | Obtain explicit publication authorization, then publish and update consumers |
| R3-2 | release | final cross-app/public acceptance remains pending | release sequencing | R3 | No | After consumer integration | Run final release audit |

## Closed items

Closed: Presentation recognition; exact Specification support; orphan warning
behavior; unknown-token preservation; Lighthouse dotted friendship;
bidirectional collaboration; reverse arrow; solid supervision; node-label route
avoidance; automatic initial Entity placement; Validator 0.4.0 RC package
build/smoke; and all directly related LiaisonScape regression checks.

## Readiness and exact sequence

Validator: `PUBLISH-READY-AFTER-R1-FIX` because the supported-version
documentation parity item remains. LiaisonScape: `INTEGRATION-READY-AFTER-VALIDATOR-PUBLISH`.

Recommended sequence:

1. Apply and validate the small Validator Specification documentation parity
   fix.
2. Make the separate bounded decision on whether and how to add a natural
   dashed sample-local showcase.
3. With explicit authorization, publish Validator 0.4.0 and update
   LiaisonScape/NarrativeLine consumers to `^0.4.0`.
4. Run consumer and Public Sample Formal Acceptance.
5. Design and implement Explicit Auto Layout / Re-layout.
6. Run the final cross-app and release audit.

Publication is not authorized by this document.

## Exclusions and STOP

Only this result document is changed by this checkpoint. Validator source,
tests, docs, package files, workflow, LiaisonScape source/tests/packages,
samples, NarrativeLine, Hub, schema, roadmap, and ai-knowledge were not
modified. Residual fixes, Validator publication, consumer updates, Auto Layout
design/implementation, Public Sample Formal Acceptance, Research Audit,
Cross-App release audit, app-version decision, push, tag, and deploy are not
started. All new commits remain unpushed; the protected ai-knowledge dirty file
is preserved.
