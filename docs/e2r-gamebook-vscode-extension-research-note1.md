# E2R Gamebook / Interactive Narrative VS Code Extension Research Note

Checkpoint: `E2R-GAMEBOOK-VSCODE-EXTENSION-RESEARCH-NOTE1`

Date: 2026-09-03

Status: **DEFERRED / IDEA HOLD**

This document records a research direction only. It is not an implementation
plan, accepted architecture, schema proposal, Gamebook Extension design,
Media Extension design, product commitment, or authorization to create a VS
Code extension or repository.

## CASE / Decision

**CASE 1 — RESEARCH NOTE RECORDED**

**Decision A:** The E2R Gamebook / Interactive Narrative VS Code Extension idea
is recorded as deferred research. Existing prior-art leads are strong, so the
individual feature list is currently mostly not novel. Work may restart only
when a materially E2R-specific differentiation hypothesis is brought forward
and separately reviewed.

The adjacent exploratory note
`research/exploratory/e2r-vscode-osint-workbench.md` was checked. It covers a
broader VS Code OSINT workbench direction, not this focused Gamebook /
Interactive Narrative idea. This note therefore records a distinct research
question while preserving that adjacent note and avoiding feature-parity
duplication.

## Idea under research

The hypothesis is a future **E2R Gamebook / Interactive Narrative VS Code
Extension**. A possible authoring and analysis surface could work with an E2R
Dataset as its source, import E2R JSON, inspect narrative structure, validate
references and state transitions, preview or play a narrative, and export a
portable result.

Possible capabilities are research leads only:

- E2R Dataset opening and JSON import;
- scene, passage, or narrative-node authoring;
- graph or flow visualization;
- preview, play, or debug;
- choices, conditions, flags, and variables;
- effects and state changes;
- reachability and dead-end analysis;
- undefined-flag and broken-reference diagnostics;
- Markdown or other source-text authoring;
- Problems-panel integration;
- Git-aware authoring workflows; and
- export as standalone HTML, an HTML/JS/CSS/assets package, or a ZIP/web
  package.

These capabilities are not a selected feature set. Their presence in other
tools is evidence that they require differentiation, not evidence that E2R
should implement them.

## Responsibility boundary hypothesis

The current conceptual boundary is:

```text
E2R Core
  = Dataset / Entity / Event / Relation and shared semantics

Gamebook Extension
  = narrative branching, choices, conditions, effects, and state semantics

Media Extension
  = image, audio, video, asset metadata, and references

VS Code Extension
  = authoring, validation, preview, play/debug, and export UI

Standalone Player
  = runtime interpretation of the applicable Dataset and Extensions
```

This boundary is exploratory. It does not move narrative, media, presentation,
or execution semantics into the E2R Core. It does not freeze a Gamebook
Extension, Media Extension, VS Code API boundary, runtime, storage model,
export format, or standalone-player architecture.

## Media Extension relation

Gamebook content may eventually need images, audio, video, character art,
backgrounds, music, or other assets. The current research direction is to
study a separate Media Extension and reference its semantics from a Gamebook
workflow rather than directly adding application-specific fields such as
`backgroundImagePath`, `bgmPath`, or `characterImagePath` to a Gamebook
definition.

The relation is therefore recorded as **exploratory / not frozen**:

```text
E2R Core
  <- shared Dataset semantics
Gamebook Extension
  <- narrative state and branching
Media Extension
  <- asset meaning, metadata, and references
VS Code Extension / Player
  <- application and runtime consumption
```

Open Media questions include embedded versus external assets, relative URIs,
MIME or media type, integrity hashes, alt text and accessibility,
localization, copyright and license metadata, preload/streaming, offline
packages, single-file HTML embedding, large-asset ZIP/web packaging, and
missing-asset validation. This checkpoint does not answer them.

## Possible cross-application value

One possible value proposition is that the same E2R Dataset could be consumed
by multiple applications:

```text
game.e2r.json
  +-- future Gamebook VS Code Extension: author / validate / preview / play
  +-- LiaisonScape: inspect Entity / Relation graph structure
  +-- NarrativeLine: inspect timeline or narrative context
  +-- Validator and future E2R applications
```

This is a hypothesis, not an interoperability claim. Reading the same E2R
file does not by itself establish that the applications agree on narrative
semantics, media references, state execution, or user workflow. A future
cross-application case would need explicit Dataset, Extension, and runtime
contracts.

## Prior-art leads

The following are recorded as **UNVERIFIED PRIOR-ART LEADS**, not as current
version, licensing, feature-parity, architecture, or interoperability claims:

| Lead | Feature areas to verify later | Current status |
| --- | --- | --- |
| Yarn Spinner / Yarn Spinner VS Code extension | authoring, dialogue, branching, variables, graph view, preview/play, HTML export | UNVERIFIED PRIOR-ART LEAD |
| Twine | visual branching, variables, conditions, HTML distribution, image/CSS/JS extension patterns | UNVERIFIED PRIOR-ART LEAD |
| ink / Inky | branching narrative language, authoring tooling, web export, media-related patterns | UNVERIFIED PRIOR-ART LEAD |
| articy:draft | flow, entity/database-like authoring, variables, conditions/instructions, asset management, simulation | UNVERIFIED PRIOR-ART LEAD |
| Ren'Py | narrative, image/audio workflows, executable or distributable visual-novel workflow | UNVERIFIED PRIOR-ART LEAD |

Exact feature parity, current versions, export behavior, licensing,
extension architecture, and interoperability were not verified in this
checkpoint. No prior-art implementation is copied, selected, or treated as a
requirement. If later research verifies these leads, the result must still
separate established prior art from any E2R-specific differentiation.

## Current novelty judgment

The individual feature ideas are currently assessed as **MOSTLY NOT NOVEL**.
Likely established or nearby capabilities include VS Code narrative authoring,
graph/flow presentation, flags and variables, preview/play, HTML export,
image/audio support, and standalone browser distribution.

The following are retained only as differentiation hypotheses:

### H1 — E2R as the shared data foundation

An E2R Dataset might support interactive narrative without becoming a
Gamebook-only format, allowing Core Entity/Event/Relation semantics to remain
available to other applications.

### H2 — One Dataset across applications

The same Dataset might be authored for a gamebook while remaining meaningful
to NarrativeLine, LiaisonScape, and other E2R consumers.

### H3 — Explicit Gamebook / Media separation

Separating narrative state semantics from media semantics might avoid coupling
the Gamebook Extension to application-specific asset fields.

### H4 — Provenance-preserving authoring and execution

An authoring/runtime workflow might preserve E2R Dataset provenance through
authoring, exchange, analysis, and execution rather than treating the runtime
export as an unrelated artifact.

### H5 — Stateful branching beyond gamebooks

The same stateful branching semantics might later support visual novels,
dialogue trees, tabletop scenarios, quest design, interactive tutorials, or
interactive education.

H1–H5 are **DIFFERENTIATION HYPOTHESES**, not Product Differentiation Proven.
No implementation priority follows from them.

## E2R Core semantic open question

An unresolved semantic question is whether a Gamebook “scene” or “passage” is
best represented by an E2R Core Event, an Extension-owned narrative node, an
Event plus presentation/execution layer, or another explicit mapping.

The current E2R principle that Event represents an occurrence must not be
silently stretched to mean every narrative container. Future research may
compare:

- Event for an occurring narrative beat or transition;
- an Extension-owned node for a narrative container;
- Event plus an Extension presentation/execution interpretation; and
- a separate mapping between scene/passage and Core concepts.

No choice is made here, and no Core or schema change is authorized.

## Restart trigger

`RESTART-TRIGGER-v1` is frozen for this research note. Research may restart
only when at least one concrete, testable hypothesis satisfies one of these
conditions:

1. A material user value is shown to emerge specifically from E2R Core,
   Extension, or interoperability architecture and cannot be explained as a
   conventional implementation of existing narrative-tool features.
2. Cross-application interoperability between E2R consumers is demonstrated
   as a meaningful workflow value using the same Dataset and explicit
   semantics.
3. Import/export between existing tools and E2R reveals a concrete ecosystem
   exchange use case with evidence.
4. A materially different authoring, play, analysis, or provenance model is
   defined and compared with established alternatives.
5. Another source-supported differentiation claim is stated in a way that can
   be verified against prior art and E2R contracts.

The following are not restart triggers by themselves: using VS Code, starting
from JSON, exporting HTML, using flags, displaying a graph, supporting media,
or mentioning E2R without a distinct user value and verifiable semantic
consequence.

## Status and non-goals

| Area | Status |
| --- | --- |
| Research | DEFERRED / IDEA HOLD |
| Implementation | NOT STARTED |
| Design | NOT STARTED |
| Schema proposal | NOT STARTED |
| Gamebook Extension | NOT FROZEN |
| Media Extension dependency | NOT FROZEN |
| VS Code extension repository | DO NOT CREATE |
| Prototype | DO NOT CREATE |
| Roadmap implementation priority | DO NOT ADD AS ACTIVE WORK |

This checkpoint does not authorize:

- a VS Code extension or TypeScript implementation;
- a Gamebook or Media schema;
- a player runtime or HTML exporter;
- a Webview, flowchart, parser, flag engine, or Problems integration;
- repository creation or package publication;
- prior-art feature-parity implementation;
- LiaisonScape, NarrativeLine, Validator, or Core changes; or
- a change to the current E2R roadmap priority.

## Knowledge Candidate assessment

Knowledge Candidate: **NO promotion in this checkpoint**.

The idea remains a project-local exploratory hypothesis. The adjacent OSINT
workbench note contains potentially reusable principles, but this checkpoint
does not independently validate them across multiple cases and does not
convert them into accepted workspace knowledge. `ai-knowledge` is unchanged.

## Result

The Gamebook / Interactive Narrative VS Code Extension idea is recorded as
deferred research. Prior-art leads remain unverified. Individual features are
mostly not novel. H1–H5 and the scene/passage semantic question remain open
hypotheses. `RESTART-TRIGGER-v1` is frozen. No implementation, schema,
prototype, repository, Product change, or active roadmap priority was created.

No push, tag, release, deploy, or publication occurred.
