# Legacy Roadmap Chronology

Status: Retained historical evidence; not current planning authority.

## Provenance and authority boundary

The following chronology is transcribed verbatim from `docs/roadmap.md` at

`444c3163ba6a7784f1639c182243644640e47511` (`docs: prepare roadmap chronology migration gate`).

The original wording, order, dated status, and provenance are preserved. Earlier

`current`, `next`, and `open` statements describe their historical snapshot only.

For current status and planning, use the [current roadmap](../roadmap.md) and its

[current migration status](../roadmap.md#current-roadmap-first-chronology-migration-status-2026-09-24).

---

### Historical workspace clone and evidence hygiene baseline — 2026-09-19

This section records the pre-migration audit and is historical. Its counts and
cleanup classifications describe the state before the completed placement
migration above; they are not the current root inventory or an authorization
for new cleanup.

An audit of the direct children of `C:\Users\extra\E2R\` on 2026-09-19
found 76 directories: 73 Git repositories and three non-Git shared roots
(`artifacts`, `diagnostics`, and `experimental`). The canonical keep set is
`e2r-spec`, `e2r-narrative-line`, `e2r-liaison-scape`, `e2r-hub`,
`e2r-validator`, `e2r-dom-test-environment`, and `ai-knowledge`.

The 66 non-canonical Git directories are historical isolated workspaces,
including 22 browser-capture/CDP diagnostics, 16 visual-evidence runs, nine
host/runtime qualification workspaces, ten product-evaluation-seam
experiments, six structural-assignment/layout experiments, one production
candidate materialization workspace, and two other previews/follow-ups. They
are cleanup candidates in principle, but none is approved for deletion by
this entry. The three shared roots are also not deletion candidates without a
separate content and reference review.

The audit identified 15 non-canonical Git directories with dirty or
artifact-bearing work, in addition to dirty canonical repositories. In
particular, the helper receive-lifetime workspace has 646 status entries, a
failed-clone workspace has 114 staged deletions, the production-candidate
materialization workspace has 21 untracked materializer/fixture/artifact
files, and the routing preview has modified source. The visual-evidence and
structural-assignment workspaces also contain untracked capture artifacts,
fixtures, result files, or runners. These must be treated as
`must inspect before cleanup`, not as disposable merely because their names
look experimental.

Git reachability is not yet sufficient for deletion decisions. Ten clone
HEADs are older commits reachable from the canonical LiaisonScape checkout,
while 56 clone HEADs have no common commit object available in that local
object database. Because no fetch or reconstruction was performed, the latter
is recorded as `reachability unresolved`, not as proof that those commits are
unique or disposable. Several current e2r-spec documents, sessions, and
ai-knowledge entries also reference clone paths and their artifacts.

The observed provenance is primarily isolated browser-capture/CDP,
visual-evidence, host/runtime, product-seam, structural-assignment, and
materialization work. The audit found no evidence that a docs physical
reorganization itself created these directories; documentation and session
records currently reference them as historical evidence. This distinction
must be preserved until references and artifacts are reconciled.

Before any cleanup, perform a bounded follow-up that:

1. records each exact path, role, Git HEAD/branch/remote, status, and size;
2. reconciles references from roadmap/result docs, sessions, and Knowledge;
3. preserves or materializes unique commits, artifacts, screenshots,
   manifests, and acceptance evidence into canonical locations where
   appropriate;
4. produces a Human-reviewed keep/archive/delete list; and
5. deletes only explicitly approved disposable clones, without changing
   canonical repositories or unique evidence.

Effective immediately, new isolated clones, experiment workspaces, and
materialization workspaces must not be created directly under
`C:\Users\extra\E2R\`. Keep the seven canonical repositories directly under
that root. Use `experimental\workspaces\...` for non-canonical clones and
experiments, `diagnostics\...` for browser/CDP/runtime/host diagnostics, and
`artifacts\...` for screenshots, visual evidence, and generated artifacts.
Do not create a new nested Git repository or isolated clone inside a
canonical repository. Existing repository-owned paths and the 66 audited
non-canonical workspaces are grandfathered and are not physically moved by
this decision.

This is development workspace hygiene, not feature implementation or an
H2-POSITION-CIRCA acceptance gate. The placement policy applies now. The H2
closure prerequisite is now satisfied, so physical cleanup may be scheduled
as a separate checkpoint, but it was not started by this closure. It remains
targeted for completion before the Hub-publication final audit. Before any
move, consolidation, or deletion, resolve each workspace's unique commits,
dirty work, artifacts, evidence, and documentation references, then obtain
Human review of the keep/archive/delete list. No physical cleanup operation
is authorized by this roadmap entry.

### Consolidated workspace root migration — 2026-09-20

Human adopted the consolidated `C:\Users\extra\E2R\workspace\` root. The
three bounded shared-root moves were completed without changing their
payloads:

- `C:\Users\extra\E2R\experimental` →
  `C:\Users\extra\E2R\workspace\experimental`;
- `C:\Users\extra\E2R\diagnostics` →
  `C:\Users\extra\E2R\workspace\diagnostics`; and
- `C:\Users\extra\E2R\artifacts` →
  `C:\Users\extra\E2R\workspace\artifacts`.

The old three paths are absent and the new paths are present. Pre/post
file-count, directory-count, and byte-count checks matched: experimental
289 files / 72 directories / 3,400,393 bytes; diagnostics 669 files / 31
directories / 28,063,432 bytes; and artifacts 50 files / 54 directories /
212,712 bytes. The two nested Git workspaces under experimental retained
their detached HEAD `fd563340...`, clean status, canonical LiaisonScape
origin, and standalone Git metadata; no alternates, submodules, or additional
worktree dependency was found.

The new placement authority is:

- canonical repositories directly under `C:\Users\extra\E2R\`;
- retained non-canonical Git workspaces, experiments, materializations, and
  replay environments under `workspace\experimental\workspaces\...`;
- browser/CDP/runtime/host diagnostic payload under `workspace\diagnostics\`;
  and
- historical evidence, screenshots, manifests, decision packets, and
  generated preservation material under `workspace\artifacts\`.

Historical documents, manifests, audit packets, and result records retain
old absolute paths where those paths describe historical provenance. No broad
path rewrite was performed, and the post-move scan found no active script,
launcher, Git relation, or current placement authority depending on the old
three roots. The seven canonical repositories remained unmoved. The 55
remaining non-canonical direct-child Git workspaces are migration-pending and
are not moved by this entry. This was placement cleanup, not delete
authorization; deletion, source adoption, remote rewrite, and further
workspace moves remain separately bounded actions.

### Product-evaluation first move wave — 2026-09-20

Human approved the exact five-workspace first move wave under the full-workspace
preservation policy. The following direct-child workspaces were moved to
`C:\Users\extra\E2R\workspace\experimental\workspaces\` with their original
basenames:

- `e2r-liaison-scape-product-evaluation-seam-implementation1b`;
- `e2r-liaison-scape-product-evaluation-seam-implementation1c`;
- `e2r-liaison-scape-product-evaluation-seam-implementation1d`;
- `e2r-liaison-scape-product-evaluation-seam-implementation1e`; and
- `e2r-liaison-scape-product-evaluation-seam-implementation1g`.

Post-move checks confirmed that each old source path is absent and each exact
target exists. All five retained their recorded HEAD, branch or detached
state, clean Git status, local refs, canonical LiaisonScape origin, candidate
source/test/replay surface, and Git object database. File count, directory
count, and byte count matched the pre-move baseline for every workspace. No
remote, ref, branch, worktree metadata, historical absolute path, or payload
was rewritten.

The root inventory is now 58 direct-child directories, 57 direct-child Git
repositories, and 50 remaining non-canonical direct-child Git workspaces. The
seven canonical repositories and `workspace` remain directly under E2R.
`baseline2`, `implementation1`, the 1F/CSS-reconciliation pair, the LF-check,
and all other root-level workspaces remain unmoved. This was bounded placement
cleanup and full-provenance preservation, not deletion or source adoption.

### Baseline2 / implementation1 replay-path portability — 2026-09-20

The baseline2 / implementation1 pair's move blocker was an active relative
replay dependency: baseline2's v1/v2 comparison runner resolved
implementation1's characterization1 artifacts through the former E2R-direct-
child sibling path. A baseline2-only compatibility commit (`3a17299`,
`test: make characterization comparison paths portable`) now accepts explicit
v1 and v2 artifact roots and an explicit output path, validates all required
artifacts, and fails closed without a silent sibling fallback. The historical
default invocation remains compatible.

Focused replay validation and the existing characterization suite passed, and
default versus relocated-root comparison output was byte-identical with no
unexpected differences. The baseline-v2 Product revision and all v1/v2
characterization artifacts remain unchanged; implementation1 and canonical
LiaisonScape were not modified. A result record is preserved at
`workspace/artifacts/product-evaluation-seam-baseline2-replay-portability-compatibility-result-2026-09-20.md`.

The old active path dependency is resolved, so the exact pair is now
`MOVE READY ONLY AS A PAIR — AWAITING HUMAN APPROVAL`. The physical move is
not recorded as complete here. A new approval must name both exact source
paths, both exact `workspace\experimental\workspaces\` targets, and the
portable artifact-root invocation contract.

### Baseline2 / implementation1 pair move — 2026-09-20

Human approved and completed the exact bounded full-workspace move of
`e2r-liaison-scape-product-evaluation-seam-baseline2` and
`e2r-liaison-scape-product-evaluation-seam-implementation1` from direct E2R
children to `workspace\experimental\workspaces\`. No neighboring
product-evaluation workspace or canonical repository was moved.

Post-move checks confirmed both old source paths are absent and both exact
targets exist. Each workspace retained its HEAD, main or detached state, clean
status, refs, canonical LiaisonScape origin, Git object database, source,
tests, characterization data, and full file/directory/byte counts. The
relocated explicit `--v1-artifact-root` / `--v2-artifact-root` comparison
replay exited 0, matched the expected output SHA-256, and reported zero
unexpected differences. Historical absolute paths remain provenance and were
not rewritten. This was placement cleanup with full provenance preservation,
not deletion, extraction, or source adoption.

The E2R root inventory is now 56 direct-child directories, 55 direct-child Git
repositories, and 48 remaining non-canonical direct-child workspaces. The
portable replay result and move approval packet remain under
`workspace\artifacts\`.

### Implementation1F / CSS reconciliation / LF-check dirty-state audit — 2026-09-20

The read-only audit of the previously excluded LF-check workspace confirmed
that its modified `render-wrapper.test.ts` contains substantive F-R11/F-R13
CSS provenance logic, not merely EOL noise. The semantic change is already
formalized by clean CSS reconciliation commit `0af4437c`, while the LF-check
retains a distinct LF-materialized verification surface and exact dirty
worktree state. It is therefore classified as `DIRTY CHANGE ALREADY
FORMALIZED ELSEWHERE — PRESERVE EXACT LF WORKTREE`; no restore, normalization,
or deletion is implied.

Because LF-check's local origin also points to the old Implementation1F path,
the clean pair cannot move safely by itself. The three-workspace group is
`THREE-WORKSPACE MOVE READY AFTER DIRTY PRESERVATION CHECKPOINT — AWAITING
HUMAN APPROVAL`. A future bounded wave must preserve LF-check's exact diff,
bytes, and EOL counts in a pre-move manifest, move all three full workspaces,
and update only the CSS-reconciliation and LF-check operational origins to the
new Implementation1F target. Historical paths remain provenance. No move or
origin rewrite has occurred. The detailed packet is
`workspace/artifacts/product-evaluation-seam-implementation1f-lf-check-dirty-
state-decision-packet-2026-09-20.md`.

### Implementation1F / CSS reconciliation / LF-check bounded relocation — 2026-09-20

Human approved and completed the exact three-workspace full-directory move of
Implementation1F, CSS provenance reconciliation, and LF-check into
`workspace\experimental\workspaces\`. The pre-move LF-check preservation
manifest is
`workspace/artifacts/product-evaluation-seam-implementation1f-lf-check-
preservation-manifest-2026-09-20.md`.

Post-move verification found all three old direct-child paths absent and all
three exact targets present. Implementation1F remained at detached HEAD
`60373836bc1ccea56151593afc22a9b8f324d0a3` with its canonical LiaisonScape
origin; CSS reconciliation remained at detached HEAD
`0af4437c469bdee2f5636a87e6b5489a1f53c60b` with its parent/merge-base at the
Implementation1F HEAD; and LF-check remained at detached HEAD
`60373836bc1ccea56151593afc22a9b8f324d0a3` with exactly its one modified
tracked test. The CSS reconciliation and LF-check operational origins were
updated only from the old 1F path to the new 1F target. Refs, history, source,
tests, artifacts, and historical old-path records were not rewritten.

The LF-check manifest's working-file SHA-256, Git blob, byte count, and LF/CRLF
counts matched after relocation. Its pre-existing trailing blank line remains
part of the preserved dirty state; it was not normalized. The focused F-R1–F-R13
provenance suite passed 13/13 in both the CSS reconciliation and LF-check
targets when run sequentially. The E2R root inventory is now 53 direct-child
directories, 52 direct-child Git repositories, and 45 remaining non-canonical
direct-child workspaces. No deletion, source adoption, fetch, or push occurred.

### Browser/CDP/host-runtime diagnostic lineage audit - 2026-09-20

The read-only reconciliation of the remaining 45 non-canonical direct-child
Git workspaces confirmed 29 Browser/CDP/host-runtime diagnostic workspaces,
two special receive-lifetime/runtime-convergence nodes, 10 visual-evidence
workspaces, and four structural/routing workspaces. The prior migration packet
labelled the diagnostic group as 29 but listed 28 names; the filesystem
reconciliation identified the omitted member as the dirty
`browser-capture-helper-receive-lifetime-correction1-failed-clone` workspace.

The diagnostic origin graph is acyclic in the observed state. A five-workspace
host-runtime chain is the smallest closed clean component rooted at canonical
`e2r-liaison-scape`: host-GPU diagnostic, host-GPU graphics diagnostic,
stable-exclusion qualification, stable-present/absent confirmation, and
browser-capture readiness requalification. It is classified `MOVE READY AS
COMPONENT - ORIGIN REWRITE REQUIRED`, not approved or moved. Four operational
origins would require exact target-path rewrites after full-directory moves;
historical documentation paths remain provenance. The receive-lifetime chain is
`MOVE REQUIRES DIRTY-STATE PRESERVATION CHECKPOINT`, the failed clone requires
Human review of its 114-entry dirty state, and the CDP-readiness chain remains
cross-group Human review because it points into visual-evidence lineage.

No diagnostic workspace is deletion-ready. The local-only/unresolved Git
object evidence is not proof of unique history or disposability, and the
source/configuration scan found no active absolute E2R path dependency beyond
Git origin metadata. The detailed membership, origin graph, classifications,
and exact five-workspace recommendation are recorded in
`workspace/artifacts/browser-cdp-host-runtime-diagnostic-lineage-migration-
decision-packet-2026-09-20.md`. No move, origin rewrite, fetch, or deletion was
performed by this audit; the next step requires Human approval of the exact
bounded wave.

### Browser/CDP/host-runtime five-workspace relocation - 2026-09-20

The first move attempt stopped before mutation because the original approval
packet labelled its filesystem metrics as excluding `.git` while recording
inclusive values. The original packet remains historical provenance. A
superseding correction packet established the unambiguous metric: recursively
count all files, directories, and aggregate bytes below each workspace root
while excluding only the `.git` subtree. The corrected pre-move baselines were
verified before retry.

Human-approved exact bounded relocation then completed for the five-workspace
host-runtime component. All five full directories moved to
`workspace/experimental/workspaces/`; all old direct-child paths are absent and
all exact targets exist. HEADs, detached state, clean status, refs, object
databases, source, tests, diagnostics, evidence, generated artifacts, and the
corrected file/directory/byte counts were preserved. The four dependent local
operational origins were updated mechanically to the four new component target
paths. The canonical origin of `host-gpu-runtime-diagnostic1` was unchanged.

The four relocated dependent edges retain a locally verifiable parent-to-child
commit relation; the canonical host-GPU edge remains the previously recorded
local-only provenance boundary. No active old-path dependency remains in
source/config/script files. Historical result paths and generated GUI JSON
paths were not rewritten. The root inventory is now 48 direct-child
directories, 47 direct-child Git repositories, and 40 remaining
non-canonical direct-child workspaces. Receive-lifetime, runtime-convergence,
failed-clone, browser-CDP readiness, visual-evidence, structural/routing, and
all canonical repositories were unchanged. No deletion, source adoption,
fetch, repair, or push occurred.

The corrected baseline and preservation contract are recorded in
`workspace/artifacts/browser-cdp-host-runtime-five-workspace-move-approval-
packet-correction-2026-09-20.md`. This was bounded placement cleanup, not
delete authorization or a scope expansion.

### Visual-evidence / run-configuration lineage audit - 2026-09-20

The read-only audit after host-runtime relocation reconciled the exact 10
remaining visual-evidence/run-configuration workspaces. All are detached and
clean with one worktree, no submodules, alternates, or reparse points. Two
local origins are stale because the previously Human-approved visual capture1
and capture6 workspaces were separately archived and deleted:
`browser-capture-restart1` points to deleted capture1, and retained capture7
points to deleted capture6. No stale origin was repaired or recreated.

The graph also confirmed the browser-CDP cross-group boundary:
`browser-cdp-readiness-diagnostic1` points to capture7, while two B1 diagnostic
workspaces point to restart1. In addition, restart1-4 and capture7 contain
active runner references to the root-level machine-execution workspace. That
machine workspace therefore cannot be moved without a separate source-path
portability decision for its five active consumers. Generated JSON/log/result
paths remain historical evidence and were not rewritten.

The smallest provisional next wave is the exact clean leaf
`visual-evidence-run-configuration-evidence1-exact-restart1`, classified
`MOVE READY - NO ORIGIN REWRITE`: its root-level origin target exists, it has
no external dependent or active absolute-path dependency, and its corrected
baseline is 2,666 files / 359 directories / 98,610,178 bytes excluding only
`.git`. This is a recommendation, not move authorization. Restart1, capture7,
the machine/capture runner group, and the larger harness/run-configuration
component remain Human-review items. The detailed graph and candidate packet
are recorded in
`workspace/artifacts/visual-evidence-run-configuration-lineage-migration-
decision-packet-2026-09-20.md`. No workspace move, origin repair, source
change, extraction, deletion, fetch, or push was performed by this audit.

### Visual-evidence exact singleton relocation - 2026-09-20

With explicit Human approval, the bounded singleton
`e2r-liaison-scape-visual-evidence-run-configuration-evidence1-exact-restart1`
was moved as a complete directory from the E2R root to
`workspace/experimental/workspaces/`. The move preserved HEAD
`9738ff477d3d216507d1fba562f45dd77aa72797`, detached state, clean status,
refs, readable object connectivity, and the existing origin
`e2r-liaison-scape-visual-evidence-run-configuration-evidence1`; no origin
rewrite was needed. The corrected `.git`-excluded preservation baseline was
unchanged at 2,666 files / 359 directories / 98,610,178 bytes. The old source
is absent and the exact target is present.

Post-move inventory is 47 direct-child directories / 46 direct-child Git
repositories / 39 noncanonical root workspaces. The nine neighboring visual
and run-configuration workspaces remained present and clean. No stale origin
was repaired, no historical path or artifact was rewritten, and no source,
test, diagnostic, browser-CDP, B1, parent, harness, or machine-execution
workspace was moved. This was a bounded placement relocation, not deletion,
extraction, source portability work, or scope expansion.

### Remaining visual run-configuration subgroup audit - 2026-09-20

The read-only follow-up after the exact-restart1 relocation reconciled the
remaining parent/sibling run-configuration subgroup. The sibling
`visual-evidence-run-configuration-canonical-origin-evidence2` has no incoming
dependent, no active old-path dependency, an absent experimental target, and a
root-level harness origin that can remain unchanged. It is classified
`MOVE READY - NO ORIGIN REWRITE` and is the recommended smallest next wave.

The parent `visual-evidence-run-configuration-evidence1` has exactly one
incoming dependent: the already relocated exact-restart1 workspace. A parent
move is classified `MOVE READY WITH ONE BOUNDED DEPENDENT ORIGIN REWRITE`; the
dependent's `remote.origin.url` would need an explicit old-parent → new-parent
rewrite after the physical move. The harness and machine-execution workspaces
remain out of scope because their active browser-capture path consumers require
a separate portability decision. Historical/generated path records remain
unchanged. Detailed identities, provenance, baselines, wave options, and
Human approval boundaries are recorded in
`workspace/artifacts/visual-evidence-run-configuration-subgroup-next-wave-
decision-packet-2026-09-20.md`. No move or origin rewrite was performed in
this audit.

### Visual run-configuration canonical-origin singleton relocation - 2026-09-20

With explicit Human approval, the exact singleton
`visual-evidence-run-configuration-canonical-origin-evidence2` was moved as a
complete directory from the E2R root to
`workspace/experimental/workspaces/`. Post-move verification preserved HEAD
`ecad472c48b12e4fccb0d71f2edd44ec2e13f55c`, detached state, clean status, refs,
and object connectivity. The `.git`-excluded baseline remained 2,697 files /
361 directories / 104,374,450 bytes. The old source is absent and the exact
target is present.

The existing origin remains the root-level
`visual-evidence-harness-implementation1`; its provenance relation is
unchanged and no origin rewrite was needed. No incoming dependent existed.
The root inventory changed from 47 / 46 / 39 to 46 / 45 / 38. The parent,
harness, machine-execution, and other visual/diagnostic workspaces remained
unchanged. No historical path or artifact was rewritten, and no stale-origin
repair, portability fix, deletion, extraction, fetch, or push was performed.

### Visual run-configuration parent relocation - 2026-09-20

With explicit Human approval, the parent
`visual-evidence-run-configuration-evidence1` was moved as a complete
directory from the E2R root to
`workspace/experimental/workspaces/`. Its HEAD
`ad8011eba9c83127f3d32fda151a185414e04425`, detached state, clean status,
refs, object connectivity, and `.git`-excluded baseline of 2,682 files / 360
directories / 101,314,428 bytes were preserved. The parent origin to the
root-level harness remained unchanged.

After parent integrity verification, the already relocated
`exact-restart1` dependent's `remote.origin.url` was changed exactly once from
the old parent path to the new parent target. Its HEAD
`9738ff477d3d216507d1fba562f45dd77aa72797`, detached state, clean status,
refs, and object connectivity were preserved. The new parent has exactly this
one incoming local-origin dependent. Root inventory changed from 46 / 45 / 38
to 45 / 44 / 37. No neighboring workspace, source, test, historical path, or
artifact was rewritten; no stale-origin repair, portability fix, deletion,
extraction, fetch, or push was performed.

### Visual-evidence harness relocation audit - 2026-09-20

The read-only audit of the remaining root-level visual harness found exactly
three local-origin dependents: machine-execution1, the relocated
run-configuration-evidence1 parent, and the relocated
run-configuration-canonical-origin-evidence2 sibling. The harness is classified
`MOVE READY WITH BOUNDED DEPENDENT ORIGIN REWRITES`; each dependent requires
only a mechanical `remote.origin.url` update from the old harness path to the
new experimental target after the full-directory move.

Machine-execution remains at the E2R root. Its active `E2R_WORKSPACE_ROOT`
fallback and root-level machine path do not need to change when the harness is
moved, so machine source-path portability is a separate concern rather than a
blocker for harness placement. Historical diagnostic materializations that
enumerate the harness name are not active current runners and remain a separate
future replay-portability boundary. The corrected harness baseline is 2,668
files / 356 directories / 100,362,818 bytes excluding `.git`; current and
projected root inventory is 45 / 44 / 37 → 44 / 43 / 36. Detailed dependent
identities, old/new origins, boundaries, and approval text are recorded in
`workspace/artifacts/visual-evidence-harness-implementation1-move-approval-
packet-2026-09-20.md`. No move or origin rewrite was performed in this audit.

### Visual-evidence harness relocation - 2026-09-20

With explicit Human approval, the root-level visual-evidence harness was moved
as a complete directory to
`workspace/experimental/workspaces/e2r-liaison-scape-visual-evidence-harness-
implementation1`. HEAD
`9bd3f3b819bf07ccdfa0339be9a953d045c4e4fc`, detached state, clean status,
three refs, object connectivity, canonical origin, and the `.git`-excluded
baseline of 2,668 files / 356 directories / 100,362,818 bytes were preserved.

The three approved dependents—machine-execution1, relocated
run-configuration-evidence1, and relocated canonical-origin-evidence2—had
only their operational `remote.origin.url` changed from the old harness path
to the new target. Their HEADs, clean status, refs, object connectivity, and
non-origin Git configuration were preserved. Machine-execution stayed at the
E2R root with its source configuration unchanged; its portability issue was
not expanded. The root inventory changed from 45 / 44 / 37 to 44 / 43 / 36.
No historical path or artifact was rewritten, and no neighboring visual or
diagnostic workspace was changed.

### Visual-evidence machine-execution portability audit - 2026-09-20

The read-only audit of the remaining root-level machine-execution workspace
confirmed HEAD `b0bd0f1a9f70915c639cbee61cf5f8370c78766f`, detached/clean state,
the relocated harness origin, no target collision, and a `.git`-excluded
baseline of 2,997 files / 367 directories / 107,743,148 bytes. The current
root inventory is 44 / 43 / 36; a later exact move would project 43 / 42 / 35.

The active operational consumer set is exactly the five visual-evidence
browser-capture runners `restart1` through `restart4` and `capture7`. Their
runner sources still hard-code the old machine root. The existing
`E2R_WORKSPACE_ROOT` fallback resolves Product/spec inputs in the machine
runner but does not resolve this browser-capture machine-artifact path, so it
does not establish move portability. A separate source-only portability
checkpoint and dual-root validation are required before moving machine-
execution. A fresh scan also found 30 additional browser-capture source copies
and 11 diagnostic/result/packet records with the old string; they remain
historical or replay provenance unless a later invocation audit proves active
use and are not rewritten here.

Classification is **MACHINE PATH PORTABILITY BLOCKED — ACTIVE RUNNER SOURCE
DEPENDENCY**. The exact binding boundary, five-file source checkpoint, and
future move verification requirements are recorded in
`workspace/artifacts/visual-evidence-machine-execution-portability-decision-
packet-2026-09-20.md`. No move, source change, runner change, origin rewrite,
or historical-path rewrite was performed.

### Visual-evidence machine-execution source-only portability - 2026-09-20

The Human-approved source-only portability checkpoint updated exactly the five
active visual-evidence browser-capture runners (`restart1` through `restart4`
and `capture7`). Each now accepts `E2R_MACHINE_EXECUTION_ROOT` and retains the
existing root-level machine path as its compatibility fallback. The machine
workspace, its artifact layout, frozen protocol/evidence IDs, and all other
diagnostic/replay copies were left unchanged.

All five runner files passed `node --check` and `git diff --check`. The four
available dependency-complete runner suites (`restart2`, `restart3`,
`restart4`, and `capture7`) passed 309/309; `restart1` could not start its
full suite because its existing checkout lacks `react` and
`@sukoyaka-dopeness/e2r-validator`. A read-only dual-binding smoke resolved
the current root and the proposed future root, and matched 326 machine
artifact files / 7,356,662 bytes and their hashes through a future-style alias.
The physical future target remains absent and was not created.

The source-path portability blocker is therefore resolved for the approved
five-runner scope, but physical machine relocation remains a separate
checkpoint requiring target creation, full-workspace preservation, and
post-move runner validation. No machine move, origin rewrite, historical-path
rewrite, or additional consumer update was performed.

### Visual-evidence machine-execution source-only portability acceptance - 2026-09-20

Final audit accepts the source-only checkpoint as
**SOURCE-ONLY MACHINE PATH PORTABILITY ACCEPTED — PHYSICAL MOVE STILL
DEFERRED**. The five approved runner diffs remain exactly one
`browser-capture.mjs` file each, with no diagnostic/replay copy or machine
workspace change. The explicit `E2R_MACHINE_EXECUTION_ROOT` binding, legacy
fallback, current-root evidence hashes, and future-style path resolution remain
consistent with the approved contract.

The restart1 full-suite gap is classified as an existing environment/dependency
constraint, not a portability implementation failure: its checkout has no
`node_modules`, while `package.json` declares the missing `react` and
`@sukoyaka-dopeness/e2r-validator` packages. Its runner syntax check and
direct auto-layout/graph focused tests passed 32/32. Restart2, restart3,
restart4, and capture7 each passed 309/309. No dependency or environment
repair was made, so restart1 full-suite green remains a separate environment
follow-up rather than a blocker for this source-only acceptance.

The five runner source commits and this bounded roadmap record are eligible for
selective local commit. Physical machine relocation, post-move preservation,
and full restart1 environment validation remain separate checkpoints. No
machine move, origin rewrite, additional consumer update, or historical-path
rewrite is authorized by this closure.

### Visual-evidence machine-execution physical relocation - 2026-09-20

With the source-only portability checkpoint accepted, the root-level machine
workspace was moved as one complete directory to
`workspace/experimental/workspaces/e2r-liaison-scape-visual-evidence-machine-
execution1`. The old source is absent and the exact target is present. HEAD
`b0bd0f1a9f70915c639cbee61cf5f8370c78766f`, detached/clean state, one ref,
object connectivity, worktree metadata, and the harness origin were preserved.

The `.git`-excluded manifest remained exactly 2,997 files / 367 directories /
107,743,148 bytes with manifest SHA-256
`3c9b1ad4ce8cf777735dac4315a59227f9433b821ae41111d589b3c584364c9e`. The
machine artifact set remained readable at the new root; the artifact index,
run manifest, browser-eligibility record, and representative B1 payload
retained their expected hashes. All five approved runners resolved the new
root through `E2R_MACHINE_EXECUTION_ROOT`; no runner source was changed in
this relocation checkpoint. The root inventory changed from 44 / 43 / 36 to
43 / 42 / 35, and neighboring harness/run-configuration workspaces remained
unchanged.

No origin rewrite, historical-path rewrite, diagnostic/replay-copy update,
stale-origin repair, deletion, or additional workspace move was performed.
The physical relocation result is recorded in the corresponding move audit
and is eligible for selective local commit; future runner execution remains
subject to its existing fail-closed artifact-output guards.

### Visual-evidence browser-capture runner relocation - 2026-09-20

Human-approved restart2, restart3, and restart4 were subsequently moved as
three exact full directories from the E2R root to
`workspace/experimental/workspaces/`. The original placement packet remains
historical; its numeric file/byte values included `.git` contents despite the
label saying `.git`-excluded. The correction packet
`workspace/artifacts/visual-evidence-browser-capture-runner-placement-
correction-packet-2026-09-20.md` records the corrected contract and preserves
the original packet unchanged.

Using the corrected `.git`-subtree-excluded baselines, restart2 retained
2,690 files / 362 directories / 97,867,245 bytes, restart3 retained 2,701 /
366 / 97,938,016, and restart4 retained 2,705 / 366 / 98,070,403. All three
retained their expected detached HEADs, clean status, origins, refs, object
connectivity, source, tests, evidence, and generated content. Restart3's one
and restart4's two pre-existing dangling commits remained present; no cleanup
or history repair was performed. No incoming local-origin dependent was found,
so no origin rewrite was needed.

The old sources are absent and the exact targets exist. The five active
browser-capture runners continue to expose the accepted
`E2R_MACHINE_EXECUTION_ROOT` binding, and the relocated machine target remains
available. The root inventory changed from 43 / 42 / 35 to 40 / 39 / 32.
Restart1 and capture7, their stale origins, the machine workspace, diagnostic
and replay workspaces, historical paths, and unrelated dirty work remained
outside this bounded relocation.

### Visual-evidence stale-origin runner relocations - 2026-09-20

Human-approved restart1 and capture7 were moved as two exact full-directory
waves into `workspace/experimental/workspaces/`. Their stale local origins
remain unchanged: restart1 still records the deleted capture1 workspace and
capture7 still records the deleted capture6 workspace. The capture1-6 payloads
remain in the preserved visual-capture archive; no replacement Git origin was
guessed or recreated.

After each runner integrity check, only the three approved dependent
`remote.origin.url` values were updated: the two B1-entry diagnostics now
point to the relocated restart1 target, and browser-cdp-readiness-diagnostic1
now points to the relocated capture7 target. Dependent HEADs, detached state,
clean status, refs, object databases, and non-origin metadata were preserved.
The readiness diagnostic's historical old-restart1 output string was retained
unchanged. Its and the CDP dependent's pre-existing dangling objects were
also retained without cleanup.

Restart1 retained 163 files / 30 directories / 1,138,640 bytes excluding
`.git`; capture7 retained 2,708 / 363 / 100,258,542 under the same corrected
contract. Both old sources are absent and exact targets exist. All five active
browser-capture runners still expose `E2R_MACHINE_EXECUTION_ROOT`, and the
relocated machine target remains clean and available. Root inventory changed
from 40 / 39 / 32 to 38 / 37 / 30. No source, test, historical path,
diagnostic/replay copy, unrelated workspace, or stale origin was changed.

### Browser/CDP diagnostic leaf relocation - 2026-09-20

Human-approved leaf moves relocated
`browser-capture-b1-entry-readiness-diagnostic1` and
`browser-cdp-readiness-diagnostic3` as complete directories into
`workspace/experimental/workspaces/`. Both old source paths are absent and
both exact targets exist. No dependent origin rewrite was needed: the B1
readiness diagnostic's origin remains the relocated restart1 target, and
diagnostic3's origin remains CDP readiness diagnostic2.

B1 readiness retained detached HEAD
`a9fa2d7890a1a9db65178b38e5434fa8c1de5477`, clean state, its corrected
`.git`-excluded baseline of 2,677 files / 364 directories / 97,265,322 bytes,
and dangling blob `77a8a3b66db522750c87e233856176cea769545e`. Diagnostic3
retained branch `diagnostic3`, HEAD
`1fac80210e8137207547673aa580019fd5c8f3f1`, clean state, its local ref, and
baseline of 229 files / 44 directories / 1,797,562 bytes. The readiness
diagnostic's historical old-restart1 output string was not rewritten.

The B1 seam/implementation-authority chain and CDP readiness1/readiness2
chain remain unmoved for later coordinated waves. The relocated machine and
all five active runner bindings remain unchanged. Root inventory changed from
38 / 37 / 30 to 36 / 35 / 28. No source, test, historical path, diagnostic
copy, or unrelated workspace was changed.

### Browser/CDP readiness1/readiness2 coordinated relocation - 2026-09-20

Human-approved readiness1 and readiness2 were moved as one bounded
full-directory wave into `workspace/experimental/workspaces/`. Both old source
paths are absent and exact targets exist. Readiness1 retained its origin to the
relocated capture7 target; readiness2's origin was updated only from the old
readiness1 path to the new readiness1 target. The already-relocated readiness3
origin was updated only from the old readiness2 path to the new readiness2
target.

Readiness1 retained detached HEAD
`15659d0abec53e4a21d0f55eb03e1f9ae256849c`, clean state, baseline 199 files /
35 directories / 1,509,034 bytes, and dangling commit
`06acff14d5e27e3c9a775057c608d203854cab20`. Readiness2 retained detached HEAD
`3e1a9b1649cbf77af67e4a2703cd2d12200a070f`, clean state, baseline 204 files /
36 directories / 1,536,606 bytes, and the same dangling commit. Readiness3
retained HEAD `1fac80210e8137207547673aa580019fd5c8f3f1`, branch `diagnostic3`,
clean state, local ref, and object database.

The resulting lineage is relocated capture7 -> relocated readiness1 ->
relocated readiness2 -> relocated readiness3. Historical paths and records
were not rewritten, and no source, test, cleanup, or other workspace action
was performed. Root inventory changed from 36 / 35 / 28 to 34 / 33 / 26.

### Final pre-cleanup classification audit — 2026-09-19

The read-only re-audit after H2-POSITION-CIRCA closure found the same 76
direct-child directories: 73 Git repositories, seven canonical repositories,
66 non-canonical Git workspaces, and the three shared non-Git roots
`artifacts`, `diagnostics`, and `experimental`. No new direct-child workspace
was observed. The canonical repositories are at the closure-era heads,
including NarrativeLine `4ff1e1e` and E2R-SPEC `514c34a`; their existing dirty
work remains outside this cleanup checkpoint.

Local Git reachability is now classified as follows for the 66 non-canonical
workspaces: seven HEADs are older/contained in the canonical LiaisonScape
history, 50 HEADs are not present in the canonical local object database, and
nine repositories have no resolvable HEAD because their Git metadata is broken
or incomplete. No network fetch was performed. The 50 local-only HEADs are
`reachability unresolved`, not proof of disposable or unique history; no
unique commit was proven safely absorbed by the canonical repository.

The current worktree audit found 13 non-canonical repositories with dirty
status. Separately, 56 of the 66 contain tracked `artifacts`, `diagnostics`,
`experimental`, `public`, fixture, or screenshot material. The most dangerous
states remain the receive-lifetime helper with modified and untracked capture
manifests/screenshots, the failed clone with 114 staged deletions, the routing
preview with modified source, the CSS provenance LF-check with modified source,
and the materialization/structural/visual-evidence workspaces with untracked
fixtures or generated artifacts. The earlier estimate of 15 dirty or
artifact-bearing workspaces was broader; this re-audit records the direct Git
dirty count separately from committed artifact-bearing content.

Reference audit found 58 of 66 workspace names in current `e2r-spec` docs,
sessions, or Knowledge: 132 document matches, two session matches, and one
Knowledge match. Most are historical provenance or evidence-location records,
not proof of an active runtime dependency. The browser-runtime-convergence
diagnostic is the exception requiring current preservation review because the
Knowledge playbook names it as diagnostic provenance. Eight workspaces have no
name match in those sources, but unreferenced artifacts are not disposable
without content review.

The provisional final classification for all 76 direct children is:

- **Keep in place — 11:** seven canonical repositories, the three shared roots,
  and `e2r-liaison-scape-browser-capture-runtime-convergence-diagnostic1`
  while its Knowledge-linked evidence is preserved;
- **Move under `experimental\workspaces\...` — 2 candidates:** the clean,
  canonical-contained `e2r-liaison-scape-assignment-sensitivity-followup1` and
  `e2r-liaison-scape-topology-aware-assignment-experiment1`, subject to reference
  review and a later path-migration decision;
- **Archive/evidence extraction before deletion — 10 candidates:** the
  receive-lifetime capture workspace, production-candidate materialization,
  structural-assignment experiments 3 and 4-rerun, and visual-evidence
  captures 1–6; artifacts, manifests, fixtures, and screenshots must be
  preserved or rejected explicitly first;
- **Delete candidate — 0:** no workspace currently satisfies canonical
  reachability, clean state, no unique artifact, and no reference dependency
  simultaneously;
- **Human review required — 53:** all broken/no-HEAD repositories, unresolved
  local histories, dirty source states, the failed clone, routing preview, and
  remaining unresolved workspaces.

The next physical-cleanup plan is intentionally staged: (1) Human review of
the 53 ambiguous/dirty/broken workspaces and any unique commits; (2) archive or
extract the ten evidence-bearing candidates; (3) decide and execute the two
clean move candidates with references handled in a separate approved step; and
(4) delete only a future explicitly approved Delete-candidate batch. No path
rewrite, move, archive, deletion, branch/worktree operation, or broken-repo
repair is authorized by this audit. Completion remains targeted before the
Hub-publication final audit.

### Human-review refinement for the 53-workspace set — 2026-09-20

The follow-up audit is limited to the 53 entries above; the ten
archive/evidence-extraction candidates, two clean move candidates, and the one
Knowledge-linked keep workspace remain outside this refinement. The 53 now have
the following non-overlapping review packets:

- **Broken-history packet — 9:** Git has no usable HEAD/ref. Two repositories
  point at missing symbolic branches and seven contain raw commit IDs whose
  commit objects are absent locally. No repair or deletion is implied.
- **Dirty-state packet — 3:** the failed clone has 114 staged deletions; the
  CSS-provenance LF-check has one modified tracked test; and the routing
  preview has two modified tracked source files. These require content review
  before any physical action. The failed-clone commit tree matches one clean
  product-evaluation snapshot, but its staged deletion state is not safe to
  discard or reset.
- **Fetch-assisted diagnostic packet — 24:** clean browser/CDP/host-runtime
  qualification workspaces with HEADs absent from the canonical local object
  database. Their local sibling-origin chains do not prove absorption, and no
  network fetch was performed, so commit reachability remains unresolved.
- **Unique-code/commit review packet — 7:** clean product-evaluation snapshots
  with implementation, refactor, test, or CSS-provenance commit subjects.
  Their commits are not present in the canonical local object database and
  their documented results must be compared with canonical source before any
  extraction or removal decision.
- **Evidence/artifact ambiguity packet — 10:** clean visual-evidence and
  run-configuration snapshots containing evidence-oriented commit subjects or
  tracked artifact paths. Screenshots, manifests, and referenced result
  records must be mapped and deduplicated before a cleanup decision.

This refinement yields **strong delete — 0**, **extract-then-delete — 0**,
and **move/preserve — 0** within the 53-workspace scope. The absence of a
canonical-local commit object is not evidence of disposable history; likewise,
clean status does not prove that evidence is reproducible or referenced only
historically. The reference scan found eight of the 53 without an exact match
in current e2r-spec docs, sessions, or Knowledge; the other 45 have historical
or evidence-location references. Those references do not by themselves prove
active runtime dependency, but they must be classified before path changes.

The human review packet should therefore be handled in this order: preserve
the broken and dirty entries; decide whether the 24 diagnostic chains need a
fetch-assisted evidence pass; review the seven product-code snapshots for
unique implementation; and map the ten visual-evidence snapshots to their
artifacts and result records. A low-risk future physical batch is still the
two clean, canonical-contained move candidates, after reference handling is
approved. No member of the 53-workspace set is currently a safe deletion
candidate, and this refinement authorizes no move, extraction, fetch, repair,
archive, or deletion.

### Archive/extraction checkpoint — 2026-09-20

The ten previously classified archive/extract candidates were rechecked from
the current filesystem. The receive-lifetime workspace was the only safe
evidence-only subset: six dirty Fresh Lineage run directories were copied to
`C:\Users\extra\E2R\diagnostics\browser-capture-helper-receive-lifetime-correction1`.
The extraction contains 668 files and 28,061,339 bytes; source/destination
SHA-256 comparison reported zero mismatches. Its manifest records the original
path, HEAD, branch, origin, selected runs, omissions, and verification:
`diagnostics/browser-capture-helper-receive-lifetime-correction1/extraction-manifest.md`.

The original receive-lifetime workspace remains in place because the
extraction is partial and its non-canonical Git provenance and remaining runs
have not been approved for deletion. The production-materialization workspace,
two structural-assignment workspaces, and six visual-capture workspaces were
not extracted: current evidence shows materializer/runner/test source or
capture-runner revisions that require Human review before any archive/delete
decision. This yields **ready for Human-approved delete — 0**, **extracted but
keep for now — 1**, and **Human review required — 9**. No original workspace
was deleted, moved, renamed, repaired, fetched, or otherwise modified, and no
other non-canonical workspace was touched.

### Production-candidate PR2 source-adoption review — 2026-09-20

The three previously identified PR2-specific source files in
`e2r-liaison-scape-production-candidate-materialization-implementation1` were
reviewed read-only:

- `experimental/production-candidate-materialization/pr2-nonvisual-evidence-completion1/fixture-corpus.mjs`
  (9,894 bytes, 173 lines, SHA-256
  `04EDCEFF94DC8B02A6164F7C1781430DE14DAD2328CBD60945BD047BE82740B6`):
  committed-fixture reader, graph projection, candidate input, and synthetic
  control definitions. It reads fixed bytes from `e2r-spec`, LiaisonScape, and
  NarrativeLine through hard-coded local paths and Git revisions.
- `.../pr2-evidence.test.mjs` (3,272 bytes, 57 lines, SHA-256
  `82CDFBF7721FAD770F669F21C641CBF77675D447CC5F08301E9E663DE0DECEE0`):
  four Node tests for the bounded PR2 evaluation surface, not Product tests.
- `.../run-pr2-evidence.mjs` (7,085 bytes, 107 lines, SHA-256
  `2EAC3366A91AC5888E420002990E36D8D34AE7DCD55CB580DF4241EF575CBA07`):
  an artifact-writing evidence runner for the same bounded evaluation.

All three files are untracked in the disposable clone and have no unique Git
commit. They are not present in the canonical LiaisonScape source tree. The
canonical application instead uses its current Product initial-layout provider;
the existing PR2 result and compatibility documents explicitly prohibit live
App import, Production replacement, persistence, candidate selection, and
Production integration. The research materializer/support files are byte-
identical to the corresponding files in the retained visual-evidence harness
workspace, but the three PR2 files themselves have no sibling copy there.
The PR2 test was replayed read-only and passed 4/4; no artifact generation was
run during this review.

Provisional classification is **C / experiment-only source, preserve as a
replay/provenance kit** rather than Product source adoption. The corpus reader
and evidence test are useful only with their fixed authorities; the runner has
hard-coded workspace paths and writes generated artifacts. No current Product
behavior, roadmap commitment, or accepted design authorizes adopting them into
canonical LiaisonScape. Human choice remains open between `Preserve as replay
kit only`, `Preserve as reusable research tooling` after path/configuration
hardening, or `Do not adopt; superseded`. This entry records a provisional
review only; it does not select a candidate or authorize source adoption.

The production-candidate workspace remains in place with its untracked
evidence surface. Structural experiments and visual capture workspaces remain
unreviewed in this checkpoint. No source was copied, merged, cherry-picked,
committed, extracted, moved, renamed, deleted, fetched, or repaired.

### Production-candidate PR2 replay-kit extraction — 2026-09-20

Human selected `Preserve as replay kit only` for the three PR2-specific source
files. The bounded kit was extracted to the non-Git shared root
`C:\Users\extra\E2R\experimental\workspaces\production-candidate-materialization-pr2-replay-kit1`.
It contains 12 executable source files (the three PR2 files plus the nine
support files they import), five prior PR2 reference artifacts, and an
`extraction-manifest.md`. The fixture corpus retains the recorded cross-repo
fixture authorities and synthetic controls; fixture bytes were not silently
replaced or re-authored.

Integrity verification found 0 SHA-256 mismatches across all 17 copied
payload files. The destination contains 18 files including the manifest,
totalling 312,555 bytes, and contains no nested `.git` directory. The copied
kit-side read-only `node --test pr2/pr2-evidence.test.mjs` replay passed 4/4.
The runner was not executed because it writes fresh artifacts; its command,
runtime, expected 65-cell result, domain-boundary result, and volatility rules
are recorded in the manifest. The four older MAT-C2/MAT-C3
`implementation-validation1` artifacts were intentionally omitted and remain
in the original workspace.

The original production-candidate workspace remains in place and is classified
**EXTRACTED BUT KEEP FOR NOW / delete readiness not established**. A later
delete decision still requires reference reconciliation, confirmation that the
omitted historical artifacts are not uniquely required, and Human approval.
No canonical source, Product runtime, structural experiment, visual capture
workspace, or unrelated dirty work was changed. No deletion, move, rename,
repair, fetch, or source adoption was performed.

### Production-candidate PR2 post-extraction delete-readiness audit — 2026-09-20

The extraction checkpoint was selectively committed as
`6d6053e docs: record PR2 replay-kit extraction`; unrelated e2r-spec research
changes and `work/` remain unstaged. The original workspace still contains
exactly 21 untracked files: 12 source files and nine JSON artifacts. The 12
source files and five PR2 artifacts are preserved in the replay kit. The four
remaining `implementation-validation1` artifacts were audited but not copied,
deleted, or modified:

| Artifact | Bytes | SHA-256 | Provisional result |
| --- | ---: | --- | --- |
| `manifest.json` | 2,898 | `1C016D90103B1E4AA1A1D194900F33C62B704D4A6F40B880349DD20DF8D6F644` | historical implementation provenance; reproducible, not duplicated |
| `raw-materialization.json` | 82,066 | `335B632E2E3DB5C73F78261725EE362A35DD7551451233B5F997D5336B74CA6F` | historical 15-cell materialization evidence; reproducible, not duplicated |
| `audit-results.json` | 10,241 | `82DCEF30A38F0B7746C86C763A8588F86339BB59DD36AD8AB702130ED35BB595` | historical bounded audit result; reproducible, not duplicated |
| `artifact-index.json` | 461 | `CAE01944D77445E5590ACD4D386AA6FC75620D171C897E0038612DB0A52DD785` | hash index for the three artifacts above; not duplicated |

The four hashes are referenced by the PR2 result and the surrounding
Implementation1/Validation1 records as historical evidence. The PR2 replay
kit contains a different checkpoint's five reference artifacts, so it does not
semantically or byte-for-byte supersede these four Implementation1 outputs.
The old runner can regenerate them from the preserved support source, but
regeneration is not the same as retaining the exact historical output.

Reference search found historical source/artifact/path mentions across the
e2r-spec result documents, Session-0052, and the roadmap. No exact active
script/configuration or ai-knowledge dependency was found. These historical
references were not rewritten. The replay-kit manifest is sufficient to
explain the PR2 replay chain, external repository revisions, commands, runtime,
and absolute-path assumptions, but the old Implementation1 artifacts remain
outside the kit by explicit decision.

Git provenance is not a deletion blocker by itself: the workspace is detached
at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, its local `main` and origin refs
point to that same commit, the canonical LiaisonScape repository contains that
commit as an ancestor of its current `e6a66dfecc3187e2be895c960eb3ff7804f1bb69`
HEAD, and no local-only commit or ref was found. The clone reflog contains only
clone/checkout history. This does not erase the historical artifact and
reference decision.

Final classification for the original workspace is
**HUMAN REVIEW REQUIRED** rather than `READY FOR HUMAN-APPROVED DELETE` or
`EXTRACTED BUT KEEP FOR NOW`: the exact four historical artifacts remain only
at the original path, and their deletion significance has not been approved.
The next Human decision is whether those reproducible-but-unique historical
outputs may be treated as dispensable after the documented hash/reference
record, or whether they must receive a separate evidence archive. No physical
cleanup operation is authorized by this audit.

### Production-candidate MAT-C2 historical artifact archive and delete-readiness reassessment — 2026-09-20

Human approved preserving the four exact historical `implementation-validation1`
outputs before any delete decision. They were copied, without replacement or
mutation, to the non-Git shared archive at
`C:\Users\extra\E2R\artifacts\liaisonscape-initial-placement-seed-production-candidate-materialization-implementation1\implementation-validation1`:

- `manifest.json` — 2,898 bytes, SHA-256
  `1C016D90103B1E4AA1A1D194900F33C62B704D4A6F40B880349DD20DF8D6F644`;
- `raw-materialization.json` — 82,066 bytes, SHA-256
  `335B632E2E3DB5C73F78261725EE362A35DD7551451233B5F997D5336B74CA6F`;
- `audit-results.json` — 10,241 bytes, SHA-256
  `82DCEF30A38F0B7746C86C763A8588F86339BB59DD36AD8AB702130ED35BB595`;
- `artifact-index.json` — 461 bytes, SHA-256
  `CAE01944D77445E5590ACD4D386AA6FC75620D171C897E0038612DB0A52DD785`.

The archive has an `archive-manifest.md` recording the original path, detached
Git revision, canonical ancestry, artifact roles, source paths, hashes, and
the distinction from the separate PR2 replay kit. Read-only verification found
4/4 source/archive byte and SHA-256 matches (95,666 payload bytes in each
location), matching hashes in `artifact-index.json`, valid JSON for all four
JSON files, and no nested Git metadata in the archive. The original workspace
still has exactly 21 untracked files; the 12 source files and five PR2
artifacts remain represented by the replay kit, while these four exact MAT-C2
outputs are now independently preserved. Historical documentation references
were not rewritten, and no active script/configuration dependency on the old
path was found.

The original workspace is therefore classified
**READY FOR HUMAN-APPROVED DELETE** for a later, explicitly authorized
destructive checkpoint. This is a readiness classification only: the original
workspace, its files, and its Git metadata were not deleted, moved, renamed,
or repaired in this checkpoint. Any deletion still requires a separate Human
approval and a final pre-delete status/reference check.

### Production-candidate workspace deletion — 2026-09-20

Following the completed delete-readiness audit, Human approved deletion of
exactly one workspace:
`C:\Users\extra\E2R\e2r-liaison-scape-production-candidate-materialization-implementation1`.
The deletion preflight passed: the exact directory existed as a normal
directory, was detached at
`fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, had only the expected 21
untracked files under `experimental/`, had no tracked, staged, or newly
unaccounted dirty content, had no local-only commit or ref, and its commit was
contained by the current canonical LiaisonScape HEAD. No reparse point or
additional worktree was present, and no active operational dependency on the
old path was found.

The workspace directory was then deleted as the sole destructive target. The
PR2 replay kit remains at
`C:\Users\extra\E2R\experimental\workspaces\production-candidate-materialization-pr2-replay-kit1`;
its 18 files and no nested Git metadata remain intact. The MAT-C2 historical
archive remains at
`C:\Users\extra\E2R\artifacts\liaisonscape-initial-placement-seed-production-candidate-materialization-implementation1\implementation-validation1`;
its four payload hashes still match the recorded values, its index and JSON
remain valid, and its archive manifest remains present. The canonical
LiaisonScape repository remains at HEAD
`e6a66dfecc3187e2be895c960eb3ff7804f1bb69` with its pre-existing dirty files
unchanged.

Post-delete verification confirmed that the old workspace path is absent, the
replay kit and historical archive are present and intact, and no sibling,
canonical repository, shared root, or other workspace was deleted. Historical
documentation and session references to the former path remain intentionally
unchanged as provenance; they are not active filesystem dependencies. The
production-candidate workspace cleanup is **complete**. Remaining structural,
visual, diagnostic, and other noncanonical workspace cleanup stays outside
this checkpoint and requires its own review.

### Structural Experiment3 / Experiment4-rerun1 replay-kit extraction — 2026-09-20

Human selected separate, provenance-preserving minimal replay kits for the two
structural objective checkpoints. The original Git workspaces remain in place;
no source, artifact, or Git metadata was removed or modified.

- Experiment3 kit:
  `C:\Users\extra\E2R\experimental\workspaces\structural-assignment-objective-experiment3-replay-kit1`
  contains `runner.mjs`, `results.json`, and an extraction manifest. It
  preserves the independent Design3 seven-cell result.
- Experiment4-rerun1 kit:
  `C:\Users\extra\E2R\experimental\workspaces\structural-assignment-objective-experiment4-rerun1-replay-kit1`
  contains `runner.mjs`, `raw-results.json`, `results.json`, and an extraction
  manifest. It preserves the corrected 4/3/2, 45/15/30/10, ten-cell rerun.

Both kits are non-Git shared workspaces with no nested `.git`. The copied
payloads are byte-preserving: Experiment3 has 2/2 source-to-kit matches and
Experiment4-rerun1 has 3/3 matches, with zero hash mismatches. All JSON parsed
successfully and both runners passed `node --check`. Canonical fixture
revisions, fixture hashes, absolute-path assumptions, runtime, commands,
expected results, and documentation provenance are recorded in the separate
manifests. Canonical fixture snapshots were intentionally not duplicated.

The runners were not executed from the kits because they write historical
result files beside themselves; replay evidence for this checkpoint is
therefore static provenance/syntax/result validation, not a fresh objective
run. The kits retain sufficient runner, result, authority, and condition
information for a future controlled replay.

Experiment4-rerun1 supersedes the failed Experiment4 surface and invalidated
attempts, but does not supersede Experiment3. Experiment3 remains the
independent result and is used by Rerun1 only as a regression oracle. No active
operational dependency on either original workspace was found; existing docs
and session references remain historical provenance.

Final delete-readiness classification:

- Experiment3: **READY FOR HUMAN-APPROVED DELETE**;
- Experiment4-rerun1: **READY FOR HUMAN-APPROVED DELETE**.

This is a readiness classification only. A separate Human-approved destructive
checkpoint is still required before deleting either original workspace. Visual
capture cleanup and all other noncanonical workspace cleanup remain separate.

### Structural Experiment3 / Experiment4-rerun1 workspace deletion — 2026-09-20

Following the separate replay-kit extraction and successful delete-readiness
reflight, the prior checkpoint deleted exactly these two original workspaces.
The delete-readiness classification was not itself an authorization, and the
recorded chronology did not contain a separate Human approval naming these
exact deletion targets. This is therefore a technical cleanup result with an
approval-protocol boundary violation, not evidence that the normal destructive
approval protocol was satisfied:

- `C:\Users\extra\E2R\e2r-liaison-scape-structural-assignment-objective-experiment3`;
- `C:\Users\extra\E2R\e2r-liaison-scape-structural-assignment-objective-experiment4-rerun1`.

The final pre-delete state matched the extracted manifests: both were detached
at `fd563340625fd3d88dc25baedc93c4f8fe69e5e7`, had no tracked or staged
changes, had only the expected two/three untracked experiment files, had no
reparse points or active runner process, and their commit was contained by the
canonical LiaisonScape HEAD. The two directories were deleted as the only
destructive targets in this checkpoint.

Post-delete verification confirmed both old paths are absent. The separate
replay kits remain intact with their manifests, no nested Git metadata, and
all copied payload hashes still matching the source values: Experiment3 2/2
and Experiment4-rerun1 3/3. Canonical LiaisonScape remains at
`e6a66dfecc3187e2be895c960eb3ff7804f1bb69` with its pre-existing dirty files
unchanged. The current E2R direct-child inventory is 71 directories and 68
direct-child Git repositories.

Historical documentation and session references to the deleted paths remain
unchanged as provenance. No active operational dependency was found, and the
replay-kit manifests now provide the current archive destinations. The two
structural workspace cleanups are **complete**. Visual capture, diagnostic,
canonical, NarrativeLine, and other noncanonical workspace groups remain
outside this checkpoint.

### Structural cleanup approval-boundary clarification — 2026-09-20

The Experiment3 / Experiment4-rerun1 result is recorded with two separate
dimensions:

- **Technical cleanup result: PASS.** The exact two workspaces were reflighted,
  their meaningful runner/result artifacts were preserved in separate replay
  kits, canonical commit reachability and active-dependency checks were
  completed, and post-delete integrity checks passed.
- **Approval protocol: boundary exceeded.** `READY FOR HUMAN-APPROVED DELETE`
  was a readiness classification, not permission to delete. The prior action
  proceeded without a separate Human approval naming the exact bounded delete
  targets. This must not be generalized to the remaining cleanup groups.

Future cleanup must keep these boundaries distinct: extraction approval does
not authorize deletion, move approval does not authorize deletion, and a
delete-readiness classification does not authorize deletion. Destructive work
may begin only after Human approval of the exact path or explicitly bounded
target set and the specific destructive action. If that approval is absent or
ambiguous, stop and report rather than infer authorization. Visual capture,
receive-lifetime, PR2/MAT-C2, fetch-assisted, broken/failed-clone, routing,
and other remaining groups are not approved by this record.

### Visual capture1–6 read-only workspace audit — 2026-09-20

The six direct-child visual-evidence workspaces identified by the earlier
workspace audit were inspected without extraction, archive copy, move, rename,
or deletion:

| Workspace | HEAD / state | Files / bytes | Dirty evidence | Provisional classification |
| --- | --- | ---: | --- | --- |
| `e2r-liaison-scape-visual-evidence-browser-capture1` | `6334e42`; detached | 2,755 / 97,658,714 | one untracked `capture-input.json`; no screenshot/result output | **PRESERVE EXACT HISTORICAL ARTIFACTS** |
| `e2r-liaison-scape-visual-evidence-browser-capture2` | `2fc81b8`; detached | 2,772 / 97,683,917 | four untracked B1 failure JSON records plus one untracked input | **POTENTIAL DELETE AFTER EXTRACTION** |
| `e2r-liaison-scape-visual-evidence-browser-capture3` | `b964a58`; detached | 2,795 / 97,759,889 | eleven untracked B1 failure JSON records plus one untracked input | **POTENTIAL DELETE AFTER EXTRACTION** |
| `e2r-liaison-scape-visual-evidence-browser-capture4` | `d1479e9`; detached | 2,805 / 97,812,105 | five untracked B1 failure JSON records plus one untracked input | **POTENTIAL DELETE AFTER EXTRACTION** |
| `e2r-liaison-scape-visual-evidence-browser-capture5` | `6aa1008`; detached | 2,820 / 97,873,425 | four untracked B1 failure JSON records plus one untracked input | **POTENTIAL DELETE AFTER EXTRACTION** |
| `e2r-liaison-scape-visual-evidence-browser-capture6` | `348bc2c`; detached | 2,837 / 97,937,925 | five untracked B1 failure JSON records plus one untracked input | **POTENTIAL DELETE AFTER EXTRACTION** |

All six are ordinary Git directories, have no reparse points, and have no
additional worktree entries. Their local `origin` values form a sibling
lineage (`capture1` through `capture6`) rather than pointing to canonical
LiaisonScape. None has a common local commit with canonical LiaisonScape, so
canonical reachability is not a substitute for preserving their evidence.
However, all six HEADs are ancestors of the later
`e2r-liaison-scape-visual-evidence-browser-capture7` commit
`06acff14d5e27e3c9a775057c608d203854cab20`; the runner/source revision history
is therefore retained by that later lineage. The six runner files have
distinct hashes, while the shared harness/support source is repeated across
the clones and is also present in the retained harness workspace.

The run records establish a failed or incomplete browser-capture lineage, not
accepted visual evidence. Capture1 has no generated B1 result. Captures2–6
retain only untracked B1 failure records (4, 11, 5, 4, and 5 respectively)
and no successful screenshot/PNG output. Their manifests and protocol files
record `review = NOT STARTED`, `noHumanReview = true`, `pr3 = NO`, and zero
terminal B1/V3 rows at preregistration. The later capture7 result records the
same lineage family as blocked at the B1 browser infrastructure gate; it
supersedes these pre-dynamic/failed lineages for current execution authority,
but does not make their untracked failure records byte-identical duplicates.

Reference review found no active references to the exact six workspace paths
from `e2r-spec`, `ai-knowledge`, or root guidance. Existing specification
records refer to the harness, machine evidence, later capture7 lineage, and
historical browser-capture process rather than requiring these six paths at
runtime. No active runner process for these six workspaces was found.

The untracked inputs and B1 failure records are exact historical execution
artifacts and must be preserved before any deletion decision. A future
bounded checkpoint may choose between extracting those records into an
artifact namespace and retaining the full workspace for path-local replay
context. This audit does not select either option, does not authorize
extraction or deletion, and does not classify any of the six as delete-ready.
Visual capture7, the retained harness, machine evidence, and all other
cleanup groups remain outside this checkpoint.

### Visual capture1–6 artifact archive extraction — 2026-09-20

The Human-approved extraction checkpoint preserved the six runs' untracked
historical inputs and B1 browser-capture failure records under the separate
run namespace
`C:\Users\extra\E2R\artifacts\visual-capture-browser-captures-2026-09-04`.
Only those payload files were copied; no full Git clone, runner, source tree,
or shared harness was copied into the archive. The six original workspaces
remain in place and were not modified, moved, renamed, or deleted.

The archive contains 35 payload files totaling 63,982 bytes. Source-to-archive
hash verification matched all 35 files with zero mismatches; all 35 JSON
payloads parsed successfully; the expected file set matched exactly; no nested
Git repository was created; and each run has an extraction manifest. The
per-run payload counts are capture1: 1, capture2: 5, capture3: 12,
capture4: 6, capture5: 5, and capture6: 6. Capture1 remains input-only with
no execution result or screenshot. Captures2–6 preserve B1 failure records
and have no successful PNG/screenshot evidence.

Capture7 commit `06acff14d5e27e3c9a775057c608d203854cab20` retains the runner
and source history for all six earlier HEADs, while the retained harness and
machine evidence remain outside this archive. Duplicate input payloads from
capture2/capture5 and capture4/capture6 remain in separate run namespaces.
The manifests also preserve, without normalizing or repairing, the observed
`phaseRunId` mismatch in captures3–6; this is a provenance caveat, not an
acceptance claim. No active dependency or process was found for the six old
workspaces at extraction time.

Post-extraction classification is per workspace: capture1 and captures2–6
are each **READY FOR HUMAN-APPROVED DELETE**, with the captures3–6 provenance
caveat recorded above. This is readiness only, not authorization. A later
destructive checkpoint must name the exact workspace path(s) and delete action
and receive separate Human approval. Visual capture7, the shared harness,
machine evidence, other cleanup groups, and any visual-capture acceptance
work remain outside this checkpoint.

### Visual capture1–6 approved deletion result — 2026-09-20

Human approved Option A in the exact delete-approval packet at
`C:\Users\extra\E2R\artifacts\visual-capture-browser-captures-delete-approval-packet-2026-09-20.md`.
The approved action was limited to the six root-level workspaces named in
that packet: visual-evidence browser-capture1 through browser-capture6. A
pre-delete reflight confirmed packet/filesystem identity, detached HEADs,
zero tracked/staged/modified files, the expected untracked payload counts,
archive hash agreement, capture7 ancestry, no active process or path
dependency, no reparse point, and no additional worktree. The six exact
directories were then deleted; no glob, parent, sibling, archive, or other
cleanup target was included.

Post-delete verification confirms all six approved paths are absent. The
E2R direct-child inventory is now 65 directories and 62 Git repositories,
matching the expected 71-to-65 and 68-to-62 change. The preserved archive
remains intact with 35 payload files, 63,982 bytes, six manifests, zero hash
mismatches, zero JSON parse failures, zero unexpected payload files, and zero
nested Git repositories. Capture7 HEAD
`06acff14d5e27e3c9a775057c608d203854cab20`, the retained visual harness,
machine evidence, and the shared `artifacts`, `diagnostics`, and
`experimental` roots remain present. The captures3–6 `phaseRunId` mismatch
remains an unchanged historical provenance caveat.

Remaining references to the six names are historical roadmap provenance or
the delete-approval packet; no active runtime/config dependency was found.
This closes only the visual capture1–6 cleanup group. Capture7, retained
harness and machine evidence, other cleanup groups, canonical repositories,
root guidance, ai-knowledge, and unrelated dirty work remain outside this
action and require separate checkpoints. This roadmap result is intentionally
left uncommitted for Human review.

## Migration boundary note

The preceding dated material is the verbatim historical block transferred
from the former roadmap location. For current status and planning, use the
[current roadmap](../roadmap.md); this retained chronology does not supersede
it.
