# Wave 5 — Final Residual Placement Migration Result 1

- Date: 2026-09-26
- Status: **COMPLETE — PATH MIGRATION ONLY**
- Scope: Execute the exact W5A–W5D manifests approved in the final root-classification audit.
- Authority: Physical placement result only. Document status, maturity, acceptance, authorization, historical meaning, Roadmap priority, and normative authority are unchanged.
- Preparation: [Final Root Classification, Documentation IA Placement, and Root-Ingress Gate Audit 1](documentation-ia-final-root-classification-and-ingress-gate-audit1.md).

## Migration result

All 89 approved documents moved with their basenames preserved:

- W5A: 77 Documentation IA / Roadmap-governance records to `docs/documentation-ia/`.
- W5B: 5 LiaisonScape-owned application-evidence records to `docs/liaisonscape/`.
- W5C: 4 Cross-App contract / interoperability / shared-UX records to `docs/cross-app/`.
- W5D: 3 exploratory Research records to the existing `research/exploratory/` directory.

The moved records remain separate authority and status lanes. In particular,
Roadmap History remains historical chronology, `docs/roadmap.md` remains the
sole current-planning authority, application records remain application
evidence, Cross-App records remain shared-contract/UX evidence, and W5D
remains exploratory Research. This result does not authorize implementation,
release, adoption, or semantic changes.

The W5A source-path manifest in the preparation audit is intentionally
preserved as historical migration evidence. Actual Markdown links and local
navigation were repaired to resolve to the new paths; plain historical source
path mentions were not rewritten as if they were current links.

## Documentation IA entry point and navigation

`docs/documentation-ia/README.md` now identifies this folder's repository
documentation-governance responsibility and points back to the root Hub and
sole Roadmap. The root Documentation Hub remains in `docs/README.md`; the
Documentation Plan moved into this folder with the approved W5A manifest.
`research/README.md` navigation and the existing Research follow-up pointer
were synchronized to the W5D paths. The Research catalog contained no entries
for these three pre-migration `docs/` records, so no status/classification
entries were invented or reclassified.

## Explicit boundaries retained

- The two audit HOLD records remain at the root: `liaisonscape-validator-release-residual-audit.md` and `self-description-final-acceptance-and-hub-action-public-update-readiness-result.md`. No owner or split was selected.
- The 15 Seed-133 JSON diagnostic references and the known missing `visual-evidence-index.md` reference remain unresolved; no artifact was created, acquired, substituted, repaired, or marked resolved.
- No root-placement validation gate was implemented. Its adoption remains a later checkpoint after Human review of the actual post-Wave-5 root set and these two HOLD records.
- No sibling application repository was written.
- In `ai-knowledge`, exactly two existing references to `dataset-acquisition-entry-point-alignment.md` were changed to the new `e2r-spec/docs/cross-app/` path. The unrelated pre-existing dirty playbook was not modified, staged, or committed.

## Post-migration root census

After the 89 moves, `docs/` contains 70 immediate-root Markdown files. This is a census of the actual tree, not a target that triggered additional moves. `docs/README.md` and `docs/roadmap.md` remain at root; the two HOLD records above remain there pending a separate Human decision. All other root files match the positive E2R-wide / repository-wide retention families in the preparation audit.
