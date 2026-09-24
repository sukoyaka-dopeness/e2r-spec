# Release and Cross-App Chronology

Status: **HISTORICAL ROADMAP EVIDENCE — NOT CURRENT PLANNING AUTHORITY**

This file preserves complete dated roadmap sections extracted from
`docs/roadmap.md` during the bounded first Roadmap Slimming Migration. The
transcribed blocks below retain their original wording, order, and status
language. Their statements of `current`, `next`, `open`, or release priority
describe their original snapshots only. Consult the [current roadmap](../roadmap.md)
and its status index for current planning. This broad chronology groups public
release and cross-application integration checkpoints; it is not an issue- or
checkpoint-per-file archive. Original source order is retained rather than
re-sorting blocks by date.

## Transcribed roadmap blocks

<!-- The following blocks are verbatim extractions from roadmap.md at the
     migration baseline, commit a0d5524fab7363c03364118cfa6e8665c8bf8844. -->

## Initial Public Release critical path

The first public release should establish a complete user journey:

`learn E2R -> discover samples in the Hub -> open a Dataset in NarrativeLine
or LiaisonScape -> edit safely -> export -> return to documentation`.

The Hub / Portal public entry point is complete for the accepted Hub Public
Entry Point Information Architecture (Milestone 1) and the manually accepted
Static E2R Landing Page Implementation (Milestone 2). The current evidence
covers E2R introduction, application purposes, capability and maturity status,
sample cards, documentation, user guides, and application entry points.
Direct Hub Handoff and Initial Public Release remain incomplete.

The critical path is:

1. **NarrativeLine modernization** — COMPLETE for the accepted bounded
   Dataset Replacement Safety and Dataset Handoff v0 scope after auditing NarrativeLine's
   existing temporal editing and pending-work model. The accepted work includes
   safe Open, New, and Sample
   replacement, loss-risk tracking, pending-work protection, browser-native
   exit warning, explicit handoff failure, no silent fallback, startup-only
   handoff, and the distinction between acquisition URL and Dataset identity.
   Acceptance evidence is recorded in the NarrativeLine NL-D4, NL-D5A, NL-D5B,
   NL-H1A, NL-H1B, and Formal Completion documents.
2. **NarrativeLine navigation ownership** — audit Browser Back/Forward,
   `history.state`, `popstate`, Home/editor navigation, fragment ownership,
   runtime fragment changes, and the separation of screen navigation from
   Dataset replacement. Foreign history state must not be misinterpreted.
3. **Hub / Portal public entry point** — provide E2R introduction, application
   purposes, capability and maturity status, sample gallery, documentation,
   user guides, and application entry points.
4. **Public interoperability evidence** — continue Validator, canonical and
   sample Dataset, public handoff fixture, cross-application fixture, and
   unknown-Extension preservation checks.
5. **Release documentation synchronization** — align each repository's README,
   user guide, roadmap, implementation status, deployment state, and sample
   links. Use `implemented`, `manually accepted`, `research / experimental`,
   and `deferred / on hold` consistently.

Direct Hub handoff can be evaluated as a later workstream. NarrativeLine Handoff
v0 completion does not claim Hub direct handoff, public release completion,
private/authenticated Handoff support, or any future multi-Dataset workflow, and
this section does not promote Direct Hub handoff to a release blocker.

## Current public-release execution priority (2026-08-22)

The current bounded execution order is:

1. Cross-App Locale Recipient-Preference closure / production readiness;
2. NarrativeLine locale consumer implementation (blocked until Priority 1
   closure is accepted);
3. LiaisonScape locale consumer implementation;
4. Hub startup locale producer completion;
5. Hub Direct Handoff and localized Sample Gallery local acceptance;
6. Hub residual quality audit and Formal Completion;
7. E2R common favicon design and application to Hub, NarrativeLine, and
   LiaisonScape (Validator remains excluded unless deployment evidence changes);
8. LiaisonScape selectable SVG icons;
9. NarrativeLine display-order reordering;
10. push and deployment readiness;
11. Public Handoff/interoperability evidence; and
12. final pre-public-release audit.

This current priority supersedes the earlier recommendation to make Public
Interoperability Evidence / Sample Workflow the immediate next workstream. That
workstream remains planned and is intentionally deferred until the public-facing
product state is closer to final. The ordering does not make Dataset language
metadata, localized-counterpart architecture, Dictionary, or Semantic research
an Initial Public Release blocker.

## Cross-App Shell follow-up record (2026-08-23)

Cross-App Shell Alignment identified two bounded NarrativeLine follow-ups. The
Timeline item is now closed by the accepted runtime checkpoint below. The
remaining Credits item is already closed by the locale-consumer checkpoint.
These records do not reopen the accepted F2-NL1 locale Header
placement, F2-NL1b Footer geometry, or F2-NL1c extreme-narrow Header geometry:

1. **NarrativeLine Timeline shell navigation** — **CLOSED / ACCEPTED** at
   runtime commit `4868111b02aa850bb0c652ab3b3470dcd92595a0`. The explicit
   localized `Home` action is in the Timeline Header beside the NarrativeLine
   brand and locale control; the lower sticky area retains Add Event only.
   Existing contextual `Back` behavior for nested surfaces remains separate.
2. **NarrativeLine Credits dismissal** — **CLOSED / ACCEPTED** through the
   NarrativeLine locale-consumer checkpoint: explicit Close, Escape, and
   backdrop click, with focus and state behavior preserved.

These are application-shell checkpoints, not changes to `#locale`, recipient
preference semantics, Dataset Handoff, Dataset language, Dataset state, or graph
state. LiaisonScape's Credits backdrop dismissal is already implemented and is
not part of this record. The work should be evaluated before Cross-App Shell
Alignment is marked formally complete and before the final pre-public-release
audit; it is not by itself a claim that public release is blocked.

The Timeline Header change must include bounded browser and human-acceptance
checks for EN/JA, desktop, 601px/600px, representative narrow widths, roughly
270px and 240px boundaries, locale-button wrapping, brand/Home/locale overlap,
keyboard Tab order, and preservation of nested-surface Back semantics. No
workspace-wide minimum width is implied by the existing narrow-viewport
acceptance boundary.

## Immediate sequence

The ledger above is the current short execution sequence. Existing locale,
shell, and application checkpoints below remain historical evidence and
independently scoped follow-ups; they are not silently promoted by this ledger.

The ordering above does not select the next product feature. A later handoff or
explicit planning decision may choose one bounded follow-up without reopening
unrelated workstreams.

At every step, prefer the smallest change that increases executable evidence
and keeps Core and Extension responsibilities distinct.

## Cross-App Locale consumer readiness checkpoint (2026-08-23)

The latest read-only NarrativeLine Locale Consumer Readiness Audit records the
current production-migration status as **NOT READY**. The existing
recipient-preference implementation is a bounded experimental checkpoint, not
production Cross-App Locale consumer parity. NarrativeLine's runtime worktree
is clean and the relevant experiment implementation is recorded at commit
`bfe88f6`.

Priority 1 is therefore **Cross-App Locale Recipient-Preference closure /
production readiness**. The following bounded closure items must be accepted
before production locale consumer migration begins:

1. Confirm the browser fallback contract and its NarrativeLine implementation
   direction while preserving the requested / persisted / browser / default
   distinction.
2. Complete manual startup evidence for locale-only, invalid, duplicate,
   malformed, and unsupported locale requests; effective-locale Handoff
   errors; temporary-choice reload; and repeated Conflict Dialog behavior.
3. Record the Experiment 2C applicability audit: current startup Locale
   Conflict cannot coexist with pre-existing modified or pending work, so no
   combined implementation case is active until a future entry permits that
   coexistence; Dataset Replacement Safety remains independently accepted.
4. Add and accept selector URL synchronization: immediate UI update,
   explicit persistence, `locale`-only `replaceState`, no new history entry,
   and preservation of `datasetUrl` and unknown fragment parameters.
5. Close the locale URL lifecycle evidence for Back / Forward, startup-only
   semantics, ignored runtime hash mutation, and Dataset Handoff fragment
   preservation.
6. Close NarrativeLine Timeline Header locale-control acceptance for EN and
   JA at desktop, narrow, and touch conditions.

The existing NarrativeLine experiment acceptance documents remain valid within
their bounded scopes. Experiment 1 does not close the manual/lifecycle items
above, and Experiment 2B does not accept startup Handoff with pre-existing
dirty work. These exclusions must not be treated as production-readiness
evidence.

The production implementation sequence remains deferred until this checkpoint
is accepted. Once ready, the smallest sequence is: locale fragment parser and
updater; requested / persisted / browser / effective state model; Conflict
Dialog and startup orchestration; Handoff ordering and StrictMode regression;
AppFrame selector persistence and fragment synchronization; Dataset,
selection, draft, and Replacement Safety regression; then browser acceptance.

This checkpoint does not reopen accepted F2-NL1/NL1b/NL1c or F2-LS1. Existing
Cross-App shell follow-ups, Dataset acquisition hierarchy, Header action parity,
and Dataset Replacement styling remain separate follow-up lanes. The accepted
LiaisonScape F2-LS1 checkpoint remains closed; its brand hit-area,
Credits-focus, and stable vertical shell fixes are not locale-readiness gaps.

No runtime, design-authority, or `ai-knowledge` files are changed by this
roadmap synchronization. The existing untracked files
`research/exploratory/anonymous-dataset-sharing.md` and
`sessions/E2R-Session-0048.md` remain preserved and outside this checkpoint.
## Roadmap reconstruction checkpoint — completed Cross-App deletion and capability Handoff progression

Historical source: complete original H3 entries from `docs/roadmap.md` at
`e17e778` (`docs: slim roadmap release and cross-app tranche`). Their source
order, dates, status wording, and evidence text are retained. Relative Markdown
hrefs are adjusted only to resolve from this chronology file; original
path-only prose remains unchanged. Status terms inside these entries describe
their dated checkpoint snapshots, not current planning authority. Current
Cross-App status remains in [the roadmap](../roadmap.md#roadmap-reconstruction-checkpoint-current-canonical-summary).
### LS-CROSS-APP-RELATION-DELETION4-PRESENTATION-FOLLOWUP

**RECORDED / IMPLEMENTATION NOT STARTED** — 2026-08-28.

The Formal Real Edge acceptance for LiaisonScape Entity deletion resolution is
accepted for behavior and focus. A separate manual visual review recorded the
following presentation and copy follow-ups. They are presentation polish, not
acceptance blockers, and this record does not reopen the accepted deletion
semantics or focus contract.

1. **Human-facing blocker copy:** the Japanese `ブロッカー` wording is useful
   as internal workflow terminology but is a candidate for clearer user-facing
   copy describing the connected Relations that must be removed before the
   Entity can be deleted. The candidate copy must be aligned in English and
   Japanese before implementation; no runtime copy change is made here.
2. **Zero-blocker action spacing:** the `Keep Entity` and `Delete Entity`
   footer actions appear visually close in the resolved state. Review spacing
   and grouping using the existing action-layout conventions across desktop,
   narrow, EN, JA, and keyboard focus-visible states; do not prescribe a fixed
   margin value in this record.
3. **Keep Entity duplication:** the safe `Keep Entity` action is currently
   available in both the dialog header and footer. Review whether the same
   semantic action should remain in both locations or be consolidated, while
   preserving the existing cancellation behavior and safe focus target.
4. **Safe/destructive placement convention:** audit the placement of safe and
   destructive actions across NarrativeLine Entity/Event Detail, deletion
   resolution and confirmation, LiaisonScape Entity/Relation Detail, existing
   confirmations, and the current Entity deletion resolution dialog. Compare
   safe action position, destructive action position, Danger Zone placement,
   footer grouping, gap, wrap order, narrow-width order, Tab order, and EN/JA
   label width. This is an evidence-gathering follow-up, not a universal
   Cross-App left/right rule.

The follow-up remains separate from bidirectional Cross-App acceptance and
overall capability closure. Any implementation should be a bounded
presentation/copy checkpoint with its own desktop/narrow, EN/JA, and keyboard
acceptance evidence. It must not change Entity/Relation deletion semantics,
Relation visibility or identity, Dataset ownership, routing, viewport or
pointer behavior, Handoff, Core/Extension/schema behavior, or the accepted
focus-management fix.

### LS-CROSS-APP-RELATION-DELETION5-ACTION-HIERARCHY-AUDIT

**AUDIT COMPLETE / DESIGN DIRECTION RECORDED / IMPLEMENTATION NOT STARTED** —
2026-08-28.

The bounded action-hierarchy audit is recorded in
[Cross-App Destructive Action Hierarchy Audit](../cross-app-destructive-action-hierarchy-audit.md).
NarrativeLine and LiaisonScape evidence does not establish a universal
safe-left / destructive-right rule. The reusable principle is one clearly
identified safe choice before the destructive choice in DOM and keyboard order,
with visual separation selected according to the host surface. For the current
LiaisonScape Entity deletion resolution dialog, the recommended bounded
direction is one footer `Keep Entity` followed by zero-blocker-only `Delete
Entity`, with the duplicate header `Keep Entity` removed. Narrow stacking,
final EN/JA copy, and exact spacing remain implementation work.

This is a design/source audit only. Runtime, CSS, i18n, tests, deletion
semantics, and the accepted focus fix are unchanged. Bidirectional Cross-App
acceptance and overall capability closure remain pending.

### LS-CROSS-APP-RELATION-DELETION6-PRESENTATION-IMPLEMENTATION

**AUTOMATED IMPLEMENTATION COMPLETE / FORMAL BOUNDED REAL EDGE PRESENTATION
ACCEPTANCE PENDING** — 2026-08-28.

The bounded LiaisonScape presentation implementation is complete at commit
`34d8164` (`fix: refine Entity deletion resolution presentation`) and is
recorded in [LiaisonScape Relation Deletion Resolution Presentation
Implementation](../liaisonscape-relation-deletion-resolution-presentation-implementation.md).
The duplicate header `Keep Entity` was removed; the footer now keeps one safe
action before zero-blocker-only `Delete Entity`, with a bounded desktop gap and
safe-before-danger full-width narrow stacking. Human-facing EN/JA copy now
describes connected Relations without exposing `blocker` terminology.

Automated tests, lint, build, and diff checks passed. This checkpoint does not
claim formal browser visual acceptance, bidirectional Cross-App acceptance, or
capability closure. The next checkpoint is bounded Real Edge presentation
acceptance; deletion semantics and the accepted focus fix remain unchanged.

### LS-CROSS-APP-RELATION-DELETION7-PRESENTATION-REAL-EDGE-ACCEPTANCE

**FORMALLY ACCEPTED / COMPLETE** — 2026-08-28.

The bounded LiaisonScape presentation refinement passed dedicated Microsoft
Edge visual/interaction acceptance at runtime commit `34d8164`. Evidence is
recorded in [LiaisonScape Relation Deletion Resolution Presentation
Acceptance](../liaisonscape-relation-deletion-resolution-presentation-acceptance.md).
P1/P2 copy, P3 duplicate-action removal, P4/P5 zero-blocker EN/JA layout, P6
desktop spacing, P7 narrow safe-before-danger stacking, and P10 focus
regression all passed. P8/P9/P11/P12 passed as bounded regression evidence.

The acceptance confirms one footer `Keep Entity`, zero-blocker-only `Delete
Entity`, visible desktop separation, full-width narrow stacking, connected
Relation wording, and preserved deletion/focus semantics. Bidirectional
Cross-App acceptance and overall capability closure remain pending.

### XAPP-REL-DELETE3 bidirectional acceptance (2026-08-28)

`XAPP-REL-DELETE3-BIDIRECTIONAL-ACCEPTANCE` was executed as an acceptance-only
checkpoint and is recorded in
[Cross-App Relation Deletion Bidirectional Acceptance](../cross-app-relation-deletion-bidirectional-acceptance.md).
The result is **FORMAL BIDIRECTIONAL ACCEPTANCE: FAIL**. NarrativeLine at
`3b2078f` and LiaisonScape at `34d8164` passed the automated gates and the
bounded Relation, self, parallel, hidden/Event, ambiguity, cancellation, and
extension-preservation checks. LiaisonScape final Entity deletion passed, but
NarrativeLine retained `entity-nl-final` after its two incident Relations were
resolved and final Entity deletion was confirmed. No runtime source was
changed; no runtime commit was created.

The final Cross-App acceptance remains pending, and capability closure remains
deferred. X11 must be resolved and the full bidirectional matrix, including
locale parity, must be re-accepted before item 6 can advance. No targeted
Handoff closure is claimed.

### XAPP-REL-DELETE4 — NarrativeLine final Entity deletion fix (2026-08-28)

**IMPLEMENTED / AUTOMATED GREEN / EXPLORATORY REAL EDGE PASS** at NarrativeLine
commit `7a695b3` (`fix: complete final Entity deletion`). The X11 stale-state
overwrite risk was corrected with a functional Dataset updater, and a focused
real-App regression test now covers explicit resolution of both incident
Relations, cancellation and reopening of final Entity confirmation, and
confirmed target deletion with preservation of unrelated Entity/Event data.
The full 187-test suite, lint, build, and diff checks passed; a fresh Edge
smoke also passed the export assertions.

The prior `XAPP-REL-DELETE3-BIDIRECTIONAL-ACCEPTANCE` FAIL record is preserved.
Formal bidirectional acceptance must be rerun in both directions, including
the full X1-X14 matrix and locale parity; capability closure remains deferred.
The separately recorded NarrativeLine endpoint-separator mojibake and
LiaisonScape generic-dialog button-spacing findings remain presentation
follow-ups and were not fixed in this checkpoint. LiaisonScape runtime source
and the pre-existing dirty CDP diagnostic playbook were unchanged.

### XAPP-REL-DELETE5 bidirectional reacceptance (2026-08-28)

`XAPP-REL-DELETE5-BIDIRECTIONAL-REACCEPTANCE` is **FORMALLY ACCEPTED / COMPLETE**
at NarrativeLine `7a695b3` and LiaisonScape `34d8164`. The full X1-X14
Cross-App matrix passed in both directions, including the repaired
NarrativeLine final Entity deletion, LiaisonScape final Entity deletion,
self/parallel/hidden Relations, duplicate identity, Cancel safety, unknown
Extension preservation, Dataset export/open transfer, and EN/JA semantic
parity. NarrativeLine (187), LiaisonScape (216), CDP helper (4), and e2r-spec
validation gates were green; dedicated Edge evidence confirmed native dialog
state `closed`.

The original `XAPP-REL-DELETE3-BIDIRECTIONAL-ACCEPTANCE` FAIL record remains
historical and unchanged. Bidirectional acceptance is now closed for this
bounded workstream, but capability closure, targeted Handoff discovery, and
the deferred NarrativeLine endpoint-separator mojibake and cross-app generic
confirmation button-spacing findings remain separate follow-ups. No runtime
source or ai-knowledge change was made in this acceptance-only checkpoint.

### XAPP-REL-DELETE6 capability closure (2026-08-28)

`XAPP-REL-DELETE6-CAPABILITY-CLOSURE` is **FORMALLY ACCEPTED / CROSS-APP
IMPLEMENTATION ALIGNED / COMPLETE**. The closure is recorded in [Cross-App
Relation Deletion Capability Closure](../cross-app-relation-deletion-capability-closure.md).
The canonical status is now:

- Cross-App Relation deletion design: **ACCEPTED**;
- NarrativeLine implementation: **ACCEPTED / COMPLETE**;
- LiaisonScape implementation: **ACCEPTED / COMPLETE**;
- bidirectional Dataset interoperability: **FORMALLY ACCEPTED / COMPLETE**;
- bounded Cross-App Relation deletion capability: **COMPLETE / CLOSED**.

The closure covers the accepted semantic contract, explicit Relation deletion,
no silent cascade, hidden and Event-related Relation handling, self and
parallel Relation identity, final explicit Entity deletion, unrelated Dataset
preservation, and the successful X1-X14 matrix in both directions. The prior
XAPP-REL-DELETE3 FAIL record remains historical and unchanged; its X11 defect
was corrected by NarrativeLine commit `7a695b3` and passed in the XAPP-REL-DELETE5
reacceptance.

Targeted capability-based Handoff, capability discovery/manifest, target-app
discovery, Handoff URL syntax, provenance, generalized Relation editing, and
bulk deletion remain separate future work. The deferred NarrativeLine endpoint
separator mojibake and generic Cross-App confirmation button-spacing findings
also remain separate presentation follow-ups. No Core, Extension, schema,
runtime, or ai-knowledge change was made by this documentation-only closure.

### XAPP-CAPABILITY-HANDOFF1 discovery audit (2026-08-28)

`XAPP-CAPABILITY-HANDOFF1-DISCOVERY-AUDIT` is **AUDIT COMPLETE / DESIGN
DIRECTION RECORDED / IMPLEMENTATION NOT AUTHORIZED**. The audit is recorded in
[Cross-App Capability Handoff Discovery Audit](../cross-app-capability-handoff-discovery-audit.md).

The source audit confirms that NarrativeLine and LiaisonScape implement the
accepted Dataset Handoff v0 `datasetUrl` startup flow, while Hub currently
generates explicit sample links to those applications. None of the three
currently publishes or consumes a target Object plus required-capability
declaration for runtime routing. Existing Cross-App Relation deletion remains
**FORMALLY ACCEPTED / CROSS-APP IMPLEMENTATION ALIGNED / COMPLETE** and is not
reopened by this audit.

The recorded first bounded direction is a reviewed static table of first-party
known applications with operation-level capabilities such as `inspect Relation`
and `delete Relation`, canonical full target Object IDs, explicit user action,
recipient-side verification, no network dependency, no automatic third-party
discovery, and a safe no-recipient fallback. Hub may later publish or explain
the table but is not a required registry authority.

The next bounded step is target contract design covering Dataset state,
canonical target identity, required capability, recipient selection,
URL/history ownership, stale target and stale metadata behavior, trust,
privacy, and user confirmation. No manifest schema, URL syntax, runtime
discovery, automatic redirect, registry, Core, Extension, schema, or
application-source change is authorized by this audit.

### XAPP-CAPABILITY-HANDOFF2 target contract design (2026-08-28)

`XAPP-CAPABILITY-HANDOFF2-TARGET-CONTRACT-DESIGN` is **DESIGN ACCEPTED / URL
CONTRACT NOT YET DESIGNED / IMPLEMENTATION NOT AUTHORIZED**. The accepted
transport-independent contract is recorded in [Cross-App Capability Handoff
Target Contract](../cross-app-capability-handoff-target-contract.md).

The minimum semantic tuple is a transferable Dataset context, the canonical
full target Object ID, and one primary required capability. `targetObjectType`
is an optional consistency hint and never replaces the canonical ID. The first
capability identifiers are application-neutral `relation.inspect` and
`relation.delete`; deletion requires inspection as a safety prerequisite and
never means immediate mutation. Source application identity is optional
diagnostic context, recipient identity is resolved separately, locale is
orthogonal, and a separate Target Contract version must not be confused with
Core, Extension, Dataset, or application version.

Missing target, type mismatch, stale capability metadata, and unsupported
capability all fail non-destructively. Inspect-only support is not a silent
downgrade from delete. Existing Dataset Handoff v0 `datasetUrl` semantics and
Hub sample links remain unchanged. The Cross-App Relation deletion capability
remains **FORMALLY ACCEPTED / CROSS-APP IMPLEMENTATION ALIGNED / COMPLETE**.

The next bounded step is recorded below as URL/transport contract design. No
Core, Extension, schema, application source, capability manifest, runtime
discovery, automatic redirect, or registry change is authorized by this
checkpoint.

### XAPP-CAPABILITY-HANDOFF3 URL/transport contract design (2026-08-28)

`XAPP-CAPABILITY-HANDOFF3-URL-TRANSPORT-CONTRACT-DESIGN` is **DESIGN ACCEPTED /
TRANSPORT CONTRACT DEFINED / IMPLEMENTATION NOT AUTHORIZED**. The accepted
transport is recorded in [Cross-App Capability Handoff URL/Transport
Contract](../cross-app-capability-handoff-url-transport-contract.md).

The first direction extends Dataset Handoff v0's flat URL fragment. It carries
the existing retrievable absolute HTTPS `datasetUrl`, the canonical full
`targetObjectId`, optional exact-case `targetObjectType`,
`requiredCapability`, and `targetContractVersion=1`. Targeted requests are
startup-only, validate duplicates and malformed values, preserve the existing
locale contract, and never turn Handoff into an automatic deletion command.
`relation.delete` still requires safe inspection/presentation and explicit user
action; unknown, stale, mismatched, or unsupported input fails
non-destructively.

The first transport does not carry inline or current-edited Dataset state,
pending drafts, recipient identity, source ownership, or capability
negotiation. Existing v0 links remain unchanged, and an old recipient may
open the Dataset but cannot claim that targeted intent was fulfilled. Cross-App
Relation deletion remains **FORMALLY ACCEPTED / CROSS-APP IMPLEMENTATION
ALIGNED / COMPLETE**. Endpoint-separator and dialog-spacing findings remain
deferred.

The next bounded step is the current Dataset transfer design below, followed by
an implementation-readiness audit. Runtime implementation requires explicit
authorization from a later checkpoint.

### XAPP-CAPABILITY-HANDOFF4 current Dataset transfer design (2026-08-28)

`XAPP-CAPABILITY-HANDOFF4-CURRENT-DATASET-TRANSFER-DESIGN` is **DESIGN
ACCEPTED / FIRST CURRENT-DATASET TRANSFER BOUNDARY DEFINED / IMPLEMENTATION
NOT AUTHORIZED**. The design is recorded in [Cross-App Capability Handoff
Current Dataset Transfer Design](../cross-app-capability-handoff-current-dataset-transfer-design.md).

The accepted first direction has two lanes. A clean Dataset with a known
retrievable URL may use the existing targeted URL Handoff. A modified committed
Dataset or a local Dataset without a source URL uses explicit Export followed by
explicit Open in the recipient; target metadata is not embedded in Core or an
Extension, so the user re-selects the target. Pending work blocks current-state
Handoff until explicitly committed or discarded. Modified plus pending work
requires both boundaries to be resolved.

The transfer is a committed snapshot at export time, using the existing
validated export/serialization path and preserving unknown valid fields and
Extensions. It does not introduce revision fields, fingerprints, hosted
uploads, transfer tokens, live synchronization, or a new URL parameter. No
silent public sharing, stale URL fallback, draft transfer, automatic target
action, or destructive mutation is authorized. Discovery, Target Contract,
URL/Transport Contract, and Cross-App Relation deletion remain accepted; the
endpoint-separator and dialog-spacing findings remain deferred.

The next bounded step is implementation-readiness review for this two-lane
boundary: exact Export/Open ownership, round-trip preservation, dirty/pending
transitions, failure states, and manual target re-selection. Runtime work
requires explicit authorization from that checkpoint.

### XAPP-CAPABILITY-HANDOFF5 implementation readiness (2026-08-28)

`XAPP-CAPABILITY-HANDOFF5-IMPLEMENTATION-READINESS` is **READINESS AUDIT
COMPLETE / READY FOR A BOUNDED IMPLEMENTATION CHECKPOINT / IMPLEMENTATION NOT
AUTHORIZED**. The audit is recorded in [Cross-App Capability Handoff
Implementation Readiness](../cross-app-capability-handoff-implementation-readiness.md).

The audit confirms that the accepted contracts can be implemented with
responsibility-based application modularization. e2r-spec owns contract
semantics; each recipient owns its supported capability and safe landing
surface; the sender owns a small reviewed first-party catalog and current
Dataset availability gate; and Hub remains an optional human-facing
publication surface. No shared runtime package is introduced at this stage.

The first bounded implementation target is LiaisonScape as the recipient:
targeted parsing, exact Relation resolution, and safe `relation.inspect`
landing on the existing Relation Detail surface. The first meaningful sender
direction is then NarrativeLine's existing Entity deletion-resolution Relation
row to LiaisonScape. It is inspect-only, does not open deletion confirmation,
and does not authorize mutation. The current Dataset transfer two-lane safety
boundary remains in force: clean known HTTPS source URLs may use targeted
Handoff; modified/local or pending state uses explicit Export then Open.

The next sequence is recipient implementation and acceptance, followed by
targeted delete-intent compatibility, NarrativeLine source URL tracking and
availability gating, the contextual sender trigger, and cross-app Real Edge
acceptance. No runtime, Core, Extension, schema, Validator, Hub routing, or
ai-knowledge change is authorized by this readiness audit. Endpoint-separator
and dialog-spacing findings remain deferred, and Cross-App Relation deletion
remains closed.

### XAPP-CAPABILITY-HANDOFF6 LiaisonScape recipient inspect (2026-08-28)

`XAPP-CAPABILITY-HANDOFF6-LS-RECIPIENT-INSPECT1` is **IMPLEMENTED / AUTOMATED
GREEN / BOUNDED BROWSER SMOKE PASS** at LiaisonScape commit `0f7fe1c`. The
implementation record is [LiaisonScape Capability Handoff Relation Inspect
Implementation](../liaisonscape-capability-handoff-relation-inspect-implementation.md).

LiaisonScape now parses the accepted targeted flat fragment while preserving
ordinary Dataset Handoff v0 behavior, reuses the existing HTTPS Dataset
acquisition and validation path, resolves the exact canonical Relation ID,
checks the optional exact `Relation` type hint, and lands on the existing
Relation Detail surface for `relation.inspect`. Missing targets, type
mismatches, malformed targeted metadata, and unsupported capabilities fail
non-destructively. `relation.delete` is not implemented here; it cannot open
Delete Confirmation or mutate the Dataset.

The runtime gate passed with 223 tests, lint, build, and diff checks. A bounded
Edge/CDP smoke against the public Lighthouse Dataset opened
`clara-thomas-supervises` in Relation Detail with no confirmation dialog; the
helper's native-dialog state was verified `closed` after its explicit probe.
The targeted and locale fragment remained inspectable. No NarrativeLine,
Hub, capability table, Core, Extension, schema, or Validator change was made.
The next bounded step is the separate `relation.delete` intent compatibility
checkpoint. Cross-App Relation deletion remains closed; endpoint-separator and
dialog-spacing findings remain deferred.

### XAPP-CAPABILITY-HANDOFF7 LiaisonScape recipient Relation delete intent (2026-08-28)

`XAPP-CAPABILITY-HANDOFF7-LS-RECIPIENT-DELETE-INTENT1` is **IMPLEMENTED /
AUTOMATED GREEN / BOUNDED BROWSER SMOKE PASS** at LiaisonScape commit
`95a8c56`. The implementation record is [LiaisonScape Capability Handoff
Relation Delete Intent Implementation](../liaisonscape-capability-handoff-relation-delete-intent-implementation.md).

LiaisonScape now treats accepted `relation.delete` as a non-destructive intent:
it reuses Dataset Handoff v0 acquisition, resolves the exact canonical Relation,
checks the optional `Relation` type hint and the bounded recipient capability,
and lands on the existing Relation Detail surface. The existing explicit Delete
action remains available, but Handoff receipt does not open Confirmation, focus
the destructive control, inject input, or mutate the Dataset. `relation.inspect`
and ordinary v0 behavior remain green; missing, mismatched, malformed, and
unknown targeted requests fail safely.

The LiaisonScape gate passed with 225 tests, lint, build, and diff checks. A
dedicated Edge/CDP smoke confirmed the exact `clara-thomas-supervises` landing,
closed native-dialog state, no initial destructive focus, explicit Delete then
Cancel safety, locale coexistence, reload, and Back/Forward behavior. The
closed Cross-App Relation deletion capability remains closed. NarrativeLine
sender implementation is the next bounded step; capability table publication,
Hub changes, Core/Extension/schema changes, endpoint-separator mojibake, and
dialog-spacing findings remain deferred.

### XAPP-CAPABILITY-HANDOFF8-NL-SENDER1 (2026-08-28)

`XAPP-CAPABILITY-HANDOFF8-NL-SENDER1` is **BLOCKED / NO RUNTIME CHANGE**. The
requested NarrativeLine sender slice was stopped at the pre-implementation
gate and is recorded in [NarrativeLine Capability Handoff
Sender Implementation](../narrativeline-capability-handoff-sender-implementation.md).

At that checkpoint, the readiness document still stated **IMPLEMENTATION NOT
AUTHORIZED** and did not record whether targeted recipient navigation was
same-tab or new-tab/window. No sender button, URL builder, source URL state,
recipient config, or navigation handler was added. Modified/local/pending
Dataset safety boundaries and the explicit Export/Open fallback remain
unchanged. Generic capability-table publication, Hub changes, endpoint-
separator work, and dialog-spacing work remain deferred.

The next bounded step is to update the readiness authority with explicit
sender authorization and navigation behavior, then retry the sender
implementation.

### XAPP-CAPABILITY-HANDOFF8A-SENDER-NAVIGATION-AUTHORIZATION (2026-08-28)

`XAPP-CAPABILITY-HANDOFF8A-SENDER-NAVIGATION-AUTHORIZATION` is **DESIGN
COMPLETE / BOUNDED NARRATIVELINE SENDER AUTHORIZED / NO RUNTIME CHANGE**. The
design record is [Cross-App Capability Handoff Sender Navigation
Authorization](../cross-app-capability-handoff-sender-navigation-authorization.md).

The two Handoff8 blockers are resolved. The next bounded NarrativeLine sender
implementation is authorized for the existing Entity deletion-resolution
Relation row and `relation.inspect` only. Navigation is **same-tab by default**
using a native anchor and a pure targeted URL builder; ordinary browser
modifier behavior may open another context. This avoids popup-blocker and
opener-security concerns without forcing focus or a new window. The sender
must use a reviewed, environment-aware LiaisonScape configuration, and the
existing clean/no-pending/known-HTTPS-source gate and explicit Export/Open
fallback remain mandatory.

The Handoff8 blocked attempt remains historical evidence. Discovery, Target
Contract, Transport Contract, Current Dataset Transfer, Relation deletion
closure, and both LiaisonScape recipient capabilities remain accepted or
implemented. Generic capability-table publication, Hub targeted Handoff,
endpoint-separator work, dialog-spacing work, and formal cross-app acceptance
remain deferred. The next checkpoint is the bounded NarrativeLine sender
implementation; this authorization does not begin it automatically.

### XAPP-CAPABILITY-HANDOFF8B-NL-SENDER-IMPLEMENTATION1 (2026-08-28)

`XAPP-CAPABILITY-HANDOFF8B-NL-SENDER-IMPLEMENTATION1` is **IMPLEMENTED /
AUTOMATED GREEN / BOUNDED CROSS-APP SMOKE PARTIAL**. The implementation record
is [NarrativeLine Capability Handoff Sender Runtime Implementation](../narrativeline-capability-handoff-sender-runtime-implementation.md).

NarrativeLine now exposes the authorized Entity deletion-resolution Relation
row sender surface for `relation.inspect`. It uses a pure targeted URL builder,
the accepted flat-fragment fields, the canonical full Relation ID, an
environment-aware LiaisonScape configuration, and a native same-tab `<a
href>` with no imperative navigation. Clean/no-pending/known-HTTPS-source
eligibility gates targeted navigation. Modified, local, source-less, invalid,
and pending state retain the existing safe explicit Export/Open boundary; no
Dataset or deletion mutation was added.

NarrativeLine verification is green: 194 tests passed, lint passed, build
passed, and diff checking passed. A dedicated Edge smoke confirmed the sender
surface, exact URL fields, same-tab navigation to the public LiaisonScape
origin, same Dataset acquisition, and absence of browser/delete confirmation.
The current public deployment did not expose the targeted Relation Detail
after fragment loading, so exact public recipient landing remains unclaimed
and should be reconciled in a later compatibility/acceptance checkpoint.

The historical Handoff8 BLOCKED record and Handoff8A authorization remain
unchanged. Cross-App Relation deletion remains closed; discovery, target and
transport contracts, current-Dataset transfer design, readiness, and both
LiaisonScape recipient implementations remain accepted or implemented. No
generic capability table, Hub targeted Handoff, Core/Extension/schema change,
endpoint-separator correction, dialog-spacing correction, or ai-knowledge
change was made.

The next bounded step is a fresh recipient deployment/real-edge compatibility
check for exact Relation Detail landing. Formal Cross-App Capability Handoff
acceptance, generic discovery, modified-Dataset automatic transfer, and other
deferred work remain separate.

### XAPP-CAPABILITY-HANDOFF9-NL-LS-REAL-EDGE-ACCEPTANCE1 (2026-08-28)

`XAPP-CAPABILITY-HANDOFF9-NL-LS-REAL-EDGE-ACCEPTANCE1` is **FORMALLY ACCEPTED /
CURRENT SOURCE REVISIONS**. The acceptance record is [Cross-App Capability
Handoff NL-LS Real Edge Acceptance](../cross-app-capability-handoff-nl-ls-real-edge-acceptance.md).

Current-source revisions `158adec` (NarrativeLine), `95a8c56` (LiaisonScape),
and `39d6e08` (e2r-spec record) passed the fresh automated gates and bounded
Edge acceptance. Ordinary Dataset Handoff v0, the authorized NL native-anchor
sender, exact `relation.inspect` targeting, local LS Detail landing, hidden /
self / parallel / same-name identity checks, modified/local/pending safety,
locale coexistence, delete-intent safety, and Back/Forward behavior are
accepted at the current source revisions. Cross-App Relation deletion remains
closed.

The public deployment state is deliberately separate:
**PUBLIC DEPLOYMENT PARITY NOT YET ACCEPTED**. Prior public observation
established Dataset acquisition but not targeted Relation Detail landing, and
a fresh public probe encountered a CDP navigation timeout. This does not
authorize a runtime fix, deployment, or push; the next bounded step is public
revision/parity verification.

Handoff8 BLOCKED history and Handoff8A authorization remain unchanged.
Generic capability-table publication, dynamic discovery, Hub targeted Handoff,
modified-Dataset automatic transfer, endpoint-separator work, dialog-spacing
work, third-party interoperability, and ai-knowledge changes remain deferred.

### XAPP-CAPABILITY-HANDOFF10-PUBLIC-DEPLOYMENT-PARITY-READINESS1 (2026-08-28)

`XAPP-CAPABILITY-HANDOFF10-PUBLIC-DEPLOYMENT-PARITY-READINESS1` is
**DIAGNOSIS COMPLETE / PUSH-DEPLOY NOT PERFORMED**. The readiness record is
[Cross-App Capability Handoff Public Deployment Parity Readiness](../cross-app-capability-handoff-public-deployment-parity-readiness.md).

Current-source acceptance remains green at NarrativeLine `158adec`,
LiaisonScape `95a8c56`, and the e2r-spec acceptance record `fb05042`.
Read-only remote checks confirmed that both required runtime commits remain
local-only on their remote `main` branches. Public NL and LS Pages URLs are
reachable, but the deployed bundles do not expose the current targeted
Handoff terms; public Relation Detail landing and deployed commit identity
therefore remain unaccepted. The formal classification is **A — REQUIRED
RUNTIME COMMITS NOT PUSHED**, with **C — DEPLOYED REVISION UNKNOWN** also
confirmed. No config mismatch or confirmed service-worker cache was found.

The documented decision is **READY TO AUTHORIZE PUSH/DEPLOY**, without taking
that action in this checkpoint. If authorized later, deploy LiaisonScape first,
verify its public targeted recipient and ordinary v0 paths, then deploy
NarrativeLine and verify the sender-to-public-recipient path. Presentation
issues, runtime fixes, generic discovery, Hub targeted Handoff, and
ai-knowledge changes remain deferred.

### XAPP-CAPABILITY-HANDOFF11-LS-RECIPIENT-PUBLIC-DEPLOYMENT1 (2026-08-28)

`XAPP-CAPABILITY-HANDOFF11-LS-RECIPIENT-PUBLIC-DEPLOYMENT1` is **PUBLIC
LIAISONSCAPE RECIPIENT PARITY ACCEPTED**. The deployment record is
[LiaisonScape Capability Handoff Public Recipient Deployment](../liaisonscape-capability-handoff-public-recipient-deployment.md).

With explicit recipient-first authorization, LiaisonScape `95a8c56` was pushed
to `main` and deployed by the existing GitHub Pages workflow. Actions run
`33144996627` completed successfully for that exact head. Fresh dedicated Edge
verification passed ordinary Dataset Handoff v0, direct `relation.inspect`
targeting of `clara-thomas-supervises`, canonical self-Relation targeting,
non-destructive `relation.delete` intent, malformed/unsupported safe failure,
locale, reload, Back/Forward, and native-dialog closure. Public recipient
parity is accepted.

NarrativeLine public sender parity remains **NOT YET ACCEPTED** and full public
NL-to-LS E2E remains separate. Cross-App Relation deletion remains CLOSED.
Handoff8 historical BLOCKED evidence, generic capability-table/discovery,
Hub targeted Handoff, `Remove connection` presentation, endpoint separator,
dialog spacing, runtime fixes, and ai-knowledge changes remain deferred.

### XAPP-CAPABILITY-HANDOFF12-NL-SENDER-PUBLIC-DEPLOYMENT1 (2026-08-28)

`XAPP-CAPABILITY-HANDOFF12-NL-SENDER-PUBLIC-DEPLOYMENT1` is **PUBLIC
NARRATIVELINE SENDER AND PUBLIC NL-to-LS E2E ACCEPTED**. The deployment and
browser evidence is recorded in [Public NarrativeLine to LiaisonScape
Capability Handoff Acceptance](../cross-app-capability-handoff-public-nl-ls-acceptance.md).

With explicit authorization, NarrativeLine `158adec` was pushed to `main` and
deployed through the existing GitHub Pages workflow. Actions run `33146076558`
completed successfully for the exact head. Fresh public Edge verification
passed ordinary Dataset Handoff v0, the Entity deletion blocker sender,
`relation.inspect` URL generation, exact canonical `clara-lighthouse` landing,
hidden Event-related `lead-clara` landing, modified/pending safety, English and
Japanese locale transport, reload, Back/Forward, no Dataset mutation, and
native-dialog closure.

LiaisonScape `95a8c56` was unchanged and was not redeployed; its public
recipient parity remains accepted by Handoff11. Hub and ai-knowledge were
untouched. Cross-App Relation deletion remains CLOSED. Generic capability
discovery, `relation.delete` emission from NarrativeLine, presentation work,
and future capability expansion remain separate and deferred.

## Pre-release and LiaisonScape 0.2.0 release preparation chronology

The following five complete roadmap blocks were transferred from the bounded
pre-release / release-preparation sequence in `docs/roadmap.md` at source
commit `9cd1c3eebdfc7133458fd8d64a56fe6aa207b228`. Source wording, dates,
status language, block order, and provenance are preserved verbatim below.
All `current`, `next`, `blocked`, and `unauthorized` language describes its
dated snapshot, not current planning authority. See the current roadmap status
index and current Initial Layout coordination section for current state.

### PRE-RELEASE-VALIDATOR-AND-SEQUENCING-ROADMAP-SYNC1 (2026-08-29)

The remaining pre-release path is now synchronized around a mandatory
production Validator checkpoint. This is a roadmap record only; it does not
implement Validator behavior, node placement, sample refresh, application
version changes, or deployment.

Before Public Sample Dataset Refresh can be accepted, production Validator
integration and acceptance MUST cover the Presentation Extension Draft
`draft.github.sukoyaka-dopeness.liaisonscape-presentation`, version `0.1.0`:

* `arrowDisplay`: known `normal`, `reverse`, `undirected`, and
  `bidirectional` values.
* `lineStyle`: known `solid`, `dashed`, and `dotted` values.
* Unknown non-empty future tokens for both properties remain forward
  compatible: they must not make an otherwise valid payload fail solely for
  being unknown, and must remain preservable at the accepted boundary.
* Malformed payloads, including invalid types, empty tokens, and invalid
  structural shapes, must be rejected or reported at the appropriate
  Validator boundary without weakening Core validation.
* Core-only datasets remain unaffected, and unknown unrelated Extensions
  remain safely ignorable/preservable according to the Extension rules.
* Orphan Relation-ID Presentation records require an explicit semantic
  validation decision about diagnostic severity and boundary. That question
  remains open here; this sync does not decide orphan behavior.

Node automatic placement remains a separate Layout/placement responsibility.
Before the Validator checkpoint is complete, the project must determine
whether placement uses the existing Coordinate/Layout serialization or
introduces or changes a serialized contract. This sync assumes neither
outcome and chooses no placement algorithm or serialization. If placement
does introduce or change serialized data, its schema and Validator coverage
must be included before Public Sample Dataset Refresh; if it remains entirely
within existing valid serialization, the Presentation Validator scope stays
independent.

The remaining release sequence is:

1. Design, implement, and accept node automatic placement.
2. Resolve any resulting Coordinate/Layout serialization and schema
   implications. **CLOSED 2026-08-30:** the accepted automatic placement
   implementation introduces no new serialized contract, schema, or Validator
   work; see [Automatic Placement Serialization Impact](../liaisonscape-automatic-placement-serialization-impact-result.md).
3. Complete the separate Presentation lifecycle cleanup, including removal
   of a deleted Relation ID's Presentation record where appropriate.
4. Integrate and accept production Validator coverage for the release-
   relevant Extensions, including any newly serialized placement contract.
5. Refresh and accept the Public Sample Dataset only after the Validator
   checkpoint passes. Eventual acceptance also requires LiaisonScape
   open/render/edit smoke coverage, NarrativeLine open/round-trip coverage,
   Extension preservation, Hub/Handoff evidence, and license, credits, and
   sample-metadata checks.
6. Run the cross-application and release integration audit.
7. The LiaisonScape application version decision is now recorded as
   `0.2.0`. The current metadata remains `0.1.0`; the actual bump is deferred
   to bounded release preparation. See
   `docs/liaisonscape-application-version-decision.md`.
8. Run the final pre-public-release audit.
9. Obtain explicit authorization before any push or deployment.
10. Perform public deployment acceptance only after that authorization.

Lighthouse Restoration remains a later Public Sample Dataset workstream. It
does not authorize adding Relations or inferring Relations between mojibake
sample names. The completed Relation Arrow display work, Relation Line style
work, and LiaisonScape Credits locale-parity work remain closed and are not
reopened by this sequencing record. The existing application modularization
and repository boundaries remain in force.

### E2R-LIAISONSCAPE-0.2.0-RELEASE-PREPARATION1 (2026-08-30)

The bounded LiaisonScape application release preparation is complete locally.
Application metadata and Credits now identify `0.2.0`; the First Distribution
provenance date `2026-08-16` remains preserved, and the update metadata date is
`2026-08-30`. The README now reflects Validator `0.4.0` and the `0.2.0`
release-candidate state.

This preparation changes no Dataset, Core, Extension, schema, Handoff,
Validator, Coordinate, Presentation, DOM-package, or dependency version. The
application remains `private: true`. Tagging, GitHub Release, deployment, and
public acceptance remain separate later actions requiring explicit
authorization.

### E2R-PRE-RELEASE-ROADMAP-PLACEMENT-ORDER-LICENSE-RECORD1 (2026-08-30)

The current pre-public-release authority now supersedes the sequencing details
above while retaining them as historical records. LiaisonScape 0.2.0 remains
blocked on repository-owned `LICENSE`/`LICENSE.md` remediation; this checkpoint
does not add that file. The bounded audits and active sequence are recorded in
[Pre-Public-Release Placement, Display-Order, and License Sequencing](../pre-public-release-placement-order-license-sequencing.md).

The active order is license remediation, Initial Node Placement Objective Audit,
NarrativeLine Display-Order Reordering Audit, result-driven samples and release
evidence, Final Pre-Public-Release Audit, and—only if READY and explicitly
authorized—public sync, tag, GitHub Release, deployment, and public acceptance.
Neither audit authorizes Core, History, schema, or runtime implementation;
Research shelf inventory and the Hub concept page remain separate workstreams.

### E2R-LIAISONSCAPE-INITIAL-NODE-PLACEMENT-OBJECTIVE-AUDIT1 (2026-08-30)

The Initial Node Placement Objective Audit is recorded in [LiaisonScape Initial Node Placement Objective Audit](../liaisonscape-initial-node-placement-objective-audit.md).
The result is `SAMPLE REFRESH REQUIRED - INITIAL PLACEMENT ALGORITHM
ACCEPTABLE`: both Lighthouse Restoration samples contain stored coordinates
for all 10 Entities, so Dataset open does not exercise the missing-coordinate
placement path. The observation therefore does not establish that the
placement algorithm is the primary cause.

The next bounded activity is a stored-versus-derived diagnostic comparison and
sample-coordinate refresh decision. No runtime, schema, Coordinate, Core,
Extension, sample, or release operation was authorized by this audit. The
NarrativeLine Display-Order audit remains next in the pre-release sequence.

### E2R-LIAISONSCAPE-LICENSE-REMEDIATION1 (2026-08-30)

The LiaisonScape repository-owned MIT license blocker is now remediated. The
root `LICENSE` uses `Copyright (c) 2026 sukoyaka-dopeness`; `package.json`,
`package-lock.json`, and README are synchronized. The evidence is recorded in
[LiaisonScape License Remediation Result](../liaisonscape-license-remediation-result.md).

This closes only the license checkpoint. LiaisonScape remains `0.2.0` and
`private: true`; runtime, Dataset, sample, Core, Extension, and specification
licensing boundaries are unchanged. Initial Node Placement Objective Audit is
now next, followed by the NarrativeLine Display-Order Reordering Audit. The
Final Pre-Public-Release Audit has not been rerun, and public release remains
unauthorized.

## History 2 position/circa authoring and Dataset upgrade chronology (2026-09-19)

The following five dated Roadmap blocks are preserved in their original source
order and wording. Their `current`, `pending`, `open`, and `next` language is
the status of each original checkpoint, not current planning authority. The
bounded closure checkpoint originally placed between the declaration repair
and Dataset-wide planning blocks remains in the [current Roadmap closure
entry](../roadmap.md#e2r-h2-position-circa-bounded-authoring-closure-2026-09-19);
its closure result governs present status. Relative Markdown links are
adjusted only for this file's location.

### E2R-HISTORY-2-USER-FACING-AUTHORING-SCOPE-DESIGN (2026-09-19)

> Historical planning checkpoint; current H2-POSITION-CIRCA status is governed
> by the bounded authoring closure entry below.

The [History 2 User-Facing Authoring Scope result](../history-2-user-facing-authoring-scope-result.md)
records a documentation-only design checkpoint after `NL-H2-R1` acceptance.
Current Candidate recognition and read-only preservation remain **ACCEPTED /
CLOSED**; this checkpoint does not reopen them or authorize runtime work.

The smallest proposed meaningful public History 2 experience is one
`position` assertion with optional position-level `approximation: "circa"`,
using an explicit History `1.0.0` to `2.0.0` upgrade only when the H2-only
capability is selected. Bounded-point, temporal-extent, multiple assertions,
Relative Time, and broader Timeline semantics remain deferred. The proposal
requires human scope approval, especially for non-fabricating Timeline display
and approximate-value ordering, before a bounded NarrativeLine implementation
checkpoint may begin.

### E2R-H2-POSITION-CIRCA-HUMAN-SCOPE-DECISION-PREPARATION (2026-09-19)

> Historical checkpoint; the retained recommendation is superseded for current
> status by `E2R-H2-POSITION-CIRCA-BOUNDED-AUTHORING-CLOSURE` below.

The [H2-POSITION-CIRCA decision preparation](../history-2-position-circa-human-scope-decision-preparation-result.md)
is complete. It recommends acceptance of one History 2 `position` assertion
with position-level `approximation: "circa"`, subject to explicit human
approval of the non-fabricating Timeline presentation projection, H1-to-H2
upgrade confirmation, H2-to-H1 downgrade boundary, and declaration cleanup.
This remains **RECOMMENDED FOR ACCEPTANCE / HUMAN APPROVAL REQUIRED** and does
not authorize NarrativeLine runtime work.

### E2R-H2-POSITION-CIRCA-BOUNDED-AUTHORING (2026-09-19)

> Historical implementation checkpoint; its pending human-acceptance status is
> superseded by the bounded closure entry below.

The explicitly approved H2-POSITION-CIRCA slice is implemented in
NarrativeLine and automated validation is green. The bounded surface is one
History `2.0.0` `position` assertion with optional position-level
`approximation: "circa"`, explicit History 1 to History 2 upgrade confirmation,
safe H2 exact editing, and the non-fabricating recorded-position Timeline
projection. The application result is **IMPLEMENTED / AUTOMATED GREEN / HUMAN
ACCEPTANCE REQUIRED**. Human acceptance remains required before this
capability is considered accepted, and History 2.0.0 remains a non-Stable
candidate. Bounded-point, temporal-extent, multiple assertions, Relative Time,
and broader temporal semantics remain deferred.

### E2R-H2-POSITION-CIRCA-DECLARATION-BLOCKER-FIX (2026-09-19)

> Historical repair checkpoint; its pending real-browser status is superseded
> by the bounded closure entry below.

The NarrativeLine repair result records the declaration boundary exposed when
a Dataset contained an existing Stable History 1 Event alongside the
explicitly upgraded circa Event. Current Validator evidence shows that
silently placing that H1 sibling under a History 2 declaration would be
invalid, so the application does not migrate or accept that mixed state.
The approved single-representation path is automated-green, but the current
status is **BOUNDARY CLARIFIED / REAL-BROWSER ACCEPTANCE PENDING** because the
fresh browser rerun could not initialize in the available browser connector.
This does not promote History 2.0.0 or close human acceptance.

### HISTORY-2-DATASET-WIDE-H1-TO-H2-UPGRADE-PLANNING (2026-09-19)

> Historical implementation-planning checkpoint; its open acceptance status is
> superseded by the bounded closure entry above.

The [scope-closure result](../history-2-dataset-wide-h1-to-h2-upgrade-scope-closure-result.md)
was approved for implementation. The [NarrativeLine implementation result](https://github.com/sukoyaka-dopeness/e2r-narrative-line/blob/main/docs/history-2-dataset-wide-upgrade-implementation-result.md)
records **IMPLEMENTED / AUTOMATED GREEN** across Entity, Event, and Relation
History payloads, with strict preflight, atomic refusal, declaration
synchronization, and draft-preserving confirmation behavior. Browser
infrastructure diagnosis, Real Browser acceptance, and Human acceptance remain
open; History 2.0.0 remains a non-Stable Candidate.

The implemented scope defines an explicit atomic Dataset-wide History `1.0.0`
to `2.0.0` upgrade. Opening, viewing, ordinary
exact date/time editing, saving, exporting, or reloading an H1 Dataset without
using an H2-only capability must keep its H1 representation. The first
explicit use of an H2-only capability, currently
`approximation: "circa"`, is the planned upgrade trigger.

Because the exact History declaration is Dataset-level, the target is not an
Event-local H1/H2 mixture. The implementation converts relevant H1 exact
positions across the Dataset to equivalent H2 exact positions, applies
`circa` only where selected, and changes the declaration atomically. Exact and
approximate Events may coexist in a fully H2 Dataset; the refused state is a
mixed H1/H2 representation under one exact declaration. Detailed conversion
rules are recorded in the linked implementation result.

The safety direction is explicit and atomic: Cancel leaves the Dataset in H1;
failure must not leave a partial migration; any relevant H1 History that
cannot be converted safely causes refusal; and unknown data must not be
silently discarded. The planned sequence is:

1. Browser acceptance infrastructure timeout diagnosis.
2. Real-browser acceptance.
3. Human acceptance and H2-POSITION-CIRCA acceptance closure.
4. Documentation and roadmap structural cleanup.

The browser connector timeout cause is not established; in particular, port
`24678` is not identified as its cause. Timeout diagnosis is a separate
bounded checkpoint before real-browser acceptance. Roadmap splitting, archive
migration, and broader documentation IA cleanup remain deferred until after
H2-POSITION-CIRCA human acceptance closure. No further migration
implementation, schema change, Validator change, sample change, or Relative
Time change is authorized by this planning entry.

## Post-release LiaisonScape / NarrativeLine Observation Audit (2026-09-23)

The following dated audit and follow-up blocks are preserved as historical
observations, including their audit-time classifications, measurements,
revision snapshots, and bounded candidates. Later dispositions are not
rewritten into these records. Current status, operative Human decisions,
and environment-specific limits remain in the [roadmap status index and
current inventory](../roadmap.md#current-status-index-2026-09-22).

### Post-release LiaisonScape / NarrativeLine observation audit — 2026-09-23

This is a read-only audit record based on the current application source,
focused tests, existing result documents, current roadmap authority, and the
served public Pages entry points. No application, sample, schema, Validator,
or runtime behavior was changed by this audit. Existing accepted Handoff,
History 2, graph interaction, and deletion boundaries remain closed.

The classifications below are dated audit observations, not all current task
statuses. Later evidence and dispositions are recorded in the follow-up
sections and linked acceptance results; historical observations are retained
without reopening a closed boundary.

| Observation / surface | Classification | Evidence at audit time and bounded next step |
| --- | --- | --- |
| LiaisonScape narrow Entity/Relation Detail modal at approximately 390px | **INITIAL OBSERVATION; BOUNDED MATRIX LATER ACCEPTED / NO DEFECT** | At audit time, `.detail` was width-bounded with internal vertical scrolling and fields were width-constrained, but no explicit safe-area, keyboard, or orientation contract was identified. The later narrow UI follow-up below records the tested portrait/landscape matrix as accepted with no defect. Physical safe-area and OS-keyboard coverage remains environment-specific follow-up; this is not a current claim of modal overflow. |
| LiaisonScape phone landscape graph-canvas expansion | **EXPLORATORY / HUMAN SCOPE DECISION PENDING** | The current roadmap inventory retains this as a Human scope decision; no feature adoption is recorded. The earlier suggestion of an orientation audit is not authorization to implement or prioritize a landscape mode. |
| LiaisonScape `Add Relation` with zero graph Nodes | **ALREADY COMPLETE / NO FOLLOW-UP** | The earlier audit confirmed the enabled-but-unsatisfiable entry point. The bounded entry-point guard has since been implemented and the accepted Node 1/self-Relation and multi-Node flows remain separate regression boundaries. No Relation, Core, schema, or Validator semantics are reopened. |
| LiaisonScape selected Relation identity line | **ALREADY COMPLETE / NO FOLLOW-UP** | The earlier full-ID observation led to the accepted three-line Relation name/Source/Target status correction, Entity-status typography alignment, and removal of the obsolete curve-guidance message. Full Relation IDs remain in Relation Detail technical details; no new display-policy task is open here. |
| LiaisonScape selected Relation curve guidance | **ACCEPTED / NO DEFECT** | The current source starts curve manipulation only for the selected edge, and the existing closure document/tests record the matching guidance and Escape/pointer-cancel behavior. No implementation change is authorized by this observation. |
| NarrativeLine no-date Event creation and History notice | **ALREADY IMPLEMENTED / OBSERVATION MISMATCH** | Current `classifyHistoryCapability()` treats absent History as editable, and the Event Detail notice is used for candidate, unknown, unsupported, or mixed History states. The current tests pass for a new Dataset with no existing H1 records: circa initialization does not show the Dataset-wide migration confirmation. If the notice appears for a genuinely new no-History Event, the payload/state or served revision must first be identified; do not alter the accepted H1→H2 boundary. |
| NarrativeLine public Pages revision for the History observation | **REVISION UNVERIFIABLE** | At audit time, the public entry point responded and served a NarrativeLine bundle containing the read-only copy, but the HTML/assets exposed no commit SHA or deployment metadata. The then-recorded local source was `0600465df14e561bcf176d23c5ba9c471bc45027`, versus `origin/main` at `db49ceff2aa38398d716001d9e1bca35bb46732f`; these are historical references, not current application-repository state. The served artifact could not be mapped to either revision from the available evidence. |
| NarrativeLine English-label narrow Header wrapping | **HISTORICAL OBSERVATION; BOUNDED LOCAL ACCEPTANCE LATER CLOSED** | The reported initial wrap and its unconfirmed cause are retained as the original observation. The later [narrow Header acceptance result](../narrativeline-narrow-header-robustness-acceptance1-result.md) records the local robustness correction and tested narrow EN/JA, navigation, focus-visible, and overflow checks as **ACCEPTED / CLOSED**. The original device-specific observation is not claimed disproven; physical-device reproduction or confirmation of a deployed artifact containing the correction remains outside that bounded closure. |

#### Detailed audit boundary

The LiaisonScape Relation Detail already renders endpoint names when available,
and the Relation service resolves endpoints from Entities or Events. The
Entity deletion contract refuses deletion while incident Relations remain;
therefore normal accepted deletion does not leave an orphaned Relation that
would require a new fallback presentation. Malformed or hidden graph records
may still expose raw IDs, which is a diagnostic fallback rather than evidence
that deleted Nodes are normally retained.

The existing human-facing short-ID rule was confirmed in application source:
endpoint and related-Relation displays start at an eight-character prefix and
extend it only to resolve a collision. This is existing LiaisonScape evidence
and remains a hypothesis scoped to human-facing Object ID hints; it does not
authorize applying the rule to the selected-status line without a bounded
presentation decision.

The current selected-edge interaction is consistent with the accepted Direct
Graph Authoring closure: only a selected Relation edge starts the curve-drag
path, and the guidance is conditional on Relation selection. The audit did not
reopen viewport-toolbar, graph routing, or touch interaction work.

#### Narrow UI audit follow-up — 2026-09-23

This additional pass remains read-only and narrows the evidence without
overwriting the earlier classifications. No application, CSS, test, sample,
schema, Validator, or runtime change was made.

| Application / surface | Classification | Additional local-browser evidence |
| --- | --- | --- |
| LiaisonScape Entity Detail / Relation Detail at 390px portrait and 844×390px landscape | **ACCEPTED / NO DEFECT** for the tested matrix | The local Vite app opened the Lighthouse sample through the normal sample action. At 390px portrait, the Entity Detail modal was `x=8, width=374, right=382` within the 390px viewport; Relation Detail was also `x=8, width=374, right=382`. Long Relation name/description values stayed inside the fields and used field-level scrolling/wrapping. At 844×390px landscape, both tested modal forms stayed within the viewport (`x=134, width=576, right=710`, `y=16, height=358, bottom=374`) and used internal vertical scrolling for the longer form. No horizontal document overflow was observed. This does not claim a physical-device safe-area or OS keyboard audit; those remain a separate environment-specific acceptance concern if the original report persists. |
| NarrativeLine narrow Header with `戻る` + `English` | **INITIAL LOCAL MATRIX DID NOT REPRODUCE; BOUNDED ACCEPTANCE LATER CLOSED** | Cold/reload and SPA navigation were exercised through the local sample flow. At 390px, the Header buttons measured `戻る=46.44px` and `English=67.03px`, both at `y=16..52`; the same row remained intact at 375, 360, 350, 340, 320, and 300px with no document horizontal overflow. After toggling, the English-locale labels measured `Back=50.63px` and `日本語=65px`, also on one row. This non-reproduction remains part of the audit history. The later [narrow Header acceptance result](../narrativeline-narrow-header-robustness-acceptance1-result.md) closes the bounded local acceptance; it does not claim equivalent physical-device reproduction or identify the Public artifact's source revision. |

For the LiaisonScape pass, Escape closed the open Relation Detail modal and keyboard Tab produced the existing visible focus outline on the graph action. The modal source continues to provide a backdrop close button, dialog semantics, and `overflow: auto`; no accepted focus or dismissal contract was changed. For NarrativeLine, the Header flex/grid source was inspected together with the rendered button widths; no implementation conclusion is drawn from the non-reproduction.

#### Add Relation zero-node audit follow-up - 2026-09-23

This focused audit records the pre-fix evidence and classification at that
checkpoint. It is retained as historical provenance; later roadmap status
records the bounded entry-point guard as implemented. No application, CSS,
test, sample, schema, Validator, or runtime behavior was changed by this audit.

Audit-time classification: **DEFECT CONFIRMED / BOUNDED FIX READY**.

In the local LiaisonScape browser at a 390px portrait viewport, a newly
created empty Dataset reported `0` Entities and `0` Relations, while the
`Add Relation` action was visible, enabled, and keyboard-focusable
(`tabIndex=0`). Pointer activation opened the Relation Creation dialog. Both
endpoint selects contained only their placeholder option, and the Create
Relation action was still enabled. Activating it produced the existing
localized `relation_endpoint_required` refusal (`Source Entity` and `Target
Entity` must be selected); the Dataset remained `0/0` and the dialog stayed
open. Document scroll width remained equal to the 390px viewport.

With one locally created Entity, the summary changed to `1` Entity and `0`
Relations, the Add Relation action remained enabled, and both endpoint selects
contained the Entity as a valid option. This is a valid creation precondition:
the current Relation service permits a self-Relation, so the relation count is
not the gating condition. The Lighthouse Restoration sample browser surface
also showed `10` Entities and `14` Relations with Add Relation enabled.

At audit time, the source boundary was narrow and application-local:
`src/App.tsx` disabled the action only when no Dataset existed or an active
preview was shown; it did not check `graph.nodes.length`.
`src/services/RelationService.ts`
requires both endpoint IDs to resolve to existing Entities and returns the
original Dataset on refusal. Existing direct-graph documentation records the
same refusal/no-mutation boundary and permits self/parallel Relations.

The audit's bounded implementation candidate was an entry-point guard for the
LiaisonScape Add Relation action when `graph.nodes.length === 0`, without
changing Relation semantics or the CreationDialog. The later inventory above
records that guard as implemented and the accepted Node 1/self-Relation and
multi-Node flows as separate regression boundaries. This historical candidate
does not request reimplementation or reopen the completed boundary.

#### Public-web evidence boundary

The following public entry points returned HTTP 200 on 2026-09-23:

- `https://sukoyaka-dopeness.github.io/e2r-liaison-scape/`
- `https://sukoyaka-dopeness.github.io/e2r-narrative-line/`
- `https://sukoyaka-dopeness.github.io/e2r-hub/`

The served HTML exposes product titles and hashed JavaScript assets, but no
commit or deployment revision. Public UI state requiring Dataset interaction
could not be used to establish a revision-specific reproduction in the
available browser surface. Therefore public revision claims remain
**REVISION UNVERIFIABLE**, not evidence that the local source is stale or that
the reported behavior is reproduced.

#### Validation and retained work

The figures below are the audit-time validation snapshot, not a statement of
current application-repository status. Later [shell parity](../cross-app-shell-action-hover-focus-parity-audit1-result.md)
and [Dataset Replacement parity](../cross-app-dataset-replacement-destructive-styling-parity-audit1-result.md)
results record LiaisonScape's full suite at 641/641; the earlier 635/636
result and its unrelated failure are retained here as historical diagnostic
evidence.

- LiaisonScape focused UI, Relation service, and deletion tests: **51/51 PASS**.
- NarrativeLine History/H2 focused run: **PASS**; the new no-History Dataset
  circa case passed.
- e2r-spec `npm run validate`: **PASS**.
- LiaisonScape full suite: **635/636 PASS**; the single failure is the
  existing `tests/initial-layout-provider.test.ts` expectation of
  `prototype` versus actual `fallback`, unrelated to these UI/History
  observations. Repeated jsdom `attachEvent`/`detachEvent` diagnostics and
  test-server port messages were environment noise, not new product failures.

At that audit checkpoint, existing dirty and untracked work was preserved:
NarrativeLine `AGENTS.md`,
Entity Create/test changes; LiaisonScape `.tmp-*` and research/temp paths; and
e2r-spec's two modified exploratory research files and `work/`.

This record does not reopen accepted Relation Handoff, History 2
`position + circa`, Relative Time preservation, Causal/Undated research, or
any public-release closure. No implementation, commit, push, deploy, or
publication was performed.

### LiaisonScape selected Relation identity display policy audit (2026-09-23)

This records the **pre-implementation OBSERVED / DISPLAY POLICY COMPARISON**.
The later bounded implementation completed the Human-selected three-line
Relation status structure; this historical comparison is retained for
decision provenance and is not an open implementation task. The current
selected-status line is built from the existing Relation-name/endpoint
display helper, while full Relation IDs remain in technical details. No new
Relation display policy is opened by this inventory.

The existing Relation Detail and related-Relation surfaces provide reusable
evidence but not an automatic policy for this status line: they prefer
trimmed endpoint Names, disambiguate duplicate Names with the existing
eight-character-or-longer ID prefix, and retain full IDs in technical
details. Empty endpoint Names currently fall back to the existing raw ID
value. The normal Entity deletion contract removes incident Relations, so a
new orphan fallback policy is not implied.

The bounded comparison covered: keeping the full ID; Relation Name primary
with an ID auxiliary; Relation Name plus endpoint Names; a direction-neutral
natural relationship presentation without Source/Target labels; a short ID
auxiliary; and reuse of the existing Detail/card data policy. Full IDs have
the best uniqueness and diagnostic value but the weakest first-glance
comprehension and the highest narrow-width risk. Name-first alternatives are
more readable but require explicit handling for unnamed or duplicate
Relations and for long EN/JA wrapping. Endpoint composition is more
informative but is longer and raises a direction/punctuation decision.

Recommended next checkpoint (not a decision): compare a Name-first status
line with the existing endpoint-label fallback, while keeping the canonical
full Relation ID in Relation Detail technical details. Human must choose
whether unnamed Relations use the natural endpoint pair or an ID fallback,
and whether endpoint names appear for named Relations. No implementation is
authorized by this audit.

## Pre-reconstruction application UX and shell acceptance extraction (Roadmap source snapshot 2026-09-24)

The blocks below were extracted from the portion of `docs/roadmap.md` before its `Roadmap reconstruction checkpoint — current canonical summary`, as it stood at parent commit `e66b05a6fd731a4a779052d92980deda69d1c3be`. Complete source headings and selected acceptance excerpts retain their Roadmap source order and original wording; relative Markdown hrefs are adjusted to resolve from this History file. Dated statuses, test counts, and sequence language are historical snapshots only. Current open/deferred direction and acceptance boundaries remain in the Roadmap.

### F2-LS1 acceptance checkpoint

LiaisonScape F2-LS1 Home / Workspace Header Locale Placement is
**Accepted / Closed** at the recorded evidence boundary. Acceptance evidence
and the runtime checkpoint are recorded in
`docs/liaisonscape-cross-app-shell-alignment-f2-ls1-acceptance.md`.

The accepted checkpoint includes the Workspace Header blank-area hit-area fix,
stable vertical editor-shell geometry at the 600px breakpoint, Credits opener
focus restoration, and the accepted Home / Workspace / Footer shell hierarchy.
It does not close the unrelated residual UX follow-ups below or authorize
runtime work outside the checkpoint.

### Cross-App Dataset Replacement destructive styling parity (accepted closure)

- **Cross-App Dataset Replacement destructive styling parity — ACCEPTED / CLOSED**
  — the modified-only, pending-only, and modified-and-pending action matrices,
  safe-side focus, danger/hover hierarchy, EN/JA copy, and representative
  normal/narrow browser surfaces were audited. NarrativeLine's weaker
  destructive treatment was corrected locally for this dialog only. See the
  [audit result](../cross-app-dataset-replacement-destructive-styling-parity-audit1-result.md).

### F2-LS1 accepted-check inventory

F2-LS1 is no longer an open blocker. Previously accepted checks include
Workspace Header blank-area regression correction, brand and explicit Home
navigation, Dataset/selection preservation through locale switching, Credits
backdrop/Escape dismissal, opener focus restoration, representative Dataset
Replacement Dialog focus and dismissal behavior, toolbar breakpoint behavior,
and extreme-narrow brand behavior.

### Cross-App shell action hover parity

**ACCEPTED / CLOSED — LOCAL HOVER CORRECTION.** The bounded Chrome audit found
matching 3px purple `focus-visible` rings and matching locale hover colors, but
LiaisonScape's bordered Home anchor lacked hover feedback while NarrativeLine
Header buttons and both locale controls had it. LiaisonScape now gives that
Home anchor the existing light-purple background/purple border hover treatment.
EN/JA, representative wide, and 390px browser states pass without overflow.
See [audit result](../cross-app-shell-action-hover-focus-parity-audit1-result.md).

### NarrativeLine Workspace More acceptance — 2026-08-25

The C2 deferral above is historical and remains accurate for the point at
which only Open Dataset was considered. During the subsequent NarrativeLine
C3/C4 work, Export was accepted as a second meaningful secondary action. The
current accepted result is a text `More` / `その他` menu containing `Open E2R
Dataset` and `Export E2R JSON`.

Add Event remains visible as the Timeline's primary editing action. Home
New / Open / Sample remains the canonical primary Dataset acquisition and
replacement path; workspace Open is secondary convenience access. LiaisonScape
keeps its current Workspace Open / Import presentation, with conceptual parity
deferred to a later separately scoped follow-up.

TimelineScreen owns surface-local file acquisition through the local picker,
file read, same-file reset, and local loading/error presentation. App owns
Dataset parsing, validation, candidate staging, replacement safety, and final
acceptance. The accepted C4 modal contract includes backdrop dismissal and
opener focus restoration; native OS file selection, picker Cancel focus, and
real touch remain explicit manual boundaries.

The accepted NarrativeLine evidence is 181/181 automated tests passing, zero
React `act(...)` warnings, and passing lint, build, and diff checks. A Home
replacement-Cancel observation that ended on `body` remains non-blocking and
was not silently fixed.

### NarrativeLine Timeline Back-to-Top acceptance — 2026-08-25

The accepted NarrativeLine Timeline Back-to-Top follow-up adds a conditional
text action to the sticky Timeline toolbar. The action is hidden while the
Timeline top sentinel is visible and appears after meaningful scroll, using
`IntersectionObserver`. Its accepted labels are `↑ Top` and `↑ 上へ`.

The accepted visible action order is `[Add Event] [↑ Top] [More]`; at the page
top it remains `[Add Event] [More]`. Add Event remains the visible primary
editing action, Back-to-Top is a transient navigation affordance, and More
remains the terminal secondary workspace-action container with its existing
panel alignment and behavior.

Activation focuses the Timeline heading and then uses the document-level native
scroll target `window.scrollTo({ top: 0, left: 0, behavior: "auto" })`. Smooth
scrolling is not adopted. Manual acceptance passed for EN/JA, long Timeline
top/middle/bottom states, sticky behavior, keyboard and pointer activation,
heading focus handoff, desktop and 701/700/601/600px layouts, approximately
320px layout, More alignment/stacking, and absence of horizontal overflow.
The approximately 320px Japanese wrap of More is accepted. Automated evidence
remains 181/181 tests passing with no React `act(...)` warnings and passing
lint, build, and diff checks. No Dataset, navigation, modal, locale, Core, or
Extension semantics changed, and no push was performed.

### LiaisonScape LS-M2A acceptance — 2026-08-25

LS-M2A Workspace More / Action Hierarchy is **ACCEPTED / COMPLETE**. This
acceptance supersedes the earlier deferred LS-M2 wording in this roadmap. The
durable acceptance record is
`research/exploratory/liaisonscape-workspace-modernization-audit.md`.

The final contract is: above the Workspace-specific `720px` breakpoint, the
current graph-visible Entity / Relation count is at the toolbar inline start
and `Add Entity`, `Add Relation`, `Save node coordinates`, and `More` form one
inline-end action group. At `720px` and below, the count has its own readable
row, `Add Entity`, `Add Relation`, and `More` remain visible, and Save
Coordinates is inside More. The shell's global `600px` breakpoint is unchanged.

The accepted checkpoint also records the More keyboard contract, preserved
Dataset Replacement Safety for `datasetModified` and `pendingUserWork`, the
removal of persistent successful-load status and the unselected placeholder,
and the unchanged semantics of the Event-related capability notice now shown
below the graph. The next bounded application checkpoint is **LS-M2B —
Dataset title editing**; LS-M2D remains responsible for final capability-notice
presentation.

Retained follow-ups from acceptance: the bounded viewport toolbar
drag-handle/disclosure implementation following
`docs/liaisonscape-viewport-toolbar-collapse-follow-up.md`, LiaisonScape
Credits descriptive-copy localization, common E2R favicon, and Long-form
Object Content / Media responsibility research. No new knowledge candidate was
added.

Small follow-ups must not be lost when development focus moves between
repositories or workstreams. Record a bounded UX, consistency, safety, or
visual follow-up when a concrete observation is discovered, even when it is
intentionally deferred. Recording an item does not raise its implementation
priority or authorize implementation; this ledger is not an unbounded wishlist.

### Current execution order

1. **P0 — ledger synchronization** — this checkpoint; complete.
2. **LS-M1 — LiaisonScape Workspace Modernization Audit** — next phase;
   implementation deferred until the audit is accepted.
3. **LS-M2 — bounded LiaisonScape workspace UX implementation** — deferred;
   depends on LS-M1.
4. **LS-M3 — Initial Node Placement Objective Audit** — major follow-up;
   deferred until workspace modernization is complete.
5. Placement experiments — deferred until LS-M3 justifies them.
6. **S3 — Standards License Formalization & Provenance Audit** — ready but
   intentionally deferred during the bounded LiaisonScape sequence.
7. Metadata 1.1.0 Draft and implementation evidence — deferred after S3.
8. Hub machine-readable dogfood publication readiness — deferred until
   licensing formalization and public redistribution checks.
9. NarrativeLine display-order reordering — explicitly deferred for now.
10. Public interoperability, deployment, and final release audit — later.

S3 remains **READY**; this ordering is temporary, not a permanent
architectural priority. History vNext, Relative Time, Target Reference,
Source/Citation, Semantic/Dictionary, and Layout/Presentation remain
independently gated research or design tracks.

### LiaisonScape metadata divider spacing and superseded follow-up detail

The current status of the Dataset metadata Edit / divider spacing item is
**FIXED / ACCEPTED** at LiaisonScape runtime `72685dc fix: separate Dataset
metadata from toolbar`. The accepted change is `.dataset-metadata`;
`margin-top: 12px` was changed to `16px`. Wide and narrow browser matrices,
EN/JA, Edit mode, keyboard/focus, and no-overflow checks passed, as did
225/225 tests, lint, build, and diff-check. No Dataset behavior changed.
The original near-contact wording in item 1 remains historical; the remaining
Cross-App Flatness Experiment is separate.

1. **LiaisonScape Dataset metadata Edit / divider spacing — bounded visual
   fix, relatively early:** review the apparent near-contact between the
   Dataset metadata-row `Edit` button and the preceding horizontal divider.
   The bounded scope is vertical separation between the toolbar divider and
   the metadata/Edit control, while preserving the current visual language.
   This is a spacing defect, not a redesign: button radius, global control
   density, hover styling, and the known approximately 600/601px responsive
   follow-up remain separate. Implementation acceptance should check both
   narrow and wide layouts for spacing regression. Do not defer this item
   until the Cross-App Flatness Experiment.

### LS-METADATA-ALIGN1 — LiaisonScape Dataset metadata label/value alignment

**FIXED / ACCEPTED / COMPLETE / CLOSED** at LiaisonScape runtime
`ce446e5 fix: align Dataset metadata text`.

The completed bounded follow-up is supported by [LiaisonScape Dataset metadata
alignment audit](../liaisonscape-dataset-metadata-alignment-audit.md), whose design
result was **READY — BASELINE ALIGNMENT ONLY**. The accepted contract is local to
the Dataset metadata label/value text pair: baseline alignment applies across
the covered responsive metadata-row regimes (wide, 721px, 720px, 601px, 600px,
and approximately 360px); Edit remains a separately aligned control inside the
nested value group; nested `dd` centering remains unchanged; horizontal spacing
remains unchanged; and the accepted `margin-top: 16px` divider spacing remains
unchanged.

This is a local LiaisonScape presentation result. It does not establish a global
baseline rule for `dt` / `dd` layouts or flex rows, a shared text baseline for
buttons, NarrativeLine layout parity, or identical metadata geometry across
applications. The earlier pre-implementation observations below remain
historical evidence; they do not represent an open defect after `ce446e5`.

Historical pre-implementation observation (before `ce446e5`): in the
post-spacing-fix browser view, the Dataset metadata label and title value were
one logical row but did not appear vertically aligned. The
label appears slightly higher than the value, weakening the perception that
they form one metadata pair. The observed Japanese example was label
`タイトル`
`灯台修復プロジェクト`. The adjacent `邱ｨ髮・` / Edit button has
its own control geometry and must be evaluated separately from the
label/value text baseline.

Possible causes are recorded for audit only and are not confirmed: different
line-height, element or default inline metrics, row `align-items`, font
metrics, grid/flex alignment, and label/value wrapper geometry.

The horizontal label-to-value distance was investigated by the completed audit
and classified **H1 / ACCEPTABLE / INTENTIONAL**. No horizontal-gap change was
required by this workstream; the earlier observation is historical and is not
an unresolved implementation defect.

The completed audit compared EN and JA; short and long Dataset titles; wide
desktop; approximately 720px; 601/600px; approximately 360px; read-only and
Edit states; keyboard focus-visible; label/value baseline; label/value
horizontal relationship; the text pair's relationship to Edit; and
overflow/wrapping. Its accepted implementation result is recorded above.

`LS-METADATA-ALIGN1` must not reopen the accepted divider-spacing fix. The
current baseline remains `.dataset-metadata { margin-top: 16px; }` from
`72685dc`. This local metadata-row alignment follow-up is separate from the
Cross-App Visual Style / Flatness Experiment, the general 600/601 responsive
topic, and any NarrativeLine parity requirement. Dataset title semantics,
`extensions.metadata.title`, modified/pending state, Save/Cancel,
Replacement Safety, and unknown-field preservation remain unchanged.

### NarrativeLine Header/Footer and CoordinatePanel geometry closures

- The 600/601px Header/Footer vertical geometry follow-up is CLOSED / ACCEPTED
  at runtime commit `b9ad92f055df64b0a1960f22b95d3c2a25fecd05`.
- The CoordinatePanel 600/601 geometry and Space placement follow-up is CLOSED /
  ACCEPTED at runtime commit `ef0026b0a43affa227ce4c10969a231d6c92f2f4`.

### LS-DETAIL-RR1 Related Relation readability — ACCEPTED / CLOSED

LiaisonScape Related Relations now use structured human-readable Relation name,
Source, and Target fields. Names are trimmed for presentation; blank,
whitespace-only, and unresolved values fall back to Object ID. Event endpoint
names may be shown without making Events graph nodes or editing targets.
Duplicate names receive a conditional short Object ID hint in parentheses;
unique names remain uncluttered.

The complete Dataset incident Relation set and exact `relation.id` interaction
are preserved. Dataset identity, schema, graph visibility, technical Object
ID details, and Delete semantics are unchanged. Wide and 320px acceptance,
duplicate-name presentation, Event endpoint presentation, interaction, 191
tests, lint, build, and diff checks passed.

Remaining follow-ups are `LS-REL-ENDPOINT-ID1`, `LS-DIALOG-DRAFT1`,
`LS-CTX-R1`, and `LS-GRAPH-DRAG1`; none is accepted or implemented by RR1.
