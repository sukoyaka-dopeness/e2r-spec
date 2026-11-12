# E2R Session 0109 - E2D / E2F Temporary Worktree Preservation

Date: 2026-10-29 JST

Repositories: `e2r-spec` and its registered E2D / E2F linked worktrees

## Session identity and authority

Objective: preserve the observable Git state and recoverable information of the E2D and E2F temporary worktrees without repairing, moving, or deleting either original worktree. This is a historical preservation checkpoint. The [Roadmap](../../docs/roadmap.md) remains the current planning authority; this Session does not decide whether the Roadmap snapshots are adopted or discarded.

Status: **E2D / E2F STATE PRESERVED / ISOLATED GIT-STATE REPRODUCTION VERIFIED / PURPOSE AND MISSING-FILE CAUSE UNRESOLVED / ORIGINAL WORKTREES RETAINED**.

## Source state

E2D (`C:\Users\extra\AppData\Local\Temp\E2D`) and E2F (`C:\Users\extra\AppData\Local\Temp\E2F`) were both registered linked worktrees with detached HEAD `4ffe02f0a4ec50a48440a8e8c2244ec6887c3cd9`, parent `7af27eaf3315a1a6456420a911846c2d2b95e102`, and no sparse checkout. At capture, `e2r-spec` local and Remote `main` both pointed to `eeca719ac1cd9a4db91eccee3bfb71edf514a995`; the worktree HEAD was 64 commits behind and zero ahead.

Every tracked file was absent from each worktree's filesystem. E2D had 1,355 missing tracked paths and E2F had 1,356; neither had untracked files. The status composition was:

- E2D: 1,353 unstaged deletions (` D`), one staged addition whose working-tree file was absent (`AD`), and one staged Roadmap modification whose working-tree file was absent (`MD`).
- E2F: 1,353 unstaged deletions (` D`), two staged additions whose working-tree files were absent (`AD`), and one staged Roadmap modification whose working-tree file was absent (`MD`).

E2D's staged paths were `docs/cross-app/cross-app-export-specification-declaration-alignment-human-browser-review-and-closure-proposal-2026-10-12.md` and `docs/roadmap.md`. E2F's were `docs/cross-app/cross-app-dataset-json-export-filename-consistency.md`, `docs/cross-app/cross-app-dataset-json-export-filename-human-acceptance-closure-2026-10-12.md`, and `docs/roadmap.md`. All three added-document blobs matched their current-main counterparts exactly. The staged Roadmap blobs differed from current main: E2D `f17b5fca292e8246aecb83b41f2ee71490b9581b`; E2F `9f658e6e0a091ea555dc30ac9ead4fffe67ff59c`. The acceptance subjects are represented in current main with fuller wording, but the exact staged snapshots remain distinct and are preserved without an adoption decision.

The worktree directories and `.git` pointer files remain, with directory timestamps from 2026-10-12 and 2026-10-19. These observations do not establish whether files were intentionally removed, removed by temporary-file cleanup, or lost for another reason. Git and filesystem evidence did not establish the worktrees' original purpose or whether a user still relies on them.

The earlier `e2r-spec-local-main-preservation-20261028` materials concern the prior local-main state and do not contain an E2D/E2F-specific Index snapshot. That directory was left untouched.

## Preservation package

A new package was created outside Temp and outside any Git repository at:

`C:\Users\extra\E2R\e2d-e2f-preservation-20261029`

It contains independent E2D and E2F records: raw worktree Index files, copied linked-worktree administrative metadata, exact porcelain status, staged and unstaged binary diffs, complete tracked and missing path manifests, and byte copies of every staged changed blob. It also contains the registered refs and worktree listing, remote/main checkpoint, a complete Git bundle, and a byte-verified copy of the complete shared `.git/objects` directory, including unreachable objects.

The bundle verified as complete and contained 15 refs. The common object-store copy contains 6,661 files / 153,188,048 bytes and matched its source file-by-file. A source scan reported 2,793 unreachable objects; those objects are included in the copied object store. `git fsck --full` against the isolated preserved object store exited 0 and reported dangling objects without corruption errors. Staged Roadmap blobs and other staged blobs are also exported individually and identified in the worktree manifests.

Package integrity covers 13,020 files. SHA-256 of `integrity-manifest.json`: `BD0B28FBF7AD895B9BC1F4A162AC9A6B6F18D2330A4E9A10663EC90578A69A8F`. See `manifest.json`, `common-object-store-manifest.json`, `verification/verification-results.json`, and `RESTORE-AND-VERIFY.md` in the preservation package for exact hashes, paths, and reproduction instructions.

## Isolated reproduction and limitations

A no-checkout clone was made from the preserved bundle. For each worktree separately, the copied raw Index and the corresponding staged-only blobs were supplied to an isolated verification environment. The detached HEAD, all `git ls-files --stage -z` entries, porcelain status, `git diff --cached --binary`, and `git diff --binary` reproduced byte-for-byte. All 1,355 E2D and 1,356 E2F indexed object IDs resolved in the isolated clone. This verified reconstruction of the Git state; it did not infer or restore the missing tracked working files.

Two empty short-path verification roots, `C:\Users\extra\E2R\vD` and `C:\Users\extra\E2R\vF`, were created for that isolated comparison and remain empty. No application tests or experiments were run.

The package preserves the observed state and required Git objects. It does not explain the historical cause of the missing files or prove current human use. It is a preservation copy, not authorization to clean up the Temp worktrees.

## Non-change confirmation and handoff

After capture, both original Index hashes, status outputs, HEADs, worktree registration metadata, repository refs, local main, and queried Remote main matched the captured values. E2R-SPEC main remained clean. The existing preservation directory was not changed.

No original worktree was checked out, restored, repaired, moved, pruned, or deleted. No original Index was staged or unstaged. No Git settings, commits, or remote state were changed. No Roadmap adoption/discard decision was made. No Push, cleanup, or other-repository operation occurred.

Before any later cleanup, Human should decide whether to retain these worktrees for ongoing use and whether the two historical Roadmap Index variants have any intended role. Any removal or repair must first preserve this package and validate the exact target and recovery path; the current package already supplies independently verified Git-state recovery evidence.