# Anonymous Dataset Sharing Research

Status: RESEARCH CHECKPOINT READY / PROVIDER EVIDENCE DEFERRED

This document records a possible future path for the “俺の年表を見ろ”
(“look at the timeline I made”) experience. It is non-normative and does not
change E2R Core, an Extension, or any application handoff contract.

## Motivation

The longer-term experience is:

```text
create an E2R Dataset
  -> share it anonymously
  -> receive a difficult-to-guess URL
  -> let another person open the same Dataset in a compatible application
```

The shared object should be an E2R Dataset, not a proprietary NarrativeLine
document. The application should not require the author or viewer to create an
account, provide an email address, or maintain a profile.

The immediate implementation sequence remains deliberately incremental:

1. known-sample handoff (`?sample=`);
2. public Dataset URL handoff (`?dataset=<public URL>`);
3. anonymous upload and share-link experiment.

This topic should not be used to expand the first known-sample MVP.

## Initial hosting hypothesis

The first candidate to investigate is an object store plus a small request
worker, with Cloudflare R2 and Cloudflare Workers as the initial candidate.
The reason is architectural simplicity: a small E2R JSON object may not need a
database, user table, account system, or session store.

Other candidates to compare include Supabase Storage, Backblaze B2, and
Firebase. Any current free-tier figures, limits, billing rules, egress terms,
and account requirements are research inputs that must be rechecked against
the providers’ current primary documentation before implementation or public
claims. “Free” must not be treated as a permanent availability guarantee.

## Conceptual protocol

An initial anonymous-sharing experiment could use two independent random
values:

```text
shareId:  public, high-entropy identifier used in the viewing URL
deleteKey: separate secret retained by the creator for deletion, if deletion is supported
```

Conceptually:

```text
NarrativeLine or another E2R application
  -> Share
  -> upload endpoint
  -> size and JSON checks
  -> minimum Dataset validation
  -> generate shareId and deleteKey
  -> store the Dataset as an immutable object
  -> return a public viewing URL and a separate deletion secret
```

Example forms are illustrative only:

```text
public URL: https://e2r.example/d/<shareId>
object key: <shareId>.e2r.json
```

The viewing path would retrieve the Dataset and pass it to a compatible
application or Hub route. The deletion path would require the separate
secret. The Dataset itself should not claim to identify its author merely
because the hosting service issued these values.

## Abuse, privacy, and operational questions

An anonymous public upload endpoint would be an abuse target. Before any public
experiment, research must address at least:

- maximum Dataset size, such as a deliberately small initial limit;
- acceptance of JSON and E2R Dataset content without serving arbitrary HTML,
  images, or executable files;
- validation behavior and diagnostics for invalid uploads;
- request rate limiting and upload quotas;
- sufficiently high-entropy, non-enumerable share identifiers;
- absence of a listing or search API;
- crawler and indexing behavior;
- immutable objects versus replacement semantics;
- deletion, deletion-secret handling, and recovery expectations;
- expiration or TTL policy;
- CORS, content type, and fetch-failure behavior;
- source mutation and URL durability if public URLs are used;
- malicious or untrusted JSON handling in consuming applications;
- provider logs, operational metadata, jurisdiction, and privacy disclosures;
- storage, request, and egress costs when free limits are exceeded.

“No identity-centric architecture” describes the application experience. It
does not mean that the infrastructure provider collects no operational data;
that distinction requires explicit documentation and review.

## Research questions

1. Can a small object-store-plus-worker design support an anonymous E2R Dataset
   experiment without a database?
2. Which candidate has the clearest current terms for small JSON objects,
   reads, writes, egress, rate limiting, and deletion?
3. What minimum validation and size policy is sufficient for a safe first
   experiment?
4. Should a share represent an immutable snapshot, or may the same URL be
   replaced?
5. How should Hub select a target application when a shared Dataset contains
   no application-specific view state?
6. How should a lost deletion secret, expired object, invalid Dataset, or
   unavailable provider be explained to users?
7. What evidence is needed before this becomes an application architecture
   decision rather than an exploratory prototype?

## Boundaries

This research topic does not authorize:

- adding `shareId`, `deleteKey`, or hosting metadata to E2R Core;
- creating an Extension for transport or URL behavior;
- adding accounts, profiles, or identity requirements;
- deploying Cloudflare, adding provider credentials, or creating public
  storage;
- accepting arbitrary remote Dataset URLs without separate security review;
- embedding complete Dataset JSON in URLs;
- claiming that a provider’s free tier or pricing is stable;
- treating a share URL as proof of factual authorship or Dataset truth.

## Operational boundary and completion status

The bounded research direction is accountless, read-only sharing of an E2R
Dataset through an unguessable public read identifier. A separate deletion
capability may be evaluated for creator-side management, but it is not an
account, an authorship claim, or a promise to erase copies already downloaded
by recipients. The initial publication candidate is an immutable share object;
Dataset identity, version, Lineage, and any future transport representation
remain separate concerns.

Any later experiment must define explicit size, validation, rate, content-type,
failure-recovery, retention, privacy-disclosure, and abuse boundaries before
accepting uploads. Remote Datasets must remain untrusted input, and a
Validator must not be treated as a security scanner. The provider must not
execute code from Dataset content.

This is a completed provider-neutral research checkpoint, not a production
architecture decision. Provider terms and capabilities, cost/quota behavior,
operational logging, deletion guarantees, and private proof-of-concept
evidence remain deferred prerequisites for a provider-specific experiment.

## Suggested evidence sequence

1. Verify current provider terms using primary documentation.
2. Compare candidate architectures and failure modes in a research matrix.
3. Test a local protocol with size limits, validation, random identifiers, and
   separate deletion credentials.
4. Run a private provider-backed proof of concept with no production data.
5. Review abuse controls, privacy disclosures, cost ceilings, and deletion
   behavior before any public anonymous-upload experiment.
