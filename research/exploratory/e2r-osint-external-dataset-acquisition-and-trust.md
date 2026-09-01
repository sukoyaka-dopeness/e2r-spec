# E2R OSINT - External Dataset Acquisition, Trust, and Provenance

Status: **EXPLORATORY / FUTURE DIRECTION**

Date: 2026-09-02

This record is exploratory research. It is not an accepted architecture,
implementation plan, active checkpoint, release blocker, standardized
protocol, schema proposal, or authorization to build an OSINT client.

## Research question and scope

How could a future E2R OSINT environment discover, acquire, preserve, assess,
compare, and selectively reuse third-party public E2R Datasets without
requiring one mandatory central registry?

Two different responsibilities must remain visible:

```text
Publication = how a Dataset is made accessible
Discovery   = how another person or tool learns that it exists
```

This work concerns public and independently published E2R Dataset artifacts,
including material from researchers, journalists, universities, NGOs, public
institutions, external tools, and other publishers. It does not decide that
any particular external source is safe, accurate, authoritative, or suitable
for production use.

The live LiaisonScape Initial Placement sequence remains authoritative. The
checkpoint text that prompted this record named the already completed
equivariance follow-up as an expected checkpoint; the live roadmap has since
selected `E2R-LIAISONSCAPE-INITIAL-PLACEMENT-SEED-PRACTICAL-CANDIDATE-FAMILY-EXPERIMENT-DESIGN1`.
This research does not replace or start that checkpoint.

## Source ownership and acceptance

The strongest supported direction is:

> A fetched third-party Dataset remains an external source artifact. Local
> trust, review, and analytical assessments belong to the investigator's own
> workspace or context and must not silently mutate the publisher's Dataset.

Acquisition is source intake, not factual acceptance. Opening or fetching a
Dataset does not by itself accept its Entity, Event, or Relation assertions,
trust its provenance, trust its publisher, or establish that its current
version supersedes prior evidence.

An OSINT workflow may conceptually pass through states such as:

```text
DISCOVERED -> FETCHED -> SNAPSHOTTED -> UNASSESSED -> UNDER REVIEW
           -> PARTIALLY REVIEWED -> ACCEPTED IN PART
           -> REJECTED IN PART / SUPERSEDED / UNAVAILABLE
```

These labels are illustrative workflow language only. They are not proposed
enum values, E2R states, or a standard.

Local assessment may be user-specific, organization-specific,
workspace-specific, or investigation-specific. A conceptual reference could
contain a publisher, source URL, acquisition time, snapshot identity,
integrity observation, and local assessment, but this record defines no
schema. The assessment is an observation made by a local context; it is not an
intrinsic mutation of the publisher-owned Dataset.

Selective adoption is also distinct from opening an external Dataset:

```text
External Dataset A
  Entity X / Event E / Relation R
          |
       reviewed
          v
Local workspace claim or object
  lineage: Dataset A, snapshot S1, source object R
```

Whether adoption copies, references, derives, forks, or records an assertion
is an open architecture question. Whichever later choice is made, source
lineage should not be silently lost when externally sourced information is
used in a local investigation.

## Trust is layered, not one score

The scalar expression `trust = 0.72` is too coarse as the only model. A
publisher can be credible while one Dataset is stale; a Dataset can be
integrity-preserved while a particular assertion is weak; and a local review
can be provisional even when a source is authentic. No final dimensions,
formula, threshold, vocabulary, or score are selected here.

| Layer | Example question | Objective / subjective | Likely owner | Must mutate source Dataset? |
| --- | --- | --- | --- | --- |
| T0 publisher/source | Who published or controls this source? | Mixed | Publisher and local observer | No |
| T1 Dataset | What artifact and scope are being assessed? | Mixed | Publisher and local observer | No |
| T2 snapshot/version | What exact representation was reviewed? | More objective plus local observation | Acquirer/workspace | No |
| T3 assertion/object | Is this Entity, Event, or Relation claim supported? | Mostly interpretive | Investigator or organization | No |
| T4 evidence/source | What underlying document or observation supports it? | Mixed | Evidence owner and investigator | No |
| T5 local review | What did this investigation accept, reject, or leave open? | Subjective/contextual | Local workspace/investigator | No |

Integrity, authenticity, provenance completeness, freshness, source quality,
corroboration, contradiction, and local review are related but distinct
questions. `Trusted publisher` must not imply `every assertion trusted`.
Trust vocabulary is not standardized by this record, and no score formula is
selected.

## Snapshot identity and refresh

A mutable remote URL and the representation actually reviewed are different
identities. A future acquisition workflow should be able to distinguish them,
even though the exact identity and storage mechanism remain open.

```text
remote Dataset at T1 -> reviewed snapshot S1
remote Dataset changes -> refresh at T2 -> snapshot S2
```

Keeping S1 available can support reproducibility, audit, comparison, later
review, and investigation after the remote source disappears. A refresh may
show added or removed Entities, changed Events, added or removed Relations,
metadata changes, or changed evidence/provenance. A new snapshot should not
silently rewrite the review history for S1.

| Stage | Remote source | Local snapshot | Assessment | Provenance consequence |
| --- | --- | --- | --- | --- |
| Discovered | URL or catalog reference is seen | None yet | Unassessed | Record discovery context if useful |
| First fetched | Current response at fetch time | Candidate S1 | Not accepted by default | Capture what was fetched and from where |
| Reviewed | May already have changed | S1 is the review target | Local conclusions attach to S1 | Preserve object/evidence lineage |
| Remote changed | Current response differs | S1 remains historical | S1 review does not move to new content | Compare rather than overwrite |
| Refreshed | New response at T2 | Candidate S2 | Re-review may be required | Relate S2 to S1 without erasing S1 |
| Remote unavailable | URL fails, is removed, or is private | S1 may remain | Local review can remain qualified | Historical source reference and limitation survive |

No hash algorithm, content-addressed store, snapshot database, synchronization
protocol, or retention policy is selected. Byte-for-byte preservation versus an
equivalent content-addressed representation is an open question.

## Corroboration, contradiction, and the assertion question

Source count is not independent corroboration count. An adopted local claim
may have several source paths, but those paths may converge on one upstream
document. Contradiction also needs to remain visible rather than being hidden
by a single winner.

### Example 1: genuinely independent support

Dataset A cites a contemporaneous interview and Dataset B cites an independent
archival record. Both support the same local claim. This is stronger evidence
of independent corroboration than two datasets that copy one another, but it
still does not automatically make the claim true.

### Example 2: repeated shared upstream source

Datasets A, B, and C all state the same event date, but each copied the same
original news report. Three Dataset records do not provide three independent
sources. The shared upstream lineage matters to local assessment.

### Example 3: contradiction

Dataset A states `Event E` occurred on date X, while Dataset B states date Y
and provides a different source. A useful local workflow could preserve both
snapshots, show the disagreement, retain each provenance path, and record an
unresolved or investigator-reviewed assessment. The Core is not changed here
to encode an epistemic contradiction model.

A single scalar cannot cleanly represent all three examples: it cannot show
which dimensions differ, whether evidence is independent, which snapshot was
reviewed, or why a contradiction remains unresolved.

E2R currently provides Entity, Event, and Relation objects. OSINT trust may
apply to “the assertion that this Relation exists” rather than only to the
Relation object. Whether a future assertion/evidence layer is needed is an
**OPEN MODELING QUESTION**. No `Assertion` object is introduced here.

## Discovery ladder

Publication and discovery can be composed without assuming a mandatory central
registry. The following ladder is a research vocabulary, not a protocol or
syntax:

| Level | Concept | What it can provide | Limitation |
| --- | --- | --- | --- |
| D0 | Direct HTTPS Dataset URL | Minimal direct acquisition target | May be mutable, private, or poorly described |
| D1 | Human-facing HTML link | A person can discover context and a Dataset link | Weak machine semantics |
| D2 | Machine-readable HTML metadata | A tool may find an associated resource | No E2R `rel`, MIME, or profile is selected |
| D3 | Publisher/site catalog | Several publisher resources can be listed | Catalog availability and format vary |
| D4 | Catalog-to-catalog references | Discovery can follow publisher relationships | Can create loops, stale links, or trust confusion |
| D5 | Independent crawlers/search indexes | Broader discovery across publishers | Index coverage and operator incentives vary |
| D6 | Optional official/community directory | Convenience and curated visibility | Must not become a validity or endorsement rule |

The minimum interoperability candidate is a publicly readable, stable HTTPS
URL that identifies a public E2R Dataset, subject to compatibility and safety
checks. Redirect behavior, response content type, size limits, integrity,
authentication, mutability, version identity, and origin trust remain open
questions. A URL that can be fetched is not thereby trustworthy.

HTML `link` elements and ordinary hyperlinks are plausible discovery mechanisms
to study. Existing HTML defines link and hyperlink concepts, but this record
does not invent an E2R-specific `rel` value, MIME type, profile parameter, or
processing rule. A site catalog and any metadata fields such as title, Dataset
URL, publisher, landing page, description, updated time, language, topic, or
optional integrity information remain illustrative only.

### Central and decentralized comparison

| Model | Publication independence | Discovery quality | Single point of dependency | Trust implication | Browser compatibility | Open ecosystem potential |
| --- | --- | --- | --- | --- | --- | --- |
| Direct URL only | High | Low unless shared elsewhere | None | Fetchability is not trust | High for navigation; fetch constraints remain | High but low discoverability |
| Publisher HTML discovery | High | Low to medium | Publisher site | Context comes from publisher; no endorsement implied | High | High |
| Publisher catalog | High | Medium to high for one publisher | Publisher catalog | Catalog claims need local assessment | High if publicly readable | High |
| Linked/federated catalogs | High | Potentially high | Distributed and link-dependent | Linkage is not mutual trust | Usually high; retrieval policy matters | High, with loop/staleness risks |
| Independent indexes | High | Potentially high | Index operator(s) | Indexing is not endorsement | Search/browser dependent | High, with coverage and ranking risks |
| Optional central directory | High if optional | High for participating entries | Directory is a convenience dependency | Curation must not define validity | High if web-accessible | Medium to high |
| Mandatory central registry | Reduced | Potentially high | Registry is a gate or outage point | Registration can be mistaken for trust | High if reachable | Low to medium; excludes independent publishers |

The research supports decentralized publication and discovery with optional
indexes as a coherent direction. It does not establish that a central
directory is harmful in every use case, only that publication and validity
should not depend on one.

## Standards comparison, not adoption

Bounded primary-source research was performed on 2026-09-02.

| Source | Problem it solves | Possible E2R relevance | Adopted here? | Why not / boundary |
| --- | --- | --- | --- | --- |
| [RFC 8615](https://www.rfc-editor.org/rfc/rfc8615) | Defines the `/.well-known/` path prefix for selected URI schemes and explains registration of well-known names | Could be relevant to a future site-level discovery convention | No | It does not define E2R Dataset semantics, catalogs, trust, or provenance |
| [IANA Well-Known URIs Registry](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml) | Records registered well-known URI suffixes and references | A future E2R name would need an appropriate standards process | No | `/.well-known/e2r` is not claimed as valid, registered, or current E2R behavior |
| [WHATWG Fetch Standard](https://fetch.spec.whatwg.org/) | Defines requests, responses, redirects, fetch modes, and the CORS protocol | Explains why browser acquisition can differ from desktop/local acquisition | No | CORS controls response sharing; it does not establish source trust or factual truth |
| [WHATWG HTML links](https://html.spec.whatwg.org/multipage/links.html) | Defines HTML links, hyperlinks, external resources, and link-type processing | Provides a comparison point for possible future human/machine discovery | No | No E2R `rel`, MIME type, profile, or catalog syntax is selected |
| [W3C PROV Overview](https://www.w3.org/TR/prov-overview/) | Provides a provenance model and interchange family concerning entities, activities, and agents | Useful comparison for lineage, derivation, and reproducibility research | No | It is not adopted as E2R trust, assertion, or publication protocol |

RFC 8615 is therefore a possible standards-process boundary, not permission to
publish a permanent E2R well-known URI immediately. Inventing an unregistered
`/.well-known/e2r` contract would prematurely create interoperability and
ownership expectations. No such URI is standardized here.

## Browser, desktop, and local acquisition boundaries

Browser JavaScript acquisition can be limited by origin policy and the Fetch
standard's CORS behavior. A server must opt into response sharing for relevant
cross-origin fetches; navigation or a desktop HTTP client may have different
access characteristics. Desktop/local access introduces different risks,
including filesystem scope, local path confusion, credential handling,
redirect policy, and process/network permissions.

These differences do not require different E2R Dataset interchange semantics.
They do mean that a future implementation must specify its acquisition boundary
and failure behavior. No proxy, relay, backend fetcher, CORS workaround, or
publication profile is selected.

External Dataset acquisition is not VS-Code-only. The existing [VS Code OSINT
Workbench research](e2r-vscode-osint-workbench.md) studies a possible
power-user/local workbench and its bounded tools, storage, and evidence
responsibilities. This record studies the narrower source-publication and
acquisition boundary that any browser, desktop, or other client might consume.

## Security and safety boundary

Any future acquisition or review capability would need to treat external
content as untrusted input. Risks include:

- maliciously large Datasets and resource exhaustion;
- malformed JSON or pathological graph structures;
- hostile URLs, redirect chains, SSRF, and unexpected schemes;
- HTML or script injection and untrusted Markdown/content;
- `file://` or local-path confusion and unintended filesystem disclosure;
- credential leakage, authenticated/private sources, and cross-origin data
  exposure;
- confusing transport integrity or publisher identity with factual truth;
- supply-chain-like trust confusion through indexes, catalogs, or copied
  upstream sources; and
- untrusted AI instructions or content embedded in an external Dataset.

An AI assistant may help inspect or propose review actions in a future bounded
workbench, but external text must not silently become instructions or accepted
facts. Human review and explicit local acceptance remain conceptual safety
boundaries. No security implementation is made by this checkpoint.

## Relationship to existing E2R work

- **VS Code OSINT Workbench:** complementary future client/workspace research;
  this record is not a VS Code downloader or extension design.
- **E2R Suite:** the long-term Suite milestone remains distant and unchanged;
  this work does not implement a Suite acquisition surface.
- **Personal Storage:** asks where user resources live; this record asks how
  external resources are discovered, acquired, reviewed, and adopted. A future
  snapshot may use Personal Storage, but no storage architecture is selected.
- **Federated Constellation:** addresses distributed ownership and related
  resources. Catalog linking may be a narrower discovery concern, not proof
  that a federation protocol has been adopted.
- **Handoff:** a direct public Dataset URL may overlap with acquisition, but
  Handoff and public discovery are not assumed to be the same protocol.
- **Core and Extensions:** current Core semantics are preserved. This record
  does not decide whether trust, provenance, or review belongs in Core, an
  Extension, workspace-local metadata, or a separate protocol.

The E2R Dataset remains self-contained at the Core level. External source
references and local assessments discussed here are research boundaries, not
changes to Dataset validity or Core interoperability.

## Minimum principles

| Principle | Classification | Refinement |
| --- | --- | --- |
| P1 acquisition does not equal factual acceptance | Supported | Intake and acceptance are separate operations |
| P2 local assessment does not mutate publisher data | Supported | Assessment belongs to local context |
| P3 reviewed snapshot differs from mutable URL | Supported with qualification | Exact identity/storage contract remains open |
| P4 discovery and trust are separate | Supported | A directory or link is not endorsement |
| P5 optional indexes can improve discovery | Supported with qualification | Indexing must not define validity |
| P6 trust is layered, not one scalar | Supported with qualification | Final dimensions and vocabulary remain open |
| P7 integrity/authenticity differ from truth | Supported | Transport or authorship evidence is not factual proof |
| P8 adopted information should preserve lineage | Supported with qualification | The adoption model is not chosen |
| P9 corroboration must account for source independence | Supported | Shared upstream provenance must be visible |
| P10 browser and desktop constraints can differ | Supported | Interchange semantics need not diverge |
| P11 AI must not silently accept untrusted claims | Supported with qualification | Future tool and review controls remain open |
| P12 local work should survive remote disappearance | Supported with qualification | Retention and snapshot mechanism remain open |

## Open questions

1. What constitutes an external Dataset source?
2. Should an acquired Dataset be stored byte-for-byte?
3. How is snapshot identity represented?
4. Does E2R need publisher identity?
5. Does E2R need Dataset version identity separate from Dataset ID?
6. Where do local assessments live?
7. Should trust assessments be portable or shareable?
8. Can assessments themselves have provenance?
9. How should individual claims or objects be reviewed?
10. Does OSINT require an Assertion layer?
11. How are contradictions represented?
12. How are independent corroborating sources recognized?
13. How should shared upstream provenance affect corroboration?
14. How are externally sourced objects adopted locally?
15. Is adoption a copy, reference, derivation, fork, or another model?
16. What happens when external Object IDs change?
17. How does entity resolution work across unrelated Datasets?
18. What is the minimum public publication profile?
19. Should browser-readable public Datasets require CORS?
20. Should E2R define HTML discovery metadata?
21. Should E2R define a site catalog?
22. Would a well-known URI be appropriate?
23. Should catalogs link to other catalogs?
24. Who operates search indexes?
25. Should an official index exist?
26. How is official indexing separated from endorsement?
27. Do publisher signatures matter?
28. What happens when content disappears or is rewritten?
29. How does refresh interact with prior local review?
30. What safety boundaries are required for AI processing untrusted external
    Dataset content?

## Non-goals

This checkpoint does not authorize or implement:

- an external Dataset downloader, crawler, browser fetcher, or VS Code fetcher;
- a database, snapshot store, synchronization service, search engine, or
  central registry;
- a trust schema, trust score, trust algorithm, reputation system, or
  publisher identity scheme;
- Core, Extension, Handoff, Dataset-format, or existing research changes;
- an Assertion object, provenance Extension, provenance schema, or signature
  format;
- entity-resolution logic, catalog protocol, official directory, or federated
  synchronization;
- `/.well-known/e2r`, an E2R MIME type, an HTML `rel` value, or profile syntax;
- a Suite application, OSINT application, proxy, backend, or deployment.

## Result classification and decision

Primary result: **CASE 10 - MIXED**.

The research supports the source-intake, local-ownership, reviewed-snapshot,
decentralized-discovery, responsibility-separation, layered-trust, and
lineage-aware-corroboration directions. The current Entity/Event/Relation
objects remain useful subjects of review, but assertion-level trust is only a
partial fit. The location of trust, review, and provenance metadata remains
open. The evidence therefore does not justify reducing the result to one
single case or selecting an implementation contract.

Evidence-matching clauses:

1. **DIRECTION SUPPORTED** - Third-party E2R Datasets should enter an OSINT
   workspace as external source artifacts, not automatically accepted facts.
2. **DIRECTION SUPPORTED** - Investigator trust and review state belong to local
   context and should not silently mutate the publisher's Dataset.
3. **DIRECTION SUPPORTED** - A reviewed fetch must be distinguishable from a
   mutable remote URL so later updates do not rewrite evidence history.
4. **DIRECTION SUPPORTED** - Public discovery can remain decentralized through
   direct URLs, publisher discovery, catalogs, and independent indexes, with
   central directories optional.
5. **DIRECTION SUPPORTED** - Discovery, integrity, authenticity, trust,
   corroboration, and factual acceptance are distinct responsibilities.
6. **DIRECTION SUPPORTED** - A single Dataset-level trust score is too coarse
   because publisher, snapshot, assertion, evidence, and local review can
   diverge.
7. **DIRECTION SUPPORTED** - Corroboration must account for shared upstream
   sources rather than count Datasets as automatically independent.
8. **PARTIAL** - Current Entity/Event/Relation objects provide structured
   subjects of review, but assertion-level trust may require a future modeling
   layer.
9. **OPEN** - The location of trust, review, and provenance metadata between
   Core, Extension, workspace state, and a separate protocol remains
   unselected.

Decision: **A - RESEARCH DIRECTION ESTABLISHED; DEFER IMPLEMENTATION UNTIL
OSINT WORKBENCH ARCHITECTURE IS ACTIVE**.

No follow-up checkpoint is auto-started. If the OSINT Workbench direction
becomes active later, the smallest missing-evidence choice should be made then
from the open snapshot, assessment-ownership, assertion/evidence,
decentralized-discovery, and contract-compatibility questions above.

Knowledge Candidate: **YES - EXPLORATORY HYPOTHESIS**. Reusable candidates are
that acquisition and acceptance are separate, local trust is observer-owned,
mutable sources need reviewed snapshot identity, discovery authority differs
from trust authority, Dataset count does not prove independent corroboration,
and integrity/authenticity do not prove factual truth. No `ai-knowledge`
promotion is made.

## Change boundary

Created only this exploratory record and a concise roadmap cross-reference.
No production application, Dataset, Core, Extension, Handoff, trust system,
provenance schema, downloader, crawler, search service, registry, or
`ai-knowledge` file was changed.
