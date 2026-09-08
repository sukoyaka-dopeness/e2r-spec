# LiaisonScape Actual Product Surface Inspection Precedence

Date: 2026-09-08

Status: bounded process-correction result; non-normative; no Product adoption

## Purpose

This checkpoint records a process correction following the Fresh12 visual
quality failure. A diagnostic renderer can be useful for isolating geometry,
but it must not be presented as a substitute for the LiaisonScape application
when the question is what a user sees or how the Product behaves.

## Findings

### PROVEN

1. LiaisonScape's actual workspace is rendered by `src/App.tsx`. Its graph
   view owns the Product node body, node label, relation path, relation label,
   selection, viewport controls, and pointer interaction.
2. The actual Product graph derives routing and labels through the Product
   presentation path, including node movement state and route/label
   recomputation after a meaningful Entity drag.
3. The earlier spacing inspection surface used a Product render wrapper and
   embedded candidate geometry, but it did not implement the actual Dataset
   workspace or the normal Product Entity-drag semantics. It was therefore a
   diagnostic projection, not the Product itself.
4. A dev-only inspection seam can load the canonical Apollo 11 example into
   the actual `App` without changing Product source semantics or historical
   evidence. The launched surface displayed the Apollo 11 Product workspace
   with 9 Entities and 11 ordinary Relations.

### STRONGLY SUPPORTED

- When a user asks to inspect the real screen, Product interaction, or the
  effect of node movement, the actual Product surface is the appropriate
  inspection target. A partial renderer can answer only the narrower question
  represented by its implementation.
- Source inspection can establish that interaction handlers exist, but it
  cannot establish the user's visual or interaction experience. The user must
  be able to operate the actual surface for that evidence.

### UNRESOLVED

- No spacing candidate or routing policy is selected by this checkpoint.
- A complete manual acceptance of every Product interaction remains a later
  user-observation checkpoint. The current local diagnostic launch confirms
  the surface and fixture load; it does not issue formal acceptance.

## Process correction

The existing Early Visual Smoke Check policy remains the governing process.
The following clarification is added for Product visual and interaction work:

```text
diagnostic geometry renderer
  -> useful for isolated comparison and measurement
actual Product surface
  -> required target for claims about user-visible Product presentation or
     normal Product interaction
formal Human Review / acceptance
  -> separate authority and separate checkpoint
```

Before deciding on Product spacing, routing, label, or placement behavior,
launch a representative actual Product surface and let the user inspect the
normal interaction where the question concerns interaction or visual reality.
At minimum, the surface should expose the relevant node body, node label,
relation edge, relation label, viewport, selection, and node-drag behavior.
After a node drag, the inspection should allow observation of the actual
Product route and label update. Diagnostic seams may provide fixture or
candidate input, but must remain visibly diagnostic and must not silently
adopt user-adjusted geometry into Product or evidence.

This clarification does not require every cheap geometry experiment to become
a full Product acceptance run. It applies when the requested conclusion is
about the user's actual Product experience. The representative output and
interaction scope should be recorded, and formal acceptance, ranking,
selection, and publication remain separate.

## Checkpoint evidence

- Representative fixture: Apollo 11 English example from
  `e2r-spec/examples/apollo-11-mission.en.e2r.json`.
- Actual Product entry: dev-only local inspection seam importing the existing
  `src/App.tsx` and `src/styles.css`.
- Actual Product surface: local Vite URL
  `http://127.0.0.1:4174/e2r-liaison-scape/experimental/product-evaluation-seam/actual-inspection/`.
- Direct observation: the workspace rendered 9 Entities and 11 ordinary
  Relations with Product node bodies, labels, routes, relation labels, and
  viewport controls. A derived local screenshot was used only to verify that
  the fixture loaded; it is not authoritative evidence.
- Interaction authority: Product source handlers for selection, viewport
  pan/zoom, and Entity pointer drag were inspected. User observation remains
  the evidence for the interaction experience.

## Relationship to Fresh12 and Early Visual Smoke Check

Fresh10, Fresh11, and Fresh12 artifacts and the canonical Fresh12 Human Review
result remain unchanged. No new governed Fresh lineage was created.

This result refines, but does not replace, the Early Visual Smoke Check policy:
machine PASS is not visual usability; diagnostic observation is not formal
acceptance; and an inspection renderer is not automatically the Product
surface. The smoke check remains small and non-authoritative.

## State and validation

- Product placement change: **NOT DECIDED**.
- Product routing change: **NOT DECIDED**.
- Spacing selection: **NOT DECIDED**.
- New governed Fresh lineage: **NOT STARTED**.
- Historical evidence: **UNCHANGED**.
- Product source behavior: **UNCHANGED**; only uncommitted dev-only
  inspection files were added locally.
- Push, tag, release, deployment, and publication: **NOT PERFORMED**.

The corresponding reusable knowledge entry is a Hypothesis because this is a
single bounded process checkpoint, not an independently confirmed workspace
decision.
