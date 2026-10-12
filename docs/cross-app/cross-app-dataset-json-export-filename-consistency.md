# Cross-App Dataset JSON Export Filename Consistency

Status: Human-selected application design decision; the bounded Cross-App Dataset JSON Export Filename behavior received Human Browser Acceptance / PASS / CLOSED on 2026-10-12. Public release status remains separate and NO-GO.

## Shared behavior

NarrativeLine, LiaisonScape, and ParameterPlotter use `extensions.metadata.title` as the preferred candidate for a downloaded E2R JSON filename. Each app makes that candidate safe for a filesystem, retains Japanese and other usable Unicode text, and uses `e2r-dataset` when no usable candidate remains. The downloaded name ends in `.e2r.json`.

The whole filename, including `.e2r.json`, is at most 180 UTF-8 bytes. Names already within that limit retain their existing result. Only an over-limit candidate is shortened: preserve its leading title-derived text without splitting a Unicode character, then append an ellipsis and a short deterministic hash derived from the unshortened filename candidate before the extension. The same title must produce the same filename in all three apps. The fallback remains `e2r-dataset.e2r.json`.

The filename is a download label. It does not change the Dataset title, Dataset identity, serialized content, validation result, or Workspace state. Export validation and refusal still happen before the browser download request. The existing application-specific response to a successful export remains in place.

## Responsibility boundary

The Dataset title is descriptive metadata and may be edited as Dataset data through the existing application workflow. Dataset identity is a separate concern. The Export filename is derived at download time; it is neither a persisted identity nor a new Core, Extension, or schema requirement.

Applications own the implementation details of candidate sanitization, UTF-8 measurement, Unicode traversal, hash computation, browser download wiring, and platform-specific safeguards. The shared outcome is a usable title-derived filename when possible, safe deterministic shortening above the byte limit, a safe common fallback otherwise, and the `.e2r.json` suffix. This decision does not impose a length limit on the Dataset title or standardize a particular algorithm, user interface, or Workspace persistence mechanism.

## Verification and acceptance boundary

This is an application behavior decision for the three current apps and a reusable guide for later E2R apps. The nine-case Human Browser Acceptance is recorded in the [bounded closure](cross-app-dataset-json-export-filename-human-acceptance-closure-2026-10-12.md); it does not establish all-title, all-browser, or release acceptance. Automated implementation evidence is recorded separately in Session 0105. Earlier Human Acceptance remains valid within its recorded scope. This decision does not authorize push, deployment, or Public Release; PUBLIC RELEASE remains NO-GO.
