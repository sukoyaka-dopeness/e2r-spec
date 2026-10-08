# The Ashen Crown JA Canonical Dimension Text Repair

Date: 2026-10-08

Status: **28 HUMAN-APPROVED STRINGS RESTORED / AUTOMATED VERIFICATION PASS**

## Finding

Human Browser Review found Japanese Dimension names and endpoint labels rendered
as `????`. Inspection of the canonical file confirmed that the affected JSON
values themselves contained ASCII question marks; this was persisted content,
not merely a browser rendering problem.

The damage was confined to the seven Dimension records in
`examples/ashen-crown.ja.e2r.json`: `name`, `lowLabel`, `highLabel`, and
`description` on each record (28 fields total). The English canonical sample
had no corresponding damage. The approved Japanese wording in the
[Human Content Approval](ashen-crown-candidate-0.2.0-canonical-content-approval-2026-10-08.md)
remained intact as UTF-8.

Git evidence places the damaged values in the canonical sample introduced by
`25de41d2bd3b502d6e53b7ff775776d4a6e21ddf`; that commit also contains the
Human-approved wording document. This establishes where the bad strings are
present, but not which authoring, shell, encoding, or file-generation step
replaced them. No specific root cause is claimed.

## Repair and preservation

The 28 fields were restored directly from the Human-approved final wording in
the Content Approval document. The approval document and its prior validation
record were not rewritten. The restored Japanese values contain Unicode text
and exactly match the approved names, endpoint labels, and full Descriptions.

A semantic comparison against the pre-repair Git version, after removing only
those 28 fields from each version, found the rest of the JA Dataset identical.
This includes all Core objects and IDs, the seven Dimension IDs and scales,
all 70 Assessments and references, Dataset identity, Metadata, History,
Specification Extension, and other extensions. The EN Dataset is unchanged.
The EN/JA pair retains the same 7 Dimension IDs, MIN/MAX, integer constraints,
and 70 Entity/Dimension/value tuples. Both payloads and their matching
Specification Extension declarations remain exact version `0.2.0`.

## Regression guard and validation

`scripts/validate-ashen-crown-ja-dimension-localization.mjs` reads the approved
wording from the Content Approval document and checks all 28 fields for exact
equality, actual non-ASCII text, and absence of `?`. It also checks EN/JA
Dimension and Assessment parity, sample counts, and the exact `0.2.0` uses
declaration. It is now part of `npm run validate`.

The earlier Candidate schema and Production Validator PASS results establish
structural and semantic validity only; they did not prove that localized text
matched the approved Japanese. After this repair, the regression guard and
`npm.cmd run validate` pass. Production Validator `d81a6a7c6047f39369e425ca018d3b4b80bd18c6`
also returns `valid: true` with no diagnostics for both canonical samples.

## Acceptance boundary

This is a canonical content repair and machine-verification checkpoint. No
Human Browser Acceptance was performed or recorded here. It does not reopen or
change the separate bounded ParameterPlotter Candidate 0.2.0 integration
acceptance, and it does not accept the canonical sample in an application.
Candidate 0.2.0 remains non-Stable. Bundled sample synchronization, Hub
integration, Cross-App acceptance, and publication remain separate.
