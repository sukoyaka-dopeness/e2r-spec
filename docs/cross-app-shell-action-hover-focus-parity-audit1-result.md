# Cross-App Shell Action Hover/Focus Parity Audit 1

Status: **LOCAL CSS CORRECTION / ACCEPTED / CLOSED**  
Date: 2026-09-23

## Compared surfaces

Current NarrativeLine and LiaisonScape source and their pre-existing dirty work were inspected before the browser pass. The local apps were exercised in the same Chrome engine. Representative wide viewports were 1280px (NarrativeLine) and 1156px (LiaisonScape default); the narrow viewport was 390px. Both locales were checked.

- NarrativeLine Home shell: brand link (the Home route) and locale button.
- NarrativeLine Event Detail: brand link, `Back` navigation button, and locale button.
- LiaisonScape Home shell: brand link and locale button.
- LiaisonScape workspace: brand link, explicit `Home` navigation link, and locale button.

## Findings and correction

Both apps provide a visible keyboard `:focus-visible` treatment on the navigation and locale controls: solid 3px purple `rgb(170, 59, 255)` outline with 3px offset. The focus ring remained visible in EN/JA and at the narrow width; no clipping or horizontal overflow was observed.

Locale controls in both apps use the same light-purple hover background `rgb(245, 233, 255)` and purple border `rgba(170, 59, 255, 0.5)`. NarrativeLine's Header navigation action is a button and already receives that hover from the general button rule. LiaisonScape's workspace Home action is an anchor styled as a bordered button, but had no hover rule; at wide and 390px it stayed white with its neutral border while the adjacent locale button received the purple hover response. This was a localized feedback gap, not an action-hierarchy or focus defect.

Added a single `.header-home-button:hover` rule in LiaisonScape `src/styles.css` using the existing application hover colors. The normal Home appearance, semantics, dimensions, locale behavior, and focus styling are unchanged. After the correction, real browser hover on Home and locale produced the same purple background/border at wide and narrow sizes and in EN/JA. The focused Home link and locale button both retain the same 3px focus-visible ring. No DOM or responsive redesign was made.

## Validation

- LiaisonScape `npm.cmd test`: **641/641 pass**, 0 failed, natural exit (reported duration 78.5s). Existing React/jsdom `attachEvent`/`detachEvent` diagnostics appeared during integration tests but did not fail assertions or prevent natural completion.
- LiaisonScape `npm.cmd run lint`: PASS.
- LiaisonScape `npm.cmd run build`: PASS.
- `git diff --check`: PASS (working-tree line-ending notices only).
- NarrativeLine source/tests were not modified by this parity correction; its existing local test work was left untouched.

## Disposition

The single hover inconsistency is corrected and verified. Cross-app shell action hover/focus parity is **ACCEPTED / CLOSED** for the tested browser/width/locale matrix. Exact DOM/CSS equality is neither claimed nor required. Physical-device/browser-family coverage remains outside this bounded audit.
