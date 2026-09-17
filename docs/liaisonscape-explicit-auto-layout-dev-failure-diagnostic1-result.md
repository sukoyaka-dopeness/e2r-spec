# LiaisonScape Explicit Auto Layout DEV Failure Diagnostic 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-DEV-FAILURE-DIAGNOSTIC1`  
Classification: **A. DEV FAILURE DIAGNOSTIC ESTABLISHED / READY TO CAPTURE NEXT HUMAN CHECK B FAILURE**

## Conclusion

Explicit Auto Layout hard failures now retain a structured operation-local
diagnostic in App state. In development only, a failed operation renders that
record beside the existing Safe Preview fallback message. Successful Preview,
quality-warning Preview, Cancel, and stale outcomes do not render the failure
surface. Human Check B remains on HOLD until the user observes and classifies
the next real failure; this checkpoint does not infer its historical cause.

## Diagnostic contract

The canonical record is defined by
`src/explicit-auto-layout-failure-diagnostic.ts` and retained by `App.tsx`.
It captures:

- stage and reason code;
- operation ID, snapshot identity when capture completed, and graph
  fingerprint;
- Entity count, effective Pin count, and Pin diagnostic codes;
- whether the Worker started;
- bounded reached-stage evidence for candidate generation, Product evaluation,
  and validation.

Capture failure and Worker/operation failure both enter this model. Cancel and
stale remain non-failure lifecycle outcomes. Strict Product eligibility miss
remains a valid Preview with a warning and is not mapped to this diagnostic.

The visual surface is gated by `import.meta.env.DEV` and a pure exposure guard.
Internal reason codes are not rendered by the production-equivalent branch.
The existing localized user-facing fallback message remains unchanged.

## Reproducible Actual Product evidence

Runtime identity:

```text
repo/worktree: C:\Users\extra\E2R\e2r-liaison-scape
HEAD: 3c383c67c8e3c599be9de7f99d6785261e147479 + existing dirty worktree
command lineage: npm run dev -- --host 127.0.0.1 --port 5176
```

A DEV-only input probe injects one invalid persisted Pin into a canonical
acceptance fixture without changing normal or production input:

```text
http://127.0.0.1:5176/e2r-liaison-scape/?acceptance-fixture=lighthouse&acceptance-locale=ja&explicit-auto-layout-failure-probe=pin-resolution
```

Running Explicit Auto Layout produced the existing fallback message and this
visible record:

```text
stage: snapshot-capture
reason: PIN_RESOLUTION_FAILED
operation: explicit-auto-layout-1
snapshot: not captured
graph: 3be6e024b3c9b2a4
entities: 10
effective pins: 1
pin diagnostics: PIN_SPACE_UNSUPPORTED
worker: not-started
```

This proves the diagnostic path; it does not claim that the intermittent Human
Check B failure had the same cause.

The normal Lighthouse JA URL still reached Running and Product Preview. No
failure diagnostic was visible there, and the accepted Reject action copy was
confirmed as `元の配置に戻す`.

## Authority and safety

No Frontier candidate behavior, spacing, Product scoring or presentation,
Pin meaning, Worker cancellation/stale handling, Preview adoption, Dataset,
Coordinate, dirty-state, or persistence semantic changed. The DEV probe is
explicit, acceptance-fixture-only, and unavailable when `import.meta.env.DEV`
is false. Dense Graph-space quality remains a separate follow-up.

## Validation

- diagnostic + prior diagnosis + Explicit operation tests: `17/17 PASS`;
- TypeScript/lint: PASS;
- Actual Product known capture failure: fallback and readable DEV diagnostic
  observed;
- Actual Product ordinary success: Running -> Preview observed; diagnostic
  absent;
- accepted JA Reject copy observed as `元の配置に戻す`;
- Human Check B: remains HOLD.
