# ParameterPlotter Japanese product-language decision packet

Date: 2026-10-07

Status: Human wording decision recorded; whole-surface EN/JA implementation pending

## Established boundaries

The current application source is local `e2r-parameter-plotter` after the
favicon checkpoint `1cf2b8f`. Home, Workspace, Profile, Radar, Quadrant,
Matrix, two drawers, More, replacement and deletion confirmations, Rescale,
Validator diagnostics, recovery messages, and Credits are ordinary user-facing
surfaces. The UI is English-only today. The favicon is implemented and was
reported visible in the Human browser; its HTTP response was independently
verified as `image/svg+xml` after the development-server restart.

The [accepted Cross-App Locale contract](../cross-app/cross-app-locale-startup-v0-recipient-preference-design.md)
sets exact `en`/`ja` startup requests, app-owned explicit preference,
browser fallback, conflict resolution, Header selector, URL synchronization,
and independent Dataset content language. NarrativeLine and LiaisonScape are
implementation references. This application does not yet have a Dataset URL
Handoff path, so locale support must not invent one.

Human already selected ParameterPlotter as Product name and these Japanese
core terms: Dimension = 評価軸 (軸 in narrow context), Assessment = 値,
Profile = プロファイル, Radar = レーダー, Quadrant = 四象限, Matrix =
マトリクス. NarrativeLine and LiaisonScape supply established shared copy for
Dataset = データセット, Entity = エンティティ, More = その他, Credits =
クレジット, and ordinary Home/close/cancel actions. Identifiers, repository names,
Extension identifiers, and Dataset content remain untranslated.

The [Product readiness checkpoint](../../research/exploratory/parameterplotter-public-product-readiness-checkpoint-2026-10-04.md)
explicitly says the selected core terms do not settle all dialog, error,
confirmation, or empty-state wording. The earlier
[Product/UI audit](../../../e2r-parameter-plotter/docs/product-ui-completion-audit-2026-10-07.md)
also identifies EN/JA Product language as a Human choice. Those records predate
the current Home and favicon implementation, but the wording boundary remains.

## Human wording decision

Human selected the following Japanese wording for the existing
ParameterPlotter-specific controls. It describes existing behavior and does
not select new behavior.

| Current English surface | Existing behavior | Selected Japanese wording |
| --- | --- | --- |
| `Fill blanks` | Generates in-range values for currently unassessed fields and writes Candidate Assessments into the Dataset | `未設定の値をランダム入力` |
| `Rescale` review and approval | Shows a proposed linear recalculation of existing Assessment values before an atomic Dataset edit | `値の再計算を確認` / `再計算を適用` |
| `Entity Pool` / `Dimension Pool` drawers | Lists and manages Dataset Entities / Candidate Dimensions | `エンティティ一覧` / `評価軸一覧` |
| Browser workspace versus E2R JSON Export status | Distinguishes same-browser recovery from portable Dataset output and unsaved/degraded state | `ブラウザー内の作業状態` / `E2R JSONを書き出す` / `ブラウザー内の作業状態を保存できていません` |

The proposed per-Dimension wording was not adopted as a new surface; the
current icon action may receive an accessible label, but no new visible
per-Dimension control is introduced. Routine sentence-level translations may
follow established Cross-App terminology and be reviewed in Human Browser
Acceptance. If the selected Fill blanks wording visibly breaks layout, return
to Human rather than shortening it.
The sample action may continue to open the existing English Ashen Crown Dataset
under either UI locale: a UI locale choice does not choose or translate Dataset
content. A Japanese Dataset variant is a later, separately authored milestone.

No locale runtime or sample payload was changed in this decision packet.
After this wording decision, implementation can cover all current ordinary
user-facing surfaces and run focused automated checks; it must still report
machine evidence separately from Human Browser Acceptance.
