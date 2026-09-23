# NarrativeLine Narrow Header Robustness Acceptance 1

Status: **LOCAL ACCEPTANCE PASS / PUBLIC ARTIFACT OBSERVED / SOURCE REVISION UNVERIFIABLE**  
Date: 2026-09-23

## Scope and source comparison

This checkpoint verified the existing Header-only robustness correction without changing its policy. In the current NarrativeLine worktree, `AppFrame.tsx` adds `app-header--with-navigation-action` only when a navigation action exists, and `index.css` uses that modifier for the three-column grid. The Header buttons remain non-wrapping. This matches Session 0094's recorded correction. The local worktree already contained these dirty changes before this acceptance; this checkpoint did not edit NarrativeLine source or tests.

The prior Session 0094 statement that browser acceptance and tests were pending was accurate then, but is superseded for the local/browser scope by the checks below. The served Public assets remain a distinct build: they expose CSS `index-BY6C2XYG.css` with the old `:has()` selector and no modifier class; the Public artifact has no identifiable source revision.

## Acceptance evidence

At a 390px browser viewport, both the local app and the live Public site were opened read-only. The app viewport's effective document width was 375px on screens with a 15px scrollbar; measurements below use element rectangles and `documentElement.clientWidth`/`scrollWidth`.

- Local cold load: Header had brand + locale control, no navigation modifier, and no horizontal overflow. The existing locale switch and sample flow were exercised.
- Local SPA navigation: opening the sample, selecting an Event, and opening Event Detail added the navigation action and the modifier class.
- Local EN/JA on Event Detail: the visible navigation and locale buttons both stayed at `y=16..52`, including `Back` + `日本語` and `戻る` + `English`. Document width did not exceed client width.
- Public cold load + SPA navigation: current live site also kept `Back` and `日本語` at `y=16..52` in the tested Chromium browser; after switching locale, `戻る` and `English` remained at `y=16..52`. Public document width matched its client width. This records observed behavior, not proof that the deployed code contains the local correction.
- Keyboard focus-visible: keyboard Tab traversal focused the Header controls in the local narrow flow; `:focus-visible` matched and the existing solid outline remained visible.
- Reload: reloading the detail URL returned to the app's existing Home route; cold-load Header remained within the viewport. The detail action was then reached again through SPA navigation.

## Validation and boundary

NarrativeLine `npm.cmd test`, `npm.cmd run lint`, and `npm.cmd run build` passed in the existing dirty worktree. The automated suite exercises no direct narrow Header geometry assertion. No source/test changes were made in this checkpoint.

No Public deployment, physical-device run, responsive redesign, or change to navigation/locale policy was made. The local robustness correction and tested browser acceptance are **ACCEPTED / CLOSED** for this bounded checkpoint. The original device-specific observation is not claimed disproven; if acceptance requires the exact affected device or a deployed artifact containing the local correction, that remains a separate Human-authorized verification/deployment item.
