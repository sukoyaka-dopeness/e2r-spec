# LiaisonScape Pre-release Residual Reconciliation

Date: 2026-08-30

Status: `RECONCILED — LIAISONSCAPE LOCAL PRE-RELEASE RESIDUALS CLASSIFIED`

## Model, purpose, and authority

Model used: GPT-5 Codex session. This is a current-state reconciliation, not
a source implementation checkpoint. Authority order is live local filesystem
and Git, accepted e2r-spec records, accepted repository history/tests, public
GitHub published state, then attached snapshots.

The purpose is to distinguish closed local implementation from deferred,
cross-app, public-sync, and release-time work. No production source changes
were made.

## Public/local baseline

Local LiaisonScape is clean at `f95e74a fix: align viewport toolbar keyboard
semantics`, branch `main`, and is 33 commits ahead of `origin/main`; no push has
been authorized. Local e2r-spec is clean at `1c7ab0e docs: decide LiaisonScape
0.2.0 release version`, and is 146 commits ahead of its upstream. Public
LiaisonScape remains an older published state reporting `0.1.0`, direct jsdom,
and Validator `^0.2.0`, with no GitHub Release. Public e2r-spec also lags local
records. These are expected publication gaps, not local source blockers.

## Classification vocabulary

- `CLOSED`: accepted local implementation/evidence complete.
- `DEFERRED / NON-BLOCKING`: future work not required by current local release content.
- `RELEASE-TIME`: perform against the final release candidate.
- `CROSS-APP / INFRA`: requires other repositories or shared infrastructure.
- `PUBLIC-SYNC`: authorized publication/synchronization work.
- `OPEN LOCAL BLOCKER`: concrete accepted LiaisonScape source work required before release progression.

## Local implementation ledger

| Area | Classification | Evidence / next boundary |
|---|---|---|
| Automatic Initial Entity Placement | `CLOSED` | Accepted deterministic implementation, stored-coordinate precedence, Derived automatic positions, explicit placement distinction, and browser evidence |
| Automatic Placement serialization/schema impact | `CLOSED` | No new Dataset contract, Coordinate/Layout/Presentation serialization, schema, or Validator work |
| Presentation lifecycle cleanup | `CLOSED` | Relation-ID-scoped cleanup, preservation-first behavior, no global orphan GC |
| Validator 0.4.0 integration relevant to LiaisonScape | `CLOSED` locally | Local consumer resolves published `@sukoyaka-dopeness/e2r-validator@0.4.0`; public synchronization remains separate |
| Public Sample local refresh/acceptance | `CLOSED` locally | Local canonical/mirror and Validator-compatible acceptance exists; public URL content update remains pending push/deploy |
| DOM test environment migration | `CLOSED` locally | LiaisonScape uses `@sukoyaka-dopeness/e2r-dom-test-environment@0.1.0` |
| Viewport toolbar keyboard/focus | `CLOSED` | Accepted truthful accessible naming and focus contract |
| Application version decision | `CLOSED` | Next application release is `0.2.0`; metadata remains `0.1.0` until release preparation |
| App modularization | `DEFERRED / NON-BLOCKING` | Incremental policy; no extraction required merely because App.tsx is large |
| `e2r-test-utils` cleanup | `DEFERRED / NON-BLOCKING` | Non-canonical artifact; separate cleanup authorization required |

## Deferred, cross-app, public-sync, and release-time work

Deferred/non-blocking work includes future graph readability, search/filter,
undo/redo, Group Entity, Layout research, broader orphan repair, and other
exploratory product backlog. None is an accepted mandatory LiaisonScape local
blocker for this reconciliation.

Cross-app/infra work includes NarrativeLine's second consumer evidence,
Hub/Handoff integration, shared DOM package follow-through, and the final
cross-repository release integration audit. These require fresh current source
context and must not be inferred from stale attachments.

Public-sync work includes synchronizing accepted local repositories, public
sample mirrors/URLs, and published dependency declarations after explicit
authorization. Release-time work includes the actual LiaisonScape `0.2.0`
metadata bump, final release-candidate audit, tag/Release/deploy preparation,
and public deployment acceptance.

## Version, Validator, sample, and package state

The application remains `0.1.0` and `private: true`; `0.2.0` is the accepted
next release target, not yet applied. Coordinate and Presentation Extensions
remain `0.1.0`. Validator remains independently versioned at `0.4.0`.
The DOM package remains `0.1.0`. `e2r-test-utils` remains unchanged and is not
a release basis.

## Open local blockers

**OPEN LOCAL BLOCKERS: 0.** No concrete accepted LiaisonScape-local,
release-blocking implementation item remains. The strongest apparent candidates
were public sample synchronization and Validator/consumer publication, but
current evidence classifies those as `PUBLIC-SYNC` or `CROSS-APP / INFRA`, not
local source work.

## Source refresh and next-context boundary

Yes, the next meaningful work outside this checkpoint requires a new source
refresh. The minimal set for cross-app work is NarrativeLine `package.json`,
`package-lock.json`, its DOM test helper and DOM-heavy tests, its applicable
`AGENTS.md`, and only the current App/source files directly involved in the
chosen integration. Add Hub files only if the selected scope actually includes
Hub handoff/public links. Do not request a full workspace snapshot.

## Codex assessment

### Agree

Yes. LiaisonScape's accepted local `0.2.0` feature content has reached the
point where remaining work is primarily release-time, cross-app, and
public-synchronization work.

### Concern

The strongest apparent risk is public/local divergence: public consumers and
URLs still expose older versions and content. It is a release coordination
blocker, but not a current local implementation blocker.

### Alternative

Keeping public sample synchronization or cross-app consumer updates open as
local blockers would be safer for release sequencing, but would misclassify
their ownership. They should remain explicit gates in the later public/release
audit instead.

### Recommendation

Proceed to a fresh cross-app/public release-preparation context only after
explicit authorization. Keep local implementation closed and do not mutate
LiaisonScape in this reconciliation.

## Boundaries and result

LiaisonScape, Validator, NarrativeLine, Hub, DOM package, and
`e2r-test-utils` are unchanged. `ai-knowledge` is unchanged, including the
protected dirty file. No browser acceptance, push, tag, release, deploy, or
publish was performed.

Result: **RECONCILED — LIAISONSCAPE LOCAL PRE-RELEASE RESIDUALS CLASSIFIED**

