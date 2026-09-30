# E2R Cross-App Locale Public Publication Verification

Date: 2026-10-01

Status: **PUBLICATION VERIFIED FOR THE AUTHORIZED REVISIONS**

## Scope

This is the post-publication verification checkpoint for the already-closed
Cross-App Locale recipient-preference workstream and the Human-accepted Hub
Self-Description visual follow-up. It records public state after their separate
publication transactions; it does not redefine either acceptance authority or
reopen Cross-App Locale. Detailed locale semantics remain in the
[recipient-preference design authority](cross-app-locale-startup-v0-recipient-preference-design.md)
and [acceptance record](e2r-cross-app-locale-recipient-preference-implementation1-acceptance-preparation.md).
The Hub visual decision and local Human visual acceptance remain in the
[visual hierarchy result](../hub/self-description-visual-hierarchy-follow-up-result.md).

## Public revisions and deployment evidence

| Repository | Public `main` | Automated Pages evidence | Verification |
|---|---|---|---|
| E2R Hub | `a588cb9342064ec21d1de21cab466bcaac97beab` | Run `36784811029`, completed successfully; workflow head SHA matched | Public browser checks passed |
| LiaisonScape | `b93e9762ca2baa7e29d0dac4b99bb27970f4b618` | Run `36785122772`, completed successfully; workflow head SHA matched | Public browser checks passed |
| E2R-SPEC | `d8c3e4e2917431294066b7193cfced1ce60f072a` | No repository workflow was configured for this publication | Public raw-document checks passed |
| NarrativeLine | `eb583720df89797a1acf682b5cea747bc25e0cc6` | Not part of this publication | Unchanged |

Hub public verification confirmed the English and Japanese root `lang` values,
Cedar recipient locale and matching Dataset variants, and the Self-Description
section without its former tinted background. Its section separation, content,
and actions remained present. No browser console error was observed.

LiaisonScape public verification covered both saved/requested locale conflict
directions. The localized action labels matched the accepted NarrativeLine
copy; the dialog root language matched the saved preference. Choosing the
requested language opened the expected Cedar graph while preserving the saved
preference. No page or console error was observed.

The E2R-SPEC public revision exposed the current Cross-App Locale authority,
Hub visual result, and recipient-preference design document at their expected
public paths (HTTP 200). Cross-App Locale remains CLOSED. NarrativeLine was not
changed by this transaction.

## Transaction boundary

The publication consisted of the separately authorized fast-forward pushes to
Hub `main`, LiaisonScape `main`, and E2R-SPEC `main`, with the Hub and
LiaisonScape Pages workflows running automatically. No tag, GitHub Release,
force push, or manual artifact publication was performed. No other repository
or public write was part of this checkpoint.

The Hub workflow reported runner/toolchain deprecation notices (Node.js 20 and
Ubuntu runner migration); the run succeeded and these notices did not affect
the verified pages.
