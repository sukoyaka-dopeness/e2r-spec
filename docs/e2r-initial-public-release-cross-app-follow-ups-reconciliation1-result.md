# E2R Initial Public Release Cross-App Follow-Ups Reconciliation 1

Date: 2026-09-19

## Result

This is a documentation and roadmap reconciliation only. It records two
bounded pre-public-release follow-ups that remain visible in current source
evidence. It does not authorize runtime, CSS, sample Dataset, User Guide,
Validator, Hub, or release-artifact changes.

Classification: **DOCUMENTATION-ONLY / TWO BOUNDED PRE-PUBLIC-RELEASE
FOLLOW-UPS RECORDED**.

The current source-level closure of NarrativeLine and LiaisonScape is not
reopened by this record. The follow-ups below are release-integration work
around content/provenance and evidence quality, not evidence of a new
application runtime defect.

## Authority and repository state

The comparison order was current application source and metadata, current
sample/guide ownership, existing accepted evidence, and then the canonical
E2R-SPEC roadmap. Historical roadmap wording was retained as history where it
did not describe the current status.

| Repository | Branch / HEAD | Worktree state at audit |
| --- | --- | --- |
| e2r-spec | `main` / `902d3813a1162364ef6b72d59004087ef7af3bee` | Existing dirty exploratory research files and untracked `work/`; preserved |
| e2r-narrative-line | `main` / `ddabeb2cf89c4cbf3351da124eb11b2482ece12a` | Existing dirty `AGENTS.md`; preserved and not staged |
| e2r-liaison-scape | `main` / `e6a66dfecc3187e2be895c960eb3ff7804f1bb69` | Existing untracked research/temporary artifacts; preserved |
| e2r-hub | `main` / `9de639990396c95e48d6cad37f027c21c4de1962` | Clean at audit |
| e2r-validator | `main` / `00bcda7107fd697bffbe4ee7bf464e9f11f8c39e` | Clean at audit |

The existing `e2r-ai-knowledge` guidance was consulted. The accepted
user-guide writing playbook makes current UI/source and accepted guide content
the authority and keeps application-owned guides task-oriented. The
reference-first UI consistency hypothesis requires actual browser geometry and
human acceptance; source inspection alone does not confirm a visual defect and
does not justify a universal CSS rule. No new Knowledge entry is warranted by
this reconciliation.

Key source paths used for the comparison were `e2r-hub/src/App.tsx` for the
guide/sample registry and Handoff links, the four application User Guide files,
the NarrativeLine sample files under `src/sample/`, the LiaisonScape public
sample files under `public/`, and the E2R-SPEC canonical examples under
`examples/`. For form geometry, the comparison used NarrativeLine
`src/screens/EventDetailScreen.tsx`, `src/screens/EntityDetailScreen.tsx`, and
`src/index.css`, plus LiaisonScape
`src/components/EntityDetailDialog.tsx`,
`src/components/RelationDetailDialog.tsx`, and `src/styles.css`.

## Follow-up 1 — User Guide and Public Sample refresh

Classification: **REQUIRED BEFORE INITIAL PUBLIC RELEASE / CONTENT AND
PROVENANCE CHECKPOINT**.

Current ownership is split deliberately:

* NarrativeLine owns `docs/user-guide-en.md`, `docs/user-guide-ja.md`, and its
  built-in Berlin Wall sample files under `src/sample/`.
* LiaisonScape owns `docs/user-guide-en.md`, `docs/user-guide-ja.md`, and its
  public Lighthouse sample files under `public/`.
* E2R-SPEC owns the canonical public example set under `examples/`.
* E2R-Hub owns the landing-page registry, sample cards, guide links, and
  NarrativeLine/LiaisonScape Handoff wiring; it does not own the guide bodies
  or application sample files.

The current Hub registry points to the expected application-owned Berlin and
Lighthouse files and to the E2R-SPEC Apollo 11, Ashen Crown, and Titanic
example families, with EN/JA variants. This is sufficient evidence for the
ownership boundary, but not final public-release acceptance.

The bounded next checkpoint is to compare each current user guide and sample
against the actual UI/source and to record, for each public sample:

* intended role and supported capability coverage;
* EN/JA parity and the user-visible labels/flows described by the guides;
* public URL/Hub registry and Handoff reachability;
* license, credits, provenance, redistribution eligibility, and sample
  metadata status;
* Stable-oriented versus Experimental status.

This checkpoint must not silently promote History 2.0.0 Candidate, Relative
Time, or other research/draft semantics into the public sample set. Any such
promotion requires a separate public-support decision. No sample, guide, or
Hub change is made by this roadmap record.

## Follow-up 2 — Cross-app Name input and form geometry audit

Classification: **REQUIRED BEFORE INITIAL PUBLIC RELEASE / QUALITY AUDIT;
IMPLEMENTATION ONLY IF A CONCRETE DEFECT IS CONFIRMED**.

Current source evidence shows an implementation difference, not yet a
confirmed defect:

* NarrativeLine Event Detail and Entity Detail render Name and Description
  controls inside the detail screen. The current Name inputs do not use the
  LiaisonScape `.detail-fields` shared width rule; date controls have their
  own explicit width behavior.
* LiaisonScape Entity Detail and Relation Detail use `.detail-fields`, whose
  input, textarea, and select controls are explicitly `width: 100%` with
  `box-sizing`, `max-width`, and `min-width` constraints.

The bounded audit covers the equivalent Event/Entity/Relation detail surfaces,
EN and JA labels, desktop and narrow layouts, long values, Description
textarea behavior, label/control alignment, overflow, breakpoint behavior,
keyboard focus, and touch-target preservation. It must measure actual browser
geometry and include human visual acceptance. The audit must identify the
owning app/component selector before any implementation is proposed.

The accepted cross-app design boundary remains **same responsibility and
understandable hierarchy, not identical CSS**. A universal `width: 100%` rule,
shared breakpoint, or blanket form redesign is not authorized. If a defect is
confirmed, the next implementation must be one smallest app-local CSS/form
surface and must not change Dataset semantics, navigation, or locale behavior.

## NL-H2-R1 status reconciliation

The existing roadmap entry previously said **READY FOR MANUAL ACCEPTANCE**.
The latest manual attempt reached the stable History browser checks, but
Candidate fixture loading through the Chrome automation file chooser was
blocked by the browser-control environment. Candidate/unknown/mixed fixture
acceptance, the unrelated-edit preservation scenario, narrow-layout checks,
and Candidate keyboard/focus checks therefore did not run.

The reconciled status is:

**MANUAL ACCEPTANCE BLOCKED BY FIXTURE-LOADING ENVIRONMENT — NO RUNTIME FIX
INDICATED.**

The implemented NarrativeLine boundary remains ready for manual acceptance
when the fixture acquisition path is available. This status does not create a
new runtime checkpoint and does not promote History 2.0.0 Candidate or
Relative Time to the public release scope.

## Dependency order and human decisions

The smallest coherent next bounded checkpoint is
**E2R-INITIAL-PUBLIC-RELEASE-CONTENT-AND-SAMPLE-REFRESH-AUDIT1**. It is first
because public capability scope, sample role, and rights/provenance determine
what the guides may promise and what the Hub may expose.

The current dependency order is:

1. Confirm the public-supported capability/sample set and rights/provenance
   boundary.
2. Complete the User Guide and Public Sample refresh audit, with application,
   E2R-SPEC, and Hub ownership respected.
3. Complete the cross-app form-geometry audit; create an app-local CSS
   checkpoint only if reproducible visual evidence confirms a defect.
4. Run the final cross-application and pre-public-release readiness audit.
5. Obtain explicit human authorization for push/deployment, then perform
   deployment acceptance as a separate operation.

Human authorization is required for the final public sample/rights decision,
any promotion of research/draft capabilities into public examples, any
runtime/CSS fix that follows the geometry audit, and all push, deploy, tag,
publication, or public-release actions.

The remaining items are non-blocking or deferred when they are not selected as
part of the supported initial public surface: PWA/offline capability,
History/Relative Time research and candidate semantics, Auto Layout quality
research, and other post-release research/specification work. Existing
accepted closures remain closed.

## Changes and validation

This checkpoint changes only the E2R-SPEC roadmap and this result document.
Application source, tests, CSS, schema, runtime behavior, sample Datasets,
User Guides, Hub source, Validator artifacts, and LiaisonScape research
artifacts were not changed. Existing unrelated dirty work was preserved.

Validation for the documentation change:

* `git diff --check`
* `npm run validate` in `e2r-spec`

No push, tag, deploy, release, or publication was performed.
