# LiaisonScape Relation-Label Along-Edge / Midpoint Recovery Audit

- Date: 2026-08-30
- Checkpoint: `E2R-LIAISONSCAPE-RELATION-LABEL-ALONG-EDGE-MIDPOINT-RECOVERY-FIX1`
- Scope: audit / diagnostic only

## Exact result

`NOT JUSTIFIED - CURRENT ALONG-EDGE PLACEMENT ALREADY MATCHES EXISTING INTENT`

The current production label helper already returns an automatically displaced
Relation label toward its preferred midpoint/anchor when the along-edge
pressure disappears. It does not force midpoint placement while the midpoint
or surrounding candidates remain occupied. No stale along-edge anchor failure
was reproduced, so no runtime fix or new recovery policy was introduced.

## Current semantics

`App.tsx` passes each Relation's own route to `placeEdgeLabel`, followed by
occupied labels, Nodes, and other edge paths. The helper evaluates the
preferred midpoint first, then deterministic along-edge samples
`[20,16,24,12,28,8,32,4,36]`, with normal offsets `[0,-24,24,-40,40]`.
It first chooses the existing lowest-score candidate. At that selected
along-edge sample, a collision-free candidate with the smallest normal
offset is recovered; safe candidates with the same normal offset are then
ordered by the existing along-edge preference. Thus normal-distance recovery
and along-edge recovery remain separate.

Previous placement is used as stability hysteresis only when it is useful.
During active Node drag, incident Relation labels bypass the previous
placement so they follow responsively. Explicit manual label anchors and
manual routes remain user-owned and are not reset by automatic recovery.

## Synthetic reproduction

For a horizontal owner route from `(0,100)` to `(400,100)`, occupying the
midpoint and all five midpoint normal candidates moves the automatic label to
an available along-edge location (`x=120`). Removing those occupied labels
and passing the prior placement returns the label to the midpoint (`x=200`)
with the same normal offset. A simple occupied midpoint recovers directly to
the midpoint at normal offset `-24`.

If the preferred midpoint remains blocked by a Node, label, or other Edge,
the label remains displaced along the owner route. This confirms that
recovery does not mean unconditional midpoint snapping. The candidate set
contains usable recovery positions in the tested cases.

## Lighthouse and ownership boundary

Current stored Lighthouse labels include `clara-thomas-mentors` (`mentors`),
`clara-thomas-supervises` (`supervises`), `clara-maya` (`works with`),
`elias-clara` (`advises`), `sofia-elias` (`interviews`), and
`daniel-clara` (`coordinates with`). Their placement is automatic in the
sample; no manual Relation-label anchor is present for these representative
labels. The current source has no tracked label-position snapshot or
historical pixel baseline, so exact visual before/after distances would not
be evidence-backed. Foreign-Edge proximity and label ownership ambiguity
remain separate audits.

## Classification and scope

Root cause classification: `CASE 4 - CURRENT ALONG-EDGE POSITION IS
INTENTIONAL`, not stale hysteresis. Existing candidate legality, scoring,
deterministic ordering, and normal-distance recovery already provide the
bounded behavior requested. No new score weight, midpoint threshold,
fraction tolerance, sampling count, global label solver, or route solver was
added.

Unchanged: route geometry, reverse-endpoint normalization, parallel obstacle
side preservation, foreign-node routing, self-loop labels, manual/Owned
Presentation, samples, Coordinate/Presentation payloads, schemas, Core,
Extensions, Validator, and NarrativeLine Display-Order. Along-edge recovery
does not justify changes to foreign-edge scoring or crossing minimization.

## Verification

- LiaisonScape baseline: 279/279 tests passed.
- Lint: PASS.
- Build: PASS.
- `git diff --check`: PASS.
- No LiaisonScape runtime or test files were changed.
- No runtime commit was created.
- Temporary diagnostics were command-line only and left no repository files.
- Protected dirty `sessions/E2R-Session-0052.md` was preserved.
- No push, tag, release, deploy, or publication was performed.
