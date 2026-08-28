# Cross-App Relation Deletion Capability Closure

**Checkpoint:** `XAPP-REL-DELETE6-CAPABILITY-CLOSURE`

**Date:** 2026-08-28

**Status:** **COMPLETE / CLOSED**

This record closes the bounded Cross-App Relation deletion capability. It is a
documentation and capability-status closure only. No runtime, Core, Extension,
schema, or presentation implementation change is made by this checkpoint.

## Scope

This closure covers:

- the accepted Cross-App Relation deletion semantics;
- NarrativeLine implementation alignment;
- LiaisonScape implementation alignment; and
- bidirectional Dataset interoperability evidence.

The closure is capability-bounded. It is not a claim that either application
is a generalized Relation editor or that every future E2R application has the
same controls.

## Accepted contract

The following contract is accepted for this capability:

1. A Relation is a Dataset Object.
2. A Relation is not owned by NarrativeLine, LiaisonScape, or its creator app.
3. An endpoint Entity is not deleted while incident Relations remain.
4. No silent Relation cascade is permitted.
5. Relation deletion is an explicit user action.
6. A self Relation counts once.
7. Parallel Relations remain distinct Objects.
8. Hidden or out-of-surface Relations remain in the Dataset and are handled.
9. Presentation visibility is not Object existence.
10. Ambiguous identity uses presentation hints while the exact Object remains
    canonical.
11. Removing the final incident Relation does not auto-delete the Entity.
12. Final Entity deletion is a separate explicit user action.
13. Unknown or unrelated Dataset data is preserved.
14. Cross-App consistency is semantic; identical UI is not required.

## NarrativeLine evidence

The [NarrativeLine Entity deletion resolution acceptance](narrativeline-entity-deletion-resolution-acceptance.md)
records the bounded readiness/design lineage, explicit Relation resolution,
no-cascade behavior, identity handling, safe focus, cancellation, and final
Entity deletion evidence. The [final Entity deletion cross-app fix](narrativeline-final-entity-deletion-cross-app-fix.md)
resolved the X11 stale-state defect at runtime commit `7a695b3`.

The focused regression and the full NarrativeLine automated suite passed. The
final verification also passed lint, build, and diff checks. The final Entity
fix uses a functional Dataset updater, so the final confirmation operates on
the current Dataset after Relation resolution. Hidden Relations remain
addressable, each explicit Relation deletion is exact, and unrelated Entities,
Events, Relations, and the Extension sentinel remain preserved.

## LiaisonScape evidence

The [LiaisonScape Detail / Deletion Modularization
Readiness](liaisonscape-detail-deletion-modularization-readiness.md) records
the bounded state-controller responsibility decision. The [Relation deletion
resolution implementation](liaisonscape-relation-deletion-resolution-implementation.md)
records no-cascade Entity deletion and explicit resolution at commit `33d0427`.
The accepted focus correction is recorded in the [Relation deletion resolution
acceptance](liaisonscape-relation-deletion-resolution-acceptance.md), and the
presentation follow-up, implementation, and acceptance are recorded in the
[action hierarchy audit](cross-app-destructive-action-hierarchy-audit.md), the
[presentation implementation](liaisonscape-relation-deletion-resolution-presentation-implementation.md),
and the [presentation acceptance](liaisonscape-relation-deletion-resolution-presentation-acceptance.md)
at runtime commit `34d8164`.

LiaisonScape passed its automated suite, lint, build, and diff checks. The
accepted evidence covers normal, self, parallel, hidden/Event-related, and
ambiguous Relations; Relation and final Entity cancellation; safe focus; and
separate explicit final Entity deletion.

## Bidirectional evidence

The [XAPP-REL-DELETE5 bidirectional reacceptance](cross-app-relation-deletion-bidirectional-reacceptance.md)
is the final formal interoperability record. X1-X14 all passed in both
directions across NarrativeLine `7a695b3` and LiaisonScape `34d8164`.

The matrix covered fresh Dataset transfer NL to LS and LS to NL, exact
single-Relation deletion, self and parallel Relations, hidden/Event-related
Relations, ambiguous endpoint and Relation identity, no automatic Entity
deletion, final explicit Entity deletion in both applications, unrelated and
unknown Extension preservation, Cancel safety, and EN/JA semantic parity.

## Previous failure and resolution

The original [XAPP-REL-DELETE3 bidirectional acceptance](cross-app-relation-deletion-bidirectional-acceptance.md)
remains an unchanged historical **FAIL** record. Its X11 failure was that
NarrativeLine retained `entity-nl-final` after its incident Relations were
resolved and final deletion was confirmed.

The [NarrativeLine final Entity deletion fix](narrativeline-final-entity-deletion-cross-app-fix.md)
diagnosed and corrected the stale Dataset update. XAPP-REL-DELETE5 then
re-ran the complete X1-X14 matrix and passed X11 and X14 as well as all other
items. The historical FAIL record was not rewritten.

## Final runtime revisions

| Application | Final relevant runtime | Closure interpretation |
| --- | --- | --- |
| NarrativeLine | `7a695b3` (`fix: complete final Entity deletion`) | Final Entity deletion uses current Dataset state after explicit Relation resolution. |
| LiaisonScape | `34d8164` (`fix: refine Entity deletion resolution presentation`) | Explicit Relation resolution, focus, and bounded presentation are accepted. |

These runtime commits predate this documentation-only closure. No runtime
source was changed by XAPP-REL-DELETE6.

## Closure criteria

The capability is closed because:

1. The semantic contract is explicit and consistent with E2R Core boundaries.
2. NarrativeLine has individual acceptance and the X11 fix acceptance.
3. LiaisonScape has individual behavior, focus, and presentation acceptance.
4. The complete X1-X14 bidirectional matrix passed.
5. The final evidence preserves unrelated Dataset content and Extensions.
6. The final application worktrees were clean at their accepted runtime HEADs.

## Closure result

**FORMALLY ACCEPTED / CROSS-APP IMPLEMENTATION ALIGNED / COMPLETE.**

This closes the currently implemented Cross-App Relation deletion capability,
with the explicit boundaries and exclusions below.

## Explicit exclusions

This checkpoint does not close or implement:

- targeted Handoff;
- capability discovery, manifests, or target-app discovery;
- Handoff URL or fragment syntax;
- Relation creation provenance;
- a generalized Relation editor;
- bulk Relation deletion;
- universal UI, CSS, or visual-style parity; or
- arbitrary future application support beyond the accepted NL/LS capability.

Core, Extensions, schemas, and Dataset interoperability semantics were not
changed.

## Handoff boundary

Targeted capability-based Handoff and capability discovery remain separate
future work and are not prerequisites for closing the currently implemented
cross-app Relation deletion capability. If a future application cannot suitably
present or resolve a Relation, Handoff may provide a separate path to an
application with the needed capability. This closure does not design or claim
implementation of that path, discovery, manifest, target application, or URL
syntax.

## Deferred presentation findings

Two presentation findings remain separate and are not closure blockers:

1. NarrativeLine has a visible mojibake risk in the Relation endpoint
   separator presentation in `RelationPresentationService.ts`. Object names
   themselves were not found to be re-encoded; the endpoint separator remains
   a deferred presentation fix.
2. Cross-App destructive-action spacing is not universally identical. The
   LiaisonScape generic confirmation action spacing remains a bounded visual
   follow-up, although the Relation-deletion resolution presentation passed
   its accepted spacing and hierarchy checks.

No CSS, i18n, or presentation source was changed for this closure.

## Knowledge Candidate Check

No new `ai-knowledge` entry is warranted. The e2r-spec documents are the
authoritative closure record, and the existing dirty
`playbooks/e2r-edge-cdp-browser-diagnostic.md` file was preserved and not
edited, staged, committed, restored, reset, stashed, or cleaned.

## Conclusion

The bounded Cross-App Relation deletion capability is formally closed. Both
applications now preserve Dataset-level Relation semantics, require explicit
Relation and final Entity actions, and interoperate in both directions under
the accepted X1-X14 evidence. Future Handoff/discovery and broader Relation
management remain separate workstreams.
