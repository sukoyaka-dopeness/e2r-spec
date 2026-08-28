# Status

**XAPP-CAPABILITY-HANDOFF9-NL-LS-REAL-EDGE-ACCEPTANCE1: FORMALLY ACCEPTED /
CURRENT SOURCE REVISIONS**

The current local source revisions for the bounded NarrativeLine sender and
LiaisonScape recipient pass the current-source acceptance gates. Public
deployment parity is intentionally separate and remains:

**PUBLIC DEPLOYMENT PARITY NOT YET ACCEPTED**

This record is a source/runtime acceptance result. It does not authorize a
runtime fix, deployment, push, generic capability discovery, or Hub routing.

# Scope

Accepted in this checkpoint:

- NarrativeLine sender capability `relation.inspect`;
- clean Dataset targeted Handoff only;
- canonical full Relation ID transport;
- native `<a href>` same-tab default navigation;
- LiaisonScape targeted inspect receipt and safe Relation Detail landing;
- LiaisonScape `relation.delete` intent safety regression;
- canonical, hidden/Event-related, self, parallel, and same-name Relation
  identity cases;
- modified, local/source-less, and pending Dataset safety boundaries;
- locale coexistence, reload, and Browser Back/Forward safety; and
- no destructive action or native browser-dialog side effect from Handoff.

Not accepted in this checkpoint:

- public deployment parity;
- generic Capability table or dynamic discovery;
- LiaisonScape sender or Hub targeted Handoff;
- modified Dataset one-click transfer;
- third-party interoperability;
- endpoint-separator or dialog-spacing correction; or
- deployment or push.

# Runtime revisions

| Repository | Revision | Role |
| --- | --- | --- |
| NarrativeLine | `158adec` | authorized sender implementation |
| LiaisonScape | `95a8c56` | inspect and delete-intent recipient implementation |
| e2r-spec | `39d6e08` | sender runtime implementation record and roadmap |

No older commit was reset, amended, rewritten, or substituted for the stated
revision. The source repositories were clean at preflight.

# Historical lineage

The acceptance lineage is:

```text
Handoff8   -> preflight BLOCKED / no runtime change
Handoff8A  -> authorization COMPLETE / same-tab native-anchor decision
Handoff8B  -> NarrativeLine sender IMPLEMENTED
Handoff9   -> current-source Real Edge acceptance
```

The historical blocked record remains
[NarrativeLine Capability Handoff Sender Implementation](narrativeline-capability-handoff-sender-implementation.md).
The Handoff8B implementation result remains
[NarrativeLine Capability Handoff Sender Runtime Implementation](narrativeline-capability-handoff-sender-runtime-implementation.md).

# Public deployment evidence boundary

The preceding public smoke established that the NL sender could navigate to
the public LiaisonScape origin and that the public recipient could acquire the
lighthouse Dataset. It did not establish targeted Relation Detail landing.

The current checkpoint does not rewrite that result as a source failure. A
fresh public probe was attempted with the dedicated Edge session, but the CDP
navigation command timed out while loading the public page. Consequently the
public deployment revision and current public Detail behavior remain
unverified by this checkpoint.

The correct classification is:

```text
current local source:       accepted below
public deployment parity:   not yet accepted
```

# Environment

The current-source acceptance used two independently served local origins:

- NarrativeLine: `http://127.0.0.1:5189/e2r-narrative-line/`;
- LiaisonScape: `http://127.0.0.1:5190/e2r-liaison-scape/`.

NarrativeLine received the approved environment-aware
`VITE_LIAISONSCAPE_URL` value pointing to the local LiaisonScape origin. No
temporary localhost value was committed. The acceptance used a dedicated
temporary Edge profile with Edge version `151.0.4129.107` and the stabilized
`tools/edge-cdp/edge-cdp-helper.mjs` without modifying that helper.

# Automated gates

Fresh pre-acceptance gates passed:

| Repository | Test | Lint | Build | Diff check |
| --- | --- | --- | --- | --- |
| NarrativeLine | 194 passed / 0 failed | PASS | PASS | PASS |
| LiaisonScape | 225 passed / 0 failed | PASS | PASS | PASS |
| e2r-spec | — | — | — | PASS |

`e2r-spec` `npm.cmd run validate` also passed all History, Coordinate Draft,
Names Draft, ID uniqueness, and Apollo sample validation. The application
test runs retained the pre-existing Vite WebSocket port `24678` warning; no
test failed because of it.

# Fixture

The acceptance used the public, retrievable HTTPS Dataset:

`https://raw.githubusercontent.com/sukoyaka-dopeness/e2r-liaison-scape/main/public/lighthouse-restoration-demo.en.e2r.json`

The observable Dataset identity was:

- Dataset ID: `example-lighthouse-restoration-en-v2`;
- title: `Lighthouse Restoration Project`;
- 10 Entities;
- 11 Events; and
- 25 Relations in the source fixture, including graph-hidden Event-related
  Relations, self Relations, parallel self Relations, and repeated relation
  names.

# Matrix A-Q

| Matrix | Scenario | Result | Evidence |
| --- | --- | --- | --- |
| A | ordinary Dataset Handoff v0 | PASS | local Edge loaded the Dataset into the normal LiaisonScape workspace with no targeted Detail opening |
| B | NL sender action presence | PASS | four native sender anchors were present on the authorized deletion-resolution surface |
| C | clean NL → LS `relation.inspect` E2E | PASS | normal anchor click reached local LS and opened the exact target Detail |
| D | canonical identity | PASS | exact target IDs opened, including same-name, self, and parallel cases |
| E | hidden/Event-related Relation | PASS | `built-lighthouse` opened by exact ID despite graph-hidden/Event-related presentation |
| F | modified Dataset safety | PASS | Edge retained the edit and exposed zero targeted hrefs |
| G | pending-work safety | PASS / valid automated evidence substitute | pending-work and eligibility gates passed; no auto-save/discard/navigation path was added |
| H | local/source-less Dataset safety | PASS | Edge sample Dataset path exposed zero targeted hrefs |
| I | native anchor semantics | PASS | real href, no target override, no imperative navigation; normal click was used |
| J | direct LS `relation.delete` intent | PASS | exact Detail opened, Relation remained present, no confirmation or mutation |
| K | explicit delete after intent | PASS | existing accepted LS deletion regression and current 225-test gate cover explicit confirmation boundary |
| L | malformed/unsupported target | PASS / automated evidence | current LS parser and App tests reject unsafe target metadata without mutation |
| M | locale coexistence | PASS | NL `en` sender and LS `ja` delete-intent transport retained target semantics |
| N | reload | PASS / existing accepted Edge evidence plus current source gate | targeted Detail reload behavior remains covered by the accepted LS recipient record |
| O | Browser Back/Forward | PASS | Edge returned to NL and restored the exact LS Detail without blank or destructive state |
| P | unknown Extension preservation | PASS / automated evidence | current NL/LS preservation tests and unchanged fixture data cover opaque Extensions |
| Q | sender/recipient URL agreement | PASS | captured NL href fields matched the LS parser contract exactly |

# Sender/recipient contract agreement

The captured NarrativeLine sender href used the local LiaisonScape base and
the accepted flat fragment. The first sender target was:

```text
targetObjectId=clara-lighthouse
targetObjectType=Relation
requiredCapability=relation.inspect
targetContractVersion=1
locale=en
```

The Dataset URL decoded exactly once to the public fixture URL. The anchor had
no `target` attribute, and no `window.open` or custom preventDefault navigation
path was present.

The recipient resolved the exact canonical IDs:

- `clara-lighthouse` from the NL sender;
- `clara-thomas-supervises` for direct inspect/delete-intent checks;
- `built-lighthouse` for an Event-related hidden Relation;
- `beacon-self-monitor` and `beacon-self-calibrate` for self/parallel cases;
  and
- `sofia-archive` for a repeated `works with` presentation-name case.

# Dataset safety

The sender remained read-only with respect to the Dataset. Handoff rendering,
eligibility evaluation, href construction, and normal anchor activation did
not mutate Entities, Events, Relations, unknown Extensions, drafts, or the
Dataset baseline.

Modified Dataset safety was checked in a fresh Edge profile: an Event name was
changed and saved, the changed text remained visible, and the deletion-
resolution surface exposed zero targeted Handoff hrefs. The original public
source URL was not sent for the modified in-memory Dataset.

Local/source-less safety was checked after explicitly opening the local sample
Dataset. The deletion-resolution surface exposed zero targeted hrefs and the
Dataset remained usable through the existing local workflow.

Pending work is covered by the pure eligibility tests and the existing
pending-work lifecycle tests. The implementation does not auto-save,
auto-discard, transfer a draft, or navigate while pending work is unresolved.
This is recorded as a valid automated evidence substitute rather than an
unsupported visual claim.

# Destructive-action safety

The sender surface kept `Remove connection` as the local action and presented
the Handoff as a separate non-destructive action. The Edge blocker contained
the expected Handoff links but no Relation deletion confirmation.

Direct local LS `relation.delete` intent opened the existing Relation Detail
with the exact target ID. The Relation remained present, Delete Confirmation
was closed, the active element was `BODY`, and the native-dialog state was
verified `closed` after the helper's explicit no-dialog probe. Existing
explicit deletion remains a separate user action and is covered by the
accepted LS deletion regression.

# History/reload

The normal NL anchor click created a same-tab external navigation to LS. Using
the browser navigation history, Back returned to the NL deletion-resolution
surface and Forward restored the same LS targeted URL and exact Relation
Detail. No blank page, repeated destructive action, confirmation reopening,
or stale-target loop was observed.

The accepted LS recipient reload evidence remains applicable to the unchanged
`95a8c56` recipient revision. Reload restores the targeted inspect surface
without mutation or automatic confirmation.

# Locale

The sender emitted the locale independently from target identity and
capability. The NL sender used `locale=en`; direct LS delete-intent acceptance
used `locale=ja`. In both cases the canonical target and capability tokens
remained unchanged and locale did not select a different Relation.

# Native dialog evidence

The dedicated Edge helper reported native-dialog state `closed` after its
explicit no-dialog probe for each completed local scenario. No JavaScript
browser dialog opened. Application-level Relation and Entity confirmation
dialogs were absent on Handoff receipt and inspect/delete-intent landing.

# Public discrepancy diagnosis

The local source result is not inferred from the public deployment. Local
NL/LS acceptance passed on the stated revisions and separate origins. The
public observation remains different: Dataset acquisition succeeded, but
targeted Relation Detail landing was not established. The fresh public probe
also encountered a CDP Page.navigate timeout before a reliable state could be
captured.

The evidence does not distinguish among a stale public asset, a deployment
revision mismatch, or a public-environment loading issue. It therefore does
not authorize a source fix or deployment action. The public revision must be
verified separately before parity can be accepted.

# Formal current-source decision

The hard current-source gates are satisfied:

1. NL automated gate: PASS.
2. LS automated gate: PASS.
3. e2r-spec validation: PASS.
4. ordinary v0 regression: PASS.
5. sender anchor and contract fields: PASS.
6. clean inspect E2E: PASS.
7. exact canonical target resolution: PASS.
8. no destructive automatic action: PASS.
9. modified Dataset safety: PASS.
10. pending-work safety: PASS by valid automated evidence substitute.
11. local/source-less safety: PASS.
12. LS delete-intent safety: PASS.
13. malformed/unsupported safety: PASS by current LS automated coverage.
14. locale coexistence: PASS.
15. reload and Back/Forward safety: PASS by accepted/current evidence.
16. native dialog closed: PASS.
17. source/runtime revisions recorded: PASS.

Decision:

`FORMALLY ACCEPTED / CURRENT SOURCE REVISIONS`

# Public deployment status

`PUBLIC DEPLOYMENT PARITY NOT YET ACCEPTED`

This status is not a failure of the current local source acceptance. It is a
separate deployment-state boundary. No push, deployment, release, or public
asset inspection mutation was performed.

# Explicit exclusions

This checkpoint does not include:

- runtime fixes in NarrativeLine or LiaisonScape;
- public deployment or push;
- generic capability table, manifest, registry, or discovery;
- LiaisonScape sender or Hub targeted Handoff;
- modified Dataset automatic transfer;
- third-party routing or live synchronization;
- Core, Extension, Dataset schema, Validator, or semantic changes;
- endpoint-separator mojibake correction; or
- dialog-spacing correction.

# Next bounded step

The next bounded checkpoint is public deployment revision/parity verification
for the already accepted recipient behavior. It should identify the deployed
LiaisonScape asset revision and re-run the targeted `relation.inspect` landing
against the exact public URL. If a source defect is then proven, record a
separate bounded fix checkpoint; do not mix that fix into this acceptance
record.

# Knowledge Candidate Check

No new `ai-knowledge` entry is created. This record separates current-source
acceptance from deployed-environment acceptance, but that boundary is already
specific to this checkpoint and does not require a reusable knowledge entry.
The pre-existing dirty
`playbooks/e2r-edge-cdp-browser-diagnostic.md` file remains untouched.
