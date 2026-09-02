# E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-PR2-NONVISUAL-EVIDENCE-COMPLETION1

Date: 2026-09-03

This bounded checkpoint evaluates the frozen Production Readiness Design1 and
the subsequent candidate materialization and compatibility contracts. It
does not change the Core, implement a Production adapter, choose a candidate,
or accept visual behavior.

Status vocabulary used below: `COMPLETE` means the frozen requirement is
closed for the stated scope; `COMPLETE-BOUNDED` means it is closed only for
the explicitly recorded evaluation domain; `INCOMPLETE` means required work
remains; `NOT-REQUIRED-FOR-PR2` means the readiness authority places it after
this checkpoint; `CONFLICT` means the evidence and the frozen authority do
not agree.

## 1. CASE

`CASE 1`.

## 2. Decision

`DECISION A`: PR-2 nonvisual evidence is complete for the bounded research
evaluation domain `1 <= N <= 65`, for each of the five frozen materializer
identities. This is not a universal Product claim and does not authorize
Production evaluation, visual acceptance, or selection.

## 3. Exact PR-2 required evidence classes

The frozen readiness authority requires these four classes before candidate
selection and therefore for this bounded PR-2 decision:

1. `E-HARD`: hard validity and geometry gates.
2. `E-DETERMINISM`: repeatability, ordering invariance, and runtime behavior.
3. `E-COMPAT`: candidate compatibility with the frozen Product ownership,
   persistence, migration, failure, and fallback boundaries.
4. `E-PROVENANCE`: attributable source, fixture, runtime, configuration, and
   evaluation evidence.

All four are `COMPLETE-BOUNDED`. The status is deliberately qualified by the
materializer domain and by the nonvisual, disposable evaluation surface.

## 4. Later evidence classes

`E-VISUAL`, `E-SETTLING`, `E-ROUTING`, `E-VIEWPORT`, and `E-PERFORMANCE` are
later visual, interaction, quality, or integration layers and remain
`NOT-REQUIRED-FOR-PR2`. Production integration and candidate selection are
also later stages. `E-STRUCTURAL` remains preference context rather than a
hard PR-2 gate; the existing PP-M3 evidence is research-only and does not
rank candidates.

## 5. Five candidate PR-2 states

Each candidate has the same state: `PR-2 NONVISUAL-EVIDENCE-COMPLETE`
(`COMPLETE-BOUNDED`, `1 <= N <= 65`). No candidate-specific hard, determinism,
compatibility, or provenance failure occurred.

| Candidate | PR-2 state |
| --- | --- |
| `TA0/REP-0` | complete-bounded |
| `TA2-DEG-W1-OP-v1` | complete-bounded |
| `TA2-MOTIF-W1-OP-v1` | complete-bounded |
| `TA3-FWD-W1-OP-v1` | complete-bounded |
| `TA3-REV-W1-OP-v1` | complete-bounded |

## 6. Claim levels

`PR-C0` and `PR-C1` are supported for the four required classes within the
bounded domain. `PR-C2` is supported for that bounded nonvisual evidence
class. `PR-C3` (Production-evaluation eligible), `PR-C4` (Production-selection
eligible), and `PR-C5` (selected) are all `NO`; there is no automatic mapping
from this result to any of those levels.

## 7. Source identity

The Production source authority is LiaisonScape commit
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The disposable evaluation clone
is detached at that same commit. The readiness lineage was read at these
e2r-spec commits: Readiness Design1
`6a470ea0f2a2f288ada45f3943369bf5ef4b59c4`, Evidence Audit1
`a344d4865c90c9de3b3c8ad08730493e45408368`, Materialization Validation1
`452df7bf1bc901478651f8b3ebf526b962f0b191`, and Compatibility Validation1
`fc4540d273ce4e80da0ec95d9cc0a351a09f7135`.

The frozen materializer/support source SHA-256 values are:

| File | SHA-256 |
| --- | --- |
| `core/rational.mjs` | `948EDDE70FE80633E39D02E51BD5CA21333825F6E32DD4FB88777736A05A85ED` |
| `core/graph.mjs` | `899472982A7EE2DBBF32F5F1640202DC20BFF7E8BD4424048997137B2076B15E` |
| `core/fp1.mjs` | `3B1B7567D5A56BDE6DF66B2771E0C5AE1F7190483DA2E6BB6DCECBB587BBFBF6` |
| `core/canonical.mjs` | `553DE8A41AE94E6D9258D783FDB6117C25C10B1DE97E342D57D6D5A75C5629F0` |
| `core/gates.mjs` | `069DA87471E092E76629B3C213AAA3832AA7E146F96187CFD44913396E99398C` |
| `core/materializer.mjs` | `850E9F9D8F6624DD9BF4B3ABC6DC6DC143037F8BDA0AE357F3C8924E502E8CF4` |
| `fixtures/authoritative.mjs` | `A72475F2450D93EFEAAB4CC8655FA72440B6472917615953AD4824E955D62BD5` |
| `tests/materialization.test.mjs` | `6A2AB8E448B665067FB2E07F6F21DD1F92945B3442EC9421A921DC1950375BE2` |
| `harness/run-validation.mjs` | `D06A2DB57C74D852DD962CB541FB94D178985517A5EA1DF861BAF54DB272C454` |

## 8. Graph projection

The evidence surface reads committed Dataset bytes through `git show`, then
projects Entity nodes and unique undirected Entity-to-Entity edges using the
frozen materializer projection. It skips missing or non-Entity endpoints,
canonicalizes endpoint order, and collapses parallel Entity relations. The
projection is an explicit evaluation abstraction, not a change to Product
graph semantics.

## 9. Self-relation finding

The committed Production Lighthouse fixture contains 2 self Relations. The
projection records 0 self edges because the frozen materializer rejects
self-edges. Product retains self Relations. This is an attributed projection
boundary, not a newly accepted Product behavior.

## 10. Parallel-relation finding

The Lighthouse fixture contains 1 parallel Entity pair. The projection records
1 canonical pair, collapsing its parallel multiplicity. Product retains
parallel Relations and their identities. Candidate materialization consumes
the canonical topology only under the frozen contract.

## 11. Event-relation finding

The Lighthouse fixture contains 14 Event-related Relations and projects 0 of
them. The dedicated Event/Entity fixture contains 4 Event-related Relations
and projects 0 Entity edges. Product preserves and separately surfaces this
hidden graph layer; the evaluation projection does not reinterpret it.

## 12. Fixture corpus

The committed real-fixture corpus contains seven entries. The role labels are
inventory labels only and do not create a universal ranking:

| Fixture | Role | N | projected E | components | motifs | self | parallel | Event relations | raw relations |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Lighthouse | realistic-ordinary | 10 | 11 | 1 | 1 | 2 | 1 | 14 | 28 |
| Ashen Crown | motif-rich | 10 | 17 | 1 | 7 | 0 | 0 | 40 | 57 |
| Apollo 11 | realistic-ordinary | 9 | 11 | 1 | 0 | 0 | 0 | 55 | 66 |
| Titanic | realistic-ordinary | 13 | 11 | 2 | 0 | 0 | 1 | 28 | 40 |
| Berlin Wall | realistic-ordinary | 9 | 7 | 2 | 0 | 0 | 0 | 16 | 23 |
| Event/Entity relations | event-relation-projection | 2 | 0 | 2 | 0 | 0 | 0 | 4 | 4 |
| Linkscape relation | coordinate-space-projection | 5 | 6 | 1 | 1 | 0 | 0 | 0 | 6 |

The Production Lighthouse bytes are the committed Git version; the protected
dirty Production sample files were excluded.

## 13. Fixture authorities and hashes

Real fixture authority and raw SHA-256 values are:

| Fixture | Authority | Raw SHA-256 | Graph projection SHA-256 |
| --- | --- | --- | --- |
| Lighthouse | `e2r-liaison-scape@fd563340.../public/lighthouse-restoration-demo.en.e2r.json` | `C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386` | `8DA4C8EE7CF20BA91166E6B68956062C61F4FBA32CCEDE0CBDDAA38434C28847` |
| Ashen Crown | `e2r-spec@fc4540d.../examples/ashen-crown.en.e2r.json` | `A34326545FAB32A7EBDB6C26E97056B747C50F294F6574FD21B123D341FE338E` | `BB4715797A68D136E0804148D4ED3E872E53199C996A239EB5E760F006800CB1` |
| Apollo 11 | `e2r-spec@fc4540d.../examples/apollo-11-mission.en.e2r.json` | `B055CB0D0A0D5B577C0E3689EF5CA1FC278DD3F4CE68DA25C6D1E76A94912BDF` | `A06925D13C60305EE26E3FD6892D9D6A756B3CFEB77510BBB919C5A95FE4B311` |
| Titanic | `e2r-spec@fc4540d.../examples/titanic-final-voyage.en.e2r.json` | `D4392DA00CC37F55BB70362910956F52909C48F938DF206DC6E1785404E8B636` | `594BFBACDCB159740ABC282EBC9C073D203CEA63F0434FC4E23007049C2D1B8D` |
| Berlin Wall | `e2r-narrative-line@a525d2e.../src/sample/berlin-wall-history.en.e2r.json` | `E83F88102CFAF91BBF355490AA526E5F45300F419B478B51E4C8A28CEA7A06FF` | `3B3190B167275C8DF379D538646746433A4025F8913F9600FF883087C58B4F20` |
| Event/Entity relations | `e2r-narrative-line@a525d2e.../public/manual-checks/event-entity-multiple-relations.e2r.json` | `77B89AF51D210FEBECAC0EFEB6E0FE517BA3814D7E901AAFB3AA5B499A0EEF49` | `A6148BA1504810C46330BEB54453A5DBDDFAD628E74271E7F2892E22B41AE5C7` |
| Linkscape relation | `e2r-liaison-scape@fd563340.../examples/linkscape-relation-sample.e2r.json` | `D366D21FBE7A164CA10B25039BA12A6830C40F32DD3075E8E2C47898581FDC8A` | `8D829607326FE902B786466A987FB00E4EEE80620C527A889C643E15501A5E81` |

## 14. ROLE GAP

The frozen realistic fixture-role set for later evidence remains open:
high-fanout, sparse, dense, symmetry/control, and larger-size roles are not
claimed as satisfied by relabeling this corpus. The current seven fixtures
provide ordinary, motif-rich, Event-projection, and coordinate-space
coverage. This ROLE GAP is a `NOT-REQUIRED-FOR-PR2` later-stage gap and still
blocks PR-3 and later visual/selection progression until addressed.

## 15. Synthetic controls

Six generated controls broaden topology and boundary coverage: singleton N=1,
path N=5, star N=7, disconnected N=6, dense N=8, and isolated boundary N=65.
Their generated identity is versioned as `pr2-control-v1`; their graph hashes
are recorded in `fixture-inventory.json`. They are deterministic controls,
not realistic fixture-role evidence and not candidate witnesses.

## 16. Broader hard-gate evidence

The new evidence runner evaluated 35 real-fixture/candidate cells and 30
synthetic-control/candidate cells. All 65 eligible cells returned `SUCCESS`
with `HARD-1` through `HARD-7` true. The focused test independently checked
replay invariance, permitted input reordering, output fingerprints, and input
immutability.

## 17. Candidate-specific failures

None. The only failures were the intentional common domain-boundary cases N=0
and N=66, where every candidate returned `DOMAIN-MISMATCH` with no coordinates.
No candidate was retried, substituted, or silently accepted.

## 18. N <= 65 decision

The first frozen materializer domain remains `1 <= N <= 65`. N=65 passed for
all five candidates; N=0 and N=66 were rejected for all five. This closes PR-2
only for the bounded research domain. It does not claim support for N>65 or
for the full Product entity-count domain.

## 19. Runtime and determinism

The new evidence ran on Node `v24.18.0`. Candidate mappings and coordinate
fingerprints are stable under permitted node/edge reordering and repeated
evaluation. The old harness also reproduced its 15 authorized cells, and the
new focused test passed 4/4. Browser-runtime and live-App behavior remain
outside this nonvisual checkpoint.

## 20. Production provenance classification

For this checkpoint, Product source identity and committed fixture authority
are complete, and each evidence cell records candidate, materializer source
authority, graph hash, fixture/raw hash or generated-control identity,
Production commit, runtime, transform, ownership mode, mapping, output
fingerprint, and gate status. This is `COMPLETE-BOUNDED` provenance for the
disposable Node evaluation. Browser-session logs, live adapter provenance,
adoption records, and Production evaluation records are later integration
requirements, not silently inferred here.

## 21. Failure breadth

Failure breadth is covered by the common invalid-domain boundary and by the
frozen deterministic failure precedence. No candidate-specific failure was
observed. The evidence does not invent separate injected artifact records for
every defensive branch; those branches remain attributable in the pure-core
contract and are a bounded evidence limitation rather than a hidden fallback.

## 22. MAT-C3 pure-core tests

The frozen materializer test suite passed `13/13`.

## 23. MAT-C3 harness

The frozen validation harness passed `15/15` authorized fixture/candidate
cells. The fresh artifact index reported manifest
`1C016D90103B1E4AA1A1D194900F33C62B704D4A6F40B880349DD20DF8D6F644`, raw
materialization `335B632E2E3DB5C73F78261725EE362A35DD7551451233B5F997D5336B74CA6F`,
and audit `82DCEF30A38F0B7746C86C763A8588F86339BB59DD36AD8AB702130ED35BB595`.

## 24. New PR-2 test and harness

The additive `pr2-evidence.test.mjs` passed `4/4`:

1. all real cells pass every hard gate and replay invariant;
2. synthetic topology controls cover N=1..65, including N=65;
3. projection audit records self exclusion, parallel collapse, and hidden
   Event relations; and
4. N=0/N=66 fail closed without extension.

The additive `run-pr2-evidence.mjs` produced the same 65 eligible-cell
success result and 10 intentional domain-boundary results.

## 25. Nonvolatile artifact

The disposable surface writes stable-key JSON artifacts with `generatedAt`
explicitly marked volatile. The current artifact index records:

| Artifact | SHA-256 |
| --- | --- |
| `fixture-inventory.json` | `2BDAEC590B716E3EA4BE20FB2FF18FA4C77DBB1C7E8505DC2516E3FD9C0EC57D` |
| `evidence-matrix.json` | `E385877448E7ED7EB3B59709714CB368194E16C1857677EF04DA718C72149756` |
| `provenance.json` | `EEC8AC4A7EFC3B027A7CBD5D42BFCB8A48AC51AEA6002482A52BF55565A82A3B` |
| `audit-results.json` | `A85DD833BB98E8FD25EA3795C2A1CEE07A0A2D8DD5A6EC0D08ED14F632ABFFB2` |

Substantive JSON is stable-key serialized; timestamp volatility and
transitive artifact-index volatility are declared rather than treated as
semantic differences.

## 26. Production test

Unchanged Production tests passed `280/280`.

## 27. Production lint

`npm.cmd run lint` passed (`tsc --noEmit`).

## 28. Production build

`npm.cmd run build` passed, including TypeScript build and Vite production
build.

## 29. Production diff-check

`git diff --check` passed. The only output was the existing Git line-ending
warning for the protected dirty sample files.

## 30. Isolation

The materialization and PR-2 evidence surfaces exist only in the disposable
detached clone under
`experimental/production-candidate-materialization/pr2-nonvisual-evidence-completion1/`.
No import, bundle, runtime hook, persistence path, or schema change was made.

## 31. Production source modified

No. Production source remains at commit
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`; only the two pre-existing
protected dirty public sample files remain dirty.

## 32. Frozen materializer modified

No. The five fixed materializer source files and their four supporting frozen
files retain the source hashes recorded in the artifact inventory. The
additive PR-2 scripts import them without editing them.

## 33. Clone additive surface state

The disposable clone contains untracked, uncommitted additive evidence files
and generated artifacts only under the allowed PR-2 directory. No clone commit
was created. The clone remains detached at the Production source commit.

## 34. Result document path

This document is
`docs/liaisonscape-initial-placement-seed-production-pr2-nonvisual-evidence-completion1-result.md`.

## 35. Roadmap changed

Yes. A single bounded checkpoint entry is appended to `docs/roadmap.md`.

## 36. e2r-spec validation

`npm.cmd run validate` passed after the result and roadmap changes.

## 37. Commit

The local checkpoint subject is `docs: complete LiaisonScape PR2 nonvisual
evidence`. Its exact VCS hash is supplied in the final handoff because the
hash is created only after this document and the roadmap entry are staged and
validated.

## 38. e2r-spec worktree

The pre-existing protected dirty
`sessions/E2R-Session-0052.md` remains untouched and unstaged. Only this
result document and the roadmap entry belong to this checkpoint.

## 39. Protected states

The Production dirty English and Japanese Lighthouse samples remain
untouched. The ai-knowledge browser diagnostic playbook remains untouched.
No protected file is used as evidence authority.

## 40. Candidate selection

`NO`. This checkpoint produces no winner, ranking, tie-break, or selection
recommendation.

## 41. Production integration

`NO`. No Product adapter, live evaluation path, persistence/adoption hook,
runtime logging path, or application integration was implemented.

## 42. Visual acceptance

`NO`. No visual, settling, routing, label, viewport, or performance claim is
made.

## 43. Exact next prerequisite

The next prerequisite is
`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-SETTLING-ROUTING-EVIDENCE-DESIGN1`:
freeze the later visual/settling/routing evidence contract while preserving
the open realistic fixture ROLE GAP and the separate Production integration
boundary. It is selected as the next prerequisite only; it is not started by
this checkpoint.

## 44. Publication state

Push, tag, release, deploy, and publication are all `NONE`. The e2r-spec
checkpoint remains local and unpushed.

No Knowledge Candidate was promoted to `ai-knowledge`.
