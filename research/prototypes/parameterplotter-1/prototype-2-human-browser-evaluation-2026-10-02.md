# ParameterPlotter Prototype 2 Human Browser Evaluation

Date: 2026-10-02
Latest evidence update: 2026-10-04
Status: **HUMAN-ACCEPTED / CLOSED — 19 HUMAN PASS / 0 PENDING / B3 NOT RUN**

This is the result authority for the current [implementation result](prototype-2-bounded-implementation-result-2026-10-02.md). Machine verification is supporting evidence, not Human acceptance. The 19 executable cases have Human PASS; B3 remains NOT RUN because no genuine Prototype 1 legacy session fixture exists. Human explicitly accepted and closed the bounded application-local Prototype 2 scope while accepting that B3 browser-evidence limitation. B3 is not PASS, and this record does not claim that every canonical case passed.

## Final Human acceptance and closure — 2026-10-04

Human explicitly accepted and closed the bounded, application-local Prototype 2
scope with canonical evaluation status **19 Human PASS / 0 PENDING / B3 NOT
RUN**. B3 remains NOT RUN because no genuine Prototype 1 legacy session fixture
exists. The missing legacy-session browser evidence is an acknowledged and
accepted limitation for this bounded closure; it is not compatibility Human
PASS, and no artificial legacy fixture was created. Do not imply that B3 passed or that every evaluation item received Human PASS.

The known Quadrant resize→scroll connector defect and waiting-Entity plot-click
discoverability remain separate follow-ups. Human accepted the bounded scope
without promoting either to a closure blocker; neither was changed here.
Portable Dimension/value semantics, Observation model, Dataset write-back or
export, Core/Extension/schema/Validator changes, production implementation or
architecture, product name and release identity remain unadopted and outside
this closure. No runtime or Dataset behavior changed.

## Pre-closure gate review: R4/U1 PASS - 2026-10-04

This section and the canonical result table supersede status summaries in
older dated snapshots; the historical evidence below remains intact.

**R1 PASS (Human):** Human confirmed missing MIN/MAX, equal and reversed
bounds are rejected; valid finite MIN<MAX saves; both endpoints are accepted;
out-of-range direct input is rejected while the last recorded value remains;
validation feedback was understandable.

**R3 PASS (Human):** Human confirmed No value/null, explicit recorded zero,
their distinction in Profile and Matrix, restoration to No value after Clear,
and retention of an unrelated recorded value.

The historical 15 PASS / 4 PENDING snapshot is superseded by the current R4/U1
and B1/B2 Human results recorded here and below. Earlier Human results,
supplements, partial B1 evidence and B3 NOT RUN remain preserved. The known
Quadrant resize/scroll connector defect
remains separate and unfixed; plot-click discoverability remains an
unimplemented follow-up candidate.

**R4 PASS (Human):** Human reconfirmed all five unlike ranges (`-10..-2`,
`5..25`, `-3..9`, `0.0001..0.0009`, and `1000000000..9000000000`) across
Profile, Matrix, Radar and Quadrant. Lower endpoint, arithmetic midpoint and
upper endpoint mapped to the expected range-relative positions; midpoint was
understood as the 50% position rather than zero. Tiny and huge values remained
inspectable.

**U1 PASS (Human):** Human reconfirmed short and near-240-character descriptive
units across all four views, including narrow presentation, recovery of the
full text through Dimension Edit, and the 240-character Prototype-local input
guard. Unit text remained descriptive metadata, not a parser or conversion
request.

Current totals: **19 Human PASS / 0 PENDING / B3 NOT RUN**. The 19 PASS results
are Human results; machine evidence remains supporting evidence only. B3 is
still NOT RUN, not PASS, and no artificial legacy fixture was created. The
canonical instruction below says any unrun case prevents a complete-scope
passed claim. The current authority does not say whether that rule also bars an
explicit bounded-scope acceptance with B3 documented as NOT RUN. Do not record
acceptance/closure until Human decides that boundary.

### Pre-closure B1 Matrix handle review and tooltip copy refinement - 2026-10-04

Human confirmed the Matrix reorder handles: resting treatment stays quiet; hover
identifies both grips without layout shift; keyboard focus is clear and stable;
native drag feedback is visible; first, middle and last insertion indicators
match the resulting order; the rightmost column causes no extra horizontal scroll
or clipping; successful drop, Escape and outside-drop leave no stale indicator or
unwanted reorder; and column Alt+Left/Right works. Earlier partial Human evidence
for row native drag, Alt+Up/Down and Name-line alignment remains in force.

The Human identified inconsistent hover tooltip copy. Runtime titles now use the
same sentence structure and identify the target plus keyboard command:

- Column: `Drag to reorder Matrix columns. Keyboard: Alt+Left/Right`
- Row: `Drag to reorder Matrix rows. Keyboard: Alt+Up/Down`

Only title copy changed. Accessible labels, role, keyboard commands, hit areas,
drag handlers and reorder semantics are unchanged. DOM inspection of the live
runtime confirmed both titles. This is supporting verification of the copy fix,
not a Human visual confirmation of the updated tooltip itself.

**B1 PASS (Human):** Human confirmed the previously reviewed Matrix handle
behavior and now reports "B1 Drawer OK, Touch unconfirmed." The Drawer review
included Tab/Shift+Tab containment, Close/Escape focus restoration, background
scroll lock, Drawer-internal scrolling, normal page scroll after close, and
narrow control usability. Touch is explicitly unconfirmed; it is not a required
B1 criterion in the canonical case definition. The Matrix title-only tooltip
copy fix is recorded separately below and validated after the change.

**B2 PASS (Human):** In the Apollo 11 Dataset workspace, Dataset Entities had
Dataset badges and Open Profile only; Dataset deletion was disabled and no
executable Dataset mutation action was available. A Temporary Entity Name and
Description edit retained its Temporary identity, did not duplicate it, and
preserved recorded value 0.45 in Profile and Matrix. Starting replacement
showed "Replace this workspace?" before mutation and explained loss of
Temporary Entities, Dimensions and values plus the absence of export/recovery.
Human chose "Keep current workspace"; the Dataset, Temporary Entity and 0.45
remained. Human found no Dataset write-back or export action and did not execute
"Replace workspace".

At this pre-closure snapshot, B1/B2, R4 and U1 results were Human evidence, not
machine inference, and the B3 gate question remained open. The final acceptance
and closure recorded above supersedes that status.

### Independent R4 U1 fixture and supporting evidence - 2026-10-03

New independent tab **532323284**, http://localhost:4179/. No existing Human
session or fixture was modified. Fixture contains three Temporary Entities:
R4 Lower endpoints, R4 Arithmetic midpoints, R4 Upper endpoints. Five
unconstrained Dimensions and their recorded values are:

| Dimension | Range | Lower Entity | Midpoint Entity | Upper Entity |
|---|---:|---:|---:|---:|
| Negative only | -10..-2 | -10 | -6 | -2 |
| Positive only | 5..25 | 5 | 15 | 25 |
| Asymmetric | -3..9 | -3 | 3 | 9 |
| Tiny range | 0.0001..0.0009 | 0.0001 | 0.0005 | 0.0009 |
| Huge range | 1000000000..9000000000 | 1000000000 | 5000000000 | 9000000000 |

Negative only has short unit kg; Tiny range has a descriptive free-text unit
near the 240-character local guard. Values and text stay application-local.

**Codex Computer Use supporting evidence, not Human PASS:** Matrix showed all
15 values with the rows and columns above. Input accessible descriptions and
record readouts retained entered tiny/huge endpoints/midpoints (browser native
number-control Value may expose float32 display detail for tiny/huge sliders;
visible Details and recorded text show the entered value). Matrix metadata
shows both units, including the long text. Earlier prototype evidence covers
unit Edit recovery and maxlength=240. Human must inspect all four views and
narrow behavior; this run does not assert axis position geometry from a
screenshot or statistical/display usability.

**Human minimum review (R4/U1 remain PENDING):**

1. Profile and Matrix: compare lower/midpoint/upper rows across the five ranges.
   Confirm midpoint is the 50% position for each range, not a value of zero;
   judge negative/positive/asymmetric/tiny/huge readability and identity.
2. Radar: select all five Dimensions and compare the three Entities. Quadrant:
   select Tiny range and Huge range, then compare each Entity axis position.
   Judge whether values and projections remain understandable.
3. Compare kg with Tiny range's descriptive unit in Profile, Matrix, Radar,
   Quadrant. Narrow the independent tab, inspect information hierarchy and
   overflow, then open Dimensions > Edit for Tiny range and recover the full
   unit. Confirm the input guard remains 240. Report R4 and U1 separately.

## Current Human results and R1 R3 continuation - 2026-10-03

This section and the canonical result table supersede current-status wording
in earlier dated snapshots, including the I6 preparation below.

**I6 PASS (Human):** Human explicitly confirmed fractional input rejection,
valid integer acceptance and valid-integer random for Fractional integer A;
No candidate B's unavailable reason was understandable, B stayed No value
under Fill blanks while other eligible fields filled. Quadrant no-candidate
placement failed with an understandable notice and retained Atomic control
2.75 unchanged. This is Human evidence, not a machine-derived PASS.

Current totals: **13 Human PASS / 6 PENDING / B3 NOT RUN**.
Remaining **R1, R3, R4, U1, B1, B2**. Preserve all earlier Human PASS,
supplement OK, partial B1 and B3 NOT RUN. Overall evaluation remains pending.
Known Quadrant resize/scroll connector defect remains unfixed/separate;
waiting plot-click discoverability remains an unimplemented follow-up candidate.

### Independent R1 R3 fixture and supporting evidence - 2026-10-03

New independent tab **532323280**, http://localhost:4179/. No existing Human
session or fixture was reset/reloaded/overwritten. Created through UI:

- Temporary Entity **R1 R3 fresh review**.
- **Endpoint review**, unconstrained -2..4, current recorded value **4**.
- **Zero review**, unconstrained -1..1, current **null / No value**.
- Drawer left open at **Human bounds trial**, Name/Low/High provided,
  MIN/MAX empty, unsaved. Human can perform missing/equal/reversed themselves.

**Codex Computer Use supporting evidence, not Human R1/R3 PASS:**
Missing endpoints prevented saving with the browser required-field notice
("please fill this field", displayed in Japanese). Equal 1/1 and reversed 2/1
both left the form unsaved with finite-decimal MIN/MAX and MIN-less-than-MAX
feedback. Valid -2/4 saved. Profile accepted -2 and 4 endpoints; input 4.5 was
rejected while the status and input accessible description retained recorded 4
(the invalid draft 4.5 was still visible until leaving the editor).
Zero review initially displayed No value; entering 0 showed Temporary value 0
and Stored value 0 in Profile and Matrix. Matrix Clear restored blank/No value;
returning to Profile confirmed No value. Endpoint review stayed 4 throughout
the zero/Clear checks. No other Entity existed in this isolated run, so this
is not an exhaustive cross-Entity isolation test. No defect observed.

**Human minimum procedure (R1/R3 stay PENDING):**

1. Open drawer is ready: Save with blank MIN/MAX; then MIN=1,MAX=1 and Save;
   then MIN=2,MAX=1 and Save. Read each refusal. Finally -2/4 and Save should
   succeed. Close drawer. Judge validation understandability.
2. Profile Endpoint review: enter -2 then 4 (Enter each), then 4.5.
   Check rejection/readout retaining recorded 4, not the rejected draft.
3. Zero review begins No value. Enter 0 then Enter; inspect Profile and Matrix.
   Clear Zero review and verify No value again, with Endpoint review still 4.
   Judge whether null/zero and retention are clear. Report R1 and R3 separately.

## Latest Human results and I6 continuation - 2026-10-03

This section and the canonical case result table supersede pending/count language
in earlier dated snapshots below. Historical observations and machine evidence
remain preserved; they are not current Human results.

**Explicit Human evidence from the current synchronization request:**

- I3 PASS: Radar Count and Measure keyboard/drag OK; Count remains integer,
  Measure decimal; Profile/Matrix records agree. Human confirmed the repaired
  drag-start outward jump and poor tracking no longer occur.
- I4 PASS: existing-point drag, waiting plot-click placement and waiting native
  drag placement OK; independent Count/Measure policies, in-range authoring and
  shared Profile/Matrix records confirmed. Waiting plot-click placement was not
  previously noticed: discoverability follow-up candidate only, not I4 FAIL or
  implementation authorization.
- I5 PASS: decimal records retained under integer-only violation, excluded from
  normal plots, and restored unchanged after the constraint is disabled.
- R2 PASS: outside-range records retained, excluded from normal plots, and
  restored unchanged after restoring the range.
- Status-message editor alignment supplement: **Human OK**, not an extra case
  PASS. Profile/Matrix input height/top stable, warnings naturally below,
  normal density and warning readability OK.

Totals: **12 Human PASS / 7 PENDING / B3 NOT RUN**. Preserve D1-D5, I1, I2,
M1 PASS, Random/ownership/Name-line supplement OK and partial B1 evidence.
Remaining: **I6, R1, R3, R4, U1, B1, B2**. Overall evaluation remains pending;
no acceptance/closure. Known Quadrant resize/scroll connector defect remains
separate and unfixed.

### Independent I6 fixture and supporting verification - 2026-10-03

New independent tab **532323276**, http://localhost:4179/, left in Profile.
Created through UI; no existing Human tab/session was reset, overwritten or
reloaded. No runtime, Dataset or specification change.

| Fixture | State at handoff | Responsibility |
|---|---|---|
| I6 candidate review | Temporary Entity | Independent review only |
| Fractional integer A | integer-only, -2.7..3.6, recorded 1 | Candidates -2,-1,0,1,2,3 |
| No candidate B | integer-only, 0.2..0.8, null | No integer candidate |
| Atomic control | decimals allowed, 0..10, recorded 2.75 | Retention/atomicity control |

**Codex Computer Use supporting evidence, not Human PASS:** A rejected 2.5,
retaining recorded 2, then accepted 3. Twelve random results were
2,2,1,0,1,3,2,-1,2,0,-2,-1; all valid integers. These samples do not prove
statistical uniformity. B random retained null and displayed unavailable/no-value-
changed notice. Clearing A then Fill blanks produced A=1, skipped B with notice,
and preserved control=2.75. Matrix displayed the same 1/null/2.75. Radar with all
three spokes displayed A=1 and control=2.75 vertices, B unassessed/no vertex.
Quadrant X=B / Y=control, waiting Entity selected, plot click failed with
"Values unchanged: a selected integer-only Dimension has no safely generated
integer candidate in range." Returning to Profile confirmed B=null and
control=2.75 unchanged. No defect observed in these operations.

**Human I6 minimum continuation (I6 remains PENDING):**

1. Profile: A input 2.5 then Enter (reject/old value retained), then 3 (accept).
   Use A random a few times; judge integer behavior with fractional endpoints.
2. B random: read why generation is unavailable. Clear A, then Fill blanks;
   A becomes a valid integer, B stays No value, control stays 2.75. Judge whether
   the notice and skipped blank are understandable.
3. Quadrant: X=No candidate B / Y=Atomic control are already prepared. Select
   waiting I6 candidate review if necessary, then click the plot. Read the
   unchanged notice; return to Profile/Matrix and confirm control=2.75 and B blank.
   Judge whether failure and retention are clear. Report I6 OK or the specific
   operation/notice that is unclear. Do not infer another case result.

## Current Human results and Quadrant visual review — 2026-10-03

### Status message editor alignment review — 2026-10-03

New independent tab **532323272** (Profile / Matrix). The earlier tab 532323268
was not available in the present browser connection; no preserved session was
changed. An equivalent fixture was created through UI: Editor alignment review,
Policy review `3.5` with integer-only ON, Range review `3.5` outside `4..10`,
Count control `4` normal. Only the new tab reloaded to load the visual correction.

Diagnosis from actual DOM measurements: input height was already **34px** in
all three states. Matrix cells had vertical-align:middle; the normal editor
was 5.90625px lower than warning editors. Profile's flexible metadata row,
optional policy node and bottom-aligned value-field displaced the normal
editor 26.375px upward compared with warning cards. No value mutation caused it.

Bounded fix: Matrix value cells align at top; Profile cards in the same visual
row share content-sized metadata tracks via CSS subgrid, with a consistently
present (possibly empty) policy slot and top-aligned value-field. Value-field
content starts at its top. No fixed warning-height reservation, warning-copy,
status role, input attributes, authoring handler or slider change.

Supporting browser evidence after fix: Matrix input tops all 527.390625px;
Profile input tops all 600.421875px. Heights remain 34px. Status text is below
each editor, with its natural content height. Turning the two warning causes
OFF / restoring range retained records `3.5 / 3.5 / 4` and left Profile input
tops at 600.421875px. Conditions were reinstated for Human visual comparison.
24/24 focused tests, repository validation, syntax/diff checks passed.
I5/R2 and all other Human status records remain unchanged/PENDING as applicable.
Known Quadrant connector issue remains separate/unfixed.

Humanの短い確認（tab **532323272**）:

1. Profileの3 cardでinput位置、warningの下配置、normal cardの密度を比較する。
2. Matrixへ切り替え、3 cellのinput高さ・上端・整列とwarningの読みやすさを確認する。
3. 気になるsurface・状態・viewport幅を報告する。今回の修正だけでI5/R2 PASSは記録しない。

### Independent I5 R2 retention fixture — 2026-10-03

Current Human review tab: **532323268**, http://localhost:4179/ (Matrix).
Created through Computer Use in a new tab; no preserved Human tab/session was
reloaded, reset, overwritten or reused. Only this independent tab was reloaded
for persistence checks. No runtime/semantic implementation changed.

| Fixture | Current state | Purpose |
|---|---|---|
| Retention sample (Temporary Entity) | Policy review `3.5`; Range review `3.5`; Count control `4` | Retained-record comparison |
| Null sample (Temporary Entity) | All three values null / No value | Missing versus invalid-record comparison |
| Policy review | `0..10`, integer-only ON | I5 violation; turn OFF to restore |
| Range review | `4..10`, integer-only OFF | R2 outside range; restore MIN `0` to recover |
| Count control | `0..10`, integer-only ON | Independent valid integer control |

The two review Dimensions were initially unconstrained `0..10`; both records
were explicitly entered as `3.5`. This fixture replaces the obsolete Review 13 /
Switch/Measure names for these two operations only, without changing criteria.
Range review is the unconstrained neighbor for I5; Count control stays constrained.

**Codex supporting evidence (not Human PASS):**

- Baseline: Retention sample had three Radar vertices/one primary polygon,
  and one Quadrant point (Policy review or Range review X / Count control Y).
- I5 integer ON: record `3.5` unchanged; Profile/Matrix explicitly said
  integer-only constraint violation. Radar had two valid vertices/no affected
  primary polygon. Quadrant had zero normal points and a named violation panel.
  Independent-tab reload retained `3.5` and the integer-only setting. OFF restored
  one point, three vertices and the polygon without value editing.
- R2 MIN `0→4`: record `3.5` unchanged; Profile/Matrix explicitly said outside
  range `4..10`. Radar had two vertices/no affected polygon; Quadrant zero points
  and outside-range reason. Independent reload retained the narrowed range and
  value. MIN `4→0` restored the same `3.5`, point/vertices/polygon.
- Following both restoration checks, Profile still read exactly `3.5 / 3.5 / 4`.
  Null sample remained blank with No value, not a violation or outside-range
  record. Final Human handoff re-enabled the two review conditions concurrently;
  Matrix displays violation and outside-range beside each other above null cells.
  Browser error console empty. No new defect was observed in these operations.

Humanの最小確認:

1. tab **532323268**のMatrixで、上段の「integer-only違反」「range外」と、下段の
   「No value」が読み分けられるか確認する。必要ならProfileでも同じ警告を見る。
2. Radarで通常位置からの除外が分かるか確認する。QuadrantはYをCount controlのまま、
   XをPolicy review／Range reviewへ切り替え、各除外理由を読む。
3. DimensionsでPolicy reviewのInteger values onlyをOFF、Range reviewのMINを`0`へ戻す。
   `3.5`を入力し直さずにplotへ戻ることが自然に理解できるか確認する。
4. I5／R2それぞれの表示・復帰についてOK／問題点を報告する。

I5/R2 remain **PENDING** until explicit Human results. Existing canonical status
is eight Human PASS / eleven PENDING / B3 NOT RUN; I3/I4 are also PENDING in
the present repository record, so no additional result is inferred from the
request's reference to existing I1–I4 results. Partial B1 and supplement OK remain.
The known Quadrant resize/scroll connector defect remains separate/unfixed.
Current focused tests: 24/24; repository validation PASS. Browser checks above
are supporting evidence; warning readability and restoration clarity remain Human.

### Radar I3 drag defect and recheck — 2026-10-03

**Human evidence:** Radar drag defect reproduced: grabbed vertex appears to
jump outward at drag start and follows poorly, particularly on large movement,
across spokes. Viewport change alone does not move vertices. Human confirmed
shared recorded values agree across views. **I3 remains PENDING**, not PASS
or a completed case FAIL. All existing results/supplements remain unchanged.

Diagnosis: rendered radius is 105 × rangePosition (0..1). Drag had erroneously
applied (clamp(projected)+1)/2 to that already-unit radial position, moving
0.5 to 0.75 and halving movement response. ScreenCTM inverse correctly handles
SVG coordinates; its use is unchanged. Fix clamps radial projection to 0..1
and sends it to the existing authoredValueAtPosition policy. No grab-offset,
keyboard, integer snap, value model or other-view geometry decision is added.
There is no paint/commit at pointerdown; first movement beyond the unchanged
5px threshold previously triggered the jump. Human's observed initiation
description is retained separately from this event-flow evidence.

Supporting browser evidence in independent tab **532323264**:
Count 0..10 integer-only, Measure -1.0..1.000 decimal, Third 10..20 decimal.
Before fix, Count=5 dragged about 19px outward became 8; after fix the same
movement became 6. Larger inward movement changed 6 to 1. Measure drag committed
0.3976271504513848; Count and Third retained 1/15. Click without drag preserved
all values. ArrowUp Count and ArrowRight Measure kept +1/+0.05, then Profile
and Matrix showed exactly the same 2 / 0.4476271504513848 / 15 records. Pointer
interpolation digits are not random noise and were not rounded by this fix.
Browser automation observes final outcomes; initiation feel and intermediate
tracking are still Human checks. Only this newly created Codex tab was reloaded
to load corrected code; preserved Human sessions were not reloaded/reset.

Machine evidence: **24/24 focused tests** (previous 21 plus 3 Radar regression
tests), covering inverse rendered-radius mapping for 3..10 spokes, radial
sensitivity/tangent movement/bounds and existing integer/decimal range policy.
Repository validation and syntax checks passed. Quadrant connector defect
remains separate/unfixed. Overall Human browser evaluation remains pending.

Humanの短い再確認（tab **532323264**）:

1. Count／Measureのvertexをgrabし、小さく・大きく内外へdragする。開始時jump、遅れ、飛びがないか確認する。
2. Countは整数、Measureはdecimalのままであること、Thirdなど他の値が変わらないことを確認する。
3. Profile／Matrixでもshared値を確認し、既存I3 criteria全体について結果を報告する。修正確認だけでI3 PASSとは記録しない。

**I2 PASS (Human).** Human explicitly reports Count `3.5` was rejected as an
integer-only violation with recorded `2` retained; Count `4` and Measure
`4.25` were accepted; the same shared values were confirmed in Profile.

**M1 PASS (Human).** Human explicitly reports lower-row Measure commits by
Enter and Tab produced no unexpected visible row, Matrix internal-scroll or
page-position jump, and recorded values were held accurately. Browser/version,
viewport and a nonzero page offset are not inferred from that report. Earlier
Codex coordinate measurements below remain separate supporting evidence.

Source: Human's explicit I2/M1 result in the present request. Current totals
are **eight Human PASS / eleven PENDING / one NOT RUN**. D1–D5/I1 PASS,
Random/ownership/Name-line supplement Human OK, partial B1 row native drag/
Alt+Up/Down and B3 NOT RUN are preserved. Remaining PENDING: **I3–I6, R1–R4,
U1, B1, B2**. Neither the new visual change nor machine checks pass those cases.
Prototype 2 overall remains Human browser evaluation pending, without closure.

The following preparation/supplement/quiet-refinement blocks retain their
earlier snapshot evidence and counts; words such as current/pending there
describe those snapshots. This section, the continuation table and canonical
case Result columns are the current evaluation status.

### Compact narrow Quadrant review — 2026-10-03

Latest Y alignment review: independent tab **532323260**. Wide Y High / name /
Low text is right-aligned toward the plot; wrapped name lines share that edge.
Narrow Y is at the plot-side edge of the existing 16px gutter, vertically
centered. Selector metadata remains left-aligned; X and footer rules unchanged.
Gaps remain 12px wide / 8px narrow; no geometry or interaction code change.
Supporting checks: 1270px canvas 971.8125×550px; 390px canvas 289×280px;
320px canvas 219×280px. Page widths 375/305px do not overflow narrow viewports.
Wide long Y name wraps to 50.90625px text height, text-align:right. At 390px,
footer action/count text bounds still coincide (738.34375..754.34375), with
12.3px font / 18.45px line-height and baseline alignment. Viewport reset and
preserved Human sessions untouched. Known connector defect remains separate,
unfixed. These checks do not change Human case statuses.

Human: tab **532323260**をwide／narrowで見て、Yのplot側への揃い、長い名前のwrap、
Xとのバランスとfooter非回帰を確認してください。visual acceptanceは未記録です。

Latest footer-only refinement: independent review tab **532323256**.
Action/count now use the same .82rem font and 1.5 line-height with CSS grid
baseline alignment. Previously they were 15px versus 11.7px and center-aligned.
At 390px their text rectangles both span y=738.34375..754.34375; at 320px both
span y=723.09375..739.09375. The button remains 34px high; the explanation
starts 12px below the first row and spans the full available width. Neither
text wraps in this one-point fixture; page widths 375/305px are below 390/320px.
Wide styling, compact X/Y and interaction code are unchanged. The known
resize/scroll connector defect below remains separate and uncorrected.
Temporary viewport override reset; existing Human tabs were preserved.
These measurements are supporting evidence, not Human visual PASS.

Human: tab **532323256**を390px／320px程度にして、操作と件数の文字位置、
説明文との段間、wrapと横overflowを確認してください。結果はまだPENDINGです。

Earlier compact-layout review tab: **532323252**, http://localhost:4179/.
Use **532323256** for the latest footer refinement.
At widths up to 720px, only X/Y remain around the canvas: Y is centered beside
the left edge, X centered below. Names/endpoints are hidden there; selector
metadata remains the detailed axis display. The footer groups the return
action and plotted count above a full-width explanation. Wide layout is
unchanged. The preceding external-annotation proposal remains current for
wide; its detailed narrow presentation is superseded by this compact version.

Supporting browser checks: 390px viewport gives 289×280px canvas, 16px Y gutter;
320px gives 219×280px canvas. Page widths 375px/305px respectively do not
overflow. Hidden annotation children compute display:none; accessibility
tree exposes X/Y and keeps selector metadata. Footer action/count share the
first row, explanation spans both columns on row two. Line-height is 1.5
with separate row spacing. Console errors: none. Viewport override reset;
preserved Human sessions were not reloaded/reset/overwritten. Tests: 21/21;
repository validation: PASS. These are supporting evidence, not Human PASS.

**Separate observed defect, not fixed:** after changing wide to 390px and
scrolling immediately, a point connector extended from the central point
toward selector metadata (width about 430px). Expected: connector ends at the
actual Entity label. Selecting the label recomputed it to 16px; recorded X=5
and decimal Y remained unchanged. Existing plot-labels.js captures point
centers for subsequent animation-frame connector sync; scroll can change
viewport coordinates between those measurements. This is a likely cause,
not a fully isolated diagnosis. No interaction code was changed. Human should
report whether ordinary resize/scroll reproduces it; no I4/U1 PASS is inferred.

Humanの短い再確認:

1. tab **532323252**をnarrowにして、Y左中央／X下中央、plot面積とlabel非干渉を確認する。
2. Return selected to waiting／件数の上段と、説明文の下段のwrap・行間を確認する。
3. 幅変更後のscrollでconnectorが不自然に伸びないか確認する。再現時は幅と操作順を報告する。

All existing Human results remain unchanged: eight PASS, eleven PENDING,
B3 NOT RUN, supplement Human OK and partial B1. Overall evaluation is pending.

### External axis annotation supplement — 2026-10-03

Current visual review is in independent tab **532323248**, http://localhost:4179/.
Selector metadata remains stacked. Y has a left gutter (High / horizontal,
wrapping name / Low); X has a lower band (Low / wrapping name / High).
Annotations are outside the canvas in normal grid flow. No axis/value semantics
or Human case results change. Wide/narrow readability, axis correspondence and
usable plot area remain Human evaluation, not machine PASS.

Supporting browser evidence: 1270px viewport plot 971.8125 × 550px; 390px
viewport plot 221 × 313.84375px, Y gutter 84px, separated from canvas by 8px.
The full long Y name wraps (118.78125px text height), transform:none; X band
starts 8px below canvas. No annotation nodes are inside canvas; page width
375px is below the 390px viewport. Central click produces integer X=5 and
in-range decimal Y. A narrow coordinate-drag attempt produced no changed
recorded value, so drag success is not claimed from that attempt. Existing
interaction code is unchanged. Console errors: none. Temporary viewport
override was reset; preserved Human tabs were not reloaded/reset/overwritten.
Focused tests: 21/21; repository npm run validate: PASS.

Humanの短い再確認:

1. 新しいtab **532323248**で、Y左／X下の軸名とLow／Highの対応を確認する。
2. wideとnarrowで、長いY名が横書きで読め、point／Entity labelを覆わないか確認する。
3. plot面積が比較・click／dragに十分か確認する。気になる場合はviewport幅と操作を報告する。

### Historical in-canvas axis hierarchy supplement (superseded) — awaiting Human visual review

Each selector now has its own stacked Range / Unit / Values details. Explicit
decimal hint is a separate Hint row, not an integer or direct-input constraint.
Canvas has only Dimension names and labeled Low/High endpoints: X name along
the bottom horizontal edge, X Low left / High right; Y name along the left
vertical edge, Y Low below / High above. Range/unit/policy detail stays beside
selectors. The old prose summary, lower-left Y/lower-right X names and outer
duplicated endpoints are removed. Full metadata remains in ordinary DOM text;
canvas names may ellipsize, with full name in the selector/accessibility tree.

実行する短い補足確認:

1. 新しい独立tab **532323244**（`http://localhost:4179/`、Quadrant）で、各selector
   直下のRange／Unit／Valuesと独立したHint行を読み分けられるか確認する。
2. canvas内でXの横方向・Yの縦方向、各Low／Highを直感的に読めるかを見る。
   long nameはselectorで全文を確認し、狭い表示でも情報が取り違えられないかを見る。
3. 旧上下の重複情報がなく、点とlabelの操作を文字が遮っていないかを見る。

This is a presentation supplement, not I4 or U1 PASS. The independent tab
has two Temporary Entities, Count `0..10` integer-only (unit items), and
Measure of comparison with a long Dimension name `-1.0..1.000` unconstrained
(descriptive unit). Supporting checks compared the same 1106.8125×550 plot
before/after and retained Waiting review's `5` / `0` midpoint at 50%/50%.
Click placement then point drag authored Axis review `7` / `-0.3` at 70%/65%,
with the other point unchanged. No preserved Human tab was reloaded or reset.
Responsive CSS is scoped to these axis controls; no shared browser viewport
override was applied. Narrow readability and overall visual acceptance remain
Human checks. Native waiting drag and other pending criteria are not passed.

The preceding in-canvas proposal and its tab are historical; use the external
annotation supplement above for current visual review. Next original case is **I3**, then I4 and the grouped continuation below.
The visual supplement may be reviewed first in the new tab. I2/M1 need no
routine re-execution. Original criteria below are retained unchanged.

## I2 / M1 ready-to-run fixture and supporting verification — 2026-10-03

Historical preparation snapshot; subsequent Human PASS is recorded above.
**At preparation, I2 and M1 remained PENDING; no Human result was inferred.**
Use the new independent Edge tab **532323240**, `http://localhost:4179/`,
currently in Matrix on the bottom row **I2 M1 13**. It has thirteen Temporary
Entities (I2 M1 01–13), no imported Dataset, and these two Dimensions:

| Dimension | Range | Integer-only | Initial recorded value on I2 M1 13 |
| --- | --- | --- | --- |
| Count | 0..10 | ON | 2 |
| Measure | 0..10 | OFF | 2.5 |

Both use Low/High labels; units are items/kg. Other twelve Entities remain
unassessed. I2 M1 13 is also the selected Profile Entity. This is an equivalent
independent lower-row fixture for the canonical Review 13 operations below,
not a replacement/reset of the preserved Human Review 13 or Dataset sessions.
No sessionStorage was injected or migrated; creation and authoring used UI.

### Humanが実行する最小手順

1. **I2:** 下部のI2 M1 13でCount `3.5`をEnter。拒否メッセージと
   **recorded value 2の保持**を確認（未確定inputに3.5が残っても、recorded
   readoutは2のまま）。続けてCount `4`、Measure `4.25`をEnterで受理させる。
   Profileで同じEntityのCount 4／Measure 4.25と独立policyを確認する。
   Matrixにsliderがなく、Profileにはsliderが残ることも見る。
2. **M1:** Matrixへ戻り下部行を表示。Measure `4.5`をEnter、次に`4.75`を
   Tabで確定。各回で行の見える位置・Matrix内部scroll・page位置が不意に
   跳ばず、recorded readoutが入力どおり更新されるか確認する。
   pageをscrollできるviewportなら、pageも非zero位置で試す。

現fixtureのviewportは1270×1307でpage scroll余地は0、Matrix内部はscroll可能です。
pageをscrollできない場合は「page非zero位置はviewport上不可」と結果へ添え、
未実施を成功と推定しないでください。browser全体のviewport overrideや既存
session変更は今回行っていません。ProfileからMatrixへ切り替えるnavigationと、
Matrixのvalue commitによる位置維持は別々に観察してください。

結果は `I2 PASS / M1 PASS` または個別FAILに、拒否時の旧値、Profileの共有値、
Enter/Tab各回のjump有無、browser/viewportを添えてください。FAILならcase・
手順・expected/actualを記録し、その先の操作を止めてください。Humanがcriteria
全体を確認した結果だけを記録します。未確認部分はpartial/PENDINGのままです。

### Codex supporting evidence (not Human PASS)

- Fresh Count `3.5` rejected with explicit integer-required/record-unchanged
  message and recorded `2` retained. The input draft remained `3.5`, while
  stored-value title/readout remained 2. Valid `4` and Measure `4.25` accepted;
  Profile of I2 M1 13 showed the same 4/4.25. Matrix had no sliders, Profile two.
- Measure Enter `4.5` and native sequential typing + Tab `4.75` each kept
  internal scrollTop **220**, row top **1183.390625px**, page Y **0** unchanged
  before/after commit. Recorded readouts changed exactly to 4.5/4.75.
  Matrix clientHeight 850 / scrollHeight 1070 made the lower-row test meaningful.
- The current natural viewport had page scroll maximum 0. Thus this run did
  **not** exercise a nonzero page offset. Earlier supporting evidence at Y12
  remains historical; it is not relabeled as a fresh run on this fixture.
- Console error capture was empty; no clear defect or unexpected mutation was
  reproduced in exercised paths. Readability and perceived stability remain
  Human judgments, and unexercised paths are not claimed verified.
- Only the newly created fixture's Codex-authored records were restored to
  baseline 2/2.5 for Human. It is handed off in Matrix with Count focused and
  internal scrollTop 220. Existing Human review tabs were not operated/reloaded.
  Runtime/test files are unchanged; existing 21/21 focused results are retained
  supporting evidence, not a new test run or a Human case result.

Original case criteria, D1–D5/I1 PASS, supplement Human OK, partial B1,
B3 NOT RUN and all thirteen PENDING cases are unchanged. No runtime correction,
Dataset/Core/Extension/schema/Validator change, commit, acceptance or closure.

## Random and identity review supplement — 2026-10-03

This supplement's Human OK and earlier status snapshot are retained; the
later I2/M1 Human results and current totals are at the top of this guide.
Machine evidence is **21/21 focused tests PASS** after the new
random-grid coverage. Earlier 20/20 results below are dated pre-refinement
snapshots, not the latest count. D1–D5/I1 Human PASS, B3 NOT RUN and all 13
PENDING cases remain unchanged. The supplement now has explicit Human OK
below; it is not a complete result for any of those pending case IDs.

**Human reconfirmation: OK / this supplement complete — 2026-10-03.**
Source: Human's explicit report in the current synchronization request,
not Codex tests, screenshots or browser observation. Human confirmed:

- Random: all valid inclusive-range integer candidates for integer-only,
  all authored-hint decimal-grid candidates, and the random-only 2-decimal
  grid for no-hint Dimensions.
- Arbitrary direct decimal input is not constrained by random scale; unsafe
  generation preserves the existing recorded value.
- Profile / Matrix Dataset / Temporary ownership presentation.
- Matrix row grip alignment to the primary Entity Name line.

No browser/version, viewport or exhaustive sampled sequence is inferred from
this report. Native drag cancellation/end cleanup, insertion indicators,
hover/focus/drag feedback, Drawer/touch, Dataset replacement and other case
requirements remain outside this supplement's Human OK. The existing partial
B1 row native drag/drop and Alt+Up/Down observations remain intact. This report
does not promote I2, M1, I3–I6, R1–R4, U1, B1 or B2. Prototype 2 overall remains
Human browser evaluation pending, without acceptance or closure.

Human's latest decision supersedes the 201-position no-hint random rule:
integer-only uses all inclusive-range integer candidates; unconstrained
Dimensions use the larger authored endpoint decimal-place count, or a
random-only 2-place fallback when neither endpoint has fractional digits.
All grid candidates must be reachable. Unsafe selection/representation is
unavailable without changing the record or silently changing resolution.
This fallback does not pad normal display or constrain direct entry. Authored
hint padding, meaningful digits, null/0 and retained violation/OOR are unchanged.

今回HumanがOKとした補足確認手順（完了記録。再実行要求ではありません）:

- Profileでhintなし `0..10` のrandomを試す。0.01 gridの値が出ることを見て、
  直接 `2.7531` を入力し、そのまま保持・表示されることを確認する。
- `-1.0..1.000` と `0.0001..0.0009` のrandom、integer-onlyのrandomを比較する。
  integer-onlyは独立して優先する。unsafe gridで既存値がある場合はrandomが
  生成不可を通知し、値を変えないことを見る。
- Profile/MatrixでDatasetとTemporaryの両badgeを確認する。Matrixのlong/duplicate
  nameとshort ID付き行で、quiet gripがmetadata全体ではなくName先頭行に揃い、
  所属が明瞭かを見る。通常・hover・focus・dragの見やすさは引き続きHuman判断。

Independent refinement tab **532323236** (`http://localhost:4179/`) contains
nine read-only Apollo Dataset Entities, two duplicate long-name Temporary
Entities and four Dimensions: No hint grid `0..10`, Three place grid
`-1.0..1.000`, integer-only Count `-2.7..3.6`, Unsafe grid
`100000000000000..100000000000001`. The first temporary row retains direct
`2.7531`, hinted random `0.972`, Count `1`, and direct unsafe-range record
`100000000000000.5`. It is separate from preserved Human review sessions.
These fixture values describe the earlier Codex preparation, not a fresh
inspection of Human's session or a reset instruction. Human's subsequent OK
is recorded above; no existing case result or Prototype closure is changed.

## Latest Human evidence and current continuation — 2026-10-03

The next evidence paragraphs and objective table preserve the earlier
pre-I2/M1 snapshot. Its PENDING descriptions are historical; I2/M1 are now
Human PASS as explicitly recorded above. The Japanese continuation table
below is updated to omit those completed operations.

Human explicitly reports two **partial B1 observations**: Matrix Entity rows
could be reordered by native drag & drop and by Alt+Up/Down. These establish
those operations' success, not B1 as a whole. The report supplies no
browser/version, viewport, exact first/middle/last sequence or explicit visual
result for quiet grips, native drag-source feedback, insertion boundaries,
cancel/end cleanup, column drag or Drawer behavior. Those results are not
inferred. Earlier inconclusive Codex native-drag attempts remain machine
evidence gaps; they are not retroactively converted into successful runs.

**D1–D5 and I1 remain Human PASS; B3 remains NOT RUN (no actual legacy session);
I2, M1, I3–I6, R1–R4, U1, B1 and B2 remain PENDING.** Current counts remain
six Human PASS / 13 PENDING / one NOT RUN. Prototype 2 overall remains Human
browser evaluation pending, without acceptance or closure.

### Current objective evidence (supporting only)

After the quiet-grip refinement, the five existing focused suites were
re-run: **20 of 20 automated tests passed** at that synchronization; the later refinement above
now has **21 of 21 automated tests passing**. Current source retains direct Matrix editors without
sliders or Entity selection buttons, independent Matrix row order, integer
policy, authored decimal hints and recorded-value retention. The visual
listeners only set/clear feedback classes. None of these files was changed
by this synchronization. The repository validation and document checks are
recorded in the implementation result.

Fresh mutable verification used an independent Edge tab **532323232** at
`http://localhost:4179/`, through normal UI and read-only DOM observation.
Apollo was imported read-only; Evidence 1–4 were added (13 Entities total).
This fixture has ten Dimensions: Count/Measure/Switch `0..10`, the five R4
ranges below, Fractional integers `-2.7..3.6` and No candidates `0.2..0.8`.
Count and the last two are integer-only; the others are unconstrained.
Original Human review tabs were not reloaded/reset/overwritten. Only this
independent tab was reloaded for retention verification. Browser sizing was
not overridden; final inspection observed viewport height 1259px. M1's
coordinates below describe that measured operation, not a universal layout.

| Case (Human remains PENDING) | Current objective evidence | Human remainder / explicit browser gap |
| --- | --- | --- |
| I2 | Fresh Matrix: Count `3.5` rejected with recorded `2` retained, `4` accepted; Measure `4.25`/`4.75` accepted. No Matrix slider. Row/column CSS refinement did not alter the editor/policy path. | Readable rejection/readouts and practical direct-editing feel. |
| M1 | Fresh lower-row Enter `4.25` and native typing + Tab `4.75`: internal scrollTop `235`, row top `1137.390625px`, page Y **12** all unchanged before/after each commit. This closes the earlier nonzero-page-offset machine gap. | Judge visible stability in Human's own viewport. Do not repeat solely to fill that former machine gap. |
| I3 | Fresh ArrowLeft: Count `4→3`, Measure `4.75→4.7`. Measure pointer drag then authored in-range decimal `7.81916040554171`; Count and the other records stayed unchanged. Earlier Count pointer/ArrowRight observations remain supporting evidence against unchanged handlers; central policy tests passed. | Vertex/key feel and value/label readability. Digit length from continuous pointer authoring is not assumed to be random interpolation noise or rounded. |
| I4 | Earlier browser point drag and waiting click authored independent integer/decimal axes. Current source and policy/range-position tests still match those paths; fresh Quadrant rendered the same shared records for five unlike ranges. | Waiting-Entity **native drag** remains unverified by Codex; judge point/label placement feel. This run did not repeat the earlier successful point drag. |
| I5 | Fresh Switch `3.5` remained after integer ON and isolated reload; eight-spoke Radar had seven valid vertices/no affected polygon, Quadrant had no normal point and an explicit violation panel. Integer OFF restored the same `3.5` to a point. | Warning recognizability and restoration clarity across views. No additional Human result inferred from this reload. |
| I6 | Fresh fractional-bound `0.5` rejected without assessment; random generated valid integer `3`. No-candidate random/Fill blanks left null with a notice and retained assessed neighbors. Failed waiting placement kept Neil Armstrong's Measure **2.75** and No candidates null, with an explicit values-unchanged message. Existing tests cover the whole candidate interval and unavailable/unsafe cases. | Understandability of the notices and practical fractional-bound input/placement behavior. |
| R1 | Current focused tests cover finite bounds, endpoints, outside rejection and decimal parsing; unchanged form still requires explicit MIN/MAX and MIN < MAX. Earlier browser missing/equal/reversed checks remain supporting evidence. Fresh creation of all ten fixture ranges succeeded. | Validation feedback readability; missing/equal/reversed and both endpoint browser operations were not all repeated in this run. |
| R2 | Fresh narrowing Switch to `4..10` kept `3.5`; Profile/Matrix showed outside-range status, Radar omitted its vertex and reported the state, Quadrant excluded the point and identified it. Bounds restored to `0..10` without rewriting the record; normal usability restored. | Clear distinction from null and integer violation, and readable warnings. |
| R3 | Fresh Neil Armstrong Count: Profile recorded explicit `0`; Matrix showed Temporary value 0; Clear changed it to No value while Measure stayed `2.75`. | Visible state distinction in ordinary use. |
| R4 | Fresh Profile and Matrix retained five midpoints: `-6`, `15`, `3`, `0.0005`, `5000000000`. Radar radii were approximately `52.5` for all five; Quadrant X position was `50%` independently for each. Existing model tests cover endpoints and extreme ranges. | Four-view label/value legibility and inspectability; every range's endpoints were not exhaustively entered in this browser run. |
| U1 | Fresh descriptive phrase (230 input characters, **229 stored after existing whitespace trim**) recovered intact in Edit; guard remained maxlength 240. Measure uses short unit `kg`. Source retains text metadata across views without parser/conversion. | Long/narrow presentation and full-text recovery usability. No browser-global narrow viewport override was applied to shared Human sessions. |
| B1 | Human partial: row native drag/drop and Alt+Up/Down worked; later supplement confirms Name-line alignment only. Fresh Codex checks: row Alt+Up/Down, column Alt+Left/Right, 30×32px/tabindex 0 grips and 3px keyboard outline. Entity Drawer focus wrapped, wheel left page Y 0 with overflow hidden; Dimension list scrolled **0→312** while page stayed 0. Escape restored opener focus; after close, normal wheel moved page Y **0→11** with overflow visible. Previous quiet-style hover/resting observations remain source-matched supporting evidence. | Quiet hover/focus/native-drag feedback, first/middle/last boundary/result matching, rightmost scrollbar behavior, Escape/outside-drop/end cleanup, touch/overall feel. Human row-operation/alignment success does not pass those details. |
| B2 | Fresh Dataset menu offered Open Profile and unavailable Dataset deletion, no Edit. Replacement warning/Keep current workspace retained 13 Entities/ten Dimensions and records. Temporary Description edit kept the same DOM-backed Entity ID and Count `3`/Measure `7.81916040554171`; source Name/Description handler is unchanged. | Warning/ownership clarity in the preserved Human Dataset session. Name editing has earlier browser evidence and unchanged code; it was not repeated here. |

No clear runtime defect or unexpected mutation was reproduced in the verified
paths; the captured error log was empty. This is not proof about unexercised
paths. Setup drafts were not considered commits until the recorded readout
was observed; the Drawer closing/inert phase was respected before authoring.
No meaningful value was automatically rounded or repaired.

### 次にHumanが確認する最小単位

客観的な動作は上表を参照し、以下の未確認部分を中心に操作してください。
元の評価基準は削除していません。case全体を判断できたときだけ、そのIDの
PASS/FAILを明示してください。部分観察は部分観察のまま記録できます。
Random/ownership badge/Name-line alignmentの補足はHuman OK済みです。
以下は既存criteriaへの入口であり、下部のcase正本を置き換えたり削ったりしません。

| 順 | Case | 短い確認操作 |
| --- | --- | --- |
| 1 | I3 | RadarのCount/Measureをdrag・左右キーで調整。integer/decimal、range内、他値不変をProfile/Matrixでも確認し、handle・値表示の操作感を見る。 |
| 2 | I4 | QuadrantをCount/Measureにし、既存pointをdrag、未評価の待機Entityをclick／native dragでplotへ置く。両軸の独立policy・range内と共有値をProfile/Matrixで確認し、labelと値の扱いを見る。新axis hierarchyのvisual supplementは別結果として報告する。 |
| 3 | I5 / R2 | Switch `3.5`を保持したままinteger ON/OFF、range `4..10→0..10`を試す。4 viewsの警告・除外・復帰が分かるか。reload保持はCodex supporting evidenceあり。 |
| 4 | I6 | Fractional integers／No candidatesで直接入力、random、Clear→Fill blanksを試す。前者は `-2..3` の整数、後者はnullと理由表示を維持。後者でplot placementを試し、既存の他軸値が残るか。random候補規則の補足OKだけでcase全体はPASSにしない。 |
| 5 | R1 / R3 | 新規DimensionのMIN/MAX空・同値・逆順→validのfeedback、endpoint受理／range外拒否・旧値保持を見る。Countの空→`0`→Clearを見分けられるか。 |
| 6 | R4 / U1 | 準備済み5 rangesの両endpoint／midpointを4 viewsで比較。小／大数と非zero midpoint、短いkg／240字guard近くの長いunitを狭い表示でも読み取り、Editで全文に戻れるか。 |
| 7 | B1（handle） | 行/列のhover・focus・drag feedbackを見て、先頭・中間・末尾のInsertion Indicatorと結果の一致、右端の不要な横scrollなし、drop後の消灯を確認。別dragをEscape／外へdropして順序不変・cleanup、column Alt+左右も見る。row操作成功・Name-line alignmentは確認済み。 |
| 8 | B1（Drawer）/ B2 | Entity／Dimension DrawerでTab・Shift+Tabのcontainment、閉じた後のfocus復帰、内部wheel／touch・背面lock・閉後の通常scrollを確認。Dataset actionsのread-only、Temporary Name/Description編集後のidentity・値保持、replacement Cancelでwork保持を見る。badgeは確認済みだが安全動作は別。既存workをReplaceしない。 |

D1–D5、I1、I2、M1は再実行不要です。B3はNOT RUNのままで、代替legacy fixtureは要求
しません。Codexはこの表を根拠にHuman PASSを付けません。残りの結果は
`I3 PASS`、`B1 partial: ...`などID付きで報告してください。

独立tabはProfile **Evidence 4**で継続可能です。Count `3`、Measure
`7.81916040554171`、Switch `3.5`、Fractional integers `3`、No candidates空。
5 rangesは上記midpointのまま、Radarは最初の8 Dimensionsを選択しています。
QuadrantはNo candidates/Measureの拒否確認状態なので、I4ではCount/Measureへ
切り替えてください。Matrixは最初の6列（Count/Measure等）、次のwindowに
Tiny/LargeとI6用Dimensionsがあります。DescriptionはIndependent current-evidence
fixture。Review 13や既存Decimal/Dataset sessionへコピー/resetしないでください。
元tabの未確定入力がある場合は先に処理し、旧runtime表示ならHumanの判断で
同じtabをreloadしてください。今回Codexは既存Human tabsをreloadしていません。

## Original prepared browser workspace — fixture history

The dedicated Edge review tab is open at `http://localhost:4179/`, showing Profile for **Review 13**. It was created independently of the existing Human tab and populated through normal UI actions. Keep this tab open: temporary data uses tab-local sessionStorage; reload retains it, closing its session can lose it. No Dataset was imported into this fixture.

There are 13 Temporary Entities, **Review 01** through **Review 13**, for internal Matrix scrolling. Review 01–12 start unassessed. Review 13 starts with:

| Dimension | MIN / MAX | Integer only | Recorded value | Unit |
| --- | --- | --- | --- | --- |
| Count | 0 / 10 | ON | 2 | items per reviewed Entity |
| Measure | 0 / 10 | OFF | 2.5 | kg |
| Switch | 0 / 10 | OFF | 3.5 | descriptive unit phrase for constraint review |

All three have Low / High endpoint labels. Radar selects Count, Measure, Switch; Quadrant selects Count / Measure. These choices are view-local; the recorded values are shared. If recreating the fixture, use Entities → Add temporary Entity and Dimensions → Add dimension, supplying Name, Low label, High label, MIN, MAX, optional Unit and the integer checkbox. Select Review 13 through Entity Pool.

Use the cases in order. Re-select Review 13 when needed. Record **PASS**, **FAIL**, or **NOT RUN** for each ID, with observed values and browser/viewport. **PENDING** means no explicit Human result has been supplied for the complete case; it does not assert that Human has never attempted it. Use NOT RUN only when Human reports that it was not run. Any pending, failed or unrun case prevents claiming that evaluation covered every criterion successfully. Stop on an unexpected mutation or review-blocking defect and report the case and reproduction steps; this preparation authorizes no runtime correction or acceptance recording.

## Current quiet Matrix reorder controls — 2026-10-03

Human selected the same quiet reorder affordance for Entity row and Dimension
column handles. Both now have transparent border/background at rest, matched
hover feedback, a 3px focus-visible outline, and pressed/native-drag feedback.
Both remain real focusable buttons with a minimum 30 × 32px hit area. Borders
remain present but transparent at rest, so showing feedback does not resize
the control. Reorder/session-order semantics, sliders, numeric editing and
insertion indicators are unchanged.

**B1 visual supplement (PENDING):** compare normal row/column grips in the
dense Matrix; hover each, Tab/Shift+Tab through both and observe focus; drag
each grip and check source feedback plus its existing insertion indicator,
including end/cancel cleanup. Judge visibility, visual consistency, usable
targets and readable headers/identities. Keep row/column keyboard and drag
requirements below. No Human result is inferred from computed CSS or tests.

Codex independently observed matching transparent resting styles, matching
hover color/border, 3px keyboard focus-visible outlines, 30 × 32px rectangles
and tabindex 0 for both. Row Alt+Down and column Alt+Right still reordered
independently. At that quiet-refinement snapshot, 20 of 20 automated tests
passed; the random-grid refinement later had 21 of 21 automated tests passing. Native drag
feedback/feel remains Human confirmation; supporting details and the new
independent tab are in the implementation result. Existing Human PASS,
B3 NOT RUN and all 13 PENDING statuses remain unchanged.

## Matrix row-order refinement — 2026-10-03

Entity names in Matrix are identity text; clicking one does not select an
Entity or intentionally redraw/scroll the Matrix. A separate row grip offers
native drag and **Alt+Up/Down** keyboard reorder, analogous to column grips'
Alt+Left/Right. Drag targets the row's top/bottom half and shows a horizontal
insertion boundary. This changes only the Matrix session presentation order;
Entity Pool and Profile/Radar/Quadrant navigation and Dataset order remain.
Matrix sliders remain absent. Direct numeric editing, Clear, retained-value
statuses and M1 remain applicable.

At that row-order snapshot, focused automated tests were **20 of 20 passed**, the previous 17 plus three
Matrix-row-order tests (insertion/nonmutation, stale/new/deleted IDs,
save/load and older-session no-migration). Run `node --test *.test.mjs` from
the prototype directory. Earlier 17/17 evidence below is a dated snapshot.
Browser evidence and the updated independent fixture are in the latest
implementation result. Native drag completion was not established by browser
automation; no Human PASS is inferred.

**B1 row-order supplement (PENDING):** move rows to first/middle/last using
the dedicated grip; confirm the horizontal boundary matches the final order,
Escape/outside-drop/dragend remove it without unwanted reorder, and no new
scrollbar comes from the indicator. Exercise Alt+Up/Down with focus following
the moved grip. Click visible Entity identity text and confirm no selection
or scroll jump. Confirm stored values remain on the same identities, local
order survives reload, and Entity Pool plus other-view navigation keep their
original order. Recheck column drag and Alt+Left/Right independently. These
checks are the Human-authorized Matrix refinement within B1; they do not
replace its existing Drawer or column checks or pass any other case.

D1–D5 and I1 remain Human PASS, B3 remains NOT RUN for fixture absence, and
the other 13 cases remain PENDING. No Prototype 2 acceptance/closure is
recorded. Preserved Human review sessions were not reset/reloaded by Codex;
Human can finish unsaved input and reload the same tab for current runtime,
or use the independent row-order fixture without sacrificing existing work.

## Matrix slider surface refinement and B3 decision — 2026-10-03

Human selected Matrix as the many-Entity/many-Dimension comparison and direct
numeric editing surface, with no value sliders. Profile retains its existing
sliders for detailed adjustment of one Entity. The Matrix slider's observed
failure to update the numeric display during drag is addressed by removing
that control, not by changing slider authoring. Numeric input, Clear, policy
rejection, retained-value warnings, column reorder and commit position
preservation remain. I2 below has been narrowed only by removing its Matrix
slider requirement; M1 and the other applicable criteria are unchanged.

Human reports no actual legacy user session exists and explicitly permits
**B3 NOT RUN** for that reason. This is not compatibility Human PASS. The
legacy `-1..+1` read-time compatibility path and existing automated coverage
remain unchanged. Current totals: **six Human PASS, 13 PENDING, one NOT RUN**.
Prototype 2 remains Human browser evaluation pending, without acceptance or
closure. D1–D5 and I1 Human PASS are unchanged.

Supporting browser evidence recorded below predates slider removal. Its
Matrix slider observations are historical, not current evaluation criteria.
For current review, use the revised I2 and unchanged M1. The independent
updated-runtime fixture is described in the implementation result; existing
Human review tabs were not reset, overwritten or reloaded by Codex. To use
the updated runtime in an already loaded tab, Human may finish any unsaved
input and reload that same tab when ready; preserve its session data.

## Prior Human evidence and continuation — 2026-10-03, before Matrix refinement

Human explicitly reported that **all I1 requirements were OK**: Count `2.5`
was rejected without changing the recorded value; Count `3` and Measure
`2.75` were accepted; both sliders worked as expected; per-field random
produced in-range integers for Count and could produce non-integers for
Measure; clear / Fill blanks followed the independent policies; no global
Random integers only option existed. **I1 is PASS (Human)** on that report,
not on Codex's verification. Browser/version and viewport were not supplied
with the Human result. D1–D5 Human PASS are unchanged. The other 14 cases
remain PENDING; Prototype 2 overall remains Human browser evaluation pending.

The earlier I1 readiness/refresh advice below is historical, superseded by
this subsequent complete Human report. It is not a current instruction to
reload or reset Review 13. This investigation did not reload, edit, replace
or consume the preserved Review 13, Decimal refinement or original Dataset
workspace. Their current recorded values are not inferred from the old
preparation snapshot.

### Codex supporting verification — 2026-10-03

The four existing focused suites were re-run: **17/17 PASS** (range-model 6,
profile-random 3, integer-policy 4, decimal-presentation 4). These are model
tests, not end-to-end browser tests. The repository validation gate and local
documentation checks are reported separately in the implementation result.
No new tests or runtime changes were made.

Browser verification used an **independent Edge tab** at
`http://localhost:4179/` (tab ID `532323215`), through normal UI actions and
read-only DOM inspection. It imported the existing Apollo 11 example and
added Probe 01–13: 22 Entities, initially three and finally five temporary
Dimensions. Normal viewport was 1270 × 1307 CSS pixels; browser version was
not collected. Count `0..10` is integer-only; Measure `0..10` unconstrained;
Switch was tested with constraint ON/OFF and range `4..10` / `0..10`.
Fractional integers `-2.7..3.6` and No candidates `0.2..0.8` are integer-only.
The original Human sessions were not used for mutable verification. Only
this independent fixture was reloaded for retention checks.

The table distinguishes observed browser behavior, model-test coverage and
source inspection. A row is not a complete Human result. Unexercised browser
paths remain explicit gaps rather than implied successes.

| Case (Human result stays PENDING) | Objective supporting evidence | Remaining Human confirmation / evidence gap |
| --- | --- | --- |
| I2 | Matrix Probe 13: Count `3.5` rejected while recorded `2` remained; `4` accepted; Measure `4.25` accepted. Count slider authored integer `5`; Measure slider authored decimal `4.35`, subsequently visible in Radar. | Error/readout legibility and practical editing/slider feel in the Human workspace. |
| M1 | At the lower Probe 13 row, Enter commit `4.25` and native typing followed by Tab commit `4.75` both retained Matrix `scrollTop=1752`, row top `1142.515625px`, and page X/Y `0`. Readouts confirmed the committed numbers. | Visible stability with Human's viewport and a **nonzero page scroll offset**. That offset was not exercised in this browser fixture. |
| I3 | Radar Count ArrowRight authored `5→6`; Measure ArrowRight authored `4.35→4.4`. Pointer drag of Count authored integer `7`, leaving Measure `4.75` and Switch `3.5` unchanged. Central policy/model tests cover candidate selection and decimal acceptance. | Radar drag/key feel and visible shared values; unconstrained **Measure pointer drag** and ArrowLeft were not exercised in this run. |
| I4 | Quadrant existing-point drag authored Count `3`, Measure `4`. Waiting-Entity click placement authored Count `4`, Measure `4.704545454545455`; both values appeared in Profile. No rounding was inferred merely from digit length. | Waiting-Entity **drag** path, point/label legibility and placement feel; decide whether continuous pointer-derived decimal display is readable. |
| I5 | Switch `3.5` survived integer ON and an isolated reload. Radar had two remaining vertices and no affected primary polygon. Quadrant Switch/Measure had no normal point and explicitly identified the constraint violation. Integer OFF restored the same `3.5` to a normal point. | Recognizability of retained-violation warnings across all four views, and usable restoration without confusion. |
| I6 | Fractional-bound integer random generated `-2`, a valid candidate. No-candidate random left null and explained unavailability; slider unavailable. Fill blanks left it null while filling an eligible neighbor and preserving assessed values. Failed Quadrant placement kept both axes unchanged. Existing tests cover candidates `-2..3`, unavailable ranges and unsafe-integer guards. | Notice clarity and fractional-bound direct-entry usability; not an exhaustive random distribution test. |
| R1 | New form MIN/MAX were empty and required; Save with other required fields present focused invalid MIN (`valueMissing=true`). Equal `5..5` and reversed `5..4` produced MIN < MAX error. Count endpoint `10` accepted; `11` rejected while `10` remained. Model tests cover both endpoints, finite values and rejection. | Error clarity, especially missing/equal/reversed bounds; lower endpoint has model coverage and explicit zero browser evidence, not a separate negative-endpoint browser run here. |
| R2 | Narrowing Switch to `4..10` retained `3.5`: Matrix status and Quadrant outside-range panel identified it; no normal Quadrant point. Restoring `0..10` restored a point with the same `3.5`. Model tests cover range-derived exclusion without mutation. | Warning recognizability in Profile/Radar as well as Matrix/Quadrant; no four-view exhaustive visual pass was performed here. |
| R3 | Fresh Neil Armstrong Count entered `0` showed Temporary value 0; explicit Clear restored No value. Neither state was inferred from the slider's unassessed placeholder. | Visible null/zero distinction in Matrix as well as Profile. |
| R4 | Range-model tests passed negative-only, positive-only, asymmetric, tiny and huge ranges, including endpoint/midpoint Derived positions and overflow-resistant extremes. Decimal tests preserve meaningful input digits. | **Actual four-view visual comparison** of the listed five unlike ranges, including small/large labels and nonzero midpoint. This run did not build a five-range visual fixture. |
| U1 | A 57-character descriptive unit was retained and recoverable in Edit, also present in Profile and Matrix metadata; unit input DOM `maxlength=240`. Source treats it as text metadata, not parsing/conversion. | Near-240-character phrase and narrow viewport, all-view readability and full-text recovery. No claim of visual usability from maxlength alone. |
| B1 | Drawer Shift+Tab wrapped from Close to its last control; Tab returned to Close. Escape closed it, restored focus to Entities and removed the scroll-lock class. Matrix Alt+Right moved Count after Measure. After a native drag attempt and Escape the insertion element was hidden. Matrix width stayed 1129px/client 1129px. Source uses fixed indicator and dragend/drop/Escape cleanup. | **First/middle/last successful native drag drops**, actual rightmost visible indicator geometry, drag cancellation, Alt+Left, wheel/touch background lock and restored scrolling. Automation did not establish a completed HTML5 drop (order unchanged); this is an evidence gap, not a reproduced defect. |
| B2 | Apollo Dataset Entity menu had no Edit; Dataset deletion was unavailable. Probe 13 Name/Description edit retained Count `3`, Measure `4`, Switch `3.5`. Replacement warning was shown; Keep current workspace retained 22 Entities/five Dimensions and observed records. Apollo file SHA-256 before/after was identical. | Confirm this boundary and warning are understandable in the **preserved Human Dataset session**, without replacing its Dataset. No export/write-back exists by source inspection. |
| B3 | Existing tests load a legacy Dimension lacking bounds/policy without changing serialized data and interpret only that compatibility path as `-1..+1`; new browser form has no range default. | **Genuine existing P1 session missing explicit ranges** was not available in the independent fixture. Human must identify one, or explicitly report NOT RUN / decide how to handle the fixture gap. Tests are not Human PASS. |

No clear runtime defect or unexpected record mutation was reproduced in the
verified paths. This is not a claim that untested paths are defect-free.
Captured error logs in the isolated tab were empty. An automation fill/blur
attempt did not establish a commit; native typing + Tab was then used and
the stored readout verified. The result above uses that confirmed operation.
The Matrix insertion element always exists in the DOM; cleanup was assessed
from its visibility class, not mere element presence.

The independent tab remains available for continued review, at Profile for
**Probe 13 edited**, Description “Independent temporary identity review”,
Count `3`, Measure `4`, Switch `3.5`, remaining two fields null. Switch is
unconstrained with restored `0..10`; Quadrant selects Switch / Measure.
Neil Armstrong has separate local values from the failed-placement and
Fill blanks checks. This is optional supporting material, not a replacement
for Human's Review 13 or Dataset tab. Do not copy it over those sessions.

### Remaining Human review — updated for Matrix refinement

Human can review the objective evidence above and concentrate interaction on
these groups, then explicitly report results for each covered case ID. The
original expected outcomes below remain unchanged; grouping does not waive
any acceptance criterion or pass a case by implication.

1. **Matrix (I2, M1):** lower-row direct numeric Enter and blur, readable
   rejection and independent policies; use a smaller viewport/nonzero page offset to judge visible
   stability not exercised here.
2. **Projection gestures and retained-value warnings (I3–I6, R2, R3):**
   Measure Radar drag/ArrowLeft, Quadrant waiting drag, warning/restore
   readability in all views, no-candidate notice and null versus zero.
3. **Range/unit presentation (R1, R4, U1):** review validation feedback;
   compare the listed unlike ranges visually; use a long unit phrase near
   the guard and a narrow window. These visual cases are not replaced by
   model tests.
4. **Accepted interaction regression and Dataset session (B1, B2):** real
   first/middle/last Matrix drops and Escape, rightmost scroll behavior,
   Drawer wheel/touch lock and restoration; check the preserved Dataset
   workspace boundary/cancel warning without sacrificing data.
5. **Legacy fixture (B3):** no browser action is required. Human has reported
   fixture absence and authorized NOT RUN; compatibility coverage remains.
   This does not constitute compatibility Human PASS.

There is no need to repeat D1–D5 or I1 merely to advance this handoff. Do not
automatically reload the Human tabs. Report full-case PASS/FAIL or partial
observations with browser/viewport; all unreported case results stay PENDING.

## Historical evidence and continuation — after Decimal refinement, before I1 report

Current machine verification: **17/17 focused tests PASS**, comprising
range-model (6), profile-random (3), integer-policy (4), and
decimal-presentation (4). Re-run command from this prototype directory:
`node --test range-model.test.mjs profile-random.test.mjs integer-policy.test.mjs decimal-presentation.test.mjs`.
`npm.cmd run validate` at repository root passed. Node's existing module-type
warning does not fail these tests. This evidence does not decide Human cases.

Human subsequently explicitly reported **D1 PASS, D2 PASS, D3 PASS, D4 PASS,
D5 PASS** in the request to record Decimal refinement results. These are
Human Browser Evaluation results, separate from the machine evidence above.
D5 includes visual confirmation that fractional input `0.5` in an integer-only
Dimension was rejected and the existing recorded value was unchanged.
Browser/version and viewport were not supplied with this report and are not
inferred from earlier automated runs. The earlier decimal-tail observation
remains historical defect evidence; D1–D5 record its subsequent Human review.
The initial integer-random observation and D5 do not establish the whole I1
case. I1–I6, M1, R1–R4, U1 and B1–B3 have no explicit complete Human result
and remain PENDING (15 cases).

Continue with **I1** in the existing **Review 13** tab, then I2/M1, I3–I6 and
the existing range/unit/boundary cases. D1–D5 need no automatic rerun; retain
the **Decimal refinement** tab and its Human work. Both tabs remain at
`http://localhost:4179/` and were checked read-only, without reload, input,
selection changes or fixture reset during this synchronization. Current live
values can differ from the initial fixture below; do not overwrite Human's
work to recreate that snapshot. The Decimal tab currently shows one Entity
and five Dimensions; the original review tab shows Review 13 and three
Dimensions. The original Dataset tab also remains open and was not operated.

At this result-recording handoff, Review 13 still displays Count `2`
(integer-only), Measure `2.5` and Switch `3.5` (unconstrained). Decimal
refinement now displays a 3-place hint on the Dimension named No hint and
integer-only OFF on the Dimension named Integer, reflecting the current
evaluation workspace rather than the initial fixture policy. Those states
were left intact. Read the actual policy metadata, not the historical name;
these live states neither contradict the reported tests nor supply a new
Human result by themselves.

The earlier synchronization did not establish the original tab's loaded
revision. The subsequent I1 readiness inspection below confirmed the old
pre-refinement form help remains loaded. A same-tab Human reload is required
before current-runtime I1; no new tab, Dataset replacement or automatic
migration is required. D4/I5 reloads remain explicit evaluation operations
for Human, not actions performed by Codex.

### Historical I1 readiness inspection — superseded by the complete Human report

Codex observed Review 13 Profile at `http://localhost:4179/` with 13 Entities
and three Dimensions. Count is integer-only, range `0..10`, stored value `2`,
with slider `step=1`; Measure is unconstrained, range `0..10`, stored `2.5`,
with slider `step=any`. Switch remains `3.5`. Numeric fields had no invalid
state or differing draft visible. Both field dice, individual clear buttons,
sliders and Fill blanks are present; the global Random integers only option
is absent. These are readiness observations, not I1 Human PASS.

Opening Dimensions → Edit Count without changing any field showed the old
range help, which omits the current repository's explicit fractional-digit
hint explanation and 100-place technical guard. Thus the loaded tab is still
pre-Decimal-refinement, even though its integer controls look correct. Edit
was canceled without Save; the drawer was closed and Profile restored. No
value authoring, random, clear, reload, reset or Dataset operation occurred.

Before evaluating I1 against the current runtime, Human should finish/record
any subsequently entered unsaved input and reload **this same Review 13 tab**.
Keep the tab/session, rather than replacing it. Verify Review 13, Count `2`,
Measure `2.5`, Switch `3.5` and the policies are retained; if different from
the last observed state, report the difference rather than resetting it.
To check the current runtime without altering Dimension data, open Edit Count
and confirm the range help now mentions explicit fractional digits/trailing
zeros and the local generation/padding guard, then Cancel and Close.

Then perform I1 in order: Count `2.5` must reject while its stored value stays
`2`; Count `3` accepts; Measure `2.75` accepts. Operate each slider and dice
independently, checking in-range integers for Count and decimal-capable
Measure. Explicitly clear only Count and Measure, then Fill blanks: both
follow their own policies, and assessed Switch stays unchanged. Do not clear
the whole workspace. Record the observed values and complete I1 PASS/FAIL
explicitly. Until that report, **I1 remains PENDING**; D1–D5 Human PASS and
all other pending case results are unchanged.

Report case IDs and complete observations, for example `D1 PASS`, or
`D4 FAIL — expected retained value ..., actual ...`, including steps and
browser/viewport. Partial observations can be reported without assigning a
whole-case result. Prototype 2 remains **Human browser evaluation pending**;
acceptance and closure require a separate explicit Human decision.

## Primary evaluation

### Decimal-random refinement re-evaluation

Human has explicitly passed D1–D5 after the refinement, including independent
integer-only enforcement and unchanged records on rejected `0.5` input.
I1 has subsequently passed; the full evaluation remains pending. The earlier unconstrained tail is
historical defect evidence. This refinement has a separate Edge tab at the same
local URL, with Temporary Entity **Decimal refinement** and five Dimensions:
Two places (`-1.00..1.00`), Three places (`-1.0..1.000`), Tiny
(`0.0001..0.0009`), No hint (`-1..1`), and Integer (`-1.00..1.00`, integer ON).
The existing Human evaluation tab was left untouched. Reload that tab only
after finishing any unsaved input when you want the updated runtime there.

| ID | Operation and required observation | Result |
| --- | --- | --- |
| D1 | Randomize Two places repeatedly: values use the 2-place decimal grid and ordinary display includes trailing zeros when needed. Edit restores `-1.00` / `1.00`. | PASS (Human) |
| D2 | Randomize Three places and Tiny: 3 and 4 places respectively; tiny values are not collapsed to 2-place zero. | PASS (Human) |
| D3 | Randomize No hint repeatedly: decimal values still possible; no integer/precision-zero policy inferred; no binary interpolation tails. Confirm meaningful direct `0.123456789` remains unchanged. | PASS (Human) |
| D4 | In Two places enter `0.123456789`, alter endpoint text to a 3-place hint, reload and inspect all four views. The original value must stay intact, not rounded/rejected. Legacy recorded tails are also not automatically repaired. Random then replaces only that explicitly requested record with a new hinted candidate. | PASS (Human) |
| D5 | Randomize Integer and reject a direct fractional commit. Hint must not weaken integer-only. Toggle integer OFF: hinted decimal random becomes available independently of neighboring Dimensions. Recheck original I1 after these cases. | PASS (Human) |

The hint controls random candidates and display padding only; it does not
constrain arbitrary direct decimal input or define a general precision/step
contract. Extra recorded digits stay visible. Generated interpolation avoids
binary arithmetic tails without guessing which digits of an existing record
were noise. Details and technical guards are in the implementation result.

### Original ordered cases (current Human results)

| ID | Human operation | PASS evidence required | Result |
| --- | --- | --- | --- |
| I1 | In Profile, submit Count `2.5` with Enter, then valid `3`. Submit Measure `2.75`. Move each slider. Randomize each field several times; clear both and use Fill blanks. | Count rejects fractional direct input without changing its previous record; every generated/slider Count value is an in-range integer. Measure accepts decimals and can generate decimals independently. No global Random integers only option exists. Random may occasionally generate an integer for Measure; that alone is not failure. | PASS (Human) |
| I2 | Open Matrix and scroll its internal body to Review 13. Submit Count `3.5`, then `4`; submit Measure `4.25`. Inspect the shared records in Profile. | Fractional Count rejected without changing its recorded value; valid Count and decimal Measure accepted, reflected in Profile. Other Dimension policy is unaffected. Matrix has direct numeric editors and no value sliders; Profile retains its sliders. | PASS (Human) |
| M1 | On the lower Review 13 row, place the page at a nonzero scroll offset if the viewport permits. Commit Measure `4.5` with Enter. Repeat with `4.75` by Tab/leaving the input. | The same edited row stays at the same visible location; Matrix internal scroll and page position do not jump to the top. The committed record changes exactly as entered. Check both Enter and valid blur. | PASS (Human) |
| I3 | In Radar, focus assessed Count vertex and press ArrowRight/Left, then drag it. Repeat on Measure. Inspect records in Profile/Matrix after each gesture. | Count authoring commits integers within range; Measure remains unconstrained and can commit decimals. All views share the resulting records; Derived positions do not alter unrelated values. | PASS (Human) |
| I4 | In Quadrant Count / Measure, drag Review 13's point. Select an unassessed waiting Entity and click/drag it onto the plot. Inspect both Entities in Profile/Matrix. | Each new Count is integer, Measure can be decimal, both remain within their ranges. Placement and point drag follow the two independent policies. | PASS (Human) |
| I5 | Use the independent fixture above: Policy review is the former Switch role, Range review the unconstrained neighbor, Count control the integer neighbor. Inspect Policy review `3.5` with integer ON in all four views (Quadrant X Policy review / Y Count control); turn OFF without editing its value. Reload retention has separate Codex evidence. | `3.5` is retained exactly, shown as a constraint violation, never silently rounded/deleted. Radar has no normal Policy review vertex/affected polygon; Quadrant excludes the violating Entity from normal placement and identifies it. Reload retains record and constraint. Disabling the constraint restores original `3.5` to usable plot positions. Count control stays constrained and Range review stays unconstrained throughout. | PASS (Human) |
| I6 | Add an integer Dimension with bounds `-2.7..3.6`, then one with `0.2..0.8` (provide unique names and endpoint labels). Test direct entry, random and Fill blanks. Use the no-candidate Dimension as one Quadrant axis with Measure; attempt waiting placement. | First generates only integers `-2..3`. Second can hold null but cannot generate a valid integer; a notice explains the unavailable candidate. Invalid authoring leaves existing records unchanged; failed Quadrant placement does not partially change the other axis. No auto-repair occurs. | PASS (Human) |

## Existing Prototype 2 scope

| ID | Human operation | PASS evidence required | Result |
| --- | --- | --- | --- |
| R1 | Add Dimensions with missing, equal or reversed bounds, then valid bounds. Try endpoints and outside direct values. | New bounds have no default; finite MIN < MAX required. Endpoints accepted subject to integer policy; outside values rejected with the previous record unchanged. | PASS (Human) |
| R2 | Use independent Range review (unconstrained, recorded `3.5`, currently `4..10`). Inspect all four views (Quadrant X Range review / Y Count control); restore MIN `0` without editing its record. | Original `3.5` retained with outside-range warning, excluded from normal Radar/Quadrant positions. Restoring the range makes the same record usable; no clamp/extrapolation/repair. | PASS (Human) |
| R3 | On a fresh Entity, leave Count blank, enter explicit `0`, then clear it. | Unassessed/null and assessed zero have visibly distinct states; zero is valid when policy/range permits. | PASS (Human) |
| R4 | Add unconstrained ranges `-10..-2`, `5..25`, `-3..9`, `0.0001..0.0009`, `1000000000..9000000000`. Use ordinary decimal notation for input. Compare endpoints and arithmetic midpoints in Profile/Matrix and selected Radar/Quadrant axes. | Recorded numbers retained across views; endpoints and midpoint produce the corresponding Derived positions independently per range. A plot midpoint is not assumed to be zero. Very small/large display remains inspectable. | PASS (Human) |
| U1 | Inspect prepared short and descriptive units on all views, open Dimension edit for full text; try a long phrase near the 240-character guard and a narrow browser window. | Full unit is recoverable, compact presentation usable; text is not treated as a parser or conversion request. The input guard remains Prototype-local. Note any clipping/legibility failure. | PASS (Human) |
| B1 | Human PASS: Matrix handle review plus Drawer Tab/Shift+Tab containment, Close/Escape focus restoration, background scroll lock, Drawer internal scroll, normal scroll restoration and narrow controls. Touch unconfirmed and not required by the canonical case. Tooltip copy fix is validated separately. | Full canonical B1 criteria confirmed by Human. | PASS (Human) |
| B2 | Human PASS: Apollo 11 Dataset Entities had no executable mutation action; Temporary Entity Name/Description edit retained identity and recorded 0.45 in Profile/Matrix; replacement warning appeared before mutation; Keep current workspace retained Dataset, Temporary Entity and value; no write-back/export was available; Replace workspace was not executed. | All canonical B2 boundaries confirmed in the preserved Human Dataset workspace. | PASS (Human) |
| B3 | Human reports no actual legacy P1 user-session fixture exists, so this browser case is not executed. | NOT RUN is fixture absence, not compatibility Human PASS. Existing legacy `-1..+1` code and automated coverage remain; no new-Dimension default or migration is introduced. | NOT RUN (Human: no legacy session fixture) |

Unconstrained Radar keyboard editing currently uses an absolute `0.05` gesture, so very narrow ranges can require direct entry or pointer drag. Integer gestures use candidate selection; this does not adopt a general step/rounding contract. Safe-integer guards can make generated candidates unavailable at extreme magnitudes. These limitations belong in observations, not hidden acceptance exceptions. Radar's 10-spoke cap remains provisional.

## Result handoff and boundaries

Canonical status is **19 Human PASS / 0 PENDING / B3 NOT RUN**. Human accepted
and closed the bounded scope while explicitly accepting B3's legacy-session
browser-evidence gap. B3 remains NOT RUN and is not Human PASS. Review 13 initial
values remain fixture history, not a reset instruction. Codex supporting
evidence does not substitute for Human results; the accepted gap does not turn
machine compatibility coverage into Human evidence.

Only application-local/session-local Dimensions, constraints and values are evaluated. No portable precision, step, rounding, Observation, Dimension/value contract, normalization contract, unit conversion, provenance, production architecture or release identity is adopted. Scientific notation input, formulas and nonlinear mappings are not implemented. The former Profile-global random integer option is historical/superseded evidence and must not be evaluated as current behavior.

## Historical initial preparation evidence — before Decimal refinement

The review tab visibly contains 13 Entities, three independent Dimensions and the stated Review 13 records. Radar and Quadrant selections were made through UI. The tab's captured warning/error console is empty. This readiness observation assigns no Human PASS to the cases above. Focused model/random/integer tests passed (13/13); `npm.cmd run validate` and `git diff --check` passed. Local documentation link targets were checked. Node reports the existing module-type warning; it does not fail the tests. No runtime file, Dataset or schema was changed during this preparation.
