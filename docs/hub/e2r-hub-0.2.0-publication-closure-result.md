# E2R Hub 0.2.0 Publication Closure Result

**Status: PUBLIC RELEASED / EXACT PAGES DEPLOYMENT AND LIVE EN/JA HUB VERIFIED / CLOSED**

This result records the completed public publication transaction for E2R Hub
`0.2.0`. It closes Hub publication only. Cross-App live interoperability and
Cross-App Locale remain separate workstreams.

## Public revision and deployment

- Public Hub `main` is `6765bcbcc95658eef944636b3afd248cc3a588e0`, commit
  `chore: align Hub credits with publication date`.
- The approved fast-forward moved public `main` from
  `71ae8ab8c3255d91c89dd68ce788540dc13bba89` to that exact candidate SHA.
- GitHub Pages workflow
  [36748968007](https://github.com/sukoyaka-dopeness/e2r-hub/actions/runs/36748968007)
  completed successfully. Its `head_sha` is the exact public revision above;
  the `Deploy to GitHub Pages` step succeeded.
- The GitHub Pages deployment record is SHA
  `6765bcbcc95658eef944636b3afd248cc3a588e0`, state `success`, with environment
  URL <https://sukoyaka-dopeness.github.io/e2r-hub/>.
- Publication Credits show Application `E2R Hub 0.2.0`, First release
  `2026-08-18`, and Updated `2026-10-01` in both English and Japanese.

## Live Hub verification

The deployed Hub was opened and checked in English and Japanese. The locale
switch changed the visible Home and sample copy between the two languages.
Both locales presented six Gallery samples, including Cedar Observatory, and
the separate E2R Self-Description entry.

The Hub presented NarrativeLine and LiaisonScape links, Documentation, and
Sources / License. NarrativeLine and LiaisonScape documentation links were
present in both languages. Cedar Observatory EN and JA entries each exposed
Handoff links to both applications and their Dataset source URLs. This records
the published Hub entry and link presentation; it does not claim a new
end-to-end Hub-mediated interoperability closure.

## Reachability and visible runtime check

The following returned HTTP 200:

- Hub, NarrativeLine, and LiaisonScape landing pages;
- E2R documentation, sample provenance / Sources / License, and NarrativeLine
  and LiaisonScape EN/JA User Guides;
- all six Gallery Dataset families in both EN and JA: Berlin Wall, Apollo 11,
  Lighthouse Restoration, The Ashen Crown, Titanic: Final Voyage, and Cedar
  Observatory; and
- the deployed Hub JavaScript and CSS assets.

No visible runtime error or unexpected diagnostic appeared during the live
browser review. This records the observed browser and public endpoints; it does
not claim coverage of other browsers, devices, or unseen runtime conditions.

## Transaction boundary

The only public writes were the authorized fast-forward push to `main` and its
normal automatic GitHub Pages deployment. No tag, GitHub Release, manual
artifact publication, or other public write was made. The local Hub repository
and `origin/main` matched the exact public SHA after deployment.

Hub `0.2.0` publication is **CLOSED**. Cross-App live interoperability,
Cross-App Locale, and other downstream work remain separate and were not
closed or started by this transaction.
