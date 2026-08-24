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
