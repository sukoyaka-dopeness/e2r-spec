# Test 37 Cross-App Evidence Checkpoint and Limited Acceptance Proposal

Date: 2026-10-11
Status: Evidence checkpoint prepared for Human review. This document proposes
limited local ParameterPlotter × NarrativeLine acceptance; it does not make
that acceptance decision. Cross-Context Workspace Safety remains Pending and
PUBLIC RELEASE remains NO-GO.

## Scope and authority

This checkpoint consolidates the recorded Test 28–37 evidence relevant to
ParameterPlotter (PP) and NarrativeLine (NL), including the latest Codex-led
same-origin browser revalidation and NL rejected-work Export recovery. It does
not change runtime, tests, schema, application versions, adopted contracts, or
prior acceptance decisions.

The authoritative contract is
[`Cross-Context Workspace Safety`](cross-context-workspace-safety-design-2026-10-10.md).
The reusable review procedure and decision are in the `ai-knowledge`
repository's `decisions/cross-context-workspace-safety.md` and
`playbooks/workspace-safety-review-and-acceptance.md`. Those documents remain
unchanged. This checkpoint records bounded implementation evidence and a
Human-facing proposal only.

## Repositories and evidence sources reviewed

At review time, the application HEADs match the reported verification targets:

| Repository | HEAD | Worktree observation |
|---|---|---|
| e2r-parameter-plotter | `65883632868e86c535c3b0b5eca2fc4e4865c67c` | Untracked `.github/FUNDING.yml`; preserved and not read or changed as part of this checkpoint. |
| e2r-narrative-line | `072028f2e204ca6f4f91853d30fcba83ad6c9662` | Clean at inspection. |
| e2r-spec | `97ac499e9f70eb17638b1e404dc43cf1fe2dd651` | Existing staged/unstaged and untracked work is present; all pre-existing paths were preserved. |
| ai-knowledge | `5eeabb475baa8fd4197a0f5ff1fc8c796af0e353` | Existing `INDEX.md` and playbook changes plus an untracked hypothesis were preserved. |

Application evidence reviewed includes:

- PP `docs/local-same-origin-cross-app-workspace-safety-verification-2026-10-10.md`.
- PP `docs/bfcache-workspace-safety-verification-2026-10-11.md`.
- PP `docs/stale-writer-export-reload-recovery-verification-2026-10-11.md`.
- PP `docs/abnormal-termination-workspace-recovery-verification-2026-10-11.md`.
- NL `docs/cross-tab-workspace-safety-2026-10-10.md`.
- NL `docs/test-37-startup-workspace-resume-alignment.md`.
- The supplied Test 37 cross-app revalidation report and the supplied NL rejected-work Export recovery report. The latter reports Edge 154/CDP, NL HEAD above, origin `http://127.0.0.1:5364/e2r-narrative-line/`, and the file-level results recorded below. Those reports are recorded here as prior Codex evidence, not as a new browser run in this documentation task.

The current HEADs match the cited verification targets, so no intervening
application commit was found that would invalidate the reported applicability.
This is a HEAD applicability check, not an independent replay of those tests.

## Adopted contract coverage and evidence

Evidence classes are deliberately separate: Human Browser Acceptance is only
what a Human actually exercised; Codex Browser Verified is isolated real
browser evidence; Automated Test Verified covers modeled implementation
branches; Source / Design Audit is code or contract inspection. None implies
another class.

| Adopted safety concern | Existing and latest evidence | Assessment for proposed limited scope |
|---|---|---|
| Application-owned Workspace namespaces | Same-origin PP × NL browser checks observed distinct storage and coordination namespaces; latest revalidation compared each app's stored value while operating the other. | Codex Browser Verified for tested keys and flows. Not a proof that every future key is collision-free. |
| Save and reload recovery | PP Human Tests 28, 30, 33, 35, and 36 cover their recorded recovery sequences; NL Human Tests 37-NL-01–09 cover explicit acquisition, save-key presence, Resume, Reload, and restoration. Latest Codex revalidation also reloaded both apps and compared their own saved state. | Bounded Human acceptance exists for those individual sequences; latest cross-app restoration is Codex Browser Verified. |
| Same-app multi-tab coordination and replacement protection | PP Tests 33 and 35 Human-accepted sequences include peer warning, replacement refusal/cancel, saved-value preservation, reload, and later save. NL has same-app Codex browser evidence and service/integration coverage for pending-work refusal and retry. | PP bounded Human evidence plus NL Codex/automated evidence; not all forms or interleavings. |
| Stale-writer protection | PP Test 30 Human sequence and Tests 33/35 recovery sequences; NL same-app browser and latest cross-app Codex runs refused stale writes. In latest revalidation each shared workspace retained the newer A2 value. | Codex Browser Verified across both apps in the reported test; PP has related limited Human acceptance. NL cross-app case is not Human-accepted. |
| No implicit write after refusal | PP Test 32 is retained as the historical incident/failure. PP Test 33 Human evidence and Test 34 deterministic concurrent write-gate regression plus Test 35 acceptance cover the fix in their stated bounds. Latest cross-app verification exercised Export/redraw after refusal in both apps and reported unchanged raw values/hashes and reload of the winner. | Historical PP defect is not erased. Fixed behavior has PP Human and automated evidence, and current PP/NL Codex Browser evidence in tested sequences. Not exhaustive across every asynchronous path. |
| Export separated from browser-local Workspace persistence | PP Tests 33, 35, and 36 include Human observations of JSON files/downloads and distinct Workspace outcomes; PP Test 30 and Codex evidence inspect exported contents. NL rejected-work recovery obtained `Test 37 NL Protected A1 - B1.e2r.json` (13,263 bytes), parsed it, validated it with E2R Validator (`valid=true`, zero diagnostics), and confirmed 9 Entities, 15 Events, 23 Relations, and the rejected B1 title while shared storage remained A2. | Actual file rescue is now Codex Browser Verified for NL and bounded Human evidence exists for PP. This does not claim Human validation of the NL file or all browser download configurations. |
| Unapplied work protection | PP BFCache Test 29 is Human-accepted for the measured Dimension form, direct persisted lifecycle evidence, and post-return Cancel. Latest cross-app verification reports pending forms retained in both apps across actual BFCache cycles with `pagehide.persisted=true` and `pageshow.persisted=true`. PP Test 35 covers a replacement refusal with peer work. | Bounded Human PP and Codex cross-app evidence. Not all form types, all transitions, or every browser. |
| BFCache restoration and coordination re-registration | PP Human Test 29 and PP Test 28's limited stale-workspace sequence; latest Codex cross-app run observed persisted lifecycle events for PP and NL, retained form/storage state, and subsequent operations. | Actual BFCache is evidenced in the stated cases; this does not imply all history paths or all timing sequences. |
| Abnormal termination recovery | PP Test 36 is Human Browser ACCEPTED for one dedicated profile, one approved Edge process-tree termination, the last saved baseline, and the bounded post-recovery sequence. | PP-only, one tested scenario. NL abnormal-termination recovery is outside this acceptance proposal and is not inferred from PP. |
| Coordination failure / fail-closed | PP Test 37 revalidation injected a Web Locks request failure in an isolated browser and observed Dataset replacement refusal with unchanged storage. NL service tests cover unavailable Web Locks/fail-closed behavior; the latest browser report did not inject this failure in NL. | PP has limited browser fault-injection evidence; NL has automated/source evidence but no corresponding browser injection. This is an explicit limitation, not a claimed PASS. |
| Save-result display and retained work | PP Test 33 Human evidence distinguishes failed browser-local save from successful JSON download; latest NL browser report observed refusal with B1 retained and separately exported. | Bounded PP Human and NL Codex evidence; not exhaustive UI-copy acceptance. |

### Test 37 NL rejected-work Export recovery details

The reported isolated Edge 154/CDP run used two NL tabs. Tab A had saved
`Test 37 NL Protected A1 - A2`; stale Tab B retained
`Test 37 NL Protected A1 - B1` in memory and received a visible save refusal.
The shared raw Workspace SHA-256 was
`2e70c64fb39ec82f563592cabdb27957b2bd19b2b12ad724620a2626efbdba17` before
and after Tab B's Export. The resulting E2R JSON file was actually present,
readable, and valid under the E2R Validator with no diagnostics. Its Dataset
contained the B1 title and matched the 15 Events shown in the stale tab, rather
than the newer A2 Workspace. This closes the previously identified *Codex
evidence* gap for practical NL rejected-work file rescue; it is not Human
Browser Acceptance.

The first attempted CDP download configuration yielded canceled downloads.
After switching to page-level download configuration, the actual file was
retrieved and inspected. The initial tooling configuration issue is not
recorded as an application Export failure.

## Prior incidents, failures, and bounded acceptances retained

- **PP Test 32:** historical safety incident / pre-fix failure. A rejected B
  write was later persisted through a separate Export-triggered save. The
  root cause was refusal state not being inherited by a later write attempt;
  stale-revision comparison itself was not shown to be bypassed. Keep this
  incident in the record.
- **PP Test 33:** Human accepted the documented A/B sequence after the fix,
  including separate JSON Export and Workspace-save outcomes, unchanged shared
  winner after B Export, Reload recovery, and later safe save.
- **PP Test 34:** the concurrent write-gate race was reproduced in a
  deterministic test harness and repaired. The exact asynchronous save versus
  replacement interleaving is primarily supported by automated regression,
  not Human browser reproduction.
- **PP Test 35:** Human accepted the documented replacement refusal/cancel,
  actual JSON file review, reload to the saved winner, and later save. The
  exact Test 34 interleaving was not reproduced by Human.
- **PP Test 36:** Human accepted the one dedicated-profile abnormal-termination
  and recovery scenario only. Unapplied-form crash recovery is not promised.
- **NL Test 37-NL-01–09:** Human accepted only the startup sample persistence
  suppression, Resume alignment, explicit sample acquisition, and Reload
  restoration operations listed in NL's acceptance table.
- **Cross-app Test 37:** the same-origin stale-writer, post-refusal Export,
  BFCache, and PP coordination-failure results are Codex Browser Verified at
  the reported scope. They do not become Human acceptance through this
  checkpoint.

### Historical checkpoint status reconciliation

The PP local same-origin checkpoint dated 2026-10-10 says Human acceptance
was pending and that NL stale-writer behavior was not confirmed in that
browser run. Those statements remain accurate for that checkpoint's run. Later
PP Test 28–36 records and the supplied Test 37 cross-app revalidation are
separate, later evidence; they supersede the old pending wording only for the
specific operations they record. Likewise, the PP BFCache checkpoint's earlier
Human-pending status is superseded only by the bounded Test 28/29 acceptance
recorded there. No historical result is rewritten, and these later records do
not close overall Cross-Context Workspace Safety.

## Evidence gaps and their significance

### Export file acquisition

The earlier cross-app run had established that Export did not change the
shared Workspace, but it did not establish that NL's rejected Dataset could be
retrieved as an actual file. PP had separate Human file evidence. The latest NL
rejected-work recovery run now provides actual-file, content, and Validator
evidence for NL. Therefore, actual NL Export recovery is no longer an
unexercised implementation capability for the proposed scope. It remains
Codex-only evidence; Human review may choose to require a Human file check, but
the adopted Cross-Context contract does not prescribe that every browser
download be Human-inspected before a bounded local acceptance decision.

### NarrativeLine coordination failure injection

NL has automated fail-closed coverage for unavailable Web Locks and source
review of the refusal path. PP has an isolated-browser Web Locks failure
injection. NL did not receive the same browser-level injection in the reported
Test 37 run. The implementation contract requires unsafe writes to stop when
coordination cannot be verified, but it does not require identical fault
injection evidence for both applications. For the proposed limited PP × NL
acceptance, this is a stated limitation supported by NL automated and source
evidence, not an automatic new test gate. A Human may still request that
additional test before deciding.

### Other non-covered scope

The evidence does not establish:

- production GitHub Pages same-origin behavior, hosted HTTPS, CORS, or
  production Handoff;
- LiaisonScape or Hub acceptance as part of a complete E2R application set;
- every edit form, acquisition failure, browser, BFCache timing, or
  concurrent-write interleaving;
- NL abnormal-termination recovery;
- screen-reader or broad viewport acceptance;
- Human-operated Cross-App flows in the latest same-origin revalidation.

These are not silently promoted to PASS. They are also not all requirements
for the proposed local PP × NL scope; the adopted contract and evidence should
be scoped to the claims below.

## Proposed limited Formal Acceptance for Human decision

**Proposal: READY for a Human decision on limited local PP × NL acceptance.**
This is not the acceptance decision. It is not a proposal to close the
cross-application contract for all E2R applications or deployment contexts.

If accepted by Human, the bounded claim would be:

> In the recorded local same-origin browser environments and the specific
> tested sequences, ParameterPlotter and NarrativeLine retain separate
> application-owned Workspace state; refuse the documented stale writes and
> protected replacements; preserve the newer saved Workspace after the tested
> post-refusal Export/redraw sequences; retain/export tested refused work;
> recover saved state through the tested Reload flows; and restore suspended
> page state through the tested BFCache flows, including the tested pending
> forms and coordination recovery. The BFCache evidence does not promise that
> unapplied form input will be restored after Reload. For the PP-only injected
> Web Locks failure, replacement was refused without changing storage.

These are distinct recovery guarantees. **Reload** reinitializes the
application from its saved browser-local Workspace; the tested Reload flows
restored the latest accepted Dataset. **BFCache** resumes a suspended page
instance; in the tested cycles, `pagehide.persisted=true` and
`pageshow.persisted=true` confirmed BFCache use, and the tested unapplied form
state, Workspace protection, and coordination recovery were retained. The
BFCache observation is not evidence that unsaved form drafts survive a full
Reload, and no such guarantee is proposed.

The proposed claim relies on the cited Human evidence for PP Tests 28–36 and
NL Tests 37-NL-01–09 only where those records explicitly identify Human
operations, plus the latest Codex Browser evidence for the cross-app and NL
rejected-work Export cases. It does **not** relabel any Codex result as Human
Accepted.

The following would remain outside the limited acceptance:

- production hosting, public HTTPS/CORS, and Handoff;
- LiaisonScape and Hub;
- untested browser engines, all-form coverage, and exhaustive race orderings;
- NL browser-level coordination-failure injection;
- NL abnormal-termination recovery;
- full Cross-Context Workspace Safety acceptance across all apps and
  environments;
- release readiness or authorization.

The evidence audit does not identify a safety-contract requirement that is
uncovered strongly enough to mandate another test before Human may decide on
this bounded claim. Human may request a narrower scope, additional evidence,
or decline acceptance. Those choices remain theirs.

## Current status and review request

- NarrativeLine Startup Workspace / Resume: **HUMAN ACCEPTED** for Test
  37-NL-01–09 only.
- Test 37 overall: **Partial PASS — tested scope only**. This status includes
  the limited NL Human acceptance and separate Codex Browser Verified
  cross-app results; it is not a Human acceptance of Test 37 as a whole.
- PP Tests 28–30, 33, 35, and 36 retain their individual limited Human
  statuses. Tests 31–32 and 34 retain their separate Codex audit, historical
  incident, and automated regression evidence; none is relabeled Human
  Accepted. Pre-fix failures remain historical.
- Test 37 Cross-App revalidation and NL rejected-work file recovery:
  **CODEX BROWSER VERIFIED** for reported scenarios only.
- Local PP × NL limited Formal Acceptance: **READY — Pending Human Decision**.
- Cross-Context Workspace Safety overall: **Pending**.
- PUBLIC RELEASE: **NO-GO**.

Human review requested: decide whether to accept the bounded local PP × NL
claim above, narrow it, request a specific additional evidence item, or defer.
No Acceptance or release status is changed by this document.
