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

## Follow-up: persistent development UI for Worker failures (2026-09-27)

This follow-up extends the established diagnostic surface. It does not
reclassify the historical snapshot-capture probe or identify the cause of the
intermittent Human Check B failure.

In the current LiaisonScape worktree, the latest Auto Layout failure remains
available in memory after the operation state changes and is replaced only by
a later failure or cleared when the Dataset is replaced. A collapsed native
`details` disclosure separates the development diagnostic from the existing
localized Safe Preview failure message. Its labels follow EN / JA; operation,
snapshot, graph, stage, reason code, reached-stage evidence, and available
Worker event/computation details remain inspectable. Worker stack details wrap
within the panel. The record is not stored across reloads and is not a
production feature.

A development-only `worker-operation` URL probe throws inside the Worker
before layout calculation. On the Lighthouse sample, the Actual Product showed
the ordinary Safe Preview failure message and retained this diagnostic shape:

```text
stage: worker-execution
reason: EXECUTION_ERROR
worker status: failed
Worker source: worker-computation-exception
Worker phase: candidate-generation
Worker error: Error / Development diagnostic probe: intentional Auto Layout Worker failure
Worker stack: served module URL for explicit-auto-layout-worker.ts
```

The disclosure was collapsed by default, keyboard-expandable, and showed a
visible keyboard focus outline. English and Japanese runs showed the same
failure classification and localized labels. The sample's ordinary Auto
Layout operation separately reached its review Preview without displaying a
failure diagnostic. The production build strips the diagnostic DOM branch and
the Worker failure injection/error text; the same probe query on the local
production preview did not inject a failure, and Auto Layout reached Preview.

This probe is only failure evidence. It does not retry, repair, adopt a
preview, or change the Dataset. It does not establish the cause of any
unrelated intermittent Worker failure.

Validation for this follow-up: `npm test` `647/647 PASS`, `npm run lint`
PASS, and `npm run build` PASS. Actual Product verification used Edge on a
local Vite development server and the local production preview. Narrow
viewport behavior was not manually exercised in this run.

## Closure acceptance: development diagnostics and production settlement (2026-09-27)

Human accepted this bounded diagnostic scope for closure. The local LiaisonScape
commit is [`6342152`](https://github.com/sukoyaka-dopeness/e2r-liaison-scape/commit/634215225b0a9994ba3a900fe0cdc8b33587e6c7)
(`dev: close Auto Layout failure diagnostics`).

The development-only surface retains the latest failure in memory for
inspection after the operation settles. A later failure replaces it and
Dataset replacement clears it; it is not persisted across reloads. The
development disclosure remains separate from the ordinary Safe Preview
failure message. Neither the diagnostic nor the explicit failure probe changes
Auto Layout, routing, placement, Pin, retry/repair, Preview adoption, or
Dataset behavior.

Production transport failures now reach a terminal failed outcome for Worker
`error`, `messageerror`, and synchronous main-thread `postMessage()` throws.
Production outcomes use generic failure reasons and carry no Worker diagnostic
details. The application presents the ordinary failure message; detailed
diagnostic rendering and the explicit probe remain development-gated. The
local production preview showed no diagnostic disclosure or probe-induced
failure and completed ordinary Auto Layout to Preview.

Real Browser acceptance used Microsoft Edge against the local development
runtime and local production preview. In development, the intentional Worker
probe produced the expected failure record in English and Japanese. The
disclosure was keyboard-operable and remained separate from Safe Preview
feedback. At 600px and 360px viewport widths, the page had no horizontal
overflow; the diagnostic panel stayed within the viewport, and long Worker
details wrapped without widening the panel. With the Japanese disclosure open
at 360px, the Entity Add dialog remained operable and closed with Escape. No
blank screen or unexpected application error was observed. Full browser
console history was not retrieved because the available browser tooling did
not provide a safe supported way to obtain it; no protection was bypassed.

Automated verification after the production settlement correction:

- `npm.cmd test`: `648/648 PASS`;
- `npm.cmd run lint`: PASS;
- `npm.cmd run build`: PASS;
- `git diff --check`: PASS.

The intermittent Worker failure previously reported by the Human remains
unreproduced and its underlying cause remains unknown. The intentional probe
validates the observation surface only; it does not diagnose that separate
failure. This uncertainty is accepted for closure of the diagnostic scope.
