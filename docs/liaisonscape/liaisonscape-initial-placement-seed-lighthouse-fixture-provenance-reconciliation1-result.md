# LiaisonScape Initial-placement Seed Lighthouse Fixture Provenance Reconciliation

## Checkpoint

\`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-LIGHTHOUSE-FIXTURE-PROVENANCE-RECONCILIATION1\`

Date: 2026-09-02
Status: Complete, provenance-only
Result: \`CASE 4 / DECISION B\`

This checkpoint reconciles the Lighthouse fixture provenance seam left open by
the preceding W1 reconstruction. It does not run placement, objective,
profile, routing, label, visual, or browser work.

## Decision summary

The previously recorded content hash

\`303823E07613D338E57E62C3F60EBEADC2BB853815D16007A9F4573242F6325C\`

was not found as the raw SHA-256 of any reachable committed Lighthouse blob,
including the exact historical target path, the relevant earlier path, or the
committed \`e2r-spec\` copy. No committed historical hashing or canonicalization
method explains it. A bounded diagnostic found that LF-to-CRLF conversion of
the current committed blob happens to produce \`3038…\`, but there is no
evidence that this conversion was used by the earlier experiment. The old
hash is therefore classified as:

\`PROV-P3 — PLAUSIBLE BUT UNPROVEN TRANSFORMATION\`

It is not an authority for future research and is not an exact replay claim.

The future Lighthouse research authority is explicitly promoted to:

\`\`\`text
authorityClass: AUTH-LH0
repo: e2r-liaison-scape
commit: fd563340625fd3d88dc25baedc93c4f8fe69e5e7
path: public/lighthouse-restoration-demo.en.e2r.json
gitBlobOid: b96092b0c2b88c6c1ea41c11c1b36dccca3e9726
rawSha256: C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386
w1InputProjectionSha256: 4CDDB0BD87E53D0DC1E58FD703D6658F3D887348EFCBE84811768ACB80F91245
old3038Status: PROV-P3, non-authoritative historical hash
exactReplayOfOldSnapshotClaim: NO
\`\`\`

The prior W1 rule and literal mapping are unchanged. Because the current
authority, W1 input domain, hard gate, and mapping are now explicit, Lighthouse
is promoted from \`W1-MAN-4\` to \`W1-MAN-5\`. Ashen Crown and K3 remain
\`W1-MAN-5\`. The exact next checkpoint is
\`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN2\`.

## Preceding evidence and protected-state boundary

The preceding checkpoint was
\`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-TA1-OPERATIONAL-WITNESS-RECONSTRUCTION1\`,
recorded by commit \`9203eadd\`. It froze \`TA1-W1-OP-v1\`, recorded the
Lighthouse mapping, and held Lighthouse at \`W1-MAN-4\` solely because the
previous \`3038…\` provenance claim did not reconcile with the current
committed raw hash.

The following boundaries were preserved:

- no placement, assignment, candidate-family, objective, materializer,
  solver, settling, routing, label, UI, or sample change;
- no W1 rule or W1 mapping recomputation or repair;
- no reading or display of protected dirty sample content;
- \`public/lighthouse-restoration-demo.en.e2r.json\` and
  \`public/lighthouse-restoration-demo.ja.e2r.json\` working-copy changes were
  not edited, staged, normalized, or adopted as authority;
- \`sessions/E2R-Session-0052.md\`, the routing preview, residual experiment
  shells, and the dirty \`ai-knowledge\` playbook were preserved; and
- no browser, server, visual validation, push, tag, release, or publication
  was performed.

## Hash terminology and byte-safe method

Git blob OIDs and file-content SHA-256 values are recorded separately. The
Git blob OID identifies the repository object; \`rawSha256\` is SHA-256 over the
exact fixture payload bytes.

Committed payloads were obtained as raw \`Buffer\` values from Git and hashed
with Node \`crypto.createHash("sha256")\`. The protected working copy, checked
only after committed history and bounded diagnostics, was read as raw bytes.
No text pipeline, decoding, serializer search, Git configuration change, or
content rewrite was used.

## Current committed Lighthouse blob

| Repository | Commit | Path | Git blob OID | Bytes | Raw SHA-256 | C671 match |
|---|---|---|---|---:|---|---|
| \`e2r-liaison-scape\` | \`fd563340625fd3d88dc25baedc93c4f8fe69e5e7\` | \`public/lighthouse-restoration-demo.en.e2r.json\` | \`b96092b0c2b88c6c1ea41c11c1b36dccca3e9726\` | 13406 | \`C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386\` | YES |

The exact current blob reproduces the preceding checkpoint's \`C671…\` value.
The accepted W1 mapping was already produced for this committed fixture and
is not recomputed here.

## Exact-path historical blob ledger

Every distinct reachable committed blob for
\`public/lighthouse-restoration-demo.en.e2r.json\` was enumerated across
\`git log --all\`; each distinct blob was hashed once.

| Representative commit | Git blob OID | Bytes | Raw SHA-256 | \`3038…\` |
|---|---|---:|---|---|
| \`fd563340625fd3d88dc25baedc93c4f8fe69e5e7\` | \`b96092b0c2b88c6c1ea41c11c1b36dccca3e9726\` | 13406 | \`C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386\` | NO |
| \`0e56345e58cb03109b3712bc00a803dfeac01345\` | \`970c6dddd351ee86f7e2dbccaca176308df6c94b\` | 13338 | \`8E7FF01DA21125C0179718E3A5CA36175E798590B212FA2409F9389A0465243A\` | NO |
| \`9eef66dbbc5be7e76c75c46ce89ad37b7fd53860\` | \`06c5b8a6a9c7136d93d03d1c4b702b40fbd69ef4\` | 13308 | \`5BE5D944DC624294F558F207C35D7F02929F045A976ECA7D7AAE4C6167C76F7A\` | NO |
| \`f38e4a2879eb3ff6ebdbd047e459bfa1b972a813\` | \`4a34169084d97c9b6f544af1e36a14ce4b0ea564\` | 12522 | \`898DB23C021639D8E1901FAE720544FB85F893D308A3AF7204DD1579B66D4BAC\` | NO |
| \`59f911e656851f8d7c7a063d5128a1405be45a07\` | \`d80f0c419282cc89ee88f00e96f2a775a0f4d700\` | 7782 | \`4734BCD8D23B099CBB9266A6F9431372769E63BCF8F652D750BAB2A3FA62A660\` | NO |
| \`2a5bbe52ef13fb6010e0f3b833d795dae412400e\` | \`2514c75342d1a1cec3ed57371ce9279d539e79d5\` | 7684 | \`7FCD031C3F6CE0557B9E09A6F3937A1BA250976865E8C2701F6A8E8A28687510\` | NO |
| \`25bcd937ab3f895fcb4c7a80f341419926287c49\` | \`f7fe68603bacf18a6d21b51f91932b701d8ffaa2\` | 7622 | \`05F4F5901BE4C0B311301836D9F4EFCB894635762B20718D409E7B7B3BAEBB6D\` | NO |
| \`fe30f63e16d6861883d1f10303ac6719dec072ab\` | \`1bbc19f187eb63c7fadd37280c9a87033127e540\` | 7553 | \`6148A116CE0E66825CFCD64FAE073324D3833A443873C178618BB6FDA5DCFBF7\` | NO |
| \`59a0e1aa666678b240b64741c843a1c29cb22837\` | \`7e57b962a0de2be8dcfbeacceede685da87c9cb5\` | 7635 | \`9DEAC9EBEC025C1777DD8C9A3962B5F17F8B4DE6DE0843EBEA870F236F84FE26\` | NO |

No exact historical committed blob produces \`3038…\`.

## Historical path and cross-repository search

Relevant historical Lighthouse names and paths were checked without broad
unrelated binary/history scanning. The earlier committed path
\`public/lighthouse-restoration-demo.e2r.json\` produced:

| Repository | Representative commit | Path | Git blob OID | Bytes | Raw SHA-256 | \`3038…\` |
|---|---|---|---|---:|---|---|
| \`e2r-liaison-scape\` | \`e6df93bbb7eaf42820215b918cb30491785405fe\` | \`public/lighthouse-restoration-demo.e2r.json\` | \`93a47ce6d4f8d8af39f1df326b25afbe96175f3d\` | 7632 | \`F69CD5C7068E97ACDC7803ACF229949FD27943883EF28D6356B8FFBD7456DB7C\` | NO |

The relevant committed \`e2r-spec\` English mirror is the same current blob:

| Repository | Commit | Path | Git blob OID | Bytes | Raw SHA-256 |
|---|---|---|---|---:|---|
| \`e2r-spec\` | \`d5ba6a8fb7d110cb645db5c7b1214b85ec15bec8\` | \`examples/lighthouse-restoration-demo.en.e2r.json\` | \`b96092b0c2b88c6c1ea41c11c1b36dccca3e9726\` | 13406 | \`C67107BCA0A007A399F164317DA2D330F7B15F5E2609A1B5B2FCDF9F44E6C386\` |

Older \`e2r-spec\` English mirror blobs correspond to the older exact-path
versions listed above (\`970c…\` / \`8E7F…\` and \`06c5…\` / \`5BE5…\`). No relevant
committed path in either repository produces \`3038…\`.

## Origin and method audit

The first committed occurrence of \`3038…\` is commit
\`dd17bac5a36b925e6542474a4775437923e4f30f\` (\`docs: evaluate LiaisonScape
seed structural quality\`). It described the value as the committed
Lighthouse fixture hash in a disposable clone, but did not identify a Git blob
OID, exact hashing command, byte source, line-ending mode, canonicalization
rule, or working-copy/committed distinction. Later research records copied the
same claim.

The committed method search found the repository's ordinary exact-byte mirror
validator, which uses \`createHash("sha256").update(bytes).digest("hex")\`.
It contains no historical method that produces \`3038…\`, and no committed
record near the first occurrence documents JSON canonicalization, key sorting,
or line-ending normalization.

| Candidate source or method | Reproduces \`3038…\`? | Classification |
|---|---|---|
| Any exact current or historical committed target-path blob | NO | Not \`PROV-P0\` |
| Relevant earlier Lighthouse path | NO | Not a committed alternate-path match |
| Relevant committed \`e2r-spec\` English mirror | NO; current mirror is same \`C671…\` blob | Confirms current authority, not old hash |
| Historical documented canonicalization | NO documented method | Not \`PROV-P1\` |
| Current raw Git blob | NO; 13406 bytes, \`C671…\` | Exact current authority bytes |
| UTF-8 BOM diagnostic | Not applicable; no BOM present | No match |
| CRLF-to-LF diagnostic | NO | No match |
| LF-to-CRLF diagnostic | YES; 13968 bytes | Plausible but historically unproven |
| Final-newline and JSON serialization diagnostics | NO | No match |
| Protected dirty EN working copy | NO; 13693 bytes, \`19B6362468CF51E32FA9DEA016BC4211D8055C299E28D0CC402BC63B5A5B31D1\` | Not a working-copy match |

The bounded LF-to-CRLF result is a byte-handling hypothesis only. The
LiaisonScape path is stored as LF in Git (\`i/lf\`, with no \`.gitattributes\`),
and local \`core.autocrlf=true\` makes such a checkout difference plausible.
This local setting is recorded as context only and was not changed. The
protected dirty file does not equal either \`3038…\` or \`C671…\`; its content was
not displayed and no topology comparison was required.

## W1-input projection and topology boundary

The W1 input projection is a research-only diagnostic, not a Dataset field,
schema, Extension, or Production contract. It contains only:

- sorted Entity IDs;
- sorted unique non-self Entity adjacency pairs;
- accepted motif identities; and
- accepted overlap-cluster member sets.

It excludes labels, descriptions, stored coordinates, presentation, routing,
locale, and unrelated Relations. The deterministic representation uses
code-point ascending IDs, internally sorted edge endpoints, lexical record
ordering, UTF-8, LF, and one final newline.

For the current Lighthouse topology the canonical representation is:

\`\`\`text
entities:
archive
authority
beacon
clara
daniel
elias
lighthouse
maya
sofia
thomas

edges:
archive|sofia
authority|lighthouse
beacon|lighthouse
beacon|maya
clara|daniel
clara|elias
clara|lighthouse
clara|maya
clara|thomas
elias|sofia
maya|thomas

motifs:
clara|maya|thomas

clusters:
clara|maya|thomas

components:
SINGLE_CONNECTED_COMPONENT:archive|authority|beacon|clara|daniel|elias|lighthouse|maya|sofia|thomas
\`\`\`

The W1-input projection SHA-256 is
\`4CDDB0BD87E53D0DC1E58FD703D6658F3D887348EFCBE84811768ACB80F91245\`.

| Fixture/version | Raw bytes | W1-input projection | Authority interpretation |
|---|---|---|---|
| Current LiaisonScape committed blob \`C671…\` | Baseline | \`4CDDB0…\` | Future authority |
| Current committed \`e2r-spec\` English mirror | Same Git blob OID and bytes | \`4CDDB0…\` | Supporting mirror |
| LF-to-CRLF diagnostic variant | Different bytes | Same projection after exact parse | Byte-only hypothesis, not authority |
| Old \`3038…\` source | No identified source bytes | Not independently materialized | Historical claim only |
| Protected dirty EN working copy | Different, nonmatching bytes | Not compared | Protected, non-authoritative |

The current blob and the diagnostic line-ending variant are therefore
\`RAW-BYTES-DIFFERENT / W1-INPUT-PROJECTION-SAME\`. This is sufficient to
separate the unresolved old byte claim from the W1 semantic topology consumed
by the accepted mapping. It does not claim that the old research run was
replayed exactly.

## Provenance classification and future authority

| Class | Assessment |
|---|---|
| \`PROV-P0\` exact committed blob | Not supported: no committed blob hashes to \`3038…\`. |
| \`PROV-P1\` documented canonicalization | Not supported: no historical committed method reproduces it. |
| \`PROV-P2\` non-committed working-copy snapshot | Not supported: protected dirty EN hash is \`19B6…\`, not \`3038…\`. |
| \`PROV-P3\` plausible but unproven transformation | Selected: LF-to-CRLF of current \`C671…\` reproduces \`3038…\`, with no historical-use evidence. |
| \`PROV-P4\` orphan/unreproducible hash | Not primary because the bounded transform reproduces it. |
| \`PROV-P5\` contradictory | Not triggered: no incompatible committed authority is assigned to \`3038…\`. |

\`AUTH-LH0\` is selected for future W1 research because the exact commit/path/
blob are explicit, the W1 mapping and hard gate already correspond to this
blob, the W1 input projection is fixed, the \`e2r-spec\` mirror confirms the
same blob, and the old hash is explicitly downgraded rather than silently
reused. This authority selection does not assert recovery of the historical
Experiment1 snapshot.

## W1 manifest promotion

No mapping was recomputed. The preceding exact Lighthouse mapping remains:

\`\`\`text
archive -> P0
authority -> P1
daniel -> P2
sofia -> P3
elias -> P4
beacon -> P5
thomas -> P6
lighthouse -> P7
maya -> P8
clara -> P9
\`\`\`

The preceding hard gate remains accepted: injective, finite/distinct,
\`GEO-0 = 0\`, and \`GEO-3 = 0\`; input-order determinism was \`PASS\`. W1 remains
\`WIT-NEW-OPERATIONAL\` and \`CLAIM-P0\`, not historical, canonical, or
quality-neutral policy semantics.

| Fixture | Previous W1-MAN | Current W1-MAN | Reason |
|---|---|---|---|
| Lighthouse | \`W1-MAN-4\` | \`W1-MAN-5\` | Current authority and W1 projection are explicit; old hash is downgraded to \`PROV-P3\`. |
| Ashen Crown | \`W1-MAN-5\` | \`W1-MAN-5\` | Unchanged. |
| K3 | \`W1-MAN-5\` | \`W1-MAN-5\` | Unchanged. |

## Objective blackout and next checkpoint

This result provides no objective, profile, altitude, FAN-P1, crossing,
curvature, routing, label, or visual conclusion. The purpose is only to make
the future fixture authority and the W1 byte/topology boundary auditable.

The exact smallest next checkpoint is:

\`E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-STRUCTURAL-ASSIGNMENT-OBJECTIVE-EXPERIMENT-DESIGN2\`

It may use \`AUTH-LH0\` and the already frozen W1 manifests. This checkpoint did
not create that experiment or its disposable execution surface.

## Exact closure

- old \`3038…\` exact committed source: **NOT FOUND**;
- old \`3038…\` documented canonicalization: **NOT FOUND**;
- old \`3038…\` protected working-copy match: **NO**;
- current \`C671…\` committed blob: **REPRODUCED**;
- current Lighthouse future authority: **AUTH-LH0**;
- W1 mapping changed: **NO**;
- Lighthouse W1 readiness: **PROMOTED \`MAN-4 -> MAN-5\`**;
- Production source, samples, or semantics changed: **NO**;
- next objective experiment started: **NO**;
- push, tag, release, deployment, or publication: **NOT DONE**.
