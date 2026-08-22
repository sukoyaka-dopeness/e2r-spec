# Project Support and Monetization Research

Status: exploratory research topic

This document records a possible funding direction for E2R Hub and related
open-source work. It is non-normative and does not change E2R Core, Extensions,
Dataset format, or application behavior.

## Concept

E2R Hub may eventually include a small external support link, such as:

```text
Support this project / 開発を支援
```

The intended model is a free, open-source E2R ecosystem with optional external
support. The Hub should remain an application/distribution surface, not become
a commerce site, subscription service, or payment processor.

## GitHub Pages boundary

The working hypothesis is that a modest donation button or crowdfunding link
may be compatible with GitHub Pages, while using Pages as a general online
business, e-commerce store, or sensitive payment-processing surface may not be.

Before adding a link, verify the current GitHub Pages terms and guidance from
GitHub’s primary documentation. The following boundary should remain explicit:

- acceptable candidate: an external support or crowdfunding link;
- avoid: collecting card numbers, passwords, or bank details on the Hub;
- avoid: turning the Hub into a paid SaaS checkout or storefront;
- avoid: presenting support as required for Dataset access or application use.

## Candidate: GitHub Sponsors

GitHub Sponsors is the first candidate to investigate because it connects
support directly to public open-source development activity. A future Hub
footer could contain a compact Sponsor/support link after the profile is
actually approved and publicly available.

Questions to verify before adoption include:

- eligibility and receiving support in Japan;
- personal-account versus organization profile requirements;
- public-profile requirements;
- Stripe Connect and tax-information requirements;
- review and approval process;
- payout, fee, and currency conditions;
- how the public sponsor profile identifies the maintainer;
- whether the link should point to the maintainer or a project organization.

GitHub Sponsors would not require E2R users to create an E2R account and would
not require the Hub to store user identity or payment information.

## Candidate: PayPal

PayPal is a secondary candidate because an existing account may be available,
but its public identity and privacy behavior require review.

The preferred research direction is not to publish a personal login email or
bank-account information. If PayPal is used, investigate whether a business
profile with a project-facing name and a secure merchant identifier can reduce
unnecessary exposure of a personal primary email address.

This is not a claim of complete anonymity. Payment providers may display
recipient names, public profile information, or payment-link identity to users
and may retain operational or regulatory information. The exact presentation
must be verified using current PayPal documentation and account settings.

## Privacy and identity boundary

The E2R product direction remains identity-light for Dataset users:

- no E2R login required;
- no E2R account database required;
- no donor identity stored by E2R Hub merely to provide a support link;
- no payment credentials handled by the Hub;
- external provider identity must be disclosed only to the extent the provider
  makes it public.

Maintainer transparency and maintainer privacy are separate questions. A
public OSS support profile may identify the maintainer or project while still
keeping private payment credentials out of the Hub.

## Possible rollout

1. Verify GitHub Pages, GitHub Sponsors, and PayPal terms using current primary
   documentation.
2. Decide whether GitHub Sponsors sufficiently represents the E2R project.
3. Create and approve the external support profile, if desired.
4. Add one compact, locale-aware footer link to Hub.
5. Recheck mobile layout, footer behavior, accessibility, and external-link
   labeling.
6. Do not add payment forms, donor tracking, accounts, or Dataset access gates.

No support link should be added to the Hub until the external account/profile
exists and the user explicitly authorizes the application-surface change.

## Open research questions

- Should support identify `E2R Hub`, `e2r-spec`, or the maintainer account?
- Is GitHub Sponsors preferable to a neutral crowdfunding link for this project?
- What public name minimizes unnecessary personal-information exposure while
  remaining transparent about who maintains the project?
- Should the link appear in the footer only, or also in Credits?
- How should English and Japanese labels describe optional support without
  implying a commercial service or required payment?
- What happens if the provider profile is suspended, unavailable, or changed?

## Boundaries

This research does not authorize:

- adding a payment provider dependency;
- collecting payment details in E2R applications;
- requiring accounts or donations to use E2R;
- selling or gating Datasets through the Hub;
- claiming current legal, contractual, tax, regional, or privacy facts without
  rechecking the relevant provider documentation;
- changing the Hub footer before separate implementation authorization.

