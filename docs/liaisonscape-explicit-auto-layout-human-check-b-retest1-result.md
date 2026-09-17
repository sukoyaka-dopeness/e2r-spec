# LiaisonScape Explicit Auto Layout Human Check B Retest 1

Date: 2026-09-17  
Contract: `E2R-LIAISONSCAPE-EXPLICIT-AUTO-LAYOUT-HUMAN-CHECK-B-RETEST1`  
Classification: **B. HUMAN CHECK B RETEST READY / FULL-SUITE ENVIRONMENTAL GATE STILL OPEN**

## Disposition

The bounded Pin and Save fixes were retested against current source. All
targeted lifecycle and authority checks are green, and the Actual Product is
ready for the user to make the final Human Check B visual/lifecycle decision.
This document does not assign PASS, QUALIFIED, or FAIL to Human Check B.

## Actual Product retest

```text
URL: http://127.0.0.1:5176/e2r-liaison-scape/?acceptance-fixture=lighthouse&acceptance-locale=ja
repo/worktree: C:\Users\extra\E2R\e2r-liaison-scape
HEAD: 3c383c67c8e3c599be9de7f99d6785261e147479 + existing dirty worktree
server: Vite on 127.0.0.1:5176
```

Observed current-source sequence:

```text
fresh coordinate-less Lighthouse JA
-> Unpinned Auto Layout -> Running -> Product Preview
-> warning Preview remained distinct from hard failure
-> Preview action `元の配置に戻す`

same graph / Node
-> Pin -> Auto Layout -> Product Preview
-> no PIN_VIOLATION and no DEV hard-failure diagnostic
```

The Preview surface and floating Graph viewport toolbar remained separate and
usable. The earlier current-source browser sequence also confirmed:

```text
move -> Pin -> Auto Layout -> Preview
-> Return to previous layout
-> Save Coordinates -> `座標を保存しました。`
```

The automated operation and persistence evidence covers the complementary
`Pin -> move` ordering and saved/reloaded anchor resolution.

## Targeted contract matrix

| Contract | Current result |
| --- | --- |
| Unpinned comparison Node can move | PASS in existing Human Check evidence and operation coverage |
| Stationary Pin remains fixed | PASS; current Product reached Preview without Pin failure |
| move -> Pin -> Auto Layout | PASS; exact current working anchor retained |
| Pin -> move -> Auto Layout | PASS; exact current working anchor retained |
| move -> Pin -> Save | PASS; atomic candidate validates |
| saved Coordinate + Pin reload anchor | PASS in canonical Lighthouse replay |
| staged Unpin | PASS; operation input and obsolete declaration are removed correctly |
| Use this layout / Return to previous layout | PASS in existing Preview lifecycle coverage; final judgment remains user-owned |
| quality warning vs hard failure | PASS; warning remains Preview-admissible |
| viewport coexistence | PASS; Preview surface is outside Graph section |
| DEV hard-failure diagnostic | PASS; no diagnostic on successful Preview; prior known probe remains reproducible |

Focused executable evidence: `30/30 PASS`, including the final Unpin
declaration test.

## Precision direction and boundaries

Explicit Auto Layout now keeps fixed manual/current Pin anchors at exact
floating-point values while applying `round-once` only to unpinned automatic
positions. This matches the accepted direction that automatic placement should
be integer-canonicalized while manual placement may retain fractional values.
Initial Automatic Display integer canonicalization is a separate follow-up and
was not changed here. Dense Graph-space, label congestion, solver quality, and
runtime optimization remain separate follow-ups.

No routing, labels, Self-loop, Product scoring, Frontier algorithm, Dataset,
Coordinates, persistence authority, dirty-state, or Initial Automatic Display
behavior was changed in this retest.

## Full-suite gate

`npm test` was attempted after confirming no listener owned port 24678. The
suite reported many passing tests but again remained open after the known
WebSocket lifecycle condition (`Port 24678 is already in use`) and was stopped.
It is therefore not recorded as Full PASS. No test architecture or runtime
behavior was changed to force completion.

Lint, production build, E2R-SPEC validation, and both repository diff checks
passed. Human Check B is ready for the user's final Actual Product judgment.
