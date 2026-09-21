# Public Sample H2 Migration and Self-Description Current-State Refresh

Date: 2026-09-22

Status: **LOCAL MIGRATION COMPLETE / PUBLIC WRITE AND RELEASE DEFERRED**

## Scope

The Human-approved public sample set was migrated in its owning repositories:

- e2r-spec canonical: Apollo 11 EN/JA, Ashen Crown EN/JA, Lighthouse Restoration EN/JA, Titanic EN/JA, and `examples/e2r-self-description.json`;
- e2r-narrative-line canonical: Berlin Wall EN/JA;
- e2r-liaison-scape mirror: Lighthouse Restoration EN/JA.

No Hub copy, User Guide, Validator package, application dependency, or public
deployment was changed.

## H2 contract

Each migrated Dataset now declares `history@2.0.0` through the existing
Specification Extension `uses` entry. Each existing H1 `history.time` value was
converted losslessly to one H2 `position` assertion with the existing Civil
Time fields and existing `temporalOrder` where present. No `circa`,
`bounded-point`, `temporal-extent`, multiple assertions, Relative Time, or
profile-claim field was introduced.

The five ordinary sample families and the Self-Description classify as
`stable-profile-supported` under the adopted `history@2.0.0 / position-circa`
profile. The History 2.0.0 Extension remains Candidate; this result does not
promote the broader History 2 surface.

## Self-Description refresh

The Self-Description now declares the Specification Extension used by its
Metadata, History 2.0.0, and Lineage Draft payloads. Its existing ten dated
milestones were converted without changing their Civil Time or chronology
values. Its current ecosystem descriptions now distinguish History 2.0.0
Candidate status from the adopted `position-circa` Stable profile and identify
profile-scoped Validator support. It remains an informative, experimental,
non-normative dogfood/technical entry.

## Preservation and parity evidence

- ordinary EN/JA entity, Event, Relation, ID/topology, and History values were preserved;
- Self-Description Core counts, Relations, Event values, and chronology were preserved;
- Lighthouse canonical and LiaisonScape mirror EN/JA files have matching SHA-256 hashes after migration;
- no migrated Dataset contains legacy `history.time`, `approximation`, or `features` fields;
- no public write, push, tag, deployment, package publication, or Initial Public Release declaration was performed.

## Validation

- `npm run validate` in e2r-spec: PASS;
- local e2r-validator 0.5.0: all 11 migrated files valid and
  `stable-profile-supported`; Self-Description retains only the known
  non-fatal `specification_unavailable` warning for the declared Lineage Draft;
- NarrativeLine: 257 tests PASS, lint PASS, build PASS;
- LiaisonScape: 636 tests PASS, lint PASS, build PASS.

Public release revision selection, rights/steward confirmation, package
publication, and deployment remain separate Human decisions.
