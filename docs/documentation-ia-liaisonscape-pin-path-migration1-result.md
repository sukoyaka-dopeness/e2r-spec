# LiaisonScape Pin Evidence Path Migration 1 Result

Date: 2026-09-25
Status: **COMPLETE — BOUNDED PATH MIGRATION**

## Scope

Only the three Human-approved Pin checkpoint records moved into the existing
`docs/liaisonscape/` landing zone:

| Previous path | Current path |
| --- | --- |
| `docs/liaisonscape-pin-persistence-authority-contract2-result.md` | `docs/liaisonscape/liaisonscape-pin-persistence-authority-contract2-result.md` |
| `docs/liaisonscape-pin-app-working-state-save-integration1-result.md` | `docs/liaisonscape/liaisonscape-pin-app-working-state-save-integration1-result.md` |
| `docs/liaisonscape-pin-ui1-result.md` | `docs/liaisonscape/liaisonscape-pin-ui1-result.md` |

The records retain their separate checkpoint meanings and source content:

- Pin persistence contract: **closed at the Draft-contract level / ready for
  Pinned Frontier feasibility**; not production Pin support or Stable maturity.
- App working-state / atomic Save integration: **established, with Pin UI
  remaining open**.
- Pin UI 1: **functional / first visual candidate rejected**; this does not
  imply Pin All / Unpin All, broader Layout maturity, or general visual
  acceptance.

No status or meaning was reconciled as part of the path migration.

## Reference repairs

Updated direct references in the Roadmap, the existing Layout / Auto Layout
chronology, the semantic-decomposition audit, the residual reconstruction
reaudit, and the Explicit Auto Layout / Pin claim-reconciliation preparation.
Also repaired the three plain-path citations in the worktree baseline result
and the Pin contract path in the Explicit Auto Layout preview-adoption
reconciliation result.

Within the moved records, the Pin contract's link to the Layout Extension Draft
and the Pin UI result's link to its visual-iteration result now resolve from
the new directory. The preparation document retains its original candidate
source-to-destination manifest and records the later Human selection below it.

A canonical-workspace scan found no direct references requiring edits in the
LiaisonScape sibling repository. That repository has unrelated dirty and
untracked work, so it was left read-only and unchanged.

## Authority and scope boundaries

`docs/liaisonscape/` is physical navigation only. The Pin Extension remains
Draft / non-Stable; Core, Coordinate, and cross-app authority are unchanged.
Application design, Roadmap, and broad Roadmap History remain in their
existing locations. No other LiaisonScape document moved, and no compatibility
copy, redirect, or new taxonomy was introduced. This migration does not resume
Roadmap slimming or broader documentation cleanup.

## Validation

- Confirmed the three destination paths exist and the three former paths no
  longer exist.
- Checked the changed Markdown relative links resolve and repaired the known
  Roadmap, History, evidence, and preparation references.
- `npm.cmd run validate` passed.
- `git diff --check` passed.
