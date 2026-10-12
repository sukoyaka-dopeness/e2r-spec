# E2R Session 0105 - Cross-App Dataset JSON export filename consistency

Date: 2026-10-12

Repositories: `e2r-spec`, `e2r-narrative-line`, `e2r-liaison-scape`, `e2r-parameter-plotter`, and `ai-knowledge`

## Session identity

Objective: implement the Human-selected E2R JSON export filename behavior in three applications and record the reusable cross-app decision without changing Dataset semantics or Workspace safety.

Status: **LOCAL IMPLEMENTATION AND AUTOMATED VERIFICATION; HUMAN BROWSER FILENAME REVIEW PENDING; NO PUBLICATION**. The [Roadmap](../../docs/roadmap.md) remains the current planning authority.

## Bounded checkpoint

- NarrativeLine keeps its title-derived filename and adds control-character and reserved-device-name safety.
- LiaisonScape and ParameterPlotter replace fixed download names with a safe Dataset-title candidate and the common `e2r-dataset.e2r.json` fallback.
- Each app retains `.e2r.json`, usable Japanese title text, existing Export validation and refusal, and the existing post-Export Workspace behavior. Filename generation is read-only and does not alter Dataset title, identity, or serialized data.
- The [cross-app design record](../../docs/cross-app/cross-app-dataset-json-export-filename-consistency.md) is the source of truth; `ai-knowledge/decisions/cross-app-dataset-json-export-filename.md` records the reusable decision.

## Verification and boundary

Representative automated tests cover Japanese titles, forbidden characters, reserved names, fallback, and non-mutation. Full application tests, lint/build, and E2R-SPEC validation were run for this checkpoint; see the task completion report for exact results. Actual browser download filenames still need bounded Human review in each app. Existing Human Acceptance is not reopened or widened. Public Release remains NO-GO; no push, deployment, release, or publication is authorized by this session.

Pre-existing staged, unstaged, and untracked work was preserved. No local commit was created for this multi-repository checkpoint.

## Follow-up checkpoint - long Export filenames (2026-10-12)

The Human adopted a 180 UTF-8 byte maximum for the complete downloaded filename. The three applications now retain in-limit names and shorten only over-limit candidates with a Unicode-safe leading portion, an ellipsis, and a deterministic short hash based on the original candidate. The common fallback and `.e2r.json` extension remain unchanged. This is an Export label safeguard, not a Dataset title limit or a change to identity, JSON content, validation, or Workspace safety.

Automated checks cover English, Japanese, and emoji boundary cases, deterministic results, cross-app agreement, existing sanitization and fallback, and non-mutation. Human Browser Review of the final downloaded filenames remains separate. Existing Human Acceptance and the PUBLIC RELEASE NO-GO boundary remain unchanged; no publication action or local commit was made for this follow-up.
