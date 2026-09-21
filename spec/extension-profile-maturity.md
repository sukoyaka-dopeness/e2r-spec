# Extension Profile Maturity Registry

Status: **Normative adopted Option 2 mechanism**

This document defines the registry authority for Stable support profiles within
an exact Extension specification version. It does not make an entire Candidate
version Stable and it does not add a Dataset profile-claim field.

## Identity and authority

An immutable profile is identified by the tuple:

```text
(Extension identifier, exact Extension version, profile identifier)
```

The machine-readable registry is
[`extension-profile-maturity-registry.json`](extension-profile-maturity-registry.json).
Its entries are normative and must not have their published meaning rewritten.
The registry is maintained with the E2R specification and is validated by the
repository registry gate.

The profile identifier is a compatibility identity. A future change that would
expand or reinterpret an existing profile requires a new profile identity or
an explicit revision contract approved as a separate compatibility decision.
The first adopted profile does not introduce a separate revision field; the
identity is immutable and any need for a versioned profile identity must be
reviewed before adding one.

## Separation from Dataset declarations

The Specification Extension `uses` and `features` fields remain facts about
the Extension specification version and Features actually used by a Dataset.
They are not Stable claims. A conforming Validator or consumer computes
profile matching from:

1. the exact declaration;
2. the declared Features; and
3. the actual payload constraints in the registry entry.

No new Dataset profile-claim field is defined by this registry.

## Maturity and composition

Maturity belongs to the complete profile contract. A Feature may be
independently supportable without being globally Stable. A profile may include
an unflagged base capability and semantic constraints that cannot be expressed
by the `features` array alone.

For the adopted `history@2.0.0 / position-circa` profile:

- `history@2.0.0` remains a Candidate specification version;
- the profile has Stable maturity;
- the base capability is exactly one `position` assertion per History payload;
- the position uses the exact Civil Time rules of History 2.0.0;
- `approximation: "circa"` is optional and position-level;
- bounded-point, temporal-extent, and multiple assertions do not match; and
- the accepted exact declaration and atomic H1 to H2 preservation/refusal
  contract remains part of the boundary.

A Dataset containing a known deferred capability is Candidate-supported or
read-only partial support, not Stable-profile-supported. Unknown or
unsupported Features remain preserved and unsafe edits remain refused under
the existing History 2 contract.

## Version and support claims

Profile maturity does not alter the exact Extension version. A consumer or
package must state both facts separately, for example:

```text
history@2.0.0: Candidate
history@2.0.0 / position-circa: Stable profile supported
```

The phrase `History 2 Stable` is not a valid substitute because it obscures
the Candidate status of the other History 2 capabilities. Future bounded-point
or temporal-extent profiles must be registered additively after their own
contracts are accepted.
