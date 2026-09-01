# E2R-managed Personal Storage — Exploratory Research

Status: **Exploratory / Research Direction**
Working terms: **E2R Personal Storage**, **E2R Storage**, **Personal E2R
Space**

This document records a possible user-facing storage and hosting capability
for durable E2R resources. The terms are provisional. This is not an accepted
product name, protocol, provider choice, account design, schema, or
implementation plan.

## 1. Motivation

An ordinary user may want to create and keep a timeline in NarrativeLine,
inspect a graph in LiaisonScape, reuse an icon or image, or maintain a private
dictionary without understanding Git, GitHub, repositories, object stores, or
backend services.

A useful future experience could be:

```text
sign in with a supported identity method
  -> open an E2R Personal Space
  -> save a private Dataset or reusable resource
  -> reopen and manage it later
  -> explicitly publish a revision if desired
  -> share a public URL or handoff
```

This is a convenience, durability, organization, and sharing hypothesis. It
must not make account, network, or central storage a prerequisite for the
basic E2R workflow:

```text
local Dataset -> E2R application -> edit / validate / export
```

The research question is whether personal utility is valuable even when a
user never joins a global federation or publishes anything publicly.

## 2. Relationship with existing research

`federated-e2r-constellation.md` already records a Personal E2R Space,
manifest/index, suite or launcher, asset hosting, and the relationship to
independently owned published fragments. This document expands the managed
personal-storage responsibility that the federation document only sketches.

The responsibilities remain separate:

- **Personal Storage:** durable ownership, private working copies, resource
  organization, and account-scoped management;
- **Federated Constellation:** independently owned public fragments, external
  Relations, discovery, and cross-owner presentation;
- **Anonymous Dataset Sharing:** accountless one-off public sharing; and
- **Personal Journal / workspace research:** journal workflows, local
  persistence, multi-Dataset workspaces, and publication questions.

None of these lanes supersedes the others. A Personal Space may later make
selective publication easier, but login must not silently publish a Dataset,
and storage must not silently merge Datasets.

## 3. Basic-use and accountless principle

E2R's basic use should remain available without:

- an account;
- login;
- a network connection; or
- E2R-managed storage.

Local open, editing, validation, and ordinary export are foundational
application behavior. Personal Storage is an optional convenience and
durability layer. A storage outage or account problem must not make an
already-local Dataset disappear or prevent a user from exporting it.

An application may offer “Save to E2R Storage” as an explicit additional
action. It must not turn an ordinary local save, Dataset validation, or
application startup into an implicit upload requirement.

## 4. Personal Storage concept

An E2R Personal Space could organize resources owned or managed by one user:

```text
Personal E2R Space
├── Datasets
├── Media / icon resources
├── Dictionary / vocabulary packs
├── other reusable packs
└── manifest or workspace index
```

This is a conceptual UI and responsibility model, not a canonical filesystem
layout. A physical provider may store objects differently. Physical
co-location does not make a Dataset, image, dictionary pack, manifest, and
publication record one E2R Core object or one semantic Dataset.

The space might support NarrativeLine, LiaisonScape, a future Hub, and other
compatible consumers. Applications should interact through responsibility
boundaries such as acquisition, save, publish, and share rather than exposing
provider-specific paths to ordinary users. Any future application work should
apply the workspace's incremental, responsibility-based modularization policy;
this research does not prescribe a file layout or runtime module structure.

## 5. Identity provider boundary

The conceptual boundary is:

```text
identity provider -> E2R internal subject -> storage namespace / authorization
```

Google sign-in is a candidate low-friction user experience, not an E2R
protocol dependency. Other OAuth/OIDC providers, passkeys, or another future
authentication method must remain possible.

The following identities must not be conflated:

- identity-provider account;
- E2R internal user or subject identifier;
- storage account or namespace;
- Dataset ID;
- Dataset authorship or legal ownership; and
- hosting location.

A Google user ID must not automatically become a Dataset ID, and a login must
not be treated as proof of copyright ownership. The internal subject model,
account lifecycle, account linking, recovery, and deletion behavior remain
open research questions.

## 6. Google sign-in candidate UX

The candidate ordinary-user flow is:

```text
[Sign in with Google]
  -> E2R account / Personal Space
  -> [Save]
```

This describes a possible UX, not a required authentication protocol. The
browser should not receive a provider secret, storage master key, or
long-lived privileged backend credential. A future security architecture must
separately evaluate PKCE, session lifetime, refresh, revocation, account
linking, provider failure, and the boundary between browser and backend.

Google Drive is also a separate question. Google identity and Google Drive
storage are different capabilities; Google sign-in does not imply a Drive
permission request or Drive as the storage provider.

## 7. Storage-provider abstraction

Ordinary users should not need to know whether E2R Storage is implemented by a
managed object store, a managed application backend, a repository host, or
another service. Candidate implementation families include:

- managed object storage such as an S3-compatible service;
- managed application storage with authentication and metadata;
- Git repository or static hosting;
- user-owned S3-compatible storage; and
- self-hosted or future E2R-managed hosting.

Named services such as Cloudflare R2, Supabase Storage, Backblaze B2, GitHub,
or GitLab are illustrative comparison subjects only. This checkpoint does
not select a provider, create an account, compare current pricing, or make a
claim about free tiers, limits, availability, or legal terms.

The abstraction must preserve the distinction between:

```text
read / acquire -> save private working copy -> publish revision -> share
```

Provider-specific credentials, URLs, quotas, object keys, and APIs should not
become ordinary E2R Dataset semantics merely because a provider stores them.

## 8. Managed, BYO, and hybrid models

Three research models are useful:

### Model A — E2R managed

```text
user -> E2R identity -> E2R-managed storage -> abstract provider
```

This offers the lowest ordinary-user burden, but E2R would carry operational,
privacy, abuse, cost, backup, deletion, and account-recovery responsibilities.

### Model B — Bring your own storage

```text
user -> external provider -> delegated E2R connection
```

This may improve ownership and portability for advanced users, but delegated
permissions, provider differences, setup burden, and failure handling become
substantial.

### Model C — hybrid candidate

```text
ordinary users: E2R-managed storage
advanced users: optional external or BYO provider
accountless users: local-only or Anonymous Dataset Sharing
```

Model C is a preferred research hypothesis because it preserves a low-friction
path while leaving an advanced escape hatch. It is not an accepted
architecture or provider decision.

## 9. Dataset and resource responsibility separation

The storage layer may hold Datasets, media, icons, dictionary packs, and
workspace metadata in one Personal Space. Their responsibilities remain
distinct.

| Resource | Possible responsibility | Open boundary |
|---|---|---|
| E2R Dataset | self-contained interoperable data | Core validity and portability |
| image/icon | reusable media resource | embedding, reference, safety, license |
| dictionary pack | reusable vocabulary resource | ownership, version, compatibility |
| manifest/index | Personal Space organization | separate application/storage contract |
| publication record | public availability and revision | publication/share semantics |
| workspace metadata | launcher, selection, or view preference | not automatically Dataset data |

An icon stored beside a Dataset is not automatically part of that Dataset.
Conversely, an external asset reference must not be adopted without research
into offline behavior, portability, replacement, deletion, licensing,
tracking, MIME validation, CORS, Content Security Policy, and active SVG
content risks. Embedded assets and external assets have different safety and
portability profiles.

## 10. Save, Publish, and Share

The three actions should remain explicit and separate:

```text
private local working Dataset
          |
        Save
          v
private durable E2R Storage copy
          |
      Publish
          v
public or externally retrievable revision
          |
        Share
          v
recipient URL / handoff
```

### Save

Save stores or updates a private durable working copy under an authenticated
user or namespace. It may need revision and conflict handling. Save alone does
not make the Dataset publicly readable.

### Publish

Publish deliberately creates an externally retrievable snapshot or revision.
The publication may be a selected subset or derived Dataset rather than the
private working copy. The mutable-versus-immutable URL choice remains open.

### Share

Share gives a recipient a retrievable URL, handoff, or other explicit access
path to a published state. Sharing does not imply that the recipient can edit
the source, that the recipient has an E2R account, or that the source author
endorses all interpretations of the copy.

Login alone must not publish. Save must not silently share. A public URL must
not be treated as proof of authorship or truth.

## 11. Anonymous Dataset Sharing remains separate

The existing Anonymous Dataset Sharing research describes an accountless,
one-off public lane with a high-entropy share identifier and a possible
separate deletion secret. It should remain separate from authenticated
durable Personal Storage:

| Property | Anonymous Sharing | E2R Personal Storage |
|---|---|---|
| account | not required | authenticated identity candidate |
| purpose | one-off public share | private durable management |
| reopen/edit later | not the primary contract | primary research purpose |
| public availability | explicit share object | explicit Publish then Share |
| identity dependence | accountless lane | namespace and authorization |
| management | share/deletion controls remain open | save, revisions, deletion, recovery |

Personal Storage must not be described as replacing or deprecating Anonymous
Sharing. The lanes can coexist and may use different operational controls.

## 12. Public and private boundary

The default research direction is private by default:

```text
Save -> private
Publish -> explicit public availability
Share -> explicit recipient access
```

Future work must distinguish public, private, unlisted, shared-with-someone,
and revoked or unpublished states. It must also define what happens to a
published revision when the private source is edited or deleted. Unpublish
may affect future retrieval without erasing copies already acquired by
recipients.

Private sharing, group membership, delegated access, signed URLs, revocation,
account deletion, provider outage, and retention are open security and product
questions. No policy is selected here.

## 13. Relationship with current Dataset Handoff

Dataset Handoff v0 currently represents an absolute HTTPS `datasetUrl` that a
recipient can retrieve. A future public Personal Storage publication may
produce such a URL and can evolve the existing Handoff relationship where
compatible.

This research does not change:

- `datasetUrl` syntax;
- authenticated handoff;
- signed URL behavior;
- private Dataset handoff;
- tokens or authorization parameters; or
- application acquisition policy.

Read-only acquisition of a public Dataset is separate from authenticated
write-back. A future write-back contract would require explicit authorization,
revision, concurrency, failure, and recovery semantics.

## 14. Relationship with Personal Journal research

Personal Journal research covers local persistence, journal workflows,
multi-Dataset workspaces, tab isolation, and possible publication. Personal
Storage could later provide durable private storage for those Datasets, but it
must not silently upload raw conversations, publish private journal entries,
or collapse journal identity into an account identity.

The same Dataset should remain usable by compatible applications. A journal
application, NarrativeLine, and LiaisonScape may be different consumers of
one Dataset without requiring one application to own the storage contract.
Journal-specific bodies, tags, planner state, or AI provenance remain
application or Extension research questions.

## 15. Relationship with Federated E2R

Personal Storage can be a local-to-public progression:

```text
private Personal Space
  -> explicit publication
  -> public Dataset or fragment
  -> optional External Relation / discovery
```

Federation remains a cross-owner presentation and discovery concern. A
Personal Space manifest may list owned Datasets, assets, published revisions,
and opt-in external references. It must not imply that all private resources
are crawlable or that a connection is endorsement, permission, or authorship.

An External Relation or manifest link must not mutate another user's Dataset.
Cross-Dataset identity, provenance, version, deletion, and trust remain
separate research topics.

## 16. Hub / Suite relationship

A future Hub or Personal E2R Suite might provide:

- My E2R / My Datasets;
- published resources;
- reusable assets and dictionary packs;
- application launch targets; and
- existing Dataset handoff construction.

This is a possible discovery and launcher surface, not a mandate that Hub own
storage, identity, or Dataset semantics. Workspace metadata should remain
separate from interoperable Dataset data unless a future contract explicitly
defines otherwise.

## 17. Data portability

A user must be able to export an ordinary E2R Dataset independently of E2R
Storage. Portability should include, as research permits:

- downloading the Dataset itself;
- preserving valid Core and supported Extension data;
- distinguishing embedded and external resources;
- identifying unavailable or non-portable external assets;
- exporting metadata needed to understand publication state; and
- moving or reconnecting to another provider.

An export archive format, bulk resource export, provider migration, and
portable deletion are not defined here. Storage must not make a Dataset
unreadable merely because an account, provider, URL, or hosting plan changes.

## 18. Revision and concurrency questions

Durable storage introduces state beyond Dataset identity. A future design may
need to distinguish:

- Dataset identity;
- current private working revision;
- immutable published revision;
- provider object version or ETag; and
- local pending changes.

Open behaviors include latest-copy selection, optimistic concurrency, stale
clients, simultaneous editing, overwrite protection, conflict presentation,
history retention, rollback, backup, and recovery. Dataset ID must not be
used as a revision token, and a storage revision must not be inserted into the
Core merely to satisfy a provider API.

## 19. Privacy and security questions

Future security research must address at least:

- minimum identity data retained by E2R;
- provider account linking and session lifetime;
- authorization between user, application, and storage;
- private, unlisted, public, and revoked access;
- signed URL scope and expiration;
- token leakage through URLs, logs, referrers, or browser storage;
- malicious or untrusted Dataset content;
- remote resource and active-content risks;
- account recovery and account deletion;
- backups and retention after deletion; and
- jurisdiction and privacy disclosures.

Authentication is not the same as Google data integration. Login should not
implicitly request profile, contacts, Gmail, Drive, or social-graph access.

## 20. Abuse and operations questions

E2R-managed hosting would create responsibilities that local-only use does
not. Research must consider:

- storage and object-size quotas;
- request and bandwidth limits;
- abuse reports and moderation;
- malware or harmful-file handling;
- spam and automated account creation;
- cost ceilings and egress;
- backups and provider outage;
- retention, suspension, and account deletion;
- operational logging and minimization; and
- legal or regional requirements.

No operational policy, quota, pricing model, or moderation process is chosen
by this document.

## 21. Offline and network-failure boundary

Storage failure must not silently discard local work. At minimum, local open,
editing, validation, and ordinary export should remain available when the
network, identity provider, backend, or storage provider is unavailable.

Future synchronization must make pending local work, remote state, retries,
conflicts, and recovery visible. Automatic overwrite, silent retry that
changes content, and silent private-to-public transitions would be unsafe
defaults. Sync protocol design is deferred.

## 22. Dataset ID and layout-seed boundary

Dataset ID, storage location, account identity, revision identity, and visual
layout seed must remain separate concepts. In particular, Dataset ID should
not automatically become:

- a placement random seed;
- a geometry seed;
- a storage pathname;
- a user identity; or
- a revision identity.

Using Dataset ID as a deterministic layout seed is an engine/layout research
question. Personal Storage does not authorize changing LiaisonScape Initial
Placement or its current seed-assignment research order.

## 23. Core and Extension boundary

E2R Storage is currently an infrastructure and application-ecosystem
responsibility. It does not justify adding the following to the Core:

- user accounts;
- provider names or storage URLs;
- authentication tokens;
- publication state;
- private permissions;
- share identifiers; or
- provider object metadata.

An interoperable manifest, resource-reference contract, publication record,
or authenticated handoff may eventually require a separate Extension or
application/federation layer. Such a contract must be researched and assigned
to the appropriate responsibility before adoption. Unknown Extensions should
remain safely ignorable, and Dataset self-containment remains the Core
boundary.

## 24. Provider comparison dimensions

When provider research is eventually authorized, compare responsibility and
risk rather than only feature lists:

| Dimension | Research question |
|---|---|
| ordinary-user abstraction | Can provider details stay hidden? |
| private storage | Are authorization and isolation clear? |
| public URL | Can publication be deliberate and durable? |
| revisions | Are immutable snapshots and history possible? |
| auth integration | Can least-privilege sessions be used? |
| portability | Can users export and migrate? |
| browser access | What CORS, content type, and CSP behavior is needed? |
| operations | Who owns abuse, outage, logging, and deletion? |
| cost | What are storage, request, bandwidth, and egress ceilings? |
| failure modes | What happens on stale, missing, revoked, or unavailable data? |
| resource safety | How are JSON, images, SVG, and packs constrained? |
| legal/privacy | What disclosures and regional obligations apply? |

This matrix is a future research instrument. It is not a provider selection.

## 25. Explicit non-decisions

This checkpoint does not authorize:

- backend or API implementation;
- account or database schema;
- bucket or repository creation;
- provider selection or current pricing claims;
- Google OAuth application creation;
- GitHub App creation;
- credential or secret generation;
- authentication or storage runtime code;
- Personal Space or Hub UI;
- Dataset Handoff changes;
- Core, Extension, or manifest schema changes;
- asset-reference syntax;
- publication URL semantics;
- private sharing protocol;
- provider deployment;
- public upload;
- migration or sync implementation; or
- push, release, or publication.

## 26. Future research questions

1. Is one E2R-managed storage service practical, or should deployments be able
   to provide their own?
2. What is the minimum useful E2R internal identity and account-lifecycle
   model?
3. Is Google only one candidate OIDC/OAuth provider, and what alternatives
   should be supported?
4. How are private resource permissions represented without expanding Core?
5. Does Publish produce a mutable alias, immutable revision URL, or both?
6. How does Unpublish behave, and what does it guarantee about cached copies?
7. How does account deletion interact with private data, backups, and public
   revisions?
8. What revision and concurrency contract is understandable to ordinary users?
9. How should offline editing reconcile with remote state?
10. Can advanced users connect Git, GitLab, or S3-compatible providers safely?
11. How can media and dictionary resources remain reusable without breaking
    Dataset portability or self-containment?
12. Does a Personal Space need a manifest, and who owns that contract?
13. What minimum operational metadata may E2R retain?
14. What abuse, quota, retention, cost, and moderation model is required?
15. How can users export or migrate all stored resources?
16. What is the smallest safe private proof of concept before any public
    experiment?

## Research conclusion

E2R-managed Personal Storage is a plausible convenience and durability layer
that can complement local-only use, Anonymous Dataset Sharing, Personal
Journal workflows, and Federated E2R. The strongest current product
hypothesis is a hybrid direction: managed storage for ordinary users,
optional BYO providers for advanced users, and preserved accountless/local
lanes.

The hypothesis remains exploratory. Identity, provider, backend, permissions,
publication, revision, security, operations, portability, and resource
reference contracts require separate evidence. No runtime, provider, Core,
Extension, schema, Handoff, or Initial Placement change follows from this
record.
