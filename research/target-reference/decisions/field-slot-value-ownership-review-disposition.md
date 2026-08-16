# Field Slot and Value-Level Ownership Review Disposition

Date: 2026-08-14

Status: Research disposition; non-normative

Review source: `field-slot-value-ownership-chatgpt-handoff.md` and the second
bounded review returned from ChatGPT.

## Overall decision

The separation between resolver state, field-slot identity, and value-level
information is accepted. The five resolver states remain unchanged. The
research harness was corrected so that it no longer interprets companion value
data or reports value semantics.

## Accepted corrections

1. `classifyTargetReference` now accepts only a reference and resolution
   context. Companion value data is not an input to, or output of, resolver
   classification.
2. A field slot is resolved against the identified owner target's supported
   field identities, not a namespace-wide field list.
3. Entity, Event, and Extension-owned record field slots are all represented
   in the research tests.
4. Alice → Bob → no current value leaves the slot resolver result unchanged.
   A separate companion datum remains Alice and is not rewritten.
5. A delete/retire operation does not determine resolver state. A retained
   identity may remain `resolved`; an absent identity may be `missing`.
6. Dataset-level target testing uses a research placeholder namespace and does
   not assign ownership to the Core namespace.

## Deferred questions

- whether value-level information is owned by Claim, Assessment, a snapshot
  record, or another future responsibility;
- whether a companion datum needs a persistent identity;
- the representation of complex values, absence, null, and unknown;
- field identity vocabulary and versioning;
- slot migration during record replacement; and
- historical applicability of value-level information.

## Not adopted

- Resolver output containing `slot-only` or `explicit-value-companion` labels.
- Namespace-wide field capability as sufficient proof of a field slot.
- Entity-only field-slot resolution.
- Automatic copying of current values into historical value-level data.
- Any final payload or Extension ownership decision for value-level data.

## Verification

The isolated research harness now has 14 passing tests, including:

- unchanged slot resolution across Alice, Bob, and no current value;
- companion value preservation outside the resolver;
- Event field-slot resolution;
- Extension-owned record field-slot resolution; and
- unsupported owner-target field identity classified as `unknown`.

No Core, Validator, NarrativeLine, Linkscape, or Stable Extension behavior was
changed.

## Next step

This bounded review can be closed. The next architecture task may proceed to a
separate responsibility question, such as the minimal Source/Citation workflow
or History vNext target scope. No value-level payload should be registered from
this review alone.
