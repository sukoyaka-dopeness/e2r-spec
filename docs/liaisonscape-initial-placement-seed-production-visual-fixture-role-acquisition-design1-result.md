# E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRODUCTION-VISUAL-FIXTURE-ROLE-ACQUISITION-DESIGN1

Date: 2026-09-03

## 1. Status and boundary

`CASE 2 / DECISION A`: the committed corpus was audited and the role-
acquisition contract was frozen. The realistic common corpus is incomplete.
The existing accepted assignments remain valid for `realistic ordinary` and
`motif-rich`; `high-fanout`, `sparse`, `dense`, `realistic symmetry`, and
`larger-size` remain missing as PR-3 role authorities.

```text
FIXTURE-SELECTION-BLIND-v1 FROZEN
VSR-FIXTURE-v1 CARRIED FORWARD
VSR-FIXTURE-AUTHORITY-v1 FROZEN
EXISTING COMMITTED CORPUS AUDITED
PARTIAL REALISTIC ROLE AUTHORITY FROZEN
ROLE GAP REMAINS OPEN
CORPUS-INCOMPLETE
NO FIXTURE AUTHORING
NO FIXTURE MODIFICATION
NO CANDIDATE SEED EXECUTION
NO CANDIDATE VISUAL OUTPUT
NO SCREENSHOT OR BROWSER ACCEPTANCE
NO CANDIDATE RANKING OR SELECTION
NO PRODUCTION IMPLEMENTATION OR INTEGRATION
NO PR-3 COMPLETION CLAIM
```

This checkpoint is design and inventory work only. It does not make a
candidate choice, and it does not turn a topology metric into a visual
quality result.

## 2. Purpose and decision

The preceding visual/settling/routing evidence design froze the downstream
observation contracts and identified the five missing realistic roles. This
checkpoint establishes the smallest defensible path to a shared role-complete
corpus:

1. read only committed Dataset bytes from e2r-spec, LiaisonScape,
   NarrativeLine, and Hub;
2. preserve the accepted role labels without candidate-dependent review;
3. freeze the current partial authorities and their hashes;
4. classify possible sources for each missing role without assigning them;
5. freeze an acquisition and authoring contract for a later bounded change.

The decision is:

```text
CASE 2 / DECISION A
FREEZE THE CURRENT PARTIAL ROLE AUTHORITIES AND THE
CANDIDATE-BLIND ACQUISITION CONTRACT;
KEEP PR-3 BLOCKED BY THE FIVE REALISTIC ROLE GAPS.
```

## 3. Authorities and protected state

The specification authority is `e2r-spec`. The accepted Production source
authority is LiaisonScape commit
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`. The NarrativeLine source used in
this inventory is commit `a525d2ec3d25c2ab3c1e2d286ca37bd6529784e5`, and the
current specification commit used for examples is
`cc3fac998f5488fa2774c29af99d1ec8b5bb5368`.

The disposable evaluation clone remains detached at
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`; its untracked `experimental/`
work is not an authority and was not changed. The following existing dirty
files were preserved and were not used as source bytes:

- `e2r-spec/sessions/E2R-Session-0052.md`;
- `e2r-liaison-scape/public/lighthouse-restoration-demo.en.e2r.json`;
- `e2r-liaison-scape/public/lighthouse-restoration-demo.ja.e2r.json`.

The committed Production Lighthouse blobs were read with `git show`; the
dirty working-tree samples were not read as authorities. Hub has no tracked
`.e2r.json` Dataset in its current commit.

## 4. `FIXTURE-SELECTION-BLIND-v1`

Role assignment is made from Dataset semantics, the declared role purpose,
committed provenance, and descriptive topology/text facts only. The decision
record must exist before any candidate materialization, settled output,
routing output, screenshot, preference order, or historical winner status is
available.

Forbidden inputs are candidate coordinates, candidate-specific geometry,
rendered output, browser screenshots, reviewer preference, scalar scores,
winner status, and any attempt to choose a fixture because it helps one
candidate. No candidate materializer or downstream visual harness was run in
this checkpoint.

The same future fixture manifest and the same role authorities must be used
for all five candidate identities:

```text
TA0/REP-0
TA2-DEG-W1-OP-v1
TA2-MOTIF-W1-OP-v1
TA3-FWD-W1-OP-v1
TA3-REV-W1-OP-v1
```

## 5. Inventory method and projection boundary

The inventory covers every tracked `*.e2r.json` path in the four repositories
at the stated commit. It records the raw blob SHA-256 and computes the graph
projection using the carried-forward PR-2 boundary:

- Entity objects become candidate Nodes;
- only Entity-to-Entity Relations enter the candidate projection;
- self Relations are counted in the Product inventory but excluded from the
  candidate projection;
- parallel Entity pairs are counted as Product Relations but collapsed to one
  unique undirected projection edge;
- Event-related Relations are counted separately and excluded from the
  candidate projection;
- components and degrees are computed on the unique undirected projection.

`ProjR` below is the directed Entity-to-Entity Relation count, while `Pairs`
is the unique projected undirected edge count. `RawR` remains the complete
Relation count. The graph projection hash is the SHA-256 of the canonical
`{nodes, undirectedEntityEdges}` projection used by the PR-2 evidence harness.

## 6. Complete committed inventory

The following table is an inventory, not a ranking. EN and JA rows with the
same graph hash are presentation variants of one structural fixture and are
not double-counted as roles. `realistic-candidate` means plausible for
semantic review; it does not mean role-assigned.

| Repository | Commit | Path | Class | Title | Locale | N | Events | RawR | ProjR | Pairs | C / isolated | degree min..max | triangles | self / parallel pairs / EventR | density | Stored coordinates |
| --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: | ---: | --- | ---: | ---: |
| e2r-spec | `cc3fac998f54` | `examples/apollo-11-mission.en.e2r.json` | realistic-candidate | Apollo 11 Mission | EN | 9 | 12 | 66 | 11 | 11 | 1 / 0 | 1..4 | 0 | 0 / 0 / 55 | 0.306 | 9 |
| e2r-spec | `cc3fac998f54` | `examples/apollo-11-mission.ja.e2r.json` | realistic-candidate | アポロ11号ミッション | JA | 9 | 12 | 66 | 11 | 11 | 1 / 0 | 1..4 | 0 | 0 / 0 / 55 | 0.306 | 9 |
| e2r-spec | `cc3fac998f54` | `examples/ashen-crown.en.e2r.json` | realistic-candidate | The Ashen Crown | EN | 10 | 12 | 57 | 17 | 17 | 1 / 0 | 2..6 | 7 | 0 / 0 / 40 | 0.378 | 10 |
| e2r-spec | `cc3fac998f54` | `examples/ashen-crown.ja.e2r.json` | realistic-candidate | 灰冠の王国 | JA | 10 | 12 | 57 | 17 | 17 | 1 / 0 | 2..6 | 7 | 0 / 0 / 40 | 0.378 | 10 |
| e2r-spec | `cc3fac998f54` | `examples/lighthouse-restoration-demo.en.e2r.json` | realistic-candidate | Lighthouse Restoration Project | EN | 10 | 11 | 28 | 14 | 11 | 1 / 0 | 1..5 | 1 | 2 / 1 / 14 | 0.244 | 10 |
| e2r-spec | `cc3fac998f54` | `examples/lighthouse-restoration-demo.ja.e2r.json` | realistic-candidate | 灯台修復プロジェクト | JA | 10 | 11 | 28 | 14 | 11 | 1 / 0 | 1..5 | 1 | 2 / 1 / 14 | 0.244 | 10 |
| e2r-spec | `cc3fac998f54` | `examples/titanic-final-voyage.en.e2r.json` | realistic-candidate | Titanic: Final Voyage | EN | 13 | 18 | 40 | 12 | 11 | 2 / 1 | 0..9 | 0 | 0 / 1 / 28 | 0.141 | 13 |
| e2r-spec | `cc3fac998f54` | `examples/titanic-final-voyage.ja.e2r.json` | realistic-candidate | タイタニック号 最後の航海 | JA | 13 | 18 | 40 | 12 | 11 | 2 / 1 | 0..9 | 0 | 0 / 1 / 28 | 0.141 | 13 |
| e2r-liaison-scape | `fd563340625f` | `examples/coordinate-prototype-migration-ready.e2r.json` | prototype/control | Coordinate Prototype migration check | — | 3 | 0 | 2 | 2 | 2 | 1 / 0 | 1..2 | 0 | 0 / 0 / 0 | 0.667 | 3 |
| e2r-liaison-scape | `fd563340625f` | `examples/linkscape-relation-sample.e2r.json` | prototype/control | unnamed Linkscape relation sample | — | 5 | 0 | 6 | 6 | 6 | 1 / 0 | 2..3 | 1 | 0 / 0 / 0 | 0.600 | 0 |
| e2r-liaison-scape | `fd563340625f` | `public/lighthouse-restoration-demo.en.e2r.json` | realistic-candidate | Lighthouse Restoration Project | EN | 10 | 11 | 28 | 14 | 11 | 1 / 0 | 1..5 | 1 | 2 / 1 / 14 | 0.244 | 10 |
| e2r-liaison-scape | `fd563340625f` | `public/lighthouse-restoration-demo.ja.e2r.json` | realistic-candidate | 灯台修復プロジェクト | JA | 10 | 11 | 28 | 14 | 11 | 1 / 0 | 1..5 | 1 | 2 / 1 / 14 | 0.244 | 10 |
| e2r-narrative-line | `a525d2ec3d25` | `public/manual-checks/event-entity-multiple-relations.e2r.json` | manual/control | unnamed Event/Entity check | — | 2 | 2 | 4 | 0 | 0 | 2 / 2 | 0..0 | 0 | 0 / 0 / 4 | 0 | 0 |
| e2r-narrative-line | `a525d2ec3d25` | `src/sample/berlin-wall-history.en.e2r.json` | realistic-candidate | The Road to the Opening of the Berlin Wall | EN | 9 | 15 | 23 | 7 | 7 | 2 / 1 | 0..4 | 0 | 0 / 0 / 16 | 0.194 | 0 |
| e2r-narrative-line | `a525d2ec3d25` | `src/sample/berlin-wall-history.ja.e2r.json` | realistic-candidate | ベルリンの壁開放への道 | JA | 9 | 15 | 23 | 7 | 7 | 2 / 1 | 0..4 | 0 | 0 / 0 / 16 | 0.194 | 0 |
| e2r-narrative-line | `a525d2ec3d25` | `tests/fixtures/legacy/narrativeline-event-date-string-v1.e2r.json` | manual/control | NarrativeLine legacy date fixture | — | 1 | 3 | 1 | 0 | 0 | 1 / 1 | 0..0 | 0 | 0 / 0 / 1 | 0 | 0 |
| e2r-hub | `9de639990396` | no tracked Dataset | — | — | — | — | — | — | — | — | — | — | — | — | — | — |

The immutable identifiers for every inventoried Dataset are listed here. The
Git blob ID is the repository object ID; the SHA-256 values are the raw JSON
blob and canonical candidate projection respectively.

| Path identity | Git blob | Raw SHA-256 | Graph projection SHA-256 |
| --- | --- | --- | --- |
| spec `apollo-11` EN | `b4255f82b138b5ff9e96afcf494615ef70a0e742` | `B055CB0D0A0D5B577C0E3689EF5CA1FC278DD3F4CE68DA25C6D1E76A94912BDF` | `A06925D13C60305EE26E3FD6892D9D6A756B3CFEB77510BBB919C5A95FE4B311` |
| spec `apollo-11` JA | `9e0198c47a42cf80a2db1a2ada6b753c1900f9e1` | `F37F728B24522CD35E522CB59599CCB5CA184EFD03BD8E3CAFEB563371827C10` | same |
| spec `ashen-crown` EN | `8081e071551e2ead29acd0ab42b30e3f5696374f` | `A34326545FAB32A7EBDB6C26E97056B747C50F294F6574FD21B123D341FE338E` | `BB4715797A68D136E0804148D4ED3E872E53199C996A239EB5E760F006800CB1` |
| spec `ashen-crown` JA | `c0a9233996bf41d420636fafcbc339f18ca34cde` | `D7CF886A5E12CB2A8DC030A1A2801A3DFF439248BD10403EBCC1B850B939B249` | same |
| spec `lighthouse` EN | `b96092b0c2b88c6c1ea41c11c1b36dccca3e9726` | `C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386` | `8DA4C8EE7CF20BA91166E6B68956062C61F4FBA32CCEDE0CBDDAA38434C28847` |
| spec `lighthouse` JA | `eed7a093170d675039bb7dc9a6e4c3cfe7148e12` | `7DE771CAF8C75F5868034C5E4790BC473F7D0EF21D40F7178307BF39B0173ACA` | same |
| spec `titanic` EN | `7d5d7b656b2724ae30fb05508b3f2fc4ca1c3327` | `D4392DA00CC37F55BB70362910956F52909C48F938DF206DC6E1785404E8B636` | `594BFBACDCB159740ABC282EBC9C073D203CEA63F0434FC4E23007049C2D1B8D` |
| spec `titanic` JA | `2ac4e72a9c34c65f2d1bb9bf83c610212475a6f5` | `0DE83B1E825C0488588DE03B6EE012EE71221CAAE379F5DB475B691E8515F7D5` | same |
| LiaisonScape `coordinate-prototype` | `199b5beb1f6693a17d6cf77d65696f9b74fdde25` | `009738070B719E3FB5387B7E4419082A1394E32C49E8896898D4051949F3E8CE` | `35DCBF6ADA7C391F350D48BF38910445E3172B66A2F6ABDACB3102BCB6725711` |
| LiaisonScape `linkscape-relation` | `262787c3fe027b068d3c685c63a023a3c9a814e4` | `D366D21FBE7A164CA10B25039BA12A6830C40F32DD3075E8E2C47898581FDC8A` | `8D829607326FE902B786466A987FB00E4EEE80620C527A889C643E15501A5E81` |
| LiaisonScape `lighthouse` EN | same as spec `lighthouse` EN | same | same |
| LiaisonScape `lighthouse` JA | same as spec `lighthouse` JA | same | same |
| NarrativeLine `event-entity-multiple-relations` | `4f0d3caa999462f9778ddc952c443ba6f8659cf6` | `77B89AF51D210FEBECAC0EFEB6E0FE517BA3814D7E901AAFB3AA5B499A0EEF49` | `A6148BA1504810C46330BEB54453A5DBDDFAD628E74271E7F2892E22B41AE5C7` |
| NarrativeLine `berlin-wall` EN | `5f9fdf7447e64092e882e42b0ae21682b15a4fdc` | `E83F88102CFAF91BBF355490AA526E5F45300F419B478B51E4C8A28CEA7A06FF` | `3B3190B167275C8DF379D538646746433A4025F8913F9600FF883087C58B4F20` |
| NarrativeLine `berlin-wall` JA | `c41036e386211d714d8337fd6319eb78e4bd452b` | `AB6DC1D54934C4AB7CD134D93627439D636ED49188B18E47469E8906F7D1B5FF` | same |
| NarrativeLine legacy date fixture | `c3a24078627166a4a6006782ca1a7f66b1787aa5` | `7169AD86AA72CF056EB2DD15FF791CFC03B8403539DA35DA6B42CB2E2B1BCD6E` | `3813C0B72ECD8F8E70C24354B00357154AC45C5304D57913FAE7927AA85C85B6` |

For label support, the committed EN candidates have maximum Entity names of
15--26 characters, maximum Entity descriptions of 45--84 characters, and
maximum named Relation labels of 16--25 characters (the Linkscape sample has
no Relation labels). The corresponding JA variants are retained for later
rendered-label evidence. These are descriptive facts, not a role score.

## 7. Current accepted authorities and role revalidation

The existing labels remain defensible under `VSR-FIXTURE-v1`:

| Structural fixture | Existing role | Candidate-blind semantic basis | Authority state |
| --- | --- | --- | --- |
| `lighthouse-production-committed` | realistic ordinary | restoration project with ordinary people, institutions, system, archive, and lighthouse relations; representative labels and descriptions | accepted and frozen |
| `apollo-11` | realistic ordinary | historical mission with people, agency, vehicles, destination, and recovery relationships | accepted and frozen |
| `titanic` | realistic ordinary | historical voyage with organizations, vessels, crew, and rescue relationships | accepted and frozen |
| `berlin-wall` | realistic ordinary | historical/political opening scenario with ordinary directed institutional, person, crossing, and place relations | accepted and frozen |
| `ashen-crown` | motif-rich | coherent fictional political network with repeated local relationship neighborhoods and seven projection triangles | accepted and frozen |

No fixture is ranked within these accepted assignments. The specification
Lighthouse copy and Production public Lighthouse copy have identical raw and
projection hashes, so the common corpus uses the Production public path as
the routing-visible authority and does not duplicate the structural fixture.

## 8. Possible role candidates before final assignment

The following are possible sources for a later role review, not assignments:

| Missing role | Possible committed sources | Evidence supporting review | Why this does not assign the role now |
| --- | --- | --- | --- |
| high-fanout | Lighthouse, Apollo 11, Titanic | Lighthouse has a project-lead neighborhood; Apollo has NASA/crew and vehicle neighborhoods; Titanic has a large Titanic-centered neighborhood | a high degree or central subject is not enough; the role needs a declared meaningful hub, many distinct neighbors, and surrounding pressure |
| sparse | Berlin Wall, Titanic | Berlin has two semantically distinct components and one weak/isolated projected Entity; Titanic separates rescue and survivor context | low E/N or the fewest edges cannot distinguish intentional sparse semantics from an incomplete sample |
| dense | Ashen Crown | 17 unique projected pairs over 10 Entities, seven triangles, and a semantically connected political network | it is already motif-rich; independent dense-role rationale and route/label-pressure review are still required |
| realistic symmetry | none unambiguous | Ashen Crown contains recurring relationship forms, but not a defensible mirrored realistic structure | repeated motifs are not automatically realistic symmetry; K3 is control-only |
| larger-size | Titanic | N=13 is the largest realistic fixture and includes crew, organizations, vessels, rescue relations, labels, and two components | it is not materially larger under the required future target; maximum available N is not the definition |

`coordinate-prototype-migration-ready`, `linkscape-relation-sample`, the
Event/Entity manual check, and the legacy date fixture remain diagnostic or
control evidence only. Their small or intentionally specialized topology
cannot close a realistic role.

## 9. Role outcomes

### 9.1 High-fanout

`ROLE-MISSING`. Lighthouse, Apollo 11, and Titanic are retained as possible
review inputs, but no role authority is assigned. A future fixture must name
the hub in its semantic brief, provide many distinct visible Entity neighbors,
and include non-hub context that makes route and label pressure meaningful.

### 9.2 Sparse

`ROLE-MISSING`. Berlin Wall and Titanic are possible inputs because their
separation is semantically interpretable, but neither has a frozen sparse-role
manifest. A future fixture must explain why open topology or separated
components are part of the scenario rather than omitted data.

### 9.3 Dense

`ROLE-MISSING`. Ashen Crown is a possible multi-role review input, not a
dense-role authority. The future review must independently justify genuine
high-connectivity and route/label pressure using unique projected topology,
not Event-related Relation volume or duplicate Relation count.

### 9.4 Realistic symmetry

`ROLE-MISSING`; `K3_CONTROL = PRESENT`. No committed realistic Dataset has an
unambiguous defensible symmetry rationale. Future evidence may use comparable
branches, mirrored organizations, equivalent neighborhoods, or semantically
equivalent subgroups; exact graph automorphism is not required, but a domain
rationale is required.

### 9.5 Realistic larger-size

`ROLE-MISSING`. Titanic is a possible review input but is not materially
larger than the current ordinary corpus. The future target remains a coherent
realistic Dataset with `24 <= N <= 65`, enough visible Relations and labels,
and no padding Entities. The lower target is an acquisition aid, not a
replacement definition or a claim that N=24 is universally sufficient.

## 10. Multi-role policy

Multi-role assignment is permitted only when each role has an independent
candidate-blind rationale, metrics that support that role, and a semantic
reason that is not borrowed from the other role. The current record does not
make any new multi-role assignment. In particular, Ashen Crown is not
silently relabeled dense, and Titanic is not silently relabeled sparse or
larger-size.

The future manifest must preserve each role rationale separately. Reducing
fixture count is not a sufficient reason for a multi-role assignment.

## 11. Partial common corpus and authority freeze

The smallest current partial realistic corpus is five structural fixtures:

```text
lighthouse-production-committed   ordinary
apollo-11                         ordinary
titanic                           ordinary
berlin-wall                       ordinary
ashen-crown                       motif-rich
```

Each structural fixture carries EN and JA presentation variants. The exact
authority fields are:

| Fixture / variant | Repository and commit | Path | Raw SHA-256 | Graph projection SHA-256 |
| --- | --- | --- | --- | --- |
| lighthouse / EN | `e2r-liaison-scape@fd563340625fd3d88dc25baedc93c4f8fe69e5e7` | `public/lighthouse-restoration-demo.en.e2r.json` | `C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386` | `8DA4C8EE7CF20BA91166E6B68956062C61F4FBA32CCEDE0CBDDAA38434C28847` |
| lighthouse / JA | same commit | `public/lighthouse-restoration-demo.ja.e2r.json` | `7DE771CAF8C75F5868034C5E4790BC473F7D0EF21D40F7178307BF39B0173ACA` | same |
| apollo-11 / EN | `e2r-spec@cc3fac998f5488fa2774c29af99d1ec8b5bb5368` | `examples/apollo-11-mission.en.e2r.json` | `B055CB0D0A0D5B577C0E3689EF5CA1FC278DD3F4CE68DA25C6D1E76A94912BDF` | `A06925D13C60305EE26E3FD6892D9D6A756B3CFEB77510BBB919C5A95FE4B311` |
| apollo-11 / JA | same commit | `examples/apollo-11-mission.ja.e2r.json` | `F37F728B24522CD35E522CB59599CCB5CA184EFD03BD8E3CAFEB563371827C10` | same |
| ashen-crown / EN | same commit | `examples/ashen-crown.en.e2r.json` | `A34326545FAB32A7EBDB6C26E97056B747C50F294F6574FD21B123D341FE338E` | `BB4715797A68D136E0804148D4ED3E872E53199C996A239EB5E760F006800CB1` |
| ashen-crown / JA | same commit | `examples/ashen-crown.ja.e2r.json` | `D7CF886A5E12CB2A8DC030A1A2801A3DFF439248BD10403EBCC1B850B939B249` | same |
| titanic / EN | same commit | `examples/titanic-final-voyage.en.e2r.json` | `D4392DA00CC37F55BB70362910956F52909C48F938DF206DC6E1785404E8B636` | `594BFBACDCB159740ABC282EBC9C073D203CEA63F0434FC4E23007049C2D1B8D` |
| titanic / JA | same commit | `examples/titanic-final-voyage.ja.e2r.json` | `0DE83B1E825C0488588DE03B6EE012EE71221CAAE379F5DB475B691E8515F7D5` | same |
| berlin-wall / EN | `e2r-narrative-line@a525d2ec3d25c2ab3c1e2d286ca37bd6529784e5` | `src/sample/berlin-wall-history.en.e2r.json` | `E83F88102CFAF91BBF355490AA526E5F45300F419B478B51E4C8A28CEA7A06FF` | `3B3190B167275C8DF379D538646746433A4025F8913F9600FF883087C58B4F20` |
| berlin-wall / JA | same commit | `src/sample/berlin-wall-history.ja.e2r.json` | `AB6DC1D54934C4AB7CD134D93627439D636ED49188B18E47469E8906F7D1B5FF` | same |

The Git blob ID is intentionally omitted where this design already freezes
the immutable commit plus raw SHA-256 pair; a future machine manifest may add
the blob ID without changing the role semantics. The specification Lighthouse
copy remains an unselected duplicate authority with the same hashes as the
Production public copy.

## 12. `VSR-FIXTURE-AUTHORITY-v1`

Every future selected real fixture must freeze:

```text
fixtureId
structuralFixtureId
presentationVariant
roles
repository
commit
path
gitBlob (if available)
rawSha256
graphProjectionSha256
locale
entities / events / relations
projectedEdges / uniquePairs / components / isolatedEntities
degree distribution and motif summary
selfRelations / parallelPairs / eventRelatedRelations
label characteristics
roleRationale per role
selectionReason
knownLimitations
candidateBlindDecisionTimestamp-or-record-id
```

This is evidence metadata, not an E2R Core object, Extension, runtime Product
schema, persisted Dataset field, or user-visible strategy selector. The future
visual harness must consume the frozen authority and reject working-tree
substitutions.

## 13. Role coverage matrix

`ASSIGNED` means an accepted role authority carried forward. `CANDIDATE`
means only a possible source for later role validation. `INSUFFICIENT-EVIDENCE`
means that the committed fixture is not a role source. No cell below is a
candidate quality result.

| Structural fixture | ordinary | motif-rich | high-fanout | sparse | dense | realistic symmetry | larger-size |
| --- | --- | --- | --- | --- | --- | --- | --- |
| lighthouse-production-committed | ASSIGNED | NOT-ASSIGNED | CANDIDATE | NOT-ASSIGNED | NOT-ASSIGNED | INSUFFICIENT-EVIDENCE | NOT-ASSIGNED |
| apollo-11 | ASSIGNED | NOT-ASSIGNED | CANDIDATE | NOT-ASSIGNED | NOT-ASSIGNED | INSUFFICIENT-EVIDENCE | NOT-ASSIGNED |
| ashen-crown | NOT-ASSIGNED | ASSIGNED | NOT-ASSIGNED | NOT-ASSIGNED | CANDIDATE | INSUFFICIENT-EVIDENCE | NOT-ASSIGNED |
| titanic | ASSIGNED | NOT-ASSIGNED | CANDIDATE | CANDIDATE | NOT-ASSIGNED | INSUFFICIENT-EVIDENCE | CANDIDATE |
| berlin-wall | ASSIGNED | NOT-ASSIGNED | NOT-ASSIGNED | CANDIDATE | NOT-ASSIGNED | INSUFFICIENT-EVIDENCE | NOT-ASSIGNED |
| coordinate-prototype-migration-ready | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE |
| linkscape-relation-sample | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE |
| Event/Entity manual check | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE | INSUFFICIENT-EVIDENCE |

| Role | Selected fixture | Authority frozen? | Status | Missing evidence |
| --- | --- | --- | --- | --- |
| realistic ordinary | Lighthouse, Apollo 11, Titanic, Berlin Wall | yes | ROLE-ASSIGNED | later visual evidence only |
| motif-rich | Ashen Crown | yes | ROLE-ASSIGNED | later visual evidence only |
| high-fanout | none | no | ROLE-MISSING | semantic hub declaration, many distinct neighbors, surrounding context |
| sparse | none | no | ROLE-MISSING | semantic low-connectivity/open-space rationale |
| dense | none | no | ROLE-MISSING | independent genuine dense-subgraph and pressure rationale |
| realistic symmetry | none; K3 control separate | control only | ROLE-MISSING | realistic comparable/mirrored structure |
| larger-size | none | no | ROLE-MISSING | materially larger coherent Dataset within N <= 65 |

## 14. Product-visible routing and label coverage

The partial corpus collectively covers the following future evidence inputs:

| Feature | Current coverage | Authority note |
| --- | --- | --- |
| ordinary Entity Relations | present | all five realistic structures |
| parallel Entity Relations | present | Lighthouse and Titanic, retained in Product inventory but collapsed in candidate projection |
| self Relations | present | Lighthouse has two beacon self Relations |
| named Relation labels | present | all accepted realistic fixtures |
| long Relation labels | present | Titanic includes labels up to 25 EN characters in the committed inventory |
| node labels | present | all accepted realistic fixtures |
| long node labels/descriptions | present | Berlin/Lighthouse/Titanic provide longer committed text |
| EN and JA labels | present | paired presentation variants with equal projection hashes |
| multiple components | present | Titanic and Berlin Wall |
| route/label pressure | available as corpus input | not visual acceptance; future V2/V3 evidence remains required |

The missing realistic dense and high-fanout roles mean that this is not yet a
complete pressure corpus. Event-related Relations are useful for Product
inventory and projection-boundary checks but are not visible candidate graph
edges.

## 15. Locale and presentation policy

The structural fixture and its presentation variant are separate identities:

```text
structuralFixtureId = semantic graph and role authority
presentationVariant = en or ja localized Dataset bytes
```

Both EN and JA are required for the later label/viewport evidence surface
because translated labels can change wrapping, route clearance, and fitted
extent. A translation must preserve Entity IDs, Event IDs, Relation IDs,
Relation direction, topology, and role semantics. It may change names,
descriptions, and labels as a faithful locale representation. EN/JA copies do
not count as two roles or two independent structures.

## 16. Existing fixture modification policy

No existing Dataset bytes are modified in this checkpoint. If a current sample
needs semantic additions, a new structural variant must be created and marked
`NEEDS-NEW-FIXTURE-VARIANT`; canonical examples and Production public samples
must not be overwritten to make a role fit. Stored Coordinates are recorded
for provenance but do not justify a visual role and do not authorize candidate
execution.

## 17. Acquisition contract for missing roles

Future acquisition proceeds in this order:

1. freeze the role intent and semantic brief;
2. search committed E2R repositories again, without candidate output;
3. if no role-complete source exists, author or adapt a realistic self-contained
   Dataset;
4. validate the Dataset against the current E2R specification and preserve
   Core/Extension boundaries;
5. add EN/JA presentation variants with unchanged structure where required;
6. commit the Dataset before any candidate visual comparison;
7. record the complete `VSR-FIXTURE-AUTHORITY-v1` manifest;
8. only then consider separate downstream visual evidence.

Allowed sources are: an existing committed E2R fixture, a new authored
realistic fixture, or an adapted external/public historical scenario encoded
as a newly committed E2R authority. Synthetic controls remain diagnostic and
cannot satisfy a realistic role.

Role-specific acquisition briefs are:

| Role | Candidate-blind content contract | Screening aid, not sole definition |
| --- | --- | --- |
| high-fanout | named meaningful hub; many distinct visible neighbors; non-hub context; realistic labels around the hub | usually 8--24 Entities and hub degree at least 6, subject to semantic review |
| sparse | semantically justified low connectivity, separated regions, chain, or meaningful weak/isolated Entities; no omitted-data story | multiple components or low relation-to-Entity ratio may support review |
| dense | semantically coherent high-connectivity subgraph, cross-connections, realistic label density, and route/label pressure | a connected subgraph of at least 8 Entities with materially higher unique-pair density than ordinary fixtures may support review |
| realistic symmetry | two or more realistic comparable branches, mirrored organizations, equivalent neighborhoods, or semantically equivalent subgroups | structural comparison is descriptive; exact automorphism is not required |
| larger-size | coherent realistic scenario, enough varied Relations and labels, no padding, and N within 1--65 | target 24--65 Entities while preserving semantic completeness |

The screening aids are not automatic gates. They must never override the
semantic definition or be applied after candidate output is observed.

## 18. New authoring rules

For a future missing-role Dataset:

- role intent is frozen before content authoring;
- the semantic scenario is frozen before layout testing;
- no Stored Coordinates are included unless a separately justified coordinate
  role requires them;
- no candidate seed is executed during authoring;
- names, descriptions, Relation direction, and labels are normal for the
  scenario;
- Entities are not padded to hit a count;
- duplicate Relations are not added to inflate density;
- labels are not shortened to help a layout or made awkward to break one;
- the Dataset is self-contained and schema-valid;
- external/public source provenance and adaptation rationale are recorded;
- the commit and hashes are frozen before candidate comparison.

The fixture tests the downstream Product and evidence contract; it must not
be engineered toward a predetermined candidate outcome.

## 19. Future manifest shape

The evidence-only manifest name is:

```text
visual-fixture-role-manifest-v1.json
```

Each entry should have this shape, without becoming a runtime Product schema:

```json
{
  "fixtureId": "lighthouse-production-committed-en",
  "structuralFixtureId": "lighthouse-production-committed",
  "presentationVariant": "en",
  "roles": ["realistic-ordinary"],
  "authority": {
    "repository": "e2r-liaison-scape",
    "commit": "fd563340625fd3d88dc25baedc93c4f8fe69e5e7",
    "path": "public/lighthouse-restoration-demo.en.e2r.json",
    "gitBlob": "optional",
    "rawSha256": "C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386"
  },
  "graphProjectionSha256": "8DA4C8EE7CF20BA91166E6B68956062C61F4FBA32CCEDE0CBDDAA38434C28847",
  "counts": {"entities": 10, "events": 11, "relations": 28, "projectedEdges": 14, "uniquePairs": 11, "components": 1},
  "topology": {"maxDegree": 5, "isolatedEntities": 0, "motifCount": 1},
  "routingFeatures": {"selfRelations": 2, "parallelPairs": 1, "eventRelatedRelations": 14, "longLabels": true},
  "roleRationale": {"realistic-ordinary": "..."},
  "selectionReason": "candidate-blind committed corpus authority",
  "limitations": ["visual evidence not yet captured"]
}
```

## 20. Viewport and performance handoff

No viewport or performance evidence was run. The future role-complete corpus
must be exercised later at the frozen normal desktop and narrow/small
viewport roles, with actual dimensions, SVG viewBox, scale/pan, node/route/
label bounds, clipping, and post-settling stability recorded under
`VSR-VIEWPORT-v1`. The present Product uses a logical `800 x 500` SVG view,
node-only `fitGraphView` bounds, a responsive graph surface, and current
settling/routing/label code; this inventory does not modify those contracts.

The future `VSR-PERFORMANCE-v1` record must include representative ordinary,
missing-role, and worst accepted sizes within `1 <= N <= 65`, no-hang evidence,
and attribution to fixture size versus candidate/materializer versus
downstream rendering. No performance budget is frozen by this checkpoint.

## 21. Review and provenance handoff

Later visual review remains criterion-based and bounded. Reviewers record
`PASS`, `FAIL`, or `INDETERMINATE` for the frozen VSR visual, settling,
routing, label, viewport, and performance criteria. Preference is a separate
non-blocking field; it is never a scalar score, a majority selector, or a
fixture-selection input.

Every later artifact must carry, at minimum:

```text
checkpoint
fixtureId / structuralFixtureId / presentationVariant / role
candidateId and stage (V0, V1, V2, or V3)
fixture repository / commit / path / rawSha256 / graphProjectionSha256
Production source commit
evaluation harness/source authority
locale and viewport role
coordinate/route/label/viewport artifact references
review status and criterion-level reason
```

Missing, mismatched, dirty, or untraceable fixture bytes are provenance
failure or evidence-missing, never a candidate failure.

## 22. Corpus completion rule

The status is:

```text
CORPUS-INCOMPLETE
```

`CORPUS-COMPLETE` may be declared only when all seven realistic roles have
accepted committed authorities, K3 remains separately control-only, each
authority and rationale is frozen, EN/JA variants are explicit, routing and
label features are covered, and the same corpus can be used for all five
candidates without candidate-dependent fixture selection. The current five
structural authorities satisfy only ordinary and motif-rich coverage.

## 23. Downstream gate and next checkpoint

PR-2 remains `COMPLETE-BOUNDED` for the previously frozen materializer
identities and domain `1 <= N <= 65`. PR-3 remains `NO`. The next authorized
work is acquisition/authoring and validation of the five missing realistic
roles under this contract. Candidate visual comparison can begin only after
the role-complete manifest and immutable authorities exist.

This checkpoint does not authorize a candidate default, Production
integration, live App import of research materializer code, a user-visible
strategy selector, a schema change, fixture publication, or any browser run.

## 24. Final boundary state

- Fixture corpus role-complete: **NO**.
- Existing ordinary authority: **FROZEN**.
- Existing motif-rich authority: **FROZEN**.
- High-fanout authority: **MISSING**.
- Sparse authority: **MISSING**.
- Dense authority: **MISSING**.
- Realistic symmetry authority: **MISSING**; `K3_CONTROL = PRESENT`.
- Realistic larger-size authority: **MISSING**.
- Candidate selected or ranked: **NO**.
- Candidate visual output or screenshots: **NONE**.
- PR-3: **NO**.
- Production implementation/integration: **NO**.
- Existing Dataset bytes modified: **NO**.
- Next work: **bounded candidate-blind fixture acquisition/authoring and validation**.
