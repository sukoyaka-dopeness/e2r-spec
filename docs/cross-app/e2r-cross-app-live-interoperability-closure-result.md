# Cross-App Live Interoperability Closure Result

**Status: HUMAN BROWSER VERIFIED / CLOSED — HUB-MEDIATED CEDAR DATASET ACQUISITION**

## Closure scope

This checkpoint closes the bounded live interoperability path from the public
E2R Hub Cedar Observatory entry through acquisition by the public receiving
application, with the expected Timeline or Entity graph opening. It records
four Human Browser checks across both locales and both receiving applications.

It does not close the Cross-App Locale recipient-preference workstream or
establish a shared startup-locale contract. It does not reopen any application
publication closure. NarrativeLine's later Japanese User Guide correction is
a documentation-only follow-up, not a feature-release reopening.

## Public revision baseline

The Human Browser checks used these reported public revisions:

| Repository | Public revision |
| --- | --- |
| E2R Hub | `6765bcbcc95658eef944636b3afd248cc3a588e0` |
| NarrativeLine | `eb583720df89797a1acf682b5cea747bc25e0cc6` |
| LiaisonScape | `75400c65b64938aee5c74efa8bd772bb6f1851ea` |

The NarrativeLine baseline includes its documentation-only Japanese User Guide
follow-up after the `0.2.0` feature publication.

## Human Browser evidence

The Human confirmed all four public end-to-end routes:

| Route | Acquisition and receiving view | Visible errors / diagnostics |
| --- | --- | --- |
| Hub EN Cedar → NarrativeLine | Dataset acquisition succeeded; Cedar Observatory Timeline opened normally. | No special error message or unexpected visible diagnostic. |
| Hub JA Cedar → NarrativeLine | Dataset acquisition succeeded; Cedar Observatory Timeline opened normally. | No special error message or unexpected visible diagnostic. |
| Hub EN Cedar → LiaisonScape | Dataset acquisition succeeded; expected Cedar Observatory Entity graph opened normally. | No special error message or unexpected visible diagnostic. |
| Hub JA Cedar → LiaisonScape | Dataset acquisition succeeded; expected Cedar Observatory Entity graph opened normally. | No special error message or unexpected visible diagnostic. |

The evidence establishes actual Hub-to-recipient Dataset acquisition and the
expected receiving view. Hub link presence or source reachability alone would
not meet this closure bar.

## Disposition

**Cross-App live interoperability: CLOSED** for the four Cedar Observatory
EN/JA Hub-to-NarrativeLine and Hub-to-LiaisonScape routes above.

**Cross-App Locale recipient preference: OPEN / closure not established.**
Successful EN and JA Dataset routes do not establish the separate shared
startup-locale or recipient-preference contract. That workstream retains its
existing authority and decision boundary.

This record does not authorize runtime changes, application publication
changes, or any public write.
