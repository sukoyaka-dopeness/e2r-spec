# Cross-Context Workspace Safety

Status: Human-adopted application safety contract (2026-10-10)

## Scope

This design applies to NarrativeLine, LiaisonScape, and ParameterPlotter when
users work across tabs or applications. It is an application-level data-safety
contract. It does not change E2R Core, Extensions, Dataset ownership, Handoff
v0, or Candidate semantics. It does not prescribe a common implementation.

## Required guarantees

1. A Dataset replacement must not silently discard unsaved work in the current
   tab or another live tab. A candidate may be acquired and validated, but its
   acceptance must stop when replacement safety cannot be established or
   another tab has loss-sensitive work. Explain the reason and retain the
   current workspace and a safe retry, cancel, or export path.
2. A stale tab must not write an older workspace over a newer accepted or
   saved revision. Detect a conflict before committing the stale write; retain
   the stale tab's in-memory work where possible and provide a recovery path.
3. Applications sharing an origin must keep their persisted state
   responsibility-specific. An application may alter another application's
   Dataset only through an intentional, recipient-owned Handoff; opening or
   using a sibling app must not overwrite its storage keys.
4. When coordination, storage access, or revision verification is uncertain,
   stop the data-loss-capable write or replacement. Preserve the current view
   and make the failure understandable and recoverable.
5. Coordination state must be recoverable after reload, BFCache suspension,
   tab closure, or abnormal termination. A stale marker must not permanently
   prevent future work; a user must not need a destructive reset to recover.
6. The safety result must preserve a practical way to export or otherwise
   recover retained work, and allow retry after the conflicting work is
   applied, canceled, or deliberately resolved.

## Relationship to existing contracts

This contract supplements Dataset Replacement Safety: same-tab dirty state,
pending forms, validation, and explicit replacement decisions remain in force.
It also supplements Startup Handoff v0; a valid Handoff is an acquisition
request, not authority to bypass the recipient application's replacement
guard. Cross-App Locale Recipient-Preference remains independent of Dataset
language and workspace persistence.

The accepted Dataset acquisition entry-point decision remains unchanged: Home
is the primary acquisition and replacement entry point. This safety contract
does not require a common UI, storage model, lock protocol, autosave policy, or
file-export design across applications.

## Evidence and implementation status

The implementation and bounded verification record is in
[`cross-tab-workspace-safety-implementation-2026-10-10.md`](cross-tab-workspace-safety-implementation-2026-10-10.md).
ParameterPlotter and NarrativeLine coordinate same-app tabs and protect shared
browser-local writes. LiaisonScape keeps its Dataset in tab-local application
state and exports explicitly; its current model has no shared Dataset
write-back path. Human Browser Acceptance and public-hosted verification
remain separate and pending; this contract does not authorize release.
