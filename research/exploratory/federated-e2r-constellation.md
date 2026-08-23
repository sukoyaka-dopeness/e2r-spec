# Federated E2R Constellation — Exploratory Research Seed

Status: Exploratory / Research Seed

This document explores whether independently published E2R fragments and
Relations could form a user-owned, distributed constellation without changing
the E2R Core. It is a research question, not an accepted protocol, schema, or
roadmap commitment.

## Central question

Why would a user publish an E2R fragment, accept inbound Relations, or connect
their work to another user's public material? The research should examine
participation incentives, ownership, discovery, attribution, moderation, and
the cost of publishing.

## 1. Core concept

Each participant publishes independently owned E2R fragments. A participant may
publish an external Relation from a local E2R object to a public URI and object
identifier owned by another participant. A browser or other client could
resolve those references into a virtual graph while leaving each source Dataset
self-contained and unchanged.

## 2. E2R Core boundary

Federation must not be assumed to be a Core Relation between Datasets. Possible
future responsibilities include a Federation layer, External Relation layer,
or Publishing / Discovery Extension. URI syntax, identity semantics,
signatures, versioning, and preservation rules remain open questions.

## 3. User-owned storage and hosting independence

GitHub Pages is one possible implementation path, not a protocol requirement.
Other compatible hosts may include ordinary web hosting, object storage,
static-site services, self-hosted servers, or a future simple E2R hosting
service. Easy mode and self-host mode should use the same eventual publishing
contract where practical.

## 4. Manifest / publication index

A publisher manifest may describe:

- publisher or profile identifier;
- public fragment list;
- public external Relation list;
- update information;
- optional license;
- optional notification endpoint or feed; and
- discovery metadata.

An additional research question is whether the manifest should record the URLs
of manifests belonging to users with whom the publisher is directly connected.
If each participant can follow those manifest links, a client could hop from
one manifest to connected manifests and gradually expand its discovery graph
without requiring one central index.

This hop model requires bounded exploration of depth, cycles, freshness,
privacy, opt-in visibility, authorization, rate limits, spam, and trust. A
direct connection in a manifest must not automatically imply endorsement,
permission to crawl all content, or permission to create Relations on behalf of
the other user.

The manifest format and discovery semantics are not decided here.

### Initial assessment

Manifest hopping has meaningful technical and conceptual potential. It can
support distributed ownership while allowing discovery to grow from local
connections, without making a central index mandatory. The idea is especially
promising as an opt-in discovery mechanism rather than as an implicit social
graph or universal crawler.

The first experiments should impose explicit hop-depth limits, cycle
detection, caching, timeouts, visibility rules, and crawl policies. A direct
manifest link should be treated as a reference whose meaning is explicit; it
must not automatically mean endorsement, permission to crawl all published
content, or permission to create Relations for another user. These constraints
make the idea more portable and safer without requiring a single hosting
provider or registry.

## 4.1 Personal E2R Space / Suite / Asset Hosting

A further research direction is a user-owned **Personal E2R Space**: a
public/private-compatible storage and hosting space that is useful before a
user participates in federation. The name is provisional; no product or
protocol terminology is settled.

Conceptually, such a space could contain a manifest or publication index,
multiple self-contained E2R Datasets, user-owned image and icon assets,
public fragments and External Relation references, and a Personal E2R Suite
or launcher for the relevant E2R applications. This would make federation an
optional consequence of personal utility rather than the only reason to
publish. The space would organize owned resources; it would not merge
independently owned Datasets into one shared Dataset.

Asset hosting is especially relevant to LiaisonScape, where a future Entity
icon or image may be user-selected. Stable HTTPS asset references, embedded
versus external assets, stable identity, replacement and deletion,
portability, licensing, attribution, caching, CORS, Content Security Policy,
MIME validation, tracking, and SVG active-content risks require separate
research. This does not authorize a Core schema change, an icon extension, or
a particular asset-reference syntax. Bundled icons, user-hosted raster images,
and arbitrary SVG have different safety profiles.

A future Personal E2R Suite could list Datasets and assets, launch NarrativeLine
or LiaisonScape, and construct existing `datasetUrl` handoffs. GitHub
repositories and GitHub Pages are possible implementation options, not
protocol requirements; ordinary hosting, object storage, Pages services,
self-hosting, or a future E2R-managed host remain possible alternatives.
Read-only acquisition through `datasetUrl` is separate from write-back, which
would require authentication, authorization, versioning, concurrency and
conflict handling, backup, rollback, and portable deletion semantics.

The primary hypothesis is that personal storage, backup/version history, asset
hosting, Dataset organization, and application launching may provide value even
without global constellation participation. Selective publication can then
lead to External Relations and discovery. This remains a participation
incentive hypothesis, not a product commitment.

## 5. Notification and discovery

Possible mechanisms include explicit subscriptions, follow lists, public
registries, feeds, crawlers, ActivityPub-like discovery, Webmention-like
notifications, or manually submitted indexes. Ownership may remain distributed
even if one or more convenience indexes are centralized.

## 6. Global Constellation Browser

A future browser could combine independently hosted fragments and external
Relations into a virtual graph or timeline while distinguishing original,
third-party, inbound, and outbound Relations. It must preserve source
ownership and provenance and should not imply that a combined view is one
canonical Dataset.

## 7. Participation incentives

Potential value includes creative lineage, citation, annotation, shared-world
construction without shared ownership, discovery, and pseudonymous
participation. “Publish a fragment” should be evaluated against the stronger
question of whether participation creates useful connections or recognition.

## 8. One-more-idea questions

### Temporal constellation

Could fragments and connections be explored as both a global graph and a
global timeline?

### Interpretation graph

Could multiple users attach different interpretations to the same public
fragment while keeping those interpretations distinguishable?

### Creative lineage / citation

Could a client represent how later fragments cite, remix, or respond to
earlier fragments without conflating ownership?

### Shared-world without shared ownership

Could Relations create a shared world model while each participant retains
control of their own fragments?

### Discovery / exploration

Could manifest hopping and other discovery mechanisms create useful
serendipitous exploration without requiring a universal index?

### Persona / pseudonymous constellation

Could pen names or fictional personas participate without requiring real-world
identity disclosure?

### How should E2R EventObjects be used?

The research should explicitly examine whether `EventObject`s are useful as
published occurrences, publishing events, citations, responses, notifications,
or temporal anchors across independently owned fragments. It must distinguish
an EventObject representing a domain occurrence from an application or
protocol event such as “published,” “discovered,” or “responded to.” The study
should determine whether those meanings belong in ordinary E2R data, an
Extension, or a federation-layer record, and how identity, provenance,
ordering, updates, and deletion would work across publishers.

### Initial assessment

EventObjects have strong potential as temporal anchors for published
occurrences, citations, responses, and creative lineage. The main technical
boundary is semantic: a domain EventObject such as “a meeting occurred” should
not be silently conflated with a protocol event such as “this fragment was
published” or “this user discovered that fragment.”

The safer research path is to compare ordinary EventObjects with Extension or
federation-layer records for those protocol meanings. Identity, provenance,
ordering, update, and deletion behavior should be tested across independently
owned publishers before considering any Core change. This preserves the Core's
minimality while still allowing a future constellation browser to represent
temporal and causal relationships richly.

## 9. Relationship with existing concepts

Related areas include Git-backed notes, digital gardens, Personal Knowledge
Management, Federated Wiki, IndieWeb, Webmention, ActivityPub, Solid,
linked-data systems, collaborative worldbuilding, and citation systems. These
are comparison topics only; no external protocol is adopted by this seed.

## 10. Major risks and open problems

- stable identity when URLs or hosts change;
- deletion, versioning, and stale references;
- trust, abuse, spam, crawling, and moderation;
- licensing and the difference between public and reusable;
- privacy for private, unlisted, and public fragments;
- scale, caching, incremental discovery, and hop limits;
- host longevity and account deletion; and
- onboarding for general users.

## 11. Non-goals / not decided

This seed does not decide:

- an E2R Core schema change;
- an External Relation schema;
- a manifest schema;
- a protocol name;
- a hosting provider;
- GitHub as a required dependency;
- ActivityPub or Webmention adoption;
- a central index or fully decentralized discovery;
- authentication, moderation, monetization, roadmap priority, or schedule.

## 12. Possible future experiments

1. Two local mock manifests with bounded external Relations and manifest hops.
2. Two static hosted manifests resolved by a prototype browser.
3. Original versus third-party Relation attribution in a combined view.
4. A small EventObject experiment comparing domain occurrences with publishing
   and response records.
5. A concept test for whether users understand and value manifest hopping.

## Knowledge Candidate Check

This remains a research seed. No `ai-knowledge` entry is warranted until an
independent experiment or explicit project decision produces a reusable rule.
