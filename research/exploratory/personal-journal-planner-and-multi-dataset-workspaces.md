# Personal Journal, Planner, and Multi-Dataset Workspace Research

Status: EXPLORATORY / NON-NORMATIVE
Date: 2026-08-24

This note records a possible product direction for NarrativeLine and related
E2R applications. It does not change the E2R Core, define an Extension, or
claim that the described capabilities are currently implemented.

## Product hypothesis

NarrativeLine may be useful beyond historical timelines and
biography/autobiography as a lightweight personal record for:

- diary or personal journal entries;
- life, travel, food, reading, and activity logs;
- dated notes and lightweight plans; and
- recurring people, places, shops, food, and other subjects linked to Events.

The product direction may eventually include lightweight tags and expressive
stamps, while keeping long-form journal writing distinct from a short Event
summary. A future Hub section could introduce these possibilities, but Hub
runtime and copy are outside this research checkpoint.

## What the existing model can express

Conceptually, an Event can represent a dated occurrence, experience, journal
entry, or planned occurrence: meeting someone, visiting a place, eating at a
restaurant, reading a book, travelling, attending an appointment, or writing a
daily entry.

An Entity can represent a persistent identifiable subject whose reuse,
lookup, or Relations are useful: a person, city, place, shop, restaurant,
hotel, book, work, project, or recurring object. Food and dishes are
deliberately conditional. “Ate ramen today” may remain journal text or a tag;
repeated tracking of a restaurant and its dishes may justify Entities. This is
a heuristic, not a normative set of Entity categories.

The Core `description` field is already a generic human-readable description,
so a basic diary is possible today. A future journal-oriented application or
Extension might distinguish a concise Event summary from a long-form journal
body. No final Extension name or schema is proposed here. An open question is
when long-form narrative becomes sufficiently distinct from `description` to
justify interoperable semantics.

## Tags and stamps

Tags are a possible future lightweight semantic classification mechanism for
filtering, search, grouping, and repeated categorization. Stamps are a
separate UX idea: quick expressive or presentation-oriented marks. Stamps need
not be emoji, and some might later map to semantic tags, but this note defines
no schema and adds neither `tag` nor stamp fields to the Core.

## Planner direction

The History extension makes future-dated Events conceivable, but a full
planner would need additional application or Extension semantics such as
planned versus occurred, task status, completion, reminders, and recurrence.
Those concepts should be researched rather than added casually to the Core.
NarrativeLine could first support dated notes or plans without becoming a full
task manager.

## Multi-Dataset and browser-tab workspaces

Current NarrativeLine persistence uses the shared same-origin localStorage key
`narrativeline.lastDataset`. Separate tabs can temporarily hold separate
in-memory React state, but this is not safe independent multi-Dataset parallel
editing: a reload in one tab may observe state written by another tab.

A future direction is one active Dataset workspace per tab. Candidate areas to
investigate include stable Dataset identity, Dataset-keyed persistence,
sessionStorage or another tab-local selection mechanism, intentional restore
of the tab's Dataset, protection when the same Dataset is open twice, and
change/conflict detection. BroadcastChannel or equivalent browser coordination
may be relevant. Different-Dataset tab isolation and same-Dataset concurrent
editing are separate problems; the latter needs a stronger conflict policy.

This direction should also preserve deliberate user control over local
persistence, export, handoff/share, replacement, and accidental cross-tab
overwrites. It does not imply cloud accounts or hosted synchronization.

## Possible Hub direction

A future Hub section could present personal journal, life-log, travel, food,
reading/activity, and lightweight planning uses. Its copy must distinguish
what current features can do from future possibilities. This is a product
hypothesis only; Hub runtime is not changed here.

## Open research questions

- When should a long-form journal body be distinct from `description`?
- What semantics should tags and stamps have, and do they apply to Events only
  or to all Core Objects?
- How should planner status, tasks, and planned Events be represented?
- How should Dataset identity and persistence support tab-isolated workspaces?
- How should different-Dataset tabs be isolated?
- What conflict policy is needed when the same Dataset is open in multiple tabs?
- What privacy, export, handoff, sharing, and accidental-overwrite boundaries
  should personal data workflows preserve?
- Could recurring people, places, and shops later gain value through a
  NarrativeLine–LiaisonScape relational workflow?

These questions remain intentionally unresolved.

## Calendar view

A diary or planner-oriented NarrativeLine could benefit from a Calendar View
in addition to a chronological Timeline View. A possible first presentation is
a month calendar with dated Event indicators; selecting a day could show that
day's Events and perhaps offer quick Event or journal-entry creation. Calendar
and Timeline would remain two presentations of the same Event data. Exact UI
is intentionally unresolved.

Calendar View is application presentation. It does not require a new Core
temporal field, a Calendar Extension, or a change to History Extension
1.0.0. History already uses the proleptic Gregorian calendar. Calendar
presentation must preserve recorded granularity: a year-month-day Event may be
placed in a day cell, but a year-month Event must not receive an invented day,
and a year-only Event must not receive an invented month or day. A future UI
may provide month- or year-level views for incomplete dates.

A candidate daily workflow is date, short summary, long-form journal body,
Entities, and optional tags or stamps. This remains product exploration and
does not define a journal schema or a one-entry-per-day rule.

## Personal timeline with historical context

Over years or decades, a person may want to view personal diary or life-log
Events alongside reference timelines describing the surrounding world: public
events, popular culture, music, film and television, technology, social trends,
sports, local history, or appropriate weather and seasonal context. Such
context may act as a neutral memory cue by helping a user recall a trend,
product, song, public event, or social atmosphere around an entry. It does not
alter the original personal record and this note makes no medical or memory
claim.

Following the distinction in `dataset-distribution-and-merge.md`, viewing
multiple Datasets is different from saving a new combined Dataset. The first
useful direction may therefore be a non-destructive multi-Dataset overlay:

```text
Personal Diary Dataset + Public / Reference Timeline Dataset
    -> combined presentation
```

An overlay could preserve independent ownership, allow a reference Dataset to
be replaced or updated, keep provenance clearer, preserve privacy boundaries,
and avoid identity collapse merely to view related Events. It would be an
application-level composition mode, not an E2R Core feature. A user might
later explicitly combine selected content into a new Dataset, as a separate
operation governed by the existing merge and provenance research.

Personal diary data may be private while reference timelines may be public or
shared. Overlay must not imply automatic upload, publication, or copying of
private Events into reference data. Future UX should keep source ownership
visible. A Calendar/Timeline presentation might distinguish personal and
reference layers, filters, or source indicators, but exact visual treatment is
unresolved.

Recurring people, places, and shops in personal Events could optionally lead
to relational exploration in LiaisonScape. The existing heuristic remains:
promote a subject to Entity when recurrence, identity, lookup, or Relations are
useful; do not turn every diary noun into an Entity.

## Extended Hub research candidate

The existing future Hub direction could eventually introduce personal journal,
life-log, Calendar, and historical-context ideas. It must distinguish current
capabilities from future possibilities and must not imply that Calendar View or
overlay exists today. This is not final Hub marketing copy and does not change
Hub runtime.

## Additional open questions

- What is the minimum useful Calendar View: month only, or month plus agenda?
- How should incomplete History granularity appear in Calendar View?
- Should one calendar day support multiple Events naturally?
- Should one diary entry per day remain an optional application convention?
- How should personal and reference Events be visually distinguished?
- Should an overlay be ephemeral or restorable as workspace state?
- How should source Dataset provenance appear in an overlay?
- Can reference timelines be updated without affecting personal data?
- When should an overlay become an explicit merge or composition?
- What privacy boundary is required when personal and public Datasets coexist?

## Time-of-day journaling

Personal journals may contain date-only entries as well as explicit times of
day. History Extension 1.0.0 already supports year, month, day, hour, minute,
second, and optional time-zone and offset information at sufficient
granularity. This does not require a new Core temporal field. Applications
must not invent precision: a date-only entry must not silently become midnight,
while a user-entered month/day/time may preserve that recorded precision.

A future application might require a date for ordinary calendar entries, make
time optional, offer an explicit “use current time” action, and hide seconds
unless needed. Day or agenda views could order timed Events within a day. The
local Civil Time and time zone may be meaningful for travel journals. Exact UX
is unresolved and History semantics are unchanged.

## Conversational AI journaling

A journal could be created through a conversational assistant as well as a
form. Prompts might ask what happened today, what was done for the first time,
who was met, where the user went, how they felt, or what they want to do
tomorrow. The assistant could propose one or more Event drafts, summaries,
long-form prose, Entity candidates, tags, stamps, or future/planned Events.

All AI output is a draft. User confirmation must precede persistent Dataset
mutation. Inferred people, places, shops, emotional states, and duplicate
Entity candidates must be suggested for review rather than silently linked,
recorded, or created.

By default, the raw conversation need not become part of the Dataset. A
possible flow is:

```text
conversation -> structured proposal -> user review -> accepted E2R data
```

The transcript may remain ephemeral; persistence would require an explicit
future choice. This note defines no cloud retention behavior and no AI
Extension.

## GitHub-backed journal publication

A GitHub repository could serve as storage or distribution for explicitly
published E2R journal Datasets. A future read-only viewer might present a
journal stream, Calendar, Timeline, Event Detail, or Entity-oriented browsing
through a browser extension, standalone viewer, or Hub-linked viewer. No such
viewer is claimed to exist today.

Git commit chronology is not Event chronology. Commits may represent revision,
publication, or provenance history; History Extension Event time remains the
authoritative journal chronology. Event dates must not be derived from commit
timestamps except through an explicitly designed future import workflow.

Publication must be deliberate:

```text
Private Dataset/repository -> explicit publication/export -> public Dataset/repository
```

The public Dataset may contain only selected content. Making the original
private repository public, automatic publication, and automatic private-to-
public synchronization are not assumed. A public Event does not imply that
every related Entity or Relation is public.

## Repository topology and Launcher hypothesis

Repositories should generally not be divided by E2R application, because the
same Dataset may be consumed by NarrativeLine, LiaisonScape, a viewer, and
future applications. This is a research hypothesis, not a normative rule:

```text
repository = storage / sharing / permission / publication / versioning boundary
Dataset     = identified data object, with datasetId when present
application = Dataset consumer, editor, or viewer
```

Both one-repository-per-Dataset and a multi-Dataset personal vault remain open.
The broader heuristic is that a repository is one storage, sharing, and
permission boundary, not one application. A future Launcher could register
Dataset identity, title, repository, file path, branch/ref, and source status,
then open the same Dataset in compatible applications. It must not equate a
repository URL with `datasetId`, and no Launcher storage schema is proposed.

A future browser viewer could recognize an intentionally published E2R journal
and render it as a readable site, with chronological, Calendar, Event, or
relational views. Following recurring public people, places, or topics may be
useful, but publication filtering and privacy boundaries remain necessary.

## Additional open questions

- Should hours and minutes be ordinary UI or optional, and what does “use
  current time” record about time zone and offset?
- Can one AI conversation produce multiple Events, and should existing Entity
  links be proposed before new Entities?
- Should raw conversations remain ephemeral, and how should accepted AI-derived
  content record provenance?
- Should public journals be derived Datasets rather than private source data?
- What manifest identifies E2R content in a GitHub repository?
- Should a repository contain one Dataset or several?
- How should Launcher remember repository/path/ref without confusing location
  with identity?
- How should private-repository viewer authentication avoid excessive token
  scope?
- Should GitHub Pages, raw files, or the GitHub API be the publication surface?
- How should attachments and photos be represented without expanding the Core?
- How should publication filtering handle related Entities and Relations?

## Separate journal application direction

The earlier observations show that E2R's Event, Entity, and History model can
support personal journal data. They do not require NarrativeLine itself to
become the final journal product. A preferred direction to explore is a
separate, journal-oriented E2R application for personal diary and life-log
capture, Calendar-first and daily-entry workflows, optional time-of-day,
conversational AI journaling, tags and stamps, long-form writing, and
privacy-oriented GitHub storage or publication. No final application name is
chosen.

NarrativeLine can remain a broadly domain-neutral chronological Event editor
for timeline-oriented inspection and editing. The same Dataset should remain
openable in compatible applications:

```text
Journal application  -> E2R Dataset <- NarrativeLine
                                  -> LiaisonScape
```

Separate applications do not imply incompatible data models. Journal-specific
long-form bodies, tags, stamps, planner state, or AI provenance may eventually
need Extensions, but are not Core requirements here.

## Cross-diary Entity threading

Several independently authored journal Datasets may mention the same real-world
Entity: a cafe, restaurant, school, park, hotel, city, book, film, band, person,
or organization. A future read-only viewer or aggregator could let a reader
pivot across intentionally published diaries without destructively merging
their source data. For example, Dataset-local Entities A17, B82, and C05 may
be presented as possible references to one “Cafe Midori” thread while their
original Events remain source-specific.

Core Entity IDs are Dataset-local. Matching IDs, names, or similar labels do
not establish real-world identity. A separate identity-resolution layer might
record confirmed, possible, and unresolved equivalence while preserving every
source Entity. Evidence to research includes user confirmation, external
identifiers, address, coordinates, official URLs, and provenance. No canonical
mechanism is selected and name-only matching is unsafe.

Cross-diary threading could reveal observational social-history patterns:
independent accounts of a film, changing impressions of a place, a shop
appearing or disappearing, or several perspectives around a public Event. It
must not turn multiple accounts into objective truth or one anonymous merged
narrative. Each diary remains a source-specific account.

Time-oriented Calendar/Timeline views and Entity-oriented threads are separate
presentation/query axes. A reader could move between them without mutating
source Datasets. Every result should retain source Dataset, author or
publication source where available, original Event, original Entity, and
temporal record.

This is only for intentionally available data. It does not imply private-diary
crawling, inference about unpublished journals, automatic publication of
related Entities, or disclosure of people mentioned in public Events. Future
publication filtering might publish an Event while keeping a related person,
Relation, or journal body private.

## Viewer and discovery placement

It remains open whether public reading and aggregation belong in the journal
application, a separate read-only E2R Journal Viewer/Aggregator, or a browser
extension. A possible GitHub-backed flow is:

```text
public journal repositories -> intentional discovery -> viewer/aggregator
    -> cross-Dataset Entity threads
```

Discovery could involve manifests, a Hub registry, explicit user-added URLs,
GitHub topics, or handoff links. No discovery protocol is defined. A possible
division is journal/viewer for reading source diaries, NarrativeLine for
general chronological editing, and LiaisonScape for relational graph
exploration; no application is required to own every presentation.

## Cross-diary open questions

- What evidence is sufficient to identify two Dataset-local Entities as the
  same subject?
- Should equivalence assertions belong to an overlay/workspace rather than
  source Datasets, and can users keep private mappings?
- Should authors publish stable external Entity references?
- How should changed place names, owners, addresses, closed cafes, and people
  with identical names be handled?
- How should conflicting cross-diary claims remain source-specific?
- Can threads remain non-destructive, cacheable, and restorable?
- How can publication filtering avoid leaking private related Entities?
- Should authoring and public reading be one application or separate apps?
- How should GitHub-backed discovery avoid indiscriminate crawling?

## Reader-owned cross-diary relations

A reader or author may want to relate an Event in their own journal to an
intentionally published Event or Entity in another journal without modifying
that source Dataset. For example, a reader's Event B42 may assert that it is
related to published Event A17. The assertion belongs to the reader's private
or published annotation/workspace layer; it does not imply target endorsement
or mutate the target Dataset, repository, metadata, or Relations.

This concept is not directly expressible by simply writing an ordinary Core
Relation across independent Datasets. Current Core Relations connect
Dataset-local Entity/Event endpoints. Existing Target Reference research does
not currently define cross-Dataset references. Cross-diary linking therefore
requires separate research into a reference, overlay, annotation layer, or
future Extension; it does not silently expand Core endpoint semantics.

A strong candidate is a reader-owned overlay that references published source
objects, may remain private or be optionally published, and can be removed
without changing either source diary. Copying source Events into a new Dataset
is not equivalent to referencing them and should require an explicit future
import or snapshot decision.

Possible visibility levels are:

- private relation, visible only to the reader;
- published outbound relation, visible to readers of the asserting source but
  not necessarily approved by the target author; and
- acknowledged or reciprocal relation, where another source publishes a
  compatible acknowledgement.

Reciprocity is not required for unilateral private or outbound linking and is
not objective truth. Entity threading remains distinct: it explores whether
Dataset-local Entities may represent the same cafe, person, or place, while an
authored cross-diary Relation says that a reader explicitly considers two
records related. They may coexist in one future overlay without becoming the
same assertion.

Readers could follow intentional links through source-aware sequences such as
“response to,” “reminded me of,” “same occasion,” or “another perspective,”
while preserving source and author context at every hop. These are possible
application meanings, not a Relation schema or Core relation types.

## Provenance, spam, and target lifecycle

Every cross-diary assertion should retain its asserting Dataset/source,
referenced Dataset/object, and available author or publication provenance. A
viewer must distinguish “source A says X” from “reader B says B42 relates to
A17,” rather than flattening both into one source-authoritative Relation.

Unilateral outbound links must not automatically become target-side promotion,
endorsement, ranking benefit, notification, or backlink. A malicious publisher
could otherwise mass-link unrelated popular diaries for attention. Viewers may
independently use followed-source filters, mute/block controls, rate or quality
heuristics, and curated inbound presentation. A target-side backlink index is
optional and, if shown, must be labelled as asserted by another source.

Discovery should be bounded rather than an indiscriminate crawl of the
Internet. Explicitly followed repositories, user-added sources, registries,
curated indexes, manifests, topics, or opt-in aggregators remain open options.

Cross-diary references also need lifecycle handling when a target Event is
edited, renamed, deleted, or moved with its repository or Dataset. A missing
target must remain distinguishable from a different object silently substituted
because it has the same name. This should follow the existing Target Reference
lifecycle research direction.

This is linked published-record exploration, not an automatic social network:
follower counts, likes, engagement ranking, unsolicited messaging, advertising,
and recommendation optimization are separate product decisions.

## Additional cross-diary open questions

- What is the smallest safe cross-Dataset target reference?
- Should reader-owned Relations live in an annotation Dataset or workspace?
- Can private Relations reference public objects without publishing anything?
- What makes a relation stable when a target repository or path changes?
- How should target deletion, renaming, and Dataset replacement appear?
- Should target authors ever receive inbound-link notifications?
- How can authors curate or suppress inbound relation presentation?
- Should acknowledged relations remain two independent assertions?
- How should mass-link publishers be filtered?
- Should inbound Relations default to followed or trusted sources only?
- Can Entity equivalence and authored Event-to-Event links share one overlay?
- How can public journals expose stable targets without leaking private related
  Entities?

## Directional acknowledgement and following

A cross-Dataset Relation is intrinsically directional. If Dataset B publishes
an assertion `B42 -> A17`, a reader consuming B's publication may traverse from
B42 to A17, but Dataset A has not been modified and does not thereby contain an
inferred `A17 -> B42` reverse link. A viewer-derived inbound-links view may
index and display B's assertion, but it must identify it as asserted by B and
must not imply that A accepted it.

If A chooses to acknowledge B's assertion, A should publish a separate,
target-owned acknowledgement rather than mutate B's Dataset. Possible
non-normative states include unacknowledged, acknowledged, revoked, and
changed-since-acknowledgement. This preserves independent ownership and allows
effective reciprocal navigation without inventing a shared bidirectional
Relation. Acknowledgement should be understood as acceptance of an observed
revision, not automatic endorsement of all future content at a live URL.

For Git-backed publication, future evidence could include the repository,
source path, Dataset/object identity, observed commit SHA, and optionally a
content hash. The live locator and accepted snapshot evidence serve different
purposes. If current content differs, a viewer could offer the accepted
revision, current revision, re-acknowledgement, or revocation; it should not
silently carry the acknowledgement forward. Revision identity also does not
guarantee future availability if a repository disappears, becomes private, or
rewrites history.

Following is a separate reader-owned subscription concept. A reader may
intentionally follow a published source, remembering a repository or source,
Dataset identity, path/ref, last observed revision, and reader-specific filter
state. Following does not modify the followed journal and does not require
reciprocity. Publication/revision time must remain distinct from Event time,
and successive revisions may contain new, edited, deleted, or changed
Relations without implying one Event per Git commit.

These ideas have conceptual precedent in hyperlinks, Trackback, Pingback,
Webmention, and RSS/Atom subscriptions: outbound reference, inbound notice,
receiver verification, re-verification after updates, and reader-owned
subscription are separable concerns. They are prior-art input, not protocols
adopted by E2R. Spam controls should include intentional acknowledgement,
followed/trusted-source filtering, changed-since warnings, revoke/mute/block,
and no automatic ranking benefit for mass-linking. If a source Relation is
deleted or rewritten, an acknowledging viewer may show that the source
assertion was removed while retaining the previously acknowledged revision.

Open research questions include whether acknowledgement belongs to an
annotation Dataset or viewer/workspace metadata; whether source and target
revisions should both be pinned; how rewritten history affects accepted
references; whether notifications and inbound-link views are opt-in; and how
public/private following, deletion, and feed classification should work.
