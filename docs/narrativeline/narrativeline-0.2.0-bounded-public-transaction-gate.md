# NarrativeLine 0.2.0 — bounded public transaction gate

Date: 2026-09-30
Status: **LOCAL PREPARATION; PUBLIC WRITE REQUIRES HUMAN APPROVAL**

This current gate is separate from the closed Initial Public Release. Human
selected NarrativeLine 0.2.0 and Cedar Observatory as its application-owned
showcase candidate. Local browser review accepted Cedar's 12-Event appearance,
the Timeline disclosure/selection/drag boundary, Home sample naming, and Hub's
sixth/last Cedar card and Documentation ordering in EN/JA. Those observations
do not establish public HTTPS retrieval, deployed revision, or live Handoff.

## Bounded publication set

The Cedar [Sources / License authority](../public-samples/public-sample-provenance.md#cedar-observatory--narrativeline-owned-release-candidate-2026-09-30)
applies the existing eligible project-created Dataset policy without applying
NarrativeLine's software MIT license to the Dataset. Cedar stays in NarrativeLine;
the five prior Gallery families and E2R-SPEC canonical sample authority remain
unchanged. The present E2R-SPEC publication branch contains only this gate,
the Cedar provenance addition, a current Roadmap pointer, and its own session
record. Independent local specification, schema, research, sample draft, and
historical work must not be published by pushing the broader local `main`.

NarrativeLine's current pre-date local candidate is `804bb17bf99c5cdace5ac72157967b1bf9b0e010`;
Hub's local candidate is `6e1165bd4b328f89f32de82555b159dd0b08ec60`.
These are **not yet approved public push revisions**. NarrativeLine's Credits
version is 0.2.0, but its actual Released date is unset. On the actual public
transaction day, set the real localized date, commit it, rerun gates, and have
Human approve the resulting new exact SHA. If the day changes before deployment,
stop and reassess the date. Recheck all remote refs before each public write.

## Order, waits, and stops

1. Approve the exact E2R-SPEC bounded revision and publish it to `main` only
   after confirming a fast-forward from the current remote. Confirm the public
   provenance URL resolves to the approved content. A moved remote, rejected
   push, or mismatched page stops the transaction.
2. After actual-date Credits and renewed NarrativeLine gates, approve and push
   the new exact NarrativeLine revision. Confirm both public Cedar EN/JA JSON
   responses match the approved files. Wait for that exact-SHA Pages workflow
   to pass tests, lint, build, artifact upload, and deployment. Confirm the
   deployed site shows the approved revision and real date. A running workflow
   means wait; failure, SHA mismatch, or source fetch failure means stop.
3. Only then approve and push the exact Hub revision. Wait for its exact-SHA
   lint/build/Pages deployment. Confirm the six EN/JA Gallery and Documentation
   entries, Sources / License, and both Cedar Handoff URL forms.
4. Human checks live Hub-to-NarrativeLine and Hub-to-LiaisonScape Handoff,
   locale behavior, Cedar Timeline, and the loadable LiaisonScape graph with
   its known Validator 0.6.0 / Relative Time 0.2.0 warning. Record the result
   before calling the NarrativeLine release gate complete.

At any interruption, re-read remote refs, exact-SHA runs and deployments,
public JSON responses, and live sites. Resume at the first unverified gate.
Do not use force push, automatic rollback, or an extra push to mask a failed
gate. A changed public state needs renewed Human review.

The old NarrativeLine run at `3d98614d0b61718a48fc247eadf9686d771295f3`
failed because its `RelativeTime02Consumer.test.js` dependency
`examples/relative-time-0.2-draft/all-families.json` was absent from the then-
pinned E2R-SPEC revision `c3c8f5d`. Current workflow pin `d14e345` contains
that example. The current candidate also had tests reading an unpublished
Lantern Market draft that is absent from `d14e345`. NarrativeLine now owns
minimal test fixtures for both consumer behavior and the EN/JA projection
checks; it no longer uses that unpublished draft. This keeps feature input
and fixture identity application-owned without establishing a cross-repository
fixture contract or publishing unrelated E2R-SPEC work.

CI parity was rerun against the workflow's exact topology: NarrativeLine
`804bb17bf99c5cdace5ac72157967b1bf9b0e010` beside an E2R-SPEC checkout at
`d14e34561676d99e3de2dbf8b641c53eda372e2c`. All **348/348 tests PASS**, lint
PASS, and build PASS. The four former 0.2.0 consumer tests pass in that run.
This removes the known local-versus-pinned-fixture blocker. A new exact-SHA
GitHub Actions run and Pages deployment are still required after Human approves
the actual-date NarrativeLine revision and public transaction.

The network-dependent production advisory scan was initially unavailable, but
a network-capable retry of `npm audit --omit=dev --audit-level=low` on the
NarrativeLine candidate returned **0 vulnerabilities** on 2026-09-30. This
does not replace the exact-SHA remote CI and deployment gate.

No tag, GitHub Release, npm publication, LiaisonScape Validator update, or
canonical sample promotion is part of this transaction. This document records
a sequence and stop conditions; it authorizes no public write.
