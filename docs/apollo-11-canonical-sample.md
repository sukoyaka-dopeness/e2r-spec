# Apollo 11 Canonical Sample

This document records the non-normative factual basis for
`examples/apollo-11-mission.en.e2r.json` and
`examples/apollo-11-mission.ja.e2r.json`. The JSON files are complete E2R
Datasets and remain the structural source of truth; this document records why
the selected Events and precision were chosen.

## Scope

The sample follows the mission from launch through recovery with 12 Events,
nine Entities, 11 natural Entity-to-Entity relationships, and Event-to-Entity
participation links, with the selected participants represented explicitly so
person-centered traversal remains useful in NarrativeLine. The sample has 66
Relations in total. It also includes natural
Entity-to-Entity relationships among the crew, NASA, spacecraft, launch
vehicle, Moon, and recovery ship. It intentionally does not add a generic
Apollo 11 Mission Entity, artificial self-Relations, or artificial parallel
Relations.

All recorded Event times use `Etc/UTC` and `+00:00`. The sample uses minute
precision for the selected mission milestones; it does not use Mission Elapsed
Time as a civil Time Zone or invent seconds.

## Source basis

The primary references are NASA's Apollo 11 Mission Report and NASA's Apollo 11
Mission Overview. The overview gives the launch at 9:32 a.m. EDT on July 16,
1969 and identifies Columbia, Eagle, the crew, and the recovery outcome. The
Mission Report supplies the mission-event sequence and mission elapsed timing
used to cross-check the UTC milestone values.

- [NASA Apollo 11 Mission Overview](https://www.nasa.gov/history/apollo-11-mission-overview/)
- [NASA Apollo 11 Mission Report](https://www.nasa.gov/wp-content/uploads/static/apollo50th/pdf/A11_MissionReport.pdf)
- [NASA Apollo 11 mission log](https://www.nasa.gov/wp-content/uploads/static/history/ap11ann/apollo11_log/log.htm)

The JSON intentionally records only milestones whose date and minute can be
represented consistently in the selected UTC timeline. This is a sample
selection policy, not a claim that the mission report contains no finer
operational detail.

## Interoperability boundary

The Coordinate Draft data is application-neutral payload preserved for
LiaisonScape graph display. NarrativeLine may ignore it while displaying the
same Events chronologically. No Core, History, Coordinate, Source/Citation,
Names, or Semantic design is introduced by this sample.
