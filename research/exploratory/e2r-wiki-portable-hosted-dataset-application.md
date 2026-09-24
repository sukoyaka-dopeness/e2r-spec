# E2R Wiki / Portable Hosted Dataset Application Research

Status: **EXPLORATORY / NOT ACTIVE / NOT AN IMPLEMENTATION AUTHORIZATION**

Checked: 2026-09-25

This research explores a Wiki-like application built around portable E2R
Datasets. It does not change E2R Core, any Extension or schema, current
application responsibilities, or Roadmap priority. It is related to—but
narrower than—the [E2R Suite long-term research](e2r-suite-long-term-milestone.md)
and distinct from the existing [anonymous Dataset sharing research](anonymous-dataset-sharing.md),
which focuses on public sharing and provider-neutral publication questions.

## Core hypothesis

A conventional Wiki is often experienced as pages joined by links. An E2R Wiki
might instead use one self-contained Dataset as structured information that
supports several coordinated readings:

- **Entity as subject/article:** an Entity is a subject that can have an
  authored article body and structured connections to other subjects.
- **Event as a shared occurrence:** an Event describes something that happened
  in the subject world, not a Wiki edit-log entry. Multiple Entity articles
  could refer to the same Event, allowing one occurrence to be reused across
  topics and viewed in a timeline.
- **Relation as an inspectable connection record:** a Relation connects Core
  Objects and could be presented with its own label, explanation, and—if a
  suitable existing or future representation permits—source/provenance. This
  is an application-level presentation hypothesis, not a proposal to make a
  Relation an Entity or Event, permit Relations as endpoints, or redefine
  Core Relation semantics. Core `Relation.name` is a human-readable label, not
  an interoperable semantic relation type. A controlled relation vocabulary
  belongs to separate Semantic / Dictionary research.
- **Multiple views of the same Dataset:** an article view, an Event timeline,
  and a Relation graph could be alternative navigations over the same stored
  structure, rather than separate page/link databases.

The motivating contrast is not “unstructured text versus automatic
understanding.” Freeform article content can remain the authored source of
prose while Events and Relations are separately authored structured data.
Article, timeline, and graph views could be assembled from explicit Dataset
content without requiring text mining or semantic inference. A timeline would
only show explicit temporal data the consuming application can interpret; it
must not infer dates from prose as a required capability.

## Long-form article content question

A Wiki may need substantial article content in addition to a compact summary
shown in lists or previews. This suggests researching a long-form content
capability distinct in purpose from the optional Core `description`. The Core
currently describes `description` as a longer human-readable description but
does not define article structure, formatting, or a body/content contract.

Possible representation locations to compare include an application-local
document, a future Core field, a Content/Text Extension, another Extension,
or a linked/attached resource. Markdown is one possible format to investigate,
not a selected representation. This record selects none of these, does not
assert that a Core `body` field exists, and does not authorize a schema change.
The portable/export behavior and preservation of content by applications
that do not recognize its representation are part of that future comparison.

## Portable Dataset and application boundary

The portable artifact remains an ordinary, self-contained E2R Dataset. A
server-hosted Wiki is one possible way to publish or obtain such an artifact,
not a prerequisite for Dataset use. Opening a local Dataset, editing it
locally, validating it, and exporting it should not depend on network or
server availability. A hosted service could be an optional acquisition or
publication surface; the downloaded/exported Dataset should remain usable by
other E2R applications and through existing handoff mechanisms.

Existing Dataset Handoff v0 already describes public Dataset URL acquisition
without requiring a Hub catalog or central E2R storage service. This research
does not extend that transport contract. Private/authenticated Dataset
handoff, account identity, server-side editing credentials, or new Handoff
behavior would require separate design and acceptance.

The following are distinct possible operations and should not be conflated:

1. browse a public Dataset;
2. obtain/download a Dataset and edit a local copy;
3. export or hand off that local Dataset to another application; and
4. write changes back to a hosted canonical Dataset.

The first three can be explored without deciding the fourth. Hosted write,
multi-user editing, access control, concurrent updates, conflict handling,
revision/history, recovery, and identity are unresolved architecture topics.
Research must also consider whether an exported Dataset is a snapshot, how a
server indicates changed content, and how a writer avoids silently replacing
another edit. No versioning, locking, merge, or authorship model is selected.

## Server-hosting candidates

One candidate storage model keeps the complete E2R JSON Dataset as a canonical
server-side object, instead of requiring Entity/Event/Relation to be
materialized as database rows. Optional metadata, lookup indexes, or caches
could be evaluated separately and would not become the portable Dataset's
semantic source of truth merely by existing. An alternative normalized or
indexed storage model could also be considered if it can produce a faithful,
self-contained Dataset export. Neither model is selected.

For a small MVP research comparison, a web client plus Worker/API and object
storage is a concrete candidate composition. Cloudflare products are useful
examples for that comparison, not an adopted provider or E2R requirement:

| Candidate | Possible role to investigate | Boundary / open question |
| --- | --- | --- |
| Workers Static Assets (or Pages static assets) | Deliver a web client | Static delivery and dynamic Worker/Functions invocations have different limits and billing. The app must also work when offline from a locally obtained Dataset. |
| Workers / Pages Functions | Optional HTTP API or server-side mediation | Request limits, CPU, upload/request-size limits, abuse controls, account requirements, and cost need workload-specific review. |
| R2 | Candidate object storage for a complete E2R JSON Dataset | Evaluate object identity, update permissions, retention, deletion, snapshots, and consistency; do not assume provider storage itself defines Dataset identity or history. |
| D1 | Optional structured catalog/index or other metadata experiment | Not required to split the canonical Dataset into rows. A database could be supplemental or an alternative storage representation only after portability and faithful-export requirements are tested. |
| Workers KV | Optional small lookup/cache experiment | Its role, consistency characteristics, and limits would need to fit a concrete access pattern; it is not selected as canonical Dataset storage. |

### Cloudflare documentation snapshot (checked 2026-09-25)

These are time-sensitive observations from Cloudflare's official documentation,
not a forecast, service recommendation, cost estimate, or guarantee that a
future Wiki can operate at no cost. Page “last updated” dates are recorded
where shown; all figures and terms must be rechecked before any decision or
public claim.

| Product/docs page | Officially documented snapshot relevant to this exploration |
| --- | --- |
| [Workers limits](https://developers.cloudflare.com/workers/platform/limits/) (page last updated 2026-09-05) | Workers Free documents 100,000 requests/day and 10 ms CPU time per invocation. Request body limits depend on Cloudflare account plan; the page lists 100 MB for Free. |
| [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/) (page last updated 2026-08-28) and [Static Assets billing/limitations](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/) (page last updated 2026-04-23) | Static asset requests are documented as free and unlimited; requests invoking Worker code use Workers plan allowances/pricing. These are different request paths, not a blanket “free hosting” guarantee. |
| [R2 pricing](https://developers.cloudflare.com/r2/pricing/) (page last updated 2026-08-07) | Standard storage free tier lists 10 GB-month, 1 million Class A operations/month, and 10 million Class B operations/month; Internet egress is listed as free. The page says the free tier applies to Standard, not Infrequent Access storage. |
| [D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/) (page last updated 2026-04-21) | Workers Free allowances list 5 million rows read/day, 100,000 rows written/day, and 5 GB total storage. The page explains that exceeding daily limits causes queries to fail rather than silently extending the free allowance. |
| [Workers KV limits](https://developers.cloudflare.com/kv/platform/limits/) (page last updated 2026-04-21) | Free limits list 100,000 reads/day, 1,000 writes/day, and 1 GB storage/account and per namespace. |

The components have separate usage models and failure modes. Combining their
free allowances does not establish an end-to-end free service, a predictable
bill, or suitability for an actual workload. Free-plan exhaustion, account
terms, access control, operational metadata, privacy, data durability,
provider availability, and migration/export behavior remain research inputs.

## Questions for later research

1. Which Wiki tasks benefit from structured Event and Relation authoring rather
   than ordinary pages and hyperlinks, and what minimal sample demonstrates
   that benefit?
2. What should constitute an article body distinct from a compact description,
   and how can unknown applications preserve it without a Core decision being
   presumed?
3. Which Events should appear in a timeline, and what explicit temporal data
   must be present before a view can place them?
4. How should a Relation be inspected and described at application level while
   remaining within the existing Core endpoint and vocabulary boundaries?
5. Can one portable Dataset support useful article, timeline, and graph views
   without duplicating authored facts or deriving semantics from prose?
6. Which operations should be local-only, public-read, hosted-write, or
   handoff-based, and what happens when the network is unavailable?
7. Is a complete JSON object a suitable canonical server storage unit for
   expected sizes and writers, or are separately derived indexes needed?
8. What are the minimum safe limits, access-control, abuse, privacy, recovery,
   revision, and cost controls for any private or public experiment?
9. Which hosting/storage candidate best fits a bounded workload after current
   primary documentation and account/terms requirements are reviewed?

## Explicit non-decisions

This research does not authorize or adopt:

- a Wiki product, repository, implementation, deployment, or public service;
- Cloudflare or another hosting/storage provider, account, resource, or paid
  contract;
- user accounts, authentication, authorization, multi-user write access, or
  an identity model;
- a server-side canonical storage architecture, object versioning, a
  conflict/history model, or row-based materialization;
- a Core `body` field, Content/Text Extension, Markdown, or another long-form
  representation;
- Wiki-specific semantic vocabulary or new Event/Relation semantics;
- automatic Event/Relation extraction or inference from article text;
- a change to Core, schema, Extensions, Dataset Handoff, application
  responsibilities, or Roadmap priority.

Any of these choices requires its own evidence and, where it changes an
authority or contract, a Human-reviewed decision checkpoint.
