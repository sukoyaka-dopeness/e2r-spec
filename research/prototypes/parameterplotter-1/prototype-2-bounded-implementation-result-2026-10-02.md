# ParameterPlotter Prototype 2 bounded implementation result

Date: 2026-10-02

Status: **HUMAN-ACCEPTED / CLOSED — BOUNDED APPLICATION-LOCAL PROTOTYPE 2 / 19 HUMAN PASS / 0 PENDING / B3 NOT RUN**

## Scope and current decision boundary

The Prototype 2 runtime implements the Human-approved comparison workspace
using the same tab-local temporary Entity–Dimension values across Profile,
Radar, Quadrant, and Matrix. It adds per-Dimension MIN/MAX and an optional
free-text unit to temporary Dimensions. This records no portable
Dimension/value contract or Observation model and does not change Dataset,
Core, Extension, schema, Validator, or production ownership.

New Dimensions require finite decimal MIN and MAX values with MIN < MAX; no
default is supplied. Existing Dimensions without explicit bounds use
`-1..+1` only as a read-time Prototype 1 compatibility path. Session loading
does not write those bounds back into a legacy Dimension. Unit text is
optional and descriptive phrases are allowed. The current 240-character input
limit is a technical safeguard local to this prototype, not a portable rule.
No unit parsing, conversion, normalization, or dimensional analysis is done.

For unconstrained Dimensions, direct numeric value entry accepts both endpoints
and any accepted finite decimal within the Dimension range; integer-only
Dimensions additionally require an integer as described below. Outside values are rejected without
clamping or changing the recorded value. When a later range edit makes an
existing value fall outside the new range, the raw session value remains
unchanged. Profile and Matrix identify it directly; Radar identifies it in
the selected-Dimension list and omits its vertex and polygon; Quadrant lists
it as outside the selected axes and gives it no normal plot position. It is
not offered as a waiting Entity for placement on those axes until the
out-of-range value is addressed.

Each projection derives its position from the Dimension range. Profile and
Matrix continue to display and edit the recorded number. Radar maps the
inclusive range to the spoke radius; Quadrant maps each axis range to its
visual extent. Quadrant's visual midpoint is the arithmetic range midpoint,
not a claim that zero is neutral. Missing/null and explicit zero remain
separate. Numeric formatting uses the JavaScript number string for this
prototype so very small and large values can be inspected; it does not select
a portable precision or input-notation policy. Scientific notation is not
accepted as input in this experiment.

## Verification evidence

Focused Node tests cover legacy fallback without record mutation, endpoint and
midpoint mapping for negative-only, positive-only, asymmetric, very small,
and very large finite ranges, value rejection/clear/zero behavior, finite
decimal input validation, and unrounded local display. Browser verification
used a new, isolated local Edge tab with temporary test Entities and no
imported Dataset. It confirmed required new bounds, MIN < MAX rejection,
range/unit save and edit, in-range value entry, rejected outside input with
the stored value unchanged, preservation and explicit warning after shrinking
a range, tiny and large decimal ranges, null versus explicit zero, shared
values and metadata in Matrix, Radar positions at range endpoints, and
Quadrant endpoint and midpoint placement derived from selected ranges.

`node --check` passed for the edited runtime modules. `node --test
range-model.test.mjs` passed. The repository validation gate and diff review
are recorded in Session 0102. Human browser evaluation remains necessary for
visual legibility, especially full unit phrases, scientific-notation display
of extreme JS numbers, and out-of-range summaries across view sizes.

## Current Dimension-local integer constraint — 2026-10-02

Human subsequently moved integer responsibility from the Profile-wide random
option to each temporary Dimension. Add/Edit Dimension now has **Integer
values only (this temporary Dimension)**, stored as application-local
`integerOnly: true/false` in the existing tab-session workspace. An absent
property is interpreted as unconstrained without migration writes. This
supersedes the earlier random-only option below; the global checkbox is removed.
At this 2026-10-02 snapshot, implementation was complete and Human browser
evaluation remained pending. No acceptance or closure had been recorded then.

All new non-null commits pass the shared range and integer constraint check.
Profile and Matrix reject fractional direct entry for a constrained Dimension;
unconstrained Dimensions still accept decimals. Random generation follows
each Dimension independently. Enabling the constraint does not round,
truncate, delete, or rewrite existing decimals. Profile/Matrix display the
retained value and violation, Radar omits its vertex and affected polygon,
and Quadrant excludes it from ordinary plot/waiting placement and lists the
violation. Removing the constraint makes a retained in-range decimal usable
again without editing it. Null and explicit zero remain distinct.

For constrained Dimensions, sliders select integer candidates inside the
range, and Radar/Quadrant pointer gestures select the nearest in-range integer
candidate to the gesture-derived number. This candidate selection does not
repair recorded values or round direct input. Radar Arrow keys move by one
for these Dimensions; unconstrained Dimensions retain the existing `0.05`
gesture. These are Prototype-local controls, not a general precision,
rounding, or step contract. MIN/MAX may remain fractional. A range with no
integer candidate (for example `0.2..0.8`) remains editable but cannot produce
a valid integer value. Generated candidates retain the safe-integer technical
guard; when unavailable, random/pointer generation leaves records unchanged
with a notice, and no slider is offered. Quadrant validates both candidate
values before writing either axis, so a failed placement cannot partially
change the other axis.

Focused tests cover centralized decimal rejection, independent neighboring
Dimension policies, retained violations and projection exclusion, removal of
the constraint, integer candidates inside fractional bounds, no-candidate
ranges, zero/null, and session reload without migration. The 13 Prototype
tests passed. Isolated Edge browser checks confirmed Add/Edit policy controls,
retention of `2.5` after enabling the constraint and after reload, Profile and
Matrix decimal rejection, Radar/Quadrant warnings and plot exclusion, mixed
random results (`1` and `5.05`), an integer slider commit, Radar keyboard edits
(`1` to `2`, neighboring decimal `5.05` to `5.1`), integer Radar pointer commit
(`0`), and mixed Quadrant drag results (`-1`, `3.5`). A failed placement on an
integer-only `0.2..0.8` axis retained its null value and the other axis's `3.5`.
With 13 Matrix rows, native Enter commit retained row top `805.640625px`,
scrollTop `392`, and page scrollY `0`. Alt+Right reordered columns while the
Dimension values followed their identities. Runtime syntax checks and
`npm.cmd run validate` passed; the tracked diff check reported no whitespace
errors. A single integer candidate is presented for direct entry rather than
as an immovable slider.
These are supporting implementation evidence, not Human acceptance.

<a id="latest-bounded-refinements--2026-10-02"></a>

## Historical bounded refinements: random-only option superseded — 2026-10-02

Historical evidence: the Matrix commit correction remains current. The
Profile-global random-only option described here was superseded by the
subsequent Human decision and Dimension-local implementation above.

These follow-ups are implemented and machine/browser-verified; Human browser
evaluation is pending. They do not record Prototype 2 as Human-accepted or
closed.

Matrix numeric value commit previously rebuilt the internal scroll container
without restoring its position. Commit now captures and restores the Matrix
vertical scroll position and page position around that redraw, maintaining
the edited row's location. Selection/navigation and column reorder logic are
unchanged.

Profile now provides an explicit **Random integers only** checkbox for both
Fill blanks and individual-field random generation. It is an application-local
UI option retained across redraws and view changes in the running tab; reload
resets it to off. It does not alter Dimension records, direct decimal input,
precision, step, rounding, or portable semantics. With the option off, the
existing range-derived random picker remains in use. With it on, generation
selects an integer inside the inclusive Dimension range. The generator checks
that its integer endpoints and candidate count are safe JavaScript integers;
if no integer lies in range or this technical guard fails, it leaves the value
unchanged and displays a notice. This is solely a random-generator safeguard.

The follow-up verification used an isolated Edge tab with 15 temporary
Entities and a `0..100` Dimension. Immediately before and after Enter commit
on a lower Matrix row, row top remained `780.015625px`, Matrix scrollTop
remained `728`, and page scrollY remained `10`; the committed decimal value
was `60.5`. Integer random generated `12`, and direct entry of `12.5` remained
accepted while the checkbox was on. The option remained checked after view
switching. Browser console inspection returned no errors or warnings.
`node --test research/prototypes/parameterplotter-1/*.test.mjs` passed all nine
tests, including negative fractional bounds, ranges without integer candidates,
the generator's safe-integer guard, and preservation of decimal random
generation. `npm.cmd run validate` passed. These are supporting runtime
evidence, not Human acceptance.

## Decimal random refinement — 2026-10-02

Human observed integer-only random producing integers, but unconstrained
random exposed a binary tail such as `-0.020000000000000018`. This is partial
Human evidence only: I1 and the whole Prototype 2 evaluation remain pending.

The cause was binary floating-point interpolation of the random position
between MIN/MAX, followed by raw numeric display. New generated range
interpolation and Radar keyboard addition now operate on decimal components
before conversion to the existing JS-number record. This changes generated
arithmetic, not arbitrary direct input or already recorded values. The local
BigInt arithmetic helper is an implementation technique, not an adopted
portable fixed-point representation. Derived geometry still uses numbers;
positions are not written over recorded values.

Add/Edit saves the exact endpoint input strings as `minInput` / `maxInput`
and their larger explicit fractional digit count as `decimalPlaces` (null
when neither endpoint contains fractional digits). Trailing zeros survive
Edit/reload. Existing Dimensions without this metadata stay without it;
there is no loading migration or automatic rewriting of values. A Human
endpoint edit can change the hint, but never rounds existing values.

For an unconstrained hinted Dimension, random chooses in-range decimal-grid
candidates of that scale. Normal value surfaces pad fractional zeros to the
hint only when the number fits; extra meaningful digits remain intact.
There is no new direct-entry validation or slider/keyboard step constraint.
At this historical checkpoint, without a hint random retained its 201-position
decimal picker (superseded by the 2026-10-03 random-grid refinement); exact decimal
interpolation removes the observed arithmetic tail instead of applying an
arbitrary two-place rounding rule. Pointer-generated interpolation uses the
same arithmetic but remains continuous; it does not snap to the hint grid.

Integer-only is independent and takes precedence: random still chooses
integers and integer display remains integer; a hint cannot permit decimal
commits. Range, null/zero, unit, violating-value retention and plot exclusion
are unchanged. Padding/grid generation supports hints up to 100 places as a
Prototype-local resource guard; beyond it random skips with a notice and
records remain untouched. Scientific notation remains unsupported as input.
The precision hint does not adopt portable precision, rounding, significant
digits, step, Observation or normalization semantics.

The new focused tests cover trailing-zero hints, all 201 no-hint random
positions on `-1..1`, tiny/negative hinted grids, integer precedence,
meaningful direct digits and legacy tails preserved, and display padding.
Isolated browser evidence confirms endpoint strings restored as
`-1.00` / `1.00`, random/display examples `0.32`, `-0.420`, `0.0004`, no-hint
`-0.91`, and integer `0`; direct `0.123456789` remained intact after hint
editing and reload and was visible in Matrix and Radar. These are machine
observations, not Human PASS. The separate Decimal refinement tab is the
re-evaluation fixture; the existing Human session was not edited or reloaded.

All 17 focused tests and `npm.cmd run validate` passed; changed runtime syntax
and `git diff --check` passed. Browser inspection also confirmed the same
unrounded direct value and padded decimal in Quadrant, and rejection of an
integer-only fractional entry with its prior record retained. The captured
warning/error console was empty. Human D1–D5 and I1 remain unassigned.

Historical synchronization snapshot before the explicit D1–D5 Human report:
the evidence synchronization re-ran the four focused suites: 17/17
passed, and the repository validation gate passed. The evaluation guide now
labels its earlier 13/13 preparation record as historical, records current
17/17 machine evidence separately, and uses PENDING where a complete Human
result is absent. Existing review tabs were inspected read-only and retained
without reload or fixture changes. The only supplied Human observations are
integer-random success within I1 and the pre-refinement decimal-tail defect;
neither assigns a full-case PASS/FAIL. D1–D5 and the remaining evaluation
cases still require explicit Human results. No runtime or semantic change
was made by this documentation synchronization.

## Subsequent Human Decimal evaluation results — 2026-10-02

Historical result-recording snapshot; the following 2026-10-03 section
supersedes its I1-pending count and next-operation advice.

Human explicitly reported D1 PASS (2-place hint), D2 PASS (3/4-place hints),
D3 PASS (no-hint decimal behavior and meaningful decimal preservation),
D4 PASS (existing values preserved after hint change), and D5 PASS
(independence from integer-only). D5 additionally includes visual confirmation
that integer-only fractional input `0.5` was rejected with the existing
recorded value unchanged. These are Human Browser Evaluation results, not
the prior machine/browser verification. The report supplied no browser/version
or viewport; those details are not inferred.

The [evaluation guide](prototype-2-human-browser-evaluation-2026-10-02.md)
records five Human PASS cases and 15 remaining PENDING cases. I1–I6, M1,
R1–R4, U1 and B1–B3 are not passed by implication. The next Human operation
is I1 in the existing Review 13 tab; neither review tab is reset or reloaded
by this documentation update. Runtime, constraints, hint behavior and data
remain unchanged. Prototype 2 overall remains **Human browser evaluation
pending**; this records no acceptance or closure.

## Subsequent I1 Human result and supporting verification — 2026-10-03

Human explicitly confirmed the complete I1 case as all OK: rejected Count
`2.5` retained its record; Count `3` and Measure `2.75` accepted; sliders,
independent per-field random and clear / Fill blanks followed each Dimension
policy; no global integer-random option existed. I1 is **PASS (Human)**.
D1–D5 Human PASS remain unchanged. There are now **six Human PASS and 14
PENDING cases**, not a Prototype 2 acceptance or closure.

The [evaluation guide](prototype-2-human-browser-evaluation-2026-10-02.md#codex-supporting-verification--2026-10-03)
contains separate, per-case objective evidence and remaining Human checks
for I2–I6, M1, R1–R4, U1 and B1–B3. Existing focused suites passed **17/17**.
Mutable browser verification used a separate Edge fixture (Apollo example
plus 13 Probe Entities), preserving the Human Review 13, Decimal refinement
and Dataset sessions. It confirmed Matrix integer/decimal commits, lower-row
Enter/native blur scroll retention at page offset zero, Radar and Quadrant
mixed policies, retained constraint/range violations and restoration,
no-candidate atomic placement failure, form validation, null/zero distinction,
unit metadata, temporary edit retention and Dataset replacement cancellation.
No clear runtime defect was reproduced in those paths; unexercised paths are
not assumed defect-free.

The remaining Human work is grouped into Matrix visual stability (including
nonzero page offset), projection gestures/warning readability, unlike-range
and long/narrow-unit presentation, real Matrix drag/Drawer scrolling and the
preserved Dataset session, plus a genuine legacy-session fixture decision.
Automation did not establish a completed HTML5 column drop; B1 stays pending.
Legacy compatibility has model coverage, but no genuine P1 browser session
was used; B3 stays pending until explicit Human evidence or a fixture decision.
No machine observation assigns Human PASS/FAIL. The earlier I1 refresh advice
is historical following the complete Human report, not a new reload request.

This update changes only the two evaluation/evidence documents. Runtime,
recorded-value policy, precision hint, Dataset, Core, Extensions, schema and
Validator are unchanged. No new feature, migration, repair or semantic
adoption occurred. No commit, push, tag, release or deploy was performed.
Prototype 2 remains **implementation complete / Human browser evaluation
pending**.

Validation of this documentation update: repository `npm.cmd run validate`
passed; the two documents' local links/anchors, case counts and whitespace
were checked. Apollo example SHA-256 was unchanged before/after browser use:
`7D9FB525A14C03EC02B91A66D902102BE3120D75DCACE86FE754A3E86BFBD249`.

## Matrix slider removal and B3 fixture decision — 2026-10-03

Human selected Matrix for many-Entity/many-Dimension comparison and direct
numeric editing, and Profile for detailed one-Entity adjustment with sliders.
Matrix no longer renders value sliders or the unassessed instruction to move
one. Its numeric editor, Clear, recorded-value statuses and inline rejection
remain the same shared editor. Only the Matrix renderer opts out of slider
markup; Profile uses the unchanged default. Numeric commit handlers, value
policy/storage, range/precision hints, projection geometry, column reorder
and scroll restoration were not changed. The Human-observed Matrix slider
drag/readout lag is resolved by removing that control, not repairing it.

The revised I2 evaluates Matrix direct input and independent Dimension
policies; it no longer requires Matrix sliders. M1 and other applicable
criteria remain. Human explicitly reports no real legacy user session and
permits B3 **NOT RUN** on fixture absence. That is not compatibility Human
PASS; legacy `-1..+1` compatibility code and tests remain unchanged. D1–D5
and I1 stay Human PASS. Current totals are **six Human PASS, 13 PENDING and
one NOT RUN**; Prototype 2 remains Human browser evaluation pending.
The preceding supporting-verification snapshot predates this surface change.

Verification used a new independent Edge tab `532323220` at
`http://localhost:4179/`, with the read-only Apollo example, four Temporary
Entities (13 rows total), and Count / Measure / Switch. No preserved Human
review tab was reset, reloaded or overwritten. Browser observations:

- Profile initially had three value sliders; Matrix had zero for all 13 rows.
  Profile Count ArrowRight subsequently updated both input/readout `3→4`;
  Matrix then showed the same shared `4`. The captured error log was empty.
- Matrix Count `2.5` rejected while recorded `2` stayed; `3` accepted.
  Measure `4.25` accepted by Enter and `4.75` by native typing + Tab.
- Both decimal commits retained Matrix scrollTop `275`, lower-row top
  `1164.890625px`, and page X/Y `0`. Nonzero page offset remains a Human M1
  check, not a new claimed browser success.
- Count `0` displayed Temporary value 0; Clear displayed No value with no
  slider instruction. Alt+Right reordered Count after Measure.
- Narrowing Measure to `5..10` retained `4.75` with an outside-range status;
  enabling integer-only on Switch retained `3.5` with a distinct constraint
  violation status. Both numeric fields remain available to correct values.

The independent fixture remains open at Matrix for **Matrix check 4**, ready
for revised I2/M1: Count `4` is integer-only, Measure `4.75` and Switch `3.5`
are unconstrained; all ranges are `0..10`. After verifying the warnings,
Measure's range and Switch's constraint were explicitly restored through UI,
without clearing or rewriting their retained values. Alternatively continue
in the preserved Review 13 tab after Human finishes
unsaved input and reloads that same tab for the updated renderer. Codex did
not reload those sessions. Browser evidence does not pass I2/M1 or any other
pending Human case.

The existing four focused suites passed **17/17**, including legacy-load
compatibility without migration. Repository validation and documentation
link/case-state checks passed. No new test fixture was substituted for B3.
The only runtime file changed is `views.js`; documentation changes are this
result, the evaluation guide and README. No Dataset, Core, Extension, schema,
Validator, session migration, commit, push, tag, release or deploy changed.

## Matrix-local Entity row order — 2026-10-03

Human selected Entity names as Matrix row identity text, with separate row
reorder handles. The old Matrix name button carried `data-select-entity`;
the shared selection handler assigned the primary Entity and called update,
causing redraw. Matrix no longer renders that button/attribute. The generic
handler remains for other surfaces such as Quadrant labels. Entity Pool's
existing Matrix row-location behavior is unchanged; row reorder does not
reorder that Pool or redefine selection/navigation.

`matrixRows` is an optional application-local/session-local Entity ID array.
It is written only on an explicit successful Matrix row move. A read-time
Matrix projection uses valid unique IDs in that array, then appends remaining
Entities in their existing order; unknown/deleted/duplicate IDs are ignored.
Older sessions without it retain their order without migration/repair. No
Dataset or temporary Entity array is sorted, and other views continue to use
the unchanged shared Entity list. Dataset replacement naturally starts a fresh
workspace without carrying the previous Dataset's local row order.

Each row has a named grip (short identity ID included when needed), native
drag and Alt+Up/Down. Pointer upper/lower half chooses the boundary before/
after the hovered row. Source removal adjusts that same boundary to the
final splice index; first and last boundaries are included, no-op boundaries
do not change state. The horizontal indicator uses fixed positioning like
the existing column indicator and adds no scrollable content. A dedicated
`matrix-row` drag payload avoids reuse of Quadrant Entity placement payloads.
Drop/outside-drop/dragend/Escape clear row feedback; scroll/resize also clear
stale screen coordinates. Keyboard move restores focus to the same grip and
announces its new position; nearest scrolling keeps the moved handle reachable.
No primary Entity selection is changed by row reorder. Column behavior and
Alt+Left/Right remain separate.

Independent browser verification used Edge tab `532323224`, imported Apollo
read-only and four Row check temporary Entities (13 rows), Count integer-only
and Measure unconstrained, both `0..10`:

- Matrix contained zero Entity selection buttons and zero value sliders.
  Native-coordinate click on visible Neil Armstrong identity text left page
  Y / internal scroll unchanged at zero and retained primary Row check 4.
  Locator click can itself scroll a target into view; this was not treated as
  an application click/selection result.
- Alt+Up/Down moved Row check 4 to first, middle and last; focus followed the
  grip, live status announced positions, and first-position order survived an
  isolated same-tab reload. Its recorded values stayed `2` / `2.75` through
  those moves. Entity Pool retained its original list; Profile still showed
  Row check 4 `13 / 13`, and Previous Entity navigated to Row check 3 `12 / 13`,
  independently of Matrix's Row check 4 at row 3.
- After reorder, Count `2.5` rejected with `2` retained; Count `3` accepted.
  Lower Row check 3 decimal Enter `4.25` and native blur `4.75` each preserved
  internal scrollTop `201`, row top `1183.390625px`, and page Y `0`.
  Column Alt+Right produced Measure / Count without changing local row order.
  Captured error logs were empty.
- The native-drag automation attempt did not start an observable row insertion
  indicator or establish a completed drop. First/middle/last drag results,
  visible boundary geometry and drag cancel need Human native-pointer review;
  keyboard/model evidence is not presented as browser drag success. No clear
  runtime defect was reproduced in the confirmed paths.

The new three model tests verify first/middle/last insertion and no-op/error
safety, exact nonmutation of shared state, append/remove projection, and
session round-trip/older-session no migration. Together with the existing
range/integer/decimal/random suites: **20 of 20 automated tests passed**. Syntax checks, repository
validation and local documentation link/state checks passed. Existing legacy
tests remain unchanged.

The independent tab remains at Matrix, columns Measure / Count, with Row check
4 at row 3 (`3` / `2.75`) and Row check 3 at the last row (Count null, Measure
`4.75`). It is available for Human's B1 row-order supplement and I2/M1; no
preserved Human review tab/session was reset, overwritten or reloaded. The
latest renderer can also be loaded by Human in their existing tab after
finishing unsaved input, without discarding its session.

README and the evaluation guide describe this refinement; B1 includes explicit
row-order checks while retaining its column/Drawer criteria. D1–D5 and I1 stay
Human PASS, B3 stays NOT RUN (actual legacy fixture absent), and all other 13
cases stay PENDING. No acceptance/closure, portable ordering adoption, value
semantic change, Dataset/Core/Extension/schema/Validator change or commit
occurred. Changed files: `model.js`, `views.js`, `main.js`, `second-pass.css`,
`matrix-row-order.test.mjs`, README, this result and the evaluation guide.

## Quiet row/column reorder controls — 2026-10-03

Human selected row and column handles as the same quiet reorder affordance,
prioritizing Matrix density. The former column grip inherited a visible
button border/background while the row grip inherited the table's transparent
button rule. A shared `.matrix-wrap .matrix-grip` rule now explicitly controls
both surfaces: transparent border/background at rest, matching hover and
focus-visible feedback, and matching pressed/drag-source treatment. The row
override no longer supplies different padding or display behavior. Both use
a 30 × 32px minimum hit area, increased from the prior 24 × 30px, with an
invisible border reserving space so state changes do not shift layout. Native
button focusability and the existing keyboard outline convention remain.

Presentation-only drag listeners add/remove `is-dragging`; drop, dragend and
Escape clear that feedback. They do not prevent events, change drag payloads,
insertion calculations, recorded values or session order. Existing row/column
reorder handlers and insertion indicators are unchanged. No table layout or
control hierarchy was rewritten.

An independent Edge tab `532323228` imported Apollo read-only and created Count
(integer-only) / Measure (unconstrained), both `0..10`. Browser DOM/computed CSS
observations for both grip types:

- Resting background and border were transparent; bounds were 30 × 32px;
  tabindex was 0.
- Actual pointer clicks left each grip hovered: both used background
  `rgb(238, 242, 250)` and border `rgb(182, 197, 221)`.
- Tab then Shift+Tab produced actual `:focus-visible`, a 3px outline and the
  same feedback background for each handle.
- Row Alt+Down changed the first rows to Buzz Aldrin / Neil Armstrong / Michael
  Collins; column Alt+Right changed headers to Measure / Count independently.
  No drag-source class remained after those keyboard operations.

Native drag-source appearance and interaction feel still require Human B1
review; computed CSS and keyboard success are not a completed native drag
test or Human PASS. The independent Matrix tab remains open for normal,
hover, focus and native-drag review. Preserved Human sessions were not reset,
overwritten or reloaded. README and the evaluation guide carry the visual
supplement while keeping all existing outcomes: D1–D5/I1 Human PASS, B3 NOT RUN,
13 cases PENDING; Prototype 2 overall remains Human browser evaluation pending.

Existing focused suites passed **20/20**; main.js syntax, repository validation
and documentation link/state checks passed. Changed files are `second-pass.css`,
`main.js` (visual feedback only), README, this result and the evaluation guide.
No reorder/value semantics, Dataset/Core/Extension/schema/Validator, other-view
order, commit, push, tag, release, deploy or acceptance/closure changed.

## Current evidence synchronization and partial B1 Human report — 2026-10-03

Human explicitly confirms Matrix Entity row reorder through native drag/drop
and Alt+Up/Down. This is partial **B1 Human evidence**, not B1 PASS or a visual
result for quiet grips, native drag-source feedback, insertion boundary
matching, first/middle/last behavior, cancel/end cleanup, column drag or
Drawers. Browser/version and viewport were not provided by Human and are not
inferred from Codex fixtures. D1–D5/I1 remain Human PASS; B3 remains NOT RUN
for actual legacy-session absence; all other 13 cases remain PENDING.

The [evaluation guide](prototype-2-human-browser-evaluation-2026-10-02.md#latest-human-evidence-and-current-continuation--2026-10-03)
now leads with that Human report, a current per-case supporting-evidence/gap
table and short Japanese operations. It keeps the original acceptance
criteria and dated earlier browser/machine snapshots. The old nonzero-page
offset and unconstrained Radar pointer machine gaps are specifically reduced
by this run; no case is promoted to Human PASS from those observations.

Quiet-refinement runtime and five existing suites were checked: **20/20
tests PASS**. A new independent Edge fixture `532323232` imported Apollo
read-only, added Evidence 1–4 (13 Entities), and created ten temporary
Dimensions. Fresh browser verification covered Matrix direct rejection and
decimal commit, Radar ArrowLeft/decimal pointer, integer violation retention
through reload and ON/OFF, outside-range warnings across all four views,
no-candidate atomic placement rejection, Profile/Matrix null versus zero,
five unlike range midpoints in all four views, long unit recovery, keyboard
row/column reorder, Drawer containment/wheel and Dataset replacement Cancel.
Full details and explicit unexercised paths are in the guide.

Measured Matrix Enter/native blur each retained scrollTop `235`, row top
`1137.390625px`, page Y `12`. The five recorded range midpoints remained
`-6`, `15`, `3`, `0.0005`, `5000000000`; their Radar radii were approximately
`52.5` and Quadrant X positions `50%` independently. Long unit input used
230 characters; the existing whitespace trim stored 229, recoverable in Edit
with maxlength 240. Short unit `kg` was added to Measure in this disposable
fixture without changing records. No browser-global narrow-viewport override
was applied; narrow legibility stays a Human check.

Drawer wheel left background page Y `0` while a Dimension list scrolled
`0→312`. Escape restored opener focus; after close, normal page wheel moved
Y `0→11` with root overflow visible. Touch and feel are not inferred from
wheel. Replacement Cancel retained 13 Entities/ten Dimensions and records.
Temporary Description edit retained the exact DOM-backed identity
`temp:5ceebc82-918e-4b69-aef2-bbd0b9962f1a`, Count `3` and Measure
`7.81916040554171`; no automatic rounding/repair occurred. Earlier Name-edit
browser evidence remains, but no new Name edit or waiting-Entity native drag
was performed. No clear runtime defect or unexpected mutation was reproduced
in the confirmed paths; captured error logs were empty. This is not assurance
about unverified native drag visuals or other unexercised paths.

The independent fixture remains at Profile **Evidence 4**, with ten
Dimensions and the tested records, for the Japanese continuation. Only that
tab was reloaded; preserved Human Review 13, Decimal, Dataset and prior review
tabs/sessions were not reset, overwritten or reloaded. Their live state is
not inferred from the original preparation table. No legacy fixture was
fabricated to replace B3 NOT RUN.

This synchronization changes only README, this evidence result and the
evaluation guide. Runtime/test/HTML/CSS file hashes stayed unchanged during
documentation synchronization. Repository `npm.cmd run validate`, local
document links/anchors, case counts and diff checks passed. No Dataset, Core,
Extension, schema, Validator, runtime/semantic correction, commit, push, tag,
release, deploy or Prototype 2 acceptance/closure was performed.

## Random-grid and Entity identity refinement — 2026-10-03

Human chose the full inclusive integer set for integer-only Dimensions, and
the full in-range decimal grid for others: the larger authored MIN/MAX
fractional-digit count, or **2 decimal places for random only** when no hint
exists. This supersedes the historical 201-position no-hint picker above.
No direct-entry precision, display fallback padding or portable contract is
introduced. Integer-only takes precedence. Stored meaningful decimals,
null/0, range, retained integer violation/OOR and derived positions are unchanged.

`randomDimensionValue` now uses the same decimal-grid picker for both hinted
and fallback generation. Exact BigInt decimal scaling computes ceil(MIN ×
scale) through floor(MAX × scale), including both endpoints when on-grid.
A 53-bit random sample maps to every index when candidate count is at most
2^53. Decimal scaled indices additionally stay within ±2^52: a conservative
Prototype-local guard keeping adjacent grid values distinguishable when
converted to recorded JS numbers. The existing 1..100 decimal-place resource
guard remains. Empty/unsafe grids return null; there is no thinning, fallback
to a coarser grid, clamp, extrapolation or rewriting. Integer generation keeps
its existing safe-integer candidate guard. These are generation safeguards,
not portable numeric limits or direct-input constraints.

Profile/Matrix now always display **Dataset / Temporary**, using Entity Pool's
existing badge vocabulary. Dataset identity/ownership remains read-only;
temporary value editing on a Dataset Entity is still application-local.
Matrix's primary Name is a separate span with a 32px line height matching the
quiet 30×32px grip. Short ID and ownership badge live in secondary metadata.
The grip stays at the first Name line, independent of metadata height or
wrapped long names. No row/column event, payload, insertion index, cleanup,
focus selector or session order code was changed. Matrix retains direct
edit/Clear and no sliders; Profile sliders remain unchanged.

### Verification and remaining Human review

- Focused automated tests: **21 of 21 passed** (six range, three random, four integer, five
  decimal, three Matrix-row tests). New exhaustive index coverage reaches all
  1001 no-hint `0..10` candidates, 201 no-hint `-1..1` candidates, 2001
  three-place candidates and nine four-place candidates. It checks all six
  integers in `-2.7..3.6`, empty decimal grids, unsafe magnitude/count rejection,
  meaningful direct decimal acceptance and absence of fallback display padding.
- Independent Edge tab **532323236** imported Apollo read-only and created two
  duplicate long-name Temporary Entities. Fill blanks generated no-hint `1.32`,
  hinted `0.972` and integer `1`, while unsafe `100000000000000..100000000000001`
  remained blank with a skipped notice. Direct unsafe-range `100000000000000.5`
  was accepted; subsequent random reported unavailable and retained it.
  Direct no-hint `2.7531` remained exact in Profile/Matrix, without padding.
- Profile Dataset and Temporary badges and Matrix badges were visibly present.
  All eleven row grips measured 30×32px/tabindex 0. Their centers exactly matched
  first Name text-line centers, including wrapped duplicate names with short IDs.
  At this machine-check snapshot, actual readability was Human review pending;
  the subsequent bounded Human OK below confirms ownership/Name-line alignment.
- Only this new isolated tab was reloaded to load the current notice text;
  its session retained identities/records. Row Alt+Down/Up and column
  Alt+Right/Left worked and restored the initial presentation order. Native
  drag feedback, boundaries and cleanup were not re-run or Human-passed here.
  Lower-row Matrix Enter commit retained internal scrollTop `174`, row top
  `994.015625px` and page Y `0`; captured console errors were empty.
- Syntax, repository validation, local document references and whitespace
  checks accompany this bounded change. Existing module-type warnings remain.
  Preserved Human tabs were not reloaded/reset/overwritten; no Dataset/Core/
  Extension/schema/Validator files or session migration logic were changed.

The [review supplement](prototype-2-human-browser-evaluation-2026-10-02.md#random-and-identity-review-supplement--2026-10-03)
contains short Japanese operations. The independent tab is left in Matrix for
ownership/alignment review. D1–D5/I1 Human PASS, B3 NOT RUN, partial B1 report
and all 13 PENDING cases remain unchanged. Prototype 2 remains implementation
complete / Human browser evaluation pending; no acceptance, closure or commit.

Owned paths: `profile-random.js`, `decimal-presentation.js`,
`decimal-presentation.test.mjs`, `views.js`, `second-pass.css`, `main.js`,
`README.md`, this result and the Human Browser Evaluation guide. `main.js`
changes only explanatory form/notice wording, not event behavior. Existing
unrelated dirty/untracked work and stash were untouched.

## Human reconfirmation of Random / identity supplement — 2026-10-03

Human explicitly reports **OK** for the implemented bounded supplement:
all valid inclusive-range integer candidates; all authored-hint decimal-grid
candidates; no-hint random-only 2-decimal grid; arbitrary direct decimals
unconstrained by random scale; retained records when unsafe generation is
unavailable; Profile/Matrix Dataset / Temporary presentation; and Matrix row
handle alignment to the primary Entity Name line. This is Human evidence
from the synchronization request, separate from the 21/21 machine evidence.
No browser/version, viewport or additional gesture result is inferred.

The [supplement record and continuation](prototype-2-human-browser-evaluation-2026-10-02.md#random-and-identity-review-supplement--2026-10-03)
now mark that supplement complete. This does not pass any original pending
case: I2, M1, I3–I6, R1–R4, U1, B1 and B2 remain PENDING. D1–D5/I1 Human PASS,
B3 NOT RUN and partial B1 row native drag/drop / Alt+Up/Down evidence remain.
Quiet hover/focus/drag feedback, insertion, cancellation/end cleanup, Drawer/
touch, Dataset read-only actions and replacement safety need their original
case evidence. Ownership badges alone do not establish B2 safety.

The Japanese continuation retains all original criteria and groups related
operations; the next unit is I2/M1 lower-row direct editing and position
stability. Random rules, badges and Name-line alignment need no routine
reconfirmation. This synchronization edits only the guide, README and this
result; it does not inspect or mutate live Human sessions, change runtime,
adopt semantics, create a commit, accept or close Prototype 2.

## I2 / M1 Human results and Quadrant axis hierarchy — 2026-10-03

Human explicitly reports **I2 PASS** (Count `3.5` rejected while recorded `2`
remained; Count `4` and Measure `4.25` accepted; shared values visible in
Profile) and **M1 PASS** (lower-row Enter/Tab commits held exact values without
unexpected visible row/internal-scroll/page jump). These are Human results,
separate from Codex's earlier coordinate measurements. Browser/version,
viewport and a nonzero page offset are not invented. The canonical guide now
has **eight Human PASS / eleven PENDING / B3 NOT RUN**, retaining the Random/
identity supplement OK and partial B1 evidence. Other cases are not inferred
passed. Older result/status snapshots above remain historical evidence.

Human observed repeated, widely separated axis prose above/below Quadrant and
unclear relationships between axis names and Low/High. The bounded correction
changes **views.js and second-pass.css only** in runtime:

- Each X/Y selector owns stacked Range, Unit and Values details, using labeled
  definition-list rows. Explicit decimal hint is a separate row; it is not
  represented as a direct-input constraint. Units wrap as free text.
- Canvas carries only Dimension names and Low/High cues. X is horizontal at
  the bottom, Low left / High right. Y is vertical along the left edge, Low
  below / High above. Y uses CSS writing-mode/rotation as a local presentation
  choice; actual DOM text and native selector identity remain unchanged and
  accessible. Long canvas captions ellipsize; selector provides the full name.
- Old plot-range prose, lower-left Y/lower-right X duplicated names and outer
  endpoint labels are removed. Range/unit/policy details are not repeated in
  canvas. No plot width, height, padding or coordinate area is changed.
- Canvas captions are absolutely positioned, pointer-events:none, below
  plotted item z-order, with no added keyboard stops. Controls remain ordinary
  labeled selects. Point/label/return-to-waiting handlers, range derivation,
  constraints, recorded values, waiting selection and Dataset are untouched.

### Supporting checks and Human visual handoff

Independent Edge tab **532323244**, created for this correction, has Axis review
and Waiting review Temporary Entities, Count `0..10` integer-only/unit items,
and Measure of comparison with a long Dimension name `-1.0..1.000`, with a
descriptive unit and Low/High response labels. Before/after reload of only this
new tab, plot dimensions were identical **1106.8125×550** and Waiting review's
recorded 5/0 stayed at 50%/50% with the same Entity identity/readout. Old summary
nodes were absent; all six canvas captions computed pointer-events:none.

Normal UI click placed the waiting Axis review with integer Count `3` and
decimal Measure `0.5006818181818182`; point drag then authored `7` / `-0.3`
at 70%/65%. Waiting review stayed `5` / `0`. This supports gesture/mapping
preservation, not Human I4 PASS or a new rounding contract. Setup records were
checked through recorded readouts after the Drawer closing/inert phase.

All existing focused suites passed **21/21**; views.js syntax passed. Diff
review confines rendering edits to Quadrant controls/captions; Profile/Radar/
Matrix rendering and interaction/model files remain unchanged. Responsive
CSS is scoped to the axis controls, permits long text wrapping and stacks
metadata keys/values under 720px. No browser-wide viewport override was
applied to preserved Human sessions; narrow layout/visual feel remain Human
review rather than an unperformed browser PASS.

The [current guide and short visual supplement](prototype-2-human-browser-evaluation-2026-10-02.md#current-human-results-and-quadrant-visual-review--2026-10-03)
asks Human to judge selector hierarchy, horizontal X / vertical Y association,
Low/High readability and absence of unhelpful duplication. I3 is the next
original case; the new visual supplement can be reviewed first. All original
criteria are retained. No Human result for this new supplement, Prototype 2
acceptance/closure, commit or deployment is recorded.

Owned paths: `views.js`, `second-pass.css`, `README.md`, this result and the
Human Browser Evaluation guide. Existing Human tabs, Dataset/Core/Extension/
schema/Validator files, unrelated dirty/untracked work and stash were untouched.

## External Quadrant axis annotation — 2026-10-03

Supersedes the preceding in-canvas caption proposal; earlier measurements
remain historical supporting evidence. Human explicitly requested external
annotations, ordinary horizontal Y text, full-name wrapping and permitted
some plot-area reduction. No new semantic decision was made.

Owned changes: views.js, second-pass.css, README.md, this result and the Human
evaluation guide. The render places Y annotation, plot and X annotation in
separate grid cells. Y High/Low align with top/bottom; X Low/High with left/right.
Names wrap without rotated/absolute/ellipsis overlays. Long annotation content
can increase row height; narrow layout keeps an 84px minimum Y gutter. Selector
Range/Unit/Values/Hint meaning is unchanged. Grid/points/Entity labels remain
inside the original data-plot element; coordinate mapping and authoring use
its actual bounds. main.js, model.js, plot-labels.js and quadrant-drag.js are
unchanged from the pre-refinement snapshots.

Independent browser tab 532323248: 1270px viewport canvas 971.8125 × 550px;
390px viewport canvas 221 × 313.84375px. Y gutter and X band are disjoint from
canvas; long Y text wraps horizontally; no page-level horizontal overflow.
Central click yielded X=5, with decimal Y in range. Narrow coordinate drag
was inconclusive (no value change), not supporting drag PASS. Console errors
were absent. Viewport override reset; existing Human sessions were preserved.
21/21 focused tests and npm run validate passed. Syntax/diff review confirms
only presentation runtime changes. No Dataset/Core/Extension/schema/Validator
changes, commit or acceptance/closure. Human visual review is pending; the
8 PASS / 11 PENDING / B3 NOT RUN state remains unchanged.

## Compact narrow Quadrant annotation and footer — 2026-10-03

Human requested compact X/Y-only annotation at narrow widths and separate
footer rows. Only second-pass.css runtime changes were required: scoped
max-width:720px rules hide external annotation children and show centered
X/Y through CSS content, reduce Y gutter to 16px, and grid the existing footer
into action/count then full-width explanation. Wide rules and DOM are unchanged;
no value, range mapping, Dataset or interaction code is modified. Related
documentation updated: README, evaluation guide and this result (four files).

Independent tab 532323252 measured 289×280px plot at 390px and 219×280px at
320px; page widths stayed below viewport widths. The accessible tree retains
selector details and exposes compact X/Y. Footer rows are disjoint, line-height
1.5. Wide external annotation remained visible. A central click produced X=5
and in-range decimal Y before resizing. Tests 21/21 and npm run validate passed;
CSS diff contains only narrow scoped rules. Existing Human statuses remain
8 PASS / 11 PENDING / B3 NOT RUN. No acceptance, commit or closure.

A separate connector defect was observed after immediate scroll following
wide-to-narrow viewport change: about 430px line extended toward metadata,
despite the Entity label being next to the point. Label selection recomputed
the line to 16px without value change. plot-labels.js has unchanged captured
viewport centers used by delayed connector sync, a suspected scroll/animation
timing cause. This request does not repair that interaction code; the evaluation
guide records the conditions and Human follow-up. Console errors were absent.
Viewport reset and preserved Human sessions left intact. Narrow readability
and practical operation area remain Human visual review, not machine acceptance.

## Narrow Quadrant footer alignment follow-up — 2026-10-03

Footer-only CSS refinement changes grid alignment from center to baseline and
sets both return action and plotted count to .82rem / 1.5 line-height.
Previously the inherited button/count fonts were 15px/11.7px. No DOM or
interaction change; 34px button hit area, 12px row gap and full-width explanatory
paragraph remain. All three declarations are within the existing 720px narrow
media query. Wide rules, X/Y annotation, connector and value semantics remain
untouched. Owned files: second-pass.css, README and the two evidence documents.

Independent browser tab 532323256: action/count text bounds coincide vertically
at both 390px and 320px; same 12.3px font / 18.45px line-height. Button height
34px; explanation starts 12px below that row. Page widths 375/305px do not
overflow the viewports. Existing connector defect remains uncorrected and
separate; label selection in the independent fixture recomputed its connector.
Viewport reset; preserved Human sessions untouched. Human evaluation statuses
remain 8 PASS / 11 PENDING / B3 NOT RUN, with supplement OK and partial B1.
No new Human PASS, commit, acceptance or closure.

Verification: 21/21 focused tests and npm run validate passed; runtime diff
contains only the three narrow CSS declaration changes.

## Y annotation alignment follow-up — 2026-10-03

Two CSS declarations only: text-align:right on Y annotation; align-items:flex-end
for narrow Y. Wide wrapped names and endpoints now align toward the plot.
Narrow Y remains vertically centered in the existing 16px gutter. Plot/gutter
sizes and 12px/8px gaps are unchanged; selector metadata, X, footer, DOM and
interaction/value code unchanged. Known connector defect is outside this scope.
Owned files: second-pass.css, README and the two evidence documents.

Independent tab 532323260 confirmed long Y name wrapping with right alignment,
unchanged 971.8125×550px wide plot, 289×280px at 390px and 219×280px at 320px.
No narrow horizontal overflow; footer action/count text bounds still coincide
and retain 12.3px/18.45px typography. Temporary viewport reset, preserved Human
sessions untouched. Tests 21/21 and repository validation passed. No Human
status, Dataset/Core/Extension/schema/Validator, commit or acceptance change.

## Radar drag coordinate correction — 2026-10-03

Human reproduced I3 outward jump and poor radial tracking on all spokes,
while confirming shared-value consistency. I3 remains PENDING. Render uses
0..1 normalized radius; the active Prototype 2 drag handler mistakenly applied
the old signed-to-unit conversion again. A pointer at radius 0.5 became 0.75,
and radial movement was halved. Fix uses radarPositionAtPoint in existing
radar-geometry.js to clamp projected SVG radius directly to 0..1. main.js keeps
ScreenCTM inversion and existing authoredValueAtPosition. No keyboard, pointer
capture, 5px threshold, snap, range, record or shared-value contract changes.

Browser before/after in independent tab 532323264: Count=5 +about 19px outward
previously yielded 8, corrected yields 6; large inward drag yields 1. Measure
diagonal drag yields 0.3976271504513848 with other values unchanged. Click alone
preserves records; keyboard +1/+0.05 preserved. Profile/Matrix/Radar readouts
agree at 2 / 0.4476271504513848 / 15. Initiation/continuous tracking feel remains
Human evaluation. No precision or grab-offset semantics introduced. Only the
new Codex tab reloaded; preserved Human tabs/session state left untouched.

Owned files: main.js, radar-geometry.js, new radar-drag.test.mjs, README and
the two evidence documents. New 3-test regression checks invert rendered radii
for every 3..10-spoke angle, full movement sensitivity/tangent projection and
endpoint bounds, plus existing arbitrary-range/integer/decimal policies.
24/24 focused tests, repository validation and syntax checks pass. Known
Quadrant connector defect remains unfixed. Existing Human statuses preserved;
no Dataset/Core/Extension/schema/Validator change, commit or acceptance/closure.

## Status message editor alignment correction — 2026-10-03

Measured in independent tab 532323272: numeric inputs themselves stay 34px.
Matrix's default middle cell alignment put a normal editor 5.90625px below
warning editors. Profile's flexible endpoint row, optional policy node and
value-field end alignment placed the normal editor 26.375px above warning ones.
Fix changes only presentation: top-align Matrix value cells, start-align
value-field content, use five shared content-sized Profile subgrid tracks and
always render the policy slot (empty when absent), with value-field start alignment.
No fixed-height status region, warning wording, input attributes/handlers,
slider eligibility, value/validation or plot inclusion semantics change.

Post-fix three-state input tops match: Matrix 527.390625px, Profile 600.421875px,
height 34px. Status flows underneath naturally. Profile input tops remain the
same after integer OFF/range restoration with original `3.5 / 3.5 / 4` values.
Warnings reinstated for Human review; preserved Human sessions untouched. Prior
tab 532323268 unavailable in the current browser connection, so no reuse/reset.
Owned files: second-pass.css, views.js and README plus the two evidence docs.
24/24 focused tests, repository validation and syntax/diff checks pass.
Human readability/density review remains pending; no case PASS, commit or closure.

## Human review checklist

Use the [review-ready Human Browser Evaluation guide](prototype-2-human-browser-evaluation-2026-10-02.md)
for the prepared fixture, reduced remaining review and case-by-case PASS/FAIL
handoff. D1–D5 and I1 are Human PASS; the remaining evaluation and Prototype 2
overall remain pending. The older detailed checklist below retains scope;
use the guide's current evidence to avoid unnecessary full-case repetition.

- In Matrix, scroll to a lower row, enter an in-range decimal, and commit it
  with Enter and by leaving the input. Confirm the edited row, Matrix scroll
  position, and page position remain where they were during editing.
- Create/edit one integer-only and one unconstrained Dimension. Test direct
  numeric input in Profile/Matrix, and sliders, individual random buttons
  and Fill blanks in Profile (Matrix has no value sliders);
  only the integer Dimension should reject decimals.
- Record a decimal before enabling the constraint. Confirm it is retained,
  marked in Profile/Matrix and Radar/Quadrant, and not plotted. Reload, then
  disable the constraint and confirm the retained in-range value becomes
  usable again without an automatic rewrite.
- Exercise Radar Arrow keys and pointer drag, plus Quadrant waiting placement
  and point drag, with mixed integer/decimal axes. Confirm every new recorded
  value satisfies its own Dimension policy and null stays distinct from zero.
- Try fractional bounds with valid integer candidates and an integer-only
  `0.2..0.8` range with none. Confirm unavailable generated edits report the
  condition, retain values, and do not partially update the other Quadrant axis.

- Create a new Dimension with no MIN/MAX and confirm it cannot be saved. Try
  equal and reversed values, then save finite endpoints.
- Compare a negative-only range, a positive-only range, an asymmetric range,
  a zero-excluding range, and very small and large ranges. Type values at both
  endpoints and in the interior in Profile and Matrix.
- Enter a value just outside either endpoint and confirm the field reports an
  error while the last recorded value stays the same.
- Record an in-range value, edit the Dimension range so that value becomes
  outside it, then inspect Profile, Matrix, Radar, and Quadrant. Confirm the
  value remains visible as outside range and has no ordinary plot position.
- Compare blank and explicit `0` in Profile and Matrix.
- Try both a short unit such as `%` and a descriptive phrase. Inspect the
  full text in the Dimension editor, Profile, Radar, and Matrix, including a
  narrow viewport and a long phrase approaching the prototype-local limit.
- Use the Quadrant waiting Entity to place at range endpoints and at the
  visual midpoint; confirm midpoint depends on each selected MIN/MAX and
  does not imply zero. Check that values remain the same when switching
  projections.
- In Radar, compare spokes with unlike magnitudes and inspect how readable
  values and labels remain. Confirm the provisional 10-spoke display behavior
  is unchanged. For unconstrained Dimensions the accepted Arrow-key increment
  remains an absolute `0.05` from Prototype 1; it cannot move values in very narrow ranges, so use direct
  entry or pointer drag there. Human should judge whether a later bounded
  Prototype refinement should adapt that local keyboard step.
- Recheck Dataset Entities stay read-only, session data stays local, Matrix
  drag and Alt+Left/Right reorder still work, and modal focus/scroll behavior
  remains intact.

## Deferred questions

This experiment does not adopt precision, directionality, zero semantics,
portable missing-state categories, normalization, provenance, multiple
observations, portable Dimension identity/vocabulary, an Observation model,
unit conversion/parser, Dataset persistence, Extension/schema/Validator
changes, production architecture, canonical repository, product name, or
release identity. The Human should review this bounded runtime before any
Prototype 2 checkpoint or semantic/product scope change is recorded.

## Related records

- [Prototype 1 checkpoint](prototype-1-checkpoint-2026-10-02.md)
- [Dimension/value semantics Research checkpoint](../../exploratory/parameterplotter-dimension-value-semantics-research-checkpoint-2026-10-02.md)
- [Current Roadmap](../../../docs/roadmap.md#current-status-index--2026-10-02)
- [Session 0102](../../../sessions/0100-0199/E2R-Session-0102.md)

## Human results synchronization and I6 preparation - 2026-10-03

Explicit Human results independently pass I3/I4/I5/R2, including repaired Radar
drag and Quadrant native/waiting placement. Alignment supplement Human OK;
not another case PASS. Canonical evaluation guide now records 12 Human PASS,
7 PENDING and B3 NOT RUN. Historical pending snapshots above are superseded
for current status, not deleted. I6 remains PENDING with independent UI-created
tab 532323276 and Computer Use supporting evidence in the guide's latest
results section. Runtime/semantics/Dataset unchanged; no commit or closure.
Waiting plot-click discoverability remains an unimplemented follow-up candidate;
known Quadrant resize/scroll connector issue remains separate and unfixed.

Validation for this documentation/fixture synchronization: focused tests 24/24
PASS, npm run validate PASS, tracked git diff --check PASS; canonical table
counts checked as 12/7/1. Existing module-type warning is non-failing.

## I6 Human result and independent R1 R3 preparation - 2026-10-03

Human explicitly passed I6 input/random/no-candidate/Fill blanks and Quadrant
atomicity, including unchanged control 2.75. Canonical guide records 13 Human
PASS / 6 PENDING / B3 NOT RUN. R1/R3 UI-created independent tab 532323280
contains endpoint and zero review Dimensions and an unsaved blank-bounds form.
Computer Use confirmed missing/equal/reversed rejection, valid range and both
endpoints, outside rejection with recorded 4 retained, and null/0/Clear across
Profile/Matrix; this is supporting evidence only. R1/R3 remain PENDING.
No runtime/semantics/Dataset change, existing sessions untouched, no commit
or acceptance/closure. Existing connector/discoverability follow-ups unchanged.

## R1/R3 Human results and R4/U1 review fixture - 2026-10-03

Human explicitly passed R1 bounds validation/endpoints/outside rejection and R3
null/zero/Profile-Matrix/Clear comparison. Canonical evaluation guide records
15 Human PASS / 4 PENDING / B3 NOT RUN. Independent tab 532323284 has three
Entities with lower, arithmetic midpoint and upper recorded values across the
five requested ranges, plus short and descriptive units. Matrix confirms all 15
records. R4/U1 remain PENDING for four-view readability and narrow usability.
No runtime/semantics/Dataset changes, no commit or acceptance/closure.

## R1/R3 Human results and R4/U1 review fixture - 2026-10-03

Human explicitly passed R1 bounds validation/endpoints/outside rejection and R3
null/zero/Profile-Matrix/Clear comparison. Canonical evaluation guide records
15 Human PASS / 4 PENDING / B3 NOT RUN. Independent tab 532323284 has three
Entities with lower, arithmetic midpoint and upper recorded values across the
five requested ranges, plus 3-character and 238-character descriptive units.
Matrix confirms all 15 records; Radar and Quadrant are preconfigured for review.
R4/U1 remain PENDING for four-view readability and narrow usability.
No runtime/semantics/Dataset changes, no commit or acceptance/closure.


## B1 Matrix handle Human review and tooltip copy refinement - 2026-10-04

Human confirmed Matrix handle resting, hover and keyboard-focus feedback; native drag feedback; first/middle/last insertion-result matching; right-edge behavior; successful-drop, Escape and outside-drop cleanup; and column Alt+Left/Right. Earlier partial row drag, Alt+Up/Down and Name-line alignment evidence is retained. B1 remains PENDING for Drawer review.

The inconsistent row/column hover tooltip titles were aligned: `Drag to reorder Matrix columns. Keyboard: Alt+Left/Right` and `Drag to reorder Matrix rows. Keyboard: Alt+Up/Down`. This changes title copy only; accessible labels, commands, drag behavior, hit areas and ordering semantics are unchanged. Live DOM inspection confirmed the strings. No Human re-review of the updated copy is claimed.

Independent Drawer tab 1417722581 contains 18 scroll sample Dimensions with the Dimension Pool Drawer open. DOM supporting evidence confirms modal page scroll lock and an independently scrollable Drawer list. Human review remains for Tab/Shift+Tab containment, focus restoration, background wheel lock, Drawer-only scrolling, normal page scrolling after close, and ordinary/narrow control usability; touch remains unconfirmed. B2 should resume only in the preserved Human Dataset workspace. This browser inventory did not expose a loaded Dataset workspace, so no replacement was attempted. B2 steps: inspect Dataset Entity actions; edit a Temporary Entity Name/Description and confirm identity/value retention; start Dataset replacement to its warning, choose Cancel/Keep current workspace, and verify retention; do not complete Replace.

Canonical totals remain 15 Human PASS / 4 PENDING / B3 NOT RUN (R4, U1, B1, B2 pending). No runtime behavior, Dataset, Core, Extension, schema, Validator or portable semantics changed. No acceptance or closure.


## B1/B2 Human PASS and tooltip validation - 2026-10-04

Human explicitly confirmed the full canonical B1 criteria: Matrix handle behavior, Drawer focus containment/restoration, background scroll lock, internal scrolling, restored page scrolling and narrow control usability. Touch remains unconfirmed; the canonical B1 criteria require narrow/ordinary control usability, and separately record touch as unconfirmed rather than a required pass gate. B1 is PASS (Human).

Human explicitly confirmed B2 in the preserved Apollo 11 Dataset workspace: Dataset Entity actions had no executable mutation, Temporary Entity Name/Description edits retained identity and value 0.45 in Profile and Matrix, replacement warning preceded mutation and described temporary-data loss/no recovery, Keep current workspace retained the Dataset and temporary work, no Dataset write-back/export was present, and Replace workspace was not executed. B2 is PASS (Human).

The canonical evaluation guide now records 17 Human PASS / 2 PENDING / B3 NOT RUN; only R4 and U1 remain pending. The row/column tooltip title-only change uses matched sentence structure with target and correct Alt command. node --check passed, the focused Prototype suite passed 24/24, and git diff --check passed for the current working tree. Live Edge accessibility inspection after reload confirmed both updated title strings; reload was confined to the newly created independent tab and its local fixture, while preserved Human sessions were untouched.

No other runtime behavior or Dataset/Core/Extension/schema/Validator/portable semantics changed. At this point in the dated progression, no overall Prototype 2 acceptance, closure or commit had been performed; the later closure record below supersedes that status.

## R4/U1 Human PASS and pre-closure readiness audit - 2026-10-04

Human explicitly reconfirmed **R4 PASS** across Profile, Matrix, Radar and
Quadrant for all five unlike ranges (`-10..-2`, `5..25`, `-3..9`,
`0.0001..0.0009`, `1000000000..9000000000`), including lower/midpoint/upper
positions, non-zero midpoints and tiny/huge value inspectability. Human also
reconfirmed **U1 PASS** for short and near-240-character descriptive unit text,
all four views, narrow presentation, full-text recovery through Dimension Edit
and the 240-character Prototype-local guard. These are Human results; earlier
fixture and machine observations remain supporting evidence only.

The canonical evaluation guide now reports **19 Human PASS / 0 PENDING / B3
NOT RUN**. B3 remains NOT RUN because there is no genuine existing Prototype 1
legacy session fixture; no artificial fixture was created and automated
compatibility coverage remains supporting evidence. The guide also states that
a scope-wide success claim was barred while any case remained unrun. It does not
explicitly state whether an overall bounded-scope acceptance may nevertheless
be recorded with B3 acknowledged as NOT RUN. Final acceptance readiness needs
Human resolution of B3's effect on the acceptance boundary. This record does
not reinterpret that rule or record overall acceptance/closure.

The known Quadrant resize/scroll connector defect and waiting-Entity plot-click
discoverability remain separately documented follow-ups; neither appears as a
canonical case or stated acceptance blocker. They were not changed here. No
runtime, Dataset, Core, Extension, schema, Validator, portable semantics,
production architecture, product name or release identity changed. This was
the pre-closure status; the subsequent final Human decision is recorded below.

## Final Human acceptance and closure - 2026-10-04

Human explicitly accepted and closed the bounded, application-local Prototype 2
scope with canonical evaluation status **19 Human PASS / 0 PENDING / B3 NOT
RUN**. B3 remains NOT RUN because no genuine existing Prototype 1 legacy-session
fixture exists. Human knowingly accepted this missing legacy-session browser
evidence as a limitation of this closure. B3 is not Human PASS; no artificial
fixture was created. Do not imply that B3 passed or that every evaluation item received Human PASS.

This closure is limited to the implemented application-local Prototype 2
behavior and the Human-reviewed canonical cases. The Quadrant resize→scroll
connector defect and waiting-Entity plot-click discoverability remain separate
follow-ups, unchanged and not closure blockers. Portable Dimension/value
semantics, Observation model, Dataset write-back/export, Core, Extension,
schema, Validator, production implementation/repository/architecture, product
name and release identity remain unadopted and outside scope. No runtime,
Dataset or schema behavior changed for closure.
